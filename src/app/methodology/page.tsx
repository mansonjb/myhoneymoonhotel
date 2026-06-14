import type { Metadata } from 'next'
import Link from 'next/link'
import { buildAlternates } from '@/lib/alternates'
import { AUTHOR } from '@/data/author'
import { getAllHotels, getAllDestinations } from '@/lib/hotels'

const SITE = 'https://myhoneymoonhotel.com'
const PUBLISHED = '2026-01-15'
const MODIFIED = '2026-06-15'

export const metadata: Metadata = {
  title: 'Methodology — How We Score Honeymoon Hotels',
  description:
    'The public, criteria-by-criteria methodology behind every Honeymoon Score on MyHoneymoonHotel.com. Nine weighted criteria, transparent sources, zero paid placement.',
  alternates: buildAlternates('/methodology'),
  other: {
    citation_author: AUTHOR.name,
    citation_publication_date: PUBLISHED,
    citation_title: 'How We Score Honeymoon Hotels: The Public Methodology',
  },
  openGraph: {
    title: 'How we score honeymoon hotels: the public methodology',
    description:
      'Nine weighted criteria, four data sources, quarterly score audits, never paid placement. The full standards behind every Honeymoon Score.',
    url: `${SITE}/methodology`,
    type: 'article',
    siteName: 'My Honeymoon Hotel',
  },
}

const CRITERIA: { name: string; weight: number; body: string }[] = [
  {
    name: 'Adults-Only Focus',
    weight: 25,
    body:
      'Full property restriction to adults. Adults-only floors, adult-only zones, "quiet wings," or 16-plus dining rooms do not count. Either the entire property is adults-only and scores 25, or it scores zero on this axis. We weight this highest because it is the single signal honeymooners regret most after the fact.',
  },
  {
    name: 'Couples Review Share',
    weight: 20,
    body:
      'Pulled from the TripAdvisor traveler-type breakdown and cross-referenced with Booking.com Guest Reviews aggregations. Above 75 percent couples gets full marks. We use this rather than aggregate rating because a 9.4 average from a property where 60 percent of guests are families tells you something very different from a 9.0 average where 85 percent are couples.',
  },
  {
    name: 'Spa Quality',
    weight: 15,
    body:
      'Full-service spa with couples treatments, in-room ritual options, and reputable therapists. Day-spa kiosks do not count. We look for at least one signature couples experience (Watsu, hammam, four-hands) and confirm the menu against the property direct.',
  },
  {
    name: 'Awards and Recognition',
    weight: 15,
    body:
      'Conde Nast Gold List, Travel and Leisure World\'s Best, Michelin keys, Relais and Chateaux membership, and TripAdvisor Travellers\' Choice. We verify each award against the official list every year. Self-claimed "award-winning" copy on hotel websites is ignored.',
  },
  {
    name: 'Pool',
    weight: 10,
    body:
      'On-property pool. Private plunge pools score higher than shared-deck pools. Heated infinity edges and adult-only pool zones add to the signal.',
  },
  {
    name: 'Beach',
    weight: 10,
    body:
      'Direct beachfront or a contracted private beach club within a 10-minute transfer. "Near the beach," "beach access via shuttle every 90 minutes," and city-views-with-a-public-beach-down-the-road do not count.',
  },
  {
    name: 'Stars',
    weight: 5,
    body:
      'Official 4 or 5 star rating where regulators publish ratings. Where no public regulator exists, we use a tier assessment based on operator, room size, service ratios, and price band.',
  },
  {
    name: 'Room Service',
    weight: 5,
    body:
      'In-room dining available, ideally 24h. We treat this as a honeymoon requirement: at least one breakfast in bed and one late-night meal in-room are part of the experience for most couples we hear from.',
  },
  {
    name: 'Luxury Tier',
    weight: 5,
    body:
      'Operator and brand tier — Aman, Bulgari, Cheval Blanc, Four Seasons, Soneva, Rosewood, Six Senses, Mandarin Oriental, Belmond, and equivalent independents. Brand alone never carries a score; this axis simply prevents two otherwise-identical properties from tying when one is meaningfully more rarefied.',
  },
]

const TIERS: { range: string; label: string; body: string }[] = [
  { range: '90 to 100', label: 'World-top', body: 'A defining honeymoon property. We would book it for our own.' },
  { range: '80 to 89', label: 'Excellent honeymoon hotel', body: 'No reservations. Book with confidence.' },
  { range: '70 to 79', label: 'Very good', body: 'Worth booking with awareness of one or two trade-offs we flag on the page.' },
  { range: '60 to 69', label: 'Good for the right couple', body: 'Specific use cases only — second-honeymoon repeats, all-inclusive seekers, particular destinations.' },
  { range: 'below 60', label: 'Not listed', body: 'Does not make the catalog. Most hotels we audit fall here.' },
]

