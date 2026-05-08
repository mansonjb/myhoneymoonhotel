import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getHotelsByExperience } from '@/lib/hotels'
import HotelCard from '@/components/HotelCard'
import { getLocalizedExperience } from '@/lib/getLocalizedExperience'
import { EXPERIENCE_META } from '@/../data/experiences'
import { getMessages, type Messages } from '@/i18n/getMessages'
import { buildAlternates, localizedPath } from '@/lib/alternates'
import type { Locale } from '@/i18n/locales'

const SITE_URL = 'https://myhoneymoonhotel.com'

function fmt(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? ''))
}

function tx(messages: Messages, key: string, fallback: string): string {
  const v = (messages as unknown as Record<string, unknown>)[key]
  return typeof v === 'string' && v.length > 0 ? v : fallback
}

const MONTH_COLORS: Record<string, string> = {
  Peak: 'bg-rose-600 text-white',
  Good: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
  Shoulder: 'bg-amber-50 text-amber-700 border border-amber-200',
  Low: 'bg-zinc-50 text-zinc-400 border border-zinc-100',
  Avoid: 'bg-red-50 text-red-600 border border-red-100',
}

export async function buildExperienceMetadata(type: string, locale: Locale): Promise<Metadata> {
  const meta = getLocalizedExperience(type, locale)
  if (!meta) {
    return {
      title: `${type.replace(/-/g, ' ')} Honeymoon Hotels`,
      alternates: buildAlternates(`/experiences/${type}`, locale),
    }
  }
  const titleSuffix = locale === 'en'
    ? 'Honeymoon Hotels — Expert Guide & Scored Properties'
    : locale === 'es'
      ? 'Hoteles para luna de miel — Guía experta y propiedades evaluadas'
      : 'Hotéis para lua de mel — Guia especializado e propriedades avaliadas'
  const description = meta.intro.slice(0, 160)
  const heroUrl = meta.hero.startsWith('http') ? meta.hero : `${SITE_URL}${meta.hero}`
  const title = `${meta.label} ${titleSuffix}`
  return {
    title,
    description,
    alternates: buildAlternates(`/experiences/${type}`, locale),
    openGraph: {
      title: `${meta.label} ${locale === 'en' ? 'Honeymoon Hotels' : locale === 'es' ? 'Hoteles para luna de miel' : 'Hotéis para lua de mel'}`,
      description,
      url: `${SITE_URL}${localizedPath(`/experiences/${type}`, locale)}`,
      type: 'website',
      siteName: 'My Honeymoon Hotel',
      images: [{ url: heroUrl, width: 1200, height: 630, alt: meta.label }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [heroUrl],
    },
  }
}

export async function renderExperiencePage(type: string, locale: Locale) {
  const hotels = getHotelsByExperience(type)
  const meta = getLocalizedExperience(type, locale)

  if (hotels.length === 0 && !meta) notFound()

  const m = getMessages(locale)
  const sortedHotels = [...hotels].sort((a, b) => b.honeymoon_score - a.honeymoon_score)
  const topThree = sortedHotels.slice(0, 3)

  const minPrice = hotels.length ? Math.min(...hotels.map(h => h.price_per_night_usd.min)) : 0
  const maxPrice = hotels.length ? Math.max(...hotels.map(h => h.price_per_night_usd.max)) : 0
  const avgScore = hotels.length ? Math.round(hotels.reduce((s, h) => s + h.honeymoon_score, 0) / hotels.length) : 0
  const topScore = hotels.length ? Math.max(...hotels.map(h => h.honeymoon_score)) : 0
  const uniqueDestinations = new Set(hotels.map(h => h.destination)).size

  const liveStats = [
    { icon: meta?.stats?.[0]?.icon ?? '✨', value: String(hotels.length), label: tx(m, 'exp.statScoredProperties', 'Scored Properties') },
    { icon: '💰', value: hotels.length ? `$${minPrice.toLocaleString()}–$${maxPrice.toLocaleString()}` : '—', label: tx(m, 'exp.statPriceRange', 'Per Night Range') },
    { icon: '📍', value: String(uniqueDestinations), label: tx(m, 'exp.statDestinations', 'Destinations') },
    { icon: '❤️', value: hotels.length ? `${avgScore}/100` : '—', label: fmt(tx(m, 'exp.statAvgScore', 'Avg Score · Top {top}'), { top: topScore }) },
  ]

  const pageUrl = `${SITE_URL}${localizedPath(`/experiences/${type}`, locale)}`
  const homeUrl = `${SITE_URL}${localizedPath('/', locale)}`
  const homePath = localizedPath('/', locale)
  const experienceName = meta?.label ?? type.replace(/-/g, ' ')

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: tx(m, 'generic.home', 'Home'), item: homeUrl },
      { '@type': 'ListItem', position: 2, name: tx(m, 'exp.crumbExperiences', 'Experiences'), item: homeUrl },
      { '@type': 'ListItem', position: 3, name: experienceName, item: pageUrl },
    ],
  }

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: sortedHotels.map((h, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${SITE_URL}${localizedPath(`/hotels/${h.slug}`, locale)}`,
      name: h.name,
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
    <div className="bg-white">

      {/* ── HERO ── */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        {meta?.hero && (
          <>
            <Image src={meta.hero} alt={meta.label} fill priority className="object-cover" sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
          </>
        )}
        <nav className="absolute top-6 left-6 sm:left-12 flex items-center gap-2 text-white/60 text-xs">
          <Link href={homePath} className="hover:text-white transition-colors">{tx(m, 'generic.home', 'Home')}</Link>
          <span>/</span>
          <span className="text-white/40">{tx(m, 'exp.crumbExperiences', 'Experiences')}</span>
          <span>/</span>
          <span className="text-white/70 capitalize">{experienceName}</span>
        </nav>
        <div className="absolute bottom-10 left-6 sm:left-12 max-w-2xl">
          <p className="text-white/60 text-xs tracking-[0.2em] uppercase mb-3">{tx(m, 'exp.kickerGuide', 'Experience Guide')}</p>
          <h1 className="font-display text-5xl sm:text-7xl text-white mb-4 leading-none">{experienceName}</h1>
          {meta?.tagline && <p className="text-white/70 text-lg max-w-xl leading-relaxed">{meta.tagline}</p>}
        </div>
      </section>

      {/* ── AT A GLANCE CARDS ── */}
      {hotels.length > 0 && (
        <div className="max-w-6xl mx-auto px-6 sm:px-12 -mt-10 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {liveStats.map((s, i) => (
              <div key={i} className="bg-white border border-zinc-100 rounded-2xl px-5 py-4 shadow-lg">
                <div className="text-2xl mb-1">{s.icon}</div>
                <div className="font-display text-xl text-zinc-900">{s.value}</div>
                <div className="text-zinc-400 text-xs">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto px-6 sm:px-12 space-y-20 py-20 pb-32">

        {/* ── INTRO + PERFECT FOR / SKIP ── */}
        {meta && (
          <div className="grid lg:grid-cols-[1fr_340px] gap-12">
            <section>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">{tx(m, 'exp.kickerExpertView', 'The Expert View')}</p>
              <p className="text-zinc-600 text-lg leading-relaxed mb-8">{meta.intro}</p>
            </section>
            <div className="space-y-4">
              <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-5">
                <div className="text-xs font-semibold uppercase tracking-wider text-emerald-700 mb-3">{tx(m, 'exp.perfectIfYou', 'Perfect if you…')}</div>
                <ul className="space-y-2">
                  {meta.perfectFor.map((p, i) => <li key={i} className="flex gap-2 text-sm text-emerald-800"><span className="text-emerald-500 shrink-0 mt-0.5">✓</span>{p}</li>)}
                </ul>
              </div>
              <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5">
                <div className="text-xs font-semibold uppercase tracking-wider text-amber-700 mb-3">{tx(m, 'exp.skipItIf', 'Skip it if…')}</div>
                <ul className="space-y-2">
                  {meta.skipIf.map((s, i) => <li key={i} className="flex gap-2 text-sm text-amber-800"><span className="text-amber-500 shrink-0 mt-0.5">→</span>{s}</li>)}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* ── TOP REASONS ── */}
        {meta?.reasons && (
          <section>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">{tx(m, 'exp.kickerWhy', 'Why This Experience')}</p>
            <h2 className="font-display text-3xl sm:text-4xl mb-8">{fmt(tx(m, 'exp.whyTitle', 'Why couples choose {label} for their honeymoon'), { label: meta.label.toLowerCase() })}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {meta.reasons.map((r, i) => (
                <div key={i} className="border border-zinc-100 rounded-2xl p-6 hover:border-zinc-300 transition-colors">
                  <div className="font-display text-4xl text-zinc-100 mb-3 leading-none">0{i + 1}</div>
                  <h3 className="font-semibold text-zinc-900 mb-2">{r.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{r.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── BEST DESTINATIONS ── */}
        {meta?.destinations && (
          <section>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">{tx(m, 'exp.kickerWhereToGo', 'Where to Go')}</p>
            <h2 className="font-display text-3xl sm:text-4xl mb-8">{fmt(tx(m, 'exp.bestDestinations', 'Best destinations for {label}'), { label: meta.label.toLowerCase() })}</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {meta.destinations.map((d, i) => (
                <Link key={i} href={localizedPath(`/destinations/${d.slug}`, locale)} className="group border border-zinc-100 rounded-2xl p-6 hover:border-zinc-900 hover:shadow-md transition-all">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="font-semibold text-zinc-900 group-hover:text-rose-600 transition-colors">{d.name}</h3>
                    <span className="shrink-0 text-xs bg-zinc-100 text-zinc-500 px-2.5 py-1 rounded-full">{d.budget}</span>
                  </div>
                  <p className="text-zinc-500 text-sm leading-relaxed mb-3">{d.why}</p>
                  <div className="text-xs text-zinc-400"><span className="font-medium text-zinc-600">{tx(m, 'exp.bestForLabel', 'Best for:')}</span> {d.bestFor}</div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* ── MONTH-BY-MONTH ── */}
        {meta?.months && (
          <section>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">{tx(m, 'exp.kickerWhenToGo', 'When to Go')}</p>
            <h2 className="font-display text-3xl sm:text-4xl mb-8">{tx(m, 'exp.monthByMonth', 'Month-by-month guide')}</h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-2">
              {meta.months.map((mn, i) => (
                <div key={i} className={`rounded-xl p-3 ${MONTH_COLORS[mn.verdict] ?? 'bg-zinc-50'}`}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-sm">{mn.month}</span>
                    <span>{mn.emoji}</span>
                  </div>
                  <div className="text-xs font-medium mb-1">{mn.verdict}</div>
                  <p className="text-xs opacity-75 leading-tight">{mn.note}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── BUDGET TIERS ── */}
        {meta?.budgetTiers && (
          <section>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">{tx(m, 'exp.kickerBudget', 'Budget Guide')}</p>
            <h2 className="font-display text-3xl sm:text-4xl mb-8">{tx(m, 'exp.budgetTitle', 'What your budget buys')}</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {meta.budgetTiers.map((tier, i) => (
                <div key={i} className={`rounded-2xl p-6 ${i === 1 ? 'bg-rose-700 text-white' : 'border border-zinc-100'}`}>
                  <div className={`text-xs font-semibold tracking-widest uppercase mb-1 ${i === 1 ? 'text-rose-200' : 'text-rose-400'}`}>{tier.tier}</div>
                  <div className={`font-display text-2xl mb-3 ${i === 1 ? 'text-white' : 'text-zinc-900'}`}>{tier.range}</div>
                  <p className={`text-sm leading-relaxed mb-3 ${i === 1 ? 'text-rose-100' : 'text-zinc-500'}`}>{tier.desc}</p>
                  <p className={`text-xs ${i === 1 ? 'text-rose-200' : 'text-zinc-400'}`}><span className="font-medium">{tx(m, 'exp.examplesLabel', 'Examples:')}</span> {tier.hotels}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── HOTEL GRID ── */}
        <section id="hotels">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-2">{tx(m, 'exp.kickerScored', 'Scored & Ranked')}</p>
              <h2 className="font-display text-3xl sm:text-4xl">{fmt(tx(m, 'exp.topHotels', 'Top {label} hotels'), { label: experienceName })}</h2>
            </div>
            <p className="text-zinc-400 text-sm hidden sm:block">{fmt(tx(m, 'exp.propertiesSorted', '{n} properties · sorted by score'), { n: hotels.length })}</p>
          </div>
          {hotels.length === 0 ? (
            <div className="border border-zinc-100 rounded-2xl p-12 text-center text-zinc-400">
              <p className="text-lg mb-2">{tx(m, 'exp.morePropertiesSoon', 'More properties coming soon')}</p>
              <p className="text-sm">{tx(m, 'exp.morePropertiesSubtitle', 'We score new hotels weekly — check back shortly.')}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {sortedHotels.map(h => <HotelCard key={h.slug} hotel={h} locale={locale} />)}
            </div>
          )}
        </section>

        {/* ── COMPARISON TABLE ── */}
        {topThree.length >= 2 && (
          <section>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">{tx(m, 'exp.kickerCompare', 'Quick Comparison')}</p>
            <h2 className="font-display text-3xl sm:text-4xl mb-8">{tx(m, 'exp.top3Compared', 'Top 3 compared')}</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-zinc-100">
                    <th className="text-left py-3 pr-4 text-zinc-400 font-normal">{tx(m, 'exp.colProperty', 'Property')}</th>
                    <th className="text-left py-3 pr-4 text-zinc-400 font-normal">{tx(m, 'exp.colScore', 'Score')}</th>
                    <th className="text-left py-3 pr-4 text-zinc-400 font-normal">{tx(m, 'exp.colDestination', 'Destination')}</th>
                    <th className="text-left py-3 pr-4 text-zinc-400 font-normal">{tx(m, 'exp.colFrom', 'From')}</th>
                    <th className="text-left py-3 text-zinc-400 font-normal">{tx(m, 'card.adultsOnly', 'Adults-Only')}</th>
                  </tr>
                </thead>
                <tbody>
                  {topThree.map((h, i) => (
                    <tr key={h.slug} className="border-b border-zinc-50 hover:bg-zinc-50 transition-colors">
                      <td className="py-4 pr-4 font-medium">
                        <Link href={localizedPath(`/hotels/${h.slug}`, locale)} className="hover:text-rose-600 transition-colors capitalize">{h.name}</Link>
                        {i === 0 && <span className="ml-2 text-xs bg-rose-500 text-white px-2 py-0.5 rounded-full">{tx(m, 'exp.topPick', 'Top pick')}</span>}
                      </td>
                      <td className="py-4 pr-4"><span className="font-display text-lg">{h.honeymoon_score}</span><span className="text-zinc-300">/100</span></td>
                      <td className="py-4 pr-4 capitalize text-zinc-500">{h.destination.replace(/-/g, ' ')}</td>
                      <td className="py-4 pr-4 text-zinc-500">${h.price_per_night_usd.min}{tx(m, 'card.perNight', '/night')}</td>
                      <td className="py-4">{h.adults_only ? <span className="text-emerald-600">✓ {tx(m, 'exp.yes', 'Yes')}</span> : <span className="text-zinc-300">{tx(m, 'exp.no', 'No')}</span>}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* ── BOOKING CHECKLIST ── */}
        {meta?.checklist && (
          <section>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">{tx(m, 'exp.kickerBuyingGuide', 'Buying Guide')}</p>
            <h2 className="font-display text-3xl sm:text-4xl mb-8">{fmt(tx(m, 'exp.buyingGuideTitle', 'How to choose and book the right {label} hotel'), { label: meta.label.toLowerCase() })}</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {meta.checklist.map((cl, i) => (
                <div key={i} className="bg-zinc-50 border border-zinc-100 rounded-2xl p-6">
                  <h3 className="font-semibold text-zinc-900 mb-4">{cl.title}</h3>
                  <ul className="space-y-2">
                    {cl.items.map((item, j) => (
                      <li key={j} className="flex gap-2.5 text-sm text-zinc-600">
                        <span className="text-zinc-300 shrink-0">—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── EXPERT TIPS ── */}
        {meta?.expertTips && (
          <section>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">{tx(m, 'exp.kickerExpertKnowledge', 'Expert Knowledge')}</p>
            <h2 className="font-display text-3xl sm:text-4xl mb-8">{tx(m, 'exp.expertKnowledgeTitle', "What most couples don't know before booking")}</h2>
            <div className="space-y-6">
              {meta.expertTips.map((tip, i) => (
                <div key={i} className="flex gap-6">
                  <div className="font-display text-5xl text-zinc-100 leading-none shrink-0 w-14 text-right">{String(i + 1).padStart(2, '0')}</div>
                  <p className="text-zinc-600 text-[15px] leading-relaxed pt-1">{tip}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── FAQ ── */}
        {meta?.faqs && (
          <section>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">{tx(m, 'exp.kickerCommonQuestions', 'Common Questions')}</p>
            <h2 className="font-display text-3xl sm:text-4xl mb-8">{tx(m, 'exp.faqs', 'Frequently asked questions')}</h2>
            <div className="space-y-3">
              {meta.faqs.map((faq, i) => (
                <details key={i} className="group border border-zinc-100 rounded-2xl overflow-hidden">
                  <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-medium text-zinc-900 text-sm hover:bg-zinc-50 transition-colors list-none">
                    <span>{faq.q}</span>
                    <svg className="w-4 h-4 text-zinc-400 shrink-0 ml-4 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
                  </summary>
                  <div className="px-6 pb-6 pt-2">
                    <p className="text-zinc-500 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </section>
        )}

        {/* ── RELATED EXPERIENCES ── */}
        {meta?.related && (
          <section>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">{tx(m, 'exp.kickerExploreMore', 'Explore More')}</p>
            <h2 className="font-display text-3xl mb-6">{tx(m, 'exp.relatedExperiences', 'Related experiences')}</h2>
            <div className="flex flex-wrap gap-3">
              {meta.related.map(r => {
                // Use localized label if overlay exists; otherwise English base.
                const relLocalized = getLocalizedExperience(r, locale)
                const relMeta = relLocalized ?? EXPERIENCE_META[r]
                return relMeta ? (
                  <Link key={r} href={localizedPath(`/experiences/${r}`, locale)}
                    className="border border-zinc-200 hover:border-zinc-900 hover:shadow-sm text-zinc-700 hover:text-zinc-900 px-6 py-3 rounded-full text-sm font-medium transition-all">
                    {relMeta.label}
                  </Link>
                ) : null
              })}
            </div>
          </section>
        )}

      </div>
    </div>
    </>
  )
}
