/**
 * apify-hotels.ts
 * Booking.com scraper using Apify's voyager~booking-scraper actor.
 * Usage: npx tsx scripts/apify-hotels.ts --hotel="Hotel Sacher" --city="Vienna"
 */

import * as dotenv from 'dotenv'
import * as path from 'path'
dotenv.config({ path: path.join(process.cwd(), '.env.local') })
dotenv.config({ path: path.join(process.cwd(), '.env') })

const ACTOR_URL =
  'https://api.apify.com/v2/acts/voyager~booking-scraper/run-sync-get-dataset-items'

export interface ApifyHotelData {
  name: string
  address: string
  latitude: number | null
  longitude: number | null
  minPrice: number | null
  maxPrice: number | null
  starRating: number | null
  photos: string[]
  description: string
  amenities: string[]
  rating: number | null
  reviewCount: number | null
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
      if (typeof o.name === 'string') out.push(o.name)
      else if (typeof o.url === 'string') out.push(o.url)
      else if (typeof o.image === 'string') out.push(o.image)
    }
  }
  return out
}

function normalize(raw: Record<string, unknown>): ApifyHotelData {
  const name = asStr(raw.name) || asStr(raw.title) || asStr(raw.hotelName)

  const addressObj = raw.address as Record<string, unknown> | undefined
  const address =
    (addressObj && asStr(addressObj.full)) ||
    asStr(raw.address) ||
    asStr(raw.location) ||
    ''

  const locObj = raw.location as Record<string, unknown> | undefined
  const lat = asNum(raw.latitude) ?? asNum(locObj?.lat)
  const lng = asNum(raw.longitude) ?? asNum(locObj?.lng)

  // Price — top-level often null; mine rooms[].price.
  let minPrice: number | null = null
  let maxPrice: number | null = null
  const topPrice = asNum(raw.price)
  if (topPrice !== null) {
    minPrice = topPrice
    maxPrice = topPrice
  }
  if (Array.isArray(raw.rooms)) {
    const prices: number[] = []
    for (const r of raw.rooms as Array<Record<string, unknown>>) {
      const rp =
        asNum(r.price) ??
        asNum((r.price as Record<string, unknown> | undefined)?.value) ??
        asNum(r.totalPrice)
      if (rp !== null && rp > 0) prices.push(rp)
    }
    if (prices.length) {
      minPrice = minPrice === null ? Math.min(...prices) : Math.min(minPrice, ...prices)
      maxPrice = maxPrice === null ? Math.max(...prices) : Math.max(maxPrice, ...prices)
    }
  }

  const starRating = asNum(raw.stars) ?? asNum(raw.starRating)

  let photos = asStrArr(raw.images ?? [])
  if (photos.length === 0) {
    const single = asStr(raw.image)
    if (single) photos = [single]
  }

  const description = asStr(raw.description) || asStr(raw.summary) || ''

  // amenities from highlights[].contents flattened
  const amenities: string[] = []
  if (Array.isArray(raw.highlights)) {
    for (const h of raw.highlights as Array<Record<string, unknown>>) {
      const contents = h.contents
      if (Array.isArray(contents)) {
        for (const c of contents) {
          if (typeof c === 'string') amenities.push(c)
        }
      }
    }
  }
  for (const extra of asStrArr(raw.facilities ?? raw.amenities ?? raw.features ?? [])) {
    amenities.push(extra)
  }

  // rating: top-level number; reviews: top-level number
  const rating = asNum(raw.rating) ?? asNum(raw.reviewScore)
  const reviewCount = asNum(raw.reviews) ?? asNum(raw.reviewsCount) ?? asNum(raw.reviewCount)

  return {
    name,
    address,
    latitude: lat,
    longitude: lng,
    minPrice,
    maxPrice,
    starRating,
    photos,
    description,
    amenities,
    rating,
    reviewCount,
  }
}

async function callActor(
  search: string,
  maxItems = 1,
  stars: 'any' | '5' | '4' = 'any'
): Promise<unknown[] | null> {
  const token = getToken()
  CALL_COUNT++
  if (CALL_COUNT > CALL_WARN_AT) {
    console.warn(`[apify] WARNING: call count ${CALL_COUNT} exceeds ${CALL_WARN_AT}`)
  }
  const url = `${ACTOR_URL}?token=${encodeURIComponent(token)}`
  const body: Record<string, unknown> = {
    search,
    maxItems,
    language: 'en-us',
    currency: 'USD',
    sortBy: 'bayesian_review_score',
    starsCountFilter: stars,
  }
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
    if (res.status === 429) {
      console.error(`[apify] rate limited (429) for "${search}"`)
      return null
    }
    if (!res.ok) {
      console.error(`[apify] HTTP ${res.status} for "${search}"`)
      return null
    }
    const data = (await res.json()) as unknown
    if (!Array.isArray(data) || data.length === 0) {
      console.error(`[apify] empty result for "${search}"`)
      return null
    }
    return data as unknown[]
  } catch (e) {
    console.error(`[apify] fetch failed for "${search}": ${(e as Error).message}`)
    return null
  }
}

function normalizeName(s: string): string {
  return s
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9 ]/g, ' ')
    .replace(/\b(hotel|the|a|resort|spa|luxury|collection|by|hyatt|park|marriott)\b/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function nameMatch(target: string, candidate: string): number {
  const a = new Set(normalizeName(target).split(' ').filter((w) => w.length > 2))
  const b = new Set(normalizeName(candidate).split(' ').filter((w) => w.length > 2))
  if (a.size === 0) return 0
  let hits = 0
  for (const w of a) if (b.has(w)) hits++
  return hits / a.size
}

export async function fetchHotelData(
  hotelName: string,
  city: string
): Promise<ApifyHotelData | null> {
  // Booking actor's `search` is a destination — use the city, scrape top results,
  // then match by hotel name client-side.
  const items = await callActor(city, 25, 'any')
  if (!items) return null
  let bestScore = 0
  let best: Record<string, unknown> | null = null
  for (const it of items) {
    if (!it || typeof it !== 'object') continue
    const raw = it as Record<string, unknown>
    const candidate = asStr(raw.name) || asStr(raw.title) || asStr(raw.hotelName)
    const score = nameMatch(hotelName, candidate)
    if (score > bestScore) {
      bestScore = score
      best = raw
    }
  }
  if (!best || bestScore < 0.4) {
    console.error(`[apify] no name match for "${hotelName}" in "${city}" (best score ${bestScore.toFixed(2)})`)
    return null
  }
  return normalize(best)
}

export async function fetchHotelPhotos(
  hotelName: string,
  city: string,
  count = 8
): Promise<string[]> {
  const data = await fetchHotelData(hotelName, city)
  if (!data) return []
  return data.photos.slice(0, count)
}

export function getApifyCallCount(): number {
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
    console.error('Usage: tsx scripts/apify-hotels.ts --hotel="Name" --city="City" [--raw]')
    process.exit(1)
  }
  if (raw) {
    const items = await callActor(city, 25, 'any')
    console.log(JSON.stringify(items, null, 2))
    return
  }
  const data = await fetchHotelData(hotel, city)
  console.log(JSON.stringify(data, null, 2))
}

const isMain = (() => {
  try {
    return process.argv[1] && process.argv[1].endsWith('apify-hotels.ts')
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
