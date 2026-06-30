import Link from 'next/link'
import type { Locale } from '@/i18n/locales'
import { getClustersForDestination } from '../../../data/destination-clusters'

interface Props {
  slug: string
  bestMonths: string[]
  locale?: Locale
}

const HEADING: Record<Locale, string> = {
  en: 'Plan your honeymoon around this',
  fr: "Planifiez votre lune de miel à partir d'ici",
  es: 'Planifiquen su luna de miel desde aquí',
  pt: 'Planejem sua lua de mel a partir daqui',
}

const SUBHEAD: Record<Locale, string> = {
  en: 'Use these pillar guides to lock in season, budget, and trip style.',
  fr: 'Utilisez ces guides piliers pour choisir saison, budget et style de voyage.',
  es: 'Usen estas guías para fijar temporada, presupuesto y estilo de viaje.',
  pt: 'Use estes guias para definir temporada, orçamento e estilo de viagem.',
}

const GROUP_LABELS: Record<'season' | 'budget' | 'tripType' | 'planning', Record<Locale, string>> = {
  season: { en: 'By season', fr: 'Par saison', es: 'Por temporada', pt: 'Por temporada' },
  budget: { en: 'By budget', fr: 'Par budget', es: 'Por presupuesto', pt: 'Por orçamento' },
  tripType: { en: 'Trip types', fr: 'Types de voyage', es: 'Tipos de viaje', pt: 'Tipos de viagem' },
  planning: { en: 'Planning guides', fr: 'Guides pratiques', es: 'Guías de planificación', pt: 'Guias de planejamento' },
}

interface PillLink {
  href: string
  label: string
  emoji: string
}

const MONTH_LABEL: Record<string, Record<Locale, string>> = {
  january: { en: 'January', fr: 'Janvier', es: 'Enero', pt: 'Janeiro' },
  february: { en: 'February', fr: 'Février', es: 'Febrero', pt: 'Fevereiro' },
  march: { en: 'March', fr: 'Mars', es: 'Marzo', pt: 'Março' },
  april: { en: 'April', fr: 'Avril', es: 'Abril', pt: 'Abril' },
  may: { en: 'May', fr: 'Mai', es: 'Mayo', pt: 'Maio' },
  june: { en: 'June', fr: 'Juin', es: 'Junio', pt: 'Junho' },
  july: { en: 'July', fr: 'Juillet', es: 'Julio', pt: 'Julho' },
  august: { en: 'August', fr: 'Août', es: 'Agosto', pt: 'Agosto' },
  september: { en: 'September', fr: 'Septembre', es: 'Septiembre', pt: 'Setembro' },
  october: { en: 'October', fr: 'Octobre', es: 'Octubre', pt: 'Outubro' },
  november: { en: 'November', fr: 'Novembre', es: 'Noviembre', pt: 'Novembro' },
  december: { en: 'December', fr: 'Diciembre', es: 'Diciembre', pt: 'Dezembro' },
}

function normalizeMonth(m: string): string {
  return m.toLowerCase().trim()
}

