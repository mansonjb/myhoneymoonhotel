/**
 * generate-hotel-comparisons.ts
 * One-off generator: picks 100 hotel-vs-hotel pairings and emits
 *   - data/hotel-comparisons/[slug].ts (one file per pair)
 *   - data/hotel-comparisons/index.ts (exports HOTEL_COMPARISONS + getAllHotelComparisonSlugs)
 * Usage: npx ts-node --esm scripts/generate-hotel-comparisons.ts
 */

import * as fs from 'fs'
import * as path from 'path'

interface HotelLite {
  slug: string
  name: string
  destination: string
  country: string
  experience_types: string[]
  honeymoon_score: number
  stars: number
  price_per_night_usd: { min: number; max: number }
  adults_only: boolean
  amenities: string[]
  tripadvisor_rating?: number
  couples_review_pct?: number
}

const HOTELS_DIR = path.join(process.cwd(), 'data', 'hotels')
const OUT_DIR = path.join(process.cwd(), 'data', 'hotel-comparisons')

function loadHotels(): HotelLite[] {
  return fs
    .readdirSync(HOTELS_DIR)
    .filter(f => f.endsWith('.json'))
    .map(f => JSON.parse(fs.readFileSync(path.join(HOTELS_DIR, f), 'utf-8')) as HotelLite)
    .sort((a, b) => b.honeymoon_score - a.honeymoon_score)
}

function pairSlug(a: string, b: string): string {
  return [a, b].sort().join('-vs-')
}

function combos<T>(arr: T[]): [T, T][] {
  const out: [T, T][] = []
  for (let i = 0; i < arr.length; i++) for (let j = i + 1; j < arr.length; j++) out.push([arr[i], arr[j]])
  return out
}

const TOP_DESTINATIONS = [
  'maldives',
  'bali',
  'santorini',
  'bora-bora',
  'st-lucia',
  'turks-and-caicos',
  'morocco',
  'portugal',
  'french-polynesia',
  'bahamas',
]

// Hand-picked iconic cross-destination pairings (Bucket B).
const ICONIC_PAIRS: [string, string][] = [
  ['soneva-jani-maldives', 'cheval-blanc-randheli-maldives'],
  ['four-seasons-bora-bora', 'conrad-bora-bora-nui'],
  ['aman-kyoto-japan', 'jade-mountain-st-lucia'],
  ['the-brando-tetiaroa-french-polynesia', 'laucala-island-resort-fiji'],
  ['amanyara-turks-caicos', 'parrot-cay-turks-and-caicos'],
  ['velaa-private-island-maldives', 'soneva-fushi-maldives'],
  ['six-senses-zil-pasyon-seychelles', 'north-island-seychelles'],
  ['canaves-oia-suites-greece', 'grace-hotel-santorini'],
  ['le-sirenuse-positano-amalfi', 'belmond-hotel-caruso-amalfi'],
  ['royal-mansour-marrakech-morocco', 'la-mamounia-marrakech-morocco'],
  ['angama-mara-kenya', 'andbeyond-ngorongoro-crater-lodge-tanzania'],
  ['bulgari-resort-bali', 'four-seasons-sayan-bali'],
  ['amanpuri-phuket-thailand', 'rosewood-phuket-thailand'],
  ['one-and-only-le-saint-geran-mauritius', 'four-seasons-anahita-mauritius'],
  ['amanzoe-porto-heli-greece', 'amanyara-turks-caicos'],
  ['hoshinoya-kyoto-japan', 'aman-kyoto-japan'],
  ['pink-sands-club-harbour-island-caribbean', 'amanyara-turks-caicos'],
  ['las-ventanas-al-paraiso-mexico', 'esperanza-cabo-mexico'],
  ['badrutts-palace-hotel-st-moritz-switzerland', 'the-chedi-andermatt-switzerland'],
  ['singita-sasakwa-lodge-tanzania', 'royal-malewane-south-africa'],
  ['como-shambhala-estate-bali', 'amandari-bali'],
  ['nihi-sumba-indonesia', 'amanwana-moyo-indonesia'],
  ['joali-being-maldives', 'six-senses-laamu-maldives'],
  ['st-regis-bora-bora', 'four-seasons-bora-bora'],
  ['the-cove-eleuthera-bahamas', 'kamalame-cay-bahamas'],
  ['jade-mountain-st-lucia', 'sugar-beach-st-lucia'],
  ['azulik-tulum-mexico', 'rosewood-mayakoba-mexico'],
  ['blantyre-lenox-massachusetts', 'twin-farms-vermont'],
  ['nayara-tented-camp-costa-rica', 'kura-design-villas-costa-rica'],
  ['aman-venice-italy', 'belmond-hotel-cipriani-venice'],
]

