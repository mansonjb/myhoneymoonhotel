import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { buildAlternates } from '@/lib/alternates'
import AuthorByline from '@/components/AuthorByline'
import { AUTHOR } from '@/data/author'
import {
  getHotelsUnderBudget,
  getDestinationsForMonth,
  getDestinationsForDuration,
  getDestinationsForPersona,
  prettyDest,
  ESTIMATED_FLIGHTS_USD,
  ESTIMATED_EXTRAS_USD,
  ALL_PERSONAS,
} from '@/lib/longtail'
import type { Hotel } from '../../../types/hotel'
import { getAllHotels } from '@/lib/hotels'

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
      title = `Honeymoon in ${cap(parsed.month)}: The 8 Best Destinations`
      description = `Where to honeymoon in ${cap(parsed.month)} — the destinations with the strongest combination of weather, value and romance.`
      break
    case 'duration':
      title = `${parsed.days}-Day Honeymoon: Where to Go and What It Looks Like`
      description = `The honest take on a ${parsed.days}-day honeymoon — which destinations work, the itinerary shape, and when to consider it.`
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
      dateModified: '2026-06-07',
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
// 1. BUDGET PAGE
// ============================================================================
function BudgetPage({ slug, budget }: { slug: string; budget: number }) {
  const allMatching = getHotelsUnderBudget(budget)
  const hotels = allMatching.slice(0, 8)
  const headline = `Honeymoon under $${budget.toLocaleString()}: real options for 2026`
  const desc = `The math, the hotels, the destinations where a 7-night honeymoon — flights and extras included — fits inside $${budget.toLocaleString()}.`
  const { article, breadcrumb } = commonSchemas(slug, headline, desc, `Honeymoon under $${budget.toLocaleString()}`)

  // Compute destination clusters
  const destCounts: Record<string, number> = {}
  for (const h of allMatching) destCounts[h.destination] = (destCounts[h.destination] ?? 0) + 1
  const destinationClusters = Object.entries(destCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 4)
    .map(([slug, count]) => ({ slug, count }))

  const stayBudget = budget - ESTIMATED_FLIGHTS_USD - ESTIMATED_EXTRAS_USD
  const perNight = Math.floor(stayBudget / 7)

  const faqs = [
    { question: `What does $${budget.toLocaleString()} actually buy you for a honeymoon?`, answer: `Working back from $${budget.toLocaleString()}: assume $${ESTIMATED_FLIGHTS_USD.toLocaleString()} for two long-haul economy flights and $${ESTIMATED_EXTRAS_USD.toLocaleString()} for transfers, dinners and a Champagne or two. That leaves roughly $${stayBudget.toLocaleString()} for 7 nights — about $${perNight}/night. The hotels listed here all fit that math at their entry rate.` },
    { question: 'Is the flight estimate realistic?', answer: 'For most US/Europe couples flying economy to a sun destination outside Christmas / New Year, $1,500 for two return tickets is a sensible average. Long-haul to French Polynesia or the Maldives in peak season will exceed this; Caribbean from the US East Coast easily beats it.' },
    { question: 'What if I want a shorter honeymoon at a better hotel?', answer: `Cut to 5 nights and the per-night ceiling becomes ~$${Math.floor(stayBudget / 5)} — which unlocks a meaningfully better property tier. For most couples 5 nights at a $1,000/night hotel beats 7 nights at $500/night.` },
    { question: 'Should I go all-inclusive at this budget?', answer: 'Often yes. All-inclusive removes the dinner-cost anxiety that quietly destroys mid-budget honeymoons — and the Caribbean / Mexico AI inventory at this price point is genuinely strong. See our all-inclusive honeymoon guide for the picks.' },
  ]

  return (
    <>
      <Shell
        eyebrow="Budget Guide"
        h1={headline}
        intro={`Most "honeymoon under $${budget.toLocaleString()}" articles dodge the math. We don't. Assume $${ESTIMATED_FLIGHTS_USD.toLocaleString()} for two return flights and $${ESTIMATED_EXTRAS_USD.toLocaleString()} for transfers, dinners and the inevitable extra Champagne. That leaves $${stayBudget.toLocaleString()} for 7 nights — and these are the hotels and destinations where that's enough.`}
        schemas={[
          article,
          breadcrumb,
          hotelItemListSchema(hotels),
          faqSchema(faqs),
        ]}
      >
        <h2>The 8 hotels that actually fit</h2>
        <p>
          Filtered from our catalog of 800+ honeymoon properties: 5-star or close, scored on our 9-criteria romance index,
          and priced so a 7-night stay leaves room for flights and extras under your ${budget.toLocaleString()} cap.
        </p>
        <div className="not-prose mt-6">
          {hotels.length === 0 ? (
            <p className="text-zinc-500">No properties in our current catalog fit a 7-night stay at this budget. See <Link href="/honeymoon-on-a-budget" className="text-rose-500 hover:underline">honeymoon on a budget</Link> for more options, or step up to the next tier.</p>
          ) : (
            hotels.map(h => <HotelCardSimple key={h.slug} h={h} />)
          )}
        </div>

        <h2>The 4 destinations that work at this budget</h2>
        <p>Where the math repeatedly comes out right — the regions with the deepest sub-budget inventory.</p>
        <ul>
          {destinationClusters.map(d => (
            <li key={d.slug}>
              <Link href={`/destinations/${d.slug}`}>{prettyDest(d.slug)}</Link> — {d.count} properties in our catalog under your nightly cap.
            </li>
          ))}
        </ul>

        <h2>The honest take</h2>
        <p>
          A ${budget.toLocaleString()} honeymoon budget is generous when paired with editing. Pick one destination instead
          of two, fly economy, skip the upgraded villa for the entry suite at a better hotel — and you end up with a
          better honeymoon than couples who blow ${(budget * 1.5).toLocaleString()} chasing every social-media-famous
          property.
        </p>

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
// 2. MONTH PAGE
// ============================================================================
function MonthPage({ slug, month, idx }: { slug: string; month: string; idx: number }) {
  const dests = getDestinationsForMonth(idx).slice(0, 8)
  const monthCap = cap(month)
  const headline = `Honeymoon in ${monthCap}: the 8 best destinations`
  const desc = `Where to honeymoon in ${monthCap} 2026 — the destinations that combine the right weather, the right crowds, and genuine romance.`
  const { article, breadcrumb } = commonSchemas(slug, headline, desc, `Honeymoon in ${monthCap}`)

  // Pull top hotels from those destinations
  const destSlugs = dests.map(d => d.slug)
  const allHotels = getAllHotels()
  const topHotels: Hotel[] = allHotels
    .filter(h => destSlugs.includes(h.destination))
    .slice(0, 6)

  const faqs = [
    { question: `Is ${monthCap} a good month to honeymoon?`, answer: dests.length >= 6 ? `Yes — ${monthCap} is a strong honeymoon month with many destinations at or near their peak. ${dests.slice(0, 3).map(d => prettyDest(d.slug)).join(', ')} are all especially good.` : `${monthCap} is a transitional month for many honeymoon destinations. The list above is filtered to the ones we'd still actively recommend.` },
    { question: `What's the cheapest honeymoon destination in ${monthCap}?`, answer: 'Shoulder-season pricing varies by region; the destinations above flag their relative price tier. The biggest savings usually come from going one month either side of peak — and the destinations that work in those months are what this list captures.' },
    { question: `Should I worry about hurricanes / monsoons in ${monthCap}?`, answer: 'The list filters out destinations whose own data flags severe weather in this month. If a destination you love isn\'t here, that\'s usually why — check that destination\'s month-by-month table on its page for the specifics.' },
    { question: `What's the single best ${monthCap} pick?`, answer: dests[0] ? `${prettyDest(dests[0].slug)} — ${dests[0].meta.months[idx]?.verdict ?? 'peak conditions'}. See the full destination guide for hotels.` : 'Pick by region — the list is sorted strongest-first.' },
  ]

  return (
    <>
      <Shell
        eyebrow="By Month"
        h1={headline}
        intro={`A ${monthCap} honeymoon rewards picking the right destination more than any other planning decision. The list below is filtered from 100+ honeymoon destinations to the ones that score 4 or 5 out of 5 specifically for this month — weather, crowds, value, and the verdict from our destination data.`}
        schemas={[
          article,
          breadcrumb,
          hotelItemListSchema(topHotels),
          faqSchema(faqs),
        ]}
      >
        <h2>Where to go in {monthCap}</h2>
        <ul>
          {dests.map(d => (
            <li key={d.slug}>
              <Link href={`/destinations/${d.slug}`}>{prettyDest(d.slug)}</Link> — {d.meta.months[idx]?.verdict ?? d.meta.bestTime}.
            </li>
          ))}
        </ul>

        <h2>The top 6 hotels in those destinations</h2>
        <div className="not-prose mt-4">
          {topHotels.map(h => <HotelCardSimple key={h.slug} h={h} />)}
        </div>

        <h2>Why {monthCap}</h2>
        <p>
          The destinations above share a calendar window: dry season locally, prices below their absolute peak,
          crowds light enough that a sunset terrace doesn’t require a 6pm reservation. None of these things show up
          on a generic &ldquo;best honeymoon month&rdquo; chart — they come from each destination’s own twelve-month
          rhythm.
        </p>

        <h2>What to avoid in {monthCap}</h2>
        <p>
          The destinations that aren&rsquo;t on this list are off-list for a reason — usually monsoon, hurricane, off-season
          closure, or a price/crowd combination that makes the honeymoon worse without making it cheaper enough. The
          honest move is to take the list as a hard filter.
        </p>

        <p>
          Related: <Link href="/best-time-to-honeymoon">best time to honeymoon</Link>
        </p>
      </Shell>
      <FAQSection faqs={faqs} />
    </>
  )
}

// ============================================================================
// 3. DURATION PAGE
// ============================================================================
function DurationPage({ slug, days }: { slug: string; days: number }) {
  const recs = getDestinationsForDuration(days)
  const headline = `${days}-day honeymoon: where to go and what it looks like`
  const desc = `A ${days}-day honeymoon has its own shape. The destinations that work, the itinerary, and when to consider it.`
  const { article, breadcrumb } = commonSchemas(slug, headline, desc, `${days}-day honeymoon`)

  const editorial: Record<number, string> = {
    3: 'A 3-day honeymoon is a mini-moon. It only works as a single-destination European city break — Venice, Amalfi, Lake Como, Provence. The math is harsh: lose a half-day each side to flights, you have two real days. Do not split locations. Pick one perfect hotel.',
    5: 'Five days is the Caribbean short. Direct flight from the East Coast, four full days at one resort, one day for travel. The destinations that work are the ones with negligible jetlag and big enough single-resort experiences that you don’t need to leave: Turks & Caicos, St. Lucia, Riviera Maya. Europeans: Santorini.',
    7: 'Seven nights is the honeymoon sweet spot. Long enough to slow down, short enough not to need a second stop. The Maldives invented this rhythm; Bora Bora, Bali, Fiji and Seychelles all work the same shape — fly in Saturday, leave Saturday, six full days at the resort.',
    10: 'Ten days is the two-stop honeymoon. Five-and-five is the rhythm: a contrast pair (bush + beach, culture + coast, two islands). Long-haul becomes worth it. Bali + Komodo, South Africa + Mauritius, Kenya + Zanzibar, Japan across three cities. Editing matters — don’t try for three stops.',
    14: 'Fourteen days is the ultimate honeymoon. You can fly to the Pacific. You can do safari and beach properly. You can drive Argentina + Chile or do Tahiti + Moorea + Bora Bora. The risk is not getting enough rest — design at least one block of 4+ nights in a single place.',
  }

  const itinerary: Record<number, { title: string; items: string[] }> = {
    3: {
      title: 'Sample 3-day mini-moon itinerary (Venice)',
      items: [
        'Day 1 — Arrive Marco Polo, water taxi to Aman Venice, lunch at Quadri, sunset Aperol on the terrace.',
        'Day 2 — Private gondola at dawn, walk Cannaregio, lunch at Osteria alle Testiere, Murano in the afternoon, dinner at Antiche Carampane.',
        'Day 3 — Late breakfast, Peggy Guggenheim before lunch, water taxi back to MXP.',
      ],
    },
    5: {
      title: 'Sample 5-day itinerary (St. Lucia)',
      items: [
        'Day 1 — Arrive UVF, transfer to Sugar Beach, sunset rum on the beach.',
        'Day 2 — Sulphur Springs spa morning, hike Petit Piton afternoon, beachfront dinner.',
        'Day 3 — Catamaran day along the coast, snorkel at Anse Cochon, return for sunset.',
        'Day 4 — Couples spa morning, lunch at Boucan, drive to Marigot for dinner.',
        'Day 5 — Late breakfast, transfer to airport.',
      ],
    },
    7: {
      title: 'Sample 7-night itinerary (Maldives)',
      items: [
        'Day 1 — Arrive Malé, seaplane to resort, sunset Champagne on the deck.',
        'Day 2 — Sleep in, snorkel from villa, late lunch, sandbank sunset.',
        'Day 3 — Manta / whale shark excursion morning, spa afternoon.',
        'Day 4 — Sandbank breakfast, in-villa lunch, sunset dolphin cruise.',
        'Day 5 — Diving or kayak, reef-edge swim, beach dinner.',
        'Day 6 — Spa day, in-villa pool, private dinner on the beach.',
        'Day 7 — Slow morning, last reef swim, seaplane out.',
      ],
    },
    10: {
      title: 'Sample 10-day itinerary (Bali + Komodo)',
      items: [
        'Day 1-2 — Ubud: Capella tents, rice-field walks, Locavore dinner.',
        'Day 3-5 — Uluwatu: Bulgari, surf-and-spa, cliff dinner.',
        'Day 6 — Fly Denpasar → Labuan Bajo.',
        'Day 7-9 — Komodo liveaboard or Ayana Komodo: Padar hike, Pink Beach, manta dive.',
        'Day 10 — Fly home via Bali.',
      ],
    },
    14: {
      title: 'Sample 14-day itinerary (French Polynesia)',
      items: [
        'Day 1 — Arrive Papeete, overnight at Hilton.',
        'Day 2-6 — Moorea: Hilton or Sofitel, lagoon kayak, Belvedere viewpoint, dolphin swim.',
        'Day 7-13 — Bora Bora: Four Seasons or St. Regis. Overwater villa, snorkel safari, motu picnic.',
        'Day 14 — Return Papeete, evening flight home.',
      ],
    },
  }

  const faqs = [
    { question: `Is ${days} days enough for a honeymoon?`, answer: days <= 5 ? `It depends what shape you want. ${days} days is enough for the right destination — one hotel, one country, no transit drama. It is not enough for a multi-stop trip or for long-haul beach destinations.` : `Yes — ${days} days is comfortable. The risk at this length is over-packing the schedule; build in real downtime.` },
    { question: 'What’s the right hotel split for this duration?', answer: days <= 5 ? 'One hotel. Always. Switching properties on a short honeymoon ruins the rest you came for.' : days === 7 ? 'One hotel for most destinations. Two only if the contrast is the point (Bali = Ubud + beach).' : 'Two hotels minimum. Three only if travel time between them is under 2 hours.' },
    { question: 'When does this duration make sense?', answer: days <= 5 ? 'When time off is tight, when one of you is changing jobs, or when you want to honeymoon now and travel longer later. Mini-moons are not lesser honeymoons — they’re a different shape.' : days >= 10 ? 'When you’re going long-haul (Pacific, Africa, South America). Under 10 days, the flights eat too much of the trip.' : '7 days is the universal default. It’s the duration most honeymoon products are designed for.' },
    { question: 'How much budget should I allocate?', answer: `Use roughly $400-1,200 per night for the hotel (depending on tier), plus $1,500 in flights and $1,000 in extras. For ${days} nights at the mid tier, that's roughly $${(700 * days + 2500).toLocaleString()} per couple all-in.` },
  ]

  return (
    <>
      <Shell
        eyebrow="By Duration"
        h1={headline}
        intro={editorial[days] ?? `A ${days}-day honeymoon.`}
        schemas={[
          article,
          breadcrumb,
          faqSchema(faqs),
        ]}
      >
        <h2>Where to go for {days} days</h2>
        <ul>
          {recs.map(r => (
            <li key={r.slug}>
              <Link href={`/destinations/${r.slug}`}>{r.label}</Link> — {r.why}
            </li>
          ))}
        </ul>

        <h2>{itinerary[days]?.title}</h2>
        <ul>
          {itinerary[days]?.items.map((it, i) => <li key={i}>{it}</li>)}
        </ul>

        <h2>When to consider {days} days</h2>
        <p>{editorial[days]}</p>

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
// 4. PERSONA PAGE
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
