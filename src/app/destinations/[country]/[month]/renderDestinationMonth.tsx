import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getHotelsByDestination } from '@/lib/hotels'
import HotelCard from '@/components/HotelCard'
import { getLocalizedDestination } from '@/lib/getLocalizedDestination'
import { buildAlternates, localizedPath } from '@/lib/alternates'
import type { Locale } from '@/i18n/locales'

const SITE_URL = 'https://myhoneymoonhotel.com'

export const TARGETS = [
  'maldives', 'bora-bora', 'bali', 'santorini', 'st-lucia', 'turks-and-caicos',
  'mauritius', 'seychelles', 'mexico', 'jamaica', 'fiji', 'bahamas',
  'anguilla', 'antigua', 'barbados', 'sicily', 'amalfi', 'lake-como',
  'hawaii', 'costa-rica',
] as const

export const MONTHS = [
  'january', 'february', 'march', 'april', 'may', 'june',
  'july', 'august', 'september', 'october', 'november', 'december',
] as const

const MONTH_PROPER: Record<string, string> = {
  january: 'January', february: 'February', march: 'March', april: 'April',
  may: 'May', june: 'June', july: 'July', august: 'August',
  september: 'September', october: 'October', november: 'November', december: 'December',
}

// Map slug month -> the 3-letter prefix used in destination data
const MONTH_ABBR: Record<string, string> = {
  january: 'Jan', february: 'Feb', march: 'Mar', april: 'Apr',
  may: 'May', june: 'Jun', july: 'Jul', august: 'Aug',
  september: 'Sep', october: 'Oct', november: 'Nov', december: 'Dec',
}

function properDestination(country: string): string {
  return country
    .replace(/-/g, ' ')
    .split(' ')
    .map((w) => (w === 'and' ? 'and' : w.charAt(0).toUpperCase() + w.slice(1)))
    .join(' ')
}

function isValid(country: string, month: string): boolean {
  return (TARGETS as readonly string[]).includes(country)
    && (MONTHS as readonly string[]).includes(month)
}

function findMonthEntry(meta: ReturnType<typeof getLocalizedDestination>, month: string) {
  if (!meta?.months) return null
  const abbr = MONTH_ABBR[month]
  return meta.months.find((m) => m.month === abbr || m.month.toLowerCase().startsWith(month.slice(0, 3))) ?? null
}

function priceBand(priceLabel: string | undefined): { lo: number; hi: number; band: string } {
  const p = (priceLabel ?? '').toLowerCase()
  if (p.includes('very high') || p.includes('peak')) return { lo: 1200, hi: 5500, band: 'Peak' }
  if (p.includes('high') && !p.includes('low')) return { lo: 900, hi: 3500, band: 'High' }
  if (p.includes('low-mid') || p.includes('mid-low')) return { lo: 450, hi: 1500, band: 'Shoulder' }
  if (p.includes('mid-high')) return { lo: 700, hi: 2500, band: 'High shoulder' }
  if (p.includes('mid')) return { lo: 550, hi: 2000, band: 'Mid' }
  if (p.includes('lowest')) return { lo: 300, hi: 1200, band: 'Lowest' }
  if (p.includes('low')) return { lo: 400, hi: 1400, band: 'Low' }
  return { lo: 600, hi: 2200, band: 'Variable' }
}

function adjacentMonths(monthSlug: string): [string, string] {
  const idx = MONTHS.indexOf(monthSlug as typeof MONTHS[number])
  const prev = MONTHS[(idx + 11) % 12]
  const next = MONTHS[(idx + 1) % 12]
  return [prev, next]
}

function isRiskyMonth(monthEntry: { emoji?: string; weather?: string; verdict?: string } | null): boolean {
  if (!monthEntry) return false
  const txt = `${monthEntry.emoji ?? ''} ${monthEntry.weather ?? ''} ${monthEntry.verdict ?? ''}`.toLowerCase()
  return /hurricane|cyclone|monsoon|avoid|stormy|wet season|⚠|🌀/.test(txt)
}

