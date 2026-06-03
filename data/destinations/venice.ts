import type { DestinationMeta } from '@/types/destination'

const meta: DestinationMeta = {
  hero: '/images/hotels/aman-venice/hero.webp',
  tagline: 'Palace hotels on the Grand Canal, gondolas at dawn — the most romantic city in the world.',
  intro: 'Venice is the only city on earth where you can step out of your palace hotel onto a marble water-gate and into a private wooden launch that will drop you at dinner. 118 islands, 400 bridges, no cars, a thousand years of Byzantine, Gothic and Renaissance architecture, and an evening light on the lagoon water that has driven painters mad since Canaletto. The Aman Venice occupies a 16th-century palazzo on the Grand Canal with two original Tiepolo frescoes. The Belmond Cipriani has the only swimming pool in Venice. The Gritti Palace looks across at Santa Maria della Salute. This is the world capital of the wedding-night arrival by boat, and no other city even comes close.',
  bestTime: 'Apr–Jun & Sep–Oct',
  flightFrom: '2h from northern Europe',
  topExperience: 'Palace Hotels & Gondolas at Dawn',
  perfectFor: [
    'Couples who want maximum atmosphere and culture concentrated into 4–5 nights',
    'Architecture, art and history obsessives — every corner is a museum',
    'Short-haul travellers from northern Europe seeking instant romantic impact',
    'Foodies hunting cicchetti bars, lagoon seafood, and the bacaro tradition',
    'Couples who would rather walk and ride boats than drive or fly between resorts',
  ],
  skipIf: [
    'You need a swimming pool or beach as part of every day',
    'You\'re travelling in August — heat, mosquitoes, cruise ships and crowds peak',
    'You\'re visiting Nov–Jan when acqua alta floods can isolate ground floors',
    'You want budget travel — Venice is one of the most expensive cities in Europe',
  ],
  experiences: [
    {
      icon: '🚤',
      title: 'Private Water Taxi to Dinner',
      description: 'A mahogany Limousine motoscafo collects you from the hotel water-gate and threads through the inner canals to a restaurant tucked behind a private quay. Returning across the lagoon at midnight with San Giorgio Maggiore floodlit is the single most romantic 12 minutes available anywhere in Europe.',
      cost: '$120–$200 per couple each way',
      tip: 'Always book through the hotel concierge — the night-rate private taxis at the public stands routinely overcharge tourists. Ask for Venezia Taxi or Consorzio Motoscafi.',
    },
    {
      icon: '🛶',
      title: 'Gondola at Dawn (7am)',
      description: 'A gondola at 7am — before the tour groups, before the cruise day-trippers, with mist still rising off the side canals and the only sound the slap of water and the oar — is a completely different experience from the daytime version. Ask the gondolier to take the back routes through Castello and San Polo.',
      cost: '€90 (40 minutes, no music), tip €20',
      tip: 'Book your gondolier the evening before through your hotel — meet at the Bacino Orseolo stand behind Piazza San Marco. Avoid the singing-gondolier package; the silence is the point.',
    },
    {
      icon: '🥂',
      title: 'Cicchetti Crawl in Cannaregio',
      description: 'A guided evening walk through Cannaregio\'s bacari — the standing-room wine bars where Venetians actually eat. Baccalà mantecato on grilled polenta, sarde in saor, a glass of ombra. Five bars, two hours, a real taste of Venice that no hotel restaurant delivers.',
      cost: '$120–$180 per couple with guide',
      tip: 'Go on a Tuesday, Wednesday or Thursday — Mondays many bacari close, weekends fill with locals and you can\'t move. Start at All\'Arco near Rialto and end at Vino Vero on Fondamenta della Misericordia.',
    },
    {
      icon: '🎭',
      title: 'Private After-Hours Doge\'s Palace',
      description: 'A "Secret Itineraries" tour after public closing — the Doge\'s private apartments, the torture chamber, Casanova\'s prison cell in the Piombi, and the Bridge of Sighs from the side most tourists never see. The Palace empty of crowds, with your own guide, is genuinely overwhelming.',
      cost: '$300–$450 per couple (private guide + entry)',
      tip: 'Book at least three months out via the official Musei Civici site — only a handful of after-hours slots release each week. Hotel concierges at Aman, Gritti and Cipriani have priority access.',
    },
    {
      icon: '🏝️',
      title: 'Lagoon Day: Torcello, Burano, Murano',
      description: 'A private wooden bragozzo for the day across the northern lagoon. Torcello (the original Venice, 7th-century cathedral with Byzantine mosaics), lunch at Locanda Cipriani, then Burano (lacework and painted fisherman\'s cottages) and Murano (glass) on the way back. An entirely different rhythm from the city.',
      cost: '$700–$1,200 per couple (full day, captain, lunch extra)',
      tip: 'Lunch at Locanda Cipriani on Torcello must be reserved a week ahead. Ask for the garden table. The bragozzo is incomparably better than the public vaporetto — quiet, slow, and you can swim off it in summer.',
    },
  ],
  months: [
    { month: 'Jan', weather: 'Cold, foggy, acqua alta possible', emoji: '🌫️', crowds: 'Low', price: 'Low', verdict: 'Atmospheric but damp — Carnevale draws crowds late-month' },
    { month: 'Feb', weather: 'Cold, Carnevale crowds, magical light', emoji: '🎭', crowds: 'High in Carnevale', price: 'High in Carnevale', verdict: 'Carnevale is unforgettable — book 6+ months ahead' },
    { month: 'Mar', weather: 'Warming, fresh, clearer', emoji: '⛅', crowds: 'Low-mod', price: 'Mid', verdict: 'Lovely shoulder month, full operations resume' },
    { month: 'Apr', weather: 'Spring, mild, sometimes wet', emoji: '🌤', crowds: 'Moderate', price: 'Mid-high', verdict: 'Excellent — gardens open, lagoon clear' },
    { month: 'May', weather: 'Warm, sunny, best light', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'One of the two best months — book early' },
    { month: 'Jun', weather: 'Warm, long evenings, Biennale years', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Beautiful but busy — Biennale adds energy' },
    { month: 'Jul', weather: 'Hot, humid, mosquitoes', emoji: '🌡️', crowds: 'Peak', price: 'Very high', verdict: 'Too hot and too busy — skip if possible' },
    { month: 'Aug', weather: 'Hottest, locals leave, smell intensifies', emoji: '🌡️', crowds: 'Peak', price: 'Very high', verdict: 'The worst month — genuinely avoid' },
    { month: 'Sep', weather: 'Warm, golden, Film Festival energy', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'The best month — perfect weather, thinner crowds' },
    { month: 'Oct', weather: 'Mild, autumn light, quieter', emoji: '🌤', crowds: 'Moderate', price: 'Mid-high', verdict: 'Secret best month for value and light' },
    { month: 'Nov', weather: 'Cool, foggy, acqua alta risk', emoji: '🌫️', crowds: 'Low', price: 'Low', verdict: 'Moody and atmospheric — bring tall boots' },
    { month: 'Dec', weather: 'Cold, festive, occasional flooding', emoji: '🎄', crowds: 'Low-mod', price: 'Mid', verdict: 'Romantic at Christmas, expect some flooding' },
  ],
  budgetTiers: [
    {
      label: 'Boutique Luxury',
      range: '$500–$900/night',
      gets: 'Beautiful boutique palazzo hotels in San Marco, Dorsoduro or Cannaregio. Canal views, excellent breakfast, water-gate access.',
      example: 'Ca\'Sagredo, Palazzo Venart, Hotel Flora',
    },
    {
      label: 'Premium',
      range: '$900–$2,200/night',
      gets: 'The Gritti Palace, Hotel Danieli, St. Regis Venice — the great historic Grand Canal palaces with Murano chandeliers and butler service.',
      example: 'The Gritti Palace, Hotel Danieli, St. Regis Venice',
    },
    {
      label: 'Ultra-Luxury',
      range: '$2,200+/night',
      gets: 'Aman Venice (24 rooms only, two Tiepolo frescoes) or Belmond Cipriani (Olympic pool on Giudecca, private motor launch every 15 minutes). The pinnacle of European hotel-keeping.',
      example: 'Aman Venice, Belmond Hotel Cipriani',
    },
  ],
  areas: [
    {
      name: 'San Marco',
      bestFor: 'First-time honeymooners — central, iconic, on the Grand Canal',
      description: 'The heart — Piazza San Marco, the Doge\'s Palace, the Basilica, and the entire eastern flank of the Grand Canal. The Gritti Palace, Danieli, and St. Regis all sit here. Touristy by day, calm and astonishing at night when the day-trippers leave.',
    },
    {
      name: 'Dorsoduro',
      bestFor: 'Art lovers — quieter, residential, Peggy Guggenheim',
      description: 'Across the Accademia bridge from San Marco — the art student quarter, with the Peggy Guggenheim Collection, the Accademia gallery, and the Santa Maria della Salute at its tip. Quieter sestiere, excellent bacari, more locals than tourists in the evening.',
    },
    {
      name: 'Cannaregio',
      bestFor: 'Real-Venice feel, best cicchetti, Jewish Ghetto',
      description: 'The northern sestiere — long fondamentas along sunny canals, the original Ghetto (the word was coined here), the best cicchetti bars in the city. Aman Venice and Ca\'Sagredo sit on its Grand Canal edge; the inner streets feel residential and authentic.',
    },
    {
      name: 'Giudecca',
      bestFor: 'Maximum tranquility — Cipriani and the only pool in Venice',
      description: 'The long thin island across the canal from Dorsoduro. The Belmond Hotel Cipriani has its private motoscafo to San Marco every 15 minutes — you stay on a quiet residential island with the Olympic pool, gardens, and tennis courts, then are whisked to dinner in 4 minutes. The most peaceful Venice base.',
    },
  ],
  expertTips: [
    {
      tip: 'Arrive by private water taxi from Marco Polo — never by bus',
      detail: 'The Alilaguna public boat takes 90 minutes; the airport bus drops you at Piazzale Roma where you still need a vaporetto. A private water taxi from the airport directly to your hotel\'s water-gate is €130–€160 and takes 25 minutes. It is also the most romantic arrival on earth — book through your hotel.',
    },
    {
      tip: 'Stay at least 4 nights — Venice rewards slowness',
      detail: 'The day-trip Venice is the worst Venice. Stay 4–5 nights minimum and use mornings before 10am and evenings after 6pm — the city empties, the light becomes extraordinary, and you can finally walk Piazza San Marco without dodging selfie sticks.',
    },
    {
      tip: 'Avoid the restaurants on the main tourist routes — without exception',
      detail: 'Any restaurant with a tout outside, a multilingual menu, or pictures of food is a tourist trap. The good restaurants — Al Covo, Osteria alle Testiere, Vini da Gigio, La Zucca — are tucked into back calli, take reservations, and do not display menus in English. Have your concierge book.',
    },
    {
      tip: 'Acqua alta is a feature, not a disaster — book the right floor',
      detail: 'November to January, exceptional tides can flood Piazza San Marco for an hour or two. Hotels run raised walkways and ground floors are designed for it. Book a room above the ground floor between November and January, bring waterproof boots, and treat any flooding as the Venetian experience that it is.',
    },
    {
      tip: 'Skip Murano — buy your glass at Berengo Studio or in San Marco',
      detail: 'The "free boat to Murano" hustle that begins outside San Marco ends with high-pressure sales at a single factory the operator is paid by. If you want real glass, visit Berengo Studio gallery on Murano or buy from L\'Isola in San Marco — the contemporary Venini and Carlo Moretti pieces are the best in the world.',
    },
  ],
  packing: [
    { item: 'Comfortable flat shoes with grip', why: 'You will walk 8–12km a day on uneven marble and stone, up and down hundreds of bridge steps. Heels are genuinely dangerous; sandals slip on wet pavement.' },
    { item: 'Smart evening wear', why: 'Dinner at La Sponda, Aman Venice, or Quadri requires jacket-and-dress standard. Cicchetti bars are casual; the great restaurants are not.' },
    { item: 'Compact umbrella', why: 'Spring and autumn showers arrive without warning. A small umbrella in a cross-body bag saves a $150 hotel one.' },
    { item: 'Mosquito repellent (May–Sept)', why: 'The lagoon breeds tiger mosquitoes. The Cipriani gardens and any canal-facing balcony at dusk will be a feeding frenzy without DEET-based repellent.' },
    { item: 'Small cross-body bag', why: 'Pickpockets work the vaporetto stops at Rialto and San Marco professionally. A zipped cross-body bag worn in front avoids 95% of the risk.' },
    { item: 'Power adapter (Type F/L)', why: 'Italian sockets accept both Schuko (F) and three-pin Italian (L). A dual-shape adapter avoids hunting for the right socket in an old palazzo.' },
  ],
  guide: {
    getting: 'Fly into Venice Marco Polo (VCE) — direct flights from all major European hubs (BA, easyJet, Lufthansa, Vueling, KLM, 1.5–2.5h) and from the US (Delta JFK, United EWR, American PHL, ~8h). From the airport: private water taxi direct to your hotel water-gate (25 min, €130–€160) — the only correct option for honeymooners. Alternatively Alilaguna public boat to San Marco (75 min, €15pp).',
    where: 'Aman Venice (Cannaregio Grand Canal) or Belmond Cipriani (Giudecca) for the ultra-luxury pinnacle. The Gritti Palace, Hotel Danieli, or St. Regis Venice for the great historic Grand Canal palaces. Ca\'Sagredo for boutique scale on the Grand Canal at a lower price.',
    when: 'September is the perfect month — warm, golden light, Film Festival energy on the Lido, manageable crowds. May–June are equally excellent. October is the quiet secret. Avoid July–August (heat, crowds, mosquitoes) and November–January (acqua alta, fog, closures). Carnevale in February is unforgettable but books out 6+ months ahead.',
  },
  localFood: 'Cicchetti and an ombra (small glass of wine) standing at the bar at All\'Arco near Rialto, baccalà mantecato on grilled white polenta, sarde in saor (sweet-and-sour sardines), risotto al nero di seppia at Vini da Gigio in Cannaregio, lagoon moeche (soft-shell crab, spring and autumn only), and a Bellini at Harry\'s Bar — at least once, because Giuseppe Cipriani invented it there in 1948.',
  currency: 'Euro (EUR)',
  language: 'Italian (English in hotels and most restaurants)',
  timezone: 'UTC+1 (CET) / UTC+2 (CEST in summer)',
  seo: { title: 'Venice Honeymoon: 6 Grand Canal Palace Hotels (2026)', description: '6 Venice palace hotels ranked. Aman, Cipriani, Gritti, Danieli. From $700/night. May–Sep verdicts, real costs, itineraries.' },
}

export default meta
