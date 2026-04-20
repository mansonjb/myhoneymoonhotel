'use client'
import { useEffect, useState } from 'react'
import { buildAllezHotelLink } from '@/lib/stay22'

interface Props {
  hotelName: string
  score: number
  priceMin: number
  slug: string
  destination: string
  country: string
}

export default function StickyBookingBar({ hotelName, score, priceMin, destination, country }: Props) {
  const [visible, setVisible] = useState(false)
  const bookingUrl = buildAllezHotelLink(hotelName, destination, country, 'sticky-bar')
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-40 transition-transform duration-300 ${visible ? 'translate-y-0' : 'translate-y-full'}`}>
      <div className="bg-white border-t border-zinc-200 shadow-2xl">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <div className="hidden sm:block">
            <div className="font-semibold text-zinc-900 text-sm truncate max-w-xs">{hotelName}</div>
            <div className="text-zinc-400 text-xs">Honeymoon Score {score}/100</div>
          </div>
          <div className="flex items-center gap-6">
            <div>
              <span className="text-zinc-400 text-xs">from </span>
              <span className="font-bold text-zinc-900 text-lg">${priceMin.toLocaleString()}</span>
              <span className="text-zinc-400 text-xs">/night</span>
            </div>
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-rose-500 hover:bg-rose-600 text-white font-semibold text-sm px-7 py-3 rounded-full transition-colors"
            >
              Check Availability →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