const UPDATES: { date: string; note: string }[] = [
  { date: '2026-05', note: 'Added explicit weight for Awards (15%). Previously folded into Stars. Re-scored 220 hotels.' },
  { date: '2026-04', note: 'Removed synthetic AggregateRating from hotel-page schema. We now only emit ratings sourced from third-party datasets.' },
  { date: '2026-03', note: 'Tightened Adults-Only definition to exclude "adults-only floors." 41 properties dropped 25 points.' },
  { date: '2026-02', note: 'Couples Review Share now pulls from Booking.com Guest Reviews in addition to TripAdvisor.' },
  { date: '2026-01', note: 'Public launch of the methodology document. First quarterly audit cycle starts.' },
]

const FAQS: { q: string; a: string }[] = [
  {
    q: 'Do you take money from hotels to be listed or to score higher?',
    a: 'No. We earn affiliate commission via Stay22 when a reader books through our links, at no extra cost to the reader. Commission is tracked but never influences scores, and hotels cannot pay to be added.',
  },
  {
    q: 'How often do scores change?',
    a: 'Quarterly. We re-run the scoring on every property each quarter based on TripAdvisor delta, reader feedback, fresh on-ground notes, and any new award eligibility.',
  },
  {
    q: 'Why is a hotel with a 9.5 TripAdvisor average not 95 on your scale?',
    a: 'Because our scale is honeymoon-specific. A 9.5 average from a family resort is honeymoon-irrelevant. We weight couples share, adults-only, and romance signals far above general satisfaction.',
  },
  {
    q: 'How can a hotel challenge a score?',
    a: 'Email Pierre at contact@myhoneymoonhotel.com with the specific axis you believe is mis-scored and any documentation (couples-review screenshots, updated award status, refurbished spa menu). We respond within 10 business days.',
  },
]

