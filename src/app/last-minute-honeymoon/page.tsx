import type { Metadata } from 'next'
import Link from 'next/link'
import { buildAlternates } from '@/lib/alternates'
import AuthorByline from '@/components/AuthorByline'
import { AUTHOR } from '@/data/author'
import { getAllHotels } from '@/lib/hotels'
import { LAST_MINUTE_CONTENT } from '@/lib/longtail-content/last-minute'
import type { Hotel } from '../../../types/hotel'
import HotelPickCard from '@/components/longtail/HotelPickCard'
import Stay22InlineCTA from '@/components/longtail/Stay22InlineCTA'
import FAQAccordion from '@/components/longtail/FAQAccordion'
import SectionDivider from '@/components/longtail/SectionDivider'

export const metadata: Metadata = {
  title: 'Last-Minute Honeymoon: The Honest Take on Booking Inside 30 Days',
  description: 'Can you actually book a 5-star honeymoon last minute? The honest answer — which destinations have late availability, which months work, the savings, and the trade-offs.',
  alternates: buildAlternates('/last-minute-honeymoon'),
}

const url = 'https://myhoneymoonhotel.com/last-minute-honeymoon'

export default function LastMinuteHoneymoonPage() {
  const c = LAST_MINUTE_CONTENT
  const allHotels = getAllHotels()
  const hotels: Hotel[] = c.hotelSlugs
    .map(s => allHotels.find(h => h.slug === s))
    .filter((h): h is Hotel => Boolean(h))

  const articleSchema = {
    '@context': 'https://schema.org', '@type': 'Article', inLanguage: 'en',
    headline: 'Last-minute honeymoon: the honest take',
    description: 'A realistic guide to booking a honeymoon inside 30 days — destinations, properties, trade-offs, savings.',
    author: { '@type': 'Person', name: AUTHOR.name, url: AUTHOR.url, jobTitle: AUTHOR.role },
    publisher: { '@type': 'Organization', name: 'My Honeymoon Hotel', logo: { '@type': 'ImageObject', url: 'https://myhoneymoonhotel.com/icon.png' } },
    datePublished: '2026-06-07', dateModified: '2026-06-08',
    mainEntityOfPage: url,
  }
  const breadcrumbSchema = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://myhoneymoonhotel.com/' },
      { '@type': 'ListItem', position: 2, name: 'Last-minute honeymoon', item: url },
    ],
  }
  const itemListSchema = {
    '@context': 'https://schema.org', '@type': 'ItemList', inLanguage: 'en',
    itemListElement: hotels.map((h, i) => ({
      '@type': 'ListItem', position: i + 1,
      url: `https://myhoneymoonhotel.com/hotels/${h.slug}`, name: h.name,
    })),
  }
  const faqSchemaJson = {
    '@context': 'https://schema.org', '@type': 'FAQPage', inLanguage: 'en',
    mainEntity: c.faqs.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
  }

  return (
    <>
      {[articleSchema, breadcrumbSchema, itemListSchema, faqSchemaJson].map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      <header className="max-w-3xl mx-auto px-6 pt-20 pb-8">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">Planning Guide</p>
        <h1 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-6 leading-tight">
          Last-minute honeymoon: the honest take
        </h1>
        <p className="text-zinc-500 text-lg leading-relaxed mb-6">{c.intro}</p>
        <AuthorByline />
        <div className="mt-10 bg-rose-50/60 border border-rose-100 rounded-2xl p-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-rose-500 mb-2">In short</p>
          <p className="text-zinc-700 leading-relaxed">
            ~80% of luxury inventory has 14-day availability if you're flexible on dates and destination. 95% has 30-day availability outside peak windows. Last-minute isn't the disaster path; you just need to pivot one variable.
          </p>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-6 mt-12">
        <SectionDivider label="Yes-windows" />
        <h2 className="font-display text-3xl text-zinc-900 mb-3">Where last-minute genuinely works</h2>
        <p className="text-zinc-500 max-w-3xl mb-8">Four windows where inside-30-day bookings at honeymoon-grade properties are real.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {c.yesWindows.map((w, i) => (
            <div key={i} className="border-l-4 border-emerald-400 bg-emerald-50/40 rounded-r-2xl p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700 mb-2">Yes</p>
              <h3 className="font-display text-lg text-zinc-900 mb-2">{w.title}</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">{w.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 mt-16">
        <SectionDivider label="No-windows" />
        <h2 className="font-display text-3xl text-zinc-900 mb-3">Where last-minute almost never works</h2>
        <p className="text-zinc-500 max-w-3xl mb-8">Four windows where the top-tier inventory is sold 6-12 months out.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {c.noWindows.map((w, i) => (
            <div key={i} className="border-l-4 border-red-300 bg-red-50/40 rounded-r-2xl p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-red-600 mb-2">No</p>
              <h3 className="font-display text-lg text-zinc-900 mb-2">{w.title}</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">{w.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 mt-16">
        <SectionDivider label="Reality check" />
        <div className="bg-amber-50/60 border border-amber-200 rounded-2xl p-7">
          <p className="text-xs font-semibold uppercase tracking-widest text-amber-700 mb-3">Reality check</p>
          <h2 className="font-display text-2xl text-zinc-900 mb-3">The 14-day vs 30-day reality</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">{c.reality}</p>
          <h3 className="font-display text-lg text-zinc-900 mb-2">The savings pitch — honest version</h3>
          <p className="text-zinc-700 leading-relaxed">{c.savings}</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 mt-16">
        <SectionDivider label="Hotels available now" />
        <h2 className="font-display text-3xl text-zinc-900 mb-3">{hotels.length} hotels with genuine last-minute availability</h2>
        <p className="text-zinc-500 max-w-3xl mb-8">Properties that consistently take inside-30-day bookings in their shoulder windows.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotels.map(h => <HotelPickCard key={h.slug} hotel={h} />)}
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6">
        <Stay22InlineCTA
          destination={hotels[0]?.destination ?? 'maldives'}
          country={hotels[0]?.country ?? ''}
          headline="Check live availability"
          subline="Stay22 shows real-time availability and the best OTA rate. Live inventory beats list-and-hope."
          campaign="last-minute-pillar"
        />
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-4">
        <div className="prose prose-zinc max-w-none prose-headings:font-display prose-headings:text-zinc-900 prose-p:text-zinc-600 prose-p:leading-relaxed prose-a:text-rose-500 prose-a:no-underline hover:prose-a:underline">
          <h2>The honest take</h2>
          <p>{c.closing}</p>

          <p>
            Related: <Link href="/honeymoon-on-a-budget">honeymoon on a budget</Link> ·{' '}
            <Link href="/all-inclusive-honeymoon">all-inclusive honeymoon</Link> ·{' '}
            <Link href="/honeymoon-packing-list">packing list</Link>
          </p>
        </div>
      </div>

      <section className="max-w-3xl mx-auto px-6 mt-20 pb-24">
        <SectionDivider label="FAQ" />
        <h2 className="font-display text-3xl text-zinc-900 mb-8">Frequently asked questions</h2>
        <FAQAccordion items={c.faqs} />
      </section>
    </>
  )
}
