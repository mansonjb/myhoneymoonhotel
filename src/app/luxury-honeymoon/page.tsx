import type { Metadata } from 'next'
import Link from 'next/link'
import { buildAlternates } from '@/lib/alternates'
import AuthorByline from '@/components/AuthorByline'
import { AUTHOR } from '@/data/author'
import { getAllHotels } from '@/lib/hotels'
import { prettyDest } from '@/lib/longtail'

export const metadata: Metadata = {
  title: 'Luxury Honeymoon: The 12 Best $1,000+/Night Hotels for 2026',
  description: 'The ultra-luxury honeymoon tier — $1,000+/night hotels scored on romance. The three sub-tiers ($1k / $2k / $5k+), the best picks, and where the deals are.',
  alternates: buildAlternates('/luxury-honeymoon'),
}

const faqs = [
  { question: 'What actually defines a luxury honeymoon?', answer: 'Three things: a property where the room rate starts at $1,000/night or above, a service ratio where someone knows your name within 24 hours, and the absence of forced socializing. The first is measurable; the second and third are the ones that make the difference.' },
  { question: 'Is $1,000/night enough for a "real" luxury honeymoon?', answer: 'Yes. The $1,000-2,000 tier covers most of the world\'s great honeymoon hotels — Four Seasons, Aman Resorts, Belmond, Rosewood. The jump to $2,000+ buys size and exclusivity (overwater villa instead of beach villa, larger spa suite); the jump to $5,000+ buys privacy at a level most couples don\'t actually need on a honeymoon.' },
  { question: 'Where are the deals at this tier?', answer: 'Shoulder season at established luxury destinations: late April / early May in the Maldives and Bora Bora; late October in the Mediterranean; late November in the Indian Ocean. Same hotels, 30-40% less.' },
  { question: 'Should I book through a travel advisor?', answer: 'Yes — at this tier, the Virtuoso or Fine Hotels & Resorts perks (free breakfast, $100 hotel credit, upgrade at check-in) are real, and a good advisor costs nothing on top of the room rate.' },
  { question: 'What about overwater villas specifically?', answer: 'Covered in detail in the overwater bungalow honeymoon guide. The Maldives sets the global standard at this tier; French Polynesia is more expensive for similar experience.' },
]

export default function LuxuryHoneymoonPage() {
  const top = getAllHotels()
    .filter(h => (h.price_per_night_usd?.min ?? 0) >= 1000)
    .slice(0, 12)

  const url = 'https://myhoneymoonhotel.com/luxury-honeymoon'
  const articleSchema = {
    '@context': 'https://schema.org', '@type': 'Article', inLanguage: 'en',
    headline: 'Luxury Honeymoon: the 12 best $1,000+/night hotels for 2026',
    description: 'The ultra-luxury honeymoon tier — properties scored 85+ with starting rates above $1,000/night.',
    author: { '@type': 'Person', name: AUTHOR.name, url: AUTHOR.url, jobTitle: AUTHOR.role },
    publisher: { '@type': 'Organization', name: 'My Honeymoon Hotel', logo: { '@type': 'ImageObject', url: 'https://myhoneymoonhotel.com/icon.png' } },
    datePublished: '2026-06-07', dateModified: '2026-06-07',
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
    itemListElement: top.map((h, i) => ({
      '@type': 'ListItem', position: i + 1,
      url: `https://myhoneymoonhotel.com/hotels/${h.slug}`, name: h.name,
    })),
  }
  const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage', inLanguage: 'en',
    mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
  }

  return (
    <>
      <div className="max-w-3xl mx-auto px-6 py-20">
        {[articleSchema, breadcrumbSchema, itemListSchema, faqSchema].map((s, i) => (
          <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
        ))}
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">Pillar Guide</p>
        <h1 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-6 leading-tight">
          Luxury honeymoon: the top tier, scored honestly.
        </h1>
        <p className="text-zinc-500 text-lg leading-relaxed mb-2">
          The luxury honeymoon market is full of $1,500/night hotels that are actually $400 hotels with a marketing budget.
          The 12 below are the ones we'd put our own honeymoon dollars into — drawn from our full catalog, filtered to
          properties with starting rates above $1,000/night.
        </p>
        <AuthorByline />

        <div className="prose prose-zinc max-w-none prose-headings:font-display prose-headings:text-zinc-900 prose-p:text-zinc-600 prose-p:leading-relaxed prose-a:text-rose-500 prose-a:no-underline hover:prose-a:underline mt-10">

          <h2>The three ultra-tiers</h2>
          <p>
            <strong>$1,000-2,000/night.</strong> The honest luxury tier. Four Seasons, Aman, Belmond, Rosewood — properties
            where service is real, the room is generous, and the food is genuine. Most great honeymoons happen here.
          </p>
          <p>
            <strong>$2,000-5,000/night.</strong> The upgrade tier. Overwater villas with plunge pools, private beach in
            Bora Bora, the larger suites at Aman or Cheval Blanc. Buys size, view, and exclusivity rather than substantive
            service improvement.
          </p>
          <p>
            <strong>$5,000+/night.</strong> The Soneva Jani / North Island / Royal Mansion tier. Buys privacy at a level
            most couples don't need on a honeymoon — but if it's once-in-a-lifetime, this is the once-in-a-lifetime tier.
          </p>

          <h2>The 12 best $1,000+/night honeymoon hotels</h2>
          <div className="not-prose mt-6">
            {top.map(h => (
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

          <h2>Where the deals are</h2>
          <p>
            At this tier, &ldquo;deal&rdquo; means 30-40% off the peak rate. The reliable windows: late April and early May
            in the Maldives and Bora Bora (just before the SW monsoon technically begins), late October across the
            Mediterranean (warm sea, light crowds), and late November in the Indian Ocean. Same hotels. Same staff.
            Materially better price.
          </p>

          <h2>The honest take</h2>
          <p>
            A luxury honeymoon is mostly about editing. Pick one property at the top of its tier rather than two at the
            middle. Stay seven nights instead of bouncing through three. The couples who get the most out of this tier are
            the ones who treat it as a single, deep experience rather than a tour.
          </p>

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
