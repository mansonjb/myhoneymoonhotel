import 'server-only'
import * as fs from 'fs'
import * as path from 'path'
import type { DestinationMeta } from '@/types/destination'
import type { Locale } from '@/i18n/locales'
import { DESTINATION_META } from '@/../data/destinations'

const I18N_DIR = path.join(process.cwd(), 'data', 'i18n')

/**
 * Returns a `DestinationMeta` merged with the locale overlay if any.
 * - English (or unknown slug): returns the base unchanged (or `null`).
 * - Other locales: deep-merges the per-key overlay over the English base.
 *   Per-array keys (experiences, months, etc.) the overlay replaces the base
 *   array element-by-element with English fallback at the field level.
 */
export function getLocalizedDestination(slug: string, locale: Locale): DestinationMeta | null {
  const base = DESTINATION_META[slug]
  if (!base) return null
  if (locale === 'en') return base

  const overlayPath = path.join(I18N_DIR, locale, 'destinations', `${slug}.json`)
  if (!fs.existsSync(overlayPath)) return base

  try {
    const overlay = JSON.parse(fs.readFileSync(overlayPath, 'utf-8')) as Partial<DestinationMeta>
    return mergeDestination(base, overlay)
  } catch {
    return base
  }
}

function mergeArr<T extends object>(baseArr: T[], overlayArr: Partial<T>[] | undefined): T[] {
  if (!overlayArr) return baseArr
  return baseArr.map((item, i) => ({ ...item, ...(overlayArr[i] ?? {}) }))
}

function mergeDestination(base: DestinationMeta, o: Partial<DestinationMeta>): DestinationMeta {
  return {
    ...base,
    ...o,
    perfectFor: o.perfectFor ?? base.perfectFor,
    skipIf: o.skipIf ?? base.skipIf,
    experiences: mergeArr(base.experiences, o.experiences),
    months: mergeArr(base.months, o.months),
    budgetTiers: mergeArr(base.budgetTiers, o.budgetTiers),
    areas: mergeArr(base.areas, o.areas),
    expertTips: mergeArr(base.expertTips, o.expertTips),
    packing: mergeArr(base.packing, o.packing),
    guide: { ...base.guide, ...(o.guide ?? {}) },
    // Hero is always English (no overlay normally, but allow it).
    hero: o.hero ?? base.hero,
  }
}
