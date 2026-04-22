/**
 * Fetch real hotel photos from Google Places for a given list of hotel slugs.
 *
 * Usage:
 *   npx ts-node --project scripts/tsconfig.json \
 *     scripts/pipeline/fetch-photos-for-hotels.ts [slug1 slug2 ...]
 *
 * With no slugs, processes every hotel whose JSON has no local photos yet
 * (i.e. photos[0].url does not start with "/images/"). Idempotent — already
 * downloaded hotels are skipped, already-compressed WebP files are re-used.
 *
 * Environment: GOOGLE_PLACES_API_KEY in .env.local.
 */
import * as dotenv from 'dotenv'
import * as path from 'path'
dotenv.config({ path: path.join(process.cwd(), '.env.local') })
dotenv.config({ path: path.join(process.cwd(), '.env') })

import * as fs from 'fs'
import { downloadAndCompressPhotos } from './download-images'

const HOTELS_DIR = path.join(process.cwd(), 'data', 'hotels')
const CACHE_DIR = path.join(process.cwd(), 'data', 'cache')
const PLACES_SEARCH_URL = 'https://places.googleapis.com/v1/places:searchText'
const PLACES_PHOTO_URL = 'https://places.googleapis.com/v1'

interface PlacesPhoto { name: string; widthPx?: number; heightPx?: number }
interface PlaceResult { id: string; displayName?: { text?: string }; photos?: PlacesPhoto[] }
interface PlaceResponse { places?: PlaceResult[] }

const PHOTO_TYPES = ['hero', 'room', 'pool', 'spa', 'dining'] as const

function getApiKey(): string {
  const k = process.env.GOOGLE_PLACES_API_KEY
  if (!k) throw new Error('GOOGLE_PLACES_API_KEY missing from .env.local')
  return k
}

async function sleep(ms: number) { return new Promise(r => setTimeout(r, ms)) }

async function placesSearchRaw(query: string, restrictLodging: boolean): Promise<PlaceResponse> {
  fs.mkdirSync(CACHE_DIR, { recursive: true })
  const keySuffix = restrictLodging ? '' : '-any'
  const key = 'search-' + query.replace(/[^a-z0-9]+/gi, '-').toLowerCase() + keySuffix
  const cachePath = path.join(CACHE_DIR, key + '.json')
  if (fs.existsSync(cachePath)) {
    return JSON.parse(fs.readFileSync(cachePath, 'utf-8')) as PlaceResponse
  }
  const body: Record<string, unknown> = { textQuery: query, maxResultCount: 5, languageCode: 'en' }
  if (restrictLodging) body.includedType = 'lodging'
  const res = await fetch(PLACES_SEARCH_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Goog-Api-Key': getApiKey(),
      'X-Goog-FieldMask': 'places.id,places.displayName,places.photos',
    },
    body: JSON.stringify(body),
  })
  if (!res.ok) throw new Error(`Places API ${res.status}: ${await res.text()}`)
  const data = await res.json() as PlaceResponse
  fs.writeFileSync(cachePath, JSON.stringify(data, null, 2))
  return data
}

function tokenize(s: string): Set<string> {
  return new Set(
    s.toLowerCase()
      .replace(/[^a-z0-9]+/g, ' ')
      .split(/\s+/)
      .filter(w => w.length >= 3 && !['the', 'and', 'hotel', 'resort', 'spa', 'palace'].includes(w))
  )
}

function nameScore(expected: string, actual: string): number {
  const a = tokenize(expected)
  const b = tokenize(actual)
  if (a.size === 0) return 0
  let hits = 0
  for (const t of a) if (b.has(t)) hits++
  return hits / a.size
}

/**
 * Try progressively more permissive queries. For each, pick the best-matching
 * place by displayName similarity to the hotel name (guards against e.g.
 * "Mont Cervin Palace" matching "Grand Hôtel du Cervin" in a different city).
 */
async function placesSearch(name: string, destination: string): Promise<PlaceResponse> {
  const nameOnly = name.replace(/,.*$/, '').trim() // strip ", City" suffix
  const variants: Array<{ q: string; lodging: boolean }> = [
    { q: `${name} ${destination}`, lodging: true },
    { q: nameOnly, lodging: true },
    { q: `${name} ${destination}`, lodging: false },
    { q: nameOnly, lodging: false },
  ]

  let bestResp: PlaceResponse = {}
  let bestScore = -1
  let bestLabel = ''

  for (const v of variants) {
    const resp = await placesSearchRaw(v.q, v.lodging)
    for (const p of (resp.places ?? [])) {
      if (!p.photos || p.photos.length === 0) continue
      const s = nameScore(nameOnly, p.displayName?.text ?? '')
      if (s > bestScore) {
        bestScore = s
        bestResp = { places: [p] }
        bestLabel = `"${v.q}" (${v.lodging ? 'lodging' : 'any'}) → ${p.displayName?.text ?? p.id} [score ${s.toFixed(2)}]`
      }
    }
    // Early-exit if we already have a perfect-ish match
    if (bestScore >= 0.7) break
  }

  if (bestScore >= 0.5) {
    console.log(`    → matched via ${bestLabel}`)
    return bestResp
  }
  if (bestScore >= 0) {
    console.log(`    → weak match via ${bestLabel}`)
    return bestResp
  }
  return bestResp
}

