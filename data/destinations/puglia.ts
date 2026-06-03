import type { DestinationMeta } from '@/types/destination'

const meta: DestinationMeta = {
  hero: '/images/hotels/borgo-egnazia-puglia/hero.webp',
  tagline: 'Masseria farmhouses, white-washed towns, the Adriatic — Italy\'s most uniquely Italian honeymoon.',
  intro: 'Puglia is the heel of the Italian boot — 800km of Adriatic and Ionian coastline, the white-washed towns of the Itria Valley (Ostuni, Locorotondo, Cisternino), the trulli of Alberobello, the baroque churches of Lecce carved from butter-soft golden stone, and the masseria tradition: fortified 16th- to 18th-century farmhouses converted into some of the most distinctive luxury hotels in Europe. Borgo Egnazia is the wedding destination of Justin Timberlake and the Beckhams. Masseria Torre Maizza is Rocco Forte\'s sun-drenched Puglian palace. Masseria San Domenico has the original thalassotherapy spa. None of this exists in any other Italian region. Add some of the best food in Italy (orecchiette, burrata invented down the road in Andria), and Puglia is the most Italian-feeling honeymoon you can take.',
  bestTime: 'May–Jun & Sep–early Oct',
  flightFrom: '2.5–3.5h from northern Europe',
  topExperience: 'Masseria Stays & White-Town Wandering',
  perfectFor: [
    'Couples wanting genuine Italian rural atmosphere with full luxury wellness',
    'Foodies — burrata, orecchiette, Primitivo and Negroamaro reds, olive oil culture',
    'Beach lovers who also want history, white towns, and Michelin restaurants',
    'Honeymooners who have already done Amalfi/Lake Como and want something new',
    'Couples looking to combine a beach week with a tour of the trulli and Lecce',
  ],
  skipIf: [
    'You need urban energy or major museums — Puglia is rural and slow',
    'You\'re travelling in August — Italian holidaymakers descend, every masseria is fully booked',
    'You don\'t want to drive — the masserias are countryside and require a hire car',
    'You\'re visiting Nov–Mar — many masserias close, beaches deserted, weather cool',
  ],
  experiences: [
    {
      icon: '🍝',
      title: 'Orecchiette Lesson with a Nonna',
      description: 'In a 17th-century masseria kitchen with a Pugliese grandmother who has been making orecchiette since she was six. Two hours of pasta-shaping (the "little ears" are made with one thumb-flick), followed by lunch in the masseria courtyard with the pasta you just made, tossed in cime di rapa or tomato and burrata.',
      cost: '$120–$180 per couple',
      tip: 'Insist on a private lesson rather than a group class — the one-on-one experience with the nonna is incomparably more authentic. Most masserias arrange this through the concierge with one of their kitchen staff.',
    },
    {
      icon: '🏛️',
      title: 'Lecce Baroque City Tour',
      description: 'A private walking tour of Lecce — the "Florence of the South." The 17th-century baroque churches (Basilica di Santa Croce, Duomo, Sant\'Irene) are carved from a local golden limestone soft enough to work like marzipan, then hardened by air into the most ornate baroque facades in Italy. Lunch at Bros\' (one Michelin star, modernist cuisine in the historic centre).',
      cost: '$250–$400 per couple including lunch',
      tip: 'Visit Lecce in late afternoon — the baroque stone glows golden in the 5pm sun and the day-trippers have left. Dinner at Bros\' must be booked 6+ weeks ahead.',
    },
    {
      icon: '🏠',
      title: 'Trulli of Alberobello + Locorotondo',
      description: 'The 1,500 conical-roofed limestone trulli of Alberobello are a UNESCO site (and yes, touristy). The trick is to combine Alberobello before 10am with the much quieter Locorotondo (circular hilltop town, white houses, sunset views over the Itria Valley) and Cisternino (whitewashed lanes, the best butcher-grills in southern Italy) in the same afternoon.',
      cost: '$200–$350 per couple (driver, guide)',
      tip: 'Skip the trulli-night-experience — instead, do Alberobello at 8am, drive to Locorotondo for lunch, end with a fornello (butcher-grill) dinner in Cisternino. Hotel concierges arrange the driver.',
    },
    {
      icon: '🫒',
      title: 'Olive Oil Tasting at a Frantoio',
      description: 'Puglia produces 40% of Italy\'s olive oil. A visit to a working frantoio (oil mill) on a 600-year-old grove with 1,000-year-old trees, walking among the gnarled monumentali, tasting four single-cultivar extra virgins (Coratina, Ogliarola, Cellina di Nardò, Frantoio) the way you would taste wine. Profoundly Italian.',
      cost: '$80–$150 per couple',
      tip: 'Go in November during harvest if possible — otherwise late spring when the trees are flowering. Frantoio Muraglia near Andria and Masseria Brancati near Ostuni are the best for couples.',
    },
    {
      icon: '🏖️',
      title: 'Polignano a Mare & Cala Porto',
      description: 'The cliff town of Polignano a Mare is built on limestone cliffs straight above the Adriatic, with the tiny Cala Porto beach in a natural cove below the old town. Lunch at Grotta Palazzese (a restaurant in a sea-cave) is touristy but the cave setting is genuinely extraordinary. The afternoon swim from the cliff-foot is the Puglian beach experience in microcosm.',
      cost: '$300–$500 per couple (lunch at Grotta Palazzese, taxi from masseria)',
      tip: 'Book Grotta Palazzese for an early lunch (12:30) rather than dinner — daylight on the cave water is incomparable. After lunch, walk the cliffs and take a 90-min boat tour into the sea caves with Pugliamare Boat Tours.',
    },
  ],
  months: [
    { month: 'Jan', weather: 'Cool, quiet, many closures', emoji: '⛅', crowds: 'Minimal', price: 'Lowest', verdict: 'Most masserias closed' },
    { month: 'Feb', weather: 'Cool, almond blossom late-month', emoji: '🌸', crowds: 'Minimal', price: 'Lowest', verdict: 'Most masserias closed' },
    { month: 'Mar', weather: 'Warming, spring wildflowers', emoji: '🌤', crowds: 'Low', price: 'Low', verdict: 'Some masserias reopen — limited dining' },
    { month: 'Apr', weather: 'Spring perfection, full bloom', emoji: '☀️', crowds: 'Moderate', price: 'Mid', verdict: 'Excellent — season opens properly' },
    { month: 'May', weather: 'Ideal — warm days, cool nights', emoji: '☀️', crowds: 'Moderate', price: 'Mid-high', verdict: 'One of the two best months' },
    { month: 'Jun', weather: 'Warm, sea swimmable, long evenings', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Beautiful — book early' },
    { month: 'Jul', weather: 'Hot, Italian holidaymakers arrive', emoji: '🌡️', crowds: 'High', price: 'Very high', verdict: 'Too hot and busy' },
    { month: 'Aug', weather: 'Hottest, absolute peak crowds', emoji: '🌡️', crowds: 'Peak', price: 'Highest', verdict: 'Avoid — Italians on holiday, every masseria full' },
    { month: 'Sep', weather: 'Warm, sea warm, crowds thin', emoji: '☀️', crowds: 'Moderate', price: 'High', verdict: 'The best month — perfect everything' },
    { month: 'Oct', weather: 'Mild, golden light, olive harvest', emoji: '🌤', crowds: 'Low-mod', price: 'Mid', verdict: 'Early Oct excellent — late Oct cooling fast' },
    { month: 'Nov', weather: 'Cooling, olive harvest, closures begin', emoji: '⛅', crowds: 'Low', price: 'Low', verdict: 'Atmospheric for olive-tourism' },
    { month: 'Dec', weather: 'Cool, quiet, masseria closures', emoji: '⛅', crowds: 'Low', price: 'Low', verdict: 'Most masserias closed' },
  ],
  budgetTiers: [
    {
      label: 'Boutique Luxury',
      range: '$350–$650/night',
      gets: 'Beautiful smaller masserias and converted dimoras storiche in Lecce and Ostuni. Stone walls, vaulted ceilings, plunge pools, excellent regional kitchens.',
      example: 'Masseria Le Carrube (Ostuni), Don Totu (Lecce)',
    },
    {
      label: 'Premium',
      range: '$650–$1,400/night',
      gets: 'Masseria San Domenico, Borgobianco — full-scale luxury masserias with golf, multiple pools, spa, beach club access.',
      example: 'Masseria San Domenico, Borgobianco Resort & Spa',
    },
    {
      label: 'Ultra-Luxury',
      range: '$1,400+/night',
      gets: 'Borgo Egnazia (the wedding destination of choice for global celebrities, Vair Spa, beach club, golf) or Masseria Torre Maizza (Rocco Forte, Pizzica suites, the most sun-drenched property in Puglia).',
      example: 'Borgo Egnazia, Masseria Torre Maizza',
    },
  ],
  areas: [
    {
      name: 'Itria Valley (Ostuni, Locorotondo, Cisternino)',
      bestFor: 'Most masserias, white-town day trips, central base',
      description: 'The agricultural heart between Bari and Brindisi airports — olive groves, vineyards, dry-stone walls, and the trulli. The white towns of Ostuni (la città bianca), Locorotondo and Cisternino sit on hills above. Masseria Torre Maizza, Masseria Le Carrube, Masseria San Domenico and Borgo Egnazia are all within a 20-minute drive of each other here.',
    },
    {
      name: 'Salento (Lecce and the heel)',
      bestFor: 'Baroque architecture, southern beaches, fewer crowds',
      description: 'The deep heel — Lecce as the cultural capital, then south to Otranto on the Adriatic and Gallipoli on the Ionian, with the Maldive del Salento beaches in between. More remote, hotter in summer, but the most distinctive baroque city in Italy at its centre.',
    },
    {
      name: 'Polignano a Mare & the Adriatic coast',
      bestFor: 'Coastal drama, sea caves, easier from Bari airport',
      description: 'The stretch of Adriatic coast north of the Itria Valley — cliffside towns (Polignano, Monopoli), the Grotta Palazzese cave restaurant, and the limestone sea caves. Borgobianco sits inland from Polignano with golf and spa.',
    },
    {
      name: 'Savelletri/Fasano (the masseria coast)',
      bestFor: 'Beach club access, golf, ultra-luxury concentration',
      description: 'A 6km stretch of coast between Bari and Brindisi that has become Italy\'s answer to the south of France — Borgo Egnazia, Masseria San Domenico, and Masseria Torre Maizza are all here, with their own private beach clubs on the Adriatic and the San Domenico golf course in the middle.',
    },
  ],
  expertTips: [
    {
      tip: 'Fly into Brindisi (BDS), not Bari (BRI), if your masseria is south of Polignano',
      detail: 'Brindisi is 30–40 minutes from Ostuni, Savelletri and Lecce. Bari is 60–90 minutes. Both have direct flights from London, Munich and Milan. Hire car at the airport — Puglia genuinely requires a car.',
    },
    {
      tip: 'Stay 4–5 nights in one masseria — not multiple short stays',
      detail: 'The masseria experience rewards stillness — long pool mornings, leisurely lunches, sunset aperitivi. A 7-night trip is best done 5 nights at one masseria + 2 nights in a Lecce dimora storica to bookend with city culture.',
    },
    {
      tip: 'August is fully booked 9 months ahead — and miserable anyway',
      detail: 'Italian families take their two-week ferie in August. Every masseria is full, the Itria Valley roads jam up, and the heat is genuinely oppressive (35–38°C). Late September and early October are both objectively better and dramatically cheaper.',
    },
    {
      tip: 'Eat the burrata where it was invented',
      detail: 'Burrata was invented in Andria in 1956. The masserias serve excellent burrata; the local fior di latte and stracciatella are the best in the world. Visit Caseificio Olanda in Andria for a fresh-burrata tasting before noon — it does not survive a day.',
    },
    {
      tip: 'Book Grotta Palazzese for lunch, not dinner',
      detail: 'The famous sea-cave restaurant at Polignano a Mare is twice the price at dinner with the same food and a tenth of the visual impact (it\'s dark — the cave\'s extraordinary turquoise water is invisible). Early lunch (12:30) is genuinely magical.',
    },
  ],
  packing: [
    { item: 'Light linens and cottons', why: 'Puglia in summer is bright, dry, and 32–38°C. Linen shirts, dresses, and trousers are the local uniform and the only fabric that survives the heat with grace.' },
    { item: 'Smart casual evening wear', why: 'Masseria dining is smart-casual — collared shirts and dresses, no shorts or flip-flops. Borgo Egnazia\'s Due Camini (Michelin star) and Masseria Torre Maizza require a half-step up.' },
    { item: 'Wide-brim sun hat', why: 'The white-town sunlight reflecting off the limestone walls in Ostuni or Locorotondo at midday is genuinely punishing — a real hat is essential, not optional.' },
    { item: 'Comfortable walking shoes with grip', why: 'White-town streets are polished limestone and treacherous in flat-soled sandals. A rubber-soled espadrille or grip-soled sneaker is the right call for day exploring.' },
    { item: 'Swimwear (two sets)', why: 'You will be at the masseria pool every morning and the Adriatic beach club every afternoon — alternating two sets of swimwear saves the eternally damp-bag problem.' },
    { item: 'European power adapter (Type F/L)', why: 'Italian sockets accept Schuko (F) and three-pin Italian (L). A dual-shape adapter avoids hunting in an old converted farmhouse.' },
  ],
  guide: {
    getting: 'Fly into Brindisi (BDS) for southern Puglia (Ostuni, Lecce, Savelletri) or Bari (BRI) for northern Puglia (Polignano, Trani). Direct flights from London (BA, Ryanair, easyJet), Munich (Lufthansa), Milan, Rome (1.5–3h). From the US: connect via Rome or Milan to BDS/BRI. Hire car essential — automatics scarce, book ahead. Drive time BDS to Borgo Egnazia: 30 minutes.',
    where: 'Borgo Egnazia or Masseria Torre Maizza for ultra-luxury masseria; Masseria San Domenico for classic luxury with the thalasso spa; Borgobianco for a quieter base near Polignano; Masseria Le Carrube for an intimate adults-only stay near Ostuni; Don Totu for a Lecce city dimora ending to bookend the trip.',
    when: 'September is the perfect month — sea warm, crowds thinning, harvests starting, prices easing. May–June equally excellent. Early October still excellent. Avoid August (Italians on holiday, every masseria fully booked, oppressive heat). November–March most masserias close.',
  },
  localFood: 'Orecchiette con cime di rapa (ear-shaped pasta with turnip greens, anchovy and garlic) at any masseria kitchen, fresh burrata from Andria with a single grind of pepper and Pugliese olive oil, fave e cicoria (broad-bean purée with wild chicory) at a Salento trattoria, bombette of veal-wrapped scamorza grilled at a Cisternino fornello, Primitivo di Manduria reds, taralli with fennel seed, and panzerotti (fried half-moon pizza-dough turnovers) from a Bari street stall.',
  currency: 'Euro (EUR)',
  language: 'Italian (English in masserias)',
  timezone: 'UTC+1 (CET) / UTC+2 (CEST in summer)',
  seo: { title: 'Puglia Honeymoon: 6 Masseria Hotels Reviewed (2026)', description: '6 Puglia masseria hotels ranked. Borgo Egnazia, Torre Maizza, San Domenico. From $400/night. May–Sep verdicts.' },
}

export default meta
