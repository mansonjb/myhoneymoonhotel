import type { DestinationMeta } from '@/types/destination'

const meta: DestinationMeta = {
hero: '/images/hotels/andbeyond-mnemba-island-zanzibar/hero.webp',
tagline: 'White coral sand, turquoise Indian Ocean, and spice-scented Stone Town — East Africa\'s most romantic island.',
intro: 'Zanzibar is where the Indian Ocean meets Africa in the most romantic way possible. The UNESCO-listed Stone Town is a labyrinth of carved wooden doors, Arabic architecture, and spice markets that have traded since the 9th century. Step outside that ancient city and you find some of the finest beach hotels in the world — coral sand so white it reflects the sun, water so clear you can count the fish from your sunlounger. Add the Spice Tour, a dhow sunset sail, and Forodhani Gardens at night, and you have a honeymoon that engages every sense.',
bestTime: 'Jun–Oct & Dec–Mar',
flightFrom: '8–11h from Europe',
topExperience: 'Beach & Culture',
perfectFor: [
  'Couples who want exceptional beaches with genuine cultural depth',
  'Safari add-on honeymooners — Zanzibar pairs perfectly with Tanzania mainland',
  'Those seeking Indian Ocean luxury at significantly lower prices than Maldives',
  'Food lovers drawn to Swahili spice culture and fresh Indian Ocean seafood',
  'Adventurous couples who want kite surfing, snorkeling, and dhow sailing',
],
skipIf: [
  'You want guaranteed uninterrupted sunshine — the long rains (Apr–May) are heavy',
  'Ultra-luxury overwater bungalows are the non-negotiable — this is beach, not lagoon',
  'You\'re uncomfortable with heat and humidity year-round',
  'Nightlife and resort entertainment are important to you',
],
experiences: [
  {
    icon: '🌿',
    title: 'Spice Farm Tour',
    description: 'A half-day guided walk through working clove, nutmeg, vanilla, and cinnamon farms with a local guide who lets you smell, taste, and identify every spice. Ends with a Swahili lunch cooked using everything you\'ve just seen.',
    cost: '$30–$60 per person',
    tip: 'Book with a Stone Town-based operator rather than through your hotel — the experience is identical and you support local businesses directly.',
  },
  {
    icon: '⛵',
    title: 'Traditional Dhow Sunset Cruise',
    description: 'Sail the Indian Ocean at sunset on a hand-carved wooden dhow with champagne and fresh fruit. The silhouette of Stone Town behind you as the sun drops into the ocean is one of Africa\'s most beautiful scenes.',
    cost: '$80–$150 per couple',
    tip: 'Depart from Stone Town waterfront rather than your hotel — the approach back to the old town at dusk is the real experience.',
  },
  {
    icon: '🏛️',
    title: 'Stone Town After Dark',
    description: 'Walk the labyrinthine alleys of the UNESCO Old Town at night when the heat fades — carved doors lit by lanterns, the call to prayer echoing, and Forodhani Gardens night market blazing with Zanzibar pizza stalls and fresh seafood.',
    cost: 'Free (food $5–$15)',
    tip: 'Go on a Friday evening when the market is busiest. Hire a local guide for $20 — they unlock buildings and histories you\'d walk past alone.',
  },
  {
    icon: '🤿',
    title: 'Mnemba Atoll Snorkeling',
    description: 'The waters around Mnemba Island — a private atoll off the northeast coast — are among East Africa\'s richest reefs. Green turtles, dolphins, and hundreds of reef fish species in crystal-clear visibility.',
    cost: '$60–$120 per person',
    tip: 'Go in the morning before the wind picks up. If staying at &Beyond Mnemba Island, the reef is literally off your beach.',
  },
  {
    icon: '🪁',
    title: 'Kite Surfing at Paje',
    description: 'The southeast coast at Paje has a shallow lagoon, consistent trade winds (June–September), and a developed kite school scene. Even beginners can get on the water in a day. The east coast vibe is relaxed and young.',
    cost: '$80–$120 per lesson',
    tip: 'Stay at one of Paje\'s boutique hotels even if you\'re not kite surfing — the beach here is less crowded than the north.',
  },
],
months: [
  { month: 'Jan', weather: 'Hot, dry, excellent', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Peak season, worth it' },
  { month: 'Feb', weather: 'Hot and dry, ideal', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Best beach weather' },
  { month: 'Mar', weather: 'Getting humid, rains building', emoji: '⛅', crowds: 'Moderate', price: 'Mid', verdict: 'Go early in month' },
  { month: 'Apr', weather: 'Long rains, heavy downpours', emoji: '🌧', crowds: 'Very low', price: 'Lowest', verdict: 'Avoid — serious rain' },
  { month: 'May', weather: 'Still rainy, tailing off', emoji: '🌦', crowds: 'Very low', price: 'Very low', verdict: 'Only for budget seekers' },
  { month: 'Jun', weather: 'Dry season begins, breezy', emoji: '🌤', crowds: 'Moderate', price: 'Mid', verdict: 'Excellent shoulder pick' },
  { month: 'Jul', weather: 'Dry and breezy, near-perfect', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Prime season' },
  { month: 'Aug', weather: 'Dry, best kite wind, beautiful', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Best all-round month' },
  { month: 'Sep', weather: 'Still dry, thinning out', emoji: '☀️', crowds: 'Moderate', price: 'Mid-high', verdict: 'Sweet spot value' },
  { month: 'Oct', weather: 'Short rains possible', emoji: '⛅', crowds: 'Low', price: 'Mid', verdict: 'Gamble but often fine' },
  { month: 'Nov', weather: 'Short rains, unpredictable', emoji: '🌦', crowds: 'Low', price: 'Low', verdict: 'Risky — check forecast' },
  { month: 'Dec', weather: 'Dry, hot, festive crowds', emoji: '☀️', crowds: 'Very high', price: 'Highest', verdict: 'Beautiful but expensive' },
],
budgetTiers: [
  {
    label: 'Boutique Beach',
    range: '$200–$500/night',
    gets: 'Charming boutique hotel on the east or north coast, pool, excellent food. The best value Indian Ocean honeymoon in the world at this tier.',
    example: 'Baraza Resort & Spa, Matemwe Lodge, White Sand Luxury Villas',
  },
  {
    label: 'Premium',
    range: '$500–$1,200/night',
    gets: 'Serious luxury — private plunge pools, beach butlers, exceptional Swahili design. Better than equivalents in Europe at the same price.',
    example: 'Zuri Zanzibar, Melia Zanzibar, Gold Zanzibar',
  },
  {
    label: 'Ultra-Luxury',
    range: '$1,200–$3,500+/night',
    gets: 'Private island or exclusive beach property, complete seclusion, incredible reef access, all-inclusive experiences. The finest East African beach hotels.',
    example: '&Beyond Mnemba Island, Thanda Island',
  },
],
areas: [
  {
    name: 'Stone Town',
    bestFor: 'UNESCO culture, history, dining',
    description: 'The historic heart of Zanzibar — a UNESCO World Heritage maze of Arab, Persian, Indian, and European architecture. No beach hotels here but essential for a night or two for culture, the night market, and the best restaurants on the island.',
  },
  {
    name: 'North (Nungwi & Kendwa)',
    bestFor: 'Best beaches, swimming, nightlife',
    description: 'The northern tip has Zanzibar\'s most swimmable beaches — no tidal flats, turquoise water all day. Nungwi has a fishing village feel with buzzing restaurant strips. Kendwa is quieter. Both have the best hotels for swimming from the beach.',
  },
  {
    name: 'East (Paje & Bwejuu)',
    bestFor: 'Kite surfing, boutique hotels, local feel',
    description: 'The east coast has a tidal lagoon — beautiful at high tide, rocky at low — but the boutique hotel scene here is charming and authentic. Paje is the kite surfing capital. Bwejuu is quieter. Both attract a younger, more adventurous crowd.',
  },
  {
    name: 'South (Jambiani & beyond)',
    bestFor: 'Quiet luxury, seaweed farms, local life',
    description: 'The quietest part of the island with some excellent high-end resorts that market themselves on seclusion. Local fishing villages still work seaweed farms in the tidal shallows. Genuinely off the tourist circuit.',
  },
],
expertTips: [
  {
    tip: 'Combine with a Tanzania safari',
    detail: 'Zanzibar is 40 minutes by prop plane from Dar es Salaam and 90 minutes from Kilimanjaro. A 4-night Serengeti or Ngorongoro safari followed by 5 nights in Zanzibar is one of the world\'s great honeymoon combinations. Tour operators in Arusha will arrange the whole thing.',
  },
  {
    tip: 'Stay a night in Stone Town',
    detail: 'Even if your main base is a beach hotel, spend one or two nights in Stone Town at the beginning or end of your trip. Emerson Spice rooftop restaurant and 236 Hurumzi are the best hotels. Experience the city before retreating to the beach.',
  },
  {
    tip: 'Book the north for guaranteed swimming',
    detail: 'The east coast is beautiful but the tidal variation is extreme — at low tide it\'s a 400-metre walk to the water. If beach swimming daily is important, stay at Nungwi or Kendwa where the tidal shift is minimal.',
  },
  {
    tip: 'Forodhani Gardens at night is unmissable',
    detail: 'The waterfront night market runs every evening from around 6pm. For $3–5 you eat Zanzibar pizza, fresh sugarcane juice, grilled lobster, and octopus skewers surrounded by hundreds of locals. One of the best cheap food experiences in Africa.',
  },
  {
    tip: 'Respect dress codes in Stone Town',
    detail: 'Zanzibar is a predominantly Muslim island. In Stone Town, women should cover shoulders and knees; men should avoid shorts in the medina. On the beach, anything goes — the locals are extremely tolerant of tourist beach attire at the resorts.',
  },
],
packing: [
  { item: 'Modest cover-up for Stone Town', why: 'Required for mosque visits and respectful in the medina — light linen works perfectly in the heat' },
  { item: 'High-factor reef-safe sunscreen', why: 'The equatorial sun is extreme and the reefs need protection — many resorts now require reef-safe products' },
  { item: 'Snorkel mask (own)', why: 'Hotel gear is functional but your own mask fits better — essential for the Mnemba Atoll visits' },
  { item: 'Insect repellent (DEET 30%+)', why: 'Malaria is present in Zanzibar — take prophylaxis and use repellent at dawn and dusk' },
  { item: 'Waterproof dry bag', why: 'Dhow trips and snorkel excursions involve open boats — essential for phones and cameras' },
],
guide: {
  getting: 'Fly to Zanzibar Abeid Amani Karume International (ZNZ). Direct flights from Europe: Kenya Airways via Nairobi, Ethiopian Airlines via Addis Ababa, Turkish Airlines via Istanbul (all 8–11h total). From the UK: no direct service — best routing is via Nairobi with Kenya Airways or via Dubai with flydubai. Internal flights from Dar es Salaam (DAR) take 35 minutes and cost $60–$100. Taxis from ZNZ airport to Stone Town are 20 minutes ($10–$15 fixed rate); to north coast hotels, 45–60 minutes ($25–$40).',
  where: 'North coast (Nungwi/Kendwa) for best swimming and most social scene — best all-round choice for a first visit. East coast (Paje) for kite surfing, boutique hotels, and a younger vibe. South for total seclusion and premium luxury. Combine: 2 nights Stone Town + 5 nights beach hotel. For ultra-luxury: &Beyond Mnemba Island is the finest property — book a year ahead.',
  when: 'June to October is the prime dry season — warm days (28°C), reliable sunshine, and the best kite wind on the east coast. December to March (excluding April–May long rains) is equally beautiful and slightly hotter. January and February are the hottest and driest months — excellent for beach. Avoid April and May entirely.',
},
localFood: 'Zanzibar pizza (stuffed flatbread with egg, meat, and cheese from Forodhani Gardens night market), urojo soup (tangy Zanzibari mix soup), fresh grilled tuna with tamarind sauce, biryani rice cooked with whole spices, and spiced chai with cardamom and ginger. The Spice Tour to clove, nutmeg and vanilla farms is a half-day highlight.',
currency: 'Tanzanian Shilling (TZS) — hotels quote USD',
language: 'Swahili and English',
timezone: 'UTC+3',
}

export default meta
