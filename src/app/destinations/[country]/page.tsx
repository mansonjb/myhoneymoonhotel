import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getHotelsByDestination, getAllDestinations } from '@/lib/hotels'
import HotelCard from '@/components/HotelCard'
import Stay22MapWidget from '@/components/Stay22MapWidget'

interface Props { params: Promise<{ country: string }> }

export async function generateStaticParams() {
  return getAllDestinations().map(d => ({ country: d }))
}

// ── Rich destination data ─────────────────────────────────────────────────────

const DESTINATION_META: Record<string, {
  hero: string
  tagline: string
  intro: string
  bestTime: string
  flightFrom: string
  topExperience: string
  perfectFor: string[]
  skipIf: string[]
  experiences: { icon: string; title: string; description: string; cost: string; tip: string }[]
  months: { month: string; weather: string; emoji: string; crowds: string; price: string; verdict: string }[]
  budgetTiers: { label: string; range: string; gets: string; example: string }[]
  areas: { name: string; bestFor: string; description: string }[]
  expertTips: { tip: string; detail: string }[]
  packing: { item: string; why: string }[]
  guide: { getting: string; where: string; when: string }
  localFood: string
  currency: string
  language: string
  timezone: string
}> = {

  'bora-bora': {
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
  },

  maldives: {
    hero: 'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=1920&q=80',
    tagline: 'The world benchmark for overwater honeymoons. Private island, private lagoon, private world.',
    intro: 'The Maldives is the global benchmark for overwater honeymoons — 1,200 coral islands scattered across the Indian Ocean, each resort on its own private island with no traffic, no cities, and no agenda other than the two of you. The water here is the clearest blue on earth, the reefs are alive with manta rays and whale sharks, and the overwater villas are the most romantic accommodation category ever invented.',
    bestTime: 'Nov–April',
    flightFrom: '10–14h from Europe',
    topExperience: 'Overwater Villas',
    perfectFor: [
      'Couples who want complete seclusion — no leaving the island required',
      'Underwater enthusiasts (snorkeling and diving is world-class)',
      'Overwater villa lovers — the Maldives still sets the global standard',
      'Total luxury with no compromises — butler, spa, private beach',
      'Whale shark and manta ray encounters (Baa Atoll, South Ari Atoll)',
    ],
    skipIf: [
      'You want cultural immersion — the Maldives is a resort bubble',
      'You\'re on a tight budget — there is literally no budget option',
      'You get island fever quickly — most resorts have 30–100 villas maximum',
      'You want variety of restaurants off-property — your island is your world',
      'You prefer mountains, jungle or city energy',
    ],
    experiences: [
      { icon: '🌅', title: 'Sunrise Sandbank Breakfast', description: 'A private sandbank in the middle of the ocean, set with a breakfast table, champagne, and nothing else for 360 degrees. The most romantic morning in the world.', cost: '$200–$400 per couple', tip: 'Book at least 48h in advance — the best sandbanks get reserved quickly.' },
      { icon: '🐋', title: 'Whale Shark Snorkel (South Ari / Baa)', description: 'Swimming alongside the world\'s largest fish in open water. The Maldives has the highest density of whale shark sightings on earth, especially Baa and South Ari atolls.', cost: '$100–$200 per person', tip: 'LUX South Ari Atoll has a resident marine biologist and the best whale shark program.' },
      { icon: '🤿', title: 'Night Dive or Bioluminescence Swim', description: 'After sunset, the plankton in the Maldivian water glows electric blue. Walking into the lagoon at 9pm is one of the most astonishing things you will ever see.', cost: 'Free from your villa steps', tip: 'Vaadhoo Island is famous for it but it happens throughout the atolls in clear, calm water.' },
      { icon: '🛥️', title: 'Dolphin Sunset Cruise', description: 'Every evening, spinner dolphins gather to feed at the drop-off. Your resort boat follows them as the sky turns orange. Champagne optional but mandatory.', cost: '$150–$300 per couple', tip: 'Ask which direction the dolphins usually appear and book a sunset-facing bungalow.' },
      { icon: '🏄', title: 'Stand-Up Paddleboard at Dawn', description: 'The lagoon is completely flat before 7am. Paddleboarding above the coral in silence, watching fish below your board — deeply restorative. Most resorts include boards free.', cost: 'Included at most resorts', tip: 'Go before breakfast, before the wind picks up. Sunrise light on the lagoon is extraordinary.' },
    ],
    months: [
      { month: 'Jan', weather: 'Dry, warm, flat seas', emoji: '☀️', crowds: 'Peak', price: 'Very high', verdict: 'Perfect but expensive' },
      { month: 'Feb', weather: 'Dry season peak', emoji: '☀️', crowds: 'Peak', price: 'Very high', verdict: 'Best weather of the year' },
      { month: 'Mar', weather: 'Still dry, hot', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Excellent, slightly less busy' },
      { month: 'Apr', weather: 'Transition, some showers', emoji: '🌤', crowds: 'Moderate', price: 'Mid', verdict: 'Good value start' },
      { month: 'May', weather: 'SW monsoon begins', emoji: '🌦', crowds: 'Low', price: 'Low', verdict: 'Whale sharks arrive (Ari Atoll)' },
      { month: 'Jun', weather: 'Monsoon, rougher seas', emoji: '🌧', crowds: 'Low', price: 'Lowest', verdict: 'Best deals, some rain' },
      { month: 'Jul', weather: 'Monsoon, calmer than Jun', emoji: '⛅', crowds: 'Low', price: 'Low', verdict: 'Manta rays peak (Baa Atoll)' },
      { month: 'Aug', weather: 'Easing, warm', emoji: '⛅', crowds: 'Moderate', price: 'Low-mid', verdict: 'Hidden gem month' },
      { month: 'Sep', weather: 'Transitioning to dry', emoji: '🌤', crowds: 'Moderate', price: 'Mid', verdict: 'Good balance' },
      { month: 'Oct', weather: 'Transition, mixed', emoji: '⛅', crowds: 'Low-mod', price: 'Mid', verdict: 'Underrated shoulder' },
      { month: 'Nov', weather: 'Dry season returns', emoji: '☀️', crowds: 'Moderate', price: 'Mid-high', verdict: 'Dry season begins' },
      { month: 'Dec', weather: 'Peak dry season, holiday rush', emoji: '☀️', crowds: 'Peak', price: 'Very high', verdict: 'Beautiful, book far ahead' },
    ],
    budgetTiers: [
      { label: 'Accessible Luxury', range: '$500–$1,200/night', gets: 'Overwater or beach villa, shared facilities, reef access, spa. No butler. Conrad, Anantara Veli range.', example: 'Anantara Veli, LUX South Ari Atoll' },
      { label: 'Premium', range: '$1,200–$3,000/night', gets: 'Private pool villa, butler service, full dining included or half-board. The classic Maldives dream.', example: 'Four Seasons Kuda Huraa, St Regis Vommuli' },
      { label: 'Ultra-Luxury', range: '$3,000+/night', gets: 'Largest villas on private beaches, all-inclusive, helicopter access, dedicated butler team.', example: 'Soneva Jani, Conrad Two-Bedroom Water Villa' },
    ],
    areas: [
      { name: 'North Malé Atoll', bestFor: 'Most convenient — 20-min speedboat', description: 'Closest to the airport. Four Seasons Kuda Huraa and many well-known resorts are here. Easiest to reach, slightly more boat traffic visible.' },
      { name: 'South Malé Atoll', bestFor: 'Balance of access and remoteness', description: '45-min speedboat from the airport. Anantara Veli, Cocoa Island. Slightly more remote feel without the expense of a seaplane.' },
      { name: 'Baa Atoll (UNESCO)', bestFor: 'Manta rays & whale sharks', description: '25-min seaplane. Anantara Kihavah, Four Seasons Landaa Giraavaru. Home to Hanifaru Bay — the world\'s largest manta ray gathering (July–November).' },
      { name: 'Noonu / Raa Atolls', bestFor: 'Most remote, most exclusive', description: '40-45 min seaplane. Soneva Jani, Joali Being territory. The furthest from Malé and the most exclusive resorts on earth.' },
    ],
    expertTips: [
      { tip: 'Book your seaplane with your room, not after', detail: 'Seaplanes sell out months in advance for peak season. If you leave it late, you\'ll be on a 2-hour speedboat when your resort is a 25-min seaplane away.' },
      { tip: 'Ask for an eastward-facing villa', detail: 'Sunrise over the Indian Ocean from your private deck, directly into the lagoon. Most couples default to "best view" — specify direction.' },
      { tip: 'Bring an underwater camera, not a GoPro', detail: 'GoPros are fine but an Olympus TG-7 or similar gives you 4K without extra housing. The Maldivian water is so clear even phone cameras work at 2m depth.' },
      { tip: 'The half-board vs full-board decision matters more here', detail: 'Unlike city hotels, you cannot easily go off-property for meals. Full-board at $200–$400/day per couple is expensive but avoiding the restaurant bill anxiety is genuinely liberating.' },
      { tip: 'Email the resort 2 weeks before with a specific honeymoon request list', detail: 'Sandbank breakfast, rose petals, champagne on arrival, preferred morning for dolphin cruise. They respond to specificity with extraordinary kindness.' },
    ],
    packing: [
      { item: 'Polarised sunglasses', why: 'The lagoon reflection at midday will destroy your eyes without them' },
      { item: 'Reef-safe sunscreen', why: 'Same as Bora Bora — coral reef protection is the priority' },
      { item: 'Underwater camera (Olympus TG series)', why: 'The snorkeling here is too good to document with a blurry phone' },
      { item: 'Light waterproof jacket', why: 'Monsoon-season showers pass in 20 minutes but are dramatic' },
      { item: 'Anti-seasickness tablets', why: 'Speedboat transfers in monsoon season (May–Oct) can be rough' },
      { item: 'Two swimsuits per day', why: 'You\'ll be in the water constantly. Single suit dries overnight in the humidity — maybe.' },
      { item: 'Kindle or offline entertainment', why: 'The point is to disconnect. Embrace it. But 7 nights is a long time.' },
      { item: 'Good insect repellent', why: 'Sandflies are present at dusk near vegetation. DEET-free works fine.' },
    ],
    guide: {
      getting: 'Fly to Velana International Airport (MLE) in Malé. From there, your resort arranges either a seaplane transfer (20–45 min, spectacular — book with your room) or a speedboat (45–120 min depending on atoll). Seaplanes run daylight hours only: arrive before 3pm if your resort is a seaplane away.',
      where: 'North Malé Atoll (most accessible, 20-min speedboat), South Malé Atoll (45-min speedboat, quieter), Baa Atoll (UNESCO biosphere, 25-min seaplane, best for mantas), Noonu/Raa (35–45 min seaplane, most exclusive — Soneva Jani territory).',
      when: 'November–April is dry season — flat seas, excellent visibility, no rain, peak prices. May–October brings the SW monsoon — cheaper rates by 30–50%, occasional rain (short, tropical), but South Ari and Baa atolls have whale sharks and mantas in peak numbers.',
    },
    localFood: 'Maldivian cuisine: mas huni (tuna and coconut breakfast), garudhiya (fish broth), bis keemiya (samosas). Most resorts are fully international in their menus. Breakfast at the overwater restaurant as the sun rises is the essential daily ritual.',
    currency: 'Maldivian Rufiyaa (MVR) — but USD is accepted everywhere at resorts.',
    language: 'Dhivehi and English. English is spoken fluently at all resort level.',
    timezone: 'GMT+5 (Maldives Time)',
  },

  'st-lucia': {
    hero: 'https://images.unsplash.com/photo-1578922746465-3a80a228f223?w=1920&q=80',
    tagline: 'The Pitons. No other Caribbean island has this. Nothing comes close.',
    intro: 'St. Lucia is what happens when a Caribbean island refuses to be ordinary. The twin Piton peaks — UNESCO World Heritage, rising 770m from the sea — have attracted architects and hoteliers who built their finest work around them. The result: hotels like Jade Mountain that leave no fourth wall, so your private infinity pool looks directly up at the summits. Volcanic, dramatic, and completely unlike any other honeymoon destination.',
    bestTime: 'Dec–April',
    flightFrom: '8–9h from London',
    topExperience: 'Adults-Only Luxury',
    perfectFor: [
      'Couples who want drama — the Pitons are the most spectacular hotel backdrop in the Caribbean',
      'Architecture and design lovers — Jade Mountain and Sugar Beach are masterpieces',
      'Nature-focused couples (volcano hike, sulphur springs, rainforest)',
      'Sandals fans wanting a genuinely romantic AI resort with great beaches',
      'Those who want Caribbean + something more adventurous than a beach strip',
    ],
    skipIf: [
      'You want the flattest, whitest Caribbean beach — St Lucia\'s best beaches are volcanic sand',
      'You need a buzzing nightlife scene or cosmopolitan restaurant variety',
      'The 2-hour winding mountain road from the south airport is a dealbreaker',
      'You want a sun-bleached, flat-coast resort destination',
      'Budget under $400/night — the best hotels here are expensive for what they offer',
    ],
    experiences: [
      { icon: '🌋', title: 'Drive-In Volcano & Sulphur Springs', description: 'The world\'s only drive-in volcano at Soufrière. Mud baths in volcanic sulphur pools said to heal everything. Strange, dramatic, unforgettable. 30 minutes from the Piton hotels.', cost: '$30–$60 per couple (entrance)', tip: 'Go early morning before the tour groups. Combine with Toraille waterfall for a full day.' },
      { icon: '🧗', title: 'Gros Piton Summit Hike', description: 'A 2.5-hour guided hike to 738m with views across the Caribbean. Not easy. Completely worth it. One of the most rewarding things two people can do together on a honeymoon.', cost: '$80–$120 per couple (guide required)', tip: 'Start at 6am to summit before clouds and heat. Bring water and rain gear even in dry season.' },
      { icon: '⛵', title: 'Catamaran Piton Sail', description: 'Sailing along the coast at sunset with the twin Pitons behind you, champagne in hand. Many operators run a full-day version with snorkeling and beach stops.', cost: '$150–$350 per couple', tip: 'The full-day sail from Castries to Soufrière and back is the classic St Lucia day. Book through your hotel.' },
      { icon: '🌿', title: 'Rainforest Zip-line & Canopy Walk', description: 'St Lucia\'s interior is dense, lush jungle. Zip-line tours through the canopy are genuinely exhilarating — nothing like the tame Caribbean versions elsewhere.', cost: '$80–$120 per person', tip: 'Rainforest Adventures is the best operator. Book the early slot (8am) for wildlife sightings.' },
      { icon: '🐢', title: 'Turtle Watching at Night (June–Sept)', description: 'Leatherback and hawksbill turtles nest on St Lucia\'s beaches from June to September. A certified guide takes you to see nesting or hatchlings after dark. Deeply moving.', cost: '$40–$80 per person', tip: 'Via the St Lucia Heritage Tourism Programme. Numbers are limited — book weeks in advance.' },
    ],
    months: [
      { month: 'Jan', weather: 'Dry, 27°C, minimal rain', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Peak season, excellent' },
      { month: 'Feb', weather: 'Driest month of the year', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Best weather' },
      { month: 'Mar', weather: 'Dry, warm, pleasant', emoji: '☀️', crowds: 'Moderate', price: 'Mid-high', verdict: 'Slightly less busy' },
      { month: 'Apr', weather: 'End of dry season', emoji: '🌤', crowds: 'Moderate', price: 'Mid', verdict: 'Sweet spot value' },
      { month: 'May', weather: 'Transition, occasional showers', emoji: '⛅', crowds: 'Low', price: 'Low', verdict: 'Good deals, some rain' },
      { month: 'Jun', weather: 'Wetter, turtle season begins', emoji: '🌦', crowds: 'Low', price: 'Lowest', verdict: 'Budget pick, turtle watching' },
      { month: 'Jul', weather: 'Wet season, warm', emoji: '🌧', crowds: 'Low', price: 'Low', verdict: 'Best prices, rain trade-off' },
      { month: 'Aug', weather: 'Hurricane risk low, warm', emoji: '🌦', crowds: 'Low-mod', price: 'Low', verdict: 'Hurricane rare but possible' },
      { month: 'Sep', weather: 'Peak hurricane month', emoji: '⚠️', crowds: 'Low', price: 'Lowest', verdict: 'Avoid if risk-averse' },
      { month: 'Oct', weather: 'Easing, still some rain', emoji: '⛅', crowds: 'Low', price: 'Low', verdict: 'Underrated, good deals' },
      { month: 'Nov', weather: 'Drying out, improving', emoji: '🌤', crowds: 'Low-mod', price: 'Mid', verdict: 'Good value before peak' },
      { month: 'Dec', weather: 'Dry season returns, festive', emoji: '☀️', crowds: 'High', price: 'Very high', verdict: 'Beautiful, book early' },
    ],
    budgetTiers: [
      { label: 'Boutique Mid-Luxury', range: '$400–$800/night', gets: 'Piton views, pool villa, good breakfast. Less pampering but the setting is just as dramatic.', example: 'Stonefield Villa, Calabash Cove' },
      { label: 'All-Inclusive Luxury', range: '$600–$1,500/night', gets: 'Sandals-style full AI: unlimited dining, watersports, excursions, and couples massages. No bill anxiety.', example: 'Sandals Grande, Sandals Halcyon' },
      { label: 'Ultra-Luxury', range: '$1,200–$4,000+/night', gets: 'An open-air Sanctuary with your own infinity pool pointed at the Pitons. The most dramatic hotel room in the Caribbean.', example: 'Jade Mountain, Sugar Beach Viceroy' },
    ],
    areas: [
      { name: 'Soufrière (SW Coast)', bestFor: 'Piton views, dramatic hotels', description: 'The heart of honeymoon St Lucia. Jade Mountain, Anse Chastanet, Sugar Beach, and Stonefield are all here. The Pitons are minutes away. The most romantic area on the island.' },
      { name: 'Marigot Bay', bestFor: 'Boutique, quiet, secluded', description: 'A drowned river valley with one of the most protected natural harbours in the Caribbean. Small boutique hotels, yacht charter base, completely secluded vibe.' },
      { name: 'Rodney Bay (North)', bestFor: 'Nightlife, restaurants, easy access', description: 'Close to the small north airport (SLU), marina, restaurant strip. More commercial. Less romantic than the south but convenient for short stays or combined trips.' },
      { name: 'Cap Estate (North Tip)', bestFor: 'Private villa seclusion', description: 'The northernmost tip of the island. Cap Maison resort sits here — clifftop pools, boat-access-only beach, intimate. 30 minutes from the north airport.' },
    ],
    expertTips: [
      { tip: 'Fly into the right airport for your hotel', detail: 'Hewanorra (UVF) in the south: 2h by road to the Piton area, or 15-min helicopter. George FL Charles (SLU) in the north: tiny airport, 20 min to north coast hotels. Getting this wrong is a very expensive mistake.' },
      { tip: 'Book the helicopter transfer from UVF', detail: 'Papillon Helicopters run a 15-minute transfer from Hewanorra to Soufrière for ~$400/couple. After 10 hours of travel, those 15 minutes versus 2 hours on a winding mountain road are worth everything.' },
      { tip: 'Ask for a Star Sanctuary at Jade Mountain', detail: 'All Jade Mountain rooms are extraordinary but the Star Sanctuaries face the Pitons most directly and have the largest infinity pools. Request this category by name when booking.' },
      { tip: 'Go to Fond Doux Plantation for lunch', detail: 'A working cocoa and organic farm at the foot of the Pitons. The best rum punch on the island, exceptional Creole lunch, and the most authentically St Lucian experience near the resort hotels.' },
      { tip: 'The rainy season is greener and cheaper', detail: 'May–July rates are 30–50% lower. The jungle is lush. The Pitons look their most dramatic in the misty rain. Showers are usually short and the heat is lower. Not the conventional pick but genuinely beautiful.' },
    ],
    packing: [
      { item: 'Hiking boots or trail shoes', why: 'The Piton hike and volcano trails are serious terrain — sandals won\'t work' },
      { item: 'Reef-safe sunscreen', why: 'The coral at Anse Chastanet is among the best-preserved in the Caribbean' },
      { item: 'Light rain jacket', why: 'Even in dry season, Soufrière gets brief afternoon showers from the mountain' },
      { item: 'Insect repellent (DEET)', why: 'Jungle evenings are mosquito territory — pack proper repellent' },
      { item: 'Binoculars', why: 'St Lucia has 170+ bird species including the endemic St Lucia parrot' },
      { item: 'Waterproof dry bag', why: 'For boat transfers, snorkeling excursions, and the inevitable catamaran spray' },
      { item: 'Smart casual (not formal) for dinner', why: 'The Piton-view dinner tables at Jade Mountain are shoes-optional. The dress code is "resort romantic."' },
      { item: 'Sea sickness tablets', why: 'The catamaran sail around the point can be rough in trade wind season' },
    ],
    guide: {
      getting: 'Fly to Hewanorra International (UVF) in the south — 2h by road or 15-min helicopter to Soufrière. Most Piton-area resorts arrange private transfers. Helicopter with Papillon runs $350–$450/couple and is worth every cent after a long flight. Alternatively fly to George FL Charles (SLU) in the north if staying at Cap Maison or Rodney Bay properties.',
      where: 'The Soufrière/Piton area (southwest) is where all the best honeymoon hotels are — Jade Mountain, Sugar Beach, Anse Chastanet. The north (Castries, Rodney Bay) is more accessible but less romantic. Cap Estate (Cap Maison) is the boutique northern alternative.',
      when: 'December–April is peak dry season. May–June is shoulder — slightly cheaper, greener, occasional showers. July–September is hurricane season in the broader Caribbean — St Lucia is relatively south and less exposed, but August–September carry real risk.',
    },
    localFood: 'Green fig and saltfish (the national dish), bouyon (hearty broth), accra (salt-fish fritters), fresh grilled catch of the day everywhere. Creole cuisine is excellent. The Friday night street party at Gros Islet is the most authentic local experience.',
    currency: 'Eastern Caribbean Dollar (XCD). USD accepted everywhere.',
    language: 'English (official). French Creole patois widely spoken.',
    timezone: 'GMT-4 (Atlantic Standard Time)',
  },

  'turks-and-caicos': {
    hero: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80',
    tagline: 'The world\'s best beach, the healthiest reef in the Caribbean, and no compromises.',
    intro: 'Grace Bay has been voted the world\'s best beach on TripAdvisor more times than any other strip of sand. The water here — turquoise, 28°C, calm — is genuinely the colour people use as a default beach wallpaper. But Turks & Caicos delivers more than scenery: the reef systems off the west coast are among the healthiest in the hemisphere, the ultra-luxury hotel density is extraordinary, and the atmosphere is calm, unhurried, and entirely focused on the kind of deep relaxation that honeymoons require.',
    bestTime: 'Dec–May',
    flightFrom: '9–10h from London',
    topExperience: 'Luxury & Diving',
    perfectFor: [
      'Couples who want the world\'s most beautiful beach without compromise',
      'Divers and snorkelers — the reef here is genuinely world-class',
      'Ultra-luxury seekers — the resort density at the top end is exceptional',
      'Easy flight from the US East Coast (2.5h from NYC, 1.5h from Miami)',
      'Couples who want adults-only options with true beach luxury',
    ],
    skipIf: [
      'Budget is under $500/night — there is no affordable option on Grace Bay',
      'You want cultural depth or local authenticity — TCI is a resort destination',
      'You want varied nightlife — it\'s quiet evenings and early mornings here',
      'A beach-only destination sounds too one-dimensional for 7 nights',
      'You\'re visiting August–October — hurricane risk is real and rates don\'t reflect it',
    ],
    experiences: [
      { icon: '🐬', title: 'Sunset Catamaran with Dolphins', description: 'Spinner dolphins gather off Grace Bay most evenings before sunset. Catamaran sails time the departure to intercept them with champagne and the best light of the day.', cost: '$120–$200 per person', tip: 'Book through Silverdeep or Island Vibes — the most consistent dolphin encounter rate.' },
      { icon: '🤿', title: 'Wall Dive at West Caicos', description: 'The drop-off wall at West Caicos is one of the top 10 dive sites in the Caribbean — a vertical coral wall dropping 2,000m with sharks, eagle rays, and sea turtles.', cost: '$150–$250 per person (2-tank boat dive)', tip: 'Big Blue Unlimited runs the best West Caicos day trips. Book a week ahead in peak season.' },
      { icon: '🏝️', title: 'Private Charter to Little Water Cay', description: 'A protected nature reserve where wild iguanas outnumber people. Charter a private boat for the two of you, picnic on a deserted beach, snorkel the clearest water in the islands.', cost: '$400–$800 for private charter', tip: 'Combine with a stop at Iguana Island (Little Water Cay) for the wildlife. The iguanas are genuinely friendly.' },
      { icon: '🦈', title: 'Shark Dive at French Cay', description: 'The shark population at French Cay (southern TCI) is extraordinary — Caribbean reef sharks, nurse sharks, lemon sharks. One of the few places to reliably dive with multiple species.', cost: '$200–$350 per person', tip: 'Only for certified divers. PADI Open Water minimum. The sharks are curious, not aggressive.' },
      { icon: '🧘', title: 'Sunrise Paddleboard on Grace Bay', description: 'Before the sun gets high and the wind picks up, Grace Bay at 7am is the most meditative place in the Caribbean. The water is so clear you can see the shadow of your board on the sand below.', cost: 'Free or $30 rental', tip: 'Resorts provide boards free for guests. The 30-min window before 8am is noticeably better than later.' },
    ],
    months: [
      { month: 'Jan', weather: 'Perfect: 27°C, dry, gentle trade winds', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Peak season perfection' },
      { month: 'Feb', weather: 'Driest, most perfect', emoji: '☀️', crowds: 'Peak', price: 'Very high', verdict: 'Best month overall' },
      { month: 'Mar', weather: 'Excellent, slightly breezy', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Excellent, book early' },
      { month: 'Apr', weather: 'Still excellent, thinning out', emoji: '☀️', crowds: 'Moderate', price: 'Mid-high', verdict: 'Great value window opens' },
      { month: 'May', weather: 'Warm, low humidity, quiet', emoji: '🌤', crowds: 'Low', price: 'Mid', verdict: 'Underrated — best value' },
      { month: 'Jun', weather: 'Warm, calm, uncrowded', emoji: '🌤', crowds: 'Low', price: 'Low-mid', verdict: 'Excellent for divers' },
      { month: 'Jul', weather: 'Hot, humid, hurricane season starts', emoji: '⚠️', crowds: 'Low', price: 'Low', verdict: 'Risk begins, good prices' },
      { month: 'Aug', weather: 'Peak hurricane risk', emoji: '⚠️', crowds: 'Low', price: 'Low', verdict: 'Avoid unless flexible' },
      { month: 'Sep', weather: 'Highest hurricane risk month', emoji: '🌀', crowds: 'Very low', price: 'Lowest', verdict: 'Do not book this month' },
      { month: 'Oct', weather: 'Hurricane risk easing', emoji: '⚠️', crowds: 'Low', price: 'Low', verdict: 'Still risky — check policy' },
      { month: 'Nov', weather: 'Season returning, improving fast', emoji: '🌤', crowds: 'Moderate', price: 'Mid', verdict: 'Good shoulder value' },
      { month: 'Dec', weather: 'Peak season, holiday prices', emoji: '☀️', crowds: 'High', price: 'Very high', verdict: 'Beautiful, expensive, festive' },
    ],
    budgetTiers: [
      { label: 'Luxury', range: '$600–$1,200/night', gets: 'Full-service beachfront suite, pool, spa access. The entry point to Grace Bay luxury. Seven Stars, Beaches range.', example: 'Seven Stars Resort, Beaches Resort' },
      { label: 'Ultra-Luxury', range: '$1,200–$3,000/night', gets: 'Butler service, private beach section, world-class spa, all-suite format. The Grace Bay standard-bearer.', example: 'The Palms, Grace Bay Club, Wymara' },
      { label: 'Private Island', range: '$3,000+/night (AI)', gets: 'Your own island: boat transfer, all meals, activities, complete seclusion. Nothing like it in the Caribbean.', example: 'Ambergris Cay Private Island' },
    ],
    areas: [
      { name: 'Grace Bay (NE Providenciales)', bestFor: 'The world\'s best beach, all top resorts', description: 'The 12-mile strip where all the best resorts sit. Calm, turquoise, perfectly protected. Everything you came for is here.' },
      { name: 'West Coast (Amanyara area)', bestFor: 'Adults-only luxury, world-class diving', description: 'The less-visited west coast has Amanyara — one of the best adults-only resorts in the world — and direct access to the best dive sites in TCI. Quieter, more private, more meditative.' },
      { name: 'South Caicos', bestFor: 'Ultimate remoteness, untouched reef', description: 'A 20-minute domestic flight. Salterra (Luxury Collection) sits here. The reef is pristine and barely dived. For couples who have done Grace Bay and want something truly off-grid.' },
      { name: 'North Caicos', bestFor: 'Flamingos, empty beaches, local life', description: 'Connected to Middle Caicos by causeway. Pink flamingos, empty beaches, caves to explore. No luxury hotels — a day trip only, but the most authentically Turks & Caicos experience.' },
    ],
    expertTips: [
      { tip: 'Book the Wymara over the Palms for similar money', detail: 'Adults-only (18+) policy, 60 rooms vs 72, same Grace Bay beachfront, better spa by most accounts. The Wymara consistently outperforms its price point for honeymooners.' },
      { tip: 'Rent a golf cart, not a car', detail: 'Providenciales is small enough to explore by golf cart for the beach-and-resort area. Cheaper than a car, easier to park, and you\'re never more than 10 minutes from anywhere you need to be.' },
      { tip: 'The reef at the west end of Grace Bay is better than the east', detail: 'Where the snorkeling gear map starts — near the Coral Gardens area — is dramatically better than the hotel beach directly. A 15-minute walk west changes the experience completely.' },
      { tip: 'Da Conch Shack is not optional', detail: 'The best conch salad in the world, in a beach shack. Turks & Caicos conch fishing is the cultural backbone of the islands. One lunch here is more authentically TCI than a week in the resort.' },
      { tip: 'For Ambergris Cay, book a minimum of 5 nights', detail: 'The boat transfer (50 min) and the transition to island mode means 3 nights never feels like enough. You need 5–7 to truly exhale into the Ambergris experience.' },
    ],
    packing: [
      { item: 'Polarised sunglasses (essential)', why: 'The Grace Bay water reflection is blinding without them' },
      { item: 'Reef-safe sunscreen', why: 'The reefs here are healthy — keep them that way' },
      { item: 'Dive certification card (PADI/NAUI)', why: 'The best dives require Open Water minimum — don\'t arrive without it' },
      { item: 'Underwater camera', why: 'The visibility at French Cay is 40m+ — you need good optics' },
      { item: 'Travel insurance with hurricane clause', why: 'Non-negotiable for any Jul–Nov booking' },
      { item: 'Beach bag (large, waterproof)', why: 'You\'ll be carrying everything from the bungalow to the beach all day' },
      { item: 'Light linen for evenings', why: 'Air conditioning is aggressive at TCI resorts — pack a layer for dinner' },
      { item: 'Dry bag for boat excursions', why: 'Charter and dive boats have zero protection from spray' },
    ],
    guide: {
      getting: 'Fly to Providenciales International Airport (PLS). Direct flights from New York JFK (2.5h), Miami (1.5h), Boston (3h), Toronto, and London (9.5h via connection). No seaplane needed — most resorts are 15–30 minutes from the airport. Ambergris Cay adds a 50-min boat transfer.',
      where: 'Grace Bay (northeast Providenciales) has all the major resort hotels. West coast (Amanyara) is quieter and better for diving. South Caicos (Salterra) is the remote option requiring a short domestic flight. North Caicos is day-trip only.',
      when: 'December–May is peak with perfect conditions. June is underrated — quiet, dry, warm, cheaper. August–October is hurricane season with real risk. January–April is the statistical sweet spot.',
    },
    localFood: 'Conch is the national food — cracked, in salad, as fritters. Da Conch Shack on Grace Bay is the institution. Fresh lobster (in season Oct–July), snapper, grouper. Turks Head beer is the local brew. Off-resort dining at Coco Bistro (Grace Bay) is the best non-hotel meal on the island.',
    currency: 'USD (official currency). No exchange needed from the US.',
    language: 'English (official).',
    timezone: 'GMT-5 (Eastern Standard Time)',
  },

  seychelles: {
    hero: 'https://images.unsplash.com/photo-1547489432-cf93fa6c71ee?w=1920&q=80',
    tagline: 'Private islands, prehistoric granite boulders, and the world\'s most secluded beaches.',
    intro: 'The Seychelles is the Indian Ocean\'s best-kept secret for honeymooners who want something more remote, more wild, and more authentic than the Maldives. 115 granite islands that rose from the ocean floor 65 million years ago — these are the world\'s only mid-ocean granite islands, prehistoric and unlike anything else on earth. Anse Source d\'Argent on La Digue consistently ranks as one of the most beautiful beaches ever photographed. And Six Senses Zil Pasyon, on a private island, is arguably the most romantic resort on the planet.',
    bestTime: 'Apr–May, Oct–Nov',
    flightFrom: '10–12h from Europe',
    topExperience: 'Private Island Luxury',
    perfectFor: [
      'Couples who want the Maldives experience with more nature, culture, and variety',
      'Island-hoppers — Mahé, Praslin, La Digue, and private islands in one trip',
      'Wildlife lovers (giant Aldabra tortoises, rare birds, whale sharks)',
      'Those who want both luxury resort AND genuine beach exploration',
      'Couples coming from Europe (easier flight than the Maldives)',
    ],
    skipIf: [
      'You want all-inclusive simplicity — the Seychelles requires planning and inter-island logistics',
      'Budget is tight — even mid-range here is expensive',
      'You want to stay entirely on a resort without exploring — too much to miss',
      'You\'re going July–August (SE trade winds make some west-facing beaches rough)',
      'You need a direct US flight — connections via Dubai/Paris add serious journey time',
    ],
    experiences: [
      { icon: '🐢', title: 'Aldabra Giant Tortoise Encounter', description: 'The world\'s largest population of giant tortoises lives in the Seychelles. On Curieuse Island, they roam completely free. Walking among 200-year-old tortoises is one of the most extraordinary wildlife experiences on earth.', cost: '$60–$100 per person (boat + guide)', tip: 'Combine with a Curieuse Island day trip from Praslin. The mangrove walk and tortoise interaction is 2 hours.' },
      { icon: '🏖️', title: 'Anse Source d\'Argent at Sunrise', description: 'Pink granite boulders the size of houses, white sand so fine it squeaks, shallow turquoise water. This is the most photographed beach in the world. Arrive before 8am before the day visitors.', cost: '$15 entry to L\'Union Estate', tip: 'Stay on La Digue at Le Domaine de l\'Orangeraie — 10-minute bicycle ride to the beach.' },
      { icon: '🌊', title: 'Snorkel the Vallée de Mai (Praslin)', description: 'The UNESCO World Heritage palm forest where the Coco de Mer palm grows — the world\'s largest seed, with an unmistakably erotic shape. Walking through this prehistoric forest at dawn is deeply mysterious.', cost: '$30 entry', tip: 'Early morning for bird activity (Black parrot, Seychelles bulbul). Guided walks available.' },
      { icon: '🚤', title: 'Inter-Island Boat Charter', description: 'Hire a private boat for the day: Praslin to Curieuse to La Digue with stops for snorkeling in the marine park. The most beautiful island-hopping in the Indian Ocean.', cost: '$400–$800 for private charter', tip: 'Book through your hotel concierge. The Marine Park around Praslin has pristine coral.' },
      { icon: '🧘', title: 'Sunrise Yoga on a Private Beach', description: 'Six Senses Zil Pasyon and Anantara Maia both offer private sunrise yoga sessions on secluded beaches. Thirty minutes of silence and ocean in the early light before breakfast.', cost: 'Included at Six Senses, $50–$100 at others', tip: 'Request a private session rather than a group class at booking.' },
    ],
    months: [
      { month: 'Jan', weather: 'NW trades, calm NE coast', emoji: '🌤', crowds: 'High', price: 'High', verdict: 'Good, west coast can be rough' },
      { month: 'Feb', weather: 'Warm, NW trades', emoji: '🌤', crowds: 'High', price: 'High', verdict: 'Good weather overall' },
      { month: 'Mar', weather: 'Transition, calming', emoji: '☀️', crowds: 'Moderate', price: 'Mid', verdict: 'Good value transition' },
      { month: 'Apr', weather: 'Perfect: calm, clear, warm', emoji: '☀️', crowds: 'Low-mod', price: 'Mid', verdict: 'One of the best months' },
      { month: 'May', weather: 'Perfect: best overall conditions', emoji: '☀️', crowds: 'Low', price: 'Mid', verdict: 'The #1 month to visit' },
      { month: 'Jun', weather: 'SE trades begin, east rougher', emoji: '💨', crowds: 'Low', price: 'Low-mid', verdict: 'Windy, west coast still good' },
      { month: 'Jul', weather: 'SE trades, rough on some beaches', emoji: '💨', crowds: 'Moderate', price: 'Low-mid', verdict: 'Stick to west-facing beaches' },
      { month: 'Aug', weather: 'SE trades, rough on E coast', emoji: '💨', crowds: 'Moderate', price: 'Low-mid', verdict: 'Check beach orientation' },
      { month: 'Sep', weather: 'SE trades easing', emoji: '🌤', crowds: 'Low', price: 'Low', verdict: 'Quietest month, good deals' },
      { month: 'Oct', weather: 'Transition, excellent', emoji: '☀️', crowds: 'Low', price: 'Mid', verdict: 'Second best month overall' },
      { month: 'Nov', weather: 'Calm, warm, perfect', emoji: '☀️', crowds: 'Moderate', price: 'Mid-high', verdict: 'Excellent before peak prices' },
      { month: 'Dec', weather: 'NW trades, holiday peak', emoji: '🌤', crowds: 'Peak', price: 'Very high', verdict: 'Festive but expensive' },
    ],
    budgetTiers: [
      { label: 'Boutique Luxury', range: '$400–$900/night', gets: 'Charming small hotel, pool villa, great location. More character than the big chains.', example: 'Château de Feuilles (Praslin), Le Domaine de l\'Orangeraie (La Digue)' },
      { label: 'Premium Resort', range: '$900–$2,000/night', gets: 'Full butler, spa, overwater or beachfront villa, exceptional dining.', example: 'Four Seasons Seychelles, Constance Lémuria, Anantara Maia' },
      { label: 'Private Island Ultra-Luxury', range: '$2,000–$4,000+/night', gets: 'Your own private island, helicopter access, Six Senses wellness programming. The best of the Seychelles.', example: 'Six Senses Zil Pasyon (Félicité Island)' },
    ],
    areas: [
      { name: 'Mahé (Main Island)', bestFor: 'Airport access, Four Seasons, Anantara Maia', description: 'Where the international airport is. Four Seasons on the dramatic hillside, Anantara Maia with 30 villas and total seclusion. Good base but most honeymooners continue to outer islands.' },
      { name: 'Praslin', bestFor: 'Anse Lazio beach, Vallée de Mai, boutique hotels', description: '15-min Air Seychelles flight from Mahé. Home to Anse Lazio (one of the world\'s best beaches) and Constance Lémuria. More lush and green than Mahé.' },
      { name: 'La Digue', bestFor: 'Anse Source d\'Argent, bicycle life, romance', description: 'The most romantic island in the Seychelles. No cars (ox carts and bicycles). 30-min ferry from Praslin. Le Domaine de l\'Orangeraie is the best honeymoon hotel here.' },
      { name: 'Félicité (Private Island)', bestFor: 'Total seclusion, Six Senses Zil Pasyon', description: 'A helicopter or speedboat from Praslin. Six Senses has the island entirely to itself. 30 villas. Zero outside guests. One of the most remote luxury experiences in the world.' },
    ],
    expertTips: [
      { tip: 'Do the Mahé → Praslin → La Digue island hop', detail: 'A 10-night Seychelles honeymoon divided as: 3 nights Mahé (Four Seasons / Anantara), 3 nights Praslin (Constance Lémuria / Château de Feuilles), 4 nights La Digue (Le Domaine). The most complete honeymoon in the Indian Ocean.' },
      { tip: 'Go to Anse Source d\'Argent before 8am', detail: 'After 9am, day-trip boats arrive from Mahé and Praslin. The pre-8am window is just you, the pink boulders, and the silence. This is the photograph.' },
      { tip: 'The boat from Praslin to La Digue is 15 minutes', detail: 'Not a big journey — no need for a domestic flight. The Cat Cocos fast ferry is excellent and connects to island schedules. Book through your hotel.' },
      { tip: 'April–May is genuinely the best month', detail: 'No SE trade winds, no NW trades, flat calm sea, all beaches accessible regardless of orientation. This window is worth scheduling around.' },
      { tip: 'Six Senses is worth the price if you can do 5+ nights', detail: 'The wellness programming, the private island feel, and the Zil Pasyon-specific activities only reveal themselves over time. 3 nights is a tease. 5+ is transformative.' },
    ],
    packing: [
      { item: 'Reef-safe mineral sunscreen', why: 'Marine parks strictly enforce no-chemical-sunscreen rules' },
      { item: 'Hiking sandals', why: 'La Digue paths and Mahé coastal walks are rough terrain' },
      { item: 'Dry bag', why: 'Inter-island boat transfers get splashed. Keep cameras dry.' },
      { item: 'Lightweight layers for evenings', why: 'Air con at resorts + evening sea breeze can feel cool after the heat' },
      { item: 'Binoculars (compact)', why: 'Seychelles has extraordinary endemic birdlife — the Black Parrot, Seychelles Sunbird' },
      { item: 'Travel adapter (UK plug type G)', why: 'Seychelles uses UK-style plugs. Resorts usually have adapters but bring your own.' },
      { item: 'Cash in Euros or USD', why: 'Inter-island ferries and small La Digue restaurants prefer cash' },
      { item: 'Anti-malarial? No.', why: 'The Seychelles is malaria-free. No prophylaxis needed — one less thing to worry about.' },
    ],
    guide: {
      getting: 'Fly to Mahé International Airport (SEZ). No direct flights from the US — connect via Dubai, Doha, Abu Dhabi, or Paris (approximately 18–22 hours total from East Coast). From London it\'s about 11 hours direct (Air Seychelles, British Airways). From Mahé, take a 15-min Air Seychelles prop plane to Praslin or the Cat Cocos fast ferry.',
      where: 'Mahé (main island, airport access), Praslin (Vallée de Mai, Anse Lazio, 15-min flight), La Digue (Anse Source d\'Argent, bicycles, 30-min ferry from Praslin), Félicité/Silhouette (private islands, helicopter access). A multi-island trip is the classic Seychelles honeymoon.',
      when: 'April–May and October–November are the transition months with calm seas and all beaches accessible. December–March brings NW trade winds (west coast rougher). June–September brings SE trade winds (east coast rougher). The Seychelles has no true bad season, but April–May is measurably the best.',
    },
    localFood: 'Ladob (banana in coconut milk), shark chutney, fruit bat curry (a delicacy — taste if offered), grilled red snapper in Creole spices. Mason\'s Travel seafood BBQs on Mahé are the most authentic local experience. Fresh tropical fruit everywhere.',
    currency: 'Seychellois Rupee (SCR). USD, EUR, and GBP widely accepted at resorts.',
    language: 'Seychellois Creole, English, and French.',
    timezone: 'GMT+4 (Seychelles Time)',
  },

  hawaii: {
    hero: '/images/hotels/four-seasons-hualalai-hawaii/hero.webp',
    tagline: 'Paradise perfected — volcanic drama meets turquoise Pacific across 8 stunning islands.',
    intro: 'Hawaii is the only American honeymoon destination that genuinely rivals the world\'s finest. Eight islands, each with its own personality: Maui for luxury beach resorts and Hana road drama, the Big Island for active lava flows and Kohala coast magnificence, Kauai for Na Pali cliffs and raw jungle beauty, and Oahu for the energy of Honolulu with the calm of the North Shore. Unlike any other tropical destination, you get world-class cuisine, no passport requirements for Americans, and a culture of aloha that is genuinely, inexplicably warm.',
    bestTime: 'Apr–Jun & Sep–Nov',
    flightFrom: '10–12h from US mainland / 17–20h from Europe',
    topExperience: 'Beach & Volcanic Scenery',
    perfectFor: [
      'Couples who want the tropical dream without a passport — US-based travelers especially',
      'Foodies — farm-to-table dining in Maui and Big Island is world-class',
      'Adventure-seekers who want volcano hikes, helicopter rides, and snorkeling with mantas',
      'Couples who want variety — island-hopping gives you multiple personalities in one trip',
      'Those who want luxury resorts at a level equal to anywhere in the world',
    ],
    skipIf: [
      'You want total seclusion away from other tourists — Maui beach resorts can feel busy',
      'Budget is the priority — top-tier Hawaii is comparable in price to the Maldives',
      'You want a quick getaway — the journey from Europe is genuinely long',
      'You prefer old-world European culture and architecture',
    ],
    experiences: [
      {
        icon: '🌋',
        title: 'Helicopter Over Active Lava (Big Island)',
        description: 'Flying over Kilauea at night watching lava flow into the ocean is one of the most extraordinary things a human being can do. Blue Hawaiian Helicopters runs the definitive tour.',
        cost: '$300–$600 per person',
        tip: 'Book the doors-off helicopter for photography. Evening flights catch the lava glow best — arrive on island a day early so you\'re not jet-lagged.',
      },
      {
        icon: '🐋',
        title: 'Whale Watching from Maui (Jan–Mar)',
        description: 'Humpback whales migrate to Maui waters every winter — the Pacific Whale Foundation runs excellent tours from Maalaea Harbor. Seeing a 40-ton whale breach 30 metres from your boat is unforgettable.',
        cost: '$50–$120 per person',
        tip: 'Morning tours have calmer seas. The whales are most active January through March.',
      },
      {
        icon: '🤿',
        title: 'Manta Ray Night Snorkel (Big Island)',
        description: 'Snorkeling above giant manta rays feeding on plankton in the dark at Keauhou Bay. The mantas have wingspans up to 5 metres and glide directly beneath you. One of the most magical wildlife experiences on earth.',
        cost: '$80–$130 per person',
        tip: 'Book with Jack\'s Diving Locker or Manta Ray Advocates — they brief you properly and their guides are outstanding.',
      },
      {
        icon: '🌅',
        title: 'Haleakala Sunrise (Maui)',
        description: 'Driving to the 10,000-foot summit of Haleakala before dawn and watching the sun rise above the clouds is a rite of passage. The landscape looks Martian. The silence is absolute.',
        cost: '$30 park entry per car',
        tip: 'Book the sunrise permit at recreation.gov — it sells out weeks ahead. Bring a down jacket: it is genuinely cold at the summit.',
      },
      {
        icon: '🏄',
        title: 'Private Surf Lesson on Waikiki',
        description: 'Waikiki has the most forgiving waves in the world for learning. Private lessons with a local instructor on a longboard, with Diamond Head as your backdrop — this is how surfing was born.',
        cost: '$120–$200 per person (private lesson)',
        tip: 'Book a private lesson, not a group. The personal attention makes the difference between standing up and not.',
      },
    ],
    months: [
      { month: 'Jan', weather: 'Warm, some rain on windward coasts', emoji: '🌤', crowds: 'High', price: 'High', verdict: 'Whale season begins — worth it' },
      { month: 'Feb', weather: 'Warm, whale season peak', emoji: '🌤', crowds: 'High', price: 'High', verdict: 'Best whale watching of year' },
      { month: 'Mar', weather: 'Warming, end of whale season', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Spring break crowds, still excellent' },
      { month: 'Apr', weather: 'Ideal — dry, not too hot', emoji: '☀️', crowds: 'Moderate', price: 'Mid', verdict: 'Sweet spot starts here' },
      { month: 'May', weather: 'Perfect temperatures, low rain', emoji: '☀️', crowds: 'Low-mod', price: 'Mid', verdict: 'One of the best months' },
      { month: 'Jun', weather: 'Dry season in full swing', emoji: '☀️', crowds: 'Moderate', price: 'Mid-high', verdict: 'Excellent all round' },
      { month: 'Jul', weather: 'Hot, busy summer peak', emoji: '☀️', crowds: 'Peak', price: 'High', verdict: 'Beautiful but crowded' },
      { month: 'Aug', weather: 'Hot, peak summer', emoji: '☀️', crowds: 'Peak', price: 'Highest', verdict: 'Best weather, most expensive' },
      { month: 'Sep', weather: 'Warm, crowds thinning', emoji: '☀️', crowds: 'Moderate', price: 'Mid-high', verdict: 'Hidden gem — same weather, fewer people' },
      { month: 'Oct', weather: 'Ideal temperatures, low crowds', emoji: '🌤', crowds: 'Low-mod', price: 'Mid', verdict: 'Best value in peak season' },
      { month: 'Nov', weather: 'Slightly wetter, comfortable', emoji: '⛅', crowds: 'Low', price: 'Low-mid', verdict: 'Good deals, still lovely' },
      { month: 'Dec', weather: 'Holiday rush, some rain', emoji: '🌦', crowds: 'High', price: 'Very high', verdict: 'Expensive, holiday magic' },
    ],
    budgetTiers: [
      {
        label: 'Luxury',
        range: '$500–$1,000/night',
        gets: 'Excellent resort hotels on top beaches — Andaz Maui, Westin Hapuna. Full amenities, good dining, beautiful pools.',
        example: 'Andaz Maui at Wailea, Westin Hapuna Beach',
      },
      {
        label: 'Premium',
        range: '$1,000–$2,000/night',
        gets: 'Four Seasons and Ritz-Carlton territory. Private pools, butler-adjacent service, finest beach locations.',
        example: 'Four Seasons Maui at Wailea, Ritz-Carlton Kapalua',
      },
      {
        label: 'Ultra-Luxury',
        range: '$2,000+/night',
        gets: 'Four Seasons Hualalai on the Big Island — the most private, most beautiful resort in Hawaii. Bungalows set in ancient lava fields facing the Pacific.',
        example: 'Four Seasons Resort Hualalai, Montage Kapalua Bay',
      },
    ],
    areas: [
      {
        name: 'Maui — Wailea / Kaanapali',
        bestFor: 'Best overall luxury beach resort experience',
        description: 'Wailea on the south shore is the finest resort strip in Hawaii — Four Seasons, Fairmont Kea Lani, Andaz Maui. Kaanapali on the west shore is slightly more social with the famous Black Rock snorkeling. Both are sheltered from trade winds and have calm, swimmable water.',
      },
      {
        name: 'Big Island — Kona / Kohala Coast',
        bestFor: 'Most dramatic scenery, most exclusive resorts',
        description: 'The Kohala Coast is 30 miles of pristine beach resort against a backdrop of ancient black lava fields. Four Seasons Hualalai, Mauna Kea Beach Hotel, and Fairmont Orchid are here. The stargazing from Mauna Kea (4,200m) is the best on earth.',
      },
      {
        name: 'Kauai — North Shore / Poipu',
        bestFor: 'Raw natural beauty, most dramatic landscapes',
        description: 'The Garden Isle is the most beautiful island in Hawaii. Na Pali Coast is accessible only by boat or helicopter. Hanalei Bay on the north shore is one of the most beautiful beaches in the Pacific. Poipu on the south is sunnier and has the Grand Hyatt Kauai.',
      },
      {
        name: 'Oahu — Honolulu / North Shore',
        bestFor: 'City energy combined with beach luxury',
        description: 'Waikiki is busy but iconic — Diamond Head, surf lessons, world-class dining. The Halekulani is still the finest hotel on Oahu. North Shore has the world\'s best big-wave surfing (November–February) and the legendary shave ice at Matsumoto\'s.',
      },
    ],
    expertTips: [
      {
        tip: 'Island-hop: 2 islands in 10 nights is the sweet spot',
        detail: 'Fly into Maui, spend 5–6 nights, then a 40-min inter-island flight to the Big Island for 4–5 nights. You get two completely different Hawaii experiences without the logistics becoming burdensome.',
      },
      {
        tip: 'Book volcano helicopter tours as early as possible',
        detail: 'Blue Hawaiian and Paradise Helicopters book out weeks ahead in peak season. The lava flow activity changes — check the USGS Hawaii Volcano Observatory website the week before to confirm activity levels.',
      },
      {
        tip: 'The west and south sides of each island are always drier',
        detail: 'Trade winds bring rain to the east and north (windward) sides. All the top resorts are on the leeward (west/south) coasts for this reason. If a hotel is on the windward side, know what you\'re signing up for.',
      },
      {
        tip: 'Rent a car on every island except Oahu',
        detail: 'Maui, Big Island, and Kauai are impossible to explore without a car. Book in advance — local rental agencies (Harper, Paradise) are cheaper and better-maintained than the national chains at the airport.',
      },
      {
        tip: 'The Road to Hana is a half-day, not a day trip',
        detail: 'Leave your Wailea hotel by 7am. Drive to Hana, stop at the Seven Sacred Pools, and return by the southern route (through Ulupalakua). You\'ll be back by 5pm. Doing it as a day trip from Kaanapali means 3h of driving before you start.',
      },
    ],
    packing: [
      { item: 'Reef-safe sunscreen (mineral)', why: 'Hawaii was the first US state to ban oxybenzone-based sunscreen. You\'ll be fined at state parks without the correct type.' },
      { item: 'Light down jacket', why: 'For Haleakala summit (Maui) and Mauna Kea summit (Big Island) — both above 3,000m, genuinely cold at sunrise.' },
      { item: 'Underwater camera', why: 'The manta ray night snorkel and Molokini Crater snorkeling deserve better than a phone camera.' },
      { item: 'Hiking sandals or trail runners', why: 'The lava terrain on the Big Island is razor-sharp — regular flip-flops won\'t survive Kilauea Iki Trail.' },
      { item: 'Reusable water bottle', why: 'Hawaii is hot, hiking is serious. Tap water on all islands is excellent and safe.' },
    ],
    guide: {
      getting: 'Fly into Kahului (OGG) for Maui, Kona (KOA) for Big Island west coast, Lihue (LIH) for Kauai, or Honolulu (HNL) for Oahu. From the US mainland: direct flights on Hawaiian Airlines, Delta, United, and American from most major hubs. From Europe: connect through LAX, SFO, or SEA. Inter-island flights with Hawaiian Airlines or Mokulele take 20–50 minutes.',
      where: 'Maui Wailea (best overall luxury beach resort experience), Big Island Kohala Coast (most dramatic, most exclusive), Kauai North Shore (raw beauty, Hanalei Bay), Oahu Waikiki (iconic, social, Diamond Head backdrop). For a honeymoon, Maui + Big Island is the optimal combination.',
      when: 'April–June and September–November are the sweet spots — dry, warm, fewer crowds than summer, lower prices than winter peak. January–March brings whale watching but also school holidays and higher prices. July–August is the busiest and most expensive period.',
    },
    localFood: 'Poke bowls with fresh ahi tuna, plate lunches with kalua pork, shave ice from Matsumoto\'s on Oahu North Shore, Kona coffee with macadamia nut pancakes, loco moco (rice, burger, egg and brown gravy), and fresh malasadas from Leonard\'s Bakery. Maui and Big Island farm-to-table restaurants are genuinely world-class.',
    currency: 'US Dollar (USD)',
    language: 'English (Hawaiian spoken)',
    timezone: 'UTC-10 (HST, no DST)',
  },

  thailand: {
    hero: '/images/hotels/amanpuri-phuket-thailand/hero.webp',
    tagline: 'From Phuket\'s turquoise bays to Koh Samui\'s palms — Southeast Asia\'s ultimate luxury beach destination.',
    intro: 'Thailand has been Asia\'s defining beach honeymoon destination for thirty years — and it keeps reinventing itself at the top. Phuket has world-class hotels that rival anywhere on earth (Amanpuri, Trisara, Sri Panwa) with Andaman Sea clarity and year-round warmth. Koh Samui delivers the quintessential palm-fringed luxury villa experience. Koh Phangan and Koh Lanta offer a more relaxed, wellness-focused alternative. And beyond the islands, Chiang Mai and Bangkok offer two of Asia\'s most extraordinary cities for couples who want culture alongside their beach time.',
    bestTime: 'Nov–Apr',
    flightFrom: '11–13h from Europe',
    topExperience: 'Beach & Wellness',
    perfectFor: [
      'Couples who want exceptional value — Thailand offers Maldives-level luxury at a fraction of the cost',
      'Foodies — Thai street food and fine dining are both world-class',
      'Wellness seekers — traditional Thai massage and luxury spa culture are unmatched',
      'Couples who want culture alongside beach (temples, markets, Chiang Mai elephants)',
      'Those who want variety — multiple islands, cities, and landscapes within one country',
    ],
    skipIf: [
      'You want a purely secluded resort bubble — Thailand has significant tourist infrastructure',
      'You\'re traveling June–October and want the Andaman side (Phuket, Krabi) — it\'s their wet season',
      'You need completely English-immersed culture with no language barrier',
      'You\'re sensitive to heat and humidity — it can be intense April–May',
    ],
    experiences: [
      {
        icon: '🏝️',
        title: 'Private Longtail Boat Island-Hop (Krabi)',
        description: 'A private longtail boat through the limestone karst islands of Phang Nga Bay — including James Bond Island, emerald caves, and hidden lagoons. The most iconic Thai seascape.',
        cost: '$150–$300 per couple (private charter)',
        tip: 'Book a private boat, not a group tour. The driver waits while you explore each island. Leave by 7am to beat the tour group boats to the famous spots.',
      },
      {
        icon: '🧘',
        title: 'Luxury Thai Spa Retreat',
        description: 'A full-day treatment at a hotel spa — traditional Thai massage, herbal compress, facial, and flower bath. The Amanpuri spa and Banyan Tree Phuket spa are genuinely among the finest in the world.',
        cost: '$200–$500 per couple',
        tip: 'Book in advance and ask for the couple\'s treatment room. Some spas (Six Senses Yao Noi) offer multi-day wellness programs that are transformative.',
      },
      {
        icon: '🐘',
        title: 'Ethical Elephant Sanctuary (Chiang Mai)',
        description: 'Spending a morning with rescued elephants at an ethical sanctuary — feeding, bathing in the river, walking through jungle. Not riding. The most profound wildlife experience in Southeast Asia.',
        cost: '$80–$150 per person',
        tip: 'Elephant Nature Park and Patara Elephant Farm are the gold standard for ethics. Avoid any sanctuary that offers riding or shows — it indicates poor welfare.',
      },
      {
        icon: '🌅',
        title: 'Phi Phi Islands Sunrise Snorkel',
        description: 'Snorkeling the crystal waters around the Phi Phi islands before the day boats arrive. The coral gardens at Hin Klang and Viking Cave are extraordinary in morning light.',
        cost: '$100–$200 per person (private charter)',
        tip: 'Phi Phi Don has a small village for evening dining. Phi Phi Leh (the uninhabited one) is where The Beach was filmed — snorkel there, don\'t hike the viewpoint at noon.',
      },
      {
        icon: '🍜',
        title: 'Cooking Class in Chiang Mai',
        description: 'A half-day market visit followed by cooking 6 authentic Thai dishes in a traditional wooden sala. You\'ll make pad thai, massaman curry, and mango sticky rice from scratch — and eat it all.',
        cost: '$50–$100 per person',
        tip: 'Zabb E Lee and Thai Farm Cooking School are the best reviewed. Book the morning session so you can eat lunch at the class and have the afternoon free.',
      },
    ],
    months: [
      { month: 'Jan', weather: 'Dry season peak, cool and clear', emoji: '☀️', crowds: 'Peak', price: 'High', verdict: 'Perfect weather, busy and expensive' },
      { month: 'Feb', weather: 'Ideal — dry, not too hot', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Best month of the year' },
      { month: 'Mar', weather: 'Warm, still dry', emoji: '☀️', crowds: 'Moderate', price: 'Mid-high', verdict: 'Excellent, slightly quieter' },
      { month: 'Apr', weather: 'Hot, Songkran water festival', emoji: '🌤', crowds: 'Moderate', price: 'Mid', verdict: 'Songkran is magical if you\'re in it' },
      { month: 'May', weather: 'Pre-monsoon, humid, showers start', emoji: '⛅', crowds: 'Low', price: 'Low', verdict: 'Good deals, some afternoon rain' },
      { month: 'Jun', weather: 'Monsoon begins (Andaman side)', emoji: '🌧', crowds: 'Low', price: 'Lowest', verdict: 'Phuket/Krabi wet, Samui good' },
      { month: 'Jul', weather: 'Monsoon (Andaman), Samui drier', emoji: '🌧', crowds: 'Low', price: 'Low', verdict: 'Switch to Gulf side' },
      { month: 'Aug', weather: 'Similar to July', emoji: '⛅', crowds: 'Low', price: 'Low', verdict: 'Samui and Phangan best bet' },
      { month: 'Sep', weather: 'Wettest month Andaman, Samui OK', emoji: '🌧', crowds: 'Lowest', price: 'Lowest', verdict: 'Not recommended for Andaman beach' },
      { month: 'Oct', weather: 'Transition, Samui gets wetter', emoji: '⛅', crowds: 'Low', price: 'Low-mid', verdict: 'End of monsoon on Andaman side' },
      { month: 'Nov', weather: 'Dry season returns to Phuket', emoji: '🌤', crowds: 'Moderate', price: 'Mid', verdict: 'Excellent — season opens' },
      { month: 'Dec', weather: 'Peak dry season, holiday rush', emoji: '☀️', crowds: 'Peak', price: 'Very high', verdict: 'Perfect weather, book far ahead' },
    ],
    budgetTiers: [
      {
        label: 'Affordable Luxury',
        range: '$200–$500/night',
        gets: 'Boutique pool villa hotels with exceptional service. Thailand punches far above its weight at this price point — things that would cost $1,500 in the Maldives.',
        example: 'The Naka Island (Phuket), Samui Buri Beach Resort',
      },
      {
        label: 'Premium',
        range: '$500–$1,500/night',
        gets: 'Private pool villa with butler service, full beach access, world-class spa. This is where Thailand genuinely competes with the Maldives at half the price.',
        example: 'Six Senses Yao Noi, Trisara Phuket, Four Seasons Koh Samui',
      },
      {
        label: 'Ultra-Luxury',
        range: '$1,500+/night',
        gets: 'Amanpuri-level seclusion, the finest Thai hospitality on earth, private beaches, multiple-bedroom villas. Truly among the world\'s finest resorts.',
        example: 'Amanpuri Phuket, Banyan Tree Samui (private pool villa)',
      },
    ],
    areas: [
      {
        name: 'Phuket — West Coast (Kamala, Surin, Bang Tao)',
        bestFor: 'Best luxury resorts, most reliable Andaman weather',
        description: 'The west coast of Phuket faces the Andaman Sea and has the most consistent clear water and best sunsets. Kamala Bay (Amanpuri, Trisara) is the quietest and most exclusive. Surin and Bang Tao beaches are slightly more social. Patong is the most commercial — avoid for honeymoons.',
      },
      {
        name: 'Koh Samui',
        bestFor: 'Family and couples, Gulf of Thailand',
        description: 'The second-largest island in Thailand has excellent infrastructure, a good international airport, and some outstanding hotels (Four Seasons, Banyan Tree, Six Senses). Best weather November–April. Chaweng is the busiest beach — stay at Choeng Mon or Maenam for more seclusion.',
      },
      {
        name: 'Koh Phangan',
        bestFor: 'Wellness retreats, quieter island life',
        description: 'Famous for the Full Moon Party but increasingly known for world-class wellness retreats. Srithanu on the west coast is the wellness hub — yoga, raw food, and detox programs. The beaches on the south and east coasts are beautiful and quiet.',
      },
      {
        name: 'Krabi — Railay and Koh Lanta',
        bestFor: 'Limestone karst scenery, rock climbing, longtail boat access',
        description: 'Railay Beach is only accessible by boat — dramatic limestone cliffs, excellent snorkeling, and a relaxed atmosphere. Koh Lanta is larger, quieter, and has excellent long-stay eco-resorts. Best for couples who want natural beauty over hotel infrastructure.',
      },
      {
        name: 'Koh Phi Phi',
        bestFor: 'Young couples, most iconic Thai beach scenery',
        description: 'The twin bays of Phi Phi Don are iconic Thai scenery. Very social and popular with younger travelers. The surrounding waters have the best snorkeling in Thailand. Best for a 3–4 night stay rather than a full honeymoon base.',
      },
    ],
    expertTips: [
      {
        tip: 'The two coasts have opposite monsoon seasons — plan accordingly',
        detail: 'The Andaman side (Phuket, Krabi, Phi Phi) is best November–April. The Gulf side (Koh Samui, Koh Phangan) is best December–September. If you\'re going in June–October, base on the Gulf side.',
      },
      {
        tip: 'Add 2 nights in Bangkok at the start of any trip',
        detail: 'Mandarin Oriental Bangkok, The Peninsula, and Capella Bangkok are three of the finest city hotels in Asia. Even if you\'re primarily beach-focused, Bangkok gives your trip a cultural dimension that enriches everything.',
      },
      {
        tip: 'Book a private boat for a full day, not a tour',
        detail: 'A private longtail or speedboat costs $150–$300 for the day and transforms your island exploration. You go where you want, stop when you want, and there are zero other tourists in your photographs.',
      },
      {
        tip: 'The spa culture is the soul of Thai luxury',
        detail: 'Don\'t treat the spa as an optional add-on. A full-day couples treatment at a top Thai spa — Thai massage, herbal compress, scrub, floral bath — is genuinely one of the finest experiences in any honeymoon destination.',
      },
      {
        tip: 'Download Google Translate with Thai offline',
        detail: 'Outside tourist areas, very little English is spoken. The camera translation feature translates menus in real-time and is genuinely useful for finding the authentic local restaurant over the tourist trap.',
      },
    ],
    packing: [
      { item: 'Light linen or cotton clothing', why: 'Humidity is extreme — synthetic fabrics become unbearable. Light natural fibres breathe correctly.' },
      { item: 'Reef-safe sunscreen', why: 'Thailand\'s coral reefs are under severe pressure. Mineral sunscreen is the ethical choice.' },
      { item: 'Anti-mosquito spray (DEET)', why: 'Dengue fever is present — DEET-based repellent for evenings near vegetation is non-negotiable.' },
      { item: 'Modest cover-up for temples', why: 'Shoulders and knees must be covered at Wat Phra Kaew (Bangkok) and most Buddhist temples. A light scarf solves this.' },
      { item: 'Waterproof sandals', why: 'Longtail boat boarding involves stepping through shallow water. Reef-safe sandals protect your feet and don\'t mind getting wet.' },
    ],
    guide: {
      getting: 'Fly into Phuket International (HKT) for Andaman side, or Bangkok Suvarnabhumi (BKK) then connect to Samui (USM) on Bangkok Airways for the Gulf side. From Europe: direct flights to Phuket from London, Frankfurt, and Paris. From the US: connect via Bangkok, Singapore, or Hong Kong. Domestic connections on Bangkok Airways, Thai AirAsia, and Nok Air.',
      where: 'Phuket west coast (Kamala, Surin, Bang Tao) for Andaman luxury. Koh Samui for Gulf of Thailand couples resort experience. Six Senses Yao Noi (between Phuket and Krabi, accessed by speedboat) for the most spectacular setting in Thailand.',
      when: 'November–April is dry season on the Andaman side and the safest choice for a honeymoon. December–March is the driest and most expensive. April is excellent value with fewer crowds. May–October on the Andaman side brings the monsoon — switch to the Gulf coast or embrace the green season discounts.',
    },
    localFood: 'Massaman curry with beef and peanuts at a Phuket Muslim restaurant, fresh pad thai from a street cart in Koh Samui night market, grilled tiger prawns with nam jim sauce, mango sticky rice with coconut cream, and tom kha gai (coconut galangal chicken soup). Street food in Thailand is genuinely the best food in Asia at the lowest prices.',
    currency: 'Thai Baht (THB)',
    language: 'Thai (English in tourist areas)',
    timezone: 'UTC+7',
  },

  mexico: {
    hero: '/images/hotels/las-ventanas-al-paraiso-mexico/hero.webp',
    tagline: 'From Baja\'s desert cliffs to the Riviera Maya\'s jungle cenotes — Mexico does luxury better than anywhere.',
    intro: 'Mexico is the most diverse luxury honeymoon destination in the Americas. Los Cabos at the tip of Baja California offers desert-meets-ocean drama with world-class resorts like Las Ventanas al Paraíso and Esperanza — dramatic rock arches, blue marlin, and mezcal sunsets. The Riviera Maya gives you Caribbean turquoise water, Mayan ruins, and underground cenote swimming. Tulum has evolved into a genuinely extraordinary eco-luxury destination. And San Miguel de Allende is colonial Mexico at its most romantic — cobblestones, church bells, and rooftop dining under the stars.',
    bestTime: 'Nov–May',
    flightFrom: '10–14h from Europe / 2–5h from US',
    topExperience: 'Beach & Cenote Luxury',
    perfectFor: [
      'US-based couples wanting luxury without a long-haul flight',
      'Foodies — Mexican cuisine (especially Oaxacan and Yucatecan) is one of the world\'s great food cultures',
      'Couples who want variety — desert, jungle, Caribbean beach, colonial cities',
      'Architecture and design lovers — Mexico has some of the world\'s most creative resort design',
      'Those who want genuine cultural immersion alongside beach luxury',
    ],
    skipIf: [
      'Safety is your primary concern — research your specific destination carefully before booking',
      'You want to leave the resort and explore freely without any planning (some areas require more awareness than others)',
      'You need European-style urban sophistication and café culture',
      'You\'re sensitive to heat — the Riviera Maya in summer is very hot and humid',
    ],
    experiences: [
      {
        icon: '🏊',
        title: 'Private Cenote Swimming (Riviera Maya)',
        description: 'Mexico has thousands of underground sinkholes filled with crystal-clear freshwater connected to the world\'s largest underwater cave system. Swimming in a private cenote by candlelight at Tulum is completely otherworldly.',
        cost: '$50–$200 per person (private access)',
        tip: 'Cenote Dos Ojos, Gran Cenote, and Cenote Ik Kil near Chichén Itzá are the most beautiful. Book a private evening session at a boutique cenote for the most romantic experience.',
      },
      {
        icon: '🏛️',
        title: 'Sunrise at Chichén Itzá',
        description: 'The Mayan pyramid of El Castillo at dawn, before the tour buses arrive, with a private archaeologist guide explaining the astronomical precision of its construction. One of the genuinely moving experiences of the Americas.',
        cost: '$150–$300 per couple (private guide, early access)',
        tip: 'The site opens at 8am but private early access tours start at 7am. Book through your hotel concierge — they have relationships with the archaeological site managers.',
      },
      {
        icon: '🐳',
        title: 'Whale Shark Snorkel (Isla Mujeres, Jun–Sep)',
        description: 'The waters off Isla Mujeres host the world\'s largest congregation of whale sharks from June through September. Snorkeling alongside 20+ whale sharks simultaneously is one of the most extraordinary wildlife experiences on earth.',
        cost: '$100–$180 per person',
        tip: 'The season peaks in July–August. Boats depart from Isla Mujeres — take the early departure (6am) and book with a small operator (max 8 people per boat).',
      },
      {
        icon: '🌵',
        title: 'Desert Sunset at El Arco (Los Cabos)',
        description: 'The iconic rock arch at Land\'s End where the Pacific meets the Sea of Cortez — dramatic, photogenic, and unique to Baja. Take a water taxi to the arch at sunset for an absurdly cinematic evening.',
        cost: '$80–$150 per couple',
        tip: 'The arch is accessible only by water taxi from Medano Beach. Go at 4pm and watch the sunset from the boat — then dinner at a Cabo San Lucas marina restaurant.',
      },
      {
        icon: '🍹',
        title: 'Mezcal Tasting in Oaxaca City',
        description: 'Oaxaca produces the world\'s finest mezcal. A guided tasting tour through the historic center, visiting artisanal mezcaleros and the best restaurant in Mexico (Restaurante Los Danzantes or Casa Oaxaca), is a genuinely life-changing food experience.',
        cost: '$100–$200 per couple (guided tour)',
        tip: 'Oaxaca City is a 1-hour flight from Mexico City. The combination of mezcal, mole negro, and the Zócalo cathedral at night makes it the most romantic city in Mexico.',
      },
    ],
    months: [
      { month: 'Jan', weather: 'Perfect — dry, warm, clear', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Peak season — book far ahead' },
      { month: 'Feb', weather: 'Ideal, dry season peak', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Best weather of the year' },
      { month: 'Mar', weather: 'Spring break crowds, still lovely', emoji: '☀️', crowds: 'Very high', price: 'Very high', verdict: 'Beautiful but most crowded' },
      { month: 'Apr', weather: 'Warm, Easter crowds then calm', emoji: '🌤', crowds: 'Moderate', price: 'Mid-high', verdict: 'Post-Easter is a sweet spot' },
      { month: 'May', weather: 'Hot, pre-hurricane season', emoji: '☀️', crowds: 'Low', price: 'Mid', verdict: 'Good value before summer' },
      { month: 'Jun', weather: 'Whale shark season begins, humid', emoji: '🌤', crowds: 'Low', price: 'Low', verdict: 'Whale sharks arrive — special' },
      { month: 'Jul', weather: 'Hot, humid, hurricane risk begins', emoji: '⛅', crowds: 'Moderate', price: 'Low-mid', verdict: 'Summer families, some risk' },
      { month: 'Aug', weather: 'Hottest, most hurricane risk', emoji: '🌧', crowds: 'Moderate', price: 'Low', verdict: 'Not recommended for Riviera Maya' },
      { month: 'Sep', weather: 'Hurricane season peak', emoji: '🌧', crowds: 'Low', price: 'Lowest', verdict: 'Avoid for Caribbean side' },
      { month: 'Oct', weather: 'Hurricane season ends, transitioning', emoji: '⛅', crowds: 'Low', price: 'Low-mid', verdict: 'Baja (Los Cabos) fine in October' },
      { month: 'Nov', weather: 'Dry season returns, perfect start', emoji: '🌤', crowds: 'Moderate', price: 'Mid', verdict: 'Excellent — season opens' },
      { month: 'Dec', weather: 'Peak dry season, holiday prices', emoji: '☀️', crowds: 'Peak', price: 'Very high', verdict: 'Perfect weather, book a year ahead' },
    ],
    budgetTiers: [
      {
        label: 'Luxury All-Inclusive',
        range: '$400–$800/night',
        gets: 'Premium all-inclusive resorts in Cancun or Riviera Maya. Excellence Playa Mujeres, Secrets Maroma — genuinely outstanding value with all food, drink, and activities included.',
        example: 'Excellence Playa Mujeres, Secrets Maroma Beach',
      },
      {
        label: 'Premium Boutique',
        range: '$800–$2,000/night',
        gets: 'Private plunge pool suites, exceptional service, superb cuisine. The best of Tulum eco-luxury or Los Cabos boutique.',
        example: 'Esperanza Auberge (Los Cabos), Azulik Tulum, Nomade Tulum',
      },
      {
        label: 'Ultra-Luxury',
        range: '$2,000+/night',
        gets: 'Las Ventanas al Paraíso-level — butler service, private beach, dedicated telescope, and the most creative hospitality in Mexico.',
        example: 'Las Ventanas al Paraíso (Los Cabos), One&Only Palmilla',
      },
    ],
    areas: [
      {
        name: 'Los Cabos (Baja California Sur)',
        bestFor: 'Desert-meets-ocean drama, best year-round weather',
        description: 'At the tip of the Baja Peninsula, the Pacific Ocean meets the Sea of Cortez. The landscape is desert and mountain, the water is dramatic rather than calm. Best resorts are on the Corridor between San José and Cabo San Lucas. Year-round sunshine with minimal hurricane risk.',
      },
      {
        name: 'Riviera Maya (Cancun to Tulum)',
        bestFor: 'Caribbean turquoise water, cenotes, Mayan ruins',
        description: 'The Caribbean coast from Cancun to Tulum has flat, calm, turquoise water ideal for swimming and snorkeling. Playa del Carmen and Tulum are the most sophisticated. Chichén Itzá is 2 hours inland. Best November–May to avoid hurricane season.',
      },
      {
        name: 'Tulum',
        bestFor: 'Bohemian eco-luxury, cenotes, spiritual wellness',
        description: 'Tulum has evolved from backpacker to genuinely extraordinary eco-luxury. The cliff-top Mayan ruins above the Caribbean, cenote swimming, and the Tulum Hotel Zone (small boutique properties with no TV, lots of candlelight) make it uniquely romantic.',
      },
      {
        name: 'San Miguel de Allende',
        bestFor: 'Colonial romance, art, non-beach luxury',
        description: 'A UNESCO World Heritage colonial city in the Guanajuato mountains — baroque church, cobblestone streets, rooftop restaurants, and a thriving arts scene. Casa de Sierra Nevada and Rosewood San Miguel de Allende are two of the finest boutique hotels in Mexico.',
      },
    ],
    expertTips: [
      {
        tip: 'Los Cabos has virtually no hurricane risk — the Riviera Maya does',
        detail: 'If you\'re traveling June–November, Los Cabos is dramatically safer from tropical weather than any Caribbean-facing Mexican destination. Baja\'s Pacific exposure and desert landscape mean storms rarely develop here.',
      },
      {
        tip: 'The food at top Mexican resorts is genuinely extraordinary',
        detail: 'Las Ventanas al Paraíso, Nobu Los Cabos, and Casa Dragones give you fine dining that competes with the world\'s best. Do not settle for poolside quesadillas — Mexico\'s culinary scene is a genuine highlight.',
      },
      {
        tip: 'Rent a car in Los Cabos but use taxis in Tulum',
        detail: 'The Corridor between San José del Cabo and Cabo San Lucas is 20 minutes by car. Tulum\'s Hotel Zone is walkable or tuk-tuk accessible. Driving in Mexico City is not recommended for visitors.',
      },
      {
        tip: 'Book your cenote session 48h in advance',
        detail: 'The best cenotes (Dos Ojos, Gran Cenote) have limited private access slots. Morning sessions before 10am have the best light filtering through the limestone ceiling and the clearest water.',
      },
      {
        tip: 'Day of the Dead (Nov 1–2) in Oaxaca is extraordinary',
        detail: 'If your trip overlaps with Día de Muertos in Oaxaca, the cemetery vigils and marigold-covered altars are one of the most profoundly moving cultural events on earth. Hotels book out a year in advance for this period.',
      },
    ],
    packing: [
      { item: 'Reef-safe sunscreen', why: 'Mexico passed reef-protection laws in 2021 — chemical sunscreen is banned at many cenotes and protected reefs.' },
      { item: 'Light linen clothing', why: 'The Riviera Maya humidity in summer is intense. Natural fibres are essential.' },
      { item: 'Water shoes for cenotes', why: 'Cenote entry points are often rocky and slippery. Aqua socks or reef shoes protect your feet and give grip.' },
      { item: 'Insect repellent (DEET)', why: 'The Riviera Maya jungle has mosquitoes and the occasional sand fly at dusk.' },
      { item: 'Waterproof dry bag', why: 'For cenote swimming, boat tours to El Arco, and any Riviera Maya water activity.' },
    ],
    guide: {
      getting: 'Fly into Los Cabos International (SJD) for Baja, or Cancun International (CUN) for Riviera Maya and Tulum. From the US: direct flights from most major cities on American, Delta, United, Southwest, and Volaris. From Europe: direct from London and Madrid to Cancun on British Airways and Iberia; otherwise connect via Mexico City (MEX) or Miami. Inter-Mexico flights on Aeromexico, Volaris, and VivaAerobus.',
      where: 'Los Cabos Corridor (between San José and Cabo) for Baja desert luxury. Playa del Carmen or Akumal for Riviera Maya base. Tulum Hotel Zone for bohemian eco-luxury. San Miguel de Allende for non-beach colonial romance.',
      when: 'November–May is the safest window for both Baja and Caribbean coasts. December–March is the finest weather but the most expensive. April is excellent value. June–October on the Caribbean side carries hurricane risk — Los Cabos is safe year-round.',
    },
    localFood: 'Fresh-caught grilled lobster at Puerto Nuevo near Ensenada, tacos al pastor from the griddle in Los Cabos fish taco spots, ceviches and tostadas at Contramar-style restaurants, Oaxacan mole negro with turkey, and fresh guacamole made tableside at the resort. Mezcal cocktails at sunset are a Los Cabos ritual.',
    currency: 'Mexican Peso (MXN) — hotels quote USD',
    language: 'Spanish (English in resorts)',
    timezone: 'UTC-6 (CST) / UTC-7 (MST in Baja)',
  },

  amalfi: {
    hero: '/images/hotels/le-sirenuse-positano-amalfi/hero.webp',
    tagline: 'Positano, Ravello, Amalfi — the most romantic coastline in Europe, period.',
    intro: 'The Amalfi Coast is 50 kilometres of vertical drama — pastel villages stacked on limestone cliffs above a sea of extraordinary blue, lemon groves, ceramic-tiled churches, and the most indulgent food culture in Italy. Writers and artists have been calling it the most beautiful place on earth since the 18th century, and nothing has changed except the hotels have gotten better. Le Sirenuse in Positano is one of the finest hotels in the world. Belmond Hotel Caruso in Ravello has arguably the best swimming pool in Europe. This is where couples come to feel genuinely, luxuriously, cinematically in love.',
    bestTime: 'May–Jun & Sep–Oct',
    flightFrom: '2–3h from northern Europe',
    topExperience: 'Clifftop Romance & Dolce Vita',
    perfectFor: [
      'Couples for whom food, wine, and la dolce vita are the point of a honeymoon',
      'Architecture and design lovers — every town on the coast is a visual masterpiece',
      'Those who want a genuinely European luxury experience rather than a tropical resort',
      'Short-haul travelers from northern Europe who want maximum impact for flight time',
      'Couples who want to combine beach with culture, day trips, and city exploration',
    ],
    skipIf: [
      'You need a pool or beach you can access easily — cliff-side means stairs (many of them)',
      'You\'re traveling July–August — the coast becomes extremely crowded and hot',
      'You want to drive everywhere — the Amalfi Coast road is narrow, terrifying, and slow',
      'You\'re on a tight budget — Positano is one of Europe\'s most expensive destinations',
    ],
    experiences: [
      {
        icon: '⛵',
        title: 'Private Boat Day Along the Coast',
        description: 'A private wooden gozzo boat from Positano, stopping at sea caves, grottos, and secluded coves inaccessible from land. Swimming in the clear Tyrrhenian water below the cliffs with no other people in sight is the defining Amalfi experience.',
        cost: '$400–$800 per couple (full day)',
        tip: 'Book a wooden gozzo — not a RIB speedboat. They\'re quieter, more beautiful, and stop better. Ask the captain to show you the grotto at Furore and the arch at Capri if you go far enough.',
      },
      {
        icon: '🌿',
        title: 'Ravello Concert at Villa Rufolo',
        description: 'The Ravello Festival runs June–September and stages classical concerts on a terrace at Villa Rufolo, suspended above the sea at 350m. Wagner composed Parsifal here. The combination of music, setting, and the view has made grown adults weep.',
        cost: '$60–$150 per person',
        tip: 'Book tickets online at ravellofestival.com before you travel. The sunset concert (starting 6pm) is the most spectacular — you watch the sun drop over the Tyrrhenian Sea as the orchestra plays.',
      },
      {
        icon: '🍋',
        title: 'Limoncello Making and Lemon Grove Walk',
        description: 'The Amalfi sfusato lemon (three times the size of a regular lemon) is the finest in the world. A guided walk through the cliff-side terraced lemon groves above Amalfi town, followed by a traditional limoncello-making class and lunch.',
        cost: '$80–$120 per person',
        tip: 'Giardini di Ravello and the Aceto family\'s groves above Minori are the most beautiful. Buy limoncello directly from the producer — the supermarket version is a different product.',
      },
      {
        icon: '🗿',
        title: 'Day Trip to Pompeii and Herculaneum',
        description: 'The Roman cities buried by Vesuvius in 79 AD are 90 minutes from Positano. Herculaneum (less visited, better preserved) is the more intimate experience. Walking through 2,000-year-old streets with your private guide is genuinely moving.',
        cost: '$200–$350 per couple (private guide and transport)',
        tip: 'Go to Herculaneum over Pompeii — it\'s smaller, better preserved, and half the crowds. Book a private guide from Positano who includes transport. Arrive at 9am before the tour buses.',
      },
      {
        icon: '🛥️',
        title: 'Day Trip to Capri',
        description: 'The hydrofoil from Positano to Capri takes 40 minutes. The Blue Grotto, Villa Jovis (Tiberius\'s imperial palace), the Gardens of Augustus, and the finest lunch in the Campania region at Da Paolino (under lemon trees). Capri is an essential Amalfi complement.',
        cost: '$300–$500 per couple (boat, entries, lunch)',
        tip: 'Take the first hydrofoil (9am), do the Blue Grotto before the crowds (arrive before 10am), walk to Villa Jovis in the morning cool, lunch at Da Paolino, and take the 5pm hydrofoil back. Perfect day.',
      },
    ],
    months: [
      { month: 'Jan', weather: 'Cool, quiet, some closures', emoji: '⛅', crowds: 'Minimal', price: 'Lowest', verdict: 'Atmospheric but limited' },
      { month: 'Feb', weather: 'Cool, very quiet', emoji: '⛅', crowds: 'Minimal', price: 'Very low', verdict: 'For the hardy romantics' },
      { month: 'Mar', weather: 'Warming, spring blossoms', emoji: '🌤', crowds: 'Low', price: 'Low', verdict: 'Lovely if you\'re OK with cool water' },
      { month: 'Apr', weather: 'Spring perfection, lemon groves in flower', emoji: '☀️', crowds: 'Moderate', price: 'Mid', verdict: 'Excellent — season opens properly' },
      { month: 'May', weather: 'Ideal — warm, clear, not too hot', emoji: '☀️', crowds: 'Moderate', price: 'Mid-high', verdict: 'One of the two best months' },
      { month: 'Jun', weather: 'Warm, sea swimmable, Ravello Festival starts', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Beautiful — book concerts now' },
      { month: 'Jul', weather: 'Hot, very crowded, road traffic bad', emoji: '🌡️', crowds: 'Peak', price: 'Very high', verdict: 'Avoid — too hot, too busy' },
      { month: 'Aug', weather: 'Hottest, absolute peak crowds', emoji: '🌡️', crowds: 'Peak', price: 'Highest', verdict: 'The worst month — genuinely unpleasant' },
      { month: 'Sep', weather: 'Warm, sea warm, crowds thin', emoji: '☀️', crowds: 'Moderate', price: 'High', verdict: 'Best value luxury month' },
      { month: 'Oct', weather: 'Perfect temperatures, golden light', emoji: '🌤', crowds: 'Low-mod', price: 'Mid', verdict: 'The secret best month' },
      { month: 'Nov', weather: 'Cooling, some closures begin', emoji: '⛅', crowds: 'Low', price: 'Low', verdict: 'Atmospheric, limited options' },
      { month: 'Dec', weather: 'Cool, quiet, Christmas atmosphere', emoji: '🎄', crowds: 'Low', price: 'Low-mid', verdict: 'Romantic and quiet' },
    ],
    budgetTiers: [
      {
        label: 'Boutique Luxury',
        range: '$400–$800/night',
        gets: 'Beautiful boutique hotels with sea views, pool access, excellent breakfast. The Amalfi Coast has outstanding properties at this price point.',
        example: 'Hotel Marincanto (Positano), Hotel Villa Cimbrone (Ravello)',
      },
      {
        label: 'Premium',
        range: '$800–$2,000/night',
        gets: 'Junior suites and superior rooms at the finest addresses on the coast. Sea terraces, private loungers, exceptional dining.',
        example: 'Belmond Hotel Caruso (Ravello), Hotel Santa Caterina (Amalfi)',
      },
      {
        label: 'Ultra-Luxury',
        range: '$2,000+/night',
        gets: 'Le Sirenuse Positano — the most romantic hotel in Italy. The Junior Suite with terrace and sea view is one of the finest hotel rooms in Europe.',
        example: 'Le Sirenuse Positano, Belmond Hotel Caruso senior suites',
      },
    ],
    areas: [
      {
        name: 'Positano',
        bestFor: 'Most beautiful and most famous — the definitive Amalfi image',
        description: 'The pink, white, and yellow houses tumbling down to the small beach below are the defining image of the Amalfi Coast. Le Sirenuse sits above it all with the finest views. Very steep — hundreds of stairs between levels. The most photogenic place in Italy.',
      },
      {
        name: 'Ravello',
        bestFor: 'Quietest, highest, most musical — hilltop gardens above the sea',
        description: 'Ravello sits 350m above the sea with the most extraordinary views on the coast. No beach (you take a bus down to Minori or Atrani), but the Villa Rufolo, Villa Cimbrone gardens, and Belmond Hotel Caruso make it the most sophisticated and peaceful base. Classical music festival June–September.',
      },
      {
        name: 'Amalfi Town',
        bestFor: 'Best base for exploring, most central, cathedral',
        description: 'The original maritime republic — Amalfi town is busier than Positano but more authentic and better located for day trips. The 9th-century Arab-Norman cathedral is extraordinary. Hotel Santa Caterina is the finest hotel here.',
      },
      {
        name: 'Praiano',
        bestFor: 'Hidden gem — fewer tourists, stunning views, lower prices',
        description: 'Between Positano and Amalfi, Praiano is a working fishing village with one of the most dramatic settings on the coast. Virtually no tourist infrastructure — which is the point. Casa Angelina is the outstanding hotel here.',
      },
      {
        name: 'Sorrento',
        bestFor: 'Gateway to the coast, shopping, best connections',
        description: 'Sorrento sits at the northern end of the Peninsula — it\'s a real town with streets, shops, and a market. The Grand Hotel Excelsior Vittoria is the historic grande dame. Don Alfonso 1890 (two Michelin stars) is the finest restaurant in the region.',
      },
    ],
    expertTips: [
      {
        tip: 'Stay in two places — Positano plus Ravello is the perfect combination',
        detail: 'Three nights in Positano for the drama and beach access, then two nights in Ravello for the gardens, concerts, and elevated tranquility. The contrast between the two makes each more vivid.',
      },
      {
        tip: 'Use ferries, not the road, for travel between towns',
        detail: 'The SS163 Amalfi Drive is one of the world\'s most beautiful roads and one of the most terrifying to drive — single-lane, no barriers, tour buses around blind corners. The SITA ferry between Positano, Amalfi, and Salerno is cheaper, faster, and incomparably more pleasurable.',
      },
      {
        tip: 'Book Le Sirenuse as early as possible',
        detail: 'The best rooms (Junior Suite with terrace, sea view) at Le Sirenuse book out 6–9 months in advance for May, June, September, and October. This is not an exaggeration. Set an alert for the cancellation period if you miss the initial window.',
      },
      {
        tip: 'The Blue Grotto is genuinely worth the queue — if you time it right',
        detail: 'The rowing boat entrance to the Blue Grotto on Capri requires calm seas and morning light. Arrive before 9:30am. After 11am the queue is 1–2 hours. In rough weather it closes entirely — check the forecast before planning your Capri day around it.',
      },
      {
        tip: 'Eat where the locals eat — one rule',
        detail: 'Any restaurant with an English menu displayed outside and a maître d\' calling you in from the street is a tourist trap. Walk five minutes uphill from the main piazza in any Amalfi Coast town and you\'ll find the real trattoria with the handwritten menu and the best food you\'ve ever eaten.',
      },
    ],
    packing: [
      { item: 'Comfortable walking shoes with grip', why: 'The Amalfi Coast is paved with polished stone steps. In the heat with sandals, they become lethal. A lightweight trail shoe or grip-soled sneaker is essential.' },
      { item: 'Smart evening wear', why: 'Positano restaurants and Le Sirenuse bar have a dress standard. Linen trousers and a silk dress are the local standard. No flip-flops at dinner.' },
      { item: 'Light sun hat', why: 'The reflection from white-painted walls and the sea at midday is intense. A hat protects your face and looks good in photographs.' },
      { item: 'Small crossbody bag', why: 'You\'ll be navigating steps with both hands free. Backpacks are uncomfortable on narrow staircases. A small leather bag over one shoulder is the correct call.' },
      { item: 'Motion sickness tablets', why: 'The SITA ferry in choppy weather and the coastal road buses both have a reputation. Even people who don\'t normally get carsick sometimes struggle with the hairpin bends.' },
    ],
    guide: {
      getting: 'Fly into Naples International (NAP). From northern Europe: direct flights on easyJet, Ryanair, British Airways, Lufthansa (1.5–3h). From the US: connect via Rome (FCO) or Milan (MXP) or direct to Naples on Delta from JFK (9h). From Naples airport: taxi to Sorrento (50 min, €80) then ferry, or private transfer direct to Positano (90 min, €150–€200).',
      where: 'Positano (Le Sirenuse, Marincanto) for the quintessential Amalfi experience. Ravello (Belmond Caruso, Villa Cimbrone) for peace, gardens, and music. Amalfi town (Santa Caterina) for central location and authentic town feel. Praiano (Casa Angelina) for fewer crowds and dramatic cliffs.',
      when: 'May–June is near-perfect: warm enough to swim, not yet crowded, full facilities open, Ravello Festival beginning. September–October is equally excellent and slightly cheaper. July–August is too hot and too crowded — unless you\'re at Le Sirenuse and never leaving the terrace.',
    },
    localFood: 'Linguine alle vongole (clams with garlic and white wine) at a cliff-side Positano trattoria, limoncello from Amalfi-grown sfusato lemons, fresh mozzarella di bufala from Campania farms, tasting menu at Don Alfonso 1890 (two Michelin stars) above Sorrento, and sfogliatelle (flaky ricotta pastry) from a Napoli pasticceria before your ferry.',
    currency: 'Euro (EUR)',
    language: 'Italian (English in hotels)',
    timezone: 'UTC+1 (CET) / UTC+2 (CEST in summer)',
  },

  greece: {
    hero: '/images/hotels/amanzoe-porto-heli-greece/hero.webp',
    tagline: 'Whitewashed infinity pools, ancient ruins, and the most beautiful light in the world.',
    intro: 'Greece has been making honeymooners happy for three thousand years — and modern Greece has added world-class resort infrastructure to one of the most beautiful settings in the Mediterranean. Santorini\'s volcanic caldera is the definitive Greece image: white cubes, blue domes, and an infinite Aegean. But Mykonos, Crete, and the Peloponnese offer entirely different — and often better — experiences without the Santorini crowds.',
    bestTime: 'May–Jun, Sep–Oct',
    flightFrom: '3–4h from London',
    topExperience: 'Culture, Beaches & Island Hopping',
    perfectFor: [
      'Couples who want European culture alongside exceptional beaches',
      'Those who want island-hopping between dramatically different settings',
      'History lovers — the combination of ancient sites and modern luxury is unmatched',
      'Sailors and sailors-adjacent (Greece has the best charter sailing in the Med)',
      'Anyone with a Mediterranean sunset fantasy — Santorini delivers on it completely',
    ],
    skipIf: [
      'You visit Santorini in July–August — Oia is overwhelmed with cruise ships',
      'You want a single destination rather than multiple island stops',
      'Budget is very tight — Greek islands are no longer cheap',
      'Sandy beaches are essential — many Greek beaches are pebble',
      'You\'ve already done Santorini and want something genuinely different',
    ],
    experiences: [
      { icon: '🌅', title: 'Santorini Caldera Sunset (from Oia)', description: 'The most photographed sunset in the world. The pink-orange light hitting the whitewashed walls of Oia as the sun drops into the caldera. Worth the crowds — there is nothing else like it.', cost: 'Free', tip: 'Arrive at Oia castle 2 hours before sunset. Or book a caldera-edge table at Lauda or 1800 restaurant for the same view with champagne and no standing.' },
      { icon: '⛵', title: 'Private Sailing Charter Between Islands', description: 'A private gulet or sailing yacht from Santorini to Thirassia to the volcano and hot springs. The Greek islands seen from the water, at your own pace, with swimming stops.', cost: '€400–€800 for private day charter', tip: 'Book through your hotel. Sunset caldera sailing is the standard product — request a full-day morning departure to Thirassia instead for fewer boats.' },
      { icon: '🏛️', title: 'Private Acropolis Tour at Opening (Athens)', description: 'Athens is 45 minutes from Santorini by plane. Adding 2 nights before or after for a private Acropolis guide at 8am (before the crowds) transforms the trip from beach holiday to genuine European journey.', cost: '€150–€300 for private guide', tip: 'Context Travel runs the best private Acropolis tours. Book the first entry slot — you\'ll have the Parthenon almost to yourself.' },
      { icon: '🍷', title: 'Santorini Volcanic Wine Tasting', description: 'Assyrtiko white wine grown in the ashy volcanic soil of Santorini is unlike any other wine in the world — mineral, oceanic, extraordinary. Estate Argyros and Gaia Wines offer private vineyard tastings.', cost: '€60–€120 per couple', tip: 'Estate Argyros in Episkopi is the finest producer. Book a private tasting with their sommelier — it includes the best Vinsanto dessert wine you\'ll ever taste.' },
      { icon: '🤿', title: 'Snorkeling at Navagio Beach (Zakynthos)', description: 'The Shipwreck Beach — a rusted freighter on white sand surrounded by 200m white limestone cliffs and turquoise water. One of the most dramatic beaches in Europe, accessible only by boat.', cost: '€20–€40 per person (boat trip from Zakynthos town)', tip: 'Arrive by private morning boat before 10am. The beach is in shadow until late morning — factor this into your photo timing.' },
    ],
    months: [
      { month: 'Jan', weather: 'Cool, 14°C, some rain, very quiet', emoji: '🌦', crowds: 'Very low', price: 'Lowest', verdict: 'Off-season — many places closed' },
      { month: 'Feb', weather: 'Cool, mild, wildflowers', emoji: '🌤', crowds: 'Very low', price: 'Low', verdict: 'Romantic off-season' },
      { month: 'Mar', weather: 'Warming, occasional rain', emoji: '⛅', crowds: 'Low', price: 'Low', verdict: 'Things start opening' },
      { month: 'Apr', weather: 'Perfect spring, 20°C', emoji: '🌸', crowds: 'Moderate', price: 'Mid', verdict: 'Beautiful, Easter timing important' },
      { month: 'May', weather: 'Ideal: 24°C, clear, uncrowded', emoji: '☀️', crowds: 'Moderate', price: 'Mid-high', verdict: 'Best month for Santorini' },
      { month: 'Jun', weather: 'Warm, 28°C, building', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Excellent, book early' },
      { month: 'Jul', weather: 'Hot, meltemi wind, cruise ships', emoji: '💨', crowds: 'Peak', price: 'Very high', verdict: 'Santorini overrun — consider Mykonos' },
      { month: 'Aug', weather: 'Hottest, absolute peak crowds', emoji: '🌡️', crowds: 'Peak', price: 'Highest', verdict: 'Avoid Santorini specifically' },
      { month: 'Sep', weather: 'Perfect: 26°C, crowds thinning', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Best month of the year' },
      { month: 'Oct', weather: 'Warm, golden, quiet', emoji: '🌤', crowds: 'Moderate', price: 'Mid', verdict: 'Hidden gem month' },
      { month: 'Nov', weather: 'Cool, some rain, very quiet', emoji: '🌦', crowds: 'Very low', price: 'Low', verdict: 'Many places close end of month' },
      { month: 'Dec', weather: 'Cool, festive in Athens', emoji: '⛅', crowds: 'Low', price: 'Low', verdict: 'Athens Christmas is wonderful' },
    ],
    budgetTiers: [
      { label: 'Boutique Luxury', range: '€250–€600/night', gets: 'Caldera-view cave suite in Oia or Imerovigli, private plunge pool, exceptional breakfast. The core Santorini experience.', example: 'Ikies Traditional Houses, Astra Suites' },
      { label: 'Premium', range: '€600–$1,500/night', gets: 'Full infinity pool villa with caldera view, butler service, fine dining on site.', example: 'Grace Hotel Santorini, Mystique' },
      { label: 'Ultra-Luxury', range: '€1,500–€4,000+/night', gets: 'The finest cave villa, helicopter transfers, complete seclusion above the caldera.', example: 'Canaves Oia Epitome, Amanzoe (mainland)' },
    ],
    areas: [
      { name: 'Santorini (Oia / Imerovigli)', bestFor: 'Caldera views, the iconic sunset', description: 'Oia is the most photographed village on earth. Imerovigli (higher, quieter) is the caldera-view honeymoon sweet spot — far fewer tourists than Oia with the same dramatic views. The best cave suite hotels are here.' },
      { name: 'Mykonos', bestFor: 'Luxury, nightlife, Little Venice', description: 'Greece\'s most glamorous island. Excellent for couples who want a sophisticated scene alongside the beaches. Agios Ioannis and Psarou are the quiet luxury beaches.' },
      { name: 'Crete', bestFor: 'Beaches, culture, size, variety', description: 'Greece\'s largest island has it all: gorges, ancient palaces, long sand beaches, excellent food. Elounda (northeast) has the most luxurious hotel concentration. The least "Instagram Greece" but the most complete destination.' },
      { name: 'Amanzoe / Peloponnese', bestFor: 'Adults-only resort perfection, Aman seclusion', description: 'On the mainland\'s Peloponnese peninsula, 40 minutes from Nafplio. The Amanzoe resort sits on a promontory with 360-degree Aegean views. Adults-only by design. The quietest luxury in Greece.' },
    ],
    expertTips: [
      { tip: 'Go to Imerovigli not Oia for the caldera hotel experience', detail: 'Oia has the view that launched a million mood boards. Imerovigli has almost the same view, a fraction of the foot traffic, and properties like Astra Suites that are just as beautiful. Oia is a 15-minute walk.' },
      { tip: 'Athens 2 nights is not negotiable', detail: 'The Acropolis, Monastiraki market, and a dinner in the Plaka are a genuinely extraordinary addition to any Greek island honeymoon. Athens is 45 minutes from Santorini by Olympic Air. Don\'t skip it.' },
      { tip: 'The meltemi wind in July–August is the enemy', detail: 'The Aegean\'s summer northerly wind makes boat trips uncomfortable and blows pool umbrellas into the caldera. September has the same warm water and sun without the constant 30-knot gusts.' },
      { tip: 'Caldera-facing sunrise is as good as Oia sunset', detail: 'Everyone watches the Oia sunset. Almost no one watches the Santorini sunrise from Imerovigli — the caldera lit by dawn light with no other tourists. Set one alarm.' },
      { tip: 'Take the cable car at Fira exactly once', detail: 'The donkeys that carry tourists from the port to Fira are an animal welfare issue. The cable car takes 3 minutes. Use it and feel good about it.' },
    ],
    packing: [
      { item: 'Comfortable walking shoes', why: 'Greek island paths are uneven cobblestones — sandals are fine for village strolling but proper soles for hikes' },
      { item: 'Light layers for evenings', why: 'Santorini and Mykonos evenings can be cool with the meltemi even in July. A light jacket for outdoor dining.' },
      { item: 'Modest clothing for churches', why: 'The blue-domed churches require shoulders and knees covered to enter' },
      { item: 'Motion sickness tablets', why: 'Aegean ferry crossings in summer (meltemi season) can be rough' },
      { item: 'Euro cash', why: 'Island tavernas, boat operators, and markets strongly prefer cash. ATMs on smaller islands run out.' },
      { item: 'Portable power bank', why: 'Cave suite architecture means few power points. A full-day charge before exploring is essential.' },
    ],
    guide: {
      getting: 'Fly to Athens (ATH) — direct from most European cities (2–4h from UK). Then connect to Santorini (JTR, 45 min Olympic Air), Mykonos (MYK, 40 min), or Heraklion/Crete (HER, 1h). Alternatively, take the high-speed ferry from Athens\' Piraeus port to Santorini (5h Seajet fast ferry) or fly via Aegean Airlines. Inter-island ferries connect all the major Cyclades.',
      where: 'Santorini (Imerovigli and Oia for caldera hotels). Mykonos (Psarou and Agios Ioannis for beach luxury). Crete (Elounda peninsula for resort concentration). Amanzoe (Peloponnese mainland, most secluded). A multi-island trip: Athens 2 nights → Santorini 4 nights → Crete or Mykonos 3 nights is the classic circuit.',
      when: 'May–June is ideal: perfect weather, open for business, manageable crowds. September is the hidden best month — warm water, golden light, 30% fewer tourists than August. July–August is too crowded for Santorini specifically; manageable for Crete or Amanzoe.',
    },
    localFood: 'Fresh-caught grilled octopus drizzled with lemon (on every terrace), saganaki (fried cheese), dakos (Cretan bruschetta), moussaka done properly, and the extraordinary seafood meze at a seaside taverna with local ouzo. Santorini\'s cherry tomatoes (grown in volcanic soil) are the sweetest in Greece. Fava (yellow split pea purée) from Santorini is a local delicacy. The Assyrtiko white wine is the best match for all of it.',
    currency: 'Euro (EUR)',
    language: 'Greek. English widely spoken in all tourist areas.',
    timezone: 'GMT+2 (Eastern European Time) / GMT+3 in summer',
  },

  mauritius: {
    hero: '/images/hotels/one-and-only-le-saint-geran-mauritius/hero.webp',
    tagline: 'Infinite turquoise lagoons and flawless five-star service — the Indian Ocean\'s most polished honeymoon island.',
    intro: 'Mauritius is where French elegance, Indian warmth, and Creole soul converge on an island ringed by some of the world\'s most perfect coral lagoons. Unlike the Maldives — a resort bubble isolated from any real culture — Mauritius gives you both: overwater-quality turquoise water AND spice markets, rum distilleries, UNESCO mountains, and a food scene that fuses four cuisines into something extraordinary. The east coast\'s Belle Mare corridor has the clearest, flattest lagoon in the Indian Ocean. The southwest\'s Le Morne has the drama. Combined with African safari connections, Mauritius sits at the top of the Indian Ocean honeymoon hierarchy.',
    bestTime: 'May–Dec',
    flightFrom: '11–13h from Europe',
    topExperience: 'Lagoon Beach Luxury',
    perfectFor: [
      'Couples who want Maldives-quality water with real culture and culinary depth',
      'Beach lovers who also want exploration — highlands, markets, rum distilleries',
      'Honeymooners combining with an Africa safari (perfect Indian Ocean stopover)',
      'Foodies attracted to the Indian-Creole-Chinese-French fusion cuisine',
      'Kitesurfers and divers who want world-class conditions alongside luxury resorts',
    ],
    skipIf: [
      'You visit Jan–Mar — cyclone season is real and can ruin your trip',
      'You want complete wilderness isolation — Mauritius is a developed island with roads and towns',
      'Overwater bungalows are your non-negotiable — lagoon villas here are on the beach, not over water',
      'Budget is extremely tight — the best resorts command Maldives-level pricing',
    ],
    experiences: [
      {
        icon: '🐬',
        title: 'Wild Dolphin Swim at Tamarin Bay',
        description: 'Spinner dolphin pods gather in Tamarin Bay every morning before heading offshore to feed. Small local boats take you out to swim alongside them in open water — completely wild, completely unscripted. One of the most moving wildlife encounters available from any Indian Ocean hotel.',
        cost: '$50–$80 per person',
        tip: 'Book directly with Captain Blacky\'s boats or similar small Tamarin operators — not through your hotel. Hotels charge €150–€200 for the same experience. Depart at 7am for the highest dolphin density.',
      },
      {
        icon: '🚁',
        title: 'Underwater Waterfall Helicopter Flight',
        description: 'A sand and silt flow off the Le Morne Brabant shelf creates the optical illusion of an underwater waterfall visible only from above. The aerial view over Le Morne peninsula with the lagoon on both sides and the illusion below is one of the great natural spectacles of the Indian Ocean.',
        cost: '€150–€250 per person',
        tip: 'ULM microlight flights are cheaper and fly lower — better for the visual effect. Book through your hotel for the safest, best-positioned operators.',
      },
      {
        icon: '🏄',
        title: 'Kitesurfing at Le Morne',
        description: 'The Le Morne lagoon on the island\'s southwestern tip is the kitesurf capital of the Indian Ocean — consistent trade winds, flat warm water, and a UNESCO mountain as backdrop. Even complete beginners can get airborne in two days with the schools at the Kite Lagoon.',
        cost: '€80–€120 per lesson',
        tip: 'June–September has the strongest and most consistent winds. The IKO-certified schools at Le Morne are among the most professional in the world.',
      },
      {
        icon: '🌿',
        title: 'Bois Chéri Tea Plantation Tour',
        description: 'Mauritius produces excellent single-estate teas from its highland plantations. The Bois Chéri factory in the south offers guided tours through the tea-making process followed by tasting on a hilltop terrace with views across the southern coast.',
        cost: '€15–€25 per person',
        tip: 'Combine with the Rhumerie de Chamarel rum distillery nearby — both are in the southern highlands and make a perfect full-day excursion.',
      },
      {
        icon: '🤿',
        title: 'Blue Bay Marine Park Diving',
        description: 'The Blue Bay Marine Park in the southeast has some of the most protected coral in the Indian Ocean — branching staghorns, massive brain corals, and visibility that regularly exceeds 25m. The Stella Maris wreck at 18m is encrusted with soft coral and ringed by turtles and barracuda.',
        cost: '€60–€100 per person (2 dives)',
        tip: 'Dive Attitude at Mahébourg is the best operator. Blue Bay is on the southeast coast — best accessed from Le Touessrok, Heritage Awali, or Heritage Le Telfair.',
      },
    ],
    months: [
      { month: 'Jan', weather: 'Hot, humid, cyclone risk', emoji: '⚠️', crowds: 'Moderate', price: 'Mid-high', verdict: 'Cyclone season — buy comprehensive insurance' },
      { month: 'Feb', weather: 'Peak cyclone risk, heavy rain possible', emoji: '🌀', crowds: 'Low', price: 'Low', verdict: 'Highest risk month — consider postponing' },
      { month: 'Mar', weather: 'Cyclone risk easing, still humid', emoji: '🌦', crowds: 'Low', price: 'Low-mid', verdict: 'Improving but still risky' },
      { month: 'Apr', weather: 'Transitioning, warm, less rain', emoji: '🌤', crowds: 'Moderate', price: 'Mid', verdict: 'Good shoulder value' },
      { month: 'May', weather: 'Dry season begins, 24°C', emoji: '☀️', crowds: 'Moderate', price: 'Mid', verdict: 'Excellent — dry season opens' },
      { month: 'Jun', weather: 'Dry, 22°C, trade winds building', emoji: '☀️', crowds: 'Moderate', price: 'Mid', verdict: 'Very good conditions' },
      { month: 'Jul', weather: 'Dry, coolest month (20°C), breezy', emoji: '💨', crowds: 'High', price: 'Mid-high', verdict: 'European peak — book ahead' },
      { month: 'Aug', weather: 'Dry, breezy, kitesurf perfect', emoji: '💨', crowds: 'High', price: 'High', verdict: 'Busy but beautiful' },
      { month: 'Sep', weather: 'Warming, dry, excellent visibility', emoji: '☀️', crowds: 'Moderate', price: 'Mid', verdict: 'Sweet spot month' },
      { month: 'Oct', weather: 'Warm, very dry, best lagoon conditions', emoji: '☀️', crowds: 'Moderate', price: 'Mid-high', verdict: 'Hidden best month' },
      { month: 'Nov', weather: 'Hot, dry, building season', emoji: '☀️', crowds: 'Moderate', price: 'Mid-high', verdict: 'Pre-cyclone peak quality' },
      { month: 'Dec', weather: 'Hot, festive, early cyclone risk returns', emoji: '🌤', crowds: 'High', price: 'Very high', verdict: 'Excellent but watch the forecast' },
    ],
    budgetTiers: [
      { label: 'Luxury', range: '$400–$800/night', gets: 'Beachfront resort with private beach, multiple pools, spa, watersports. Mauritius delivers exceptional value at this tier — better than Maldives comparisons.', example: 'Constance Prince Maurice, Shangri-La Mauritius, Veranda Paul & Virginie' },
      { label: 'Premium', range: '$800–$2,000/night', gets: 'Private pool villa or suite, butler service, world-class spa, all-inclusive options available. The finest Indian Ocean beach experience outside private islands.', example: 'One&Only Le Saint Géran, Four Seasons Mauritius at Anahita, Oberoi Mauritius' },
      { label: 'Ultra-Luxury', range: '$2,000+/night', gets: 'Complete resort buyout potential, private beach villas, personal chef, helicopter transfers. The absolute pinnacle of Indian Ocean land-based luxury.', example: 'Lux* Grand Gaube private villas, Shanti Maurice presidential suites' },
    ],
    areas: [
      { name: 'East Coast (Belle Mare / Trou d\'Eau Douce)', bestFor: 'Finest lagoon, best resort concentration', description: 'The flattest, clearest water in Mauritius — protected from trade winds by the eastern reef. Four Seasons, One&Only Le Saint Géran, and Constance Prince Maurice are all on this 15km stretch. The obvious first choice for beach-focused honeymooners.' },
      { name: 'North (Grand Baie)', bestFor: 'Restaurants, day trips, liveliest scene', description: 'The most developed area with the best restaurant variety, boutiques, and easy access to flat-water snorkeling islets (Ile Aux Cerfs, Gunner\'s Quoin). Less secluded than the east but better for couples who want activity variety.' },
      { name: 'South (Le Morne / Bel Ombre)', bestFor: 'Dramatic scenery, kitesurfing, UNESCO heritage', description: 'The UNESCO-listed Le Morne Brabant mountain creates the island\'s most dramatic backdrop. Strong trade winds make this the Indian Ocean\'s kitesurf capital. Lux Le Morne and Heritage hotels are here. Extraordinary aerial views over both sides of the peninsula.' },
      { name: 'West (Flic en Flac)', bestFor: 'Sunset beach, diving, local life', description: 'The west coast catches the best sunsets and has the most accessible reef diving. Less prestigious resort strip than the east but authentic Mauritian towns, local restaurants, and prices that undercut the Belle Mare corridor.' },
    ],
    expertTips: [
      { tip: 'East coast for the best lagoon, southwest for the most dramatic scenery', detail: 'The east coast (Belle Mare corridor) has calmer, clearer water and the finest resort concentration. The southwest (Le Morne) has more dramatic mountain scenery and the best kitesurf conditions. Decide which matters more before booking.' },
      { tip: 'Rent a car for at least one day — the island rewards exploration', detail: 'Mauritius is small enough to cross in 90 minutes. The Chamarel highlands (rum distillery, Seven Coloured Earth, tea plantation), the Port Louis Central Market, and the Black River Gorges National Park are all within reach of any hotel.' },
      { tip: 'Port Louis Central Market is worth the trip', detail: 'The main market in the capital is one of the best in the Indian Ocean — spices, street food, fresh fish, and Mauritian textiles. Go on a Saturday morning and eat dholl puri from the stalls outside. Combine with a wander through the Caudan Waterfront.' },
      { tip: 'Book the dolphin swim directly with local operators', detail: 'Hotels charge €150–€200 per couple for the Tamarin Bay dolphin swim. Captain Blacky and local operators in Tamarin charge $50–$80 per couple for an identical (often better) experience. The dolphins are wild — no operator can guarantee them, regardless of price.' },
      { tip: 'Mauritius eats like no other Indian Ocean island', detail: 'The Indian-Creole-Chinese-French fusion means every meal is a discovery. Eat at local Creole tables d\'hôte at least twice, try dholl puri from a roadside stall, and drink Chamarel rum agricole — it\'s better than most Caribbean equivalents.' },
    ],
    packing: [
      { item: 'Reef-safe sunscreen', why: 'Blue Bay Marine Park and other protected areas restrict chemical sunscreens — bring mineral SPF' },
      { item: 'Light hiking shoes', why: 'Le Morne Brabant summit hike and Black River Gorges trails require proper footwear — sandals won\'t work' },
      { item: 'Windproof layer', why: 'Trade winds at Le Morne and evening ocean breezes on the east coast are cooler than expected, especially June–August' },
      { item: 'Underwater camera', why: 'Blue Bay coral gardens and the Stella Maris wreck justify proper underwater photography — the visibility is exceptional' },
      { item: 'Cash in Mauritian Rupees', why: 'Local restaurants, dholl puri stalls, markets, and bus travel require cash. Hotels take cards but the real Mauritius experience requires rupees.' },
    ],
    guide: {
      getting: 'Fly to Sir Seewoosagur Ramgoolam International Airport (MRU) on the southeast coast. Direct flights from London Heathrow (British Airways, Air Mauritius, ~11-12h), Paris CDG (Air Mauritius, ~11h), Frankfurt, Zurich, and Amsterdam. From MRU, the east coast is 30–45 minutes, the north is 45 minutes, the southwest Le Morne area is 1 hour. All hotels arrange private transfers.',
      where: 'East coast (Belle Mare corridor) for the best lagoon and finest resorts — the most popular honeymoon choice. Southwest (Le Morne) for dramatic mountain scenery and kitesurfing. North (Grand Baie) for the liveliest scene with restaurant variety. West (Flic en Flac) for sunsets, diving, and better value.',
      when: 'May–December is the dry season — the safe window. October and November are the absolute sweet spot: warm, dry, excellent visibility, before cyclone season, and lower than peak January prices. Avoid January–March unless you have comprehensive cyclone-cancellation insurance.',
    },
    localFood: 'Dholl puri (split pea flatbread with curry) from roadside stalls, rougaille (Creole tomato-based fish or sausage stew), octopus curry with turmeric and ginger, alouda (rose milk with basil seeds), and fresh gateaux piment (chilli cakes) with a Star beer at a beach shack in Grand Baie. The fusion of Indian, Creole, Chinese and French cuisines makes Mauritian food uniquely extraordinary.',
    currency: 'Mauritian Rupee (MUR) — hotels quote EUR/USD',
    language: 'French and English (both official)',
    timezone: 'UTC+4',
  },

  zanzibar: {
    hero: '/images/hotels/andbeyond-mnemba-island-zanzibar/hero.webp',
    tagline: 'White coral sand, turquoise Indian Ocean, and spice-scented Stone Town — East Africa\'s most romantic island.',
    intro: 'Zanzibar is where the Indian Ocean meets Africa in the most romantic way possible. The UNESCO-listed Stone Town is a labyrinth of carved wooden doors, Arabic architecture, and spice markets that have traded since the 9th century. Step outside that ancient city and you find some of the finest beach hotels in the world — coral sand so white it reflects the sun, water so clear you can count the fish from your sunlounger. Add the Spice Tour, a dhow sunset sail, and Forodhani Gardens at night, and you have a honeymoon that engages every sense.',
    bestTime: 'Jun–Oct & Dec–Mar',
    flightFrom: '8–11h from Europe',
    topExperience: 'Beach & Culture',
    perfectFor: [
      'Couples who want exceptional beaches with genuine cultural depth',
      'Safari add-on honeymooners — Zanzibar pairs perfectly with Tanzania mainland',
      'Those seeking Indian Ocean luxury at significantly lower prices than Maldives',
      'Food lovers drawn to Swahili spice culture and fresh Indian Ocean seafood',
      'Adventurous couples who want kite surfing, snorkeling, and dhow sailing',
    ],
    skipIf: [
      'You want guaranteed uninterrupted sunshine — the long rains (Apr–May) are heavy',
      'Ultra-luxury overwater bungalows are the non-negotiable — this is beach, not lagoon',
      'You\'re uncomfortable with heat and humidity year-round',
      'Nightlife and resort entertainment are important to you',
    ],
    experiences: [
      {
        icon: '🌿',
        title: 'Spice Farm Tour',
        description: 'A half-day guided walk through working clove, nutmeg, vanilla, and cinnamon farms with a local guide who lets you smell, taste, and identify every spice. Ends with a Swahili lunch cooked using everything you\'ve just seen.',
        cost: '$30–$60 per person',
        tip: 'Book with a Stone Town-based operator rather than through your hotel — the experience is identical and you support local businesses directly.',
      },
      {
        icon: '⛵',
        title: 'Traditional Dhow Sunset Cruise',
        description: 'Sail the Indian Ocean at sunset on a hand-carved wooden dhow with champagne and fresh fruit. The silhouette of Stone Town behind you as the sun drops into the ocean is one of Africa\'s most beautiful scenes.',
        cost: '$80–$150 per couple',
        tip: 'Depart from Stone Town waterfront rather than your hotel — the approach back to the old town at dusk is the real experience.',
      },
      {
        icon: '🏛️',
        title: 'Stone Town After Dark',
        description: 'Walk the labyrinthine alleys of the UNESCO Old Town at night when the heat fades — carved doors lit by lanterns, the call to prayer echoing, and Forodhani Gardens night market blazing with Zanzibar pizza stalls and fresh seafood.',
        cost: 'Free (food $5–$15)',
        tip: 'Go on a Friday evening when the market is busiest. Hire a local guide for $20 — they unlock buildings and histories you\'d walk past alone.',
      },
      {
        icon: '🤿',
        title: 'Mnemba Atoll Snorkeling',
        description: 'The waters around Mnemba Island — a private atoll off the northeast coast — are among East Africa\'s richest reefs. Green turtles, dolphins, and hundreds of reef fish species in crystal-clear visibility.',
        cost: '$60–$120 per person',
        tip: 'Go in the morning before the wind picks up. If staying at &Beyond Mnemba Island, the reef is literally off your beach.',
      },
      {
        icon: '🪁',
        title: 'Kite Surfing at Paje',
        description: 'The southeast coast at Paje has a shallow lagoon, consistent trade winds (June–September), and a developed kite school scene. Even beginners can get on the water in a day. The east coast vibe is relaxed and young.',
        cost: '$80–$120 per lesson',
        tip: 'Stay at one of Paje\'s boutique hotels even if you\'re not kite surfing — the beach here is less crowded than the north.',
      },
    ],
    months: [
      { month: 'Jan', weather: 'Hot, dry, excellent', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Peak season, worth it' },
      { month: 'Feb', weather: 'Hot and dry, ideal', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Best beach weather' },
      { month: 'Mar', weather: 'Getting humid, rains building', emoji: '⛅', crowds: 'Moderate', price: 'Mid', verdict: 'Go early in month' },
      { month: 'Apr', weather: 'Long rains, heavy downpours', emoji: '🌧', crowds: 'Very low', price: 'Lowest', verdict: 'Avoid — serious rain' },
      { month: 'May', weather: 'Still rainy, tailing off', emoji: '🌦', crowds: 'Very low', price: 'Very low', verdict: 'Only for budget seekers' },
      { month: 'Jun', weather: 'Dry season begins, breezy', emoji: '🌤', crowds: 'Moderate', price: 'Mid', verdict: 'Excellent shoulder pick' },
      { month: 'Jul', weather: 'Dry and breezy, near-perfect', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Prime season' },
      { month: 'Aug', weather: 'Dry, best kite wind, beautiful', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Best all-round month' },
      { month: 'Sep', weather: 'Still dry, thinning out', emoji: '☀️', crowds: 'Moderate', price: 'Mid-high', verdict: 'Sweet spot value' },
      { month: 'Oct', weather: 'Short rains possible', emoji: '⛅', crowds: 'Low', price: 'Mid', verdict: 'Gamble but often fine' },
      { month: 'Nov', weather: 'Short rains, unpredictable', emoji: '🌦', crowds: 'Low', price: 'Low', verdict: 'Risky — check forecast' },
      { month: 'Dec', weather: 'Dry, hot, festive crowds', emoji: '☀️', crowds: 'Very high', price: 'Highest', verdict: 'Beautiful but expensive' },
    ],
    budgetTiers: [
      {
        label: 'Boutique Beach',
        range: '$200–$500/night',
        gets: 'Charming boutique hotel on the east or north coast, pool, excellent food. The best value Indian Ocean honeymoon in the world at this tier.',
        example: 'Baraza Resort & Spa, Matemwe Lodge, White Sand Luxury Villas',
      },
      {
        label: 'Premium',
        range: '$500–$1,200/night',
        gets: 'Serious luxury — private plunge pools, beach butlers, exceptional Swahili design. Better than equivalents in Europe at the same price.',
        example: 'Zuri Zanzibar, Melia Zanzibar, Gold Zanzibar',
      },
      {
        label: 'Ultra-Luxury',
        range: '$1,200–$3,500+/night',
        gets: 'Private island or exclusive beach property, complete seclusion, incredible reef access, all-inclusive experiences. The finest East African beach hotels.',
        example: '&Beyond Mnemba Island, Thanda Island',
      },
    ],
    areas: [
      {
        name: 'Stone Town',
        bestFor: 'UNESCO culture, history, dining',
        description: 'The historic heart of Zanzibar — a UNESCO World Heritage maze of Arab, Persian, Indian, and European architecture. No beach hotels here but essential for a night or two for culture, the night market, and the best restaurants on the island.',
      },
      {
        name: 'North (Nungwi & Kendwa)',
        bestFor: 'Best beaches, swimming, nightlife',
        description: 'The northern tip has Zanzibar\'s most swimmable beaches — no tidal flats, turquoise water all day. Nungwi has a fishing village feel with buzzing restaurant strips. Kendwa is quieter. Both have the best hotels for swimming from the beach.',
      },
      {
        name: 'East (Paje & Bwejuu)',
        bestFor: 'Kite surfing, boutique hotels, local feel',
        description: 'The east coast has a tidal lagoon — beautiful at high tide, rocky at low — but the boutique hotel scene here is charming and authentic. Paje is the kite surfing capital. Bwejuu is quieter. Both attract a younger, more adventurous crowd.',
      },
      {
        name: 'South (Jambiani & beyond)',
        bestFor: 'Quiet luxury, seaweed farms, local life',
        description: 'The quietest part of the island with some excellent high-end resorts that market themselves on seclusion. Local fishing villages still work seaweed farms in the tidal shallows. Genuinely off the tourist circuit.',
      },
    ],
    expertTips: [
      {
        tip: 'Combine with a Tanzania safari',
        detail: 'Zanzibar is 40 minutes by prop plane from Dar es Salaam and 90 minutes from Kilimanjaro. A 4-night Serengeti or Ngorongoro safari followed by 5 nights in Zanzibar is one of the world\'s great honeymoon combinations. Tour operators in Arusha will arrange the whole thing.',
      },
      {
        tip: 'Stay a night in Stone Town',
        detail: 'Even if your main base is a beach hotel, spend one or two nights in Stone Town at the beginning or end of your trip. Emerson Spice rooftop restaurant and 236 Hurumzi are the best hotels. Experience the city before retreating to the beach.',
      },
      {
        tip: 'Book the north for guaranteed swimming',
        detail: 'The east coast is beautiful but the tidal variation is extreme — at low tide it\'s a 400-metre walk to the water. If beach swimming daily is important, stay at Nungwi or Kendwa where the tidal shift is minimal.',
      },
      {
        tip: 'Forodhani Gardens at night is unmissable',
        detail: 'The waterfront night market runs every evening from around 6pm. For $3–5 you eat Zanzibar pizza, fresh sugarcane juice, grilled lobster, and octopus skewers surrounded by hundreds of locals. One of the best cheap food experiences in Africa.',
      },
      {
        tip: 'Respect dress codes in Stone Town',
        detail: 'Zanzibar is a predominantly Muslim island. In Stone Town, women should cover shoulders and knees; men should avoid shorts in the medina. On the beach, anything goes — the locals are extremely tolerant of tourist beach attire at the resorts.',
      },
    ],
    packing: [
      { item: 'Modest cover-up for Stone Town', why: 'Required for mosque visits and respectful in the medina — light linen works perfectly in the heat' },
      { item: 'High-factor reef-safe sunscreen', why: 'The equatorial sun is extreme and the reefs need protection — many resorts now require reef-safe products' },
      { item: 'Snorkel mask (own)', why: 'Hotel gear is functional but your own mask fits better — essential for the Mnemba Atoll visits' },
      { item: 'Insect repellent (DEET 30%+)', why: 'Malaria is present in Zanzibar — take prophylaxis and use repellent at dawn and dusk' },
      { item: 'Waterproof dry bag', why: 'Dhow trips and snorkel excursions involve open boats — essential for phones and cameras' },
    ],
    guide: {
      getting: 'Fly to Zanzibar Abeid Amani Karume International (ZNZ). Direct flights from Europe: Kenya Airways via Nairobi, Ethiopian Airlines via Addis Ababa, Turkish Airlines via Istanbul (all 8–11h total). From the UK: no direct service — best routing is via Nairobi with Kenya Airways or via Dubai with flydubai. Internal flights from Dar es Salaam (DAR) take 35 minutes and cost $60–$100. Taxis from ZNZ airport to Stone Town are 20 minutes ($10–$15 fixed rate); to north coast hotels, 45–60 minutes ($25–$40).',
      where: 'North coast (Nungwi/Kendwa) for best swimming and most social scene — best all-round choice for a first visit. East coast (Paje) for kite surfing, boutique hotels, and a younger vibe. South for total seclusion and premium luxury. Combine: 2 nights Stone Town + 5 nights beach hotel. For ultra-luxury: &Beyond Mnemba Island is the finest property — book a year ahead.',
      when: 'June to October is the prime dry season — warm days (28°C), reliable sunshine, and the best kite wind on the east coast. December to March (excluding April–May long rains) is equally beautiful and slightly hotter. January and February are the hottest and driest months — excellent for beach. Avoid April and May entirely.',
    },
    localFood: 'Zanzibar pizza (stuffed flatbread with egg, meat, and cheese from Forodhani Gardens night market), urojo soup (tangy Zanzibari mix soup), fresh grilled tuna with tamarind sauce, biryani rice cooked with whole spices, and spiced chai with cardamom and ginger. The Spice Tour to clove, nutmeg and vanilla farms is a half-day highlight.',
    currency: 'Tanzanian Shilling (TZS) — hotels quote USD',
    language: 'Swahili and English',
    timezone: 'UTC+3',
  },

  kenya: {
    hero: '/images/hotels/angama-mara-kenya/hero.webp',
    tagline: 'The Great Migration, Big Five safaris, and some of the world\'s most romantic tented camps.',
    intro: 'Kenya is where the modern luxury safari was invented and where it is still perfected. The Maasai Mara\'s endless plains host the greatest wildlife show on earth — 1.5 million wildebeest crossing the Mara River each year — while private conservancies around Laikipia offer intimate, exclusive encounters with elephant, lion, and rhino without another vehicle in sight. Stay in a tented camp where the canvas walls let in the sound of lions calling at 3am, watch the sunrise over the escarpment with a hot coffee, and sit around the campfire telling stories under the most star-dense sky you\'ve ever seen. This is adventure, romance, and wildness in equal measure.',
    bestTime: 'Jul–Oct & Jan–Feb',
    flightFrom: '8–10h from Europe',
    topExperience: 'Luxury Safari',
    perfectFor: [
      'Wildlife obsessives — Kenya\'s Maasai Mara is the finest Big Five destination on earth',
      'Couples who want intimate luxury: candlelit bush dinners, private game drives at dawn',
      'Adventure-seeking honeymooners willing to trade beaches for something extraordinary',
      'Photography couples — the light on the Mara plains at golden hour is unlike anywhere',
      'Those who want to combine safari with Zanzibar or Diani Beach for the ultimate Africa honeymoon',
    ],
    skipIf: [
      'A beach is non-negotiable — Kenya is landlocked safari territory (though the coast exists)',
      'Budget is under $500/night — luxury tented camps are genuinely expensive and worth it',
      'You prefer urban exploration, shopping, and restaurant variety over wilderness',
      'Dust, insects, and pre-dawn wake-up calls aren\'t your idea of a honeymoon',
    ],
    experiences: [
      {
        icon: '🦁',
        title: 'Private Dawn Game Drive, Maasai Mara',
        description: 'Leave camp at first light with your own guide and vehicle — no shared jeeps, no crowds. Watch lion cubs play in the golden hour light, elephants at the waterhole, and cheetah on the hunt. The private conservancies outside the main reserve allow off-road driving.',
        cost: 'Included in most luxury camp rates',
        tip: 'Book a private conservancy camp rather than inside the reserve — you get off-road access, night drives, and walking safaris that are banned in the National Reserve.',
      },
      {
        icon: '🌅',
        title: 'Hot Air Balloon over the Mara',
        description: 'An hour floating over the savannah at sunrise as herds of wildebeest move below you in silence. Champagne breakfast on the plains after landing. One of Africa\'s definitive experiences — the scale of the migration seen from above is incomprehensible.',
        cost: '$450–$650 per person',
        tip: 'Book directly with Governors\' Balloon Safaris or Kichwa Tembo Balloon Safaris — they have the best safety record and the most experienced pilots.',
      },
      {
        icon: '🚶',
        title: 'Bush Walk with Maasai Guide',
        description: 'A 2–3 hour walk with a Maasai warrior guide who reads the landscape — tracking animal signs, identifying plants, and explaining how his people have lived alongside lions for centuries. Ground-level Kenya is completely different from the vehicle.',
        cost: '$80–$150 per couple',
        tip: 'Request a young Maasai guide who also speaks good English — the combination of traditional knowledge and modern communication makes for extraordinary conversation.',
      },
      {
        icon: '🐘',
        title: 'Amboseli at Sunrise with Kilimanjaro',
        description: 'The image that defines Kenya: a hundred elephants grazing against the white mass of Kilimanjaro at dawn. Amboseli National Park has the highest density of elephants in East Africa and the mountain is visible on clear mornings from October to March.',
        cost: 'Included in camp rates — fly from Nairobi Wilson ($80–$150)',
        tip: 'Stay at Tortilis Camp or Tawi Lodge — both have extraordinary Kilimanjaro-facing views. Book October–February for the clearest mountain visibility.',
      },
      {
        icon: '🍷',
        title: 'Sundowner Drinks on the Escarpment',
        description: 'At 6pm, your guide drives to the Oloololo Escarpment — the edge of the Rift Valley — and pops champagne as the sun drops behind the horizon. Below you, 50km of Mara plains glow amber. Hippos grunt from the river. This moment is why people come to Kenya.',
        cost: 'Included at Angama Mara and most top camps',
        tip: 'Angama Mara\'s terrace sundowners from the camp itself are equally spectacular — ask for the table closest to the glass edge.',
      },
    ],
    months: [
      { month: 'Jan', weather: 'Dry and warm, excellent', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Peak quality, very good' },
      { month: 'Feb', weather: 'Dry, hot, superb wildlife', emoji: '☀️', crowds: 'Moderate', price: 'Mid-high', verdict: 'Best value peak month' },
      { month: 'Mar', weather: 'Long rains approaching', emoji: '⛅', crowds: 'Low', price: 'Mid', verdict: 'Good deals, slight risk' },
      { month: 'Apr', weather: 'Long rains, heavy', emoji: '🌧', crowds: 'Very low', price: 'Lowest', verdict: 'Avoid — most camps close' },
      { month: 'May', weather: 'Still raining, lush and green', emoji: '🌦', crowds: 'Very low', price: 'Very low', verdict: 'Many camps closed' },
      { month: 'Jun', weather: 'Drying out, migration arriving', emoji: '🌤', crowds: 'Moderate', price: 'Mid', verdict: 'Migration builds — good value' },
      { month: 'Jul', weather: 'Dry, Great Migration peaks', emoji: '☀️', crowds: 'Peak', price: 'Highest', verdict: 'Greatest show on earth' },
      { month: 'Aug', weather: 'Dry, peak river crossings', emoji: '☀️', crowds: 'Peak', price: 'Highest', verdict: 'Most dramatic migration' },
      { month: 'Sep', weather: 'Dry, migration still present', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Excellent, slightly fewer crowds' },
      { month: 'Oct', weather: 'Short rains starting', emoji: '⛅', crowds: 'Moderate', price: 'Mid', verdict: 'Good wildlife, lower prices' },
      { month: 'Nov', weather: 'Short rains, lush landscape', emoji: '🌦', crowds: 'Low', price: 'Low-mid', verdict: 'Beautiful green Mara, good deals' },
      { month: 'Dec', weather: 'Dry again, festive season', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Excellent, book a year ahead' },
    ],
    budgetTiers: [
      {
        label: 'Mid-Range Safari',
        range: '$350–$600/night all-inclusive',
        gets: 'Comfortable tented camp, shared game drives, full board. Great wildlife access — many excellent Mara camps at this level.',
        example: 'Mara Intrepids, Basecamp Masai Mara, Porini Lion Camp',
      },
      {
        label: 'Luxury Tented Camp',
        range: '$600–$1,500/night all-inclusive',
        gets: 'Private tented suite, en-suite bathroom, private deck, bush dinners, top guides, all activities included. The definitive Kenya honeymoon.',
        example: 'Angama Mara, Kichwa Tembo, Cottar\'s 1920s Camp',
      },
      {
        label: 'Ultra-Private Conservancy',
        range: '$1,500–$4,000+/night all-inclusive',
        gets: 'Exclusive private conservancy, no shared drives, night safaris, walking safaris with armed rangers, private guides. Absolute seclusion in the bush.',
        example: 'Ol Pejeta House, Solio Lodge, Lewa House',
      },
    ],
    areas: [
      {
        name: 'Maasai Mara',
        bestFor: 'Great Migration, Big Five, classic safari',
        description: 'Kenya\'s most famous reserve — and the world\'s finest Big Five destination during the July–October migration. The private conservancies bordering the main reserve (Olare Motorogi, Mara North, Naboisho) offer far more exclusive experiences with off-road driving and fewer vehicles.',
      },
      {
        name: 'Amboseli',
        bestFor: 'Elephants and Kilimanjaro views',
        description: 'Best known for its extraordinary elephant population (200+ individuals, studied for 50 years) and the iconic view of Kilimanjaro rising behind the herds. Smaller and more intimate than the Mara. Best in the dry season when elephants congregate around the springs.',
      },
      {
        name: 'Laikipia Plateau',
        bestFor: 'Private conservancies, rhino, exclusivity',
        description: 'A private plateau north of Mount Kenya with some of Africa\'s finest private conservancies — Ol Pejeta, Lewa, Solio, and Borana. Kenya\'s last healthy black rhino populations live here. No mass tourism — these are truly exclusive, intimate experiences with tiny guest numbers.',
      },
      {
        name: 'Samburu',
        bestFor: 'Northern specialist species',
        description: 'The arid north offers species you won\'t see in the Mara: the reticulated giraffe, Grevy\'s zebra, beisa oryx, Somali ostrich, and gerenuk. Extraordinarily beautiful dry landscape. Combine with the Mara for the full Kenya wildlife picture.',
      },
    ],
    expertTips: [
      {
        tip: 'Book private conservancy camps, not the main reserve',
        detail: 'The Maasai Mara National Reserve is crowded — 50 vehicles around every lion kill in high season. The private conservancies outside the park boundary offer the same wildlife with a fraction of the vehicles, plus night drives and walking safaris. Pay the premium.',
      },
      {
        tip: 'Fly between parks — never drive',
        detail: 'Kenya\'s roads are brutal. Nairobi to the Mara by road is 5–6 hours on terrible tarmac. By light aircraft from Wilson Airport: 45 minutes over the Rift Valley with views of the escarpment. All luxury camp rates include or arrange airstrips transfers.',
      },
      {
        tip: 'Time the migration with flexibility',
        detail: 'The Great Migration is not a fixed calendar event — herds can cross the Mara River between July and October, but the timing varies by year. Book July–September for the highest probability. Trust your camp manager\'s real-time intelligence over fixed itineraries.',
      },
      {
        tip: 'Pack a down jacket for early mornings',
        detail: 'Dawn game drives in June–August start at 5:30am and the open-sided vehicles move at speed — it is genuinely cold on the Mara plains at altitude. Most guests underpack warm layers and shiver through their best wildlife sightings. Bring more layers than you think.',
      },
      {
        tip: 'Add a Zanzibar extension',
        detail: 'Nairobi to Zanzibar is 90 minutes by prop plane (or 2h via Dar es Salaam). The combination of 5 nights Kenya safari + 5 nights Zanzibar beach is one of the world\'s great honeymoon itineraries — culture, wildlife, and Indian Ocean in one trip.',
      },
    ],
    packing: [
      { item: 'Neutral safari colours (khaki, olive, tan)', why: 'Dark colours attract tsetse flies; white spooks animals — the dress code is practical not aesthetic' },
      { item: 'Binoculars (10x42)', why: 'Non-negotiable on safari — even the best guides can\'t get you close enough to see detail without them' },
      { item: 'Down jacket or fleece', why: 'Dawn drives at 5:30am at altitude are genuinely cold — pack more warmth than you think you\'ll need' },
      { item: 'Dust-proof camera bag', why: 'The Mara dusty season coats everything — a sealed bag protects lenses between game drives' },
      { item: 'Yellow fever vaccination certificate', why: 'Required for entry if arriving from certain countries — check requirements and carry the physical card' },
    ],
    guide: {
      getting: 'Fly into Nairobi Jomo Kenyatta International (NBO) — well-served from Europe with KLM (Amsterdam, 8.5h direct), British Airways (London, 8.5h direct), Ethiopian Airlines (Addis Ababa), and Kenya Airways. From NBO, transfer to Wilson Airport (30 min) for light aircraft to bush airstrips. Most luxury camps meet you at Wilson. Internal flights run multiple times daily to all major parks ($80–$200 each way). Do not attempt to drive between parks — fly.',
      where: 'First-time: Maasai Mara private conservancy (Olare Motorogi or Mara North) for 4 nights. Add-on: Amboseli (2 nights) for elephants and Kilimanjaro. Extended: add Laikipia (2 nights) for rhino and exclusivity. Top camps: Angama Mara (best views), Cottar\'s 1920s Camp (most romantic), Sanctuary Olonana (river location). All are all-inclusive — no surprise extras.',
      when: 'July–October for the Great Migration river crossings — the peak wildlife experience. January–February for dry season clarity, excellent predator action, and lower prices than peak. March and November are shoulder months with good wildlife and fewer tourists. Avoid April–May (long rains — many camps close).',
    },
    localFood: 'Nyama choma (roasted goat or beef) at a local butchery restaurant, ugali (maize flour porridge) with sukuma wiki (collard greens) and stewed beans, mandazi (coconut fried doughnuts) with chai at sunrise, Kenyan AA coffee from Nyeri highlands, and Tusker beer at the camp sundowner. Camp chefs at luxury tented camps produce genuinely extraordinary multi-course dinners in the bush.',
    currency: 'Kenyan Shilling (KES) — safaris quote USD',
    language: 'English and Swahili (both official)',
    timezone: 'UTC+3',
  },

  fiji: {
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
  },

  croatia: {
    hero: '/images/hotels/lesic-dimitri-palace-korcula-croatia/hero.webp',
    tagline: 'Walled Old Towns, island-hopping by catamaran, and Adriatic sunsets over Byzantine palaces.',
    intro: 'Croatia packages everything a European honeymoon should be into one extraordinarily beautiful coastline: medieval walled cities, emerald water, fresh seafood eaten at 10pm under stone archways, and island after island reachable by catamaran from Split. Dubrovnik\'s Old Town is one of the most dramatic cities in Europe — its white limestone walls reflect the Adriatic light in a way that makes every photograph look professional. Hvar has the lavender-scented hills, the parties, and the best beaches. Korcula has the wine, the quiet, and Marco Polo\'s alleged birthplace. Croatia is short-haul from northern Europe, genuinely beautiful, and vastly underrated as a honeymoon choice over the Greek islands.',
    bestTime: 'May–Jun & Sep',
    flightFrom: '2–3h from northern Europe',
    topExperience: 'Island Hopping & Old Towns',
    perfectFor: [
      'Couples who want cultural depth alongside beach beauty — history, food, and swimming',
      'Short-haul European honeymooners — 2–3h flights, no jet lag, superb quality',
      'Foodies: Adriatic seafood, Plavac Mali wine, oysters, and truffle pasta are world-class',
      'Island-hoppers who love the flexibility of ferries, catamarans, and sailboat charters',
      'Couples who\'ve done the Greek islands and want something less crowded and more authentic',
    ],
    skipIf: [
      'July and August crowds don\'t suit you — Dubrovnik in peak season is genuinely overwhelming',
      'You want guaranteed hot, calm weather — May can be cool and windy on exposed islands',
      'Tropical water temperature is important — the Adriatic is warm but not Caribbean warm',
      'You prefer a single resort base over multi-island logistics',
    ],
    experiences: [
      {
        icon: '🏰',
        title: 'Sunrise Walk on Dubrovnik\'s Walls',
        description: 'The 2km walk around Dubrovnik\'s medieval city walls at 8am before the cruise ships arrive — terracotta roofs, orange church towers, and the Adriatic below. One of Europe\'s finest 90 minutes. The walls close at sunset so morning is the only time to see them in peace.',
        cost: '€35 per person',
        tip: 'Buy tickets the evening before online to secure the 8am opening slot. Cruise ships dock at 9am and the walls become very crowded by 10am. This one hour window is transformative.',
      },
      {
        icon: '⛵',
        title: 'Private Sailboat Charter from Hvar',
        description: 'Charter a traditional wooden sailing boat with a skipper and spend the day island-hopping — Pakleni Islands for swimming in hidden coves, Vis for fresh fish lunch, and back to Hvar at sunset with wine. The best way to see the Dalmatian coast.',
        cost: '€400–€800/day (6–8 people, but hire privately)',
        tip: 'Hire the whole boat as a couple rather than joining a group tour — the cost difference ($200 extra) is worth complete freedom to choose coves, timing, and lunch spots.',
      },
      {
        icon: '🦪',
        title: 'Fresh Oysters at Mali Ston',
        description: 'Mali Ston, a tiny fortified village 50km from Dubrovnik, has cultivated oysters in its clean bay for centuries. The oysters are harvested that morning and served with lemon and a glass of white Malvasia wine. Some of Europe\'s finest bivalves, in a medieval setting.',
        cost: '€15–€25 per dozen',
        tip: 'Restaurants Kapetanova Kuća and Vila Koruna are the most respected. Combine with a drive through the Pelješac peninsula wine road on the same day.',
      },
      {
        icon: '🍷',
        title: 'Pelješac Wine Peninsula Drive',
        description: 'A 100km peninsula jutting off the Dalmatian coast grows Plavac Mali — the most distinctive red wine in the Adriatic. Wineries open for tastings in beautiful stone farmhouses. Mike\'s Winery and Saints Hills are the standouts. Combine with Ston oysters for the perfect food-wine day.',
        cost: '€20–€40 per person for tastings',
        tip: 'Rent a car from Dubrovnik for the day rather than joining a tour — the freedom to stop at random family wineries along the road is half the experience.',
      },
      {
        icon: '🏊',
        title: 'Blue Cave and Vis Island Day Trip',
        description: 'The Blue Cave on Biševo island produces an unearthly blue light effect when sunlight refracts through the water at midday. Combine with lunch at Vis — the most authentic inhabited island in the Adriatic, barely touched by mass tourism, with extraordinary konoba restaurants.',
        cost: '€50–€100 per person (tour from Hvar or Split)',
        tip: 'The Blue Cave entry involves a small dinghy and can be crowded in July/August — go in May, June, or September for a more intimate experience.',
      },
    ],
    months: [
      { month: 'Jan', weather: 'Cold, blustery, off-season', emoji: '🌨', crowds: 'Very low', price: 'Very low', verdict: 'Most things closed' },
      { month: 'Feb', weather: 'Cold, dramatic, few tourists', emoji: '❄️', crowds: 'Very low', price: 'Lowest', verdict: 'Only for city break seekers' },
      { month: 'Mar', weather: 'Mild, fresh, spring beginning', emoji: '🌱', crowds: 'Very low', price: 'Low', verdict: 'Off-season but opening up' },
      { month: 'Apr', weather: 'Beautiful, green, some rain', emoji: '🌤', crowds: 'Low', price: 'Low-mid', verdict: 'Excellent for hiking and Old Towns' },
      { month: 'May', weather: 'Warm, sunny, perfect', emoji: '☀️', crowds: 'Moderate', price: 'Mid', verdict: 'Best shoulder month — superb' },
      { month: 'Jun', weather: 'Hot, dry, glorious', emoji: '☀️', crowds: 'Moderate-high', price: 'Mid-high', verdict: 'Excellent before the peak' },
      { month: 'Jul', weather: 'Peak summer, very hot', emoji: '☀️', crowds: 'Peak', price: 'Highest', verdict: 'Beautiful but very crowded' },
      { month: 'Aug', weather: 'Hottest month, busiest', emoji: '☀️', crowds: 'Peak', price: 'Highest', verdict: 'Best weather, worst crowds' },
      { month: 'Sep', weather: 'Warm, drying, sea still warm', emoji: '🌤', crowds: 'Moderate', price: 'Mid-high', verdict: 'Best month overall — ideal' },
      { month: 'Oct', weather: 'Mild, some rain, quieting', emoji: '⛅', crowds: 'Low', price: 'Mid', verdict: 'Good value, fewer tourists' },
      { month: 'Nov', weather: 'Cooling, some closures', emoji: '🌦', crowds: 'Very low', price: 'Low', verdict: 'Getting quiet — city break only' },
      { month: 'Dec', weather: 'Cold, festive in Dubrovnik', emoji: '🌨', crowds: 'Low', price: 'Low-mid', verdict: 'Christmas markets in Dubrovnik only' },
    ],
    budgetTiers: [
      {
        label: 'Boutique Hotel',
        range: '€200–€400/night',
        gets: 'Beautiful stone boutique hotel in an Old Town, excellent restaurant, sea-view terrace. Excellent value versus comparable European luxury destinations.',
        example: 'Lesic Dimitri Palace (Korcula), Hotel Stari Grad (Hvar), Hotel Kompas (Dubrovnik)',
      },
      {
        label: 'Premium',
        range: '€400–€800/night',
        gets: 'Clifftop villa hotel with private pool, butler, sea views, and direct sea access. The proper Dalmatian luxury experience.',
        example: 'Adriana Hvar Spa Hotel, Villa Dubrovnik, Rixos Premium Dubrovnik',
      },
      {
        label: 'Villa Rental',
        range: '€300–€1,500+/night',
        gets: 'Private stone villa with pool overlooking the Adriatic — the most romantic option for couples who want privacy over hotel services.',
        example: 'Via The Unique Collection or Oliver\'s Travels — hundreds of spectacular private villas',
      },
    ],
    areas: [
      {
        name: 'Dubrovnik',
        bestFor: 'Most iconic Old Town, UNESCO city walls',
        description: 'The most famous destination on the coast — the perfectly preserved medieval walled city is genuinely extraordinary, especially at sunrise before the cruise crowds arrive. Base here for one section of your honeymoon rather than your entire trip.',
      },
      {
        name: 'Hvar',
        bestFor: 'Beaches, nightlife, lavender, most social',
        description: 'The most glamorous island — a long, thin island of lavender fields, hidden pebble coves, and a bustling harbour town. The Pakleni Islands just offshore are perfect for private swimming. Best nightlife in Croatia. Slightly overrun in July/August.',
      },
      {
        name: 'Korcula',
        bestFor: 'Wine, quiet, authentic, most romantic',
        description: 'A quieter, more authentic version of Dubrovnik in miniature. The Old Town sits on a small peninsula with turquoise sea on three sides. Excellent local Grk and Pošip white wines. Marco Polo allegedly born here. The most romantic island on the coast.',
      },
      {
        name: 'Split',
        bestFor: 'Mainland base, Diocletian\'s Palace, transport hub',
        description: 'A city built literally inside a Roman emperor\'s retirement palace — Diocletian\'s Palace walls contain restaurants, bars, and apartments today. Excellent ferry and catamaran connections to all islands. More local and authentic than Dubrovnik.',
      },
      {
        name: 'Brač',
        bestFor: 'Zlatni Rat beach, Blue Cave access',
        description: 'Closest island to Split — home to the famous Zlatni Rat beach (a horn of white pebbles extending into the sea that shifts direction with the wind). Quieter than Hvar with excellent boutique hotels inland.',
      },
    ],
    expertTips: [
      {
        tip: 'Avoid Dubrovnik in July–August',
        detail: 'Dubrovnik has the most UNESCO-protected Old Town in Europe and a population of 40,000. In peak summer it receives 10,000 cruise passengers per day in addition to hotel guests. The walls, alleys, and restaurants are genuinely unpleasant. May, June, and September are the only months when Dubrovnik is magical rather than miserable.',
      },
      {
        tip: 'Use the catamaran network as your itinerary',
        detail: 'Jadrolinija and Krilo Jet catamarans connect Split–Hvar–Korcula–Dubrovnik on a daily schedule. Buy tickets the day before (not on the day in summer). A 10-night honeymoon routing is: Dubrovnik (3n) → catamaran to Korcula (3n) → catamaran to Hvar (2n) → catamaran to Split (2n). Perfect.',
      },
      {
        tip: 'Eat late — the Croatian rhythm is Mediterranean',
        detail: 'Restaurants in Dubrovnik and Hvar are empty at 7pm and full at 9:30pm. Embrace this. The atmosphere at a stone konoba at 10pm with a carafe of Plavac Mali, grilled brancin, and nobody rushing you is the best restaurant experience in Europe.',
      },
      {
        tip: 'Book accommodation in Dubrovnik 6+ months ahead',
        detail: 'Dubrovnik has limited good hotel rooms within or adjacent to the Old Town. Villa Dubrovnik, Hotel Stari Grad, and the Pucić Palace book out by Christmas for the following summer. For May and June, book in February.',
      },
      {
        tip: 'Korcula is an underrated base',
        detail: 'Most couples default to Dubrovnik and Hvar. Korcula is quieter, more romantic, more authentic, has better wine, and the Lesic Dimitri Palace is one of Europe\'s finest boutique hotels. It\'s also a catamaran stop, making it easy to incorporate. Consider making it your main base.',
      },
    ],
    packing: [
      { item: 'Water shoes (reef shoes)', why: 'Most Croatian beaches are pebble or rocky — a pair of thin water shoes transforms comfort for swimming entries' },
      { item: 'Linen shirt/dress for evening', why: 'Dubrovnik and Hvar restaurants have an informal but stylish dress culture — smart casual is appropriate, beachwear is not' },
      { item: 'Small daypack for walking', why: 'The Old Towns of Dubrovnik and Korcula are car-free labyrinths — a light pack for sun cream, water, and camera is essential for wall walks' },
      { item: 'Reusable water bottle', why: 'Croatian tap water is excellent — refill throughout the day rather than buying plastic bottles, which are expensive at tourist prices' },
      { item: 'Light rain jacket', why: 'May and early June can bring sudden afternoon squalls — a packable rain layer fits in any bag and transforms a sudden storm from a problem to a cafe stop' },
    ],
    guide: {
      getting: 'Fly to Dubrovnik (DBV) or Split (SPU) — both well-served from northern Europe. Ryanair, EasyJet, British Airways, Lufthansa, and Croatia Airlines all operate routes from UK, Germany, Netherlands, France, and beyond. From DBV, taxis to the Old Town are 30 minutes ($25–$35). From SPU, Split city centre is 30 minutes by bus or 15 minutes by taxi. Internal transport: Jadrolinija car ferries and Krilo/Nona Ana passenger catamarans connect all major islands — fast, reliable, inexpensive.',
      where: 'Best 10-night itinerary: 3 nights Dubrovnik → catamaran 2.5h → 3 nights Korcula → catamaran 1.5h → 2 nights Hvar → catamaran 1h → 2 nights Split. Alternatively, base entirely in one location (Hvar is the most entertaining single-base choice). For maximum romance with minimum logistics: Lesic Dimitri Palace in Korcula for 7 nights with day trips.',
      when: 'May and June are the ideal honeymoon months — warm but not oppressive, manageable crowds, sea at 22°C+, all restaurants and ferries operating. September is equally excellent: summer warmth remains, children have returned to school, accommodation prices drop 20–30% from August peaks. Avoid July–August in Dubrovnik specifically.',
    },
    localFood: 'Black risotto (crni rižot) made with cuttlefish ink and fresh Adriatic seafood in Dubrovnik\'s Old Town, grilled fish (brancin/sea bass) with blitva (Swiss chard and potato), peka (slow-roasted lamb or octopus under a bell cover with embers), Plavac Mali red wine from Pelješac peninsula, and fresh oysters from the Ston bay — some of Europe\'s finest.',
    currency: 'Euro (EUR) since 2023',
    language: 'Croatian (English spoken widely in tourism)',
    timezone: 'UTC+1 (CET) / UTC+2 (CEST)',
  },

  portugal: {
    hero: '/images/hotels/sublime-comporta-portugal/hero.webp',
    tagline: 'Atlantic surf, cork forests, and world-class wine — Europe\'s most underrated honeymoon destination.',
    intro: 'Portugal punches far above its weight as a honeymoon destination. Lisbon has the most beautiful light of any European capital — the fado evenings, the tiles, the views from the miradouros. The Douro Valley is arguably the most scenic river wine region in Europe, with quintas producing port and red wine on impossibly steep terraced hillsides. Comporta is what the Algarve was in 1970 — rice paddies, cork oak forests, and long empty Atlantic beaches where wild horses sometimes walk at low tide. Madeira is subtropical year-round with dramatic volcanic scenery. Portugal offers four completely different honeymoon experiences within a 3-hour flight of most of Europe, at prices 30–40% below comparable Italian or French alternatives.',
    bestTime: 'May–Oct',
    flightFrom: '2–3h from northern Europe',
    topExperience: 'Beach & Wine Country',
    perfectFor: [
      'Wine lovers — the Douro Valley and Alentejo are producing some of Europe\'s most exciting wines',
      'Couples who want cultural depth plus great beaches without Italian or French prices',
      'Short-haul European honeymooners who want genuine Atlantic wildness not Mediterranean crowds',
      'Food lovers: bacalhau, pastel de nata, percebes, petiscos culture is extraordinary',
      'Surf-interested couples — the Atlantic southwest coast has year-round surf from Comporta to Sagres',
    ],
    skipIf: [
      'Warm Mediterranean sea temperatures are essential — Atlantic Portugal can be cool even in summer',
      'You want a fixed sun-beach resort experience — Portugal rewards exploration over staying put',
      'You\'re visiting July–August and expect Algarve resorts to be quiet — they\'re extremely busy',
      'Long days by the pool with no cultural programme appeals — Portugal rewards the curious',
    ],
    experiences: [
      {
        icon: '🍷',
        title: 'Douro Valley Wine Quinta Visit',
        description: 'Drive the N222 — voted the most scenic road in Portugal — stopping at two or three quintas for private tastings overlooking the terraced vineyard valley. Quinta do Crasto, Quinta do Vale Meão, and Graham\'s are outstanding. Stay overnight in a quinta guest house.',
        cost: '€30–€80 per person for tastings',
        tip: 'Book a private tasting (€50–100 for two) rather than a drop-in visit — the experience is incomparably more intimate and you taste older vintages that aren\'t available at the bar.',
      },
      {
        icon: '🐚',
        title: 'Percebes and Petiscos, Lisbon',
        description: 'Start at the Mercado da Ribeira for a petiscos crawl — tiny portions of sardine toast, presunto ham, cheeses, and bacalhau croquettes. End at a taberna for percebes (goose barnacles). The most distinctive thing you\'ll eat in Portugal and one of the most delicious.',
        cost: '€40–€80 per couple for a full petiscos evening',
        tip: 'Taberna da Rua das Flores and Tasca do Chico (which also has live fado) are the best tables for this experience. Book a week ahead — both are tiny.',
      },
      {
        icon: '🏖️',
        title: 'Comporta Beach on Horseback',
        description: 'The wild Atlantic beaches of Comporta are backed by cork forests and rice paddies. Several stables offer guided horse treks along the shoreline at dawn or sunset — a completely different kind of beach experience with nobody else in sight for kilometres.',
        cost: '€60–€100 per person',
        tip: 'Stay at Sublime Comporta hotel — their stables offer the finest guided beach rides and the hotel itself is set in a cork forest with extraordinary design.',
      },
      {
        icon: '🎶',
        title: 'Fado Evening in Alfama, Lisbon',
        description: 'A proper fado casa in Lisbon\'s Alfama neighbourhood — a fadista singing the melancholy Portuguese soul music in a whitewashed room with a 20-person audience, accompanied by Portuguese guitar and viola baixo. Genuinely moving. Not a tourist show.',
        cost: '€40–€80 per person including dinner',
        tip: 'Tasca do Chico (6 tables, book 2 weeks ahead), Clube de Fado, or A Baiuca are the authentic experiences. The restaurants in the main tourist zone around Restauradores are performative — avoid them.',
      },
      {
        icon: '⛵',
        title: 'Sailing the Douro to Porto',
        description: 'A half-day or full-day sailing trip from the Douro\'s upper valley downriver through the gorge to Porto, passing through locks and under the famous bridges. The water is calm, the landscape is dramatic, and arriving into Porto\'s riverfront by boat is a genuinely special entrance.',
        cost: '€80–€150 per person (group cruise) or €400 (private charter)',
        tip: 'Douro Azul and Barca Douro run excellent cruises. For honeymoon purposes, the private charter for two people is worth every euro — the intimacy of a personal skipper on a 4-hour river journey is incomparable.',
      },
    ],
    months: [
      { month: 'Jan', weather: 'Mild but rainy, green', emoji: '🌦', crowds: 'Very low', price: 'Very low', verdict: 'Only for Madeira escape' },
      { month: 'Feb', weather: 'Almond blossom in Algarve', emoji: '🌸', crowds: 'Low', price: 'Low', verdict: 'Beautiful if you avoid beach' },
      { month: 'Mar', weather: 'Warming, wildflowers, some rain', emoji: '🌱', crowds: 'Low', price: 'Low', verdict: 'Excellent for wine region touring' },
      { month: 'Apr', weather: 'Warm, green, excellent light', emoji: '🌤', crowds: 'Moderate', price: 'Mid', verdict: 'Superb for Lisbon and Douro' },
      { month: 'May', weather: 'Warm, dry, near-perfect', emoji: '☀️', crowds: 'Moderate', price: 'Mid', verdict: 'Best month overall' },
      { month: 'Jun', weather: 'Hot, santos populares festivals', emoji: '☀️', crowds: 'Moderate-high', price: 'Mid-high', verdict: 'Excellent — festas season' },
      { month: 'Jul', weather: 'Hot, dry, peak season', emoji: '☀️', crowds: 'Peak', price: 'High', verdict: 'Algarve very crowded, Comporta good' },
      { month: 'Aug', weather: 'Hottest, very busy', emoji: '☀️', crowds: 'Peak', price: 'Highest', verdict: 'Algarve heaving, go to Comporta' },
      { month: 'Sep', weather: 'Warm, grape harvest, excellent', emoji: '☀️', crowds: 'Moderate', price: 'Mid-high', verdict: 'Best for wine country — harvest season' },
      { month: 'Oct', weather: 'Warm, quieter, surf builds', emoji: '🌤', crowds: 'Low-mod', price: 'Mid', verdict: 'Superb for surfing and culture' },
      { month: 'Nov', weather: 'Mild, rainy, very quiet', emoji: '🌦', crowds: 'Low', price: 'Low', verdict: 'Good value, not beach weather' },
      { month: 'Dec', weather: 'Mild, rainy, Christmas in Porto', emoji: '🌨', crowds: 'Low-mod', price: 'Low-mid', verdict: 'Porto Christmas is magical' },
    ],
    budgetTiers: [
      {
        label: 'Boutique Portugal',
        range: '€150–€350/night',
        gets: 'Beautifully designed boutique hotel — wine estate quinta, Lisbon palacete, or Comporta design hotel. Outstanding quality-to-price ratio versus comparable European destinations.',
        example: 'Quinta da Mata, Bairro Alto Hotel (Lisbon), Herdade da Comporta',
      },
      {
        label: 'Premium',
        range: '€350–€700/night',
        gets: 'Award-winning hotel with pool, exceptional food, and memorable setting. Douro valley vistas or Comporta cork forest — genuinely world-class at mid-European prices.',
        example: 'Sublime Comporta, Six Senses Douro Valley, Bela Vista Hotel (Algarve)',
      },
      {
        label: 'Ultra-Luxury',
        range: '€700–€2,000+/night',
        gets: 'Private villa service, estate exclusivity, multi-Michelin dining. Portugal at this tier rivals anywhere in Europe at 30% lower prices than Tuscany or Provence.',
        example: 'Palácio Belmonte (Lisbon), Vila Vita Parc (Algarve), Monchique Resort',
      },
    ],
    areas: [
      {
        name: 'Lisbon',
        bestFor: 'Culture, fado, food, city romance',
        description: 'Europe\'s most beautiful small capital — seven hills of azulejo-tiled houses, viewpoint terraces, and the best food scene in southern Europe after San Sebastián. Combine a Lisbon stay with Sintra day trip and Cascais beach for a complete city-beach honeymoon.',
      },
      {
        name: 'Douro Valley',
        bestFor: 'Wine country, river landscapes, quintas',
        description: 'The most dramatic wine region in Europe — impossibly steep terraced vineyards above a serpentine river, with wine estates producing port and red wine of extraordinary quality. Base in the upper Douro for 3 nights and taste your way down the valley.',
      },
      {
        name: 'Comporta & Alentejo',
        bestFor: 'Wild Atlantic, cork forests, seclusion',
        description: 'Portugal\'s best-kept secret — a 30km stretch of wild Atlantic beach backed by cork oak forests, lagoons, and rice paddies. Comporta village has a handful of design hotels and excellent seafood restaurants. No high-rises, no nightclubs. Pure, beautiful calm.',
      },
      {
        name: 'Algarve',
        bestFor: 'Best beaches, sea cliffs, resort swimming',
        description: 'The southern coast has genuinely extraordinary sea-cliff beaches — Praia da Marinha, Benagil sea cave, and Sagres headland are among Europe\'s most dramatic coastal scenery. Avoid Albufeira in summer (very touristy); Lagos and Sagres remain beautiful and less developed.',
      },
      {
        name: 'Madeira',
        bestFor: 'Subtropical year-round escape, hiking, wine',
        description: 'A volcanic Atlantic island that\'s subtropical year-round — lush mountains, levada walking trails through laurel forests, Madeira wine, and dramatic ocean views. Best off-season honeymoon destination in Portugal — while the mainland is rainy, Madeira is mild and beautiful.',
      },
    ],
    expertTips: [
      {
        tip: 'September is the golden month for Portugal',
        detail: 'The grape harvest runs September–October — the Douro quintas are at their most beautiful, the light has softened from August\'s glare, crowds have thinned, accommodation prices drop 20–30%, and the sea is still warm from summer. September in Portugal is one of Europe\'s finest honeymoon conditions.',
      },
      {
        tip: 'Comporta over the Algarve for seclusion',
        detail: 'The Algarve is brilliant for clifftop scenery and swimming but busy in summer. Comporta, 90 minutes south of Lisbon, offers a completely different experience — wild Atlantic beach, cork forests, rice paddies, and a handful of design hotels with no resort development. Prices are comparable but the atmosphere is incomparable.',
      },
      {
        tip: 'The Douro valley requires a car',
        detail: 'There is no adequate public transport to explore the wine quintas of the upper Douro. Rent a car in Porto, drive the N222 along the river, and stay at a wine estate for 2–3 nights. The freedom to stop at family wineries that aren\'t on the tour circuit is the whole point.',
      },
      {
        tip: 'Book fado in advance',
        detail: 'The best fado casas in Lisbon have 15–25 seats and book out 2 weeks ahead in high season. Tasca do Chico is the most sought-after — book the moment you have flight dates confirmed. If it\'s full, Clube de Fado is the best alternative with a slightly larger room.',
      },
      {
        tip: 'Lisbon light is extraordinary at the golden hours',
        detail: 'The specific quality of light in Lisbon — the angle, the reflection off the Tagus river, the pale limestone buildings — is unlike anywhere else in Europe. Build your Lisbon days around the miradouros at sunrise and sunset rather than filling every hour with museums. The Miradouro de Santa Catarina at 7pm is unforgettable.',
      },
    ],
    packing: [
      { item: 'Light layers for Lisbon evenings', why: 'Atlantic sea breeze cools Lisbon evenings even in summer — a light jacket or cardigan is needed for terrace dinners above 9pm' },
      { item: 'Good walking shoes for cobblestones', why: 'Lisbon\'s steep cobblestone streets are beautiful and brutal on feet — proper walking shoes prevent ruined evenings' },
      { item: 'Wetsuit (if surfing)', why: 'Atlantic Portugal water reaches 20°C in August but is 16°C in May — even in summer, a 3mm shorty makes surfing at Comporta genuinely enjoyable' },
      { item: 'Wine notebook or app', why: 'You will taste extraordinary wines at Douro quintas that aren\'t exported — noting producer names means you can order them shipped home' },
      { item: 'Light waterproof layer', why: 'Atlantic weather is changeable even in May and October — a compact packable rain jacket is useful regardless of season' },
    ],
    guide: {
      getting: 'Fly to Lisbon Humberto Delgado (LIS) — direct from virtually every European city with TAP Air Portugal, Ryanair, EasyJet, British Airways, and Lufthansa (2–3h from northern Europe). For the Douro Valley, fly into Porto Francisco de Sá Carneiro (OPO) instead — 1h drive to the first quintas. For Madeira, fly direct to Funchal (FNC) from most European cities. Internal transport: excellent intercity trains (Lisbon–Porto: 3h, €25); rent a car for Douro and Comporta exploration.',
      where: 'Best 10-night Portugal honeymoon: 3 nights Lisbon (culture, fado, food) → 3 nights Douro Valley (wine, quinta stays) → 4 nights Comporta (beach, Atlantic wildness). Or: 5 nights Comporta + 5 nights Lisbon for a beach-city split. For pure beach: 7 nights Lagos/Algarve + 3 nights Lisbon. For year-round reliability: Madeira for 7 nights at any time.',
      when: 'May–June and September–October are the finest months — warm but not overwhelming, all attractions open, manageable crowds. September coincides with the grape harvest, making the Douro especially magnificent. July and August are excellent for beach weather but the Algarve is very busy — choose Comporta in peak season for a quieter experience. Madeira is beautiful year-round.',
    },
    localFood: 'Percebes (goose barnacles harvested from Atlantic rocks, eaten with lemon) at a Lisbon taberna, bacalhau à Brás (salted cod with eggs and potatoes — 365 different recipes), pastel de nata (custard tart) still warm from Pastéis de Belém, Douro Valley wine tasting with quinta views, and petiscos (Portuguese tapas) with a cold Sagres beer on a Comporta beach terrace.',
    currency: 'Euro (EUR)',
    language: 'Portuguese (English spoken widely)',
    timezone: 'UTC+0 (WET) / UTC+1 (WEST in summer)',
  },

  morocco: {
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
  },

  bali: {
    hero: '/images/hotels/bulgari-resort-bali/hero.webp',
    tagline: 'The Island of the Gods — where Hinduism, rice terraces, and beach luxury coexist perfectly.',
    intro: 'Bali is the most spiritually charged honeymoon destination in Asia — a Hindu island in the world\'s largest Muslim nation, where temple ceremonies, rice terrace walks, and volcanic sunrise hikes sit alongside world-class cliff-top resorts overlooking the Indian Ocean. Uluwatu\'s Bulgari and COMO Shambhala Estate near Ubud represent two completely different but equally extraordinary Bali experiences.',
    bestTime: 'May–Sep',
    flightFrom: '14–15h from Europe',
    topExperience: 'Culture, Wellness & Beach',
    perfectFor: [
      'Couples who want exotic culture, wellness, and beach in one destination',
      'Yoga and spa enthusiasts — Bali invented the boutique wellness retreat',
      'Those who want something genuinely different from a resort bubble',
      'Surfers — the Bukit Peninsula has world-class waves for all levels',
      'Couples who want exceptional value for luxury accommodation',
    ],
    skipIf: [
      'Visiting June–August Kuta/Seminyak — it\'s essentially Ibiza with temples',
      'You want guaranteed solitude — Bali is genuinely popular',
      'You\'re visiting November–March (wet season, flooding in low areas)',
      'Package-resort beach simplicity is all you want',
      'The 15-hour flight feels excessive for a 7-night trip',
    ],
    experiences: [
      { icon: '🌅', title: 'Mount Batur Sunrise Hike', description: 'A 2am wake-up, a 1.5h hike to the active volcano rim, and watching the sunrise over the caldera lake and distant Rinjani while drinking coffee brewed over volcanic steam. The most memorable dawn in Southeast Asia.', cost: '$40–$80 per person (guide)', tip: 'Book through your hotel rather than a random guide tout. The 2am departure from Ubud is brutal — make sure it\'s an accredited guide with proper equipment.' },
      { icon: '🌾', title: 'Sunrise Rice Terrace Walk (Tegallalang)', description: 'Walking the UNESCO-listed rice terraces of Tegallalang at 6am — before the drone photographers and the selfie sticks. The layered green geometry in morning mist is one of the great visual experiences in Asia.', cost: 'Free (nominal donation to farmers)', tip: 'The best alternative is Jatiluwih — further from Ubud but larger, less visited, and genuinely more beautiful in morning light.' },
      { icon: '🕌', title: 'Uluwatu Temple Kecak Fire Dance at Sunset', description: 'The ancient sea temple on a 70m cliff above the Indian Ocean, with the kecak fire dance performed as the sun sets into the sea below. The most atmospheric cultural experience in Bali.', cost: '$15–$20 per person', tip: 'Arrive 45 minutes early for good cliff-edge seats. The performance begins at sunset — actual timing varies with the season. Check with your hotel.' },
      { icon: '💆', title: 'COMO Shambhala Estate Wellness Retreat', description: '4 nights at the definitive Balinese wellness estate — Ayurvedic consultations, jungle-stream walks, meditation pavilions, and the most comprehensive spa program in Asia. Transformative.', cost: '$700–$1,500/night', tip: 'Book the Ayurvedic consultation before arrival — the treatment plan takes 2–3 days to fully develop and you want maximum time to absorb the program.' },
      { icon: '🏄', title: 'Surf Lesson at Padang Padang or Bingin (Bukit)', description: 'The Bukit Peninsula\'s reef breaks — Uluwatu, Bingin, Padang Padang — are some of the most consistent and beautiful surf spots in Asia. Beginner-appropriate breaks are at Seminyak and Medewi.', cost: '$40–$80 per person (2h lesson)', tip: 'Beginners: Seminyak beach surf schools. For intermediate-advanced: Bingin and Impossibles are extraordinary. Never surf Uluwatu without a local guide — the reef entry is dangerous.' },
    ],
    months: [
      { month: 'Jan', weather: 'Wet season, 28°C, daily rain', emoji: '🌧', crowds: 'Low', price: 'Low', verdict: 'Wet — green and lush but umbrella essential' },
      { month: 'Feb', weather: 'Wet, some flooding in low areas', emoji: '🌧', crowds: 'Low', price: 'Low', verdict: 'Avoid low-lying areas' },
      { month: 'Mar', weather: 'Wet season easing', emoji: '🌦', crowds: 'Low', price: 'Low-mid', verdict: 'Improving, good deals' },
      { month: 'Apr', weather: 'Transition — mix of sun and rain', emoji: '⛅', crowds: 'Moderate', price: 'Mid', verdict: 'Good shoulder month' },
      { month: 'May', weather: 'Dry season begins, 27°C', emoji: '☀️', crowds: 'Moderate', price: 'Mid', verdict: 'Excellent start to dry season' },
      { month: 'Jun', weather: 'Dry, warm, perfect', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'One of the best months' },
      { month: 'Jul', weather: 'Peak dry season, busy', emoji: '☀️', crowds: 'Peak', price: 'Very high', verdict: 'Most popular month — very crowded' },
      { month: 'Aug', weather: 'Dry, hot, peak crowds', emoji: '☀️', crowds: 'Peak', price: 'Highest', verdict: 'Beautiful but book months ahead' },
      { month: 'Sep', weather: 'Dry, thinning slightly', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Still excellent, slightly quieter' },
      { month: 'Oct', weather: 'End of dry, first rains possible', emoji: '🌤', crowds: 'Moderate', price: 'Mid', verdict: 'Good value, small rain risk' },
      { month: 'Nov', weather: 'Wet season beginning', emoji: '🌦', crowds: 'Low', price: 'Low-mid', verdict: 'Getting wetter — check resort area' },
      { month: 'Dec', weather: 'Wet, festive, busy beaches', emoji: '🌧', crowds: 'High', price: 'High', verdict: 'Christmas at Uluwatu is beautiful despite rain' },
    ],
    budgetTiers: [
      { label: 'Boutique Villa', range: '$200–$500/night', gets: 'Private pool villa with rice terrace or jungle view, daily breakfast, spa treatments on demand. Bali\'s extraordinary value proposition.', example: 'Komaneka at Bisma (Ubud), Alila Manggis' },
      { label: 'Luxury Clifftop', range: '$500–$1,200/night', gets: 'Clifftop infinity pool villa with Indian Ocean views, butler, world-class spa. The definitive Uluwatu experience.', example: 'Bulgari Resort Bali, Alila Villas Uluwatu' },
      { label: 'Wellness Ultra-Luxury', range: '$700–$1,500/night', gets: 'Full wellness programming, Ayurvedic consultations, jungle-stream spa, farm cuisine.', example: 'COMO Shambhala Estate, Six Senses Uluwatu' },
    ],
    areas: [
      { name: 'Uluwatu (Bukit Peninsula)', bestFor: 'Clifftop ocean views, surf, Bulgari resort', description: 'The limestone cliffs of the Bukit Peninsula drop 70m to the Indian Ocean. Bulgari Resort, Alila Villas, and Six Senses are here. The most dramatic resort setting in Bali.' },
      { name: 'Ubud (Central Bali)', bestFor: 'Culture, wellness, rice terraces, jungle', description: 'The cultural heart of Bali. Temple ceremonies, gamelan music, COMO Shambhala Estate, and the rice terraces of Tegallalang. The best base for couples who want culture alongside luxury.' },
      { name: 'Seminyak / Canggu', bestFor: 'Beach bars, sunset, surf, restaurants', description: 'The fashionable beach strip. Best restaurants and sunset bars in Bali. More social and urban than Uluwatu. Good for couples who want beach life mixed with a restaurant scene.' },
      { name: 'Nusa Penida / Lembongan', bestFor: 'Snorkeling, manta rays, day escape', description: 'The islands southeast of Bali have the best snorkeling (manta rays, mola-mola fish). Crystal Bay and Manta Point are two of the finest snorkel sites in Southeast Asia. A day trip or 2-night escape.' },
    ],
    expertTips: [
      { tip: 'Combine Ubud and Uluwatu — they\'re only 90 minutes apart', detail: 'The perfect Bali honeymoon: 3 nights Ubud (culture, wellness, rice terraces) + 4 nights Uluwatu (clifftop ocean resort, sunset, surf). Two completely different Balis in one trip.' },
      { tip: 'Book a private driver for the whole trip', detail: 'A trusted private driver in Bali costs $50–$80/day and solves every logistical challenge. Ask your hotel for their recommended driver — the good ones book up fast in peak season.' },
      { tip: 'Temple ceremony etiquette is important', detail: 'If invited to a ceremony (or you find one): wear a sarong and sash (provided at temples), don\'t enter the inner sanctum unless invited, and don\'t point feet toward shrines. The Balinese appreciate respectful curiosity deeply.' },
      { tip: 'Nusa Penida manta rays are a non-negotiable day trip', detail: 'The manta rays at Manta Point off Nusa Penida are the largest (up to 4m) and most reliably present in Southeast Asia. A 45-minute fast boat from Sanur, 2 hours of snorkeling, return by 2pm.' },
      { tip: 'Dry season means east Bali too — go beyond Ubud', detail: 'The east Bali coast (Amed, Candidasa, Tulamben) is almost unknown to tourists, has the best diving in Bali (USAT Liberty wreck), and has extraordinary black sand beach views of Agung volcano.' },
    ],
    packing: [
      { item: 'Sarong/sulu wrap (×2)', why: 'Required at all temples and expected at village ceremonies. Many temples provide them but having your own is respectful.' },
      { item: 'Mosquito repellent (DEET)', why: 'Dengue risk is real in Bali, especially in wet season. Even in dry season, apply at dusk.' },
      { item: 'Reef-safe sunscreen', why: 'Nusa Penida marine park and Manta Point have reef conservation rules' },
      { item: 'Light rain jacket', why: 'Ubud gets afternoon downpours even in dry season — pack a packable shell' },
      { item: 'Underwater camera', why: 'Manta Point snorkeling and the Liberty wreck dive are extraordinary photography opportunities' },
      { item: 'Cash (Indonesian Rupiah)', why: 'Local warungs, rice terrace entry, and small villages are cash-only. ATMs in Seminyak and Ubud are plentiful.' },
    ],
    guide: {
      getting: 'Fly to Ngurah Rai International Airport (DPS). Direct flights from London (14h via Singapore — Singapore Airlines, Cathay Pacific via HK). No direct Europe–Bali flights except occasional charter from Amsterdam. From Australia: 6h direct. From Singapore: 2.5h. Domestic transport: hire a private driver from the airport ($15–$25 to Seminyak, $25–$35 to Ubud, $30–$40 to Uluwatu).',
      where: 'Uluwatu/Bukit (clifftop ocean resort area, best views). Ubud (cultural and wellness centre). Seminyak/Canggu (beach bars, surf, restaurants). Nusa Penida/Lembongan (snorkeling day trips). A classic 10-night honeymoon: Ubud 3 nights → Uluwatu 5 nights → Nusa Penida day trip → final night in Seminyak before departure.',
      when: 'May–September is the dry season and the correct time to visit. July–August is peak (crowded, more expensive). June and September are the sweet spots: dry, warm, fewer tourists. Avoid November–March unless you embrace the lush green and don\'t mind daily afternoon rain.',
    },
    localFood: 'Nasi goreng (fried rice — Bali\'s national breakfast), babi guling (Balinese roast suckling pig — the finest version is at Ibu Oka in Ubud), satay lilit (Balinese minced fish satay), black rice pudding with coconut cream for breakfast, and fresh coconut water everywhere. The best single meal in Bali is at Locavore in Ubud — contemporary Balinese with impeccable seasonal ingredients. Warning: Ubud health food culture is also extraordinary — the smoothie bowls and raw food at Sayuri or Clear are genuinely worth exploring.',
    currency: 'Indonesian Rupiah (IDR). USD accepted at resorts. Bring crisp, new USD bills — damaged notes are sometimes refused.',
    language: 'Balinese and Indonesian (Bahasa Indonesia). English widely spoken in tourist areas.',
    timezone: 'GMT+8 (Central Indonesia Time)',
  },

  mozambique: {
    hero: '/images/hotels/andbeyond-benguerra-island-mozambique/hero.webp',
    tagline: 'Africa\'s most pristine marine wilderness on a remote Indian Ocean archipelago.',
    intro: 'Mozambique is the Indian Ocean\'s best-kept secret — a country whose Bazaruto Archipelago contains some of the most pristine coral reef systems left on earth, where dugongs still graze in the seagrass and whale sharks cruise the channels. The entire archipelago feels like the Indian Ocean before mass tourism arrived. andBeyond Benguerra Island is one of the finest properties in Africa.',
    bestTime: 'May–Nov',
    flightFrom: '11–13h from Europe (via Johannesburg)',
    topExperience: 'Marine Wildlife & Remote Luxury',
    perfectFor: [
      'Couples who want the East African safari + Indian Ocean beach combination (Tanzania/Kenya + Mozambique)',
      'Marine wildlife enthusiasts — dugongs, whale sharks, and humpback whales',
      'Those who want an Indian Ocean island without the crowd of the Maldives or Seychelles',
      'Couples willing to travel for genuinely remote wilderness',
      'Divers — the Bazaruto reef systems are among the least-dived in the Indian Ocean',
    ],
    skipIf: [
      'Multiple connections via Johannesburg are a dealbreaker',
      'Infrastructure reliability is essential — Mozambique is developing and power cuts happen',
      'You want a luxury hotel strip with variety of restaurants and nightlife',
      'The wet season (Dec–Mar) is your only travel window',
      'Budget is very tight — the island resorts are expensive and all-inclusive necessary',
    ],
    experiences: [
      { icon: '🐠', title: 'Dive the Bazaruto Archipelago Reefs', description: 'The Bazaruto National Park\'s reef systems are among the least disturbed coral environments in the western Indian Ocean. Untouched soft coral gardens, giant potato grouper, and manta rays at Two Mile Reef.', cost: '$80–$150 per person (2-tank dive)', tip: 'The diving is best between June and November (clearest visibility). Two Mile Reef and the southern Benguerra reefs are the finest sites. andBeyond has their own PADI dive centre on the island.' },
      { icon: '🦈', title: 'Whale Shark Snorkel (Jun–Nov)', description: 'The channels between Bazaruto islands are feeding grounds for whale sharks from June through November. Snorkeling alongside the world\'s largest fish in warm, clear Indian Ocean water.', cost: 'Included at andBeyond Benguerra', tip: 'The whale sharks are most reliably present August–October. andBeyond\'s marine biologist knows the feeding patterns better than anyone. Depart at dawn for the highest encounter rate.' },
      { icon: '🐋', title: 'Humpback Whale Watching (Jul–Oct)', description: 'Humpback whales migrate past Mozambique\'s coast July–October. The Bazaruto channel sees daily sightings from boats — and occasionally from the island beach itself.', cost: 'Included in resort activities at andBeyond', tip: 'The whale activity is most intense August–September. Request a dedicated whale watching boat excursion rather than encountering them incidentally on other activities.' },
      { icon: '🦭', title: 'Dugong Search (Early Morning Dhow)', description: 'One of the last viable wild dugong populations in the western Indian Ocean grazes in Bazaruto\'s seagrass beds. A dawn dhow excursion with the resident marine biologist is a rare privilege.', cost: 'Included at andBeyond Benguerra', tip: 'Dugong sightings are not guaranteed — they are shy. The marine biologist knows the grazing areas best. June–August has the highest probability of encounters.' },
      { icon: '🏖️', title: 'Private Sandbank Champagne Picnic', description: 'A private motorboat drops you on a shifting white sandbank in the middle of the Indian Ocean with a champagne picnic, snorkel gear, and nobody else for 10km in any direction.', cost: 'Included at andBeyond Benguerra', tip: 'The best sandbanks are 30–45 minutes by boat from Benguerra. Request the most remote option — the furthest sandbanks have the clearest water and are completely deserted.' },
    ],
    months: [
      { month: 'Jan', weather: 'Wet season, heavy rain, hot', emoji: '🌧', crowds: 'Very low', price: 'Low', verdict: 'Avoid — wet season' },
      { month: 'Feb', weather: 'Wet, occasional cyclone risk', emoji: '🌧', crowds: 'Very low', price: 'Lowest', verdict: 'Do not book' },
      { month: 'Mar', weather: 'Wet season easing', emoji: '🌦', crowds: 'Low', price: 'Low', verdict: 'Still wet — wait' },
      { month: 'Apr', weather: 'Transition, improving', emoji: '🌤', crowds: 'Low', price: 'Low-mid', verdict: 'Getting better, shoulder' },
      { month: 'May', weather: 'Dry season begins, 26°C', emoji: '☀️', crowds: 'Low', price: 'Mid', verdict: 'Dry season starts — good value' },
      { month: 'Jun', weather: 'Dry, warm, humpbacks arriving', emoji: '☀️', crowds: 'Moderate', price: 'Mid', verdict: 'Whale sharks begin' },
      { month: 'Jul', weather: 'Dry, whale sharks active', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Humpbacks and whale sharks peak' },
      { month: 'Aug', weather: 'Peak conditions across all wildlife', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Best month — all species active' },
      { month: 'Sep', weather: 'Dry, excellent marine conditions', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Whale shark density at maximum' },
      { month: 'Oct', weather: 'Dry, humpbacks departing', emoji: '☀️', crowds: 'Moderate', price: 'Mid-high', verdict: 'Still excellent, slightly quieter' },
      { month: 'Nov', weather: 'Transition, first rains possible', emoji: '🌤', crowds: 'Low', price: 'Mid', verdict: 'Last good month before wet season' },
      { month: 'Dec', weather: 'Wet season returns', emoji: '🌦', crowds: 'Low', price: 'Low-mid', verdict: 'Wet season beginning' },
    ],
    budgetTiers: [
      { label: 'Boutique Island', range: '$400–$800/night', gets: 'Smaller beachfront lodge on a Bazaruto island, reef access, boat tours. Less butler but the marine environment is identical.', example: 'Bazaruto Lodge, Azura Benguerra' },
      { label: 'Premium All-Inclusive', range: '$800–$1,500/night (AI)', gets: 'Full AI with marine activities, whale shark excursions, diving, and excellent Indian Ocean cuisine.', example: 'andBeyond Benguerra Island' },
      { label: 'Exclusive Use', range: '$5,000–$8,000+/night', gets: 'Entire island resort exclusively — all chalets, all staff, private marine concession. The most private experience in the Indian Ocean.', example: 'andBeyond Benguerra exclusive use' },
    ],
    areas: [
      { name: 'Benguerra Island', bestFor: 'Finest resort, whale sharks, dugongs', description: 'The second-largest island in the Bazaruto Archipelago. andBeyond\'s camp and Azura both sit here. The best overall wildlife portfolio in the archipelago.' },
      { name: 'Bazaruto Island', bestFor: 'Largest island, most varied terrain, best diving', description: 'The northern anchor of the archipelago. Bazaruto Lodge is here. The island has freshwater lakes (pink flamingos), extensive dune systems, and the most biodiverse reef in the park.' },
      { name: 'Magaruque Island', bestFor: 'Most secluded, smallest crowd', description: 'The smallest inhabited island in the archipelago. Anantara Bazaruto has a property here. The most remote of the accessible islands with excellent snorkeling from shore.' },
      { name: 'Vilankulo (Mainland)', bestFor: 'Departure point, local culture', description: 'The mainland town from which all Bazaruto boats and light aircraft depart. One night here before or after the island gives context to the local fishing culture.' },
    ],
    expertTips: [
      { tip: 'Combine with a Zimbabwe or South Africa safari for the perfect Africa honeymoon', detail: 'Mozambique works perfectly as the beach component of an Africa trip: 4 nights Victoria Falls or Kruger + 5 nights Bazaruto. The contrast is extraordinary. All connections run via Johannesburg.' },
      { tip: 'August–September is the absolute peak for marine wildlife', detail: 'Whale sharks, humpback whales, manta rays, and dolphins are all simultaneously active August–September. Plan your trip around this window if wildlife is the priority.' },
      { tip: 'The marine biologist at andBeyond transforms the experience', detail: 'andBeyond employs a resident marine biologist on Benguerra who knows every feeding ground, shark pattern, and coral recovery story. Book a private marine biology briefing on day one.' },
      { tip: 'Power and connectivity are limited — embrace it', detail: 'Mozambique is remote. andBeyond Benguerra has solar power but outages happen. WiFi is intermittent. This is not a bug — it\'s the feature. Disconnect completely for the duration.' },
      { tip: 'The all-inclusive rate is worth it — there is nowhere else to eat or shop', detail: 'Unlike the Maldives, the Bazaruto islands have no other restaurants or shops. The all-inclusive rate eliminates anxiety and the andBeyond kitchen is excellent. Calculate it into your budget from the start.' },
    ],
    packing: [
      { item: 'Reef-safe sunscreen', why: 'Bazaruto National Park has strict reef protection rules — bring approved sunscreen from home' },
      { item: 'Underwater camera (wide angle)', why: 'Whale shark encounters and manta ray dives require wide-angle lens for the size of the animals' },
      { item: 'Anti-malaria medication', why: 'Mozambique has malaria risk — see your doctor about prophylaxis 2 weeks before departure' },
      { item: 'Dry bag', why: 'Boat transfers between islands and to sandbanks involve significant spray' },
      { item: 'Power bank', why: 'Solar power on the islands means limited charging points. Bring your own backup.' },
      { item: 'Modest clothing (for Vilankulo town)', why: 'Mozambique is predominantly Muslim in Bazaruto — cover up when in town' },
    ],
    guide: {
      getting: 'Fly to Johannesburg (JNB) and connect to Vilankulo (VNX) on Mozambique Airlines or LAM (1.5h). From Vilankulo: andBeyond Benguerra is 20 minutes by speedboat or 15 minutes by light aircraft. Total journey time from London: approximately 14–16h including connections. andBeyond arranges all Vilankulo–island logistics.',
      where: 'Benguerra Island (best all-round wildlife portfolio, andBeyond). Bazaruto Island (largest, best diving, freshwater lakes). Magaruque (most secluded). Vilanculo mainland (arrival base only). All islands are within 30–45 minutes of each other by boat.',
      when: 'May–November is the dry season. August–October is the absolute peak for marine wildlife (whale sharks, humpbacks, dugongs, manta rays simultaneously present). June–July is excellent for those who want lower prices within the dry season. Avoid December–April (wet season).',
    },
    localFood: 'Piri piri prawns (the finest in Africa — Mozambique piri piri is the original, before Nando\'s took it global), grilled crayfish from the channel, matapa (cassava leaves with peanut sauce), and fresh yellow-fin tuna. andBeyond\'s kitchen uses daily reef catches and the closest organic produce from the mainland. The sundowner peri-peri prawns on the beach at Benguerra is the essential Mozambique meal.',
    currency: 'Mozambican Metical (MZN). USD and South African Rand widely accepted at island resorts.',
    language: 'Portuguese (official). English at resort level. Local dialects vary by region.',
    timezone: 'GMT+2 (Central Africa Time)',
  },

  reunion: {
    hero: '/images/hotels/lux-saint-gilles-reunion/hero.webp',
    tagline: 'A French department in the Indian Ocean — volcanoes, cirques, and Creole cuisine.',
    intro: 'Réunion is the most geologically dramatic island in the Indian Ocean — a French department 700km east of Mauritius where an active shield volcano (Piton de la Fournaise) erupts several times a year, three ancient calderas called cirques are among the most spectacular hiking landscapes in the world, and the Creole culture produces a cuisine that rivals anything in the French provinces. This is the honeymoon destination for couples who want volcanic drama rather than reef and beach.',
    bestTime: 'Apr–Nov',
    flightFrom: '11h from Paris (direct)',
    topExperience: 'Volcano Trekking & French Creole Culture',
    perfectFor: [
      'Couples who want volcanic hiking and adventure alongside Indian Ocean warmth',
      'French-speaking couples (it is literally France)',
      'Those who want dramatic mountain landscapes combined with coral reef beaches',
      'Foodie couples — Réunion\'s Creole cuisine is extraordinary and entirely French-influenced',
      'Honeymooners adding to a Mauritius trip (the two islands are 1.5h apart by air)',
    ],
    skipIf: [
      'You want a flat, calm reef lagoon as the primary experience',
      'The Indian Ocean beach resort concept is the main draw',
      'You don\'t speak French and linguistic self-sufficiency matters to you',
      'December–March (cyclone season and heavy rain on the windward coast)',
      'A volcanic landscape and cirque hiking sounds exhausting rather than exhilarating',
    ],
    experiences: [
      { icon: '🌋', title: 'Eruption Hike at Piton de la Fournaise', description: 'Walking across a hardened lava field to the active caldera of one of the world\'s most active volcanoes — and watching lava flow from a safe distance if an eruption is active. One of the most primal experiences in nature.', cost: '$60–$120 per person (guided)', tip: 'Check the OVPF (Observatoire Volcanologique du Piton de la Fournaise) website for current eruption status. When active, a guided night walk to see lava flow is transcendent. When dormant, the caldera hike is still extraordinary.' },
      { icon: '🏔️', title: 'Trek the Cirque de Cilaos (3 Days)', description: 'The most dramatic cirque (ancient caldera) in Réunion — a 1,200m deep bowl enclosed by vertical walls, accessible only by mountain road or on foot. The GR R1 trail around the cirque is among the finest multi-day walks in the Indian Ocean.', cost: '$50–$80/night (mountain gîte accommodation)', tip: 'The 3-day GR R1 circuit is the standard itinerary. Guided by Réunion Randonnées for the best interpretation and safety on vertiginous paths.' },
      { icon: '🪂', title: 'Paragliding from Piton Maïdo', description: 'Launching from the 2,200m Maïdo cliff (one of the highest cliffs in the world above a populated area) and gliding 20 minutes down to the coastal plain. The view over the west coast is extraordinary.', cost: '$120–$180 per person (tandem flight)', tip: 'Morning flights (9–11am) before the valley thermals build. The panorama at launch — 2,200m drop directly to the Indian Ocean — is one of the finest views from any paraglide launch in the world.' },
      { icon: '🍛', title: 'Rougail Sausages & Creole Feast (Local Restaurant)', description: 'Rougail (tomato and chilli sauce with pork or sausage), carry (Réunion curry — different from any other curry on earth), and the extraordinary fresh seafood of the Indian Ocean coast.', cost: '€30–€60 per couple for a full Creole lunch', tip: 'The best Creole restaurants are in Saint-Pierre and Cilaos. Avoid the tourist seafront restaurants — find the working-class local restaurants where the Réunionnais eat.' },
      { icon: '🤿', title: 'Night Dive with Sleeping Sharks (Saint-Gilles)', description: 'Réunion\'s coral reef at Saint-Gilles is one of the most biodiverse in the Indian Ocean. Night dives reveal nurse sharks resting on the reef floor and reef octopus hunting in the torchlight.', cost: '$60–$100 per person', tip: 'Use Réunion Sub Centre (Saint-Gilles) — the most experienced and safety-conscious operator on the island. Night dives require Advanced Open Water certification.' },
    ],
    months: [
      { month: 'Jan', weather: 'Cyclone season, heavy rain east coast', emoji: '🌀', crowds: 'Low', price: 'Low', verdict: 'Avoid east coast; Cilaos cut off possible' },
      { month: 'Feb', weather: 'Peak cyclone risk', emoji: '🌀', crowds: 'Low', price: 'Low', verdict: 'Do not visit — cyclone season' },
      { month: 'Mar', weather: 'Cyclone risk easing, still wet', emoji: '🌦', crowds: 'Low', price: 'Low', verdict: 'Improving slowly' },
      { month: 'Apr', weather: 'Transition, improving fast', emoji: '🌤', crowds: 'Moderate', price: 'Mid', verdict: 'Good shoulder value' },
      { month: 'May', weather: 'Dry season begins, 25°C', emoji: '☀️', crowds: 'Moderate', price: 'Mid', verdict: 'Excellent start of season' },
      { month: 'Jun', weather: 'Dry, cooler evenings, 23°C', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'French school holidays begin' },
      { month: 'Jul', weather: 'Dry, 22°C, volcano active often', emoji: '☀️', crowds: 'Peak', price: 'Very high', verdict: 'School holiday peak — book ahead' },
      { month: 'Aug', weather: 'Dry, excellent for hiking', emoji: '☀️', crowds: 'Peak', price: 'Very high', verdict: 'Best hiking conditions' },
      { month: 'Sep', weather: 'Dry, thinning, excellent', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Excellent, less busy' },
      { month: 'Oct', weather: 'Dry, warm, one of the best months', emoji: '☀️', crowds: 'Moderate', price: 'Mid', verdict: 'Hidden best month' },
      { month: 'Nov', weather: 'Transition, first showers possible', emoji: '🌤', crowds: 'Low', price: 'Low-mid', verdict: 'Good value, slight rain risk' },
      { month: 'Dec', weather: 'Wet season beginning, Christmas busy', emoji: '🌦', crowds: 'High', price: 'High', verdict: 'Christmas festive but rain builds' },
    ],
    budgetTiers: [
      { label: 'Boutique Guesthouse', range: '€120–€300/night', gets: 'Local gîte or boutique hotel with Creole cuisine, coastal views, and authentic hospitality. The real Réunion experience.', example: 'Le Relais des Sables, Villa Belle Creolle' },
      { label: 'Luxury Resort', range: '€300–$700/night', gets: 'Full-service resort on the west coast lagoon, spa, multiple restaurants, water sports.', example: 'Lux Saint Gilles, Le Récif Hotel' },
      { label: 'Volcanic Cirque Stay', range: '€200–€500/night', gets: 'Cirque de Cilaos mountain lodge or boutique hotel with spectacular caldera views and hiking access.', example: 'Le Vieux Cep, Hotel des Neiges (Cilaos)' },
    ],
    areas: [
      { name: 'Saint-Gilles / West Coast', bestFor: 'Beach, lagoon, diving, resort base', description: 'The leeward (dry) coast with the island\'s only protected lagoon. The tourist and resort infrastructure is here. Lux Saint Gilles is the finest hotel. Best beach swimming and diving from this base.' },
      { name: 'Cilaos Cirque', bestFor: 'Hiking, thermal baths, dramatic scenery', description: 'A 1,200m bowl surrounded by 2,000m+ cliffs. Thermal springs (the only ones in the Indian Ocean), the island\'s best wine (produced at altitude), and the finest multi-day hiking in the Indian Ocean.' },
      { name: 'Piton de la Fournaise (SE)', bestFor: 'Active volcano, lava fields, eruption viewing', description: 'The active volcano of Plaine des Cafres. The most visited natural site in the Indian Ocean. An active eruption (several per year) makes night lava hiking possible. Extraordinary even when dormant.' },
      { name: 'Salazie Cirque (North)', bestFor: 'Waterfalls, most dramatic scenery, gîtes', description: 'The lushest and greenest cirque. Bridal Veil waterfall (Voile de la Mariée) is visible from the main road. Hell-Bourg is one of the most beautiful heritage villages in the Indian Ocean.' },
    ],
    expertTips: [
      { tip: 'Réunion is ideal as part of a Mauritius + Réunion combination trip', detail: 'Air Austral flies between Mauritius and Réunion in 1.5 hours. 5 nights Mauritius (beach) + 5 nights Réunion (volcano, hiking) is a genuinely extraordinary pairing.' },
      { tip: 'Check the OVPF volcano website before booking your eruption hike', detail: 'Piton de la Fournaise erupts 2–4 times per year. If an eruption is in progress, the night lava hike is the most extraordinary thing you can do in the Indian Ocean. If dormant, the caldera hike is still world-class.' },
      { tip: 'Rent a car — public transport in Réunion is limited', detail: 'Réunion has a good road network but buses are infrequent between tourist sites. A hire car from Réunion Location at Roland Garros Airport is the correct approach. Drive the Route Forestière for the volcano.' },
      { tip: 'The cirques require 2 nights minimum', detail: 'Cilaos is a 1.5h drive (with 400 hairpin bends) from the coast. Check in for 2 nights to do the GR R1 day walk and recover. Going for a day trip is exhausting and inadequate.' },
      { tip: 'The Bourbon vanilla from Réunion is the world\'s finest', detail: 'Réunion (the former Bourbon Island) is the origin of the Bourbon vanilla variety. Buying it directly from a vanilla cooperative in the northeast is one of the great culinary souvenirs of the island.' },
    ],
    packing: [
      { item: 'Proper hiking boots', why: 'The cirque trails are rocky, muddy, and steep — trail runners are marginal; proper boots are necessary' },
      { item: 'Waterproof jacket', why: 'Even in dry season, the cirques get afternoon cloud and rain. A quality waterproof is essential.' },
      { item: 'Layers for altitude', why: 'Piton de la Fournaise summit at 2,632m is genuinely cold. The Maïdo lookout at 2,200m is cold with wind chill. Pack merino.' },
      { item: 'Reef-safe sunscreen', why: 'Saint-Gilles marine park has strict coral protection rules' },
      { item: 'Cash (Euro)', why: 'It is France — card payments are the norm but cash needed in mountain gîtes and local markets' },
      { item: 'French phrasebook', why: 'While French is universal, Réunionnais Creole is different from metropolitan French. Basic French courtesy is deeply appreciated.' },
    ],
    guide: {
      getting: 'Fly to Roland Garros Airport (RUN) near Saint-Denis. Direct from Paris (Air Austral, Air France — 11h). Connections from London via Paris (12–13h total). From Mauritius: Air Austral operates 1.5h shuttle service. Rent a car at the airport — essential for all island exploration. The island is 220km in circumference and driveable in a day.',
      where: 'West coast (Saint-Gilles, Saint-Leu) for lagoon and resort base. Cilaos cirque for mountain and thermal hiking. Piton de la Fournaise (southeast) for the volcano. Salazie cirque (north) for waterfalls and lush green landscape. A 10-night itinerary: Saint-Gilles 3 nights → Cilaos 3 nights → volcano area 2 nights → Salazie 2 nights.',
      when: 'April–November is the dry season. May and October are the sweet spots: excellent weather, lower French school holiday crowds, and lower prices. July–August is peak (French school holidays — book 4 months ahead). December–March is cyclone season with genuine risk.',
    },
    localFood: 'Carry (Réunion\'s unique curry — different from Indian, Malagasy or South Asian curry, with local spices and often served with rougail sausages and rice), samoussas (triangular fried pastry stuffed with vegetables or meat from the local Indian-Réunionnais tradition), and the extraordinary fresh seafood. The local rum agricole (made from fresh sugar cane, not molasses) is the finest in the Indian Ocean. Rhum arrangé (rum infused with local fruit and vanilla) is the island\'s social drink.',
    currency: 'Euro (EUR) — it is a French department',
    language: 'French (official). Réunionnais Creole widely spoken.',
    timezone: 'GMT+4 (Réunion Time — no daylight saving)',
  },

  'st-barts': {
    hero: '/images/hotels/cheval-blanc-isle-de-france-st-barths/hero.webp',
    tagline: 'The Caribbean\'s most fashionable island — Chanel in the morning, sunset rosé in the evening.',
    intro: 'Saint-Barthélemy is the Caribbean\'s most glamorous island — a French collectivity of 21km² where celebrity yachts anchor in Gustavia harbour, every beach has its designer beach club, and the food culture rivals any Michelin-starred city. This is where the world\'s most successful people take their honeymoons. Cheval Blanc Isle de France — the finest hotel in the Caribbean — sits on the island\'s most beautiful bay.',
    bestTime: 'Dec–Apr',
    flightFrom: '9h from Paris, 4h from New York (via St Martin)',
    topExperience: 'Ultra-Luxury Beach & Gastronomy',
    perfectFor: [
      'Couples who want the most glamorous and fashionable Caribbean experience',
      'Foodies — the restaurant density and quality here rivals Paris for a tiny island',
      'Those who want Caribbean luxury without the tourist volume of bigger islands',
      'Couples who want celebrity-standard privacy and service',
      'Anyone for whom European style and Caribbean sun is the ultimate combination',
    ],
    skipIf: [
      'Budget under $800/night — there is nothing here under that',
      'You want a quiet, local-culture-focused destination',
      'The idea of sharing beaches with superyachts and celebrity is more stressful than fun',
      'You\'re visiting June–November (hurricane season)',
      'You want diverse outdoor activities beyond beach and water — St Barts is tiny and focused',
    ],
    experiences: [
      { icon: '⛵', title: 'Day Charter to Colombier Beach', description: 'Hire a private catamaran or motorboat to Colombier — St Barts\'s most pristine and most secluded beach, accessible only by boat or a 25-minute hike. Anchor in the bay, snorkel the coral, and drink cold rosé.', cost: '$600–$1,200 for private day charter', tip: 'Depart by 9am — Colombier beach is shaded by the headland until late morning. By 2pm the private boats have gone and you often have the bay to yourselves.' },
      { icon: '🛥️', title: 'Sunset Cocktail on the Gustavia Harbour Wall', description: 'The harbour wall of Gustavia at sunset — with the largest yachts in the world docked at arm\'s length and the village lights reflecting in the water — is the most cinematic cocktail moment in the Caribbean.', cost: 'One cocktail each (€20–€30)', tip: 'Bar de l\'Oubli is the institution on Gustavia square. Arrive at 5:30pm for a harbour-facing table before the evening crowd. The light on the harbour at 6pm is extraordinary.' },
      { icon: '🤿', title: 'Snorkel Pain de Sucre (Gustavia Bay)', description: 'The waters around the Pain de Sucre rock offshore from Gustavia have some of the best snorkeling in St Barts — turtles, stingrays, and abundant reef fish in 3–8m of clear water.', cost: '$30 kayak rental; free by swimming from Plage du Gouverneur', tip: 'Best in the morning before the wind picks up. The south coast beaches (Gouverneur, Saline, Grand Fond) have better snorkeling than the north coast.' },
      { icon: '🍽️', title: 'Dinner at Le Gaiac (Le Toiny)', description: 'The most romantic dinner table in St Barts — a clifftop terrace at Le Toiny hotel with a panoramic view of the Atlantic and a menu that draws from Gascon and Basque culinary tradition.', cost: '€120–€200 per person', tip: 'Reserve 3 weeks in advance for the outdoor clifftop terrace — not the indoor dining room. Le Gaiac serves the finest food on the island. Order the local catch with beurre blanc.' },
      { icon: '🌅', title: 'Shell Beach Sunrise Walk', description: 'Shell Beach (Anse de Grand Galet) in Gustavia — a unique beach of millions of white shells instead of sand — at dawn before anyone else arrives. Walking the shell shore as the sun rises over the harbour.', cost: 'Free', tip: 'Walk around the harbour from Gustavia town (10 minutes). Dawn is the only time you\'ll have Shell Beach to yourself. The shell texture under barefoot is extraordinary — nothing like it in the Caribbean.' },
    ],
    months: [
      { month: 'Jan', weather: 'Perfect: 27°C, dry, trade winds', emoji: '☀️', crowds: 'Peak', price: 'Very high', verdict: 'Peak luxury season — January is "the" month' },
      { month: 'Feb', weather: 'Excellent, slightly less busy post-February break', emoji: '☀️', crowds: 'Peak', price: 'Very high', verdict: 'Still extraordinary' },
      { month: 'Mar', weather: 'Excellent, thinning slightly', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Great value within season' },
      { month: 'Apr', weather: 'Warm, dry, trade winds easing', emoji: '☀️', crowds: 'Moderate', price: 'Mid-high', verdict: 'Sweet spot value opens' },
      { month: 'May', weather: 'Transition, warm, uncrowded', emoji: '🌤', crowds: 'Low', price: 'Mid', verdict: 'Best value, slight end-of-season feel' },
      { month: 'Jun', weather: 'Hurricane season begins', emoji: '⚠️', crowds: 'Very low', price: 'Low', verdict: 'Some resorts close — avoid' },
      { month: 'Jul', weather: 'Hurricane risk present', emoji: '⚠️', crowds: 'Very low', price: 'Low', verdict: 'Many properties close' },
      { month: 'Aug', weather: 'Peak hurricane risk', emoji: '🌀', crowds: 'Very low', price: 'Lowest', verdict: 'Do not book' },
      { month: 'Sep', weather: 'Hurricane risk at maximum', emoji: '🌀', crowds: 'Very low', price: 'Lowest', verdict: 'Season is closed' },
      { month: 'Oct', weather: 'Risk easing, island reopening', emoji: '🌤', crowds: 'Low', price: 'Low', verdict: 'Some resorts reopen for pre-season' },
      { month: 'Nov', weather: 'Pre-season, most things open', emoji: '🌤', crowds: 'Low-mod', price: 'Mid', verdict: 'Good pre-season value' },
      { month: 'Dec', weather: 'Season opens, festive, beautiful', emoji: '☀️', crowds: 'Peak', price: 'Very high', verdict: 'Christmas in St Barts is extraordinary' },
    ],
    budgetTiers: [
      { label: 'Luxury', range: '$800–$1,500/night', gets: 'Boutique hotel or private villa with sea view, pool, excellent location. The minimum acceptable level for a St Barts honeymoon.', example: 'Le Barthélemy Hotel & Spa, Hotel Le Village St Barth' },
      { label: 'Ultra-Luxury', range: '$1,500–$3,500/night', gets: 'Full butler villa or finest hotel, private beach access, exceptional spa, in-villa dining available.', example: 'Eden Rock St Barths, Le Toiny' },
      { label: 'Cheval Blanc Iconic', range: '$2,500–$6,000+/night', gets: 'The Caribbean\'s finest hotel — 40 rooms and villas on Flamands Bay, private beach, Guerlain spa, three restaurants. The gold standard.', example: 'Cheval Blanc Isle de France' },
    ],
    areas: [
      { name: 'Flamands Beach (Northwest)', bestFor: 'Cheval Blanc, quietest beach, sunset', description: 'The longest and widest beach on the island. Cheval Blanc Isle de France sits at one end. The sand is the finest on St Barts. Fewer people than the east coast beaches.' },
      { name: 'Saint Jean Beach', bestFor: 'Airport views, water sports, lively', description: 'The island\'s most active beach — the famous tiny airport runway lands 20m from the sand. Lively, social, excellent for couples who want a buzz alongside the beach. Eden Rock is here.' },
      { name: 'Gustavia (Capital)', bestFor: 'Yacht harbour, shopping, restaurants, nightlife', description: 'The most beautiful small harbour in the Caribbean. Swedish and French colonial architecture, the world\'s finest beach boutiques, and the best restaurant density in the Caribbean.' },
      { name: 'Grand Cul-de-Sac (East)', bestFor: 'Kitesurfing, calm water, family vibe', description: 'A shallow turquoise bay protected by a reef — the calmest water on the island. Best for paddleboarding and kitesurfing. The Guanahani Hotel is here.' },
    ],
    expertTips: [
      { tip: 'Fly via St Martin (SXM) — the only way to reach St Barts', detail: 'St Barts has a tiny airstrip (SBH) accepting only small aircraft (max 9 seats). Fly to Sint Maarten Princess Juliana (SXM), then a 10-minute Winair ATR flight. Allow 3h+ for the connection — schedules are tight. Alternatively, take the fast ferry (1h from Oyster Pond, Philipsburg) or a private helicopter.' },
      { tip: 'Reserve Cheval Blanc 6–9 months ahead for December and January', detail: 'The finest rooms at Cheval Blanc Isle de France sell out to returning guests and preferred agents in April for the following season. Email the hotel directly and say "honeymoon." They respond to directness.' },
      { tip: 'Rent a Mini Moke or Smart car — they\'re the island\'s vehicle', detail: 'The traditional St Barts rental is a Mini Moke (open-sided Mini) or Smart car. The island is 8km across — you can drive the entire perimeter in 45 minutes. A Moke with the roof open along the coast road is the quintessential experience.' },
      { tip: 'Colombier beach requires the boat or the hike — do it', detail: 'The 25-minute clifftop walk to Colombier from the Petite Anse car park is one of the finest short walks in the Caribbean. The reward — a beach with no road access, crystal water, and almost no vendors — is extraordinary.' },
      { tip: 'Shell Beach at sunset is the best free thing on the island', detail: 'While Gustavia is filling with arriving yachties, Shell Beach (2 minutes walk around the harbour) has the same harbour views and is free. Bring wine from a superette. It\'s better than any bar.' },
    ],
    packing: [
      { item: 'Smart resort wear for restaurants', why: 'St Barts restaurants expect elevated casual — not formal, but linen shirts and sundresses rather than beach shorts' },
      { item: 'Reef-safe sunscreen', why: 'French collectivity with strict reef protection rules around the marine reserve' },
      { item: 'Underwater camera', why: 'Pain de Sucre snorkeling and Colombier bay have excellent turtle and ray activity' },
      { item: 'Small cash (Euro)', why: 'St Barts uses the Euro. Local beach bars and market vendors prefer cash.' },
      { item: 'Travel insurance with hurricane cover', why: 'Non-negotiable for any booking outside the core Dec–April window' },
      { item: 'Motion sickness tablets', why: 'The Winair flight from St Martin is short but can be turbulent in trade winds. The ferry from St Martin is 1h in open water.' },
    ],
    guide: {
      getting: 'Fly to Sint Maarten Princess Juliana (SXM). From Europe: direct from Paris Orly via Air Caraïbes (8.5h) or Air France (via Paris or AMS, 9–10h total). From New York: American or Delta to SXM (3.5h direct). From SXM to St Barts: Winair (10 min, $100–$200 each way) or Voyager fast ferry (1h from Oyster Pond or Philipsburg). Allow 3h minimum connection at SXM.',
      where: 'Flamands (Cheval Blanc, widest beach, quietest). Saint Jean (Eden Rock, most social, airport views). Grand Cul-de-Sac (Guanahani, calm water, kitesurfing). Gustavia (harbour, restaurants, yachts). Gouverneur and Saline beaches (wilder, more authentic, best snorkeling). For 7 nights: base at Cheval Blanc Flamands and explore by rental car daily.',
      when: 'December–April is the dry season and the social season. January is "the month" — the world\'s finest yachts, the best restaurant reservations, and the most extraordinary atmosphere. December (Christmas week) and New Year\'s Eve are spectacular but require booking a year ahead. May is excellent value. June–November is hurricane season — many properties close.',
    },
    localFood: 'La langouste grillée (grilled Caribbean lobster, split and charcoal-grilled with herb butter) at any beach restaurant, accras de morue (Creole salt-cod fritters with ti-punch rum cocktail), fresh-caught mahi-mahi with beurre blanc, and the extraordinary charcuterie from the local traiteur (deli) in Gustavia. The dining culture combines French gastronomy with Creole spice — Le Gaiac, Orega, and La Guerite are the three finest restaurants. Do not leave without drinking a properly made ti-punch (white rum, lime, and cane sugar syrup) at 11am.',
    currency: 'Euro (EUR) — it is a French collectivity',
    language: 'French (official). English spoken widely in all tourist contexts.',
    timezone: 'GMT-4 (Atlantic Standard Time)',
  },


  santorini: {
    hero: '/images/hotels/canaves-oia-suites-greece/hero.webp',
    tagline: 'The most iconic caldera views on earth. The sunset that changed honeymoon travel forever.',
    intro: 'Santorini is the island that defined what a European honeymoon could look like — a collapsed volcanic caldera, whitewashed villages cascading down 300m cliffs, and the most universally recognised sunset on the planet. The hotels here are carved into the volcanic rock itself, their infinity pools suspended over a 350m drop into the Aegean. Nothing in European travel has the visual impact of the Santorini caldera at golden hour.',
    bestTime: 'Apr–Oct',
    flightFrom: '3–4h from Europe',
    topExperience: 'Caldera Views & Sunsets',
    perfectFor: [
      'Couples who want the most iconic European honeymoon image — the Santorini caldera is irreplaceable',
      'Architecture and design lovers — cave suite hotels here are among the most creative in the world',
      'Short-haul honeymoons from Europe — exceptional luxury within 4h of any European capital',
      'Wine lovers — Santorini\'s Assyrtiko is one of Europe\'s great white wines',
      'Those who want an intense, photogenic, concentrated experience rather than a wide-ranging trip',
    ],
    skipIf: [
      'Crowds seriously bother you in July and August — Oia is one of the most visited spots on earth in peak season',
      'You need beach space with sun beds and calm water — the caldera rim is for views, the beaches are black volcanic sand with cold water until June',
      'You want variety of activities beyond views, wine, and gastronomy',
      'Your budget is under €300/night — there is no genuinely romantic mid-range option on the caldera rim',
    ],
    experiences: [
      {
        icon: '🌅',
        title: 'Caldera Rim Sunset (Oia)',
        description: 'The most filmed sunset in Europe. Find your spot: the castle ruins for the classical view (crowded, free), Ammoudi Bay for the sea-level perspective, or a caldera-rim restaurant terrace (€100–€300/couple for dinner with the best seats). Whatever you choose, the moment the sun drops into the sea behind the white domes is genuinely transcendent.',
        cost: 'Free at public viewpoints / €150–€300 for a caldera restaurant dinner',
        tip: 'Book the caldera terrace restaurant 4–6 weeks ahead in high season. Sunset time changes through the season — check the exact time and arrive 45 minutes early for position.',
      },
      {
        icon: '🚢',
        title: 'Caldera Catamaran with Hot Springs',
        description: 'A full-day private catamaran circumnavigating the caldera: stop at Nea Kameni volcano to walk the crater, swim in the rust-brown volcanic hot springs (30°C), snorkel at the Red Beach, and sail back to Oia for sunset with champagne on deck.',
        cost: '€250–€600 per couple (private charter)',
        tip: 'Sunset catamaran (departing 3pm) means you arrive back in time to sail under the Oia cliffs as the sky turns gold. A morning charter gives the best snorkeling light. Decide which matters more.',
      },
      {
        icon: '🍷',
        title: 'Assyrtiko Wine Tasting at Domaine Sigalas',
        description: 'Santorini grows wine in basket-trained vines (kouloures) — low to the ground, circular, to catch moisture and resist the Meltemi wind. Domaine Sigalas (best Assyrtiko), Santo Wines (caldera view terrace), and Canava Roussos are the essential tastings. The dry Vinsanto is extraordinary.',
        cost: '€25–€60 per person',
        tip: 'Domaine Sigalas does not have caldera views but produces the finest wine on the island. Visit for taste; go to Santo Wines for the view-with-a-glass experience.',
      },
      {
        icon: '🏊',
        title: 'Swim at Perivolos Beach (Black Sand)',
        description: 'The most developed of Santorini\'s volcanic black sand beaches — 8km of dark sand, sunbeds, beach bars, and the clearest water on the southeast coast. The sea is warmer here than on the caldera side.',
        cost: '€15–€30 for sunbed hire',
        tip: 'Perissa and Perivolos are connected and less touristy than Red Beach. The volcanic sand holds heat until 9pm — evening swimming here with the cliffs above lit orange is extraordinary.',
      },
      {
        icon: '🚶',
        title: 'Fira to Oia Caldera Walk',
        description: 'A 10km walking path along the caldera rim from Fira to Oia — the finest walk on the island. You pass through the villages of Firostefani and Imerovigli, with unobstructed 300m-drop views of the caldera every step of the way. Allow 3–4 hours.',
        cost: 'Free',
        tip: 'Walk Fira to Oia (with the caldera on your left) so the views face you rather than being behind you. Start at 7am in summer — the heat by 10am is punishing. Arrange a taxi back from Oia or walk to the cable car at Fira.',
      },
    ],
    months: [
      { month: 'Jan', weather: 'Cool, 12–15°C, rain, most places closed', emoji: '🌧', crowds: 'None', price: 'Lowest', verdict: 'Off-season — limited options' },
      { month: 'Feb', weather: 'Cold, wildflowers, some sun', emoji: '⛅', crowds: 'Minimal', price: 'Very low', verdict: 'Not a honeymoon month' },
      { month: 'Mar', weather: 'Mild, 16°C, reopening begins', emoji: '🌤', crowds: 'Low', price: 'Low', verdict: 'Early adopter month' },
      { month: 'Apr', weather: 'Warm, 20°C, everything reopens', emoji: '☀️', crowds: 'Low-mod', price: 'Mid', verdict: 'Excellent shoulder season' },
      { month: 'May', weather: 'Perfect, 24°C, long warm days', emoji: '☀️', crowds: 'Moderate', price: 'Mid-high', verdict: 'Best shoulder month' },
      { month: 'Jun', weather: 'Hot, 28°C, peak building', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Great but getting busy' },
      { month: 'Jul', weather: '32°C, Meltemi winds, peak tourist', emoji: '☀️', crowds: 'Peak', price: 'Highest', verdict: 'Iconic but extremely crowded' },
      { month: 'Aug', weather: '34°C, busiest month on earth', emoji: '🌞', crowds: 'Extreme', price: 'Highest', verdict: 'Iconic — but overwhelming' },
      { month: 'Sep', weather: 'Ideal — 29°C, warm sea, thinning', emoji: '☀️', crowds: 'Moderate', price: 'High', verdict: 'Best month — same views, fewer people' },
      { month: 'Oct', weather: 'Warm, 24°C, very quiet', emoji: '🌤', crowds: 'Low', price: 'Mid', verdict: 'Hidden gem month' },
      { month: 'Nov', weather: 'Cooling, rain, many hotels closing', emoji: '⛅', crowds: 'Very low', price: 'Low', verdict: 'Many hotels close' },
      { month: 'Dec', weather: 'Cool, 14°C, quiet', emoji: '🌧', crowds: 'Very low', price: 'Very low', verdict: 'Off-season — limited' },
    ],
    budgetTiers: [
      {
        label: 'Boutique Caldera',
        range: '€300–€700/night',
        gets: 'Cave suite with partial or full caldera view, small terrace or plunge pool. The setting is spectacular; the service is hotel-level rather than resort-level.',
        example: 'Katikies Garden, Grace Santorini, Andronis Concept',
      },
      {
        label: 'Premium Caldera',
        range: '€700–€2,000/night',
        gets: 'Private infinity pool suite directly on the caldera rim, butler, exceptional breakfast included. The definitive Santorini honeymoon — the view from the pool is the defining European luxury hotel image.',
        example: 'Canaves Oia Suites, Mystique, Andronis Luxury Suites',
      },
      {
        label: 'Ultra-Luxury',
        range: '€2,000+/night',
        gets: 'The largest and most exclusive cave villas — some with private jacuzzi, indoor-outdoor living, and the widest caldera view on the island. Complete privacy, exceptional service.',
        example: 'Canaves Oia Epitome, Aenaon Villas, Vedema Resort',
      },
    ],
    areas: [
      {
        name: 'Oia',
        bestFor: 'The iconic sunset, most dramatic caldera, luxury cave hotels',
        description: 'The northern tip of the caldera rim — the most beautiful and most photographed village in Greece. Blue-domed churches, whitewashed pathways, and cave hotels terraced into the 300m cliff. Canaves Oia Suites and Mystique are here. The view from the castle ruins at sunset draws crowds from across the island.',
      },
      {
        name: 'Imerovigli',
        bestFor: 'Highest caldera point, most romantic and quiet',
        description: 'The village immediately south of Oia on the caldera rim — the highest point on the island (300m above sea level). Fewer tourists than Oia but identical caldera views. Aenaon Villas and Chromata Hotel are here. The Skaros Rock walk (ruined Byzantine castle) takes 20 minutes and has the most panoramic view.',
      },
      {
        name: 'Fira',
        bestFor: 'Best restaurants, nightlife, most central',
        description: 'The island\'s capital town. Densest concentration of caldera-view restaurants, bars, and shops. Louder than Oia but more restaurant variety. Good cable car access to the old port. The caldera view from Fira\'s main path is slightly less dramatic than Oia but the town is livelier.',
      },
      {
        name: 'Kamari & Perissa (East)',
        bestFor: 'Black sand beach, calm swimming, village life',
        description: 'The east coast black volcanic sand beach resort towns — calm, sheltered, good swimming, and significantly cheaper than the caldera rim. No caldera views, but more authentic local atmosphere. Connected to the cliff-top ancient site of Mesa Vouno (Thira ruins).',
      },
    ],
    expertTips: [
      { tip: 'Book the caldera cave suite 4–6 months ahead for May–September', detail: 'There are fewer than 200 genuinely caldera-view infinity-pool suites on the entire island. The best 50 units at Canaves, Mystique, and Aenaon sell out to repeat guests and specialist agents. Book directly with the hotel as early as possible and mention it is a honeymoon — upgrades happen.' },
      { tip: 'September beats August in every measurable way', detail: 'Same views, same sunset, same wine, same perfect weather — but 35% fewer tourists, 20–25% lower prices, cooler evenings for walking, and warm sea (24°C). If you have flexibility, September is objectively the best honeymoon month on Santorini.' },
      { tip: 'The Meltemi wind is a real factor in July–August', detail: 'The summer north wind (Meltemi) blows at 30–40 km/h across the caldera from July through August. The caldera side of Oia is sheltered but the eastern beaches are rough. Plan accordingly — if windy sailing or catamaran trips are important, go in June or September.' },
      { tip: 'Walk to Ammoudi Bay for the best lunch on the island', detail: 'The tiny fishing bay 214 steps below Oia has 5 tavernas serving grilled octopus, sea urchin salad, and fresh-caught fish on the pier. Lunch here with the boats bobbing and the caldera wall above is superior to any €300 caldera-view restaurant experience. Walk down, take the cable car back up.' },
      { tip: 'Hire an ATV or scooter — do not rely on taxis', detail: 'Taxi supply on Santorini is catastrophically insufficient for the tourist volume in summer. Wait times of 2–4h are common. An ATV rental ($30–$50/day) gives you total freedom and is genuinely fun on the island\'s coastal roads. Take the main caldera road at 7am before traffic.' },
    ],
    packing: [
      { item: 'Good walking sandals', why: 'The caldera steps, cobblestone pathways in Oia, and the Fira–Oia walk require proper footwear — flip-flops will destroy your feet' },
      { item: 'Light linen clothing', why: 'Smart casual is the dress code at caldera restaurants — linen keeps you cool at dinner in 30°C' },
      { item: 'High-SPF sunscreen and hat', why: 'White surfaces reflect UV from all directions — sun damage risk is higher than you expect on the caldera' },
      { item: 'Polarised sunglasses', why: 'The reflected Aegean light off white surfaces without polarisation is painful — invest in good optics' },
      { item: 'Small cash (€)', why: 'ATV rental, local tavernas, cable car, and boat taxis often prefer cash. ATMs in Fira and Oia have queues in peak season.' },
    ],
    guide: {
      getting: 'Fly direct to Santorini Thira Airport (JTR) — 3–4h from most European capitals. Direct flights from London Heathrow and Gatwick (British Airways, EasyJet), Paris CDG, Amsterdam, Frankfurt, Rome, and 20+ European cities. The airport is 10km from Oia — pre-book a taxi (€25–€35) or rent an ATV at the terminal. Alternatively, Athens (ATH) to Santorini by Aegean Air is 45 minutes (from €50 each way). High-speed ferry from Athens Piraeus to Santorini is 5–8h — the slowest but most scenic arrival.',
      where: 'Caldera rim is the only option for the definitive honeymoon experience. Oia (most dramatic, best sunset position): Canaves Oia Suites, Mystique, Andronis Luxury. Imerovigli (higher, quieter, same views): Aenaon Villas, Chromata. Fira (most restaurant choice, livelier): Santo Maris, Ikies. Beach (black sand, calm swimming): Kamari and Perissa — cheaper, less romantic, good if combining caldera and beach stays.',
      when: 'April to October is the season. May (warm, empty, excellent) and September (best weather, 35% fewer tourists, warm sea) are the two best months. June is excellent. July–August peak: beautiful but Oia reaches 15,000 visitors per day at sunset — plan your sunset strategy. Most caldera hotels close November–March.',
    },
    localFood: 'Santorini cuisine is defined by its volcanic soil — the island produces some of the most distinctive ingredients in Greece. Cherry tomatoes (pomodori) — grown in the volcanic earth, intensely sweet and small, served in salads and as paste. Fava — a yellow split-pea purée, the island\'s signature dish, made with legumes grown here for 3,500 years. White eggplant (melitzana aspri) — unique to Santorini, less bitter. Grilled octopus on any terrace taverna. Vinsanto — the sweet dessert wine made from sun-dried Assyrtiko and Aidani grapes, extraordinary. For restaurants: Kapari Wine Restaurant in Imerovigli for value with caldera views, Ammoudi fish tavernas for the best seafood, and Selene in Fira for the most serious Santorini cuisine.',
    currency: 'Euro (EUR)',
    language: 'Greek. English spoken at all tourist levels.',
    timezone: 'UTC+2 (Eastern European Time) / UTC+3 (EEST in summer, late March–late October)',
  },

  'japan': {
    hero: '/images/hotels/aman-kyoto-japan/hero.webp',
    tagline: 'Cherry blossoms, private onsen, and ryokan dinners — the world\'s most refined honeymoon culture.',
    intro: 'Japan rewards honeymooners with an extraordinary paradox: simultaneously the most ancient and most modern destination on earth. In Kyoto, paper-screened ryokan rooms overlook moss gardens unchanged for 400 years. In Tokyo, Michelin-starred restaurants occupy tower floors above neon streets. In Hakone, private onsen baths with direct views of Mount Fuji provide the single most romantic morning in Asia. No destination balances cultural depth, culinary excellence, natural beauty, and genuine luxury hospitality quite like Japan.',
    bestTime: 'Mar–Apr (cherry blossoms) & Nov (autumn foliage)',
    flightFrom: '12–14h from Europe',
    topExperience: 'Ryokan & Onsen Romance',
    perfectFor: [
      'Couples who want cultural depth alongside world-class luxury',
      'Food-obsessed travellers — Japan has more Michelin stars than any country on earth',
      'Cherry blossom romantics — the sakura experience is genuinely life-changing',
      'Those wanting a mix of ancient temples and hyper-modern city energy',
      'Honeymooners seeking ryokan hospitality — the most attentive service in the world',
    ],
    skipIf: [
      'You want a beach-and-pool relaxation holiday — Japan is active and stimulating',
      'Navigating a non-English country feels stressful — signage is challenging outside big cities',
      'Your budget is extremely tight — top ryokan charge $600–$2,000+ per night',
      'You need nightlife until 4am — Kyoto quiets down early',
    ],
    experiences: [
      {
        icon: '♨️',
        title: 'Private Onsen at Dawn',
        description: 'Reserve a private rotenburo (outdoor hot spring bath) at your ryokan for 6am. Steam rising from mineral water, pine trees framing the view, total silence. The most intimate 45 minutes in Japan.',
        cost: 'Often included at top ryokan; private slot $30–$80 extra',
        tip: 'Book the dawn slot at check-in — it fills by afternoon. The mineral water is richest in the morning.',
      },
      {
        icon: '🌸',
        title: 'Arashiyama Dawn Walk',
        description: 'Kyoto\'s bamboo grove and Togetsukyo bridge at 6am before tour groups arrive. In late March the Nakanoshima park fills with cherry blossoms reflected in the Katsura River.',
        cost: 'Free',
        tip: 'Walk from your ryokan if staying in Arashiyama. Take a rickshaw back — drivers know the best secondary paths.',
      },
      {
        icon: '🍱',
        title: 'Kaiseki Dinner in Your Tatami Room',
        description: 'A 12-course seasonal Japanese dinner served in your room by a dedicated attendant. Every dish is a miniature artwork timed to the season. The sake pairing transforms it into a 3-hour ceremony.',
        cost: 'Included in most top ryokan rates ($300–$600 value)',
        tip: 'Notify the ryokan of dietary requirements 48h ahead. Wagyu courses can usually be added for $80–$120.',
      },
      {
        icon: '🗻',
        title: 'Mount Fuji View from Hakone',
        description: 'From Hakone\'s onsen ridge on a clear morning, Fuji rises perfectly symmetrical above Lake Ashi. Pair with the Hakone Open Air Museum and a ryokan with a Fuji-facing private bath.',
        cost: 'Day trip from Tokyo $80–$200 including transport; Hakone ryokan from $400/night',
        tip: 'Fuji is clearest in winter and early spring. October–March gives best visibility. Summer brings heavy cloud cover.',
      },
      {
        icon: '🏮',
        title: 'Gion Evening Stroll',
        description: 'Kyoto\'s geisha district at dusk — wooden machiya townhouses, stone-paved Hanamikoji Street, paper lanterns. If you\'re lucky, you\'ll glimpse a geiko or maiko hurrying to an engagement.',
        cost: 'Free to walk; dinner at a Gion kaiseki restaurant $150–$400pp',
        tip: 'Visit on a weekday. Don\'t photograph geisha without permission. Stay north of Shijo Street for the most authentic atmosphere.',
      },
    ],
    months: [
      { month: 'Jan', weather: 'Cold, dry, crystal clear skies', emoji: '❄️', crowds: 'Low', price: 'Low', verdict: 'Best Fuji views, peaceful temples' },
      { month: 'Feb', weather: 'Coldest month, plum blossoms start', emoji: '❄️', crowds: 'Low', price: 'Low', verdict: 'Quiet and beautiful plum season' },
      { month: 'Mar', weather: 'Warming, cherry blossoms late month', emoji: '🌸', crowds: 'High', price: 'High', verdict: 'Magical if timing is right' },
      { month: 'Apr', weather: 'Cherry blossom peak, warm spring', emoji: '🌸', crowds: 'Peak', price: 'Highest', verdict: 'Most romantic — book a year ahead' },
      { month: 'May', weather: 'Warm, fresh green, Golden Week busy', emoji: '🌿', crowds: 'High', price: 'High', verdict: 'Beautiful but Golden Week is chaotic' },
      { month: 'Jun', weather: 'Rainy season (tsuyu) begins', emoji: '🌧', crowds: 'Low', price: 'Low-mid', verdict: 'Good deals, hydrangeas bloom' },
      { month: 'Jul', weather: 'Hot, humid, rainy season ends', emoji: '☀️', crowds: 'Moderate', price: 'Mid', verdict: 'Festivals and fireworks, but hot' },
      { month: 'Aug', weather: 'Very hot and humid', emoji: '🥵', crowds: 'High', price: 'High', verdict: 'Obon festivals beautiful, heat is real' },
      { month: 'Sep', weather: 'Cooling, some typhoon risk', emoji: '🌀', crowds: 'Low', price: 'Low-mid', verdict: 'Good value, minor typhoon risk' },
      { month: 'Oct', weather: 'Perfect autumn weather', emoji: '🍂', crowds: 'Moderate', price: 'Mid-high', verdict: 'Excellent shoulder season' },
      { month: 'Nov', weather: 'Autumn foliage peak, stunning', emoji: '🍁', crowds: 'Peak', price: 'Highest', verdict: 'As magical as cherry blossom season' },
      { month: 'Dec', weather: 'Cool to cold, festive, uncrowded', emoji: '⛩️', crowds: 'Low', price: 'Mid', verdict: 'Underrated — quiet and beautiful' },
    ],
    budgetTiers: [
      {
        label: 'Boutique & Business Hotels',
        range: '$200–$500/night',
        gets: 'Quality hotel with excellent location. Good service, no tatami ryokan experience. Perfect Tokyo base.',
        example: 'Hyatt Regency Kyoto, Park Hotel Tokyo, Trunk Hotel Shibuya',
      },
      {
        label: 'Premium Ryokan & City Luxury',
        range: '$500–$1,200/night',
        gets: 'Traditional ryokan with tatami rooms, kaiseki dinner, private onsen access. The authentic Japan honeymoon.',
        example: 'Hoshinoya Kyoto, Gora Kadan Hakone, Palace Hotel Tokyo',
      },
      {
        label: 'Ultra-Luxury Ryokan',
        range: '$1,200–$2,500+/night',
        gets: 'Private villa ryokan, in-room kaiseki, dedicated attendant, private outdoor onsen. The pinnacle of Japanese hospitality.',
        example: 'Aman Kyoto, Suiran Kyoto, Beniya Mukayu Kanazawa',
      },
    ],
    areas: [
      {
        name: 'Kyoto',
        bestFor: 'Temples, ryokan, geisha culture',
        description: 'The cultural heart of Japan. Stay in Arashiyama or Higashiyama for ryokan immersion. Three nights minimum; five is better. Avoid the station area entirely for romance.',
      },
      {
        name: 'Tokyo',
        bestFor: 'City glamour, food, Michelin dining',
        description: 'Two to three nights adds electric contrast to Kyoto\'s serenity. Shinjuku, Ginza, and Yanaka offer completely different energy. The food scene alone justifies the stop.',
      },
      {
        name: 'Hakone',
        bestFor: 'Mount Fuji views, onsen',
        description: 'One to two nights between Tokyo and Kyoto. The classic ryokan onsen experience with Japan\'s most iconic mountain as backdrop. Clear winter mornings are breathtaking.',
      },
      {
        name: 'Nara',
        bestFor: 'Ancient temples, deer park',
        description: 'A half-day from Kyoto. Deer roam freely among 8th-century temples. Todai-ji\'s Great Buddha is Japan\'s largest. Gentle, meditative pace — perfect mid-trip breathing space.',
      },
      {
        name: 'Osaka',
        bestFor: 'Street food, energy, Dotonbori',
        description: 'Japan\'s culinary capital. Add one night before flying out. Takoyaki, ramen, kushikatsu — the most indulgent final dinner in the country.',
      },
    ],
    expertTips: [
      {
        tip: 'Buy a 7-day JR Pass before leaving home',
        detail: 'The JR Pass covers all Shinkansen bullet train travel and is only available to tourists purchasing outside Japan. Tokyo–Kyoto return alone costs more than the pass.',
      },
      {
        tip: 'Book ryokan 3–6 months ahead for cherry blossom season',
        detail: 'Top properties in Kyoto and Hakone during late March–early April sell out within hours of availability opening. Book the day dates become available.',
      },
      {
        tip: 'Get a pocket WiFi at the airport',
        detail: 'Japan\'s public WiFi is unreliable. A pocket WiFi rental ($5–$8/day) gives unlimited data for maps, translations, and restaurant bookings. Essential for independent navigation.',
      },
      {
        tip: 'Carry cash — Japan is still largely cash-based',
        detail: 'Many ryokan, temples, and street vendors are cash-only. Withdraw ¥50,000–¥100,000 from 7-Eleven ATMs on arrival — they reliably accept foreign cards.',
      },
      {
        tip: 'The ryokan rhythm is everything — commit to it',
        detail: 'Check in by 3pm, bathe before dinner, wear the yukata all evening, sleep early, bathe again at dawn. The ryokan experience only works if you surrender to the pace.',
      },
    ],
    packing: [
      { item: 'Slip-on shoes', why: 'You remove shoes dozens of times daily at temples, ryokan, and restaurants. Laces become maddening by day two.' },
      { item: 'Lightweight layers', why: 'Japan\'s indoor heating and cooling is aggressive. Temples are unheated in winter. Summers are tropical. Layer constantly.' },
      { item: 'IC Card (Suica or Pasmo)', why: 'Load ¥5,000 on arrival at any station. Works on every metro, bus, and most convenience stores. Faster than buying individual tickets.' },
      { item: 'Compact umbrella', why: 'Japan has frequent brief rain showers year-round. As essential as your phone.' },
      { item: 'Small day backpack', why: 'Japan\'s streets and transport reward compact luggage. A small pack for daily sightseeing avoids left-luggage hassles.' },
    ],
    guide: {
      getting: 'Fly to Tokyo Narita (NRT) or Haneda (HND) — Haneda is closer to the city. From London: direct on JAL/ANA/BA (12h). From Europe: connections via Amsterdam, Paris, Frankfurt (13–14h total). From the US: direct from LAX, SFO, JFK (11–14h). Take the Narita Express ($30) or Limousine Bus to your hotel. Tokyo to Kyoto: Shinkansen Nozomi (2h15m, ~$130 each way) — book seats in advance.',
      where: 'Kyoto: stay in Arashiyama (most serene) or Higashiyama (most central to temples). Tokyo: Shinjuku or Ginza for luxury; Aoyama for boutique style. Hakone: anywhere on the Kowakidani ridge. Classic itinerary: 2 nights Tokyo → 1 night Hakone → 3 nights Kyoto → 1 night Osaka.',
      when: 'Cherry blossom (late March–early April) is magical but peak-priced. Autumn foliage (mid-November) is equally beautiful with slightly fewer crowds. May is underrated — fresh green, warm, past the main rush. December is peaceful and atmospheric. Avoid Golden Week (late April–early May) and Obon (mid-August) unless booking far in advance.',
    },
    localFood: 'Kaiseki (Japan\'s haute cuisine — a seasonal 10+ course ceremony), ramen in a tiny 8-seat basement shop, Kyoto obanzai (small seasonal dishes of pickles, tofu, and grilled fish), Osaka takoyaki and okonomiyaki, wagyu beef sukiyaki in a Ginza specialist, matcha everything in Uji near Kyoto. Japan has more Michelin-starred restaurants than France. Even a ¥700 convenience store onigiri is transcendent.',
    currency: 'Japanese Yen (JPY) — largely cash economy; cards accepted at hotels',
    language: 'Japanese. English spoken in tourist areas; Google Translate camera mode is essential elsewhere.',
    timezone: 'UTC+9 (Japan Standard Time)',
  },

  'indonesia': {
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
  },

  'philippines': {
    hero: '/images/hotels/amanpulo-pamalican-philippines/hero.webp',
    tagline: 'Over 7,000 islands, private atolls, and some of Asia\'s clearest water — the archipelago of dreams.',
    intro: 'The Philippines is Southeast Asia\'s best-kept luxury secret. While Thailand and Bali absorb the crowds, Palawan\'s UNESCO-listed limestone karst bays, Siargao\'s coconut-grove surf breaks, and Pamalican\'s Aman private atoll offer some of the most dramatic and pristine island scenery in the world. Amanpulo on Pamalican has the most extraordinary private beach casitas in Asia. Coron\'s crystal-clear lakes and WWII wreck diving are unique on earth. The Philippines rewards couples who look past the surface.',
    bestTime: 'Nov–May',
    flightFrom: '13–16h from Europe (via Singapore or Hong Kong)',
    topExperience: 'Private Island & Diving',
    perfectFor: [
      'Couples wanting true private island seclusion — Amanpulo has no day visitors',
      'Diving enthusiasts — Tubbataha Reef is one of the world\'s top three dive sites',
      'El Nido island-hopping addicts — the most spectacular coastal scenery in Asia',
      'Surfers who want a romantic destination with world-class waves (Siargao)',
      'Those seeking Asia\'s finest beach luxury at lower prices than the Maldives',
    ],
    skipIf: [
      'You\'re visiting June–October — typhoon season makes northern areas risky',
      'Easy travel logistics are a priority — inter-island connections require planning',
      'You want city culture alongside beach time — Manila is best skipped',
      'Budget is under $200/night — the Philippines\' best is accessible but not cheap',
    ],
    experiences: [
      {
        icon: '🏝️',
        title: 'El Nido Island Hopping Tour C',
        description: 'The Bacuit Archipelago\'s most spectacular day — Hidden Beach, Secret Lagoon, and the Big Lagoon by bangka through limestone towers rising from an emerald sea. Nothing else in Asia compares.',
        cost: '$25–$60 per person shared; private charter $200–$400',
        tip: 'Start at 6am with a private charter to arrive at Hidden Beach before the flotilla of tour boats. Tours A and C are the two unmissable routes.',
      },
      {
        icon: '🤿',
        title: 'Coron WWII Wreck Diving',
        description: 'Coron Bay holds a fleet of Japanese WWII warships at 15–35m, now encrusted with coral and inhabited by enormous grouper. Kogyo Maru and Okikawa Maru are among the world\'s best wreck dives.',
        cost: '$60–$100 per person for guided wreck dive',
        tip: 'Combine with Kayangan Lake — reputedly the cleanest lake in Asia, with striking limestone walls.',
      },
      {
        icon: '🌊',
        title: 'Cloud 9 Surf, Siargao',
        description: 'Asia\'s most famous reef break — a powerful hollow right-hander that hosts international championships. Beginners learn at Jacking Horse or Stimpy\'s, not Cloud 9.',
        cost: 'Lessons $20–$30; board rental $10–$15/day',
        tip: 'September is when Cloud 9 is at its biggest and best. May–June offers great atmosphere without the crowds.',
      },
      {
        icon: '🦈',
        title: 'Tubbataha Reef Liveaboard',
        description: 'One of UNESCO\'s most protected coral systems — accessible only March–June by liveaboard from Puerto Princesa. Sharks, manta rays, and pristine walls untouched by mass tourism.',
        cost: '$3,000–$5,000 per couple for 5-night liveaboard',
        tip: 'Book by November for the following year — permits are strictly limited.',
      },
      {
        icon: '🌅',
        title: 'Amanpulo Private Island Sunset',
        description: 'Pamalican Island\'s 40 beach and hillside casitas with butler service and private pools. Sunset on the beach with zero other guests visible is the purest private island fantasy in Asia.',
        cost: '$1,500–$3,000/night (all-inclusive equivalent)',
        tip: 'Book the Beach Casita over Hillside for direct sand access. The house reef snorkelling is among the best in the country.',
      },
    ],
    months: [
      { month: 'Jan', weather: 'Dry and warm, ideal conditions', emoji: '☀️', crowds: 'Moderate', price: 'Mid', verdict: 'Excellent — peak of best season' },
      { month: 'Feb', weather: 'Best month overall, dry and clear', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'The finest month in the Philippines' },
      { month: 'Mar', weather: 'Warm, dry, best diving visibility', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Excellent, Tubbataha season opens' },
      { month: 'Apr', weather: 'Very warm, Easter peak crowds', emoji: '🥵', crowds: 'Peak', price: 'Highest', verdict: 'Hot but beautiful — book ahead' },
      { month: 'May', weather: 'Transitioning, warm, pre-wet season', emoji: '🌤', crowds: 'Low-mod', price: 'Mid', verdict: 'Good value, Siargao perfect' },
      { month: 'Jun', weather: 'Wet season starts, typhoon risk', emoji: '🌧', crowds: 'Low', price: 'Low', verdict: 'Manageable south, risky north' },
      { month: 'Jul', weather: 'Typhoon season peak', emoji: '🌀', crowds: 'Low', price: 'Lowest', verdict: 'Avoid most destinations' },
      { month: 'Aug', weather: 'High typhoon risk', emoji: '🌀', crowds: 'Low', price: 'Lowest', verdict: 'Not recommended for honeymoon' },
      { month: 'Sep', weather: 'Typhoon risk, Siargao surf peaks', emoji: '🌊', crowds: 'Low', price: 'Low', verdict: 'Surfers only; rest avoid' },
      { month: 'Oct', weather: 'Tail end of typhoon season', emoji: '⛅', crowds: 'Low', price: 'Low-mid', verdict: 'Improving but still some risk' },
      { month: 'Nov', weather: 'Dry season starts, Palawan opens', emoji: '🌤', crowds: 'Moderate', price: 'Mid', verdict: 'Excellent start to season' },
      { month: 'Dec', weather: 'Dry, warm, festive atmosphere', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Festive season, beautiful weather' },
    ],
    budgetTiers: [
      {
        label: 'Boutique Islands',
        range: '$120–$350/night',
        gets: 'Well-designed cottage on a beautiful beach. All-inclusive meal options, snorkelling from shore. Great value for the setting.',
        example: 'El Nido Resorts Apulit Island, Bohol Beach Club, El Nido boutique guesthouses',
      },
      {
        label: 'Premium Private Islands',
        range: '$400–$900/night',
        gets: 'Private pool villa on a secluded island. Excellent diving and snorkelling included. Limited guest numbers.',
        example: 'Huma Island Resort, Club Paradise Dimakya, Badian Island Wellness Resort',
      },
      {
        label: 'Ultra-Luxury',
        range: '$1,500–$3,000+/night',
        gets: 'Aman-level private island. Butler, private beach, house reef. The most exclusive in Southeast Asia.',
        example: 'Amanpulo Pamalican, Dedon Island Siargao',
      },
    ],
    areas: [
      {
        name: 'Palawan / El Nido',
        bestFor: 'Limestone karst, UNESCO coastline',
        description: 'The most spectacular coastal scenery in Asia. El Nido is the base for island-hopping through the Bacuit Archipelago. Fly direct from Manila (1h15m). Stay minimum 3 nights.',
      },
      {
        name: 'Siargao',
        bestFor: 'Surf, coconut groves, laid-back romance',
        description: 'Asia\'s surf capital, increasingly known for its beautiful coconut palm landscape, blue lagoons, and relaxed luxury resorts. General Luna village has excellent restaurants. Fly via Cebu.',
      },
      {
        name: 'Bohol',
        bestFor: 'Chocolate Hills, wildlife, diving',
        description: 'Famous for the Chocolate Hills and the world\'s smallest primate (the tarsier). Panglao Island\'s beaches are excellent. Fly to Tagbilaran from Manila or Cebu.',
      },
      {
        name: 'Coron',
        bestFor: 'Wreck diving, crystal lakes, remoteness',
        description: 'The most underrated island in the Philippines. Kayangan Lake, Barracuda Lake diving, and the world\'s best WWII wreck diving. Fly from Manila (1h15m).',
      },
    ],
    expertTips: [
      {
        tip: 'Avoid Manila — fly directly to your island destination',
        detail: 'Manila has little to offer honeymooners. Book direct flights to El Nido via Busuanga, Siargao, or Coron. Cebu is a decent connection hub.',
      },
      {
        tip: 'Inter-island flights fill weeks ahead in peak season',
        detail: 'AirSwift, Cebu Pacific, and PAL Express flights to El Nido and Siargao are limited. Book all domestic flights before leaving home.',
      },
      {
        tip: 'El Nido lagoons at 5:30am are a different world',
        detail: 'The Secret Lagoon fills with boats by 10am. Charter a private bangka for an early start and you\'ll have the limestone bays entirely to yourselves.',
      },
      {
        tip: 'ATMs in El Nido run out of cash on weekends',
        detail: 'Carry enough cash from Puerto Princesa or Manila. Many island restaurants and boat charters are cash-only.',
      },
    ],
    packing: [
      { item: 'Reef-safe mineral sunscreen', why: 'El Nido and Tubbataha ban chemical sunscreen. Mineral-based is required and hard to find locally.' },
      { item: 'Waterproof dry bag', why: 'Bangka boats take on spray on every island-hopping day. Your camera and phone need full protection.' },
      { item: 'Light rash guard', why: 'Snorkelling for 4+ hours in tropical sun without a rash guard causes severe sunburn.' },
      { item: 'Electrolyte packets', why: 'Heat and activity cause rapid dehydration. A daily electrolyte drink prevents headaches that ruin beach afternoons.' },
      { item: 'Biodegradable insect repellent', why: 'Mosquitoes at dawn and dusk are significant, particularly in Siargao and inland Palawan.' },
    ],
    guide: {
      getting: 'Fly to Manila (MNL) or Cebu (CEB). From Europe: 13–16h via Singapore, Hong Kong, or Dubai. From Australia: direct from Sydney to Manila (8h). Domestic connections: Manila to El Nido via Busuanga on AirSwift (1h15m); Manila to Siargao via Cebu (90 min total); Manila to Coron direct (1h15m). Book all domestic legs immediately — they fill fastest.',
      where: 'El Nido is the flagship — 3–4 nights, consider a 2-night extension to Coron by speedboat or small plane. Siargao for couples who want surf culture with romance — 3–4 nights in General Luna. Amanpulo works as a standalone 4-night island experience. Classic: 4 nights El Nido → 2 nights Coron, or 4 nights El Nido → 3 nights Amanpulo.',
      when: 'November through May is the dry season. February–March is the absolute peak for weather, diving, and beach conditions. April is hot but beautiful. Avoid June–October for north Palawan and Siargao — typhoon risk is real. Coron is more sheltered and sometimes accessible year-round.',
    },
    localFood: 'Kinilaw (Filipino ceviche with fresh tuna in vinegar and calamansi — extraordinary), grilled seafood with garlic rice and sawsawan dipping sauce, lechon (Cebu-style whole roasted pig — the most celebrated dish in the country), sinigang (tamarind sour soup with prawns or pork), fresh buko (young coconut) drunk straight from the shell on the beach.',
    currency: 'Philippine Peso (PHP) — resorts and tours typically quote USD',
    language: 'Filipino and English — English is an official language, universally spoken',
    timezone: 'UTC+8 (Philippine Standard Time)',
  },

  'south-africa': {
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
  },

  'tanzania': {
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
  },

  'vietnam': {
    hero: '/images/hotels/amanoi-ninh-thuan-vietnam/hero.webp',
    tagline: 'Hoi An lanterns, Halong Bay limestone, and Asia\'s most underrated luxury coastline.',
    intro: 'Vietnam rewards honeymooners with extraordinary contrasts: the ancient silk-lantern streets of Hoi An\'s UNESCO old town, the otherworldly limestone towers of Halong Bay rising from jade-green water, the intimate bay-view dining of Nha Trang, and the remote Indian Ocean beaches of Con Dao where sea turtles nest undisturbed. Amanoi in Ninh Thuan province — built on a ridge above a national park bay — is one of Asia\'s most extraordinary resorts. Vietnam is the great value luxury destination of Southeast Asia, and its culinary culture is among the world\'s most nuanced.',
    bestTime: 'Feb–Apr (central & south)',
    flightFrom: '11–13h from Europe (via Singapore or Dubai)',
    topExperience: 'Culture & Coastal Luxury',
    perfectFor: [
      'Food-obsessed couples — Vietnamese cuisine is among the world\'s finest',
      'Those wanting cultural depth alongside beach time in a single trip',
      'Couples seeking outstanding luxury at significantly lower prices than Thailand',
      'History and architecture lovers — Hoi An\'s old town is genuinely magical',
      'Those interested in a long, culturally rich country with changing landscapes',
    ],
    skipIf: [
      'You want one simple beach-and-resort destination — Vietnam requires navigation',
      'The idea of managing domestic flights and overnight trains feels stressful',
      'You only have 7 nights — Vietnam rewards a minimum of 10 days',
      'You\'re visiting June–November in central Vietnam — typhoon risk is real',
    ],
    experiences: [
      {
        icon: '🏮',
        title: 'Hoi An Old Town at Dusk',
        description: 'As the sun sets, Hoi An\'s 15th-century trading port lights its thousands of silk lanterns. Gondola-style boat rides on the Thu Bon River, tailors stitching ao dai in open doorways, and the most photogenic street in Vietnam.',
        cost: 'Free to walk; boat ride VND 150,000 ($6); tailor suit from $60',
        tip: 'Visit on the full moon — the town turns off electric lights for the Lantern Festival and the atmosphere becomes medieval. Book a tailor visit on day one for pickup on your last day.',
      },
      {
        icon: '⛵',
        title: 'Halong Bay Overnight Cruise',
        description: 'A 2-night luxury junk sailing between 3,000 limestone karst islands. Kayak through hidden lagoons at dawn, swim in emerald caves, eat freshly-caught seafood as the cliffs glow at sunset. One of Asia\'s most romantic experiences.',
        cost: '$400–$1,200 per couple for 2-night cruise',
        tip: 'Upgrade to a premium junk (Pelican Cruises, Heritage Cruises, Indochine) — the experience gap between budget and luxury is vast on overnight boats. Avoid 1-night cruises — the journey time doesn\'t justify it.',
      },
      {
        icon: '🌊',
        title: 'Con Dao Island Escape',
        description: 'An archipelago 2 hours by plane from Ho Chi Minh City. Six Senses Con Dao is built on a hillside above the most beautiful bay in Vietnam. At night, sea turtles nest on the beach below your villa.',
        cost: 'Six Senses Con Dao from $800/night; speedboat turtle watch included',
        tip: 'June–September for sea turtle nesting season. The snorkelling around Bai Chuoi and Con Tre islands is excellent year-round.',
      },
      {
        icon: '🏊',
        title: 'Amanoi Sunrise Swim',
        description: 'Amanoi\'s infinity pool and private beach access overlooks Vinh Hy Bay — a protected national park bay with zero development. Swimming at dawn as the limestone hills emerge from mist is a meditative experience.',
        cost: 'Amanoi from $1,200/night',
        tip: 'Book a Pavilion Pool Villa — the private plunge pool cantilevered over the hillside with bay views is the most extraordinary room in Vietnam.',
      },
      {
        icon: '🍜',
        title: 'Vietnamese Street Food Tour',
        description: 'Hanoi\'s Old Quarter at 7am for pho bo (beef noodle soup) and banh mi, or Hoi An\'s market for white rose dumplings and cao lau noodles. Vietnamese street food has extraordinary regional specificity — each town has its dish.',
        cost: 'Self-guided from $5; guided tour $30–$60pp',
        tip: 'Do the Hoi An Market Cooking Class — buy ingredients at dawn, cook for 2 hours, eat everything by noon. One of the most enjoyable half-days in Southeast Asia.',
      },
    ],
    months: [
      { month: 'Jan', weather: 'Cool north, warm and dry south', emoji: '🌤', crowds: 'Low-mod', price: 'Low-mid', verdict: 'Excellent south, cool Hanoi' },
      { month: 'Feb', weather: 'Tet Festival, improving, dry central', emoji: '🧧', crowds: 'High', price: 'High', verdict: 'Tet magical but transport chaos' },
      { month: 'Mar', weather: 'Warm, dry, best weather nationwide', emoji: '☀️', crowds: 'Moderate', price: 'Mid', verdict: 'Excellent all-round month' },
      { month: 'Apr', weather: 'Warm, dry, ideal beach season', emoji: '☀️', crowds: 'Moderate', price: 'Mid', verdict: 'One of the best months' },
      { month: 'May', weather: 'Hot, pre-monsoon, central beach', emoji: '🌤', crowds: 'Low-mod', price: 'Low-mid', verdict: 'Good beach weather, manageable heat' },
      { month: 'Jun', weather: 'Rainy season south, hot north', emoji: '🌧', crowds: 'Low', price: 'Low', verdict: 'Avoid central; Con Dao still good' },
      { month: 'Jul', weather: 'Monsoon south, typhoon risk central', emoji: '🌀', crowds: 'Low', price: 'Low', verdict: 'Challenging for most areas' },
      { month: 'Aug', weather: 'Typhoon risk central, rainy', emoji: '🌀', crowds: 'Low', price: 'Low', verdict: 'Avoid Hoi An and Danang' },
      { month: 'Sep', weather: 'Typhoon risk remains central', emoji: '🌀', crowds: 'Low', price: 'Low', verdict: 'Still challenging for central coast' },
      { month: 'Oct', weather: 'Hoi An flood season, Halong improving', emoji: '🌦', crowds: 'Low', price: 'Low-mid', verdict: 'Halong Bay excellent, central risky' },
      { month: 'Nov', weather: 'Dry season starts, Hanoi cold', emoji: '⛅', crowds: 'Moderate', price: 'Mid', verdict: 'Good for south; Halong excellent' },
      { month: 'Dec', weather: 'Cool north, warm south, dry central', emoji: '🌤', crowds: 'High', price: 'High', verdict: 'Excellent season; festive crowds' },
    ],
    budgetTiers: [
      {
        label: 'Boutique & Lifestyle Hotels',
        range: '$100–$300/night',
        gets: 'Beautifully designed boutique hotel in Hoi An old town or beach resort. Good service, excellent food, great location. Remarkable value.',
        example: 'Anantara Hoi An, The Nam Hai (beach villas), Fusion Maia Danang',
      },
      {
        label: 'Premium',
        range: '$300–$800/night',
        gets: 'Private pool villa with beach or bay access. Excellent spa, restaurants, and curated excursions. World-class value for quality.',
        example: 'Four Seasons The Nam Hai, Victoria Hoi An Beach Resort, Six Senses Con Dao',
      },
      {
        label: 'Ultra-Luxury',
        range: '$800–$1,500+/night',
        gets: 'Aman-level. Private hillside pavilion over a protected bay. Complete seclusion, extraordinary design, national park access.',
        example: 'Amanoi Ninh Thuan, The Reverie Saigon (city), Banyan Tree Lang Co',
      },
    ],
    areas: [
      {
        name: 'Hoi An',
        bestFor: 'UNESCO old town, tailors, beaches',
        description: 'Vietnam\'s most romantic town. Stay 3 nights minimum — the old town at night, An Bang beach by day, and a cooking class in between. The tailoring district alone is worth a dedicated morning.',
      },
      {
        name: 'Da Nang',
        bestFor: 'City beach, modern luxury, base for Hoi An',
        description: 'Vietnam\'s fastest-growing city with a long sandy beach and increasingly excellent hotels. A good base for exploring both Hoi An (30 min) and the Marble Mountains.',
      },
      {
        name: 'Con Dao',
        bestFor: 'Remote island, sea turtles, untouched',
        description: 'Vietnam\'s most spectacular remote island archipelago. Six Senses is the only luxury hotel. Fly from Ho Chi Minh City in 50 minutes. Minimum 3 nights — worth 5.',
      },
      {
        name: 'Phu Quoc',
        bestFor: 'Developed island resort, sunsets, snorkelling',
        description: 'Vietnam\'s largest island with a growing luxury hotel scene. Long Beach for sunsets, Sao Beach for beauty. More accessible than Con Dao but significantly busier.',
      },
      {
        name: 'Ha Long Bay',
        bestFor: 'Limestone karst, overnight cruise',
        description: 'The defining Vietnamese landscape — 3,000 islands rising from jade water. Only meaningful as an overnight luxury cruise. Fly into Hanoi and transfer 3.5h, or take a seaplane.',
      },
    ],
    expertTips: [
      {
        tip: 'Vietnam\'s weather is regional — plan your route accordingly',
        detail: 'The north (Hanoi, Halong) and south (Ho Chi Minh, Phu Quoc) have opposite seasons. Central (Hoi An, Danang) is dry February–August. Plan your itinerary to follow the dry weather north or south.',
      },
      {
        tip: 'Get measured for bespoke clothing in Hoi An',
        detail: 'Hoi An\'s tailors can produce a suit, dress, or ao dai in 48 hours at extraordinary quality for $60–$300. Order on day one, first fitting day two, collect day three.',
      },
      {
        tip: 'Upgrade your Halong Bay cruise — it matters enormously',
        detail: 'A $200/night junk and an $800/night junk sail the same bay. The difference is in the food, the cabin, the service, and the number of other boats nearby. Choose carefully.',
      },
      {
        tip: 'VietJet and Bamboo Airlines for domestic flights',
        detail: 'Hanoi–Da Nang–Ho Chi Minh City flights are $30–$80 and run hourly. Overnight train from Hanoi to Hue (Livitrans sleeper) is a romantic alternative at $40–$80pp.',
      },
    ],
    packing: [
      { item: 'Lightweight linen clothing', why: 'Vietnam\'s humidity (especially south) requires breathable fabric. Linen dries fast and looks elegant at beach restaurants.' },
      { item: 'Reef sandals and walking shoes', why: 'You\'ll alternate between cobblestone old towns, beach boardwalks, and boat decks. Both types of footwear are daily needs.' },
      { item: 'Light rain jacket', why: 'Even in dry season, brief tropical showers can appear. A packable jacket is smaller than an umbrella and more useful on motorbike rides.' },
      { item: 'Scarf or light wrap', why: 'Required for temple visits and a polite cover-up in more traditional areas. Doubles as a beach sarong.' },
      { item: 'Vietnamese phrasebook or offline translation', why: 'Outside major tourist hubs, English is limited. Google Translate works well in cities; a phrasebook backup is valuable at street food stalls.' },
    ],
    guide: {
      getting: 'Fly to Hanoi (HAN) or Ho Chi Minh City / Saigon (SGN). From Europe: 11–13h via Singapore (Singapore Airlines, 13h direct), Dubai (Emirates, 12h), or Doha (Qatar, 11h). From Australia: Singapore Airlines via Singapore (8h from Sydney). Domestic flights between Hanoi, Danang (for Hoi An), and Ho Chi Minh City are frequent and cheap ($30–$80 on VietJet/Bamboo). From Danang to Hoi An: 30-minute taxi ($10).',
      where: 'Classic honeymoon route: Hanoi (2 nights) → Halong Bay cruise (2 nights) → fly to Danang → Hoi An (3 nights) → fly to Ho Chi Minh City (1 night) → Con Dao (3 nights). Or: skip Hanoi/Halong and spend more time in the central coast with Amanoi added. Adjust based on time available.',
      when: 'February–April is the best all-round window — dry in the centre and south, warming in the north. December–January is excellent in the south. Hoi An floods occasionally in October–November. Halong Bay is best March–April (spring) and October–November (autumn). Avoid central Vietnam June–September for typhoon risk.',
    },
    localFood: 'Pho bo (Hanoi\'s iconic beef noodle soup at a plastic-stool street stall at 7am), banh mi (the world\'s best sandwich — a French baguette filled with pâté, pickled vegetables, and chilli), cao lau (Hoi An\'s signature pork noodle dish made with water from a single ancient well), white rose dumplings (Hoi An only), bun cha (Hanoi grilled pork with vermicelli — what Obama and Anthony Bourdain ate), and a ca phe trung (Hanoi egg coffee) as afternoon dessert. Vietnamese cuisine has extraordinary regional variation — every town has a dish that nowhere else can replicate.',
    currency: 'Vietnamese Dong (VND) — hotels and tours often quote USD',
    language: 'Vietnamese. English spoken in all tourist areas.',
    timezone: 'UTC+7 (Indochina Time)',
  },

  'oman': {
    hero: '/images/hotels/six-senses-zighy-bay-oman/hero.webp',
    tagline: 'The Arabian Peninsula\'s best-kept secret — deserts, fjords, and 5000-year-old frankincense trails.',
    intro: 'Oman is the Middle East honeymoon destination that has quietly become the most compelling. While Dubai chases skyscrapers, Oman keeps its old soul: the rose-coloured wadis of Jabal Akhdar at 2000m, the fjord-like khors of Musandam where dolphins outnumber boats, the frankincense groves of Salalah that have perfumed the world since 3000 BC, and a beach coastline that rivals the Indian Ocean with none of the crowds. Add a roster of genuinely world-class resorts — Six Senses Zighy Bay, Alila Jabal Akhdar, The Chedi Muscat — and you have a destination that gives you desert, mountain, and sea in a single trip, without ever compromising on luxury.',
    bestTime: 'Oct–Apr',
    flightFrom: '6–7h from Europe',
    topExperience: 'Desert & Sea Romance',
    perfectFor: [
      'Couples who want the Middle East without the Dubai glitz — understated, dignified luxury',
      'Those dreaming of combining desert, mountain and sea in one honeymoon',
      'Adventure-minded honeymooners — wadi swims, dune drives, paraglider arrivals',
      'History lovers — 5000-year-old frankincense trails, Nizwa fort, Bahla UNESCO',
      'Photographers — Jabal Akhdar canyons and Wahiba Sands are otherworldly',
    ],
    skipIf: [
      'You need wild nightlife — Oman is proudly quiet and conservative',
      'You want Dubai-style spectacle and shopping at every turn',
      'You plan to travel May–September — interior temperatures exceed 45°C',
      'You want adults-only as the default — most Omani resorts are family-friendly',
    ],
    experiences: [
      {
        icon: '🪂',
        title: 'Paraglider Arrival at Six Senses Zighy Bay',
        description: 'The most theatrical hotel arrival on earth: tandem-paraglide from the 293m ridge above Musandam and land on the private beach at your pool villa. Three minutes of flight, a lifetime memory.',
        cost: '$300–$400 per person (hotel arranges)',
        tip: 'Book the dawn slot — winds are cleanest and you land in time for breakfast on your villa deck.',
      },
      {
        icon: '🌹',
        title: 'Rose Harvest on Jabal Akhdar',
        description: 'Every April, the terraced villages at 2000m bloom with Damask roses used to distill Omani rose water. Walk the terraces at dawn with a village guide; the scent at sunrise is genuinely unforgettable.',
        cost: 'Free walk; guided tour $60–$120',
        tip: 'Stay at Alila Jabal Akhdar or Anantara — they both organise private rose-harvest picnics at the canyon edge.',
      },
      {
        icon: '⛵',
        title: 'Dhow Cruise in Musandam',
        description: 'Oman\'s northern Musandam peninsula is the "Norway of Arabia" — sheer cliffs plunge into turquoise fjords (khors). Charter a traditional wooden dhow for the day: snorkel with dolphins, swim in hidden coves, lunch grilled hammour on deck.',
        cost: '$180–$350 per couple for a full-day private charter',
        tip: 'Depart Khasab harbour by 8am to catch the dolphin pods feeding in Khor Sham.',
      },
      {
        icon: '🏜️',
        title: 'Wahiba Sands Overnight',
        description: 'Orange dunes stretching to the horizon, a Bedouin-style desert camp under 5000 stars, camel rides at sunset, and dune-bashing in a 4WD at dawn. The archetypal Arabian desert experience — just three hours from Muscat.',
        cost: 'Camp from $300/night; add-on from city-based resorts $450–$700',
        tip: 'Sleep in a deluxe tent at Desert Nights Camp. Do not book the "budget" tents — they are close to the road and noisy.',
      },
      {
        icon: '🕌',
        title: 'Sultan Qaboos Grand Mosque, Muscat',
        description: 'One of the most beautiful religious buildings in the world. The main prayer hall holds a 21-tonne Persian carpet and a Swarovski chandelier over 14m wide. Open to non-Muslims Saturday–Thursday mornings.',
        cost: 'Free',
        tip: 'Arrive at 8am when the light through the stained glass is perfect. Dress code is strict — women need a headscarf and long sleeves.',
      },
    ],
    months: [
      { month: 'Jan', weather: 'Warm days, cool nights, perfect', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Peak season — book early' },
      { month: 'Feb', weather: 'Warm and dry, ideal all round', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Best month for interior + coast' },
      { month: 'Mar', weather: 'Warming up, still comfortable', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Excellent, whale-shark season starts' },
      { month: 'Apr', weather: 'Hot coast, perfect mountain temps', emoji: '🌹', crowds: 'Moderate', price: 'Mid', verdict: 'Rose harvest at Jabal Akhdar — magical' },
      { month: 'May', weather: 'Very hot on coast, mountain OK', emoji: '🥵', crowds: 'Low', price: 'Low', verdict: 'Skip interior; mountains only' },
      { month: 'Jun', weather: 'Extreme heat 45°C+ inland', emoji: '🥵', crowds: 'Low', price: 'Low', verdict: 'Avoid except Salalah' },
      { month: 'Jul', weather: 'Khareef monsoon in Salalah, green south', emoji: '🌧', crowds: 'Moderate', price: 'Mid', verdict: 'Salalah transforms — tropical oasis' },
      { month: 'Aug', weather: 'Khareef continues in Salalah', emoji: '🌧', crowds: 'High', price: 'High', verdict: 'Salalah peak — book 6 months ahead' },
      { month: 'Sep', weather: 'End of khareef, hot elsewhere', emoji: '🌦', crowds: 'Moderate', price: 'Mid', verdict: 'Last khareef; coast still hot' },
      { month: 'Oct', weather: 'Cooling, shoulder season starts', emoji: '☀️', crowds: 'Moderate', price: 'Mid', verdict: 'Excellent value, weather perfecting' },
      { month: 'Nov', weather: 'Warm dry days, cool nights', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Premium shoulder — ideal' },
      { month: 'Dec', weather: 'Perfect, short daylight hours', emoji: '☀️', crowds: 'Peak', price: 'Highest', verdict: 'Holiday premium but flawless weather' },
    ],
    budgetTiers: [
      { label: 'Mid-range City & Beach', range: '$250–$500/night', gets: 'Good 4-5★ hotel in Muscat or on Salalah beach. Comfortable, not design-led.', example: 'Crowne Plaza Muscat, Hilton Salalah, Kempinski Muscat' },
      { label: 'Premium Luxury', range: '$500–$1,200/night', gets: 'Landmark resort with spa, several restaurants, private beach or canyon view. The sweet spot.', example: 'The Chedi Muscat, Al Bustan Palace Ritz-Carlton, Anantara Al Jabal Al Akhdar' },
      { label: 'Ultra-Luxury & Iconic', range: '$1,200–$4,000/night', gets: 'Standalone villa with private pool, butler, paraglider arrival, canyon-edge cliff suite, or the highest resort in the Middle East.', example: 'Six Senses Zighy Bay, Alila Jabal Akhdar, Shangri-La Al Husn adults-only' },
    ],
    areas: [
      { name: 'Muscat', bestFor: 'Arrival base, culture, beach city', description: 'The capital — whitewashed low-rise architecture, the Grand Mosque, Mutrah souk, and a string of coast-hugging 5-stars. Two to three nights to decompress and see the city.' },
      { name: 'Jabal Akhdar (Green Mountain)', bestFor: 'Dramatic canyons, cool mountain air, rose harvest', description: 'A 2000m plateau 2.5 hours from Muscat. Temperatures 15°C cooler than the coast. Home to Alila and Anantara — two of the best mountain resorts on earth.' },
      { name: 'Musandam Peninsula', bestFor: 'Fjord-like scenery, dolphin watching, remote luxury', description: 'Oman\'s northern exclave, bordered by the UAE. Access via a 2h flight Muscat–Khasab, or cross overland from Dubai (4h). Six Senses Zighy Bay is the legendary property here.' },
      { name: 'Wahiba Sands', bestFor: 'One-night desert experience', description: 'Three hours south of Muscat. Classic golden dune seas with Bedouin-style tented camps. Pair with Nizwa fort on the drive in, Wadi Bani Khalid on the way out.' },
      { name: 'Salalah', bestFor: 'Southern monsoon escape, frankincense history', description: 'A 90-minute flight south. Tropical beaches, banana plantations, and the world\'s oldest frankincense trade route (UNESCO Al Baleed ruins). The khareef monsoon Jul–Sep turns the landscape emerald.' },
    ],
    expertTips: [
      { tip: 'Combine coast + mountain in one trip', detail: 'Three nights Muscat + three nights Jabal Akhdar is the ideal one-week rhythm. The 2.5-hour drive between them is scenic (via Nizwa fort). Do not spend the whole week on the beach — the mountains are why you came.' },
      { tip: 'Rent a 4WD for interior travel', detail: 'A Toyota Prado or Land Cruiser is essential for Jabal Akhdar (the final mountain road requires 4WD) and Wahiba Sands (desert tracks). Budget $80–$130/day. International driving permit required.' },
      { tip: 'Dress code is meaningfully conservative', detail: 'Outside resort pools, shoulders and knees should be covered for both men and women. This is particularly respected at Mutrah souk, the Grand Mosque, and Nizwa. Resorts themselves are relaxed.' },
      { tip: 'Alcohol is limited but available at resorts', detail: 'All international 5-star resorts serve alcohol. Supermarkets do not sell it. Duty-free allowance is 2 litres per non-Muslim visitor on arrival — use it if you want in-villa wine.' },
      { tip: 'Get Oman e-visa before flying', detail: 'Most nationalities need an e-visa via evisa.rop.gov.om. Processing is 24–72h. Do not arrive without one — on-arrival issuance is no longer universal.' },
    ],
    packing: [
      { item: 'Lightweight long-sleeve shirts', why: 'Sun protection on coast, modesty in towns and mosques. Linen is the universal Oman uniform.' },
      { item: 'Headscarf (women)', why: 'Required for mosque visits and appreciated at traditional souks and villages.' },
      { item: 'Closed hiking shoes', why: 'Wadi hikes (Wadi Shab, Wadi Bani Khalid) have slippery rocks. Sandals are insufficient.' },
      { item: 'Warm layer', why: 'Jabal Akhdar evenings drop to 10°C even in summer. Desert nights in Wahiba Sands can be 5°C in winter.' },
      { item: 'Reef-safe sunscreen', why: 'The UV index is extreme. Reef-safe protects snorkel sites in Musandam and Daymaniyat Islands.' },
    ],
    guide: {
      getting: 'Fly to Muscat (MCT) on Oman Air (direct from London 7h, Paris 7h, Frankfurt 6h30, Zurich 7h), or connect via Dubai (45 min hop on Emirates/flydubai) or Doha (Qatar Airways). From North America: connections via Frankfurt, Doha, or Dubai; 14–17h total from US East Coast. Oman Air runs a direct 8h service from Bangkok. Muscat airport is 30 minutes from the main hotel strip; taxis $20–$30.',
      where: 'Classic one-week itinerary: 3 nights Muscat (The Chedi, Al Bustan or Al Husn) → 3 nights Jabal Akhdar (Alila or Anantara) → 1 optional night in Wahiba Sands desert camp. For 10 days, add Musandam via Six Senses Zighy Bay. For December–March, consider flipping the mountain portion to Salalah if you prefer beach-focused.',
      when: 'October–April is the only sensible window — temperatures 22–30°C on the coast, 15–25°C on Jabal Akhdar, 25–35°C in the desert. Peak is mid-November to mid-March. Avoid May–September unless heading specifically to Salalah for the khareef monsoon (Jul–Sep) which is its own spectacular experience.',
    },
    localFood: 'Shuwa — lamb marinated for 24h in Omani spices then slow-cooked underground for 24h (traditionally Eid, but good hotels offer it); majboos (spiced rice with meat); grilled hammour from the Arabian Sea; camel at a Bedouin camp (gamier than beef, richer than lamb); halwa semolina sweet perfumed with rose water and saffron; dates from Nizwa (try the khalas variety); Omani coffee (kahwa) served with dates is a hospitality ritual you will encounter daily.',
    currency: 'Omani Rial (OMR) — one of the world\'s most valuable currencies; 1 OMR ≈ $2.60',
    language: 'Arabic is official; English widely spoken in hotels, restaurants, and tourist sites.',
    timezone: 'UTC+4 (Gulf Standard Time)',
  },

  'uae': {
    hero: '/images/hotels/burj-al-arab-jumeirah-uae/hero.webp',
    tagline: 'Dubai glamour, Abu Dhabi palaces, and the world\'s most extraordinary desert hideaways.',
    intro: 'The United Arab Emirates does honeymoon theatre better than any destination on earth. Where else can you check into the sail-shaped Burj Al Arab with a Rolls-Royce transfer, dine in 17 restaurants at Atlantis The Royal (including Beyoncé\'s opening stage), wake up to Arabian oryx outside a Bedouin-style suite in the Dubai Desert Conservation Reserve, and end the week in Emirates Palace\'s 114-dome marble splendour in Abu Dhabi? This is luxury at a scale and fantastical level that has to be experienced to be understood. Beyond the skyline, the UAE also offers genuinely transcendent desert resorts — Al Maha, Qasr Al Sarab — where the sand dunes outside your pool villa stretch to the horizon.',
    bestTime: 'Nov–Mar',
    flightFrom: '6–7h from Europe',
    topExperience: 'Luxury & Desert',
    perfectFor: [
      'Couples who want spectacle, glamour, and cinematic luxury turned up to maximum',
      'Foodies — Dubai alone has dozens of Michelin-starred restaurants and global superstar chefs',
      'Shoppers — the Dubai Mall, Mall of the Emirates, and Gold Souk are genuinely world-class',
      'Desert-dreaming honeymooners — UAE has the world\'s most luxurious sand-dune resorts',
      'Short-haul luxury travellers from Europe — a 7h direct flight for proper winter sun',
    ],
    skipIf: [
      'You want authenticity and ancient culture — the UAE is very new and built for tourism',
      'Your budget is under $400/night — there is a mid-range, but honeymoon-worthy options start higher',
      'You visit in July–September — 45°C+ heat makes outdoor activity genuinely dangerous',
      'You dislike big, brash, conspicuous luxury — Dubai especially can feel theatrical',
    ],
    experiences: [
      {
        icon: '🏝️',
        title: 'Private Beach Day at Burj Al Arab',
        description: 'The sail-shaped icon is not just a hotel — the Terrace infinity pool and beach club is the single most photographed honeymoon location in the UAE. A sunset cocktail at the 27th-floor Skyview Bar completes the set.',
        cost: 'Non-guest Terrace access from $200/couple; a suite stays $2,000+',
        tip: 'Book the Royal Suite if budget allows — it has 24-carat gold leaf, a private cinema, and a butler per 8 guests. Skyview Bar requires a $200 minimum spend; worth every dirham.',
      },
      {
        icon: '🏜️',
        title: 'Sunrise Camel Ride at Al Maha',
        description: 'The Dubai Desert Conservation Reserve (225 km², protected) is where you ride a camel at dawn, breakfast in a rolling dune, and watch Arabian oryx graze near your pool villa. This is the desert romance image in its purest form.',
        cost: 'Al Maha full-board from $1,400/night including 2 desert activities/day',
        tip: 'Book Bedouin Suite category or higher — temperature-controlled plunge pools are essential even in January. Guided hot-air balloon at sunrise is the single best activity.',
      },
      {
        icon: '🛶',
        title: 'Abra Ride through Madinat Jumeirah',
        description: 'Madinat Jumeirah is a fantasy recreation of an Arabian souk on 3 km of meandering canals. A 15-minute traditional abra (wooden boat) ride between restaurants is the most romantic way to arrive at dinner. Burj Al Arab lights up the skyline.',
        cost: 'Free for Jumeirah hotel guests; canal rides $30/couple for others',
        tip: 'Dine at Pierchic — a seafood restaurant at the end of a wooden pier, 100m out in the Arabian Gulf, with the Burj Al Arab glowing pink at sunset.',
      },
      {
        icon: '🏛️',
        title: 'Sheikh Zayed Grand Mosque, Abu Dhabi',
        description: 'One of the largest mosques in the world — 82 white marble domes, inlays of precious stones, and the world\'s largest hand-knotted carpet (5,700 m²). Open to non-Muslims free of charge.',
        cost: 'Free',
        tip: 'Go 90 minutes before sunset and stay for the floodlit post-dusk view — it\'s genuinely breathtaking. Modest dress required; free abayas loaned for women without appropriate cover.',
      },
      {
        icon: '🍽️',
        title: 'Dinner at Atlantis The Royal',
        description: 'Atlantis The Royal\'s 17 restaurants include Ariana\'s Persian Kitchen, Nobu by the Beach, Gastronomy and Dinner by Heston Blumenthal, Gordon Ramsay Hell\'s Kitchen, and Jaleo by José Andrés. Pair dinner with the 7pm Skyblaze show — a choreographed fire-and-fountain spectacle synced across 1,000 jets.',
        cost: 'Average dinner for two $300–$800',
        tip: 'Book Dinner by Heston for the tasting menu; request a terrace table in winter for the Skyblaze view.',
      },
    ],
    months: [
      { month: 'Jan', weather: 'Warm days 24°C, cool nights', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Peak season — perfect weather' },
      { month: 'Feb', weather: 'Warm, zero rain, ideal', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Arguably the best month' },
      { month: 'Mar', weather: 'Warming 28°C, still perfect', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Excellent all-round' },
      { month: 'Apr', weather: 'Hot 32°C, still pleasant', emoji: '☀️', crowds: 'Moderate', price: 'Mid', verdict: 'Good value, desert getting warm' },
      { month: 'May', weather: 'Very hot 38°C, humidity rising', emoji: '🥵', crowds: 'Low', price: 'Low', verdict: 'Indoor-focused only' },
      { month: 'Jun', weather: 'Brutal 42°C+ heat', emoji: '🥵', crowds: 'Low', price: 'Low', verdict: 'Skip unless deal-hunting' },
      { month: 'Jul', weather: 'Extreme 45°C+ with humidity', emoji: '🥵', crowds: 'Low', price: 'Lowest', verdict: 'Summer sales only — hotel cocoon living' },
      { month: 'Aug', weather: 'Extreme heat continues', emoji: '🥵', crowds: 'Low', price: 'Lowest', verdict: 'Avoid unless pool-obsessed' },
      { month: 'Sep', weather: 'Still very hot 40°C', emoji: '🥵', crowds: 'Low', price: 'Low', verdict: 'Late month improves' },
      { month: 'Oct', weather: 'Cooling to 34°C, shoulder starts', emoji: '☀️', crowds: 'Moderate', price: 'Mid', verdict: 'Great shoulder deals' },
      { month: 'Nov', weather: 'Lovely 28°C, ideal conditions', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Perfect — book ahead' },
      { month: 'Dec', weather: 'Cool 25°C, festive energy', emoji: '🎄', crowds: 'Peak', price: 'Highest', verdict: 'Christmas/NYE premium — magical but pricey' },
    ],
    budgetTiers: [
      { label: 'Upscale City Hotels', range: '$300–$700/night', gets: 'Excellent 5★ with beach or mall access, fine dining, typical Dubai luxury baseline.', example: 'Jumeirah Beach Hotel, Four Seasons DIFC, Mandarin Oriental Jumeira' },
      { label: 'Landmark Luxury', range: '$700–$2,000/night', gets: 'Iconic property — Burj Al Arab, Atlantis The Royal, or Bulgari private island. Proper theatre.', example: 'Burj Al Arab, Bulgari Resort Dubai, Atlantis The Royal, Emirates Palace' },
      { label: 'Desert & Private Villa', range: '$900–$3,500/night', gets: 'Pool suite in a desert reserve, or duplex suite in the Burj Al Arab. Butler service is standard.', example: 'Al Maha Desert Resort, Anantara Qasr Al Sarab, Burj Al Arab suites' },
    ],
    areas: [
      { name: 'Dubai Marina / JBR', bestFor: 'Beach, nightlife, dining, shopping', description: 'Glittering high-rise beachfront neighbourhood. Walkable, many restaurants, direct beach. Best base for first-time visitors who want the Dubai full experience.' },
      { name: 'Palm Jumeirah', bestFor: 'Iconic address, beach resorts, luxury', description: 'The man-made palm-shaped island. Home to Atlantis The Royal, One&Only The Palm, Waldorf Astoria. Taxi-dependent but worth it for the Palm address.' },
      { name: 'Downtown Dubai', bestFor: 'Burj Khalifa views, Dubai Mall, shopping', description: 'Skyline central — the Burj Khalifa, Dubai Fountain, and Dubai Mall at your door. Less beach-oriented; best for city-focused honeymooners.' },
      { name: 'Dubai Desert Conservation Reserve', bestFor: 'Desert resort experience, wildlife, seclusion', description: '45 minutes from Dubai airport. Home to Al Maha (adults-only) and Bab Al Shams. Arabian oryx grazing outside your suite. Non-negotiable if you love the idea of desert.' },
      { name: 'Abu Dhabi', bestFor: 'Palatial resorts, culture, Louvre, F1', description: 'Quieter, more grown-up capital 90 minutes south. Home to Emirates Palace, Louvre Abu Dhabi, Saadiyat Island beaches, and Yas Island entertainment. Add 2–3 nights after Dubai.' },
    ],
    expertTips: [
      { tip: 'Book helicopter transfer between Dubai and Abu Dhabi', detail: 'The Falcon Aviation helicopter transfer is $800–$1,200 for the 25-minute flight vs 90 minutes by road. The aerial view of the Palm, the Burj, and Saadiyat Island is a honeymoon highlight unto itself.' },
      { tip: 'Dine during off-hours for iconic restaurants', detail: 'Nobu, Zuma, and CÉ LA VI accept lunch reservations that would take weeks at dinner. The 2pm slot at Nobu Dubai is a quieter, more intimate experience than the 8pm crush.' },
      { tip: 'Ramadan changes everything — know your dates', detail: 'During Ramadan (dates shift yearly), daytime eating, drinking, and public displays of affection are restricted for everyone outside hotels. Hotels operate normally. Check dates before booking.' },
      { tip: 'Most hotels quote pre-tax; actual cost is +20%', detail: 'UAE hotels add 10% municipality fee + 10% service + 5% VAT to quoted rates. The Burj Al Arab "from $2,000" is really $2,400 all-in. Factor this in when budgeting.' },
      { tip: 'Friday brunch is a UAE institution', detail: 'Hotel brunches on Friday/Saturday are a 4-hour feast with free-flowing Champagne. Bubbalicious at Westin, Saffron at Atlantis, and the Al Qasr brunch are iconic. Book 2 weeks ahead.' },
    ],
    packing: [
      { item: 'Smart-casual evening wear', why: 'Dubai dining scene is dressed-up — jackets for men, dresses for women at most landmark restaurants. Shorts and tees will get you turned away at the Skyview Bar.' },
      { item: 'Modest daytime cover-up', why: 'At malls, souks, and outside hotel pools, shoulders and knees should be covered. Resort wear is fine at the resort only.' },
      { item: 'High-UV sunscreen SPF 50+', why: 'The Gulf sun is brutal even in January. Reapply every 2 hours at the pool.' },
      { item: 'Light scarf or pashmina', why: 'Indoor air conditioning is aggressive — restaurants and malls often run at 18°C. Also covers shoulders at mosques.' },
      { item: 'Metro Nol card', why: 'Dubai Metro is fast, air-conditioned, and cheap. A Nol card works on metro, tram, buses, and some ferries. Buy at the airport metro station on arrival.' },
    ],
    guide: {
      getting: 'Fly direct to Dubai (DXB) on Emirates, Etihad (to AUH), flydubai, or British Airways. From London: 7h direct. From NYC: 12–13h direct on Emirates. From Sydney: 14h on Emirates/Qantas. Dubai airport is 20 minutes from Downtown, 40 from Marina. Etihad to Abu Dhabi (AUH) is 90 minutes by road from Dubai and often much cheaper. Intra-UAE transfers: chauffeur car $120–$200 or book the complimentary Abu Dhabi transfer when staying at Emirates Palace.',
      where: 'Classic honeymoon: 3 nights Dubai (Bulgari, Burj Al Arab, or Atlantis) → 2 nights Dubai Desert Conservation Reserve (Al Maha) → 2 nights Abu Dhabi (Emirates Palace or Qasr Al Sarab). If time-pressed: 4 nights Dubai + 2 nights desert is enough for a spectacular first visit.',
      when: 'November–March is the only comfortable outdoor window. December–February is peak and priciest; November and March are equally pleasant and meaningfully cheaper. April–October is 36°C+ and many outdoor activities (desert dunes, beach days) become uncomfortable or dangerous. Christmas/NYE in Dubai carries a 40–80% premium but has spectacular firework shows at the Burj Khalifa and Palm.',
    },
    localFood: 'Al Harees (slow-cooked wheat and meat, traditional Ramadan dish); Luqaimat (deep-fried dough balls drizzled with date syrup — UAE\'s national dessert); Camel burger at Seven Sands in Dubai; Karak chai (Emirati milk tea with cardamom, best from Al Safadi); A Friday brunch at Bubbalicious or Saffron; Persian-Arabic cuisine at Ariana\'s Persian Kitchen in Atlantis. Dubai is also the world capital of Emirati-free gastronomy — you can eat ramen, tacos, Parisian bistro, sushi, Neapolitan pizza, Peruvian all at the same destination standard.',
    currency: 'UAE Dirham (AED) — pegged to USD at 3.67. Cards accepted everywhere.',
    language: 'Arabic is official; English is universal. Menus, signs, and hotel staff all default to English.',
    timezone: 'UTC+4 (Gulf Standard Time)',
  },

  'switzerland': {
    hero: '/images/hotels/badrutts-palace-hotel-st-moritz-switzerland/hero.webp',
    tagline: 'Matterhorn mornings, St. Moritz glamour, and the Grand Dames of alpine honeymoons.',
    intro: 'Switzerland is the destination that reminds you why honeymoons were invented. The Grand Dame hotels — Badrutt\'s Palace, Kulm, Gstaad Palace, Beau-Rivage — have been entertaining newly-married couples since the Belle Époque, and their rituals (afternoon tea with Mont Blanc views, chef\'s table in a 300-year-old farmhouse, private onsen on a glacier ridge) remain the gold standard of European luxury. Add winter (ski St. Moritz in the morning, spa on Lake Lucerne at sunset) or summer (Matterhorn hikes, Lake Geneva paddleboards, Engadine valley wildflower meadows) and you have a destination where every day is a postcard. This is proper, understated, four-century-old luxury — the kind the Swiss invented.',
    bestTime: 'Dec–Mar (ski) & Jun–Sep (alpine summer)',
    flightFrom: '1.5–2h from EU capitals',
    topExperience: 'Alpine Luxury',
    perfectFor: [
      'Couples who want heritage luxury — 150-year-old Grand Dames at their best',
      'Skiers and snowboarders — St. Moritz, Zermatt, Verbier and Andermatt are world-class',
      'Summer hikers — the Alps from June to September are an outdoor wonderland',
      'Wellness devotees — Swiss spa culture (Six Senses Gstaad, Alpine Spa Bürgenstock) is unrivalled',
      'Foodies — Switzerland has the world\'s highest Michelin-stars-per-capita ratio',
    ],
    skipIf: [
      'Your budget is tight — there is genuinely no cheap Switzerland for a 5★ honeymoon',
      'You want warm-weather beach romance — this is not that destination',
      'You dislike cold weather — winter temperatures can reach –20°C in the Engadine',
      'Your travel style is chaotic and spontaneous — Switzerland rewards planners',
    ],
    experiences: [
      {
        icon: '⛷️',
        title: 'Glacier Express, St. Moritz to Zermatt',
        description: 'The most spectacular slow train in the world — 8 hours across 291 bridges and through 91 tunnels, linking Switzerland\'s two most famous alpine villages. Book the Excellence Class (single seat on each side, champagne, 5-course lunch, personal concierge).',
        cost: 'Excellence Class $590/person; standard first class $160/person',
        tip: 'Travel in winter when the mountains are snow-covered and both sides of the carriage are cinematic. Book 3 months ahead for Excellence Class.',
      },
      {
        icon: '🏔️',
        title: 'Sunrise Matterhorn from Gornergrat',
        description: 'The 9-minute cogwheel railway from Zermatt to Gornergrat (3,089m) is one of the most romantic alpine journeys. Take the earliest train (7:30am winter, 7:00am summer) and watch the first light hit the Matterhorn while you have the summit terrace to yourself.',
        cost: 'Round-trip $140/person; breakfast at 3100 Kulmhotel $45/person',
        tip: 'Reserve the "Matterhorn Suite" at 3100 Kulmhotel for an overnight — the only hotel with a Matterhorn-facing room at altitude. Life-changing sunrise.',
      },
      {
        icon: '🧘',
        title: 'Six Senses Spa at The Alpina Gstaad',
        description: 'A 2000 m² wellness temple — heated indoor/outdoor pools, a Himalayan salt room, a stone-heated hammam, a snow room and a cryotherapy chamber. The signature Alpina Thai Massage runs 90 minutes under Mont Blanc views.',
        cost: 'Guest entry included; treatments from $300',
        tip: 'Book the dawn slot — the spa opens at 7am and you can have the infinity pool to yourself watching the sun hit the Lauenen mountains.',
      },
      {
        icon: '🍽️',
        title: 'Chesa Veglia Fondue Dinner',
        description: 'Badrutt\'s Palace\'s 17th-century farmhouse — the world\'s oldest alpine restaurant — serves Moitié-Moitié fondue (Gruyère + Vacherin Fribourgeois) in front of a wood fire, accompanied by a pianist. This is the single most romantic meal in the Alps.',
        cost: 'Fondue menu from $160/person with Swiss wine pairing',
        tip: 'Book the mezzanine table above the fire for the best atmosphere; avoid winter-season Saturdays when it fills with the Cresta Run crowd.',
      },
      {
        icon: '⛸️',
        title: 'Ice Skating on Lake St. Moritz',
        description: 'The frozen Lake St. Moritz hosts the longest-running outdoor ice-skating tradition in Switzerland (since 1878), plus the White Turf horse races each February, and a century-old cricket-on-ice tournament.',
        cost: 'Free skating with rented blades $15; White Turf tickets $80–$400',
        tip: 'The ice is reliably thick from late December to mid-February. Go at dusk when the village lights come on — the most photogenic hour.',
      },
    ],
    months: [
      { month: 'Jan', weather: '–10°C, deep snow, crisp sun', emoji: '❄️', crowds: 'Peak', price: 'Highest', verdict: 'Ski peak — book a year ahead' },
      { month: 'Feb', weather: '–8°C, perfect ski conditions', emoji: '⛷️', crowds: 'Peak', price: 'Highest', verdict: 'Best ski month, best ice on St. Moritz lake' },
      { month: 'Mar', weather: '–2°C, longer days, excellent skiing', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Spring skiing — most forgiving conditions' },
      { month: 'Apr', weather: 'Thaw begins, mud season lower altitudes', emoji: '🌦', crowds: 'Low', price: 'Low', verdict: 'Hotels often close mid-April' },
      { month: 'May', weather: '15°C in valleys, snow above 2500m', emoji: '🌱', crowds: 'Low', price: 'Low', verdict: 'Low season — quiet and affordable' },
      { month: 'Jun', weather: '20°C, wildflowers peak', emoji: '🌸', crowds: 'Moderate', price: 'Mid', verdict: 'Underrated — green hills, few crowds' },
      { month: 'Jul', weather: '25°C, perfect hiking weather', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Summer peak — book ahead' },
      { month: 'Aug', weather: 'Warm and sunny, some afternoon storms', emoji: '☀️', crowds: 'Peak', price: 'Highest', verdict: 'Lovely but busiest summer month' },
      { month: 'Sep', weather: 'Crisp 18°C, golden larches late month', emoji: '🍂', crowds: 'Moderate', price: 'Mid-high', verdict: 'Best overall month — hiking + value' },
      { month: 'Oct', weather: 'Cool 10°C, autumn colours, first snow', emoji: '🍁', crowds: 'Low', price: 'Low-mid', verdict: 'Quiet shoulder — many hotels close late month' },
      { month: 'Nov', weather: '0°C, often grey in valleys', emoji: '🌫', crowds: 'Low', price: 'Low', verdict: 'Skip — most alpine hotels closed' },
      { month: 'Dec', weather: '–5°C, fresh snow, Christmas markets', emoji: '🎄', crowds: 'Peak', price: 'Highest', verdict: 'Magical if snow lands — Christmas premium' },
    ],
    budgetTiers: [
      { label: 'Upscale 4★', range: '$400–$800/night', gets: 'Comfortable boutique or chain 4★ in a top resort village. Good service, modest luxury.', example: 'Hotel Crystal Zermatt, Schweizerhof St. Moritz, Parkhotel Vitznau-adjacent' },
      { label: 'Grand Dame 5★', range: '$800–$2,500/night', gets: 'Century-old turreted palace — Belle Époque dining rooms, 2-Michelin tables, ski concierge.', example: 'Badrutt\'s Palace, Kulm Hotel St. Moritz, Gstaad Palace, Mont Cervin Palace' },
      { label: 'Ultra-Luxury Chalet & Suite', range: '$1,500–$5,000/night', gets: 'Design-led modern luxury, Six Senses spa, private ski butler, chauffeured Rolls-Royce between piste and restaurant.', example: 'The Alpina Gstaad, The Chedi Andermatt, Bürgenstock Private Residences' },
    ],
    areas: [
      { name: 'St. Moritz / Engadine', bestFor: 'Glamour, ice-skating on the lake, Badrutt\'s Palace', description: 'Jet-set winter capital since 1864. Home to Badrutt\'s Palace, Kulm, and Suvretta House. White Turf horse races on the frozen lake in February. High-altitude (1,800m) so dry, sunny, and cold.' },
      { name: 'Zermatt', bestFor: 'Matterhorn views, car-free village, glacier skiing', description: 'Switzerland\'s most iconic alpine silhouette. Car-free (only e-taxis). The Gornergrat railway is a must. Stay at Mont Cervin Palace or Riffelalp Resort at 2,222m.' },
      { name: 'Gstaad / Saanenland', bestFor: 'Discreet luxury, chalet atmosphere', description: 'Celebrity-favourite village preserved in wooden chalet style (no modern buildings allowed). Home to Gstaad Palace and The Alpina Gstaad. Ski in winter, cheese-farm hikes in summer.' },
      { name: 'Lake Lucerne / Bürgenstock', bestFor: 'Lake views, wellness, summer romance', description: 'The 500m Bürgenstock ridge has the best lake-Alps combination in Switzerland. The Alpine Spa\'s glass-edge pool is one of the most photographed wellness spaces in Europe.' },
      { name: 'Lake Geneva / Lausanne', bestFor: 'Cultural city-lake stay, wine country', description: 'Beau-Rivage Palace, Lavaux terraced vineyards (UNESCO), Chaplin\'s World museum. Easier logistics than the mountains — 50 min from Geneva airport.' },
    ],
    expertTips: [
      { tip: 'Buy a Swiss Travel Pass if moving around', detail: 'A Swiss Travel Pass (3–15 days) covers all trains, buses, boats, plus museum entry and mountain discounts. For 3+ alpine villages it\'s much cheaper than individual tickets. Book before you fly.' },
      { tip: 'Dinner reservations are non-negotiable', detail: 'Top Swiss restaurants (Restaurant de l\'Hôtel de Ville Crissier, Schauenstein, Sommet at Alpina, Cheval Blanc at Baur) fill 3–6 months ahead. Book when you book the hotel.' },
      { tip: 'Ski pass logic — buy the regional pass', detail: 'In St. Moritz, the Corviglia/Corvatsch/Diavolezza pass covers 350 km of slopes for $80/day. Zermatt\'s Matterhorn Ski Paradise covers 360 km and crosses into Italy. Single-slope passes are a waste.' },
      { tip: 'Car-free villages mean rail arrival', detail: 'Zermatt, Saas-Fee, and Wengen have no car access. Park at the valley gateway (Täsch for Zermatt) and take the shuttle train. Renting a car is worse than useless here.' },
      { tip: 'November and late-April are closed', detail: 'Most alpine resorts close from early November to early December, and again from early April to mid-June. Do not plan a Swiss mountain honeymoon in those windows — you will find empty villages.' },
    ],
    packing: [
      { item: 'Quality waterproof ski/snow boots', why: 'Village streets in Zermatt and St. Moritz are icy from December to March. Fashion boots will slip; sorel-style pairs are the standard.' },
      { item: 'Thermal base layers', why: 'Chairlift rides at –15°C expose you to serious windchill. Merino base layers are a honeymoon necessity, not a luxury.' },
      { item: 'Sunglasses with alpine-grade UV protection', why: 'Snow and glacier ice reflect UV at blinding levels. Category 3 minimum; Category 4 for glacier skiing.' },
      { item: 'Swimsuit — yes, even in winter', why: 'Every serious Swiss hotel has an indoor/outdoor hot pool. A swimsuit is used more than you\'d expect.' },
      { item: 'Smart evening wear', why: 'Grand Dame dinners are dress-up. Jacket for men, dress for women at Chesa Veglia, Sommet, and Anne-Sophie Pic. No athletic wear after 6pm.' },
    ],
    guide: {
      getting: 'Main airports: Zurich (ZRH) for St. Moritz, Andermatt, and the eastern Alps; Geneva (GVA) for Gstaad, Zermatt, and the western Alps. From London: 1h45 to either. From NYC: 8h direct on Swiss or United. Airport-to-village by train: Zurich to St. Moritz 3h15 (2 changes, Glacier Express feel); Geneva to Zermatt 3h30 (change at Visp). Swiss rail is legendary for punctuality and panoramic views.',
      where: 'Classic one-week: 3 nights St. Moritz (Badrutt\'s Palace or Kulm) → Glacier Express journey → 3 nights Zermatt (Mont Cervin Palace, Riffelalp). For summer: Lake Lucerne (Bürgenstock) 3 nights → Gstaad 3 nights → optional Ticino (Ascona Castello del Sole) 2 nights for warmth. For a shorter trip: 4 nights Gstaad + Matterhorn day trip.',
      when: 'Winter (Dec–Mar) is for ski-obsessed couples — expensive, peak-busy, but magical. Summer (Jun–Sep) is for hikers and lake lovers — slightly cheaper, longer days, wildflowers. September is the single best overall month: crisp air, autumn colours, fewer crowds, lower prices, most restaurants still open. Avoid November and May — most alpine hotels are closed for seasonal maintenance.',
    },
    localFood: 'Fondue Moitié-Moitié (Gruyère + Vacherin Fribourgeois, served at Chesa Veglia with pianist accompaniment); Raclette (scraped cheese with potatoes and pickled onions — the informal dinner); Rösti (Swiss-German potato pancake, best at Kronenhalle Zurich); Älplermagronen (alpine macaroni with cream, potatoes and apple sauce on the side); Bündner Gerstensuppe (barley soup from the Graubünden canton); chocolate at Sprüngli Zurich (the Luxemburgerli macarons) and Teuscher (champagne truffles). Switzerland has more Michelin stars per capita than almost any country — 128 stars across ~9 million people.',
    currency: 'Swiss Franc (CHF) — Switzerland is outside the Eurozone. Euros are accepted in tourist areas at poor rates.',
    language: 'German (66%), French (23%), Italian (8%), Romansh (0.5%). English is universal in tourist areas.',
    timezone: 'UTC+1 (Central European Time) / UTC+2 (CEST, summer)',
  },

  'botswana': {
    hero: '/images/hotels/jao-camp-okavango-botswana/hero.webp',
    tagline: 'The world\'s last great wilderness — Okavango, Kalahari, and the continent\'s most exclusive safari camps.',
    intro: 'Botswana is Africa\'s ultimate honeymoon destination — and it\'s not even close. The Okavango Delta is the only inland delta on earth (a river that never reaches the sea, fanning out into 15,000 km² of channels, floodplains, and palm-fringed islands), and Botswana\'s high-cost/low-volume safari policy means you will share it with almost no one. The camps here — Mombo, Jao, Zarafa, Duba Plains — operate at an altogether higher level than elsewhere in Africa: 6-guest camps on private concessions where the Big Five find you (not the other way around), copper-bathtub pool villas suspended over floodplains, and chef-led dining that rivals Michelin tables. Add the Makgadikgadi salt pans, Chobe\'s elephant herds, and the Central Kalahari for the full ultra-luxury wilderness experience.',
    bestTime: 'May–Oct (dry season)',
    flightFrom: '11–13h from Europe (via JNB)',
    topExperience: 'Ultra-Premium Safari',
    perfectFor: [
      'Couples on their lifetime-best safari honeymoon — money-no-object luxury',
      'Photography-obsessed travellers — Delta channels at golden hour are unrivalled',
      'Off-grid romantics — these camps have no children under 8, no mobile signal, no Wi-Fi in tents',
      'Big Five hunters (with a camera) — predator density is the highest in Africa',
      'Those wanting the exclusivity of private concessions — 50,000 hectares per 24 guests, typical',
    ],
    skipIf: [
      'Your budget is under $1,000/person/night — Botswana starts where Kenya and South Africa end',
      'You want beach in the same trip — this is landlocked Southern Africa',
      'You need constant Wi-Fi — most camps are genuinely offline',
      'You don\'t love small aircraft — intra-camp transfers are by 12-seater Cessna',
    ],
    experiences: [
      {
        icon: '🛶',
        title: 'Mokoro at Sunrise in the Okavango',
        description: 'A mokoro is a traditional dugout canoe, now fibreglass for conservation, poled by a local guide through papyrus-lined channels. A 6am mokoro slide at Jao or Sandibe, watching the Delta come alive (a red lechwe leaping, a painted reed frog, a jacana on its lily pad), is the signature Okavango honeymoon moment.',
        cost: 'Included at all Delta camps',
        tip: 'Request the longest mokoro circuit available — 3 hours out to a lunch island, dugout picnic, 3 hours back. Only certain camps (Jao, Vumbura, Chitabe) offer this.',
      },
      {
        icon: '🚁',
        title: 'Helicopter Safari from Eagle Island',
        description: 'Belmond Eagle Island Lodge\'s helicopter safari is unique in Botswana — you lift off from the camp\'s private pad, remove the doors, and photograph elephant herds, lechwe, and the maze of Delta channels from 200m. A 45-minute flight is the best aerial wildlife experience in Africa.',
        cost: '$650/person for a shared helicopter; $3,500 private charter',
        tip: 'Go late afternoon for the gold light hitting the water; camels-through-desert look but with African predators.',
      },
      {
        icon: '🦁',
        title: 'Night Drive on a Private Concession',
        description: 'Botswana\'s national parks do not allow night drives, but private concessions (Selinda, Khwai Private, Kwando) do. A 7pm drive with a red filter spotlight reveals leopard hunts, aardvark foraging, and African civet cat — animals invisible in daylight.',
        cost: 'Included at concession-based camps',
        tip: 'Book a camp like Tuludi (Khwai Private), Zarafa (Selinda), or Duba Plains (Great Plains) specifically for this. Public-land camps cannot offer it.',
      },
      {
        icon: '🐘',
        title: 'Chobe Elephant Sundowner',
        description: 'Chobe National Park has 120,000 elephants — the largest concentration on earth. A late-afternoon boat cruise on the Chobe River watches herds of 200+ elephants crossing from Namibia to Botswana for their evening drink. Sundowner gin-and-tonic on deck, elephants splashing 30m away.',
        cost: '$80–$180 per person for a shared boat sundowner',
        tip: 'Stay at Chobe Chilwero or Muchenje for a night after the Delta — the density is otherworldly.',
      },
      {
        icon: '⭐',
        title: 'Stargazing in the Central Kalahari',
        description: 'The Central Kalahari Game Reserve (52,800 km²) is one of the darkest skies on earth. A sleep-out under the Milky Way at Kalahari Plains Camp, with Ursa Major directly overhead and the Southern Cross at the horizon, is genuinely transcendent.',
        cost: 'Sleep-out deck included at many Kalahari camps',
        tip: 'Go August or September for the darkest skies and best constellations. A local guide will point out the San Bushman names for the stars.',
      },
    ],
    months: [
      { month: 'Jan', weather: 'Hot rainy season, lush green', emoji: '🌧', crowds: 'Low', price: 'Low', verdict: 'Many camps close; wildlife harder to spot' },
      { month: 'Feb', weather: 'Continued rains, dramatic skies', emoji: '🌧', crowds: 'Low', price: 'Low', verdict: 'Calving season — great for baby animals' },
      { month: 'Mar', weather: 'Rains tapering, green everywhere', emoji: '🌦', crowds: 'Low', price: 'Low', verdict: 'Shoulder — good value, green season photography' },
      { month: 'Apr', weather: 'Dry season begins, flood arrives', emoji: '☀️', crowds: 'Moderate', price: 'Mid', verdict: 'Delta starts flooding — timing crucial' },
      { month: 'May', weather: 'Cool, dry, flood at peak', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Perfect Delta water levels, fewer mozzies' },
      { month: 'Jun', weather: 'Cool dry days, cold nights 5°C', emoji: '❄️', crowds: 'High', price: 'High', verdict: 'Excellent game viewing, pack warm layers' },
      { month: 'Jul', weather: 'Cold crisp nights, sunny days', emoji: '❄️', crowds: 'Peak', price: 'Highest', verdict: 'Peak season starts — book a year ahead' },
      { month: 'Aug', weather: 'Dry, warming, game concentrates', emoji: '☀️', crowds: 'Peak', price: 'Highest', verdict: 'Classic safari month — legendary wildlife' },
      { month: 'Sep', weather: 'Hot days, animals crowd water', emoji: '☀️', crowds: 'Peak', price: 'Highest', verdict: 'Best game viewing of year — book early' },
      { month: 'Oct', weather: 'Very hot 35°C+, intense wildlife', emoji: '🥵', crowds: 'High', price: 'High', verdict: 'Brutal heat but unbelievable sightings' },
      { month: 'Nov', weather: 'First rains, green returns', emoji: '🌦', crowds: 'Low', price: 'Mid', verdict: 'Shoulder — dropping prices, emerald transition' },
      { month: 'Dec', weather: 'Rainy, baby animals, migrant birds', emoji: '🌧', crowds: 'Low', price: 'Low-mid', verdict: 'Green season with holiday surcharge exception' },
    ],
    budgetTiers: [
      { label: 'Entry-Level Luxury Safari', range: '$800–$1,500/person/night', gets: 'Excellent tented camp on a public or semi-private concession. Full board, game drives, transfers, drinks.', example: 'Machaba Camp, Khwai Bush Camp, Camp Moremi' },
      { label: 'Premium Private Concession', range: '$1,500–$3,000/person/night', gets: 'Flagship camp on exclusive land. Night drives, off-road driving, helicopter options.', example: 'Sandibe, Eagle Island, Vumbura, Tuludi, Xigera' },
      { label: 'Ultra-Premium Icon', range: '$2,500–$5,500/person/night', gets: 'Legendary name — Mombo, Jao, Zarafa, Duba Plains. 6–10 guests per camp, dedicated guide, private vehicle, concierge service.', example: 'Mombo Camp, Jao Camp, Zarafa Camp, Duba Plains Camp' },
    ],
    areas: [
      { name: 'Okavango Delta — Moremi & Chief\'s Island', bestFor: 'Classic Delta, Big Five, Mombo Camp', description: 'The Delta\'s wildlife heart. Moremi Game Reserve and the Mombo/Chitabe concessions hold the highest predator density in Africa. 3 nights minimum; 4 is better.' },
      { name: 'Okavango Delta — North / Vumbura / Jao', bestFor: 'Water-focused safari, mokoro, remote flagship camps', description: 'The northern permanent-water zone. Vumbura, Jao, and Duba Plains sit here. Year-round water means mokoros, boat cruises, and fish eagle soundtracks even in the dry season.' },
      { name: 'Selinda & Linyanti', bestFor: 'Night drives, elephants, Zarafa', description: 'Between the Delta and Chobe. Great Plains Conservation runs Zarafa, Duba Plains, and Selinda Camp here. Excellent predator action and large elephant herds. Pair with Chobe.' },
      { name: 'Chobe National Park', bestFor: 'Elephant spectacle, river cruises, day 1/last day', description: 'World\'s largest elephant population. Access via Kasane airport (direct flights from Johannesburg). Typically 1–2 nights as bookends to a Delta trip.' },
      { name: 'Makgadikgadi Salt Pans', bestFor: 'Otherworldly landscape, quad biking, meerkats', description: 'The world\'s largest salt pan system, visible from space. Stay at Jack\'s Camp or San Camp — vintage safari luxury with sleep-outs on the pans and habituated meerkat colonies.' },
    ],
    expertTips: [
      { tip: 'Use a specialist safari operator', detail: 'Do not book Botswana DIY — the inter-camp flight logistics, dietary coordination, and camp-type balance require expertise. Operators like Wilderness, Great Plains, and Natural Selection sell via specialist agents (Africa Odyssey, Extraordinary Journeys). Expect to pay $25–40k for a 10-day couples trip all-in.' },
      { tip: 'Two contrasting camps, not four similar ones', detail: 'The temptation is to book 4 nights in each of 3 camps. Better: 4 nights at a Delta water camp (Jao, Vumbura) + 3 nights at a dry-land predator camp (Mombo, Duba Plains). Don\'t visit 3 similar Delta-water camps — diminishing returns.' },
      { tip: 'Pack soft-sided duffel only', detail: 'Small aircraft transfers have a strict 20 kg (44 lb) soft-bag limit per person, including camera gear. Hard suitcases are banned. Laundry is included at all camps — pack half what you think you need.' },
      { tip: 'Tipping is significant', detail: 'Plan $30–$40 per couple per day for your guide and tracker, plus $20 per day per camp general staff pool. For a 7-night trip budget $500–$800 in USD cash tips. Camps will not tip for you.' },
      { tip: 'Malaria prophylaxis is required year-round', detail: 'Botswana is a malaria zone. Take Malarone (atovaquone-proguanil) or doxycycline for the duration plus 7 days after. Zika and yellow fever are not concerns. Vaccination required only if arriving via a yellow-fever country.' },
    ],
    packing: [
      { item: 'Soft-sided duffel bag (max 20 kg total)', why: 'Small aircraft have strict soft-bag weight limits. Samsonites will be turned away at the airstrip.' },
      { item: 'Neutral safari clothing (khaki, olive, stone)', why: 'Avoid white (dust magnet), blue and black (tsetse fly attractants), and camo (reserved for military in some African countries).' },
      { item: 'Warm fleece and beanie for winter', why: 'May–August mornings can be 5°C. Game drives at 6am in an open Land Cruiser are genuinely cold.' },
      { item: 'Binoculars (8×42 minimum)', why: 'Camp guides have a single spare pair. You will regret not having your own within the first hour.' },
      { item: 'Headlamp + spare batteries', why: 'Walking between your tent and the main mess at night. Most camps provide one, but a personal headlamp is essential.' },
    ],
    guide: {
      getting: 'Fly to Johannesburg (JNB) on SAA, BA, Delta, Virgin, or Lufthansa (11h from London, 16h from NYC, 11h from Frankfurt). Then connect on Airlink to Maun (MUB) or Kasane (BBK) — both ~1h 30m from Johannesburg, 3 flights daily. From Maun, your first camp\'s bush plane (Mack Air, Moremi Air, Wilderness Air) transfers you to the airstrip in a 6–12 seater Cessna. Total door-to-door from London is ~18h.',
      where: 'Classic 7-night honeymoon: 3 nights at a water Delta camp (Jao, Vumbura, Sandibe) → 3 nights at a dry-land Delta/Moremi camp (Mombo, Chitabe, Xigera) → 1 night Kasane/Chobe if doing Vic Falls extension. 10-night version adds Great Plains (Zarafa or Duba Plains). Add Victoria Falls (Zimbabwe side, Royal Livingstone) as a 2-night pre- or post-extension if there\'s appetite.',
      when: 'July–October is peak dry season — best game viewing (animals concentrate at remaining water), clear mornings, cold nights. May–June is the sweet spot — flood is at peak in the Delta, nights are cool, prices 20% lower than July peak. November–April is green season — dramatic skies, baby animals, some camps closed, harder game viewing but 40–60% cheaper. Avoid February for most camps.',
    },
    localFood: 'Seswaa (pounded salted beef, Botswana\'s national dish, often served at a bush breakfast); Bogobe (sorghum porridge); Wild game where legal (kudu fillet, impala carpaccio, warthog sausages); Fresh Okavango bream; South African wines (Stellenbosch and Franschhoek are a 2-hour flight away and on every camp list); G&Ts at sunset with camp-made tonic syrup and local gin (Boatswain\'s Gin from Gaborone); Chef-led tasting menus at Mombo, Jao, and Zarafa that would earn Michelin stars in Europe. Camp chefs are genuinely excellent — expect 4-course lunches and 6-course dinners in the bush.',
    currency: 'Botswana Pula (BWP) — meaning "rain," Botswana\'s most precious thing. Camps quote and accept USD; local currency needed only for tipping support staff and lodge shop purchases.',
    language: 'English is official and universal; Setswana is the mother tongue for most Batswana.',
    timezone: 'UTC+2 (Central Africa Time, no daylight saving)',
  },

  'jordan': {
    hero: '/images/hotels/sun-city-camp-wadi-rum-jordan/hero.webp',
    tagline: 'Petra dawns, Wadi Rum bubble tents, and Dead Sea floats — the most romantic concentration of wonders in the Middle East.',
    intro: 'Jordan is the honeymoon that reads like an Indiana Jones script and lives like a five-star spa break. In a single compact country — smaller than Portugal — you ride horseback through the Siq at dawn to stand alone before Petra\'s Treasury, float weightless in the highest-salinity water on earth at the Dead Sea, sleep in a transparent bubble tent watching shooting stars over the Mars-red sandstone of Wadi Rum, and dive coral reefs in Aqaba that rival the Red Sea\'s best. The Jordanian welcome is the region\'s warmest, the food (mezze, mansaf, zarb) is quietly incredible, and the honeymoon infrastructure — Kempinski Ishtar, St. Regis Amman, Mövenpick Petra, Sun City Wadi Rum — has matured into something genuinely world-class.',
    bestTime: 'Mar–May & Sep–Nov',
    flightFrom: '4–5h from Europe',
    topExperience: 'Petra, Wadi Rum, Dead Sea',
    perfectFor: [
      'History-loving honeymooners — Petra, Jerash, crusader castles, biblical sites in one trip',
      'Couples who want adventure and luxury in equal measure',
      'Travellers seeking the Middle East without the Gulf\'s gloss',
      'Stargazers — Wadi Rum is one of the darkest skies in the Arab world',
      'Foodies — mezze, mansaf, knafeh, and a growing fine-dining scene in Amman',
    ],
    skipIf: [
      'You want a pure beach honeymoon — Aqaba is lovely but limited to 3 nights',
      'You\'re travelling June–August — interior heat hits 40°C+ and Petra becomes brutal',
      'You need an overwater-style honeymoon — Jordan is rock, sand, and history',
      'You\'re uncomfortable with visible security at borders and airports',
    ],
    experiences: [
      {
        icon: '🌅',
        title: 'Petra by Dawn',
        description: 'Enter the 1.2 km Siq at 6am before the day-tripper buses arrive. The moment the rose-red columns of the Treasury reveal themselves at the end of the canyon — alone, in silence — is the single greatest travel moment in the Middle East.',
        cost: 'Petra ticket ~$95/couple (covered by Jordan Pass)',
        tip: 'Stay at the Mövenpick Petra or Petra Marriott so you\'re at the gate when it opens. Hike up to the Monastery (Ad Deir) mid-morning for the second-best view in Petra.',
      },
      {
        icon: '🏜️',
        title: 'Bubble Tent Stargazing in Wadi Rum',
        description: 'Lawrence of Arabia slept under these skies. You\'ll sleep under a transparent dome with a king bed aimed at the Milky Way. Sun City Camp\'s Martian bubbles are the honeymoon benchmark; a private Bedouin dinner and silent 4x4 at sunrise seal it.',
        cost: 'Bubble tent $400–$1,200/night full-board',
        tip: 'Book the "Mars Luxury Tent" or "Deluxe Martian Bubble" — the base bubbles face neighbours and lose privacy. Request the dawn hot-air balloon.',
      },
      {
        icon: '🧂',
        title: 'Dead Sea Float & Mud Ritual',
        description: 'The lowest point on earth (-430 m) and the saltiest. You cannot sink. Float with a book, slather Dead Sea mud at the water\'s edge, then the Kempinski Ishtar spa runs a 90-minute couples treatment finishing with private salt-bath floats at golden hour.',
        cost: 'Day access $50–$100; Ishtar Spa couple\'s ritual $280–$420',
        tip: 'Do not shave the day before. Avoid getting water in your eyes. Two hours in the water is plenty — the salt dehydrates aggressively.',
      },
      {
        icon: '🤿',
        title: 'Snorkel or Dive Aqaba Reefs',
        description: 'The Gulf of Aqaba\'s narrow geography concentrates coral — unlike Sharm across the border, the reefs here are uncrowded and start 10m from shore. The "Japanese Garden" and the Cedar Pride wreck are the signature dives; Hyatt Regency Ayla\'s house reef is excellent for honeymoon snorkel.',
        cost: 'House reef snorkel free for hotel guests; 2-tank dive $90/person',
        tip: 'Book the afternoon sunset dive — visibility is unchanged, tourist boats are gone, and the dusk light on the Saudi coast is unreal.',
      },
      {
        icon: '🍷',
        title: 'Amman Rooftop Sunset',
        description: 'Jordan\'s capital is a food capital in the making. The 32nd-floor Globe Sky Lounge at Amman Rotana or St. Regis\'s bar deliver sweeping sunset views over the seven hills; follow with dinner at Sufra (traditional) or Fakhreldin (old-school elegance).',
        cost: 'Cocktails $15–$25; dinner $80–$150 for two',
        tip: 'Taxi everywhere — Amman\'s hills are brutal on foot. Order the mezze-forward menu rather than ordering mains; sharing is the point.',
      },
    ],
    months: [
      { month: 'Jan', weather: 'Cool 10–15°C, some rain, Petra quiet', emoji: '🌧', crowds: 'Low', price: 'Low', verdict: 'Cheap and uncrowded but cold at Petra dawn' },
      { month: 'Feb', weather: 'Cool 12–17°C, late rain', emoji: '🌦', crowds: 'Low', price: 'Low', verdict: 'Better than Jan but layer up' },
      { month: 'Mar', weather: 'Perfect 15–22°C, spring flowers', emoji: '🌸', crowds: 'Moderate', price: 'Mid', verdict: 'One of the two best months' },
      { month: 'Apr', weather: 'Ideal 18–25°C, dry, clear', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Peak Petra conditions — book early' },
      { month: 'May', weather: 'Warm 22–30°C', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Last great month before summer heat' },
      { month: 'Jun', weather: 'Hot 28–35°C', emoji: '🥵', crowds: 'Moderate', price: 'Mid', verdict: 'Petra gets tough — early starts essential' },
      { month: 'Jul', weather: 'Very hot 32–38°C', emoji: '🥵', crowds: 'Moderate', price: 'Mid', verdict: 'Aqaba only; skip interior' },
      { month: 'Aug', weather: 'Extreme 35–40°C+', emoji: '🥵', crowds: 'Moderate', price: 'Mid', verdict: 'Avoid Petra; Dead Sea survivable' },
      { month: 'Sep', weather: 'Returning to 25–30°C', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Second-best month starts' },
      { month: 'Oct', weather: 'Perfect 20–26°C', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Peak — the ideal honeymoon window' },
      { month: 'Nov', weather: 'Mild 15–22°C', emoji: '☀️', crowds: 'Moderate', price: 'Mid', verdict: 'Excellent value, still warm at Aqaba' },
      { month: 'Dec', weather: 'Cool 10–16°C', emoji: '🌦', crowds: 'Low', price: 'Low', verdict: 'Christmas in the Holy Land — atmospheric but cold' },
    ],
    budgetTiers: [
      { label: 'Comfortable', range: '$250–$500/night', gets: 'Solid 5★ in Amman and at Petra; good Dead Sea resorts. Meaningful honeymoon touches.', example: 'Amman Rotana, Petra Marriott, Mövenpick Petra' },
      { label: 'Premium', range: '$500–$1,000/night', gets: 'Landmark city hotels and the best Dead Sea resort; upgraded Wadi Rum camps.', example: 'St. Regis Amman, Kempinski Ishtar, Hyatt Regency Aqaba Ayla' },
      { label: 'Iconic & Bubble Tent', range: '$800–$2,500/night', gets: 'Mars bubble with private Bedouin dinner, butler St. Regis suite, or Ma\'In canyon hot-springs suite.', example: 'Sun City Camp Wadi Rum (Martian Bubble), Ma\'In Hot Springs canyon suite' },
    ],
    areas: [
      { name: 'Amman', bestFor: 'Arrival, culture, food, rooftops', description: 'The capital is built on seven hills. Downtown (al-balad) holds the Roman theatre and Citadel; Jebel Amman and Abdoun are the leafy residential quarters with the best restaurants and hotels. 1–2 nights on arrival is perfect.' },
      { name: 'Dead Sea', bestFor: 'Spa, float, sunset, wellness', description: '45 min from Amman, 430m below sea level. A string of resorts (Kempinski Ishtar, Mövenpick, Hilton) share the eastern (Jordanian) shore. 2 nights is the sweet spot.' },
      { name: 'Petra / Wadi Musa', bestFor: 'The big sightseeing day, history', description: 'The Nabataean rose-rock city. Petra itself takes a full day plus a half-day for the Monastery hike. Wadi Musa is the service town at the gate. 2 nights minimum.' },
      { name: 'Wadi Rum', bestFor: 'Desert romance, bubble tents, 4x4 adventure', description: 'Protected UNESCO wilderness of red-rock mesas and rolling dunes. Bedouin camps range from rustic goat-hair tents to transparent bubble domes. 1–2 nights.' },
      { name: 'Aqaba', bestFor: 'Beach, reef snorkel, relaxation', description: 'Jordan\'s small Red Sea coast. 5★ resorts (Hyatt Regency Ayla, Kempinski Aqaba) offer house-reef snorkelling and coral-reef diving. 2–3 nights to decompress after the archaeology.' },
    ],
    expertTips: [
      { tip: 'Buy the Jordan Pass before you fly', detail: 'The Jordan Pass bundles the visa fee ($56), Petra (single/double/triple-day), Jerash, Wadi Rum entry, and 40 other sites. Starting at ~$100 it saves real money. Print a paper copy — not all gates scan phones cleanly.' },
      { tip: 'Book Petra by Night on a Monday, Wednesday, or Thursday', detail: 'The Siq is illuminated by 1,500 candles and a Bedouin flute player performs at the Treasury. It\'s touristy but still genuinely romantic. Skip Friday (locals only) and weekends (very crowded). Tickets $22/person.' },
      { tip: 'Drive yourself between destinations', detail: 'Jordan is compact (Amman → Petra is 3h; Petra → Wadi Rum 1h45). Roads are excellent. Rent at Queen Alia airport. International driving permit accepted. Fuel is $1.30/litre — cheaper than Europe.' },
      { tip: 'Request a dead-Sea-view suite with a sunset balcony', detail: 'Sunset over the Dead Sea — the mountains of the West Bank silhouetted behind the salt flats — is a colour palette you\'ll photograph forever. Suites on the south side of Kempinski Ishtar or Ma\'In get the best angle.' },
      { tip: 'Tip in local cash, generously', detail: 'Dinars (JOD) is the only accepted tipping currency. 3–5 JOD for camp staff, 5–10 JOD for your Wadi Rum Bedouin driver, 15–20 JOD per couple for multi-day guides. ATMs at Queen Alia airport are reliable.' },
    ],
    packing: [
      { item: 'Sturdy closed hiking shoes', why: 'Petra is 8–12 km of stone steps, sand, and loose gravel. The Monastery hike alone is 900 steps. Sandals and trainers are insufficient.' },
      { item: 'Modest layers (shoulders + knees)', why: 'Jordan is Muslim-majority; respectful dress outside resorts is expected. A lightweight long-sleeve shirt and a scarf/pashmina cover every situation from mosques to Petra\'s sun.' },
      { item: 'Quick-dry swim shorts', why: 'Dead Sea float will destroy regular swimwear — the salt is merciless. Bring something you\'re willing to retire.' },
      { item: 'Warm fleece and beanie', why: 'Desert nights in Wadi Rum drop to 5–10°C even in spring/autumn. Petra dawn in March is cold. Layering is essential.' },
      { item: 'Reef-safe sunscreen and after-sun', why: 'Petra has no shade; Wadi Rum has less. SPF 50+ mandatory. After-sun with aloe is a lifesaver at day\'s end.' },
    ],
    guide: {
      getting: 'Fly to Amman Queen Alia International (AMM) on Royal Jordanian (direct 5h London, 11h NYC), British Airways, Lufthansa, Emirates (via Dubai), Turkish Airlines (via Istanbul). Aqaba (AQJ) is served by easyJet, Ryanair, and Royal Jordanian from European hubs — a good hack if starting at the beach. Overland from Israel at Sheikh Hussein (north) or Aqaba (south) borders — visa-on-arrival available with a Jordan Pass.',
      where: 'Classic 7-night itinerary: 2 nights Amman (Rotana or St. Regis) → 2 nights Dead Sea (Kempinski Ishtar) → 2 nights Petra (Mövenpick or Marriott) → 1 night Wadi Rum (Sun City bubble tent). For 10 nights, add 3 at Aqaba (Hyatt Regency Ayla). Private driver for the whole trip: $600–$900 for 7 days — genuinely better than driving yourself for a honeymoon.',
      when: 'March–May and September–November are the two ideal windows. Temperatures sit in the 18–26°C range, Petra is walkable at any time of day, desert nights are cool but not freezing, and the Dead Sea is warm. Avoid June–August (Petra heat is dangerous, 40°C+) and December–February (Amman snow possible, Petra cold at dawn).',
    },
    localFood: 'Mansaf (lamb with jameed — fermented-yoghurt sauce — over rice, Jordan\'s national dish, eaten with the right hand); mezze spreads (hummus, mutabal, tabbouleh, kibbeh, sambousek); zarb (Bedouin underground-oven lamb in Wadi Rum); knafeh (shredded-phyllo and cheese pastry drenched in rose syrup, Nablus-style is the holy grail); makloubeh (upside-down rice dish); shawarma and falafel from downtown Amman hole-in-the-walls; Dead Sea salt-cured dates at Sufra in Amman; Arabic coffee (qahwa) with cardamom and a fresh mint tea to finish. Jordanian wine (Jordan River from Mount Nebo vineyards) is a pleasant surprise.',
    currency: 'Jordanian Dinar (JOD) — pegged at 1 JOD ≈ $1.41. Cards widely accepted; carry 50–100 JOD cash for tips and rural taxis.',
    language: 'Arabic is official; English is widely spoken at hotels, restaurants, and tourist sites. Road signs are bilingual.',
    timezone: 'UTC+3 (no daylight saving as of 2022)',
  },

  'iceland': {
    hero: '/images/hotels/deplar-farm-fljot-valley-iceland/hero.webp',
    tagline: 'Northern lights from a lava-field suite, a geothermal lagoon swim at dawn, and the most cinematic honeymoon landscape on earth.',
    intro: 'Iceland is the honeymoon that feels borrowed from another planet. Within a single week you can soak in a private geothermal lagoon carved into 800-year-old lava, watch the aurora ripple green and violet from the bed of a glass-walled suite, ride an Icelandic horse through fields of purple lupine under the midnight sun, and stand alone at the rim of a waterfall no tour bus can reach. The luxury scene has matured fast — The Retreat at Blue Lagoon, Deplar Farm, Torfhús, Hotel Rangá — and now delivers Scandinavian understatement at world-class levels. Dining at Moss, Óx, and Dill is genuinely Michelin-tier. Iceland is the rare destination that is as spectacular in January (northern lights, snowy lava fields) as in July (midnight sun, hiking, puffins). Book either.',
    bestTime: 'Jun–Aug (midnight sun) + Oct–Mar (northern lights)',
    flightFrom: '3h from London, 6h from NYC',
    topExperience: 'Northern Lights & Geothermal Spa',
    perfectFor: [
      'Couples who dream of aurora borealis from their own bed',
      'Honeymooners who want adventure (ice caves, glaciers, horses) and ultra-luxury spa in one trip',
      'Design-led travellers — Icelandic architecture is extraordinary',
      'Couples who want short-haul (from Europe) or medium-haul (from the US East Coast) adventure',
      'Photographers — every 20 minutes of driving reveals a new photographable landscape',
    ],
    skipIf: [
      'You need guaranteed warm beach weather — average summer is 13°C',
      'You\'re working with a tight budget — Iceland is among the world\'s most expensive destinations',
      'You want crowded nightlife and big-city culture',
      'You\'re prone to seasonal depression and travel in January — daylight is only 4–5 hours',
    ],
    experiences: [
      {
        icon: '🌋',
        title: 'Private Retreat Lagoon Ritual',
        description: 'The Retreat at Blue Lagoon\'s suite-guest-only private lagoon is the quietest, most romantic geothermal soak in Iceland. Floating weightless in 38°C mineral water, silica mask on, glass of Champagne to hand, under a bruise-violet sky is one of the great spa moments in travel.',
        cost: 'Retreat suite from $1,400/night full access; day-guest Retreat Spa $200/person',
        tip: 'Stay the night. The day-guest Retreat is lovely but the suite-guest lagoon at 10pm after everyone else leaves is a completely different experience.',
      },
      {
        icon: '🌌',
        title: 'Northern Lights from Bed',
        description: 'Hotel Rangá runs an in-house astronomer and a 24/7 aurora wake-up-call service; Deplar Farm\'s remote Troll Peninsula location means less light pollution than almost anywhere in Iceland. October–March, probability is high if you stay ≥3 nights and are flexible about timing.',
        cost: 'Rangá wake-up service complimentary; a private aurora hunt from Rangá $350–$500/couple',
        tip: 'Three nights minimum — Icelandic weather is moody and you need multiple chances. Check the aurora-forecast app Vedur daily.',
      },
      {
        icon: '🐎',
        title: 'Icelandic Horse Ride at Torfhús',
        description: 'Torfhús Retreat keeps a stable of 32 Icelandic horses — a small, ancient breed unique to the island with a fifth gait (tölt) that makes for an unbelievably smooth canter. A 2-hour trek through the Golden Circle lava fields and rivers with one of Torfhús\'s trainers is the defining Iceland summer experience.',
        cost: 'Hotel-guest rate ~$250/couple',
        tip: 'Even if you\'ve never ridden — Icelandic horses are small, gentle, and surefooted. Ask for a tölt lesson.',
      },
      {
        icon: '🧊',
        title: 'Ice Cave at Vatnajökull',
        description: 'Every October–March, Vatnajökull (Europe\'s largest glacier) carves new electric-blue crystal ice caves inside itself. A guided 2h visit via Jökulsárlón is the single most photographable 90 minutes in Iceland.',
        cost: '$250–$400/person for small-group guided tour',
        tip: 'Book with Local Guide or Guide to Iceland only — larger bus operators cannot access the best caves. Wear proper crampons (provided) and bring an extra battery for the cold.',
      },
      {
        icon: '🍽️',
        title: 'Dinner at Moss Restaurant',
        description: 'Michelin Plate, carved into the Blue Lagoon\'s lava field, Moss is Iceland\'s defining fine-dining room. A 7-course tasting of langoustine, arctic char, lamb from the chef\'s home farm, and moss-cured chocolate mirrors the landscape outside the window.',
        cost: '7-course tasting $220/person; wine pairing $120',
        tip: 'Book the 6pm seating for the last light over the lava. Ask for a window table; the lagoon view at dusk is extraordinary.',
      },
    ],
    months: [
      { month: 'Jan', weather: 'Cold -5°C to 2°C, 4–5h daylight', emoji: '❄️', crowds: 'Low', price: 'Mid', verdict: 'Best aurora probability, ice caves open' },
      { month: 'Feb', weather: 'Similar to Jan, lengthening daylight', emoji: '❄️', crowds: 'Low', price: 'Mid', verdict: 'Sweet spot — aurora + more usable days' },
      { month: 'Mar', weather: '-2°C to 4°C, ~11h daylight', emoji: '❄️', crowds: 'Low', price: 'Mid', verdict: 'Last aurora month; ice caves close end-March' },
      { month: 'Apr', weather: '2–6°C, landscape thawing', emoji: '🌦', crowds: 'Low', price: 'Low', verdict: 'Awkward shoulder — no aurora, no midnight sun' },
      { month: 'May', weather: '6–10°C, greening landscape', emoji: '🌸', crowds: 'Moderate', price: 'Mid', verdict: 'Excellent value, lambs born, roads opening' },
      { month: 'Jun', weather: '9–13°C, midnight sun begins', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Best summer month — long days, wildflowers' },
      { month: 'Jul', weather: '10–14°C, peak midnight sun', emoji: '☀️', crowds: 'Peak', price: 'Highest', verdict: 'Perfect but pricey and busy' },
      { month: 'Aug', weather: '9–13°C', emoji: '☀️', crowds: 'Peak', price: 'Highest', verdict: 'Last summer month — puffins leaving late Aug' },
      { month: 'Sep', weather: '6–10°C, autumn colours', emoji: '🍂', crowds: 'Moderate', price: 'Mid', verdict: 'Aurora returns — magical shoulder' },
      { month: 'Oct', weather: '2–8°C, first snow possible', emoji: '🌦', crowds: 'Moderate', price: 'Mid', verdict: 'Excellent — aurora + accessible' },
      { month: 'Nov', weather: '-2°C to 4°C', emoji: '❄️', crowds: 'Low', price: 'Mid', verdict: 'Strong aurora month, ice caves open' },
      { month: 'Dec', weather: '-4°C to 2°C, Christmas markets', emoji: '🎄', crowds: 'High', price: 'High', verdict: 'Festive and aurora-rich but short days' },
    ],
    budgetTiers: [
      { label: 'Mid-Luxury', range: '$400–$800/night', gets: 'Boutique design hotel in Reykjavík or aurora-friendly 4★ in the south. Full breakfast; limited spa.', example: 'Reykjavik Edition, Hotel Rangá, Hotel Búðir, ION Adventure Hotel' },
      { label: 'Premium', range: '$800–$2,000/night', gets: 'Iconic Blue Lagoon-area suite with private lagoon access or turf-cottage retreat with outdoor tub.', example: 'Silica Hotel at Blue Lagoon, Torfhús Retreat' },
      { label: 'Ultra-Luxury', range: '$1,500–$6,000/night', gets: 'Lava-field suite at The Retreat, or Eleven Experience heli-skiing ranch with full-board.', example: 'The Retreat at Blue Lagoon, Deplar Farm Fljót Valley' },
    ],
    areas: [
      { name: 'Reykjavík', bestFor: 'Arrival, dining, design shopping', description: 'Iceland\'s charming pocket-sized capital (population ~130,000). Harbour-front, walkable centre, excellent restaurants (Dill, Óx, Sumac). 1–2 nights is ample.' },
      { name: 'Blue Lagoon / Reykjanes', bestFor: 'Geothermal spa luxury, arrival or departure base', description: 'The lava-field spa zone 20 min from Keflavík airport. The Retreat and Silica are the two luxury stays; Blue Lagoon itself is a ~90-min spa visit.' },
      { name: 'Golden Circle / South Coast', bestFor: 'Waterfalls, geysers, Þingvellir, black beaches', description: 'The classic first-visit loop, 3h drive. Thingvellir National Park, Geysir, Gullfoss waterfall, Seljalandsfoss, Reynisfjara black beach. Torfhús and ION are the luxury bases.' },
      { name: 'Snæfellsnes Peninsula', bestFor: 'Dramatic coastal scenery, "Iceland in miniature"', description: 'West of Reykjavík, a 2h drive. Hotel Búðir beside the iconic black church, the Kirkjufell "pyramid" mountain, lava tubes. 1–2 nights.' },
      { name: 'North Iceland / Tröllaskagi', bestFor: 'Remote ultra-luxury, heli-skiing, aurora', description: 'A 1h flight + drive from Reykjavík. Deplar Farm on the Fljót Valley is the remote luxury here — extremely private, activity-focused. 4+ nights.' },
    ],
    expertTips: [
      { tip: 'Stay ≥3 nights for aurora probability', detail: 'Northern lights are a weather game. Any single night might be cloudy or low-KP. Three nights (winter only) is the minimum for a realistic chance; five nights is safer. Hotel Rangá\'s astronomer team will call your room the instant visible aurora appears.' },
      { tip: 'Rent a 4x4 in winter — not a regular car', detail: 'Icelandic weather changes in minutes. In winter (Oct–Apr), a 4WD with studded tyres is non-negotiable for any driving outside the Reykjanes peninsula. Budget $200–$350/day; book well ahead.' },
      { tip: 'The Retreat\'s private lagoon is the winning move', detail: 'The public Blue Lagoon is lovely but busy. Suite guests at The Retreat get an exclusive mineral-rich private lagoon with dramatically fewer people. A single night in a Retreat suite is worth more than three days of public-lagoon visits.' },
      { tip: 'Reykjavík dining books 8–12 weeks ahead', detail: 'Dill, Óx, Moss, Sumac — the top tables fill fast, especially December–March. Book before you fly. A Sunday reservation at Dill is harder than a London Michelin 3★.' },
      { tip: 'Alcohol is expensive and duty-free saves real money', detail: 'Icelandic tax on alcohol is punishing ($20 for a glass of house wine). Stock duty-free at Keflavík arrivals — the allowance is generous and hotels generally don\'t charge corkage in the room.' },
    ],
    packing: [
      { item: 'Waterproof hiking boots', why: 'Non-negotiable. Iceland is wet underfoot year-round. Seljalandsfoss, Reynisfjara, and even Blue Lagoon paths require grip.' },
      { item: 'Merino base layers', why: 'Temperature swings are dramatic. Merino regulates from 0°C to 20°C inside heated restaurants. Bring two sets — one heavyweight, one mid.' },
      { item: 'Hard-shell waterproof jacket', why: 'Icelandic weather is wind-driven rain. A Gore-Tex jacket is more important than a fat down jacket.' },
      { item: 'Swimwear and microfibre towel', why: 'You will swim daily — geothermal pools are everywhere, from the Blue Lagoon to small village baths. Most hotels supply towels; a microfibre one is handy for day excursions.' },
      { item: 'Eye mask (for summer)', why: 'Midnight sun Jun–Aug means the sky stays bright at 1am. An eye mask is the difference between sleep and misery in most hotel rooms.' },
    ],
    guide: {
      getting: 'Fly to Keflavík International (KEF) — 45 min from Reykjavík. Icelandair (3h from London, 5–6h from NYC/Boston), Play, British Airways, easyJet, and United all serve KEF. The airport is 20 min from the Blue Lagoon — many honeymooners fly in, spa, and sleep at The Retreat before even going to Reykjavík. A rental-car desk at KEF is the norm; the Flybus shuttle is $40 to Reykjavík if not renting.',
      where: 'Classic 7-night itinerary: 1 night Keflavík-area (The Retreat) → 2 nights Reykjavík (Edition) → 3 nights South Coast/Golden Circle (Torfhús + Rangá) → 1 night pre-departure Blue Lagoon (Silica). For aurora-focused winter: 4 nights Rangá/Torfhús + 2 nights Blue Lagoon. For summer adventure: 4 nights Deplar Farm + 2 nights Retreat.',
      when: 'Two very different honeymoons, both spectacular. June–August delivers 24h daylight, wildflowers, puffins, accessible highlands, and warmest temperatures (9–14°C). October–March gives you the aurora, ice caves, snow-dusted lava, and dramatically cheaper midweek rates — but 4–7 hours of daylight and weather that can close roads. April–May and September are "shoulder" — less spectacular but genuinely good value.',
    },
    localFood: 'Langoustine (humar, Icelandic lobster — sweeter than Atlantic); arctic char (wild-caught, often served with pickled rhubarb); lamb (roaming, free-grazing on wild herbs, arguably the best in Europe); skyr (thick yoghurt-like dairy for breakfast); rúgbrauð (traditional dark rye baked with geothermal steam); fermented shark (hákarl — infamous Icelandic bragging food, not for honeymoon); Brennivín (caraway schnapps); Omnom chocolate from Reykjavík; craft beer from Borg, Einstök, and Kaldi. The Reykjavík fine-dining scene — Dill, Óx, Moss, Sumac, Matur og Drykkur — is genuinely world-class.',
    currency: 'Icelandic Króna (ISK) — one of the world\'s smallest currencies. Iceland is almost cashless; cards accepted everywhere, even public toilets.',
    language: 'Icelandic is official; English is universal at hotel, restaurant, and guide level.',
    timezone: 'UTC+0 year-round (no daylight saving)',
  },

  'sardegna': {
    hero: '/images/hotels/hotel-cala-di-volpe-sardegna/hero.webp',
    tagline: 'Costa Smeralda glamour, Tyrrhenian turquoise, and the most jealously-guarded beaches in the Mediterranean.',
    intro: 'Sardinia is the Mediterranean honeymoon that rewards those who know. The Costa Smeralda in the northeast — conceived in 1962 by the Aga Khan and still quietly run by his Foundation — is the most exclusive stretch of beach in Europe: granite coves hiding Hermès-pink sand, turquoise water as transparent as any in the Indian Ocean, and a roster of hotels (Cala di Volpe, Pitrizza, Romazzino) that have been entertaining European royalty and Hollywood since Kennedy\'s era. Beyond the Smeralda, the island delivers proper Italian substance: thousands of nuraghi (3,500-year-old bronze-age stone towers), the cliffs of Baunei, the beaches of San Teodoro, and the old Genoese quarter of Alghero. Sardinia is bigger than Sicily and half as crowded — and in the shoulder months, it is achingly beautiful.',
    bestTime: 'Jun–Sep',
    flightFrom: '2h from northern Europe',
    topExperience: 'Costa Smeralda Glamour',
    perfectFor: [
      'Beach-first honeymooners who want Mediterranean clarity matching the Caribbean',
      'Couples who value quiet exclusivity — Costa Smeralda is discreet wealth, not showy',
      'Italian food and wine lovers — Sardinian cuisine is extraordinary and underrated',
      'Sailors and charter-loving couples — the Maddalena archipelago is a dream',
      'Those who want Europe\'s most beautiful beaches without Caribbean flight hours',
    ],
    skipIf: [
      'You\'re budget-conscious for July/August — peak season rates on Costa Smeralda are extreme',
      'You want overwater-style architecture — Sardinia is beaches and cliffs, not water villas',
      'You\'re travelling November–April — most Costa Smeralda hotels close',
      'You want nightlife rivalling Ibiza — Sardinia is elegant rather than electric',
    ],
    experiences: [
      {
        icon: '🏖️',
        title: 'La Maddalena Archipelago Boat Day',
        description: 'The Maddalena is a protected marine park of granite islets and white-sand beaches just off the Costa Smeralda. Charter a classic Riva or a gulet, anchor at Budelli\'s famous (protected) pink beach, swim off the boat at Spargi, lunch at sea — this is the definitive Sardinia day.',
        cost: 'Full-day private charter $1,500–$4,000 depending on boat',
        tip: 'Book via Yacht Club Costa Smeralda or through your hotel concierge — public ferries access the islands but you miss the romance of a private anchor.',
      },
      {
        icon: '🍴',
        title: 'Dinner at Cala di Volpe Grill',
        description: 'The Cala di Volpe Grill has been the Costa Smeralda dinner address since the 1960s. Dover sole for two, 100-bottle Sardinian cellar (Vermentino di Gallura is the local queen), and a terrace that fills with the island\'s summer crowd. The dress code is "Costa Smeralda elegant" — linen, not tees.',
        cost: 'Dinner for two with wine $300–$500',
        tip: 'Reserve the terrace, not the interior. Ask for Table 12 (the corner overlooking the pool).',
      },
      {
        icon: '⛵',
        title: 'Sunset Sail from Porto Cervo',
        description: 'Porto Cervo is the Costa Smeralda\'s yacht harbour — a picture-perfect marina of $200m superyachts. A 3-hour golden-hour sail on a classic wooden day-boat with prosecco and antipasti is the low-key-romantic counter-point to the big boats.',
        cost: '$400–$800 per couple for sunset charter',
        tip: 'Sail towards Capo Ferro lighthouse for the best angles on the coast; return just after sunset as the lights come on in Porto Cervo.',
      },
      {
        icon: '🧗',
        title: 'Cala Goloritzé Trek (East Coast)',
        description: 'Cala Goloritzé is one of the most photographed beaches in Italy — 900-step hike down a canyon, then a tiny crescent of white pebbles and impossibly blue water with the 148m Aguglia spire overhead. A 2h drive from the Smeralda; worth a day trip with an early start.',
        cost: 'Free; parking fee $8; add private boat return $40/person',
        tip: 'Hike down at 7am to beat the midday heat. Return by boat back to Santa Maria Navarrese — the cliffs from the water are extraordinary.',
      },
      {
        icon: '🍷',
        title: 'Vermentino Wine Tasting in Gallura',
        description: 'Gallura (the Costa Smeralda hinterland) is home to Sardinia\'s most exciting wines — Vermentino di Gallura DOCG is a mineral, citrus-driven white that pairs miraculously with the local seafood. Cantina Capichera, Surrau, and Siddùra all do formal tastings; a half-day visit is the perfect non-beach afternoon.',
        cost: '$60–$150 per couple for private tasting + lunch',
        tip: 'Siddùra Winery in Luogosanto combines tasting with a 15th-century stazzo (farmhouse) lunch — the total experience is unforgettable.',
      },
    ],
    months: [
      { month: 'Jan', weather: 'Cool 8–14°C, rain, most hotels closed', emoji: '🌧', crowds: 'Closed', price: 'N/A', verdict: 'Most Costa Smeralda hotels closed' },
      { month: 'Feb', weather: 'Cool 9–15°C', emoji: '🌧', crowds: 'Closed', price: 'N/A', verdict: 'Closed season' },
      { month: 'Mar', weather: 'Warming 12–17°C', emoji: '🌦', crowds: 'Closed', price: 'N/A', verdict: 'Most hotels still closed' },
      { month: 'Apr', weather: '15–20°C, spring flowers', emoji: '🌸', crowds: 'Low', price: 'Low', verdict: 'Hotels beginning to open — beach weather not quite yet' },
      { month: 'May', weather: '18–24°C, lovely', emoji: '☀️', crowds: 'Low', price: 'Mid', verdict: 'Wonderful month — warm, flowery, uncrowded' },
      { month: 'Jun', weather: '22–28°C, proper summer', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Perfect — the best pre-peak month' },
      { month: 'Jul', weather: '25–32°C', emoji: '☀️', crowds: 'Peak', price: 'Highest', verdict: 'Iconic but extreme prices and crowds' },
      { month: 'Aug', weather: '26–34°C', emoji: '🔥', crowds: 'Peak', price: 'Highest', verdict: 'Italian holiday month — avoid if possible' },
      { month: 'Sep', weather: '22–28°C, sea still warm', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Arguably the best month — warm water, thinning crowds' },
      { month: 'Oct', weather: '18–24°C, hotels closing late-month', emoji: '🍂', crowds: 'Low', price: 'Mid', verdict: 'Early October excellent; late October winding down' },
      { month: 'Nov', weather: '13–19°C', emoji: '🌧', crowds: 'Closed', price: 'N/A', verdict: 'Most hotels closed' },
      { month: 'Dec', weather: '10–15°C', emoji: '🌧', crowds: 'Closed', price: 'N/A', verdict: 'Closed season — no honeymoon option' },
    ],
    budgetTiers: [
      { label: 'Upscale Boutique', range: '$400–$900/night', gets: 'Small design-led hotel in Baja Sardinia or San Teodoro; smaller Costa Smeralda options.', example: '7Pines Resort Sardinia, Hotel L\'Ea Bianca, Baglioni Resort Sardinia, Capo d\'Orso' },
      { label: 'Premium Luxury', range: '$900–$2,500/night', gets: 'Costa Smeralda classics in shoulder season; top thalasso/beach resorts.', example: 'Hotel Romazzino, Forte Village Resort (top villa tier), Hotel Pitrizza shoulder season' },
      { label: 'Iconic & Peak', range: '$2,000–$6,000/night', gets: 'Cala di Volpe, Pitrizza, or Romazzino suites in July/August — legendary addresses, legendary prices.', example: 'Hotel Cala di Volpe (Presidential Suite), Hotel Pitrizza Executive Junior Suite' },
    ],
    areas: [
      { name: 'Costa Smeralda / Porto Cervo', bestFor: 'Ultra-luxury, celebrity-grade glamour, yacht life', description: 'The 55 km of northeast coast developed since 1962 by the Aga Khan Foundation. Cala di Volpe, Pitrizza, Romazzino. Porto Cervo marina is the social centre.' },
      { name: 'Baja Sardinia / Cannigione', bestFor: 'Beach, boutique luxury, adults-only', description: 'Just north of the Costa Smeralda proper. Quieter, slightly better value. 7Pines, L\'Ea Bianca, and the excellent sailing grounds for Maddalena day trips.' },
      { name: 'La Maddalena Archipelago', bestFor: 'Boat days, protected beaches', description: 'A national park of 62 granite islands and islets. Budelli\'s famous pink-sand beach, Spargi, Caprera. Best experienced on a full-day charter from Porto Cervo or Cannigione.' },
      { name: 'San Teodoro / East Coast', bestFor: 'Great beaches at friendlier prices', description: 'South of the Costa Smeralda, San Teodoro has some of the island\'s most beautiful beaches (La Cinta, Lu Impostu). Baglioni Resort Sardinia is the luxury anchor.' },
      { name: 'South Coast / Cagliari', bestFor: 'Year-round destination, wellness, city', description: 'The capital Cagliari and the Forte Village Resort south of it. Less "Costa Smeralda" scene; longer season and better value.' },
    ],
    expertTips: [
      { tip: 'Avoid August 1–20 at all costs', detail: 'The Italian holiday fortnight (Ferragosto) is when every Italian family heads to Sardinia. Costa Smeralda restaurants become almost impossible to book, roads to Porto Cervo gridlock, and prices are 100% above shoulder season. June and September deliver a genuinely superior honeymoon experience.' },
      { tip: 'Fly into Olbia (OLB), not Cagliari', detail: 'Olbia is 30 min from Costa Smeralda. Cagliari is a 3h drive. Unless you\'re staying at Forte Village or Chia, Olbia is the airport — direct flights from London, Paris, Milan, Rome, and seasonal from Zurich, Munich, Berlin.' },
      { tip: 'Rent a convertible for the coast road', detail: 'The SP73 connecting the coves is one of the Mediterranean\'s best drives. A small cabriolet (Fiat 500, Jeep Wrangler) is perfect; resort hotels can arrange pickup at Olbia airport. Budget $100–$200/day in season.' },
      { tip: 'Beach-club reservations are essential in high season', detail: 'The best beaches (Liscia di Vacca, Romazzino, Principe) are public but have limited parking and popular beach clubs. Reserve via your hotel or directly — walking up in August is impossible.' },
      { tip: 'Siesta is real and sacred', detail: 'Most Costa Smeralda shops and restaurants close 1–4pm. Plan accordingly: long lunches at beach clubs, then shop and dinner in Porto Cervo from 7pm. Dinner at 10pm is normal in season.' },
    ],
    packing: [
      { item: 'Dressy resort evening wear', why: 'Porto Cervo at dinner is elegant — linen suits and dresses, not tees and flip-flops. Cala di Volpe Grill and similar have real dress codes.' },
      { item: 'Reef shoes or sandals with grip', why: 'Many beaches (Principe, Li Cuncheddi) have small pebbles or rocky entries. Regular flip-flops make ingress uncomfortable.' },
      { item: 'Good snorkel mask', why: 'Maddalena water clarity is extraordinary. Hotel snorkels are often mediocre — bring your own or buy a proper one in Porto Cervo.' },
      { item: 'Proper sun hat', why: 'Sardinia sun is unforgiving. A wide-brim straw hat from the market at Olbia is both practical and photogenic.' },
      { item: 'Light layer for boat evenings', why: 'Maddalena returns after sunset get breezy. A cashmere wrap or linen shirt is essential for the sail home.' },
    ],
    guide: {
      getting: 'Fly to Olbia Costa Smeralda (OLB) — 30 min from most Costa Smeralda hotels. Direct summer flights from London (2h 45m), Paris, Milan, Rome, Munich, Zurich, Vienna; connections from NYC via Rome or Milan (~11h total). Alternative airports: Alghero (AHO) for the west coast, Cagliari (CAG) for the south. Ferries from Livorno, Genoa, Civitavecchia, and Naples if bringing a car. Most hotels arrange a chauffeur transfer from OLB — budget $80–$180 one-way.',
      where: 'Classic 7-night itinerary: 4 nights Costa Smeralda (Cala di Volpe, Pitrizza or Romazzino) → 2 nights boat-based exploring Maddalena → 1 night pre-return at L\'Ea Bianca or Baja. For shoulder-season value: 5 nights 7Pines or Baglioni + 2 nights cultural Cagliari + Forte Village. For 10 days: add 3 nights on the east coast (San Teodoro) for different beaches.',
      when: 'June and September are the sweet spot — warm enough to swim, elegant rather than frenzied, prices noticeably below peak. May and early October are gentler (excellent for non-beach honeymooners who love food and wine). Avoid July 20–August 31 unless your budget is genuinely unlimited — Costa Smeralda at peak is Ferrari-pricing.',
    },
    localFood: 'Culurgiones (hand-pinched potato-mint ravioli, a Sardinian miracle); fregola con arselle (pasta-pearl with clams); bottarga (grey-mullet caviar, shaved over spaghetti); porceddu (slow-roasted suckling pig, a Sunday feast); fresh spiny lobster from the east coast (aragosta alla Catalana); seadas (fried pastry with pecorino and honey); pane carasau (paper-thin crisp bread); mirto (myrtle-berry liqueur, local digestivo); Vermentino di Gallura white wine; Cannonau red wine (one of the world\'s highest polyphenol content, genuinely). Sardinian cuisine is rustic, ingredient-led, and underrated — a revelation.',
    currency: 'Euro (EUR). Cards accepted at hotels and restaurants; carry some cash for small beach-bar purchases and tips.',
    language: 'Italian is official; Sardinian (Sardo) is spoken in villages. English is widely spoken in hotels and tourist areas.',
    timezone: 'UTC+1 (CET); UTC+2 during daylight saving (Mar–Oct)',
  },

  'argentina': {
    hero: '/images/hotels/eolo-lodge-patagonia-argentina/hero.webp',
    tagline: 'Tango in Buenos Aires, glaciers in Patagonia, and vineyards at the foot of the Andes — the most varied honeymoon in South America.',
    intro: 'Argentina is the honeymoon that delivers three distinct trips in one country. Begin in Buenos Aires, the most beautiful Spanish-speaking city in the world — a combination of Paris architecture, Rome\'s passion, and the raw nocturnal energy of tango — staying in Recoleta at the Park Hyatt Palacio Duhau or the Alvear Palace. Fly two hours west to Mendoza and the Uco Valley, where your private villa at Cavas Wine Lodge or Vines Resort sits between Malbec vines and the snow-capped Andes. Then south to Patagonia — El Calafate\'s advancing-glaciers, El Chaltén\'s granite spires, Bariloche\'s alpine lakes — for the honeymoon\'s adventure arc. The exchange rate remains advantageous for international travellers; hotels quote in USD and service at this level is a genuine bargain by European or Caribbean standards.',
    bestTime: 'Nov–Mar (Patagonia) & Oct–Dec (Mendoza harvest)',
    flightFrom: '12–14h from Europe',
    topExperience: 'Wine & Wilderness',
    perfectFor: [
      'Adventurous couples who want hiking, glaciers, and wine in one honeymoon',
      'Wine-lovers — Mendoza is the world\'s fourth-largest wine region and among its best-valued',
      'Culture-first travellers — Buenos Aires is the Paris of the South',
      'Long-haul romantics who want real seclusion in Patagonia without safari prices',
      'Food-obsessed honeymooners — Argentine beef, Francis Mallmann, and a dazzling BA dining scene',
    ],
    skipIf: [
      'You need a beach honeymoon — Argentina has them but they\'re cold-water Atlantic',
      'You have only 7 days — 10–14 nights minimum to do BA + Mendoza + Patagonia justice',
      'You travel June–August — Patagonia winter closes most lodges; BA cold and grey',
      'You\'re not comfortable with long internal flights (BA to El Calafate is 3h30)',
    ],
    experiences: [
      {
        icon: '🥩',
        title: 'Milonga Dinner at El Mercado Faena',
        description: 'El Mercado at Faena is not just a restaurant — it\'s theatre. Open-fire grilling in the centre of the room, a 40-page Argentine wine list, and a late-night tango show at the adjoining Rojo Tango. The definitive Buenos Aires dinner for a honeymoon.',
        cost: '$120–$200/couple at El Mercado; Rojo Tango dinner-show $380/couple',
        tip: 'Book Rojo Tango for a Friday or Saturday night, at 8:30pm with the dinner package. Sit in the first or second row — the dancers are feet away.',
      },
      {
        icon: '🍇',
        title: 'Uco Valley Winery Lunch at Vines',
        description: 'The Uco Valley is Mendoza\'s high-altitude (1,100 m) premium wine frontier. Vines Resort\'s Siete Fuegos restaurant — designed by Francis Mallmann — is a seven-fire open-air kitchen producing the world\'s most theatrical Argentine beef. The tasting menu with vineyard walk is the definitive Uco afternoon.',
        cost: 'Lunch with wine pairing $180–$260/couple',
        tip: 'Go for the 1pm seating so you have full Andes daylight. Request a vineyard tour before lunch (free for Vines guests, ~$50 for visitors).',
      },
      {
        icon: '🧊',
        title: 'Perito Moreno Glacier Walk',
        description: 'One of the only advancing glaciers on the planet — 5 km wide, 70 m high, calving ice into Lake Argentino with cannon-fire cracks. A 90-min "minitrekking" walk on the ice with crampons is the signature El Calafate day.',
        cost: 'Minitrekking $120/person; "Big Ice" 4h version $220/person',
        tip: 'Eolo Lodge is 45 min from the park — they run a private vehicle with a guide, avoiding the tourist-bus experience. Book the Big Ice if you\'re fit.',
      },
      {
        icon: '⛰️',
        title: 'Laguna de los Tres Hike to Fitz Roy',
        description: 'Mount Fitz Roy (the Patagonia clothing logo) towers 3,405m above El Chaltén. The day hike to Laguna de los Tres (22 km round trip) ends at a glacial lake beneath the granite spires. One of the great Patagonian days.',
        cost: 'Free, guided options $150/couple',
        tip: 'Explora Patagonia\'s guides do this hike with the classic "false summit at dawn" approach — catching the 6am first-light on Fitz Roy is the defining honeymoon photo.',
      },
      {
        icon: '🎭',
        title: 'Teatro Colón Private Tour',
        description: 'Buenos Aires\' Teatro Colón is consistently ranked among the world\'s three greatest opera houses — acoustics comparable to La Scala, Belle Époque grandeur, and a visitable stagehouse. A private backstage tour at 11am is a beautiful non-dinner afternoon activity.',
        cost: 'Private guided tour $45/person; evening opera tickets $50–$400',
        tip: 'If visiting March–November (season), try to catch a performance. The Palcos Balcón (balcony boxes) have the most romantic angles and are surprisingly affordable.',
      },
    ],
    months: [
      { month: 'Jan', weather: 'BA hot 30°C, Patagonia perfect 18°C', emoji: '☀️', crowds: 'Peak', price: 'Highest', verdict: 'Patagonia peak — book 6 months ahead' },
      { month: 'Feb', weather: 'BA hot, Patagonia warm', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Excellent Patagonia, BA is empty (holidays)' },
      { month: 'Mar', weather: 'BA softening 25°C, autumn begins', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'The best all-round month' },
      { month: 'Apr', weather: 'BA mild, Mendoza harvest', emoji: '🍇', crowds: 'Moderate', price: 'Mid', verdict: 'Mendoza peak — wine harvest energy' },
      { month: 'May', weather: 'BA cool, Patagonia closing', emoji: '🍂', crowds: 'Low', price: 'Low', verdict: 'Patagonia lodges starting to close; BA great value' },
      { month: 'Jun', weather: 'BA cold/grey, Patagonia winter', emoji: '❄️', crowds: 'Closed', price: 'Low', verdict: 'Avoid Patagonia; ski Bariloche only' },
      { month: 'Jul', weather: 'BA cold 10°C, Bariloche ski season', emoji: '❄️', crowds: 'Moderate', price: 'Mid', verdict: 'Skiing honeymoons only; most hotels closed' },
      { month: 'Aug', weather: 'Similar to Jul', emoji: '❄️', crowds: 'Moderate', price: 'Mid', verdict: 'Cold throughout — only ski-focused' },
      { month: 'Sep', weather: 'BA softening, spring begins', emoji: '🌸', crowds: 'Low', price: 'Low', verdict: 'Quiet month — BA excellent value' },
      { month: 'Oct', weather: 'Mendoza peak spring', emoji: '☀️', crowds: 'Moderate', price: 'Mid', verdict: 'Uco Valley stunning — wine in bloom' },
      { month: 'Nov', weather: 'Patagonia reopening, BA warm', emoji: '☀️', crowds: 'Moderate', price: 'Mid', verdict: 'Shoulder value window — highly recommended' },
      { month: 'Dec', weather: 'BA hot, Patagonia peak', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Patagonia peak begins; avoid BA Christmas week' },
    ],
    budgetTiers: [
      { label: 'Upscale', range: '$300–$600/night', gets: 'Excellent 5★ in Buenos Aires; upper-mid Mendoza; mid-range Patagonia.', example: 'Alvear Palace, Faena, Cavas Wine Lodge, Llao Llao Resort Bariloche' },
      { label: 'Premium', range: '$600–$1,500/night', gets: 'Landmark BA palaces, top Mendoza villas, and premium Patagonia lodges.', example: 'Palacio Duhau Park Hyatt, Vines Resort & Spa, Explora Patagonia' },
      { label: 'Ultra-Luxury / Patagonia', range: '$1,200–$4,500/night', gets: 'Relais & Châteaux estancias, private Patagonia guiding, full-board ultra-luxury.', example: 'Eolo Lodge Patagonia, Explora Patagonia El Chaltén, Cavas Wine Lodge (full-board)' },
    ],
    areas: [
      { name: 'Buenos Aires — Recoleta & Puerto Madero', bestFor: 'City culture, dining, tango', description: 'Recoleta is aristocratic Paris-on-the-Plate (Alvear, Palacio Duhau); Puerto Madero is the modern docklands (Faena). 3 nights is the baseline.' },
      { name: 'Mendoza / Luján de Cuyo', bestFor: 'Wine, Andes, private villa', description: 'Argentina\'s Malbec heartland. Luján de Cuyo is the classic subregion closest to Mendoza city — easier logistics. Cavas Wine Lodge, Entre Cielos. 3–4 nights.' },
      { name: 'Uco Valley', bestFor: 'High-altitude wine, remote luxury', description: '1h30 south of Mendoza, in the Andean foothills at 1,100m. Higher-end, more remote, more architectural. Vines, The Vines, El Manzano. 3 nights.' },
      { name: 'Patagonia — El Calafate', bestFor: 'Perito Moreno Glacier, estancia luxury', description: 'Gateway to Los Glaciares National Park. A 3h30 flight from Buenos Aires. Eolo Lodge is the defining estancia. 3–4 nights.' },
      { name: 'Patagonia — El Chaltén & Bariloche', bestFor: 'Hiking Fitz Roy, Alpine lakes', description: 'El Chaltén (Mount Fitz Roy base, Explora) is for hikers; Bariloche\'s Nahuel Huapi lake district (Llao Llao) is Alpine-resort-style with a longer season.' },
    ],
    expertTips: [
      { tip: 'Pay in USD cash where possible', detail: 'Argentina\'s economy runs on two exchange rates — the official rate and the "blue" (unofficial) rate, typically 40–60% more pesos per dollar. Most hotels quote in USD. Bring fresh $100 bills in good condition for personal expenses; exchange at legitimate cuevas (not street changers). Credit-card "MEP" rate has improved and is now usable too.' },
      { tip: 'Internal flights are essential — book Aerolíneas Argentinas early', detail: 'BA to El Calafate is 3h30, to Mendoza 1h45, to Bariloche 2h15. Flights often sell out in Jan–Feb peak. Book via aerolineas.com.ar as soon as you\'ve committed dates. Schedule changes are frequent; always arrive the day before onward travel.' },
      { tip: 'Dinner at 9pm is early', detail: 'Argentine dining runs 9:30pm–midnight. Making an 8pm reservation marks you as a tourist and many restaurants aren\'t even open. Adjust sleep schedule: coffee + media-tarde (afternoon snack) at 5pm, dinner at 9:30pm, bed at 1am.' },
      { tip: 'Book Rojo Tango (Faena) for the definitive tango show', detail: 'Skip the touristy La Ventana and Esquina Carlos Gardel. Rojo Tango is held at Faena\'s exquisite Piano Nobile — small, intimate, Champagne-fuelled, and the caliber of dancing is international. $380/couple with dinner.' },
      { tip: 'Patagonia: 4 nights minimum, 6 is the sweet spot', detail: 'Patagonian weather is wild — any given day can deliver every season. With only 2 nights at a lodge, your "glacier day" might be a wind-battered washout. 4 nights at Eolo + 2 nights Explora Chaltén gives margin for weather and ensures 2–3 standout days of activity.' },
    ],
    packing: [
      { item: 'Tango-appropriate evening wear', why: 'Buenos Aires dining and tango is dressy — a well-cut dress, elegant shoes, proper suit. Think Madrid, not Miami.' },
      { item: 'Proper hiking boots', why: 'Patagonia: Fitz Roy day hikes, Perito Moreno crampon walks. Runners are insufficient. Ankle support required.' },
      { item: 'Waterproof shell jacket', why: 'Patagonian weather changes hourly — wind-driven rain is universal. A Gore-Tex shell over merino base layers is the formula.' },
      { item: 'Sunscreen SPF 50+ and polarised sunglasses', why: 'Patagonian UV is extreme due to ozone thinning and snow reflection. Sunburn in 20 minutes is routine.' },
      { item: 'Compact binoculars', why: 'Condor spotting in Patagonia, wildlife at estancias, and birdwatching in Mendoza vineyards. Slim pair transforms days.' },
    ],
    guide: {
      getting: 'Fly to Buenos Aires Ezeiza (EZE) — direct 13h from London on British Airways, 11h from Madrid on Iberia, 10h30 from Miami/NYC on American and Aerolíneas. From Australia via Santiago (SCL) on LATAM. Domestic transfers from Aeroparque Jorge Newbery (AEP): Mendoza 1h45, El Calafate 3h30, Bariloche 2h15. Always build 90+ minutes layover at AEP — terminals are confusing.',
      where: 'Classic 12-night honeymoon: 4 nights Buenos Aires (Palacio Duhau or Alvear) → 3 nights Mendoza/Uco (Cavas or Vines) → 4 nights Patagonia (Eolo El Calafate) → 1 night BA to fly home. For 10 nights: 3/3/3/1. For 14 nights: add Bariloche for 3 nights between Mendoza and El Calafate. Private driver + internal flights combo is the cleanest logistics.',
      when: 'November to March is the Patagonia window — summer in the Southern Hemisphere, lodges fully open, hiking conditions best. December to February is peak (and priciest). October and November are excellent value with better availability. Mendoza is best October–December (spring bloom) and March–April (harvest). Buenos Aires is best March–May (autumn) and September–November (spring). Avoid June–August unless skiing Bariloche.',
    },
    localFood: 'Bife de chorizo and ojo de bife (grilled sirloin and ribeye, the gold standard); provoleta (grilled provolone wheel); empanadas salteñas (beef or cheese); chimichurri; humita en chala (corn tamales); Patagonian lamb (slow-roasted on iron crosses — al asador); dulce de leche with everything; alfajores (dulce-de-leche sandwich cookies, Havanna is the mass-market brand); medialunas (Argentine croissants) at every café; a cortado with 3 sugars at 5pm; Mendoza Malbec at every meal; Francis Mallmann\'s Siete Fuegos open-fire cooking is a revelation. The BA fine-dining scene (Don Julio, Anchoíta, Mengano, Tegui) is world-class.',
    currency: 'Argentine Peso (ARS) — highly inflationary. Most honeymoon hotels and restaurants quote in USD and accept USD cash or credit card at the MEP rate. Bring fresh, undamaged $100 bills for personal expenses.',
    language: 'Spanish (Rioplatense accent — distinctive "ll" pronounced "sh"). English widely spoken in hotels and top restaurants; less in taxis and small businesses.',
    timezone: 'UTC-3 year-round (no daylight saving)',
  },

  'bhutan': {
    hero: '/images/hotels/amankora-paro-bhutan/hero.webp',
    tagline: 'A Buddhist kingdom at altitude, accessed only via approved tour operator — the most exclusive, slow-luxury honeymoon on earth.',
    intro: 'Bhutan is the honeymoon for couples who want their trip to feel like a pilgrimage rather than a vacation. The Himalayan kingdom restricts tourism via a $200/day Sustainable Development Fee, an arrangement that produces the cleanest air, the most preserved monasteries, and the lowest tourist density of any country in Asia. Aman runs a 5-lodge circuit — Paro, Thimphu, Punakha, Gangtey, Bumthang — that lets you traverse the country in 7-14 days, sleeping in fireplace-lit rammed-earth suites carved into pine forests and rice terraces. Six Senses operates a parallel 5-lodge route. The honeymoon highlights are unlike anywhere else: the Tiger\'s Nest monastery cliff hike, hot stone baths in farmhouses, archery contests with locals, prayer-flag ceremonies above 3,000m, and dinners of red-rice ema datshi by a bukhari woodstove. This is a slow, quiet, deeply romantic country.',
    bestTime: 'Mar–May & Sep–Nov',
    flightFrom: 'Via Delhi or Bangkok (Drukair only); 14–18h from Europe',
    topExperience: 'Tiger\'s Nest Monastery Hike',
    perfectFor: [
      'Couples who want spiritual depth, slow travel, and Himalayan landscapes',
      'Honeymooners willing to invest in a once-in-a-lifetime, hard-to-reach destination',
      'Aman/Six Senses devotees — both brands run their A-team circuits here',
      'Photographers — the Tiger\'s Nest cliff monastery is the defining Bhutan image',
      'Couples comfortable with altitude, light hiking, and tour-operator-led travel',
    ],
    skipIf: [
      'You want beach, sun, or guaranteed swimming weather',
      'You\'re on a tight budget — the SDF + lodge rates push minimum spend high',
      'You\'re uncomfortable with mandatory guide-and-driver structure',
      'You have less than 7 nights — the country needs time to land',
    ],
    experiences: [
      {
        icon: '🏔️',
        title: 'Tiger\'s Nest Monastery (Paro Taktsang) Hike',
        description: 'The 4-hour round-trip hike up to the cliff-clinging Paro Taktsang monastery at 3,120m is Bhutan\'s defining experience. The path winds through pine forest, prayer-flag-strung viewpoints, and a final staircase carved into the cliff. Inside, butter-lamp shrines and meditation caves where Guru Rinpoche flew on a tigress. Aman and Six Senses guides time the hike for sunrise photography.',
        cost: 'Included with all luxury lodge programs; horse assistance to halfway-point cafe ~$25',
        tip: 'Wear broken-in hiking shoes. Start at 7am — Tiger\'s Nest closes for lunch (1–2pm) and the descent in afternoon heat is harder than the climb. Pack water and a light jacket; it\'s 10°C cooler at the top.',
      },
      {
        icon: '🛁',
        title: 'Hot Stone Bath in a Farmhouse',
        description: 'A traditional Bhutanese honeymoon ritual: bathe in a wooden tub heated by river stones glowing red from a wood fire, infused with artemisia leaves. Six Senses Punakha has its own hot stone bath houses overlooking rice terraces; Amankora Paro arranges them with local farming families.',
        cost: '$180–$300 per couple at lodges',
        tip: 'Book your bath for late afternoon — sunset over Himalayan terraces from a steaming wooden tub is the picture you take home.',
      },
      {
        icon: '🏯',
        title: 'Punakha Dzong & Suspension Bridge',
        description: 'Bhutan\'s second-most-photographed building — a 17th-century white-and-saffron fortress at the confluence of two rivers. The 160m Punakha Suspension Bridge nearby is one of the longest prayer-flag-draped pedestrian bridges in the Himalayas. Both at their best in spring jacaranda bloom or autumn rice-harvest gold.',
        cost: 'Entry $5/pax; included on all Amankora and Six Senses Punakha programs',
        tip: 'Visit at sunset when the dzong glows in low light. Then walk the suspension bridge across to the Six Senses approach — the views back at the dzong are unmissable.',
      },
      {
        icon: '🎯',
        title: 'Archery with Locals at the Village Range',
        description: 'Bhutan\'s national sport. Every village has a range, and every honeymoon guide will arrange an evening match against locals. Traditional bamboo bow targets are 145m apart; a successful shot triggers a celebratory victory dance. Surprisingly addictive and one of the warmest cultural experiences in the country.',
        cost: 'Arranged by lodge — $40–$80 per couple including drinks',
        tip: 'Don\'t worry about being terrible — the dance and the laughter are the point. Buy a round of Druk 11000 beer for the local team afterwards.',
      },
      {
        icon: '🌌',
        title: 'Phobjikha Valley Crane Ceremony (Nov–Feb)',
        description: 'Every winter, ~500 black-necked cranes migrate from Tibet to overwinter in the remote Phobjikha glacial valley (Amankora Gangtey territory). The valley\'s residents conduct a ceremonial welcome each November 11 and the cranes themselves circle the 17th-century Gangtey Monastery three times before landing. Surreal, photographable, fragile.',
        cost: 'Standard Amankora Gangtey lodge inclusive; private guide for the ceremony arranged by lodge',
        tip: 'Book Amankora Gangtey for early November to coincide with the crane festival. Cranes leave by mid-February.',
      },
    ],
    months: [
      { month: 'Jan', weather: 'Cold dry, -5°C to 12°C', emoji: '❄️', crowds: 'Low', price: 'Mid', verdict: 'Cranes still in Phobjikha; trekking trails snowed in' },
      { month: 'Feb', weather: 'Cold but warming, clear skies', emoji: '❄️', crowds: 'Low', price: 'Mid', verdict: 'Last cranes; clear Himalayan views' },
      { month: 'Mar', weather: '5–18°C, jacaranda bloom', emoji: '🌸', crowds: 'High', price: 'High', verdict: 'Spectacular spring — peak season starts' },
      { month: 'Apr', weather: '8–20°C, rhododendron bloom', emoji: '🌸', crowds: 'Peak', price: 'Highest', verdict: 'The classic Bhutan month — book 6 months ahead' },
      { month: 'May', weather: '12–24°C, pre-monsoon', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Warm and beautiful, last week increasingly humid' },
      { month: 'Jun', weather: 'Monsoon arrives, leeches', emoji: '🌧️', crowds: 'Low', price: 'Low', verdict: 'Skip — wet, muddy, mountain views often lost' },
      { month: 'Jul', weather: 'Heavy monsoon, 18–25°C', emoji: '🌧️', crowds: 'Low', price: 'Low', verdict: 'Skip — monsoon peak; trails dangerous' },
      { month: 'Aug', weather: 'Tail end of monsoon', emoji: '🌧️', crowds: 'Low', price: 'Low', verdict: 'Improving but unreliable; matsutake mushroom festival' },
      { month: 'Sep', weather: 'Clearing, 12–22°C', emoji: '🌤️', crowds: 'High', price: 'High', verdict: 'Excellent — autumn rice harvest gold' },
      { month: 'Oct', weather: '8–20°C, peak clarity', emoji: '☀️', crowds: 'Peak', price: 'Highest', verdict: 'The other peak month — Thimphu Tshechu festival' },
      { month: 'Nov', weather: '5–18°C, cranes return', emoji: '🍂', crowds: 'High', price: 'High', verdict: 'Crane festival in Phobjikha — unique experience' },
      { month: 'Dec', weather: 'Cold dry, -2°C to 14°C', emoji: '❄️', crowds: 'Low', price: 'Mid', verdict: 'Quiet, clear, cold but rewarding' },
    ],
    budgetTiers: [
      { label: 'Premium', range: '$700–$1,800/night', gets: 'COMO Uma Paro hilltop suite — well-priced relative to Aman/Six Senses, full-board excellent.', example: 'COMO Uma Paro' },
      { label: 'Ultra-Luxury', range: '$1,800–$4,200/night', gets: 'Single-lodge stays at Six Senses Paro/Punakha or one Amankora lodge. All-inclusive guide, meals, transfers, treatments.', example: 'Six Senses Paro, Six Senses Punakha, Amankora Thimphu, Amankora Bumthang' },
      { label: 'Iconic Circuit', range: '$2,000–$4,500/night', gets: 'Multi-lodge Aman or Six Senses circuit (3–5 lodges across 7–14 nights). The defining Bhutan honeymoon.', example: 'Amankora 5-Lodge Circuit, Six Senses Multi-Lodge' },
    ],
    areas: [
      { name: 'Paro', bestFor: 'Arrival, Tiger\'s Nest, Himalayan views', description: 'The international airport valley and base for Tiger\'s Nest. Amankora Paro and Six Senses Paro are here. 2–3 nights minimum.' },
      { name: 'Thimphu', bestFor: 'Capital culture, dzong, weekend market', description: 'Bhutan\'s charming capital (population 100,000) — pedestrians directing traffic, a chorten in the centre, Tashichho Dzong, the National Memorial Chorten. 1–2 nights.' },
      { name: 'Punakha', bestFor: 'Sub-tropical valley, Punakha Dzong, suspension bridge', description: 'Lower-altitude (1,200m), warmer valley with the most photogenic dzong in Bhutan. Six Senses Punakha and Amankora Punakha here. 2 nights.' },
      { name: 'Phobjikha (Gangtey)', bestFor: 'Black-necked cranes, remote serenity', description: 'Glacial valley at 3,000m, no electricity until 2008. Amankora Gangtey is the only luxury here. 1–2 nights.' },
      { name: 'Bumthang', bestFor: 'Spiritual heartland, ancient monasteries', description: 'Central Bhutan\'s religious centre — Jakar Dzong, Jambay Lhakhang, traditional villages. Amankora Bumthang. 1–2 nights.' },
    ],
    expertTips: [
      { tip: 'Book via official tour operator only', detail: 'Bhutan visa requires a registered Bhutanese tour operator. Aman and Six Senses handle this seamlessly — your visa, SDF, internal flights, guide, and driver are all bundled. Independent travel is impossible.' },
      { tip: 'The SDF is $200/person/day on top of lodging', detail: 'The Sustainable Development Fee is a flat $200/pax/day paid to the government regardless of your hotel. Lodges quote this separately or include it. Budget accordingly — 7 nights = $2,800 SDF for two on top of room rates.' },
      { tip: 'Acclimatize at Paro (2,200m) before Bumthang (2,800m)', detail: 'Bhutan altitudes are real. The standard Aman/Six Senses circuit eases you up — Paro → Thimphu → Punakha (low) → Phobjikha (high) → Bumthang. Don\'t reverse it.' },
      { tip: 'Drukair flights are weather-dependent', detail: 'Paro\'s airport is cradled in mountains and only ~12 pilots are certified to land there. Cancellations happen. Build a 24-hour buffer at the start and end of your trip in Delhi or Bangkok.' },
      { tip: 'Internet is poor at Aman lodges (intentionally)', detail: 'Amankora properties deliberately offer minimal Wi-Fi as part of the slow-luxury ethos. If you need to work, COMO Uma Paro has stronger connectivity. Six Senses lodges are mid.' },
    ],
    packing: [
      { item: 'Broken-in hiking boots', why: 'Tiger\'s Nest is non-negotiable trail. New boots = blisters that ruin the trip.' },
      { item: 'Layered hiking clothing', why: 'Temperature swings 15°C between morning and afternoon. Merino base + fleece + light shell is the formula.' },
      { item: 'Modest dress for monasteries', why: 'Long pants/sleeves required at all dzongs and monasteries. No shorts, no exposed shoulders. Bring a scarf for women.' },
      { item: 'Altitude medication (Diamox) optional', why: 'Most lodges sit 2,200–3,000m. Light altitude is normal. Diamox helps if you\'re sensitive — discuss with your GP.' },
      { item: 'Small gifts for guides and drivers', why: 'Bhutanese hospitality is generous and reciprocal. Books from your country, photographs, or quality chocolates are appreciated more than cash.' },
    ],
    guide: {
      getting: 'Drukair and Bhutan Airlines fly to Paro (PBH) only from Delhi, Bangkok, Kathmandu, and Singapore. Most honeymooners route via Delhi (4h flight + 1-2h layover) or Bangkok (3h). Total transit time from Europe is 14–18h. Once in Bhutan, internal travel is by SUV with your assigned guide — no domestic flights worth using. The Aman or Six Senses circuit handles all logistics.',
      where: 'Classic 7-night Aman/Six Senses circuit: Paro (2 nights) → Thimphu (1) → Punakha (2) → Bumthang or back to Paro (2). 10-night extension adds Phobjikha and full Bumthang valley. The 14-night full circuit includes all 5 Amankora lodges or all 5 Six Senses — the most committed Bhutan honeymoon.',
      when: 'March–May (especially April) and September–November are the two peak windows — clear skies, mild temperatures, monastery festivals (tshechus). October is most popular but March-April rhododendron bloom is unforgettable. Avoid June–August monsoon (mountain views obscured, leeches in forests). November adds the crane festival in Phobjikha.',
    },
    localFood: 'Ema datshi (chili-and-cheese stew, the national dish — Bhutanese eat it three times a day); red rice from Paro Valley (nutty, dense); momos (Tibetan-style steamed dumplings); shakam paa (dried beef with chilies and radishes); jasha maru (spicy chicken stew); butter tea (suja — rancid yak butter, salt; an acquired taste); ara (rice or wheat spirit, often served warm with butter and egg); Druk 11000 beer (the local lager). Lodge dining adapts Bhutanese flavours for international palates — chili intensity is dialled down by default; ask for it spicier.',
    currency: 'Bhutanese Ngultrum (BTN) pegged 1:1 to Indian Rupee. INR widely accepted. USD and EUR cash useful for SDF payments and tips; cards rare outside top hotels in Paro/Thimphu.',
    language: 'Dzongkha (national); English is universal at lodges, with all guides fluent. Hindi widely understood.',
    timezone: 'UTC+6 (Bhutan Time, no daylight saving)',
  },

  'lapland': {
    hero: '/images/hotels/octola-wilderness-lodge-finland/hero.webp',
    tagline: 'Northern lights from a glass igloo, husky safaris through silent forests, and the most cinematic winter honeymoon on earth.',
    intro: 'Finnish Lapland is the original glass-igloo destination — Kakslauttanen invented the format in 1973 and the country has perfected it ever since. The premise is simple: sleep under a transparent dome in -25°C silence and watch the aurora ripple green and violet over your duvet. But Lapland is more than a single photograph. The week beyond the igloo is an Arctic playlist: husky-sled safaris through frozen pine forest, reindeer farm visits with Sami families, ice fishing on frozen lakes, smoke-sauna rituals followed by ice swimming, snowmobile expeditions across the fells, and (in Rovaniemi) the official Santa Claus Village. Levin Iglut sits hilltop at the Levi ski resort. Octola is the ultra-luxury private 100km² wilderness near Rovaniemi. Wilderness Hotel Nellim puts cabins on stilts over Lake Inari near the Russian border. The summer alternative is dramatic too — midnight sun, hiking, husky farms switching to dryland sled training — but 90% of honeymoons here are December–March.',
    bestTime: 'Dec–Mar (aurora) + Jun–Aug (midnight sun)',
    flightFrom: '4h from London, 9h from NYC (via Helsinki)',
    topExperience: 'Northern Lights from a Glass Igloo',
    perfectFor: [
      'Couples who dream of falling asleep watching the aurora from bed',
      'Adventure honeymooners — husky sledding, snowmobiling, ice swimming',
      'Photographers — the aurora over snow is one of the great travel images',
      'Sauna-and-spa devotees — Finland is the global capital of sauna culture',
      'Christmas-romantic types — Rovaniemi is "officially" Santa\'s home town',
    ],
    skipIf: [
      'You hate the cold — average winter day -25°C, nights to -35°C',
      'You need beach, swimming, or warm-weather relaxation',
      'You expect guaranteed aurora — clear skies + KP-index + luck still required',
      'You\'re on a tight budget — Finland is among Europe\'s priciest, especially Dec–Feb',
    ],
    experiences: [
      {
        icon: '🌌',
        title: 'Glass Igloo Aurora Watch',
        description: 'A heated transparent dome with a real bed under a 360° glass roof. Lights off, settle in, and wait. KP > 3 with clear skies = green ribbons across the sky for hours. Levin Iglut\'s premium igloos have private saunas; Kakslauttanen has the original log-cabin-plus-glass-roof hybrid; Wilderness Nellim has Aurora Cabins on stilts over Lake Inari with skylights right above the bed.',
        cost: 'Premium glass igloo $500–$1,500/night',
        tip: 'Stay 4 nights minimum. Aurora is a probability game — one cloudy night is normal. Download the My Aurora Forecast app and wake at 11pm and 2am to check.',
      },
      {
        icon: '🐺',
        title: 'Husky-Sled Safari',
        description: 'Drive your own team of 6–8 huskies through 20–60 km of frozen forest. The dogs are bred specifically for this and love to run; the silence between snow-muffled paw-falls is unlike any other sound in travel. Most lodges offer a half-day (~3h sled time) or full-day option with bonfire lunch.',
        cost: 'Half-day $250–$400/couple; full-day with lunch $500–$700/couple',
        tip: 'Wear all the layers the operator gives you, then add your own merino base. The wind chill at sled speed is brutal. Tip the musher generously — they\'ve cared for those dogs for years.',
      },
      {
        icon: '🦌',
        title: 'Reindeer Farm Visit with a Sami Family',
        description: 'A traditional working reindeer farm visit, often Sami-owned, with a short reindeer-sleigh ride through the forest, coffee around an open fire in a kota tent, and stories about Sami herding traditions. Wilderness Nellim is the strongest cultural connection here — Lake Inari is in the Sami heartland.',
        cost: '$150–$300/couple including sleigh and lunch',
        tip: 'Ask about the Sami noaidi shaman traditions and joik (singing). Buy a hand-carved kuksa (birch cup) directly from the family — they last a lifetime.',
      },
      {
        icon: '🔥',
        title: 'Smoke Sauna + Ice Swimming Ritual',
        description: 'A traditional Finnish smoke sauna (savusauna) heats stones with a wood fire over hours, infusing the wood-walled chamber with birch smoke. 80°C inside, then a sprint to a hole cut in the frozen lake for a 30-second plunge. Repeat 3–4 times. The endorphin rush and skin tingle is unlike any spa experience anywhere.',
        cost: 'Most luxury lodges have private smoke saunas; rituals run $80–$200/couple',
        tip: 'Don\'t overstay in the sauna. Three short rounds beat one long marathon. The ice swim feels miraculous on the second round, brutal on the fourth.',
      },
      {
        icon: '❄️',
        title: 'Snowmobile Expedition Across the Fells',
        description: 'A 50–150 km guided expedition over frozen lakes and rolling Arctic fells, often ending at a frozen waterfall or aurora viewing point. Levi and Saariselkä have the best snowmobile networks. Octola Wilderness Lodge runs private full-day expeditions across its own 100 km² estate.',
        cost: '$300–$600/couple half-day; $800–$1,500 full-day with lunch',
        tip: 'Drive your own (twice the price but worth it). Bring goggles — eyelash frost is real. The mid-route lunch in a kota over open fire is the best meal of the day.',
      },
    ],
    months: [
      { month: 'Jan', weather: '-25°C avg, 4h daylight', emoji: '❄️', crowds: 'High', price: 'High', verdict: 'Coldest but darkest — peak aurora probability' },
      { month: 'Feb', weather: '-20°C avg, 7h daylight', emoji: '❄️', crowds: 'High', price: 'High', verdict: 'Sweet spot — long aurora nights + more sun' },
      { month: 'Mar', weather: '-15°C, 11h daylight', emoji: '❄️', crowds: 'High', price: 'High', verdict: 'Best month — bright skies, warm sun, deep snow' },
      { month: 'Apr', weather: '-5°C to 5°C, melting', emoji: '🌦', crowds: 'Low', price: 'Mid', verdict: 'Awkward shoulder — aurora ending, snow melting' },
      { month: 'May', weather: '5–15°C, snow gone', emoji: '🌸', crowds: 'Low', price: 'Low', verdict: 'Mosquitoes arriving; lodges often closed for refit' },
      { month: 'Jun', weather: '12–20°C, midnight sun', emoji: '☀️', crowds: 'Mid', price: 'Mid', verdict: 'Midnight-sun summer begins — completely different trip' },
      { month: 'Jul', weather: '14–22°C, peak summer', emoji: '☀️', crowds: 'High', price: 'Mid', verdict: 'Long days, hiking, kayaking, mosquito-heavy' },
      { month: 'Aug', weather: '10–18°C', emoji: '☀️', crowds: 'Mid', price: 'Mid', verdict: 'Berry season; first aurora glimpses end of month' },
      { month: 'Sep', weather: '5–12°C, autumn ruska', emoji: '🍂', crowds: 'Low', price: 'Low', verdict: 'Spectacular ruska autumn colours; first aurora' },
      { month: 'Oct', weather: '-2°C to 8°C, first snow', emoji: '🌨️', crowds: 'Low', price: 'Mid', verdict: 'Aurora season starts; landscape transitioning' },
      { month: 'Nov', weather: '-10°C to 0°C, polar night begins', emoji: '❄️', crowds: 'Mid', price: 'Mid', verdict: 'Snow settling; aurora frequent; quieter than Dec' },
      { month: 'Dec', weather: '-22°C avg, polar night', emoji: '🎄', crowds: 'Peak', price: 'Highest', verdict: 'Christmas market season — Rovaniemi at peak' },
    ],
    budgetTiers: [
      { label: 'Mid-Luxury', range: '$300–$700/night', gets: 'Aurora cabin or boutique igloo at established resorts. Aurora alarm and basic activity menu.', example: 'Apukka Resort, Iso-Syöte Hotel, Star Arctic Hotel' },
      { label: 'Premium', range: '$700–$1,500/night', gets: 'Premium glass igloo with private sauna, on-site husky/reindeer experiences, multi-restaurant resort.', example: 'Levin Iglut, Kakslauttanen Arctic Resort, Wilderness Hotel Nellim' },
      { label: 'Ultra-Luxury', range: '$3,000–$8,000/night', gets: 'Private wilderness lodge with all-inclusive activities, butler service, private chef, no other guests visible.', example: 'Octola Wilderness Lodge' },
    ],
    areas: [
      { name: 'Saariselkä', bestFor: 'Iconic glass igloos, fell-top design hotels', description: 'The original glass-igloo zone, 1h from Ivalo airport. Kakslauttanen and Star Arctic are here. Excellent snowmobile and husky access; ski resort attached.' },
      { name: 'Levi', bestFor: 'Ski-resort luxury, après-ski, hilltop igloos', description: '170 km north of Rovaniemi, Finland\'s biggest ski resort. Levin Iglut sits on the fell-top with panoramic views. Most accessible from Helsinki via Kittilä airport (~1h flight).' },
      { name: 'Rovaniemi', bestFor: 'Santa Claus Village, design hotels, husky farms', description: 'The largest Lapland city, Arctic-Circle straddling, Santa\'s "official" home. Arctic TreeHouse, Apukka, and Octola all in this region. Direct flights from Helsinki year-round.' },
      { name: 'Lake Inari (Nellim)', bestFor: 'Sami culture, remote aurora, Russian-border wilderness', description: 'Far-north Finland on Europe\'s third-largest lake. Wilderness Hotel Nellim is the only luxury option — Aurora Cabins on stilts over the lake, deep cultural connection to Sami life.' },
    ],
    expertTips: [
      { tip: 'Stay ≥4 nights for aurora probability', detail: 'Aurora is a probability game. KP-index ≥3 + clear skies + dark hours all need to align. Three nights is risky; four is the sweet spot. Five gives you a near-guarantee.' },
      { tip: 'Book husky/reindeer activities before you arrive', detail: 'Top operators in Saariselkä, Levi, and Rovaniemi book up 6+ months ahead in December–February. Don\'t wait until check-in to ask — most lodges will pre-book for you on request.' },
      { tip: 'Wear ALL the layers the lodge gives you', detail: 'At -25°C with wind chill from a moving snowmobile or husky sled, your hipster ski jacket from home is not enough. Lodges supply expedition-grade snowsuits, mittens, balaclavas, and boots — wear them all.' },
      { tip: 'Helsinki layover is a real bonus', detail: 'Most Lapland flights connect via Helsinki (HEL). A 24h Helsinki stop is highly recommended on the return — Old Market Hall, design district, sauna at Löyly, dinner at Olo or Palace. Book a Klaus K or Lilla Roberts for the night.' },
      { tip: 'Aurora alerts mean sleeping with phone-on', detail: 'Most luxury lodges run a 24/7 aurora-alert service — they call/buzz your room when activity peaks. Charge your phone; sleep in base layers; have boots, jacket, and hat ready by the door for instant response.' },
    ],
    packing: [
      { item: 'Merino base layers (heavy + mid)', why: 'The foundation of staying warm at -25°C. Two sets — one to wear, one to dry overnight after sweat from sauna or active days.' },
      { item: 'Hand and toe warmers', why: 'Disposable HotHands packs are gold for husky sledding and aurora-watching. Bring 20+; they\'re hard to find locally.' },
      { item: 'Camera with manual mode + tripod', why: 'iPhones get the Northern Lights now (use Night Mode 30s) but a real camera with a 2.8 lens and tripod gets the cinematic shot. Bring spare batteries — cold drains them in 30 min.' },
      { item: 'Lip balm, hand cream, eye drops', why: 'Arctic air is brutally dry. Indoor heating + saunas + outdoor cold = chapped everything. Restock as you go through it.' },
      { item: 'Reusable insulated mug', why: 'Endless cups of hot lingonberry juice, glögi (mulled wine), and forest tea are the rhythm of the day. A vacuum-insulated mug keeps it hot from kota tent to igloo.' },
    ],
    guide: {
      getting: 'Most honeymoons fly Helsinki (HEL) → Rovaniemi (RVN), Kittilä (KTT — for Levi), or Ivalo (IVL — for Saariselkä/Inari). Finnair flies all three from Helsinki, ~1h flight. Direct international flights to Rovaniemi from London, Paris, Frankfurt, and Geneva run Dec–Mar only. Octola Wilderness Lodge runs private helicopter transfers from Rovaniemi airport. Total transit from London ~5h; from NYC ~10h via HEL.',
      where: 'Classic 5-night winter itinerary: 1 night Helsinki (Klaus K or Hotel St. George), 4 nights Lapland — split as 2 nights Saariselkä (Kakslauttanen) + 2 nights Levi (Levin Iglut), or 4 nights single base for deeper exploration. The Octola itinerary is bespoke — usually 3–4 nights private lodge + Helsinki bookend.',
      when: 'December–March is peak honeymoon — aurora, snow, full activity menu, all glass igloos open. Sweet spot is February–early March (lengthening daylight, cold bright skies, peak aurora probability). December has Christmas market romance + polar night drama but is the priciest. June–August is the alternative summer trip — midnight sun, hiking, kayaking — but very different vibe.',
    },
    localFood: 'Reindeer in many forms — sautéed (poronkäristys with mashed potato and lingonberry); smoked; cold-smoked carpaccio. Arctic char and whitefish from the lakes; bear sausage (curiosity meat); cloudberry (lakka) jam and liqueur; lingonberry everything; rye bread (ruisleipä); Karelian pies (small rye-pastry rice-filled bites); pulla (cardamom buns); leipäjuusto (squeaky-cheese, often served warm with cloudberry jam); reindeer stew (poronpata); salmiakki (salty liquorice — divisive); glögi (mulled berry wine); Lapin Kulta lager. Lodge dining is genuinely excellent — Octola has private chef-tasting menus; Levin Iglut\'s Aurora Sky Bar serves modern Scandi.',
    currency: 'Euro (EUR). Cards accepted everywhere; minimal cash needed. Tipping not expected (10% in restaurants is generous).',
    language: 'Finnish and Swedish (both official); Sami in the far north. English is universal at hotels, restaurants, and excursion operators.',
    timezone: 'UTC+2 (UTC+3 in summer with daylight saving)',
  },

  'peru': {
    hero: '/images/hotels/belmond-sanctuary-lodge-peru/hero.webp',
    tagline: 'Sunrise at Machu Picchu, plunge-pool suites in Cusco convents, and a luxury sleeper train across the high Andes — the most romantic high-altitude honeymoon on earth.',
    intro: 'Peru is the honeymoon for couples whose idea of luxury includes pre-dawn taxis, oxygen masks, and a 2,400m altitude headache on Day 1. Lean in — the payoff is the most cinematic ancient civilization left on earth. Belmond runs the dominant luxury circuit: Hotel Monasterio (Cusco 16th-century convent), Palacio Nazarenas (Inca-walls-into-suites), Sanctuary Lodge (the only hotel literally at the Machu Picchu citadel gates), and the Andean Explorer luxury sleeper train across the high plains to Lake Titicaca and Arequipa. The Sacred Valley alternative is Sol y Luna (Relais & Châteaux casitas with horse stables). Add a Lima opener at Hotel B in Barranco and you have the trip. The week is built around three peaks: a sunrise alone with the citadel before day-trippers arrive, a private dinner inside Saqsayhuamán Inca walls in Cusco, and a Spa Car treatment at 4,300m on a moving train. Plan for altitude — Cusco is 3,400m, two days minimum to acclimatize.',
    bestTime: 'May–Oct (dry season)',
    flightFrom: '12–14h from Europe via Lima',
    topExperience: 'Sunrise at Machu Picchu',
    perfectFor: [
      'History-honeymooners who prefer wonders to beaches',
      'Couples who can handle altitude and want bragging-rights memories',
      'Train romantics — the Andean Explorer is South America\'s only luxury sleeper',
      'Foodies — Lima has 3 of the world\'s top 50 restaurants (Maido, Central, Mayta)',
      'Photographers — the Sacred Valley terraced light at dawn is unlike anywhere else',
    ],
    skipIf: [
      'You\'re unable to handle altitude or have heart conditions',
      'You want beach lounging — Peru\'s coast is mostly fog and Pacific cold',
      'Your travel window is February — Inca Trail closes for maintenance',
      'You expect to do Machu Picchu in a half-day — it deserves a full sunrise + return visit',
    ],
    experiences: [
      {
        icon: '🌄',
        title: 'Sunrise at Machu Picchu',
        description: 'Belmond Sanctuary Lodge guests get pre-6am access to the citadel before the first day-trippers arrive on the 5:30am train from Cusco. You walk in alone with one guide, watching the mist burn off the Huayna Picchu peak as the sun crests the eastern ridge. There\'s no comparable moment in honeymoon travel.',
        cost: 'Sanctuary Lodge from $1,500/night includes early access; standard sunrise tour from Aguas Calientes $200/pax',
        tip: 'Book Sanctuary Lodge — the lodge has only 31 rooms and pre-dawn access is reserved for guests. Stay 2 nights to also see sunset.',
      },
      {
        icon: '🚂',
        title: 'Belmond Andean Explorer Sleeper Train',
        description: 'South America\'s first luxury sleeper train: Cusco → Lake Titicaca (Puno) → Colca Canyon → Arequipa over 2 nights and 3 days. 24 cabins, full-service Spa Car at altitude, observation car with cocktails as the train climbs to 4,800m at La Raya pass. Arrive in Arequipa for the white-volcanic-stone colonial centre.',
        cost: '2-night Cusco-Arequipa from $2,500/cabin (sleeps 2)',
        tip: 'Book a Suite Cabin — the upgrade buys a private en-suite with windows on both sides and twice the floor space. The Junior Cabins share bathrooms.',
      },
      {
        icon: '🏛️',
        title: 'Private After-Hours Saqsayhuamán Visit',
        description: 'Belmond Palacio Nazarenas and Hotel Monasterio arrange private after-hours visits to Saqsayhuamán, the Inca cyclopean fortress above Cusco. With only your guide and the night sky, the 200-tonne stone walls are far more emotional than during the daytime tourist crowds.',
        cost: 'Private guide + after-hours arrangement $400/couple',
        tip: 'Combine with a private candlelit dinner inside the fortress — Belmond can arrange. Genuinely once-in-a-lifetime.',
      },
      {
        icon: '🦙',
        title: 'Sacred Valley Horseback Ride',
        description: 'Sol y Luna Lodge runs the best-rated equestrian program in Peru — 40 Peruvian Paso horses (a unique breed with a four-beat lateral gait, surprisingly smooth for non-riders). A 2-3h ride through Sacred Valley terraces and Inca ruins, ending at a riverside picnic.',
        cost: 'Hotel-guest rate $250/couple for half-day with picnic',
        tip: 'Book the Wayra Equestrian Show one evening — Sol y Luna\'s in-house Peruvian Paso show is genuinely one of the most polished equestrian performances in South America.',
      },
      {
        icon: '🍽️',
        title: 'Lima Tasting Menu at Maido or Central',
        description: 'Lima is one of the world\'s top three food cities. Central (Virgilio Martínez) and Maido (Mitsuharu Tsumura, Nikkei Japanese-Peruvian) regularly trade #1–#5 on World\'s 50 Best. The 13-course altitude-themed tasting at Central is the more conceptual experience; Maido\'s Nikkei tasting is the more delicious one.',
        cost: '$200–$300/person tasting; wine pairing $150',
        tip: 'Book 2–3 months ahead through your hotel concierge or directly. Mayta (Jaime Pesaque) is the easier-to-book third option and almost as good.',
      },
    ],
    months: [
      { month: 'Jan', weather: 'Wet season, daily rain', emoji: '🌧️', crowds: 'Low', price: 'Low', verdict: 'Skip if possible — trails muddy, mist-obscured views' },
      { month: 'Feb', weather: 'Heaviest rain', emoji: '🌧️', crowds: 'Lowest', price: 'Lowest', verdict: 'Skip — Inca Trail closed for maintenance' },
      { month: 'Mar', weather: 'Wet but easing', emoji: '🌦', crowds: 'Low', price: 'Low', verdict: 'Improving but unreliable; cheap rates' },
      { month: 'Apr', weather: 'Transition, drying', emoji: '🌤️', crowds: 'Mid', price: 'Mid', verdict: 'Excellent value — Inca Trail reopens, lush valleys' },
      { month: 'May', weather: 'Clear dry, cool nights', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Sweet spot — clearest skies, all trails open, fewer crowds than Jun-Aug' },
      { month: 'Jun', weather: 'Cold dry, Inti Raymi festival', emoji: '☀️', crowds: 'Peak', price: 'High', verdict: 'Excellent + Inti Raymi sun-festival in Cusco late June' },
      { month: 'Jul', weather: 'Driest, coldest nights', emoji: '☀️', crowds: 'Peak', price: 'Highest', verdict: 'Peak season — bright clear days, cold high-altitude nights' },
      { month: 'Aug', weather: 'Dry, slightly warming', emoji: '☀️', crowds: 'Peak', price: 'Highest', verdict: 'Last peak month — book 6 months ahead' },
      { month: 'Sep', weather: 'Drying out, mild', emoji: '🌤️', crowds: 'High', price: 'High', verdict: 'Excellent shoulder — fewer crowds, all trails open' },
      { month: 'Oct', weather: 'Mild dry, occasional showers', emoji: '🌤️', crowds: 'Mid', price: 'Mid', verdict: 'Best value sweet spot — dry but quieter' },
      { month: 'Nov', weather: 'Wet season starting', emoji: '🌦', crowds: 'Mid', price: 'Mid', verdict: 'Good value; afternoon showers becoming reliable' },
      { month: 'Dec', weather: 'Wet, summer heat', emoji: '🌧️', crowds: 'High', price: 'High', verdict: 'Christmas tourists in Cusco; daily afternoon rain' },
    ],
    budgetTiers: [
      { label: 'Mid-Luxury', range: '$400–$900/night', gets: 'Cusco boutique or Sacred Valley lodge with full board. Excellent breakfast; basic spa.', example: 'Inkaterra Machu Picchu Pueblo, Tambo del Inka, Hotel B Lima' },
      { label: 'Premium', range: '$700–$2,000/night', gets: 'Belmond circuit hotels — Monasterio convent, Sol y Luna casitas, full guided experiences.', example: 'Belmond Hotel Monasterio, Sol y Luna Lodge & Spa, Belmond Palacio Nazarenas' },
      { label: 'Iconic', range: '$1,500–$5,000/night', gets: 'Sanctuary Lodge at the citadel gates or the full Belmond Andean Explorer multi-day train.', example: 'Belmond Sanctuary Lodge, Belmond Andean Explorer' },
    ],
    areas: [
      { name: 'Lima', bestFor: 'Arrival, food capital, Pacific-coast culture', description: 'The first stop. Barranco art district (Hotel B), Miraflores cliff-top (Belmond Miraflores Park), Pachacamac ruins. 1–2 nights for jet-lag adjustment and a Maido or Central dinner.' },
      { name: 'Cusco', bestFor: 'Inca capital, altitude acclimatization, colonial architecture', description: 'The starting point for any Sacred Valley itinerary. 3,400m altitude — needs 2 nights minimum to acclimatize. Belmond Monasterio and Palacio Nazarenas are the iconic stays.' },
      { name: 'Sacred Valley (Urubamba)', bestFor: 'Lower-altitude transition, Inca ruins, riverside lodges', description: '2,800m — easier to breathe than Cusco. Pisac and Ollantaytambo Inca sites, weaving villages, Sol y Luna and Tambo del Inka here. 2–3 nights.' },
      { name: 'Aguas Calientes / Machu Picchu', bestFor: 'Citadel sunrise, cloud forest, hot springs', description: 'The river-bottom village 400m below Machu Picchu. Inkaterra Machu Picchu Pueblo (cloud forest casitas) and Belmond Sanctuary Lodge (literally at the gates). 1–2 nights.' },
      { name: 'Lake Titicaca / Arequipa', bestFor: 'High plains finale, Andean Explorer destination', description: 'Optional 2-3 day extension via the luxury sleeper train. Lake Titicaca\'s reed islands, Arequipa\'s white-volcanic-stone colonial centre, Colca Canyon condors.' },
    ],
    expertTips: [
      { tip: 'Acclimatize 2 nights in Cusco before Machu Picchu', detail: 'Don\'t fly Cusco → Machu Picchu same day. Cusco is 3,400m — even fit travellers feel it. Two nights of slow walking, coca tea, and Belmond\'s oxygen-enriched rooms make the rest of the trip enjoyable.' },
      { tip: 'Book Sanctuary Lodge or Inkaterra at least 6 months ahead', detail: 'Sanctuary Lodge has 31 rooms and is the only hotel at the citadel — May-October sells out 9+ months ahead. Inkaterra Machu Picchu Pueblo is the strong second-choice and slightly easier to book.' },
      { tip: 'Hike Huayna Picchu (or Machu Picchu Mountain) the second morning', detail: 'Most honeymooners do citadel sunrise Day 1, then return Day 2 for the Huayna Picchu hike (the steep peak in the famous photo). 400 permits/day, must book months ahead.' },
      { tip: 'Carry small bills (10/20 soles)', detail: 'Tipping at hotels and restaurants is standard. Many small museums, market stalls, and Sacred Valley villages don\'t take cards. Get small soles bills at airport ATMs.' },
      { tip: 'Pack for layered altitude weather', detail: 'Cusco morning is 0°C, midday sun is 22°C, evening drops to 5°C. Same day. Layered merino + hard-shell + sun hat is the formula. UV at altitude is brutal — proper sunscreen and lip balm.' },
    ],
    packing: [
      { item: 'Broken-in hiking boots or trail runners', why: 'Machu Picchu citadel paths are uneven Inca stones. Day-hikes from Sol y Luna or Sacred Valley require real grip.' },
      { item: 'Layered clothing for altitude swings', why: '15°C swings within a single day are normal. Merino base + fleece + light shell is the formula.' },
      { item: 'Strong UV sunscreen (SPF 50+) and lip balm', why: 'UV at 3,400m is dramatically stronger than sea level. Reef-friendly mineral SPF and SPF lip balm are essentials.' },
      { item: 'Altitude medication (Diamox)', why: 'Pre-hike from your GP. Many honeymooners benefit, especially if going straight to Cusco. Coca tea helps but Diamox is the real solution.' },
      { item: 'Day pack with hydration bladder', why: 'You\'ll be on your feet 4-6h/day at altitude. 2L water minimum; the Sacred Valley sun is dehydrating.' },
    ],
    guide: {
      getting: 'Fly to Lima (LIM) — most international flights from Europe (Iberia, Air Europa, KLM) or US (LATAM, American, Delta). 12–14h from Europe with one connection. Internal flights LATAM and Sky to Cusco (CUZ) — 1h, multiple daily. Most luxury itineraries: arrive Lima → 1 night Lima → fly Cusco morning → transfer to Sacred Valley (lower altitude, easier acclimatization). Belmond Andean Explorer departs Cusco; Belmond also runs the Hiram Bingham luxury day train to Machu Picchu.',
      where: 'Classic 8-night itinerary: 1 night Lima (Hotel B) → 2 nights Sacred Valley (Sol y Luna) → 1 night Aguas Calientes (Sanctuary Lodge) → 2 nights Cusco (Palacio Nazarenas) → 2-night Andean Explorer (Cusco → Lake Titicaca → Arequipa). 6-night shorter version: 1 Lima + 2 Sacred Valley + 1 Aguas Calientes + 2 Cusco. The Andean Explorer add-on is the splurge.',
      when: 'May to October is the dry season — clear skies, open trails, cool dry mornings. June-August is peak (book 6+ months ahead) and coldest at altitude. May and September-October are sweet spots — drier than December–April rainy season but with fewer crowds than peak. February closes the Inca Trail entirely; January-March are wet and not recommended.',
    },
    localFood: 'Ceviche (raw fish in tiger\'s milk lime cure — Lima\'s defining dish); lomo saltado (Chinese-Peruvian beef stir-fry over rice and potato); ají de gallina (creamy yellow-pepper chicken); cuy (guinea pig — traditional Andean dish, often roasted whole, an acquired sight); anticuchos (grilled beef-heart skewers); causa (chilled potato terrines); pisco sour (national cocktail); chicha morada (sweet purple-corn drink); coca tea (mate de coca — the altitude remedy); Inca Kola (yellow bubblegum-flavoured soda); Peruvian coffee from Chanchamayo; alpaca steaks in Sacred Valley lodges. Lima\'s top tier — Central, Maido, Mayta, Astrid y Gastón — is genuinely world-leading.',
    currency: 'Peruvian Sol (PEN). USD widely accepted at hotels and tour operators; cards accepted in cities. Bring fresh small USD bills for tips and small purchases.',
    language: 'Spanish (Peruvian accent — clear, mid-paced); Quechua in Andean villages. English at hotels and major restaurants; less in markets and rural areas.',
    timezone: 'UTC-5 year-round (no daylight saving)',
  },

  'galapagos': {
    hero: '/images/hotels/silversea-silver-origin-galapagos/hero.webp',
    tagline: 'Once-in-a-lifetime wildlife — sea lions on your snorkel mask, blue-footed boobies metres away, giant tortoises older than your grandparents — set in luxury safari camps and expedition cruises.',
    intro: 'The Galápagos is the honeymoon for couples whose dream trip is closer to a wildlife documentary than a beach holiday. The 19-island archipelago 1,000 km off Ecuador\'s coast is home to species that exist nowhere else — marine iguanas that swim, finches Darwin used to crack evolution, blue-footed boobies that mating-dance two metres from your camera, and giant tortoises that lived through Queen Victoria. Two ways to do it: land-based (Pikaia Lodge\'s Santa Cruz hilltop, Galapagos Safari Camp\'s African-style luxury tents, Finch Bay\'s mangrove beach hotel) with private day yachts to outer islands; or expedition cruise (Silversea\'s 100-guest Silver Origin, Ecoventura\'s 20-guest Origin yacht) sleeping on the boat between island stops. Both deliver — cruises see more remote islands (Genovesa, Fernandina, Española) impossible from land; land-based gives you bigger rooms, longer evenings, and easier honeymoon comfort. The luxury market here is small, well-regulated, and increasingly impressive.',
    bestTime: 'Year-round (Dec–May warm/wet vs Jun–Nov cool/dry)',
    flightFrom: '15–18h from Europe via Quito or Guayaquil',
    topExperience: 'Snorkel with Sea Lions',
    perfectFor: [
      'Wildlife-first honeymooners — the species density is unmatched anywhere',
      'Couples who want active days and don\'t mind early starts (most excursions 7am)',
      'Photographers — the wildlife approachability is unique',
      'Snorkellers and swimmers — the marine life rivals any reef in the world',
      'Travellers wanting bragging-rights memories — this is a top-three travel destination',
    ],
    skipIf: [
      'You want a beach-flop honeymoon — Galápagos is wildlife-first, not lounging',
      'You\'re prone to seasickness — even the best yachts roll on the rougher channels',
      'Your budget is tight — minimum spend including park fee + flights is high',
      'You\'re uncomfortable with mandatory naturalist-guide structure (required by law)',
    ],
    experiences: [
      {
        icon: '🦭',
        title: 'Snorkel with Playful Sea Lions',
        description: 'Galápagos sea lions are among the world\'s most curious marine mammals. Snorkel from your zodiac at Champion Islet, Tortuga Bay, or Bartolomé and the juveniles will spin around you, mirror your movements, and gently mouth your fins. The defining underwater honeymoon moment.',
        cost: 'Included on all luxury cruises and lodge programs',
        tip: 'Sea lions are most playful in the morning. Wear a 3mm shorty wetsuit even Dec-May — water is colder than you expect from the equator.',
      },
      {
        icon: '🐢',
        title: 'Giant Tortoise Encounters in Highlands',
        description: 'Santa Cruz highlands have a wild population of 200+ Galápagos giant tortoises (the largest tortoise species on earth, up to 250kg, 150-year lifespan). Walk among them at Rancho Primicias or El Chato Reserve. Pikaia Lodge has a 30-acre tortoise reserve on its own grounds.',
        cost: 'Highland tour $80/couple; included with Pikaia Lodge stays',
        tip: 'Pikaia Lodge is the only luxury hotel with on-property tortoises. Mornings are quiet — the tortoises wake up slowly and feed.',
      },
      {
        icon: '🐦',
        title: 'Blue-Footed Booby & Frigate Birds at North Seymour',
        description: 'A 2-hour day boat from Santa Cruz delivers you to North Seymour Island\'s seabird colonies. Blue-footed boobies perform their famous mating dance 2 metres from the trail. Magnificent frigates inflate red throat sacs the size of beach balls. No fences, no barriers — Galápagos rules require keeping 2m back, but the birds don\'t care.',
        cost: 'Day-boat from Pikaia/Finch Bay $400-600/couple including park entry',
        tip: 'Visit June–November to maximise nesting and dancing activity. Bring a 200mm zoom lens or longer — though honestly your phone gets the close-ups.',
      },
      {
        icon: '🌋',
        title: 'Sierra Negra Volcano Hike (Isabela)',
        description: 'Isabela Island\'s active Sierra Negra has the second-largest active caldera on earth (10km wide). A 16km round-trip guided hike circles the rim and can extend to the Volcán Chico vents. Otherworldly black-and-red lava fields, fumaroles, dramatic cloud forest descents.',
        cost: 'Full-day guided $250/couple; included with Scalesia Lodge stays',
        tip: 'Wear hiking boots — lava rock is sharp and unforgiving. Pack 3L water; equatorial sun + altitude + black rock = serious dehydration.',
      },
      {
        icon: '🚢',
        title: 'Silver Origin Expedition Cruise',
        description: 'Silversea\'s 100-guest expedition ship designed exclusively for Galápagos. Eight zodiacs, 18 expert naturalist guides (1:8 ratio), butler service in every suite, full-board with all shore excursions and beverages. 7-night routes hit Genovesa, Bartolomé, Floreana, Española, Fernandina, Isabela — islands impossible from land-based bases.',
        cost: '7-night charter from $7,000/couple all-inclusive',
        tip: 'Book the Owner\'s Suite for the panoramic forward windows. Eastern itineraries (Española, Floreana) for marine birds; western (Fernandina, Isabela) for marine iguanas and lava landscapes.',
      },
    ],
    months: [
      { month: 'Jan', weather: 'Warm wet 24-30°C, calm seas', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Excellent — calm seas, vivid colours, hatchling sea turtles' },
      { month: 'Feb', weather: 'Hottest, occasional storms', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Marine iguanas mating colours; flamingos breeding' },
      { month: 'Mar', weather: 'Warm wet, ending', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Last warm-water month; albatross arrive at Española' },
      { month: 'Apr', weather: 'Transition, drying', emoji: '🌤️', crowds: 'Mid', price: 'Mid', verdict: 'Sweet spot — warm seas, baby sea lions, blooming greenery' },
      { month: 'May', weather: 'Cooling, calm', emoji: '🌤️', crowds: 'Mid', price: 'Mid', verdict: 'Excellent — green islands, blue-footed booby mating dances start' },
      { month: 'Jun', weather: 'Cool dry season starts', emoji: '🌥️', crowds: 'High', price: 'High', verdict: 'Garua mist arriving; whales begin migration' },
      { month: 'Jul', weather: 'Cool 19-26°C, garua mist', emoji: '🌥️', crowds: 'Peak', price: 'Highest', verdict: 'Peak season — busiest, best for marine wildlife and seabirds' },
      { month: 'Aug', weather: 'Cool dry, choppier seas', emoji: '🌥️', crowds: 'Peak', price: 'Highest', verdict: 'Whale-watching peak; rougher channel crossings' },
      { month: 'Sep', weather: 'Cool dry, peak garua', emoji: '🌥️', crowds: 'Mid', price: 'High', verdict: 'Excellent value — dramatic skies, high marine activity' },
      { month: 'Oct', weather: 'Cool dry, slightly warming', emoji: '🌤️', crowds: 'Mid', price: 'Mid', verdict: 'Strong shoulder month; sea lion pups everywhere' },
      { month: 'Nov', weather: 'Warming, calmer seas', emoji: '🌤️', crowds: 'Mid', price: 'Mid', verdict: 'Brown noddies & boobies still active; better water temps' },
      { month: 'Dec', weather: 'Warm wet starting', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Holiday peak — green islands, warm seas, festive booking pressure' },
    ],
    budgetTiers: [
      { label: 'Mid-Luxury', range: '$400–$900/night', gets: 'Charming lodge or boutique hotel on Santa Cruz or Isabela. Day-boat included; standard naturalist guide.', example: 'Iguana Crossing, Scalesia Lodge, Royal Palm Galapagos' },
      { label: 'Premium', range: '$700–$2,500/night', gets: 'Hilltop design lodge or luxury safari camp with private day yacht for excursions, top-tier guides.', example: 'Pikaia Lodge, Galapagos Safari Camp, Finch Bay' },
      { label: 'Iconic Cruise', range: '$5,000–$15,000/couple/7-nights', gets: 'Full-board expedition cruise — all islands, all activities, butler suites, expert naturalist guides.', example: 'Silversea Silver Origin, Ecoventura Origin/Theory' },
    ],
    areas: [
      { name: 'Santa Cruz Island (Puerto Ayora)', bestFor: 'Land-based luxury, Charles Darwin Station, day-boat hub', description: 'The most developed island, central archipelago location, gateway to most day-boat excursions. Pikaia, Finch Bay, Royal Palm, and Galapagos Safari Camp all here. 4–5 nights.' },
      { name: 'Isabela Island (Puerto Villamil)', bestFor: 'Less-developed island, marine iguanas, volcano hikes', description: 'The largest island, sparsely populated, raw Galápagos feel. Iguana Crossing and Scalesia Lodge here. Sierra Negra volcano and Tintoreras snorkelling.' },
      { name: 'Floreana Island', bestFor: 'Day-trip from cruise; pink flamingos, Post Office Bay', description: 'Smallest inhabited island. Rarely overnight; visited as cruise stop or day boat from Santa Cruz.' },
      { name: 'Outer Islands (Genovesa, Fernandina, Española)', bestFor: 'Cruise-only access, peak wildlife densities', description: 'No human inhabitants — only reachable by expedition cruise. Genovesa for red-footed boobies, Fernandina for marine iguanas, Española for waved albatross (Apr–Dec).' },
    ],
    expertTips: [
      { tip: 'Cruise vs land-based — pick deliberately', detail: 'Land-based = bigger rooms, longer evenings, lighter days, easier seasickness. Cruise = more islands (especially outer), more wildlife volume, no unpacking, expert naturalists 24/7. Most honeymooners prefer cruise; some couples mix 3 nights land + 4 nights cruise.' },
      { tip: 'Book Silversea or Ecoventura 12+ months ahead', detail: 'Premium cruises are tightly capacity-controlled by national-park rules. Top suites on Silver Origin and the entire Ecoventura Theory yacht sell out 12-18 months ahead, especially July-August and December-January.' },
      { tip: 'The $200/pax park fee is on top of everything', detail: 'Galápagos National Park entrance is $200/person (cash, USD) on arrival, plus $20/pax Transit Card at Quito or Guayaquil airport. Not included in cruise or hotel pricing. Bring $440 cash for two travellers.' },
      { tip: 'Bring waterproof everything', detail: 'You\'ll be wet daily — zodiac landings (wet vs dry), snorkel sessions, occasional rain. Dry bag, waterproof phone case, quick-dry clothes. Most cruises supply wetsuits but sizing is hit-or-miss; bring your own if you have one.' },
      { tip: 'Combine with Quito or Mashpi mainland Ecuador', detail: 'Most flights route Quito (UIO) → Galápagos. Add 2 nights Quito (Casa Gangotena historic plaza hotel) or 2 nights Mashpi Lodge cloud-forest extension. Doubles the wildlife and cultural experience.' },
    ],
    packing: [
      { item: 'Reef-safe mineral sunscreen', why: 'Equatorial UV is brutal; chemical sunscreens are banned in marine areas. Bring SPF 50 mineral. Apply 30 min before water entry.' },
      { item: 'Wet shoes / Tevas / Keens', why: 'Wet landings on rocky beaches require grip and toe protection. Flip-flops slip on lava rock; running shoes get wrecked. Closed-toe water sandals are the answer.' },
      { item: '3mm shorty wetsuit', why: 'Even in warm season (Dec-May), Galápagos water is cooler than tropical equivalents. Most cruises supply but sizing is mixed; bring your own if you have one.' },
      { item: 'Long-sleeve UV-protective shirt', why: 'On zodiacs and shore walks, sun reflection from water and lava is intense. UPF50 long sleeves beat constant sunscreen reapplication.' },
      { item: 'Quality binoculars', why: 'Distant whales, frigates riding thermals, finch identification. 8x42 is the honeymoon-friendly format. Ecoventura provides on-board; Silversea by request.' },
    ],
    guide: {
      getting: 'Fly to Quito (UIO) or Guayaquil (GYE) — both have international flights from Madrid, Amsterdam, Miami, NYC, Bogota. Internal Avianca, LATAM, or Equair flights to Baltra (GPS) or San Cristóbal (SCY) — 2-2.5h. Most cruises depart Baltra; land-based hotels meet you at Baltra or San Cristóbal. Total transit from Europe ~18-22h with 1-2 connections.',
      where: 'Classic 9-night itinerary: 2 nights Quito (Casa Gangotena) → 2 nights Mashpi Lodge cloud forest → 5 nights Galápagos (3 nights Pikaia + 2 nights Scalesia OR 7-night cruise replacing both). Cruise-focused: 2 Quito + 7 cruise. Land-only: 2 Quito + 5 Santa Cruz + 2 Isabela.',
      when: 'Two distinct seasons. December-May: warm (24-30°C), calm seas, vivid green islands, hatchling sea turtles, marine iguana mating colours, occasional rain showers. June-November: cool (19-26°C), choppier seas, garua mist, peak marine wildlife (whales, sharks), seabird breeding peaks. April-May and September-November are sweet-spot shoulder months — fewer crowds, balanced wildlife, better rates.',
    },
    localFood: 'Ceviche (more rustic than Lima\'s — usually fish or shrimp); encebollado (fish + cassava + onion soup, the breakfast hangover cure); patacones (fried green plantain rounds); seco de chivo (slow-cooked goat with rice); locro de papa (potato-cheese soup); arroz marinero (seafood rice); empanadas (smaller than Argentine, often plantain-based); helado de paila (Andean stirred ice cream); cerveza Pilsener (local lager); canelazo (hot sugar-cane rum with naranjilla and cinnamon at altitude). Lodge dining is generally good — Pikaia, Galapagos Safari Camp, and the cruises serve refined Ecuadorian-international.',
    currency: 'US Dollar (USD) — official currency since 2000. Cards accepted at hotels and major restaurants; cash needed for park fees, tips, and small island purchases.',
    language: 'Spanish (Ecuadorian accent — clear, slow); Quichua in Andean mainland. English universal at hotels, lodges, cruises, and naturalist guides.',
    timezone: 'UTC-6 (Galápagos Time, 1h behind mainland Ecuador, no daylight saving)',
  },

  'norway': {
    hero: '/images/hotels/lyngen-north-glass-igloos-norway/hero.webp',
    tagline: 'Fjords, aurora, and slow Nordic luxury — the most cinematic honeymoon landscape in Europe.',
    intro: 'Norway is the European honeymoon for couples who want their photographs to look unreal. Mile-deep glacial fjords, the midnight sun in summer, the aurora borealis from October through March, sauna-and-fjord bathing rituals, and a particular brand of Nordic luxury that values quiet over glitz. The country runs on slow travel: a fjord hotel for two nights, a glass-roof igloo for two more, a stylish Oslo design hotel as a bookend. There is no Norway honeymoon resort cluster — every property is its own destination, three to six hours apart.',
    bestTime: 'Jun–Aug (midnight sun) + Oct–Mar (northern lights)',
    flightFrom: '2-3h from London, 7-8h from NYC',
    topExperience: 'Fjord lodges + Northern Lights',
    perfectFor: [
      'Couples obsessed with dramatic landscape — fjords, mountains, glacial water, aurora',
      'Honeymooners who like building a multi-stop itinerary across hotels',
      'Sauna and Nordic-bathing devotees — every great Norwegian property has a serious wood-fire sauna',
      'Photographers — the light here from June to August is unlike anywhere else',
      'Quiet, slow travelers who are happy with one experience per day',
    ],
    skipIf: [
      'You want guaranteed warm-water swimming or a beach honeymoon',
      'You want the resort cocoon — Norway is built around small lodges and hotel-hopping',
      'Your budget is under $400/night — there is no real budget luxury here',
      'You need the equator-summer mid-evening dinner timing — Norwegian dinners run 6:30–8:30pm',
      'Air travel between regions is mandatory and adds cost (Oslo to Tromsø is 2h, not driveable)',
    ],
    experiences: [
      {
        icon: '🌌',
        title: 'Northern Lights from a glass-roof igloo',
        description: 'Lyngen North above the Arctic Circle (Oct–March) puts you under glass lying in bed as the aurora dances. Dog-sledding and reindeer farm visits round out the days. Tromsø, Senja, and Kirkenes are the alternate aurora bases.',
        cost: '$700–$2,000/night per igloo',
        tip: 'Book a minimum of 3 nights for any aurora hunt — the lights are unpredictable and one cloudy night ruins a 2-night trip. Ideal months: Feb–March (driest, longest dark hours).',
      },
      {
        icon: '⛰️',
        title: 'Geirangerfjord cruise from a clifftop hotel',
        description: 'Storfjord Hotel above Geiranger gives you the fjord from 800m above. Day trips by RIB or kayak into the fjord itself. Seven Sisters and Bridal Veil waterfalls. Lunch at Hotel Union Geiranger.',
        cost: '$300–$800 per couple for half-day RIB',
        tip: 'Avoid July–August cruise-ship rush. June and September are sublime. Norwegian Cruise Line ships dock in Geiranger town — clifftop hotels are above the noise.',
      },
      {
        icon: '🛁',
        title: 'Wood-fire sauna over a fjord at sunset',
        description: 'Most Norwegian luxury lodges have a wood-fire sauna built directly over water — Hotel Union Øye, Storfjord, Juvet, 62°NORD properties. Sauna at 80°C, plunge into 8°C fjord, repeat. The defining Norwegian honeymoon ritual.',
        cost: 'Included at all luxury lodges',
        tip: 'Schedule for 9–10pm in summer (still light) and 4–5pm in winter (sunset over the fjord). Bring a good Wool & Prince base layer for the post-plunge.',
      },
      {
        icon: '🎣',
        title: 'Salmon fishing on the Eira or Stryn rivers',
        description: 'Norway invented sport salmon fishing. The Eira and Stryn rivers near Storfjord and Hotel Union Øye are world-class. Half-day with a guide, all gear included, catch-and-release for big Atlantic salmon.',
        cost: '$400–$1,200 per couple half-day',
        tip: 'Best months: June–early August. Ask for a guide who speaks English — most do. The fishing is genuinely difficult — go for the experience, not the catch count.',
      },
      {
        icon: '🚁',
        title: 'Helicopter scenic flight over Sunnmøre Alps',
        description: 'A 30-min flight from Hotel Union Øye over the Sunnmøre Alps and Hjørundfjord is the single most photogenic 30 minutes of any Norway trip. Drop-off and pickup on a remote summit for a glass of champagne.',
        cost: '$1,800–$3,500 per couple',
        tip: 'Book directly through your hotel — they have the trusted operator. Weather-dependent; build flexibility into your itinerary.',
      },
    ],
    months: [
      { month: 'Jan', weather: 'Cold, dark, aurora season', emoji: '❄️', crowds: 'Low', price: 'Mid', verdict: 'Aurora prime time' },
      { month: 'Feb', weather: 'Cold, increasing daylight', emoji: '❄️', crowds: 'Low', price: 'Mid', verdict: 'Best aurora month' },
      { month: 'Mar', weather: 'Cold, long days returning', emoji: '🌤', crowds: 'Low', price: 'Mid', verdict: 'Aurora + ski combo' },
      { month: 'Apr', weather: 'Snow melting, transition', emoji: '⛅', crowds: 'Low', price: 'Low', verdict: 'Underrated, quiet' },
      { month: 'May', weather: 'Warming, waterfalls peak', emoji: '🌤', crowds: 'Low-mod', price: 'Mid', verdict: 'Lush + low crowds' },
      { month: 'Jun', weather: 'Midnight sun begins', emoji: '☀️', crowds: 'Moderate', price: 'High', verdict: 'Sweet spot opens' },
      { month: 'Jul', weather: 'Peak summer, busy', emoji: '☀️', crowds: 'Peak', price: 'Highest', verdict: 'Beautiful but crowded' },
      { month: 'Aug', weather: 'Late summer, perfect', emoji: '☀️', crowds: 'Peak', price: 'High', verdict: 'Same as July, slightly cooler' },
      { month: 'Sep', weather: 'Autumn colors, aurora returns', emoji: '🍂', crowds: 'Moderate', price: 'Mid-high', verdict: 'Best balance month' },
      { month: 'Oct', weather: 'Cold, aurora season starts', emoji: '🍂', crowds: 'Low', price: 'Mid', verdict: 'Aurora hunters arrive' },
      { month: 'Nov', weather: 'Dark, snow returning', emoji: '❄️', crowds: 'Low', price: 'Low-mid', verdict: 'Pre-Christmas calm' },
      { month: 'Dec', weather: 'Polar night in north', emoji: '❄️', crowds: 'Mod (Christmas)', price: 'Mid-high', verdict: 'Christmas markets + aurora' },
    ],
    budgetTiers: [
      { label: 'Accessible Luxury', range: '$400–$700/night', gets: 'Boutique 4-star like Britannia Trondheim or Eilert Smith Stavanger. Excellent food and design but no spa-resort facilities.', example: 'Britannia Hotel Trondheim, Eilert Smith Stavanger, Hotel Brosundet Ålesund' },
      { label: 'Premium Lodges', range: '$700–$1,500/night', gets: 'Fjord-view rooms, wood-fire sauna, Michelin-class dining, included excursions. The classic Norway honeymoon tier.', example: 'Storfjord Hotel, Hotel Union Øye, The Thief Oslo' },
      { label: 'Ultra-Luxury', range: '$1,500+/night', gets: 'Private glass igloos, helicopter access, full-board with all activities. Adults-only design hotels.', example: 'Juvet Landscape Hotel, Lyngen North Glass Igloos' },
    ],
    areas: [
      { name: 'Western Fjords (Geiranger / Sunnmøre)', bestFor: 'Iconic fjord landscape', description: 'Geirangerfjord (UNESCO) and Hjørundfjord are the most photogenic. Storfjord Hotel, Hotel Union Øye, and Juvet Valldal cluster here. 4–5 days minimum to do justice.' },
      { name: 'Oslo & Trondheim', bestFor: 'City design + arrival/departure', description: 'The Thief in Oslo and Britannia Hotel Trondheim are the urban bookends. Use 2 nights at the start or end for design hotels, restaurants, and Munch museum (Oslo).' },
      { name: 'Stavanger & Lysefjord', bestFor: 'Pulpit Rock + dramatic short hikes', description: 'Eilert Smith Hotel and RE-NAA (3 Michelin stars) make Stavanger an underrated 2–3 night destination. Pulpit Rock and Kjerag boulder hikes are the bucket-list day trips.' },
      { name: 'Lofoten Islands', bestFor: 'Fishing villages + dramatic peaks', description: 'Photography honeymoon paradise — red fishermen huts (rorbuer), jagged peaks, white-sand Arctic beaches. Eliassen Rorbuer or Hattvika Lodge are the boutique stays.' },
      { name: 'Tromsø & Lyngen Alps', bestFor: 'Northern Lights + Arctic adventure', description: 'Lyngen North Glass Igloos, Aurora Spirit Distillery, dog sledding. October–March only for aurora; June–August for midnight sun and whale watching.' },
    ],
    expertTips: [
      { tip: 'Book aurora trips in February–March, not December', detail: 'December has the longest dark hours but worst weather (cloud cover). February–March balances long dark periods with clearer skies and longer daylight for non-aurora activities.' },
      { tip: 'Use Vy trains between cities, not flights', detail: 'Oslo–Bergen on the Bergen Railway is one of the world\'s most scenic train rides. Pre-book 1st class with the panorama windows for $200/couple — better than a $400 flight and far more memorable.' },
      { tip: 'Eat at the hotel restaurant, not "outside"', detail: 'Outside restaurants in fjord villages close at 9pm and are tourist-driven. Hotel restaurants like Speilsalen (Britannia), Christian (Hotel Union Øye), and the Juvet glasshouse dining room serve the best New Nordic cuisine in the country.' },
      { tip: 'Pack for two seasons, even in summer', detail: 'Summer fjord weather can swing from 25°C sun to 8°C wind in 2 hours. Pack a Patagonia Houdini wind shell, merino base layer, hat, and gloves even in July.' },
      { tip: 'Budget for at least 2 internal flights', detail: 'Norway is 1,750km north-to-south. Oslo–Tromsø is 2h by SAS or Norwegian. Factor 2 internal flights ($300–$500 per couple total) into any north + south itinerary.' },
    ],
    packing: [
      { item: 'Merino base layers (top + bottom)', why: 'Sauna-plunge, fjord boat trips, aurora hunts — merino regulates better than synthetic in the temperature swings' },
      { item: 'Patagonia Houdini wind shell', why: 'Pocket-size shell for fjord winds, mountaintops, and unexpected showers' },
      { item: 'Waterproof hiking shoes', why: 'Trail shoes (Salomon X Ultra or similar) for Pulpit Rock, Trolltunga, fjord-side trails' },
      { item: 'Polarised sunglasses', why: 'Snow glare in winter, midnight sun in summer — your eyes will thank you' },
      { item: 'Travel adapter (Type C/F, EU 2-pin)', why: 'Norway uses standard EU plugs; bring a multi-USB hub for camera + phone + Kindle charging' },
      { item: 'Norwegian Krone (NOK) cash backup', why: 'Mostly cashless, but smaller fjord-village cafés and some excursion guides prefer cash tips (5-10%)' },
      { item: 'Wide-angle camera lens', why: 'You will not capture a fjord with a phone — a 24mm or wider lens is the trip-defining purchase' },
    ],
    guide: {
      getting: 'Fly to Oslo Gardermoen (OSL — direct from London 2h, NYC 7.5h, Tokyo 13h) or Bergen (BGO — for west coast fjord access) or Tromsø (TOS — for Arctic/aurora). Internal flights via SAS, Norwegian, and Widerøe connect every region. The Bergen Railway (Oslo to Bergen, 7h) is the most scenic train route in the country.',
      where: 'Honeymoon-friendly itineraries cluster around (a) Western Fjords (Geirangerfjord, Hjørundfjord) for 4-5 nights, (b) Oslo or Bergen as a city bookend for 2 nights, (c) Lofoten or Tromsø for an additional 3-4 nights for aurora or midnight sun. Driving is excellent quality but distances are vast — internal flights save days.',
      when: 'June–August: midnight sun, all sights open, peak prices, can be busy in Geiranger. September: best balance — autumn color, aurora returns, lower crowds. October–March: aurora season, snow activities, Christmas markets in December. April–May: shoulder month, lush waterfalls, low crowds.',
    },
    localFood: 'New Nordic cuisine has its high-end Norwegian counterpart at restaurants like Speilsalen (Britannia, 1 Michelin), RE-NAA (3 Michelin in Stavanger), Maaemo (3 Michelin in Oslo), and Christian (Hotel Union Øye). Classic Norwegian: smoked salmon, king crab from Kirkenes, fårikål (mutton stew), brunost (brown cheese), and fresh Atlantic cod. Akvavit is the spirit of choice; Norwegian craft beer (Nøgne Ø, 7 Fjell) is excellent.',
    currency: 'Norwegian Krone (NOK). Mostly cashless; cards work everywhere. Tipping 5-10% in restaurants is appreciated but not expected.',
    language: 'Norwegian (Bokmål and Nynorsk). English fluency is universal — Norway has the highest English proficiency of any non-native country.',
    timezone: 'UTC+1 (UTC+2 in summer with daylight saving)',
  },

  'lake-como': {
    hero: '/images/hotels/grand-hotel-tremezzo-lake-como/hero.webp',
    tagline: 'Italy\'s most photographed lake — gilded grand-dame villas, vintage Riva boats, Bellagio sunsets.',
    intro: 'Lake Como is the European honeymoon for couples who want classical Italian glamour without the crowds of Capri or Positano. The lake is shaped like an upside-down Y, ringed by 19th-century villas now converted into the most romantic hotels in Italy — Villa d\'Este (since 1873), Grand Hotel Tremezzo, Passalacqua (World #1 in 2023), Mandarin Oriental, Il Sereno. The honeymoon rhythm: morning swim in a lake-front infinity pool, lunch at a fishing-village osteria across the water by vintage Riva, afternoon nap, sunset aperitivo, three-hour Italian dinner. Repeat for seven days.',
    bestTime: 'Late May–early July & September',
    flightFrom: '60–90 min from Milan Malpensa',
    topExperience: 'Lake-front villa hotels',
    perfectFor: [
      'Couples who love classical Italian style — frescoed ceilings, antique-filled rooms, lake-front pools',
      'Slow honeymooners — the rhythm here is meals, swims, naps, sunsets',
      'First-time Italy honeymooners with a generous budget ($1,000+/night minimum for the best hotels)',
      'Vintage boat enthusiasts — the Cantieri Riva mahogany speedboats are the lake\'s defining icon',
      'Couples doing a multi-stop Italy itinerary (Milan + Como + Florence/Tuscany works perfectly)',
    ],
    skipIf: [
      'You want a beach — this is a lake (cold, deep, no sand)',
      'Your budget is under $700/night — Lake Como\'s mid-tier is $400/night which feels modest after the icons',
      'You hate driving on narrow lake-front roads — traffic in summer is dense, hire a driver',
      'You want nightlife — the lake closes by 11pm in classic Italian rhythm',
      'You\'re visiting in November–March — most luxury hotels close for the season',
    ],
    experiences: [
      {
        icon: '🛥️',
        title: 'Vintage Riva Aquarama lake tour',
        description: 'A private mahogany Riva Aquarama or Tritone speedboat, hired for half a day from Bellagio, Como, or directly from your hotel\'s dock. Captain takes you across to Villa Balbianello (the James Bond villa), Bellagio, Tremezzo, and Cernobbio.',
        cost: '$1,500–$3,500 per couple half-day',
        tip: 'Book through your hotel — they have the trusted operators. Book the Aquarama specifically (the larger Tritone has less of the iconic profile). Pack a champagne hamper.',
      },
      {
        icon: '🏛️',
        title: 'Villa Carlotta + Villa Balbianello gardens',
        description: 'Two of the great Italian botanical gardens — Carlotta (Tremezzo) for camellias and Balbianello (Lenno) for terraced romanticism on a peninsula. Balbianello featured in Star Wars Episode II and Casino Royale.',
        cost: '€20 per villa entry; full-day private guide ~€400',
        tip: 'Visit Balbianello Tuesday–Sunday only (closed Monday). The 1km uphill walk from the boat dock is steep — rent the small electric shuttle if needed.',
      },
      {
        icon: '🍷',
        title: 'Bellagio aperitivo + Punta Spartivento sunset',
        description: 'Take the ferry or private boat to Bellagio, walk the cobbled streets, aperitivo at La Punta or Bar Rossi as the sun drops over the Y of the lake from the spit at the village\'s northernmost point.',
        cost: '€30–€60 per couple',
        tip: 'Avoid Bellagio between 11am and 3pm in July–August (cruise tourists). Late afternoon and evening are when locals come out.',
      },
      {
        icon: '🚁',
        title: 'Helicopter to Milan for Opera at La Scala',
        description: 'A 25-min helicopter from your hotel\'s lawn to Milan Linate, dinner at Cracco or Antica Trattoria della Pesa, opera at La Scala, helicopter back. The most decadent honeymoon evening Italy can offer.',
        cost: '$3,000–$5,000 per couple all-in',
        tip: 'Book opera tickets at least 2 months ahead via the La Scala website. Hotel concierges (Tremezzo, Mandarin) handle the helicopter charter.',
      },
      {
        icon: '🥾',
        title: 'Sentiero del Viandante hike',
        description: 'The "Wayfarer\'s Path" along the eastern shore — 45km in total but day-walkable in 5km sections. Lierna to Varenna is the classic 4h leg with constant lake views and a Varenna lunch reward.',
        cost: 'Free (or hotel-arranged guide ~€200)',
        tip: 'Take the train from Como to Lierna in the morning, walk to Varenna, lunch at Il Cavatappi, ferry back to your hotel\'s dock. Wear trail shoes — sections are stony.',
      },
    ],
    months: [
      { month: 'Jan', weather: 'Cold, mostly closed', emoji: '❄️', crowds: 'Lowest', price: 'N/A', verdict: 'Most luxury hotels closed' },
      { month: 'Feb', weather: 'Cold, mostly closed', emoji: '❄️', crowds: 'Lowest', price: 'N/A', verdict: 'Most luxury hotels closed' },
      { month: 'Mar', weather: 'Spring transition', emoji: '⛅', crowds: 'Low', price: 'Low', verdict: 'Hotels reopen mid-March' },
      { month: 'Apr', weather: 'Mild, blooming gardens', emoji: '🌤', crowds: 'Low', price: 'Low-mid', verdict: 'Quiet shoulder, gardens open' },
      { month: 'May', weather: 'Warm, perfect', emoji: '🌤', crowds: 'Mod (rising)', price: 'Mid-high', verdict: 'Sweet spot starts mid-May' },
      { month: 'Jun', weather: 'Warm, swimming begins', emoji: '☀️', crowds: 'Moderate', price: 'High', verdict: 'Best month — warm + manageable' },
      { month: 'Jul', weather: 'Hot, crowded', emoji: '☀️', crowds: 'Peak', price: 'Highest', verdict: 'Spectacular but busy' },
      { month: 'Aug', weather: 'Hot, very crowded', emoji: '☀️', crowds: 'Peak', price: 'Highest', verdict: 'Italian holiday — packed everywhere' },
      { month: 'Sep', weather: 'Warm, calmer', emoji: '🌤', crowds: 'Mod-high', price: 'High', verdict: 'Twin sweet spot with June' },
      { month: 'Oct', weather: 'Cooling, autumn colors', emoji: '🍂', crowds: 'Mod (falling)', price: 'Mid', verdict: 'Underrated final month' },
      { month: 'Nov', weather: 'Cool, hotels closing', emoji: '⛅', crowds: 'Low', price: 'Low', verdict: 'Most close mid-month' },
      { month: 'Dec', weather: 'Cold, closed', emoji: '❄️', crowds: 'Lowest', price: 'N/A', verdict: 'Most luxury hotels closed' },
    ],
    budgetTiers: [
      { label: 'Accessible Luxury', range: '$400–$700/night', gets: 'Lake-view 4-star such as Filario in Lezzeno or smaller villa hotels in Menaggio.', example: 'Hotel Filario, Hotel Belvedere Bellagio' },
      { label: 'Premium', range: '$700–$1,500/night', gets: 'Lake-view suite at a 5-star, breakfast included, spa access, lake-front pool.', example: 'CastaDiva Resort, Grand Hotel Villa Serbelloni Bellagio, Il Sereno' },
      { label: 'Ultra-Luxury', range: '$1,500–$5,000/night', gets: 'Iconic-villa rooms, butler service, multi-Michelin dining on-site, private boat included.', example: 'Villa d\'Este, Grand Hotel Tremezzo, Passalacqua, Mandarin Oriental' },
      { label: 'Exclusive-Use', range: '$5,000–$15,000/night', gets: 'Entire historic villa with staff for two — Villa Sola Cabiati, the Tremezzo-managed private villa.', example: 'Villa Sola Cabiati' },
    ],
    areas: [
      { name: 'Cernobbio (west, southern)', bestFor: 'Classic grand-dame era', description: 'Villa d\'Este and CastaDiva sit here. Closest to Como city (10 min). Quiet evening atmosphere; ferry network at the doorstep.' },
      { name: 'Tremezzina (west, central)', bestFor: 'Best Bellagio views from the western shore', description: 'Grand Hotel Tremezzo and Passalacqua. Faces Bellagio across the lake — the most photographed angle. Walking distance to Villa Carlotta gardens.' },
      { name: 'Bellagio (central, eastern peninsula)', bestFor: '"The pearl of the lake" village', description: 'Grand Hotel Villa Serbelloni occupies the promontory. Walking to all village restaurants. Best base if you want a cobbled-street evening rhythm.' },
      { name: 'Torno & Blevio (east, southern)', bestFor: 'Contemporary luxury', description: 'Il Sereno and Mandarin Oriental face the western shore (afternoon shade, sunset glow). Quieter, more residential. 15-min boat to Como.' },
      { name: 'Varenna & Menaggio (mid-lake villages)', bestFor: 'Authentic village stays', description: 'Smaller boutique hotels (Hotel du Lac Varenna, Royal Victoria). More affordable. Excellent ferry connections to all icons.' },
    ],
    expertTips: [
      { tip: 'Book your hotel\'s private boat for at least one half-day', detail: 'Public ferries are cheap and frequent but the half-day private mahogany Riva is the trip-defining experience. Tremezzo, Mandarin, and Il Sereno all maintain vintage Riva fleets for guests.' },
      { tip: 'Eat lunch in fishing villages, dinner at the hotel', detail: 'The hotel restaurants are Michelin-class but expensive. Lunch in Varenna (Il Cavatappi), Bellagio (La Punta), Lenno (Sant\'Anna) — €60–€100 per couple, fresh perch and risotto, local wine.' },
      { tip: 'Avoid Bellagio mid-day in summer', detail: 'Cruise-ship day-trippers fill Bellagio between 11am and 3pm in July–August. Visit in late afternoon or early morning. The same goes for Villa Balbianello.' },
      { tip: 'Hire a driver from Milan, not a rental car', detail: 'A private driver from Milan to your Lake Como hotel ($300 each way) saves you Italian motorway parking and lake-shore traffic stress. Worth every euro.' },
      { tip: 'Visit the "Bellagio of the western shore" — Argegno and Lenno', detail: 'The under-touristed western-shore villages of Argegno and Lenno are 70% as scenic as Bellagio with 20% of the crowds. Half-day side trips by ferry.' },
    ],
    packing: [
      { item: 'Smart-casual evening wear', why: 'Hotel restaurants enforce "elegant" dress code — jacket for men at Tremezzo, dress for women' },
      { item: 'Lightweight sweater for evenings', why: 'Lake breezes drop temperatures 8–10°C after sunset even in July' },
      { item: 'Polarised sunglasses', why: 'Lake reflection at midday is intense — protect your eyes for the boat tours' },
      { item: 'Walking shoes (not sandals)', why: 'Bellagio cobbles, Sentiero del Viandante hike, Villa Balbianello uphill walk' },
      { item: 'Reef-safe sunscreen', why: 'You\'ll be in the water frequently; the lake is glacially fed and very clear' },
      { item: 'Italian electrical adapter (Type C/F)', why: 'Standard EU 2-pin works in most outlets; older properties have Type L (Italian 3-pin)' },
    ],
    guide: {
      getting: 'Fly to Milan Malpensa (MXP, 60-90 min by car to the lake) or Linate (LIN, 80-100 min). Trains from Milan Centrale to Como S. Giovanni (40 min) — the most scenic option. Most luxury hotels offer private transfer ($300-$500 each way) or speedboat from Como ($200). Helicopter from Milan helipad to lake-side helipads is available for ~$1,500 one-way.',
      where: '7-night classic itinerary: 3 nights at a Tremezzina-shore icon (Tremezzo, Passalacqua) + 2 nights at a Bellagio peninsula property (Villa Serbelloni) + 2 nights at a Cernobbio classic (Villa d\'Este). Or single-base: 7 nights at one icon with daily ferry/boat exploration.',
      when: 'May–early July and September are perfect (warm, blooming, fewer crowds). Late July–August is peak (hot, busy, expensive — especially Italian August holiday). October offers autumn color and falling crowds. Most luxury hotels close mid-November to mid-March.',
    },
    localFood: 'Lake Como cuisine: missoltini (sun-dried agone fish, rare), risotto with perch fillets, pizzoccheri (buckwheat pasta from nearby Valtellina), brasato of beef, polenta uncia. Cheeses: Bitto, Casera, taleggio. Wines: Lugana white from Lake Garda neighbour, Inferno red from Valtellina. Coffee culture: standing espresso at the bar, never sitting.',
    currency: 'Euro (EUR). Cards accepted everywhere; cash useful for small village purchases and ferry tickets.',
    language: 'Italian. English is widely spoken at all luxury hotels and tourist-facing restaurants. Some basic Italian phrases delight locals.',
    timezone: 'UTC+1 (UTC+2 in summer with daylight saving)',
  },

  'rwanda': {
    hero: '/images/hotels/singita-kwitonda-lodge-volcanoes-rwanda/hero.webp',
    tagline: 'One hour with a mountain gorilla family — the most transformative honeymoon hour in Africa.',
    intro: 'Rwanda is the African honeymoon for couples seeking a single profound encounter rather than a beach week. The mountain gorillas of Volcanoes National Park — fewer than 1,000 individuals worldwide, half of them in Rwanda — are accessed via $1,500/day permits and a guided 2-6 hour trek through bamboo forest. The lodges that serve this experience (Singita Kwitonda, One&Only Gorilla\'s Nest, Bisate, Sabyinyo Silverback) are some of the most architecturally significant in East Africa. Combined with a few nights at Magashi Camp (Big 5 in Akagera) or Nyungwe House (chimps + canopy walk), the honeymoon becomes the rare African trip that\'s active, intimate, and meaningful in equal measure.',
    bestTime: 'Jun–Sep (long dry season) + Jan–Feb (short dry)',
    flightFrom: '11h from Brussels, 6h from Doha, direct from Addis/Nairobi',
    topExperience: 'Mountain Gorilla Trekking',
    perfectFor: [
      'Couples seeking a single life-defining wildlife experience over a beach week',
      'Honeymooners willing to invest ($1,500/permit/day per person + lodge rates) for genuine exclusivity',
      'Those drawn to architecturally significant lodges in remote settings',
      'Conservation-minded travelers (Rwanda funnels gorilla revenue back into the parks)',
      'Reasonably fit couples (treks can be 2–8 hours through hilly bamboo forest at altitude)',
    ],
    skipIf: [
      'You want a beach honeymoon — Rwanda is landlocked and lake-only',
      'You have less than 5 nights in Rwanda — you need 3 lodges minimum to do the loop properly',
      'You\'re uncomfortable with altitude (2,500m+ at the Volcanoes lodges)',
      'You want nightlife or city energy — Kigali is calm and restaurant-focused, not vibrant',
      'You have mobility limitations — even "easy" treks involve uneven terrain',
    ],
    experiences: [
      {
        icon: '🦍',
        title: 'Mountain Gorilla Trek',
        description: 'The trek of a lifetime. After a pre-dawn briefing at Kinigi park HQ, your group of 8 is allocated to one of the habituated gorilla families (Susa, Sabyinyo, Agashya, Hirwa, etc). You trek 2-6 hours through bamboo forest. Once you find the family, you spend exactly 1 hour with them — silverbacks, mothers, juveniles, infants. They are completely indifferent to your presence. The most extraordinary 60 minutes most couples ever spend.',
        cost: '$1,500 per person per day for the permit',
        tip: 'Book 9-12 months ahead via your lodge. Request a moderate-difficulty family if you have any joint issues. Gaiters, walking sticks, and porters ($25 tip) are provided by all luxury lodges.',
      },
      {
        icon: '🐒',
        title: 'Golden Monkey Trek (bamboo forest)',
        description: 'A lighter, easier 1.5-hour round-trip into the bamboo forest to find the golden monkey families — endemic to the Albertine Rift. Cheerful, photogenic, and a perfect "second trek" day for couples who don\'t want to do back-to-back gorilla treks.',
        cost: '$100 per person permit',
        tip: 'Book 1-2 days after your gorilla trek for variety. Bring a long lens (200mm+) — the monkeys are constantly moving in the bamboo canopy.',
      },
      {
        icon: '⚱️',
        title: 'Dian Fossey grave hike',
        description: 'A demanding 4-5 hour round-trip hike through the rainforest to the Karisoke Research Center ruins and Fossey\'s simple grave beside her favourite gorilla, Digit. This is the emotional heart of Volcanoes National Park — not for tourists, for those who care.',
        cost: '$75 per person permit',
        tip: 'Read "Gorillas in the Mist" before the trip. Best done 2-3 days into your stay, after you\'ve had the gorilla encounter and understand the stakes.',
      },
      {
        icon: '🌳',
        title: 'Nyungwe canopy walk + chimp trek',
        description: 'A 2-3 night detour to southern Rwanda\'s Nyungwe National Park: walk the 90m-long Igishigishigi suspension bridge 60m above the rainforest floor, plus a chimp trek (~70% sighting success) through Afromontane forest.',
        cost: 'Permits + lodge stay; ~$1,500 per couple per night at Nyungwe House',
        tip: 'Combine with the gorilla loop only if you have 9+ nights in-country. Otherwise stick to Volcanoes + Akagera.',
      },
      {
        icon: '🦁',
        title: 'Akagera Big 5 game drive (Magashi)',
        description: 'Rwanda\'s only Big 5 ecosystem — eastern savannah Akagera National Park, where lions were reintroduced in 2015 and rhinos in 2017. Magashi Camp\'s 6 tents on Lake Rwanyakazinga give you boat safaris (hippos, crocs) plus open-vehicle game drives.',
        cost: '~$1,200-$3,000/night per couple at Magashi (all-inclusive)',
        tip: 'Plan 2-3 nights here as the perfect counterpoint to the high-altitude Volcanoes portion. Wilderness arranges direct flights between Bisate and Magashi airstrips.',
      },
    ],
    months: [
      { month: 'Jan', weather: 'Short dry season, warm', emoji: '☀️', crowds: 'Moderate', price: 'High', verdict: 'Excellent — short dry season' },
      { month: 'Feb', weather: 'Short dry, hot at low elev.', emoji: '☀️', crowds: 'Moderate', price: 'High', verdict: 'Best of short dry season' },
      { month: 'Mar', weather: 'Long rains begin', emoji: '🌧', crowds: 'Low', price: 'Low-mid', verdict: 'Wet, muddy trails' },
      { month: 'Apr', weather: 'Heavy rains', emoji: '🌧', crowds: 'Lowest', price: 'Lowest', verdict: 'Lowest rates, hardest hiking' },
      { month: 'May', weather: 'Easing rains', emoji: '⛅', crowds: 'Low', price: 'Low', verdict: 'Wet but greening' },
      { month: 'Jun', weather: 'Long dry season starts', emoji: '☀️', crowds: 'Moderate', price: 'High', verdict: 'Best season opens' },
      { month: 'Jul', weather: 'Cool, dry, peak season', emoji: '☀️', crowds: 'Peak', price: 'Highest', verdict: 'Perfect trekking weather' },
      { month: 'Aug', weather: 'Cool, dry, peak season', emoji: '☀️', crowds: 'Peak', price: 'Highest', verdict: 'Peak — book 9-12 mo ahead' },
      { month: 'Sep', weather: 'Cool, dry, perfect', emoji: '☀️', crowds: 'Peak', price: 'Highest', verdict: 'Excellent through to mid-Oct' },
      { month: 'Oct', weather: 'Short rains begin late', emoji: '🌤', crowds: 'Mod (early Oct)', price: 'High (early)', verdict: 'Early Oct great, late Oct wet' },
      { month: 'Nov', weather: 'Short rains, muddy', emoji: '🌧', crowds: 'Low', price: 'Mid', verdict: 'Wet but green' },
      { month: 'Dec', weather: 'Drying, holiday rates', emoji: '⛅', crowds: 'Mod (Christmas)', price: 'High', verdict: 'Late Dec dries out' },
    ],
    budgetTiers: [
      { label: 'Comfortable', range: '$300–$900/night per couple', gets: 'Boutique Kigali (The Retreat) or international 5-star (Kigali Marriott). Use for arrival/departure nights only.', example: 'The Retreat by Heaven, Kigali Marriott' },
      { label: 'Premium Lodges', range: '$1,200–$2,000/night per couple', gets: 'Full-service safari lodge with all activities included. Sabyinyo Silverback, Magashi, One&Only Nyungwe.', example: 'Sabyinyo Silverback Lodge, Magashi Camp, One&Only Nyungwe House' },
      { label: 'Ultra-Luxury Volcanoes lodges', range: '$2,000–$5,000/night per couple', gets: 'Singita, Bisate, One&Only Gorilla\'s Nest. All-inclusive of meals, premium drinks, in-room spa, transfers. Permits separate.', example: 'Singita Kwitonda, Bisate Lodge, One&Only Gorilla\'s Nest' },
    ],
    areas: [
      { name: 'Volcanoes National Park (north)', bestFor: 'Gorilla trekking', description: '2.5h drive from Kigali. Singita Kwitonda, One&Only Gorilla\'s Nest, Bisate, Sabyinyo Silverback all cluster around the village of Kinigi. Cool mountain climate (10-22°C), 2,500m+ altitude.' },
      { name: 'Akagera National Park (east)', bestFor: 'Big 5 safari complement', description: '2.5h drive from Kigali or 1h flight from Volcanoes. Magashi Camp is the only luxury lodge. Hot savannah climate (28-34°C), low altitude.' },
      { name: 'Nyungwe National Park (southwest)', bestFor: 'Chimp trekking + canopy walk', description: '5h drive from Kigali. One&Only Nyungwe House is the luxury option. Cool rainforest climate. Best as a 2-3 night southern detour.' },
      { name: 'Kigali (capital)', bestFor: 'Arrival/departure + Genocide Memorial', description: 'The cleanest, safest African capital. Kigali Marriott and The Retreat by Heaven are the top hotels. 1-2 nights at the start or end of any trip.' },
      { name: 'Lake Kivu (west)', bestFor: 'Beach-style relaxation', description: 'Africa\'s 6th-largest lake. Boutique lakefront stays at Lake Kivu Serena or Cleo Lake Kivu for couples wanting 2-3 days of pure rest after the Volcanoes trek.' },
    ],
    expertTips: [
      { tip: 'Book 9-12 months ahead — permits are limited to 96/day countrywide', detail: 'Gorilla permits are sold via Rwanda Development Board to operators on a strict daily cap. Your lodge secures them with the booking; trying to add a permit later may fail.' },
      { tip: 'Acclimatise for 24h before your first trek', detail: 'Volcanoes lodges sit at 2,500-2,700m. Spending day 1 at the lodge (no trek) before tackling day 2 dramatically improves your trek experience.' },
      { tip: 'Tip your porter $25-$50 per trek', detail: 'Porters carry your bag, lend a hand on steep sections, and earn most of their income from tips. They are often ex-poachers turned guides — supporting them protects gorillas.' },
      { tip: 'Combine 4 nights Volcanoes + 2-3 nights Akagera', detail: 'The classic 7-night Rwanda honeymoon: Kigali arrival (1 night) → Volcanoes (3-4 nights, 2 gorilla treks) → Akagera (2 nights savannah) → Kigali departure (1 night). Don\'t add Nyungwe unless 9+ total nights.' },
      { tip: 'Visit the Kigali Genocide Memorial — but on departure day', detail: 'It\'s essential context for understanding modern Rwanda but emotionally heavy. Best visited on your final day in-country, not before the gorilla trek.' },
    ],
    packing: [
      { item: 'Broken-in waterproof hiking boots', why: 'Volcanoes trails are muddy, rooty, often steep — ankle support is essential' },
      { item: 'Long-sleeved, breathable trekking layers', why: 'Bamboo and stinging-nettle protection; cool mountain climate' },
      { item: 'Lightweight gardening gloves', why: 'For grabbing branches without nettle stings during the trek' },
      { item: 'Quality rain jacket (Gore-Tex)', why: 'Volcanoes weather changes fast — even dry-season treks can hit a downpour' },
      { item: 'Camera with 70-200mm lens', why: 'You\'re held 7m back from gorillas; phones don\'t cut it for the close-up shots' },
      { item: 'USD cash for tips ($300-$500)', why: 'Porters, guides, drivers — tipping is expected and dollars preferred' },
      { item: 'Insect repellent (DEET 30%+)', why: 'Mosquitoes in Akagera are the main carrier of malaria; take prophylaxis too' },
    ],
    guide: {
      getting: 'Fly to Kigali International (KGL) — direct from Brussels (Brussels Airlines, 8h), Doha (Qatar Airways, 7h), Addis Ababa (Ethiopian, 2h), Nairobi (Kenya Airways/RwandAir, 1.5h), Amsterdam (KLM, 8h), Istanbul (Turkish, 8h). Lodges arrange ground transfers ($200-$400 each way) or charter flights between regions ($600-$1,200/couple).',
      where: 'Standard 7-night itinerary: 1 night Kigali → 4 nights Volcanoes (2-3 gorilla treks) → 2 nights Magashi Akagera. The 9-10 night extension adds 2-3 nights in Nyungwe for chimps + canopy walk. Don\'t skip the night either side of Volcanoes — drive times are real.',
      when: 'June-September (long dry season) and January-February (short dry) are peak. Wet seasons (March-May, October-November) offer lower rates and dramatic green forests but harder trail conditions.',
    },
    localFood: 'Rwandan cuisine: isombe (mashed cassava leaves with peanut paste), brochettes (skewered grilled meat), ubugali (cassava porridge), igitoki (cooking bananas), Akabanga (the legendary Rwandan chili oil). Lake Kivu sambaza (small fish) is the local specialty. Coffee is exceptional — Rwanda is a top global single-origin source. Restaurants Heaven (Kigali), Repub Lounge (Kigali), and lodge-based dining are the highlights.',
    currency: 'Rwandan Franc (RWF). USD widely accepted at lodges and tourist sites; cards work in Kigali but cash needed in rural areas. Tip in USD for international staff, RWF for local porters.',
    language: 'Kinyarwanda is the national language. French and English are official. English is universal at lodges; learning "Muraho" (hello) and "Murakoze" (thank you) is appreciated.',
    timezone: 'UTC+2 (Central Africa Time, no daylight saving)',
  },

  'australia': {
    hero: '/images/hotels/longitude-131-uluru-australia/hero.webp',
    tagline: 'A continent-honeymoon — Great Barrier Reef, Uluru, Sydney Harbour, Tasmanian wilderness. The most varied multi-stop trip on earth.',
    intro: 'Australia is the once-in-a-lifetime honeymoon — a continent that requires multiple internal flights and 14+ days to do justice. The honeymoon trifecta: an iconic city (Sydney for the Opera House view), the Great Barrier Reef (Lizard Island private-island, qualia adults-only Whitsundays), and the Red Centre (Longitude 131° tented pavilions facing Uluru). Add Tasmania (Saffire Freycinet, Southern Ocean Lodge on Kangaroo Island) for the southern wilderness leg, or Margaret River wine country for the western finale. There is no other country where you can see coral, desert, vineyard, and metropolis in 14 days.',
    bestTime: 'Sep–Nov & Mar–May (shoulder seasons)',
    flightFrom: '20-24h from Europe, 14h from LAX',
    topExperience: 'Continent-spanning multi-stop',
    perfectFor: [
      'Couples on a 14-21 day honeymoon willing to fly internally 3-5 times',
      'Beach and reef enthusiasts (Great Barrier Reef is the world\'s largest)',
      'Wine couples — Margaret River, Hunter Valley, McLaren Vale, Tasmania',
      'Cinematic landscape photographers (Uluru sunrise, Whitehaven Beach, Wineglass Bay)',
      'Big-city honeymooners (Sydney is one of the world\'s most photographed cities)',
    ],
    skipIf: [
      'You have less than 12 nights — Australia is too vast for short trips',
      'Long-haul flying (20+ hours) is a deal-breaker',
      'Your budget is under $5,000 per person all-in (international flights + 5-star lodges)',
      'You want a single-base resort honeymoon (qualia or Lizard Island standalone work, but you\'d miss the country)',
      'You want guaranteed perfect weather — Australia\'s seasons reverse the northern hemisphere',
    ],
    experiences: [
      {
        icon: '🪸',
        title: 'Great Barrier Reef snorkel + dive',
        description: 'The world\'s largest coral ecosystem (2,300km, visible from space). Lizard Island gives you direct dinghy access; qualia and the Hamilton Island marina serve outer-reef catamaran trips; Sailaway from Port Douglas is the day-trip option. Cod Hole, Bait Reef, Hardy Reef are the legendary sites.',
        cost: 'Half-day snorkel from $200/couple; private island access $1,500+/couple/night',
        tip: 'Visit May-October for calm seas and best visibility (25m+). November-April is cyclone season — book outer-reef days as flexible add-ons, not fixed activities.',
      },
      {
        icon: '🏜️',
        title: 'Uluru sunrise + Field of Light',
        description: 'Watching Uluru change color from blue to red as the sun rises is the defining Red Centre moment. Field of Light (Bruce Munro\'s 50,000-stem desert installation, by night) and Tabletop dune-top dining at Longitude 131° turn the sandstone monolith into the most cinematic backdrop in Australia.',
        cost: 'Field of Light $50/person; Longitude 131° dune dining included with stay',
        tip: 'Stay at Longitude 131° (16 tented pavilions facing Uluru) — there is no other lodging with the same view. Book 9-12 months ahead.',
      },
      {
        icon: '🌉',
        title: 'Sydney Opera House dinner + BridgeClimb',
        description: 'Dinner at Bennelong (inside the Opera House sail) followed by a contemporary opera or ballet, then walking back across Circular Quay. The next morning, BridgeClimb the Sydney Harbour Bridge for 360° photos. Park Hyatt Sydney is the only hotel facing the Opera House across the water.',
        cost: 'BridgeClimb $300-$400/person; Bennelong dinner $200-$300/couple',
        tip: 'Book Bennelong for "before show" timing if attending the Opera the same evening. Reserve BridgeClimb for early morning for the best harbor light.',
      },
      {
        icon: '🍷',
        title: 'Margaret River or Tasmanian wine day',
        description: 'Margaret River (3h from Perth) for Cabernet Sauvignon, Chardonnay, and surf; Tasmania for Pinot Noir and sparkling. Day-trips with private drivers from your base hotel hit 4-5 cellar doors with a long vineyard lunch.',
        cost: 'Private guide $500-$1,000/couple full-day',
        tip: 'Margaret River works as a 2-3 night side trip from Perth (Crown Towers); Tasmanian wine is best from Saffire Freycinet as part of the East Coast journey.',
      },
      {
        icon: '🦘',
        title: 'Kangaroo Island wildlife + Southern Ocean Lodge',
        description: 'Australian sea lions on the beach at Seal Bay, koalas in the wild on lodge trails, Tasmanian devils at sanctuaries. Southern Ocean Lodge (reopened 2023 after fires) is the dramatic clifftop base.',
        cost: '$2,500-$5,500/night per couple at Southern Ocean Lodge (all-inclusive)',
        tip: 'Combine with 2-3 nights in Adelaide for the Barossa Valley wine country. Book Southern Ocean Lodge 9-12 months ahead — only 25 suites.',
      },
    ],
    months: [
      { month: 'Jan', weather: 'Hot, summer holidays', emoji: '☀️', crowds: 'Peak', price: 'Highest', verdict: 'Beach peak — but humid + cyclone risk in north' },
      { month: 'Feb', weather: 'Hot, humid, cyclones', emoji: '🌧', crowds: 'Mod (Aussie return to school)', price: 'High', verdict: 'Avoid northern reef areas' },
      { month: 'Mar', weather: 'Cooling, wet north', emoji: '⛅', crowds: 'Moderate', price: 'Mid-high', verdict: 'Sydney + Tas excellent; reef shoulder' },
      { month: 'Apr', weather: 'Mild autumn', emoji: '🌤', crowds: 'Moderate', price: 'Mid', verdict: 'Sweet-spot autumn for Sydney + Uluru' },
      { month: 'May', weather: 'Cool, dry, perfect', emoji: '🌤', crowds: 'Mod-low', price: 'Mid', verdict: 'Best month for the dry season' },
      { month: 'Jun', weather: 'Cool dry, winter starts', emoji: '🌤', crowds: 'Low-mod', price: 'Mid', verdict: 'Excellent for Uluru + reef' },
      { month: 'Jul', weather: 'Cool dry, whales arrive', emoji: '🌤', crowds: 'Mod (school hols)', price: 'Mid-high', verdict: 'Whale-watching peak; cool nights in south' },
      { month: 'Aug', weather: 'Cool dry, perfect', emoji: '☀️', crowds: 'Moderate', price: 'Mid-high', verdict: 'Best multi-region honeymoon month' },
      { month: 'Sep', weather: 'Warming spring', emoji: '☀️', crowds: 'Moderate', price: 'High', verdict: 'Sweet spot — warm + low rain' },
      { month: 'Oct', weather: 'Warm spring, blooms', emoji: '☀️', crowds: 'High (rising)', price: 'High', verdict: 'Excellent across all regions' },
      { month: 'Nov', weather: 'Warm, building heat', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Late spring still great; reef warming' },
      { month: 'Dec', weather: 'Hot summer holidays', emoji: '☀️', crowds: 'Peak', price: 'Highest', verdict: 'Beach peak — Christmas-NYE chaos in Sydney' },
    ],
    budgetTiers: [
      { label: 'City Luxury', range: '$700–$2,200/night', gets: 'Park Hyatt Sydney (Opera-view), Capella Sydney, Crown Towers Perth — full-service 5-star with views, spas, fine dining.', example: 'Park Hyatt Sydney, Capella Sydney, Crown Towers Perth' },
      { label: 'Iconic Lodges', range: '$1,500–$3,500/night per couple all-inclusive', gets: 'Saffire Freycinet, qualia, Lizard Island, Capella Lodge — destination lodges with included activities and most meals.', example: 'Saffire Freycinet, qualia, Lizard Island Resort' },
      { label: 'Ultra-Luxury Wilderness', range: '$2,500–$5,500/night per couple all-inclusive', gets: 'Longitude 131° (Uluru), Southern Ocean Lodge (Kangaroo Island) — Baillie Lodges flagship tier with helicopter and signature experiences.', example: 'Longitude 131°, Southern Ocean Lodge' },
    ],
    areas: [
      { name: 'Sydney + NSW (east)', bestFor: 'Iconic city + Hunter Valley wines', description: 'Park Hyatt Sydney for Opera-view honeymoons; Capella Sydney for design-led heritage. 3-4 nights in Sydney with a Hunter Valley wine day-trip is the classic city leg.' },
      { name: 'Whitsundays + Great Barrier Reef (Queensland)', bestFor: 'Reef + island resort romance', description: 'qualia (adults-only on Hamilton Island) and Lizard Island (private island) are the icons. Whitehaven Beach, Heart Reef helicopter, outer-reef snorkel days. 4-5 nights minimum.' },
      { name: 'Uluru + Red Centre (Northern Territory)', bestFor: 'Desert spirituality + Aboriginal culture', description: 'Longitude 131° is the only luxury option. 2-3 nights for Uluru base walk, Kata Tjuta hike, Field of Light, Tabletop dining.' },
      { name: 'Tasmania (Saffire + Southern Ocean Lodge)', bestFor: 'Wilderness + wine + seafood', description: 'Saffire Freycinet (East Coast) and Southern Ocean Lodge on Kangaroo Island (technically South Australia, often packaged with Tasmania) are the southern wilderness tier. Add 5-7 nights.' },
      { name: 'Perth + Margaret River (Western Australia)', bestFor: 'Wine country + remote luxury', description: 'Crown Towers Perth as the city base, then 3-day Margaret River wine country trip. Adds 5-6 nights and the most diverse wine experience in Australia.' },
    ],
    expertTips: [
      { tip: 'Build the trip around 3 max regions, not 5', detail: 'Trying to do Sydney + Reef + Uluru + Tasmania + Perth in 14 nights is too much. Pick 3 — typically Sydney + Reef + Uluru for the iconic loop, OR Sydney + Tasmania + Reef for the wilderness loop.' },
      { tip: 'Book internal flights with Qantas, not low-cost', detail: 'Qantas operates the most reliable schedules between Sydney, Cairns, Hamilton Island, Ayers Rock, Hobart, and Perth. The "discount" via Jetstar costs you delays and missed lodge transfers.' },
      { tip: 'For the Reef, choose Lizard Island OR qualia, not both', detail: 'They\'re both private-island/Whitsundays luxury. Lizard for reef-immersion (5 nights of snorkel and dive); qualia for adults-only resort polish (5 nights of pavilions, pool, Pebble Beach Club).' },
      { tip: 'Stay 3 nights at Longitude 131° minimum', detail: 'Uluru deserves 3 nights for sunrise base walk, Kata Tjuta day, Field of Light + Tabletop. 2 nights here feels rushed; 4 is luxurious.' },
      { tip: 'Book ABC (Australian Bush Tucker) tasting when at Longitude 131°', detail: 'The Anangu cultural tastings and dot-painting workshops at the Cultural Centre are essential context. Pre-book through your concierge.' },
    ],
    packing: [
      { item: 'Reef-safe sunscreen (Stream2Sea or similar)', why: 'Australian reef areas restrict oxybenzone-based sunscreens; UV is intense year-round' },
      { item: 'Lightweight long-sleeve shirts (UPF 50+)', why: 'Sun protection on reef boats and Uluru hikes is more important than a tan' },
      { item: 'Hiking shoes + water shoes', why: 'Hiking shoes for Uluru base walk + Tasmanian trails; water shoes for reef snorkel from beach' },
      { item: 'Layers for desert temperature swings', why: 'Uluru can be 35°C by day and 5°C by night, even in winter' },
      { item: 'Australian power adapter (Type I)', why: 'Australia uses unique 3-prong angled plugs — bring a multi-region adapter' },
      { item: 'Polarised sunglasses', why: 'Reef glare, desert glare, Sydney Harbour glare — non-negotiable' },
      { item: 'Smart-casual outfits for Sydney + qualia dining', why: 'Bennelong, Aria, Long Pavilion at qualia all enforce upscale dress' },
      { item: 'Quality camera (mirrorless preferred)', why: 'You\'re flying 20h to photograph Uluru and the Opera House — phone cameras under-deliver' },
    ],
    guide: {
      getting: 'Fly to Sydney (SYD) or Melbourne (MEL) as international gateways. From Europe: ~24h via Singapore (SQ), Doha (QR), or Dubai (EK). From the US West Coast: 14h direct via Qantas, United, or American. Internal flights via Qantas and Jetstar to all major cities and resort airports (Hamilton Island HTI, Ayers Rock AYQ, Hobart HBA, Cairns CNS, Perth PER).',
      where: 'Classic 14-night honeymoon: 4 nights Sydney (Park Hyatt) → 5 nights Reef (qualia or Lizard Island) → 3 nights Uluru (Longitude 131°) → 2 nights Sydney departure. Wilderness 21-night version adds 5 nights Tasmania + 3 nights Kangaroo Island. Wine version: 14 nights with 3 nights Margaret River instead of Reef.',
      when: 'September-November (Australian spring) and March-May (autumn) are the sweet spots — warm enough for the reef, cool enough for the Red Centre. Avoid Dec-Feb in the north (cyclone risk) and June-August in Tasmania (wet/cold) unless winter Tasmania appeals.',
    },
    localFood: 'Modern Australian: native ingredients (kangaroo, crocodile, finger lime, lemon myrtle, native pepperberry) cooked in international techniques. World-class restaurants: Quay (Sydney), Tetsuya\'s (Sydney), Vue de Monde (Melbourne), Brae (Birregurra), Fervor (pop-up wilderness dinners). Wine: Margaret River Cab/Chardonnay, Hunter Valley Semillon, Tasmanian Pinot, Yarra Valley sparkling. Coffee culture is among the world\'s best — flat whites everywhere.',
    currency: 'Australian Dollar (AUD). Cards accepted everywhere; cashless tipping at restaurants is not customary (10% appreciated for excellent service in fine dining).',
    language: 'English. Distinctive Australian vocabulary (brekkie = breakfast, arvo = afternoon, servo = service station). Aboriginal languages still spoken in some communities; learn "Hello" in Pitjantjatjara at Uluru as a gesture.',
    timezone: 'UTC+8 (Perth) to UTC+10 (Sydney) — three time zones across the country, plus daylight saving in some states',
  },

  'italy': {
    hero: '/images/hotels/belmond-hotel-caruso-italy/hero.webp',
    tagline: 'Amalfi cliffs, Tuscan cypress, Lake Como ferries, and Sicilian arancini — Italy is the honeymoon every other honeymoon is measured against.',
    intro: 'Italy is the honeymoon nobody regrets. The challenge isn\'t whether to come — it\'s choosing which Italy. The Amalfi Coast (Positano\'s pastel cliffs at Le Sirenuse, Ravello\'s clifftop calm at Belmond Hotel Caruso) delivers the cinematic Mediterranean cliché honestly earned: lemon groves, white linen, Da Adolfo on Laurito beach for the salt-baked mozzarella lunch, sunset Aperol on a private terrace 365m above the sea. Tuscany is the slower, browner, more agricultural Italy — Borgo Santo Pietro\'s Michelin-starred farm-to-table near Chiusdino, Brunello tastings in Montalcino, Castello di Reschio\'s 1,500-year-old Umbrian estate one valley east. Lake Como is the most theatrical of the lakes — Passalacqua, voted World\'s Best Hotel, sits across the water from Bellagio, and the ferry between Varenna, Bellagio and Menaggio remains one of Europe\'s great honeymoon rituals. Then the cities: Florence (Villa Cora\'s Belle Époque palazzo five minutes from the Boboli Gardens) for Renaissance saturation; Rome for Trastevere trattorie and Vatican dawns. The wildcards are the most rewarding: Sicily — Verdura Resort\'s 230 hectares of olive groves on the southern coast — and Puglia, where Masseria Torre Coccaro turns a 16th-century fortified farmhouse into one of the south\'s defining honeymoon stays. Italy rewards the couple who picks two regions and goes deep, never the couple who tries to hit five in ten days.',
    bestTime: 'May–Jun & Sep–early Oct (shoulder peaks)',
    flightFrom: '2–3h London / 8–9h US East Coast',
    topExperience: 'Coast, Countryside & Cathedrals',
    perfectFor: [
      'First-time-to-Italy couples who want the Amalfi-Tuscany-Lake Como triangle',
      'Food-and-wine honeymooners — Brunello, Barolo, Da Vittorio in Brusaporto, Sicilian street food',
      'Architecture and art lovers — Florence, Rome, Palermo\'s Norman cathedrals',
      'Couples who prefer two long stays over six short ones — settle into a masseria or villa',
      'Romantics who care about beauty for its own sake — there is no more visually generous country',
    ],
    skipIf: [
      'You want unspoilt empty beaches in summer — Amalfi and Como are crowded Jun–Aug',
      'You\'re on a tight budget in peak — Positano and Lake Como in July run $1,200+/night',
      'You hate driving narrow cliff roads — the Amalfi SS163 is famously white-knuckle',
      'You\'re looking for a single-base lazy beach week — Italy rewards movement and curiosity',
    ],
    experiences: [
      { icon: '🍋', title: 'Lunch at Da Adolfo on Laurito Beach', description: 'Reachable only by the red-fish-flag boat from Positano\'s main pier, Da Adolfo has been the Amalfi insider lunch for fifty years. Mozzarella grilled on lemon leaves, spaghetti alle vongole, white peach in chilled local wine. Wood tables on the pebble beach, swimsuits encouraged.', cost: '€80–€140/couple with house wine', tip: 'Take the 12:15pm boat, eat slowly, swim mid-meal, last boat back at 5pm. Le Sirenuse concierge will radio ahead.' },
      { icon: '🚤', title: 'Lake Como Ferry Loop — Bellagio, Varenna, Menaggio', description: 'The "Centro Lago" ferry triangle is the defining Lake Como afternoon. From Passalacqua\'s private dock take the morning boat to Bellagio for a Campari at Bar Rossi, ferry across to Varenna for lunch at Il Cavatappi, then Menaggio for gelato. Three towns, four hours, the whole point of the lake.', cost: 'Day pass €23/person; private water-taxi €450', tip: 'First ferry at 9:30am to skip day-trippers. Passalacqua\'s vintage Riva loop is €1,800 — the photo pays off forever.' },
      { icon: '🍷', title: 'Brunello Tasting Day in Montalcino', description: 'A private day visiting Biondi-Santi (the original 1888 producer), Casanova di Neri, and lunch at Osteria Osticcio with its cellar of 800 Brunellos and a panorama over the Val d\'Orcia. The definitive Tuscan wine day.', cost: 'Private guide + driver + 3 estates: €600–€900/couple', tip: 'Borgo Santo Pietro\'s sommelier organises the route; ask for the "vertical Biondi-Santi" — three vintages spanning 30 years.' },
      { icon: '🍝', title: 'Trastevere Trattoria Crawl, Rome', description: 'Rome\'s old artisans\' quarter on the west bank of the Tiber. Aperitivo at Freni e Frizioni, cacio e pepe at Da Enzo al 29 (no reservations, queue 7pm sharp), tiramisù at Pompi, nightcap on Ponte Sisto with a view of St Peter\'s dome.', cost: '€100–€160/couple all-in', tip: 'Stay south of Viale di Trastevere (less touristy). For a quieter alternative, Da Cesare al Casaletto is where Roman chefs eat.' },
      { icon: '🌋', title: 'Mount Etna & Catania from Verdura', description: 'A long but worthwhile day from Verdura: helicopter or 2h30 drive to Etna\'s southern flank, lunch at Planeta or Pietradolce on the volcanic slopes, sunset in Catania\'s baroque Piazza Duomo and arancini at Savia.', cost: 'Helicopter day €4,500/couple; private driver day €600', tip: 'Verdura\'s concierge organises the helicopter — landing at the winery itself.' },
    ],
    months: [
      { month: 'Jan', weather: 'Cold across Italy, 5–12°C', emoji: '❄️', crowds: 'Very low', price: 'Lowest', verdict: 'Cities only — Rome and Florence empty and atmospheric' },
      { month: 'Feb', weather: 'Cold, occasional snow north', emoji: '❄️', crowds: 'Low', price: 'Low', verdict: 'Venice Carnival aside, skip — Amalfi/Como largely closed' },
      { month: 'Mar', weather: 'Spring stirring, 10–16°C', emoji: '🌸', crowds: 'Low', price: 'Low', verdict: 'Cities and Tuscany excellent value; coast still cool' },
      { month: 'Apr', weather: 'Beautiful 16–22°C, wisteria blooming', emoji: '🌸', crowds: 'Moderate', price: 'Mid', verdict: 'Tuscany peak; Amalfi reopening — wonderful, mostly dry' },
      { month: 'May', weather: 'Warm 20–25°C, swimmable south', emoji: '☀️', crowds: 'High', price: 'Mid–High', verdict: 'The single best month — everywhere works, no heatwave' },
      { month: 'Jun', weather: 'Hot 25–30°C, sea warming', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Excellent before mid-month; school holidays late June' },
      { month: 'Jul', weather: 'Very hot 30–35°C, humid cities', emoji: '🥵', crowds: 'Peak', price: 'Peak', verdict: 'Coast yes, cities punishing — Florence in July is brutal' },
      { month: 'Aug', weather: 'Hottest, ferragosto closures', emoji: '🥵', crowds: 'Peak', price: 'Peak', verdict: 'Italians on holiday — tourist towns mobbed, restaurants closed' },
      { month: 'Sep', weather: 'Warm 24–28°C, sea still warm', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'The other "best" month — second only to May' },
      { month: 'Oct', weather: 'Mild 18–24°C, vendemmia (harvest)', emoji: '🍇', crowds: 'Moderate', price: 'Mid', verdict: 'Tuscany peak — wine harvest, truffles, perfect light' },
      { month: 'Nov', weather: 'Cooling 12–18°C, white truffle season', emoji: '🍂', crowds: 'Low', price: 'Low', verdict: 'Cities and Tuscany lovely; Amalfi closing' },
      { month: 'Dec', weather: 'Cold, festive cities', emoji: '🎄', crowds: 'Moderate', price: 'Mid', verdict: 'Rome/Florence at Christmas is magical; coast closed' },
    ],
    budgetTiers: [
      { label: 'Upscale', range: '$500–$900/night', gets: 'Excellent 5★ in cities, classic Tuscan agriturismi, mid-range coast.', example: 'Villa Cora Florence, Hotel Splendido Mare Portofino, Capri Tiberio Palace' },
      { label: 'Premium', range: '$900–$2,000/night', gets: 'Iconic-address coast hotels, top masserie, lakefront landmarks.', example: 'Belmond Hotel Caruso, Le Sirenuse, Masseria Torre Coccaro, Borgo Santo Pietro' },
      { label: 'Ultra-Luxury', range: '$2,000–$6,000/night', gets: 'World\'s-best-hotel tier, private estates, ultra-bespoke service.', example: 'Passalacqua Lake Como, Castello di Reschio, Verdura Resort Villa, J.K. Place Capri' },
    ],
    areas: [
      { name: 'Amalfi Coast — Positano & Ravello', bestFor: 'Cliffside drama, Mediterranean classic', description: 'Positano is buzzy, vertical, photogenic (Le Sirenuse); Ravello is 365m above the sea, slower (Belmond Hotel Caruso). Pair them: 2 nights Positano, 3 nights Ravello.' },
      { name: 'Tuscany & Umbria', bestFor: 'Slow countryside, wine, food', description: 'Borgo Santo Pietro near Chiusdino for Michelin-starred farm dining; Castello di Reschio for the entire-private-estate feel. 4–5 nights, day-trip to Siena, San Gimignano, Montalcino.' },
      { name: 'Lake Como', bestFor: 'Lakefront grandeur, ferry days', description: 'Passalacqua (ex-World\'s Best Hotel) on the western shore at Moltrasio. 3 nights minimum to do the ferry triangle and a Bellagio dinner.' },
      { name: 'Florence & Rome', bestFor: 'Art, architecture, urban honeymoon', description: 'Florence (Villa Cora overlooking Boboli) for the Uffizi and the David; Rome for the Vatican, Trastevere, Borghese. 3 nights each, Frecciarossa (1h35) between.' },
      { name: 'Sicily & Puglia', bestFor: 'Wildcard south, fewer crowds', description: 'Verdura Resort\'s 230 hectares on Sicily\'s southern coast. Masseria Torre Coccaro in Puglia\'s Itria Valley — 16th-century fortified farmhouse, trulli countryside.' },
    ],
    expertTips: [
      { tip: 'Pick two regions, not five — Italy punishes the rushed', detail: 'The classic mistake: Rome → Florence → Venice → Amalfi → Capri in 10 nights. The honeymoon formula that works: one countryside or coast base for 4–5 nights plus one city for 3 nights. Save the rest for the next Italy trip.' },
      { tip: 'Avoid August — and the first half of July if possible', detail: 'Italians take ferragosto in August: shops shut, beach towns mobbed, prices peak. Florence and Rome become punishingly hot (38°C+). Mid-September through mid-October is the connoisseur\'s window — warm sea, harvest festivals, prices 30% off.' },
      { tip: 'Book restaurants before you book hotels', detail: 'Da Vittorio in Brusaporto (3-Michelin-star) takes reservations 3 months out and the honeymoon-tier tables go fast. Same with Le Sirenuse\'s La Sponda, Borgo Santo Pietro\'s Saporium. Lock the marquee dinners in before flights.' },
      { tip: 'Drive in Tuscany; never in Amalfi or cities', detail: 'A rental car is essential in Tuscany — back roads are the joy. But on the Amalfi Coast the SS163 is white-knuckle and parking nonexistent — a private driver (€400/day) is cheaper than the stress. ZTL fines arrive months later, €200–€400 each.' },
      { tip: 'The shoulder days matter — arrive Tuesday, leave Sunday', detail: 'Italian restaurants close one day a week (often Monday); museums often close Mondays — Uffizi, Last Supper. Sunday lunch is sacred. Arriving Tuesday, leaving Sunday morning, dodges the worst closures.' },
    ],
    packing: [
      { item: 'Smart-casual evening wardrobe', why: 'Italians dress better than you. Linen trousers and tucked shirt for men; a real dress for women. Le Sirenuse, Passalacqua, Da Vittorio expect it.' },
      { item: 'Comfortable but elegant walking shoes', why: 'Florence, Rome, Positano are cobbled and steep. Loafers or proper sandals work for both day sightseeing and aperitivo.' },
      { item: 'Light cashmere or pashmina', why: 'Even in summer, evenings on the Amalfi Coast and Lake Como cool quickly, and churches require covered shoulders for entry.' },
      { item: 'Real swimwear (and a second set)', why: 'Italian beach clubs at Le Sirenuse, Verdura, Lido di Venezia are see-and-be-seen.' },
      { item: 'Sunglasses you won\'t cry over losing', why: 'Sicilian and Amalfi sun is intense. Boats and scooters claim sunglasses on Italian honeymoons.' },
      { item: 'Compact daypack', why: 'Tuscan vineyard walks, Pompeii, climbing to Ravello\'s Villa Cimbrone — water and a rolled jacket save the day.' },
    ],
    guide: {
      getting: 'Fly Rome FCO or Milan MXP. For Amalfi: Naples NAP, then 90 min private transfer or helicopter. For Sicily: Palermo PMO or Catania CTA. For Puglia: Bari BRI or Brindisi BDS. The Frecciarossa high-speed train (Rome–Florence 1h35, Rome–Milan 3h) is faster and more civilised than internal flights.',
      where: 'Classic 12-night: 4 nights Amalfi → 4 nights Tuscany (Borgo Santo Pietro or Castello di Reschio) → 3 nights Lake Como (Passalacqua) → 1 night Milan to fly home. For 14 nights: insert 4 nights Sicily (Verdura) or Puglia (Masseria Torre Coccaro) before flying home from Catania or Bari.',
      when: 'May, late September, and early October are the connoisseur windows — warm enough for the coast, cool enough for the cities, 30% cheaper than peak August.',
    },
    localFood: 'Italian food is regional, not national. Amalfi: spaghetti alle vongole, mozzarella di bufala, sfogliatelle. Tuscany: bistecca alla fiorentina, pici cacio e pepe, Brunello and Chianti Classico. Lake Como: missoltini, risotto al pesce persico. Rome: cacio e pepe, carbonara (no cream, ever). Sicily: arancini, pasta alla Norma, cannoli, granita with brioche for breakfast. Puglia: orecchiette con cime di rapa, burrata, focaccia barese.',
    currency: 'Euro (€) — €1 ≈ $1.10',
    language: 'Italian (English widely spoken in tourism)',
    timezone: 'CET (UTC+1) / CEST (UTC+2)',
  },

  'jamaica': {
    hero: '/images/hotels/round-hill-hotel-villas-jamaica/hero.webp',
    tagline: 'Reggae soul, cliff-jump sunsets, and the Caribbean\'s most charismatic coastline',
    intro: 'Jamaica doesn\'t do quiet honeymoons — and that\'s exactly its charm. Where the Bahamas sells you stillness and St. Lucia sells you drama, Jamaica offers something rarer: a destination with a pulse, a personality, and a sense of self that no resort brochure can manufacture. Negril\'s western cliffs deliver the postcard — Seven Mile Beach\'s talcum sand by day, divers leaping from Rick\'s Café at dusk. Drive east and Montego Bay\'s grand dames (Round Hill, Half Moon) hold court with the kind of old-Caribbean glamour that hosted Noël Coward and Ian Fleming. Push further to Ocho Rios for waterfall climbs and GoldenEye\'s literary cool, or keep going to Port Antonio, where the Blue Lagoon glows turquoise and almost no one finds you. The brave skip the north entirely for Treasure Beach — south coast, fishermen\'s villages, Pelican Bar floating on stilts a mile offshore. The food alone justifies the trip: jerk pulled smoking from oil-drum pits at Boston Beach, ackee and saltfish at sunrise, Blue Mountain coffee that ruins all other coffee. The culture runs deeper still — Bob Marley\'s mausoleum at Nine Mile, sound systems thumping in every parish, reggae and dancehall as living traditions. Honeymooners who lean into Jamaica — who rent a car, talk to bartenders, eat off-resort — leave with a bond to the island that placid beach destinations can\'t forge.',
    bestTime: 'Mid-Dec to mid-Apr (dry); late Apr–early Jun is the value sweet spot',
    flightFrom: '3h45 NYC, 1h30 Miami, 9h30 London — to Montego Bay (MBJ)',
    topExperience: 'Sunset cliff dive at Rick\'s Café',
    perfectFor: [
      'Couples who want culture, music, and personality alongside their beach time',
      'Honeymooners willing to rent a car and explore beyond the resort gates',
      'Food-driven travelers chasing jerk pits, rum bars, Blue Mountain coffee farms',
      'Repeat Caribbean visitors bored of identical white-sand-and-rum-punch formulas',
      'Music lovers — reggae, dancehall, sound system culture as a living thing',
    ],
    skipIf: [
      'You want a sanitized, fully-curated resort bubble with zero local friction',
      'Hassle from beach vendors or street touts genuinely ruins your mood',
      'You\'re hoping for Maldives-clear water — Jamaica\'s sea is beautiful but not glassy',
      'Driving on the left on winding mountain roads sounds like a nightmare',
    ],
    experiences: [
      { icon: '💦', title: 'Climb Dunn\'s River Falls', description: 'A 600-foot cascade you literally climb as a human chain — guides lead, couples grip hands, water roars around you. Touristy, yes; unforgettable, also yes. Go at 8:30am opening to beat cruise crowds.', cost: '$25 entry, $40 with guide', tip: 'Wear water shoes (rentable on-site for $7). Early-morning slot is 70% emptier than midday.' },
      { icon: '🌅', title: 'Sunset cliff dive at Rick\'s Café', description: 'Negril\'s legendary west-coast sunset spot. Local divers leap from 35-foot cliffs as the sun drops, rum punch flows, the band plays Marley.', cost: 'Free entry, $20-30 drinks', tip: 'Don\'t order food — the kitchen is mediocre. Drinks, sunset, and the show are the point.' },
      { icon: '☕', title: 'Blue Mountain coffee farm tour', description: 'Drive up into the Blue Mountains above Kingston for a working-farm tour at Craighton or Old Tavern. Hand-pick beans, watch roasting, taste flights at 3,000 feet.', cost: '$80-150/couple incl. transport', tip: 'Pair with lunch at EITS Café in Newcastle — farm-to-table, mountain air, no tourists.' },
      { icon: '🛶', title: 'Pelican Bar at Treasure Beach', description: 'A driftwood shack on stilts a mile offshore in the south coast shallows. Captain Floyd runs you out for $30, drops you with a Red Stripe, picks you up whenever. Pure magic.', cost: '$30-40 boat round trip + drinks', tip: 'Stay at Jakes Hotel and have them arrange the boat. Go for sunset, not midday.' },
      { icon: '🎵', title: 'Bob Marley Mausoleum at Nine Mile', description: 'A pilgrimage into the hills of St. Ann to the village where Marley was born and buried. Tours run through his childhood home, the meditation stone, the mausoleum itself.', cost: '$25 entry, $120-180 with private transport', tip: 'Skip the cruise-ship combo tours. Hire a private driver for a half-day so you can linger.' },
    ],
    months: [
      { month: 'Jan', weather: '82°F / 70°F, dry', emoji: '☀️', crowds: 'Peak', price: 'Highest', verdict: 'Postcard weather, peak rates — book 4+ months ahead' },
      { month: 'Feb', weather: '83°F / 70°F, dry', emoji: '☀️', crowds: 'Peak', price: 'Highest', verdict: 'Valentine\'s premium plus spring break — busiest of the year' },
      { month: 'Mar', weather: '84°F / 72°F, dry', emoji: '☀️', crowds: 'Very High', price: 'Highest', verdict: 'Spring break crowds in MoBay/Negril — Port Antonio stays calm' },
      { month: 'Apr', weather: '85°F / 73°F, dry', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Sweet spot after mid-April — great weather, easing rates' },
      { month: 'May', weather: '86°F / 75°F, brief showers', emoji: '⛅', crowds: 'Low', price: 'Mid', verdict: 'Best value-to-weather ratio of the year' },
      { month: 'Jun', weather: '87°F / 76°F, occasional rain', emoji: '⛅', crowds: 'Low', price: 'Mid', verdict: 'Quiet beaches, warm sea, low hurricane risk early' },
      { month: 'Jul', weather: '88°F / 77°F, humid', emoji: '⛅', crowds: 'Medium', price: 'High', verdict: 'European vacation crowds; Reggae Sumfest in MoBay late July' },
      { month: 'Aug', weather: '89°F / 77°F, humid', emoji: '⛅', crowds: 'Medium', price: 'High', verdict: 'Hot, humid, hurricane risk rising — okay but not ideal' },
      { month: 'Sep', weather: '88°F / 76°F, wet', emoji: '🌧️', crowds: 'Lowest', price: 'Lowest', verdict: 'Peak hurricane month — skip unless you love a gamble' },
      { month: 'Oct', weather: '87°F / 75°F, wet', emoji: '🌧️', crowds: 'Low', price: 'Mid', verdict: 'Still hurricane season — many small hotels close for renovations' },
      { month: 'Nov', weather: '85°F / 73°F, drying', emoji: '⛅', crowds: 'Medium', price: 'High', verdict: 'Shoulder magic — dry weather returns, rates still moderate' },
      { month: 'Dec', weather: '83°F / 71°F, dry', emoji: '☀️', crowds: 'Very High', price: 'Highest', verdict: 'Holiday weeks are the priciest of the year — book by August' },
    ],
    budgetTiers: [
      { label: 'Comfortable', range: '$350-550/night', gets: 'Boutique guesthouse or mid-tier all-inclusive on a good beach. Solid honeymoon, real Jamaican character.', example: 'Couples Tower Isle in Ocho Rios or Couples Swept Away in Negril' },
      { label: 'Elevated', range: '$700-1,200/night', gets: 'Iconic boutique properties — clifftop suites, plantation estates, all the legendary names just below ultra-luxury.', example: 'The Caves in Negril or Jamaica Inn in Ocho Rios' },
      { label: 'Iconic', range: '$1,400-3,500/night', gets: 'Private cottages, butler service, the properties Caribbean honeymoon dreams are made of — with the heritage to match.', example: 'Round Hill in Montego Bay or GoldenEye in Oracabessa' },
    ],
    areas: [
      { name: 'Negril', bestFor: 'Cliffs, sunsets, laid-back boho vibe', description: 'The west coast — Seven Mile Beach\'s endless powder sand, the West End cliffs with their dramatic dive spots. Boho-luxe rather than polished.' },
      { name: 'Montego Bay', bestFor: 'Old-Caribbean grandeur, easiest airport access', description: 'Home to Jamaica\'s legendary heritage hotels (Round Hill, Half Moon) and Doctor\'s Cave Beach. 15 minutes from MBJ.' },
      { name: 'Ocho Rios', bestFor: 'Waterfalls, adventure, classic resort variety', description: 'Mid-north coast, anchored by Dunn\'s River Falls. Properties like GoldenEye and Jamaica Inn occupy serene private coves.' },
      { name: 'Port Antonio', bestFor: 'Lush jungle escape, off-the-radar romance', description: 'The island\'s lushest, least-developed coast — Blue Lagoon, Frenchman\'s Cove, jungle rivers. 2.5 hours from MBJ.' },
      { name: 'Treasure Beach', bestFor: 'South-coast soul, fishing villages, Pelican Bar', description: 'A string of fishing coves on the dry south coast. No big resorts, just guesthouses and Pelican Bar a mile offshore.' },
    ],
    expertTips: [
      { tip: 'Fly into Montego Bay (MBJ), not Kingston', detail: 'Unless you\'re heading specifically to Port Antonio or the Blue Mountains, MBJ is the right airport. Kingston is a 4-hour drive from most honeymoon destinations.' },
      { tip: 'Hire a driver instead of self-driving for transfers', detail: 'Jamaica drives on the left, mountain roads are tight, signage is inconsistent. A private driver for the airport-to-hotel run costs $80-150 and is dramatically more relaxing.' },
      { tip: 'Get out of the resort at least three times', detail: 'The single biggest mistake honeymooners make is never leaving the property. Eat at Scotchies (jerk), Pushcart (Negril), or Jack Sprat (Treasure Beach). The resort food doesn\'t represent Jamaica.' },
      { tip: 'Tip generously and chat with everyone', detail: 'Service-industry wages are low, and Jamaicans are some of the warmest people you\'ll meet. A 15-20% tip and genuine conversation will transform your trip.' },
      { tip: 'Pack bug spray with DEET', detail: 'Mosquitoes and sand flies are real, especially at dusk and especially in lush areas like Port Antonio. Resort-supplied repellent is usually weak.' },
    ],
    packing: [
      { item: 'Reef-safe sunscreen (SPF 50)', why: 'Jamaica enforces reef-safe rules at marine parks; pack it before you arrive — local prices 3x US.' },
      { item: 'Water shoes', why: 'Essential for Dunn\'s River Falls, Blue Hole, and most rocky beach entries on the cliffs of Negril.' },
      { item: 'DEET-based bug spray', why: 'Sand flies at dusk in Port Antonio and Treasure Beach are no joke.' },
      { item: 'Light layer for evenings', why: 'Trade winds can drop temps to upper 60s in winter; Blue Mountain excursions get genuinely cool.' },
      { item: 'A nicer dinner outfit', why: 'Heritage hotels like Round Hill and Jamaica Inn observe smart-casual dress codes.' },
      { item: 'Cash in small US bills', why: 'Tips, beach vendors, Pelican Bar boat captains, and roadside jerk stands all run on cash.' },
    ],
    guide: {
      getting: 'Sangster International (MBJ) is the entry point for Negril (90 min west), Ocho Rios (90 min east), and Montego Bay itself. Port Antonio is 2.5 hours from MBJ or 1.5 hours from Kingston. Pre-arrange a private transfer through your hotel ($80-180).',
      where: 'Round Hill or Half Moon for old-Caribbean grandeur near MBJ. The Caves for clifftop drama in Negril. GoldenEye for literary cool in Oracabessa. Jamaica Inn for understated elegance in Ocho Rios. Couples Tower Isle or Swept Away for all-inclusive done right.',
      when: 'Mid-Dec through April for guaranteed dry weather. Mid-April through early June is the value sweet spot. Avoid August through October (hurricane season). November is a sleeper hit.',
    },
    localFood: 'Jamaican cuisine punches far above its island weight. Jerk chicken and pork pulled smoking from oil-drum pits at Boston Beach is the spiritual home of the dish. Ackee and saltfish — the national breakfast — pairs with fried dumplings and Blue Mountain coffee. Don\'t miss curry goat, escovitch fish, festival (sweet fried dough), and a Devon House ice cream cone.',
    currency: 'Jamaican Dollar (JMD) — USD widely accepted',
    language: 'English / Jamaican Patois',
    timezone: 'EST (UTC-5)',
  },

  'antigua': {
    hero: '/images/hotels/jumby-bay-island-oetker-antigua/hero.webp',
    tagline: '365 beaches, one for every day of your honeymoon',
    intro: 'Antigua makes a promise no other Caribbean island dares: 365 beaches, one for every day of the year. For honeymooners, that translates into a kind of arithmetic luxury — a different stretch of powder sand for breakfast walks, sunset swims, and the lazy afternoons in between. The water here is the textbook Caribbean palette: glassy turquoise in the shallows, deepening to ink-blue offshore, with reef close enough to snorkel from most resort jetties. But Antigua is more than a beach catalog. English Harbour, on the south coast, is the only working Georgian-era dockyard left in the world, a UNESCO site where Nelson once careened his ships and where superyachts now bob between stone warehouses turned into rum bars. Climb the hill above it on a Sunday evening and you find Shirley Heights, where steel drums, jerk chicken smoke, and a sunset over twin harbours have been the island\'s weekly ritual for forty years. The honeymoon hotel scene leans heavily adults-only and small-scale: Hermitage Bay\'s hillside cottages, Galley Bay\'s barefoot luxe, Curtain Bluff\'s old-school glamour, Cocos and Cocobay perched on cliffsides, and the private-island fantasy of Jumby Bay. Sailors love Antigua for its trade winds and protected anchorages — Sailing Week in late April fills the bays with regatta crews. Slip away on a day charter to Pillars of Hercules, the wave-carved limestone columns south of English Harbour, or to the calm sandbar of Stingray City.',
    bestTime: 'Mid-Dec through April for dry trade-wind weather; May–June quieter and still mostly dry',
    flightFrom: '8h30 direct London, 4h NYC, 4h30 Miami — ANU airport, 30 min from most resorts',
    topExperience: 'Sunday sunset at Shirley Heights',
    perfectFor: [
      'Beach connoisseurs who want variety without island-hopping',
      'Sailing couples — trade winds, charters, Sailing Week energy',
      'Adults-only resort lovers (the island specializes in them)',
      'History-minded travellers who want UNESCO Georgian dockyards alongside the beach',
      'Honeymooners who want classic Caribbean without Bahamas crowds or Barbados prices',
    ],
    skipIf: [
      'You want lush rainforest interiors — Antigua is dry and scrubby compared to St. Lucia',
      'You\'re after big nightlife or a clubbing scene — evenings here are quiet',
      'You want dramatic mountain or volcano scenery',
      'Your idea of a honeymoon is a single mega-resort — most properties here are intimate',
    ],
    experiences: [
      { icon: '🌅', title: 'Shirley Heights Sunday Sunset', description: 'The island\'s defining ritual: steel drums at 4pm, reggae band at 6:30pm, jerk chicken and rum punch, and a 360° view over English Harbour\'s superyachts as the sun drops.', cost: 'EC$25 (~$10) entry, food and drinks extra', tip: 'Arrive by 4pm to claim a spot on the stone wall facing the harbour. The steel pan set is better than the later band.' },
      { icon: '⚓', title: 'Nelson\'s Dockyard, English Harbour', description: 'Wander the only working Georgian-era naval dockyard on earth — UNESCO-listed, walkable in two hours, with a small museum, working sail loft, and cafes in the old officers\' quarters.', cost: '$8 entry (covers Shirley Heights same day)', tip: 'Combine with lunch at Boom on the marina or Pillars Restaurant for the full harbour-front experience.' },
      { icon: '⛵', title: 'Pillars of Hercules sailing day', description: 'Charter a catamaran from Falmouth Harbour around the south coast to the wave-sculpted limestone columns, with snorkel stops and a beach lunch at Pigeon Point.', cost: '$120-180pp shared catamaran; $1,200+ private', tip: 'Adventure Antigua\'s "Xtreme Circumnav" for the full island loop, or Tropical Adventures for slower romance.' },
      { icon: '🐟', title: 'Stingray City Antigua', description: 'Wade chest-deep on a sandbar off the northeast coast and feed Atlantic southern stingrays by hand — calmer and less circus-like than Cayman\'s version.', cost: '$60pp including boat transfer and snorkel gear', tip: 'Go on the first morning trip (10am) before the cruise crowd arrives from St. John\'s.' },
      { icon: '🏖️', title: 'Half Moon Bay picnic afternoon', description: 'A perfect crescent on the wild Atlantic east coast — bigger surf, almost no development, just sand, sea grape trees, and one beach shack selling Wadadli beer.', cost: 'Free; ~$60 taxi return', tip: 'Stop at Devil\'s Bridge en route — a natural limestone arch where Atlantic swell explodes through blowholes.' },
    ],
    months: [
      { month: 'Jan', weather: '27°C, dry, breezy', emoji: '☀️', crowds: 'High', price: 'Highest', verdict: 'Peak conditions, peak prices — book 6+ months ahead' },
      { month: 'Feb', weather: '27°C, dry, breezy', emoji: '☀️', crowds: 'High', price: 'Highest', verdict: 'Valentine\'s premium; otherwise textbook honeymoon weather' },
      { month: 'Mar', weather: '28°C, dry', emoji: '☀️', crowds: 'High', price: 'Highest', verdict: 'Spring break bumps mid-month; resorts still adult-quiet' },
      { month: 'Apr', weather: '28°C, dry, warming', emoji: '⛵', crowds: 'High', price: 'Highest', verdict: 'Sailing Week (last week) is electric — book early or avoid' },
      { month: 'May', weather: '29°C, mostly dry', emoji: '☀️', crowds: 'Medium', price: 'High', verdict: 'Sweet spot — post-season prices, pre-rains' },
      { month: 'Jun', weather: '29°C, brief showers', emoji: '⛅', crowds: 'Low', price: 'Mid', verdict: 'Quiet and warm; technically hurricane season but risk minimal' },
      { month: 'Jul', weather: '30°C, humid', emoji: '⛅', crowds: 'Medium', price: 'Mid', verdict: 'Carnival end-of-month — fun if you want it, busy in St. John\'s' },
      { month: 'Aug', weather: '30°C, humid, storm risk', emoji: '🌧️', crowds: 'Low', price: 'Mid', verdict: 'Cheap but hurricane-watch territory — buy travel insurance' },
      { month: 'Sep', weather: '30°C, peak storm risk', emoji: '⛈️', crowds: 'Low', price: 'Lowest', verdict: 'Skip unless you accept the gamble; many small hotels close' },
      { month: 'Oct', weather: '29°C, wet', emoji: '🌧️', crowds: 'Low', price: 'Mid', verdict: 'Storm risk easing late month; not ideal for honeymoons' },
      { month: 'Nov', weather: '28°C, drying out', emoji: '⛅', crowds: 'Medium', price: 'High', verdict: 'Underrated — by mid-month it\'s back to picture-perfect' },
      { month: 'Dec', weather: '27°C, dry', emoji: '☀️', crowds: 'High', price: 'Highest', verdict: 'Christmas/NYE rates eye-watering; first two weeks are the value play' },
    ],
    budgetTiers: [
      { label: 'Comfortable', range: '$450-700/night', gets: 'All-inclusive adults-only on a good beach with multiple restaurants and water sports included', example: 'Galley Bay or Cocobay — barefoot-luxe cottages, dinner under the stars' },
      { label: 'Special', range: '$900-1,500/night', gets: 'Boutique luxury with butler service, plunge pools, exceptional food, intimate scale', example: 'Hermitage Bay hillside suites or Carlisle Bay beachfront one-bedrooms' },
      { label: 'No-limit', range: '$2,500-6,000+/night', gets: 'Private-island exclusivity, residence-style villas, full discretion package', example: 'Jumby Bay (Oetker Collection) — private island, 40 rooms, Rosewood-tier service' },
    ],
    areas: [
      { name: 'English & Falmouth Harbour (south)', bestFor: 'Sailors, history lovers, dinner-out couples', description: 'The cultural heart — Nelson\'s Dockyard, Shirley Heights, the best independent restaurants. Resorts here (Curtain Bluff, Carlisle Bay) feel connected to island life.' },
      { name: 'Hermitage Bay & southwest coast', bestFor: 'Pure seclusion, no-cars-needed honeymoons', description: 'Reached by a single dirt road over a hill. One resort per bay, sunset-facing, deeply private.' },
      { name: 'Jolly Harbour & west coast', bestFor: 'Calm Caribbean-side swimming, marina dining', description: 'Sheltered west-facing bays with the island\'s flattest water. Galley Bay, Cocobay, Cocos cluster here.' },
      { name: 'North coast & Dickenson Bay', bestFor: 'First-timers, classic resort beaches', description: 'Where Sandals and Blue Waters sit — long sandy beaches, more developed feel, closest to airport (15 min).' },
      { name: 'East coast & Long Bay', bestFor: 'Wild beach days, Atlantic surf, Devil\'s Bridge', description: 'Less built-up, bigger waves, bigger drama. Half Moon Bay and Long Bay are day-trip destinations.' },
    ],
    expertTips: [
      { tip: 'Sunday is Shirley Heights — plan everything else around it', detail: 'It runs every Sunday year-round, 4-10pm. Skip the resort dinner that night. Have your driver wait or pre-book the return — taxis vanish around 8pm.' },
      { tip: 'Rent a car for two days, not the whole trip', detail: 'Roads are rough and signage minimal, but you\'ll want freedom to reach Half Moon Bay, Devil\'s Bridge, and Shirley Heights without taxi haggling. Driving is on the left.' },
      { tip: 'The "best" beach depends on wind direction', detail: 'When trades blow hard (Jan-March), east coast gets choppy and west coast is glass. Ask your concierge which side is calm that day.' },
      { tip: 'Eat off-resort at Catherine\'s Cafe Plage or Sheer Rocks', detail: 'Catherine\'s (Pigeon Beach) is French toes-in-sand lunch; Sheer Rocks (Cocobay cliffs) is the island\'s most photographed sunset dinner. Book Sheer Rocks two weeks ahead.' },
      { tip: 'Sailing Week (late April) is a vibe but not a honeymoon vibe', detail: 'English Harbour gets rowdy, hotels south-side fill with crews, prices spike. If you\'re not into regatta culture, choose north or west coast.' },
    ],
    packing: [
      { item: 'Reef-safe sunscreen (SPF 50)', why: 'Antigua\'s sun is strong year-round and resorts increasingly require reef-safe formulas; pricey on island.' },
      { item: 'Light long-sleeve cover-up', why: 'Trade winds cool fast on catamaran days and at Shirley Heights after sunset.' },
      { item: 'Water shoes or sturdy sandals', why: 'Pillars of Hercules and Devil\'s Bridge involve scrambling on sharp limestone.' },
      { item: 'Smart-casual dinner outfit', why: 'Curtain Bluff, Carlisle Bay, and Jumby Bay still expect collared shirts at dinner.' },
      { item: 'Snorkel mask you trust', why: 'Resort gear is hit-or-miss and you\'ll snorkel daily off Cades Reef and Stingray City.' },
      { item: 'Insect repellent with DEET', why: 'Mosquitoes at dusk near vegetation; sandflies on east-coast beaches at golden hour.' },
    ],
    guide: {
      getting: 'V.C. Bird International (ANU) is the only airport. Direct flights from London (BA, Virgin, ~8h30), New York JFK (~4h), Miami (~4h30), Toronto (~5h). Pre-book a resort transfer — taxi rates fixed by zone ($30-90).',
      where: 'Hermitage Bay for pure seclusion. Jumby Bay for private-island money-no-object luxury. Carlisle Bay for design-forward south coast. Curtain Bluff for old-money classic. Galley Bay or Cocobay for affordable adults-only barefoot-luxe.',
      when: 'Mid-Jan through mid-April is the peak window. May and first half of June are the savvy traveller\'s sweet spot — prices drop 25-35%, weather still excellent. Late November is similarly underrated. Avoid August through mid-October.',
    },
    localFood: 'Pepperpot stew with ducana (sweet potato dumplings) and fungee (cornmeal and okra) is the national dish — try it at Papa Zouk or Ana\'s on the Beach. Conkies (steamed cornmeal-coconut parcels) appear around November. Look for the small, intensely sweet Antiguan black pineapple. Wash it down with Wadadli, the local lager, or a Cavalier rum punch.',
    currency: 'East Caribbean Dollar (XCD) — USD widely accepted',
    language: 'English',
    timezone: 'AST (UTC-4)',
  },

  'bahamas': {
    hero: '/images/hotels/rosewood-baha-mar-bahamas/hero.webp',
    tagline: '700 islands of pink sand, swimming pigs, and turquoise water 30 minutes from Miami',
    intro: 'The Bahamas is the rare honeymoon destination where you can be sipping a Sky Juice on a pink-sand beach three hours after leaving JFK. The archipelago stretches across 100,000 square miles of the Atlantic — 700 islands, 2,400 cays, and only 16 of them inhabited — which means the gap between Nassau\'s casino-fueled buzz and the empty white crescents of Eleuthera or the Exumas is enormous, even though they share a flag and a currency. Most couples never venture past Paradise Island, and that\'s a missed opportunity: the Out Islands are where the country reveals itself. Harbour Island\'s three-mile Pink Sands Beach genuinely glows rose at sunrise, the result of crushed foraminifera shells mixing with white coral. Eleuthera is 110 miles long and barely two miles wide, with the Atlantic crashing on one shore and the Caribbean lapping the other — the Glass Window Bridge lets you see both at once. The Exumas are the postcard: 365 cays scattered across impossibly clear shallows, home to the famous swimming pigs of Big Major Cay, the underwater cave system Thunderball Grotto (where the Bond film was shot), and iguana-covered islands you can have entirely to yourself. Andros, the largest and least visited, is a bonefishing pilgrimage site riddled with blue holes. Beyond the beaches, the culture is distinctly Bahamian: Junkanoo parades explode through the streets on Boxing Day and New Year\'s, conch is the national obsession (fritters, salad, cracked, in chowder), and rake-and-scrape music has a rhythm you won\'t hear anywhere else.',
    bestTime: 'Mid-Nov to mid-Apr — dry season, 75-82°F, no hurricane risk',
    flightFrom: '3h NYC, 1h Miami, 8h30 London — Nassau (NAS) or Out Island airports',
    topExperience: 'Charter a boat from Staniel Cay for swimming pigs + Thunderball Grotto + nurse sharks at Compass Cay',
    perfectFor: [
      'Couples who want a tropical honeymoon without a 10-hour flight',
      'Beach maximalists chasing the world\'s most photogenic sand and water',
      'Boating and snorkeling enthusiasts who want island-hopping access',
      'Couples splitting the trip between buzzy Nassau and a quiet Out Island',
      'Foodies into seafood — conch, lobster, grouper, and rum cocktails',
    ],
    skipIf: [
      'You want lush rainforest, mountains, or dramatic landscape diversity',
      'You\'re looking for deep cultural immersion or ancient ruins',
      'You want a single-island destination with everything walkable',
      'You\'re booking June-November and risk-averse about hurricanes',
    ],
    experiences: [
      { icon: '🐷', title: 'Swim with the Exuma Pigs', description: 'The famous feral swimming pigs of Big Major Cay paddle out to greet boats in waist-deep turquoise water. Best done early morning before the day-tripper armada arrives from Nassau.', cost: '$400-700/couple full-day from Staniel Cay; $1,200+ from Nassau', tip: 'Stay overnight at Staniel Cay Yacht Club so you can launch at 7am and have the pigs to yourselves.' },
      { icon: '🌅', title: 'Walk Pink Sands Beach at sunrise', description: 'Harbour Island\'s three-mile beach turns rose-gold at first light when the low sun hits the shell-pink sand. Walk the full length barefoot — the most photographed beach in the Caribbean for a reason.', cost: 'Free; beach is public access', tip: 'Stay on the beach side (Pink Sands Resort or The Dunmore) so you can walk out the gate at 6:30am.' },
      { icon: '🤿', title: 'Snorkel Thunderball Grotto', description: 'A natural underwater cave system in the Exumas, lit through holes in the limestone ceiling. Featured in Thunderball and Never Say Never Again. Schools of sergeant majors swirl through shafts of light.', cost: 'Included on most Exumas charters; $40-60 independently', tip: 'Time your visit for slack tide — currents rip through at peak flood and ebb. Bring an underwater light.' },
      { icon: '🌊', title: 'Cross the Glass Window Bridge', description: 'A narrow strip of Eleuthera where the deep navy Atlantic meets the pale turquoise Caribbean — separated by maybe 30 feet of road. The contrast is genuinely surreal in person.', cost: 'Free; rental car needed (~$75/day)', tip: 'Drive 10 minutes south to the Queen\'s Bath tide pools — natural hot tubs in the limestone, best at low tide.' },
      { icon: '🎣', title: 'Bonefish the Andros flats', description: 'Andros is the bonefishing capital of the world — endless shallow flats, world-class guides, and "ghost of the flats" that strip 100 yards of line in seconds.', cost: '$650-900/day for guided skiff with two anglers', tip: 'Book through Tiamo or a dedicated lodge — guides are the difference between catching 20 fish and zero.' },
    ],
    months: [
      { month: 'Jan', weather: '72-77°F, dry, breezy', emoji: '☀️', crowds: 'Peak', price: 'Highest', verdict: 'Cool but reliable; pack a light layer for evenings' },
      { month: 'Feb', weather: '73-78°F, dry', emoji: '☀️', crowds: 'Peak', price: 'Highest', verdict: 'Valentine\'s premiums; book 6+ months out' },
      { month: 'Mar', weather: '75-80°F, dry', emoji: '☀️', crowds: 'Very busy', price: 'Highest', verdict: 'Spring break crowds in Nassau; Out Islands still calm' },
      { month: 'Apr', weather: '76-82°F, dry, warming', emoji: '☀️', crowds: 'Busy', price: 'High', verdict: 'Sweet spot — warm water, post-Easter dip in rates' },
      { month: 'May', weather: '78-84°F, occasional showers', emoji: '⛅', crowds: 'Moderate', price: 'High', verdict: 'Best value of the year; water is bath-warm' },
      { month: 'Jun', weather: '80-86°F, humid, brief storms', emoji: '⛅', crowds: 'Moderate', price: 'Mid', verdict: 'Hurricane season starts but risk is low; great deals' },
      { month: 'Jul', weather: '82-88°F, humid', emoji: '⛅', crowds: 'Moderate', price: 'Mid', verdict: 'Hot and sticky but storms still rare' },
      { month: 'Aug', weather: '82-89°F, humid, storms possible', emoji: '⛈️', crowds: 'Moderate', price: 'Mid', verdict: 'Peak hurricane risk begins; book refundable' },
      { month: 'Sep', weather: '81-87°F, stormy', emoji: '⛈️', crowds: 'Quiet', price: 'Lowest', verdict: 'Avoid — peak hurricane month, many resorts close' },
      { month: 'Oct', weather: '79-85°F, improving late', emoji: '⛈️', crowds: 'Quiet', price: 'Mid', verdict: 'Still risky early; second half stabilizes' },
      { month: 'Nov', weather: '76-82°F, dry returns', emoji: '☀️', crowds: 'Building', price: 'High', verdict: 'Excellent post-15th — dry season starts, prices reasonable' },
      { month: 'Dec', weather: '73-79°F, dry', emoji: '☀️', crowds: 'Peak', price: 'Highest', verdict: 'Junkanoo on Boxing Day is unmissable; holiday rates apply' },
    ],
    budgetTiers: [
      { label: 'Comfort', range: '$450-700/night', gets: 'Boutique 4-star on Eleuthera or Harbour Island, breakfast, beach access. Skip Nassau at this tier.', example: 'The Dunmore on Harbour Island — colonial-cottage charm steps from Pink Sands Beach' },
      { label: 'Luxury', range: '$900-1,800/night', gets: 'Top-tier resorts on Paradise Island or Eleuthera, oceanview suites, multiple restaurants, full spa', example: 'Rosewood Baha Mar (Nassau) or The Cove Eleuthera' },
      { label: 'Ultra-luxury', range: '$2,500-8,000/night', gets: 'Private island or all-villa resorts, butler service, private boats, all-inclusive food and drink', example: 'Kamalame Cay (private island off Andros) or Tiamo Resort (off-grid Andros eco-luxury)' },
    ],
    areas: [
      { name: 'Nassau & Paradise Island', bestFor: 'First-timers, casino nights, easy logistics', description: 'The capital and its connected sister island host the country\'s biggest resorts — Atlantis, Baha Mar, Ocean Club. Direct flights from a dozen US cities.' },
      { name: 'Harbour Island', bestFor: 'Boutique-resort honeymoons, photographers, beach lovers', description: 'A 3.5-mile pink-sand sliver off North Eleuthera. Golf carts only, no big resorts, fashion-shoot energy.' },
      { name: 'Eleuthera', bestFor: 'Quiet sophistication, road-tripping couples, surf and snorkel', description: '110 miles long, barely populated, with Glass Window Bridge, Lighthouse Beach, French Leave Beach.' },
      { name: 'The Exumas', bestFor: 'Boating, swimming pigs, James Bond fans', description: '365 cays of impossibly clear shallows. Base at Staniel Cay or Great Exuma; the magic is on the water.' },
      { name: 'Andros', bestFor: 'Fly-fishers, divers, true-escape couples', description: 'Largest Bahamian island, almost entirely undeveloped, world\'s third-longest barrier reef offshore.' },
    ],
    expertTips: [
      { tip: 'Book Out Island flights with the resort, not separately', detail: 'Domestic Bahamas flights are a circus of small airlines, weight limits, and cancellations. Most Out Island resorts have transfer desks that handle the whole chain — pay the premium.' },
      { tip: 'Skip the Nassau airport food court', detail: 'Lynden Pindling has notoriously slow lines and bad food. If you\'re connecting to an Out Island, eat before you arrive.' },
      { tip: 'Junkanoo is on Boxing Day and New Year\'s, not Christmas', detail: 'If you want to see the parades, target Dec 26 or Jan 1 in Nassau. Bay Street goblets full of Goombay Punch, costumes built over months.' },
      { tip: 'The Exumas day trip from Nassau is exhausting', detail: 'Operators sell 12-hour combo trips: 90-minute boat ride each way, three island stops, you\'re back at 7pm wrecked. Sleep in the Exumas one night minimum.' },
      { tip: 'Tipping is expected and often not included', detail: 'Unlike some Caribbean destinations, gratuity is not always built into resort rates. Budget 15-20% for restaurants, $5-10/bag for porters.' },
    ],
    packing: [
      { item: 'Reef-safe sunscreen (mineral, no oxybenzone)', why: 'Required by law in some marine parks; the sun reflecting off white sand burns you twice.' },
      { item: 'Underwater camera or GoPro', why: 'Pigs, grottos, sharks at Compass Cay — the Bahamas is an underwater-photo destination.' },
      { item: 'Light layer for evenings', why: 'December-March nights drop to 65°F and AC in restaurants is brutal.' },
      { item: 'Snorkel gear if you have it', why: 'Resort rentals are mediocre; mask fit matters and reef shoes help on rocky entries.' },
      { item: 'Cash in small US bills', why: 'Tips, taxis, and Out Island shops often run on cash; ATMs unreliable outside Nassau.' },
      { item: 'Dramamine or sea-sickness bands', why: 'Even calm-day Exuma boat trips can pound; the channel between New Providence and Out Islands gets choppy.' },
    ],
    guide: {
      getting: 'Fly into Nassau (NAS) from most US East Coast hubs in under 3 hours; direct flights also from Toronto, London (BA seasonal), and Atlanta. For Out Islands, connect to North Eleuthera (ELH), Staniel Cay (TYM), Great Exuma (GGT), or Andros on Bahamasair, Western Air, or charter. Many luxury resorts arrange private charters direct from Florida bypassing Nassau entirely — worth the $400-800/person.',
      where: 'For a 7-night honeymoon, split between two islands: 3 nights Nassau or Paradise Island, then 4 nights on Harbour Island, Eleuthera, or the Exumas. Couples who want pure quiet should skip Nassau entirely. Andros and the Exumas suit boating and fishing couples; Eleuthera and Harbour Island win for beach-and-boutique.',
      when: 'Mid-November through April is the dry, warm, hurricane-free window. May and early June are excellent value with bath-warm water. Avoid August-October. Christmas/New Year\'s books out 9+ months ahead.',
    },
    localFood: 'Conch is the Bahamian obsession — eaten as fritters, in zesty raw "salad" with lime and bird pepper, cracked (pounded and fried), or in chowder. Grilled grouper, lobster (in season Aug-Mar), and peas-and-rice are staples. Don\'t miss rum cake, guava duff for dessert, and the local cocktails: Sky Juice (gin, coconut water, sweet milk) and Goombay Punch.',
    currency: 'Bahamian Dollar (BSD) — pegged 1:1 to USD; USD universally accepted',
    language: 'English',
    timezone: 'EST (UTC-5)',
  },

  'new-zealand': {
    hero: '/images/hotels/huka-lodge-taupo-new-zealand/hero.webp',
    tagline: 'Middle-earth made real — fjords, alpine lakes, and lodges that redefine remote luxury',
    intro: 'New Zealand is the honeymoon destination that ruins you for everywhere else. Two long, narrow islands at the bottom of the world pack in more landscape variety than entire continents: glacier-fed turquoise lakes, primordial fjords carved a kilometer deep, snow-dusted Southern Alps, golden tussock high country, subtropical Bay of Islands beaches, and steaming geothermal valleys where the earth literally breathes. The country invented adventure tourism (bungee jumping was born in Queenstown) but the real magic now is its small, owner-run lodges — Huka, Blanket Bay, Helena Bay, Kauri Cliffs — which sit on private estates of thousands of acres and operate at a level of intimacy and craft that rivals anywhere on earth. You arrive jet-lagged from a 13-hour flight and within 48 hours you are heli-picnicking on a glacier, tasting Pinot Noir in Central Otago, watching a Māori cultural performance in Rotorua, or walking a section of the Routeburn Track without seeing another human. Distances feel modest on the map but New Zealand rewards slowing down: rent a car, drive Highway 6 from Wanaka to Te Anau, and stop every twenty minutes because the next viewpoint is somehow better than the last. Couples come for Lord of the Rings (yes, you can visit Hobbiton in Matamata) and stay for the food — grass-fed lamb, Bluff oysters, Marlborough Sauvignon Blanc — and for the people, who are unfailingly warm without ever being performative about it. It is a long flight. It is worth every hour.',
    bestTime: 'Late February to April — summer crowds gone, stable weather, autumn colors',
    flightFrom: 'NYC: 18-22h via LAX; LA: 13h direct to Auckland; London: 24+h via Singapore or Dubai',
    topExperience: 'Milford Sound overnight cruise — sleep aboard a small vessel inside the fjord',
    perfectFor: [
      'Active couples who want adventure (heli-hiking, kayaking, glacier walks) paired with serious lodge luxury',
      'Wine and food obsessives keen to drink Central Otago Pinot and Marlborough Sauvignon at the source',
      'Lord of the Rings fans, landscape photographers, anyone who has wanted to stand inside a Tolkien matte painting',
      'Honeymooners willing to fly long-haul for genuine remoteness — lodges with no neighbors for miles',
      'Travelers who want English-speaking ease, world-class hospitality, zero safety concerns',
    ],
    skipIf: [
      'You only have a week — the flight alone eats two days each way and the country deserves at least 12 nights',
      'You want hot beach lounging — even northern summers are mild and South Island water is alpine-cold',
      'You hate driving — the lodges are spread out and self-drive is by far the best way',
      'You expect bargain prices — NZ luxury lodges run $1,500-3,500/night',
    ],
    experiences: [
      { icon: '🚁', title: 'Heli-picnic on a remote glacier', description: 'Lift off from Queenstown or Glenorchy, fly over the Southern Alps, and land on a glacier or hidden alpine meadow for Champagne and a chef-prepared lunch.', cost: '$1,200-$2,500/couple', tip: 'Book through your lodge — Blanket Bay and Matakauri have preferred operators and can rebook instantly if weather shifts.' },
      { icon: '🚢', title: 'Overnight cruise in Milford or Doubtful Sound', description: 'Day-tripping Milford means buses and crowds; the overnight option (Real Journeys) gives you the fjord at dusk and dawn, kayaking among seals and dolphins.', cost: '$600-$900/couple', tip: 'Doubtful Sound is three times larger and far less visited than Milford — choose it for true solitude.' },
      { icon: '🍷', title: 'Private Central Otago Pinot Noir tour', description: 'Drive the loop from Queenstown through Gibbston Valley, Bannockburn, and Felton Road. Felton Road and Rippon do tastings by appointment that are worth planning your trip around.', cost: '$300-$500/couple plus driver', tip: 'Hire a driver for the day — the roads are winding and the tastings are generous; Eichardt\'s concierge can arrange.' },
      { icon: '⛰️', title: 'Routeburn or Kepler day-section', description: 'The Great Walks are world-famous multi-day hikes, but the best viewpoints are reachable as guided day walks. Helicopter in, walk out.', cost: '$500-$1,000/couple guided', tip: 'Ultimate Hikes does a heli-assisted Routeburn day that hits the alpine pass — ask Blanket Bay to coordinate.' },
      { icon: '🔥', title: 'Māori cultural evening + geothermal dinner', description: 'Tamaki Māori Village and Mitai both do hangi (food cooked underground in geothermal heat) with genuine cultural performance.', cost: '$200-$300/couple', tip: 'Pair with a morning at Wai-O-Tapu thermal park — the Champagne Pool at sunrise is otherworldly.' },
    ],
    months: [
      { month: 'Jan', weather: '70-78°F, long daylight', emoji: '☀️', crowds: 'Peak — Kiwi summer holidays', price: 'Highest', verdict: 'Skip unless you book 9 months ahead' },
      { month: 'Feb', weather: '70-77°F, warmest waters', emoji: '☀️', crowds: 'High first half', price: 'High', verdict: 'Late Feb is genuinely ideal' },
      { month: 'Mar', weather: '65-72°F, stable, clear', emoji: '🍂', crowds: 'Moderate', price: 'High', verdict: 'Best month overall — weather plus space' },
      { month: 'Apr', weather: '58-67°F, autumn color peak', emoji: '🍂', crowds: 'Low', price: 'Mid', verdict: 'Stunning in Central Otago — go now' },
      { month: 'May', weather: '50-60°F, crisp, shorter days', emoji: '☁️', crowds: 'Very low', price: 'Lowest', verdict: 'Quiet and atmospheric, lodge deals available' },
      { month: 'Jun', weather: '40-52°F, ski season starts', emoji: '❄️', crowds: 'Low (rising in Queenstown)', price: 'Mid', verdict: 'Heli-ski honeymoon — niche but spectacular' },
      { month: 'Jul', weather: '38-50°F, peak ski', emoji: '❄️', crowds: 'High in ski towns only', price: 'High Queenstown', verdict: 'Only if you ski — otherwise damp' },
      { month: 'Aug', weather: '40-52°F, last ski month', emoji: '❄️', crowds: 'Moderate ski crowds', price: 'High Queenstown', verdict: 'Ski + fjord combo works well' },
      { month: 'Sep', weather: '48-58°F, spring blooms', emoji: '🌸', crowds: 'Low', price: 'Mid', verdict: 'Underrated — lambs everywhere, snow on peaks' },
      { month: 'Oct', weather: '52-62°F, warming', emoji: '🌸', crowds: 'Building', price: 'Mid', verdict: 'Solid choice with good value' },
      { month: 'Nov', weather: '58-68°F, long days return', emoji: '☀️', crowds: 'Moderate', price: 'High', verdict: 'Excellent — pre-summer sweet spot' },
      { month: 'Dec', weather: '65-74°F, summer arrives', emoji: '☀️', crowds: 'Peak from 26th', price: 'Highest', verdict: 'First three weeks great, then mayhem' },
    ],
    budgetTiers: [
      { label: 'Refined', range: '$700-$1,200/night', gets: 'Boutique lakefront rooms, breakfast included, in-town locations', example: 'Eichardt\'s Private Hotel in Queenstown — 12 suites on Lake Wakatipu' },
      { label: 'Lodge-level', range: '$1,500-$2,500/night all-inclusive', gets: 'Full board with wine, daily activities, private estate setting, 8-15 suites', example: 'Matakauri Lodge or Azur Lodge above Queenstown, or Huka Lodge on the Waikato River' },
      { label: 'Trophy', range: '$3,000-$5,500/night all-inclusive', gets: 'Owner\'s cottage or villa, dedicated staff, helicopter included, golf and clay shooting on property', example: 'Helena Bay Lodge in Northland or Owner\'s Cottage at Cape Kidnappers' },
    ],
    areas: [
      { name: 'Queenstown & Lake Wakatipu', bestFor: 'First-time visitors who want adventure, dining, lake views', description: 'The adventure capital with serious restaurants and four exceptional lodges (Eichardt\'s, Matakauri, Azur, plus Blanket Bay nearby).' },
      { name: 'Glenorchy & the Dart Valley', bestFor: 'Lord of the Rings landscapes and total seclusion', description: '45 minutes from Queenstown — the road in is one of the most scenic drives on earth, and Blanket Bay sits at the head of the lake.' },
      { name: 'Lake Taupo & central plateau', bestFor: 'North Island base combining geothermal Rotorua with trout fishing', description: 'Huka Lodge on the Waikato River is the original NZ luxury lodge — fishing, helicopters, and a 60-year history.' },
      { name: 'Bay of Islands & Northland', bestFor: 'Subtropical warmth, beaches, and a quieter end to the trip', description: 'Three hours north of Auckland — Helena Bay and Kauri Cliffs sit on huge coastal estates with cliffside golf.' },
      { name: 'Hawke\'s Bay & Cape Kidnappers', bestFor: 'Wine country plus links golf on dramatic clifftops', description: 'Art Deco Napier, dozens of cellar doors (Craggy Range, Te Mata), and The Farm at Cape Kidnappers with one of the world\'s top-ranked golf courses.' },
    ],
    expertTips: [
      { tip: 'Fly into Auckland, out of Queenstown (or vice versa)', detail: 'Open-jaw tickets cost the same and save you a backtrack day. Air New Zealand is excellent and the domestic legs are reliable.' },
      { tip: 'Build in two weather buffer days for Milford and any heli activity', detail: 'Fiordland gets 7+ meters of rain a year. Lock the fjord cruise early in your itinerary so you can re-book if weather closes in.' },
      { tip: 'Drive yourselves on the South Island, hire drivers on the North', detail: 'South Island roads are quiet, well-paved, and the drives are the trip. North Island has more traffic and the wineries reward someone else behind the wheel.' },
      { tip: 'Book Hobbiton at sunset, not midday', detail: 'The 5pm "Evening Banquet Tour" lets you wander the Shire as lanterns light up and includes a feast in the Green Dragon — far better than the daytime conveyor belt.' },
      { tip: 'Tip lightly or not at all', detail: 'New Zealand is not a tipping culture. Lodge staff are paid properly. A small thank-you envelope at departure (NZ$50-100) is appreciated but never expected.' },
    ],
    packing: [
      { item: 'Layers, layers, layers', why: 'You can experience all four seasons in one day — t-shirt, fleece, and rain shell within the same hike.' },
      { item: 'Properly waterproof jacket (not water-resistant)', why: 'Fiordland and the West Coast get serious rain; a Goretex shell makes the difference between magic and misery.' },
      { item: 'Broken-in hiking shoes or trail runners', why: 'Even casual lodge walks are on uneven terrain — you\'ll want grip and support every single day.' },
      { item: 'Polarized sunglasses and high-SPF sunscreen', why: 'The hole in the ozone is real — UV is roughly 40% stronger than equivalent latitudes in the northern hemisphere.' },
      { item: 'A US-to-NZ plug adapter (Type I)', why: 'NZ uses the same angled three-pin plug as Australia — different from US, UK, and EU.' },
      { item: 'Smart-casual outfit for lodge dinners', why: 'No jacket required but Huka, Blanket Bay, and Helena Bay all do communal evening dining where you\'ll want to look pulled together.' },
    ],
    guide: {
      getting: 'Most US travelers connect through LAX or SFO to Auckland (AKL) on Air New Zealand or United — about 13h direct from West Coast, 18-22 from East. Queenstown (ZQN) has direct flights from Sydney, Melbourne, Brisbane, and Auckland. From the UK, fly via Singapore, Hong Kong, or Dubai — 24+ hours total. NZeTA visa waiver required (apply online, NZ$23). Rent a car for the South Island.',
      where: 'Spend 4-5 nights based in or near Queenstown (Eichardt\'s in town, Matakauri or Azur for views, Blanket Bay for Glenorchy seclusion). Add 2-3 nights at Huka Lodge on Lake Taupo paired with Rotorua. Finish with 3 nights in Bay of Islands (Helena Bay, Kauri Cliffs) or Hawke\'s Bay (Cape Kidnappers). Classic 12-night: 5 Queenstown, 3 Taupo/Rotorua, 4 Bay of Islands.',
      when: 'February through April is the sweet spot — stable weather, autumn color, and crowds thinning. November is the best pre-summer window. Avoid late December through mid-January (Kiwi school holidays plus international peak — prices double, lodges book a year out).',
    },
    localFood: 'New Zealand cuisine is anchored by extraordinary raw materials — grass-fed lamb, Bluff oysters (March-August), green-lipped mussels, crayfish, and venison farmed in the high country. Don\'t miss a hangi (food slow-cooked in an underground earth oven, typically at a Māori cultural evening), a proper pavlova, and manuka honey on everything. Wash it down with Central Otago Pinot Noir and Marlborough Sauvignon Blanc.',
    currency: 'New Zealand Dollar (NZD) — NZ$1 ≈ $0.60',
    language: 'English / Te Reo Māori',
    timezone: 'NZST (UTC+12) / NZDT (UTC+13)',
  },

  'egypt': {
    hero: '/images/hotels/sofitel-legend-old-cataract-aswan-egypt/hero.webp',
    tagline: 'Nile sunset feluccas, candlelit Pyramids, and a Red Sea coral reef — Egypt is the most cinematic honeymoon on earth.',
    intro: 'Egypt is the honeymoon that condenses 5,000 years of civilisation, the Sahara, the Nile, and a Red Sea reef into ten days. You wake in a Victorian palace at Aswan above lateen-sailed feluccas, sleep on a 27-cabin Oberoi cruiser that drifts past Karnak and Edfu by night, ride camels at sunset to a Pyramid-view dinner at the Mena House, and end at an all-suite Oberoi resort on the Red Sea where coral reefs start ten metres from your private courtyard. The luxury infrastructure — Sofitel Legend Old Cataract, Marriott Mena House, Four Seasons Cairo, the Oberoi Zahra — is the strongest in North Africa. Time the visit October to April and Egypt is the rare honeymoon that delivers history, romance, beach, and adventure in a single, deeply soulful trip.',
    bestTime: 'Oct–Apr',
    flightFrom: '4–5h from Europe, 11h from NYC',
    topExperience: 'Pyramids, Nile Cruise, Red Sea',
    perfectFor: [
      'Couples obsessed with history, archaeology, or Indiana Jones romance',
      'Honeymooners who want a moving Nile cruise rather than a fixed beach',
      'Travellers who can pair Cairo + Aswan + Red Sea in one trip',
      'Photographers — every site is a postcard, every sunset a film frame',
      'Couples who want short-haul (Europe) value luxury at $400–$1,200/night',
    ],
    skipIf: [
      'You are travelling June–August — interior Egypt hits 40°C+ and Luxor becomes brutal',
      'You want a pure beach honeymoon — Sharm and Hurghada are good, not Maldives',
      'You are uncomfortable with persistent baksheesh culture and visible tourism security',
      'You need overwater villas — Egypt is sand, stone, and water but not bungalows-on-stilts',
    ],
    experiences: [
      {
        icon: '🛕',
        title: 'Pyramids of Giza by Dawn or Candlelight',
        description: 'Stay at Marriott Mena House — 600m from the Pyramids — and request a Pyramid View room. Walk the plateau at 8am as the gates open and you have Khufu effectively to yourselves. Better still: a private candlelit dinner on the hotel lawn with the Great Pyramid lit behind your table is the most photographed honeymoon dinner in Egypt.',
        cost: 'Pyramids ticket $25/couple; private dinner $300–$600 for two',
        tip: 'Book the camel ride from the back (south) entrance to avoid touts at the main gate. Sunrise is colder than you think — bring a wrap.',
      },
      {
        icon: '🛥️',
        title: 'Oberoi Zahra Nile Cruise — Aswan to Luxor',
        description: 'The Oberoi Zahra is the most luxurious 27-cabin floating boutique on the Nile. Seven nights, all-inclusive, an Egyptologist guide on board, and stops at Edfu, Kom Ombo, Esna, Karnak, and the Valley of the Kings. Drinking Champagne on the sundeck as the river bends past green palms and ancient temples is the defining honeymoon image of Egypt.',
        cost: 'From $1,200 per couple per night, all-inclusive with guided excursions',
        tip: 'Book the Luxury Suite with a wraparound balcony on Deck 4. Aswan-to-Luxor (downstream) is more relaxed than the reverse.',
      },
      {
        icon: '🌅',
        title: 'Sunset Felucca on the Nile at Aswan',
        description: 'From Sofitel Legend Old Cataract\'s 1902 terrace, the concierge arranges a private felucca with mint tea and meze for two at golden hour. You drift past Kitchener\'s Island and the Aga Khan Mausoleum as the sun sinks behind the West Bank dunes. Two hours, around $80, the most romantic 120 minutes in Egypt.',
        cost: 'Private felucca $80–$150 for two with refreshments',
        tip: 'Sail before 5pm in winter, 6pm in summer. The captain expects 100 EGP tip on top of the price.',
      },
      {
        icon: '🤿',
        title: 'Red Sea Reef Snorkel at Sharm or Hurghada',
        description: 'Egypt\'s Red Sea reefs are among the world\'s top dive sites. From Four Seasons Sharm El Sheikh you have a house reef directly off the property; from the Oberoi Sahl Hasheesh you can snorkel coral 10 metres from your private courtyard. Ras Mohammed marine park (south of Sharm) is the famous full-day excursion.',
        cost: 'House reef snorkel free for guests; full-day Ras Mohammed boat trip $90–$130/person',
        tip: 'Book the dive in the early morning — wind picks up by midday. Bring a rashguard; coral burn is very real.',
      },
      {
        icon: '🌌',
        title: 'White Desert Stargazing Excursion',
        description: 'A two-night extension into the Bahariya Oasis and the surreal chalk-rock formations of the White Desert is the ultimate honeymoon detour. Camp under a Milky Way sky bright enough to read by, eat fire-pit lamb with Bedouin hosts, and wake among rock formations shaped like mushrooms and ice cream cones.',
        cost: 'Private 2-night White Desert tour $1,200–$2,000 per couple, full-board',
        tip: 'Add this between Cairo and the cruise; it is operationally complex but utterly unforgettable.',
      },
    ],
    months: [
      { month: 'Jan', weather: 'Cairo 12–18°C, Luxor 8–22°C, Red Sea 22°C', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Peak season — perfect cool weather, book early' },
      { month: 'Feb', weather: 'Mild 14–22°C inland, sea warming', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Excellent month, slightly warmer than January' },
      { month: 'Mar', weather: 'Warming 18–28°C, occasional khamsin winds', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Last great pre-summer month' },
      { month: 'Apr', weather: 'Warm 22–32°C', emoji: '☀️', crowds: 'High', price: 'Mid', verdict: 'Still bookable, hot in midday at Luxor' },
      { month: 'May', weather: 'Hot 26–36°C', emoji: '🥵', crowds: 'Moderate', price: 'Mid', verdict: 'Cruise still works, Pyramids tough by 11am' },
      { month: 'Jun', weather: 'Very hot 30–40°C', emoji: '🥵', crowds: 'Low', price: 'Low', verdict: 'Skip Luxor; Sharm/Hurghada survivable' },
      { month: 'Jul', weather: 'Extreme 32–42°C inland', emoji: '🥵', crowds: 'Low', price: 'Low', verdict: 'Red Sea only — interior is dangerous' },
      { month: 'Aug', weather: 'Extreme 32–42°C', emoji: '🥵', crowds: 'Low', price: 'Low', verdict: 'Avoid the Nile valley entirely' },
      { month: 'Sep', weather: 'Cooling 26–36°C', emoji: '☀️', crowds: 'Moderate', price: 'Mid', verdict: 'Late September starts to work again' },
      { month: 'Oct', weather: 'Ideal 22–30°C', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'One of the two best months of the year' },
      { month: 'Nov', weather: 'Perfect 18–26°C', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Peak honeymoon month — book six months ahead' },
      { month: 'Dec', weather: 'Cool 14–22°C, Red Sea 24°C', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Christmas/NYE on the Nile is exquisite but pricy' },
    ],
    budgetTiers: [
      { label: 'Comfortable', range: '$200–$500/night', gets: 'Solid 5★ in Cairo, Aswan, and Sharm. Standard Nile cruisers.', example: 'Marriott Mena House, Steigenberger Cecil Alexandria, Sofitel Cairo Nile El Gezirah' },
      { label: 'Premium', range: '$500–$1,200/night', gets: 'Landmark city hotels and the best Red Sea suites; Sofitel Old Cataract Nile View Suites.', example: 'Four Seasons Cairo, Sofitel Legend Old Cataract Aswan, Oberoi Sahl Hasheesh' },
      { label: 'Iconic & Cruise', range: '$1,200–$3,500/night', gets: 'Oberoi Zahra Luxury Suite all-inclusive, Pyramid-view dinner private buyout, White Desert excursions.', example: 'Oberoi Zahra Nile Cruiser, Sofitel Old Cataract Agatha Christie Suite' },
    ],
    areas: [
      { name: 'Cairo & Giza', bestFor: 'Pyramids, Egyptian Museum, Khan El Khalili, urban energy', description: 'A 22-million-person megacity. Stay at Mena House (Pyramid-side) for the icon shot or Four Seasons Nile Plaza/Sofitel Gezirah for Nile-view luxury. 2–3 nights minimum.' },
      { name: 'Luxor', bestFor: 'Karnak, Valley of the Kings, hot-air ballooning', description: 'The richest concentration of pharaonic temples in Egypt. Most honeymooners experience Luxor from a Nile cruise rather than overnighting in town. Sunrise balloon over the West Bank is unmissable.' },
      { name: 'Aswan', bestFor: 'Old Cataract terrace, Philae, Abu Simbel, Nubian villages', description: 'Egypt\'s most romantic city — slower, gentler, the Nile narrows here and the granite islands give it a Garden-of-Eden feel. 2–3 nights at Sofitel Old Cataract is the honeymoon highlight.' },
      { name: 'Red Sea (Sharm El Sheikh / Hurghada)', bestFor: 'Beach, coral reef, decompression after the history', description: 'Sinai\'s Sharm has the most dramatic underwater landscape (Ras Mohammed). Hurghada is mainland-side, calmer, with the standout Oberoi Sahl Hasheesh. 3–4 nights as the trip closer.' },
      { name: 'White Desert / Bahariya', bestFor: 'Stargazing, off-grid camping, Sahara romance', description: 'A 4h drive from Cairo into surreal chalk-rock formations. 1–2 nights camping under stars with a private guide.' },
    ],
    expertTips: [
      { tip: 'Book a private Egyptologist guide for Karnak and Valley of the Kings', detail: 'Without one you will see stones; with one you will see stories. Audio Egypt and Memphis Tours offer English-speaking guides at $100–$180 per day. Even on a cruise (which provides one), a half-day private guide at the Sphinx is a different experience.' },
      { tip: 'Get an e-visa before flying — do not rely on visa-on-arrival', detail: 'Egypt offers a 30-day e-visa for $25 via visa2egypt.gov.eg. Issued in 7 days. Brings you straight through immigration. Visa-on-arrival queues at Cairo airport can be 90+ minutes.' },
      { tip: 'Tip baksheesh in small Egyptian pound notes, generously', detail: 'EGP 20–50 per service is standard (porter, taxi, restroom attendant, monument photo). Withdraw EGP 2,000 cash at Cairo airport ATM on arrival; you will use it daily. Tip-bills don\'t need to be crisp.' },
      { tip: 'Book Pyramid sound-and-light for the second-night experience', detail: 'After dinner at Mena House, the Pyramids and Sphinx light show (40 minutes, in English on Sundays/Wednesdays/Fridays) is corny but romantic. Book a hotel-arranged car so you skip the entry queues.' },
      { tip: 'Use Cairo as your hub — fly internally rather than driving', detail: 'EgyptAir runs frequent Cairo-Aswan-Luxor flights at $80–$150 one-way. The Cairo-Aswan train is romantic in theory but takes 13 hours. Skip it for honeymoons.' },
    ],
    packing: [
      { item: 'Modest layers (knees + shoulders)', why: 'Egypt is Muslim-majority — respectful dress at mosques, monuments, and outside resorts is expected. Light long-sleeve linen shirts and a pashmina cover everything.' },
      { item: 'Sturdy closed shoes for Karnak/Valley of the Kings', why: 'You will walk 6–10 km on uneven sandstone in a single morning. Sandals are insufficient.' },
      { item: 'High-SPF sunscreen and broad-brim hat', why: 'No shade at the Pyramids, no shade in Luxor, no shade in the desert. SPF 50+ mandatory plus aloe after-sun.' },
      { item: 'Reef-safe sunscreen and rashguard for the Red Sea', why: 'Hurghada/Sharm reefs are protected. Coral burn is a real risk on snorkel; rashguards prevent it.' },
      { item: 'Light fleece for desert nights and over-air-conditioned cruisers', why: 'Sahara nights drop to 8°C in winter and Nile cruisers run their AC at 18°C. A merino fleece is the most-used item in your bag.' },
    ],
    guide: {
      getting: 'Fly to Cairo (CAI) with EgyptAir, BA, Lufthansa, KLM, Emirates, Air France direct from Europe (4–5h) or via Doha/Dubai/Istanbul from North America. Internal flights via EgyptAir to Aswan (ASW), Luxor (LXR), Sharm (SSH), or Hurghada (HRG) — book through to luggage as one ticket if connecting. Private transfer from Cairo airport ($25–$40) saves the taxi negotiation.',
      where: 'Classic 10-night honeymoon: 3 nights Cairo (Marriott Mena House or Four Seasons Nile Plaza) → 7-night Oberoi Zahra Aswan-to-Luxor cruise → 3 nights Red Sea (Oberoi Sahl Hasheesh or Four Seasons Sharm). Shorter 7-night version: 2 Cairo + 4 Nile cruise + 1 fly home from Luxor. Add a 2-night White Desert excursion between Cairo and the cruise for the wilderness extension.',
      when: 'October–April is the only sensible window. November and March are sweet spots — warm enough for Red Sea, cool enough for Pyramids by midday. Avoid Ramadan if you want full restaurant service in non-resort areas (variable date — check yearly).',
    },
    localFood: 'Mezze (foul medames, baba ghanoush, tahini, falafel — yes, the Egyptian version is the original), molokhia (jute-leaf stew with rabbit or chicken), koshari (national dish: rice, lentils, chickpeas, pasta, fried onion, tomato sauce — the best 50-cent meal in the world), grilled pigeon stuffed with rice, fresh-baked aysh baladi (Egyptian pita), Umm Ali (national dessert: bread pudding with milk, nuts, raisins), basbousa (semolina cake with rosewater syrup), Stella beer, and karkadé (cold hibiscus tea, the romantic drink of Aswan terraces). Top dining: 9 Pyramids Lounge (Pyramid-view), Khan El Khalili (Mena House), Sequoia (Cairo waterfront), Sachi (Cairo).',
    currency: 'Egyptian Pound (EGP) — highly volatile in 2024–25, trading roughly 48 EGP/$1. Cards accepted at hotels and major restaurants; cash essential for tipping, monuments, taxis, and bazaars. Withdraw EGP 2,000 on arrival at the airport ATM.',
    language: 'Arabic is official; English is widely spoken at hotels and tourist sites. A few words of Arabic ("shukran" thanks, "salaam alaikum" hello) earn warm smiles.',
    timezone: 'UTC+2 (no daylight saving)',
  },

  'brazil': {
    hero: '/images/hotels/uxua-casa-hotel-trancoso-brazil/hero.webp',
    tagline: 'Trancoso\'s candlelit Quadrado, the Copacabana sunset, Fernando de Noronha\'s clifftop pools — the most soulful honeymoon in South America.',
    intro: 'Brazil is the honeymoon that no other country can imitate. In one trip you can dance samba barefoot on Ipanema, sleep in a UXUA fishermen\'s casa on Trancoso\'s grass-square Quadrado, snorkel turtles at Fernando de Noronha (the world\'s best beach, by repeated vote), and end at a Bahia eco-resort where your bungalow has a hammock between two coconut palms. The luxury scene runs from the 1923 art deco grandeur of Belmond Copacabana Palace to the design-led intimacy of UXUA Casa and Pousada Maravilha. November to March is the peak summer, but October and April are the sweet spots when prices drop and the carnival energy stays. Brazil rewards couples who want soul, music, and warmth more than they want polished sterile luxury — and pays them back tenfold.',
    bestTime: 'Oct–Apr (Brazilian summer); Sep + May shoulder',
    flightFrom: '11–12h from Europe, 10h from NYC',
    topExperience: 'Trancoso, Rio, Fernando de Noronha',
    perfectFor: [
      'Couples who want music, food, and culture as much as beach',
      'Honeymooners ready for one polished city week + one barefoot beach week',
      'Design-led travellers — Brazil\'s contemporary architecture and fashion are world-class',
      'Adventure couples — Iguazu Falls, Pantanal, Amazon are bookable add-ons',
      'Couples wanting an alternative to the Caribbean with stronger character',
    ],
    skipIf: [
      'You are nervous about urban safety — Rio rewards street-smart travellers, not casual ones',
      'You want short flights — Europe→Brazil is 11h+, time zone is brutal',
      'You need fully English-speaking environments outside top hotels',
      'You are travelling May–August in the south — Rio cools to 18–22°C, beaches empty',
    ],
    experiences: [
      {
        icon: '🌅',
        title: 'Sunset on Copacabana Palace Pool Terrace',
        description: 'The grande dame of Latin America\'s hotels, since 1923. Cocktails on the rooftop pool terrace as the sun drops behind Sugarloaf, then dinner at Cipriani downstairs. The Copacabana Palace has hosted Madonna, Mick Jagger, and Princess Diana — and on a honeymoon it still feels like that crowd.',
        cost: 'Cocktails $25–$35; Cipriani dinner $250–$400 for two',
        tip: 'Book a Beachfront Suite for the Atlantic-facing balcony. Friday night samba at the Sirena Bar is the iconic post-dinner.',
      },
      {
        icon: '🕯️',
        title: 'Candlelit Dinner on Trancoso\'s Quadrado',
        description: 'The Quadrado is Trancoso\'s 16th-century grass square ringed by colourful fishermen\'s cottages and the chapel of São João. By night the village staff carry tables and candles onto the grass and you eat fresh ceviche and grilled fish under stars, locals strolling barefoot. UXUA Casa and Capim Santo are the two best restaurant addresses.',
        cost: 'Dinner $80–$150 per couple at a top Quadrado restaurant',
        tip: 'Book December–February for full season; September–October is quieter and arguably more romantic.',
      },
      {
        icon: '🏝️',
        title: 'Pousada Maravilha Cliffside Pool, Fernando de Noronha',
        description: 'Fernando de Noronha is a UNESCO marine reserve archipelago 350 km off Brazil\'s northeast coast. Pousada Maravilha\'s 25m clifftop infinity pool faces Praia do Sueste, dolphins visible from the deck. The 8 cabins are the hardest hotel reservation in Brazil — book 8–12 months out.',
        cost: 'Cabins $1,000–$2,800 per night; archipelago entry tax $20/person/day plus $35/person park access',
        tip: 'Snorkel at Baía do Sancho (consistently world\'s #1 beach) and Praia do Leão. Only 460 tourists per day are allowed on the island.',
      },
      {
        icon: '🍹',
        title: 'Caipirinha at Posto 9 Ipanema',
        description: 'Posto 9 is the gay/cool/young flag-marker on Ipanema beach where Fasano and Janeiro Hotel guests post up at sunset. Order caipirinhas from the kiosk vendors, watch the sun drop behind Two Brothers, and stay for live samba on the sand. Free, public, perfect.',
        cost: 'Free beach access; caipirinhas $5/each',
        tip: 'Hotels arrange beach service (chairs, umbrella, cooler) for $30–$50/day. Tip the vendor 5 reais and your spot stays reserved.',
      },
      {
        icon: '🌳',
        title: 'Mata Atlântica Forest Trek at Txai Itacaré',
        description: 'Txai Resort sits in the largest remaining stretch of Brazil\'s Atlantic Forest. A guided 2h walk into the property\'s 100-hectare reserve reveals howler monkeys, blue morpho butterflies, and a waterfall pool you can swim in alone. Combine with capoeira lessons on the beach.',
        cost: 'Hotel-guest activities $40–$80 per couple per session',
        tip: 'Stay at Txai or Tivoli Praia do Forte for full-immersion Bahia. Both are 90 minutes from Salvador airport.',
      },
    ],
    months: [
      { month: 'Jan', weather: 'Hot 28–35°C, humid, summer storms', emoji: '☀️', crowds: 'Very High', price: 'Very High', verdict: 'Peak — Rio is electric, prices brutal' },
      { month: 'Feb', weather: 'Carnival heat 28–34°C', emoji: '🎉', crowds: 'Very High', price: 'Very High', verdict: 'Carnival fortnight — book 12 months out or skip' },
      { month: 'Mar', weather: 'Hot 27–33°C', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Post-Carnival lull, excellent value start' },
      { month: 'Apr', weather: 'Warm 24–30°C', emoji: '☀️', crowds: 'Moderate', price: 'Mid', verdict: 'One of the two best honeymoon months' },
      { month: 'May', weather: 'Warm 22–28°C, dry', emoji: '☀️', crowds: 'Low', price: 'Low', verdict: 'Excellent value, Rio sea cooling' },
      { month: 'Jun', weather: 'Mild 18–25°C south, warm 26–30°C northeast', emoji: '⛅', crowds: 'Low', price: 'Low', verdict: 'Bahia/northeast still great; Rio cooler' },
      { month: 'Jul', weather: 'Coolest in south 17–24°C', emoji: '⛅', crowds: 'Moderate', price: 'Mid', verdict: 'Brazilian winter break crowds at northeast resorts' },
      { month: 'Aug', weather: 'Mild, dry', emoji: '☀️', crowds: 'Moderate', price: 'Mid', verdict: 'Bahia/northeast peak season — book early' },
      { month: 'Sep', weather: 'Warming 22–28°C', emoji: '☀️', crowds: 'Low', price: 'Low', verdict: 'Hidden sweet spot, Trancoso pre-season' },
      { month: 'Oct', weather: 'Warm 24–30°C', emoji: '☀️', crowds: 'Moderate', price: 'Mid', verdict: 'Best month — warm, uncrowded, value' },
      { month: 'Nov', weather: 'Hot 26–32°C', emoji: '☀️', crowds: 'Moderate', price: 'Mid', verdict: 'Strong shoulder before December rush' },
      { month: 'Dec', weather: 'Hot 28–34°C', emoji: '🎉', crowds: 'High', price: 'Very High', verdict: 'NYE on Copacabana is global icon — pricy' },
    ],
    budgetTiers: [
      { label: 'Comfortable', range: '$300–$700/night', gets: 'Strong 5★ in Rio and São Paulo, smart Trancoso boutique addresses, Bahia eco-resorts.', example: 'Janeiro Hotel Leblon, Tivoli Mofarrej São Paulo, Casa Turquesa Paraty' },
      { label: 'Premium', range: '$700–$1,800/night', gets: 'Landmark grandes dames, Ipanema beachfront, full Bahia eco-luxury.', example: 'Belmond Copacabana Palace, Fasano Rio, Txai Itacaré' },
      { label: 'Iconic', range: '$1,500–$3,500/night', gets: 'Trancoso designer casas, Fernando de Noronha clifftop, presidential suites at Copacabana Palace.', example: 'UXUA Casa Trancoso, Pousada Maravilha Fernando de Noronha' },
    ],
    areas: [
      { name: 'Rio de Janeiro', bestFor: 'Iconic skyline, beach culture, samba, food', description: 'Stay in Ipanema (Fasano, Janeiro), Leblon (Janeiro), or Copacabana (Belmond Copacabana Palace). Sugarloaf cable car at sunset and Christ the Redeemer at dawn are non-negotiable. 3–4 nights.' },
      { name: 'Trancoso (Bahia)', bestFor: 'Designer casas, Quadrado dinners, beach', description: 'A historic Jesuit village gone bohemian-chic, 1h from Porto Seguro airport (BPS). UXUA Casa is the global icon. 4–5 nights to slow down properly.' },
      { name: 'Itacaré & Praia do Forte (Bahia)', bestFor: 'Eco-luxury, surf, jungle-meets-beach', description: 'Itacaré (Txai Resort) is the surfer-romantic angle; Praia do Forte (Tivoli) is family-friendly turtle-protection. Both 90 min from Salvador airport (SSA).' },
      { name: 'Fernando de Noronha', bestFor: 'Best Brazilian beaches, snorkel, marine life', description: 'A 350km-offshore archipelago, UNESCO reserve, only 460 tourists/day. Fly via Recife or Natal. Pousada Maravilha is the iconic stay. Book 8–12 months ahead.' },
      { name: 'Paraty', bestFor: 'Colonial cobblestone romance, schooner trips', description: 'A UNESCO 17th-century gold-port town between Rio and São Paulo. Casa Turquesa is the Relais & Châteaux address. 2–3 nights as a Rio add-on.' },
    ],
    expertTips: [
      { tip: 'Use Uber and 99 — never hail a Rio street taxi', detail: 'Both apps work flawlessly in Brazilian cities at 30–50% lower fares than street taxis. Far safer too. Cash isn\'t needed; cards on file work everywhere.' },
      { tip: 'Book Cristo (Christ the Redeemer) for 7am or after 4pm', detail: 'The 9–11am tour-bus window is brutal. Book the cog-railway ticket on the day for early/late slot. Sunrise at Cristo (private trips $300+) is genuinely magical.' },
      { tip: 'Carry small reais for beach vendors and tips', detail: 'R$10–R$20 notes for caipirinha, beach umbrella tips, and cobble-street kiosks. ATMs at Itaú and Bradesco branches are reliable; avoid airport ATMs (high fees).' },
      { tip: 'For Trancoso, book a transfer from Porto Seguro 2–3 weeks ahead', detail: 'Porto Seguro (BPS) → Trancoso is a 1h drive plus river ferry. Hotels arrange this for $80–$150 each way. Don\'t self-drive — local roads at night are not for first-timers.' },
      { tip: 'Carnival is amazing if you commit, miserable if you don\'t', detail: 'Carnival week (40 days before Easter) doubles hotel prices and triples city energy. Either fully embrace it (book a Sambadrome box, dress white for Réveillon, surrender to street blocos) or schedule around it (March is wonderful).' },
    ],
    packing: [
      { item: 'A pair of Havaianas', why: 'Brazilians wear them everywhere. Buy a fresh pair at any pharmacy on arrival — local prices are a third of overseas. They become your default footwear.' },
      { item: 'Light linen shirts and breathable cotton dresses', why: 'Brazilian summer is humid. Polyester is unwearable. Pack what you\'d wear in a Mediterranean July.' },
      { item: 'Smart-casual Rio dinner outfit', why: 'Cipriani at Copacabana Palace, Fasano restaurant, and Casa Camolese all expect closed shoes and collared shirts at dinner. No flip-flops at fine dining.' },
      { item: 'Reef-safe sunscreen and broad-brim hat', why: 'The equatorial sun at Trancoso, Bahia, and Fernando de Noronha is intense. SPF 50+ mandatory; aloe-based after-sun is a daily necessity.' },
      { item: 'Yellow fever vaccination card', why: 'Required for travellers crossing into Bolivia/Peru and recommended by Brazilian health authorities for Pantanal/Amazon. No requirement for coast-only itineraries but recommended.' },
    ],
    guide: {
      getting: 'Fly to Rio (GIG) or São Paulo (GRU). From Europe: 11h direct on Latam, BA, KLM, Lufthansa, Air France. From NYC: 10h direct on Latam, Delta, American. Internal: Latam, Gol, Azul to Salvador (SSA), Recife (REC), Porto Seguro (BPS), or Fernando de Noronha (FEN). Trancoso = fly Porto Seguro then 1h transfer including a river ferry.',
      where: 'Classic 12-night honeymoon: 4 nights Rio (Belmond Copacabana Palace) → 5 nights Trancoso (UXUA Casa) → 3 nights Fernando de Noronha (Pousada Maravilha). Shorter 9-night version: 3 Rio + 5 Trancoso + 1 fly home. Wine-country alternative: 4 Rio + 4 Paraty + 4 São Paulo.',
      when: 'October–April is Brazilian summer. October and April are honeymoon sweet spots — warm sea, lower prices, fewer crowds, no Carnival surge. Carnival (Feb/Mar, varies yearly) doubles prices for one electric week. May–September: northeast (Bahia, Noronha) still warm; Rio cools to 18–22°C and beaches empty out.',
    },
    localFood: 'Feijoada (national dish: black bean and pork stew, traditional Saturday lunch — order at Bar Brasil or Casa de Feijoada in Rio), moqueca (Bahian fish stew with coconut milk and dendê palm oil), açaí bowls (frozen fruit pulp with granola and banana — the original superfood), pão de queijo (warm cheese bread, breakfast obsession), churrasco (rodízio-style barbecue at Fogo de Chão or Plataforma), brigadeiro (chocolate-condensed-milk truffle), caipirinha (cachaça, lime, sugar — order one of every flavor), açaí na tigela. Top tables: Lasai (Rio, Michelin starred), D.O.M. (São Paulo, Alex Atala), Mocotó (São Paulo), Casa de Tereza (Salvador), Tutto (Trancoso).',
    currency: 'Brazilian Real (BRL) — fluctuating around 5 BRL per USD. Cards accepted everywhere in cities and at quality hotels; cash useful for street vendors, beach kiosks, and small Bahia restaurants. ATMs widely available; use Itaú or Banco do Brasil branches for low fees.',
    language: 'Portuguese is universal. Spanish gets you 50% understanding; English fluency is patchy outside top hotels. Learn "obrigado/obrigada" (thank you), "bom dia/boa noite" (hello), "uma caipirinha por favor" (one caipirinha please).',
    timezone: 'UTC-3 (Brasília time, most of country). Fernando de Noronha is UTC-2.',
  },

  'namibia': {
    hero: '/images/hotels/sossusvlei-desert-lodge-namibia/hero.webp',
    tagline: 'Sossusvlei dunes at dawn, Skeleton Coast desert-elephants, and the darkest stargazing skies on earth — Africa\'s most cinematic safari.',
    intro: 'Namibia is the honeymoon for couples who want Africa stripped to its essential drama — the world\'s oldest desert, the most surreal dune photography, the rarest desert-adapted wildlife (elephants and lions that survive on fog and miracle), and skies dark enough to read a newspaper by the Milky Way. The luxury infrastructure is small, expensive, and genuinely world-class: andBeyond Sossusvlei Desert Lodge\'s glass-skylight villas, Wilderness Safaris\' Hoanib Skeleton Coast camp, Wolwedans\' sustainability legend on the NamibRand. A typical honeymoon is fly-in only — light aircraft connect the dots between dune sea, desert riverbed, and capital — and runs 10 nights with three or four lodges. Add Cape Town as a Southern Africa opener and you have the most photogenic honeymoon on the continent.',
    bestTime: 'Apr–Oct (dry season, peak game viewing)',
    flightFrom: '11h from Europe via Frankfurt or Johannesburg',
    topExperience: 'Sossusvlei Dunes & Stargazing',
    perfectFor: [
      'Photographers obsessed with dune light, big skies, and minimalist landscape',
      'Couples who want safari without the East African crowds',
      'Stargazers — NamibRand is one of the world\'s few certified Dark Sky Reserves',
      'Honeymooners who want one continent, two countries (pair with Cape Town)',
      'Adventure couples comfortable with light-aircraft transfers and remote camps',
    ],
    skipIf: [
      'You want classic Big Five game-drive density — Etosha is good, not Maasai Mara',
      'You need beach honeymoon — Atlantic coast at Swakopmund is cold and wild, not tropical',
      'You are nervous about light-aircraft transfers (Cessnas are the only practical access)',
      'You are travelling November–March — summer rains and 35°C+ desert heat are punishing',
    ],
    experiences: [
      {
        icon: '🏜️',
        title: 'Sossusvlei Dunes at Dawn',
        description: 'The orange-red dunes of Sossusvlei (Big Daddy and Dune 45 are the icons) are at their most photogenic in the first hour after sunrise. Stay at Little Kulala or Sossusvlei Desert Lodge for private-vehicle access through the back gate before the public crowds. Hike Big Daddy (300m of soft sand, 90 minutes up) and slide down its face into the white-clay pan of Deadvlei.',
        cost: 'Activity included at most lodges; Big Daddy hike is unguided',
        tip: 'Wear closed shoes — the sand cools at night but heats to 60°C by 10am. Carry 2L of water per person.',
      },
      {
        icon: '🌌',
        title: 'Stargazing at NamibRand Dark Sky Reserve',
        description: 'NamibRand is one of the world\'s few certified Dark Sky Reserves and Sossusvlei Desert Lodge\'s skylight villas are designed around it — your bed is positioned under a glass roof aimed at the Milky Way. Optional sleep-out under the stars on a private deck plus a guided astronomy session with the lodge telescope is the defining Namibia honeymoon experience.',
        cost: 'Astronomy session and Star Bed sleep-out included at top-tier lodges',
        tip: 'Book new-moon week for the darkest skies. The Magellanic Clouds (Southern Hemisphere companion galaxies) are visible to the naked eye.',
      },
      {
        icon: '🐘',
        title: 'Desert-Adapted Elephants of Damaraland or Hoanib',
        description: 'Northwest Namibia holds the world\'s only desert-adapted elephant population — they walk 50–60 km between water sources, dig for water with their trunks, and look gaunt and miraculous. Hoanib Skeleton Coast Camp and Mowani Mountain Camp Damaraland both run morning tracking drives that put you within 50m of these elephants.',
        cost: 'Activity included on full-board lodge stays',
        tip: 'Mornings only — afternoon heat sends them to dense bush. Guides are some of Africa\'s best.',
      },
      {
        icon: '✈️',
        title: 'Hot-Air Balloon over the Dunes',
        description: 'Namib Sky Balloon Safaris launches at 5am from Sossusvlei and floats silently over the dune sea for an hour. Champagne breakfast in the desert at landing. The single most photographable hour in Namibia and worth every cent.',
        cost: '$700–$900 per couple including breakfast and transfers',
        tip: 'Book 2–3 days in advance through your lodge. Wind can scrub flights — leave a buffer day.',
      },
      {
        icon: '🌊',
        title: 'Skeleton Coast Cape Fur Seal Colony',
        description: 'A scenic Cessna flight from Hoanib Skeleton Coast Camp lands you on the desolate Atlantic coast — fog, shipwrecks rotting in the sand, and a 100,000-strong cape fur seal colony at Cape Cross. The smell is famously brutal but the landscape is the most cinematic in Africa.',
        cost: 'Included at Hoanib; private charter from Sossusvlei $1,200–$2,000 per couple',
        tip: 'Pair with the famous "Eduard Bohlen" shipwreck overflight. Wear layers — the coast is 15°C cooler than the dunes.',
      },
    ],
    months: [
      { month: 'Jan', weather: 'Hot 22–35°C, summer rains', emoji: '🌧', crowds: 'Low', price: 'Low', verdict: 'Green season, hot, lower rates but variable' },
      { month: 'Feb', weather: 'Hot 22–35°C, peak rains', emoji: '🌧', crowds: 'Low', price: 'Low', verdict: 'Avoid — wet, hot, animals dispersed' },
      { month: 'Mar', weather: 'Cooling 20–32°C, late rains', emoji: '⛅', crowds: 'Low', price: 'Low', verdict: 'Last green-season month' },
      { month: 'Apr', weather: 'Pleasant 18–30°C, dry begins', emoji: '☀️', crowds: 'Moderate', price: 'Mid', verdict: 'Sweet spot — green dunes, lower prices' },
      { month: 'May', weather: 'Cool 12–28°C, dry, clear', emoji: '☀️', crowds: 'Moderate', price: 'Mid', verdict: 'Excellent value, no crowds, dramatic skies' },
      { month: 'Jun', weather: 'Cold nights 5°C, days 23°C', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Peak season starts — book 12 months out' },
      { month: 'Jul', weather: 'Cold 0–22°C, freezing nights', emoji: '☀️', crowds: 'Very High', price: 'Very High', verdict: 'Peak — perfect game viewing, sub-zero dawn' },
      { month: 'Aug', weather: 'Cool nights 5°C, warming days 25°C', emoji: '☀️', crowds: 'Very High', price: 'Very High', verdict: 'Peak honeymoon month, animals concentrated at water' },
      { month: 'Sep', weather: 'Warming 8–28°C', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Excellent — peak game viewing, comfortable temps' },
      { month: 'Oct', weather: 'Warm 14–32°C, dry', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Last great pre-rain month, hottest dry-season' },
      { month: 'Nov', weather: 'Hot 18–35°C, occasional showers', emoji: '⛅', crowds: 'Moderate', price: 'Mid', verdict: 'Shoulder — heat + early rains, some lodges close' },
      { month: 'Dec', weather: 'Hot 20–35°C, summer rains', emoji: '🌧', crowds: 'Low', price: 'Low', verdict: 'Green-season start, value but variable' },
    ],
    budgetTiers: [
      { label: 'Comfortable', range: '$400–$800/night', gets: 'Solid lodges with shared game drives, capital city boutiques, Etosha-edge private reserves.', example: 'Onguma The Fort, Strand Hotel Swakopmund, Olive Exclusive Windhoek' },
      { label: 'Premium', range: '$800–$2,000/night', gets: 'Private NamibRand lodges, Damaraland tracking camps, full-board with private vehicles.', example: 'Wolwedans Dunes Lodge, Mowani Mountain Camp, Little Kulala' },
      { label: 'Iconic', range: '$1,500–$5,000/night', gets: 'andBeyond Sossusvlei skylight villas, Wilderness Safaris flagship Hoanib, helicopter dune flights.', example: 'Sossusvlei Desert Lodge (andBeyond), Hoanib Skeleton Coast Camp' },
    ],
    areas: [
      { name: 'NamibRand & Sossusvlei', bestFor: 'Dunes, dark skies, photogenic landscape', description: 'The southern dune sea — andBeyond Sossusvlei Desert Lodge, Wolwedans, Little Kulala. Fly-in via Sesriem (SZM) airstrip. 3 nights minimum.' },
      { name: 'Damaraland', bestFor: 'Desert-adapted elephants, rock art, dramatic geology', description: 'Boulder-strewn red kopjes, Twyfelfontein UNESCO rock art, the Burnt Mountain. Mowani Mountain Camp is the honeymoon address. 2 nights.' },
      { name: 'Skeleton Coast & Hoanib', bestFor: 'Wilderness, fog-belt dunes, shipwrecks, seals', description: 'Remote northwestern Kunene. Hoanib Camp by Wilderness Safaris is the only practical luxury access. 2–3 nights, fly-in only.' },
      { name: 'Etosha National Park', bestFor: 'Classic Big Five game viewing', description: 'The salt-pan and waterhole national park, eastern Namibia. Onguma The Fort sits on the eastern boundary with private access. 2–3 nights.' },
      { name: 'Windhoek & Swakopmund', bestFor: 'Arrival, departure, coastal break', description: 'Windhoek for international gateway (Olive Exclusive boutique). Swakopmund for an Atlantic-coast 1-night break (Strand Hotel) — sand-boarding, dune-quad-biking, coastal seafood.' },
    ],
    expertTips: [
      { tip: 'Fly-in is non-negotiable for a honeymoon itinerary', detail: 'Self-driving Namibia is wonderful for adventurers but eats 2–3 days of your honeymoon in driving. Wilderness Air, Sefofane, and Scenic Air run 6-seat Cessna circuits between every major lodge. Build the entire trip around the air-circuit schedule via your operator.' },
      { tip: 'Pack soft duffel bags only — no hard suitcases', detail: 'Cessnas have a 20kg/44lb soft-bag-only luggage limit. Hard wheelies are physically rejected. Wilderness lodges provide laundry daily for free, so 4 days of clothes is plenty.' },
      { tip: 'Book through a specialist operator, not direct', detail: 'Namibia\'s top lodges (andBeyond, Wilderness Safaris) sell 90% of inventory through specialist operators (Aardvark Safaris, Yellow Zebra, Cazenove+Loyd) at the same price you\'d get direct. The operator handles the air-circuit logistics. Mandatory for first-timers.' },
      { tip: 'Tip in US dollars cash at lodges, Namibian dollars in town', detail: 'Lodge tipping: $10–$15 USD per couple per day in a communal kitty plus $20 USD per day for your specific guide. Town tipping: 10% in Namibian Dollar (NAD), pegged 1:1 to the South African Rand.' },
      { tip: 'Pair Namibia with Cape Town for the perfect Southern Africa trip', detail: 'A 2h flight separates Cape Town and Windhoek. 4 nights Cape Town + 8 nights Namibia is the ideal honeymoon split. Adds beach, wine country, and Table Mountain to the desert wilderness.' },
    ],
    packing: [
      { item: 'Layered clothing — fleece + windproof shell + light long-sleeve', why: 'Desert temperature swings are huge: 5°C dawn, 32°C noon. Layered neutral-tone (khaki/olive) clothing is the safari uniform.' },
      { item: 'Closed walking shoes plus open sandals', why: 'Closed shoes for dune hikes (Big Daddy at Sossusvlei is 300m of soft sand). Sandals for camp.' },
      { item: 'High-SPF sunscreen and broad-brim hat', why: 'No shade in the dunes. SPF 50+ mandatory; daily after-sun. UV is at altitude-equivalent levels.' },
      { item: 'Soft duffel bag (no wheelie cases)', why: 'Cessna 20kg/44lb soft-bag limit is enforced. Hard cases get rejected at the gate. A 65L Patagonia Black Hole or Eagle Creek duffel works perfectly.' },
      { item: 'Binoculars and a 200mm+ camera lens', why: 'Wildlife is rarer and farther than East Africa. A 300–600mm lens is essential for elephants/lions; binoculars (8x42 minimum) double everyone\'s experience on game drives.' },
    ],
    guide: {
      getting: 'Fly to Windhoek Hosea Kutako International (WDH) on Lufthansa direct from Frankfurt (10h), Eurowings Discover, KLM via Amsterdam, or Qatar via Doha. From the US: connect through Frankfurt, Amsterdam, or Johannesburg (3h hop on SAA or Airlink). Internal: 6-seat Cessnas via Wilderness Air, Sefofane, Scenic Air to all major lodge airstrips. Operator handles full circuit booking.',
      where: 'Classic 10-night honeymoon: 1 night Windhoek (Olive Exclusive) → 3 nights Sossusvlei (Sossusvlei Desert Lodge or Little Kulala) → 2 nights Damaraland (Mowani) → 2 nights Skeleton Coast (Hoanib) → 2 nights Etosha (Onguma) → fly home Windhoek. Add 1 night Swakopmund mid-trip for coastal break. Pair with 4 nights Cape Town for ideal Southern Africa fortnight.',
      when: 'May–October dry season is peak — clear skies, cool nights (sub-zero in July), perfect game viewing as animals concentrate at waterholes. April and November are sweet spots: lower prices, dunes still photogenic, fewer crowds. Avoid December–March (summer rains, heat, animals disperse, some lodges close).',
    },
    localFood: 'Game meat (kudu fillet, oryx steak, springbok carpaccio, eland — better than beef and ethically wild-harvested), biltong (air-dried spiced beef/game, the national snack), potjiekos (cast-iron-pot stew slow-cooked over fire), Cape Malay-influenced curries, kapana (street-grilled meat strips with chili-tomato salsa, downtown Windhoek), Namibian oysters (Walvis Bay, world-class), Windhoek Lager (the local pilsener, Reinheitsgebot-brewed), Tafel Lager. Top tables: Joe\'s Beerhouse (Windhoek institution), Olive Restaurant (Windhoek), The Tug (Swakopmund), all top lodges serve serious cuisine (Sossusvlei Desert Lodge\'s wine cellar is South African vintage focused).',
    currency: 'Namibian Dollar (NAD) pegged 1:1 to South African Rand (ZAR) — both circulate. Cards accepted at lodges, hotels, and city restaurants; cash useful for tipping (US dollars at lodges, NAD/ZAR in town). ATMs widely available at airports and Windhoek.',
    language: 'English is official; Afrikaans and German widely spoken (Namibia was a German colony until 1915); local languages include Oshiwambo, Otjiherero, and Khoekhoe. Lodge staff speak fluent English.',
    timezone: 'UTC+2 year-round (Namibia abolished daylight saving in 2017)',
  },
}

// ── Metadata ──────────────────────────────────────────────────────────────────

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country } = await params
  const meta = DESTINATION_META[country]
  const name = country.replace(/-/g, ' ')
  const proper = name.charAt(0).toUpperCase() + name.slice(1)
  const title = `Best Honeymoon Hotels in ${proper} — Scored & Ranked | MyHoneymoonHotel`
  const description = meta?.tagline ?? `The definitive guide to honeymoon hotels in ${proper}. Every property scored for romance with real verdicts, price breakdowns, and best room recommendations.`
  const canonical = `https://myhoneymoonhotel.com/destinations/${country}`
  const heroUrl = meta?.hero
    ? (meta.hero.startsWith('http') ? meta.hero : `https://myhoneymoonhotel.com${meta.hero}`)
    : undefined
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      type: 'website',
      siteName: 'My Honeymoon Hotel',
      images: heroUrl ? [{ url: heroUrl, width: 1200, height: 630, alt: `Honeymoon hotels in ${proper}` }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: heroUrl ? [heroUrl] : undefined,
    },
  }
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default async function DestinationPage({ params }: Props) {
  const { country } = await params
  const hotels = getHotelsByDestination(country)
  const meta = DESTINATION_META[country]
  const destName = country.replace(/-/g, ' ')
  const destProper = destName.charAt(0).toUpperCase() + destName.slice(1)

  if (hotels.length === 0) notFound()

  const avgScore = Math.round(hotels.reduce((a, b) => a + b.honeymoon_score, 0) / hotels.length)
  const avgPrice = Math.round(hotels.reduce((a, b) => a + b.price_per_night_usd.min, 0) / hotels.length)
  const adultsOnlyCount = hotels.filter(h => h.adults_only).length
  const topHotels = [...hotels].sort((a, b) => b.honeymoon_score - a.honeymoon_score).slice(0, 3)
  const sortedHotels = [...hotels].sort((a, b) => b.honeymoon_score - a.honeymoon_score)

  return (
    <div>

      {/* ── HERO ── */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        {meta?.hero ? (
          <Image src={meta.hero} alt={destProper} fill priority className="object-cover" sizes="100vw" />
        ) : (
          <div className="w-full h-full bg-zinc-200" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

        <nav className="absolute top-6 left-8 sm:left-12 flex items-center gap-2 text-white/50 text-xs">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link href="/" className="hover:text-white transition-colors">Destinations</Link>
          <span>/</span>
          <span className="text-white/70 capitalize">{destName}</span>
        </nav>

        <div className="absolute bottom-10 left-8 sm:left-12 max-w-2xl">
          <p className="text-white/60 text-xs tracking-[0.2em] uppercase mb-3">Honeymoon Guide</p>
          <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl text-white mb-4 capitalize">
            {destProper}
          </h1>
          {meta?.tagline && (
            <p className="text-white/75 text-lg leading-relaxed max-w-lg">{meta.tagline}</p>
          )}
        </div>
      </section>

      {/* ── AT A GLANCE CARDS — overlap hero ── */}
      <section className="max-w-6xl mx-auto px-6 sm:px-12 -mt-10 relative z-10 mb-16">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: 'Best Time', value: meta?.bestTime ?? 'Year-round', icon: '📅' },
            { label: 'Avg Price', value: `$${avgPrice.toLocaleString()}+/night`, icon: '💰' },
            { label: 'Flight from EU', value: meta?.flightFrom ?? 'Varies', icon: '✈️' },
            { label: 'Avg Honeymoon Score', value: `${avgScore}/100`, icon: '❤️' },
          ].map(f => (
            <div key={f.label} className="bg-white border border-zinc-100 rounded-2xl px-5 py-4 shadow-md">
              <div className="text-2xl mb-2">{f.icon}</div>
              <div className="font-semibold text-zinc-900 text-sm">{f.value}</div>
              <div className="text-zinc-400 text-xs mt-0.5">{f.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-6xl mx-auto px-6 sm:px-12 space-y-24 pb-32">

        {/* ── INTRO + QUICK FACTS ── */}
        {meta && (
          <section className="grid lg:grid-cols-[1fr_300px] gap-12 items-start">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-4">Why Here for Your Honeymoon</p>
              <p className="text-zinc-700 text-xl leading-relaxed mb-8">{meta.intro}</p>
            </div>
            <div className="bg-zinc-50 rounded-2xl p-6 space-y-4 text-sm sticky top-6">
              <h3 className="font-semibold text-zinc-900 text-base mb-4">At a Glance</h3>
              {[
                { label: 'Currency', value: meta.currency },
                { label: 'Language', value: meta.language },
                { label: 'Time zone', value: meta.timezone },
                { label: 'Best time', value: meta.bestTime },
                { label: 'Hotels scored', value: `${hotels.length} properties` },
                { label: 'Adults-only options', value: `${adultsOnlyCount} resorts` },
              ].map(r => (
                <div key={r.label} className="flex justify-between gap-4 py-2 border-b border-zinc-100 last:border-0">
                  <span className="text-zinc-400">{r.label}</span>
                  <span className="text-zinc-700 font-medium text-right">{r.value}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── PERFECT FOR / SKIP IF ── */}
        {meta?.perfectFor && (
          <section>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">Is This Right for You?</p>
            <h2 className="font-display text-3xl sm:text-4xl mb-8">{destProper} for Honeymooners</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">✓</span>
                  <h3 className="font-semibold text-emerald-900">Perfect for you if…</h3>
                </div>
                <ul className="space-y-3">
                  {meta.perfectFor.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-emerald-800">
                      <span className="mt-0.5 shrink-0 w-4 h-4 rounded-full bg-emerald-200 flex items-center justify-center text-emerald-700 text-[10px] font-bold">{i + 1}</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">✕</span>
                  <h3 className="font-semibold text-amber-900">Skip it if…</h3>
                </div>
                <ul className="space-y-3">
                  {meta.skipIf.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-amber-800">
                      <span className="mt-0.5 shrink-0 w-4 h-4 rounded-full bg-amber-200 flex items-center justify-center text-amber-700 text-[10px] font-bold">{i + 1}</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* ── TOP 5 EXPERIENCES ── */}
        {meta?.experiences && (
          <section>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">What to Do</p>
            <h2 className="font-display text-3xl sm:text-4xl mb-8">Top 5 Romantic Experiences in {destProper}</h2>
            <div className="space-y-4">
              {meta.experiences.map((exp, i) => (
                <div key={i} className="grid sm:grid-cols-[auto_1fr_auto] gap-4 sm:gap-6 items-start border border-zinc-100 rounded-2xl p-5 hover:border-zinc-200 transition-colors">
                  <div className="text-4xl">{exp.icon}</div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold text-zinc-300 tabular-nums">0{i + 1}</span>
                      <h3 className="font-semibold text-zinc-900">{exp.title}</h3>
                    </div>
                    <p className="text-zinc-500 text-sm leading-relaxed mb-3">{exp.description}</p>
                    <div className="flex items-start gap-2">
                      <span className="text-[11px] font-semibold text-rose-400 uppercase tracking-wider shrink-0 mt-0.5">💡 Insider tip</span>
                      <p className="text-zinc-400 text-xs leading-relaxed">{exp.tip}</p>
                    </div>
                  </div>
                  <div className="shrink-0">
                    <span className="text-xs text-zinc-400 bg-zinc-50 border border-zinc-100 px-3 py-1.5 rounded-full whitespace-nowrap">{exp.cost}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── MONTH BY MONTH ── */}
        {meta?.months && (
          <section>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">When to Go</p>
            <h2 className="font-display text-3xl sm:text-4xl mb-8">{destProper} Month by Month</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {meta.months.map((m) => {
                const isGood = m.price === 'Low' || m.price === 'Low-mid' || m.verdict.toLowerCase().includes('best') || m.verdict.toLowerCase().includes('excellent') || m.verdict.toLowerCase().includes('perfect')
                const isDanger = m.emoji === '⚠️' || m.emoji === '🌀'
                return (
                  <div key={m.month} className={`rounded-xl p-4 border text-center ${isDanger ? 'bg-red-50 border-red-100' : isGood ? 'bg-emerald-50 border-emerald-100' : 'bg-zinc-50 border-zinc-100'}`}>
                    <div className="text-xl mb-1">{m.emoji}</div>
                    <div className="font-bold text-zinc-900 text-sm mb-1">{m.month}</div>
                    <div className={`text-[10px] font-semibold uppercase tracking-wider mb-2 ${isDanger ? 'text-red-500' : 'text-zinc-400'}`}>{m.crowds} crowds</div>
                    <div className={`text-[11px] font-medium ${isDanger ? 'text-red-600' : isGood ? 'text-emerald-700' : 'text-zinc-600'}`}>{m.verdict}</div>
                  </div>
                )
              })}
            </div>
          </section>
        )}

        {/* ── BUDGET TIERS ── */}
        {meta?.budgetTiers && (
          <section>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">What You&apos;ll Pay</p>
            <h2 className="font-display text-3xl sm:text-4xl mb-8">Budget Guide for {destProper}</h2>
            <div className="grid sm:grid-cols-3 gap-5">
              {meta.budgetTiers.map((tier, i) => (
                <div key={i} className={`rounded-2xl p-6 border ${i === 1 ? 'bg-zinc-950 border-zinc-800 text-white' : 'bg-zinc-50 border-zinc-100'}`}>
                  <div className={`text-xs font-semibold tracking-[0.2em] uppercase mb-3 ${i === 1 ? 'text-rose-400' : 'text-rose-400'}`}>{tier.label}</div>
                  <div className={`font-display text-2xl mb-4 ${i === 1 ? 'text-white' : 'text-zinc-900'}`}>{tier.range}</div>
                  <p className={`text-sm leading-relaxed mb-4 ${i === 1 ? 'text-zinc-300' : 'text-zinc-500'}`}>{tier.gets}</p>
                  <div className={`text-xs pt-4 border-t ${i === 1 ? 'border-zinc-700 text-zinc-400' : 'border-zinc-200 text-zinc-400'}`}>
                    e.g. {tier.example}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── AREAS GUIDE ── */}
        {meta?.areas && (
          <section>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">Where to Stay</p>
            <h2 className="font-display text-3xl sm:text-4xl mb-8">Areas of {destProper} for Honeymooners</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {meta.areas.map((area, i) => (
                <div key={i} className="border border-zinc-100 rounded-2xl p-6 hover:border-zinc-200 transition-colors">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="font-semibold text-zinc-900">{area.name}</h3>
                    <span className="text-[11px] font-medium text-rose-400 bg-rose-50 px-2.5 py-1 rounded-full shrink-0 whitespace-nowrap">{area.bestFor}</span>
                  </div>
                  <p className="text-zinc-500 text-sm leading-relaxed">{area.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── HOTEL GRID ── */}
        <section id="hotels">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-2">All Hotels</p>
              <h2 className="font-display text-3xl sm:text-4xl">Honeymoon Hotels in {destProper}</h2>
            </div>
            <p className="text-zinc-400 text-sm">{hotels.length} properties · sorted by Honeymoon Score</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {sortedHotels.map(h => (
              <HotelCard key={h.slug} hotel={h} />
            ))}
          </div>
        </section>

        {/* ── MAP ── */}
        <section>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">Map</p>
          <h2 className="font-display text-3xl sm:text-4xl mb-6">Hotels in {destProper}</h2>
          <Stay22MapWidget
            location={destProper}
            anchorHotelName={[...hotels].sort((a, b) => b.honeymoon_score - a.honeymoon_score)[0]?.name}
            height={480}
          />
        </section>

        {/* ── COMPARISON TABLE ── */}
        {topHotels.length >= 2 && (
          <section>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">Compare</p>
            <h2 className="font-display text-3xl sm:text-4xl mb-6">Top {topHotels.length} Hotels Side by Side</h2>
            <div className="border border-zinc-100 rounded-2xl overflow-hidden overflow-x-auto">
              <table className="w-full text-sm min-w-[600px]">
                <thead>
                  <tr className="bg-zinc-50 border-b border-zinc-100">
                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-zinc-400">Hotel</th>
                    <th className="px-4 py-4 text-center text-xs font-semibold uppercase tracking-wider text-zinc-400">Score</th>
                    <th className="px-4 py-4 text-center text-xs font-semibold uppercase tracking-wider text-zinc-400">Price/night</th>
                    <th className="px-4 py-4 text-center text-xs font-semibold uppercase tracking-wider text-zinc-400">Adults-Only</th>
                    <th className="px-4 py-4 text-center text-xs font-semibold uppercase tracking-wider text-zinc-400">Spa</th>
                    <th className="px-4 py-4 text-center text-xs font-semibold uppercase tracking-wider text-zinc-400">Beach</th>
                  </tr>
                </thead>
                <tbody>
                  {topHotels.map((h, i) => (
                    <tr key={h.slug} className={`border-b border-zinc-50 hover:bg-zinc-50 transition-colors ${i === 0 ? 'bg-zinc-50/50' : ''}`}>
                      <td className="px-6 py-4">
                        <Link href={`/hotels/${h.slug}`} className="font-medium text-zinc-900 hover:text-rose-500 transition-colors">{h.name}</Link>
                        {i === 0 && <span className="ml-2 text-[10px] font-semibold text-rose-400 uppercase tracking-wider">Top Pick</span>}
                      </td>
                      <td className="px-4 py-4 text-center font-bold text-zinc-900">{h.honeymoon_score}</td>
                      <td className="px-4 py-4 text-center text-zinc-600">${h.price_per_night_usd.min.toLocaleString()}+</td>
                      <td className="px-4 py-4 text-center">{h.adults_only ? '✓' : '—'}</td>
                      <td className="px-4 py-4 text-center">{h.amenities.some(a => a.includes('spa')) ? '✓' : '—'}</td>
                      <td className="px-4 py-4 text-center">{h.amenities.some(a => a.includes('beach')) ? '✓' : '—'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* ── EXPERT TIPS ── */}
        {meta?.expertTips && (
          <section>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">Expert Advice</p>
            <h2 className="font-display text-3xl sm:text-4xl mb-8">Insider Tips for Your {destProper} Honeymoon</h2>
            <div className="space-y-4">
              {meta.expertTips.map((tip, i) => (
                <div key={i} className="flex gap-5 items-start border-b border-zinc-100 pb-6 last:border-0">
                  <span className="font-display text-4xl text-zinc-100 tabular-nums shrink-0 select-none leading-none mt-1">0{i + 1}</span>
                  <div>
                    <h3 className="font-semibold text-zinc-900 mb-2">{tip.tip}</h3>
                    <p className="text-zinc-500 text-sm leading-relaxed">{tip.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── PACKING LIST ── */}
        {meta?.packing && (
          <section>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">What to Pack</p>
            <h2 className="font-display text-3xl sm:text-4xl mb-8">Packing List for {destProper}</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {meta.packing.map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-zinc-100 hover:border-zinc-200 transition-colors">
                  <span className="w-6 h-6 rounded-full bg-zinc-900 text-white text-xs flex items-center justify-center font-bold shrink-0 mt-0.5">{i + 1}</span>
                  <div>
                    <div className="font-medium text-zinc-900 text-sm">{item.item}</div>
                    <div className="text-zinc-400 text-xs mt-0.5 leading-relaxed">{item.why}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── LOCAL FOOD & DRINK ── */}
        {meta?.localFood && (
          <section>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">Food & Drink</p>
            <h2 className="font-display text-3xl sm:text-4xl mb-4">What You&apos;ll Eat in {destProper}</h2>
            <p className="text-zinc-500 text-base leading-relaxed max-w-3xl">{meta.localFood}</p>
          </section>
        )}

        {/* ── PRACTICAL GUIDE ── */}
        {meta?.guide && (
          <section>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">Practical Guide</p>
            <h2 className="font-display text-3xl sm:text-4xl mb-8">Getting to {destProper}</h2>
            <div className="grid sm:grid-cols-3 gap-5">
              {[
                { title: 'Getting There', icon: '✈️', content: meta.guide.getting },
                { title: 'Where to Stay', icon: '📍', content: meta.guide.where },
                { title: 'When to Go', icon: '📅', content: meta.guide.when },
              ].map(g => (
                <div key={g.title} className="bg-zinc-50 border border-zinc-100 rounded-2xl p-6">
                  <div className="text-2xl mb-3">{g.icon}</div>
                  <h3 className="font-semibold text-zinc-900 mb-3">{g.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{g.content}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── RELATED EXPERIENCES ── */}
        <section>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">Browse by Experience</p>
          <h2 className="font-display text-3xl sm:text-4xl mb-6">Experiences in {destProper}</h2>
          <div className="flex flex-wrap gap-3">
            {Array.from(new Set(hotels.flatMap(h => h.experience_types))).map(exp => (
              <Link key={exp} href={`/experiences/${exp}`}
                className="border border-zinc-200 hover:border-zinc-900 text-zinc-600 hover:text-zinc-900 px-5 py-2.5 rounded-full text-sm font-medium transition-colors capitalize">
                {exp.replace(/-/g, ' ')}
              </Link>
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}
