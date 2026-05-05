import type { DestinationMeta } from '@/types/destination'

const meta: DestinationMeta = {
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
}

export default meta
