import type { DestinationMeta } from '@/types/destination'

const meta: DestinationMeta = {
hero: '/images/hotels/four-seasons-bora-bora/hero.webp',
tagline: 'The original overwater bungalow destination. Nothing else comes close.',
intro: 'Bora Bora is the destination that invented the overwater bungalow in 1968 — and after 50+ years, nothing has surpassed it. Mount Otemanu rises 727m from the most turquoise lagoon on earth, ringed by a barrier reef and a string of white-sand motu islands where every luxury resort competes to give you the most cinematic honeymoon possible. This is where couples come when they want the photograph to match the feeling.',
bestTime: 'May–Oct',
flightFrom: '16–20h from Europe',
topExperience: 'Overwater Bungalows',
perfectFor: [
  'The overwater bungalow dream — Bora Bora invented this and still does it best',
  'Couples who want world-class snorkeling & water activities from the bungalow',
  'A landmark once-in-a-lifetime honeymoon with an iconic backdrop',
  'Photography-obsessed couples (Mount Otemanu at sunrise is life-changing)',
  'Those who want a self-contained resort cocoon with zero compromise on luxury',
],
skipIf: [
  'Adults-only is a priority — most Bora Bora resorts allow families',
  'Your budget is under $1,500/night — there is genuinely no mid-range here',
  'You want to explore local culture, markets, and authentic Polynesian life',
  'You need nightlife or variety of off-resort restaurants',
  'A 20-hour journey each way feels disproportionate for a 5-night stay',
],
experiences: [
  {
    icon: '⛵',
    title: 'Private Sunset Lagoon Sail',
    description: 'A private catamaran with champagne and canapés circling the lagoon as the sun drops behind Otemanu. The most romantic 2 hours in French Polynesia.',
    cost: '$200–$450 per couple',
    tip: 'Book through your hotel — independently-operated boats are fine but hotel-vetted is safer on a honeymoon.',
  },
  {
    icon: '🦈',
    title: 'Swim with Sharks & Rays',
    description: 'Snorkel in the Coral Garden with blacktip reef sharks and eagle rays in less than 1 metre of water. Completely safe, utterly surreal. Guided tours leave daily.',
    cost: '$80–$150 per person',
    tip: 'Go early morning (7–8am) before the tour boats arrive. The water clarity is best before 10am.',
  },
  {
    icon: '🚁',
    title: 'Helicopter Over Mount Otemanu',
    description: '20 minutes that will change how you see the island. The aerial view of the barrier reef, lagoon channels, and motu string is the defining Bora Bora photograph.',
    cost: '$400–$650 per couple',
    tip: 'Request a morning flight (7–9am) for best light and minimal heat haze. Ask the pilot to circle the summit twice.',
  },
  {
    icon: '🏝️',
    title: 'Private Motu Picnic',
    description: 'Your hotel drops you on a deserted sandbar with a gourmet picnic, snorkeling gear, and zero other people. They collect you 3 hours later. One of the best half-days you will ever spend.',
    cost: '$350–$600 per couple',
    tip: 'Request this for day 3 or 4 — after you\'ve settled in. It hits differently once you\'re fully relaxed.',
  },
  {
    icon: '🤿',
    title: 'Coral Garden Sunrise Snorkel',
    description: 'The Coral Garden between the main island and the motu resorts is one of the richest reef ecosystems in the Pacific. Do it before breakfast for the most pristine experience.',
    cost: '$60–$100 per person (guided) or free from the water villa',
    tip: 'Anantara and Four Seasons properties have the best direct reef access. At the St Regis, take the hotel boat.',
  },
],
months: [
  { month: 'Jan', weather: 'Warm, humid, occasional rain', emoji: '🌦', crowds: 'Low', price: 'Low', verdict: 'Good deal, some rain' },
  { month: 'Feb', weather: 'Warm, rainiest month', emoji: '🌧', crowds: 'Low', price: 'Lowest', verdict: 'Budget pick, expect rain' },
  { month: 'Mar', weather: 'Transition, drying out', emoji: '⛅', crowds: 'Low', price: 'Low', verdict: 'Underrated shoulder month' },
  { month: 'Apr', weather: 'Increasingly dry, beautiful', emoji: '🌤', crowds: 'Low', price: 'Low-mid', verdict: 'Sweet spot opens here' },
  { month: 'May', weather: 'Dry season begins, perfect', emoji: '☀️', crowds: 'Moderate', price: 'Mid', verdict: 'Excellent all-round' },
  { month: 'Jun', weather: 'Dry, breezy, ideal', emoji: '☀️', crowds: 'Moderate', price: 'Mid-high', verdict: 'One of the best months' },
  { month: 'Jul', weather: 'Peak dry season, flawless', emoji: '☀️', crowds: 'Peak', price: 'High', verdict: 'Perfect but crowded' },
  { month: 'Aug', weather: 'Flawless, busiest month', emoji: '☀️', crowds: 'Peak', price: 'Highest', verdict: 'Beautiful, most expensive' },
  { month: 'Sep', weather: 'Still dry, thinning out', emoji: '☀️', crowds: 'Moderate', price: 'Mid-high', verdict: 'Best value in dry season' },
  { month: 'Oct', weather: 'End of dry season, perfect', emoji: '🌤', crowds: 'Low-mod', price: 'Mid', verdict: 'Hidden gem month' },
  { month: 'Nov', weather: 'Transition, possible rain', emoji: '⛅', crowds: 'Low', price: 'Low-mid', verdict: 'Good deals, slight risk' },
  { month: 'Dec', weather: 'Warm, holiday rush, rain risk', emoji: '🌦', crowds: 'High', price: 'Very high', verdict: 'Expensive for a rainy month' },
],
budgetTiers: [
  {
    label: 'Accessible Luxury',
    range: '$1,200–$2,000/night',
    gets: 'Overwater bungalow with lagoon access, no private pool. Shared beach and amenities. Excellent for first-timers.',
    example: 'InterContinental Le Moana, Le Bora Bora by Pearl Resorts',
  },
  {
    label: 'Premium',
    range: '$2,000–$4,000/night',
    gets: 'Overwater villa with private plunge pool, direct lagoon steps, butler on call. The definitive Bora Bora experience.',
    example: 'Four Seasons, Conrad Bora Bora Nui, InterContinental Thalasso',
  },
  {
    label: 'Ultra-Luxury',
    range: '$4,000+/night',
    gets: 'Largest overwater villas, full butler service, in-villa dining as standard, complete seclusion. The best of the best.',
    example: 'St Regis Royal Estate Villa, Four Seasons Otemanu Villa',
  },
],
areas: [
  {
    name: 'East Side Motus (Sunrise)',
    bestFor: 'Best Mount Otemanu views',
    description: 'The barrier reef motus on the east side of the lagoon face the mountain directly. Morning light on Otemanu from your deck is the defining Bora Bora image. Four Seasons and most top resorts are here.',
  },
  {
    name: 'West Side Motus (Sunset)',
    bestFor: 'Dramatic sunset lighting',
    description: 'The InterContinental Thalasso Spa sits on the northwest motu with sunset views. You see the mountain in silhouette at dusk. Slightly less dramatic Otemanu view but the sunsets are extraordinary.',
  },
  {
    name: 'Main Island (Vaitape)',
    bestFor: 'Cultural context, shopping',
    description: 'The main island has the town of Vaitape, a produce market, pearl shops, and a handful of local restaurants. No resort hotels here — but worth a half-day tour by bike or 4WD.',
  },
  {
    name: 'Matira Beach',
    bestFor: 'Only public beach on the main island',
    description: 'The sole public white-sand beach on Bora Bora proper. InterContinental Le Moana sits adjacent. Great for couples who want motu access AND walkable beach. The only area with a laid-back, non-resort vibe.',
  },
],
expertTips: [
  {
    tip: 'Email the hotel 3 weeks before arrival',
    detail: 'Request a Mount Otemanu-facing unit by name — not just "best view." Specify east-facing. Properties prioritise honeymooners who communicate clearly over those who ask at check-in.',
  },
  {
    tip: 'The seaplane from Papeete costs $500 extra. Take it.',
    detail: 'Flying low over the lagoon and landing on the water next to your resort is one of the great arrival experiences in travel. The boat transfer is fine but the seaplane lands at a completely different emotional altitude.',
  },
  {
    tip: 'Reef-safe sunscreen is not optional',
    detail: 'French Polynesia has banned oxybenzone-based sunscreens to protect coral. Pack Badger, Raw Elements, or Stream2Sea before you go — resort shops charge 3× the price for approved brands.',
  },
  {
    tip: 'Book the shark & ray tour for day 2, not day 1',
    detail: 'The first day is for recovering from the journey and falling in love with your bungalow. Day 2 you\'re ready for adventure. Day 1 snorkelers often miss the best of the experience.',
  },
  {
    tip: 'Ask for overwater breakfast, not room service',
    detail: 'The difference between eating indoors and eating on your deck with the lagoon two feet below you is everything. Tell the hotel when booking that you want the overwater breakfast setup every morning.',
  },
],
packing: [
  { item: 'Reef-safe mineral sunscreen', why: 'Chemical sunscreen is banned — you\'ll be fined and the reef thanks you' },
  { item: 'GoPro or underwater camera', why: 'Your phone camera will not survive the lagoon. The sharks deserve better anyway.' },
  { item: 'Rash guard (×2)', why: 'Full days in the water on consecutive days — regular swimwear burns' },
  { item: 'Waterproof phone pouch', why: 'For kayaking, boat transfers, and glass-floor bungalow moments' },
  { item: 'One smart casual dinner outfit', why: 'Resort dinner dress code: no swimwear, but no jacket needed either' },
  { item: 'Reef sandals or water shoes', why: 'Coral entry points from bungalow ladders are sharp without protection' },
  { item: 'Cash (USD) or card with no FX fees', why: 'CFP Franc is the currency. USD is accepted everywhere. Avoid ATM fees with a Wise or Revolut card.' },
  { item: 'Light insect repellent', why: 'Evenings after sundown, especially near vegetation on the main island' },
],
guide: {
  getting: 'Fly to Papeete (PPT) in Tahiti — direct from Los Angeles (8h), Paris CDG (17h), or via Auckland. Then a 45-min Air Tahiti prop flight to Bora Bora Airport (BOB) on a motu islet. Your resort arranges a boat or seaplane transfer to the main lagoon (splurge on the seaplane — $500 extra, worth every cent).',
  where: 'All top resorts are on barrier reef motus, facing the lagoon and Mount Otemanu. East side (Four Seasons, Conrad) gets the most dramatic sunrise Otemanu views. West side (InterContinental Thalasso) faces the sunset. Le Taha\'a is on a neighbouring island — even more secluded, no Otemanu view, spectacular in its own right.',
  when: 'May–October is dry season with consistent trade winds (24–29°C). July–August is peak and crowded. September–October offers perfect weather with 30% fewer guests. November–April brings more rain but lush green hills and rates 25–40% lower.',
},
localFood: 'Poisson cru (raw tuna in coconut milk) is French Polynesia\'s national dish — extraordinary fresh. Chevreffes (freshwater prawns), breadfruit, fafaru (fermented fish — acquired taste), and exceptional French-influenced pastries. Resort dining is world-class; the Bloody Mary\'s restaurant on the main island is the legendary local institution.',
currency: 'CFP Franc (XPF) — pegged to the Euro. USD widely accepted.',
language: 'French and Tahitian. English spoken at all resort level.',
timezone: 'GMT-10 (French Polynesia Standard Time)',
}

export default meta
