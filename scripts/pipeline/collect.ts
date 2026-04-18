import * as fs from 'fs'
import * as path from 'path'

const CACHE_DIR = path.join(process.cwd(), 'data', 'cache')
const PLACES_SEARCH_URL = 'https://places.googleapis.com/v1/places:searchText'
const PLACES_PHOTO_URL = 'https://places.googleapis.com/v1'

// ── Types ────────────────────────────────────────────────────────────────────

interface PlacesPhoto {
  name: string          // "places/{placeId}/photos/{photoRef}"
  widthPx: number
  heightPx: number
}

interface PlacesReview {
  text?: { text?: string }
  rating?: number
}

interface PlacesResult {
  id: string
  displayName?: { text?: string }
  rating?: number
  userRatingCount?: number
  priceLevel?: string   // PRICE_LEVEL_EXPENSIVE, etc.
  formattedAddress?: string
  photos?: PlacesPhoto[]
  types?: string[]
  reviews?: PlacesReview[]
}

interface PlacesSearchResponse {
  places?: PlacesResult[]
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

// ── Helpers ──────────────────────────────────────────────────────────────────

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

function getApiKey(): string {
  const key = process.env.GOOGLE_PLACES_API_KEY
  if (!key) throw new Error('GOOGLE_PLACES_API_KEY not set in environment')
  return key
}

// ── Price mapping ─────────────────────────────────────────────────────────────

const PRICE_RANGES: Record<string, { min: number; max: number; tier: RawHotel['price_tier'] }> = {
  PRICE_LEVEL_FREE:          { min: 50,   max: 150,  tier: 'budget' },
  PRICE_LEVEL_INEXPENSIVE:   { min: 100,  max: 300,  tier: 'budget' },
  PRICE_LEVEL_MODERATE:      { min: 250,  max: 600,  tier: 'mid' },
  PRICE_LEVEL_EXPENSIVE:     { min: 500,  max: 1500, tier: 'luxury' },
  PRICE_LEVEL_VERY_EXPENSIVE:{ min: 1200, max: 5000, tier: 'ultra-luxury' },
}

function mapPriceLevel(priceLevel?: string): { min: number; max: number; tier: RawHotel['price_tier'] } {
  return PRICE_RANGES[priceLevel ?? ''] ?? { min: 400, max: 1200, tier: 'luxury' }
}

// ── Amenity / type inference ──────────────────────────────────────────────────

const AMENITY_KEYWORDS: Record<string, string> = {
  spa: 'spa',
  pool: 'pool',
  beach: 'beach',
  overwater: 'overwater villas',
  bungalow: 'overwater villas',
  butler: 'butler service',
  'room service': 'room service',
  dive: 'diving',
  snorkel: 'snorkeling',
  yoga: 'yoga',
  tennis: 'tennis',
  golf: 'golf',
  safari: 'game drives',
}

const ADULTS_ONLY_KEYWORDS = ['adults only', 'adults-only', 'no children', '18+', 'adults only resort']

function inferFromText(reviewText: string, types: string[]): {
  amenities: string[]
  adults_only: boolean
  experience_types: string[]
} {
  const lower = reviewText.toLowerCase()
  const amenities = new Set<string>()
  const experience_types = new Set<string>(['luxury'])

  // Amenities from review text
  for (const [keyword, amenity] of Object.entries(AMENITY_KEYWORDS)) {
    if (lower.includes(keyword)) amenities.add(amenity)
  }

  // Always add room service for luxury hotels
  amenities.add('room service')

  // Adults-only detection
  const adults_only = ADULTS_ONLY_KEYWORDS.some(kw => lower.includes(kw))

  // Experience types
  if (lower.includes('overwater') || lower.includes('bungalow') || lower.includes('lagoon')) {
    experience_types.add('overwater-bungalows')
  }
  if (lower.includes('safari') || lower.includes('game drive') || lower.includes('wildlife')) {
    experience_types.add('safari')
  }
  if (lower.includes('wellness') || lower.includes('yoga') || lower.includes('meditation')) {
    experience_types.add('wellness')
  }
  if (lower.includes('beach') || lower.includes('ocean') || lower.includes('sea')) {
    experience_types.add('beach')
  }
  if (adults_only) experience_types.add('adults-only')

  // From Google place types
  for (const t of types) {
    if (t.includes('resort')) experience_types.add('resort')
  }

  return {
    amenities: Array.from(amenities),
    adults_only,
    experience_types: Array.from(experience_types),
  }
}

// ── Google Places photo download ──────────────────────────────────────────────

async function fetchPhotoUrl(photoName: string, apiKey: string): Promise<string | null> {
  const url = `${PLACES_PHOTO_URL}/${photoName}/media?maxWidthPx=1400&skipHttpRedirect=false&key=${apiKey}`
  try {
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 15000)
    // The photo endpoint returns a redirect — fetch follows it by default
    const res = await fetch(url, {
      signal: controller.signal,
      redirect: 'follow',
      headers: { 'Accept': 'image/*,*/*' },
    })
    clearTimeout(timeout)
    if (!res.ok) return null
    // Return the final URL after redirect
    return res.url
  } catch {
    return null
  }
}

