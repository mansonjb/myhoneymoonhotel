import type { BudgetPillarContent } from './types'

export const BUDGET_PILLAR_CONTENT: BudgetPillarContent = {
  intro:
    "A honeymoon under $500/night is not a compromise — it's a specific kind of trip in specific places, and when it's done right it produces honeymoon memories that are functionally identical to the $1,500/night version. The mistake is treating the budget as a discount on a luxury template (a smaller Maldives villa, a cheaper Bora Bora overwater). That version always feels poorer than it is. The version that works treats the budget as a destination filter — Cape Verde, Mexico's Riviera Maya, Madeira, parts of Cyprus, Bali, Algarve Portugal, mid-island Greece — where $300-450/night is the local going rate for a confident 5-star, not the bottom of the catalogue. At that price-to-place fit, the honeymoon delivers in full. The 14-18 hotels below all sit in our catalogue at this range with romance scores of 80 or above; the math, the destinations and the trade-offs explained here are the honest version of how this segment actually works.",
  whereMathWorks:
    "Cape Verde is the most underweighted budget-honeymoon destination in the catalogue — direct flights from much of Europe, year-round sunshine, hotels like Hotel Morabeza and the Hilton Cabo Verde at $250-400/night that deliver real 5-star service. Mexico's Riviera Maya remains the most reliable Western-hemisphere base: Belmond Maroma occasionally drops into shoulder pricing, and the Excellence and Hotel Esencia properties hold the segment. Madeira (Belmond Reid's Palace's lower categories, the Cliff Bay) is the European right-answer: a 4-hour flight from London, dry-warm subtropical climate, and a price point 30-40% lower than the Algarve or Canary equivalents. Cyprus's western coast (Almyra, Anassa's smaller rooms), Bali's Ubud and Canggu, the Algarve in October, and the smaller Greek islands (Naxos, Paros) shoulder-season all qualify. The shared property: a $400/night room is the local 5-star rate, not the budget compromise.",
  allInclusiveTrap:
    "The all-inclusive trap is specific: it's not that AI resorts are bad (the upper-tier Sandals, Excellence Punta Cana, and Excellence Playa Mujeres deliver real value); it's that the published all-in rate often hides $100-200/day of upgrades that the honeymoon experience effectively requires — the à la carte restaurant reservations, the premium-bar pour, the cabana fees, the spa add-ons. The honest test: read the resort's 'enhancements' page before booking and add 60% of the listed prices to the daily rate. If the total still beats à la carte at the same price point, book it. If not, take the à la carte option in Mexico or Cape Verde — same daily spend, more food variety, more local economy. Sandals at the highest tier (Royal Curacao, Royal Plantation Jamaica) usually passes the test. Sandals at the mid-tier rarely does. Many of the Riviera Maya all-inclusives fail it outright.",
  splurgeMoments: [
    {
      title: 'A two-night hotel upgrade in the middle of the stay',
      body: "If you're booked 7 nights at a $350/night property, drop $200/night extra for nights 3 and 4 to move into the resort's better category (ocean-view, suite, or private-pool room). The experience differential between the entry room and the next-tier room at the same property is usually larger than the price differential, and 2 nights at the better category often feels longer than 7 nights at the entry one. This is the most reliable splurge moment in budget-honeymoon planning.",
    },
    {
      title: 'One signature dinner at the flagship local restaurant',
      body: "Even in budget destinations there's a single restaurant worth a $200-400 dinner — La Hacienda in Ibiza, Cipriani in Madeira, El Sazonator in Tulum, Mama Florinda in Cape Verde, the chef's table at one of the Bali villas. Book it for night 4 or 5 (you're rested, you're calibrated) rather than night 1. The single splurge dinner consistently outranks the resort's nightly à la carte in honeymoon memory.",
    },
    {
      title: 'A spa morning, scheduled, not impulse',
      body: "Couples massage + facial + 90-minute relaxation block runs $200-400 at most budget-tier properties. Book it for day 3 — the day you've adjusted, before fatigue accumulates. The impulse spa booking on the last day is the most common form of budget-honeymoon spend regret; the planned mid-trip spa morning is the most common form of remembered budget-honeymoon highlight.",
    },
    {
      title: 'A single private experience',
      body: "Whatever the destination's signature private moment is: a Bali volcano-sunrise hike with a private guide ($200), a Madeira fishing-village dinner reservation that requires a driver ($150), a Cyprus private boat to a hidden cove ($350), a Cape Verde whale-watching half-day ($200). The private experience converts a generic destination into a personal honeymoon story. Spend on one; pass on the rest.",
    },
  ],
  costBreakdown: [
    { label: '2x return economy flights', value: '$1,800 (US to Caribbean / Europe to Cape Verde)' },
    { label: '7 nights at $300/night avg', value: '$2,100 (hotel)' },
    { label: 'Meals off-property (3-4 dinners + lunches)', value: '$700' },
    { label: 'Transfers + extras', value: '$400' },
    { label: 'Total per couple all-in', value: '$5,000' },
  ],
  hotelSlugs: [],  // populated dynamically by the page from catalog filter
  closing:
    "A budget honeymoon works when the destination matches the budget — when $400/night is the local 5-star going rate rather than the destination's compromise tier. Pick the destination where that math holds (Cape Verde, Riviera Maya, Madeira, Cyprus, Bali, Algarve, mid-island Greece), pick the right property in that range, and the trip is structurally complete. Stop trying to compress a $1,500/night Maldives honeymoon into $500/night; that trip doesn't exist. The trip below this paragraph does, and it's a real one.",
  faqs: [
    {
      question: "Can a sub-$500/night honeymoon really feel like a honeymoon?",
      answer: "Yes, in the right destination. Cape Verde, Mexico's Riviera Maya, Madeira, Cyprus, Bali, Algarve and the smaller Greek islands all have $300-450/night properties that are the local 5-star — not the compromise option. The mistake isn't the budget; it's mismatching the destination to it. A $400/night Bali villa is a complete honeymoon. A $400/night Maldives water bungalow is the worst-rated room at the resort.",
    },
    {
      question: "All-inclusive or à la carte at this budget?",
      answer: "Depends on the destination. In Mexico and the Caribbean, the upper-tier AIs (Sandals Royal Curacao, Royal Plantation Jamaica, Excellence Punta Cana) often deliver real value. In Europe and Southeast Asia, à la carte wins — the destination's food culture is the point and the AI model defeats it. Always read the 'enhancements' page first; if it lists $200/day of unavoidable extras, the AI math has already failed.",
    },
    {
      question: "Caribbean vs Mexico vs Europe at this budget?",
      answer: "Mexico if you want the all-inclusive simplification (Riviera Maya, Tulum). Caribbean if you want pure beach + water (Antigua, Grenada, value Caribbean). Europe if you want food and walking culture (Madeira, Cape Verde, Algarve). The single-best destination at this budget for US couples is Riviera Maya; for European couples, Madeira or Cape Verde.",
    },
    {
      question: "Travel insurance — needed at this budget?",
      answer: "Yes. The standard policy ($80-150 for two from World Nomads, Allianz, or Travel Guard) covers medical evacuation, trip cancellation up to the stated limit, and lost-luggage compensation. Skip the 'cancel for any reason' upgrade — it's expensive and rarely activated. Don't skip the base policy, especially for Caribbean trips during shoulder months when storm-cancellation is a real risk.",
    },
    {
      question: "Wedding registry — cash vs honeymoon-fund site?",
      answer: "Honeymoon-fund sites (Honeyfund, Zola Honeymoon, Wanderable) convert better than asking for cash — guests like the gift-feeling of contributing to a specific experience. Itemise: '2 nights room upgrade,' 'couples spa morning,' 'flagship dinner.' Don't itemise into trivial amounts ($25 for a cocktail); guests prefer to fund the bigger experience moments.",
    },
  ],
}
