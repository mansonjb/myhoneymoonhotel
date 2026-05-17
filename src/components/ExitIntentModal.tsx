'use client'
import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'

const SESSION_KEY = 'mhh_exit_seen'
const CONSENT_KEY = 'mhh_cookie_consent'

export default function ExitIntentModal() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [state, setState] = useState<'idle' | 'submitting' | 'ok' | 'error'>('idle')
  const emailRef = useRef<HTMLInputElement>(null)
  const firedRef = useRef(false)

  // Skip excluded paths
  const excluded =
    pathname?.includes('/quiz') || pathname?.includes('/contact')

  useEffect(() => {
    if (excluded) return
    if (typeof window === 'undefined') return

    // Already seen this session
    try {
      if (localStorage.getItem(SESSION_KEY) === '1') return
      // Don't trigger if cookie consent banner is still open (no value set)
      if (!localStorage.getItem(CONSENT_KEY)) return
    } catch {
      return
    }

    const trigger = () => {
      if (firedRef.current) return
      firedRef.current = true
      try {
        localStorage.setItem(SESSION_KEY, '1')
      } catch {}
      setOpen(true)
    }

    const isCoarse =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(pointer: coarse)').matches

    let scrollHandler: (() => void) | null = null
    let timer: ReturnType<typeof setTimeout> | null = null
    let mouseHandler: ((e: MouseEvent) => void) | null = null

    if (isCoarse) {
      // Mobile: 50% scroll AND 20s on page
      let scrolled = false
      let timeReached = false
      const maybe = () => {
        if (scrolled && timeReached) trigger()
      }
      scrollHandler = () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop
        const docHeight =
          (document.documentElement.scrollHeight || document.body.scrollHeight) -
          window.innerHeight
        if (docHeight > 0 && scrollTop / docHeight >= 0.5) {
          scrolled = true
          maybe()
        }
      }
      window.addEventListener('scroll', scrollHandler, { passive: true })
      timer = setTimeout(() => {
        timeReached = true
        maybe()
      }, 20000)
    } else {
      // Desktop: mouseout near top
      mouseHandler = (e: MouseEvent) => {
        if (e.clientY <= 0 && e.relatedTarget == null) {
          trigger()
        }
      }
      document.addEventListener('mouseout', mouseHandler)
    }

    return () => {
      if (scrollHandler) window.removeEventListener('scroll', scrollHandler)
      if (timer) clearTimeout(timer)
      if (mouseHandler) document.removeEventListener('mouseout', mouseHandler)
    }
  }, [excluded, pathname])

  // Focus email input on open
  useEffect(() => {
    if (open && emailRef.current) {
      emailRef.current.focus()
    }
  }, [open])

  // Esc to close
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  if (!open || excluded) return null

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.includes('@')) return
    setState('submitting')
    try {
      await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'exit_intent' }),
      }).catch(() => null)
      setState('ok')
      setEmail('')
    } catch {
      setState('error')
    }
  }

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/60 flex items-center justify-center"
      onClick={() => setOpen(false)}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="exit-intent-title"
        className="relative max-w-md w-full mx-4 rounded-2xl bg-white p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close"
          className="absolute top-3 right-4 text-2xl leading-none text-zinc-400 hover:text-zinc-700 transition-colors"
        >
          ×
        </button>

        <h2
          id="exit-intent-title"
          className="font-display text-2xl text-zinc-900 mb-2 pr-6"
        >
          Get the 12-month honeymoon calendar
        </h2>
        <p className="text-zinc-500 text-sm leading-relaxed mb-5">
          One short edit a month — the best destination + 3 fresh hotels we
          just scored. No spam.
        </p>

        {state === 'ok' ? (
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-4 text-emerald-800 text-sm">
            ✓ You're in. Watch your inbox for the next edit.
          </div>
        ) : (
          <form onSubmit={onSubmit} className="flex flex-col gap-2">
            <label htmlFor="exit-intent-email" className="sr-only">
              Email address
            </label>
            <input
              ref={emailRef}
              id="exit-intent-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              aria-label="Email address"
              className="bg-white border border-zinc-200 rounded-full px-5 py-3 text-sm text-zinc-900 placeholder-zinc-400 outline-none focus:border-rose-400 transition-colors"
            />
            <button
              type="submit"
              disabled={state === 'submitting'}
              aria-busy={state === 'submitting'}
              className="bg-rose-500 hover:bg-rose-600 disabled:opacity-50 text-white font-semibold text-sm px-6 py-3 rounded-full transition-colors"
            >
              {state === 'submitting' ? 'Sending…' : 'Send me the calendar'}
            </button>
          </form>
        )}

        <button
          type="button"
          onClick={() => setOpen(false)}
          className="block w-full text-center mt-4 text-xs text-zinc-400 hover:text-zinc-600 underline underline-offset-2 transition-colors"
        >
          No thanks, I'm just browsing
        </button>
      </div>
    </div>
  )
}
