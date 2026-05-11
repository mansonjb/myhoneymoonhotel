import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { getLocalizedPageManifest, tm } from '@/lib/getLocalizedPageManifest'
import { buildAlternates } from '@/lib/alternates'

const SLUG = 'cape-verde-honeymoon-cost'
const m = getLocalizedPageManifest(SLUG, 'pt')
const t = (key: string, fallback = ''): string => tm(m, key, fallback)

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: t('metadata.title', 'Cape Verde Honeymoon Cost: 2026 Real Numbers'),
    description: t(
      'metadata.description',
      'How much a Barbados honeymoon really costs in 2026.',
    ),
    alternates: buildAlternates('/cape-verde-honeymoon-cost', 'pt'),
    openGraph: {
      title: t('metadata.ogTitle', 'Cape Verde Honeymoon Cost — 2026 Real Numbers'),
      description: t(
        'metadata.ogDescription',
        'Four budget tiers, real hotel breakdowns, hidden costs.',
      ),
      url: 'https://myhoneymoonhotel.com/pt/cape-verde-honeymoon-cost',
      siteName: 'MyHoneymoonHotel',
      images: [
        {
          url: 'https://myhoneymoonhotel.com/images/hotels/hyatt-regency-cabo-verde-cape-verde/hero.webp',
          width: 1600,
          height: 900,
          alt: t('metadata.ogImageAlt', 'Hyatt Regency Cabo Verde'),
        },
      ],
      locale: 'pt_PT',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('metadata.twitterTitle', 'Cape Verde Honeymoon Cost — 2026 Real Numbers'),
      description: t(
        'metadata.twitterDescription',
        'Four budget tiers, real hotel breakdowns, hidden costs.',
      ),
      images: ['https://myhoneymoonhotel.com/images/hotels/hyatt-regency-cabo-verde-cape-verde/hero.webp'],
    },
  }
}

const FAQ_INDICES = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const TIER_INDICES = [0, 1, 2, 3]
const DRIVER_INDICES = [0, 1, 2, 3, 4]
const LINE_ITEM_INDICES = Array.from({ length: 20 }, (_, i) => i)
const SAMPLE_INDICES = [0, 1, 2]
const SAMPLE_BULLET_COUNTS = [10, 10, 10]
const SEASON_INDICES = [0, 1, 2, 3, 4, 5, 6, 7]
const TIP_INDICES = [0, 1, 2, 3, 4, 5, 6, 7]
const HIDDEN_INDICES = [0, 1, 2, 3, 4, 5, 6, 7, 8]
const COMPARISON_INDICES = [0, 1, 2, 3]

