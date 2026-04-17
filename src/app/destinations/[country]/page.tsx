import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getHotelsByDestination, getAllDestinations } from '@/lib/hotels'
import HotelCard from '@/components/HotelCard'
import Stay22MapWidget from '@/components/Stay22MapWidget'

interface Props {
  params: Promise<{ country: string }>
}

export async function generateStaticParams() {
  return getAllDestinations().map(d => ({ country: d }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country } = await params
  const name = country.replace(/-/g, ' ')
  return {
    title: `Best Honeymoon Hotels in ${name.charAt(0).toUpperCase() + name.slice(1)}`,
    description: `Curated honeymoon hotels in ${name} — scored for romance, verified by experts. Find your perfect stay.`,
  }
}

export default async function DestinationPage({ params }: Props) {
  const { country } = await params
  const hotels = getHotelsByDestination(country)
  const destinationName = country.replace(/-/g, ' ')

  if (hotels.length === 0) notFound()

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="mb-10">
        <p className="text-rose-600 text-sm font-medium uppercase tracking-wide mb-2">Honeymoon Guide</p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 capitalize">
          Best Honeymoon Hotels in {destinationName}
        </h1>
        <p className="text-gray-500 text-lg max-w-2xl">
          {hotels.length} hotels curated and scored for honeymooners. Every property has a Honeymoon Score ≥ 50.
        </p>
      </div>

      {/* Stay22 Map */}
      <div className="mb-10">
        <Stay22MapWidget location={destinationName} height={450} />
      </div>

      {/* Hotel Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {hotels.map(hotel => (
          <HotelCard key={hotel.slug} hotel={hotel} />
        ))}
      </div>
    </div>
  )
}
