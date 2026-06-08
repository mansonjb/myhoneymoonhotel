import type { ItineraryContent } from './types'

// Keyed by URL slug (e.g. 'maldives', 'bora-bora').
// Each entry has a unique 7-night day-by-day with arrival → exploration → big day → quiet day → adventure → quiet → departure arc.

export const ITINERARY_CONTENT: Record<string, ItineraryContent> = {
  maldives: {
    intro:
      "A Maldives honeymoon itinerary is less about activities and more about rhythm. The first 36 hours are decompression — you've come a long way, you're jetlagged, the room is the world. The middle days build the real memories: a sandbank breakfast, a manta excursion, a sunset cruise. The last day is the return to gravity. Below is the itinerary that works at almost any 7-night Maldives resort, optimized for the rest-then-experience-then-rest arc that the destination rewards. Specific to Conrad Maldives Rangali Island, but transferable to Anantara Kihavah, Soneva Fushi, or Four Seasons Landaa Giraavaru with minor tweaks.",
    hotelSlug: 'conrad-maldives-rangali-island',
    hotelRationale:
      "Conrad Maldives Rangali Island is the prototypical 7-night Maldives honeymoon. Two islands connected by a 500m footbridge, 21 restaurants, the world's first underwater all-glass restaurant (Ithaa). Overwater villas from $1,200/night start the math at a realistic point. The size of the property (132 villas) means it doesn't feel forced-private the way smaller resorts can, and the dining variety means you don't get restaurant fatigue by day 5.",
    days: [
      { morning: 'Arrive Malé in the late morning after the long-haul flight. 30-minute seaplane to the resort.', afternoon: 'Check in to the overwater villa. Long shower. Snorkel from the deck — first reef encounter is the calibration moment.', evening: 'Light dinner at Atoll Market (the casual buffet). Champagne on the deck. Sleep at 9pm.', restaurants: 'Atoll Market (casual, in-resort)' },
      { morning: 'Sleep in until 8am. Breakfast on the villa deck. Slow snorkel from the steps.', afternoon: 'Pool morning, lunch at Vilu (waterfront casual), spa afternoon (couples massage — this is the on-arrival decompression).', evening: 'Dinner at Mandhoo Spa Restaurant (overwater, light Asian fare). Walk back along the lit bridge.', restaurants: 'Vilu, Mandhoo Spa Restaurant' },
      { morning: 'Sandbank breakfast — book this in advance. The boat takes you to a private sandbank 15 minutes from the resort, where a table is set up with breakfast service. This is the iconic Maldives morning.', afternoon: 'Back to the villa by 11am. Slow afternoon — read, swim, room service lunch.', evening: 'Sunset cocktails at Sunset Bar. Dinner at The Quiet Zone (the resort\'s adults-only restaurant).', restaurants: 'The Quiet Zone (adults-only)' },
      { morning: 'Sleep-in day. Late breakfast at the villa. No agenda.', afternoon: 'Spa double-treatment (the longer "Maldivian Rhythm" or signature package). Late lunch.', evening: 'Private in-villa dinner — order from the menu, the staff sets up on the deck. This is the night to splurge on the wine.', restaurants: 'In-villa private dining' },
      { morning: 'Manta or whale shark excursion — book through the resort. The boat goes to South Ari Atoll for whale sharks (year-round) or Baa Atoll for mantas (June–November).', afternoon: 'Return by 2pm. Lunch at Mandhoo. Snorkel from the villa.', evening: 'Dinner at Ithaa — the underwater restaurant. Expensive ($350+ per person) but the trip\'s photogenic moment.', restaurants: 'Ithaa (underwater)' },
      { morning: 'Dawn paddleboard on the lagoon. Breakfast at Vilu.', afternoon: 'Sunset dolphin cruise — 90 minutes on the resort boat, spinner dolphins gather at the drop-off most evenings. Champagne included.', evening: 'Dinner at Koko Grill (Japanese teppanyaki). The chefs are theatrical; the food is excellent.', restaurants: 'Koko Grill' },
      { morning: 'Slow morning. Last breakfast on the deck. Pack at leisure.', afternoon: 'Seaplane back to Malé.', evening: 'International flight home.', restaurants: '—' },
    ],
    splurge: 'Sandbank breakfast (day 3) — $300–500 per couple. The single most-photographed moment of a Maldives honeymoon and worth the spend. Reserve at least 48 hours out; the best sandbanks book quickly.',
    sleepInDay: 4,
    costEstimate: '7 nights at Conrad Maldives entry overwater: ~$1,200/night = $8,400. Seaplane transfer: $800. Flights from US East Coast: $2,000–2,500. Extras (sandbank breakfast, Ithaa dinner, sunset cruise, spa): $2,500. Total all-in for two: $13,700–14,200.',
    closing:
      'The Maldives 7-night works because the destination rewards stillness. The couples who over-schedule (two excursions a day, three restaurant changes daily) come home more tired than rested. The couples who lean into the rhythm — one signature experience every other day, one full sleep-in day — come home transformed.',
    faqs: [
      { question: 'Is 7 nights too long in the Maldives?', answer: 'For most couples, no — 7 nights is the format the resorts design around, and the rhythm of two arrival days, three middle days, two departure days fits perfectly. Couples who get island-fever do so around day 9 or 10; 7 nights is comfortably inside the productive window.' },
      { question: 'Do we need to leave the resort?', answer: 'No — the Maldives is one of the few honeymoon destinations where the entire experience is in-resort. Excursions (manta, whale shark, sandbank) are optional but enhance the trip. Off-resort exploration (other islands) is not what you came for.' },
      { question: 'Should we book all-inclusive?', answer: 'At Conrad specifically, the half-board option (breakfast + dinner) is the right balance. Full AI removes the dinner decisions but locks you out of the signature restaurants (Ithaa, Koko Grill) at no extra cost. Half-board gives you the buffet for the casual nights and lets you pay à la carte for the signature nights.' },
      { question: 'What if it rains?', answer: 'Maldivian "rain" in the dry season (Nov–Apr) is typically a 30-minute afternoon shower, not a day-long event. The villa is built for it — the deck has covered areas, the over-water position keeps the lagoon view dramatic. Plan a spa day or in-villa dinner if rain coincides.' },
    ],
  },

  'bora-bora': {
    intro:
      "Bora Bora's 7-night itinerary is the iconic Pacific honeymoon. Mount Otemanu is in every frame; the lagoon is glass-flat for most of the dry season; the rhythm is similar to the Maldives but with more Polynesian cultural texture, more lagoon excursions worth doing, and slightly more dining variety. The itinerary below is built around Four Seasons Bora Bora — the property that delivers the most consistent honeymoon experience on the island.",
    hotelSlug: 'four-seasons-bora-bora',
    hotelRationale:
      "Four Seasons Bora Bora is the most-recommended honeymoon property on the island. 100 overwater bungalows, 7 beachfront villas, a Polynesian spa with treatment rooms over the lagoon, and a beach restaurant (Sunset) that earns its name. The property is on a motu (small island) across the lagoon from the main island of Bora Bora, with shuttle boats running every 30 minutes — meaning you have privacy when you want it and access to Vaitape's restaurants when you don't.",
    days: [
      { morning: 'Arrive Papeete (Tahiti) early morning. Connect to the Bora Bora flight (50 minutes). Boat transfer to the resort.', afternoon: 'Check in. Long shower. Lagoon swim from the deck.', evening: 'Sunset Bar (the name is accurate). Dinner at Arii Moana. Sleep at 9pm.', restaurants: 'Sunset Bar, Arii Moana' },
      { morning: 'Sleep in. Breakfast at Tere Nui (the all-day restaurant). Pool morning.', afternoon: 'Snorkel safari excursion — the resort runs a 3-hour boat trip to the coral garden, manta cleaning station, and a snorkel-with-rays site. This is the highlight day-2 activity.', evening: 'Dinner at the in-villa table on the deck.', restaurants: 'In-villa dining' },
      { morning: 'Lagoon kayak at dawn. Breakfast at Tere Nui.', afternoon: 'Half-day in Vaitape (the main town of Bora Bora) — shuttle boat across. Lunch at Bloody Mary\'s. Pearl shopping if interested.', evening: 'Sunset cruise on the resort\'s catamaran — Champagne, snacks, the entire lagoon lit by the setting sun behind Mount Otemanu.', restaurants: 'Bloody Mary\'s (lunch)' },
      { morning: 'Sleep-in day. Late breakfast in the villa.', afternoon: 'Spa double-treatment at the overwater Kahaia Spa.', evening: 'Quiet dinner at Sunset.', restaurants: 'Sunset' },
      { morning: 'Mount Otemanu helicopter tour — 20 minutes over the lagoon and around the mountain. Book 48 hours out; the helicopter weather is occasionally cancelled, so don\'t schedule it late in the trip.', afternoon: 'Lunch at the resort. Beach afternoon.', evening: 'Polynesian dance dinner at Arii Moana (Tuesday or Friday nights typically). The food is good; the cultural performance is the reason.', restaurants: 'Arii Moana (Polynesian dance dinner)' },
      { morning: 'Motu picnic — the resort drops you on a private motu with breakfast or lunch setup. 2 hours of completely private beach.', afternoon: 'Back to the resort. Slow afternoon.', evening: 'Dinner at the in-villa deck — the last big dinner of the trip.', restaurants: 'In-villa dining' },
      { morning: 'Slow morning. Last lagoon swim. Pack.', afternoon: 'Boat to airport. Flight to Papeete. International flight home (often overnight).', evening: 'In transit.', restaurants: '—' },
    ],
    splurge: 'Mount Otemanu helicopter tour (day 5) — $400–600 per couple. The aerial view of the lagoon and the mountain is the trip-defining shot, and the perspective on the resort and Bora Bora itself is genuinely transformative.',
    sleepInDay: 4,
    costEstimate: '7 nights at Four Seasons Bora Bora entry overwater: ~$1,800/night = $12,600. Inter-island flights and transfers: $600. Flights from US East Coast via LAX: $2,500–3,500. Extras (helicopter, snorkel safari, sunset cruise, Polynesian dinner, spa): $3,500. Total all-in for two: $19,200–20,200.',
    closing:
      'Bora Bora rewards committing to the iconic moments — the helicopter tour, the motu picnic, the Polynesian dance dinner. The rest of the trip is the same lagoon-and-spa rhythm as the Maldives, but the cultural and visual texture is uniquely Polynesian.',
    faqs: [
      { question: 'Is Bora Bora better than the Maldives?', answer: 'Different. Bora Bora has the iconic Mount Otemanu in every frame and more Polynesian cultural texture; the Maldives has more inventory, more snorkeling diversity, and lower cost. Both are world-class. The Bora Bora itinerary above leans into the visual-iconic and cultural elements; the Maldives itinerary leans into the marine excursions.' },
      { question: 'How important is the helicopter tour?', answer: "For most couples, it's the trip-defining moment. The aerial view of the lagoon is what you saw on Instagram; experiencing it from above pays back the $400–600 cost." },
      { question: 'What about food off-resort?', answer: 'Worth one lunch at Bloody Mary\'s in Vaitape (a Bora Bora institution) and one dinner at Sunset or a local restaurant in town. The off-resort dining variety is limited but worth sampling once or twice.' },
      { question: 'Best month for this itinerary?', answer: 'June through October — dry season. July and August are peak conditions but also peak crowds. June and September are the smart-pricing windows with 95% of the weather.' },
    ],
  },

  bali: {
    intro:
      "Bali's 7-night honeymoon is the two-stop split: Ubud first (3 nights) for the spiritual and cultural half, then Uluwatu (4 nights) for the beach-and-cliff half. The contrast is the entire point — Ubud's rice paddies and Hindu temples set up the Uluwatu cliff-villa decompression. The itinerary below is built around Capella Ubud (the tent villas) and Bulgari Uluwatu, but transfers cleanly to Aman Ubud + Six Senses Uluwatu or Mandapa + Alila Villas Uluwatu.",
    hotelSlug: 'capella-ubud-bali',
    hotelRationale:
      "Capella Ubud is the Bali tent-villa experience at its best. Each villa is a luxury tent on a private rice-paddy terrace with a plunge pool. The kitchen-of-the-earth restaurant serves Balinese-meets-international tasting menus. The property's location in the Keliki Valley is rural enough to feel like a retreat while being 20 minutes from central Ubud. For the Uluwatu second stop, Bulgari Uluwatu's cliffside villas with private infinity pools and direct beach access are the iconic cliff-villa-with-view experience.",
    days: [
      { morning: 'Arrive Denpasar early morning. 60-minute drive north to Ubud (book the resort\'s car).', afternoon: 'Check in to Capella Ubud. Long lunch. Pool afternoon.', evening: 'Welcome dinner at the property restaurant. Bed early.', restaurants: 'Capella restaurant' },
      { morning: 'Yoga at sunrise (optional but worth doing). Breakfast in the tent villa.', afternoon: 'Ubud town day — Sacred Monkey Forest, the Royal Palace, the central market. Lunch at Locavore (book months ahead) or Mozaic.', evening: 'Dinner back at Capella.', restaurants: 'Locavore (lunch), Capella (dinner)' },
      { morning: 'Tirta Empul water temple ceremony at dawn (the resort organizes — a Balinese purification ritual). Breakfast back at the villa.', afternoon: 'Massage at the spa. Late lunch.', evening: 'Romantic in-villa dinner.', restaurants: 'In-villa dining' },
      { morning: 'Slow morning. Drive 90 minutes south to Uluwatu (1.5 hours through traffic; book the resort car). Lunch en route.', afternoon: 'Check in to Bulgari Uluwatu. Cliff pool. Lagoon swim from the private beach access.', evening: 'Dinner at Il Ristorante (the Italian restaurant — Bulgari does this well).', restaurants: 'Il Ristorante (Bulgari)' },
      { morning: 'Slow breakfast in the villa.', afternoon: 'Beach day at the property\'s private beach. Lunch at the beach club.', evening: 'Sunset at Single Fin (a 15-minute drive to the famous surf-side cliff bar). Dinner at Single Fin or back at the resort.', restaurants: 'Single Fin (sunset)' },
      { morning: 'Yoga or hotel breakfast.', afternoon: 'Uluwatu Temple visit at sunset (book the Kecak fire dance — book through hotel, 2-hour cultural performance with the cliff in the background).', evening: 'Late dinner at Bulgari or at Cuca (Jimbaran).', restaurants: 'Cuca (Jimbaran)' },
      { morning: 'Slow last morning. Pack.', afternoon: 'Transfer to Denpasar airport (60 minutes).', evening: 'International flight home.', restaurants: '—' },
    ],
    splurge: 'Tirta Empul water temple ceremony (day 3) — $200–400 per couple, arranged through the resort. The Balinese purification ritual is uniquely Balinese and authentic; the experience itself is private and ceremonial. More memorable than another spa day at the same cost.',
    sleepInDay: 7,
    costEstimate: '3 nights at Capella Ubud: $1,200/night = $3,600. 4 nights at Bulgari Uluwatu: $1,500/night = $6,000. Inter-property car transfer: $200. Flights from US East Coast via Hong Kong or Singapore: $2,000–3,000. Extras (Locavore, Tirta Empul, Single Fin, Kecak dance, spa): $2,000. Total all-in for two: $13,800–14,800.',
    closing:
      'The Bali two-stop works because the contrast is the entire experience — Ubud is movement, Uluwatu is decompression. The couples who do this poorly try to fit a third stop (Seminyak, Canggu, the Gilis) into 7 nights and end up with a fragmented trip. The discipline is Ubud first, Uluwatu second, and nothing else.',
    faqs: [
      { question: 'Can we skip the Ubud half?', answer: 'You can — but you\'ll miss the cultural depth that makes a Bali honeymoon different from a generic beach honeymoon. The Uluwatu beach experience exists in many parts of Southeast Asia; the Ubud spiritual + rice-paddy experience is uniquely Balinese.' },
      { question: 'Best month for Bali?', answer: 'May–September is the dry season; June–August is the absolute peak. April and October are shoulder months with occasional showers but excellent value.' },
      { question: 'What about food?', answer: "Bali's food scene is one of Southeast Asia's strongest. Locavore in Ubud is internationally renowned; Cuca in Jimbaran is one of the best in Asia; in-resort dining at Capella and Bulgari is excellent. Don't miss at least one off-resort dinner." },
      { question: 'Should we drive ourselves between properties?', answer: 'No — book the resort transfer ($150–300). Balinese traffic is unpredictable, parking is difficult, and the cost difference versus self-drive (rental + insurance + stress) is minimal. The resort driver is the right call.' },
    ],
  },

  santorini: {
    intro:
      "Santorini's 7-night honeymoon is the iconic Greek cliffside experience. The cave-suite-with-caldera-view is unique in the world, the Oia sunset is the iconic Greek photo, and the rhythm of late breakfasts → afternoon Aperol → sunset dinner is the format the destination rewards. The itinerary below is built around an Oia cave suite (Andronis Luxury Suites or Canaves Oia) — the entire experience is designed around this single accommodation choice.",
    hotelSlug: 'andronis-luxury-suites-santorini',
    hotelRationale:
      "Andronis Luxury Suites is the prototypical Oia cave-suite honeymoon. 22 white-and-blue cave suites carved into the Oia cliffside, each with a private terrace overlooking the caldera. Some have private hot tubs or plunge pools. The Lycabettus restaurant is among the best on the island. The property delivers exactly what couples imagine when they think Santorini honeymoon — and Oia specifically is the right village for the iconic sunset.",
    days: [
      { morning: 'Arrive Athens; connect to Santorini (50 minutes by air or 5–8 hours by ferry). Book the resort transfer to Oia.', afternoon: 'Check in. Walk through Oia village (pedestrian-only, blue-domed churches, white houses).', evening: 'Sunset at the Castle of Oia — the iconic Greek sunset. Dinner at Lycabettus or at a quieter cliffside restaurant.', restaurants: 'Lycabettus' },
      { morning: 'Late breakfast on the terrace. Pool morning.', afternoon: 'Caldera catamaran cruise (book through the hotel, 5-hour trip): swim at Red Beach, snorkel at the hot springs, lunch on board.', evening: 'Dinner at Charkoal Yakiniku (Japanese-Greek fusion in Imerovigli) or at Selene.', restaurants: 'Charkoal Yakiniku' },
      { morning: 'Slow morning at the suite. Late breakfast.', afternoon: 'Walk from Oia to Fira (10km along the caldera edge — the iconic Santorini hike). Lunch in Imerovigli at Anogi.', evening: 'Sunset back at the hotel terrace (private moment versus the crowded Oia sunset).', restaurants: 'Anogi (lunch)' },
      { morning: 'Sleep-in day. Brunch in the suite.', afternoon: 'Spa double-treatment at the hotel.', evening: 'Quiet dinner at the in-suite terrace.', restaurants: 'In-suite dining' },
      { morning: 'Wine tour day — book through the hotel. Santorini Wines, Estate Argyros, Venetsanos Winery. Lunch at one of the winery restaurants.', afternoon: 'Return to the hotel. Pool afternoon.', evening: 'Dinner at Selene (the island\'s most-awarded restaurant) or Lauda (also Michelin).', restaurants: 'Selene or Lauda' },
      { morning: 'Beach day — drive to Vlychada or Perissa (black-sand beaches on the south side, an hour from Oia).', afternoon: 'Lunch at the beach. Return to Oia.', evening: 'Final dinner at Lycabettus or back at the resort.', restaurants: 'Lycabettus' },
      { morning: 'Slow morning. Last terrace breakfast.', afternoon: 'Transfer to airport.', evening: 'Flight via Athens home.', restaurants: '—' },
    ],
    splurge: 'Caldera catamaran cruise (day 2) — $300–500 per couple. A 5-hour private or shared catamaran trip with caldera swims, hot springs, and lunch on board. The single best activity on Santorini that gets you off the cliff and into the water.',
    sleepInDay: 4,
    costEstimate: '7 nights at Andronis Luxury Suites: $900–1,500/night = $6,300–10,500. Flights from US East Coast via Athens: $1,500–2,500. Inter-island transfers (Athens-Santorini and back): $400. Extras (catamaran, wine tour, signature dinners, spa): $2,000. Total all-in for two: $10,200–15,400.',
    closing:
      "Santorini rewards committing to Oia and a great cave suite — the entire honeymoon is about this single accommodation choice and the rhythm it enables. The couples who hop between cliffside villages end up with a fragmented trip; the couples who settle in one Oia suite for 7 nights come home with the iconic Greek honeymoon.",
    faqs: [
      { question: "Should we stay in Oia or Fira?", answer: 'Oia, for honeymoons. It\'s quieter, more photogenic, and the cave-suite inventory is concentrated there. Fira is the lively-village option; Imerovigli is the third option (between Oia and Fira, often quieter than both).' },
      { question: "Is the sunset worth the crowd?", answer: 'Once. Watch the actual Castle-of-Oia sunset once for the cultural moment, then take the rest of the sunsets from your private terrace, which has a comparable view without the 200-person crowd.' },
      { question: 'Best month for Santorini?', answer: "May, late September, and early October are the sweet spots — water warm enough to swim, restaurants open, August crowds and prices missing. Mid-August is the destination's most-crowded moment." },
      { question: 'What about Mykonos as an add-on?', answer: 'Possible as a 3+4 split (3 Santorini + 4 Mykonos or vice versa). The contrast is the point — Santorini for cliffside romance, Mykonos for beach energy. Most couples choose one or the other for a 7-night trip; combine for 10+ nights.' },
    ],
  },

  'st-lucia': {
    intro:
      "St. Lucia's 7-night honeymoon is the iconic Caribbean experience with cliffside romance — Jade Mountain's open-fourth-wall sanctuary rooms with direct Pitons view, the catamaran day along the west coast, the Sulphur Springs hot pools, and a Petit Piton hike for the active honeymoon couple. The itinerary below is built around Jade Mountain but transfers to Sugar Beach or Anse Chastanet.",
    hotelSlug: 'jade-mountain-st-lucia',
    hotelRationale:
      "Jade Mountain is unique in the Caribbean — 29 'sanctuary' rooms with three walls and an open fourth wall opening onto the Pitons view, each with a private infinity pool. The property does not have TVs or phones in rooms (intentional); the experience is the room and the view. The Jade Mountain Club restaurant is excellent; the property's beach access (a 5-minute walk down to Anse Chastanet beach) means you have both cliffside and beach experiences from one accommodation.",
    days: [
      { morning: 'Arrive UVF (Hewanorra airport, south side of the island). 60-minute drive north to Soufrière.', afternoon: 'Check in to Jade Mountain. Pool. Pitons view from the sanctuary.', evening: 'Welcome dinner at Jade Mountain Club. Champagne. Sleep early.', restaurants: 'Jade Mountain Club' },
      { morning: 'Slow morning. Breakfast in the sanctuary.', afternoon: 'Anse Chastanet beach afternoon — walk down (5 mins), snorkel from the beach (one of the best house reefs in the Caribbean).', evening: 'Dinner at Jade Mountain Club.', restaurants: 'Jade Mountain Club' },
      { morning: 'Sulphur Springs morning — the world\'s only drive-in volcano. Mud bath and hot pools at the natural springs.', afternoon: 'Lunch at Boucan (Hotel Chocolat\'s restaurant — chocolate-themed but excellent regional food).', evening: 'Dinner back at Jade Mountain.', restaurants: 'Boucan (lunch)' },
      { morning: 'Slow morning. Late breakfast in the sanctuary.', afternoon: 'Spa double-treatment at the Kai en Ciel spa.', evening: 'Quiet in-room dinner.', restaurants: 'In-room dining' },
      { morning: 'Petit Piton hike (the smaller of the two Pitons, 2,438 feet, ~3-hour round trip with a guide) — this is the active honeymoon day.', afternoon: 'Lunch at Boucan or back at the property.', evening: 'Sunset Champagne from the sanctuary. Light dinner.', restaurants: 'In-property casual dinner' },
      { morning: 'Catamaran cruise day — book through the hotel, 5–6 hours along the west coast, snorkeling at Anse Cochon, lunch on board.', afternoon: 'Return to Soufrière harbor. Brief downtime at the property.', evening: 'Final dinner at Jade Mountain Club.', restaurants: 'Jade Mountain Club' },
      { morning: 'Slow morning. Last sanctuary breakfast with the Pitons view.', afternoon: 'Transfer to UVF (60 minutes).', evening: 'Flight home.', restaurants: '—' },
    ],
    splurge: 'Petit Piton hike (day 5) — $200–300 per couple with guide. Not for non-hikers, but for active couples this is the trip-defining experience — the view from the top with St. Lucia laid out below is unrivaled.',
    sleepInDay: 4,
    costEstimate: '7 nights at Jade Mountain: $1,200–2,500/night = $8,400–17,500 (sanctuary level matters). Flights from US East Coast: $800–1,400 (often direct from JFK/MIA). Extras (catamaran, Sulphur Springs, Boucan dinners, spa, Petit Piton): $1,800. Total all-in for two: $11,000–20,700.',
    closing:
      'St. Lucia is the Caribbean honeymoon that gives you both the cliffside romance and active variety. The Pitons in your photos, the snorkel reef at your beach, the volcano drive-through, the catamaran day. Few Caribbean islands deliver this much in 7 nights.',
    faqs: [
      { question: 'Is Jade Mountain too unusual (open fourth wall, no TV)?', answer: "For most honeymoon couples, the open-fourth-wall sanctuary is the entire reason to go to Jade Mountain. The lack of TV is intentional and works once you adjust. If you specifically want a more conventional luxury experience, Sugar Beach or Anse Chastanet's beach villas are alternatives." },
      { question: 'Best month for St. Lucia?', answer: 'January through April is peak conditions. November–December are good with lower crowds. Skip August–October (hurricane season, humidity, less reliable weather).' },
      { question: 'Can we do the Pitons hike without much fitness?', answer: 'Petit Piton (the smaller one) is doable for moderately fit hikers; Gros Piton (the larger) is for serious hikers only. Both require guides. If neither appeals, the Sulphur Springs and a catamaran day cover the active programming.' },
      { question: 'What about all-inclusive at Sandals?', answer: 'Sandals Grande St. Lucian and Sandals Halcyon Beach are the AI alternative; both are excellent at the AI tier but very different vibe (resort-bubble vs Jade Mountain\'s sanctuary). For honeymoons specifically, the Jade Mountain or Sugar Beach experience is what couples come to St. Lucia for.' },
    ],
  },

  'turks-and-caicos': {
    intro:
      "Turks & Caicos's 7-night honeymoon is the smartest US East Coast Caribbean trip. Direct flights from JFK, MIA, ATL. Grace Bay's water is consistently rated among the world's best. The rhythm is simpler than the more dramatic destinations — beach mornings, lunch on the sand, spa afternoons, beachside dinners — but the simplicity is the point. The itinerary below is built around Amanyara (the secluded northwest-coast option) or COMO Parrot Cay.",
    hotelSlug: 'amanyara-turks-caicos',
    hotelRationale:
      "Amanyara on the secluded northwest coast of Providenciales is the right Turks & Caicos honeymoon property for couples who want privacy. 40 pavilions and villas spread along a private beach inside a 18,000-acre nature reserve. No motorized water sports allowed in the bay. Each pavilion has a private courtyard pool. The contrast with the busier Grace Bay properties (Grace Bay Club, Beach House) is the entire reason to pick Amanyara.",
    days: [
      { morning: 'Arrive Providenciales (PLS) — direct from JFK is 3.5 hours. 30-minute drive to Amanyara.', afternoon: 'Check in. Pavilion pool. Sunset beach walk.', evening: 'Welcome dinner at the Beach Club. Bed early.', restaurants: 'Beach Club' },
      { morning: 'Slow breakfast at the Beach Club. Beach morning.', afternoon: 'Pool afternoon (or beach). Lunch at the casual restaurant.', evening: 'Dinner at the main restaurant.', restaurants: 'Amanyara main restaurant' },
      { morning: 'Snorkel safari from the beach (the property\'s reef is one of the best in T&C). Breakfast on the sand.', afternoon: 'Lunch at the property. Spa afternoon.', evening: 'Sunset cocktails. Quiet dinner.', restaurants: 'In-pavilion dining' },
      { morning: 'Sleep-in day. Late breakfast.', afternoon: 'Day excursion to Iguana Island and Half Moon Bay — book through the hotel, 4-hour catamaran trip.', evening: 'Dinner back at the property.', restaurants: 'Beach Club' },
      { morning: 'Slow morning. Yoga (offered daily) and breakfast.', afternoon: 'Bike along the property\'s nature reserve trails. Lunch.', evening: 'Sunset Champagne on the beach. Casual dinner.', restaurants: 'Beach Club' },
      { morning: 'Beach morning. Coffee on the deck.', afternoon: 'Drive to Grace Bay (40 minutes) — lunch at Coco Bistro (the island\'s iconic restaurant). Walk Grace Bay beach.', evening: 'Drive back. Final dinner at Amanyara\'s signature restaurant.', restaurants: 'Coco Bistro (lunch)' },
      { morning: 'Last beach morning. Pack.', afternoon: 'Transfer to PLS.', evening: 'Direct flight home.', restaurants: '—' },
    ],
    splurge: 'Iguana Island + Half Moon Bay catamaran (day 4) — $400–600 per couple. The half-day excursion to the protected iguana sanctuary and the sandbar at Half Moon Bay is the trip\'s signature off-property moment.',
    sleepInDay: 4,
    costEstimate: '7 nights at Amanyara: $1,500–2,500/night = $10,500–17,500. Flights from US East Coast: $400–700 (direct). Extras (catamaran, Coco Bistro, spa): $1,500. Total all-in for two: $12,400–19,700.',
    closing:
      "Turks & Caicos rewards committing to the format — direct flight, single property, slow rhythm. The couples who try to over-program (4 different excursions in 7 days) come home tired. The couples who lean into the beach-spa-beach rhythm come home rested.",
    faqs: [
      { question: 'Why Amanyara over Grace Bay Club?', answer: "Amanyara for privacy; Grace Bay Club for activity. Amanyara is on the secluded northwest coast inside a nature reserve; Grace Bay Club is in the center of the action with restaurants and beach bars within walking distance. For honeymoons specifically, Amanyara wins on privacy and intimacy." },
      { question: 'Is Turks & Caicos worth the cost vs cheaper Caribbean?', answer: 'For US East Coast couples specifically — yes. The direct flight (3.5h from NYC), the consistent water quality, and the absence of mass-tourism trade-offs (cruise ships, all-inclusive bus loads) make T&C the smartest US-friendly Caribbean luxury.' },
      { question: 'Best month?', answer: 'January through April. Late November/early December for value. Skip August–October.' },
      { question: 'What about hurricanes?', answer: 'T&C is in the Caribbean hurricane belt — September is the highest-risk month. Honeymoons booked outside June–November are largely insulated. Booking with refundable rates is sensible for any Caribbean trip.' },
    ],
  },

  mauritius: {
    intro:
      "Mauritius's 7-night honeymoon is the Indian Ocean experience at a friendlier price than the Maldives, with more cultural texture (Creole + Indian + French heritage) and the advantage of being a single large island where you can stay at one property and explore. The itinerary below is built around Constance Le Prince Maurice — the property that delivers the most honeymoon-aligned experience on the island.",
    hotelSlug: 'constance-prince-maurice-mauritius',
    hotelRationale:
      "Constance Le Prince Maurice on the northeast coast is one of the most consistent honeymoon properties in the Indian Ocean. 89 villas, half on a private lagoon-front, half on stilts over the fish reserve. The property has both beach pool villas and overwater villas (cheaper than Maldives equivalents). The food culture across three restaurants is exceptional — and the property feels intimate (small footprint, lots of palm shade) without being claustrophobic.",
    days: [
      { morning: 'Arrive MRU. 90-minute drive to the resort.', afternoon: 'Check in. Pool. Lagoon swim.', evening: 'Welcome dinner at Le Barachois (the on-water restaurant). Bed early.', restaurants: 'Le Barachois' },
      { morning: 'Late breakfast. Beach morning.', afternoon: 'Pool afternoon. Late lunch at the property.', evening: 'Dinner at L\'Archipel (signature dining).', restaurants: 'L\'Archipel' },
      { morning: 'Île aux Cerfs excursion — half-day boat trip to the largest tropical reef island off Mauritius.', afternoon: 'Return to the resort. Quiet afternoon.', evening: 'Dinner at the in-villa terrace.', restaurants: 'In-villa dining' },
      { morning: 'Sleep-in day. Late breakfast in the villa.', afternoon: 'Spa double-treatment at the U Spa.', evening: 'Quiet dinner at Laguna Restaurant.', restaurants: 'Laguna Restaurant' },
      { morning: 'Day trip to Chamarel and Black River Gorges — the seven coloured earths, the waterfall, and a rum distillery for lunch.', afternoon: 'Return to the resort. Beach.', evening: 'Final big dinner at L\'Archipel.', restaurants: 'L\'Archipel' },
      { morning: 'Beach morning. Late breakfast.', afternoon: 'Snorkel in the marine reserve. Lunch.', evening: 'Sunset Champagne on the beach. Casual dinner.', restaurants: 'Beach BBQ' },
      { morning: 'Slow morning. Pack.', afternoon: 'Transfer to MRU.', evening: 'International flight home.', restaurants: '—' },
    ],
    splurge: 'Chamarel and Black River Gorges day trip (day 5) — $300–500 per couple with private driver. The geological and cultural variety on Mauritius makes it worth getting off the resort for one full day.',
    sleepInDay: 4,
    costEstimate: '7 nights at Constance Le Prince Maurice: $600–1,200/night = $4,200–8,400. Flights from London: $800–1,500 (direct). Flights from US: $1,500–2,500. Extras (Île aux Cerfs, Chamarel, spa, signature dinners): $1,500. Total all-in for two: $7,500–12,400.',
    closing:
      'Mauritius is the Indian Ocean honeymoon that rewards staying in one place and exploring the variety. The single-island geography means you can have beach mornings and cultural-day-trips without inter-island transit. For couples who want the Maldives-style experience without the Maldives cost or the cultural isolation, Mauritius is the answer.',
    faqs: [
      { question: 'Mauritius vs Maldives?', answer: "Mauritius is cheaper, has more cultural texture, and you can explore beyond the resort. Maldives is more iconic, more dramatic, more overwater-villa-pure. For most couples wanting the Indian Ocean honeymoon at moderate cost, Mauritius is the smarter pick." },
      { question: 'Best month?', answer: "May through October is the dry winter season — slightly cooler temperatures, less humidity, ideal honeymoon conditions. December is the high-season peak with school holidays." },
      { question: 'Is Constance Le Prince Maurice better than Royal Palm Beachcomber?', answer: 'Different. Constance has the overwater villas and the intimacy; Royal Palm has the grand-hotel pedigree and is closer to Port Louis. For honeymoons specifically with overwater interest, Constance.' },
      { question: 'Can we add Reunion or Madagascar?', answer: 'Possible for 14+ day trips. Reunion is 45 minutes by flight; the volcanic landscape and active hiking are a real counterpoint to Mauritius beach. Most couples stay in Mauritius for a 7-night honeymoon.' },
    ],
  },

  seychelles: {
    intro:
      "Seychelles's 7-night honeymoon is the Indian Ocean splurge — granite-boulder beaches, jungle backdrops, and the most photogenic-iconic Indian Ocean experience available. The itinerary below is built around North Island (the ultra-luxury private island) for couples with the budget, or Six Senses Zil Pasyon as the more accessible-luxury alternative.",
    hotelSlug: 'constance-lemuria-praslin-seychelles-seychelles',
    hotelRationale:
      "For couples wanting accessible Seychelles luxury, Constance Lemuria on Praslin is the right anchor. 105 suites and villas on a 3-beach property including Anse Georgette (frequently rated among the world's top beaches). The property has the 18-hole championship golf course (the only one in Seychelles), three restaurants, and direct beach access. At $700–1,500/night it's the friendly tier of Seychelles luxury — North Island and Fregate are the splurge tier at $4,000+/night.",
    days: [
      { morning: 'Arrive Mahé. 15-minute helicopter or 90-minute ferry to Praslin.', afternoon: 'Check in to Constance Lemuria. Beach. Pool.', evening: 'Welcome dinner at Le Diva (the property\'s signature restaurant).', restaurants: 'Le Diva' },
      { morning: 'Vallée de Mai morning — the UNESCO-protected primaeval forest on Praslin (home of the coco de mer palm). 2-hour walking visit.', afternoon: 'Return to the property. Lunch. Pool afternoon.', evening: 'Dinner at The Nest (Asian fusion).', restaurants: 'The Nest' },
      { morning: 'La Digue day trip — 15-minute ferry, rent bicycles, ride to Anse Source d\'Argent (the most photographed beach in the world).', afternoon: 'Lunch on La Digue at a local restaurant. Beach time.', evening: 'Return ferry. Dinner back at Constance Lemuria.', restaurants: 'La Digue local (lunch), Le Diva (dinner)' },
      { morning: 'Sleep-in day. Late breakfast.', afternoon: 'Spa double-treatment at the U Spa.', evening: 'Quiet in-villa dinner.', restaurants: 'In-villa dining' },
      { morning: 'Anse Georgette beach morning — the property\'s private beach is one of the world\'s top-rated.', afternoon: 'Pool afternoon. Lunch.', evening: 'Sunset cocktails. Casual dinner.', restaurants: 'Beach BBQ' },
      { morning: 'Snorkel excursion to St. Pierre or Curieuse Island (book through hotel) — protected marine reserves with extraordinary visibility.', afternoon: 'Return to the resort. Quiet afternoon.', evening: 'Final big dinner at Le Diva.', restaurants: 'Le Diva' },
      { morning: 'Slow morning. Pack.', afternoon: 'Helicopter or ferry back to Mahé. International flight.', evening: 'In transit.', restaurants: '—' },
    ],
    splurge: 'La Digue day trip (day 3) including Anse Source d\'Argent — the bicycle ride to one of the world\'s most photographed beaches is the iconic Seychelles experience and the trip\'s photo-defining moment.',
    sleepInDay: 4,
    costEstimate: '7 nights at Constance Lemuria: $700–1,500/night = $4,900–10,500. Helicopter transfer Mahé-Praslin: $700–1,000. Flights from Europe: $1,500–2,500. Flights from US: $2,500–3,500. Extras (Vallée de Mai, La Digue, snorkel excursion, spa): $1,500. Total all-in for two: $10,600–17,000.',
    closing:
      "Seychelles rewards the couples who balance dramatic photography (granite beaches) with thoughtful exploration (Vallée de Mai, La Digue). The honeymoon that just stays at the resort misses the geological uniqueness of the destination. The honeymoon that runs around three islands misses the rest.",
    faqs: [
      { question: 'Should we splurge on North Island instead?', answer: 'If the budget reaches $4–5k/night per villa — yes, North Island is the iconic Seychelles splurge. 11 villas total on the entire island. For most couples, Constance Lemuria at 1/4 the cost delivers an excellent Seychelles experience.' },
      { question: 'Best month?', answer: "April–May and October–November are the shoulder windows with calmer seas. June–September is the dry season but with stronger trade winds (some find too windy). December–March is the wetter monsoon season." },
      { question: 'Is the helicopter transfer necessary?', answer: "For Praslin, no — the 15-minute ferry from Mahé is fine and dramatically cheaper. For Denis Island, Bird Island, North Island — yes, helicopter is the only practical access." },
      { question: 'Can we do Seychelles in 5 nights?', answer: "Yes, but tight. The transfer logistics (Mahé arrival, internal transit) eat enough time that 7 nights at a single property is the right honeymoon length. 10 nights lets you do two properties (Mahé arrival + Praslin or North Island main stay)." },
    ],
  },

  mexico: {
    intro:
      "Mexico's 7-night honeymoon — specifically the Riviera Maya — is the smartest US-friendly Caribbean trip. Direct flights from every major US city, the strongest adults-only AI inventory in the Americas, cenote day excursions, and Tulum's ruins for cultural texture. The itinerary below is built around Belmond Maroma — the property that delivers the best honeymoon experience in the Riviera Maya at moderate luxury cost.",
    hotelSlug: 'belmond-maroma-resort-mexico',
    hotelRationale:
      "Belmond Maroma on the Riviera Maya is a confident luxury beach resort — 72 rooms and suites on a private beach considered one of the world's top 10 by various rankings. Spa is excellent (the property has a dedicated Mayan ritual program). Restaurants are above the Riviera Maya average. Adults-only ambiance even though the property accepts children — the small size and quiet beachfront layout means it never feels like a family resort. At $700–1,400/night, it's the smart entry to Riviera Maya luxury.",
    days: [
      { morning: 'Arrive Cancun (CUN). 45-minute drive south to Maroma.', afternoon: 'Check in. Beach. Pool.', evening: 'Dinner at El Restaurante (the Mexican fine-dining option). Sleep early.', restaurants: 'El Restaurante' },
      { morning: 'Late breakfast at the beach. Pool morning.', afternoon: 'Lunch at the beach. Spa afternoon (the Mayan-inspired temazcal ritual is the signature spa experience).', evening: 'Dinner at Casa Maroma (international).', restaurants: 'Casa Maroma' },
      { morning: 'Cenote morning — visit Gran Cenote or Cenote Dos Ojos (the resort arranges a guide and transfer). Swim in the underground freshwater pool.', afternoon: 'Lunch in Tulum at Hartwood or Arca.', evening: 'Tulum ruins at sunset. Dinner back at the property or stay in Tulum.', restaurants: 'Hartwood (lunch)' },
      { morning: 'Sleep-in day. Late breakfast in the room.', afternoon: 'Spa double-treatment.', evening: 'In-room dinner on the terrace.', restaurants: 'In-room dining' },
      { morning: 'Snorkel at the property\'s house reef. Late breakfast.', afternoon: 'Catamaran cruise along the Riviera Maya — book through the hotel, 4-hour sail with snorkel stops.', evening: 'Sunset cocktails. Casual dinner.', restaurants: 'Beach grill' },
      { morning: 'Chichén Itzá day trip — 2.5-hour drive each way (book the early-morning transport to avoid the heat). Visit the ruins. Lunch in Valladolid en route back.', afternoon: 'Return to the property. Pool.', evening: 'Final big dinner at El Restaurante.', restaurants: 'El Restaurante' },
      { morning: 'Slow last morning. Pack.', afternoon: 'Transfer to CUN.', evening: 'Flight home.', restaurants: '—' },
    ],
    splurge: 'Chichén Itzá day trip (day 6) with private driver and guide — $250–400 per couple. Long day but the cultural depth of the experience justifies the trip. The Mayan ruins are one of the New Seven Wonders, and the private-guide version (versus tour bus) is dramatically better.',
    sleepInDay: 4,
    costEstimate: '7 nights at Belmond Maroma: $700–1,400/night = $4,900–9,800. Flights from US East Coast: $400–700 (direct from NYC, ATL, MIA). Extras (cenote tour, Chichén Itzá, catamaran, spa): $1,500. Total all-in for two: $6,800–12,000.',
    closing:
      "Riviera Maya rewards the couples who balance beach time with cultural day-trips. The honeymoon that just sits at Maroma for 7 nights misses the Mayan depth that makes Mexico different from generic Caribbean. The honeymoon that does Chichén Itzá and a cenote tour and Tulum ruins comes home with both rest and texture.",
    faqs: [
      { question: 'Belmond Maroma or Rosewood Mayakoba?', answer: 'Both excellent. Maroma is beachfront-direct with a smaller, more intimate footprint; Rosewood Mayakoba is set inside a mangrove with lagoon villas and gondola transport (the gondola is a unique feature). For pure beach honeymoon, Maroma. For unique-property honeymoon, Mayakoba.' },
      { question: 'Best month?', answer: 'November through April — dry, low humidity. December–February are peak conditions. August–October is hurricane shoulder.' },
      { question: 'Is the Chichén Itzá trip worth the long day?', answer: 'For most couples — yes. The site is genuinely one of the world\'s great archaeological wonders, and visiting it is a meaningful counterpoint to the beach honeymoon. The drive is long (2.5h each way) but the cultural experience pays back.' },
      { question: 'What about an all-inclusive instead?', answer: 'Excellence Riviera Cancun, Le Blanc Cancun, and Excellence Punta Cana (in DR but similar tier) are the AI alternatives. For couples specifically wanting AI ease, those work; for couples wanting more dining variety and the off-resort experiences, Maroma is the better pick.' },
    ],
  },

  jamaica: {
    intro:
      "Jamaica's 7-night honeymoon is the smartest all-inclusive Caribbean trip — the deepest AI inventory in the region (Sandals, Couples, Half Moon, Round Hill), direct flights from every US city, and a real off-resort food and music culture if you want texture. The itinerary below is built around Sandals Royal Plantation (Ocho Rios) — the most honeymoon-aligned of the Sandals roster.",
    hotelSlug: 'sandals-royal-plantation-jamaica',
    hotelRationale:
      "Sandals Royal Plantation in Ocho Rios is the most refined of the Sandals all-inclusive properties. 74 suites only (small for Sandals), adults-only, and the only Sandals property with a true Champagne service. Beachfront, with butler service in higher tiers. The all-inclusive includes premium liquor, all dining (5 restaurants), water sports, and one Sandals partner-resort visit (you can use other Sandals Jamaica properties' beaches and restaurants).",
    days: [
      { morning: 'Arrive Montego Bay (MBJ). 90-minute drive to Ocho Rios.', afternoon: 'Check in. Beach. Pool.', evening: 'Welcome dinner at The Royal Grille (the property\'s steak house). Champagne welcome.', restaurants: 'The Royal Grille' },
      { morning: 'Late breakfast at La Terrasse. Beach morning.', afternoon: 'Spa afternoon (the Red Lane Spa).', evening: 'Dinner at Le Papillon (French fine-dining).', restaurants: 'Le Papillon' },
      { morning: 'Dunn\'s River Falls morning — the iconic Jamaican waterfall climb (book through hotel transport). 2-hour experience.', afternoon: 'Lunch back at the resort. Pool.', evening: 'Dinner at Tea Terrace.', restaurants: 'Tea Terrace' },
      { morning: 'Sleep-in day. Late breakfast.', afternoon: 'Spa double-treatment.', evening: 'In-suite dinner (butler service).', restaurants: 'In-suite dining' },
      { morning: 'Blue Hole day trip — the lesser-known but more dramatic Jamaican waterfall and swimming hole (an hour from Ocho Rios). Better than Dunn\'s for adventure couples.', afternoon: 'Lunch en route. Return to the resort.', evening: 'Sunset cocktails. Casual dinner.', restaurants: 'Beach BBQ' },
      { morning: 'Snorkel at the property\'s house reef. Late breakfast.', afternoon: 'Catamaran cruise (book through the hotel) — 3-hour sunset cruise with Champagne.', evening: 'Final big dinner at Le Papillon.', restaurants: 'Le Papillon' },
      { morning: 'Slow last morning. Pack.', afternoon: 'Transfer to MBJ.', evening: 'Flight home.', restaurants: '—' },
    ],
    splurge: 'Blue Hole day trip (day 5) — $200–300 per couple with guide. The off-the-beaten-path waterfall and swimming hole is more dramatic and less crowded than Dunn\'s. The mini-adventure breaks up the all-inclusive rhythm.',
    sleepInDay: 4,
    costEstimate: '7 nights at Sandals Royal Plantation: $500–1,000/night all-inclusive = $3,500–7,000. Flights from US East Coast: $400–700. Extras (Blue Hole, Dunn\'s River, catamaran, spa upgrades): $800. Total all-in for two: $4,700–8,500.',
    closing:
      "Jamaica's all-inclusive format delivers the best dollar-per-honeymoon-quality in the Caribbean. Sandals Royal Plantation specifically is the small-format, refined-luxury version that suits honeymoons more than the larger Sandals properties. The off-resort experiences (Blue Hole, Dunn's River) add texture without disrupting the AI rhythm.",
    faqs: [
      { question: 'Sandals Royal Plantation or Sandals Grande St. Lucian?', answer: "Royal Plantation if you want a smaller, more refined all-inclusive (74 suites, adults-only, butler service). Grande St. Lucian if you want a larger Sandals with more variety. For honeymoons specifically, the smaller property wins on intimacy." },
      { question: 'Best month for Jamaica?', answer: 'January through April. November–December for value. Skip August–October.' },
      { question: 'Should we leave the resort?', answer: 'For 2–3 organized excursions, yes — Dunn\'s River, Blue Hole, a catamaran cruise. For independent off-resort exploration, less so. Jamaica off-resort is rewarding but requires local knowledge; hotel-organized trips are the right call.' },
      { question: 'Is all-inclusive worth it?', answer: 'For Jamaica specifically — yes. The Sandals/Couples AI inventory is genuinely strong, and the all-inclusive removes the dinner-cost decision pressure. The dining variety at Royal Plantation (5 restaurants) is enough to avoid menu fatigue.' },
    ],
  },

  fiji: {
    intro:
      "Fiji's 7-night honeymoon is the warm Pacific alternative to Bora Bora — private islands, dramatic ocean views, Fijian hospitality (which is uniquely warm in the global luxury circuit), and the option of overwater villas at lower cost than French Polynesia. The itinerary below is built around Likuliku Lagoon Resort (overwater) or Vomo Island (private island).",
    hotelSlug: 'laucala-island-resort-fiji',
    hotelRationale:
      "Likuliku Lagoon Resort is Fiji's only true overwater villa property — 10 overwater bures and 35 beachfront bures on the western lagoon. Adults-only (16+). The property delivers the Bora Bora-style overwater experience at meaningfully lower cost ($1,000–1,800/night versus $1,800–2,500/night for comparable Bora Bora). The Fijian cultural warmth — including the Sevusevu welcome ceremony — is genuinely different from the polished-Polynesian Bora Bora vibe.",
    days: [
      { morning: 'Arrive Nadi (NAN). 30-minute helicopter or 75-minute boat transfer to Likuliku.', afternoon: 'Check in. Lagoon swim. Pool.', evening: 'Sevusevu welcome ceremony (traditional Fijian kava ceremony). Dinner at Fijiana Restaurant.', restaurants: 'Fijiana Restaurant' },
      { morning: 'Sleep in. Breakfast in the bure.', afternoon: 'Pool morning. Lunch at Tatadra Lounge (casual). Spa afternoon.', evening: 'Dinner at Masimasi (over-water main restaurant).', restaurants: 'Masimasi' },
      { morning: 'Snorkel from the bure deck. Breakfast.', afternoon: 'Cloud 9 day excursion — the world\'s only floating bar in the middle of the Mamanuca lagoon. 4-hour boat trip including lunch on the floating platform.', evening: 'Dinner back at the resort.', restaurants: 'Fijiana Restaurant' },
      { morning: 'Sleep-in day. Late breakfast.', afternoon: 'Spa double-treatment (the Tatadra Spa is overwater).', evening: 'In-bure dinner on the deck.', restaurants: 'In-bure dining' },
      { morning: 'Snorkel safari to Monuriki Island (the Castaway filming location). Boat departs early.', afternoon: 'Return. Beach.', evening: 'Sunset cocktails. Casual dinner.', restaurants: 'Beach grill' },
      { morning: 'Cultural village visit — book through hotel. 2-hour visit to a nearby Fijian village (this is the trip\'s cultural-depth moment).', afternoon: 'Lunch back at the resort. Pool.', evening: 'Final big dinner at Masimasi.', restaurants: 'Masimasi' },
      { morning: 'Slow morning. Last lagoon swim.', afternoon: 'Boat/helicopter back to Nadi.', evening: 'International flight home.', restaurants: '—' },
    ],
    splurge: 'Cloud 9 floating bar excursion (day 3) — $300–500 per couple. The 4-hour floating-platform-in-the-Pacific experience is uniquely Fijian and one of the most photogenic Pacific honeymoon moments.',
    sleepInDay: 4,
    costEstimate: '7 nights at Likuliku Lagoon: $1,000–1,800/night = $7,000–12,600. Helicopter or boat transfer: $400–800. Flights from US West Coast via LAX: $1,500–2,500. Flights from US East Coast: $2,000–3,500. Extras (Cloud 9, Monuriki, cultural village, spa): $1,500. Total all-in for two: $11,000–18,000.',
    closing:
      "Fiji rewards the couples who embrace the cultural warmth — the Sevusevu ceremony, the village visit, the Fijian-Hindu food influences. The honeymoon that treats Fiji as a generic-Pacific destination misses what makes the country specifically rewarding. The honeymoon that engages with the culture comes home with a different kind of memory.",
    faqs: [
      { question: 'Fiji vs Bora Bora?', answer: 'Fiji is cheaper (20–30% at comparable tier), warmer culturally, and less crowded. Bora Bora is more iconic visually (Mount Otemanu) and more polished. For couples wanting the iconic Pacific photo — Bora Bora. For couples wanting the warmer, more grounded experience — Fiji.' },
      { question: 'Best month?', answer: 'May through October (dry season). July and August are peak conditions. May, June, September, October are the smart-pricing windows.' },
      { question: 'How important is the village visit?', answer: 'Genuinely important to the Fiji honeymoon experience. The Fijian cultural texture is part of what makes the destination different from generic Pacific. A 2-hour village visit is the right amount.' },
      { question: 'What about Laucala Island?', answer: 'Laucala is the ultra-luxury Fiji ($4,000+/night) — Steve Jobs honeymooned there. For most couples, Likuliku or Vomo deliver excellent Fiji at 25–35% of Laucala\'s cost.' },
    ],
  },

  amalfi: {
    intro:
      "The Amalfi Coast 7-night honeymoon is the iconic Italian coastal experience — cliffside hotels, lemon-grown-yesterday lunches, Le Sirenuse's Champagne bar, the boat day to Capri. The itinerary below is built around Le Sirenuse Positano — the property that delivers the most-iconic Italian honeymoon and the format the destination has been organized around for 70 years.",
    hotelSlug: 'le-sirenuse-positano-italy',
    hotelRationale:
      "Le Sirenuse Positano is the iconic Amalfi Coast hotel — 50 rooms in a converted 18th-century palazzo, terraced into the Positano cliff above the marina. The pool overlooks the coast and the islands. The Champagne and Oyster Bar (Franco's) is a Positano institution. La Sponda restaurant has held a Michelin star for years. The property is in central Positano (5-minute walk to the marina, Spiaggia Grande beach, and the village streets) but elevated enough for privacy.",
    days: [
      { morning: 'Arrive Naples (NAP). 1.5-hour drive to Positano along the coast.', afternoon: 'Check in. Walk through the Positano village down to Spiaggia Grande. Afternoon Aperol at Franco\'s.', evening: 'Dinner at La Sponda — the famous candle-lit Michelin dinner.', restaurants: 'La Sponda' },
      { morning: 'Slow breakfast on the terrace. Pool morning.', afternoon: 'Walk along the Sentiero degli Dei (Path of the Gods) — the cliffside walking path from Bomerano to Positano, ~3 hours one-way (book a one-way driver to the start).', evening: 'Dinner at Da Adolfo (a 5-minute boat ride to the beach restaurant — book the boat).', restaurants: 'Da Adolfo' },
      { morning: 'Capri day trip — 30-minute boat ride. Walk Anacapri, the Blue Grotto, lunch at Il Riccio.', afternoon: 'Return to Positano. Pool.', evening: 'Dinner at Chez Black (Positano beachfront classic).', restaurants: 'Chez Black' },
      { morning: 'Sleep-in day. Late breakfast on the terrace.', afternoon: 'Spa morning at the hotel. Late lunch at the pool.', evening: 'Quiet dinner at Franco\'s (light bites) or in-room.', restaurants: 'Franco\'s' },
      { morning: 'Drive day along the Amalfi Coast — Amalfi town (the Duomo, Pansa pastry shop), Ravello (Villa Cimbrone gardens, Villa Rufolo), lunch at Cumpà Cosimo in Ravello.', afternoon: 'Return to Positano via the coast road.', evening: 'Dinner back at La Sponda or at Lo Scoglio (drive to Marina del Cantone).', restaurants: 'Lo Scoglio (or La Sponda)' },
      { morning: 'Lemon tour — the local lemon farms above Positano (Sal de Riso\'s lemon farm tour, book through hotel).', afternoon: 'Beach afternoon at Fornillo or Arienzo beach.', evening: 'Final dinner at La Sponda.', restaurants: 'La Sponda' },
      { morning: 'Slow morning. Pack.', afternoon: 'Drive back to Naples airport.', evening: 'Flight home.', restaurants: '—' },
    ],
    splurge: 'Capri day trip (day 3) with lunch at Il Riccio — $400–600 per couple with private boat. Capri in a single intentional day (Anacapri walk, Blue Grotto, Il Riccio cliffside lunch) is one of the iconic Italian honeymoon moments.',
    sleepInDay: 4,
    costEstimate: '7 nights at Le Sirenuse: $1,500–3,500/night = $10,500–24,500 (huge range depending on room category). Flights from US East Coast: $800–1,500. Flights from UK: $200–500. Extras (Capri day, Da Adolfo boat, drives, signature dinners): $2,500. Total all-in for two: $14,000–28,500.',
    closing:
      'The Amalfi Coast rewards committing to the iconic format — Le Sirenuse, Capri day, the cliffside walks, the lemon-and-tomato lunches. The couples who try to compress the coast into 3 nights miss what makes 7 nights here work — the rhythm of slow mornings, long lunches, late dinners, and the gradual sinking-in to the Italian coastal life.',
    faqs: [
      { question: 'Le Sirenuse or Hotel Santa Caterina?', answer: "Both iconic. Le Sirenuse is in Positano (centrally located, more village energy, more famous); Santa Caterina is in Amalfi town (more elevated, more private, classic-grand). For first-time Amalfi, Le Sirenuse. For more privacy, Santa Caterina." },
      { question: 'Best month?', answer: 'May, early June, late September are the sweet spots. July–August is the crush; March–April most hotels closed; October some hotels closing for the season.' },
      { question: 'Should we rent a car?', answer: 'No. The coast road is brutal, parking is impossible, and the hotels arrange transfers. A driver-for-the-day for the Amalfi-to-Ravello loop is the right call. Day-to-day mobility in Positano is on foot or boat.' },
      { question: 'How important is the Capri day?', answer: 'For most honeymoon couples on the Amalfi, the Capri day is essential — it\'s the iconic Italian coastal moment, and Capri is genuinely different from the Amalfi villages. Worth the day trip.' },
    ],
  },

  'lake-como': {
    intro:
      "Lake Como's 7-night honeymoon is the cinematic Italian lake experience — Passalacqua or Tremezzo lakefront, water-taxi-to-Bellagio days, Riva boat afternoons, Villa Carlotta and Villa del Balbianello visits, and the kind of slow Italian rhythm that only this lake delivers at this scale. The itinerary below is built around Passalacqua, with notes on Tremezzo as the alternative.",
    hotelSlug: 'passalacqua-lake-como-italy',
    hotelRationale:
      "Passalacqua is the iconic Italian-lake honeymoon hotel — an 18th-century villa with 24 rooms and suites, perched on the lake at Moltrasio. The De Santis family ownership is hands-on; the food culture is exceptional; the pool overlooks the lake. World's #1 hotel on the World's 50 Best Hotels list in 2023. The combination of intimacy (24 rooms), location (5 minutes by boat from Como city), and pure luxury makes it the prototypical Como honeymoon.",
    days: [
      { morning: 'Arrive Milan (MXP or LIN). 1-hour drive to Moltrasio.', afternoon: 'Check in to Passalacqua. Lake-view pool. Welcome cocktails.', evening: 'Dinner at the Passalacqua main restaurant (one of Como\'s best food experiences).', restaurants: 'Passalacqua restaurant' },
      { morning: 'Slow breakfast on the lake terrace. Pool morning.', afternoon: 'Water taxi to Bellagio (45 minutes by speedboat). Walk the village, lunch at Bilacus.', evening: 'Return to Passalacqua. Quiet dinner.', restaurants: 'Bilacus (lunch), Passalacqua (dinner)' },
      { morning: 'Villa Carlotta morning — the historic villa and gardens, 30 minutes by boat. Lunch in Tremezzo.', afternoon: 'Visit Villa del Balbianello (the Star Wars and Casino Royale filming location, accessible only by boat).', evening: 'Dinner back at Passalacqua.', restaurants: 'Passalacqua' },
      { morning: 'Sleep-in day. Late breakfast.', afternoon: 'Spa morning. Late lunch at the pool.', evening: 'Romantic dinner on the private terrace.', restaurants: 'In-room dining' },
      { morning: 'Riva boat day — book a private Riva runabout for a full-day boat experience around the lake. Stop at Varenna for lunch (Vecchia Varenna).', afternoon: 'Continue boat exploration. Stop at Cernobbio if time.', evening: 'Sunset back at Passalacqua. Dinner at Materia in Cernobbio (Michelin) or back at the hotel.', restaurants: 'Materia or Passalacqua' },
      { morning: 'Como city morning — drive 10 minutes to the city of Como. Walk the cathedral, lunch at L\'Antica Trattoria.', afternoon: 'Return to Passalacqua. Pool.', evening: 'Final big dinner at Passalacqua.', restaurants: 'L\'Antica Trattoria (lunch), Passalacqua (dinner)' },
      { morning: 'Slow morning. Pack.', afternoon: 'Drive to Milan airport.', evening: 'Flight home.', restaurants: '—' },
    ],
    splurge: 'Private Riva boat day (day 5) — $1,500–2,500 per couple for a full-day private runabout with captain. The full-lake-by-Riva experience is the iconic Como moment and the one that gets photographed.',
    sleepInDay: 4,
    costEstimate: '7 nights at Passalacqua: $1,500–3,500/night = $10,500–24,500. Flights from US East Coast: $700–1,400. Flights from UK: $200–400. Extras (Riva day, Villa Carlotta, Materia, signature meals): $3,500. Total all-in for two: $14,700–29,400.',
    closing:
      "Lake Como rewards the couples who lean into the cinematic format — water taxis to villages, Riva boats on the lake, Passalacqua's lakefront pool. The honeymoon that treats Como as a stop-off in Italy misses what 7 nights at one extraordinary lake property delivers — the slow Italian coastal-lake rhythm that no other destination quite duplicates.",
    faqs: [
      { question: 'Passalacqua or Tremezzo?', answer: "Both world-class. Passalacqua is smaller (24 rooms), more intimate, more food-focused. Tremezzo is larger, with more facilities (multiple pools, beach club, more restaurants). For honeymoons specifically, Passalacqua wins on intimacy; Tremezzo wins on amenity breadth." },
      { question: 'Best month?', answer: "May, early June, September are the sweet spots. July–August is hot and crowded but everything is open. October is closing season — some hotels close in early November." },
      { question: 'Do we need a car?', answer: "No. Boat is the right way to move around Como — water taxis between villages, hotel boat services, private Riva days. A car is useful only for arrivals/departures and the trip to/from Milan." },
      { question: 'How important is the Riva day?', answer: 'For couples on a Como honeymoon, very important — it\'s the iconic Italian-lake-by-boat experience. Even at $1,500–2,500, it\'s the trip-defining moment and the most-photographed day.' },
    ],
  },

  tuscany: {
    intro:
      "Tuscany's 7-night honeymoon is the slow rural Italian experience — hill-town villages, harvest tables, Brunello tastings, and a single great country property as the base. The itinerary below is built around Borgo Santo Pietro (the iconic boutique country villa), with the rhythm of in-property mornings, day trips to nearby villages, and long-table dinners.",
    hotelSlug: 'borgo-santo-pietro-tuscany-italy',
    hotelRationale:
      "Borgo Santo Pietro is the iconic Tuscan country honeymoon hotel — a restored 13th-century hamlet in the rolling hills near Chiusdino, 1 hour south of Siena. 21 suites and rooms, a 14-acre garden, a Michelin restaurant (Meo Modo), and the kind of slow rural Italian rhythm that only this kind of property delivers. Owner-driven (Jeanette Thottrup runs it); the food culture is extraordinary; the kitchen garden supplies most of what you eat.",
    days: [
      { morning: 'Arrive Florence (FLR) or Pisa (PSA). 1.5-hour drive to Chiusdino.', afternoon: 'Check in to Borgo Santo Pietro. Garden walk. Pool.', evening: 'Welcome dinner at Trattoria sull\'Albero (the property\'s casual restaurant).', restaurants: 'Trattoria sull\'Albero' },
      { morning: 'Slow breakfast in the garden. Garden tour (the property\'s kitchen garden is the spine of the food culture).', afternoon: 'Pool afternoon. Lunch on the terrace.', evening: 'Dinner at Meo Modo (Michelin) — book in advance.', restaurants: 'Meo Modo' },
      { morning: 'Day trip to Pienza and Montepulciano — the Val d\'Orcia hill towns. Lunch at La Porta in Monticchiello.', afternoon: 'Return via San Quirico d\'Orcia. Wine tasting at one of the Brunello estates.', evening: 'Dinner back at the property.', restaurants: 'La Porta (lunch)' },
      { morning: 'Sleep-in day. Late breakfast.', afternoon: 'Spa morning at the property\'s wellness center.', evening: 'Romantic in-room or in-garden dinner.', restaurants: 'In-room dining' },
      { morning: 'Truffle hunt morning — book through the hotel, half-day with truffle dogs in the surrounding forest. Lunch at the hunt-master\'s home.', afternoon: 'Return to the hotel. Pool.', evening: 'Dinner at Trattoria sull\'Albero.', restaurants: 'Trattoria sull\'Albero' },
      { morning: 'Day trip to Siena — the cathedral, Il Campo. Lunch at Osteria Le Logge.', afternoon: 'Visit San Gimignano on the way back.', evening: 'Final big dinner at Meo Modo.', restaurants: 'Osteria Le Logge (lunch), Meo Modo (dinner)' },
      { morning: 'Slow morning. Garden breakfast. Pack.', afternoon: 'Drive back to Florence/Pisa.', evening: 'Flight home.', restaurants: '—' },
    ],
    splurge: 'Truffle hunt with hunt-master lunch (day 5) — $400–700 per couple. The half-day truffle hunt in the Tuscan forest followed by a lunch at the hunt-master\'s home is one of the iconic rural Italian experiences — and uniquely available in this part of Tuscany.',
    sleepInDay: 4,
    costEstimate: '7 nights at Borgo Santo Pietro: $1,200–2,500/night = $8,400–17,500. Flights from US East Coast: $700–1,400. Flights from UK: $150–350. Extras (truffle hunt, Meo Modo dinners, wine tastings, drives): $2,500. Total all-in for two: $11,800–22,500.',
    closing:
      "Tuscany rewards the couples who let the rural rhythm work on them — the slow breakfasts, the garden lunches, the long dinners, the morning truffle hunts. The honeymoon that tries to fit four cities into 7 days misses what Tuscany specifically rewards. The honeymoon that picks one property and one valley is the one that comes home with the right kind of rest.",
    faqs: [
      { question: 'Borgo Santo Pietro or Castello di Reschio?', answer: 'Both extraordinary. Borgo Santo Pietro is in the Val d\'Orcia/Crete Senesi area south of Siena; Castello di Reschio is in Umbria (technically across the border) with a more castle-grand feel. Both deliver the Tuscan-rural honeymoon at world-class quality.' },
      { question: 'Best month?', answer: 'May, June, September are the sweet spots. July–August are hot (90°F+) and crowded; April is just opening; October is harvest and beautiful but cooler.' },
      { question: 'Do we need a car?', answer: 'Yes — Tuscan country honeymoons require a car for day trips. The hill towns and wineries are not reachable by public transit. Rent at Florence airport.' },
      { question: 'How many day trips is right?', answer: 'Two or three across 7 nights. Pienza/Montepulciano one day, Siena/San Gimignano another, possibly a wine country day to Brunello-area wineries. More than three day trips and you stop enjoying the property; fewer and you miss the Tuscan variety.' },
    ],
  },

  provence: {
    intro:
      "Provence's 7-night honeymoon is the Mediterranean rural experience with the lavender bloom (late June through July specifically) and the Côte d'Azur option as a day-trip extension. The itinerary below is built around Domaine de Manville in Les Baux-de-Provence — the iconic Provençal country resort.",
    hotelSlug: 'domaine-de-manville-provence',
    hotelRationale:
      "Domaine de Manville is the iconic Provençal honeymoon hotel — a restored 17th-century farmhouse in Les Baux-de-Provence, with 30 rooms set in olive groves and lavender fields. The property has a Michelin restaurant, a renowned wine cellar (focused on regional rosés and Bandol whites), and the kind of slow Provençal rhythm that pairs perfectly with the lavender-and-olive landscape. (Note: book directly — slug above is placeholder; verify catalog listing closer to launch.)",
    days: [
      { morning: 'Arrive Marseille (MRS) or Nice (NCE). 1.5-hour drive to Les Baux-de-Provence.', afternoon: 'Check in. Garden walk. Pool.', evening: 'Welcome dinner at L\'Aupiho (the property\'s Michelin restaurant).', restaurants: 'L\'Aupiho' },
      { morning: 'Slow breakfast in the garden.', afternoon: 'Visit Les Baux village — the medieval cliff-top town adjacent to the property. Lunch at La Reine Jeanne.', evening: 'Return to the property. Dinner at the casual bistro.', restaurants: 'La Reine Jeanne (lunch)' },
      { morning: 'Lavender day trip to the Plateau de Valensole (late June through mid-July only — earlier or later, this day becomes wine country or hill towns instead). 90-minute drive each way. Lunch at La Treille Muscate in Cliousclat.', afternoon: 'Return via olive farms.', evening: 'Dinner back at Domaine.', restaurants: 'La Treille Muscate' },
      { morning: 'Sleep-in day. Late breakfast.', afternoon: 'Spa morning. Late lunch by the pool.', evening: 'In-villa dinner.', restaurants: 'In-villa dining' },
      { morning: 'Saint-Rémy market morning — the Wednesday market in Saint-Rémy-de-Provence is one of the iconic Provençal markets. Lunch at Bistrot Découverte.', afternoon: 'Return via Eygalières.', evening: 'Dinner at L\'Aupiho again.', restaurants: 'Bistrot Découverte (lunch)' },
      { morning: 'Côte d\'Azur day trip — drive 1.5 hours to Saint-Tropez. Beach lunch at Club 55. Wander the port.', afternoon: 'Return via Cassis if time.', evening: 'Final dinner back at Domaine.', restaurants: 'Club 55 (lunch)' },
      { morning: 'Slow morning. Last garden breakfast.', afternoon: 'Drive to airport.', evening: 'Flight home.', restaurants: '—' },
    ],
    splurge: 'Lavender day to Plateau de Valensole (day 3, late June through mid-July only) — $200 per couple in private car or self-drive. The lavender bloom is the unique Provençal photographic moment.',
    sleepInDay: 4,
    costEstimate: '7 nights at Domaine de Manville: $800–1,800/night = $5,600–12,600. Flights from US East Coast: $700–1,400. Flights from UK: $150–300. Car rental for the week: $400. Extras (lavender, Côte d\'Azur, Michelin dinners): $2,000. Total all-in for two: $8,650–16,700.',
    closing:
      "Provence rewards the couples who let the rural rhythm work — village markets, lavender drives, olive grove pool afternoons. The honeymoon that crosses into all of France misses what 7 nights in one Provençal valley delivers — the slow Mediterranean rural pace that pairs perfectly with the rose and the lavender.",
    faqs: [
      { question: 'When is the lavender bloom exactly?', answer: 'Plateau de Valensole (the iconic bloom location): mid-late June through mid-July. Higher elevation areas bloom slightly later. The bloom is the specific reason to time a Provençal honeymoon to this window.' },
      { question: 'Best month for Provence overall?', answer: 'May for wildflowers and lower prices; late June through mid-July for lavender; September for harvest and cool evenings. Avoid August (mistral wind, crowds).' },
      { question: 'How important is the Côte d\'Azur day?', answer: 'Optional but rewarding. Saint-Tropez, Cap-Ferrat, or Cannes can be reached as day trips and add coastal variety to the rural Provençal week. Most couples do one coast day and the rest in the country.' },
      { question: 'Do we need a car?', answer: 'Yes — Provence is rural and the public transit doesn\'t work for the day trips. Rent at Marseille or Nice airport.' },
    ],
  },

  hawaii: {
    intro:
      "Hawaii's 7-night honeymoon — specifically Maui — is the easiest long-haul Pacific honeymoon for US West Coast couples. The Road to Hana, Haleakala sunrise, the Wailea-Kaanapali beach corridor, and Polynesian cultural texture without the French Polynesia flight time. The itinerary below is built around Four Seasons Maui at Wailea.",
    hotelSlug: 'four-seasons-maui-hawaii',
    hotelRationale:
      "Four Seasons Maui at Wailea is the most consistent honeymoon property on Maui. 380 rooms set on a private 6-acre beachfront in the Wailea resort area, with three pools, a renowned spa, and Spago Maui (Wolfgang Puck\'s) for fine dining. The property is large but the honeymoon-relevant adults sections (the adults-only Serenity Pool, the cabanas, the spa) are well-designed for intimacy. Direct flight from US West Coast (5–6 hours to Maui).",
    days: [
      { morning: 'Arrive OGG (Kahului). 30-minute drive to Wailea.', afternoon: 'Check in. Beach. Pool.', evening: 'Welcome dinner at Spago Maui.', restaurants: 'Spago Maui' },
      { morning: 'Sleep in. Breakfast at Ferraro\'s Bar e Ristorante (the resort\'s Italian).', afternoon: 'Snorkel at Wailea Beach. Spa afternoon.', evening: 'Dinner at the resort.', restaurants: 'Ferraro\'s' },
      { morning: 'Road to Hana day trip — book a guided tour (recommended over self-drive). Stops include the bamboo forest, black sand beach, Wai\'anapanapa State Park, Hana itself.', afternoon: 'Lunch in Hana.', evening: 'Return to the resort. Casual dinner.', restaurants: 'In-resort casual' },
      { morning: 'Sleep-in day. Late breakfast.', afternoon: 'Spa double-treatment.', evening: 'In-room dinner.', restaurants: 'In-room dining' },
      { morning: 'Haleakala sunrise (book the night before — wake up at 3am, 90-minute drive to the summit for the sunrise above the clouds at 10,000 ft).', afternoon: 'Return to the resort. Pool.', evening: 'Polynesian luau at Old Lahaina Luau (book in advance) — traditional fire dance, Hawaiian food, the iconic cultural experience.', restaurants: 'Old Lahaina Luau' },
      { morning: 'Surf lesson at the resort beach (book through hotel).', afternoon: 'Lunch at Mama\'s Fish House (a Maui institution, book a month in advance).', evening: 'Sunset cocktails. Casual dinner.', restaurants: 'Mama\'s Fish House (lunch)' },
      { morning: 'Slow morning. Last beach.', afternoon: 'Drive to OGG.', evening: 'Flight home (West Coast US 5–6 hours).', restaurants: '—' },
    ],
    splurge: 'Haleakala sunrise (day 5) — $200–400 per couple with guided tour. The pre-dawn drive to 10,000 feet and sunrise above the clouds is the trip-defining Maui experience and the moment that gets photographed.',
    sleepInDay: 4,
    costEstimate: '7 nights at Four Seasons Maui: $800–1,800/night = $5,600–12,600. Flights from US West Coast: $500–900. Flights from US East Coast: $1,000–2,000. Car rental: $400. Extras (Road to Hana, Haleakala, luau, Mama\'s, spa): $2,000. Total all-in for two: $8,500–18,000.',
    closing:
      "Maui rewards the couples who balance beach rest with Hawaiian cultural experiences — the Road to Hana, Haleakala, the luau. The honeymoon that just stays at Four Seasons misses what makes Hawaii different from generic Pacific beach. The honeymoon that engages with the island delivers a deeper memory.",
    faqs: [
      { question: 'Maui or the Big Island?', answer: "Maui for honeymoons specifically — better beach inventory, more honeymoon-aligned hotel options, easier rhythm. The Big Island is the active-honeymoon pick (volcanoes, observatory, more dramatic landscape) but less honeymoon-focused." },
      { question: 'Best month?', answer: 'April–May and September–October are the sweet spots (shoulder weather, low crowds). June–August is peak (crowded but excellent weather). Avoid December peak (holiday pricing and crowds).' },
      { question: 'Is the Road to Hana worth it?', answer: 'Yes if you book a guided tour — the self-drive version is long and stressful. A guided tour (with stops, local commentary, and the driver doing the work) is the right way. Book about a week ahead.' },
      { question: 'Should we add another island?', answer: 'For 10+ days, yes. Maui + Kauai or Maui + the Big Island is a real two-stop trip. For 7 nights, staying on Maui is the right call — you have plenty to do.' },
    ],
  },

  'costa-rica': {
    intro:
      "Costa Rica's 7-night honeymoon is the eco-adventure-and-spa contrast — Arenal volcano region first, then a Pacific beach property second. The itinerary below splits into 4 nights at Nayara Springs (Arenal) and 3 nights at Andaz Peninsula Papagayo or a Manuel Antonio beach property.",
    hotelSlug: 'nayara-springs-costa-rica',
    hotelRationale:
      "Nayara Springs at Arenal is the most luxurious eco-resort in Costa Rica — adults-only, 35 plunge-pool villas built around natural hot springs with Arenal volcano views, a top-rated spa, and Restaurant Mi Casa for fine dining. The property delivers the iconic 'volcano in the background' Costa Rican shot. The combination of jungle setting, natural hot springs, and the active day-trip access (canopy tours, hanging bridges, La Fortuna waterfall) makes it the right first stop.",
    days: [
      { morning: 'Arrive San José (SJO). 3-hour drive to Arenal.', afternoon: 'Check in to Nayara Springs. Hot springs. Volcano view from the villa.', evening: 'Welcome dinner at Restaurant Mi Casa.', restaurants: 'Restaurant Mi Casa' },
      { morning: 'Slow breakfast. Hot springs morning.', afternoon: 'Arenal Hanging Bridges canopy walk (3-hour activity, book through hotel).', evening: 'Dinner at Asia Luna (the property\'s Asian restaurant).', restaurants: 'Asia Luna' },
      { morning: 'La Fortuna waterfall morning — 500-step descent, swim in the pool below.', afternoon: 'Spa afternoon. Late lunch.', evening: 'In-villa dinner.', restaurants: 'In-villa dining' },
      { morning: 'Sleep in. Late breakfast.', afternoon: 'Drive 3.5 hours to Peninsula Papagayo (Pacific coast).', evening: 'Check in to Andaz Peninsula Papagayo. Beach. Dinner at Rio Bhongo.', restaurants: 'Rio Bhongo' },
      { morning: 'Beach morning at the resort\'s private beach.', afternoon: 'Catamaran cruise along the Papagayo coast — sunset sail with snorkel stops.', evening: 'Dinner at Chao Pescao.', restaurants: 'Chao Pescao' },
      { morning: 'Spa morning at the resort.', afternoon: 'Beach lunch. Pool.', evening: 'Final big dinner at the property.', restaurants: 'Ostra' },
      { morning: 'Slow last morning. Pack.', afternoon: 'Drive 30 minutes to Liberia (LIR) airport.', evening: 'Direct flight home.', restaurants: '—' },
    ],
    splurge: 'Catamaran sunset cruise (day 5) — $300–500 per couple. The 3-hour sunset sail with snorkel stops along the Papagayo coast is the trip\'s signature water-based experience.',
    sleepInDay: 4,
    costEstimate: '4 nights at Nayara Springs: $1,200–1,800/night = $4,800–7,200. 3 nights at Andaz Peninsula Papagayo: $700–1,200/night = $2,100–3,600. Inter-property drive: $200 (or 30-min flight $500). Flights from US: $400–800. Extras (canopy, waterfall, catamaran, spa): $1,500. Total all-in for two: $9,000–13,500.',
    closing:
      "Costa Rica rewards the couples who embrace the active + slow split. The honeymoon that just stays at one property misses what makes Costa Rica different — the volcano-and-jungle morning paired with the Pacific-beach evening. The two-stop format is the entire point.",
    faqs: [
      { question: 'Arenal first or beach first?', answer: "Arenal first, always. The active honeymoon days (canopy, waterfall, volcano) should come early when energy is high. The Pacific beach is the wind-down, not the warm-up." },
      { question: 'Best month?', answer: 'December–April is the dry season — peak conditions but also peak pricing. May–June is the green season (some rain but lower prices). September–October is the wettest.' },
      { question: 'Should we add Manuel Antonio?', answer: 'For 10+ nights, yes — Manuel Antonio has the rainforest-meets-beach experience that complements the Pacific coast. For 7 nights, stick with one Pacific destination.' },
      { question: 'Is Costa Rica honeymoon-romantic?', answer: 'Yes — but in an active, eco-adventure way rather than a beach-luxe way. Nayara Springs specifically is built for honeymoons with adults-only and volcano-view villas. Couples wanting a quieter beach honeymoon should pick Mexico instead.' },
    ],
  },

  thailand: {
    intro:
      "Thailand's 7-night honeymoon is the variety-rich Asian trip — Bangkok culture, Andaman beach luxury, and food culture as the connective tissue. The itinerary below splits as 2 nights in Bangkok followed by 5 nights at Six Senses Yao Noi or Amanpuri.",
    hotelSlug: 'six-senses-yao-noi-thailand',
    hotelRationale:
      "Six Senses Yao Noi is the iconic Thai honeymoon property — 54 villas on Koh Yao Noi island in the middle of Phang Nga Bay (the limestone karst-studded bay between Phuket and Krabi). Each villa has a private pool with views of the karsts. The property is a Six Senses original; the spa is world-class; the food culture (across 4 restaurants) is exceptional. Direct boat transfer from Phuket international airport.",
    days: [
      { morning: 'Arrive Bangkok (BKK). Drive to The Siam or Mandarin Oriental.', afternoon: 'Check in. Late lunch. Riverside walk.', evening: 'Dinner at Le Normandie (Michelin) or Bo.Lan.', restaurants: 'Le Normandie' },
      { morning: 'Bangkok temple morning — Wat Pho, Wat Arun (book a private guide). Lunch at Supanniga Eating Room.', afternoon: 'Tuk-tuk afternoon through the markets. Massage.', evening: 'Sky bar dinner at Vertigo Grill (Banyan Tree).', restaurants: 'Supanniga (lunch), Vertigo (dinner)' },
      { morning: 'Domestic flight to Phuket (75 minutes). Boat transfer to Yao Noi.', afternoon: 'Check in to Six Senses. Pool. Lagoon swim.', evening: 'Dinner at The Dining Room.', restaurants: 'The Dining Room' },
      { morning: 'Slow breakfast at Living Room (the all-day restaurant). Pool.', afternoon: 'Phang Nga Bay long-tail boat excursion — 4-hour tour through the karsts, including James Bond Island and a sea-cave swim.', evening: 'Dinner at Hilltop Reserve (private dining setting).', restaurants: 'Hilltop Reserve' },
      { morning: 'Sleep-in. Late breakfast.', afternoon: 'Spa double-treatment.', evening: 'Beach dinner.', restaurants: 'Beach BBQ' },
      { morning: 'Cooking class with the resort chef.', afternoon: 'Snorkel from the property. Lunch.', evening: 'Final big dinner at The Dining Room.', restaurants: 'The Dining Room' },
      { morning: 'Slow morning. Last lagoon swim. Pack.', afternoon: 'Boat back to Phuket. Domestic flight to Bangkok.', evening: 'International flight home.', restaurants: '—' },
    ],
    splurge: 'Phang Nga Bay long-tail boat (day 4) — $400–600 per couple with private guide. The half-day through the limestone karsts is the iconic Thai photographic moment.',
    sleepInDay: 5,
    costEstimate: '2 nights Bangkok at The Siam: $700/night = $1,400. 5 nights at Six Senses Yao Noi: $1,200–2,500/night = $6,000–12,500. Internal flights and transfers: $400. Flights from US: $1,500–2,500. Extras (temple tour, Le Normandie, Phang Nga, cooking class, spa): $2,000. Total all-in for two: $11,300–18,800.',
    closing:
      "Thailand's 7-night format rewards the city + beach split. The Bangkok 2-night culture-and-food primer plus the Six Senses 5-night beach decompression is the proven Thai honeymoon rhythm. Couples who skip Bangkok miss the cultural depth; couples who give Bangkok 4+ nights miss the beach.",
    faqs: [
      { question: 'Six Senses Yao Noi or Amanpuri?', answer: 'Both world-class. Six Senses Yao Noi is on the smaller Yao Noi island in Phang Nga Bay (more dramatic karst views, more isolated). Amanpuri is on Phuket\'s northwest coast (more accessible, more polished service). For pure honeymoon iconicness, Yao Noi.' },
      { question: 'Best month?', answer: 'November–March is the dry, cool, low-humidity season. February–March are the absolute peak conditions. April starts getting humid; May–October is the southwest monsoon.' },
      { question: 'Is Bangkok worth 2 nights?', answer: 'Yes for first-time Thailand. The Le Normandie / Bo.Lan / temple morning combination is genuinely different from generic Asian honeymoons. For repeat visitors, you can skip Bangkok and add 2 nights to the Yao Noi stay.' },
      { question: 'What about Chiang Mai?', answer: 'For 10+ day trips, adding Chiang Mai (the cultural northern capital) is the right move. For 7 nights, Bangkok + beach is the right rhythm.' },
    ],
  },

  sicily: {
    intro:
      "Sicily's 7-night honeymoon is the under-rated Italian coastal experience — Verdura on the south coast, the temples at Agrigento, the fishing-village dinners, Mount Etna day trips, and the genuine Italian-but-not-quite identity that makes Sicily different from the Amalfi or Capri rhythm. The itinerary below is built around Verdura Resort.",
    hotelSlug: 'verdura-resort-sicily-italy',
    hotelRationale:
      "Verdura Resort by Rocco Forte is the most polished honeymoon property in Sicily — 203 rooms (large for a Rocco Forte) set on a 230-hectare estate with 2km of private beachfront, three 18-hole golf courses, four restaurants, and a renowned spa. The property is on the south coast (15 minutes from Sciacca, 45 minutes from Agrigento). The combination of large beach, multiple restaurants, and the cultural day-trip access to Agrigento and the Valley of the Temples makes it the right Sicilian honeymoon anchor.",
    days: [
      { morning: 'Arrive Palermo (PMO). 1.5-hour drive to Verdura.', afternoon: 'Check in. Beach. Pool.', evening: 'Welcome dinner at Buongiorno (the property\'s all-day restaurant).', restaurants: 'Buongiorno' },
      { morning: 'Slow breakfast. Beach morning.', afternoon: 'Pool afternoon. Late lunch at the beach.', evening: 'Dinner at Zagara (the property\'s fine dining restaurant).', restaurants: 'Zagara' },
      { morning: 'Valley of the Temples (Agrigento) — 45-minute drive. 3-hour guided visit of the UNESCO Greek ruins.', afternoon: 'Lunch in Agrigento. Return to the property.', evening: 'Dinner back at the resort.', restaurants: 'Buongiorno' },
      { morning: 'Sleep-in day. Late breakfast.', afternoon: 'Spa double-treatment at the Irene Forte Spa.', evening: 'In-villa dinner.', restaurants: 'In-villa dining' },
      { morning: 'Mount Etna day — 2-hour drive to the active volcano. Cable car to the summit. Wine tasting at one of the Etna estates.', afternoon: 'Lunch en route.', evening: 'Late return. Casual dinner.', restaurants: 'Beach grill' },
      { morning: 'Sciacca village morning — 15 minutes to the fishing village, walk the harbor, visit the ceramic shops.', afternoon: 'Return to the resort. Beach. Pool.', evening: 'Final dinner at Zagara.', restaurants: 'Zagara' },
      { morning: 'Slow morning. Last beach. Pack.', afternoon: 'Drive to Palermo.', evening: 'Flight home.', restaurants: '—' },
    ],
    splurge: 'Mount Etna day with Etna wine estate visit (day 5) — $400–600 per couple with private driver. The volcanic-and-wine day is one of the iconic Sicilian honeymoon experiences.',
    sleepInDay: 4,
    costEstimate: '7 nights at Verdura: $800–1,800/night = $5,600–12,600. Flights from US East Coast: $700–1,500. Flights from UK: $200–500. Car rental: $300. Extras (Valley of the Temples, Etna day, Zagara dinners, spa): $2,000. Total all-in for two: $8,600–17,000.',
    closing:
      "Sicily rewards the couples who treat it as its own destination — not as a southern Italy add-on. The combination of beach honeymoon, Greek archaeology, volcano day, and fishing-village dinners is uniquely Sicilian. The honeymoon that compresses Sicily into 3 days misses what 7 nights here delivers.",
    faqs: [
      { question: 'Verdura or a smaller property?', answer: 'Verdura for couples who want polished resort luxury with day-trip access. Smaller properties (Susafa, Monaci delle Terre Nere) for couples who want a more rustic Sicilian villa experience. For first-time Sicily, Verdura.' },
      { question: 'Best month?', answer: 'May, June, September are the sweet spots. July–August is hot (95°F+) and crowded. April and October are shoulder.' },
      { question: 'Worth visiting Mount Etna?', answer: 'Yes — Etna is one of Sicily\'s defining experiences and the wine produced on its volcanic slopes (Etna Rosso, Etna Bianco) is increasingly recognized. The full-day trip is worth it.' },
      { question: 'What about Taormina?', answer: "Taormina is the iconic cliffside Sicilian town with the famous Greek theater. Worth a day trip from Verdura (2.5 hours each way — long) or as a second-stop. For 7 nights, Verdura + day trips is the easier rhythm." },
    ],
  },

  'mykonos-greece': {
    intro:
      "Mykonos's 7-night honeymoon is the social Greek island experience — beach club mornings, Scorpios afternoons, white-and-blue village dinners, and the contrast with the more contemplative Santorini. For couples whose honeymoon style is celebration-extended-from-the-wedding, Mykonos is the right Greek island. The itinerary below is built around Belvedere Mykonos or Cavo Tagoo Mykonos.",
    hotelSlug: 'cavo-tagoo-santorini-santorini',
    hotelRationale:
      "(Note: anchor hotel slug is placeholder for Mykonos — Cavo Tagoo also has a Mykonos property; verify catalog.) Cavo Tagoo Mykonos is the iconic boutique-luxury Mykonos honeymoon hotel — 80 suites on a cliff overlooking the Aegean, infinity pool, private beach access, and the kind of cliffside-cosmopolitan vibe that the island is known for. The property is 5 minutes from Mykonos Town but elevated enough to feel private.",
    days: [
      { morning: 'Arrive Athens (ATH); connect to Mykonos (45 minutes by air). 20-minute drive to Cavo Tagoo.', afternoon: 'Check in. Pool. Aegean swim.', evening: 'Welcome dinner at the hotel\'s rooftop.', restaurants: 'Hotel rooftop' },
      { morning: 'Slow breakfast. Pool morning.', afternoon: 'Mykonos Town walk — Little Venice, the windmills, the alleys. Lunch at Kounelas.', evening: 'Dinner at Interni or Spilia.', restaurants: 'Kounelas (lunch), Interni (dinner)' },
      { morning: 'Beach day — Psarou or Super Paradise. Lunch at Nammos (the iconic Mykonos beach club).', afternoon: 'Continue at the beach.', evening: 'Dinner back at the hotel.', restaurants: 'Nammos (lunch)' },
      { morning: 'Sleep-in day. Late breakfast.', afternoon: 'Spa double-treatment.', evening: 'Quiet dinner at the hotel.', restaurants: 'Hotel' },
      { morning: 'Delos day trip — 30-minute boat to the UNESCO archaeological island. Guided tour of the ancient ruins.', afternoon: 'Return to Mykonos. Lunch at a beachside taverna.', evening: 'Sunset cocktails. Casual dinner.', restaurants: 'Beach taverna (lunch)' },
      { morning: 'Beach morning at Scorpios (the iconic Mykonos beach club).', afternoon: 'Late afternoon by the pool.', evening: 'Final big dinner at Spilia (cave-restaurant on the beach).', restaurants: 'Spilia' },
      { morning: 'Slow morning. Last pool. Pack.', afternoon: 'Transfer to airport.', evening: 'Flight via Athens.', restaurants: '—' },
    ],
    splurge: 'Day at Nammos beach club (day 3) — $300–800 per couple depending on dining choices. The iconic Mykonos beach-club-lunch experience is what couples come to the island for.',
    sleepInDay: 4,
    costEstimate: '7 nights at Cavo Tagoo Mykonos: $700–2,000/night = $4,900–14,000. Flights from US East Coast via Athens: $1,500–2,500. Internal Athens-Mykonos flight: $200. Extras (Nammos, Scorpios, Delos, signature dinners, spa): $2,000. Total all-in for two: $8,600–18,500.',
    closing:
      "Mykonos rewards the couples who embrace its social Greek-island identity — the beach clubs, the white-village dinners, the celebration-extended-from-the-wedding energy. The honeymoon that fights the island\'s vibe (looking for Santorini-style cliffside quiet) ends up disappointed. The honeymoon that leans into Mykonos\' format comes home celebrating.",
    faqs: [
      { question: 'Mykonos or Santorini?', answer: 'Mykonos for celebration energy and beach social; Santorini for cliffside romance and iconic sunsets. For honeymoons specifically, Santorini wins for 80% of couples; Mykonos wins for couples whose style is more social-celebration.' },
      { question: 'Best month?', answer: 'June and September are the sweet spots — water warm enough, August crowds missing. July–August is the absolute peak (mobbed and expensive). May and October are shoulder.' },
      { question: 'Do we need to leave the resort?', answer: 'For Mykonos specifically, yes — the beach clubs (Nammos, Scorpios) and the Mykonos Town dinners are the entire reason to come. Staying at the hotel misses what makes Mykonos different.' },
      { question: 'Is the Delos day trip worth it?', answer: 'For couples interested in ancient Greek culture, yes. For pure beach-and-celebration honeymooners, optional. The 4-hour archaeological visit is the iconic cultural break from the beach-club rhythm.' },
    ],
  },
}
