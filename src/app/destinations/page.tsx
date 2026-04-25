import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getAllHotels } from '@/lib/hotels'

// Same region mapping as the home page (kept in sync)
const REGION_OF: Record<string, string> = {
  'maldives': 'Indian Ocean', 'seychelles': 'Indian Ocean', 'mauritius': 'Indian Ocean',
  'zanzibar': 'Indian Ocean', 'mozambique': 'Indian Ocean', 'reunion': 'Indian Ocean',
  'sri-lanka': 'Indian Ocean',
  'bora-bora': 'South Pacific', 'french-polynesia': 'South Pacific', 'fiji': 'South Pacific',
  'new-zealand': 'South Pacific',
  'st-lucia': 'Caribbean & Americas', 'turks-and-caicos': 'Caribbean & Americas',
  'st-barts': 'Caribbean & Americas', 'caribbean': 'Caribbean & Americas',
  'mexico': 'Caribbean & Americas', 'costa-rica': 'Caribbean & Americas',
  'santorini': 'Europe', 'greece': 'Europe', 'amalfi': 'Europe', 'sardegna': 'Europe',
  'croatia': 'Europe', 'portugal': 'Europe', 'spain': 'Europe',
  'switzerland': 'Europe', 'iceland': 'Europe',
  'argentina': 'South America',
  'hawaii': 'North America',
  'oman': 'Middle East', 'uae': 'Middle East', 'jordan': 'Middle East',
  'cape-verde': 'Africa & Atlantic', 'morocco': 'Africa & Atlantic',
  'kenya': 'Africa Safari', 'tanzania': 'Africa Safari', 'south-africa': 'Africa Safari',
  'botswana': 'Africa Safari',
  'thailand': 'Asia', 'indonesia': 'Asia', 'bali': 'Asia', 'philippines': 'Asia',
  'vietnam': 'Asia', 'cambodia': 'Asia', 'japan': 'Asia',
}
const REGION_ORDER = [
  'Indian Ocean',
  'South Pacific',
  'Caribbean & Americas',
  'South America',
  'Europe',
  'Asia',
  'Middle East',
  'Africa Safari',
  'Africa & Atlantic',
  'North America',
]

const LABEL_OVERRIDES: Record<string, string> = {
  'st-lucia': 'St. Lucia',
  'st-barts': 'St. Barts',
  'turks-and-caicos': 'Turks & Caicos',
  'bora-bora': 'Bora Bora',
  'french-polynesia': 'French Polynesia',
  'amalfi': 'Amalfi Coast',
  'greece': 'Mainland Greece & Mykonos',
  'reunion': 'Réunion',
  'uae': 'United Arab Emirates',
  'sri-lanka': 'Sri Lanka',
  'cape-verde': 'Cape Verde',
  'south-africa': 'South Africa',
  'new-zealand': 'New Zealand',
  'costa-rica': 'Costa Rica',
  'sardegna': 'Sardegna',
}

function prettyLabel(slug: string): string {
  return LABEL_OVERRIDES[slug] ?? slug.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ')
}

export const metadata: Metadata = {
  title: 'All Honeymoon Destinations — Hand-Scored Hotels in 44 Countries | MyHoneymoonHotel',
  description:
    'Browse every honeymoon destination we cover — from overwater bungalows in the Maldives to safari camps in Botswana, hand-scored hotels in 44 destinations across 10 regions.',
  alternates: { canonical: 'https://myhoneymoonhotel.com/destinations' },
  openGraph: {
    title: 'All Honeymoon Destinations',
    description:
      'Every honeymoon destination we cover — hand-scored hotels in 44 countries across 10 regions.',
    url: 'https://myhoneymoonhotel.com/destinations',
    type: 'website',
    siteName: 'My Honeymoon Hotel',
    images: [{ url: 'https://myhoneymoonhotel.com/images/hotels/soneva-jani-maldives/hero.webp', width: 1200, height: 630, alt: 'Honeymoon destinations' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'All Honeymoon Destinations',
    description: 'Every destination we cover — hand-scored hotels across 10 regions.',
    images: ['https://myhoneymoonhotel.com/images/hotels/soneva-jani-maldives/hero.webp'],
  },
}

export default function DestinationsIndexPage() {
  const allHotels = getAllHotels()

  // Group by destination, pick the highest-scored hotel's hero as the cover
  const byDest = allHotels.reduce((acc, h) => {
    if (!acc[h.destination]) acc[h.destination] = []
    acc[h.destination].push(h)
    return acc
  }, {} as Record<string, typeof allHotels>)

  const destinations = Object.entries(byDest).map(([slug, hotels]) => {
    const top = hotels[0] // already sorted by score in getAllHotels
    const heroPhoto = top.photos.find(p => p.type === 'hero') || top.photos[0]
    return {
      slug,
      label: prettyLabel(slug),
      count: hotels.length,
      region: REGION_OF[slug] ?? 'Other',
      cover: heroPhoto?.url || '/images/hotels/soneva-jani-maldives/hero.webp',
      topHotel: top.name,
      topScore: top.honeymoon_score,
    }
  })

  // Group by region, ordered
  const byRegion = REGION_ORDER.map(region => ({
    region,
    destinations: destinations
      .filter(d => d.region === region)
      .sort((a, b) => b.count - a.count),
  })).filter(r => r.destinations.length > 0)

  const totalDestinations = destinations.length
  const totalHotels = allHotels.length

  return (
    <div>
      {/* ── HEADER ── */}
      <section className="bg-gradient-to-b from-rose-50/60 via-white to-white pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-3">All destinations</p>
          <h1 className="font-display text-5xl sm:text-6xl text-zinc-900 leading-tight max-w-3xl mb-5">
            Every honeymoon destination we cover.
          </h1>
          <p className="text-zinc-600 text-lg max-w-2xl leading-relaxed">
            {totalHotels} hand-scored hotels across {totalDestinations} destinations and {byRegion.length} regions —
            from overwater bungalows to safari camps and clifftop villas. Pick a region or a country and dive in.
          </p>
        </div>
      </section>

      {/* ── REGIONS ── */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        {byRegion.map(({ region, destinations }) => (
          <section key={region} className="mb-16">
            <div className="flex items-baseline justify-between mb-6 border-b border-zinc-100 pb-3">
              <h2 className="font-display text-2xl sm:text-3xl text-zinc-900">{region}</h2>
              <span className="text-zinc-400 text-sm">{destinations.length} {destinations.length === 1 ? 'destination' : 'destinations'} · {destinations.reduce((s, d) => s + d.count, 0)} hotels</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {destinations.map(d => (
                <Link
                  key={d.slug}
                  href={`/destinations/${d.slug}`}
                  className="group relative aspect-[4/5] rounded-2xl overflow-hidden bg-zinc-100"
                >
                  <Image
                    src={d.cover}
                    alt={`${d.label} honeymoon hotels`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                  <div className="absolute bottom-0 inset-x-0 p-4">
                    <div className="font-display text-xl text-white leading-tight mb-0.5 group-hover:text-rose-200 transition-colors">{d.label}</div>
                    <div className="text-white/60 text-xs tracking-wide">{d.count} {d.count === 1 ? 'hotel' : 'hotels'}</div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
