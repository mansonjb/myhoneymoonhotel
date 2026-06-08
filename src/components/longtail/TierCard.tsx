import type { Hotel } from '../../../types/hotel'
import HotelPickCard from './HotelPickCard'

interface TierCardProps {
  label: string
  priceRange: string
  who: string
  whatYouGet: string[]
  hotels?: Hotel[]
  body?: string
}

export default function TierCard({ label, priceRange, who, whatYouGet, hotels, body }: TierCardProps) {
  return (
    <div className="not-prose mt-10 border border-zinc-100 rounded-2xl overflow-hidden bg-white">
      <div className="bg-gradient-to-r from-rose-50 to-amber-50/40 px-6 py-5 border-b border-zinc-100">
        <div className="flex items-baseline justify-between flex-wrap gap-3">
          <h3 className="font-display text-2xl text-zinc-900">{label}</h3>
          <span className="text-rose-500 font-semibold text-sm tabular-nums">{priceRange}</span>
        </div>
        <p className="text-zinc-600 text-sm mt-2 leading-relaxed">{who}</p>
      </div>

      <div className="p-6">
        {body && (
          <p className="text-zinc-600 text-sm leading-relaxed mb-5">{body}</p>
        )}

        {whatYouGet.length > 0 && (
          <ul className="space-y-2 mb-6">
            {whatYouGet.map((b, i) => (
              <li key={i} className="flex gap-3 text-sm text-zinc-700">
                <span className="text-rose-500 shrink-0">◆</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}

        {hotels && hotels.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
            {hotels.slice(0, 3).map(h => (
              <HotelPickCard key={h.slug} hotel={h} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
