/**
 * apify-google-places.ts
 * Google Places scraper using Apify's `compass/crawler-google-places` actor.
 * Cleaner data than Booking.com, no TOS exposure, real Google ratings.
 *
 * Usage:
 *   npx tsx scripts/apify-google-places.ts --hotel="Hotel Sacher" --city="Vienna"
 *   npx tsx scripts/apify-google-places.ts --hotel="X" --city="Y" --raw
 */

import * as dotenv from 'dotenv'
import * as path from 'path'
dotenv.config({ path: path.join(process.cwd(), '.env.local') })
dotenv.config({ path: path.join(process.cwd(), '.env') })

const ACTOR_URL =
  'https://api.apify.com/v2/acts/compass~crawler-google-places/run-sync-get-dataset-items'

export interface GooglePlaceData {
  /** Official name from Google Maps. */
  name: string
  /** Postal address. */
  address: string
  latitude: number | null
  longitude: number | null
  /** Google primary category, e.g. "Hotel", "Luxury hotel". */
  categoryName: string
  /** Google rating, 0–5 (e.g. 4.6). */
  googleRating: number | null
  /** Total Google review count. */
  reviewCount: number | null
  /** Top photo URLs (already best-resolution variant Apify provides). */
  imageUrls: string[]
  description: string
  amenities: string[]
  /** Price tier label from Google ("$$", "$$$", etc.) or null. */
  priceLevel: string | null
  /** Free-form opening hours array (we keep raw). */
  openingHours: unknown[]
  /** Website URL if Google has one. */
  website: string
  /** Phone number. */
  phone: string
  /** Raw place id for debugging. */
  placeId: string
}

let CALL_COUNT = 0
const CALL_WARN_AT = 50

function getToken(): string {
  const t = process.env.APIFY_API_KEY
  if (!t) throw new Error('APIFY_API_KEY not set in env')
  return t
}

function asNum(v: unknown): number | null {
  if (typeof v === 'number' && Number.isFinite(v)) return v
  if (typeof v === 'string') {
    const n = Number(v.replace(/[^0-9.\-]/g, ''))
    return Number.isFinite(n) ? n : null
  }
  return null
}

function asStr(v: unknown, fallback = ''): string {
  return typeof v === 'string' ? v : fallback
}

function asStrArr(v: unknown): string[] {
  if (!Array.isArray(v)) return []
  const out: string[] = []
  for (const item of v) {
    if (typeof item === 'string') out.push(item)
    else if (item && typeof item === 'object') {
      const o = item as Record<string, unknown>
      const candidate =
        asStr(o.imageUrl) ||
        asStr(o.url) ||
        asStr(o.src) ||
        asStr(o.image) ||
        asStr(o.name)
      if (candidate) out.push(candidate)
    }
  }
  return out
}

function normalize(raw: Record<string, unknown>): GooglePlaceData {
  const name = asStr(raw.title) || asStr(raw.name)
  const address = asStr(raw.address) || asStr(raw.formattedAddress)

  const loc = raw.location as Record<string, unknown> | undefined
  const lat = asNum(loc?.lat) ?? asNum(raw.latitude)
  const lng = asNum(loc?.lng) ?? asNum(raw.longitude)

  const categoryName = asStr(raw.categoryName) || asStr(raw.category)
  const googleRating = asNum(raw.totalScore) ?? asNum(raw.rating)
  const reviewCount = asNum(raw.reviewsCount) ?? asNum(raw.reviews)

  // Images: compass actor returns `imageUrls` as string[] OR an array of
  // {imageUrl} objects depending on the run config; handle both.
  let imageUrls = asStrArr(raw.imageUrls)
  if (imageUrls.length === 0) imageUrls = asStrArr(raw.images)
  if (imageUrls.length === 0 && asStr(raw.imageUrl)) imageUrls = [asStr(raw.imageUrl)]

  const description = asStr(raw.description)

  // Amenities live in `additionalInfo` as { Category: [{ name, value }] }.
  const amenities: string[] = []
  const additional = raw.additionalInfo as Record<string, unknown> | undefined
  if (additional && typeof additional === 'object') {
    for (const v of Object.values(additional)) {
      if (Array.isArray(v)) {
        for (const item of v) {
          if (item && typeof item === 'object') {
            const o = item as Record<string, unknown>
            const key = Object.keys(o)[0]
            const val = o[key]
            if (val === true && typeof key === 'string') amenities.push(key)
          }
        }
      }
    }
  }

  const priceLevel = asStr(raw.price) || null
  const openingHoursRaw = raw.openingHours
  const openingHours: unknown[] = Array.isArray(openingHoursRaw) ? openingHoursRaw : []

  return {
    name,
    address,
    latitude: lat,
    longitude: lng,
    categoryName,
    googleRating,
    reviewCount,
    imageUrls,
    description,
    amenities,
    priceLevel,
    openingHours,
    website: asStr(raw.website) || asStr(raw.url),
    phone: asStr(raw.phone) || asStr(raw.phoneUnformatted),
    placeId: asStr(raw.placeId) || asStr(raw.placeID) || asStr(raw.id),
  }
}

