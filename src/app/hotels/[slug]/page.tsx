import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getHotelBySlug, getAllHotels, getRelatedHotels } from '@/lib/hotels'
import HotelSchema from '@/components/HotelSchema'
import Stay22MapWidget from '@/components/Stay22MapWidget'
import HotelRecommendations from '@/components/HotelRecommendations'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const hotels = getAllHotels()
  return hotels.map(h => ({ slug: h.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const hotel = getHotelBySlug(slug)
  if (!hotel) return {}
  return {
    title: `${hotel.name} — Honeymoon Review`,
    description: hotel.content.verdict.slice(0, 160),
  }
}

export default async function HotelPage({ params }: Props) {
  const { slug } = await params
  const hotel = getHotelBySlug(slug)
  if (!hotel) notFound()

  const heroPhoto = hotel.photos.find(p => p.type === 'hero') || hotel.photos[0]
  const galleryPhotos = hotel.photos.filter(p => p.type !== 'hero').slice(0, 4)
  const { sameStyle, sameDestination } = getRelatedHotels(hotel)

  return (
    <>
      <HotelSchema hotel={hotel} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-400 mb-6" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-rose-600">Home</Link>
          {' / '}
          <Link href={`/destinations/${hotel.destination}`} className="hover:text-rose-600 capitalize">
            {hotel.destination.replace(/-/g, ' ')}
          </Link>
          {' / '}
          <span className="text-gray-600">{hotel.name}</span>
        </nav>

        {/* Hero */}
        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-8 shadow-xl">
          {heroPhoto ? (
            <Image
              src={heroPhoto.url}
              alt={heroPhoto.alt}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 896px) 100vw, 896px"
            />
          ) : (
            <div className="w-full h-full bg-rose-50 flex items-center justify-center">
              <span className="text-rose-200 text-6xl">🌸</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-rose-600 rounded-full px-3 py-1 text-sm font-semibold">
                {hotel.honeymoon_score}/100 Honeymoon Score
              </span>
              {hotel.adults_only && (
                <span className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-sm">
                  Adults Only
                </span>
              )}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">{hotel.name}</h1>
            <p className="text-white/80 mt-1 capitalize">
              {hotel.destination.replace(/-/g, ' ')}, {hotel.country.replace(/-/g, ' ')}
              {' · '}
              {'★'.repeat(hotel.stars)}
              {' · '}
              from ${hotel.price_per_night_usd.min}/night
            </p>
          </div>
        </div>

        {/* Gallery */}
        {galleryPhotos.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-10">
            {galleryPhotos.map((photo, i) => (
              <div key={i} className="relative aspect-square rounded-xl overflow-hidden">
                <Image
                  src={photo.url}
                  alt={photo.alt}
                  fill
                  loading="lazy"
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        )}

        {/* Verdict */}
        <section id="hotel-verdict" className="bg-rose-50 rounded-2xl p-6 mb-8">
          <h2 className="text-xl font-bold text-rose-800 mb-3">Is it worth it for your honeymoon?</h2>
          <p className="text-gray-700 leading-relaxed">{hotel.content.verdict}</p>
        </section>

        {/* Best Room */}
        <section id="hotel-best-room" className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Which room to book</h2>
          <p className="text-gray-700 leading-relaxed">{hotel.content.best_room}</p>
        </section>

        {/* True Cost */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">True cost breakdown</h2>
          <div className="bg-gray-50 rounded-2xl overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {hotel.content.true_cost_breakdown.map((item, i) => (
                  <tr key={i} className={`${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'} ${item.item.toLowerCase().includes('total') ? 'font-bold text-rose-700' : ''}`}>
                    <td className="px-4 py-3">{item.item}</td>
                    <td className="px-4 py-3 text-right font-medium">{item.cost_usd}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Stay22 Widget */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Check availability</h2>
          <Stay22MapWidget location={hotel.name} />
        </section>

        {/* 7-Night Itinerary */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Your 7-night honeymoon itinerary</h2>
          <div className="space-y-4">
            {hotel.content.itinerary_7_nights.map(day => (
              <div key={day.day} className="flex gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                <div className="flex-shrink-0 w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center">
                  <span className="font-bold text-rose-700 text-lg">{day.day}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{day.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{day.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Honest Caveats */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What to know before you book</h2>
          <ul className="space-y-3">
            {hotel.content.honest_caveats.map((caveat, i) => (
              <li key={i} className="flex gap-3 text-gray-700">
                <span className="flex-shrink-0 text-amber-500 mt-0.5">⚠</span>
                {caveat}
              </li>
            ))}
          </ul>
        </section>

        {/* Email Template */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Email to send the hotel (copy &amp; paste)</h2>
          <pre className="bg-gray-50 border border-gray-200 rounded-2xl p-6 text-sm text-gray-700 whitespace-pre-wrap font-mono leading-relaxed overflow-auto">
            {hotel.content.hotel_email_template}
          </pre>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently asked questions</h2>
          <div className="space-y-4">
            {hotel.content.faqs.map((faq, i) => (
              <details key={i} className="group bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-medium text-gray-900 hover:bg-rose-50 transition-colors">
                  {faq.question}
                  <span className="text-gray-400 group-open:rotate-180 transition-transform text-lg">↓</span>
                </summary>
                <p className="px-5 pb-5 text-gray-600 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Recommendations */}
        <HotelRecommendations
          sameStyle={sameStyle}
          sameDestination={sameDestination}
          currentHotel={hotel}
        />
      </article>
    </>
  )
}
