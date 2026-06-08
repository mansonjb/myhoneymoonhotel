import type { ComparisonContent } from './types'

// Keyed by URL slug (e.g. 'maldives-vs-bora-bora').
// Each pair has its own distinct angle.

export const COMPARISON_CONTENT: Record<string, ComparisonContent> = {
  'maldives-vs-bora-bora': {
    tldr:
      "The Maldives wins on cost, accessibility (from Europe), and sheer overwater density — 100+ resorts to choose from. Bora Bora wins on iconic visual identity (Mount Otemanu changes everything) and the warmer cultural experience. For most American couples, the Maldives is the smarter pick; for most European couples, Bora Bora is the dream-trip splurge that justifies the longer flight.",
    winnerGrid: [
      { criterion: 'Cost', winner: 'A', note: 'Maldives ~30% cheaper at comparable tier' },
      { criterion: 'Flight time (US East)', winner: 'A', note: 'Maldives 18h via Dubai/Doha; Bora Bora 16h via LAX' },
      { criterion: 'Iconic visuals', winner: 'B', note: 'Mount Otemanu is unmatched' },
      { criterion: 'Overwater inventory', winner: 'A', note: '100+ overwater properties vs ~10 in BB' },
      { criterion: 'Snorkel / marine life', winner: 'A', note: 'Maldives has manta + whale shark seasons' },
      { criterion: 'Culture / warmth', winner: 'B', note: 'Polynesian welcome is uniquely warm; Maldives is resort-bubble' },
      { criterion: 'Food', winner: 'B', note: 'Tahitian + French + Pacific fusion beats Maldives resort dining' },
      { criterion: 'Best for first-timer', winner: 'A', note: 'Maldives is more turn-key' },
    ],
    comparisonTable: [
      { criterion: 'Cost (entry overwater, 7 nights)', a: '$8,000–14,000', b: '$14,000–22,000' },
      { criterion: 'Climate (Nov–April)', a: 'Dry, calm, peak', b: 'Cyclone-edge; secondary season' },
      { criterion: 'Climate (May–Oct)', a: 'Monsoon, variable', b: 'Dry season, peak conditions' },
      { criterion: 'Flight from NYC', a: '~18h via Dubai or Doha', b: '~16h via LAX' },
      { criterion: 'Flight from London', a: '~10–13h direct or 1-stop', b: '~24h via LAX (brutal)' },
      { criterion: 'Best for', a: 'Snorkeling, reading, total isolation', b: 'Lagoon photography, Polynesian culture' },
      { criterion: 'Food', a: 'Resort-bound; international fusion', b: 'Tahitian + French + walkable village dinners' },
      { criterion: 'Vibe', a: 'Pure-luxury, resort-bubble', b: 'Pacific-warm, slightly less polished' },
      { criterion: 'Photogenic factor', a: 'Lagoon perfection', b: 'Mount Otemanu changes every shot' },
      { criterion: 'Language barrier', a: 'English in all resorts', b: 'French + English' },
    ],
    whichIf: [
      { scenario: "You're a first-time overwater honeymooner", pick: 'A', reason: 'Maldives is more turn-key; resorts handle every detail; English is universal.' },
      { scenario: 'You want the iconic Pinterest shot', pick: 'B', reason: "Mount Otemanu in every frame. Bora Bora's visual identity is unmatched." },
      { scenario: 'You have an $8k budget', pick: 'A', reason: 'Maldives entry-tier overwater is reachable; Bora Bora is not.' },
      { scenario: "You're flying from Europe", pick: 'A', reason: 'Maldives is 10–13h; Bora Bora is 24+h with a US connection.' },
      { scenario: 'You want to leave the resort sometimes', pick: 'B', reason: "Bora Bora's main island has restaurants, markets, and Polynesian culture; Maldives resorts are total bubbles." },
    ],
    anchorHotelA: 'conrad-maldives-rangali-island',
    anchorHotelB: 'four-seasons-bora-bora',
    splitItinerary:
      "If you have 14 days and the budget, doing both is the ultimate Indian + Pacific honeymoon. Days 1–7 in the Maldives at Conrad or Anantara Kihavah — flat seas, snorkel intensity, the 7-night settle. Days 8–14 in Bora Bora at Four Seasons or St. Regis — iconic-shot territory, lagoon excursions, Polynesian-warm dinners. Combined, you get the two definitive overwater experiences. Cost: $35–50k all-in. Reality: most couples do one or the other; the combined trip is for the once-in-a-lifetime case.",
    closing:
      "If you're choosing one and budget is a real constraint — Maldives. If you're choosing one and the iconic Bora Bora shot is what made you start thinking about a honeymoon in the first place — Bora Bora. Neither is wrong; the Maldives is more forgiving on planning, Bora Bora is more rewarding on memory.",
    faqs: [
      { question: 'Is the Maldives more romantic than Bora Bora?', answer: "Both are romantic; they're romantic differently. The Maldives is intimate-bubble romance — your villa is the world, no one needs to see you. Bora Bora is scenic-grand romance — the lagoon and Mount Otemanu form the backdrop of every meal. Most couples find the right answer matches their personality (Maldives for introverts, Bora Bora for view-seekers)." },
      { question: 'Which is cheaper?', answer: 'Maldives is roughly 25–35% cheaper at comparable tier. The Maldives entry-overwater starts around $1,200/night; Bora Bora entry-overwater starts around $1,500–1,800/night. For 7 nights plus flights, expect $10–14k Maldives versus $14–22k Bora Bora for US couples.' },
      { question: 'First-time pick — Maldives or Bora Bora?', answer: 'Maldives. It is more turn-key, more inventory to choose from, English universal, and more forgiving on dates (the dry season is longer). Bora Bora is the second-honeymoon or the milestone-anniversary destination.' },
      { question: 'For our age range (35+) — which?', answer: "Both work for 35+ couples. Maldives skews introverted-luxury; Bora Bora has slightly more variety in vibe across properties (the Four Seasons is calmer, the St. Regis is more social). If you want absolute quiet, Maldives. If you want a slightly more social honeymoon with restaurants and walks, Bora Bora's main island is friendlier." },
    ],
  },

  'santorini-vs-mykonos': {
    tldr:
      "Santorini wins on iconic-shot, sunset, and honeymoon photography. Mykonos wins on party energy, beach scene, and food variety. For honeymoons specifically, Santorini is the right answer for 80% of couples — it's calmer, more photogenic, and built around the romance the destination became famous for. Mykonos is the right answer for couples whose honeymoon is also a continuation of the wedding party.",
    winnerGrid: [
      { criterion: 'Romance / honeymoon vibe', winner: 'A', note: 'Cliffside cave suites, sunset at Oia' },
      { criterion: 'Sunset / photography', winner: 'A', note: 'Oia sunset is the iconic Greek shot' },
      { criterion: 'Beach quality', winner: 'B', note: 'Mykonos has the better swim beaches' },
      { criterion: 'Nightlife / restaurants', winner: 'B', note: 'Mykonos is the social Greek island' },
      { criterion: 'Crowds (high season)', winner: 'tie', note: 'Both are mobbed July–August' },
      { criterion: 'Hotel quality', winner: 'A', note: 'Santorini cave suites are unique-in-the-world' },
      { criterion: 'Cost', winner: 'tie', note: 'Comparable at the top tier' },
      { criterion: 'For introverts', winner: 'A', note: 'Santorini lets you disappear; Mykonos does not' },
    ],
    comparisonTable: [
      { criterion: 'Vibe', a: 'Cliffside, contemplative, photogenic', b: 'Beach club, social, cosmopolitan' },
      { criterion: 'Best hotel category', a: 'Cave suite with caldera view', b: 'Beach-front pool villa' },
      { criterion: 'Cost (7 nights, top tier)', a: '$7,000–14,000', b: '$8,000–16,000' },
      { criterion: 'Best for', a: 'Photography, sunsets, intimacy', b: 'Beach, food, nightlife, energy' },
      { criterion: 'Flight from NYC', a: '~13h via Athens', b: '~13h via Athens' },
      { criterion: 'Internal transit', a: 'Ferry or short flight from Athens', b: 'Ferry or short flight from Athens' },
      { criterion: 'Food', a: 'Good but resort-bound mostly', b: 'Excellent — varied, beach-to-table' },
      { criterion: 'Best month', a: 'May, September, early October', b: 'June, September' },
      { criterion: 'Photogenic factor', a: 'World-iconic', b: 'Pretty but not iconic' },
      { criterion: 'For first-timer', a: 'Yes', b: 'Yes' },
    ],
    whichIf: [
      { scenario: 'You want the iconic Greek honeymoon shot', pick: 'A', reason: 'Oia sunset, white-and-blue cave hotel — Santorini is the photo.' },
      { scenario: 'You loved your wedding party energy', pick: 'B', reason: 'Mykonos keeps the celebration going — Scorpios, Nammos, late-night food.' },
      { scenario: "You're introverted by nature", pick: 'A', reason: "Santorini's cave suites are private; you can spend the entire week without engaging the island's social scene." },
      { scenario: 'You want better beaches and swimming', pick: 'B', reason: "Mykonos has the better beach experience; Santorini's beaches are functional rather than great." },
      { scenario: 'You want one perfect dinner per night', pick: 'B', reason: "Mykonos has stronger restaurant variety; Santorini's good restaurants are concentrated and book out." },
    ],
    anchorHotelA: 'andronis-luxury-suites-santorini',
    anchorHotelB: 'andronis-luxury-suites-santorini',
    splitItinerary:
      "If you have 7 nights and want both, the rhythm is Santorini first (4 nights) then Mykonos (3). Start contemplative, end social. Santorini cave suite for the romance and the sunset; Mykonos beach pool villa for the wind-down party. Don't reverse; arriving at Santorini's cliffside intimacy after Mykonos' energy lands wrong. Internal transit: ferry (3 hours) or short flight (45 minutes). Combined cost: $9,000–15,000 hotel for 7 nights, plus $1,800–2,500 flights, plus $1,500–3,000 extras.",
    closing:
      "Honest pick for a honeymoon specifically: Santorini. It is the Greek island built for the romance the format is supposed to deliver, and the cave-suite-with-caldera-view experience does not exist anywhere else in the world. Mykonos is the Greek island for the second wedding anniversary, or for couples whose honeymoon style is celebration rather than reset.",
    faqs: [
      { question: 'Is Santorini or Mykonos more romantic?', answer: 'Santorini, for most couples. The cave suites, the sunset, the cliffside dinners — the entire island is designed around the honeymoon experience. Mykonos is beautiful but its core vibe is social rather than romantic. For honeymoons specifically, Santorini wins.' },
      { question: 'Which is cheaper?', answer: "Roughly comparable at the top tier. Both have $1,000–2,000/night premium properties. Mykonos has more options at the mid-tier ($500–900/night) than Santorini, which is dominated by premium cave-suite properties. Mid-budget honeymoons are slightly easier in Mykonos." },
      { question: 'First-timer pick?', answer: "Santorini. The iconic shot, the cave suite, the sunset — these are what you came to Greece for. Mykonos is the right pick once you've done Santorini or for couples whose social style matches the island's energy." },
      { question: 'For our age range (40+) — which?', answer: 'Santorini is the calmer of the two. Mykonos at 40+ works if you specifically want the beach-club energy; if you want quiet honeymoon mornings, Santorini is the better fit.' },
    ],
  },

  'st-lucia-vs-jamaica': {
    tldr:
      "St. Lucia wins on photogenic drama (the Pitons), romance, and the boutique-luxury category (Jade Mountain, Sugar Beach). Jamaica wins on all-inclusive depth (Sandals, Couples), cost, and ease of access. For honeymoons specifically, St. Lucia is the smarter pick if budget allows; Jamaica is the smartest all-inclusive honeymoon in the Caribbean if budget is the primary constraint.",
    winnerGrid: [
      { criterion: 'Photogenic drama', winner: 'A', note: 'Pitons are the Caribbean Mount Fuji' },
      { criterion: 'All-inclusive depth', winner: 'B', note: 'Jamaica is the AI capital of the Caribbean' },
      { criterion: 'Cost', winner: 'B', note: 'Jamaica AI honeymoons start around $4–6k all-in' },
      { criterion: 'Boutique-luxury', winner: 'A', note: 'Jade Mountain, Sugar Beach, Anse Chastanet' },
      { criterion: 'Beach quality', winner: 'tie', note: 'Both have great beaches; different in character' },
      { criterion: 'Food (off-resort)', winner: 'A', note: 'St. Lucia has a stronger off-resort dining culture' },
      { criterion: 'Easy of access', winner: 'B', note: 'More direct flights from more US cities' },
      { criterion: 'Romance / honeymoon vibe', winner: 'A', note: 'Pitons + cliffside resort = signature romance' },
    ],
    comparisonTable: [
      { criterion: 'Cost (5 nights, mid-tier)', a: '$6,000–10,000', b: '$4,500–8,000' },
      { criterion: 'Best for', a: 'Cliffside romance, Pitons hike, catamaran sunset', b: 'All-inclusive simplicity, beach lounging, no decisions' },
      { criterion: 'Top hotels', a: 'Jade Mountain, Sugar Beach, Anse Chastanet', b: 'Sandals (multiple), Couples, Round Hill, Half Moon' },
      { criterion: 'Flight from NYC', a: '~4.5h direct (seasonal) or 1-stop', b: '~3.5h direct daily' },
      { criterion: 'Food', a: 'Off-resort dinners viable; Boucan, Coal Pot, Jacquot', b: 'Mostly all-inclusive resort dining; off-resort limited' },
      { criterion: 'Best month', a: 'Jan–Apr, late Nov–Dec', b: 'Jan–Apr, late Nov–Dec' },
      { criterion: 'Photogenic factor', a: 'World-iconic (Pitons)', b: 'Pretty but generic Caribbean' },
      { criterion: 'Language', a: 'English (+ French Creole)', b: 'English (+ Patois)' },
      { criterion: 'Off-resort exploration', a: 'Recommended — drive the west coast', b: 'Limited — stay at the resort' },
    ],
    whichIf: [
      { scenario: "You want the signature Caribbean honeymoon shot", pick: 'A', reason: 'The Pitons in the background of your beachfront photo. No other Caribbean island has equivalent geography.' },
      { scenario: "Budget is the primary constraint", pick: 'B', reason: 'Jamaica AI honeymoons at Sandals or Couples start around $4–6k all-in.' },
      { scenario: "You want a sunset cruise and Pitons hike", pick: 'A', reason: 'The active honeymoon Caribbean — St. Lucia delivers things to do beyond the resort.' },
      { scenario: "You want zero planning, full all-inclusive", pick: 'B', reason: "Jamaica's AI inventory is the deepest in the Caribbean — Sandals, Couples, Half Moon, Round Hill." },
      { scenario: "You're a first-time Caribbean honeymooner", pick: 'A', reason: "St. Lucia delivers the iconic experience; Jamaica is the second-time Caribbean (familiar already, easy logistics)." },
    ],
    anchorHotelA: 'jade-mountain-st-lucia',
    anchorHotelB: 'sandals-royal-plantation-jamaica',
    splitItinerary:
      "Combining is unusual but works for 10 days: 5 nights in Jamaica (Sandals Royal Plantation or Round Hill) for the AI decompression, then 5 nights in St. Lucia (Jade Mountain or Sugar Beach) for the iconic-romance half. Internal transit: short flight via Miami or direct seasonal hopper. The pairing works because Jamaica is the rest leg and St. Lucia is the experience leg — same logic as bush-then-beach safari.",
    closing:
      "Honest pick: St. Lucia if budget supports it; Jamaica if it doesn't. The Pitons-and-cliffside-cottage experience at Jade Mountain or Sugar Beach is unique in the Caribbean and worth paying for if the budget reaches. Jamaica is the smartest all-inclusive Caribbean honeymoon by a clear margin — but it's an AI honeymoon, not a signature one.",
    faqs: [
      { question: 'St. Lucia or Jamaica for a honeymoon?', answer: "St. Lucia for the signature experience; Jamaica for the all-inclusive value. Both deliver good honeymoons; the right answer depends on whether you want photogenic-romance (St. Lucia) or stress-free-luxury (Jamaica)." },
      { question: 'Which is cheaper?', answer: 'Jamaica, by 25–40% at comparable resort tier. Sandals Royal Plantation, Couples Negril, Half Moon all deliver real luxury at $400–800/night all-inclusive. St. Lucia equivalents start around $700–1,200/night.' },
      { question: 'Is St. Lucia worth the price premium?', answer: 'For couples who specifically want the Pitons in their photos and the cliffside-cottage experience — yes, the premium pays back. For couples who would be equally happy with a great Caribbean beach and AI dining — no, Jamaica delivers comparable value at lower cost.' },
      { question: 'For first-time Caribbean honeymooners — which?', answer: "St. Lucia. The iconic-shot factor matters more for a first Caribbean honeymoon; the Pitons-and-cottage experience is uniquely Saint Lucian and doesn't exist on other islands." },
    ],
  },

  'bali-vs-thailand': {
    tldr:
      "Bali wins on spiritual energy, cultural depth, and the unique Ubud-Uluwatu split that gives you two distinct experiences in one country. Thailand wins on variety (urban Bangkok + Andaman beaches + northern hill country), food, and ease of access. For honeymoons specifically, Bali is the smarter pick for couples who want a single-country, culture-and-coast experience. Thailand is the smarter pick for couples who want more variety in 10–14 days.",
    winnerGrid: [
      { criterion: 'Spiritual energy', winner: 'A', note: "Bali's Hindu culture pervades the everyday" },
      { criterion: 'Food', winner: 'B', note: "Thailand's food culture is one of Asia's strongest" },
      { criterion: 'Beach quality', winner: 'B', note: 'Andaman beaches edge Bali for white sand and clarity' },
      { criterion: 'Cultural depth (honeymoon-relevant)', winner: 'A', note: "Bali's temples and ceremonies enrich every day" },
      { criterion: 'Variety in one trip', winner: 'B', note: 'Thailand offers Bangkok + beach + north in 10–14 days' },
      { criterion: 'Cost', winner: 'tie', note: 'Comparable at the luxury tier' },
      { criterion: 'Hotel quality', winner: 'A', note: 'Bali has more under-priced luxury hotels per capita' },
      { criterion: 'Photogenic factor', winner: 'tie', note: "Both photogenic; Bali's rice paddies vs Thailand's limestone karsts" },
    ],
    comparisonTable: [
      { criterion: 'Vibe', a: 'Spiritual, ceremonial, contemplative', b: 'Vibrant, social, food-centric' },
      { criterion: 'Best honeymoon split', a: '3 Ubud + 4 Uluwatu', b: '2 Bangkok + 5 Phuket/Phang Nga + 3 north (optional)' },
      { criterion: 'Cost (7 nights, mid-tier)', a: '$5,000–10,000', b: '$5,000–10,000' },
      { criterion: 'Top hotels', a: 'Capella Ubud, Bulgari Uluwatu, Alila Villas Uluwatu, Six Senses Uluwatu', b: 'Six Senses Yao Noi, Amanpuri Phuket, Rosewood Phuket' },
      { criterion: 'Flight from NYC', a: '~22h via Hong Kong or Singapore', b: '~20h via Tokyo or Hong Kong' },
      { criterion: 'Best month', a: 'May–September (dry season)', b: 'November–March (cool, dry)' },
      { criterion: 'Internal transit', a: 'Minimal — Ubud and Uluwatu are 90 min apart', b: 'Substantial — flights between major destinations' },
      { criterion: 'Off-resort experiences', a: 'Temples, rice paddies, traditional dance', b: 'Bangkok markets, beach hopping, hill country' },
      { criterion: 'Language', a: 'English in tourist areas', b: 'English in tourist areas' },
      { criterion: 'For first-timer in Asia', a: 'Bali is the gentler intro', b: 'Thailand is the variety pick' },
    ],
    whichIf: [
      { scenario: 'You want spiritual and contemplative honeymoon', pick: 'A', reason: "Bali's Hindu culture is a real presence in the everyday — ceremonies, offerings, temple visits — not a tourist overlay." },
      { scenario: 'You want food to be a focus', pick: 'B', reason: 'Thailand has one of the strongest food cultures in Asia — street food in Bangkok, beach BBQ in Phuket.' },
      { scenario: "You want variety in one country", pick: 'B', reason: 'Bangkok + beach + north works in 10–14 days; Thailand offers more distinct experiences.' },
      { scenario: 'You want a single-property reset', pick: 'A', reason: 'Bali compresses to 7 nights at Ubud + Uluwatu split better than Thailand compresses to a single experience.' },
      { scenario: 'First-time Asia honeymoon', pick: 'A', reason: 'Bali is the gentler intro to Asian honeymoons — less internal transit, more turn-key.' },
    ],
    anchorHotelA: 'capella-ubud-bali',
    anchorHotelB: 'amanpuri-phuket-thailand',
    splitItinerary:
      'Combining Bali and Thailand makes sense for 14-day Asia honeymoons. 7 nights Bali (3 Ubud + 4 Uluwatu) then 7 nights Thailand (2 Bangkok + 5 Phuket/Phang Nga at Six Senses Yao Noi or Amanpuri). The contrast works because Bali is slow and Thailand is vibrant. Internal transit: a short flight Denpasar to Bangkok or Singapore connection. Combined cost: $12–22k all-in for 14 nights.',
    closing:
      "Honest pick: Bali for couples who want a single-country, culture-and-coast honeymoon with minimal internal transit. Thailand for couples who want variety, food intensity, and don't mind logistics. Both work as 7-night and 10-night honeymoons.",
    faqs: [
      { question: 'Is Bali or Thailand more romantic?', answer: "Bali leans contemplative-romance; Thailand leans vibrant-romance. Most couples find Bali more honeymoon-aligned specifically — the destination's spiritual energy and the Ubud/Uluwatu rhythm match the rest-and-reset pattern of a honeymoon better than Thailand's variety-rich pace." },
      { question: 'Which is cheaper?', answer: "Comparable at the luxury tier. Both have $400–800/night luxury inventory and $1,500–2,500/night top-tier. Bali has slightly more under-priced luxury (Capella Ubud, Bulgari Uluwatu deliver above their price points)." },
      { question: 'First-timer pick — Bali or Thailand?', answer: 'Bali. Less internal transit, easier logistics, more turn-key luxury inventory. Thailand is the second Asian honeymoon (or the variety-seekers first).' },
      { question: 'For our age range (40+) — which?', answer: "Bali. The Uluwatu cliff villas (Bulgari, Six Senses, Alila) and Ubud retreats (Capella, Aman) are designed for adult honeymoons. Thailand's beach options are also adult-friendly but the cultural overlay (Bangkok's energy, the broader tourism mix) is louder." },
    ],
  },

  'amalfi-vs-cinque-terre': {
    tldr:
      "Amalfi wins on bucket-list density, hotel quality, and the iconic Italian honeymoon experience. Cinque Terre wins on quiet, hiking, and the under-priced authentic alternative. For honeymoons specifically, Amalfi is the obvious answer — Le Sirenuse, Caruso, Santa Caterina deliver the signature Italian coastal honeymoon. Cinque Terre is the right answer for couples who want quieter, more village-walking, less Instagram crush.",
    winnerGrid: [
      { criterion: 'Hotel quality', winner: 'A', note: 'Le Sirenuse, Santa Caterina, Caruso are Italian icons' },
      { criterion: 'Crowds (high season)', winner: 'B', note: 'Cinque Terre is busy but Amalfi is mobbed' },
      { criterion: 'Iconic Italian honeymoon shot', winner: 'A', note: 'Positano cliff hotels are the postcard' },
      { criterion: 'Food', winner: 'A', note: 'Amalfi has stronger fine-dining options' },
      { criterion: 'Hiking / village walking', winner: 'B', note: 'The 5-village trail is the experience' },
      { criterion: 'Cost', winner: 'B', note: 'Cinque Terre is dramatically cheaper' },
      { criterion: 'Beach access', winner: 'A', note: 'Amalfi has real beach hotels; Cinque Terre is mostly rocky coves' },
      { criterion: 'First-timer pick', winner: 'A', note: 'Amalfi delivers what couples imagine' },
    ],
    comparisonTable: [
      { criterion: 'Vibe', a: 'Cliffside luxury, dramatic coastal, photogenic', b: 'Village-walking, terraced vineyards, quieter' },
      { criterion: 'Cost (7 nights, top tier)', a: '$10,000–18,000', b: '$4,000–8,000' },
      { criterion: 'Top hotels', a: 'Le Sirenuse, Hotel Santa Caterina, Caruso, Casa Angelina', b: 'Hotel Porto Roca, Villa della Pergola, smaller boutiques' },
      { criterion: 'Best for', a: 'Honeymoon iconic experience, fine dining, photography', b: 'Walking, quiet, authenticity, value' },
      { criterion: 'Best month', a: 'May, June, September', b: 'May, June, September' },
      { criterion: 'Flight from London', a: '~3h to Naples + 1.5h drive', b: '~2.5h to Pisa + 1h drive' },
      { criterion: 'Mobility', a: 'Cliffs make walking limited; ferry hops to neighboring villages', b: 'Walking-centric — the trail between villages is the experience' },
      { criterion: 'Photogenic factor', a: 'World-iconic', b: 'Photogenic but less iconic' },
      { criterion: 'For introverts', a: 'Difficult — Amalfi is busy', b: 'Easier — quieter at top properties' },
      { criterion: 'Off-season feel', a: 'Most properties closed Nov–Mar', b: 'Most properties closed Nov–Mar' },
    ],
    whichIf: [
      { scenario: "You want the iconic Italian honeymoon shot", pick: 'A', reason: 'Positano cliffside hotels are the Italian coastal honeymoon postcard.' },
      { scenario: 'Budget is tight (under $8k all-in)', pick: 'B', reason: "Cinque Terre's top properties are dramatically cheaper; the experience is authentic Italian without the Amalfi premium." },
      { scenario: 'You want to hike and walk village-to-village', pick: 'B', reason: 'The 5-village trail is the entire experience; Amalfi is cliffs, not paths.' },
      { scenario: 'You want a Le Sirenuse / Caruso honeymoon', pick: 'A', reason: 'These are the iconic Italian honeymoon hotels; the experience is what couples imagine.' },
      { scenario: "You're an introvert", pick: 'B', reason: 'Cinque Terre is quieter at the top tier; Amalfi struggles to deliver privacy at the iconic properties.' },
    ],
    anchorHotelA: 'le-sirenuse-positano-italy',
    anchorHotelB: 'affittacamere-pavarin-cinque-terre',
    splitItinerary:
      "For 10 days, the Italian coastal honeymoon split works: 5 nights Amalfi (Le Sirenuse or Caruso) for the iconic experience, then 5 nights Cinque Terre for the quieter village half. Internal transit: train Salerno → Florence → La Spezia takes about 5 hours. The pairing works because Amalfi is the destination, Cinque Terre is the decompression. Combined cost: $14–22k for 10 nights.",
    closing:
      "Honest pick: Amalfi for the iconic Italian honeymoon experience; Cinque Terre for the budget-conscious or quiet-seeking couple. There is no third answer — these are two different versions of the Italian coastal honeymoon, and they reward different priorities.",
    faqs: [
      { question: 'Amalfi or Cinque Terre — which is more romantic?', answer: 'Amalfi is the dramatic, iconic Italian honeymoon; Cinque Terre is the quieter, more authentic alternative. Most honeymoon planners point first-timers to Amalfi specifically because it delivers the experience couples imagine — but Cinque Terre wins for couples who already know what they like and want quiet over icon.' },
      { question: 'Which is cheaper?', answer: 'Cinque Terre, dramatically. Amalfi top hotels (Le Sirenuse, Caruso) start at $1,500–2,500/night in season; Cinque Terre top properties are $300–600/night. A full 7-night honeymoon at Le Sirenuse plus flights is $14–18k; the same in Cinque Terre is $5–8k.' },
      { question: 'First-timer pick?', answer: "Amalfi. The iconic experience matters for a first Italian honeymoon; Le Sirenuse, Santa Caterina, Caruso deliver what couples imagine. Cinque Terre is the second Italian honeymoon (or the budget-aware first)." },
      { question: 'For our age range (40+) — which?', answer: 'Both work. Amalfi tilts toward more polished service and fine-dining nights; Cinque Terre tilts toward walking, lunches in village trattorias, and lower-key evenings. Pick based on whether your style is more polished or more village.' },
    ],
  },

  'mexico-vs-costa-rica': {
    tldr:
      "Mexico wins on beach luxury, all-inclusive depth, cost-per-experience, and accessibility. Costa Rica wins on eco-credentials, jungle-and-volcano variety, and adventure-paired-with-spa. For honeymoons specifically, Mexico is the smarter pick for couples who want a Caribbean-style beach honeymoon. Costa Rica is the smarter pick for couples who want a more active, contrasting trip with both rainforest and coast.",
    winnerGrid: [
      { criterion: 'Beach quality (Caribbean)', winner: 'A', note: 'Riviera Maya beaches are world-class' },
      { criterion: 'Adventure variety', winner: 'B', note: 'Volcanoes, cloud forest, jungle, Pacific surf' },
      { criterion: 'All-inclusive luxury depth', winner: 'A', note: 'Mexico has the deepest AI inventory in the Americas' },
      { criterion: 'Eco-credentials', winner: 'B', note: 'Costa Rica is the global leader in eco-tourism' },
      { criterion: 'Cost', winner: 'A', note: 'Mexico is 20–30% cheaper at comparable tier' },
      { criterion: 'Flight accessibility (from US)', winner: 'A', note: 'Direct flights from every major US city to Cancun' },
      { criterion: 'Honeymoon-specific experience', winner: 'A', note: "Mexico's adults-only AI inventory is built for honeymoons" },
      { criterion: 'For active couples', winner: 'B', note: 'Costa Rica offers more for adventure-honeymoon types' },
    ],
    comparisonTable: [
      { criterion: 'Vibe', a: 'Beach luxe, all-inclusive ease, Riviera Maya signature', b: 'Eco-adventure, volcano + beach, slower pacing' },
      { criterion: 'Best for', a: 'Beach reset, adults-only AI, snorkel and spa', b: 'Active + slow contrast, rainforest + coast, eco-luxury' },
      { criterion: 'Cost (5 nights, top tier)', a: '$4,000–9,000', b: '$5,000–12,000' },
      { criterion: 'Top hotels', a: 'Belmond Maroma, Rosewood Mayakoba, Excellence Punta Cana, Le Blanc Cancun', b: 'Nayara Resort, Nayara Springs, Andaz Peninsula Papagayo' },
      { criterion: 'Flight from NYC', a: '~4h direct to Cancun', b: '~5h direct to SJO' },
      { criterion: 'Best month', a: 'November–April', b: 'November–April (dry season)' },
      { criterion: 'Internal transit', a: 'Minimal — Riviera Maya is one corridor', b: 'Substantial — Arenal to Manuel Antonio to Papagayo' },
      { criterion: 'Food', a: 'Strong — Mexican cuisine is the bonus', b: 'Fine but resort-based' },
      { criterion: 'Photogenic factor', a: 'Cenotes + beaches', b: 'Volcanoes + cloud forest + Pacific' },
      { criterion: 'For first-timer', a: 'Yes — easiest Latin American honeymoon', b: 'Yes if active; less so if you want pure beach' },
    ],
    whichIf: [
      { scenario: "You want a Caribbean-style beach honeymoon", pick: 'A', reason: "Riviera Maya is the Caribbean-beach honeymoon at lower friction and cost than the actual Caribbean." },
      { scenario: 'You want adventure paired with spa days', pick: 'B', reason: 'Costa Rica delivers the active + slow pairing in a single 7-day trip.' },
      { scenario: 'You want all-inclusive luxury', pick: 'A', reason: "Mexico's adults-only AI inventory is the deepest in the region — Excellence, Le Blanc, the upper-tier all-inclusive market." },
      { scenario: 'You care about eco-credentials', pick: 'B', reason: 'Costa Rica is the global eco-tourism leader — Nayara Springs, Pacuare Lodge, the entire ethos is sustainable.' },
      { scenario: "Budget is the primary constraint", pick: 'A', reason: 'Mexico delivers more luxury per dollar at the honeymoon-relevant tier.' },
    ],
    anchorHotelA: 'belmond-maroma-resort-mexico',
    anchorHotelB: 'nayara-springs-costa-rica',
    splitItinerary:
      "Combining for a 10-day Latin American honeymoon: 5 nights Costa Rica (Arenal at Nayara Springs + Manuel Antonio at a beach property) for the active half, then 5 nights Mexico (Belmond Maroma or Rosewood Mayakoba) for the beach reset. Internal transit: short flight via Panama or Miami. The pairing works because Costa Rica is movement and Mexico is rest. Combined cost: $10–18k for 10 nights.",
    closing:
      "Honest pick: Mexico for couples who want a Caribbean-style beach honeymoon at lower friction. Costa Rica for couples who want a more active, contrasting trip with rainforest and coast in one country. Both are excellent Latin American honeymoons; the right answer depends on whether you want beach-and-AI or volcano-and-eco.",
    faqs: [
      { question: 'Mexico or Costa Rica — which is more romantic?', answer: 'Both are romantic in different ways. Mexico is beach-luxe-romance (adults-only resorts, cenote days, late dinners); Costa Rica is eco-adventure-romance (rainforest balconies, volcanic hot springs, sunset Pacific). Most couples find Mexico more honeymoon-aligned (less effort), Costa Rica more memorable (more variety).' },
      { question: 'Which is cheaper?', answer: "Mexico, by 20–30% at comparable tier. The Riviera Maya AI inventory is the strongest value in the Americas honeymoon market. Costa Rica's eco-luxury (Nayara Springs, Pacuare) commands premium pricing." },
      { question: 'First-timer pick?', answer: 'Mexico, for couples who want a turn-key beach honeymoon. Costa Rica, for couples who specifically want the eco-adventure-and-spa contrast in one country.' },
      { question: 'For our age range (35+) — which?', answer: 'Both work. Mexico tilts toward adults-only AI and beach pacing; Costa Rica tilts toward active days and slower lodge nights. Pick based on whether your honeymoon style is beach-reset or active-contrast.' },
    ],
  },

  'seychelles-vs-mauritius': {
    tldr:
      "Seychelles wins on granite-and-jungle dramatic beauty, beach quality (the best in the world per many counts), and the under-priced ultra-luxury category. Mauritius wins on accessibility from Europe, cultural richness, and the value-luxury middle tier. For honeymoons specifically, Seychelles is the photo-iconic, splurge-worthy option; Mauritius is the smarter pick for couples who want comparable beach luxury at a friendlier price.",
    winnerGrid: [
      { criterion: 'Beach drama', winner: 'A', note: "Seychelles' granite boulder beaches are unique-in-the-world" },
      { criterion: 'Cost', winner: 'B', note: 'Mauritius is 20–35% cheaper at comparable tier' },
      { criterion: 'Cultural richness', winner: 'B', note: 'Mauritius has real local culture; Seychelles is mostly resort' },
      { criterion: 'Photogenic factor', winner: 'A', note: 'Granite + jungle + beach is unmatched' },
      { criterion: 'Internal access', winner: 'B', note: "Mauritius is one island; Seychelles requires inter-island hops" },
      { criterion: 'Hotel quality (top tier)', winner: 'A', note: 'North Island, Fregate are world-class' },
      { criterion: 'Flight from Europe', winner: 'B', note: 'Mauritius is slightly more accessible' },
      { criterion: 'For introverts', winner: 'A', note: "North Island has 11 villas total — effective solitude" },
    ],
    comparisonTable: [
      { criterion: 'Vibe', a: 'Dramatic granite-and-jungle, small-island, ultra-private', b: 'Cosmopolitan, multicultural, beach-luxe' },
      { criterion: 'Cost (7 nights, top tier)', a: '$12,000–35,000+', b: '$7,000–18,000' },
      { criterion: 'Top hotels', a: 'North Island, Fregate, Constance Lemuria, Six Senses Zil Pasyon', b: 'Constance Le Prince Maurice, Royal Palm Beachcomber, Constance Belle Mare Plage' },
      { criterion: 'Flight from London', a: '~10h direct', b: '~12h direct' },
      { criterion: 'Best month', a: 'May, June, September, October', b: 'May–October (winter peak)' },
      { criterion: 'Internal transit', a: 'Substantial — inter-island flights or boats', b: 'Minimal — one island' },
      { criterion: 'Food', a: 'Resort-bound mostly; international fusion', b: 'Stronger off-resort food culture (Creole + Indian + French)' },
      { criterion: 'Beach quality', a: 'World-iconic — granite boulders + white sand', b: 'Excellent — long white-sand beaches' },
      { criterion: 'For introverts', a: 'Extraordinary — North Island has 11 villas total', b: 'Possible at top properties; less inherent' },
      { criterion: 'For first-timer', a: 'If budget supports — the ultra-luxury Indian Ocean honeymoon', b: 'Yes — more turn-key, lower friction' },
    ],
    whichIf: [
      { scenario: "You want the most photo-iconic beach honeymoon", pick: 'A', reason: "Seychelles' granite-and-jungle-and-beach combination is unique in the world; the photos are unmatched." },
      { scenario: "Budget is moderate ($10–15k)", pick: 'B', reason: "Mauritius delivers comparable beach luxury at 60–70% of Seychelles' cost." },
      { scenario: "You're an introvert seeking effective solitude", pick: 'A', reason: 'North Island, Fregate, Six Senses Zil Pasyon all have very small villa counts — you can disappear completely.' },
      { scenario: "You want cultural texture", pick: 'B', reason: "Mauritius has real Creole + Indian + French culture in the everyday; Seychelles is primarily resort-bubble." },
      { scenario: "You want one location for the whole trip", pick: 'B', reason: 'Mauritius is one island; Seychelles often involves inter-island transit to do justice to multiple resorts.' },
    ],
    anchorHotelA: 'six-senses-zighy-bay-oman',
    anchorHotelB: 'constance-prince-maurice-mauritius',
    splitItinerary:
      "Combining for 14 days: 7 nights Mauritius (Constance Le Prince Maurice or Royal Palm) for the warm-up + cultural half, then 7 nights Seychelles (North Island or Fregate) for the dramatic-isolation half. Internal transit: short flight Mauritius → Seychelles. The pairing works because Mauritius is approachable Indian Ocean and Seychelles is the splurge endpoint. Combined cost: $25–50k for 14 nights — this is a top-tier Indian Ocean honeymoon.",
    closing:
      "Honest pick: Seychelles if budget reaches and the iconic-photogenic-beach is the entire point. Mauritius if budget is moderate or you want a more culturally textured honeymoon. Both are world-class Indian Ocean honeymoons; they reward different priorities and budgets.",
    faqs: [
      { question: 'Seychelles or Mauritius — which is more romantic?', answer: "Both are romantic; they're romantic differently. Seychelles is dramatic-private-island romance; Mauritius is cosmopolitan-beach-luxe romance. For pure honeymoon iconicness, Seychelles; for honeymoon comfort and value, Mauritius." },
      { question: 'Which is cheaper?', answer: "Mauritius, by 20–35% at comparable tier. Mauritius luxury (Constance Le Prince Maurice, Royal Palm) starts around $600–1,200/night; Seychelles equivalents (Six Senses Zil Pasyon, Constance Lemuria) start around $900–1,800/night, and the ultra-luxury (North Island, Fregate) is $4,000+/night." },
      { question: 'First-timer pick — Seychelles or Mauritius?', answer: "Mauritius. More turn-key, single-island simplicity, lower friction, more value at the moderate luxury tier. Seychelles is the second Indian Ocean honeymoon or the once-in-a-lifetime first." },
      { question: 'For our age range (40+) — which?', answer: 'Both work. Seychelles tilts toward total seclusion and private-island intimacy; Mauritius tilts toward more variety in dining, spa, and off-resort exploration. Pick based on whether you want to disappear entirely or have texture and variety.' },
    ],
  },

  'bora-bora-vs-fiji': {
    tldr:
      "Bora Bora wins on iconic-photogenic identity (Mount Otemanu is the entire frame) and overwater villa pedigree. Fiji wins on cultural warmth (Fijian hospitality is uniquely warm), value-luxury at the upper tier, and the absence of crowds. For honeymoons specifically, Bora Bora is the iconic Pacific honeymoon; Fiji is the smarter pick for couples who want a more grounded, less-photographed alternative.",
    winnerGrid: [
      { criterion: 'Iconic visuals', winner: 'A', note: 'Mount Otemanu is unmatched' },
      { criterion: 'Cultural warmth', winner: 'B', note: 'Fijian hospitality is one of the warmest in the world' },
      { criterion: 'Cost', winner: 'B', note: 'Fiji is 20–30% cheaper at comparable tier' },
      { criterion: 'Overwater villa pedigree', winner: 'A', note: 'Bora Bora invented the format' },
      { criterion: 'Crowd-free factor', winner: 'B', note: 'Fiji private islands are largely unknown to mass tourism' },
      { criterion: 'Flight from US', winner: 'A', note: 'Bora Bora is ~16h via LAX; Fiji is ~18h via LAX' },
      { criterion: 'Food', winner: 'B', note: 'Fijian + Indian + Pacific fusion is stronger' },
      { criterion: 'For couples who want quiet luxury', winner: 'B', note: "Fiji's private islands deliver effective solitude" },
    ],
    comparisonTable: [
      { criterion: 'Vibe', a: 'Iconic, photographic, polished Pacific', b: 'Warm, grounded, cultural Pacific' },
      { criterion: 'Cost (7 nights, top tier)', a: '$14,000–22,000', b: '$10,000–18,000' },
      { criterion: 'Top hotels', a: 'Four Seasons, St. Regis, Conrad Bora Bora Nui', b: 'Likuliku Lagoon, Laucala Island, Vomo Island, Six Senses Fiji' },
      { criterion: 'Flight from NYC', a: '~16h via LAX', b: '~18h via LAX' },
      { criterion: 'Best month', a: 'May–October', b: 'May–October (winter)' },
      { criterion: 'Internal transit', a: 'Minimal — Bora Bora is one island', b: 'Substantial — Fijian resorts often require boat or helicopter transfers' },
      { criterion: 'Food', a: 'Tahitian + French + Pacific', b: 'Fijian + Indian + Pacific (Indian influence is meaningful)' },
      { criterion: 'Photogenic factor', a: 'World-iconic', b: 'Beautiful but less iconic' },
      { criterion: 'For first-timer in Pacific', a: 'Yes — the iconic introduction', b: 'Yes — the calmer alternative' },
      { criterion: 'Language', a: 'French + English', b: 'English (universal)' },
    ],
    whichIf: [
      { scenario: 'You want the iconic Pacific honeymoon shot', pick: 'A', reason: "Mount Otemanu in every frame; Bora Bora's visual identity is unmatched." },
      { scenario: 'Budget is moderate ($10–14k)', pick: 'B', reason: 'Fiji top-tier resorts (Likuliku, Vomo) deliver comparable Pacific honeymoon at 70% of Bora Bora cost.' },
      { scenario: 'You want warm, friendly Pacific culture', pick: 'B', reason: 'Fijian hospitality is uniquely warm — Bora Bora is more polished and slightly more transactional.' },
      { scenario: 'You want a less-crowded Pacific island', pick: 'B', reason: 'Laucala Island, Vomo Island deliver effective solitude; Bora Bora is high-end resort tourism.' },
      { scenario: "You're a first-timer in the Pacific", pick: 'A', reason: 'Bora Bora is the iconic introduction; the experience is what couples imagine when they think Pacific honeymoon.' },
    ],
    anchorHotelA: 'four-seasons-bora-bora',
    anchorHotelB: 'laucala-island-resort-fiji',
    splitItinerary:
      "For 14 days, the Pacific island-hop honeymoon: 7 nights Fiji (Likuliku or Vomo) followed by 7 nights Bora Bora (Four Seasons or St. Regis). Internal transit: flight via Auckland or LAX. The pairing works because Fiji is the warm-up + cultural half and Bora Bora is the iconic-photogenic-closing half. Combined cost: $22–40k for 14 nights.",
    closing:
      "Honest pick: Bora Bora if budget reaches and the iconic Pacific honeymoon is the goal. Fiji if budget is moderate or you want warmer cultural texture. Both are world-class Pacific honeymoons; they're different in atmosphere despite being adjacent destinations.",
    faqs: [
      { question: 'Bora Bora or Fiji — which is more romantic?', answer: "Both are romantic; they're different. Bora Bora is iconic-photogenic-luxury romance; Fiji is warm-grounded-private-island romance. For pure photogenicness, Bora Bora; for warmth and value, Fiji." },
      { question: 'Which is cheaper?', answer: "Fiji, by 20–30% at comparable tier. Fiji top-tier resorts (Likuliku, Vomo) start around $1,200–1,800/night; Bora Bora top-tier (Four Seasons, St. Regis) starts around $1,800–2,500/night. The luxury floor in Fiji is more accessible." },
      { question: 'First-timer pick?', answer: 'Bora Bora. The iconic experience matters for a first Pacific honeymoon. Fiji is the second Pacific honeymoon, or the value-seekers first.' },
      { question: 'For our age range (35+) — which?', answer: 'Both work. Bora Bora tilts toward polished resort luxury; Fiji tilts toward private-island intimacy and warm cultural texture. Pick based on whether your style is more polished or more grounded.' },
    ],
  },

  'tuscany-vs-provence': {
    tldr:
      "Tuscany wins on iconic Italian rural honeymoon experience, hill-town density, and food culture. Provence wins on the lavender bloom (June–July specifically), the Côte d'Azur proximity, and the more diverse landscape (mountains + coast + countryside). For honeymoons specifically, Tuscany is the smarter pick for couples who want the slow Italian rural honeymoon; Provence is the smarter pick for couples who want more diversity in a single trip.",
    winnerGrid: [
      { criterion: 'Iconic rural honeymoon', winner: 'A', note: "Borgo Santo Pietro, Castello di Reschio — Tuscany's hotel culture is unmatched" },
      { criterion: 'Lavender bloom', winner: 'B', note: 'The Plateau de Valensole bloom is uniquely Provençal' },
      { criterion: 'Food', winner: 'A', note: "Tuscan food culture is one of Italy's strongest" },
      { criterion: 'Wine country', winner: 'A', note: 'Chianti, Brunello, Vino Nobile' },
      { criterion: 'Coast access', winner: 'B', note: 'Côte d\'Azur (Nice, Cannes, Cap-Ferrat) within 1.5h drive' },
      { criterion: 'Hotel density (top tier)', winner: 'A', note: 'Tuscany has more world-class country hotels' },
      { criterion: 'Cost', winner: 'tie', note: 'Comparable at the top tier' },
      { criterion: 'For first-timer in rural France/Italy', winner: 'A', note: 'Tuscany is the iconic introduction' },
    ],
    comparisonTable: [
      { criterion: 'Vibe', a: 'Slow rural Italian, hill towns, wine country', b: 'Lavender + olive groves + mountains + Riviera coast' },
      { criterion: 'Cost (7 nights, top tier)', a: '$7,000–15,000', b: '$7,000–15,000' },
      { criterion: 'Top hotels', a: 'Borgo Santo Pietro, Castello di Reschio, Belmond Castello di Casole, Como Castello del Nero', b: 'La Coquillade, Domaine de Manville, Bastide de Marie' },
      { criterion: 'Best for', a: 'Slow rural Italian honeymoon, wine country, hill-town walking', b: 'Lavender (late June), Riviera + countryside contrast, broader landscape variety' },
      { criterion: 'Best month', a: 'May, June, September', b: 'May (wildflowers) or late June (lavender) or September' },
      { criterion: 'Flight from London', a: '~3h to Florence + 1h drive', b: '~2.5h to Marseille + 1h drive' },
      { criterion: 'Internal transit', a: 'Minimal — one region', b: 'Minimal — one region' },
      { criterion: 'Food', a: 'Iconic — truffles, pici, Bistecca, Brunello', b: 'Strong — Provençal markets, fresh produce, Bandol rosé' },
      { criterion: 'Photogenic factor', a: 'World-iconic rural Italian', b: 'Photogenic; lavender is the unique frame' },
      { criterion: 'For first-timer', a: 'Yes — the iconic introduction', b: 'Yes — the diverse alternative' },
    ],
    whichIf: [
      { scenario: 'You want the iconic Italian rural honeymoon experience', pick: 'A', reason: "Borgo Santo Pietro, Castello di Reschio — Tuscan country hotels are the iconic format." },
      { scenario: 'You want the lavender bloom in your photos', pick: 'B', reason: 'Late June through early July at the Plateau de Valensole — unique to Provence.' },
      { scenario: 'You want coast access for a day or two', pick: 'B', reason: 'Côte d\'Azur is 1.5h from inland Provence — Nice, Cap-Ferrat, Saint-Tropez are reachable.' },
      { scenario: 'You want a truffle-and-wine honeymoon', pick: 'A', reason: 'Tuscan truffle hunting and the Brunello / Chianti wine experience are signature.' },
      { scenario: 'You want diversity in landscape', pick: 'B', reason: 'Provence has mountains, lavender plateau, olive groves, and coast — more variety in one trip than Tuscany.' },
    ],
    anchorHotelA: 'borgo-santo-pietro-tuscany-italy',
    anchorHotelB: 'coquillade-provence-resort-spa-provence',
    splitItinerary:
      "For 10 days, the Mediterranean rural honeymoon: 5 nights Tuscany (Borgo Santo Pietro) for the Italian rural-honeymoon half, then 5 nights Provence (Domaine de Manville or La Coquillade) for the lavender + coast half. Internal transit: drive (8h) or fly via Paris. The pairing works because Tuscany is slow Italian rural and Provence is more diverse Mediterranean. Combined cost: $14–22k for 10 nights.",
    closing:
      "Honest pick: Tuscany for couples who want the iconic Italian rural honeymoon and the food-and-wine focus. Provence for couples who want the lavender bloom or diverse landscape in one country. Both are world-class European rural honeymoons; they reward different priorities.",
    faqs: [
      { question: 'Tuscany or Provence — which is more romantic?', answer: "Both are romantic; they're romantic differently. Tuscany is slow Italian rural-romance (hill towns, wine, truffle hunts); Provence is broader Mediterranean-romance (lavender, markets, coast). For pure honeymoon iconicness in the rural format, Tuscany. For diversity and the lavender bloom specifically, Provence." },
      { question: 'Which is cheaper?', answer: 'Comparable at the top tier. Both have $700–1,500/night luxury inventory and $300–600/night village-tier options. Provence has slightly more options in the village-tier; Tuscany has more world-class country hotels.' },
      { question: 'First-timer pick?', answer: 'Tuscany. The iconic Italian rural honeymoon (Borgo Santo Pietro, Castello di Reschio) is the format couples imagine when they think rural European honeymoon. Provence is the second European rural honeymoon (or the lavender-specific first).' },
      { question: 'For our age range (40+) — which?', answer: 'Both work. Tuscany tilts toward slow rural pacing and wine-and-food focus; Provence tilts toward varied days (lavender drive, coast day trip, hill-town lunch). Pick based on whether your style is slow-focused or varied.' },
    ],
  },

  'lake-como-vs-lake-garda': {
    tldr:
      "Lake Como wins on cinematic luxury, iconic Italian-lake honeymoon experience, and the Passalacqua / Tremezzo / Belmond pedigree. Lake Garda wins on accessibility (closer to Verona / Milan), affordability, and family-friendliness (less honeymoon-aligned, but a real factor for some couples). For honeymoons specifically, Lake Como is the smarter pick by a clear margin — it is the Italian lake honeymoon. Lake Garda is the smarter pick for budget-conscious couples or those wanting a less-iconic, more village-village pace.",
    winnerGrid: [
      { criterion: 'Cinematic / iconic luxury', winner: 'A', note: 'Passalacqua, Tremezzo, Villa d\'Este — the Como roster' },
      { criterion: 'Cost', winner: 'B', note: 'Lake Garda is 30–50% cheaper at comparable tier' },
      { criterion: 'Hotel quality (top tier)', winner: 'A', note: 'Como\'s top tier is among the world\'s best lakefront luxury' },
      { criterion: 'Accessibility from Milan/Verona', winner: 'B', note: 'Garda is closer to most arrival airports' },
      { criterion: 'Crowd-free factor', winner: 'A', note: 'Como is crowded but the top hotels are insulated; Garda is busier with day-trippers' },
      { criterion: 'Food', winner: 'A', note: 'Como\'s lakefront restaurants are stronger' },
      { criterion: 'For honeymoon couples specifically', winner: 'A', note: 'Como is built for the format' },
      { criterion: 'For families / activity-seekers', winner: 'B', note: 'Garda has more activity options' },
    ],
    comparisonTable: [
      { criterion: 'Vibe', a: 'Cinematic lakefront luxury, Italian glamour, romantic-iconic', b: 'Larger lake, more village, family-friendly, value-tier' },
      { criterion: 'Cost (7 nights, top tier)', a: '$10,000–18,000+', b: '$5,000–10,000' },
      { criterion: 'Top hotels', a: 'Passalacqua, Grand Hotel Tremezzo, Villa d\'Este, Mandarin Oriental Lake Como', b: 'Villa Cortine Palace, Lefay Resort & Spa Lago di Garda, smaller boutiques' },
      { criterion: 'Best for', a: 'Cinematic honeymoon, water taxi to villages, Riva boat day', b: 'Village walks, broader lakefront, value-conscious romance' },
      { criterion: 'Best month', a: 'May, June, September', b: 'May, June, September' },
      { criterion: 'Flight from London', a: '~2h to Milan + 1h drive', b: '~2h to Verona + 30min drive' },
      { criterion: 'Photogenic factor', a: 'World-iconic (Star Wars, Casino Royale)', b: 'Pretty; less photographed' },
      { criterion: 'Crowds in season', a: 'Heavy day-tripper traffic but top hotels are private', b: 'Heavy day-tripper traffic; less insulated top hotels' },
      { criterion: 'For first-timer', a: 'Yes — the iconic Italian lake', b: 'Yes — the friendlier alternative' },
      { criterion: 'Off-season feel', a: 'November–March mostly closed', b: 'November–March mostly closed' },
    ],
    whichIf: [
      { scenario: 'You want the iconic Italian lake honeymoon', pick: 'A', reason: 'Passalacqua, Tremezzo — the cinematic-lakefront-luxury experience is uniquely Como.' },
      { scenario: 'Budget is moderate ($5–8k)', pick: 'B', reason: "Lake Garda delivers comparable lakefront beauty at 50–60% of Como's cost." },
      { scenario: "You want a Riva boat day and water-taxi to villages", pick: 'A', reason: "Como's lakefront is the iconic Italian water-taxi-to-Bellagio experience." },
      { scenario: 'You want quieter village pacing', pick: 'B', reason: 'Garda has more variety in village character (Sirmione, Garda town, Riva del Garda) and quieter top hotels.' },
      { scenario: 'You\'re a first-timer in Italian lakes', pick: 'A', reason: 'Como delivers what couples imagine when they think Italian lake honeymoon.' },
    ],
    anchorHotelA: 'passalacqua-lake-como-italy',
    anchorHotelB: 'lefay-resort-spa-lago-di-garda',
    splitItinerary:
      "Combining is unusual but works for 10 days at the rural European honeymoon: 5 nights Como (Passalacqua or Tremezzo) for the cinematic-iconic half, then 5 nights Garda (Lefay Resort) for the quieter wind-down. Internal transit: 2.5h drive via Milan. The pairing works because Como is the destination and Garda is the decompression. Combined cost: $14–22k for 10 nights — though most couples pick one or the other.",
    closing:
      "Honest pick: Lake Como for the iconic Italian lake honeymoon. Lake Garda for budget-conscious couples or those who specifically want a quieter, more village-pace alternative. The Como roster of hotels (Passalacqua, Tremezzo, Villa d'Este) is genuinely world-class and worth the premium for the right couple. Garda is the smart-money choice for couples who want lake-Italian-honeymoon without the Como pricing.",
    faqs: [
      { question: 'Lake Como or Lake Garda — which is more romantic?', answer: 'Lake Como, for most couples. The Passalacqua / Tremezzo / Villa d\'Este pedigree, the water-taxi-to-Bellagio experience, the cinematic-lakefront-luxury — Como is built for the iconic Italian-lake honeymoon. Garda is beautiful but less specifically honeymoon-aligned.' },
      { question: 'Which is cheaper?', answer: 'Lake Garda, dramatically. Como top hotels (Passalacqua, Tremezzo) start at $1,500–3,000/night; Garda top properties (Lefay, Villa Cortine) start around $500–1,000/night. A 7-night Como honeymoon plus flights is $14–22k; Garda is $7–12k.' },
      { question: 'First-timer pick?', answer: "Lake Como. The iconic experience matters; Como's hotels and water-taxi rhythm are the format couples imagine. Garda is the second Italian-lake honeymoon (or the budget-aware first)." },
      { question: 'For our age range (40+) — which?', answer: 'Both work. Como tilts toward cinematic-polished luxury and lakefront formal dining; Garda tilts toward village walks and lakeside lunches. Pick based on whether your style is polished or village-paced.' },
    ],
  },
}
