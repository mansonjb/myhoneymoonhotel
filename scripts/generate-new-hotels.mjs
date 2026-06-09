#!/usr/bin/env node
// One-shot generator for 29 new hotels across Riviera Maya, Tasmania, Algarve
import { writeFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const HOTELS_DIR = join(__dirname, '..', 'data', 'hotels')

const hotels = [
  // ============== RIVIERA MAYA (9 more — Rosewood already created) ==============
  {
    slug: 'banyan-tree-mayakoba-riviera-maya',
    name: 'Banyan Tree Mayakoba',
    destination: 'riviera-maya', country: 'mexico',
    seo_title: 'Banyan Tree Mayakoba: All-Pool-Villa Honeymoon 2026',
    seo_desc: '124 pool-villa Asian-Mexican fusion resort. Score 88/100, from $750/night. Verdict, suite pick, 7-night itinerary.',
    types: ['luxury','wellness','beach'], score: 88,
    breakdown: { adults_only:0, couples_pct:17, spa:14, award:12, pool:9, beach:8, room_service:9, stars:10, luxury:9 },
    stars: 5, min: 750, max: 3200, adults: false,
    amenities: ['private-pool','spa','beach','mangrove','butler','rainforest-spa','fine-dining','pool-villas','kayaks','lagoon'],
    ta: 4.7, tac: true, couples: 86,
    verdict: 'Banyan Tree Mayakoba is the all-pool-villa entry on the Mayakoba estate — every one of the 124 accommodations is a freestanding villa with private pool, walled garden, and a sense of total seclusion that the larger Rosewood, with its open campus, does not deliver. This is the choice for couples who prioritise absolute private-villa privacy over shared resort facilities. Banyan Tree\'s Asian-spa heritage shows in the Rainforest Spa, which is one of the most architecturally distinctive spas in Mexico — a hydro-thermal circuit through stone steam caves and a glass-walled relaxation pavilion in the mangrove. Saffron and the Cantonese restaurant Cha bring serious pan-Asian cooking, unique among Riviera Maya resorts. The beach is shared with Rosewood and Andaz (Mayakoba reciprocity) and equally sargassum-protected. Caveats: the Asian-Mexican fusion aesthetic divides guests — some find it sublime, others find Asian-Buddhist styling odd in a Yucatán setting. The villas are spread across a large mangrove area, requiring buggy or boat transport. Service is excellent but slightly less polished than Rosewood. Best for couples who want a villa with private pool over a suite, and who specifically value the Banyan Tree spa heritage.',
    best_room: 'Serenity Pool Villa with private plunge pool and walled garden (130 m²). Step up to the Beachfront Pool Villa for direct beach access, or the Presidential Two-Bedroom for a private compound. Avoid the Banyan Pool Villas near the main entrance — they are quieter than the lagoon villas.',
    itinerary: [
      ['Arrival via Cancún','CUN transfer 50 min to Mayakoba. Greet at the wharf with cold towels and hibiscus tea. Buggy to your Serenity Pool Villa. Sunset cocktails on your private pool deck. Welcome dinner at Saffron with Asian-Mexican tasting menu.'],
      ['Rainforest Spa hydrothermal','Slow morning, private pool only. Lunch at Tamarindo by the pool. Afternoon at the Rainforest Spa — full hydrothermal circuit followed by 90-min couples\' massage in the mangrove pavilion. Dinner in-villa.'],
      ['Tulum ruins and cenote','Early Tulum ruins (8am opening). Private guide. Lunch at Cetli in Tulum town. Afternoon Gran Cenote private snorkel. Return for sunset cocktails on the beach.'],
      ['Sian Ka\'an drift snorkel','Full-day Muyil canal trip with CESiaK — drift through the ancient Mayan canal, lunch in the biosphere. Return mid-afternoon. Dinner at Cha (Cantonese).'],
      ['Beach day and floating breakfast','Floating breakfast in your private pool. Beach club all day with reading and the resort\'s wood-fired pizza for lunch. Couples\' temazcal in late afternoon. Dinner at Saffron.'],
      ['Hartwood dinner and cocktails','Slow day at the resort. Spa morning. Beach lunch. Private car to Tulum for 7pm Hartwood dinner. Cocktails afterward at Casa Jaguar with live music. Late return.'],
      ['Slow farewell','Long breakfast on the villa terrace. Final swim in your pool. Buggy to wharf and CUN transfer for departure.']
    ],
    caveats: [
      'Asian-Mexican fusion is divisive — preview the photos carefully; either you love it or find it surreal.',
      'Villas are widely spaced — buggy or bike to restaurants. Less spontaneous than a compact resort.',
      'Three on-site restaurants — adequate for 7 nights with Tulum excursion variety.',
      'Mid-priced villa categories book 4–6 months ahead for January and February.',
      'Service is excellent but a half-step less personal than Rosewood next door.'
    ],
    faqs: [
      ['Good for honeymooners?','Excellent — every accommodation is a private villa with pool. The most private of the Mayakoba properties, and the strongest spa.'],
      ['Best time to visit?','November through mid-April. November is the under-the-radar best month.'],
      ['Book in advance?','4–6 months for Serenity and Beachfront Pool Villas in peak winter.'],
      ['Adults-only?','No, but the all-villa layout means honeymooners are functionally isolated from any family guests.'],
      ['Best room type?','Serenity Pool Villa as the entry sweet spot. Beachfront Pool Villa if the budget allows.'],
      ['How to get there?','Fly to CUN. Hotel transfer ($120–$180 per car) takes 50 min.']
    ],
    email: 'Subject: Honeymoon inquiry — Banyan Tree Mayakoba\n\nDear Reservations,\n\nWe would like to book a Serenity Pool Villa for our honeymoon [DATES]. Please confirm:\n\n1. Honeymoon arrival turn-down and welcome amenities\n2. Couples\' Rainforest Spa hydrothermal package availability\n3. Private CUN transfer\n4. Private dining setup on the villa pool deck (one evening)\n\nThank you,\n[Names]'
  },
  {
    slug: 'andaz-mayakoba-riviera-maya',
    name: 'Andaz Mayakoba',
    destination: 'riviera-maya', country: 'mexico',
    seo_title: 'Andaz Mayakoba: Honeymoon Value Pick Review 2026',
    seo_desc: '214-room Hyatt-Andaz with full Mayakoba estate access. Score 84/100, from $480/night. Verdict, suite pick, 7-night plan.',
    types: ['luxury','beach','family-friendly'], score: 84,
    breakdown: { adults_only:0, couples_pct:14, spa:11, award:11, pool:9, beach:9, room_service:8, stars:9, luxury:8 },
    stars: 5, min: 480, max: 1800, adults: false,
    amenities: ['beach','spa','pool','mangrove','kayaks','tequila-bar','design-forward','cenote-pool','butler','kids-club'],
    ta: 4.6, tac: true, couples: 79,
    verdict: 'Andaz Mayakoba is the design-forward value entry to the Mayakoba estate — 214 rooms with a sharper, younger aesthetic than its Rosewood and Banyan Tree siblings, and rates routinely 40% lower. For honeymooners who want full Mayakoba beach access, mangrove canals, and reciprocity to the Sense Spa (book at Rosewood, use everywhere) without paying $1,500 a night, Andaz is the smartest play on the coast. The Casa Amate restaurant — modern Mexican by chef Larry Greenwood — is one of the most exciting restaurants on the Yucatán. The cenote-style main pool, carved into the mangrove with stone overhangs, is one of the most photogenic resort pools in Mexico. Caveats: rooms (not villas) feel less honeymoon-private than the Rosewood lagoon suites. The resort is genuinely family-friendly in school holidays. The beachfront is shared with Banyan Tree and Rosewood guests — not exclusive. But for the price, this is the best entry point to a serious Mayakoba honeymoon, and the design and cooking are first-rate. Choose a Beachfront Suite or one of the Casita Suites if available.',
    best_room: 'Beachfront Suite (60 m², ground floor with direct beach access from the terrace) or Casita Suite for a freestanding little house with garden plunge pool. Avoid Garden View Rooms — they back onto inland mangroves and miss the beach point.',
    itinerary: [
      ['Arrival via Cancún','50-min private CUN transfer. Check-in with mezcal welcome on the lobby terrace. Settle into your Beachfront Suite. Dinner at Cocina Milagro on the beach.'],
      ['Mayakoba beach and exploration','Slow morning at the beach club. Lunch at Casa Amate (the chef\'s table for lunch is the move). Afternoon kayaking the mangrove canals. Sunset at OllaTaco for tequila tasting.'],
      ['Tulum ruins and Hartwood','Tulum ruins at 8am with private guide. Lunch at Be Tulum. Return to Andaz mid-afternoon. Drive to Hartwood for 7pm dinner.'],
      ['Cenote private day','Private guide and snorkel at Dos Ojos cenote (1h south). Lunch at the cenote with packed picnic. Return for spa afternoon and dinner at Cocina Milagro.'],
      ['Sian Ka\'an biosphere','Full-day Sian Ka\'an drift snorkel and boat tour with CESiaK. Return at sunset. In-villa dinner.'],
      ['Spa and lazy beach','Couples\' massage at Naum spa in the morning. Beach day with reading and ceviche lunch. Sunset cocktails at OllaTaco. Final tasting dinner at Casa Amate.'],
      ['Slow departure','Late breakfast on the beach. Final swim. CUN transfer for afternoon flight home.']
    ],
    caveats: [
      'Significantly busier than Rosewood — 214 rooms means more guests in shared spaces.',
      'Genuinely family-friendly in school holidays — book outside US/Mexican school breaks for the quietest experience.',
      'Beach is shared across Mayakoba properties — not exclusive use.',
      'Rooms (not standalone villas) — less private than Banyan Tree or Rosewood for couples.',
      'Naum spa is good but not on the level of Sense at Rosewood (which Andaz guests can access for a fee).'
    ],
    faqs: [
      ['Good for honeymooners?','Very good — best value entry to the Mayakoba estate. Beachfront and Casita Suites are honeymoon-appropriate.'],
      ['Best time to visit?','November through mid-April. School-holiday weeks should be avoided for honeymooners.'],
      ['Book in advance?','3–4 months for Beachfront Suites in winter peak. Casita Suites 5+ months ahead.'],
      ['Adults-only?','No — genuinely family-friendly. Book non-school-holiday weeks for an adult atmosphere.'],
      ['Best room type?','Beachfront Suite or Casita Suite. Avoid Garden View categories.'],
      ['How to get there?','CUN private transfer 50 min ($120–$160).']
    ],
    email: 'Subject: Honeymoon inquiry — Andaz Mayakoba\n\nDear Reservations,\n\nWe would like to book a Beachfront Suite for our honeymoon [DATES]. Please confirm honeymoon amenities, CUN private transfer, Casa Amate chef\'s table reservation, and Sense spa cross-access at Rosewood Mayakoba.\n\nThank you,\n[Names]'
  },
  {
    slug: 'belmond-maroma-riviera-maya',
    name: 'Belmond Maroma, Riviera Maya',
    destination: 'riviera-maya', country: 'mexico',
    seo_title: 'Belmond Maroma Honeymoon Review: Beachfront Suite 2026',
    seo_desc: '72-room Belmond luxury beachfront. Score 90/100, from $1200/night. Honest verdict, oceanfront suite pick, 7-night itinerary.',
    types: ['luxury','beach','wellness'], score: 90,
    breakdown: { adults_only:0, couples_pct:19, spa:13, award:13, pool:8, beach:10, room_service:9, stars:10, luxury:10 },
    stars: 5, min: 1200, max: 6500, adults: false,
    amenities: ['beach','spa','pool','beachfront','jungle','butler','fine-dining','catamaran','wine-cellar','beachfront-suites'],
    ta: 4.8, tac: true, couples: 89,
    verdict: 'Belmond Maroma reopened in late 2023 after a complete two-year overhaul — and the result is one of the best beachfront luxury hotels in Latin America. The 72 rooms, suites and villas occupy a private 25-acre jungle estate on Maroma Beach (consistently ranked among the world\'s top ten beaches by Travel + Leisure for two decades). Belmond and architect Tara Bernerd retained the original 1970s Pueblo Maya whitewashed silhouettes and layered in a richer materials palette — hammered copper, soft linen, indigenous wood. The Casa Yima beach restaurant by chef Curtis Stone and the new Freya destination restaurant (one Michelin star by 2025 forecasts) have lifted the food to genuine destination level. The spa Aum is anchored by a Mayan cenote in the jungle. The beach is the most beautiful and sargassum-managed on the Riviera Maya — three protective barriers and a permanent rake team. Caveats: the price has pushed firmly into Aman territory, and the renovation lost some of the original casual-luxe charm. But for honeymooners who want the single most beautiful beach on the coast paired with first-tier service, Belmond Maroma is now the top pick north of Tulum.',
    best_room: 'Oceanfront Suite (75 m², 1st-floor with private deck and direct beach steps) — the iconic honeymoon room. Step up to the Beach Villa for a private walled compound, or the Casita Mayan Pool Villa for jungle-side seclusion with plunge pool. Avoid Garden View categories.',
    itinerary: [
      ['Arrival via Cancún','45-min CUN private transfer (Maroma is closer to Cancún than Mayakoba). Check-in with mezcal flight. Sunset on Maroma Beach with the chef\'s welcome canapés. Dinner at Casa Yima.'],
      ['Beach and spa day','Full beach day with private cabana. Long lunch at Casa Yima. Afternoon couples\' cenote ritual at Aum Spa. Dinner at Freya tasting menu.'],
      ['Sailing','Half-day catamaran from Maroma beach — sailing north along the coast with snorkel stop. Champagne and ceviche on board. Return mid-afternoon. Spa massage. Dinner at El Restaurante.'],
      ['Tulum private excursion','Early Tulum ruins (8am opening). Private guide. Lunch at Casa Jaguar. Return mid-afternoon. Hartwood dinner if you booked (otherwise Posada Margherita).'],
      ['Cenote private day','Private guide and snorkel at the lesser-known Cenote Carwash (Aktun Ha). Hotel-packed picnic. Spa-and-pool afternoon. Dinner at Freya.'],
      ['Lazy beach day','Full beach day with butler service. Floating breakfast in your suite\'s tub. Long lunch at Casa Yima. Sunset cocktails on the beach. In-villa private chef dinner.'],
      ['Slow departure','Final breakfast on your private deck. CUN transfer for departure.']
    ],
    caveats: [
      'Prices are 30% higher post-renovation — fully in ultra-luxury bracket now.',
      'Oceanfront Suites book 6+ months ahead for January and February honeymoon peak.',
      'No kids-club but children are present in school holidays — book outside breaks.',
      'Casa Yima can be windy on the open beach at lunch — bring a hair tie.',
      'The 25-acre estate is walkable but bike or buggy on request — large for a 72-key resort.'
    ],
    faqs: [
      ['Good for honeymooners?','Outstanding — arguably the single best honeymoon hotel on the Riviera Maya post-2023 renovation.'],
      ['Best time to visit?','November to mid-April. The first two weeks of November are the under-booked best window.'],
      ['Book in advance?','6+ months for Oceanfront Suites and Beach Villas in winter peak.'],
      ['Adults-only?','No, but the atmosphere is firmly adult outside school-holiday weeks.'],
      ['Best room type?','Oceanfront Suite for the iconic Maroma experience. Beach Villa for a walled compound.'],
      ['How to get there?','CUN private transfer 45 min ($120–$160). Closest Mayakoba-area airport.']
    ],
    email: 'Subject: Honeymoon inquiry — Belmond Maroma\n\nDear Reservations,\n\nWe would like to book an Oceanfront Suite for [DATES]. Please confirm honeymoon arrival amenities, Aum spa couples\' cenote ritual, private catamaran half-day, and Freya restaurant priority booking for two evenings.\n\nThank you,\n[Names]'
  },
  {
    slug: 'nizuc-resort-spa-cancun-riviera-maya',
    name: 'Nizuc Resort & Spa',
    destination: 'riviera-maya', country: 'mexico',
    seo_title: 'Nizuc Cancún Honeymoon Review: Punta Nizuc 2026',
    seo_desc: '274-room ultra-modern resort on Cancún\'s southern Punta Nizuc tip. Score 85/100, from $650/night. Honest verdict.',
    types: ['luxury','beach','wellness'], score: 85,
    breakdown: { adults_only:0, couples_pct:15, spa:13, award:10, pool:9, beach:9, room_service:9, stars:10, luxury:10 },
    stars: 5, min: 650, max: 3500, adults: false,
    amenities: ['beach','spa','pool','beachfront','close-to-airport','reef','fine-dining','butler','adults-pool','private-cabanas'],
    ta: 4.6, tac: true, couples: 78,
    verdict: 'Nizuc occupies the entire southern tip of the Cancún Hotel Zone — Punta Nizuc — a 29-acre private peninsula with reef directly offshore and 15 minutes from Cancún airport. It is the practical choice for honeymooners with a tight schedule who want serious luxury without the 90-minute Tulum transfer. Architecturally Nizuc is uncompromisingly modern — clean lines, glass, dark stone, infinity pools — a counterpoint to the bohemian-jungle Tulum aesthetic and the natural mangrove canals of Mayakoba. There are 274 rooms across two zones; the Mayan Sand zone has direct beach access, the Mayan Garden zone is jungle-shaded with quieter pools. Six restaurants (including Indochine, the best Vietnamese in Mexico, and Ramona, Italian by a Florentine chef). The Nizuc Spa is one of the largest and best in Mexico — a full hydrothermal circuit including a thalassotherapy pool. The reef is directly offshore — snorkel from the beach, no boat needed. Caveats: it is large (274 rooms) and resort-feeling rather than boutique. The Cancún Hotel Zone location is convenient but lacks the romance of Tulum or Mayakoba\'s jungle setting. Best for couples on a short honeymoon (3–5 nights) who value airport proximity and reef access.',
    best_room: 'Oceanfront Suite with terrace (75 m²) in the Mayan Sand zone for direct beach access. Step up to the Beachfront Villa for private walled garden. The Adults-Only Beach Pool zone is restricted to age 18+, regardless of room category — confirm this at booking.',
    itinerary: [
      ['Arrival from Cancún','15-min private CUN transfer (closest of any Riviera Maya resort). Check-in mezcal. Settle into Oceanfront Suite. Sunset on the beach. Dinner at Ramona.'],
      ['Beach and reef snorkel','Beach morning with reef snorkel straight from the sand — the Mesoamerican reef sits 100m offshore. Lunch on the beach. Spa afternoon hydrothermal circuit. Dinner at Indochine.'],
      ['Tulum day trip','Long day south — Tulum ruins at 9am with private guide, lunch at Cetli, afternoon at Casa Jaguar beach club. Late return. Light dinner.'],
      ['Cenote private day','Private guide and snorkel at Dos Ojos cenote (1.5h south). Picnic lunch. Return mid-afternoon. Beach sunset. Dinner at Terra Nostra.'],
      ['Isla Mujeres ferry','Day trip to Isla Mujeres by hotel-arranged private boat. Lunch at Zama or Playa Norte beach club. Snorkel at MUSA underwater sculpture museum. Return at sunset.'],
      ['Spa day','Full day at Nizuc Spa — hammam, thalassotherapy pool, couples\' massage. In-suite dinner with private chef on the terrace.'],
      ['Slow departure','Late breakfast. Final beach swim. 15-min CUN transfer for early-afternoon flight home.']
    ],
    caveats: [
      'Large property (274 rooms) — feels more "resort" than "boutique".',
      'Cancún Hotel Zone location lacks the romance of Tulum jungle setting.',
      'Children are present unless you specifically book into the Adults-Only Beach Pool zone.',
      'Some rooms face inland — confirm Oceanfront category at booking.',
      'Hotel Zone restaurants outside the resort vary wildly in quality — best to eat in.'
    ],
    faqs: [
      ['Good for honeymooners?','Very good for short honeymoons (3–5 nights) where airport proximity matters. Less iconic than Mayakoba or Tulum but extremely convenient.'],
      ['Best time to visit?','November to April. Hurricane season heavily impacts Cancún directly — avoid June–October.'],
      ['Book in advance?','3 months for Oceanfront Suites in peak winter.'],
      ['Adults-only?','Mixed property but with a designated Adults-Only Beach Pool zone (18+).'],
      ['Best room type?','Oceanfront Suite Mayan Sand zone, or Beachfront Villa for ultimate privacy.'],
      ['How to get there?','CUN private transfer 15 min ($50–$80). Closest luxury resort to the airport.']
    ],
    email: 'Subject: Honeymoon inquiry — Nizuc Resort & Spa\n\nDear Reservations,\n\nWe would like to book an Oceanfront Suite in the Mayan Sand zone for [DATES]. Please confirm honeymoon turn-down, Adults-Only Beach Pool access, Indochine and Ramona dinner reservations, and Nizuc Spa couples\' hydrothermal package.\n\nThank you,\n[Names]'
  },
  {
    slug: 'conrad-tulum-riviera-maya',
    name: 'Conrad Tulum, Riviera Maya',
    destination: 'riviera-maya', country: 'mexico',
    seo_title: 'Conrad Tulum Honeymoon Review: Beachfront Luxury 2026',
    seo_desc: '349-room Conrad on the long Tulum-Cancún beach. Score 82/100, from $520/night. Honest verdict, suite pick, 7-night plan.',
    types: ['luxury','beach','family-friendly'], score: 82,
    breakdown: { adults_only:0, couples_pct:14, spa:11, award:10, pool:9, beach:9, room_service:8, stars:9, luxury:8 },
    stars: 5, min: 520, max: 2200, adults: false,
    amenities: ['beach','spa','pool','beachfront','butler','tequila-bar','rooftop','design-forward','kids-club','cenote-pool'],
    ta: 4.5, tac: false, couples: 76,
    verdict: 'Conrad Tulum opened in late 2022 — Hilton\'s ultra-luxury entry to the Riviera Maya, occupying a long beachfront stretch between Tulum and Akumal. The resort is architecturally ambitious — a Yucatecan reinterpretation of the cenote ringed by 349 rooms in pueblo-style towers, with a central pool that mirrors the cenote architecture. Six restaurants including Pasion (modern Mexican by chef Margarita Carrillo), the Italian Maria, and the rooftop tequila bar Yuun Tunich with panoramic views. The Conrad Spa is large and competent, with a Mayan-inspired temazcal ritual. The beach is private and sargassum-protected. Caveats: 349 rooms is large, and the Conrad feels noticeably more "branded mega-resort" than the boutique Tulum-strip hotels. Service is Hilton-corporate-polished rather than personalized. But for honeymooners who want full beachfront luxury at a serious price discount versus Belmond or Rosewood, with reliable Hilton mechanics and a strong location between Tulum town and Mayakoba, this is the smart play. The rooftop tequila bar at sunset is genuinely one of the best in Mexico.',
    best_room: 'Oceanfront King Suite (60 m²) with private terrace and direct beach view. Beachfront Villa with private plunge pool for the honeymoon dream. Avoid Tropical Garden View rooms — they back onto interior gardens with no sea view.',
    itinerary: [
      ['Arrival via Cancún','75-min CUN transfer to Conrad Tulum. Check-in with mezcal. Sunset on rooftop Yuun Tunich. Dinner at Pasion.'],
      ['Tulum ruins and beach','Early Tulum ruins (15 min south, 8am opening). Return for late breakfast. Beach day. Sunset dinner at Maria (Italian).'],
      ['Cenote private day','Private guide and snorkel at Dos Ojos (45 min). Picnic lunch. Afternoon spa. Dinner in-suite.'],
      ['Sian Ka\'an biosphere','Full-day Muyil drift snorkel and boat tour with CESiaK. Return at sunset. Tequila tasting at Yuun Tunich.'],
      ['Beach club excursion','Long day at Akiin Beach Club (15 min south) — Tulum\'s sargassum-free public beach club. Lunch and sun loungers. Return for sunset cocktails at the resort. Dinner at Pasion.'],
      ['Spa and pool','Full spa day — couples\' temazcal ritual and massage. Pool afternoon. Final dinner at the chef\'s table at Maria.'],
      ['Slow departure','Breakfast on terrace. CUN transfer for departure.']
    ],
    caveats: [
      '349 rooms — large resort feel, not boutique.',
      'Hilton-corporate service polish — efficient but less personal than Belmond or Rosewood.',
      'Children present in school holidays — book non-school-break weeks.',
      'Tropical Garden View rooms have no sea — confirm category at booking.',
      'Beach is private but adjacent to public Akumal stretch — visible boats and watercraft from beach.'
    ],
    faqs: [
      ['Good for honeymooners?','Good value choice — beachfront luxury at 40% under Belmond Maroma rates. Less boutique-iconic but very competent.'],
      ['Best time to visit?','November through April. November is the secret best month.'],
      ['Book in advance?','2–3 months for Oceanfront Suites; 4+ for Beachfront Villas with plunge pool.'],
      ['Adults-only?','No — genuinely mixed property. Avoid school holidays.'],
      ['Best room type?','Oceanfront King Suite as the entry, Beachfront Villa with plunge for the splurge.'],
      ['How to get there?','CUN private transfer 75 min ($150–$180). Or fly to Tulum (TQO) 25 min away.']
    ],
    email: 'Subject: Honeymoon inquiry — Conrad Tulum\n\nDear Reservations,\n\nWe would like to book an Oceanfront King Suite for [DATES]. Please confirm honeymoon turn-down, CUN transfer, Pasion priority dinner booking, and Conrad Spa couples\' temazcal ritual.\n\nThank you,\n[Names]'
  },
  {
    slug: 'hotel-esencia-xpu-ha-riviera-maya',
    name: 'Hotel Esencia',
    destination: 'riviera-maya', country: 'mexico',
    seo_title: 'Hotel Esencia Xpu-Ha: Estate Honeymoon Review 2026',
    seo_desc: '40-suite private estate on Riviera Maya\'s best beach. Score 92/100, from $1500/night. Verdict, suite pick, itinerary.',
    types: ['luxury','beach','boutique'], score: 92,
    breakdown: { adults_only:0, couples_pct:20, spa:13, award:14, pool:9, beach:10, room_service:10, stars:10, luxury:11 },
    stars: 5, min: 1500, max: 9000, adults: false,
    amenities: ['beach','spa','pool','private-estate','beachfront','butler','fine-dining','plunge-pools','jungle-spa','art-collection'],
    ta: 4.9, tac: true, couples: 92,
    verdict: 'Hotel Esencia is the cult-favorite — a 40-suite private estate on the Xpu-Ha beach between Playa del Carmen and Tulum, on what is consensus the finest sand on the Riviera Maya. It was the private estate of an Italian duchess before becoming a hotel in 2000, and the eccentric, art-filled, hyper-personal atmosphere has been preserved through every renovation. The owners genuinely live on-site. There is no resort feel — you stay in one of 40 suites and villas dispersed across 50 acres of jungle dropping to the beach, each with a butler. The food at Mistura (rated one of Latin America\'s 50 best by World\'s 50 Best Restaurants for several years running) is the most serious cooking on the Yucatán coast. The Itzam Mayan Spa is a private cenote in the jungle, used for couples\' rituals. Xpu-Ha beach is the only stretch of the Riviera Maya consistently free of sargassum due to the natural cove geometry and Esencia\'s permanent barriers. Caveats: the price is among the highest on the coast. The eccentric private-estate atmosphere is not for everyone — service is warm but slightly informal. There are no shops, no buzz, no scene; this is genuinely retreat. For honeymooners who want the single most personal, art-rich, food-driven luxury experience on the Riviera Maya, Esencia is unmatched.',
    best_room: 'Beachfront Two-Bedroom Suite for the honeymoon dream (180 m², direct beach, plunge pool, butler). The Beachfront One-Bedroom Suite is more affordable and equally beautiful. Avoid Garden Suites if you want beach proximity. Two private villas (Beach House and Jungle House) for the ultimate splurge.',
    itinerary: [
      ['Arrival via Cancún','60-min CUN private transfer. Welcomed by name at the gate with mezcal and a printed dossier of restaurant bookings. Settle into Beachfront Suite. Dinner at Mistura.'],
      ['Beach and Itzam cenote','Slow beach morning at Xpu-Ha — the finest sand on the coast. Long lunch at the beach restaurant. Couples\' Mayan cenote ritual at Itzam Spa. Dinner in-suite.'],
      ['Tulum and Hartwood','Late morning private car to Tulum. Lunch at Casa Jaguar. Tulum beach club afternoon. Hartwood for 7pm dinner. Late return.'],
      ['Cenote private day','Private guide and snorkel at Cenote Carwash (less-touristed than Dos Ojos). Picnic lunch from Esencia kitchen. Return mid-afternoon. Spa massage.'],
      ['Sian Ka\'an day','Full-day Muyil drift snorkel and biosphere boat with CESiaK. Return at sunset. In-villa private chef dinner on your suite terrace.'],
      ['Lazy beach day','Full day on Xpu-Ha with butler service. Long Mistura lunch on the beach. Sunset cocktails at the duchess\'s old library. Final tasting dinner at Mistura.'],
      ['Slow departure','Breakfast on your suite deck. Final swim at Xpu-Ha. CUN private transfer for departure.']
    ],
    caveats: [
      '40 suites means peak winter waitlists run 6–9 months. February books out 12 months ahead.',
      'Genuinely eccentric — service is warm but informal. Not for guests who want hotel-perfection.',
      'No nightlife, no scene, no shopping. Retreat in the truest sense.',
      'Children are present occasionally — the property is not adults-only but the atmosphere is adult.',
      'No spa walk-ins — Itzam rituals book days ahead.'
    ],
    faqs: [
      ['Good for honeymooners?','Outstanding. Consensus #1 on the Riviera Maya among in-the-know luxury travelers for over a decade.'],
      ['Best time to visit?','November to mid-April. Xpu-Ha\'s cove geometry makes it the most sargassum-resistant beach on the coast.'],
      ['Book in advance?','6–12 months for Beachfront Suites. February books out almost a year ahead.'],
      ['Adults-only?','No formal policy, but the atmosphere and clientele are firmly adult and honeymoon-oriented.'],
      ['Best room type?','Beachfront One-Bedroom Suite as entry; Beachfront Two-Bedroom or Beach House for the splurge.'],
      ['How to get there?','CUN private transfer 60 min ($120–$160). Hotel arranges.']
    ],
    email: 'Subject: Honeymoon inquiry — Hotel Esencia\n\nDear Reservations,\n\nWe would like to book a Beachfront One-Bedroom Suite for our honeymoon [DATES]. Please confirm honeymoon turn-down, Itzam Mayan Spa couples\' cenote ritual, Mistura priority dining reservations, and private CUN transfer.\n\nThank you,\n[Names]'
  },
  {
    slug: 'be-tulum-riviera-maya',
    name: 'Be Tulum',
    destination: 'riviera-maya', country: 'mexico',
    seo_title: 'Be Tulum Honeymoon Review: Adults-Only Jungle Beach 2026',
    seo_desc: 'Adults-only 64-suite jungle beach icon on Tulum strip. Score 87/100, from $700/night. Honest verdict, suite pick.',
    types: ['boutique','beach','wellness'], score: 87,
    breakdown: { adults_only:10, couples_pct:18, spa:11, award:10, pool:8, beach:9, room_service:7, stars:9, luxury:8 },
    stars: 5, min: 700, max: 3800, adults: true,
    amenities: ['adults-only','beach','spa','plunge-pools','jungle','candlelit','beachfront','swing-bar','open-air','mezcal-bar'],
    ta: 4.6, tac: true, couples: 90,
    verdict: 'Be Tulum is the original Tulum-strip icon — the property that defined the global "jungle meets beach, candlelit, all-natural materials, adults-only" aesthetic that has been copied by a thousand resorts since. 64 suites and villas on the Tulum beach road, mostly with private plunge pools, all walled with vines and driftwood, lit at night by what feels like a thousand candles. It is adults-only. The beach is one of the loveliest stretches of the Tulum zone. The Yäan Wellness spa is genuinely excellent. The hotel\'s sand-floor bar with hammocks is among the most photographed bars in Mexico. Caveats: the Tulum strip\'s sargassum issue varies year to year, and Be Tulum\'s barriers are good but not Belmond-level. The grid-power-vs-solar setup means some suites are warmer than others in summer (visit Nov–March). Service is laid-back-Tulum, not Belmond-precise. But for the original jungle-beach Tulum honeymoon — and for the iconic Be Tulum candlelit-bar evenings — this is the address.',
    best_room: 'Beachfront Suite with private plunge pool (90 m², direct beach view from the bed). Jungle Suite with plunge for the inland-private experience. Avoid garden-view standard rooms — they miss the Tulum point.',
    itinerary: [
      ['Arrival via Cancún','90-min CUN transfer to Tulum strip. Greeted with mezcal and copal-incense. Settle into Beachfront Suite. Sunset at the sand-floor swing bar. Dinner at Be Tulum\'s in-house restaurant.'],
      ['Beach and Tulum ruins','Tulum ruins at 8am opening (10 min north). Private guide. Return for late breakfast. Beach day. Sunset at the bar. Hartwood dinner.'],
      ['Cenote private day','Private guide and snorkel at Gran Cenote (15 min). Picnic lunch. Afternoon Yäan spa couples\' massage. Dinner at Posada Margherita.'],
      ['Sian Ka\'an','Full-day Muyil drift snorkel and biosphere boat. Return at sunset. Casa Jaguar dinner with live jazz.'],
      ['Beach and bar','Slow morning. Floating breakfast in your plunge pool. Long lunch at Mateo\'s Tulum nearby. Sunset cocktails at the iconic swing bar. Dinner at Arca (Tulum).'],
      ['Spa day','Full day at Yäan Wellness — hammam, couples\' temazcal, massage. Final dinner at Hartwood (if you booked the second seating) or at Cetli for the local-Mexican option.'],
      ['Slow departure','Late breakfast at your plunge pool. Final swim in the Tulum Caribbean. CUN transfer for departure.']
    ],
    caveats: [
      'Tulum strip sargassum varies — Be Tulum has barriers but not at Belmond Maroma scale.',
      'Solar/generator power means some suites warmer than others in summer; book Nov–March.',
      'Service is laid-back Tulum, not Belmond-precise.',
      'The strip is busy and increasingly built-up — quieter walks toward Sian Ka\'an end.',
      'Wifi is intentionally weak — embrace the digital detox or bring backup.'
    ],
    faqs: [
      ['Good for honeymooners?','Excellent — adults-only, jungle-beach aesthetic, plunge pools, candlelit at night. The definitive Tulum honeymoon.'],
      ['Best time to visit?','November to mid-April. Outside that window the heat and sargassum make Tulum strip miserable.'],
      ['Book in advance?','4–6 months for Beachfront Suites with plunge pool in winter peak.'],
      ['Adults-only?','Yes — strict adults-only, 18+ across the property.'],
      ['Best room type?','Beachfront Suite with private plunge pool.'],
      ['How to get there?','CUN private transfer 90 min ($150–$180). Or Tulum airport (TQO) 20 min ($60).']
    ],
    email: 'Subject: Honeymoon inquiry — Be Tulum\n\nDear Reservations,\n\nWe would like to book a Beachfront Suite with plunge pool for our adults-only honeymoon [DATES]. Please confirm honeymoon turn-down, Yäan Wellness couples\' temazcal, CUN transfer, and Hartwood reservation assistance (we will book through the official channel but appreciate verification).\n\nThank you,\n[Names]'
  },
  {
    slug: 'mukan-resort-sian-kaan-riviera-maya',
    name: 'Mukan Resort',
    destination: 'riviera-maya', country: 'mexico',
    seo_title: 'Mukan Resort Sian Ka\'an: Biosphere Honeymoon 2026',
    seo_desc: '9-villa private resort in Sian Ka\'an biosphere, accessible only by boat. Score 86/100, from $1800/night.',
    types: ['boutique','beach','adventure'], score: 86,
    breakdown: { adults_only:0, couples_pct:19, spa:10, award:11, pool:7, beach:10, room_service:9, stars:9, luxury:11 },
    stars: 5, min: 1800, max: 5500, adults: false,
    amenities: ['biosphere','private-beach','boat-access','off-grid','full-board','spa','kayaks','fishing','solar','wilderness'],
    ta: 4.9, tac: true, couples: 95,
    verdict: 'Mukan is the only true luxury hotel inside the Sian Ka\'an UNESCO biosphere — 9 thatched-roof villas on a 30-acre private peninsula reachable only by boat or sand-track 4x4 from Tulum. There are no neighbors. There is no light pollution. The wifi is intentionally absent except in the main lodge. The Caribbean is on one side, the mangrove lagoon on the other. The villas are walled, candlelit at night, with king-size palapa beds, copper bathtubs, and private outdoor showers. The kitchen is full-board with chef Pablo cooking three meals a day from what arrives by boat or is foraged from the biosphere. Activities — bonefishing in the lagoon, fly-fishing the flats, snorkeling the reef directly offshore, kayaking the mangroves at dawn — are included. This is the Riviera Maya for couples who want to disappear. Caveats: the journey in is genuinely arduous (90-min sand track from Tulum or 2h by boat from Punta Allen). There is no spa pampering, no restaurant choice, no town to walk to. Some guests find it transcendent; others find a week too long. Best for honeymooners who specifically want wilderness over polish and have read the Mukan Instagram carefully.',
    best_room: 'Mukan Villa (1-bedroom beachfront, 80 m², private plunge pool, direct sand access). Step up to the Penthouse Villa or Beach Villa for size; consider the Lagoon Villa for the mangrove-side experience over the beachfront. All 9 villas are exceptional.',
    itinerary: [
      ['Arrival via Cancún and Tulum','90-min CUN transfer to Tulum, then 90-min sand-track 4x4 (Mukan-arranged) into the biosphere. Welcomed at the lodge with hibiscus tea. Settle into Mukan Villa. Sunset on the beach. First dinner with chef Pablo at the lodge.'],
      ['Snorkel and kayak','Snorkel the reef directly offshore at 8am. Late breakfast. Kayak the mangrove lagoon. Lunch at the lodge. Beach reading afternoon. Bonefishing lesson at sunset.'],
      ['Sian Ka\'an exploration','Full-day Sian Ka\'an boat with Mukan guide — Muyil canal drift snorkel, lagoon mangroves, lunch at a remote sand island. Return at sunset. Stargazing with telescope after dinner.'],
      ['Fishing or beach','Choice: half-day fly-fishing the flats (legendary bonefish water) or full beach day. Lunch on the beach. Private massage in the villa. Dinner at the lodge.'],
      ['Birdwatching dawn','Pre-dawn boat with biosphere guide — frigatebirds, roseate spoonbills, ospreys. Late breakfast. Lazy beach day. Sunset cocktails on the lodge deck.'],
      ['Beach and lagoon','Slow morning. Floating breakfast. Long beach walk. Lunch on the sand. Final dinner with chef Pablo.'],
      ['Slow departure','Boat or 4x4 back to Tulum. CUN transfer for late-afternoon flight. (Plan a long buffer — biosphere conditions can delay departure.)']
    ],
    caveats: [
      'Access is by 4x4 sand track (90 min from Tulum) or boat. Plan minimum 2-day departure buffer.',
      'No wifi in villas, intermittent in lodge. No phone signal. Genuine off-grid.',
      'Full-board only — no restaurant choice. Single chef cooking three meals a day.',
      'Solar power — limited hair-dryers, no air-con in some villas (sea breeze cools).',
      'Some guests find a week too long — three or four nights paired with a Tulum-strip stay is the safe play for first-timers.'
    ],
    faqs: [
      ['Good for honeymooners?','Outstanding for the specific couple — wilderness, no neighbors, total disappearance. Read recent reviews to gauge fit.'],
      ['Best time to visit?','November to mid-April. Mukan closes briefly each summer.'],
      ['Book in advance?','6+ months. Only 9 villas. February sells out 9 months ahead.'],
      ['Adults-only?','No formal policy but functionally adult — children are exceptionally rare.'],
      ['Best room type?','Mukan Villa as entry, Lagoon Villa for mangrove side, Beach Villa for splurge.'],
      ['How to get there?','CUN transfer to Tulum (90 min), then Mukan-arranged 4x4 sand track or boat into the biosphere (90 min).']
    ],
    email: 'Subject: Honeymoon inquiry — Mukan Resort\n\nDear Reservations,\n\nWe would like to book a Mukan Villa for our honeymoon [DATES] (4 nights). Please confirm full-board pricing, access logistics from Cancún, included activities, and any honeymoon dining set-ups (private beach dinner with chef Pablo).\n\nThank you,\n[Names]'
  },
  {
    slug: 'casa-malca-tulum-riviera-maya',
    name: 'Casa Malca, Tulum',
    destination: 'riviera-maya', country: 'mexico',
    seo_title: 'Casa Malca Tulum Honeymoon Review: Art Beach Hotel 2026',
    seo_desc: '70-suite art-filled jungle beach hotel — Pablo Escobar\'s old mansion, now a museum-hotel. Score 83/100, from $550/night.',
    types: ['boutique','beach','design'], score: 83,
    breakdown: { adults_only:0, couples_pct:17, spa:9, award:9, pool:8, beach:9, room_service:8, stars:9, luxury:8 },
    stars: 5, min: 550, max: 2800, adults: false,
    amenities: ['art-collection','beach','spa','plunge-pools','jungle','beachfront','design-forward','open-air','curtain-room','mezcal-bar'],
    ta: 4.6, tac: true, couples: 84,
    verdict: 'Casa Malca occupies the former Tulum beach mansion of Pablo Escobar (yes, that one), bought and transformed by New York art dealer Lio Malca into a 70-suite art-hotel on the Tulum strip. The aesthetic is unlike anything else on the Riviera Maya: white curtains everywhere (the famous "curtain-room" is the most photographed space in Tulum), sculpture by KAWS and Warhol in the gardens, candlelit jungle paths, and Tulum-bohemian-meets-Soho-gallery atmosphere. The beach is full-strip Tulum quality, with sargassum varying by season. The spa is good (not great). The food at Ambrosia is genuinely strong — Mexican-Mediterranean by chef Pedro Abascal. The hotel is family-friendly officially but functionally adult most of the year. Caveats: the design-forward atmosphere is not for everyone; some guests find it pretentious. Service is laid-back Tulum, not corporate. Wifi and grid power are intermittent in the suites. For honeymooners who specifically want a design-art-driven Tulum stay with the most photographable spaces of any hotel on the strip — and who have the patience for Tulum infrastructure — this is the unique choice.',
    best_room: 'Beachfront Suite with private plunge pool (80 m²) — sand-floor terrace and direct beach. Curtain Room for the iconic Tulum-Instagram shoot (only 1 unit, books out 12 months ahead). Garden Suites are charming but miss the beach.',
    itinerary: [
      ['Arrival via Cancún','90-min CUN transfer. Casa Malca welcomed at the iconic white-curtain entrance. Settle into Beachfront Suite. Sunset cocktails at the basement art bar. Dinner at Ambrosia.'],
      ['Beach and ruins','Tulum ruins at 8am opening. Return for late breakfast. Beach day. Photo session in the curtain rooms (book the hotel photographer for 1h, $150). Dinner at Posada Margherita.'],
      ['Cenote private day','Private guide and snorkel at Gran Cenote. Picnic lunch. Afternoon spa. Dinner at Casa Jaguar.'],
      ['Sian Ka\'an day','Full-day biosphere boat. Return at sunset. Hartwood dinner (book ahead).'],
      ['Beach day and art tour','Slow morning. Private tour of the Casa Malca art collection with the curator (free, by request). Long lunch at Mateo\'s. Sunset cocktails at Be Tulum\'s swing bar nearby. Dinner at Arca.'],
      ['Spa and pool','Spa morning. Beach afternoon. Final tasting dinner at Ambrosia.'],
      ['Slow departure','Breakfast at your plunge pool. Final swim. CUN transfer for departure.']
    ],
    caveats: [
      'Design-forward aesthetic divides guests — preview Instagram carefully before committing.',
      'Tulum strip sargassum varies — Casa Malca has barriers but not aggressive.',
      'Wifi and grid power intermittent — embrace digital detox.',
      'Service is laid-back Tulum, not corporate-polished.',
      'Curtain Room books 12 months ahead and is small (40 m²).'
    ],
    faqs: [
      ['Good for honeymooners?','Excellent for design-driven couples — most photographable hotel in Tulum, art collection is genuinely museum-grade.'],
      ['Best time to visit?','November through mid-April. Avoid May–October Tulum heat.'],
      ['Book in advance?','3–4 months for Beachfront Suites; 12+ months for the Curtain Room.'],
      ['Adults-only?','No formal restriction, but the atmosphere is functionally adult outside school holidays.'],
      ['Best room type?','Beachfront Suite with plunge pool; Curtain Room for the icon (and the photos).'],
      ['How to get there?','CUN private transfer 90 min ($150–$180), or TQO 20 min.']
    ],
    email: 'Subject: Honeymoon inquiry — Casa Malca\n\nDear Reservations,\n\nWe would like to book a Beachfront Suite with plunge pool for [DATES]. If the Curtain Room is available we would consider an upgrade for one night. Please confirm honeymoon turn-down, private art-collection tour with the curator, and Ambrosia priority dining.\n\nThank you,\n[Names]'
  },
  // ============== TASMANIA (9 more — Saffire already exists) ==============
  {
    slug: 'pumphouse-point-tasmania',
    name: 'Pumphouse Point',
    destination: 'tasmania', country: 'australia',
    seo_title: 'Pumphouse Point Lake St Clair: Wilderness Honeymoon 2026',
    seo_desc: 'Converted 1940s pumphouse on stilts in Lake St Clair. 18 rooms, all-inclusive. Score 91/100, from $850/night.',
    types: ['boutique','wellness','adventure'], score: 91,
    breakdown: { adults_only:0, couples_pct:20, spa:8, award:14, pool:0, beach:5, room_service:9, stars:9, luxury:10 },
    stars: 5, min: 850, max: 1800, adults: false,
    amenities: ['all-inclusive','lakefront','wilderness','full-board','larder','heritage','off-grid-feel','fireplaces','hiking','world-heritage'],
    ta: 4.9, tac: true, couples: 94,
    verdict: 'Pumphouse Point is the most architecturally singular hotel in Australia — a 1940s hydroelectric pumphouse on stilts at the end of a 250-metre pier in Lake St Clair, in the heart of Tasmania\'s World Heritage central highlands. The 18 rooms (12 in the pumphouse, 6 in the shorehouse) have been converted by architect Cumulus Studio into one of the most awarded heritage adaptations in the country. The setting is genuinely otherworldly — Australia\'s deepest natural lake reflecting the alpine wilderness, kookaburras laughing at dawn, no light pollution. The stay is full-board: cooked breakfast, picnic lunch (delivered to your boat or hiking pack), three-course dinner with Tasmanian wines, and the famous "larder" — a self-serve bar and pantry in the pumphouse with full-strength Tasmanian whisky, pinot, and antipasti, all included. Caveats: there is no spa, no pool, no swimming (the lake is cold year-round). Wifi is intermittent. The location is 2.5h from Hobart or Launceston with no nearby town. The architecturally singular Pumphouse rooms have heritage quirks — narrow doorways, sloping floors. But for honeymooners who want the most singular wilderness-romantic stay in Australia, paired with truly exceptional all-inclusive catering, this is the iconic choice.',
    best_room: 'Pumphouse Lake-Facing Room (the 1940s pumphouse itself, 5 rooms with king bed and Lake St Clair view through original industrial windows) — the iconic honeymoon room. Shorehouse Loft for more space and ease of access. Avoid Shorehouse standard rooms — you came for the pumphouse.',
    itinerary: [
      ['Arrival from Hobart or Launceston','2.5h scenic drive from Hobart via Mt Field National Park, or 2h from Launceston. Arrival at the shorehouse for orientation. Walk the pier to the pumphouse in the late afternoon. Larder cocktails. Three-course dinner in the pumphouse with the fireplace going.'],
      ['Cradle Mountain Dove Lake','Hotel-arranged day to Cradle Mountain (90 min drive). Walk the Dove Lake circuit (2h, flat boardwalk with Cradle Mountain reflected in the water). Lunch at Cradle Mountain Lodge. Return for sunset on the lake.'],
      ['Lake and walking','Half-day Lake St Clair guided boat (with the warden, included) — the lake is 17km long and Australia\'s deepest. Lunch packed by the kitchen. Afternoon walk on the Overland Track. Larder evening, dinner at the pumphouse.'],
      ['Drive through the Walls of Jerusalem','Day drive south through the Walls of Jerusalem World Heritage area. Picnic at a tarn. Return for spa-style soak in your room\'s tub (with Aesop), and dinner.'],
      ['Lazy lake day','Slow morning. Larder breakfast. Reading by the fireplace. Long lakeside walk. Late-afternoon kayak (if conditions allow). Final dinner at the pumphouse.'],
      ['Tasmanian whisky drive','Drive 90 min north toward the Derwent Valley for whisky tasting at Lark, Sullivans Cove, and Belgrove. Return for last dinner.'],
      ['Slow departure','Final breakfast in the pumphouse looking at the lake. 2.5h drive to Hobart or Launceston for afternoon flight.']
    ],
    caveats: [
      'No spa, no pool, no swimming. Wilderness lodge, not resort.',
      'Wifi intermittent in pumphouse rooms. Embrace it.',
      'Pumphouse rooms have heritage quirks — narrow doors, sloping floors, no air-con (not needed at altitude).',
      'Weather is changeable — snow possible May–September, rain possible any month.',
      '2.5h from either airport with no nearby town. Plan the drive.'
    ],
    faqs: [
      ['Good for honeymooners?','Outstanding for couples who want wilderness, architecture, and zero distractions. Single most architecturally distinctive hotel in Australia.'],
      ['Best time to visit?','December–March for warm days, long evenings. April–May for autumn light. June–August for cosy fireplace-and-whisky retreats.'],
      ['Book in advance?','6+ months for Pumphouse Lake-Facing Rooms in summer peak.'],
      ['Adults-only?','No formal restriction. Children rare given the setting and remoteness.'],
      ['Best room type?','Pumphouse Lake-Facing Room for the icon. Shorehouse Loft for the splurge with more space.'],
      ['How to get there?','Drive 2.5h from Hobart or 2h from Launceston. Hire a car at either airport.']
    ],
    email: 'Subject: Honeymoon inquiry — Pumphouse Point\n\nDear Reservations,\n\nWe would like to book a Pumphouse Lake-Facing Room for our honeymoon [DATES]. Please confirm full-board inclusions, honeymoon arrival amenity (perhaps a Tasmanian sparkling and fireplace turn-down), and any included guided activities.\n\nThank you,\n[Names]'
  },
  {
    slug: 'henry-jones-art-hotel-hobart-tasmania',
    name: 'The Henry Jones Art Hotel',
    destination: 'tasmania', country: 'australia',
    seo_title: 'Henry Jones Art Hotel Hobart: Heritage Honeymoon 2026',
    seo_desc: '56-room heritage art-hotel on Hobart waterfront. Score 84/100, from $450/night. Honest verdict, suite pick, 7-night itinerary.',
    types: ['boutique','city','design'], score: 84,
    breakdown: { adults_only:0, couples_pct:16, spa:9, award:11, pool:0, beach:0, room_service:9, stars:9, luxury:9 },
    stars: 5, min: 450, max: 1400, adults: false,
    amenities: ['waterfront','art-collection','heritage','fine-dining','city','spa-treatments','design-forward','bar','library','close-to-mona'],
    ta: 4.7, tac: true, couples: 86,
    verdict: 'The Henry Jones Art Hotel occupies the former IXL Jam Factory on Hobart\'s historic waterfront — Australia\'s first dedicated art-hotel, opened in 2004 after a meticulous conversion of the 1820s sandstone warehouses. 56 rooms and suites, each with original Tasmanian artwork (the hotel holds the largest hotel art collection in Australia, rotating exhibitions across the public spaces and corridors). The location is unbeatable for Hobart — 30 metres from the MONA fast-ferry dock, walking distance to Salamanca Market, Battery Point, and the entire restaurant scene. The Henry\'s restaurant in the soaring atrium is the most architecturally dramatic dining space in the city. Caveats: the heritage warehouse rooms vary significantly in size and configuration — some are stunning, some are quirky and small. No pool. The waterfront location is brilliant by day, busy with cruise tourists in summer. For honeymooners spending 2–3 nights in Hobart as part of a Tasmanian circuit (typically pairing with Saffire or Pumphouse Point), this is the obvious city base.',
    best_room: 'Heritage Spa Suite with the freestanding stone bath, original warehouse beams, and harbour view (request a top-floor unit). Step up to The Atrium Suite for the architectural showcase room. Standard Heritage Rooms vary in quality — request a corner unit at booking.',
    itinerary: [
      ['Arrival in Hobart','Fly in to Hobart (HBA). 15-min taxi to the waterfront. Check-in with Tasmanian sparkling at Henry\'s. Walk Salamanca Place. Dinner at Templo or Aloft.'],
      ['MONA full day','MONA Roma fast ferry from Brooke St (3 min walk from hotel) at 9:30am. Full day at MONA — galleries, lunch at The Source, wine tasting at Moorilla. Return at 4pm. Dinner at Franklin.'],
      ['Salamanca Market and Battery Point','Saturday-only Salamanca Market 8am–3pm. Walk Kelly\'s Steps to Battery Point. Lunch at Jackman & McRoss. Afternoon Mt Wellington drive. Dinner at Aloft.'],
      ['Tasman Peninsula day','Drive 1.5h east to Port Arthur historic site. Lunch at Pennicott Wilderness Journeys after the morning boat tour to the sea cliffs. Return for spa treatment. Dinner at Brufa.'],
      ['Bruny Island day','Hotel-arranged Bruny Island Cruise day — high-speed boat under the sea cliffs, wildlife, oysters and lunch. Return at 6pm. Light dinner at the bar.'],
      ['Whisky and tasting','Tasmanian whisky trail by private car — Lark, Sullivans Cove, Old Kempton. Late lunch at Stillwater on the way to Launceston. Return evening. Final tasting dinner at Henry\'s.'],
      ['Slow departure','Slow breakfast in the atrium. Final waterfront walk. HBA transfer for departure.']
    ],
    caveats: [
      'Heritage warehouse rooms vary significantly — request a renovated category at booking.',
      'No pool — this is a city heritage hotel, not a resort.',
      'Waterfront can be busy with cruise tourists Dec–March.',
      'Some standard rooms are small and quirky — pay up for Heritage Spa Suite or Atrium Suite.',
      'Wifi reliable but rooms with thick stone walls have weaker signal — use the lobby for video calls.']
    ,
    faqs: [
      ['Good for honeymooners?','Very good as Hobart base — best location, most distinctive architecture, walking access to everything.'],
      ['Best time to visit?','December–March for full operations and long evenings. April–May for autumn light. Year-round-viable.'],
      ['Book in advance?','2–3 months for Heritage Spa Suites. Dark Mofo (June) and Taste of Tasmania (Jan) sell out.'],
      ['Adults-only?','No, but the heritage atmosphere and city location are firmly adult.'],
      ['Best room type?','Heritage Spa Suite or Atrium Suite. Avoid standard Heritage Rooms unrenovated.'],
      ['How to get there?','15-min taxi from Hobart airport (HBA).']
    ],
    email: 'Subject: Honeymoon inquiry — The Henry Jones Art Hotel\n\nDear Reservations,\n\nWe would like to book a Heritage Spa Suite for [DATES]. Please confirm an upper-floor harbour-view unit, honeymoon arrival amenity, dining reservations for Henry\'s, and the MONA ferry ticket arrangement.\n\nThank you,\n[Names]'
  },
  {
    slug: 'macq-01-hobart-tasmania',
    name: 'MACq 01',
    destination: 'tasmania', country: 'australia',
    seo_title: 'MACq 01 Hobart Honeymoon Review: Storytelling Hotel 2026',
    seo_desc: '114-room waterfront storytelling hotel. Score 82/100, from $400/night. Honest verdict, suite pick, Hobart itinerary.',
    types: ['boutique','city','design'], score: 82,
    breakdown: { adults_only:0, couples_pct:14, spa:8, award:11, pool:0, beach:0, room_service:9, stars:9, luxury:9 },
    stars: 5, min: 400, max: 1100, adults: false,
    amenities: ['waterfront','storytelling','heritage','fine-dining','city','design-forward','bar','library','marina-view','close-to-mona'],
    ta: 4.7, tac: true, couples: 82,
    verdict: 'MACq 01 opened in 2017 next door to the Henry Jones, designed around a single creative concept — every one of the 114 rooms is themed around a real Tasmanian character (the bushranger, the convict surgeon, the whaler, the suffragette), with that person\'s biography on the door and an artifact in the room. Sounds gimmicky on paper; in practice it\'s the most thoughtfully curated hotel concept in Australia. The architecture is contemporary Tasmanian — local stone, blackbutt timber, oversized windows looking onto Hobart\'s marina. The restaurant Old Wharf is excellent waterfront dining. The Lobby bar serves the largest Tasmanian whisky selection in the world. Caveats: at 114 rooms it\'s larger and slightly less personal than the Henry Jones. The storytelling-theme rooms are not for everyone — some find the conceit charming, others want a plain hotel. But for honeymooners who want a thoughtfully designed waterfront base with the strongest Tasmanian-character cocktail bar in the country, this is the smart Hobart pick. Walking distance to MONA ferry, Salamanca, Battery Point, and every serious Hobart restaurant.',
    best_room: 'Storyteller Spa Suite with freestanding bath and marina view (120 m²). Storyteller King with marina view as the entry. Avoid Storyteller Lifestyle (rear-facing, no view).',
    itinerary: [
      ['Arrival in Hobart','HBA to MACq 01 (15 min taxi). Welcome whisky in your room from Tasmanian distillery. Sunset on the marina deck. Dinner at Templo (5 min walk).'],
      ['MONA day','MONA Roma ferry from the dock (5 min walk). Full day at MONA. Return at 4pm. Sunset cocktails at MACq Lobby bar. Dinner at Franklin.'],
      ['Salamanca and Battery Point','Saturday Salamanca Market 8am–3pm. Kelly\'s Steps to Battery Point. Lunch at Jackman & McRoss. Afternoon Mt Wellington drive. Dinner at Aloft.'],
      ['Tasman Peninsula','Drive to Port Arthur (1.5h). Pennicott sea-cliff boat tour. Return for spa. Dinner at Brufa.'],
      ['Bruny Island','Bruny Island full-day cruise. Return at 6pm. Light dinner at MACq.'],
      ['Whisky day','Tasmanian whisky trail tour (Old Kempton, Lark, Sullivans Cove). Lunch at Stillwater. Final dinner at Old Wharf at MACq.'],
      ['Slow departure','Breakfast. Final waterfront walk. HBA departure.']
    ],
    caveats: [
      'Storytelling-theme rooms are a love-it-or-leave-it concept — preview rooms online.',
      '114 rooms feels less boutique than Henry Jones next door.',
      'No pool or spa beyond in-room treatments.',
      'Some rear-facing rooms have no view — confirm marina-facing at booking.',
      'Waterfront busy with cruise tourists in Tasmanian summer.'
    ],
    faqs: [
      ['Good for honeymooners?','Good — best Hobart waterfront location alongside Henry Jones, with stronger bar program.'],
      ['Best time to visit?','December–March for summer Hobart. Dark Mofo (June) for the alternative-honeymoon move.'],
      ['Book in advance?','6 weeks for Storyteller Spa Suites with marina view. Earlier for Dark Mofo and Taste of Tasmania.'],
      ['Adults-only?','No, but firmly adult atmosphere.'],
      ['Best room type?','Storyteller Spa Suite marina view, or Storyteller King with marina view.'],
      ['How to get there?','15-min taxi from HBA.']
    ],
    email: 'Subject: Honeymoon inquiry — MACq 01\n\nDear Reservations,\n\nWe would like to book a Storyteller Spa Suite with marina view for [DATES]. Please confirm honeymoon arrival amenity (Tasmanian whisky tasting), Old Wharf dinner reservation, and MONA ferry tickets.\n\nThank you,\n[Names]'
  },
  {
    slug: 'cradle-mountain-lodge-tasmania',
    name: 'Cradle Mountain Lodge',
    destination: 'tasmania', country: 'australia',
    seo_title: 'Cradle Mountain Lodge: Alpine Honeymoon Review 2026',
    seo_desc: '86-cabin alpine wilderness lodge at the gateway to Cradle Mountain NP. Score 81/100, from $550/night.',
    types: ['boutique','wellness','adventure'], score: 81,
    breakdown: { adults_only:0, couples_pct:14, spa:12, award:9, pool:0, beach:0, room_service:8, stars:8, luxury:9 },
    stars: 4, min: 550, max: 1600, adults: false,
    amenities: ['wilderness','spa','fireplaces','hiking','cabins','fine-dining','wildlife','close-to-dove-lake','king-billy-suites','alpine'],
    ta: 4.6, tac: true, couples: 81,
    verdict: 'Cradle Mountain Lodge is the original wilderness lodge at the gateway to Cradle Mountain–Lake St Clair National Park, with 86 cabins (Pencil Pine to King Billy Suite tiers) scattered across the alpine forest at the park entrance. The lodge is operated by Peppers and has been the iconic Cradle Mountain base since the 1980s, with continuous renovations keeping the King Billy and Spa Suite tiers genuinely luxury-grade. The Waldheim Alpine Spa is one of the best wilderness spas in Australia, with hot stone, Tasmanian botanical massages, and a forest sauna. The main lodge restaurant — Highland — does serious Tasmanian fare with wood-fire roasts and a 200-bottle Tasmanian wine cellar. Cradle Mountain itself is 8 minutes by shuttle bus from the lodge; Dove Lake another 5 minutes. Caveats: the wider Cradle Mountain visitor area is busy in summer — day-trippers from Launceston and cruise ships pile in. The lower-tier Pencil Pine cabins are nice but not honeymoon-luxe. Book a King Billy Spa Suite specifically. The lodge can feel slightly corporate compared to Pumphouse Point\'s singular architecture, but its setting and the Waldheim spa make it the practical alpine honeymoon base.',
    best_room: 'King Billy Suite — 80 m² freestanding cabin with double-spa bath, in-room fireplace, and forest view (45 cabins of this tier). Pencil Pine Cabins are entry-level and not honeymoon-grade. Spa Suite is the middle tier and acceptable. Spa Suite King is the value pick.',
    itinerary: [
      ['Arrival from Launceston','2h drive from Launceston. Check-in at Highland reception. King Billy Suite welcome with sparkling wine and fireplace already lit. Dinner at Highland with Tasmanian wine pairing.'],
      ['Dove Lake circuit','Shuttle to Dove Lake (10 min). 2h walk around the lake with Cradle Mountain reflected (flat boardwalk for half). Picnic lunch packed by lodge. Return for spa-style soak. Dinner at Highland.'],
      ['Cradle Mountain summit attempt','For experienced hikers — full-day Cradle Mountain summit (10km, 1080m elevation gain, 8h). For everyone else, the Marion\'s Lookout half-day walk (4km, 3h). Return for spa massage.'],
      ['Wineglass Bay drive','Long day — 3h drive east to Coles Bay. Wineglass Bay lookout walk. Lunch at Devil\'s Corner cellar door. Return at sunset. Dinner at Highland.'],
      ['Spa and wildlife','Slow morning. Full Waldheim spa package — hot stone, hydrotherapy circuit, couples\' massage. Evening wildlife walk with ranger (included) — wombats, pademelons, possums. Dinner.'],
      ['Whisky drive','Drive south to Belgrove distillery (90 min). Whisky tasting. Lunch at Brufa or back at the lodge. Final dinner at Highland with the chef\'s tasting.'],
      ['Slow departure','Breakfast. Final forest walk. Drive to Launceston or Hobart for departure.']
    ],
    caveats: [
      'Pencil Pine cabins are not honeymoon-grade — book King Billy Suite or Spa Suite.',
      'Cradle Mountain day-trippers crowd the visitor area mid-day in summer.',
      'Weather changes fast — snow possible May–October at elevation.',
      'Mobile reception is poor; wifi adequate in the lodge, intermittent in cabins.',
      'Lodge can feel slightly corporate vs Pumphouse Point\'s singular setting.'
    ],
    faqs: [
      ['Good for honeymooners?','Good — King Billy Suite with fireplace and forest setting is genuinely romantic.'],
      ['Best time to visit?','December–March for warm walking. May–August for fireplace-and-snow honeymoon. April for autumn light.'],
      ['Book in advance?','3–4 months for King Billy Suites in peak summer and snow weeks.'],
      ['Adults-only?','No — family-friendly with junior ranger program. Book King Billy Suites in non-school-holiday weeks for quiet.'],
      ['Best room type?','King Billy Suite. Spa Suite as compromise. Avoid Pencil Pine.'],
      ['How to get there?','2h drive from Launceston (LST) or 4h from Hobart (HBA). Hire a car.']
    ],
    email: 'Subject: Honeymoon inquiry — Cradle Mountain Lodge\n\nDear Reservations,\n\nWe would like to book a King Billy Suite for [DATES]. Please confirm fireplace turn-down, Waldheim Spa couples\' package availability, Highland dinner reservations, and ranger-led evening wildlife walk.\n\nThank you,\n[Names]'
  },
  {
    slug: 'the-tasman-hobart-tasmania',
    name: 'The Tasman, a Luxury Collection Hotel, Hobart',
    destination: 'tasmania', country: 'australia',
    seo_title: 'The Tasman Hobart Honeymoon Review: Luxury Collection 2026',
    seo_desc: '152-room Luxury Collection waterfront hotel — 2021 opening, three architectural eras. Score 83/100, from $480/night.',
    types: ['luxury','city','design'], score: 83,
    breakdown: { adults_only:0, couples_pct:14, spa:10, award:10, pool:5, beach:0, room_service:9, stars:10, luxury:9 },
    stars: 5, min: 480, max: 1500, adults: false,
    amenities: ['waterfront','spa','indoor-pool','heritage','fine-dining','city','design-forward','bar','marina-view','close-to-mona'],
    ta: 4.7, tac: true, couples: 84,
    verdict: 'The Tasman opened in late 2021 — Hobart\'s newest serious luxury hotel, occupying three different architectural eras across a single block on the Parliament Square waterfront: an 1840s sandstone heritage building, a 1940s art deco wing, and a contemporary glass-and-stone new build. 152 rooms across the three. The Marriott-owned Luxury Collection brand brings consistent polish that the older Hobart hotels can\'t match — proper room service, full spa, indoor lap pool, and the city\'s first hotel cocktail bar (Mary Mary) at international level. The restaurant Peppina by chef Massimo Mele is one of the city\'s top three. The Tasman is two blocks from the MONA ferry, walking to Salamanca and Battery Point. Caveats: the three-era architecture means rooms vary radically — the heritage rooms (1840s sandstone) have the most character, the new-build rooms have the best views. Service can feel corporate vs the Henry Jones\' more personal touch. For honeymooners who prioritize amenity completeness (spa, pool, room service) over heritage character, The Tasman is the most amenity-rich Hobart option.',
    best_room: 'Heritage Spa Room in the 1840s sandstone building with freestanding bath. Or Pavilion Suite in the new-build wing with the largest harbour view. Avoid Tasman Premium standard rooms — they lack the architectural character that makes this hotel.',
    itinerary: [
      ['Arrival in Hobart','HBA to The Tasman (15 min). Welcome at Mary Mary bar with Tasmanian gin. Settle into Heritage Spa Room. Dinner at Peppina.'],
      ['MONA day','MONA Roma ferry (5 min walk). Full day at MONA. Return at 4pm. Sunset cocktails at Mary Mary. Dinner at Franklin.'],
      ['Salamanca and waterfront','Saturday Salamanca Market. Kelly\'s Steps to Battery Point. Lunch at Jackman & McRoss. Afternoon Mt Wellington. Spa treatment late afternoon. Dinner at Aloft.'],
      ['Tasman Peninsula','Drive to Port Arthur. Pennicott sea-cliff boat tour. Return for spa. Dinner at Brufa.'],
      ['Bruny Island','Bruny Island full-day. Return at 6pm. Light dinner at Peppina bar.'],
      ['Whisky day','Tasmanian whisky tour. Lunch at Stillwater. Final dinner at Peppina with chef\'s tasting menu.'],
      ['Slow departure','Breakfast. Spa hammam. HBA for departure.']
    ],
    caveats: [
      'Three architectural eras mean rooms vary radically — pick category carefully.',
      'New-build rooms have the best views, heritage rooms the most character — trade-off either way.',
      '152 rooms feels more corporate than Henry Jones or MACq.',
      'Indoor lap pool is small (15m) but functional.',
      'Heritage building rooms have heritage quirks — no air-con in some, request specifically if needed.'
    ],
    faqs: [
      ['Good for honeymooners?','Very good — most amenity-complete Hobart hotel. Best spa and only indoor pool of the waterfront options.'],
      ['Best time to visit?','Year-round viable; December–March for summer Hobart, June for Dark Mofo, April–May for autumn.'],
      ['Book in advance?','2–3 months for Heritage Spa Rooms and Pavilion Suites.'],
      ['Adults-only?','No. Firmly adult atmosphere.'],
      ['Best room type?','Heritage Spa Room or Pavilion Suite. Avoid Tasman Premium.'],
      ['How to get there?','15-min taxi from HBA.']
    ],
    email: 'Subject: Honeymoon inquiry — The Tasman\n\nDear Reservations,\n\nWe would like to book a Heritage Spa Room for [DATES]. Please confirm honeymoon arrival amenity, Peppina dinner reservation, spa couples\' package availability, and MONA ferry tickets.\n\nThank you,\n[Names]'
  },
  {
    slug: 'freycinet-lodge-tasmania',
    name: 'Freycinet Lodge, Coles Bay',
    destination: 'tasmania', country: 'australia',
    seo_title: 'Freycinet Lodge Coles Bay Honeymoon Review 2026',
    seo_desc: '60-cabin lodge inside Freycinet National Park. Score 78/100, from $400/night. Honest verdict, cabin pick, itinerary.',
    types: ['boutique','adventure','beach'], score: 78,
    breakdown: { adults_only:0, couples_pct:12, spa:7, award:8, pool:0, beach:8, room_service:7, stars:7, luxury:7 },
    stars: 4, min: 400, max: 1200, adults: false,
    amenities: ['cabins','beachfront','wilderness','fine-dining','hiking','wineglass-bay','fireplaces','wildlife','coastal-pavilions','national-park'],
    ta: 4.5, tac: true, couples: 79,
    verdict: 'Freycinet Lodge is the only accommodation inside Freycinet National Park — the same Coles Bay peninsula that hosts Saffire next door. 60 cabins and pavilions on the bay, operated by Peppers (RACT), at roughly a third of Saffire\'s rate. The Coastal Pavilions tier — 9 standalone units launched in 2018 with deck, fireplace, freestanding bath, and direct Hazards view — are genuinely honeymoon-grade and the reason serious honeymooners consider Freycinet Lodge as a Saffire alternative. The main lodge restaurant Bay does straight-up serious Tasmanian fare. Walking trails leave directly from the property — Wineglass Bay lookout is 1h walk from your cabin. Caveats: the standard Cabin tier is functional rather than romantic and should be skipped. The lodge doesn\'t do all-inclusive like Saffire — meals and activities are à la carte. There is no spa beyond room treatments. But for honeymooners who want the Wineglass Bay setting at a third of Saffire prices, with a Coastal Pavilion booked, this is the smart play.',
    best_room: 'Coastal Pavilion (one of 9 standalone units, 80 m², freestanding bath on the deck, fireplace, direct Hazards mountain view). Premier Cabins are acceptable upgrades. Avoid standard Cabins — they\'re functional rather than romantic.',
    itinerary: [
      ['Arrival from Hobart or Launceston','2.5h drive from Hobart, 2h from Launceston. Check-in at Coastal Pavilion. Sunset on the deck. Dinner at Bay restaurant.'],
      ['Wineglass Bay hike','Walk to Wineglass Bay lookout from your cabin (2h round-trip), or down to the beach itself (4h round-trip with descent). Pack picnic from lodge. Return for fireplace.'],
      ['Sailing or beach','Half-day sail from Coles Bay (Wineglass Bay Cruises). Lunch on board. Return mid-afternoon. Spa treatment. Dinner at Bay.'],
      ['Bay of Fires drive','Day drive north to Bay of Fires (90 min). Orange-lichen rocks and white sand. Lunch at Eddystone Point. Return for dinner.'],
      ['Devil\'s Corner and oysters','Drive to Devil\'s Corner cellar door for vineyard lunch with Wineglass Bay views. Stop at Freycinet Marine Farm for oysters on the way home. Final dinner at Bay.'],
      ['Cape Tourville and reading','Short morning drive to Cape Tourville lighthouse (the 360° boardwalk view). Lazy afternoon at the lodge. Sunset on the deck. Light dinner.'],
      ['Slow departure','Breakfast. Drive to LST or HBA for departure.']
    ],
    caveats: [
      'Standard Cabins not honeymoon-grade — book Coastal Pavilion or Premier.',
      'Not all-inclusive like Saffire — meals and activities à la carte.',
      'No spa beyond room treatments.',
      'Bay restaurant good but not Palate-at-Saffire level.',
      'Coastal Pavilions book 4+ months ahead for summer peak.'
    ],
    faqs: [
      ['Good for honeymooners?','Good — Coastal Pavilions are genuinely romantic. Best value at Coles Bay.'],
      ['Best time to visit?','December–March for warm walking. April for autumn. October–November for spring.'],
      ['Book in advance?','4 months for Coastal Pavilions in summer peak.'],
      ['Adults-only?','No — family-friendly. Coastal Pavilions are de facto adult zone.'],
      ['Best room type?','Coastal Pavilion. Skip standard Cabins.'],
      ['How to get there?','2.5h from HBA, 2h from LST. Hire a car.']
    ],
    email: 'Subject: Honeymoon inquiry — Freycinet Lodge\n\nDear Reservations,\n\nWe would like to book a Coastal Pavilion for [DATES]. Please confirm Hazards-facing unit, honeymoon turn-down with Tasmanian sparkling, Bay restaurant reservations, and any guided activity options.\n\nThank you,\n[Names]'
  },
  {
    slug: 'strahan-village-tasmania',
    name: 'Strahan Village',
    destination: 'tasmania', country: 'australia',
    seo_title: 'Strahan Village Honeymoon Review: West Coast Tasmania 2026',
    seo_desc: 'Waterfront cottage hotel in Strahan, gateway to the Franklin-Gordon rainforest. Score 75/100, from $320/night.',
    types: ['boutique','adventure','heritage'], score: 75,
    breakdown: { adults_only:0, couples_pct:11, spa:6, award:7, pool:0, beach:5, room_service:6, stars:7, luxury:6 },
    stars: 4, min: 320, max: 900, adults: false,
    amenities: ['waterfront','cottages','heritage','fine-dining','rainforest-cruise','fireplaces','wildlife','close-to-gordon','hill-cottages','remote'],
    ta: 4.4, tac: false, couples: 78,
    verdict: 'Strahan Village occupies the Strahan waterfront — Tasmania\'s remote west-coast harbour, the gateway to the Franklin-Gordon Wild Rivers National Park and Macquarie Harbour. The accommodation spreads across the village in restored heritage cottages and hillside lodge rooms, mostly with harbour or rainforest views. This is the choice for honeymooners doing the deep-Tasmania circuit — pairing with Cradle Mountain to the north and Hobart to the east — to access the Gordon River cruise and Sarah Island convict ruins (most remote convict settlement in Australia). The Gordon River cruise is one of the genuinely great experiences in Australia — six hours through ancient Huon pine rainforest reflecting in the tea-coloured river. Caveats: Strahan is 4.5h from Hobart on a winding mountain road. The village hotel is comfortable rather than five-star luxe. There is no spa. Food is excellent traditional Tasmanian rather than fine-dining. But for the specific honeymooner who wants to experience the Franklin-Gordon wild rivers, this is the only base.',
    best_room: 'Hilltop Premier Room with harbour view (60 m², balcony, full bath). Heritage Cottage Suites for the standalone-cottage experience (5 units, walking distance to the main lodge). Standard Village Rooms are functional but acceptable for one-night stops.',
    itinerary: [
      ['Arrival via Cradle Mountain','From Cradle Mountain Lodge: 3h scenic drive south through wilderness. Check-in at Strahan Village. Sunset on the harbour. Dinner at the Lodge restaurant.'],
      ['Gordon River cruise','Full-day Gordon River cruise from Strahan wharf (8am–3pm) — 6h through ancient Huon pine rainforest, lunch on board, Sarah Island convict ruins stop. Sunset by the harbour. Dinner.'],
      ['Hogarth Falls walk','Easy 40-min rainforest walk to Hogarth Falls. Henty dunes 4x4 tour (afternoon). Return for dinner at the Lodge.'],
      ['Drive to Hobart via Lake St Clair','4.5h drive east through Cradle Mountain–Lake St Clair NP. Lunch at Pumphouse Point if available, or at Mt Field NP. Arrive Hobart evening.'],
      ['Hobart 1','MONA day or Salamanca Market. Stay at Henry Jones / MACq / Tasman for the next 3 nights.'],
      ['Hobart 2','Tasman Peninsula or Bruny Island.'],
      ['Slow departure','HBA departure.']
    ],
    caveats: [
      'Strahan is 4.5h from Hobart on a winding mountain road. Plan accordingly.',
      'No spa, no pool.',
      'Comfort rather than five-star luxe.',
      'Most honeymooners stay 1–2 nights only as part of a circuit.',
      'Hilltop Premier Rooms have harbour view; ground-floor units sometimes don\'t.'
    ],
    faqs: [
      ['Good for honeymooners?','Specifically good for the Gordon River cruise experience. Pair with Cradle Mountain and Hobart for a wild-west Tasmania honeymoon.'],
      ['Best time to visit?','December–April for the most navigable rivers and longest evenings.'],
      ['Book in advance?','2 months for Hilltop Premier Rooms with harbour view in summer peak.'],
      ['Adults-only?','No. Family-friendly but quiet.'],
      ['Best room type?','Hilltop Premier Room or Heritage Cottage Suite.'],
      ['How to get there?','4.5h drive from Hobart or 3h from Cradle Mountain. No nearby airport beyond Burnie regional.']
    ],
    email: 'Subject: Honeymoon inquiry — Strahan Village\n\nDear Reservations,\n\nWe would like to book a Hilltop Premier Room with harbour view for [DATES]. Please confirm Gordon River cruise priority booking and a quiet harbour-facing room.\n\nThank you,\n[Names]'
  },
  {
    slug: 'curringa-farm-hamilton-tasmania',
    name: 'Curringa Farm, Hamilton',
    destination: 'tasmania', country: 'australia',
    seo_title: 'Curringa Farm Hamilton: Working-Farm Honeymoon 2026',
    seo_desc: 'Working sheep farm with 5 self-contained guest cottages in central Tasmania. Score 76/100, from $300/night.',
    types: ['boutique','adventure','wellness'], score: 76,
    breakdown: { adults_only:0, couples_pct:14, spa:5, award:7, pool:0, beach:0, room_service:5, stars:6, luxury:7 },
    stars: 4, min: 300, max: 700, adults: false,
    amenities: ['working-farm','cottages','wilderness','self-catering','breakfast-hampers','sheep-shearing','dam-swimming','fireplaces','wildlife','off-the-grid-feel'],
    ta: 4.8, tac: true, couples: 89,
    verdict: 'Curringa Farm is a 750-acre working sheep farm in the Derwent Valley, 90 minutes north of Hobart, with 5 self-contained guest cottages overlooking the farm dam and rolling pasture. It is the most honest agricultural-tourism experience in Tasmania — Tim and Jane Parsons have run the family farm here for four generations, and guests get a genuine working-farm-stay experience (sheep shearing demonstrations, optional, are extraordinary) rather than a packaged-rustic luxury aesthetic. The cottages are simple but immaculate — king bed, log fire, full kitchen, deck overlooking the dam where you can swim in summer. Breakfast hampers delivered to the cottage. Caveats: no on-site restaurant; the nearest dining is in Hamilton (10 min) or self-catering. There is no spa, no concierge. For honeymooners who want a few nights of total isolation in working farm country between Hobart and Cradle Mountain, with the option to participate in genuine farm life, this is the most authentic stay in Tasmania. Pair with city Hobart or Cradle Mountain Lodge to round out the trip.',
    best_room: 'Lakeside Cottage (1 of 5 units, all roughly equivalent, north-facing dam view, log fire, freestanding bath on the deck). Note this is substitute on the list — 5 cottages total. Book any of the lakeside units.',
    itinerary: [
      ['Arrival from Hobart','90-min drive northwest from Hobart through the Derwent Valley. Welcome by Tim and Jane Parsons with farm tour orientation. Settle into Lakeside Cottage. Dinner self-catered or pre-arranged farm dinner ($90 per couple).'],
      ['Farm life day','Morning sheep shearing demonstration (optional, Tim demonstrates real shearing). Mid-morning farm tour with the dogs. Self-catered lunch. Afternoon dam swimming or rowboat. Quiet evening at the fireplace.'],
      ['Mt Field National Park','Day drive to Mt Field NP (45 min) — Russell Falls, Tall Trees walk. Picnic lunch. Return for self-catered dinner.'],
      ['Derwent Valley wineries','Drive through Pooley wines, Coal River Valley wineries. Lunch at Stefano Lubiana. Return for last dinner at the cottage.'],
      ['Slow departure to Hobart','Slow morning. Final farm walk. 90-min drive to Hobart for next leg of trip.'],
      ['Hobart 1','City stay.'],
      ['Hobart 2','City stay.']
    ],
    caveats: [
      'No on-site restaurant — self-catering or pre-arranged farm dinner.',
      'No spa, no concierge.',
      'Genuinely working farm — sheep, dogs, dust on country roads.',
      '5 cottages total — books 3–4 months ahead for summer peak.',
      'Most honeymooners stay 2–3 nights as part of a longer circuit.'
    ],
    faqs: [
      ['Good for honeymooners?','Excellent for couples who want farm-stay authenticity and genuine isolation. Not for guests who want resort service.'],
      ['Best time to visit?','November–April for warm days and dam swimming. May–August for fireplace nights.'],
      ['Book in advance?','3–4 months for summer peak. 5 cottages only.'],
      ['Adults-only?','No, family-friendly but cottages each accommodate 2 adults.'],
      ['Best room type?','Any Lakeside Cottage. All 5 cottages are roughly equivalent.'],
      ['How to get there?','90-min drive northwest from Hobart. Hire a car at HBA.']
    ],
    email: 'Subject: Honeymoon inquiry — Curringa Farm\n\nDear Tim and Jane,\n\nWe would like to book a Lakeside Cottage for our honeymoon [DATES]. Please confirm any honeymoon arrival touches, the sheep shearing demonstration schedule, and the farm dinner option.\n\nThank you,\n[Names]'
  },
  {
    slug: 'stillwater-seven-launceston-tasmania',
    name: 'Stillwater Seven, Launceston',
    destination: 'tasmania', country: 'australia',
    seo_title: 'Stillwater Seven Launceston Honeymoon Review 2026',
    seo_desc: '7-suite boutique above one of Tasmania\'s great restaurants. Score 86/100, from $480/night. Honest verdict, suite pick.',
    types: ['boutique','city','design'], score: 86,
    breakdown: { adults_only:0, couples_pct:18, spa:7, award:11, pool:0, beach:0, room_service:9, stars:9, luxury:10 },
    stars: 5, min: 480, max: 1100, adults: false,
    amenities: ['boutique','riverside','heritage','fine-dining','wine-cellar','design-forward','tamar-valley-access','close-to-launceston-airport','breakfast-in-restaurant','seven-suites-only'],
    ta: 4.9, tac: true, couples: 90,
    verdict: 'Stillwater Seven is a 7-suite boutique hotel above one of Australia\'s top regional restaurants, Stillwater, in the converted 1830s flour mill on Ritchies Mill on Launceston\'s Tamar River. The hotel is intimate and design-forward — each suite is unique, named after the mill\'s milling implements, with bespoke joinery, Italian linens, and freestanding bathtubs. The restaurant downstairs has held a chef-hatted reputation for nearly two decades. The location is perfect — 5-min walk from central Launceston, 10-min drive from the Tamar Valley wineries, 20-min drive from Launceston airport, 2h from Cradle Mountain. Caveats: 7 suites means availability is genuinely tight. No spa, no pool. The mill location is wonderful at night but the active Tamar River works during the day mean occasional noise. For honeymooners who want a small, design-driven base for the Tamar Valley wine region and as a Cradle Mountain pre/post stay, this is the most distinctive choice in Launceston.',
    best_room: 'Honey or Mill Suite — both have freestanding bath and river view (the 7 suites vary; consult floor plan at booking). Avoid the smaller back-facing suites if river view is the priority.',
    itinerary: [
      ['Arrival in Launceston','LST to Stillwater Seven (20 min). Check-in with welcome Tamar Valley sparkling. Settle in. Dinner at Stillwater downstairs (chef\'s pinot pairing menu).'],
      ['Tamar Valley wine day','Private driver-guided tour of Pipers Brook, Holm Oak, and Josef Chromy. Lunch at Josef Chromy. Return for spa treatment in-suite. Dinner at Stillwater bar menu.'],
      ['Cataract Gorge and city','Walk Cataract Gorge (15 min from hotel). Lunch in central Launceston. Afternoon at the Queen Victoria Museum and Art Gallery (QVMAG). Dinner at Black Cow Bistro.'],
      ['Cradle Mountain day trip','2h drive to Cradle Mountain. Dove Lake circuit walk. Lunch at Cradle Mountain Lodge. Return at sunset. Light dinner at Stillwater.'],
      ['Bridestowe lavender','Drive 45 min east to Bridestowe Lavender Estate (December–January only for the bloom). Lunch on-site. Return for spa.'],
      ['Wine valley lazy day','Slow morning. Lunch at Tamar Ridge Cellar Door. Final tasting dinner at Stillwater with the chef\'s tasting.'],
      ['Slow departure','Breakfast at Stillwater. LST departure (or onward to Hobart by drive).']
    ],
    caveats: [
      '7 suites only — books 3–4 months ahead.',
      'No spa, no pool, no gym.',
      'Active mill location means occasional daytime noise.',
      'Stillwater restaurant is open for breakfast only to guests Sun–Tue.',
      'Some smaller back-facing suites lack river view.'
    ],
    faqs: [
      ['Good for honeymooners?','Very good for the intimate Launceston base. Best paired with Cradle Mountain or Saffire as part of a circuit.'],
      ['Best time to visit?','November–April for the Tamar Valley vineyards. December–January for Bridestowe lavender.'],
      ['Book in advance?','3–4 months for summer peak; 7 suites only.'],
      ['Adults-only?','No formal policy. Functionally adult.'],
      ['Best room type?','River-view suite — Honey or Mill. Confirm at booking.'],
      ['How to get there?','20-min taxi from LST. Or 2h drive from Hobart.']
    ],
    email: 'Subject: Honeymoon inquiry — Stillwater Seven\n\nDear Reservations,\n\nWe would like to book a river-view suite for [DATES]. Please confirm honeymoon arrival amenity, Stillwater restaurant chef\'s tasting menu reservations, and private driver-guided Tamar Valley wine tour arrangement.\n\nThank you,\n[Names]'
  },
  // ============== ALGARVE (10 hotels) ==============
  {
    slug: 'vila-vita-parc-algarve',
    name: 'Vila Vita Parc Resort & Spa',
    destination: 'algarve', country: 'portugal',
    seo_title: 'Vila Vita Parc Algarve Honeymoon Review 2026',
    seo_desc: '170-room oceanfront estate in Porches, two Michelin stars on-site. Score 92/100, from $700/night.',
    types: ['luxury','wellness','beach'], score: 92,
    breakdown: { adults_only:0, couples_pct:18, spa:14, award:15, pool:10, beach:9, room_service:9, stars:10, luxury:11 },
    stars: 5, min: 700, max: 4500, adults: false,
    amenities: ['oceanfront','spa','pool','michelin','beach','clifftop','tennis','golf','wine-cellar','butler'],
    ta: 4.8, tac: true, couples: 89,
    verdict: 'Vila Vita Parc is the greatest resort estate in southern Iberia — 54 acres of clifftop gardens, sub-tropical paths and discrete villas on the Praia dos Tres Irmãos in Porches, central Algarve. It is family-owned (the Aurora-Vita Group), and has been progressively built and refined over forty years into one of the great European resort properties. Eleven restaurants and bars on-site, including the two-Michelin-starred Ocean (chef Hans Neuner, since 2011) and one-Michelin-starred Mizu Asian. The Sisley Spa is among the best in Iberia. The beach (accessed by elevator down the cliff) is private and the cliff-top pool is among the most photographed in Europe. Vila Vita owns a working winery (Herdade dos Grous in the Alentejo) and the wine list reflects it. Caveats: at 170 rooms it is large — the Premium and Garden Junior Suites are pleasant but lack the honeymoon distinction of the Oceanfront Villas. The cliff-edge swim takes elevator-down access. Best for honeymooners who want the genuinely complete European luxury resort with Michelin food, perfect spa, and serious oceanfront — at half the Côte d\'Azur price.',
    best_room: 'Oceanfront Villa Premium with private terrace and direct ocean view from the cliff (90 m²). Step up to the Casa Veranda for the 2-bedroom villa with private pool. Avoid Garden Junior Suites — they miss the ocean point.',
    itinerary: [
      ['Arrival via Faro','45-min FAO private transfer. Check-in with Portuguese sparkling on the cliff terrace. Settle into Oceanfront Villa. Dinner at the Atlantico beachfront restaurant.'],
      ['Beach and spa','Beach day with private cabana on Praia dos Tres Irmãos. Lunch at the beach club. Afternoon Sisley spa couples\' treatment. Dinner at Mizu Asian (1 Michelin star).'],
      ['Benagil Cave by kayak','7am kayak from Praia da Marinha to Benagil Cave. Return for late breakfast. Afternoon at the cliff-edge pool. Sunset cocktails at the Wine Cellar tasting. Dinner at Ocean (2 Michelin stars).'],
      ['Cliff walk and lunch','Seven Hanging Valleys cliff walk (5 km of the 12 km total) from Praia da Marinha east. Picnic lunch packed by hotel. Return mid-afternoon. Spa, then dinner at Bela Vita restaurant.'],
      ['Lagos and Ponta da Piedade','Day drive west to Lagos. Walk the Ponta da Piedade cliffs. Lunch at O Camilo on Praia do Camilo. Return for sunset. Light dinner.'],
      ['Vineyard lunch','Drive to Quinta do Frances in the Algarve interior (25 min) for vineyard tour and lunch. Return for spa afternoon. Final tasting dinner at Ocean.'],
      ['Slow departure','Late breakfast on the terrace. Final swim. FAO transfer for departure.']
    ],
    caveats: [
      '170 rooms is large — choose villa categories for honeymoon privacy.',
      'Beach access via elevator down the cliff — pleasant but not direct.',
      'Family-friendly atmosphere outside school holidays; avoid Easter and August.',
      'Ocean restaurant books 6 weeks ahead for the chef\'s tasting menu.',
      'Garden Junior Suites lack ocean view — confirm category at booking.'
    ],
    faqs: [
      ['Good for honeymooners?','Outstanding — best complete European luxury resort south of Tuscany. Two-Michelin food, perfect spa, private cliff beach.'],
      ['Best time to visit?','May–June and September–October are perfect windows.'],
      ['Book in advance?','4–6 months for Oceanfront Villas in peak shoulder.'],
      ['Adults-only?','No, family-friendly. Book non-school-holiday weeks for quiet.'],
      ['Best room type?','Oceanfront Villa Premium or Casa Veranda. Avoid Garden Junior Suites.'],
      ['How to get there?','45-min FAO private transfer ($90 per car).']
    ],
    email: 'Subject: Honeymoon inquiry — Vila Vita Parc\n\nDear Reservations,\n\nWe would like to book an Oceanfront Villa for [DATES]. Please confirm honeymoon arrival amenity, Sisley Spa couples\' treatment, Ocean restaurant reservation, and Casa Velha vineyard lunch arrangement.\n\nThank you,\n[Names]'
  },
  {
    slug: 'pine-cliffs-resort-algarve',
    name: 'Pine Cliffs Resort',
    destination: 'algarve', country: 'portugal',
    seo_title: 'Pine Cliffs Resort Algarve Honeymoon Review 2026',
    seo_desc: 'Luxury Collection clifftop resort with private beach and golf. Score 86/100, from $550/night.',
    types: ['luxury','beach','wellness'], score: 86,
    breakdown: { adults_only:0, couples_pct:14, spa:12, award:11, pool:10, beach:9, room_service:9, stars:10, luxury:11 },
    stars: 5, min: 550, max: 3500, adults: false,
    amenities: ['oceanfront','spa','pool','beach','golf','clifftop','tennis','marriott','adults-pool','butler'],
    ta: 4.7, tac: true, couples: 82,
    verdict: 'Pine Cliffs is the Marriott Luxury Collection\'s flagship Algarve resort — a 220-acre clifftop estate above the Falésia beach in Albufeira, with a 9-hole golf course, 8 restaurants, a major spa, and the most extensive Algarve resort amenity-set short of Quinta do Lago. There are multiple accommodation zones: the main Pine Cliffs Hotel, the Pine Cliffs Ocean Suites (the genuinely luxury entry, 154 suites and apartments), and the Residence villas (for longer stays). The clifftop pool is one of the iconic photographs of the Algarve. The Serenity Spa is among the top three on the coast. Caveats: the estate is large and resort-feeling. The main Pine Cliffs Hotel rooms are smaller and dated; only the Ocean Suites are genuinely honeymoon-grade. The clifftop position means descent to the beach is by elevator (or a long staircase). Family-friendly atmosphere outside shoulder seasons. But for honeymooners who want complete amenity (golf, spa, tennis, multiple restaurants) at a serious price below Vila Vita, Pine Cliffs Ocean Suites are the play.',
    best_room: 'Ocean Suite Oceanfront with terrace (80 m², full Atlantic view from the cliff). Step up to the Pine Cliffs Pool Suite with private plunge pool. Avoid the main Pine Cliffs Hotel rooms — they are older and smaller than the Ocean Suites.',
    itinerary: [
      ['Arrival via Faro','45-min FAO transfer. Check-in at Ocean Suites. Sunset on the cliff-edge pool deck. Dinner at Beach Club restaurant.'],
      ['Falésia beach','Long beach day with private cabana. Lunch at the beach club. Sisley-style couples\' treatment in the afternoon. Dinner at Mums (Italian).'],
      ['Benagil by kayak','7am kayak to Benagil Cave from Praia da Marinha (30-min drive). Return for late breakfast. Pool afternoon. Dinner at Yakuza by Olivier (Japanese).'],
      ['Golf morning','Round of golf on the 9-hole clifftop course. Lunch at the clubhouse. Spa in afternoon. Sunset on the cliff. Dinner at O Pescador (Portuguese seafood).'],
      ['Vila Joya lunch','Drive 10 min to Vila Joya for the two-Michelin-star clifftop lunch. Return for spa afternoon. Light dinner at the resort bar.'],
      ['Lagos cliff walk','Drive west to Ponta da Piedade Lagos. Cliff walk and lunch at O Camilo. Return for sunset. Final dinner at Beach Club.'],
      ['Slow departure','Late breakfast. Final cliff-edge pool swim. FAO departure.']
    ],
    caveats: [
      'Main Pine Cliffs Hotel rooms are dated — Ocean Suites are the honeymoon-grade option.',
      '220-acre estate feels resort-y rather than boutique.',
      'Beach descent by elevator — pleasant but not direct.',
      'Family-friendly atmosphere; avoid school holidays for adult quiet.',
      'Multiple restaurant zones can feel disjointed — Beach Club is the most consistent.'
    ],
    faqs: [
      ['Good for honeymooners?','Very good in Ocean Suites — full amenity, private clifftop pool, serious spa.'],
      ['Best time to visit?','May–June and September–October. Avoid July–August.'],
      ['Book in advance?','3–4 months for Ocean Suites in shoulder peak.'],
      ['Adults-only?','No, family-friendly. Ocean Suites adults pool is restricted to 18+.'],
      ['Best room type?','Ocean Suite Oceanfront or Pine Cliffs Pool Suite. Avoid main hotel rooms.'],
      ['How to get there?','45-min FAO private transfer.']
    ],
    email: 'Subject: Honeymoon inquiry — Pine Cliffs Resort\n\nDear Reservations,\n\nWe would like to book an Ocean Suite Oceanfront for [DATES]. Please confirm honeymoon turn-down, Yakuza dinner reservation, Serenity spa couples\' treatment, and FAO private transfer.\n\nThank you,\n[Names]'
  },
  {
    slug: 'conrad-algarve',
    name: 'Conrad Algarve',
    destination: 'algarve', country: 'portugal',
    seo_title: 'Conrad Algarve Honeymoon Review: Quinta do Lago 2026',
    seo_desc: '154-room Conrad in Quinta do Lago golf estate. Score 88/100, from $550/night. Honest verdict, suite pick.',
    types: ['luxury','wellness','beach'], score: 88,
    breakdown: { adults_only:0, couples_pct:15, spa:13, award:13, pool:10, beach:7, room_service:9, stars:10, luxury:11 },
    stars: 5, min: 550, max: 3000, adults: false,
    amenities: ['spa','pool','golf','close-to-faro','quinta-do-lago','michelin','butler','infinity-pool','adults-pool','fine-dining'],
    ta: 4.7, tac: true, couples: 87,
    verdict: 'Conrad Algarve is the most architecturally striking modern hotel on the Algarve — opened in 2012 in the Quinta do Lago resort estate, 15 minutes from Faro airport. The architecture (by Anibal Couto) is uncompromisingly contemporary: white volumes, water gardens, palm-lined drives, and the most photographed infinity pool on the coast. 154 rooms across two wings. The food is exceptional: Gusto by Heinz Beck (the three-Michelin-star Pergola chef from Rome) has one Michelin star here. The Conrad Spa is large and excellent. The Quinta do Lago estate hosts three of Europe\'s top-50 golf courses — the South, North, and Laranjal courses are walking-distance. The hotel is not on the beach but offers a private beach club at the Praia do Ancão (5-min shuttle). Caveats: not beachfront. The Quinta do Lago setting is polished but lacks the wild-cliffs Algarve character. Family-friendly atmosphere with kids-club. But for honeymooners who want golf + ultra-modern luxury + Michelin food + spa, at half the Côte d\'Azur price, this is the smart play.',
    best_room: 'Deluxe Pool Suite with private plunge pool (90 m²). Step up to the Royal Suite for the 2-bedroom corner unit with two terraces and pool view. Avoid Deluxe Garden View rooms — they back onto driveways.',
    itinerary: [
      ['Arrival via Faro','15-min FAO transfer (closest of any Algarve resort). Check-in with Portuguese sparkling. Settle into Deluxe Pool Suite. Sunset at the infinity pool. Dinner at Gusto by Heinz Beck.'],
      ['Golf or spa','Morning round at Quinta do Lago South (booked through hotel) or full day at Conrad Spa with couples\' hammam and massage. Lunch at the spa cafe or clubhouse. Dinner at Dado.'],
      ['Beach club and Faro','Shuttle to Praia do Ancão beach club. Beach morning. Lunch on the sand. Afternoon driving to Faro old town for cathedral and bone chapel. Dinner at Gusto.'],
      ['Benagil and Albufeira','Drive 90 min west to Praia da Marinha for cliff walk and Benagil view. Lunch at Vila Joya (book ahead). Return for late afternoon spa. Light dinner.'],
      ['Tavira day trip','Drive 45 min east to Tavira and the Ilha de Tavira sandbar. Lunch on the island. Return for spa treatment. Dinner at the bar.'],
      ['Vineyard lunch','Drive to Quinta do Frances inland for vineyard tour and lunch. Return for sunset. Final tasting dinner at Gusto.'],
      ['Slow departure','Late breakfast. Final pool swim. 15-min FAO transfer.']
    ],
    caveats: [
      'Not beachfront — beach access by 5-min shuttle to Praia do Ancão.',
      'Quinta do Lago setting is polished, not wild — Vila Vita or Bela Vista for cliff drama.',
      'Family-friendly with kids-club — book non-school weeks.',
      'Modern architecture divides — preview the Conrad Algarve photos.',
      'Adults-only pool restricted to 16+ and books up in summer.'
    ],
    faqs: [
      ['Good for honeymooners?','Excellent for couples who want serious modern architecture, golf, Michelin food, and short airport transfer.'],
      ['Best time to visit?','May–June and September–October for perfect weather.'],
      ['Book in advance?','3–4 months for Deluxe Pool Suites in shoulder peak.'],
      ['Adults-only?','No, but a dedicated 16+ adult pool zone exists.'],
      ['Best room type?','Deluxe Pool Suite. Avoid Deluxe Garden View.'],
      ['How to get there?','15-min FAO transfer. Closest luxury resort to the airport on the coast.']
    ],
    email: 'Subject: Honeymoon inquiry — Conrad Algarve\n\nDear Reservations,\n\nWe would like to book a Deluxe Pool Suite for [DATES]. Please confirm honeymoon arrival amenity, Gusto by Heinz Beck dinner reservation, Conrad Spa couples\' package, and Quinta do Lago golf access.\n\nThank you,\n[Names]'
  },
  {
    slug: 'bela-vista-hotel-spa-algarve',
    name: 'Bela Vista Hotel & Spa',
    destination: 'algarve', country: 'portugal',
    seo_title: 'Bela Vista Hotel Algarve Honeymoon Review 2026',
    seo_desc: '38-room oceanfront heritage hotel in Praia da Rocha. Score 86/100, from $400/night. Honest verdict, suite pick.',
    types: ['luxury','boutique','beach'], score: 86,
    breakdown: { adults_only:0, couples_pct:18, spa:11, award:12, pool:8, beach:9, room_service:8, stars:9, luxury:10 },
    stars: 5, min: 400, max: 2000, adults: false,
    amenities: ['oceanfront','spa','pool','beachfront','heritage','michelin','small-luxury','beach','fine-dining','wine-cellar'],
    ta: 4.8, tac: true, couples: 91,
    verdict: 'Bela Vista is the heritage gem of the central Algarve — a 38-room Belle Époque mansion built in 1903 directly on Praia da Rocha cliff in Portimão, restored in 2012 by the Lapwing Estates group with sympathetic contemporary additions. The historic main villa and the new wing share a clifftop infinity pool overlooking the Atlantic. The restaurant Vista (one Michelin star, chef João Oliveira) is one of the great Algarve dining experiences. The spa is small but excellent. The Praia da Rocha beach is directly below via cliff staircase. Caveats: at 38 rooms it is genuinely boutique — book early. Praia da Rocha town outside the hotel is touristy. The historic mansion rooms have heritage quirks (narrow doors, varied bath configurations); the new-wing rooms are larger but lack character. For honeymooners who want a small-luxury heritage cliff-top Algarve experience with Michelin food, this is the most personal choice.',
    best_room: 'Premium Ocean View Suite (50 m², direct cliff and Atlantic view, freestanding bath). Step up to the Villa Suite — the original mansion\'s top floor, 2-room suite with terrace. Avoid back-facing rooms — they lack the ocean point.',
    itinerary: [
      ['Arrival via Faro','45-min FAO transfer. Check-in with Portuguese sparkling on the cliff terrace. Settle into Premium Ocean View Suite. Sunset on the infinity pool. Dinner at Vista (1 Michelin star).'],
      ['Beach and spa','Cliff-staircase descent to Praia da Rocha beach. Beach morning. Lunch at hotel beach club. Afternoon spa couples\' treatment. Dinner at Vista chef\'s tasting menu.'],
      ['Benagil and cliff walk','Drive to Praia da Marinha (15 min). Seven Hanging Valleys cliff walk and Benagil view. Lunch at O Camilo nearby. Return for spa. Dinner at the bar bistro.'],
      ['Lagos and Ponta da Piedade','Drive west to Lagos (30 min). Cliff walk and harbour. Lunch at O Camilo. Return for sunset. Light dinner.'],
      ['Sagres and end of Europe','Long day west to Sagres and Cabo de São Vicente. Lunch in Sagres. Watch sunset from the fortress. Return for late dinner.'],
      ['Vineyard lunch','Drive to Quinta do Frances inland for vineyard lunch. Return for spa afternoon. Final tasting dinner at Vista.'],
      ['Slow departure','Late breakfast on the cliff terrace. Final cliff-pool swim. FAO transfer for departure.']
    ],
    caveats: [
      '38 rooms — boutique scale, book 4–6 months ahead.',
      'Praia da Rocha town outside the hotel is touristy.',
      'Historic mansion rooms have heritage quirks — confirm bath configuration at booking.',
      'Beach access by cliff staircase — pleasant but a workout in heat.',
      'Vista restaurant tables book 6 weeks ahead for tasting menu.'
    ],
    faqs: [
      ['Good for honeymooners?','Excellent — small, heritage, oceanfront, with serious Michelin dining.'],
      ['Best time to visit?','May–June and September–October.'],
      ['Book in advance?','4–6 months for Premium Ocean View Suites and Villa Suites.'],
      ['Adults-only?','No, but the small heritage atmosphere is firmly adult.'],
      ['Best room type?','Premium Ocean View Suite or Villa Suite. Avoid back-facing rooms.'],
      ['How to get there?','45-min FAO transfer ($90 per car).']
    ],
    email: 'Subject: Honeymoon inquiry — Bela Vista Hotel & Spa\n\nDear Reservations,\n\nWe would like to book a Premium Ocean View Suite for [DATES]. Please confirm honeymoon arrival amenity, Vista restaurant tasting menu reservation, and spa couples\' treatment availability.\n\nThank you,\n[Names]'
  },
  {
    slug: 'tivoli-carvoeiro-algarve',
    name: 'Tivoli Carvoeiro Algarve',
    destination: 'algarve', country: 'portugal',
    seo_title: 'Tivoli Carvoeiro Algarve Honeymoon Review 2026',
    seo_desc: '248-room clifftop resort in Carvoeiro. Score 81/100, from $350/night. Honest verdict, suite pick, itinerary.',
    types: ['luxury','beach','wellness'], score: 81,
    breakdown: { adults_only:0, couples_pct:13, spa:10, award:10, pool:9, beach:8, room_service:8, stars:9, luxury:8 },
    stars: 5, min: 350, max: 1400, adults: false,
    amenities: ['oceanfront','spa','pool','clifftop','beach','infinity-pool','tennis','adults-pool','fine-dining','butler'],
    ta: 4.6, tac: true, couples: 80,
    verdict: 'Tivoli Carvoeiro is the most dramatically positioned mainstream-luxury resort on the Algarve — 248 rooms in a triangular cliff-edge building above Vale Covo cove in Carvoeiro, with arguably the single most photographed infinity pool in Portugal (the one that appears to flow over the cliff into the Atlantic). The resort underwent a full Tivoli renovation in 2018 and now sits comfortably in the five-star modern-luxury bracket. The Sea Beauty Spa is genuinely good (not boutique-elite). There are four restaurants including the rooftop Sky Bar with panoramic cliff views. The Carvoeiro town and cove are 5-min walk from the hotel. Praia da Marinha (the iconic limestone-arches beach) is 10 minutes drive. Caveats: at 248 rooms this is large and family-friendly. Standard rooms are pleasant but unremarkable; only Premium Ocean View categories and the Casa Suite are honeymoon-grade. The cliff pool is the photograph; in reality the pool is busy mid-day. But the location is unbeatable for the central Algarve and the value is genuinely strong.',
    best_room: 'Premium Ocean View Room (45 m², direct Atlantic view, balcony). Step up to the Sky Suite for the rooftop two-room with private terrace, or the Casa Suite for the cliff-edge corner. Avoid Resort Rooms — they have no view.',
    itinerary: [
      ['Arrival via Faro','45-min FAO transfer. Welcome on the cliff terrace with Portuguese sparkling. Settle into Premium Ocean View room. Sunset at Sky Bar. Dinner at One restaurant.'],
      ['Carvoeiro and beach','Walk into Carvoeiro town and cove for morning swim. Lunch at the cove. Afternoon at infinity pool with cliff view. Spa couples\' treatment. Dinner at Mare.'],
      ['Benagil and cliff walk','7am kayak to Benagil Cave. Return for late breakfast. Seven Hanging Valleys walk from Praia da Marinha. Picnic. Return for pool. Dinner at One.'],
      ['Vila Joya lunch','Drive 25 min east to Vila Joya for the two-Michelin-star clifftop lunch. Return for spa afternoon. Light dinner at Sky Bar.'],
      ['Lagos','Day trip west to Lagos and Ponta da Piedade. Walk to Praia do Camilo. Lunch at O Camilo. Return for sunset.'],
      ['Vineyard day','Drive to Quinta do Frances for vineyard lunch. Return for late spa. Final tasting dinner at One.'],
      ['Slow departure','Late breakfast. Final infinity-pool swim. FAO transfer.']
    ],
    caveats: [
      '248 rooms means resort feel rather than boutique.',
      'Standard Resort Rooms lack ocean view — confirm category at booking.',
      'Family-friendly atmosphere with kids-club; book non-school weeks.',
      'Iconic infinity pool is busy mid-day — go early or late.',
      'Mass-market clientele increasingly in summer peak.'
    ],
    faqs: [
      ['Good for honeymooners?','Good value pick for Premium Ocean View rooms with the iconic infinity pool.'],
      ['Best time to visit?','May–June and September–October.'],
      ['Book in advance?','2–3 months for Premium Ocean View rooms.'],
      ['Adults-only?','No, but Sky Bar terrace and certain pools are adults-zoned.'],
      ['Best room type?','Premium Ocean View, Sky Suite, or Casa Suite. Avoid Resort Rooms.'],
      ['How to get there?','45-min FAO transfer.']
    ],
    email: 'Subject: Honeymoon inquiry — Tivoli Carvoeiro\n\nDear Reservations,\n\nWe would like to book a Premium Ocean View room for [DATES]. Please confirm honeymoon arrival amenity, Mare or One dinner reservation, spa couples\' treatment, and a cliff-facing room.\n\nThank you,\n[Names]'
  },
  {
    slug: 'quinta-do-lago-hotel-algarve',
    name: 'Quinta do Lago Hotel',
    destination: 'algarve', country: 'portugal',
    seo_title: 'Quinta do Lago Hotel Algarve Honeymoon Review 2026',
    seo_desc: '141-room golf-estate luxury hotel. Score 84/100, from $480/night. Honest verdict, suite pick, 7-night itinerary.',
    types: ['luxury','wellness','beach'], score: 84,
    breakdown: { adults_only:0, couples_pct:14, spa:11, award:11, pool:9, beach:7, room_service:9, stars:10, luxury:10 },
    stars: 5, min: 480, max: 2200, adults: false,
    amenities: ['spa','pool','golf','quinta-do-lago','close-to-faro','tennis','butler','infinity-pool','adults-pool','fine-dining'],
    ta: 4.7, tac: true, couples: 84,
    verdict: 'Quinta do Lago Hotel (formerly Conrad Quinta do Lago, rebranded 2024) is the newest serious luxury hotel in the Quinta do Lago estate alongside the Conrad — 141 rooms, complete renovation 2023, and a sharper boutique-luxury feel than the larger Conrad next door. The architecture is contemporary Portuguese — white stucco, marble, and water gardens. Access to the three Quinta do Lago championship golf courses, the spa, and the same private beach club at Praia do Ancão (5-min shuttle). The food is excellent — Bovino steakhouse and Casa do Lago (Asian-Mediterranean) are both genuine destinations. 15 minutes from Faro airport. Caveats: not beachfront. The Quinta do Lago setting is polished modern luxury but lacks the wild-cliffs character of central and west Algarve. Family-friendly in school holidays. But for golf-loving honeymooners who want the closest-to-airport serious luxury option, with smaller scale than the Conrad, this is the smart play.',
    best_room: 'Premium Pool View Suite with terrace and direct infinity-pool view. Step up to the Penthouse Suite for the top-floor 2-bedroom. Avoid Deluxe Garden View — they back onto inland gardens.',
    itinerary: [
      ['Arrival via Faro','15-min FAO transfer. Check-in with Portuguese sparkling. Settle into Premium Pool View Suite. Sunset on the terrace. Dinner at Bovino steakhouse.'],
      ['Golf or spa','Morning round at Quinta do Lago South. Lunch at the clubhouse. Afternoon spa couples\' treatment. Dinner at Casa do Lago.'],
      ['Beach and Faro','Shuttle to Praia do Ancão beach club. Beach morning. Lunch on the sand. Afternoon Faro old town. Dinner at Bovino.'],
      ['Benagil and cliff walk','Drive 90 min west to Praia da Marinha. Cliff walk and Benagil view. Lunch at O Camilo. Return for spa. Light dinner.'],
      ['Tavira day','Day east to Tavira town and Ilha de Tavira sandbar. Lunch on the island. Return for sunset.'],
      ['Vila Joya lunch','Drive west to Vila Joya for two-Michelin-star lunch (45 min). Return for spa. Final dinner at Casa do Lago.'],
      ['Slow departure','Late breakfast. Pool swim. 15-min FAO transfer.']
    ],
    caveats: [
      'Not beachfront — beach access by shuttle to Praia do Ancão.',
      'Quinta do Lago setting is polished but lacks wild-cliffs character.',
      'Family-friendly with kids-club; book non-school weeks.',
      'Deluxe Garden View has no pool or sea view — confirm at booking.',
      'Brand transition from Conrad to Quinta do Lago Hotel — some online reviews still reference old branding.'
    ],
    faqs: [
      ['Good for honeymooners?','Very good for golf-loving couples wanting the closest-to-airport serious luxury option.'],
      ['Best time to visit?','May–June and September–October.'],
      ['Book in advance?','2–3 months for Premium Pool View Suites.'],
      ['Adults-only?','No, but adult pool zones exist.'],
      ['Best room type?','Premium Pool View Suite. Avoid Garden View.'],
      ['How to get there?','15-min FAO transfer.']
    ],
    email: 'Subject: Honeymoon inquiry — Quinta do Lago Hotel\n\nDear Reservations,\n\nWe would like to book a Premium Pool View Suite for [DATES]. Please confirm honeymoon arrival amenity, Bovino and Casa do Lago dinner reservations, spa couples\' treatment, and Quinta do Lago golf tee-times.\n\nThank you,\n[Names]'
  },
  {
    slug: 'vila-joya-algarve',
    name: 'Vila Joya, Albufeira',
    destination: 'algarve', country: 'portugal',
    seo_title: 'Vila Joya Algarve Honeymoon Review: Two-Michelin Boutique 2026',
    seo_desc: '20-room boutique hotel above two-Michelin-star restaurant. Score 90/100, from $750/night. Honest verdict.',
    types: ['luxury','boutique','beach'], score: 90,
    breakdown: { adults_only:14, couples_pct:18, spa:10, award:14, pool:8, beach:9, room_service:10, stars:10, luxury:10 },
    stars: 5, min: 750, max: 3200, adults: true,
    amenities: ['adults-only','michelin','beachfront','spa','pool','clifftop','small-luxury','wine-cellar','fine-dining','butler'],
    ta: 4.9, tac: true, couples: 95,
    verdict: 'Vila Joya is a 20-room adults-only boutique hotel above Joachim Koerper and Dieter Koschina\'s two-Michelin-star restaurant on the cliff at Praia Galé. It is the smallest, most personal, food-driven luxury hotel on the Algarve — a former private villa converted by the Jung family in the 1980s and operated continuously with one of the most loyal repeat-guest networks in European luxury. The restaurant is the headline (one of the half-dozen finest meals in Iberia), but the 20 rooms are quietly excellent — most with direct ocean view, all with terraces. The Aja spa is small and personal. The cliff-edge pool is among the most photographed in Europe. Caveats: 20 rooms means availability is tight. The food is the point — if you don\'t care about Michelin cooking, choose Vila Vita or Bela Vista. Family-of-house atmosphere is warm but not formal-five-star. The location is residential rather than dramatically wild. But for honeymooners who want a small, food-driven, adults-only Algarve experience with arguably the finest cooking on the Iberian coast, this is the choice.',
    best_room: 'Deluxe Ocean Suite (60 m², direct Atlantic view, freestanding bath, terrace). Step up to the Imperial Suite (140 m², 2-room) for the splurge. Avoid Garden View suites — they miss the ocean point.',
    itinerary: [
      ['Arrival via Faro','30-min FAO transfer. Check-in with Portuguese sparkling on the cliff terrace. Settle into Deluxe Ocean Suite. Sunset by the cliff pool. Dinner at Vila Joya restaurant (the 6-course tasting menu).'],
      ['Beach and rest','Slow morning at Praia Galé directly below (cliff-steps access). Lunch at the beach club. Afternoon spa massage. Dinner at the Aja restaurant (Asian alternative).'],
      ['Benagil and cliff walk','7am kayak to Benagil from Praia da Marinha. Return for late breakfast. Cliff walk afternoon. Dinner at Vila Joya tasting menu second seating.'],
      ['Vineyard lunch','Drive to Quinta do Frances inland (30 min). Vineyard tour and lunch. Return for spa. Light dinner at Aja.'],
      ['Lagos and Ponta da Piedade','Drive west to Lagos. Cliff walk and Ponta da Piedade. Lunch at O Camilo. Return for sunset.'],
      ['Rest day','Slow morning. Pool. Lunch on the cliff terrace. Final tasting menu dinner at Vila Joya with chef\'s wine pairing.'],
      ['Slow departure','Final breakfast on the cliff. FAO transfer.']
    ],
    caveats: [
      '20 rooms — books 6+ months ahead in shoulder peak.',
      'Family-of-house atmosphere is warm but not formal five-star.',
      'Residential rather than wild-cliffs setting.',
      'Adults-only — strict 14+ policy.',
      'Vila Joya restaurant tables for non-guests book 8+ weeks ahead.'
    ],
    faqs: [
      ['Good for honeymooners?','Outstanding for food-driven, adults-only honeymooners who want intimacy over scale.'],
      ['Best time to visit?','May–June and September–October.'],
      ['Book in advance?','6+ months for Deluxe Ocean Suites and Imperial Suite.'],
      ['Adults-only?','Yes — 14+ policy.'],
      ['Best room type?','Deluxe Ocean Suite or Imperial Suite. Avoid Garden View.'],
      ['How to get there?','30-min FAO transfer.']
    ],
    email: 'Subject: Honeymoon inquiry — Vila Joya\n\nDear Reservations,\n\nWe would like to book a Deluxe Ocean Suite for our honeymoon [DATES] (5 nights). Please confirm honeymoon arrival amenity, the Vila Joya restaurant tasting menu reservations for three evenings, and spa couples\' treatment.\n\nThank you,\n[Names]'
  },
  {
    slug: 'hotel-cascade-wellness-lagos-algarve',
    name: 'Hotel Cascade Wellness & Lifestyle Resort',
    destination: 'algarve', country: 'portugal',
    seo_title: 'Cascade Wellness Lagos Algarve Honeymoon Review 2026',
    seo_desc: '92-villa clifftop wellness resort west Algarve. Score 80/100, from $320/night.',
    types: ['luxury','wellness','beach'], score: 80,
    breakdown: { adults_only:0, couples_pct:14, spa:13, award:9, pool:9, beach:7, room_service:8, stars:9, luxury:8 },
    stars: 5, min: 320, max: 1200, adults: false,
    amenities: ['spa','pool','clifftop','wellness','beach','sauna','yoga','close-to-lagos','villa','infinity-pool'],
    ta: 4.6, tac: true, couples: 79,
    verdict: 'Cascade Wellness is the western-Algarve wellness-focused option — 92 villas and rooms on the cliff between Lagos and Praia do Porto de Mós, with one of the most extensive spa programs on the coast. The wellness program is genuine: yoga, hammam, salt cave, full water-thermal circuit, and a serious roster of treatments. The architecture is contemporary Mediterranean — white volumes, palm gardens, a central infinity pool with cliff and Atlantic view. The villa accommodations have private gardens, plunge pools, and direct cliff-path access. Lagos town is 10-min drive; Praia do Camilo and Ponta da Piedade are walking distance. Caveats: not directly on the beach — descent to the small beach below is via cliff path. The wellness-program atmosphere can feel slightly retreat-y for honeymooners who want resort-festive vibes. Food is good (Senses restaurant) but not destination-level. But for honeymooners who want a wellness-focused western Algarve base with serious spa, this is the right pick — and the value is excellent.',
    best_room: 'Villa Suite with private plunge pool and clifftop view (90 m²). Step up to the Premium Villa for the 2-bedroom standalone. Avoid Standard Garden Rooms — they lack the cliff drama.',
    itinerary: [
      ['Arrival via Faro','90-min FAO transfer. Check-in with welcome smoothie. Settle into Villa Suite. Sunset on plunge pool deck. Dinner at Senses restaurant.'],
      ['Wellness day','Morning yoga. Spa hydrothermal circuit (hammam, sauna, salt cave). Lunch healthy spa menu. Afternoon couples\' massage. Dinner at Senses.'],
      ['Lagos and Ponta da Piedade','Walk along clifftop to Ponta da Piedade (45 min). Lunch at O Camilo on Praia do Camilo below. Return for spa. Dinner at Lagos town (Don Sebastião).'],
      ['Sagres day','Drive 1h west to Sagres and Cabo de São Vicente. Lunch in Sagres. Sunset at the fortress. Return for late dinner.'],
      ['Benagil','Drive east to Praia da Marinha (40 min). Kayak to Benagil. Lunch at O Camilo. Return for spa afternoon. Light dinner.'],
      ['Vineyard','Drive to Quinta do Frances for vineyard tour and lunch. Return for final spa session. Final dinner at Senses.'],
      ['Slow departure','Late breakfast. Final pool swim. FAO transfer (90 min).']
    ],
    caveats: [
      'Not beachfront — small beach below accessible by cliff path.',
      'Wellness program is the point — atmosphere can feel retreat-y vs resort-festive.',
      'Food is solid but not destination-level.',
      'Standard Garden Rooms lack cliff drama.',
      '90-min FAO transfer — furthest of the central Algarve luxury hotels.'
    ],
    faqs: [
      ['Good for honeymooners?','Good for wellness-driven couples in the western Algarve.'],
      ['Best time to visit?','May–June and September–October.'],
      ['Book in advance?','2 months for Villa Suites.'],
      ['Adults-only?','No, but the wellness atmosphere is firmly adult.'],
      ['Best room type?','Villa Suite or Premium Villa. Avoid Standard Garden Rooms.'],
      ['How to get there?','90-min FAO transfer.']
    ],
    email: 'Subject: Honeymoon inquiry — Hotel Cascade Wellness\n\nDear Reservations,\n\nWe would like to book a Villa Suite with plunge pool for [DATES]. Please confirm honeymoon arrival amenity, hydrothermal circuit booking, couples\' massage, and Senses dinner reservation.\n\nThank you,\n[Names]'
  },
  {
    slug: 'anantara-vilamoura-resort-algarve',
    name: 'Anantara Vilamoura Algarve Resort',
    destination: 'algarve', country: 'portugal',
    seo_title: 'Anantara Vilamoura Algarve Honeymoon Review 2026',
    seo_desc: '280-room Anantara golf-and-spa resort in Vilamoura. Score 82/100, from $400/night.',
    types: ['luxury','wellness','beach'], score: 82,
    breakdown: { adults_only:0, couples_pct:14, spa:12, award:10, pool:9, beach:7, room_service:8, stars:9, luxury:9 },
    stars: 5, min: 400, max: 2000, adults: false,
    amenities: ['spa','pool','golf','vilamoura','butler','infinity-pool','adults-pool','fine-dining','tennis','close-to-faro'],
    ta: 4.5, tac: true, couples: 78,
    verdict: 'Anantara Vilamoura is the Thai-spa-heritage brand\'s Algarve outpost — 280 rooms with a strong wellness program in the Vilamoura golf estate, 20 min from Faro airport. The Anantara spa is one of the best in southern Iberia (the brand is famous for spa). The Victoria course at Vilamoura — a Dom Pedro Hotels golf course directly accessible — is one of the great Algarve rounds. The hotel is not on the beach but offers private beach club shuttle to Falésia beach. Caveats: 280 rooms is large, with corresponding kids-club presence. The architecture is competent rather than distinctive. Food is good but not Michelin. But for honeymooners who specifically want Anantara spa expertise and golf at a serious value below Conrad Algarve, this is the smart play. The Adults Only pool zone is a relief mid-day.',
    best_room: 'Deluxe Pool View Suite with terrace. Step up to the Spa Junior Suite for direct spa access. Avoid Deluxe Garden View — back-facing.',
    itinerary: [
      ['Arrival via Faro','25-min FAO transfer. Check-in. Settle into Deluxe Pool View Suite. Sunset on the terrace. Dinner at Ria Formosa restaurant.'],
      ['Spa day','Full Anantara spa hydrothermal circuit. Couples\' Thai-style massage. Lunch at the spa cafe. Dinner at Emo Wine Bar.'],
      ['Beach club','Shuttle to Falésia beach club. Beach morning. Lunch on the sand. Afternoon pool. Dinner at Ria Formosa.'],
      ['Golf','Round at Victoria Vilamoura. Lunch at the clubhouse. Afternoon spa. Light dinner.'],
      ['Benagil','Drive 1h west to Praia da Marinha. Cliff walk and Benagil view. Lunch at O Camilo. Return for spa. Dinner at the bar.'],
      ['Tavira','Drive 45 min east to Tavira. Lunch on Ilha de Tavira. Final dinner at Emo.'],
      ['Slow departure','Late breakfast. Pool. 25-min FAO transfer.']
    ],
    caveats: [
      '280 rooms — resort feel, not boutique.',
      'Not beachfront — beach access by shuttle.',
      'Food is good but not Michelin-level.',
      'Family-friendly with kids-club; book non-school weeks.',
      'Deluxe Garden View has no view — confirm category at booking.'
    ],
    faqs: [
      ['Good for honeymooners?','Good value choice for Anantara spa expertise and golf.'],
      ['Best time to visit?','May–June and September–October.'],
      ['Book in advance?','2 months for Deluxe Pool View Suites.'],
      ['Adults-only?','No, but adult-only pool zone exists.'],
      ['Best room type?','Deluxe Pool View Suite or Spa Junior Suite. Avoid Garden View.'],
      ['How to get there?','25-min FAO transfer.']
    ],
    email: 'Subject: Honeymoon inquiry — Anantara Vilamoura\n\nDear Reservations,\n\nWe would like to book a Deluxe Pool View Suite for [DATES]. Please confirm honeymoon arrival amenity, Anantara spa couples\' hydrothermal package, Victoria Vilamoura golf access, and Ria Formosa dinner reservation.\n\nThank you,\n[Names]'
  },
  {
    slug: 'memmo-baleeira-sagres-algarve',
    name: 'Memmo Baleeira, Sagres',
    destination: 'algarve', country: 'portugal',
    seo_title: 'Memmo Baleeira Sagres Honeymoon Review 2026',
    seo_desc: '144-room boutique-design hotel at end-of-Europe Sagres. Score 79/100, from $250/night.',
    types: ['boutique','adventure','beach'], score: 79,
    breakdown: { adults_only:0, couples_pct:14, spa:9, award:8, pool:8, beach:9, room_service:7, stars:8, luxury:7 },
    stars: 4, min: 250, max: 800, adults: false,
    amenities: ['oceanfront','spa','pool','beachfront','surf','design-forward','wild-coast','close-to-cabo','sustainable','fine-dining'],
    ta: 4.5, tac: true, couples: 81,
    verdict: 'Memmo Baleeira is the western tip of Europe\'s only serious boutique-design hotel — 144 rooms in a contemporary white-volume building above the Baleeira harbour in Sagres, the southwest extremity of the European mainland. The hotel was renovated and rebranded by Memmo in 2014 with a distinctive minimalist aesthetic — white surfaces, raw wood, blue accents, surfboards as design objects. The location is unique: Sagres is wild, windy, dramatically positioned, with Cabo de São Vicente lighthouse (Europe\'s southwestern point) 15 min west. The hotel runs surf programs, owns its own catamaran, and integrates with the wild west-Atlantic culture. Caveats: at 144 rooms, the design-hotel feel is more relaxed than luxury-precise. Service is friendly-Portuguese rather than five-star polished. The beach below is wild and the Atlantic is cool. Food is solid (the Mareta View bar-restaurant is genuinely good) but not destination. But for honeymooners who want wild over polished, end-of-Europe atmosphere, surf culture, and serious value, this is the singular Sagres choice.',
    best_room: 'Premium Ocean View Room with balcony (35 m²). Step up to the Family Loft for the two-bedroom apartment with kitchen. Avoid Standard rooms — they back onto the parking side.',
    itinerary: [
      ['Arrival via Faro','2h FAO transfer (longest of the Algarve luxury hotels). Check-in with welcome cocktail. Settle into Premium Ocean View Room. Sunset at the Mareta View bar. Dinner at the hotel restaurant.'],
      ['Surf lesson','Morning surf lesson at Praia do Tonel or Mareta beach (Surf Sagres or hotel-arranged). Lunch at the beach. Afternoon pool. Dinner.'],
      ['Cabo de São Vicente','Drive 15 min west to Cabo de São Vicente lighthouse and fortress. Walk the cliffs. Lunch at Sagres harbour (Marisqueira at the marina). Sunset at the lighthouse — the end-of-Europe sunset. Late dinner.'],
      ['Algarve cliff walk','Drive east 30 min to Praia do Castelejo or Cordoama. Wild cliff walks. Lunch at Pousada de Sagres or back at the hotel. Spa treatment afternoon.'],
      ['Lagos and Ponta da Piedade','Day east to Lagos (30 min). Ponta da Piedade cliffs. Lunch at O Camilo. Return for sunset at the Mareta View bar. Light dinner.'],
      ['Catamaran day','Half-day catamaran from Baleeira harbour — coastal sailing west along the wild Vincentian coast. Lunch on board. Return mid-afternoon. Final dinner at the hotel.'],
      ['Slow departure','Late breakfast at the Mareta View bar. 2h FAO transfer.']
    ],
    caveats: [
      'Wild and windy location — not for couples who want sheltered Mediterranean calm.',
      '144 rooms is mid-sized; design-hotel rather than ultra-luxury polish.',
      '2h FAO transfer is the longest of the Algarve luxury options.',
      'Food is good but not Michelin or destination-level.',
      'Atlantic water is cool — surf wetsuit recommended even in summer.'
    ],
    faqs: [
      ['Good for honeymooners?','Excellent for adventurous couples who want wild over polished and end-of-Europe atmosphere.'],
      ['Best time to visit?','May–June and September–October. April for surf season.'],
      ['Book in advance?','1–2 months for Premium Ocean View rooms.'],
      ['Adults-only?','No, but the location is firmly adult.'],
      ['Best room type?','Premium Ocean View Room. Avoid Standard rooms.'],
      ['How to get there?','2h FAO transfer.']
    ],
    email: 'Subject: Honeymoon inquiry — Memmo Baleeira\n\nDear Reservations,\n\nWe would like to book a Premium Ocean View Room for our honeymoon [DATES]. Please confirm honeymoon arrival amenity, surf lesson booking, catamaran half-day, and Mareta View bar dinner reservation.\n\nThank you,\n[Names]'
  }
]

function buildPhotos(slug) {
  return [
    { url: `/images/hotels/${slug}/hero.webp`, alt: `${slug} — hero`, type: 'hero' },
    { url: `/images/hotels/${slug}/room.webp`, alt: `${slug} — room`, type: 'room' },
    { url: `/images/hotels/${slug}/pool.webp`, alt: `${slug} — pool`, type: 'pool' },
    { url: `/images/hotels/${slug}/spa.webp`, alt: `${slug} — spa`, type: 'spa' },
    { url: `/images/hotels/${slug}/dining.webp`, alt: `${slug} — dining`, type: 'dining' }
  ]
}

let written = 0
for (const h of hotels) {
  const out = {
    slug: h.slug,
    name: h.name,
    destination: h.destination,
    country: h.country,
    seo: { title: h.seo_title, description: h.seo_desc },
    experience_types: h.types,
    honeymoon_score: h.score,
    score_breakdown: h.breakdown,
    stars: h.stars,
    price_per_night_usd: { min: h.min, max: h.max },
    adults_only: h.adults,
    amenities: h.amenities,
    photos: buildPhotos(h.slug),
    tripadvisor_rating: h.ta,
    tripadvisor_award: h.tac,
    couples_review_pct: h.couples,
    content: {
      verdict: h.verdict,
      best_room: h.best_room,
      itinerary_7_nights: h.itinerary.map((it, i) => ({ day: i + 1, title: it[0], description: it[1] })),
      caveats: h.caveats,
      faqs: h.faqs.map(([question, answer]) => ({ question, answer })),
      email_template: h.email
    },
    booking_urls: {},
    last_updated: '2026-06-09T00:00:00.000Z'
  }
  writeFileSync(join(HOTELS_DIR, `${h.slug}.json`), JSON.stringify(out, null, 2) + '\n')
  written++
}
console.log(`Wrote ${written} hotel JSON files`)
