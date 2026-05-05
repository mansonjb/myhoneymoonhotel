import type { DestinationMeta } from '@/types/destination'

const meta: DestinationMeta = {
hero: '/images/hotels/singita-sabi-sand-south-africa/hero.webp',
tagline: 'Safari by day, infinity pool by night — the original Big Five honeymoon on Earth.',
intro: 'South Africa is the world\'s most complete honeymoon destination: Big Five safari in the Sabi Sand, wine-tasting in Stellenbosch\'s golden valleys, spectacular beaches and whale watching on the Cape coast, and Cape Town — arguably the most beautiful city on earth — all within a single country. Singita and the top Sabi Sand lodges set the global standard for safari luxury. No other safari destination combines wildlife density, hospitality quality, food culture, and natural variety in quite the same way.',
bestTime: 'May–Sep (dry season, best wildlife)',
flightFrom: '11–12h from Europe',
topExperience: 'Big Five Safari',
perfectFor: [
  'Couples who want wildlife encounters alongside genuine five-star luxury',
  'Food and wine lovers — the Cape Winelands rival Bordeaux and Burgundy',
  'Those wanting maximum variety: safari, city, beach, and mountain in one trip',
  'Couples already planning a bucket-list once-in-a-lifetime honeymoon',
  'Photography lovers — the light in the Sabi Sand at dawn is extraordinary',
],
skipIf: [
  'Safari isn\'t appealing — it\'s the centrepiece and hard to replace',
  'You want guaranteed beach weather year-round — the Cape coast has seasons',
  'Budget is very tight — top Sabi Sand lodges start at $1,500/night per person all-inclusive',
  'You\'re visiting December–February with inflexible beach expectations — it\'s peak summer but crowds',
],
experiences: [
  {
    icon: '🦁',
    title: 'Big Five Dawn Game Drive',
    description: 'Leave the lodge at 5:30am in an open Land Rover with a tracker on the bonnet. The first hour of light — lions finishing a kill, elephants at a waterhole, leopard in a marula tree — is the defining African experience.',
    cost: 'Included at all-inclusive lodges ($1,200–$2,500/night per person)',
    tip: 'Request a private vehicle if staying at a lodge that offers shared drives. Two couples maximum changes the experience entirely. Tip your ranger and tracker R200–R400 per person per day.',
  },
  {
    icon: '🐆',
    title: 'Leopard Night Drive in Sabi Sand',
    description: 'The Sabi Sand Game Reserve has the highest leopard density of any protected area in Africa. Night drives with spotlights reveal leopards, hyenas, civets, and nightjars in the darkness.',
    cost: 'Included at all-inclusive lodges',
    tip: 'Ask your ranger specifically for leopard sightings. Sabi Sand lodges share sighting information — a good ranger will have intel before leaving camp.',
  },
  {
    icon: '🍷',
    title: 'Cape Winelands Private Tasting',
    description: 'Stellenbosch and Franschhoek produce Chenin Blanc, Cabernet Sauvignon, and Pinotage of world-class quality. A private tasting at Waterford, Babylonstoren, or La Motte with a sommelier and a view of the Drakenstein Mountains.',
    cost: 'R500–$1,500 for a private estate tour and tasting',
    tip: 'Stay at Babylonstoren for the most romantic farm experience. Book their Babel restaurant 4 weeks ahead — the farm-to-table lunch under the mountains is one of South Africa\'s great meals.',
  },
  {
    icon: '🐋',
    title: 'Whale Watching at Hermanus',
    description: 'Southern right whales visit Walker Bay from June to November — the best land-based whale watching in the world. From cliffs in Hermanus, whales breach and nurse calves metres from shore.',
    cost: 'Free from coastal paths; boat trips R1,200–$2,500 per couple',
    tip: 'September–October for peak whale numbers. A room at the Birkenhead House overlooks the bay — you can watch from your bathtub.',
  },
  {
    icon: '🏔️',
    title: 'Table Mountain at Sunrise',
    description: 'The cable car to the summit of Table Mountain at 6:30am, before the clouds roll in and the tourist groups arrive. 360° views of Cape Town, the Atlantic Seaboard, and the Boulders penguin colony.',
    cost: 'R350 per person return cable car',
    tip: 'Check the weather the night before — the mountain has its own microclimate and is capped 30% of days. The cable car runs from 8am; arrive at 7:45am to be on the first rotation.',
  },
],
months: [
  { month: 'Jan', weather: 'Hot dry summer in Cape Town, game drives hot', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Peak summer, busy and expensive' },
  { month: 'Feb', weather: 'Warm, dry, excellent Cape weather', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Beautiful but crowded and pricey' },
  { month: 'Mar', weather: 'Warm, start of autumn, excellent', emoji: '🌤', crowds: 'Moderate', price: 'Mid', verdict: 'Underrated — warm and less crowded' },
  { month: 'Apr', weather: 'Cooler, autumn colours in Winelands', emoji: '🍂', crowds: 'Low-mod', price: 'Low-mid', verdict: 'Excellent for Winelands and city' },
  { month: 'May', weather: 'Dry season starts, safari improves', emoji: '🌿', crowds: 'Low', price: 'Low-mid', verdict: 'Wildlife building, great value' },
  { month: 'Jun', weather: 'Dry, cool, whales arrive, best safari', emoji: '🐋', crowds: 'Low', price: 'Mid', verdict: 'Whales + safari sweet spot begins' },
  { month: 'Jul', weather: 'Dry, cool, peak wildlife, peak whales', emoji: '🦁', crowds: 'Moderate', price: 'Mid-high', verdict: 'Excellent wildlife, cooler mornings' },
  { month: 'Aug', weather: 'Dry, cool, excellent wildlife viewing', emoji: '🦁', crowds: 'Moderate', price: 'Mid-high', verdict: 'Superb safari, still great whales' },
  { month: 'Sep', weather: 'Dry, warming, best month for all', emoji: '☀️', crowds: 'Moderate', price: 'High', verdict: 'The single best month in South Africa' },
  { month: 'Oct', weather: 'Spring, wildflowers, baby animals', emoji: '🌸', crowds: 'Moderate', price: 'High', verdict: 'Magnificent — newborns and flowers' },
  { month: 'Nov', weather: 'Green season starts, lush but rain risk', emoji: '🌦', crowds: 'Low', price: 'Mid', verdict: 'Good value, occasional storms' },
  { month: 'Dec', weather: 'Hot, wet in bush, summer in Cape', emoji: '🌧', crowds: 'Peak', price: 'Highest', verdict: 'Cape Town excellent; bush is steamy' },
],
budgetTiers: [
  {
    label: 'Accessible Safari & City',
    range: '$300–$700/night',
    gets: 'Mid-range safari lodge with game drives included. Good wildlife. Cape Town boutique hotel. The South Africa experience without Singita pricing.',
    example: 'Thornybush Collection, Kapama Buffalo Camp, The Silo Cape Town (city), The Twelve Apostles',
  },
  {
    label: 'Premium',
    range: '$700–$1,500/night per person',
    gets: 'Top-tier safari lodge in premier game reserve. All meals, drives, and drinks included. Ultra-luxury Cape Town hotel.',
    example: 'Lion Sands Ivory Lodge, &Beyond Phinda, One&Only Cape Town, Ellerman House',
  },
  {
    label: 'Ultra-Luxury',
    range: '$1,500–$3,000+/night per person',
    gets: 'Singita-level all-inclusive. Private vehicle, world-class food, butler, plunge pool, the highest wildlife standards on the continent.',
    example: 'Singita Sabi Sand, Royal Malewane, Singita Lebombo',
  },
],
areas: [
  {
    name: 'Sabi Sand / Kruger',
    bestFor: 'Big Five safari, best guiding in Africa',
    description: 'The Sabi Sand shares an unfenced border with Kruger. The highest concentration of leopard in Africa, plus lion, elephant, rhino, and buffalo. Singita and Lion Sands are based here.',
  },
  {
    name: 'Cape Winelands',
    bestFor: 'Wine, food, mountain scenery',
    description: 'Stellenbosch (wine estates, restaurants), Franschhoek (the gourmet capital), and Paarl (most dramatic mountain backdrop). 45 minutes from Cape Town. Two nights minimum.',
  },
  {
    name: 'Cape Town',
    bestFor: 'City romance, Table Mountain, beaches',
    description: 'One of the world\'s most beautiful cities. The V&A Waterfront, Camps Bay beach, Boulders penguin colony, and the Cape Peninsula. Allow 3 nights minimum.',
  },
  {
    name: 'Hermanus',
    bestFor: 'Whale watching, coastal scenery',
    description: 'The best land-based whale watching in the world, June–November. The Garden Route extends east from here. Birkenhead House is one of South Africa\'s finest boutique hotels.',
  },
],
expertTips: [
  {
    tip: 'Combine safari and Cape Town — they\'re 2 hours apart by air',
    detail: 'The classic honeymoon is 4 nights Sabi Sand safari → fly to Cape Town → 3 nights Cape Town → 2 nights Winelands. Perfectly paced and covering South Africa\'s greatest hits.',
  },
  {
    tip: 'Private vehicle on safari is worth every rand',
    detail: 'Shared game drives (4–8 guests) are excellent. A private vehicle ($200–$400/day supplement) means you stop as long as you want, go where you want, and the guide works only for you.',
  },
  {
    tip: 'The Big Five is actually the Dangerous Five — not just a size list',
    detail: 'Lion, leopard, elephant, Cape buffalo, and rhino were named for being the most dangerous to hunt on foot. Understanding the ranking makes every sighting land differently.',
  },
  {
    tip: 'Book Table Mountain cable car online the day before',
    detail: 'Walk-up queues in summer exceed 2 hours. Pre-booking online (R380pp) gives a timed entry. Still check the weather — if it\'s cloudy, rebook.',
  },
],
packing: [
  { item: 'Neutral safari clothing (khaki, olive, beige)', why: 'Dark colours attract tsetse flies. Bright colours disturb game and other guests. Neutral tones are both practical and comfortable.' },
  { item: 'Warm layer for early drives', why: 'Open game drive vehicles at 5:30am in June–August can be 5–10°C. Lodges provide blankets but a fleece or down gilet is essential in winter months.' },
  { item: 'Wide-brim hat and high SPF', why: 'The South African sun at altitude (Kruger is 400m) is fierce. A collapsible hat and SPF50 are non-negotiable for afternoon drives.' },
  { item: 'Binoculars (8x42 minimum)', why: 'Spotting distant animals before the Ranger is one of the joys of safari. A decent pair transforms your game-viewing.' },
  { item: 'Smart-casual for Cape Town', why: 'Cape Town\'s better restaurants have a relaxed smart-casual standard. One decent outfit prevents any awkwardness at dinner.' },
],
guide: {
  getting: 'Fly to Johannesburg O.R. Tambo (JNB) or Cape Town International (CPT). From London: direct on British Airways, South African Airways, or Virgin (11h). From Europe: direct from Amsterdam (KLM), Frankfurt (Lufthansa), Paris (Air France). From JNB: connect to Kruger Mpumalanga Airport (MQP) or Hoedspruit (HDS) for Sabi Sand — 45-min flight or 4h drive. Do NOT drive from JNB to the bush after dark. The standard itinerary: fly into JNB → lodge transfer → fly CPT → Cape Town programme → fly home.',
  where: 'For safari: Sabi Sand is the premium choice. Phinda, Timbavati, and Thornybush are excellent alternatives. For Cape Town: De Waterkant, V&A Waterfront, and Camps Bay are the three most romantic neighbourhoods. Stay in the Winelands at Babylonstoren or La Residence in Franschhoek for the most special experience.',
  when: 'May–September is dry season — the best wildlife viewing (animals concentrate at waterholes) and most comfortable temperatures for morning drives. September–October is superb: spring wildflowers and baby animals. June–November for whales at Hermanus. Cape Town is year-round but November–March is peak summer with the best beach weather.',
},
localFood: 'Braai (the South African barbecue — beef bostok, lamb chops, and boerewors sausage over wood fire — a national religion), biltong (dried cured meat, the perfect safari snack), bunny chow (hollowed-out bread loaf filled with curry, a Durban speciality), Cape Malay bobotie (spiced minced lamb with egg custard topping — the most characterful Cape dish), Stellenbosch Chenin Blanc with a Waterford chocolate pairing. The Winelands restaurant scene — Le Quartier Français in Franschhoek, Jordan Wine Estate, The Pot Luck Club in Cape Town — is genuinely world-class.',
currency: 'South African Rand (ZAR) — safari lodges often quote USD',
language: 'English is one of 11 official languages and universally used in tourism',
timezone: 'UTC+2 (South Africa Standard Time)',
}

export default meta
