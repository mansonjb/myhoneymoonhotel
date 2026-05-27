'use client'

import { useState } from 'react'

interface PriceDropAlertProps {
  hotelSlug: string
  hotelName: string
  currentPrice: number
  locale: 'en' | 'es' | 'pt' | 'fr'
}

type Status = 'idle' | 'loading' | 'success' | 'error'

const COPY = {
  en: {
    title: (name: string) => `Track ${name}`,
    sub: "We'll email you when the price drops.",
    placeholder: 'your@email.com',
    cta: 'Set alert →',
    footer: 'Avg: 3 weeks · Free · Unsubscribe any time',
    success: "✓ We'll email you. Average alert: 3 weeks.",
    error: "Couldn't subscribe — please try again.",
    label: 'Email for price drop alerts',
  },
  es: {
    title: (name: string) => `Seguir ${name}`,
    sub: 'Te avisaremos cuando baje el precio.',
    placeholder: 'tu@email.com',
    cta: 'Activar alerta →',
    footer: 'Promedio: 3 semanas · Gratis · Cancela cuando quieras',
    success: '✓ Te avisaremos. Alerta media: 3 semanas.',
    error: 'No se pudo suscribir — inténtalo de nuevo.',
    label: 'Email para alertas de bajada de precio',
  },
  pt: {
    title: (name: string) => `Acompanhar ${name}`,
    sub: 'Avisamos quando o preço baixar.',
    placeholder: 'seu@email.com',
    cta: 'Ativar alerta →',
    footer: 'Média: 3 semanas · Grátis · Cancele a qualquer momento',
    success: '✓ Avisaremos por email. Alerta média: 3 semanas.',
    error: 'Não foi possível inscrever — tente novamente.',
    label: 'Email para alertas de redução de preço',
  },
  fr: {
    title: (name: string) => `Suivre ${name}`,
    sub: 'Nous vous avertirons en cas de baisse de prix.',
    placeholder: 'votre@email.com',
    cta: 'Activer l\'alerte →',
    footer: 'Moyenne : 3 semaines · Gratuit · Désabonnement à tout moment',
    success: '✓ Nous vous écrirons. Délai moyen : 3 semaines.',
    error: 'Échec de l\'inscription — veuillez réessayer.',
    label: 'E-mail pour les alertes de baisse de prix',
  },
} as const

export default function PriceDropAlert({ hotelSlug, hotelName, currentPrice, locale }: PriceDropAlertProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const t = COPY[locale] ?? COPY.en

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email.includes('@')) {
      setStatus('error')
      return
    }
    setStatus('loading')
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          source: 'price-drop',
          hotelSlug,
          hotelName,
          currentPrice,
        }),
      })
      if (!res.ok) throw new Error('failed')
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="max-w-md my-8 bg-zinc-50 border border-zinc-200 rounded-2xl p-5">
      <div className="flex items-start gap-3 mb-3">
        <span className="text-xl" aria-hidden>🔔</span>
        <div>
          <h3 className="font-semibold text-zinc-900 text-sm leading-snug">{t.title(hotelName)}</h3>
          <p className="text-zinc-500 text-xs mt-0.5">{t.sub}</p>
        </div>
      </div>

      {status === 'success' ? (
        <p className="text-emerald-700 text-sm font-medium py-2">{t.success}</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
          <label htmlFor={`pricedrop-${hotelSlug}`} className="sr-only">{t.label}</label>
          <input
            id={`pricedrop-${hotelSlug}`}
            type="email"
            required
            aria-label={t.label}
            placeholder={t.placeholder}
            value={email}
            onChange={(e) => { setEmail(e.target.value); if (status === 'error') setStatus('idle') }}
            className="flex-1 px-3 py-2 text-sm rounded-lg border border-zinc-200 bg-white focus:outline-none focus:border-rose-400 focus:ring-1 focus:ring-rose-400"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="px-4 py-2 text-sm font-semibold bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition-colors disabled:opacity-60 whitespace-nowrap"
          >
            {t.cta}
          </button>
        </form>
      )}

      {status === 'error' && (
        <p className="text-rose-600 text-xs mt-2">{t.error}</p>
      )}

      <p className="text-zinc-400 text-[11px] mt-3">{t.footer}</p>
    </div>
  )
}
