import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { buildAlternates } from '@/lib/alternates'
import AuthorByline from '@/components/AuthorByline'
import { AUTHOR } from '@/data/author'
import {
  getDestinationsForPersona,
  prettyDest,
  ALL_PERSONAS,
} from '@/lib/longtail'
import type { Hotel } from '../../../types/hotel'
import { getAllHotels } from '@/lib/hotels'
import { BUDGET_CONTENT } from '@/lib/longtail-content/budget'
import { MONTH_CONTENT } from '@/lib/longtail-content/month'
import { DURATION_CONTENT } from '@/lib/longtail-content/duration'
import { PERSONA_CONTENT } from '@/lib/longtail-content/persona'
import { DESTINATION_META } from '../../../data/destinations'
import HotelPickCard from '@/components/longtail/HotelPickCard'
import DestinationPickCard from '@/components/longtail/DestinationPickCard'
import Stay22InlineCTA from '@/components/longtail/Stay22InlineCTA'
import FAQAccordion from '@/components/longtail/FAQAccordion'
import SectionDivider from '@/components/longtail/SectionDivider'

export const dynamicParams = false

// ---------- slug sets ----------
const BUDGETS = [5000, 10000, 15000, 20000] as const
const MONTHS = [
  'january','february','march','april','may','june',
  'july','august','september','october','november','december',
] as const
const DURATIONS = [3, 5, 7, 10, 14] as const

const PERSONA_LABELS: Record<string, string> = {
  foodies: 'Foodies',
  'adventure-seekers': 'Adventure Seekers',
  introverts: 'Introverts',
  'second-marriage': 'A Second Marriage',
  'over-40': 'Couples Over 40',
}

function budgetSlug(b: number): string { return `honeymoon-under-${b}` }
function monthSlug(m: string): string { return `honeymoon-in-${m}` }
function durationSlug(d: number): string { return `${d}-day-honeymoon` }
function personaSlug(p: string): string { return `honeymoon-for-${p}` }

export function generateStaticParams(): { longtail: string }[] {
  return [
    ...BUDGETS.map(b => ({ longtail: budgetSlug(b) })),
    ...MONTHS.map(m => ({ longtail: monthSlug(m) })),
    ...DURATIONS.map(d => ({ longtail: durationSlug(d) })),
    ...ALL_PERSONAS.map(p => ({ longtail: personaSlug(p) })),
  ]
}

// ---------- parsing ----------
type Kind =
  | { kind: 'budget'; budget: number }
  | { kind: 'month'; month: string; monthIndex: number }
  | { kind: 'duration'; days: number }
  | { kind: 'persona'; persona: string }

function parseSlug(slug: string): Kind | null {
  const budgetM = slug.match(/^honeymoon-under-(\d+)$/)
  if (budgetM) {
    const b = Number(budgetM[1])
    if (BUDGETS.includes(b as typeof BUDGETS[number])) return { kind: 'budget', budget: b }
  }
  const monthM = slug.match(/^honeymoon-in-(.+)$/)
  if (monthM) {
    const m = monthM[1]
    const idx = MONTHS.indexOf(m as typeof MONTHS[number])
    if (idx >= 0) return { kind: 'month', month: m, monthIndex: idx }
  }
  const durM = slug.match(/^(\d+)-day-honeymoon$/)
  if (durM) {
    const d = Number(durM[1])
    if (DURATIONS.includes(d as typeof DURATIONS[number])) return { kind: 'duration', days: d }
  }
  const persM = slug.match(/^honeymoon-for-(.+)$/)
  if (persM) {
    const p = persM[1]
    if (ALL_PERSONAS.includes(p)) return { kind: 'persona', persona: p }
  }
  return null
}

// ---------- metadata ----------
type Params = { longtail: string }

