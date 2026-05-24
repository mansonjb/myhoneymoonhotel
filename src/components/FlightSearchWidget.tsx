'use client'
import { useEffect, useRef } from 'react'

interface FlightSearchWidgetProps {
  /** Optional destination label shown in the heading + prefilled in search (e.g. "Maldives") */
  destination?: string
  /** Locale of the host page — passed to Travelpayouts widget */
  locale?: 'en' | 'es' | 'pt'
  /** Compact variant for sidebars (smaller heading, less padding) */
  compact?: boolean
}

/**
 * Travelpayouts flight search widget (Kiwi.com / Aviasales meta-engine).
 * Marker 530910 = same partner ID as the emrldtp tracking script in <head>.
 * Loads via lazyOnload to keep critical path clean.
 *
 * The widget script auto-renders a search form inside the container div
 * where the script is injected (next to it). Each mount creates its own
 * scoped instance.
 */
export default function FlightSearchWidget({ destination, locale = 'en', compact = false }: FlightSearchWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return
    // Already loaded (e.g. second mount on the same page) — skip.
    if (containerRef.current.querySelector('script[data-tp-flight]')) return

    const tpLocale = locale === 'es' ? 'es' : locale === 'pt' ? 'pt' : 'en'
    const tpCurrency = locale === 'en' ? 'usd' : 'eur'

    const params = new URLSearchParams({
      currency: tpCurrency,
      trs: '',
      shmarker: '530910',
      combine_promos: '',
      show_hotels: 'false',
      powered_by: 'true',
      locale: tpLocale,
      searchUrl: 'www.kiwi.com',
      primary_override: '#f43f5e',     // rose-500 to match site
      color_button: '#f43f5e',
      color_icons: '#f43f5e',
      secondary: '#FFFFFF',
      dark: '#18181b',
      light: '#FFFFFF',
      special: '#C4C4C4',
      color_focused: '#f43f5e',
      border_radius: '16',
      plain: 'true',
      promo_id: '7879',
      campaign_id: '200',
    })

    const script = document.createElement('script')
    script.async = true
    script.src = `https://c121.travelpayouts.com/content?${params.toString()}`
    script.setAttribute('data-tp-flight', '1')
    containerRef.current.appendChild(script)
  }, [locale])

  const heading = destination
    ? locale === 'es'
      ? `Vuelos a ${destination}`
      : locale === 'pt'
        ? `Voos para ${destination}`
        : `Flights to ${destination}`
    : locale === 'es'
      ? 'Buscar vuelos'
      : locale === 'pt'
        ? 'Buscar voos'
        : 'Search flights'

  const sub =
    locale === 'es'
      ? 'Comparamos Kiwi, Aviasales y +700 aerolíneas — sin coste extra para usted.'
      : locale === 'pt'
        ? 'Comparamos Kiwi, Aviasales e +700 companhias — sem custo extra para você.'
        : 'We compare Kiwi, Aviasales and 700+ airlines — no extra cost for you.'

  return (
    <section className={compact ? 'my-8' : 'my-12'}>
      <div className={`bg-rose-50/40 border border-rose-100 rounded-2xl ${compact ? 'p-5' : 'p-7'}`}>
        <div className="flex items-center gap-2 text-rose-500 text-xs font-semibold tracking-[0.2em] uppercase mb-2">
          <span>✈</span>
          <span>{locale === 'es' ? 'Vuelo · Mejor precio' : locale === 'pt' ? 'Voo · Melhor preço' : 'Flight · Best price'}</span>
        </div>
        <h3 className={`font-display ${compact ? 'text-2xl' : 'text-3xl'} text-zinc-900 mb-1`}>{heading}</h3>
        <p className="text-zinc-500 text-sm mb-5">{sub}</p>
        <div ref={containerRef} className="tp-flight-widget" />
      </div>
    </section>
  )
}
