import type { DestinationMeta } from '@/types/destination'

const meta: DestinationMeta = {
hero: '/images/hotels/royal-mansour-marrakech-morocco/hero.webp',
tagline: 'Rose-pink medinas, Sahara nights, and the world\'s greatest luxury riads — a sensory honeymoon unlike any other.',
intro: 'Morocco is a honeymoon destination unlike any other — a full sensory immersion in colour, scent, sound, and taste that no beach resort can replicate. Marrakech\'s medina assaults you with saffron and cumin, drums from Djemaa el-Fna, and the call to prayer bouncing off pink walls at sunset. Your riad is a palace behind an unremarkable door — a garden courtyard, a plunge pool, and rooms dressed in hand-cut zellige tile and silk damask. The Sahara Desert at night has zero light pollution and a sky so star-dense it looks painted. The Atlas Mountain passes still have Berber villages where women carry water on their heads and call to you from rooftops. Morocco is 3–4 hours from Europe, costs a fraction of equivalent luxury in Italy, and delivers the most memorable honeymoon nights of any destination on this list.',
bestTime: 'Mar–May & Sep–Nov',
flightFrom: '3–4h from Europe',
topExperience: 'Riad Romance & Desert Adventure',
perfectFor: [
  'Couples who want something genuinely extraordinary — not another beach resort, but a full cultural immersion',
  'Adventurous honeymooners willing to combine Marrakech with a Sahara night for the full Morocco sweep',
  'Architecture and design lovers — Moroccan riad design is among the world\'s most extraordinary',
  'Food travellers: Moroccan cuisine is one of the world\'s great culinary traditions',
  'Short-haul seekers: 3–4h from Europe, no jet lag, intense experience per day',
],
skipIf: [
  'Beach and pool seclusion is the primary goal — Morocco is not a beach destination (though Agadir and Essaouira exist)',
  'You\'re overwhelmed by sensory intensity — the medinas are loud, crowded, and relentless',
  'LGBTQ+ couples — same-sex relationships are illegal in Morocco; public affection carries risk',
  'You want predictable Western dining and hotel comfort without cultural engagement',
],
experiences: [
  {
    icon: '🏰',
    title: 'Private Riad Experience, Marrakech',
    description: 'A night in one of Marrakech\'s great riads — Royal Mansour, La Mamounia, or El Fenn — is an experience unlike any hotel stay in the world. Your private courtyard, plunge pool, and personal staff make the chaotic medina feel like your private kingdom.',
    cost: '€400–€3,000+/night',
    tip: 'Even if your main accommodation is mid-range, book one night at La Mamounia or Royal Mansour for an anniversary dinner or a spa afternoon — the experience warrants the spend even as a single-day experience.',
  },
  {
    icon: '🐪',
    title: 'Sahara Camel Trek & Desert Camp',
    description: 'Ride a camel into the Erg Chebbi dunes at sunset, watch the light go from gold to blood-orange to violet over 150km of nothing, then sleep in a luxury glamping tent with a proper mattress and a fire circle for storytelling. Wake at 5am for the sunrise from the highest dune.',
    cost: '€150–€400 per couple (trek + luxury camp)',
    tip: 'Stay in a proper luxury desert camp rather than a standard one — the quality difference is enormous. Dar Ahlam, Scarabeo Camp, and Angsana Riads Desert Camp are the top options.',
  },
  {
    icon: '🌿',
    title: 'Hammam and Argan Oil Ritual',
    description: 'A traditional Moroccan hammam — steam room scrub with kessa glove and black savon beldi soap, followed by an argan oil massage. At a good riad hammam, this is genuinely transformative. Both of you going together makes it a shared ritual. Allow 2 hours.',
    cost: '€60–€200 per person at a luxury riad hammam',
    tip: 'Book the Royal Mansour Spa hammam even if not staying there — it is the finest traditional hammam experience in Morocco. Heritage spa at La Mamounia is equally extraordinary.',
  },
  {
    icon: '🎨',
    title: 'Fes Medina with a Private Guide',
    description: 'Fes el-Bali is the most complete medieval city in the world — 9,400 alleys in a 9th-century UNESCO medina. A private guide for 3 hours unlocks tanneries (best views from leather shops above), madrasas, and souks that are invisible without local knowledge. It\'s completely overwhelming without one.',
    cost: '€40–€80 for a private licensed guide',
    tip: 'Book a licensed guide through your riad rather than accepting touts at the gate — unlicensed guides receive commissions from shops and prioritise selling over seeing. The Chouara Tannery leather shop views are free if you ask politely.',
  },
  {
    icon: '🌄',
    title: 'Atlas Mountain Drive and Berber Lunch',
    description: 'The Tizi n\'Tichka pass road (2,260m) from Marrakech through the High Atlas is one of North Africa\'s great mountain drives — Berber villages clinging to cliffs, walnut and argan groves, and the descent into the desert. Stop at a family auberge for a tagine cooked on a wood fire with a view of nothing but mountains.',
    cost: 'Car rental €40–€80/day; lunch €15–€25 per person',
    tip: 'Hire a driver rather than self-driving — the road is genuinely challenging with hairpins and truck traffic, and a local driver knows the best lunch stops and Kasbah photo points.',
  },
],
months: [
  { month: 'Jan', weather: 'Cool nights, clear days, Sahara cold', emoji: '❄️', crowds: 'Low', price: 'Low', verdict: 'Fine for medina cities, cold desert' },
  { month: 'Feb', weather: 'Warming, clear skies, great light', emoji: '🌤', crowds: 'Low', price: 'Low-mid', verdict: 'Good value, excellent light' },
  { month: 'Mar', weather: 'Warm, flowers, near-perfect', emoji: '🌸', crowds: 'Moderate', price: 'Mid', verdict: 'One of the best months' },
  { month: 'Apr', weather: 'Warm, rose festival, lush Atlas', emoji: '🌹', crowds: 'Moderate', price: 'Mid', verdict: 'Rose harvest in Dades Valley — magical' },
  { month: 'May', weather: 'Hot in south, perfect north', emoji: '☀️', crowds: 'Moderate', price: 'Mid-high', verdict: 'Excellent overall' },
  { month: 'Jun', weather: 'Very hot in Marrakech, heat building', emoji: '🌡️', crowds: 'Low-mod', price: 'Mid', verdict: 'Hot but manageable early mornings' },
  { month: 'Jul', weather: 'Extreme heat in south (42°C+)', emoji: '🔥', crowds: 'Low', price: 'Low', verdict: 'Too hot for most — avoid south' },
  { month: 'Aug', weather: 'Hottest, Marrakech brutal', emoji: '🔥', crowds: 'Low', price: 'Lowest', verdict: 'Only coastal Essaouira is tolerable' },
  { month: 'Sep', weather: 'Cooling, excellent, Sahara perfect', emoji: '☀️', crowds: 'Moderate', price: 'Mid', verdict: 'Ideal month resumes' },
  { month: 'Oct', weather: 'Perfect — warm days, cool evenings', emoji: '☀️', crowds: 'High', price: 'Mid-high', verdict: 'Best month overall' },
  { month: 'Nov', weather: 'Warm days, cool nights, clear skies', emoji: '🌤', crowds: 'Moderate', price: 'Mid', verdict: 'Excellent shoulder value' },
  { month: 'Dec', weather: 'Cool, clear, Christmas in medinas', emoji: '⛅', crowds: 'Moderate', price: 'Mid', verdict: 'Romantic in the souks' },
],
budgetTiers: [
  {
    label: 'Boutique Riad',
    range: '€100–€300/night',
    gets: 'Beautifully designed small riad in the medina — courtyard, roof terrace, home-cooked Moroccan breakfast. Some of the most atmospheric accommodation in the world at extraordinary value.',
    example: 'Riad Kniza, Riad Farnatchi, Dar les Cigognes (Marrakech)',
  },
  {
    label: 'Luxury Riad',
    range: '€300–€800/night',
    gets: 'Larger riad with private hammam, plunge pool, butler service, and exceptional food. The full Marrakech riad experience at a serious level.',
    example: 'El Fenn, Riad Mena & Beyond, Riad 72',
  },
  {
    label: 'Palace Level',
    range: '€800–€5,000+/night',
    gets: 'La Mamounia or Royal Mansour — two of the world\'s great hotels, period. Private riads within a walled palace garden. Staff-to-guest ratios exceeding 5:1. Experiences that redefine luxury hospitality globally.',
    example: 'Royal Mansour Marrakech, La Mamounia',
  },
],
areas: [
  {
    name: 'Marrakech',
    bestFor: 'Riad luxury, souks, Djemaa el-Fna, palaces',
    description: 'The essential Morocco experience and the best base for first-timers. The pink city has the greatest concentration of luxury riads, the most extraordinary night market, and world-class restaurants and spas. Essential for any Morocco honeymoon.',
  },
  {
    name: 'Fes',
    bestFor: 'Most authentic medina, medieval architecture',
    description: 'The most complete medieval city in the world and Morocco\'s spiritual and intellectual capital. The medina of Fes el-Bali makes Marrakech look modern. More intense, less tourist-polished, and more profoundly moving than Marrakech. Best as a 2-night add-on.',
  },
  {
    name: 'Sahara Desert (Merzouga)',
    bestFor: 'Camel treks, luxury glamping, star gazing',
    description: 'The Erg Chebbi dunes near Merzouga are the cinematic Morocco of camel caravans and rolling sand. 2–3 nights here with a luxury desert camp is one of the world\'s great honeymoon experiences — especially the sunrise and the night sky.',
  },
  {
    name: 'Atlas Mountains',
    bestFor: 'Berber villages, hiking, mountain drives',
    description: 'The High Atlas rise to 4,167m (Jebel Toubkal) and separate the coastal Morocco most tourists see from the Sahara beyond. The valley roads — Dades Gorge, Todra Gorge, Tizi n\'Tichka — are among North Africa\'s most dramatic drives.',
  },
  {
    name: 'Essaouira',
    bestFor: 'Atlantic coast, wind, art, fish market',
    description: 'A UNESCO-listed walled port city on the Atlantic coast — blue and white instead of Marrakech\'s pink, windswept and artistic instead of frenetic. Excellent fish market, wind kite surfing, and a completely different rhythm from the inland cities.',
  },
],
expertTips: [
  {
    tip: 'Your riad is your sanctuary — choose carefully',
    detail: 'In Morocco, your riad is not just where you sleep — it\'s where you escape to. The souks and medinas are intense and exhausting. A riad with a beautiful courtyard, a plunge pool, and attentive staff becomes the emotional counterpoint to the city\'s sensory assault. Do not underinvest here.',
  },
  {
    tip: 'Hire a private guide for Fes, skip the touts',
    detail: 'The Fes medina is genuinely impossible to navigate alone and touts at the gates are aggressive. A licensed guide from your riad unlocks the city properly. Pay €50–80 for 3 hours — you will see the tanneries, the Bou Inania Madrasa, and the coppersmiths\' quarter with narrative that transforms the experience.',
  },
  {
    tip: 'The Sahara is a 9-10h drive from Marrakech — fly',
    detail: 'Many couples attempt to road-trip Marrakech to Merzouga in a day. It\'s brutal — 9 hours each way on mountain roads. Fly from Marrakech to Errachidia (1h, €50–80) and be driven 2h to the dunes. You arrive rested and gain 2 days of holiday. Totally worth it.',
  },
  {
    tip: 'Haggling is expected and enjoyable',
    detail: 'In the souks, the first price is theatre — expect to pay 30–50% of the opening ask for most items. Approach it as a conversation, not a confrontation. Start at 30% of the asking price, enjoy the back-and-forth, and walk away if it stalls — they will usually call you back. The process is half the experience.',
  },
  {
    tip: 'Book Djemaa el-Fna restaurant rooftops for sunset',
    detail: 'The square itself at sunset is chaotic and slightly overwhelming at ground level. The rooftop restaurants around the perimeter (Café de France, Le Grand Balcon du Café Glacier) give you the panoramic view over the entire scene — drums, smoke, crowds, Atlas Mountains behind — with mint tea. This perspective is the definitive Marrakech image.',
  },
],
packing: [
  { item: 'Modest clothing for medinas (women: shoulders and knees covered)', why: 'Morocco is a Muslim country — covered shoulders and knees are respectful in medinas and required for mosque visits; beach attire is for resort pools only' },
  { item: 'Comfortable flat closed shoes', why: 'Medina cobblestones and souk floors are uneven, slippery with spilled water, and often covered in animal waste — sandals are a genuine hazard in Fes and Marrakech\'s older quarters' },
  { item: 'Small cash wallet (MAD)', why: 'Souk purchases are cash-only and ATMs are not always convenient inside the medinas — carry small denomination dirhams separately from your main wallet' },
  { item: 'Warm layer for Sahara nights', why: 'Desert temperatures drop dramatically after sunset — even in summer, nights in the Sahara reach 10–15°C; in spring they can be near-freezing' },
  { item: 'Anti-diarrhoea medication', why: 'Moroccan food is extraordinary but street food and water carry genuine risk for unprepared stomachs — pack Imodium and rehydration sachets regardless of how careful you are' },
],
guide: {
  getting: 'Fly to Marrakech Menara (RAK) — direct from most European cities with Ryanair, easyJet, Royal Air Maroc, and British Airways (2.5–4h). From RAK, taxis to the medina are fixed-rate: €5–10 for the 15-minute journey (agree before getting in or use the airport taxi desk). For Fes, fly direct to Fes-Saïss (FEZ) from Paris, Madrid, and some UK airports. Internal transport: CTM coaches between Marrakech and Fes (8h, €15) or fly Royal Air Maroc (1h, €40–80). For the Sahara: fly Marrakech to Errachidia rather than driving.',
  where: 'Classic honeymoon routing: 3–4 nights Marrakech (medina exploration, day trip to Atlas) → 2 nights Sahara Desert (Merzouga luxury camp) → 2 nights Fes (medina, architecture). Fly or coach between cities. For pure luxury: 7 nights Marrakech at Royal Mansour or La Mamounia — the entire experience contained within the medina and its escapes. Add Essaouira (2h drive) as a day trip for Atlantic contrast.',
  when: 'March–May and September–November are the prime windows. October is the finest single month — warm Marrakech days (25°C), cool evenings, perfect Sahara nights (12–18°C), and golden light across the medinas. Spring (March–April) has the rose harvest in the Dades Valley. Avoid July–August — Marrakech exceeds 42°C and the medinas are genuinely dangerous in heat.',
},
localFood: 'Lamb tagine with preserved lemon and olives slow-cooked in a clay pot, bastilla (flaky pastry filled with pigeon or chicken, almonds and cinnamon dusted with icing sugar), fresh mint tea poured from height at every riad entrance, harira soup (tomato, chickpea and lamb) during Ramadan and year-round, and Marrakech\'s legendary fresh-squeezed orange juice for 4 dirhams a glass at Djemaa el-Fna.',
currency: 'Moroccan Dirham (MAD)',
language: 'Arabic and Amazigh (French and Spanish widely spoken, some English)',
timezone: 'UTC+1 (Morocco doesn\'t observe DST consistently)',
}

export default meta
