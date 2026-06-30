import Link from 'next/link'
import { getClustersForDestination, CLUSTER_LABELS } from '../../../data/destination-clusters'
import type { Locale } from '@/i18n/locales'

interface Props {
  slug: string
  locale?: Locale
}

const THEME_LABEL: Record<Locale, string> = {
  en: 'Theme',
  fr: 'Thème',
  es: 'Tema',
  pt: 'Tema',
}

export default function SemanticClusterPills({ slug, locale = 'en' }: Props) {
  const clusters = getClustersForDestination(slug)
  if (clusters.length === 0) return null
  const localePrefix = locale === 'en' ? '' : `/${locale}`
  return (
    <div className="flex flex-wrap gap-2 my-6">
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400 mr-1 self-center">
        {THEME_LABEL[locale]}:
      </span>
      {clusters.map(c => (
        <Link
          key={c.slug}
          href={`${localePrefix}/destinations`}
          className="inline-flex items-center gap-1.5 bg-rose-50 hover:bg-rose-100 border border-rose-200 rounded-full px-3 py-1 text-xs font-semibold text-rose-700 transition-colors"
        >
          <span>{c.emoji}</span>
          <span>{CLUSTER_LABELS[c.slug][locale]}</span>
        </Link>
      ))}
    </div>
  )
}
