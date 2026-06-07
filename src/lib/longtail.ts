import type { Hotel } from '../../types/hotel'
import type { DestinationMeta } from '@/types/destination'
import { getAllHotels } from '@/lib/hotels'
import { DESTINATION_META } from '../../data/destinations'

// ---------------------------------------------------------------------------
// Editorial helpers for long-tail page templates.
// All filters operate on existing catalog data only — no fabrication.
// ---------------------------------------------------------------------------

export const ESTIMATED_FLIGHTS_USD = 1500
export const ESTIMATED_EXTRAS_USD = 1000
export const NIGHTS = 7

/** Filter catalog hotels where 7 nights + flights + extras fits under budget. */
export function getHotelsUnderBudget(budgetUSD: number): Hotel[] {
  return getAllHotels().filter(h => {
    const stay = (h.price_per_night_usd?.min ?? 0) * NIGHTS
    return stay + ESTIMATED_FLIGHTS_USD + ESTIMATED_EXTRAS_USD <= budgetUSD
  })
}

export interface LoadedDestination {
  slug: string
  meta: DestinationMeta
}

export function loadAllDestinations(): LoadedDestination[] {
  return Object.entries(DESTINATION_META).map(([slug, meta]) => ({ slug, meta }))
}

export function getDestinationMeta(slug: string): DestinationMeta | null {
  return DESTINATION_META[slug] ?? null
}

/**
 * Parse a month verdict/price/crowds into a 1-5 "honeymoon rating".
 * Strong verdict words + low crowds + dry weather + reasonable price → high rating.
 */
function ratingForMonth(m: DestinationMeta['months'][number]): number {
  const verdict = (m.verdict || '').toLowerCase()
  const weather = (m.weather || '').toLowerCase()
  const crowds = (m.crowds || '').toLowerCase()
  const price = (m.price || '').toLowerCase()
  let s = 3
  if (/perfect|best|ideal|excellent|sweet spot/.test(verdict)) s += 2
  else if (/good|great|peak|underrated|sweet/.test(verdict)) s += 1
  if (/avoid|skip|monsoon|rain|stormy|cyclone|hurricane|wet/.test(verdict)) s -= 2
  if (/dry|sun|clear|warm|mild/.test(weather)) s += 0.5
  if (/rain|monsoon|storm|cyclone/.test(weather)) s -= 1
  if (/low|moderate/.test(crowds)) s += 0.3
  if (/peak/.test(crowds)) s -= 0.2
  if (/low|lowest|mid/.test(price)) s += 0.2
  if (/very high|highest/.test(price)) s -= 0.4
  return Math.max(1, Math.min(5, Math.round(s)))
}

/** Destinations with a strong honeymoon rating for a given month (0-11). */
export function getDestinationsForMonth(monthIndex: number): LoadedDestination[] {
  const all = loadAllDestinations()
  return all
    .map(d => ({ d, rating: ratingForMonth(d.meta.months[monthIndex] ?? d.meta.months[0]) }))
    .filter(x => x.rating >= 4)
    .sort((a, b) => b.rating - a.rating)
    .map(x => x.d)
}

export interface DestRecommendation {
  slug: string
  label: string
  why: string
}

const TITLE_OVERRIDES: Record<string, string> = {
  'st-lucia': 'St. Lucia',
  'st-barts': 'St. Barts',
  'turks-and-caicos': 'Turks & Caicos',
  'bora-bora': 'Bora Bora',
  'cote-dazur': 'Côte d’Azur',
  'cape-verde': 'Cape Verde',
  'sri-lanka': 'Sri Lanka',
  'costa-rica': 'Costa Rica',
  'south-africa': 'South Africa',
  'new-zealand': 'New Zealand',
  'lake-como': 'Lake Como',
  'lake-garda': 'Lake Garda',
  'cinque-terre': 'Cinque Terre',
  'amalfi': 'Amalfi Coast',
  'loire-valley': 'Loire Valley',
  'big-sur': 'Big Sur',
  'french-polynesia': 'French Polynesia',
  'patagonia-chile': 'Patagonian Chile',
  'uae': 'UAE',
  'reunion': 'Réunion',
}

export function prettyDest(slug: string): string {
  return TITLE_OVERRIDES[slug] ?? slug.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ')
}

