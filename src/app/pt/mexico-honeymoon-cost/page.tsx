import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { getLocalizedPageManifest, tm } from '@/lib/getLocalizedPageManifest'
import { buildAlternates } from '@/lib/alternates'

const SLUG = 'mexico-honeymoon-cost'
const m = getLocalizedPageManifest(SLUG, 'pt')
const t = (key: string, fallback = ''): string => tm(m, key, fallback)

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: t('metadata.title', 'Mexico Honeymoon Cost: 2026 Real Numbers ($4k–$50k+)'),
    description: t(
      'metadata.description',
      'How much a Mexico honeymoon really costs in 2026.',
    ),
    alternates: buildAlternates('/mexico-honeymoon-cost', 'pt'),
    openGraph: {
      title: t('metadata.ogTitle', 'Mexico Honeymoon Cost — 2026 Real Numbers'),
      description: t(
        'metadata.ogDescription',
        'Four budget tiers, real hotel breakdowns, hidden costs.',
      ),
      url: 'https://myhoneymoonhotel.com/pt/mexico-honeymoon-cost',
      siteName: 'MyHoneymoonHotel',
      images: [
        {
          url: 'https://myhoneymoonhotel.com/images/hotels/belmond-maroma-resort-mexico/hero.webp',
          width: 1600,
          height: 900,
          alt: t('metadata.ogImageAlt', 'Belmond Maroma on the Riviera Maya'),
        },
      ],
      locale: 'pt_PT',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('metadata.twitterTitle', 'Mexico Honeymoon Cost — 2026 Real Numbers'),
      description: t(
        'metadata.twitterDescription',
        'Four budget tiers, real hotel breakdowns, hidden costs.',
      ),
      images: ['https://myhoneymoonhotel.com/images/hotels/belmond-maroma-resort-mexico/hero.webp'],
    },
  }
}

const FAQ_INDICES = Array.from({ length: 12 }, (_, i) => i)
const TIER_INDICES = [0, 1, 2, 3]
const DRIVER_INDICES = [0, 1, 2, 3, 4]
const LINE_ITEM_INDICES = Array.from({ length: 21 }, (_, i) => i)
const SAMPLE_INDICES = [0, 1, 2]
const SAMPLE_BULLET_COUNTS = [8, 8, 8]
const SEASON_INDICES = [0, 1, 2, 3, 4, 5, 6]
const TIP_INDICES = [0, 1, 2, 3, 4, 5, 6, 7]
const HIDDEN_INDICES = [0, 1, 2, 3, 4, 5, 6, 7, 8]
const COMPARISON_INDICES = [0, 1, 2, 3]

