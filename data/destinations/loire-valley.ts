import type { DestinationMeta } from '@/types/destination'

const meta: DestinationMeta = {
  hero: '/images/hotels/chateau-dartigny-loire-valley/hero.webp',
  tagline: 'Châteaux country — sleep in a Renaissance fairy tale, an hour from Paris.',
  intro: 'The Loire Valley is the most cinematic stretch of France that almost no honeymoon couple seriously considers — and that\'s a missed opportunity. Stretching 280 kilometres along the slow-moving Loire river between Orléans and Angers, it holds the densest concentration of Renaissance châteaux in the world: Chambord with its 426 rooms and double-helix staircase by Leonardo, Chenonceau bridging the Cher river on five arches, Cheverny that inspired Hergé\'s Marlinspike Hall. The genuinely remarkable thing is how many of these châteaux are now functioning 4- and 5-star hotels — Château d\'Artigny, Domaine des Hauts de Loire, Château de Pray. You can sleep in a 17th-century turret, eat a Michelin dinner under painted ceilings, and visit three of the world\'s great châteaux before lunch. All an hour from Paris on the TGV. For a honeymoon couple wanting French romance without Côte d\'Azur prices or Provence saturation, the Loire is the value play of the decade.',
  bestTime: 'May–Sep',
  flightFrom: '1h TGV from Paris CDG',
  topExperience: 'Sleeping in a Renaissance Château',
  perfectFor: [
    'Couples for whom history, architecture, and fairy-tale romance beat beaches and pool bars',
    'Honeymooners on a Paris stopover who want a four-day pairing without long transfers',
    'Wine lovers — Vouvray, Sancerre, Chinon, and the Loire whites are world-class and under-priced',
    'First-time European travellers who want a manageable, beautifully signposted, English-spoken French region',
    'Couples on a real honeymoon budget who still want 5-star châteaux — the Loire is half the price of Provence',
  ],
  skipIf: [
    'You need beach access or a pool — the Loire has rivers and reflective lakes, not Mediterranean swimming',
    'You\'re looking for nightlife — the Loire is a slow, rural, after-dinner-walk kind of region',
    'You only have three days — the châteaux deserve at least five nights to feel anything but rushed',
    'You\'re traveling in November to March — many châteaux close or run skeleton hours, gardens are bare',
  ],
  experiences: [
    {
      icon: '🏰',
      title: 'Château de Chenonceau — Sunrise Visit',
      description: 'Chenonceau is the most romantic château in France — the only one built directly across a river, with the gallery arching on five Renaissance arches over the Cher. Catherine de\' Medici hosted the first ever firework display here in 1577. The 8:30am opening gives you the gallery alone, before the coach parties from Tours.',
      cost: '$30–$50 per couple (admission)',
      tip: 'Buy tickets online for the 8:30am opening slot. Walk the gallery to the south bank first, then return slowly through the gardens of Diane de Poitiers. Skip the maze unless you have kids. Lunch at L\'Orangerie on site is genuinely good.',
    },
    {
      icon: '🐎',
      title: 'Château de Chambord by Hot-Air Balloon',
      description: 'Chambord is the largest château in the Loire — François I built it in 1519 as a hunting lodge with 426 rooms, 282 fireplaces, and a double-helix staircase designed by Leonardo da Vinci. Seeing the roof line of 800 carved chimneys from a hot-air balloon at dawn is the unforgettable Loire moment.',
      cost: '$500–$800 per couple (balloon flight with champagne)',
      tip: 'Book through Aérocom Montgolfière, with departures from a field near Chaumont-sur-Loire. Dawn flights only — winds calm down at sunset but the light is wrong. Cancellation rate is high — build a buffer day.',
    },
    {
      icon: '🍷',
      title: 'Vouvray and Chinon Wine Day',
      description: 'The Loire whites are radically under-priced for the quality. A day in Vouvray and Chinon (45 minutes apart) — cellar visit at Domaine Huet (the Vouvray reference), tasting at Bernard Baudry in Chinon, lunch at the village bistro Au Chapeau Rouge. Both villages are tiny, walkable, ancient.',
      cost: '$300–$500 per couple (driver, tastings, lunch)',
      tip: 'Hire a driver — these tastings are real (5-7 wines per cellar) and the back roads are unsignposted. Buy direct from the domaines and have them ship — it\'s legal to receive France-shipped wine in the US and UK with the right documentation.',
    },
    {
      icon: '🚲',
      title: 'Loire à Vélo Bike Day',
      description: 'The Loire à Vélo is 900km of dedicated cycle path along the river — one of the best cycle infrastructures in Europe. The Amboise-to-Chaumont stretch (25km flat) is the showpiece — you ride along the riverbank from Amboise\'s royal château to Chaumont\'s clifftop gardens, lunching at a village along the way.',
      cost: '$80–$150 per couple (bike rental and lunch)',
      tip: 'Rent electric bikes from Détours de Loire in Amboise. The flat profile and the gentle Loire are perfect for non-cyclists. Pack a swimsuit — the Loire is swimmable in summer at the sandbars between Amboise and Tours.',
    },
    {
      icon: '🎨',
      title: 'Clos Lucé — Leonardo\'s Last Home',
      description: 'François I brought Leonardo da Vinci to Amboise in 1516 and gave him the Clos Lucé manor house, connected to the royal château by an underground tunnel. Leonardo lived here until his death in 1519, finishing the Mona Lisa in the bedroom. The house, the period workshop, and the garden of Leonardo\'s inventions are extraordinary.',
      cost: '$50–$80 per couple (admission and lunch)',
      tip: 'Visit late afternoon (after 3pm) when the morning groups have left. The garden full of full-scale working models of Leonardo\'s machines is genuinely thrilling. Café Renaissance in the courtyard for an early dinner.',
    },
  ],
  months: [
    { month: 'Jan', weather: 'Cold, many châteaux closed', emoji: '⛅', crowds: 'Minimal', price: 'Lowest', verdict: 'Skip — too many closures' },
    { month: 'Feb', weather: 'Cold, hunting season ending', emoji: '⛅', crowds: 'Minimal', price: 'Low', verdict: 'Atmospheric but limited' },
    { month: 'Mar', weather: 'Warming, gardens awakening', emoji: '🌤', crowds: 'Low', price: 'Low', verdict: 'Lovely for châteaux, cold for outside' },
    { month: 'Apr', weather: 'Spring proper, garden festivals starting', emoji: '🌤', crowds: 'Moderate', price: 'Mid', verdict: 'Excellent — gardens at their freshest' },
    { month: 'May', weather: 'Ideal — warm, long days, gardens peaking', emoji: '☀️', crowds: 'Moderate', price: 'Mid-high', verdict: 'The best month' },
    { month: 'Jun', weather: 'Warm, hot at midday, full season', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Perfect, book early' },
    { month: 'Jul', weather: 'Hot, son et lumière shows at châteaux', emoji: '🌡️', crowds: 'Peak', price: 'High', verdict: 'Beautiful but busy' },
    { month: 'Aug', weather: 'Hottest, French school holidays', emoji: '🌡️', crowds: 'Peak', price: 'High', verdict: 'Crowded but doable' },
    { month: 'Sep', weather: 'Warm, harvest in vineyards, quieter', emoji: '☀️', crowds: 'Moderate', price: 'Mid-high', verdict: 'The secret-best month' },
    { month: 'Oct', weather: 'Golden, autumn vines, fewer visitors', emoji: '🌤', crowds: 'Low-mod', price: 'Mid', verdict: 'Excellent — autumn colour and harvest' },
    { month: 'Nov', weather: 'Cool, châteaux quietening, closures starting', emoji: '⛅', crowds: 'Low', price: 'Low', verdict: 'Atmospheric for some, bleak for others' },
    { month: 'Dec', weather: 'Cold, château Christmas decorations', emoji: '🎄', crowds: 'Low', price: 'Low-mid', verdict: 'Magical for Noël weekends' },
  ],
  budgetTiers: [
    {
      label: 'Boutique Charm',
      range: '$300–$500/night',
      gets: 'Genuine small châteaux turned 4-star hotels with restaurant, garden, and 12-20 rooms. The Loire\'s value proposition shines at this tier.',
      example: 'Château de Pray (Amboise), Le Choiseul (Amboise)',
    },
    {
      label: 'Premium Relais',
      range: '$500–$900/night',
      gets: '5-star Relais & Châteaux properties — full Michelin dining, large parks, spa, exquisite restoration. Half the price of equivalent Provence properties.',
      example: 'Domaine des Hauts de Loire (Onzain), Château d\'Artigny (Montbazon)',
    },
    {
      label: 'Ultra-Luxury',
      range: '$900–$2,000/night',
      gets: 'Best suites at the flagship properties — full château apartments with original 16th-century features, private terraces overlooking parkland. Still cheaper than equivalent Côte d\'Azur tier.',
      example: 'Suite Louis XV at Domaine des Hauts de Loire, Château de Marçay master suites',
    },
  ],
  areas: [
    {
      name: 'Amboise & Tours',
      bestFor: 'Central base for major châteaux — best for first-time visitors',
      description: 'Amboise sits at the geographic heart of the Loire — the royal château where François I housed Leonardo, the Clos Lucé manor, and 30 minutes from Chenonceau, Chaumont, and Chambord. Le Choiseul and Château de Pray are the romantic hotels here. The best base for a 5-night Loire tour.',
    },
    {
      name: 'Onzain & the Loir-et-Cher',
      bestFor: 'Quiet countryside, top Relais & Châteaux, fewer day-trippers',
      description: 'Onzain is the village outside Blois with the legendary Domaine des Hauts de Loire — a Relais & Châteaux hunting estate with 70 hectares of woodland. Quieter than Amboise, closer to Chambord, and the better base for couples who want park walks and a Michelin restaurant on the property.',
    },
    {
      name: 'Montbazon & the Touraine',
      bestFor: 'Easy TGV access, Château d\'Artigny, southern Loire wineries',
      description: 'Just south of Tours, Montbazon is the Touraine wine country — Vouvray to the east, Chinon to the west, the Indre river running past Château d\'Artigny\'s neoclassical bulk on the hillside. The fastest base from Paris (1h TGV to Tours, then 15 minutes by car).',
    },
    {
      name: 'Saumur & the Western Loire',
      bestFor: 'Sparkling wine country, equestrian history, off-the-tourist-route',
      description: 'The western reaches of the Loire — Saumur with its white-tufa château above the river, the Cadre Noir equestrian academy, the Crémant sparkling-wine caves, and a quieter pace. Fewer château hotels but the Saumur-Champigny reds and the Loire sparkling are the food-and-wine reasons to come.',
    },
  ],
  expertTips: [
    {
      tip: 'Stay in one base for the whole stay, not three',
      detail: 'The Loire is 280km but the great châteaux cluster within a 40km radius around Amboise and Blois. Pick one property — Domaine des Hauts de Loire, Château d\'Artigny, or Château de Pray — and day-trip from there. Moving every two nights wastes the value of the château hotel itself.',
    },
    {
      tip: 'Take the TGV from Paris, rent the car at Tours',
      detail: 'Paris CDG to Tours by TGV is 1h. From Tours station, picking up a rental car is 10 minutes. This saves the 3h drive from Paris (and the Paris traffic at either end) and adds a beautiful train ride through northern France. The same logic works for the return.',
    },
    {
      tip: 'Three châteaux maximum per day or you start to hate them',
      detail: 'The châteaux are huge and dense with content. After three, even history-loving couples get glassy. Pick a sequence (Chenonceau morning, Chaumont afternoon, return for spa) rather than trying to bag all 12 of the famous ones. Two châteaux plus a winery is better than four châteaux.',
    },
    {
      tip: 'Book son et lumière for an evening at Chambord or Blois',
      detail: 'The summer night-time light shows projected onto the châteaux facades are genuinely beautiful — Chambord\'s Dream (Le Songe) runs nightly July-September. Pair with a candlelit dinner back at your château hotel. The most magical thing in the Loire summer.',
    },
    {
      tip: 'The Loire whites are the best value in France',
      detail: 'A great Vouvray sec or moelleux costs €15-25 at the cellar. Sancerre Blanc costs €18-30. The same quality from Burgundy or the Rhône runs three to five times the price. Stock up — they ship to the US and UK at sensible cost.',
    },
  ],
  packing: [
    { item: 'Comfortable walking shoes that look smart', why: 'Châteaux are big. Chambord alone is 5km of walking inside. Cobblestones in every village. You want a shoe you can wear all day to Chenonceau and again at dinner at the Relais. A leather sneaker is the right call.' },
    { item: 'Light jacket for spring and autumn evenings', why: 'The Loire is northern France. Even in May and September, evenings drop to 12-15°C. Most of the château hotels have a dress code at dinner — a blazer for the man, a cardigan for the woman is the unofficial uniform.' },
    { item: 'A small umbrella', why: 'The Loire weather is not Provence. Summer afternoon thunderstorms are common. A pocket umbrella saves the day-trip to Chambord from total ruin.' },
    { item: 'Notebook for château tickets', why: 'Many châteaux still have entry by paper ticket. A small folder or zip pouch keeps the tickets, vineyard cards, and Loire pass cards organised. You\'ll accumulate 20-30 over a week.' },
    { item: 'Reusable wine carrier bag', why: 'You will buy wine. The châteaux often offer a free tasting and a 10% case discount on the day. A padded 6-bottle carrier in the rental car makes the cellar visits practical.' },
    { item: 'Smart-casual dinner outfits', why: 'Relais & Châteaux properties expect proper dinner dress. Linen trousers and a smart shirt for the man, a dress or blouse-and-trousers for the woman. The Loire hotels are formal in a quiet, old-money French way.' },
  ],
  guide: {
    getting: 'Fly into Paris CDG (the main international gateway) or Paris Orly. From the US: direct flights from New York, Boston, Washington, Atlanta, LA, San Francisco (7-11h). From the airport: TGV direct from CDG to Tours St-Pierre-des-Corps (1h 30min) or to Saint-Pierre-des-Corps from Gare Montparnasse (1h). Rent a car at the Tours station — essential for the châteaux. Driving from Paris is 2h 30min but adds urban traffic at both ends.',
    where: 'Domaine des Hauts de Loire (Onzain) for the Relais & Châteaux experience in classic Loire countryside. Château d\'Artigny (Montbazon) for the grand neoclassical pile with full spa. Le Choiseul (Amboise) for the most central base with town walkability. Château de Pray (Amboise) for the value-tier authentic château experience.',
    when: 'Mid-May through June and September through mid-October are the prime windows — long days, gardens at their peak, full château hours, civilised crowds. July and August work but draw French family holidaymakers. November to March sees many properties on reduced hours or closed.',
  },
  localFood: 'Rillettes de Tours (slow-cooked pork rillettes, the regional spread) on fresh baguette, sandre au beurre blanc (river-caught pike-perch with the Loire\'s signature butter-white-wine sauce), goat\'s cheese in every form (Sainte-Maure-de-Touraine, Selles-sur-Cher, Crottin de Chavignol — the Loire is goat country), tarte Tatin (invented at the Hôtel Tatin in Lamotte-Beuvron in 1898), and Vouvray demi-sec with every cheese plate.',
  currency: 'Euro (EUR)',
  language: 'French (English in tourist châteaux and hotels, less in villages)',
  timezone: 'UTC+1 (CET) / UTC+2 (CEST in summer)',
  seo: { title: 'Loire Valley Honeymoon: 6 Château Hotels Scored 2026', description: 'Sleep in Renaissance châteaux. Artigny, Hauts de Loire, Pray ranked. From $400/night, 1h TGV from Paris. May-Oct verdicts.' },
}

export default meta
