/**
 * Honeymoon destination head-to-head comparisons.
 * Each entry drives /compare/[slug] pages — deeply researched, opinionated.
 */

export interface ComparisonCriterion {
  label: string
  aWins: boolean | 'tie'
  aDetail: string
  bDetail: string
}

export interface Comparison {
  slug: string
  a: { destination: string; label: string }
  b: { destination: string; label: string }
  tagline: string
  metaDescription: string
  verdict: string
  tldr: { forA: string; forB: string; tie: string }
  criteria: ComparisonCriterion[]
  pickA: { title: string; bullets: string[] }
  pickB: { title: string; bullets: string[] }
  faqs: { q: string; a: string }[]
}

export const COMPARISONS: Comparison[] = [
  // ── 1. Maldives vs Bora Bora (the classic) ──────────────────────────────────
  {
    slug: 'maldives-vs-bora-bora',
    a: { destination: 'maldives', label: 'Maldives' },
    b: { destination: 'bora-bora', label: 'Bora Bora' },
    tagline: 'The two overwater villa kingdoms — which is your honeymoon?',
    metaDescription: 'Maldives or Bora Bora for a honeymoon? Side-by-side on flights, overwater villas, water, food, price, privacy. Picks for every type of couple.',
    verdict: 'Both are bucket-list overwater villa destinations, but they answer different questions. The Maldives wins on water clarity, sheer choice, and pure privacy — each resort occupies its own private atoll. Bora Bora wins on backdrop (Mount Otemanu is the most cinematic mountain over a lagoon on earth) and cultural richness. If your honeymoon photo is the single most important output, pick Bora Bora. If underwater life and total isolation are everything, pick the Maldives.',
    tldr: {
      forA: 'The Maldives — if you want the purest water, the widest choice of resorts, and the feeling of being alone on an island.',
      forB: 'Bora Bora — if you want a dramatic volcanic backdrop, French-Polynesian culture, and shorter flights from the US west coast.',
      tie: 'Both are tied if your priority is the overwater villa itself and the room experience.',
    },
    criteria: [
      { label: 'Flight time (from Europe)', aWins: true, aDetail: '10-11h (Doha/Dubai 1-stop)', bDetail: '20-24h with 2 stops (LAX is the only direct from US)' },
      { label: 'Flight time (from USA)',    aWins: false, aDetail: '22h+ east/west coast via Middle East', bDetail: '8h LAX to PPT direct, then 45min domestic' },
      { label: 'Water clarity',              aWins: true, aDetail: '25-30m visibility, pure turquoise glass', bDetail: 'Stunning but more lagoon-green, 15-20m visibility' },
      { label: 'The backdrop',               aWins: false, aDetail: 'Flat atolls, no mountains', bDetail: 'Mount Otemanu towers over the lagoon — the iconic view' },
      { label: 'Overwater villa choice',     aWins: true, aDetail: '120+ resorts, 40+ overwater brands, most innovation (Soneva Jani retractable roof, Velaa underwater cellar)', bDetail: '~15 resorts with overwater villas, more traditional designs' },
      { label: 'Marine life',                aWins: true, aDetail: 'World-class: whale sharks (Baa Atoll), manta rays, 5 species of sea turtles, 100+ coral species', bDetail: 'Rays and reef sharks in the lagoon, less variety' },
      { label: 'Privacy',                    aWins: true, aDetail: 'Each resort owns its atoll — you never see another resort', bDetail: 'Most resorts on motus around the main lagoon — other resorts visible' },
      { label: 'Culture and food off-resort', aWins: false, aDetail: 'Virtually none — resorts are the world', bDetail: 'French Polynesian culture, markets in Vaitape, fresh fish at roulottes' },
      { label: 'All-inclusive / meal plans',  aWins: true, aDetail: 'Huge choice, many top resorts (Velaa, Soneva) offer full-board excellence', bDetail: 'Most resorts à la carte, meals are expensive ($100-200 per person)' },
      { label: 'Best season',                 aWins: 'tie', aDetail: 'Nov-Apr (dry), May-Oct (wet but cheaper)', bDetail: 'May-Oct (dry), Nov-Apr (warm wet)' },
      { label: 'Budget floor (5-star)',       aWins: false, aDetail: '$900/night for genuine 5-star overwater', bDetail: '$600/night entry level (InterContinental, Le Bora Bora)' },
      { label: 'Budget ceiling',              aWins: true, aDetail: '$10 000+/night possible (Velaa, Cheval Blanc, The Nautilus)', bDetail: '$4 500/night max (Four Seasons, St Regis)' },
      { label: 'Romance factor',              aWins: 'tie', aDetail: 'Unbeatable room-based intimacy', bDetail: 'Unbeatable landscape and sunset views' },
    ],
    pickA: {
      title: 'Pick the Maldives if…',
      bullets: [
        'You want the single most private honeymoon possible — your own island for a week',
        'Marine life matters (whale sharks, mantas, turtles daily from the villa)',
        'You want the widest choice — all-inclusive plans, kid-free adults-only resorts, design brand names (Aman, Cheval Blanc, Six Senses, Four Seasons, One&Only all here)',
        'You fly from Europe, Middle East, or Asia (shorter flight)',
        'Budget flexibility matters — you can do 4-star overwater for $500 or 7-star for $8 000',
      ],
    },
    pickB: {
      title: 'Pick Bora Bora if…',
      bullets: [
        'The photograph matters most — Mount Otemanu behind the overwater villa is a singular honeymoon image',
        'You fly from the US west coast (8h direct LAX-PPT vs 22h to Malé)',
        'You want French Polynesian culture, warm people, tiare flower greetings, and a proper shore-side village to explore',
        'You prefer a slightly more intimate scale — Bora Bora resorts average 50-100 villas vs Maldives 100-200',
        'You combine it with Moorea, Taha\'a, or Tikehau for a multi-island trip',
      ],
    },
    faqs: [
      { q: 'Which is more expensive, the Maldives or Bora Bora?', a: 'Bora Bora has a higher entry floor (flights are expensive from anywhere other than LAX, plus Tahiti layover), but the Maldives has a higher ceiling. For the same resort tier, the Maldives is typically 15-25% cheaper than Bora Bora for a 7-night honeymoon, flights included. At ultra-luxury (The Brando vs Velaa), they\'re roughly equivalent.' },
      { q: 'Can I combine both on one honeymoon?', a: 'Unrealistic unless you have 3+ weeks and a very large budget. The flight routing is opposite directions from most origin cities. Do one or the other and do it well.' },
      { q: 'Which is better for non-swimmers?', a: 'Both depend on your specific villa choice — any overwater villa gives direct water access whether you swim or not. The Maldives sometimes has shallower lagoons at the villa ladder (1-2m), Bora Bora tends to have deeper drop-offs. Check the specific resort map.' },
      { q: 'Is Bora Bora safer than the Maldives?', a: 'Both are extremely safe honeymoon destinations. French Polynesia is a French overseas collectivity with European-level medical and safety infrastructure. The Maldives is a stable Muslim republic with near-zero tourism crime (resorts are on private islands, there is no street crime to speak of).' },
      { q: 'Which has better food?', a: 'Maldives luxury resorts typically have stronger food programs (multiple restaurants per resort, celebrity chef partnerships, superb Asian cuisine). Bora Bora\'s resort dining is good but not exceptional — the island\'s best meals are actually off-resort at roulottes (food trucks) and Bloody Mary\'s. Eat off-resort at least twice in Bora Bora.' },
      { q: 'Which is better for a longer 10-14 night honeymoon?', a: 'Maldives — you can split across 2 resorts with a seaplane hop (a quiet all-inclusive adults-only then a lively foodie 5-star, for example). In French Polynesia, split across Bora Bora + Moorea + Tikehau for more variety over 10+ nights.' },
    ],
  },

  // ── 2. Maldives vs Seychelles ───────────────────────────────────────────────
  {
    slug: 'maldives-vs-seychelles',
    a: { destination: 'maldives', label: 'Maldives' },
    b: { destination: 'seychelles', label: 'Seychelles' },
    tagline: 'Flat atoll paradise vs granite-boulder beaches — two very different Indian Oceans.',
    metaDescription: 'Maldives or Seychelles for your honeymoon? Overwater villas vs granite boulder beaches, marine life, privacy, cost. Full comparison.',
    verdict: 'The Maldives offer the purest water, the widest resort choice, and the purest overwater villa experience. The Seychelles offer more varied landscapes — dramatic granite boulders, lush jungle-covered peaks, actual hikable islands with culture and local life. If you want to laze in a villa above crystal water for 7 days, pick the Maldives. If you want beach + mountain + culture + wildlife (giant tortoises!) in one trip, pick the Seychelles.',
    tldr: {
      forA: 'The Maldives — for overwater villa purity, marine life, and total resort immersion.',
      forB: 'The Seychelles — for dramatic landscapes, nature, and variety within one honeymoon.',
      tie: 'Equal romance, equal privacy. Different characters.',
    },
    criteria: [
      { label: 'Flight time (from Europe)',   aWins: true, aDetail: '10-11h via Gulf hub', bDetail: '9-10h direct from Paris/London' },
      { label: 'Overwater villas',             aWins: true, aDetail: 'Hundreds of options, the definitional destination', bDetail: 'A handful (Waldorf Astoria Platte, others). Not the main draw.' },
      { label: 'Beaches',                      aWins: false, aDetail: 'Flat white atolls, all similar-looking', bDetail: 'Anse Source d\'Argent, Anse Lazio — the most photographed beaches on earth, granite boulders' },
      { label: 'Nature / hiking',              aWins: false, aDetail: 'No hiking, atolls are flat', bDetail: 'Morne Seychellois National Park, jungle hikes, coco de mer' },
      { label: 'Wildlife',                     aWins: 'tie', aDetail: 'Whale sharks and manta rays', bDetail: 'Aldabra giant tortoises, 150-yr-old, walk among them' },
      { label: 'Water clarity',                aWins: true, aDetail: '25-30m visibility, purer', bDetail: '15-20m, very good but not Maldivian' },
      { label: 'Culture / local life',         aWins: false, aDetail: 'Minimal outside Malé', bDetail: 'Mahé, Praslin, La Digue are inhabited — local cuisine, music, friendly people' },
      { label: 'Resort variety',               aWins: true, aDetail: '120+ resorts, every tier', bDetail: '~20 serious luxury resorts' },
      { label: 'Privacy',                      aWins: true, aDetail: 'Your own island', bDetail: 'Good but resorts share the main islands' },
      { label: 'Combining with other trips',   aWins: false, aDetail: 'Hard — atolls only', bDetail: 'Easy to pair Mahé + Praslin + La Digue in one honeymoon' },
      { label: 'Price',                        aWins: 'tie', aDetail: 'Similar luxury tier, $800-4000/night', bDetail: 'Similar, $600-3500/night' },
    ],
    pickA: {
      title: 'Pick the Maldives if…',
      bullets: [
        'You want the pure overwater villa dream — nothing else competes',
        'Marine life and snorkeling are a major priority',
        'You want total island privacy with no distractions',
        'You want the widest choice of resort brands and price points',
      ],
    },
    pickB: {
      title: 'Pick the Seychelles if…',
      bullets: [
        'You want beach + jungle + culture in one honeymoon',
        'The landscape (granite boulders, dramatic peaks) matters as much as the water',
        'You want to meet locals, eat Creole cuisine, explore real islands',
        'Giant tortoises and coco de mer make your inner nerd happy',
      ],
    },
    faqs: [
      { q: 'Which has better beaches?', a: 'Seychelles. Anse Source d\'Argent (La Digue) and Anse Lazio (Praslin) consistently rank as the two most beautiful beaches on earth. Maldives atoll beaches are uniformly beautiful but visually similar one to the next — Seychelles beaches each have their own dramatic granite-boulder personality.' },
      { q: 'Which is better for snorkeling?', a: 'Maldives. Coral coverage, visibility, and marine megafauna (whale sharks, mantas) are world-class. Seychelles has lovely reefs but bleaching has hit harder and density is lower.' },
      { q: 'Can I combine Maldives + Seychelles?', a: 'Yes — they\'re both on the Indian Ocean flight corridor. A popular combo is 5 nights Maldives + 5 nights Seychelles via a Mahé-Malé connecting flight. Budget for the extra flight (~$400-700 per person) and the DMC logistics.' },
    ],
  },

  // ── 3. Bali vs Thailand ─────────────────────────────────────────────────────
  {
    slug: 'bali-vs-thailand',
    a: { destination: 'bali', label: 'Bali' },
    b: { destination: 'thailand', label: 'Thailand' },
    tagline: 'Spiritual Hindu island versus Southeast Asian variety — where\'s your honeymoon?',
    metaDescription: 'Bali or Thailand for a honeymoon? Spiritual Ubud vs Thai beaches and culture. Hotels, food, price, activities. Honest side-by-side.',
    verdict: 'Bali is a single island of remarkable concentration — rice terraces, temples, cliff beaches, jungle, and some of the world\'s best boutique luxury within 2-3 hours of each other. Thailand is a whole country with huge variety: Phuket\'s islands, Koh Samui\'s beaches, Chiang Mai\'s temples, Bangkok\'s food scene. If you want a focused spiritual-romantic honeymoon on one island with superb design-forward hotels, pick Bali. If you want multi-city variety, deeper culture, and the best street food in Asia, pick Thailand.',
    tldr: {
      forA: 'Bali — for Ubud\'s rice-terrace wellness retreats, Uluwatu\'s cliff pools, one-island intensity.',
      forB: 'Thailand — for beach + city + jungle + food culture in one trip, lower costs, more variety.',
      tie: 'Both offer superb value for honeymoons under $500/night.',
    },
    criteria: [
      { label: 'Flight time (from Europe)',    aWins: false, aDetail: '16-18h with 1 stop', bDetail: '11-13h, several direct (Thai Airways BKK)' },
      { label: 'Best luxury hotels',           aWins: true, aDetail: 'Aman, COMO, Four Seasons Sayan, Capella, Bulgari — concentration is insane', bDetail: 'Amanpuri, Six Senses Yao Noi, Rosewood Phuket — excellent but fewer' },
      { label: 'Food',                         aWins: false, aDetail: 'Good but not as celebrated as Thai', bDetail: 'Street food heaven, Michelin-starred BKK, pad thai from a roulotte' },
      { label: 'Beaches',                      aWins: false, aDetail: 'Dark sand, often crowded, swells for surfers', bDetail: 'White sand in Koh Samui, Krabi, Koh Lipe — classic tropical' },
      { label: 'Culture & temples',            aWins: 'tie', aDetail: 'Hindu-Balinese temples everywhere, Galungan, Nyepi', bDetail: 'Buddhist temples, Chiang Mai Lanterns, Loy Krathong' },
      { label: 'Variety within one trip',      aWins: false, aDetail: 'One island — lots within 3h drive', bDetail: 'Country — beach + city + jungle + mountains' },
      { label: 'Price floor (5-star)',         aWins: 'tie', aDetail: '$250-500/night for boutique 5-star', bDetail: 'Same range, slightly cheaper for same quality' },
      { label: 'Price ceiling',                aWins: true, aDetail: 'Amandari, COMO Shambhala, Capella Ubud: $1500-3500/night', bDetail: 'Amanpuri, Six Senses: $1200-3000/night' },
      { label: 'Romance factor',               aWins: true, aDetail: 'Ubud jungle + rice terrace + temple wedding sites = peak romance', bDetail: 'Beach-focused, less introspective' },
      { label: 'Crowds',                       aWins: false, aDetail: 'Very touristy in Canggu/Ubud — traffic can ruin days', bDetail: 'Easier to escape crowds in outer islands and Krabi region' },
    ],
    pickA: {
      title: 'Pick Bali if…',
      bullets: [
        'You want Ubud\'s rice-terrace jungle romance + Uluwatu cliff drama in one trip',
        'You\'re drawn to spiritual/wellness honeymoons (yoga, meditation, healing)',
        'You want design-forward boutique luxury (the Aman/COMO/Capella density is world-class)',
        'You\'re coming from Australia/NZ (closer flights)',
      ],
    },
    pickB: {
      title: 'Pick Thailand if…',
      bullets: [
        'Food is a major honeymoon priority — Thailand has the best street food in Asia',
        'You want variety — beach + city + jungle + temples in one trip',
        'You\'re on a mid-range budget and want 5-star value',
        'You\'re coming from Europe (direct BKK flights, shorter hop)',
      ],
    },
    faqs: [
      { q: 'Which is cheaper?', a: 'Thailand is 15-20% cheaper on average for the same tier of hotel, food, and activity. Bali\'s luxury resorts are priced at a Maldives/Indonesia-elevated level; Thailand offers better 4-star value.' },
      { q: 'Which has better weather?', a: 'Both are tropical with a wet and dry season. Bali dry season is May-October, Thailand\'s varies by coast (Andaman/Phuket: Nov-Apr; Gulf/Koh Samui: Jan-Sep). Consult individual destination guides.' },
      { q: 'Which has less tourism?', a: 'Thailand, because it has so many more destinations. Bali\'s Canggu/Ubud are notoriously crowded. Outer Thai islands like Koh Kood or Koh Lipe still feel secluded.' },
      { q: 'Can I combine Bali + Thailand?', a: 'Yes, easy — Bangkok to Denpasar is a 4h30 direct flight. A 10-14 night honeymoon can do 5 nights Bali Ubud + 5 nights Thai beach very comfortably.' },
    ],
  },

  // ── 4. Santorini vs Amalfi ──────────────────────────────────────────────────
  {
    slug: 'santorini-vs-amalfi-coast',
    a: { destination: 'santorini', label: 'Santorini' },
    b: { destination: 'amalfi', label: 'Amalfi Coast' },
    tagline: 'Cyclades caldera white vs Italian cliffside dolce vita — Europe\'s two most iconic coastlines.',
    metaDescription: 'Santorini or the Amalfi Coast for your honeymoon? Sunsets, hotels, food, crowds, prices. Side-by-side for couples deciding.',
    verdict: 'Both are postcard destinations and both will deliver a romantic honeymoon. Santorini is more visually iconic (the caldera view, blue domes, white villages, volcanic sunsets) and more hotel-concentrated on adults-only cliffside properties. The Amalfi Coast is more varied (Positano, Ravello, Capri, Sorrento, Capri), has deeper food culture, and feels less overrun if you choose smaller towns. If the perfect sunset photo matters most, pick Santorini. If you want multi-village variety, limoncello terraces, and Italian dolce vita, pick Amalfi.',
    tldr: {
      forA: 'Santorini — if the sunset photo and adults-only cliffside suite is your honeymoon image.',
      forB: 'Amalfi — for Italian cuisine, Positano glamour, and multi-village romance.',
      tie: 'Both are swelteringly hot and crowded July-August. Both reward May/June and September.',
    },
    criteria: [
      { label: 'The iconic view',              aWins: true, aDetail: 'Oia at sunset — the most photographed 90 minutes on earth', bDetail: 'Positano from the ferry — pastel cascade above azure' },
      { label: 'Adults-only hotels',           aWins: true, aDetail: '20+ adults-only cliffside suites', bDetail: 'Handful (Monastero Santa Rosa, Villa Treville)' },
      { label: 'Food',                         aWins: false, aDetail: 'Mediterranean Greek, fava, cherry tomatoes', bDetail: 'Italian — lemons, linguine alle vongole, mozzarella di bufala, 2 Michelin star Don Alfonso' },
      { label: 'Beaches',                      aWins: false, aDetail: 'Black sand Kamari, red sand Akrotiri — dramatic but not swim-worthy', bDetail: 'Pebble coves, Furore fjord, Capri\'s Marina Piccola' },
      { label: 'Variety within the trip',      aWins: false, aDetail: 'One island — Oia, Imerovigli, Fira, Pyrgos', bDetail: 'Positano, Ravello, Amalfi town, Capri, Ischia, Sorrento — a week is barely enough' },
      { label: 'Crowds',                       aWins: false, aDetail: 'Cruise ships disgorge 10 000 people by noon. Oia sunset = elbow-to-elbow', bDetail: 'Positano is crowded but day-trippers thin by evening' },
      { label: 'Flight access',                aWins: 'tie', aDetail: 'Direct from most European cities Apr-Oct', bDetail: 'Naples (NAP) 2-3h from most of Europe, direct' },
      { label: 'Best season',                  aWins: 'tie', aDetail: 'Late May, early June, Sep', bDetail: 'Same' },
      { label: 'Price for cliffside room',     aWins: false, aDetail: '$700-3000/night with caldera view', bDetail: '$500-1500/night (non-Positano clifftop much cheaper)' },
      { label: 'Romance factor',               aWins: true, aDetail: 'Adults-only, sunset, plunge pool, caldera view — peak engineered romance', bDetail: 'More varied but arguably less concentrated' },
    ],
    pickA: {
      title: 'Pick Santorini if…',
      bullets: [
        'The sunset + caldera view is non-negotiable',
        'You want an adults-only cliffside suite with private plunge pool',
        'You want a focused, single-island 5-7 night honeymoon',
        'Photography matters more than food',
      ],
    },
    pickB: {
      title: 'Pick Amalfi if…',
      bullets: [
        'Italian food is a main reason for the trip',
        'You want multi-village variety: Positano + Ravello + Capri + Sorrento in one week',
        'You\'re combining with Rome or Naples for cultural depth',
        'You want Mediterranean Europe without Greek-island isolation',
      ],
    },
    faqs: [
      { q: 'Which is less crowded?', a: 'Neither in peak summer. Santorini Oia at sunset is elbow-to-elbow July-August. Amalfi is crowded but day-trippers return to Naples/cruise ships by evening so the top Positano hotels reclaim exclusivity 7pm-10am.' },
      { q: 'Which is better for a honeymoon dinner?', a: 'Amalfi by a wide margin. Don Alfonso 1890 (2 Michelin stars), La Sponda at Le Sirenuse, Il Ristorante at Monastero Santa Rosa — these are some of the best restaurants in southern Europe. Santorini has Selene and Metaxi Mas but nothing at that tier.' },
      { q: 'Can we combine Santorini + Amalfi?', a: 'Possible but logistically awkward. A 14-night trip could do 3 nights Rome + 5 nights Amalfi + 5 nights Santorini via Athens (ATH-JTR short hop). Not a 7-night honeymoon.' },
      { q: 'Which is better for a long weekend (4 nights)?', a: 'Santorini is easier — single island, direct flight, no driving. Amalfi needs at least 5 nights to justify the road/ferry logistics.' },
    ],
  },

  // ── 5. Kenya vs Tanzania (safari head-to-head) ──────────────────────────────
  {
    slug: 'kenya-vs-tanzania-safari',
    a: { destination: 'kenya', label: 'Kenya' },
    b: { destination: 'tanzania', label: 'Tanzania' },
    tagline: 'Maasai Mara or Serengeti — where\'s your Big Five honeymoon?',
    metaDescription: 'Kenya or Tanzania for a honeymoon safari? Maasai Mara vs Serengeti, lodges, wildlife, price, access. Expert side-by-side.',
    verdict: 'Kenya and Tanzania share the same ecosystem — the Great Migration moves between them seasonally. Kenya wins on accessibility (easier to reach, cheaper flights) and diversity of private conservancies. Tanzania wins on sheer scale (Serengeti + Ngorongoro + Kilimanjaro + Zanzibar beach extension in one trip). Both have world-class lodges. For first-time Africa honeymooners coming from Europe, Kenya is slightly easier. For a longer trip combining safari + beach, Tanzania is unbeatable.',
    tldr: {
      forA: 'Kenya — easier logistics, Maasai Mara conservancies, shorter safari-only trip.',
      forB: 'Tanzania — Serengeti scale, Ngorongoro Crater, Zanzibar beach combo.',
      tie: 'Wildlife density, lodge quality, Migration access — both tied.',
    },
    criteria: [
      { label: 'Wildlife density',             aWins: 'tie', aDetail: 'Maasai Mara is 25% of the ecosystem, most dense per km²', bDetail: 'Serengeti 75% — same animals, bigger stage' },
      { label: 'Great Migration',              aWins: 'tie', aDetail: 'River crossings Jul-Oct (Maasai Mara)', bDetail: 'Calving season Jan-Mar + Grumeti crossings May-Jun' },
      { label: 'Private conservancies',        aWins: true, aDetail: 'Mara Triangle, Olare Motorogi, Naboisho — vehicle limits, off-road, night drives', bDetail: 'National parks have vehicle caps but more crowded around sightings' },
      { label: 'Top lodges',                   aWins: 'tie', aDetail: 'Angama Mara, Mahali Mzuri, Cottar\'s 1920s', bDetail: 'Singita, Four Seasons Serengeti, &Beyond Ngorongoro Crater Lodge' },
      { label: 'Flight access (from Europe)',  aWins: true, aDetail: 'Direct Paris/London to Nairobi (~8h)', bDetail: 'No direct Europe-Arusha, usually via Dubai or Nairobi (12-14h total)' },
      { label: 'Additional experiences',       aWins: 'tie', aDetail: 'Giraffe Manor, Laikipia plateau, Amboseli (Kilimanjaro views)', bDetail: 'Kilimanjaro climb, Ngorongoro Crater, Selous southern circuit' },
      { label: 'Beach extension',              aWins: false, aDetail: 'Kenya coast (Diani) — nice but limited luxury', bDetail: 'Zanzibar + Mafia Island — world-class' },
      { label: 'Price floor',                  aWins: true, aDetail: '$800/night for decent lodge, $1500 for excellent', bDetail: '$1000-1500/night entry, $2500+ for top tier' },
      { label: 'Price ceiling',                aWins: false, aDetail: '$3500/night (Mahali Mzuri, Angama)', bDetail: '$5000+/night (Singita Grumeti, Four Seasons villa)' },
      { label: 'Length of stay recommended',   aWins: true, aDetail: '5-7 nights safari-only is perfect', bDetail: '10+ nights to justify (safari + Zanzibar)' },
    ],
    pickA: {
      title: 'Pick Kenya if…',
      bullets: [
        'This is your first Africa trip — easier logistics, shorter flights',
        'You have 5-7 nights for a focused safari honeymoon',
        'Private conservancies matter (Angama Mara, Cottar\'s, Mahali Mzuri)',
        'You\'re adding Giraffe Manor or a Laikipia plateau extension',
      ],
    },
    pickB: {
      title: 'Pick Tanzania if…',
      bullets: [
        'You want to combine safari with a proper beach (Zanzibar)',
        'You have 10+ nights total',
        'Seeing Ngorongoro Crater is important (it\'s unmatched)',
        'You want the absolute pinnacle of luxury (Singita Grumeti)',
      ],
    },
    faqs: [
      { q: 'Which has better Migration viewing?', a: 'Both — the Migration moves between the two. Maasai Mara is best Jul-Oct (river crossings). Serengeti (Grumeti River crossings and calving in southern plains) is best Dec-Jun.' },
      { q: 'Can I combine Kenya and Tanzania?', a: 'Yes. A popular combo is 3 nights Kenya (Maasai Mara) + 4 nights Tanzania (Serengeti or Ngorongoro) + 4 nights Zanzibar. Cross-border flights are easy (Nairobi-Kilimanjaro, Mara-Serengeti direct by light aircraft).' },
      { q: 'Is safari honeymoon-appropriate?', a: 'Absolutely — many luxury lodges are designed around honeymooners. Private plunge pools, bush breakfasts, surprise sundowners, honeymoon turn-down. Roving Bushtops, Angama Mara, and Singita all excel.' },
      { q: 'How many days do I need on safari?', a: 'Minimum 4 nights per location to justify the flight in. For a honeymoon, 5-7 nights in one primary location + optional 3-4 nights beach extension is ideal.' },
    ],
  },

  // ── 6. Maldives vs Mauritius ────────────────────────────────────────────────
  {
    slug: 'maldives-vs-mauritius',
    a: { destination: 'maldives', label: 'Maldives' },
    b: { destination: 'mauritius', label: 'Mauritius' },
    tagline: 'Private-atoll overwater paradise vs lagoon-ringed island of variety.',
    metaDescription: 'Maldives or Mauritius for a honeymoon? Overwater villas, excursions, culture, food, value. Side-by-side expert guide.',
    verdict: 'The Maldives win on the overwater villa experience and pure ocean clarity. Mauritius wins on variety (mountains, hikes, waterfalls, tea plantations, markets, food culture) and value. The Maldives is a focused "resort as destination" experience; Mauritius feels like a whole country you\'re exploring. If you want to disappear into a villa, pick the Maldives. If you want resort + excursions + culture, pick Mauritius.',
    tldr: {
      forA: 'The Maldives — overwater villa purity, total resort immersion.',
      forB: 'Mauritius — variety of experiences, better value, active honeymoon.',
      tie: 'Both have superb 5-star lagoon resorts.',
    },
    criteria: [
      { label: 'Overwater villas',              aWins: true, aDetail: 'The definitional destination', bDetail: 'A handful (Constance Prince Maurice, Four Seasons Anahita)' },
      { label: 'Off-resort activities',         aWins: false, aDetail: 'Minimal — resort is the world', bDetail: 'Hiking, Black River Gorges, Chamarel, swimming with dolphins, rum tours' },
      { label: 'Food / culture',                aWins: false, aDetail: 'Resort food only', bDetail: 'Creole, Indian, Chinese, French fusion — extraordinary street food' },
      { label: 'Lagoon beaches',                aWins: 'tie', aDetail: 'Uniformly perfect', bDetail: 'Superb east coast (Belle Mare), dramatic south coast' },
      { label: 'Price floor (5-star)',          aWins: false, aDetail: '$600-800/night entry', bDetail: '$400-600/night entry — notably cheaper' },
      { label: 'Flight access (from Europe)',   aWins: 'tie', aDetail: '10-11h with connection', bDetail: '11-12h direct from Paris' },
      { label: 'Marine life',                   aWins: true, aDetail: 'World-class: mantas, whale sharks', bDetail: 'Good reef snorkeling' },
      { label: 'Cultural depth',                aWins: false, aDetail: 'Minimal', bDetail: 'French-British-Indian-African-Chinese melting pot' },
      { label: 'Romance factor',                aWins: 'tie', aDetail: 'Room-based', bDetail: 'Experience-based' },
    ],
    pickA: {
      title: 'Pick the Maldives if…',
      bullets: [
        'The overwater villa is the experience you\'re paying for',
        'You want to disconnect completely',
        'Marine life is a priority',
      ],
    },
    pickB: {
      title: 'Pick Mauritius if…',
      bullets: [
        'You want beach + mountains + culture in one honeymoon',
        'Food and excursions matter as much as the room',
        'You\'re on a budget but still want 5-star',
        'You\'re combining with Réunion for a 2-island trip',
      ],
    },
    faqs: [
      { q: 'Which is cheaper?', a: 'Mauritius, by 20-30% for equivalent star ratings. Mauritian resorts are larger and more competitive; Maldivian resorts are single-property monopolies on their atolls, so pricing is rigid.' },
      { q: 'Which has better food?', a: 'Mauritius by a wide margin. Its 5-cuisine fusion (French, Indian, Chinese, Creole, African) is unmatched in the Indian Ocean. Street food alone is reason to go.' },
      { q: 'Can I do a 4-night Maldives honeymoon and save the rest for Mauritius?', a: 'The reverse — 4 nights Mauritius + 5 Maldives — is common and excellent. Flight routing (MRU-MLE direct seasonally or via Seychelles) takes a half-day.' },
    ],
  },

  // ── 7. Bora Bora vs Fiji ────────────────────────────────────────────────────
  {
    slug: 'bora-bora-vs-fiji',
    a: { destination: 'bora-bora', label: 'Bora Bora' },
    b: { destination: 'fiji', label: 'Fiji' },
    tagline: 'Iconic overwater lagoon vs private island luxury — two South Pacific fantasies.',
    metaDescription: 'Bora Bora or Fiji for a honeymoon? Overwater villas, private islands, water, culture, flights. Which is right for your couple?',
    verdict: 'Bora Bora delivers the iconic overwater bungalow with Mount Otemanu as backdrop — a single-image destination that\'s been marketed as "paradise" for 50 years. Fiji offers private-island resorts where you\'re often the only guests on your own patch of reef — Laucala, Kokomo, Vatulele. Bora Bora is more polished and photogenic; Fiji is more intimate and adventurous. If you want the bucket-list photo, Bora Bora. If you want utter seclusion on a private island, Fiji.',
    tldr: {
      forA: 'Bora Bora — for the iconic Otemanu backdrop and definitive overwater villa photograph.',
      forB: 'Fiji — for private-island exclusivity (Laucala, Kokomo) and warmer Melanesian hospitality.',
      tie: 'Both are Pacific island paradises with world-class 5-star resorts and pristine reefs.',
    },
    criteria: [
      { label: 'The iconic view',               aWins: true, aDetail: 'Mount Otemanu rising 727m behind the lagoon — unmatched', bDetail: 'Coral atolls without a defining peak' },
      { label: 'Overwater villas',              aWins: true, aDetail: '~15 resorts with overwater, the definitional format', bDetail: 'Handful, not Fiji\'s signature offering' },
      { label: 'Private-island resorts',        aWins: false, aDetail: 'Most resorts on motus (small islets) but with other resorts visible', bDetail: 'Genuine private islands: Laucala, Kokomo, Vatulele, Wakaya — often the only resort for miles' },
      { label: 'Flight (from USA west)',        aWins: true, aDetail: '8h direct LAX-PPT', bDetail: '10-11h direct LAX-NAN' },
      { label: 'Flight (from Europe)',          aWins: false, aDetail: '24h with 2 stops via LAX', bDetail: '22-23h via LAX or via Sydney' },
      { label: 'Flight (from Australia)',       aWins: false, aDetail: '8-9h via Auckland/Papeete', bDetail: '4-5h direct SYD-NAN' },
      { label: 'Hospitality warmth',            aWins: false, aDetail: 'French Polynesian — warm but more reserved', bDetail: 'Melanesian "Bula!" — widely considered the warmest welcome in the world' },
      { label: 'Diving',                        aWins: false, aDetail: 'Good lagoon diving, reef sharks, rays', bDetail: 'World-class: Beqa Lagoon bull sharks, Rainbow Reef, Great Astrolabe Reef' },
      { label: 'Food culture',                  aWins: 'tie', aDetail: 'French cuisine at resorts, local roulottes at Vaitape', bDetail: 'Fijian kokoda (ceviche), lovo pits, Indian curries' },
      { label: 'Adults-only option',            aWins: false, aDetail: 'Few true adults-only resorts (Eden Beach, Rohotu Fare)', bDetail: 'Several: Tokoriki, Namale, Royal Davui — Fiji is stronger here' },
      { label: 'Price (5-star)',                aWins: false, aDetail: '$800-5000/night, premium for proximity to Otemanu', bDetail: '$600-8000/night, wider range, better value at mid-tier' },
      { label: 'Romance factor',                aWins: 'tie', aDetail: 'Engineered around honeymooners for 50 years', bDetail: 'Private island exclusivity = peak seclusion' },
    ],
    pickA: {
      title: 'Pick Bora Bora if…',
      bullets: [
        'The Otemanu-behind-the-villa photograph is the trip',
        'You want French service polish and Polynesian romance',
        'You\'re coming from the US west coast (shorter flight vs Fiji)',
        'You\'re combining with Moorea or Tikehau for island hopping',
      ],
    },
    pickB: {
      title: 'Pick Fiji if…',
      bullets: [
        'Private-island exclusivity matters — you want to be the only couple on 1000 acres',
        'Diving is a major priority (Fiji is Pacific\'s top dive destination)',
        'You want Melanesian warmth and less polished, more personal hospitality',
        'You\'re from Australia/NZ (much shorter flight)',
        'Adults-only matters (Fiji has stronger options)',
      ],
    },
    faqs: [
      { q: 'Which has better overwater villas?', a: 'Bora Bora — it\'s the original and most-developed overwater destination outside the Maldives. Fiji has some (Likuliku Lagoon, Wakaya) but it\'s not the signature format.' },
      { q: 'Is Fiji cheaper than Bora Bora?', a: 'For equivalent 5-star luxury, yes — Fiji is 15-25% cheaper, especially on mid-range 4 & 5-star. For ultra-luxury (Laucala at $4000-8000/night), Fiji can exceed Bora Bora.' },
      { q: 'Which is safer for cyclones?', a: 'Cyclone season runs Nov-Apr in both. Fiji is more cyclone-prone and resorts budget for storm closures. Bora Bora sits within French Polynesia where cyclones are rarer and milder. If traveling Dec-Mar, Bora Bora is the safer pick.' },
      { q: 'Can I combine them?', a: 'Technically possible via Nadi-LAX-Papeete but the flight costs are absurd and you lose a full day each way. Pick one for this honeymoon, save the other for anniversary travel.' },
    ],
  },

  // ── 8. St Lucia vs Turks & Caicos ───────────────────────────────────────────
  {
    slug: 'st-lucia-vs-turks-and-caicos',
    a: { destination: 'st-lucia', label: 'St. Lucia' },
    b: { destination: 'turks-and-caicos', label: 'Turks & Caicos' },
    tagline: 'Dramatic Pitons & rainforest vs flat turquoise perfection — two very different Caribbeans.',
    metaDescription: 'St Lucia or Turks and Caicos for a honeymoon? Pitons drama vs Grace Bay perfection. Flights, hotels, beaches, adventure. Full comparison.',
    verdict: 'St. Lucia is the most dramatic Caribbean island — the Pitons rise 700m out of the sea, rainforests, sulphur springs, and chocolate-making jungle estates. Turks & Caicos is the most beach-perfect — Grace Bay consistently ranks #1 beach in the world, flat turquoise shallow water for miles. St. Lucia is for adventure + dramatic romance; Turks & Caicos is for pure beach bliss and the cleanest water in the Caribbean.',
    tldr: {
      forA: 'St. Lucia — for the Pitons view, jungle adventures, and dramatic landscape.',
      forB: 'Turks & Caicos — for the world\'s best beach and purest turquoise water in the Caribbean.',
      tie: 'Both are accessible from the US east coast with direct flights.',
    },
    criteria: [
      { label: 'The iconic view',               aWins: true, aDetail: 'The Pitons — twin volcanic peaks rising from the sea, unique in the Caribbean', bDetail: 'Grace Bay from above — endless turquoise, but flat' },
      { label: 'Beach quality',                 aWins: false, aDetail: 'Pebble coves and Sugar Beach (black to white sand), intimate', bDetail: 'Grace Bay — 12 miles of sugar-fine white sand, #1 beach in world' },
      { label: 'Water clarity',                 aWins: false, aDetail: 'Good but reef coverage limited', bDetail: '30m+ visibility, pure turquoise, Bahamas-level' },
      { label: 'Adventure',                     aWins: true, aDetail: 'Piton hiking, zipline, chocolate making, sulphur springs mud bath, Marigot Bay', bDetail: 'Mostly beach/water activities (snorkeling, kayaking), less variety' },
      { label: 'Rainforest',                    aWins: true, aDetail: '77% of island is forest, 29 endemic species', bDetail: 'Flat, no forest' },
      { label: 'Adults-only resorts',           aWins: true, aDetail: 'Sandals, Jade Mountain, Ladera, Rendezvous — strong adults-only category', bDetail: 'Beaches Turks & Caicos is family-oriented; Grace Bay Club has adults-only wing' },
      { label: 'Flight time (from NYC)',        aWins: false, aDetail: '4.5h direct', bDetail: '3h direct — the closest luxury Caribbean' },
      { label: 'Flight time (from Europe)',     aWins: true, aDetail: '8-9h direct from London (BA)', bDetail: '9-10h direct from London seasonally' },
      { label: 'Best season',                   aWins: 'tie', aDetail: 'Dec-Apr dry, May-Nov green season', bDetail: 'Dec-Apr dry, hurricane risk Jun-Nov' },
      { label: 'Honeymoon hotel quality',       aWins: 'tie', aDetail: 'Jade Mountain is a once-in-a-lifetime property', bDetail: 'Amanyara, COMO Parrot Cay, Grace Bay Club' },
      { label: 'Price floor (5-star)',          aWins: true, aDetail: '$500-800/night', bDetail: '$700-1200/night' },
      { label: 'Price ceiling',                 aWins: 'tie', aDetail: 'Jade Mountain $1800-3500', bDetail: 'COMO Parrot Cay $2500-5000' },
    ],
    pickA: {
      title: 'Pick St. Lucia if…',
      bullets: [
        'Dramatic landscape matters (the Pitons are Caribbean\'s most iconic view)',
        'You want adventure: hiking, rainforest, ziplines, jungle estates, chocolate making',
        'Adults-only all-inclusive is a priority (strong Sandals + boutique options)',
        'Your budget is $500-1500/night and you want maximum value',
        'Jade Mountain\'s open-4th-wall-Pitons-view suite is calling',
      ],
    },
    pickB: {
      title: 'Pick Turks & Caicos if…',
      bullets: [
        'Grace Bay is a non-negotiable beach experience',
        'You want the cleanest, clearest turquoise water in the Caribbean',
        'You\'re coming from the US east coast (3h direct NYC-PLS)',
        'You want a low-key, hassle-free beach week with no driving',
        'Your budget is $1500-3000/night — Amanyara or COMO Parrot Cay are the prize',
      ],
    },
    faqs: [
      { q: 'Which has the better beaches?', a: 'Turks & Caicos, definitively. Grace Bay is consistently ranked the #1 beach in the world by Tripadvisor. St Lucia\'s best beaches (Sugar Beach, Anse Chastanet) are visually dramatic but smaller and more intimate.' },
      { q: 'Which is better for honeymoons with adventure?', a: 'St. Lucia. You can hike the Gros Piton, zipline through the rainforest, visit a working chocolate plantation, and still have a pool villa at Jade Mountain. Turks & Caicos is primarily beach activities.' },
      { q: 'Is Turks & Caicos more expensive?', a: 'Yes, 25-40% more for equivalent 5-star lodging. T&C has fewer mid-range options, and its location (British Overseas Territory, USD-denominated) keeps prices high. St Lucia has wider range.' },
      { q: 'Which has less tourism?', a: 'T&C outside Grace Bay (Pine Cay, Parrot Cay, private islands) is extremely exclusive. St Lucia has heavier cruise-ship traffic in Castries but resort areas (Soufrière) feel secluded.' },
    ],
  },

  // ── 9. Bali vs Maldives ─────────────────────────────────────────────────────
  {
    slug: 'bali-vs-maldives',
    a: { destination: 'bali', label: 'Bali' },
    b: { destination: 'maldives', label: 'Maldives' },
    tagline: 'Spiritual jungle island vs overwater atoll paradise — pick your honeymoon soul.',
    metaDescription: 'Bali or Maldives for a honeymoon? Ubud rice terraces vs overwater villas. Different vibes entirely. Which suits your couple?',
    verdict: 'These destinations don\'t really compete — they answer opposite questions. Bali is about spirituality, culture, food, jungle, and activity. The Maldives is about doing nothing in a villa over water with perfect clarity. Couples who want to do and explore pick Bali. Couples who want to disconnect and be pick Maldives. If you can\'t decide, you likely want both — do 4 nights Bali + 5 nights Maldives on a single 10-day trip (well-connected flights via Singapore).',
    tldr: {
      forA: 'Bali — spiritual Ubud, Uluwatu cliffs, culture, food, and incredible value luxury.',
      forB: 'Maldives — the overwater villa paradigm, marine life, total seclusion.',
      tie: 'Both offer exceptional boutique luxury with strong wellness offerings (COMO, Six Senses, Aman in both).',
    },
    criteria: [
      { label: 'Vibe',                          aWins: 'tie', aDetail: 'Active, spiritual, cultural, social', bDetail: 'Passive, oceanic, luxurious, isolated' },
      { label: 'Overwater villas',              aWins: false, aDetail: 'Not a thing in Bali', bDetail: 'The destination for overwater villas' },
      { label: 'Jungle / rice terraces',        aWins: true, aDetail: 'Ubud is the most photogenic jungle-temple landscape', bDetail: 'Flat atolls, no vegetation variety' },
      { label: 'Culture',                       aWins: true, aDetail: 'Hindu-Balinese temples, ceremonies, markets, Galungan, Nyepi', bDetail: 'Minimal — resort bubble' },
      { label: 'Food',                          aWins: true, aDetail: 'Excellent Indonesian + international (COMO Uma, Locavore)', bDetail: 'Resort-only, expensive, varied but limited' },
      { label: 'Price for 5-star',              aWins: true, aDetail: '$400-1500/night for world-class (Amandari, Capella)', bDetail: '$800-5000/night minimum for genuine luxury' },
      { label: 'Flight time (Europe)',          aWins: false, aDetail: '16-18h with stop', bDetail: '10-11h with stop' },
      { label: 'Water clarity',                 aWins: false, aDetail: 'Variable, Black sand beaches common', bDetail: '25-30m visibility, glass-clear' },
      { label: 'Wellness',                      aWins: true, aDetail: 'Ubud has the highest density of wellness retreats anywhere (COMO Shambhala, Fivelements)', bDetail: 'Resort spas are excellent but single-resort' },
      { label: 'Variety within one trip',       aWins: true, aDetail: 'Ubud + Uluwatu + Canggu + Sanur in a week', bDetail: 'One resort, one atoll, one experience' },
      { label: 'Romance focus',                 aWins: 'tie', aDetail: 'Rice-terrace cliff villa + temple blessing ritual', bDetail: 'Overwater villa + bubble bath + plunge pool' },
    ],
    pickA: {
      title: 'Pick Bali if…',
      bullets: [
        'You want to do and see things, not just lie in a villa',
        'Wellness, yoga, and spirituality are honeymoon priorities',
        'Food matters as much as the room',
        'You have a tighter budget ($500-800/night for 5-star)',
        'You\'re coming from Australia/NZ (much shorter flight)',
      ],
    },
    pickB: {
      title: 'Pick the Maldives if…',
      bullets: [
        'Disconnecting and doing nothing is the whole point',
        'You want the overwater villa experience',
        'Water clarity and marine life are non-negotiable',
        'Total privacy (your own island) is worth paying more for',
        'You\'re coming from Europe or the Middle East (shorter flight)',
      ],
    },
    faqs: [
      { q: 'Can I combine Bali and Maldives?', a: 'Yes — it\'s a classic 10-14 day honeymoon combo. Fly Europe-Bali (16h), do 4-5 nights Bali, fly Bali-Maldives via Singapore or Colombo (8-9h), do 5-6 nights Maldives, fly Maldives-Europe (10h). Total 2-3 extra travel days vs single-destination trips.' },
      { q: 'Which is cheaper?', a: 'Bali, significantly. Top-tier Bali luxury (Amandari, Capella Ubud, Mandapa) runs $800-1500/night. Comparable Maldives (Cheval Blanc, Velaa, Soneva Jani) runs $2000-5000/night. Bali gives 60-70% of Maldives luxury at 40% of the cost.' },
      { q: 'Which has better weather?', a: 'Both are tropical with distinct wet/dry seasons. Bali dry = May-September. Maldives dry = December-March. If you plan summer honeymoon, Bali wins. Winter honeymoon, Maldives wins.' },
      { q: 'Is one better for a longer trip?', a: 'Maldives for 5-7 nights max (island fatigue sets in after a week). Bali easily supports 10-14 nights with varied regions. For 2 weeks, Bali + Maldives split.' },
    ],
  },

  // ── 10. Morocco vs Jordan ───────────────────────────────────────────────────
  {
    slug: 'morocco-vs-jordan',
    a: { destination: 'morocco', label: 'Morocco' },
    b: { destination: 'jordan', label: 'Jordan' },
    tagline: 'Riad romance & Atlas desert vs Petra & Wadi Rum — the MENA honeymoon showdown.',
    metaDescription: 'Morocco or Jordan for a honeymoon? Marrakech riads, Sahara sunsets, Petra, Wadi Rum. Culture, romance, logistics. Full comparison.',
    verdict: 'Morocco offers the most concentrated luxury in North Africa — Marrakech\'s royal riads (Royal Mansour, La Mamounia, Amanjena) are some of the finest hotels on earth. Jordan offers the most dramatic archaeology and landscape in the Middle East — Petra is a once-in-a-lifetime sight, Wadi Rum looks like Mars. Morocco is romance-on-rails, Jordan is adventure-honeymoon. If you want hammams, candlelit palace dinners, and dessert sunsets, Morocco. If you want to horse-ride through Petra at dawn and sleep under the stars in a Martian valley, Jordan.',
    tldr: {
      forA: 'Morocco — for the world\'s most opulent riads, Marrakech souks, and Sahara camel treks.',
      forB: 'Jordan — for Petra\'s drama, Wadi Rum\'s Martian landscape, and Dead Sea floats.',
      tie: 'Both are safe, Muslim-majority, highly accessible MENA destinations with warm hospitality.',
    },
    criteria: [
      { label: 'Archaeological drama',          aWins: false, aDetail: 'Volubilis Roman ruins, Medinas', bDetail: 'Petra + Jerash — two of MENA\'s top sites' },
      { label: 'Luxury hotels',                 aWins: true, aDetail: 'Royal Mansour, La Mamounia, Amanjena, Dar Ahlam — world-class riads', bDetail: 'Strong (Ma\'In Hot Springs, St Regis, Six Senses Shaharut just over the border) but less deep' },
      { label: 'Landscapes',                    aWins: 'tie', aDetail: 'Atlas Mountains + Sahara + Atlantic + Mediterranean', bDetail: 'Wadi Rum + Dead Sea + Red Sea (Aqaba) + forested north' },
      { label: 'Culture / cities',              aWins: true, aDetail: 'Marrakech, Fes, Chefchaouen, Essaouira — each unique', bDetail: 'Amman is mostly modern; Jordan is landscape-focused' },
      { label: 'Food',                          aWins: true, aDetail: 'Tagines, pastilla, mint tea rituals, bastilla, fresh orange juice everywhere', bDetail: 'Mezze, mansaf (national dish), falafel, knafeh — excellent but less varied' },
      { label: 'Desert experience',             aWins: 'tie', aDetail: 'Sahara camel trek + Berber nomad tent', bDetail: 'Wadi Rum — more cinematic, Lawrence of Arabia landscape' },
      { label: 'Flight time (Europe)',          aWins: true, aDetail: '3-4h direct', bDetail: '4-5h direct' },
      { label: 'Price for 5-star',              aWins: true, aDetail: '$400-1500/night (Royal Mansour $1500+)', bDetail: '$400-1200/night' },
      { label: 'Best season',                   aWins: 'tie', aDetail: 'Mar-May & Sep-Nov', bDetail: 'Mar-May & Sep-Nov' },
      { label: 'Beach option',                  aWins: 'tie', aDetail: 'Essaouira Atlantic wind, Taghazout surf', bDetail: 'Aqaba Red Sea, coral reefs' },
      { label: 'Length of stay',                aWins: 'tie', aDetail: '7-10 nights ideal', bDetail: '7-10 nights ideal (8 nights covers everything)' },
      { label: 'Romance factor',                aWins: true, aDetail: 'Riad courtyards at candlelight = peak MENA romance', bDetail: 'Petra by night (candles lining the Siq) is extraordinary, but overall less "romantic"' },
    ],
    pickA: {
      title: 'Pick Morocco if…',
      bullets: [
        'Hammam rituals, riad courtyards, and candlelit palace dinners are the dream',
        'You want multi-city variety (Marrakech + Fes + Atlas + Sahara)',
        'Food and cuisine matter',
        'The Royal Mansour or La Mamounia are on the bucket list',
      ],
    },
    pickB: {
      title: 'Pick Jordan if…',
      bullets: [
        'Seeing Petra in person is a life goal',
        'Wadi Rum\'s Martian landscape calls you',
        'You want an archaeology + adventure + desert romance trip',
        'You\'re combining with Israel/Palestine or Egypt for a longer regional trip',
      ],
    },
    faqs: [
      { q: 'Which is safer in 2026?', a: 'Both are consistently ranked as the safest Middle Eastern/North African travel destinations. Both had zero tourism-related security incidents in 2025. Check your government travel advisory, but both score equally safe.' },
      { q: 'Which is more romantic?', a: 'Morocco edges it on "engineered romance" (riads are designed around candlelit courtyard dinners, mosaic hammams, etc.). Jordan is more adventure-romance — sharing a bubble tent under Wadi Rum stars is its own magic.' },
      { q: 'Can I combine them?', a: 'Unusual combo — they\'re geographically opposite (NW Africa vs Middle East). No direct flights. Most couples pick one and save the other for anniversary travel.' },
      { q: 'Which is better for a shorter 5-night trip?', a: 'Jordan — you can cover Petra + Wadi Rum + Dead Sea in 5 nights comfortably. Morocco needs at least 7 to justify Marrakech + Atlas + Sahara routing.' },
    ],
  },

  // ── 11. Iceland vs Switzerland ──────────────────────────────────────────────
  {
    slug: 'iceland-vs-switzerland',
    a: { destination: 'iceland', label: 'Iceland' },
    b: { destination: 'switzerland', label: 'Switzerland' },
    tagline: 'Otherworldly volcanic Arctic vs Alpine grand-hotel glamour — cold honeymoons done right.',
    metaDescription: 'Iceland or Switzerland for a honeymoon? Northern Lights vs Matterhorn. Geothermal vs grand hotels. Full honeymoon comparison.',
    verdict: 'Iceland is another planet — volcanic landscapes, Northern Lights, geothermal lagoons, glaciers. Switzerland is Europe at its most polished — Matterhorn-view suites, century-old grand dames, fondue by candlelight in car-free villages. Iceland is for couples who want awe and adventure. Switzerland is for couples who want romance and refinement. Iceland under $800/night feels adventurous; Switzerland under $800/night feels cramped.',
    tldr: {
      forA: 'Iceland — for awe, Northern Lights, and volcanic landscape drama.',
      forB: 'Switzerland — for Alpine grand-hotel glamour and Matterhorn postcards.',
      tie: 'Both require serious budget — neither is cheap.',
    },
    criteria: [
      { label: 'The iconic view',               aWins: 'tie', aDetail: 'Northern Lights over a geothermal lagoon', bDetail: 'Matterhorn from Zermatt, reflected in a lake' },
      { label: 'Adventure',                     aWins: true, aDetail: 'Glacier hiking, ice caves, volcano tours, whale watching, horse riding', bDetail: 'Hiking, skiing — more traditional Alpine' },
      { label: 'Luxury hotels',                 aWins: false, aDetail: 'Strong modern design (Retreat at Blue Lagoon, Deplar Farm, Torfhús)', bDetail: 'Century-old grand dames (Badrutt\'s Palace, Gstaad Palace, The Alpina)' },
      { label: 'Food',                          aWins: false, aDetail: 'New Nordic, fresh fish, lamb — good but niche', bDetail: 'Fondue, raclette, trilingual French/German/Italian cuisine, multiple Michelin stars' },
      { label: 'Flight (Europe)',               aWins: true, aDetail: '3h direct from London', bDetail: '1-2h direct from most European capitals' },
      { label: 'Flight (USA east)',             aWins: true, aDetail: '5-6h direct, many Icelandair routes', bDetail: '7-8h direct NYC-ZRH' },
      { label: 'Best season',                   aWins: 'tie', aDetail: 'Summer (midnight sun) + Oct-Mar (Northern Lights)', bDetail: 'Summer (hiking) + Winter (ski)' },
      { label: 'Winter romance',                aWins: true, aDetail: 'Northern Lights + geothermal lagoon = peak winter romance', bDetail: 'St Moritz at Christmas = peak glamour but predictable' },
      { label: 'Summer romance',                aWins: false, aDetail: 'Green, dramatic, but hotel options thin out', bDetail: 'Lakes Como-adjacent region, hiking in flower-covered meadows, 25°C days' },
      { label: 'Price for 5-star',              aWins: 'tie', aDetail: '$500-1500/night', bDetail: '$700-2000/night' },
      { label: 'Romance factor',                aWins: 'tie', aDetail: 'Dramatic, primal, awe-inducing', bDetail: 'Refined, classical, picture-book' },
    ],
    pickA: {
      title: 'Pick Iceland if…',
      bullets: [
        'Northern Lights are on the bucket list',
        'You want adventure + awe (glaciers, ice caves, volcanoes)',
        'Design-forward minimalist hotels appeal (Retreat, Deplar Farm, ION)',
        'You\'re happy without deep cultural sightseeing — it\'s about landscape',
        'You have 5-7 nights for a focused trip',
      ],
    },
    pickB: {
      title: 'Pick Switzerland if…',
      bullets: [
        'You love grand-hotel glamour (Belle Époque palaces, afternoon tea rituals)',
        'Fine dining is a priority (Michelin stars abound)',
        'You want a shorter, easier trip from Europe',
        'Skiing or alpine hiking is part of the honeymoon',
        'You\'re combining with Italy or France for a multi-country trip',
      ],
    },
    faqs: [
      { q: 'Which is more expensive?', a: 'Switzerland. 5-star Alpine resorts in winter (Badrutt\'s Palace Christmas week) can hit $2000+/night. Iceland\'s luxury tier peaks around $1500/night at The Retreat. Food is also 20-30% more expensive in Switzerland than Iceland.' },
      { q: 'Which is better in winter?', a: 'Depends on preference. Iceland Dec-Mar is Northern Lights season + geothermal bathing — primal romance. Switzerland Dec-Mar is ski season + Christmas markets — refined romance.' },
      { q: 'Can we see the Northern Lights in Switzerland?', a: 'Virtually never — Switzerland is too far south. Iceland sits directly under the auroral oval. If Northern Lights are a priority, Iceland is the only choice.' },
      { q: 'Which has better hiking?', a: 'Switzerland in summer is unmatched — Alpine meadows, marked trails, mountain huts, and transport infrastructure (cable cars, trains) make hiking effortless. Iceland\'s trails are wilder but less developed.' },
    ],
  },

  // ── 12. Greece vs Italy ─────────────────────────────────────────────────────
  {
    slug: 'greece-vs-italy',
    a: { destination: 'greece', label: 'Greece' },
    b: { destination: 'amalfi', label: 'Italy' },
    tagline: 'Aegean caldera whites vs Italian dolce vita — the Mediterranean showdown.',
    metaDescription: 'Greece or Italy for a honeymoon? Santorini sunsets vs Amalfi Coast. Islands vs mainland. Food, romance, logistics. Full comparison.',
    verdict: 'Greece is about islands (Santorini, Mykonos, Milos) and caldera romance. Italy is about coastlines (Amalfi, Cinque Terre, Capri) and multi-city variety (Rome + Tuscany + Venice). Greek islands are more focused — single-island, single-resort honeymoons. Italy is more of a grand tour. Greece wins on concentrated romance (sunset cliffside suite, one island, no driving). Italy wins on depth and cultural richness — you can do Rome + Amalfi + Tuscany in 10 days.',
    tldr: {
      forA: 'Greece — for focused single-island romance, Oia sunsets, adults-only caldera suites.',
      forB: 'Italy — for grand-tour variety, Italian cuisine, and multi-city depth.',
      tie: 'Both are at peak demand July-August. Both shoulder seasons (late May, September) are magic.',
    },
    criteria: [
      { label: 'The iconic view',               aWins: true, aDetail: 'Santorini caldera at sunset from Oia — unmatched single-image destination', bDetail: 'Positano from the ferry + Capri Blue Grotto' },
      { label: 'Food',                          aWins: false, aDetail: 'Good — fava, Santorini tomatoes, fresh fish', bDetail: 'Italian cuisine — arguably the world\'s greatest' },
      { label: 'Variety within one trip',       aWins: false, aDetail: 'Island-focused — Santorini, Mykonos, maybe Milos or Paros', bDetail: 'Rome + Amalfi + Capri + Tuscany easily done in 10-14 days' },
      { label: 'Adults-only cliffside',         aWins: true, aDetail: 'Santorini has 20+ adults-only caldera suites', bDetail: 'Handful on Amalfi (Monastero Santa Rosa, Villa Treville)' },
      { label: 'Cultural depth',                aWins: false, aDetail: 'Athens is a day or two, rest is island beach', bDetail: 'Rome + Florence + Venice + smaller cities = endless' },
      { label: 'Beach access',                  aWins: false, aDetail: 'Black sand Kamari, not great swimming', bDetail: 'Variable — Amalfi pebble, Sardegna white sand, Tuscany rocky' },
      { label: 'Best season',                   aWins: 'tie', aDetail: 'Late May, early June, September', bDetail: 'Same' },
      { label: 'Flight access (Europe)',        aWins: true, aDetail: 'Direct to Santorini (JTR) Apr-Oct', bDetail: 'Naples (NAP) direct, or Rome + 2h drive' },
      { label: 'Price (5-star with view)',      aWins: false, aDetail: '$700-3000/night for caldera view suite', bDetail: '$500-2000/night for equivalent' },
      { label: 'Short trip (4-5 nights)',       aWins: true, aDetail: 'Santorini + Mykonos in 5 nights is perfect', bDetail: 'Rome + Amalfi in 5 nights is too rushed' },
      { label: 'Long trip (10+ nights)',        aWins: false, aDetail: '3 islands is maxing it', bDetail: 'Rome + Florence + Amalfi + Capri = perfect 10-14 night grand tour' },
      { label: 'Romance factor',                aWins: 'tie', aDetail: 'Focused cliffside intimacy', bDetail: 'Distributed across villages, harder but richer' },
    ],
    pickA: {
      title: 'Pick Greece if…',
      bullets: [
        'The Santorini sunset photograph is non-negotiable',
        'You want a focused single-island honeymoon (no driving, no planning)',
        'Adults-only cliffside suite with plunge pool is the dream',
        'You have 5-7 nights',
      ],
    },
    pickB: {
      title: 'Pick Italy if…',
      bullets: [
        'Italian food and wine is a major honeymoon priority',
        'You want a grand tour (Rome + Amalfi + Capri + Tuscany)',
        'Cultural depth matters (museums, art, history)',
        'You have 10+ nights',
        'You want variety over focus',
      ],
    },
    faqs: [
      { q: 'Which is less crowded?', a: 'Both are packed July-August. September is the sweet spot — 30% fewer tourists, warm sea, shoulder prices. Italy has more places to escape to; Santorini\'s crowds are more concentrated.' },
      { q: 'Is Italy more expensive?', a: 'Italy is cheaper at the top tier (Positano clifftop $700-1500) than Santorini cliffside ($1000-2500). Greece hotels pay a caldera-view premium.' },
      { q: 'Can we combine them?', a: 'Yes — a 12-14 night trip can do 4 nights Rome + 5 nights Amalfi + 5 nights Santorini via Athens hop. Popular combo for milestone honeymoons.' },
      { q: 'Which has better swimming beaches?', a: 'Neither is a beach-first destination — both are clifftop. For Mediterranean beach honeymoons, consider Sardegna (Italy) or Milos (Greece) instead.' },
    ],
  },

  // ── 13. Mexico vs Caribbean ─────────────────────────────────────────────────
  {
    slug: 'mexico-vs-caribbean',
    a: { destination: 'mexico', label: 'Mexico' },
    b: { destination: 'caribbean', label: 'Caribbean' },
    tagline: 'Tulum cenotes & Baja deserts vs island-hopping paradise — where\'s your easy-flight honeymoon?',
    metaDescription: 'Mexico or Caribbean for a honeymoon? Los Cabos vs Antigua, Tulum vs Bahamas. Flights, cuisine, culture, prices. Expert comparison.',
    verdict: 'Both are easy-flight options from the US east and west coasts. Mexico offers far more variety (desert, jungle, cenotes, cities, beach, food culture) within one country. The Caribbean offers the classic island-hopping honeymoon — each island has a distinct personality (Antigua, Anguilla, Nevis, Barbados). Mexico wins on value, cuisine, and depth. The Caribbean wins on exclusivity, English-speaking ease, and beach quality.',
    tldr: {
      forA: 'Mexico — for variety, cuisine, affordability, and experiences beyond the beach.',
      forB: 'Caribbean — for classic island exclusivity, English-speaking ease, and pure beach vibes.',
      tie: 'Both are ~4h flight from NYC, 5-6h from LA.',
    },
    criteria: [
      { label: 'Variety',                       aWins: true, aDetail: 'Desert Baja + jungle Tulum + colonial San Miguel + city CDMX', bDetail: 'Mostly island-beach variations on a theme' },
      { label: 'Cuisine',                       aWins: true, aDetail: 'World\'s greatest casual food culture — tacos, pozole, moles, mezcal', bDetail: 'Varies by island — Bajan flying fish, jerk chicken, Creole' },
      { label: 'Beach quality',                 aWins: false, aDetail: 'Riviera Maya beach crowded, Pacific Baja rough', bDetail: 'Anguilla, Turks & Caicos, Grenada — some of world\'s best' },
      { label: 'Best hotels',                   aWins: true, aDetail: 'Las Ventanas, Esperanza Auberge, Rosewood San Miguel, Belmond Maroma', bDetail: 'Strong but distributed — Eden Rock St Barths, Jumby Bay, Jade Mountain' },
      { label: 'Price (5-star)',                aWins: true, aDetail: '$500-2500/night', bDetail: '$700-4000/night (St Barts can be $5000+)' },
      { label: 'Flight (NYC)',                  aWins: 'tie', aDetail: '4-5h direct Cancun/Cabo', bDetail: '4-5h direct most major islands' },
      { label: 'Flight (LA)',                   aWins: true, aDetail: '2.5h to Cabo, 5h Cancun', bDetail: '6-8h to most Caribbean' },
      { label: 'Language',                      aWins: false, aDetail: 'Spanish — English less common in rural areas', bDetail: 'English is native in most islands (exc. French/Dutch)' },
      { label: 'Cultural experiences',          aWins: true, aDetail: 'Mayan ruins, colonial cities, Day of the Dead, mezcalerias', bDetail: 'Less — mostly beach + rum distilleries' },
      { label: 'Island-hopping',                aWins: false, aDetail: 'Stay in one area (Baja, Yucatán)', bDetail: 'Easy ferry/flights between islands' },
      { label: 'All-inclusive options',         aWins: true, aDetail: 'Riviera Maya all-inclusive is a global benchmark', bDetail: 'Jamaica, Dominican Republic strong; elsewhere less common' },
      { label: 'Romance factor',                aWins: 'tie', aDetail: 'Tulum jungle cenote spa treatment', bDetail: 'Private beach bungalow on a lesser-known island' },
    ],
    pickA: {
      title: 'Pick Mexico if…',
      bullets: [
        'Cuisine is a major reason for the trip (Mexican food is unmatched casual dining)',
        'You want variety beyond the beach (Mayan ruins, colonial cities, desert)',
        'You\'re coming from the US west coast (2.5h to Cabo)',
        'You want more value (20-30% cheaper at equivalent tier)',
      ],
    },
    pickB: {
      title: 'Pick the Caribbean if…',
      bullets: [
        'Classic island-beach honeymoon is the goal',
        'You want to combine 2 islands (Anguilla + St Barts, Nevis + St Kitts)',
        'English-speaking ease matters',
        'You\'re going to a specific exclusive hideaway (Eden Rock, Jumby Bay, Parrot Cay)',
      ],
    },
    faqs: [
      { q: 'Which is cheaper?', a: 'Mexico, 20-30% on average at equivalent 5-star level. Caribbean hotels pay an "island" premium due to import costs and limited competition.' },
      { q: 'Which is safer?', a: 'The Caribbean has fewer safety concerns for tourists overall. In Mexico, resort areas (Cabo, Riviera Maya, Cancun resorts) are very safe; avoid specific cartel-heavy regions per travel advisories.' },
      { q: 'Which has better all-inclusive?', a: 'Mexico — the Riviera Maya all-inclusive scene (Rosewood, Belmond, Banyan Tree) is arguably the world\'s best for honeymoon-quality all-inclusive. Caribbean all-inclusive is mostly dominated by Sandals.' },
      { q: 'Can I island-hop in the Caribbean?', a: 'Yes — a 10-12 night honeymoon can do 2-3 islands easily. Classic combos: Anguilla + St Barts (ferry), St Lucia + Antigua (short flight), Nevis + St Kitts (water taxi).' },
    ],
  },

  // ── 14. Maldives vs French Polynesia (Tahiti) ───────────────────────────────
  {
    slug: 'maldives-vs-french-polynesia',
    a: { destination: 'maldives', label: 'Maldives' },
    b: { destination: 'french-polynesia', label: 'French Polynesia' },
    tagline: 'Indian Ocean atolls vs South Pacific volcanic islands — the two overwater kingdoms.',
    metaDescription: 'Maldives or French Polynesia for your honeymoon? Atoll resorts vs Bora Bora / Moorea / Tikehau island-hopping. Full comparison.',
    verdict: 'The Maldives is a focused single-country overwater-villa destination — 120+ resorts, pure white atolls, world-class marine life. French Polynesia is a multi-island archipelago where you can combine Bora Bora (lagoon glamour) + Moorea (dramatic peaks) + Tikehau (off-grid atoll) + Tetiaroa (The Brando). The Maldives is more consistent and polished; French Polynesia is more varied and culturally rich. For a single 7-night resort stay, the Maldives. For a 10-14 night island-hopping trip, French Polynesia.',
    tldr: {
      forA: 'Maldives — for a focused 5-7 night overwater villa honeymoon with marine life.',
      forB: 'French Polynesia — for a 10-14 night multi-island trip with varied landscapes.',
      tie: 'Both are premium-priced (expect $1000+/night for genuine 5-star overwater).',
    },
    criteria: [
      { label: 'Overwater villa concentration',  aWins: true, aDetail: '120+ resorts, every tier, constant innovation', bDetail: '~15 overwater resorts, mostly Bora Bora' },
      { label: 'Landscape variety',              aWins: false, aDetail: 'Flat atolls only', bDetail: 'Volcanic peaks (Otemanu) + atolls + lagoons + jungle (Moorea)' },
      { label: 'Cultural richness',              aWins: false, aDetail: 'Minimal — resort bubble', bDetail: 'Strong Polynesian culture, dance, food, markets' },
      { label: 'Flight (from Europe)',           aWins: true, aDetail: '10-11h with stop', bDetail: '22-24h with 2 stops' },
      { label: 'Flight (from US west coast)',    aWins: false, aDetail: '22h+ with stop', bDetail: '8h direct LAX-PPT' },
      { label: 'Island-hopping option',          aWins: false, aDetail: 'Possible via seaplane but same atoll type', bDetail: 'Bora Bora + Moorea + Tikehau + Tetiaroa = genuinely varied' },
      { label: 'Water clarity',                  aWins: true, aDetail: '25-30m visibility', bDetail: '15-20m, still excellent but less' },
      { label: 'Marine life',                    aWins: true, aDetail: 'Whale sharks, manta rays, 100+ coral species', bDetail: 'Reef sharks, rays, superb reefs but less variety' },
      { label: 'Resort brand density',           aWins: true, aDetail: 'Aman, Cheval Blanc, Four Seasons, One&Only, Soneva, Six Senses, Waldorf, Ritz, St Regis', bDetail: 'Four Seasons, St Regis, InterContinental, Sofitel, Hilton — fewer brands' },
      { label: 'Ultra-luxury ceiling',           aWins: 'tie', aDetail: 'Velaa, Cheval Blanc, Nautilus — $3000-10 000/night', bDetail: 'The Brando, Laucala-adjacent — $5000-15 000/night' },
      { label: 'Best season',                    aWins: 'tie', aDetail: 'Nov-Apr (dry)', bDetail: 'May-Oct (dry)' },
      { label: 'Romance factor',                 aWins: 'tie', aDetail: 'Room-based cocoon', bDetail: 'Landscape-based + cultural' },
    ],
    pickA: {
      title: 'Pick the Maldives if…',
      bullets: [
        'You have 5-7 nights for a focused trip',
        'You want the widest choice of resort brands',
        'Marine life and water clarity are priorities',
        'Flying from Europe/Middle East/Asia',
      ],
    },
    pickB: {
      title: 'Pick French Polynesia if…',
      bullets: [
        'You have 10-14 nights for island-hopping',
        'You want dramatic volcanic landscapes (not just flat atolls)',
        'Flying from the US west coast or West Coast Canada',
        'You want Polynesian culture integrated into the honeymoon',
        'The Brando (Tetiaroa) is on the bucket list',
      ],
    },
    faqs: [
      { q: 'Which is more expensive?', a: 'French Polynesia by 20-30% for equivalent tier. Flights to Papeete are more expensive than to Malé from most origins, plus inter-island flights add up. The Brando specifically is among the most expensive hotels on earth ($3000-15 000+/night).' },
      { q: 'Is Bora Bora comparable to the Maldives?', a: 'Similar in the overwater-villa-with-turquoise-lagoon format. Differences: Bora Bora has Mount Otemanu backdrop (Maldives doesn\'t), Maldives has better water clarity and more resort choice.' },
      { q: 'Can I hop islands in the Maldives?', a: 'Possible via seaplane between atolls/resorts but costs $400-700 per person per transfer. French Polynesia\'s inter-island flights (Air Tahiti) are more affordable and routine.' },
      { q: 'Which is more crowded?', a: 'Maldives is more private per-resort (one resort per island), but resorts are larger (100-200 villas). French Polynesia resorts are smaller (40-100 villas) but visible from other resorts in the same lagoon.' },
    ],
  },

  // ── 15. Mexico vs St Lucia (adults-only Caribbean alt) ─────────────────────
  {
    slug: 'mexico-vs-st-lucia',
    a: { destination: 'mexico', label: 'Mexico' },
    b: { destination: 'st-lucia', label: 'St Lucia' },
    tagline: 'Two adults-only honeymoon kingdoms — Riviera Maya cenotes or Pitons jungle?',
    metaDescription: 'Mexico vs St Lucia for a honeymoon: flights, adults-only resorts, scenery, food, all-inclusive value, romance factor. Side-by-side picks.',
    verdict: 'Both are adults-only-resort heavyweights, but the experience is opposite. Mexico (Riviera Maya, Los Cabos) gives you cenotes, Mayan ruins, world-class food, and the broadest luxury choice (Belmond Maroma, One&Only Palmilla, Rosewood). St Lucia gives you the most cinematic landscape in the Caribbean (the Pitons) and intimate plantation-style resorts where the rainforest meets the beach. Mexico wins on variety and price; St Lucia wins on landscape drama and intimacy.',
    tldr: {
      forA: 'Mexico — for adults-only resort variety, food culture, cenotes/ruins, and shorter US flights.',
      forB: 'St Lucia — for the Pitons backdrop, jungle-meets-beach romance, and small-island intimacy.',
      tie: 'Tied on adults-only options and all-inclusive availability.',
    },
    criteria: [
      { label: 'Flight time (from USA)', aWins: true, aDetail: '2-4h direct from most US hubs to CUN/SJD', bDetail: '4-5h direct from NYC/MIA, 1-stop from west coast' },
      { label: 'Flight time (from Europe)', aWins: 'tie', aDetail: '10-12h direct from major hubs', bDetail: '8-9h direct from London (BA, Virgin)' },
      { label: 'The signature view', aWins: false, aDetail: 'Turquoise Caribbean from Riviera Maya, dramatic cliffs in Cabo', bDetail: 'The Pitons — twin volcanic peaks rising straight from the sea, no equivalent on earth' },
      { label: 'Adults-only resort choice', aWins: true, aDetail: 'Dozens: Belmond Maroma, Le Blanc Spa, Excellence, UNICO, Secrets, TRS', bDetail: 'Excellent but smaller: Jade Mountain, Sugar Beach, Ladera, Anse Chastanet, BodyHoliday' },
      { label: 'All-inclusive value', aWins: true, aDetail: 'Outstanding — luxury all-inclusive from $400/night (Excellence, UNICO)', bDetail: 'Premium pricing — Sandals/BodyHoliday from $700-1200/night' },
      { label: 'Beach quality', aWins: true, aDetail: 'Riviera Maya beaches are powder-soft white sand, Cabo more dramatic but rougher water', bDetail: 'Volcanic black-sand beaches at Jalousie, golden at Reduit and Anse Chastanet' },
      { label: 'Off-resort culture', aWins: true, aDetail: 'World-class: Tulum, Chichen Itza, Coba ruins, cenotes, Valladolid, Mexico City food culture', bDetail: 'Charming but limited — Soufrière, Marigot Bay, rainforest hikes, Diamond Falls' },
      { label: 'Food', aWins: true, aDetail: 'World-leading — fresh seafood, mezcal, regional Mexican cuisine, Mexico City accessible', bDetail: 'Caribbean Creole and good but limited variety, mostly resort-bound' },
      { label: 'Honeymoon-suite drama', aWins: false, aDetail: 'Excellent rooms but conventional resort architecture', bDetail: 'Jade Mountain\'s open 4th-wall sanctuaries with Pitons view — possibly the most romantic rooms in the Caribbean' },
      { label: 'Adventure & active', aWins: true, aDetail: 'Cenote diving, Mayan ruins, whale shark snorkelling (Holbox), Sian Kaan biosphere', bDetail: 'Pitons hike, ziplining in the rainforest, sailing to Marigot Bay' },
      { label: 'Crowd factor', aWins: false, aDetail: 'Riviera Maya can feel busy — Tulum overrun, Cancun mass tourism', bDetail: 'Quiet, low-density, no mass-tourism feel' },
      { label: 'Best season', aWins: 'tie', aDetail: 'Nov-Apr (dry, peak), May-Jun (shoulder, value)', bDetail: 'Dec-Apr (peak), May-Jun (shoulder, value)' },
      { label: 'Budget floor (5-star)', aWins: true, aDetail: '$350/night entry adults-only luxury', bDetail: '$600/night entry adults-only luxury' },
    ],
    pickA: {
      title: 'Pick Mexico if…',
      bullets: [
        'You want the broadest choice of adults-only luxury resorts',
        'Food is non-negotiable — Mexican cuisine is the strongest argument here',
        'You want cenotes, Mayan ruins, and proper cultural depth alongside the beach',
        'All-inclusive luxury value matters — Mexico delivers more for less than the Caribbean',
        'You\'re flying from the US or Canada (shorter, cheaper flights)',
      ],
    },
    pickB: {
      title: 'Pick St Lucia if…',
      bullets: [
        'The Pitons view from your suite is non-negotiable (Jade Mountain, Sugar Beach, Ladera)',
        'You want jungle-meets-sea romance — rainforest air, drumming birdlife, volcanic scent',
        'Small-island intimacy beats variety — the whole island is 27 miles long',
        'You prefer fewer crowds — St Lucia has no Tulum/Cancun-style mass tourism',
        'Sandals/all-inclusive Caribbean luxury is the format you want',
      ],
    },
    faqs: [
      { q: 'Which is better for adults-only honeymoon?', a: 'Both are excellent — Mexico has more adults-only properties (dozens vs about 8 in St Lucia), but St Lucia\'s adults-only resorts (Jade Mountain, BodyHoliday, Sandals) are uniformly high-quality. If you want choice, Mexico. If you want the most romantic single property, Jade Mountain in St Lucia.' },
      { q: 'Which is cheaper for a 7-night honeymoon?', a: 'Mexico, by 25-40% for the same tier — flights are cheaper from the US, and adults-only luxury starts around $350/night vs $600/night in St Lucia. The all-inclusive math is also better in Mexico.' },
      { q: 'Is St Lucia or Mexico safer?', a: 'Both are safe at the resort level. St Lucia has lower crime statistics overall and is generally considered the safer of the two. In Mexico, stay at established resorts and avoid driving alone outside Riviera Maya/Los Cabos at night.' },
      { q: 'Can I do overwater bungalows in either?', a: 'Neither has overwater bungalows in the Maldives/Bora Bora sense. For honeymoon "huts" over water, you need the Maldives, Bora Bora, or Fiji. Both Mexico and St Lucia offer beachfront villas and infinity-pool suites instead.' },
      { q: 'Which has better food?', a: 'Mexico, decisively. Mexican cuisine is one of the world\'s great culinary traditions, with regional variety from Yucatecan cochinita pibil to Cabo seafood. St Lucia food is enjoyable Creole but more limited and resort-bound.' },
    ],
  },

  // ── 16. Mexico vs Maldives (luxury beach vs overwater) ─────────────────────
  {
    slug: 'mexico-vs-maldives',
    a: { destination: 'mexico', label: 'Mexico' },
    b: { destination: 'maldives', label: 'Maldives' },
    tagline: 'Mexican luxury beach vs Maldivian overwater villa — two visions of paradise.',
    metaDescription: 'Mexico or Maldives for honeymoon? Compare luxury resorts, overwater villas, food, flights, price and culture. Picks for every type of couple.',
    verdict: 'These don\'t answer the same question. The Maldives is a single experience executed perfectly — overwater villa, no mainland, total immersion in water. Mexico is a portfolio destination — beach, ruins, food, mezcal, urban culture, all reachable. If your honeymoon image is the overwater bungalow with glass floors, the Maldives wins outright. If you want a richer, more varied, more affordable trip with world-class food and culture, Mexico wins. They\'re both right answers to different questions.',
    tldr: {
      forA: 'Mexico — for variety, food, ruins, mezcal, and significantly better value.',
      forB: 'Maldives — for the overwater villa, world-class water clarity, and pure isolation.',
      tie: 'Tied on adults-only resort options and 5-star service quality.',
    },
    criteria: [
      { label: 'Flight time (from USA)', aWins: true, aDetail: '2-4h direct from most US hubs', bDetail: '20h+ via Middle East or Asia, 1-2 stops mandatory' },
      { label: 'Flight time (from Europe)', aWins: 'tie', aDetail: '10-12h direct from major hubs', bDetail: '8-11h direct (BA, Emirates, Qatar) or 1-stop' },
      { label: 'The signature room', aWins: false, aDetail: 'Beachfront villas, infinity pools, no overwater', bDetail: 'Overwater villa with glass floor, lagoon ladder, private deck — the iconic honeymoon room' },
      { label: 'Water clarity', aWins: false, aDetail: 'Caribbean clear (Riviera Maya), Pacific blue (Cabo) — beautiful but not pure glass', bDetail: '25-30m visibility, the clearest tropical water on earth' },
      { label: 'Food', aWins: true, aDetail: 'World-class — one of the great cuisines on earth, mezcal, regional variety', bDetail: 'Resort-only, expensive, mostly international rather than local Maldivian' },
      { label: 'Culture & off-resort', aWins: true, aDetail: 'Mayan ruins, Tulum, Mexico City accessible, mezcal regions, deep history', bDetail: 'Virtually none — resorts are the whole experience, no mainland visit' },
      { label: 'Adults-only choice', aWins: 'tie', aDetail: 'Dozens of adults-only luxury resorts', bDetail: 'Several including Velaa, Cheval Blanc Randheli, COMO Cocoa, OZEN Bolifushi' },
      { label: 'Marine life', aWins: false, aDetail: 'Cenotes, whale sharks (seasonal Holbox), Cozumel reef diving', bDetail: 'World-class: whale sharks year-round in Baa, mantas, 5 turtle species, daily reef life from villa' },
      { label: 'Privacy', aWins: false, aDetail: 'Resort beaches sometimes shared with public access', bDetail: 'Each resort owns its private island — total privacy guaranteed' },
      { label: 'All-inclusive value', aWins: true, aDetail: 'Outstanding — luxury all-inclusive from $400/night', bDetail: 'Available but expensive — $1500-2500/night for full-board luxury' },
      { label: 'Honeymoon photo factor', aWins: false, aDetail: 'Beautiful beaches, infinity pools', bDetail: 'Overwater villa at sunset is the most-photographed honeymoon image on earth' },
      { label: 'Best season', aWins: 'tie', aDetail: 'Nov-Apr (dry season), May-Jun (shoulder)', bDetail: 'Nov-Apr (dry), May-Oct (wet but cheaper, calmer eastern atolls)' },
      { label: 'Budget floor (5-star)', aWins: true, aDetail: '$350/night entry adults-only luxury', bDetail: '$900/night for genuine 5-star overwater' },
      { label: 'Budget ceiling', aWins: false, aDetail: '$3500/night max (One&Only Palmilla, Rosewood)', bDetail: '$15 000+/night possible (Velaa, Soneva Jani, Cheval Blanc)' },
    ],
    pickA: {
      title: 'Pick Mexico if…',
      bullets: [
        'You want a varied honeymoon — beach + ruins + food + mezcal in one trip',
        'Budget matters — Mexico delivers comparable luxury for 40-60% less than the Maldives',
        'You\'re flying from the US (3 hours direct vs 22 hours)',
        'Food culture is non-negotiable — Mexican cuisine is one of the world\'s great cuisines',
        'You\'d be bored on a single private island for 7 nights',
      ],
    },
    pickB: {
      title: 'Pick the Maldives if…',
      bullets: [
        'The overwater villa with glass floor is the dream — there\'s no Mexican equivalent',
        'Water clarity is non-negotiable (the Maldives has the world\'s clearest tropical water)',
        'You want total isolation — your own private island for the week',
        'Marine life is a priority — whale sharks, mantas, daily reef encounters',
        'This is a once-in-a-lifetime trip and you want the most iconic format',
      ],
    },
    faqs: [
      { q: 'Which is more expensive?', a: 'The Maldives, by a significant margin. For 7 nights luxury 5-star including flights, expect $8 000-15 000 for Mexico vs $14 000-30 000 for the Maldives from the US. The flight delta alone is $2 000-4 000 per couple.' },
      { q: 'Can I get overwater villas in Mexico?', a: 'No, not in the Maldivian sense. A few resorts (Banyan Tree Mayakoba) have lagoon-side villas and there are some "stilt suites" in the Caribbean coast, but no genuine overwater bungalows over open ocean. For that, you need the Maldives, Bora Bora, or Fiji.' },
      { q: 'Which has better food?', a: 'Mexico, decisively. Mexican cuisine is among the world\'s most celebrated. Maldivian food is mostly resort international fare — well-executed but rarely a destination in itself.' },
      { q: 'Is the Maldives worth the long flight?', a: 'Yes if the overwater villa or marine life is the dream — there\'s no comparable substitute. If you want general luxury beach honeymoon, Mexico delivers 90% of the Maldives experience at 50% of the cost with 1/5 the flight time.' },
      { q: 'Which is more romantic?', a: 'The Maldives wins on the cinematic single-image (overwater villa, sunset, two rocking glasses on the deck). Mexico wins on the experience as a whole — a honeymoon is 7-10 days, not one photo, and Mexico\'s variety can sustain a longer trip better.' },
    ],
  },

  // ── 17. Mexico vs Bali (luxury beach worldwide alt) ────────────────────────
  {
    slug: 'mexico-vs-bali',
    a: { destination: 'mexico', label: 'Mexico' },
    b: { destination: 'bali', label: 'Bali' },
    tagline: 'Riviera Maya vs Ubud — two cultural-honeymoon heavyweights compared.',
    metaDescription: 'Mexico or Bali for honeymoon: flights, luxury resorts, culture, food, beaches, value. Side-by-side comparison and picks.',
    verdict: 'Both are top-tier cultural honeymoon destinations with strong luxury inventory and deep food cultures, but they\'re mirror opposites by geography. For US couples, Mexico is short-haul and obvious. For Australian, European, and Asian couples, Bali is closer. The experience differs too: Mexico is beach-and-ruins (Mayan civilization, cenotes, Cabo coastline), Bali is jungle-and-temple (rice terraces, water temples, Ubud spiritual vibe). Pick based on geography first, then on whether your honeymoon image is "Caribbean turquoise" or "rice paddies and incense".',
    tldr: {
      forA: 'Mexico — short flight from the Americas, world-class food, beach + culture combo.',
      forB: 'Bali — short flight from Asia/Oceania, jungle and temple romance, exceptional value.',
      tie: 'Tied on luxury hotel quality and cultural depth.',
    },
    criteria: [
      { label: 'Flight time (from USA)', aWins: true, aDetail: '2-4h direct from US hubs', bDetail: '18-22h via Tokyo, Singapore, or Doha' },
      { label: 'Flight time (from Europe)', aWins: 'tie', aDetail: '10-12h direct', bDetail: '14-17h via Singapore/Doha' },
      { label: 'Flight time (from Australia)', aWins: false, aDetail: '20h+ via Los Angeles', bDetail: '5-6h direct from Sydney/Melbourne' },
      { label: 'The signature view', aWins: 'tie', aDetail: 'Turquoise Riviera Maya, dramatic Cabo cliffs', bDetail: 'Tegallalang rice terraces, Mount Agung, beach cliffs of Uluwatu' },
      { label: 'Beach quality', aWins: true, aDetail: 'Caribbean white sand (Riviera Maya), dramatic Pacific (Cabo)', bDetail: 'Mostly volcanic black-sand or coarser; better-known for jungle than beach' },
      { label: 'Cultural depth', aWins: 'tie', aDetail: 'Mayan ruins (Chichen Itza, Coba, Tulum), cenotes, Mexico City', bDetail: 'Hindu temples, water rituals, Ubud arts, Tirta Empul, Tanah Lot' },
      { label: 'Food', aWins: true, aDetail: 'World-class Mexican cuisine, regional variety, mezcal', bDetail: 'Strong Indonesian/Balinese — Nasi Campur, Babi Guling — and excellent international restaurants' },
      { label: 'Adults-only resort choice', aWins: true, aDetail: 'Dozens — Belmond Maroma, Le Blanc, UNICO, Excellence', bDetail: 'Some — COMO Shambhala, AYANA, Six Senses Uluwatu — but fewer dedicated adults-only' },
      { label: 'Spa & wellness', aWins: false, aDetail: 'Excellent resort spas (Rosewood, Banyan Tree)', bDetail: 'World leader — Bali invented modern wellness tourism (COMO Shambhala, Fivelements, Karma)' },
      { label: 'Honeymoon-suite drama', aWins: 'tie', aDetail: 'Beachfront villas with private pools', bDetail: 'Jungle villas in Ubud (Bambu Indah, Capella) and clifftop Uluwatu sanctuaries' },
      { label: 'Adventure & active', aWins: 'tie', aDetail: 'Cenote diving, Mayan ruins, whale sharks, Cozumel diving', bDetail: 'Mount Batur sunrise hike, white-water rafting (Ayung), surf at Uluwatu' },
      { label: 'All-inclusive value', aWins: true, aDetail: 'Best in class — luxury all-inclusive from $350-500/night', bDetail: 'Mostly à la carte; some all-inclusive but not the format here' },
      { label: 'Crowd factor', aWins: 'tie', aDetail: 'Tulum, Cancun crowded; Cabo and Yucatecan interior quieter', bDetail: 'Seminyak, Canggu crowded; Ubud, Sidemen, north Bali quieter' },
      { label: 'Best season', aWins: 'tie', aDetail: 'Nov-Apr (dry, peak), May-Jun (shoulder)', bDetail: 'Apr-Oct (dry), Nov-Mar (wet but green)' },
      { label: 'Budget floor (5-star)', aWins: false, aDetail: '$350/night adults-only luxury', bDetail: '$200-300/night world-class luxury' },
    ],
    pickA: {
      title: 'Pick Mexico if…',
      bullets: [
        'You\'re flying from North America — Bali\'s 22-hour flight is brutal',
        'Beach matters more than jungle — Mexican Caribbean beaches outclass most of Bali',
        'Mexican food and mezcal are non-negotiable',
        'All-inclusive luxury format suits you — Mexico does it best',
        'Mayan ruins and cenote diving sound more compelling than rice terraces',
      ],
    },
    pickB: {
      title: 'Pick Bali if…',
      bullets: [
        'You\'re flying from Asia, Australia, or willing to do the long-haul from Europe',
        'Wellness and spa are the honeymoon\'s organizing principle (COMO Shambhala, Fivelements)',
        'Jungle-villa romance speaks to you more than beach (Ubud, Bambu Indah, Capella)',
        'Hindu culture, temples, and rice terraces are part of the dream',
        'You want world-class luxury for less — $200-300/night gets you 5-star here',
      ],
    },
    faqs: [
      { q: 'Which is cheaper for a honeymoon?', a: 'Bali, on a per-night basis — luxury starts around $200-300/night vs $350-500 in Mexico. But factor in flights: from the US, Mexico is far cheaper end-to-end. From Australia or Asia, Bali wins easily.' },
      { q: 'Which is better for a 10-day cultural honeymoon?', a: 'Both are excellent. Mexico can combine Riviera Maya beach + Yucatan ruins + Mexico City easily. Bali can combine Ubud jungle + Uluwatu cliffs + Seminyak beach. Both reward staying 10+ nights to see the variety.' },
      { q: 'Which is better for adults-only honeymoon?', a: 'Mexico — far more dedicated adults-only luxury inventory. Bali has some excellent options (COMO Shambhala, AYANA villas) but fewer adults-only-only resorts.' },
      { q: 'Is Bali safer than Mexico for honeymoon?', a: 'Both are safe at the resort level. Bali has lower violent-crime statistics. In Mexico, stay at established resorts in Riviera Maya/Los Cabos and avoid solo driving at night. Bali main concerns are scooter accidents and stomach upsets, not crime.' },
      { q: 'Which has the better honeymoon-suite experience?', a: 'Tied — different aesthetics. Mexico delivers beachfront villas with private pools (One&Only Palmilla, Rosewood Mayakoba). Bali delivers jungle villas with private rice-terrace views (Capella Ubud, Bambu Indah, Mandapa). Both are world-class.' },
    ],
  },

  // ── 18. Maldives vs Fiji (overwater showdown) ──────────────────────────────
  {
    slug: 'maldives-vs-fiji',
    a: { destination: 'maldives', label: 'Maldives' },
    b: { destination: 'fiji', label: 'Fiji' },
    tagline: 'Two overwater villa kingdoms — Indian Ocean precision or Pacific warmth?',
    metaDescription: 'Maldives or Fiji for a honeymoon? Compare overwater villas, water clarity, flights, food, culture, price. Picks for every type of couple.',
    verdict: 'Both deliver the iconic overwater bungalow honeymoon, but the soul of each trip is opposite. The Maldives is precise, polished, and quiet — each resort a private island, no host culture, the focus entirely on the room and the water. Fiji is warm, social, and culturally rich — Fijian people are widely considered the most welcoming hosts in tourism, and resorts integrate village visits, kava ceremonies, and meke dance. Maldives wins on water clarity and design execution; Fiji wins on human warmth and cultural depth at a much lower price point.',
    tldr: {
      forA: 'Maldives — for the purest water, design-magazine resorts, and total resort-as-island privacy.',
      forB: 'Fiji — for warm Fijian hospitality, lush volcanic islands, and significantly better value.',
      tie: 'Tied on overwater villa availability and tropical romance.',
    },
    criteria: [
      { label: 'Flight time (from USA)', aWins: false, aDetail: '22h+ via Middle East or Asia, 1-2 stops', bDetail: '11h direct from LAX/SFO to Nadi (Fiji Airways)' },
      { label: 'Flight time (from Europe)', aWins: true, aDetail: '8-11h direct (Emirates, Qatar, BA)', bDetail: '24h+ via Hong Kong or LAX' },
      { label: 'Flight time (from Australia)', aWins: false, aDetail: '14h+ via Singapore', bDetail: '4h direct from Sydney/Brisbane' },
      { label: 'Water clarity', aWins: true, aDetail: '25-30m visibility, the clearest tropical water on earth', bDetail: '15-25m visibility, very good but more lagoon-green' },
      { label: 'Overwater villa choice', aWins: true, aDetail: '40+ resorts with overwater, design innovation (Soneva Jani retractable roof, Velaa underwater cellar)', bDetail: 'Limited — Likuliku is the only true overwater villa resort in Fiji; most resorts are beach villas' },
      { label: 'Cultural depth', aWins: false, aDetail: 'Virtually none — resorts are the world, no village access', bDetail: 'World-class — Fijian village visits, kava ceremonies, meke dance, "Bula!" warmth is real' },
      { label: 'The host welcome', aWins: false, aDetail: 'Polished international hospitality, culturally neutral', bDetail: 'Fijian hospitality is among the warmest in tourism — genuinely friendly people' },
      { label: 'Marine life', aWins: 'tie', aDetail: 'Whale sharks, mantas, 5 turtle species, world-class reefs', bDetail: 'Excellent — soft coral capital of the world (Beqa, Vatu-i-Ra), reef sharks, mantas in Yasawa' },
      { label: 'Privacy', aWins: true, aDetail: 'Each resort owns its private atoll — total isolation', bDetail: 'Most resorts on small islands but visible to other resorts and villages' },
      { label: 'Volcanic backdrop', aWins: false, aDetail: 'Flat atolls, no mountains', bDetail: 'Lush volcanic islands — Yasawa, Mamanuca, Vanua Levu have proper terrain' },
      { label: 'Adults-only choice', aWins: true, aDetail: 'Many — Velaa, Cheval Blanc, COMO Cocoa, OZEN, Adaaran Prestige', bDetail: 'Some — Royal Davui, Tokoriki (adults-only) but fewer dedicated' },
      { label: 'All-inclusive value', aWins: 'tie', aDetail: 'Many full-board resorts at luxury level', bDetail: 'Many full-board resorts at significantly lower price' },
      { label: 'Best season', aWins: 'tie', aDetail: 'Nov-Apr (dry), May-Oct (wet but cheaper)', bDetail: 'May-Oct (dry), Nov-Apr (warm wet)' },
      { label: 'Budget floor (5-star)', aWins: false, aDetail: '$900/night entry overwater luxury', bDetail: '$500-700/night entry luxury (most beach villas, not overwater)' },
      { label: 'Budget ceiling', aWins: 'tie', aDetail: '$15 000+/night possible (Velaa, Soneva Jani)', bDetail: '$10 000+/night possible (Laucala Island, Kokomo Private Island)' },
    ],
    pickA: {
      title: 'Pick the Maldives if…',
      bullets: [
        'The overwater villa is the dream and you want maximum choice (Maldives has 40+ overwater resorts, Fiji has 1 true one)',
        'Water clarity is non-negotiable — Maldives is unbeatable',
        'You want pure private-island isolation with no village or other resorts visible',
        'Flying from Europe, Middle East, or Asia (shorter flight)',
        'Design and architectural innovation matters (Soneva Jani, Velaa, Cheval Blanc)',
      ],
    },
    pickB: {
      title: 'Pick Fiji if…',
      bullets: [
        'You\'re flying from the US west coast or Australia (4-11h vs 22h+)',
        'You want warm cultural connection — Fijian hospitality is famously the warmest in tourism',
        'Volcanic island scenery beats flat atolls for you',
        'Better value — luxury Fiji costs 30-50% less than equivalent Maldives',
        'Soft-coral diving (Fiji is the soft-coral capital of the world)',
      ],
    },
    faqs: [
      { q: 'Does Fiji really have overwater bungalows?', a: 'Only one resort — Likuliku Lagoon Resort in the Mamanucas — has true overwater villas. Other Fiji "luxury" resorts (Laucala, Kokomo, Royal Davui, Tokoriki) are beach villas with direct lagoon access. If overwater specifically is the dream, the Maldives wins decisively.' },
      { q: 'Which is more expensive overall?', a: 'The Maldives, by 30-50% for equivalent tier when including flights from the US. Fiji from LAX is dramatically cheaper than Maldives from anywhere outside Europe/Middle East.' },
      { q: 'Which has better food?', a: 'Both are mostly resort-bound. Maldives food tends to be polished international with seafood emphasis. Fiji food includes more local elements (lovo earth-oven feasts, kokoda raw fish, fresh tropical fruit) and feels more rooted in place.' },
      { q: 'Which is more romantic?', a: 'The Maldives wins on the cinematic single-image (overwater villa, glass-floor sunset). Fiji wins on the multi-day human experience — warmer hosts, more personality, less polished but more memorable. Depends on what "romantic" means to you.' },
      { q: 'Can I combine the two?', a: 'Possible but extreme — they\'re on opposite sides of the world. Most couples doing both would split it across two trips. If you have 3 weeks and serious budget, Australia + Fiji + back is achievable; Maldives + Fiji together is not realistic.' },
    ],
  },

  // ── 19. Bora Bora vs Mauritius (Pacific volcanic vs Indian Ocean alt) ─────
  {
    slug: 'bora-bora-vs-mauritius',
    a: { destination: 'bora-bora', label: 'Bora Bora' },
    b: { destination: 'mauritius', label: 'Mauritius' },
    tagline: 'Mount Otemanu volcanic drama or Mauritian Creole melting pot?',
    metaDescription: 'Bora Bora vs Mauritius for a honeymoon: flights, overwater villas, beaches, culture, food, price. Side-by-side picks.',
    verdict: 'Two volcanic islands with overwater inventory, but they answer completely different questions. Bora Bora is a destination — a single iconic image (Mount Otemanu rising over the lagoon) and a polished French Polynesian welcome. Mauritius is a country — Creole culture, Hindu temples, Chinese pagodas, French colonial architecture, golf, six biospheres, and the most cosmopolitan tropical mix anywhere. Pick Bora Bora for the photograph, the lagoon, and the sheer geographic drama. Pick Mauritius for cultural depth, golf, dining variety, and 30-50% better value.',
    tldr: {
      forA: 'Bora Bora — for Mount Otemanu, French Polynesian polish, the iconic overwater photo.',
      forB: 'Mauritius — for cultural variety, food fusion, golf, and considerably better value.',
      tie: 'Tied on overwater villa availability and lagoon swimming quality.',
    },
    criteria: [
      { label: 'Flight time (from Europe)', aWins: false, aDetail: '20-24h with 2 stops via LAX or Tokyo', bDetail: '11-12h direct from Paris (Air France, Air Mauritius)' },
      { label: 'Flight time (from USA)', aWins: true, aDetail: '8h direct LAX-PPT, then 45min domestic', bDetail: '20h+ via Paris or Dubai, no direct flights' },
      { label: 'The signature view', aWins: true, aDetail: 'Mount Otemanu over the lagoon — the most photographed honeymoon mountain on earth', bDetail: 'Le Morne Brabant peninsula, Black River Gorges, Chamarel coloured earths' },
      { label: 'Overwater villa choice', aWins: true, aDetail: '~15 resorts with overwater (Four Seasons, St Regis, Conrad, InterContinental Thalasso)', bDetail: '~5 resorts with overwater (Constance Le Prince Maurice, St Regis, LUX*)' },
      { label: 'Cultural depth', aWins: false, aDetail: 'French Polynesian culture, tiare flowers, traditional dance — beautiful but limited', bDetail: 'Extraordinary — Creole, Indian, Chinese, French; Hindu temples, mosques, pagodas all in one country' },
      { label: 'Food', aWins: false, aDetail: 'Fresh seafood, French + Polynesian, mostly resort-bound', bDetail: 'World-class fusion — Mauritian Creole, Indian curries, Chinese, French; vibrant local dining' },
      { label: 'Beach quality', aWins: 'tie', aDetail: 'Stunning lagoon beaches at the motu resorts', bDetail: 'White sand around most of the coast — Trou aux Biches, Belle Mare, Le Morne' },
      { label: 'Lagoon and reef', aWins: true, aDetail: 'The whole island is a single lagoon — protected, calm, snorkel-perfect', bDetail: 'Long fringing reef around most of the island — calm lagoons inside' },
      { label: 'Golf', aWins: false, aDetail: 'Limited (Le Méridien course, very small)', bDetail: 'World-class — 8 championship courses, Heritage Golf Club, Tamarina, Anahita IRS' },
      { label: 'Adults-only choice', aWins: true, aDetail: 'Most resorts cater primarily to honeymooners, several couples-focused', bDetail: 'Several adults-only (LUX* Le Morne, Heritage Awali) but most are family-mixed' },
      { label: 'Wildlife / nature', aWins: false, aDetail: 'Lagoon-focused, limited interior', bDetail: 'Black River Gorges National Park, Île aux Aigrettes, dolphin tours, deer ranches' },
      { label: 'Crowd factor', aWins: 'tie', aDetail: 'Resorts spread on motus around the lagoon; main island Vaitape low-key', bDetail: 'Low density coastline, no mass tourism feel even in peak' },
      { label: 'Best season', aWins: 'tie', aDetail: 'May-Oct (dry), Nov-Apr (warm wet)', bDetail: 'May-Dec (dry), Jan-Apr (warm wet, cyclone risk)' },
      { label: 'Budget floor (5-star)', aWins: false, aDetail: '$600/night entry overwater', bDetail: '$400/night entry 5-star, $700+ overwater' },
    ],
    pickA: {
      title: 'Pick Bora Bora if…',
      bullets: [
        'Mount Otemanu over the overwater villa is the dream image',
        'You\'re flying from the US west coast (8h direct vs 20h+ to Mauritius)',
        'You want a smaller, simpler trip — the whole experience is the lagoon',
        'French Polynesian culture and language appeal',
        'You\'re combining with Tahiti, Moorea, or The Brando in one trip',
      ],
    },
    pickB: {
      title: 'Pick Mauritius if…',
      bullets: [
        'You want cultural variety — Creole, Indian, Chinese, French in one country',
        'Food adventure matters — Mauritius has the most diverse cuisine in the Indian Ocean',
        'Golf is part of the honeymoon (8 championship courses)',
        'You\'re flying from Europe (11h direct vs 20-24h to Bora Bora)',
        'Better value — equivalent overwater for 30% less than Bora Bora',
      ],
    },
    faqs: [
      { q: 'Which has more overwater villas?', a: 'Bora Bora — about 15 overwater-villa resorts vs 5 in Mauritius. Bora Bora\'s entire reputation is built on overwater inventory; Mauritius\'s is built on cultural variety and beaches.' },
      { q: 'Which is more expensive overall?', a: 'Bora Bora, by 30-40% for equivalent tier including flights from most origins. Bora Bora\'s flights are uniquely expensive (almost no direct route except LAX); Mauritius has many direct flights from Europe and the Middle East.' },
      { q: 'Which is better for a 10-day honeymoon?', a: 'Mauritius can sustain 10 days easily — beach + golf + cultural day-trips + Black River Gorges + Île aux Cerfs. Bora Bora is ideal for 5-7 days; longer often combined with Moorea or Tahiti.' },
      { q: 'Is Mauritius really comparable to Bora Bora?', a: 'On overwater specifically, no — Bora Bora has more inventory and more iconic imagery. On overall honeymoon experience including off-resort exploration, Mauritius is arguably richer.' },
      { q: 'Which has better food?', a: 'Mauritius, by a significant margin. Mauritian Creole + Indian + Chinese fusion is one of the world\'s great melting-pot cuisines. Bora Bora food is fine French Polynesian but mostly resort-bound and uniform.' },
    ],
  },

  // ── 20. Mauritius vs Seychelles (Indian Ocean overwater alt) ───────────────
  {
    slug: 'mauritius-vs-seychelles',
    a: { destination: 'mauritius', label: 'Mauritius' },
    b: { destination: 'seychelles', label: 'Seychelles' },
    tagline: 'Two Indian Ocean honeymoon staples — variety and value or pure granite-and-sand drama?',
    metaDescription: 'Mauritius vs Seychelles for a honeymoon: flights, beaches, overwater, culture, value. Side-by-side comparison and picks.',
    verdict: 'Both Indian Ocean island nations, both world-class honeymoon destinations, but very different propositions. Mauritius is a varied, cosmopolitan, larger country with cultural depth, golf, food fusion, and excellent value. Seychelles is smaller in scope but unmatched in raw beauty — the granite-boulder beaches of La Digue and Praslin (Anse Source d\'Argent, Anse Lazio) are arguably the most beautiful tropical beaches on earth, period. Mauritius wins on variety and value; Seychelles wins on the photograph and the sheer wow factor.',
    tldr: {
      forA: 'Mauritius — for cultural variety, food, golf, and 30-40% better value.',
      forB: 'Seychelles — for the most beautiful beaches on earth and pure tropical drama.',
      tie: 'Tied on luxury hotel quality and adults-only resort options.',
    },
    criteria: [
      { label: 'Flight time (from Europe)', aWins: 'tie', aDetail: '11-12h direct from Paris/London', bDetail: '10-11h direct from London (BA) or via Dubai/Doha' },
      { label: 'Flight time (from USA)', aWins: 'tie', aDetail: '20h+ via Paris or Dubai', bDetail: '20h+ via Doha or Dubai' },
      { label: 'The signature beach', aWins: false, aDetail: 'Trou aux Biches, Belle Mare — beautiful white sand', bDetail: 'Anse Source d\'Argent (La Digue), Anse Lazio (Praslin) — granite boulders + powder sand, often on "world\'s most beautiful beach" lists' },
      { label: 'Cultural depth', aWins: true, aDetail: 'Creole, Indian, Chinese, French — extraordinary diversity, Hindu temples, mosques, pagodas', bDetail: 'Creole-French-African mix, less variety than Mauritius' },
      { label: 'Food', aWins: true, aDetail: 'World-class fusion — among the best in the Indian Ocean', bDetail: 'Good Creole cuisine, fresh seafood, but more limited variety' },
      { label: 'Overwater villa', aWins: true, aDetail: '~5 resorts with overwater (Constance Le Prince Maurice, St Regis, LUX*)', bDetail: 'No overwater villas in Seychelles — beachfront and hillside only' },
      { label: 'Multi-island honeymoon', aWins: false, aDetail: 'Single main island, day trips to Île aux Cerfs', bDetail: 'Three main islands (Mahé, Praslin, La Digue) — natural island-hopping itinerary' },
      { label: 'Granite-boulder beaches', aWins: false, aDetail: 'None — flat coral coastline', bDetail: 'Iconic — granite boulders are the visual signature of the country' },
      { label: 'Snorkel / dive', aWins: 'tie', aDetail: 'Decent reef life, blue marlin fishing, mostly lagoon', bDetail: 'Excellent — Aldabra atoll (UNESCO), pristine outer islands, granite reefs' },
      { label: 'Adults-only choice', aWins: 'tie', aDetail: 'Several (LUX* Le Morne, Heritage Awali, Constance adults-only)', bDetail: 'Several (Six Senses Zil Pasyon, North Island, Fregate, Anantara Maia)' },
      { label: 'Golf', aWins: true, aDetail: 'World-class — 8 championship courses', bDetail: 'Limited (Constance Lemuria course, that\'s it)' },
      { label: 'Wildlife / nature', aWins: false, aDetail: 'Black River Gorges, Île aux Aigrettes, deer ranches', bDetail: 'Aldabra giant tortoises, coco de mer in the Vallée de Mai (UNESCO), 13 endemic bird species' },
      { label: 'Best season', aWins: 'tie', aDetail: 'May-Dec (dry, peak), Jan-Apr (warm wet)', bDetail: 'Apr-Oct (dry), Nov-Mar (wet)' },
      { label: 'Budget floor (5-star)', aWins: true, aDetail: '$400/night entry 5-star', bDetail: '$700-900/night entry 5-star (Seychelles is structurally more expensive)' },
      { label: 'Budget ceiling', aWins: false, aDetail: '$2 500/night max (Constance Le Prince Maurice, One&Only Le Saint Géran)', bDetail: '$10 000+/night possible (North Island, Fregate Private Island, Six Senses Zil Pasyon)' },
    ],
    pickA: {
      title: 'Pick Mauritius if…',
      bullets: [
        'Cultural variety, food fusion, and golf matter',
        'Better value is a priority — 30-40% cheaper than Seychelles',
        'Overwater villa is on the list (Seychelles has none)',
        'You want a longer trip with more variety (10-14 days)',
        'You\'re flying from Europe and want the most direct route',
      ],
    },
    pickB: {
      title: 'Pick Seychelles if…',
      bullets: [
        'The granite-boulder beaches are the dream image (Anse Source d\'Argent, Anse Lazio)',
        'You want a multi-island honeymoon (Mahé + Praslin + La Digue is the classic itinerary)',
        'Pristine pure-luxury private islands (North Island, Fregate, Six Senses Zil Pasyon) are the budget level',
        'Wildlife matters — giant tortoises, endemic birds, UNESCO Vallée de Mai',
        'You want the most photogenic Indian Ocean honeymoon possible',
      ],
    },
    faqs: [
      { q: 'Which has more beautiful beaches?', a: 'Seychelles, by most rankings — the granite boulders combined with powder sand and turquoise water create a visually unique signature that Mauritius (flat coral coastline) cannot match. Both countries have extraordinarily beautiful coastlines; Seychelles wins on the photograph.' },
      { q: 'Which is more expensive?', a: 'Seychelles, by 30-40%. The country has structurally higher hotel pricing — fewer islands developed, smaller inventory, much of it ultra-luxury. Mauritius offers genuine 5-star luxury from $400/night, Seychelles starts around $700-900.' },
      { q: 'Can I do an overwater villa in Seychelles?', a: 'No — Seychelles has no overwater bungalows. Granite-island bathymetry doesn\'t suit overwater construction. For overwater honeymoon, you need Maldives, Bora Bora, Fiji, or a few Mauritius resorts.' },
      { q: 'Which is better for a multi-island honeymoon?', a: 'Seychelles, decisively. The Mahé + Praslin + La Digue trio is the natural Seychelles itinerary, with short ferry hops between them. Mauritius is a single main island; multi-island isn\'t the format.' },
      { q: 'Which has better food?', a: 'Mauritius, decisively. Mauritian fusion of Creole + Indian + Chinese + French is one of the world\'s great melting-pot cuisines. Seychelles food is fresh and pleasant Creole but more limited.' },
    ],
  },

  // ── 21. Kenya vs South Africa (safari + variety) ───────────────────────────
  {
    slug: 'kenya-vs-south-africa',
    a: { destination: 'kenya', label: 'Kenya' },
    b: { destination: 'south-africa', label: 'South Africa' },
    tagline: 'Maasai Mara migration drama vs South African safari + wine + coast trifecta.',
    metaDescription: 'Kenya vs South Africa for honeymoon safari: wildlife, lodges, multi-stop trips, food, value. Side-by-side picks.',
    verdict: 'Kenya is a pure safari country — the Maasai Mara hosts the world\'s greatest wildlife spectacle (the Great Migration), and Kenyan camp culture is the original safari romance. South Africa is a portfolio: world-class safari (Sabi Sand, Kruger) plus Cape Town, the Winelands, the Garden Route, and Camps Bay beaches — a 14-day honeymoon can feel like three trips in one. Pick Kenya for migration purity and pioneer-camp romance. Pick South Africa for variety and infrastructure.',
    tldr: {
      forA: 'Kenya — for the Great Migration and pure-safari honeymoon.',
      forB: 'South Africa — for safari + Cape Town + wine + coast in one trip.',
      tie: 'Tied on lodge quality at the top end (Angama, Bateleur vs Royal Malewane, Singita).',
    },
    criteria: [
      { label: 'Flight time (from Europe)', aWins: 'tie', aDetail: '8h direct to Nairobi (BA, KQ, KLM)', bDetail: '11h direct to Cape Town/Johannesburg' },
      { label: 'Flight time (from USA)', aWins: 'tie', aDetail: '15-18h via London/Doha', bDetail: '15h direct (NYC-JNB on SAA, Delta) or 1-stop' },
      { label: 'Wildlife spectacle', aWins: true, aDetail: 'The Great Migration (Jul-Oct in the Mara) is the world\'s greatest wildlife event', bDetail: 'Big Five excellent year-round in Sabi Sand; no migration equivalent' },
      { label: 'Big Five sightings', aWins: 'tie', aDetail: 'Excellent — Mara, Laikipia, Tsavo all deliver', bDetail: 'World-class — Sabi Sand has highest leopard density on earth' },
      { label: 'Lodge variety', aWins: 'tie', aDetail: 'Tented camps with safari romance — Angama Mara, Bateleur, Cottars 1920s', bDetail: 'Lodge-heavy luxury — Royal Malewane, Singita, Cheetah Plains' },
      { label: 'Off-safari extension', aWins: false, aDetail: 'Diani Beach, Lamu, Mount Kenya — all decent', bDetail: 'World-class — Cape Town, Winelands (Stellenbosch, Franschhoek), Garden Route, Cape Point' },
      { label: 'Food and wine', aWins: false, aDetail: 'Lodge food is excellent, no wine country', bDetail: 'World-leading — Stellenbosch wines, Franschhoek dining, Cape Town restaurant scene' },
      { label: 'Beach options', aWins: 'tie', aDetail: 'Diani, Watamu — beautiful but limited resort inventory', bDetail: 'Camps Bay, Plettenberg Bay — gorgeous coast, more variety' },
      { label: 'Honeymoon mood', aWins: true, aDetail: 'Pure-safari romance — tents, fires, stars, sundowners', bDetail: 'Mixed — safari + wine + city + coast all in one trip' },
      { label: 'Self-drive feasibility', aWins: false, aDetail: 'Limited — most safaris are guided/flown', bDetail: 'Excellent — Garden Route is a classic self-drive' },
      { label: 'Best season', aWins: 'tie', aDetail: 'Jul-Oct (migration), Jan-Feb (calving in Tanzania, dry in Kenya)', bDetail: 'May-Sep (dry safari), Oct-Apr (Cape Town summer, peak Dec-Feb)' },
      { label: 'Budget floor (luxury safari)', aWins: false, aDetail: '$800-1200/night per couple full-board safari', bDetail: '$700-1000/night per couple full-board safari (similar) plus much cheaper Cape Town' },
      { label: 'Length of trip', aWins: false, aDetail: '7-10 days ideal — pure safari', bDetail: '12-16 days reward — safari + Cape Town + wine + Garden Route' },
    ],
    pickA: {
      title: 'Pick Kenya if…',
      bullets: [
        'The Great Migration is on the bucket list (Jul-Oct in the Mara)',
        'You want pure safari romance — tents, fires, no city interruption',
        'The Maasai cultural connection matters',
        'You\'re combining with Tanzania (Serengeti, Zanzibar)',
        'You have 7-10 days, not 14+',
      ],
    },
    pickB: {
      title: 'Pick South Africa if…',
      bullets: [
        'You want safari + Cape Town + wine + coast in one trip',
        'World-class wine country (Stellenbosch, Franschhoek) is part of the dream',
        'You have 12+ days for a full honeymoon',
        'Self-drive Garden Route appeals',
        'Sabi Sand leopard sightings are the priority',
      ],
    },
    faqs: [
      { q: 'Which is better for a first-time safari?', a: 'Both are excellent. Kenya feels more "classic safari" with tented camps and migration drama. South Africa\'s Sabi Sand has the highest concentration of luxury lodges and the most reliable Big Five sightings, with shorter game drives and more comfort. Sabi Sand for first-timers, Mara for experienced safari travellers.' },
      { q: 'Which is more expensive?', a: 'Per-night safari pricing is similar at the luxury level ($700-1200/night per couple). South Africa is cheaper overall because Cape Town and the Winelands are dramatically more affordable than safari pricing — Kenya beach extensions cost similar to safari.' },
      { q: 'Can I combine both?', a: 'Possible for 14-21 day trips — fly Nairobi → Mara → Cape Town. Adds a transit day but doable. Most couples pick one or the other for a 10-12 day honeymoon.' },
      { q: 'Which has better wildlife?', a: 'Kenya during migration (Jul-Oct in the Mara) — no equivalent on earth for sheer wildlife density. South Africa year-round has more reliable Big Five sightings, especially leopards. Migration trumps everything for raw spectacle, but South Africa is more consistent.' },
      { q: 'Is it safe to honeymoon in either?', a: 'Both are safe at the lodge level. South Africa has higher urban-crime statistics — stick to safe areas in Cape Town and Johannesburg. Kenya tourism areas are well-managed; Nairobi has typical big-city precautions but the Mara is extraordinarily safe.' },
    ],
  },

  // ── 22. Tanzania vs Botswana (safari premium showdown) ─────────────────────
  {
    slug: 'tanzania-vs-botswana',
    a: { destination: 'tanzania', label: 'Tanzania' },
    b: { destination: 'botswana', label: 'Botswana' },
    tagline: 'Serengeti drama or Okavango Delta exclusivity — premium safari head-to-head.',
    metaDescription: 'Tanzania vs Botswana for honeymoon safari: Serengeti vs Okavango, lodges, value, wildlife, scenery. Side-by-side picks.',
    verdict: 'Both deliver world-class safari, but the format is opposite. Tanzania (Serengeti, Ngorongoro) is large-scale spectacle — vast plains, the Great Migration, Mount Kilimanjaro on the horizon. Botswana (Okavango Delta) is intimate exclusivity — the world\'s largest inland delta is a UNESCO wonder where you safari by mokoro canoe through papyrus channels and there are 5x fewer tourists per square mile than the Serengeti. Tanzania wins on landscape and migration; Botswana wins on exclusivity and water-based safari.',
    tldr: {
      forA: 'Tanzania — for Serengeti scale, the Great Migration, and Zanzibar beach extension.',
      forB: 'Botswana — for Okavango Delta water-safari and elite low-density exclusivity.',
      tie: 'Tied on Big Five quality at the top lodges.',
    },
    criteria: [
      { label: 'Flight time (from Europe)', aWins: 'tie', aDetail: '9-10h to Kilimanjaro/Dar (1-stop usual)', bDetail: '11-13h to Maun (via Johannesburg)' },
      { label: 'The signature safari', aWins: 'tie', aDetail: 'Vast Serengeti plains, Ngorongoro Crater, Migration', bDetail: 'Okavango Delta — 18 000 km² inland delta safari by mokoro canoe and 4x4' },
      { label: 'Density of tourists', aWins: false, aDetail: 'Serengeti can feel busy in central Seronera during peak migration', bDetail: 'Botswana has near-zero mass tourism — most camps have 8-12 tents only' },
      { label: 'Water-based safari', aWins: false, aDetail: 'Vehicle-based; some boat in Selous (now Nyerere)', bDetail: 'Yes — mokoro canoe through Delta channels is unique to Botswana' },
      { label: 'Big Five quality', aWins: 'tie', aDetail: 'Excellent — Migration adds wildebeest spectacle', bDetail: 'Excellent — Okavango leopard density and Linyanti elephant herds world-class' },
      { label: 'Beach extension', aWins: true, aDetail: 'Zanzibar — world-class spice-island beach 30min flight from safari', bDetail: 'No — Botswana is landlocked; combine with Cape Town or Mauritius' },
      { label: 'Lodge luxury at the top', aWins: 'tie', aDetail: 'Singita Grumeti, &Beyond, Asilia, Roving Bushtops', bDetail: 'Wilderness Mombo, Sandibe, Vumbura, Duba Plains, Belmond Eagle Island' },
      { label: 'Mountain backdrop', aWins: true, aDetail: 'Kilimanjaro on the horizon from northern circuits, Ol Doinyo Lengai', bDetail: 'Flat delta and Kalahari — no mountains' },
      { label: 'Honeymoon mood', aWins: 'tie', aDetail: 'Big-sky scale, fires, sundowners on plains', bDetail: 'Elite exclusivity, water-based silence, fewer guests' },
      { label: 'Cultural depth', aWins: true, aDetail: 'Maasai cultural visits, Zanzibar Stone Town', bDetail: 'San bushmen tracking experiences in some camps, otherwise limited' },
      { label: 'Best season', aWins: 'tie', aDetail: 'Jun-Oct (dry, migration), Jan-Mar (calving season)', bDetail: 'May-Oct (delta water highest, dry land safari) — flooded delta is the magic' },
      { label: 'Budget floor (luxury)', aWins: true, aDetail: '$700-1100/night per couple full-board safari', bDetail: '$1500-2500/night per couple full-board (Botswana is structurally pricey by govt low-impact policy)' },
      { label: 'Budget ceiling', aWins: 'tie', aDetail: '$3000-6000/night (Singita Grumeti, Roving Bushtops)', bDetail: '$3000-6000/night (Mombo, Duba Plains, Belmond Eagle Island)' },
    ],
    pickA: {
      title: 'Pick Tanzania if…',
      bullets: [
        'The Great Migration (Jun-Oct, calving Jan-Mar) is the dream',
        'You want safari + Zanzibar beach in one trip',
        'Better value matters — equivalent luxury 30-50% cheaper than Botswana',
        'Kilimanjaro climb or Ngorongoro Crater is on the list',
        'You like big-scale plains and dramatic landscapes',
      ],
    },
    pickB: {
      title: 'Pick Botswana if…',
      bullets: [
        'You want maximum exclusivity — fewer tourists per km² than anywhere in Africa',
        'Mokoro canoe safari through the Okavango Delta is the unique experience',
        'Top-tier lodge experiences (Mombo, Duba Plains) are on the bucket list',
        'You\'re combining with Cape Town or Victoria Falls',
        'Money is not the constraint — Botswana is structurally premium-priced by design',
      ],
    },
    faqs: [
      { q: 'Why is Botswana so expensive?', a: 'Government policy. Botswana intentionally limits tourism volume through high concessions and bed-tax fees to protect wildlife and habitats — the result is fewer, higher-priced lodges with exclusive access. You\'re paying for low-density exclusivity.' },
      { q: 'Which has better wildlife viewing?', a: 'Both are world-class. Tanzania\'s Serengeti has the migration spectacle and sheer numbers. Botswana\'s Okavango has higher predator density per area and the unique water-safari format. Different formats; both excellent.' },
      { q: 'Can I combine them?', a: 'Yes — Tanzania → Botswana via Johannesburg is achievable in 14-18 days. Most couples doing high-end Africa do safari + beach (Zanzibar from Tanzania) or safari + city (Cape Town from Botswana) instead.' },
      { q: 'Which is better for a first safari?', a: 'Tanzania — better value, easier to combine with beach (Zanzibar), and the Migration is unforgettable. Botswana is more for second-trip safari travellers who want premium exclusivity.' },
      { q: 'Is the Okavango really worth the price?', a: 'For couples who value exclusivity and unique format (water + land safari, very few guests), yes. For couples mainly wanting to see the Big Five, Tanzania delivers comparable wildlife at much lower cost.' },
    ],
  },

  // ── 23. Greece vs Croatia (Mediterranean honeymoon alt) ────────────────────
  {
    slug: 'greece-vs-croatia',
    a: { destination: 'greece', label: 'Greece' },
    b: { destination: 'croatia', label: 'Croatia' },
    tagline: 'Cycladic whitewash vs Adriatic stone — the Mediterranean honeymoon duel.',
    metaDescription: 'Greece vs Croatia for honeymoon: islands, food, sailing, beaches, value. Side-by-side picks for every couple.',
    verdict: 'Both are top-tier Mediterranean honeymoon destinations with strong island-hopping appeal, but the soul of each trip is different. Greece is theatrical — Cycladic whitewashed villages tumbling into impossible blue (Santorini, Mykonos, Milos), with the deepest food culture in the Med. Croatia is stone — Dalmatian medieval cities (Dubrovnik, Hvar, Korčula), pine forests, crystal-clear water, and a more polished, Italian-adjacent feel. Greece wins on visual drama and food; Croatia wins on water clarity and architectural sophistication.',
    tldr: {
      forA: 'Greece — for Cycladic drama, food culture, and sunset-over-Caldera romance.',
      forB: 'Croatia — for medieval-stone islands, sailing, and clearer Adriatic water.',
      tie: 'Tied on island-hopping ferry infrastructure and overall honeymoon-friendliness.',
    },
    criteria: [
      { label: 'Flight time (from Europe)', aWins: 'tie', aDetail: '3-4h to Athens/Santorini direct', bDetail: '2-3h to Split/Dubrovnik direct' },
      { label: 'Flight time (from USA)', aWins: 'tie', aDetail: '9-11h direct (NYC) or via Frankfurt/Athens', bDetail: '10-12h via Frankfurt/Munich/Vienna (no direct usually)' },
      { label: 'The signature view', aWins: true, aDetail: 'Santorini caldera at sunset — possibly the most photographed honeymoon image in Europe', bDetail: 'Dubrovnik old town walls + Adriatic + Lokrum island view' },
      { label: 'Water clarity', aWins: false, aDetail: 'Aegean — clear, bright blue, sometimes affected by sea grass', bDetail: 'Adriatic — among the clearest in the Mediterranean, glass-like in many bays' },
      { label: 'Beach quality', aWins: false, aDetail: 'Mostly volcanic black/red (Santorini), few sand beaches in Cyclades', bDetail: 'Pebble and rocky-cove beaches — generally cleaner, clearer water' },
      { label: 'Food culture', aWins: true, aDetail: 'World-class — fresh fish, octopus, Greek salad, mezze, the original Mediterranean diet', bDetail: 'Excellent — Italian-influenced, fresh seafood, truffles in Istria, Pelješac wines' },
      { label: 'Wine', aWins: 'tie', aDetail: 'Assyrtiko (Santorini) is one of Europe\'s great wines, Nemea reds', bDetail: 'Plavac Mali (Pelješac), Malvazija (Istria) — emerging wine scene' },
      { label: 'Island-hopping ease', aWins: 'tie', aDetail: 'Excellent — fast ferries between all Cyclades', bDetail: 'Excellent — fast ferries between all Dalmatian islands' },
      { label: 'Cultural depth', aWins: true, aDetail: 'Acropolis, Delphi, Knossos, Olympia — the foundations of Western civilization', bDetail: 'Diocletian\'s Palace (Split), Dubrovnik walls, Plitvice — substantial but less foundational' },
      { label: 'Crowd factor', aWins: false, aDetail: 'Santorini and Mykonos can be brutal in peak — Oia sunset is a mob scene', bDetail: 'Dubrovnik old town is crowded but most islands feel calmer than Cyclades equivalents' },
      { label: 'Sailing yacht charter', aWins: 'tie', aDetail: 'Excellent — Cyclades and Dodecanese routes', bDetail: 'World-class — Croatia is among the top sailing destinations on earth' },
      { label: 'Adults-only / boutique hotels', aWins: 'tie', aDetail: 'Many adults-only luxury (Canaves Oia, Andronis, Astra Suites)', bDetail: 'Some adults-only and many boutique (Hotel Excelsior, Villa Dubrovnik, Lopud 1483)' },
      { label: 'Best season', aWins: 'tie', aDetail: 'Jun-Sep peak, May-Jun and Sep-Oct shoulder', bDetail: 'Jun-Sep peak, May-Jun and Sep-Oct shoulder' },
      { label: 'Budget floor (5-star)', aWins: false, aDetail: '$500-800/night peak Santorini', bDetail: '$400-600/night peak Dubrovnik/Hvar' },
    ],
    pickA: {
      title: 'Pick Greece if…',
      bullets: [
        'Santorini caldera sunset is the dream image',
        'Food culture matters more than water clarity',
        'You want classical antiquity (Acropolis, Delphi) on the trip',
        'Mykonos nightlife or hidden Cyclades (Milos, Folegandros) appeal',
        'You\'ve never been to Greece before — first-trip Greece is unforgettable',
      ],
    },
    pickB: {
      title: 'Pick Croatia if…',
      bullets: [
        'You want the clearest Mediterranean water — Adriatic wins decisively',
        'Sailing yacht charter is part of the honeymoon plan',
        'Medieval stone-architecture (Dubrovnik, Hvar, Korčula) over Cycladic whitewash',
        'Better value matters — Croatia is generally 20-30% cheaper than Greece equivalent',
        'You\'ve already done Greece and want a fresh Mediterranean',
      ],
    },
    faqs: [
      { q: 'Which has better beaches?', a: 'Croatia, in terms of water clarity and bay quality. Greek islands have more iconic beaches by reputation (Elafonisi, Balos, Navagio) but the Cyclades themselves have limited sand. Croatia\'s pebble coves are cleaner and clearer.' },
      { q: 'Which is more romantic?', a: 'Both intensely so, in different registers. Greece is theatrical romance — sunset on Santorini, dinner overlooking the caldera. Croatia is sophisticated romance — candlelit dinner in Dubrovnik old town, sailing into a hidden cove on Vis. Different aesthetics.' },
      { q: 'Which is cheaper?', a: 'Croatia, by 20-30% for equivalent tier. Santorini specifically is among the most expensive Mediterranean destinations in summer. Croatian Dalmatia (Hvar, Vis, Korčula) offers comparable boutique luxury at lower cost.' },
      { q: 'Can I combine the two?', a: 'Possible for 12-15 days — fly into Athens → Santorini/Milos → Athens → Split → Dubrovnik → home. Adds 2 transit days. Most couples pick one for an 8-10 day trip.' },
      { q: 'Which has better food?', a: 'Greece, decisively, for traditional cuisine — the Mediterranean diet originated here, and tavernas are exceptional. Croatia food is excellent (Istrian truffles, Dalmatian seafood) but more Italian-influenced and less distinctively local.' },
    ],
  },

  // ── 24. Portugal vs Croatia (Europe coastal alt) ───────────────────────────
  {
    slug: 'portugal-vs-croatia',
    a: { destination: 'portugal', label: 'Portugal' },
    b: { destination: 'croatia', label: 'Croatia' },
    tagline: 'Atlantic Algarve charm vs Adriatic stone-island elegance.',
    metaDescription: 'Portugal vs Croatia for honeymoon: coast, food, wine, value. Side-by-side comparison and picks.',
    verdict: 'Two underrated European honeymoon destinations both delivering coastal romance at relative value, but pointing in opposite directions. Portugal is Atlantic — Lisbon-Porto-Algarve, surf coast, port wine country, and the Comporta minimalism that\'s become a quiet luxury favourite. Croatia is Adriatic — medieval-stone Dalmatian islands, the world\'s clearest Mediterranean water, Italian-adjacent sophistication. Portugal wins on cultural variety (city + wine + coast) and food. Croatia wins on water and island-hopping romance.',
    tldr: {
      forA: 'Portugal — for Lisbon-Porto-Algarve variety, port wine, and Atlantic surf-coast cool.',
      forB: 'Croatia — for Adriatic island-hopping and medieval stone romance.',
      tie: 'Tied on overall value vs Greece/Italy.',
    },
    criteria: [
      { label: 'Flight time (from Europe)', aWins: 'tie', aDetail: '2-3h to Lisbon/Faro from most hubs', bDetail: '2-3h to Split/Dubrovnik from most hubs' },
      { label: 'Flight time (from USA)', aWins: true, aDetail: '7-8h direct (NYC, EWR, Boston, Miami)', bDetail: '10-12h via Frankfurt/Munich/Vienna (no direct usually)' },
      { label: 'Coast format', aWins: 'tie', aDetail: 'Atlantic coast — surf, dramatic cliffs, wide beaches (Algarve, Comporta)', bDetail: 'Adriatic islands and bays — calmer, clearer, more sailing' },
      { label: 'Water clarity', aWins: false, aDetail: 'Atlantic, cooler, less clear than Mediterranean', bDetail: 'Adriatic — among the clearest in the Mediterranean' },
      { label: 'Beach quality', aWins: 'tie', aDetail: 'Wide sand beaches in Algarve and Comporta', bDetail: 'Pebble and rocky-cove beaches — fewer sand beaches' },
      { label: 'Food and wine', aWins: true, aDetail: 'World-class — port wine, Douro Valley, fresh seafood, pastéis de nata, Lisbon dining', bDetail: 'Excellent — Istrian truffles, Pelješac wines, Dalmatian seafood' },
      { label: 'City + coast combo', aWins: true, aDetail: 'Lisbon-Porto-Algarve trifecta is the classic Portugal honeymoon route', bDetail: 'Split-Dubrovnik-islands works but coast-focused' },
      { label: 'Wine country', aWins: true, aDetail: 'Douro Valley is among Europe\'s most beautiful wine regions', bDetail: 'Pelješac and Istria are emerging but smaller-scale' },
      { label: 'Surf culture', aWins: true, aDetail: 'World-class — Nazaré (largest surf wave on earth), Ericeira, Algarve breaks', bDetail: 'Limited — Adriatic is calm by nature' },
      { label: 'Sailing yacht charter', aWins: false, aDetail: 'Limited — Atlantic is rougher, fewer sailing routes', bDetail: 'World-class — Croatia is one of the top sailing destinations on earth' },
      { label: 'Boutique hotel scene', aWins: true, aDetail: 'Outstanding — Six Senses Douro Valley, Vermelho Comporta, Sublime Comporta, Bela Vista Algarve, Octant Group', bDetail: 'Excellent — Hotel Excelsior, Villa Dubrovnik, Lopud 1483, Maslina Resort Hvar' },
      { label: 'Crowd factor', aWins: 'tie', aDetail: 'Lisbon and Algarve busy summer; Comporta and Alentejo low-density', bDetail: 'Dubrovnik crowded, most islands calmer' },
      { label: 'Best season', aWins: 'tie', aDetail: 'May-Oct (Algarve), all year for cities', bDetail: 'May-Oct (coast), all year for cities' },
      { label: 'Budget floor (5-star)', aWins: 'tie', aDetail: '$300-500/night for 5-star', bDetail: '$400-600/night for 5-star (peak)' },
    ],
    pickA: {
      title: 'Pick Portugal if…',
      bullets: [
        'You want city + wine + coast variety — Lisbon, Douro, Algarve in one trip',
        'Port wine and Douro Valley are part of the dream',
        'Surf culture or Comporta minimalism appeals',
        'You\'re flying from the US (direct from NYC/Boston/Miami)',
        'You want a more varied trip than a pure Mediterranean coast',
      ],
    },
    pickB: {
      title: 'Pick Croatia if…',
      bullets: [
        'Adriatic island-hopping is the dream (Hvar, Vis, Korčula, Mljet)',
        'Sailing yacht charter is on the agenda',
        'You want clearer water and calmer swimming',
        'Medieval-stone architecture (Dubrovnik, Split) appeals',
        'You\'re combining with Italy or Slovenia for a Balkan-coast trip',
      ],
    },
    faqs: [
      { q: 'Which is better value for a honeymoon?', a: 'Both offer excellent value compared to Greece/Italy/France equivalents. Portugal is slightly cheaper outside peak Algarve summer; Croatia spikes in July-August but shoulder season (May-Jun, Sep-Oct) is dramatically cheaper.' },
      { q: 'Which is better for a 10-day honeymoon?', a: 'Portugal can sustain 10 days easily — Lisbon (2-3) + Douro Valley (2-3) + Algarve or Comporta (4-5). Croatia ideal for 7-9 days — more would feel like overkill on coast.' },
      { q: 'Which has better beaches?', a: 'Portugal Algarve has more dramatic and varied beaches (Praia da Marinha, Benagil); Croatia has cleaner water and prettier coves but fewer sand beaches. Different formats.' },
      { q: 'Which has better food?', a: 'Portugal — wider variety (cataplana seafood stews, francesinha, Douro lamb), better wine country, world-class pastry. Croatia is excellent but more Italian-influenced and narrower.' },
      { q: 'Which is more romantic?', a: 'Tied — different vibes. Portugal\'s romance is Lisbon-fado-and-port-wine, candlelit cobblestone evenings. Croatia\'s romance is sailing-into-hidden-cove, dinner under stone walls. Both intensely so.' },
    ],
  },

  // ── 25. Thailand vs Vietnam (Asia honeymoon variety) ───────────────────────
  {
    slug: 'thailand-vs-vietnam',
    a: { destination: 'thailand', label: 'Thailand' },
    b: { destination: 'vietnam', label: 'Vietnam' },
    tagline: 'Phuket beach polish vs Ha Long Bay drama — Southeast Asia honeymoon duel.',
    metaDescription: 'Thailand vs Vietnam for honeymoon: islands, food, beach, culture, value. Side-by-side picks.',
    verdict: 'Both are exceptional Southeast Asian honeymoon destinations with rich food cultures and substantial luxury hotel inventory, but they offer different experiences. Thailand is polished tropical luxury — Phuket, Krabi, Koh Samui have decades of resort sophistication and the format is well-honed. Vietnam is variety and drama — Ha Long Bay, the imperial cities of Hue and Hoi An, Phu Quoc beaches, and the Mekong Delta in one country. Thailand wins on resort polish and beach inventory; Vietnam wins on cultural variety and visual drama.',
    tldr: {
      forA: 'Thailand — for polished beach luxury, Phuket/Koh Samui resort variety, and easy travel.',
      forB: 'Vietnam — for Ha Long Bay drama, imperial cities, and food adventure.',
      tie: 'Tied on overall value and food culture quality.',
    },
    criteria: [
      { label: 'Flight time (from Europe)', aWins: 'tie', aDetail: '11-12h direct to Bangkok', bDetail: '11-12h direct to Hanoi/HCMC' },
      { label: 'Flight time (from USA)', aWins: 'tie', aDetail: '17-20h via Tokyo/Hong Kong', bDetail: '17-20h via Tokyo/Seoul' },
      { label: 'Beach quality', aWins: true, aDetail: 'World-class — Phuket, Krabi, Koh Samui, Koh Lanta, Phi Phi', bDetail: 'Improving — Phu Quoc and Con Dao excellent, but smaller inventory' },
      { label: 'Resort polish', aWins: true, aDetail: 'Decades of luxury — Aman, Six Senses, Banyan Tree, Como, Soneva', bDetail: 'Newer — Six Senses Con Dao, Amanoi, JW Marriott Phu Quoc, but less depth' },
      { label: 'The signature view', aWins: 'tie', aDetail: 'Phang Nga Bay limestone karsts, Maya Bay, Phi Phi cliffs', bDetail: 'Ha Long Bay — limestone karsts in emerald water, UNESCO icon' },
      { label: 'Food', aWins: 'tie', aDetail: 'World-class — Thai cuisine is one of the great cuisines on earth', bDetail: 'World-class — Vietnamese food (pho, banh mi, com tam) is equally celebrated, often considered healthier' },
      { label: 'Cultural depth', aWins: false, aDetail: 'Bangkok temples, Chiang Mai north, Sukhothai ruins', bDetail: 'Extraordinary — Hanoi old quarter, Hue imperial city, Hoi An lantern town, Mekong Delta' },
      { label: 'Multi-stop honeymoon', aWins: false, aDetail: 'Bangkok + island works but feels like 2 destinations', bDetail: 'Hanoi → Ha Long → Hoi An → Phu Quoc is a natural 12-14 day itinerary' },
      { label: 'Adults-only choice', aWins: true, aDetail: 'Several adults-only luxury (Como Point Yamu, Banyan Tree adults-only, Andara)', bDetail: 'Limited adults-only inventory, mostly small' },
      { label: 'Spa & wellness', aWins: true, aDetail: 'World-class — Chiva-Som, Kamalaya, Como Shambhala', bDetail: 'Emerging — Six Senses, Amanoi, but smaller scene' },
      { label: 'Crowd factor', aWins: false, aDetail: 'Phuket/Krabi can feel mass-tourism in peak', bDetail: 'Phu Quoc and Hoi An growing crowds; Con Dao, Ninh Binh still quiet' },
      { label: 'Best season', aWins: 'tie', aDetail: 'Nov-Apr (dry south), May-Oct (wet south, dry north)', bDetail: 'Feb-Apr south is ideal, Sep-Nov for Hoi An, year-round options regional' },
      { label: 'Budget floor (5-star)', aWins: 'tie', aDetail: '$200-400/night world-class luxury', bDetail: '$200-400/night world-class luxury' },
      { label: 'Budget ceiling', aWins: 'tie', aDetail: '$3000+/night (Aman, Soneva Kiri)', bDetail: '$2500+/night (Six Senses Con Dao, Amanoi)' },
    ],
    pickA: {
      title: 'Pick Thailand if…',
      bullets: [
        'Polished beach-resort luxury is the priority (Phuket, Koh Samui, Krabi)',
        'You want adults-only inventory — Thailand has more',
        'Spa and wellness retreat is part of the trip',
        'You\'ve never been to Southeast Asia and want the easiest entry',
        'Combining beach + Bangkok in one trip',
      ],
    },
    pickB: {
      title: 'Pick Vietnam if…',
      bullets: [
        'You want variety — Hanoi + Ha Long + Hoi An + beach in one trip',
        'Cultural depth and history matter (imperial cities, Vietnam War sites)',
        'Vietnamese food specifically is a major draw',
        'You\'ve already been to Thailand and want a fresh Asian destination',
        'Ha Long Bay overnight cruise is on the bucket list',
      ],
    },
    faqs: [
      { q: 'Which has better beaches?', a: 'Thailand, by inventory and polish — Phuket, Krabi, Koh Samui have decades of resort infrastructure. Vietnam\'s beaches (Phu Quoc, Con Dao) are excellent and improving but the inventory is smaller.' },
      { q: 'Which is more cultural?', a: 'Vietnam, decisively. Hanoi old quarter, Hue imperial city, Hoi An lantern town, the Mekong Delta create a multi-week cultural journey. Thailand is more beach-and-temple weighted.' },
      { q: 'Which has better food?', a: 'Tied — both cuisines are among the world\'s greatest. Thai cooking is bolder (chillies, coconut, fish sauce); Vietnamese cooking is herb-led and lighter (pho, banh mi, herbs). Different formats; both world-class.' },
      { q: 'Can I combine the two?', a: 'Yes — many couples do 14-day Thailand + Vietnam trips. Bangkok → Hanoi → Ha Long → Hoi An → Phu Quoc is a natural route. Adds richness but fewer days at any one location.' },
      { q: 'Which is easier for first-time honeymoon to Asia?', a: 'Thailand — more developed tourist infrastructure, more English spoken at resorts, easier transport, more luxury beach options. Vietnam rewards a second-trip-Asia traveller more.' },
    ],
  },

  // ── 26. Japan vs Bali (Asia wellness/cultural alt) ─────────────────────────
  {
    slug: 'japan-vs-bali',
    a: { destination: 'japan', label: 'Japan' },
    b: { destination: 'bali', label: 'Bali' },
    tagline: 'Kyoto cherry-blossom precision or Ubud rice-terrace serenity?',
    metaDescription: 'Japan vs Bali for honeymoon: culture, wellness, food, value, romance. Side-by-side comparison and picks.',
    verdict: 'These two destinations represent the most distinctive cultural honeymoons in Asia, and they answer completely different questions. Japan is polished, ritualistic, four-season cultural depth — onsen ryokans, kaiseki dining, cherry blossoms, temples, Tokyo neon, Kyoto silence. Bali is tropical, spiritual, year-round wellness — rice terraces, Hindu temples, jungle villas, beach cliffs, the world capital of yoga and wellness retreats. Japan wins on cultural sophistication and seasonality. Bali wins on tropical romance and wellness depth.',
    tldr: {
      forA: 'Japan — for cultural depth, ryokan onsen romance, four-season variety, world-leading food.',
      forB: 'Bali — for tropical wellness, jungle villa romance, and dramatically better value.',
      tie: 'Tied on cultural authenticity and luxury hotel quality.',
    },
    criteria: [
      { label: 'Flight time (from Europe)', aWins: false, aDetail: '11-12h direct to Tokyo (BA, JAL, ANA)', bDetail: '14-17h via Singapore/Doha to Denpasar' },
      { label: 'Flight time (from USA)', aWins: true, aDetail: '11-13h direct (NYC, LA, SFO) to Tokyo', bDetail: '18-22h via Tokyo or Hong Kong' },
      { label: 'Climate / format', aWins: false, aDetail: 'Four seasons — cherry blossoms (Apr), autumn leaves (Nov), winter onsen', bDetail: 'Tropical year-round — Apr-Oct dry, Nov-Mar wet' },
      { label: 'Cultural depth', aWins: true, aDetail: 'Extraordinary — Kyoto temples, Tokyo modernity, ryokans, tea ceremony, kaiseki', bDetail: 'Excellent — Hindu temples, water rituals, Ubud arts, Tirta Empul, Tanah Lot' },
      { label: 'Food', aWins: true, aDetail: 'World-leading — sushi, kaiseki, tempura, ramen, more Michelin stars than France', bDetail: 'Excellent — Indonesian/Balinese, fresh tropical, Asian fusion at resort level' },
      { label: 'Wellness & spa', aWins: false, aDetail: 'Onsen ryokan tradition (Hakone, Kinosaki, Kawaguchiko)', bDetail: 'World capital of wellness — COMO Shambhala, Fivelements, Karma; spas at every resort' },
      { label: 'The signature room', aWins: 'tie', aDetail: 'Ryokan with private onsen bath and tatami', bDetail: 'Jungle villa in Ubud or clifftop villa in Uluwatu — open-air, infinity pool' },
      { label: 'Beach', aWins: false, aDetail: 'Limited — Okinawa is Japan\'s tropical alternative, far from main itinerary', bDetail: 'Multiple — Seminyak, Canggu, Uluwatu, Nusa Dua, Sanur' },
      { label: 'Romantic intimacy', aWins: 'tie', aDetail: 'Ryokan with kaiseki dinner and private bath is profoundly romantic', bDetail: 'Jungle villa with private pool overlooking rice paddies is profoundly romantic' },
      { label: 'Multi-stop honeymoon', aWins: true, aDetail: 'Tokyo + Kyoto + Hakone (or Okinawa) is the classic 10-14 day itinerary', bDetail: 'Ubud + Uluwatu (+ Seminyak) is 7-10 days; not as much variety as Japan' },
      { label: 'Cherry blossom / seasonal magic', aWins: true, aDetail: 'Sakura season (late Mar-early Apr) is among the world\'s most romantic moments', bDetail: 'Tropical year-round, no equivalent seasonal magic' },
      { label: 'Adults-only choice', aWins: 'tie', aDetail: 'Many ryokans are couples-focused by tradition (children allowed but rare)', bDetail: 'Some adults-only (COMO Shambhala, AYANA villas) but fewer dedicated' },
      { label: 'Best season', aWins: 'tie', aDetail: 'Late Mar-Apr (sakura), Oct-Nov (autumn), Jan-Feb (winter onsen)', bDetail: 'Apr-Oct (dry), Nov-Mar (wet but green)' },
      { label: 'Budget floor (5-star)', aWins: false, aDetail: '$400-700/night for 5-star Tokyo/Kyoto, ryokans $500-1500', bDetail: '$200-400/night for world-class luxury' },
      { label: 'Budget ceiling', aWins: 'tie', aDetail: '$3000+/night (Aman Tokyo, Mandarin Oriental, top ryokans)', bDetail: '$3000+/night (Capella Ubud, Bambu Indah, NIHI Sumba)' },
    ],
    pickA: {
      title: 'Pick Japan if…',
      bullets: [
        'Cultural depth and four-season variety matter',
        'Cherry blossom season (sakura) is on the bucket list',
        'Onsen ryokan + kaiseki dinner is the dream honeymoon ritual',
        'You want world-leading food (Tokyo has more Michelin stars than Paris)',
        'You\'re flying from the US (direct) — Bali is much further',
      ],
    },
    pickB: {
      title: 'Pick Bali if…',
      bullets: [
        'Wellness and spa are the honeymoon\'s organizing principle',
        'Tropical jungle-villa romance speaks to you (Capella, Bambu Indah, Mandapa)',
        'Better value matters — $200-300/night gets world-class luxury',
        'You want beach + culture + wellness in one destination',
        'You\'re flying from Australia or already familiar with Japan',
      ],
    },
    faqs: [
      { q: 'Which is more culturally rich?', a: 'Both are extraordinary. Japan is precise, ritualistic, deeply codified — every meal, bath, garden has formal cultural weight. Bali is more permeable and spiritual — daily Hindu offerings, water rituals, dance ceremonies. Japan rewards study; Bali rewards immersion.' },
      { q: 'Which is more expensive?', a: 'Japan, by 50-100% for equivalent tier. Tokyo and Kyoto luxury hotels start $400-700/night vs Bali\'s $200-300. Ryokans add up too. Bali is among the best value-for-money luxury destinations on earth.' },
      { q: 'Which is better for a 14-day honeymoon?', a: 'Japan — more variety in 14 days (Tokyo + Kyoto + Hakone + Hokkaido or Okinawa). Bali for 14 days is doable with island hops to Sumba or Lombok but mostly single-island.' },
      { q: 'Which has better food?', a: 'Japan, decisively, for refinement and breadth. Tokyo alone has more Michelin stars than any city on earth. Bali food is good and improving but doesn\'t compete at this level.' },
      { q: 'Can I combine the two?', a: 'Possible for 18-21 day trips — Japan first (cooler, structured), Bali after (warm, relaxed). Tokyo → Bali via Singapore is a 6-7h flight. Most couples pick one for a 10-14 day honeymoon.' },
    ],
  },
]

// Quick lookup helper
export function getComparisonBySlug(slug: string): Comparison | undefined {
  return COMPARISONS.find(c => c.slug === slug)
}

export function getAllComparisonSlugs(): string[] {
  return COMPARISONS.map(c => c.slug)
}