const DURATION_PICKS: Record<number, DestRecommendation[]> = {
  3: [
    { slug: 'venice', label: 'Venice', why: 'A 3-day mini-moon collapses Venice into a perfect arc: two nights on the Grand Canal, one private water taxi.' },
    { slug: 'amalfi', label: 'Amalfi Coast', why: 'Fly to Naples, drive the coast, dinner at Le Sirenuse — 72 hours is enough if you stay put.' },
    { slug: 'provence', label: 'Provence', why: 'Lavender, lunch in Gordes, a single perfect Domaine de Manville night. The shortest French honeymoon that still feels like one.' },
    { slug: 'lake-como', label: 'Lake Como', why: 'A long weekend at Passalacqua or Grand Hotel Tremezzo — water-taxi to Bellagio, dinner back on the terrace.' },
  ],
  5: [
    { slug: 'st-lucia', label: 'St. Lucia', why: 'The Caribbean honeymoon that genuinely works in 5 days — Sugar Beach + a Pitons hike + a sunset cruise.' },
    { slug: 'turks-and-caicos', label: 'Turks & Caicos', why: 'Direct flights from the US East Coast and Grace Bay never disappoints — 4 nights of beach + 1 of catamaran.' },
    { slug: 'mexico', label: 'Riviera Maya', why: 'Adults-only all-inclusive plus a cenote day. Short flight, low jetlag, full reset.' },
    { slug: 'santorini', label: 'Santorini', why: 'For Europeans: cliffside cave suite, 2 sunsets in Oia, 1 catamaran day, 1 winery afternoon.' },
  ],
  7: [
    { slug: 'maldives', label: 'Maldives', why: 'The 7-night Maldives stay is the honeymoon archetype — long enough to slow down, short enough not to get island-fever.' },
    { slug: 'bora-bora', label: 'Bora Bora', why: 'The overwater-villa benchmark. 6 days at the resort + 1 transit day Tahiti-side.' },
    { slug: 'bali', label: 'Bali', why: 'Split 3 nights Ubud / 4 nights Uluwatu — culture then beach, the classic 7-night arc.' },
    { slug: 'seychelles', label: 'Seychelles', why: 'North Island or Fregate for 7 nights — slower than Maldives, more nature, almost no other guests.' },
    { slug: 'fiji', label: 'Fiji', why: 'Likuliku or Vomo. 7 nights is the sweet spot — long-haul justified, jetlag absorbed.' },
    { slug: 'st-lucia', label: 'St. Lucia', why: 'Two-resort split: 3 nights Sugar Beach, 4 nights Jade Mountain.' },
  ],
  10: [
    { slug: 'bali', label: 'Bali + Komodo', why: 'Two-stop: 5 nights Bali (Ubud + Uluwatu), 5 nights at Ayana Komodo or a liveaboard.' },
    { slug: 'thailand', label: 'Thailand', why: 'Bangkok 2 nights + Phuket/Phang Nga 5 nights + Krabi 3 nights. Long enough to do the country justice.' },
    { slug: 'south-africa', label: 'South Africa + Mauritius', why: '5 nights safari (Sabi Sands) + 5 nights beach (Mauritius). The classic 10-day African honeymoon.' },
    { slug: 'kenya', label: 'Kenya + Zanzibar', why: 'Maasai Mara 4 nights, Zanzibar 5 nights. Bush-and-beach in 10 days.' },
    { slug: 'japan', label: 'Japan', why: 'Tokyo 3 / Kyoto 4 / Hakone or Naoshima 3. Ten days is the minimum coherent Japan trip.' },
  ],
  14: [
    { slug: 'french-polynesia', label: 'French Polynesia', why: 'The ultimate: Tahiti 1 / Moorea 5 / Bora Bora 7 / Tahiti 1. Two weeks lets you actually relax into it.' },
    { slug: 'maldives', label: 'Maldives + Sri Lanka', why: 'Sri Lanka 7 nights (Galle + tea country) + Maldives 7 nights. Culture then collapse.' },
    { slug: 'tanzania', label: 'Tanzania + Zanzibar', why: 'Serengeti + Ngorongoro 7 nights, Zanzibar 7 nights. Best two-week honeymoon in Africa.' },
    { slug: 'australia', label: 'Australia', why: 'Sydney 3 / Great Barrier Reef 5 / Outback or Kangaroo Island 6. Long-haul deserves the time.' },
    { slug: 'argentina', label: 'Argentina + Chile', why: 'Buenos Aires 3 / Mendoza 4 / Patagonia 7. Two weeks is the minimum for southern-cone honeymoons.' },
  ],
}

