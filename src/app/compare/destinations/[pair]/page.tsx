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
import type { Hotel } from '../../../../../types/hotel'

export const dynamicParams = false

// Verified pairs (both slugs must exist in DESTINATION_META; checked at build).
const PAIRS: [string, string][] = [
  ['maldives', 'bora-bora'],
  ['santorini', 'greece'],                  // Mykonos doesn't exist as own slug → use Greece (covers Mykonos)
  ['st-lucia', 'jamaica'],
  ['bali', 'thailand'],
  ['amalfi', 'cinque-terre'],
  ['mexico', 'costa-rica'],
  ['seychelles', 'mauritius'],
  ['bora-bora', 'fiji'],
  ['tuscany', 'provence'],                  // dubai-vs-abu-dhabi → swapped (UAE has destination but not abu-dhabi separately)
  ['lake-como', 'lake-garda'],
]

// Slug-friendly pair URLs (uses the visible "vs" form, regardless of slug match)
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

function resolve(pair: string): { aSlug: string; bSlug: string; aLabel: string; bLabel: string; a: DestinationMeta; b: DestinationMeta } | null {
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

  const hotels = getAllHotels()
  const topA = hotels.filter((h: Hotel) => h.destination === r.aSlug)[0]
  const topB = hotels.filter((h: Hotel) => h.destination === r.bSlug)[0]

  const url = `https://myhoneymoonhotel.com/compare/destinations/${pair}`
  const headline = `${r.aLabel} vs ${r.bLabel}: the honest honeymoon head-to-head`

  const articleSchema = {
    '@context': 'https://schema.org', '@type': 'Article', inLanguage: 'en',
    headline,
    description: `Side-by-side comparison of ${r.aLabel} and ${r.bLabel} for a honeymoon — vibe, climate, flight time, budget, and the right pick for first-timers.`,
    author: { '@type': 'Person', name: AUTHOR.name, url: AUTHOR.url, jobTitle: AUTHOR.role },
    publisher: { '@type': 'Organization', name: 'My Honeymoon Hotel', logo: { '@type': 'ImageObject', url: 'https://myhoneymoonhotel.com/icon.png' } },
    datePublished: '2026-06-07', dateModified: '2026-06-07',
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
  const faqs = [
    { question: `Which is more romantic — ${r.aLabel} or ${r.bLabel}?`, answer: `Both are romantic destinations. ${r.aLabel} leans ${tone(r.a)}, ${r.bLabel} leans ${tone(r.b)}. For most couples, the right choice tracks pace rather than scenery — the more design-forward, lower-key destination usually wins for honeymoons specifically.` },
    { question: `Which is cheaper, ${r.aLabel} or ${r.bLabel}?`, answer: `${priceCompare(r.a, r.b, r.aLabel, r.bLabel)}` },
    { question: 'Which has better food?', answer: `${r.aLabel}: ${r.a.localFood.split('.')[0]}. ${r.bLabel}: ${r.b.localFood.split('.')[0]}. For honeymoon dinners specifically, both are strong — the difference is the format (resort dining vs walkable village restaurants).` },
    { question: `First-timer pick: ${r.aLabel} or ${r.bLabel}?`, answer: `${firstTimerPick(r.aLabel, r.bLabel, r.a, r.b)}` },
  ]
  const faqSchema = {
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

  return (
    <>
      <div className="max-w-3xl mx-auto px-6 py-20">
        {[articleSchema, breadcrumbSchema, compareSchema, faqSchema].map((s, i) => (
          <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
        ))}
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">Head-to-head</p>
        <h1 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-6 leading-tight">
          {r.aLabel} vs {r.bLabel}: the honest honeymoon comparison.
        </h1>
        <p className="text-zinc-500 text-lg leading-relaxed mb-2">
          Two destinations couples agonize over. Side-by-side on the things that actually matter for a honeymoon: vibe,
          climate, flight time, budget, and the top hotel pick from each.
        </p>
        <AuthorByline />

        <div className="prose prose-zinc max-w-none prose-headings:font-display prose-headings:text-zinc-900 prose-p:text-zinc-600 prose-p:leading-relaxed prose-a:text-rose-500 prose-a:no-underline hover:prose-a:underline mt-10">
          <h2>Vibe</h2>
          <p><strong>{r.aLabel}:</strong> {r.a.tagline}</p>
          <p><strong>{r.bLabel}:</strong> {r.b.tagline}</p>

          <h2>Best for</h2>
          <p><strong>{r.aLabel}:</strong> {r.a.perfectFor.slice(0, 3).join('; ')}.</p>
          <p><strong>{r.bLabel}:</strong> {r.b.perfectFor.slice(0, 3).join('; ')}.</p>

          <h2>Climate &amp; best time</h2>
          <p><strong>{r.aLabel}:</strong> {r.a.bestTime}. {r.a.guide.when}</p>
          <p><strong>{r.bLabel}:</strong> {r.b.bestTime}. {r.b.guide.when}</p>

          <h2>Flight time</h2>
          <p><strong>{r.aLabel}:</strong> {r.a.flightFrom}.</p>
          <p><strong>{r.bLabel}:</strong> {r.b.flightFrom}.</p>

          <h2>Budget</h2>
          <p><strong>{r.aLabel}:</strong> {r.a.budgetTiers.map(t => `${t.label} ${t.range}`).join(' · ')}.</p>
          <p><strong>{r.bLabel}:</strong> {r.b.budgetTiers.map(t => `${t.label} ${t.range}`).join(' · ')}.</p>

          <h2>Top hotel pick from each</h2>
          {topA && (
            <p><strong>{r.aLabel}:</strong> <Link href={`/hotels/${topA.slug}`}>{topA.name}</Link> — score {topA.honeymoon_score}/100, from ${topA.price_per_night_usd.min}/night.</p>
          )}
          {topB && (
            <p><strong>{r.bLabel}:</strong> <Link href={`/hotels/${topB.slug}`}>{topB.name}</Link> — score {topB.honeymoon_score}/100, from ${topB.price_per_night_usd.min}/night.</p>
          )}

          <h2>When to choose which</h2>
          <p>
            Pick <strong>{r.aLabel}</strong> if you want {r.a.topExperience.toLowerCase()} as the centerpiece and you’re
            committed to {r.a.bestTime}. Pick <strong>{r.bLabel}</strong> if {r.b.topExperience.toLowerCase()} matters
            more, or if your dates align better with {r.b.bestTime}.
          </p>

          <p>
            Full guides: <Link href={`/destinations/${r.aSlug}`}>{r.aLabel} honeymoon guide</Link> ·{' '}
            <Link href={`/destinations/${r.bSlug}`}>{r.bLabel} honeymoon guide</Link>
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

// ---- small helpers (used only by this page; left local to keep helper file focused) ----
function tone(d: DestinationMeta): string {
  const tag = d.tagline.toLowerCase()
  if (tag.includes('luxury') || tag.includes('private island') || tag.includes('overwater')) return 'pure-luxury, resort-bubble'
  if (tag.includes('village') || tag.includes('cliff') || tag.includes('coast')) return 'walkable, village-coast'
  if (tag.includes('safari') || tag.includes('bush')) return 'wilderness-led'
  return 'classic-honeymoon'
}
function priceCompare(a: DestinationMeta, b: DestinationMeta, al: string, bl: string): string {
  const aMin = Number((a.budgetTiers[0]?.range.match(/\$([\d,]+)/) || [])[1]?.replace(/,/g, '') ?? '0')
  const bMin = Number((b.budgetTiers[0]?.range.match(/\$([\d,]+)/) || [])[1]?.replace(/,/g, '') ?? '0')
  if (!aMin || !bMin) return `Both are in the luxury bracket; expect ${al} from ${a.budgetTiers[0]?.range} and ${bl} from ${b.budgetTiers[0]?.range}.`
  if (aMin === bMin) return `Roughly even — both start near $${aMin}/night for accessible luxury.`
  const cheaper = aMin < bMin ? al : bl
  const pricier = aMin < bMin ? bl : al
  return `${cheaper} is the cheaper of the two — accessible luxury starts around $${Math.min(aMin, bMin)}/night versus $${Math.max(aMin, bMin)}/night for ${pricier}.`
}
function firstTimerPick(al: string, bl: string, a: DestinationMeta, b: DestinationMeta): string {
  const aTransit = a.flightFrom
  const bTransit = b.flightFrom
  return `For most first-time honeymooners, the right pick is the one with shorter transit and a more turn-key resort experience. ${al}: ${aTransit}. ${bl}: ${bTransit}. The one closer to home wins unless you specifically want the more remote experience.`
}
