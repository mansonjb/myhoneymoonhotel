import type { DestinationMeta } from '@/types/destination'

const meta: DestinationMeta = {
hero: '/images/hotels/fairmont-banff-springs-banff/hero.webp',
tagline: 'A turquoise glacial lake under a granite tower at Lake Louise, a Castle in the Rockies, and helicopter-to-glacier days — alpine grandeur without European prices.',
intro: 'Banff is the honeymoon of impossible blues. Lake Louise and Moraine Lake are the two most photographed lakes on the continent for a reason — rock-flour suspended in glacial meltwater throws light into a colour that genuinely doesn\'t look real until you stand beside it. The Fairmont Banff Springs (1888, the "Castle in the Rockies") and the Fairmont Chateau Lake Louise are the two grandest hotels in Canada, and the Post Hotel & Spa in Lake Louise is a Relais & Châteaux gem with what may be the country\'s best wine cellar. Add the Icefields Parkway (230 km from Lake Louise to Jasper — arguably the most scenic drive on earth), helicopter-to-glacier picnics, the Banff Upper Hot Springs, and a real chance of seeing elk from your suite window. Best June–September for hiking and lake colour; December–March for winter wonderland honeymoons with skiing and northern lights from the shoulder season.',
bestTime: 'Jun–Sep + Dec–Mar',
flightFrom: '1.5h from Calgary, 4h from Vancouver, 4h from NYC to YYC',
topExperience: 'Glacial Lakes & Castle in the Rockies',
perfectFor: [
  'Couples who want alpine grandeur of the Alps without European hotel prices or jetlag from the US',
  'Outdoor honeymooners — canoe on Lake Louise, hike Plain of Six Glaciers, helicopter onto a glacier',
  'Winter wonderland romantics — snowy Christmas at the Castle in the Rockies is a fairytale',
  'Wildlife lovers — elk, grizzly, black bear, bighorn sheep, and moose are routinely visible from the road',
  'Couples combining hiking + spa + fine dining — Banff is the rare destination that nails all three',
],
skipIf: [
  'You need beach weather — summer days are 22°C max and nights drop to 6°C even in July',
  'You hate altitude — Banff sits at 1,400m, Lake Louise at 1,750m; some sleep poorly for 24h',
  'You\'re looking for nightlife — Banff Avenue is charming but quiet; Lake Louise is a hotel village',
  'You\'re on a strict budget — Fairmont and Post Hotel rates are firmly in five-star territory',
],
experiences: [
  {
    icon: '🛶',
    title: 'Canoe on Lake Louise at Sunrise',
    description: 'The Fairmont Chateau Lake Louise rents red wooden canoes from its private dock — guests get first access at 7am before day-trippers arrive. Paddling the milky-blue glacier-fed lake with Victoria Glacier ahead and not another boat in sight is the defining honeymoon image of the Canadian Rockies.',
    cost: '$120–$160 CAD per hour (hotel guest discount available)',
    tip: 'Be at the dock by 6:50am. By 9am the day-trippers arrive and the queue is 90+ min. Bring a thermos of coffee from the hotel and a fleece — water temperature stays near freezing.',
  },
  {
    icon: '🚁',
    title: 'Helicopter to a Glacier Picnic',
    description: 'Rockies Heli runs 90-min experiences from Mt Assiniboine Lodge\'s helipad — touch down on a remote glacier in the Continental Divide with a Champagne picnic, mountains in every direction, no other humans. The most expensive 90 minutes of the honeymoon and worth every dollar.',
    cost: '$650–$1,200 CAD per couple depending on duration',
    tip: 'Book the 8am or last-light slot — calmest winds, best light. Wear layers; even in July the glacier is 4°C with wind. The pilots are former bush guides; ask for the longer route over Mt Assiniboine.',
  },
  {
    icon: '♨️',
    title: 'Banff Upper Hot Springs at Dusk',
    description: 'A historic 1880s hot-spring pool at 1,585m elevation looking up at Sulphur Mountain, fed by 40°C mineral water. Open until 11pm; the dusk-to-dark shift, when the steam catches the alpenglow on the peaks, is one of the world\'s great soaks.',
    cost: '$17 CAD per person — Canada\'s great honeymoon bargain',
    tip: 'Go on a weekday after 8pm — locals only. The Fairmont Banff Springs spa has its own thermal pools if crowds bother you, but the heritage Upper Hot Springs setting is unbeatable.',
  },
  {
    icon: '🌌',
    title: 'Icefields Parkway Drive to Jasper',
    description: 'Highway 93 — 230 km from Lake Louise to Jasper — is widely held to be the most scenic drive on earth. Stops at Crowfoot Glacier, Bow Lake (Num-ti-Jah Lodge), Peyto Lake (the famous wolf-shaped lake), the Columbia Icefield, and Sunwapta and Athabasca Falls. Allow a full day each way.',
    cost: '$80–$120 CAD/day rental car; full tank ~$100',
    tip: 'Drive northbound (Lake Louise to Jasper) — the viewpoints are oriented south, so light is on your side. Leave by 7:30am. Stop at the Glacier Skywalk (10km past the Icefield) — touristy but a great photo.',
  },
  {
    icon: '🍽️',
    title: 'Dinner at Post Hotel\'s Wine Cellar',
    description: 'The Post Hotel & Spa in Lake Louise is a Relais & Châteaux property with one of North America\'s most ambitious wine programs — 25,000 bottles across an 1,800-label list. The cellar private dining room (book the chef\'s table for two) is an extraordinary honeymoon-night-out.',
    cost: '$300–$600 CAD per couple with wine pairing',
    tip: 'Book at the time of room reservation, not on arrival — the cellar table holds two seatings only. Ask sommelier Beat Streiff (the owner) for his off-list recommendation — that\'s where the wine adventure starts.',
  },
],
months: [
  { month: 'Jan', weather: 'Cold, -15°C to -5°C, snowy and dry', emoji: '❄️', crowds: 'Mod', price: 'High (ski)', verdict: 'Skier\'s month — Lake Louise, Sunshine, Norquay all open' },
  { month: 'Feb', weather: 'Coldest, -20°C to -3°C', emoji: '❄️', crowds: 'High', price: 'High (ski)', verdict: 'Family Day week is busy — book around it' },
  { month: 'Mar', weather: 'Cold mornings, warming days', emoji: '❄️', crowds: 'High', price: 'High', verdict: 'Spring skiing — corn snow + sunshine' },
  { month: 'Apr', weather: 'Shoulder — melting, muddy', emoji: '🌧', crowds: 'Low', price: 'Low', verdict: 'Awkward — ski over, lakes still frozen' },
  { month: 'May', weather: '5–15°C, lakes still icing', emoji: '🌦', crowds: 'Low', price: 'Low', verdict: 'Wildflowers start, low rates, lakes not yet turquoise' },
  { month: 'Jun', weather: '8–20°C, lakes thaw mid-June', emoji: '🌤', crowds: 'Mod', price: 'Mid', verdict: 'Excellent — lakes start glowing late June' },
  { month: 'Jul', weather: '10–22°C, peak hiking', emoji: '☀️', crowds: 'Peak', price: 'High', verdict: 'Best lake colour, longest days, most crowded' },
  { month: 'Aug', weather: '9–22°C, slight wildfire risk', emoji: '☀️', crowds: 'Peak', price: 'High', verdict: 'Excellent but watch for wildfire smoke late month' },
  { month: 'Sep', weather: '4–18°C, golden larches mid-Sep', emoji: '🍂', crowds: 'Mod', price: 'Mid', verdict: 'The secret best month — larches, fewer crowds, lakes still blue' },
  { month: 'Oct', weather: 'First snow, 0–10°C', emoji: '🍂', crowds: 'Low', price: 'Low', verdict: 'Quiet, atmospheric, some closures' },
  { month: 'Nov', weather: 'Cold and snowy, -10°C to 0°C', emoji: '❄️', crowds: 'Low', price: 'Low', verdict: 'Shoulder before ski — limited' },
  { month: 'Dec', weather: 'Snowy, festive, -15°C to -2°C', emoji: '🎄', crowds: 'High', price: 'High', verdict: 'Magical — Fairmont Banff Christmas is iconic' },
],
budgetTiers: [
  {
    label: 'Mid-Luxury',
    range: '$300–$600 CAD/night',
    gets: 'Smart 4★ lodges in Banff town with mountain-view rooms, good breakfast, hot tub.',
    example: 'Moose Hotel & Suites, Buffalo Mountain Lodge',
  },
  {
    label: 'Premium',
    range: '$600–$1,200 CAD/night',
    gets: 'Suites at the Fairmont Banff Springs, lake-view rooms at Chateau Lake Louise, Relais & Châteaux Post Hotel — full spa, fine dining, ski-in/ski-out winter.',
    example: 'Fairmont Banff Springs, Post Hotel & Spa, Rimrock Resort',
  },
  {
    label: 'Ultra-Luxury',
    range: '$1,200–$3,000 CAD/night',
    gets: 'Lakeview Suites at Chateau Lake Louise (private terrace facing the lake), Signature Mountain Suites at Banff Springs, helicopter add-ons.',
    example: 'Fairmont Chateau Lake Louise (Lakeview Suite), Fairmont Banff Springs (Signature)',
  },
],
areas: [
  {
    name: 'Banff Town & Fairmont Banff Springs',
    bestFor: 'Castle hotel, walkable town, hot springs, gondola',
    description: 'Banff (pop. 8,000) is the only town inside Banff National Park — walkable, with the famous Banff Avenue main street, the gondola up Sulphur Mountain, and the iconic Fairmont Banff Springs "Castle in the Rockies" perched above the Bow River. Best base for first-timers.',
  },
  {
    name: 'Lake Louise',
    bestFor: 'The lake itself, glacier hikes, larches',
    description: 'A hotel-village 45 min north of Banff, anchored by the Fairmont Chateau Lake Louise and the Post Hotel & Spa. The lake is here; so are Moraine Lake (20 min away), Plain of Six Glaciers hike, and the start of the Icefields Parkway.',
  },
  {
    name: 'Canmore',
    bestFor: 'Outside the park gates — better-value lodging, working town',
    description: 'Canmore sits 25 min east of Banff outside the park boundary. Real-town feel (cafes, mountaineering culture, less touristy). Better food at lower prices than Banff Avenue; a smart base for couples who plan to drive daily anyway.',
  },
  {
    name: 'Icefields Parkway / Jasper',
    bestFor: 'The scenic drive itself; remote alpine extension',
    description: 'The 230 km Highway 93 between Lake Louise and Jasper — Columbia Icefield, Peyto Lake, Bow Lake. Jasper itself (4h north of Banff) is wilder, quieter, and offers dark-sky stargazing. The Fairmont Jasper Park Lodge is the luxury anchor.',
  },
],
expertTips: [
  {
    tip: 'Arrive at Moraine Lake by 5:30am or take the shuttle',
    detail: 'Moraine Lake parking has been closed to private cars since 2023 — you must take the Parks Canada shuttle (book ahead at parkscanada.gc.ca) or pre-arranged hotel transfers. The dawn shuttle (4:30am) gets you sunrise on the Ten Peaks; the standard slots fill weeks ahead in July–August.',
  },
  {
    tip: 'Book Fairmont Banff Springs Signature suites 9 months ahead',
    detail: 'The Signature mountain-view suites with private balconies sell out 9–12 months ahead for July–August and the Christmas week. Lakeview Suites at Chateau Lake Louise are even tighter — set a calendar reminder for the booking-open date if you have target dates.',
  },
  {
    tip: 'Fly into Calgary (YYC), not Vancouver',
    detail: 'Calgary is 1.5h drive to Banff vs Vancouver\'s 9h. Direct flights to YYC from JFK, EWR, ORD, SFO, LAX, ATL, plus London/Frankfurt/Tokyo. A rental car at YYC is essential — there is no train, only the Banff Airporter shuttle (slower, $90).',
  },
  {
    tip: 'Don\'t underestimate altitude',
    detail: 'Banff is 1,400m and Lake Louise 1,750m. About a third of arrivals from sea level get mild altitude effects on night 1 — restless sleep, headache. Hydrate aggressively on arrival day and don\'t plan a strenuous hike for day 1; ease in.',
  },
  {
    tip: 'Wildlife is real — keep 100m from elk and bears',
    detail: 'Elk wander Banff town routinely; black bears and grizzlies use the wildlife corridors all summer. Carry bear spray on any trail (rentable at outfitters in Banff), don\'t leave food in your rental car overnight, and stop ON the road if you see wildlife — never get out.',
  },
],
packing: [
  { item: 'Layered hiking system (base + mid + shell)', why: 'Even July mornings start at 6°C. A merino base, fleece mid, and Gore-Tex shell handles everything from a glacier picnic to a Banff Avenue lunch.' },
  { item: 'Waterproof hiking boots', why: 'Banff trails are rocky and frequently wet. Broken-in mid-cut hiking boots are essential for Plain of Six Glaciers, Sentinel Pass, and the Larch Valley.' },
  { item: 'Polarised sunglasses', why: 'Glacier glare and lake reflection are intense; polarised lenses also let you see fish below the surface of the Bow River.' },
  { item: 'Swimwear (yes, even in winter)', why: 'Banff Upper Hot Springs is open year-round and the Fairmont Banff Springs spa has outdoor mineral pools. Don\'t forget swimwear because it\'s December.' },
  { item: 'Smart-casual dinner outfit', why: 'Post Hotel\'s dining room, the Fairmont\'s 1888 Chop House, and Chateau Lake Louise\'s Walliser Stube all have a smart dress code. One nice outfit each is enough.' },
  { item: 'Bear spray (rent on arrival)', why: 'Don\'t fly with it (TSA banned). Rent at Banff outfitters ($10/day) for any trail outside town. Statistically rarely used but ethically non-negotiable in grizzly country.' },
],
guide: {
  getting: 'Fly into Calgary International (YYC) — 1.5h drive east of Banff. Direct flights from JFK, EWR, ORD, ATL, LAX, SFO, SEA, plus London Heathrow, Frankfurt, Amsterdam, Tokyo. Rent a car at YYC (essential — book ahead, prices spike June–Aug). The drive on Trans-Canada Highway 1 is straightforward and scenic. Alternative: Banff Airporter shuttle ($90 one-way, 2h, runs hourly). No train.',
  where: 'Classic 7-night itinerary: 2 nights Banff (Fairmont Banff Springs) → 3 nights Lake Louise (Chateau Lake Louise or Post Hotel) → 1-night Icefields Parkway drive + 1 night Jasper (Fairmont Jasper Park Lodge) → return drive. For shorter trips: 4 nights Lake Louise (Post Hotel) + 3 nights Banff (Springs). Winter ski focus: 3 nights Banff Springs + 4 nights Chateau Lake Louise.',
  when: 'Two distinct honeymoons. June 20–September 20 is "lake honeymoon" — turquoise water, hiking, helicopter days, long evenings. Mid-September is the secret window: golden larches at Lake Agnes and the Larch Valley, fewer crowds, lakes still blue. December 15–March 15 is "ski honeymoon" — Lake Louise/Sunshine/Norquay tri-resort lift ticket, fireside, hot springs, Northern Lights occasionally visible from Jasper. Avoid April–May and October–November shoulders.',
},
localFood: 'Alberta beef (the rib eye at 1888 Chop House inside Fairmont Banff Springs is genuinely world-class); Arctic char and Pacific salmon at Post Hotel; bison short rib at Buffalo Mountain Lodge; fresh-baked bread and aged cheese at the Banff Farmers Market; honey from Saskatoon-berry hives; craft beer from Banff Ave Brewing Co. and Three Bears Brewery; Canadian rye whisky tastings (Lot 40, Forty Creek); poutine at the casual end; Cured Indigenous bannock tacos at Three Ravens. The Post Hotel cellar (1,800 wines) is a destination itself.',
currency: 'Canadian Dollar (CAD) — about 0.73 USD',
language: 'English (French signage in national parks; some French at Fairmont properties)',
timezone: 'UTC-7 (Mountain Standard Time) / UTC-6 (MDT in summer)',
  seo: { title: "Banff Honeymoon: 6 Rockies Castle Hotels Scored 2026", description: "6 Banff and Lake Louise hotels ranked. Fairmont Banff Springs, Chateau Lake Louise, Post Hotel. From $300/night. Year-round." },
}

export default meta
