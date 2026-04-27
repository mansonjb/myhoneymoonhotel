import Image from 'next/image'
import Link from 'next/link'
import { getAllHotels, getAllDestinations } from '@/lib/hotels'
import HotelCard from '@/components/HotelCard'
import DestinationPicker from '@/components/DestinationPicker'

// Map destination slug → region grouping for the picker dropdown
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
  'switzerland': 'Europe', 'iceland': 'Europe', 'lapland': 'Europe',
  'argentina': 'South America', 'peru': 'South America', 'galapagos': 'South America',
  'hawaii': 'North America',
  'oman': 'Middle East', 'uae': 'Middle East', 'jordan': 'Middle East',
  'cape-verde': 'Africa & Atlantic', 'morocco': 'Africa & Atlantic',
  'kenya': 'Africa Safari', 'tanzania': 'Africa Safari', 'south-africa': 'Africa Safari',
  'botswana': 'Africa Safari',
  'thailand': 'Asia', 'indonesia': 'Asia', 'bali': 'Asia', 'philippines': 'Asia',
  'vietnam': 'Asia', 'cambodia': 'Asia', 'japan': 'Asia', 'bhutan': 'Asia',
}
const REGION_ORDER = ['Indian Ocean', 'South Pacific', 'Caribbean & Americas', 'South America', 'Europe', 'Asia', 'Middle East', 'Africa Safari', 'Africa & Atlantic', 'North America']

const EXPERIENCE_TYPES = [
  { slug: 'overwater-bungalows', label: 'Overwater Villas', sub: 'Sleep above the lagoon',     image: '/images/hotels/four-seasons-bora-bora/hero.webp' },
  { slug: 'adults-only',         label: 'Adults-Only',       sub: 'No families. Pure romance.', image: '/images/hotels/canaves-oia-suites-greece/hero.webp' },
  { slug: 'safari',              label: 'Safari & Bush',     sub: 'Wildlife meets luxury',      image: '/images/hotels/angama-mara-kenya/hero.webp' },
  { slug: 'luxury',              label: 'Ultra-Luxury',      sub: 'The finest on earth',        image: '/images/hotels/velaa-private-island-maldives/hero.webp' },
  { slug: 'beach',               label: 'Beach',             sub: 'White sand, turquoise lagoons', image: '/images/hotels/jade-mountain-st-lucia/hero.webp' },
  { slug: 'wellness',            label: 'Wellness',          sub: 'Spa, yoga, holistic retreats', image: '/images/hotels/six-senses-zil-pasyon-seychelles/hero.webp' },
]

