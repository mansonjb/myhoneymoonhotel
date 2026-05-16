import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { HOTEL_COMPARISONS } from '@/../data/hotel-comparisons'
import { getHotelComparison } from '@/lib/getHotelComparison'
import { getMessages, type Messages } from '@/i18n/getMessages'
import { buildAlternates, localizedPath } from '@/lib/alternates'
import type { Locale } from '@/i18n/locales'
import type { Hotel } from '@/../types/hotel'

const SITE_URL = 'https://myhoneymoonhotel.com'

function tx(messages: Messages, key: string, fallback: string): string {
  const v = (messages as unknown as Record<string, unknown>)[key]
  return typeof v === 'string' && v.length > 0 ? v : fallback
}

function fmt(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? ''))
}

function priceLabel(h: Hotel): string {
  return `$${h.price_per_night_usd.min.toLocaleString()}–$${h.price_per_night_usd.max.toLocaleString()}`
}

function heroOf(h: Hotel): string {
  const p = h.photos.find(p => p.type === 'hero') ?? h.photos[0]
  return p?.url ?? '/images/hotels/four-seasons-bora-bora/hero.webp'
}

function destLabel(d: string): string {
  return d
    .split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}

type CriterionRow = {
  labelKey: string
  labelDefault: string
  aDetail: string
  bDetail: string
  aWins: boolean | null
}

function buildCriteria(a: Hotel, b: Hotel, m: Messages): CriterionRow[] {
  const yes = tx(m, 'compareHotels.yes', 'Yes')
  const no = tx(m, 'compareHotels.no', 'No')

  const rows: CriterionRow[] = [
    {
      labelKey: 'compareHotels.criterion.score',
      labelDefault: 'Honeymoon Score',
      aDetail: `${a.honeymoon_score}/100`,
      bDetail: `${b.honeymoon_score}/100`,
      aWins: a.honeymoon_score === b.honeymoon_score ? null : a.honeymoon_score > b.honeymoon_score,
    },
    {
      labelKey: 'compareHotels.criterion.price',
      labelDefault: 'Price / night',
      aDetail: priceLabel(a),
      bDetail: priceLabel(b),
      aWins: a.price_per_night_usd.min === b.price_per_night_usd.min ? null : a.price_per_night_usd.min < b.price_per_night_usd.min,
    },
    {
      labelKey: 'compareHotels.criterion.stars',
      labelDefault: 'Stars',
      aDetail: `${a.stars}★`,
      bDetail: `${b.stars}★`,
      aWins: a.stars === b.stars ? null : a.stars > b.stars,
    },
    {
      labelKey: 'compareHotels.criterion.adultsOnly',
      labelDefault: 'Adults-only',
      aDetail: a.adults_only ? yes : no,
      bDetail: b.adults_only ? yes : no,
      aWins: a.adults_only === b.adults_only ? null : a.adults_only,
    },
    {
      labelKey: 'compareHotels.criterion.beach',
      labelDefault: 'Beach access',
      aDetail: a.amenities.some(x => /beach/i.test(x)) ? yes : no,
      bDetail: b.amenities.some(x => /beach/i.test(x)) ? yes : no,
      aWins: null,
    },
    {
      labelKey: 'compareHotels.criterion.spa',
      labelDefault: 'Spa',
      aDetail: a.amenities.some(x => /spa/i.test(x)) ? yes : no,
      bDetail: b.amenities.some(x => /spa/i.test(x)) ? yes : no,
      aWins: null,
    },
    {
      labelKey: 'compareHotels.criterion.pool',
      labelDefault: 'Pool',
      aDetail: a.amenities.some(x => /pool/i.test(x)) ? yes : no,
      bDetail: b.amenities.some(x => /pool/i.test(x)) ? yes : no,
      aWins: null,
    },
    {
      labelKey: 'compareHotels.criterion.roomService',
      labelDefault: 'Room service',
      aDetail: a.amenities.some(x => /room service/i.test(x)) ? yes : no,
      bDetail: b.amenities.some(x => /room service/i.test(x)) ? yes : no,
      aWins: null,
    },
    {
      labelKey: 'compareHotels.criterion.couplesPct',
      labelDefault: 'Couples reviews',
      aDetail: typeof a.couples_review_pct === 'number' ? `${a.couples_review_pct}%` : '—',
      bDetail: typeof b.couples_review_pct === 'number' ? `${b.couples_review_pct}%` : '—',
      aWins:
        typeof a.couples_review_pct === 'number' && typeof b.couples_review_pct === 'number' && a.couples_review_pct !== b.couples_review_pct
          ? a.couples_review_pct > b.couples_review_pct
          : null,
    },
    {
      labelKey: 'compareHotels.criterion.tripadvisor',
      labelDefault: 'TripAdvisor',
      aDetail: typeof a.tripadvisor_rating === 'number' ? `${a.tripadvisor_rating}/10` : '—',
      bDetail: typeof b.tripadvisor_rating === 'number' ? `${b.tripadvisor_rating}/10` : '—',
      aWins:
        typeof a.tripadvisor_rating === 'number' && typeof b.tripadvisor_rating === 'number' && a.tripadvisor_rating !== b.tripadvisor_rating
          ? a.tripadvisor_rating > b.tripadvisor_rating
          : null,
    },
    {
      labelKey: 'compareHotels.criterion.country',
      labelDefault: 'Country',
      aDetail: destLabel(a.country),
      bDetail: destLabel(b.country),
      aWins: null,
    },
    {
      labelKey: 'compareHotels.criterion.destination',
      labelDefault: 'Destination',
      aDetail: destLabel(a.destination),
      bDetail: destLabel(b.destination),
      aWins: null,
    },
  ]

  // Boolean-detail criteria: if one is yes and other is no, mark winner
  for (const r of rows) {
    if (r.aWins !== null) continue
    if (r.aDetail === yes && r.bDetail === no) r.aWins = true
    else if (r.aDetail === no && r.bDetail === yes) r.aWins = false
  }
  return rows
}

