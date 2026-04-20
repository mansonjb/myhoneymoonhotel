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

  serengeti: {
    hero: 'https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=1920&q=80',
    tagline: 'Two people, a sunset, and 1.5 million wildebeest. Nothing else compares.',
    intro: 'A Serengeti honeymoon is the most emotionally intense honeymoon experience on earth. Not the most relaxing — the most intense. The raw contrast between the wild African landscape and world-class lodge luxury creates a feeling that no beach destination can match. Watching a thousand wildebeest cross the Mara River at dawn, then returning to a butler-serviced tent with a wine cellar and a plunge pool: this is what every other honeymoon wishes it was.',
    bestTime: 'Jul–Oct (migration)',
    flightFrom: '11–13h from Europe',
    topExperience: 'Safari & Wildlife',
    perfectFor: [
      'Couples who want the most emotionally powerful honeymoon imaginable',
      'Wildlife obsessives — the Great Migration is the greatest wildlife spectacle on earth',
      'Adventure couples who want active days and luxury nights',
      'Those who have "done" beach honeymoons and want something transformative',
      'Couples who want to combine with Zanzibar beach (the classic Tanzania 2-week trip)',
    ],
    skipIf: [
      'One of you is terrified of insects, early mornings, or being outdoors at night',
      'You want to sleep in every day — game drives leave at 5:30am',
      'Budget under $1,500/night — the best safari lodges are expensive and worth it',
      'Beach time is the priority — combine with Zanzibar if so',
      'The 10-hour journey plus charter flights each way feels excessive',
    ],
    experiences: [
      { icon: '🦁', title: 'Dawn Game Drive (Big Five)', description: 'The 5:30am departure in an open Land Cruiser as the savanna wakes up. Lions hunting, elephants at the waterhole, a cheetah with cubs. Your private guide reads the landscape like no guidebook can.', cost: 'Included at top lodges', tip: 'Request the same guide for your entire stay — continuity creates the best sightings as they learn what you want to see.' },
      { icon: '🎈', title: 'Hot Air Balloon over the Serengeti', description: 'Floating above 1.5 million square km of wilderness at sunrise. The shadow of your balloon moving over the grass below. Champagne breakfast in the bush after landing.', cost: '$550–$700 per person', tip: 'Book through your lodge, not independently. The best operators fly specific routes depending on where the migration is that week.' },
      { icon: '🚶', title: 'Armed Bush Walk', description: 'Leaving the vehicle and walking with an armed ranger and tracker. You suddenly notice things you\'ve been driving past all week: dung beetle navigation, lion paw prints, the smell of an elephant\'s path. The most intimate way to experience Africa.', cost: 'Included at Singita, extra at others', tip: 'Do this on day 3–4 when you\'re calibrated to the bush. Day 1 walking feels overwhelming; later it\'s extraordinary.' },
      { icon: '🌅', title: 'Sundowners at a Private Kopje', description: 'Your guide sets up gin and tonics on a granite rock outcropping as the sun drops over the Serengeti. The light turns everything gold. This is the Africa of imagination made real.', cost: 'Included at all top lodges', tip: 'Ask your guide to find a kopje with a 360-degree view. The best ones are not on the standard route.' },
      { icon: '🍽️', title: 'Bush Dinner Under the Stars', description: 'A table set in the wilderness — lanterns, starched linen, the sound of hyenas in the distance. The most romantic dinner table on earth has no roof.', cost: '$200–$400 supplement at most lodges', tip: 'Arrange this for your last night. After a week in the bush, you\'ll understand exactly why this is extraordinary.' },
    ],
    months: [
      { month: 'Jan', weather: 'Short rains ending, calving begins', emoji: '🌦', crowds: 'Low', price: 'Low-mid', verdict: 'Calving season starts (best predator action)' },
      { month: 'Feb', weather: 'Warm, dry, wildebeest calving peak', emoji: '☀️', crowds: 'Low', price: 'Mid', verdict: 'Best month for big cats hunting' },
      { month: 'Mar', weather: 'Long rains begin, green', emoji: '🌦', crowds: 'Very low', price: 'Lowest', verdict: 'Green season, best prices, some lodges close' },
      { month: 'Apr', weather: 'Peak long rains', emoji: '🌧', crowds: 'Very low', price: 'Lowest', verdict: 'Some lodges closed — check before booking' },
      { month: 'May', weather: 'Rains easing, migration moving north', emoji: '⛅', crowds: 'Low', price: 'Low', verdict: 'Good value as rains end' },
      { month: 'Jun', weather: 'Dry season begins, herds moving', emoji: '☀️', crowds: 'Moderate', price: 'Mid-high', verdict: 'Migration entering northern Serengeti' },
      { month: 'Jul', weather: 'Peak dry season, Mara crossings', emoji: '☀️', crowds: 'Peak', price: 'Very high', verdict: 'River crossings at their most dramatic' },
      { month: 'Aug', weather: 'Dry, dusty, perfect game viewing', emoji: '☀️', crowds: 'Peak', price: 'Very high', verdict: 'The most dramatic month' },
      { month: 'Sep', weather: 'Still dry, herds beginning to move south', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Excellent, slightly less crowded' },
      { month: 'Oct', weather: 'Short rains approach, herds moving', emoji: '🌤', crowds: 'Moderate', price: 'Mid', verdict: 'Good value, still great game' },
      { month: 'Nov', weather: 'Short rains begin, herds in south', emoji: '🌦', crowds: 'Low', price: 'Low', verdict: 'Quiet, green, atmospheric' },
      { month: 'Dec', weather: 'Short rains, calving prep', emoji: '🌦', crowds: 'Low', price: 'Low-mid', verdict: 'Good value before calving season' },
    ],
    budgetTiers: [
      { label: 'Luxury Tented Camp', range: '$800–$1,500/night', gets: 'Private tented suite, guided game drives, meals. Less butler, more adventurous. Still extraordinary.', example: 'Serengeti Bushtops, Nomad Lamai' },
      { label: 'Ultra-Luxury Lodge', range: '$1,500–$3,000/night (AI)', gets: 'Private suite, full butler, sommelier, gourmet dining, private game drives. The gold standard.', example: 'Singita Sasakwa, Four Seasons Serengeti' },
      { label: 'Private Concession', range: '$2,500–$6,000+/night (AI)', gets: 'Exclusive wildlife concession (no other vehicles), private guides, helicopter access, complete privacy.', example: 'Singita Grumeti Reserve (entire concession)' },
    ],
    areas: [
      { name: 'Central Serengeti (Seronera)', bestFor: 'Year-round game, resident lions', description: 'The lion capital of Tanzania. Game viewing is excellent year-round. More lodges means slightly more vehicle traffic. Best for couples who want consistent sightings without chasing the migration.' },
      { name: 'Northern Serengeti (Kogatende)', bestFor: 'Migration river crossings (Jul–Oct)', description: 'Where the Mara River crossings happen. The most dramatic wildlife spectacle on earth. Singita Lamai, Sayari Camp territory. Access only makes sense July–October.' },
      { name: 'Grumeti Private Concession', bestFor: 'Total privacy, no vehicle crowds', description: 'Singita\'s 350,000-acre private concession. Only Singita guests can game drive here. Zero vehicle congestion. The migration passes through June–July. The most exclusive safari experience in Africa.' },
      { name: 'Western Corridor', bestFor: 'Calving season (Jan–Feb), hippos', description: 'The Grumeti River zone. Enormous hippo populations, crocodile drama at river crossings. Best January–February during the calving season when the plains are covered in newborn wildebeest.' },
    ],
    expertTips: [
      { tip: 'Request the same private guide for your entire stay', detail: 'The relationship between guests and guide is the most important variable in a safari experience. A guide who knows what you love — birds, predators, plants — transforms every drive. Ask to lock in one guide before you arrive.' },
      { tip: 'Book the balloon for day 4–5, not day 1', detail: 'The balloon is best experienced after you\'ve calibrated your eye to the landscape. On day 1, you don\'t know what you\'re seeing. By day 4, the balloon reveals what you\'ve come to love from a completely different perspective.' },
      { tip: 'Combine with Zanzibar: 5 nights Serengeti + 4 nights Zanzibar', detail: 'The classic Tanzania honeymoon. The contrast between dusty red savanna and white coral beach is extraordinary. Most couples agree this two-destination combination is their best travel experience ever.' },
      { tip: 'Pack neutral colours — khaki, olive, tan only', detail: 'Not just a style recommendation: blue attracts tsetse flies and bright colours spook animals on walking safaris. Your guide will ask you to change if you arrive in anything fluorescent.' },
      { tip: 'The pre-arrival email to Singita is the most important email of your honeymoon', detail: 'Tell them it\'s your honeymoon, what wildlife you most want to see, any dietary needs, and whether you want a bush dinner and balloon arranged. Singita responds to detail with extraordinary generosity.' },
    ],
    packing: [
      { item: 'Khaki/olive clothing (×4 sets minimum)', why: 'You\'re in the same vehicle for 6+ hours. Comfort and camouflage matter.' },
      { item: 'Good binoculars (8×42 minimum)', why: 'Non-negotiable. Borrowed binoculars from the lodge are never as good.' },
      { item: 'Telephoto lens or superzoom camera', why: 'The wildlife is real and sometimes far. A 400mm+ lens changes everything.' },
      { item: 'Quality headlamp', why: 'Walking to your tent from dinner with no light is surprisingly important' },
      { item: 'Buff/neck gaiter', why: 'Dust on open-vehicle game drives is relentless in dry season' },
      { item: 'Merino wool base layer', why: 'Dawn game drives (5:30am) are genuinely cold — 10–14°C in the open vehicle' },
      { item: 'DEET mosquito repellent (30%+)', why: 'Malaria prophylaxis is required — consult your doctor for doxycycline or Malarone before travel' },
      { item: 'Portable power bank', why: 'Camp electricity runs on generator — your devices won\'t always charge overnight' },
    ],
    guide: {
      getting: 'Fly to Kilimanjaro International (JRO) or Julius Nyerere International (DAR) in Tanzania. Then a charter flight (30–60 min, arranged by your lodge) to private airstrips within the Serengeti ecosystem. No self-driving — all logistics handled by the lodge from the moment you land.',
      where: 'Central Serengeti (Seronera area, year-round game), Northern Serengeti (Kogatende, Mara crossings July–October), Grumeti Concession (Singita, ultra-exclusive private reserve), Western Corridor (calving season, Jan–Feb). Position yourself based on the time of year.',
      when: 'July–October for the Great Migration river crossings — the most dramatic wildlife spectacle on earth. January–February for calving season, predator action, and green landscape. June and November are excellent shoulder periods. March–May long rains are the off-season.',
    },
    localFood: 'Nyama choma (roasted goat or beef), ugali (maize porridge), sukuma wiki (collard greens), mishkaki (skewered meat). Lodge food is world-class international with Tanzanian influences. The bush breakfast after a balloon safari — set in the savanna, full English with Champagne — is one of the great meals of any honeymoon.',
    currency: 'Tanzanian Shilling (TZS) — but USD is used everywhere and preferred at lodges.',
    language: 'Swahili and English.',
    timezone: 'GMT+3 (East Africa Time)',
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
}

// ── Metadata ──────────────────────────────────────────────────────────────────

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country } = await params
  const meta = DESTINATION_META[country]
  const name = country.replace(/-/g, ' ')
  const proper = name.charAt(0).toUpperCase() + name.slice(1)
  return {
    title: `Best Honeymoon Hotels in ${proper} — Scored & Ranked | MyHoneymoonHotel`,
    description: meta?.tagline ?? `The definitive guide to honeymoon hotels in ${proper}. Every property scored for romance with real verdicts, price breakdowns, and best room recommendations.`,
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

        {/* ── MAP ── */}
        <section>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">Map</p>
          <h2 className="font-display text-3xl sm:text-4xl mb-6">Hotels in {destProper}</h2>
          <Stay22MapWidget location={destProper} height={480} />
        </section>

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
