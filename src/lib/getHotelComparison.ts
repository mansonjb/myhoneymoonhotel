import 'server-only'
import type { Hotel } from '../../types/hotel'
import type { Locale } from '@/i18n/locales'
import { getLocalizedHotel } from './getLocalizedHotel'
import { getHotelComparisonBySlug } from '../../data/hotel-comparisons'

export interface ResolvedHotelComparison {
  slug: string
  a: Hotel
  b: Hotel
}

export function getHotelComparison(slug: string, locale: Locale): ResolvedHotelComparison | null {
  const pair = getHotelComparisonBySlug(slug)
  if (!pair) return null
  const a = getLocalizedHotel(pair.a, locale)
  const b = getLocalizedHotel(pair.b, locale)
  if (!a || !b) return null
  return { slug, a, b }
}