function buildPicks(a: Hotel, b: Hotel, m: Messages): { forA: string[]; forB: string[] } {
  const forA: string[] = []
  const forB: string[] = []
  const T = (k: string, fb: string, vars: Record<string, string | number> = {}) => fmt(tx(m, k, fb), vars)

  if (a.honeymoon_score > b.honeymoon_score) {
    forA.push(T('compareHotels.pick.higherScore', '{name} scores higher overall ({score}/100 vs {other}/100) on our honeymoon rubric.', { name: a.name, score: a.honeymoon_score, other: b.honeymoon_score }))
  } else if (b.honeymoon_score > a.honeymoon_score) {
    forB.push(T('compareHotels.pick.higherScore', '{name} scores higher overall ({score}/100 vs {other}/100) on our honeymoon rubric.', { name: b.name, score: b.honeymoon_score, other: a.honeymoon_score }))
  }

  if (a.price_per_night_usd.min < b.price_per_night_usd.min) {
    forA.push(T('compareHotels.pick.cheaper', '{name} starts at {price}/night — easier on the budget.', { name: a.name, price: '$' + a.price_per_night_usd.min.toLocaleString() }))
  } else if (b.price_per_night_usd.min < a.price_per_night_usd.min) {
    forB.push(T('compareHotels.pick.cheaper', '{name} starts at {price}/night — easier on the budget.', { name: b.name, price: '$' + b.price_per_night_usd.min.toLocaleString() }))
  }

  if (a.adults_only && !b.adults_only) forA.push(T('compareHotels.pick.adultsOnly', '{name} is adults-only — no children on property.', { name: a.name }))
  if (b.adults_only && !a.adults_only) forB.push(T('compareHotels.pick.adultsOnly', '{name} is adults-only — no children on property.', { name: b.name }))

  if ((a.score_breakdown.spa ?? 0) > (b.score_breakdown.spa ?? 0)) {
    forA.push(T('compareHotels.pick.spa', '{name} has the stronger spa programme.', { name: a.name }))
  } else if ((b.score_breakdown.spa ?? 0) > (a.score_breakdown.spa ?? 0)) {
    forB.push(T('compareHotels.pick.spa', '{name} has the stronger spa programme.', { name: b.name }))
  }

  if ((a.score_breakdown.beach ?? 0) > (b.score_breakdown.beach ?? 0)) {
    forA.push(T('compareHotels.pick.beach', '{name} wins on the beach.', { name: a.name }))
  } else if ((b.score_breakdown.beach ?? 0) > (a.score_breakdown.beach ?? 0)) {
    forB.push(T('compareHotels.pick.beach', '{name} wins on the beach.', { name: b.name }))
  }

  if ((a.couples_review_pct ?? 0) > (b.couples_review_pct ?? 0)) {
    forA.push(T('compareHotels.pick.couples', '{pct}% of {name} reviews are from couples — the romance signal is strong.', { name: a.name, pct: a.couples_review_pct ?? 0 }))
  } else if ((b.couples_review_pct ?? 0) > (a.couples_review_pct ?? 0)) {
    forB.push(T('compareHotels.pick.couples', '{pct}% of {name} reviews are from couples — the romance signal is strong.', { name: b.name, pct: b.couples_review_pct ?? 0 }))
  }

  // Experience-type wins
  const onlyA = a.experience_types.filter(t => !b.experience_types.includes(t))
  const onlyB = b.experience_types.filter(t => !a.experience_types.includes(t))
  if (onlyA.length) forA.push(T('compareHotels.pick.uniqueExp', '{name} offers {exp} — not available at {other}.', { name: a.name, exp: onlyA[0], other: b.name }))
  if (onlyB.length) forB.push(T('compareHotels.pick.uniqueExp', '{name} offers {exp} — not available at {other}.', { name: b.name, exp: onlyB[0], other: a.name }))

  // Pad to 3 with country/destination flavor
  if (forA.length < 3) forA.push(T('compareHotels.pick.destination', 'Pick {name} if {dest} ({country}) is the trip you really want.', { name: a.name, dest: destLabel(a.destination), country: destLabel(a.country) }))
  if (forB.length < 3) forB.push(T('compareHotels.pick.destination', 'Pick {name} if {dest} ({country}) is the trip you really want.', { name: b.name, dest: destLabel(b.destination), country: destLabel(b.country) }))
  if (forA.length < 3) forA.push(T('compareHotels.pick.stars', '{name} is a {stars}-star property with {ta} TripAdvisor.', { name: a.name, stars: a.stars, ta: a.tripadvisor_rating ?? 'strong' }))
  if (forB.length < 3) forB.push(T('compareHotels.pick.stars', '{name} is a {stars}-star property with {ta} TripAdvisor.', { name: b.name, stars: b.stars, ta: b.tripadvisor_rating ?? 'strong' }))

  return { forA: forA.slice(0, 3), forB: forB.slice(0, 3) }
}

