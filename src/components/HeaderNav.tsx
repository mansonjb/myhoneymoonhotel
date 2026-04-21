'use client'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'

interface DestItem { slug: string; label: string; count: number; region: string }
interface ExpItem  { slug: string; label: string; icon: string; sub: string }

interface HeaderNavProps {
  destinations: DestItem[]
  experiences: ExpItem[]
}

const REGION_ORDER = [
  'Indian Ocean',
  'South Pacific',
  'Caribbean & Americas',
  'Europe',
  'Asia',
  'Africa Safari',
  'Africa & Middle East',
  'North America',
]

export default function HeaderNav({ destinations, experiences }: HeaderNavProps) {
  const [open, setOpen] = useState<null | 'dest' | 'exp'>(null)
  const ref = useRef<HTMLDivElement>(null)

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

  // Group destinations by region
  const grouped = destinations.reduce((acc, d) => {
    ;(acc[d.region] ??= []).push(d)
    return acc
  }, {} as Record<string, DestItem[]>)

  const sortedRegions = Object.keys(grouped).sort((a, b) => REGION_ORDER.indexOf(a) - REGION_ORDER.indexOf(b))

  const triggerClass = 'hover:text-zinc-900 transition-colors inline-flex items-center gap-1'
  const activeClass = 'text-zinc-900'

  return (
    <div ref={ref} className="hidden md:flex items-center gap-8 text-[13px] text-zinc-500">
      {/* DESTINATIONS */}
      <button
        onClick={() => setOpen(open === 'dest' ? null : 'dest')}
        className={`${triggerClass} ${open === 'dest' ? activeClass : ''}`}
      >
        Destinations
        <svg className={`w-3 h-3 transition-transform ${open === 'dest' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* CATEGORIES */}
      <button
        onClick={() => setOpen(open === 'exp' ? null : 'exp')}
        className={`${triggerClass} ${open === 'exp' ? activeClass : ''}`}
      >
        Categories
        <svg className={`w-3 h-3 transition-transform ${open === 'exp' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <Link href="/quiz" className="hover:text-zinc-900 transition-colors">Quiz</Link>
      <Link href="/about" className="hover:text-zinc-900 transition-colors">About</Link>

      {/* Destinations mega dropdown */}
      {open === 'dest' && (
        <div className="absolute left-1/2 -translate-x-1/2 top-[60px] w-[min(92vw,900px)] bg-white border border-zinc-100 rounded-b-2xl shadow-2xl z-[60] p-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-5">
            {sortedRegions.map(region => (
              <div key={region}>
                <div className="text-[10px] font-semibold uppercase tracking-widest text-rose-500 mb-3">{region}</div>
                <ul className="space-y-1.5">
                  {grouped[region]
                    .sort((a, b) => b.count - a.count)
                    .map(d => (
                      <li key={d.slug}>
                        <Link
                          href={`/destinations/${d.slug}`}
                          onClick={() => setOpen(null)}
                          className="group flex items-center justify-between py-1 text-[13px] text-zinc-700 hover:text-rose-500 transition-colors"
                        >
                          <span>{d.label}</span>
                          <span className="text-zinc-300 text-xs tabular-nums group-hover:text-rose-400">{d.count}</span>
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-5 border-t border-zinc-100 flex items-center justify-between">
            <span className="text-zinc-400 text-xs">{destinations.length} destinations · {destinations.reduce((s, d) => s + d.count, 0)} hotels</span>
            <Link href="/quiz" onClick={() => setOpen(null)} className="text-rose-500 text-sm font-medium hover:underline">
              Not sure? Take the quiz →
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
                href={`/experiences/${e.slug}`}
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
            <span className="text-zinc-400 text-xs">Every style of honeymoon, scored</span>
            <Link href="/quiz" onClick={() => setOpen(null)} className="text-rose-500 text-sm font-medium hover:underline">
              Take the 60-second quiz →
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
