import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getHotelBySlug, getAllHotels, getRelatedHotels } from '@/lib/hotels'
import HotelSchema from '@/components/HotelSchema'
import Stay22MapWidget from '@/components/Stay22MapWidget'
import HotelCard from '@/components/HotelCard'
import CopyButton from '@/components/CopyButton'
import StickyBookingBar from '@/components/StickyBookingBar'
import HeroImage from '@/components/HeroImage'

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return getAllHotels().map(h => ({ slug: h.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const hotel = getHotelBySlug(slug)
  if (!hotel) return {}
  return {
    title: `${hotel.name} Honeymoon Review — Score ${hotel.honeymoon_score}/100`,
    description: hotel.content.verdict.slice(0, 160),
  }
}

const SCORE_LABELS: Record<string, { label: string; max: number; help?: string }> = {
  adults_only:  { label: 'Adults-Only',         max: 25, help: 'Hotel restricted to adult guests — crucial for a romantic atmosphere.' },
  couples_pct:  { label: 'Couples-Approved',    max: 20, help: 'Share of recent reviews from couples on TripAdvisor & Booking.com.' },
  spa:          { label: 'Spa',                 max: 15, help: 'On-site full-service spa with couples treatments.' },
  award:        { label: 'Traveller Award',     max: 15, help: 'TripAdvisor Travellers\' Choice award or ≥ 4.4 rating.' },
  pool:         { label: 'Pool',                max: 10, help: 'Swimming pool on property (private plunge pools score higher).' },
  beach:        { label: 'Beach Access',        max: 10, help: 'Direct beachfront or private beach club access.' },
  stars:        { label: '4+ Stars',            max: 10, help: 'Official 4- or 5-star rating.' },
  room_service: { label: 'Room Service',        max: 5,  help: 'In-room dining available (ideally 24h).' },
  luxury:       { label: 'Luxury Tier',         max: 5,  help: 'Luxury or ultra-luxury price tier.' },
}

export default async function HotelPage({ params }: Props) {
  const { slug } = await params
  const hotel = getHotelBySlug(slug)
  if (!hotel) notFound()

  const heroPhoto = hotel.photos.find(p => p.type === 'hero') || hotel.photos[0]
  const galleryPhotos = hotel.photos.filter(p => p.type !== 'hero').slice(0, 4)
  const { sameStyle, sameDestination } = getRelatedHotels(hotel)

  // Auto-generate true cost breakdown if missing (7-night couples honeymoon estimate)
  const avgNight = Math.round((hotel.price_per_night_usd.min + hotel.price_per_night_usd.max) / 2)
  const nights = 7
  const roomCost = avgNight * nights
  const flights = hotel.experience_types.includes('overwater-bungalows') || ['maldives','bora-bora','french-polynesia','fiji','mozambique','seychelles','zanzibar'].includes(hotel.destination) ? 3200 : ['hawaii','new-zealand','japan','philippines','indonesia','bali','thailand'].includes(hotel.destination) ? 2400 : ['amalfi','greece','santorini','croatia','portugal','spain','morocco'].includes(hotel.destination) ? 600 : 1800
  const transfers = hotel.experience_types.includes('overwater-bungalows') ? 900 : 200
  const diningExtra = hotel.adults_only || hotel.stars >= 5 ? avgNight * 1.5 : avgNight * 0.8
  const excursions = 700
  const spa = hotel.experience_types.includes('wellness') ? 600 : 300
  const tips = Math.round((roomCost + diningExtra * nights) * 0.08)
  const total = roomCost + flights + transfers + Math.round(diningExtra * nights) + excursions + spa + tips
  const autoCostBreakdown = [
    { item: `Room (7 nights avg $${avgNight.toLocaleString()}/nt)`, cost_usd: `$${roomCost.toLocaleString()}` },
    { item: 'Flights (2 pax, economy/premium)', cost_usd: `$${flights.toLocaleString()}` },
    { item: 'Airport transfers / seaplane', cost_usd: `$${transfers.toLocaleString()}` },
    { item: 'Dining & drinks (beyond room)', cost_usd: `$${Math.round(diningExtra * nights).toLocaleString()}` },
    { item: 'Excursions & experiences', cost_usd: `$${excursions.toLocaleString()}` },
    { item: 'Spa / signature treatments', cost_usd: `$${spa.toLocaleString()}` },
    { item: 'Tips & service (8%)', cost_usd: `$${tips.toLocaleString()}` },
    { item: 'Total estimated', cost_usd: `$${total.toLocaleString()}` },
  ]
  const costBreakdown = (hotel.content.true_cost_breakdown && hotel.content.true_cost_breakdown.length > 0)
    ? hotel.content.true_cost_breakdown
    : autoCostBreakdown

  const destinationLabel = hotel.destination.replace(/-/g, ' ')
  const countryLabel = hotel.country.replace(/-/g, ' ')

  return (
    <>
      <HotelSchema hotel={hotel} />
      <StickyBookingBar
        hotelName={hotel.name}
        score={hotel.honeymoon_score}
        priceMin={hotel.price_per_night_usd.min}
        slug={hotel.slug}
        bookingUrl={hotel.booking_url}
      />

      <article className="pb-24">

        {/* ── HERO ── */}
        <div className="relative h-[75vh] min-h-[500px] overflow-hidden">
          {heroPhoto ? (
            <HeroImage src={heroPhoto.url} alt={heroPhoto.alt} destination={hotel.destination} priority />
          ) : (
            <div className="w-full h-full bg-zinc-100" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          {/* Breadcrumb top */}
          <nav className="absolute top-6 left-6 flex items-center gap-2 text-white/60 text-xs">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href={`/destinations/${hotel.destination}`} className="hover:text-white transition-colors capitalize">{destinationLabel}</Link>
            <span>/</span>
            <span className="text-white/40 truncate max-w-[200px]">{hotel.name}</span>
          </nav>

          {/* Bottom content */}
          <div className="absolute bottom-0 inset-x-0 px-6 sm:px-10 pb-8">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {hotel.adults_only && (
                <span className="bg-white/15 backdrop-blur-sm border border-white/20 text-white text-xs font-medium px-3 py-1.5 rounded-full">Adults-Only</span>
              )}
              {hotel.tripadvisor_award && (
                <span className="bg-amber-400/90 text-amber-900 text-xs font-semibold px-3 py-1.5 rounded-full">★ TripAdvisor Award</span>
              )}
              {hotel.experience_types.map(e => (
                <span key={e} className="bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-xs px-3 py-1.5 rounded-full capitalize">{e.replace(/-/g, ' ')}</span>
              ))}
            </div>

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-2">{hotel.name}</h1>
                <p className="text-white/70 text-lg capitalize">{destinationLabel}, {countryLabel} · {'★'.repeat(hotel.stars)}</p>
              </div>

              {/* Score pill */}
              <div className="shrink-0 bg-white rounded-2xl px-6 py-4 text-center shadow-xl">
                <div className="font-display text-5xl text-zinc-900 leading-none">{hotel.honeymoon_score}</div>
                <div className="text-zinc-400 text-xs mt-1">Honeymoon Score™</div>
                <div className="text-zinc-300 text-xs">out of 100</div>
              </div>
            </div>
          </div>
        </div>

        {/* ── PHOTO GALLERY STRIP ── */}
        {galleryPhotos.length > 0 && (
          <div className={`grid gap-1.5 px-1.5 mt-1.5 ${
            galleryPhotos.length === 1 ? 'grid-cols-1 max-w-2xl mx-auto' :
            galleryPhotos.length === 2 ? 'grid-cols-2' :
            galleryPhotos.length === 3 ? 'grid-cols-3' :
            'grid-cols-4'
          }`}>
            {galleryPhotos.map((photo, i) => (
              <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image src={photo.url} alt={photo.alt} fill loading="lazy" className="object-cover hover:scale-105 transition-transform duration-500" sizes={galleryPhotos.length === 1 ? '50vw' : '25vw'} />
              </div>
            ))}
          </div>
        )}

        <div className="max-w-5xl mx-auto px-6 mt-14 space-y-20">

          {/* ── VERDICT + SCORE BREAKDOWN ── */}
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Verdict — 3 cols */}
            <section id="hotel-verdict" className="lg:col-span-3">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">The Verdict</p>
              <h2 className="font-display text-3xl text-zinc-900 mb-6 leading-tight">Worth it for your honeymoon?</h2>
              <p className="text-zinc-600 leading-relaxed text-[15px] mb-8">{hotel.content.verdict}</p>

              {/* Best for / Not for */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-5">
                  <div className="text-xs font-semibold uppercase tracking-wider text-emerald-700 mb-3">Best for couples who…</div>
                  <ul className="space-y-1.5 text-sm text-emerald-800">
                    {hotel.adults_only && <li className="flex gap-2"><span>✓</span>Want zero families around</li>}
                    {(hotel.couples_review_pct ?? 0) > 75 && <li className="flex gap-2"><span>✓</span>Trust couples-verified reviews</li>}
                    {hotel.amenities.some(a => a.includes('spa')) && <li className="flex gap-2"><span>✓</span>Prioritise spa &amp; wellness</li>}
                    {hotel.amenities.some(a => a.includes('beach')) && <li className="flex gap-2"><span>✓</span>Want direct beach access</li>}
                    {hotel.amenities.some(a => a.includes('overwater')) && <li className="flex gap-2"><span>✓</span>Dream of overwater villas</li>}
                    {hotel.price_per_night_usd.min >= 500 && <li className="flex gap-2"><span>✓</span>Are willing to invest in once-in-a-lifetime</li>}
                  </ul>
                </div>
                <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5">
                  <div className="text-xs font-semibold uppercase tracking-wider text-amber-700 mb-3">Skip if you…</div>
                  <ul className="space-y-1.5 text-sm text-amber-800">
                    {!hotel.adults_only && <li className="flex gap-2"><span>→</span>Need a strictly adults-only resort</li>}
                    {hotel.price_per_night_usd.min > 1000 && <li className="flex gap-2"><span>→</span>Have a budget under $1,000/night</li>}
                    {!hotel.amenities.some(a => a.includes('beach')) && <li className="flex gap-2"><span>→</span>Want a direct beachfront</li>}
                    <li className="flex gap-2"><span>→</span>Prefer boutique &amp; intimate properties</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Score breakdown — 2 cols */}
            <section className="lg:col-span-2">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">Score Breakdown</p>
              <h2 className="font-display text-3xl text-zinc-900 mb-6">{hotel.honeymoon_score}<span className="text-zinc-300 font-display text-2xl">/100</span></h2>
              <div className="space-y-4">
                {Object.entries(SCORE_LABELS).map(([key, { label, max, help }]) => {
                  const rawVal = hotel.score_breakdown[key as keyof typeof hotel.score_breakdown] ?? 0
                  const val = Math.min(rawVal, max) // clamp to max for display
                  const pct = max > 0 ? Math.min(100, (val / max) * 100) : 0
                  return (
                    <div key={key} title={help}>
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-zinc-600 text-sm">{label}</span>
                        <span className="text-zinc-900 text-sm font-semibold tabular-nums">{val}<span className="text-zinc-300 font-normal">/{max}</span></span>
                      </div>
                      <div className="h-1.5 bg-zinc-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all ${val >= max ? 'bg-zinc-900' : val > 0 ? 'bg-rose-400' : 'bg-zinc-100'}`}
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                  )
                })}
              </div>
            </section>
          </div>

          {/* ── QUICK FACTS ── */}
          <section>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-6">At a Glance</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {[
                { label: 'Stars', value: '★'.repeat(hotel.stars), sub: `${hotel.stars}-star` },
                { label: 'Honeymoon Score', value: `${hotel.honeymoon_score}/100`, sub: hotel.honeymoon_score >= 90 ? 'Exceptional' : hotel.honeymoon_score >= 75 ? 'Excellent' : 'Very Good' },
                { label: 'Adults-Only', value: hotel.adults_only ? 'Yes' : 'No', sub: hotel.adults_only ? '18+ only' : 'Families welcome' },
                { label: 'Couples', value: hotel.couples_review_pct ? `${hotel.couples_review_pct}%` : 'N/A', sub: 'couples reviews' },
                { label: 'TripAdvisor', value: hotel.tripadvisor_rating ? hotel.tripadvisor_rating.toString() : 'N/A', sub: hotel.tripadvisor_award ? 'Award winner' : 'Score /10' },
                { label: 'Price', value: `$${hotel.price_per_night_usd.min.toLocaleString()}+`, sub: 'per night' },
              ].map(fact => (
                <div key={fact.label} className="bg-zinc-50 border border-zinc-100 rounded-2xl p-4 text-center">
                  <div className="font-semibold text-zinc-900 text-base mb-0.5">{fact.value}</div>
                  <div className="text-zinc-400 text-xs">{fact.sub}</div>
                  <div className="text-zinc-300 text-[10px] mt-1 uppercase tracking-wider">{fact.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* ── BEST ROOM ── */}
          <section id="hotel-best-room">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">Room Recommendation</p>
            <h2 className="font-display text-3xl text-zinc-900 mb-6">Which room to book</h2>
            <div className="bg-zinc-950 text-white rounded-3xl p-8 sm:p-10">
              <div className="flex gap-3 mb-6">
                <span className="text-rose-400 text-2xl">◆</span>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-1">Expert Pick</div>
                  <div className="text-xs text-zinc-500">from ${hotel.price_per_night_usd.min.toLocaleString()}–${hotel.price_per_night_usd.max.toLocaleString()}/night range</div>
                </div>
              </div>
              <p className="text-zinc-300 leading-relaxed text-[15px]">{hotel.content.best_room}</p>
            </div>
          </section>

          {/* ── TRUE COST ── */}
          <section>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">No Surprises</p>
            <h2 className="font-display text-3xl text-zinc-900 mb-2">True cost breakdown — 7 nights for two</h2>
            <p className="text-zinc-400 text-sm mb-6">Based on mid-range rooms, premium-economy flights from Europe, full dining and signature experiences. Adjust for your actual travel profile.</p>
            <div className="border border-zinc-100 rounded-2xl overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-zinc-50 border-b border-zinc-100">
                    <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-zinc-400">Item</th>
                    <th className="px-6 py-3 text-right text-xs font-semibold uppercase tracking-wider text-zinc-400">Estimated Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {costBreakdown.map((item, i) => {
                    const isTotal = item.item.toLowerCase().includes('total')
                    return (
                      <tr key={i} className={`border-b border-zinc-50 ${isTotal ? 'bg-zinc-950' : 'hover:bg-zinc-50'} transition-colors`}>
                        <td className={`px-6 py-4 ${isTotal ? 'text-white font-semibold' : 'text-zinc-600'}`}>{item.item}</td>
                        <td className={`px-6 py-4 text-right font-semibold tabular-nums ${isTotal ? 'text-rose-400' : 'text-zinc-900'}`}>{item.cost_usd}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </section>

          {/* ── STAY22 ── */}
          <section id="availability">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">Book Your Stay</p>
            <h2 className="font-display text-3xl text-zinc-900 mb-6">Check availability</h2>
            <Stay22MapWidget
              location={hotel.destination.replace(/-/g, ' ')}
              hotelName={hotel.name}
              bookingUrl={hotel.booking_url}
              hotelsComUrl={hotel.hotels_com_url}
            />
          </section>

          {/* ── ITINERARY ── */}
          <section>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">Day by Day</p>
            <h2 className="font-display text-3xl text-zinc-900 mb-8">Your 7-night honeymoon itinerary</h2>
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-6 top-6 bottom-6 w-px bg-zinc-100" aria-hidden />
              <div className="space-y-6">
                {hotel.content.itinerary_7_nights.map((day, i) => (
                  <div key={day.day} className="flex gap-6">
                    <div className="relative shrink-0 w-12 h-12 rounded-full bg-white border-2 border-zinc-100 flex items-center justify-center z-10">
                      <span className="font-semibold text-zinc-900 text-sm">{day.day}</span>
                    </div>
                    <div className={`flex-1 pb-6 ${i < hotel.content.itinerary_7_nights.length - 1 ? '' : ''}`}>
                      <h3 className="font-semibold text-zinc-900 mb-2">{day.title}</h3>
                      <p className="text-zinc-500 text-sm leading-relaxed">{day.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── CAVEATS ── */}
          <section>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">Honest Assessment</p>
            <h2 className="font-display text-3xl text-zinc-900 mb-6">What to know before you book</h2>
            <div className="space-y-3">
              {(hotel.content.honest_caveats ?? hotel.content.caveats ?? []).map((caveat, i) => (
                <div key={i} className="flex gap-4 bg-amber-50 border border-amber-100 rounded-2xl px-6 py-4">
                  <span className="shrink-0 text-amber-500 font-bold text-lg leading-snug">!</span>
                  <p className="text-zinc-700 text-sm leading-relaxed">{caveat}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── EMAIL TEMPLATE ── */}
          <section>
            <div className="flex items-end justify-between mb-6">
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">Pre-Arrival</p>
                <h2 className="font-display text-3xl text-zinc-900">Email to send the hotel</h2>
              </div>
              <CopyButton text={hotel.content.hotel_email_template ?? hotel.content.email_template ?? ''} />
            </div>
            <div className="bg-zinc-950 rounded-3xl p-6 sm:p-8">
              <pre className="text-zinc-300 text-sm whitespace-pre-wrap font-mono leading-relaxed overflow-auto">
                {hotel.content.hotel_email_template ?? hotel.content.email_template}
              </pre>
            </div>
            <p className="text-zinc-400 text-xs mt-3">Send 2 weeks before arrival. Fill in names, dates, and preferences. Hotels respond to personalised requests.</p>
          </section>

          {/* ── FAQ ── */}
          <section>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">FAQ</p>
            <h2 className="font-display text-3xl text-zinc-900 mb-8">Frequently asked questions</h2>
            <div className="space-y-3">
              {hotel.content.faqs.map((faq, i) => (
                <details key={i} className="group border border-zinc-100 rounded-2xl overflow-hidden">
                  <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-medium text-zinc-900 text-sm hover:bg-zinc-50 transition-colors list-none">
                    <span>{faq.question}</span>
                    <svg className="w-4 h-4 text-zinc-400 shrink-0 ml-4 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
                  </summary>
                  <div className="px-6 pb-6 pt-2">
                    <p className="text-zinc-500 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* ── RECOMMENDATIONS ── */}
          {(sameStyle.length > 0 || sameDestination.length > 0) && (
            <section>
              {sameStyle.length > 0 && (
                <div className="mb-14">
                  <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">Same Vibe, Different Destination</p>
                  <h2 className="font-display text-3xl text-zinc-900 mb-8 capitalize">
                    More {hotel.experience_types[0]?.replace(/-/g, ' ')} hotels
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {sameStyle.map(h => <HotelCard key={h.slug} hotel={h} />)}
                  </div>
                </div>
              )}
              {sameDestination.length > 0 && (
                <div>
                  <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">Also In {destinationLabel}</p>
                  <h2 className="font-display text-3xl text-zinc-900 mb-8 capitalize">
                    Other honeymoon hotels in {destinationLabel}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {sameDestination.map(h => <HotelCard key={h.slug} hotel={h} />)}
                  </div>
                </div>
              )}
            </section>
          )}

        </div>
      </article>
    </>
  )
}
