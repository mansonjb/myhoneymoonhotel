import type { DestinationMeta } from '@/types/destination'

const meta: DestinationMeta = {
  hero: '/images/hotels/post-ranch-inn-big-sur/hero.webp',
  tagline: 'The most dramatic coastline in North America — cliff-edge hotels, redwood canyons, Highway 1, and no passport required.',
  intro: 'Big Sur is the American honeymoon for couples who want the most dramatic coastline in North America delivered without a flight outside the country. Ninety miles of California\'s Highway 1 between Carmel-by-the-Sea and San Simeon, where the Santa Lucia Mountains drop straight into the Pacific in 1,000-foot vertical cliffs, and where the two greatest cliff-edge hotels in the United States — Post Ranch Inn and Ventana — sit on the same headland with views into the open ocean. The drive itself is the honeymoon: Bixby Bridge at sunset, McWay Falls cascading directly onto the sand, Pfeiffer Beach with its purple-flecked sand and the iconic Keyhole Rock arch, fog rolling in over the redwoods at golden hour. Add Carmel-by-the-Sea (a film-set village with no street addresses, only house names), Carmel Valley (vineyards and Bernardus Lodge), and the Big Sur food scene (Sierra Mar at Post Ranch is one of the great romantic dining rooms in America), and you have a honeymoon that needs no airport beyond San Francisco and no language other than English. Best in late spring and early autumn when the famous coastal fog burns off by midday.',
  bestTime: 'Apr–Oct',
  flightFrom: '5h from NYC (to SFO), 1h drive from Monterey airport',
  topExperience: 'Highway 1 Drive & Cliff-Edge Romance',
  perfectFor: [
    'US-based couples who want the most dramatic honeymoon possible without a passport',
    'Road-trip honeymooners — Highway 1 is one of the world\'s great drives and Big Sur is its heart',
    'Photography lovers — the light, fog, and cliffs deliver every postcard image of the California coast',
    'Foodies — Sierra Mar (Post Ranch), Aubergine (L\'Auberge Carmel), and Lucia (Bernardus) are world-class',
    'Couples who want luxury rusticity — Post Ranch is barefoot-luxe, not formal-marble',
  ],
  skipIf: [
    'You need beach swimming — the Pacific here is 12–15°C year-round; this is not Caribbean swim weather',
    'You need a single base — Big Sur is a 90-mile linear coast; plan to move every 2–3 nights',
    'You\'re a budget honeymooner — Post Ranch and Ventana start at $1,500+/night and food is California prices',
    'You\'re prone to motion sickness — the Highway 1 cliff-edge bends are unrelenting for 90 miles',
  ],
  experiences: [
    {
      icon: '🌉',
      title: 'Drive Highway 1 — Carmel to McWay Falls',
      description: 'The 35-mile drive south from Carmel-by-the-Sea past Bixby Bridge (the most photographed bridge in California), Point Sur Lighthouse, Pfeiffer Beach (purple sand, Keyhole Rock), and on to McWay Falls (an 80-foot waterfall directly onto a beach). The defining Big Sur experience and the reason you came.',
      cost: 'Free (just car rental)',
      tip: 'Drive south first thing in the morning before the fog burns off — Bixby Bridge in the marine layer is extraordinary. Stop at Nepenthe for lunch on the terrace at 800 feet above the Pacific.',
    },
    {
      icon: '🌲',
      title: 'Dinner at Sierra Mar',
      description: 'Post Ranch Inn\'s Sierra Mar restaurant is one of the most romantic dining rooms in America — glass walls on three sides, suspended 1,200 feet above the Pacific, sunset directly into the ocean. The wine cellar holds 12,000 bottles. Non-resident reservations possible but rare.',
      cost: '$300–$500 per couple (tasting menu + wine pairings)',
      tip: 'If staying at Post Ranch, book a sunset table at check-in. If staying elsewhere, request a non-resident reservation 60+ days ahead through the Post Ranch concierge.',
    },
    {
      icon: '🪨',
      title: 'Pfeiffer Beach at Sunset',
      description: 'Pfeiffer Beach has purple-flecked sand from manganese garnet in the cliffs and the iconic Keyhole Rock arch that catches the sunset directly through it in December and January. Accessed via the unmarked Sycamore Canyon Road off Highway 1.',
      cost: '$15 per car (USFS parking)',
      tip: 'The Keyhole sunset alignment is best mid-December to mid-January. June–August has the standard sunset (which is still spectacular). Avoid weekends — the parking lot fills.',
    },
    {
      icon: '🍷',
      title: 'Carmel Valley Wine Tasting',
      description: 'Carmel Valley is 30 minutes inland from Carmel-by-the-Sea, with a serious cool-climate wine scene — Bernardus, Chesebro, Talbott. A driver-guide day visiting 3 vineyards plus lunch at Lucia at Bernardus Lodge under the oaks. Bernardus is also one of the best hotels for the day if you want to overnight.',
      cost: '$400–$700 per couple (driver + tastings + lunch)',
      tip: 'Saturday and Sunday afternoons in Carmel Valley get busy. Tuesday–Thursday is calmer. Don\'t miss the Holman Ranch tasting room in Carmel Valley village.',
    },
    {
      icon: '🦦',
      title: 'Monterey Bay Aquarium & 17-Mile Drive',
      description: 'A half-day in Monterey: the world\'s most famous aquarium (sea otter exhibit and the kelp forest tank), then the 17-Mile Drive along Pebble Beach\'s coast — Lone Cypress, Spanish Bay, the Pebble Beach Lodge, otters in the surf at Spanish Bay.',
      cost: '$60 aquarium per person + $12 17-Mile Drive toll',
      tip: 'Book aquarium tickets online ahead — walk-up entry sells out summer weekends. Combine with lunch at Roy\'s at Spanish Bay or The Bench at Pebble Beach.',
    },
  ],
  months: [
    { month: 'Jan', weather: 'Wet, cool (15°C), dramatic surf', emoji: '🌧', crowds: 'Low', price: 'Low', verdict: 'Atmospheric — storm watching, Keyhole sunsets' },
    { month: 'Feb', weather: 'Wet, cool, possible road closures', emoji: '🌧', crowds: 'Low', price: 'Low', verdict: 'Risk of mudslide road closures' },
    { month: 'Mar', weather: 'Warming, wildflowers, fog reduces', emoji: '⛅', crowds: 'Low-mod', price: 'Mid', verdict: 'Lovely — green hills, flowers' },
    { month: 'Apr', weather: 'Dry, mild (18°C), best wildflowers', emoji: '☀️', crowds: 'Moderate', price: 'Mid-high', verdict: 'One of the two best months' },
    { month: 'May', weather: 'Dry, mild, marine layer mornings', emoji: '☀️', crowds: 'Moderate', price: 'High', verdict: 'Excellent — fog burns off by 11am' },
    { month: 'Jun', weather: 'Fog season starts, cool coast', emoji: '🌫', crowds: 'High', price: 'High', verdict: 'Fog can linger all day — risk' },
    { month: 'Jul', weather: 'Coastal fog mornings, inland warm', emoji: '🌫', crowds: 'Peak', price: 'Highest', verdict: 'Crowded; fog often persistent' },
    { month: 'Aug', weather: 'Fog season peak — most marine layer', emoji: '🌫', crowds: 'Peak', price: 'Highest', verdict: 'Avoid if fog matters; book inland Carmel' },
    { month: 'Sep', weather: 'Dry, warm (22°C), fog clears', emoji: '☀️', crowds: 'Moderate', price: 'High', verdict: 'The secret best month' },
    { month: 'Oct', weather: 'Warm, golden, low fog', emoji: '☀️', crowds: 'Low-mod', price: 'Mid-high', verdict: 'Excellent — best visibility of year' },
    { month: 'Nov', weather: 'Cooling, first rains', emoji: '⛅', crowds: 'Low', price: 'Mid', verdict: 'Quiet — Thanksgiving aside' },
    { month: 'Dec', weather: 'Wet, dramatic, Keyhole alignment', emoji: '🌧', crowds: 'Low-mod', price: 'Mid', verdict: 'Storm-watch romance — book Post Ranch' },
  ],
  budgetTiers: [
    {
      label: 'Boutique',
      range: '$400–$800/night',
      gets: 'Excellent Carmel-by-the-Sea inns and Carmel Valley lodges. L\'Auberge Carmel and Carmel Valley Ranch are the honeymoon-grade options at this tier.',
      example: 'L\'Auberge Carmel, Carmel Valley Ranch',
    },
    {
      label: 'Luxury',
      range: '$800–$1,800/night',
      gets: 'Bernardus Lodge in Carmel Valley, Ventana Big Sur cliff-edge cabins, Sanctuary Beach Resort. Real Big Sur luxury without quite Post Ranch budget.',
      example: 'Ventana Big Sur, Bernardus Lodge',
    },
    {
      label: 'Ultra-Luxury',
      range: '$1,800+/night',
      gets: 'Post Ranch Inn — the cliff-edge property that defines the American luxury cliff stay. Sierra Mar dining, infinity pools at 1,200ft, hilltop ocean cottages.',
      example: 'Post Ranch Inn, Ventana Premier Cliffhouse',
    },
  ],
  areas: [
    {
      name: 'Big Sur (the Coast — Carmel Highlands to Lucia)',
      bestFor: 'Cliff-edge drama — Post Ranch, Ventana, McWay Falls',
      description: 'The 30-mile stretch from Carmel Highlands south past Bixby Bridge, Andrew Molera, Pfeiffer Big Sur, Nepenthe, and McWay Falls is the heart of Big Sur. Post Ranch Inn and Ventana sit on adjacent headlands here. No cell signal in places, no chain stores, fog and redwoods.',
    },
    {
      name: 'Carmel-by-the-Sea',
      bestFor: 'Walkable village, art galleries, white-sand beach',
      description: 'A one-square-mile village immediately north of Big Sur — Clint Eastwood was mayor here. No street numbers, only house names; no neon signs; 100+ art galleries. L\'Auberge Carmel is the boutique luxury inn; Carmel Beach has the famous white sand and dogs running free.',
    },
    {
      name: 'Carmel Valley',
      bestFor: 'Wine country, sun (no coastal fog), luxury lodges',
      description: '30 minutes inland from Carmel — sunny when the coast is fogged. Bernardus Lodge, Carmel Valley Ranch, and the small village of Carmel Valley itself. Vineyards and tasting rooms. The perfect inland counterpart to the Big Sur cliff stay.',
    },
    {
      name: 'Monterey & Pebble Beach',
      bestFor: 'Aquarium, 17-Mile Drive, arrival base',
      description: '20 minutes north of Carmel — the Monterey Peninsula has the aquarium, Cannery Row, and the Pebble Beach 17-Mile Drive. Useful as an arrival night before heading south. Sanctuary Beach Resort and the Monterey Plaza Hotel are the honeymoon-grade picks.',
    },
  ],
  expertTips: [
    {
      tip: 'Three nights Big Sur + three nights Carmel/Carmel Valley is the perfect shape',
      detail: 'Post Ranch or Ventana for three nights of cliff-edge drama, then move 35 miles north to L\'Auberge Carmel or Bernardus Lodge for three more nights of village walks, wine tastings, and the Pebble Beach loop. The contrast makes both halves more vivid.',
    },
    {
      tip: 'Avoid June–August if fog matters to you',
      detail: 'Big Sur\'s marine layer is real — the cliff hotels can be wrapped in cloud for 3 of 7 days in July. April, May, September, and October are the four months with the most reliable burn-off (by 11am most days). October has the best visibility of any month.',
    },
    {
      tip: 'Book Post Ranch and Ventana 9–12 months ahead',
      detail: 'The cliff-edge ocean cottages at Post Ranch (Pacific Suite, Coast House) and Ventana\'s Pinnacle Suites sell out a year ahead for May–October. Add yourself to the cancellation list if you miss the first window — turnover is real.',
    },
    {
      tip: 'Check road conditions for Highway 1 — historic slide closures',
      detail: 'Big Sur\'s coast is famously unstable — major mudslides closed sections in 2017, 2021, and 2023. Check the Caltrans QuickMap for SR-1 status before driving south of Carmel. Detour adds 4 hours via Highway 101 if the cliff section is closed.',
    },
    {
      tip: 'Fly into Monterey (MRY) when possible — half the SFO drive',
      detail: 'Monterey Regional Airport (MRY) is 30 minutes from Carmel; SFO is 2h 45min. Direct MRY routes from Denver, LA, Phoenix, Seattle, Dallas. International or East Coast: fly to SFO and rent there, but consider the MRY connection — it saves a half-day each way.',
    },
  ],
  packing: [
    { item: 'Layered jackets — fleece + windproof shell', why: 'Big Sur swings 15°C in a day. Mornings on the coast are 12°C and foggy; afternoons inland in Carmel Valley are 27°C. Layers are essential.' },
    { item: 'Walking shoes with grip', why: 'The McWay Falls overlook, Pfeiffer Beach sand, and Garrapata Park trails all need grip. Smart trainers or light hiking shoes; leave the city boots at home.' },
    { item: 'Smart-casual evening wear', why: 'Sierra Mar at Post Ranch and Aubergine at L\'Auberge Carmel both have a quiet expectation of a collared shirt and pressed trousers / dress. Big Sur is California-casual, not lounge-around-in-shorts at dinner.' },
    { item: 'Swimwear for hotel pool and hot tub', why: 'The ocean is too cold to swim (12°C year-round), but Post Ranch, Ventana, Bernardus, and Carmel Valley Ranch all have heated pools and hot tubs. Cliff-edge infinity pools at sunset are the visual.' },
    { item: 'Polarized sunglasses', why: 'Ocean glare from the Highway 1 cliffs is intense year-round. Polarized lenses also reduce windshield glare on the long Pacific drives.' },
    { item: 'US plug adapter and power bank', why: 'US Type A/B plugs. International travellers need an adapter. Long drive days with photos and Google Maps drain phones fast — a power bank earns its bag space.' },
  ],
  guide: {
    getting: 'Fly into Monterey Regional (MRY) for the closest airport — 30 min to Carmel, 60 min to Big Sur. Routes from Denver, LA, Phoenix, Seattle, Dallas. SFO is 2h 45min south by car — fine if international and connecting. SJC (San Jose) is also a good option at 1h 30min. Rental car essential — pick up at the airport on arrival.',
    where: 'Post Ranch Inn for the ultimate cliff-edge honeymoon. Ventana Big Sur (Alila) for slightly less ultra but the same cliff. Bernardus Lodge in Carmel Valley for the wine-country counterpart. L\'Auberge Carmel for the village stay. Combine two of these over 6–8 nights.',
    when: 'September and October are the secret best months — warm, no fog, low crowds. April–May are equally excellent. Avoid July–August for fog. November–March is dramatic but wet, with road-closure risk. December has the unique Keyhole Rock sunset alignment if you can handle storm weather.',
  },
  localFood: 'Tasting menu at Sierra Mar (Post Ranch) with Pacific views, Aubergine\'s tasting menu at L\'Auberge Carmel (one Michelin star, often more), Lucia at Bernardus Lodge under the Carmel Valley oaks, fresh Dungeness crab at Phil\'s Fish Market on the way in from Monterey, Carmel Valley pinot noir with grilled rockfish, Schoch Family Farmstead cheese (Monterey Jack done seriously), and a Big Sur Bakery loaf on the cliff for breakfast.',
  currency: 'US Dollar (USD)',
  language: 'English',
  timezone: 'UTC-8 (PST) / UTC-7 (PDT in summer)',
  seo: { title: 'Big Sur Honeymoon: 6 California Coast Hotels Scored 2026', description: '6 Big Sur & Carmel hotels ranked. Post Ranch, Ventana, Bernardus. From $500/night. Apr-Oct verdicts.' },
}

export default meta
