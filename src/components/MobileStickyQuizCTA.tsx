'use client'
import { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { useLocale } from '@/lib/useLocale'
import { localizedHref } from '@/lib/locale-paths'

const DISMISS_KEY = 'mhh_mobile_cta_dismissed'

export default function MobileStickyQuizCTA() {
  const pathname = usePathname()
  const locale = useLocale()
  const router = useRouter()
  const [dismissed, setDismissed] = useState(true) // start hidden until we check storage

  useEffect(() => {
    try {
      setDismissed(localStorage.getItem(DISMISS_KEY) === '1')
    } catch {
      setDismissed(false)
    }
  }, [])

  // Hide on quiz pages and hotel detail pages
  const hide =
    pathname?.includes('/quiz') ||
    /\/hotels\/[^/]+$/.test(pathname ?? '') ||
    dismissed

  if (hide) return null

  const onDismiss = (e: React.MouseEvent) => {
    e.stopPropagation()
    try {
      localStorage.setItem(DISMISS_KEY, '1')
    } catch {}
    setDismissed(true)
  }

  const onClick = () => {
    router.push(localizedHref('/quiz', locale))
  }

  return (
    <div className="md:hidden fixed bottom-3 inset-x-3 z-40">
      <div className="relative flex items-center">
        <button
          type="button"
          onClick={onClick}
          className="flex-1 bg-rose-500 hover:bg-rose-600 text-white font-semibold py-3.5 rounded-full shadow-lg transition-colors text-sm"
        >
          Take the 2-min Quiz →
        </button>
        <button
          type="button"
          onClick={onDismiss}
          aria-label="Dismiss"
          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-white/80 hover:text-white text-lg leading-none"
        >
          ×
        </button>
      </div>
    </div>
  )
}
