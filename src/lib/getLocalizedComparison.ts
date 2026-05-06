import 'server-only'
import * as fs from 'fs'
import * as path from 'path'
import type { Locale } from '@/i18n/locales'
import { getComparisonBySlug, type Comparison, type ComparisonCriterion } from '@/../data/comparisons'

const I18N_DIR = path.join(process.cwd(), 'data', 'i18n')

interface OverlayComparison {
  tagline?: string
  metaDescription?: string
  verdict?: string
  tldr?: Partial<Comparison['tldr']>
  criteria?: Array<Partial<Pick<ComparisonCriterion, 'label' | 'aDetail' | 'bDetail'>>>
  pickA?: { title?: string; bullets?: string[] }
  pickB?: { title?: string; bullets?: string[] }
  faqs?: Array<{ q?: string; a?: string }>
  a?: { label?: string }
  b?: { label?: string }
}

/**
 * Returns a `Comparison` merged with the locale overlay if any.
 */
export function getLocalizedComparison(slug: string, locale: Locale): Comparison | undefined {
  const base = getComparisonBySlug(slug)
  if (!base) return undefined
  if (locale === 'en') return base

  const overlayPath = path.join(I18N_DIR, locale, 'comparisons', `${slug}.json`)
  if (!fs.existsSync(overlayPath)) return base

  try {
    const overlay = JSON.parse(fs.readFileSync(overlayPath, 'utf-8')) as OverlayComparison
    return mergeComparison(base, overlay)
  } catch {
    return base
  }
}

function mergeComparison(base: Comparison, o: OverlayComparison): Comparison {
  return {
    ...base,
    a: { ...base.a, label: o.a?.label ?? base.a.label },
    b: { ...base.b, label: o.b?.label ?? base.b.label },
    tagline: o.tagline ?? base.tagline,
    metaDescription: o.metaDescription ?? base.metaDescription,
    verdict: o.verdict ?? base.verdict,
    tldr: { ...base.tldr, ...(o.tldr ?? {}) },
    criteria: o.criteria
      ? base.criteria.map((c, i) => ({
          ...c,
          label: o.criteria![i]?.label ?? c.label,
          aDetail: o.criteria![i]?.aDetail ?? c.aDetail,
          bDetail: o.criteria![i]?.bDetail ?? c.bDetail,
        }))
      : base.criteria,
    pickA: {
      title: o.pickA?.title ?? base.pickA.title,
      bullets: o.pickA?.bullets ?? base.pickA.bullets,
    },
    pickB: {
      title: o.pickB?.title ?? base.pickB.title,
      bullets: o.pickB?.bullets ?? base.pickB.bullets,
    },
    faqs: o.faqs
      ? base.faqs.map((f, i) => ({
          q: o.faqs![i]?.q ?? f.q,
          a: o.faqs![i]?.a ?? f.a,
        }))
      : base.faqs,
  }
}
