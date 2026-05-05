import type { DestinationMeta } from '@/types/destination'

const meta: DestinationMeta = {
hero: '/images/hotels/andbeyond-ngorongoro-crater-lodge-tanzania/hero.webp',
tagline: 'The Great Migration, Kilimanjaro, and the world\'s most dramatic safari landscapes.',
intro: 'Tanzania is where the word "safari" achieves its full meaning. The Serengeti hosts the greatest wildlife spectacle on earth — over 1.5 million wildebeest following the rains in an annual loop that produces river crossings so dramatic they are filmed for documentary series. Ngorongoro Crater holds the densest population of predators anywhere in Africa within a single ancient caldera. And after days in the bush, Zanzibar\'s spice-scented Stone Town and turquoise reef waters provide the perfect Indian Ocean contrast. Tanzania is the complete East African honeymoon.',
bestTime: 'Jul–Oct (migration river crossings) & Jan–Mar (calving season)',
flightFrom: '9–11h from Europe',
topExperience: 'Great Migration Safari',
perfectFor: [
  'Couples wanting the world\'s greatest wildlife spectacle — nothing rivals the Migration',
  'Those who want to combine bush and beach in a single trip (Serengeti → Zanzibar)',
  'Big cat obsessives — Tanzania has Africa\'s highest density of lion and leopard',
  'Adventure-minded couples who might want to summit Kilimanjaro',
  'Photography enthusiasts — the Serengeti light at dawn is extraordinary',
],
skipIf: [
  'You want a quick short-haul getaway — Tanzania requires significant travel',
  'Budget is very limited — quality camps in the Serengeti start at $800/night pp all-inclusive',
  'You\'re visiting April–May — the long rains make some camps inaccessible',
  'Urban culture and restaurants are essential — the Serengeti offers wilderness, not city life',
],
experiences: [
  {
    icon: '🐃',
    title: 'Mara River Crossing',
    description: 'The centrepiece of the Great Migration — hundreds of thousands of wildebeest plunging into the Mara River, crossing through crocodiles, lions, and chaos. One of the most viscerally extraordinary things you can witness.',
    cost: 'Included in Serengeti camp rates ($800–$2,500/night pp)',
    tip: 'Position matters — ask your camp to place you at a known crossing point. Crossings happen 1–2 times daily in peak season (July–October) but are unpredictable. Patience is everything.',
  },
  {
    icon: '🦁',
    title: 'Ngorongoro Crater Floor Drive',
    description: 'Descend 600m into the world\'s largest intact volcanic caldera for 6 hours surrounded by 30,000 animals. Black-maned Ngorongoro lions, elephant bulls, hippos, and often rhino in a single day.',
    cost: 'Included at Ngorongoro crater lodge rates; day visit ~$300pp crater fee',
    tip: 'Stay at &Beyond Ngorongoro Crater Lodge — the most dramatic views in Africa from a suite built directly on the crater rim.',
  },
  {
    icon: '🎈',
    title: 'Hot Air Balloon over the Serengeti',
    description: 'An hour at dawn floating above the golden grasslands at sunrise, herds moving below, acacia silhouettes. Land for a champagne bush breakfast. One of the most romantic experiences in Africa.',
    cost: '$600–$800 per person',
    tip: 'Book directly through your lodge before arrival — spots fill fast in peak season. The sun rising over the Kopjes landscape as you float above a lion pride is unforgettable.',
  },
  {
    icon: '🏖️',
    title: 'Zanzibar Spice Tour & Beach',
    description: 'Zanzibar\'s Stone Town is a UNESCO-listed maze of carved doors, spice markets, and Arabic architecture. The north coast\'s Nungwi and east coast\'s Paje beaches are as beautiful as any in the Indian Ocean.',
    cost: 'Spice tour $30–$50pp; beach resort from $150–$800/night',
    tip: 'Fly directly from the Serengeti to Zanzibar (1.5h via Dar es Salaam or Coastal Aviation direct). 3 nights in Stone Town + 4 nights on the coast is ideal.',
  },
  {
    icon: '🌅',
    title: 'Kopjes Sundowner',
    description: 'The granite kopje outcrops of the central Serengeti are lion territory at dawn and dusk. Your guide parks among the boulders at sunset with gin and tonics as the sky turns amber and lions call below.',
    cost: 'Included at all Serengeti camps',
    tip: 'Ask specifically for a kopje sundowner position when you arrive at camp. The timing relative to sunset changes through the season — a good ranger plans around the light.',
  },
],
months: [
  { month: 'Jan', weather: 'Dry, warm, calving season begins', emoji: '🐃', crowds: 'Low-mod', price: 'Mid', verdict: 'Excellent for newborn calves and predators' },
  { month: 'Feb', weather: 'Dry, hot, peak calving, great predators', emoji: '🦁', crowds: 'Moderate', price: 'Mid-high', verdict: 'Calving peak — most dramatic predator action' },
  { month: 'Mar', weather: 'Short rains begin, green, lush', emoji: '🌿', crowds: 'Low', price: 'Low-mid', verdict: 'Good deals, green landscape, some rain' },
  { month: 'Apr', weather: 'Long rains, some lodges close', emoji: '🌧', crowds: 'Low', price: 'Lowest', verdict: 'Avoid — access can be challenging' },
  { month: 'May', weather: 'Long rains ending, lush and green', emoji: '🌧', crowds: 'Low', price: 'Low', verdict: 'Good value, improving by late month' },
  { month: 'Jun', weather: 'Dry season begins, herds moving north', emoji: '🌤', crowds: 'Moderate', price: 'Mid-high', verdict: 'Migration in motion, excellent wildlife' },
  { month: 'Jul', weather: 'Dry, river crossings begin, peak season', emoji: '🐃', crowds: 'High', price: 'High', verdict: 'River crossings — the Migration\'s climax' },
  { month: 'Aug', weather: 'Dry, peak crossings, best month', emoji: '🐃', crowds: 'Peak', price: 'Highest', verdict: 'The very best of the Great Migration' },
  { month: 'Sep', weather: 'Dry, crossings continue, excellent', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Superb — crossings plus thinning crowds' },
  { month: 'Oct', weather: 'Dry, herds begin moving south', emoji: '🌤', crowds: 'Moderate', price: 'Mid', verdict: 'Good wildlife, excellent value' },
  { month: 'Nov', weather: 'Short rains, green, lush landscape', emoji: '🌦', crowds: 'Low', price: 'Low-mid', verdict: 'Green season — beautiful and quiet' },
  { month: 'Dec', weather: 'Short rains end, herds in south', emoji: '⛅', crowds: 'Moderate', price: 'Mid-high', verdict: 'Festive season — herds arrive in south Serengeti' },
],
budgetTiers: [
  {
    label: 'Tented Camps',
    range: '$400–$800/night per person all-inclusive',
    gets: 'Classic under-canvas safari experience. Twice-daily game drives, full board, excellent guiding. The authentic East African adventure.',
    example: 'Serengeti Pioneer Camp, Ikoma Bush Camp, Lemala Ngorongoro',
  },
  {
    label: 'Premium Camps',
    range: '$800–$1,500/night per person all-inclusive',
    gets: 'Private en-suite tents with hot water, fine dining, private vehicle available. The sweet spot of quality and value.',
    example: '&Beyond Serengeti Under Canvas, Singita Sabora, One Nature Nyaruswiga',
  },
  {
    label: 'Ultra-Luxury',
    range: '$1,500–$3,000+/night per person all-inclusive',
    gets: 'Private butler, plunge pool, private vehicle as standard. Ngorongoro Crater Lodge for the most theatrical accommodation in Africa.',
    example: '&Beyond Ngorongoro Crater Lodge, Singita Mara River Tented Camp, Four Seasons Serengeti',
  },
],
areas: [
  {
    name: 'Serengeti',
    bestFor: 'Great Migration, Big Five, open plains',
    description: 'The world\'s most famous wildlife reserve. Stay in the northern Mara region (July–October) for river crossings, or central Seronera year-round for resident Big Five. Flying between regions in a light aircraft is part of the experience.',
  },
  {
    name: 'Ngorongoro',
    bestFor: 'Crater, densest predators, year-round Big Five',
    description: 'The caldera floor is one of the most wildlife-dense places on earth — especially for lion, black rhino, and hyena. Always pair with Serengeti; the two are 3 hours apart by road.',
  },
  {
    name: 'Zanzibar',
    bestFor: 'Beach extension, Indian Ocean, culture',
    description: 'The perfect post-safari contrast. Stone Town for 2 nights, north or east coast beach for 3–4 nights. Coral reef snorkelling, dhow cruises, and spice-scented evening markets.',
  },
  {
    name: 'Ruaha',
    bestFor: 'Remote, off-the-beaten-path, lions',
    description: 'Tanzania\'s second-largest park and its best-kept secret. Enormous lion prides, few tourists, and extraordinary baobab landscapes. Fly from Dar es Salaam (1h).',
  },
  {
    name: 'Selous / Nyerere',
    bestFor: 'Southern circuit, boat safaris, walking',
    description: 'Africa\'s largest game reserve by area. Famous for walking safaris and boat safaris on the Rufiji River. Completely different experience from northern Tanzania — more adventurous and intimate.',
  },
],
expertTips: [
  {
    tip: 'Position your camp to follow the Migration',
    detail: 'The wildebeest are never in one place. January–March they calve in the southern Serengeti; June–July they move north; July–October they cross the Mara River. Book camps that move with the herds, or plan a fly-in schedule.',
  },
  {
    tip: 'Book the hot air balloon at least 3 months ahead',
    detail: 'Only a handful of balloons fly over the Serengeti daily and they are strictly limited. July–October slots fill many months in advance.',
  },
  {
    tip: 'Fly between parks — roads are long and rough',
    detail: 'Domestic charter flights (Coastal Aviation, Air Excel) between Serengeti airstrips and Zanzibar are $200–$400pp each way. They save 8-hour road drives and are part of the adventure.',
  },
  {
    tip: 'Malaria prophylaxis is non-negotiable',
    detail: 'Tanzania is a malaria zone. Start prophylaxis before departure, use DEET at dawn and dusk, and sleep under the mosquito net. Malarone is the most convenient option.',
  },
],
packing: [
  { item: 'Neutral safari clothes (khaki or olive)', why: 'Essential for open vehicle game drives. Avoid white (dust-staining) and bright colours (disturb wildlife).' },
  { item: 'Warm fleece for dawn drives', why: 'Even in July–August, the Serengeti at dawn in an open vehicle can be surprisingly cold. A fleece or light down layer is essential.' },
  { item: 'DEET insect repellent (50%+)', why: 'Malaria prevention at dawn and dusk is critical. Use alongside prophylaxis medication — don\'t rely on either alone.' },
  { item: 'Binoculars (8x42 recommended)', why: 'The Serengeti plains are vast. Binoculars allow you to spot distant kills, cheetah on kopjes, and bird species your ranger calls out.' },
  { item: 'Beach clothing for Zanzibar', why: 'The transition from bush to beach is abrupt and delightful. Pack a separate small bag of beach essentials to leave at your Zanzibar hotel.' },
],
guide: {
  getting: 'Fly to Kilimanjaro International (JRO) or Julius Nyerere International in Dar es Salaam (DAR). From Europe: direct flights from Amsterdam (KLM, 9h), London (various, 9–10h), Paris, Frankfurt. From JRO: road transfer or charter flight to Serengeti (1.5h). From DAR: charter flight to Selous/Ruaha. Zanzibar has its own international airport (ZNZ) — fly direct from Europe via Nairobi or connect from DAR.',
  where: 'Classic northern circuit: Ngorongoro (2 nights) + Serengeti (3–4 nights split across 2 camps) + Zanzibar (4 nights). Southern circuit alternative: Nyerere/Selous + Ruaha for fewer crowds. For the Migration specifically: north Serengeti camps near the Mara River, July–October.',
  when: 'July–October is peak Migration season — river crossings are in full swing. January–March is underrated and cheaper — the calving season produces extraordinary predator-prey interactions in the southern Serengeti. Avoid April–May (long rains). Green season (November–May minus the rains) offers genuine beauty and reduced rates.',
},
localFood: 'Nyama choma (Swahili barbecued goat or beef, served with ugali and sukuma wiki greens — the national campfire dish), Zanzibar pilau (spiced rice with meat, cooked in a clay pot with cardamom and cinnamon), urojo (Zanzibar street mix — lentil soup with cassava and hard-boiled egg), fresh grilled red snapper on Zanzibar\'s night market, and a Kilimanjaro lager at sunset after a day\'s game drive. The spice tour in Zanzibar teaches you the origin of vanilla, cloves, black pepper, and nutmeg still growing in the island\'s interior.',
currency: 'Tanzanian Shilling (TZS) — safari camps and lodges quote USD',
language: 'Swahili and English. English widely spoken in all tourism contexts.',
timezone: 'UTC+3 (East Africa Time)',
}

export default meta
