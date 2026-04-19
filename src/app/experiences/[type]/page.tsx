import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getHotelsByExperience, getAllExperienceTypes } from '@/lib/hotels'
import HotelCard from '@/components/HotelCard'

interface Props { params: Promise<{ type: string }> }

interface ExperienceMeta {
  label: string
  tagline: string
  hero: string
  intro: string
  stats: { icon: string; value: string; label: string }[]
  perfectFor: string[]
  skipIf: string[]
  reasons: { title: string; desc: string }[]
  destinations: { name: string; slug: string; why: string; budget: string; bestFor: string }[]
  months: { month: string; emoji: string; verdict: string; note: string }[]
  budgetTiers: { tier: string; range: string; desc: string; hotels: string }[]
  checklist: { title: string; items: string[] }[]
  expertTips: string[]
  faqs: { q: string; a: string }[]
  related: string[]
}

const EXPERIENCE_META: Record<string, ExperienceMeta> = {
  'overwater-bungalows': {
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
  },

  'adults-only': {
    label: 'Adults-Only Resorts',
    tagline: 'No families. No compromise. The honeymoon atmosphere you actually want.',
    hero: '/images/hotels/samanvaya-adults-only-bali/hero.webp',
    intro: 'Adults-only resorts are the single most underrated choice for honeymooners. The atmosphere is categorically different from family resorts — quieter pools, earlier mornings, more intimate restaurants, and a guest demographic almost entirely made up of couples celebrating something. The cumulative effect on a honeymoon is not subtle: everything feels more romantic when everyone around you is also focused on romance.',
    stats: [
      { icon: '💑', value: '8', label: 'Scored Properties' },
      { icon: '🏆', value: '+25pts', label: 'Honeymoon Score Boost' },
      { icon: '💰', value: '$300–$3,000', label: 'Per Night Range' },
      { icon: '⭐', value: '91/100', label: 'Avg Honeymoon Score' },
    ],
    perfectFor: [
      'Couples who want a completely couple-focused atmosphere',
      'Those who value a silent poolside in the morning',
      'Couples who want to invest in the highest Honeymoon Score properties',
      'Anyone planning a wedding immediately before — no energy for managing context',
    ],
    skipIf: [
      'You are travelling with family members who are part of the trip',
      'You prefer large resort energy with activity and entertainment',
      'You have a very tight budget (adults-only properties charge a premium)',
    ],
    reasons: [
      { title: 'The atmosphere transforms', desc: 'A pool where the only sounds are conversation and ice clinking in glasses. Dinner without background noise. Sundowners where the energy is entirely romantic. This is not subtle — adults-only changes the entire emotional register of a resort.' },
      { title: 'Service calibrated for romance', desc: 'When 100% of the guest list is couples — many honeymooning — staff adapt. The quality of personalised service, the frequency of honeymoon touches, and the attention to romantic detail at adults-only resorts is consistently higher than at mixed-demographic hotels.' },
      { title: 'Our highest-weighted criterion', desc: 'Adults-only is the single most important variable in our Honeymoon Score (+25 points out of 100). It is the most reliable single predictor of a honeymoon-forward property. Of our top 10 scored hotels globally, 7 are adults-only.' },
      { title: 'The mornings', desc: 'Adults-only resorts do mornings differently. Quiet poolside. Unhurried breakfast at 9am with the newspaper. A yoga class with only four couples. The morning atmosphere at an adults-only resort is one of the most underrated aspects of the experience.' },
      { title: 'The cost of the alternative', desc: 'The difference between an adults-only and a family resort is not just ambience — it is the tangible impact on your memories. You cannot get the week back. The premium is worth it.' },
    ],
    destinations: [
      { name: 'St. Lucia', slug: 'st-lucia', why: 'The Pitons backdrop makes every adults-only resort in St. Lucia feel inherently cinematic. Jade Mountain, Calabash Cove, Stonefield — all are among the most romantic properties in the Caribbean.', budget: '$300–$1,500/night', bestFor: 'Drama, scenery, jungle-meets-beach' },
      { name: 'Maldives', slug: 'maldives', why: 'Most Maldivian resorts are effectively adults-only by nature (private island, high price point deters families). Soneva Jani and Hurawalhi are explicitly adults-only. The combination with overwater villas is the pinnacle.', budget: '$600–$4,000/night', bestFor: 'Overwater + adults-only combination' },
      { name: 'Bali', slug: 'bali', why: 'Samanvaya, The Kayon, and other Bali jungle resorts have adults-only policies. Bali adults-only combines tropical landscape with extraordinary spa culture.', budget: '$200–$800/night', bestFor: 'Value, spa culture, exotic atmosphere at lower cost' },
      { name: 'Turks & Caicos', slug: 'turks-and-caicos', why: 'Rock House is the premier adults-only boutique in the Caribbean — 11 rooms, private cove, extraordinary food. Amanyara is effectively couples-only by demographic.', budget: '$500–$3,000/night', bestFor: 'Boutique luxury, Caribbean beach, exclusivity' },
    ],
    months: [
      { month: 'Jan', emoji: '☀️', verdict: 'Peak', note: 'Caribbean dry season. St. Lucia at its best. Book early.' },
      { month: 'Feb', emoji: '☀️', verdict: 'Peak', note: 'Valentine\'s premium everywhere. Most romantic month. Highest rates.' },
      { month: 'Mar', emoji: '☀️', verdict: 'Peak', note: 'End of dry season. Still excellent Caribbean and Maldives.' },
      { month: 'Apr', emoji: '🌦️', verdict: 'Shoulder', note: 'Start of Caribbean shoulder. Lower rates, some rain possible.' },
      { month: 'May', emoji: '🌧️', verdict: 'Low', note: 'Caribbean wet season begins. Best deals of the year. Often still lovely.' },
      { month: 'Jun', emoji: '🌧️', verdict: 'Low', note: 'Wet season Caribbean. 40–50% rate reductions. Fewer couples around.' },
      { month: 'Jul', emoji: '🌤️', verdict: 'Good', note: 'Maldives dry season. Bali good weather. Good value St. Lucia.' },
      { month: 'Aug', emoji: '🌤️', verdict: 'Good', note: 'European honeymoon peak. Book 6 months ahead for top adults-only.' },
      { month: 'Sep', emoji: '🌤️', verdict: 'Good', note: 'Best value with good weather. Shoulder rates, excellent availability.' },
      { month: 'Oct', emoji: '🌤️', verdict: 'Good', note: 'Caribbean start of dry season. Maldives peak begins.' },
      { month: 'Nov', emoji: '☀️', verdict: 'Peak', note: 'Pre-Christmas peak. Excellent weather everywhere. Book ahead.' },
      { month: 'Dec', emoji: '❄️', verdict: 'Peak', note: 'Christmas and New Year. Most expensive. Magical. Reserve 18 months ahead.' },
    ],
    budgetTiers: [
      { tier: 'Entry', range: '$200–$500/night', desc: 'Genuine adults-only with good pool and beach. Smaller property size (fewer than 50 rooms). Usually includes breakfast. Often Caribbean all-inclusive at this range.', hotels: 'Sandals properties (all-inclusive), Stonefield Villa Resort St. Lucia' },
      { tier: 'Premium', range: '$500–$1,500/night', desc: 'Adults-only with world-class spa, superior room category (suite or villa), high staff-to-guest ratio. The sweet spot for honeymooners who want the full adults-only experience without ultra-luxury pricing.', hotels: 'Jade Mountain, The Kayon, Calabash Cove, Hurawalhi' },
      { tier: 'Ultra', range: '$1,500–$5,000/night', desc: 'Exclusive-use feel even within the resort. Butler-level personalisation. Fewer than 30 rooms. The entire resort knows your name by day two. Amanyara, Soneva Jani, Rock House.', hotels: 'Amanyara, Soneva Jani, Rock House Turks & Caicos' },
    ],
    checklist: [
      { title: 'What to verify before booking', items: ['Confirm the adults-only policy is 18+ (not 16+)', 'Check the total room count — under 50 rooms is ideal for honeymoons', 'Ask about honeymooner recognition (upgrade, champagne, dinner reservation)', 'Verify if all-inclusive covers premium spirits and speciality dining', 'Check if spa is included or extra'] },
      { title: 'Maximising the adults-only atmosphere', items: ['Arrive Sunday or Monday (fewest check-ins, quietest week start)', 'Request a room away from any shared amenity areas', 'Book the pillow menu and in-room aromatherapy', 'Use the spa on the first full day to establish the pace', 'Email the hotel pre-arrival with honeymoon details — this is when upgrades happen'] },
    ],
    expertTips: [
      'Adults-only all-inclusive can be exceptional for honeymooners who are exhausted from wedding planning. Removing the friction of constant bills and decisions is underrated. Look for all-inclusive properties that emphasise dining quality, not just food volume.',
      'The number of rooms matters as much as the adults-only policy. A 200-room adults-only resort will always feel busier than a 20-room boutique. For a true honeymoon atmosphere, target properties under 50 rooms.',
      'Send a personalised pre-arrival email 10 days before check-in. Mention that it is your honeymoon, your room preference (high floor, garden view, quiet side of resort), and any specific requests. This email, not the booking confirmation, is what triggers upgrades at most properties.',
      'The Caribbean all-inclusive adults-only model (Sandals, Excellence, Zoëtry) is unfairly underestimated by sophisticated travellers. At the top tier, they deliver excellent food, genuine spa facilities, and a guest demographic that is 90% honeymooners. The poolside energy is extraordinary.',
      'If budget constrains your choice between an adults-only resort and a higher-end family resort, choose adults-only every time. The atmosphere difference trumps room size or facility quality for a honeymoon.',
    ],
    faqs: [
      { q: 'Are adults-only resorts better for honeymooners than family resorts?', a: 'Categorically yes, in our scoring. The difference in poolside and breakfast atmosphere alone justifies the preference. If you are choosing between two otherwise equal properties, always choose adults-only for a honeymoon. The +25 point scoring weight reflects this conviction.' },
      { q: 'What are the best adults-only destinations?', a: 'Caribbean: St. Lucia (Jade Mountain, Calabash Cove), Jamaica (Couples, Sandals), Turks & Caicos (Rock House, Amanyara). Indian Ocean: Maldives (Soneva Jani, Hurawalhi), Seychelles. Asia: Bali (The Kayon, Samanvaya). St. Lucia offers the most dramatic scenery in an adults-only Caribbean context.' },
      { q: 'Is there a meaningful difference between adults-only and couples-only?', a: 'Yes. Adults-only means 18+ guests — which can include family trips, friend groups, and solo travellers. Couples-only is more restrictive. In practice, the best adults-only resorts skew heavily towards couples (80–90%) by price and atmosphere, even without a formal couples-only policy.' },
      { q: 'Are all-inclusive adults-only resorts worth it for a honeymoon?', a: 'Yes, at the quality tier. Sandals Royal Barbados, Excellence Playa Mujeres, and Zoëtry properties offer excellent food, genuinely good wine programmes, and an atmosphere almost entirely made up of honeymooners and anniversary couples. The all-inclusive model removes decision fatigue — valuable immediately after a wedding.' },
    ],
    related: ['overwater-bungalows', 'wellness', 'beach'],
  },

  'safari': {
    label: 'Safari Honeymoons',
    tagline: 'The most unforgettable shared experience in travel',
    hero: '/images/hotels/singita-grumeti-tanzania/hero.webp',
    intro: 'A safari honeymoon occupies a category of its own. No other honeymoon type creates the same depth of shared experience — watching lions hunt at dawn, the Great Migration crossing the Mara River, the Milky Way over the Serengeti unobstructed by light pollution, the silence of the bush at 11pm. Paired with the extraordinary luxury of top African lodges, the safari honeymoon consistently ranks as the most memorable travel experience couples have ever had.',
    stats: [
      { icon: '🦁', value: '1', label: 'Scored Properties' },
      { icon: '💰', value: '$800–$5,000', label: 'Per Night Range' },
      { icon: '📍', value: '4', label: 'Safari Countries' },
      { icon: '🌍', value: '88/100', label: 'Avg Honeymoon Score' },
    ],
    perfectFor: [
      'Couples who want the most memorable shared experience in travel',
      'Those who value genuine disconnection — no signal is a feature, not a bug',
      'Couples comfortable with early mornings (5:30am game drives)',
      'Anyone wanting to combine adventure with extreme luxury',
      'Couples who would pair a safari with a beach stay (Zanzibar, Seychelles)',
    ],
    skipIf: [
      'You dislike early mornings — game drives leave at 5:30am daily',
      'You are sensitive to insects, dust, or heat',
      'Budget under $600/night — below this, the lodge quality drops significantly',
      'You need Wi-Fi at all times — private concessions have no signal by design',
    ],
    reasons: [
      { title: 'Shared experience unlike anything else', desc: 'Nothing bonds two people like encountering wildlife together. The moment you see your first lion, your first elephant herd, your first Great Migration crossing — these become permanent reference points in your relationship. Couples who have done it report it as transformational, not just memorable.' },
      { title: 'Genuine, enforced disconnection', desc: 'Private concessions have no Wi-Fi in rooms, no phone signal. The disconnection is not a policy — it is the landscape. You have no choice but to be present with each other, sunrise to sunset. This is increasingly rare and genuinely valuable.' },
      { title: 'The contrast is the experience', desc: 'The 5:30am game drive in an open vehicle, wind in your face, surrounded by Africa — then returning to a butler, a cellar of South African wine, an outdoor bathtub overlooking the plains, and a canopied bed under stars. The contrast between wilderness and luxury is intoxicating.' },
      { title: 'The Milky Way overhead', desc: 'Private concessions are 50–100km from the nearest town light. The night sky is a different object here. Sleeping under canvas with the sound of distant elephants and the full arc of the Milky Way overhead is an experience unavailable anywhere else at any price.' },
      { title: 'The logistics are taken care of', desc: 'Top-tier safari companies handle every detail — charter flights, bush dinners, sundowners in impossible locations, surprise picnics in the bush. The planning infrastructure of a great safari lodge is the hidden luxury. You make zero decisions.' },
    ],
    destinations: [
      { name: 'Serengeti (Tanzania)', slug: 'serengeti', why: 'The Great Migration, private concessions with near-zero other-vehicle density, most romantic top-tier lodges (Singita, andBeyond, Four Seasons). The standard for safari excellence.', budget: '$1,000–$5,000/night', bestFor: 'The Migration, ultimate luxury, romance' },
      { name: 'Masai Mara (Kenya)', slug: 'kenya', why: 'Same ecosystem as Serengeti, slightly more accessible from Europe. Migration river crossings July–October. Camp-style luxury with views directly onto the Mara plains.', budget: '$500–$3,000/night', bestFor: 'Shorter flight, river crossings, culture' },
      { name: 'Sabi Sands (South Africa)', slug: 'south-africa', why: 'Malaria-free options available. Big 5 sightings almost guaranteed. 2.5-hour flight from Johannesburg (international hub). Excellent private game reserves.', budget: '$400–$2,000/night', bestFor: 'No malaria option, European accessibility, Big 5 certainty' },
      { name: 'Okavango Delta (Botswana)', slug: 'botswana', why: 'Water-based safari — mokoro canoes through lily-pad channels. Exceptionally low tourist density. Among the most exclusive safari experiences in the world.', budget: '$1,200–$6,000/night', bestFor: 'Ultra-exclusive, water-based safari, lowest crowds' },
    ],
    months: [
      { month: 'Jan', emoji: '🌿', verdict: 'Good', note: 'Calving season Serengeti — predator action peaks. Short rains over. Good value.' },
      { month: 'Feb', emoji: '🌿', verdict: 'Good', note: 'Peak calving. Ngorongoro excellent. Fewer tourists than peak season.' },
      { month: 'Mar', emoji: '🌧️', verdict: 'Avoid', note: 'Long rains begin. Roads difficult. Some lodges close. Not recommended.' },
      { month: 'Apr', emoji: '🌧️', verdict: 'Avoid', note: 'Long rains peak. Access difficult in Serengeti. Best avoided.' },
      { month: 'May', emoji: '🌦️', verdict: 'Shoulder', note: 'Rains ending. Lush green landscape. Very few tourists. Significant discounts.' },
      { month: 'Jun', emoji: '☀️', verdict: 'Peak', note: 'Dry season begins. Wildebeest moving north. Excellent predator activity.' },
      { month: 'Jul', emoji: '🌊', verdict: 'Peak', note: 'Great Migration river crossings begin (Mara River). The bucket-list moment. Book 18+ months ahead.' },
      { month: 'Aug', emoji: '🌊', verdict: 'Peak', note: 'Peak migration. Highest prices. Most dramatic crossings. Extraordinary.' },
      { month: 'Sep', emoji: '☀️', verdict: 'Peak', note: 'Migration crossing continues. Slightly fewer tourists than August. Still book far ahead.' },
      { month: 'Oct', emoji: '🌤️', verdict: 'Good', note: 'Migration returning south. Excellent game viewing. Short rains may start late month.' },
      { month: 'Nov', emoji: '🌦️', verdict: 'Shoulder', note: 'Short rains. Green and beautiful. Newborn animals. Good value, fewer tourists.' },
      { month: 'Dec', emoji: '🌿', verdict: 'Good', note: 'Short rains end. Christmas bookings very expensive top lodges. Beautiful light.' },
    ],
    budgetTiers: [
      { tier: 'Entry', range: '$400–$800 pppn', desc: 'Mid-range tented camps with good game viewing. National park (not private concession), so other vehicles at sightings. Still extraordinary wildlife. No night drives.', hotels: 'Various &Beyond and Sanctuary camps' },
      { tier: 'Premium', range: '$800–$2,000 pppn', desc: 'Private concession access. Night drives and off-road. High staff-to-guest ratio. Excellent food and wine. The sweet spot for a honeymoon safari — full experience without ultra-tier pricing.', hotels: 'Singita Grumeti, andBeyond Ngorongoro Crater' },
      { tier: 'Ultra', range: '$2,000–$6,000 pppn', desc: 'Exclusive-use possible. Singita lodges. Aman in the Serengeti. The most extraordinary lodges in the world, in the most extraordinary landscapes. All-inclusive including helicopter transfers.', hotels: 'Singita Sasakwa, Singita Mara, Aman Serengeti' },
    ],
    checklist: [
      { title: 'Essential planning', items: ['Book flights first — charter flights in East Africa are complex and expensive', 'Confirm malaria prophylaxis with your doctor 6 weeks before travel', 'Pack neutral-coloured clothing (khaki, olive, beige) — bright colours disturb wildlife', 'Bring a dust bag for your camera equipment', 'Travel insurance with emergency evacuation coverage is non-negotiable in the Serengeti'] },
      { title: 'At the lodge', items: ['Ask for your guide by name on return drives (chemistry matters enormously)', 'Request a bush dinner or sundowners "in the bush" — great lodges organise this routinely', 'Keep room flaps/canvas closed during the day to prevent vervet monkey raids', 'Wake up for the night sounds around 1am — you will hear hyena, lion, and elephant', 'Tip your guide: USD $15–30/day is standard at top lodges'] },
    ],
    expertTips: [
      'Combine 4 nights Serengeti + 4 nights Zanzibar for the classic Tanzania honeymoon. Safari first (energy-intensive), beach second (recovery). The contrast — dust and acacia trees to white sand and turquoise water — is perfect. Book a charter through Kilimanjaro to Zanzibar.',
      'Private concessions cost 30–50% more than national park camps but deliver a fundamentally different experience: no other vehicles at sightings, night drives, walking safaris, off-road tracking. For a honeymoon safari, this difference justifies the premium completely.',
      'The migration river crossings (July–October) are the peak experience but not the only remarkable thing. February calving season offers predator density that rivals the migration — at lower prices and with fewer tourists. January–February is underrated for couples on a safari budget.',
      'Packing for safari: bring one light merino wool layer for morning drives (5:30am can be cold even in July). High SPF SPF. Dust-sealed camera bag. Avoid perfume and strong scents near wildlife. Leave valuables at the lodge safe.',
      'Tell your lodge exactly what you want the trip to mean. The best lodges (Singita, andBeyond) can organise a candlelit bush dinner under the stars, a private sundowner on a kopje, a dawn champagne breakfast with the plains to yourselves. None of this is mentioned in brochures — you must ask.',
    ],
    faqs: [
      { q: 'What is the best time for a Serengeti honeymoon safari?', a: 'July–October for the Great Migration river crossings — the most dramatic wildlife event on earth. January–February for calving season and peak predator activity. The Serengeti has excellent game year-round — no truly bad month exists, only wet-season access issues (March–April).' },
      { q: 'Is a safari honeymoon romantic if you are not interested in wildlife?', a: 'Universally yes, based on every couple we have interviewed. The romance of a top safari lodge — the candlelit dinners under stars, the sundowner in the bush with a cold gin, the Milky Way visible from your outdoor bath — transcends wildlife interest. The game viewing is a bonus, not the prerequisite.' },
      { q: 'Should you book a safari honeymoon through a specialist or direct?', a: 'Through a specialist for East Africa, always. The charter flight logistics, permit system, and lodge combination planning are complex. A good specialist adds significant value at no extra cost (they receive commission from lodges). Use specialists like Ker & Downey, Micato, or Expert Africa.' },
      { q: 'What vaccinations do you need for a Serengeti safari?', a: 'Yellow fever (required entry for Tanzania), typhoid (recommended), hepatitis A (recommended), and malaria prophylaxis (essential). Consult a travel medicine clinic 8 weeks before departure. Most antimalarials need to start 2 weeks before travel.' },
    ],
    related: ['luxury', 'beach'],
  },

  'beach': {
    label: 'Beach Honeymoons',
    tagline: 'The classic honeymoon — elevated',
    hero: '/images/hotels/jade-mountain-st-lucia/hero.webp',
    intro: 'Beach honeymoons remain the dominant honeymoon category globally for good reason: the combination of warm water, white sand, tropical sun, and exceptional resorts delivers the sensory experience most couples imagine when they picture their honeymoon. The range is vast — from the $150/night all-inclusive in the Dominican Republic to the $5,000/night private island in the Maldives — and choosing well requires understanding what you are actually buying in each case.',
    stats: [
      { icon: '🏖️', value: '65', label: 'Scored Properties' },
      { icon: '💰', value: '$200–$5,000', label: 'Per Night Range' },
      { icon: '📍', value: '10+', label: 'Top Destinations' },
      { icon: '☀️', value: '12', label: 'Months of Sun (Globally)' },
    ],
    perfectFor: [
      'Couples who want warm weather, clear water, and guaranteed relaxation',
      'First honeymoon — the beach format is familiar and reliably delivers',
      'Those who want to spend meaningful time in the water (snorkel, sail, dive)',
      'Couples who want multiple activity options without planning complexity',
      'Anyone who wants a strong photo backdrop',
    ],
    skipIf: [
      'You dislike heat and sun exposure — a beach in July is intense',
      'You want guaranteed wildlife or cultural experiences',
      'Peak season budget is under $300/night — there are better honeymoon options at this price in mountain or city destinations',
    ],
    reasons: [
      { title: 'The setting does the work', desc: 'A great beach destination removes the need for elaborate planning. The environment itself — turquoise water, white sand, warm air, tropical light — creates the honeymoon atmosphere. You need good accommodation and basic logistics. The rest is provided.' },
      { title: 'Water activities', desc: 'Snorkelling, diving, sailing, paddleboarding, kayaking, sunset catamaran cruises — the activity layer at a beach destination is rich and couples-oriented. The Maldives has the world\'s best house reef snorkelling. The Caribbean has the world\'s best open-water sailing. The ocean becomes your entertainment.' },
      { title: 'Global availability', desc: 'Unlike overwater villas (limited to 20 destinations) or safari (Africa-focused), excellent beach honeymoons are available on every continent. This means you can find your ideal combination of flight time, budget, and culture.' },
      { title: 'The sunset as a daily ritual', desc: 'Every evening ends with a sunset over water. At Grace Bay, Matira, or any Maldivian overwater deck, the daily sunset becomes a ritual — cocktails in hand, watching the sky change. This is a reliable, replicable, extraordinary experience.' },
      { title: 'Range of accommodation styles', desc: 'From barefoot-luxury overwater villas to clifftop suites (Santorini) to beachfront colonial estates (St. Lucia), the beach category offers the widest architectural diversity in hotel design. You can pick the aesthetic that matches your honeymoon vision.' },
    ],
    destinations: [
      { name: 'Maldives', slug: 'maldives', why: 'World\'s clearest water. 1,200 islands, almost every resort is its own island. Marine life density unmatched anywhere. The best beach destination for pure luxury.', budget: '$400–$5,000/night', bestFor: 'Ultimate luxury, marine life, overwater villas' },
      { name: 'Turks & Caicos', slug: 'turks-and-caicos', why: 'Grace Bay voted world\'s best beach multiple times. Calm, shallow turquoise water. Closest high-quality Caribbean beach destination to USA.', budget: '$300–$3,000/night', bestFor: 'North American couples, clear water, accessibility' },
      { name: 'Seychelles', slug: 'seychelles', why: 'Unique granite boulders backdrop. Anse Lazio (Praslin) and Anse Source d\'Argent (La Digue) are among the world\'s most photographed beaches. Strong nature.', budget: '$300–$2,500/night', bestFor: 'Dramatic scenery, nature, unique aesthetics' },
      { name: 'St. Lucia', slug: 'st-lucia', why: 'The Pitons UNESCO backdrop behind black sand beaches. Anse Mamin private beach. Strong adults-only culture. Most cinematic Caribbean destination.', budget: '$250–$1,500/night', bestFor: 'Drama, scenery, adults-only options' },
      { name: 'Bora Bora', slug: 'bora-bora', why: 'Matira Beach is one of the world\'s most beautiful. Combined with overwater bungalows, it is the definitive French Polynesia beach experience.', budget: '$500–$4,000/night', bestFor: 'Overwater + beach combination, French charm' },
    ],
    months: [
      { month: 'Jan', emoji: '☀️', verdict: 'Peak', note: 'Maldives and Caribbean at their best. Dry season globally. Book far ahead.' },
      { month: 'Feb', emoji: '☀️', verdict: 'Peak', note: 'Best conditions globally. Most expensive month everywhere.' },
      { month: 'Mar', emoji: '☀️', verdict: 'Peak', note: 'Last of dry season. Strong conditions Caribbean, Maldives, Seychelles.' },
      { month: 'Apr', emoji: '🌦️', verdict: 'Shoulder', note: 'Caribbean shoulder season begins. Strong Maldives north atolls.' },
      { month: 'May', emoji: '🌧️', verdict: 'Low', note: 'Caribbean wet season. 40% rate reductions. Often still beautiful.' },
      { month: 'Jun', emoji: '🌧️', verdict: 'Low', note: 'Caribbean and Maldives wet season. Lowest rates. Still worth it at the right resort.' },
      { month: 'Jul', emoji: '☀️', verdict: 'Good', note: 'Bora Bora dry season peak. Turks & Caicos excellent. Maldives starts drying.' },
      { month: 'Aug', emoji: '☀️', verdict: 'Good', note: 'European summer. Santorini peaks. Maldives excellent. Book ahead.' },
      { month: 'Sep', emoji: '🌤️', verdict: 'Good', note: 'Best value month with still-good conditions. Fewer crowds.' },
      { month: 'Oct', emoji: '🌤️', verdict: 'Good', note: 'Caribbean dry season starts. Maldives peak begins. Great timing.' },
      { month: 'Nov', emoji: '☀️', verdict: 'Good', note: 'Caribbean and Maldives both excellent. Pre-Christmas pricing still moderate.' },
      { month: 'Dec', emoji: '❄️', verdict: 'Peak', note: 'Christmas–New Year everywhere peaks. Spectacular atmosphere, maximum prices.' },
    ],
    budgetTiers: [
      { tier: 'Entry', range: '$200–$500/night', desc: 'Quality beach access with a proper resort infrastructure. Caribbean all-inclusive at this range delivers pool, beach, food, drinks. Limited room for upgrades but the beach itself is free.', hotels: 'Serenity at Coconut Bay (St. Lucia), Blue Haven (Turks & Caicos)' },
      { tier: 'Premium', range: '$500–$1,500/night', desc: 'Private beach or exclusive beach section. Superior suite with ocean view. Top-tier dining. This is where the real honeymoon beach experience lives — the room view, the service quality, and the beach position all improve dramatically.', hotels: 'Cap Maison (St. Lucia), Seven Stars (Turks & Caicos), Constance Lemuria (Seychelles)' },
      { tier: 'Ultra', range: '$1,500–$5,000/night', desc: 'Private beach villa. In-villa butler. Your own stretch of sand. At this level, the beach is curated — maintained, raked, with your own set of loungers permanently reserved. The Four Seasons Bora Bora beach experience is a different category.', hotels: 'Amanyara, Four Seasons Bora Bora, Six Senses Zil Pasyon (Seychelles)' },
    ],
    checklist: [
      { title: 'Choosing the right beach destination', items: ['Water clarity: Maldives > Turks & Caicos > Seychelles > Caribbean generally', 'Flight time: Caribbean easiest from USA/Europe; Maldives requires a long-haul', 'Cultural experience: Seychelles and St. Lucia strongest; Maldives most isolated', 'Weather window: check the specific month against each destination\'s season', 'Snorkelling quality: Maldives house reef unmatched; Bora Bora lagoon excellent'] },
      { title: 'Making the most of it', items: ['Book a sunset boat trip or sailing charter for the first full evening', 'Request a "honeymoon beach setup" — most resorts offer this free or for nominal fee', 'Snorkel on the first morning to understand what your resort offers underwater', 'Avoid beach days 11am–3pm in summer — heat is extreme; use this time for spa or dining', 'Ask about private beach dinner — available at almost every luxury beach resort'] },
    ],
    expertTips: [
      'The clearest water in the world is in the Maldives (30m visibility year-round) and Turks & Caicos (Grace Bay, 25m+). If the underwater experience matters to you, these should be your defaults. The Caribbean generally runs 10–15m visibility — beautiful but categorically different.',
      'Beach orientation matters more than most couples realise. A west-facing beach delivers sunset views. An east-facing beach is better for morning swimming (calmer before the afternoon wind picks up). Ask your resort which way they face before booking.',
      'Private beach vs shared beach is the biggest quality variable at the premium tier. A hotel with "beach access" and a hotel with a "private beach" are not the same. At resorts with private beaches, you will never share with day visitors or cruise-ship tourists.',
      'If you want the beach and overwater in one trip, choose Bora Bora (overwater villa + Matira Beach) or the Maldives (overwater villa + white sand island beach). Both offer the combination seamlessly within one resort.',
      'The $1,000/night price jump is disproportionately valuable on beach properties. The difference between a $500 and $1,500 beach resort is usually: private beach access, a sea-view suite, in-villa dining quality, and the service level of the staff. This is the most impactful price jump in beach honeymoon planning.',
    ],
    faqs: [
      { q: 'What is the best beach destination for a honeymoon?', a: 'For pure water quality and luxury: Maldives. For accessibility from USA with excellent beaches: Turks & Caicos. For dramatic scenery and landscape: Seychelles or St. Lucia. For overwater + beach combination: Bora Bora. The best depends on flight time, budget, and what you want the trip to feel like.' },
      { q: 'When is the best time to go on a beach honeymoon?', a: 'December–March for Caribbean and Maldives (dry season, best conditions). July–October for Bora Bora. Seychelles is good April–May and October–November. The shoulder months immediately before and after peak season offer the best combination of price and weather.' },
      { q: 'Is a beach honeymoon too generic?', a: 'Only if you choose a generic resort. A beach honeymoon at the Four Seasons Bora Bora or Six Senses Zil Pasyon Seychelles is anything but generic. The beach destination is the category; the resort is the experience. Choose correctly and the beach format delivers everything a honeymoon should be.' },
      { q: 'How many nights should a beach honeymoon be?', a: '7 nights is the minimum to feel the full benefit of long-haul travel. Under 7 nights and you are recovering from jet lag for the first two days and repacking for the last. 10–14 nights is ideal for Maldives or Seychelles. Turks & Caicos and St. Lucia work well at 7 nights given the shorter flights.' },
    ],
    related: ['overwater-bungalows', 'adults-only', 'wellness'],
  },

  'wellness': {
    label: 'Wellness & Spa Honeymoons',
    tagline: 'The honeymoon that changes how you feel, not just where you go',
    hero: '/images/hotels/six-senses-zil-pasyon-seychelles/hero.webp',
    intro: 'Wellness honeymoons are the fastest-growing category in luxury travel — couples increasingly want to arrive home from their honeymoon feeling genuinely better than when they left, not just rested. The best wellness-focused properties offer not just world-class spas, but a full sensory architecture: extraordinary cuisine, sleep programmes, movement and yoga, and spa treatments drawn from traditional healing systems that have been refined over centuries.',
    stats: [
      { icon: '🧘', value: '58', label: 'Spa-Equipped Properties' },
      { icon: '💆', value: '$200–$4,000', label: 'Per Night Range' },
      { icon: '🌿', value: '4+', label: 'Hours Spa/Day Average' },
      { icon: '✨', value: '92/100', label: 'Avg Honeymoon Score' },
    ],
    perfectFor: [
      'Couples leaving an intensely stressful wedding planning period',
      'Those who want to arrive home genuinely transformed, not just rested',
      'Couples interested in traditional healing systems (Ayurveda, Balinese, Thalasso)',
      'Anyone who prioritises the spa over the pool',
      'Couples comfortable spending significant time apart in separate treatment rooms',
    ],
    skipIf: [
      'You dislike being touched or are uncomfortable with body treatments',
      'You want high-energy nightlife or entertainment',
      'You have specific dietary restrictions that make therapeutic menus difficult',
    ],
    reasons: [
      { title: 'The de-compression after wedding planning', desc: 'The final weeks before a wedding are among the most stressful in a couple\'s life. A wellness honeymoon is specifically designed to reverse this — not just relax you, but actively restore your nervous system. The best programmes do this deliberately and measurably.' },
      { title: 'Traditional healing systems', desc: 'Balinese healing (Bali), Ayurveda (Sri Lanka, India, Maldives), thalassotherapy (French Polynesia), Traditional Chinese Medicine (Asia). These are not hotel spa massages — they are sophisticated medical traditions adapted for resort delivery. The treatments last 90–120 minutes and their effects are felt for days.' },
      { title: 'Food as part of the experience', desc: 'The best wellness resorts treat food as medicine: Six Senses has nutritionists on-site, Anantara Kihavah serves spa cuisine in the underwater restaurant, The Kayon Jungle Resort sources locally and offers fasting programmes. The food experience elevates everything else.' },
      { title: 'Sleep quality', desc: 'Well-designed wellness properties are silent. Insulation, natural materials, no through-traffic, and sleep-focused programming (magnesium baths, guided meditation, blue-light-free rooms) mean guests consistently report their best sleep in years. After a wedding, this matters.' },
      { title: 'You arrive home different', desc: 'The test of a wellness honeymoon is not how you feel on the final morning — it is how you feel a week after returning. The best programmes create changes that outlast the trip: better sleep rhythms, reduced baseline anxiety, improved movement habits.' },
    ],
    destinations: [
      { name: 'Bali', slug: 'bali', why: 'World capital of wellness travel. Ubud jungle resorts, Balinese healing tradition, extraordinary food culture. The Kayon and Hanging Gardens are benchmark wellness properties.', budget: '$200–$800/night', bestFor: 'Ayurvedic/Balinese treatments, jungle atmosphere, value' },
      { name: 'Maldives', slug: 'maldives', why: 'Overwater spa treatment rooms where you hear only water. Anantara Kihavah\'s underwater spa. Six Senses Laamu. The combination of aquatic environment and world-class treatment is unique.', budget: '$600–$4,000/night', bestFor: 'Marine wellness, overwater treatment rooms, total isolation' },
      { name: 'Seychelles', slug: 'seychelles', why: 'Six Senses Zil Pasyon Seychelles is the benchmark for biophilic wellness design — the architecture, the food, the treatment philosophy are one integrated experience.', budget: '$400–$2,500/night', bestFor: 'Six Senses signature, island nature, barefoot luxury' },
      { name: 'Santorini', slug: 'santorini', why: 'The clifftop pool-and-view culture of Santorini is inherently relaxing. Cave spa treatments, volcanic mineral baths, and the meditative quality of watching the Aegean from a private terrace.', budget: '$300–$1,500/night', bestFor: 'European accessibility, views, volcanic spa minerals' },
    ],
    months: [
      { month: 'Jan', emoji: '🧘', verdict: 'Peak', note: 'Post-holiday detox season. Most wellness programmes fully booked. Book early.' },
      { month: 'Feb', emoji: '☀️', verdict: 'Good', note: 'Good weather most destinations. Valentine\'s couples spa packages everywhere.' },
      { month: 'Mar', emoji: '🌸', verdict: 'Good', note: 'Pre-Easter. Bali perfect. Maldives excellent. Good shoulder value.' },
      { month: 'Apr', emoji: '🌸', verdict: 'Good', note: 'Bali peak dry season. European shoulder. Seychelles shoulder rate.' },
      { month: 'May', emoji: '🌿', verdict: 'Shoulder', note: 'Quieter globally. Wellness retreats less crowded. Often good deals.' },
      { month: 'Jun', emoji: '🌿', verdict: 'Good', note: 'Bali dry season. Santorini season opens. Good weather Europe and Asia.' },
      { month: 'Jul', emoji: '☀️', verdict: 'Peak', note: 'Bali high season. Santorini busiest. Book spa programmes in advance.' },
      { month: 'Aug', emoji: '☀️', verdict: 'Peak', note: 'Peak European summer. Best weather Santorini, Seychelles. High demand.' },
      { month: 'Sep', emoji: '🌤️', verdict: 'Good', note: 'Post-peak. Bali still excellent. Santorini quieter. Best value premium month.' },
      { month: 'Oct', emoji: '🍂', verdict: 'Good', note: 'Excellent conditions most destinations. Shoulder pricing. Strong spa focus.' },
      { month: 'Nov', emoji: '🌿', verdict: 'Good', note: 'Quiet globally. Best for intensive wellness programmes — few distractions.' },
      { month: 'Dec', emoji: '❄️', verdict: 'Peak', note: 'Year-end reset culture. Most wellness destinations fully booked. Premium pricing.' },
    ],
    budgetTiers: [
      { tier: 'Entry', range: '$200–$500/night', desc: 'Good spa facilities and quality local treatments (Balinese massage, scrub, wrap). This tier is excellent value in Bali and Thailand. You get authentic treatment quality at a fraction of Maldives costs.', hotels: 'Hanging Gardens Bali, various Ubud wellness properties' },
      { tier: 'Premium', range: '$500–$1,500/night', desc: 'Full wellness programme access, nutritionist or wellness consultant, daily yoga/meditation, high-quality treatment rooms with unique views (overwater, cliff, jungle canopy). The sweet spot for wellness honeymooners.', hotels: 'The Kayon Jungle Resort, Anantara Kihavah, Constance Ephelia Seychelles' },
      { tier: 'Ultra', range: '$1,500–$4,000/night', desc: 'Bespoke wellness journey designed before arrival. Biometric testing. Private wellness guide. Cuisine designed to your health profile. Six Senses DNA testing programmes. This changes you.', hotels: 'Six Senses Zil Pasyon, Anantara Maia Seychelles, InterContinental Thalasso Bora Bora' },
    ],
    checklist: [
      { title: 'Before you book', items: ['Confirm the spa has treatment rooms with views (overwater, jungle, sea)', 'Ask about a couples spa package — most resorts offer discounts over individual bookings', 'Check if a nutritionist or wellness consultant is available', 'Inquire about pre-arrival wellness intake forms — top resorts personalise your programme', 'Verify pool temperature — some wellness pools are therapeutic (cold/contrast), not just for sunbathing'] },
      { title: 'Maximising the experience', items: ['Book your first spa session on day 1 (arrival day or next morning)', 'Ask for a "wellness journey" consultation at check-in', 'Eat the spa menu at least once — the quality is usually excellent', 'Do yoga every morning even if you\'re not a practitioner — the setting transforms it', 'Leave your phone off for the first 48 hours — your nervous system will do the rest'] },
    ],
    expertTips: [
      'The best wellness properties are not the ones with the largest spa menus — they are the ones where the wellness philosophy is integrated into the whole resort. Six Senses is the benchmark: the food, the sleep programme, the architecture, and the treatment all form one coherent experience.',
      'Book your spa treatments in advance, not at the resort. The best therapists and time slots at top wellness properties (morning mist hours, sunset slots) fill up 30–60 days before arrival. Email the spa team directly to reserve.',
      'A couples massage is the single most universally appreciated wellness activity for honeymooners. Side-by-side treatment tables in a room with a view — a 90-minute couples massage in an overwater treatment room in the Maldives costs $400–$600 but delivers an experience that is referenced for years.',
      'Bali offers the world\'s best value wellness honeymoon by a significant margin. A $300/night property in Ubud delivers treatment quality, food, and atmosphere that rivals $1,500/night Maldivian spa resorts. If budget matters, Bali wellness is the answer.',
      'Thalassotherapy (seawater therapy) in French Polynesia — specifically the InterContinental Bora Bora Thalasso Spa — uses deep cold seawater pumped from 915 metres to power treatments. This is a unique therapeutic system unavailable anywhere else. The effects on jet lag and muscle recovery are genuine.',
    ],
    faqs: [
      { q: 'What is the best wellness honeymoon destination?', a: 'Bali for value and authenticity of Balinese healing tradition. Maldives for the extraordinary spa environment (overwater treatment rooms, marine elements). Seychelles (Six Senses) for the most integrated wellness philosophy. Santorini for European accessibility with volcanic mineral spa culture. The best depends on budget and treatment preference.' },
      { q: 'Do we need to be "wellness people" to enjoy a spa honeymoon?', a: 'No. Most couples who choose wellness properties primarily enjoy them for the environment: the silence, the beautiful pools, the quality of food, and the atmosphere of genuine calm. The treatments are an optional layer that most couples discover they love regardless of prior interest.' },
      { q: 'How much spa time is typical on a wellness honeymoon?', a: 'At dedicated wellness resorts, couples typically have 2–4 hours of spa time daily — either in treatments or using the spa facilities (pools, steam, relaxation rooms). This naturally balances with beach/pool time, meals, and activities. You will not feel pressured into treatments at a good property.' },
      { q: 'Is Ayurveda appropriate for a honeymoon?', a: 'Genuine Ayurveda (as practised in Kerala, India or Sri Lanka) is a 21-day programme that involves restrictive diet and therapeutic purges — not appropriate for a honeymoon. Resort Ayurveda (as offered in Bali and the Maldives) is a curated, adapted version that selects the most relevant and pleasant elements. This is excellent for honeymoons.' },
    ],
    related: ['beach', 'adults-only', 'overwater-bungalows'],
  },

  'luxury': {
    label: 'Ultra-Luxury Honeymoons',
    tagline: 'The finest hotel experiences in the world, scored for romance',
    hero: '/images/hotels/four-seasons-maldives-landaa-giraavaru/hero.webp',
    intro: 'Ultra-luxury honeymoon hotels are not defined by price alone — they are defined by the calibre of attention, the singularity of the setting, and the degree to which every detail is configured for intimacy. At properties scoring 90+ on the Honeymoon Score, two things are always true: you stop wanting to leave, and you stop thinking about anything except being in that place with that person.',
    stats: [
      { icon: '⭐', value: '66', label: 'Luxury Properties' },
      { icon: '💰', value: '$500–$8,000', label: 'Per Night Range' },
      { icon: '🏆', value: '96/100', label: 'Top Score (Four Seasons BB)' },
      { icon: '👥', value: '1:1', label: 'Staff-to-Guest Ratio (Top Tier)' },
    ],
    perfectFor: [
      'Couples for whom the honeymoon is a once-in-a-lifetime investment',
      'Those who value extraordinary service over activities',
      'Couples who want to be recognised, remembered, and surprised',
      'Anyone who has stayed in nice hotels before and wants to understand what the next level is',
    ],
    skipIf: [
      'You are uncomfortable with attentive service (some find it intrusive)',
      'You prefer independent travel over curated resort experiences',
      'Budget is the primary constraint — there is no meaningful ultra-luxury under $500/night',
    ],
    reasons: [
      { title: 'Service at this level is transformative', desc: 'A butler who knows your names, your preferences, and has arranged what you were about to ask for. This is not a cliché at properties scoring 90+. It genuinely changes the experience — from reacting to needs to anticipating them.' },
      { title: 'Privacy is the ultimate luxury', desc: 'Ultra-luxury means private villas rather than rooms, private pools rather than shared, private beaches rather than public. At Amanyara or Singita, privacy is the primary amenity. You can spend four days without seeing another guest if you choose.' },
      { title: 'Once in a lifetime justifies the spend', desc: 'Most couples honeymooning at an ultra-luxury property will not return at that price point. The clarity that this is unrepeatable intensifies every moment. The ROI on the best day of your life is theoretically infinite.' },
      { title: 'The architecture', desc: 'At the very top tier, the physical design of the property is extraordinary. Jade Mountain\'s open sanctuaries. Soneva Jani\'s retractable roofs. Singita Sasakwa\'s colonial lodge overlooking the Serengeti. These are among the most beautiful buildings humans have ever made.' },
      { title: 'Food at this level is an experience', desc: 'Ultra-luxury hotel restaurants are frequently better than the local Michelin starred competition. Aman properties retain their own chefs internationally. The Four Seasons culinary standard is consistently excellent. The food at a 90+ scored property is never an afterthought.' },
    ],
    destinations: [
      { name: 'Maldives', slug: 'maldives', why: 'Most ultra-luxury properties per square kilometre in the world. Soneva Jani (97/100), Four Seasons Landaa Giraavaru (91/100). The Maldivian product is the global reference point for overwater luxury.', budget: '$800–$8,000/night', bestFor: 'Overwater ultra-luxury, marine experience, privacy' },
      { name: 'Bora Bora', slug: 'bora-bora', why: 'Four Seasons Resort Bora Bora (96/100) is the benchmark Pacific luxury property. Conrad Nui for the best lagoon position. The landscape is irreplaceable.', budget: '$600–$4,000/night', bestFor: 'View, heritage, French Polynesian culture' },
      { name: 'Seychelles', slug: 'seychelles', why: 'Six Senses Zil Pasyon and Amanyara represent different expressions of ultra-luxury. Less known than Maldives but with stronger nature narrative.', budget: '$500–$3,000/night', bestFor: 'Barefoot luxury, nature, Six Senses wellness' },
      { name: 'Serengeti', slug: 'serengeti', why: 'Singita lodges are the most expensive hotels in Africa and among the most romantic in the world. The safari + luxury combination is unique to this destination.', budget: '$1,500–$5,000/night', bestFor: 'Safari ultra-luxury, once-in-a-lifetime wilderness' },
    ],
    months: [
      { month: 'Jan', emoji: '☀️', verdict: 'Peak', note: 'Maldives and Caribbean dry season peak. Highest rates. Book 18 months ahead.' },
      { month: 'Feb', emoji: '☀️', verdict: 'Peak', note: 'Most popular honeymoon month globally. Maximum rates everywhere.' },
      { month: 'Mar', emoji: '☀️', verdict: 'Peak', note: 'Final peak month. Transitioning to shoulder season in some destinations.' },
      { month: 'Apr', emoji: '🌤️', verdict: 'Shoulder', note: 'First shoulder month. 20–30% rate reductions. Excellent conditions in many destinations.' },
      { month: 'May', emoji: '🌧️', verdict: 'Low', note: 'Maldives wet season. Significant deals at top properties. Worth considering.' },
      { month: 'Jun', emoji: '🌦️', verdict: 'Shoulder', note: 'Some destinations low season. Serengeti dry season begins.' },
      { month: 'Jul', emoji: '☀️', verdict: 'Peak', note: 'Bora Bora peak. Serengeti migration begins. Bali high season.' },
      { month: 'Aug', emoji: '☀️', verdict: 'Peak', note: 'High season most properties. Great Migration peak. Maldives north atolls excellent.' },
      { month: 'Sep', emoji: '🌤️', verdict: 'Good', note: 'Best value at ultra-luxury properties. Slightly fewer guests. Same quality.' },
      { month: 'Oct', emoji: '🌤️', verdict: 'Good', note: 'Caribbean and Maldives season beginning. Good availability at top properties.' },
      { month: 'Nov', emoji: '☀️', verdict: 'Peak', note: 'Pre-Christmas peak beginning. Excellent conditions. More affordable than December.' },
      { month: 'Dec', emoji: '❄️', verdict: 'Peak', note: 'Most expensive period globally. Magical atmosphere. Book 18–24 months ahead.' },
    ],
    budgetTiers: [
      { tier: 'Premium Luxury', range: '$500–$1,200/night', desc: 'Where luxury begins for honeymooners. Suite-level rooms, butler available (shared), excellent spa, five-star dining. Exceptional value per night for the quality delivered. Most couples report this as the most they have ever spent on accommodation — and worth it.', hotels: 'Conrad Bora Bora, Anantara Kihavah, Cap Maison St. Lucia' },
      { tier: 'Ultra-Luxury', range: '$1,200–$3,000/night', desc: 'Dedicated villa with private pool. Personal butler. In-villa dining indistinguishable from the restaurant. The resort knows your name, preferences, and what you ordered on day one before you reach the bar on day three.', hotels: 'Four Seasons Bora Bora, Six Senses Zil Pasyon, Singita Grumeti' },
      { tier: 'Absolute', range: '$3,000–$8,000/night', desc: 'The finest hotels and resorts in the world. Numbers are secondary — this is about being in a singular, extraordinary place with the person you love. Soneva Jani, Singita Sasakwa, Aman Serengeti. The cost is not justified by the amenities list. It is justified by the memory.', hotels: 'Soneva Jani, Singita Sasakwa, Amanyara (exclusive use)' },
    ],
    checklist: [
      { title: 'Getting the most from ultra-luxury', items: ['Email the property 2 weeks before arrival with specific preferences and honeymoon context', 'Ask what the property is best known for and experience it on night one', 'Accept every offered upgrade — at this level, they are genuine improvements', 'Tell them what you want to avoid (over-scheduled activities, group events)', 'Ask what other honeymooners always wish they had done — staff know'] },
      { title: 'Value optimisation', items: ['Book direct or through a luxury travel agent (Virtuoso, Signature Travel Network) for extra amenities', 'Ask about honeymoon packages — they often include breakfast, spa credits, and F&B allowances', 'Target the "last great value window" — 2–3 months before arrival is when resorts discount unsold premium rooms', 'Consider January in the Maldives vs November — identical weather, 30% price difference'] },
    ],
    expertTips: [
      'The most expensive hotel is not always the best honeymoon. A 96/100 Honeymoon Score at $600/night outperforms a 70/100 score at $2,000/night for most couples. Always check the Honeymoon Score before assuming price equals quality.',
      'Book direct or through a Virtuoso-affiliated travel agent. Direct bookings at Aman, Four Seasons, and Six Senses come with benefits (early check-in, spa credit, breakfast) not available on third-party sites. A Virtuoso agent adds these at no cost to you.',
      'The first two nights set the entire emotional register of a honeymoon. Invest disproportionately in the opening hotel, even if it means scaling back on the final nights. The arrival experience when you are freshest and most emotionally primed is the one that defines the trip.',
      'At properties like Soneva Jani, where the suite price includes food and beverages, the effective cost difference from a comparable non-inclusive property is 30–40% lower per night than the rack rate suggests. Factor in-room dining, spa use, and activities when comparing properties.',
      'Request the "honeymoon reveal" when you book — most ultra-luxury resorts have a standard honeymoon setup (flowers, champagne, candles, turndown ritual). Tell them what would actually move you and they will deliver it. The best properties find out beforehand; the best couples tell them.',
    ],
    faqs: [
      { q: 'What is the best ultra-luxury honeymoon hotel in the world?', a: 'Soneva Jani (Maldives, 97/100) currently leads our Honeymoon Score. Close competitors: Four Seasons Resort Bora Bora (96/100), Jade Mountain St. Lucia (94/100), Singita Sasakwa Lodge (88/100). The right answer depends on your preferred destination and experience type — all are exceptional.' },
      { q: 'Is ultra-luxury worth it for a honeymoon?', a: 'The once-in-a-lifetime context makes ultra-luxury rational for many couples who would never spend this way otherwise. The key question is: what actually moves you? If extraordinary settings, privacy, and service resonate — yes, completely worth it. If you prefer experiences over rooms, redistribute the budget toward activities.' },
      { q: 'How do you get upgrades at luxury hotels?', a: 'Book direct or through a luxury travel agent. Send a personalised pre-arrival email 10 days before check-in (mention honeymoon, room preference, specific requests). Arrive with clear, specific preferences — not demands. The hotels that deliver upgrades do so for guests who have made a real human connection with the team before arrival.' },
      { q: 'What is the difference between luxury and ultra-luxury?', a: 'Luxury delivers consistently excellent rooms, dining, and service. Ultra-luxury delivers the sense that the property exists specifically for you — that your preferences have been anticipated, your room was chosen with thought, and the staff have been briefed on what makes your stay meaningful. The psychological difference is significant.' },
    ],
    related: ['overwater-bungalows', 'adults-only', 'safari'],
  },
}