export default function MexicoHoneymoonCostPagePT() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: t('metadata.ogTitle', 'Mexico Honeymoon Cost — 2026 Real Numbers'),
    description: t('metadata.description', ''),
    image: 'https://myhoneymoonhotel.com/images/hotels/belmond-maroma-resort-mexico/hero.webp',
    inLanguage: 'pt',
    author: { '@type': 'Organization', name: 'My Honeymoon Hotel', url: 'https://myhoneymoonhotel.com/about' },
    publisher: {
      '@type': 'Organization',
      name: 'My Honeymoon Hotel',
      logo: { '@type': 'ImageObject', url: 'https://myhoneymoonhotel.com/icon.png' },
    },
    datePublished: '2026-05-11',
    dateModified: '2026-05-11',
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://myhoneymoonhotel.com/pt/mexico-honeymoon-cost' },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: 'pt',
    mainEntity: FAQ_INDICES.map((i) => ({
      '@type': 'Question',
      name: t(`faqs.${i}.question`, ''),
      acceptedAnswer: { '@type': 'Answer', text: t(`faqs.${i}.answer`, '') },
    })),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: t('schema.breadcrumb.home', 'Início'), item: 'https://myhoneymoonhotel.com/es' },
      {
        '@type': 'ListItem',
        position: 2,
        name: t('schema.breadcrumb.page', 'Custo da lua de mel no México'),
        item: 'https://myhoneymoonhotel.com/pt/mexico-honeymoon-cost',
      },
    ],
  }

  const speakableSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://myhoneymoonhotel.com/pt/mexico-honeymoon-cost#speakable',
    inLanguage: 'pt',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['#tldr'],
    },
  }

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />

      {/* HERO */}
      <section className="relative h-[70vh] min-h-[520px] flex items-end overflow-hidden">
        <Image
          src="/images/hotels/belmond-maroma-resort-mexico/hero.webp"
          alt={t('hero.imageAlt', 'Belmond Maroma on the Riviera Maya')}
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={75}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="relative z-10 px-8 sm:px-12 pb-16 max-w-4xl">
          <p className="text-white/60 text-xs tracking-[0.2em] uppercase mb-5">{t('hero.kicker', 'The Cost Guide')}</p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.05] mb-6">
            {t('hero.h1.line1', 'Mexico honeymoon')}<br />{t('hero.h1.line2', 'cost — 2026.')}
          </h1>
          <p className="text-white/75 text-base sm:text-lg max-w-2xl leading-relaxed">
            {t('hero.intro', '')}
          </p>
        </div>
      </section>

      {/* BREADCRUMB */}
      <nav aria-label="Breadcrumb" className="max-w-4xl mx-auto px-6 pt-8 text-xs text-zinc-500">
        <Link href="/es" className="hover:text-zinc-900">{t('breadcrumb.home', 'Início')}</Link>
        <span className="mx-2">/</span>
        <span className="text-zinc-900">{t('breadcrumb.current', 'Custo da lua de mel no México')}</span>
      </nav>

      <div className="max-w-3xl mx-auto px-6">
        <aside id="tldr" className="my-8 p-6 rounded-2xl bg-rose-50/60 border border-rose-100">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-2">TL;DR</p>
          <p className="text-zinc-900 text-lg leading-relaxed font-medium">
            {t('tldr.answer', '')}
          </p>
          <ul className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-zinc-600">
            <li><strong className="block text-zinc-900 text-xs uppercase tracking-wider mb-1">{t('tldr.forLabel', 'For')}</strong>{t('tldr.forValue', '')}</li>
            <li><strong className="block text-zinc-900 text-xs uppercase tracking-wider mb-1">{t('tldr.costLabel', 'Cost')}</strong>{t('tldr.costValue', '')}</li>
            <li><strong className="block text-zinc-900 text-xs uppercase tracking-wider mb-1">{t('tldr.monthLabel', 'Best month')}</strong>{t('tldr.monthValue', '')}</li>
          </ul>
        </aside>
      </div>

      {/* INTRO + TL;DR */}
      <section className="max-w-3xl mx-auto px-6 py-14 prose prose-zinc bg-gradient-to-b from-rose-50/60 via-white to-white -mt-2">
        <p className="text-lg text-zinc-700 leading-relaxed">
          {t('intro.p1.before', '')} <strong>{t('intro.p1.bold', '$4,000 to $50,000+')}</strong> {t('intro.p1.after', '')}
        </p>
        <p className="text-base text-zinc-700 leading-relaxed mt-5">
          {t('intro.p2.before', '')}{' '}
          <Link href="/pt/how-to-plan-a-honeymoon" className="text-rose-500 hover:text-rose-600 underline underline-offset-2">
            {t('intro.p2.linkText', 'full honeymoon planning guide')}
          </Link>
          {t('intro.p2.after', '.')}
        </p>

        <div className="not-prose my-12 bg-zinc-50 border border-zinc-100 rounded-2xl p-7">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-4">{t('toc.kicker', 'In this guide')}</p>
          <ol className="text-sm text-zinc-700 space-y-2 leading-relaxed list-decimal pl-5">
            <li><a className="hover:text-rose-500" href="#tldr-tiers">{t('toc.1', 'The four budget tiers — TL;DR table')}</a></li>
            <li><a className="hover:text-rose-500" href="#drivers">{t('toc.2', 'The five cost drivers')}</a></li>
            <li><a className="hover:text-rose-500" href="#line-items">{t('toc.3', 'Line-by-line cost breakdown')}</a></li>
            <li><a className="hover:text-rose-500" href="#samples">{t('toc.4', 'Three real 7-night sample budgets')}</a></li>
            <li><a className="hover:text-rose-500" href="#season">{t('toc.5', 'Best value months')}</a></li>
            <li><a className="hover:text-rose-500" href="#tips">{t('toc.6', '8 ways to spend meaningfully less')}</a></li>
            <li><a className="hover:text-rose-500" href="#hidden">{t('toc.7', 'Hidden costs nobody warns you about')}</a></li>
            <li><a className="hover:text-rose-500" href="#compare">{t('toc.8', 'Mexico vs. Caribbean vs. Bali vs. Maldives')}</a></li>
            <li><a className="hover:text-rose-500" href="#faq">{t('toc.9', 'Frequently asked questions')}</a></li>
          </ol>
        </div>
      </section>

      {/* 1. TL;DR */}
      <section id="tldr-tiers" className="bg-zinc-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-3">{t('section.tldr.kicker', 'Section 01')}</p>
          <h2 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-6 leading-tight">
            {t('section.tldr.h2', 'The four budget tiers')}
          </h2>
          <p className="text-zinc-700 text-base leading-relaxed mb-10">
            {t('section.tldr.intro', '')}
          </p>

          <div className="overflow-x-auto -mx-6 px-6">
            <table className="w-full text-sm bg-white border border-zinc-100 rounded-2xl overflow-hidden">
              <thead className="bg-zinc-100 text-zinc-700">
                <tr>
                  <th className="text-left p-4 font-semibold">{t('section.tldr.col.tier', 'Tier')}</th>
                  <th className="text-left p-4 font-semibold">{t('section.tldr.col.range', '7-night total')}</th>
                  <th className="text-left p-4 font-semibold">{t('section.tldr.col.examples', 'Sample resorts')}</th>
                  <th className="text-left p-4 font-semibold">{t('section.tldr.col.region', 'Region')}</th>
                  <th className="text-left p-4 font-semibold">{t('section.tldr.col.room', 'Room')}</th>
                  <th className="text-left p-4 font-semibold">{t('section.tldr.col.meal', 'Meal model')}</th>
                </tr>
              </thead>
              <tbody>
                {TIER_INDICES.map((i) => (
                  <tr key={i} className="border-t border-zinc-100 align-top">
                    <td className="p-4 font-semibold text-zinc-900">{t(`tier.${i}.tier`, '')}</td>
                    <td className="p-4 text-rose-500 font-semibold tabular-nums">{t(`tier.${i}.range`, '')}</td>
                    <td className="p-4 text-zinc-700">{t(`tier.${i}.examples`, '')}</td>
                    <td className="p-4 text-zinc-700">{t(`tier.${i}.region`, '')}</td>
                    <td className="p-4 text-zinc-700">{t(`tier.${i}.room`, '')}</td>
                    <td className="p-4 text-zinc-700">{t(`tier.${i}.meal`, '')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-zinc-600 text-sm leading-relaxed mt-6 italic">
            {t('section.tldr.note', '')}
          </p>
        </div>
      </section>

      {/* 2. COST DRIVERS */}
      <section id="drivers" className="max-w-3xl mx-auto px-6 py-20">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-3">{t('section.drivers.kicker', 'Section 02')}</p>
        <h2 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-6 leading-tight">
          {t('section.drivers.h2', 'The five cost drivers')}
        </h2>
        <p className="text-zinc-700 text-base leading-relaxed mb-10">
          {t('section.drivers.intro', '')}
        </p>
        <div className="space-y-9">
          {DRIVER_INDICES.map((i) => (
            <div key={i} className="border-l-2 border-rose-200 pl-6">
              <p className="text-xs font-mono text-rose-500 uppercase tracking-widest mb-1">{t('section.drivers.driverLabel', 'Driver')} {i + 1}</p>
              <h3 className="font-display text-2xl text-zinc-900 mb-3">{t(`driver.${i}.title`, '')}</h3>
              <p className="text-zinc-700 text-base leading-relaxed">{t(`driver.${i}.detail`, '')}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. LINE ITEMS */}
      <section id="line-items" className="bg-zinc-50 py-20">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-3">{t('section.lineItems.kicker', 'Section 03')}</p>
          <h2 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-6 leading-tight">
            {t('section.lineItems.h2', 'Line-by-line cost breakdown')}
          </h2>
          <p className="text-zinc-700 text-base leading-relaxed mb-10">
            {t('section.lineItems.intro', '')}
          </p>

          <div className="overflow-x-auto -mx-6 px-6">
            <table className="w-full text-sm bg-white border border-zinc-100 rounded-2xl overflow-hidden">
              <tbody>
                {LINE_ITEM_INDICES.map((i) => (
                  <tr key={i} className="border-t border-zinc-100 first:border-t-0">
                    <td className="p-4 text-zinc-700">{t(`lineItem.${i}.label`, '')}</td>
                    <td className="p-4 text-zinc-900 font-medium text-right tabular-nums whitespace-nowrap">{t(`lineItem.${i}.value`, '')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-zinc-600 text-sm leading-relaxed mt-6 italic">
            {t('section.lineItems.note', '')}
          </p>
        </div>
      </section>

      {/* 4. SAMPLE BUDGETS */}
      <section id="samples" className="max-w-3xl mx-auto px-6 py-20">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-3">{t('section.samples.kicker', 'Section 04')}</p>
        <h2 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-6 leading-tight">
          {t('section.samples.h2', 'Three real 7-night sample budgets')}
        </h2>
        <p className="text-zinc-700 text-base leading-relaxed mb-10">
          {t('section.samples.intro', '')}
        </p>
        <div className="space-y-10">
          {SAMPLE_INDICES.map((sIdx) => {
            const bulletCount = SAMPLE_BULLET_COUNTS[sIdx]
            return (
              <div key={sIdx} className="border border-zinc-100 rounded-2xl p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-3 mb-1">
                  <h3 className="font-display text-2xl text-zinc-900">{t(`sample.${sIdx}.name`, '')}</h3>
                  <p className="text-rose-500 font-semibold text-lg tabular-nums">{t(`sample.${sIdx}.total`, '')}</p>
                </div>
                <p className="text-zinc-500 text-xs uppercase tracking-widest mb-5">{t(`sample.${sIdx}.season`, '')}</p>
                <table className="w-full text-sm mb-5">
                  <tbody>
                    {Array.from({ length: bulletCount }, (_, bIdx) => (
                      <tr key={bIdx} className="border-t border-zinc-100">
                        <td className="py-2 text-zinc-600">{t(`sample.${sIdx}.bullet.${bIdx}.label`, '')}</td>
                        <td className="py-2 text-zinc-900 font-medium text-right tabular-nums whitespace-nowrap">{t(`sample.${sIdx}.bullet.${bIdx}.value`, '')}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="text-zinc-700 text-sm leading-relaxed italic">{t(`sample.${sIdx}.note`, '')}</p>
              </div>
            )
          })}
        </div>
        <p className="text-zinc-700 text-base leading-relaxed mt-10">
          {t('section.samples.outro1', '')}{' '}
          <Link href="/pt/destinations/mexico" className="text-rose-500 hover:text-rose-600 underline underline-offset-2">
            {t('section.samples.outro.destLink', 'Mexico destination guide')}
          </Link>{' '}
          {t('section.samples.outro2', '')}{' '}
          <Link href="/pt/best/honeymoon-resorts-2026" className="text-rose-500 hover:text-rose-600 underline underline-offset-2">
            {t('section.samples.outro.bestLink', 'best honeymoon resorts of 2026')}
          </Link>
          {t('section.samples.outro3', '.')}
        </p>
      </section>

      {/* 5. SEASON */}
      <section id="season" className="bg-zinc-50 py-20">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-3">{t('section.season.kicker', 'Section 05')}</p>
          <h2 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-6 leading-tight">
            {t('section.season.h2', 'Best value months for a Mexico honeymoon')}
          </h2>
          <p className="text-zinc-700 text-base leading-relaxed mb-10">
            {t('section.season.intro', '')}
          </p>
          <div className="space-y-6">
            {SEASON_INDICES.map((i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 border-b border-zinc-200 pb-5">
                <div className="sm:w-44 shrink-0">
                  <p className="font-display text-xl text-zinc-900">{t(`season.${i}.months`, '')}</p>
                  <p className="text-rose-500 text-xs font-semibold uppercase tracking-widest mt-0.5">{t(`season.${i}.verdict`, '')}</p>
                </div>
                <p className="text-zinc-700 text-base leading-relaxed">{t(`season.${i}.detail`, '')}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 bg-rose-50 border border-rose-100 rounded-2xl p-6">
            <p className="text-zinc-700 text-base leading-relaxed">
              <strong>{t('section.season.callout.bold', 'The single rule:')}</strong> {t('section.season.callout.body', '')}
            </p>
          </div>
        </div>
      </section>

      {/* 6. TIPS */}
      <section id="tips" className="max-w-3xl mx-auto px-6 py-20">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-3">{t('section.tips.kicker', 'Section 06')}</p>
        <h2 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-6 leading-tight">
          {t('section.tips.h2', '8 ways to spend meaningfully less')}
        </h2>
        <p className="text-zinc-700 text-base leading-relaxed mb-10">
          {t('section.tips.intro', '')}
        </p>
        <ol className="space-y-7">
          {TIP_INDICES.map((i) => (
            <li key={i} className="flex gap-5">
              <span className="font-display text-2xl text-rose-500 tabular-nums w-8 shrink-0">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="font-medium text-zinc-900 mb-1.5">{t(`tip.${i}.title`, '')}</h3>
                <p className="text-zinc-700 text-sm leading-relaxed">{t(`tip.${i}.detail`, '')}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="text-zinc-700 text-base leading-relaxed mt-10">
          {t('section.tips.outro1', '')}{' '}
          <Link href="/pt/experiences/all-inclusive" className="text-rose-500 hover:text-rose-600 underline underline-offset-2">
            {t('section.tips.outro.allInclusiveLink', 'all-inclusive resort experience')}
          </Link>{' '}
          {t('section.tips.outro2', '')}
        </p>
      </section>

      {/* 7. HIDDEN COSTS */}
      <section id="hidden" className="bg-zinc-950 text-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">{t('section.hidden.kicker', 'Section 07')}</p>
          <h2 className="font-display text-4xl sm:text-5xl mb-6 leading-tight">
            {t('section.hidden.h2', 'Hidden costs nobody warns you about')}
          </h2>
          <p className="text-zinc-400 text-base leading-relaxed mb-10">
            {t('section.hidden.intro', '')}
          </p>
          <div className="space-y-6">
            {HIDDEN_INDICES.map((i) => (
              <div key={i} className="border-b border-zinc-800 pb-5">
                <h3 className="font-display text-xl text-rose-300 mb-2">{t(`hiddenCost.${i}.label`, '')}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{t(`hiddenCost.${i}.detail`, '')}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. COMPARISON */}
      <section id="compare" className="max-w-3xl mx-auto px-6 py-20">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-3">{t('section.compare.kicker', 'Section 08')}</p>
        <h2 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-6 leading-tight">
          {t('section.compare.h2', 'Mexico vs. Caribbean vs. Bali vs. Maldives')}
        </h2>
        <p className="text-zinc-700 text-base leading-relaxed mb-10">
          {t('section.compare.intro', '')}
        </p>

        <div className="overflow-x-auto -mx-6 px-6">
          <table className="w-full text-sm bg-white border border-zinc-100 rounded-2xl overflow-hidden">
            <thead className="bg-zinc-100 text-zinc-700">
              <tr>
                <th className="text-left p-4 font-semibold">{t('section.compare.col.dest', 'Destination')}</th>
                <th className="text-left p-4 font-semibold">{t('section.compare.col.total', '7-night total')}</th>
                <th className="text-left p-4 font-semibold">{t('section.compare.col.flight', 'Flight time')}</th>
                <th className="text-left p-4 font-semibold">{t('section.compare.col.signature', 'Signature')}</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_INDICES.map((i) => (
                <tr key={i} className="border-t border-zinc-100 align-top">
                  <td className="p-4 font-semibold text-zinc-900">{t(`comparison.${i}.dest`, '')}</td>
                  <td className="p-4 text-rose-500 font-semibold tabular-nums whitespace-nowrap">{t(`comparison.${i}.total`, '')}</td>
                  <td className="p-4 text-zinc-700 whitespace-nowrap">{t(`comparison.${i}.flight`, '')}</td>
                  <td className="p-4 text-zinc-700">{t(`comparison.${i}.signature`, '')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-zinc-700 text-base leading-relaxed mt-8">
          {t('section.compare.outro1', '')}{' '}
          <Link href="/pt/compare/mexico-vs-bali" className="text-rose-500 hover:text-rose-600 underline underline-offset-2">
            {t('section.compare.outro.bali', 'Mexico vs. Bali')}
          </Link>
          ,{' '}
          <Link href="/pt/compare/mexico-vs-maldives" className="text-rose-500 hover:text-rose-600 underline underline-offset-2">
            {t('section.compare.outro.maldives', 'Mexico vs. Maldives')}
          </Link>
          {t('section.compare.outro2', ',')}{' '}
          <Link href="/pt/compare/mexico-vs-st-lucia" className="text-rose-500 hover:text-rose-600 underline underline-offset-2">
            {t('section.compare.outro.stLucia', 'Mexico vs. St. Lucia')}
          </Link>
          {t('section.compare.outro3', '. Or browse our')}{' '}
          <Link href="/pt/destinations/mexico" className="text-rose-500 hover:text-rose-600 underline underline-offset-2">
            {t('section.compare.outro.destLink', 'Mexico destination guide')}
          </Link>
          {t('section.compare.outro4', '.')}
        </p>
      </section>

      {/* 9. FAQ */}
      <section id="faq" className="bg-zinc-50 py-20">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-3">{t('section.faq.kicker', 'Section 09')}</p>
          <h2 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-6 leading-tight">
            {t('section.faq.h2', 'Frequently asked questions')}
          </h2>
          <div className="space-y-7 mt-10">
            {FAQ_INDICES.map((i) => (
              <details key={i} className="group border-b border-zinc-200 pb-5">
                <summary className="cursor-pointer font-medium text-zinc-900 text-lg flex justify-between items-start gap-4">
                  <span>{t(`faqs.${i}.question`, '')}</span>
                  <span className="text-rose-500 group-open:rotate-45 transition-transform shrink-0 font-light text-2xl leading-none">+</span>
                </summary>
                <p className="text-zinc-700 text-base leading-relaxed mt-3">{t(`faqs.${i}.answer`, '')}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <Image
          src="/images/hotels/belmond-maroma-resort-mexico/hero.webp"
          alt={t('cta.imageAlt', 'Find your Mexico honeymoon hotel')}
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
        <div className="relative max-w-4xl mx-auto px-6 text-white">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-300 mb-4">{t('cta.kicker', 'Now, the resort')}</p>
          <h2 className="font-display text-4xl sm:text-5xl leading-tight mb-5">
            {t('cta.h2.line1', 'Find the Mexico resort')} <br className="hidden sm:block" />{t('cta.h2.line2', 'that fits your budget.')}
          </h2>
          <p className="text-white/70 text-base leading-relaxed mb-8 max-w-xl">
            {t('cta.body', '')}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/pt/quiz"
              className="bg-rose-500 hover:bg-rose-600 text-white font-semibold text-sm px-8 py-4 rounded-full transition-colors shadow-xl"
            >
              {t('cta.button.primary', 'Take the quiz →')}
            </Link>
            <Link
              href="/pt/destinations/mexico"
              className="border border-white/30 backdrop-blur-md bg-white/5 hover:bg-white/10 text-white font-semibold text-sm px-8 py-4 rounded-full transition-colors"
            >
              {t('cta.button.secondary', 'See every Mexico resort')}
            </Link>
          </div>
        </div>
      </section>
    </article>
  )
}
