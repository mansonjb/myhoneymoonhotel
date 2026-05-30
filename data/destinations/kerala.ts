import type { DestinationMeta } from '@/types/destination'

const meta: DestinationMeta = {
  hero: '/images/hotels/taj-malabar-resort-spa-kerala/hero.webp',
  tagline: 'Backwater houseboats, hill-station tea estates, and the world\'s oldest spa tradition — the slowest, most sensory honeymoon in Asia.',
  intro: 'Kerala is the green, languid, spice-scented south of India — a 600-kilometre coast of palm-fringed lagoons, terraced tea hills, and silent backwater canals that have been ferrying rice and lovers for a thousand years. The honeymoon currency here is not adrenaline but slowness: a private kettuvallam houseboat drifting through Alleppey at dawn, the smell of cardamom and wet earth in Munnar\'s tea estates, a four-handed Ayurveda massage in a 200-year-old wooden mansion, a fresh karimeen fish grilled on a Marari beach at sunset. The Portuguese, the Dutch, the British, and the Arabs all came here for the pepper and stayed for the light. Couples come for the same reason their grandparents flew to the south of France in 1955 — to actually decompress, eat unbelievably well, and remember each other.',
  bestTime: 'Nov–Mar',
  flightFrom: '9–11h from Europe via Doha/Dubai',
  topExperience: 'Backwater Houseboat & Ayurveda Retreats',
  perfectFor: [
    'Couples who want a genuinely slow honeymoon — boats, hammocks, long meals, no schedule',
    'Wellness travellers ready to commit to a real Ayurveda programme rather than a spa-day version',
    'Food lovers — Kerala has arguably the most exciting regional cuisine in India',
    'Nature and birdwatching couples who prefer green to gold, hills to deserts',
    'Travellers wanting an Asian honeymoon that\'s not Bali, Thailand, or Maldives',
  ],
  skipIf: [
    'You need party nightlife or a buzzy beach-club scene — Kerala is profoundly quiet after 9pm',
    'You\'re visiting June–September — the monsoon shuts down beaches and most houseboat routes',
    'You can\'t handle spicy food or humidity — even mild Keralan dishes have heat',
    'You want a glossy resort bubble with little local contact — Kerala\'s charm requires you to step outside',
  ],
  experiences: [
    {
      icon: '🛶',
      title: 'Private Kettuvallam Houseboat in Alleppey',
      description: 'A converted teak-and-coir rice barge with a private bedroom, open deck, and a two-person crew that cooks fresh karimeen and prawn curry as you drift through the Vembanad backwaters. Dawn coffee on the deck as the village wakes up is the defining Kerala moment.',
      cost: '$250–$600 per couple (overnight, all meals included)',
      tip: 'Book a premium or luxury kettuvallam (Spice Coast Cruises, Lakes & Lagoons) rather than the budget options. Insist on a route into the smaller canals around Champakulam — the main lake is busy with day boats.',
    },
    {
      icon: '🌿',
      title: 'Ayurveda Couples\' Retreat',
      description: 'A genuine Ayurvedic programme is 7–14 days of daily two-therapist abhyanga massage, herbal steam, a personalised diet, and a doctor\'s consultation. Niraamaya and CGH Earth do the romantic version; Somatheeram and Kalari Kovilakom do the serious clinical version.',
      cost: '$200–$500 per couple per day (full board, treatments included)',
      tip: 'A 3-day "spa taster" is enjoyable but not transformative. Commit to at least 7 nights if you want to feel the difference. Avoid Ayurveda in the first trimester or if either of you has any acute illness.',
    },
    {
      icon: '🍃',
      title: 'Munnar Tea Estate Stay',
      description: 'The tea hills at 1,600m are a different Kerala — cool, misty, every slope a perfect green carpet of Camellia sinensis. Walk through the working plantations with a planter, tour a 19th-century tea factory, lunch at a colonial bungalow.',
      cost: '$150–$300 per couple (guided day with transport)',
      tip: 'Stay 2 nights at Windermere Estate or a Tata-restored planter\'s bungalow. Drive up via Thekkady to break the 4-hour journey from the coast — the road from Munnar straight to Cochin in one go is exhausting.',
    },
    {
      icon: '🐘',
      title: 'Periyar Wildlife Sanctuary Boat Safari',
      description: 'A dawn boat ride on Periyar Lake in Thekkady — wild elephants drinking at the shore, gaur (Indian bison), sambar deer, and if you\'re lucky, a tiger. The sanctuary is set in a forest of cardamom and pepper vines that scents the whole valley.',
      cost: '$50–$120 per couple (private boat with naturalist)',
      tip: 'The first government boat at 7:30am is the only one worth taking — wildlife disappears by 10am. Book through your hotel or directly at the KTDC office the day before. Bring binoculars; the boat keeps its distance.',
    },
    {
      icon: '🏖️',
      title: 'Marari Beach Slow Days',
      description: 'Marari is the quiet, palm-shaded fishing-village beach 90 minutes south of Cochin — no clubs, no high-rises, just one wide kilometre of sand, hammocks between palms, and a working fishing community. Marari Beach Resort or A Beach Symphony are the romantic choices.',
      cost: '$0 (beach is free)',
      tip: 'Walk south at sunset to watch the fishermen pull in the chemmeen-vala nets — they\'ll happily sell you the catch for $5 and grill it on the beach for you. Avoid swimming in monsoon season; the undertow is real.',
    },
  ],
  months: [
    { month: 'Jan', weather: 'Perfect — warm dry days, cool nights', emoji: '☀️', crowds: 'Peak', price: 'Highest', verdict: 'The ideal month — book early' },
    { month: 'Feb', weather: 'Warm, dry, full Ayurveda season', emoji: '☀️', crowds: 'Peak', price: 'High', verdict: 'Equally perfect, slightly cheaper' },
    { month: 'Mar', weather: 'Warming, still dry, hills cool', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Excellent — last best month' },
    { month: 'Apr', weather: 'Hot and humid on coast', emoji: '🌡️', crowds: 'Moderate', price: 'Mid', verdict: 'Head to Munnar if visiting' },
    { month: 'May', weather: 'Pre-monsoon — heavy, hot', emoji: '🌡️', crowds: 'Low', price: 'Low', verdict: 'Skip unless on a budget' },
    { month: 'Jun', weather: 'Monsoon begins — rain daily', emoji: '🌧️', crowds: 'Minimal', price: 'Lowest', verdict: 'Romantic for Ayurveda only' },
    { month: 'Jul', weather: 'Peak monsoon', emoji: '🌧️', crowds: 'Minimal', price: 'Lowest', verdict: 'Closed beaches, dramatic skies' },
    { month: 'Aug', weather: 'Wet, lush, Onam festival', emoji: '🌧️', crowds: 'Low', price: 'Low', verdict: 'Cultural visit, not beach' },
    { month: 'Sep', weather: 'Wet but breaking', emoji: '🌧️', crowds: 'Low', price: 'Low', verdict: 'Edge of monsoon — gamble' },
    { month: 'Oct', weather: 'Drying out, lush green', emoji: '🌤', crowds: 'Mod', price: 'Mid', verdict: 'Shoulder — green everywhere' },
    { month: 'Nov', weather: 'Dry, warm, season opens', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Excellent — secret sweet spot' },
    { month: 'Dec', weather: 'Dry, warm, festive', emoji: '☀️', crowds: 'Peak', price: 'Highest', verdict: 'Beautiful but holiday-priced' },
  ],
  budgetTiers: [
    {
      label: 'Boutique Heritage',
      range: '$150–$350/night',
      gets: 'Restored 19th-century planter\'s bungalows, heritage Dutch homes in Fort Kochi, charming backwater villas. Outstanding value for the level of character.',
      example: 'Brunton Boatyard (Cochin), Windermere Estate (Munnar)',
    },
    {
      label: 'Premium',
      range: '$350–$700/night',
      gets: 'Niraamaya pool villas, Taj Malabar suites, Kumarakom Lake Resort meandering villa-on-water. Full Ayurveda programmes and private boats included.',
      example: 'Niraamaya Kumarakom, Kumarakom Lake Resort',
    },
    {
      label: 'Ultra-Luxury',
      range: '$700–$2,000/night',
      gets: 'Private 4-bedroom kettuvallams, the Taj Madikeri (just over the Karnataka border), full-service luxury Ayurveda at Kalari Kovilakom (the Olympus of the genre).',
      example: 'Spice Coast Cruises private boats, Kalari Kovilakom (CGH Earth)',
    },
  ],
  areas: [
    {
      name: 'Cochin (Fort Kochi)',
      bestFor: 'Arrival base — heritage architecture, Chinese fishing nets, fusion food',
      description: 'The Portuguese-Dutch-British port city is the natural entry point. Fort Kochi\'s low-rise heritage quarter is one of the most photogenic neighborhoods in India — synagogues, spice warehouses, Kathakali theatres, and the silhouettes of Chinese fishing nets at sunset. Brunton Boatyard and Old Harbour Hotel are the romantic stays.',
    },
    {
      name: 'Alleppey & Kumarakom (Backwaters)',
      bestFor: 'The iconic kettuvallam houseboat experience',
      description: 'The Vembanad backwater region is what most people picture when they think of Kerala. Alleppey is the launching point for houseboats; Kumarakom on the opposite shore is the quieter, more romantic resort base. Niraamaya Backwaters and Kumarakom Lake Resort are the standouts.',
    },
    {
      name: 'Munnar (Tea Hills)',
      bestFor: 'Cool break from coastal heat, dramatic tea estate landscapes',
      description: 'At 1,600m altitude the temperature drops 10 degrees and the landscape becomes high-grown tea, eucalyptus forest, and mist. Stay 2 nights in a planter\'s bungalow at Windermere or Tea County. The drive from Cochin is 4 hours of beautiful, twisting road.',
    },
    {
      name: 'Marari & Mararikulam (Beach)',
      bestFor: 'The honest beach Kerala — palm shade, fishermen, hammocks',
      description: 'A 30-minute drive from Alleppey, Marari is everything an Indian Ocean beach was 40 years ago: empty, palm-shaded, fronted by a working fishing village. No high-rises permitted. Marari Beach Resort (CGH Earth) and A Beach Symphony are the romantic choices.',
    },
  ],
  expertTips: [
    {
      tip: 'Build a three-part Kerala — hills, backwaters, beach',
      detail: 'The cliché honeymoon route works because it works: 2 nights Munnar (cool tea hills) → 2 nights Alleppey/Kumarakom (houseboat plus shore villa) → 3 nights Marari (slow beach). Add Fort Kochi for arrival/departure. Skipping one of the three flattens the trip.',
    },
    {
      tip: 'Hire a car and driver for the whole trip — do not self-drive',
      detail: 'A 7-night driver-and-car package costs $400–$700 for the entire trip and is non-negotiable. Indian roads, signage, and driving habits do not reward foreigners. Your driver doubles as a guide, restaurant recommender, and fixer. Tip 10% at the end.',
    },
    {
      tip: 'Ayurveda only if you commit — 7 nights minimum',
      detail: 'A genuine programme requires daily 2–3 hour treatments, dietary restrictions (no alcohol, no caffeine, vegetarian), and early bedtimes. It is a wellness retreat, not a honeymoon spa break. If you want romance plus light spa, pick Niraamaya. If you want the real cleanse, pick Somatheeram or Kalari Kovilakom — but know what you\'re signing up for.',
    },
    {
      tip: 'Eat the regional specialities, not the Indian-restaurant standards',
      detail: 'Karimeen pollichathu (pearl spot fish in banana leaf), appam with stew, prawn moilee, Kerala-style beef fry, and a Sadya banana-leaf vegetarian feast are the things to seek out. Avoid butter chicken and naan in Kerala — that\'s northern food. Ask for the regional menu, not the tourist one.',
    },
    {
      tip: 'A 1-night houseboat is enough — 2 nights is too long',
      detail: 'The houseboat experience is glorious for 24 hours: lunch, sunset, dinner, dawn coffee. By the second day you\'ll be ready for a real shower and a walk. Spend 1 night on the kettuvallam plus 2–3 nights at a backwater shore resort like Niraamaya or Kumarakom Lake Resort.',
    },
  ],
  packing: [
    { item: 'Lightweight cotton and linen', why: 'Humidity is consistent year-round. Synthetic fabrics are miserable. Loose cotton kurtas and linen shirts are what locals wear for a reason.' },
    { item: 'Modest swim cover-up', why: 'Beaches outside resort grounds are working fishing villages — bikinis are fine on resort sand but a sarong walking through the village is respectful and avoids attention.' },
    { item: 'DEET repellent and long-sleeve evening layer', why: 'Mosquitos at dusk in backwater and tea-hill areas. Most hotels have nets but the bar terrace at sundown will sting if you\'re unprepared.' },
    { item: 'Closed walking shoes for Munnar', why: 'Tea estate walks are on uneven red-clay paths. The hills are cool enough (15–20°C) that you\'ll want a light cardigan in the evening.' },
    { item: 'Power bank and good headphones', why: 'Some backwater resorts have planned afternoon power-cuts as part of "digital detox" programming. A power bank means you can keep reading. Driver hours mean long, quiet stretches with great landscape — podcasts help.' },
    { item: 'Imodium and a basic medical kit', why: 'Kerala food is safe at decent restaurants and hotels, but the regional spice profile and water hygiene can occasionally surprise. Standard travel-stomach precautions apply.' },
  ],
  guide: {
    getting: 'Fly into Cochin International (COK) — the natural Kerala arrival. From Europe: connect via Doha (Qatar), Dubai (Emirates), or Abu Dhabi (Etihad) — 9–11 hours total. From the US: connect via Dubai or Doha — 18–22 hours. From the UK: British Airways now serves COK direct from Gatwick (10h). Trivandrum (TRV) is the alternative if you\'re starting in the south (Kovalam, Varkala).',
    where: 'Fort Kochi (Brunton Boatyard, Old Harbour) for 2 nights on arrival — heritage, food, atmosphere. Munnar (Windermere Estate, Tea County) for 2 nights of hill-station cool. Kumarakom (Niraamaya, Kumarakom Lake Resort) for 2 nights of backwater glamour, including 1 night on a private kettuvallam. Finish with 3 nights at Marari Beach Resort or A Beach Symphony for the slow beach.',
    when: 'November through March is the only honeymoon window. December and January are peak — hot dry days, cool nights, but expensive and busy. November and February are the connoisseur\'s months — same weather, 20–30% cheaper, fewer travellers. Avoid June through September entirely (monsoon shuts beaches and houseboat operations).',
  },
  localFood: 'Karimeen pollichathu (pearl spot fish grilled in banana leaf with green masala) at a Kumarakom backwater shack, appam with vegetable stew or prawn moilee at Mary\'s in Fort Kochi, the full Sadya banana-leaf vegetarian feast at Dakshin or Grand Hotel for an Onam-style spread, traditional Syrian Christian meen curry, fresh tender coconut water from a roadside seller, and Munnar-grown white tea sipped on a planter\'s veranda at 6am.',
  currency: 'Indian Rupee (INR)',
  language: 'Malayalam (English widely spoken)',
  timezone: 'UTC+5:30 (IST)',
  seo: { title: 'Kerala Honeymoon: 6 Backwater & Spa Hotels Scored 2026', description: 'Real Kerala honeymoon guide. 6 backwater houseboats, Ayurveda retreats and Marari beach hotels ranked. Best months, costs, itinerary.' },
}

export default meta
