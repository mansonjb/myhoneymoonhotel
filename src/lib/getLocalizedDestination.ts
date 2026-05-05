import 'server-only'
import type { Locale } from '@/i18n/locales'

/**
 * Phase-1 stub. Destination metadata still lives inline inside
 * `src/app/destinations/[country]/page.tsx` (the DESTINATION_META object).
 * Once that data is extracted into a shared `data/destinations/*.json`
 * source-of-truth, this loader will:
 *   1. Read the English destination object.
 *   2. Look for an overlay at `data/i18n/<locale>/destinations/<slug>.json`.
 *   3. Deep-merge overlay over English, with English fallback per key.
 *
 * For now this returns `null` for non-English locales — callers should fall
 * back to the English page.
 */
export interface LocalizedDestination {
  slug: string
  // Shape will be defined in Phase 2 when DESTINATION_META is extracted.
  [key: string]: unknown
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function getLocalizedDestination(_slug: string, _locale: Locale): LocalizedDestination | null {
  // TODO(phase-2): wire up once destination metadata is extracted from the page file.
  return null
}
