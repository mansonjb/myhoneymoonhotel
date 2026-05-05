import type { DestinationMeta } from '@/types/destination'

const meta: DestinationMeta = {
hero: '/images/hotels/nihi-sumba-island-indonesia/hero.webp',
tagline: 'Beyond Bali — Sumba\'s wild beaches, Komodo\'s dragons, and Lombok\'s pristine coast.',
intro: 'While Bali dominates the conversation, Indonesia\'s outer islands offer something rarer: genuine remoteness, extraordinary biodiversity, and some of the most dramatically designed luxury lodges in the world. Sumba\'s Nihi resort has been named the world\'s best hotel multiple times — and the island itself, with ikat-weaving villages, wild horses on the beach, and empty surf bays, is the blueprint for untouched paradise. Add Komodo\'s prehistoric dragons, Lombok\'s volcanic peaks, and the Gili Islands\' turquoise shallows, and you have an archipelago that rewards couples willing to look past the obvious.',
bestTime: 'May–Oct',
flightFrom: '16–20h from Europe (via Bali or Jakarta)',
topExperience: 'Remote Island Adventure',
perfectFor: [
  'Adventurous couples who want to escape the tourist trail completely',
  'Diving enthusiasts — Komodo has some of the world\'s best drift diving',
  'Those seeking extraordinary luxury in a genuinely wild, remote setting',
  'Wildlife lovers — Komodo dragons, sea turtles, and manta rays',
  'Couples who want Bali-level luxury with a fraction of the crowds',
],
skipIf: [
  'You want easy accessibility and short flight connections',
  'Even minor roughness makes you anxious — Sumba is remote',
  'You need reliable restaurants beyond your lodge',
  'Motion sickness on small boats is a serious concern',
],
experiences: [
  {
    icon: '🐉',
    title: 'Komodo Dragon Trek at Dawn',
    description: 'Walk with a ranger through Komodo National Park at first light when the dragons are most active. Seeing a 3-metre prehistoric predator from 10 metres is humbling and extraordinary.',
    cost: '$50–$80 park fee + ranger; boat charter $150–$400/day',
    tip: 'Try lesser-visited Rinca Island — fewer tourists than Komodo main. Pink Beach nearby is Indonesia\'s most photogenic shore.',
  },
  {
    icon: '🏄',
    title: 'Nihi Sumba Exclusive Surf',
    description: 'The wave at Occy\'s Left in front of Nihi is one of Indonesia\'s great barrels. Guests get exclusive access by boat from the resort\'s dock — no crowds, ever.',
    cost: 'Included for Nihi guests; private charter for non-guests $200–$400',
    tip: 'Non-surfers: horseback riding along Sumba\'s wild beaches at dawn is equally extraordinary.',
  },
  {
    icon: '🤿',
    title: 'Manta Ray Encounter at Manta Point',
    description: 'Komodo\'s Manta Point aggregates dozens of oceanic manta rays year-round. Snorkelling at the surface as they glide beneath you is one of the most serene wildlife encounters anywhere.',
    cost: '$50–$80 per person for guided snorkel trip',
    tip: 'October–February for best manta concentrations. Morning trips have clearest water.',
  },
  {
    icon: '🌋',
    title: 'Rinjani Sunrise Trek (Lombok)',
    description: 'A 2-day summit climb to the crater rim of Mount Rinjani (3,726m) rewards with one of Southeast Asia\'s most dramatic volcanic landscapes and a crater lake at 2,600m.',
    cost: '$150–$300 per person for guided 2-day trek',
    tip: 'Doable for fit couples without technical experience. Pack warm layers — the crater rim hits 5°C at night.',
  },
  {
    icon: '🎨',
    title: 'Sumba Ikat Weaving Village',
    description: 'Visit a traditional Sumbanese village where women weave hand-dyed ikat textiles using techniques unchanged for centuries. Buy directly from the weavers — each piece takes months.',
    cost: 'Village fee $10–$20; textiles $50–$500 by complexity',
    tip: 'Ask your lodge to arrange an introduction. Showing up without a local connection feels intrusive.',
  },
],
months: [
  { month: 'Jan', weather: 'Wet season, heavy rain possible', emoji: '🌧', crowds: 'Low', price: 'Low', verdict: 'Some rain, great deals' },
  { month: 'Feb', weather: 'Wet, seas can be rough', emoji: '🌧', crowds: 'Low', price: 'Lowest', verdict: 'Challenging for boats and diving' },
  { month: 'Mar', weather: 'Transitioning, improving', emoji: '⛅', crowds: 'Low', price: 'Low', verdict: 'Hit or miss' },
  { month: 'Apr', weather: 'Drying out, better visibility', emoji: '🌤', crowds: 'Low', price: 'Low-mid', verdict: 'Underrated shoulder month' },
  { month: 'May', weather: 'Dry season begins, excellent', emoji: '☀️', crowds: 'Moderate', price: 'Mid', verdict: 'Ideal start to dry season' },
  { month: 'Jun', weather: 'Dry, clear, perfect conditions', emoji: '☀️', crowds: 'Moderate', price: 'Mid-high', verdict: 'Excellent all-round' },
  { month: 'Jul', weather: 'Peak dry season, best diving', emoji: '☀️', crowds: 'Peak', price: 'High', verdict: 'Best conditions, busiest period' },
  { month: 'Aug', weather: 'Flawless, busiest month', emoji: '☀️', crowds: 'Peak', price: 'Highest', verdict: 'Perfect but premium pricing' },
  { month: 'Sep', weather: 'Still excellent, crowds thin', emoji: '☀️', crowds: 'Moderate', price: 'Mid-high', verdict: 'Best value in peak season' },
  { month: 'Oct', weather: 'End of dry, still great', emoji: '🌤', crowds: 'Low-mod', price: 'Mid', verdict: 'Strong shoulder month' },
  { month: 'Nov', weather: 'Transitioning, some rain', emoji: '⛅', crowds: 'Low', price: 'Low-mid', verdict: 'Good deals, slight risk' },
  { month: 'Dec', weather: 'Wet season begins', emoji: '🌦', crowds: 'Low-mod', price: 'Mid', verdict: 'Christmas closures; check availability' },
],
budgetTiers: [
  {
    label: 'Boutique & Guesthouses',
    range: '$80–$250/night',
    gets: 'Well-located bungalow in Lombok or Gili Islands. Great snorkelling access, honest value.',
    example: 'Ashtari Lombok, Katamaran Resort Gili, local Komodo liveaboards',
  },
  {
    label: 'Luxury Lodges',
    range: '$400–$900/night',
    gets: 'Private villa with pool, guided activities included, extraordinary natural setting. The sweet spot for adventurous luxury.',
    example: 'Plataran Komodo, Sudamala Komodo, Qunci Villas Lombok',
  },
  {
    label: 'Ultra-Luxury',
    range: '$900–$2,500+/night',
    gets: 'Nihi Sumba level — the world\'s most awarded hotel on a deserted island. Everything included, exclusive surf access, complete seclusion.',
    example: 'Nihi Sumba, Lelewatu Resort Sumba',
  },
],
areas: [
  {
    name: 'Sumba',
    bestFor: 'Wild luxury, surf, ikat culture',
    description: 'Nihi Sumba is the centrepiece, but the whole island offers horse culture, traditional villages, and empty beaches. Fly via Bali (1.5h). The most extraordinary destination in the archipelago.',
  },
  {
    name: 'Komodo & Flores',
    bestFor: 'Dragons, diving, Pink Beach',
    description: 'Fly to Labuan Bajo (Flores). Base here or on a liveaboard. Komodo National Park, Manta Point, Pink Beach, and the Padar Island viewpoint are all day-trip distance.',
  },
  {
    name: 'Lombok',
    bestFor: 'Volcano trekking, Gili Islands',
    description: 'Less developed than Bali. Rinjani volcano for active couples, Gili Meno and Gili Air for beach days. South Lombok\'s Kuta area has increasingly excellent boutique hotels.',
  },
  {
    name: 'Java (Borobudur)',
    bestFor: 'UNESCO temples, cultural depth',
    description: 'Add a night at Amanjiwo in Borobudur for the world\'s greatest Buddhist temple at sunrise. A completely different dimension of Indonesian culture, one hour\'s flight from Bali.',
  },
],
expertTips: [
  {
    tip: 'Nihi Sumba fills fast — check availability immediately',
    detail: 'The property limits guest numbers strictly. For July–August, some guests book 12–18 months out. Check availability immediately if Nihi is your first choice.',
  },
  {
    tip: 'A Komodo liveaboard is an extraordinary honeymoon option',
    detail: 'Sleeping on a traditional phinisi boat between dive sites, waking in different bays each morning — one of Southeast Asia\'s great romantic experiences at $300–$800/night all-inclusive.',
  },
  {
    tip: 'Combine Komodo and Sumba via the Bali hub',
    detail: 'Fly Labuan Bajo → Bali (1h) → Sumba (1.5h). A week split between both islands is the definitive outer-island honeymoon.',
  },
  {
    tip: 'Pack reef shoes for Komodo',
    detail: 'Beaches around Komodo have sharp volcanic rock. Reef shoes are essential for getting in and out of boats. Buy in Bali before heading east.',
  },
],
packing: [
  { item: 'Reef-safe mineral sunscreen', why: 'Komodo National Park prohibits chemical sunscreen. Mineral SPF50 is hard to find locally — bring from home.' },
  { item: 'Seasickness medication', why: 'Komodo boat crossings can be rough, especially July–August when swells pick up. Stugeron or Dramamine prevents a ruined day.' },
  { item: 'Waterproof dry bag', why: 'Getting in and out of boats with cameras and valuables requires a proper dry bag. Non-negotiable for Komodo itineraries.' },
  { item: 'Light long-sleeve shirt', why: 'Sun protection on boats and required for mosque or temple visits. Lightweight linen is perfect.' },
  { item: 'Underwater camera or GoPro', why: 'Manta rays at Komodo and sea turtles at the Gilis are the most photogenic wildlife in Southeast Asia.' },
],
guide: {
  getting: 'Fly to Bali (DPS) as the hub. From Europe: 14–18h via Dubai, Singapore, or Doha. From Australia: direct 3h from Perth, 6h from Sydney. From Bali: fly to Labuan Bajo (Flores) for Komodo on Garuda/Wings Air (1.5h); fly to Tambolaka for Sumba (1.5h from Bali). Internal flights fill in peak season — book before leaving home.',
  where: 'For Komodo: base at Labuan Bajo or charter a liveaboard. For Sumba: Nihi or Lelewatu resorts are all-inclusive and the whole point of going. Best combination: 3 nights Komodo liveaboard + 4 nights Sumba.',
  when: 'May–October is the non-negotiable window. July–August is peak diving in Komodo — best visibility, most mantas. September is superb with fewer crowds. Avoid November–March: rough seas make Komodo dangerous and Sumba can have weeks of heavy rain.',
},
localFood: 'Ayam betutu (Balinese slow-roasted spiced chicken); grilled fresh fish with sambal on any Gili beach; bebek goreng (crispy duck) at Ubud\'s great warungs; fresh tuna at a Labuan Bajo waterfront restaurant watching the sunset. Indonesia\'s sambal variety alone — 300+ regional types — is worth the journey.',
currency: 'Indonesian Rupiah (IDR) — major resort areas also accept USD',
language: 'Bahasa Indonesia. English spoken in all tourist areas.',
timezone: 'UTC+8 (Central Indonesia Time)',
}

export default meta