export default function RelatedTopicCocoon({ slug, bestMonths, locale = 'en' }: Props) {
  const localePrefix = locale === 'en' ? '' : `/${locale}`
  const clusters = getClustersForDestination(slug)
  const clusterSlugs = new Set(clusters.map(c => c.slug))

  // ── Season pills: link to /destinations/{slug}/{month} for up to 3 best months ──
  const seasonLinks: PillLink[] = bestMonths
    .map(normalizeMonth)
    .filter(m => MONTH_LABEL[m])
    .slice(0, 4)
    .map(m => ({
      href: `${localePrefix}/destinations/${slug}/${m}`,
      label: MONTH_LABEL[m][locale],
      emoji: '📅',
    }))

  // Add the global best-time pillar
  seasonLinks.push({
    href: `${localePrefix}/best-time-to-honeymoon`,
    label: locale === 'fr' ? 'Quand partir' : locale === 'es' ? 'Cuándo ir' : locale === 'pt' ? 'Quando ir' : 'Best time to honeymoon',
    emoji: '🌤️',
  })

  // ── Budget pills ──
  const budgetLinks: PillLink[] = [
    {
      href: `${localePrefix}/luxury-honeymoon`,
      label: locale === 'fr' ? 'Lune de miel de luxe' : locale === 'es' ? 'Luna de miel de lujo' : locale === 'pt' ? 'Lua de mel de luxo' : 'Luxury honeymoon',
      emoji: '💎',
    },
    {
      href: `${localePrefix}/honeymoon-on-a-budget`,
      label: locale === 'fr' ? 'Petit budget' : locale === 'es' ? 'Bajo presupuesto' : locale === 'pt' ? 'Orçamento baixo' : 'Honeymoon on a budget',
      emoji: '💰',
    },
    {
      href: `${localePrefix}/all-inclusive-honeymoon`,
      label: locale === 'fr' ? 'Tout inclus' : locale === 'es' ? 'Todo incluido' : locale === 'pt' ? 'Tudo incluído' : 'All-inclusive honeymoon',
      emoji: '🥂',
    },
  ]
  // Cost pillars where we have a page
  const costPages: Record<string, string> = {
    maldives: 'maldives-honeymoon-cost',
    bali: 'bali-honeymoon-cost',
    bahamas: 'bahamas-honeymoon-cost',
    barbados: 'barbados-honeymoon-cost',
    mexico: 'mexico-honeymoon-cost',
    'turks-and-caicos': 'turks-and-caicos-honeymoon-cost',
    'cape-verde': 'cape-verde-honeymoon-cost',
  }
  if (costPages[slug]) {
    budgetLinks.push({
      href: `${localePrefix}/${costPages[slug]}`,
      label: locale === 'fr' ? 'Coût détaillé' : locale === 'es' ? 'Costo detallado' : locale === 'pt' ? 'Custo detalhado' : 'Cost breakdown',
      emoji: '🧾',
    })
  }

  // ── Trip type pills: cluster-aware ──
  const tripLinks: PillLink[] = []
  if (clusterSlugs.has('overwater-paradise')) {
    tripLinks.push({
      href: `${localePrefix}/overwater-bungalow-honeymoon`,
      label: locale === 'fr' ? 'Bungalow sur pilotis' : locale === 'es' ? 'Bungalow sobre el agua' : locale === 'pt' ? 'Bangalô sobre a água' : 'Overwater bungalow',
      emoji: '🏝️',
    })
  }
  if (clusterSlugs.has('french-luxury') || clusterSlugs.has('european-countryside')) {
    tripLinks.push({
      href: `${localePrefix}/honeymoon-in-france`,
      label: locale === 'fr' ? 'Lune de miel en France' : locale === 'es' ? 'Luna de miel en Francia' : locale === 'pt' ? 'Lua de mel na França' : 'Honeymoon in France',
      emoji: '🇫🇷',
    })
  }
  tripLinks.push({
    href: `${localePrefix}/last-minute-honeymoon`,
    label: locale === 'fr' ? 'Dernière minute' : locale === 'es' ? 'Último minuto' : locale === 'pt' ? 'Última hora' : 'Last-minute honeymoon',
    emoji: '⚡',
  })
  tripLinks.push({
    href: `${localePrefix}/how-to-choose-honeymoon-destination`,
    label: locale === 'fr' ? 'Comment choisir' : locale === 'es' ? 'Cómo elegir' : locale === 'pt' ? 'Como escolher' : 'How to choose',
    emoji: '🧭',
  })

  // ── Planning pills ──
  const planningLinks: PillLink[] = [
    {
      href: `${localePrefix}/how-to-plan-a-honeymoon`,
      label: locale === 'fr' ? 'Planifier votre lune de miel' : locale === 'es' ? 'Cómo planificar' : locale === 'pt' ? 'Como planejar' : 'How to plan',
      emoji: '📋',
    },
    {
      href: `${localePrefix}/honeymoon-packing-list`,
      label: locale === 'fr' ? 'Liste de bagages' : locale === 'es' ? 'Qué empacar' : locale === 'pt' ? 'O que levar' : 'Packing list',
      emoji: '🧳',
    },
    {
      href: `${localePrefix}/quiz`,
      label: locale === 'fr' ? 'Quiz destination' : locale === 'es' ? 'Quiz de destino' : locale === 'pt' ? 'Quiz de destino' : 'Destination quiz',
      emoji: '✨',
    },
  ]

  const groups: { key: keyof typeof GROUP_LABELS; bg: string; border: string; text: string; links: PillLink[] }[] = [
    { key: 'season', bg: 'bg-rose-50', border: 'border-rose-100', text: 'text-rose-700', links: seasonLinks },
    { key: 'budget', bg: 'bg-amber-50', border: 'border-amber-100', text: 'text-amber-800', links: budgetLinks },
    { key: 'tripType', bg: 'bg-zinc-50', border: 'border-zinc-100', text: 'text-zinc-700', links: tripLinks },
    { key: 'planning', bg: 'bg-emerald-50', border: 'border-emerald-100', text: 'text-emerald-800', links: planningLinks },
  ]

  return (
    <section className="my-16">
      <div className="mb-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-rose-400 mb-2">Topic cocoon</p>
        <h2 className="font-display text-3xl md:text-4xl text-zinc-900 mb-2">{HEADING[locale]}</h2>
        <p className="text-zinc-500 max-w-2xl mx-auto">{SUBHEAD[locale]}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {groups.map(g => (
          <div key={g.key} className={`${g.bg} ${g.border} border rounded-2xl p-6`}>
            <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${g.text} mb-4`}>
              {GROUP_LABELS[g.key][locale]}
            </p>
            <div className="flex flex-wrap gap-2">
              {g.links.map(l => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`inline-flex items-center gap-1.5 bg-white hover:bg-zinc-50 border border-zinc-200 rounded-full px-3 py-1.5 text-xs font-semibold ${g.text} hover:border-zinc-300 transition-colors`}
                >
                  <span>{l.emoji}</span>
                  <span>{l.label}</span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
