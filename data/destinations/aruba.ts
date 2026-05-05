import type { DestinationMeta } from '@/types/destination'

const meta: DestinationMeta = {
hero: '/images/hotels/bucuti-tara-beach-aruba/hero.webp',
tagline: 'The most reliable Caribbean weather window — outside the hurricane belt, sunny 365.',
intro: 'Aruba is the dry, sunny, cactus-and-divi-divi tree Caribbean alt to Barbados — a 20-mile island lying 15 miles off the coast of Venezuela, outside the Atlantic hurricane belt, and getting under 20 inches of rain a year (less than Phoenix or Las Vegas). The trade winds bend every divi-divi tree on the island into a permanent westward arc, the south-coast leeward beaches (Eagle Beach and Palm Beach) are calm and white-sand, and the rugged east-coast Atlantic is wild surf and zero swimmers — protected as Arikok National Park. The hotel scene splits cleanly: Eagle Beach is low-rise, divi-divi-fringed, adults-skewing (Bucuti, Manchebo); Palm Beach is the high-rise strip with casinos (Ritz, Marriott, Hyatt). For honeymooners, Aruba\'s singular pitch is the weather guarantee — it is the most dependable sunny week in the Caribbean.',
bestTime: 'Year-round (best Apr–Aug for value)',
flightFrom: '4–5h from US East Coast / 9h from London',
topExperience: 'Reliable Sun + Adults-Only Beachfront',
perfectFor: [
  'Couples who have been burned by Caribbean rain — Aruba\'s weather is the most reliable in the region',
  'Adults-only beachfront on Eagle Beach (Bucuti, Manchebo) for a quieter honeymoon',
  'East Coast US couples — direct 4–5h flights and US Customs pre-clearance on the way home',
  'Couples who want a dramatic landscape contrast — calm leeward beach and Arikok National Park cactus desert in one week',
  'August honeymooners — Aruba is one of the few Caribbean islands genuinely dependable in hurricane season',
],
skipIf: [
  'You hate constant trade winds — Aruba is breezy 365 days a year',
  'You want lush rainforest, waterfalls, or jungle — Aruba is desert (cactus, aloe, divi-divi only)',
  'You want a Caribbean food capital — Aruba is solid but not St Barts or Mustique',
  'You want long-haul-feel exclusivity — Aruba is busy with cruise-ship day-traffic in Oranjestad',
  'You want a single-resort cocoon — Aruba honeymoons benefit from getting out (Arikok, Oranjestad, Renaissance Island)',
],
experiences: [
  {
    icon: '🚙',
    title: 'Arikok National Park 4x4',
    description: 'Half-day private 4x4 through the protected 18% of Aruba — cactus, the Conchi natural rock pool on the wild Atlantic north coast, the Fontein cave paintings, and the moonscape boulder fields of Casibari.',
    cost: '$200–$400 per couple',
    tip: 'Book a private 4x4, not the group ATV tours — the group tours are dust-cloud convoys; the private tour lets you swim the Conchi pool when no one else is there.',
  },
  {
    icon: '🤿',
    title: 'Antilla Wreck Snorkel',
    description: 'The 400-foot German freighter scuttled in 1940 in 60 feet of water off Aruba\'s northwest coast — one of the largest accessible wreck snorkels in the Caribbean. Half-day catamaran from Palm Beach.',
    cost: '$80–$150 per person',
    tip: 'Most operators add a stop at Mangel Halto on the south coast — calm, mangrove-fringed reef, perfect for new snorkelers. Ask for the two-stop tour.',
  },
  {
    icon: '⛵',
    title: 'Sunset Catamaran',
    description: 'Two-hour catamaran along the leeward coast at golden hour with rum punch, snorkel stop at Boca Catalina, and the sunset behind the California Lighthouse on the northwest tip.',
    cost: '$80–$120 per person (group) / $600+ private',
    tip: 'Red Sail Sports and Octopus Aruba run the best operations. Book the smaller-group sunset, not the daytime party-boat tour.',
  },
  {
    icon: '🦩',
    title: 'Renaissance Private Island Day',
    description: 'Renaissance Wind Creek owns a 40-acre private island reached by 7-minute hotel boat from the Oranjestad marina — the calm-water beach is home to a permanent flock of pink Caribbean flamingos who eat from your hand.',
    cost: '$125 per person (day pass) — limited availability',
    tip: 'Day passes sell out — book through your hotel concierge a week before. Go to the adults-only Flamingo Beach side; the Iguana Beach side is family-only.',
  },
  {
    icon: '🌅',
    title: 'Eagle Beach Divi Sunset',
    description: 'The iconic photograph of Aruba — the bent Fofoti divi-divi tree at the south end of Eagle Beach silhouetted against the Caribbean sunset. Walk down from any Eagle Beach hotel at 5:30pm in winter, 6:30pm in summer.',
    cost: 'Free',
    tip: 'There are two famous divi-divi trees on Eagle Beach — both worth photographing. The southern one (closer to Bucuti) is the most photographed; the northern one (closer to Manchebo) is quieter at sunset.',
  },
],
months: [
  { month: 'Jan', weather: 'Warm, breezy (82°F)', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Peak — book early' },
  { month: 'Feb', weather: 'Warm, breezy (82°F)', emoji: '☀️', crowds: 'Peak', price: 'Highest', verdict: 'Most expensive month' },
  { month: 'Mar', weather: 'Warm, breezy (83°F)', emoji: '☀️', crowds: 'Peak', price: 'High', verdict: 'Spring break crowds' },
  { month: 'Apr', weather: 'Warm, dry (84°F)', emoji: '☀️', crowds: 'Moderate', price: 'Mid', verdict: 'Sweet spot opens' },
  { month: 'May', weather: 'Warm, dry (85°F)', emoji: '☀️', crowds: 'Low-mod', price: 'Mid-low', verdict: 'Excellent value' },
  { month: 'Jun', weather: 'Warm, dry (86°F)', emoji: '☀️', crowds: 'Low', price: 'Low', verdict: 'Best value of year' },
  { month: 'Jul', weather: 'Warm, dry (87°F)', emoji: '☀️', crowds: 'Moderate', price: 'Mid', verdict: 'Family-busy but cheap' },
  { month: 'Aug', weather: 'Warm, dry (87°F)', emoji: '☀️', crowds: 'Moderate', price: 'Mid', verdict: 'Hurricane-safe alt' },
  { month: 'Sep', weather: 'Warm, lightest winds (88°F)', emoji: '☀️', crowds: 'Low', price: 'Lowest', verdict: 'Cheapest, calmest' },
  { month: 'Oct', weather: 'Warm, slight rain risk (87°F)', emoji: '🌤', crowds: 'Low', price: 'Low', verdict: 'Hidden gem month' },
  { month: 'Nov', weather: 'Warm, occasional rain (85°F)', emoji: '🌤', crowds: 'Low-mod', price: 'Mid-low', verdict: 'Pre-peak good value' },
  { month: 'Dec', weather: 'Warm, breezy (84°F)', emoji: '☀️', crowds: 'Peak', price: 'Very high', verdict: 'Holiday rush' },
],
budgetTiers: [
  {
    label: 'Boutique Adults-Only',
    range: '$380–$700/night',
    gets: 'Low-rise adults-only beachfront on Eagle Beach. King beds, ocean balconies, calm wellness vibe, no casino, no high-rise.',
    example: 'Manchebo Beach Resort, Amsterdam Manor',
  },
  {
    label: 'Premium 5-Star',
    range: '$500–$1,200/night',
    gets: 'Full-service Palm Beach high-rise resorts with casinos, multiple pools, several restaurants, and concierge-floor adults-only access.',
    example: 'Marriott Tradewinds Club, Hyatt Regency Club, Renaissance Marina',
  },
  {
    label: 'Top-Tier Honeymoon',
    range: '$650–$2,200/night',
    gets: 'The very best — Bucuti adults-only carbon-neutral or Ritz-Carlton full luxury. Largest rooms, top spa, best food, strongest service.',
    example: 'Bucuti & Tara, Ritz-Carlton Aruba',
  },
],
areas: [
  {
    name: 'Eagle Beach',
    bestFor: 'Adults-only, low-rise hush, the iconic divi-divi-fringed honeymoon beach',
    description: 'The widest, whitest beach on Aruba — divi-divi tree dunes, low-rise adults-only properties (Bucuti, Manchebo, Amsterdam Manor), no casinos, no high-rises. The honeymoon answer almost every time. The two iconic Fofoti bent-tree photographs are at the south end.',
  },
  {
    name: 'Palm Beach',
    bestFor: 'Resort-scale amenities, casinos, pools, multiple restaurants',
    description: 'The high-rise strip 5 minutes north of Eagle Beach — Marriott, Ritz-Carlton, Hyatt, Hilton, Riu, Holiday Inn in a continuous tower wall. Calmer water, busier beach, paved boardwalk linking everything. The amenity-dense Aruba honeymoon for couples who want full resort services.',
  },
  {
    name: 'Oranjestad',
    bestFor: 'Pastel Dutch colonial architecture, food, Renaissance flamingo island',
    description: 'The pastel Dutch colonial capital — the pedestrianised Caya G.F. Betico Croes shopping street, the historic streetcar loop, the Renaissance Marina (with private boat to the flamingo island), and most of the island\'s best non-resort restaurants. 15 minutes from Palm Beach, 20 from Eagle Beach.',
  },
  {
    name: 'Arikok / East Coast',
    bestFor: 'Day-trip cactus desert, the wild Atlantic, Conchi natural pool',
    description: 'The protected 18% of Aruba — cactus forest, wild Atlantic surf cliffs, the Conchi natural-rock swimming pool, the Fontein cave paintings, and the moonscape Casibari boulder fields. No swimming on the east coast. Day trip by 4x4 or jeep tour from any Eagle/Palm Beach base.',
  },
],
expertTips: [
  {
    tip: 'Pick Eagle Beach OR Palm Beach — and visit both',
    detail: 'Most Aruba honeymooners pick one strip and never see the other. The two beaches are 5 minutes apart by taxi, and they are radically different products — spend a half-day at the other one for context. Eagle is wider, quieter, low-rise; Palm is bigger amenities, busier, high-rise.',
  },
  {
    tip: 'US Customs pre-clearance at AUA changes the trip home',
    detail: 'Aruba is one of only a handful of foreign airports with US Customs pre-clearance — you do immigration and customs in Aruba and fly home as a domestic passenger. Build in 90 minutes for pre-clearance, but the home end at JFK/MIA/BOS is a domestic walk-off.',
  },
  {
    tip: 'Book Renaissance Island day-pass through your hotel',
    detail: 'Day passes to the Renaissance flamingo island are limited and sell out — your hotel concierge has access that walk-up guests don\'t. Book one week before. Make sure you\'re going to the adults-only Flamingo Beach side, not the family Iguana Beach.',
  },
  {
    tip: 'The trade winds are constant — pack accordingly',
    detail: 'Aruba is breezy 365 days a year (15–25 mph average). Beach hats need chin-straps, sarongs need clips, and any beach photograph needs the wind to be behind you. The wind is the reason the island is so cool despite being 12° from the equator — but it is constant.',
  },
  {
    tip: 'Dinner outside the resort is worth the taxi',
    detail: 'Aruba\'s best food is not in the resort dining rooms — Zeerovers (Savaneta, fishing-shack catch-of-the-day), Madame Janette (Eagle Beach back streets, the best fine-dining on Aruba), and The Old Cunucu House (Aruban-Dutch fusion in a restored farmhouse) are all 15-minute taxis and double the food quality.',
  },
],
packing: [
  { item: 'Sunscreen reef-safe SPF 50', why: 'Aruba sun is intense — 12° from the equator and the trade winds hide the burn until it\'s too late' },
  { item: 'Light layers for trade winds', why: 'Constant 15–25 mph wind makes evenings cool — a thin cardigan or wrap is essential' },
  { item: 'Reef shoes for Antilla snorkel', why: 'Boat-based wreck snorkels need shoes for the back of the boat and any rocky entry' },
  { item: 'Smart-casual dinner outfit', why: 'BLT Steak, Madame Janette, and the Ritz dining all expect closed shoes and shirts after 7pm' },
  { item: 'Hat with chin-strap', why: 'A trade-wind island will take any hat that doesn\'t tie down — and you\'ll need it on the beach' },
  { item: 'Wide-spectrum cash card with no FX fees', why: 'AWG (Aruban Florin) and USD both accepted; Wise/Revolut card avoids hotel currency markup' },
],
guide: {
  getting: 'Reina Beatrix International Airport (AUA) is the only airport — direct flights from JFK, Newark, Miami, Boston, Charlotte, Atlanta, DC, Houston, and most major US East Coast hubs at 4–5 hours. London is 9h via Amsterdam (KLM daily). The crown jewel of arrival is the US Customs pre-clearance at AUA on departure — you fly home as a domestic passenger, no customs queue at JFK/MIA/BOS. Build in 90 minutes for pre-clearance and immigration on departure.',
  where: 'Eagle Beach (Bucuti, Manchebo, Amsterdam Manor) for low-rise adults-only honeymoon hush — the widest, whitest beach with the divi-divi trees and no high-rises. Palm Beach (Marriott, Ritz, Hyatt, Hilton, Renaissance) for the high-rise full-service amenity-dense resorts with casinos and multiple pools. Oranjestad (Renaissance Marina) for the boutique downtown adults-only with the private flamingo island. The classic honeymoon split: 7 nights Eagle Beach, or 4 Eagle + 3 Renaissance for variety.',
  when: 'Year-round — Aruba sits outside the hurricane belt and the weather is the most reliable in the Caribbean. April–August is the best value with identical climate to peak; September is the cheapest month with the lightest trade winds. December–March is high season with peak rates and strongest trade winds. Avoid the major US holiday weeks (Christmas, Presidents Day, Spring Break) for both crowds and price.',
},
localFood: 'Keshi yena (Edam-cheese rind stuffed with chicken stew — the national dish, a Dutch-Caribbean fusion); pastechi (the morning pastry, fried half-moon stuffed with cheese, beef, or chicken — every Aruban breakfast); fresh fish at Zeerovers in Savaneta (point at the catch and they fry it on the dock); funchi (cornmeal polenta side); pan bati (pancake-style flatbread). Imports include Dutch staples (bitterballen, croquetas), Venezuelan arepas, and the distinctive Aruban Balashi beer.',
currency: 'Aruban Florin (AWG) and US Dollar — both widely accepted',
language: 'Dutch (official), Papiamento (local creole), English and Spanish universal at hotels',
timezone: 'AST (UTC-4, no daylight saving)',
}

export default meta
