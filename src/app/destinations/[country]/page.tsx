import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getHotelsByDestination, getAllDestinations } from '@/lib/hotels'
import HotelCard from '@/components/HotelCard'
import Stay22MapWidget from '@/components/Stay22MapWidget'

interface Props { params: Promise<{ country: string }> }

export async function generateStaticParams() {
  return getAllDestinations().map(d => ({ country: d }))
}

const DESTINATION_META: Record<string, {
  hero: string
  intro: string
  bestTime: string
  flightFrom: string
  topExperience: string
  guide: { getting: string; where: string; when: string }
}> = {
  maldives: {
    hero: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=1920&q=80',
    intro: 'The Maldives is the global benchmark for overwater honeymoons. 1,200 coral islands scattered across the Indian Ocean, each resort occupying its own private island — no traffic, no cities, no distractions. Just lagoon, sky, and each other.',
    bestTime: 'Nov–April',
    flightFrom: '10–14h from Europe',
    topExperience: 'Overwater Villas',
    guide: {
      getting: 'Fly to Velana International Airport (MLE) in Malé. From there, your resort arranges either a seaplane transfer (20–45 min, spectacular) or a speedboat (45–120 min). Book seaplanes in advance — they run daylight hours only.',
      where: 'North Malé Atoll (most accessible, highest density of resorts), South Malé Atoll (quieter, 45-min speedboat), Baa Atoll (UNESCO biosphere, world-class snorkelling), Noonu/Raa Atolls (most remote, most exclusive — Soneva Jani territory).',
      when: 'November–April is dry season with flat seas, excellent visibility, and no rain. May–October brings SW monsoon — cheaper rates, occasional rain, but still warm and often beautiful. Avoid August peak crowds.'
    }
  },
  'bora-bora': {
    hero: 'https://images.unsplash.com/photo-1501595091296-3aa970afb3ff?w=1920&q=80',
    intro: 'Bora Bora is the original overwater bungalow destination — the first resort to put guests above the water was here in 1968. The iconic Mount Otemanu rising from the most turquoise lagoon on earth, surrounded by a barrier reef, is arguably the most photogenic honeymoon backdrop anywhere.',
    bestTime: 'May–Oct',
    flightFrom: '16–20h from Europe',
    topExperience: 'Overwater Bungalows',
    guide: {
      getting: 'Fly to Papeete (PPT) in Tahiti (direct from LAX, or via Paris CDG). Then a 45-min Air Tahiti flight to Bora Bora Airport (BOB) on a motu islet. Your resort arranges a boat transfer to the main island.',
      where: 'Most resorts are on the barrier reef motus, facing the lagoon and Mount Otemanu. East side gets best sunrise. West side (Four Seasons, InterContinental) gets dramatic sunset over the mountain. All positions are excellent.',
      when: 'May–October is dry season — the best time, with consistent trade winds keeping it comfortable. November–April brings more rain but lush green hills and lower rates. The lagoon is swimmable year-round.'
    }
  },
  'st-lucia': {
    hero: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1920&q=80',
    intro: 'St. Lucia offers what no other Caribbean island can: the Pitons. Those twin volcanic peaks rising from the sea have made the southwest coast of St. Lucia home to some of the most architecturally dramatic honeymoon hotels on earth. Adults-only, intimate, and utterly unlike a typical beach resort.',
    bestTime: 'Dec–April',
    flightFrom: '8–9h from London',
    topExperience: 'Adults-Only',
    guide: {
      getting: 'Fly to Hewanorra International Airport (UVF) in the south — 2h by road to the Piton area. Most luxury resorts in the southwest arrange private transfers. Helicopter transfers are available and deeply romantic (15 min).',
      where: 'The Soufrière/Piton area (southwest) is where all the best honeymoon hotels are — Jade Mountain, Anse Chastanet, Fond Doux, Sugar Beach. The north (Castries, Rodney Bay) is more commercial and less romantic.',
      when: 'December–April is dry season. St. Lucia has a micro-climate — the Piton area can be rainy on the hills while the coast is sunny. May–November brings occasional rain but dramatically lower rates and fewer crowds.'
    }
  },
  'turks-and-caicos': {
    hero: 'https://images.unsplash.com/photo-1533760881669-80db4d7b341c?w=1920&q=80',
    intro: 'Turks & Caicos is home to Grace Bay, consistently ranked the world\'s best beach. Unlike many Caribbean destinations, the reefs here are spectacularly healthy — world-class diving and snorkelling right from the shore. The islands are ultra-luxury focused: fewer budget options, exceptional high-end resorts.',
    bestTime: 'Dec–May',
    flightFrom: '9–10h from London',
    topExperience: 'Luxury & Diving',
    guide: {
      getting: 'Fly to Providenciales International Airport (PLS). Most resorts are within 20–30 minutes. Direct flights from New York (2.5h), Miami (1.5h), London (9.5h via connection).',
      where: 'Grace Bay (northeast Providenciales) is the famous beach strip — most luxury resorts are here. West Coast (Amanyara) is quieter, more private, better diving. North Caicos and Middle Caicos are off the beaten path.',
      when: 'December–May is peak season with perfect weather. June–November is hurricane season — rates drop significantly, but August–October carries real risk. January–April is the absolute sweet spot.'
    }
  },
  serengeti: {
    hero: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920&q=80',
    intro: 'A Serengeti honeymoon is unlike anything else. Waking to the sound of lions, watching a thousand wildebeest cross a river, then returning to a tent with a butler and a wine cellar — the contrast of wild Africa and world-class luxury is the most intoxicating honeymoon combination available.',
    bestTime: 'Jul–Oct (migration)',
    flightFrom: '11–13h from Europe',
    topExperience: 'Safari & Wildlife',
    guide: {
      getting: 'Fly to Kilimanjaro (JRO) or Dar es Salaam (DAR) in Tanzania. Then a charter flight (30–60 min) to the private airstrips inside the Serengeti ecosystem. Most luxury lodges arrange everything.',
      where: 'Central Serengeti (Seronera): classic wildlife year-round. Northern Serengeti (Kogatende): best for river crossings July–October. Western Corridor: calving season Jan–Feb. Grumeti (private concession): ultra-exclusive, no crowds.',
      when: 'July–October: the Great Migration river crossings — the most dramatic wildlife spectacle on earth. January–February: calving season, predator action. June and November are shoulder months with excellent conditions and fewer tourists.'
    }
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country } = await params
  const name = country.replace(/-/g, ' ')
  const proper = name.charAt(0).toUpperCase() + name.slice(1)
  return {
    title: `Best Honeymoon Hotels in ${proper} — Scored & Ranked`,
    description: `The definitive guide to honeymoon hotels in ${proper}. Every property scored for romance with real verdicts, price breakdowns, and the best room recommendations.`,
  }
}