export function getDestinationsForDuration(days: number): DestRecommendation[] {
  return DURATION_PICKS[days] ?? []
}

const PERSONA_PICKS: Record<string, DestRecommendation[]> = {
  foodies: [
    { slug: 'tuscany', label: 'Tuscany', why: 'Truffle hunts, Borgo Santo Pietro kitchen, the Val d’Orcia harvest table.' },
    { slug: 'japan', label: 'Japan', why: 'Kaiseki in Kyoto, sushi in Tokyo, Naoshima\'s art-and-food retreats.' },
    { slug: 'amalfi', label: 'Amalfi Coast', why: 'Don Alfonso, Le Sirenuse Champagne Bar, lemon-grown-yesterday lunches.' },
    { slug: 'provence', label: 'Provence', why: 'Markets at Saint-Rémy, Domaine de Manville\'s kitchen garden, Bandol rosé at source.' },
    { slug: 'thailand', label: 'Thailand', why: 'Bangkok\'s 50 Best restaurants, Phuket beach BBQ, cooking school at Six Senses Yao Noi.' },
  ],
  'adventure-seekers': [
    { slug: 'patagonia-chile', label: 'Patagonia', why: 'Trekking Torres del Paine, ice glacier days, Tierra or Explora lodge nights.' },
    { slug: 'iceland', label: 'Iceland', why: 'Northern lights, glacier hikes, the Highlands. Deplar Farm raises the bar.' },
    { slug: 'new-zealand', label: 'New Zealand', why: 'Heli-hike Franz Josef, Milford Sound kayak, Blanket Bay lodge by night.' },
    { slug: 'costa-rica', label: 'Costa Rica', why: 'Arenal canopy, Osa wildlife, Nayara Tented Camp as base.' },
    { slug: 'banff', label: 'Banff', why: 'Glacier helicopter, canoe on Moraine, Post Hotel\'s wine cellar to recover.' },
  ],
  introverts: [
    { slug: 'maldives', label: 'Maldives', why: 'Your villa is the world. No one needs to see you for a week.' },
    { slug: 'seychelles', label: 'Seychelles', why: 'North Island has 11 villas across the entire island. Effective solitude.' },
    { slug: 'bhutan', label: 'Bhutan', why: 'Amankora\'s 5-lodge journey is engineered for stillness.' },
    { slug: 'faroe-islands', label: 'Faroe Islands', why: 'Wind, cliff, almost no one. Stay at Hotel Føroyar.' },
    { slug: 'cotswolds', label: 'Cotswolds', why: 'A country-house hotel with a fire. Books, walks, room service. Lime Wood.' },
  ],
  'second-marriage': [
    { slug: 'amalfi', label: 'Amalfi Coast', why: 'A second honeymoon earns Le Sirenuse. Confident, beautiful, no apology.' },
    { slug: 'st-barts', label: 'St. Barts', why: 'Eden Rock, Cheval Blanc — for couples who already know what they like.' },
    { slug: 'kenya', label: 'Kenya', why: 'A safari you couldn\'t afford the first time. Angama Mara or Cottar\'s 1920s.' },
    { slug: 'japan', label: 'Japan', why: 'Intentional, paced, designed. The opposite of a 22-year-old\'s trip.' },
    { slug: 'champagne', label: 'Champagne', why: 'A long weekend at Royal Champagne or Les Crayères — quiet and adult.' },
  ],
  'over-40': [
    { slug: 'tuscany', label: 'Tuscany', why: 'Castello di Reschio, slow lunches, no FOMO. The classic adult honeymoon.' },
    { slug: 'lake-como', label: 'Lake Como', why: 'Passalacqua — small, refined, no club music after 10pm anywhere.' },
    { slug: 'provence', label: 'Provence', why: 'La Coquillade, Domaine de Manville. Cypresses and silence.' },
    { slug: 'oman', label: 'Oman', why: 'Six Senses Zighy Bay or Al Bustan — uncrowded luxury at adult pace.' },
    { slug: 'big-sur', label: 'Big Sur', why: 'Post Ranch Inn. Hot tub over the Pacific. No children allowed.' },
  ],
}

export function getDestinationsForPersona(persona: string): DestRecommendation[] {
  return PERSONA_PICKS[persona] ?? []
}

export const ALL_PERSONAS = Object.keys(PERSONA_PICKS)
