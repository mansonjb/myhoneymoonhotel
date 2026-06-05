import type { DestinationMeta } from '@/types/destination'

const meta: DestinationMeta = {
  hero: '/images/hotels/maison-lameloise-chagny-burgundy/hero.webp',
  tagline: 'Pinot Noir pilgrimage country — Beaune, the Côte d\'Or, and the most precise wine on earth.',
  intro: 'Burgundy is the most serious wine region in France and one of the most under-visited honeymoon destinations in Europe. The Côte d\'Or — 50 kilometres of east-facing limestone hillside between Dijon and Santenay — produces the world\'s most precise Pinot Noir (Vosne-Romanée, Gevrey-Chambertin, Volnay) and the benchmark for white Burgundy (Meursault, Puligny, Chassagne-Montrachet). Beaune, the medieval wine capital with its multi-coloured tile-roofed Hospices, is the obvious base. Chablis to the north, Cluny and the Mâconnais to the south, the Morvan national park to the west — the whole region is built for two-couple road trips with cellar visits, Michelin lunches, and stays at Relais & Châteaux properties that feel like the friend\'s farmhouse you never had. Burgundy is 2.5 hours by TGV from Paris and substantially quieter than Provence or Bordeaux. For wine-loving couples, no other French region competes.',
  bestTime: 'May–Jun & Sep–Oct',
  flightFrom: '2.5h TGV from Paris CDG',
  topExperience: 'Côte d\'Or Wine Pilgrimage',
  perfectFor: [
    'Wine-obsessed couples — Burgundy is the apex of Pinot Noir and Chardonnay terroir',
    'Honeymooners pairing Paris with countryside — easy 2.5h TGV from Gare de Lyon',
    'Couples who want Relais & Châteaux intimacy without Provence prices or crowds',
    'Gastronomes — Burgundy holds more Michelin stars per capita than any French region',
    'Slow-travel honeymooners who prefer cellar tastings to beach clubs',
  ],
  skipIf: [
    'You need beach, pool culture, or sun guarantee — Burgundy is continental and rural',
    'You don\'t drink wine — half the region\'s pleasure is closed to you',
    'You want nightlife — Beaune shuts down by 11pm, the villages by 9pm',
    'You\'re visiting mid-September during Vendanges and haven\'t booked — everything is full',
  ],
  experiences: [
    {
      icon: '🍷',
      title: 'Côte d\'Or Grand Cru Drive — Vosne to Volnay',
      description: 'The most famous 30km of vineyard in the world. Start in Gevrey-Chambertin, drive south through Vougeot (Château du Clos de Vougeot), Vosne-Romanée (stand at the gate of Romanée-Conti), Nuits-Saint-Georges, Pommard, Volnay. A driver and pre-booked tastings at three domaines — typically Comte Liger-Belair, Méo-Camuzet, or Drouhin-Laroze.',
      cost: '$600–$1,200 per couple (driver, tastings, lunch)',
      tip: 'Book domaine tastings 3-6 months ahead via your hotel concierge — top domaines do not accept walk-ins. The famous Romanée-Conti gate is a 30-second photo stop. Lunch at La Table d\'Olivier Leflaive in Puligny-Montrachet.',
    },
    {
      icon: '🏛',
      title: 'Beaune Hospices and Wine Auction Tour',
      description: 'The 1443 Hôtel-Dieu in Beaune is the most beautiful wine-building in France — multicoloured tiled roof, original pharmacy, the great hall where the November charity wine auction still happens. The Hospices owns 60 hectares of premier and grand cru vineyards. The audioguide tour is genuinely fascinating.',
      cost: '$60–$100 per couple (admission, café stop)',
      tip: 'Visit the Hospices at opening (9am) before the coach tours. Pair with the Marché aux Vins tasting in the Cordeliers cellars opposite, then lunch at La Maison de la Truffe — a hidden truffle bistro on rue d\'Alsace.',
    },
    {
      icon: '🥖',
      title: 'Saturday Market in Beaune and Lunch at Ma Cuisine',
      description: 'The Saturday morning market on Place de la Halle is the great regional weekly event — local cheeses (Époisses, Cîteaux), Charolais beef, rotisserie chickens, oysters from a man with a Brittany van. Walk it slowly with a coffee, then book lunch at Ma Cuisine — the legendary Beaune bistro of Pierre and Fabienne Escoffier.',
      cost: '$200–$350 per couple (market lunch, wine)',
      tip: 'Ma Cuisine books out 6-8 weeks ahead for Saturday. Order the boeuf bourguignon — the dish was perfected here. The wine list is one of the best by-the-glass selections in France. No credit cards historically; bring cash.',
    },
    {
      icon: '🚲',
      title: 'Voie des Vignes Bike Day — Beaune to Santenay',
      description: 'The Voie des Vignes is a 22km flat dedicated cycle path through the Côte de Beaune — Beaune → Pommard → Volnay → Meursault → Puligny → Chassagne → Santenay. The most beautiful day in Burgundy on two wheels. Lunch in Meursault at Le Chevreuil (the legendary village wine-and-andouillette bistro).',
      cost: '$100–$200 per couple (bike rental, lunch)',
      tip: 'Rent electric bikes from Bourgogne Évasion in Beaune (essential — the path is flat but 22km is long). Book Le Chevreuil lunch 2 weeks ahead. Allow taxis back from Santenay or arrange one-way rental.',
    },
    {
      icon: '⛪',
      title: 'Cluny Abbey and the Mâconnais',
      description: 'Cluny was the most powerful Romanesque abbey in medieval Europe — by 1100 it controlled 10,000 monks across 1,200 daughter houses. The surviving south transept is still extraordinary. Combine with a tasting at Domaine Leflaive\'s Mâcon estates or a lunch at Maison Lameloise in Chagny (three Michelin stars).',
      cost: '$300–$700 per couple (abbey, lunch, tasting)',
      tip: 'Cluny is 1h south of Beaune. Lameloise lunch needs 8-10 weeks ahead. Pair Cluny morning with Lameloise lunch then a slow drive back through the Mâconnais and the Roche de Solutré.',
    },
  ],
  months: [
    { month: 'Jan', weather: 'Cold, vineyards bare, restaurants quiet', emoji: '⛅', crowds: 'Minimal', price: 'Lowest', verdict: 'Atmospheric but limited' },
    { month: 'Feb', weather: 'Cold, pruning in the vineyards', emoji: '⛅', crowds: 'Minimal', price: 'Very low', verdict: 'Quiet, fireside, low value' },
    { month: 'Mar', weather: 'Warming, vines waking, Easter approaching', emoji: '🌤', crowds: 'Low', price: 'Low', verdict: 'Lovely if the weather cooperates' },
    { month: 'Apr', weather: 'Spring proper, vines budding, gentle warmth', emoji: '🌤', crowds: 'Moderate', price: 'Mid', verdict: 'Excellent — season opening properly' },
    { month: 'May', weather: 'Ideal — vines greening, long days, mild', emoji: '☀️', crowds: 'Moderate', price: 'Mid-high', verdict: 'One of the two best months' },
    { month: 'Jun', weather: 'Warm, full vine canopy, gardens peaking', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Perfect, book early' },
    { month: 'Jul', weather: 'Hot at midday, French school holidays starting', emoji: '🌡️', crowds: 'High', price: 'High', verdict: 'Beautiful, watch the heat' },
    { month: 'Aug', weather: 'Hot, many domaines closed, French holidays', emoji: '🌡️', crowds: 'Mod-high', price: 'Mid-high', verdict: 'Skip — too many domaine closures' },
    { month: 'Sep', weather: 'Vendanges! Harvest energy, golden light', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Magical if you book — frantic if you don\'t' },
    { month: 'Oct', weather: 'Golden vines, harvest finished, quieter', emoji: '🌤', crowds: 'Mod', price: 'Mid', verdict: 'The secret best month' },
    { month: 'Nov', weather: 'Vines bare, Hospices auction third weekend', emoji: '⛅', crowds: 'Low (peak for auction)', price: 'Low-mid', verdict: 'Auction weekend is iconic; rest is quiet' },
    { month: 'Dec', weather: 'Cold, Beaune Christmas market, fireside', emoji: '🎄', crowds: 'Low', price: 'Low-mid', verdict: 'Quietly magical for Noël' },
  ],
  budgetTiers: [
    {
      label: 'Boutique Charm',
      range: '$300–$500/night',
      gets: 'Beautifully restored bourgeois hotels in Beaune and Dijon, characterful village inns, excellent breakfast. The Burgundy value tier is strong.',
      example: 'Hostellerie du Chapeau Rouge (Dijon), L\'Hôtel Le Cep (Beaune)',
    },
    {
      label: 'Premium Relais',
      range: '$500–$900/night',
      gets: 'Full Relais & Châteaux — Michelin dining, large parks, spa, vineyard views. Half the price of equivalent Provence properties.',
      example: 'Hostellerie de Levernois, Domaine de Rymska',
    },
    {
      label: 'Ultra-Luxury',
      range: '$900–$2,000/night',
      gets: 'Best suites at the flagship properties — Maison Lameloise (Bocuse d\'Or three-star), Château de Sully apartments, full Rymska estate experience.',
      example: 'Maison Lameloise Junior Suite, Château de Sully',
    },
  ],
  areas: [
    {
      name: 'Beaune & the Côte de Beaune',
      bestFor: 'The honeymoon HQ — walled medieval town, best base for cellars',
      description: 'Beaune is the wine capital of Burgundy — walled, medieval, gastronomic, and surrounded by the great whites of the Côte de Beaune (Meursault, Puligny, Chassagne). The obvious base for a first Burgundy honeymoon. L\'Hôtel Le Cep is the classic in-town address; Hostellerie de Levernois is 8 minutes outside.',
    },
    {
      name: 'Côte de Nuits — Gevrey to Vosne-Romanée',
      bestFor: 'The grand-cru red heartland, romance of the great vineyards',
      description: 'The 20km between Dijon and Nuits-Saint-Georges holds the world\'s most expensive vineyards — Romanée-Conti, Chambertin, Musigny, Clos de Vougeot. Fewer hotels here than Beaune but quieter and closer to the iconic sites. Pair a Beaune base with a Côte de Nuits driving day.',
    },
    {
      name: 'Dijon & the Northern Côte',
      bestFor: 'Burgundy capital, mustard country, gothic architecture',
      description: 'Dijon is the historic capital — Palais des Ducs, the old half-timbered quarter, the mustard heritage. Less wine-focused than Beaune but a proper city with serious restaurants. Hostellerie du Chapeau Rouge is the in-town address. Closer to Paris by TGV than Beaune.',
    },
    {
      name: 'Southern Côte & Côte Chalonnaise',
      bestFor: 'Quieter villages, value vineyards, off the tourist path',
      description: 'South of Chagny into the Côte Chalonnaise (Mercurey, Rully, Givry) and toward Saint-Jean-de-Trézy — quieter, lower-priced, less famous vineyards but excellent wine and beautiful countryside. Domaine de Rymska is the country-estate hotel here.',
    },
  ],
  expertTips: [
    {
      tip: 'Book domaine cellar visits before you book your hotel',
      detail: 'Top domaines (DRC is essentially impossible, but Méo-Camuzet, Comte Liger-Belair, Drouhin-Laroze, Pierre Damoy, Domaine Leflaive) book 4-6 months ahead. Use your hotel concierge — properties like Levernois and Lameloise have relationships you cannot replicate yourself.',
    },
    {
      tip: 'Take the TGV from Paris, rent the car at Dijon',
      detail: 'Paris Gare de Lyon to Dijon by TGV is 1h 40min. From Dijon station, rent a car for 30 minutes south to Beaune. This saves the 3h+ drive from Paris and the urban traffic at both ends. Same logic for the return.',
    },
    {
      tip: 'Skip August — many domaines and the best restaurants are closed',
      detail: 'French wine producers take August off. Many of the small domaines close entirely, and the best Beaune restaurants (Ma Cuisine, Caves Madeleine) close for 2-3 weeks. May-July and September-October are the proper Burgundy windows.',
    },
    {
      tip: 'The November Hospices Auction weekend is the most iconic — but book a year ahead',
      detail: 'The third weekend of November is the Hospices de Beaune wine auction (run by Christie\'s since 2005). Three days of tastings (Trois Glorieuses), the auction itself, Beaune full of the world\'s wine trade. Hotels book out 12 months ahead at premium rates. Magical if you can secure it.',
    },
    {
      tip: 'Don\'t over-schedule — three tastings per day is the maximum',
      detail: 'Each serious cellar visit runs 60-90 minutes and includes 6-10 tastings. After three you stop being able to differentiate, and you should not drive. Two domaine visits in the morning and a long lunch with a producer at his restaurant is the better day.',
    },
  ],
  packing: [
    { item: 'Smart blazer or jacket for dinner', why: 'Three-star Michelin restaurants (Lameloise, Loiseau) and the Relais & Châteaux properties expect a jacket at dinner. Linen for summer, wool for autumn. No jeans at dinner.' },
    { item: 'Comfortable walking shoes you can wear at dinner', why: 'You\'ll walk cellars (cold, sometimes wet), vineyard rows, and medieval cobblestones. A leather sneaker that you can also wear with smart trousers at dinner is the right call.' },
    { item: 'A light puffer or wool coat', why: 'Cellars run at 12-14°C year-round. Even in summer you\'ll be cold underground for 60-90 minutes at a stretch. Layers, not bulk.' },
    { item: 'Reusable wine carrier bag', why: 'You will buy wine — possibly cases of it. A padded 6-bottle carrier in the rental car makes the cellar visits practical. Many domaines now offer direct US/UK shipping at sensible cost.' },
    { item: 'Compact umbrella', why: 'Burgundy weather is continental — afternoon thunderstorms in summer, drizzle in spring and autumn. A pocket umbrella saves vineyard walks from ruin.' },
    { item: 'Notebook for tasting notes', why: 'You will taste 40-80 wines across a 5-day stay. Write notes as you go — names, vintages, prices, your impressions. Three weeks later it will all blur otherwise.' },
  ],
  guide: {
    getting: 'Fly into Paris CDG (the main international gateway). From CDG: TGV direct to Dijon (1h 40min from Gare de Lyon, easy metro connection from CDG) or 3h drive to Beaune. From the US: direct flights into CDG (7-9h east coast, 11-12h west coast). From Dijon or Beaune station: rent a small car — essential for the cellar visits.',
    where: 'Hostellerie de Levernois (Levernois, 8 min from Beaune) for the classic Relais & Châteaux experience with Michelin restaurant. Maison Lameloise (Chagny) for the three-Michelin-star pilgrimage stay. Domaine de Rymska (Saint-Jean-de-Trézy) for the country-estate experience with horses and gastronomy. L\'Hôtel Le Cep (Beaune) for in-town walkability. Hostellerie du Chapeau Rouge (Dijon) for the urban base.',
    when: 'Mid-May through June and September through mid-October are the prime windows — long days, full domaine hours, civilised crowds, the best weather. Late September (Vendanges) is magical for wine lovers but requires booking by spring. August is wrong (closures). November Hospices weekend is iconic if you can secure it.',
  },
  localFood: 'Boeuf bourguignon (slow-braised beef in Pinot Noir) at Ma Cuisine in Beaune, oeufs en meurette (poached eggs in red wine sauce), gougères (warm Gruyère cheese puffs) with every aperitif, Époisses cheese (washed-rind, intensely pungent, the local pride), jambon persillé (parsleyed ham terrine, the regional Easter dish), and a tarte aux pommes with a glass of late-harvest Vouvray.',
  currency: 'Euro (EUR)',
  language: 'French (limited English in villages, English in hotels)',
  timezone: 'UTC+1 (CET) / UTC+2 (CEST in summer)',
  seo: { title: 'Burgundy Honeymoon: 6 Wine-Country Hotels Scored 2026', description: 'Lameloise, Levernois, Rymska, Le Cep ranked. From $400/night, 2.5h TGV from Paris. May-Oct verdicts.' },
}

export default meta
