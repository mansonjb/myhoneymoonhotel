import type { DestinationMeta } from '@/types/destination'

const meta: DestinationMeta = {
  hero: '/images/hotels/fairmont-le-chateau-frontenac-quebec/hero.webp',
  tagline: 'Old-world francophone romance in North America — Charlevoix mountains, Quebec City\'s walled old town, whale watching at Tadoussac.',
  intro: 'Quebec is the European honeymoon that doesn\'t need a transatlantic flight. Old Quebec City is the only walled city north of Mexico — cobbled streets, the spectacular Château Frontenac on the cliff above the St Lawrence, French bistros, candle-lit jazz bars, and an entire province that speaks French as its first language. Drive 90 minutes north and you\'re in Charlevoix, where the Laurentian mountains meet the river in a landscape of farmhouse cheese makers, Michelin-style fine dining at Fairmont Le Manoir Richelieu, and at Tadoussac, the most reliable beluga and blue-whale watching in the Atlantic. Add the Île d\'Orléans for cider houses, autumn foliage that rivals Vermont, and a winter season that lets you sleep at the Hôtel de Glace (rebuilt every January from 15,000 tonnes of ice and snow) — and you have an unusually flexible honeymoon destination that works in two distinct seasons: June–October for green-and-water romance, December–February for the genuine winter-wonderland fantasy.',
  bestTime: 'Jun–Oct + Dec–Feb',
  flightFrom: '1h from NYC, 7h from London',
  topExperience: 'Francophone Romance & Charlevoix Foliage',
  perfectFor: [
    'North American couples who want Europe-feel without crossing the Atlantic',
    'Foodies — Quebec has the strongest farm-to-table scene in North America and a serious bistro culture',
    'Autumn honeymooners — late September to mid-October Charlevoix foliage is among the world\'s best',
    'Couples who want flexibility between summer (Île d\'Orléans, whale watching) and winter (skiing, ice hotel)',
    'Anyone who finds Vermont charming but wants the volume turned up — Quebec is Vermont with Versailles',
  ],
  skipIf: [
    'You need warm-weather honeymoon temperatures — even July is mild (24°C average) and water is cold',
    'You don\'t want any French — the further from Quebec City you go, the less English you\'ll find',
    'You\'re November or April travellers — both are bleak shoulder seasons with closed activities',
    'You want a beach — Quebec has the St Lawrence and the Saguenay but neither is a swim-and-sunbathe scene',
  ],
  experiences: [
    {
      icon: '🏰',
      title: 'Stay at Fairmont Le Château Frontenac',
      description: 'The most photographed hotel in the world (per Fairmont), perched on Cap Diamant above the St Lawrence. Built 1893 by the Canadian Pacific Railway, restored continuously. The Frontenac is Quebec City — staying here puts the entire walled town on your doorstep. Book a Fairmont Gold St Lawrence-view room for the full effect.',
      cost: '$500–$1,500 per night',
      tip: 'Pay up for the river view. The interior-facing rooms lose 80% of the magic. Fairmont Gold floor is the closest the hotel comes to an adults-only experience.',
    },
    {
      icon: '🐋',
      title: 'Whale Watching at Tadoussac',
      description: 'Tadoussac sits at the confluence of the Saguenay fjord and the St Lawrence — the most reliable spot on the continent for beluga, minke, and blue whales. Small-boat zodiac trips from May through October. Sleep at Hôtel Tadoussac in the historic red-roofed clapboard hotel.',
      cost: '$120–$200 per person per excursion',
      tip: 'August–early October is peak. Zodiacs get closer than the big-boat tours but are colder; pack a windproof. The morning trip is calmer water than afternoon.',
    },
    {
      icon: '🍁',
      title: 'Charlevoix Autumn Drive',
      description: 'Drive from Baie-Saint-Paul north along Route 362 (the "Route du Fleuve") to La Malbaie. Mid-September to mid-October the maple, oak, and birch deliver foliage that rivals Vermont with the St Lawrence as backdrop. Stop at La Laiterie Charlevoix for cheese, at Domaine Forget for music.',
      cost: '$50–$150 (driving + tastings)',
      tip: 'Sleep at Le Germain Charlevoix in Baie-Saint-Paul — a converted farm with a Michelin-bib bistro. Peak colour shifts year to year; check the Charlevoix Tourism foliage map weekly in September.',
    },
    {
      icon: '🧊',
      title: 'Sleep at the Hôtel de Glace',
      description: 'The only ice hotel in North America, rebuilt every January from 30,000 tonnes of snow and 500 tonnes of ice. Sleep in a heated sleeping bag on a bed carved from ice in a room sculpted by artists. One night is enough — most couples combine with three at the Fairmont Le Château Frontenac.',
      cost: '$400–$700 for the one-night experience',
      tip: 'Operating window is roughly January 5 to mid-March. Book months ahead — capacity is tiny. The hot tub and sauna before bed are essential.',
    },
    {
      icon: '🍷',
      title: 'Île d\'Orléans Cider & Wine Tour',
      description: '45 minutes from Quebec City, Île d\'Orléans is a 30-mile loop of cider houses, strawberry farms, and small wineries. Cassis Monna et Filles for blackcurrant cordial, Domaine Steinbach for ice cider, lunch at La Goéliche overlooking the river.',
      cost: '$100–$200 per couple (tastings + lunch)',
      tip: 'Hire a driver — the tastings are real. La Société Taxi or a private driver from your hotel for $250–$300 makes this a much better day.',
    },
  ],
  months: [
    { month: 'Jan', weather: 'Cold (-10°C), snow, ice hotel open', emoji: '❄️', crowds: 'Low', price: 'Mid', verdict: 'Winter wonderland — book ice hotel now' },
    { month: 'Feb', weather: 'Coldest, Carnaval de Québec', emoji: '❄️', crowds: 'Moderate', price: 'Mid-high', verdict: 'Carnaval week is magical' },
    { month: 'Mar', weather: 'Cold, thawing, sugar shacks open', emoji: '⛅', crowds: 'Low', price: 'Mid', verdict: 'Cabane à sucre month — fun' },
    { month: 'Apr', weather: 'Mud season, much closed', emoji: '⛅', crowds: 'Minimal', price: 'Low', verdict: 'Avoid — between seasons' },
    { month: 'May', weather: 'Spring proper, lilacs', emoji: '🌤', crowds: 'Low', price: 'Mid', verdict: 'Lovely if you accept cool nights' },
    { month: 'Jun', weather: 'Warm (22°C), long days', emoji: '☀️', crowds: 'Moderate', price: 'Mid-high', verdict: 'Excellent — terrace season begins' },
    { month: 'Jul', weather: 'Warm (25°C), festivals', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Peak — book early, busy in town' },
    { month: 'Aug', weather: 'Warm, whale watching peak', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Best for whales, still busy' },
    { month: 'Sep', weather: 'Cool, crisp, foliage starts', emoji: '🍁', crowds: 'Moderate', price: 'Mid-high', verdict: 'Excellent — foliage begins late month' },
    { month: 'Oct', weather: 'Peak foliage, cool', emoji: '🍁', crowds: 'Moderate', price: 'High', verdict: 'The best month — book Charlevoix early' },
    { month: 'Nov', weather: 'Grey, between seasons', emoji: '⛅', crowds: 'Low', price: 'Low', verdict: 'Skip — bleak' },
    { month: 'Dec', weather: 'Snow, German Christmas market', emoji: '🎄', crowds: 'Moderate', price: 'Mid-high', verdict: 'Magical — Quebec at Christmas' },
  ],
  budgetTiers: [
    {
      label: 'Boutique',
      range: '$250–$500/night',
      gets: 'Beautiful boutique inns in Old Quebec or converted farms in Charlevoix. Excellent value at this tier — Quebec is far cheaper than European equivalents.',
      example: 'Auberge Saint-Antoine, Le Germain Charlevoix',
    },
    {
      label: 'Premium',
      range: '$500–$1,000/night',
      gets: 'Fairmont Gold rooms at the Château Frontenac or Le Manoir Richelieu, suite-grade rooms at the best Charlevoix inns. The honeymoon sweet spot.',
      example: 'Château Frontenac (Fairmont Gold river view), Le Manoir Richelieu (signature suite)',
    },
    {
      label: 'Ultra-Luxury',
      range: '$1,000+/night',
      gets: 'River-view suites at the Frontenac, full-floor experiences at Le Manoir Richelieu. Plus private guide and chauffeur days.',
      example: 'Frontenac Royal Suite, Manoir Richelieu Premier Suite',
    },
  ],
  areas: [
    {
      name: 'Old Quebec City',
      bestFor: 'Walled-city romance — cobblestones, bistros, Château Frontenac',
      description: 'Upper Town inside the walls is the honeymoon centre — Château Frontenac on the cliff, Place d\'Armes, the Plains of Abraham, the Citadelle. Lower Town below has the Petit-Champlain and Place Royale. Auberge Saint-Antoine in Lower Town is the boutique alternative to the Frontenac.',
    },
    {
      name: 'Charlevoix (Baie-Saint-Paul to La Malbaie)',
      bestFor: 'Mountains-meet-river, foliage, art galleries',
      description: 'Two-hour drive northeast of Quebec City. Baie-Saint-Paul (artist galleries, Le Germain), then La Malbaie (Fairmont Le Manoir Richelieu — the original Charlevoix grand hotel on a cliff above the St Lawrence). The Route 362 between them is one of North America\'s great drives.',
    },
    {
      name: 'Tadoussac & the Saguenay',
      bestFor: 'Whale watching, fjord, dramatic landscape',
      description: 'Three hours from Quebec City at the mouth of the Saguenay fjord. Hôtel Tadoussac (vintage red-roofed clapboard hotel) is the only proper honeymoon accommodation; zodiac whale-watching from the village pier; the Saguenay fjord cruise from Baie-Sainte-Catherine on the south side.',
    },
    {
      name: 'Île d\'Orléans',
      bestFor: 'Day trip from Quebec City — cider, wine, river views',
      description: 'A 30-mile-loop island 15 minutes from Quebec City. Cider houses, strawberry farms, small wineries, and country churches. La Goéliche has rooms if you want to overnight, but most couples treat it as a long day trip from Old Quebec.',
    },
  ],
  expertTips: [
    {
      tip: 'Stay in two regions — Old Quebec + Charlevoix is the perfect pairing',
      detail: '3 nights at the Frontenac or Auberge Saint-Antoine for city romance, 3 nights at Le Manoir Richelieu or Le Germain Charlevoix for mountains and river. Add 1 night at Tadoussac in whale season. The drive between them is part of the honeymoon.',
    },
    {
      tip: 'Charlevoix needs a hire car — Quebec City does not',
      detail: 'Old Quebec is entirely walkable inside the walls. Hire your car at the end of the city stay — pick up at Quebec City airport (YQB) for the Charlevoix and Tadoussac drives. Drop in Quebec City before flying home.',
    },
    {
      tip: 'Foliage peak is late September to mid-October, but exact week varies',
      detail: 'Peak Charlevoix colour shifts by 7–10 days year to year. Check the Bonjour Québec foliage map every Friday in September. If foliage is a primary motivator, book a flexible-rate hotel and decide the final week last-minute.',
    },
    {
      tip: 'For winter: book the Hôtel de Glace and Carnaval together',
      detail: 'The ice hotel operates roughly January 5 to mid-March; the Carnaval de Québec runs the first two weekends of February. Pair one night at the Hôtel de Glace with three nights at the Frontenac during Carnaval — the perfect francophone winter honeymoon.',
    },
    {
      tip: 'Reserve top restaurants 4–6 weeks ahead',
      detail: 'Quebec\'s top tables — Légende, Laurie Raphaël, Le Saint-Amour in Quebec City; La Pinsonnière, Le Mouton Noir in Charlevoix — book out at honeymoon hours. Reserve as soon as the trip is confirmed.',
    },
  ],
  packing: [
    { item: 'Layered insulation — fleece + light down + waterproof shell', why: 'Quebec\'s weather swings hard, both summer (cool evenings) and winter (sub-zero days). Layering is the entire game.' },
    { item: 'Walking shoes with grip', why: 'Old Quebec\'s cobblestones are slippery in rain and lethal in snow. In winter, micro-spikes that slip over your boots are sold locally.' },
    { item: 'Smart-casual dinner outfit', why: 'The best Quebec City restaurants and Le Manoir Richelieu\'s main dining room have a quiet collar-and-jacket expectation. A blazer for him, a silk dress for her covers everything.' },
    { item: 'Winter accessories (if Dec–Feb): hat, mittens, scarf', why: 'A wool hat and mittens (not gloves) are non-negotiable below -5°C. Wind chill at the Plains of Abraham is real. Locals layer mittens over thinner gloves.' },
    { item: 'Insect repellent (if Jun–Aug, in Charlevoix)', why: 'Mosquitoes and black flies are real in the Laurentians in June and early July. Old Quebec City is fine; Charlevoix forest walks are not.' },
    { item: 'Adapter — none needed (US plugs)', why: 'Same plugs and voltage as the United States. US devices work without an adapter. UK and EU travellers need a US-style adapter.' },
  ],
  guide: {
    getting: 'Fly into Québec City Jean Lesage (YQB) for the most direct route — daily nonstops from Toronto, Montreal, NYC. International travellers connect via Montreal (YUL) or Toronto (YYZ). From Europe: fly to Montreal direct (7h from London/Paris), then 2.5h drive or short flight east to Quebec City. Hire car at YQB on arrival if doing Charlevoix.',
    where: 'Fairmont Le Château Frontenac or Auberge Saint-Antoine for Old Quebec. Fairmont Le Manoir Richelieu (cliff-top grandeur) or Le Germain Charlevoix (boutique farm) for Charlevoix. Hôtel Tadoussac for whale season. The Hôtel de Glace for the one-night winter experience.',
    when: 'Late September to mid-October for foliage — the signature Quebec honeymoon. June–August for warm weather and whale watching. December–February for snow, Carnaval, and the Hôtel de Glace. Avoid November and April.',
  },
  localFood: 'Poutine done properly (Chez Ashton or Le Chic Shack in Quebec City), tourtière (meat pie) at Aux Anciens Canadiens, smoked salmon from St-Aubin smokehouse on Île d\'Orléans, Charlevoix cheese (Le 1608, Migneron, Hercule) with ice cider, tasting menu at Légende or Laurie Raphaël, sugar pie and maple-tapped desserts at any Charlevoix inn, and a Saguenay wild blueberry tart in August.',
  currency: 'Canadian Dollar (CAD)',
  language: 'French (English in hotels and Quebec City)',
  timezone: 'UTC-5 (EST) / UTC-4 (EDT in summer)',
  seo: { title: 'Quebec Honeymoon: 6 Castle & Lodge Hotels Scored 2026', description: '6 Quebec City & Charlevoix hotels ranked. Frontenac, Manoir Richelieu, Tadoussac. From $300/night. Foliage verdicts.' },
}

export default meta
