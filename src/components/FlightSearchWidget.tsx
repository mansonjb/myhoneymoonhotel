'use client'
import { useMemo, useState, type FormEvent } from 'react'

type Locale = 'en' | 'es' | 'pt' | 'fr'

interface FlightSearchWidgetProps {
  /** Optional destination label or slug shown in the heading + prefilled in "To" field */
  destination?: string
  /** Locale of the host page — drives all UI strings */
  locale?: Locale
  /** Compact variant for sidebars (smaller heading, less padding) */
  compact?: boolean
}

const TP_MARKER = '530910'

/**
 * Title-case a destination slug or label.
 * - "patagonia-chile"  -> "Patagonia, Chile"
 * - "bora-bora"        -> "Bora Bora"  (special case: repeated single word)
 * - "turks-and-caicos" -> "Turks and Caicos"
 * - "Maldives"         -> "Maldives"
 */
export function formatDestination(raw: string): string {
  if (!raw) return ''
  const trimmed = raw.trim()
  // If user passed a comma-separated label already, just title-case each part.
  if (trimmed.includes(',')) {
    return trimmed
      .split(',')
      .map((part) => titleCaseWords(part.trim()))
      .join(', ')
  }
  // Slug path: split on hyphens
  const parts = trimmed.split('-').map((p) => p.trim()).filter(Boolean)
  if (parts.length === 0) return ''
  if (parts.length === 1) return titleCaseWords(parts[0])
  // Heuristics:
  // - 2 parts, same word -> "Bora Bora"
  // - 2 parts, one is a small connector (and/of/the/de/du/la/le/los/las/y/e) -> join with space
  // - 2+ parts -> "First, Rest joined with space" (e.g. "Patagonia, Chile" / "Turks and Caicos" connector case)
  const connectors = new Set(['and', 'of', 'the', 'de', 'du', 'da', 'la', 'le', 'los', 'las', 'y', 'e'])
  const hasConnector = parts.some((p) => connectors.has(p.toLowerCase()))
  if (parts.length === 2 && parts[0].toLowerCase() === parts[1].toLowerCase()) {
    return `${titleCaseWords(parts[0])} ${titleCaseWords(parts[1])}`
  }
  if (hasConnector) {
    return parts
      .map((p) => (connectors.has(p.toLowerCase()) ? p.toLowerCase() : titleCaseWords(p)))
      .join(' ')
  }
  // Default: first token, then comma, then the rest joined by space
  const [first, ...rest] = parts
  return `${titleCaseWords(first)}, ${rest.map(titleCaseWords).join(' ')}`
}

function titleCaseWords(s: string): string {
  return s
    .split(/\s+/)
    .map((w) => (w ? w[0].toUpperCase() + w.slice(1).toLowerCase() : w))
    .join(' ')
}

function pad(n: number): string {
  return n < 10 ? `0${n}` : String(n)
}

function isoDate(d: Date): string {
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
}

function addDays(base: Date, days: number): Date {
  const d = new Date(base)
  d.setDate(d.getDate() + days)
  return d
}

/**
 * Build a Travelpayouts-tracked Kiwi.com deep link.
 * Wraps a kiwi.com/deep URL inside the tp.media redirector so commissions
 * track against marker 530910.
 */
export function buildKiwiDeeplink(params: {
  from: string
  to: string
  depart: string
  return: string
  passengers: number
}): string {
  const kiwi = new URL('https://www.kiwi.com/deep')
  kiwi.searchParams.set('from', params.from)
  kiwi.searchParams.set('to', params.to)
  kiwi.searchParams.set('departure', params.depart)
  kiwi.searchParams.set('return', params.return)
  kiwi.searchParams.set('adults', String(params.passengers))
  kiwi.searchParams.set('affilid', TP_MARKER)

  const wrapper = new URL('https://tp.media/r')
  wrapper.searchParams.set('marker', TP_MARKER)
  wrapper.searchParams.set('trs', '')
  wrapper.searchParams.set('p', '4115')
  wrapper.searchParams.set('u', kiwi.toString())
  wrapper.searchParams.set('campaign_id', '200')
  return wrapper.toString()
}

interface Strings {
  kicker: string
  heading: (dest: string) => string
  headingNoDest: string
  subtitle: string
  fromLabel: string
  toLabel: string
  departLabel: string
  returnLabel: string
  passengersLabel: string
  passengersOne: string
  passengersMany: (n: number) => string
  submit: string
  guarantee: string
  fromPlaceholder: string
  toPlaceholder: string
}

