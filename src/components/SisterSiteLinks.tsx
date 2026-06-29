import { SISTER_LINKS_BY_DESTINATION, SISTER_SITE_META } from '../../data/sister-links'
import type { Locale } from '@/i18n/locales'

interface Props {
  destinationSlug: string
  destinationLabel: string
  locale?: Locale
}

const HEADING: Record<Locale, string> = {
  en: 'Other angles on',
  fr: "D'autres angles sur",
  es: 'Otras perspectivas sobre',
  pt: 'Outras perspectivas sobre',
}

const INTRO: Record<Locale, string> = {
  en: 'Same destination, different lens. Our sister publications cover',
  fr: 'Même destination, autres regards. Nos publications sœurs couvrent',
  es: 'Mismo destino, otra perspectiva. Nuestras publicaciones hermanas cubren',
  pt: 'Mesmo destino, outra perspectiva. Nossas publicações irmãs cobrem',
}

const OUTRO: Record<Locale, string> = {
  en: 'from angles a honeymoon guide cannot.',
  fr: "sous des angles qu'un guide lune de miel ne peut pas couvrir.",
  es: 'desde ángulos que una guía de luna de miel no puede.',
  pt: 'sob ângulos que um guia de lua de mel não consegue cobrir.',
}

const KICKER: Record<Locale, string> = {
  en: 'Sister sites',
  fr: 'Sites sœurs',
  es: 'Sitios hermanos',
  pt: 'Sites irmãos',
}

function pickContext(link: { context: string; contextFr?: string; contextEs?: string; contextPt?: string }, locale: Locale): string {
  if (locale === 'fr') return link.contextFr ?? link.context
  if (locale === 'es') return link.contextEs ?? link.context
  if (locale === 'pt') return link.contextPt ?? link.context
  return link.context
}

export default function SisterSiteLinks({ destinationSlug, destinationLabel, locale = 'en' }: Props) {
  const links = SISTER_LINKS_BY_DESTINATION[destinationSlug]
  if (!links || links.length === 0) return null

  return (
    <section className="my-12 p-6 md:p-8 bg-zinc-50 border border-zinc-200 rounded-2xl">
      <div className="mb-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 mb-1">{KICKER[locale]}</p>
        <h3 className="font-display text-2xl text-zinc-900">{HEADING[locale]} {destinationLabel}</h3>
        <p className="text-sm text-zinc-500 mt-1">{INTRO[locale]} {destinationLabel} {OUTRO[locale]}</p>
      </div>
      <ul className="space-y-4">
        {links.map(link => {
          const meta = SISTER_SITE_META[link.site]
          return (
            <li key={link.url} className="border-l-2 border-rose-200 pl-4">
              <a href={link.url} target="_blank" rel="noopener" className="text-rose-600 hover:text-rose-700 font-semibold text-base">
                {link.anchorText}
                <span className="text-zinc-400 font-normal text-sm"> · {meta.hostname}</span>
              </a>
              <p className="text-sm text-zinc-600 leading-relaxed mt-1">{pickContext(link, locale)}</p>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
