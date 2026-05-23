import type { DestinationMeta } from '@/types/destination'

const meta: DestinationMeta = {
hero: '/images/hotels/la-mala-cinque-terre/hero.webp',
tagline: 'Italy\'s 5 cliffside fishing villages — UNESCO trails between them, no cars, the pesto and Sciacchetrà come from here.',
intro: 'Cinque Terre is the UNESCO-protected 12km stretch of Italian Ligurian coastline where five medieval fishing villages — Monterosso al Mare, Vernazza, Corniglia, Manarola, Riomaggiore — cling to vertical basalt cliffs above the open Tyrrhenian Sea, connected by hand-cut stone trails (the Sentiero Azzurro), a single train line carved through tunnels, and a fleet of small ferries. The villages have been here since the 11th century; the terraced vineyards on the impossibly steep cliffsides are some of the most vertical agriculture in Europe, worked since the Middle Ages, and the rare Sciacchetrà sweet wine made from raisined Bosco grapes is produced only here — fewer than 4,000 bottles a year from artisan producers like Cheo and Possa. There are no cars in the five villages (parking lots sit above each town; everything else is on foot), the rocky beaches are tiny except for Monterosso\'s golden Fegina, and the food is the original Liguria: trofie al pesto (the birthplace of pesto), anchovies of Monterosso DOP, focaccia di Recco, farinata. Cinque Terre is not ultra-luxury Italy — UNESCO protections, the fishing-village character, and the terrain mean the hotel inventory is mid-range (best properties top out around €600-900/night even in peak), and the honeymoon dream here is village immersion and trail walking rather than 5-star resort comfort. May, June, September, and October are the canonical months; July and August are brutal heat with day-tripper masses; winter most properties are closed. The honeymoon image is the sunset shot of Manarola, the climb up to the Doria castle in Vernazza, and a glass of Sciacchetrà on a terrace as the lights of all five villages come on along the cliff.',
bestTime: 'May–Jun + Sep–Oct (Jul/Aug brutal crowds + heat)',
flightFrom: '2h London to Pisa, 1h Milan to La Spezia',
topExperience: 'Cliffside Village Hopping',
perfectFor: [
  'Hiking honeymooners who want walking-led days between the five villages on the UNESCO Sentiero Azzurro trails',
  'Couples seeking authentic Italian fishing-village immersion rather than ultra-luxury resort polish',
  'No-car-simplicity travellers — the five villages are car-free, the train runs every 15 minutes between them, ferries link the coast',
  'Photographers drawn to the world\'s most photogenic clifftop villages — Manarola sunset, Vernazza harbour, the cascading colours',
  'Foodies who want to taste pesto, anchovies of Monterosso, focaccia di Recco, and Sciacchetrà sweet wine at their origin',
],
skipIf: [
  'Pure-luxury 5-star expectation — Cinque Terre\'s hotel inventory is mid-range; the best properties are family-run 4-star (Porto Roca) or 4-room boutique (La Mala), not Belmond or Aman tier',
  'Beach-resort mindset — only Monterosso has a real golden-sand beach; the other four villages have rocky platforms and tiny pebble coves',
  'Party scene or nightlife — the five villages are genuinely quiet after 10pm; dining ends by 22:30, no clubs',
  'Easy step-free access — every village involves steep cobbled streets and 30-100+ stone steps; trails are uneven and cliffside',
  'Peak-summer comfort — July and August are 35°C+ with overwhelming day-tripper crowds and frequent trail closures',
],
experiences: [
  {
    icon: '🥾',
    title: 'Sentiero Azzurro Full 5-Village Hike',
    description: 'The full Blue Trail connects all five villages with 12 km of cliffside walking through olive and lemon terraces with the sea 200m below — the most spectacular section is Monterosso to Vernazza (90 min, the postcard stretch); the Vernazza to Corniglia section (90 min) is the wildest; Corniglia to Manarola has been closed in places since 2011 landslides; the legendary Manarola-Riomaggiore Via dell\'Amore has reopened in stages. Cinque Terre Card required ($8-15/day, includes train).',
    cost: '$15-30 per person Cinque Terre Card; trails free with card',
    tip: 'Walk Monterosso-Vernazza-Corniglia in one direction in a morning (3-4h with stops). Reverse direction in afternoon by train. Hiking shoes mandatory — cobblestones and uneven trail. Start by 8am to avoid heat and crowds.',
  },
  {
    icon: '🌅',
    title: 'Vernazza Harbour Sunset Aperitivo',
    description: 'Vernazza is widely considered the most photogenic of the five villages — the technicolor houses cascading down to the small harbour with the bobbing wooden gozzi and the Doria Castle on the headland. The sunset hour from Belforte (the medieval tower restaurant 12m directly above the sea) with a Cinque Terre DOC white and the village lights coming on is the canonical Cinque Terre romantic moment.',
    cost: '$60-100 per couple drinks; $120-180 if you eat',
    tip: 'Book the cliff-edge table at Belforte 3-4 days ahead in shoulder season, 2-3 weeks ahead in peak. The terrace closes when winds are strong — check the weather. Aperitivo is 6-8pm; sunset is the show.',
  },
  {
    icon: '🌆',
    title: 'Manarola at Blue Hour',
    description: 'The Manarola sunset — the technicolor cubes of houses tumbling down to the rocky marina with the Ligurian Sea filling the frame — is the single most photographed image of Cinque Terre. The shot is taken from the Punta Bonfiglio cemetery viewpoint reached by the Sentiero dei Frati, 15-20 minutes\' walk uphill from the village. Blue hour (the 20 minutes after the sun drops behind the cliffs) is when the village lights come on against the deep blue sky.',
    cost: 'Free',
    tip: 'Arrive 30 minutes before sunset to claim a spot on the wall. The Nessun Dorma bar in the village is the alternative perch (with cocktail) but the postcard angle is the cemetery viewpoint. Bring a layer — exposed and breezy.',
  },
  {
    icon: '💞',
    title: 'Riomaggiore Via dell\'Amore (When Open)',
    description: 'The Via dell\'Amore (the Lovers\' Walk) is the 1km cliffside path between Riomaggiore and Manarola, named for its history as a meeting spot for sweethearts from the two villages. Sections have been closed for landslide repair since 2012; the path has reopened in stages with full reopening planned. When open, it is the easiest section of the Sentiero Azzurro — paved, level, with the most concentrated cliffside drama of the entire trail.',
    cost: 'Included in Cinque Terre Card; $5-10 separate access',
    tip: 'Check opening status before your trip on the Parco Nazionale website — sections close for repairs. When open, walk it at sunset in the Riomaggiore-to-Manarola direction. The "love locks" tradition is discouraged now (they damage the railings).',
  },
  {
    icon: '🍷',
    title: 'Sciacchetrà Winery Tour',
    description: 'Sciacchetrà is the rare sweet wine of Cinque Terre — made from raisined Bosco, Albarola, and Vermentino grapes grown on the impossibly steep cliffside terraces, produced in tiny quantities (under 4,000 bottles per year total) by a handful of artisan producers. Cheo (in Vernazza) and Possa (in Riomaggiore) are the two great names — small family operations who hand-harvest the vines from the cliffside terraces and lay the grapes to dry on wooden racks for three months before pressing.',
    cost: '$50-80 per couple tasting + vineyard tour, by appointment',
    tip: 'Book directly with Cheo or Possa 2-3 weeks ahead. The vineyards are reached by short hikes from the villages — Cheo\'s vineyard above Vernazza is the more accessible. Buy bottles direct from the producer (most cost $40-80 per 500ml).',
  },
],
months: [
  { month: 'Jan', weather: 'Cool (10-12°C), most properties closed', emoji: '⛅', crowds: 'Minimal', price: 'N/A', verdict: 'Closed season — wait' },
  { month: 'Feb', weather: 'Cool, most properties closed', emoji: '⛅', crowds: 'Minimal', price: 'N/A', verdict: 'Closed season — wait' },
  { month: 'Mar', weather: 'Warming, early opening (mid-month)', emoji: '🌤', crowds: 'Low', price: 'Low', verdict: 'Only for the hardy — some properties still closed' },
  { month: 'Apr', weather: 'Spring perfection, wildflowers on terraces', emoji: '☀️', crowds: 'Moderate', price: 'Mid', verdict: 'Excellent — season opens properly Easter onward' },
  { month: 'May', weather: 'Warm (20-22°C), dry, ideal hiking', emoji: '☀️', crowds: 'High', price: 'Mid-high', verdict: 'One of the two best months — book 4 months ahead' },
  { month: 'Jun', weather: 'Warm (24°C), sea swimmable, long days', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Excellent — the canonical honeymoon month' },
  { month: 'Jul', weather: 'Hot (28-32°C), day-tripper masses', emoji: '🌡️', crowds: 'Peak', price: 'Very high', verdict: 'Avoid — heat and crowds make trails miserable' },
  { month: 'Aug', weather: 'Hottest (32-35°C), absolute peak', emoji: '🌡️', crowds: 'Peak', price: 'Highest', verdict: 'The worst month — brutal heat, packed villages' },
  { month: 'Sep', weather: 'Warm (24-26°C), sea warm, crowds thin', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Best value peak month — sea warm, fewer crowds than August' },
  { month: 'Oct', weather: 'Mild (20-22°C), golden light, vendemmia', emoji: '🌤', crowds: 'Mod', price: 'Mid', verdict: 'Outstanding — harvest season, gentle crowds' },
  { month: 'Nov', weather: 'Cooling (15-18°C), most properties closing', emoji: '⛅', crowds: 'Low', price: 'Low', verdict: 'End of season — limited options' },
  { month: 'Dec', weather: 'Cool, most properties closed', emoji: '⛅', crowds: 'Minimal', price: 'N/A', verdict: 'Closed season — wait' },
],
budgetTiers: [
  {
    label: 'Authentic',
    range: '€150-300/night',
    gets: 'Family-run guesthouses and small affittacamere (rooms-for-rent) in the villages with original stone walls, hand-painted tiles, sea-view balconies, and breakfast included. The honest in-village experience.',
    example: 'Affittacamere Pavarin (Corniglia), Hotel Pasquale (Monterosso)',
  },
  {
    label: 'Boutique',
    range: '€300-600/night',
    gets: 'Renovated boutique hotels and the better 3-4 star properties — direct sea views, contemporary touches, small wine cellars, beach access. The shoulder-season standard for Cinque Terre honeymoon.',
    example: 'La Marina di Manarola, Hotel La Spiaggia (Monterosso)',
  },
  {
    label: 'Premium',
    range: '€600-1,200/night',
    gets: 'The clifftop position of Porto Roca or the four-room intimacy of La Mala. This is the top of the Cinque Terre inventory — there are no ultra-luxury 5-star resorts here (UNESCO and terrain don\'t allow them).',
    example: 'Hotel Porto Roca (Monterosso clifftop), La Mala (Vernazza adults-only 4-room)',
  },
],
areas: [
  {
    name: 'Monterosso al Mare',
    bestFor: 'Largest village, only real beach, biggest hotel inventory',
    description: 'Monterosso is the largest and northernmost of the five villages, divided into the old town (Porto Vecchio) with its 14th-century church and medieval streets, and the newer Fegina seafront with the only real swimmable beach in Cinque Terre. The biggest hotel inventory of the five villages — Porto Roca clifftop, Hotel Pasquale and La Spiaggia on the seafront. The canonical base for couples who want a beach and a proper hotel.',
  },
  {
    name: 'Vernazza',
    bestFor: 'Most photogenic, harbour piazza, Doria castle',
    description: 'Widely considered the most photogenic of the five villages — the technicolor houses tumbling down to the natural amphitheatre harbour with the Doria castle on the headland and the Romanesque Santa Margherita church directly on the water. Smaller hotel inventory but the highest quality (La Mala is the four-room boutique address). The harbour piazza is the canonical Cinque Terre evening location.',
  },
  {
    name: 'Manarola',
    bestFor: 'Iconic sunset views, smallest village, wine country',
    description: 'The single most-photographed view in Cinque Terre is taken from the Punta Bonfiglio cemetery above Manarola — the technicolor cubes of the village cascading down to the rocky harbour with the open sea beyond. No beach, but the swimming platform off the harbour rocks is beloved. The terraced vineyards on the cliffs above Manarola are the heart of Sciacchetrà production.',
  },
  {
    name: 'Corniglia + Riomaggiore',
    bestFor: 'Quietest village (Corniglia) and southernmost gateway (Riomaggiore)',
    description: 'Corniglia is the only one of the five villages 100m above sea level on a hilltop, reached by the famous 33-flight Lardarina staircase or village shuttle — the smallest, quietest, and least visited of the five, with the lovely belvedere view of all four other villages stacked along the coast. Riomaggiore is the southernmost gateway, the busiest entry point from La Spezia, and the start of the historic Via dell\'Amore walk to Manarola.',
  },
],
expertTips: [
  {
    tip: 'Book the Cinque Terre Card for trains + trails',
    detail: 'The Cinque Terre Treno Card ($15-25/day) includes unlimited regional train travel between all five villages and La Spezia, access to the Sentiero Azzurro trails, and free WiFi. Buy at La Spezia Centrale or any of the five village stations on arrival. The trail-only card is cheaper ($8-12) but the train integration is essential.',
  },
  {
    tip: 'Base in Monterosso for the biggest hotel inventory',
    detail: 'Monterosso is the only village with proper hotel infrastructure (Porto Roca, Pasquale, La Spiaggia), the only real beach, and direct above-ground train access (the other four villages\' train stops are in tunnels). For couples who want a proper hotel rather than a 4-room affittacamere, Monterosso is the canonical base.',
  },
  {
    tip: 'Avoid weekends and August absolutely',
    detail: 'Saturday and Sunday day-tripper crowds from Levanto, La Spezia, and Genoa overwhelm the villages — book your hikes for weekdays. August is the worst month for both heat (32-35°C) and crowds (Italian summer holiday peak). May-June and September-October are the canonical honeymoon windows.',
  },
  {
    tip: 'Train runs every 15 minutes between villages',
    detail: 'The Cinque Terre Express train runs frequently between the five villages — Monterosso to Riomaggiore is 12 minutes total end-to-end. This means you can base in one village and explore the others with no friction. Most journeys village-to-village are 3-5 minutes. Trains continue through to La Spezia (gateway to onward Italian rail).',
  },
  {
    tip: 'Sentiero Azzurro requires a permit (the Cinque Terre Card)',
    detail: 'The Sentiero Azzurro (Blue Trail) sections between the villages require the Cinque Terre Card — purchased at park entry points or village stations. The trail sections close after heavy rain (landslide risk); check status at the park office. Some sections (notably Corniglia-Manarola) have been closed for years; plan with current information.',
  },
],
packing: [
  { item: 'Proper hiking shoes (closed-toe, grip sole)', why: 'The Sentiero Azzurro is uneven cliffside trail with loose stones and cobbled village streets that are smooth and slippery; trainers and sandals are dangerous on the trails. The single most important Cinque Terre packing item' },
  { item: 'Light rain jacket', why: 'Coastal weather is changeable; sudden afternoon thunderstorms in May, June, and September are common. Trails close after heavy rain — pack a packable shell' },
  { item: 'Swim gear', why: 'Monterosso\'s Fegina golden-sand beach, the rocky swimming platforms in Vernazza, Manarola, and Riomaggiore, and the hotel pools all reward swim gear; sea temperature 20-23°C May-October' },
  { item: 'One dressy aperitivo outfit', why: 'Belforte in Vernazza, the Porto Roca terrace, and the better village restaurants reward a smart-casual look — linen trousers and shirt for men, a light dress for women. No flip-flops at dinner' },
  { item: 'Cash for small bars and vineyard tastings', why: 'Many village bars, small trattorias, and the artisan Sciacchetrà producers (Cheo, Possa) are cash-only or prefer cash; €100-200 in small notes is the right amount to carry' },
  { item: 'Water bottle for trails', why: 'The Sentiero Azzurro sections have limited drinking fountains; bring a refillable bottle — 2-3 litres per couple per hike in May-September is the right amount' },
],
guide: {
  getting: 'Pisa International (PSA) is the closest airport — 1.5h by train via La Spezia to Monterosso, the only of the five villages with above-ground rail access. Direct flights to Pisa from London (2h with British Airways, Ryanair, easyJet), most European capitals (2-3h), and via Rome (FCO) from the US. Milan Malpensa (MXP) is the alternative gateway, 3h train via Genoa to La Spezia and then Cinque Terre Express. Florence (FLR) is a third option, 2.5h train. La Spezia Centrale is the rail hub — Cinque Terre Express runs every 15 minutes between La Spezia and the five villages. Trains continue in both directions to Genoa, Milan, Rome.',
  where: 'Monterosso al Mare is the canonical hotel base — the only village with real beach access, the largest hotel inventory (Porto Roca clifftop, Pasquale and La Spiaggia on the seafront), and above-ground train access. Vernazza is the boutique option for couples who want the most photogenic village and don\'t mind 4-room scale (La Mala). Manarola is the choice for the iconic sunset and quieter immersion. Corniglia is the hilltop hideaway. Riomaggiore is the busiest southern gateway. Most honeymoon couples base in one village and explore the others by the 15-minute train.',
  when: 'May, June, September, and October are the canonical Cinque Terre honeymoon months — warm, dry, ideal trail conditions, sea swimmable, manageable crowds. May is the wildflower-and-trail-opening sweet spot. June is the warmest pre-peak month. September has the warm sea and thinning crowds. October has the golden light, the vendemmia (grape harvest), and the lowest peak-season prices. July-August is brutal heat and overwhelming day-tripper crowds — avoid. November-March most properties are closed and the trails are at landslide risk.',
},
localFood: 'Trofie al pesto (the regional pasta — short hand-rolled twists tossed with traditional Genovese pesto made with basil, Ligurian olive oil, Sardinian pecorino, pine nuts, and garlic; Liguria is the birthplace of pesto), anchovies of Monterosso (the DOP-protected salted anchovies — eaten raw with lemon as crudi, or marinated, or stuffed and fried), focaccia di Recco (the paper-thin two-layer focaccia with stracchino cheese, a DOP product from neighbouring Recco), Sciacchetrà (the rare sweet wine of Cinque Terre — fewer than 4,000 bottles per year from artisan producers Cheo, Possa), Cinque Terre DOC (the dry crisp white from the same terraced vineyards — Bosco, Albarola, Vermentino), farinata (the chickpea flatbread baked in copper pans, eaten warm with black pepper), and acciughe ripiene fritte (the Monterosso stuffed-and-fried anchovies). The best village restaurants are Belforte (Vernazza tower over the sea), Nessun Dorma (Manarola harbour aperitivo), Trattoria dal Billy (Manarola seafood), Osteria a Cantina de Mananan (Corniglia anchovy crudi), Miky (Monterosso fine dining), and L\'Ancora della Tortuga (Monterosso rocky-headland lunch).',
currency: 'EUR — Euro. Cards accepted in most restaurants and hotels; cash useful for small village bars, vineyard tastings, and the artisan Sciacchetrà producers',
language: 'Italian; English widely spoken in hotels and tourist restaurants but less in the smaller affittacamere and village bars',
timezone: 'CET (Central European Time, UTC+1) — observes daylight saving (+2 CEST in summer)',
  seo: { title: "Cinque Terre Honeymoon 2026: 6 Cliffside Village Hotels Scored", description: "Porto Roca, La Mala Vernazza, La Marina Manarola. 6 hotels scored, real cost, best room, 7-night 5-village itinerary, May–Oct verdicts." },
}

export default meta
