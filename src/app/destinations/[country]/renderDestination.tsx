import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getHotelsByDestination } from '@/lib/hotels'
import HotelCard from '@/components/HotelCard'
import Stay22MapWidget from '@/components/Stay22MapWidget'
import { getLocalizedDestination } from '@/lib/getLocalizedDestination'
import { getMessages, type Messages } from '@/i18n/getMessages'
import { buildAlternates, localizedPath } from '@/lib/alternates'
import type { Locale } from '@/i18n/locales'

const SITE_URL = 'https://myhoneymoonhotel.com'

function fmt(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? ''))
}

// Lenient lookup: returns the translated string if present, else `fallback`.
function tx(messages: Messages, key: string, fallback: string): string {
  const v = (messages as unknown as Record<string, unknown>)[key]
  return typeof v === 'string' && v.length > 0 ? v : fallback
}

export async function buildDestinationMetadata(country: string, locale: Locale): Promise<Metadata> {
  const meta = getLocalizedDestination(country, locale)
  const m = getMessages(locale)
  const name = country.replace(/-/g, ' ')
  const proper = name.charAt(0).toUpperCase() + name.slice(1)

  const titleEn = `Best Honeymoon Hotels in ${proper} — Scored & Ranked | MyHoneymoonHotel`
  const title = locale === 'en'
    ? titleEn
    : fmt(tx(m, 'dest.metaTitle', 'Best Honeymoon Hotels in {dest} | MyHoneymoonHotel'), { dest: proper })
  const description = meta?.tagline ?? `The definitive guide to honeymoon hotels in ${proper}.`
  const heroUrl = meta?.hero
    ? (meta.hero.startsWith('http') ? meta.hero : `${SITE_URL}${meta.hero}`)
    : undefined

  return {
    title,
    description,
    alternates: buildAlternates(`/destinations/${country}`, locale),
    openGraph: {
      title,
      description,
      url: `${SITE_URL}${localizedPath(`/destinations/${country}`, locale)}`,
      type: 'website',
      siteName: 'My Honeymoon Hotel',
      images: heroUrl ? [{ url: heroUrl, width: 1200, height: 630, alt: `Honeymoon hotels in ${proper}` }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: heroUrl ? [heroUrl] : undefined,
    },
  }
}

export async function renderDestinationPage(country: string, locale: Locale) {
  const hotels = getHotelsByDestination(country)
  const meta = getLocalizedDestination(country, locale)
  const m = getMessages(locale)
  const destName = country.replace(/-/g, ' ')
  const destProper = destName.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')

  if (hotels.length === 0) notFound()

  const avgScore = Math.round(hotels.reduce((a, b) => a + b.honeymoon_score, 0) / hotels.length)
  const avgPrice = Math.round(hotels.reduce((a, b) => a + b.price_per_night_usd.min, 0) / hotels.length)
  const adultsOnlyCount = hotels.filter(h => h.adults_only).length
  const topHotels = [...hotels].sort((a, b) => b.honeymoon_score - a.honeymoon_score).slice(0, 3)
  const sortedHotels = [...hotels].sort((a, b) => b.honeymoon_score - a.honeymoon_score)

  const pageUrl = `${SITE_URL}${localizedPath(`/destinations/${country}`, locale)}`
  const firstHotelHero = sortedHotels[0]?.photos.find(p => p.type === 'hero')?.url ?? sortedHotels[0]?.photos[0]?.url
  const heroImage = meta?.hero
    ? (meta.hero.startsWith('http') ? meta.hero : `${SITE_URL}${meta.hero}`)
    : firstHotelHero
  const destinationDescription = meta?.intro ?? `Honeymoon hotels in ${destProper}.`

  const homeUrl = `${SITE_URL}${localizedPath('/', locale)}`

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: tx(m, 'generic.home', 'Home'), item: homeUrl },
      { '@type': 'ListItem', position: 2, name: tx(m, 'nav.destinations', 'Destinations'), item: homeUrl },
      { '@type': 'ListItem', position: 3, name: destProper, item: pageUrl },
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

  const touristDestinationSchema = {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    name: destProper,
    description: destinationDescription,
    url: pageUrl,
    ...(heroImage && { image: heroImage }),
  }

  const homePath = localizedPath('/', locale)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(touristDestinationSchema) }} />
    <div>

      {/* ── HERO ── */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        {meta?.hero ? (
          <Image src={meta.hero} alt={destProper} fill priority className="object-cover" sizes="100vw" />
        ) : (
          <div className="w-full h-full bg-zinc-200" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

        <nav className="absolute top-6 left-8 sm:left-12 flex items-center gap-2 text-white/50 text-xs">
          <Link href={homePath} className="hover:text-white transition-colors">{tx(m, 'generic.home', 'Home')}</Link>
          <span>/</span>
          <Link href={homePath} className="hover:text-white transition-colors">{tx(m, 'nav.destinations', 'Destinations')}</Link>
          <span>/</span>
          <span className="text-white/70 capitalize">{destName}</span>
        </nav>

        <div className="absolute bottom-10 left-8 sm:left-12 max-w-2xl">
          <p className="text-white/60 text-xs tracking-[0.2em] uppercase mb-3">{tx(m, 'dest.kickerGuide', 'Honeymoon Guide')}</p>
          <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl text-white mb-4 capitalize">
            {destProper}
          </h1>
          {meta?.tagline && (
            <p className="text-white/75 text-lg leading-relaxed max-w-lg">{meta.tagline}</p>
          )}
        </div>
      </section>

      {/* ── AT A GLANCE CARDS ── */}
      <section className="max-w-6xl mx-auto px-6 sm:px-12 -mt-10 relative z-10 mb-16">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: tx(m, 'dest.bestTime', 'Best Time'), value: meta?.bestTime ?? 'Year-round', icon: '📅' },
            { label: tx(m, 'dest.avgPrice', 'Avg Price'), value: `$${avgPrice.toLocaleString()}+${tx(m, 'card.perNight', '/night')}`, icon: '💰' },
            { label: tx(m, 'dest.flightFromEU', 'Flight from EU'), value: meta?.flightFrom ?? 'Varies', icon: '✈️' },
            { label: tx(m, 'dest.avgHoneymoonScore', 'Avg Honeymoon Score'), value: `${avgScore}/100`, icon: '❤️' },
          ].map(f => (
            <div key={f.label} className="bg-white border border-zinc-100 rounded-2xl px-5 py-4 shadow-md">
              <div className="text-2xl mb-2">{f.icon}</div>
              <div className="font-semibold text-zinc-900 text-sm">{f.value}</div>
              <div className="text-zinc-400 text-xs mt-0.5">{f.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-6xl mx-auto px-6 sm:px-12 space-y-24 pb-32">

        {/* ── INTRO + QUICK FACTS ── */}
        {meta && (
          <section className="grid lg:grid-cols-[1fr_300px] gap-12 items-start">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-4">{tx(m, 'dest.kickerWhyHere', 'Why Here for Your Honeymoon')}</p>
              <p className="text-zinc-700 text-xl leading-relaxed mb-8">{meta.intro}</p>
            </div>
            <div className="bg-zinc-50 rounded-2xl p-6 space-y-4 text-sm sticky top-6">
              <h3 className="font-semibold text-zinc-900 text-base mb-4">{tx(m, 'dest.atAGlance', 'At a Glance')}</h3>
              {[
                { label: tx(m, 'dest.lblCurrency', 'Currency'), value: meta.currency },
                { label: tx(m, 'dest.lblLanguage', 'Language'), value: meta.language },
                { label: tx(m, 'dest.lblTimezone', 'Time zone'), value: meta.timezone },
                { label: tx(m, 'dest.lblBestTime', 'Best time'), value: meta.bestTime },
                { label: tx(m, 'dest.lblHotelsScored', 'Hotels scored'), value: `${hotels.length} ${tx(m, 'card.hotels', 'hotels')}` },
                { label: tx(m, 'dest.lblAdultsOnly', 'Adults-only options'), value: `${adultsOnlyCount}` },
              ].map(r => (
                <div key={r.label} className="flex justify-between gap-4 py-2 border-b border-zinc-100 last:border-0">
                  <span className="text-zinc-400">{r.label}</span>
                  <span className="text-zinc-700 font-medium text-right">{r.value}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── PERFECT FOR / SKIP IF ── */}
        {meta?.perfectFor && (
          <section>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">{tx(m, 'dest.kickerRightForYou', 'Is This Right for You?')}</p>
            <h2 className="font-display text-3xl sm:text-4xl mb-8">{fmt(tx(m, 'dest.titleForHoneymooners', '{dest} for Honeymooners'), { dest: destProper })}</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">✓</span>
                  <h3 className="font-semibold text-emerald-900">{tx(m, 'dest.perfectForYou', 'Perfect for you if…')}</h3>
                </div>
                <ul className="space-y-3">
                  {meta.perfectFor.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-emerald-800">
                      <span className="mt-0.5 shrink-0 w-4 h-4 rounded-full bg-emerald-200 flex items-center justify-center text-emerald-700 text-[10px] font-bold">{i + 1}</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">✕</span>
                  <h3 className="font-semibold text-amber-900">{tx(m, 'dest.skipIt', 'Skip it if…')}</h3>
                </div>
                <ul className="space-y-3">
                  {meta.skipIf.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-amber-800">
                      <span className="mt-0.5 shrink-0 w-4 h-4 rounded-full bg-amber-200 flex items-center justify-center text-amber-700 text-[10px] font-bold">{i + 1}</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* ── TOP 5 EXPERIENCES ── */}
        {meta?.experiences && (
          <section>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">{tx(m, 'dest.kickerWhatToDo', 'What to Do')}</p>
            <h2 className="font-display text-3xl sm:text-4xl mb-8">{fmt(tx(m, 'dest.top5Experiences', 'Top 5 Romantic Experiences in {dest}'), { dest: destProper })}</h2>
            <div className="space-y-4">
              {meta.experiences.map((exp, i) => (
                <div key={i} className="grid sm:grid-cols-[auto_1fr_auto] gap-4 sm:gap-6 items-start border border-zinc-100 rounded-2xl p-5 hover:border-zinc-200 transition-colors">
                  <div className="text-4xl">{exp.icon}</div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold text-zinc-300 tabular-nums">0{i + 1}</span>
                      <h3 className="font-semibold text-zinc-900">{exp.title}</h3>
                    </div>
                    <p className="text-zinc-500 text-sm leading-relaxed mb-3">{exp.description}</p>
                    <div className="flex items-start gap-2">
                      <span className="text-[11px] font-semibold text-rose-400 uppercase tracking-wider shrink-0 mt-0.5">💡 {tx(m, 'dest.insiderTip', 'Insider tip')}</span>
                      <p className="text-zinc-400 text-xs leading-relaxed">{exp.tip}</p>
                    </div>
                  </div>
                  <div className="shrink-0">
                    <span className="text-xs text-zinc-400 bg-zinc-50 border border-zinc-100 px-3 py-1.5 rounded-full whitespace-nowrap">{exp.cost}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── MONTH BY MONTH ── */}
        {meta?.months && (
          <section>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">{tx(m, 'dest.kickerWhenToGo', 'When to Go')}</p>
            <h2 className="font-display text-3xl sm:text-4xl mb-8">{fmt(tx(m, 'dest.monthByMonth', '{dest} Month by Month'), { dest: destProper })}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {meta.months.map((mn) => {
                const isGood = mn.price === 'Low' || mn.price === 'Low-mid' || mn.verdict.toLowerCase().includes('best') || mn.verdict.toLowerCase().includes('excellent') || mn.verdict.toLowerCase().includes('perfect')
                const isDanger = mn.emoji === '⚠️' || mn.emoji === '🌀'
                return (
                  <div key={mn.month} className={`rounded-xl p-4 border text-center ${isDanger ? 'bg-red-50 border-red-100' : isGood ? 'bg-emerald-50 border-emerald-100' : 'bg-zinc-50 border-zinc-100'}`}>
                    <div className="text-xl mb-1">{mn.emoji}</div>
                    <div className="font-bold text-zinc-900 text-sm mb-1">{mn.month}</div>
                    <div className={`text-[10px] font-semibold uppercase tracking-wider mb-2 ${isDanger ? 'text-red-500' : 'text-zinc-400'}`}>{mn.crowds}</div>
                    <div className={`text-[11px] font-medium ${isDanger ? 'text-red-600' : isGood ? 'text-emerald-700' : 'text-zinc-600'}`}>{mn.verdict}</div>
                  </div>
                )
              })}
            </div>
          </section>
        )}

        {/* ── BUDGET TIERS ── */}
        {meta?.budgetTiers && (
          <section>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">{tx(m, 'dest.kickerBudget', "What You'll Pay")}</p>
            <h2 className="font-display text-3xl sm:text-4xl mb-8">{fmt(tx(m, 'dest.budgetGuide', 'Budget Guide for {dest}'), { dest: destProper })}</h2>
            <div className="grid sm:grid-cols-3 gap-5">
              {meta.budgetTiers.map((tier, i) => (
                <div key={i} className={`rounded-2xl p-6 border ${i === 1 ? 'bg-zinc-950 border-zinc-800 text-white' : 'bg-zinc-50 border-zinc-100'}`}>
                  <div className={`text-xs font-semibold tracking-[0.2em] uppercase mb-3 ${i === 1 ? 'text-rose-400' : 'text-rose-400'}`}>{tier.label}</div>
                  <div className={`font-display text-2xl mb-4 ${i === 1 ? 'text-white' : 'text-zinc-900'}`}>{tier.range}</div>
                  <p className={`text-sm leading-relaxed mb-4 ${i === 1 ? 'text-zinc-300' : 'text-zinc-500'}`}>{tier.gets}</p>
                  <div className={`text-xs pt-4 border-t ${i === 1 ? 'border-zinc-700 text-zinc-400' : 'border-zinc-200 text-zinc-400'}`}>
                    e.g. {tier.example}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── AREAS GUIDE ── */}
        {meta?.areas && (
          <section>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">{tx(m, 'dest.kickerWhereToStay', 'Where to Stay')}</p>
            <h2 className="font-display text-3xl sm:text-4xl mb-8">{fmt(tx(m, 'dest.areas', 'Areas of {dest} for Honeymooners'), { dest: destProper })}</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {meta.areas.map((area, i) => (
                <div key={i} className="border border-zinc-100 rounded-2xl p-6 hover:border-zinc-200 transition-colors">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="font-semibold text-zinc-900">{area.name}</h3>
                    <span className="text-[11px] font-medium text-rose-400 bg-rose-50 px-2.5 py-1 rounded-full shrink-0 whitespace-nowrap">{area.bestFor}</span>
                  </div>
                  <p className="text-zinc-500 text-sm leading-relaxed">{area.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── HOTEL GRID ── */}
        <section id="hotels">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-2">{tx(m, 'dest.kickerAllHotels', 'All Hotels')}</p>
              <h2 className="font-display text-3xl sm:text-4xl">{fmt(tx(m, 'dest.allHotelsTitle', 'Honeymoon Hotels in {dest}'), { dest: destProper })}</h2>
            </div>
            <p className="text-zinc-400 text-sm">{hotels.length} {tx(m, 'card.hotels', 'hotels')}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {sortedHotels.map(h => (
              <HotelCard key={h.slug} hotel={h} locale={locale} />
            ))}
          </div>
        </section>

        {/* ── MAP ── */}
        <section>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">{tx(m, 'dest.kickerMap', 'Map')}</p>
          <h2 className="font-display text-3xl sm:text-4xl mb-6">{fmt(tx(m, 'dest.mapTitle', 'Hotels in {dest}'), { dest: destProper })}</h2>
          <Stay22MapWidget
            location={destProper}
            anchorHotelName={[...hotels].sort((a, b) => b.honeymoon_score - a.honeymoon_score)[0]?.name}
            height={480}
          />
        </section>

        {/* ── COMPARISON TABLE ── */}
        {topHotels.length >= 2 && (
          <section>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">{tx(m, 'dest.kickerCompare', 'Compare')}</p>
            <h2 className="font-display text-3xl sm:text-4xl mb-6">{fmt(tx(m, 'dest.compareTitle', 'Top {n} Hotels Side by Side'), { n: topHotels.length })}</h2>
            <div className="border border-zinc-100 rounded-2xl overflow-hidden overflow-x-auto">
              <table className="w-full text-sm min-w-[600px]">
                <thead>
                  <tr className="bg-zinc-50 border-b border-zinc-100">
                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-zinc-400">{tx(m, 'card.hotel', 'Hotel')}</th>
                    <th className="px-4 py-4 text-center text-xs font-semibold uppercase tracking-wider text-zinc-400">{tx(m, 'dest.colScore', 'Score')}</th>
                    <th className="px-4 py-4 text-center text-xs font-semibold uppercase tracking-wider text-zinc-400">{tx(m, 'dest.colPriceNight', 'Price/night')}</th>
                    <th className="px-4 py-4 text-center text-xs font-semibold uppercase tracking-wider text-zinc-400">{tx(m, 'card.adultsOnly', 'Adults-Only')}</th>
                    <th className="px-4 py-4 text-center text-xs font-semibold uppercase tracking-wider text-zinc-400">Spa</th>
                    <th className="px-4 py-4 text-center text-xs font-semibold uppercase tracking-wider text-zinc-400">{tx(m, 'experiences.beach.label', 'Beach')}</th>
                  </tr>
                </thead>
                <tbody>
                  {topHotels.map((h, i) => (
                    <tr key={h.slug} className={`border-b border-zinc-50 hover:bg-zinc-50 transition-colors ${i === 0 ? 'bg-zinc-50/50' : ''}`}>
                      <td className="px-6 py-4">
                        <Link href={localizedPath(`/hotels/${h.slug}`, locale)} className="font-medium text-zinc-900 hover:text-rose-500 transition-colors">{h.name}</Link>
                        {i === 0 && <span className="ml-2 text-[10px] font-semibold text-rose-400 uppercase tracking-wider">{tx(m, 'dest.topPick', 'Top Pick')}</span>}
                      </td>
                      <td className="px-4 py-4 text-center font-bold text-zinc-900">{h.honeymoon_score}</td>
                      <td className="px-4 py-4 text-center text-zinc-600">${h.price_per_night_usd.min.toLocaleString()}+</td>
                      <td className="px-4 py-4 text-center">{h.adults_only ? '✓' : '—'}</td>
                      <td className="px-4 py-4 text-center">{h.amenities.some(a => a.includes('spa')) ? '✓' : '—'}</td>
                      <td className="px-4 py-4 text-center">{h.amenities.some(a => a.includes('beach')) ? '✓' : '—'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* ── EXPERT TIPS ── */}
        {meta?.expertTips && (
          <section>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">{tx(m, 'dest.kickerExpertAdvice', 'Expert Advice')}</p>
            <h2 className="font-display text-3xl sm:text-4xl mb-8">{fmt(tx(m, 'dest.expertTips', 'Insider Tips for Your {dest} Honeymoon'), { dest: destProper })}</h2>
            <div className="space-y-4">
              {meta.expertTips.map((tip, i) => (
                <div key={i} className="flex gap-5 items-start border-b border-zinc-100 pb-6 last:border-0">
                  <span className="font-display text-4xl text-zinc-100 tabular-nums shrink-0 select-none leading-none mt-1">0{i + 1}</span>
                  <div>
                    <h3 className="font-semibold text-zinc-900 mb-2">{tip.tip}</h3>
                    <p className="text-zinc-500 text-sm leading-relaxed">{tip.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── PACKING LIST ── */}
        {meta?.packing && (
          <section>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">{tx(m, 'dest.kickerPacking', 'What to Pack')}</p>
            <h2 className="font-display text-3xl sm:text-4xl mb-8">{fmt(tx(m, 'dest.packingList', 'Packing List for {dest}'), { dest: destProper })}</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {meta.packing.map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-zinc-100 hover:border-zinc-200 transition-colors">
                  <span className="w-6 h-6 rounded-full bg-zinc-900 text-white text-xs flex items-center justify-center font-bold shrink-0 mt-0.5">{i + 1}</span>
                  <div>
                    <div className="font-medium text-zinc-900 text-sm">{item.item}</div>
                    <div className="text-zinc-400 text-xs mt-0.5 leading-relaxed">{item.why}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── LOCAL FOOD & DRINK ── */}
        {meta?.localFood && (
          <section>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">{tx(m, 'dest.kickerFood', 'Food & Drink')}</p>
            <h2 className="font-display text-3xl sm:text-4xl mb-4">{fmt(tx(m, 'dest.foodTitle', "What You'll Eat in {dest}"), { dest: destProper })}</h2>
            <p className="text-zinc-500 text-base leading-relaxed max-w-3xl">{meta.localFood}</p>
          </section>
        )}

        {/* ── PRACTICAL GUIDE ── */}
        {meta?.guide && (
          <section>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">{tx(m, 'dest.kickerPractical', 'Practical Guide')}</p>
            <h2 className="font-display text-3xl sm:text-4xl mb-8">{fmt(tx(m, 'dest.gettingTo', 'Getting to {dest}'), { dest: destProper })}</h2>
            <div className="grid sm:grid-cols-3 gap-5">
              {[
                { title: tx(m, 'dest.gettingThere', 'Getting There'), icon: '✈️', content: meta.guide.getting },
                { title: tx(m, 'dest.whereToStay', 'Where to Stay'), icon: '📍', content: meta.guide.where },
                { title: tx(m, 'dest.whenToGo', 'When to Go'), icon: '📅', content: meta.guide.when },
              ].map(g => (
                <div key={g.title} className="bg-zinc-50 border border-zinc-100 rounded-2xl p-6">
                  <div className="text-2xl mb-3">{g.icon}</div>
                  <h3 className="font-semibold text-zinc-900 mb-3">{g.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{g.content}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── RELATED EXPERIENCES ── */}
        <section>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">{tx(m, 'dest.kickerExperiences', 'Browse by Experience')}</p>
          <h2 className="font-display text-3xl sm:text-4xl mb-6">{fmt(tx(m, 'dest.experiencesTitle', 'Experiences in {dest}'), { dest: destProper })}</h2>
          <div className="flex flex-wrap gap-3">
            {Array.from(new Set(hotels.flatMap(h => h.experience_types))).map(exp => (
              <Link key={exp} href={localizedPath(`/experiences/${exp}`, locale)}
                className="border border-zinc-200 hover:border-zinc-900 text-zinc-600 hover:text-zinc-900 px-5 py-2.5 rounded-full text-sm font-medium transition-colors capitalize">
                {exp.replace(/-/g, ' ')}
              </Link>
            ))}
          </div>
        </section>

      </div>
    </div>
    </>
  )
}
