export interface DestinationMeta {
  hero: string
  tagline: string
  intro: string
  bestTime: string
  flightFrom: string
  topExperience: string
  perfectFor: string[]
  skipIf: string[]
  experiences: { icon: string; title: string; description: string; cost: string; tip: string }[]
  months: { month: string; weather: string; emoji: string; crowds: string; price: string; verdict: string }[]
  budgetTiers: { label: string; range: string; gets: string; example: string }[]
  areas: { name: string; bestFor: string; description: string }[]
  expertTips: { tip: string; detail: string }[]
  packing: { item: string; why: string }[]
  guide: { getting: string; where: string; when: string }
  localFood: string
  currency: string
  language: string
  timezone: string
  seo?: { title?: string; description?: string }
  // Ultra-enrichment optional fields
  weeklyMicroWindows?: { range: string; vibe: string; rating: 1 | 2 | 3 | 4 | 5; why: string }[]
  restaurants?: { name: string; cuisine: string; priceRange: string; signature: string; bookingTip: string; location: string }[]
  photographySpots?: { name: string; type: 'sunrise' | 'sunset' | 'golden hour' | 'blue hour' | 'midday'; what: string; tip: string }[]
  logistics?: {
    visa: string
    vaccines: string
    currency: string
    plug: string
    sim: string
    driveSide: 'left' | 'right'
    tippingNorm: string
    tapwater: 'safe' | 'avoid' | 'use bottled'
    averageTransferTime: string
  }
  localEtiquette?: { do: string; dont: string }[]
  insiderTips?: string[]
  bestMonthsHonest?: string
}
