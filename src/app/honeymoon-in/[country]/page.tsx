import type { Metadata } from 'next'
import Link from 'next/link'
import { redirect, notFound } from 'next/navigation'
import { buildAlternates } from '@/lib/alternates'
import AuthorByline from '@/components/AuthorByline'
import { AUTHOR } from '@/data/author'
import { getCountriesWithHotels, getCountryGroup, type CountryGroup } from '@/lib/countries'
import { DESTINATION_META } from '@/../data/destinations'
import type { DestinationMeta } from '@/types/destination'
import type { Hotel } from '@/../types/hotel'

interface Props { params: Promise<{ country: string }> }

const SITE_URL = 'https://myhoneymoonhotel.com'

export const dynamicParams = false

export async function generateStaticParams() {
  return getCountriesWithHotels().map(c => ({ country: c.slug }))
}

const POSITIVE_TOKENS = ['perfect', 'excellent', 'best', 'ideal', 'sweet spot', 'magical', 'wonderful', 'great', 'good', 'lovely', 'gorgeous', 'peak', 'fine', 'sublime', 'shoulder']
const NEGATIVE_TOKENS = ['closed', 'avoid', 'monsoon', 'rain', 'wet', 'cyclone', 'hurricane', 'cold', 'worst', 'rough', 'storm', 'humid', 'difficult', 'extreme', 'crowded']

function scoreVerdict(verdict: string): number {
  const v = verdict.toLowerCase()
  let s = 0
  for (const t of POSITIVE_TOKENS) if (v.includes(t)) s += 2
  for (const t of NEGATIVE_TOKENS) if (v.includes(t)) s -= 3
  if (v.includes('n/a')) s -= 5
  return s
}

const MONTH_FULL: Record<string, string> = {
  Jan: 'January', Feb: 'February', Mar: 'March', Apr: 'April', May: 'May', Jun: 'June',
  Jul: 'July', Aug: 'August', Sep: 'September', Oct: 'October', Nov: 'November', Dec: 'December',
}

function bestMonths(metas: DestinationMeta[]): string[] {
  const scores: Record<string, { sum: number; count: number }> = {}
  for (const m of metas) {
    for (const mo of m.months ?? []) {
      const key = mo.month
      if (!scores[key]) scores[key] = { sum: 0, count: 0 }
      scores[key].sum += scoreVerdict(mo.verdict || '')
      scores[key].count += 1
    }
  }
  return Object.entries(scores)
    .map(([month, { sum, count }]) => ({ month, avg: count ? sum / count : -99 }))
    .sort((a, b) => b.avg - a.avg)
    .slice(0, 3)
    .map(x => MONTH_FULL[x.month] ?? x.month)
}

function priceRange(hotels: Hotel[]): { minHotel: Hotel; maxHotel: Hotel; min: number; max: number } | null {
  const valid = hotels.filter(h => h.price_per_night_usd && Number.isFinite(h.price_per_night_usd.min) && Number.isFinite(h.price_per_night_usd.max))
  if (!valid.length) return null
  const minHotel = [...valid].sort((a, b) => a.price_per_night_usd.min - b.price_per_night_usd.min)[0]
  const maxHotel = [...valid].sort((a, b) => b.price_per_night_usd.max - a.price_per_night_usd.max)[0]
  return {
    minHotel,
    maxHotel,
    min: minHotel.price_per_night_usd.min,
    max: maxHotel.price_per_night_usd.max,
  }
}

function truncate(s: string, n: number): string {
  if (s.length <= n) return s
  return s.slice(0, n - 1).trimEnd() + '…'
}

