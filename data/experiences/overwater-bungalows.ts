import type { ExperienceMeta } from '@/types/experience'

const meta: ExperienceMeta = {
  label: 'Overwater Villas',
  tagline: 'Sleep above the most beautiful water on earth',
  hero: '/images/hotels/four-seasons-bora-bora/hero.webp',
  intro: 'The overwater bungalow is the defining honeymoon experience — a private villa suspended above a turquoise lagoon, where you slip into the water directly from your deck, watch fish through a glass floor panel, and fall asleep to the sound of the Pacific or Indian Ocean. Invented in Bora Bora in the 1960s, perfected in the Maldives in the 1990s, and now available at over 50 destinations worldwide, the overwater villa remains the most sought-after room type in luxury travel.',
  stats: [
    { icon: '🌊', value: '18', label: 'Scored Properties' },
    { icon: '💰', value: '$600–$8,000', label: 'Per Night Range' },
    { icon: '📍', value: '4', label: 'Top Destinations' },
    { icon: '❤️', value: '94/100', label: 'Avg Honeymoon Score' },
  ],
  perfectFor: [
    'Couples who want total privacy and direct lagoon access',
    'Those who prioritise the room itself as the experience',
    'Couples comfortable disconnecting from everything',
    'Anyone who wants the most iconic honeymoon photo',
    'First-time luxury travellers wanting a singular experience',
  ],
  skipIf: [
    'You need Wi-Fi or phone signal at all times',
    'Motion sensitivity — platforms can move in swell',
    'Tight budget (entry-level is $500+/night; quality starts at $800+)',
    'You dislike heat and humidity (peak season is hot)',
  ],
  reasons: [
    { title: 'Total privacy', desc: 'Your own deck, your own lagoon access, no one walking past. No corridor outside your door. The architecture of the overwater villa is purpose-built for intimacy — the most private hotel room format ever designed.' },
    { title: 'The light at golden hour', desc: 'Sunrise and sunset over water, from bed. No hotel room experience compares to watching colour spread across a lagoon through floor-to-ceiling glass. At properties like Soneva Jani, the bedroom roof retracts — you watch the stars before sleeping.' },
    { title: 'The silence', desc: 'Floating above clear water, at night, under stars, with only the sound of water below — there is a reason overwater villas have been the benchmark honeymoon experience for 50 years. The silence at 2am over a Maldivian lagoon is extraordinary.' },
    { title: 'The glass floor ritual', desc: 'At premium overwater villas, a glass-floor panel in the living room or bathroom lets you watch reef fish, rays, and sometimes sharks below. It becomes a morning ritual — a cup of coffee and a live aquarium beneath you.' },
    { title: 'In-villa dining', desc: 'At top-tier properties, breakfast delivered by canoe, dinner on your own deck under the stars, and a plunge pool that becomes your private spa. You can have an exceptional four-day honeymoon without leaving your villa.' },
  ],
  destinations: [
    { name: 'Maldives', slug: 'maldives', why: 'Most iconic overwater destination. Each resort on its own private island, clearest water in the world (30m visibility), most variety of overwater villa styles.', budget: '$800–$8,000/night', bestFor: 'Ultimate luxury, marine life, privacy' },
    { name: 'Bora Bora', slug: 'bora-bora', why: 'The original overwater bungalow destination. Backdrop of Mount Otemanu, turquoise lagoon, French Polynesian culture. More social than Maldives.', budget: '$600–$4,000/night', bestFor: 'The iconic backdrop, French culture, overwater bungalow history' },
    { name: 'Seychelles', slug: 'seychelles', why: 'Less known for overwater but increasingly strong. The Seychelles lagoons combine overwater architecture with granite rock formations for a unique aesthetic.', budget: '$500–$3,000/night', bestFor: 'Privacy, nature, combining overwater with island wildlife' },
    { name: 'Turks & Caicos', slug: 'turks-and-caicos', why: 'Closest to the USA with genuine overwater villas. Grace Bay has some of the clearest water in the Caribbean. Shorter flight for US couples.', budget: '$400–$2,000/night', bestFor: 'US couples, Caribbean vibes, accessibility' },
  ],
  months: [
    { month: 'Jan', emoji: '☀️', verdict: 'Peak', note: 'Best Maldives & Bora Bora weather. Dry season. Book 12+ months ahead.' },
    { month: 'Feb', emoji: '☀️', verdict: 'Peak', note: 'Excellent conditions everywhere. Most expensive month.' },
    { month: 'Mar', emoji: '🌤️', verdict: 'Good', note: 'End of dry season. Start of wind in Maldives. Still excellent Bora Bora.' },
    { month: 'Apr', emoji: '🌦️', verdict: 'Shoulder', note: 'Wet season starts in Maldives. Fewer crowds, lower rates.' },
    { month: 'May', emoji: '🌧️', verdict: 'Avoid', note: 'Maldives wet season. Some overwater resorts reduce service.' },
    { month: 'Jun', emoji: '🌧️', verdict: 'Avoid', note: 'Wet season Maldives and Bora Bora. Best deals but can rain daily.' },
    { month: 'Jul', emoji: '☀️', verdict: 'Peak', note: 'Dry season Bora Bora. Whale sharks in Maldives south atolls.' },
    { month: 'Aug', emoji: '☀️', verdict: 'Peak', note: 'Maldives dry season north atolls. Excellent all-round.' },
    { month: 'Sep', emoji: '🌤️', verdict: 'Good', note: 'Transition season. Fewer tourists, still good weather Maldives.' },
    { month: 'Oct', emoji: '🌤️', verdict: 'Good', note: 'Start of peak Maldives season. Good Bora Bora.' },
    { month: 'Nov', emoji: '☀️', verdict: 'Peak', note: 'Best value peak season in Maldives before Christmas rates kick in.' },
    { month: 'Dec', emoji: '❄️', verdict: 'Peak', note: 'Christmas & New Year most expensive. Book 18 months ahead. Magical atmosphere.' },
  ],
  budgetTiers: [
    { tier: 'Entry', range: '$500–$900/night', desc: 'Genuine overwater experience without private pool. Good lagoon position. May share water access with neighbours. Perfect starter overwater.', hotels: 'InterContinental Le Moana Bora Bora, Ayada Maldives' },
    { tier: 'Premium', range: '$900–$2,500/night', desc: 'Private plunge pool on deck. Guaranteed sunset or sunrise orientation. Glass floor. In-villa dining with full menu. This is the sweet spot for honeymooners.', hotels: 'Four Seasons Bora Bora, Conrad Maldives, Anantara Veli' },
    { tier: 'Ultra', range: '$2,500–$8,000/night', desc: 'Two-storey water villa. Retractable roof. Private chef on request. Butler lives on-site. The room IS the destination. Worth it for once-in-a-lifetime.', hotels: 'Soneva Jani, Four Seasons Landaa Giraavaru' },
  ],
  checklist: [
    { title: 'Before you book', items: ['Confirm lagoon vs ocean-facing', 'Ask about sunset/sunrise orientation (west-facing = sunset)', 'Verify private pool vs shared', 'Check distance from main resort (further = more private, longer boat ride to dinner)', 'Ask if glass floor is in bedroom or bathroom'] },
    { title: 'At the resort', items: ['Request earliest possible check-in (arrive rested)', 'Book in-villa breakfast for at least one morning', 'Reserve sunset snorkelling on first full day', 'Bring reef shoes — many overwater villas have live coral steps', 'Keep lights off at night to see bioluminescence in the water'] },
  ],
  expertTips: [
    'Book a west-facing villa for sunset from your deck. The difference in atmosphere at dusk is significant — confirm orientation before booking, as resorts rarely volunteer this information.',
    'The private plunge pool is not a luxury add-on for honeymooners — it is the essential. A shared beach pool requires leaving your villa; a private pool means your entire honeymoon can happen on your deck.',
    'Bring a waterproof torch and check your villa\'s water at night. Bioluminescent plankton makes the water glow electric blue — it is one of the most otherworldly experiences in travel, and invisible without a dark night.',
    'For Maldives, choose North Male Atoll for most resorts (shorter speedboat), South Ari Atoll for whale sharks (September–October), and Baa Atoll for manta rays (June–November). Your atoll choice matters.',
    'Budget tip: book shoulder season (April–May, September–October) for 30–40% lower rates and identical villa quality. The only thing that changes is the crowd level — which actually improves the experience.',
  ],
  faqs: [
    { q: 'Is the Maldives or Bora Bora better for overwater bungalows?', a: 'Maldives for the water colour, marine life, and resort exclusivity (each on its own island — no other resort in sight). Bora Bora for the mountain backdrop and French Polynesian culture. Maldives is more "otherworldly"; Bora Bora is more "cinematic". Both are exceptional — the choice is usually budget, flight routing, and whether you want the mountain backdrop.' },
    { q: 'Do overwater villas have private pools?', a: 'Only at luxury properties ($900+/night). The private plunge pool is a significant upgrade for honeymooners — it eliminates shared beach access and gives you somewhere to swim at midnight. Budget overwater villas (Le Moana, Ayada) do not have private pools but still have direct lagoon access from steps.' },
    { q: 'Are overwater bungalows safe? What if there are sharks?', a: 'Completely safe. The species you will encounter (reef sharks, nurse sharks) are non-aggressive and pose no danger to swimmers. Reef fish and rays are far more common. The Maldives has some of the safest open-water swimming in the world.' },
    { q: 'How far in advance should you book an overwater villa?', a: 'For peak season (December–March for Maldives, July–October for Bora Bora): 12–18 months. For shoulder season: 6 months is usually sufficient. The best villa categories sell out first — book early and request sunset orientation and private pool.' },
    { q: 'Are overwater bungalows romantic enough on their own?', a: 'Yes. Many honeymoon couples do very little beyond reading, swimming, ordering room service, and watching sunsets. One or two excursions (snorkel tour, sunset sail, dolphin cruise) add texture. The villa itself is the experience.' },
  ],
  related: ['beach', 'adults-only', 'wellness'],
}

export default meta
