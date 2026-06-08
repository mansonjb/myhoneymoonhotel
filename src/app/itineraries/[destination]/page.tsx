import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { buildAlternates } from '@/lib/alternates'
import AuthorByline from '@/components/AuthorByline'
import { AUTHOR } from '@/data/author'
import { DESTINATION_META } from '../../../../data/destinations'
import { getAllHotels } from '@/lib/hotels'
import { prettyDest } from '@/lib/longtail'
import { ITINERARY_CONTENT } from '@/lib/longtail-content/itinerary'

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
  'mykonos-greece': 'greece',
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
    title: `${label} Honeymoon Itinerary: A Real 7-Night Day-by-Day Plan`,
    description: `A 7-night ${label} honeymoon itinerary — the hotel, the day-by-day flow morning/afternoon/evening, specific restaurants, the splurge experience and the total cost.`,
    alternates: buildAlternates(`/itineraries/${destination}`),
  }
}

const DAY_LABELS = ['Day 1 — Arrival', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7 — Departure']

export default async function ItineraryPage({ params }: { params: Promise<Params> }) {
  const { destination } = await params
  const realSlug = SLUG_TO_DEST[destination]
  const meta = realSlug ? DESTINATION_META[realSlug] : null
  if (!meta) notFound()

  const label = prettyDest(realSlug)
  const content = ITINERARY_CONTENT[destination]
  const allHotels = getAllHotels()
  const primary = content ? allHotels.find(h => h.slug === content.hotelSlug) : undefined

  const url = `https://myhoneymoonhotel.com/itineraries/${destination}`
  const headline = `${label} honeymoon itinerary: 7 nights, day by day`

  const articleSchema = {
    '@context': 'https://schema.org', '@type': 'Article', inLanguage: 'en',
    headline,
    description: `A curated 7-night ${label} honeymoon itinerary with hotel recommendation, day-by-day plan, specific restaurants and cost estimate.`,
    author: { '@type': 'Person', name: AUTHOR.name, url: AUTHOR.url, jobTitle: AUTHOR.role },
    publisher: { '@type': 'Organization', name: 'My Honeymoon Hotel', logo: { '@type': 'ImageObject', url: 'https://myhoneymoonhotel.com/icon.png' } },
    datePublished: '2026-06-07', dateModified: '2026-06-08',
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
  const faqs = content?.faqs ?? []
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
        <p className="text-zinc-500 text-lg leading-relaxed mb-2">{content?.intro ?? meta.intro}</p>
        <AuthorByline />

        <div className="prose prose-zinc max-w-none prose-headings:font-display prose-headings:text-zinc-900 prose-p:text-zinc-600 prose-p:leading-relaxed prose-a:text-rose-500 prose-a:no-underline hover:prose-a:underline mt-10">
          <h2>Where to stay</h2>
          {primary ? (
            <p>
              <Link href={`/hotels/${primary.slug}`}><strong>{primary.name}</strong></Link> — {primary.stars}★, score {primary.honeymoon_score}/100, from ${primary.price_per_night_usd.min}/night. {content?.hotelRationale}
            </p>
          ) : content ? (
            <p>{content.hotelRationale}</p>
          ) : (
            <p>See the <Link href={`/destinations/${realSlug}`}>{label} guide</Link> for scored hotel picks.</p>
          )}

          <h2>The 7-night day-by-day plan</h2>
          {content ? (
            content.days.map((d, i) => (
              <div key={i} className={`not-prose border-l-2 pl-5 py-2 mb-4 ${i === content.sleepInDay - 1 ? 'border-amber-300 bg-amber-50/30 rounded-r' : 'border-rose-200'}`}>
                <p className="text-xs font-semibold tracking-wider uppercase text-rose-400 mb-1">
                  {DAY_LABELS[i]}{i === content.sleepInDay - 1 ? ' · Sleep-in day' : ''}
                </p>
                <p className="text-zinc-600 text-sm leading-relaxed"><strong className="text-zinc-900">Morning.</strong> {d.morning}</p>
                <p className="text-zinc-600 text-sm leading-relaxed"><strong className="text-zinc-900">Afternoon.</strong> {d.afternoon}</p>
                <p className="text-zinc-600 text-sm leading-relaxed"><strong className="text-zinc-900">Evening.</strong> {d.evening}</p>
                {d.restaurants && d.restaurants !== '—' && (
                  <p className="text-zinc-500 text-xs mt-1"><em>Restaurants: {d.restaurants}</em></p>
                )}
              </div>
            ))
          ) : (
            <p>Editorial day-by-day is being prepared for this destination.</p>
          )}

          {content && (
            <>
              <h2>The splurge experience</h2>
              <p>{content.splurge}</p>

              <h2>What it costs</h2>
              <p>{content.costEstimate}</p>

              <h2>The honest take</h2>
              <p>{content.closing}</p>
            </>
          )}

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
