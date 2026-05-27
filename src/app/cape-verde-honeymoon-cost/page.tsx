import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { buildAlternates } from '@/lib/alternates'
import AuthorByline from '@/components/AuthorByline'
import FlightSearchWidget from '@/components/FlightSearchWidget'

export const metadata: Metadata = {
  title: 'Cape Verde Honeymoon Cost: 2026 Real Numbers (€3.5k–€18k+)',
  description:
    'How much a Cape Verde honeymoon really costs in 2026. Four budget tiers, line-by-line breakdown, three real 7-night sample budgets at named hotels on Sal and Boa Vista, hidden costs (€2/night tourist tax, IVA), best months, and 8 ways to spend less.',
  alternates: buildAlternates('/cape-verde-honeymoon-cost'),
  openGraph: {
    title: 'Cape Verde Honeymoon Cost — 2026 Real Numbers',
    description:
      'Four budget tiers (€3.5k–€18k+), real hotel breakdowns at Hyatt Cabo Verde, Hilton Sal and Meliá Llana, hidden costs (€2/night tax), best months, and 8 ways to spend less.',
    url: 'https://myhoneymoonhotel.com/cape-verde-honeymoon-cost',
    siteName: 'MyHoneymoonHotel',
    images: [
      {
        url: 'https://myhoneymoonhotel.com/images/hotels/hyatt-regency-cabo-verde-cape-verde/hero.webp',
        width: 1600,
        height: 900,
        alt: 'Hyatt Regency Cabo Verde beachfront on Sal — the canonical Cape Verde luxury honeymoon image',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cape Verde Honeymoon Cost — 2026 Real Numbers',
    description: 'Four budget tiers, real hotel breakdowns, hidden costs, best months, and 8 ways to spend less.',
    images: ['https://myhoneymoonhotel.com/images/hotels/hyatt-regency-cabo-verde-cape-verde/hero.webp'],
  },
}

const FAQS: { q: string; a: string }[] = [
  {
    q: 'How much does a Cape Verde honeymoon cost on average?',
    a: 'For 7 nights all-in (flights, hotel, transfers, food, drinks, taxes, tips), the typical 2026 European couple spends €4,500 to €6,500 on a comfortable mid-range Cape Verde honeymoon — a 4★ all-inclusive on Sal or Boa Vista with direct flights from London, Lisbon, Paris or Frankfurt. Drop to €3,500 if you fly economy from Lisbon and book a 3★ boutique like Hotel Morabeza in Santa Maria. Push to €9,000 for the 5★ all-inclusive tier at Hilton Cabo Verde or Hyatt Regency. Ultra-luxury (Hyatt Regency presidential suite, Meliá Llana adults-only top categories) starts at €12,000 and runs past €18,000. From the US East Coast, add roughly $1,400–$2,400 per couple in flights versus the European baseline.',
  },
  {
    q: 'Are Cape Verde honeymoon resorts cheaper than the Caribbean?',
    a: 'Yes, meaningfully — at every tier. A 7-night Cape Verde all-inclusive honeymoon on Sal runs roughly 60–70% of the Caribbean equivalent for like-for-like quality. Flights from Europe are 6 hours direct versus 9+ to Barbados or 11+ to the Maldives. The country uses the Cape Verdean escudo pegged to the euro (1 EUR = 110.265 CVE) so European couples pay no FX spread. The trade-off is fewer 5★ marquee names and no overwater villas — Cape Verde is a value-and-climate honeymoon, not a brand-trophy honeymoon. See our /barbados-honeymoon-cost guide for the side-by-side.',
  },
  {
    q: 'Which island should we honeymoon on — Sal, Boa Vista or Santiago?',
    a: 'For a first Cape Verde honeymoon, Sal. Sal hosts the densest cluster of 4★ and 5★ all-inclusives (Hyatt Regency, Hilton, Meliá Llana, RIU Palace Santa Maria, Hotel Morabeza, Tortuga Beach Resort), the most direct flights from Europe, and the most photogenic white-sand stretch at Santa Maria Beach. Boa Vista is the slightly quieter alternative — wilder, lower-density, with the RIU Palace Boavista as the anchor. Santiago is the cultural island (Praia is the capital, food and music scenes deeper) but has very few honeymoon-grade hotels — better suited to a 2-night add-on with the Spinguera Ecolodge or similar. Santo Antão (via Spinguera-style ecolodge in São Vicente or Sodade Resort) is for couples who want mountain hiking instead of beach.',
  },
  {
    q: 'When is the cheapest time for a Cape Verde honeymoon?',
    a: 'May, June, and mid-September through mid-November are the cheapest weeks. Cape Verde has an unusually dry climate (200–300mm of rain annually, almost all of it in August–September) so the cost-versus-weather trade is gentler than the Caribbean. Rates drop 25–35% versus the December-to-April peak. The window to avoid for cost is Christmas/New Year fortnight (1.8–2.2× shoulder), Easter week, and February half-term in the UK (a 15% mini-spike). Trade winds are strongest December to March — excellent for kitesurfing, breezy for beach lounging. June through October is hotter (28–30°C) and calmer.',
  },
  {
    q: 'Are there hidden costs in Cape Verde we should plan for?',
    a: 'A few small ones. The Cape Verde tourist tax (TUR) is €2 per person per night, capped at 10 nights per stay, payable in cash at check-in. Visa-on-Arrival was abolished in 2019 for EU, UK, US and most major-passport holders — instead, a pre-travel EASE registration costs €31 per person (online, 5 minutes, 30-day validity). IVA (VAT) of 15% is included in published hotel rates but added to most off-resort restaurant bills. All-inclusive packages cover almost everything but typically exclude premium spirits, the SPA, off-property excursions, and some à la carte specialty restaurants (you get 1–3 included per stay). Budget another 8–12% on top of the headline package rate.',
  },
  {
    q: 'How long is the flight to Cape Verde from Europe and the US?',
    a: 'From London (LGW or STN), 6 hours direct on TUI or Jet2 to Sal (SID) or Boa Vista (BVC). From Lisbon, 3h 30m direct on TAP Air Portugal (the cheapest and most flexible European routing). From Paris, Frankfurt, Amsterdam or Brussels, 6 hours direct on TUI or seasonal Neos charter. From the US East Coast, no direct flights — typically one-stop via Lisbon (TAP) or one-stop via Boston (TAP code-share). From the US West Coast, two stops via Boston or Lisbon, total 14–16 hours. Direct flights from Europe make Cape Verde one of the highest sun-per-flight-hour ratios on the continent.',
  },
  {
    q: 'Do we need a visa for Cape Verde?',
    a: 'No traditional visa is required for EU, UK, US, Canadian and most major-passport holders since 2019. Instead, you must complete the EASE (Entry Airport Security Fee) pre-registration online at ease.gov.cv before travel — €31 per person, valid for 30 days, takes 5 minutes. Print or screenshot the QR code; it is checked at immigration. Passport validity required is 6 months past your return date. There is no separate tourist card or paper landing form — EASE replaces both.',
  },
  {
    q: 'Is all-inclusive worth it in Cape Verde?',
    a: 'Yes — more so than in almost any other honeymoon destination. Cape Verde\'s all-inclusive market is mature and competitive (RIU, Meliá, Hilton, Hyatt, TUI Sensimar all operate AI properties), and the off-resort restaurant scene at Santa Maria and Sal Rei is limited to a handful of beachfront grills and Italian-Portuguese taverns. The Hyatt and Hilton all-inclusive packages include premium spirits, three to four à la carte restaurants, room service, and minibar — at €350–€550 per couple per night, the math beats half-board plus restaurants by €30–€60 per night. Boutique exceptions: Hotel Morabeza in Santa Maria and Spinguera Ecolodge on Santo Antão are better booked BB or HB, because both sit in walkable villages with real local restaurants.',
  },
  {
    q: 'Can we use credit-card points for a Cape Verde honeymoon?',
    a: 'Yes, especially for the chain hotels. Hyatt Regency Cabo Verde is bookable with World of Hyatt points (Category 5, roughly 20,000–25,000 points/night) — one of the better Hyatt points-per-night plays in the entire Atlantic. Hilton Cabo Verde Sal Resort is a Hilton Honors property at 60,000–80,000 points/night. Meliá Llana is part of Meliá Rewards but pricing in points is opaque — better booked on cash. For flights, TAP Air Portugal is a Star Alliance member: transfer Amex MR or Capital One miles to TAP Miles&Go for LIS–SID/BVC redemptions from 22,000 points one-way in economy. The RIU and TUI Sensimar properties are not on any global program.',
  },
  {
    q: 'Should we worry about safety on a Cape Verde honeymoon?',
    a: 'Cape Verde is one of the safer African destinations. The Foreign Office and US State Department rate it Level 1 (exercise normal precautions). The resort zones on Sal (Santa Maria) and Boa Vista are essentially gated tourist enclaves with very low crime. Petty theft on beaches (leaving phones unattended) is the main risk; violent crime against tourists is rare. Tap water on the islands is technically potable but salty and mineral-heavy — bottled is standard. Mosquito-borne illness risk is low (no malaria); standard repellent is enough. No mandatory vaccinations.',
  },
]

const TIER_TABLE = [
  {
    tier: 'Budget',
    range: '€3,500 – €4,800',
    tag: 'Boutique 3★ or shoulder-season 4★ AI',
    examples: 'Hotel Morabeza · Sodade Resort · Spinguera Ecolodge',
    transfer: 'Shared shuttle or 10€ taxi',
    villa: 'Garden or pool-view room',
    meal: 'BB or HB',
  },
  {
    tier: 'Mid-range',
    range: '€4,800 – €6,500',
    tag: 'Solid 4★ all-inclusive, peak-shoulder',
    examples: 'Tortuga Beach Resort · RIU Palace Santa Maria · Meliá Llana',
    transfer: 'Hotel shuttle or private taxi',
    villa: 'Ocean-view room, swim-out optional',
    meal: 'All-inclusive',
  },
  {
    tier: 'Luxury',
    range: '€7,000 – €9,500',
    tag: 'Top 5★ AI on Sal or Boa Vista',
    examples: 'Hyatt Regency · Hilton Cabo Verde · RIU Palace Boavista',
    transfer: 'Private car transfer',
    villa: 'Suite or club-level room, 45m²+',
    meal: 'Premium all-inclusive',
  },
  {
    tier: 'Ultra-luxury',
    range: '€12,000 – €18,000+',
    tag: 'Marquee suite or two-island split',
    examples: 'Hyatt Regency Presidential · Meliá Llana adults-only · Hilton Cabo Verde top suites',
    transfer: 'Private SUV + inter-island flight',
    villa: 'Two-bedroom oceanfront or top-floor suite',
    meal: 'Premium AI + dine-around add-on',
  },
]

const COST_DRIVERS = [
  {
    title: 'Island choice — Sal vs. Boa Vista vs. Santiago vs. Santo Antão',
    detail:
      'Sal is the densest concentration of honeymoon-grade hotels and the cheapest in absolute euro terms because competition between the eight major AI resorts is fierce. Boa Vista is 10–20% pricier on a like-for-like room because supply is tighter — RIU Palace Boavista is the headliner, with a few smaller properties around Sal Rei. Santiago is the cultural island and has almost no honeymoon hotels — useful only as a 2-night add-on. Santo Antão is mountain-hiking territory served by the Sodade Resort and Spinguera Ecolodge — completely different honeymoon (cool air, dirt-road trekking, no beach).',
  },
  {
    title: 'All-inclusive tier — basic vs. premium',
    detail:
      'Most Cape Verde 4★ and 5★ hotels operate on AI plans, but the gap between "basic AI" and "premium AI" is wider than the gap between 4★ and 5★. Basic AI (RIU Palace Santa Maria, Meliá Tortuga) covers buffet meals, house wine and local spirits — clean and consistent, no surprises. Premium AI (Hyatt Regency Cabo Verde, Hilton Cabo Verde Sal, Meliá Llana adults-only) adds premium spirits, 3–4 included à la carte restaurants per stay, minibar, and 24h room service. The premium-tier upgrade typically costs €60–€120 per couple per night — almost always worth it for honeymoon couples.',
  },
  {
    title: 'Season — peak Dec 20–Jan 5, Easter, and Feb half-term',
    detail:
      'Peak (December 20 – January 5) costs 1.8–2.2× the May–June low. Christmas and New Year fortnight is hard-locked at maximum rates with mandatory gala dinners. February UK half-term and Easter week are mini-peaks (15–25% over shoulder). May, June and mid-September through mid-November are the genuine value windows — 25–35% off peak, same dry climate, water still 24–26°C. August–September is the only month with meaningful rainfall (still under 100mm) and the hottest at 28–30°C.',
  },
  {
    title: 'Flight origin — Europe direct vs. US one-stop',
    detail:
      'From the UK, Germany, France, Benelux and Portugal, direct flights to Sal or Boa Vista on TUI, Jet2 or TAP cost €280–€650 per person round-trip in economy. Lisbon is the cheapest and most flexible departure (TAP runs daily). From the US East Coast, no direct service — typically one-stop via Lisbon on TAP at $700–$1,300 per person round-trip economy, $2,200–$4,200 in business. From the US West Coast, two stops, 16+ hours, $1,200–$2,000 economy. Cape Verde is dramatically cheaper to reach from Europe than from North America — book Lisbon as a one-night stopover to break the journey and save €200 on the onward fare.',
  },
  {
    title: 'Ground transport — shuttle vs. taxi vs. car rental',
    detail:
      'Airport transfers on Sal (Espargos to Santa Maria, 18 km) cost €15–€25 per couple in a shared shuttle, €25–€35 in a private taxi. Boa Vista (Rabil to Praia de Chaves, 12 km) similar. Most all-inclusive resorts include round-trip airport transfer in the package or upsell it at €20–€40 per couple. Taxis around Santa Maria run €5–€10 per ride. Car rental at €35–€55 per day with full insurance is overkill for Sal (the island is 30 km long, mostly flat, walkable in the resort zone) but valuable on Boa Vista for one or two day-trips to the wild north and the Viana desert.',
  },
]

const LINE_ITEMS = [
  ['Flights from UK direct (economy, 2pax)', '€560 – €1,300'],
  ['Flights from Lisbon direct (economy, 2pax, TAP)', '€360 – €720'],
  ['Flights from Paris/Frankfurt direct (economy, 2pax)', '€620 – €1,400'],
  ['Flights from US East Coast (economy, 2pax, one-stop via Lisbon)', '$1,400 – $2,600'],
  ['Flights from US East Coast (business, 2pax)', '$4,400 – $8,400'],
  ['Hotel, 7 nights, 3★ boutique BB on Sal', '€700 – €1,200'],
  ['Hotel, 7 nights, 4★ AI on Sal or Boa Vista', '€1,900 – €3,200'],
  ['Hotel, 7 nights, 5★ premium AI (Hyatt, Hilton, Meliá Llana)', '€3,200 – €5,800'],
  ['Hotel, 7 nights, marquee suite or two-island ultra split', '€7,000 – €14,000'],
  ['Airport transfer (shared shuttle, both ways, 2pax)', '€25 – €50'],
  ['Airport transfer (private taxi, both ways, 2pax)', '€50 – €80'],
  ['EASE pre-registration (€31/pp × 2)', '€62'],
  ['Tourist tax (TUR) — €2/pp/night × 7 (capped at 10)', '€28'],
  ['Meals off-resort (mix of Italian-Portuguese + local + 2 splurges)', '€220 – €520'],
  ['Catamaran day-trip or sunset cruise (2pax)', '€110 – €180'],
  ['Kitesurf / windsurf lesson at Kite Beach (2pax, 2 sessions)', '€180 – €280'],
  ['Turtle-nesting tour (Boa Vista, June–Oct, 2pax)', '€80 – €130'],
  ['Couples spa (60-min massage, 2pax)', '€140 – €240'],
  ['Tips — housekeeping, bartender, butler at AI', '€80 – €150'],
  ['Travel insurance with CFAR (€5k trip value)', '€110 – €260'],
]

const SAMPLE_BUDGETS = [
  {
    name: 'Mid-range — Meliá Llana Beach Resort (adults-only)',
    total: '€5,200',
    season: 'Mid-October, 7 nights',
    bullets: [
      ['Flights (economy direct, LGW → SID on TUI)', '€720'],
      ['Meliá Llana, 7 nights, junior suite, premium AI', '€3,200'],
      ['All meals, drinks, premium spirits, minibar', 'Included'],
      ['Private taxi transfers (round-trip)', '€55'],
      ['EASE registration (2pax)', '€62'],
      ['Tourist tax (€2/pp/night × 7)', '€28'],
      ['Sunset catamaran cruise from Santa Maria pier', '€140'],
      ['Couples massage at Meliá Llana YHI Spa', '€180'],
      ['Excursion: Pedra de Lume salt crater + shark bay', '€90'],
      ['Tips, evening drinks off-resort, buffer', '€725'],
    ],
    note:
      'The textbook mid-range Cape Verde honeymoon. Meliá Llana is the adults-only Sal property — 154 junior suites, two pools, four restaurants (one à la carte Italian, one steakhouse), genuine premium-AI quality at a price point that should not exist. Mid-October is the shoulder sweet spot — water at 26°C, end of the brief rainy window, school-holiday crowds gone.',
  },
  {
    name: 'Luxury — Hyatt Regency Cabo Verde',
    total: '€8,400',
    season: 'Late November, 7 nights',
    bullets: [
      ['Flights (economy direct, FRA → SID on TUI)', '€980'],
      ['Hyatt Regency Cabo Verde, 7 nights, ocean-view suite, premium AI', '€4,900'],
      ['Premium spirits, four à la carte restaurants, in-suite dining', 'Included'],
      ['Private SUV airport transfers (round-trip)', '€95'],
      ['EASE + tourist tax + tips', '€220'],
      ['Hyatt SPA — couples ritual (90 min)', '€320'],
      ['Kitesurf lesson package at Kite Beach (2pax, 3 sessions)', '€260'],
      ['Private catamaran half-day with crew + snorkel + drinks', '€480'],
      ['Off-resort dinner at Cretcheu and Leonardo, Santa Maria', '€180'],
      ['Buffer + travel insurance with CFAR', '€965'],
    ],
    note:
      'Hyatt Regency Cabo Verde opened December 2023 and is the cleanest contemporary 5★ on Sal — 271 rooms, a 750m beach, four pools, six restaurants. Bookable with 22,000–25,000 World of Hyatt points per night, one of the most-leveraged points redemptions in the Atlantic. Late November is post-hurricane (Cape Verde is south of the Atlantic storm track but August–September catches the tail), pre-Christmas spike, dry and breezy.',
  },
  {
    name: 'Ultra-luxury — Hyatt Regency presidential + Spinguera Ecolodge',
    total: '€14,800',
    season: 'Early February, 7 nights',
    bullets: [
      ['Flights (business round-trip, LHR → SID via LIS)', '€3,400'],
      ['Hyatt Regency, 5 nights, presidential suite, premium AI', '€6,800'],
      ['Inter-island flight Sal → São Vicente (2pax)', '€280'],
      ['Spinguera Ecolodge, 2 nights, full-board, eco suite', '€680'],
      ['Private SUV transfers + Spinguera 4x4 island tour', '€340'],
      ['Hyatt SPA — couples 2-hour signature ritual', '€520'],
      ['Private fishing charter from Palmeira (half-day)', '€620'],
      ['Photoshoot — 90-minute beach + sunset session', '€680'],
      ['Off-resort dinners at Ferraz Gourmet, Santa Maria', '€280'],
      ['EASE, tourist tax, tips, insurance, buffer', '€1,200'],
    ],
    note:
      'A two-island split for couples who want both the Sal beach polish and the Santo Antão / São Vicente cultural depth. Hyatt presidential suite gives the marquee photograph; Spinguera Ecolodge on the Santo Antão coast (eco-cluster, no road for the last kilometre, all rooms face the Atlantic) gives the soul. Early February lands inside the dry trade-wind window — kitesurf-perfect conditions, water at 22°C, peak high-season pricing held in check by the inter-island leg.',
  },
]

const SEASONS = [
  { months: 'May – June', verdict: 'Best value', detail: 'Shoulder pricing 25–35% off peak. Water warms to 24°C. Trade winds soften. Almost zero rainfall. The shoulder sweet spot.' },
  { months: 'July – early August', verdict: 'Good value (heat)', detail: 'Hottest months at 28–30°C. European holiday crowds nudge rates up 10–15% versus May/June but still well below winter peak.' },
  { months: 'Late August – September', verdict: 'Cheapest (slight rain risk)', detail: 'Lowest rates of the year. The only window with meaningful rainfall (50–80mm in September). 1–2 wet afternoons across a 7-night stay typical. Excellent for budget-driven honeymoons.' },
  { months: 'October – mid-November', verdict: 'Excellent value', detail: 'Brief rainy window closes. Dry returns, breezes pick up. Rates still 25–30% off December peak. Turtle nesting tours finish (Boa Vista) in late October.' },
  { months: 'Mid-November – mid-December', verdict: 'Good value', detail: 'Pre-Christmas dry window. Kitesurf season ramps up. Rates 15–25% off the upcoming peak.' },
  { months: 'Dec 20 – Jan 5', verdict: 'Peak (avoid for cost)', detail: 'Christmas and New Year fortnight — 1.8–2.2× shoulder. Mandatory gala dinners. Sold out 4–6 months ahead. Push to mid-January if budget matters.' },
  { months: 'January – mid-February', verdict: 'High season', detail: 'Driest weather, strongest trade winds (perfect for kitesurfing, breezy for beach lounging). Rates 1.5× shoulder. UK half-term in mid-February drives a 15% mini-spike.' },
  { months: 'Late February – April', verdict: 'High season tail', detail: 'Excellent weather continues. Easter week is a hard mini-peak. Outside Easter, rates begin softening through April — a good time to book ahead.' },
]

const TIPS = [
  {
    title: 'Travel May, June, October or November',
    detail:
      'The single highest-leverage decision. Shoulder pricing drops the same hotel 25–35% with weather differences measured in afternoon-shower minutes, not days. May and June are the post-winter reset windows; October and November are the post-rainy windows. All four feel like January-quality holidays at half the price.',
  },
  {
    title: 'Book premium all-inclusive at Hyatt, Hilton or Meliá Llana',
    detail:
      'Cape Verde\'s off-resort restaurant scene is good but limited (a handful of beachfront grills and Italian-Portuguese taverns in Santa Maria and Sal Rei). Premium AI at Hyatt, Hilton or Meliá Llana includes premium spirits, 3–4 à la carte restaurants per stay, room service, and minibar at €60–€120 per couple per night more than basic AI — almost always worth it. The 5★ premium-AI math beats half-board plus paid dinners by €30–€50/night.',
  },
  {
    title: 'Use World of Hyatt points for Hyatt Regency Cabo Verde',
    detail:
      'Hyatt Regency Cabo Verde is a Category 5 property at 20,000–25,000 World of Hyatt points per night — one of the strongest points-per-night plays in the entire Atlantic. A 5-night stay at €700/night cash converts to 100,000–125,000 points (around $2,500 in points value for a €3,500 stay). Stack with a TAP Miles&Go award on LIS–SID for the flights.',
  },
  {
    title: 'Fly via Lisbon for cheaper fares',
    detail:
      'TAP Air Portugal runs daily LIS–SID and LIS–BVC at the cheapest European fares for the route. From elsewhere in Europe, the LIS connection is often €150–€300 cheaper per person than direct TUI charters. Build a 1-night Lisbon stopover at no extra airfare and break the journey — Lisbon is a brilliant honeymoon-prologue city.',
  },
  {
    title: 'Skip the rental car on Sal — keep it on Boa Vista',
    detail:
      'Sal is 30 km long, mostly flat, and the resort zone is walkable. Taxis cost €5–€10 per ride. A rental car at €40/day is overkill. Boa Vista is twice the size with wilder terrain — one or two days of car rental at €50/day unlocks the Viana desert and the north coast beaches.',
  },
  {
    title: 'Skip private catamaran — book the group sunset cruise',
    detail:
      'Group sunset catamarans from Santa Maria pier cost €60–€80 per person (2 hours, sparkling wine, sunset over Pedra de Lume). The same trip privately is €450–€600 per couple. Unless the privacy is critical, the group experience is the same view for 80% less.',
  },
  {
    title: 'Use Honeyfund or Zola for the kitesurf course and spa',
    detail:
      'Frame each gift as an experience: "the kitesurf lessons at Kite Beach", "the YHI Spa ritual at Meliá Llana", "the Hyatt presidential suite upgrade". 60% of US couples now use a honeymoon registry; the European share is growing fast. Full guide at /how-to-plan-a-honeymoon.',
  },
  {
    title: 'Take an off-peak honeymoon',
    detail:
      'You do not have to fly within a week of the wedding. A Cape Verde honeymoon delayed 2–4 months from a March wedding to mid-May, or from a December wedding to mid-January, saves €800–€1,800 on the same hotel and arrives less exhausted, with paperwork sorted. The romance does not depreciate.',
  },
]

const HIDDEN_COSTS = [
  ['Tourist tax (TUR)', '€2 per person per night, capped at 10 nights per stay, paid in cash at hotel check-in. €28 for a couple over 7 nights. Required at every legally operating accommodation on the islands.'],
  ['EASE pre-registration', '€31 per person, paid online at ease.gov.cv within 30 days of travel. Replaces the old visa-on-arrival. Print or screenshot the QR code — checked at immigration. €62 for a couple.'],
  ['IVA (VAT 15%)', 'Included in published hotel rates but added to most off-resort restaurant bills. Verify the bill: "preço com IVA" means tax-included, "preço sem IVA" means add 15%.'],
  ['Premium AI vs. basic AI', 'Basic AI covers buffet meals, house wine and local spirits. Premium AI adds premium spirits, 3–4 à la carte restaurants, minibar and 24h room service for €60–€120 per couple per night more. Worth it for honeymoon couples.'],
  ['Excluded à la carte specialty restaurants', 'Most AI packages include 1–3 specialty dinners per stay but charge €25–€45 per person for additional bookings. Reserve your included dinners early in the stay — supply is tight in high season.'],
  ['Excursions', 'Pedra de Lume salt crater + shark bay (€45–€70 per couple), Buracona blue eye (€40–€60), turtle nesting on Boa Vista in season (€80–€130 per couple), Santo Antão hiking transfer (€220–€340 for a day-trip via São Vicente).'],
  ['Kitesurf / windsurf lessons', 'Sal\'s Kite Beach is one of the best learning windows globally. Group lesson with kit (3 hours) €60–€90 per person; full week course €280–€450 per person. Equipment rental alone €25–€40/day.'],
  ['Spa', 'Couples 60-minute massage at a 5★ Sal property is €140–€220; the signature 2-hour rituals at Hyatt and Hilton run €320–€520 for two. Sal\'s independent spas in Santa Maria are 30–40% cheaper for comparable quality.'],
  ['Inter-island flights', 'Bestfly and Cabo Verde Airlines operate inter-island hops (Sal ↔ Boa Vista ↔ São Vicente ↔ Santiago) at €120–€220 per person round-trip. Book with the resort, not at the airport — last-minute walk-up is €300+.'],
]

const COMPARISON = [
  { dest: 'Cape Verde', total: '€3.5k – €9k', flight: '6h from UK / 3.5h from LIS / 11h from US East', signature: 'Atlantic islands, cheap from Europe, year-round dry climate' },
  { dest: 'Canary Islands', total: '€2.8k – €7k', flight: '4.5h from UK / 4h from CDG', signature: 'Closer, EU-zone safety, less exotic feel' },
  { dest: 'Barbados', total: '$6.5k – $14k', flight: '4.5h from US East / 8.5h from UK', signature: 'Platinum Coast white sand, food scene, no overwater' },
  { dest: 'Zanzibar', total: '€5k – €12k', flight: '10h from EU / 17h from US East', signature: 'Indian Ocean spice island, longer-haul, more cultural depth' },
]

export default function CapeVerdeHoneymoonCostPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Cape Verde Honeymoon Cost: 2026 Real Numbers',
    description:
      'How much a Cape Verde honeymoon really costs in 2026 — four budget tiers, line-by-line breakdown, three real 7-night sample budgets at named hotels, hidden costs, and 8 ways to spend less.',
    image: 'https://myhoneymoonhotel.com/images/hotels/hyatt-regency-cabo-verde-cape-verde/hero.webp',
    author: { '@type': 'Organization', name: 'My Honeymoon Hotel', url: 'https://myhoneymoonhotel.com/about' },
    publisher: {
      '@type': 'Organization',
      name: 'My Honeymoon Hotel',
      logo: { '@type': 'ImageObject', url: 'https://myhoneymoonhotel.com/icon.png' },
    },
    datePublished: '2026-03-04',
    dateModified: '2026-05-11',
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://myhoneymoonhotel.com/cape-verde-honeymoon-cost' },
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
        name: 'Cape Verde Honeymoon Cost',
        item: 'https://myhoneymoonhotel.com/cape-verde-honeymoon-cost',
      },
    ],
  }

  const speakableSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://myhoneymoonhotel.com/cape-verde-honeymoon-cost#speakable',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['#tldr'],
    },
  }

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />

      {/* HERO */}
      <section className="relative h-[70vh] min-h-[520px] flex items-end overflow-hidden">
        <Image
          src="/images/hotels/hyatt-regency-cabo-verde-cape-verde/hero.webp"
          alt="Hyatt Regency Cabo Verde beachfront on Sal — Cape Verde honeymoon"
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
            Cape Verde honeymoon<br />cost — 2026.
          </h1>
          <p className="text-white/75 text-base sm:text-lg max-w-2xl leading-relaxed">
            How much a Cape Verde honeymoon really costs in 2026. Four budget tiers from €3.5k to €18k+,
            the five cost drivers, line-by-line breakdowns, three real 7-night sample budgets at named
            hotels on Sal and Santo Antão, hidden costs (€2/night tourist tax, EASE registration), the
            cheapest months, and the eight ways to spend meaningfully less without losing the Atlantic
            magic.
          </p>
        </div>
      </section>

      {/* BREADCRUMB */}
      <nav aria-label="Breadcrumb" className="max-w-4xl mx-auto px-6 pt-8 text-xs text-zinc-500">
        <Link href="/" className="hover:text-zinc-900">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-zinc-900">Cape Verde Honeymoon Cost</span>
      </nav>

      <div className="max-w-4xl mx-auto px-6">
        <AuthorByline />
      </div>

      <div className="max-w-3xl mx-auto px-6">
        <aside id="tldr" className="my-8 p-6 rounded-2xl bg-rose-50/60 border border-rose-100">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-2">TL;DR</p>
          <p className="text-zinc-900 text-lg leading-relaxed font-medium">
            A Cape Verde honeymoon costs €3,500 to €18,000+ for 7 nights, 2 people. Sal and Boa Vista host the bulk of the inventory — mid-tier all-inclusive (Hilton, Riu, Meliá) runs €3.5k–€6k; 5-star adults-only (Hilton Cabo Verde, Iberostar) hits €6k–€10k; boutique-villa or kite-surf-camp stays reach €15k+. Five-hour flight from London or Lisbon, year-round 25–28°C, EUR pricing. The hidden value play of the Atlantic.
          </p>
          <ul className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-zinc-600">
            <li><strong className="block text-zinc-900 text-xs uppercase tracking-wider mb-1">For</strong>European couples wanting short-haul winter sun</li>
            <li><strong className="block text-zinc-900 text-xs uppercase tracking-wider mb-1">Cost</strong>€3.5k–€18k+</li>
            <li><strong className="block text-zinc-900 text-xs uppercase tracking-wider mb-1">Best month</strong>Year-round (Nov–Jun peak)</li>
          </ul>
        </aside>
      </div>

      {/* INTRO + TL;DR */}
      <section className="max-w-3xl mx-auto px-6 py-14 prose prose-zinc">
        <p className="text-lg text-zinc-700 leading-relaxed">
          A Cape Verde honeymoon in 2026 costs anywhere from <strong>€3,500 to €18,000+</strong> all-in for
          two people, seven nights. That spread is narrower than the Caribbean because Cape Verde is
          dominated by all-inclusive resorts at four price brackets — and where you land inside it depends
          on five concrete decisions: island, AI tier, season, flight origin, and ground-transport choice.
          Get those right and you can have a real Sal honeymoon for €4,500. Get them wrong and the same
          week quietly bills you €8,000.
        </p>
        <p className="text-base text-zinc-700 leading-relaxed mt-5">
          This guide is the cost breakdown we wish someone had handed us. Real 2026 prices, real hotels,
          real line items — including the often-missed €2/night tourist tax (TUR), the €31/pp EASE
          pre-registration, the 15% IVA that may or may not be in your published rate, and the premium-AI
          versus basic-AI math nobody quite explains. We work bottom-up: four tiers, the cost drivers, a
          full line-by-line table, three sample 7-night budgets at named hotels (Meliá Llana, Hyatt Regency
          Cabo Verde, Spinguera Ecolodge), the cheapest months, eight ways to spend less, and a head-to-head
          comparison with the Canary Islands, Zanzibar, and{' '}
          <Link href="/barbados-honeymoon-cost" className="text-rose-500 hover:text-rose-600 underline underline-offset-2">
            Barbados
          </Link>
          . For the broader pre-trip checklist see our{' '}
          <Link href="/how-to-plan-a-honeymoon" className="text-rose-500 hover:text-rose-600 underline underline-offset-2">
            full honeymoon planning guide
          </Link>.
        </p>

        <div className="not-prose my-12 bg-zinc-50 border border-zinc-100 rounded-2xl p-7">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-4">In this guide</p>
          <ol className="text-sm text-zinc-700 space-y-2 leading-relaxed list-decimal pl-5">
            <li><a className="hover:text-rose-500" href="#tldr-tiers">The four budget tiers — TL;DR table</a></li>
            <li><a className="hover:text-rose-500" href="#drivers">The five cost drivers</a></li>
            <li><a className="hover:text-rose-500" href="#line-items">Line-by-line cost breakdown</a></li>
            <li><a className="hover:text-rose-500" href="#samples">Three real 7-night sample budgets</a></li>
            <li><a className="hover:text-rose-500" href="#season">Best value months</a></li>
            <li><a className="hover:text-rose-500" href="#tips">8 ways to spend meaningfully less</a></li>
            <li><a className="hover:text-rose-500" href="#hidden">Hidden costs nobody warns you about</a></li>
            <li><a className="hover:text-rose-500" href="#compare">Cape Verde vs. Canary Islands vs. Barbados vs. Zanzibar</a></li>
            <li><a className="hover:text-rose-500" href="#faq">Frequently asked questions</a></li>
          </ol>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6">
        <FlightSearchWidget destination="Cape Verde" />
      </div>

      {/* 1. TL;DR */}
      <section id="tldr-tiers" className="bg-zinc-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-3">Section 01</p>
          <h2 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-6 leading-tight">
            The four budget tiers
          </h2>
          <p className="text-zinc-700 text-base leading-relaxed mb-10">
            Seven nights. Two people. All-in — direct flights from a major European hub (or one-stop via
            Lisbon from the US East Coast), hotel (typically on Sal or Boa Vista), airport transfers, meals
            and drinks (usually bundled in AI), IVA, tourist tax, EASE, tips, modest activities. The tier
            is set by which hotel and AI package you book; everything else flows from that decision.
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
            All numbers in 2026 EUR, for two people, including 15% IVA on hotels, €2/pp/night tourist tax,
            €31/pp EASE pre-registration, and 10% gratuity guidance on premium-AI properties. Excludes
            premium-cabin flight upgrades and credit-card-point redemptions, which can shift the top-line
            by €1,500–€5,000 in either direction.
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
          Almost every euro of variance between a €4k and a €9k Cape Verde honeymoon is explained by these
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
          For the curated edit of every property we cover across the archipelago, see our{' '}
          <Link href="/destinations/cape-verde" className="text-rose-500 hover:text-rose-600 underline underline-offset-2">
            Cape Verde destination guide
          </Link>{' '}
          — Hyatt Regency, Hilton Cabo Verde, Meliá Llana, RIU Palace Boavista, RIU Palace Santa Maria,
          Hotel Morabeza, Tortuga Beach Resort, Sodade Resort and Spinguera Ecolodge all show up there with
          full notes.
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
            Every line item that hits a typical 7-night Cape Verde honeymoon, with 2026 ranges. Build your
            own number by selecting one row from each category — flights, hotel, transport — then adding
            the fixed lines (EASE, tourist tax, tips, insurance, excursions).
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
            The €2/pp/night tourist tax is the most overlooked figure — couples often discover it at
            check-in in cash. Carry €30–€40 in small notes. Published hotel rates include 15% IVA but
            off-resort restaurant bills may or may not — verify "preço com IVA" on the menu.
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
          <Link href="/destinations/cape-verde" className="text-rose-500 hover:text-rose-600 underline underline-offset-2">
            Cape Verde destination guide
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
            Best value months for a Cape Verde honeymoon
          </h2>
          <p className="text-zinc-700 text-base leading-relaxed mb-10">
            Cape Verde has an unusually consistent climate — 200–300mm of rain annually, almost all of it
            concentrated in August–September. Daily highs run 24–26°C in winter, 28–30°C in summer; water
            stays between 22°C (February) and 26°C (October). The cost-versus-weather trade-off is gentler
            than the Caribbean: shoulder months are genuinely shoulder, not compromise.
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
              <strong>The single rule:</strong> avoid December 20 to January 5 (peak), Easter week and UK
              February half-term. May, June, October and November are the genuine sweet spots — full
              Atlantic experience, 25–35% off, minimal weather risk.
            </p>
            <p className="text-zinc-600 text-sm mt-3">
              See the cross-destination view in our{' '}
              <Link href="/best-time-to-honeymoon" className="text-rose-500 hover:text-rose-600 underline underline-offset-2">
                2026 honeymoon calendar
              </Link>.
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
          Each of these saves at least €200 per couple. Stack four or five and the same Cape Verde
          experience drops €1,000–€2,000 without losing anything that matters.
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
          Premium-AI math is the highest-leverage decision on this list. See our{' '}
          <Link href="/destinations/cape-verde" className="text-rose-500 hover:text-rose-600 underline underline-offset-2">
            Cape Verde destination guide
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
            Nine line items that quietly add 8–12% to the headline number. Read this before you book — most
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
          Cape Verde vs. Canary Islands vs. Barbados vs. Zanzibar
        </h2>
        <p className="text-zinc-700 text-base leading-relaxed mb-10">
          Four mid-haul honeymoon destinations from European departure points, at overlapping spend bands.
          Cape Verde wins for the year-round dry climate, the strongest AI value, and the kitesurf scene;
          the Canary Islands win for shortest flight and EU-zone simplicity; Barbados wins for the legacy
          West Coast hotels and food scene; Zanzibar wins on cultural depth and the spice-island
          atmosphere.
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
          <Link href="/destinations/madeira" className="text-rose-500 hover:text-rose-600 underline underline-offset-2">
            Madeira
          </Link>
          ,{' '}
          <Link href="/destinations/zanzibar" className="text-rose-500 hover:text-rose-600 underline underline-offset-2">
            Zanzibar
          </Link>
          , and{' '}
          <Link href="/barbados-honeymoon-cost" className="text-rose-500 hover:text-rose-600 underline underline-offset-2">
            Barbados honeymoon cost
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
          src="/images/hotels/hyatt-regency-cabo-verde-cape-verde/hero.webp"
          alt="Find your Cape Verde honeymoon hotel"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
        <div className="relative max-w-4xl mx-auto px-6 text-white">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-300 mb-4">Now, the resort</p>
          <h2 className="font-display text-4xl sm:text-5xl leading-tight mb-5">
            Find the Cape Verde resort <br className="hidden sm:block" />that fits your budget.
          </h2>
          <p className="text-white/70 text-base leading-relaxed mb-8 max-w-xl">
            Take the 6-step quiz — five lifestyle questions and we return three matched Cape Verde resorts
            at your tier, with vetted hotel notes, real prices, and the Sal-vs-Boa-Vista split figured out.
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
              href="/destinations/cape-verde"
              className="border border-white/30 backdrop-blur-md bg-white/5 hover:bg-white/10 text-white font-semibold text-sm px-8 py-4 rounded-full transition-colors"
            >
              See every Cape Verde resort
            </Link>
          </div>
        </div>
      </section>
    </article>
  )
}