async function resolvePhotoUrl(photoName: string, apiKey: string): Promise<string | null> {
  const url = `${PLACES_PHOTO_URL}/${photoName}/media?maxWidthPx=1400&skipHttpRedirect=false&key=${apiKey}`
  try {
    const ctrl = new AbortController()
    const t = setTimeout(() => ctrl.abort(), 15000)
    const res = await fetch(url, { signal: ctrl.signal, redirect: 'follow', headers: { 'Accept': 'image/*,*/*' } })
    clearTimeout(t)
    if (!res.ok) return null
    return res.url
  } catch { return null }
}

async function processHotel(jsonPath: string): Promise<'downloaded' | 'skipped' | 'failed'> {
  const hotel = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'))
  const slug: string = hotel.slug
  const name: string = hotel.name
  const destination: string = hotel.destination

  // Skip if all 5 photos are already local
  const allLocal = Array.isArray(hotel.photos) && hotel.photos.length >= 5 &&
    hotel.photos.every((p: { url: string }) => typeof p.url === 'string' && p.url.startsWith('/images/'))
  if (allLocal && fs.existsSync(path.join(process.cwd(), 'public', 'images', 'hotels', slug, 'hero.webp'))) {
    return 'skipped'
  }

  console.log(`\n[${slug}] Google Places search: name="${name}" destination="${destination}"`)
  let search: PlaceResponse
  try {
    search = await placesSearch(name, destination)
  } catch (e) {
    console.log(`  ✗ Search failed: ${(e as Error).message}`)
    return 'failed'
  }

  const place = search.places?.[0]
  if (!place || !place.photos || place.photos.length === 0) {
    console.log(`  ✗ No place / photos found`)
    return 'failed'
  }

  const apiKey = getApiKey()
  const rawPhotos: { url: string; alt: string; type: string }[] = []
  for (let i = 0; i < Math.min(place.photos.length, 5); i++) {
    const ph = place.photos[i]
    const type = PHOTO_TYPES[i] || 'activity'
    process.stdout.write(`  ${i + 1}/5 (${type})... `)
    const external = await resolvePhotoUrl(ph.name, apiKey)
    if (external) {
      rawPhotos.push({ url: external, alt: `${slug} — ${type}`, type })
      console.log('✓')
    } else {
      console.log('✗ no redirect')
    }
    await sleep(200)
  }

  if (rawPhotos.length === 0) return 'failed'

  const processed = await downloadAndCompressPhotos(slug, rawPhotos)
  if (processed.length === 0) return 'failed'

  hotel.photos = processed.map((p) => ({ url: p.url, alt: p.alt, type: p.type }))
  fs.writeFileSync(jsonPath, JSON.stringify(hotel, null, 2))
  console.log(`  ✓ ${processed.length} photos downloaded + JSON updated`)
  return 'downloaded'
}

async function main() {
  const argSlugs = process.argv.slice(2).filter(a => !a.startsWith('--'))
  const files = fs.readdirSync(HOTELS_DIR).filter(f => f.endsWith('.json'))

  const targets = argSlugs.length > 0
    ? argSlugs.map(s => path.join(HOTELS_DIR, s.endsWith('.json') ? s : s + '.json'))
    : files
        .map(f => path.join(HOTELS_DIR, f))
        .filter(p => {
          const h = JSON.parse(fs.readFileSync(p, 'utf-8'))
          if (!Array.isArray(h.photos) || h.photos.length === 0) return true
          return !h.photos.every((ph: { url: string }) => typeof ph.url === 'string' && ph.url.startsWith('/images/'))
        })

  console.log(`\n📸 Fetching real photos for ${targets.length} hotels via Google Places\n`)

  let downloaded = 0, skipped = 0, failed = 0
  for (const p of targets) {
    try {
      const r = await processHotel(p)
      if (r === 'downloaded') downloaded++
      else if (r === 'skipped') skipped++
      else failed++
    } catch (e) {
      console.log(`  ✗ Error: ${(e as Error).message}`)
      failed++
    }
  }

  console.log(`\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`)
  console.log(`✓ Downloaded: ${downloaded}`)
  console.log(`· Skipped (already local): ${skipped}`)
  console.log(`✗ Failed: ${failed}`)
  console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`)
  process.exit(failed > 0 ? 0 : 0)
}

main().catch(e => { console.error(e); process.exit(1) })