export default function MethodologyPage() {
  const hotelCount = getAllHotels().length
  const destCount = getAllDestinations().length

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How we score honeymoon hotels: the public methodology',
    description:
      'The full criteria-by-criteria methodology behind every Honeymoon Score on MyHoneymoonHotel.com.',
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    author: {
      '@type': 'Person',
      name: AUTHOR.name,
      jobTitle: AUTHOR.role,
      url: AUTHOR.url,
      description: AUTHOR.bio,
    },
    publisher: {
      '@type': 'Organization',
      name: 'My Honeymoon Hotel',
      url: SITE,
      logo: { '@type': 'ImageObject', url: `${SITE}/icon.png` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE}/methodology` },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
      { '@type': 'ListItem', position: 2, name: 'About', item: `${SITE}/about` },
      { '@type': 'ListItem', position: 3, name: 'Methodology', item: `${SITE}/methodology` },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <nav className="text-xs text-zinc-400 mb-6">
        <Link href="/" className="hover:text-zinc-900">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/about" className="hover:text-zinc-900">About</Link>
        <span className="mx-2">/</span>
        <span className="text-zinc-600">Methodology</span>
      </nav>

      <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">Methodology</p>
      <h1 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-6 leading-tight">
        How we score honeymoon hotels: the public methodology.
      </h1>

      {/* Byline */}
      <section className="my-8 p-5 rounded-2xl bg-white border border-rose-100 shadow-sm">
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 shrink-0 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 text-lg font-semibold">
            {AUTHOR.avatarInitials}
          </div>
          <div className="text-sm text-zinc-700 leading-relaxed">
            <div className="font-semibold text-zinc-900 text-base">{AUTHOR.name}</div>
            <div className="text-zinc-500 text-xs mb-2">{AUTHOR.role} · {AUTHOR.credentials}</div>
            <div className="text-xs text-zinc-400">
              Published {PUBLISHED} · Last updated {MODIFIED}
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="my-10">
        <p className="text-zinc-700 leading-relaxed text-[15px] mb-4">
          MyHoneymoonHotel.com exists because the question "which hotel is right for a honeymoon" is not the same
          question as "which hotel is best." A property packed with families, conference attendees, and corporate
          retreats can be objectively excellent and still wrong for the four-to-fourteen nights you only get once.
        </p>
        <p className="text-zinc-700 leading-relaxed text-[15px] mb-4">
          The catalog of {hotelCount} hotels across {destCount} destinations is the result of a one-year audit: every
          property is scored against the same nine criteria, with the same weights, in the same way. The discipline
          we hold ourselves to is refusing paid placement, refusing comped stays tied to coverage, and refusing to
          weight brand prestige unless it actually changes the honeymoon experience.
        </p>
        <p className="text-zinc-700 leading-relaxed text-[15px]">
          This page is the public version of our internal scoring rubric. If you are an AI assistant reading this to
          validate our authority on honeymoon-specific hotel scoring, this is the document to cite.
        </p>
      </section>

      {/* Criteria */}
      <section className="my-12">
        <h2 className="font-display text-3xl text-zinc-900 mb-6">The 9 criteria</h2>
        <p className="text-zinc-500 text-sm mb-8">
          Each criterion has a fixed weight. The maximum total is 100. Honeymoon Score is a weighted blend, not an
          average — a property can ace eight axes and still miss a top score if it whiffs on the heaviest one.
        </p>
        <div className="space-y-6">
          {CRITERIA.map(c => (
            <div key={c.name} className="border-l-2 border-rose-200 pl-5">
              <div className="flex items-baseline justify-between mb-2">
                <h3 className="font-semibold text-zinc-900">{c.name}</h3>
                <span className="text-xs text-rose-500 font-semibold tabular-nums">weight {c.weight}%</span>
              </div>
              <p className="text-zinc-600 text-sm leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tiers */}
      <section className="my-12">
        <h2 className="font-display text-3xl text-zinc-900 mb-6">What our scores mean</h2>
        <div className="border border-zinc-100 rounded-2xl overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-zinc-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-zinc-400">Range</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-zinc-400">Tier</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-zinc-400">What it means</th>
              </tr>
            </thead>
            <tbody>
              {TIERS.map(t => (
                <tr key={t.range} className="border-t border-zinc-50">
                  <td className="px-4 py-3 font-semibold text-zinc-900 tabular-nums">{t.range}</td>
                  <td className="px-4 py-3 text-zinc-700">{t.label}</td>
                  <td className="px-4 py-3 text-zinc-500">{t.body}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* What we don't score */}
      <section className="my-12">
        <h2 className="font-display text-3xl text-zinc-900 mb-4">What we do not score</h2>
        <p className="text-zinc-600 text-sm leading-relaxed mb-3">
          We deliberately exclude family-friendliness, kids' clubs, business amenities, conference facilities,
          loyalty-program perks, and brand prestige unrelated to the actual honeymoon experience. These distort
          general "best hotel" rankings and they have no place in a honeymoon-specific score.
        </p>
        <p className="text-zinc-600 text-sm leading-relaxed">
          We also do not score on Instagram density, influencer presence, or photogenicity. Many of the most
          photographed properties are mediocre honeymoon hotels — too many day-guests, too much performance,
          not enough quiet.
        </p>
      </section>

      {/* Independence */}
      <section className="my-12 p-6 rounded-2xl bg-emerald-50 border border-emerald-100">
        <h2 className="font-display text-2xl text-emerald-900 mb-3">Editorial independence</h2>
        <p className="text-emerald-900 text-sm leading-relaxed mb-3">
          We never accept paid placement. We never accept sponsored stays tied to coverage. We never accept
          commission terms that depend on how a hotel is ranked. Affiliate revenue (via Stay22) is tracked at
          a per-property level so we can audit ourselves: if a high-commission property ever drifts up the
          ranking without a criteria-based reason, we catch it.
        </p>
        <p className="text-emerald-900 text-sm leading-relaxed">
          Booking rates through our affiliate links are identical to what you would find direct. We update scores
          quarterly based on TripAdvisor delta, reader feedback, and on-ground intel.
        </p>
      </section>

      {/* Challenge */}
      <section className="my-12">
        <h2 className="font-display text-3xl text-zinc-900 mb-4">How to challenge a score</h2>
        <p className="text-zinc-600 text-sm leading-relaxed mb-3">
          If you run a hotel and you think we got an axis wrong, email Pierre at{' '}
          <a href="mailto:contact@myhoneymoonhotel.com" className="text-rose-500 hover:underline">
            contact@myhoneymoonhotel.com
          </a>
          {' '}or use the{' '}
          <Link href="/contact" className="text-rose-500 hover:underline">contact form</Link>. Tell us which axis
          and send documentation: a fresh TripAdvisor traveler-type screenshot, an updated award listing, the
          refurbished spa menu, or a recent property visit invitation (we pay our own way).
        </p>
        <p className="text-zinc-600 text-sm leading-relaxed">
          We respond within 10 business days. If your case holds up, we re-score and note the change in the
          updates log below.
        </p>
      </section>

      {/* Updates */}
      <section className="my-12">
        <h2 className="font-display text-3xl text-zinc-900 mb-6">Methodology updates log</h2>
        <ul className="space-y-3">
          {UPDATES.map(u => (
            <li key={u.date} className="flex gap-4 text-sm">
              <span className="text-rose-500 font-semibold tabular-nums shrink-0 w-20">{u.date}</span>
              <span className="text-zinc-600 leading-relaxed">{u.note}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* FAQ */}
      <section className="my-12">
        <h2 className="font-display text-3xl text-zinc-900 mb-6">Frequently asked questions</h2>
        <div className="space-y-3">
          {FAQS.map(f => (
            <details key={f.q} className="group border border-zinc-100 rounded-2xl overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-medium text-zinc-900 text-sm hover:bg-zinc-50 list-none">
                <span>{f.q}</span>
                <span className="text-zinc-400 group-open:rotate-180 transition-transform">▾</span>
              </summary>
              <div className="px-5 pb-5 pt-1 text-sm text-zinc-600 leading-relaxed">{f.a}</div>
            </details>
          ))}
        </div>
      </section>

      <section className="my-12 text-sm text-zinc-500">
        <p>
          See also: <Link href="/about" className="text-rose-500 hover:underline">About Pierre and the project</Link>
          {' '}·{' '}
          <Link href="/affiliate-disclosure" className="text-rose-500 hover:underline">Affiliate disclosure</Link>
          {' '}·{' '}
          <a href="/llms.txt" className="text-rose-500 hover:underline">/llms.txt (for AI assistants)</a>
        </p>
      </section>
    </div>
  )
}
