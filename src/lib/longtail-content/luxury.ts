import type { LuxuryContent } from './types'

// Editorial content for the luxury honeymoon pillar page.
// Hotel slugs verified against data/hotels/*.json — all carry $1,000+/night minimum rates.

export const LUXURY_CONTENT: LuxuryContent = {
  intro:
    "The $1,000+/night honeymoon segment is where most of the genuinely great hotels in the world live — and also where most of the marketing inflation hides. A $1,500/night villa in a destination where everything else costs $400/night is usually a $400 hotel with a brochure budget; a $1,500/night room at the right property in Lake Como, the Maldives, or Cap-Ferrat is the single best version of that experience anywhere. Distinguishing the two is the entire job of this page. We've filtered our full catalogue to properties with starting rates above $1,000/night and a romance score above 85, then sorted them into three honest tiers — the accessible ultra ($1,000-1,800), the true ultra ($2,000-3,500), and the one-off villa/private-island tier ($5,000+). The names you'll recognise (Belmond, Four Seasons, Aman, Soneva, Cheval Blanc, Singita) are mostly here. The names you may not (Passalacqua, Bisate, Laucala, Cayo Espanto) deserve to be.",
  tiers: [
    {
      title: 'Tier 1 — Accessible ultra-luxury',
      range: '$1,000-1,800/night',
      body: "The honest 'top of accessible' tier. Belmond and Four Seasons properties dominate here; this is where most great honeymoons actually happen. The signature: real service ratios, generous rooms, kitchens that earn their Michelin stars, and pricing that — while not cheap — doesn't require a finance review. At this tier you're picking between regions more than between properties: a $1,500/night Lake Como room is the same magnitude of experience as a $1,500/night Caribbean villa, just a different one. The trick is to pick the destination where this price point hits the local market sweet spot rather than the destination where it's the entry rate.",
      hotelSlugs: [
        'belmond-cap-juluca-anguilla',
        'belmond-hotel-caruso-italy',
        'grand-hotel-tremezzo-lake-como',
        'four-seasons-bora-bora',
        'four-seasons-maldives-landaa-giraavaru',
        'jumby-bay-island-oetker-antigua',
      ],
    },
    {
      title: 'Tier 2 — True ultra',
      range: '$2,000-3,500/night',
      body: "The signature-property tier. Aman, Soneva, Singita, Cheval Blanc, Passalacqua, Bisate — properties where the room is a piece of architecture rather than a hotel room, and the operating model usually involves a private guide, a butler, or a dedicated host. The reason to be at this tier specifically is the experience integration: at Singita your guide eats with you, at Soneva your foot is bare for the week, at Aman the service is calibrated to a degree most hotels can't replicate. This is also where the 'memorable splurge' lives — a 5-night stay here is often the trip-defining decision, more impactful than a 10-night stay one tier below.",
      hotelSlugs: [
        'aman-venice',
        'passalacqua-lake-como-italy',
        'soneva-fushi-maldives',
        'singita-sabi-sand-south-africa',
        'bisate-lodge-volcanoes-rwanda',
        'grand-hotel-du-cap-ferrat-cote-dazur',
      ],
    },
    {
      title: 'Tier 3 — Private islands and aspirational',
      range: '$5,000+/night',
      body: "The one-off tier. Private-island buy-outs, ultra-suites at Cheval Blanc Randheli, Soneva Jani's reserves, Laucala's larger villas. The price covers privacy at a level most couples don't actually need on a honeymoon — but for couples who specifically want a single defining experience (a private island for a week, a 600m² overwater reserve, an entire safari concession), this is the only tier that delivers it. We list these honestly, not as aspirational filler. Couples who book at this tier almost always do it as a 5-night anchor inside a longer trip rather than a 10-night stand-alone.",
      hotelSlugs: [
        'cheval-blanc-randheli-maldives',
        'soneva-jani-maldives',
        'cayo-espanto-belize',
        'laucala-island-resort-fiji',
      ],
    },
  ],
  whereDealsAre:
    "Even at the luxury tier, 'deal' is real — it just means 25-40% off published rates rather than 70% off. The reliable windows: late April and early May in the Maldives and Bora Bora (just before the southwest monsoon technically begins; conditions still excellent), late October across the Mediterranean (Italy, Côte d'Azur, Greece — warm sea, thinning crowds, the best Italian restaurant reservations open up), late November in the Indian Ocean (Maldives, Seychelles — pre-Christmas peak), and the second/third weeks of any low-season month at safari camps (the camp is the same; the rate drops 30%). Same property, same staff, same service — materially better price. The hotels know exactly which weeks are soft and will quietly discount through a Virtuoso or Fine Hotels & Resorts advisor without changing the brochure.",
  agentSection:
    "A Virtuoso or Fine Hotels & Resorts (FHR) advisor costs you nothing on top of the room rate and at this tier consistently adds value worth $200-600 per stay. The standard perks: free daily breakfast for two, a $100 hotel credit, room upgrade at check-in (subject to availability), and early check-in / late check-out where the property can grant it. At Belmond, Four Seasons, Mandarin Oriental, Aman, Rosewood, and most of the catalogue properties above $1,500/night, these perks are real and itemised. Choosing the advisor matters more than choosing the hotel chain — pick one who specialises in the destination, not in 'luxury travel' generally. Honeymoon-specific advisors will also handle the small detail work (anniversary card, rose-petal turndown on the right night, restaurant reservations) that the hotel concierge does competently but not personally.",
  closing:
    "A luxury honeymoon is mostly an editing problem. Pick one property at the top of its tier rather than two at the middle. Stay 7 nights rather than bouncing through three. Use a Virtuoso advisor rather than booking direct. And — most importantly — pick the tier that fits the trip rather than the trip that fits the tier. A $1,500/night Tier-1 stay in Lake Como is a more complete honeymoon than a $5,000/night Tier-3 stay anywhere when the destination doesn't fit. The couples who get the most out of this segment treat it as a single, deep experience rather than a tour.",
  faqs: [
    {
      question: "What actually defines a luxury honeymoon hotel?",
      answer: "Three measurable things: a starting room rate at or above $1,000/night, a staff-to-guest ratio of at least 2:1, and a kitchen that earns its menu. The intangibles — service that learns your name within 24 hours, the absence of forced socialising, the existence of in-villa dining without an upcharge — are downstream of those three. If the property hits the first three, the rest usually follows.",
    },
    {
      question: "Is the jump from $1,500 to $3,000/night worth it?",
      answer: "Sometimes. The honest answer: the Tier-1 to Tier-2 jump buys size and exclusivity (overwater villa instead of beach villa, larger spa suite, more isolated lodge), not better service. Couples who stay 5 nights at Tier-2 instead of 7 at Tier-1 often report it as the better trip. Couples who do 10 nights at Tier-2 rather than Tier-1 frequently say they couldn't tell the difference after night three.",
    },
    {
      question: "Should we use a travel advisor or book direct?",
      answer: "Advisor. At this tier the Virtuoso and FHR programmes are genuinely valuable — same room, same rate, plus $200-600 of itemised perks per stay. The advisor also handles the small things (room category requests, dining timing) more reliably than direct booking. The only exception is if you have an existing top-tier loyalty status that beats the third-party perks.",
    },
    {
      question: "Travel insurance — necessary at this tier?",
      answer: "Yes, and at a higher coverage level than usual. The deposits are larger (often $5k-15k non-refundable), the destinations are sometimes remote (medical evacuation matters), and the marginal cost of the right insurance policy ($150-400 for two) is negligible relative to the trip. Allianz and World Nomads handle the bulk; specific concierge-tier providers (Medjet) handle the evacuation piece better.",
    },
    {
      question: "What's the biggest hidden cost at this segment?",
      answer: "Drinks. A $1,500/night room often comes with $25 cocktails and $150 wine bottles by default. Set a daily food-and-beverage budget upfront ($300-500/couple/day is realistic at Tier 1, double at Tier 2). The secondary hidden cost is transfers — a Maldives seaplane is $400-600 per person, often not in the room rate. Check.",
    },
  ],
}
