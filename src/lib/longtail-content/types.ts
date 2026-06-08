// Shared types for long-tail editorial content modules.

export interface FAQEntry {
  question: string
  answer: string
}

export interface BudgetContent {
  intro: string                  // ~150 words
  whatItBuys: string             // editorial paragraph + table-like prose
  budgetTable: { label: string; value: string }[]
  hotelSlugs: string[]           // 6–8 hotel slugs from /data/hotels
  splurgeVsSave: string          // ~120 words
  closing: string                // ~80 words
  faqs: FAQEntry[]
}

export interface MonthContent {
  intro: string                  // ~150 words, month-specific
  whereToGo: { destSlug: string; rationale: string }[]   // 6 destinations with month-specific reasoning
  whereToSkip: { destSlug: string; reason: string }[]    // 2-3 destinations
  whatsSpecial: string           // events, weather windows, etc.
  closing: string
  faqs: FAQEntry[]
}

export interface DurationContent {
  intro: string                  // ~150 words, duration-specific narrative
  whoFor: string                 // ~80 words "who this duration is for"
  routings: { title: string; hotelSlug?: string; body: string }[]  // top 3 routings
  theMath: string                // ~120 words on flight time, jetlag, realism
  closing: string
  faqs: FAQEntry[]
}

export interface ComparisonContent {
  tldr: string                   // 1 sentence per destination + clear-winner grid summary
  winnerGrid: { criterion: string; winner: 'A' | 'B' | 'tie'; note: string }[]
  comparisonTable: {
    criterion: string
    a: string
    b: string
  }[]
  whichIf: { scenario: string; pick: 'A' | 'B'; reason: string }[]  // 5 scenarios
  anchorHotelA: string           // hotel slug
  anchorHotelB: string
  splitItinerary: string         // sample 7-night doing both
  closing: string
  faqs: FAQEntry[]
}

export interface ItineraryDay {
  morning: string
  afternoon: string
  evening: string
  restaurants?: string           // 1-2 specific names
}

export interface ItineraryContent {
  intro: string                  // ~150 words, destination-specific
  hotelSlug: string              // primary hotel rec
  hotelRationale: string         // why this hotel for this itinerary
  days: ItineraryDay[]           // 7 entries
  splurge: string                // 1 specific splurge experience
  sleepInDay: number             // day index where rest is acknowledged
  costEstimate: string           // total estimate
  closing: string
  faqs: FAQEntry[]
}
