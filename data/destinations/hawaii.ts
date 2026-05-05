import type { DestinationMeta } from '@/types/destination'

const meta: DestinationMeta = {
hero: '/images/hotels/four-seasons-hualalai-hawaii/hero.webp',
tagline: 'Paradise perfected — volcanic drama meets turquoise Pacific across 8 stunning islands.',
intro: 'Hawaii is the only American honeymoon destination that genuinely rivals the world\'s finest. Eight islands, each with its own personality: Maui for luxury beach resorts and Hana road drama, the Big Island for active lava flows and Kohala coast magnificence, Kauai for Na Pali cliffs and raw jungle beauty, and Oahu for the energy of Honolulu with the calm of the North Shore. Unlike any other tropical destination, you get world-class cuisine, no passport requirements for Americans, and a culture of aloha that is genuinely, inexplicably warm.',
bestTime: 'Apr–Jun & Sep–Nov',
flightFrom: '10–12h from US mainland / 17–20h from Europe',
topExperience: 'Beach & Volcanic Scenery',
perfectFor: [
  'Couples who want the tropical dream without a passport — US-based travelers especially',
  'Foodies — farm-to-table dining in Maui and Big Island is world-class',
  'Adventure-seekers who want volcano hikes, helicopter rides, and snorkeling with mantas',
  'Couples who want variety — island-hopping gives you multiple personalities in one trip',
  'Those who want luxury resorts at a level equal to anywhere in the world',
],
skipIf: [
  'You want total seclusion away from other tourists — Maui beach resorts can feel busy',
  'Budget is the priority — top-tier Hawaii is comparable in price to the Maldives',
  'You want a quick getaway — the journey from Europe is genuinely long',
  'You prefer old-world European culture and architecture',
],
experiences: [
  {
    icon: '🌋',
    title: 'Helicopter Over Active Lava (Big Island)',
    description: 'Flying over Kilauea at night watching lava flow into the ocean is one of the most extraordinary things a human being can do. Blue Hawaiian Helicopters runs the definitive tour.',
    cost: '$300–$600 per person',
    tip: 'Book the doors-off helicopter for photography. Evening flights catch the lava glow best — arrive on island a day early so you\'re not jet-lagged.',
  },
  {
    icon: '🐋',
    title: 'Whale Watching from Maui (Jan–Mar)',
    description: 'Humpback whales migrate to Maui waters every winter — the Pacific Whale Foundation runs excellent tours from Maalaea Harbor. Seeing a 40-ton whale breach 30 metres from your boat is unforgettable.',
    cost: '$50–$120 per person',
    tip: 'Morning tours have calmer seas. The whales are most active January through March.',
  },
  {
    icon: '🤿',
    title: 'Manta Ray Night Snorkel (Big Island)',
    description: 'Snorkeling above giant manta rays feeding on plankton in the dark at Keauhou Bay. The mantas have wingspans up to 5 metres and glide directly beneath you. One of the most magical wildlife experiences on earth.',
    cost: '$80–$130 per person',
    tip: 'Book with Jack\'s Diving Locker or Manta Ray Advocates — they brief you properly and their guides are outstanding.',
  },
  {
    icon: '🌅',
    title: 'Haleakala Sunrise (Maui)',
    description: 'Driving to the 10,000-foot summit of Haleakala before dawn and watching the sun rise above the clouds is a rite of passage. The landscape looks Martian. The silence is absolute.',
    cost: '$30 park entry per car',
    tip: 'Book the sunrise permit at recreation.gov — it sells out weeks ahead. Bring a down jacket: it is genuinely cold at the summit.',
  },
  {
    icon: '🏄',
    title: 'Private Surf Lesson on Waikiki',
    description: 'Waikiki has the most forgiving waves in the world for learning. Private lessons with a local instructor on a longboard, with Diamond Head as your backdrop — this is how surfing was born.',
    cost: '$120–$200 per person (private lesson)',
    tip: 'Book a private lesson, not a group. The personal attention makes the difference between standing up and not.',
  },
],
months: [
  { month: 'Jan', weather: 'Warm, some rain on windward coasts', emoji: '🌤', crowds: 'High', price: 'High', verdict: 'Whale season begins — worth it' },
  { month: 'Feb', weather: 'Warm, whale season peak', emoji: '🌤', crowds: 'High', price: 'High', verdict: 'Best whale watching of year' },
  { month: 'Mar', weather: 'Warming, end of whale season', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Spring break crowds, still excellent' },
  { month: 'Apr', weather: 'Ideal — dry, not too hot', emoji: '☀️', crowds: 'Moderate', price: 'Mid', verdict: 'Sweet spot starts here' },
  { month: 'May', weather: 'Perfect temperatures, low rain', emoji: '☀️', crowds: 'Low-mod', price: 'Mid', verdict: 'One of the best months' },
  { month: 'Jun', weather: 'Dry season in full swing', emoji: '☀️', crowds: 'Moderate', price: 'Mid-high', verdict: 'Excellent all round' },
  { month: 'Jul', weather: 'Hot, busy summer peak', emoji: '☀️', crowds: 'Peak', price: 'High', verdict: 'Beautiful but crowded' },
  { month: 'Aug', weather: 'Hot, peak summer', emoji: '☀️', crowds: 'Peak', price: 'Highest', verdict: 'Best weather, most expensive' },
  { month: 'Sep', weather: 'Warm, crowds thinning', emoji: '☀️', crowds: 'Moderate', price: 'Mid-high', verdict: 'Hidden gem — same weather, fewer people' },
  { month: 'Oct', weather: 'Ideal temperatures, low crowds', emoji: '🌤', crowds: 'Low-mod', price: 'Mid', verdict: 'Best value in peak season' },
  { month: 'Nov', weather: 'Slightly wetter, comfortable', emoji: '⛅', crowds: 'Low', price: 'Low-mid', verdict: 'Good deals, still lovely' },
  { month: 'Dec', weather: 'Holiday rush, some rain', emoji: '🌦', crowds: 'High', price: 'Very high', verdict: 'Expensive, holiday magic' },
],
budgetTiers: [
  {
    label: 'Luxury',
    range: '$500–$1,000/night',
    gets: 'Excellent resort hotels on top beaches — Andaz Maui, Westin Hapuna. Full amenities, good dining, beautiful pools.',
    example: 'Andaz Maui at Wailea, Westin Hapuna Beach',
  },
  {
    label: 'Premium',
    range: '$1,000–$2,000/night',
    gets: 'Four Seasons and Ritz-Carlton territory. Private pools, butler-adjacent service, finest beach locations.',
    example: 'Four Seasons Maui at Wailea, Ritz-Carlton Kapalua',
  },
  {
    label: 'Ultra-Luxury',
    range: '$2,000+/night',
    gets: 'Four Seasons Hualalai on the Big Island — the most private, most beautiful resort in Hawaii. Bungalows set in ancient lava fields facing the Pacific.',
    example: 'Four Seasons Resort Hualalai, Montage Kapalua Bay',
  },
],
areas: [
  {
    name: 'Maui — Wailea / Kaanapali',
    bestFor: 'Best overall luxury beach resort experience',
    description: 'Wailea on the south shore is the finest resort strip in Hawaii — Four Seasons, Fairmont Kea Lani, Andaz Maui. Kaanapali on the west shore is slightly more social with the famous Black Rock snorkeling. Both are sheltered from trade winds and have calm, swimmable water.',
  },
  {
    name: 'Big Island — Kona / Kohala Coast',
    bestFor: 'Most dramatic scenery, most exclusive resorts',
    description: 'The Kohala Coast is 30 miles of pristine beach resort against a backdrop of ancient black lava fields. Four Seasons Hualalai, Mauna Kea Beach Hotel, and Fairmont Orchid are here. The stargazing from Mauna Kea (4,200m) is the best on earth.',
  },
  {
    name: 'Kauai — North Shore / Poipu',
    bestFor: 'Raw natural beauty, most dramatic landscapes',
    description: 'The Garden Isle is the most beautiful island in Hawaii. Na Pali Coast is accessible only by boat or helicopter. Hanalei Bay on the north shore is one of the most beautiful beaches in the Pacific. Poipu on the south is sunnier and has the Grand Hyatt Kauai.',
  },
  {
    name: 'Oahu — Honolulu / North Shore',
    bestFor: 'City energy combined with beach luxury',
    description: 'Waikiki is busy but iconic — Diamond Head, surf lessons, world-class dining. The Halekulani is still the finest hotel on Oahu. North Shore has the world\'s best big-wave surfing (November–February) and the legendary shave ice at Matsumoto\'s.',
  },
],
expertTips: [
  {
    tip: 'Island-hop: 2 islands in 10 nights is the sweet spot',
    detail: 'Fly into Maui, spend 5–6 nights, then a 40-min inter-island flight to the Big Island for 4–5 nights. You get two completely different Hawaii experiences without the logistics becoming burdensome.',
  },
  {
    tip: 'Book volcano helicopter tours as early as possible',
    detail: 'Blue Hawaiian and Paradise Helicopters book out weeks ahead in peak season. The lava flow activity changes — check the USGS Hawaii Volcano Observatory website the week before to confirm activity levels.',
  },
  {
    tip: 'The west and south sides of each island are always drier',
    detail: 'Trade winds bring rain to the east and north (windward) sides. All the top resorts are on the leeward (west/south) coasts for this reason. If a hotel is on the windward side, know what you\'re signing up for.',
  },
  {
    tip: 'Rent a car on every island except Oahu',
    detail: 'Maui, Big Island, and Kauai are impossible to explore without a car. Book in advance — local rental agencies (Harper, Paradise) are cheaper and better-maintained than the national chains at the airport.',
  },
  {
    tip: 'The Road to Hana is a half-day, not a day trip',
    detail: 'Leave your Wailea hotel by 7am. Drive to Hana, stop at the Seven Sacred Pools, and return by the southern route (through Ulupalakua). You\'ll be back by 5pm. Doing it as a day trip from Kaanapali means 3h of driving before you start.',
  },
],
packing: [
  { item: 'Reef-safe sunscreen (mineral)', why: 'Hawaii was the first US state to ban oxybenzone-based sunscreen. You\'ll be fined at state parks without the correct type.' },
  { item: 'Light down jacket', why: 'For Haleakala summit (Maui) and Mauna Kea summit (Big Island) — both above 3,000m, genuinely cold at sunrise.' },
  { item: 'Underwater camera', why: 'The manta ray night snorkel and Molokini Crater snorkeling deserve better than a phone camera.' },
  { item: 'Hiking sandals or trail runners', why: 'The lava terrain on the Big Island is razor-sharp — regular flip-flops won\'t survive Kilauea Iki Trail.' },
  { item: 'Reusable water bottle', why: 'Hawaii is hot, hiking is serious. Tap water on all islands is excellent and safe.' },
],
guide: {
  getting: 'Fly into Kahului (OGG) for Maui, Kona (KOA) for Big Island west coast, Lihue (LIH) for Kauai, or Honolulu (HNL) for Oahu. From the US mainland: direct flights on Hawaiian Airlines, Delta, United, and American from most major hubs. From Europe: connect through LAX, SFO, or SEA. Inter-island flights with Hawaiian Airlines or Mokulele take 20–50 minutes.',
  where: 'Maui Wailea (best overall luxury beach resort experience), Big Island Kohala Coast (most dramatic, most exclusive), Kauai North Shore (raw beauty, Hanalei Bay), Oahu Waikiki (iconic, social, Diamond Head backdrop). For a honeymoon, Maui + Big Island is the optimal combination.',
  when: 'April–June and September–November are the sweet spots — dry, warm, fewer crowds than summer, lower prices than winter peak. January–March brings whale watching but also school holidays and higher prices. July–August is the busiest and most expensive period.',
},
localFood: 'Poke bowls with fresh ahi tuna, plate lunches with kalua pork, shave ice from Matsumoto\'s on Oahu North Shore, Kona coffee with macadamia nut pancakes, loco moco (rice, burger, egg and brown gravy), and fresh malasadas from Leonard\'s Bakery. Maui and Big Island farm-to-table restaurants are genuinely world-class.',
currency: 'US Dollar (USD)',
language: 'English (Hawaiian spoken)',
timezone: 'UTC-10 (HST, no DST)',
}

export default meta
