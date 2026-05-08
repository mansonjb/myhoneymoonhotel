// Pure, isomorphic locale path helpers — safe to import from client OR server.
// Mirrors the logic in `src/lib/alternates.ts` (which is server-only because it
// also builds absolute URLs for metadata) but with no `server-only` import.
import { LOCALES, DEFAULT_LOCALE, type Locale } from '@/i18n/locales'

/**
 * Prefix `logicalPath` with the locale segment, except for the default locale
 * which lives at the root.
 *   localizedHref('/quiz', 'es') → '/es/quiz'
 *   localizedHref('/quiz', 'en') → '/quiz'
 *   localizedHref('/',    'pt') → '/pt'
 */
export function localizedHref(logicalPath: string, locale: Locale): string {
  const cleanPath = logicalPath.startsWith('/') ? logicalPath : `/${logicalPath}`
  const root = cleanPath === '/' ? '' : cleanPath
  return locale === DEFAULT_LOCALE ? root || '/' : `/${locale}${root}`
}

/**
 * Detect the locale from a pathname like `/es/destinations` or `/pt` or `/quiz`.
 * Returns the default locale ('en') when no recognized prefix is present.
 */
export function detectLocaleFromPath(pathname: string | null | undefined): Locale {
  if (!pathname) return DEFAULT_LOCALE
  const seg = pathname.split('/')[1] // '' | 'es' | 'pt' | 'quiz' | ...
  if ((LOCALES as readonly string[]).includes(seg)) return seg as Locale
  return DEFAULT_LOCALE
}
