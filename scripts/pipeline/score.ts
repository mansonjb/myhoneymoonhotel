import { HoneymoonScore } from '../../types/hotel'

interface RawHotelData {
  name: string
  slug: string
  destination: string
  country: string
  stars?: number
  adults_only?: boolean
  amenities?: string[]
  couples_review_pct?: number
  tripadvisor_award?: boolean
  price_tier?: 'budget' | 'mid' | 'luxury' | 'ultra-luxury'
  photos?: unknown[]
  booking_url?: string
  tripadvisor_rating?: number
  experience_types?: string[]
  region?: string
}

export function calculateHoneymoonScore(hotel: RawHotelData): HoneymoonScore {
  const nameLower = hotel.name?.toLowerCase() ?? ''
  const expTypes = hotel.experience_types ?? []

  // Infer spa from experience types or name
  const hasSpa = hotel.amenities?.some(a => a.toLowerCase().includes('spa')) ||
    nameLower.includes('spa') || nameLower.includes('wellness')

  // Infer pool from experience types, amenities, or name
  const hasPool = hotel.amenities?.some(a => a.toLowerCase().includes('pool')) ||
    expTypes.includes('overwater-bungalows') // overwater villas always have lagoon/pool access

  // Infer beach from amenities, experience types, or destinations known for beach
  const hasBeach = hotel.amenities?.some(a =>
    a.toLowerCase().includes('beach') || a.toLowerCase().includes('beachfront')
  ) || expTypes.includes('beach')

  // couples_pct: lower threshold for boutique/romantic hotels (40% is sufficient signal)
  const couplePct = hotel.couples_review_pct ?? 0
  const coupleScore = couplePct > 60 ? 20 : couplePct > 40 ? 10 : 0

  // award: also grant if rating ≥ 4.3 (boutique hotels have fewer reviews but are still excellent)
  const hasAward = hotel.tripadvisor_award || (hotel.tripadvisor_rating ?? 0) >= 4.4

  const breakdown = {
    adults_only: hotel.adults_only ? 25 : 0,
    couples_pct: coupleScore,
    spa: hasSpa ? 15 : 0,
    award: hasAward ? 15 : 0,
    pool: hasPool ? 10 : 0,
    beach: hasBeach ? 10 : 0,
    room_service: hotel.amenities?.some(a => a.toLowerCase().includes('room service')) ? 5 : 0,
    stars: (hotel.stars ?? 0) >= 4 ? 10 : 0,
    luxury: hotel.price_tier === 'luxury' || hotel.price_tier === 'ultra-luxury' ? 5 : 0,
  }

  const total = Math.min(100, Object.values(breakdown).reduce((a, b) => a + b, 0))
  return { total, breakdown }
}

export function meetsQualityGate(score: HoneymoonScore): boolean {
  return score.total >= 50
}
