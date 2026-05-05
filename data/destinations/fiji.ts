import type { DestinationMeta } from '@/types/destination'

const meta: DestinationMeta = {
hero: '/images/hotels/laucala-island-resort-fiji/hero.webp',
tagline: 'Private islands, warm Melanesian hospitality, and the most turquoise water you\'ve ever seen.',
intro: 'Fiji is the warm heart of the South Pacific — 333 islands scattered across a sea so intensely turquoise it looks digitally enhanced, inhabited by people whose natural warmth and joy are genuinely unlike anywhere else. The luxury resort scene is exceptional at every price point, from barefoot Mamanuca island bungalows to Laucala Island — one of the world\'s most extraordinary private island resorts. The reef system is among the healthiest in the Pacific, the kava ceremonies are a genuine cultural experience, and the "Bula!" greeting you\'ll receive a hundred times a day never stops feeling sincere. Fiji works as a standalone honeymoon or as the Pacific leg of an LA or Sydney stopover.',
bestTime: 'May–Oct',
flightFrom: '18–22h from Europe / 10h from LA',
topExperience: 'Private Island Luxury',
perfectFor: [
  'Private island dreamers — Fiji has more accessible private island resorts than anywhere',
  'Couples flying from or through Los Angeles, Sydney, or Auckland — Fiji is a natural stopover',
  'Divers and snorkelers — the Coral Coast and Kadavu have world-class reefs',
  'Those who want genuine cultural warmth alongside beach luxury',
  'Couples who want total seclusion without the 20-hour flight of French Polynesia',
],
skipIf: [
  'You\'re based in Europe with no other Pacific reason to travel — 22+ hours is a long way for beach',
  'You want city dining and cultural variety between beach days',
  'Hurricane season travel (November–April) makes you anxious — cyclone risk is real',
  'Budget is extremely tight — even mid-range Fiji requires $300+/night',
],
experiences: [
  {
    icon: '🌊',
    title: 'Private Island Day Trip, Yasawas',
    description: 'Charter a speedboat to one of the uninhabited Yasawa islands — white sand, a coral garden just offshore, and nobody else. Your hotel arranges a gourmet picnic box, snorkel gear, and collects you at sunset. The most Fiji-quintessential experience.',
    cost: '$200–$500 per couple (charter)',
    tip: 'Ask your hotel to pack a traditional Fijian lovo lunch box alongside the champagne — it\'s a unique pairing that most guests don\'t think to request.',
  },
  {
    icon: '🤿',
    title: 'Diving the Great Astrolabe Reef',
    description: 'The Great Astrolabe Reef off Kadavu Island is one of the Pacific\'s largest barrier reefs — 90km of pristine coral walls with manta rays, hammerhead sharks, and extraordinary soft coral gardens in visibility exceeding 30 metres.',
    cost: '$80–$150 per two-tank dive',
    tip: 'Stay at a Kadavu diving lodge rather than day-tripping from Nadi — the reef is 45 minutes by speedboat from the lodge beach, not 3 hours from the main island.',
  },
  {
    icon: '🥥',
    title: 'Traditional Kava Ceremony',
    description: 'Every arrival at a Fijian village or resort involves a kava welcome ceremony — a formal exchange of gifts and speeches followed by the sharing of yaqona (kava root drink) from a communal wooden bowl. It\'s earthy, slightly numbing, and genuinely meaningful.',
    cost: 'Usually included at all resorts',
    tip: 'Participate fully — clap once before drinking, say "bula!" loudly, and drain the cup. Half-heartedness is noticed and the ceremony loses meaning. The drink is completely safe and non-alcoholic.',
  },
  {
    icon: '🍽️',
    title: 'Traditional Lovo Feast',
    description: 'Food slow-cooked overnight on hot volcanic stones buried underground — chicken, fish, taro, and sweet potato wrapped in banana leaves and unearthed at the feast. Every luxury resort offers one; the ceremonial version with village storytelling and meke dance is extraordinary.',
    cost: 'Included at most resorts (weekly event)',
    tip: 'Ask if your resort does a village lovo rather than an in-house one — travelling to a nearby village for the feast changes the whole experience.',
  },
  {
    icon: '🏄',
    title: 'Surf at Cloudbreak or Restaurants',
    description: 'Fiji hosts two of the world\'s most famous surf breaks — Cloudbreak and Restaurants (Tavarua Island). Cloudbreak is a serious left-hander for experienced surfers only; Restaurants is more accessible. Tavarua Island Resort runs the best surf charters.',
    cost: '$150–$400 per day (boat charter)',
    tip: 'Non-surfers: the boat trip to Cloudbreak to watch the waves from the channel is a genuinely spectacular experience even if you never get in the water.',
  },
],
months: [
  { month: 'Jan', weather: 'Cyclone season, hot and wet', emoji: '🌧', crowds: 'Low-mod', price: 'Low', verdict: 'Cyclone risk — avoid if possible' },
  { month: 'Feb', weather: 'Wettest month, cyclone risk', emoji: '🌧', crowds: 'Low', price: 'Lowest', verdict: 'Highest cyclone risk' },
  { month: 'Mar', weather: 'Still wet, tapering', emoji: '🌦', crowds: 'Low', price: 'Low', verdict: 'Improving slowly' },
  { month: 'Apr', weather: 'Transition — drying nicely', emoji: '⛅', crowds: 'Low', price: 'Low-mid', verdict: 'Underrated shoulder month' },
  { month: 'May', weather: 'Dry season begins, excellent', emoji: '🌤', crowds: 'Moderate', price: 'Mid', verdict: 'Perfect opening pick' },
  { month: 'Jun', weather: 'Dry, warm, ideal', emoji: '☀️', crowds: 'Moderate', price: 'Mid', verdict: 'Excellent all-round' },
  { month: 'Jul', weather: 'Peak dry season, flawless', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Best weather, most popular' },
  { month: 'Aug', weather: 'Dry and beautiful', emoji: '☀️', crowds: 'Peak', price: 'Highest', verdict: 'School holidays — very busy' },
  { month: 'Sep', weather: 'Still excellent, thinning out', emoji: '☀️', crowds: 'Moderate', price: 'Mid-high', verdict: 'Sweet spot — great value' },
  { month: 'Oct', weather: 'Dry season ends, still good', emoji: '🌤', crowds: 'Low-mod', price: 'Mid', verdict: 'Good deals available' },
  { month: 'Nov', weather: 'Wet season building', emoji: '⛅', crowds: 'Low', price: 'Low-mid', verdict: 'Some risk, lower prices' },
  { month: 'Dec', weather: 'Wet, festive, cyclone season opens', emoji: '🌦', crowds: 'High', price: 'High', verdict: 'Festive premium, some weather risk' },
],
budgetTiers: [
  {
    label: 'Mamanuca Island Resort',
    range: '$300–$600/night',
    gets: 'Beautiful island resort, pool, reef snorkeling, excellent food, transfers by speedboat from Nadi. Outstanding value for private island feel.',
    example: 'Tokoriki Island Resort, Mana Island Resort, Likuliku Lagoon',
  },
  {
    label: 'Premium Yasawa',
    range: '$600–$1,500/night all-inclusive',
    gets: 'More remote island, higher seclusion, all-inclusive dining and activities, superb reef, fewer guests. The proper Fiji honeymoon experience.',
    example: 'Yasawa Island Resort, Qamea Resort & Spa, Vatulele Island Resort',
  },
  {
    label: 'Ultra-Private Island',
    range: '$2,000–$10,000+/night',
    gets: 'One of the world\'s most extraordinary private island resorts — complete exclusivity, private plane transfer, personal staff ratio exceeds guests, every wish anticipated.',
    example: 'Laucala Island, Turtle Island, Kokomo Private Island',
  },
],
areas: [
  {
    name: 'Mamanuca Islands',
    bestFor: 'Accessible luxury, most resorts, easiest transfers',
    description: 'A chain of small islands 30–60 minutes by speedboat from Nadi International Airport. The most developed resort area with the greatest choice of hotels at all price points. Likuliku Lagoon is the only overwater bungalow resort in Fiji.',
  },
  {
    name: 'Yasawa Islands',
    bestFor: 'Remote beauty, premium seclusion, dramatic scenery',
    description: 'A 90km chain of volcanic islands 2–3 hours by fast catamaran or 30 minutes by seaplane from Nadi. More remote, more dramatic, fewer tourists. Yasawa Island Resort and Qamea are among Fiji\'s finest properties.',
  },
  {
    name: 'Vanua Levu (North)',
    bestFor: 'Eco-luxury, vanilla farms, off-the-beaten-path',
    description: 'Fiji\'s second-largest island — much less visited than Viti Levu. Koro Sun Resort and Cousteau Resort offer eco-conscious luxury with excellent diving. A genuinely undiscovered corner of Fiji for couples who want authenticity.',
  },
  {
    name: 'Kadavu',
    bestFor: 'World-class diving, complete seclusion',
    description: 'Remote island south of Viti Levu with the Great Astrolabe Reef on its doorstep. Almost no casual tourism — only dedicated diving lodges. One of the Pacific\'s premier dive destinations for manta rays, reef sharks, and pristine coral.',
  },
],
expertTips: [
  {
    tip: 'Fly via LA or Sydney to save travel time',
    detail: 'From Europe, Fiji requires a transit — Los Angeles (Air Pacific/Fiji Airways) or Sydney (Fiji Airways) are the natural hubs. Using your Pacific stopover city for 2 nights each way turns the journey into part of the honeymoon rather than an ordeal.',
  },
  {
    tip: 'Seaplane transfers are an experience in themselves',
    detail: 'Turtle Airways and Pacific Island Air connect Nadi to remote resorts by seaplane — 15–40 minute flights over incredible turquoise reef systems at low altitude. The approach to landing on the water at your island is spectacular. Book at the same time as your resort.',
  },
  {
    tip: 'Book all-inclusive rates',
    detail: 'Fiji\'s remote island resorts have no alternatives for food and drink — everything is on resort property. All-inclusive rates prevent bill shock and allow you to relax fully. Yasawa and Mamanuca resorts quote per-person rates including all meals and activities at the top tier.',
  },
  {
    tip: 'Participate genuinely in Fijian culture',
    detail: 'The kava ceremony, lovo feast, and meke dance are not tourist shows — they are genuine cultural practices that Fijians perform with pride. Genuine participation (learning the claps, attempting the words, accepting the cup) transforms the experience and is deeply appreciated.',
  },
  {
    tip: 'Check cyclone insurance before booking',
    detail: 'Fiji\'s cyclone season runs November–April. If you must travel in this window, ensure your travel insurance explicitly covers cyclone disruption — many standard policies exclude named tropical storms. The Mamanuca Islands are most exposed to direct cyclone tracks.',
  },
],
packing: [
  { item: 'Reef-safe sunscreen only', why: 'Fiji\'s reefs are legally protected — many resorts and Fijian law ban chemical sunscreens; mineral-only is required' },
  { item: 'Sulu (wrap/sarong)', why: 'Required for entering all Fijian villages — a modest wrap around the waist is essential; resorts will lend one but your own is more comfortable' },
  { item: 'Underwater camera housing', why: 'The snorkeling and diving is too extraordinary to leave to surface photos — even a simple waterproof case transforms reef photography' },
  { item: 'Insect repellent (DEET)', why: 'Mosquitoes are present especially at dawn/dusk — dengue risk exists; cover up at these times' },
  { item: 'Dry bag for water taxis', why: 'All inter-island transfers involve open speedboats — essential protection for cameras, phones, and passports' },
],
guide: {
  getting: 'Fly to Nadi International Airport (NAN) — the main gateway. Fiji Airways flies direct from Los Angeles (10h), Sydney (4h), Auckland (3h), and Tokyo (7h). From Europe: connect via LA (best), Sydney, or Singapore. From NAN, your resort arranges transfers: speedboat (30–90 min, $50–$200 each way) for Mamanuca/Yasawa resorts, or seaplane ($200–$500 each way) for more remote properties. All luxury resorts arrange airport pickup — confirm in advance.',
  where: 'First-timers: Mamanuca Islands for accessibility and choice. Most romantic: Likuliku Lagoon (only overwater bungalows in Fiji) or Yasawa Island Resort. Best diving: Kadavu diving lodges or Qamea Resort. Private island fantasy: Laucala Island (book a year ahead, budget accordingly). For 10 nights: 7 nights Yasawa + 3 nights Nadi/Mamanuca for easy airport access.',
  when: 'May through October is the dry season — the only window to book with confidence. July and August are peak with perfect weather. September is the sweet spot: dry season, lower prices, thinner crowds. Avoid November through April if possible — cyclone season creates real disruption risk even in years with no direct hits.',
},
localFood: 'Kokoda (Fijian ceviche — raw fish marinated in coconut cream and lime juice), lovo feast (food slow-cooked on hot stones underground), palusami (coconut cream wrapped in taro leaves baked in earth oven), fresh papaya with lime for breakfast, and kava ceremony (traditional pepper-root drink) shared with your hosts. All luxury resorts offer a traditional lovo and kava welcome.',
currency: 'Fijian Dollar (FJD) — most resorts quote AUD or USD',
language: 'English, Fijian, Hindi (all official)',
timezone: 'UTC+12',
}

export default meta
