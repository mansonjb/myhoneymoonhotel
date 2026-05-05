import type { DestinationMeta } from '@/types/destination'

const meta: DestinationMeta = {
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
}

export default meta
