import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { buildAlternates } from '@/lib/alternates'

export const metadata: Metadata = {
  title: 'Mexico Honeymoon Cost: 2026 Real Numbers ($4k–$50k+)',
  description:
    'How much a Mexico honeymoon really costs in 2026. Four budget tiers, line-by-line breakdown, three real 7-night sample budgets at named hotels, hidden costs (IVA 16%, resort fees), best months, and 8 ways to spend less.',
  alternates: buildAlternates('/mexico-honeymoon-cost'),
  openGraph: {
    title: 'Mexico Honeymoon Cost — 2026 Real Numbers',
    description:
      'Four budget tiers ($4k–$50k+), real hotel breakdowns from Riviera Maya, Los Cabos, Punta Mita and the Yucatán, hidden costs (IVA 16%, resort fees, gratuity), best months, and 8 ways to spend less.',
    url: 'https://myhoneymoonhotel.com/mexico-honeymoon-cost',
    siteName: 'MyHoneymoonHotel',
    images: [
      {
        url: 'https://myhoneymoonhotel.com/images/hotels/belmond-maroma-resort-mexico/hero.webp',
        width: 1600,
        height: 900,
        alt: 'Belmond Maroma on the Riviera Maya — the canonical luxury Mexico honeymoon image',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mexico Honeymoon Cost — 2026 Real Numbers',
    description: 'Four budget tiers, real hotel breakdowns, hidden costs (IVA 16%), best months, and 8 ways to spend less.',
    images: ['https://myhoneymoonhotel.com/images/hotels/belmond-maroma-resort-mexico/hero.webp'],
  },
}

const FAQS: { q: string; a: string }[] = [
  {
    q: 'How much does a Mexico honeymoon cost on average?',
    a: 'For 7 nights all-in (flights, resort, transfers, food, the 16% IVA tax, tips), the typical 2026 US couple spends $8,000 to $14,000 on a comfortable mid-luxury Mexico honeymoon at an adults-only 5★ on the Riviera Maya or in Los Cabos — properties like Banyan Tree Mayakoba, Viceroy Los Cabos, or Belmond Maroma at shoulder rates. Drop to $4,000–$6,000 if you book a quality all-inclusive (Secrets, Excellence, UNICO) at a shoulder week. Push to $20,000–$25,000 for a true luxury suite at Esperanza Auberge, Las Ventanas al Paraíso, One&Only Palmilla, or Chablé Yucatán. Ultra-luxury private-villa stays at Las Ventanas casitas or One&Only villas run $35,000 to $50,000+.',
  },
  {
    q: 'Where is the best place in Mexico for a honeymoon?',
    a: 'Four regions matter for honeymoons. The Riviera Maya (Tulum, Playa del Carmen, Mayakoba, Costa Mujeres) is the easiest first-time pick — short flight from the East Coast, turquoise Caribbean water, cenotes, and the deepest bench of adults-only 5★ properties. Los Cabos at the tip of Baja is the choice for desert-meets-Pacific drama, big-resort polish (Esperanza, Las Ventanas, One&Only Palmilla, Viceroy), and direct flights from the US West Coast. Punta Mita on the Pacific coast pairs jungle with surf and is favored by couples who want a quieter, more design-forward stay. The Yucatán interior (Chablé, Coqui Coqui, Hacienda Xcanatún) is for honeymoons that prioritize cenotes, Mayan archaeology, and the colonial cities of Mérida and Valladolid. For colonial-romance honeymoons inland, Rosewood San Miguel de Allende is unmatched.',
  },
  {
    q: 'Is the Riviera Maya cheaper than Los Cabos for a honeymoon?',
    a: 'Yes, generally 20–35% cheaper for a comparable tier. The Riviera Maya has a much deeper inventory of properties in every price band, more all-inclusive options, and flights from the US East Coast that run $300–$600 cheaper than equivalent Los Cabos fares. A 5★ adults-only week on the Riviera Maya runs $7,000–$12,000 all-in; the equivalent in Los Cabos runs $10,000–$16,000. Los Cabos wins on West Coast flight access (3 hours from LAX vs 5+ to Cancun) and on the pure quality of its very top properties.',
  },
  {
    q: 'When is the cheapest time for a Mexico honeymoon?',
    a: 'September and October are the cheapest weeks of the year — 35–50% off peak — but coincide with Atlantic hurricane season on the Caribbean coast (Riviera Maya). Late August through mid-October is the highest-risk window for storm disruption; book refundable rates and travel insurance with CFAR. The shoulder sweet spot is May to early June: dry, hot, low crowds, rates 25–35% below winter peak, and virtually no storm risk. Avoid Christmas/New Year and US spring break (the last two weeks of March), which can double mid-luxury rates.',
  },
  {
    q: 'Are there hidden costs at Mexico resorts?',
    a: 'Yes. The 16% IVA (Value-Added Tax) is added to nearly every line. Most resorts also charge a 10–18% service charge on top — the combined uplift runs 26–34%. A small "ecology" or environmental tax of roughly $2–$5/pp/night is collected at check-in by Quintana Roo (Riviera Maya) properties. Resort fees ($35–$80/night) are creeping into US-brand resorts. Gratuity expectations are higher than most US destinations — budget $200–$400 per couple across a 7-night stay for butler, housekeeping, waitstaff, and excursion guides. ATM fees and unfavorable currency conversion on USD purchases add another 3–6%.',
  },
  {
    q: 'Is all-inclusive worth it in Mexico?',
    a: 'For many couples, yes — Mexico is the spiritual home of the modern adults-only all-inclusive (Secrets, Excellence, Le Blanc, UNICO, TRS, Hyatt Ziva/Zilara). At a quality property the AI premium runs $80–$160/pp/day and routinely pays back if you drink wine with dinner, take one cocktail by the pool, and order room service. Where AI loses is at the true luxury tier (Belmond Maroma, Esperanza, Las Ventanas) — those properties are à-la-carte by design and the food is genuinely one of the reasons you booked. Run the math by tier before committing.',
  },
  {
    q: 'How long is the flight to Mexico from the US and Europe?',
    a: 'From the US East Coast to Cancun (CUN), 3.5–4.5 hours nonstop on JetBlue, Delta, American, United. From the US West Coast to Los Cabos (SJD) or Puerto Vallarta (PVR), 2.5–3.5 hours nonstop. From the US Midwest to either coast, 4–5 hours. From Europe, expect 11–13 total hours to Cancun with one stop (typically MAD, AMS, FRA, or LHR) and 14–17 hours to Los Cabos. There are nonstop options from Madrid, London, Paris, Frankfurt, and Amsterdam to Cancun in winter.',
  },
  {
    q: 'Do we need a visa for Mexico?',
    a: 'No. US, Canadian, UK, EU, and most Latin American passport holders enter Mexico visa-free for stays up to 180 days. You need a passport valid for the duration of your stay (no 6-month rule unlike most destinations), and you complete a digital Forma Migratoria Múltiple (FMM) via the airline or at arrival kiosks. Keep the paper or digital FMM safe — you surrender it on departure and replacing a lost one costs around $40 at the airport.',
  },
  {
    q: 'Is Mexico safe for a honeymoon?',
    a: 'The destinations couples actually honeymoon in — Riviera Maya, Los Cabos, Punta Mita, Mayakoba, San Miguel de Allende, the Yucatán resort corridor — are statistically safer than most major US cities. Resort security is robust, transfers are pre-booked, and the tourist zones operate with significant police presence. Use vetted ground-transfer companies (your hotel will arrange), avoid driving at night between cities, and use only ATMs inside resort lobbies or major bank branches. The US State Department advisory is granular by state — read the specific page for the state you are visiting (Quintana Roo, Baja California Sur, Yucatán, Nayarit) and not the headline.',
  },
  {
    q: 'Can we use credit-card points for a Mexico honeymoon?',
    a: 'Yes, and Mexico is one of the easier point redemptions in travel. Hyatt Privilege properties (Andaz Mayakoba, Hyatt Ziva Cap Cana, Park Hyatt Los Cabos at Cabo del Sol) book from 25,000–45,000 points/night — a fraction of the $700–$1,400 cash rate. Marriott Bonvoy properties (Ritz-Carlton Dorado, JW Marriott Los Cabos Cabo Real) run 70,000–110,000 points. Flight redemptions are less leveraged because cash fares are already cheap, but a JetBlue or AA economy ticket from JFK to CUN for 15,000–20,000 points is solid value.',
  },
  {
    q: 'Should we tip at Mexico resorts?',
    a: 'Yes. Tipping culture is stronger in Mexico than at most US resorts even though service is often included on the bill. Standard practice: $2–$5 per drink at the bar, $5–$10 per meal for waitstaff (on top of any service charge), $20–$40 per excursion guide, $10–$20/day for housekeeping left on the pillow, and $15–$25/day for a butler at luxury properties. Tip in USD or pesos — both are accepted and equally welcomed. Budget $200–$400 per couple for a 7-night stay.',
  },
  {
    q: 'Is Mexico worth the cost for a honeymoon?',
    a: 'For couples weighing Mexico against the Caribbean, Bali, or the Maldives, the value math is decisively in Mexico\'s favor. You get Caribbean water, world-class food, cenotes, Mayan ruins, mezcal culture, and one of the deepest benches of adults-only luxury properties on earth — all 3.5 hours from New York for half the price of comparable Maldives. The trade is that you will not get the absolute privacy of a Maldives private island; Mexico resorts share beachfront and there are always other couples. For 90% of honeymooners, that is the right trade.',
  },
]

const TIER_TABLE = [
  {
    tier: 'Budget',
    range: '$4,000 – $7,000',
    examples: 'Secrets · Excellence · Hyatt Ziva (all-inclusive)',
    region: 'Riviera Maya, Costa Mujeres',
    room: 'Junior suite, ocean view',
    meal: 'All-inclusive included',
  },
  {
    tier: 'Mid-luxury',
    range: '$8,000 – $15,000',
    examples: 'Banyan Tree Mayakoba · Viceroy Los Cabos · Andaz Mayakoba',
    region: 'Riviera Maya, Los Cabos',
    room: 'Suite with plunge pool',
    meal: 'À-la-carte or premium AI',
  },
  {
    tier: 'Luxury',
    range: '$15,000 – $25,000',
    examples: 'Belmond Maroma · Esperanza Auberge · One&Only Palmilla · Chablé Yucatán',
    region: 'Riviera Maya, Los Cabos, Yucatán',
    room: 'Casita or pool villa',
    meal: 'À-la-carte',
  },
  {
    tier: 'Ultra-luxury',
    range: '$25,000 – $50,000+',
    examples: 'Las Ventanas al Paraíso · One&Only Palmilla villas · Rosewood San Miguel',
    region: 'Los Cabos, Punta Mita, colonial interior',
    room: 'Private 2BR villa with chef',
    meal: 'Bespoke / dine-anywhere',
  },
]

const COST_DRIVERS = [
  {
    title: 'Season — peak, shoulder, hurricane',
    detail:
      'Peak runs mid-December through mid-April, with absolute peaks at Christmas/New Year and the last two weeks of March (US spring break). Shoulder is May to early June and November — dry, hot, 25–35% off peak. Hurricane season (June–November, with September–October the highest-risk weeks on the Caribbean coast) is 35–50% off but carries real disruption risk for Riviera Maya stays. The Pacific coast (Los Cabos, Punta Mita) is far less hurricane-exposed.',
  },
  {
    title: 'Region — Riviera Maya vs Los Cabos vs Punta Mita vs Costa Mujeres',
    detail:
      'The Riviera Maya is the cheapest premium region by 20–35% — deeper inventory, more competition, lower flight costs from the US East Coast. Los Cabos costs more but delivers the highest quality at the top end (Esperanza, Las Ventanas, One&Only Palmilla) and 3-hour West Coast flights. Punta Mita on the Pacific is the design-forward, quieter choice (Four Seasons, St. Regis Punta Mita) and sits in between on price. Costa Mujeres north of Cancun is the newest cluster, dominated by ultra-modern all-inclusives (UNICO, TRS, Atelier) — strong value at the $5k–$9k tier. The Yucatán interior (Chablé, hacienda hotels) trades beach for cenotes and quiet — comparable to Los Cabos pricing.',
  },
  {
    title: 'Resort model — adults-only all-inclusive vs à-la-carte luxury',
    detail:
      'Adults-only all-inclusive (Secrets, Excellence, Le Blanc, UNICO, TRS) bundles room, food, premium drinks, taxes, and tips into a single nightly rate of $400–$900/couple. Mid-luxury à-la-carte (Banyan Tree Mayakoba, Viceroy Los Cabos, Andaz Mayakoba) is $600–$1,200/night for the room, with another $250–$450/couple/day in food and drinks. True luxury à-la-carte (Belmond Maroma, Esperanza, Las Ventanas, One&Only) runs $1,200–$3,500/night room-only, with food/drink another $400–$700/couple/day. Both models can be the right answer — it depends on whether the food is part of why you booked.',
  },
  {
    title: 'Flight origin — US East vs US West vs Europe',
    detail:
      'From US East Coast hubs (JFK, EWR, BOS, MIA, ATL, DCA), nonstop Cancun fares run $300–$650/pp economy in shoulder season, $500–$1,000 at peak. From US West Coast (LAX, SFO, SEA), Los Cabos and Puerto Vallarta are 2.5–3.5 hours nonstop at $250–$550/pp. From Europe, Cancun runs €600–€1,200/pp economy with one stop, occasionally direct from Madrid, London, Paris, or Frankfurt in winter; allow €1,800–€3,000/pp for premium economy. Los Cabos from Europe is a longer journey and 25% more expensive than equivalent Cancun fares.',
  },
  {
    title: 'Length of stay and room category',
    detail:
      'The standard honeymoon is 7 nights, but Mexico genuinely rewards 9–10 nights — flights are cheap enough that the marginal cost is small, and you can pair a 4-night resort stay with a 3-night Mérida-and-cenotes excursion or a Tulum-then-Mayakoba split. Within a property, the entry-level room is rarely worth optimizing for: jumping one tier (junior suite to swim-out suite) typically adds 15–25% to the nightly rate and is the single highest-leverage upgrade for a honeymoon.',
  },
]

const LINE_ITEMS: [string, string][] = [
  ['Flights US East Coast → Cancun (economy, 2pax)', '$600 – $1,300'],
  ['Flights US West Coast → Los Cabos or PVR (economy, 2pax)', '$500 – $1,100'],
  ['Flights US Midwest → Mexico (economy, 2pax)', '$700 – $1,400'],
  ['Flights Europe → Cancun (economy, 2pax)', '$1,200 – $2,400'],
  ['Flights Europe → Cancun (premium economy, 2pax)', '$2,800 – $4,800'],
  ['Resort, 7 nights, 4★ adults-only all-inclusive', '$2,500 – $4,500'],
  ['Resort, 7 nights, 5★ mid-luxury (Banyan Tree, Viceroy)', '$5,500 – $9,500'],
  ['Resort, 7 nights, 5★ luxury (Belmond Maroma, Esperanza)', '$10,000 – $18,000'],
  ['Resort, 7 nights, ultra-luxury villa (Las Ventanas, One&Only)', '$22,000 – $50,000'],
  ['Ground transfer airport ↔ resort RT (private SUV, 2pax)', '$120 – $280'],
  ['Helicopter transfer Cancun → Tulum / Mayakoba (RT, 2pax)', '$1,400 – $2,200'],
  ['F&B at à-la-carte luxury resort (2pax × 7 days)', '$1,800 – $3,500'],
  ['F&B premium add-ons at all-inclusive (top-shelf wine, etc.)', '$300 – $700'],
  ['Excursions — cenote tour, Chichén Itzá, snorkel (2pax)', '$300 – $700'],
  ['Excursions — Whale shark, Isla Mujeres day, Cabo arch cruise', '$400 – $900'],
  ['Spa — 1 couples 80-min massage', '$320 – $620'],
  ['Honeymoon photoshoot (1 hour, beach)', '$500 – $1,400'],
  ['Quintana Roo environmental tax ($3/pp/night × 7)', '$42'],
  ['IVA (16%) + service charge (10–18%) on à-la-carte bills', '+26–34% uplift'],
  ['Tips — butler, housekeeping, waitstaff, guides (7 nights)', '$200 – $400'],
  ['Travel insurance with CFAR ($12k trip value)', '$220 – $480'],
]

const SAMPLE_BUDGETS = [
  {
    name: 'Mid-luxury — Banyan Tree Mayakoba',
    total: '$11,400',
    season: 'Mid-May, 7 nights',
    bullets: [
      ['Flights (economy, BOS → CUN nonstop)', '$780'],
      ['Resort, 7 nights, Serenity Pool Villa', '$5,950'],
      ['Private SUV transfer CUN → Mayakoba RT', '$210'],
      ['F&B à-la-carte across 4 on-site restaurants', '$2,100'],
      ['Excursions (Cenote Dos Ojos + Tulum ruins day)', '$420'],
      ['Spa (couples 80-min Rainforest ritual)', '$540'],
      ['IVA + service uplift on extras', '$680'],
      ['Tips + buffer', '$720'],
    ],
    note:
      'Banyan Tree Mayakoba sits inside the protected Mayakoba lagoon community, which means cenotes-style canals, no road noise, and the option to bike between the resort and the El Camaleón golf course. Each villa has its own pool. Mid-May hits the sweet spot before the European summer push and well clear of hurricane risk.',
  },
  {
    name: 'Luxury — Belmond Maroma (Riviera Maya)',
    total: '$17,800',
    season: 'Early November, 7 nights',
    bullets: [
      ['Flights (premium economy, JFK → CUN)', '$1,400'],
      ['Resort, 7 nights, Garden Pool Suite', '$11,200'],
      ['Belmond private SUV transfer CUN ↔ Maroma RT', '$320'],
      ['F&B at Casa Maroma + Woodend by Curtis Stone', '$2,400'],
      ['Excursions (snorkel Akumal turtles + Sian Ka\'an boat day)', '$580'],
      ['Spa (couples 90-min Maroma ritual)', '$720'],
      ['Honeymoon beach photoshoot (1 hour)', '$680'],
      ['IVA + service uplift + tips', '$500'],
    ],
    note:
      'Belmond Maroma reopened in 2023 after a Tara Bernerd renovation and is the single most-requested luxury property in our Riviera Maya quiz funnel. The beach is the longest stretch of unbroken white sand on the entire Riviera Maya. Early November lands just after hurricane season closes and before US Thanksgiving traffic.',
  },
  {
    name: 'Ultra-luxury — Las Ventanas al Paraíso (Los Cabos)',
    total: '$34,500',
    season: 'February, 7 nights',
    bullets: [
      ['Flights (business class, LAX → SJD)', '$3,200'],
      ['Resort, 7 nights, Honeymoon Suite with infinity pool', '$23,800'],
      ['Private SUV transfer SJD ↔ Las Ventanas RT', '$280'],
      ['F&B at Arbol, Bistro Cibo, beachside dinner setup', '$3,200'],
      ['Excursions (private yacht to Cabo arch + whale watching)', '$1,800'],
      ['Spa (couples 120-min Las Ventanas signature)', '$880'],
      ['In-suite Mariachi serenade + honeymoon photoshoot', '$520'],
      ['IVA + service + tips + insurance', '$820'],
    ],
    note:
      'Las Ventanas al Paraíso is the original Cabo legend — sea of cortez side, low-rise white casitas, a butler service so calibrated it borders on telepathic. February is gray whale season in the Sea of Cortez; the resort runs private whale-watching skiffs from its own beach. Book 6–9 months ahead for honeymoon suite availability.',
  },
]

const SEASONS = [
  { months: 'November', verdict: 'Best', detail: 'Dry season has begun, hurricane risk has effectively closed, US Thanksgiving traffic only spikes the last week. The single best month to honeymoon in Mexico if you can swing it.' },
  { months: 'December – early January', verdict: 'Peak (avoid Dec 20–Jan 5)', detail: 'Perfect weather and the highest prices of the year. Christmas/New Year fortnight commands 2× shoulder rates and mandatory gala dinners at most luxury properties.' },
  { months: 'Mid-January – February', verdict: 'High season', detail: 'Beautiful weather, big crowds, peak prices. February adds Sea of Cortez whale watching to the Los Cabos offering. Book 6–9 months ahead.' },
  { months: 'March – mid-April', verdict: 'Avoid spring break weeks', detail: 'The last two weeks of March and the first week of April are US college spring break — many properties impose 21+ rules or feel overrun. Sandwich weeks (early March, late April) are excellent.' },
  { months: 'May – early June', verdict: 'Best value (shoulder)', detail: 'Dry, hot, low crowds, rates 25–35% below winter peak, no hurricane risk yet. Our highest-conviction value window for a Mexico honeymoon.' },
  { months: 'July – August', verdict: 'Mixed', detail: 'Hot and humid, European school holidays push prices on the Riviera Maya, sargassum seaweed can hit Caribbean beaches. Los Cabos and Punta Mita on the Pacific are cooler and unaffected by sargassum.' },
  { months: 'September – October', verdict: 'Cheapest (hurricane risk)', detail: 'Cheapest weeks of the year, 35–50% off peak — and the highest hurricane risk on the Caribbean coast. Book refundable rates and CFAR insurance. The Pacific side is much safer this window.' },
]

const TIPS = [
  {
    title: 'Travel May or early June for the best shoulder math',
    detail:
      'The May/early-June window is the rare overlap of low crowds, low prices (25–35% off peak), dry weather, and zero hurricane risk. Many properties offer "stay 7 pay 5" or honeymoon credit packages worth $400–$1,200. Book 4–6 months ahead to secure the best room categories.',
  },
  {
    title: 'Choose the Pacific coast in hurricane season',
    detail:
      'If your only option is September–November, book Los Cabos, Punta Mita, or the Yucatán interior instead of the Riviera Maya. The Pacific coast and inland Yucatán face dramatically lower storm-disruption risk while still capturing the shoulder-season discount. Las Ventanas, Esperanza, One&Only Palmilla all run their best rates in this window.',
  },
  {
    title: 'Run the all-inclusive vs à-la-carte math, by property tier',
    detail:
      'At a 4–5★ all-inclusive (Secrets, Excellence, UNICO, TRS, Le Blanc) the AI premium is $80–$160/pp/day and almost always pays back if you drink wine with dinner. At a true luxury property (Belmond Maroma, Esperanza, Las Ventanas) the food is à-la-carte by design and is one of the reasons you booked — paying for the AI plan is the wrong call. Tier-match the model.',
  },
  {
    title: 'Use Hyatt and Marriott points aggressively',
    detail:
      'Andaz Mayakoba and Park Hyatt at Cabo del Sol book from 30,000–45,000 Hyatt points/night against $750–$1,200 cash. Ritz-Carlton Dorado and JW Marriott Los Cabos run 70,000–110,000 Bonvoy/night. A single Chase Sapphire Reserve sign-up bonus + a transfer to Hyatt can cover 3–4 nights of a 7-night honeymoon. Start accumulating 12 months ahead.',
  },
  {
    title: 'Pre-book ground transfers — never use airport taxi counters',
    detail:
      'Pre-booked private SUV transfers cost $60–$140 each way for two people; airport taxi counters in Cancun and Los Cabos can run $180–$300 for the same ride. Most luxury resorts include or heavily discount transfers as part of the honeymoon package — ask before booking the room.',
  },
  {
    title: 'Skip the Cancun helicopter, take the SUV',
    detail:
      'Helicopter transfers from Cancun to Tulum or Mayakoba run $1,400–$2,200 round-trip for two and save 45 minutes. A private SUV runs $210–$320 round-trip and the drive itself is part of the trip — you pass through the Riviera Maya jungle and can stop for cenote swims. Save the $1,800 for the spa.',
  },
  {
    title: 'Use a Honeyfund or Zola registry for excursions and dinners',
    detail:
      'Frame each gift as an experience: "Chichén Itzá day with private guide", "Sea of Cortez whale-watching skiff", "Belmond Maroma beachside dinner". US couples now use a honeymoon registry 60% of the time — guests prefer experience-gifting to china. See our deep dive at /how-to-plan-a-honeymoon.',
  },
  {
    title: 'Tip in pesos at small venues, USD inside resorts',
    detail:
      'At resorts, tipping in USD is universal and welcomed. Off-property — taxis, beach vendors, market stalls, off-site restaurants — paying and tipping in pesos avoids the 4–7% unfavorable conversion hidden in USD transactions. Pull pesos from an ATM inside a resort or bank lobby; never use street-side ATMs.',
  },
]

const HIDDEN_COSTS: [string, string][] = [
  ['IVA tax (16%)', 'Mexico\'s national VAT, applied to nearly every line on a non-AI resort bill. Some properties quote rates "net" (IVA included) and some "net of taxes" — always confirm at booking.'],
  ['Service charge (10–18%)', 'Layered on top of IVA at most à-la-carte luxury properties. Combined uplift runs 26–34% on every drink, every dinner, every spa treatment. All-inclusive bundles all of it into the headline rate, which is part of its appeal.'],
  ['Resort fees', '$35–$80/night at some US-brand properties (especially in Los Cabos). Hyatt and Marriott have rolled these out aggressively in 2025–26. Independent and European-brand resorts (Belmond, Rosewood, Banyan Tree) generally do not charge them.'],
  ['Quintana Roo environmental tax', '$3–$5 per person per night, applied to every guest at Riviera Maya properties. Collected at check-in, not bundled into the room rate. About $42 per couple over 7 nights.'],
  ['Gratuity culture', 'Higher than at US resorts even when service is included. Budget $200–$400 per couple over a 7-night stay: butler ($15–$25/day), housekeeping ($10–$20/day on pillow), waitstaff ($5–$10/meal), excursion guides ($20–$40/day).'],
  ['Currency conversion on USD purchases', 'Restaurants and shops accepting USD often use exchange rates 4–7% worse than the interbank rate, plus 16% IVA on the converted amount. Pay in pesos at off-resort venues; pay with no-FX-fee credit card on-property.'],
  ['ATM fees', 'Non-bank ATMs (the freestanding ones in convenience stores) charge $5–$10 per withdrawal plus unfavorable rates. Use bank-branch ATMs (BBVA, Santander, Banamex) or in-resort ATMs only.'],
  ['Excursions and tours', '$300–$900 per couple for the headline experiences: Chichén Itzá, cenote tour, Tulum ruins, Isla Mujeres day, Sian Ka\'an boat day, Cabo arch cruise, whale watching, Marietas Islands. Plan and pre-book 2–3 across a 7-night stay.'],
  ['Spa upcharges', '$320–$620 for a couples 80-minute massage at a 5★. Signature treatments at Las Ventanas, Esperanza, Belmond Maroma, and Chablé hit $700–$1,100. Spa is rarely included in any AI plan above the basic tier.'],
]

const COMPARISON = [
  { dest: 'Mexico (Riviera Maya / Cabos)', total: '$8k – $17k', flight: '3.5h from US East / 11–13h from EU', signature: 'Caribbean water + cenotes + adults-only luxury, half the price of Maldives' },
  { dest: 'Caribbean (St. Lucia, Anguilla)', total: '$11k – $22k', flight: '4–5h from US East / 9–11h from EU', signature: 'Drama (Pitons), British/French culture, smaller-island feel' },
  { dest: 'Bali', total: '$8k – $14k', flight: '22h from US East / 16h from EU', signature: 'Jungle + beach combo, similar pricing to Mexico but 4× the flight time' },
  { dest: 'Maldives', total: '$14k – $24k', flight: '18–22h from US East / 10h from EU', signature: 'Overwater villa, total privacy, roughly 2× Mexico\'s premium tier price' },
]

export default function MexicoHoneymoonCostPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Mexico Honeymoon Cost: 2026 Real Numbers',
    description:
      'How much a Mexico honeymoon really costs in 2026 — four budget tiers, line-by-line breakdown, three real 7-night sample budgets at named hotels, hidden costs, and 8 ways to spend less.',
    image: 'https://myhoneymoonhotel.com/images/hotels/belmond-maroma-resort-mexico/hero.webp',
    author: { '@type': 'Organization', name: 'MyHoneymoonHotel', url: 'https://myhoneymoonhotel.com' },
    publisher: {
      '@type': 'Organization',
      name: 'MyHoneymoonHotel',
      logo: { '@type': 'ImageObject', url: 'https://myhoneymoonhotel.com/logo.png' },
    },
    datePublished: '2026-05-11',
    dateModified: '2026-05-11',
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://myhoneymoonhotel.com/mexico-honeymoon-cost' },
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
        name: 'Mexico Honeymoon Cost',
        item: 'https://myhoneymoonhotel.com/mexico-honeymoon-cost',
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
          src="/images/hotels/belmond-maroma-resort-mexico/hero.webp"
          alt="Belmond Maroma on the Riviera Maya — Mexico luxury honeymoon"
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
            Mexico honeymoon<br />cost — 2026.
          </h1>
          <p className="text-white/75 text-base sm:text-lg max-w-2xl leading-relaxed">
            How much a Mexico honeymoon really costs in 2026. Four budget tiers from $4k to $50k+, the five
            cost drivers across the Riviera Maya, Los Cabos, Punta Mita and the Yucatán, line-by-line
            breakdowns, three real 7-night sample budgets at named hotels, hidden costs, the cheapest
            months, and the eight ways to spend meaningfully less without losing the magic.
          </p>
        </div>
      </section>

      {/* BREADCRUMB */}
      <nav aria-label="Breadcrumb" className="max-w-4xl mx-auto px-6 pt-8 text-xs text-zinc-500">
        <Link href="/" className="hover:text-zinc-900">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-zinc-900">Mexico Honeymoon Cost</span>
      </nav>

      {/* INTRO + TL;DR */}
      <section className="max-w-3xl mx-auto px-6 py-14 prose prose-zinc bg-gradient-to-b from-rose-50/60 via-white to-white -mt-2">
        <p className="text-lg text-zinc-700 leading-relaxed">
          A Mexico honeymoon in 2026 costs anywhere from <strong>$4,000 to $50,000+</strong> all-in for two
          people, seven nights. That spread is honest, not marketing — and where you land inside it depends
          on five concrete decisions: season, region (Riviera Maya vs Los Cabos vs Punta Mita vs Costa
          Mujeres vs the Yucatán interior), resort model (adults-only all-inclusive vs à-la-carte luxury),
          flight origin, and length of stay. Get those five right and you can have a properly luxurious
          Mexico honeymoon for $10,000. Get them wrong and the same week quietly bills you $18,000.
        </p>
        <p className="text-base text-zinc-700 leading-relaxed mt-5">
          This guide is the cost breakdown we wish someone had handed us. Real 2026 prices, real hotels —
          Belmond Maroma, Banyan Tree Mayakoba, Esperanza Auberge, Las Ventanas al Paraíso, One&amp;Only
          Palmilla, Chablé Yucatán, Viceroy Los Cabos, Rosewood San Miguel de Allende — and real line items
          including the 16% IVA, the 10–18% service charge, the Quintana Roo environmental tax, and the
          resort fees that most US-brand properties now charge. We work bottom-up: four tiers, the five cost
          drivers, a full line-by-line table, three sample 7-night budgets at named hotels, the cheapest
          months, eight ways to spend less, hidden costs, and a head-to-head comparison with the Caribbean,
          Bali, and the Maldives. For the broader pre-trip checklist see our{' '}
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
            <li><a className="hover:text-rose-500" href="#compare">Mexico vs. Caribbean vs. Bali vs. Maldives</a></li>
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
            Seven nights. Two people. All-in — flights from a major US hub, resort, transfers, food, the 16%
            IVA, tips, and modest excursions. The tier is set by which resort you book; everything else
            flows from that decision.
          </p>

          <div className="overflow-x-auto -mx-6 px-6">
            <table className="w-full text-sm bg-white border border-zinc-100 rounded-2xl overflow-hidden">
              <thead className="bg-zinc-100 text-zinc-700">
                <tr>
                  <th className="text-left p-4 font-semibold">Tier</th>
                  <th className="text-left p-4 font-semibold">7-night total</th>
                  <th className="text-left p-4 font-semibold">Sample resorts</th>
                  <th className="text-left p-4 font-semibold">Region</th>
                  <th className="text-left p-4 font-semibold">Room</th>
                  <th className="text-left p-4 font-semibold">Meal model</th>
                </tr>
              </thead>
              <tbody>
                {TIER_TABLE.map((t) => (
                  <tr key={t.tier} className="border-t border-zinc-100 align-top">
                    <td className="p-4 font-semibold text-zinc-900">{t.tier}</td>
                    <td className="p-4 text-rose-500 font-semibold tabular-nums">{t.range}</td>
                    <td className="p-4 text-zinc-700">{t.examples}</td>
                    <td className="p-4 text-zinc-700">{t.region}</td>
                    <td className="p-4 text-zinc-700">{t.room}</td>
                    <td className="p-4 text-zinc-700">{t.meal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-zinc-600 text-sm leading-relaxed mt-6 italic">
            All numbers in 2026 USD, for two people, including 16% IVA, service charges, and the Quintana
            Roo environmental tax where applicable. Excludes premium-cabin flight upgrades and credit-card-point
            redemptions, which can shift the top-line by $2k–$6k in either direction.
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
          Almost every dollar of variance between a $6k and a $20k Mexico honeymoon is explained by these
          five decisions. Understand them before you start price-shopping rooms — most couples overspend
          because they optimize the nightly rate while ignoring the four bigger levers.
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
      </section>

      {/* 3. LINE ITEMS */}
      <section id="line-items" className="bg-zinc-50 py-20">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-3">Section 03</p>
          <h2 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-6 leading-tight">
            Line-by-line cost breakdown
          </h2>
          <p className="text-zinc-700 text-base leading-relaxed mb-10">
            Every line item that hits a typical 7-night Mexico honeymoon, with 2026 ranges. Build your own
            number by selecting one row from each category — flights, resort, transfer, F&amp;B — then
            adding the fixed lines (Quintana Roo tax, IVA uplift, tips, insurance).
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
            The "+26–34% uplift" line on IVA + service charge is the single most overlooked figure in Mexico
            honeymoon budgeting. À-la-carte resorts quote rates "++" — meaning the printed price plus 16%
            IVA plus 10–18% service. A $1,000/night villa is, in practice, a $1,260–$1,340 villa.
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
          Three named-hotel honeymoons we have priced in 2026, top to bottom, with line items and the
          season we recommend for each tier. Use them as a calibration: find the one closest to your dream
          and adjust line by line.
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
          <Link href="/destinations/mexico" className="text-rose-500 hover:text-rose-600 underline underline-offset-2">
            Mexico destination guide
          </Link>{' '}
          and our{' '}
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
            Best value months for a Mexico honeymoon
          </h2>
          <p className="text-zinc-700 text-base leading-relaxed mb-10">
            Mexico has two clear seasons — dry (November to April) and wet/hurricane (May to October) — but
            the practical picture for a honeymoon is more nuanced. The Pacific coast (Los Cabos, Punta Mita)
            and the Yucatán interior face dramatically lower hurricane risk than the Riviera Maya, which
            means September–October can be a brilliant value play if you pick the right region.
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
              <strong>The single rule:</strong> if you must travel in September or October, go Pacific —
              Los Cabos, Punta Mita, or the Yucatán interior. The Caribbean coast in those weeks is the only
              part of Mexico where the savings genuinely come with disruption risk; the rest of the country
              quietly hands you 35–50% off with no real downside.
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
          Each of these saves at least $300 per couple. Stack four or five and the same Mexico experience
          drops $2,000–$4,000 without losing anything that matters.
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
          The all-inclusive math at the right tier is the highest-leverage tip on this list. See our deep-dive
          on the{' '}
          <Link href="/experiences/all-inclusive" className="text-rose-500 hover:text-rose-600 underline underline-offset-2">
            all-inclusive resort experience
          </Link>{' '}
          for the full breakdown.
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
            Nine line items that quietly add 15–30% to the headline number. Read this before you book —
            most are avoidable or budgetable, none are deal-breakers if you see them coming.
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
          Mexico vs. the Caribbean vs. Bali vs. the Maldives
        </h2>
        <p className="text-zinc-700 text-base leading-relaxed mb-10">
          Four tropical honeymoon destinations at very different spend bands. Mexico wins on value, food,
          flight time from the US, and depth of luxury inventory; the smaller Caribbean islands win on
          drama and seclusion; Bali wins on jungle-meets-beach variety; the Maldives wins on the iconic
          overwater photo and total privacy.
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
          Run a head-to-head on the head matchups for Mexico:{' '}
          <Link href="/compare/mexico-vs-bali" className="text-rose-500 hover:text-rose-600 underline underline-offset-2">
            Mexico vs. Bali
          </Link>
          ,{' '}
          <Link href="/compare/mexico-vs-maldives" className="text-rose-500 hover:text-rose-600 underline underline-offset-2">
            Mexico vs. Maldives
          </Link>
          , and{' '}
          <Link href="/compare/mexico-vs-st-lucia" className="text-rose-500 hover:text-rose-600 underline underline-offset-2">
            Mexico vs. St. Lucia
          </Link>
          . Or browse every Mexico property in our{' '}
          <Link href="/destinations/mexico" className="text-rose-500 hover:text-rose-600 underline underline-offset-2">
            Mexico destination guide
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
          src="/images/hotels/belmond-maroma-resort-mexico/hero.webp"
          alt="Find your Mexico honeymoon hotel"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
        <div className="relative max-w-4xl mx-auto px-6 text-white">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-300 mb-4">Now, the resort</p>
          <h2 className="font-display text-4xl sm:text-5xl leading-tight mb-5">
            Find the Mexico resort <br className="hidden sm:block" />that fits your budget.
          </h2>
          <p className="text-white/70 text-base leading-relaxed mb-8 max-w-xl">
            Take the 6-step quiz — five lifestyle questions and we return three matched Mexico resorts at
            your tier, with vetted hotel notes, real prices, and the region and transfer logistics figured
            out. Sixty seconds.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/quiz"
              className="bg-rose-500 hover:bg-rose-600 text-white font-semibold text-sm px-8 py-4 rounded-full transition-colors shadow-xl"
            >
              Take the quiz →
            </Link>
            <Link
              href="/destinations/mexico"
              className="border border-white/30 backdrop-blur-md bg-white/5 hover:bg-white/10 text-white font-semibold text-sm px-8 py-4 rounded-full transition-colors"
            >
              See every Mexico resort
            </Link>
          </div>
        </div>
      </section>
    </article>
  )
}
