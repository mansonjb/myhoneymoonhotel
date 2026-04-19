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
