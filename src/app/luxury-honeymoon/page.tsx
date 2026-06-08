import type { Metadata } from 'next'
import Link from 'next/link'
import { buildAlternates } from '@/lib/alternates'
import AuthorByline from '@/components/AuthorByline'
import { AUTHOR } from '@/data/author'
import { getAllHotels } from '@/lib/hotels'
import { prettyDest } from '@/lib/longtail'
import { LUXURY_CONTENT } from '@/lib/longtail-content/luxury'
import type { Hotel } from '../../../types/hotel'

export const metadata: Metadata = {
  title: 'Luxury Honeymoon: The Best $1,000+/Night Hotels for 2026',
  description: 'The ultra-luxury honeymoon tier — $1,000+/night hotels scored on romance. The three sub-tiers ($1k / $2k / $5k+), the best picks, and where the deals are.',
  alternates: buildAlternates('/luxury-honeymoon'),
}

const url = 'https://myhoneymoonhotel.com/luxury-honeymoon'

export default function LuxuryHoneymoonPage() {
  const allHotels = getAllHotels()
  const content = LUXURY_CONTENT

  // Resolve each tier's hotels from the module + add a catalogue tail of additional $1000+/night picks.
  const explicitSlugs = new Set(content.tiers.flatMap(t => t.hotelSlugs))
  const tierHotels: Record<string, Hotel[]> = {}
  for (const tier of content.tiers) {
    tierHotels[tier.title] = tier.hotelSlugs
      .map(s => allHotels.find(h => h.slug === s))
      .filter((h): h is Hotel => Boolean(h))
  }

  const additional = allHotels
    .filter(h => (h.price_per_night_usd?.min ?? 0) >= 1000 && !explicitSlugs.has(h.slug) && h.honeymoon_score >= 85)
    .sort((a, b) => (b.honeymoon_score ?? 0) - (a.honeymoon_score ?? 0))
    .slice(0, 4)

  const allListed: Hotel[] = [
    ...Object.values(tierHotels).flat(),
    ...additional,
  ]

  const articleSchema = {
    '@context': 'https://schema.org', '@type': 'Article', inLanguage: 'en',
    headline: 'Luxury honeymoon: the best $1,000+/night hotels for 2026',
    description: 'The ultra-luxury honeymoon tier — properties scored 85+ with starting rates above $1,000/night.',
    author: { '@type': 'Person', name: AUTHOR.name, url: AUTHOR.url, jobTitle: AUTHOR.role },
    publisher: { '@type': 'Organization', name: 'My Honeymoon Hotel', logo: { '@type': 'ImageObject', url: 'https://myhoneymoonhotel.com/icon.png' } },
    datePublished: '2026-06-07', dateModified: '2026-06-08',
    mainEntityOfPage: url,
  }
  const breadcrumbSchema = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://myhoneymoonhotel.com/' },
      { '@type': 'ListItem', position: 2, name: 'Luxury honeymoon', item: url },
    ],
  }
  const itemListSchema = {
    '@context': 'https://schema.org', '@type': 'ItemList', inLanguage: 'en',
    itemListElement: allListed.map((h, i) => ({
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
          Luxury honeymoon: the top tier, scored honestly.
        </h1>
        <p className="text-zinc-500 text-lg leading-relaxed mb-2">{content.intro}</p>
        <AuthorByline />

        <div className="prose prose-zinc max-w-none prose-headings:font-display prose-headings:text-zinc-900 prose-p:text-zinc-600 prose-p:leading-relaxed prose-a:text-rose-500 prose-a:no-underline hover:prose-a:underline mt-10">

          {content.tiers.map((tier, ti) => {
            const hotels = tierHotels[tier.title] ?? []
            return (
              <section key={ti} className="mt-10">
                <h2>{tier.title} <span className="text-zinc-400 font-normal">— {tier.range}</span></h2>
                <p>{tier.body}</p>
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
                        <p className="text-rose-500 font-semibold text-sm shrink-0">from ${h.price_per_night_usd.min.toLocaleString()}/night</p>
                      </div>
                      {h.content?.verdict && (
                        <p className="text-zinc-500 text-sm leading-relaxed mt-3">{h.content.verdict.slice(0, 220)}{h.content.verdict.length > 220 ? '…' : ''}</p>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )
          })}

          {additional.length > 0 && (
            <section className="mt-10">
              <h2>Also worth your shortlist</h2>
              <p>Four additional catalogue properties at $1,000+/night with honeymoon scores above 85.</p>
              <div className="not-prose mt-6">
                {additional.map(h => (
                  <div key={h.slug} className="border border-zinc-100 rounded-2xl p-5 mb-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <Link href={`/hotels/${h.slug}`} className="font-display text-xl text-zinc-900 hover:underline">{h.name}</Link>
                        <p className="text-xs uppercase tracking-wider text-zinc-400 mt-1">
                          {prettyDest(h.destination)} · {h.stars}★ · score {h.honeymoon_score}/100
                        </p>
                      </div>
                      <p className="text-rose-500 font-semibold text-sm shrink-0">from ${h.price_per_night_usd.min.toLocaleString()}/night</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          <h2>Where the deals are</h2>
          <p>{content.whereDealsAre}</p>

          <h2>Travel advisors at this tier</h2>
          <p>{content.agentSection}</p>

          <h2>The honest take</h2>
          <p>{content.closing}</p>

          <p>
            Related: <Link href="/overwater-bungalow-honeymoon">overwater bungalow honeymoon</Link> ·{' '}
            <Link href="/all-inclusive-honeymoon">all-inclusive honeymoon</Link> ·{' '}
            <Link href="/honeymoon-on-a-budget">honeymoon on a budget</Link>
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
