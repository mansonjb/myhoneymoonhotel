import type { Metadata } from 'next'
import Link from 'next/link'
import { buildAlternates } from '@/lib/alternates'
import AuthorByline from '@/components/AuthorByline'
import { AUTHOR } from '@/data/author'
import { getAllHotels } from '@/lib/hotels'
import { prettyDest } from '@/lib/longtail'
import { BUDGET_PILLAR_CONTENT } from '@/lib/longtail-content/budget-pillar'

export const metadata: Metadata = {
  title: 'Honeymoon on a Budget: Genuinely Romantic Hotels Under $500/Night',
  description: 'The honest budget honeymoon guide — properties under $500/night that are still genuinely honeymoon-worthy, with the math and the destinations that work.',
  alternates: buildAlternates('/honeymoon-on-a-budget'),
}

const url = 'https://myhoneymoonhotel.com/honeymoon-on-a-budget'

export default function HoneymoonOnABudgetPage() {
  const content = BUDGET_PILLAR_CONTENT
  const picks = getAllHotels()
    .filter(h => {
      const min = h.price_per_night_usd?.min ?? 0
      return min >= 200 && min < 500 && h.honeymoon_score >= 80
    })
    .sort((a, b) => (b.honeymoon_score ?? 0) - (a.honeymoon_score ?? 0))
    .slice(0, 16)

  const articleSchema = {
    '@context': 'https://schema.org', '@type': 'Article', inLanguage: 'en',
    headline: 'Honeymoon on a budget: genuinely romantic hotels under $500/night',
    description: 'The honest budget honeymoon guide — scored properties between $200-500/night that are still honeymoon-worthy.',
    author: { '@type': 'Person', name: AUTHOR.name, url: AUTHOR.url, jobTitle: AUTHOR.role },
    publisher: { '@type': 'Organization', name: 'My Honeymoon Hotel', logo: { '@type': 'ImageObject', url: 'https://myhoneymoonhotel.com/icon.png' } },
    datePublished: '2026-06-07', dateModified: '2026-06-08',
    mainEntityOfPage: url,
  }
  const breadcrumbSchema = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://myhoneymoonhotel.com/' },
      { '@type': 'ListItem', position: 2, name: 'Honeymoon on a budget', item: url },
    ],
  }
  const itemListSchema = {
    '@context': 'https://schema.org', '@type': 'ItemList', inLanguage: 'en',
    itemListElement: picks.map((h, i) => ({
      '@type': 'ListItem', position: i + 1,
      url: `https://myhoneymoonhotel.com/hotels/${h.slug}`, name: h.name,
    })),
  }
  const faqSchemaJson = {
    '@context': 'https://schema.org', '@type': 'FAQPage', inLanguage: 'en',
    mainEntity: content.faqs.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
  }

  return (
    <>
      <div className="max-w-3xl mx-auto px-6 py-20">
        {[articleSchema, breadcrumbSchema, itemListSchema, faqSchemaJson].map((s, i) => (
          <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
        ))}
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">Pillar Guide</p>
        <h1 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-6 leading-tight">
          Honeymoon on a budget: {picks.length} properties that still feel like a honeymoon.
        </h1>
        <p className="text-zinc-500 text-lg leading-relaxed mb-2">{content.intro}</p>
        <AuthorByline />

        <div className="prose prose-zinc max-w-none prose-headings:font-display prose-headings:text-zinc-900 prose-p:text-zinc-600 prose-p:leading-relaxed prose-a:text-rose-500 prose-a:no-underline hover:prose-a:underline mt-10">

          <h2>Where the math works</h2>
          <p>{content.whereMathWorks}</p>

          <h2>The all-inclusive trap</h2>
          <p>{content.allInclusiveTrap}</p>

          <h2>Four splurge moments worth paying for</h2>
          {content.splurgeMoments.map((s, i) => (
            <div key={i} className="mb-4">
              <h3 className="font-display text-xl text-zinc-900 mt-6">{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}

          <h2>The real 7-night cost breakdown (per couple)</h2>
          <div className="not-prose mt-4 border border-zinc-100 rounded-2xl overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {content.costBreakdown.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-zinc-50' : ''}>
                    <td className="px-5 py-3 font-medium text-zinc-900 align-top">{row.label}</td>
                    <td className="px-5 py-3 text-zinc-600">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>The {picks.length} picks (scored 80+, under $500/night)</h2>
          <div className="not-prose mt-6">
            {picks.map(h => (
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
          <p>{content.closing}</p>

          <p>
            Related: <Link href="/honeymoon-under-5000">honeymoon under $5,000</Link> ·{' '}
            <Link href="/honeymoon-under-10000">honeymoon under $10,000</Link> ·{' '}
            <Link href="/all-inclusive-honeymoon">all-inclusive honeymoon</Link> ·{' '}
            <Link href="/last-minute-honeymoon">last-minute honeymoon</Link>
          </p>
        </div>
      </div>

      <section className="mt-16 max-w-3xl mx-auto px-6">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">FAQ</p>
        <h2 className="font-display text-3xl text-zinc-900 mb-8">Frequently asked questions</h2>
        <div className="space-y-3">
          {content.faqs.map((f, i) => (
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
