import * as cheerio from 'cheerio'
import * as fs from 'fs'
import * as path from 'path'

const CACHE_DIR = path.join(process.cwd(), 'data', 'cache')

interface SerpApiImage {
  original_image?: string
  image?: string
}

interface SerpApiResult {
  amenities?: string[]
  images?: SerpApiImage[]
  overall_rating?: number
  rate_per_night?: {
    lowest?: number
    highest?: number
  }
  location?: string
}

interface SerpApiResponse {
  properties?: SerpApiResult[]
  hotels_results?: SerpApiResult[]
}

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

async function fetchWithCache(url: string, cacheKey: string): Promise<string> {
  const cachePath = path.join(CACHE_DIR, `${cacheKey}.html`)
  if (fs.existsSync(cachePath)) {
    return fs.readFileSync(cachePath, 'utf-8')
  }
  const res = await fetch(url, {
    headers: { 'User-Agent': 'Mozilla/5.0 (compatible; research-bot/1.0)' }
  })
  const text = await res.text()
  fs.mkdirSync(CACHE_DIR, { recursive: true })
  fs.writeFileSync(cachePath, text)
  return text
}

export interface RawHotel {
  name: string
  slug: string
  destination: string
  country: string
  stars: number
  adults_only: boolean
  amenities: string[]
  photos: { url: string; alt: string; type: string }[]
  experience_types: string[]
  price_per_night_usd: { min: number; max: number }
  couples_review_pct?: number
  tripadvisor_award?: boolean
  price_tier?: 'budget' | 'mid' | 'luxury' | 'ultra-luxury'
  tripadvisor_rating?: number
}

export async function collectHotelsForDestination(destination: string, limit = 50): Promise<RawHotel[]> {
  const hotels: RawHotel[] = []

  // Fetch from TravelMyth honeymoon category
  const url = `https://www.travelmyth.com/${destination}/Hotels/honeymoon`
  let html: string
  try {
    html = await fetchWithCache(url, `travelmyth-${destination}`)
  } catch {
    console.warn(`[WARN] TravelMyth fetch failed for ${destination}, using empty list`)
    return []
  }

  const $ = cheerio.load(html)

  // Extract hotel cards from TravelMyth
  $('.hotel-card, [class*="hotel"], article[data-hotel]').each((i, el) => {
    if (i >= limit) return false

    const name = $(el).find('h2, h3, [class*="name"], [class*="title"]').first().text().trim()
    if (!name) return

    const slug = slugify(name)
    const stars = parseInt($(el).find('[class*="star"]').text().match(/\d/)?.[0] ?? '4')
    const adultsOnly = $(el).text().toLowerCase().includes('adults only') ||
                       $(el).text().toLowerCase().includes('adults-only')

    hotels.push({
      name,
      slug: `${slug}-${destination}`,
      destination: slugify(destination),
      country: slugify(destination), // will be refined by SerpApi
      stars: isNaN(stars) ? 4 : stars,
      adults_only: adultsOnly,
      amenities: [],
      photos: [],
      experience_types: ['luxury'],
      price_per_night_usd: { min: 200, max: 800 },
    })
  })

  // If TravelMyth parsing yields no results, create seed hotels for well-known destinations
  if (hotels.length === 0) {
    console.warn(`[WARN] No hotels parsed from TravelMyth for ${destination}. Using seed data.`)
    return getSeedHotels(destination)
  }

  // Enrich with SerpApi if key available
  if (process.env.SERPAPI_KEY) {
    for (const hotel of hotels.slice(0, Math.min(limit, 10))) {
      await enrichWithSerpApi(hotel, destination)
      await sleep(500) // rate limiting
    }
  }

  return hotels
}

async function enrichWithSerpApi(hotel: RawHotel, destination: string): Promise<void> {
  const cacheKey = `serpapi-${hotel.slug}`
  const cachePath = path.join(CACHE_DIR, `${cacheKey}.json`)

  let data: SerpApiResponse
  if (fs.existsSync(cachePath)) {
    data = JSON.parse(fs.readFileSync(cachePath, 'utf-8')) as SerpApiResponse
  } else {
    try {
      const query = encodeURIComponent(`${hotel.name} ${destination} hotel`)
      const url = `https://serpapi.com/search.json?engine=google_hotels&q=${query}&api_key=${process.env.SERPAPI_KEY}&num=1`
      const res = await fetch(url)
      data = await res.json() as SerpApiResponse
      fs.writeFileSync(cachePath, JSON.stringify(data, null, 2))
    } catch {
      console.warn(`[WARN] SerpApi failed for ${hotel.name}`)
      return
    }
  }

  const result = data?.properties?.[0] || data?.hotels_results?.[0]
  if (!result) return

  if (result.amenities) hotel.amenities = result.amenities
  if (result.images) {
    hotel.photos = result.images.slice(0, 5).map((img, i) => ({
      url: img.original_image || img.image || '',
      alt: `${hotel.name} - ${['room', 'view', 'spa', 'dining', 'pool'][i] || 'hotel'}`,
      type: (['hero', 'room', 'spa', 'dining', 'activity'] as const)[i] || 'hero'
    }))
  }
  if (result.overall_rating) hotel.tripadvisor_rating = result.overall_rating
  if (result.rate_per_night) {
    hotel.price_per_night_usd = {
      min: result.rate_per_night.lowest || 200,
      max: result.rate_per_night.highest || 800
    }
  }
  if (result.location) hotel.country = slugify(result.location.split(',').pop()?.trim() || destination)
}

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

// Seed hotels for demo/testing when TravelMyth returns no results
function getSeedHotels(destination: string): RawHotel[] {
  const seeds: Record<string, RawHotel[]> = {
    maldives: [
      {
        name: 'Conrad Maldives Rangali Island',
        slug: 'conrad-maldives-rangali-island',
        destination: 'maldives',
        country: 'maldives',
        stars: 5,
        adults_only: false,
        amenities: ['spa', 'pool', 'beach', 'room service', 'overwater villas', 'snorkeling'],
        photos: [],
        experience_types: ['overwater-bungalows', 'luxury'],
        price_per_night_usd: { min: 800, max: 3000 },
        couples_review_pct: 78,
        tripadvisor_award: true,
        price_tier: 'luxury',
      },
      {
        name: 'Four Seasons Resort Maldives at Landaa Giraavaru',
        slug: 'four-seasons-maldives-landaa-giraavaru',
        destination: 'maldives',
        country: 'maldives',
        stars: 5,
        adults_only: false,
        amenities: ['spa', 'pool', 'beach', 'room service', 'overwater villas', 'butler service'],
        photos: [],
        experience_types: ['overwater-bungalows', 'luxury'],
        price_per_night_usd: { min: 1500, max: 5000 },
        couples_review_pct: 82,
        tripadvisor_award: true,
        price_tier: 'ultra-luxury',
      },
    ],
    bali: [
      {
        name: 'COMO Uma Ubud',
        slug: 'como-uma-ubud',
        destination: 'bali',
        country: 'indonesia',
        stars: 5,
        adults_only: false,
        amenities: ['spa', 'pool', 'room service', 'yoga'],
        photos: [],
        experience_types: ['luxury', 'wellness'],
        price_per_night_usd: { min: 300, max: 900 },
        couples_review_pct: 71,
        tripadvisor_award: false,
        price_tier: 'luxury',
      },
    ],
  }
  return seeds[destination.toLowerCase()] || []
}
