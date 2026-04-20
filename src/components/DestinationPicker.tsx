'use client'
import { useRouter } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'

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
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
      // Focus the input shortly after open for nice transition
      setTimeout(() => inputRef.current?.focus(), 50)
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const filtered = query.trim()
    ? destinations.filter(d => d.label.toLowerCase().includes(query.toLowerCase()))
    : destinations

  const grouped = filtered.reduce((acc, d) => {
    ;(acc[d.region] ??= []).push(d)
    return acc
  }, {} as Record<string, DestinationOption[]>)

  const go = (slug: string) => {
    setOpen(false)
    router.push(`/destinations/${slug}`)
  }

  return (
    <>
      {/* Trigger (in the hero) */}
      <div className="flex gap-3 flex-col sm:flex-row">
        <button
          onClick={() => setOpen(true)}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center gap-2 px-5 py-3.5 flex-1 max-w-sm hover:border-white/50 transition-colors text-left"
        >
          <svg className="w-4 h-4 text-white/50 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <span className="text-white/60 text-sm">Where to? Maldives, Bora Bora, St. Lucia…</span>
        </button>
        <button
          onClick={() => setOpen(true)}
          className="bg-white text-zinc-900 font-semibold text-sm px-7 py-3.5 rounded-full hover:bg-zinc-100 transition-colors text-center whitespace-nowrap"
        >
          Explore Hotels
        </button>
      </div>

      {/* Fullscreen modal overlay */}
      {open && (
        <div
          className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setOpen(false)}
        >
          <div
            className="absolute inset-x-4 top-6 sm:inset-x-0 sm:top-16 sm:mx-auto sm:max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[calc(100vh-48px)] flex flex-col"
            onClick={e => e.stopPropagation()}
          >
            {/* Search header */}
            <div className="border-b border-zinc-100 p-4 sm:p-5 flex items-center gap-3">
              <svg className="w-5 h-5 text-zinc-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Type a destination…"
                className="flex-1 bg-transparent text-zinc-900 text-lg placeholder-zinc-400 outline-none"
                onKeyDown={e => {
                  if (e.key === 'Enter' && filtered.length > 0) go(filtered[0].slug)
                }}
              />
              <button
                onClick={() => setOpen(false)}
                className="shrink-0 p-2 rounded-full hover:bg-zinc-100 text-zinc-400 hover:text-zinc-900 transition-colors"
                aria-label="Close"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Scrollable list */}
            <div className="overflow-y-auto flex-1 min-h-0">
              {Object.keys(grouped).length === 0 ? (
                <div className="px-6 py-12 text-zinc-400 text-sm text-center">
                  No destinations match <span className="font-semibold">"{query}"</span>.
                </div>
              ) : (
                Object.entries(grouped).map(([region, dests]) => (
                  <div key={region} className="py-2">
                    <div className="px-5 py-2 text-[10px] font-semibold uppercase tracking-widest text-zinc-400 bg-zinc-50 sticky top-0 z-10">
                      {region}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2">
                      {dests.map(d => (
                        <button
                          key={d.slug}
                          onClick={() => go(d.slug)}
                          className="text-left px-5 py-3.5 hover:bg-rose-50 flex items-center justify-between group transition-colors"
                        >
                          <span className="text-zinc-900 text-sm font-medium">{d.label}</span>
                          <span className="text-zinc-400 text-xs group-hover:text-rose-500 transition-colors tabular-nums">
                            {d.count} {d.count === 1 ? 'hotel' : 'hotels'}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer with quiz CTA */}
            <div className="border-t border-zinc-100 px-5 py-4 bg-zinc-50 flex items-center justify-between gap-3">
              <span className="text-zinc-500 text-xs">
                {destinations.length} destinations · {destinations.reduce((s, d) => s + d.count, 0)} hotels
              </span>
              <a href="/quiz" className="text-rose-500 text-sm font-medium hover:underline whitespace-nowrap">
                Not sure? Take the quiz →
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
