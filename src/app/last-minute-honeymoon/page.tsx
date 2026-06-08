import type { Metadata } from 'next'
import Link from 'next/link'
import { buildAlternates } from '@/lib/alternates'
import AuthorByline from '@/components/AuthorByline'
import { AUTHOR } from '@/data/author'
import { getAllHotels } from '@/lib/hotels'
import { prettyDest } from '@/lib/longtail'
import { LAST_MINUTE_CONTENT } from '@/lib/longtail-content/last-minute'
import type { Hotel } from '../../../types/hotel'

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
      <div className="max-w-3xl mx-auto px-6 py-20">
        {[articleSchema, breadcrumbSchema, itemListSchema, faqSchemaJson].map((s, i) => (
          <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
        ))}
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">Planning Guide</p>
        <h1 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-6 leading-tight">
          Last-minute honeymoon: the honest take.
        </h1>
        <p className="text-zinc-500 text-lg leading-relaxed mb-2">{c.intro}</p>
        <AuthorByline />

        <div className="prose prose-zinc max-w-none prose-headings:font-display prose-headings:text-zinc-900 prose-p:text-zinc-600 prose-p:leading-relaxed prose-a:text-rose-500 prose-a:no-underline hover:prose-a:underline mt-10">

          <h2>Yes-windows — where last-minute genuinely works</h2>
          {c.yesWindows.map((w, i) => (
            <div key={i} className="mb-4">
              <h3 className="font-display text-xl text-zinc-900 mt-6">{w.title}</h3>
              <p>{w.body}</p>
            </div>
          ))}

          <h2>No-windows — where last-minute almost never works</h2>
          {c.noWindows.map((w, i) => (
            <div key={i} className="mb-4">
              <h3 className="font-display text-xl text-zinc-900 mt-6">{w.title}</h3>
              <p>{w.body}</p>
            </div>
          ))}

          <h2>The 14-day vs 30-day reality</h2>
          <p>{c.reality}</p>

          <h2>The savings pitch — honest version</h2>
          <p>{c.savings}</p>

          <h2>{hotels.length} hotels with genuine last-minute availability</h2>
          <p>Properties from our catalogue that consistently take inside-30-day bookings in their shoulder windows.</p>
          <div className="not-prose mt-6">
            {hotels.map(h => (
              <div key={h.slug} className="border border-zinc-100 rounded-2xl p-5 mb-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <Link href={`/hotels/${h.slug}`} className="font-display text-xl text-zinc-900 hover:underline">{h.name}</Link>
                    <p className="text-xs uppercase tracking-wider text-zinc-400 mt-1">
                      {prettyDest(h.destination)} · {h.stars}★ · score {h.honeymoon_score}/100
                    </p>
                  </div>
                  <p className="text-rose-500 font-semibold text-sm shrink-0">from ${h.price_per_night_usd.min}/night</p>
                </div>
                {h.content?.verdict && (
                  <p className="text-zinc-500 text-sm leading-relaxed mt-3">{h.content.verdict.slice(0, 220)}{h.content.verdict.length > 220 ? '…' : ''}</p>
                )}
              </div>
            ))}
          </div>

          <h2>The honest take</h2>
          <p>{c.closing}</p>

          <p>
            Related: <Link href="/honeymoon-on-a-budget">honeymoon on a budget</Link> ·{' '}
            <Link href="/all-inclusive-honeymoon">all-inclusive honeymoon</Link> ·{' '}
            <Link href="/honeymoon-packing-list">packing list</Link>
          </p>
        </div>
      </div>

      <section className="mt-16 max-w-3xl mx-auto px-6">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">FAQ</p>
        <h2 className="font-display text-3xl text-zinc-900 mb-8">Frequently asked questions</h2>
        <div className="space-y-3">
          {c.faqs.map((f, i) => (
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
