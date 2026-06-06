import type { DestinationMeta } from '@/types/destination'

const meta: DestinationMeta = {
  hero: '/images/hotels/raffles-singapore/hero.webp',
  tagline: 'Six-star Asian hospitality, equator weather, and the world\'s best airport — the perfect honeymoon stopover.',
  intro: 'Singapore is the most efficient luxury city break on earth: a one-degree-north island state where the airport is a destination in itself, the food is the cheapest Michelin-starred cuisine in the world, the hotels are uniformly six-star, and the language barrier is zero. For honeymooners, it works in two ways — as a 3-to-4-night standalone for couples who want hyper-luxe city romance without the heat-and-stress of Bangkok or the price of Tokyo, or, more commonly, as the curated front-end to a Bali, Phuket, or Maldives leg. Raffles, Capella Sentosa, Marina Bay Sands, and Mandarin Oriental are among the finest city hotels in Asia. Add Gardens by the Bay at dusk, a hawker dinner under the Supertrees, and a Sentosa beach day, and you have one of the most polished honeymoon openings imaginable.',
  bestTime: 'Feb–Apr & Jul (avoid Nov–Jan monsoon)',
  flightFrom: '12–14h from northern Europe, 18h from US East Coast',
  topExperience: 'Ultra-Luxe Tropical City Romance',
  perfectFor: [
    'Couples pairing Singapore with Bali, Phuket, or the Maldives as a stopover front-end',
    'Honeymooners who want six-star hospitality at 70% of Tokyo or Hong Kong prices',
    'Food-obsessed couples — Singapore is the most diverse food city in Asia',
    'First-time Asia travelers who want zero language barrier and total infrastructure',
    'Architecture and design lovers — Marina Bay, Gardens by the Bay, restored shophouses',
  ],
  skipIf: [
    'You need a beach-and-villa honeymoon — Sentosa beaches are urban, not Maldivian',
    'You\'re traveling November–January — daily afternoon monsoon thunderstorms',
    'You want \"authentic, raw, chaotic Asia\" — Singapore is the polished opposite',
    'You\'re on a budget — luxury hotels and Marina Bay dining are global-tier prices',
  ],
  experiences: [
    {
      icon: '🌳',
      title: 'Gardens by the Bay at Dusk',
      description: 'The Supertree Grove and the Cloud Forest dome are spectacular at any hour, but the OCBC Garden Rhapsody light-and-sound show at 7.45pm and 8.45pm — under the 50-metre vertical gardens — is one of the most romantic free experiences in Asia.',
      cost: '$0 (Supertree show) – $40pp (Cloud Forest + Flower Dome)',
      tip: 'Have a sundowner at Spago Bar on the Marina Bay Sands rooftop first (53rd floor), then walk across the Helix Bridge to Gardens by the Bay for the 8.45pm show. The crowd thins after the first show.',
    },
    {
      icon: '🍜',
      title: 'Michelin-Starred Hawker Dinner',
      description: 'Singapore is the only city in the world with Michelin-starred hawker stalls. Hawker Chan (soya sauce chicken rice, S$5), Liao Fan Hong Kong Soya Sauce, and the legendary chilli crab at Jumbo or Long Beach Seafood — eaten on plastic stools, washed down with Tiger beer.',
      cost: '$10–$80 per couple (hawker) — $200 (full chilli crab dinner)',
      tip: 'Maxwell Food Centre (Tian Tian Hainanese Chicken Rice — Anthony Bourdain\'s pick) for lunch. Newton Food Centre for dinner with chilli crab. Skip the touristy Lau Pa Sat satay street unless it\'s post-midnight.',
    },
    {
      icon: '🥃',
      title: 'Singapore Sling at the Long Bar',
      description: 'Raffles\' Long Bar is where the Singapore Sling was invented in 1915. Throwing peanut shells on the floor is still tradition. Touristy? Absolutely. But sipping one in the colonnaded Raffles courtyard before dinner at Tiffin Room is a non-negotiable Singapore honeymoon ritual.',
      cost: '$35–$40 per Singapore Sling',
      tip: 'Order one Sling to share for the photo, then move to Writers Bar inside the main Raffles building for a quieter, more elegant drink. Reserve a table at Tiffin Room or BBR for dinner same evening.',
    },
    {
      icon: '🏝️',
      title: 'Sentosa Island Day',
      description: 'Capella Sentosa\'s beach club, lunch at Cliff or Tablescape, an afternoon at Tanjong Beach Club, and sunset at the southernmost point of continental Asia. Sentosa is Singapore\'s only proper beach experience — not Maldivian, but a beautiful tropical escape inside the city.',
      cost: '$150–$400 per couple (day pass + lunch + drinks)',
      tip: 'Take the Sentosa cable car from Mount Faber for the arrival, not the bridge — the 15-minute ride over the harbour is one of the city\'s underrated views. Book Tanjong Beach Club daybeds in advance.',
    },
    {
      icon: '🛍️',
      title: 'Tiong Bahru, Chinatown & Little India Walk',
      description: 'The three best neighbourhoods for shophouse architecture, street art, indie coffee, and authentic cooking. Tiong Bahru for art deco housing and Tiong Bahru Bakery croissants, Chinatown for the Buddha Tooth Relic Temple, Little India for the Tekka Centre and Mustafa.',
      cost: '$50–$150 per couple (food, coffees, small purchases)',
      tip: 'Start with breakfast at Tiong Bahru Bakery, taxi to Chinatown for the temple and Maxwell hawker, then evening walk through Little India ending at Komala Vilas for a vegetarian thali. Wear closed shoes for the temple.',
    },
  ],
  months: [
    { month: 'Jan', weather: 'Wet, daily thunderstorms', emoji: '🌧️', crowds: 'Moderate', price: 'Mid', verdict: 'Avoid — peak monsoon' },
    { month: 'Feb', weather: 'Drier, hot, sunny breaks', emoji: '☀️', crowds: 'High (Chinese NY)', price: 'High', verdict: 'Excellent — one of the best months' },
    { month: 'Mar', weather: 'Hot, dry, clear', emoji: '☀️', crowds: 'Moderate', price: 'Mid-high', verdict: 'Ideal weather window' },
    { month: 'Apr', weather: 'Hot, building humidity', emoji: '☀️', crowds: 'Moderate', price: 'Mid', verdict: 'Very good — last dry month' },
    { month: 'May', weather: 'Hot, humid, brief showers', emoji: '🌤', crowds: 'Low-mod', price: 'Mid', verdict: 'OK but humidity rising' },
    { month: 'Jun', weather: 'Haze possible, hot', emoji: '🌤', crowds: 'Moderate', price: 'Mid', verdict: 'Watch haze forecasts' },
    { month: 'Jul', weather: 'Hot, sunny, GSS sales', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Excellent — secret best month' },
    { month: 'Aug', weather: 'Hot, dry, F1 build-up', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Very good — strong sunny spells' },
    { month: 'Sep', weather: 'Hot, F1 weekend chaos', emoji: '🌤', crowds: 'Peak (F1)', price: 'Peak', verdict: 'Skip F1 weekend unless you want it' },
    { month: 'Oct', weather: 'Building wet season', emoji: '🌦', crowds: 'Moderate', price: 'Mid', verdict: 'Variable — afternoon storms' },
    { month: 'Nov', weather: 'Wet, daily afternoon storms', emoji: '🌧️', crowds: 'Low', price: 'Low-mid', verdict: 'Avoid — monsoon arrives' },
    { month: 'Dec', weather: 'Wettest, festive', emoji: '🌧️', crowds: 'High (holiday)', price: 'Peak', verdict: 'Avoid weather, busy hotels' },
  ],
  budgetTiers: [
    {
      label: 'Boutique Luxury',
      range: '$350–$600/night',
      gets: 'Refined design-led hotels in restored shophouses or in Tanjong Pagar — full club lounges, rooftop pools, exceptional breakfast. Singapore\'s 5★ entry-level is global 6★ standard.',
      example: 'Six Senses Maxwell, The Warehouse Hotel, The Vagabond Club',
    },
    {
      label: 'Premium',
      range: '$600–$1,200/night',
      gets: 'Iconic city addresses with full club access, river or Marina Bay views, harbour-side dining. The defining Singapore hotel category.',
      example: 'Mandarin Oriental, The Fullerton Bay, Marina Bay Sands premier rooms',
    },
    {
      label: 'Ultra-Luxury',
      range: '$1,200+/night',
      gets: 'Raffles suite (private butler, the State Room), Capella Sentosa garden villa with plunge pool, Marina Bay Sands sky suite with infinity pool access. The pinnacle of Asian city hospitality.',
      example: 'Raffles Singapore, Capella Singapore (Sentosa), Mandarin Oriental club suites',
    },
  ],
  areas: [
    {
      name: 'Marina Bay',
      bestFor: 'Iconic skyline, infinity pool, walkable to Gardens by the Bay',
      description: 'The postcard Singapore — Marina Bay Sands, the ArtScience Museum, the Helix Bridge, and the financial district skyline reflected in the water. Stay here for the views; the SkyPark infinity pool and Spago rooftop are at your doorstep. Most expensive area at peak season.',
    },
    {
      name: 'Sentosa Island',
      bestFor: 'Resort honeymoon-within-the-city — beaches and rainforest',
      description: 'Connected to Singapore by cable car and bridge, Sentosa is the island getaway side of the city. Capella Sentosa (the G20 summit hotel) sits in colonial-era buildings on a hilltop overlooking the South China Sea. Beach clubs, the Tanjong rainforest, golf, and proper escape feel — 15 minutes from downtown.',
    },
    {
      name: 'Civic District & Raffles',
      bestFor: 'Heritage, colonial Singapore, walkable culture',
      description: 'The historic core — Raffles Hotel, the National Gallery, the Padang, the Asian Civilisations Museum, and St Andrew\'s Cathedral. Quieter than Marina Bay, with the best heritage walking and instant access to Esplanade for sunset waterfront drinks.',
    },
    {
      name: 'Tanjong Pagar & Chinatown',
      bestFor: 'Boutique shophouse hotels, indie dining, walkable nightlife',
      description: 'The shophouse-restored neighbourhood for design-led boutique hotels (Six Senses Maxwell, The Warehouse). Pedestrianised food streets, the Buddha Tooth Relic Temple, and Maxwell hawker centre. Best base for couples who want neighbourhood feel rather than skyscraper hotels.',
    },
  ],
  expertTips: [
    {
      tip: 'Build in a Changi Airport buffer — the airport is a destination',
      detail: 'Jewel Changi (the Rain Vortex, the canopy garden), the butterfly garden in Terminal 3, and the rooftop sunflower garden in Terminal 2 are worth 3 hours on their own. Arrive 4 hours before your onward flight, not 2. Many honeymooners add a Crowne Plaza Changi day-use room post-overnight.',
    },
    {
      tip: 'Stay in two hotels for a 4-night Singapore — Marina Bay + Sentosa',
      detail: '2 nights at Marina Bay Sands or Mandarin Oriental for the city skyline, then 2 nights at Capella Sentosa for the resort-in-the-city feel. The contrast is the whole Singapore experience in one trip. Skip the move if you only have 3 nights — pick one.',
    },
    {
      tip: 'Skip the F1 Singapore Grand Prix unless you want it',
      detail: 'Mid-September F1 weekend triples hotel rates, closes streets across Marina Bay, and turns the city into a 4-day party. If you\'re an F1 fan, it\'s extraordinary. If you\'re not, avoid mid-September entirely.',
    },
    {
      tip: 'Eat at the hawker centres — they are the soul of the city',
      detail: 'Singapore\'s greatest food, by some distance, is in the hawker centres — Maxwell, Newton, Tiong Bahru Market, Old Airport Road. Chilli crab, Hainanese chicken rice, char kway teow, laksa, satay. Two Michelin stars exist among hawkers. Plastic stools, no menus in English at the best stalls, point at what others are eating.',
    },
    {
      tip: 'The MRT is faster than taxis — and air-conditioned',
      detail: 'Singapore\'s MRT is one of the world\'s best subways — clean, fast, runs until midnight, every station has English signage. Use it for cross-city journeys. Save taxis (Grab) for late evening Marina Bay to Sentosa or post-1am returns. Buy an EZ-Link card on arrival.',
    },
  ],
  packing: [
    { item: 'Lightweight breathable clothing', why: 'It is 28–32°C every day with 80%+ humidity. Linen, cotton, technical fabrics. Avoid synthetic — you will not be comfortable. Pack daily changes; everything stays slightly damp.' },
    { item: 'Light layer for arctic air-con', why: 'Singapore hotels, shopping malls, taxis and restaurants are aggressively air-conditioned (sometimes 18°C). Bring a light cardigan or pashmina — you will use it constantly indoors.' },
    { item: 'Compact umbrella', why: 'Even in dry season, brief intense afternoon thunderstorms happen. Every hotel lobby has loaner umbrellas, but having your own for sudden taxi-to-restaurant dashes matters.' },
    { item: 'Smart-casual evening outfit', why: 'Marina Bay rooftop bars (Lavo, CÉ LA VI, Spago) have smart-casual codes — no shorts, no flip-flops at dinner. Long Bar at Raffles is more relaxed but you\'ll feel underdressed in a T-shirt.' },
    { item: 'Sunglasses with UV protection', why: 'You are 1° from the equator — the UV index is consistently 11+ (extreme). Even on overcast days the UV is severe. Quality sunglasses and SPF 50 are essential, not optional.' },
    { item: 'Comfortable walking sandals', why: 'Singapore is intensely walkable — Marina Bay loop, Gardens by the Bay, shophouse neighbourhoods. Closed shoes get sweat-soaked in 20 minutes. Smart sandals (Birkenstock, Teva) handle the heat and most restaurants.' },
  ],
  guide: {
    getting: 'Fly into Changi (SIN) — the world\'s best airport. Direct flights from London (12h, Singapore Airlines, BA, Qantas), Frankfurt (12h, Singapore Airlines, Lufthansa), New York JFK (18h, Singapore Airlines — world\'s longest commercial flight), Los Angeles (17h), Sydney (8h). Changi to Marina Bay is 20 minutes by MRT (S$2.50) or 25 minutes by Grab (S$25). The MRT runs until midnight.',
    where: 'Marina Bay Sands or Mandarin Oriental for the iconic skyline view and the infinity pool. Raffles Singapore for heritage romance and the Long Bar. Capella Sentosa for the resort-in-the-city break. Six Senses Maxwell or The Fullerton Bay for boutique shophouse character. The 2-hotel split (city + Sentosa) is the honeymoon move for 4+ nights.',
    when: 'February–April is the perfect window: dry, sunny, 28–30°C, manageable crowds. July is the secret best month — drier than expected, Great Singapore Sale on. Avoid November–January (heavy daily afternoon thunderstorms) and mid-September F1 weekend (chaos). The temperature is identical year-round (28°C) — the variable is rain.',
  },
  localFood: 'Chilli crab at Long Beach Seafood or Jumbo, Hainanese chicken rice at Tian Tian (Maxwell Food Centre), laksa at 328 Katong Laksa, char kway teow at Outram Park, Michelin-starred soya sauce chicken rice at Liao Fan, kaya toast and soft-boiled eggs at Ya Kun Kaya Toast, and dinner at Odette (3-Michelin French) or Burnt Ends (1-Michelin Australian BBQ).',
  currency: 'Singapore Dollar (SGD) — 1 SGD ≈ 0.74 USD',
  language: 'English (official), Mandarin, Malay, Tamil',
  timezone: 'UTC+8 (SGT)',
  seo: { title: 'Singapore Honeymoon: 6 Six-Star City Hotels Scored 2026', description: '6 Marina Bay, Sentosa, Chinatown hotels ranked. Raffles, Capella, Marina Bay Sands. From $350/night. Best Feb-Apr & Jul.' },
}

export default meta
