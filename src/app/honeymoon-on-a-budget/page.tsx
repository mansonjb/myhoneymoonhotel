import type { Metadata } from 'next'
import Link from 'next/link'
import { buildAlternates } from '@/lib/alternates'
import AuthorByline from '@/components/AuthorByline'
import { AUTHOR } from '@/data/author'
import { getAllHotels } from '@/lib/hotels'
import { prettyDest } from '@/lib/longtail'
import { BUDGET_PILLAR_CONTENT } from '@/lib/longtail-content/budget-pillar'
import HotelPickCard from '@/components/longtail/HotelPickCard'
import DestinationPickCard from '@/components/longtail/DestinationPickCard'
import Stay22InlineCTA from '@/components/longtail/Stay22InlineCTA'
import FAQAccordion from '@/components/longtail/FAQAccordion'
import SectionDivider from '@/components/longtail/SectionDivider'

export const metadata: Metadata = {
  title: 'Honeymoon on a Budget: Genuinely Romantic Hotels Under $500/Night',
  description: 'The honest budget honeymoon guide — properties under $500/night that are still genuinely honeymoon-worthy, with the math and the destinations that work.',
  alternates: buildAlternates('/honeymoon-on-a-budget'),
}

const url = 'https://myhoneymoonhotel.com/honeymoon-on-a-budget'

