import * as fs from 'fs'
import * as path from 'path'
import sharp from 'sharp'

const PUBLIC_IMAGES_DIR = path.join(process.cwd(), 'public', 'images', 'hotels')

export interface ProcessedPhoto {
  url: string        // local path: /images/hotels/{slug}/{type}.webp
  alt: string
  type: 'hero' | 'room' | 'spa' | 'dining' | 'activity'
}

const QUALITY: Record<string, number> = {
  hero: 82,
  room: 75,
  spa: 75,
  dining: 75,
  activity: 72,
}

const MAX_WIDTH: Record<string, number> = {
  hero: 1400,
  room: 900,
  spa: 900,
  dining: 900,
  activity: 900,
}

async function downloadBuffer(url: string): Promise<Buffer | null> {
  try {
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 12000)
    const res = await fetch(url, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; myhoneymoonhotel-bot/1.0)',
        'Accept': 'image/webp,image/avif,image/*,*/*',
      },
    })
    clearTimeout(timeout)
    if (!res.ok) return null
    const contentType = res.headers.get('content-type') || ''
    if (!contentType.startsWith('image/')) return null
    const arrayBuffer = await res.arrayBuffer()
    return Buffer.from(arrayBuffer)
  } catch {
    return null
  }
}

export async function downloadAndCompressPhotos(
  slug: string,
  photos: { url: string; alt: string; type: string }[]
): Promise<ProcessedPhoto[]> {
  const slugDir = path.join(PUBLIC_IMAGES_DIR, slug)
  fs.mkdirSync(slugDir, { recursive: true })

  const processed: ProcessedPhoto[] = []
  const typeCount: Record<string, number> = {}

  for (const photo of photos) {
    if (!photo.url || photo.url.startsWith('/')) {
      // Already local
      processed.push({ url: photo.url, alt: photo.alt, type: photo.type as ProcessedPhoto['type'] })
      continue
    }

    const photoType = photo.type as keyof typeof QUALITY
    typeCount[photoType] = (typeCount[photoType] || 0) + 1
    const suffix = typeCount[photoType] > 1 ? `-${typeCount[photoType]}` : ''
    const filename = `${photoType}${suffix}.webp`
    const localPath = path.join(slugDir, filename)
    const publicPath = `/images/hotels/${slug}/${filename}`

    // Skip if already downloaded
    if (fs.existsSync(localPath)) {
      processed.push({ url: publicPath, alt: photo.alt, type: photoType as ProcessedPhoto['type'] })
      continue
    }

    const buf = await downloadBuffer(photo.url)
    if (!buf) {
      console.warn(`    [SKIP IMG] Failed to download: ${photo.url.slice(0, 60)}...`)
      continue
    }

    try {
      await sharp(buf)
        .resize({
          width: MAX_WIDTH[photoType] || 900,
          withoutEnlargement: true,
        })
        .webp({ quality: QUALITY[photoType] || 75, effort: 4 })
        .toFile(localPath)

      const stats = fs.statSync(localPath)
      const kb = Math.round(stats.size / 1024)
      console.log(`    ✓ ${filename} — ${kb}KB`)

      processed.push({ url: publicPath, alt: photo.alt, type: photoType as ProcessedPhoto['type'] })
    } catch (err) {
      console.warn(`    [SKIP IMG] sharp failed for ${photo.type}: ${err}`)
    }
  }

  return processed
}

export function getExistingLocalPhotos(slug: string): ProcessedPhoto[] | null {
  const slugDir = path.join(PUBLIC_IMAGES_DIR, slug)
  if (!fs.existsSync(slugDir)) return null

  const files = fs.readdirSync(slugDir).filter(f => f.endsWith('.webp'))
  if (files.length === 0) return null

  return files.map(f => {
    const type = f.replace(/(-\d+)?\.webp$/, '') as ProcessedPhoto['type']
    return {
      url: `/images/hotels/${slug}/${f}`,
      alt: `${slug.replace(/-/g, ' ')} — ${type}`,
      type,
    }
  })
}
