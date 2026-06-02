import type { DestinationMeta } from '@/types/destination'

const meta: DestinationMeta = {
  hero: '/images/hotels/grand-hotel-du-cap-ferrat-cote-dazur/hero.webp',
  tagline: 'Saint-Tropez, Cap-Ferrat, Cannes — belle époque glamour on the French Riviera.',
  intro: 'The Côte d\'Azur is the original honeymoon coast — 120 kilometres of pine-shaded headlands, ochre villas, and a Mediterranean so blue it gave the coast its name. Edith Wharton wrote about it; F. Scott Fitzgerald drank at Hotel Belles Rives; Picasso painted at Antibes. The Riviera has never stopped attracting the people who can choose anywhere. Today it delivers a specific kind of luxury — belle époque palaces like the Grand-Hôtel du Cap-Ferrat and the legendary Hôtel du Cap-Eden-Roc, the yacht-set of Saint-Tropez, the perched medieval villages of Èze and Saint-Paul-de-Vence, and the Pampelonne beach clubs where lunch lasts five hours. Couples come for the glamour, the food, and the sense that every meal is a small occasion.',
  bestTime: 'May–Jun & Sep–Oct',
  flightFrom: '2h from London, 1.5h from Paris',
  topExperience: 'Belle Époque Riviera Glamour',
  perfectFor: [
    'Couples who want a European luxury honeymoon with palace-hotel polish and yacht-culture energy',
    'Lovers of art, design, and architecture — Matisse, Picasso, Chagall, Maeght, Fondation Carmignac',
    'Food and wine couples — every village has a Michelin restaurant and a rosé domaine within 15 minutes',
    'Travelers combining beach with culture — the coast is 90 minutes end to end so you can move easily',
    'Honeymooners who want the convenience of European infrastructure with the romance of the Mediterranean',
  ],
  skipIf: [
    'You\'re traveling in August — the coast is uncomfortably crowded and the Côte d\'Azur road becomes a parking lot',
    'You want budget travel — the Riviera is one of the most expensive Mediterranean coasts and there is no cheap version',
    'You want true seclusion — even Cap-Ferrat is on a busy coastline and quiet is relative',
    'You\'re after Caribbean-style white-sand beaches — the Riviera is pebbles and rocks, except Pampelonne',
  ],
  experiences: [
    {
      icon: '⛵',
      title: 'Private Day Yacht to the Îles de Lérins',
      description: 'A private skippered yacht from Cannes or Antibes for a day on the water — the Îles de Lérins (Sainte-Marguerite, where the Man in the Iron Mask was imprisoned, and Saint-Honorat with its working Cistercian monastery and monk-made wine), swimming in turquoise coves, lunch on board.',
      cost: '$1,200–$3,500 per couple (full day with crew)',
      tip: 'Charter through your hotel concierge — Cap-Eden-Roc and Cap-Ferrat both have preferred captains who know the quiet anchorages off Cap d\'Antibes. Avoid the Saint-Tropez bay in August at all costs.',
    },
    {
      icon: '🎨',
      title: 'Fondation Maeght & Saint-Paul-de-Vence',
      description: 'The Fondation Maeght above Saint-Paul-de-Vence is one of Europe\'s finest private modern art collections — Miró sculptures in the garden, Chagall mosaics, a Giacometti courtyard. Pair with lunch at La Colombe d\'Or in the village, where Picasso, Léger, and Matisse paid their bills in paintings still hanging on the walls.',
      cost: '$200–$400 per couple (entry, lunch, taxi)',
      tip: 'Book La Colombe d\'Or three weeks ahead. Ask for the garden terrace under the fig tree, not the indoor dining room. Visit Maeght early (10am opening) before tour buses arrive from Nice.',
    },
    {
      icon: '🥂',
      title: 'Pampelonne Beach Club Day',
      description: 'A long lunch at Club 55 or La Réserve à la Plage on Pampelonne — the 5km of white sand south of Saint-Tropez that defined Riviera beach culture. Lunch with rosé runs from 1pm to 5pm. Sunbeds, swims, more rosé, the gentle judgement of beautiful people.',
      cost: '$400–$800 per couple (sunbeds and lunch)',
      tip: 'Book Club 55 a month ahead for a beach-front table. La Réserve à la Plage is the sleeker, quieter alternative. Avoid Friday and Saturday lunches in July-August — they\'re a different sport.',
    },
    {
      icon: '🏰',
      title: 'Èze Village and the Sentier Nietzsche',
      description: 'The medieval village of Èze sits 427m above the sea on a rocky outcrop between Nice and Monaco. The Jardin Exotique at the summit has the finest view on the entire coast. Walk down the Sentier Nietzsche to the sea (the philosopher composed Zarathustra here), then lunch at the Château de la Chèvre d\'Or.',
      cost: '$150–$350 per couple (lunch, entries)',
      tip: 'Drive up in the late afternoon to avoid the cruise-ship coaches that arrive mid-morning from Monaco. The Sentier Nietzsche descent takes 45 minutes; the climb back up takes 90 minutes — taxi or hotel transfer instead.',
    },
    {
      icon: '🌅',
      title: 'Monaco Evening & Casino de Monte-Carlo',
      description: 'Drive 25 minutes east from Nice to Monaco for a full belle époque evening — aperitif at the Hôtel de Paris, dinner at the Louis XV (three Michelin stars), then a turn at the Casino de Monte-Carlo (passport required). The casino square is one of the most theatrical addresses in Europe.',
      cost: '$600–$1,500 per couple (dinner and gambling float)',
      tip: 'Dress code is real — jacket required, no jeans, no sneakers. The Salle Europe (1865) is the historic gambling room; the Salles Privées require €50 entry but house the high-stakes tables.',
    },
  ],
  months: [
    { month: 'Jan', weather: 'Cool, mild, mostly closed beach clubs', emoji: '⛅', crowds: 'Minimal', price: 'Low', verdict: 'Quiet but limited' },
    { month: 'Feb', weather: 'Cool, mimosa in bloom on the coast', emoji: '🌤', crowds: 'Low', price: 'Low', verdict: 'Atmospheric, mimosa festival' },
    { month: 'Mar', weather: 'Warming, spring light, sea still cold', emoji: '🌤', crowds: 'Low', price: 'Mid', verdict: 'Pleasant for culture, not beach' },
    { month: 'Apr', weather: 'Spring proper, Easter crowds in Cannes', emoji: '☀️', crowds: 'Moderate', price: 'Mid', verdict: 'Beautiful — season opens' },
    { month: 'May', weather: 'Ideal — warm, clear, Cannes Film Festival', emoji: '☀️', crowds: 'High during festival', price: 'High', verdict: 'Best month — avoid festival week' },
    { month: 'Jun', weather: 'Hot, sea swimmable, full beach club season', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Peak honeymoon perfection' },
    { month: 'Jul', weather: 'Very hot, school holidays begin', emoji: '🌡️', crowds: 'Very high', price: 'Very high', verdict: 'Beautiful but crowded' },
    { month: 'Aug', weather: 'Hottest, the entire French nation arrives', emoji: '🌡️', crowds: 'Peak', price: 'Highest', verdict: 'Avoid — the coast becomes unbearable' },
    { month: 'Sep', weather: 'Warm, sea warmest, crowds thin', emoji: '☀️', crowds: 'Moderate', price: 'High', verdict: 'The secret-best month' },
    { month: 'Oct', weather: 'Mild, golden light, vines turning', emoji: '🌤', crowds: 'Low-mod', price: 'Mid', verdict: 'Excellent for culture and food' },
    { month: 'Nov', weather: 'Cool, beach clubs closing, quiet', emoji: '⛅', crowds: 'Low', price: 'Low', verdict: 'Romantic but limited beach' },
    { month: 'Dec', weather: 'Cool, Monaco Christmas lights, calm', emoji: '🎄', crowds: 'Low', price: 'Mid', verdict: 'Festive in Monaco' },
  ],
  budgetTiers: [
    {
      label: 'Boutique Luxury',
      range: '$500–$900/night',
      gets: 'Excellent boutique hotels with sea views, pool access, and refined breakfast. Beautiful properties in Antibes, Beaulieu, and the hills above Cannes.',
      example: 'Hotel Belles Rives (Juan-les-Pins), Château Saint-Martin & Spa (Vence)',
    },
    {
      label: 'Premium',
      range: '$900–$2,500/night',
      gets: 'Belle époque palace hotels with full service — private beach clubs, Michelin dining, sea-view suites. The signature Riviera experience.',
      example: 'La Réserve de Beaulieu, Château de la Chèvre d\'Or (Èze)',
    },
    {
      label: 'Ultra-Luxury',
      range: '$2,500+/night',
      gets: 'Cap-Eden-Roc and Cap-Ferrat — two of the world\'s most legendary hotels. Private cabanas, butler service, the addresses that made the Riviera famous.',
      example: 'Hôtel du Cap-Eden-Roc, Grand-Hôtel du Cap-Ferrat (Four Seasons), Cheval Blanc St-Tropez',
    },
  ],
  areas: [
    {
      name: 'Cap-Ferrat & Beaulieu',
      bestFor: 'Most secluded and most elegant — old-money Riviera glamour',
      description: 'The Cap-Ferrat peninsula between Nice and Monaco is the quiet, leafy, palace-hotel heart of the Riviera — pine-shaded coastal paths, the Villa Ephrussi de Rothschild gardens, and two of the finest hotels in France. Beaulieu next door has La Réserve and a small harbour. The most refined base on the coast.',
    },
    {
      name: 'Saint-Tropez & the Var',
      bestFor: 'Yacht culture, Pampelonne beach, summer party energy',
      description: 'Saint-Tropez is the legendary southern half of the Riviera — Pampelonne\'s five kilometres of white sand, the harbour-front cafés where everyone arrives by yacht, the medieval citadel above the old town, and the rosé vineyards inland. Cheval Blanc and Lou Pinet sit in the historic town. Hot, crowded, glamorous, expensive.',
    },
    {
      name: 'Antibes & Cap d\'Antibes',
      bestFor: 'Picasso Museum, the historic Cap, and the Eden-Roc legend',
      description: 'Antibes is the cultural anchor of the coast — the ramparts, the Picasso Museum in the Château Grimaldi (where Picasso lived in 1946), the Marché Provençal, and the old town\'s narrow streets. The Cap d\'Antibes peninsula is dominated by the Hôtel du Cap-Eden-Roc, one of the most legendary hotels on earth.',
    },
    {
      name: 'Èze, Saint-Paul & the Perched Villages',
      bestFor: 'Medieval drama, art foundations, and clifftop dining',
      description: 'Above the coast, the perched villages of Èze and Saint-Paul-de-Vence offer a different Riviera — stone houses clinging to cliffs, Fondation Maeght\'s modern art garden, the Chèvre d\'Or eyrie 400m above the sea, and lunch at La Colombe d\'Or where Picasso paid in paintings.',
    },
  ],
  expertTips: [
    {
      tip: 'Split your stay — Cap-Ferrat for elegance, Saint-Tropez for energy',
      detail: 'Three nights at Cap-Ferrat or Beaulieu for the palace-hotel experience, then three nights in Saint-Tropez for the beach club and yacht culture. The contrast is the point — the Riviera is two different honeymoons stitched together.',
    },
    {
      tip: 'Avoid the road, use the train or a private driver',
      detail: 'The A8 and the coastal road are clogged every weekend May to October. The TER train along the coast (Nice–Monaco–Menton) is fast, cheap, and scenic. For longer hops (Cap-Ferrat to Saint-Tropez), a private driver costs €400–600 but saves three hours and zero arguments.',
    },
    {
      tip: 'Book Cap-Eden-Roc and Cap-Ferrat a year ahead',
      detail: 'The signature suites at both hotels — the Bellini Suite at Eden-Roc, the Villa Rose-Pierre at Cap-Ferrat — book 9 to 12 months ahead for June and September. Cap-Eden-Roc famously accepts cash only at checkout, which is a tradition not a deterrent.',
    },
    {
      tip: 'Skip July 14 to August 25 unless you love crowds',
      detail: 'The French school holiday cycle and Bastille Day combine to make late July and August almost unusable. Hotels run at 100% occupancy at peak rates, restaurants need three-week bookings, the road is gridlock. May, June, September are the honeymoon months.',
    },
    {
      tip: 'Eat rosé like it\'s the local water — but only Provençal',
      detail: 'The Riviera runs on rosé from late morning onward. Stick to Côtes-de-Provence (Domaine Ott, Château d\'Esclans, Minuty) — the local pink wine paired with Mediterranean food is one of the great honeymoon pleasures. Red wine at lunch in 30°C heat is for tourists.',
    },
  ],
  packing: [
    { item: 'Smart resort wear with proper evening pieces', why: 'The Riviera dresses up. Linen trousers, silk dresses, a jacket for the man at dinner. Cap-Eden-Roc, the Hôtel de Paris in Monaco, and Cap-Ferrat all enforce dress codes after 7pm. No flip-flops, no shorts at dinner.' },
    { item: 'Water shoes or rubber sandals', why: 'Most Riviera beaches are pebbles, not sand. Without grippy sandals, getting into the sea is genuinely painful. Locals all wear them; tourists hop and curse.' },
    { item: 'Polarised sunglasses', why: 'The Mediterranean light is brutal. Polarised lenses cut the glare off the sea and make the colours sing. The Riviera is built for sunglasses and looking elegant.' },
    { item: 'A real swimsuit and a cover-up', why: 'Beach clubs have a dress code at the bar and the restaurant. A sarong or linen cover-up between the sunbed and lunch is the local protocol. Pareo-and-towel at table is acceptable nowhere.' },
    { item: 'Passport for Monaco', why: 'Monaco is its own country. You don\'t need a visa from the EU or US, but the Monte-Carlo casino requires a passport (or French national ID) at entry. Bring it for a Monaco evening.' },
    { item: 'A linen blazer for the man', why: 'Required at Eden-Roc, Cap-Ferrat, La Réserve de Beaulieu, and the Hôtel de Paris for dinner. A single light linen blazer covers every smart evening on the coast.' },
  ],
  guide: {
    getting: 'Fly into Nice Côte d\'Azur (NCE) — the second-busiest airport in France. From northern Europe: direct flights on easyJet, British Airways, Lufthansa, Air France (1.5–2.5h). From the US: direct flights from JFK, Newark, Atlanta on Delta and La Compagnie (8–9h). From Nice airport: 15 min taxi to central Nice, 30 min to Cap-Ferrat, 90 min to Saint-Tropez. The TGV from Paris (5.5h to Nice, 5h to Saint-Raphaël) is a beautiful alternative for European honeymooners.',
    where: 'Cap-Ferrat (Grand-Hôtel Four Seasons) or Beaulieu (La Réserve) for the elegant palace-hotel experience. Saint-Tropez (Cheval Blanc) or the Pampelonne hinterland for beach-club glamour. Cap d\'Antibes (Hôtel du Cap-Eden-Roc) for the legendary belle époque address. Èze (Château de la Chèvre d\'Or) for clifftop drama.',
    when: 'Late May through June and September through mid-October are the honeymoon windows — warm, swimmable sea, fully operational beach clubs, civilised crowds. Avoid Cannes Film Festival week (mid-May) for Cannes itself, and absolutely avoid the late-July through August school-holiday peak.',
  },
  localFood: 'Salade niçoise (the real version: tuna, olives, anchovies, no potatoes) at a Vieux-Nice tabletop, socca (chickpea pancake) from a Cours Saleya street stand, bouillabaisse at Tétou (Golfe-Juan), pissaladière (onion-anchovy tart) from a Nice bakery, the three-Michelin-star Louis XV menu by Alain Ducasse at the Hôtel de Paris in Monaco, and rosé from Domaine Ott or Minuty with every long lunch.',
  currency: 'Euro (EUR)',
  language: 'French (English widely spoken)',
  timezone: 'UTC+1 (CET) / UTC+2 (CEST in summer)',
  seo: { title: 'Côte d\'Azur Honeymoon: 6 Riviera Palace Hotels Scored 2026', description: 'Cap-Eden-Roc, Cap-Ferrat, Cheval Blanc St-Tropez ranked. Belle époque palaces from $900/night. May-Oct verdicts.' },
}

export default meta
