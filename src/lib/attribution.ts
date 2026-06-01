/**
 * Client-side reader helpers for the first-party attribution cookies set by
 * `src/middleware.ts`. These cookies are strictly-necessary for affiliate
 * attribution (our business model) and require no consent under GDPR/ePrivacy.
 *
 * No PII is stored. The session ID is an opaque random 16-char value.
 *
 * Intended use: future affiliate click-tracking will read `mhh_sid` + `mhh_entrance`
 * and POST them alongside outbound click events so we can join landing context to
 * conversions. NOT wired to any event endpoint yet — these are just readers.
 */

export interface EntranceContext {
  ref: string
  utm_source: string
  utm_medium: string
  utm_campaign: string
  utm_term: string
  utm_content: string
  landing: string
  t: string
}

function readCookie(name: string): string | null {
  if (typeof document === 'undefined') return null
  const target = name + '='
  const parts = document.cookie.split(';')
  for (const raw of parts) {
    const c = raw.trim()
    if (c.startsWith(target)) {
      try {
        return decodeURIComponent(c.slice(target.length))
      } catch {
        return c.slice(target.length)
      }
    }
  }
  return null
}

/** Reads the `mhh_sid` cookie set by middleware. Returns null in SSR or if missing. */
export function getSid(): string | null {
  return readCookie('mhh_sid')
}

/** Reads + JSON-parses the `mhh_entrance` cookie set by middleware. */
export function getEntrance(): EntranceContext | null {
  const raw = readCookie('mhh_entrance')
  if (!raw) return null
  try {
    return JSON.parse(raw) as EntranceContext
  } catch {
    return null
  }
}

/** Reads the `mhh_first_seen` ISO timestamp cookie set by middleware. */
export function getFirstSeen(): string | null {
  return readCookie('mhh_first_seen')
}