function getStrings(locale: Locale): Strings {
  switch (locale) {
    case 'es':
      return {
        kicker: 'Vuelo · Mejor precio',
        heading: (d) => `Vuelos a ${d}`,
        headingNoDest: 'Buscar vuelos',
        subtitle: 'Comparamos Kiwi, Aviasales y +700 aerolíneas — sin coste extra para usted.',
        fromLabel: 'Desde',
        toLabel: 'Hacia',
        departLabel: 'Salida',
        returnLabel: 'Regreso',
        passengersLabel: 'Pasajeros',
        passengersOne: '1 pasajero',
        passengersMany: (n) => `${n} pasajeros`,
        submit: 'Buscar vuelos',
        guarantee: '✈ Mejor precio garantizado por Kiwi.com — sin tarifas de reserva.',
        fromPlaceholder: 'Ciudad o aeropuerto — ej. Madrid',
        toPlaceholder: 'Ciudad o aeropuerto',
      }
    case 'pt':
      return {
        kicker: 'Voo · Melhor preço',
        heading: (d) => `Voos para ${d}`,
        headingNoDest: 'Buscar voos',
        subtitle: 'Comparamos Kiwi, Aviasales e +700 companhias — sem custo extra para você.',
        fromLabel: 'De',
        toLabel: 'Para',
        departLabel: 'Partida',
        returnLabel: 'Volta',
        passengersLabel: 'Passageiros',
        passengersOne: '1 passageiro',
        passengersMany: (n) => `${n} passageiros`,
        submit: 'Buscar voos',
        guarantee: '✈ Melhor preço garantido pelo Kiwi.com — sem taxas de reserva.',
        fromPlaceholder: 'Cidade ou aeroporto — ex. Lisboa',
        toPlaceholder: 'Cidade ou aeroporto',
      }
    case 'fr':
      return {
        kicker: 'Vol · Meilleur prix',
        heading: (d) => `Vols vers ${d}`,
        headingNoDest: 'Rechercher des vols',
        subtitle: 'Nous comparons Kiwi, Aviasales et plus de 700 compagnies — sans frais supplémentaires.',
        fromLabel: 'De',
        toLabel: 'Vers',
        departLabel: 'Départ',
        returnLabel: 'Retour',
        passengersLabel: 'Passagers',
        passengersOne: '1 passager',
        passengersMany: (n) => `${n} passagers`,
        submit: 'Rechercher des vols',
        guarantee: '✈ Meilleur prix garanti par Kiwi.com — aucun frais de réservation ajouté.',
        fromPlaceholder: 'Ville ou aéroport — ex. Paris',
        toPlaceholder: 'Ville ou aéroport',
      }
    case 'en':
    default:
      return {
        kicker: 'Flight · Best price',
        heading: (d) => `Flights to ${d}`,
        headingNoDest: 'Search flights',
        subtitle: 'We compare Kiwi, Aviasales and 700+ airlines — no extra cost for you.',
        fromLabel: 'From',
        toLabel: 'To',
        departLabel: 'Depart',
        returnLabel: 'Return',
        passengersLabel: 'Passengers',
        passengersOne: '1 passenger',
        passengersMany: (n) => `${n} passengers`,
        submit: 'Search flights',
        guarantee: '✈ Best price guaranteed by Kiwi.com — no booking fees added.',
        fromPlaceholder: 'City or airport — e.g. New York',
        toPlaceholder: 'City or airport',
      }
  }
}

