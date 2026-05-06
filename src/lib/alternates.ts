import 'server-only'
import { LOCALES, DEFAULT_LOCALE, type Locale } from '@/i18n/locales'

const SITE_URL = 'https://myhoneymoonhotel.com'

/**
 * Build a Next.js `metadata.alternates` object with canonical + hreflang languages
 * for the supplied "logical" path. The path should be the URL path WITHOUT the
 * locale prefix (e.g. "/destinations/maldives", not "/es/destinations/maldives").
 *
 * Example output for path `/destinations/maldives` and locale `es`:
 *   {
 *     canonical: 'https://myhoneymoonhotel.com/es/destinations/maldives',
 *     languages: {
 *       en: 'https://myhoneymoonhotel.com/destinations/maldives',
 *       es: 'https://myhoneymoonhotel.com/es/destinations/maldives',
 *       'pt-BR': 'https://myhoneymoonhotel.com/pt/destinations/maldives',
 *       'x-default': 'https://myhoneymoonhotel.com/destinations/maldives',
 *     },
 *   }
 *
 * The default locale (en) lives at the root, others under `/<locale>/`.
 */
export function buildAlternates(
  logicalPath: string,
  locale: Locale = DEFAULT_LOCALE,
): { canonical: string; languages: Record<string, string> } {
  const cleanPath = logicalPath.startsWith('/') ? logicalPath : `/${logicalPath}`
  const root = cleanPath === '/' ? '' : cleanPath
  const buildUrl = (loc: Locale) =>
    loc === DEFAULT_LOCALE ? `${SITE_URL}${root || '/'}` : `${SITE_URL}/${loc}${root}`

  const languages: Record<string, string> = {}
  // Only Spanish (es) is live for v1 — skip locales without a rendered tree to avoid
  // promising hreflang to pages that don't exist. Keeping en + es here.
  const liveLocales: Locale[] = ['en', 'es']
  for (const loc of LOCALES) {
    if (!liveLocales.includes(loc)) continue
    languages[loc] = buildUrl(loc)
  }
  languages['x-default'] = buildUrl(DEFAULT_LOCALE)

  return {
    canonical: buildUrl(locale),
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
