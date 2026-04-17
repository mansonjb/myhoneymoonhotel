import Image from 'next/image'
import Link from 'next/link'
import { getAllHotels, getAllDestinations } from '@/lib/hotels'
import HotelCard from '@/components/HotelCard'

const EXPERIENCE_TYPES = [
  { slug: 'overwater-bungalows', label: 'Overwater Villas', sub: 'Sleep above the lagoon' },
  { slug: 'adults-only', label: 'Adults-Only', sub: 'No families. Pure romance.' },
  { slug: 'safari', label: 'Safari & Bush', sub: 'Wildlife meets luxury' },
  { slug: 'luxury', label: 'Ultra-Luxury', sub: 'The finest properties' },
  { slug: 'minimoon', label: 'Minimoon', sub: 'Close, romantic, affordable' },
  { slug: 'ski', label: 'Ski & Mountain', sub: 'Alpine romance' },
]

const DESTINATIONS = [
  { slug: 'maldives', label: 'Maldives', count: '42 hotels' },
  { slug: 'bora-bora', label: 'Bora Bora', count: '18 hotels' },
  { slug: 'st-lucia', label: 'St. Lucia', count: '24 hotels' },
  { slug: 'turks-and-caicos', label: 'Turks & Caicos', count: '15 hotels' },
  { slug: 'serengeti', label: 'Serengeti', count: '11 lodges' },
  { slug: 'santorini', label: 'Santorini', count: '31 hotels' },
]

const TESTIMONIALS = [
  {
    quote: "The retractable roof at Soneva Jani, the Milky Way above our bed — exactly as described. The pre-arrival email template worked perfectly.",
    name: "Emma & James",
    location: "London",
    hotel: "Soneva Jani, Maldives",
  },
  {
    quote: "The Honeymoon Score breakdown immediately showed us why Jade Mountain was the right choice over two competitors. Worth every penny.",
    name: "Sofia & Marco",
    location: "Milan",
    hotel: "Jade Mountain, St. Lucia",
  },
  {
    quote: "The true cost breakdown had zero surprises. The 7-night itinerary was better than what our travel agent suggested.",
    name: "Priya & Aarav",
    location: "Mumbai",
    hotel: "Singita Sasakwa, Tanzania",
  },
]