async function callActor(searchString: string, maxItems = 1): Promise<unknown[] | null> {
  const token = getToken()
  CALL_COUNT++
  if (CALL_COUNT > CALL_WARN_AT) {
    console.warn(`[apify-gp] WARNING: call count ${CALL_COUNT} exceeds ${CALL_WARN_AT}`)
  }
  const url = `${ACTOR_URL}?token=${encodeURIComponent(token)}`
  const body: Record<string, unknown> = {
    searchStringsArray: [searchString],
    maxCrawledPlacesPerSearch: maxItems,
    language: 'en',
    countryCode: 'us',
    includeImages: true,
    maxImages: 10,
    scrapeReviewsPersonalData: false,
  }
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
    if (res.status === 429) {
      console.error(`[apify-gp] rate limited (429) for "${searchString}"`)
      return null
    }
    if (!res.ok) {
      const text = await res.text().catch(() => '')
      console.error(`[apify-gp] HTTP ${res.status} for "${searchString}" — ${text.slice(0, 200)}`)
      return null
    }
    const data = (await res.json()) as unknown
    if (!Array.isArray(data) || data.length === 0) {
      console.error(`[apify-gp] empty result for "${searchString}"`)
      return null
    }
    return data as unknown[]
  } catch (e) {
    console.error(`[apify-gp] fetch failed for "${searchString}": ${(e as Error).message}`)
    return null
  }
}

export async function fetchGooglePlace(
  hotelName: string,
  city: string,
): Promise<GooglePlaceData | null> {
  const search = `${hotelName} ${city}`.trim()
  const items = await callActor(search, 1)
  if (!items) return null
  const first = items.find(it => it && typeof it === 'object')
  if (!first) return null
  return normalize(first as Record<string, unknown>)
}

export async function fetchGooglePhotos(
  hotelName: string,
  city: string,
  count = 8,
): Promise<string[]> {
  const data = await fetchGooglePlace(hotelName, city)
  if (!data) return []
  return data.imageUrls.slice(0, count)
}

export function getGooglePlacesCallCount(): number {
  return CALL_COUNT
}

// CLI
async function main() {
  const args = process.argv.slice(2)
  let hotel = ''
  let city = ''
  let raw = false
  for (const a of args) {
    if (a.startsWith('--hotel=')) hotel = a.slice('--hotel='.length)
    else if (a.startsWith('--city=')) city = a.slice('--city='.length)
    else if (a === '--raw') raw = true
  }
  if (!hotel || !city) {
    console.error('Usage: tsx scripts/apify-google-places.ts --hotel="Name" --city="City" [--raw]')
    process.exit(1)
  }
  if (raw) {
    const items = await callActor(`${hotel} ${city}`, 1)
    console.log(JSON.stringify(items, null, 2))
    return
  }
  const data = await fetchGooglePlace(hotel, city)
  console.log(JSON.stringify(data, null, 2))
}

const isMain = (() => {
  try {
    return process.argv[1]?.endsWith('apify-google-places.ts')
  } catch {
    return false
  }
})()

if (isMain) {
  main().catch((e) => {
    console.error(e)
    process.exit(1)
  })
}
