import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { buildAlternates } from '@/lib/alternates'
import AuthorByline from '@/components/AuthorByline'
import { AUTHOR } from '@/data/author'
import { DESTINATION_META } from '../../../../data/destinations'
import { getAllHotels } from '@/lib/hotels'
import { prettyDest } from '@/lib/longtail'

export const dynamicParams = false

// Top 20 destinations with strongest honeymoon catalog (hotels + score).
const ITINERARY_DESTINATIONS = [
  'maldives', 'bora-bora', 'bali', 'santorini', 'st-lucia',
  'turks-and-caicos', 'mauritius', 'seychelles', 'mexico', 'jamaica',
  'fiji', 'amalfi', 'lake-como', 'tuscany', 'provence',
  'hawaii', 'costa-rica', 'thailand', 'sicily', 'mykonos-greece',
] as const

// Map to actual destination slugs in DESTINATION_META.
const SLUG_TO_DEST: Record<string, string> = {
  'maldives': 'maldives',
  'bora-bora': 'bora-bora',
  'bali': 'bali',
  'santorini': 'santorini',
  'st-lucia': 'st-lucia',
  'turks-and-caicos': 'turks-and-caicos',
  'mauritius': 'mauritius',
  'seychelles': 'seychelles',
  'mexico': 'mexico',
  'jamaica': 'jamaica',
  'fiji': 'fiji',
  'amalfi': 'amalfi',
  'lake-como': 'lake-como',
  'tuscany': 'tuscany',
  'provence': 'provence',
  'hawaii': 'hawaii',
  'costa-rica': 'costa-rica',
  'thailand': 'thailand',
  'sicily': 'sicily',
  'mykonos-greece': 'greece',  // greece data covers mykonos
}

export function generateStaticParams() {
  return ITINERARY_DESTINATIONS
    .filter(s => DESTINATION_META[SLUG_TO_DEST[s]])
    .map(s => ({ destination: s }))
}

type Params = { destination: string }

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { destination } = await params
  const realSlug = SLUG_TO_DEST[destination]
  const meta = realSlug ? DESTINATION_META[realSlug] : null
  if (!meta) return {}
  const label = prettyDest(realSlug)
  return {
    title: `${label} Honeymoon Itinerary: A 7-Night Day-by-Day Plan`,
    description: `A 7-night ${label} honeymoon itinerary — the hotels, the days, and what to do morning, afternoon and evening.`,
    alternates: buildAlternates(`/itineraries/${destination}`),
  }
}

