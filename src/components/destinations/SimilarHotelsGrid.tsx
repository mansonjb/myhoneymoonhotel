import Link from 'next/link'
import Image from 'next/image'
import { getAllHotels } from '@/lib/hotels'
import type { Locale } from '@/i18n/locales'
import type { Hotel } from '../../../types/hotel'
import { localizedPath } from '@/lib/alternates'

interface Props {
  currentHotelSlug: string
  destination: string
  experienceTypes: string[]
  locale?: Locale
}

const HEADING: Record<Locale, string> = {
  en: 'Similar hotels you might consider',
  fr: 'Hôtels similaires à considérer',
  es: 'Hoteles similares para considerar',
  pt: 'Hotéis similares para considerar',
}

const SUBHEAD: Record<Locale, string> = {
  en: 'Same destination, same vibe — ranked by honeymoon score.',
  fr: 'Même destination, même ambiance — classés par score lune de miel.',
  es: 'Mismo destino, mismo ambiente — clasificados por puntaje.',
  pt: 'Mesmo destino, mesmo clima — classificados por pontuação.',
}

const SCORE_LABEL: Record<Locale, string> = {
  en: 'Score',
  fr: 'Score',
  es: 'Puntaje',
  pt: 'Pontuação',
}

const FROM: Record<Locale, string> = {
  en: 'from',
  fr: 'à partir de',
  es: 'desde',
  pt: 'a partir de',
}

const PER_NIGHT: Record<Locale, string> = {
  en: '/night',
  fr: '/nuit',
  es: '/noche',
  pt: '/noite',
}

function pickSimilar(currentSlug: string, destination: string, experienceTypes: string[]): Hotel[] {
  const all = getAllHotels().filter(h => h.slug !== currentSlug)
  const sameDestSameStyle = all
    .filter(h => h.destination === destination && h.experience_types.some(t => experienceTypes.includes(t)))
    .sort((a, b) => b.honeymoon_score - a.honeymoon_score)
  if (sameDestSameStyle.length >= 4) return sameDestSameStyle.slice(0, 6)
  const sameDest = all
    .filter(h => h.destination === destination)
    .sort((a, b) => b.honeymoon_score - a.honeymoon_score)
  const merged: Hotel[] = []
  const seen = new Set<string>()
  for (const h of [...sameDestSameStyle, ...sameDest]) {
    if (!seen.has(h.slug)) {
      seen.add(h.slug)
      merged.push(h)
    }
    if (merged.length >= 6) break
  }
  return merged
}

export default function SimilarHotelsGrid({ currentHotelSlug, destination, experienceTypes, locale = 'en' }: Props) {
  const similar = pickSimilar(currentHotelSlug, destination, experienceTypes)
  if (similar.length === 0) return null
  return (
    <section className="my-16">
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-rose-400 mb-2">Similar picks</p>
        <h2 className="font-display text-3xl md:text-4xl text-zinc-900 mb-2">{HEADING[locale]}</h2>
        <p className="text-zinc-500">{SUBHEAD[locale]}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {similar.map(h => {
          const hero = h.photos.find(p => p.type === 'hero')?.url ?? h.photos[0]?.url
          return (
            <Link
              key={h.slug}
              href={localizedPath(`/hotels/${h.slug}`, locale)}
              className="group block rounded-2xl overflow-hidden border border-zinc-200 hover:border-rose-300 bg-white shadow-sm hover:shadow-md transition-all"
            >
              <div className="relative aspect-[4/3] bg-gradient-to-br from-rose-100 to-rose-200 overflow-hidden">
                {hero && (
                  <Image
                    src={hero}
                    alt={h.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/50 to-transparent" />
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur rounded-full px-2.5 py-1 text-xs font-bold text-rose-600">
                  {h.honeymoon_score}/100
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-zinc-900 text-sm mb-1 line-clamp-1">{h.name}</h3>
                <p className="text-zinc-500 text-xs mb-2">
                  {SCORE_LABEL[locale]} {h.honeymoon_score} · {FROM[locale]} ${h.price_per_night_usd.min.toLocaleString()}{PER_NIGHT[locale]}
                </p>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-rose-600 group-hover:text-rose-700">
                  →
                </span>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
