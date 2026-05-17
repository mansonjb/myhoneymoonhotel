'use client'
import { useState, useEffect, useRef, useMemo, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { useLocale } from '@/lib/useLocale'
import { localizedHref } from '@/lib/locale-paths'

interface RawEntry {
  t: 'h' | 'd' | 'e' | 'p'
  s: string
  n: string
  ds?: string
  c?: string
  sc?: number
}

// Module-scoped cache so we only fetch the index once per session.
let cachedIndex: RawEntry[] | null = null
let inflight: Promise<RawEntry[]> | null = null

function fetchIndex(): Promise<RawEntry[]> {
  if (cachedIndex) return Promise.resolve(cachedIndex)
  if (inflight) return inflight
  inflight = fetch('/search-index.json', { cache: 'force-cache' })
    .then(r => r.json() as Promise<RawEntry[]>)
    .then(data => {
      cachedIndex = data
      return data
    })
    .finally(() => { inflight = null })
  return inflight
}

function SearchIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  )
}

function typeIcon(t: RawEntry['t']) {
  switch (t) {
    case 'h': return '◆'
    case 'd': return '🌍'
    case 'e': return '✨'
    case 'p': return '📄'
  }
}

function typeLabel(t: RawEntry['t']) {
  switch (t) {
    case 'h': return 'Hotel'
    case 'd': return 'Destination'
    case 'e': return 'Experience'
    case 'p': return 'Page'
  }
}

export default function HeaderSearch() {
  const router = useRouter()
  const locale = useLocale()
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [debounced, setDebounced] = useState('')
  const [index, setIndex] = useState<RawEntry[] | null>(cachedIndex)
  const [highlighted, setHighlighted] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const dialogRef = useRef<HTMLDivElement>(null)
  const previouslyFocused = useRef<HTMLElement | null>(null)

  // Lazy-load the index on first open.
  useEffect(() => {
    if (open && !index) {
      fetchIndex().then(setIndex).catch(() => setIndex([]))
    }
  }, [open, index])

  // Debounce input (80ms).
  useEffect(() => {
    const id = window.setTimeout(() => setDebounced(query), 80)
    return () => window.clearTimeout(id)
  }, [query])

  // Reset highlight when query changes.
  useEffect(() => { setHighlighted(0) }, [debounced])

  // Esc to close + focus management.
  useEffect(() => {
    if (!open) return
    previouslyFocused.current = (document.activeElement as HTMLElement) ?? null
    const t = window.setTimeout(() => inputRef.current?.focus(), 0)
    document.body.style.overflow = 'hidden'
    return () => {
      window.clearTimeout(t)
      document.body.style.overflow = ''
      previouslyFocused.current?.focus?.()
    }
  }, [open])

  const results = useMemo(() => {
    const q = debounced.trim().toLowerCase()
    if (!q || !index) return []
    const out: RawEntry[] = []
    for (const e of index) {
      const hay =
        e.n.toLowerCase() +
        ' ' + (e.ds ?? '').toLowerCase() +
        ' ' + (e.c ?? '').toLowerCase()
      if (hay.includes(q)) {
        out.push(e)
        if (out.length >= 8) break
      }
    }
    return out
  }, [debounced, index])

  const close = useCallback(() => {
    setOpen(false)
    setQuery('')
    setDebounced('')
  }, [])

  const navigate = useCallback((entry: RawEntry) => {
    let path = '/'
    switch (entry.t) {
      case 'h': path = `/hotels/${entry.s}`; break
      case 'd': path = `/destinations/${entry.s}`; break
      case 'e': path = `/experiences/${entry.s}`; break
      case 'p': path = `/${entry.s}`; break
    }
    close()
    router.push(localizedHref(path, locale))
  }, [router, locale, close])

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Escape') {
      e.preventDefault()
      close()
      return
    }
    if (!results.length) return
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setHighlighted(h => (h + 1) % results.length)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setHighlighted(h => (h - 1 + results.length) % results.length)
    } else if (e.key === 'Enter') {
      e.preventDefault()
      const r = results[highlighted]
      if (r) navigate(r)
    } else if (e.key === 'Tab') {
      // Trivial focus trap — only one focusable element (input). Block tabbing out.
      e.preventDefault()
      inputRef.current?.focus()
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open search"
        className="inline-flex items-center justify-center w-9 h-9 rounded-full text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 transition-colors"
      >
        <SearchIcon />
      </button>

      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-[110] flex items-start justify-center pt-[12vh] px-4"
          onMouseDown={(e) => { if (e.target === e.currentTarget) close() }}
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label="Search the site"
            className="w-[90vw] max-w-2xl bg-white rounded-2xl shadow-2xl p-2"
            onKeyDown={onKeyDown}
          >
            <div className="flex items-center gap-3 px-4 py-3 border-b border-zinc-100">
              <SearchIcon className="w-5 h-5 text-zinc-400 shrink-0" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search hotels, destinations, experiences..."
                aria-label="Search hotels, destinations, experiences"
                className="flex-1 bg-transparent outline-none text-[15px] text-zinc-900 placeholder:text-zinc-400"
                autoComplete="off"
                spellCheck={false}
              />
              <kbd className="hidden sm:inline-block text-[10px] text-zinc-400 border border-zinc-200 rounded px-1.5 py-0.5">Esc</kbd>
            </div>

            <div className="max-h-[60vh] overflow-y-auto">
              {debounced.trim() === '' ? (
                <div className="px-4 py-8 text-center text-sm text-zinc-400">
                  Start typing to search {index ? `${index.length} entries` : '...'}
                </div>
              ) : results.length === 0 ? (
                <div className="px-4 py-8 text-center text-sm text-zinc-500">
                  No results — try a destination name or hotel name
                </div>
              ) : (
                <ul role="listbox" className="py-1">
                  {results.map((r, i) => {
                    const isActive = i === highlighted
                    const sub = r.t === 'h' ? r.ds : r.t === 'd' ? r.c : typeLabel(r.t)
                    return (
                      <li key={`${r.t}:${r.s}`} role="option" aria-selected={isActive}>
                        <button
                          type="button"
                          onMouseEnter={() => setHighlighted(i)}
                          onClick={() => navigate(r)}
                          className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors ${isActive ? 'bg-rose-50' : 'hover:bg-zinc-50'}`}
                        >
                          <span className={`text-lg shrink-0 ${r.t === 'h' ? 'text-rose-400' : ''}`} aria-hidden="true">
                            {typeIcon(r.t)}
                          </span>
                          <span className="flex-1 min-w-0">
                            <span className="block text-[14px] text-zinc-900 truncate">{r.n}</span>
                            {sub && (
                              <span className="block text-[12px] text-zinc-400 truncate">{sub}</span>
                            )}
                          </span>
                          <span className="text-[10px] uppercase tracking-wider text-zinc-300 shrink-0">
                            {typeLabel(r.t)}
                          </span>
                        </button>
                      </li>
                    )
                  })}
                </ul>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