export default function HoneymoonOnABudgetPage() {
  const content = BUDGET_PILLAR_CONTENT
  const allHotels = getAllHotels()
  const picks = allHotels
    .filter(h => {
      const min = h.price_per_night_usd?.min ?? 0
      return min >= 200 && min < 500 && h.honeymoon_score >= 80
    })
    .sort((a, b) => (b.honeymoon_score ?? 0) - (a.honeymoon_score ?? 0))
    .slice(0, 16)

  // Build destinations where the math works
  const destSet = new Set<string>()
  picks.forEach(h => destSet.add(h.destination))
  const destinations = Array.from(destSet).slice(0, 6)

  const articleSchema = {
    '@context': 'https://schema.org', '@type': 'Article', inLanguage: 'en',
    headline: 'Honeymoon on a budget: genuinely romantic hotels under $500/night',
    description: 'The honest budget honeymoon guide — scored properties between $200-500/night that are still honeymoon-worthy.',
    author: { '@type': 'Person', name: AUTHOR.name, url: AUTHOR.url, jobTitle: AUTHOR.role },
    publisher: { '@type': 'Organization', name: 'My Honeymoon Hotel', logo: { '@type': 'ImageObject', url: 'https://myhoneymoonhotel.com/icon.png' } },
    datePublished: '2026-06-07', dateModified: '2026-06-08',
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
  const faqSchemaJson = {
    '@context': 'https://schema.org', '@type': 'FAQPage', inLanguage: 'en',
    mainEntity: content.faqs.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
  }

  return (
    <>
      {[articleSchema, breadcrumbSchema, itemListSchema, faqSchemaJson].map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      <header className="max-w-3xl mx-auto px-6 pt-20 pb-8">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">Pillar Guide</p>
        <h1 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-6 leading-tight">
          Honeymoon on a budget: {picks.length} properties that still feel like a honeymoon
        </h1>
        <p className="text-zinc-500 text-lg leading-relaxed mb-6">{content.intro}</p>
        <AuthorByline />
        <div className="mt-10 bg-rose-50/60 border border-rose-100 rounded-2xl p-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-rose-500 mb-2">In short</p>
          <p className="text-zinc-700 leading-relaxed">
            A budget honeymoon works when the destination matches the budget. Cape Verde, Mexico's Riviera Maya, Madeira, Cyprus, Bali, the Algarve and the smaller Greek islands all have $300-450/night properties that are the local 5-star, not the compromise option.
          </p>
        </div>
      </header>

      {destinations.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 mt-12">
          <SectionDivider label="Where the math works" />
          <h2 className="font-display text-3xl text-zinc-900 mb-3">Destinations where the math works</h2>
          <p className="text-zinc-500 max-w-3xl mb-8">The places where $300-450/night is the local 5-star going rate, not the compromise tier.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map(d => (
              <DestinationPickCard
                key={d}
                slug={d}
                displayLabel={prettyDest(d)}
                whyHere="Local 5-star pricing fits the sub-$500 window without trade-offs."
              />
            ))}
          </div>
        </section>
      )}

      <div className="max-w-3xl mx-auto px-6 mt-12">
        <div className="prose prose-zinc max-w-none prose-headings:font-display prose-headings:text-zinc-900 prose-p:text-zinc-600 prose-p:leading-relaxed prose-a:text-rose-500 prose-a:no-underline hover:prose-a:underline">
          <h2>Where the math works</h2>
          <p>{content.whereMathWorks}</p>

          <h2>The all-inclusive trap</h2>
          <p>{content.allInclusiveTrap}</p>
        </div>
      </div>

      <section className="max-w-6xl mx-auto px-6 mt-12">
        <SectionDivider label="Splurge moments" />
        <h2 className="font-display text-3xl text-zinc-900 mb-8">Four splurge moments worth paying for</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {content.splurgeMoments.map((s, i) => (
            <div key={i} className="bg-rose-50/50 border border-rose-100 rounded-2xl p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-rose-500 mb-2">Worth paying for</p>
              <h3 className="font-display text-lg text-zinc-900 mb-2">{s.title}</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 mt-12">
        <div className="prose prose-zinc max-w-none prose-headings:font-display prose-headings:text-zinc-900 prose-p:text-zinc-600 prose-p:leading-relaxed prose-a:text-rose-500 prose-a:no-underline hover:prose-a:underline">
          <h2>The real 7-night cost breakdown (per couple)</h2>
          <div className="not-prose mt-4 border border-zinc-100 rounded-2xl overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {content.costBreakdown.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-zinc-50' : ''}>
                    <td className="px-5 py-3 font-medium text-zinc-900 align-top">{row.label}</td>
                    <td className="px-5 py-3 text-zinc-600">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <section className="max-w-6xl mx-auto px-6 mt-16">
        <SectionDivider label="The picks" />
        <h2 className="font-display text-3xl text-zinc-900 mb-3">The {picks.length} picks (scored 80+, under $500/night)</h2>
        <p className="text-zinc-500 max-w-3xl mb-8">Real properties from our catalog where the budget-tier math holds.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {picks.map(h => <HotelPickCard key={h.slug} hotel={h} />)}
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6">
        <Stay22InlineCTA
          destination={picks[0]?.destination ?? 'mexico'}
          country={picks[0]?.country ?? ''}
          headline="Live prices for sub-$500/night honeymoon stays"
          subline="Stay22 finds the best current OTA rate. Free, no markup, real-time pricing."
          campaign="budget-pillar"
        />
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-4">
        <div className="prose prose-zinc max-w-none prose-headings:font-display prose-headings:text-zinc-900 prose-p:text-zinc-600 prose-p:leading-relaxed prose-a:text-rose-500 prose-a:no-underline hover:prose-a:underline">
          <h2>The honest take</h2>
          <p>{content.closing}</p>

          <p>
            Related: <Link href="/honeymoon-under-5000">honeymoon under $5,000</Link> ·{' '}
            <Link href="/honeymoon-under-10000">honeymoon under $10,000</Link> ·{' '}
            <Link href="/all-inclusive-honeymoon">all-inclusive honeymoon</Link> ·{' '}
            <Link href="/last-minute-honeymoon">last-minute honeymoon</Link>
          </p>
        </div>
      </div>

      <section className="max-w-3xl mx-auto px-6 mt-20 pb-24">
        <SectionDivider label="FAQ" />
        <h2 className="font-display text-3xl text-zinc-900 mb-8">Frequently asked questions</h2>
        <FAQAccordion items={content.faqs} />
      </section>
    </>
  )
}
