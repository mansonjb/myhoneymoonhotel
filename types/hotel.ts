export interface HotelPhoto {
  url: string
  alt: string
  type: 'hero' | 'room' | 'spa' | 'dining' | 'activity'
}

export interface ItineraryDay {
  day: number
  title: string
  description: string
}

export interface FAQ {
  question: string
  answer: string
}

export interface TrueCostItem {
  item: string
  cost_usd: string
}

export interface HotelContent {
  verdict: string
  best_room: string
  itinerary_7_nights: ItineraryDay[]
  honest_caveats?: string[]
  caveats?: string[]
  hotel_email_template?: string
  email_template?: string
  faqs: FAQ[]
  true_cost_breakdown?: TrueCostItem[]
}

export interface HoneymoonScore {
  total: number
  breakdown: {
    adults_only: number
    couples_pct: number
    spa: number
    award: number
    pool: number
    beach: number
    room_service: number
    stars: number
    luxury: number
  }
}

export interface Hotel {
  slug: string
  name: string
  destination: string
  country: string
  region?: string
  experience_types: string[]
  honeymoon_score: number
  score_breakdown: HoneymoonScore['breakdown']
  stars: number
  price_per_night_usd: { min: number; max: number }
  adults_only: boolean
  amenities: string[]
  photos: HotelPhoto[]
  booking_url?: string
  hotels_com_url?: string
  tripadvisor_rating?: number
  tripadvisor_award?: boolean
  couples_review_pct?: number
  content: HotelContent
  last_updated: string
}
