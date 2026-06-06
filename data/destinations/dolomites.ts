import type { DestinationMeta } from '@/types/destination'

const meta: DestinationMeta = {
  hero: '/images/hotels/forestis-dolomites/hero.webp',
  tagline: 'Vertical limestone, UNESCO peaks, and the world\'s most photogenic alpine luxury — Italian mountain honeymoon redefined.',
  intro: 'The Dolomites are arguably the most photogenic alpine landscape on earth — 18 UNESCO-listed mountain groups of vertical pale-pink limestone, pierced and folded into spires, towers, and walls that turn from rose to gold to violet over a single sunset. This is South Tyrol — bilingual Italian/German, with the food of Alto Adige (speck, canederli, apple strudel), the wine of Alto Adige (Lagrein, Gewürztraminer), and a generation of new ultra-luxury 5★ mountain hotels that have rewritten what an alpine honeymoon can be. Forestis, perched at 1,800m above Brixen with only suites and chalets and a glass spa cantilevered into the sky, is one of the half-dozen most arresting hotels in Europe. Rosa Alpina (Belmond) in Alta Badia has been the address for Cortina-set winters for 80 years. Add Adler Lodge Ritten, Cristallo in Cortina, Lago di Braies at dawn, and a chairlift up to Tre Cime, and you have a honeymoon nowhere else on the continent comes close to.',
  bestTime: 'Jun–Sep (summer hiking) & Dec–Mar (ski)',
  flightFrom: '1.5h from northern Europe to Venice/Innsbruck, then 2h drive',
  topExperience: 'Vertical Alpine Romance & Mountain Luxury',
  perfectFor: [
    'Couples who want active hiking-luxury — long mountain days, then 5★ spa evenings',
    'Photography-obsessed couples — the most arresting mountain landscape in Europe',
    'Ski honeymooners wanting Italian charm alongside Austrian-grade snow (Dolomiti Superski)',
    'Foodies — South Tyrol has more Michelin stars per capita than anywhere in Italy',
    'Couples doing summer hiking with no interest in beach honeymoons (or post-tropical second leg)',
  ],
  skipIf: [
    'You\'re traveling in April–May — most rifugi closed, snowmelt, chairlifts shut, mud',
    'You\'re traveling in October–November — same shoulder-season closure, weather grim',
    'You don\'t want to walk — half the magic is on trails (though spas and chairlifts work too)',
    'You expect Tuscany-style sun-and-vineyards — this is a serious mountain destination',
  ],
  experiences: [
    {
      icon: '🏔️',
      title: 'Sunrise at Lago di Braies',
      description: 'The most photographed lake in the Alps — emerald water under a 2,800m limestone wall, with the wooden rowing boats still tied at the shore. Arrive at 5.30am in summer (or 6.30am in autumn) before the day-trippers, rent a boat (€30/hr), and have the entire lake to yourselves for an hour.',
      cost: '€30/hr boat rental — €0 if you just walk',
      tip: 'Stay at a nearby hotel (Cristallo in Cortina is 45 minutes\' drive) so you can arrive pre-sunrise. After 9am the parking is full and a charge applies. Bring a thermos of coffee — there\'s a tiny rifugio but it opens late.',
    },
    {
      icon: '🥾',
      title: 'Tre Cime di Lavaredo Loop',
      description: 'The Dolomites\' most iconic walk — a 10km loop around the three vertical 2,999m limestone monoliths that define the range. Cable car from Misurina up to Rifugio Auronzo, then a near-flat clockwise loop with lunch at Rifugio Locatelli. Pinch-yourself scenery from the first minute.',
      cost: '€30 toll road + €30 cable car per couple — lunch €60–€90',
      tip: 'Start early (8am at the toll booth) before the buses arrive. Go clockwise (anti-clockwise gives you the famous Tre Cime view at the start; clockwise at the end as reward). Book Rifugio Locatelli lunch on arrival — by noon it\'s full.',
    },
    {
      icon: '🧖',
      title: 'Forestis Glass Spa & Cantilevered Pool',
      description: 'Forestis\' spa is a 2,000m² glass-and-larch wing cantilevered over the Plose valley at 1,800m. Outdoor heated infinity pool with the Sass de Putia peak directly framed, Finnish sauna with floor-to-ceiling forest view, and treatments using stone pine, larch, and spruce. Worth the trip alone.',
      cost: '€100–€350 per treatment — included for guests',
      tip: 'Stay 2 nights minimum at Forestis to actually use the spa properly. Book the outdoor pool slot at sunset (the Dolomites turn pink — "enrosadira" — for 20 minutes). Spruce-pine oil massage is the signature.',
    },
    {
      icon: '🍝',
      title: 'Michelin Dinner at St. Hubertus or La Stüa de Michil',
      description: 'St. Hubertus at Rosa Alpina holds 3 Michelin stars under Norbert Niederkofler — the world\'s top mountain cuisine, working only with local-radius Alpine ingredients. La Stüa de Michil at La Perla (also Alta Badia) is the historic 1-star room. These are not generic luxury — they are pilgrimage dinners.',
      cost: '€280–€450 per person tasting menu (wine extra)',
      tip: 'Book St. Hubertus 6 weeks ahead. Take the wine pairing — South Tyrol whites (Sauvignon, Kerner, Gewürztraminer) at this altitude are stunning. Stay in Alta Badia the same night so you can walk back to the hotel.',
    },
    {
      icon: '🚠',
      title: 'Seceda Ridge by Cable Car',
      description: 'The two-stage Ortisei cable car climbs to 2,500m at Seceda — and the view from the ridge, with the Geisler/Odle peaks rising like a jagged limestone wave, is one of the great mountain panoramas on earth. 30 minutes of walking on a near-flat ridge gives you the famous viewpoint. No hiking experience required.',
      cost: '€50 per couple (cable car return)',
      tip: 'Go on a clear morning before noon (afternoon clouds build). Bring a picnic from the Ortisei deli (or eat at Rifugio Sofie). Combine with the Alpe di Siusi cable car on the same valley pass for a full Val Gardena day.',
    },
  ],
  months: [
    { month: 'Jan', weather: 'Cold, snowy, peak ski', emoji: '❄️', crowds: 'High (ski)', price: 'Peak', verdict: 'Excellent for skiers' },
    { month: 'Feb', weather: 'Coldest, best snow', emoji: '❄️', crowds: 'Peak (Carnevale)', price: 'Peak', verdict: 'Peak ski month' },
    { month: 'Mar', weather: 'Sunny ski, longer days', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Best ski conditions of season' },
    { month: 'Apr', weather: 'Snowmelt, mud, closures', emoji: '🌧️', crowds: 'Minimal', price: 'Lowest', verdict: 'AVOID — closed shoulder' },
    { month: 'May', weather: 'Wet, lifts closed, rifugi shut', emoji: '🌧️', crowds: 'Minimal', price: 'Low', verdict: 'AVOID — nothing open' },
    { month: 'Jun', weather: 'Wildflowers, hiking opens, warm', emoji: '🌤', crowds: 'Low-mod', price: 'Mid', verdict: 'Excellent — quiet, in flower' },
    { month: 'Jul', weather: 'Warm, all trails open', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Peak summer — book early' },
    { month: 'Aug', weather: 'Warm, busiest with Italians', emoji: '☀️', crowds: 'Peak (Ferragosto)', price: 'Peak', verdict: 'Crowded but glorious' },
    { month: 'Sep', weather: 'Warm days, cool nights, clear', emoji: '☀️', crowds: 'Moderate', price: 'High', verdict: 'The connoisseur month — peak quality' },
    { month: 'Oct', weather: 'First snow, lifts winding down', emoji: '🌤', crowds: 'Low', price: 'Mid', verdict: 'AVOID after mid-Oct — closures' },
    { month: 'Nov', weather: 'Closed shoulder, grey', emoji: '🌧️', crowds: 'Minimal', price: 'Low', verdict: 'AVOID — between seasons' },
    { month: 'Dec', weather: 'Ski opens, Christmas markets', emoji: '❄️', crowds: 'Peak (Christmas/NYE)', price: 'Peak', verdict: 'Magical for ski + festive' },
  ],
  budgetTiers: [
    {
      label: 'Boutique Luxury',
      range: '€350–€650/night',
      gets: 'Family-run 4★ design boutiques in restored mountain inns — spa, half-board cuisine of regional excellence, mountain rooms with balconies. Hotel de Len in Cortina and the smaller Val Gardena boutiques sit here.',
      example: 'Hotel de Len (Cortina), Ciasa Salares (Alta Badia)',
    },
    {
      label: 'Premium',
      range: '€650–€1,400/night',
      gets: 'Established 5★ alpine grandes dames and design-led modern 5★ — full half-board, 2,000m² spas, Michelin-influenced dining, ski-in/ski-out or trail-head locations.',
      example: 'Adler Lodge Ritten, Cristallo Luxury Collection, Hotel La Perla',
    },
    {
      label: 'Ultra-Luxury',
      range: '€1,400+/night',
      gets: 'Forestis Dolomites (62 suites/chalets, glass spa, Sass de Putia view) and Rosa Alpina Belmond (3-star Michelin St. Hubertus, 50 rooms). The two hotels that defined the new category of Dolomites mountain honeymoon.',
      example: 'Forestis Dolomites (Brixen), Rosa Alpina Belmond (San Cassiano)',
    },
  ],
  areas: [
    {
      name: 'Cortina d\'Ampezzo',
      bestFor: 'Most famous, ski-glamorous, 2026 Winter Olympics co-host',
      description: 'The Italian St-Moritz — the most cosmopolitan Dolomites town, with the fur-coat ski scene in winter and chic summer hiking crowd. Cristallo Luxury Collection and Hotel de Len anchor luxury here. Lago di Braies and Tre Cime are short drives. Best for couples who want town atmosphere alongside mountains.',
    },
    {
      name: 'Alta Badia (San Cassiano, Corvara)',
      bestFor: 'Highest concentration of luxury hotels, ski-in/ski-out, 3-star Michelin dining',
      description: 'The Ladin-speaking valley of southern Tyrol — home to Rosa Alpina (Belmond), Hotel La Perla, Ciasa Salares, and Norbert Niederkofler\'s 3-Michelin St. Hubertus. Sella Ronda ski circuit in winter, gentlest meadow walking in summer. The honeymoon valley of the Dolomites.',
    },
    {
      name: 'Val Gardena (Ortisei, Selva)',
      bestFor: 'Best summer hiking, woodcarving heritage, Seceda views',
      description: 'The Ladin valley of the Geisler peaks — Ortisei is the prettiest base, with the Seceda and Alpe di Siusi cable cars at the door. Quieter than Cortina, gentler atmosphere, the woodcarving tradition. Best for active hiking couples on a slightly lower budget.',
    },
    {
      name: 'Brixen / Plose / Ritten plateaus',
      bestFor: 'Highest-altitude design hotels, peace, sweeping panoramas',
      description: 'Above the Eisack Valley, the high plateaus south of Brixen host the new generation of design-led mountain hotels — Forestis Dolomites at 1,800m and Adler Lodge Ritten at 1,200m. Less ski-centric, more wellness-and-views, with Brixen\'s wine cellars (Abbazia di Novacella) below.',
    },
  ],
  expertTips: [
    {
      tip: 'Fly into Venice Marco Polo, not Innsbruck or Verona',
      detail: 'Venice (VCE) has the most direct connections from Europe and the US (vs Innsbruck) and is 2h drive to Cortina or Alta Badia — almost identical drive time to Verona but more flight options. Rent a car at VCE; the Dolomites without a car is significantly worse.',
    },
    {
      tip: 'NEVER travel in April–May or October–November — almost everything closes',
      detail: 'The Dolomites have hard shoulder seasons. From mid-April to early June, and from mid-October to early December, most rifugi shut, chairlifts stop running, and even some hotels close for maintenance. June–September for summer, December–March for ski. Don\'t hope for late-October colour — book July or September instead.',
    },
    {
      tip: 'Book St. Hubertus (3 Michelin stars at Rosa Alpina) 6 weeks ahead',
      detail: 'The single greatest dinner in the Italian Alps is at Norbert Niederkofler\'s St. Hubertus in San Cassiano — a 3-star ode to South Tyrol\'s "cook the mountain" philosophy. The hotel can\'t book it without your reservation — call yourself. Eight courses, €350pp, the wine pairing is essential.',
    },
    {
      tip: 'Stay in 2 valleys for a 5-night Dolomites — Forestis + Rosa Alpina is the classic',
      detail: '2 nights at Forestis (Brixen plateau, design-spa, panoramic) then 3 nights at Rosa Alpina (Alta Badia, hiking-heavy, 3-Michelin) — or swap for Adler Lodge Ritten + Cristallo Cortina. One valley doesn\'t do the Dolomites justice; the contrast between high plateaus and the dramatic Tre Cime/Cortina valleys is the trip.',
    },
    {
      tip: 'Walk in proper boots — these are not Tuscany trails',
      detail: 'Even the famous "easy" routes (Tre Cime loop, Adolf Munkel Trail, Alpe di Siusi) involve loose rock, exposed scree, and weather that can shift in 20 minutes. Bring real hiking boots (not sneakers), a waterproof shell, and a layered fleece system. Or stay at altitude and use chairlifts to the rifugi.',
    },
  ],
  packing: [
    { item: 'Proper waterproof hiking boots', why: 'Dolomites trails are stone, scree, and sometimes wet limestone — sneakers are dangerous on the descents. Mid-cut Gore-Tex boots broken in before you travel. Hotels lend trekking poles but not boots.' },
    { item: '3-layer system (base, fleece, shell)', why: 'It can be 28°C in the valley and 8°C at 2,500m in July — and a thunderstorm can drop it 15° in an hour. Merino base + light fleece + waterproof shell handles everything. Pack one of each.' },
    { item: 'Smart-casual half-board outfit', why: 'Dolomites 5★ hotels (Forestis, Rosa Alpina, Cristallo) have dressed-up half-board dinners — no shorts, no T-shirts. Linen trousers + collared shirt for him, silk dress or smart sweater for her. The Italian crowd dresses.' },
    { item: 'High-SPF sunscreen and lip balm', why: 'At 2,000m+ the UV is much stronger and you are pale-skinned-snow-bright — sunburn happens fast on chairlift queues and ridge walks. SPF 50+ on face/neck/ears, every 3 hours. Lip balm with SPF — essential.' },
    { item: 'Swimsuits and spa wear', why: 'Every serious Dolomites hotel has a major spa (Forestis 2,000m², Adler Lodge Ritten 1,500m², Cristallo 1,100m²). Outdoor heated infinity pools with mountain views are the signature. Two swimsuits each, slides, robe is provided.' },
    { item: 'Daypack with hydration', why: 'You\'ll walk 4–10 hours on full hiking days — carry water (2L minimum), snacks (rifugi don\'t serve continuously), shell layer, sunscreen, phone for photos. 20L daypack is right; the hotel can lend.' },
  ],
  guide: {
    getting: 'Fly into Venice Marco Polo (VCE) — direct flights from London (2h), Frankfurt (1h30), Paris (2h), New York JFK (9h). From VCE: rent a car (essential — 2h drive to Cortina or Alta Badia via the A27 motorway and SS51). Alternative airports: Innsbruck (INN, 2h to Alta Badia), Verona (VRN, 3h), Munich (3.5h). Trains from Venice/Milan only get you to Bolzano or Brixen; you still need a car or transfer to reach the mountain hotels.',
    where: 'Forestis Dolomites (Brixen plateau, 1,800m) for the most design-arresting stay in the Alps. Rosa Alpina Belmond (San Cassiano, Alta Badia) for 3-star Michelin dining and hiking. Adler Lodge Ritten (Soprabolzano plateau) for outdoor pools at 1,200m with panoramic views. Cristallo (Cortina) for town-glam and Tre Cime access. Hotel de Len (Cortina) for boutique eco-design. Ciasa Salares (San Cassiano) for the small-family-luxury alternative to Rosa Alpina.',
    when: 'July and September are the two best months for summer hiking — wildflowers in July, golden light and quieter trails in September. June is excellent and quietest if some high passes are still snowy. December–March for ski (Dolomiti Superski 1,200km, Sella Ronda circuit, Cortina). AVOID April–May and October–November entirely — closure season.',
  },
  localFood: 'Canederli (bread dumplings in broth or with butter and sage), speck (smoked-cured pork) with horseradish, schlutzkrapfen (spinach-ricotta ravioli) at any rifugio, Norbert Niederkofler\'s 3-Michelin tasting menu at St. Hubertus, apple strudel with vanilla sauce, Lagrein and Gewürztraminer wines from the Alto Adige cellars (Abbazia di Novacella, J. Hofstätter), and grappa at the end of every meal.',
  currency: 'Euro (EUR)',
  language: 'Italian + German (Ladin in Alta Badia/Val Gardena)',
  timezone: 'UTC+1 (CET) / UTC+2 (CEST in summer)',
  seo: { title: 'Dolomites Honeymoon: 6 UNESCO Alpine Luxe Hotels 2026', description: '6 Cortina, Alta Badia, Brixen hotels ranked. Forestis, Rosa Alpina, Cristallo. From €350/night. Jun-Sep & Dec-Mar.' },
}

export default meta