export default function HomePage() {
  const topHotels = getAllHotels().slice(0, 6)

  return (
    <div>

      {/* ── HERO ── */}
      <section className="relative h-[92vh] min-h-[600px] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=1920&q=90"
          alt="Overwater bungalow at sunset"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Gradient — subtle, bottom-heavy */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Text — bottom left */}
        <div className="relative z-10 px-8 sm:px-12 pb-14 sm:pb-20 max-w-3xl">
          <p className="text-white/60 text-xs tracking-[0.2em] uppercase mb-5">Honeymoon Hotel Guide</p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.05] mb-6">
            Is this hotel worth it<br />for your honeymoon?
          </h1>
          <p className="text-white/70 text-base sm:text-lg max-w-md mb-10 leading-relaxed">
            Every property scored for romance. Real verdicts, room picks, 7-night itineraries, and the exact email to send before arrival.
          </p>

          {/* Simple search */}
          <div className="flex gap-3 flex-col sm:flex-row">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center gap-2 px-5 py-3.5 flex-1 max-w-sm">
              <svg className="w-4 h-4 text-white/50 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              <span className="text-white/50 text-sm">Maldives, Bora Bora, St. Lucia…</span>
            </div>
            <Link
              href="/experiences/overwater-bungalows"
              className="bg-white text-zinc-900 font-semibold text-sm px-7 py-3.5 rounded-full hover:bg-zinc-100 transition-colors text-center whitespace-nowrap"
            >
              Explore Hotels
            </Link>
          </div>
        </div>

        {/* Stats — bottom right */}
        <div className="absolute bottom-8 right-8 sm:right-12 flex gap-6 text-right">
          <div>
            <div className="text-white font-semibold text-xl">4,200+</div>
            <div className="text-white/50 text-xs">Hotels Scored</div>
          </div>
          <div className="w-px bg-white/20" />
          <div>
            <div className="text-white font-semibold text-xl">30+</div>
            <div className="text-white/50 text-xs">Destinations</div>
          </div>
        </div>
      </section>

      {/* ── HOTEL GRID ── */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">Curated for Romance</p>
            <h2 className="font-display text-4xl sm:text-5xl text-zinc-900">Top-Rated Right Now</h2>
          </div>
          <div className="flex gap-2 flex-wrap">
            <span className="bg-zinc-900 text-white px-4 py-1.5 rounded-full text-xs font-medium">All</span>
            {EXPERIENCE_TYPES.slice(0, 4).map(e => (
              <Link key={e.slug} href={`/experiences/${e.slug}`}
                className="border border-zinc-200 text-zinc-500 hover:border-zinc-900 hover:text-zinc-900 px-4 py-1.5 rounded-full text-xs font-medium transition-colors">
                {e.label}
              </Link>
            ))}
          </div>
        </div>

        {topHotels.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {topHotels.map(hotel => <HotelCard key={hotel.slug} hotel={hotel} />)}
          </div>
        ) : (
          <div className="text-center py-24 text-zinc-300">
            <p className="text-5xl mb-5 opacity-30">◆</p>
            <p className="text-zinc-400">Hotels coming soon. Run the pipeline to populate.</p>
          </div>
        )}
      </section>

      {/* ── WHY SECTION ── */}
      <section className="bg-zinc-950 text-white py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left */}
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-zinc-500 mb-4">Why We&apos;re Different</p>
              <h2 className="font-display text-4xl sm:text-5xl mb-14 leading-tight">The only honeymoon<br />guide that scores hotels<br /><em>for romance</em></h2>

              <div className="space-y-10">
                {[
                  { n: '01', title: 'Honeymoon Score™', desc: 'Every hotel scored on 9 romance-specific criteria — adults-only weighting, couples review %, spa, beach, pool. Algorithmic, not paid.' },
                  { n: '02', title: 'Real Couples Only', desc: 'We filter only reviews from verified couples and honeymooners. What families think is irrelevant here.' },
                  { n: '03', title: 'True Cost Breakdown', desc: 'Room rate is just the start. Seaplane transfers, dining, spa, excursions — the real number before you commit.' },
                  { n: '04', title: 'Pre-Arrival Email', desc: 'The exact email to send your hotel. Rose petals, room upgrades, private dinners — hotels respond to these.' },
                ].map(p => (
                  <div key={p.n} className="flex gap-6">
                    <span className="text-zinc-600 text-xs font-mono pt-1 shrink-0">{p.n}</span>
                    <div>
                      <h3 className="font-medium text-white mb-1.5">{p.title}</h3>
                      <p className="text-zinc-400 text-sm leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: photo grid */}
            <div className="hidden lg:grid grid-cols-2 gap-3 h-[580px]">
              <div className="relative rounded-2xl overflow-hidden row-span-2">
                <Image src="https://images.unsplash.com/photo-1501595091296-3aa970afb3ff?w=600&q=80" alt="Bora Bora" fill className="object-cover" sizes="280px" />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-5">
                  <div className="text-white font-display text-2xl">96</div>
                  <div className="text-white/60 text-xs">Honeymoon Score™</div>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=80" alt="St Lucia" fill className="object-cover" sizes="280px" />
                <div className="absolute top-3 right-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs px-2.5 py-1 rounded-full">Adults-Only</div>
              </div>
              <div className="relative rounded-2xl overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&q=80" alt="Serengeti" fill className="object-cover" sizes="280px" />
                <div className="absolute bottom-3 left-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs px-2.5 py-1 rounded-full">Safari ★ Award</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EDITOR'S PICK ── */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="relative rounded-3xl overflow-hidden min-h-[480px] flex items-end">
          <Image
            src="https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?w=1400&q=80"
            alt="Soneva Jani Maldives"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          <div className="relative z-10 p-10 sm:p-14 max-w-lg">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-4">Editor&apos;s Pick — Score 97/100</p>
            <h2 className="font-display text-4xl sm:text-5xl text-white mb-5 leading-tight">
              The roof opens to reveal<br />the Milky Way above your bed.
            </h2>
            <p className="text-white/60 text-sm mb-8 leading-relaxed">
              Soneva Jani, Maldives. Every 1-bedroom water retreat has a retractable roof. The only hotel in the world where this is possible.
            </p>
            <Link href="/hotels/soneva-jani-maldives"
              className="inline-flex items-center gap-2 bg-white text-zinc-900 font-semibold text-sm px-7 py-3.5 rounded-full hover:bg-zinc-100 transition-colors">
              Read Full Review <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── DESTINATIONS ── */}
      <section className="border-t border-zinc-100 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">Explore</p>
              <h2 className="font-display text-4xl sm:text-5xl">Top Destinations</h2>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {DESTINATIONS.map(d => (
              <Link key={d.slug} href={`/destinations/${d.slug}`}
                className="group border border-zinc-100 hover:border-zinc-300 rounded-2xl p-5 transition-all hover:-translate-y-0.5">
                <div className="font-medium text-zinc-900 text-sm mb-1 group-hover:text-rose-500 transition-colors">{d.label}</div>
                <div className="text-zinc-400 text-xs">{d.count}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCES ── */}
      <section className="bg-zinc-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">Filter by Style</p>
            <h2 className="font-display text-4xl sm:text-5xl">Find Your Experience</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {EXPERIENCE_TYPES.map(e => (
              <Link key={e.slug} href={`/experiences/${e.slug}`}
                className="group bg-white border border-zinc-100 hover:border-zinc-300 rounded-2xl p-6 transition-all hover:-translate-y-0.5">
                <div className="font-medium text-zinc-900 text-sm mb-1.5 group-hover:text-rose-500 transition-colors">{e.label}</div>
                <div className="text-zinc-400 text-xs leading-snug">{e.sub}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">From Real Couples</p>
          <h2 className="font-display text-4xl sm:text-5xl">They chose well.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="border border-zinc-100 rounded-2xl p-8">
              {/* Quote marks */}
              <div className="font-display text-5xl text-zinc-100 leading-none mb-4">&ldquo;</div>
              <p className="text-zinc-600 text-sm leading-relaxed mb-8">{t.quote}</p>
              <div className="border-t border-zinc-100 pt-5">
                <div className="font-medium text-zinc-900 text-sm">{t.name}</div>
                <div className="text-zinc-400 text-xs mt-0.5">{t.location} — {t.hotel}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section className="border-t border-zinc-100 py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl mb-2">Start planning.</h2>
            <p className="text-zinc-400 text-sm">4,200+ hotels scored. Honest. Free. Algorithmic.</p>
          </div>
          <div className="flex gap-3 shrink-0">
            <Link href="/experiences/overwater-bungalows"
              className="bg-zinc-900 text-white font-medium text-sm px-7 py-3.5 rounded-full hover:bg-zinc-700 transition-colors">
              Browse Hotels
            </Link>
            <Link href="/experiences/adults-only"
              className="border border-zinc-200 text-zinc-700 font-medium text-sm px-7 py-3.5 rounded-full hover:border-zinc-900 transition-colors">
              Adults-Only
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
