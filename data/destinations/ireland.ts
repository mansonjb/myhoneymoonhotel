import type { DestinationMeta } from '@/types/destination'

const meta: DestinationMeta = {
hero: '/images/hotels/ashford-castle-cong-ireland/hero.webp',
tagline: 'Gothic castle keepers for a night, the Wild Atlantic Way, and the most romantic landscape in Europe — no language barrier required.',
intro: 'Ireland is the honeymoon that trades tropical heat for something rarer: 800-year-old castles converted to ultra-luxe hotels, a coastline as dramatic as Big Sur, peat-smoked whiskey by an open fire, and a culture that genuinely welcomes lovers. Ashford Castle (1228, Red Carnation) and Adare Manor (recently restored to host the 2027 Ryder Cup) are now two of the finest hotels in Europe — period. The Wild Atlantic Way unfurls 2,500 km along the western seaboard from Donegal to Cork, taking in the Cliffs of Moher, the Ring of Kerry, Connemara, and the Dingle Peninsula. Dublin offers Georgian literary romance, Killarney delivers the lakes, and every village has a fireside pub where someone will sing for you. Best May–September; no jetlag from the US East Coast.',
bestTime: 'May–Sep',
flightFrom: '1h from London, 6–7h from NYC',
topExperience: 'Castle Romance & Wild Atlantic Way',
perfectFor: [
  'Couples who dream of being castle keepers for a night — fireside whiskey, hounds on the rug, four-posters',
  'Honeymooners who want dramatic coastal scenery without a language barrier or long flight',
  'Anglophile literary romantics — Yeats, Joyce, Heaney, Beckett walked these streets',
  'Whiskey, oyster, and Guinness lovers who want food and drink culture as the engine of the trip',
  'Couples short on time — Ireland delivers ten landscapes in a week of comfortable driving',
],
skipIf: [
  'You need guaranteed sunshine — even high summer averages 17°C and the weather changes hourly',
  'You want beach honeymoon swimming — the Atlantic is 14°C in August (gorgeous to look at, brutal to enter)',
  'You\'re working with a tight luxury budget — Ashford and Adare are $1,200–$3,000/night in season',
  'You hate driving on the left on narrow rural roads — much of Ireland\'s magic is on single-track lanes',
],
experiences: [
  {
    icon: '🏰',
    title: 'Falconry at Ashford Castle',
    description: 'Ashford runs Ireland\'s oldest falconry school in the woods around the castle. You walk the estate with a Harris hawk on your gauntlet, the bird flying ahead and returning at the falconer\'s whistle. Wildly romantic, very Irish, and the kind of one-hour experience that lands in every honeymoon highlight reel.',
    cost: '$120–$180 per couple (1h private hawk walk)',
    tip: 'Book the dawn or dusk slot — softer light, fewer guests on the estate, and the hawks fly closer to you. Wear waterproof boots; the woods are wet year-round.',
  },
  {
    icon: '🚗',
    title: 'Drive the Ring of Kerry',
    description: 'A 180 km loop around the Iveragh Peninsula from Killarney — past Killarney National Park, the Gap of Dunloe, Skellig Michael views, Caherdaniel beach, and Sneem village. Eight hours with stops; the cinematic case for Ireland as a road-trip honeymoon.',
    cost: '$60–$90/day rental car; full tank ~$80',
    tip: 'Drive it counter-clockwise (Killorglin first) — tour coaches must go clockwise, so you avoid them all day. Lunch at Kate Kearney\'s Cottage; sunset at Caherdaniel beach.',
  },
  {
    icon: '🥃',
    title: 'Private Whiskey Tasting at a Distillery',
    description: 'Midleton (Jameson), Roe & Co (Dublin), Dingle Distillery, and Teeling all offer private guided tastings of rare single-pot still and cask-strength expressions. Sitting in the cooperage with five drams and a master blender is the most adult honeymoon hour Ireland gives you.',
    cost: '$80–$200 per person depending on rarity flight',
    tip: 'Midleton\'s Behind-the-Scenes tour includes the Redbreast 27 and the Midleton Very Rare. Book directly with the distillery, not via the tourist site — better pours, smaller groups.',
  },
  {
    icon: '🌊',
    title: 'Cliffs of Moher by Boat',
    description: 'Most visitors see the Cliffs from the tourist clifftop. The real view is from the sea — a 1h boat from Doolin Pier puts you 200 metres below 700-foot vertical sandstone walls, with puffins, choughs, and the full geological drama. The single best 60 minutes on the west coast.',
    cost: '$45–$60 per person, May–Sep only',
    tip: 'Doolin Ferry Co. or O\'Brien Line. Book the 11am sailing — calmest sea, best light. Combine with lunch at Gus O\'Connor\'s pub in Doolin and an afternoon at the Burren.',
  },
  {
    icon: '🍺',
    title: 'Trad-Music Pub Night in Dingle',
    description: 'The Dingle Peninsula is the heartland of Irish-language and traditional music. An Droichead Beag and O\'Sullivan\'s Courthouse Pub run nightly sessions — fiddle, bodhrán, uilleann pipes, and unaccompanied sean-nós singing in a 30-person room with a turf fire. Honeymoon-perfect because you\'re both quiet, holding hands, and the night ends naturally at midnight.',
    cost: '$50 per couple for dinner and pints; sessions are free',
    tip: 'Sessions start unscheduled around 9:30pm. Don\'t request songs. Sit, listen, drink Guinness, and if the room is good, the musicians will play for two hours.',
  },
],
months: [
  { month: 'Jan', weather: 'Cold and wet, 4–8°C, short days', emoji: '🌧', crowds: 'Low', price: 'Low', verdict: 'Atmospheric but limited — many rural hotels closed' },
  { month: 'Feb', weather: 'Cold, lengthening days', emoji: '🌧', crowds: 'Low', price: 'Low', verdict: 'For Dublin city break only' },
  { month: 'Mar', weather: 'Cool, daffodils, St Patrick\'s', emoji: '🌦', crowds: 'Moderate', price: 'Mid', verdict: 'St Patrick\'s week is festive but crowded' },
  { month: 'Apr', weather: 'Spring, lambs, 7–12°C', emoji: '🌸', crowds: 'Moderate', price: 'Mid', verdict: 'Lovely shoulder — green and fresh' },
  { month: 'May', weather: 'Ideal — 10–16°C, long days, flowers', emoji: '☀️', crowds: 'Moderate', price: 'Mid-high', verdict: 'One of the two best months' },
  { month: 'Jun', weather: 'Warm, long evenings (10pm sunset)', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Best month — light until 10pm, festivals start' },
  { month: 'Jul', weather: 'Warmest, 14–20°C', emoji: '☀️', crowds: 'Peak', price: 'High', verdict: 'Excellent but busy on the Wild Atlantic Way' },
  { month: 'Aug', weather: 'Similar to Jul, school holidays', emoji: '☀️', crowds: 'Peak', price: 'Highest', verdict: 'Crowded — Kerry and Connemara fill up' },
  { month: 'Sep', weather: 'Warm, light still long, harvest', emoji: '🌤', crowds: 'Moderate', price: 'High', verdict: 'The secret best month — value + weather' },
  { month: 'Oct', weather: 'Autumn colours, 8–13°C', emoji: '🍂', crowds: 'Low-mod', price: 'Mid', verdict: 'Beautiful for castles and pubs' },
  { month: 'Nov', weather: 'Cold and wet, dark', emoji: '🌧', crowds: 'Low', price: 'Low', verdict: 'Cozy fireside-only month' },
  { month: 'Dec', weather: 'Cold, festive, Dublin lit up', emoji: '🎄', crowds: 'Moderate', price: 'Mid', verdict: 'Castle Christmas can be magical' },
],
budgetTiers: [
  {
    label: 'Boutique Luxury',
    range: '$350–$700/night',
    gets: 'Smart 4–5★ townhouses and country manor hotels with great breakfast and character. Excellent at this price.',
    example: 'The Merrion (Dublin), Cliff House Hotel (Ardmore), Park Hotel Kenmare',
  },
  {
    label: 'Premium',
    range: '$700–$1,500/night',
    gets: 'Senior suites at Ireland\'s grand castle and manor hotels, with spa, golf, falconry on property.',
    example: 'Dromoland Castle, Sheen Falls Lodge, Ballyfin Demesne',
  },
  {
    label: 'Ultra-Luxury',
    range: '$1,500–$5,000/night',
    gets: 'Signature castle suites at Ashford and Adare, including private dining, Cloud Tree spa, and access to Ireland\'s finest golf.',
    example: 'Ashford Castle (state suites), Adare Manor (manor suites)',
  },
],
areas: [
  {
    name: 'Killarney & Ring of Kerry',
    bestFor: 'Lakes, mountains, road-trip honeymoon base',
    description: 'Killarney sits at the gateway to Killarney National Park (25,000 acres of lakes and oak woods) and the Ring of Kerry driving loop. Park Hotel Kenmare and Sheen Falls Lodge are the luxury bases. Three nights minimum.',
  },
  {
    name: 'Connemara & Cong (Mayo/Galway)',
    bestFor: 'Wild Atlantic Way, castle stay, Ashford',
    description: 'Connemara is Ireland at its most cinematic — bog, lakes, and the Twelve Bens mountains. The village of Cong on the Mayo border houses Ashford Castle, the country\'s defining luxury hotel. Pair with a night at Ballynahinch Castle.',
  },
  {
    name: 'Adare & Limerick (Mid-West)',
    bestFor: 'Adare Manor, championship golf, central base',
    description: 'The thatched village of Adare is one of Ireland\'s prettiest, anchored by Adare Manor — recently restored, host of the 2027 Ryder Cup, with arguably Ireland\'s best service. Shannon Airport is 30 min away (direct flights from US East Coast).',
  },
  {
    name: 'Dublin',
    bestFor: 'Arrival, literary romance, gastronomy',
    description: 'A pocket-sized Georgian capital with the best fine dining in Ireland. The Merrion (the city\'s grande dame), Chapter One, and Liath are essential addresses. Two nights at the start or end of a trip is the right amount.',
  },
],
expertTips: [
  {
    tip: 'Fly into Shannon, not Dublin, for the west coast',
    detail: 'If your trip is castle-and-coast (Ashford, Adare, Kerry, Cliffs of Moher), Shannon Airport is your gateway — direct from Boston, JFK, Newark, Chicago, and London. Renting a car at Shannon saves you a 3-hour cross-country drive from Dublin.',
  },
  {
    tip: 'Book Ashford and Adare 9–12 months out for May–Sep',
    detail: 'The state suites at Ashford and the manor suites at Adare sell out a year ahead for the high season. Both also have residence cottages on the estate for groups; for couples, the original-castle suites are the romantic move. Email the reservation manager directly.',
  },
  {
    tip: 'Drive on the left — and pay the full insurance',
    detail: 'Irish rural roads are narrow, hedge-lined, and unforgiving. Pay for the full CDW from the rental company (not your credit card insurance — many US cards exclude Ireland). Avoid driving in Dublin city centre; take a taxi or walk.',
  },
  {
    tip: 'The weather changes every 20 minutes — pack for all four seasons in one day',
    detail: 'Genuine Irish wisdom: any morning of any month can deliver rain, hail, sun, and rainbow within an hour. A waterproof shell over a light jumper, worn over a base layer, handles 95% of weather. Layer up and don\'t plan rigidly.',
  },
  {
    tip: 'Don\'t skip the smaller distilleries',
    detail: 'Jameson at Midleton is iconic but touristy. The real whiskey honeymoon is Dingle Distillery (tiny, family-run), Killbeggan (oldest licensed distillery in the world), and Roe & Co in the old Guinness power station in Dublin. Smaller groups, better drams.',
  },
],
packing: [
  { item: 'Waterproof shell jacket', why: 'Non-negotiable. Irish rain is wind-driven and frequent. A Gore-Tex shell over your normal clothes solves most weather problems.' },
  { item: 'Waterproof leather boots', why: 'You\'ll walk castle grounds, peat bogs, and beach paths. A pair of waxed leather Chelsea or hiking boots handles everything from a manor dinner to a Connemara hill.' },
  { item: 'A smart blazer/dress for castle dining', why: 'Ashford, Adare, Dromoland, and Ballyfin all have a jacket-required dinner standard. One smart outfit each is enough.' },
  { item: 'Layered jumpers (one wool, one cashmere)', why: 'Even July evenings drop to 12°C. A real wool jumper for outdoor cool, cashmere for the fireside. Aran-knit if you want to look the part.' },
  { item: 'Driving license and IDP', why: 'Most US states are recognised, but check before flying. UK and EU licenses are fine. You will drive; renting a car is essential outside Dublin.' },
  { item: 'A small umbrella', why: 'Hotels supply them but a packable travel umbrella for unexpected pub-to-restaurant dashes is genuinely useful.' },
],
guide: {
  getting: 'Two main airports. Dublin (DUB) has the most flights — direct from JFK, EWR, BOS, ORD, PHL, IAD, LAX, SFO, MIA on Aer Lingus/United/Delta, plus full European connectivity. Shannon (SNN) on the west coast is the better arrival for castle-and-coast itineraries — direct from JFK, BOS, EWR, ORD, plus daily London/Heathrow. From DUB to Adare is 2.5h drive; from SNN, 30 min. Rental cars at both airports; book ahead.',
  where: 'Classic 7-night itinerary: 2 nights Dublin (The Merrion) → 2 nights Connemara/Cong (Ashford Castle) → 2 nights Killarney/Kenmare (Sheen Falls Lodge or Park Hotel) → 1 night Adare Manor before Shannon departure. For golf focus: 3 nights Adare + 2 Old Head/Killarney + 2 Dublin. For pure castle: 3 nights Ashford + 2 Dromoland + 2 Adare.',
  when: 'May, June, and September are the trinity — long days, warmest temps, lowest rain probability. July–August is peak crowded on the Wild Atlantic Way; April and October are budget-friendly shoulder. November–March is a fireside Dublin city break only — many west-coast manor houses close November to mid-March.',
},
localFood: 'Galway oysters with brown bread (the best are from Connemara\'s clear Atlantic water); fresh-baked soda bread with Kerrygold butter; Irish stew (lamb, potato, onion, slow-cooked); seared scallops from Bantry Bay; smoked salmon from Burren or Connemara smokehouses; aged Irish cheeses (Cashel Blue, Coolea, Gubbeen); Guinness from the source in Dublin (genuinely tastes different); Irish whiskey tasting at Midleton, Dingle, or Roe & Co; afternoon tea at The Merrion. Dublin\'s fine-dining scene (Chapter One, Liath, Variety Jones, Bastible) is genuinely world-class.',
currency: 'Euro (EUR) — also Pound Sterling in Northern Ireland (Belfast)',
language: 'English universal; Irish (Gaeilge) co-official, spoken in Gaeltacht regions of west coast',
timezone: 'UTC+0 (GMT) / UTC+1 (IST in summer)',
  seo: { title: "Ireland Honeymoon: 6 Castle & Manor Hotels Scored 2026", description: "6 Irish castle and manor hotels ranked. Ashford, Adare, Dromoland, Sheen Falls. From $350/night. May-Sep verdicts." },
}

export default meta
