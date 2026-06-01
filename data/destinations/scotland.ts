import type { DestinationMeta } from '@/types/destination'

const meta: DestinationMeta = {
  hero: '/images/hotels/gleneagles-auchterarder-scotland/hero.webp',
  tagline: 'Highland castles, single malt, and the dramatic landscapes of Skye — Britain\'s most romantic honeymoon at a fraction of the European Riviera price.',
  intro: 'Scotland is the European honeymoon for couples who want drama without the crowds. The Highlands rise straight from sea lochs to snow-capped peaks, the Isle of Skye delivers the most cinematic landscape in the British Isles, and the country runs an outsized roster of genuine castle hotels — Gleneagles, Inverlochy, Glenapp, Cromlix — operated to a standard that rivals anything in Ireland or France. Edinburgh is one of Europe\'s most walkable capitals; Speyside and Islay distilleries supply the world\'s finest whisky in tasting rooms most couples have to themselves; and the language barrier is zero. The country trades on weather jokes, but May through September is reliably gorgeous: 18 hours of daylight in June, wildflower-strewn glens, sea-eagle skies. Compared with Provence or Tuscany, Scotland costs 30–40% less for a comparable luxury experience and delivers something entirely its own: castle-keeper romance with whisky, salmon, and a coastline that genuinely belongs to you.',
  bestTime: 'May–Sep',
  flightFrom: '1–2h from London, 7–9h from US East Coast',
  topExperience: 'Castle Stays, Whisky & Highland Drama',
  perfectFor: [
    'Couples who want castle-hotel romance without the Irish premium or French language barrier',
    'Whisky lovers — Speyside and Islay are the heart of single malt and you can drive between distilleries',
    'Walkers and outdoor honeymooners — the Highlands, Skye, and Cairngorms are the best hiking in Britain',
    'Anglophone couples who want European drama without crossing a Channel or learning a new currency',
    'Anyone for whom a wood fire, deep tartan armchair, and a 25-year-old Macallan is the honeymoon image',
  ],
  skipIf: [
    'You need guaranteed sunshine — even July averages 17°C with rain three days in five',
    'You want a beach honeymoon — Scottish beaches are spectacular but the water is genuinely cold',
    'You\'re short on time — the best of Scotland needs 8–10 nights and a hire car',
    'You hate driving on the left — single-track Highland roads with passing places require confidence',
  ],
  experiences: [
    {
      icon: '🏰',
      title: 'Two-Castle Highland Stay',
      description: 'Combine two of Scotland\'s great castle hotels — Inverlochy Castle (near Fort William, with the most extraordinary view of the Mamores) and Glenapp Castle (Ayrshire, with a 36-acre garden and private boat to Ailsa Craig). The contrast between Highland-fortress and country-house Scotland is the perfect honeymoon arc.',
      cost: '$600–$1,200/night per castle',
      tip: 'Book the four-poster suites months ahead for May, June, and September. Inverlochy\'s Top of the Castle suite and Glenapp\'s Endeavour Suite are the honeymoon rooms.',
    },
    {
      icon: '🥃',
      title: 'Private Speyside Whisky Tour',
      description: 'A private driver-guide and three Speyside distillery visits in a single day — Macallan (the cathedral-like new distillery), Glenfiddich (the family-owned classic), and Glenfarclas (small, traditional, family-run). Tastings in directors\' rooms most tourists never see.',
      cost: '$500–$900 per couple (full day)',
      tip: 'Book through your hotel concierge or use a specialist like Glenlivet Whisky Tours. Pre-book a Macallan distillery tour 3 months ahead — they sell out.',
    },
    {
      icon: '🏔️',
      title: 'Isle of Skye Three-Day Loop',
      description: 'The Quiraing, the Old Man of Storr, the Fairy Pools, Neist Point lighthouse, and Loch Coruisk by boat from Elgol. Skye is the most cinematic landscape in Britain — pyramidal peaks, vertical cliffs, and light that changes every five minutes.',
      cost: '$300–$500/day (rental + activities)',
      tip: 'Stay 2 nights at Kinloch Lodge or The Three Chimneys with rooms. Start hikes by 8am to avoid the day-trippers from cruise ships at Portree.',
    },
    {
      icon: '🎩',
      title: 'Edinburgh Tattoo & Royal Mile Romance',
      description: 'A pre-Highland night in Edinburgh — the Royal Mile from castle to palace, the Witchery for dinner (suspended above the cobbles in candlelight), and the Tattoo on the Castle Esplanade if you\'re here in August.',
      cost: '$400–$700 per couple (dinner + tickets + hotel)',
      tip: 'Book the Witchery\'s Inner Sanctum or the Vestry rooms a year ahead. The Tattoo runs first three weeks of August — book by January.',
    },
    {
      icon: '⛵',
      title: 'West Coast Sailing Day',
      description: 'A skippered yacht from Oban or Mallaig through the Inner Hebrides — Mull, Iona, Staffa (Fingal\'s Cave). Eagles overhead, dolphins alongside, and a single-malt cocktail at sunset with the Cuillin ridge of Skye on the horizon.',
      cost: '$700–$1,400 per couple (full day skippered charter)',
      tip: 'Best May–September. Book through Hebridean Adventures or Argyll Cruising. Calm-weather window is needed for Staffa — your skipper will reschedule if needed.',
    },
  ],
  months: [
    { month: 'Jan', weather: 'Cold, short days, snow in Highlands', emoji: '❄️', crowds: 'Minimal', price: 'Lowest', verdict: 'Castle fires only — many lodges closed' },
    { month: 'Feb', weather: 'Cold, occasional storms', emoji: '❄️', crowds: 'Minimal', price: 'Low', verdict: 'Cosy if you stay put' },
    { month: 'Mar', weather: 'Cool, warming, daffodils', emoji: '⛅', crowds: 'Low', price: 'Low', verdict: 'Shoulder — castles starting to open' },
    { month: 'Apr', weather: 'Spring proper, gardens blooming', emoji: '🌤', crowds: 'Low-mod', price: 'Mid', verdict: 'Lovely — Easter aside, still quiet' },
    { month: 'May', weather: 'Often the driest, long days', emoji: '☀️', crowds: 'Moderate', price: 'Mid-high', verdict: 'One of the two best months' },
    { month: 'Jun', weather: 'Peak daylight (18h), warm', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Beautiful — book Skye early' },
    { month: 'Jul', weather: 'Warm, occasional rain, midges in west', emoji: '🌤', crowds: 'Peak', price: 'High', verdict: 'Busy — book everything ahead' },
    { month: 'Aug', weather: 'Warm, Edinburgh Festival mayhem', emoji: '🌤', crowds: 'Peak', price: 'Highest', verdict: 'Edinburgh is bedlam; Highlands fine' },
    { month: 'Sep', weather: 'Crisp, golden, low midges', emoji: '🍂', crowds: 'Moderate', price: 'High', verdict: 'The secret best month' },
    { month: 'Oct', weather: 'Cool, autumn colour', emoji: '🍂', crowds: 'Low-mod', price: 'Mid', verdict: 'Atmospheric — short days starting' },
    { month: 'Nov', weather: 'Cold, dark, first snows', emoji: '⛅', crowds: 'Low', price: 'Low', verdict: 'Limited — for fireside romantics' },
    { month: 'Dec', weather: 'Cold, festive, Hogmanay', emoji: '🎄', crowds: 'Low-mod', price: 'Mid (Hogmanay high)', verdict: 'Christmas castles and New Year' },
  ],
  budgetTiers: [
    {
      label: 'Country House',
      range: '$300–$600/night',
      gets: 'Excellent country-house hotels with grounds, dinner, and full Scottish breakfast. Plenty of mid-range castle and lodge stock at this tier.',
      example: 'The Torridon, The Fife Arms (deluxe rooms)',
    },
    {
      label: 'Castle Luxury',
      range: '$600–$1,200/night',
      gets: 'Genuine castle hotels with state rooms, four-posters, fine dining, and concierge. The honeymoon sweet spot in Scotland.',
      example: 'Inverlochy Castle, Glenapp Castle, Cromlix',
    },
    {
      label: 'Ultra-Luxury',
      range: '$1,200+/night',
      gets: 'Gleneagles\' Estate Suites, Fife Arms top suites, or Auchterarder/Cromlix takeovers. Private estates with the full Scottish-baronial treatment.',
      example: 'Gleneagles, The Fife Arms (premium suites)',
    },
  ],
  areas: [
    {
      name: 'The Highlands (Fort William, Torridon, Wester Ross)',
      bestFor: 'Pure Highland drama — castles, lochs, Ben Nevis',
      description: 'The Western Highlands deliver the most concentrated scenery in Britain. Inverlochy Castle near Fort William sits below the Mamores; The Torridon faces Liathach across a sea loch. Single-track roads, no traffic, eagles overhead. The classic honeymoon Highland base.',
    },
    {
      name: 'Isle of Skye',
      bestFor: 'Most cinematic landscape — pyramidal peaks, vertical cliffs',
      description: 'Skye is reached by the Skye Bridge from the Highlands. The Quiraing, the Old Man of Storr, the Cuillin, and the Fairy Pools are the most photographed landscape in Scotland. Stay at Kinloch Lodge or The Three Chimneys with rooms.',
    },
    {
      name: 'Speyside & Cairngorms',
      bestFor: 'Whisky, walking, lower-elevation scenery',
      description: 'Speyside is the heart of single malt — fifty distilleries within an hour\'s drive. The Cairngorms National Park is the largest in Britain. Base at The Fife Arms in Braemar or Boath House for the best of both.',
    },
    {
      name: 'Edinburgh & The Borders',
      bestFor: 'City honeymoon, festivals, arrival/departure base',
      description: 'Edinburgh is one of Europe\'s most walkable capitals — castle, Royal Mile, palace, Arthur\'s Seat. The Witchery, The Balmoral, and Gleneagles Townhouse are the honeymoon-grade hotels. Combine 2 nights here with 5–7 nights in the Highlands.',
    },
  ],
  expertTips: [
    {
      tip: 'Hire a car — Scotland is a driving honeymoon',
      detail: 'The Highlands have no useful trains beyond Inverness and Fort William. A car is essential. Avoid the cheapest hire categories — Highland roads need a comfortable car. Pre-book through Arnold Clark or Enterprise from Edinburgh or Glasgow airport.',
    },
    {
      tip: 'Pack for four seasons in one day — actually',
      detail: 'Scottish weather is not a punchline. June at Glencoe can be 22°C and sunny, or 11°C and lashing rain, in the same day. Waterproof jacket, fleece, and proper walking shoes are non-negotiable. Castle hotels lend Hunter boots and umbrellas.',
    },
    {
      tip: 'Avoid the West Highland midges in July–August',
      detail: 'The Highland midge is real, blood-thirsty, and worst on still, humid evenings between mid-June and late August in the West. Smidge repellent works; wind keeps them down. May, September, and the East coast are midge-free.',
    },
    {
      tip: 'Book Skye accommodation 9–12 months ahead',
      detail: 'Skye has limited luxury inventory — Kinloch Lodge, The Three Chimneys, and a handful of upmarket B&Bs are the entire premium scene. They book out a year ahead for May–September. If Skye is on the itinerary, book the hotel first and build the rest around it.',
    },
    {
      tip: 'Combine Edinburgh + Highlands + Skye for the perfect arc',
      detail: 'The classic honeymoon shape: 2 nights Edinburgh (city, food, theatre), 4 nights Highland castle (Inverlochy or Torridon), 2–3 nights Skye (drama, walks), 1 night back to Glasgow/Edinburgh for departure. Drive from Edinburgh, fly out of Glasgow (or vice versa).',
    },
  ],
  packing: [
    { item: 'Proper waterproof jacket', why: 'Not a fashion raincoat. A Gore-Tex or equivalent that actually works for an all-day walk in wet weather. The Highlands punish bad outerwear.' },
    { item: 'Grippy walking shoes or light hiking boots', why: 'Wet stone, peat bog, and castle staircases all benefit from grip. Leather city boots will not work for Skye or Glencoe walks.' },
    { item: 'Smart-casual dinner outfits', why: 'Castle hotels (Gleneagles, Inverlochy, Cromlix) still observe jacket-and-collar evening codes. A blazer for him, smart trousers/dress for her, easy to pack.' },
    { item: 'Midge repellent (Smidge or Avon Skin So Soft)', why: 'Only if travelling west of the A9 in July–August. Local pharmacies sell Smidge; Boots stocks Avon. Citronella does not work on Highland midges.' },
    { item: 'Layers — merino base, fleece, light down', why: 'Highland weather changes hourly. Layers let you peel down on a warm afternoon and add up at dusk. Avoid cotton — it stays wet.' },
    { item: 'Adapter (UK three-pin) and a power bank', why: 'Highland and Skye accommodation has limited socket count and occasional power cuts. A power bank for the camera/phone day is worth the bag space.' },
  ],
  guide: {
    getting: 'Fly into Edinburgh (EDI) or Glasgow (GLA). From London: 1h. From US East Coast: 7h direct (United, Delta, JetBlue, BA). From elsewhere in Europe: 2–3h. Inverness (INV) is a useful arrival airport if heading straight to the West Highlands. Hire car essential — pick up at the airport on arrival.',
    where: 'Gleneagles or Cromlix for the Lowland luxury entry. Inverlochy Castle or The Torridon for the Western Highlands. Kinloch Lodge or The Three Chimneys for Skye. The Fife Arms for Speyside/Cairngorms. The Witchery or Balmoral for Edinburgh. Combine two or three regions over 8–10 nights.',
    when: 'May and September are the two perfect months — long days, low midges, full hotel access, fewer crowds. June for maximum daylight (almost 18h in the Highlands). July–August busy but workable. December for Hogmanay castle parties. November and February are atmospheric but limited.',
  },
  localFood: 'Cullen skink (smoked haddock chowder) on Skye, wild Scottish salmon at the Cromlix or Inverlochy table, hand-dived scallops on Mull, haggis with neeps and tatties at any Highland inn, Aberdeen Angus rib-eye at Gleneagles\' Strathearn, Speyside-aged single malts as digestif, and a properly buttered shortbread with Earl Grey at any castle afternoon tea.',
  currency: 'Pound Sterling (GBP)',
  language: 'English (Scottish Gaelic in west Highlands and Skye)',
  timezone: 'UTC+0 (GMT) / UTC+1 (BST in summer)',
  seo: { title: 'Scotland Honeymoon: 6 Castle Hotels Scored 2026', description: '6 Highland & Skye castle hotels ranked. Gleneagles, Inverlochy, Glenapp. From $400/night. May-Sep verdicts inside.' },
}

export default meta
