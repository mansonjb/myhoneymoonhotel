import 'server-only'
import * as fs from 'fs'
import * as path from 'path'
import type { ExperienceMeta } from '@/types/experience'
import type { Locale } from '@/i18n/locales'
import { EXPERIENCE_META } from '@/../data/experiences'

const I18N_DIR = path.join(process.cwd(), 'data', 'i18n')

/**
 * Returns an `ExperienceMeta` merged with the locale overlay if any.
 * - English (or unknown slug): returns the base unchanged (or `null`).
 * - Other locales: deep-merges the per-key overlay over the English base.
 *   Per-array keys (reasons, destinations, months, etc.) the overlay replaces
 *   the base array element-by-element with English fallback at the field level.
 */
export function getLocalizedExperience(slug: string, locale: Locale): ExperienceMeta | null {
  const base = EXPERIENCE_META[slug]
  if (!base) return null
  if (locale === 'en') return base

  const overlayPath = path.join(I18N_DIR, locale, 'experiences', `${slug}.json`)
  if (!fs.existsSync(overlayPath)) return base

  try {
    const overlay = JSON.parse(fs.readFileSync(overlayPath, 'utf-8')) as Partial<ExperienceMeta>
    return mergeExperience(base, overlay)
  } catch {
    return base
  }
}

function mergeArr<T extends object>(baseArr: T[], overlayArr: Partial<T>[] | undefined): T[] {
  if (!overlayArr) return baseArr
  return baseArr.map((item, i) => ({ ...item, ...(overlayArr[i] ?? {}) }))
}

function mergeStringArr(baseArr: string[], overlayArr: string[] | undefined): string[] {
  if (!overlayArr) return baseArr
  return baseArr.map((item, i) => overlayArr[i] ?? item)
}

function mergeExperience(base: ExperienceMeta, o: Partial<ExperienceMeta>): ExperienceMeta {
  return {
    ...base,
    ...o,
    perfectFor: mergeStringArr(base.perfectFor, o.perfectFor),
    skipIf: mergeStringArr(base.skipIf, o.skipIf),
    expertTips: mergeStringArr(base.expertTips, o.expertTips),
    related: o.related ?? base.related,
    stats: mergeArr(base.stats, o.stats),
    reasons: mergeArr(base.reasons, o.reasons),
    destinations: mergeArr(base.destinations, o.destinations),
    months: mergeArr(base.months, o.months),
    budgetTiers: mergeArr(base.budgetTiers, o.budgetTiers),
    checklist: o.checklist
      ? base.checklist.map((c, i) => {
          const ov = o.checklist?.[i]
          if (!ov) return c
          return { title: ov.title ?? c.title, items: mergeStringArr(c.items, ov.items) }
        })
      : base.checklist,
    faqs: mergeArr(base.faqs, o.faqs),
    hero: o.hero ?? base.hero,
    label: o.label ?? base.label,
  }
}