export default function CapeVerdeHoneymoonCostPagePT() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: t('metadata.ogTitle', 'Cape Verde Honeymoon Cost — 2026 Real Numbers'),
    description: t('metadata.description', ''),
    image: 'https://myhoneymoonhotel.com/images/hotels/hyatt-regency-cabo-verde-cape-verde/hero.webp',
    inLanguage: 'pt',
    author: { '@type': 'Organization', name: 'MyHoneymoonHotel', url: 'https://myhoneymoonhotel.com' },
    publisher: {
      '@type': 'Organization',
      name: 'MyHoneymoonHotel',
      logo: { '@type': 'ImageObject', url: 'https://myhoneymoonhotel.com/logo.png' },
    },
    datePublished: '2026-03-04',
    dateModified: '2026-05-11',
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://myhoneymoonhotel.com/pt/cape-verde-honeymoon-cost' },
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
      { '@type': 'ListItem', position: 1, name: t('schema.breadcrumb.home', 'Inicio'), item: 'https://myhoneymoonhotel.com/es' },
      {
        '@type': 'ListItem',
        position: 2,
        name: t('schema.breadcrumb.page', 'Coste de luna de miel en Cabo Verde'),
        item: 'https://myhoneymoonhotel.com/pt/cape-verde-honeymoon-cost',
      },
    ],
  }

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="relative h-[70vh] min-h-[520px] flex items-end overflow-hidden">
        <Image
          src="/images/hotels/hyatt-regency-cabo-verde-cape-verde/hero.webp"
          alt={t('hero.imageAlt', 'Hyatt Regency Cabo Verde')}
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={75}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="relative z-10 px-8 sm:px-12 pb-16 max-w-4xl">
          <p className="text-white/60 text-xs tracking-[0.2em] uppercase mb-5">{t('hero.kicker', 'La guía de costes')}</p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.05] mb-6">
            {t('hero.h1.line1', 'Coste de luna de miel')}<br />{t('hero.h1.line2', 'en Cabo Verde — 2026.')}
          </h1>
          <p className="text-white/75 text-base sm:text-lg max-w-2xl leading-relaxed">
            {t('hero.intro', '')}
          </p>
        </div>
      </section>

      <nav aria-label="Breadcrumb" className="max-w-4xl mx-auto px-6 pt-8 text-xs text-zinc-500">
        <Link href="/es" className="hover:text-zinc-900">{t('breadcrumb.home', 'Inicio')}</Link>
        <span className="mx-2">/</span>
        <span className="text-zinc-900">{t('breadcrumb.current', 'Coste de luna de miel en Cabo Verde')}</span>
      </nav>

      <section className="max-w-3xl mx-auto px-6 py-14 prose prose-zinc">
        <p className="text-lg text-zinc-700 leading-relaxed">
          {t('intro.p1.before', '')} <strong>{t('intro.p1.bold', '$4000 a $28 000+')}</strong> {t('intro.p1.after', '')}
        </p>
        <p className="text-base text-zinc-700 leading-relaxed mt-5">
          {t('intro.p2.before', '')}{' '}
          <Link href="/pt/barbados-honeymoon-cost" className="text-rose-500 hover:text-rose-600 underline underline-offset-2">
            {t('intro.p2.linkText1', 'Barbados')}
          </Link>
          {t('intro.p2.middle', '. Para la lista de verificación previa al viaje más amplia, consulte nuestra')}{' '}
          <Link href="/pt/how-to-plan-a-honeymoon" className="text-rose-500 hover:text-rose-600 underline underline-offset-2">
            {t('intro.p2.linkText2', 'guía completa de planificación de luna de miel')}
          </Link>
          {t('intro.p2.after', '.')}
        </p>

        <div className="not-prose my-12 bg-zinc-50 border border-zinc-100 rounded-2xl p-7">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-4">{t('toc.kicker', 'En esta guía')}</p>
          <ol className="text-sm text-zinc-700 space-y-2 leading-relaxed list-decimal pl-5">
            <li><a className="hover:text-rose-500" href="#tldr">{t('toc.1', '')}</a></li>
            <li><a className="hover:text-rose-500" href="#drivers">{t('toc.2', '')}</a></li>
            <li><a className="hover:text-rose-500" href="#line-items">{t('toc.3', '')}</a></li>
            <li><a className="hover:text-rose-500" href="#samples">{t('toc.4', '')}</a></li>
            <li><a className="hover:text-rose-500" href="#season">{t('toc.5', '')}</a></li>
            <li><a className="hover:text-rose-500" href="#tips">{t('toc.6', '')}</a></li>
            <li><a className="hover:text-rose-500" href="#hidden">{t('toc.7', '')}</a></li>
            <li><a className="hover:text-rose-500" href="#compare">{t('toc.8', '')}</a></li>
            <li><a className="hover:text-rose-500" href="#faq">{t('toc.9', '')}</a></li>
          </ol>
        </div>
      </section>

      <section id="tldr" className="bg-zinc-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-3">{t('section.tldr.kicker', 'Sección 01')}</p>
          <h2 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-6 leading-tight">
            {t('section.tldr.h2', '')}
          </h2>
          <p className="text-zinc-700 text-base leading-relaxed mb-10">
            {t('section.tldr.intro', '')}
          </p>

          <div className="overflow-x-auto -mx-6 px-6">
            <table className="w-full text-sm bg-white border border-zinc-100 rounded-2xl overflow-hidden">
              <thead className="bg-zinc-100 text-zinc-700">
                <tr>
                  <th className="text-left p-4 font-semibold">{t('section.tldr.col.tier', 'Categoría')}</th>
                  <th className="text-left p-4 font-semibold">{t('section.tldr.col.range', 'Total 7 noches')}</th>
                  <th className="text-left p-4 font-semibold">{t('section.tldr.col.examples', 'Hoteles de muestra')}</th>
                  <th className="text-left p-4 font-semibold">{t('section.tldr.col.transfer', 'Traslado')}</th>
                  <th className="text-left p-4 font-semibold">{t('section.tldr.col.villa', 'Habitación')}</th>
                  <th className="text-left p-4 font-semibold">{t('section.tldr.col.meal', 'Plan de comidas')}</th>
                </tr>
              </thead>
              <tbody>
                {TIER_INDICES.map((i) => (
                  <tr key={i} className="border-t border-zinc-100 align-top">
                    <td className="p-4 font-semibold text-zinc-900">{t(`tier.${i}.tier`, '')}</td>
                    <td className="p-4 text-rose-500 font-semibold tabular-nums">{t(`tier.${i}.range`, '')}</td>
                    <td className="p-4 text-zinc-700">{t(`tier.${i}.examples`, '')}</td>
                    <td className="p-4 text-zinc-700">{t(`tier.${i}.transfer`, '')}</td>
                    <td className="p-4 text-zinc-700">{t(`tier.${i}.villa`, '')}</td>
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

      <section id="drivers" className="max-w-3xl mx-auto px-6 py-20">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-3">{t('section.drivers.kicker', 'Sección 02')}</p>
        <h2 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-6 leading-tight">
          {t('section.drivers.h2', '')}
        </h2>
        <p className="text-zinc-700 text-base leading-relaxed mb-10">
          {t('section.drivers.intro', '')}
        </p>
        <div className="space-y-9">
          {DRIVER_INDICES.map((i) => (
            <div key={i} className="border-l-2 border-rose-200 pl-6">
              <p className="text-xs font-mono text-rose-500 uppercase tracking-widest mb-1">{t('section.drivers.driverLabel', 'Impulsor')} {i + 1}</p>
              <h3 className="font-display text-2xl text-zinc-900 mb-3">{t(`driver.${i}.title`, '')}</h3>
              <p className="text-zinc-700 text-base leading-relaxed">{t(`driver.${i}.detail`, '')}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="line-items" className="bg-zinc-50 py-20">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-3">{t('section.lineItems.kicker', 'Sección 03')}</p>
          <h2 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-6 leading-tight">
            {t('section.lineItems.h2', '')}
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

      <section id="samples" className="max-w-3xl mx-auto px-6 py-20">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-3">{t('section.samples.kicker', 'Sección 04')}</p>
        <h2 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-6 leading-tight">
          {t('section.samples.h2', '')}
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
          <Link href="/pt/destinations/cape-verde" className="text-rose-500 hover:text-rose-600 underline underline-offset-2">
            {t('section.samples.outro.destLink', 'guía de destino de Cabo Verde')}
          </Link>
          {t('section.samples.outro2', '.')}
        </p>
      </section>

      <section id="season" className="bg-zinc-50 py-20">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-3">{t('section.season.kicker', 'Sección 05')}</p>
          <h2 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-6 leading-tight">
            {t('section.season.h2', '')}
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
              <strong>{t('section.season.callout.bold', 'La regla única:')}</strong> {t('section.season.callout.body', '')}
            </p>
          </div>
        </div>
      </section>

      <section id="tips" className="max-w-3xl mx-auto px-6 py-20">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-3">{t('section.tips.kicker', 'Sección 06')}</p>
        <h2 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-6 leading-tight">
          {t('section.tips.h2', '')}
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
      </section>

      <section id="hidden" className="bg-zinc-950 text-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">{t('section.hidden.kicker', 'Sección 07')}</p>
          <h2 className="font-display text-4xl sm:text-5xl mb-6 leading-tight">
            {t('section.hidden.h2', '')}
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

      <section id="compare" className="max-w-3xl mx-auto px-6 py-20">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-3">{t('section.compare.kicker', 'Sección 08')}</p>
        <h2 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-6 leading-tight">
          {t('section.compare.h2', '')}
        </h2>
        <p className="text-zinc-700 text-base leading-relaxed mb-10">
          {t('section.compare.intro', '')}
        </p>

        <div className="overflow-x-auto -mx-6 px-6">
          <table className="w-full text-sm bg-white border border-zinc-100 rounded-2xl overflow-hidden">
            <thead className="bg-zinc-100 text-zinc-700">
              <tr>
                <th className="text-left p-4 font-semibold">{t('section.compare.col.dest', 'Destino')}</th>
                <th className="text-left p-4 font-semibold">{t('section.compare.col.total', 'Total 7 noches')}</th>
                <th className="text-left p-4 font-semibold">{t('section.compare.col.flight', 'Tiempo de vuelo')}</th>
                <th className="text-left p-4 font-semibold">{t('section.compare.col.signature', 'Sello distintivo')}</th>
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
          <Link href="/pt/barbados-honeymoon-cost" className="text-rose-500 hover:text-rose-600 underline underline-offset-2">
            {t('section.compare.outro.barbados', 'Custo de lua de mel em Barbados')}
          </Link>
          {t('section.compare.outro2', '. O lance una comparación directa en nuestro')}{' '}
          <Link href="/pt/compare" className="text-rose-500 hover:text-rose-600 underline underline-offset-2">
            {t('section.compare.outro.compareLink', 'comparador')}
          </Link>
          {t('section.compare.outro3', '.')}
        </p>
      </section>

      <section id="faq" className="bg-zinc-50 py-20">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-3">{t('section.faq.kicker', 'Sección 09')}</p>
          <h2 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-6 leading-tight">
            {t('section.faq.h2', 'Preguntas frecuentes')}
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

      <section className="relative py-24 overflow-hidden">
        <Image
          src="/images/hotels/hyatt-regency-cabo-verde-cape-verde/hero.webp"
          alt={t('cta.imageAlt', 'Encuentre su hotel de luna de miel en Cabo Verde')}
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
        <div className="relative max-w-4xl mx-auto px-6 text-white">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-300 mb-4">{t('cta.kicker', 'Ahora, el resort')}</p>
          <h2 className="font-display text-4xl sm:text-5xl leading-tight mb-5">
            {t('cta.h2.line1', 'Encuentre el resort en Cabo Verde')} <br className="hidden sm:block" />{t('cta.h2.line2', 'que se ajuste a su presupuesto.')}
          </h2>
          <p className="text-white/70 text-base leading-relaxed mb-8 max-w-xl">
            {t('cta.body', '')}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/pt/quiz"
              className="bg-rose-500 hover:bg-rose-600 text-white font-semibold text-sm px-8 py-4 rounded-full transition-colors shadow-xl"
            >
              {t('cta.button.primary', 'Hacer el test →')}
            </Link>
            <Link
              href="/pt/destinations/cape-verde"
              className="border border-white/30 backdrop-blur-md bg-white/5 hover:bg-white/10 text-white font-semibold text-sm px-8 py-4 rounded-full transition-colors"
            >
              {t('cta.button.secondary', 'Ver todos los resorts de Cabo Verde')}
            </Link>
          </div>
        </div>
      </section>
    </article>
  )
}
