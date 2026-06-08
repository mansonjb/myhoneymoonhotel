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

export interface PersonaContent {
  intro: string                  // ~180 words editorial opening unique to persona
  angle: string                  // the editorial angle / thesis (~140 words)
  hotelSlugs: string[]           // 6 hotel slugs from catalog
  destinationClusters: { title: string; body: string }[]  // 4 clusters (destination + paragraph)
  whatToSkip: string             // ~120 words on destinations/property types to skip
  closing: string                // ~100 words
  faqs: FAQEntry[]
}

export interface LuxuryContent {
  intro: string                  // ~180 words
  tiers: { title: string; range: string; body: string; hotelSlugs: string[] }[]  // 3 tiers
  whereDealsAre: string          // ~140 words on deals at this tier
  agentSection: string           // ~120 words on Virtuoso/FHR
  closing: string                // ~100 words
  faqs: FAQEntry[]
}

export interface BudgetPillarContent {
  intro: string                  // ~180 words
  whereMathWorks: string         // ~180 words editorial
  allInclusiveTrap: string       // ~140 words
  splurgeMoments: { title: string; body: string }[]  // 4 worth-paying moments
  costBreakdown: { label: string; value: string }[]  // 7-night line items
  hotelSlugs: string[]           // selected dynamically by page but can override
  closing: string                // ~100 words
  faqs: FAQEntry[]
}

export interface PackingItem {
  item: string
  note: string
}

export interface PackingContent {
  intro: string                  // ~180 words
  universal: PackingItem[]
  tropical: { intro: string; items: PackingItem[] }
  safari: { intro: string; items: PackingItem[] }
  city: { intro: string; items: PackingItem[] }
  cold: { intro: string; items: PackingItem[] }
  nobodyPacks: PackingItem[]     // what nobody packs but should
  whatToSkip: PackingItem[]      // what to leave home
  closing: string
  faqs: FAQEntry[]
}

export interface LastMinuteContent {
  intro: string                  // ~180 words
  yesWindows: { title: string; body: string }[]  // 4 yes windows
  noWindows: { title: string; body: string }[]   // 4 no windows
  reality: string                // ~180 words on the 14/30-day reality
  savings: string                // ~120 words flexible-savings pitch
  hotelSlugs: string[]           // 6 hotels with genuine last-minute deals
  closing: string
  faqs: FAQEntry[]
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
