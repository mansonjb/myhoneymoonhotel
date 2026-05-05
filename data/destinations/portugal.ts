import type { DestinationMeta } from '@/types/destination'

const meta: DestinationMeta = {
hero: '/images/hotels/sublime-comporta-portugal/hero.webp',
tagline: 'Atlantic surf, cork forests, and world-class wine — Europe\'s most underrated honeymoon destination.',
intro: 'Portugal punches far above its weight as a honeymoon destination. Lisbon has the most beautiful light of any European capital — the fado evenings, the tiles, the views from the miradouros. The Douro Valley is arguably the most scenic river wine region in Europe, with quintas producing port and red wine on impossibly steep terraced hillsides. Comporta is what the Algarve was in 1970 — rice paddies, cork oak forests, and long empty Atlantic beaches where wild horses sometimes walk at low tide. Madeira is subtropical year-round with dramatic volcanic scenery. Portugal offers four completely different honeymoon experiences within a 3-hour flight of most of Europe, at prices 30–40% below comparable Italian or French alternatives.',
bestTime: 'May–Oct',
flightFrom: '2–3h from northern Europe',
topExperience: 'Beach & Wine Country',
perfectFor: [
  'Wine lovers — the Douro Valley and Alentejo are producing some of Europe\'s most exciting wines',
  'Couples who want cultural depth plus great beaches without Italian or French prices',
  'Short-haul European honeymooners who want genuine Atlantic wildness not Mediterranean crowds',
  'Food lovers: bacalhau, pastel de nata, percebes, petiscos culture is extraordinary',
  'Surf-interested couples — the Atlantic southwest coast has year-round surf from Comporta to Sagres',
],
skipIf: [
  'Warm Mediterranean sea temperatures are essential — Atlantic Portugal can be cool even in summer',
  'You want a fixed sun-beach resort experience — Portugal rewards exploration over staying put',
  'You\'re visiting July–August and expect Algarve resorts to be quiet — they\'re extremely busy',
  'Long days by the pool with no cultural programme appeals — Portugal rewards the curious',
],
experiences: [
  {
    icon: '🍷',
    title: 'Douro Valley Wine Quinta Visit',
    description: 'Drive the N222 — voted the most scenic road in Portugal — stopping at two or three quintas for private tastings overlooking the terraced vineyard valley. Quinta do Crasto, Quinta do Vale Meão, and Graham\'s are outstanding. Stay overnight in a quinta guest house.',
    cost: '€30–€80 per person for tastings',
    tip: 'Book a private tasting (€50–100 for two) rather than a drop-in visit — the experience is incomparably more intimate and you taste older vintages that aren\'t available at the bar.',
  },
  {
    icon: '🐚',
    title: 'Percebes and Petiscos, Lisbon',
    description: 'Start at the Mercado da Ribeira for a petiscos crawl — tiny portions of sardine toast, presunto ham, cheeses, and bacalhau croquettes. End at a taberna for percebes (goose barnacles). The most distinctive thing you\'ll eat in Portugal and one of the most delicious.',
    cost: '€40–€80 per couple for a full petiscos evening',
    tip: 'Taberna da Rua das Flores and Tasca do Chico (which also has live fado) are the best tables for this experience. Book a week ahead — both are tiny.',
  },
  {
    icon: '🏖️',
    title: 'Comporta Beach on Horseback',
    description: 'The wild Atlantic beaches of Comporta are backed by cork forests and rice paddies. Several stables offer guided horse treks along the shoreline at dawn or sunset — a completely different kind of beach experience with nobody else in sight for kilometres.',
    cost: '€60–€100 per person',
    tip: 'Stay at Sublime Comporta hotel — their stables offer the finest guided beach rides and the hotel itself is set in a cork forest with extraordinary design.',
  },
  {
    icon: '🎶',
    title: 'Fado Evening in Alfama, Lisbon',
    description: 'A proper fado casa in Lisbon\'s Alfama neighbourhood — a fadista singing the melancholy Portuguese soul music in a whitewashed room with a 20-person audience, accompanied by Portuguese guitar and viola baixo. Genuinely moving. Not a tourist show.',
    cost: '€40–€80 per person including dinner',
    tip: 'Tasca do Chico (6 tables, book 2 weeks ahead), Clube de Fado, or A Baiuca are the authentic experiences. The restaurants in the main tourist zone around Restauradores are performative — avoid them.',
  },
  {
    icon: '⛵',
    title: 'Sailing the Douro to Porto',
    description: 'A half-day or full-day sailing trip from the Douro\'s upper valley downriver through the gorge to Porto, passing through locks and under the famous bridges. The water is calm, the landscape is dramatic, and arriving into Porto\'s riverfront by boat is a genuinely special entrance.',
    cost: '€80–€150 per person (group cruise) or €400 (private charter)',
    tip: 'Douro Azul and Barca Douro run excellent cruises. For honeymoon purposes, the private charter for two people is worth every euro — the intimacy of a personal skipper on a 4-hour river journey is incomparable.',
  },
],
months: [
  { month: 'Jan', weather: 'Mild but rainy, green', emoji: '🌦', crowds: 'Very low', price: 'Very low', verdict: 'Only for Madeira escape' },
  { month: 'Feb', weather: 'Almond blossom in Algarve', emoji: '🌸', crowds: 'Low', price: 'Low', verdict: 'Beautiful if you avoid beach' },
  { month: 'Mar', weather: 'Warming, wildflowers, some rain', emoji: '🌱', crowds: 'Low', price: 'Low', verdict: 'Excellent for wine region touring' },
  { month: 'Apr', weather: 'Warm, green, excellent light', emoji: '🌤', crowds: 'Moderate', price: 'Mid', verdict: 'Superb for Lisbon and Douro' },
  { month: 'May', weather: 'Warm, dry, near-perfect', emoji: '☀️', crowds: 'Moderate', price: 'Mid', verdict: 'Best month overall' },
  { month: 'Jun', weather: 'Hot, santos populares festivals', emoji: '☀️', crowds: 'Moderate-high', price: 'Mid-high', verdict: 'Excellent — festas season' },
  { month: 'Jul', weather: 'Hot, dry, peak season', emoji: '☀️', crowds: 'Peak', price: 'High', verdict: 'Algarve very crowded, Comporta good' },
  { month: 'Aug', weather: 'Hottest, very busy', emoji: '☀️', crowds: 'Peak', price: 'Highest', verdict: 'Algarve heaving, go to Comporta' },
  { month: 'Sep', weather: 'Warm, grape harvest, excellent', emoji: '☀️', crowds: 'Moderate', price: 'Mid-high', verdict: 'Best for wine country — harvest season' },
  { month: 'Oct', weather: 'Warm, quieter, surf builds', emoji: '🌤', crowds: 'Low-mod', price: 'Mid', verdict: 'Superb for surfing and culture' },
  { month: 'Nov', weather: 'Mild, rainy, very quiet', emoji: '🌦', crowds: 'Low', price: 'Low', verdict: 'Good value, not beach weather' },
  { month: 'Dec', weather: 'Mild, rainy, Christmas in Porto', emoji: '🌨', crowds: 'Low-mod', price: 'Low-mid', verdict: 'Porto Christmas is magical' },
],
budgetTiers: [
  {
    label: 'Boutique Portugal',
    range: '€150–€350/night',
    gets: 'Beautifully designed boutique hotel — wine estate quinta, Lisbon palacete, or Comporta design hotel. Outstanding quality-to-price ratio versus comparable European destinations.',
    example: 'Quinta da Mata, Bairro Alto Hotel (Lisbon), Herdade da Comporta',
  },
  {
    label: 'Premium',
    range: '€350–€700/night',
    gets: 'Award-winning hotel with pool, exceptional food, and memorable setting. Douro valley vistas or Comporta cork forest — genuinely world-class at mid-European prices.',
    example: 'Sublime Comporta, Six Senses Douro Valley, Bela Vista Hotel (Algarve)',
  },
  {
    label: 'Ultra-Luxury',
    range: '€700–€2,000+/night',
    gets: 'Private villa service, estate exclusivity, multi-Michelin dining. Portugal at this tier rivals anywhere in Europe at 30% lower prices than Tuscany or Provence.',
    example: 'Palácio Belmonte (Lisbon), Vila Vita Parc (Algarve), Monchique Resort',
  },
],
areas: [
  {
    name: 'Lisbon',
    bestFor: 'Culture, fado, food, city romance',
    description: 'Europe\'s most beautiful small capital — seven hills of azulejo-tiled houses, viewpoint terraces, and the best food scene in southern Europe after San Sebastián. Combine a Lisbon stay with Sintra day trip and Cascais beach for a complete city-beach honeymoon.',
  },
  {
    name: 'Douro Valley',
    bestFor: 'Wine country, river landscapes, quintas',
    description: 'The most dramatic wine region in Europe — impossibly steep terraced vineyards above a serpentine river, with wine estates producing port and red wine of extraordinary quality. Base in the upper Douro for 3 nights and taste your way down the valley.',
  },
  {
    name: 'Comporta & Alentejo',
    bestFor: 'Wild Atlantic, cork forests, seclusion',
    description: 'Portugal\'s best-kept secret — a 30km stretch of wild Atlantic beach backed by cork oak forests, lagoons, and rice paddies. Comporta village has a handful of design hotels and excellent seafood restaurants. No high-rises, no nightclubs. Pure, beautiful calm.',
  },
  {
    name: 'Algarve',
    bestFor: 'Best beaches, sea cliffs, resort swimming',
    description: 'The southern coast has genuinely extraordinary sea-cliff beaches — Praia da Marinha, Benagil sea cave, and Sagres headland are among Europe\'s most dramatic coastal scenery. Avoid Albufeira in summer (very touristy); Lagos and Sagres remain beautiful and less developed.',
  },
  {
    name: 'Madeira',
    bestFor: 'Subtropical year-round escape, hiking, wine',
    description: 'A volcanic Atlantic island that\'s subtropical year-round — lush mountains, levada walking trails through laurel forests, Madeira wine, and dramatic ocean views. Best off-season honeymoon destination in Portugal — while the mainland is rainy, Madeira is mild and beautiful.',
  },
],
expertTips: [
  {
    tip: 'September is the golden month for Portugal',
    detail: 'The grape harvest runs September–October — the Douro quintas are at their most beautiful, the light has softened from August\'s glare, crowds have thinned, accommodation prices drop 20–30%, and the sea is still warm from summer. September in Portugal is one of Europe\'s finest honeymoon conditions.',
  },
  {
    tip: 'Comporta over the Algarve for seclusion',
    detail: 'The Algarve is brilliant for clifftop scenery and swimming but busy in summer. Comporta, 90 minutes south of Lisbon, offers a completely different experience — wild Atlantic beach, cork forests, rice paddies, and a handful of design hotels with no resort development. Prices are comparable but the atmosphere is incomparable.',
  },
  {
    tip: 'The Douro valley requires a car',
    detail: 'There is no adequate public transport to explore the wine quintas of the upper Douro. Rent a car in Porto, drive the N222 along the river, and stay at a wine estate for 2–3 nights. The freedom to stop at family wineries that aren\'t on the tour circuit is the whole point.',
  },
  {
    tip: 'Book fado in advance',
    detail: 'The best fado casas in Lisbon have 15–25 seats and book out 2 weeks ahead in high season. Tasca do Chico is the most sought-after — book the moment you have flight dates confirmed. If it\'s full, Clube de Fado is the best alternative with a slightly larger room.',
  },
  {
    tip: 'Lisbon light is extraordinary at the golden hours',
    detail: 'The specific quality of light in Lisbon — the angle, the reflection off the Tagus river, the pale limestone buildings — is unlike anywhere else in Europe. Build your Lisbon days around the miradouros at sunrise and sunset rather than filling every hour with museums. The Miradouro de Santa Catarina at 7pm is unforgettable.',
  },
],
packing: [
  { item: 'Light layers for Lisbon evenings', why: 'Atlantic sea breeze cools Lisbon evenings even in summer — a light jacket or cardigan is needed for terrace dinners above 9pm' },
  { item: 'Good walking shoes for cobblestones', why: 'Lisbon\'s steep cobblestone streets are beautiful and brutal on feet — proper walking shoes prevent ruined evenings' },
  { item: 'Wetsuit (if surfing)', why: 'Atlantic Portugal water reaches 20°C in August but is 16°C in May — even in summer, a 3mm shorty makes surfing at Comporta genuinely enjoyable' },
  { item: 'Wine notebook or app', why: 'You will taste extraordinary wines at Douro quintas that aren\'t exported — noting producer names means you can order them shipped home' },
  { item: 'Light waterproof layer', why: 'Atlantic weather is changeable even in May and October — a compact packable rain jacket is useful regardless of season' },
],
guide: {
  getting: 'Fly to Lisbon Humberto Delgado (LIS) — direct from virtually every European city with TAP Air Portugal, Ryanair, EasyJet, British Airways, and Lufthansa (2–3h from northern Europe). For the Douro Valley, fly into Porto Francisco de Sá Carneiro (OPO) instead — 1h drive to the first quintas. For Madeira, fly direct to Funchal (FNC) from most European cities. Internal transport: excellent intercity trains (Lisbon–Porto: 3h, €25); rent a car for Douro and Comporta exploration.',
  where: 'Best 10-night Portugal honeymoon: 3 nights Lisbon (culture, fado, food) → 3 nights Douro Valley (wine, quinta stays) → 4 nights Comporta (beach, Atlantic wildness). Or: 5 nights Comporta + 5 nights Lisbon for a beach-city split. For pure beach: 7 nights Lagos/Algarve + 3 nights Lisbon. For year-round reliability: Madeira for 7 nights at any time.',
  when: 'May–June and September–October are the finest months — warm but not overwhelming, all attractions open, manageable crowds. September coincides with the grape harvest, making the Douro especially magnificent. July and August are excellent for beach weather but the Algarve is very busy — choose Comporta in peak season for a quieter experience. Madeira is beautiful year-round.',
},
localFood: 'Percebes (goose barnacles harvested from Atlantic rocks, eaten with lemon) at a Lisbon taberna, bacalhau à Brás (salted cod with eggs and potatoes — 365 different recipes), pastel de nata (custard tart) still warm from Pastéis de Belém, Douro Valley wine tasting with quinta views, and petiscos (Portuguese tapas) with a cold Sagres beer on a Comporta beach terrace.',
currency: 'Euro (EUR)',
language: 'Portuguese (English spoken widely)',
timezone: 'UTC+0 (WET) / UTC+1 (WEST in summer)',
}

export default meta
