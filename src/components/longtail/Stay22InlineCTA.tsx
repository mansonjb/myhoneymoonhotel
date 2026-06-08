import { buildAllezDestLink } from '@/lib/stay22'
import type { Locale } from '@/i18n/locales'

interface Stay22InlineCTAProps {
  destination: string
  country?: string
  headline: string
  subline: string
  campaign?: string
  locale?: Locale
}

type StayLocale = 'en' | 'es' | 'pt' | 'fr'

export default function Stay22InlineCTA({
  destination,
  country,
  headline,
  subline,
  campaign = 'longtail',
  locale = 'en',
}: Stay22InlineCTAProps) {
  const stayLocale: StayLocale = (['en', 'es', 'pt', 'fr'].includes(locale) ? locale : 'en') as StayLocale
  const href = buildAllezDestLink(destination, country ?? '', campaign, stayLocale)

  return (
    <div className="not-prose my-12 bg-gradient-to-br from-rose-50 to-amber-50/40 border border-rose-100 rounded-2xl p-7 sm:p-9">
      <div className="flex flex-col sm:flex-row sm:items-center gap-5">
        <div className="flex-1">
          <h3 className="font-display text-2xl text-zinc-900 leading-tight">
            {headline}
          </h3>
          <p className="text-zinc-600 text-sm mt-2 leading-relaxed">
            {subline}
          </p>
        </div>
        <a
          href={href}
          target="_blank"
          rel="noopener nofollow sponsored"
          className="shrink-0 inline-flex items-center justify-center bg-rose-500 hover:bg-rose-600 text-white font-medium text-sm px-6 py-3.5 rounded-full transition-colors shadow-sm"
        >
          Find your best price →
        </a>
      </div>
    </div>
  )
}
