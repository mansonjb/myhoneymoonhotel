import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { buildAlternates } from '@/lib/alternates'
import AuthorByline from '@/components/AuthorByline'

export const metadata: Metadata = {
  title: 'Barbados Honeymoon Cost: 2026 Real Numbers ($4k–$28k+)',
  description:
    'How much a Barbados honeymoon really costs in 2026. Four budget tiers, line-by-line breakdown, three real 7-night sample budgets at named hotels, hidden costs (17.5% VAT, 10% service), best months, and 8 ways to spend less.',
  alternates: buildAlternates('/barbados-honeymoon-cost'),
  openGraph: {
    title: 'Barbados Honeymoon Cost — 2026 Real Numbers',
    description:
      'Four budget tiers ($4k–$28k+), real hotel breakdowns at Sandy Lane, Cobblers Cove and Coral Reef Club, hidden costs (17.5% VAT, 10% service), best months, and 8 ways to spend less.',
    url: 'https://myhoneymoonhotel.com/barbados-honeymoon-cost',
    siteName: 'MyHoneymoonHotel',
    images: [
      {
        url: 'https://myhoneymoonhotel.com/images/hotels/sandy-lane-barbados/hero.webp',
        width: 1600,
        height: 900,
        alt: 'Sandy Lane Barbados beachfront — the canonical Barbados ultra-luxury honeymoon image',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Barbados Honeymoon Cost — 2026 Real Numbers',
    description: 'Four budget tiers, real hotel breakdowns, hidden costs, best months, and 8 ways to spend less.',
    images: ['https://myhoneymoonhotel.com/images/hotels/sandy-lane-barbados/hero.webp'],
  },
}

const FAQS: { q: string; a: string }[] = [
  {
    q: 'How much does a Barbados honeymoon cost on average?',
    a: 'For 7 nights all-in (flights, hotel, ground transport, food, taxes, tips), the typical 2026 US couple spends $6,500 to $9,500 on a comfortable mid-range Barbados honeymoon — a 4★ or polished boutique on the Platinum Coast with breakfast included and a couple of nice dinners out. Drop to $4,000 if you fly economy from a US East Coast hub, book a south-coast boutique, and eat lunch at rum-shop fish fries. Push to $14,000 for a real West Coast 5★ stay at Cobblers Cove or Coral Reef Club. Ultra-luxury (Sandy Lane suite, Crane Residences three-bedroom) starts at $20,000 and runs past $28,000 for the marquee oceanfront rooms.',
  },
  {
    q: 'Are Barbados honeymoon resorts cheaper than the Maldives?',
    a: 'Yes, substantially — at every tier. A 7-night Barbados honeymoon on the Platinum Coast runs roughly 50–60% of the Maldives equivalent. There is no seaplane (a $1,000-per-couple line item in the Maldives), flights from US East Coast are 4–5 hours instead of 18+, and 4★ properties with serious quality (The House, Cobblers Cove garden room) sit in the $400–$700/night range versus $1,200+ for a Maldives overwater. The trade-off is no overwater villa — Barbados is a beach-and-village honeymoon, not a private-island honeymoon. See our /maldives-honeymoon-cost guide for the head-to-head.',
  },
  {
    q: 'How much should we budget for ground transport in Barbados?',
    a: 'Less than most Caribbean islands. Barbados has a real public-bus system that runs to most beaches for BBD$3.50 (roughly USD $1.75) per ride — couples who use it for 2–3 day trips save $200 versus taxis. Taxis from Bridgetown airport (BGI) to the West Coast run USD $35–$55 one-way; to the South Coast $25–$35. For a 7-night honeymoon most couples spend $250–$400 total on transport: airport transfers plus 4–6 evening taxis. A 5-day car rental is $200–$300 and worth it only if you plan to explore the rugged east coast at Bathsheba.',
  },
  {
    q: 'When is the cheapest time for a Barbados honeymoon?',
    a: 'Mid-April through early June, plus mid-September through mid-November (excluding the heart of hurricane season). Hotel rates drop 30–45% versus the December 20–April 15 peak. The cheapest weeks of the year are mid-September through mid-October — also the highest hurricane risk window, so book a flexible refundable rate and travel insurance with CFAR. May, June and early November are the sweet spot: shoulder pricing, sub-tropical-storm risk, water temperature still 27–28°C. Avoid the Christmas-to-New-Year fortnight (peak), late February (Holetown Festival drives rates up 15%) and the Crop Over weekend in early August.',
  },
  {
    q: 'Are there hidden costs in Barbados we should plan for?',
    a: 'Yes. The biggest one is the 17.5% VAT and 10% service charge that almost every upper-tier hotel and restaurant adds — quoted "++" on the rate sheet, so a published $500/night room is effectively $638/night once both are layered on. Restaurants on the Platinum Coast (Cin Cin, The Cliff, Champers) run $80–$140 per couple before drinks and add the same 27.5% uplift. Catamaran day-trips with Cool Runnings or Calabaza cost $130–$165 per person. Tipping is expected: roughly 10% on top of the 10% service for genuinely good service, plus $5/day for housekeeping and $10–$20 per evening for the bartender at your hotel. Budget another 12–15% on top of the headline room rate.',
  },
  {
    q: 'Should we stay on the West Coast, South Coast or East Coast?',
    a: 'The honeymoon answer is West Coast (the "Platinum Coast") for at least 5 of 7 nights. The West Coast — Holetown, Paynes Bay, Sandy Lane Bay — has the calm Caribbean Sea, the iconic white-sand beaches, and the dense concentration of luxury hotels (Sandy Lane, Cobblers Cove, Coral Reef Club, The Sandpiper, The House). The South Coast (St. Lawrence Gap, Worthing, Dover) is cheaper and livelier with nightlife but rougher waves and more crowded beaches. The East Coast at Bathsheba is dramatic, Atlantic-pounded, and unsuitable for swimming — a brilliant day-trip from the West Coast, not a base. Couples on a tighter budget split 4 nights South + 3 nights West for the best of both.',
  },
  {
    q: 'How long is the flight to Barbados from the US and UK?',
    a: 'From New York (JFK), 4h 45m direct on JetBlue or Caribbean Airlines. From Miami, 3h 30m direct on American. From Boston, 5h direct on JetBlue. From London (Gatwick), 8h 30m direct on Virgin Atlantic or British Airways. From Toronto, 5h 15m on WestJet or Air Canada. From most European cities other than London, one-stop via LGW or AMS. The short, direct flight from the US East Coast is one of the strongest cost-and-recovery cases for Barbados versus longer-haul honeymoon destinations — you land at BGI by lunch and are on the beach by 3pm.',
  },
  {
    q: 'Do we need a visa for Barbados?',
    a: 'No, for almost every honeymoon-source country. US, UK, EU, Canadian, Australian, and most Caribbean and Commonwealth passport holders get a free 90-day stamp on arrival. Your passport must be valid for the duration of your stay (6 months recommended). Pre-fill the Barbados Customs and Immigration form (BIMSafe) online within 72 hours of arrival — it is free, takes 5 minutes, and replaces the old paper landing card. Bring proof of onward travel and your hotel reservation. No vaccines required; yellow-fever certificate is only requested if you transit from a yellow-fever country.',
  },
  {
    q: 'Is all-inclusive worth it in Barbados?',
    a: 'Usually not. Barbados has one of the better food scenes in the Caribbean — Oistins Fish Fry on Friday night, the rum shops in St. Joseph, the elevated Bajan cooking at Cuz\'s Fish Stand and Brown Sugar, and the Platinum Coast headliners at Cin Cin and The Cliff. Locking into a hotel meal plan misses most of that. The exception is Sandals or Crystal Cove for honeymoon couples who want zero decisions, where the all-inclusive math works. For 4★ and 5★ stays on the West Coast, book BB or half-board and eat out at least 4 of 7 nights — including one Friday at Oistins.',
  },
  {
    q: 'Can we use credit-card points for a Barbados honeymoon?',
    a: 'Yes, especially for flights. JetBlue, American and Caribbean Airlines all fly BGI direct from US East Coast — TrueBlue and AAdvantage points cover round-trip economy from $300 in taxes. From the UK, Virgin Atlantic Flying Club covers LGW–BGI for 47,500 points + £550 one-way in Upper Class on award sales. Hotel-points coverage is thinner: Hilton Honors covers Hilton Barbados Resort, IHG covers Sea Breeze Beach House and the InterContinental at Crane is one of the better Crane-side options. The marquee independents (Sandy Lane, Cobblers Cove, Coral Reef Club, Sandpiper) are not part of any global program — pay cash here and burn points on the flights.',
  },
]

const TIER_TABLE = [
  {
    tier: 'Budget',
    range: '$4,000 – $6,000',
    tag: 'South Coast boutique or 3★ all-inclusive',
    examples: 'Sea Breeze Beach House · Coconut Court · Crystal Cove',
    transfer: 'Public bus + occasional taxi',
    villa: 'Garden or pool-view room',
    meal: 'BB or half-board',
  },
  {
    tier: 'Mid-range',
    range: '$6,500 – $9,500',
    tag: 'Polished West Coast 4★, direct economy flights',
    examples: 'The House · The Sandpiper · The Crane Resort suite',
    transfer: 'Airport transfer + taxis',
    villa: 'Ocean-view suite, butler-light service',
    meal: 'BB + à la carte dining',
  },
  {
    tier: 'Luxury',
    range: '$11,000 – $16,000',
    tag: 'West Coast 5★, premium economy or short-haul business',
    examples: 'Cobblers Cove · Coral Reef Club · Fairmont Royal Pavilion',
    transfer: 'Private car transfer',
    villa: 'Beachfront suite, 60m²+',
    meal: 'BB + à la carte, 2–3 splurges',
  },
  {
    tier: 'Ultra-luxury',
    range: '$20,000 – $28,000+',
    tag: 'Marquee West Coast residence or oceanfront suite',
    examples: 'Sandy Lane · Crane Residences · Cobblers Cove Camelot',
    transfer: 'Private car + on-call driver',
    villa: 'Oceanfront suite or 2-BR residence',
    meal: 'Bespoke / dine-around',
  },
]

const COST_DRIVERS = [
  {
    title: 'Coast choice — West (Platinum) vs. South vs. East',
    detail:
      'The single biggest variable. The West Coast (Holetown, Paynes Bay, Sandy Lane Bay) commands a 40–80% premium over the South Coast at the same star rating because of the calm Caribbean-side beach, the dense restaurant cluster, and the concentration of legacy luxury hotels. The South Coast (St. Lawrence Gap, Worthing) is the value play — same island, livelier nightlife, rougher water, 30–40% off the West Coast rate. The East Coast at Bathsheba is for surfers and day-trippers only, with very few hotels and dramatic but unswimmable Atlantic surf.',
  },
  {
    title: 'Hotel type — legacy independent vs. branded resort vs. all-inclusive',
    detail:
      'Barbados is dominated by independent legacy hotels — Sandy Lane, Cobblers Cove, Coral Reef Club, The Sandpiper, Lone Star — each owned and operated for 40+ years with deep British and Bajan character. These run $700–$3,500/night and are not on any points program. Branded resorts (Fairmont Royal Pavilion, Hilton Barbados, InterContinental at Crane) offer comparable luxury at slightly lower rates with global loyalty coverage. All-inclusive properties (Sandals Barbados, Crystal Cove, Almond Beach) bundle every meal and drink at $400–$900/night per couple and make sense for couples wanting zero decisions.',
  },
  {
    title: 'Season — high season Dec 15 to Apr 15, hurricane Sep–Oct',
    detail:
      'Peak (December 20 – January 5, Easter week, Crop Over weekend in early August) costs 1.8–2.4× the May–June low. High season (mid-December through mid-April) runs 1.5× shoulder. The deep shoulder (mid-April through May, late September through November excluding hurricane peak) is genuinely cheap — 30–45% off. Hurricane season is June 1 – November 30; serious storm risk is concentrated in August–October. Direct strikes on Barbados are rare (the island sits at the southeast edge of the storm track) but rain bands and rough seas can affect 1–2 days of a 7-night stay.',
  },
  {
    title: 'Flight routing — direct from US East / UK vs. one-stop from EU',
    detail:
      'Barbados is one of the shortest long-haul honeymoons for North American and UK couples. JFK–BGI is 4h 45m direct on JetBlue ($350–$650 economy round-trip per person, $1,200–$2,000 in Mint), MIA–BGI is 3h 30m, LGW–BGI is 8h 30m direct on Virgin Atlantic and British Airways ($550–$1,100 economy, $2,800–$5,500 in Club/Upper). From continental Europe, one-stop via Gatwick or Frankfurt typically; from US West Coast, one-stop via JFK or MIA. The direct, daylight-friendly schedule is a major part of the Barbados honeymoon case — no jet lag tax on either end.',
  },
  {
    title: 'Ground transport — bus vs. taxi vs. rental car',
    detail:
      'Barbados has a working bus system that runs the South Coast highway and reaches most West Coast beaches for BBD$3.50 (USD $1.75) per ride. Couples comfortable with buses save $200–$300 over the week. Taxis are fixed-rate by zone (BGI to West Coast $35–$55, BGI to South Coast $25–$35, evening hops $10–$30) — not metered, always agree the fare upfront. Rental cars run $50–$70/day for an automatic, plus a one-time $5 visitor permit at any rental desk; useful for 2–3 days exploring the east coast and rum-distillery country, overkill for the full week.',
  },
]

const LINE_ITEMS = [
  ['Flights from US East Coast (economy, 2pax, direct)', '$700 – $1,300'],
  ['Flights from US East Coast (Mint/business, 2pax)', '$2,400 – $4,000'],
  ['Flights from US West Coast (economy, 2pax, one-stop)', '$1,200 – $2,000'],
  ['Flights from UK (economy, 2pax, direct)', '$1,100 – $2,200'],
  ['Flights from UK (Club World/Upper Class, 2pax)', '$5,600 – $11,000'],
  ['Hotel, 7 nights, South Coast boutique or 3★ AI', '$1,800 – $3,200'],
  ['Hotel, 7 nights, West Coast 4★ ocean-view', '$3,500 – $5,800'],
  ['Hotel, 7 nights, West Coast 5★ legacy (Cobblers, Coral Reef)', '$6,500 – $11,000'],
  ['Hotel, 7 nights, Sandy Lane or Crane Residence (ultra)', '$14,000 – $25,000'],
  ['Airport transfer BGI to West Coast (private, one-way)', '$35 – $55'],
  ['Airport transfer BGI to South Coast (private, one-way)', '$25 – $35'],
  ['Bus pass / Smart Card for the week (2pax)', '$30 – $50'],
  ['Car rental, 5 days, automatic + visitor permit', '$255 – $355'],
  ['Meals — mix of fish fry + mid-range + 3 splurges (2pax × 7 days)', '$700 – $1,400'],
  ['Catamaran day-trip with turtles & shipwreck (2pax)', '$260 – $330'],
  ['Harrison\'s Cave + Animal Flower Cave + Mount Gay tour', '$180 – $300'],
  ['Couples spa (massage + facial, 90 min)', '$300 – $520'],
  ['VAT (17.5%) + service (10%) on hotel + upscale F&B', '+27.5% uplift'],
  ['Tips — extra 10% on top of service, housekeeping, bartender', '$120 – $220'],
  ['Travel insurance with CFAR ($8k trip value)', '$220 – $480'],
]

const SAMPLE_BUDGETS = [
  {
    name: 'Mid-range — The House by Elegant Hotels',
    total: '$7,800',
    season: 'Late May, 7 nights',
    bullets: [
      ['Flights (economy direct, JFK → BGI on JetBlue)', '$1,100'],
      ['The House, 7 nights, junior suite ocean view', '$3,400'],
      ['Daily continental breakfast included', 'Included'],
      ['Private airport transfers (round-trip)', '$90'],
      ['Meals — Tides, Cin Cin, Champers, Oistins Friday', '$1,150'],
      ['Catamaran turtle & shipwreck snorkel cruise', '$310'],
      ['Couples massage at The House Ambassador suite', '$260'],
      ['Harrison\'s Cave + east coast day-tour', '$180'],
      ['VAT, service, tips, buffer', '$1,310'],
    ],
    note:
      'The textbook mid-range Barbados West Coast honeymoon. The House is the adults-only Elegant Hotels boutique in Paynes Bay — 34 suites, an "Ambassador" host service, no children, complimentary champagne breakfast. Late May is the shoulder sweet spot: still pre-hurricane, post-peak pricing, 28°C water.',
  },
  {
    name: 'Luxury — Cobblers Cove + one night at Crane Resort',
    total: '$13,400',
    season: 'Mid-November, 7 nights',
    bullets: [
      ['Flights (premium economy, BOS → BGI via JFK)', '$2,200'],
      ['Cobblers Cove, 6 nights, ocean garden suite, BB', '$6,600'],
      ['The Crane Resort, 1 night, oceanfront suite, BB', '$680'],
      ['Private car transfers + on-call evenings', '$280'],
      ['Meals — The Cliff, The Tides, Cin Cin, rum-shop lunches', '$1,180'],
      ['Catamaran private charter (half-day, just the two)', '$540'],
      ['Couples spa ritual at Cobblers + Crane', '$620'],
      ['Mount Gay distillery tour + Bathsheba day-drive', '$220'],
      ['VAT, service, tips, insurance, buffer', '$1,080'],
    ],
    note:
      'Cobblers Cove is the Relais & Châteaux Barbadian icon — 40 suites, the "Camelot" penthouse, English-country-house service on a Caribbean beach. One night at the Crane on the south-east cliffs gives you the dramatic coastline contrast. Mid-November is shoulder-into-pre-peak: rates haven\'t spiked yet, hurricane window has closed.',
  },
  {
    name: 'Ultra-luxury — Sandy Lane',
    total: '$24,800',
    season: 'Early December, 7 nights',
    bullets: [
      ['Flights (Mint round-trip, JFK → BGI)', '$3,800'],
      ['Sandy Lane, 7 nights, Orchid Wing oceanfront suite, BB', '$15,400'],
      ['Private airport transfers + on-call driver', '$420'],
      ['Meals — L\'Acajou, Bajan Blue, The Cliff (off-property)', '$1,650'],
      ['Spa at Sandy Lane — couples ritual + facial', '$880'],
      ['18 holes for two at the Country Club course', '$640'],
      ['Private catamaran charter, full day with chef', '$1,200'],
      ['VAT, 10% service, tips, insurance, buffer', '$810'],
    ],
    note:
      'Sandy Lane is the address. 113 rooms, the original 1961 coral-stone arches restored after the 1998 rebuild, three golf courses, and the most consistent service on the island. Orchid Wing rooms face the curve of Sandy Lane Bay directly. Early December lands before the December 20 peak spike with full pre-Christmas weather.',
  },
]

const SEASONS = [
  { months: 'Mid-April – May', verdict: 'Best value', detail: 'High-season pricing drops 35–45% after Easter. Water 27°C, sub-tropical-storm risk minimal. Shoulder sweet spot.' },
  { months: 'June', verdict: 'Good value', detail: 'Start of hurricane season but historical risk to Barbados is low in June. Rates 30–40% off peak. Warm, occasional afternoon showers.' },
  { months: 'July – early August', verdict: 'Mid-shoulder', detail: 'European school holidays nudge rates up 10–15%. Crop Over festival peaks early August — book accommodation 4+ months ahead for that week.' },
  { months: 'Late August – October', verdict: 'Cheapest (avoid for storm risk)', detail: 'Lowest rates of the year (40–50% off peak) but the heart of hurricane season. Direct strikes on Barbados are rare — the island sits at the southeast track edge — but tropical storms and heavy rain can affect 1–3 days. Book refundable rates + CFAR insurance.' },
  { months: 'November', verdict: 'Excellent value', detail: 'Hurricane window closes. Rates still 25–35% below December peak. Reliable sun returns, water 28°C, no school-holiday crowds.' },
  { months: 'Mid-December – early January', verdict: 'Peak (avoid for cost)', detail: 'Christmas-and-New-Year fortnight is 2–2.4× shoulder. Mandatory gala dinners, 7-night minimum stays, sold out 6 months ahead.' },
  { months: 'January – mid-March', verdict: 'High season', detail: 'Best weather of the year, lowest rainfall, 28°C and breezy. Rates 1.5× shoulder. Holetown Festival mid-February drives a 15% mini-spike.' },
  { months: 'Mid-March – Easter', verdict: 'High season tail', detail: 'Dry season continues but Easter week is a hard mini-peak. Push to mid-April if budget matters.' },
]

const TIPS = [
  {
    title: 'Travel mid-April, May, June or November',
    detail:
      'The single highest-leverage decision. Pushing dates out of December–March peak into the shoulder windows drops the same hotel 30–45%, with weather differences measured in afternoon-shower minutes, not days. Mid-November is the post-hurricane reset week — fully dry, fully discounted, fully empty of school groups.',
  },
  {
    title: 'Book direct on the legacy independents — Cobblers, Coral Reef, Sandpiper',
    detail:
      'Sandy Lane, Cobblers Cove, Coral Reef Club, The Sandpiper and Lone Star are family-owned and not on any global loyalty program. Booking direct on their websites unlocks the seven-pay-six promotions and the room-category upgrades that OTAs never see. Email the reservations manager — Bajan hospitality runs on relationships, not search funnels.',
  },
  {
    title: 'Use the public bus for at least 2 days',
    detail:
      'The Transport Board buses (blue) and the ZR vans (yellow with blue stripe) run the South Coast highway and most West Coast beach roads for BBD$3.50 (USD $1.75) per ride. A couple using buses for 2 day-trips saves $80–$120 over taxis. The bus from Holetown to Bridgetown is a 25-minute, $3.50, scenic-rum-shop-passing way to see real Barbados.',
  },
  {
    title: 'Skip all-inclusive on the West Coast — eat at Oistins Friday',
    detail:
      'Barbados has an excellent food scene that doesn\'t end at the hotel front desk. Oistins Fish Fry (Friday night especially) is the cultural anchor — grilled marlin, swordfish, mahi-mahi, $12 a plate, live calypso. Cuz\'s Fish Stand on Pebbles Beach does the best fish cutter on the island for $5. Brown Sugar serves elevated Bajan classics. Locking into a hotel meal plan misses all of this.',
  },
  {
    title: 'Stay South Coast 4 nights + West Coast 3 nights',
    detail:
      'A two-base split saves $1,500–$2,500 versus a full 7 nights at a West Coast 5★ while still giving you the Platinum Coast experience. Start South (St. Lawrence Gap or Worthing — Sea Breeze Beach House, Coconut Court) for the energy and the food trucks, then transfer to Cobblers Cove or The House for the calm-water, white-sand finish. The 30-minute taxi between is $35.',
  },
  {
    title: 'Book the catamaran from the beach, not the hotel concierge',
    detail:
      'Cool Runnings, Calabaza and Tiami all sell directly from kiosks on the West Coast beach for $120–$140 per person (lunch, drinks, turtle and shipwreck swim included). The same trip booked through hotel concierge is $160–$195 per person — the markup is the concierge\'s 25–30% cut. Walk 10 minutes down the beach in Holetown and book direct.',
  },
  {
    title: 'Use Honeyfund or Zola for the catamaran and the spa',
    detail:
      'Frame each gift as an experience: "the private catamaran charter at Cool Runnings", "the couples ritual at the Sandy Lane spa", "the table at The Cliff". 60% of US couples now use a honeymoon registry. Full guide at /how-to-plan-a-honeymoon.',
  },
  {
    title: 'Take an off-peak honeymoon',
    detail:
      'You do not have to fly within a week of the wedding. A Barbados honeymoon delayed 2–4 months from a March wedding to mid-May, or from a July wedding to mid-November, saves $1,800–$3,000 on the same hotel and arrives less exhausted with paperwork sorted. The romance does not depreciate.',
  },
]

const HIDDEN_COSTS = [
  ['VAT (17.5%) + service charge (10%)', 'Applied to upper-tier hotels and most restaurants on the West and South Coast. A combined 27.5% uplift in practice. Always quoted "++" on West Coast rate sheets. Rum shops and small Bajan kitchens are tax-included.'],
  ['Departure tax', 'Included in airfare since 2018 — no longer a separate cash payment at the airport. The old $25/pp line is gone. Verify on your ticket if booking with a small carrier.'],
  ['BIMSafe online customs/immigration form', 'Free, mandatory, takes 5 minutes online within 72 hours of arrival. Replaces the old paper landing card. Print or screenshot the QR code.'],
  ['Catamaran day trips', 'Group catamarans (Cool Runnings, Calabaza, Tiami) run $120–$160 per person from the beach kiosk, $160–$195 via hotel concierge. Private half-day charter is $500–$700 per couple — worth it if you can swing.'],
  ['Tipping — the second 10%', 'The 10% service charge on the bill is not the tip. For genuinely good service, Bajans expect another 10% in cash on top, plus $5/day for housekeeping and $10–$20 per evening for the bartender at your hotel. Budget $120–$220 in tips across the week.'],
  ['Upscale dining', 'Dinner at The Cliff, Cin Cin by the Sea, Champers, The Tides or L\'Acajou runs $90–$160 per couple before drinks, $160–$240 with wine pairing. Reserve The Cliff and Cin Cin 30+ days ahead in high season. Plan 2–3 of these across 7 nights, not 7.'],
  ['Spa', 'Couples 60-minute massage at a West Coast 5★ runs $260–$380; the signature 2-hour ritual at Sandy Lane spa is $640–$880 for two. Independent spas in Holetown run roughly 40% cheaper for comparable quality.'],
  ['Golf', '18 holes for two at the Sandy Lane Country Club course is $400–$640 in high season; at the Green Monkey (members + Sandy Lane guests only) substantially more. Apes Hill is the better public option at $260–$420 for two.'],
  ['Hurricane-window flight changes', 'If travelling August–October, a refundable airfare ($60–$120 more than non-refundable) plus CFAR-equipped travel insurance ($220–$480) is the cheapest hedge against a named-storm cancellation. Most cancellations resolve as 2–3-day delays, not full losses.'],
]

const COMPARISON = [
  { dest: 'Barbados', total: '$6.5k – $14k', flight: '4.5h from US East / 8.5h from UK', signature: 'Platinum Coast white sand, Bajan food scene, short flight' },
  { dest: 'St. Lucia', total: '$6k – $13k', flight: '4.5h from US East / 9h from UK', signature: 'Pitons, lusher and more dramatic, more adventure-leaning' },
  { dest: 'Antigua', total: '$6.5k – $13k', flight: '4h from US East / 8h from UK', signature: '365 beaches, classic Caribbean, more all-inclusive options' },
  { dest: 'Cape Verde', total: '$4k – $11k', flight: '11h from US East / 6h from UK', signature: 'Atlantic islands, much cheaper, year-round dry climate' },
]

export default function BarbadosHoneymoonCostPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Barbados Honeymoon Cost: 2026 Real Numbers',
    description:
      'How much a Barbados honeymoon really costs in 2026 — four budget tiers, line-by-line breakdown, three real 7-night sample budgets at named hotels, hidden costs, and 8 ways to spend less.',
    image: 'https://myhoneymoonhotel.com/images/hotels/sandy-lane-barbados/hero.webp',
    author: { '@type': 'Organization', name: 'My Honeymoon Hotel', url: 'https://myhoneymoonhotel.com/about' },
    publisher: {
      '@type': 'Organization',
      name: 'My Honeymoon Hotel',
      logo: { '@type': 'ImageObject', url: 'https://myhoneymoonhotel.com/icon.png' },
    },
    datePublished: '2026-03-04',
    dateModified: '2026-05-11',
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://myhoneymoonhotel.com/barbados-honeymoon-cost' },
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
        name: 'Barbados Honeymoon Cost',
        item: 'https://myhoneymoonhotel.com/barbados-honeymoon-cost',
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
          src="/images/hotels/sandy-lane-barbados/hero.webp"
          alt="Sandy Lane Barbados beachfront on the Platinum Coast — Barbados honeymoon"
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
            Barbados honeymoon<br />cost — 2026.
          </h1>
          <p className="text-white/75 text-base sm:text-lg max-w-2xl leading-relaxed">
            How much a Barbados honeymoon really costs in 2026. Four budget tiers from $4k to $28k+, the
            five cost drivers, line-by-line breakdowns, three real 7-night sample budgets at named West
            Coast hotels, hidden costs (17.5% VAT, 10% service), the cheapest months, and the eight ways
            to spend meaningfully less without losing the Platinum Coast magic.
          </p>
        </div>
      </section>

      {/* BREADCRUMB */}
      <nav aria-label="Breadcrumb" className="max-w-4xl mx-auto px-6 pt-8 text-xs text-zinc-500">
        <Link href="/" className="hover:text-zinc-900">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-zinc-900">Barbados Honeymoon Cost</span>
      </nav>

      <div className="max-w-4xl mx-auto px-6">
        <AuthorByline />
      </div>

      {/* INTRO + TL;DR */}
      <section className="max-w-3xl mx-auto px-6 py-14 prose prose-zinc">
        <p className="text-lg text-zinc-700 leading-relaxed">
          A Barbados honeymoon in 2026 costs anywhere from <strong>$4,000 to $28,000+</strong> all-in for
          two people, seven nights. That spread is wider than it looks because Barbados is the rare honeymoon
          island that hosts both genuine $300-a-night South Coast boutiques and $3,500-a-night Sandy Lane
          oceanfront suites — and where you land inside the spread depends on five concrete decisions:
          coast, hotel type, season, flight routing, and ground-transport choice. Get those right and you
          can have a real Platinum Coast honeymoon for $7k. Get them wrong and the same week quietly bills
          you $14k.
        </p>
        <p className="text-base text-zinc-700 leading-relaxed mt-5">
          This guide is the cost breakdown we wish someone had handed us. Real 2026 prices, real hotels,
          real line items — including the often-missed 17.5% Barbados VAT, the 10% service charge layered
          on every upscale bill, and the second-tip etiquette nobody explains. We work bottom-up: four
          tiers, the cost drivers, a full line-by-line table, three sample 7-night budgets at named hotels
          (The House, Cobblers Cove, Sandy Lane), the cheapest months, eight ways to spend less, and a
          head-to-head comparison with St. Lucia, Antigua, and{' '}
          <Link href="/cape-verde-honeymoon-cost" className="text-rose-500 hover:text-rose-600 underline underline-offset-2">
            Cape Verde
          </Link>
          . For the broader pre-trip checklist see our{' '}
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
            <li><a className="hover:text-rose-500" href="#samples">Three real 7-night sample budgets</a></li>
            <li><a className="hover:text-rose-500" href="#season">Best value months</a></li>
            <li><a className="hover:text-rose-500" href="#tips">8 ways to spend meaningfully less</a></li>
            <li><a className="hover:text-rose-500" href="#hidden">Hidden costs nobody warns you about</a></li>
            <li><a className="hover:text-rose-500" href="#compare">Barbados vs. St. Lucia vs. Antigua vs. Cape Verde</a></li>
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
            Seven nights. Two people. All-in — direct flights from a major US East Coast or UK hub, hotel
            (typically on the West or South Coast), airport transfers and local transport, meals, VAT,
            service, tips, modest activities. The tier is set by which hotel you book; everything else
            flows from that decision.
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
            All numbers in 2026 USD, for two people, including 17.5% VAT, 10% service charge on West Coast
            hotels and restaurants, and BIMSafe arrival admin (free). Excludes premium-cabin flight upgrades
            and credit-card-point redemptions, which can shift the top-line by $2k–$6k in either direction.
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
          Almost every dollar of variance between a $6k and a $14k Barbados honeymoon is explained by these
          five decisions. Understand them before you start price-shopping rooms — most couples overspend
          because they optimize the room rate while ignoring the four bigger levers.
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
          For the curated edit of every property we cover on the island, see our{' '}
          <Link href="/destinations/barbados" className="text-rose-500 hover:text-rose-600 underline underline-offset-2">
            Barbados destination guide
          </Link>{' '}
          — Sandy Lane, Cobblers Cove, Coral Reef Club, The Sandpiper, The House and the Crane Resort all
          show up there with full notes.
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
            Every line item that hits a typical 7-night Barbados honeymoon, with 2026 ranges. Build your
            own number by selecting one row from each category — flights, hotel, transport — then adding
            the fixed lines (VAT uplift, tips, insurance, meals).
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
            The "+27.5% uplift" line on VAT + service is the single most overlooked figure in Barbados
            budgeting. West Coast hotels and upscale restaurants quote rates "++" — meaning the printed
            price plus 17.5% VAT plus 10% service. A $500/night room is a $638/night room. Small Bajan
            kitchens and rum shops are tax-included.
          </p>
        </div>
      </section>

      {/* 4. SAMPLE BUDGETS */}
      <section id="samples" className="max-w-3xl mx-auto px-6 py-20">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-3">Section 04</p>
        <h2 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-6 leading-tight">
          Three real 7-night sample budgets
        </h2>
        <p className="text-zinc-700 text-base leading-relaxed mb-10">
          Three named-hotel honeymoons we have priced in 2026, mid to top, with line items and the season
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
          <Link href="/destinations/barbados" className="text-rose-500 hover:text-rose-600 underline underline-offset-2">
            Barbados destination guide
          </Link>{' '}
          and the cross-island shortlist in{' '}
          <Link href="/best/honeymoon-resorts-2026" className="text-rose-500 hover:text-rose-600 underline underline-offset-2">
            best honeymoon resorts of 2026
          </Link>.
        </p>
      </section>

      {/* 5. SEASON */}
      <section id="season" className="bg-zinc-50 py-20">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-3">Section 05</p>
          <h2 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-6 leading-tight">
            Best value months for a Barbados honeymoon
          </h2>
          <p className="text-zinc-700 text-base leading-relaxed mb-10">
            Barbados has two seasons — dry-high (mid-December to mid-April) and wet-low (May to November,
            with hurricane risk concentrated August–October) — but in practice the price spread is sharper
            than the weather spread. The cheapest weeks (May, June, November) come with 1–2 likely
            rained-out afternoons across a 7-night stay; the trade is 30–45% off the headline rate.
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
              <strong>The single rule:</strong> avoid December 20 to January 5 (peak) and Crop Over weekend
              in early August. Mid-April through June and November are the genuine sweet spots — full
              Platinum Coast experience, 30–45% off, minimal weather risk.
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
          Each of these saves at least $250 per couple. Stack four or five and the same Barbados experience
          drops $1,200–$2,500 without losing anything that matters.
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
          The South-plus-West two-base split is the highest-leverage decision on this list. See our{' '}
          <Link href="/destinations/barbados" className="text-rose-500 hover:text-rose-600 underline underline-offset-2">
            Barbados destination guide
          </Link>{' '}
          for the full property-by-property edit, or browse the{' '}
          <Link href="/best/honeymoon-resorts-2026" className="text-rose-500 hover:text-rose-600 underline underline-offset-2">
            best honeymoon resorts of 2026
          </Link>{' '}
          for a cross-destination shortlist.
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
            Nine line items that quietly add 12–18% to the headline number. Read this before you book — most
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
          Barbados vs. St. Lucia vs. Antigua vs. Cape Verde
        </h2>
        <p className="text-zinc-700 text-base leading-relaxed mb-10">
          Four short-and-mid-haul honeymoon destinations at overlapping spend bands. Barbados wins for the
          food scene, the legacy West Coast hotels and the shortest direct flight from US East Coast;
          St. Lucia wins for the Pitons and adventure; Antigua wins for sheer beach count and all-inclusive
          density; Cape Verde wins on price and the year-round dry climate.
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
          <Link href="/destinations/st-lucia" className="text-rose-500 hover:text-rose-600 underline underline-offset-2">
            St. Lucia
          </Link>
          ,{' '}
          <Link href="/destinations/antigua" className="text-rose-500 hover:text-rose-600 underline underline-offset-2">
            Antigua
          </Link>
          , and{' '}
          <Link href="/cape-verde-honeymoon-cost" className="text-rose-500 hover:text-rose-600 underline underline-offset-2">
            Cape Verde honeymoon cost
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
          src="/images/hotels/sandy-lane-barbados/hero.webp"
          alt="Find your Barbados honeymoon hotel"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
        <div className="relative max-w-4xl mx-auto px-6 text-white">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-300 mb-4">Now, the resort</p>
          <h2 className="font-display text-4xl sm:text-5xl leading-tight mb-5">
            Find the Barbados resort <br className="hidden sm:block" />that fits your budget.
          </h2>
          <p className="text-white/70 text-base leading-relaxed mb-8 max-w-xl">
            Take the 6-step quiz — five lifestyle questions and we return three matched Barbados resorts at
            your tier, with vetted hotel notes, real prices, and the West-vs-South coast split figured out.
            Sixty seconds.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/quiz"
              className="bg-rose-500 hover:bg-rose-600 text-white font-semibold text-sm px-8 py-4 rounded-full transition-colors shadow-xl"
            >
              Take the quiz →
            </Link>
            <Link
              href="/destinations/barbados"
              className="border border-white/30 backdrop-blur-md bg-white/5 hover:bg-white/10 text-white font-semibold text-sm px-8 py-4 rounded-full transition-colors"
            >
              See every Barbados resort
            </Link>
          </div>
        </div>
      </section>
    </article>
  )
}