// Bucket C — same-experience cross-destination pairings
const EXPERIENCE_BUCKETS: { exp: string; count: number }[] = [
  { exp: 'overwater-bungalows', count: 8 },
  { exp: 'adults-only', count: 8 },
  { exp: 'safari', count: 7 },
  { exp: 'wellness', count: 7 },
]

function main(): void {
  const hotels = loadHotels()
  const bySlug = new Map(hotels.map(h => [h.slug, h]))
  const seen = new Set<string>()
  const picks: [HotelLite, HotelLite][] = []

  function add(a?: HotelLite, b?: HotelLite): boolean {
    if (!a || !b || a.slug === b.slug) return false
    const slug = pairSlug(a.slug, b.slug)
    if (seen.has(slug)) return false
    seen.add(slug)
    picks.push([a, b])
    return true
  }

  // Bucket A — top destinations, top 4 hotels, all combos (cap 40)
  outer: for (const dest of TOP_DESTINATIONS) {
    const top = hotels.filter(h => h.destination === dest).slice(0, 4)
    for (const [a, b] of combos(top)) {
      add(a, b)
      if (picks.length >= 40) break outer
    }
  }

  // Bucket B — iconic
  for (const [s1, s2] of ICONIC_PAIRS) {
    if (picks.length >= 70) break
    add(bySlug.get(s1), bySlug.get(s2))
  }

  // Bucket C — by experience, cross-destination
  for (const { exp, count } of EXPERIENCE_BUCKETS) {
    const top = hotels.filter(h => h.experience_types.includes(exp)).slice(0, 8)
    let added = 0
    for (const [a, b] of combos(top)) {
      if (added >= count) break
      if (picks.length >= 100) break
      if (a.destination === b.destination) continue
      if (add(a, b)) added++
    }
    if (picks.length >= 100) break
  }

  // Top up if short — combine any two top-50 hotels not yet paired
  const top50 = hotels.slice(0, 50)
  for (let i = 0; i < top50.length && picks.length < 100; i++) {
    for (let j = i + 1; j < top50.length && picks.length < 100; j++) {
      if (top50[i].destination !== top50[j].destination) add(top50[i], top50[j])
    }
  }

  console.log(`Picked ${picks.length} pairings`)

  // Normalize ordering so a is always the alphabetically-first slug
  const normalized = picks.map(([x, y]) => {
    return x.slug < y.slug ? [x, y] : [y, x]
  }) as [HotelLite, HotelLite][]

  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true })

  const slugs: string[] = []
  for (const [a, b] of normalized) {
    const slug = `${a.slug}-vs-${b.slug}`
    slugs.push(slug)
    const data = {
      slug,
      a: a.slug,
      b: b.slug,
    }
    const ts = `// AUTO-GENERATED — do not edit by hand.\nimport type { HotelComparison } from './types'\nconst data: HotelComparison = ${JSON.stringify(data, null, 2)}\nexport default data\n`
    fs.writeFileSync(path.join(OUT_DIR, `${slug}.ts`), ts)
  }

  // Index
  const idx = `// AUTO-GENERATED — do not edit by hand.\nimport type { HotelComparison } from './types'\n${slugs
    .map((s, i) => `import p${i} from './${s}'`)
    .join('\n')}\n\nexport const HOTEL_COMPARISONS: HotelComparison[] = [\n${slugs
    .map((_, i) => `  p${i},`)
    .join('\n')}\n]\n\nexport function getAllHotelComparisonSlugs(): string[] {\n  return HOTEL_COMPARISONS.map(c => c.slug)\n}\n\nexport function getHotelComparisonBySlug(slug: string): HotelComparison | undefined {\n  return HOTEL_COMPARISONS.find(c => c.slug === slug)\n}\n`
  fs.writeFileSync(path.join(OUT_DIR, 'index.ts'), idx)

  const types = `export interface HotelComparison {\n  slug: string\n  a: string // hotel slug\n  b: string // hotel slug\n}\n`
  fs.writeFileSync(path.join(OUT_DIR, 'types.ts'), types)

  console.log(`Wrote ${slugs.length} pairing files + index.ts + types.ts to ${OUT_DIR}`)
}

main()
