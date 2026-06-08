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
import HotelPickCard from '@/components/longtail/HotelPickCard'
import Stay22InlineCTA from '@/components/longtail/Stay22InlineCTA'
import Stay22MapInline from '@/components/longtail/Stay22MapInline'
import FAQAccordion from '@/components/longtail/FAQAccordion'
import ItineraryDayCard from '@/components/longtail/ItineraryDayCard'
import SectionDivider from '@/components/longtail/SectionDivider'

export const dynamicParams = false

const ITINERARY_DESTINATIONS = [
  'maldives', 'bora-bora', 'bali', 'santorini', 'st-lucia',
  'turks-and-caicos', 'mauritius', 'seychelles', 'mexico', 'jamaica',
  'fiji', 'amalfi', 'lake-como', 'tuscany', 'provence',
  'hawaii', 'costa-rica', 'thailand', 'sicily', 'mykonos-greece',
] as const

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

const DAY_LABELS = ['Arrival', 'Settle in', 'Signature day', 'Sleep-in', 'Adventure', 'Quiet day', 'Departure']

export default async function ItineraryPage({ params }: { params: Promise<Params> }) {
  const { destination } = await params
  const realSlug = SLUG_TO_DEST[destination]
  const meta = realSlug ? DESTINATION_META[realSlug] : null
  if (!meta) notFound()

  const label = prettyDest(realSlug)
  const content = ITINERARY_CONTENT[destination]
  const allHotels = getAllHotels()
  const primary = content ? allHotels.find(h => h.slug === content.hotelSlug) : undefined
  const country = primary?.country ?? ''

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
  const faqSchemaObj = {
    '@context': 'https://schema.org', '@type': 'FAQPage', inLanguage: 'en',
    mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
  }

  const tldr = content
    ? `7 nights at ${primary?.name ?? content.hotelSlug.replace(/-/g, ' ')}. Day-by-day plan, the one splurge experience, specific restaurants, and the realistic all-in cost.`
    : undefined

  return (
    <>
      {[articleSchema, breadcrumbSchema, faqSchemaObj].map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      <header className="max-w-3xl mx-auto px-6 pt-20 pb-8">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">Itinerary</p>
        <h1 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-6 leading-tight">{headline}</h1>
        <p className="text-zinc-500 text-lg leading-relaxed mb-6">{content?.intro ?? meta.intro}</p>
        <AuthorByline />
        {tldr && (
          <div className="mt-10 bg-rose-50/60 border border-rose-100 rounded-2xl p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-rose-500 mb-2">In short</p>
            <p className="text-zinc-700 leading-relaxed">{tldr}</p>
          </div>
        )}
      </header>

      {primary && (
        <section className="max-w-6xl mx-auto px-6 mt-12">
          <SectionDivider label="Where you'll stay" />
          <h2 className="font-display text-3xl text-zinc-900 mb-8">The anchor hotel</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
              <HotelPickCard
                hotel={primary}
                rationale={content?.hotelRationale}
              />
            </div>
            <div className="md:col-span-2 prose prose-zinc max-w-none prose-headings:font-display prose-headings:text-zinc-900 prose-p:text-zinc-600 prose-p:leading-relaxed">
              <h3>Why this hotel for {label}</h3>
              <p>{content?.hotelRationale}</p>
            </div>
          </div>
        </section>
      )}

      <div className="max-w-6xl mx-auto px-6 mt-8">
        <Stay22MapInline
          destination={realSlug}
          country={country}
          anchorHotelName={primary?.name}
          headline={`Hotels in ${label}`}
        />
      </div>

      {content && (
        <section className="max-w-3xl mx-auto px-6 mt-12">
          <SectionDivider label="7-night plan" />
          <h2 className="font-display text-3xl text-zinc-900 mb-8">The 7-night day-by-day</h2>
          {content.days.map((d, i) => (
            <ItineraryDayCard
              key={i}
              day={i + 1}
              title={DAY_LABELS[i] ?? `Day ${i + 1}`}
              morning={d.morning}
              afternoon={d.afternoon}
              evening={d.evening}
              restaurants={d.restaurants}
              isSleepIn={i === content.sleepInDay - 1}
            />
          ))}
        </section>
      )}

      {content && (
        <div className="max-w-3xl mx-auto px-6">
          <div className="not-prose mt-10 bg-gradient-to-br from-rose-50 to-amber-50/40 border border-rose-100 rounded-2xl p-7">
            <p className="text-xs font-semibold uppercase tracking-widest text-rose-500 mb-2">The splurge</p>
            <p className="text-zinc-700 leading-relaxed">{content.splurge}</p>
          </div>

          <div className="mt-8 border border-zinc-100 rounded-2xl p-7 bg-white">
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-2">What it costs</p>
            <p className="text-zinc-700 leading-relaxed">{content.costEstimate}</p>
          </div>
        </div>
      )}

      <div className="max-w-3xl mx-auto px-6">
        <Stay22InlineCTA
          destination={realSlug}
          country={country}
          headline={`Book your ${label} honeymoon`}
          subline="Live prices for the hotels in this itinerary across every major OTA — Stay22 picks the best rate for you."
          campaign={`itinerary-${destination}`}
        />
      </div>

      {content && (
        <div className="max-w-3xl mx-auto px-6 mt-4">
          <div className="prose prose-zinc max-w-none prose-headings:font-display prose-headings:text-zinc-900 prose-p:text-zinc-600 prose-p:leading-relaxed prose-a:text-rose-500 prose-a:no-underline hover:prose-a:underline">
            <h2>The honest take</h2>
            <p>{content.closing}</p>
            <p>
              Full destination guide: <Link href={`/destinations/${realSlug}`}>{label} honeymoon guide</Link>
            </p>
          </div>
        </div>
      )}

      <section className="max-w-3xl mx-auto px-6 mt-20 pb-24">
        <SectionDivider label="FAQ" />
        <h2 className="font-display text-3xl text-zinc-900 mb-8">Frequently asked questions</h2>
        <FAQAccordion items={faqs} />
      </section>
    </>
  )
}
