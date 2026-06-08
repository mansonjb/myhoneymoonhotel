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
import { DESTINATION_META } from '../../../data/destinations'

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
function Shell({
  eyebrow, h1, intro, schemas, children,
}: {
  eyebrow: string
  h1: string
  intro: string
  schemas: object[]
  children: React.ReactNode
}) {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">{eyebrow}</p>
      <h1 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-6 leading-tight">{h1}</h1>
      <p className="text-zinc-500 text-lg leading-relaxed mb-2">{intro}</p>
      <AuthorByline />
      <div className="prose prose-zinc max-w-none prose-headings:font-display prose-headings:text-zinc-900 prose-p:text-zinc-600 prose-p:leading-relaxed prose-a:text-rose-500 prose-a:no-underline hover:prose-a:underline mt-10">
        {children}
      </div>
    </div>
  )
}

function FAQSection({ faqs }: { faqs: { question: string; answer: string }[] }) {
  return (
    <section className="mt-16 max-w-3xl mx-auto px-6">
      <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">FAQ</p>
      <h2 className="font-display text-3xl text-zinc-900 mb-8">Frequently asked questions</h2>
      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <details key={i} className="group border border-zinc-100 rounded-2xl overflow-hidden">
            <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-medium text-zinc-900 text-sm hover:bg-zinc-50 transition-colors list-none">
              <span>{faq.question}</span>
              <svg className="w-4 h-4 text-zinc-400 shrink-0 ml-4 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
            </summary>
            <div className="px-6 pb-6 pt-2">
              <p className="text-zinc-500 text-sm leading-relaxed">{faq.answer}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
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

function HotelCardSimple({ h }: { h: Hotel }) {
  return (
    <div className="border border-zinc-100 rounded-2xl p-5 mb-4 not-prose">
      <div className="flex items-start justify-between gap-4">
        <div>
          <Link href={`/hotels/${h.slug}`} className="font-display text-xl text-zinc-900 hover:underline">{h.name}</Link>
          <p className="text-xs uppercase tracking-wider text-zinc-400 mt-1">
            {prettyDest(h.destination)} · {h.stars}★ · score {h.honeymoon_score}/100
          </p>
        </div>
        <div className="text-right shrink-0">
          <p className="text-rose-500 font-semibold text-sm">from ${h.price_per_night_usd.min}/night</p>
        </div>
      </div>
      {h.content?.verdict && (
        <p className="text-zinc-500 text-sm leading-relaxed mt-3">{h.content.verdict.slice(0, 240)}{h.content.verdict.length > 240 ? '…' : ''}</p>
      )}
    </div>
  )
}

// ============================================================================
// 1. BUDGET PAGE — consumes BUDGET_CONTENT module
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
      <Shell eyebrow="Budget Guide" h1={headline} intro={desc} schemas={[article, breadcrumb]}>
        <p>Content for this budget tier is being prepared.</p>
      </Shell>
    )
  }

  return (
    <>
      <Shell
        eyebrow="Budget Guide"
        h1={headline}
        intro={content.intro}
        schemas={[article, breadcrumb, hotelItemListSchema(hotels), faqSchema(faqs)]}
      >
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

        <h2 className="mt-10">The {hotels.length} hotels that fit this budget</h2>
        <p>Real picks from our catalog where the math — 7 nights + flights + extras — credibly fits inside ${budget.toLocaleString()}.</p>
        <div className="not-prose mt-6">
          {hotels.length === 0 ? (
            <p className="text-zinc-500">Catalog data missing for one or more picks at this tier.</p>
          ) : (
            hotels.map(h => <HotelCardSimple key={h.slug} h={h} />)
          )}
        </div>

        <h2>Where to splurge, where to save</h2>
        <p>{content.splurgeVsSave}</p>

        <h2>The honest take</h2>
        <p>{content.closing}</p>

        <p>
          Related: <Link href="/honeymoon-on-a-budget">honeymoon on a budget</Link> ·{' '}
          <Link href="/luxury-honeymoon">luxury honeymoon</Link> ·{' '}
          <Link href="/all-inclusive-honeymoon">all-inclusive honeymoon</Link>
        </p>
      </Shell>
      <FAQSection faqs={faqs} />
    </>
  )
}

