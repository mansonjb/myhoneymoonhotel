import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { buildAlternates } from '@/lib/alternates'
import AuthorByline from '@/components/AuthorByline'
import { AUTHOR } from '@/data/author'
import { DESTINATION_META } from '../../../../../data/destinations'
import { getAllHotels } from '@/lib/hotels'
import { prettyDest } from '@/lib/longtail'
import type { DestinationMeta } from '@/types/destination'
import { COMPARISON_CONTENT } from '@/lib/longtail-content/comparison'
import HotelPickCard from '@/components/longtail/HotelPickCard'
import Stay22InlineCTA from '@/components/longtail/Stay22InlineCTA'
import ComparisonGrid from '@/components/longtail/ComparisonGrid'
import type { ComparisonCriterion } from '@/components/longtail/ComparisonGrid'
import FAQAccordion from '@/components/longtail/FAQAccordion'
import SectionDivider from '@/components/longtail/SectionDivider'

export const dynamicParams = false

const PAIR_DISPLAY: Record<string, [string, string]> = {
  'maldives-vs-bora-bora':       ['maldives', 'bora-bora'],
  'santorini-vs-mykonos':        ['santorini', 'greece'],
  'st-lucia-vs-jamaica':         ['st-lucia', 'jamaica'],
  'bali-vs-thailand':            ['bali', 'thailand'],
  'amalfi-vs-cinque-terre':      ['amalfi', 'cinque-terre'],
  'mexico-vs-costa-rica':        ['mexico', 'costa-rica'],
  'seychelles-vs-mauritius':     ['seychelles', 'mauritius'],
  'bora-bora-vs-fiji':           ['bora-bora', 'fiji'],
  'tuscany-vs-provence':         ['tuscany', 'provence'],
  'lake-como-vs-lake-garda':     ['lake-como', 'lake-garda'],
}

const PAIR_LABEL_OVERRIDES: Record<string, [string, string]> = {
  'santorini-vs-mykonos': ['Santorini', 'Mykonos'],
}

export function generateStaticParams() {
  return Object.keys(PAIR_DISPLAY).map(pair => ({ pair }))
}

type Params = { pair: string }

function resolve(pair: string): {
  aSlug: string; bSlug: string; aLabel: string; bLabel: string;
  a: DestinationMeta; b: DestinationMeta
} | null {
  const tuple = PAIR_DISPLAY[pair]
  if (!tuple) return null
  const [aSlug, bSlug] = tuple
  const a = DESTINATION_META[aSlug]
  const b = DESTINATION_META[bSlug]
  if (!a || !b) return null
  const labels = PAIR_LABEL_OVERRIDES[pair]
  return {
    aSlug, bSlug, a, b,
    aLabel: labels?.[0] ?? prettyDest(aSlug),
    bLabel: labels?.[1] ?? prettyDest(bSlug),
  }
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { pair } = await params
  const r = resolve(pair)
  if (!r) return {}
  const title = `${r.aLabel} vs ${r.bLabel} for a Honeymoon: Which Should You Pick?`
  const description = `${r.aLabel} or ${r.bLabel} for your honeymoon? The honest head-to-head on vibe, climate, budget, top hotels, and which one wins for first-timers.`
  return { title, description, alternates: buildAlternates(`/compare/destinations/${pair}`) }
}

