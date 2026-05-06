'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Hotel } from '../../types/hotel'
import type { Locale } from '@/i18n/locales'
import en from '@/i18n/messages/en.json'
import es from '@/i18n/messages/es.json'
import pt from '@/i18n/messages/pt.json'

const DICT: Record<Locale, Record<string, string>> = {
  en: en as Record<string, string>,
  es: es as Record<string, string>,
  pt: pt as Record<string, string>,
}
function tx(loc: Locale, key: string, fallback: string): string {
  const v = DICT[loc]?.[key] ?? DICT.en[key]
  return typeof v === 'string' && v.length > 0 ? v : fallback
}

// Destination → curated Unsplash fallback (landscape, honeymoon-appropriate)
const DEST_FALLBACK: Record<string, string> = {
  'maldives':          'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80',
  'bora-bora':         'https://images.unsplash.com/photo-1589979481223-deb893043163?w=800&q=80',
  'seychelles':        'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800&q=80',
  'st-lucia':          'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=800&q=80',
  'santorini':         'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80',
  'turks-and-caicos':  'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=800&q=80',
  'bali':              'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80',
  'hawaii':            'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
  'thailand':          'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80',
  'mexico':            'https://images.unsplash.com/photo-1512813195386-6cf811ad3542?w=800&q=80',
  'amalfi':            'https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?w=800&q=80',
  'greece':            'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80',
  'mauritius':         'https://images.unsplash.com/photo-1563911302283-d2bc129e7570?w=800&q=80',
  'zanzibar':          'https://images.unsplash.com/photo-1586861256632-a9994f0a1a7d?w=800&q=80',
  'kenya':             'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80',
  'fiji':              'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800&q=80',
  'croatia':           'https://images.unsplash.com/photo-1555990793-da11153b2473?w=800&q=80',
  'portugal':          'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800&q=80',
  'morocco':           'https://images.unsplash.com/photo-1539020140153-e479b8e9d1ef?w=800&q=80',
  'japan':             'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80',
  'sri-lanka':         'https://images.unsplash.com/photo-1588258219511-64eb629cb833?w=800&q=80',
  'indonesia':         'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80',
  'philippines':       'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&q=80',
  'mozambique':        'https://images.unsplash.com/photo-1586861256632-a9994f0a1a7d?w=800&q=80',
  'reunion':           'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800&q=80',
  'madagascar':        'https://images.unsplash.com/photo-1535941339077-2dd1c7963098?w=800&q=80',
  'st-barts':          'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=800&q=80',
  'south-africa':      'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80',
  'tanzania':          'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80',
  'turkey':            'https://images.unsplash.com/photo-1527838832700-5059252407fa?w=800&q=80',
  'french-polynesia':  'https://images.unsplash.com/photo-1589979481223-deb893043163?w=800&q=80',
  'vietnam':           'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80',
  'cambodia':          'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80',
  'costa-rica':        'https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=800&q=80',
  'spain':             'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800&q=80',
  'cape-verde':        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
  'new-zealand':       'https://images.unsplash.com/photo-1469521669194-babb45599def?w=800&q=80',
  'caribbean':         'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=800&q=80',
  'oman':              'https://images.unsplash.com/photo-1539020140153-e479b8e9d1ef?w=800&q=80',
  'uae':               'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
  'switzerland':       'https://images.unsplash.com/photo-1527668752968-14dc70a27c95?w=800&q=80',
  'botswana':          'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80',
  'jordan':            'https://images.unsplash.com/photo-1563177682-12cf7666a6e8?w=800&q=80',
  'iceland':           'https://images.unsplash.com/photo-1531168556467-80aace0d0144?w=800&q=80',
  'sardegna':          'https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?w=800&q=80',
  'argentina':         'https://images.unsplash.com/photo-1607627000458-210e8d2bdb1d?w=800&q=80',
  'italy':             'https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?w=800&q=80',
  'tuscany':           'https://images.unsplash.com/photo-1543429775-e7c89eddffd5?w=800&q=80',
  'sicily':            'https://images.unsplash.com/photo-1558642084-fd07fae5282e?w=800&q=80',
  'barbados':          'https://images.unsplash.com/photo-1577094115226-e54e6726ce98?w=800&q=80',
  'jamaica':           'https://images.unsplash.com/photo-1518553552276-fbcb05245056?w=800&q=80',
  'anguilla':          'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800&q=80',
  'antigua':           'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=800&q=80',
  'bahamas':           'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800&q=80',
  'aruba':             'https://images.unsplash.com/photo-1559496417-e7f25cb247f3?w=800&q=80',
}

const DEFAULT_FALLBACK = 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&q=80'

interface HotelCardProps {
  hotel: Hotel
  locale?: Locale
}

export default function HotelCard({ hotel, locale = 'en' }: HotelCardProps) {
  const heroPhoto = hotel.photos.find(p => p.type === 'hero') || hotel.photos[0]
  const fallbackSrc = DEST_FALLBACK[hotel.destination] ?? DEFAULT_FALLBACK
  const [imgSrc, setImgSrc] = useState(heroPhoto?.url ?? fallbackSrc)
  const href = locale === 'en' ? `/hotels/${hotel.slug}` : `/${locale}/hotels/${hotel.slug}`

  return (
    <Link href={href} className="group block">
      {/* Photo */}
      <div className="relative aspect-[3/2] overflow-hidden rounded-2xl bg-zinc-100 mb-4">
        {heroPhoto ? (
          <Image
            src={imgSrc}
            alt={heroPhoto.alt}
            fill
            className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
            onError={() => setImgSrc(fallbackSrc)}
            unoptimized={imgSrc.startsWith('https://images.unsplash')}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-zinc-50">
            <span className="text-zinc-200 text-4xl">◆</span>
          </div>
        )}

        {/* Overlay — only top right score */}
        <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1.5 rounded-xl tabular-nums">
          {hotel.honeymoon_score}<span className="text-white/50 font-normal">/100</span>
        </div>

        {/* Adults-only pill — top left, only if true */}
        {hotel.adults_only && (
          <div className="absolute top-3 left-3 bg-black/50 backdrop-blur-sm text-white text-[11px] font-medium px-2.5 py-1.5 rounded-xl">
            {tx(locale, 'card.adultsOnly', 'Adults-Only')}
          </div>
        )}
      </div>

      {/* Text */}
      <div>
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="font-display text-xl text-zinc-900 leading-snug group-hover:text-rose-500 transition-colors">
            {hotel.name}
          </h3>
        </div>

        <p className="text-zinc-400 text-sm capitalize mb-3">
          {hotel.destination.replace(/-/g, ' ')}, {hotel.country.replace(/-/g, ' ')}
        </p>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-zinc-400 text-xs">{tx(locale, 'card.from', 'from')} </span>
            <span className="font-semibold text-zinc-900">${hotel.price_per_night_usd.min.toLocaleString()}</span>
            <span className="text-zinc-400 text-xs">{tx(locale, 'card.perNight', '/night')}</span>
          </div>
          <div className="flex gap-1.5">
            {hotel.experience_types.slice(0, 2).map(exp => (
              <span key={exp} className="text-[11px] text-zinc-400 border border-zinc-100 px-2.5 py-1 rounded-full capitalize">
                {exp.replace(/-/g, ' ')}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  )
}