export default async function ItineraryPage({ params }: { params: Promise<Params> }) {
  const { destination } = await params
  const realSlug = SLUG_TO_DEST[destination]
  const meta = realSlug ? DESTINATION_META[realSlug] : null
  if (!meta) notFound()

  const label = prettyDest(realSlug)
  const hotels = getAllHotels().filter(h => h.destination === realSlug).slice(0, 2)
  const top = hotels[0]
  const url = `https://myhoneymoonhotel.com/itineraries/${destination}`
  const exps = meta.experiences ?? []

  const headline = `${label} honeymoon itinerary: 7 nights, day by day`

  const articleSchema = {
    '@context': 'https://schema.org', '@type': 'Article', inLanguage: 'en',
    headline,
    description: `A curated 7-night ${label} honeymoon itinerary with hotel recommendations and a day-by-day plan.`,
    author: { '@type': 'Person', name: AUTHOR.name, url: AUTHOR.url, jobTitle: AUTHOR.role },
    publisher: { '@type': 'Organization', name: 'My Honeymoon Hotel', logo: { '@type': 'ImageObject', url: 'https://myhoneymoonhotel.com/icon.png' } },
    datePublished: '2026-06-07', dateModified: '2026-06-07',
    mainEntityOfPage: url,
  }
  const breadcrumbSchema = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://myhoneymoonhotel.com/' },
      { '@type': 'ListItem', position: 2, name: 'Itineraries', item: 'https://myhoneymoonhotel.com/itineraries' },
      { '@type': 'ListItem', position: 3, name: `${label} honeymoon itinerary`, item: url },
    ],
  }
  const faqs = [
    { question: `Is 7 nights enough for ${label}?`, answer: `Yes — 7 nights is the standard ${label} honeymoon length and what most properties design their experience around. Shorter (5 nights) works at a pinch; longer (10) usually means a second-stop trip.` },
    { question: `Best time to follow this itinerary?`, answer: `${meta.bestTime}. ${meta.guide.when}` },
    { question: `How much does this itinerary cost per couple?`, answer: top ? `Rough math at the recommended hotel: 7 nights × $${top.price_per_night_usd.min}/night = $${(top.price_per_night_usd.min * 7).toLocaleString()} for the room, plus flights ($1,500), transfers and meals ($1,500-3,000 depending on dining). Total all-in: $${(top.price_per_night_usd.min * 7 + 3000).toLocaleString()} or so.` : 'Use the destination guide for the per-night ranges and add 7× plus $1,500 flights and $1,500 extras.' },
    { question: 'Can I swap a day for something else?', answer: 'Yes — the itinerary is editorial, not a tour package. The structure (active day / spa day / sandbank or signature day / departure-soft day) is what to preserve; the specific activities are interchangeable.' },
  ]
  const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage', inLanguage: 'en',
    mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
  }

  return (
    <>
      <div className="max-w-3xl mx-auto px-6 py-20">
        {[articleSchema, breadcrumbSchema, faqSchema].map((s, i) => (
          <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
        ))}
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">Itinerary</p>
        <h1 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-6 leading-tight">{headline}</h1>
        <p className="text-zinc-500 text-lg leading-relaxed mb-2">{meta.intro}</p>
        <AuthorByline />

        <div className="prose prose-zinc max-w-none prose-headings:font-display prose-headings:text-zinc-900 prose-p:text-zinc-600 prose-p:leading-relaxed prose-a:text-rose-500 prose-a:no-underline hover:prose-a:underline mt-10">
          <h2>Where to stay</h2>
          {hotels.length === 0 ? (
            <p>See the <Link href={`/destinations/${realSlug}`}>{label} guide</Link> for scored hotel picks.</p>
          ) : (
            <ul>
              {hotels.map(h => (
                <li key={h.slug}>
                  <Link href={`/hotels/${h.slug}`}>{h.name}</Link> — {h.stars}★, score {h.honeymoon_score}/100, from ${h.price_per_night_usd.min}/night. {h.content?.verdict?.slice(0, 160) ?? ''}
                </li>
              ))}
            </ul>
          )}

          <h2>The 7-night day-by-day plan</h2>
          {[1,2,3,4,5,6,7].map(day => {
            const exp = exps[day - 1] ?? exps[(day - 1) % Math.max(exps.length, 1)]
            const morning = day === 1
              ? `Arrive. ${meta.guide.getting.split('.')[0]}.`
              : day === 7
                ? 'Slow morning. Final breakfast on the terrace. Pack at leisure.'
                : `Sunrise from the room. Breakfast in the open air. ${day % 2 === 0 ? 'Slow start — pool or beach.' : 'Active start — kayak, walk, or local market.'}`
            const afternoon = exp
              ? `${exp.icon ?? ''} ${exp.title}: ${exp.description.split('.')[0]}.`
              : 'Spa, pool, or local exploration.'
            const evening = day === 1
              ? 'Sunset Champagne. Light dinner — let jetlag pass.'
              : day === 7
                ? 'Depart for transfer / flight.'
                : day % 3 === 0
                  ? 'Signature dinner at the property — order what the chef recommends.'
                  : day % 3 === 1
                    ? 'Long dinner. Sit outside if you can.'
                    : 'In-villa or in-suite private dinner.'
            return (
              <div key={day} className="not-prose border-l-2 border-rose-200 pl-5 py-2 mb-4">
                <p className="text-xs font-semibold tracking-wider uppercase text-rose-400 mb-1">Day {day}</p>
                <p className="text-zinc-600 text-sm leading-relaxed"><strong className="text-zinc-900">Morning.</strong> {morning}</p>
                <p className="text-zinc-600 text-sm leading-relaxed"><strong className="text-zinc-900">Afternoon.</strong> {afternoon}</p>
                <p className="text-zinc-600 text-sm leading-relaxed"><strong className="text-zinc-900">Evening.</strong> {evening}</p>
              </div>
            )
          })}

          <h2>When to go</h2>
          <p>{meta.guide.when}</p>

          <p>
            Full destination guide: <Link href={`/destinations/${realSlug}`}>{label} honeymoon guide</Link>
          </p>
        </div>
      </div>

      <section className="mt-16 max-w-3xl mx-auto px-6">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">FAQ</p>
        <h2 className="font-display text-3xl text-zinc-900 mb-8">Frequently asked questions</h2>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <details key={i} className="group border border-zinc-100 rounded-2xl overflow-hidden">
              <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-medium text-zinc-900 text-sm hover:bg-zinc-50 transition-colors list-none">
                <span>{f.question}</span>
                <svg className="w-4 h-4 text-zinc-400 shrink-0 ml-4 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
              </summary>
              <div className="px-6 pb-6 pt-2">
                <p className="text-zinc-500 text-sm leading-relaxed">{f.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </section>
    </>
  )
}
