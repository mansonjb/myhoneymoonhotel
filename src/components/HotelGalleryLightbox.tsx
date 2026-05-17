'use client'

import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'

type Photo = { url: string; alt: string }

type Props = {
  photos: Photo[]
  hotelName: string
  gridClassName?: string
}

export default function HotelGalleryLightbox({ photos, hotelName, gridClassName }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const closeBtnRef = useRef<HTMLButtonElement | null>(null)
  const lastFocusedRef = useRef<HTMLElement | null>(null)

  const open = useCallback((i: number) => {
    if (typeof document !== 'undefined') {
      lastFocusedRef.current = document.activeElement as HTMLElement | null
    }
    setOpenIndex(i)
  }, [])

  const close = useCallback(() => {
    setOpenIndex(null)
  }, [])

  const next = useCallback(() => {
    setOpenIndex(i => (i === null ? null : (i + 1) % photos.length))
  }, [photos.length])

  const prev = useCallback(() => {
    setOpenIndex(i => (i === null ? null : (i - 1 + photos.length) % photos.length))
  }, [photos.length])

  // Keyboard nav + focus trap + scroll lock while open
  useEffect(() => {
    if (openIndex === null) return

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        close()
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        next()
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        prev()
      } else if (e.key === 'Tab') {
        // Trap focus on the close button (single focusable element approach)
        e.preventDefault()
        closeBtnRef.current?.focus()
      }
    }

    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    // Initial focus
    closeBtnRef.current?.focus()

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
      // Restore focus when fully closed
      if (lastFocusedRef.current && document.contains(lastFocusedRef.current)) {
        lastFocusedRef.current.focus()
      }
    }
  }, [openIndex, close, next, prev])

  if (!photos || photos.length === 0) return null

  const gridClass =
    gridClassName ??
    `grid gap-1.5 px-1.5 mt-1.5 ${
      photos.length === 1
        ? 'grid-cols-1 max-w-2xl mx-auto'
        : photos.length === 2
        ? 'grid-cols-2'
        : photos.length === 3
        ? 'grid-cols-3'
        : 'grid-cols-4'
    }`

  const current = openIndex !== null ? photos[openIndex] : null

  return (
    <>
      <div className={gridClass}>
        {photos.map((photo, i) => (
          <button
            key={i}
            type="button"
            onClick={() => open(i)}
            aria-label={`Open photo ${i + 1} of ${photos.length}`}
            className="relative aspect-[4/3] overflow-hidden rounded-xl group focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400"
          >
            <Image
              src={photo.url}
              alt={photo.alt}
              fill
              loading="lazy"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes={photos.length === 1 ? '50vw' : '25vw'}
            />
          </button>
        ))}
      </div>

      {openIndex !== null && current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${hotelName} photo gallery`}
          className="fixed inset-0 bg-black/95 z-[120] flex items-center justify-center"
          onClick={close}
        >
          {/* Close */}
          <button
            ref={closeBtnRef}
            type="button"
            aria-label="Close gallery"
            onClick={(e) => { e.stopPropagation(); close() }}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6l-12 12" />
            </svg>
          </button>

          {/* Prev */}
          {photos.length > 1 && (
            <button
              type="button"
              aria-label="Previous photo"
              onClick={(e) => { e.stopPropagation(); prev() }}
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
              </svg>
            </button>
          )}

          {/* Next */}
          {photos.length > 1 && (
            <button
              type="button"
              aria-label="Next photo"
              onClick={(e) => { e.stopPropagation(); next() }}
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 6l6 6-6 6" />
              </svg>
            </button>
          )}

          {/* Image */}
          <div
            className="relative max-h-[90vh] max-w-[95vw] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              key={current.url}
              src={current.url}
              alt={current.alt}
              width={1920}
              height={1280}
              className="object-contain max-h-[90vh] max-w-[95vw] w-auto h-auto"
              sizes="95vw"
              priority
            />
          </div>

          {/* Caption */}
          <div className="absolute bottom-4 inset-x-0 flex justify-center pointer-events-none">
            <div className="bg-black/40 backdrop-blur-sm text-white text-xs sm:text-sm px-4 py-2 rounded-full">
              <span className="font-medium">{hotelName}</span>
              <span className="text-white/60"> · Photo {openIndex + 1}/{photos.length}</span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