function buildFaqs(a: Hotel, b: Hotel, m: Messages): { q: string; a: string }[] {
  const T = (k: string, fb: string, vars: Record<string, string | number> = {}) => fmt(tx(m, k, fb), vars)
  const cheaper = a.price_per_night_usd.min < b.price_per_night_usd.min ? a : b
  const pricier = cheaper.slug === a.slug ? b : a
  const aoYes = a.adults_only && !b.adults_only ? a : !a.adults_only && b.adults_only ? b : null
  const aoNeither = !a.adults_only && !b.adults_only
  const owA = a.experience_types.includes('overwater-bungalows')
  const owB = b.experience_types.includes('overwater-bungalows')
  const higher = a.honeymoon_score >= b.honeymoon_score ? a : b
  const lower = higher.slug === a.slug ? b : a

  return [
    {
      q: T('compareHotels.faq.priceQ', 'Which is more expensive — {a} or {b}?', { a: a.name, b: b.name }),
      a: T('compareHotels.faq.priceA', '{pricier} is the pricier of the two ({priceP}/night vs {cheaperPrice}/night for {cheaper}).', {
        pricier: pricier.name,
        cheaper: cheaper.name,
        priceP: priceLabel(pricier),
        cheaperPrice: priceLabel(cheaper),
      }),
    },
    {
      q: T('compareHotels.faq.adultsQ', 'Which is adults-only — {a} or {b}?', { a: a.name, b: b.name }),
      a: aoYes
        ? T('compareHotels.faq.adultsOne', '{name} is adults-only; the other is not.', { name: aoYes.name })
        : aoNeither
          ? T('compareHotels.faq.adultsNone', 'Neither property is strictly adults-only, though both attract a predominantly adult clientele.', {})
          : T('compareHotels.faq.adultsBoth', 'Both properties are adults-only.', {}),
    },
    {
      q: T('compareHotels.faq.overwaterQ', 'Does {a} or {b} have overwater bungalows?', { a: a.name, b: b.name }),
      a:
        owA && owB
          ? T('compareHotels.faq.overwaterBoth', 'Both {a} and {b} offer overwater villas.', { a: a.name, b: b.name })
          : owA
            ? T('compareHotels.faq.overwaterOne', '{name} has overwater villas; the other does not.', { name: a.name })
            : owB
              ? T('compareHotels.faq.overwaterOne', '{name} has overwater villas; the other does not.', { name: b.name })
              : T('compareHotels.faq.overwaterNeither', 'Neither property offers overwater villas.', {}),
    },
    {
      q: T('compareHotels.faq.monthQ', 'When is the best month to visit {a} and {b}?', { a: a.name, b: b.name }),
      a: T('compareHotels.faq.monthA', 'For {a} in {destA}, aim for the dry shoulder season; for {b} in {destB}, the same logic applies — check our destination guides for month-by-month detail.', {
        a: a.name,
        b: b.name,
        destA: destLabel(a.destination),
        destB: destLabel(b.destination),
      }),
    },
    {
      q: T('compareHotels.faq.betterQ', 'Is {a} better than {b} for a honeymoon?', { a: a.name, b: b.name }),
      a: T('compareHotels.faq.betterA', 'On our honeymoon rubric {higher} scores {hScore}/100 versus {lower} at {lScore}/100 — but the right pick depends on whether you prioritise {trait}.', {
        higher: higher.name,
        lower: lower.name,
        hScore: higher.honeymoon_score,
        lScore: lower.honeymoon_score,
        trait:
          higher.experience_types[0] && lower.experience_types[0] && higher.experience_types[0] !== lower.experience_types[0]
            ? `${higher.experience_types[0]} (${higher.name}) over ${lower.experience_types[0]} (${lower.name})`
            : 'destination and ambience',
      }),
    },
  ]
}

