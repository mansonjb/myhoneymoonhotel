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
  const breakdown = {
    adults_only: hotel.adults_only ? 25 : 0,
    couples_pct: (hotel.couples_review_pct ?? 0) > 60 ? 20 : 0,
    spa: hotel.amenities?.some(a => a.toLowerCase().includes('spa')) ? 15 : 0,
    award: hotel.tripadvisor_award ? 15 : 0,
    pool: hotel.amenities?.some(a => a.toLowerCase().includes('pool')) ? 10 : 0,
    beach: hotel.amenities?.some(a =>
      a.toLowerCase().includes('beach') || a.toLowerCase().includes('beachfront')
    ) ? 10 : 0,
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
