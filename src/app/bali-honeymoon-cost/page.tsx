import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bali Honeymoon Cost: 2026 Real Numbers ($3k–$40k+)',
  description:
    'How much a Bali honeymoon really costs in 2026. Four budget tiers, line-by-line breakdown, four real 7-night sample budgets, hidden costs, best months, and 8 ways to spend less.',
  alternates: {
    canonical: 'https://myhoneymoonhotel.com/bali-honeymoon-cost',
  },
  openGraph: {
    title: 'Bali Honeymoon Cost — 2026 Real Numbers',
    description:
      'Four budget tiers ($3k–$40k+), real hotel breakdowns, hidden costs (driver, levy, peak premium), best months, and 8 ways to spend less on a Bali honeymoon.',
    url: 'https://myhoneymoonhotel.com/bali-honeymoon-cost',
    siteName: 'MyHoneymoonHotel',
    images: [
      {
        url: 'https://myhoneymoonhotel.com/images/hotels/four-seasons-resort-bali-at-sayan-bali/hero.webp',
        width: 1600,
        height: 900,
        alt: 'Four Seasons Sayan jungle pool villa — the canonical Bali ultra-luxury honeymoon image',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bali Honeymoon Cost — 2026 Real Numbers',
    description: 'Four budget tiers, real hotel breakdowns, hidden costs, best months, and 8 ways to spend less.',
    images: ['https://myhoneymoonhotel.com/images/hotels/four-seasons-resort-bali-at-sayan-bali/hero.webp'],
  },
}

const FAQS: { q: string; a: string }[] = [
  {
    q: 'How much does a Bali honeymoon cost on average?',
    a: 'For 7 nights all-in (flights, hotels, private driver, food, taxes, tips), the typical 2026 US couple spends $7,000 to $9,000 on a comfortable mid-range Bali honeymoon — that is a 4–5★ Ubud villa for three nights plus a beach property in Seminyak or Uluwatu for four. Drop to $4,000 if you fly economy, stay in boutique villas, and eat at warungs. Push to $14,000 for a true 5★ split between Four Seasons Sayan and Bulgari Uluwatu. Ultra-luxury (Capella Ubud, Bulgari, Como Shambhala Estate as a single base) starts at $20,000 and runs past $40,000 for the headline pavilions.',
  },
  {
    q: 'Is Bali cheaper than the Maldives for a honeymoon?',
    a: 'Yes — substantially. A like-for-like 7-night honeymoon in Bali runs roughly half the cost of the Maldives at every tier above budget. A 5★ Bali villa with private pool runs $600–$1,500/night versus $1,500–$3,500/night for an equivalent Maldives overwater. There is no $1,000 seaplane, no 26% GST + service uplift, and food and spa cost a quarter of Maldives prices. The trade is that Bali is not a beach-only honeymoon — the magic is the Ubud-and-coast split, not horizontal time on a single island. See our full breakdown at /maldives-honeymoon-cost.',
  },
  {
    q: 'How much should we budget for a private driver in Bali?',
    a: 'A full-day private driver (English-speaking, air-conditioned car or van, 8–10 hours, fuel and parking included) costs $50 to $70 USD per day in 2026. Half-days run $35–$45. Most honeymoon couples book a driver for 4 of 7 days — the temple-and-rice-terrace days — and rely on Grab or Bluebird taxi for short hops in Seminyak/Canggu. Total transport budget: $250–$400 for the week. Tip the driver $5–$10 at the end of each day. Renting a scooter is $7–$10/day but we do not recommend it for honeymoon couples — Bali traffic is unforgiving.',
  },
  {
    q: 'When is the cheapest time for a Bali honeymoon?',
    a: 'February, late March, early April, May, and early September are the cheapest weeks. These are shoulder months — outside the dry-season peak (June–August) and outside the December holiday spike. Rates drop 25–40% versus July–August peak. The window to absolutely avoid for cost is July 1 to August 25 (Australian and European school holidays plus dry-season peak) and December 20 to January 5. Rainy season runs November to March, but in practice it is sunny mornings and short afternoon downpours — perfectly bookable for a 30–35% discount.',
  },
  {
    q: 'Are there hidden costs in Bali we should plan for?',
    a: 'A few. The Bali Tourism Levy is roughly $10 per person, paid online before arrival or at the airport (introduced 2024, enforced from 2025). Visa-on-arrival is $35 per person. Most upper-tier hotels add 21% (11% government tax + 10% service charge) — always quoted "++" on rate sheets. Spa is much cheaper than Maldives but adds up at $20–$80 per massage when you do six in a week. Boat trips to Gili or Lembongan run $60–$150 per person. Dinner at the marquee Seminyak/Ubud restaurants is $80–$150 per couple — well above warung prices. Budget another 10–15% on top of the headline room rate.',
  },
  {
    q: 'Should we stay in Ubud or the beach? Or both?',
    a: 'Both — and the split is the whole game. Ubud (jungle, rice terraces, river-valley villas, yoga, temple culture) and the south coast (beach, surf, sunset bars, boutique shopping) are completely different honeymoons in completely different terrain 90 minutes apart. The textbook honeymoon is 3 nights Ubud + 4 nights at the coast (Seminyak for nightlife, Uluwatu for cliff-top luxury, Nusa Dua for resort polish, Canggu for surf-cool). One-base honeymoons are the most common mistake: you either miss the rice terraces or you spend three days in transit.',
  },
  {
    q: 'How long is the flight to Bali from the US and Europe?',
    a: 'From New York or Boston, expect 22–26 total hours with one or two stops, typically via Tokyo (ANA, JAL), Singapore (Singapore Airlines), Doha (Qatar), or Hong Kong (Cathay). From the US West Coast, 18–22 hours via Tokyo, Seoul, or Hong Kong. From London, Paris, Amsterdam, or Frankfurt, 16–18 hours one-stop via Singapore, Doha, or Dubai. Bali (Denpasar DPS) is one of the longer-haul honeymoons in this guide — factor a recovery night on either end of the trip, ideally in Seminyak rather than Ubud (the 90-minute jungle transfer is brutal on no sleep).',
  },
  {
    q: 'Do we need a visa for Bali?',
    a: 'Yes, but it is straightforward. US, UK, EU, Australian, and Canadian citizens get a $35 Visa-on-Arrival at Denpasar (DPS), valid 30 days, extendable once. Your passport must be valid for 6 months past your return date. Pre-pay the $10/pp Bali Tourism Levy online at lovebali.baliprov.go.id before you fly — the QR code is checked at immigration. Customs declaration is also done online (e-CD) within 72 hours of arrival. None of this requires an agent or a fee beyond the official $35 + $10.',
  },
  {
    q: 'Is all-inclusive worth it in Bali?',
    a: 'Almost never — and almost no Bali property offers true all-inclusive. The whole point of Bali is the food: $4 nasi goreng at a warung, $25 tasting menus at jungle cafés, $120 dinners at Locavore or Mauri. Locking yourself into a hotel meal plan in a destination with this much restaurant culture is a category error. The exception is a 1–2 night Uluwatu cliff-top splurge (Bulgari, Alila Villas) where the property is the experience and you eat in. Otherwise, book bed-and-breakfast and explore.',
  },
  {
    q: 'Can we use credit-card points for a Bali honeymoon?',
    a: 'Yes. Bali is one of the better hotel-points destinations in Asia. Marriott Bonvoy covers The St. Regis Bali, Ritz-Carlton Mandapa and Nusa Dua, W Seminyak, and Le Méridien Jimbaran (60,000–110,000 points/night). Hilton Honors covers Conrad Bali (95,000 points). Hyatt covers Andaz and Park Hyatt for surprisingly low rates. For flights, Singapore Airlines and ANA both fly DPS — transfer Amex MR or Capital One miles to KrisFlyer for premium-cabin awards. Start accumulating 18 months out using Chase Sapphire, Amex Platinum, or Capital One Venture X.',
  },
]

const TIER_TABLE = [
  {
    tier: 'Budget',
    range: '$3,000 – $5,000',
    tag: 'Boutique villa or 4★ resort, simple flights',
    examples: 'COMO Uma Ubud · Padma Legian · Royal Purnama',
    transfer: 'Hotel pickup or Grab',
    villa: 'Garden room or pool-view',
    meal: 'Bed-and-breakfast',
  },
  {
    tier: 'Mid-range',
    range: '$6,000 – $9,000',
    tag: '5★ Ubud + beach split, premium economy flights',
    examples: 'Hanging Gardens · Mandapa · Alila Uluwatu · Viceroy',
    transfer: 'Private driver',
    villa: 'Pool villa or river-view suite',
    meal: 'BB + paid lunches',
  },
  {
    tier: 'Luxury',
    range: '$11,000 – $16,000',
    tag: 'Brand-name 5★ split, business class one-way',
    examples: 'Four Seasons Sayan · Como Shambhala · St. Regis · Raffles',
    transfer: 'Private driver, hotel-arranged',
    villa: 'Private-pool villa, 200m²+',
    meal: 'BB + à la carte',
  },
  {
    tier: 'Ultra-luxury',
    range: '$20,000 – $40,000+',
    tag: 'Top-of-market villa or two-property split',
    examples: 'Bulgari Resort Bali · Capella Ubud · Amandari',
    transfer: 'Private driver + helicopter optional',
    villa: 'Cliff or jungle pool villa, 400m²+',
    meal: 'Bespoke / dine-around',
  },
]

const COST_DRIVERS = [
  {
    title: 'Area choice — Ubud vs. Seminyak vs. Uluwatu vs. Nusa Dua',
    detail:
      'The single biggest variable after hotel tier. Ubud (jungle, rice terraces, wellness) is 30–40% cheaper than the south coast at the same star rating because land is less constrained. Seminyak (nightlife, beach clubs, shopping) is the priciest mid-range zone. Uluwatu (cliff-top luxury, surf) commands a 25–40% premium for the view — Bulgari, Alila Villas, Six Senses are all here. Nusa Dua (resort enclave) is the safest for first-time visitors but the least Balinese in feel. Most successful honeymoons split 3 Ubud + 4 coast.',
  },
  {
    title: 'Villa vs. resort',
    detail:
      'Bali is the world capital of the private-pool villa, and that format is often cheaper than a 5★ resort room at the same level. A 1-bedroom private-pool villa in Seminyak or Canggu runs $250–$500/night for serious quality (Layar, Le Cielo). The same money at The Mulia or W Seminyak gets you a hotel room. Trade-off: villas have less service and no on-site restaurant — perfect for honeymoon couples who want privacy, less ideal if you want morning room service and a dive desk.',
  },
  {
    title: 'Season — peak July–August and Christmas spike',
    detail:
      'Peak (July 1 – August 25, December 20 – January 5) costs roughly 1.6–2× the February–April low. The dry season (May–September) is high but manageable. October and early November are excellent value — dry weather lingers, peak crowds gone. Rainy season (November–March) is 30–40% cheaper than peak with the trade-off of afternoon downpours. Galungan and Nyepi (Balinese holy days) cause minor rate spikes and temple closures — check the Balinese calendar before locking dates.',
  },
  {
    title: 'Flight routing — long-haul into DPS',
    detail:
      'No direct US flights to Denpasar. From the East Coast, premium economy on Singapore, ANA, or Qatar runs $3,200–$5,500 round-trip per couple. From the West Coast, $2,800–$4,800. From Europe, economy via Singapore or Doha is $1,500–$2,800; business runs $5,000–$9,000. Routing via Singapore lets you build a 2-night SIN stopover for free on most fares — useful for breaking the journey. Avoid the cheapest budget connections via Kuala Lumpur or Jakarta on AirAsia for honeymoon trips — the time savings are worth $400.',
  },
  {
    title: 'Private driver vs. group tours vs. taxi',
    detail:
      'A private driver-guide is the secret weapon of Bali honeymoons. $50–$70 for an entire day of door-to-door temple, rice-terrace, and waterfall touring with someone who knows when each site empties out. Group tours are $35–$50 per person but herd you onto a 50-person bus. Grab and Bluebird taxis are excellent for 30-minute hops ($5–$15) but unworkable for full days. Most couples book a driver for 4 of 7 days; total transport bill comes in around $300 for the week.',
  },
]

const LINE_ITEMS = [
  ['Flights from US East Coast (premium economy, 2pax)', '$3,200 – $5,500'],
  ['Flights from US West Coast (premium economy, 2pax)', '$2,800 – $4,800'],
  ['Flights from Europe (economy, 2pax)', '$1,500 – $2,800'],
  ['Flights from Europe (business, 2pax)', '$5,000 – $9,000'],
  ['Hotel, 7 nights, boutique villa or 4★', '$1,400 – $2,800'],
  ['Hotel, 7 nights, 5★ Ubud + beach split', '$3,500 – $7,000'],
  ['Hotel, 7 nights, ultra-luxury cliff or jungle villa', '$10,000 – $30,000'],
  ['Private driver (7 days × $60/day, 4 full days + 2 half)', '$300 – $400'],
  ['Airport transfer DPS (one-way private car)', '$15 – $40'],
  ['Visa-on-Arrival ($35/pp × 2)', '$70'],
  ['Bali Tourism Levy ($10/pp)', '$20'],
  ['Meals — mix of warung + mid-range + 2 splurges (2pax × 7 days)', '$350 – $900'],
  ['Spa — 4 couples massages across the week', '$200 – $500'],
  ['Activities — temples, rice terraces, waterfall, surf lesson', '$150 – $350'],
  ['Boat day-trip to Gili or Lembongan (2pax)', '$120 – $300'],
  ['Cooking class for two', '$100 – $200'],
  ['Government tax (11%) + service charge (10%) on hotel + upscale F&B', '+21% uplift'],
  ['Tips — driver, butler, housekeeping (7 nights)', '$60 – $120'],
  ['Travel insurance with CFAR ($10k trip value)', '$200 – $500'],
]

const SAMPLE_BUDGETS = [
  {
    name: 'Budget — COMO Uma Ubud + Padma Legian',
    total: '$4,500',
    season: 'Late March, 7 nights',
    bullets: [
      ['Flights (economy, LAX → DPS via NRT)', '$2,200'],
      ['COMO Uma Ubud, 3 nights, garden room', '$420'],
      ['Boutique pool villa Seminyak / Padma Legian, 4 nights', '$520'],
      ['Private driver — 3 full days', '$200'],
      ['Airport transfers + Grab around Seminyak', '$80'],
      ['Meals (mostly warungs + 2 sit-down dinners)', '$420'],
      ['Activities — Tegalalang, Tirta Empul, Uluwatu temple', '$140'],
      ['Visa + Tourism Levy + tips + buffer', '$520'],
    ],
    note:
      'COMO Uma Ubud at $400/night is one of the great quality-per-dollar plays in Asia — full COMO design and breakfast at a price point that should not exist. Pair with an honest 4★ in Legian for the beach half. Late March hits the shoulder sweet spot.',
  },
  {
    name: 'Mid-range — Hanging Gardens of Bali + Alila Villas Uluwatu',
    total: '$8,200',
    season: 'Early May, 7 nights',
    bullets: [
      ['Flights (premium economy, JFK → DPS via DOH)', '$3,400'],
      ['Hanging Gardens of Bali, 3 nights, pool villa', '$1,300'],
      ['Alila Villas Uluwatu, 4 nights, one-bedroom villa', '$1,800'],
      ['Private driver — 4 full days', '$280'],
      ['Airport transfers (hotel-arranged)', '$80'],
      ['Meals — mix of warungs, jungle cafés, two splurges', '$580'],
      ['Spa — 3 couples massages, 1 floating breakfast', '$320'],
      ['Activities + cooking class + Lembongan day trip', '$280'],
      ['Tips, taxes, levy, buffer', '$160'],
    ],
    note:
      'The textbook mid-range Bali honeymoon. Hanging Gardens has the most photographed pool in Indonesia (the iconic two-tier infinity over the rainforest) and Alila Uluwatu is one of the great cliff-top properties in Asia. Three nights jungle, four nights ocean cliffs — exactly the right shape.',
  },
  {
    name: 'Luxury — Four Seasons Sayan + Mandapa',
    total: '$13,800',
    season: 'Late September, 7 nights',
    bullets: [
      ['Flights (business one-way + premium economy return, 2pax)', '$5,200'],
      ['Four Seasons Resort Bali at Sayan, 3 nights, river-view suite', '$2,400'],
      ['Mandapa, a Ritz-Carlton Reserve, 4 nights, one-bedroom pool villa', '$4,200'],
      ['Private driver — 4 full days, 2 half days', '$340'],
      ['Hotel-arranged airport transfers', '$120'],
      ['Meals — Locavore, Mauri, Sokasi cooking class, warungs', '$680'],
      ['Spa — 4 couples treatments + Sayan riverbed ritual', '$540'],
      ['Activities — sunrise Batur trek, photographer hour', '$320'],
    ],
    note:
      'Two-property all-Ubud honeymoon for couples who want the rice-terrace-and-river version of Bali rather than the beach version. Four Seasons Sayan is the iconic lily-pond entrance; Mandapa is the more intimate Ritz-Carlton Reserve. Late September is dry-season tail with shoulder pricing.',
  },
  {
    name: 'Ultra-luxury — Bulgari Resort Bali + Capella Ubud',
    total: '$28,400',
    season: 'Mid-October, 7 nights',
    bullets: [
      ['Flights (business round-trip, 2pax)', '$8,500'],
      ['Capella Ubud, 3 nights, 1-BR jungle tent with pool', '$5,400'],
      ['Bulgari Resort Bali, 4 nights, ocean cliff villa', '$8,800'],
      ['Helicopter Ubud → Uluwatu transfer', '$1,400'],
      ['Private driver — 3 full days touring', '$220'],
      ['Meals — Il Ristorante Niko Romito, Locavore, in-villa dining', '$1,800'],
      ['Spa — Bulgari Spa rituals + Capella Auriga', '$1,100'],
      ['Activities — private temple ceremony, photoshoot', '$1,180'],
    ],
    note:
      'Capella Ubud is the safari-tent-pool-villa property; Bulgari Resort Bali is the cliff-top temple of luxury at Uluwatu — Il Ristorante by Niko Romito is one of the great Italian rooms in Asia. The 20-minute helicopter from Ubud to Uluwatu is a $700pp splurge that turns a brutal 3-hour transfer into a honeymoon set-piece.',
  },
]

const SEASONS = [
  { months: 'February – early March', verdict: 'Excellent value', detail: 'Tail of rainy season but dry stretches dominate. Rates 30–40% below peak. Crowds minimal at the marquee Ubud properties. Risk: 2–3 fully wet days possible.' },
  { months: 'Late March – April', verdict: 'Best value', detail: 'Rainy-season tail meets dry-season start. Lush rice terraces, dry mornings, occasional afternoon shower. Minimal crowds. Easter is a brief mini-spike.' },
  { months: 'May', verdict: 'Best value (shoulder)', detail: 'Dry season starts, peak crowds still 6 weeks away. Combine with Singapore stopover for free thanks to flat May fares. Sweet spot.' },
  { months: 'June', verdict: 'High season starts', detail: 'Reliable dry weather, prices rise 15–25%. Still ahead of school-holiday wave.' },
  { months: 'July – August', verdict: 'Peak (avoid for cost)', detail: 'European and Australian school holidays. Driest weather, 1.6–2× shoulder pricing, 90-min restaurant waits in Seminyak. Ubud holds up better than the coast.' },
  { months: 'September', verdict: 'Best value (shoulder)', detail: 'Cheapest weeks of the year that are also reliably dry. Honeymoon couples optimizing both should book here.' },
  { months: 'October – early November', verdict: 'Excellent value', detail: 'Dry continues into early November in most years. Shoulder pricing returns. Ideal for couples who can travel after a spring or summer wedding.' },
  { months: 'November – mid-December', verdict: 'Good value', detail: 'Rainy season starts, but afternoons-only. Rates 25–35% off peak. Sunsets are spectacular post-shower.' },
  { months: 'December 20 – January 5', verdict: 'Peak (avoid)', detail: 'Christmas and New Year fortnight, especially driven by the Australian summer holiday. Mandatory gala dinners and 2× pricing. Push to mid-January.' },
]

const TIPS = [
  {
    title: 'Book 6 to 9 months ahead for July, August, December',
    detail:
      'Inventory at the marquee properties (Capella, Bulgari, Mandapa, Four Seasons Sayan) sells out for any peak week 6–9 months in advance. Booking late means paying more for the inferior room category. For shoulder months 3–4 months is plenty.',
  },
  {
    title: 'Split 3 nights Ubud + 4 nights coast',
    detail:
      'The single most important shape decision. One-base honeymoons either miss the rice terraces or burn 3 days in transit. Ubud first (you arrive jet-lagged and want jungle, not beach club), coast second (energy returns, sunset bars work). Hotel-arranged car transfer Ubud → Uluwatu is 2.5 hours and $80–$120.',
  },
  {
    title: 'Private driver — math beats everything',
    detail:
      'A full-day private driver at $60 includes fuel, parking, and someone who knows which rice-terrace viewpoint empties at 9am. Group tours at $40/pp put you on a 50-person bus. Grab for full days does not exist — drivers will not commit. Book a driver direct via your hotel for 4 of 7 days; budget $300 for the week.',
  },
  {
    title: 'Skip all-inclusive — the food is the trip',
    detail:
      'Bali is a food destination. Warungs at $3–5/meal, $25 jungle-café tasting menus, $120 sit-downs at Locavore or Mauri. Locking into a hotel meal plan is a category error here. Book BB; eat out for everything else; reserve Locavore or Sokasi 30 days ahead.',
  },
  {
    title: 'Eat at warungs without fear',
    detail:
      'Warung Babi Guling Ibu Oka, Naughty Nuri\'s, Kynd Community — local restaurants run $3–$8 per dish and sit at the heart of Balinese food culture. Couples often spend $40 per dinner at warungs and $120 once or twice at Locavore. Doing the inverse — hotel restaurant every night — costs $1,400 more across the week and is meaningfully worse food.',
  },
  {
    title: 'Avoid full-moon and Galungan premiums',
    detail:
      'Some marquee properties spike rates 15–25% during full-moon weekends and Balinese ceremony weeks (Galungan, Kuningan, Nyepi — silent day, all transport stops). Check the Balinese calendar before locking dates. Nyepi is a once-in-a-lifetime experience for the right couple but a logistical disaster for most.',
  },
  {
    title: 'Use Honeyfund or Zola for spa and helicopter',
    detail:
      'Frame each gift as an experience: "the helicopter from Ubud to Uluwatu", "the four-hand massage at Bulgari Spa", "the cooking class at Mandapa". 60% of US couples now use a honeymoon registry — guests prefer experience-gifting to china. Full guide at /how-to-plan-a-honeymoon.',
  },
  {
    title: 'Take an off-peak honeymoon',
    detail:
      'You do not have to fly within a week of the wedding. A Bali honeymoon delayed by 2–4 months to land in May or September often saves $2,000 on flights and accommodation combined — and you arrive less exhausted, with paperwork sorted. The romance does not depreciate.',
  },
]

const HIDDEN_COSTS = [
  ['Government tax (11%) + service charge (10%)', 'Applied to upper-tier hotel rooms and dining at branded properties. A 21% uplift in practice. Always quoted "++" on rate sheets. Warungs and most mid-tier restaurants are tax-included.'],
  ['Bali Tourism Levy', '$10 per person, paid online before arrival or at DPS airport. Introduced 2024, enforced from 2025 — keep the QR code on your phone for immigration.'],
  ['Visa-on-Arrival', '$35 per person, paid in cash USD or by card at DPS. Valid 30 days. Do not use the airport agents who charge $50 — the official line is fine and fast.'],
  ['Spa — adds up faster than you think', 'Individual treatments are cheap ($20 at a local spa, $80 at a 5★) but couples easily do six in a week. Budget $300–$500 across the week for the wellness-heavy honeymoon.'],
  ['Upscale dining', 'Dinner at Locavore, Mauri, Apéritif, Bambú, or Cuca runs $80–$150 per couple before drinks, $150–$220 with a wine pairing. Reserve 30+ days ahead. Plan 2–3 of these across 7 nights, not 7.'],
  ['Boat trips', 'Day trip to Gili Trawangan or Nusa Lembongan runs $60–$120 per person on a public fast boat, $200–$400 per couple on a private charter. Choppy seas can wipe out a half-day.'],
  ['Cooking classes', '$50–$100 per person at most properties; $80–$150 at Mandapa\'s Sokasi or similar marquee programs. The market visit at 6am is the best part — book one mid-week.'],
  ['Surf lessons', '$35–$60 per person for a 2-hour group lesson on Kuta, Seminyak, or Canggu beach. Private lessons $80–$150. Boards rent $5–$10/day for repeat surfers.'],
  ['Photographer', '$300 for a 60-minute resort shoot; $600–$1,200 for a half-day around Tegalalang, Lempuyang Gates, and a temple. Significantly cheaper than the Maldives equivalent — Bali photographers are world-class and competitive.'],
]

const COMPARISON = [
  { dest: 'Bali', total: '$6k – $14k', flight: '22h from US East / 16h from EU', signature: 'Jungle + beach combo, food, wellness, value' },
  { dest: 'Maldives', total: '$14k – $24k', flight: '20h from US East / 10h from EU', signature: 'Overwater villa, total privacy, beach-only' },
  { dest: 'Thailand', total: '$5k – $11k', flight: '20h from US East / 12h from EU', signature: 'Cheaper than Bali, food capital, more islands' },
  { dest: 'Sri Lanka', total: '$5k – $10k', flight: '19h from US East / 11h from EU', signature: 'Tea country + safari + south coast beaches' },
]

export default function BaliHoneymoonCostPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Bali Honeymoon Cost: 2026 Real Numbers',
    description:
      'How much a Bali honeymoon really costs in 2026 — four budget tiers, line-by-line breakdown, four real 7-night sample budgets, hidden costs, and 8 ways to spend less.',
    image: 'https://myhoneymoonhotel.com/images/hotels/four-seasons-resort-bali-at-sayan-bali/hero.webp',
    author: { '@type': 'Organization', name: 'MyHoneymoonHotel', url: 'https://myhoneymoonhotel.com' },
    publisher: {
      '@type': 'Organization',
      name: 'MyHoneymoonHotel',
      logo: { '@type': 'ImageObject', url: 'https://myhoneymoonhotel.com/logo.png' },
    },
    datePublished: '2026-02-18',
    dateModified: '2026-05-02',
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://myhoneymoonhotel.com/bali-honeymoon-cost' },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://myhoneymoonhotel.com' },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Bali Honeymoon Cost',
        item: 'https://myhoneymoonhotel.com/bali-honeymoon-cost',
      },
    ],
  }

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* HERO */}
      <section className="relative h-[70vh] min-h-[520px] flex items-end overflow-hidden">
        <Image
          src="/images/hotels/four-seasons-resort-bali-at-sayan-bali/hero.webp"
          alt="Four Seasons Resort Bali at Sayan jungle pool villa above the Ayung river — Bali honeymoon"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={75}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="relative z-10 px-8 sm:px-12 pb-16 max-w-4xl">
          <p className="text-white/60 text-xs tracking-[0.2em] uppercase mb-5">The Cost Guide</p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.05] mb-6">
            Bali honeymoon<br />cost — 2026.
          </h1>
          <p className="text-white/75 text-base sm:text-lg max-w-2xl leading-relaxed">
            How much a Bali honeymoon really costs in 2026. Four budget tiers from $3k to $40k+, the five
            cost drivers, line-by-line breakdowns, four real 7-night sample budgets, hidden costs, the
            cheapest months, and the eight ways to spend meaningfully less without losing the magic.
          </p>
        </div>
      </section>

      {/* BREADCRUMB */}
      <nav aria-label="Breadcrumb" className="max-w-4xl mx-auto px-6 pt-8 text-xs text-zinc-500">
        <Link href="/" className="hover:text-zinc-900">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-zinc-900">Bali Honeymoon Cost</span>
      </nav>

      {/* INTRO + TL;DR */}
      <section className="max-w-3xl mx-auto px-6 py-14 prose prose-zinc">
        <p className="text-lg text-zinc-700 leading-relaxed">
          A Bali honeymoon in 2026 costs anywhere from <strong>$3,000 to $40,000+</strong> all-in for two
          people, seven nights. That spread is wider than the Maldives and Bora Bora because Bali offers
          everything from a $300-a-night boutique villa in Canggu to a $6,000-a-night Bulgari cliff-top
          pavilion at Uluwatu — and where you land inside it depends on five concrete decisions: area,
          property type, season, flight routing, and ground-transport choice. Get those right and you can
          have a real Bali experience for $5k. Get them wrong and the same week quietly bills you $11k.
        </p>
        <p className="text-base text-zinc-700 leading-relaxed mt-5">
          This guide is the cost breakdown we wish someone had handed us. Real 2026 prices, real hotels, real
          line items — including the often-missed $10/pp Bali Tourism Levy, the $35/pp visa-on-arrival, the
          21% government-and-service uplift on upper-tier rooms, and the private-driver math nobody quite
          explains. We work bottom-up: four tiers, the cost drivers, a full line-by-line table, four sample
          7-night budgets at named hotels, the cheapest months, eight ways to spend less, and a head-to-head
          comparison with the{' '}
          <Link href="/maldives-honeymoon-cost" className="text-rose-500 hover:text-rose-600 underline underline-offset-2">
            Maldives
          </Link>
          , Thailand, and Sri Lanka. For the broader pre-trip checklist see our{' '}
          <Link href="/how-to-plan-a-honeymoon" className="text-rose-500 hover:text-rose-600 underline underline-offset-2">
            full honeymoon planning guide
          </Link>.
        </p>

        <div className="not-prose my-12 bg-zinc-50 border border-zinc-100 rounded-2xl p-7">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-4">In this guide</p>
          <ol className="text-sm text-zinc-700 space-y-2 leading-relaxed list-decimal pl-5">
            <li><a className="hover:text-rose-500" href="#tldr">The four budget tiers — TL;DR table</a></li>
            <li><a className="hover:text-rose-500" href="#drivers">The five cost drivers</a></li>
            <li><a className="hover:text-rose-500" href="#line-items">Line-by-line cost breakdown</a></li>
            <li><a className="hover:text-rose-500" href="#samples">Four real 7-night sample budgets</a></li>
            <li><a className="hover:text-rose-500" href="#season">Best value months</a></li>
            <li><a className="hover:text-rose-500" href="#tips">8 ways to spend meaningfully less</a></li>
            <li><a className="hover:text-rose-500" href="#hidden">Hidden costs nobody warns you about</a></li>
            <li><a className="hover:text-rose-500" href="#compare">Bali vs. Maldives vs. Thailand vs. Sri Lanka</a></li>
            <li><a className="hover:text-rose-500" href="#faq">Frequently asked questions</a></li>
          </ol>
        </div>
      </section>

      {/* 1. TL;DR */}
      <section id="tldr" className="bg-zinc-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-3">Section 01</p>
          <h2 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-6 leading-tight">
            The four budget tiers
          </h2>
          <p className="text-zinc-700 text-base leading-relaxed mb-10">
            Seven nights. Two people. All-in — flights from a major US or EU hub, hotels (typically a
            3+4 split between Ubud and the coast), private driver, meals, taxes, tips, modest activities.
            The tier is set by which hotels you book; everything else flows from that decision.
          </p>

          <div className="overflow-x-auto -mx-6 px-6">
            <table className="w-full text-sm bg-white border border-zinc-100 rounded-2xl overflow-hidden">
              <thead className="bg-zinc-100 text-zinc-700">
                <tr>
                  <th className="text-left p-4 font-semibold">Tier</th>
                  <th className="text-left p-4 font-semibold">7-night total</th>
                  <th className="text-left p-4 font-semibold">Sample hotels</th>
                  <th className="text-left p-4 font-semibold">Transport</th>
                  <th className="text-left p-4 font-semibold">Room</th>
                  <th className="text-left p-4 font-semibold">Meal plan</th>
                </tr>
              </thead>
              <tbody>
                {TIER_TABLE.map((t) => (
                  <tr key={t.tier} className="border-t border-zinc-100 align-top">
                    <td className="p-4 font-semibold text-zinc-900">{t.tier}</td>
                    <td className="p-4 text-rose-500 font-semibold tabular-nums">{t.range}</td>
                    <td className="p-4 text-zinc-700">{t.examples}</td>
                    <td className="p-4 text-zinc-700">{t.transfer}</td>
                    <td className="p-4 text-zinc-700">{t.villa}</td>
                    <td className="p-4 text-zinc-700">{t.meal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-zinc-600 text-sm leading-relaxed mt-6 italic">
            All numbers in 2026 USD, for two people, including 11% government tax, 10% service charge on
            upper-tier hotels, $10/pp Bali Tourism Levy, and $35/pp visa-on-arrival. Excludes premium-cabin
            flight upgrades and credit-card-point redemptions, which can shift the top-line by $3k–$8k in
            either direction.
          </p>
        </div>
      </section>

      {/* 2. COST DRIVERS */}
      <section id="drivers" className="max-w-3xl mx-auto px-6 py-20">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-3">Section 02</p>
        <h2 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-6 leading-tight">
          The five cost drivers
        </h2>
        <p className="text-zinc-700 text-base leading-relaxed mb-10">
          Almost every dollar of variance between a $5k and a $14k Bali honeymoon is explained by these five
          decisions. Understand them before you start price-shopping rooms — most couples overspend because
          they optimize the room rate while ignoring the four bigger levers.
        </p>
        <div className="space-y-9">
          {COST_DRIVERS.map((d, i) => (
            <div key={d.title} className="border-l-2 border-rose-200 pl-6">
              <p className="text-xs font-mono text-rose-500 uppercase tracking-widest mb-1">Driver {i + 1}</p>
              <h3 className="font-display text-2xl text-zinc-900 mb-3">{d.title}</h3>
              <p className="text-zinc-700 text-base leading-relaxed">{d.detail}</p>
            </div>
          ))}
        </div>
        <p className="text-zinc-700 text-base leading-relaxed mt-10">
          For couples leaning into the wellness side of Bali, see our{' '}
          <Link href="/experiences/wellness" className="text-rose-500 hover:text-rose-600 underline underline-offset-2">
            wellness honeymoon experience hub
          </Link>{' '}
          — Como Shambhala, Fivelements, and Mandapa all show up there with full programs.
        </p>
      </section>

      {/* 3. LINE ITEMS */}
      <section id="line-items" className="bg-zinc-50 py-20">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-3">Section 03</p>
          <h2 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-6 leading-tight">
            Line-by-line cost breakdown
          </h2>
          <p className="text-zinc-700 text-base leading-relaxed mb-10">
            Every line item that hits a typical 7-night Bali honeymoon, with 2026 ranges. Build your own
            number by selecting one row from each category — flights, hotel, transport — then adding the
            fixed lines (visa, tourism levy, tips, insurance, meals).
          </p>

          <div className="overflow-x-auto -mx-6 px-6">
            <table className="w-full text-sm bg-white border border-zinc-100 rounded-2xl overflow-hidden">
              <tbody>
                {LINE_ITEMS.map((row, i) => (
                  <tr key={i} className="border-t border-zinc-100 first:border-t-0">
                    <td className="p-4 text-zinc-700">{row[0]}</td>
                    <td className="p-4 text-zinc-900 font-medium text-right tabular-nums whitespace-nowrap">{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-zinc-600 text-sm leading-relaxed mt-6 italic">
            The "+21% uplift" line on tax + service is the single most overlooked figure in Bali budgeting at
            5★ hotels. Resorts quote room rates "++" — meaning the printed price plus 11% government tax
            plus 10% service. A $1,000/night villa is a $1,210 villa. Mid-tier and warung pricing is
            tax-included.
          </p>
        </div>
      </section>

      {/* 4. SAMPLE BUDGETS */}
      <section id="samples" className="max-w-3xl mx-auto px-6 py-20">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-3">Section 04</p>
        <h2 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-6 leading-tight">
          Four real 7-night sample budgets
        </h2>
        <p className="text-zinc-700 text-base leading-relaxed mb-10">
          Four named-hotel honeymoons we have priced in 2026, top to bottom, with line items and the season
          we recommend for each tier. Use them as a calibration: find the one closest to your dream and
          adjust line by line.
        </p>
        <div className="space-y-10">
          {SAMPLE_BUDGETS.map((s) => (
            <div key={s.name} className="border border-zinc-100 rounded-2xl p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-3 mb-1">
                <h3 className="font-display text-2xl text-zinc-900">{s.name}</h3>
                <p className="text-rose-500 font-semibold text-lg tabular-nums">{s.total}</p>
              </div>
              <p className="text-zinc-500 text-xs uppercase tracking-widest mb-5">{s.season}</p>
              <table className="w-full text-sm mb-5">
                <tbody>
                  {s.bullets.map((row, i) => (
                    <tr key={i} className="border-t border-zinc-100">
                      <td className="py-2 text-zinc-600">{row[0]}</td>
                      <td className="py-2 text-zinc-900 font-medium text-right tabular-nums whitespace-nowrap">{row[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-zinc-700 text-sm leading-relaxed italic">{s.note}</p>
            </div>
          ))}
        </div>
        <p className="text-zinc-700 text-base leading-relaxed mt-10">
          For the curated edit of every property we cover in this destination, see our{' '}
          <Link href="/destinations/bali" className="text-rose-500 hover:text-rose-600 underline underline-offset-2">
            Bali destination guide
          </Link>{' '}
          and the{' '}
          <Link href="/experiences/luxury" className="text-rose-500 hover:text-rose-600 underline underline-offset-2">
            luxury honeymoon experience hub
          </Link>.
        </p>
      </section>

      {/* 5. SEASON */}
      <section id="season" className="bg-zinc-50 py-20">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-3">Section 05</p>
          <h2 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-6 leading-tight">
            Best value months for a Bali honeymoon
          </h2>
          <p className="text-zinc-700 text-base leading-relaxed mb-10">
            Bali has two seasons — dry (May to October) and rainy (November to April) — but in practice the
            price spread is sharper than the weather spread. The cheapest weeks (February, late March, May,
            September) come with 1–2 likely rained-out afternoons across a 7-night stay; the trade is 25–40%
            off the headline rate.
          </p>
          <div className="space-y-6">
            {SEASONS.map((s) => (
              <div key={s.months} className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 border-b border-zinc-200 pb-5">
                <div className="sm:w-44 shrink-0">
                  <p className="font-display text-xl text-zinc-900">{s.months}</p>
                  <p className="text-rose-500 text-xs font-semibold uppercase tracking-widest mt-0.5">{s.verdict}</p>
                </div>
                <p className="text-zinc-700 text-base leading-relaxed">{s.detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 bg-rose-50 border border-rose-100 rounded-2xl p-6">
            <p className="text-zinc-700 text-base leading-relaxed">
              <strong>The single rule:</strong> avoid July 1 to August 25 and December 20 to January 5. Every
              other window is workable, and four windows (Feb–early March, late March–April, May, September)
              are genuinely cheap. If your wedding lands in June, push the honeymoon to September.
            </p>
          </div>
        </div>
      </section>

      {/* 6. TIPS */}
      <section id="tips" className="max-w-3xl mx-auto px-6 py-20">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-3">Section 06</p>
        <h2 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-6 leading-tight">
          8 ways to spend meaningfully less
        </h2>
        <p className="text-zinc-700 text-base leading-relaxed mb-10">
          Each of these saves at least $300 per couple. Stack four or five and the same Bali experience
          drops $1,500–$3,000 without losing anything that matters.
        </p>
        <ol className="space-y-7">
          {TIPS.map((t, i) => (
            <li key={t.title} className="flex gap-5">
              <span className="font-display text-2xl text-rose-500 tabular-nums w-8 shrink-0">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="font-medium text-zinc-900 mb-1.5">{t.title}</h3>
                <p className="text-zinc-700 text-sm leading-relaxed">{t.detail}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="text-zinc-700 text-base leading-relaxed mt-10">
          The 3+4 Ubud-and-coast split is the highest-leverage decision on this list. See our{' '}
          <Link href="/destinations/bali" className="text-rose-500 hover:text-rose-600 underline underline-offset-2">
            Bali destination guide
          </Link>{' '}
          for the full property-by-property edit, or browse the{' '}
          <Link href="/best/honeymoon-resorts-2026" className="text-rose-500 hover:text-rose-600 underline underline-offset-2">
            best honeymoon resorts of 2026
          </Link>{' '}
          for cross-destination shortlist.
        </p>
      </section>

      {/* 7. HIDDEN COSTS */}
      <section id="hidden" className="bg-zinc-950 text-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">Section 07</p>
          <h2 className="font-display text-4xl sm:text-5xl mb-6 leading-tight">
            Hidden costs nobody warns you about
          </h2>
          <p className="text-zinc-400 text-base leading-relaxed mb-10">
            Nine line items that quietly add 10–15% to the headline number. Read this before you book — most
            are avoidable or budgetable, none are deal-breakers if you see them coming.
          </p>
          <div className="space-y-6">
            {HIDDEN_COSTS.map((row) => (
              <div key={row[0]} className="border-b border-zinc-800 pb-5">
                <h3 className="font-display text-xl text-rose-300 mb-2">{row[0]}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{row[1]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. COMPARISON */}
      <section id="compare" className="max-w-3xl mx-auto px-6 py-20">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-3">Section 08</p>
        <h2 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-6 leading-tight">
          Bali vs. Maldives vs. Thailand vs. Sri Lanka
        </h2>
        <p className="text-zinc-700 text-base leading-relaxed mb-10">
          Four Asia honeymoon destinations at overlapping spend bands. Bali wins for the jungle-and-beach
          combination and for value at the 5★ tier; the Maldives wins for the iconic overwater photo and
          total privacy; Thailand wins for food and island-hopping flexibility; Sri Lanka wins for couples
          who want safari and tea country baked into the same trip.
        </p>

        <div className="overflow-x-auto -mx-6 px-6">
          <table className="w-full text-sm bg-white border border-zinc-100 rounded-2xl overflow-hidden">
            <thead className="bg-zinc-100 text-zinc-700">
              <tr>
                <th className="text-left p-4 font-semibold">Destination</th>
                <th className="text-left p-4 font-semibold">7-night total</th>
                <th className="text-left p-4 font-semibold">Flight time</th>
                <th className="text-left p-4 font-semibold">Signature</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON.map((c) => (
                <tr key={c.dest} className="border-t border-zinc-100 align-top">
                  <td className="p-4 font-semibold text-zinc-900">{c.dest}</td>
                  <td className="p-4 text-rose-500 font-semibold tabular-nums whitespace-nowrap">{c.total}</td>
                  <td className="p-4 text-zinc-700 whitespace-nowrap">{c.flight}</td>
                  <td className="p-4 text-zinc-700">{c.signature}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-zinc-700 text-base leading-relaxed mt-8">
          Dive deeper into the alternatives:{' '}
          <Link href="/destinations/maldives" className="text-rose-500 hover:text-rose-600 underline underline-offset-2">
            Maldives
          </Link>
          ,{' '}
          <Link href="/destinations/thailand" className="text-rose-500 hover:text-rose-600 underline underline-offset-2">
            Thailand
          </Link>
          , and{' '}
          <Link href="/destinations/sri-lanka" className="text-rose-500 hover:text-rose-600 underline underline-offset-2">
            Sri Lanka
          </Link>
          . Or run a head-to-head on our{' '}
          <Link href="/compare" className="text-rose-500 hover:text-rose-600 underline underline-offset-2">
            comparison hub
          </Link>.
        </p>
      </section>

      {/* 9. FAQ */}
      <section id="faq" className="bg-zinc-50 py-20">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-3">Section 09</p>
          <h2 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-6 leading-tight">
            Frequently asked questions
          </h2>
          <div className="space-y-7 mt-10">
            {FAQS.map((f, i) => (
              <details key={i} className="group border-b border-zinc-200 pb-5">
                <summary className="cursor-pointer font-medium text-zinc-900 text-lg flex justify-between items-start gap-4">
                  <span>{f.q}</span>
                  <span className="text-rose-500 group-open:rotate-45 transition-transform shrink-0 font-light text-2xl leading-none">+</span>
                </summary>
                <p className="text-zinc-700 text-base leading-relaxed mt-3">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <Image
          src="/images/hotels/four-seasons-resort-bali-at-sayan-bali/hero.webp"
          alt="Find your Bali honeymoon hotel"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
        <div className="relative max-w-4xl mx-auto px-6 text-white">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-300 mb-4">Now, the resort</p>
          <h2 className="font-display text-4xl sm:text-5xl leading-tight mb-5">
            Find the Bali resort <br className="hidden sm:block" />that fits your budget.
          </h2>
          <p className="text-white/70 text-base leading-relaxed mb-8 max-w-xl">
            Take the 6-step quiz — five lifestyle questions and we return three matched Bali resorts at your
            tier, with vetted hotel notes, real prices, and the Ubud-vs-coast split figured out. Sixty
            seconds.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/quiz"
              className="bg-rose-500 hover:bg-rose-600 text-white font-semibold text-sm px-8 py-4 rounded-full transition-colors shadow-xl"
            >
              Take the quiz →
            </Link>
            <Link
              href="/destinations/bali"
              className="border border-white/30 backdrop-blur-md bg-white/5 hover:bg-white/10 text-white font-semibold text-sm px-8 py-4 rounded-full transition-colors"
            >
              See every Bali resort
            </Link>
          </div>
        </div>
      </section>
    </article>
  )
}
