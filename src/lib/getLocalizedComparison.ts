import 'server-only'
import type { Locale } from '@/i18n/locales'

/**
 * Phase-1 stub. Comparison-page copy lives inline in the comparison route
 * (and partially in `src/app/best/...`). Once those strings are extracted
 * into a shared data layer, this loader will:
 *   1. Read the English comparison object.
 *   2. Look for an overlay at `data/i18n/<locale>/comparisons/<slug>.json`.
 *   3. Deep-merge overlay over English, with English fallback per key.
 *
 * For now this returns `null` for non-English locales — callers should fall
 * back to the English page.
 */
export interface LocalizedComparison {
  slug: string
  // Shape will be defined in Phase 2.
  [key: string]: unknown
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function getLocalizedComparison(_slug: string, _locale: Locale): LocalizedComparison | null {
  // TODO(phase-2): wire up once comparison metadata is extracted.
  return null
}
