import Image from 'next/image'
import Link from 'next/link'
import { Hotel } from '../../types/hotel'

interface HotelCardProps {
  hotel: Hotel
}

export default function HotelCard({ hotel }: HotelCardProps) {
  const heroPhoto = hotel.photos.find(p => p.type === 'hero') || hotel.photos[0]

  return (
    <Link href={`/hotels/${hotel.slug}`} className="group block">
      {/* Photo */}
      <div className="relative aspect-[3/2] overflow-hidden rounded-2xl bg-zinc-100 mb-4">
        {heroPhoto ? (
          <Image
            src={heroPhoto.url}
            alt={heroPhoto.alt}
            fill
            className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
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
            Adults-Only
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
            <span className="text-zinc-400 text-xs">from </span>
            <span className="font-semibold text-zinc-900">${hotel.price_per_night_usd.min.toLocaleString()}</span>
            <span className="text-zinc-400 text-xs">/night</span>
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