// ── Main search ───────────────────────────────────────────────────────────────

async function searchPlaces(query: string, cacheKey: string): Promise<PlacesSearchResponse> {
  fs.mkdirSync(CACHE_DIR, { recursive: true })
  const cachePath = path.join(CACHE_DIR, `${cacheKey}.json`)

  if (fs.existsSync(cachePath)) {
    console.log(`  [CACHE] ${cacheKey}`)
    return JSON.parse(fs.readFileSync(cachePath, 'utf-8')) as PlacesSearchResponse
  }

  const apiKey = getApiKey()
  console.log(`  [FETCH] Google Places: "${query}"`)

  const res = await fetch(PLACES_SEARCH_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Goog-Api-Key': apiKey,
      'X-Goog-FieldMask': [
        'places.id',
        'places.displayName',
        'places.rating',
        'places.userRatingCount',
        'places.priceLevel',
        'places.formattedAddress',
        'places.photos',
        'places.types',
        'places.reviews',
      ].join(','),
    },
    body: JSON.stringify({
      textQuery: query,
      includedType: 'lodging',
      maxResultCount: 20,
      languageCode: 'en',
    }),
  })

  if (!res.ok) {
    const errText = await res.text()
    throw new Error(`Places API error ${res.status}: ${errText}`)
  }

  const data = await res.json() as PlacesSearchResponse
  fs.writeFileSync(cachePath, JSON.stringify(data, null, 2))
  return data
}

// ── Enrich with photos ────────────────────────────────────────────────────────

async function processHotelPhotos(hotel: RawHotel, googlePhotos: PlacesPhoto[]): Promise<void> {
  if (!googlePhotos || googlePhotos.length === 0) return

  const apiKey = getApiKey()
  const { downloadAndCompressPhotos } = await import('./download-images')

  const PHOTO_TYPES = ['hero', 'room', 'spa', 'dining', 'activity'] as const
  const rawPhotos: { url: string; alt: string; type: string }[] = []

  for (let i = 0; i < Math.min(googlePhotos.length, 5); i++) {
    const photo = googlePhotos[i]
    const type = PHOTO_TYPES[i] || 'activity'
    console.log(`    Resolving photo ${i + 1}/5 (${type})...`)

    const externalUrl = await fetchPhotoUrl(photo.name, apiKey)
    if (externalUrl) {
      rawPhotos.push({
        url: externalUrl,
        alt: `${hotel.name} — ${type}`,
        type,
      })
    }
    await sleep(200) // gentle rate limiting between photo fetches
  }

  if (rawPhotos.length > 0) {
    const processed = await downloadAndCompressPhotos(hotel.slug, rawPhotos)
    hotel.photos = processed
  }
}

// ── Convert Places result → RawHotel ─────────────────────────────────────────

