import type { Metadata } from 'next'
import * as fs from 'fs'
import * as path from 'path'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAllHotels, getRelatedHotels } from '@/lib/hotels'
import { getLocalizedHotel } from '@/lib/getLocalizedHotel'
import HotelSchema from '@/components/HotelSchema'
import Stay22MapWidget from '@/components/Stay22MapWidget'
import FlightSearchWidget from '@/components/FlightSearchWidget'
import HotelCard from '@/components/HotelCard'
import PriceDropAlert from '@/components/PriceDropAlert'
import CopyButton from '@/components/CopyButton'
import StickyBookingBar from '@/components/StickyBookingBar'
import HeroImage from '@/components/HeroImage'
import HotelGalleryLightbox from '@/components/HotelGalleryLightbox'
import RecordView from '@/components/RecordView'
import { getMessages, type Messages } from '@/i18n/getMessages'
import { buildAlternates, localizedPath } from '@/lib/alternates'
import type { Locale } from '@/i18n/locales'

const SITE_URL = 'https://myhoneymoonhotel.com'

// Determine which locale overlays exist for a given hotel slug. We only
// advertise hreflang alternates for locales where the page actually renders
// (the ES/PT routes have dynamicParams=false + generateStaticParams filtered
// to overlay-available slugs, so promising a missing locale yields a 404).
function getAvailableHotelLocales(slug: string): Locale[] {
  const available: Locale[] = ['en']
  for (const loc of ['es', 'pt'] as const) {
    const p = path.join(process.cwd(), 'data', 'i18n', loc, 'hotels', `${slug}.json`)
    if (fs.existsSync(p)) available.push(loc)
  }
  return available
}

function tx(messages: Messages, key: string, fallback: string): string {
  const v = (messages as unknown as Record<string, unknown>)[key]
  return typeof v === 'string' && v.length > 0 ? v : fallback
}

function fmt(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? ''))
}

export { getAllHotels }

