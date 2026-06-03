import type { DestinationMeta } from '@/types/destination'

const meta: DestinationMeta = {
  hero: '/images/hotels/jk-place-capri/hero.webp',
  tagline: '4 km² of cliff, blue water, and dolce vita — the most concentrated Italian honeymoon you can take.',
  intro: 'Capri is 4 square kilometres of limestone rising sheer out of the bluest sea in Italy, and it has been the international honeymoon island since the Roman emperor Tiberius retired here in AD 27. The Faraglioni rock stacks. The Blue Grotto. The Piazzetta at 7pm. Lunch at Da Paolino under the lemon trees. The ferry from Sorrento takes 20 minutes and drops you in a different world from the Amalfi Coast — distinct island culture, distinct hotels, distinct logistics. J.K. Place Capri sits above Marina Grande as the island\'s most polished modern hotel. Capri Palace Jumeirah in Anacapri has the Michelin two-star L\'Olivo. Caesar Augustus has arguably the most photographed pool terrace in Italy. Punta Tragara is Le Corbusier\'s villa overlooking the Faraglioni. The peak peak peak of Italian honeymoon luxury, concentrated on a single small island.',
  bestTime: 'May–Jun & Sep–Oct',
  flightFrom: '2–3h from northern Europe to Naples',
  topExperience: 'Cliffside Pools & Blue-Grotto Days',
  perfectFor: [
    'Couples who want maximum Italian glamour with minimum driving',
    'Boat lovers — the entire island honeymoon revolves around being on the water',
    'Photographers — the Faraglioni, the Piazzetta, the lemon-tree lunches all extraordinary',
    'Couples combining a Naples/Amalfi week with 3–4 nights of Capri\'s distinct rhythm',
    'Those who want serious shopping (Capri is a peer of Saint-Tropez and Mykonos for it)',
  ],
  skipIf: [
    'You need a sand beach — Capri has none (rocky platforms and stabilimenti only)',
    'You\'re travelling July–August — day-trippers from Naples flood the island, Piazzetta unwalkable',
    'You can\'t handle steep walking — the island is vertical, taxis and funicular are expensive',
    'You want budget travel — Capri is the single most expensive square kilometre in Italy',
  ],
  experiences: [
    {
      icon: '🚤',
      title: 'Private Boat Around the Island',
      description: 'A wooden gozzo boat hired for the day from Marina Grande — a complete circumnavigation of Capri with stops at the Faraglioni (swimming through the natural arch), the Grotta Azzurra (the Blue Grotto), the White Grotto, the Green Grotto, and lunch at Da Gelsomina or Lido del Faro on the Anacapri side. The single greatest day in Capri.',
      cost: '$700–$1,200 per couple (full day with captain)',
      tip: 'Book a wooden gozzo, not a RIB speedboat — Capitano Ago and Bagni di Tiberio are the best operators. Start at 9am to do the Blue Grotto before the queue, lunch at Lido del Faro at 1pm, and finish with an aperitivo on board at the Faraglioni at sunset.',
    },
    {
      icon: '🍋',
      title: 'Lunch at Da Paolino',
      description: 'The most famous lunch on Capri — under a canopy of 400 lemon trees in a private garden in Marina Grande. The seafood antipasti are flown in from Sicily that morning; the linguine ai ricci di mare (sea urchin pasta) and grilled total local fish are exceptional. The lemons hanging two feet above your head are the most Italian photograph you will ever take.',
      cost: '$300–$450 per couple with wine',
      tip: 'Lunch only May–September. Must be booked 4+ weeks ahead through your hotel concierge — Da Paolino does not take walk-ins in peak season. Ask for a table under the densest lemon canopy.',
    },
    {
      icon: '🏛️',
      title: 'Walk to Villa Jovis',
      description: 'Tiberius\'s 1st-century imperial villa on the eastern cliff — a 45-minute walk uphill from the Piazzetta through residential lanes lined with bougainvillea. The villa ruins themselves are modest but the cliff-edge view from the Salto di Tiberio (where Tiberius supposedly threw his enemies onto the rocks below) is the most spectacular on the island.',
      cost: '$15 per couple entry',
      tip: 'Go at 8am before the heat. Bring water — there is none at the villa. Combine with breakfast at La Pigna garden cafe halfway up and lunch back at the Piazzetta on return.',
    },
    {
      icon: '☀️',
      title: 'Faraglioni Swim from Da Luigi',
      description: 'Da Luigi ai Faraglioni is the stabilimento (beach club) immediately beneath the famous rock stacks — you swim in the gap between the rocks, with the natural arch above you, in the most extraordinary blue water in Italy. The pasta-and-fish lunch on the terrace overlooking the rocks is essential.',
      cost: '$250–$400 per couple (sunbeds + lunch + boat transfer)',
      tip: 'Reserve a sunbed 2 weeks ahead in peak season. Take the Da Luigi private boat shuttle from Marina Piccola — it is the only graceful way down. Two hours of swimming, then lunch, then a swim and a nap, then home for an aperitivo.',
    },
    {
      icon: '🌅',
      title: 'Anacapri & Monte Solaro Chairlift',
      description: 'Anacapri is the quieter, higher town on the western half of the island — taxi up in 15 minutes. The single-seat chairlift to the summit of Monte Solaro (589m) takes 13 minutes each way, with the entire Bay of Naples opening below you. The summit view at sunset is the best on the island.',
      cost: '$30 per couple chairlift + $80 taxi',
      tip: 'Take the 5pm chairlift up, watch the sunset from the summit cafe, descend on the 6:30pm last lift. Dinner at Il Riccio (one Michelin star, on the cliff at Capri Palace Jumeirah) on the way back.',
    },
  ],
  months: [
    { month: 'Jan', weather: 'Cool, most hotels closed, quiet ferries', emoji: '⛅', crowds: 'Minimal', price: 'Lowest', verdict: 'Most hotels closed — locals only' },
    { month: 'Feb', weather: 'Cool, all luxury hotels closed', emoji: '⛅', crowds: 'Minimal', price: 'Lowest', verdict: 'Closed — do not visit' },
    { month: 'Mar', weather: 'Warming, hotels reopen late month', emoji: '🌤', crowds: 'Low', price: 'Low', verdict: 'Hotels reopening — limited dining' },
    { month: 'Apr', weather: 'Spring, mild, full season opens Easter', emoji: '🌤', crowds: 'Low-mod', price: 'Mid', verdict: 'Lovely from Easter onwards' },
    { month: 'May', weather: 'Ideal — warm, sea swimmable, calm', emoji: '☀️', crowds: 'Moderate', price: 'Mid-high', verdict: 'One of the two best months' },
    { month: 'Jun', weather: 'Warm, busy weekends, long days', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Excellent — book Da Paolino now' },
    { month: 'Jul', weather: 'Hot, day-trippers overwhelm Piazzetta', emoji: '🌡️', crowds: 'Peak', price: 'Very high', verdict: 'Too crowded — Piazzetta unwalkable midday' },
    { month: 'Aug', weather: 'Hottest, absolute peak crowds', emoji: '🌡️', crowds: 'Peak', price: 'Highest', verdict: 'The worst month — Italians + tourists' },
    { month: 'Sep', weather: 'Warm, sea warmest, crowds thinning', emoji: '☀️', crowds: 'Moderate', price: 'High', verdict: 'The best month — perfect everything' },
    { month: 'Oct', weather: 'Mild, golden, hotels close end of month', emoji: '🌤', crowds: 'Low-mod', price: 'Mid', verdict: 'Lovely early Oct — check closure dates' },
    { month: 'Nov', weather: 'Cool, most hotels closing', emoji: '⛅', crowds: 'Low', price: 'Low', verdict: 'Most hotels closed' },
    { month: 'Dec', weather: 'Cool, quiet, only Quisisana open', emoji: '⛅', crowds: 'Low', price: 'Low', verdict: 'Most hotels closed' },
  ],
  budgetTiers: [
    {
      label: 'Boutique Luxury',
      range: '$500–$1,000/night',
      gets: 'Beautiful boutique hotels in Anacapri or above Marina Grande. Sea views, pools, excellent breakfast. Capri has very few hotels under $500/night even in shoulder season.',
      example: 'Hotel Caesar Augustus (Anacapri), La Scalinatella',
    },
    {
      label: 'Premium',
      range: '$1,000–$2,500/night',
      gets: 'J.K. Place Capri, Capri Palace Jumeirah, Hotel Punta Tragara — the great cliff-and-pool hotels with Michelin dining, butler service, private boat shuttles.',
      example: 'J.K. Place Capri, Capri Palace Jumeirah, Punta Tragara',
    },
    {
      label: 'Ultra-Luxury',
      range: '$2,500+/night',
      gets: 'The signature suites at Capri Palace Jumeirah (Megaron with private pool) or J.K. Place (Penthouse Suite with private rooftop terrace and Faraglioni view) or Hotel Quisisana\'s historic Belle Époque suites.',
      example: 'Capri Palace Megaron Suite, J.K. Place Penthouse, Quisisana Royal Suite',
    },
  ],
  areas: [
    {
      name: 'Capri Town',
      bestFor: 'Heart of the action — Piazzetta, shopping, central',
      description: 'The main town on the eastern half of the island — the Piazzetta with its four famous cafes, the via Camerelle shopping street (Prada, Gucci, La DoubleJ), and most of the historic grande dame hotels (Quisisana, Punta Tragara, La Scalinatella). Touristy by day, calm and chic at night when the day-trippers leave on the last ferry.',
    },
    {
      name: 'Anacapri',
      bestFor: 'Quieter, higher, the Capri Palace and L\'Olivo',
      description: 'The second town on the western half — higher, cooler, quieter, with the chairlift up Monte Solaro and the Villa San Michele. Capri Palace Jumeirah and Caesar Augustus are here. The right base if you want maximum tranquility and the Piazzetta scene as a day-trip rather than a base.',
    },
    {
      name: 'Marina Grande',
      bestFor: 'Ferry arrival, J.K. Place, port views',
      description: 'The main port where the ferry from Sorrento and Naples arrives. J.K. Place Capri sits on the cliff directly above with the best port-and-bay views on the island. Da Paolino\'s lemon-tree lunch is a 10-minute walk away.',
    },
    {
      name: 'Marina Piccola & Faraglioni',
      bestFor: 'Beach clubs, swimming, Da Luigi',
      description: 'The southern coast facing the Faraglioni rocks — Da Luigi, La Fontelina, and the main island beach clubs (stabilimenti) are here. Punta Tragara sits directly above with the best Faraglioni views. Swimming from these clubs in summer is the defining Capri water experience.',
    },
  ],
  expertTips: [
    {
      tip: 'Stay 3–4 nights, not 7 — Capri is too small for more',
      detail: 'Capri rewards a concentrated 3–4 night stay combined with a longer Amalfi or Naples week. The whole island is 4 sq km — after four days you have walked everywhere worth walking. Combine: 4 nights Capri + 3 nights Positano, or 3 nights Capri + 4 nights Sorrento or Naples.',
    },
    {
      tip: 'Arrive on the first morning ferry, leave after the last evening ferry',
      detail: 'The day-tripper crush is 10am–5pm. Arriving from Sorrento on the 8:30am ferry and leaving on the 8:30pm ferry on your departure day buys you two extra mornings and evenings of empty Capri. The hotel will store your luggage between checkout and ferry.',
    },
    {
      tip: 'Use the funicular and walking, not taxis',
      detail: 'Capri taxis are the famous open-top stretched Volkswagen convertibles — €25 minimum for a 5-minute ride. The funicular from Marina Grande to the Piazzetta is €2 and runs every 15 minutes. Within Capri Town and Anacapri, walk everywhere — the island is built for it.',
    },
    {
      tip: 'Book Da Paolino, L\'Olivo, Il Riccio at least a month ahead',
      detail: 'The three essential Capri restaurant tables (Da Paolino under the lemon trees, L\'Olivo two Michelin stars at Capri Palace, Il Riccio one Michelin star on the cliff at Capri Palace) all book out a month in advance May–September. Have your hotel concierge book on your behalf the moment you confirm dates.',
    },
    {
      tip: 'Skip the Blue Grotto if the sea is choppy',
      detail: 'The Grotta Azzurra is genuinely magical when the sea is calm (clear blue water glowing from below) and utterly disappointing when it isn\'t (closed, or open with bad light). Check the morning before with your boat captain — if conditions are poor, swap for the White Grotto or the Faraglioni arch.',
    },
  ],
  packing: [
    { item: 'Italian sandals (Canfora-style)', why: 'Capri-style flat leather sandals are the local uniform — every honeymooner buys a pair at Canfora or Da Costanzo on the via Camerelle. Wear them in for a day before serious walking.' },
    { item: 'Smart resort wear', why: 'Capri dresses up. The Piazzetta cafes, Da Paolino, L\'Olivo, the Quisisana bar all expect linen-and-silk evening standards. No flip-flops or shorts in the Piazzetta after 7pm.' },
    { item: 'Wide-brim sun hat', why: 'The midday sun on the white limestone is genuinely punishing — and the photographs against the white walls with a wide-brim hat are the entire Capri aesthetic.' },
    { item: 'Swimwear (two sets) + cover-up', why: 'Pool morning + beach club afternoon means alternating two sets of swimwear. A linen kaftan or silk cover-up bridges from the beach club to the Piazzetta aperitivo without changing.' },
    { item: 'Compact day-bag', why: 'You will be moving from hotel to boat to beach club to restaurant — a small leather tote or canvas bag with sunscreen, hat, book and water is the essential.' },
    { item: 'Motion-sickness tablets', why: 'The Sorrento–Capri hydrofoil and the around-the-island boat tour both bounce in any wind. Even people who don\'t normally get seasick sometimes struggle. A single tablet 30 minutes before fixes it.' },
  ],
  guide: {
    getting: 'Fly into Naples Capodichino (NAP). Direct from London, Paris, Frankfurt, Munich (2–3h, easyJet, BA, Lufthansa). From the US: Delta JFK direct to Naples (9h) or connect via Rome FCO. From Naples airport: taxi to Sorrento harbour (50 min, €100) then hydrofoil to Capri (25 min, €25pp) — or private speedboat direct from Naples harbour to your hotel\'s arranged jetty (70 min, €500–€800).',
    where: 'J.K. Place Capri (modern, polished, above Marina Grande) for design-conscious couples. Capri Palace Jumeirah (Anacapri, L\'Olivo two Michelin stars) for spa and food. Hotel Punta Tragara (Le Corbusier-designed, Faraglioni views) for architecture lovers. Caesar Augustus (cliff-edge infinity pool, Anacapri) for the view. Hotel Quisisana for historic Belle Époque grandeur in Capri Town.',
    when: 'September is the perfect month — sea warmest, crowds thinning, weather still 25–28°C, hotels fully operational. May and early June equally excellent. Avoid July–August (day-tripper crush, oppressive heat). November to March most luxury hotels close entirely — check dates carefully before booking.',
  },
  localFood: 'Insalata caprese (named here, mozzarella di bufala + tomato + basil + Capri\'s own olive oil) at a Piazzetta cafe, ravioli capresi (filled with caciotta and marjoram) at Da Gemma in Capri Town, linguine ai ricci di mare (sea urchin) at Da Paolino, grilled total fish at Lido del Faro on the Anacapri cliffs, fresh mozzarella with a Falanghina white at lunch, torta caprese (dense chocolate-almond cake invented here) for dessert, and a granita di limone made from Capri lemons at any island cafe.',
  currency: 'Euro (EUR)',
  language: 'Italian (English in hotels and most restaurants)',
  timezone: 'UTC+1 (CET) / UTC+2 (CEST in summer)',
  seo: { title: 'Capri Honeymoon: 6 Cliffside Island Hotels (2026)', description: '6 Capri honeymoon hotels ranked. J.K. Place, Capri Palace, Quisisana, Punta Tragara. From $700/night. May–Oct verdicts.' },
}

export default meta