function placeToHotel(place: PlacesResult, destination: string): RawHotel | null {
  const name = place.displayName?.text
  if (!name) return null

  // Skip non-hotel entries (restaurants, activities, etc.)
  const types = place.types || []
  const isHotel = types.some(t =>
    ['lodging', 'hotel', 'resort_hotel', 'extended_stay_hotel', 'motel', 'hostel'].includes(t)
  )
  if (!isHotel && !name.toLowerCase().match(/hotel|resort|lodge|villa|retreat|island/)) {
    return null
  }

  // Combine all review text for inference
  const reviewText = (place.reviews || [])
    .map(r => r.text?.text || '')
    .join(' ')

  const { amenities, adults_only, experience_types } = inferFromText(reviewText, types)
  const priceData = mapPriceLevel(place.priceLevel)

  // Extract country from address (last comma-delimited segment)
  const address = place.formattedAddress || ''
  const addressParts = address.split(',').map(s => s.trim())
  const countryRaw = addressParts[addressParts.length - 1] || destination

  // Build slug: use hotel name + destination for uniqueness
  const slug = `${slugify(name)}-${slugify(destination)}`

  const hotel: RawHotel = {
    name,
    slug,
    destination: slugify(destination),
    country: slugify(countryRaw),
    stars: place.priceLevel === 'PRICE_LEVEL_VERY_EXPENSIVE' ? 5 :
           place.priceLevel === 'PRICE_LEVEL_EXPENSIVE' ? 5 : 4,
    adults_only,
    amenities,
    photos: [],
    experience_types,
    price_per_night_usd: { min: priceData.min, max: priceData.max },
    price_tier: priceData.tier,
    tripadvisor_rating: place.rating,
    couples_review_pct: estimateCouplesPct(reviewText),
    tripadvisor_award: place.userRatingCount !== undefined && place.userRatingCount > 500 && (place.rating || 0) >= 4.5,
  }

  return hotel
}

function estimateCouplesPct(reviewText: string): number {
  const lower = reviewText.toLowerCase()
  const coupleWords = ['honeymoon', 'romantic', 'anniversary', 'couple', 'partner', 'husband', 'wife', 'fiance', 'spouse']
  const matches = coupleWords.filter(w => lower.includes(w)).length
  // Rough heuristic: more couple keywords → higher estimated %
  return Math.min(85, 40 + matches * 6)
}

// ── Destination search queries ────────────────────────────────────────────────