export default async function DestinationPage({ params }: Props) {
  const { country } = await params
  const hotels = getHotelsByDestination(country)
  const meta = DESTINATION_META[country]
  const destName = country.replace(/-/g, ' ')
  const destProper = destName.charAt(0).toUpperCase() + destName.slice(1)

  if (hotels.length === 0) notFound()

  const avgScore = Math.round(hotels.reduce((a, b) => a + b.honeymoon_score, 0) / hotels.length)
  const avgPrice = Math.round(hotels.reduce((a, b) => a + b.price_per_night_usd.min, 0) / hotels.length)
  const adultsOnlyCount = hotels.filter(h => h.adults_only).length
  const topHotels = [...hotels].sort((a, b) => b.honeymoon_score - a.honeymoon_score).slice(0, 3)

  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative h-[65vh] min-h-[450px] overflow-hidden">
        {meta?.hero ? (
          <Image src={meta.hero} alt={destProper} fill priority className="object-cover" sizes="100vw" />
        ) : (
          <div className="w-full h-full bg-zinc-200" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        {/* Breadcrumb */}
        <nav className="absolute top-6 left-6 flex items-center gap-2 text-white/60 text-xs">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <span className="text-white/40">Destinations</span>
          <span>/</span>
          <span className="text-white/60 capitalize">{destName}</span>
        </nav>

        <div className="absolute bottom-10 left-8 sm:left-12">
          <p className="text-white/60 text-xs tracking-[0.2em] uppercase mb-3">Honeymoon Guide</p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-white mb-3">
            {destProper}
          </h1>
          <p className="text-white/70 text-base">
            {hotels.length} hotels scored · avg {avgScore}/100 · {adultsOnlyCount > 0 ? `${adultsOnlyCount} adults-only` : 'all couples-welcoming'}
          </p>
        </div>
      </section>

      {/* ── AT A GLANCE ── */}
      <section className="max-w-6xl mx-auto px-6 -mt-8 relative z-10 mb-16">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: 'Best Time', value: meta?.bestTime ?? 'Year-round', icon: '📅' },
            { label: 'Avg Price', value: `$${avgPrice.toLocaleString()}+/night`, icon: '💰' },
            { label: 'Flight from EU', value: meta?.flightFrom ?? 'Varies', icon: '✈️' },
            { label: 'Avg Honeymoon Score', value: `${avgScore}/100`, icon: '❤️' },
          ].map(f => (
            <div key={f.label} className="bg-white border border-zinc-100 rounded-2xl px-5 py-4 shadow-sm">
              <div className="text-2xl mb-2">{f.icon}</div>
              <div className="font-semibold text-zinc-900 text-sm">{f.value}</div>
              <div className="text-zinc-400 text-xs mt-0.5">{f.label}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 space-y-20 pb-28">

        {/* ── INTRO ── */}
        {meta?.intro && (
          <section className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">Why Here for Your Honeymoon</p>
            <p className="text-zinc-600 text-lg leading-relaxed">{meta.intro}</p>
          </section>
        )}

        {/* ── HOTEL GRID ── */}
        <section>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-2">All Hotels</p>
              <h2 className="font-display text-3xl sm:text-4xl">Honeymoon Hotels in {destProper}</h2>
            </div>
            <p className="text-zinc-400 text-sm">{hotels.length} properties · sorted by score</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[...hotels].sort((a, b) => b.honeymoon_score - a.honeymoon_score).map(h => (
              <HotelCard key={h.slug} hotel={h} />
            ))}
          </div>
        </section>

        {/* ── STAY22 MAP ── */}
        <section>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">Map</p>
          <h2 className="font-display text-3xl sm:text-4xl mb-6">Hotels in {destProper}</h2>
          <Stay22MapWidget location={destProper} height={480} />
        </section>

        {/* ── HONEYMOON GUIDE ── */}
        {meta?.guide && (
          <section>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">Practical Guide</p>
            <h2 className="font-display text-3xl sm:text-4xl mb-10">{destProper} for Honeymooners</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { title: 'Getting There', icon: '✈️', content: meta.guide.getting },
                { title: 'Where to Stay', icon: '📍', content: meta.guide.where },
                { title: 'When to Go', icon: '📅', content: meta.guide.when },
              ].map(g => (
                <div key={g.title} className="bg-zinc-50 border border-zinc-100 rounded-2xl p-6">
                  <div className="text-2xl mb-3">{g.icon}</div>
                  <h3 className="font-semibold text-zinc-900 mb-3">{g.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{g.content}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── COMPARISON TABLE ── */}
        {topHotels.length >= 2 && (
          <section>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">Compare</p>
            <h2 className="font-display text-3xl sm:text-4xl mb-6">Top {topHotels.length} Hotels Side by Side</h2>
            <div className="border border-zinc-100 rounded-2xl overflow-hidden overflow-x-auto">
              <table className="w-full text-sm min-w-[600px]">
                <thead>
                  <tr className="bg-zinc-50 border-b border-zinc-100">
                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-zinc-400">Hotel</th>
                    <th className="px-4 py-4 text-center text-xs font-semibold uppercase tracking-wider text-zinc-400">Score</th>
                    <th className="px-4 py-4 text-center text-xs font-semibold uppercase tracking-wider text-zinc-400">Price/night</th>
                    <th className="px-4 py-4 text-center text-xs font-semibold uppercase tracking-wider text-zinc-400">Adults-Only</th>
                    <th className="px-4 py-4 text-center text-xs font-semibold uppercase tracking-wider text-zinc-400">Spa</th>
                    <th className="px-4 py-4 text-center text-xs font-semibold uppercase tracking-wider text-zinc-400">Beach</th>
                  </tr>
                </thead>
                <tbody>
                  {topHotels.map((h, i) => (
                    <tr key={h.slug} className={`border-b border-zinc-50 hover:bg-zinc-50 transition-colors ${i === 0 ? 'bg-zinc-50/50' : ''}`}>
                      <td className="px-6 py-4">
                        <Link href={`/hotels/${h.slug}`} className="font-medium text-zinc-900 hover:text-rose-500 transition-colors">{h.name}</Link>
                        {i === 0 && <span className="ml-2 text-[10px] font-semibold text-rose-400 uppercase tracking-wider">Top Pick</span>}
                      </td>
                      <td className="px-4 py-4 text-center font-bold text-zinc-900">{h.honeymoon_score}</td>
                      <td className="px-4 py-4 text-center text-zinc-600">${h.price_per_night_usd.min.toLocaleString()}+</td>
                      <td className="px-4 py-4 text-center">{h.adults_only ? '✓' : '—'}</td>
                      <td className="px-4 py-4 text-center">{h.amenities.some(a => a.includes('spa')) ? '✓' : '—'}</td>
                      <td className="px-4 py-4 text-center">{h.amenities.some(a => a.includes('beach')) ? '✓' : '—'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* ── RELATED EXPERIENCES ── */}
        <section>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">Filter by Experience</p>
          <h2 className="font-display text-3xl sm:text-4xl mb-6">Experiences in {destProper}</h2>
          <div className="flex flex-wrap gap-3">
            {Array.from(new Set(hotels.flatMap(h => h.experience_types))).map(exp => (
              <Link key={exp} href={`/experiences/${exp}`}
                className="border border-zinc-200 hover:border-zinc-900 text-zinc-600 hover:text-zinc-900 px-5 py-2.5 rounded-full text-sm font-medium transition-colors capitalize">
                {exp.replace(/-/g, ' ')}
              </Link>
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}
