import 'server-only'
import { getAllHotels } from './hotels'
import type { Hotel } from '../../types/hotel'

/**
 * Country slug + display-name plumbing for the programmatic
 * /honeymoon-in/[country] pillar pages.
 *
 * Hotel JSONs already store `country` as a kebab-case slug (e.g. "italy",
 * "st-lucia", "uae", "turks-and-caicos-islands"). A handful of slugs are
 * duplicates / variants of the same country — those are normalized to a
 * canonical slug here.
 */

// Maps any raw value found in hotel JSON to its canonical country slug.
// (Keep the canonical slug short and stable — it becomes the URL segment.)
const COUNTRY_ALIASES: Record<string, string> = {
  'turks-and-caicos-islands': 'turks-and-caicos',
  'saint-lucia': 'st-lucia',
}

const DISPLAY_OVERRIDES: Record<string, string> = {
  'usa': 'USA',
  'uae': 'United Arab Emirates',
  'st-lucia': 'St. Lucia',
  'st-barts': 'St. Barts',
  'turks-and-caicos': 'Turks & Caicos',
  'cape-verde': 'Cape Verde',
  'south-africa': 'South Africa',
  'new-zealand': 'New Zealand',
  'costa-rica': 'Costa Rica',
  'sri-lanka': 'Sri Lanka',
  'dominican-republic': 'Dominican Republic',
  'cook-islands': 'Cook Islands',
  'faroe-islands': 'Faroe Islands',
  'french-polynesia': 'French Polynesia',
  'reunion': 'Réunion',
  'curacao': 'Curaçao',
  'sao-tome': 'São Tomé',
  'saint-vincent-grenadines': 'St. Vincent & the Grenadines',
  'caribbean': 'Caribbean',
}

export function getCountrySlug(rawCountry: string): string {
  const lower = rawCountry.toLowerCase().trim()
  const cleaned = lower
    .replace(/\./g, '')
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9-\s]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
  return COUNTRY_ALIASES[cleaned] ?? cleaned
}

export function getCountryDisplayName(slug: string): string {
  if (DISPLAY_OVERRIDES[slug]) return DISPLAY_OVERRIDES[slug]
  return slug
    .split('-')
    .map(s => s.charAt(0).toUpperCase() + s.slice(1))
    .join(' ')
}

export interface CountryGroup {
  slug: string
  displayName: string
  hotels: Hotel[]
  destinations: string[]
  hotelCount: number
}

let _cache: CountryGroup[] | null = null

export function getCountriesWithHotels(): CountryGroup[] {
  if (_cache) return _cache
  const all = getAllHotels()
  const grouped = new Map<string, { hotels: Hotel[]; destinations: Set<string> }>()
  for (const h of all) {
    if (!h.country) continue
    const slug = getCountrySlug(h.country)
    if (!slug) continue
    let g = grouped.get(slug)
    if (!g) {
      g = { hotels: [], destinations: new Set() }
      grouped.set(slug, g)
    }
    g.hotels.push(h)
    if (h.destination) g.destinations.add(h.destination)
  }
  _cache = [...grouped.entries()]
    .map(([slug, { hotels, destinations }]) => ({
      slug,
      displayName: getCountryDisplayName(slug),
      hotels: hotels.sort((a, b) => b.honeymoon_score - a.honeymoon_score),
      destinations: [...destinations].sort(),
      hotelCount: hotels.length,
    }))
    .sort((a, b) => b.hotelCount - a.hotelCount)
  return _cache
}

export function getCountryGroup(slug: string): CountryGroup | null {
  return getCountriesWithHotels().find(c => c.slug === slug) ?? null
}