// Multiple search queries per destination to get diverse results
const DESTINATION_QUERIES: Record<string, string[]> = {
  maldives: [
    'best luxury honeymoon resort Maldives overwater bungalow',
    'romantic adults only resort Maldives',
    'luxury water villa Maldives',
  ],
  'bora-bora': [
    'best luxury honeymoon resort Bora Bora overwater bungalow',
    'romantic overwater villa Bora Bora French Polynesia',
  ],
  'st-lucia': [
    'best luxury honeymoon resort Saint Lucia',
    'romantic adults only resort St Lucia Caribbean',
  ],
  'turks-and-caicos': [
    'luxury honeymoon resort Turks and Caicos',
    'romantic adults only resort Providenciales',
  ],
  seychelles: [
    'luxury honeymoon resort Seychelles',
    'romantic private island resort Seychelles',
  ],
  bali: [
    'luxury honeymoon resort Bali adults only',
    'romantic villa resort Ubud Bali',
  ],
  santorini: [
    'luxury honeymoon hotel Santorini cave villa',
    'romantic caldera view hotel Santorini',
  ],
  amalfi: [
    'luxury honeymoon hotel Amalfi Coast',
    'romantic clifftop hotel Positano',
  ],
  hawaii: [
    'best luxury honeymoon resort Hawaii adults only',
    'romantic beachfront resort Maui Hawaii',
  ],
  'costa-rica': [
    'luxury honeymoon eco resort Costa Rica',
    'romantic jungle resort Costa Rica',
  ],
  thailand: [
    'luxury honeymoon resort Koh Samui Thailand',
    'romantic beach villa Thailand',
  ],
  'south-africa': [
    'luxury honeymoon safari lodge South Africa',
    'romantic adults only game reserve South Africa',
  ],
  tanzania: [
    'luxury safari honeymoon lodge Tanzania Serengeti',
    'romantic tented camp Serengeti Tanzania',
  ],
  zanzibar: [
    'luxury honeymoon resort Zanzibar beach',
    'romantic adults only resort Zanzibar Tanzania',
  ],
  mauritius: [
    'luxury honeymoon resort Mauritius adults only',
    'romantic beachfront villa Mauritius',
  ],
  'french-polynesia': [
    'luxury honeymoon resort Tahiti overwater bungalow',
    'romantic overwater villa French Polynesia',
  ],
  'new-caledonia': [
    'luxury honeymoon resort New Caledonia',
  ],
  macao: [
    'luxury honeymoon hotel Macau',
  ],
  kenya: [
    'luxury honeymoon safari lodge Kenya Masai Mara',
    'romantic tented camp Amboseli Kenya',
  ],
  indonesia: [
    'luxury honeymoon resort Lombok Indonesia',
    'romantic beach resort Komodo Indonesia',
  ],
  cambodia: [
    'luxury honeymoon resort Siem Reap Cambodia',
  ],
  vietnam: [
    'luxury honeymoon resort Ha Long Bay Vietnam',
    'romantic beachfront resort Da Nang Vietnam',
  ],
  philippines: [
    'luxury honeymoon resort Palawan Philippines',
    'romantic beach villa El Nido Philippines',
  ],
  sri_lanka: [
    'luxury honeymoon resort Sri Lanka beach',
  ],
  greece: [
    'luxury honeymoon hotel Mykonos Greece',
    'romantic caldera hotel Oia Santorini',
  ],
  italy: [
    'luxury honeymoon hotel Lake Como Italy',
    'romantic cliffside hotel Amalfi',
  ],
  spain: [
    'luxury honeymoon hotel Ibiza Spain',
    'romantic boutique hotel Mallorca',
  ],
  mexico: [
    'luxury honeymoon resort Tulum Mexico adults only',
    'romantic all-inclusive resort Riviera Maya',
  ],
  'caribbean': [
    'luxury honeymoon resort Caribbean adults only',
    'romantic beachfront resort St Barts',
  ],
}

// ── Public API ────────────────────────────────────────────────────────────────

export async function collectHotelsForDestination(destination: string, limit = 30): Promise<RawHotel[]> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY
  if (!apiKey) {
    console.warn('[WARN] GOOGLE_PLACES_API_KEY not set — using seed data')
    return getSeedHotels(destination)
  }

  const queries = DESTINATION_QUERIES[destination.toLowerCase()] || [
    `best luxury honeymoon hotel ${destination}`,
    `romantic resort ${destination}`,
  ]

  const seenSlugs = new Set<string>()
  const hotels: RawHotel[] = []

  for (const query of queries) {
    if (hotels.length >= limit) break

    const cacheKey = `places-${slugify(query)}`
    let data: PlacesSearchResponse

    try {
      data = await searchPlaces(query, cacheKey)
    } catch (err) {
      console.warn(`[WARN] Places search failed: ${err}`)
      continue
    }

    const places = data.places || []
    console.log(`  → Found ${places.length} places for: "${query}"`)

    for (const place of places) {
      if (hotels.length >= limit) break

      const hotel = placeToHotel(place, destination)
      if (!hotel) continue
      if (seenSlugs.has(hotel.slug)) continue
      seenSlugs.add(hotel.slug)

      // Fetch and compress photos
      if (place.photos && place.photos.length > 0) {
        console.log(`  → Processing photos for: ${hotel.name}`)
        await processHotelPhotos(hotel, place.photos)
        await sleep(300)
      }

      hotels.push(hotel)
      console.log(`  ✓ Collected: ${hotel.name} (${hotel.country})`)
    }

    // Polite delay between queries
    if (queries.indexOf(query) < queries.length - 1) {
      await sleep(1000)
    }
  }

  if (hotels.length === 0) {
    console.warn(`[WARN] No hotels found for ${destination} via Places API. Using seed data.`)
    return getSeedHotels(destination)
  }

  return hotels.slice(0, limit)
}

// ── Seed hotels (fallback when API unavailable) ───────────────────────────────

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
        slug: 'como-uma-ubud-bali',
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
