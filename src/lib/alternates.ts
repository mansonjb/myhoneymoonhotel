import 'server-only'
import { LOCALES, DEFAULT_LOCALE, HTML_LANG, type Locale } from '@/i18n/locales'
import { hasLocaleOverlay, availableLocalesFor } from '@/lib/localeOverlay'

const SITE_URL = 'https://myhoneymoonhotel.com'

/**
 * Build a Next.js `metadata.alternates` object with canonical + hreflang languages
 * for the supplied "logical" path. The path should be the URL path WITHOUT the
 * locale prefix (e.g. "/destinations/maldives", not "/es/destinations/maldives").
 *
 * IMPORTANT — duplicate-content protection (May 31 2026 GSC crash fix):
 *   - hreflang `languages` only includes locales that actually have translated
 *     content for this path (per `hasLocaleOverlay`). Promising /fr/X when /fr/X
 *     just renders EN content tanks the page in Google.
 *   - When rendering a locale-prefixed page that DOESN'T have an overlay
 *     (e.g. /fr/hotels/conrad-maldives-rangali-island when the FR overlay doesn't exist), the
 *     canonical is forced back to the EN URL so Google treats the EN version
 *     as the source of truth.
 */
export function buildAlternates(
  logicalPath: string,
  locale: Locale = DEFAULT_LOCALE,
  availableLocales?: Locale[],
): { canonical: string; languages: Record<string, string> } {
  const cleanPath = logicalPath.startsWith('/') ? logicalPath : `/${logicalPath}`
  const root = cleanPath === '/' ? '' : cleanPath
  const buildUrl = (loc: Locale) =>
    loc === DEFAULT_LOCALE ? `${SITE_URL}${root || '/'}` : `${SITE_URL}/${loc}${root}`

  // Resolve the set of locales that actually have content for this path.
  // Caller-provided list wins (page-level callers like the hotel renderer
  // already compute this from data/i18n/<locale>/hotels existence checks).
  const liveLocales: Locale[] = availableLocales
    ? (availableLocales.includes('en') ? availableLocales : ['en', ...availableLocales])
    : availableLocalesFor(cleanPath)

  const languages: Record<string, string> = {}
  for (const loc of LOCALES) {
    if (!liveLocales.includes(loc)) continue
    languages[HTML_LANG[loc]] = buildUrl(loc)
  }
  languages['x-default'] = buildUrl(DEFAULT_LOCALE)

  // Canonical: if we're rendering a locale-prefixed page and there's no
  // overlay for it, point Google back at the EN canonical to eliminate the
  // duplicate-content signal.
  const overlayPresent = liveLocales.includes(locale)
  const canonicalLocale: Locale = overlayPresent ? locale : DEFAULT_LOCALE

  return {
    canonical: buildUrl(canonicalLocale),
    languages,
  }
}

export function localizedUrl(logicalPath: string, locale: Locale): string {
  const cleanPath = logicalPath.startsWith('/') ? logicalPath : `/${logicalPath}`
  const root = cleanPath === '/' ? '' : cleanPath
  return locale === DEFAULT_LOCALE ? `${SITE_URL}${root || '/'}` : `${SITE_URL}/${locale}${root}`
}

export function localizedPath(logicalPath: string, locale: Locale): string {
  const cleanPath = logicalPath.startsWith('/') ? logicalPath : `/${logicalPath}`
  const root = cleanPath === '/' ? '' : cleanPath
  return locale === DEFAULT_LOCALE ? root || '/' : `/${locale}${root}`
}

// Re-export so call-sites can do explicit checks
export { hasLocaleOverlay, availableLocalesFor }