export async function generateMetadata(
  { params }: { params: Promise<Params> },
): Promise<Metadata> {
  const { longtail } = await params
  const parsed = parseSlug(longtail)
  if (!parsed) return {}
  let title = ''
  let description = ''
  switch (parsed.kind) {
    case 'budget':
      title = `Honeymoon Under $${parsed.budget.toLocaleString()}: Real Options for 2026`
      description = `The hotels and destinations where a real honeymoon fits inside $${parsed.budget.toLocaleString()} — flights, 7 nights, and extras included.`
      break
    case 'month':
      title = `Honeymoon in ${cap(parsed.month)}: Where to Go and Where to Skip`
      description = `Where to honeymoon in ${cap(parsed.month)} — the destinations with the strongest combination of weather, value and romance.`
      break
    case 'duration':
      title = `${parsed.days}-Day Honeymoon: Real Routings and the Honest Math`
      description = `The honest take on a ${parsed.days}-day honeymoon — which destinations work, the itinerary shape, and the realistic math on flights and rest.`
      break
    case 'persona':
      title = `Honeymoon for ${PERSONA_LABELS[parsed.persona]}: Destinations and Hotels That Actually Fit`
      description = `Honeymoon ideas built for ${PERSONA_LABELS[parsed.persona].toLowerCase()} — the destinations and hotels we'd actually recommend.`
      break
  }
  return {
    title,
    description,
    alternates: buildAlternates(`/${longtail}`),
  }
}

function cap(s: string): string { return s.charAt(0).toUpperCase() + s.slice(1) }

// ---------- helpers ----------
function countryForDestination(destSlug: string, allHotels: Hotel[]): string {
  const h = allHotels.find(x => x.destination === destSlug)
  return h?.country ?? ''
}

// ---------- page ----------
export default async function LongtailPage(
  { params }: { params: Promise<Params> },
) {
  const { longtail } = await params
  const parsed = parseSlug(longtail)
  if (!parsed) notFound()
  switch (parsed.kind) {
    case 'budget': return <BudgetPage slug={longtail} budget={parsed.budget} />
    case 'month': return <MonthPage slug={longtail} month={parsed.month} idx={parsed.monthIndex} />
    case 'duration': return <DurationPage slug={longtail} days={parsed.days} />
    case 'persona': return <PersonaPage slug={longtail} persona={parsed.persona} />
  }
}

// ---------- shared ui ----------
function Hero({
  eyebrow, h1, intro, tldr,
}: {
  eyebrow: string
  h1: string
  intro: string
  tldr?: string
}) {
  return (
    <header className="max-w-3xl mx-auto px-6 pt-20 pb-8">
      <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">{eyebrow}</p>
      <h1 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-6 leading-tight">{h1}</h1>
      <p className="text-zinc-500 text-lg leading-relaxed mb-6">{intro}</p>
      <AuthorByline />
      {tldr && (
        <div className="mt-10 bg-rose-50/60 border border-rose-100 rounded-2xl p-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-rose-500 mb-2">In short</p>
          <p className="text-zinc-700 leading-relaxed">{tldr}</p>
        </div>
      )}
    </header>
  )
}

function Schemas({ schemas }: { schemas: object[] }) {
  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
    </>
  )
}

function ProseBlock({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-3xl mx-auto px-6">
      <div className="prose prose-zinc max-w-none prose-headings:font-display prose-headings:text-zinc-900 prose-p:text-zinc-600 prose-p:leading-relaxed prose-a:text-rose-500 prose-a:no-underline hover:prose-a:underline">
        {children}
      </div>
    </div>
  )
}

function commonSchemas(slug: string, headline: string, description: string, breadcrumbName: string) {
  const url = `https://myhoneymoonhotel.com/${slug}`
  return {
    article: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      inLanguage: 'en',
      headline,
      description,
      author: { '@type': 'Person', name: AUTHOR.name, url: AUTHOR.url, jobTitle: AUTHOR.role },
      publisher: { '@type': 'Organization', name: 'My Honeymoon Hotel', logo: { '@type': 'ImageObject', url: 'https://myhoneymoonhotel.com/icon.png' } },
      datePublished: '2026-06-07',
      dateModified: '2026-06-08',
      mainEntityOfPage: url,
    },
    breadcrumb: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://myhoneymoonhotel.com/' },
        { '@type': 'ListItem', position: 2, name: breadcrumbName, item: url },
      ],
    },
  }
}

function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: 'en',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  }
}

