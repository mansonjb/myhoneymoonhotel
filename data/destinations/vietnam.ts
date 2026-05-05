import type { DestinationMeta } from '@/types/destination'

const meta: DestinationMeta = {
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
}

export default meta
