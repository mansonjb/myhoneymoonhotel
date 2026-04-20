'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const COOKIE_KEY = 'mhh_cookie_consent'
type Choice = 'accepted' | 'rejected' | null

export default function CookieBanner() {
  const [choice, setChoice] = useState<Choice>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    try {
      const stored = localStorage.getItem(COOKIE_KEY) as Choice | null
      setChoice(stored ?? null)
    } catch {
      // localStorage blocked — treat as no choice yet, but don't spam the banner
      setChoice(null)
    }
  }, [])

  const save = (c: 'accepted' | 'rejected') => {
    try { localStorage.setItem(COOKIE_KEY, c) } catch {}
    setChoice(c)
    // Let analytics scripts read the choice via a custom event
    window.dispatchEvent(new CustomEvent('mhh:consent', { detail: c }))
  }

  if (!mounted || choice !== null) return null

  return (
    <div className="fixed bottom-4 inset-x-4 sm:inset-x-auto sm:left-6 sm:right-auto sm:max-w-md z-[90]">
      <div className="bg-white rounded-2xl shadow-2xl border border-zinc-100 p-5">
        <p className="text-zinc-700 text-sm leading-relaxed mb-4">
          We use <strong>analytics cookies</strong> to understand which content helps honeymooners. No advertising cookies, no cross-site tracking. You can change your choice any time.{' '}
          <Link href="/privacy" className="text-rose-500 underline">Privacy policy</Link>.
        </p>
        <div className="flex gap-2">
          <button
            onClick={() => save('rejected')}
            className="flex-1 border border-zinc-200 hover:border-zinc-400 text-zinc-700 font-medium text-sm px-4 py-2.5 rounded-full transition-colors"
          >
            Reject
          </button>
          <button
            onClick={() => save('accepted')}
            className="flex-1 bg-rose-500 hover:bg-rose-600 text-white font-semibold text-sm px-4 py-2.5 rounded-full transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}