// Top destinations for the "Top Destinations" grid (live counts injected at runtime)
const TOP_DESTINATIONS = [
  { slug: 'maldives',          label: 'Maldives',          image: '/images/hotels/velaa-private-island-maldives/hero.webp' },
  { slug: 'bora-bora',         label: 'Bora Bora',         image: '/images/hotels/four-seasons-bora-bora/hero.webp' },
  { slug: 'st-lucia',          label: 'St. Lucia',         image: '/images/hotels/jade-mountain-st-lucia/hero.webp' },
  { slug: 'turks-and-caicos',  label: 'Turks & Caicos',    image: '/images/hotels/amanyara-turks-caicos/hero.webp' },
  { slug: 'santorini',         label: 'Santorini',         image: '/images/hotels/canaves-oia-suites-greece/hero.webp' },
  { slug: 'bali',              label: 'Bali',              image: '/images/hotels/bulgari-resort-bali/hero.webp' },
  { slug: 'mexico',            label: 'Mexico',            image: '/images/hotels/las-ventanas-al-paraiso-mexico/hero.webp' },
  { slug: 'amalfi',            label: 'Amalfi Coast',      image: '/images/hotels/le-sirenuse-positano-amalfi/hero.webp' },
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
  const allHotels = getAllHotels()
  const topHotels = allHotels.slice(0, 6)

  // Build destination list with live counts, grouped by region
  const destCounts = allHotels.reduce((acc, h) => {
    acc[h.destination] = (acc[h.destination] ?? 0) + 1
    return acc
  }, {} as Record<string, number>)

  const pickerDestinations = Object.entries(destCounts)
    .map(([slug, count]) => ({
      slug,
      label: slug.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' '),
      count,
      region: REGION_OF[slug] ?? 'Other',
    }))
    .sort((a, b) => {
      const regionCmp = (REGION_ORDER.indexOf(a.region) + 99) - (REGION_ORDER.indexOf(b.region) + 99)
      if (regionCmp !== 0) return regionCmp
      return b.count - a.count
    })

  const totalHotels = allHotels.length
  const totalDestinations = Object.keys(destCounts).length
  const adultsOnlyCount = allHotels.filter(h => h.adults_only).length
  const overwaterCount = allHotels.filter(h => h.experience_types.includes('overwater-bungalows')).length
  const safariCount = allHotels.filter(h => h.experience_types.includes('safari')).length
  const top90Count = allHotels.filter(h => h.honeymoon_score >= 90).length

  return (
    <div>

      {/* ── HERO ── */}
      <section className="relative h-[92vh] min-h-[600px] flex items-end overflow-hidden">
        <Image
          src="/images/hotels/soneva-jani-maldives/hero.webp"
          alt="Overwater bungalow at sunset"
          fill
          className="object-cover"
          priority
          fetchPriority="high"
          sizes="100vw"
          quality={70}
        />
        {/* Gradient — subtle, bottom-heavy */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Text — bottom left */}
        <div className="relative z-10 px-8 sm:px-12 pb-14 sm:pb-20 max-w-3xl">
          <p className="text-white/60 text-xs tracking-[0.2em] uppercase mb-5">Honeymoon Hotel Guide</p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.05] mb-6">
            Hotels as unforgettable<br />as your love story.
          </h1>
          <p className="text-white/70 text-base sm:text-lg max-w-md mb-10 leading-relaxed">
            Every property scored for romance. Real verdicts, room picks, 7-night itineraries, and the exact email to send before arrival.
          </p>

          {/* Destination picker */}
          <DestinationPicker destinations={pickerDestinations} />
        </div>

        {/* Stats — bottom right */}
        <div className="absolute bottom-8 right-8 sm:right-12 flex gap-6 text-right">
          <div>
            <div className="text-white font-semibold text-xl">{totalHotels}</div>
            <div className="text-white/50 text-xs">Hotels Scored</div>
          </div>
          <div className="w-px bg-white/20" />
          <div>
            <div className="text-white font-semibold text-xl">{totalDestinations}</div>
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

            {/* Right: photo grid — local hotel hero images (reliable, matches scored hotels) */}
            <div className="hidden lg:grid grid-cols-2 gap-3 h-[580px]">
              <div className="relative rounded-2xl overflow-hidden row-span-2">
                <Image src="/images/hotels/four-seasons-bora-bora/hero.webp" alt="Four Seasons Bora Bora" fill className="object-cover" sizes="280px" />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-5">
                  <div className="text-white font-display text-3xl">96<span className="text-white/60 text-lg">/100</span></div>
                  <div className="text-white/70 text-xs mt-0.5">Four Seasons Bora Bora</div>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden">
                <Image src="/images/hotels/canaves-oia-suites-greece/hero.webp" alt="Canaves Oia Santorini" fill className="object-cover" sizes="280px" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute top-3 right-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs px-2.5 py-1 rounded-full">Adults-Only</div>
                <div className="absolute bottom-3 left-4 text-white text-xs">Canaves Oia — Santorini</div>
              </div>
              <div className="relative rounded-2xl overflow-hidden">
                <Image src="/images/hotels/angama-mara-kenya/hero.webp" alt="Angama Mara safari lodge" fill className="object-cover" sizes="280px" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
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
              <p className="text-zinc-500 text-base mt-3 max-w-lg leading-relaxed">The eight honeymoon destinations we obsess over most — and the hotels that define them.</p>
            </div>
            <Link
              href="/destinations"
              className="hidden sm:inline-flex items-center gap-1.5 text-rose-500 hover:text-rose-600 text-sm font-medium tracking-wide whitespace-nowrap"
            >
              View all {totalDestinations} destinations →
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {TOP_DESTINATIONS.map(d => (
              <Link
                key={d.slug}
                href={`/destinations/${d.slug}`}
                className="group relative aspect-[4/5] rounded-2xl overflow-hidden"
              >
                <Image
                  src={d.image}
                  alt={d.label}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-5">
                  <div className="font-display text-2xl text-white leading-tight mb-1 group-hover:text-rose-200 transition-colors">{d.label}</div>
                  <div className="text-white/60 text-xs tracking-wide">{destCounts[d.slug] ?? 0} hotels</div>
                </div>
                <div className="absolute top-3 right-3 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  View →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── BY THE NUMBERS (warm band) ── */}
      <section className="bg-gradient-to-br from-rose-50 via-rose-50/60 to-amber-50/40 py-20 border-y border-rose-100/60">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-3">By the numbers</p>
            <h2 className="font-display text-4xl sm:text-5xl text-zinc-900">
              Every property hand-scored.<br className="hidden sm:block" /> No paid placement. Ever.
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { n: totalHotels, l: 'Hotels scored' },
              { n: totalDestinations, l: 'Destinations' },
              { n: adultsOnlyCount, l: 'Adults-only' },
              { n: overwaterCount, l: 'Overwater villas' },
              { n: top90Count, l: 'Score 90+ (elite)' },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="font-display text-5xl sm:text-6xl text-zinc-900 leading-none mb-2 tabular-nums">{s.n}</div>
                <div className="text-zinc-500 text-sm">{s.l}</div>
              </div>
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
            <p className="text-zinc-500 text-base mt-3 max-w-lg leading-relaxed">From overwater villas in the Maldives to safari tented camps in Kenya — browse by the vibe, not the pin on a map.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {EXPERIENCE_TYPES.map(e => (
              <Link
                key={e.slug}
                href={`/experiences/${e.slug}`}
                className="group relative aspect-[3/4] rounded-2xl overflow-hidden"
              >
                <Image
                  src={e.image}
                  alt={e.label}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 17vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-5">
                  <div className="font-display text-xl text-white leading-tight mb-1 group-hover:text-rose-200 transition-colors">{e.label}</div>
                  <div className="text-white/60 text-xs leading-snug">{e.sub}</div>
                </div>
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

      {/* ── CTA STRIP (with image) ── */}
      <section className="relative py-28 overflow-hidden">
        <Image
          src="/images/hotels/amanzoe-porto-heli-greece/hero.webp"
          alt="Start planning your honeymoon"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
        <div className="relative max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          <div className="max-w-xl">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-300 mb-4">Ready when you are</p>
            <h2 className="font-display text-4xl sm:text-5xl text-white leading-tight mb-4">Start planning your honeymoon.</h2>
            <p className="text-white/70 text-base leading-relaxed">
              {totalHotels} hotels hand-scored across {totalDestinations} destinations. Take the 60-second quiz and we'll match you to the 6 best for your style, month, and budget.
            </p>
          </div>
          <div className="flex gap-3 shrink-0 flex-wrap">
            <Link
              href="/quiz"
              className="bg-rose-500 hover:bg-rose-600 text-white font-semibold text-sm px-8 py-4 rounded-full transition-colors shadow-xl"
            >
              Take the quiz →
            </Link>
            <Link
              href="/experiences/adults-only"
              className="border border-white/30 backdrop-blur-md bg-white/5 hover:bg-white/10 text-white font-semibold text-sm px-8 py-4 rounded-full transition-colors"
            >
              Adults-Only
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
