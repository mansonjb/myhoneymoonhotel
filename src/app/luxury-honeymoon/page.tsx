import type { Metadata } from 'next'
import Link from 'next/link'
import { buildAlternates } from '@/lib/alternates'
import AuthorByline from '@/components/AuthorByline'
import { AUTHOR } from '@/data/author'
import { getAllHotels } from '@/lib/hotels'
import { LUXURY_CONTENT } from '@/lib/longtail-content/luxury'
import type { Hotel } from '../../../types/hotel'
import HotelPickCard from '@/components/longtail/HotelPickCard'
import TierCard from '@/components/longtail/TierCard'
import Stay22InlineCTA from '@/components/longtail/Stay22InlineCTA'
import FAQAccordion from '@/components/longtail/FAQAccordion'
import SectionDivider from '@/components/longtail/SectionDivider'

export const metadata: Metadata = {
  title: 'Luxury Honeymoon: The Best $1,000+/Night Hotels for 2026',
  description: 'The ultra-luxury honeymoon tier — $1,000+/night hotels scored on romance. The three sub-tiers ($1k / $2k / $5k+), the best picks, and where the deals are.',
  alternates: buildAlternates('/luxury-honeymoon'),
}

const url = 'https://myhoneymoonhotel.com/luxury-honeymoon'

export default function LuxuryHoneymoonPage() {
  const allHotels = getAllHotels()
  const content = LUXURY_CONTENT

  const explicitSlugs = new Set(content.tiers.flatMap(t => t.hotelSlugs))
  const tierHotels: Record<string, Hotel[]> = {}
  for (const tier of content.tiers) {
    tierHotels[tier.title] = tier.hotelSlugs
      .map(s => allHotels.find(h => h.slug === s))
      .filter((h): h is Hotel => Boolean(h))
  }

  const additional = allHotels
    .filter(h => (h.price_per_night_usd?.min ?? 0) >= 1000 && !explicitSlugs.has(h.slug) && h.honeymoon_score >= 85)
    .sort((a, b) => (b.honeymoon_score ?? 0) - (a.honeymoon_score ?? 0))
    .slice(0, 4)

  // Top 8 ultimate
  const ultimate8: Hotel[] = [
    ...Object.values(tierHotels).flat(),
  ]
    .sort((a, b) => b.honeymoon_score - a.honeymoon_score)
    .slice(0, 8)

  const allListed: Hotel[] = [
    ...Object.values(tierHotels).flat(),
    ...additional,
  ]

  const articleSchema = {
    '@context': 'https://schema.org', '@type': 'Article', inLanguage: 'en',
    headline: 'Luxury honeymoon: the best $1,000+/night hotels for 2026',
    description: 'The ultra-luxury honeymoon tier — properties scored 85+ with starting rates above $1,000/night.',
    author: { '@type': 'Person', name: AUTHOR.name, url: AUTHOR.url, jobTitle: AUTHOR.role },
    publisher: { '@type': 'Organization', name: 'My Honeymoon Hotel', logo: { '@type': 'ImageObject', url: 'https://myhoneymoonhotel.com/icon.png' } },
    datePublished: '2026-06-07', dateModified: '2026-06-08',
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
    itemListElement: allListed.map((h, i) => ({
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
          Luxury honeymoon: the top tier, scored honestly
        </h1>
        <p className="text-zinc-500 text-lg leading-relaxed mb-6">{content.intro}</p>
        <AuthorByline />
        <div className="mt-10 bg-rose-50/60 border border-rose-100 rounded-2xl p-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-rose-500 mb-2">In short</p>
          <p className="text-zinc-700 leading-relaxed">
            Three honest sub-tiers from $1,000 to $5,000+/night. The names you'd expect (Aman, Belmond, Four Seasons, Soneva) and a few you may not (Passalacqua, Bisate, Cayo Espanto). The deals exist; here's where.
          </p>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-6 mt-10">
        <SectionDivider label="The three tiers" />
        {content.tiers.map((tier, ti) => {
          const hotels = tierHotels[tier.title] ?? []
          return (
            <TierCard
              key={ti}
              label={tier.title}
              priceRange={tier.range}
              who={tier.body.split('. ').slice(0, 1).join('. ') + '.'}
              whatYouGet={[]}
              body={tier.body}
              hotels={hotels}
            />
          )
        })}
      </section>

      <section className="max-w-6xl mx-auto px-6 mt-16">
        <SectionDivider label="The ultimate 8" />
        <h2 className="font-display text-3xl text-zinc-900 mb-3">The ultimate 8 hotels</h2>
        <p className="text-zinc-500 max-w-3xl mb-8">Highest-scoring properties across all three tiers — the ones we'd send a friend to without a second thought.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ultimate8.map(h => <HotelPickCard key={h.slug} hotel={h} />)}
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6">
        <Stay22InlineCTA
          destination={ultimate8[0]?.destination ?? 'maldives'}
          country={ultimate8[0]?.country ?? ''}
          headline="Live prices for luxury honeymoon stays"
          subline="See current rates at the world's top-scored romance properties — Stay22 finds the best OTA price."
          campaign="luxury-pillar"
        />
      </div>

      {additional.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 mt-12">
          <SectionDivider label="Also worth your shortlist" />
          <h2 className="font-display text-3xl text-zinc-900 mb-8">Also worth your shortlist</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additional.map(h => <HotelPickCard key={h.slug} hotel={h} />)}
          </div>
        </section>
      )}

      <div className="max-w-3xl mx-auto px-6 mt-12">
        <div className="prose prose-zinc max-w-none prose-headings:font-display prose-headings:text-zinc-900 prose-p:text-zinc-600 prose-p:leading-relaxed prose-a:text-rose-500 prose-a:no-underline hover:prose-a:underline">
          <h2>Where the deals are</h2>
          <p>{content.whereDealsAre}</p>

          <h2>Travel advisors at this tier</h2>
          <p>{content.agentSection}</p>

          <h2>The honest take</h2>
          <p>{content.closing}</p>

          <p>
            Related: <Link href="/overwater-bungalow-honeymoon">overwater bungalow honeymoon</Link> ·{' '}
            <Link href="/all-inclusive-honeymoon">all-inclusive honeymoon</Link> ·{' '}
            <Link href="/honeymoon-on-a-budget">honeymoon on a budget</Link>
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
