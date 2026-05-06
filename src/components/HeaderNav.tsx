'use client'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import type { Locale } from '@/i18n/locales'
import en from '@/i18n/messages/en.json'
import es from '@/i18n/messages/es.json'
import pt from '@/i18n/messages/pt.json'

const DICT: Record<Locale, Record<string, string>> = {
  en: en as Record<string, string>,
  es: es as Record<string, string>,
  pt: pt as Record<string, string>,
}
function tx(loc: Locale, key: string, fb: string): string {
  const v = DICT[loc]?.[key] ?? DICT.en[key]
  return typeof v === 'string' && v.length > 0 ? v : fb
}

interface DestItem { slug: string; label: string; count: number; region: string; country: string }
interface ExpItem  { slug: string; label: string; icon: string; sub: string }

interface HeaderNavProps {
  destinations: DestItem[]
  experiences: ExpItem[]
  locale?: Locale
}

const REGION_ORDER = [
  'Indian Ocean',
  'South Pacific',
  'Caribbean & Americas',
  'South America',
  'Europe',
  'Asia',
  'Middle East',
  'Africa Safari',
  'Africa & Atlantic',
  'North America',
]

export default function HeaderNav({ destinations, experiences, locale = 'en' }: HeaderNavProps) {
  const [open, setOpen] = useState<null | 'dest' | 'exp'>(null)
  const ref = useRef<HTMLDivElement>(null)
  const lp = (p: string) => (locale === 'en' ? p : `/${locale}${p}`)

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(null)
    }
    const onEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(null) }
    document.addEventListener('mousedown', onDocClick)
    window.addEventListener('keydown', onEsc)
    return () => {
      document.removeEventListener('mousedown', onDocClick)
      window.removeEventListener('keydown', onEsc)
    }
  }, [])

  // Group: Region → Country → Destinations
  const byRegion = destinations.reduce((acc, d) => {
    ;(acc[d.region] ??= {})
    ;(acc[d.region][d.country] ??= []).push(d)
    return acc
  }, {} as Record<string, Record<string, DestItem[]>>)

  const sortedRegions = Object.keys(byRegion).sort(
    (a, b) => REGION_ORDER.indexOf(a) - REGION_ORDER.indexOf(b)
  )

  const triggerClass = 'hover:text-zinc-900 transition-colors inline-flex items-center gap-1'
  const activeClass = 'text-zinc-900'

  return (
    <div ref={ref} className="hidden md:flex items-center gap-8 text-[13px] text-zinc-500">
      {/* DESTINATIONS */}
      <button
        onClick={() => setOpen(open === 'dest' ? null : 'dest')}
        className={`${triggerClass} ${open === 'dest' ? activeClass : ''}`}
      >
        {tx(locale, 'nav.destinations', 'Destinations')}
        <svg className={`w-3 h-3 transition-transform ${open === 'dest' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* CATEGORIES */}
      <button
        onClick={() => setOpen(open === 'exp' ? null : 'exp')}
        className={`${triggerClass} ${open === 'exp' ? activeClass : ''}`}
      >
        {tx(locale, 'nav.categories', 'Categories')}
        <svg className={`w-3 h-3 transition-transform ${open === 'exp' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <Link href={lp('/compare')} className="hover:text-zinc-900 transition-colors">{tx(locale, 'nav.compare', 'Compare')}</Link>
      <Link href={lp('/quiz')} className="hover:text-zinc-900 transition-colors">{tx(locale, 'nav.quiz', 'Quiz')}</Link>
      <Link href={lp('/about')} className="hover:text-zinc-900 transition-colors">{tx(locale, 'nav.about', 'About')}</Link>

      {/* Destinations mega dropdown — grouped by Region → Country → Destinations */}
      {open === 'dest' && (
        <div className="absolute left-1/2 -translate-x-1/2 top-[60px] w-[min(96vw,1000px)] bg-white border border-zinc-100 rounded-b-2xl shadow-2xl z-[60] p-6 max-h-[80vh] overflow-y-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-6">
            {sortedRegions.map(region => {
              const countries = byRegion[region]
              const sortedCountries = Object.keys(countries).sort((a, b) => {
                const totalA = countries[a].reduce((s, d) => s + d.count, 0)
                const totalB = countries[b].reduce((s, d) => s + d.count, 0)
                return totalB - totalA
              })
              return (
                <div key={region}>
                  <div className="text-[10px] font-semibold uppercase tracking-widest text-rose-500 mb-3">
                    {region}
                  </div>
                  <div className="space-y-3">
                    {sortedCountries.map(country => {
                      const dests = countries[country].sort((a, b) => b.count - a.count)
                      // If country has 1 destination, show inline
                      if (dests.length === 1) {
                        const d = dests[0]
                        return (
                          <Link
                            key={d.slug}
                            href={lp(`/destinations/${d.slug}`)}
                            onClick={() => setOpen(null)}
                            className="group flex items-center justify-between py-0.5 text-[13px] text-zinc-700 hover:text-rose-500 transition-colors"
                          >
                            <span>{country}</span>
                            <span className="text-zinc-300 text-xs tabular-nums group-hover:text-rose-400">{d.count}</span>
                          </Link>
                        )
                      }
                      // Multiple destinations under one country — show country header + indented children
                      const total = dests.reduce((s, d) => s + d.count, 0)
                      return (
                        <div key={country}>
                          <div className="flex items-center justify-between py-0.5 text-[13px] font-semibold text-zinc-900">
                            <span>{country}</span>
                            <span className="text-zinc-300 text-xs tabular-nums">{total}</span>
                          </div>
                          <ul className="mt-1 space-y-0.5 border-l border-zinc-100 pl-3 ml-0">
                            {dests.map(d => (
                              <li key={d.slug}>
                                <Link
                                  href={lp(`/destinations/${d.slug}`)}
                                  onClick={() => setOpen(null)}
                                  className="group flex items-center justify-between py-1 text-[12px] text-zinc-600 hover:text-rose-500 transition-colors"
                                >
                                  <span>{d.label}</span>
                                  <span className="text-zinc-300 text-[11px] tabular-nums group-hover:text-rose-400">{d.count}</span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
          <div className="mt-6 pt-5 border-t border-zinc-100 flex items-center justify-between">
            <span className="text-zinc-400 text-xs">
              {tx(locale, 'nav.destinationsHotelsCount', '{destinations} destinations · {hotels} hotels').replace('{destinations}', String(destinations.length)).replace('{hotels}', String(destinations.reduce((s, d) => s + d.count, 0)))}
            </span>
            <Link href={lp('/quiz')} onClick={() => setOpen(null)} className="text-rose-500 text-sm font-medium hover:underline">
              {tx(locale, 'nav.notSureTakeQuiz', 'Not sure? Take the quiz →')}
            </Link>
          </div>
        </div>
      )}

      {/* Categories mega dropdown */}
      {open === 'exp' && (
        <div className="absolute left-1/2 -translate-x-1/2 top-[60px] w-[min(92vw,720px)] bg-white border border-zinc-100 rounded-b-2xl shadow-2xl z-[60] p-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {experiences.map(e => (
              <Link
                key={e.slug}
                href={lp(`/experiences/${e.slug}`)}
                onClick={() => setOpen(null)}
                className="group flex gap-3 items-start p-3 rounded-xl hover:bg-rose-50 transition-colors"
              >
                <span className="text-2xl shrink-0">{e.icon}</span>
                <div>
                  <div className="text-[13px] font-medium text-zinc-900 group-hover:text-rose-500 transition-colors">{e.label}</div>
                  <div className="text-zinc-400 text-xs mt-0.5">{e.sub}</div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-5 pt-4 border-t border-zinc-100 flex items-center justify-between">
            <span className="text-zinc-400 text-xs">{tx(locale, 'nav.everyStyleScored', 'Every style of honeymoon, scored')}</span>
            <Link href={lp('/quiz')} onClick={() => setOpen(null)} className="text-rose-500 text-sm font-medium hover:underline">
              {tx(locale, 'nav.take60SecondQuiz', 'Take the 60-second quiz →')}
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
