import type { DestinationMeta } from '@/types/destination'

const meta: DestinationMeta = {
  hero: '/images/hotels/schloss-elmau-bavaria/hero.webp',
  tagline: 'Fairy-tale castles, alpine luxury, and Munich beer-hall city break — Bavaria does the European honeymoon at its most cinematic.',
  intro: 'Bavaria is the German honeymoon that delivers an unusually wide range of experiences in a compact alpine region. Neuschwanstein — the castle Disney copied — rises from a forested ridge in the Allgäu Alps; Schloss Elmau, between Garmisch and the Wetterstein massif, is one of Europe\'s most serious wellness-luxury hotels (and where the G7 summit happened twice); Lake Königssee in the Berchtesgaden Alps is the cleanest lake in Germany with the most photographed church (St. Bartholomä) in the country at its far end. Add Munich (one of the most liveable cities in Europe, with the Englischer Garten, the Opera, and the Five Continents collection at the Glyptothek), the Tegernsee at Bachmair Weissach, and the Berchtesgaden Alps with its Kempinski and InterContinental — and Bavaria becomes the cleanest, most efficient luxury honeymoon in central Europe. Best from May through September (warm alpine summers with cable cars and mountain lakes), and in December for the Christmas markets at the Marienplatz and the Bavarian Alps under snow.',
  bestTime: 'May–Sep + Dec',
  flightFrom: '1.5h from London, 9h direct from NYC',
  topExperience: 'Fairy-Tale Castles, Alpine Spa & Munich City Break',
  perfectFor: [
    'Couples who want a city + nature combination — Munich plus the alps in one efficient trip',
    'Wellness honeymooners — Schloss Elmau and Bachmair Weissach are two of Europe\'s top alpine spas',
    'Christmas-market lovers — December in Munich and Nuremberg is the most atmospheric in Europe',
    'Anyone who finds Switzerland appealing but wants 30–40% lower prices',
    'Architecture fans — Neuschwanstein, Linderhof, and Wieskirche are world-class within a 90-minute radius',
  ],
  skipIf: [
    'You need beach or warm-water swimming — alpine lakes are gorgeous but cold (16°C in summer)',
    'You\'re scared of crowds at Neuschwanstein — peak summer can mean 6,000 visitors a day; book early-morning slots',
    'You don\'t want any German — outside Munich and Schloss Elmau, English varies; basics help',
    'You\'re here November or April — both are quiet shoulder seasons with closures and grey weather',
  ],
  experiences: [
    {
      icon: '🏰',
      title: 'Neuschwanstein at Dawn',
      description: 'Ludwig II\'s fairy-tale castle on a ridge above the village of Hohenschwangau in the Allgäu Alps. Visit in the first slot of the morning (9am), with a pre-booked tour ticket. Walk up via the Marienbrücke for the iconic photograph with the Alps behind.',
      cost: '$25 castle ticket + $15 horse-drawn carriage up',
      tip: 'Book tickets via hohenschwangau.de at least 4 weeks ahead — walk-up tickets sell out daily in summer. The Marienbrücke is currently closed for restoration (re-check status before travelling).',
    },
    {
      icon: '🧘',
      title: 'Three Nights at Schloss Elmau',
      description: 'A 19th-century manor in a valley between Garmisch and the Wetterstein, now one of Europe\'s most acclaimed cultural-and-wellness hotels — 5 spas, 7 restaurants, a concert hall with international programmes, and the most beautiful walking immediately outside the door. Adults-only retreat and family wing run separately.',
      cost: '$1,000–$2,500 per night',
      tip: 'Request the Retreat (adults-only) wing — it\'s the honeymoon side. The chess room library and the Badehaus rooftop pool at sunset are the two signature moments.',
    },
    {
      icon: '🚤',
      title: 'Königssee Boat to St. Bartholomä',
      description: 'Germany\'s deepest and cleanest lake, sliced into the Berchtesgaden Alps. Take the electric tourist boat (only allowed type — the lake is a nature reserve) from Schönau to the red-onion-domed pilgrimage church of St. Bartholomä on the far shore. Lunch at the inn next to the church.',
      cost: '$25 per person round trip',
      tip: 'First boat at 8am avoids the day-trippers. Continue past St. Bartholomä to Salet for a 15-minute walk to Obersee — even more spectacular than the main lake, and 90% fewer people.',
    },
    {
      icon: '🍺',
      title: 'Munich Beer Hall & Englischer Garten',
      description: 'A late-afternoon hop between the Hofbräuhaus (touristy but mandatory), the Augustiner Stammhaus (where Münchners actually drink), and the Chinesischer Turm beer garden in the Englischer Garten under the chestnut trees. Walk back through the park past the surfers at the Eisbach standing wave.',
      cost: '$80–$150 per couple (beer + Schweinshaxe)',
      tip: 'For finer dining: Tantris (two Michelin stars), Atelier (three stars, at the Bayerischer Hof), or Schwarzreiter at the Vier Jahreszeiten. Book three weeks ahead.',
    },
    {
      icon: '⛰️',
      title: 'Zugspitze Cable Car',
      description: 'Germany\'s highest mountain (2,962m) is reached by the cog railway from Garmisch-Partenkirchen and then the new Eibsee cable car (record-breaking vertical span). The summit has a glacier, two countries\' borders, and views over four mountain ranges.',
      cost: '$80 per person (combo ticket)',
      tip: 'Start from the Eibsee side cable car for the spectacular ascent. Check the Zugspitze webcam in the morning before going — clouds at the summit make it pointless.',
    },
  ],
  months: [
    { month: 'Jan', weather: 'Cold (-2°C), ski season, snow', emoji: '❄️', crowds: 'Moderate (ski)', price: 'Mid', verdict: 'Ski honeymoons at Garmisch and Elmau' },
    { month: 'Feb', weather: 'Cold, peak ski season', emoji: '❄️', crowds: 'High (ski)', price: 'High', verdict: 'Excellent for skiing' },
    { month: 'Mar', weather: 'Cool, thawing, late ski', emoji: '⛅', crowds: 'Low', price: 'Mid', verdict: 'Shoulder — mixed conditions' },
    { month: 'Apr', weather: 'Spring, wildflowers, mud in alps', emoji: '🌤', crowds: 'Low', price: 'Mid', verdict: 'Cities lovely, alps still wet' },
    { month: 'May', weather: 'Warm (18°C), alpine flowers', emoji: '☀️', crowds: 'Moderate', price: 'Mid-high', verdict: 'One of the two best months' },
    { month: 'Jun', weather: 'Warm (22°C), long days', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Beautiful — full alpine access' },
    { month: 'Jul', weather: 'Warm (24°C), busy', emoji: '☀️', crowds: 'Peak', price: 'High', verdict: 'Excellent if you book ahead' },
    { month: 'Aug', weather: 'Warm, busiest month', emoji: '☀️', crowds: 'Peak', price: 'Highest', verdict: 'Crowded — Neuschwanstein limit' },
    { month: 'Sep', weather: 'Warm (20°C), Oktoberfest', emoji: '☀️', crowds: 'High in Munich', price: 'High', verdict: 'The secret best month outside Munich' },
    { month: 'Oct', weather: 'Cooling, golden, Oktoberfest first week', emoji: '🍂', crowds: 'Moderate', price: 'Mid-high', verdict: 'Lovely — full operations' },
    { month: 'Nov', weather: 'Grey, between seasons', emoji: '⛅', crowds: 'Low', price: 'Low', verdict: 'Skip — bleak shoulder' },
    { month: 'Dec', weather: 'Snow, Christmas markets, ski', emoji: '🎄', crowds: 'High in cities', price: 'Mid-high', verdict: 'Magical — markets + alps' },
  ],
  budgetTiers: [
    {
      label: 'Boutique',
      range: '$300–$600/night',
      gets: 'Excellent city hotels in Munich (Charles Hotel, Cortiina) and lakeside inns at Tegernsee. Bavaria delivers strong value at this tier.',
      example: 'The Charles Hotel Munich, Bachmair Weissach (standard rooms)',
    },
    {
      label: 'Luxury',
      range: '$600–$1,500/night',
      gets: 'Mandarin Oriental Munich, Bachmair Weissach lake suites, Kempinski Berchtesgaden alpine rooms. The honeymoon sweet spot.',
      example: 'Mandarin Oriental Munich, Kempinski Berchtesgaden',
    },
    {
      label: 'Ultra-Luxury',
      range: '$1,500+/night',
      gets: 'Schloss Elmau (the alpine cultural-spa hotel) and Hotel Bayerischer Hof penthouse suites. Plus full-board programmes at Schloss Elmau.',
      example: 'Schloss Elmau (Retreat suites), Bayerischer Hof',
    },
  ],
  areas: [
    {
      name: 'Munich',
      bestFor: 'City honeymoon — opera, beer halls, Englischer Garten',
      description: 'Bavaria\'s capital is the entry and exit point and worth 2–3 nights. Marienplatz, the Residenz, the Englischer Garten, Hofbräuhaus, and the world-class Pinakothek museums. Mandarin Oriental and Bayerischer Hof are the honeymoon-grade hotels; The Charles Hotel (Rocco Forte) is the elegant boutique alternative.',
    },
    {
      name: 'Garmisch-Partenkirchen & Schloss Elmau',
      bestFor: 'Alpine luxury — Wetterstein peaks, Zugspitze, Schloss Elmau',
      description: '90 minutes south of Munich by car or train. Schloss Elmau sits in a quiet valley above Klais — the most serious alpine wellness hotel in Germany. Garmisch-Partenkirchen for Zugspitze access, Eibsee lake, and the Partnach Gorge walk. The honeymoon\'s alpine heart.',
    },
    {
      name: 'Tegernsee',
      bestFor: 'Lakeside luxury — quick from Munich, alpine views',
      description: '45 minutes south of Munich. Tegernsee is Bavaria\'s most chic alpine lake, with Bachmair Weissach (luxury resort) at the south end and several Michelin restaurants. Easier and quicker than Garmisch if you only have a few nights.',
    },
    {
      name: 'Berchtesgaden',
      bestFor: 'Königssee, Eagle\'s Nest, Salzburg day trip',
      description: 'In the far southeast corner of Bavaria, bordering Austria — Lake Königssee, the Eagle\'s Nest, the salt mines, and an easy 25-minute trip to Salzburg. Kempinski Berchtesgaden and the InterContinental are the two cliffside honeymoon hotels with panoramic alpine views.',
    },
  ],
  expertTips: [
    {
      tip: 'Two-base honeymoon — Munich + one alpine region',
      detail: 'The perfect Bavarian honeymoon: 2–3 nights Munich (city, opera, museums), then 4–5 nights at Schloss Elmau or in Berchtesgaden. Trying to fit Neuschwanstein, Königssee, Munich, and Tegernsee in one trip is too much driving. Pick one alpine region and stay put.',
    },
    {
      tip: 'Book Neuschwanstein and Schloss Elmau as the two fixed points',
      detail: 'Schloss Elmau\'s Retreat suites sell out 9–12 months ahead for May–October. Neuschwanstein\'s first-slot morning tickets sell out 3–4 weeks ahead online. Book these first and arrange the rest of the itinerary around them.',
    },
    {
      tip: 'Trains in Bavaria are excellent — consider skipping the car',
      detail: 'Munich → Garmisch → Berchtesgaden by train is fast, scenic, and stress-free. Hire a car only if you want flexible alpine days (Königssee, Linderhof, smaller villages). A Bayern-Ticket day pass covers all regional trains for around €30.',
    },
    {
      tip: 'Avoid Munich during Oktoberfest unless that\'s the trip',
      detail: 'Oktoberfest runs mid-September to early October. Hotels triple in price; the city is packed; non-Oktoberfest restaurants struggle to seat you. Either embrace it (with a reserved Festzelt table booked 9 months ahead) or pick another two weeks.',
    },
    {
      tip: 'Christmas markets — Nuremberg over Munich for the best market',
      detail: 'Munich\'s Christkindlmarkt at Marienplatz is busy and famous; Nuremberg\'s Christkindlesmarkt is widely considered the most beautiful in Germany. A 1h train from Munich. Combine both in a winter honeymoon: 2 nights Munich, day trip to Nuremberg, 3 nights at Schloss Elmau in the snow.',
    },
  ],
  packing: [
    { item: 'Layered alpine clothing — fleece + waterproof shell', why: 'Bavarian alps swing 10–15°C in a day. Summer afternoons on the Zugspitze can be 5°C with wind; the valley below is 24°C. Layers are essential.' },
    { item: 'Comfortable walking shoes', why: 'Schloss Elmau\'s walks, the Partnach Gorge, the Königssee boardwalks, and Munich\'s Marienplatz cobbles all benefit from good walking shoes. Light hiking shoes work for both.' },
    { item: 'Smart-casual evening wear', why: 'Munich\'s Opera, the Bayerischer Hof, Schloss Elmau\'s Ganesha and Luce d\'Oro restaurants all have a discreet but real dress standard. Blazer for him, dress for her.' },
    { item: 'Swimwear (alpine pools and spas)', why: 'Schloss Elmau alone has 5 spas; Bachmair Weissach\'s spa is enormous; Kempinski Berchtesgaden has indoor and outdoor infinity pools. You\'ll swim every day.' },
    { item: 'Sunglasses and high-SPF cream', why: 'High-altitude alpine UV is intense even when it\'s cool. The Zugspitze, Eibsee, and the Königssee in summer all reflect strongly.' },
    { item: 'EU plug adapter (Type F)', why: 'Germany uses Schuko Type F sockets. UK and US travellers need adapters. A small multi-adapter covers phones, laptops, and camera batteries.' },
  ],
  guide: {
    getting: 'Fly into Munich (MUC) — Bavaria\'s only major airport. Direct from London (1h 45m), New York (9h on Lufthansa or United), most of Europe. Munich → Garmisch by train is 1h 20m; Munich → Berchtesgaden by train is 2h 30m. Hire car for alpine flexibility, but trains work for the main hubs.',
    where: 'Schloss Elmau for the signature alpine-wellness honeymoon. Mandarin Oriental or Bayerischer Hof in Munich. Bachmair Weissach for the quick Tegernsee escape. Kempinski or InterContinental Berchtesgaden for the eastern alps with Königssee. The Charles Hotel for boutique Munich at lower price.',
    when: 'May, June, and September are the perfect alpine months. December for Christmas markets + ski. Avoid Oktoberfest in Munich unless that\'s the point. Avoid November and April (bleak shoulders). Winter (Jan–Feb) for skiing only.',
  },
  localFood: 'Weisswurst with sweet mustard and a wheat beer before noon at the Hofbräuhaus, Schweinshaxe (roast pork knuckle) at the Augustiner Stammhaus, fresh lake trout at Bachmair Weissach\'s lakeside terrace, tasting menu at Luce d\'Oro (Schloss Elmau, two Michelin stars), Käsespätzle in any alpine inn, Nuremberg sausages in the Christmas market, and a Franziskaner Weissbier — the alpine summer drink.',
  currency: 'Euro (EUR)',
  language: 'German (English in hotels and Munich)',
  timezone: 'UTC+1 (CET) / UTC+2 (CEST in summer)',
  seo: { title: 'Bavaria Honeymoon: 6 Alpine & Castle Hotels Scored 2026', description: '6 Bavarian hotels ranked. Schloss Elmau, Mandarin Oriental, Kempinski. From $400/night. May-Sep + Dec verdicts.' },
}

export default meta