function hotelItemListSchema(hotels: Hotel[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    inLanguage: 'en',
    itemListElement: hotels.map((h, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `https://myhoneymoonhotel.com/hotels/${h.slug}`,
      name: h.name,
    })),
  }
}

function FAQSection({ faqs }: { faqs: { question: string; answer: string }[] }) {
  if (faqs.length === 0) return null
  return (
    <section className="max-w-3xl mx-auto px-6 mt-20 pb-24">
      <SectionDivider label="FAQ" />
      <h2 className="font-display text-3xl text-zinc-900 mb-8">Frequently asked questions</h2>
      <FAQAccordion items={faqs} />
    </section>
  )
}

// ============================================================================
// 1. BUDGET PAGE
// ============================================================================
function BudgetPage({ slug, budget }: { slug: string; budget: number }) {
  const content = BUDGET_CONTENT[budget]
  const allHotels = getAllHotels()
  const hotels = content
    ? content.hotelSlugs.map(s => allHotels.find(h => h.slug === s)).filter((h): h is Hotel => Boolean(h))
    : []

  const headline = `Honeymoon under $${budget.toLocaleString()}: real options for 2026`
  const desc = `The math, the hotels, the destinations where a 7-night honeymoon — flights and extras included — fits inside $${budget.toLocaleString()}.`
  const { article, breadcrumb } = commonSchemas(slug, headline, desc, `Honeymoon under $${budget.toLocaleString()}`)
  const faqs = content?.faqs ?? []

  if (!content) {
    return (
      <>
        <Schemas schemas={[article, breadcrumb]} />
        <Hero eyebrow="Budget Guide" h1={headline} intro={desc} />
        <ProseBlock><p>Content for this budget tier is being prepared.</p></ProseBlock>
      </>
    )
  }

  // Destination clusters from hotels — group by destination
  const destSet = new Set<string>()
  hotels.forEach(h => destSet.add(h.destination))
  const destinations = Array.from(destSet).slice(0, 6)

  return (
    <>
      <Schemas schemas={[article, breadcrumb, hotelItemListSchema(hotels), faqSchema(faqs)]} />
      <Hero eyebrow="Budget Guide" h1={headline} intro={content.intro} tldr={content.whatItBuys.split('. ').slice(0, 2).join('. ') + '.'} />

      <ProseBlock>
        <SectionDivider label="The math" />
        <h2>What this budget actually buys</h2>
        <p>{content.whatItBuys}</p>
        <div className="not-prose mt-6 border border-zinc-100 rounded-2xl overflow-hidden">
          <table className="w-full text-sm">
            <tbody>
              {content.budgetTable.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-zinc-50' : ''}>
                  <td className="px-5 py-3 font-medium text-zinc-900 align-top">{row.label}</td>
                  <td className="px-5 py-3 text-zinc-600">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ProseBlock>

      <section className="max-w-6xl mx-auto px-6 mt-16">
        <SectionDivider label="Hotels that fit" />
        <h2 className="font-display text-3xl text-zinc-900 mb-3">The {hotels.length} hotels that fit this budget</h2>
        <p className="text-zinc-500 max-w-3xl mb-8">Real picks from our catalog where the math — 7 nights + flights + extras — credibly fits inside ${budget.toLocaleString()}.</p>
        {hotels.length === 0 ? (
          <p className="text-zinc-500">Catalog data missing for one or more picks at this tier.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hotels.map(h => <HotelPickCard key={h.slug} hotel={h} />)}
          </div>
        )}
      </section>

      {destinations.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 mt-16">
          <SectionDivider label="Destinations where it works" />
          <h2 className="font-display text-3xl text-zinc-900 mb-8">Destinations where this budget actually fits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map(d => (
              <DestinationPickCard
                key={d}
                slug={d}
                displayLabel={prettyDest(d)}
                whyHere={`A confident 5-star at $${budget.toLocaleString()}/trip math actually works here.`}
              />
            ))}
          </div>
        </section>
      )}

      <div className="max-w-3xl mx-auto px-6">
        <Stay22InlineCTA
          destination={destinations[0] ?? 'caribbean'}
          country={countryForDestination(destinations[0] ?? '', allHotels)}
          headline={`Live prices for under-$${budget.toLocaleString()} honeymoon stays`}
          subline="Stay22 pulls the best current OTA rate across Booking, Expedia, Hotels.com and Agoda. We get a small commission; you don't pay more."
          campaign={`budget-${budget}`}
        />
      </div>

      <ProseBlock>
        <h2>Where to splurge, where to save</h2>
        <p>{content.splurgeVsSave}</p>

        <h2>The honest take</h2>
        <p>{content.closing}</p>

        <p>
          Related: <Link href="/honeymoon-on-a-budget">honeymoon on a budget</Link> ·{' '}
          <Link href="/luxury-honeymoon">luxury honeymoon</Link> ·{' '}
          <Link href="/all-inclusive-honeymoon">all-inclusive honeymoon</Link>
        </p>
      </ProseBlock>

      <FAQSection faqs={faqs} />
    </>
  )
}

