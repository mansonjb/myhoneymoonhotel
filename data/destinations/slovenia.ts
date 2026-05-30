import type { DestinationMeta } from '@/types/destination'

const meta: DestinationMeta = {
  hero: '/images/hotels/hotel-vila-bled-slovenia/hero.webp',
  tagline: 'A fairy-tale island church, a cliffside castle, and Julian Alps reflected in a glacial lake — Lake Como\'s secret cousin at a third of the price.',
  intro: 'Slovenia is the Europe that the rest of Europe forgot, and Lake Bled is its postcard — a 2-kilometre emerald lake with a single tiny island, a Baroque pilgrimage church rising from the middle of it, and a medieval castle perched on a 130-metre cliff above. The Julian Alps frame everything. Half an hour south, wilder Lake Bohinj sits inside Triglav National Park with no resort development at all. Ljubljana, the dragon-bridge capital, is 45 minutes away and is the most charming under-the-radar city in Europe. The honeymoon math is unbeatable: a 2-hour flight from London or Paris, a 4-day itinerary that combines lake, mountain, and historic capital, prices 40–60% below Lake Como, and zero of the Italian-summer crowds. Couples who pick Slovenia tell each other for years that they got the secret right.',
  bestTime: 'May–Sep',
  flightFrom: '2h from London/Paris, 1h from Vienna',
  topExperience: 'Fairy-Tale Lake & Alpine Romance',
  perfectFor: [
    'Couples who want a European honeymoon that isn\'t Italy, France, or Greece',
    'Short-haul travellers from northern Europe — Ljubljana is 2 hours from most capitals',
    'Outdoorsy couples who actually want to hike, kayak, and swim, not just lounge by a pool',
    'Budget-conscious romantics who want Lake Como impact at a fraction of the price',
    'History and architecture lovers — Ljubljana, Piran, and the castles are unspoilt',
  ],
  skipIf: [
    'You need beach swimming and warm sea — Slovenia\'s coast is small and the lakes are cool',
    'You want resort luxury at the Belmond/Aman level — Slovenia\'s top hotels are charming, not opulent',
    'You\'re visiting November–March outside the ski season — the lake region is genuinely quiet',
    'You can\'t handle some walking — Bled, Bohinj, and the gorges all reward couples who walk',
  ],
  experiences: [
    {
      icon: '🛶',
      title: 'Pletna Boat to Bled Island & the Wishing Bell',
      description: 'A traditional flat-bottomed pletna boat rowed standing-up by a Bled pletnar (a hereditary role passed father-to-son) takes you across the lake to the island. Climb the 99 stone steps to the Church of the Assumption — local tradition says a groom who carries his bride up all 99 brings good luck.',
      cost: '$20–$30 per person (round trip)',
      tip: 'Take the first or last pletna of the day for empty island photos. Ring the wishing bell inside the church (one wish each). Bring a few euros for the bell donation. Avoid the cheaper public boats — pletnas are the cultural one.',
    },
    {
      icon: '🏰',
      title: 'Sunset at Bled Castle',
      description: 'The 11th-century castle on the 130m cliff above the lake has the most photographed view in Slovenia. The castle restaurant serves a serious tasting menu on a terrace looking straight down at the island. Drink prosecco at the parapet at golden hour.',
      cost: '$15 castle entry; $90–$150 per couple at the restaurant',
      tip: 'Book the restaurant for 7:30pm in summer so dinner coincides with sunset over the Julian Alps. Walk up via the forest path from the lake rather than driving — 20 minutes, free, and far prettier.',
    },
    {
      icon: '🚶',
      title: 'Vintgar Gorge Walk',
      description: 'A 1.6-kilometre wooden boardwalk built in 1893 winding through a limestone gorge above the turquoise Radovna river, ending at a 13-metre waterfall. 4km from Bled, the easiest dramatic walk in the Alps. Takes 90 minutes round trip.',
      cost: '$15 per person',
      tip: 'Go at opening (8am) or after 5pm to avoid the tour buses. The boardwalk is narrow and gets congested by 11am. Closed roughly November through March due to ice. Combine with a visit to St Catherine\'s church on the way back.',
    },
    {
      icon: '🚣',
      title: 'Lake Bohinj — The Wild Twin',
      description: '25 minutes from Bled, Lake Bohinj is everything Bled would be without the development — 4km long, inside Triglav National Park, no resorts, no pletnas, just a single church on the shore, kayaks, and the mountains rising straight from the water. The real Slovenia.',
      cost: '$25–$40 per couple (kayak rental, half day)',
      tip: 'Drive to Bohinj for a half day, kayak the western (quieter) shore, lunch at Pension Rožič in Stara Fužina village. The cable car from Bohinjska Bistrica up Vogel mountain gives a 360° Julian Alps panorama for $25.',
    },
    {
      icon: '🍷',
      title: 'Ljubljana Day & Dragon Bridge',
      description: '45 minutes from Bled, Slovenia\'s capital is a pedestrian, Baroque-pastel river town designed largely by the architect Jože Plečnik. The riverside cafés, the open-air market, the castle on the hill, and the spectacular dinner at Atelje or Hiša Franko (90 minutes away — Slovenia\'s only World\'s 50 Best restaurant).',
      cost: '$0 (Ljubljana is mostly free); $200–$400 per couple at Hiša Franko',
      tip: 'Book Hiša Franko (Ana Roš, chef of Chef\'s Table fame) at least 3 months ahead — it\'s the dinner of the trip but it\'s a 90-minute drive into the Soča Valley. Stay overnight at Hiša Polonka next door rather than driving back to Bled at 11pm.',
    },
  ],
  months: [
    { month: 'Jan', weather: 'Cold, snow, ski season', emoji: '❄️', crowds: 'Mod (ski)', price: 'Mid', verdict: 'Bled frozen, beautiful for skiers' },
    { month: 'Feb', weather: 'Cold, snow', emoji: '❄️', crowds: 'Mod (ski)', price: 'Mid', verdict: 'Same — ski-honeymoon option' },
    { month: 'Mar', weather: 'Cold to cool, late snow', emoji: '⛅', crowds: 'Low', price: 'Low', verdict: 'Off-season — many closures' },
    { month: 'Apr', weather: 'Warming, spring blossoms', emoji: '🌤', crowds: 'Low', price: 'Low', verdict: 'Pretty but lake still cool' },
    { month: 'May', weather: 'Warm days, lake swimmable late month', emoji: '☀️', crowds: 'Mod', price: 'Mid', verdict: 'Excellent — wildflowers everywhere' },
    { month: 'Jun', weather: 'Warm, long days, ideal', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'One of the two best months' },
    { month: 'Jul', weather: 'Hot, peak European holidays', emoji: '🌡️', crowds: 'Peak', price: 'Highest', verdict: 'Beautiful but Bled gets busy' },
    { month: 'Aug', weather: 'Hot, peak, lake swimmable', emoji: '🌡️', crowds: 'Peak', price: 'Highest', verdict: 'Avoid mid-Aug if possible' },
    { month: 'Sep', weather: 'Warm, golden, quieter', emoji: '☀️', crowds: 'Mod', price: 'Mid-high', verdict: 'The connoisseur\'s month' },
    { month: 'Oct', weather: 'Cooling, autumn colours', emoji: '🌤', crowds: 'Low', price: 'Mid', verdict: 'Lovely if you like crisp air' },
    { month: 'Nov', weather: 'Cool, often grey, quiet', emoji: '⛅', crowds: 'Low', price: 'Low', verdict: 'Atmospheric but limited dining' },
    { month: 'Dec', weather: 'Cold, Christmas markets, snow likely', emoji: '🎄', crowds: 'Mod', price: 'Mid', verdict: 'Magical if you embrace the cold' },
  ],
  budgetTiers: [
    {
      label: 'Boutique Charm',
      range: '$150–$300/night',
      gets: 'Family-run boutique pensions and design hotels with lake views, alpine balconies, and excellent breakfast. Slovenia\'s sweet spot.',
      example: 'Penzion Mayer (Bled), Hotel Cubo (Ljubljana)',
    },
    {
      label: 'Premium',
      range: '$300–$600/night',
      gets: 'Lakefront hotels with spa, full restaurant, balconies facing the island. Vila Planinka and Bohinj ECO Hotel sit at the top of this tier.',
      example: 'Vila Planinka (Jezersko), Bohinj ECO Hotel',
    },
    {
      label: 'Top of the Range',
      range: '$600–$1,200/night',
      gets: 'Vila Bled — Tito\'s former summer residence on the lake, now a historic 5-star with terraces directly above the water. The honeymoon address in Slovenia.',
      example: 'Hotel Vila Bled, Grand Hotel Toplice',
    },
  ],
  areas: [
    {
      name: 'Bled',
      bestFor: 'Iconic Slovenia — the lake, the island, the castle',
      description: 'The unmissable base. The lake town is small, walkable in 90 minutes, and built entirely around the view. Stay on the north shore (Vila Bled, Penzion Mayer) for the best castle-and-island angles. 2–3 nights is the right length here.',
    },
    {
      name: 'Bohinj',
      bestFor: 'Wilder, quieter, alpine — the real Triglav National Park',
      description: '25 minutes from Bled but a different world — bigger, wilder, mostly undeveloped, surrounded by 2,500m peaks. Stay 1–2 nights at Bohinj ECO Hotel if you want the hiking-kayaking honeymoon rather than the lake-postcard one.',
    },
    {
      name: 'Ljubljana',
      bestFor: 'City honeymoon component — pedestrian capital, food, culture',
      description: 'A pastel Baroque-and-Plečnik riverside capital of 280,000 — the most underrated European city. 45 minutes from Bled. Stay 2 nights at Hotel Cubo or Vander Urbani Resort to bookend the lake stay with culture and dinner.',
    },
    {
      name: 'Jezersko / Soča Valley',
      bestFor: 'Off-grid alpine retreats and Slovenia\'s wildest scenery',
      description: 'For couples wanting to disappear: Jezersko is a tiny mountain valley 90 minutes from Bled with the spectacular Vila Planinka. The Soča Valley is the emerald-river western frontier where Hiša Franko (Ana Roš) sits. Both worth a 1-night detour.',
    },
  ],
  expertTips: [
    {
      tip: 'Combine Bled with Ljubljana and ideally Bohinj — don\'t just do the lake',
      detail: 'Three nights Bled, two nights Ljubljana, one night Bohinj is the perfect 6-night Slovenia. The lake alone is two days of beauty; you need the capital for restaurants and the wilder lake for contrast. Add Hiša Franko in the Soča Valley if you can spare a night.',
    },
    {
      tip: 'Eat kremšnita at Park Hotel by the lake',
      detail: 'The Bled cream cake — a square of vanilla custard and whipped cream between two thin pastry layers — was invented at Park Hotel in 1953 and the original is still served there. It is somehow exactly the right thing after a morning of walking around the lake.',
    },
    {
      tip: 'Rent a car — you\'ll use it constantly',
      detail: 'Public transport between Bled, Bohinj, Ljubljana, and the Soča Valley exists but is slow. A car (€30–€50/day) from Ljubljana airport pays for itself by the second day. Drive on the right, motorway vignette required (€7.50/week).',
    },
    {
      tip: 'Book Hiša Franko 3+ months ahead',
      detail: 'Ana Roš\'s restaurant in Kobarid is in the World\'s 50 Best, and the tasting menu is the dinner of the trip. It\'s a 90-minute drive from Bled through the spectacular Soča Valley. Book accommodation next door (Hiša Polonka) to avoid the night drive back.',
    },
    {
      tip: 'Walk around Lake Bled at least once — anti-clockwise',
      detail: 'The 6km lake path takes 90 minutes and is the only way to see every angle of the island. Go anti-clockwise from Vila Bled or the castle side so the island stays in view longer. Stop at the Mlino swans, the wooden Mlinski klanc bench, and the small chapel halfway around.',
    },
  ],
  packing: [
    { item: 'Real walking shoes', why: 'Vintgar Gorge boardwalk, the Bled lake circuit, the castle hill, and any Bohinj activity all need grip. Trainers or light hikers, not flat-soled fashion sneakers.' },
    { item: 'Swimsuit — both lakes are clean and swimmable', why: 'Bled is up to 23°C in late summer; Bohinj is colder but locals swim. Hotel spa pools (Vila Bled, Bohinj ECO) require swimwear too.' },
    { item: 'Layered jacket — even in summer', why: 'Evenings at 500m altitude drop to 15°C even in July. A light insulated jacket is non-negotiable. In the mountains expect 10°C cooler than the lake.' },
    { item: 'Smart-casual dinner outfit', why: 'Castle restaurant, Hiša Franko, and Atelje all reward dressing up — not formal, but linen-and-loafers level. No flip-flops at dinner.' },
    { item: 'Sunscreen and hat', why: 'High altitude UV is stronger than the temperature suggests. The lake reflects sun like a mirror at midday.' },
    { item: 'European plug adapter and small umbrella', why: 'Standard EU two-pin sockets. Alpine weather changes fast in afternoon — a packable umbrella saves the picnic.' },
  ],
  guide: {
    getting: 'Fly into Ljubljana Jože Pučnik Airport (LJU) — easyJet, Wizz Air, Lufthansa, British Airways, Air France. Direct from most European capitals (1–2.5h). From the US, connect via Frankfurt, Munich, Paris, or London. From LJU airport to Bled: 45 minutes by car (€60 taxi) or pre-booked shuttle (€15/person). Trieste airport (TRS) in Italy is the alternative — slightly cheaper flights, 90 minutes to Bled.',
    where: 'Bled (Vila Bled, Penzion Mayer, Grand Hotel Toplice) for 2–3 nights of the iconic lake postcard. Bohinj (Bohinj ECO Hotel, Garden Village glamping) for 1–2 nights of wilder alpine quiet. Ljubljana (Hotel Cubo, Vander Urbani) for 2 nights of capital culture and dinner. Jezersko (Vila Planinka) if you want an off-grid wilderness night.',
    when: 'June and September are the sweet spots — warm enough to swim, long daylight, before/after peak European summer crowds. May is beautiful (wildflowers everywhere) but lake water is cool. July–August are gorgeous but Bled gets genuinely crowded with bus tours. October has spectacular autumn colour. Avoid November to March unless you want a ski-and-fireplace honeymoon (which is actually a great option).',
  },
  localFood: 'Kremšnita (the Bled cream cake) at Park Hotel where it was invented in 1953, štruklji (rolled dumplings, sweet or savoury) at a Ljubljana market kitchen, žlikrofi (stuffed pasta, Idrija specialty), trout from the Soča river grilled with lake butter, the full tasting menu at Atelje in Ljubljana or Hiša Franko in Kobarid (Ana Roš, World\'s 50 Best), and a glass of Goriška Brda orange wine on a Ljubljana riverside terrace at golden hour.',
  currency: 'Euro (EUR)',
  language: 'Slovene (English widely spoken)',
  timezone: 'UTC+1 (CET) / UTC+2 (CEST in summer)',
  seo: { title: 'Slovenia Honeymoon: 6 Lake Bled Hotels Scored 2026', description: 'Lake Bled, Bohinj and Ljubljana honeymoon guide. 6 hotels ranked: Vila Bled, Vila Planinka, Hotel Cubo. Best months, costs, itinerary.' },
}

export default meta
