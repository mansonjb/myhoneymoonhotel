import type { DestinationMeta } from '@/types/destination'

const meta: DestinationMeta = {
hero: '/images/hotels/grand-hotel-timeo-sicily/hero.webp',
tagline: 'The romance Italy forgot to gentrify — cliffside Belmonds in Taormina, volcanic islands, the food story of Europe.',
intro: 'Sicily is the largest island in the Mediterranean and the one with the most layered honeymoon story — Greek temples older than the Parthenon, a Norman cathedral built on a Roman temple built on a Phoenician shrine, an active volcano (Mount Etna, 3,300m, smoking constantly above the Ionian Sea), and an archipelago of seven volcanic islands floating off the north coast. The hotels are exceptional in two registers: the cliffside grandeur of Taormina (Belmond Timeo, Four Seasons San Domenico, the village where White Lotus S2 was filmed) and the volcanic-island intimacy of the Aeolians (Capofaro on Salina, Hotel Signum, family-run hotels in 30-key boutiques on islands you reach by hydrofoil). The food is arguably the most exciting in Italy — granita di mandorla for breakfast, pasta alla Norma at lunch, swordfish carpaccio and Etna wines at dinner — and the honeymoon rhythm here is slower, warmer, and more rooted in centuries of cross-cultural Mediterranean history than anywhere on the mainland.',
bestTime: 'May–Oct',
flightFrom: '3h from London / 13h from US East Coast (via Rome)',
topExperience: 'Cliffside Boutique Hotels',
perfectFor: [
  'Couples who want Italy without the Tuscan/Amalfi crowds — Sicily is genuinely undertouristed outside Taormina',
  'Food-obsessed honeymooners — Sicily is the most exciting regional cuisine in Italy',
  'Couples who want active volcanoes (Etna, Stromboli) and ancient Greek archaeology in the same trip',
  'Pairing two contrasting bases — Taormina cliffs + Aeolian volcanic islands is the classic structure',
  'Travellers who love mineral-driven wine — Etna and Malvasia delle Lipari are among Europe\'s most distinctive',
],
skipIf: [
  'You want toes-in-white-sand Caribbean beaches — Sicily\'s coast is dramatic but mostly pebble',
  'You hate driving (or boats) — the best of Sicily requires a car or a hydrofoil schedule',
  'You\'re visiting in August — hot (33°C+), crowded with Italian domestic holidays, and overpriced',
  'You want an all-inclusive resort cocoon — Sicily\'s magic is in getting out among villages and ruins',
  'A 7+ night trip feels too long — Sicily really opens up at 7–10 nights, less feels rushed',
],
experiences: [
  {
    icon: '🌋',
    title: 'Etna Sunset Excursion',
    description: 'Private 4WD up the south flank of Europe\'s most active volcano — 2,900m, smoking active craters, Nerello Mascalese vineyards on the lower slopes. Late-afternoon ascent with a volcanologist guide for sunset on the lava.',
    cost: '€350–€600 per couple',
    tip: 'Book the late-afternoon (4pm) slot rather than morning — the sun on the lava and the descent through golden light is the photograph. Layer up: it drops 15°C between the coast and the summit.',
  },
  {
    icon: '🏛️',
    title: 'Ortigia & Syracuse Walk',
    description: 'The limestone islet that was the largest city of the ancient Greek world — Piazza Duomo (a baroque cathedral built around the columns of a 5th-century BC Temple of Athena), the Apollo temple, the seafront walk to Fonte Aretusa.',
    cost: 'Free (€10 cathedral, €15 archaeological park)',
    tip: 'Stay for sunset aperitivo on the seafront — Il Sale and Sicilia in Tavola both serve excellent Marsala spritz from terraces over the channel.',
  },
  {
    icon: '⛵',
    title: 'Aeolian Boat Day',
    description: 'Private gozzo speedboat from Milazzo around Panarea, lunch at Hotel Raya\'s terrace, sunset eruptions of Stromboli viewed from the sea. The single most cinematic day of any Sicily trip.',
    cost: '€800–€1,400 per couple (full day)',
    tip: 'Book in mid-week (Tuesday/Wednesday) — Panarea fills with weekend Italian visitors. Tell the captain you want to be at Stromboli for the sunset eruption window (around 7pm in summer).',
  },
  {
    icon: '🍋',
    title: 'Granita & Brioche Morning',
    description: 'Almond granita with warm brioche is Sicily\'s sacred breakfast ritual — go to Bam Bar in Taormina, Caffè Sicilia in Noto, or Da Alfredo on Salina for the legendary versions.',
    cost: '€4–€8',
    tip: 'Order granita di mandorla (almond) and granita di gelsi (mulberry) — the two essential Sicilian flavours. Eat it before 11am; it is the morning meal here, not a dessert.',
  },
  {
    icon: '🎭',
    title: 'Greek Theatre at Sunset',
    description: 'The 3rd-century BC Greek Theatre of Taormina is one of the most spectacular ruins in Italy because Mount Etna sits perfectly framed in the proscenium opening. Late-afternoon entry catches the volcano in golden light.',
    cost: '€10 entry',
    tip: 'Enter 90 minutes before closing for the emptiest views. In July–August, evening concerts (Taormina Arte) make the theatre live again — book months ahead for a performance.',
  },
],
months: [
  { month: 'Jan', weather: 'Cool, possible rain (10–15°C)', emoji: '🌧', crowds: 'Very low', price: 'Lowest', verdict: 'Most hotels closed' },
  { month: 'Feb', weather: 'Cool, dry-ish (12–17°C)', emoji: '⛅', crowds: 'Very low', price: 'Lowest', verdict: 'Mostly off-season' },
  { month: 'Mar', weather: 'Mild, almond blossom (14–19°C)', emoji: '🌤', crowds: 'Low', price: 'Low', verdict: 'Hotels reopening — quiet' },
  { month: 'Apr', weather: 'Warming, lush green (17–22°C)', emoji: '🌤', crowds: 'Low', price: 'Mid-low', verdict: 'Beautiful but sea cold' },
  { month: 'May', weather: 'Perfect, dry (21–26°C)', emoji: '☀️', crowds: 'Moderate', price: 'Mid', verdict: 'Sweet spot opens' },
  { month: 'Jun', weather: 'Hot, dry, sea swimmable (25–30°C)', emoji: '☀️', crowds: 'Moderate-high', price: 'Mid-high', verdict: 'One of the best months' },
  { month: 'Jul', weather: 'Very hot (30–34°C)', emoji: '🔥', crowds: 'High', price: 'High', verdict: 'Beautiful but hot' },
  { month: 'Aug', weather: 'Hottest, busiest (32–35°C)', emoji: '🔥', crowds: 'Peak', price: 'Highest', verdict: 'Avoid if you can' },
  { month: 'Sep', weather: 'Warm, calmer (26–30°C)', emoji: '☀️', crowds: 'Moderate', price: 'Mid-high', verdict: 'The best month' },
  { month: 'Oct', weather: 'Mild, Etna harvest (22–26°C)', emoji: '🌤', crowds: 'Low-mod', price: 'Mid', verdict: 'Hidden gem month' },
  { month: 'Nov', weather: 'Cooling, possible rain (16–20°C)', emoji: '⛅', crowds: 'Low', price: 'Low', verdict: 'Many hotels closing' },
  { month: 'Dec', weather: 'Cool, occasional rain (12–17°C)', emoji: '🌧', crowds: 'Low', price: 'Low', verdict: 'Most hotels closed' },
],
budgetTiers: [
  {
    label: 'Boutique',
    range: '€450–€800/night',
    gets: 'Beautiful 4-star boutique hotels in Taormina, Ortigia, or the Aeolians. Private terrace, sea view, exceptional food, less polished spa infrastructure.',
    example: 'Hotel Signum (Salina), Algilà Charme (Ortigia), Villa Ducale (Taormina)',
  },
  {
    label: 'Premium 5-Star',
    range: '€800–€1,800/night',
    gets: 'Belmond and Rocco Forte — full luxury infrastructure, exceptional service, cliff-edge or beachfront positioning.',
    example: 'Grand Hotel Timeo, Villa Sant\'Andrea, Verdura Resort, Capofaro',
  },
  {
    label: 'Ultra-Luxury',
    range: '€1,800+/night',
    gets: 'Four Seasons San Domenico Palace and the top Belmond suites. The single best hotels in the Mediterranean.',
    example: 'San Domenico Palace Royal Suite, Timeo Casa Dolce, Verdura Pool Suites',
  },
],
areas: [
  {
    name: 'Taormina',
    bestFor: 'Cliffside grandeur, ancient theatre, the iconic Sicily',
    description: 'The hilltop village 200m above the Ionian Sea — the 3rd-century BC Greek Theatre, the Corso Umberto pedestrian spine, the Belmond Timeo and Four Seasons San Domenico cliffside hotels, and the Mount Etna view from every front-facing room. The definitive Sicilian honeymoon base.',
  },
  {
    name: 'Aeolian Islands (Salina, Panarea)',
    bestFor: 'Volcanic-island intimacy, food-led boutique hotels, slow time',
    description: 'Seven volcanic islands floating off the north coast — Salina (vineyards, capers, Capofaro and Hotel Signum), Panarea (chic and tiny), Stromboli (the active volcano with permanent eruptions visible at night). Reached by hydrofoil from Milazzo. Genuinely remote and uncommercialised.',
  },
  {
    name: 'Ortigia / Syracuse',
    bestFor: 'Baroque architecture, ancient Greek context, food',
    description: 'The limestone islet that was the largest city of the ancient Greek world — Piazza Duomo (a baroque cathedral built around the columns of a 5th-century BC Temple of Athena), narrow stone alleys, seafront walks, and some of Sicily\'s best restaurants (Don Camillo, Sicilia in Tavola). Pairs beautifully with a Taormina front leg.',
  },
  {
    name: 'Sciacca / Agrigento (south-west coast)',
    bestFor: 'Beach time, Greek temples, wellness',
    description: 'The deep south-west coast — Verdura Resort\'s 230-hectare beach estate, the Valley of the Temples at Agrigento (the largest concentration of Doric ruins outside Greece), the baroque centre of Sciacca, and 90 minutes from Palermo airport. The beach-and-spa decompression leg of a Sicily trip.',
  },
],
expertTips: [
  {
    tip: 'Book Catania in, Palermo out (or vice-versa) for an open-jaw itinerary',
    detail: 'Sicily is large — driving back across the island to fly home wastes a half-day. Book CTA in for Taormina/Aeolians and PMO out for Verdura/Palermo (or reverse). British Airways, EasyJet, and Ryanair all serve both.',
  },
  {
    tip: 'Drive yourself outside Taormina — but never inside it',
    detail: 'A small rental car (€60/day) opens the Etna wineries, Castelmola, and the south-coast temples. But Taormina village is pedestrianised and car-hostile — your hotel handles the airport transfer; rent the car only if you\'re moving on to Verdura or Palermo.',
  },
  {
    tip: 'Book the Aeolian hydrofoil tickets the morning of, not in advance',
    detail: 'Liberty Lines and Siremar publish schedules but cancel for wind or sea state — buy tickets at the Milazzo dock the morning of, not online weeks ahead. Your hotel will arrange the timing if you ask.',
  },
  {
    tip: 'Skip cooking classes — book a winery lunch instead',
    detail: 'Sicily\'s tourist cooking classes are formulaic; Etna winery lunches (Pietradolce, Tenuta delle Terre Nere, Passopisciaro) are exceptional and cost the same. Half-day trip from Taormina, the most authentic Sicilian food experience available.',
  },
  {
    tip: 'Ask the hotel for a private boat at golden hour',
    detail: 'A 2-hour private gozzo (small wooden boat) along the Taormina coastline at 5pm — Isola Bella, Capo Sant\'Andrea, the Blue Grotto sea cave — is €350 and the most romantic 2 hours of the trip. Better than the 8-hour day boat tours which feel rushed.',
  },
],
packing: [
  { item: 'Cool linen for hot evenings', why: 'July–August evenings stay 28°C+ — cotton suffers; linen breathes' },
  { item: 'Smart shoes (no flip-flops at dinner)', why: 'Even casual restaurants in Taormina expect closed shoes after 7pm' },
  { item: 'Reef shoes / water shoes', why: 'Most Sicilian beaches are pebble — Mazzarò, Aeolian black-pebble coves' },
  { item: 'Light jacket / cashmere', why: 'Etna ascents drop 15°C between coast and 2,900m summit' },
  { item: 'European plug adapters', why: 'Type C/F (round 2-pin) — different from US, UK, Italian schuko' },
  { item: 'Reusable water bottle', why: 'Tap water is potable in Sicily; villages have public fountains' },
  { item: 'Driving licence (with EU translation)', why: 'Required if renting a car — UK/US licences need IDP for some agencies' },
],
guide: {
  getting: 'Catania (CTA) is the gateway for Taormina and the Aeolians — direct flights from London, Paris, Frankfurt, and most European hubs (3h from UK), or via Rome FCO from US. Palermo (PMO) is the gateway for Verdura and the west — direct from same European hubs. For an open-jaw, fly CTA in / PMO out (or reverse). Trains connect Catania → Taormina-Giardini in 50 minutes; private Mercedes transfer to Taormina village is €180. Aeolian Islands require a transfer to Milazzo (90 min from CTA) plus a hydrofoil (90 min) or ferry (2.5h).',
  where: 'Taormina for first-time honeymooners — the Belmond Timeo, Four Seasons San Domenico, and Villa Sant\'Andrea cluster is the iconic Sicily base. Aeolian Islands (Salina, Panarea) for the second-leg volcanic-island intimacy — Capofaro and Hotel Signum on Salina are the picks. Verdura on the south-west for beach-and-spa decompression. Ortigia/Syracuse for baroque architecture and food. The classic itinerary: 4 nights Taormina + 3 nights Salina, or 3 nights Taormina + 4 nights Verdura.',
  when: 'May–June and September–October are the sweet spots — 22–28°C, sea swimmable, hotels open and quiet. July–August is hot (32°C+) and crowded with Italian domestic tourists. Most luxury hotels close mid-November to mid-March; visit in winter only for the Baroque towns and Etna ski day-trips.',
},
localFood: 'Granita di mandorla (almond granita) with warm brioche for breakfast — sacred ritual; pasta alla Norma (eggplant, ricotta salata, basil — invented in Catania); arancini (golden saffron-rice balls stuffed with ragù or mozzarella); cassata Siciliana (the green-marzipan ricotta-and-candied-fruit cake of palermitan baroque); cannoli (the original ricotta-filled crisp pastry); caponata (sweet-sour eggplant relish); swordfish involtini and rolled-and-grilled tuna; Etna red wines (Nerello Mascalese, Pietradolce, Passopisciaro); Malvasia delle Lipari (the volcanic dessert wine of Salina).',
currency: 'EUR (Euro)',
language: 'Italian (Sicilian dialect widely spoken; English at hotel level)',
timezone: 'CET (UTC+1, UTC+2 in summer)',
}

export default meta
