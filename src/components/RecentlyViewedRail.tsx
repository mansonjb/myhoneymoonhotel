'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useLocale } from '@/lib/useLocale'
import { localizedHref } from '@/lib/locale-paths'

type Item = {
  slug: string
  name: string
  hero: string
  score: number
  priceMin?: number
}

const STORAGE_KEY = 'mhh_recent_hotels'

export default function RecentlyViewedRail() {
  const locale = useLocale()
  const [items, setItems] = useState<Item[]>([])
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    setHydrated(true)
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (!raw) return
      const parsed = JSON.parse(raw) as Item[]
      if (Array.isArray(parsed)) setItems(parsed)
    } catch {}
  }, [])

  const clear = () => {
    try {
      localStorage.removeItem(STORAGE_KEY)
    } catch {}
    setItems([])
  }

  if (!hydrated || items.length < 2) return null

  return (
    <section className="max-w-7xl mx-auto px-6 py-14">
      <div className="flex items-end justify-between mb-6">
        <h2 className="font-display text-2xl sm:text-3xl text-zinc-900">Recently viewed</h2>
        <button
          type="button"
          onClick={clear}
          className="text-zinc-400 hover:text-zinc-700 text-xs font-medium transition-colors"
          aria-label="Clear recently viewed"
        >
          × clear
        </button>
      </div>

      <div className="flex md:grid md:grid-cols-5 gap-4 overflow-x-auto md:overflow-visible -mx-6 px-6 md:mx-0 md:px-0 snap-x snap-mandatory md:snap-none">
        {items.map(item => (
          <Link
            key={item.slug}
            href={localizedHref(`/hotels/${item.slug}`, locale)}
            className="group shrink-0 w-56 md:w-auto snap-start block"
          >
            <div className="relative h-32 rounded-xl overflow-hidden bg-zinc-100">
              {item.hero && (
                <Image
                  src={item.hero}
                  alt={item.name}
                  fill
                  loading="lazy"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 20vw"
                />
              )}
              <div className="absolute top-2 right-2 bg-white/95 backdrop-blur-sm text-zinc-900 text-xs font-semibold px-2 py-0.5 rounded-full tabular-nums">
                {item.score}
              </div>
            </div>
            <div className="mt-2">
              <div className="text-sm font-medium text-zinc-900 truncate group-hover:text-rose-500 transition-colors">
                {item.name}
              </div>
              {typeof item.priceMin === 'number' && item.priceMin > 0 && (
                <div className="text-xs text-zinc-400 mt-0.5">From ${item.priceMin.toLocaleString()}/night</div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
