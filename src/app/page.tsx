import Link from 'next/link'
import { getAllHotels, getAllDestinations } from '@/lib/hotels'
import HotelCard from '@/components/HotelCard'

const EXPERIENCE_TYPES = [
  { slug: 'overwater-bungalows', label: 'Overwater Villas', emoji: '🌊' },
  { slug: 'adults-only', label: 'Adults Only', emoji: '💑' },
  { slug: 'safari', label: 'Safari', emoji: '🦁' },
  { slug: 'luxury', label: 'Luxury', emoji: '✨' },
  { slug: 'minimoon', label: 'Minimoon', emoji: '💍' },
  { slug: 'ski', label: 'Ski & Mountain', emoji: '⛷️' },
]

export default function HomePage() {
  const topHotels = getAllHotels().slice(0, 6)
  const destinations = getAllDestinations().slice(0, 8)

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-rose-50 to-pink-100 px-6 py-20 text-center">
        <p className="text-rose-600 text-sm font-medium uppercase tracking-widest mb-4">Honeymoon Hotel Guide</p>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 max-w-3xl mx-auto leading-tight">
          Is this hotel worth it for your honeymoon?
        </h1>
        <p className="text-gray-600 text-lg max-w-xl mx-auto mb-10">
          Every hotel is scored for romance. Get real verdicts, room picks, 7-night itineraries, and the email to send before arrival.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          {destinations.map(d => (
            <Link
              key={d}
              href={`/destinations/${d}`}
              className="bg-white rounded-full px-5 py-2 text-sm font-medium text-gray-700 shadow-sm hover:shadow-md hover:text-rose-700 transition-all capitalize"
            >
              {d.replace(/-/g, ' ')}
            </Link>
          ))}
        </div>
      </section>

      {/* Experience Types */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse by experience</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {EXPERIENCE_TYPES.map(exp => (
            <Link
              key={exp.slug}
              href={`/experiences/${exp.slug}`}
              className="bg-rose-50 hover:bg-rose-100 rounded-2xl p-4 text-center transition-colors"
            >
              <div className="text-3xl mb-2">{exp.emoji}</div>
              <div className="text-sm font-medium text-gray-700">{exp.label}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Top Hotels */}
      {topHotels.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 pb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Top-rated honeymoon hotels</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {topHotels.map(hotel => (
              <HotelCard key={hotel.slug} hotel={hotel} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