function buildPageData(group: CountryGroup) {
  const destMetas = group.destinations
    .map(d => DESTINATION_META[d])
    .filter(Boolean) as DestinationMeta[]
  const flagship = group.hotels.slice(0, 2)
  const topHotels = group.hotels.slice(0, 6)
  const months = bestMonths(destMetas)
  const monthsStr = months.length === 3 ? `${months[0]}, ${months[1]} and ${months[2]}` : months.join(' and ')
  const pricing = priceRange(group.hotels)
  return { destMetas, flagship, topHotels, months, monthsStr, pricing }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country } = await params
  if (country === 'france') {
    return { title: 'Honeymoon in France', alternates: buildAlternates(`/honeymoon-in/${country}`) }
  }
  const group = getCountryGroup(country)
  if (!group) return {}
  const title = truncate(`Honeymoon in ${group.displayName}: 2026 Guide & Best Hotels`, 62)
  const description = truncate(
    `The honest 2026 honeymoon guide to ${group.displayName} — ${group.hotelCount} hand-scored hotels across ${group.destinations.length} ${group.destinations.length === 1 ? 'destination' : 'destinations'}, best months, real budgets.`,
    158,
  )
  return {
    title,
    description,
    alternates: buildAlternates(`/honeymoon-in/${country}`),
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/honeymoon-in/${country}`,
      type: 'article',
      siteName: 'My Honeymoon Hotel',
    },
    twitter: { card: 'summary_large_image', title, description },
  }
}

export default async function CountryGuidePage({ params }: Props) {
  const { country } = await params
  if (country === 'france') redirect('/honeymoon-in-france')
  const group = getCountryGroup(country)
  if (!group) notFound()

  const { destMetas, flagship, topHotels, months, monthsStr, pricing } = buildPageData(group)
  const countryName = group.displayName

  const flagshipLine = flagship.length >= 2
    ? `Anchored by addresses like ${flagship[0].name} and ${flagship[1].name}.`
    : flagship.length === 1
      ? `Anchored by addresses like ${flagship[0].name}.`
      : ''

  const introParagraph = `${countryName} keeps showing up on our shortlist for one simple reason: the hotels actually deliver. Across ${group.destinations.length} ${group.destinations.length === 1 ? 'destination' : 'distinct destinations'} we score ${group.hotelCount} ${group.hotelCount === 1 ? 'property' : 'properties'} against the same nine romance criteria — adults-only ratios, spa depth, beach quality, room service, and the harder-to-fake stuff like whether the lobby actually feels like a honeymoon should. ${flagshipLine} The short version: if you are after ${countryName === 'Italy' ? 'European substance with a coast' : countryName === 'Maldives' ? 'an overwater honeymoon, full stop' : `a ${countryName} honeymoon`}, the picks below are where we would put our own money. We earn affiliate commissions on bookings, but nothing here was paid for, and no hotel has the ability to upgrade its score with us.`

  const bestTimeAnswer = months.length
    ? `${monthsStr} ${months.length > 1 ? 'are' : 'is'} when the math tilts in your favour across ${countryName}. Those months balance the weather (warm enough to be in the water or out on a terrace), the crowds (off the absolute peak) and the rates (off the absolute peak too). High season delivers postcard weather but you will pay for it; shoulder months give you the country at its quietest.`
    : `Shoulder seasons — late spring and early autumn — are usually the sweet spot, balancing weather and price.`

  const luxuryAnswer = pricing
    ? `Plan on roughly $${pricing.min.toLocaleString()}–$${pricing.max.toLocaleString()} per night for the hotel alone, depending on whether you anchor at our entry-level pick (${pricing.minHotel.name}) or the top of the range (${pricing.maxHotel.name}). A 10-night ${countryName} honeymoon at mid-luxury level — five-star property, mostly suites, dinners included two nights — lands around $${(pricing.min * 8).toLocaleString()}–$${(pricing.max * 6).toLocaleString()} for the hotel side once you factor multi-night discounts. Flights, transfers, and Michelin nights are on top.`
    : `Luxury ${countryName} honeymoons run a wide band depending on hotel choice — see the hotel cards below for current ranges.`

  const daysAnswer = group.destinations.length >= 3
    ? `Plan for 10–14 nights to do ${countryName} justice — the catalogue is deep enough that a single week shortchanges you. A clean structure is 4 nights in one destination, 4 in another, and 2–3 nights as a transit or final-blowout stop.`
    : group.destinations.length === 2
      ? `Seven to ten nights is the sweet spot for ${countryName} — long enough to split between the two anchor destinations without compressing either.`
      : `Five to eight nights is the right window for ${countryName} — long enough to settle in and slow down, short enough to keep the cost honest.`

  const faqs = [
    {
      question: `Is ${countryName} good for a honeymoon?`,
      answer: `${countryName} is on the honeymoon shortlist for a reason — across ${group.destinations.length} ${group.destinations.length === 1 ? 'destination' : 'destinations'} we hand-score ${group.hotelCount} ${group.hotelCount === 1 ? 'property' : 'properties'} and the bench is genuinely deep. ${flagship[0] ? `Top-scored: ${flagship[0].name} (${flagship[0].honeymoon_score}/100).` : ''} The honeymoon market here is mature, the operators know what couples want, and you are not pioneering anything.`,
    },
    {
      question: `When is the best time to honeymoon in ${countryName}?`,
      answer: bestTimeAnswer,
    },
    {
      question: `How much does a luxury ${countryName} honeymoon cost?`,
      answer: luxuryAnswer,
    },
    {
      question: `How many days should we spend in ${countryName}?`,
      answer: daysAnswer,
    },
  ]

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    inLanguage: 'en',
    headline: `Honeymoon in ${countryName}: the 2026 guide`,
    description: `A ${countryName} honeymoon guide — destinations, hotels, best months, and honest budgets, scored by hand.`,
    author: { '@type': 'Person', name: AUTHOR.name, url: AUTHOR.url, jobTitle: AUTHOR.role },
    publisher: {
      '@type': 'Organization',
      name: 'My Honeymoon Hotel',
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/icon.png` },
    },
    datePublished: '2026-05-28',
    dateModified: '2026-05-28',
    mainEntityOfPage: `${SITE_URL}/honeymoon-in/${country}`,
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: 'en',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  }

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: topHotels.map((h, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: h.name,
      url: `${SITE_URL}/hotels/${h.slug}`,
    })),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: `Honeymoon in ${countryName}`, item: `${SITE_URL}/honeymoon-in/${country}` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 py-12 sm:py-20">
          {/* Breadcrumb */}
          <nav className="text-xs text-zinc-400 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-zinc-700">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-zinc-700">Honeymoon in {countryName}</span>
          </nav>

          {/* Hero */}
          <header className="mb-10">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-3">
              The 2026 Country Guide
            </p>
            <h1 className="font-display text-4xl sm:text-5xl text-zinc-900 leading-tight mb-4">
              Honeymoon in {countryName}: the 2026 guide.
            </h1>
            <p className="text-zinc-500 text-lg leading-relaxed">
              {group.hotelCount} hand-scored honeymoon hotels across {group.destinations.length}{' '}
              {group.destinations.length === 1 ? 'destination' : 'destinations'} — when to go, what to pay,
              and the addresses we would actually book.
            </p>
          </header>

          <AuthorByline />

          {/* Intro */}
          <section className="mt-10 mb-12">
            <p className="text-zinc-700 text-base leading-relaxed">{introParagraph}</p>
          </section>

          {/* Destinations */}
          <section className="mb-14">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-3">
              Where to honeymoon
            </p>
            <h2 className="font-display text-3xl sm:text-4xl mb-6">
              Where to honeymoon in {countryName}
            </h2>
            <p className="text-zinc-500 mb-8 leading-relaxed">
              {group.destinations.length === 1
                ? `One core destination, and what makes it worth your two weeks.`
                : `${group.destinations.length} distinct destinations — each with its own character, season, and price point. Pick one to anchor your stay, or stitch two together.`}
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {group.destinations.map(d => {
                const meta = DESTINATION_META[d]
                if (!meta) return null
                const label = d.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ')
                return (
                  <Link
                    key={d}
                    href={`/destinations/${d}`}
                    className="block border border-zinc-200 rounded-2xl p-5 hover:border-rose-300 hover:shadow-sm transition"
                  >
                    <h3 className="font-display text-xl text-zinc-900 mb-2">{label}</h3>
                    <p className="text-sm text-zinc-600 leading-relaxed mb-3">{meta.tagline}</p>
                    <p className="text-xs text-rose-500 font-medium">Best time: {meta.bestTime}</p>
                  </Link>
                )
              })}
            </div>
          </section>

          {/* Top hotels */}
          <section className="mb-14">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-3">
              The picks
            </p>
            <h2 className="font-display text-3xl sm:text-4xl mb-6">
              The hotels we{"'"}d actually book
            </h2>
            <p className="text-zinc-500 mb-8 leading-relaxed">
              Top {topHotels.length} by honeymoon score, across every {countryName} destination we cover.
              Each property is hand-scored against the same nine romance criteria — no paid placement.
            </p>
            <div className="space-y-4">
              {topHotels.map((h, i) => (
                <Link
                  key={h.slug}
                  href={`/hotels/${h.slug}`}
                  className="flex items-start gap-4 p-5 border border-zinc-200 rounded-2xl hover:border-rose-300 hover:shadow-sm transition"
                >
                  <div className="text-2xl font-display text-rose-400 w-6">{i + 1}</div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-xl text-zinc-900 mb-1">{h.name}</h3>
                    <p className="text-sm text-zinc-500 mb-2 capitalize">
                      {h.destination.replace(/-/g, ' ')} · {h.stars}★
                    </p>
                    <p className="text-sm text-zinc-700">
                      <span className="font-medium">{h.honeymoon_score}/100</span>
                      <span className="text-zinc-400 mx-2">·</span>
                      <span>
                        From ${h.price_per_night_usd.min.toLocaleString()}/night
                      </span>
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* When to go */}
          <section className="mb-14">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-3">
              When to go
            </p>
            <h2 className="font-display text-3xl sm:text-4xl mb-4">
              The best time for a {countryName} honeymoon
            </h2>
            <p className="text-zinc-700 leading-relaxed">{bestTimeAnswer}</p>
          </section>

          {/* Budget */}
          {pricing && (
            <section className="mb-14">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-3">
                The honest budget
              </p>
              <h2 className="font-display text-3xl sm:text-4xl mb-4">
                What a {countryName} honeymoon actually costs
              </h2>
              <p className="text-zinc-700 leading-relaxed mb-4">
                Across our {countryName} catalogue, hotel rates run from roughly{' '}
                <strong>${pricing.min.toLocaleString()}/night</strong> at our entry-level pick (
                <Link href={`/hotels/${pricing.minHotel.slug}`} className="underline hover:text-rose-500">
                  {pricing.minHotel.name}
                </Link>
                ) to <strong>${pricing.max.toLocaleString()}/night</strong> at the top of the market (
                <Link href={`/hotels/${pricing.maxHotel.slug}`} className="underline hover:text-rose-500">
                  {pricing.maxHotel.name}
                </Link>
                ).
              </p>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Flights, transfers, dinners off-property, and the inevitable spa add-ons live on top.
                Most couples we hear from spend 60–70% of total honeymoon cost on the hotel itself —
                worth getting that line right.
              </p>
            </section>
          )}

          {/* FAQ */}
          <section className="mb-14">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-3">
              FAQ
            </p>
            <h2 className="font-display text-3xl sm:text-4xl mb-8">
              Questions couples actually ask
            </h2>
            <div className="space-y-6">
              {faqs.map(f => (
                <div key={f.question} className="border-t border-zinc-100 pt-6">
                  <h3 className="font-display text-xl text-zinc-900 mb-2">{f.question}</h3>
                  <p className="text-zinc-600 leading-relaxed">{f.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Closing CTA */}
          <section className="mt-16 pt-10 border-t border-zinc-100 text-center">
            <h2 className="font-display text-2xl text-zinc-900 mb-4">
              See every {countryName} honeymoon hotel we cover →
            </h2>
            <p className="text-zinc-500 mb-6">
              {group.hotelCount} {group.hotelCount === 1 ? 'property' : 'properties'}, all hand-scored. Zero paid placement.
            </p>
            <Link
              href="/destinations"
              className="inline-block bg-rose-500 hover:bg-rose-600 text-white font-medium px-8 py-3 rounded-full transition"
            >
              Browse all destinations
            </Link>
          </section>
        </div>
      </div>
    </>
  )
}
