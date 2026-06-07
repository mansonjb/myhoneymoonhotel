import type { Metadata } from 'next'
import Link from 'next/link'
import { buildAlternates } from '@/lib/alternates'
import AuthorByline from '@/components/AuthorByline'
import { AUTHOR } from '@/data/author'
import { getAllHotels } from '@/lib/hotels'
import { prettyDest } from '@/lib/longtail'

export const metadata: Metadata = {
  title: 'Honeymoon on a Budget: 12 Genuinely Romantic Hotels Under $500/Night',
  description: 'The honest budget honeymoon guide — 12 properties under $500/night that are still genuinely honeymoon-worthy, with the math and the destinations that work.',
  alternates: buildAlternates('/honeymoon-on-a-budget'),
}

const faqs = [
  { question: 'Can a honeymoon under $500/night actually feel like a honeymoon?', answer: 'Yes — but only in specific destinations. The Caribbean off-peak, Mexico\'s Riviera Maya all-inclusives, Bali, and Portugal all have genuinely romantic properties at this level. The mistake is trying to do the Maldives or Bora Bora at this budget — there\'s no good version of that.' },
  { question: 'What\'s the realistic all-in cost for a budget honeymoon?', answer: 'Working backwards: $400/night × 7 = $2,800 for the hotel, $1,500 for two return flights, $1,000 for transfers and dinners off-property. About $5,300 per couple all-in.' },
  { question: 'Should I go all-inclusive on a budget?', answer: 'In Mexico and the Caribbean, often yes — it removes the dinner-cost anxiety that erodes mid-budget honeymoons. Skip all-inclusive in Europe and Southeast Asia where the off-property food is the point.' },
  { question: 'Where should I cut, and where shouldn\'t I?', answer: 'Cut: flight class, fancy transfers, multi-stop itineraries, over-photographed properties. Don\'t cut: the room view, breakfast included, and a single signature dinner.' },
  { question: 'What about going off-season for a luxury hotel instead?', answer: 'Often the best strategy. Late October at a Mediterranean 5-star, or late April in the Maldives, can put $1,000/night properties inside a $500/night budget. Trade-off: weather variance.' },
]

export default function HoneymoonOnABudgetPage() {
  const picks = getAllHotels()
    .filter(h => {
      const min = h.price_per_night_usd?.min ?? 0
      return min >= 200 && min <= 500 && h.honeymoon_score >= 80
    })
    .slice(0, 12)

  const url = 'https://myhoneymoonhotel.com/honeymoon-on-a-budget'
  const articleSchema = {
    '@context': 'https://schema.org', '@type': 'Article', inLanguage: 'en',
    headline: 'Honeymoon on a Budget: 12 genuinely romantic hotels under $500/night',
    description: 'The honest budget honeymoon guide — scored properties between $200-500/night that are still honeymoon-worthy.',
    author: { '@type': 'Person', name: AUTHOR.name, url: AUTHOR.url, jobTitle: AUTHOR.role },
    publisher: { '@type': 'Organization', name: 'My Honeymoon Hotel', logo: { '@type': 'ImageObject', url: 'https://myhoneymoonhotel.com/icon.png' } },
    datePublished: '2026-06-07', dateModified: '2026-06-07',
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
          Honeymoon on a budget: 12 properties that still feel like a honeymoon.
        </h1>
        <p className="text-zinc-500 text-lg leading-relaxed mb-2">
          A budget honeymoon doesn&rsquo;t need to be a compromise — it needs to be specific. The 12 hotels below all come
          in under $500/night, all score above 80 on our romance index, and all sit in destinations where this budget
          buys a genuinely romantic week rather than a frustrated one.
        </p>
        <AuthorByline />

        <div className="prose prose-zinc max-w-none prose-headings:font-display prose-headings:text-zinc-900 prose-p:text-zinc-600 prose-p:leading-relaxed prose-a:text-rose-500 prose-a:no-underline hover:prose-a:underline mt-10">

          <h2>Where to go on a budget</h2>
          <p>
            Caribbean off-peak (April-June), Mexico&rsquo;s Riviera Maya, Bali (especially Ubud and Canggu), Portugal&rsquo;s
            Algarve and Madeira, Greek islands shoulder season, and southern Italy outside the main Amalfi villages. These
            destinations have properties that genuinely deliver at $200-500/night.
          </p>

          <h2>What to skip</h2>
          <p>
            Stop trying to do the Maldives, Bora Bora, or St. Barts at this budget. The economy options exist but
            they&rsquo;re the worst properties at those destinations — you&rsquo;ll see the better ones on social media for
            the entire week and feel poorer for it. Better: pick a destination where your budget is the going rate.
          </p>

          <h2>The math (7 nights, all-in)</h2>
          <p>
            7 nights × $400/night = $2,800. Add $1,500 in flights (two return economy) and $1,000 in transfers and
            dinners off-property. Total all-in: <strong>$5,300 per couple</strong>. Most budget-honeymoon articles dodge
            this math — it&rsquo;s the right number to plan around.
          </p>

          <h2>The 12 picks (scored 80+, under $500/night)</h2>
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
          <p>
            The best budget honeymoons aren&rsquo;t cheap luxury — they&rsquo;re full-quality experiences in destinations
            where this is the going rate. A $400/night villa in Bali or Tulum is not a compromised version of a $1,500/night
            Maldives villa; it&rsquo;s a different, equally complete honeymoon.
          </p>

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