export default async function ComparePairPage({ params }: { params: Promise<Params> }) {
  const { pair } = await params
  const r = resolve(pair)
  if (!r) notFound()
  const content = COMPARISON_CONTENT[pair]

  const hotels = getAllHotels()
  const topA = content?.anchorHotelA ? hotels.find(h => h.slug === content.anchorHotelA) : undefined
  const topB = content?.anchorHotelB ? hotels.find(h => h.slug === content.anchorHotelB) : undefined

  const countryA = topA?.country ?? hotels.find(h => h.destination === r.aSlug)?.country ?? ''
  const countryB = topB?.country ?? hotels.find(h => h.destination === r.bSlug)?.country ?? ''

  const url = `https://myhoneymoonhotel.com/compare/destinations/${pair}`
  const headline = `${r.aLabel} vs ${r.bLabel}: the honest honeymoon head-to-head`

  const articleSchema = {
    '@context': 'https://schema.org', '@type': 'Article', inLanguage: 'en',
    headline,
    description: `Side-by-side comparison of ${r.aLabel} and ${r.bLabel} for a honeymoon — vibe, climate, flight time, budget, and the right pick for first-timers.`,
    author: { '@type': 'Person', name: AUTHOR.name, url: AUTHOR.url, jobTitle: AUTHOR.role },
    publisher: { '@type': 'Organization', name: 'My Honeymoon Hotel', logo: { '@type': 'ImageObject', url: 'https://myhoneymoonhotel.com/icon.png' } },
    datePublished: '2026-06-07', dateModified: '2026-06-08',
    mainEntityOfPage: url,
  }
  const breadcrumbSchema = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://myhoneymoonhotel.com/' },
      { '@type': 'ListItem', position: 2, name: 'Compare', item: 'https://myhoneymoonhotel.com/compare' },
      { '@type': 'ListItem', position: 3, name: `${r.aLabel} vs ${r.bLabel}`, item: url },
    ],
  }
  const faqs = content?.faqs ?? []
  const faqSchemaObj = {
    '@context': 'https://schema.org', '@type': 'FAQPage', inLanguage: 'en',
    mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
  }
  const compareSchema = {
    '@context': 'https://schema.org', '@type': 'WebPage', inLanguage: 'en',
    name: headline, url,
    about: [
      { '@type': 'Place', name: r.aLabel, url: `https://myhoneymoonhotel.com/destinations/${r.aSlug}` },
      { '@type': 'Place', name: r.bLabel, url: `https://myhoneymoonhotel.com/destinations/${r.bSlug}` },
    ],
  }

  // Build comparison criteria from content
  const criteria: ComparisonCriterion[] = content
    ? content.comparisonTable.map((row, idx) => {
        const winnerEntry = content.winnerGrid[idx]
        const winner: 'left' | 'right' | 'tie' | undefined =
          winnerEntry?.winner === 'A' ? 'left' : winnerEntry?.winner === 'B' ? 'right' : winnerEntry?.winner === 'tie' ? 'tie' : undefined
        return { label: row.criterion, leftValue: row.a, rightValue: row.b, winner }
      })
    : []

  return (
    <>
      {[articleSchema, breadcrumbSchema, compareSchema, faqSchemaObj].map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      <header className="max-w-3xl mx-auto px-6 pt-20 pb-8">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">Head-to-head</p>
        <h1 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-6 leading-tight">
          {r.aLabel} vs {r.bLabel}: the honest honeymoon comparison
        </h1>
        <p className="text-zinc-500 text-lg leading-relaxed mb-6">
          {content?.tldr ?? `Two destinations couples agonize over. Side-by-side on the things that actually matter for a honeymoon.`}
        </p>
        <AuthorByline />
        {content?.tldr && (
          <div className="mt-10 bg-rose-50/60 border border-rose-100 rounded-2xl p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-rose-500 mb-2">The verdict</p>
            <p className="text-zinc-700 leading-relaxed">{content.tldr}</p>
          </div>
        )}
      </header>

      {content && (
        <section className="max-w-6xl mx-auto px-6 mt-12">
          <SectionDivider label="Head-to-head" />
          <h2 className="font-display text-3xl text-zinc-900 mb-3">Side-by-side, with winners by criterion</h2>
          <p className="text-zinc-500 max-w-3xl mb-6">Honest call on every criterion that actually matters.</p>
          <ComparisonGrid
            left={{ name: r.aLabel, slug: r.aSlug }}
            right={{ name: r.bLabel, slug: r.bSlug }}
            criteria={criteria}
          />
        </section>
      )}

      {content && (
        <section className="max-w-6xl mx-auto px-6 mt-16">
          <SectionDivider label="Which to choose if..." />
          <h2 className="font-display text-3xl text-zinc-900 mb-8">Which to choose if…</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {content.whichIf.map((w, i) => (
              <div key={i} className="border border-zinc-100 rounded-2xl p-6 bg-white">
                <p className="text-xs uppercase tracking-widest text-zinc-400 mb-2">If…</p>
                <p className="font-medium text-zinc-900 leading-snug mb-3">{w.scenario}</p>
                <p className="text-rose-500 font-semibold text-sm mb-2">
                  → Pick {w.pick === 'A' ? r.aLabel : r.bLabel}
                </p>
                <p className="text-zinc-600 text-sm leading-relaxed">{w.reason}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {(topA || topB) && (
        <section className="max-w-6xl mx-auto px-6 mt-16">
          <SectionDivider label="Anchor hotels" />
          <h2 className="font-display text-3xl text-zinc-900 mb-8">Anchor hotel from each</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {topA && (
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-rose-400 mb-3">{r.aLabel}</p>
                <HotelPickCard hotel={topA} />
              </div>
            )}
            {topB && (
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-rose-400 mb-3">{r.bLabel}</p>
                <HotelPickCard hotel={topB} />
              </div>
            )}
          </div>
        </section>
      )}

      <div className="max-w-6xl mx-auto px-6 mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Stay22InlineCTA
          destination={r.aSlug}
          country={countryA}
          headline={`Live prices in ${r.aLabel}`}
          subline={`Check current ${r.aLabel} hotel rates across every major OTA.`}
          campaign={`compare-${pair}-a`}
        />
        <Stay22InlineCTA
          destination={r.bSlug}
          country={countryB}
          headline={`Live prices in ${r.bLabel}`}
          subline={`Check current ${r.bLabel} hotel rates across every major OTA.`}
          campaign={`compare-${pair}-b`}
        />
      </div>

      {content && (
        <div className="max-w-3xl mx-auto px-6 mt-12">
          <div className="prose prose-zinc max-w-none prose-headings:font-display prose-headings:text-zinc-900 prose-p:text-zinc-600 prose-p:leading-relaxed prose-a:text-rose-500 prose-a:no-underline hover:prose-a:underline">
            <h2>If you have 14 days — doing both</h2>
            <p>{content.splitItinerary}</p>

            <h2>The honest take</h2>
            <p>{content.closing}</p>

            <p>
              Full guides: <Link href={`/destinations/${r.aSlug}`}>{r.aLabel} honeymoon guide</Link> ·{' '}
              <Link href={`/destinations/${r.bSlug}`}>{r.bLabel} honeymoon guide</Link>
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