export default function FlightSearchWidget({ destination, locale = 'en', compact = false }: FlightSearchWidgetProps) {
  const t = getStrings(locale)
  const destinationDisplay = useMemo(() => (destination ? formatDestination(destination) : ''), [destination])

  // Defaults: today+30 / today+37 (computed once per render — fine since static at hydration)
  const today = useMemo(() => {
    const d = new Date()
    d.setHours(0, 0, 0, 0)
    return d
  }, [])
  const defaultDepart = useMemo(() => isoDate(addDays(today, 30)), [today])
  const defaultReturn = useMemo(() => isoDate(addDays(today, 37)), [today])
  const minDepart = useMemo(() => isoDate(today), [today])
  const minReturn = useMemo(() => isoDate(addDays(today, 1)), [today])

  const [from, setFrom] = useState('')
  const [to, setTo] = useState(destinationDisplay)
  const [depart, setDepart] = useState(defaultDepart)
  const [ret, setRet] = useState(defaultReturn)
  const [passengers, setPassengers] = useState(2)
  const [error, setError] = useState<string | null>(null)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!from.trim() || !to.trim()) {
      setError(
        locale === 'es'
          ? 'Introduce origen y destino.'
          : locale === 'pt'
            ? 'Informe origem e destino.'
            : locale === 'fr'
              ? 'Veuillez renseigner l’origine et la destination.'
              : 'Please enter both From and To.'
      )
      return
    }
    setError(null)

    const url = buildKiwiDeeplink({
      from: from.trim(),
      to: to.trim(),
      depart,
      return: ret,
      passengers,
    })

    // Custom analytics event (no actual tracker wired — future hook).
    if (typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent('mhh:flight-search', {
          detail: {
            from: from.trim(),
            to: to.trim(),
            depart,
            return: ret,
            passengers,
            destination: destinationDisplay || null,
          },
        })
      )
      window.open(url, '_blank', 'noopener')
    }
  }

  const heading = destinationDisplay ? t.heading(destinationDisplay) : t.headingNoDest

  return (
    <section className={compact ? 'my-8' : 'my-12'}>
      <div className={`bg-rose-50/40 border border-rose-100 rounded-2xl ${compact ? 'p-5' : 'p-7'}`}>
        <div className="flex items-center gap-2 text-rose-500 text-xs font-semibold tracking-[0.2em] uppercase mb-2">
          <span>✈</span>
          <span>{t.kicker}</span>
        </div>
        <h3 className={`font-display ${compact ? 'text-2xl' : 'text-3xl'} text-zinc-900 mb-1`}>{heading}</h3>
        <p className="text-zinc-500 text-sm mb-5">{t.subtitle}</p>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-3" noValidate>
          <label className="flex flex-col text-xs font-medium text-zinc-700">
            <span className="mb-1">{t.fromLabel}</span>
            <input
              type="text"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              placeholder={t.fromPlaceholder}
              autoComplete="off"
              className="rounded-xl border border-rose-200 bg-white px-3 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-200"
              required
            />
          </label>

          <label className="flex flex-col text-xs font-medium text-zinc-700">
            <span className="mb-1">{t.toLabel}</span>
            <input
              type="text"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              placeholder={t.toPlaceholder}
              autoComplete="off"
              className="rounded-xl border border-rose-200 bg-white px-3 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-200"
              required
            />
          </label>

          <label className="flex flex-col text-xs font-medium text-zinc-700">
            <span className="mb-1">{t.departLabel}</span>
            <input
              type="date"
              value={depart}
              min={minDepart}
              onChange={(e) => setDepart(e.target.value)}
              className="rounded-xl border border-rose-200 bg-white px-3 py-2.5 text-sm text-zinc-900 focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-200"
              required
            />
          </label>

          <label className="flex flex-col text-xs font-medium text-zinc-700">
            <span className="mb-1">{t.returnLabel}</span>
            <input
              type="date"
              value={ret}
              min={minReturn}
              onChange={(e) => setRet(e.target.value)}
              className="rounded-xl border border-rose-200 bg-white px-3 py-2.5 text-sm text-zinc-900 focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-200"
              required
            />
          </label>

          <label className="flex flex-col text-xs font-medium text-zinc-700 sm:col-span-2">
            <span className="mb-1">{t.passengersLabel}</span>
            <select
              value={passengers}
              onChange={(e) => setPassengers(Number(e.target.value))}
              className="rounded-xl border border-rose-200 bg-white px-3 py-2.5 text-sm text-zinc-900 focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-200"
            >
              <option value={1}>{t.passengersOne}</option>
              <option value={2}>{t.passengersMany(2)}</option>
              <option value={3}>{t.passengersMany(3)}</option>
              <option value={4}>{t.passengersMany(4)}</option>
            </select>
          </label>

          {error ? (
            <p className="sm:col-span-2 text-sm text-rose-600" role="alert">
              {error}
            </p>
          ) : null}

          <button
            type="submit"
            className="sm:col-span-2 w-full rounded-xl bg-rose-500 hover:bg-rose-600 active:bg-rose-700 text-white font-semibold py-3 text-sm transition-colors"
          >
            {t.submit}
          </button>
        </form>

        <p className="text-zinc-500 text-xs mt-4">{t.guarantee}</p>
      </div>
    </section>
  )
}
