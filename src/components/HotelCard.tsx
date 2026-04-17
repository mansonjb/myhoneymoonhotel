import Image from 'next/image'
import Link from 'next/link'
import { Hotel } from '../../types/hotel'

interface HotelCardProps {
  hotel: Hotel
}

export default function HotelCard({ hotel }: HotelCardProps) {
  const heroPhoto = hotel.photos.find(p => p.type === 'hero') || hotel.photos[0]

  return (
    <Link href={`/hotels/${hotel.slug}`} className="group block rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow bg-white">
      <div className="relative aspect-[4/3] overflow-hidden">
        {heroPhoto ? (
          <Image
            src={heroPhoto.url}
            alt={heroPhoto.alt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full bg-rose-100 flex items-center justify-center">
            <span className="text-rose-300 text-4xl">🌸</span>
          </div>
        )}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold text-rose-700">
          {hotel.honeymoon_score}/100
        </div>
        {hotel.adults_only && (
          <div className="absolute top-3 left-3 bg-rose-600 text-white rounded-full px-3 py-1 text-xs font-medium">
            Adults Only
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 text-lg leading-tight group-hover:text-rose-700 transition-colors">
          {hotel.name}
        </h3>
        <p className="text-gray-500 text-sm mt-1 capitalize">
          {hotel.destination.replace(/-/g, ' ')}, {hotel.country.replace(/-/g, ' ')}
        </p>
        <div className="flex items-center justify-between mt-3">
          <span className="text-gray-700 font-medium">
            from <span className="text-rose-700">${hotel.price_per_night_usd.min}</span>
            <span className="text-gray-400 text-sm">/night</span>
          </span>
          <span className="text-rose-600 text-sm font-medium group-hover:underline">
            View hotel →
          </span>
        </div>
      </div>
    </Link>
  )
}