export async function generateStaticParams() {
  return getAllExperienceTypes().map(t => ({ type: t }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { type } = await params
  const meta = EXPERIENCE_META[type]
  if (!meta) return { title: `${type.replace(/-/g, ' ')} Honeymoon Hotels` }
  return {
    title: `${meta.label} Honeymoon Hotels — Expert Guide & Scored Properties`,
    description: meta.intro.slice(0, 160),
    openGraph: { title: `${meta.label} Honeymoon Hotels`, description: meta.intro.slice(0, 160), images: [meta.hero] },
  }
}

const MONTH_COLORS: Record<string, string> = {
  Peak: 'bg-rose-600 text-white',
  Good: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
  Shoulder: 'bg-amber-50 text-amber-700 border border-amber-200',
  Low: 'bg-zinc-50 text-zinc-400 border border-zinc-100',
  Avoid: 'bg-red-50 text-red-600 border border-red-100',
}

export default async function ExperiencePage({ params }: Props) {
  const { type } = await params
  const hotels = getHotelsByExperience(type)
  const meta = EXPERIENCE_META[type]

  if (hotels.length === 0 && !meta) notFound()

  const sortedHotels = [...hotels].sort((a, b) => b.honeymoon_score - a.honeymoon_score)
  const topThree = sortedHotels.slice(0, 3)

  return (
    <div className="bg-white">

      {/* ── HERO ── */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        {meta?.hero && (
          <>
            <Image src={meta.hero} alt={meta.label} fill priority className="object-cover" sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
          </>
        )}
        <nav className="absolute top-6 left-6 sm:left-12 flex items-center gap-2 text-white/60 text-xs">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <span className="text-white/40">Experiences</span>
          <span>/</span>
          <span className="text-white/70 capitalize">{meta?.label ?? type.replace(/-/g, ' ')}</span>
        </nav>
        <div className="absolute bottom-10 left-6 sm:left-12 max-w-2xl">
          <p className="text-white/60 text-xs tracking-[0.2em] uppercase mb-3">Experience Guide</p>
          <h1 className="font-display text-5xl sm:text-7xl text-white mb-4 leading-none">{meta?.label ?? type.replace(/-/g, ' ')}</h1>
          {meta?.tagline && <p className="text-white/70 text-lg max-w-xl leading-relaxed">{meta.tagline}</p>}
        </div>
      </section>

      {/* ── AT A GLANCE CARDS ── */}
      {meta?.stats && (
        <div className="max-w-6xl mx-auto px-6 sm:px-12 -mt-10 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {meta.stats.map((s, i) => (
              <div key={i} className="bg-white border border-zinc-100 rounded-2xl px-5 py-4 shadow-lg">
                <div className="text-2xl mb-1">{s.icon}</div>
                <div className="font-display text-xl text-zinc-900">{s.value}</div>
                <div className="text-zinc-400 text-xs">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto px-6 sm:px-12 space-y-20 py-20 pb-32">

        {/* ── INTRO + PERFECT FOR / SKIP ── */}
        {meta && (
          <div className="grid lg:grid-cols-[1fr_340px] gap-12">
            <section>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">The Expert View</p>
              <p className="text-zinc-600 text-lg leading-relaxed mb-8">{meta.intro}</p>
            </section>
            <div className="space-y-4">
              <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-5">
                <div className="text-xs font-semibold uppercase tracking-wider text-emerald-700 mb-3">Perfect if you…</div>
                <ul className="space-y-2">
                  {meta.perfectFor.map((p, i) => <li key={i} className="flex gap-2 text-sm text-emerald-800"><span className="text-emerald-500 shrink-0 mt-0.5">✓</span>{p}</li>)}
                </ul>
              </div>
              <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5">
                <div className="text-xs font-semibold uppercase tracking-wider text-amber-700 mb-3">Skip it if…</div>
                <ul className="space-y-2">
                  {meta.skipIf.map((s, i) => <li key={i} className="flex gap-2 text-sm text-amber-800"><span className="text-amber-500 shrink-0 mt-0.5">→</span>{s}</li>)}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* ── TOP REASONS ── */}
        {meta?.reasons && (
          <section>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">Why This Experience</p>
            <h2 className="font-display text-3xl sm:text-4xl mb-8">Why couples choose {meta.label.toLowerCase()} for their honeymoon</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {meta.reasons.map((r, i) => (
                <div key={i} className="border border-zinc-100 rounded-2xl p-6 hover:border-zinc-300 transition-colors">
                  <div className="font-display text-4xl text-zinc-100 mb-3 leading-none">0{i + 1}</div>
                  <h3 className="font-semibold text-zinc-900 mb-2">{r.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{r.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── BEST DESTINATIONS ── */}
        {meta?.destinations && (
          <section>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">Where to Go</p>
            <h2 className="font-display text-3xl sm:text-4xl mb-8">Best destinations for {meta.label.toLowerCase()}</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {meta.destinations.map((d, i) => (
                <Link key={i} href={`/destinations/${d.slug}`} className="group border border-zinc-100 rounded-2xl p-6 hover:border-zinc-900 hover:shadow-md transition-all">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="font-semibold text-zinc-900 group-hover:text-rose-600 transition-colors">{d.name}</h3>
                    <span className="shrink-0 text-xs bg-zinc-100 text-zinc-500 px-2.5 py-1 rounded-full">{d.budget}</span>
                  </div>
                  <p className="text-zinc-500 text-sm leading-relaxed mb-3">{d.why}</p>
                  <div className="text-xs text-zinc-400"><span className="font-medium text-zinc-600">Best for:</span> {d.bestFor}</div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* ── MONTH-BY-MONTH ── */}
        {meta?.months && (
          <section>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">When to Go</p>
            <h2 className="font-display text-3xl sm:text-4xl mb-8">Month-by-month guide</h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-2">
              {meta.months.map((m, i) => (
                <div key={i} className={`rounded-xl p-3 ${MONTH_COLORS[m.verdict] ?? 'bg-zinc-50'}`}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-sm">{m.month}</span>
                    <span>{m.emoji}</span>
                  </div>
                  <div className="text-xs font-medium mb-1">{m.verdict}</div>
                  <p className="text-xs opacity-75 leading-tight">{m.note}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── BUDGET TIERS ── */}
        {meta?.budgetTiers && (
          <section>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">Budget Guide</p>
            <h2 className="font-display text-3xl sm:text-4xl mb-8">What your budget buys</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {meta.budgetTiers.map((tier, i) => (
                <div key={i} className={`rounded-2xl p-6 ${i === 1 ? 'bg-rose-700 text-white' : 'border border-zinc-100'}`}>
                  <div className={`text-xs font-semibold tracking-widest uppercase mb-1 ${i === 1 ? 'text-rose-200' : 'text-rose-400'}`}>{tier.tier}</div>
                  <div className={`font-display text-2xl mb-3 ${i === 1 ? 'text-white' : 'text-zinc-900'}`}>{tier.range}</div>
                  <p className={`text-sm leading-relaxed mb-3 ${i === 1 ? 'text-rose-100' : 'text-zinc-500'}`}>{tier.desc}</p>
                  <p className={`text-xs ${i === 1 ? 'text-rose-200' : 'text-zinc-400'}`}><span className="font-medium">Examples:</span> {tier.hotels}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── HOTEL GRID ── */}
        <section id="hotels">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-2">Scored & Ranked</p>
              <h2 className="font-display text-3xl sm:text-4xl">Top {meta?.label ?? type.replace(/-/g, ' ')} hotels</h2>
            </div>
            <p className="text-zinc-400 text-sm hidden sm:block">{hotels.length} properties · sorted by score</p>
          </div>
          {hotels.length === 0 ? (
            <div className="border border-zinc-100 rounded-2xl p-12 text-center text-zinc-400">
              <p className="text-lg mb-2">More properties coming soon</p>
              <p className="text-sm">We score new hotels weekly — check back shortly.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {sortedHotels.map(h => <HotelCard key={h.slug} hotel={h} />)}
            </div>
          )}
        </section>

        {/* ── COMPARISON TABLE ── */}
        {topThree.length >= 2 && (
          <section>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">Quick Comparison</p>
            <h2 className="font-display text-3xl sm:text-4xl mb-8">Top 3 compared</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-zinc-100">
                    <th className="text-left py-3 pr-4 text-zinc-400 font-normal">Property</th>
                    <th className="text-left py-3 pr-4 text-zinc-400 font-normal">Score</th>
                    <th className="text-left py-3 pr-4 text-zinc-400 font-normal">Destination</th>
                    <th className="text-left py-3 pr-4 text-zinc-400 font-normal">From</th>
                    <th className="text-left py-3 text-zinc-400 font-normal">Adults-Only</th>
                  </tr>
                </thead>
                <tbody>
                  {topThree.map((h, i) => (
                    <tr key={h.slug} className="border-b border-zinc-50 hover:bg-zinc-50 transition-colors">
                      <td className="py-4 pr-4 font-medium">
                        <Link href={`/hotels/${h.slug}`} className="hover:text-rose-600 transition-colors capitalize">{h.name}</Link>
                        {i === 0 && <span className="ml-2 text-xs bg-rose-500 text-white px-2 py-0.5 rounded-full">Top pick</span>}
                      </td>
                      <td className="py-4 pr-4"><span className="font-display text-lg">{h.honeymoon_score}</span><span className="text-zinc-300">/100</span></td>
                      <td className="py-4 pr-4 capitalize text-zinc-500">{h.destination.replace(/-/g, ' ')}</td>
                      <td className="py-4 pr-4 text-zinc-500">${h.price_per_night_usd.min}/night</td>
                      <td className="py-4">{h.adults_only ? <span className="text-emerald-600">✓ Yes</span> : <span className="text-zinc-300">No</span>}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* ── BOOKING CHECKLIST ── */}
        {meta?.checklist && (
          <section>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">Buying Guide</p>
            <h2 className="font-display text-3xl sm:text-4xl mb-8">How to choose and book the right {meta.label.toLowerCase()} hotel</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {meta.checklist.map((cl, i) => (
                <div key={i} className="bg-zinc-50 border border-zinc-100 rounded-2xl p-6">
                  <h3 className="font-semibold text-zinc-900 mb-4">{cl.title}</h3>
                  <ul className="space-y-2">
                    {cl.items.map((item, j) => (
                      <li key={j} className="flex gap-2.5 text-sm text-zinc-600">
                        <span className="text-zinc-300 shrink-0">—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── EXPERT TIPS ── */}
        {meta?.expertTips && (
          <section>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">Expert Knowledge</p>
            <h2 className="font-display text-3xl sm:text-4xl mb-8">What most couples don't know before booking</h2>
            <div className="space-y-6">
              {meta.expertTips.map((tip, i) => (
                <div key={i} className="flex gap-6">
                  <div className="font-display text-5xl text-zinc-100 leading-none shrink-0 w-14 text-right">{String(i + 1).padStart(2, '0')}</div>
                  <p className="text-zinc-600 text-[15px] leading-relaxed pt-1">{tip}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── FAQ ── */}
        {meta?.faqs && (
          <section>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">Common Questions</p>
            <h2 className="font-display text-3xl sm:text-4xl mb-8">Frequently asked questions</h2>
            <div className="space-y-3">
              {meta.faqs.map((faq, i) => (
                <details key={i} className="group border border-zinc-100 rounded-2xl overflow-hidden">
                  <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-medium text-zinc-900 text-sm hover:bg-zinc-50 transition-colors list-none">
                    <span>{faq.q}</span>
                    <svg className="w-4 h-4 text-zinc-400 shrink-0 ml-4 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
                  </summary>
                  <div className="px-6 pb-6 pt-2">
                    <p className="text-zinc-500 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </section>
        )}

        {/* ── RELATED EXPERIENCES ── */}
        {meta?.related && (
          <section>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">Explore More</p>
            <h2 className="font-display text-3xl mb-6">Related experiences</h2>
            <div className="flex flex-wrap gap-3">
              {meta.related.map(r => {
                const relMeta = EXPERIENCE_META[r]
                return relMeta ? (
                  <Link key={r} href={`/experiences/${r}`}
                    className="border border-zinc-200 hover:border-zinc-900 hover:shadow-sm text-zinc-700 hover:text-zinc-900 px-6 py-3 rounded-full text-sm font-medium transition-all">
                    {relMeta.label}
                  </Link>
                ) : null
              })}
            </div>
          </section>
        )}

      </div>
    </div>
  )
}
