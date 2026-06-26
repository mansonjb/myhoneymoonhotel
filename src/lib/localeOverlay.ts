import 'server-only'
import * as fs from 'fs'
import * as path from 'path'
import type { Locale } from '@/i18n/locales'

/**
 * Authoritative check: does locale `locale` have actual translated content
 * for the logical path `p`? This is used to gate hreflang alternates in the
 * sitemap AND on per-page canonicals so we never advertise a /fr/... URL
 * that just renders EN content (Google demoted us for this on May 31 2026,
 * traffic dropped from ~700 imp/day to ~35 imp/day in one day).
 *
 * Rules (per /CLAUDE.md emergency brief):
 *  - Root paths (home, /about, /quiz, /compare index, /destinations index,
 *    /contact, /privacy, /terms, etc.) → true. These render per-locale already.
 *  - The 4 multilingual pillar pages we DID translate
 *    (honeymoon-with-dog, honeymoon-in-france, overwater-bungalow-honeymoon,
 *    all-inclusive-honeymoon) → true.
 *  - Cost pages we translated (e.g. maldives-honeymoon-cost) → true (FR has these).
 *  - /hotels/<slug>            → check data/i18n/<locale>/hotels/<slug>.json
 *  - /destinations/<slug>      → check data/i18n/<locale>/destinations/<slug>.json
 *  - /destinations/<slug>/<month> → defer to /destinations/<slug>
 *  - /compare/...              → check data/i18n/<locale>/comparisons/<file>.json
 *  - /honeymoon-in/<country>   → check data/i18n/<locale>/pages/honeymoon-in-<country>.json
 *  - /itineraries/*, /honeymoon-under-*, /honeymoon-in-{month}, /N-day-honeymoon,
 *    /honeymoon-for-*, /compare/destinations/*, /compare/hotels/*, /experiences/*,
 *    /best/honeymoon-resorts-2026, /honeymoon-on-a-budget, /honeymoon-packing-list,
 *    /last-minute-honeymoon, /luxury-honeymoon, /methodology, /honeymoon-in/*
 *      → only true if the locale-prefixed route actually exists AND we shipped overlay.
 *        For FR specifically: most of these don't exist as FR pages, so false.
 *        For ES + PT: these routes exist as fallthrough renderers (use EN content
 *        as fallback). Per the SEO brief, treat ES/PT as available (they have
 *        broader overlay coverage already) but FR as not-yet-available.
 */
export function hasLocaleOverlay(p: string, locale: Locale): boolean {
  if (locale === 'en') return true

  const clean = p.startsWith('/') ? p : `/${p}`

  // ---- 1. Always-localized roots (rendered per locale) ----
  const ALWAYS_LOCALIZED: ReadonlySet<string> = new Set([
    '/',
    '/about',
    '/affiliate-disclosure',
    '/contact',
    '/privacy',
    '/terms',
    '/quiz',
    '/methodology',
    '/destinations',
    '/compare',
    '/how-to-plan-a-honeymoon',
    '/best-time-to-honeymoon',
    '/best/honeymoon-resorts-2026',
    // 4 multilingual pillar pages (FR + ES + PT all translated)
    '/honeymoon-with-dog',
    '/honeymoon-in-france',
    '/overwater-bungalow-honeymoon',
    '/all-inclusive-honeymoon',
    '/how-to-choose-honeymoon-destination',
    // Cost pages (FR routes exist, ES/PT too)
    '/maldives-honeymoon-cost',
    '/bali-honeymoon-cost',
    '/bahamas-honeymoon-cost',
    '/turks-and-caicos-honeymoon-cost',
    '/mexico-honeymoon-cost',
    '/barbados-honeymoon-cost',
    '/cape-verde-honeymoon-cost',
  ])
  if (ALWAYS_LOCALIZED.has(clean)) return true

  // ---- 2. /hotels/<slug> — gated by overlay JSON existence ----
  const hotelM = clean.match(/^\/hotels\/([^/]+)$/)
  if (hotelM) {
    return existsOverlay('hotels', hotelM[1], locale)
  }

  // ---- 3. /destinations/<slug> + /destinations/<slug>/<month> ----
  const destM = clean.match(/^\/destinations\/([^/]+)(?:\/[^/]+)?$/)
  if (destM) {
    return existsOverlay('destinations', destM[1], locale)
  }

  // ---- 4. /compare/<slug> — destination-vs-destination comparisons ----
  // All three locales have partial comparison overlay coverage. Gate on file.
  const cmpM = clean.match(/^\/compare\/([^/]+)$/)
  if (cmpM && cmpM[1] !== 'destinations' && cmpM[1] !== 'hotels') {
    return existsOverlay('comparisons', cmpM[1], locale)
  }
  // /compare/destinations/X and /compare/hotels/X — programmatic, no FR overlay
  if (clean.startsWith('/compare/destinations/') || clean.startsWith('/compare/hotels/')) {
    if (locale === 'fr') return false
    // ES/PT render with fallback content; treat as available to preserve existing alternates
    return true
  }

  // ---- 5. /honeymoon-in/<country> — country guides ----
  const hicM = clean.match(/^\/honeymoon-in\/([^/]+)$/)
  if (hicM) {
    if (locale === 'fr') return false
    // ES/PT renderers fall back to EN content; keep current behavior to not break es/pt.
    return true
  }

  // ---- 6. Long-tail FR-untranslated paths ----
  // /itineraries/*, /honeymoon-under-*, /honeymoon-in-{month}, /N-day-honeymoon,
  // /honeymoon-for-*, /honeymoon-on-a-budget, /honeymoon-packing-list,
  // /last-minute-honeymoon, /luxury-honeymoon, /experiences/*
  const LONGTAIL_NOFR =
    clean.startsWith('/itineraries/') ||
    /^\/honeymoon-under-\d+$/.test(clean) ||
    /^\/honeymoon-in-(january|february|march|april|may|june|july|august|september|october|november|december)$/.test(clean) ||
    /^\/\d+-day-honeymoon$/.test(clean) ||
    clean.startsWith('/honeymoon-for-') ||
    clean === '/honeymoon-on-a-budget' ||
    clean === '/honeymoon-packing-list' ||
    clean === '/last-minute-honeymoon' ||
    clean === '/luxury-honeymoon' ||
    clean.startsWith('/experiences/')
  if (LONGTAIL_NOFR) {
    if (locale === 'fr') return false
    return true
  }

  // ---- Default: only en. Caller has not declared the path. ----
  return false
}

function existsOverlay(kind: 'hotels' | 'destinations' | 'comparisons', slug: string, locale: Locale): boolean {
  try {
    const p = path.join(process.cwd(), 'data', 'i18n', locale, kind, `${slug}.json`)
    return fs.existsSync(p)
  } catch {
    return false
  }
}

/**
 * Convenience: returns the list of locales (including 'en') that have content
 * for the given logical path. Used by buildAlternates to decide which hreflang
 * languages to advertise.
 */
import { LOCALES } from '@/i18n/locales'
export function availableLocalesFor(p: string): Locale[] {
  const out: Locale[] = ['en']
  for (const loc of LOCALES) {
    if (loc === 'en') continue
    if (hasLocaleOverlay(p, loc)) out.push(loc)
  }
  return out
}
