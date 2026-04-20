'use client'
import { useRouter } from 'next/navigation'
import { useState, useRef, useEffect } from 'react'

interface DestinationOption {
  slug: string
  label: string
  count: number
  region: string
}

interface DestinationPickerProps {
  destinations: DestinationOption[]
}

export default function DestinationPicker({ destinations }: DestinationPickerProps) {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onDocClick)
    return () => document.removeEventListener('mousedown', onDocClick)
  }, [])

  const filtered = query.trim()
    ? destinations.filter(d => d.label.toLowerCase().includes(query.toLowerCase()))
    : destinations

  // Group by region for a nicer dropdown
  const grouped = filtered.reduce((acc, d) => {
    ;(acc[d.region] ??= []).push(d)
    return acc
  }, {} as Record<string, DestinationOption[]>)

  const go = (slug: string) => {
    router.push(`/destinations/${slug}`)
  }

  return (
    <div ref={ref} className="flex gap-3 flex-col sm:flex-row relative">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center gap-2 px-5 py-3.5 flex-1 max-w-sm focus-within:border-white/50 transition-colors">
        <svg className="w-4 h-4 text-white/50 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          value={query}
          onChange={e => { setQuery(e.target.value); setOpen(true) }}
          onFocus={() => setOpen(true)}
          placeholder="Maldives, Bora Bora, St. Lucia…"
          className="bg-transparent text-white placeholder-white/50 text-sm flex-1 outline-none"
          onKeyDown={e => {
            if (e.key === 'Enter' && filtered.length > 0) go(filtered[0].slug)
            if (e.key === 'Escape') setOpen(false)
          }}
        />
      </div>
      <button
        onClick={() => setOpen(o => !o)}
        className="bg-white text-zinc-900 font-semibold text-sm px-7 py-3.5 rounded-full hover:bg-zinc-100 transition-colors text-center whitespace-nowrap"
      >
        Explore Hotels
      </button>

      {open && (
        <div className="absolute top-[calc(100%+12px)] left-0 right-0 sm:right-auto sm:w-[520px] bg-white rounded-2xl shadow-2xl border border-zinc-100 max-h-[60vh] overflow-auto z-50">
          {Object.entries(grouped).length === 0 ? (
            <div className="px-5 py-6 text-zinc-400 text-sm">No destinations match "{query}"</div>
          ) : (
            Object.entries(grouped).map(([region, dests]) => (
              <div key={region} className="py-2">
                <div className="px-5 py-2 text-[10px] font-semibold uppercase tracking-widest text-zinc-400 bg-zinc-50/50 sticky top-0">{region}</div>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  {dests.map(d => (
                    <button
                      key={d.slug}
                      onClick={() => go(d.slug)}
                      className="text-left px-5 py-2.5 hover:bg-rose-50 flex items-center justify-between group transition-colors"
                    >
                      <span className="text-zinc-900 text-sm font-medium capitalize">{d.label}</span>
                      <span className="text-zinc-400 text-xs group-hover:text-rose-500 transition-colors">{d.count}</span>
                    </button>
                  ))}
                </div>
              </div>
            ))
          )}
          <div className="px-5 py-3 border-t border-zinc-100 bg-zinc-50/50">
            <a href="/quiz" className="text-rose-500 text-sm font-medium hover:underline">Not sure? Take the 60-second quiz →</a>
          </div>
        </div>
      )}
    </div>
  )
}
