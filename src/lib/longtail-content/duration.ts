import type { DurationContent } from './types'

export const DURATION_CONTENT: Record<number, DurationContent> = {
  3: {
    intro:
      "A 3-day honeymoon is a mini-moon, and the planning math is unforgiving. Two days of full travel time, two real days, two nights in the room. The only versions that work are short-haul European city escapes — Paris, Venice, Barcelona, Marrakech — where the destination compresses well, the flight is under 3 hours from origin, and you don't need to leave the hotel except for dinners that are within walking distance. The honest read on 3 days: it works for couples for whom the wedding itself was the destination, who want a luxurious immediate post-wedding window before returning to life, and who plan to take a larger 'real' honeymoon later. The mistake is trying to make a 3-day honeymoon feel like a 7-day one. The right move is to lean into the format: one extraordinary hotel, two big meals, one signature experience (a private gondola, a hammam, a Marrakech rooftop dinner). Anything more is the wrong shape.",
    whoFor:
      "Three-day honeymoons fit two specific couples: those whose wedding is followed by an immediate work or family commitment that prevents a longer trip (and who plan a 'second honeymoon' 6–12 months later), and those who simply prefer a luxurious decompression weekend over a longer trip. Both are valid. The wrong fit is the couple who wants a 'real' honeymoon but is trying to compress it — they will arrive exhausted, leave exhausted, and not actually get the rest the wedding-honeymoon arc is supposed to provide.",
    routings: [
      {
        title: 'Paris weekend — Le Bristol or Plaza Athénée, 2 nights',
        hotelSlug: undefined,
        body: "Friday evening: arrive (most US East Coast couples land Saturday morning; UK and EU couples Friday night). Check in, dinner at a hotel restaurant or walk to a 5-minute neighborhood bistro. Saturday: late breakfast, Musée d'Orsay (small enough to do in 2 hours), lunch in the 6th, Tuileries walk, Champagne at the Ritz Bar, dinner at one Michelin or three-bistro spread. Sunday: late hotel breakfast, one museum (Rodin works), lunch, depart. Two real days, one phenomenal hotel, no transit drama. The Paris weekend is the most-replicated 3-day honeymoon for a reason.",
      },
      {
        title: 'Venice weekend — Aman Venice or Belmond Hotel Cipriani, 2 nights',
        hotelSlug: 'aman-venice',
        body: 'Friday: arrive Marco Polo, water taxi to the property, lunch on the canal, evening at Harry\'s Bar. Saturday: private gondola at dawn (book the night before, the dawn version is the only one worth doing), Cannaregio walking, lunch at Osteria alle Testiere, Murano late afternoon, dinner at Antiche Carampane. Sunday: Peggy Guggenheim before lunch, water taxi back to MXP. The Venice weekend works because Venice itself is 3 days of content — and the water taxi from MXP to your hotel is itself a 30-minute experience that compresses arrival drama.',
      },
      {
        title: 'Marrakech long weekend — La Mamounia or Royal Mansour, 3 nights',
        hotelSlug: undefined,
        body: "Friday: arrive, hammam in the afternoon, dinner in the hotel courtyard. Saturday: Jemaa el-Fnaa at dusk, dinner at Café Clock or Nomad. Sunday: half-day Atlas drive (Kasbah Tamadot for lunch), back for the hotel pool. Monday: souks in the morning, late lunch, depart. Marrakech is the warmest 3-day honeymoon — the riads are designed for the format, the spa culture is real, and the food doesn't ask for tour-guide energy. Avoid summer (June–September); November–March is the right window.",
      },
    ],
    theMath:
      "The flight math is the constraint. A 3-day honeymoon needs flights under 3 hours each way — anything longer, and you spend half the trip in motion. For US East Coast couples, the candidates are Bermuda, Bahamas, Caribbean direct flights, or Iceland (5 hours, the longest plausible). For US West Coast couples, only Hawaii really works in 3 days, and most couples would prefer to extend it. For UK couples, all of Europe is reachable in 3 hours. For European couples, the entire Mediterranean is on the table. The 3-day rule of thumb: arrive afternoon Day 1, full days Day 2 and Day 3 morning. Two real dinners. One signature experience. No more.",
    closing:
      "A 3-day honeymoon is not a lesser honeymoon — it's a different shape. The couples who do this well plan it consciously as the post-wedding decompression and then book a real trip for later. The couples who do it poorly try to make 72 hours feel like a week.",
    faqs: [
      { question: 'Is 3 days really enough for a honeymoon?', answer: "Only if you're treating it as a mini-moon (decompression after the wedding, with a real honeymoon to follow), or if you genuinely prefer a luxurious weekend to a longer trip. Most couples do better with 5 nights at a comparable property than 3 nights at a slightly nicer one." },
      { question: "What's the best 3-day honeymoon destination?", answer: 'Venice — the city, the water-taxi arrival, the gondola, and the food all compress beautifully into 72 hours. Paris is the second-best, Marrakech the warm-weather pick.' },
      { question: 'Can we do the Caribbean in 3 days?', answer: 'Only from the US East Coast, and only direct (Bermuda, Bahamas, Turks & Caicos). The flight time eats too much of a 3-day window from anywhere else. Even from NYC, the Friday-Sunday rhythm is tight.' },
      { question: 'How much should a 3-day honeymoon cost?', answer: 'A confidently luxurious 3-day honeymoon is $4–8k all-in: $1,500/night × 2 nights at a top hotel, plus $1,000 in flights, plus $1,500 in restaurants and experiences. The right hotel is more important than the duration here — splurge on the property, accept the format.' },
    ],
  },

  5: {
    intro:
      "Five days is the smartest short honeymoon — the one that gives you 4 full days of actual rest while keeping the flight burden manageable. The math: arrive Day 1 (half day), four full days, half-day departure Day 5. For US East Coast couples, the Caribbean direct flights work perfectly — Turks & Caicos, Bahamas, Bermuda, the short flights to St. Lucia and Antigua all land in time for an afternoon arrival and an evening dinner. For Europeans, Tuscany from London, Santorini, the Greek islands, and southern Italian destinations all compress to 5 nights without feeling rushed. The honest read on 5 days: it is enough time to actually decompress at a single great property, and it is exactly the wrong amount of time to try to split between two destinations. The five-day rule: one hotel, one country, one focus. The trip works because the format doesn't ask you to do anything except be there.",
    whoFor:
      "Five-day honeymoons fit couples with constrained time off (one or both of you with limited PTO), couples who specifically want to stay regional rather than long-haul, and couples for whom the wedding logistics are exhausting enough that 14 days would feel like a lot. They also fit couples doing a 'mini-moon then real honeymoon later' arc — the 5-day post-wedding immediate trip, with a 10-day adventure 12 months later.",
    routings: [
      {
        title: 'Turks & Caicos — Amanyara or COMO Parrot Cay, 5 nights',
        hotelSlug: undefined,
        body: "Direct from NYC, JFK, MIA, ATL. Arrive Day 1 mid-afternoon, dinner at the property. Day 2: beach morning, spa afternoon, signature dinner. Day 3: catamaran day (Grace Bay or to nearby cays), sunset back at the hotel. Day 4: spa morning, beach lunch, big dinner at the property's signature restaurant or the West Bay Club. Day 5: slow morning, transfer to airport. Five nights at Amanyara is the highest-quality 5-day honeymoon for US East Coast couples — the property is small enough that you'll feel it, the beach is the best in the Caribbean, and the direct flight removes the only friction point.",
      },
      {
        title: 'St. Lucia — Jade Mountain or Sugar Beach, 5 nights',
        hotelSlug: 'jade-mountain-st-lucia',
        body: "Direct from NYC, ATL, JFK (some flights connect). Arrive Day 1 evening, hotel dinner. Day 2: Sulphur Springs morning spa, Pitons view afternoon, dinner on the property's terrace. Day 3: hike a Piton (Petit Piton is more achievable), beach lunch, catamaran sunset. Day 4: spa day in earnest, big dinner. Day 5: slow morning, depart. Jade Mountain specifically is built for 5 nights — the 'sanctuary' rooms have open fourth walls onto the Pitons view, and the hotel doesn't expect you to leave.",
      },
      {
        title: 'Tuscany from London — Borgo Santo Pietro or Castello di Reschio, 5 nights',
        hotelSlug: 'borgo-santo-pietro-tuscany-italy',
        body: 'London to Florence is 2.5 hours. Drive 1.5 hours to the property. Arrive Day 1 evening. Day 2: hotel breakfast, pool morning, lunch in a nearby village, kitchen-garden tour. Day 3: a single Tuscan day trip (San Gimignano, Pienza, Montalcino — pick one, not three), dinner back at the property. Day 4: spa morning, late lunch, signature dinner. Day 5: drive to Florence, evening flight home. The Tuscan 5-day works because the property is the experience — you do not need to leave Borgo Santo Pietro to have a Tuscan honeymoon.',
      },
    ],
    theMath:
      "The flight constraint for 5 days is about 7 hours each way. Anything longer and the math starts to compress uncomfortably. US East Coast: the whole Caribbean and short-haul Mexico work. US West Coast: Hawaii (5–6 hours) is the sweet spot. Europe: the Mediterranean, Italy, Greece, North Africa. The non-starters at 5 days: Maldives (10+ hours each way), Bora Bora (16+ hours from US East), Bali (24+ hours from US). For couples flexible on direction, the 5-day rule is 'pick the closest destination that still feels different from home' — the contrast matters more than the distance.",
    closing:
      "Five days is the under-rated honeymoon duration. It gets dismissed because it's not the 'standard' 7, but it works for couples who'd otherwise stretch budget too thin trying to make 7 happen, or who simply want a more grounded post-wedding decompression. The trip is real; the format is honest.",
    faqs: [
      { question: 'Is 5 nights enough for a honeymoon?', answer: 'Yes — 4 full days plus arrival and departure half-days is a real honeymoon length. The trick is committing to a single property in a single destination. Splitting 5 nights between two locations destroys the rest you came for.' },
      { question: 'Caribbean or Mediterranean for 5 nights?', answer: 'Caribbean from the US East Coast (the flight time is friendliest). Mediterranean from Europe (same reason). For US West Coast couples, Hawaii is usually the right call — Bahamas and Caribbean direct flights are limited.' },
      { question: 'Can we do the Maldives in 5 nights?', answer: 'Mathematically yes, experientially no. The flight time eats two full days each way; you have three real days at the resort. Most couples regret it. Wait until you can spend 7+.' },
      { question: "What's the right hotel category for 5 nights?", answer: 'Higher than for 7 nights at the same budget. Five nights at a $1,500/night property feels better than 7 nights at $1,000/night — the property is the experience, and the better property delivers more memorable individual moments.' },
    ],
  },

  7: {
    intro:
      "Seven nights is the honeymoon archetype — long enough to slow down, short enough not to need a second stop, and exactly the duration most luxury resorts design their guest experience around. The Maldives invented the 7-night format and Bora Bora perfected it: arrive Saturday, leave Saturday, six full days at one resort with no transit drama in the middle. For most couples, this is the correct honeymoon shape. The honest read on 7 days: it gives you enough time to fully reset (the first 2 days you're decompressing from the wedding, the middle 3 are when you actually relax, the last 2 are when you start mentally returning), and it doesn't ask you to over-plan or over-pack. The only credible alternative shape for 7 days is a single-country split (3 nights one location, 4 nights another) where the contrast is the entire point — Bali (Ubud + Uluwatu), Italy (Rome + Tuscany, or Como + Milan), Japan (Kyoto + Tokyo). Otherwise: one hotel, seven nights, no apologies.",
    whoFor:
      "Seven nights is the universal default. It fits 80% of couples. The exceptions: couples who specifically want a mini-moon (3–5 nights) or who can afford the time and budget for a true two-stop trip (10+ days). For everyone else, 7 is the right answer. The format is also the most flight-distance-flexible — it justifies long-haul to the Pacific or Indian Ocean, and it works fine for shorter trips to the Caribbean or Mediterranean.",
    routings: [
      {
        title: 'Maldives at one resort — 7 nights overwater',
        hotelSlug: 'conrad-maldives-rangali-island',
        body: "The honeymoon archetype. Arrive Saturday afternoon via seaplane or speedboat. Six full days. Leave Saturday morning. Inside that frame: 2 days of decompression (sleep, snorkel, room service, no expectations), 3 middle days of real rest punctuated by 2 signature experiences (sandbank breakfast, manta excursion, dolphin sunset cruise, spa day), 2 returning days (slow morning swims, last reef snorkels, lazy meals). Conrad Maldives Rangali Island is the prototypical Maldives 7-night property; Anantara Kihavah and Four Seasons Landaa Giraavaru are the upgrades. The 7-night Maldives feels like 10 because there's nothing to do but be there.",
      },
      {
        title: 'Bali two-stop — 3 Ubud + 4 Uluwatu',
        hotelSlug: 'capella-ubud-bali',
        body: "The Bali honeymoon has its own established rhythm. Ubud first (Capella, Aman Ubud, or Mandapa): rice-paddy walks, Hindu temple visits, kitchen-of-Locavore dinners, a single yoga or meditation morning. Three nights is exactly right. Then drive south (90 minutes) to Uluwatu: Bulgari, Six Senses Uluwatu, or Alila Villas Uluwatu. Four nights of beach-and-cliff, surf if you're into it, sunset at Single Fin or the property's own. The two-stop works because the contrast is the entire point — culture then collapse. Don't reverse the order: spiritual energy lands better on a rested honeymoon arrival than tacked-on at the end.",
      },
      {
        title: 'Italy split — 3 cities + 4 country',
        hotelSlug: 'le-sirenuse-positano-italy',
        body: "Rome 3 nights at Hotel de Russie or Hotel Eden, then drive 3 hours south to the Amalfi (Le Sirenuse Positano) for 4 nights. Or, alternatively: Florence 3 + Tuscan villa 4 (Borgo Santo Pietro). The city-then-country split is the Italian 7-night that doesn't compromise — you get the culture, the food culture, the architecture, and then you get the slow honeymoon rhythm of the country property. The mistake is reversing it (country first feels rude to the city; you arrive exhausted) or splitting evenly across two cities (4 nights in Rome is too many, 4 nights in Florence is too many; the country property is what makes the trip a honeymoon).",
      },
    ],
    theMath:
      "Seven nights justifies any flight distance. Maldives, Bora Bora, Fiji, Seychelles — all are 14+ hours from US East Coast and still work because the resort experience is long enough to absorb the flight investment. The arrival math: lose half a day (or a full day for the Pacific) on arrival, lose half a day on departure, six real days in between. Jetlag matters — the eastward returns (Asia and Pacific back to US) are brutal. Plan for 2–3 days of post-trip recovery, and avoid scheduling anything important the Monday after a 7-night Maldives or Bora Bora trip. For Mediterranean and Caribbean 7-nights, jetlag is minimal and the format is as relaxed as the brochures suggest.",
    closing:
      "If you're not sure what duration to pick, the answer is seven nights. It's the format the entire honeymoon industry is built around, it fits the rest cycle (decompress, rest, return), and it justifies enough flight investment to actually go somewhere different. Pick the destination first; 7 nights makes any honest honeymoon destination work.",
    faqs: [
      { question: 'Is 7 nights too long at one property?', answer: 'Almost never. The properties designed for honeymoons (Maldives resorts, Bora Bora overwater, Caribbean luxury) are built around the 7-night experience. The exception is purpose-built city hotels (Aman Venice, Aman Kyoto) — those are 3–4 night properties, not 7-night ones.' },
      { question: 'Maldives 7 nights or Italy 7 nights?', answer: 'Maldives if you want one place, one rhythm, total reset. Italy if you want movement, food, and the wedding-debrief conversations to happen on the road. Both work as 7-night honeymoons; they just shape the experience differently.' },
      { question: "What's the right hotel split for 7 nights?", answer: 'One hotel for most destinations. Two only if the contrast is the entire point (Bali = Ubud + Uluwatu, Japan = Kyoto + Tokyo, Italy = city + country). Three is too many for 7 nights.' },
      { question: 'How much budget should we allocate?', answer: 'At the entry luxury tier: $700/night × 7 = $4,900, plus $1,500 flights, plus $1,500 extras = $7,900 per couple. At the comfortable luxury tier: $1,200/night × 7 = $8,400, plus $2,000 flights, plus $2,000 extras = $12,400. The 7-night honeymoon is the most budget-elastic format — every $1,000 you add visibly upgrades the trip.' },
    ],
  },

  10: {
    intro:
      "Ten days is the two-stop honeymoon — the format where long-haul finally becomes worth it because the trip on the ground is long enough to absorb the flight investment. The math is the 5+5 rhythm: five nights at one destination, five at a contrasting destination, both reachable from the same regional hub. Bali + Komodo. South Africa + Mauritius. Kenya + Zanzibar. Maldives + Sri Lanka. Italy 5 cities + 5 country. The honest read on 10 days: it is the right duration for couples who specifically want to fit two contrasting experiences into one honeymoon — bush and beach, culture and rest, two distinct climates. The trap is over-stacking: trying to do three stops in 10 days creates more transit time than experience time. The discipline is to commit to two destinations and let each get its full 5-day allocation. The other discipline: pick destinations where the second leg is the rest leg. After the active first half (safari, hill country, city), the second half should be a single property where you don't need to do anything.",
    whoFor:
      "Ten-day honeymoons fit couples with the PTO budget to take the time off, the financial budget to fund two destinations, and the appetite for some structure in their honeymoon. They also fit specific destination types — safari pairings (which only work with adjacent beach), island-hopping countries (Bali, the Philippines, Greek islands), and country-tours that justify the format (Japan, Italy, Argentina + Chile).",
    routings: [
      {
        title: 'Safari + beach — Kenya + Zanzibar, 5+5',
        hotelSlug: 'angama-mara-kenya',
        body: "Days 1–5: Kenya's Maasai Mara. Angama Mara, Cottar's 1920s, or Mara Bushtops. Game drives morning and afternoon, lodge breaks in the middle of the day, fireside dinners. Five nights is the minimum for serious safari (less and you spend the whole trip arriving and departing). Days 6–10: Zanzibar. Mnemba Island or the Residence Zanzibar. Beach reset, snorkel, spice tour. The pairing works because the Mara is intense (early starts, dust, vehicles) and Zanzibar is decompression. Don't reverse this. Kenya first, beach second, always.",
      },
      {
        title: 'Bali + Komodo, 5+5',
        hotelSlug: 'capella-ubud-bali',
        body: 'Days 1–5: Bali, the classic Ubud + Uluwatu split (3+2 or 2+3 depending on whether you want more culture or more beach). Days 6–10: Fly Denpasar to Labuan Bajo, then either a 4-night liveaboard (Aqua Blu, Lamima) or land-based at Ayana Komodo or Plataran Komodo. Komodo dragons, Padar viewpoint, Pink Beach, manta dive at Manta Point. The two-stop works because Bali alone is too cultural for many couples and Komodo alone is too remote. Together they form the most-recommended 10-day Indonesian honeymoon.',
      },
      {
        title: 'Italy 5 cities + 5 country',
        hotelSlug: 'le-sirenuse-positano-italy',
        body: "Days 1–5: Rome or Florence (or split 2+3 between them), with all the city honeymoon energy — restaurants, museums, food markets, late-night gelato. Days 6–10: drive (or take the train) to the Amalfi Coast, Tuscany, or Lake Como for the country half. Le Sirenuse Positano, Borgo Santo Pietro, or Grand Hotel Tremezzo. The discipline is that the country half is the rest half — no day trips, no driving, no plans. After 5 days of Rome's intensity, the Amalfi is exactly what 5 days at a Maldives resort is for the Bali half of an Asian honeymoon: total decompression.",
      },
    ],
    theMath:
      "Ten days justifies long-haul anywhere — French Polynesia, Africa, Asia, Oceania all work. The transit math: lose 1.5 days on arrival (for Pacific/Asia), 1 day on departure. About 8 days on the ground. Split that into 5+5 or 4+4 with a transit day in between. The mistake at 10 days: trying to do 3+3+4 or 3+4+3 — three stops in 10 days has 30% of your time in transit. Pick two destinations. Commit. The other 10-day trap: under-budgeting the transit between the two destinations. A 'short' flight between Kenya and Zanzibar still eats a full day; a Bali-to-Komodo internal flight is genuinely a half-day each way.",
    closing:
      "Ten days is the upgrade from a single-destination honeymoon to a two-destination one. The couples who do this well plan around contrast — active then quiet, culture then coast, bush then beach. The couples who do this poorly try to fit three things into the slot and end up with a fragmented trip.",
    faqs: [
      { question: 'Is 10 nights worth the extra effort versus 7?', answer: 'Yes, if you specifically want to do two destinations. If you would otherwise just spend 10 nights at the same Maldives resort, 7 is plenty. The 10-day format pays back when contrast is the point.' },
      { question: "What's the best 10-day safari + beach pairing?", answer: 'Kenya + Zanzibar is the classic. South Africa (Sabi Sands) + Mauritius is the luxury upgrade. Botswana + Cape Town is the third option (less beach, more wine-and-coast). All three are real 10-day honeymoons.' },
      { question: 'Can we do 10 days in Japan?', answer: "Yes — and it's the minimum coherent Japan trip. Tokyo 3 nights, Kyoto 4, plus a 3-night third stop (Hakone, Naoshima, or a Kyoto-area ryokan). Less than 10 days and Japan feels like a sampler. More than 14 and it's an extended trip rather than a honeymoon. 10–12 is the sweet spot." },
      { question: 'How much budget should we allocate for 10 days?', answer: 'At the entry luxury tier: $700/night × 10 = $7,000 hotel, plus $2,500 flights (including the internal flight between destinations), plus $2,500 extras = $12,000 per couple. At the comfortable luxury tier: $1,200/night × 10 = $12,000, plus $3,500 flights, plus $3,500 extras = $19,000.' },
    ],
  },

  14: {
    intro:
      "Fourteen days is the ultimate honeymoon — the format that earns the once-in-a-lifetime label, fits the truly long-haul destinations (French Polynesia island hopping, full safari + beach + city, the Italian grand tour, the South American shoulder pairing), and gives you actual time to rest rather than just visit. The math becomes generous: 12 days on the ground if you account for arrival and departure, allowing for 2–3 destinations with real allocations to each. The honest read on 14 days: it's not for everyone. It requires the PTO budget (combining wedding leave with regular vacation), the financial budget (typically $25k+ for honest 14-day honeymoons), and the appetite for a more structured trip. But for the couples who can do it, it's the format that delivers the trip people talk about a decade later. The discipline at 14 days is the same as at 10 — pick destinations where the contrast is the point, allocate at least one block of 5+ nights to a single property, and don't try to do four things.",
    whoFor:
      "Fourteen-day honeymoons fit couples for whom the wedding logistics afford a single extended absence, who have the financial flexibility for the format, and who specifically want a 'trip of a lifetime' rather than a 'just a honeymoon'. They also fit couples doing destinations that need 14 days to be done honestly — French Polynesia island-hopping, South Africa + Botswana safari + Mauritius, Argentina + Chile across the southern cone.",
    routings: [
      {
        title: 'French Polynesia island-hop — Tahiti + Moorea + Bora Bora',
        hotelSlug: 'four-seasons-bora-bora',
        body: 'Days 1: Arrive Papeete (Tahiti), one overnight at the Hilton or Intercontinental. Days 2–6: Moorea — Hilton Moorea or Sofitel Kia Ora. Lagoon kayak, Belvedere viewpoint, dolphin swim, the under-appreciated Polynesian island. Days 7–13: Bora Bora — Four Seasons Bora Bora or St. Regis. Overwater villa, snorkel safari, motu picnic, lagoon dinner. Day 14: Return Papeete, evening flight home. The 14-day French Polynesia is the only format that lets you actually do the country justice — 5 nights Moorea + 7 nights Bora Bora is the proven rhythm. Shorter and you compress; longer and you get island fever.',
      },
      {
        title: 'South Africa + Botswana + Mauritius — the grand African',
        hotelSlug: 'angama-mara-kenya',
        body: "Days 1–3: Cape Town. The Silo or Ellerman House. Table Mountain, V&A Waterfront, half-day winelands. Days 4–8: Sabi Sands or Botswana's Okavango Delta. Singita, &Beyond, Mombo Camp. Five nights of safari is the minimum for serious game viewing. Days 9–14: Mauritius. Constance Le Prince Maurice, Royal Palm, Saint Géran. Beach reset, water sports, spa. The pairing works because Cape Town is city energy, the safari is intense, and Mauritius is collapse. Three destinations, three weeks of contrast in two weeks. This is the most ambitious 14-day honeymoon — and the most memorable.",
      },
      {
        title: 'Italian grand tour — 14-day Rome + Tuscany + Amalfi',
        hotelSlug: 'le-sirenuse-positano-italy',
        body: 'Days 1–4: Rome. Hotel de Russie or Hotel Eden. The Vatican (one morning), the markets, the Trastevere dinners, the late-night gelato walks. Days 5–9: Tuscany. Borgo Santo Pietro, Castello di Reschio, or Belmond Castello di Casole. Five nights of country quiet — pool, kitchen garden, single-village day trips. Days 10–14: Amalfi Coast. Le Sirenuse, Hotel Santa Caterina, or Belmond Hotel Caruso. Coast and cliffs, lemon-garden lunches, the final five-night settle. The 14-day Italian grand tour rewards the couples who want food, scenery, and three distinct rhythms (urban energy, country slow, coastal romance) without flying internationally.',
      },
    ],
    theMath:
      "Fourteen days lets you fly anywhere — Pacific, Asia, Africa, South America, Antarctica even. The trip has 12 real days on the ground after accounting for arrival and departure. The format works best as 2–3 destinations with 4–7 nights each. Avoid the 4-destination temptation; that's a 21-day trip compressed into 14. Internal flight days don't count as destination days — be honest about transit time. For long-haul itineraries (Pacific, Antarctica, deep Africa), allow for 2 nights at a city hub at the start and end (Papeete, Johannesburg, Buenos Aires) to absorb the long-flight jetlag. The 14-day rhythm: arrive at hub, regional transit, settle at first destination 5+ nights, regional transit, second destination 5+ nights, return to hub, fly home.",
    closing:
      "Fourteen days is the trip of a lifetime if you commit to it. The couples who do this well plan around contrast (always 2–3 distinct experiences) and allocate generously (no destination under 4 nights). The couples who do this poorly chase the Instagram itinerary across four countries and arrive home more tired than they left. The right 14-day honeymoon is structured but unhurried, ambitious but generous with rest.",
    faqs: [
      { question: 'Is 14 days worth the extra time versus 10?', answer: "Yes if you're specifically doing a destination that needs 14 days (French Polynesia, full safari + beach + city, the Italian grand tour). No if you'd otherwise just stretch 10 days of content into 14. The 14-day honeymoon pays back when the destinations earn it." },
      { question: 'How much does a 14-day honeymoon cost?', answer: 'At the comfortable luxury tier: $1,200/night × 14 = $16,800 hotel, plus $4,000 flights (long-haul + 2–3 internal), plus $4,000 extras = $24,800 per couple. At the top tier: $2,500/night × 14 = $35,000+, plus $6,000 flights, plus $5,000 extras = $46,000+. The 14-day format usually requires $25k minimum to do honestly.' },
      { question: 'Can we do 14 days in the Maldives?', answer: "Yes, but most couples reach island-fever around day 10. The smart play at 14 days for the Indian Ocean is Maldives + Sri Lanka — 7 nights Maldives followed by 7 nights Sri Lanka (Galle, tea country, Tangalle). The Sri Lanka half delivers culture and movement after the Maldives' total stasis." },
      { question: 'When should we go for 14 days?', answer: "Pick the destination first; the destination dictates the month. The 14-day French Polynesia trip works May–October. The 14-day African safari + beach works June–October. The 14-day Italian grand tour works May–early June or September. Don't try to fit a 14-day trip into a destination's wrong-month window — the time investment makes the weather variance more painful, not less." },
    ],
  },
}
