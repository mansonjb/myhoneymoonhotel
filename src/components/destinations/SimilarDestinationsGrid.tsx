import Link from 'next/link'
import Image from 'next/image'
import {
  getSimilarDestinations,
  getClustersForDestination,
  CLUSTER_LABELS,
} from '../../../data/destination-clusters'
import { getAllHotels } from '@/lib/hotels'
import type { Locale } from '@/i18n/locales'
import type { Hotel } from '../../../types/hotel'

interface Props {
  slug: string
  displayLabel: string
  locale?: Locale
}

const HEADING: Record<Locale, string> = {
  en: 'You might also love',
  fr: 'Vous aimerez aussi',
  es: 'También les encantará',
  pt: 'Você também vai amar',
}

const SUBHEAD: Record<Locale, (l: string) => string> = {
  en: l => `If ${l} caught your heart, these honeymoon destinations hit the same notes.`,
  fr: l => `Si ${l} vous a séduits, ces destinations de lune de miel vous parleront tout autant.`,
  es: l => `Si ${l} les enamoró, estos destinos resonarán con ustedes igual.`,
  pt: l => `Se ${l} encantou vocês, estes destinos vão ressoar igualmente.`,
}

const VIEW: Record<Locale, string> = {
  en: 'Explore',
  fr: 'Découvrir',
  es: 'Explorar',
  pt: 'Explorar',
}

const SCORE_LABEL: Record<Locale, string> = {
  en: 'Score',
  fr: 'Score',
  es: 'Puntaje',
  pt: 'Pontuação',
}

function prettyLabel(slug: string): string {
  return slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
}

function destinationFlagshipHotel(slug: string): Hotel | undefined {
  const hotels = getAllHotels()
    .filter(h => h.destination === slug)
    .sort((a, b) => b.honeymoon_score - a.honeymoon_score)
  return hotels[0]
}

export default function SimilarDestinationsGrid({ slug, displayLabel, locale = 'en' }: Props) {
  const similar = getSimilarDestinations(slug, 6)
  const clusters = getClustersForDestination(slug)
  if (similar.length === 0) return null
  const localePrefix = locale === 'en' ? '' : `/${locale}`

  return (
    <section className="my-16">
      <div className="mb-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-rose-400 mb-2">
          {clusters.map(c => CLUSTER_LABELS[c.slug][locale]).join(' · ')}
        </p>
        <h2 className="font-display text-3xl md:text-4xl text-zinc-900 mb-2">{HEADING[locale]}</h2>
        <p className="text-zinc-500 max-w-2xl mx-auto">{SUBHEAD[locale](displayLabel)}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {similar.map(d => {
          const flagship = destinationFlagshipHotel(d)
          const hero = flagship?.photos?.find(p => p.type === 'hero')?.url ?? flagship?.photos?.[0]?.url
          return (
            <Link
              key={d}
              href={`${localePrefix}/destinations/${d}`}
              className="group block rounded-2xl overflow-hidden border border-zinc-200 hover:border-rose-300 bg-white shadow-sm hover:shadow-md transition-all"
            >
              <div className="relative aspect-[3/2] bg-gradient-to-br from-rose-100 to-rose-200 overflow-hidden">
                {hero ? (
                  <Image
                    src={hero}
                    alt={prettyLabel(d)}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-rose-300 text-5xl">◆</div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="font-display text-2xl text-white">{prettyLabel(d)}</h3>
                </div>
              </div>
              <div className="p-4">
                {flagship && (
                  <p className="text-xs text-zinc-500 mb-2">
                    <span className="font-semibold text-zinc-700">{flagship.name}</span>
                    {' '}· {SCORE_LABEL[locale]} {flagship.honeymoon_score}/100
                  </p>
                )}
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-rose-600 group-hover:text-rose-700">
                  {VIEW[locale]} →
                </span>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
