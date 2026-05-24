import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { buildAlternates } from '@/lib/alternates'
import AuthorByline from '@/components/AuthorByline'
import FlightSearchWidget from '@/components/FlightSearchWidget'

export const metadata: Metadata = {
  title: 'Turks and Caicos Honeymoon Cost: 2026 Real Numbers ($8k–$70k+)',
  description:
    'How much a Turks and Caicos honeymoon really costs in 2026. Four budget tiers, line-by-line breakdown, four 7-night sample budgets at named resorts (Amanyara to Grace Bay Club), hidden costs (12% GHST), best months for Grace Bay, and 8 ways to spend less.',
  alternates: buildAlternates('/turks-and-caicos-honeymoon-cost'),
  openGraph: {
    title: 'Turks and Caicos Honeymoon Cost — 2026 Real Numbers',
    description:
      'Four budget tiers ($8k–$70k+), real hotel breakdowns, hidden costs (12% GHST), best couples resorts on Grace Bay, and 8 ways to spend less on a Turks and Caicos honeymoon.',
    url: 'https://myhoneymoonhotel.com/turks-and-caicos-honeymoon-cost',
    siteName: 'MyHoneymoonHotel',
    images: [
      {
        url: 'https://myhoneymoonhotel.com/images/hotels/amanyara-turks-caicos/hero.webp',
        width: 1600,
        height: 900,
        alt: 'Amanyara, North West Point — the canonical Turks and Caicos ultra-luxury honeymoon image',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Turks and Caicos Honeymoon Cost — 2026 Real Numbers',
    description: 'Four budget tiers, real hotel breakdowns, hidden costs, best months, and 8 ways to spend less.',
    images: ['https://myhoneymoonhotel.com/images/hotels/amanyara-turks-caicos/hero.webp'],
  },
}

const FAQS: { q: string; a: string }[] = [
  {
    q: 'How much does a Turks and Caicos honeymoon cost on average?',
    a: 'For 7 nights all-in (flights, resort, transfers, food, 12% GHST, tips), the typical 2026 US couple spends $11,000 to $15,000 on a "comfortable mid-range" Turks and Caicos honeymoon at a Grace Bay 4-5★ like Alexandra, Wymara, or Blue Haven. Drop to $8,500 with a one-bedroom condo at The Sands or Ocean Club. Push to $20,000–$28,000 for a true 5★ on Grace Bay (Grace Bay Club, The Palms, Seven Stars, The Shore Club). Ultra-luxury (Amanyara on North West Point, COMO Parrot Cay, Ambergris Cay) starts at $30,000 and runs past $70,000 for the headline pavilions in peak weeks.',
  },
  {
    q: 'Which is the best couples resort in Turks and Caicos?',
    a: 'Grace Bay Club for the original Grace Bay luxury experience — adults-only Estate side, the best beach club, three excellent restaurants. The Palms for the spa and the pool-deck scene. The Shore Club on Long Bay for total privacy without leaving Providenciales. Rock House on the north coast for the boutique cliffside romance. Amanyara on North West Point and COMO Parrot Cay on its own private island for ultra-luxury seclusion. Avoid the larger family-skewed all-inclusives (Beaches Turks and Caicos) unless you specifically want the Sandals/Beaches product.',
  },
  {
    q: 'Is Turks and Caicos all-inclusive worth it for a honeymoon?',
    a: 'Usually no. Unlike the Maldives, Grace Bay has an excellent restaurant scene — Coco Bistro, Mr Grouper, Magnolia, Coyaba — and dinner off-property is the highlight of most honeymoons here. The all-inclusive product at Beaches, Blue Haven, Alexandra, and Ambergris Cay (the four credible AIs) runs $230–$380/pp/day and locks you out of the food culture. The exception is Ambergris Cay — a private-island AI 24 km off Providenciales with no off-property alternative. For Grace Bay proper, book à la carte and use the saved $1,800–$2,800 per couple on three or four standout off-resort dinners.',
  },
  {
    q: 'When is the cheapest time for a Turks and Caicos honeymoon?',
    a: 'September and early October are the cheapest weeks — 35–45% off Christmas peak — but they overlap with peak Atlantic hurricane probability. Late April through early June is the sweet spot: rates drop 20–25% versus February, the trade winds are at their best for the beach, water hits 80°F, and hurricane risk is statistically zero. The single fortnight to absolutely avoid for value is December 22 to January 5 — rates double, five-night minimums become seven-night, and every Grace Bay 5★ adds a mandatory $400–$600/pp NYE gala. President\'s Week in February is the second-most expensive window.',
  },
  {
    q: 'Are there hidden costs at Turks and Caicos resorts?',
    a: 'Yes, several. The 12% Government Hotel Sales Tax (GHST) is added to every line on every bill — room, food, drink, spa. Most properties also add a 10–15% resort service charge and a $50–$120/day "resort fee" or "amenity fee". The Providenciales airport departure tax ($60/pp) is now bundled into airline tickets. Grace Bay does not have an island-wide tipping culture but you should plan $150–$250 across 7 nights. Add another 22–28% on top of the headline room rate to get the real number.',
  },
  {
    q: 'How long is the flight to Turks and Caicos from the US?',
    a: 'From Miami, 1.5 hours direct on American or JetBlue. From New York, 3.5 hours direct on JetBlue, Delta, or United. From Boston, 4 hours direct on JetBlue and American (seasonal). From Atlanta, 3 hours direct on Delta. From Los Angeles, no direct service — 6 to 7 hours via Miami or Charlotte. From London, 9 to 10 hours via Miami or New York. Providenciales (PLS) is the only international airport; if you are staying on Parrot Cay or Ambergris Cay, a 25–40-minute speedboat or charter flight from PLS gets you to the private island.',
  },
  {
    q: 'How is Turks and Caicos different from the Bahamas for a honeymoon?',
    a: 'Turks and Caicos is one island honeymoon (Providenciales for 90% of couples, occasionally with a private-island bolt-on at Parrot Cay or Ambergris) — small, focused, beach-first. Grace Bay is consistently rated the best beach in the Caribbean and probably the world. The Bahamas is a 700-island archipelago with every honeymoon style available (Atlantis water park, Harbour Island pink sand, Andros barrier reef). The Bahamas is 20–35% cheaper at every tier; Turks wins on beach quality, on Grace Bay\'s sheer density of credible 5★ properties in a 12-mile strip, and on flight access from the US East Coast.',
  },
  {
    q: 'Do we need a passport for Turks and Caicos?',
    a: 'Yes. US and Canadian citizens need a valid passport (not a passport card) for air arrivals. UK, EU, and Australian citizens do not need a visa for stays under 90 days. A return ticket and proof of accommodation are required at immigration. Turks and Caicos is a British Overseas Territory but is NOT in the EU and does NOT accept EHIC or GHIC. Bring trip insurance with medical coverage — air ambulance to Miami runs $25,000+ if needed.',
  },
  {
    q: 'Can we use credit-card points for a Turks and Caicos honeymoon?',
    a: 'Yes — Turks and Caicos has the highest density of 5★ Marriott Bonvoy properties in the Caribbean (The Palms via Autograph, Wymara via Autograph in select years, Beaches via Marriott Sandals partnership). Grace Bay Club is bookable through Virtuoso and Amex Fine Hotels & Resorts with breakfast and resort credit included. Flights New York to PLS run 25,000–35,000 Avios one-way or transfer from Chase Sapphire / Amex points. A single Marriott Bonvoy Brilliant or Amex Platinum sign-up bonus covers a 4-night Cat-7 stay.',
  },
  {
    q: 'Is Turks and Caicos worth the cost for a honeymoon?',
    a: 'For couples who want the best Caribbean beach with zero compromises, yes. Grace Bay is genuinely the best beach in the Caribbean — 12 miles of powder-fine white sand, transparent turquoise water that goes shallow for 200 metres, and no commercial development on the beach itself. The cost premium over the Bahamas (roughly 20%) buys you a single concentrated luxury beach scene rather than the Bahamas\' fragmented 700-island spread. For couples who want variety, water park, pink sand, and lower flight cost, the Bahamas is the better fit.',
  },
]

const TIER_TABLE = [
  {
    tier: 'Budget',
    range: '$8,000 – $11,000',
    examples: 'The Sands at Grace Bay · Ocean Club · Royal West Indies',
    location: 'Grace Bay condo-resort',
    room: 'Studio or one-bedroom suite',
    meal: 'Self-catered with kitchenette',
  },
  {
    tier: 'Mid-range',
    range: '$11,500 – $17,000',
    examples: 'Alexandra · Wymara · Blue Haven · Salterra (South Caicos)',
    location: 'Grace Bay or South Caicos',
    room: 'Beachfront junior suite',
    meal: 'BB or all-inclusive at Alexandra / Blue Haven',
  },
  {
    tier: 'Luxury',
    range: '$18,000 – $30,000',
    examples: 'Grace Bay Club · The Palms · Seven Stars · The Shore Club · Rock House',
    location: 'Grace Bay (Estate side) or Long Bay',
    room: 'Beachfront one-bedroom or villa',
    meal: 'À la carte, BB included via Virtuoso/FHR',
  },
  {
    tier: 'Ultra-luxury',
    range: '$32,000 – $70,000+',
    examples: 'Amanyara · COMO Parrot Cay · Ambergris Cay · The Shore Club Estate',
    location: 'North West Point / Parrot Cay / Ambergris Cay (private island)',
    room: 'Private pavilion, beach villa, two-bedroom estate',
    meal: 'Bespoke or full AI on private islands',
  },
]

const COST_DRIVERS = [
  {
    title: 'Resort tier and brand',
    detail:
      'The single biggest variable. A Grace Bay condo-resort (Sands, Ocean Club, Royal West Indies) runs $380–$680/night for a studio. A mid-tier 5★ Grace Bay beachfront (Wymara, Alexandra, Seven Stars) runs $720–$1,200/night. Top-of-Grace-Bay (Grace Bay Club Estate, The Palms, The Shore Club) runs $1,300–$2,400/night. Private-island ultra-luxury at Amanyara, COMO Parrot Cay, or Ambergris Cay runs $2,800–$8,500/night. Within "5★", brand prestige adds 30–50% to the rate (Aman/COMO vs. independent operators) for a similar physical product.',
  },
  {
    title: 'Season and date',
    detail:
      'Peak (December 22 – January 5) costs roughly 2.1× the September low. President\'s Week (mid-February) and Easter are mini-spikes at 1.7× shoulder. Late April through early June is the price sweet spot — water is 80°F, hurricane risk is statistically zero, rates drop 20–25%. September and early October are cheapest (35–45% off peak) but coincide with peak Atlantic hurricane probability — only viable with CFAR trip insurance.',
  },
  {
    title: 'Grace Bay vs. private island',
    detail:
      'Grace Bay is the 12-mile beach where 90% of T&C honeymoons happen — full-service 5★ resorts, walking-distance restaurants, every amenity. Private islands (Parrot Cay, Ambergris Cay, the Amanyara experience on North West Point) cost roughly 2–3× per night for the equivalent service tier because you are paying for total exclusivity, dedicated speedboat transfers, and on-site staff:guest ratios above 3:1. Choose Grace Bay if you want food culture and beach variety; choose a private island if you want the Maldives feeling without flying 22 hours.',
  },
  {
    title: 'Meal plan — BB vs. AI vs. à la carte',
    detail:
      'On Grace Bay you should stay à la carte or BB. The off-property restaurant scene (Coco Bistro, Mr Grouper, Magnolia, Coyaba, Hemingway\'s) is the best in the Caribbean and a 5-minute taxi from any Grace Bay 5★. The AI product at Beaches, Blue Haven, and Alexandra costs $230–$380/pp/day and locks you out of the food culture. The exception is the private islands — Parrot Cay and Ambergris Cay are AI by necessity since there is no alternative. Full-board there runs $280–$420/pp/day.',
  },
  {
    title: 'Room category and view',
    detail:
      'On Grace Bay, beachfront vs. garden view is a $200–$400/night swing at every property. The "Estate" side of Grace Bay Club commands a 60% premium over the main side for adults-only access and direct beach. At Amanyara, the difference between an "Ocean Pavilion" ($3,200/night) and a "Ponds Pavilion" ($2,800) is 90 metres of walk to the same beach — a worthy save. The Shore Club\'s "Beachfront" rooms are the actual product; their "Garden View" rooms face an interior pool deck and feel like a different resort.',
  },
]

const LINE_ITEMS = [
  ['Flights from US East Coast (economy, 2pax)', '$900 – $1,800'],
  ['Flights from US East Coast (premium economy / Mint, 2pax)', '$2,200 – $4,400'],
  ['Flights from US West Coast (economy, 2pax)', '$1,600 – $3,000'],
  ['Flights from Europe (economy, 2pax)', '$1,500 – $2,800'],
  ['Inter-island speedboat to Parrot Cay or Ambergris Cay (2pax RT)', '$280 – $600'],
  ['Resort, 7 nights, Grace Bay condo-suite (4-star)', '$3,200 – $5,200'],
  ['Resort, 7 nights, Grace Bay 5-star beachfront', '$7,800 – $13,500'],
  ['Resort, 7 nights, top-of-Grace-Bay (GBC Estate / Palms / Shore Club)', '$12,500 – $20,000'],
  ['Resort, 7 nights, ultra-luxury private island (Amanyara / Parrot Cay)', '$22,000 – $58,000'],
  ['All-inclusive upgrade — Alexandra / Blue Haven (2pax × 7 nights)', '$2,800 – $4,200'],
  ['Off-property dinners (3–4 across the week, Grace Bay)', '$420 – $880'],
  ['Excursions — Conch Bar caves, Iguana Island, half-day sail (2pax)', '$420 – $980'],
  ['Spa — 1 couples 60-min massage', '$340 – $620'],
  ['Honeymoon photoshoot (1 hour, Grace Bay)', '$700 – $2,000'],
  ['12% GHST applied to every on-island bill', '+12% uplift'],
  ['10–15% resort service charge on most bills', '+10–15% uplift'],
  ['Resort fees ($50–$120/day × 7)', '$350 – $840'],
  ['Tips — bellman, housekeeping, dive guide (7 nights)', '$150 – $250'],
  ['Travel insurance with CFAR ($15k trip value)', '$280 – $600'],
]

const SAMPLE_BUDGETS = [
  {
    name: 'Mid-range — Wymara Resort on Grace Bay',
    total: '$12,800',
    season: 'Mid-May, 7 nights',
    bullets: [
      ['Flights (JetBlue economy, JFK → PLS direct, 2pax)', '$1,100'],
      ['Resort, 7 nights, beachfront junior suite', '$6,500'],
      ['Breakfast included via Marriott/Virtuoso', 'Included'],
      ['Off-property dinners (Coco Bistro, Magnolia, Mr Grouper)', '$640'],
      ['Half-day sail to Iguana Island + snorkel', '$420'],
      ['Couples massage', '$520'],
      ['12% GHST + 10% service uplift on extras', '$1,180'],
      ['Resort fees, taxis, tips, buffer', '$2,440'],
    ],
    note:
      'Wymara is the design-forward 5★ at the eastern end of Grace Bay — only 91 rooms, the best pool deck on the beach, and a serious sushi restaurant (Zest) that pulls non-guests. Mid-May threads the calendar: post-hurricane risk, pre-summer European arrival surge, water is 80°F. The textbook value-conscious Grace Bay honeymoon.',
  },
  {
    name: 'Luxury — Grace Bay Club (Estate side)',
    total: '$19,600',
    season: 'Early November, 7 nights',
    bullets: [
      ['Flights (premium economy, BOS → PLS direct)', '$1,800'],
      ['Resort, 7 nights, Estate one-bedroom oceanfront', '$11,200'],
      ['Breakfast at Grace\'s Cottage included via Virtuoso', 'Included'],
      ['Infiniti Bar sunset cocktails + 4 on-property dinners', '$920'],
      ['Couples spa ritual + cabana day', '$640'],
      ['Private boat half-day to Half Moon Bay + Iguana Island', '$680'],
      ['12% GHST + service charge uplift', '$1,840'],
      ['Resort fees, transfers, tips, buffer', '$2,520'],
    ],
    note:
      'The Estate side of Grace Bay Club is the adults-only, butler-service half of the property — 22 oceanfront suites with their own pool deck, restaurant, and the best beach access on Grace Bay. Early November is the moment: post-hurricane, pre-American Thanksgiving, rates 25% below February peak with identical weather. The single most-booked 5★ honeymoon product in T&C, and the one most likely to deliver on the Condé Nast promise.',
  },
  {
    name: 'Ultra-luxury — Amanyara on North West Point',
    total: '$34,800',
    season: 'Mid-February, 7 nights',
    bullets: [
      ['Flights (business class points + cash, 2pax)', '$3,400'],
      ['Resort, 7 nights, Ocean View Pavilion', '$18,400'],
      ['Breakfast included', 'Included'],
      ['Half-board upgrade (3 dinners, 7 lunches)', '$2,240'],
      ['Couples massage at the over-water spa pavilion', '$680'],
      ['Half-day private boat to West Caicos snorkel + reef dive', '$1,400'],
      ['Sunset sailing with private chef on the beach', '$1,200'],
      ['12% GHST + service charge uplift', '$3,520'],
      ['Transfers, tips, buffer', '$3,960'],
    ],
    note:
      'Amanyara is the resort that turned Turks into a serious ultra-luxury destination — 40 pavilions on North West Point Marine National Park, where the reef starts 15 metres from your terrace and the beach is yours alone (no other resorts within a 30-minute drive). Mid-February is peak but the resort experience is at its absolute best: cool evenings, dry days, the staff:guest ratio passes 3:1. The single most-honored honeymoon resort in the Caribbean.',
  },
  {
    name: 'Private-island ultra-luxury — COMO Parrot Cay',
    total: '$42,600',
    season: 'Late November, 7 nights',
    bullets: [
      ['Flights (premium economy, NYC → PLS direct)', '$2,200'],
      ['Private speedboat transfer to Parrot Cay RT', '$580'],
      ['Resort, 7 nights, beach house', '$24,500'],
      ['Half-board with COMO Shambhala wellness menu', '$3,360'],
      ['COMO Shambhala couples retreat — yoga + spa half-day', '$1,400'],
      ['Private bonefishing half-day with guide', '$840'],
      ['Snorkel safari to West Caicos with private picnic', '$960'],
      ['12% GHST + service charge', '$4,120'],
      ['Tips, buffer', '$4,640'],
    ],
    note:
      'Parrot Cay is the wellness-focused private island 25 minutes by boat from Providenciales — owned by COMO since 2002, 60 villas and beach houses on 1,000 acres, the COMO Shambhala spa is one of the three best in the world. Late November is the perfect window: hurricane risk is essentially zero, water is still 79°F, and rates are 30% below the Christmas-week peak. The honeymoon for couples who want a private-island Maldives feeling without the 22-hour flight.',
  },
]

const SEASONS = [
  { months: 'Mid-November – mid-December', verdict: 'Best', detail: 'Post-hurricane, pre-holiday. Water is 79°F, air is 78°F, rates are 20–30% below peak. The ideal Turks and Caicos honeymoon window if your wedding allows.' },
  { months: 'Dec 22 – Jan 5', verdict: 'Peak — avoid', detail: 'Holiday fortnight surcharge. Rates 2.1× shoulder, seven-night minimums at the boutique properties, mandatory NYE gala dinners ($400–$600/pp). If your wedding is in early December, push the honeymoon to mid-January or the following May.' },
  { months: 'Mid-January – mid-April', verdict: 'High season', detail: 'Best weather, biggest crowds, peak prices. President\'s Week (mid-February) and Easter are mini-spikes. Book 6–9 months ahead for Grace Bay Club, The Palms, Amanyara, and The Shore Club.' },
  { months: 'Late April – early June', verdict: 'Best value', detail: 'The price sweet spot — rates drop 20–25% from February, water is already 80°F, hurricane risk is statistically zero. The single best window for a value-conscious luxury Turks and Caicos honeymoon.' },
  { months: 'June – mid-August', verdict: 'Good value, building risk', detail: 'Rates continue to drop. Hurricane season formally starts June 1 but storms rarely materialize before August. European summer arrivals push Grace Bay 4-stars (not the 5-star properties) to high occupancy.' },
  { months: 'Mid-August – October', verdict: 'Cheapest, riskiest', detail: 'Cheapest weeks of the year — 35–45% off peak — but this is peak hurricane probability. Only book with CFAR insurance. Amanyara and Parrot Cay close late August through mid-October. Grace Bay properties stay open but rooms can be half-empty.' },
]

const TIPS = [
  {
    title: 'Travel late April, May, or early June',
    detail:
      'The single highest-leverage tip on this list. Hurricane risk is statistically zero, water is 80°F, and rates drop 20–25% from February peak. A $24,000 Grace Bay Club honeymoon in February is a $19,000 honeymoon in mid-May — identical product, the difference is the calendar.',
  },
  {
    title: 'Skip the all-inclusive on Grace Bay',
    detail:
      'Unlike the Maldives, Turks has a serious off-property restaurant scene. Coco Bistro, Mr Grouper, Magnolia, Coyaba, and Hemingway\'s on the Beach are walking or short-taxi from every Grace Bay 5★. An AI plan locks you in for $230–$380/pp/day and you miss the food culture. Book BB or à la carte and use the saved $1,800–$2,800 on three or four standout off-resort dinners. The exception is Ambergris Cay and Parrot Cay — both private islands with no alternative.',
  },
  {
    title: 'Use Virtuoso, FHR, or Marriott Bonvoy for the breakfast and resort credit',
    detail:
      'Almost every Grace Bay 5★ (Grace Bay Club, The Palms, Wymara, The Shore Club, Rock House) is bookable through Virtuoso, Amex Fine Hotels & Resorts, or Marriott Bonvoy luxury programs. The package adds free breakfast (worth $80–$120/day for two), a $100–$200 resort credit, and a room upgrade at check-in if available. Cost is identical to a direct booking.',
  },
  {
    title: 'Book a Grace Bay condo-resort for the kitchenette',
    detail:
      'The Sands at Grace Bay, Ocean Club, and Royal West Indies are not 5★ in the way Grace Bay Club is — but they are on the same beach, with the same water, at 40–55% less per night. The catch is they are condo-style with a kitchenette. For couples who want the Grace Bay water and budget for two big off-property dinners across the week, this is the most-leveraged save on this list.',
  },
  {
    title: 'Combine Grace Bay + Parrot Cay or Amanyara into one trip',
    detail:
      'The most-loved T&C honeymoon structure: 3 nights at a Grace Bay 5★ (Wymara, The Palms) for the food scene and beach hopping, 4 nights at Amanyara or Parrot Cay for the private-island finish. The $400–$600 inter-island transfer is a rounding error against the experiential payoff of two completely different islands.',
  },
  {
    title: 'Use credit-card points for the short, premium flights',
    detail:
      'New York to Providenciales is 1,500 miles — one of the cheapest premium-cabin redemptions from the US East Coast. JetBlue Mint runs 35,000 TrueBlue points one-way; American business runs 30,000 AAdvantage miles. A single Chase Sapphire Preferred or Amex Gold sign-up bonus covers both seats and the 3.5-hour lie-flat is a meaningful "honeymoon starts here" moment.',
  },
  {
    title: 'Use a Honeyfund / Zola registry for transfers and excursions',
    detail:
      'Frame each gift as an experience: "our flight to PLS", "the speedboat to Parrot Cay", "our half-day sail to Iguana Island". 60% of US couples now use a honeymoon registry — guests prefer experience-gifting to china. Full breakdown at /how-to-plan-a-honeymoon.',
  },
  {
    title: 'Stay 7 nights, not 10',
    detail:
      'Turks and Caicos does not reward long trips the way the Maldives does — Grace Bay\'s pleasure compounds quickly and most honeymooners hit diminishing returns at 7 nights. Banking the saved 3 nights into a tier upgrade (Wymara → Grace Bay Club Estate, or Grace Bay 5★ → Amanyara) buys you a meaningfully better experience.',
  },
]

const HIDDEN_COSTS = [
  ['12% Government Hotel Sales Tax (GHST)', 'Applied to every line on every resort bill — food, drink, spa, excursions, room rate. Non-negotiable. Always quoted "+++" in the small print.'],
  ['10–15% resort service charge', 'Layered on top of GHST at most full-service resorts (Grace Bay Club is 12%, The Palms is 15%, Amanyara is 10% built into rates). A $200 dinner becomes $244–$254 after GHST + service.'],
  ['Resort fees', '$50 to $120 per day, bundling Wi-Fi, beach chairs, kayaks, and snorkel gear. The Palms, Wymara, and Seven Stars all charge. Boutique private-island properties (Amanyara, Parrot Cay) typically do not.'],
  ['Inter-island transfers', 'Parrot Cay is 25 minutes by speedboat from Providenciales — $280–$580/couple RT depending on resort package. Ambergris Cay is a 12-minute private flight, $480–$700/couple RT. South Caicos (Salterra) is a 25-minute flight via interCaribbean, $260–$340/couple RT.'],
  ['Off-property dinners', '$80 to $220 per couple at Coco Bistro, Mr Grouper, Magnolia, Coyaba. Worth every dollar — Grace Bay\'s dinner scene is the best in the Caribbean and the meal economics are still far better than an AI plan.'],
  ['Excursions', '$140 to $320 per person for a half-day sail to Iguana Island, $90–$180 per person for the Conch Bar caves on Middle Caicos, $220–$380 per person for a JoJo dolphin private boat experience. Plan 2–3 across a 7-night stay.'],
  ['Spa', '$340 to $620 for a 60-minute couples massage at a 5-star property. The COMO Shambhala wellness rituals at Parrot Cay reach $800–$1,400 for the signature half-day.'],
  ['Provo airport rental car', 'Optional but most Grace Bay honeymooners rent a Jeep for $80–$130/day for the freedom to hit Mudjin Harbour, Sapodilla Bay, and the off-property restaurants without taxi friction. Drive on the left.'],
  ['Tips beyond service charge', 'The 10–15% service charge does not always reach housekeeping or the bellman. Plan $150–$250 across 7 nights for direct tips to the people you actually interact with.'],
]

const COMPARISON = [
  { dest: 'Turks and Caicos', total: '$11k – $22k', flight: '3.5h from NYC / 1.5h from MIA', signature: 'Grace Bay — best Caribbean beach, dense 5★ scene' },
  { dest: 'Bahamas', total: '$8k – $20k', flight: '3h from NYC / 1h from MIA', signature: '700 islands, every tier, easiest US escape' },
  { dest: 'St. Barths', total: '$18k – $35k', flight: '4.5h from NYC + ferry from SXM', signature: 'European chic, French food, smallest scene' },
  { dest: 'Maldives', total: '$14k – $24k', flight: '18–22h from US East', signature: 'Overwater villa, glass floor, total isolation' },
]

export default function TurksAndCaicosHoneymoonCostPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Turks and Caicos Honeymoon Cost: 2026 Real Numbers',
    description:
      'How much a Turks and Caicos honeymoon really costs in 2026 — four budget tiers, line-by-line breakdown, four real 7-night sample budgets, hidden costs (12% GHST), and 8 ways to spend less.',
    image: 'https://myhoneymoonhotel.com/images/hotels/amanyara-turks-caicos/hero.webp',
    author: { '@type': 'Organization', name: 'My Honeymoon Hotel', url: 'https://myhoneymoonhotel.com/about' },
    publisher: {
      '@type': 'Organization',
      name: 'My Honeymoon Hotel',
      logo: { '@type': 'ImageObject', url: 'https://myhoneymoonhotel.com/icon.png' },
    },
    datePublished: '2026-02-10',
    dateModified: '2026-05-11',
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://myhoneymoonhotel.com/turks-and-caicos-honeymoon-cost' },
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
        name: 'Turks and Caicos Honeymoon Cost',
        item: 'https://myhoneymoonhotel.com/turks-and-caicos-honeymoon-cost',
      },
    ],
  }

  const speakableSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://myhoneymoonhotel.com/turks-and-caicos-honeymoon-cost#speakable',
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
          src="/images/hotels/amanyara-turks-caicos/hero.webp"
          alt="Amanyara, North West Point — Turks and Caicos ultra-luxury honeymoon"
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
            Turks and Caicos<br />honeymoon — 2026.
          </h1>
          <p className="text-white/75 text-base sm:text-lg max-w-2xl leading-relaxed">
            How much a Turks and Caicos honeymoon really costs in 2026. Four budget tiers from $8k to $70k+,
            the five cost drivers, line-by-line breakdowns, four real 7-night sample budgets at named hotels
            (Wymara to Amanyara), the 12% GHST nobody mentions on the booking page, the cheapest months, and
            the eight ways to spend meaningfully less without losing the Grace Bay magic.
          </p>
        </div>
      </section>

      {/* BREADCRUMB */}
      <nav aria-label="Breadcrumb" className="max-w-4xl mx-auto px-6 pt-8 text-xs text-zinc-500">
        <Link href="/" className="hover:text-zinc-900">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-zinc-900">Turks and Caicos Honeymoon Cost</span>
      </nav>

      <div className="max-w-4xl mx-auto px-6">
        <AuthorByline />
      </div>

      <div className="max-w-3xl mx-auto px-6">
        <aside id="tldr" className="my-8 p-6 rounded-2xl bg-rose-50/60 border border-rose-100">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-2">TL;DR</p>
          <p className="text-zinc-900 text-lg leading-relaxed font-medium">
            A Turks and Caicos honeymoon costs $6,000 to $45,000+ for 7 nights, 2 people on Grace Bay (Providenciales). Mid-tier boutique resorts (Ocean Club, Alexandra) run $6k–$12k; flagship 5-stars (Grace Bay Club, Seven Stars, The Palms) hit $12k–$22k; villa-resort luxury (Amanyara, Como Parrot Cay) lands at $25k–$45k+. Just 4 hours from US East Coast, no daylight-savings hassles. Budget 12% government tax + 10–15% service on every line.
          </p>
          <ul className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-zinc-600">
            <li><strong className="block text-zinc-900 text-xs uppercase tracking-wider mb-1">For</strong>US East Coast couples chasing the world's best beach</li>
            <li><strong className="block text-zinc-900 text-xs uppercase tracking-wider mb-1">Cost</strong>$6k–$45k+</li>
            <li><strong className="block text-zinc-900 text-xs uppercase tracking-wider mb-1">Best month</strong>Apr–Jun &amp; Nov</li>
          </ul>
        </aside>
      </div>

      {/* INTRO + TL;DR */}
      <section className="max-w-3xl mx-auto px-6 py-14 prose prose-zinc">
        <p className="text-lg text-zinc-700 leading-relaxed">
          A Turks and Caicos honeymoon in 2026 costs anywhere from <strong>$8,000 to $70,000+</strong> all-in
          for two people, seven nights. That spread is not marketing — it is the honest range across Grace
          Bay&apos;s 12-mile concentration of 5★ resorts and the private-island ultra-luxury at Parrot Cay,
          Amanyara, and Ambergris Cay. Where you land inside the range depends on five concrete decisions:
          resort tier, season, Grace Bay vs. private island, meal plan, and room category.
        </p>
        <p className="text-base text-zinc-700 leading-relaxed mt-5">
          This guide is the cost breakdown we wish someone had handed us. Real 2026 prices, real hotels,
          real line items — including the speedboat transfer to Parrot Cay ($280–$580 RT), the 12% GHST, the
          10–15% resort service charge, and the $50–$120/day resort fees that the booking pages bury. We
          work bottom-up: four tiers, the five cost drivers, a full line-by-line table, four sample 7-night
          budgets at named hotels (Wymara through COMO Parrot Cay), the cheapest months, eight ways to spend
          less, and a head-to-head comparison with the Bahamas, St. Barths, and the Maldives. For the broader
          pre-trip checklist see our{' '}
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
            <li><a className="hover:text-rose-500" href="#samples">Four real 7-night sample budgets</a></li>
            <li><a className="hover:text-rose-500" href="#season">Best months for a T&C honeymoon</a></li>
            <li><a className="hover:text-rose-500" href="#tips">8 ways to spend meaningfully less</a></li>
            <li><a className="hover:text-rose-500" href="#hidden">Hidden costs (12% GHST, 10–15% service)</a></li>
            <li><a className="hover:text-rose-500" href="#compare">T&C vs. Bahamas vs. St. Barths vs. Maldives</a></li>
            <li><a className="hover:text-rose-500" href="#faq">Frequently asked questions</a></li>
          </ol>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6">
        <FlightSearchWidget destination="Turks and Caicos" />
      </div>

      {/* 1. TL;DR */}
      <section id="tldr-tiers" className="bg-zinc-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-3">Section 01</p>
          <h2 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-6 leading-tight">
            The four budget tiers
          </h2>
          <p className="text-zinc-700 text-base leading-relaxed mb-10">
            Seven nights. Two people. All-in — flights from a major US hub, resort, transfers, meals, the
            12% GHST, the 10–15% service charge, modest excursions. The tier is set by which resort you
            book; everything else flows from that decision.
          </p>

          <div className="overflow-x-auto -mx-6 px-6">
            <table className="w-full text-sm bg-white border border-zinc-100 rounded-2xl overflow-hidden">
              <thead className="bg-zinc-100 text-zinc-700">
                <tr>
                  <th className="text-left p-4 font-semibold">Tier</th>
                  <th className="text-left p-4 font-semibold">7-night total</th>
                  <th className="text-left p-4 font-semibold">Sample resorts</th>
                  <th className="text-left p-4 font-semibold">Location</th>
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
                    <td className="p-4 text-zinc-700">{t.location}</td>
                    <td className="p-4 text-zinc-700">{t.room}</td>
                    <td className="p-4 text-zinc-700">{t.meal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-zinc-600 text-sm leading-relaxed mt-6 italic">
            All numbers in 2026 USD, for two people, including 12% GHST, 10–15% service charge, and resort
            fees. Excludes premium-cabin flight upgrades and credit-card-point redemptions, which can shift
            the top-line by $1,500–$5,000 in either direction.
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
          Almost every dollar of variance between a $12k and a $30k Turks and Caicos honeymoon is explained
          by these five decisions. Understand them before you start price-shopping rooms — most couples
          overspend because they optimize the room rate while ignoring the four bigger levers.
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
            Every line item that hits a typical 7-night Turks and Caicos honeymoon, with 2026 ranges. Build
            your own number by selecting one row from each category — flights, resort, transfer, meal
            upgrade — then adding the fixed lines (GHST, service charge, resort fees, insurance).
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
            The "+12% GHST + 10–15% service" combination is the single most overlooked figure in T&C
            budgeting. A $200 dinner becomes $244–$254. A $1,000 nightly suite becomes $1,250. Always apply
            the 22–28% uplift mentally before you sign.
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
          Four named-hotel honeymoons we have priced in 2026, with line items and the season we recommend
          for each tier. Use them as a calibration: find the one closest to your dream and adjust line by
          line.
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
          <Link href="/destinations/turks-and-caicos" className="text-rose-500 hover:text-rose-600 underline underline-offset-2">
            Turks and Caicos destination guide
          </Link>{' '}
          and the broader{' '}
          <Link href="/best/honeymoon-resorts-2026" className="text-rose-500 hover:text-rose-600 underline underline-offset-2">
            best honeymoon resorts of 2026
          </Link>{' '}
          edit.
        </p>
      </section>

      {/* 5. SEASON */}
      <section id="season" className="bg-zinc-50 py-20">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-3">Section 05</p>
          <h2 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-6 leading-tight">
            Best months for a Turks and Caicos honeymoon
          </h2>
          <p className="text-zinc-700 text-base leading-relaxed mb-10">
            Turks has two seasons — peak-dry (December to April) and shoulder-wet (June to October) — but
            in practice the price spread is sharper than the weather spread. The cheapest weeks (September
            and early October) overlap peak hurricane probability; the value sweet spot is late April
            through early June, when rates drop 20–25% and hurricane risk is statistically zero.
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
              <strong>The single rule:</strong> avoid December 22 to January 5 unless you have a specific
              reason to be there. Rates double, minimums extend to seven nights, and every Grace Bay 5★
              adds a mandatory $400–$600/pp NYE gala. If your wedding falls in mid-December, push the
              honeymoon to mid-January or to early November the following year.
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
          Each of these saves at least $400 per couple. Stack four or five and the same Turks and Caicos
          experience drops $2,500–$5,500 without losing anything that matters.
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
          The skip-the-AI math is the highest-leverage tip on this list for couples wavering between
          Beaches and a 5★ Grace Bay product. See our deep-dive on the{' '}
          <Link href="/experiences/all-inclusive" className="text-rose-500 hover:text-rose-600 underline underline-offset-2">
            all-inclusive resort experience
          </Link>{' '}
          for the full breakdown — including the case against AI on Grace Bay specifically.
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
            Nine line items that quietly add 22–28% to the headline number. Read this before you book —
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
          Turks and Caicos vs. Bahamas vs. St. Barths vs. Maldives
        </h2>
        <p className="text-zinc-700 text-base leading-relaxed mb-10">
          Four beach honeymoon destinations at roughly comparable spend bands. Turks wins on Grace Bay&apos;s
          beach quality and the density of credible 5★ properties in a 12-mile strip; the Bahamas wins on
          access and inventory; St. Barths wins on European chic and food; the Maldives wins on the iconic
          overwater photo.
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
          <Link href="/destinations/bahamas" className="text-rose-500 hover:text-rose-600 underline underline-offset-2">
            Bahamas
          </Link>
          ,{' '}
          <Link href="/bahamas-honeymoon-cost" className="text-rose-500 hover:text-rose-600 underline underline-offset-2">
            Bahamas honeymoon cost
          </Link>
          , the{' '}
          <Link href="/maldives-honeymoon-cost" className="text-rose-500 hover:text-rose-600 underline underline-offset-2">
            Maldives cost guide
          </Link>
          , or run a head-to-head on our{' '}
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
          src="/images/hotels/amanyara-turks-caicos/hero.webp"
          alt="Find your Turks and Caicos honeymoon hotel"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
        <div className="relative max-w-4xl mx-auto px-6 text-white">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-300 mb-4">Now, the resort</p>
          <h2 className="font-display text-4xl sm:text-5xl leading-tight mb-5">
            Find the Turks and Caicos resort <br className="hidden sm:block" />that fits your budget.
          </h2>
          <p className="text-white/70 text-base leading-relaxed mb-8 max-w-xl">
            Take the 6-step quiz — five lifestyle questions and we return three matched Turks and Caicos
            resorts at your tier, with vetted hotel notes, real prices, and the inter-island logistics
            figured out. Sixty seconds.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/quiz"
              className="bg-rose-500 hover:bg-rose-600 text-white font-semibold text-sm px-8 py-4 rounded-full transition-colors shadow-xl"
            >
              Take the quiz →
            </Link>
            <Link
              href="/destinations/turks-and-caicos"
              className="border border-white/30 backdrop-blur-md bg-white/5 hover:bg-white/10 text-white font-semibold text-sm px-8 py-4 rounded-full transition-colors"
            >
              See every Turks and Caicos resort
            </Link>
          </div>
        </div>
      </section>
    </article>
  )
}
