export interface ExperienceMeta {
  label: string
  tagline: string
  hero: string
  intro: string
  stats: { icon: string; value: string; label: string }[]
  perfectFor: string[]
  skipIf: string[]
  reasons: { title: string; desc: string }[]
  destinations: { name: string; slug: string; why: string; budget: string; bestFor: string }[]
  months: { month: string; emoji: string; verdict: string; note: string }[]
  budgetTiers: { tier: string; range: string; desc: string; hotels: string }[]
  checklist: { title: string; items: string[] }[]
  expertTips: string[]
  faqs: { q: string; a: string }[]
  related: string[]
  seo?: { title?: string; description?: string }
}
