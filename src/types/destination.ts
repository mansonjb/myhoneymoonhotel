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
}