// ============================================================================
// 2. MONTH PAGE
// ============================================================================
function MonthPage({ slug, month }: { slug: string; month: string; idx: number }) {
  const content = MONTH_CONTENT[month]
  const monthCap = cap(month)
  const headline = `Honeymoon in ${monthCap}: where to go and where to skip`
  const desc = `Where to honeymoon in ${monthCap} 2026 — the destinations that combine the right weather, the right crowds, and genuine romance, plus the ones to actively avoid.`
  const { article, breadcrumb } = commonSchemas(slug, headline, desc, `Honeymoon in ${monthCap}`)
  const faqs = content?.faqs ?? []

  const allHotels = getAllHotels()
  const destSlugs = content?.whereToGo.map(d => d.destSlug) ?? []
  const topHotels: Hotel[] = []
  destSlugs.forEach(ds => {
    const best = allHotels
      .filter(h => h.destination === ds)
      .sort((a, b) => b.honeymoon_score - a.honeymoon_score)[0]
    if (best) topHotels.push(best)
  })

  if (!content) {
    return (
      <>
        <Schemas schemas={[article, breadcrumb]} />
        <Hero eyebrow="By Month" h1={headline} intro={desc} />
        <ProseBlock><p>Content for this month is being prepared.</p></ProseBlock>
      </>
    )
  }

  const firstDest = destSlugs[0] ?? ''

  return (
    <>
      <Schemas schemas={[article, breadcrumb, hotelItemListSchema(topHotels), faqSchema(faqs)]} />
      <Hero eyebrow="By Month" h1={headline} intro={content.intro} tldr={content.whatsSpecial.split('. ').slice(0, 2).join('. ') + '.'} />

      <section className="max-w-6xl mx-auto px-6 mt-12">
        <SectionDivider label={`Where to go in ${monthCap}`} />
        <h2 className="font-display text-3xl text-zinc-900 mb-8">Top destinations for {monthCap}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.whereToGo.map(d => (
            <DestinationPickCard
              key={d.destSlug}
              slug={d.destSlug}
              displayLabel={prettyDest(d.destSlug)}
              whyHere={d.rationale}
            />
          ))}
        </div>
      </section>

      {topHotels.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 mt-16">
          <SectionDivider label="Hotels at their best" />
          <h2 className="font-display text-3xl text-zinc-900 mb-8">Hotels at their best in {monthCap}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topHotels.map(h => <HotelPickCard key={h.slug} hotel={h} />)}
          </div>
        </section>
      )}

      <div className="max-w-3xl mx-auto px-6">
        <Stay22InlineCTA
          destination={firstDest}
          country={countryForDestination(firstDest, allHotels)}
          headline={`Live prices for ${monthCap} 2026`}
          subline={`Check current rates for honeymoon-grade hotels in ${prettyDest(firstDest)} on the dates you care about.`}
          campaign={`month-${month}`}
        />
      </div>

      <section className="max-w-6xl mx-auto px-6 mt-12">
        <SectionDivider label={`Skip in ${monthCap}`} />
        <h2 className="font-display text-3xl text-zinc-900 mb-8">Where to skip in {monthCap}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {content.whereToSkip.map(d => (
            <div key={d.destSlug} className="border-l-4 border-red-300 bg-red-50/40 rounded-r-xl p-5">
              <h3 className="font-display text-lg text-zinc-900">{prettyDest(d.destSlug)}</h3>
              <p className="text-sm text-zinc-600 mt-2 leading-relaxed">{d.reason}</p>
            </div>
          ))}
        </div>
      </section>

      <ProseBlock>
        <SectionDivider label="What's special" />
        <h2>What&rsquo;s special this month</h2>
        <p>{content.whatsSpecial}</p>

        <h2>The honest take</h2>
        <p>{content.closing}</p>

        <p>
          Related: <Link href="/best-time-to-honeymoon">best time to honeymoon</Link>
        </p>
      </ProseBlock>

      <FAQSection faqs={faqs} />
    </>
  )
}

