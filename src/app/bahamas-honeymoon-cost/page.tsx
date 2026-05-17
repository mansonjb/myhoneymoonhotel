import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { buildAlternates } from '@/lib/alternates'
import AuthorByline from '@/components/AuthorByline'

export const metadata: Metadata = {
  title: 'Bahamas Honeymoon Cost: 2026 Real Numbers ($5k–$60k+)',
  description:
    'How much a Bahamas honeymoon really costs in 2026. Four budget tiers, line-by-line breakdown, three real 7-night sample budgets (Rosewood Baha Mar to Kamalame Cay), hidden costs (12% VAT), best months, and 8 ways to spend less.',
  alternates: buildAlternates('/bahamas-honeymoon-cost'),
  openGraph: {
    title: 'Bahamas Honeymoon Cost — 2026 Real Numbers',
    description:
      'Four budget tiers ($5k–$60k+), real hotel breakdowns, hidden costs (12% VAT, resort fees), best islands for couples, and 8 ways to spend less on a Bahamas honeymoon.',
    url: 'https://myhoneymoonhotel.com/bahamas-honeymoon-cost',
    siteName: 'MyHoneymoonHotel',
    images: [
      {
        url: 'https://myhoneymoonhotel.com/images/hotels/the-ocean-club-four-seasons-bahamas/hero.webp',
        width: 1600,
        height: 900,
        alt: 'The Ocean Club, A Four Seasons Resort — the canonical Bahamas luxury honeymoon image',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bahamas Honeymoon Cost — 2026 Real Numbers',
    description: 'Four budget tiers, real hotel breakdowns, hidden costs, best months, and 8 ways to spend less.',
    images: ['https://myhoneymoonhotel.com/images/hotels/the-ocean-club-four-seasons-bahamas/hero.webp'],
  },
}

const FAQS: { q: string; a: string }[] = [
  {
    q: 'How much does a Bahamas honeymoon cost on average?',
    a: 'For 7 nights all-in (flights, resort, transfers, food, the 12% VAT, tips), the typical 2026 US couple spends $7,500 to $11,000 on a "comfortable mid-range" Bahamas honeymoon at a 4-star Nassau or Grand Bahama beachfront. Drop to $5,000 with an Atlantis room rate and the cruise-style buffet. Push to $16,000–$22,000 for a true 5-star like Rosewood Baha Mar or The Cove at Atlantis. Ultra-luxury (The Ocean Club Four Seasons, Kamalame Cay, The Dunmore on Harbour Island, Pink Sands) starts at $22,000 and runs past $60,000 for the headline suites in peak weeks.',
  },
  {
    q: 'What is the best island in the Bahamas for a honeymoon?',
    a: 'Harbour Island for the pink-sand beach and the boutique-hotel romance (The Dunmore, Pink Sands, Coral Sands, Rock House) — this is the "Condé Nast Bahamas". Eleuthera for total isolation (The Cove, The Other Side, Tiamo on South Andros). Paradise Island, Nassau for full-service 5-star ease (The Ocean Club, Rosewood Baha Mar, The Cove Atlantis). Exumas for the iconic photo (swimming pigs, Staniel Cay) but limited room inventory. Skip Grand Bahama for honeymoon — it is more affordable but the post-hurricane recovery is uneven.',
  },
  {
    q: 'Is the Bahamas honeymoon better all-inclusive or à la carte?',
    a: 'À la carte at the small luxury properties (Kamalame Cay, The Dunmore, Pink Sands), all-inclusive only at the Atlantis Cove tier and on Sandals-style packages. Unlike the Maldives, the Bahamas has restaurants outside your resort — Harbour Island, Nassau, and Eleuthera each have proper dinner scenes. A meal plan locks you onto property; the better honeymoon move is half-board plus 2–3 off-property dinners across the week. Budget $80–$160 per couple for a Harbour Island dinner.',
  },
  {
    q: 'When is the cheapest time for a Bahamas honeymoon?',
    a: 'Mid-August to mid-October is the cheapest window — 30 to 40% off peak rates — but it overlaps the Atlantic hurricane season. Late April, May, and early June are the sweet spot: rates drop 20–25% versus February peak, hurricane risk is essentially zero, and the water is already 80°F (27°C). The absolute fortnight to avoid is December 23 to January 4 — rates can triple, two-night minimums become five-night, and Atlantis adds a mandatory $300/pp New Year gala dinner.',
  },
  {
    q: 'Are there hidden costs at Bahamas resorts?',
    a: 'Yes. The 12% VAT (raised from 10% in 2022) is applied to every line on every bill. Most resorts also add an 18% gratuity + service charge and a $50–$90/day "resort fee" that bundles Wi-Fi, beach chairs, and water sports you may not use. Departure tax ($29/pp) is now bundled into airline tickets but check your itinerary. Inter-island flights (Nassau to Harbour Island, Nassau to Eleuthera) run $200–$320 per person round-trip. Budget another 15–20% on top of the headline room rate.',
  },
  {
    q: 'Is the Bahamas cheaper than Turks and Caicos for a honeymoon?',
    a: 'Slightly, for the equivalent tier. A mid-tier 5-star beachfront in the Bahamas runs $650–$1,100/night versus $850–$1,400/night in Turks and Caicos. Flights to Nassau are cheaper and more frequent than flights to Providenciales from most US cities. Turks and Caicos wins on beach quality (Grace Bay is, by most measures, the best beach in the Caribbean). The Bahamas wins on variety — 700 islands, every honeymoon style available, half the price of Turks at the entry tier.',
  },
  {
    q: 'How long is the flight to the Bahamas from the US and Europe?',
    a: 'From Miami, 1 hour. From New York or Boston, 3 to 3.5 hours direct. From Atlanta or Charlotte, 2.5 hours direct. From Los Angeles, 5 hours direct on JetBlue. From London or Paris, 9 to 10 hours via Miami or New York — no direct service to Nassau from Europe. Add 30 to 45 minutes for the puddle-jumper hop to Harbour Island (via North Eleuthera), Exuma, or Andros. The same-day connection rarely fails.',
  },
  {
    q: 'Do we need a passport for the Bahamas?',
    a: 'Yes for air arrivals — US and Canadian citizens need a valid passport (not a passport card, despite what older advice suggests). EU, UK, and Australian visitors do not need a visa for stays under 90 days. A return ticket and proof of accommodation are required at immigration. The Bahamas Health Travel Visa is no longer required as of 2022. Customs forms are completed on the flight and submitted at Lynden Pindling International (Nassau) or your port of entry.',
  },
  {
    q: 'Can we use credit-card points for a Bahamas honeymoon?',
    a: 'Yes — and the Bahamas is one of the highest-leverage point destinations because the flights are short and the hotels are inside the major chain programs. Rosewood Baha Mar (Hyatt Privé via FHR), The Cove Atlantis (Marriott Bonvoy as part of the Autograph Collection in select years), and Four Seasons Ocean Club (Amex FHR + Virtuoso) all unlock 4th-night-free and resort credits. Flights New York to Nassau price as 10,000–15,000 Avios one-way, or use Chase Sapphire points at 1.5cpp.',
  },
  {
    q: 'Is the Bahamas worth the cost for a honeymoon?',
    a: 'For US couples who want a 3-hour flight, a 5-star beach, and zero culture shock, yes — unequivocally. The Bahamas is the most accessible Caribbean honeymoon destination on the US East Coast, with proper luxury properties at every tier from $300/night Atlantis tower rooms to $4,500/night Ocean Club bungalows. For European couples or couples seeking exotic remove from American culture, the Caribbean equivalent of the Maldives (Turks) is a better fit. The Bahamas wins on accessibility and inventory.',
  },
]

const TIER_TABLE = [
  {
    tier: 'Budget',
    range: '$5,000 – $8,000',
    examples: 'Atlantis tower room · Grand Lucayan',
    island: 'Paradise Island / Grand Bahama',
    room: 'Resort tower room',
    meal: 'Room only or basic AI',
  },
  {
    tier: 'Mid-range',
    range: '$8,500 – $14,000',
    examples: 'The Cove Atlantis · Sandals Royal Bahamian',
    island: 'Paradise Island / Nassau',
    room: 'Suite or junior suite',
    meal: 'Half-board or all-inclusive',
  },
  {
    tier: 'Luxury',
    range: '$15,000 – $25,000',
    examples: 'Rosewood Baha Mar · Pink Sands · Coral Sands · Rock House (sister property)',
    island: 'Cable Beach / Harbour Island',
    room: 'Beachfront suite or cottage',
    meal: 'À la carte, BB or HB',
  },
  {
    tier: 'Ultra-luxury',
    range: '$25,000 – $60,000+',
    examples: 'The Ocean Club Four Seasons · The Dunmore · Kamalame Cay · The Cove Eleuthera',
    island: 'Paradise Island / Harbour Island / Eleuthera / Andros',
    room: 'Private cottage, beach villa, or two-bedroom suite',
    meal: 'Bespoke or full-board on small islands',
  },
]

const COST_DRIVERS = [
  {
    title: 'Island choice',
    detail:
      'The single biggest variable. Nassau and Paradise Island are 1.6x cheaper per night than Harbour Island for an equivalent room tier — and 2x cheaper than Andros private-island resorts. Harbour Island commands a premium because inventory is tiny (fewer than 250 luxury rooms across the whole island), and the pink sand is genuinely unique on earth. Eleuthera proper is the value play: same Atlantic-Caribbean geography as Harbour Island, half the room rates.',
  },
  {
    title: 'Season and date',
    detail:
      'Peak (December 23 to January 4 and Presidents Week in February) runs 2.2x the September low. High season (mid-December through mid-April) is 1.5–1.8x shoulder. Late April through early June is the price sweet spot — water is 80°F, hurricane risk is functionally zero, and rates drop 20–25%. August through mid-October is cheapest but coincides with peak hurricane probability — only viable if your travel insurance has a CFAR clause.',
  },
  {
    title: 'Resort tier — chain 5-star vs. boutique cottage',
    detail:
      'A Cable Beach 5-star (Rosewood Baha Mar, The Cove at Atlantis) runs $650–$1,200/night for a base suite — full-service, every amenity, 2,000+ rooms across the campus. A Harbour Island boutique cottage at The Dunmore, Pink Sands, or Coral Sands runs $900–$1,800/night — 18 to 35 cottages total, every meal is a relationship with the chef, no waterslide. The chain product wins on price-per-amenity; the boutique wins on what couples actually remember.',
  },
  {
    title: 'Inter-island transfer',
    detail:
      'If you stay on Paradise Island the only "transfer" is a $35 cab from Nassau airport. Harbour Island requires Nassau → North Eleuthera flight ($180–$280/pp RT on Bahamasair or Pineapple Air) + a $7/pp water taxi. Andros (Kamalame Cay) and Eleuthera private islands run $300–$450/pp RT via twin-prop. Exumas (Staniel Cay) require a Watermakers Air or Flamingo charter — $400–$700/pp RT. Add $300–$900 per couple in transfers as soon as you leave Nassau.',
  },
  {
    title: 'Room category and view',
    detail:
      'A "garden view" room at Rosewood Baha Mar runs $620/night; the equivalent floor plan with a beachfront view runs $890/night. A "Coral Tower" Atlantis room is $380; the same square footage in "The Cove" tower is $1,150. On Harbour Island, an interior cottage at The Dunmore runs $1,100 versus $1,750 for the beach-cottage row. Always check whether "ocean view" means partial or full — the photo on the booking page is rarely from a base-tier room.',
  },
]

const LINE_ITEMS = [
  ['Flights from US East Coast (economy, 2pax)', '$700 – $1,800'],
  ['Flights from US West Coast (economy, 2pax)', '$1,400 – $2,800'],
  ['Flights from Europe (economy, 2pax)', '$1,400 – $2,600'],
  ['Inter-island hop, Nassau → Harbour Island or Eleuthera (2pax RT)', '$360 – $560'],
  ['Inter-island hop, Nassau → Andros or Exumas (2pax RT)', '$600 – $1,400'],
  ['Resort, 7 nights, 4-star Paradise Island room', '$2,800 – $4,500'],
  ['Resort, 7 nights, 5-star Cable Beach / Cove Atlantis suite', '$6,500 – $10,500'],
  ['Resort, 7 nights, boutique Harbour Island cottage', '$8,500 – $14,500'],
  ['Resort, 7 nights, ultra-luxury Ocean Club / Kamalame Cay villa', '$18,000 – $42,000'],
  ['Half-board upgrade (2pax × 7 nights)', '$900 – $1,600'],
  ['All-inclusive upgrade (2pax × 7 nights)', '$2,400 – $3,800'],
  ['Excursions — Exuma pigs day trip, snorkel, sunset cruise', '$400 – $900'],
  ['Spa — 1 couples 60-min massage', '$320 – $560'],
  ['Off-property dinners (2–3 across the week, Harbour Island)', '$300 – $600'],
  ['Honeymoon photoshoot (1 hour, beach)', '$650 – $1,800'],
  ['12% VAT applied to every on-island bill', '+12% uplift'],
  ['18% gratuity / service charge on most resort bills', '+18% uplift'],
  ['Resort fees ($50–$90/day × 7)', '$350 – $630'],
  ['Travel insurance with CFAR ($12k trip value)', '$240 – $560'],
]

const SAMPLE_BUDGETS = [
  {
    name: 'Mid-range — The Cove at Atlantis',
    total: '$10,400',
    season: 'Late May, 7 nights',
    bullets: [
      ['Flights (economy, NYC → NAS direct, 2pax)', '$900'],
      ['Resort, 7 nights, Cove ocean-view suite', '$5,200'],
      ['Breakfast included, plus 3 dinners on-property', '$680'],
      ['Atlantis water park (included), aquarium, Predator Lagoon', 'Included'],
      ['Couples spa day at Mandara', '$580'],
      ['Sunset cruise + Blue Lagoon snorkel', '$420'],
      ['12% VAT + 18% gratuity uplift on extras', '$1,150'],
      ['Resort fees, taxis, tips, buffer', '$1,470'],
    ],
    note:
      'The Cove sits on the quieter, adult-focused side of the Atlantis campus — separate pools, separate beach, separate restaurants — while still giving you full access to the waterpark. Late May hits 82°F water, zero hurricane risk, and rates that are 20% below the February peak. The textbook "I want a 5-star, I want it easy" Bahamas honeymoon.',
  },
  {
    name: 'Luxury — Rosewood Baha Mar',
    total: '$16,800',
    season: 'Early November, 7 nights',
    bullets: [
      ['Flights (premium economy, BOS → NAS direct)', '$1,400'],
      ['Resort, 7 nights, beachfront suite', '$9,100'],
      ['Breakfast at Costa Cabana included via Virtuoso', 'Included'],
      ['Dune (Jean-Georges) dinner once, plus 3 other on-property dinners', '$920'],
      ['Sense Spa couples ritual + cabana day', '$780'],
      ['Bond-style James Bond Beach excursion + jet ski', '$520'],
      ['12% VAT + service charge uplift', '$1,890'],
      ['Resort fees, transfers, tips, buffer', '$2,190'],
    ],
    note:
      'Rosewood Baha Mar is the most thoughtfully designed luxury property to open in the Bahamas in a decade — only 233 rooms, a beach club that feels Côte d\'Azur, and the best dining bench in the country (Jean-Georges Vongerichten, Marcus Samuelsson, Daniel Boulud all operate under one resort). Early November threads the needle: post-hurricane, pre-Thanksgiving, rates 25% below February.',
  },
  {
    name: 'Ultra-luxury — The Ocean Club, A Four Seasons Resort',
    total: '$32,400',
    season: 'Mid-February, 7 nights',
    bullets: [
      ['Flights (business class points + cash)', '$2,800'],
      ['Resort, 7 nights, garden view suite', '$15,400'],
      ['Breakfast included via FHR/Virtuoso', 'Included'],
      ['Dune by Jean-Georges (the original) dinner three nights', '$1,650'],
      ['Versailles Garden private dinner one night', '$1,200'],
      ['Couples massage at the Balinese spa pavilion', '$680'],
      ['Private boat to swimming pigs at Allen\'s Cay', '$2,400'],
      ['12% VAT + 18% gratuity on every line', '$3,720'],
      ['Resort fees, tips, buffer', '$4,550'],
    ],
    note:
      'The Ocean Club is the original Bahamas luxury property — built by Huntington Hartford in 1962, restored by Four Seasons in 2018. Garden View is the smallest room and still 540 sq ft, with the Versailles Gardens and an Atlantic beach 90 seconds away. Mid-February is peak season but the resort is at its absolute best — cool evenings, daytime sun, and the staff:guest ratio passes 2:1.',
  },
  {
    name: 'Private-island ultra-luxury — Kamalame Cay (Andros)',
    total: '$38,600',
    season: 'Early December, 7 nights',
    bullets: [
      ['Flights (economy NYC → NAS, then Andros twin-prop)', '$1,600'],
      ['Resort, 7 nights, beachfront villa', '$22,400'],
      ['All-inclusive meal plan (3 meals + drinks)', '$3,920'],
      ['Bonefishing half-day with guide', '$880'],
      ['Reef snorkel + andros barrier reef dive', '$640'],
      ['Couples spa over the water', '$720'],
      ['12% VAT + gratuity', '$3,280'],
      ['Transfers + tips + buffer', '$5,160'],
    ],
    note:
      'Kamalame Cay is the Bahamas version of a Maldives private-island honeymoon — 20 cottages on a 96-acre cay off Andros, the world\'s third-largest barrier reef immediately offshore, and a single chef cooking three meals a day for a maximum of 40 guests. Early December hits before the holiday surcharge but after the hurricane window — 30% cheaper than Christmas week, same weather.',
  },
]

const SEASONS = [
  { months: 'November – mid-December', verdict: 'Best', detail: 'Post-hurricane, pre-holiday. Water is 79°F, air is 78°F, rates are 20–30% below peak. The ideal Bahamas honeymoon window if your wedding allows.' },
  { months: 'Dec 23 – Jan 4', verdict: 'Peak — avoid', detail: 'Holiday surcharge fortnight. Rates 2.2x shoulder, five-night minimums at the boutique properties, mandatory NYE gala dinners. If your wedding is in early December, push the honeymoon to mid-January.' },
  { months: 'Mid-January – mid-April', verdict: 'High season', detail: 'Best weather, biggest crowds, peak prices. Presidents Week (mid-February) and Easter are mini-spikes. Book 6–9 months ahead for Harbour Island and Ocean Club.' },
  { months: 'Late April – early June', verdict: 'Best value', detail: 'The price sweet spot — rates drop 20–25% versus February, water is already 80°F, hurricane risk is statistically zero. The single best window for a value-conscious luxury Bahamas honeymoon.' },
  { months: 'June – mid-August', verdict: 'Good value, building risk', detail: 'Rates continue to drop. Hurricane season formally starts June 1 but storms rarely materialize before August. European summer holidays push Nassau hotels (not the boutique islands) toward 75% occupancy.' },
  { months: 'Mid-August – October', verdict: 'Cheapest, riskiest', detail: 'Cheapest weeks of the year — 30–40% off peak — but this is peak hurricane probability. Only book with a CFAR insurance policy. Some boutique properties (Pink Sands, Coral Sands) close September.' },
]

const TIPS = [
  {
    title: 'Travel late April, May, or early June',
    detail:
      'The single highest-leverage tip on this list. Hurricane risk is statistically zero, water is 80°F, and rates drop 20–25% from February peak. A $24,000 Ocean Club honeymoon in February is a $19,000 honeymoon in mid-May — exact same product, the difference is calendar.',
  },
  {
    title: 'Book Eleuthera over Harbour Island',
    detail:
      'The Cove Eleuthera and The Other Side give you the same pink-sand-adjacent geography as The Dunmore or Pink Sands at 35–50% less per night. You give up Harbour Island\'s walkable village and Sip Sip\'s lunch crowd — but you gain total privacy. Many Harbour Island regulars now use Eleuthera as their honeymoon move and visit Harbour Island only for a day.',
  },
  {
    title: 'Use Virtuoso, FHR, or Hyatt Privé for the breakfast and resort credit',
    detail:
      'Almost every 5-star in the Bahamas (Rosewood Baha Mar, The Ocean Club, The Cove at Atlantis, Pink Sands when available) is bookable through Virtuoso or Amex Fine Hotels & Resorts. The package adds free breakfast (worth $80–$120/day for two), a $100–$200 resort credit, and a room upgrade at check-in if available. Cost is identical to a direct booking — there is no reason to book direct.',
  },
  {
    title: 'Skip the all-inclusive meal plan unless you are at a remote private island',
    detail:
      'On Paradise Island, Cable Beach, and Harbour Island there is a full off-property restaurant scene — Compass Point, Sip Sip, The Landing, Da Conch Shack. An AI plan locks you onto the resort for $200–$330/couple/day and you miss the food culture. Book half-board and use the $80–$160/couple Harbour Island dinner economics to your advantage. The exception is Kamalame Cay, Tiamo, and Staniel Cay where there is genuinely no alternative.',
  },
  {
    title: 'Combine Nassau + Harbour Island into one trip',
    detail:
      'The most-loved Bahamas honeymoon structure: 3 nights at Rosewood Baha Mar or The Ocean Club for the spa-and-room-service introduction, 4 nights at The Dunmore or Coral Sands for the pink-sand boutique finish. The $300–$500 inter-island flight is a rounding error against the experiential payoff of two completely different Bahamas.',
  },
  {
    title: 'Use credit-card points for the short, premium flights',
    detail:
      'New York to Nassau is 1,100 miles — the cheapest premium-cabin redemption in the Western Hemisphere. JetBlue Mint runs 25,000 TrueBlue points one-way; American business runs 25,000–30,000 AAdvantage miles. A single Chase Sapphire Preferred or Amex Gold sign-up bonus covers both seats. The 3-hour flight in lie-flat is a meaningful "honeymoon starts here" moment.',
  },
  {
    title: 'Travel with a Honeyfund / Zola registry for the inter-island and excursions',
    detail:
      'Frame each gift as an experience: "our flight to Harbour Island", "the swimming-pigs day trip", "our spa day at Sense". 60% of US couples now use a honeymoon registry — guests prefer experience-gifting to china. We cover this in detail at /how-to-plan-a-honeymoon.',
  },
  {
    title: 'Stay 7 nights, not 10',
    detail:
      'The Bahamas does not reward long trips the way the Maldives or Bora Bora does — there is not a private-island isolation that compounds across week two. Most honeymooners hit diminishing returns at 7 nights. Banking the saved 3 nights into a tier upgrade (Atlantis tower → Cove suite, or Rosewood deluxe → beachfront) buys you a meaningfully better experience.',
  },
]

const HIDDEN_COSTS = [
  ['12% VAT', 'Applied to every line on every resort bill — food, drink, spa, excursions, room rate. Raised from 10% in 2022. Non-negotiable, non-removable.'],
  ['18% gratuity / service charge', 'Layered on top of VAT at most full-service resorts. A $200 dinner becomes a $266 dinner after VAT + service. Always quoted "+++" in the small print.'],
  ['Resort fees', '$50 to $90 per day, bundling Wi-Fi, beach chairs, and water sports you may not use. The Cove at Atlantis, Rosewood Baha Mar, and the Sandals properties all charge. Boutique Harbour Island properties typically do not.'],
  ['Inter-island flights', 'Nassau to Harbour Island, Eleuthera, Andros, or Exumas runs $180 to $450 per person round-trip. Bahamasair, Pineapple Air, Western Air, and Flamingo Air operate the bulk of routes. Charters from Watermakers Air to Staniel Cay run $700–$1,400 per couple round-trip.'],
  ['Atlantis day passes', 'If you stay outside the Atlantis campus and want the waterpark, day passes run $185/person — easy $370/day for two. Cove and Reef guests have included access; outside guests do not.'],
  ['Excursions', '$150 to $400 per person for the swimming-pigs day trip from Nassau, $80–$150 per person for a sunset sail, $120–$220 per person for a Blue Lagoon snorkel. Plan 2–3 across a 7-night stay.'],
  ['Off-property dinners', '$80 to $160 per couple at Sip Sip (Harbour Island), Da Conch Shack (Nassau), The Landing (Harbour Island), Compass Point. Worth every dollar — these are the meals you will remember.'],
  ['Couples spa', '$320 to $560 for a 60-minute couples massage at a 5-star property. The Ocean Club and Rosewood spa rituals reach $800–$1,200 for the signature half-day.'],
  ['Tips beyond the gratuity', 'The 18% service charge does not always reach the housekeeping or the bellman. Plan $80–$140 across 7 nights for direct tips to the people you actually interact with.'],
]

const COMPARISON = [
  { dest: 'Bahamas', total: '$8k – $20k', flight: '3h from NYC / 1h from MIA', signature: 'Pink-sand beaches, every tier, easiest US escape' },
  { dest: 'Turks and Caicos', total: '$11k – $22k', flight: '3.5h from NYC / 1.5h from MIA', signature: 'Grace Bay (best Caribbean beach), boutique scene' },
  { dest: 'St. Barths', total: '$18k – $35k', flight: '4.5h from NYC + ferry from SXM', signature: 'European chic, French food, smallest scene' },
  { dest: 'Maldives', total: '$14k – $24k', flight: '18–22h from US East', signature: 'Overwater villa, glass floor, private island' },
]

export default function BahamasHoneymoonCostPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Bahamas Honeymoon Cost: 2026 Real Numbers',
    description:
      'How much a Bahamas honeymoon really costs in 2026 — four budget tiers, line-by-line breakdown, four real 7-night sample budgets, hidden costs (12% VAT), and 8 ways to spend less.',
    image: 'https://myhoneymoonhotel.com/images/hotels/the-ocean-club-four-seasons-bahamas/hero.webp',
    author: { '@type': 'Organization', name: 'My Honeymoon Hotel', url: 'https://myhoneymoonhotel.com/about' },
    publisher: {
      '@type': 'Organization',
      name: 'My Honeymoon Hotel',
      logo: { '@type': 'ImageObject', url: 'https://myhoneymoonhotel.com/icon.png' },
    },
    datePublished: '2026-02-10',
    dateModified: '2026-05-11',
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://myhoneymoonhotel.com/bahamas-honeymoon-cost' },
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
        name: 'Bahamas Honeymoon Cost',
        item: 'https://myhoneymoonhotel.com/bahamas-honeymoon-cost',
      },
    ],
  }

  const speakableSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://myhoneymoonhotel.com/bahamas-honeymoon-cost#speakable',
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
          src="/images/hotels/the-ocean-club-four-seasons-bahamas/hero.webp"
          alt="The Ocean Club, A Four Seasons Resort — Bahamas luxury honeymoon"
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
            Bahamas honeymoon<br />cost — 2026.
          </h1>
          <p className="text-white/75 text-base sm:text-lg max-w-2xl leading-relaxed">
            How much a Bahamas honeymoon really costs in 2026. Four budget tiers from $5k to $60k+, the five
            cost drivers, line-by-line breakdowns, four real 7-night sample budgets at named hotels, the 12% VAT
            nobody warns you about, the cheapest months, and the eight ways to spend meaningfully less without
            losing the magic.
          </p>
        </div>
      </section>

      {/* BREADCRUMB */}
      <nav aria-label="Breadcrumb" className="max-w-4xl mx-auto px-6 pt-8 text-xs text-zinc-500">
        <Link href="/" className="hover:text-zinc-900">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-zinc-900">Bahamas Honeymoon Cost</span>
      </nav>

      <div className="max-w-4xl mx-auto px-6">
        <AuthorByline />
      </div>

      <div className="max-w-3xl mx-auto px-6">
        <aside id="tldr" className="my-8 p-6 rounded-2xl bg-rose-50/60 border border-rose-100">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-2">TL;DR</p>
          <p className="text-zinc-900 text-lg leading-relaxed font-medium">
            A Bahamas honeymoon costs $4,500 to $40,000+ for 7 nights, 2 people. Nassau/Paradise Island resorts (Atlantis, Baha Mar, Rosewood) run $5k–$15k with a 50-minute flight from Miami. Family-island escapes — Eleuthera's Pink Sands, the Exumas, Harbour Island — hit $10k–$25k. Ultra-luxury private-island stays at Musha Cay or Kamalame Cay reach $40k+. Add 12% VAT and 15–20% mandatory resort gratuity to every quote.
          </p>
          <ul className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-zinc-600">
            <li><strong className="block text-zinc-900 text-xs uppercase tracking-wider mb-1">For</strong>Quick-flight US couples wanting pink sand + outer islands</li>
            <li><strong className="block text-zinc-900 text-xs uppercase tracking-wider mb-1">Cost</strong>$4.5k–$40k+</li>
            <li><strong className="block text-zinc-900 text-xs uppercase tracking-wider mb-1">Best month</strong>Mid-Nov to Mid-Apr</li>
          </ul>
        </aside>
      </div>

      {/* INTRO + TL;DR */}
      <section className="max-w-3xl mx-auto px-6 py-14 prose prose-zinc">
        <p className="text-lg text-zinc-700 leading-relaxed">
          A Bahamas honeymoon in 2026 costs anywhere from <strong>$5,000 to $60,000+</strong> all-in for two
          people, seven nights. That spread is not marketing — it is the honest range across 700 islands and
          every product tier from a tower room at Atlantis to a private cottage on Kamalame Cay. Where you
          land inside the range depends on five concrete decisions: which island, which resort tier, which
          season, which transfer chain, and which room category.
        </p>
        <p className="text-base text-zinc-700 leading-relaxed mt-5">
          This guide is the cost breakdown we wish someone had handed us. Real 2026 prices, real hotels, real
          line items — including the inter-island puddle-jumper ($180–$280/pp RT), the 12% VAT (raised from
          10% in 2022), the 18% resort gratuity, and the $50–$90/day resort fees that the booking pages bury.
          We work bottom-up: four tiers, the five cost drivers, a full line-by-line table, four sample
          7-night budgets at named hotels (The Cove Atlantis through Kamalame Cay), the best months, eight
          ways to spend less, and a head-to-head comparison with Turks and Caicos, St. Barths, and the
          Maldives. For the broader pre-trip checklist see our{' '}
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
            <li><a className="hover:text-rose-500" href="#season">Best months for a Bahamas honeymoon</a></li>
            <li><a className="hover:text-rose-500" href="#tips">8 ways to spend meaningfully less</a></li>
            <li><a className="hover:text-rose-500" href="#hidden">Hidden costs (12% VAT, 18% service)</a></li>
            <li><a className="hover:text-rose-500" href="#compare">Bahamas vs. Turks vs. St. Barths vs. Maldives</a></li>
            <li><a className="hover:text-rose-500" href="#faq">Frequently asked questions</a></li>
          </ol>
        </div>
      </section>

      {/* 1. TL;DR */}
      <section id="tldr-tiers" className="bg-zinc-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-3">Section 01</p>
          <h2 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-6 leading-tight">
            The four budget tiers
          </h2>
          <p className="text-zinc-700 text-base leading-relaxed mb-10">
            Seven nights. Two people. All-in — flights from a major US hub, resort, transfers, meals, the 12%
            VAT, the 18% gratuity, modest excursions. The tier is set by which island and which resort you
            book; everything else flows from those two decisions.
          </p>

          <div className="overflow-x-auto -mx-6 px-6">
            <table className="w-full text-sm bg-white border border-zinc-100 rounded-2xl overflow-hidden">
              <thead className="bg-zinc-100 text-zinc-700">
                <tr>
                  <th className="text-left p-4 font-semibold">Tier</th>
                  <th className="text-left p-4 font-semibold">7-night total</th>
                  <th className="text-left p-4 font-semibold">Sample resorts</th>
                  <th className="text-left p-4 font-semibold">Island</th>
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
                    <td className="p-4 text-zinc-700">{t.island}</td>
                    <td className="p-4 text-zinc-700">{t.room}</td>
                    <td className="p-4 text-zinc-700">{t.meal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-zinc-600 text-sm leading-relaxed mt-6 italic">
            All numbers in 2026 USD, for two people, including 12% VAT, 18% gratuity, and resort fees.
            Excludes premium-cabin flight upgrades and credit-card-point redemptions, which can shift the
            top-line by $1,500–$5,000 in either direction.
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
          Almost every dollar of variance between an $8k and a $25k Bahamas honeymoon is explained by these
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
      </section>

      {/* 3. LINE ITEMS */}
      <section id="line-items" className="bg-zinc-50 py-20">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-3">Section 03</p>
          <h2 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-6 leading-tight">
            Line-by-line cost breakdown
          </h2>
          <p className="text-zinc-700 text-base leading-relaxed mb-10">
            Every line item that hits a typical 7-night Bahamas honeymoon, with 2026 ranges. Build your own
            number by selecting one row from each category — flights, resort, transfer, meal upgrade — then
            adding the fixed lines (VAT, gratuity, resort fees, insurance).
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
            The "+12% VAT + 18% gratuity" combination is the single most overlooked figure in Bahamas
            budgeting. A $200 dinner becomes a $266 dinner. A $1,000 nightly suite becomes $1,300. Always
            apply the 30% uplift mentally before you sign.
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
          <Link href="/destinations/bahamas" className="text-rose-500 hover:text-rose-600 underline underline-offset-2">
            Bahamas destination guide
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
            Best months for a Bahamas honeymoon
          </h2>
          <p className="text-zinc-700 text-base leading-relaxed mb-10">
            The Bahamas has two seasons — peak-dry (December to April) and shoulder-wet (June to October) —
            but in practice the price spread is sharper than the weather spread. The cheapest weeks
            (mid-August through October) overlap peak hurricane probability; the value sweet spot is late
            April through early June, when rates drop 20–25% and hurricane risk is statistically zero.
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
              <strong>The single rule:</strong> avoid December 23 to January 4 unless you have a specific
              reason to be there. Rates triple, minimums extend to five nights, and Atlantis adds a mandatory
              $300/pp NYE gala. If your wedding falls in mid-December, push the honeymoon to mid-January or
              all the way to early November the following year — the romance does not depreciate.
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
          Each of these saves at least $400 per couple. Stack four or five and the same Bahamas experience
          drops $2,500–$5,000 without losing anything that matters.
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
          The all-inclusive math is the highest-leverage tip on this list for couples wavering between
          Atlantis Cove and Sandals. See our deep-dive on the{' '}
          <Link href="/experiences/all-inclusive" className="text-rose-500 hover:text-rose-600 underline underline-offset-2">
            all-inclusive resort experience
          </Link>{' '}
          for the full breakdown — and the case against AI on Harbour Island and Nassau.
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
            Nine line items that quietly add 20–30% to the headline number. Read this before you book — most
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
          Bahamas vs. Turks and Caicos vs. St. Barths vs. Maldives
        </h2>
        <p className="text-zinc-700 text-base leading-relaxed mb-10">
          Four beach honeymoon destinations at roughly comparable spend bands. The Bahamas wins on access and
          inventory; Turks wins on beach quality (Grace Bay); St. Barths wins on European chic and food; the
          Maldives wins on the iconic overwater photo and total isolation.
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
          <Link href="/destinations/turks-and-caicos" className="text-rose-500 hover:text-rose-600 underline underline-offset-2">
            Turks and Caicos
          </Link>
          ,{' '}
          <Link href="/turks-and-caicos-honeymoon-cost" className="text-rose-500 hover:text-rose-600 underline underline-offset-2">
            Turks and Caicos honeymoon cost
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
          src="/images/hotels/the-ocean-club-four-seasons-bahamas/hero.webp"
          alt="Find your Bahamas honeymoon hotel"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
        <div className="relative max-w-4xl mx-auto px-6 text-white">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-300 mb-4">Now, the resort</p>
          <h2 className="font-display text-4xl sm:text-5xl leading-tight mb-5">
            Find the Bahamas resort <br className="hidden sm:block" />that fits your budget.
          </h2>
          <p className="text-white/70 text-base leading-relaxed mb-8 max-w-xl">
            Take the 6-step quiz — five lifestyle questions and we return three matched Bahamas resorts at
            your tier, with vetted hotel notes, real prices, and the inter-island logistics figured out.
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
              href="/destinations/bahamas"
              className="border border-white/30 backdrop-blur-md bg-white/5 hover:bg-white/10 text-white font-semibold text-sm px-8 py-4 rounded-full transition-colors"
            >
              See every Bahamas resort
            </Link>
          </div>
        </div>
      </section>
    </article>
  )
}