// ============================================================================
// 2. MONTH PAGE — consumes MONTH_CONTENT module
// ============================================================================
function MonthPage({ slug, month }: { slug: string; month: string; idx: number }) {
  const content = MONTH_CONTENT[month]
  const monthCap = cap(month)
  const headline = `Honeymoon in ${monthCap}: where to go and where to skip`
  const desc = `Where to honeymoon in ${monthCap} 2026 — the destinations that combine the right weather, the right crowds, and genuine romance, plus the ones to actively avoid.`
  const { article, breadcrumb } = commonSchemas(slug, headline, desc, `Honeymoon in ${monthCap}`)
  const faqs = content?.faqs ?? []

  // Collect hotels for schema ItemList
  const allHotels = getAllHotels()
  const destSlugs = content?.whereToGo.map(d => d.destSlug) ?? []
  const topHotels: Hotel[] = allHotels.filter(h => destSlugs.includes(h.destination)).slice(0, 6)

  if (!content) {
    return (
      <Shell eyebrow="By Month" h1={headline} intro={desc} schemas={[article, breadcrumb]}>
        <p>Content for this month is being prepared.</p>
      </Shell>
    )
  }

  return (
    <>
      <Shell
        eyebrow="By Month"
        h1={headline}
        intro={content.intro}
        schemas={[article, breadcrumb, hotelItemListSchema(topHotels), faqSchema(faqs)]}
      >
        <h2>Where to go in {monthCap}</h2>
        <ul>
          {content.whereToGo.map(d => (
            <li key={d.destSlug}>
              {DESTINATION_META[d.destSlug] ? (
                <Link href={`/destinations/${d.destSlug}`}>{prettyDest(d.destSlug)}</Link>
              ) : (
                <strong>{prettyDest(d.destSlug)}</strong>
              )}
              {' '}— {d.rationale}
            </li>
          ))}
        </ul>

        <h2>Where to skip in {monthCap}</h2>
        <ul>
          {content.whereToSkip.map(d => (
            <li key={d.destSlug}>
              <strong>{prettyDest(d.destSlug)}</strong> — {d.reason}
            </li>
          ))}
        </ul>

        <h2>What&rsquo;s special this month</h2>
        <p>{content.whatsSpecial}</p>

        <h2>The honest take</h2>
        <p>{content.closing}</p>

        <p>
          Related: <Link href="/best-time-to-honeymoon">best time to honeymoon</Link>
        </p>
      </Shell>
      <FAQSection faqs={faqs} />
    </>
  )
}

// ============================================================================
// 3. DURATION PAGE — consumes DURATION_CONTENT module
// ============================================================================
function DurationPage({ slug, days }: { slug: string; days: number }) {
  const content = DURATION_CONTENT[days]
  const headline = `${days}-day honeymoon: where to go and what it looks like`
  const desc = `A ${days}-day honeymoon has its own shape. The destinations that work, three real routings, and the honest math on flights and rest.`
  const { article, breadcrumb } = commonSchemas(slug, headline, desc, `${days}-day honeymoon`)
  const faqs = content?.faqs ?? []

  if (!content) {
    return (
      <Shell eyebrow="By Duration" h1={headline} intro={desc} schemas={[article, breadcrumb]}>
        <p>Content for this duration is being prepared.</p>
      </Shell>
    )
  }

  return (
    <>
      <Shell
        eyebrow="By Duration"
        h1={headline}
        intro={content.intro}
        schemas={[article, breadcrumb, faqSchema(faqs)]}
      >
        <h2>Who this duration is for</h2>
        <p>{content.whoFor}</p>

        <h2>Three real routings for {days} days</h2>
        {content.routings.map((r, i) => (
          <div key={i} className="mb-6">
            <h3 className="font-display text-xl text-zinc-900 mt-6">{r.title}</h3>
            <p>{r.body}</p>
          </div>
        ))}

        <h2>The math</h2>
        <p>{content.theMath}</p>

        <h2>The honest take</h2>
        <p>{content.closing}</p>

        <p>
          Related: <Link href="/how-to-plan-a-honeymoon">how to plan a honeymoon</Link> ·{' '}
          <Link href="/luxury-honeymoon">luxury honeymoon</Link>
        </p>
      </Shell>
      <FAQSection faqs={faqs} />
    </>
  )
}

