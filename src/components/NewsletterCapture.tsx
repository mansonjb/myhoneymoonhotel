'use client'
import { useState } from 'react'

export default function NewsletterCapture() {
  const [email, setEmail] = useState('')
  const [state, setState] = useState<'idle' | 'submitting' | 'ok' | 'error'>('idle')

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.includes('@')) return
    setState('submitting')
    try {
      // Temporary: POST to a placeholder endpoint. Replace with ConvertKit / Mailchimp / Buttondown later.
      await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      }).catch(() => null)
      setState('ok')
      setEmail('')
    } catch {
      setState('error')
    }
  }

  if (state === 'ok') {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-4 text-emerald-800 text-sm">
        ✓ You're in. We'll email the best new honeymoon hotels once a month. Unsubscribe any time.
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-2">
      <input
        type="email"
        required
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="your@email.com"
        className="flex-1 bg-white border border-zinc-200 rounded-full px-5 py-3 text-sm text-zinc-900 placeholder-zinc-400 outline-none focus:border-rose-400 transition-colors"
      />
      <button
        type="submit"
        disabled={state === 'submitting'}
        className="bg-rose-500 hover:bg-rose-600 disabled:opacity-50 text-white font-semibold text-sm px-6 py-3 rounded-full transition-colors whitespace-nowrap"
      >
        {state === 'submitting' ? 'Sending…' : 'Get the best picks'}
      </button>
    </form>
  )
}
