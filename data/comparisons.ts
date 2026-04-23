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
]

// Quick lookup helper
export function getComparisonBySlug(slug: string): Comparison | undefined {
  return COMPARISONS.find(c => c.slug === slug)
}

export function getAllComparisonSlugs(): string[] {
  return COMPARISONS.map(c => c.slug)
}
