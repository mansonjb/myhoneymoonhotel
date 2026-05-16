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

// Per-slug SEO fallbacks for experience types that have NO detailed data file.
// Keyed by [slug][locale]. Used when getLocalizedExperience returns null.
const EXPERIENCE_SEO_FALLBACK: Record<string, Record<Locale, { title: string; description: string }>> = {
  romantic: {
    en: { title: 'Romantic Honeymoon Hotels: 45+ Scored Picks (2026)', description: 'Most romantic honeymoon hotels worldwide — 45 properties scored on privacy, design, dining, and that just-us feeling. From $380 to $4,500 a night.' },
    es: { title: 'Hoteles Románticos Luna de Miel: 45+ Selecciones 2026', description: 'Los hoteles más románticos del mundo para luna de miel: 45 propiedades evaluadas en privacidad, diseño y romance. Desde 380 $ a 4.500 $ la noche.' },
    pt: { title: 'Hotéis Românticos Lua de Mel: 45+ Escolhas 2026', description: 'Os hotéis mais românticos do mundo para lua de mel: 45 propriedades avaliadas em privacidade, design e romance. De 380 a 4.500 USD por noite.' },
  },
  boutique: {
    en: { title: 'Boutique Honeymoon Hotels: Design-Led Picks 2026', description: 'Boutique honeymoon hotels with personality — design-driven properties under 50 rooms, scored for couples who want character over chain luxury. From $600.' },
    es: { title: 'Hoteles Boutique Luna de Miel: Diseño y Carácter 2026', description: 'Hoteles boutique con personalidad para luna de miel: propiedades de menos de 50 habitaciones, evaluadas para parejas que buscan carácter. Desde 600 $.' },
    pt: { title: 'Hotéis Boutique Lua de Mel: Design e Caráter 2026', description: 'Hotéis boutique com personalidade para lua de mel: propriedades com menos de 50 quartos, avaliadas para casais que buscam caráter. A partir de 600 USD.' },
  },
  spa: {
    en: { title: 'Spa Honeymoon Hotels: 17 Wellness Retreats Scored 2026', description: 'Spa honeymoon hotels with serious treatment menus, hammams, and couples rituals — 17 properties scored across 5 regions. From $380 a night.' },
    es: { title: 'Hoteles Spa Luna de Miel: 17 Retiros Evaluados 2026', description: 'Hoteles spa para luna de miel con menús de tratamientos serios, hammams y rituales en pareja: 17 propiedades evaluadas en 5 regiones. Desde 380 $.' },
    pt: { title: 'Hotéis Spa Lua de Mel: 17 Retiros Avaliados 2026', description: 'Hotéis spa para lua de mel com menus de tratamentos sérios, hammams e rituais a dois: 17 propriedades avaliadas em 5 regiões. A partir de 380 USD.' },
  },
  'all-inclusive': {
    en: { title: 'All-Inclusive Honeymoon Resorts: 8 Scored Picks 2026', description: 'All-inclusive honeymoon resorts that justify the price — 8 adults-friendly properties scored on dining, drinks, and zero-hassle romance. From $350.' },
    es: { title: 'Resorts Todo Incluido Luna de Miel: 8 Selecciones 2026', description: 'Resorts todo incluido para luna de miel que valen el precio: 8 propiedades evaluadas en gastronomía, bebidas y romance sin complicaciones. Desde 350 $.' },
    pt: { title: 'Resorts All-Inclusive Lua de Mel: 8 Escolhas 2026', description: 'Resorts all-inclusive para lua de mel que valem o preço: 8 propriedades avaliadas em gastronomia, bebidas e romance sem complicações. A partir de 350 USD.' },
  },
  cultural: {
    en: { title: 'Cultural Honeymoon Hotels: 12 Heritage Stays 2026', description: 'Cultural honeymoon hotels in Marrakech, Kyoto, Rajasthan and beyond — 12 properties scored for couples who want romance with depth. From $450 a night.' },
    es: { title: 'Hoteles Culturales Luna de Miel: 12 Estancias 2026', description: 'Hoteles culturales para luna de miel en Marrakech, Kioto, Rajastán y más: 12 propiedades evaluadas para parejas que buscan romance con fondo. Desde 450 $.' },
    pt: { title: 'Hotéis Culturais Lua de Mel: 12 Estadias 2026', description: 'Hotéis culturais para lua de mel em Marrakech, Quioto, Rajastão e mais: 12 propriedades avaliadas para casais que buscam romance com profundidade. De 450 USD.' },
  },
  historic: {
    en: { title: 'Historic Honeymoon Hotels: 7 Heritage Properties 2026', description: 'Historic honeymoon hotels in restored palaces, castles, and grand 19th-century landmarks — 7 properties scored on romance and provenance. From $600.' },
    es: { title: 'Hoteles Históricos Luna de Miel: 7 Propiedades 2026', description: 'Hoteles históricos para luna de miel en palacios, castillos y monumentos del s. XIX restaurados: 7 propiedades evaluadas en romance y patrimonio. Desde 600 $.' },
    pt: { title: 'Hotéis Históricos Lua de Mel: 7 Propriedades 2026', description: 'Hotéis históricos para lua de mel em palácios, castelos e marcos do séc. XIX restaurados: 7 propriedades avaliadas em romance e patrimônio. De 600 USD.' },
  },
  golf: {
    en: { title: 'Golf Honeymoon Resorts: Couples-Friendly Picks 2026', description: 'Golf honeymoon resorts where one half plays and the other half spa-and-suns — championship courses paired with serious romance. Scored picks from $1,400.' },
    es: { title: 'Resorts de Golf Luna de Miel: Selecciones 2026', description: 'Resorts de golf para luna de miel donde uno juega y el otro disfruta del spa y la piscina: campos de campeonato y romance serio. Selecciones desde 1.400 $.' },
    pt: { title: 'Resorts de Golfe Lua de Mel: Escolhas 2026', description: 'Resorts de golfe para lua de mel onde um joga e o outro aproveita spa e piscina: campos de campeonato e romance sério. Escolhas a partir de 1.400 USD.' },
  },
  adventure: {
    en: { title: 'Adventure Honeymoon Lodges: 6 Active Picks 2026', description: 'Adventure honeymoon lodges for couples who hike, dive, and ride — 6 properties scored on access, guides, and post-trail luxury. From $450 a night.' },
    es: { title: 'Lodges de Aventura Luna de Miel: 6 Selecciones 2026', description: 'Lodges de aventura para luna de miel: parejas que hacen senderismo, bucean y cabalgan. 6 propiedades evaluadas en acceso, guías y lujo. Desde 450 $.' },
    pt: { title: 'Lodges de Aventura Lua de Mel: 6 Escolhas 2026', description: 'Lodges de aventura para lua de mel: casais que fazem trilhas, mergulho e cavalgadas. 6 propriedades avaliadas em acesso, guias e luxo. De 450 USD.' },
  },
  lake: {
    en: { title: 'Lake Honeymoon Hotels: Como, Garda & Beyond 2026', description: 'Lake honeymoon hotels on Como, Garda and Maggiore — 5 grand belle-époque properties scored for couples wanting Italian-lake romance. From $900 a night.' },
    es: { title: 'Hoteles de Lago Luna de Miel: Como, Garda y Más 2026', description: 'Hoteles de lago para luna de miel en Como, Garda y Maggiore: 5 propiedades belle époque evaluadas para parejas que buscan el romance italiano. Desde 900 $.' },
    pt: { title: 'Hotéis de Lago Lua de Mel: Como, Garda e Mais 2026', description: 'Hotéis de lago para lua de mel em Como, Garda e Maggiore: 5 propriedades belle époque avaliadas para casais que buscam o romance italiano. De 900 USD.' },
  },
  city: {
    en: { title: 'City Honeymoon Hotels: Urban Romance Picks 2026', description: 'City honeymoon hotels for couples who want culture, restaurants, and design over a beach — scored urban suites in major capitals. From $700 a night.' },
    es: { title: 'Hoteles de Ciudad Luna de Miel: Romance Urbano 2026', description: 'Hoteles de ciudad para luna de miel: parejas que buscan cultura, gastronomía y diseño en lugar de playa. Suites urbanas evaluadas. Desde 700 $.' },
    pt: { title: 'Hotéis de Cidade Lua de Mel: Romance Urbano 2026', description: 'Hotéis de cidade para lua de mel: casais que preferem cultura, gastronomia e design à praia. Suítes urbanas avaliadas. A partir de 700 USD.' },
  },
  'private island': {
    en: { title: 'Private Island Honeymoon Resorts: Buyout Picks 2026', description: 'Private island honeymoon resorts where you own the address for a week — scored picks on exclusivity, service ratio, and uninterrupted ocean.' },
    es: { title: 'Resorts en Isla Privada Luna de Miel: Selección 2026', description: 'Resorts en isla privada para luna de miel donde toda la dirección es suya por una semana: evaluados en exclusividad, ratio de servicio y océano.' },
    pt: { title: 'Resorts em Ilha Privada Lua de Mel: Seleção 2026', description: 'Resorts em ilha privada para lua de mel onde o endereço inteiro é seu por uma semana: avaliados em exclusividade, equipe e oceano.' },
  },
  wilderness: {
    en: { title: 'Wilderness Honeymoon Lodges: 6 Remote Picks 2026', description: 'Wilderness honeymoon lodges in deep nature — 6 remote properties scored for couples who want big skies, no Wi-Fi, and serious luxury. From $1,100.' },
    es: { title: 'Lodges Wilderness Luna de Miel: 6 Selecciones 2026', description: 'Lodges wilderness para luna de miel en plena naturaleza: 6 propiedades remotas evaluadas para parejas que buscan cielos, sin wifi y lujo. Desde 1.100 $.' },
    pt: { title: 'Lodges Wilderness Lua de Mel: 6 Escolhas 2026', description: 'Lodges wilderness para lua de mel em plena natureza: 6 propriedades remotas avaliadas para casais que buscam céus, sem wifi e luxo. De 1.100 USD.' },
  },
}

