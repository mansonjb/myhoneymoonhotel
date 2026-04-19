/**
 * fix-photos.ts
 * Re-fetches Google Places photos for hotels with bad hero images.
 * Filters to landscape-only photos (aspect ratio > 1.2) to avoid food shots.
 * Usage: npx ts-node --esm scripts/fix-photos.ts [--all] [--slug=<slug>]
 */

import * as dotenv from 'dotenv'
import * as path from 'path'
dotenv.config({ path: path.join(process.cwd(), '.env.local') })
dotenv.config({ path: path.join(process.cwd(), '.env') })

import * as fs from 'fs'
import sharp from 'sharp'

const PLACES_SEARCH_URL = 'https://places.googleapis.com/v1/places:searchText'
const IMAGES_DIR = path.join(process.cwd(), 'public', 'images', 'hotels')
const HOTELS_DIR = path.join(process.cwd(), 'data', 'hotels')
const PHOTOS_PER_HOTEL = 5
const MIN_LANDSCAPE_RATIO = 1.25  // width/height must exceed this

interface PlacesPhoto {
  name: string
  widthPx: number
  heightPx: number
}

interface PlacesResult {
  id: string
  displayName?: { text?: string }
  photos?: PlacesPhoto[]
}

function getApiKey(): string {
  const key = process.env.GOOGLE_PLACES_API_KEY
  if (!key) throw new Error('GOOGLE_PLACES_API_KEY not set')
  return key
}

function sleep(ms: number) {
  return new Promise(r => setTimeout(r, ms))
}

async function searchHotelOnPlaces(name: string, destination: string): Promise<PlacesResult | null> {
  const apiKey = getApiKey()
  const query = `${name} ${destination} hotel`

  const res = await fetch(PLACES_SEARCH_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Goog-Api-Key': apiKey,
      'X-Goog-FieldMask': 'places.id,places.displayName,places.photos',
    },
    body: JSON.stringify({ textQuery: query, maxResultCount: 1 }),
  })

  if (!res.ok) {
    console.warn(`  Places search failed (${res.status}): ${await res.text()}`)
    return null
  }

  const data = await res.json() as { places?: PlacesResult[] }
  return data.places?.[0] ?? null
}

async function downloadPhotoToBuffer(photoName: string, width = 1400): Promise<Buffer | null> {
  const apiKey = getApiKey()
  const url = `https://places.googleapis.com/v1/${photoName}/media?maxWidthPx=${width}&key=${apiKey}&skipHttpRedirect=true`

  const metaRes = await fetch(url)
  if (!metaRes.ok) return null

  const metaJson = await metaRes.json() as { photoUri?: string }
  const photoUri = metaJson.photoUri
  if (!photoUri) return null

  const imgRes = await fetch(photoUri)
  if (!imgRes.ok) return null

  return Buffer.from(await imgRes.arrayBuffer())
}