// ============================================================================
// 3. DURATION PAGE
// ============================================================================
function DurationPage({ slug, days }: { slug: string; days: number }) {
  const content = DURATION_CONTENT[days]
  const headline = `${days}-day honeymoon: where to go and what it looks like`
  const desc = `A ${days}-day honeymoon has its own shape. The destinations that work, three real routings, and the honest math on flights and rest.`
  const { article, breadcrumb } = commonSchemas(slug, headline, desc, `${days}-day honeymoon`)
  const faqs = content?.faqs ?? []

  const allHotels = getAllHotels()

  if (!content) {
    return (
      <>
        <Schemas schemas={[article, breadcrumb]} />
        <Hero eyebrow="By Duration" h1={headline} intro={desc} />
        <ProseBlock><p>Content for this duration is being prepared.</p></ProseBlock>
      </>
    )
  }

  // Pull hotels from routings if they have hotelSlugs
  const routingHotels: Hotel[] = content.routings
    .map(r => r.hotelSlug ? allHotels.find(h => h.slug === r.hotelSlug) : undefined)
    .filter((h): h is Hotel => Boolean(h))

  return (
    <>
      <Schemas schemas={[article, breadcrumb, faqSchema(faqs)]} />
      <Hero eyebrow="By Duration" h1={headline} intro={content.intro} tldr={content.whoFor.split('. ').slice(0, 2).join('. ') + '.'} />

      <ProseBlock>
        <SectionDivider label="Who it's for" />
        <h2>Who this duration is for</h2>
        <p>{content.whoFor}</p>
      </ProseBlock>

      <section className="max-w-6xl mx-auto px-6 mt-16">
        <SectionDivider label="Recommended routings" />
        <h2 className="font-display text-3xl text-zinc-900 mb-8">Three real routings for {days} days</h2>
        <div className="space-y-6">
          {content.routings.map((r, i) => (
            <div key={i} className="border border-zinc-100 rounded-2xl p-7 bg-white hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center font-display text-lg">
                  {i + 1}
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-2xl text-zinc-900 mb-3">{r.title}</h3>
                  <p className="text-zinc-600 leading-relaxed">{r.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {routingHotels.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 mt-16">
          <SectionDivider label="Anchor hotels" />
          <h2 className="font-display text-3xl text-zinc-900 mb-8">The anchor hotels for these routings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {routingHotels.map(h => <HotelPickCard key={h.slug} hotel={h} />)}
          </div>
        </section>
      )}

      <div className="max-w-3xl mx-auto px-6">
        <Stay22InlineCTA
          destination={routingHotels[0]?.destination ?? 'maldives'}
          country={routingHotels[0]?.country ?? ''}
          headline={`Browse ${days}-day honeymoon options`}
          subline="See live prices across the destinations that fit this duration."
          campaign={`duration-${days}`}
        />
      </div>

      <ProseBlock>
        <SectionDivider label="The math" />
        <h2>The honest math</h2>
        <p>{content.theMath}</p>

        <h2>The honest take</h2>
        <p>{content.closing}</p>

        <p>
          Related: <Link href="/how-to-plan-a-honeymoon">how to plan a honeymoon</Link> ·{' '}
          <Link href="/luxury-honeymoon">luxury honeymoon</Link>
        </p>
      </ProseBlock>

      <FAQSection faqs={faqs} />
    </>
  )
}

// ============================================================================
// 4. PERSONA PAGE
// ============================================================================
function PersonaPage({ slug, persona }: { slug: string; persona: string }) {
  const recs = getDestinationsForPersona(persona)
  const label = PERSONA_LABELS[persona]
  const headline = `Honeymoon for ${label.toLowerCase()}: destinations and hotels that actually fit`
  const desc = `Honeymoon ideas tuned for ${label.toLowerCase()} — the destinations and hotels we'd actually book.`
  const { article, breadcrumb } = commonSchemas(slug, headline, desc, `Honeymoon for ${label}`)

  const content = PERSONA_CONTENT[persona]
  const allHotels = getAllHotels()
  const hotels: Hotel[] = content
    ? content.hotelSlugs.map(s => allHotels.find(h => h.slug === s)).filter((h): h is Hotel => Boolean(h))
    : []
  const faqs = content?.faqs ?? []

  if (!content) {
    return (
      <>
        <Schemas schemas={[article, breadcrumb]} />
        <Hero eyebrow="By Style" h1={headline} intro={desc} />
        <ProseBlock><p>Content for this persona is being prepared.</p></ProseBlock>
      </>
    )
  }

  const firstDest = hotels[0]?.destination ?? recs[0]?.slug ?? ''

  return (
    <>
      <Schemas schemas={[article, breadcrumb, hotelItemListSchema(hotels), faqSchema(faqs)]} />
      <Hero eyebrow="By Style" h1={headline} intro={content.intro} tldr={content.angle.split('. ').slice(0, 2).join('. ') + '.'} />

      <ProseBlock>
        <SectionDivider label="The editorial angle" />
        <h2>The editorial angle</h2>
        <p>{content.angle}</p>
      </ProseBlock>

      <section className="max-w-6xl mx-auto px-6 mt-16">
        <SectionDivider label="Your top hotels" />
        <h2 className="font-display text-3xl text-zinc-900 mb-3">The {hotels.length} hotels that fit</h2>
        <p className="text-zinc-500 max-w-3xl mb-8">Picked from our catalogue for the specific traits that matter to {label.toLowerCase()}.</p>
        {hotels.length === 0 ? (
          <p className="text-zinc-500">Catalog data missing for one or more picks.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hotels.map(h => <HotelPickCard key={h.slug} hotel={h} />)}
          </div>
        )}
      </section>

      <section className="max-w-6xl mx-auto px-6 mt-16">
        <SectionDivider label="Destinations that fit" />
        <h2 className="font-display text-3xl text-zinc-900 mb-8">Destination patterns that work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {content.destinationClusters.map((c, i) => (
            <div key={i} className="border border-zinc-100 rounded-2xl p-7 bg-white">
              <h3 className="font-display text-xl text-zinc-900 mb-3">{c.title}</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      {recs.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 mt-16">
          <SectionDivider label="More destinations" />
          <h2 className="font-display text-3xl text-zinc-900 mb-8">More destinations to consider</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recs.slice(0, 6).map(r => (
              <DestinationPickCard
                key={r.slug}
                slug={r.slug}
                displayLabel={r.label}
                whyHere={r.why}
              />
            ))}
          </div>
        </section>
      )}

      <div className="max-w-3xl mx-auto px-6">
        <Stay22InlineCTA
          destination={firstDest}
          country={countryForDestination(firstDest, allHotels)}
          headline={`Live prices for ${label.toLowerCase()}`}
          subline="See current rates across the destinations and properties tuned for this style."
          campaign={`persona-${persona}`}
        />
      </div>

      <ProseBlock>
        <SectionDivider label="Skip these" />
        <h2>What to skip</h2>
        <div className="not-prose border-l-4 border-red-300 bg-red-50/40 rounded-r-xl p-6 my-4">
          <p className="text-zinc-700 leading-relaxed">{content.whatToSkip}</p>
        </div>

        <h2>The honest take</h2>
        <p>{content.closing}</p>

        <p>
          Related: <Link href="/quiz">find my hotel quiz</Link> ·{' '}
          <Link href="/luxury-honeymoon">luxury honeymoon</Link>
        </p>
      </ProseBlock>

      <FAQSection faqs={faqs} />
    </>
  )
}
