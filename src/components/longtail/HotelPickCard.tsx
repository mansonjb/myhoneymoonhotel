'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import type { Hotel } from '../../../types/hotel'
import type { Locale } from '@/i18n/locales'

interface HotelPickCardProps {
  hotel: Hotel
  rationale?: string
  locale?: Locale
}

export default function HotelPickCard({ hotel, rationale, locale = 'en' }: HotelPickCardProps) {
  const [imgFailed, setImgFailed] = useState(false)
  const hero = hotel.photos?.find(p => p.type === 'hero') ?? hotel.photos?.[0]
  const href = locale === 'en' ? `/hotels/${hotel.slug}` : `/${locale}/hotels/${hotel.slug}`

  return (
    <Link
      href={href}
      className="group block border border-zinc-100 rounded-2xl overflow-hidden bg-white hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
    >
      <div className="relative aspect-[16/10] bg-zinc-100">
        {hero && !imgFailed ? (
          <Image
            src={hero.url}
            alt={hero.alt}
            fill
            className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            onError={() => setImgFailed(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-rose-50 to-rose-100/40">
            <span className="text-rose-200 text-4xl">◆</span>
          </div>
        )}
        <div className="absolute top-3 right-3 bg-black/55 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1.5 rounded-xl tabular-nums">
          {hotel.honeymoon_score}<span className="text-white/50 font-normal">/100</span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-display text-lg text-zinc-900 leading-snug group-hover:text-rose-500 transition-colors">
          {hotel.name}
        </h3>
        <p className="text-zinc-400 text-xs capitalize mt-1">
          {hotel.destination.replace(/-/g, ' ')}, {hotel.country.replace(/-/g, ' ')} · {hotel.stars}★
        </p>

        {rationale && (
          <p className="text-zinc-500 text-sm italic mt-3 leading-relaxed">
            {rationale}
          </p>
        )}

        <div className="flex items-end justify-between mt-4">
          <div>
            <span className="text-zinc-400 text-xs">from </span>
            <span className="font-semibold text-zinc-900">${hotel.price_per_night_usd.min.toLocaleString()}</span>
            <span className="text-zinc-400 text-xs">/night</span>
          </div>
          <span className="text-rose-500 font-medium text-sm group-hover:underline">
            Check availability →
          </span>
        </div>
      </div>
    </Link>
  )
}
