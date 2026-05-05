import 'server-only'
import * as fs from 'fs'
import * as path from 'path'
import type { Hotel, FAQ, ItineraryDay } from '../../types/hotel'
import type { Locale } from '@/i18n/locales'
import { getHotelBySlug } from './hotels'

interface OverlayHotel {
  name?: string
  content?: {
    verdict?: string
    best_room?: string
    itinerary_7_nights?: Array<{ day: number; title?: string; description?: string }>
    honest_caveats?: string[]
    caveats?: string[]
    hotel_email_template?: string
    email_template?: string
    faqs?: FAQ[]
  }
}

const I18N_DIR = path.join(process.cwd(), 'data', 'i18n')

export function getLocalizedHotel(slug: string, locale: Locale): Hotel | null {
  const base = getHotelBySlug(slug)
  if (!base) return null
  if (locale === 'en') return base

  const overlayPath = path.join(I18N_DIR, locale, 'hotels', `${slug}.json`)
  if (!fs.existsSync(overlayPath)) return base // fallback to English

  try {
    const overlay: OverlayHotel = JSON.parse(fs.readFileSync(overlayPath, 'utf-8'))
    return mergeHotel(base, overlay)
  } catch {
    return base
  }
}

function mergeHotel(base: Hotel, overlay: OverlayHotel): Hotel {
  const o = overlay.content ?? {}

  const mergedItinerary: ItineraryDay[] = o.itinerary_7_nights
    ? base.content.itinerary_7_nights.map((day, i) => ({
        ...day,
        title: o.itinerary_7_nights![i]?.title ?? day.title,
        description: o.itinerary_7_nights![i]?.description ?? day.description,
      }))
    : base.content.itinerary_7_nights

  return {
    ...base,
    name: overlay.name ?? base.name,
    content: {
      ...base.content,
      verdict: o.verdict ?? base.content.verdict,
      best_room: o.best_room ?? base.content.best_room,
      itinerary_7_nights: mergedItinerary,
      honest_caveats: o.honest_caveats ?? base.content.honest_caveats,
      caveats: o.caveats ?? base.content.caveats,
      hotel_email_template: o.hotel_email_template ?? base.content.hotel_email_template,
      email_template: o.email_template ?? base.content.email_template,
      faqs: o.faqs ?? base.content.faqs,
    },
  }
}
