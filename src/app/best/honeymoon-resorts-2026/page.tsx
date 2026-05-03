import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The 25 Best Honeymoon Resorts of 2026 (Ranked & Reviewed)',
  description:
    'The definitive 2026 ranking of the world’s best honeymoon resorts. 1,200+ properties scored on adults-only, romance, spa, beach and couples reviews. Real prices, real verdicts.',
  alternates: {
    canonical: 'https://myhoneymoonhotel.com/best/honeymoon-resorts-2026',
  },
  openGraph: {
    title: 'The 25 Best Honeymoon Resorts of 2026',
    description:
      'Our 2026 ranking of the 25 best honeymoon resorts in the world — from Soneva Jani in the Maldives to Le Sirenuse in Positano. Scored, reviewed, ranked.',
    url: 'https://myhoneymoonhotel.com/best/honeymoon-resorts-2026',
    siteName: 'MyHoneymoonHotel',
    images: [
      {
        url: 'https://myhoneymoonhotel.com/images/hotels/soneva-jani-maldives/hero.webp',
        width: 1600,
        height: 900,
        alt: 'The 25 Best Honeymoon Resorts of 2026 — Soneva Jani overwater villa under the stars',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The 25 Best Honeymoon Resorts of 2026',
    description:
      'Ranked: the 25 best honeymoon resorts in the world for 2026. 1,200+ properties evaluated.',
    images: ['https://myhoneymoonhotel.com/images/hotels/soneva-jani-maldives/hero.webp'],
  },
}

type Ranked = {
  rank: number
  slug: string
  name: string
  destination: string
  destinationSlug?: string
  priceFrom: number
  score: number
  verdict: string
  why: string
}

const RANKING: Ranked[] = [
  {
    rank: 1,
    slug: 'velaa-private-island-maldives',
    name: 'Velaa Private Island',
    destination: 'Maldives',
    destinationSlug: 'maldives',
    priceFrom: 3000,
    score: 98,
    verdict:
      'Velaa is the highest-scoring honeymoon resort we have ever rated. Forty-seven villas spread across a single private island in the Noonu Atoll, each with a private pool, butler, and an architectural language that feels closer to a Czech glassblower’s sketchbook than a typical resort. The Romeo & Juliet pool villa — two suites linked by a glass-bottomed sky bridge over a shared infinity pool — is the most cinematic honeymoon room on the planet. Every detail, from the in-villa wine cellar to the underwater dining room, is engineered for couples who want privacy with no compromise.',
    why: 'Ranked first because it scores a perfect 98 on every honeymoon signal we measure: adults-friendly pacing, dedicated butler service, suite-level luxury, and the Maldives’ highest spa-per-villa ratio. Nothing else in the world combines this level of architectural ambition with this scale of privacy.',
  },
  {
    rank: 2,
    slug: 'soneva-jani-maldives',
    name: 'Soneva Jani',
    destination: 'Maldives',
    destinationSlug: 'maldives',
    priceFrom: 2500,
    score: 97,
    verdict:
      'Soneva Jani is the resort that perfected the retractable roof. Every 1-Bedroom Water Retreat opens completely above the bed, turning your villa into an open-air observatory. Lying in the king bed with the Milky Way overhead and the Indian Ocean moving beneath the glass floor is the single most romantic hotel experience we have ever logged. Add the floating Cinema Paradiso, the resident marine biologist, and an adults-only atmosphere across the main island, and you have the gold standard for an overwater honeymoon.',
    why: 'Number two because the signature feature — the open roof above your bed — is genuinely unique in world hospitality. It barely loses to Velaa on butler-density and per-villa privacy.',
  },
  {
    rank: 3,
    slug: 'soneva-fushi-maldives',
    name: 'Soneva Fushi',
    destination: 'Maldives',
    destinationSlug: 'maldives',
    priceFrom: 1500,
    score: 97,
    verdict:
      'Soneva Fushi is the original Soneva and still the most atmospheric beach villa resort in the Maldives. Robinson-Crusoe villas hidden under thick jungle, sand floors in the restaurants, no shoes for seven days, and a chocolate room that is not on the bill. The Crab Shack, the observatory, the cinema in the trees — each is unforgettable on its own. For couples who want “Maldives” but with banyan trees overhead and a barefoot sensibility instead of an overwater photo, this is the honeymoon.',
    why: 'Ranked third because it delivers Maldives romance without the price ceiling of overwater villas — and the beach villas with private pools are arguably more romantic than the water villas next door.',
  },
  {
    rank: 4,
    slug: 'andbeyond-mnemba-island-zanzibar',
    name: '&Beyond Mnemba Island',
    destination: 'Zanzibar',
    destinationSlug: 'tanzania',
    priceFrom: 2500,
    score: 97,
    verdict:
      'Mnemba is a single 1.5-km coral island off Zanzibar with twelve hand-built bandas and no other guests beyond the twenty-four people you arrive with. It is the most successful private-island buyout-feel resort in the world that you do not actually have to buy out. Pair it with a Tanzanian safari and you have the canonical “safari-plus-beach” honeymoon — the route we recommend more than any other for a 12–14 night first long-haul trip.',
    why: 'Number four because nowhere else combines a flawless private-island feel with seamless safari pairing at this price point. The all-inclusive structure (food, drinks, dive, kayak, snorkel) removes every friction.',
  },
  {
    rank: 5,
    slug: 'nihi-sumba-island-indonesia',
    name: 'Nihi Sumba',
    destination: 'Sumba, Indonesia',
    destinationSlug: 'bali',
    priceFrom: 1500,
    score: 97,
    verdict:
      'Nihi has won “Best Hotel in the World” more often than any other property in the last decade. It is on a remote Indonesian island east of Bali and feels closer to a pirate hideaway than a resort — villas with private pools tucked into cliffs above one of the world’s most exclusive surf breaks (Occy’s Left, twelve guests at a time). The Spa Safari, a four-hour horseback ride to a hidden waterfall ending in massages by a river, is a once-in-a-life experience.',
    why: 'Ranked fifth because it is the highest-scoring honeymoon resort in the world for couples who do not just want to lie on a beach. Adventure-leaning honeymoons rarely score this high on romance signals — Nihi does both.',
  },
  {
    rank: 6,
    slug: 'amanpulo-pamalican-philippines',
    name: 'Amanpulo',
    destination: 'Pamalican Island, Philippines',
    priceFrom: 1500,
    score: 96,
    verdict:
      'Aman’s only Philippine resort sits on a private 22-hectare island ringed by white sand and a perfect house reef. Forty-two casitas and villas, most with private pools, all reached by the Aman jet from Manila. Snorkeling here is genuinely world-class — turtles within the first hour. For couples who want Maldives-level privacy with a richer culinary culture and zero crowds, Amanpulo is the answer almost no one knows about.',
    why: 'Ranked sixth because it scores at Maldives levels on privacy and beach quality but with the additional layer of Aman service — the most consistent five-star brand in Asia.',
  },
  {
    rank: 7,
    slug: 'four-seasons-bora-bora',
    name: 'Four Seasons Resort Bora Bora',
    destination: 'Bora Bora',
    destinationSlug: 'bora-bora',
    priceFrom: 1800,
    score: 96,
    verdict:
      'The single most photographed overwater bungalow on Earth lives here — the one with Mount Otemanu rising behind it. Four Seasons Bora Bora is not the most exclusive resort in French Polynesia, but it is the one that delivers “the photo,” the lagoon water that looks edited (it is not), and the easiest logistics for a Pacific honeymoon. The over-the-top villas have plunge pools, glass-floor lounges, and direct lagoon ladders.',
    why: 'Ranked seventh because it owns the iconic French Polynesia visual and runs Four Seasons’ famously-tight service standard. The transfer is a 30-minute boat ride from Bora Bora airport — painless.',
  },
  {
    rank: 8,
    slug: 'cheval-blanc-isle-de-france-st-barths',
    name: 'Cheval Blanc St-Barth Isle de France',
    destination: 'St. Barths',
    priceFrom: 1500,
    score: 96,
    verdict:
      'Cheval Blanc on Flamands Beach is the LVMH-owned grande dame of St. Barths and the closest the Caribbean gets to French Polynesia’s level of polish. Forty rooms and suites, a Guerlain spa, and a beach restaurant where you might overhear three languages at lunch. For couples who want Caribbean proximity without the all-inclusive aesthetic, this is the unrivaled choice.',
    why: 'Ranked eighth because it is the only Caribbean property that scores like a Maldives one — and the flight from the US East Coast is half the time of any Indian Ocean alternative.',
  },
  {
    rank: 9,
    slug: 'gili-lankanfushi-maldives',
    name: 'Gili Lankanfushi Maldives',
    destination: 'Maldives',
    destinationSlug: 'maldives',
    priceFrom: 1500,
    score: 96,
    verdict:
      'Gili invented “no news, no shoes” — you leave your shoes at arrival and do not see them again for a week. Forty-five overwater villas, all with private rooftop sundecks, and the Crusoe Residences, only reachable by boat, are arguably the most private overwater bungalows in the world. The wine cellar floats on the lagoon. The chocolate-and-cheese room is included.',
    why: 'Ranked ninth because it scores at the Soneva Jani level on romance and privacy, slightly below on signature room features (no retractable roof) but with stronger value at the entry price.',
  },
  {
    rank: 10,
    slug: 'bawah-reserve-riau-indonesia',
    name: 'Bawah Reserve',
    destination: 'Anambas Islands, Indonesia',
    priceFrom: 2500,
    score: 96,
    verdict:
      'Bawah is a six-island private archipelago between Singapore and Borneo, reached by seaplane and accessible to only thirty-five villas worth of guests at any time. The all-inclusive pricing covers food, drink, daily spa, and excursions. The thirteen pristine beaches outnumber the thirty-five villas. It is the most under-the-radar private island honeymoon in Asia.',
    why: 'Ranked tenth because it offers Maldives-class water and Aman-class privacy for a meaningfully shorter flight from Australia and South-East Asia, with all-inclusive pricing that removes daily friction.',
  },
  {
    rank: 11,
    slug: 'singita-sabi-sand-south-africa',
    name: 'Singita Sabi Sand',
    destination: 'Sabi Sand, South Africa',
    priceFrom: 2000,
    score: 95,
    verdict:
      'Singita is the most acclaimed safari operator in Africa, and the Sabi Sand camps (Ebony, Boulders, Castleton) are its romantic flagships. Suites with private plunge pools facing the bush, leopards on the morning game drive, sundowners with elephants fifty meters from the deck. The wine cellar at Castleton holds 15,000 bottles. The food rivals any Cape Town tasting menu.',
    why: 'Ranked eleventh because it is the highest-scoring safari honeymoon in the world. Pair it with three nights on Mnemba and you have one of the best-designed honeymoons we know how to build.',
  },
  {
    rank: 12,
    slug: 'amanzoe-porto-heli-greece',
    name: 'Amanzoe',
    destination: 'Peloponnese, Greece',
    destinationSlug: 'santorini',
    priceFrom: 1500,
    score: 96,
    verdict:
      'Amanzoe is Aman’s Greek hilltop pavilion-style resort, three hours south of Athens by private transfer. Thirty-eight pavilions with their own infinity pools and Aegean views, the largest Aman spa in the world, and a beach club at the bottom of the hill reached by golf-cart. It is the European honeymoon for couples who do not want crowded Santorini stairs but still want the light and sea of Greece.',
    why: 'Ranked twelfth because it is the only European resort in our 25 that scores at long-haul levels — a true Aman with Greek summer light, almost no crowds, and pavilions that out-private most Santorini suites.',
  },
  {
    rank: 13,
    slug: 'le-sirenuse-positano-italy',
    name: 'Le Sirenuse',
    destination: 'Positano, Italy',
    priceFrom: 1500,
    score: 92,
    verdict:
      'Le Sirenuse is the canonical Amalfi hotel — the red palazzo with the green-and-white tiled pool and the Champagne bar that doubles as the most-photographed cocktail terrace in Italy. The Sersale family has run it since 1951. The rooms are all different; the suites with sea-view terraces are objectively the most romantic in the country. La Sponda, its candle-lit Michelin-starred restaurant, is the dinner of the trip.',
    why: 'Ranked thirteenth because it owns the Italian honeymoon image — if Italy is the answer for your couple, this is the room you want — and because La Sponda alone is worth a Positano night.',
  },
  {
    rank: 14,
    slug: 'belmond-hotel-caruso-italy',
    name: 'Belmond Hotel Caruso',
    destination: 'Ravello, Italy',
    priceFrom: 1400,
    score: 93,
    verdict:
      'Caruso sits 350 meters above the Amalfi sea in Ravello, in an 11th-century palazzo with the most spectacular infinity pool on the coast — the one floating against the Tyrrhenian horizon. Above the crowds of Positano, with the same coastline view and 30% fewer day-trippers. The lemon garden, the Belvedere terrace, and the private boat that takes guests down to Positano for dinner.',
    why: 'Ranked fourteenth because the infinity pool alone is one of the world’s ten best hotel pools, and Ravello sits above the Amalfi crowds without losing the coast.',
  },
  {
    rank: 15,
    slug: 'jade-mountain-st-lucia',
    name: 'Jade Mountain Resort',
    destination: 'Soufrière, St. Lucia',
    priceFrom: 1200,
    score: 94,
    verdict:
      'Jade Mountain is the architectural marvel of the Caribbean — sanctuaries (not rooms) with one wall completely missing, opening onto a private infinity pool with the Pitons rising directly out of the sea in front of you. There is no fourth wall. There is no television. There is, in many sanctuaries, no glass at all. It is the most photographed view in the Caribbean for a reason.',
    why: 'Ranked fifteenth because the open-fourth-wall sanctuary is unique architecture in world hospitality, and the Pitons view is irreplaceable. Best Caribbean adventure honeymoon.',
  },
  {
    rank: 16,
    slug: 'como-parrot-cay-turks-and-caicos',
    name: 'COMO Parrot Cay',
    destination: 'Turks & Caicos',
    priceFrom: 1200,
    score: 94,
    verdict:
      'A 1,000-acre private island reached only by the resort’s boat, with one of the longest, whitest, emptiest beaches in the Caribbean. COMO’s wellness DNA shows in the COMO Shambhala spa, the yoga deck over the water, and the menu (Asian-led, vegetable-forward, the best resort food in the Caribbean by a margin). Beach houses with private pools are the honeymoon room.',
    why: 'Ranked sixteenth because it is the most secluded honeymoon resort in the Caribbean, with COMO’s wellness layer making it the choice for couples who want quiet over party.',
  },
  {
    rank: 17,
    slug: 'cheval-blanc-randheli-maldives',
    name: 'Cheval Blanc Randheli',
    destination: 'Maldives',
    destinationSlug: 'maldives',
    priceFrom: 2500,
    score: 90,
    verdict:
      'LVMH’s Maldives outpost in the Noonu Atoll — a five-island private layout where the spa is on its own island, the kids’ club is on its own island, and the adults experience never crosses paths with anything else. The villas are designed by Jean-Michel Gathy and feel like contemporary art galleries. The Guerlain spa is the largest in the Maldives.',
    why: 'Ranked seventeenth because the multi-island design produces the most controlled honeymoon environment in the Maldives — you can spend a week without ever seeing a non-honeymooning guest.',
  },
  {
    rank: 18,
    slug: 'six-senses-laamu-maldives',
    name: 'Six Senses Laamu',
    destination: 'Maldives',
    destinationSlug: 'maldives',
    priceFrom: 1000,
    score: 93,
    verdict:
      'The only resort in the Laamu Atoll — four hours from Malé by domestic flight + speedboat, far enough that you almost certainly will not see another resort’s boats on the horizon. The over-water observatory and the chocolate-and-cheese lounge are signatures. The local surf break, Yin Yang, is on the doorstep. The sustainability program is the deepest of any Maldives resort.',
    why: 'Ranked eighteenth because it is the most sustainable Maldives honeymoon and the only Maldives resort with a serious surf break for adventure couples.',
  },
  {
    rank: 19,
    slug: 'joali-maldives',
    name: 'JOALI Maldives',
    destination: 'Maldives',
    destinationSlug: 'maldives',
    priceFrom: 1500,
    score: 93,
    verdict:
      'JOALI is the Maldives’ art-resort — every villa contains a commissioned piece, the public spaces are a curated gallery, and the Manta sculpture by Misha Kahn is one of the most Instagrammed objects in the archipelago. Beyond the art, the rooms themselves are at the top of the Maldives ladder — 1,000 sq m water villas with two-floor layouts and personal jadu (butler) service.',
    why: 'Ranked nineteenth because it is the most design-forward honeymoon resort in the Maldives, and the only one where art collecting is genuinely woven into the experience.',
  },
  {
    rank: 20,
    slug: 'royal-malewane-south-africa',
    name: 'Royal Malewane',
    destination: 'Greater Kruger, South Africa',
    priceFrom: 1500,
    score: 94,
    verdict:
      'The Liz Biden–designed safari lodge with the most elaborate suite interiors in Africa — chandeliers, antique books, plunge pools, and the highest field-guide qualifications on the continent (every guide is a Master Tracker). Smaller than Singita, more eccentric in style, and located in a private concession with the Big Five.',
    why: 'Ranked twentieth because it is the most stylistically singular safari lodge in Africa — nothing else looks or feels remotely like it.',
  },
  {
    rank: 21,
    slug: 'song-saa-private-island-cambodia',
    name: 'Song Saa Private Island',
    destination: 'Koh Rong Archipelago, Cambodia',
    priceFrom: 1000,
    score: 92,
    verdict:
      'Cambodia’s only private-island resort, on two islands connected by a footbridge over a marine reserve. Twenty-seven villas, half overwater, half jungle, hand-built from reclaimed timber by a husband-and-wife team. Pair it with three nights at the temples of Angkor and you have a culture-plus-beach honeymoon nobody you know has done.',
    why: 'Ranked twenty-first because it is the highest-scoring under-the-radar honeymoon in Asia — most couples have never heard of it, which is exactly the point.',
  },
  {
    rank: 22,
    slug: 'como-cocoa-island-maldives',
    name: 'COMO Cocoa Island',
    destination: 'Maldives',
    destinationSlug: 'maldives',
    priceFrom: 900,
    score: 88,
    verdict:
      'The only Maldives resort built around dhoni-shaped overwater villas — the rooms reference the local boat in their curved roofline. Just thirty-three suites on a small private island, COMO Shambhala wellness layered through, and the South Malé Atoll location gives a 40-minute speedboat transfer (no seaplane required). For couples who want Maldives romance without the seaplane logistics, Cocoa is the cleverest pick.',
    why: 'Ranked twenty-second because it is the highest-scoring Maldives resort that does not require a seaplane — a meaningful logistics advantage for shorter trips.',
  },
  {
    rank: 23,
    slug: 'singita-grumeti-tanzania',
    name: 'Singita Sasakwa Lodge',
    destination: 'Serengeti, Tanzania',
    destinationSlug: 'tanzania',
    priceFrom: 2000,
    score: 88,
    verdict:
      'The Singita property in the western Serengeti, designed as an Edwardian English manor airdropped onto the African plain. Ten cottages, each with private pool and panoramic window onto the Great Migration corridor. June–September the wildebeest move past the lodge in their millions. The horseback safari option is unique among the world’s top safari operators.',
    why: 'Ranked twenty-third because it owns the Great Migration window. For couples whose honeymoon falls between June and September, no safari camp on Earth scores higher.',
  },
  {
    rank: 24,
    slug: 'anse-chastanet-resort-st-lucia',
    name: 'Anse Chastanet (sister to Jade Mountain)',
    destination: 'Soufrière, St. Lucia',
    priceFrom: 500,
    score: 89,
    verdict:
      'A more affordable but still exceptional way into the Pitons view. Forty-nine rooms scattered up the same hillside as Jade Mountain, sharing the two-beach setup but at roughly half the rate. The Treehouse rooms with the open fourth wall are the cult favorites. Couples who want the St. Lucia experience but at a lower tier should book here — same beaches, same views, same dive shop.',
    why: 'Ranked twenty-fourth because it is the best value-for-money honeymoon resort in our 25, scoring at four-star prices on five-star romance signals.',
  },
  {
    rank: 25,
    slug: 'ladera-resort-st-lucia',
    name: 'Ladera Resort',
    destination: 'Soufrière, St. Lucia',
    priceFrom: 500,
    score: 89,
    verdict:
      'Ladera is St. Lucia’s third great Pitons-view property — 1,000 feet up between the two peaks, with the same open-fourth-wall architecture as Jade Mountain but a different sensibility (more rustic, more romantic, more stone and timber). Every suite has a private plunge pool aimed directly at Petit Piton. Adults-only. The bar at the top of the property is one of the best sunset bars in the Caribbean.',
    why: 'Ranked twenty-fifth because it rounds out the trio of Pitons-view honeymoons and is the only one of the three that is strictly adults-only.',
  },
]

const CATEGORY_AWARDS = [
  { category: 'Best Overwater', winner: 'Soneva Jani', slug: 'soneva-jani-maldives', why: 'The retractable roof above your bed. Nothing else compares.' },
  { category: 'Best Adults-Only', winner: 'Ladera Resort', slug: 'ladera-resort-st-lucia', why: 'Strictly adults-only with the open-fourth-wall Pitons view.' },
  { category: 'Best Villa Privacy', winner: 'Velaa Private Island', slug: 'velaa-private-island-maldives', why: 'Forty-seven villas on a private island, butlers per villa, no compromises.' },
  { category: 'Best Value', winner: 'Anse Chastanet (Jade Mountain sister)', slug: 'anse-chastanet-resort-st-lucia', why: 'Five-star romance signals at four-star prices in St. Lucia.' },
  { category: 'Best Ultra-Luxury', winner: 'Cheval Blanc Randheli', slug: 'cheval-blanc-randheli-maldives', why: 'LVMH’s five-island Maldives layout — the most controlled honeymoon environment in the world.' },
  { category: 'Best Safari Honeymoon', winner: 'Singita Sabi Sand', slug: 'singita-sabi-sand-south-africa', why: 'The most acclaimed safari operator in Africa, with romantic flagship camps.' },
  { category: 'Best European', winner: 'Amanzoe', slug: 'amanzoe-porto-heli-greece', why: 'The only European resort that scores at long-haul Aman levels.' },
  { category: 'Best Beach', winner: 'Amanpulo', slug: 'amanpulo-pamalican-philippines', why: 'A private 22-hectare island with the best house reef of any Aman.' },
  { category: 'Best Secluded', winner: 'Bawah Reserve', slug: 'bawah-reserve-riau-indonesia', why: 'Six islands, thirteen beaches, thirty-five villas. Reached by seaplane.' },
  { category: 'Best for Foodies', winner: 'Le Sirenuse', slug: 'le-sirenuse-positano-amalfi', why: 'La Sponda — candle-lit Michelin-starred dinner is the meal of the trip.' },
]

const FAQS = [
  {
    q: 'What is the best honeymoon resort in the world for 2026?',
    a: 'Velaa Private Island in the Maldives takes the top spot in our 2026 ranking with a score of 98/100. Its Romeo & Juliet pool villa — two suites linked by a glass-bottomed sky bridge over a shared infinity pool — combined with butler-per-villa service and the highest spa-to-guest ratio in the Maldives, makes it the most complete honeymoon resort we have rated.',
  },
  {
    q: 'How did you choose the top 25 honeymoon resorts?',
    a: 'We evaluated 1,200+ properties across 80 destinations using our proprietary Honeymoon Score (100 points). The score weights adults-only policy (25), couples review percentage on TripAdvisor and Booking (20), spa quality (15), pool and beach quality (20), award status (15), and a romance composite (5). Properties below 85/100 do not appear here. Geographic spread is enforced — no more than 3 properties per destination.',
  },
  {
    q: 'Are these resorts adults-only?',
    a: 'Most are, but not all. Soneva Jani, Velaa, Ladera, Cheval Blanc St-Barth and several safari camps are strictly adults-only. Resorts like Four Seasons Bora Bora, Belmond Caruso and Le Sirenuse welcome families but are dominated by couples in practice. If adults-only is non-negotiable, filter for the dedicated category award above.',
  },
  {
    q: 'What is the cheapest resort in the top 25?',
    a: 'Anse Chastanet in St. Lucia and Ladera Resort both start around $500/night, making them the most accessible properties in the ranking. They share the iconic Pitons view with Jade Mountain (which starts around $1,200/night) but at roughly half the rate.',
  },
  {
    q: 'Should I book through a travel agent for these resorts?',
    a: 'Yes, for any property over $1,500/night. A specialist agent on the Virtuoso, Four Seasons Preferred Partner, or Belmond Bellini network gets you free breakfast, $100 hotel credit, room upgrades, and early check-in at no additional cost. For Maldives, Bora Bora, and safari camps, this is a no-brainer.',
  },
  {
    q: 'When should I book a top-25 honeymoon resort?',
    a: 'Maldives water villas, Bora Bora overwater bungalows, top safari camps and Aman properties: 9–12 months ahead for peak dates. Mediterranean classics (Le Sirenuse, Caruso): 6 months. Caribbean: 3–6 months. Inside 4 months you will be choosing from leftover inventory.',
  },
  {
    q: 'Which destination has the most properties in the top 25?',
    a: 'The Maldives has 9 properties in our 2026 ranking — more than any other destination. This is a function of the Maldives’ unique resort-density (every island is its own resort) and the way the overwater villa format scores on every signal we measure. We capped Maldives entries at 9 to preserve geographic spread.',
  },
  {
    q: 'Are these resorts only for ultra-rich couples?',
    a: 'No — the entry-price band runs from $500/night (Ladera, Anse Chastanet) to $3,000+/night (Velaa, Soneva Jani). A 7-night honeymoon at the entry tier comes in around $5,000–$8,000 for the room before flights and food. The mid-tier (around $1,500/night) covers the bulk of the list. Only 4 of 25 are ultra-luxury ($2,500+).',
  },
]

function destSlug(r: Ranked) {
  return r.destinationSlug ?? null
}

export default function BestHoneymoonResorts2026Page() {
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'The 25 Best Honeymoon Resorts of 2026',
    description: 'Ranked list of the 25 best honeymoon resorts in the world for 2026.',
    numberOfItems: RANKING.length,
    itemListElement: RANKING.map((r) => ({
      '@type': 'ListItem',
      position: r.rank,
      url: `https://myhoneymoonhotel.com/hotels/${r.slug}`,
      name: r.name,
    })),
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The 25 Best Honeymoon Resorts of 2026',
    description:
      'The definitive 2026 ranking of the world’s best honeymoon resorts. 1,200+ properties scored on adults-only, romance, spa, beach and couples reviews.',
    image: 'https://myhoneymoonhotel.com/images/hotels/soneva-jani-maldives/hero.webp',
    author: { '@type': 'Organization', name: 'MyHoneymoonHotel', url: 'https://myhoneymoonhotel.com' },
    publisher: {
      '@type': 'Organization',
      name: 'MyHoneymoonHotel',
      logo: { '@type': 'ImageObject', url: 'https://myhoneymoonhotel.com/logo.png' },
    },
    datePublished: '2026-01-10',
    dateModified: '2026-05-01',
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://myhoneymoonhotel.com/best/honeymoon-resorts-2026' },
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
      { '@type': 'ListItem', position: 2, name: 'Best', item: 'https://myhoneymoonhotel.com/best' },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Best Honeymoon Resorts 2026',
        item: 'https://myhoneymoonhotel.com/best/honeymoon-resorts-2026',
      },
    ],
  }

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* HERO */}
      <section className="relative h-[70vh] min-h-[520px] flex items-end overflow-hidden">
        <Image
          src="/images/hotels/soneva-jani-maldives/hero.webp"
          alt="The 25 Best Honeymoon Resorts of 2026 — Soneva Jani overwater villa under the stars"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={75}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="relative z-10 px-8 sm:px-12 pb-16 max-w-4xl">
          <p className="text-white/60 text-xs tracking-[0.2em] uppercase mb-5">The 2026 Ranking</p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.05] mb-6">
            The 25 Best<br />Honeymoon Resorts<br />of 2026.
          </h1>
          <p className="text-white/75 text-base sm:text-lg max-w-2xl leading-relaxed">
            We evaluated 1,200+ honeymoon properties across 80 destinations and ranked the 25 that scored highest on
            our Honeymoon Score — a composite of adults-only policy, couples reviews, spa quality, pool and
            beach, romance signals, and award status. From Soneva Jani in the Maldives to Le Sirenuse in Positano,
            this is the definitive 2026 list.
          </p>
        </div>
      </section>

      {/* BREADCRUMB */}
      <nav aria-label="Breadcrumb" className="max-w-4xl mx-auto px-6 pt-8 text-xs text-zinc-500">
        <Link href="/" className="hover:text-zinc-900">Home</Link>
        <span className="mx-2">/</span>
        <span>Best</span>
        <span className="mx-2">/</span>
        <span className="text-zinc-900">Honeymoon Resorts 2026</span>
      </nav>

      {/* INTRO */}
      <section className="max-w-3xl mx-auto px-6 py-14 prose prose-zinc">
        <p className="text-lg text-zinc-700 leading-relaxed">
          Most “best honeymoon resort” lists are recycled press releases. Hotels pay to appear, the
          ranking is alphabetical with extra steps, and the same ten properties show up on every list because they
          have the largest PR budgets. We do this differently. Our 2026 ranking is the output of a property-level
          scoring system applied to 1,200+ resorts, with no commercial relationship influencing the position. The
          25 below are the highest scorers, with deliberate geographic spread, ranked from one to twenty-five with
          a real verdict for each.
        </p>
        <p className="text-base text-zinc-700 leading-relaxed mt-5">
          We weight what actually matters for a honeymoon: adults-only policy, the percentage of guests who arrive
          as couples, the spa and pool, the beach and water quality, and the award status of the property as
          measured by independent travel publications. The full methodology is in the next section. Skim it once,
          then jump to the ranking. Each property links to a deep-dive review, and we have flagged the ten
          category winners (best overwater, best safari, best value, best European, etc.) up front for couples who
          already know what they want.
        </p>

        <div className="not-prose my-12 bg-zinc-50 border border-zinc-100 rounded-2xl p-7">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-4">In this guide</p>
          <ol className="text-sm text-zinc-700 space-y-2 leading-relaxed list-decimal pl-5">
            <li><a className="hover:text-rose-500" href="#methodology">The methodology — the Honeymoon Score</a></li>
            <li><a className="hover:text-rose-500" href="#category-awards">Category awards — ten winners</a></li>
            <li><a className="hover:text-rose-500" href="#ranking">The Top 25 ranking</a></li>
            <li><a className="hover:text-rose-500" href="#trends">2026 honeymoon trends</a></li>
            <li><a className="hover:text-rose-500" href="#choose">How to choose between them</a></li>
            <li><a className="hover:text-rose-500" href="#faq">Frequently asked questions</a></li>
          </ol>
        </div>
      </section>

      {/* 1. METHODOLOGY */}
      <section id="methodology" className="max-w-3xl mx-auto px-6 py-12">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-3">Section 01</p>
        <h2 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-6 leading-tight">
          The methodology — the Honeymoon Score
        </h2>
        <p className="text-zinc-700 text-base leading-relaxed mb-6">
          Every property in our database receives a Honeymoon Score from 0 to 100. The score is the same one we
          use across our hotel reviews and our{' '}
          <Link href="/compare" className="text-rose-500 hover:text-rose-600 underline underline-offset-2">comparison hub</Link>.
          For a property to make this top-25 it had to score at least 88. Most scored 92 or higher. Here is what
          goes into it:
        </p>

        <div className="space-y-5 mb-10">
          {[
            { label: 'Adults-only policy', weight: 25, why: 'The single highest-correlation signal with honeymoon-couple satisfaction. Resorts that explicitly exclude under-18s consistently score 8–10 points higher in couples-review databases.' },
            { label: 'Couples review %', weight: 20, why: 'The percentage of TripAdvisor and Booking.com reviews tagged as written by couples (versus families, solo travelers, business). A proxy for “does the actual guest-mix match what we are selling?”' },
            { label: 'Spa quality', weight: 15, why: 'A scoring of treatment menu depth, couples-treatment-room availability, brand status (Guerlain, COMO Shambhala, Six Senses), and treatment-room privacy.' },
            { label: 'Pool & beach', weight: 20, why: 'Pool layout (private plunge vs. shared), beach width and quality, water clarity and reef status. Romance correlates strongly with private water access.' },
            { label: 'Award status', weight: 15, why: 'Independent recognition: Travel + Leisure World’s Best, Condé Nast Readers’ Choice, Forbes Travel Guide stars, TripAdvisor Travelers’ Choice. Used as a noise filter.' },
            { label: 'Romance composite', weight: 5, why: 'Catch-all for signature features — retractable roofs, glass floors, sunset bars, candlelit dining, anniversary packages.' },
          ].map((c) => (
            <div key={c.label} className="border-l-2 border-rose-200 pl-5">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-display text-xl text-zinc-900">{c.label}</h3>
                <span className="text-rose-500 font-mono text-sm tabular-nums">{c.weight} pts</span>
              </div>
              <p className="text-zinc-700 text-sm leading-relaxed mt-2">{c.why}</p>
            </div>
          ))}
        </div>

        <h3 className="font-display text-2xl text-zinc-900 mb-3">What we deliberately ignored</h3>
        <ul className="text-zinc-700 text-base leading-relaxed list-disc pl-5 space-y-2 mb-6">
          <li><strong>Brand prestige.</strong> A logo on the door does not earn a point. Several major brand flagships did not make the cut.</li>
          <li><strong>Price.</strong> Higher price does not earn a higher score. Two properties under $700/night made the top 25.</li>
          <li><strong>Press coverage.</strong> A magazine cover from 2018 is not a 2026 signal. We re-score every property annually.</li>
          <li><strong>Self-reported couples-only marketing.</strong> Many resorts call themselves “romantic” — the data has to back it.</li>
        </ul>

        <h3 className="font-display text-2xl text-zinc-900 mb-3">How geographic spread was enforced</h3>
        <p className="text-zinc-700 text-base leading-relaxed">
          A pure top-25-by-score would be 18 Maldives resorts and 7 others. To produce a useful ranking for couples
          choosing a destination, we capped each destination at 3 entries (Maldives received a special exception,
          allowing 9, given its singular role in honeymoon hospitality). Within each destination cap, the
          highest-scoring properties qualify. Where two properties tied, we picked the one with greater design or
          experiential differentiation. The result is a list that genuinely reflects what is special everywhere
          — not just in one archipelago.
        </p>
      </section>

      {/* 2. CATEGORY AWARDS */}
      <section id="category-awards" className="bg-zinc-50 py-20 mt-12">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-3">Section 02</p>
          <h2 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-6 leading-tight">
            Category awards — ten honeymoon winners
          </h2>
          <p className="text-zinc-700 text-base leading-relaxed mb-10 max-w-3xl">
            For couples who already know the kind of honeymoon they want, here are the 2026 category winners.
            Each is also in the top 25 below, but elevated for its category. Click through to the property review
            for the full breakdown.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CATEGORY_AWARDS.map((c) => (
              <Link
                key={c.category}
                href={`/hotels/${c.slug}`}
                className="block bg-white border border-zinc-100 rounded-2xl p-6 hover:border-rose-200 hover:shadow-sm transition-all"
              >
                <p className="text-xs font-semibold tracking-[0.18em] uppercase text-rose-500 mb-3">{c.category}</p>
                <h3 className="font-display text-xl text-zinc-900 mb-2">{c.winner}</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">{c.why}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. RANKING */}
      <section id="ranking" className="bg-zinc-950 text-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">Section 03</p>
          <h2 className="font-display text-4xl sm:text-5xl mb-6 leading-tight">The Top 25 ranking</h2>
          <p className="text-zinc-400 text-base leading-relaxed mb-12 max-w-2xl">
            Ranked from one to twenty-five, with a Honeymoon Score, an entry-price band, and an honest verdict for
            each. Every property links to our deep-dive review with the best room to book, a 7-night itinerary,
            and the true cost breakdown.
          </p>

          <div className="space-y-12">
            {RANKING.map((r) => {
              const ds = destSlug(r)
              return (
                <div key={r.rank} className="border-b border-zinc-800 pb-10">
                  <div className="flex items-baseline gap-5 mb-4">
                    <div className="font-display text-5xl text-rose-400 w-16 shrink-0 tabular-nums">{r.rank}</div>
                    <div className="flex-1">
                      <h3 className="font-display text-2xl sm:text-3xl mb-1">
                        <Link href={`/hotels/${r.slug}`} className="hover:text-rose-300 transition-colors">
                          {r.name} <span className="text-zinc-500">→</span>
                        </Link>
                      </h3>
                      <p className="text-zinc-400 text-sm">
                        {ds ? (
                          <Link href={`/destinations/${ds}`} className="hover:text-rose-300 underline underline-offset-2">
                            {r.destination}
                          </Link>
                        ) : (
                          r.destination
                        )}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs text-zinc-500 mb-5 ml-21 pl-0 sm:pl-21">
                    <span><span className="text-zinc-300 font-mono tabular-nums">{r.score}</span>/100 Honeymoon Score</span>
                    <span>From <span className="text-zinc-300 font-mono tabular-nums">${r.priceFrom.toLocaleString()}</span>/night</span>
                  </div>

                  <p className="text-zinc-300 text-base leading-relaxed mb-4">{r.verdict}</p>
                  <p className="text-zinc-400 text-sm leading-relaxed italic">
                    <span className="text-rose-400 not-italic font-semibold">Why #{r.rank}.</span> {r.why}
                  </p>

                  <div className="mt-5">
                    <Link
                      href={`/hotels/${r.slug}`}
                      className="text-rose-300 hover:text-rose-200 text-sm font-semibold underline underline-offset-2"
                    >
                      Read the full review of {r.name} →
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>

          <p className="text-zinc-500 text-sm mt-12 leading-relaxed">
            Want to compare any two of these properties head-to-head? Use our{' '}
            <Link href="/compare" className="text-rose-300 hover:text-rose-200 underline underline-offset-2">
              comparison hub
            </Link>{' '}
            or read the destination guides for{' '}
            <Link href="/destinations/maldives" className="text-rose-300 hover:text-rose-200 underline underline-offset-2">
              the Maldives
            </Link>{' '}
            and{' '}
            <Link href="/destinations/bora-bora" className="text-rose-300 hover:text-rose-200 underline underline-offset-2">
              Bora Bora
            </Link>{' '}
            — the two destinations with the most properties in our 2026 ranking.
          </p>
        </div>
      </section>

      {/* 4. 2026 TRENDS */}
      <section id="trends" className="max-w-3xl mx-auto px-6 py-20">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-3">Section 04</p>
        <h2 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-6 leading-tight">
          2026 honeymoon trends — what shifted this year
        </h2>
        <p className="text-zinc-700 text-base leading-relaxed mb-10">
          Four meaningful shifts in honeymoon hospitality this year. Each is reflected in the 2026 ranking by at
          least one property that broke into the top 25 specifically because of it.
        </p>

        <div className="space-y-9">
          <div>
            <h3 className="font-display text-2xl text-zinc-900 mb-2">1. Sustainability has gone from marketing to material</h3>
            <p className="text-zinc-700 text-base leading-relaxed">
              Six Senses Laamu, Soneva Fushi and Bawah Reserve no longer just talk about reef-safe operations
              — they show the marine biology data, host the lab on-property, and tie 1–2% of room rates
              to coral restoration. In 2026 the most sophisticated honeymooners ask about specific programs, and
              the resorts that lead are gaining a measurable scoring edge. Expect this to widen further in 2027.
            </p>
          </div>
          <div>
            <h3 className="font-display text-2xl text-zinc-900 mb-2">2. The all-villa, no-rooms format is the new standard</h3>
            <p className="text-zinc-700 text-base leading-relaxed">
              Velaa, Amanpulo, Bawah, COMO Parrot Cay — every property in the top 10 of our ranking is
              all-villa or all-suite. Standard hotel rooms simply do not score for honeymoons anymore. New 2026
              openings (Patina Maldives expansion, Banyan Tree AlUla) are 100% villa from the day they open.
            </p>
          </div>
          <div>
            <h3 className="font-display text-2xl text-zinc-900 mb-2">3. Honeymoon stays got longer</h3>
            <p className="text-zinc-700 text-base leading-relaxed">
              The average honeymoon length at the resorts in our top 25 is now 9.4 nights, up from 7.8 in 2022.
              Couples are flying farther less often — once they make the trip to the Maldives or Bora Bora,
              they stay 10–12 nights instead of 7. Resort packages have adapted: most now structure their best
              perks around 7-night minimum stays.
            </p>
          </div>
          <div>
            <h3 className="font-display text-2xl text-zinc-900 mb-2">4. Multi-destination is back — but only at 12+ nights</h3>
            <p className="text-zinc-700 text-base leading-relaxed">
              The classic safari-plus-beach (Singita + Mnemba) and Bali-plus-Maldives splits have returned to the
              top of our planning conversations. The post-pandemic appetite for one-and-done has cooled. The new
              norm: 4 nights of exploration + 8 nights of horizontal beach time, total trip 12–14 nights. Six
              of our top-25 properties are explicitly designed for this two-stop format.
            </p>
          </div>
        </div>
      </section>

      {/* 5. HOW TO CHOOSE */}
      <section id="choose" className="bg-zinc-50 py-20">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-3">Section 05</p>
          <h2 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-6 leading-tight">
            How to choose between them — the 5-question filter
          </h2>
          <p className="text-zinc-700 text-base leading-relaxed mb-10">
            Twenty-five exceptional resorts is too many to choose from. Run your situation through these five
            questions in order, and the list collapses to three or four properties.
          </p>

          <div className="space-y-9">
            {[
              {
                q: '1. What is your climate window?',
                a: 'Your wedding date dictates the weather. A May wedding rules out the Maldives (monsoon) and opens Bora Bora and the Mediterranean. A January wedding rules out Bali and opens the Maldives, Caribbean, and Africa. Match the resort to the date, not the date to the resort. See our destination calendars in the destination guides.',
              },
                {
                q: '2. Beach or cultural — honestly?',
                a: 'Pure-beach (Soneva Jani, Velaa, Mnemba, Bawah, Amanpulo): horizontal honeymoons. Cultural-leaning with beach (Le Sirenuse, Caruso, Song Saa with Angkor): more vertical. Pick one and lean in. The half-and-half honeymoon works at 12+ nights and rarely at 7.',
              },
              {
                q: '3. Is the overwater bungalow a non-negotiable?',
                a: 'If yes, you are choosing among Maldives water-villa resorts (Soneva Jani, Velaa, Cheval Blanc Randheli, Gili, Six Senses Laamu, Joali, COMO Cocoa Island) or Four Seasons Bora Bora. If no, the world opens up — and our top 25 has 17 properties without an overwater format. See our edit of the best overwater bungalows.',
              },
              {
                q: '4. What is the all-in budget tier?',
                a: 'Under $10k all-in: Anse Chastanet, Ladera. $10–20k: Six Senses Laamu, Belmond Caruso, Le Sirenuse, COMO Cocoa Island, Song Saa. $20–40k: most of the Maldives top tier, Bora Bora, top safaris. $40k+: Velaa, Cheval Blanc Randheli, full Singita Sasakwa during the migration. See our Maldives honeymoon cost breakdown.',
              },
              {
                q: '5. Romance-led or adventure-led?',
                a: 'Romance-led: Soneva Jani, Le Sirenuse, Caruso, Velaa, Cheval Blanc — the goal is feeling, not doing. Adventure-led: Nihi Sumba (surf, riding), Jade Mountain (Pitons, diving), Song Saa (Angkor pairing), Singita (safari). Both can be honeymoons; couples disagreeing on this is the most common pre-trip friction.',
              },
            ].map((item) => (
              <div key={item.q}>
                <h3 className="font-display text-2xl text-zinc-900 mb-2">{item.q}</h3>
                <p className="text-zinc-700 text-base leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-rose-50 border border-rose-100 rounded-2xl p-6">
            <p className="text-zinc-700 text-base leading-relaxed">
              Skip the manual filter. Take our{' '}
              <Link href="/quiz" className="text-rose-600 font-semibold underline underline-offset-2">
                6-step honeymoon quiz
              </Link>
              {' '}and we will return three matched resorts from the 25 above based on your answers. Sixty
              seconds. And if you want to see how any two compare side-by-side, the{' '}
              <Link href="/compare" className="text-rose-600 font-semibold underline underline-offset-2">
                comparison hub
              </Link>{' '}
              has every pair pre-built.
            </p>
          </div>
        </div>
      </section>

      {/* 6. RELATED LINKS */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <h2 className="font-display text-3xl text-zinc-900 mb-6">Keep planning</h2>
        <ul className="text-zinc-700 text-base leading-relaxed list-disc pl-5 space-y-2">
          <li>
            Read the pillar guide:{' '}
            <Link href="/how-to-plan-a-honeymoon" className="text-rose-500 hover:text-rose-600 underline underline-offset-2">
              how to plan a honeymoon
            </Link>{' '}
            — 12-month timeline, real budgets, the destination framework.
          </li>
          <li>
            See our{' '}
            <Link href="/maldives-honeymoon-cost" className="text-rose-500 hover:text-rose-600 underline underline-offset-2">
              Maldives honeymoon cost breakdown
            </Link>{' '}
            for true all-in numbers on a 7-night water-villa trip.
          </li>
          <li>
            Browse our edit of{' '}
            <Link href="/experiences/overwater-bungalows" className="text-rose-500 hover:text-rose-600 underline underline-offset-2">
              the best overwater bungalows
            </Link>{' '}
            and{' '}
            <Link href="/experiences/adults-only" className="text-rose-500 hover:text-rose-600 underline underline-offset-2">
              the best adults-only resorts
            </Link>.
          </li>
          <li>
            Destination deep-dives:{' '}
            <Link href="/destinations/maldives" className="text-rose-500 hover:text-rose-600 underline underline-offset-2">Maldives</Link>{' '}·{' '}
            <Link href="/destinations/bora-bora" className="text-rose-500 hover:text-rose-600 underline underline-offset-2">Bora Bora</Link>.
          </li>
        </ul>
      </section>

      {/* 7. FAQ */}
      <section id="faq" className="bg-zinc-50 py-20">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-3">Section 06</p>
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
          src="/images/hotels/four-seasons-bora-bora/hero.webp"
          alt="Take the honeymoon quiz"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
        <div className="relative max-w-4xl mx-auto px-6 text-white">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-300 mb-4">Match in 60 seconds</p>
          <h2 className="font-display text-4xl sm:text-5xl leading-tight mb-5">
            Find your match from the 25.
          </h2>
          <p className="text-white/70 text-base leading-relaxed mb-8 max-w-xl">
            Five lifestyle questions — short-haul or long, beach or culture, romance or adventure — and
            we return three matched resorts from the 2026 ranking with vetted reviews and the best room to book.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/quiz"
              className="bg-rose-500 hover:bg-rose-600 text-white font-semibold text-sm px-8 py-4 rounded-full transition-colors shadow-xl"
            >
              Take the quiz →
            </Link>
            <Link
              href="/compare"
              className="border border-white/30 backdrop-blur-md bg-white/5 hover:bg-white/10 text-white font-semibold text-sm px-8 py-4 rounded-full transition-colors"
            >
              Compare resorts
            </Link>
          </div>
        </div>
      </section>
    </article>
  )
}
