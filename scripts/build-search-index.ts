/**
 * Build-time search index for the global header search.
 *
 * Reads hotels/destinations/experiences/pillar pages and writes a single
 * minified JSON array to `public/search-index.json`. Run via the `prebuild`
 * hook so the index ships with every `next build`.
 *
 * Entry shape (kept tiny — 622+ hotels need to fit under ~100KB):
 *   { t: 'h' | 'd' | 'e' | 'p', s: slug, n: name, ds?: destination, c?: country, sc?: score }
 */
import * as fs from 'fs'
import * as path from 'path'

interface HotelLite {
  slug: string
  name: string
  destination: string
  country: string
  honeymoon_score?: number
}

interface Entry {
  t: 'h' | 'd' | 'e' | 'p'
  s: string
  n: string
  ds?: string
  c?: string
  sc?: number
}

const ROOT = path.join(__dirname, '..')
const HOTELS_DIR = path.join(ROOT, 'data', 'hotels')
const OUT = path.join(ROOT, 'public', 'search-index.json')

// Pretty destination label — mirrors src/app/layout.tsx
function prettyLabel(slug: string): string {
  const overrides: Record<string, string> = {
    'st-lucia': 'St. Lucia',
    'st-barts': 'St. Barts',
    'turks-and-caicos': 'Turks & Caicos',
    'bora-bora': 'Bora Bora',
    'french-polynesia': 'Rest of French Polynesia',
    'amalfi': 'Amalfi Coast',
    'greece': 'Mainland & Mykonos',
    'hawaii': 'Hawaii',
    'reunion': 'Réunion',
    'cape-verde': 'Cape Verde',
    'sri-lanka': 'Sri Lanka',
    'costa-rica': 'Costa Rica',
    'south-africa': 'South Africa',
    'new-zealand': 'New Zealand',
  }
  return overrides[slug] ?? slug.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ')
}

// 18 experience slugs observed across hotel data (full list of experience_types in /data/hotels).
const EXPERIENCES: Array<{ slug: string; label: string }> = [
  { slug: 'overwater-bungalows', label: 'Overwater Bungalows' },
  { slug: 'adults-only',         label: 'Adults-Only' },
  { slug: 'luxury',              label: 'Ultra-Luxury' },
  { slug: 'safari',              label: 'Safari & Bush' },
  { slug: 'beach',               label: 'Beach' },
  { slug: 'wellness',            label: 'Wellness & Spa' },
  { slug: 'romantic',            label: 'Romantic' },
  { slug: 'spa',                 label: 'Spa' },
  { slug: 'cultural',            label: 'Cultural' },
  { slug: 'all-inclusive',       label: 'All-Inclusive' },
  { slug: 'historic',            label: 'Historic' },
  { slug: 'adventure',           label: 'Adventure' },
  { slug: 'wilderness',          label: 'Wilderness' },
  { slug: 'lake',                label: 'Lake' },
  { slug: 'boutique',            label: 'Boutique' },
  { slug: 'city',                label: 'City' },
  { slug: 'golf',                label: 'Golf' },
  { slug: 'private-island',      label: 'Private Island' },
]

// 9 pillar/standalone pages
const PILLARS: Array<{ slug: string; label: string }> = [
  { slug: 'best',                          label: 'Best Honeymoon Hotels' },
  { slug: 'how-to-plan-a-honeymoon',       label: 'How To Plan A Honeymoon' },
  { slug: 'maldives-honeymoon-cost',       label: 'Maldives Honeymoon Cost' },
  { slug: 'bora-bora-honeymoon-cost',      label: 'Bora Bora Honeymoon Cost' },
  { slug: 'bali-honeymoon-cost',           label: 'Bali Honeymoon Cost' },
  { slug: 'bahamas-honeymoon-cost',        label: 'Bahamas Honeymoon Cost' },
  { slug: 'barbados-honeymoon-cost',       label: 'Barbados Honeymoon Cost' },
  { slug: 'cape-verde-honeymoon-cost',     label: 'Cape Verde Honeymoon Cost' },
  { slug: 'mexico-honeymoon-cost',         label: 'Mexico Honeymoon Cost' },
  { slug: 'turks-and-caicos-honeymoon-cost', label: 'Turks & Caicos Honeymoon Cost' },
]
// Note: 10 listed above; spec says "9 pillars". We keep all detected app folders;
// the only one not represented as a Next route is `bora-bora-honeymoon-cost`.
// Filter to actual routes:
const APP_DIR = path.join(ROOT, 'src', 'app')
const existingPillars = PILLARS.filter(p => fs.existsSync(path.join(APP_DIR, p.slug)))

function loadHotels(): HotelLite[] {
  if (!fs.existsSync(HOTELS_DIR)) return []
  return fs.readdirSync(HOTELS_DIR)
    .filter(f => f.endsWith('.json'))
    .map(f => JSON.parse(fs.readFileSync(path.join(HOTELS_DIR, f), 'utf-8')) as HotelLite)
}

function main() {
  const t0 = Date.now()
  const hotels = loadHotels()
  const entries: Entry[] = []

  // Hotels
  for (const h of hotels) {
    entries.push({
      t: 'h',
      s: h.slug,
      n: h.name,
      ds: h.destination,
      c: h.country,
      sc: h.honeymoon_score,
    })
  }

  // Destinations (unique)
  const destSlugs = Array.from(new Set(hotels.map(h => h.destination)))
  const countryBySlug: Record<string, string> = {}
  for (const h of hotels) if (!countryBySlug[h.destination]) countryBySlug[h.destination] = h.country
  for (const slug of destSlugs) {
    entries.push({ t: 'd', s: slug, n: prettyLabel(slug), c: countryBySlug[slug] })
  }

  // Experiences (hardcoded 18)
  for (const e of EXPERIENCES) {
    entries.push({ t: 'e', s: e.slug, n: e.label })
  }

  // Pillar pages (filtered to existing routes)
  for (const p of existingPillars) {
    entries.push({ t: 'p', s: p.slug, n: p.label })
  }

  fs.mkdirSync(path.dirname(OUT), { recursive: true })
  const minified = JSON.stringify(entries)
  fs.writeFileSync(OUT, minified)
  const size = Buffer.byteLength(minified, 'utf-8')
  console.log(
    `[search-index] ${entries.length} entries (hotels=${hotels.length}, destinations=${destSlugs.length}, experiences=${EXPERIENCES.length}, pages=${existingPillars.length}) → ${(size / 1024).toFixed(1)}KB in ${Date.now() - t0}ms`
  )
}

main()