export async function buildHotelComparisonMetadata(slug: string, locale: Locale): Promise<Metadata> {
  const cmp = getHotelComparison(slug, locale)
  if (!cmp) return { title: 'Comparison not found' }
  const m = getMessages(locale)
  const title = fmt(tx(m, 'compareHotels.metaTitle', '{a} vs {b} — Honeymoon Hotel Comparison'), { a: cmp.a.name, b: cmp.b.name })
  const description = fmt(
    tx(
      m,
      'compareHotels.metaDescription',
      'Is {a} better than {b} for a honeymoon? Score, price, amenities and verdict side-by-side.',
    ),
    { a: cmp.a.name, b: cmp.b.name },
  )
  return {
    title,
    description,
    openGraph: { title, description, type: 'article' },
    alternates: buildAlternates(`/compare/hotels/${slug}`, locale),
  }
}

export async function renderHotelComparisonPage(slug: string, locale: Locale) {
  const cmp = getHotelComparison(slug, locale)
  if (!cmp) notFound()
  const m = getMessages(locale)
  const { a, b } = cmp

  const heroA = heroOf(a)
  const heroB = heroOf(b)
  const criteria = buildCriteria(a, b, m)
  const aWins = criteria.filter(c => c.aWins === true).length
  const bWins = criteria.filter(c => c.aWins === false).length
  const picks = buildPicks(a, b, m)
  const faqs = buildFaqs(a, b, m)

  const verdictText = fmt(
    tx(
      m,
      'compareHotels.verdict',
      '{a} scores {aScore}/100 on our honeymoon rubric; {b} scores {bScore}/100. {winner} edges this head-to-head, but read the criteria below — the right pick depends on what you value most.',
    ),
    {
      a: a.name,
      b: b.name,
      aScore: a.honeymoon_score,
      bScore: b.honeymoon_score,
      winner: a.honeymoon_score === b.honeymoon_score ? tx(m, 'compareHotels.itsATie', "It's a tie") : a.honeymoon_score > b.honeymoon_score ? a.name : b.name,
    },
  )

  const homePath = localizedPath('/', locale)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: `${a.name} vs ${b.name} — Honeymoon Hotel Comparison`,
              description: verdictText,
              author: { '@type': 'Person', name: 'Jean-Baptiste Manson', url: `${SITE_URL}/about` },
              publisher: { '@type': 'Organization', name: 'My Honeymoon Hotel', logo: { '@type': 'ImageObject', url: `${SITE_URL}/icon.png` } },
              datePublished: '2026-05-14',
              dateModified: '2026-05-14',
            },
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: tx(m, 'generic.home', 'Home'), item: `${SITE_URL}${homePath === '/' ? '' : homePath}` },
                { '@type': 'ListItem', position: 2, name: tx(m, 'nav.compare', 'Compare'), item: `${SITE_URL}${localizedPath('/compare', locale)}` },
                { '@type': 'ListItem', position: 3, name: `${a.name} vs ${b.name}`, item: `${SITE_URL}${localizedPath(`/compare/hotels/${slug}`, locale)}` },
              ],
            },
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqs.map(f => ({
                '@type': 'Question',
                name: f.q,
                acceptedAnswer: { '@type': 'Answer', text: f.a },
              })),
            },
            {
              '@context': 'https://schema.org',
              '@type': 'ItemList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: a.name, url: `${SITE_URL}${localizedPath(`/hotels/${a.slug}`, locale)}` },
                { '@type': 'ListItem', position: 2, name: b.name, url: `${SITE_URL}${localizedPath(`/hotels/${b.slug}`, locale)}` },
              ],
            },
          ]),
        }}
      />

      <article className="pb-24">
        {/* HERO */}
        <section className="relative">
          <div className="grid grid-cols-2 h-[60vh] min-h-[440px]">
            <div className="relative overflow-hidden">
              <Image src={heroA} alt={a.name} fill priority className="object-cover" sizes="50vw" />
              <div className="absolute inset-0 bg-gradient-to-br from-rose-900/30 to-black/50" />
              <div className="absolute bottom-10 left-8 sm:left-12 text-white">
                <div className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-200 mb-2">{tx(m, 'compareHotels.optionA', 'Hotel A')}</div>
                <div className="font-display text-3xl sm:text-4xl">{a.name}</div>
                <div className="text-rose-200 text-sm mt-1">{destLabel(a.destination)}</div>
              </div>
            </div>
            <div className="relative overflow-hidden">
              <Image src={heroB} alt={b.name} fill className="object-cover" sizes="50vw" />
              <div className="absolute inset-0 bg-gradient-to-bl from-zinc-900/30 to-black/50" />
              <div className="absolute bottom-10 right-8 sm:right-12 text-white text-right">
                <div className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-200 mb-2">{tx(m, 'compareHotels.optionB', 'Hotel B')}</div>
                <div className="font-display text-3xl sm:text-4xl">{b.name}</div>
                <div className="text-rose-200 text-sm mt-1">{destLabel(b.destination)}</div>
              </div>
            </div>
          </div>

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-rose-500 text-white rounded-full w-20 h-20 flex items-center justify-center shadow-2xl">
            <span className="font-display text-3xl">vs</span>
          </div>

          <nav className="absolute top-6 left-6 flex items-center gap-2 text-white/60 text-xs">
            <Link href={homePath} className="hover:text-white">{tx(m, 'generic.home', 'Home')}</Link>
            <span>/</span>
            <Link href={localizedPath('/compare', locale)} className="hover:text-white">{tx(m, 'nav.compare', 'Compare')}</Link>
            <span>/</span>
            <span className="text-white/70">{a.name} vs {b.name}</span>
          </nav>
        </section>

        <div className="max-w-5xl mx-auto px-6 py-14 space-y-16">
          <section>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-4 text-center">{tx(m, 'compareHotels.kicker', 'Honeymoon Hotel Head-to-Head')}</p>
            <h1 className="font-display text-4xl sm:text-5xl text-zinc-900 text-center mb-5 leading-tight">
              {a.name} vs {b.name}
            </h1>
            <p className="text-center text-zinc-500 text-lg italic mb-10 max-w-2xl mx-auto">
              {fmt(tx(m, 'compareHotels.tagline', 'Two of the world\'s most coveted honeymoon hotels, scored on what actually matters for couples.'), { a: a.name, b: b.name })}
            </p>

            <div className="bg-zinc-50 border border-zinc-100 rounded-3xl p-8 sm:p-10">
              <div className="text-xs font-semibold tracking-widest uppercase text-rose-400 mb-3">{tx(m, 'compareHotels.ourVerdict', 'Our Verdict')}</div>
              <p className="text-zinc-700 text-lg leading-relaxed">{verdictText}</p>
            </div>
          </section>

          <section>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white border-2 border-rose-100 rounded-2xl p-6">
                <div className="text-[10px] font-semibold uppercase tracking-widest text-rose-500 mb-2">{fmt(tx(m, 'compareHotels.pickXFor', 'Pick {name} for...'), { name: a.name })}</div>
                <ul className="space-y-2 mt-3">
                  {picks.forA.map((p, i) => (
                    <li key={i} className="flex gap-2 text-zinc-700 text-sm leading-relaxed">
                      <span className="text-rose-500 shrink-0 mt-1">◆</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white border-2 border-zinc-100 rounded-2xl p-6">
                <div className="text-[10px] font-semibold uppercase tracking-widest text-zinc-500 mb-2">{fmt(tx(m, 'compareHotels.pickXFor', 'Pick {name} for...'), { name: b.name })}</div>
                <ul className="space-y-2 mt-3">
                  {picks.forB.map((p, i) => (
                    <li key={i} className="flex gap-2 text-zinc-700 text-sm leading-relaxed">
                      <span className="text-zinc-600 shrink-0 mt-1">◆</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-2">{tx(m, 'compareHotels.sideBySide', 'Side-by-side')}</p>
                <h2 className="font-display text-3xl text-zinc-900">
                  {fmt(tx(m, 'compareHotels.atAGlance', 'At a glance — {n} criteria'), { n: criteria.length })}
                </h2>
              </div>
              <div className="flex gap-4 text-sm">
                <div className="text-center">
                  <div className="font-display text-2xl text-rose-500">{aWins}</div>
                  <div className="text-xs text-zinc-400">{a.name.split(' ').slice(0, 2).join(' ')} {tx(m, 'compareHotels.wins', 'wins')}</div>
                </div>
                <div className="text-center">
                  <div className="font-display text-2xl text-rose-500">{bWins}</div>
                  <div className="text-xs text-zinc-400">{b.name.split(' ').slice(0, 2).join(' ')} {tx(m, 'compareHotels.wins', 'wins')}</div>
                </div>
              </div>
            </div>

            <div className="border border-zinc-100 rounded-2xl overflow-hidden">
              <div className="grid grid-cols-[1fr_1.5fr_1.5fr] bg-zinc-50 border-b border-zinc-100 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                <div className="px-5 py-3">{tx(m, 'compareHotels.criterion', 'Criterion')}</div>
                <div className="px-5 py-3 border-l border-zinc-100">{a.name}</div>
                <div className="px-5 py-3 border-l border-zinc-100">{b.name}</div>
              </div>
              {criteria.map((c, i) => (
                <div key={i} className="grid grid-cols-[1fr_1.5fr_1.5fr] border-b border-zinc-50 last:border-b-0 hover:bg-zinc-50/40 transition-colors">
                  <div className="px-5 py-4 text-sm font-medium text-zinc-800">{tx(m, c.labelKey, c.labelDefault)}</div>
                  <div className={`px-5 py-4 text-sm leading-relaxed border-l border-zinc-100 ${c.aWins === true ? 'bg-emerald-50/50 text-zinc-800 font-medium' : 'text-zinc-600'}`}>
                    {c.aWins === true && <span className="inline-block text-emerald-600 mr-1.5">✓</span>}
                    {c.aDetail}
                  </div>
                  <div className={`px-5 py-4 text-sm leading-relaxed border-l border-zinc-100 ${c.aWins === false ? 'bg-emerald-50/50 text-zinc-800 font-medium' : 'text-zinc-600'}`}>
                    {c.aWins === false && <span className="inline-block text-emerald-600 mr-1.5">✓</span>}
                    {c.bDetail}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="grid sm:grid-cols-2 gap-6">
            {[a, b].map(h => (
              <Link
                key={h.slug}
                href={localizedPath(`/hotels/${h.slug}`, locale)}
                className="group block border border-zinc-100 rounded-3xl overflow-hidden hover:border-rose-200 transition-colors"
              >
                <div className="relative aspect-[4/3]">
                  <Image src={heroOf(h)} alt={h.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 640px) 100vw, 50vw" />
                </div>
                <div className="p-5">
                  <div className="text-xs text-zinc-400 uppercase tracking-wider mb-1">{destLabel(h.destination)}</div>
                  <h3 className="font-display text-xl text-zinc-900 group-hover:text-rose-600 transition-colors">{h.name}</h3>
                  <div className="flex items-center gap-3 mt-3 text-sm text-zinc-600">
                    <span className="font-medium text-rose-500">{h.honeymoon_score}/100</span>
                    <span className="text-zinc-300">·</span>
                    <span>{priceLabel(h)}/night</span>
                  </div>
                </div>
              </Link>
            ))}
          </section>

          <section>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-2">{tx(m, 'compareHotels.commonQuestions', 'Common questions')}</p>
            <h2 className="font-display text-3xl text-zinc-900 mb-8">{tx(m, 'compareHotels.faq', 'FAQ')}</h2>
            <div className="space-y-4">
              {faqs.map((f, i) => (
                <details key={i} className="group border border-zinc-100 rounded-2xl overflow-hidden">
                  <summary className="cursor-pointer px-6 py-4 flex items-center justify-between font-medium text-zinc-900 hover:bg-zinc-50 transition-colors">
                    {f.q}
                    <span className="text-zinc-400 group-open:rotate-45 transition-transform text-xl leading-none">+</span>
                  </summary>
                  <div className="px-6 pb-5 text-zinc-600 text-sm leading-relaxed border-t border-zinc-50 pt-4">{f.a}</div>
                </details>
              ))}
            </div>
          </section>

          <section className="pt-4 border-t border-zinc-100">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-5">{tx(m, 'compareHotels.stillComparing', 'Still comparing?')}</p>
            <h2 className="font-display text-2xl text-zinc-900 mb-6">{tx(m, 'compareHotels.moreHeadToHeads', 'More hotel head-to-heads')}</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {HOTEL_COMPARISONS.filter(c => c.slug !== slug)
                .slice(0, 6)
                .map(c => (
                  <Link
                    key={c.slug}
                    href={localizedPath(`/compare/hotels/${c.slug}`, locale)}
                    className="group flex items-center justify-between px-5 py-4 border border-zinc-100 rounded-2xl hover:border-rose-200 hover:bg-rose-50 transition-colors"
                  >
                    <span className="text-zinc-900 font-medium text-sm group-hover:text-rose-600">
                      {c.a.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} vs {c.b.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </span>
                    <span className="text-rose-400 group-hover:text-rose-600">→</span>
                  </Link>
                ))}
            </div>
          </section>
        </div>
      </article>
    </>
  )
}
