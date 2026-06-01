import type { DestinationMeta } from '@/types/destination'

const meta: DestinationMeta = {
  hero: '/images/hotels/grand-hotel-villa-feltrinelli-lake-garda/hero.webp',
  tagline: 'Italy\'s largest lake, half the crowds of Como, twice the surface to play with — Sirmione, Lefay spa, Verona in an hour.',
  intro: 'Lake Garda is the Italian lake honeymoon for couples who\'ve read about Como and want something quieter, larger, and easier to combine with the rest of Italy. The lake is huge — 32 miles long, four distinct shores, climate that supports lemon trees and olive groves — and it sits 90 minutes from Milan and an hour from Verona, making it the easiest Italian lake to reach. The honeymoon-grade properties are real: Grand Hotel Villa Feltrinelli at Gargnano is Mussolini\'s former summer house turned 21-room ultra-luxe Relais & Châteaux; Lefay Resort & SPA Lago di Garda is Italy\'s most serious wellness retreat with three Michelin-recommended restaurants and a 4,300m² spa; Villa Cortine Palace on the Sirmione peninsula has a neoclassical setting that looks unreal in photographs. Add adults-only properties (Cape of Senses, Eala) for couples who don\'t want any children in the pool, plus a manageable food and wine scene (Bardolino, Lugana, Valpolicella), and Lake Garda becomes the most underrated romantic destination in northern Italy.',
  bestTime: 'May–Oct',
  flightFrom: '1h from London (Milan/Verona)',
  topExperience: 'Italian Lake Romance, Spas & Verona Pairing',
  perfectFor: [
    'Couples who want an Italian lake but with fewer crowds and lower prices than Como',
    'Wellness honeymooners — Lefay and Eala are Italy\'s two most serious spa destinations',
    'Those combining a city break (Milan/Verona) with a lake — Garda is the easiest combination',
    'Adults-only seekers — Garda has more genuine adults-only luxury than Como',
    'Couples who want easy day trips to Venice, Verona, Mantua, and the Dolomites',
  ],
  skipIf: [
    'You need overwater bungalows or tropical heat — this is alpine lake, not the Maldives',
    'You\'re travelling in August — German and Italian holidaymakers fill the lake; book May, June, September, October instead',
    'You want a Como-style celebrity scene — Garda is more low-key, larger, more family-friendly at the lower tiers',
    'You hate ferries — getting between Garda towns is most pleasant by lake boat; you\'ll use them constantly',
  ],
  experiences: [
    {
      icon: '🛥️',
      title: 'Sirmione & the Grotte di Catullo',
      description: 'Sirmione sits on a long thin peninsula extending into the southern lake, fortified at the entrance by the Scaligero Castle (13th century, intact). At the tip stand the Grotte di Catullo, the ruins of a 1st-century Roman villa attributed to the poet. Walk the peninsula at golden hour for one of Italy\'s most romantic strolls.',
      cost: '$30 entrance + lunch, $80–$120 per couple',
      tip: 'Stay at Villa Cortine Palace inside the peninsula — guests get private access to the headland gardens before the day-trippers arrive at 10am.',
    },
    {
      icon: '🧖',
      title: 'A Day at Lefay Spa',
      description: 'Lefay Resort & SPA Lago di Garda at Gargnano is the most serious wellness destination on the lake — 4,300m² of saltwater pools, Finnish saunas, herbal steam rooms, traditional Chinese medicine, and a Michelin-recommended fine dining room. Non-resident day passes available if you\'re staying elsewhere.',
      cost: '$200–$300 day pass; $1,500+/night residential',
      tip: 'Book the Salus per Aquam programme if staying — three full days of guided wellness routines. Couples\' suite treatments need to be booked at the time of room reservation.',
    },
    {
      icon: '🍇',
      title: 'Bardolino & Valpolicella Wine Day',
      description: 'The eastern shore of Lake Garda is the heart of Bardolino DOC and the Valpolicella wine region. A private driver-guide day visiting 2–3 producers (Allegrini for Amarone, Zenato for Lugana, Guerrieri Rizzardi for Bardolino), with lunch at a vineyard restaurant.',
      cost: '$400–$700 per couple (driver + tastings + lunch)',
      tip: 'Avoid the cooperative cantinas in central Bardolino town — they\'re tourist traps. The serious producers are 15–30 minutes inland in the Valpolicella hills.',
    },
    {
      icon: '🎭',
      title: 'Verona Opera at the Arena',
      description: 'Verona is one hour from Sirmione by car or train. From mid-June to early September the Verona Opera Festival stages Aida, Carmen, and Turandot in the Roman Arena (1st century AD, 15,000 seats, open air). One of Europe\'s great cultural experiences.',
      cost: '$80–$300 per ticket',
      tip: 'Book seats on the stone steps for atmosphere, or rented cushioned poltronissime if your back wants comfort. Pre-book dinner at Antica Bottega del Vino before the show.',
    },
    {
      icon: '🍋',
      title: 'Limone & the West-Shore Drive',
      description: 'The Gardesana Occidentale (SS45) along the western shore is one of Italy\'s most dramatic coastal drives — limestone cliffs falling into the lake, dozens of tunnels, lemon groves on terraces above the road. Drive from Salò north to Limone sul Garda, lunch on the lake terrace, return by ferry.',
      cost: '$50–$100 (lunch + ferry)',
      tip: 'Limone\'s historic lemon groves (limonaia) are open to visit. Park outside town and walk in — the centre is car-free and parking near the lake is expensive.',
    },
  ],
  months: [
    { month: 'Jan', weather: 'Cool, quiet, alpine background', emoji: '⛅', crowds: 'Minimal', price: 'Low', verdict: 'Many closures — skip' },
    { month: 'Feb', weather: 'Cool, sunny days possible', emoji: '⛅', crowds: 'Minimal', price: 'Low', verdict: 'Limited operations' },
    { month: 'Mar', weather: 'Warming, almond blossom', emoji: '🌤', crowds: 'Low', price: 'Mid', verdict: 'Shoulder — Lefay open, lake quiet' },
    { month: 'Apr', weather: 'Spring proper, gardens blooming', emoji: '🌤', crowds: 'Low-mod', price: 'Mid', verdict: 'Lovely — Easter aside, still quiet' },
    { month: 'May', weather: 'Warm (22°C), ideal', emoji: '☀️', crowds: 'Moderate', price: 'Mid-high', verdict: 'One of the two best months' },
    { month: 'Jun', weather: 'Warm (26°C), opera begins', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Perfect — book Arena early' },
    { month: 'Jul', weather: 'Hot (30°C), busy', emoji: '🌡️', crowds: 'Peak', price: 'High', verdict: 'Busy but workable, hot lake swims' },
    { month: 'Aug', weather: 'Hottest, August holidays', emoji: '🌡️', crowds: 'Peak', price: 'Highest', verdict: 'Avoid — Italian/German peak month' },
    { month: 'Sep', weather: 'Warm (24°C), lake still swimmable', emoji: '☀️', crowds: 'Moderate', price: 'High', verdict: 'The secret best month' },
    { month: 'Oct', weather: 'Cooling, golden, harvest', emoji: '🍂', crowds: 'Low-mod', price: 'Mid', verdict: 'Excellent — fewer crowds, full operations' },
    { month: 'Nov', weather: 'Cool, some closures begin', emoji: '⛅', crowds: 'Low', price: 'Low', verdict: 'Limited — skip' },
    { month: 'Dec', weather: 'Cool, Christmas atmosphere', emoji: '🎄', crowds: 'Low', price: 'Low-mid', verdict: 'Romantic and quiet at Lefay' },
  ],
  budgetTiers: [
    {
      label: 'Boutique',
      range: '$300–$600/night',
      gets: 'Excellent lake-view boutique hotels with pool and breakfast. Garda has serious volume of high-quality 4-star at this tier — better value than Como.',
      example: 'Hotel du Lac et du Parc (Riva), Cape of Senses (Torri del Benaco — adults-only)',
    },
    {
      label: 'Luxury Resort',
      range: '$600–$1,500/night',
      gets: 'Lefay (full wellness), Eala (adults-only lakeside), Villa Cortine (palace setting). The honeymoon sweet spot at Lake Garda.',
      example: 'Lefay Resort, Eala My Lakeside Dream, Villa Cortine Palace',
    },
    {
      label: 'Ultra-Luxury',
      range: '$1,500+/night',
      gets: 'Grand Hotel Villa Feltrinelli (Relais & Châteaux, 21 rooms only) — the most exclusive address on the lake. Plus Lefay\'s suites.',
      example: 'Grand Hotel Villa Feltrinelli, Lefay royal suites',
    },
  ],
  areas: [
    {
      name: 'Sirmione (Southern Peninsula)',
      bestFor: 'Most iconic location — peninsula, castle, Roman ruins',
      description: 'Sirmione juts into the lake on a long thin peninsula at the south end. Cars stop at the castle; the village is car-free beyond. Villa Cortine Palace inside the peninsula and the thermal spas (Aquaria, Catullo) are the draws. Easy day trip to Verona (45 min) and Mantua (1h).',
    },
    {
      name: 'Gargnano & Western Riviera',
      bestFor: 'Quietest, most dramatic — limestone cliffs, lemon groves',
      description: 'The western shore (Sirmione → Limone) is the most scenic with the Lefay resort above Gargnano, Grand Hotel Villa Feltrinelli on the lakeshore, and the cliffside Gardesana road. Far quieter than the southern shore. The honeymoon side of the lake.',
    },
    {
      name: 'Torri del Benaco & Eastern Riviera',
      bestFor: 'Adults-only options, wine country access',
      description: 'The eastern shore (Lazise → Malcesine) faces the western cliffs across the lake. More open, lower-key, with Cape of Senses (adults-only, Torri del Benaco) and Bardolino DOC wine country immediately behind. Easy access to Verona and Valpolicella.',
    },
    {
      name: 'Limone & Riva (Northern Lake)',
      bestFor: 'Alpine drama — mountains rising straight from water',
      description: 'The northern lake narrows between cliffs that rise 2,000m straight from the water — most dramatic when arriving from the south by ferry. Limone (lemon terraces) and Riva del Garda (alpine town under Monte Rocchetta) are the bases. Easy 1h drive to the Dolomites.',
    },
  ],
  expertTips: [
    {
      tip: 'Lake Garda is huge — pick ONE shore, then add Verona',
      detail: 'Trying to "see all of Garda" wastes the honeymoon driving in circles. Pick the west (Sirmione → Limone) or east (Bardolino → Malcesine) and stay put. Use the ferry network between towns, not the car. Add 1–2 nights in Verona at start or end.',
    },
    {
      tip: 'Use the lake ferry, not the car, between towns',
      detail: 'The Navigazione Lago di Garda runs hydrofoils and ferries between every major town. Faster than driving, infinitely more pleasurable. A day-pass ticket lets you hop on and off all day. The car stays at the hotel.',
    },
    {
      tip: 'For adults-only: Cape of Senses or Eala (not Lefay)',
      detail: 'Lefay welcomes families in summer (though the spa is adults-only). For a genuinely adults-only honeymoon, Cape of Senses at Torri del Benaco or Eala My Lakeside Dream at Limone are the two real options on the lake.',
    },
    {
      tip: 'Fly into Verona (VRN), not Milan',
      detail: 'Verona airport is 30 minutes from Sirmione. Milan Malpensa is 1h 45min. Bergamo (BGY) at 45 min is the cheap alternative. Direct flights from London, Frankfurt, Paris, Amsterdam to all three.',
    },
    {
      tip: 'Book the Arena di Verona opera 4–6 months ahead',
      detail: 'The Verona Opera Festival (mid-June to early September) sells out the best Aida and Carmen nights months ahead. Book through the official site (arena.it). Avoid resale sites with markups.',
    },
  ],
  packing: [
    { item: 'Smart-casual evening wear', why: 'Lefay, Villa Feltrinelli, and Villa Cortine all observe an evening dress standard — collared shirt and linen trousers for him, summer dress for her. No flip-flops at dinner.' },
    { item: 'Swimwear for lake + pool', why: 'The lake is swimmable May–October. Most hotels have pools too. Pack two swim outfits to alternate.' },
    { item: 'Walking shoes with grip', why: 'Sirmione\'s ancient cobbles, Limone\'s steep alleys, and the Catullo ruins all benefit from grip-soled shoes. Espadrilles for evening; trainers or sandals with strap for day.' },
    { item: 'Light sun hat and sunglasses', why: 'Lake reflection at midday in June–August is intense. A wide-brim hat protects face and looks elegant on the boat.' },
    { item: 'Light cardigan or shawl', why: 'Lake evenings cool sharply, especially May, September, and October. A linen cardigan or pashmina works for dinner outdoors.' },
    { item: 'Adapter (European two-pin) and power bank', why: 'Italian sockets are mainly European Type F. UK and US travellers need an adapter. Boat days drain phones fast — a power bank earns its place.' },
  ],
  guide: {
    getting: 'Fly into Verona Villafranca (VRN) for the closest airport — 30 min to Sirmione. Bergamo Orio al Serio (BGY) is 45 min and has Ryanair routes from across Europe. Milan Malpensa (MXP) is 1h 45min by car. From the US: connect via Milan or Frankfurt. Hire car at the airport (the lake hotels need car access; ferries link towns).',
    where: 'Grand Hotel Villa Feltrinelli (Gargnano) for ultra-luxury 21-room exclusivity. Lefay Resort & SPA Lago di Garda for the full wellness honeymoon. Villa Cortine Palace (Sirmione) for the most iconic location. Cape of Senses or Eala for adults-only. Hotel du Lac et du Parc (Riva) for alpine drama at the north end.',
    when: 'May, June, September, and October are the perfect months — warm enough to swim, not too hot, full operations, manageable crowds. July is busy but workable. Avoid August (Italian/German peak holidays). November–March is too quiet for most honeymoons (Lefay remains excellent year-round).',
  },
  localFood: 'Lake fish (perch, trout, lavarello) grilled simply at any lakeside trattoria, risotto al tastasal (Veronese sausage risotto), bigoli pasta with anchovy and onion, Bardolino Chiaretto rosé on the terrace at lunch, tasting menu at La Veranda del Color in Bardolino or Casa Perbellini in Verona (two Michelin stars), olive oil from Garda DOP olives (the northernmost olive oil in the world), Amarone della Valpolicella with the local Monte Veronese cheese.',
  currency: 'Euro (EUR)',
  language: 'Italian (English in hotels, German common around the lake)',
  timezone: 'UTC+1 (CET) / UTC+2 (CEST in summer)',
  seo: { title: 'Lake Garda Honeymoon: 6 Italian Lake Hotels Scored 2026', description: '6 Lake Garda hotels ranked. Villa Feltrinelli, Lefay, Villa Cortine. From $400/night. May-Oct verdicts.' },
}

export default meta