function fallbackSeo(type: string, locale: Locale): { title: string; description: string } {
  const entry = EXPERIENCE_SEO_FALLBACK[type]?.[locale]
  if (entry) return entry
  const pretty = type.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
  const title = locale === 'en'
    ? `${pretty} Honeymoon Hotels 2026`
    : locale === 'es'
      ? `Hoteles ${pretty} Luna de Miel 2026`
      : `Hotéis ${pretty} Lua de Mel 2026`
  const description = locale === 'en'
    ? `${pretty} honeymoon hotels — scored picks for couples planning a romantic 2026 stay.`
    : locale === 'es'
      ? `Hoteles ${pretty} para luna de miel: selecciones evaluadas para parejas que planifican un viaje romántico en 2026.`
      : `Hotéis ${pretty} para lua de mel: escolhas avaliadas para casais que planejam uma viagem romântica em 2026.`
  return { title, description }
}

export async function buildExperienceMetadata(type: string, locale: Locale): Promise<Metadata> {
  const meta = getLocalizedExperience(type, locale)
  if (!meta) {
    const fb = fallbackSeo(type, locale)
    return {
      title: fb.title,
      description: fb.description,
      alternates: buildAlternates(`/experiences/${type}`, locale),
      openGraph: {
        title: fb.title,
        description: fb.description,
        url: `${SITE_URL}${localizedPath(`/experiences/${type}`, locale)}`,
        type: 'website',
        siteName: 'My Honeymoon Hotel',
      },
      twitter: { card: 'summary_large_image', title: fb.title, description: fb.description },
    }
  }
  const titleSuffix = locale === 'en'
    ? 'Honeymoon Hotels — Expert Guide & Scored Properties'
    : locale === 'es'
      ? 'Hoteles para luna de miel — Guía experta y propiedades evaluadas'
      : 'Hotéis para lua de mel — Guia especializado e propriedades avaliadas'
  const description = meta.seo?.description ?? meta.intro.slice(0, 160)
  const heroUrl = meta.hero.startsWith('http') ? meta.hero : `${SITE_URL}${meta.hero}`
  const title = meta.seo?.title ?? `${meta.label} ${titleSuffix}`
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