export async function buildDestinationMonthMetadata(country: string, month: string, locale: Locale): Promise<Metadata> {
  if (!isValid(country, month)) return {}
  const meta = getLocalizedDestination(country, locale)
  if (!meta) return {}
  const proper = properDestination(country)
  const monthProper = MONTH_PROPER[month]
  const entry = findMonthEntry(meta, month)
  const verdict = entry?.verdict ?? 'a memorable month'
  const weather = entry?.weather ?? 'pleasant conditions'
  const { band } = priceBand(entry?.price)

  const title = `${proper} Honeymoon in ${monthProper}: Weather, Prices & 2026 Verdict`
  const description = `${weather}, ${band.toLowerCase()} prices, ${entry?.crowds ?? 'moderate'} crowds. ${verdict}. Best resorts, honest 2026 verdict, real cost, 7-night itinerary.`.slice(0, 160)

  const heroUrl = meta.hero?.startsWith('http') ? meta.hero : `${SITE_URL}${meta.hero ?? ''}`

  return {
    title: title.slice(0, 60),
    description,
    alternates: buildAlternates(`/destinations/${country}/${month}`, locale),
    openGraph: {
      title,
      description,
      url: `${SITE_URL}${localizedPath(`/destinations/${country}/${month}`, locale)}`,
      type: 'article',
      siteName: 'My Honeymoon Hotel',
      images: heroUrl ? [{ url: heroUrl, width: 1200, height: 630, alt: `${proper} honeymoon in ${monthProper}` }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: heroUrl ? [heroUrl] : undefined,
    },
  }
}

export async function renderDestinationMonthPage(country: string, month: string, locale: Locale) {
  if (!isValid(country, month)) notFound()
  const meta = getLocalizedDestination(country, locale)
  if (!meta) notFound()

  const hotels = getHotelsByDestination(country)
  const proper = properDestination(country)
  const monthProper = MONTH_PROPER[month]
  const entry = findMonthEntry(meta, month)

  const top5 = [...hotels].sort((a, b) => b.honeymoon_score - a.honeymoon_score).slice(0, 5)
  const { lo, hi, band } = priceBand(entry?.price)
  const risky = isRiskyMonth(entry)

  const weatherCopy = entry?.weather ?? 'Tropical, warm, generally pleasant conditions'
  const crowdsCopy = entry?.crowds ?? 'Moderate'
  const priceCopy = entry?.price ?? 'Mid'
  const verdictCopy = entry?.verdict ?? `A reasonable shoulder option for ${proper}`

  const [prevM, nextM] = adjacentMonths(month)
  // Find "better" alternates: prefer months marked Low price / good verdict
  const monthsRanked = (meta.months ?? []).map((m, i) => ({ m, i }))
  const altCandidates = monthsRanked
    .filter(({ m }) => {
      const v = (m.verdict || '').toLowerCase()
      return v.includes('best') || v.includes('excellent') || v.includes('perfect') || (m.price || '').toLowerCase().includes('low')
    })
    .slice(0, 2)
  const alternates = (altCandidates.length >= 2
    ? altCandidates
    : [{ m: meta.months?.[(MONTHS.indexOf(month as typeof MONTHS[number]) + 2) % 12] ?? { month: MONTH_ABBR[nextM], verdict: '' }, i: 0 },
       { m: meta.months?.[(MONTHS.indexOf(month as typeof MONTHS[number]) + 10) % 12] ?? { month: MONTH_ABBR[prevM], verdict: '' }, i: 0 }]
  ).map(({ m }) => {
    const slug = MONTHS.find((mm) => MONTH_ABBR[mm].toLowerCase() === (m.month || '').toLowerCase()) ?? nextM
    return { slug, label: MONTH_PROPER[slug], verdict: m.verdict || `Conditions for ${slug}` }
  }).filter((a) => a.slug !== month).slice(0, 2)

  const homePath = localizedPath('/', locale)
  const destPath = localizedPath(`/destinations/${country}`, locale)
  const pageUrl = `${SITE_URL}${localizedPath(`/destinations/${country}/${month}`, locale)}`
  const homeUrl = `${SITE_URL}${homePath}`

  const tldr = `${proper} in ${monthProper} delivers ${weatherCopy.toLowerCase()}. Crowds are ${crowdsCopy.toLowerCase()}, and prices are ${priceCopy.toLowerCase()} — expect roughly $${lo.toLocaleString()}–$${hi.toLocaleString()} per night for honeymoon-grade resorts. ${verdictCopy}. ${risky ? 'Travel insurance with weather coverage is strongly recommended this month.' : 'A solid window if the calendar aligns with your wedding date.'}`

  // FAQs — each answer is data-derived per page
  const faqs: { q: string; a: string }[] = [
    {
      q: `Is ${monthProper} a good time for a honeymoon in ${proper}?`,
      a: `${verdictCopy}. Expect ${weatherCopy.toLowerCase()}, with ${crowdsCopy.toLowerCase()} crowds and ${priceCopy.toLowerCase()} prices${risky ? '. This month carries some weather risk, so flexibility and insurance matter.' : '.'}`,
    },
    {
      q: `How much does a ${proper} honeymoon cost in ${monthProper}?`,
      a: `A honeymoon-grade resort in ${proper} during ${monthProper} typically runs $${lo.toLocaleString()}–$${hi.toLocaleString()} per night (${band.toLowerCase()} season). A 7-night trip including flights, transfers and meals usually lands between $${(lo * 8).toLocaleString()} and $${(hi * 9).toLocaleString()} per couple.`,
    },
    {
      q: `What is the weather like in ${proper} in ${monthProper}?`,
      a: `${weatherCopy}. ${risky ? `${monthProper} sits in the riskier weather window for ${proper}, so build in flexibility and pack accordingly.` : `Conditions are generally favorable for outdoor dining, beach time and water activities.`}`,
    },
    {
      q: `How crowded is ${proper} in ${monthProper}?`,
      a: `Crowd levels in ${monthProper} are ${crowdsCopy.toLowerCase()}. ${crowdsCopy.toLowerCase().includes('peak') ? 'Book six to nine months out and expect premium pricing on flights and villas.' : crowdsCopy.toLowerCase().includes('low') ? 'You will often have beaches, restaurants and excursions to yourselves — one of the strongest cases for this month.' : 'Resorts are comfortably populated without feeling overwhelmed.'}`,
    },
    {
      q: `What is the best resort to book in ${proper} for ${monthProper}?`,
      a: top5[0]
        ? `Our highest-scored ${proper} property for ${monthProper} is ${top5[0].name} (honeymoon score ${top5[0].honeymoon_score}/100, from $${top5[0].price_per_night_usd.min.toLocaleString()}/night). It performs well in ${monthProper} thanks to ${weatherCopy.toLowerCase()} and ${crowdsCopy.toLowerCase()} crowds.`
        : `Browse our scored shortlist for ${proper} — we update rankings every season.`,
    },
  ]

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: homeUrl },
      { '@type': 'ListItem', position: 2, name: 'Destinations', item: `${SITE_URL}${localizedPath('/destinations', locale)}` },
      { '@type': 'ListItem', position: 3, name: proper, item: `${SITE_URL}${destPath}` },
      { '@type': 'ListItem', position: 4, name: `Honeymoon in ${monthProper}`, item: pageUrl },
    ],
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${proper} Honeymoon in ${monthProper}: Weather, Prices & 2026 Verdict`,
    description: tldr,
    mainEntityOfPage: pageUrl,
    author: { '@type': 'Organization', name: 'My Honeymoon Hotel' },
    publisher: { '@type': 'Organization', name: 'My Honeymoon Hotel' },
    datePublished: '2026-01-01',
    dateModified: new Date().toISOString().split('T')[0],
    image: meta.hero?.startsWith('http') ? meta.hero : `${SITE_URL}${meta.hero ?? ''}`,
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  const speakableSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    speakable: { '@type': 'SpeakableSpecification', cssSelector: ['#tldr'] },
    url: pageUrl,
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />

      <div>
        {/* HERO */}
        <section className="relative h-[60vh] min-h-[420px] overflow-hidden">
          {meta.hero ? (
            <Image src={meta.hero} alt={`${proper} in ${monthProper}`} fill priority className="object-cover" sizes="100vw" />
          ) : (
            <div className="w-full h-full bg-zinc-200" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
          <nav className="absolute top-6 left-8 sm:left-12 flex items-center gap-2 text-white/60 text-xs">
            <Link href={homePath} className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href={localizedPath('/destinations', locale)} className="hover:text-white">Destinations</Link>
            <span>/</span>
            <Link href={destPath} className="hover:text-white capitalize">{proper}</Link>
            <span>/</span>
            <span className="text-white/80">Honeymoon in {monthProper}</span>
          </nav>
          <div className="absolute bottom-10 left-8 sm:left-12 max-w-3xl">
            <p className="text-white/60 text-xs tracking-[0.2em] uppercase mb-3">2026 Honeymoon Verdict</p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-white mb-3">
              {proper} Honeymoon in {monthProper}
            </h1>
            <p className="text-white/80 text-lg max-w-xl">{verdictCopy}</p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-6 sm:px-12 py-16 space-y-16">
          {/* TL;DR */}
          <section id="tldr" className={`rounded-2xl p-6 border ${risky ? 'bg-amber-50 border-amber-200' : 'bg-emerald-50 border-emerald-100'}`}>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">TL;DR</p>
            <p className="text-zinc-800 text-base leading-relaxed">{tldr}</p>
            <div className="grid grid-cols-3 gap-4 mt-5 pt-5 border-t border-black/10 text-center">
              <div>
                <div className="text-[10px] uppercase tracking-wider text-zinc-500 mb-1">Weather</div>
                <div className="text-sm font-semibold text-zinc-900">{entry?.emoji ?? '🌤'} {weatherCopy.split(',')[0]}</div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-wider text-zinc-500 mb-1">Crowds</div>
                <div className="text-sm font-semibold text-zinc-900">{crowdsCopy}</div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-wider text-zinc-500 mb-1">Price band</div>
                <div className="text-sm font-semibold text-zinc-900">${lo.toLocaleString()}–${hi.toLocaleString()}/nt</div>
              </div>
            </div>
          </section>

          {/* Weather */}
          <section>
            <h2 className="font-display text-3xl mb-4">Weather &amp; Conditions in {monthProper}</h2>
            <p className="text-zinc-700 leading-relaxed mb-4">
              {monthProper} in {proper}: {weatherCopy.toLowerCase()}. {risky
                ? `This month sits in a more volatile weather window. While many couples honeymoon here in ${monthProper} without incident, the variance is real — afternoon storms, rougher seas and occasional flight disruptions all become more likely.`
                : `Conditions tend to cooperate with the typical honeymoon agenda: beach mornings, long lunches, slow afternoons, sunset dinners.`}
            </p>
            <p className="text-zinc-600 leading-relaxed">
              Crowd-wise, expect {crowdsCopy.toLowerCase()} traffic at resorts, restaurants and signature experiences. {crowdsCopy.toLowerCase().includes('peak')
                ? 'Booking 6–9 months ahead is the difference between a dream villa and the leftovers.'
                : crowdsCopy.toLowerCase().includes('low')
                  ? 'You will have most beaches and excursions essentially to yourselves — for many couples this alone justifies the month.'
                  : 'This is the sweet spot — full resort experience without peak-season pricing or noise.'}
            </p>
          </section>

          {/* Price */}
          <section>
            <h2 className="font-display text-3xl mb-4">Price in {monthProper}</h2>
            <p className="text-zinc-700 leading-relaxed mb-4">
              {monthProper} sits in the <strong>{band.toLowerCase()}</strong> pricing band for {proper}. Honeymoon-grade resorts typically run
              <strong> ${lo.toLocaleString()}–${hi.toLocaleString()} per night</strong>. For a 7-night stay, budget roughly <strong>${(lo * 8).toLocaleString()}–${(hi * 9).toLocaleString()} per couple all-in</strong> (flights, transfers, meals, two excursions).
            </p>
            <p className="text-zinc-600 leading-relaxed">
              Compared with peak season in {proper}, {monthProper} is {band.toLowerCase().includes('peak') ? 'the most expensive window of the year — there is no premium beyond this' : band.toLowerCase().includes('low') || band.toLowerCase().includes('shoulder') ? 'meaningfully cheaper — often 25–45% below peak rates on identical villas' : 'priced near the annual average'}.
              {risky && ' Hidden cost to plan for: comprehensive travel insurance with named-storm coverage runs $150–$400 per couple and is non-optional this month.'}
            </p>
          </section>

          {/* Top 5 Resorts */}
          {top5.length > 0 && (
            <section>
              <h2 className="font-display text-3xl mb-6">Top {top5.length} {proper} Resorts for {monthProper}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {top5.map((h) => (
                  <HotelCard key={h.slug} hotel={h} locale={locale} />
                ))}
              </div>
            </section>
          )}

          {/* Why it works / doesn't */}
          <section>
            <h2 className="font-display text-3xl mb-4">Why {monthProper} {risky ? "Can Be Tricky" : 'Works'} in {proper}</h2>
            <p className="text-zinc-700 leading-relaxed">
              {verdictCopy}. {weatherCopy}. Combined with {crowdsCopy.toLowerCase()} crowds and {priceCopy.toLowerCase()} pricing, {monthProper} {risky
                ? `is a calculated bet — the rewards (empty beaches, lower rates, lush landscapes) are real, but so are the trade-offs.`
                : `is one of the genuinely sensible windows for a ${proper} honeymoon in 2026.`}
            </p>
          </section>

          {/* Alternative months */}
          {alternates.length > 0 && (
            <section>
              <h2 className="font-display text-3xl mb-4">Better Months to Consider</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {alternates.map((a) => (
                  <Link
                    key={a.slug}
                    href={localizedPath(`/destinations/${country}/${a.slug}`, locale)}
                    className="block border border-zinc-200 rounded-xl p-5 hover:border-rose-300 hover:shadow-sm transition"
                  >
                    <div className="text-xs uppercase tracking-wider text-rose-400 mb-1">{proper} in {a.label}</div>
                    <div className="font-semibold text-zinc-900 mb-1">{a.verdict}</div>
                    <div className="text-xs text-zinc-500">Read the {a.label} verdict →</div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* FAQs */}
          <section>
            <h2 className="font-display text-3xl mb-6">Frequently Asked Questions</h2>
            <div className="space-y-5">
              {faqs.map((f, i) => (
                <details key={i} className="border border-zinc-100 rounded-xl p-5 group">
                  <summary className="font-semibold text-zinc-900 cursor-pointer list-none flex justify-between items-center">
                    <span>{f.q}</span>
                    <span className="text-zinc-400 group-open:rotate-45 transition">+</span>
                  </summary>
                  <p className="text-zinc-600 text-sm leading-relaxed mt-3">{f.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* Internal links */}
          <section className="border-t border-zinc-100 pt-10">
            <div className="flex flex-wrap gap-3">
              <Link href={destPath} className="text-sm border border-zinc-200 hover:border-zinc-900 px-4 py-2 rounded-full">
                Full {proper} honeymoon guide
              </Link>
              <Link href={localizedPath('/best/honeymoon-resorts-2026', locale)} className="text-sm border border-zinc-200 hover:border-zinc-900 px-4 py-2 rounded-full">
                Best honeymoon resorts 2026
              </Link>
              <Link href={localizedPath(`/destinations/${country}/${prevM}`, locale)} className="text-sm border border-zinc-200 hover:border-zinc-900 px-4 py-2 rounded-full capitalize">
                {proper} in {MONTH_PROPER[prevM]}
              </Link>
              <Link href={localizedPath(`/destinations/${country}/${nextM}`, locale)} className="text-sm border border-zinc-200 hover:border-zinc-900 px-4 py-2 rounded-full capitalize">
                {proper} in {MONTH_PROPER[nextM]}
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