// ============================================================================
// 4. PERSONA PAGE — unchanged (covered by previous editorial)
// ============================================================================
function PersonaPage({ slug, persona }: { slug: string; persona: string }) {
  const recs = getDestinationsForPersona(persona)
  const label = PERSONA_LABELS[persona]
  const headline = `Honeymoon for ${label.toLowerCase()}: destinations and hotels that actually fit`
  const desc = `Honeymoon ideas tuned for ${label.toLowerCase()} — the destinations and hotels we'd actually book.`
  const { article, breadcrumb } = commonSchemas(slug, headline, desc, `Honeymoon for ${label}`)

  const intro: Record<string, string> = {
    foodies: 'A foodie honeymoon is not a tasting menu every night — it’s a destination where the everyday food culture is the romance. The five regions below qualify; everywhere else you’re importing the food onto the honeymoon, which never quite works.',
    'adventure-seekers': 'Adventure honeymoons get a bad name from the generic version (Costa Rica zip-line + spa). The good version pairs a real wilderness with a single extraordinary lodge as base. These five do it.',
    introverts: 'Honeymoons can be exhausting if the destination is built for socializing. The five places below let you genuinely disappear — private villas, low guest counts, no scenes to be seen in.',
    'second-marriage': 'A second-marriage honeymoon doesn’t need to repeat the first one’s mistakes. The five destinations below reward couples who know what they actually like.',
    'over-40': 'The honeymoons designed for couples in their twenties don’t work as well in your forties. The five below are the ones we’d book for adult couples who want quiet, refined, no club music after 10pm.',
  }

  const faqs = [
    { question: `What makes a destination good for ${label.toLowerCase()}?`, answer: `The five above share specific traits: ${persona === 'foodies' ? 'a deep everyday food culture, walkable markets, and hotels with kitchens worth eating in.' : persona === 'adventure-seekers' ? 'genuine wilderness paired with a single base lodge of real quality.' : persona === 'introverts' ? 'low guest counts, private accommodations, and no expectation of socializing.' : persona === 'second-marriage' ? 'confident, design-led properties with adult pacing and no apology for being expensive.' : 'no club music after 10pm, real spa programs, and the assumption that you’d rather read than party.'}` },
    { question: 'Should I look anywhere else?', answer: 'The list is intentionally tight. Adding more would dilute the recommendation. If none of these five resonates, the issue is usually that one of the partners wants a different style of honeymoon — worth resolving before booking.' },
    { question: 'What about the hotels?', answer: 'Each destination links to its full guide where the top properties are scored. We avoided listing specific hotels here because the right one depends on dates and budget — but the destination page does the property work properly.' },
    { question: 'Is this list season-specific?', answer: 'No — these are persona fits, not seasonal fits. Cross-reference with the destination’s month-by-month table once you have travel dates.' },
  ]

  return (
    <>
      <Shell
        eyebrow="By Style"
        h1={headline}
        intro={intro[persona]}
        schemas={[article, breadcrumb, faqSchema(faqs)]}
      >
        <h2>The five destinations that fit</h2>
        <ul>
          {recs.map(r => (
            <li key={r.slug}>
              <Link href={`/destinations/${r.slug}`}>{r.label}</Link> — {r.why}
            </li>
          ))}
        </ul>

        <h2>How to pick between them</h2>
        <p>
          Start with flight time. After that, the question is usually one of pacing — the slower destinations
          (Tuscany, Provence, Bhutan, the Cotswolds) reward couples who genuinely want to sit still; the more active
          ones (Patagonia, Iceland, Kenya, New Zealand) reward couples whose idea of romance involves movement.
        </p>

        <h2>The honest take</h2>
        <p>
          Persona honeymoons work because they’re an editing tool. Most honeymoons fail not on the hotel choice but
          on a mismatch between the destination’s pace and the couple’s actual habits. The five above are the ones
          we’d book.
        </p>

        <p>
          Related: <Link href="/quiz">find my hotel quiz</Link> ·{' '}
          <Link href="/luxury-honeymoon">luxury honeymoon</Link>
        </p>
      </Shell>
      <FAQSection faqs={faqs} />
    </>
  )
}