export async function buildHotelMetadata(slug: string, locale: Locale): Promise<Metadata> {
  const hotel = getLocalizedHotel(slug, locale)
  if (!hotel) return {}
  const heroPhoto = hotel.photos.find(p => p.type === 'hero') || hotel.photos[0]
  const heroUrl = heroPhoto?.url?.startsWith('http')
    ? heroPhoto.url
    : `${SITE_URL}${heroPhoto?.url ?? ''}`
  const title = hotel.seo?.title ?? `${hotel.name} Honeymoon Review — Score ${hotel.honeymoon_score}/100`
  const description = hotel.seo?.description ?? hotel.content.verdict.slice(0, 160)
  return {
    title,
    description,
    alternates: buildAlternates(`/hotels/${hotel.slug}`, locale, getAvailableHotelLocales(hotel.slug)),
    openGraph: {
      title,
      description,
      url: `${SITE_URL}${localizedPath(`/hotels/${hotel.slug}`, locale)}`,
      type: 'article',
      siteName: 'My Honeymoon Hotel',
      images: heroUrl ? [{ url: heroUrl, width: 1200, height: 630, alt: hotel.name }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: heroUrl ? [heroUrl] : undefined,
    },
  }
}

const SCORE_LABELS: Record<string, { labelKey: string; labelFallback: string; helpKey: string; helpFallback: string; max: number }> = {
  adults_only:  { labelKey: 'hotel.score.adultsOnly',  labelFallback: 'Adults-Only',      helpKey: 'hotel.score.adultsOnly.help',  helpFallback: 'Hotel restricted to adult guests — crucial for a romantic atmosphere.', max: 25 },
  couples_pct:  { labelKey: 'hotel.score.couplesPct',  labelFallback: 'Couples-Approved', helpKey: 'hotel.score.couplesPct.help',  helpFallback: 'Share of recent reviews from couples on TripAdvisor & Booking.com.',     max: 20 },
  spa:          { labelKey: 'hotel.score.spa',         labelFallback: 'Spa',              helpKey: 'hotel.score.spa.help',         helpFallback: 'On-site full-service spa with couples treatments.',                       max: 15 },
  award:        { labelKey: 'hotel.score.award',       labelFallback: 'Traveller Award',  helpKey: 'hotel.score.award.help',       helpFallback: 'TripAdvisor Travellers\' Choice award or ≥ 4.4 rating.',                  max: 15 },
  pool:         { labelKey: 'hotel.score.pool',        labelFallback: 'Pool',             helpKey: 'hotel.score.pool.help',        helpFallback: 'Swimming pool on property (private plunge pools score higher).',         max: 10 },
  beach:        { labelKey: 'hotel.score.beach',       labelFallback: 'Beach Access',     helpKey: 'hotel.score.beach.help',       helpFallback: 'Direct beachfront or private beach club access.',                        max: 10 },
  stars:        { labelKey: 'hotel.score.stars',       labelFallback: '4+ Stars',         helpKey: 'hotel.score.stars.help',       helpFallback: 'Official 4- or 5-star rating.',                                          max: 10 },
  room_service: { labelKey: 'hotel.score.roomService', labelFallback: 'Room Service',     helpKey: 'hotel.score.roomService.help', helpFallback: 'In-room dining available (ideally 24h).',                                max: 5  },
  luxury:       { labelKey: 'hotel.score.luxury',      labelFallback: 'Luxury Tier',      helpKey: 'hotel.score.luxury.help',      helpFallback: 'Luxury or ultra-luxury price tier.',                                     max: 5  },
}

export async function renderHotelPage(slug: string, locale: Locale) {
  const hotel = getLocalizedHotel(slug, locale)
  if (!hotel) notFound()
  const m = getMessages(locale)

  const heroPhoto = hotel.photos.find(p => p.type === 'hero') || hotel.photos[0]
  const galleryPhotos = hotel.photos.filter(p => p.type !== 'hero').slice(0, 4)
  const { sameStyle, sameDestination } = getRelatedHotels(hotel)

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
    { item: fmt(tx(m, 'hotel.cost.room', 'Room (7 nights avg ${avg}/nt)'), { avg: avgNight.toLocaleString() }), cost_usd: `$${roomCost.toLocaleString()}` },
    { item: tx(m, 'hotel.cost.flights', 'Flights (2 pax, economy/premium)'), cost_usd: `$${flights.toLocaleString()}` },
    { item: tx(m, 'hotel.cost.transfers', 'Airport transfers / seaplane'), cost_usd: `$${transfers.toLocaleString()}` },
    { item: tx(m, 'hotel.cost.dining', 'Dining & drinks (beyond room)'), cost_usd: `$${Math.round(diningExtra * nights).toLocaleString()}` },
    { item: tx(m, 'hotel.cost.excursions', 'Excursions & experiences'), cost_usd: `$${excursions.toLocaleString()}` },
    { item: tx(m, 'hotel.cost.spa', 'Spa / signature treatments'), cost_usd: `$${spa.toLocaleString()}` },
    { item: tx(m, 'hotel.cost.tips', 'Tips & service (8%)'), cost_usd: `$${tips.toLocaleString()}` },
    { item: tx(m, 'hotel.cost.total', 'Total estimated'), cost_usd: `$${total.toLocaleString()}` },
  ]
  const costBreakdown = (hotel.content.true_cost_breakdown && hotel.content.true_cost_breakdown.length > 0)
    ? hotel.content.true_cost_breakdown
    : autoCostBreakdown

  const destinationLabel = hotel.destination.replace(/-/g, ' ')
  const countryLabel = hotel.country.replace(/-/g, ' ')

  return (
    <>
      <HotelSchema hotel={hotel} locale={locale} />
      <StickyBookingBar
        hotelName={hotel.name}
        score={hotel.honeymoon_score}
        priceMin={hotel.price_per_night_usd.min}
        slug={hotel.slug}
        destination={hotel.destination}
        country={hotel.country}
        locale={locale}
        scoreLabel={fmt(tx(m, 'stickyBar.honeymoonScore', 'Honeymoon Score {score}/100'), { score: hotel.honeymoon_score })}
        fromLabel={tx(m, 'stickyBar.from', 'from ') + ' '}
        perNightLabel={tx(m, 'stickyBar.perNight', '/night')}
        ctaLabel={tx(m, 'stickyBar.checkAvailability', 'Check Availability →')}
      />

      <article className="pb-24">

        {/* HERO */}
        <div className="relative h-[75vh] min-h-[500px] overflow-hidden">
          {heroPhoto ? (
            <HeroImage src={heroPhoto.url} alt={heroPhoto.alt} destination={hotel.destination} priority />
          ) : (
            <div className="w-full h-full bg-zinc-100" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          <nav className="absolute top-6 left-6 flex items-center gap-2 text-white/60 text-xs">
            <Link href={localizedPath('/', locale)} className="hover:text-white transition-colors">{tx(m, 'generic.home', 'Home')}</Link>
            <span>/</span>
            <Link href={localizedPath(`/destinations/${hotel.destination}`, locale)} className="hover:text-white transition-colors capitalize">{destinationLabel}</Link>
            <span>/</span>
            <span className="text-white/40 truncate max-w-[200px]">{hotel.name}</span>
          </nav>

          <div className="absolute bottom-0 inset-x-0 px-6 sm:px-10 pb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {hotel.adults_only && (
                <span className="bg-white/15 backdrop-blur-sm border border-white/20 text-white text-xs font-medium px-3 py-1.5 rounded-full">{tx(m, 'card.adultsOnly', 'Adults-Only')}</span>
              )}
              {hotel.tripadvisor_award && (
                <span className="bg-amber-400/90 text-amber-900 text-xs font-semibold px-3 py-1.5 rounded-full">{tx(m, 'hotel.tripadvisorAward', '★ TripAdvisor Award')}</span>
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

              <div className="shrink-0 bg-white rounded-2xl px-6 py-4 text-center shadow-xl">
                <div className="font-display text-5xl text-zinc-900 leading-none">{hotel.honeymoon_score}</div>
                <div className="text-zinc-400 text-xs mt-1">{tx(m, 'hotel.honeymoonScore', 'Honeymoon Score™')}</div>
                <div className="text-zinc-300 text-xs">{tx(m, 'hotel.outOf100', 'out of 100')}</div>
              </div>
            </div>
          </div>
        </div>

        <RecordView
          slug={hotel.slug}
          name={hotel.name}
          hero={heroPhoto?.url ?? ''}
          score={hotel.honeymoon_score}
        />

        {galleryPhotos.length > 0 && (
          <HotelGalleryLightbox
            photos={galleryPhotos.map(p => ({ url: p.url, alt: p.alt }))}
            hotelName={hotel.name}
          />
        )}

        <div className="max-w-5xl mx-auto px-6 mt-14 space-y-20">

          <div className="grid lg:grid-cols-5 gap-10">
            <section id="hotel-verdict" className="lg:col-span-3">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">{tx(m, 'hotel.verdictKicker', 'The Verdict')}</p>
              <h2 className="font-display text-3xl text-zinc-900 mb-6 leading-tight">{tx(m, 'hotel.verdictTitle', 'Worth it for your honeymoon?')}</h2>
              <p className="text-zinc-600 leading-relaxed text-[15px] mb-8">{hotel.content.verdict}</p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-5">
                  <div className="text-xs font-semibold uppercase tracking-wider text-emerald-700 mb-3">{tx(m, 'hotel.bestForHeader', 'Best for couples who…')}</div>
                  <ul className="space-y-1.5 text-sm text-emerald-800">
                    {hotel.adults_only && <li className="flex gap-2"><span>✓</span>{tx(m, 'hotel.bestFor.noFamilies', 'Want zero families around')}</li>}
                    {(hotel.couples_review_pct ?? 0) > 75 && <li className="flex gap-2"><span>✓</span>{tx(m, 'hotel.bestFor.couplesVerified', 'Trust couples-verified reviews')}</li>}
                    {hotel.amenities.some(a => a.includes('spa')) && <li className="flex gap-2"><span>✓</span>{tx(m, 'hotel.bestFor.spaWellness', 'Prioritise spa & wellness')}</li>}
                    {hotel.amenities.some(a => a.includes('beach')) && <li className="flex gap-2"><span>✓</span>{tx(m, 'hotel.bestFor.beachAccess', 'Want direct beach access')}</li>}
                    {hotel.amenities.some(a => a.includes('overwater')) && <li className="flex gap-2"><span>✓</span>{tx(m, 'hotel.bestFor.overwaterVillas', 'Dream of overwater villas')}</li>}
                    {hotel.price_per_night_usd.min >= 500 && <li className="flex gap-2"><span>✓</span>{tx(m, 'hotel.bestFor.investOnce', 'Are willing to invest in once-in-a-lifetime')}</li>}
                  </ul>
                </div>
                <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5">
                  <div className="text-xs font-semibold uppercase tracking-wider text-amber-700 mb-3">{tx(m, 'hotel.skipIfHeader', 'Skip if you…')}</div>
                  <ul className="space-y-1.5 text-sm text-amber-800">
                    {!hotel.adults_only && <li className="flex gap-2"><span>→</span>{tx(m, 'hotel.skipIf.needAdultsOnly', 'Need a strictly adults-only resort')}</li>}
                    {hotel.price_per_night_usd.min > 1000 && <li className="flex gap-2"><span>→</span>{tx(m, 'hotel.skipIf.budgetUnder1k', 'Have a budget under $1,000/night')}</li>}
                    {!hotel.amenities.some(a => a.includes('beach')) && <li className="flex gap-2"><span>→</span>{tx(m, 'hotel.skipIf.wantBeachfront', 'Want a direct beachfront')}</li>}
                    <li className="flex gap-2"><span>→</span>{tx(m, 'hotel.skipIf.preferBoutique', 'Prefer boutique & intimate properties')}</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="lg:col-span-2">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">{tx(m, 'hotel.scoreBreakdownKicker', 'Score Breakdown')}</p>
              <h2 className="font-display text-3xl text-zinc-900 mb-6">{hotel.honeymoon_score}<span className="text-zinc-300 font-display text-2xl">/100</span></h2>
              <div className="space-y-4">
                {Object.entries(SCORE_LABELS).map(([key, { labelKey, labelFallback, helpKey, helpFallback, max }]) => {
                  const rawVal = hotel.score_breakdown[key as keyof typeof hotel.score_breakdown] ?? 0
                  const val = Math.min(rawVal, max)
                  const pct = max > 0 ? Math.min(100, (val / max) * 100) : 0
                  const label = tx(m, labelKey, labelFallback)
                  const help = tx(m, helpKey, helpFallback)
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

          <section id="availability">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">{tx(m, 'hotel.bookYourStayKicker', 'Book Your Stay')}</p>
            <h2 className="font-display text-3xl text-zinc-900 mb-6">{tx(m, 'hotel.checkAvailability', 'Check availability')}</h2>
            <Stay22MapWidget
              location={hotel.destination.replace(/-/g, ' ')}
              hotelName={hotel.name}
              country={hotel.country}
              directBookingOnly={(hotel as { direct_booking_only?: boolean }).direct_booking_only ?? false}
              locale={locale}
            />
            <div className="hidden md:block">
              <PriceDropAlert
                hotelSlug={hotel.slug}
                hotelName={hotel.name}
                currentPrice={hotel.price_per_night_usd.min}
                locale={locale}
              />
            </div>
          </section>

          <FlightSearchWidget destination={destinationLabel} locale={locale} />

          <section>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-6">{tx(m, 'hotel.atAGlance', 'At a Glance')}</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {[
                { label: tx(m, 'hotel.fact.stars', 'Stars'), value: '★'.repeat(hotel.stars), sub: fmt(tx(m, 'hotel.fact.starsSub', '{n}-star'), { n: hotel.stars }) },
                { label: tx(m, 'hotel.fact.honeymoonScore', 'Honeymoon Score'), value: `${hotel.honeymoon_score}/100`, sub: hotel.honeymoon_score >= 90 ? tx(m, 'hotel.fact.exceptional', 'Exceptional') : hotel.honeymoon_score >= 75 ? tx(m, 'hotel.fact.excellent', 'Excellent') : tx(m, 'hotel.fact.veryGood', 'Very Good') },
                { label: tx(m, 'hotel.fact.adultsOnly', 'Adults-Only'), value: hotel.adults_only ? tx(m, 'hotel.fact.yes', 'Yes') : tx(m, 'hotel.fact.no', 'No'), sub: hotel.adults_only ? tx(m, 'hotel.fact.18Only', '18+ only') : tx(m, 'hotel.fact.familiesWelcome', 'Families welcome') },
                { label: tx(m, 'hotel.fact.couples', 'Couples'), value: hotel.couples_review_pct ? `${hotel.couples_review_pct}%` : tx(m, 'hotel.fact.na', 'N/A'), sub: tx(m, 'hotel.fact.couplesReviews', 'couples reviews') },
                { label: tx(m, 'hotel.fact.tripadvisor', 'TripAdvisor'), value: hotel.tripadvisor_rating ? hotel.tripadvisor_rating.toString() : tx(m, 'hotel.fact.na', 'N/A'), sub: hotel.tripadvisor_award ? tx(m, 'hotel.fact.awardWinner', 'Award winner') : tx(m, 'hotel.fact.scoreOutOf10', 'Score /10') },
                { label: tx(m, 'hotel.fact.price', 'Price'), value: `$${hotel.price_per_night_usd.min.toLocaleString()}+`, sub: tx(m, 'hotel.fact.perNight', 'per night') },
              ].map(fact => (
                <div key={fact.label} className="bg-zinc-50 border border-zinc-100 rounded-2xl p-4 text-center">
                  <div className="font-semibold text-zinc-900 text-base mb-0.5">{fact.value}</div>
                  <div className="text-zinc-400 text-xs">{fact.sub}</div>
                  <div className="text-zinc-300 text-[10px] mt-1 uppercase tracking-wider">{fact.label}</div>
                </div>
              ))}
            </div>
          </section>

          <section id="hotel-best-room">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">{tx(m, 'hotel.roomKicker', 'Room Recommendation')}</p>
            <h2 className="font-display text-3xl text-zinc-900 mb-6">{tx(m, 'hotel.bestRoom', 'Which room to book')}</h2>
            <div className="bg-zinc-950 text-white rounded-3xl p-8 sm:p-10">
              <div className="flex gap-3 mb-6">
                <span className="text-rose-400 text-2xl">◆</span>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-1">{tx(m, 'hotel.expertPick', 'Expert Pick')}</div>
                  <div className="text-xs text-zinc-500">{fmt(tx(m, 'hotel.priceRange', 'from ${min}–${max}/night range'), { min: hotel.price_per_night_usd.min.toLocaleString(), max: hotel.price_per_night_usd.max.toLocaleString() })}</div>
                </div>
              </div>
              <p className="text-zinc-300 leading-relaxed text-[15px]">{hotel.content.best_room}</p>
            </div>
          </section>

          <section>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">{tx(m, 'hotel.trueCostKicker', 'No Surprises')}</p>
            <h2 className="font-display text-3xl text-zinc-900 mb-2">{tx(m, 'hotel.trueCostTitle', 'True cost breakdown — 7 nights for two')}</h2>
            <div className="text-xs text-zinc-500 italic mb-2">
              {locale === 'es'
                ? 'Estimado del gasto típico de una luna de miel de 7 noches — el desglose específico de cada propiedad llegará pronto.'
                : locale === 'pt'
                ? 'Estimado a partir do gasto típico de uma lua de mel de 7 noites — detalhamento específico do hotel em breve.'
                : locale === 'fr'
                ? 'Estimé à partir d\'une lune de miel typique de 7 nuits — détails spécifiques à la propriété à venir.'
                : 'Estimated from typical 7-night honeymoon spend — full property-specific breakdown coming soon.'}
            </div>
            <p className="text-zinc-400 text-sm mb-6">{tx(m, 'hotel.trueCostSub', 'Based on mid-range rooms, premium-economy flights from Europe, full dining and signature experiences. Adjust for your actual travel profile.')}</p>
            <div className="border border-zinc-100 rounded-2xl overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-zinc-50 border-b border-zinc-100">
                    <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-zinc-400">{tx(m, 'hotel.cost.item', 'Item')}</th>
                    <th className="px-6 py-3 text-right text-xs font-semibold uppercase tracking-wider text-zinc-400">{tx(m, 'hotel.cost.estimated', 'Estimated Cost')}</th>
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

          <section>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">{tx(m, 'hotel.itineraryKicker', 'Day by Day')}</p>
            <h2 className="font-display text-3xl text-zinc-900 mb-8">{tx(m, 'hotel.itinerary', 'Your 7-night honeymoon itinerary')}</h2>
            <div className="relative">
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

          <section>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">{tx(m, 'hotel.caveatsKicker', 'Honest Assessment')}</p>
            <h2 className="font-display text-3xl text-zinc-900 mb-6">{tx(m, 'hotel.caveats', 'What to know before you book')}</h2>
            <div className="space-y-3">
              {(hotel.content.honest_caveats ?? hotel.content.caveats ?? []).map((caveat, i) => (
                <div key={i} className="flex gap-4 bg-amber-50 border border-amber-100 rounded-2xl px-6 py-4">
                  <span className="shrink-0 text-amber-500 font-bold text-lg leading-snug">!</span>
                  <p className="text-zinc-700 text-sm leading-relaxed">{caveat}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-end justify-between mb-6">
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">{tx(m, 'hotel.emailKicker', 'Pre-Arrival')}</p>
                <h2 className="font-display text-3xl text-zinc-900">{tx(m, 'hotel.emailTemplate', 'Email to send the hotel')}</h2>
              </div>
              <CopyButton text={hotel.content.hotel_email_template ?? hotel.content.email_template ?? ''} />
            </div>
            <div className="bg-zinc-950 rounded-3xl p-6 sm:p-8">
              <pre className="text-zinc-300 text-sm whitespace-pre-wrap font-mono leading-relaxed overflow-auto">
                {hotel.content.hotel_email_template ?? hotel.content.email_template}
              </pre>
            </div>
            <p className="text-zinc-400 text-xs mt-3">{tx(m, 'hotel.emailNote', 'Send 2 weeks before arrival. Fill in names, dates, and preferences. Hotels respond to personalised requests.')}</p>
          </section>

          <section>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">{tx(m, 'hotel.faqKicker', 'FAQ')}</p>
            <h2 className="font-display text-3xl text-zinc-900 mb-8">{tx(m, 'hotel.faqs', 'Frequently asked questions')}</h2>
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

          {(sameStyle.length > 0 || sameDestination.length > 0) && (
            <section>
              {sameStyle.length > 0 && (
                <div className="mb-14">
                  <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">{tx(m, 'hotel.recommendKickerSameVibe', 'Same Vibe, Different Destination')}</p>
                  <h2 className="font-display text-3xl text-zinc-900 mb-8 capitalize">
                    {fmt(tx(m, 'hotel.recommendSameVibeTitle', 'More {style} hotels'), { style: hotel.experience_types[0]?.replace(/-/g, ' ') ?? '' })}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {sameStyle.map(h => <HotelCard key={h.slug} hotel={h} locale={locale} />)}
                  </div>
                </div>
              )}
              {sameDestination.length > 0 && (
                <div>
                  <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">{fmt(tx(m, 'hotel.recommendKickerAlsoIn', 'Also In {destination}'), { destination: destinationLabel })}</p>
                  <h2 className="font-display text-3xl text-zinc-900 mb-8 capitalize">
                    {fmt(tx(m, 'hotel.recommendAlsoInTitle', 'Other honeymoon hotels in {destination}'), { destination: destinationLabel })}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {sameDestination.map(h => <HotelCard key={h.slug} hotel={h} locale={locale} />)}
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
