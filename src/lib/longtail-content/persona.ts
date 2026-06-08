import type { PersonaContent } from './types'

// Per-persona editorial content. Hotel slugs verified against data/hotels/*.json.
// Each persona targets 600+ unique words across sections.

export const PERSONA_CONTENT: Record<string, PersonaContent> = {
  foodies: {
    intro:
      "A foodie honeymoon is the trip where the restaurant reservation is the anchor and the hotel is chosen to be three streets away. It is not a tasting-menu marathon — that's a stunt, not a honeymoon. The version that works pairs a destination with an everyday eating culture (a market you walk through, a wine you can't ship home, a pasta cut you've never seen) with a hotel whose own kitchen would still be worth the trip if the city around it disappeared. The five regions below qualify; everywhere else you're importing the food onto the honeymoon, which never quite lands. Maldives food is room-service-with-a-view; Bora Bora food is hotel-catering. Tuscany food is the reason you came. So is Provence. So is Sicily. So is Tokyo. So is the slow lunch in a Lyon bouchon you'll remember 20 years from now better than the wedding itself.",
    angle:
      "Editorial bias: the right foodie honeymoon hotel has its own farm, its own cellar, or both — and a chef who walks through the dining room. Borgo Santo Pietro grows what's on the plate. Castello di Casole sits inside a 4,200-acre Tuscan estate where the olive oil is pressed on property. La Bastide de Gordes pours Châteauneuf-du-Pape next door. We avoid destinations where the food culture is mostly imported (the Maldives, the Seychelles, most of the all-inclusive Caribbean) and we avoid 'foodie' resorts where the headline experience is a single tasting menu and the surrounding country is irrelevant. The right foodie hotel is the one where you'd eat lunch out and still come back for dinner.",
    hotelSlugs: [
      'borgo-santo-pietro-tuscany-italy',
      'castello-di-casole-tuscany',
      'la-bastide-de-gordes-provence',
      'aman-kyoto-japan',
      'capofaro-locanda-malvasia-sicily',
      'le-sirenuse-positano-italy',
    ],
    destinationClusters: [
      {
        title: 'Tuscany — the everyday standard',
        body: "Borgo Santo Pietro and Castello di Casole anchor the Sienese hills. The pattern: long lunches at the property, an afternoon at a winery (Avignonesi, Castello di Ama, Antinori), an off-property dinner at Osteria di Passignano or La Bottega del 30. You don't need three Michelin stars when the trattoria three kilometres from your hotel cooks better pici than 90% of starred restaurants. Pair Tuscany with two nights in Florence at the end (Villa Cora) for the museum-and-Sant'Ambrogio-market closer.",
      },
      {
        title: 'Provence — the rosé and market run',
        body: "La Bastide de Gordes sits at the centre of the Luberon. Saturdays at the Apt market, Mondays at Bedoin, Tuesdays at Vaison-la-Romaine — the market schedule is the itinerary. Domaine de Manville for the alternate base. Dinner at La Coquillade's L'Aupiho (one Michelin star) or the village restaurants of Lourmarin and Roussillon. The honest foodie advantage of Provence over Tuscany: shorter distances between great meals and a deeper wine programme at the property level.",
      },
      {
        title: 'Sicily and Tokyo — the underweighted options',
        body: "Capofaro on Salina, in the Aeolian islands, is one of the most underrated foodie hotels in Europe — a working Malvasia vineyard with rooms, where the chef cooks from the kitchen garden and the boat from Milazzo is part of the honeymoon. Tokyo via Aman Kyoto pairs the two strongest food cities on earth: a Kyoto kaiseki at Hyotei or Kikunoi, then the shinkansen to Tokyo for omakase at Sushi Saito's reachable cousins (Sushi Yoshitake, Sushi Sho). Skip Kyoto's hyped one-meal restaurants in favour of staying somewhere where the room food is itself the event.",
      },
      {
        title: 'The Amalfi coast and Lyon — the one-meal anchors',
        body: "Le Sirenuse in Positano holds a Michelin star at La Sponda and the breakfast on the terrace is itself worth a flight. Pair with a day-trip down the coast to Don Alfonso 1890 (two stars) for the single splurge dinner. For European couples, Lyon is the most under-considered foodie honeymoon city in the world — Paul Bocuse's heritage, a market called Les Halles that is the actual reference, and weekend rates at the Cour des Loges that are half the equivalent in Paris.",
      },
    ],
    whatToSkip:
      "Skip the Maldives unless you are specifically going for the diving — hotel food in the Maldives is uniformly competent and uniformly the same, because every ingredient flies in from Sri Lanka or Singapore. Skip Bora Bora for the same reason; the food is the weakest part of the trip. Skip the all-inclusive Caribbean for any foodie honeymoon — the model selects for volume, not provenance. Skip the 'foodie tour' resort packages that promise three tasting menus in three days; you'll eat better and be less tired with one signature dinner and four trattoria lunches. And skip the wedding cake reflex of booking a Michelin-three in the destination capital — the meal that lives in honeymoon memory is almost never the most expensive one.",
    closing:
      "A foodie honeymoon works when the destination's food culture is the everyday — not the event. Pick the region where you'd want to eat lunch even if you weren't on honeymoon, pick the hotel whose own kitchen earns its keep, and limit the splurge meals to one or two. The Tuscan-villa-to-Florence pattern is the safest bet; the Sicily-and-Aeolians pattern is the romantic one; Lyon is the wildcard if you've already done Italy.",
    faqs: [
      {
        question: "What's the single best foodie honeymoon destination?",
        answer: "Tuscany. The combination of property kitchens (Borgo Santo Pietro, Castello di Casole), wineries that take walk-ins, and a trattoria culture that operates at a higher floor than any other region makes it the lowest-risk choice. Provence is the close second; Sicily is the romantic dark horse.",
      },
      {
        question: "Is Tokyo a real honeymoon destination or just a food trip?",
        answer: "It's a real honeymoon if you split it: 3 nights Kyoto at Aman Kyoto for the slow opening, then 3 nights Tokyo for the food and the city. Tokyo alone is too kinetic to be a 7-night honeymoon, but as the back half of a Japan trip it's the most reliable foodie city on earth.",
      },
      {
        question: "Should we book Michelin-three restaurants in advance?",
        answer: "One, maybe. The honeymoon memory rarely belongs to the three-star tasting menu — it belongs to the trattoria where the owner brought you something off-menu because you said it was your honeymoon. Book one signature dinner (Le Sirenuse's La Sponda, Aman Kyoto's restaurant, Bocuse-era Lyon) and leave the rest open.",
      },
      {
        question: "How do we pace a 7-night foodie honeymoon?",
        answer: "Two big meals a day is the ceiling — usually one long lunch and one short dinner. If the property's restaurant is great, eat there on arrival night (jetlag), the second night (full experience), and the last night (closure). Off-property the other four. More than that and the food becomes work.",
      },
    ],
  },

  'adventure-seekers': {
    intro:
      "Adventure honeymoons get a bad name from the generic version — Costa Rica zip-line in the morning, couples-massage in the afternoon, repeated for five days. The real adventure honeymoon trades that template for a genuine wilderness paired with a single extraordinary lodge as base. You wake up at altitude, in the bush, or facing a glacier; you do one real thing each day; and you come back to a property that knows what you just did and cooks dinner accordingly. The five regions below qualify. Each one centres on a lodge where the helicopter, the guide, and the dinner are pieces of the same operation. Skip the resorts that bolt 'adventure' onto a beach product — Costa Rica's all-inclusives, Bali's spa packages, the Maldives' 'ocean adventure' programmes. They're the wrong shape for couples who actually want to be tired in a good way every night.",
    angle:
      "Editorial bias: the adventure honeymoon hotel is a lodge, not a resort. It has 12 to 30 rooms, it owns or controls the experience (Awasi's private guide + vehicle per couple, Deplar Farm's heli-ski operation, Singita's exclusive-use concession), and the staff has done the activity you're about to do. We avoid mid-tier 'eco-adventure' brands that mostly market the word and outsource the experience. We avoid combining adventure with spa-only resorts (it sounds balanced; it actually means a half-rate version of both). The right adventure lodge is the one where the guide eats with you at dinner.",
    hotelSlugs: [
      'awasi-patagonia-patagonia-chile',
      'tierra-patagonia-patagonia-chile',
      'deplar-farm-fljot-valley-iceland',
      'azur-lodge-queenstown-new-zealand',
      'cottars-1920s-safari-camp-kenya',
      'amankora-paro-bhutan',
    ],
    destinationClusters: [
      {
        title: 'Patagonia — the trekking base case',
        body: "Awasi Patagonia gives each couple a private guide and 4x4 for the full stay — the entire property is built around your itinerary, not the other way round. Days run between Torres del Paine's iconic trails (Mirador Las Torres, Grey Glacier, French Valley) and the kitchen team's evening debrief. Tierra Patagonia is the slightly larger sibling; equally serious about the hiking, with a spa to handle the recovery. February-March is the sweet spot — long daylight, less wind, the park open in full.",
      },
      {
        title: 'Iceland — the helicopter and glacier honeymoon',
        body: "Deplar Farm in the Fljót Valley is the rare lodge built around heli-skiing in winter and heli-fishing/hiking in summer. The honeymoon version is March-April for the still-frozen northern fjords with snow on the ground but daylight back. The Eleven Experience model puts the helicopter in the operating budget — fly out to a private glacier in the morning, fly back to a geothermal spa under the stars. Pair with 2 nights in Reykjavík at the Edition for the urban book-end.",
      },
      {
        title: 'New Zealand — the heli-hike and Milford honeymoon',
        body: "Azur Lodge above Queenstown is a 9-villa property with helipads and the right concierge for couples who want Milford Sound by water, Mount Cook by air, and Franz Josef by foot — all within a 5-day window. Eichardt's Private Hotel in town is the post-adventure decompression. New Zealand's underrated adventure honeymoon advantage: world-class wine country (Central Otago Pinot Noir) within an hour of all the action.",
      },
      {
        title: 'Kenya and Bhutan — the cultural-adventure variants',
        body: "Cottar's 1920s Safari Camp in the Maasai Mara is the most romantic of the great Kenya camps — six tents, private guide programmes, walking safaris that are unavailable at the larger lodges. Pair with 2 nights at Angama Mara on the Oloololo escarpment. Amankora's Bhutan circuit (Paro, Punakha, Gangtey, Thimphu, Bumthang) is the slow-adventure honeymoon — multi-day trekking to Tiger's Nest and the Druk Path, framed as a 5-lodge journey where the difficulty rises gradually. Couples who do Bhutan well are usually the ones who've already done a safari.",
      },
    ],
    whatToSkip:
      "Skip the ultra-spa-only resorts that advertise 'adventure' on the website but deliver mostly a yoga schedule. Skip Costa Rica's mid-market all-inclusives — the wildlife is real but the lodges are not the same calibre as Patagonia or Kenya. Skip 'adventure' add-ons at beach resorts (Maldives shark snorkelling, Bora Bora paddleboarding); the activity is fine, the framing is wrong. Skip cruise-based adventure unless it's specifically Antarctica or Galapagos with the right small operator — most 'expedition' cruises now carry 200+ passengers and the experience compresses. Skip combining four destinations in 7 nights to maximise variety — you'll get a worse version of each.",
    closing:
      "The adventure honeymoon works when the lodge is genuine, the wilderness is real, and the activity is the everyday — not a half-day excursion. Pick one region, one lodge, and let the place itself shape the rhythm. The couples who try to combine Patagonia + Atacama + Easter Island in 10 days come back exhausted; the ones who spend 7 nights at Awasi come back changed.",
    faqs: [
      {
        question: "Are adventure honeymoons too physically demanding?",
        answer: "Depends on the destination. Patagonia and New Zealand can be paced — Awasi will design easy half-day hikes if that's what you want. Bhutan's Tiger's Nest is a half-day climb at altitude (real but doable). Kenya safari is the easiest of all: most of the 'adventure' happens from a vehicle. The lodges scale the intensity to the couple.",
      },
      {
        question: "What's the safest adventure honeymoon for non-adventure-types?",
        answer: "Kenya safari with Cottar's 1920s. The wildness is genuine, the lodge is romantic, and the day-to-day demand on the body is low. It is the gateway adventure honeymoon — the one couples do before Patagonia.",
      },
      {
        question: "Helicopter travel — worth it on this kind of trip?",
        answer: "At Deplar Farm and on the Mount Cook day in New Zealand, yes — the heli is the experience, not a transfer convenience. At Patagonia or Kenya, mostly no — the road approach is part of the story. Budget $1,500-3,000 for a single heli day at Deplar; less elsewhere.",
      },
      {
        question: "How long should an adventure honeymoon be?",
        answer: "7 nights minimum. 10 is the sweet spot. The first 2 days are decompression and acclimatisation; the meaningful activity happens days 3-8. Anything shorter and you're still adjusting to the altitude / hemisphere / cold when the trip ends.",
      },
    ],
  },

  introverts: {
    intro:
      "An introvert honeymoon is the trip where the day's biggest social interaction is the breakfast waiter — and even that is optional. The market is loud with the opposite — animation teams, beach DJs, mandatory mingling at communal pools — and the few places that get introvert-honeymoon right are the ones that have engineered seclusion into the floor plan. Private islands with single-villa inventories. One-villa-per-couple safari camps. Faroese cabins on a clifftop with weather as the only company. The five destinations below let you genuinely disappear: no buffet lines, no themed evenings, no shared dining, no spa receptionist who needs to know your name three times. The hotel staff will be unobtrusive on purpose. The other guests, when they exist, will be at the other end of the property. The honeymoon will be quiet by design — which is not the same as boring.",
    angle:
      "Editorial bias: the right introvert hotel is one where you could spend 48 hours without speaking to a guest, and the staff would consider that a service success rather than a problem. Private islands are the canonical answer (Cayo Espanto, Necker, Laucala). One-villa lodges are the next-best (Singita's smaller properties, Bisate, the more isolated Amankora lodges). After that: country-house hotels with low room counts in places where the weather thins the crowds even further (the Cotswolds, the Faroes). We avoid everything with the word 'club', 'animation', or 'beach party' in its descriptors. We avoid the brand-name social-peak properties (St. Barts at Christmas, Mykonos in August) where the room is fine but the property is a scene. The right introvert hotel is the one where the only sound at dinner is your own conversation.",
    hotelSlugs: [
      'cayo-espanto-belize',
      'laucala-island-resort-fiji',
      'singita-sabi-sand-south-africa',
      'bisate-lodge-volcanoes-rwanda',
      'amankora-gangtey-bhutan',
      'cowley-manor-experimental-cotswolds',
    ],
    destinationClusters: [
      {
        title: 'Private islands — the canonical answer',
        body: "Cayo Espanto, off the coast of Belize, has 7 villas on an island you can walk around in 12 minutes — the staff outnumber guests and meals are taken on your own veranda by default. Laucala Island in Fiji is the larger, more architectural version: 25 villas across 12 square kilometres, a horse stable, a chocolate-making room, and the option to never see another guest. Necker is the celebrity option but at full island buy-out it's the most extreme privacy in the catalogue. Private islands solve the introvert problem at the floor-plan level: there is literally no shared space you have to enter.",
      },
      {
        title: 'One-villa safari camps — the wildlife alternative',
        body: "Singita's smaller properties (the Boulders Lodge at Sabi Sand, the Castleton Suite) operate as effectively private — your guide, your vehicle, your dining table. Bisate Lodge in Rwanda has only six villas on a volcanic ridge above the Volcanoes National Park; the gorilla trek is private by design. The introvert benefit of safari is structural: the activity is in a vehicle with only your guide, and dinners are usually at your own table. You can do 7 nights and speak to exactly four staff members.",
      },
      {
        title: 'The Faroes and the remote-Bhutan option',
        body: "The Faroe Islands at the right hotel (Hotel Føroyar, the new Hilton Garden Inn Tórshavn, or a private booking via Heimablídni) gives you a North-Atlantic introvert honeymoon: wind, cliffs, almost no other tourists outside July-August. Amankora Gangtey, the smallest of the Bhutan lodges, sits at 3,000m altitude with twelve suites and a view across the Phobjikha valley — the staff are trained Bhutanese, the daily activity is a single walk, and the silence is total. Both work for couples who specifically want a landscape rather than a beach.",
      },
      {
        title: 'Country-house and deep-Cotswolds variants',
        body: "Cowley Manor Experimental in the Cotswolds is a 31-room country house with the right ratio of fire-lit reading rooms to spa rooms — the alternative is Lime Wood in the New Forest. Both deliver the introvert honeymoon in shoulder season (October-November, March-April), when the property is half-full and the surrounding villages are empty. A 4-night Cotswolds stay paired with 3 nights in London (at a small hotel like the Beaumont rather than a big one) is one of the most underrated introvert honeymoons in Europe.",
      },
    ],
    whatToSkip:
      "Skip Sandals and the all-inclusive Caribbean entirely — the model is built around shared activity, communal dining, and animation teams. Skip Marina Bay Sands and other Asian mega-resorts; the rooms are fine, the floor plan is a mall. Skip Mykonos, Ibiza, Tulum's hotel strip, and St. Barts at Christmas — the property may be quiet but the destination isn't. Skip cruise honeymoons unless it's a small ship (Aqua Expeditions, Ponant) — the standard 2,000-passenger Caribbean cruise is the opposite of an introvert honeymoon. Skip properties where the buffet is the headline dining option, where there's a poolside DJ, or where the welcome cocktail is mandatory. These cues are reliable.",
    closing:
      "An introvert honeymoon works when the hotel has been deliberately engineered for separation — small room count, private dining options, a guest profile that self-selects for quiet. Pick the destination where the structural privacy is high (private island, one-villa lodge, off-season country house), pick the property where the staff treats invisibility as the service, and you'll come home with the rare honeymoon that actually felt restful.",
    faqs: [
      {
        question: "Is a private island honeymoon worth the price?",
        answer: "Yes, if the introversion is the priority. The structural privacy of a Cayo Espanto or a Laucala is unreplaceable — no resort 'romantic package' delivers it. The price (typically $2,500-6,000/night) reflects the staff ratio and the inventory constraint, not gold-plated taps.",
      },
      {
        question: "Can we do the Maldives as introverts?",
        answer: "Yes, but pick carefully. Soneva Fushi or Soneva Jani have the right scale for introverts (large island, low density). Cheval Blanc Randheli is even quieter. Avoid the smaller, dense atolls where the villa-to-island ratio is 1:1 and you'll see the same 40 guests every meal.",
      },
      {
        question: "How do we eat dinner without socialising on this kind of trip?",
        answer: "At the introvert-friendly properties, in-villa dining is the default offering, not an upcharge — at Cayo Espanto, Singita Boulders, Amankora and the Faroese hotels, you can have every meal on your own deck or in your own dining room. Tell the property in advance and they'll structure the trip around it.",
      },
      {
        question: "Won't 7 nights of total quiet get boring?",
        answer: "Not at the right place. The introvert honeymoon works because the landscape (a private island, a volcanic valley, a Faroese cliff) is doing the work that a city's restaurants would do on an extrovert honeymoon. The activity is reading, walking, eating, and looking at the view. Couples who like that go home rested. Couples who don't shouldn't book this trip.",
      },
    ],
  },

  'second-marriage': {
    intro:
      "A second-marriage honeymoon doesn't need to repeat the first one's mistakes — and most of those mistakes were about choosing destination by photograph rather than by experience. Couples on a second marriage have usually already done the beach honeymoon. They've done the Maldives, or the Mexican all-inclusive, or the Caribbean week. They know what the over-water villa is like. They also know that the photograph of it is the part they remember least. The second honeymoon, done well, trades the icon for the experience — a Kenya safari, a Bhutan trek, a Galapagos cruise, a multi-week Patagonia traverse. The pitch is straightforward: at this point in life, the strongest honeymoon memory is the one of doing something together you'd never done before. The five regions below all qualify, and each of them rewards couples who already know what they actually like.",
    angle:
      "Editorial bias: the second-marriage honeymoon should be experience-led, not aesthetic-led. We don't recommend the 'better version of the first honeymoon' — a $2,000/night Maldives villa when the first was $700 — because the marginal upgrade is invisible at this tier. We recommend the categorical pivot: an experience the first honeymoon didn't include. Safari is the most common version; Bhutan and Galapagos are the underweighted variants; full-length Patagonia is the over-40 sleeper. The hotel choices here are the kind couples in their 30s and 40s actually book — confident, design-led, expensive, but adult in pacing.",
    hotelSlugs: [
      'angama-mara-kenya',
      'cottars-1920s-safari-camp-kenya',
      'duba-plains-camp-great-plains-botswana',
      'amankora-paro-bhutan',
      'awasi-patagonia-patagonia-chile',
      'ecoventura-origin-galapagos',
    ],
    destinationClusters: [
      {
        title: 'East African safari — the strongest pivot',
        body: "Angama Mara on the Oloololo escarpment is the most romantically positioned camp in Kenya; Cottar's 1920s in the Olderkesi conservancy is the most editorial. Pair them with 3 nights on the Tanzania side (Singita Grumeti) or close with 3 nights at a coastal property (Lamu, Zanzibar) for the bush-and-beach combination. The pattern: 5 days game drives, 3 days coastal recovery. The honeymoon memory is built around the wildlife — what you saw on day 4, the lion crossing the road at dawn — not the property. That's the point.",
      },
      {
        title: 'Botswana — the higher-tier safari',
        body: "Duba Plains in the Okavango Delta is the more exclusive and more expensive version of the Kenya safari — water-channel game viewing rather than Mara plains, far fewer other vehicles, and a more architectural lodge. Belmond Eagle Island is the alternative. Botswana safari is the second-marriage choice when one or both partners have already done Kenya — same continent, structurally different experience, distinctly more remote.",
      },
      {
        title: 'Bhutan — the contemplative honeymoon',
        body: "Amankora's five-lodge circuit (Paro, Thimphu, Punakha, Gangtey, Bumthang) is the slow-moving introvert-adjacent option for couples who want a 10-12 night structured journey. The trip culminates with the Tiger's Nest climb — physically demanding but achievable, and the kind of shared accomplishment that anchors a honeymoon memory the way no beach view ever will. Bhutan is the second-marriage destination for couples in long-term partnerships re-marrying after extensive previous travel.",
      },
      {
        title: 'Patagonia and Galapagos — the experience-led closers',
        body: "Awasi Patagonia (private guide, private vehicle, Torres del Paine on your own pacing) is the active second-honeymoon: it works for couples in their 30s and 40s who are still up for 6-hour hikes but want a real bed at the end. Ecoventura Origin in the Galapagos is the cruise option for couples who specifically don't want to do another hotel-based honeymoon — 7 nights on a 20-passenger expedition vessel, daily wildlife landings, the kind of week that rebuilds a relationship through novelty rather than comfort.",
      },
    ],
    whatToSkip:
      "Skip the upgraded version of your first honeymoon — same destination, bigger villa, more zeros. The marginal romance gain is small and the trip feels like a re-run. Skip the brand-name beach resorts where the social-peak crowd goes (St. Barts Christmas, Mykonos August, Cap-Ferrat July); they're built for who-saw-you-where rather than what you experienced together. Skip cruise honeymoons larger than 200 passengers — the second-marriage honeymoon needs intimacy, not capacity. Skip 14-night double-destination plans that try to combine adventure + beach + city; the time pressure ruins the pacing on all three.",
    closing:
      "The second-marriage honeymoon is the trip where photographs are weaker than memory — and that's the right ratio. Pick the experience the first honeymoon didn't include, pick the lodge or vessel that's small enough to be intimate, and let the destination itself do the work. The strongest second honeymoons come back with stories the friends haven't already heard.",
    faqs: [
      {
        question: "Should we just upgrade the first-honeymoon destination instead?",
        answer: "Usually no. A 3-star Maldives upgraded to a 5-star Maldives is still a Maldives honeymoon — the marginal memory gain is small. The categorical pivot (Kenya safari, Bhutan trek, Galapagos cruise) produces a structurally different trip and a sharper memory.",
      },
      {
        question: "Is safari romantic enough for a honeymoon?",
        answer: "Yes — the misconception comes from imagining mid-tier safari (large camps, shared vehicles). At Cottar's, Angama, Duba Plains, the operating model is private vehicle, private guide, often private dining; the romance is the structural intimacy plus the wildlife.",
      },
      {
        question: "What's the right length for a second-marriage honeymoon?",
        answer: "10-14 nights. Couples on a second marriage usually have more flexibility on time off (no employer to placate, kids already adjusted) and the experience destinations all reward the longer stay. Bhutan needs 10 nights minimum. Patagonia 7-10. East Africa 8-12 with the beach close.",
      },
      {
        question: "Are these honeymoons more expensive than a beach honeymoon?",
        answer: "Usually yes — by 30-60%. A 10-night East Africa safari runs $25k-50k per couple; a comparable Bhutan trip $20k-40k. The price reflects the small-camp operating model, not gold-plating. If budget is tight, the right pivot is Patagonia (Awasi at $1,800/night) or Galapagos (Ecoventura at $7-9k per cruise) which deliver similar memory at lower spend.",
      },
    ],
  },

  'over-40': {
    intro:
      "The honeymoons designed for couples in their twenties don't quite work in your forties — the all-inclusive party week, the Bali influencer circuit, the Mykonos club run. The 40+ honeymoon trades volume for refinement: real beds, easy luggage transit, quiet bars, restaurants where the music is below the conversation, and properties that don't apologise for being expensive. The five destinations below are built for adult couples who'd rather have a slow lunch than a beach party, a country drive than a club night, a great glass of wine than a swim-up bar. They reward couples who know what they want — and who know that honeymoon energy at 42 is fundamentally different from honeymoon energy at 26. Less party, more comfort. Less stamp-collecting, more single-region depth. Less Pinterest, more memory.",
    angle:
      "Editorial bias: the right over-40 honeymoon hotel is one where the bar closes when the last couple leaves it, the spa actually functions as a spa rather than as a marketing line, the bed is a real bed, and the property doesn't require you to do anything to enjoy it. We strongly prefer destinations with low-friction transit (no two-stop flights, no 4-hour transfers from the airport), short walks to dinner, and a guest demographic that skews adult. Lake Como, the Amalfi Coast, the Côte d'Azur, Tuscany, Bhutan, and the Cotswolds all qualify. We avoid party-island destinations, mega-resorts, and any property whose brochure prominently features the words 'beach club'.",
    hotelSlugs: [
      'grand-hotel-tremezzo-lake-como',
      'passalacqua-lake-como-italy',
      'le-sirenuse-positano-italy',
      'grand-hotel-du-cap-ferrat-cote-dazur',
      'borgo-santo-pietro-tuscany-italy',
      'amankora-paro-bhutan',
    ],
    destinationClusters: [
      {
        title: 'Lake Como — the gold standard',
        body: "Passalacqua at Moltrasio (24 rooms, the Leading Hotels of the World property-of-the-year in 2023) is the highest-rated adult honeymoon hotel in Europe. Grand Hotel Tremezzo (the lake-front grande dame), and Villa d'Este round out the top tier. The pattern: 5-7 nights on the lake, daily Riva boat between the villas, lunch at Villa d'Este or in Bellagio, no need to leave for the airport once until departure. Lake Como is the over-40 honeymoon that gets repeat-booked.",
      },
      {
        title: 'Amalfi and Cap-Ferrat — the Mediterranean classics',
        body: "Le Sirenuse in Positano remains the reference hotel of the Amalfi Coast — the rooftop, the breakfast, La Sponda's tasting menu. Pair with a final 2 nights at Hotel Caruso (Belmond) in Ravello for altitude and quiet. Grand-Hôtel du Cap-Ferrat (Four Seasons) is the French Riviera equivalent — peninsula setting, walking distance to Saint-Jean-Cap-Ferrat village, the right scale for couples who want some city access without a city stay. Both sit in the September-October sweet spot when the heat eases.",
      },
      {
        title: 'Tuscany — the slow-honeymoon base case',
        body: "Borgo Santo Pietro is the adult honeymoon's dark-horse winner — a working farm with 20 suites, a Michelin-starred restaurant, and a pace that's deliberately slow. Castello di Reschio and Castiglion del Bosco are the alternative bases. The over-40 advantage in Tuscany: the destinations within driving distance (Florence, San Gimignano, Montalcino, Pienza) are walkable, lunch-paced, and entirely adult. No nightlife to politely avoid; no animation team to dodge.",
      },
      {
        title: 'Bhutan and the Cotswolds — the contemplative options',
        body: "Amankora's Bhutan circuit (5 lodges across the country) is the over-40 honeymoon for couples who specifically want movement without the resort context. Daily walks, monasteries, the Tiger's Nest climb on day 8 or 9 — and Aman-quality lodging at each stop. The Cotswolds (Cowley Manor, Lime Wood, the Manor House at Castle Combe) is the closer-to-home variant for European couples: 4-5 nights of fire-lit dinners and country walks, easy to pair with 2 nights in London at the close.",
      },
    ],
    whatToSkip:
      "Skip the party islands (Mykonos main, Ibiza, Hvar, Tulum hotel strip) regardless of which hotel you book — the destination context defeats the property. Skip mega-resort all-inclusives — the buffet line, the animation team, and the demographic mix are wrong for over-40 honeymoons. Skip the over-100-room properties on the Amalfi or Cap-Ferrat coasts where the daytime poolside crowd is younger than you — the smaller properties (Le Sirenuse, Caruso, Cap-Ferrat's Four Seasons) cost more and self-select better. Skip cruise honeymoons larger than expedition scale; the bus-load atmosphere is the opposite of what works at this age. And skip 5-destination, 12-night itineraries — the over-40 honeymoon rewards depth over breadth.",
    closing:
      "The over-40 honeymoon works when the destination is mature, the hotel is small or selective, and the daily rhythm is built around long lunches, real beds, and quiet bars. Pick one region, stay longer than you'd think, and let the property's pace set yours. The couples who do this well come back saying it was the best holiday they'd ever taken — not just the best honeymoon.",
    faqs: [
      {
        question: "Are these destinations too quiet for a honeymoon?",
        answer: "No — they're appropriately paced for the couple, not the brochure. Quiet at Le Sirenuse means a candlelit dinner on a Positano cliff with the lights of the coast in the background. Quiet at Passalacqua means a Riva boat to lunch in Bellagio. The over-40 honeymoon is not under-stimulated; it's adult-stimulated.",
      },
      {
        question: "What's the easiest of these for transatlantic couples?",
        answer: "Lake Como — direct flights to Milan from most US East Coast cities, then a 90-minute private transfer. Amalfi requires a long drive or helicopter from Naples; Cap-Ferrat is a 30-minute Nice transfer; Tuscany is a 1-2 hour drive from Florence or Pisa. Como wins on the transit math.",
      },
      {
        question: "How many nights at this kind of property?",
        answer: "Seven minimum, 10 if you can. The over-40 honeymoon error is treating these properties as a 4-night stopover — they're built for slow stays, and the costliest part (the flights, the transfer) is the same whether you stay 4 or 10 nights. Stay longer.",
      },
      {
        question: "Should we add a city to the trip?",
        answer: "One, at the end. Florence after Tuscany, Milan after Como, Nice or Cannes after Cap-Ferrat. Two cities is one too many — the over-40 honeymoon collapses under the suitcase-and-airport load if you try to combine more than two bases.",
      },
    ],
  },
}
