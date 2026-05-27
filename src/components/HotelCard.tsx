'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Hotel } from '../../types/hotel'
import type { Locale } from '@/i18n/locales'
import en from '@/i18n/messages/en.json'
import es from '@/i18n/messages/es.json'
import pt from '@/i18n/messages/pt.json'
import fr from '@/i18n/messages/fr.json'
import { isSavedHotel, toggleSavedHotel } from '@/lib/savedHotels'

const DICT: Record<Locale, Record<string, string>> = {
  en: en as Record<string, string>,
  es: es as Record<string, string>,
  pt: pt as Record<string, string>,
  fr: fr as Record<string, string>,
}
function tx(loc: Locale, key: string, fallback: string): string {
  const v = DICT[loc]?.[key] ?? DICT.en[key]
  return typeof v === 'string' && v.length > 0 ? v : fallback
}

interface HotelCardProps {
  hotel: Hotel
  locale?: Locale
  isEditorsPick?: boolean
}

function editorsPickLabel(locale: Locale): string {
  if (locale === 'es') return 'Selección Editor'
  if (locale === 'pt') return 'Escolha do Editor'
  return "Editor's Pick"
}

function saveTooltip(locale: Locale, saved: boolean): string {
  if (locale === 'es') return saved ? 'Guardado' : 'Guardar para después'
  if (locale === 'pt') return saved ? 'Guardado' : 'Guardar para depois'
  return saved ? 'Saved' : 'Save for later'
}

export default function HotelCard({ hotel, locale = 'en', isEditorsPick = false }: HotelCardProps) {
  const heroPhoto = hotel.photos.find(p => p.type === 'hero') || hotel.photos[0]
  const [imgFailed, setImgFailed] = useState(false)
  const [saved, setSaved] = useState(false)
  const [pulse, setPulse] = useState(false)
  const href = locale === 'en' ? `/hotels/${hotel.slug}` : `/${locale}/hotels/${hotel.slug}`

  useEffect(() => {
    setSaved(isSavedHotel(hotel.slug))
    const onChange = () => setSaved(isSavedHotel(hotel.slug))
    window.addEventListener('mhh:saved-hotels-changed', onChange)
    return () => window.removeEventListener('mhh:saved-hotels-changed', onChange)
  }, [hotel.slug])

  function handleToggleSave(e: React.MouseEvent) {
    e.preventDefault()
    e.stopPropagation()
    const next = toggleSavedHotel(hotel.slug)
    setSaved(next)
    setPulse(true)
    setTimeout(() => setPulse(false), 250)
  }

  return (
    <Link href={href} className="group block">
      {/* Photo */}
      <div className="relative aspect-[3/2] overflow-hidden rounded-2xl bg-zinc-100 mb-4">
        {heroPhoto && !imgFailed ? (
          <Image
            src={heroPhoto.url}
            alt={heroPhoto.alt}
            fill
            className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
            onError={() => setImgFailed(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-rose-50 to-rose-100/40">
            <span className="text-rose-200 text-4xl">◆</span>
          </div>
        )}

        {/* Top right: heart + score stacked */}
        <div className="absolute top-3 right-3 flex flex-col items-end gap-2">
          <button
            type="button"
            onClick={handleToggleSave}
            aria-label={saveTooltip(locale, saved)}
            title={saveTooltip(locale, saved)}
            className={`w-9 h-9 rounded-full bg-white/85 backdrop-blur-sm flex items-center justify-center shadow-sm hover:bg-white transition-all ${pulse ? 'scale-125' : 'scale-100'}`}
          >
            {saved ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#f43f5e" stroke="#f43f5e" strokeWidth="1.5" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-7-4.35-9.5-8.5C.9 9.85 2.5 6 6 6c2 0 3.5 1 4 2.5C10.5 7 12 6 14 6c3.5 0 5.1 3.85 3.5 6.5C19 16.65 12 21 12 21z" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3f3f46" strokeWidth="1.8" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-7-4.35-9.5-8.5C.9 9.85 2.5 6 6 6c2 0 3.5 1 4 2.5C10.5 7 12 6 14 6c3.5 0 5.1 3.85 3.5 6.5C19 16.65 12 21 12 21z" />
              </svg>
            )}
          </button>
          <div className="bg-black/50 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1.5 rounded-xl tabular-nums">
            {hotel.honeymoon_score}<span className="text-white/50 font-normal">/100</span>
          </div>
        </div>

        {/* Top left: Adults-only + Editor's Pick stacked */}
        <div className="absolute top-3 left-3 flex flex-col items-start gap-1.5">
          {hotel.adults_only && (
            <div className="bg-black/50 backdrop-blur-sm text-white text-[11px] font-medium px-2.5 py-1.5 rounded-xl">
              {tx(locale, 'card.adultsOnly', 'Adults-Only')}
            </div>
          )}
          {isEditorsPick && (
            <div className="bg-rose-500 text-white text-[10px] font-semibold px-2 py-1 rounded-lg shadow-sm tracking-wide">
              ★ {editorsPickLabel(locale)}
            </div>
          )}
        </div>
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