async function downloadLandscapePhotos(
  photos: PlacesPhoto[],
  slug: string,
  needed: number
): Promise<{ url: string; alt: string; type: string }[]> {
  const PHOTO_TYPES = ['hero', 'room', 'pool', 'spa', 'dining']
  const outDir = path.join(IMAGES_DIR, slug)
  fs.mkdirSync(outDir, { recursive: true })

  const results: { url: string; alt: string; type: string }[] = []
  let tried = 0

  for (const photo of photos) {
    if (results.length >= needed) break
    if (tried > photos.length * 2) break
    tried++

    // Skip photos with known non-landscape dimensions
    const ratio = photo.widthPx / photo.heightPx
    if (ratio < MIN_LANDSCAPE_RATIO) {
      console.log(`    [skip] portrait photo ${photo.widthPx}x${photo.heightPx} (ratio ${ratio.toFixed(2)})`)
      continue
    }

    try {
      console.log(`    Downloading photo ${results.length + 1}/${needed} (${photo.widthPx}x${photo.heightPx})...`)
      const buf = await downloadPhotoToBuffer(photo.name, 1400)
      if (!buf) { console.log('    [skip] failed to download'); continue }

      // Verify it's actually landscape after decoding
      const meta = await sharp(buf).metadata()
      const actualRatio = (meta.width ?? 1) / (meta.height ?? 1)
      if (actualRatio < MIN_LANDSCAPE_RATIO) {
        console.log(`    [skip] decoded ratio ${actualRatio.toFixed(2)} < ${MIN_LANDSCAPE_RATIO}`)
        continue
      }

      const typeKey = PHOTO_TYPES[results.length] ?? `photo${results.length}`
      const outPath = path.join(outDir, `${typeKey}.webp`)
      const quality = typeKey === 'hero' ? 82 : 75
      const maxWidth = typeKey === 'hero' ? 1400 : 900

      await sharp(buf)
        .resize(maxWidth, undefined, { withoutEnlargement: true })
        .webp({ quality })
        .toFile(outPath)

      const fileSizeKB = Math.round(fs.statSync(outPath).size / 1024)
      console.log(`    ✅ ${typeKey}.webp  ${fileSizeKB}KB`)
      results.push({ url: `/images/hotels/${slug}/${typeKey}.webp`, alt: `${slug} — ${typeKey}`, type: typeKey })

      await sleep(200)
    } catch (e) {
      console.warn(`    [error] ${e}`)
    }
  }

  return results
}

async function fixHotel(hotelFile: string, force = false): Promise<void> {
  const hotelData = JSON.parse(fs.readFileSync(hotelFile, 'utf-8'))
  const { slug, name, destination } = hotelData

  // Check if hero needs fixing
  const heroPath = path.join(IMAGES_DIR, slug, 'hero.webp')
  if (!force && fs.existsSync(heroPath)) {
    // Check if hero is landscape
    const meta = await sharp(heroPath).metadata()
    const ratio = (meta.width ?? 1) / (meta.height ?? 1)
    if (ratio >= MIN_LANDSCAPE_RATIO) {
      console.log(`  [ok] ${slug}  hero is landscape (${ratio.toFixed(2)})`)
      return
    }
    console.log(`  [fix] ${slug}  hero ratio ${ratio.toFixed(2)} < ${MIN_LANDSCAPE_RATIO} — refetching`)
  }

  console.log(`  Searching Places for: ${name}...`)
  const place = await searchHotelOnPlaces(name, destination.replace(/-/g, ' '))

  if (!place) {
    console.log(`  [skip] No Places result for ${slug}`)
    return
  }

  const photos = place.photos ?? []
  console.log(`  Found ${photos.length} photos on Places`)

  if (photos.length === 0) {
    console.log(`  [skip] No photos available`)
    return
  }

  // Sort by landscape-ness (most landscape first)
  const sorted = [...photos].sort((a, b) => (b.widthPx / b.heightPx) - (a.widthPx / a.heightPx))

  const newPhotos = await downloadLandscapePhotos(sorted, slug, PHOTOS_PER_HOTEL)

  if (newPhotos.length === 0) {
    console.log(`  [skip] No landscape photos found for ${slug}`)
    return
  }

  // Update hotel JSON
  hotelData.photos = newPhotos
  fs.writeFileSync(hotelFile, JSON.stringify(hotelData, null, 2))
  console.log(`  ✅ Updated ${slug} with ${newPhotos.length} landscape photos`)
}

async function main() {
  const args = process.argv.slice(2)
  const forceAll = args.includes('--all')
  const slugArg = args.find(a => a.startsWith('--slug='))?.split('=')?.[1]

  const files = fs.readdirSync(HOTELS_DIR)
    .filter(f => f.endsWith('.json'))
    .map(f => path.join(HOTELS_DIR, f))

  const toProcess = slugArg
    ? files.filter(f => f.includes(slugArg))
    : files

  console.log(`\n📸 fix-photos — ${toProcess.length} hotels to check\n`)

  for (const file of toProcess) {
    await fixHotel(file, forceAll)
    await sleep(300)
  }

  console.log('\n✅ Done')
}

main().catch(console.error)
