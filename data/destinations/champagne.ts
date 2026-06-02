import type { DestinationMeta } from '@/types/destination'

const meta: DestinationMeta = {
  hero: '/images/hotels/royal-champagne-hotel-spa-champagne/hero.webp',
  tagline: 'Reims, Épernay, Aÿ — drink champagne at the source, 45 minutes from Paris.',
  intro: 'Champagne is the most under-rated honeymoon region in France — a rolling chalk-and-vineyard landscape on the Marne, with two of the country\'s great cathedral cities (Reims and Épernay), and 360 grand maisons whose names you already know: Krug, Bollinger, Veuve Clicquot, Ruinart, Dom Pérignon, Pol Roger. The 45-minute TGV from Paris Est gets you here faster than the Paris-Charles-de-Gaulle airport transfer, which is the genuinely shocking fact about the region. Honeymooners come for the intimate cellar visits (most maisons require pre-booking but the encounter is one-on-one with the chef de cave), the Michelin restaurants that congregate around the houses, the Royal Champagne hotel\'s aerial spa above the vineyards, and the chance to walk through the chalk caves where the bottles you drink at home were aged. Quieter than Burgundy, easier than Bordeaux, and more romantic than anywhere wine is made.',
  bestTime: 'May–Oct (avoid late Sep harvest week)',
  flightFrom: '45 min TGV from Paris Est',
  topExperience: 'Drinking Champagne in Its Cellars',
  perfectFor: [
    'Couples for whom drinking great wine is the point of a honeymoon — not the decoration',
    'Honeymooners on a Paris stopover who want a 3- or 4-night pairing with no logistical pain',
    'Lovers of slow rural luxury — long lunches, vineyard walks, intimate Michelin dining',
    'Couples who appreciate cathedral architecture — Reims is one of the great Gothic experiences in Europe',
    'Honeymooners who prefer subtle, sophisticated regions to the major tourist names',
  ],
  skipIf: [
    'You need beach or pool — Champagne is rural and inland, no swimming options',
    'You want continuous warmth — even in summer, Champagne has a clear continental climate with cool evenings',
    'You\'re traveling late September during harvest (vendanges) — maisons run reduced visits',
    'You don\'t drink wine — the region\'s entire reason for existence is bottles of the stuff',
  ],
  experiences: [
    {
      icon: '🥂',
      title: 'Private Tour and Tasting at a Grand Maison',
      description: 'A private booking at one of the great houses — Krug in Reims, Bollinger in Aÿ, or Ruinart\'s 1729-built chalk caves under Reims. The cellars are 30m below ground and stretch for kilometres. The tour ends with a tasting of the prestige cuvées you cannot buy at home: Krug Clos du Mesnil, Bollinger RD, Ruinart Dom Ruinart.',
      cost: '$200–$600 per couple (private tour and prestige tasting)',
      tip: 'Book through your hotel concierge at least 4 weeks ahead — these are not standard tourist visits. Krug requires a 6-week lead time and a personal contact. Pol Roger Sir Winston Churchill tasting at the maison is the connoisseur\'s pick.',
    },
    {
      icon: '⛪',
      title: 'Reims Cathedral and the Coronation Tour',
      description: 'Notre-Dame de Reims is where 33 French kings were crowned over 1,000 years. The 13th-century cathedral is a Gothic masterpiece comparable to Chartres, with 2,303 statues on the exterior and remarkable Chagall stained glass added in 1974. A private guide brings the coronation history alive — Joan of Arc led Charles VII here in 1429.',
      cost: '$150–$300 per couple (private guide, optional rooftop access)',
      tip: 'Book a rooftop tour (Tours-Reims office) to walk between the gargoyles and see the smile of the famous Ange au Sourire (Smiling Angel) close up. The Palais du Tau next door houses the coronation regalia. Lunch at L\'Assiette Champenoise after.',
    },
    {
      icon: '🍾',
      title: 'Avenue de Champagne, Épernay',
      description: 'The Avenue de Champagne in Épernay holds an estimated $2 billion in maturing champagne under its mansions — Moët & Chandon, Perrier-Jouët, Mercier, Pol Roger all line the kilometre of grand 19th-century facades. The Moët cellars (28km of chalk tunnels) are open daily; the Mercier cellars have a small underground train. The most concentrated wine real estate on earth.',
      cost: '$100–$300 per couple (two cellar visits)',
      tip: 'Book Pol Roger for the small-house atmosphere (Churchill\'s favourite house), Moët for the spectacle. Walk the Avenue between visits — the architecture alone justifies the trip. Lunch at La Briqueterie or Royal Champagne (both 10 minutes from Épernay).',
    },
    {
      icon: '🌾',
      title: 'Côte des Blancs Vineyard Drive',
      description: 'The Côte des Blancs is a 20km ridge south of Épernay planted entirely in Chardonnay — the source of the blanc de blancs champagnes. The villages of Cramant, Avize, Le Mesnil-sur-Oger, and Vertus are 19th-century stone hamlets surrounded by world-class chalk-soil vineyards. Salon and Krug Clos du Mesnil sit here.',
      cost: '$100–$300 per couple (driver and small grower tasting)',
      tip: 'Visit a grower-producer (vigneron) rather than only the grand houses — Pierre Péters in Le Mesnil, Larmandier-Bernier in Vertus, Selosse in Avize. The grower champagnes are the wine-geek pick and often impossible to find at home.',
    },
    {
      icon: '🌳',
      title: 'Champagne Picnic at the Moulin de Verzenay',
      description: 'The 1818 windmill at Verzenay sits on the Montagne de Reims with a 360° view across the vineyards. Many hotels arrange picnic baskets — local cheeses (Chaource, Langres), charcuterie, baguette, and a bottle of champagne — for sunset on the chalk slope below the mill. The defining quiet Champagne moment.',
      cost: '$120–$250 per couple (hotel picnic basket and transfer)',
      tip: 'Royal Champagne Hotel and Domaine Les Crayères both offer this. Book a private driver for the return — the picnic includes a full bottle. Sunset is between 7pm (October) and 10pm (June) — plan accordingly.',
    },
  ],
  months: [
    { month: 'Jan', weather: 'Cold, dark, maisons by appointment only', emoji: '⛅', crowds: 'Minimal', price: 'Low', verdict: 'Skip — too cold and quiet' },
    { month: 'Feb', weather: 'Cold, vineyards bare', emoji: '⛅', crowds: 'Minimal', price: 'Low', verdict: 'Skip — limited' },
    { month: 'Mar', weather: 'Warming, pruning season ending', emoji: '⛅', crowds: 'Low', price: 'Low', verdict: 'Possible but cool' },
    { month: 'Apr', weather: 'Spring, vines budding', emoji: '🌤', crowds: 'Low', price: 'Mid', verdict: 'Pleasant — season opening' },
    { month: 'May', weather: 'Ideal — warm days, cool evenings, lush vineyards', emoji: '☀️', crowds: 'Moderate', price: 'Mid-high', verdict: 'Excellent — best month for vineyards' },
    { month: 'Jun', weather: 'Warm, long days, full visitor season', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Perfect — book early' },
    { month: 'Jul', weather: 'Hot, vines in full leaf', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Beautiful, can be hot midday' },
    { month: 'Aug', weather: 'Hot, French holidays, harvest building', emoji: '🌡️', crowds: 'High', price: 'High', verdict: 'Beautiful but crowded' },
    { month: 'Sep', weather: 'Warm, golden, vendanges (harvest) end of month', emoji: '☀️', crowds: 'High during harvest', price: 'High', verdict: 'Magical — but maisons busy mid-Sep' },
    { month: 'Oct', weather: 'Mild, golden vines, harvest done', emoji: '🌤', crowds: 'Moderate', price: 'Mid-high', verdict: 'The secret-best month' },
    { month: 'Nov', weather: 'Cool, vine leaves fallen, quiet', emoji: '⛅', crowds: 'Low', price: 'Mid', verdict: 'Atmospheric and intimate' },
    { month: 'Dec', weather: 'Cold, Christmas markets in Reims', emoji: '🎄', crowds: 'Low-mod', price: 'Mid', verdict: 'Magical for festive weekends' },
  ],
  budgetTiers: [
    {
      label: 'Boutique Charm',
      range: '$300–$500/night',
      gets: '4-star countryside hotels with restaurant, garden, and 12-25 rooms. Properties in the smaller villages around Épernay and Reims.',
      example: 'Château de Sacy, Hostellerie La Briqueterie (Vinay)',
    },
    {
      label: 'Premium Relais',
      range: '$500–$1,200/night',
      gets: 'Relais & Châteaux properties with full Michelin dining and proper spa. The flagship Champagne experience.',
      example: 'Domaine Les Crayères (Reims), Royal Champagne (Champillon)',
    },
    {
      label: 'Ultra-Luxury',
      range: '$1,200+/night',
      gets: 'Top suites at Royal Champagne and Les Crayères — full panoramic views over Reims or the Marne valley, butler service, Michelin tasting menus included.',
      example: 'Royal Champagne Coteaux Suite, Domaine Les Crayères Pavillon Suite',
    },
  ],
  areas: [
    {
      name: 'Reims',
      bestFor: 'Cathedral city, grand-maison cellars, urban base',
      description: 'Reims is the historic crown city of France — Gothic cathedral, the Palais du Tau, the Saint-Rémi basilica, and the underground chalk-cellar networks of Ruinart, Veuve Clicquot, Pommery, Taittinger. Les Crayères sits in a 17-acre park on the city edge. The most cultured base — and the city has the best restaurants of the region.',
    },
    {
      name: 'Épernay & the Avenue',
      bestFor: 'The capital of champagne — most concentrated grand maisons',
      description: 'Épernay is smaller than Reims but holds the densest concentration of grand champagne houses on its 1km Avenue de Champagne. Moët, Perrier-Jouët, Pol Roger, Mercier, de Castellane — all within walking distance. Hostellerie La Briqueterie is 10 minutes south in Vinay.',
    },
    {
      name: 'Champillon & the Marne Valley',
      bestFor: 'Hilltop hotels with vineyard panoramas, peace, Royal Champagne',
      description: 'Champillon sits on the chalk ridge above the Marne valley with the most extraordinary vineyard view in the region — directly down onto Hautvillers (where Dom Pérignon worked) and across the Marne valley. The Royal Champagne hotel & spa is here. The quietest, most panoramic base.',
    },
    {
      name: 'Côte des Blancs',
      bestFor: 'Chardonnay villages, blanc de blancs producers, vigneron culture',
      description: 'South of Épernay, the Côte des Blancs ridge runs through Cramant, Avize, Oger, Le Mesnil-sur-Oger — the home of the blanc de blancs cuvées. Smaller hotels, more grower-producer tastings, fewer day visitors. The wine-geek base.',
    },
  ],
  expertTips: [
    {
      tip: 'Book maison visits before you book the hotel',
      detail: 'Krug, Bollinger, Pol Roger, Salon — the houses you most want to visit require 4–8 weeks notice and are often booked solid. Email the visites teams directly with proposed dates before you lock in the hotel — it\'s painful to be at Royal Champagne unable to get into Krug 20 minutes away.',
    },
    {
      tip: 'Take the TGV — it\'s genuinely 45 minutes from Paris',
      detail: 'Paris Gare de l\'Est to Reims Centre is 45 minutes by TGV — faster than the airport transfer. Rent the car at Reims station for the vineyard touring. Couples coming from London Eurostar can transfer at Gare du Nord and be in Reims for lunch the same day from London.',
    },
    {
      tip: 'Avoid the last week of September — vendanges',
      detail: 'Harvest week is dramatic if you\'re a wine professional, but for honeymooners it means the maisons are working at peak capacity, visits get cancelled, and the road traffic of harvest trucks is unromantic. October once the harvest is done is the calmer, more beautiful version.',
    },
    {
      tip: 'Hire a driver for vineyard days',
      detail: 'Champagne tasting is real — 5–8 wines per maison, three maisons in a day. Driving home is not just illegal, it\'s genuinely dangerous. A driver for a 6-hour day runs $300–$500 and is the right way to do this region.',
    },
    {
      tip: 'Skip the grand-tour cellars, book grower-producers',
      detail: 'The Moët and Mercier mass-tour cellars are spectacular but impersonal. The real Champagne experience is a small visit at Pierre Péters, Egly-Ouriet, or Larmandier-Bernier — the chef de cave pours from cask, you discuss soils and dosage, and you taste vintages you cannot find at home.',
    },
  ],
  packing: [
    { item: 'Smart-casual dinner outfits with a layer', why: 'Royal Champagne, Les Crayères, and La Briqueterie all have dress codes at dinner. Linen trousers and a blazer for the man, a dress or smart blouse for the woman. Even in summer, evenings cool to 14-16°C on the ridge.' },
    { item: 'Walking shoes that look smart', why: 'Cellar visits involve real walking — Moët is 28km of tunnels, Mercier has chalk steps, Ruinart goes 30m underground. A grippy leather shoe is essential. Heels for the woman are a mistake.' },
    { item: 'A medium-weight jacket', why: 'Champagne is northern France. Even in May and September, an evening on the terrace at Royal Champagne drops below 15°C. The cellars themselves are constant 10-12°C — a layer for the underground tours is essential.' },
    { item: 'Padded wine carrier for the return', why: 'You will buy bottles you cannot find at home. A padded 12-bottle carrier in the car back to Paris (or for hotel shipping) is the practical move. Some maisons will ship internationally but the local cellar prices justify the effort.' },
    { item: 'A notebook for tasting notes', why: 'After three maisons in a day, the cuvées blur. A small notebook with your impressions of each wine is invaluable for the order list when you get home — and the chefs de cave appreciate seeing it out.' },
    { item: 'Cash for tips at the maisons', why: 'The chef de cave or the host who walks you through a private tasting at Bollinger or Pol Roger appreciates a €20-50 tip in cash. Not expected, always appreciated.' },
  ],
  guide: {
    getting: 'Take the TGV from Paris Gare de l\'Est to Reims Centre (45 min) or Épernay (1h 15min). From international: fly into Paris CDG (10 min RER to central Paris, then 30 min walk or metro to Gare de l\'Est) or Paris Orly. Some couples drive from Paris (1h 30min by A4 to Reims). Rent a car at Reims station for vineyard touring — Champillon, Avenue de Champagne, and the Côte des Blancs all need wheels.',
    where: 'Royal Champagne Hotel & Spa (Champillon) for the panoramic vineyard view and the aerial spa — the modern flagship. Domaine Les Crayères (Reims) for the Relais & Châteaux classic in a 17-acre park inside the city. Hostellerie La Briqueterie (Vinay) for the intimate boutique option near Épernay. L\'Assiette Champenoise (Tinqueux) for the foodies — three Michelin stars on site.',
    when: 'Mid-May to mid-July and the first half of October are the prime windows — warm days, lush vines, full maison schedules. Avoid the last week of September (harvest peak). Christmas weekends in December are magical for Reims cathedral and the Christmas markets, but cold.',
  },
  localFood: 'Jambon de Reims (the pink pressed-ham regional speciality), biscuit rose de Reims (the pink champagne-pairing biscuit), Chaource cheese from the village south of Reims, ratafia de Champagne (the fortified aperitif made by every grower), three-Michelin-star tasting menu at L\'Assiette Champenoise paired with growers\' champagnes, and the inevitable champagne at every meal — at lunch, with the cheese, after dinner.',
  currency: 'Euro (EUR)',
  language: 'French (English in maisons and luxury hotels, less in villages)',
  timezone: 'UTC+1 (CET) / UTC+2 (CEST in summer)',
  seo: { title: 'Champagne Honeymoon: 6 Hotels & Cellar Tours Scored 2026', description: 'Royal Champagne, Les Crayères ranked. Krug, Bollinger maison tours. 45 min TGV from Paris. From $400/night. May-Oct verdicts.' },
}

export default meta
