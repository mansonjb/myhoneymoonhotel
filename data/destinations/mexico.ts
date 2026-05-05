import type { DestinationMeta } from '@/types/destination'

const meta: DestinationMeta = {
hero: '/images/hotels/las-ventanas-al-paraiso-mexico/hero.webp',
tagline: 'From Baja\'s desert cliffs to the Riviera Maya\'s jungle cenotes — Mexico does luxury better than anywhere.',
intro: 'Mexico is the most diverse luxury honeymoon destination in the Americas. Los Cabos at the tip of Baja California offers desert-meets-ocean drama with world-class resorts like Las Ventanas al Paraíso and Esperanza — dramatic rock arches, blue marlin, and mezcal sunsets. The Riviera Maya gives you Caribbean turquoise water, Mayan ruins, and underground cenote swimming. Tulum has evolved into a genuinely extraordinary eco-luxury destination. And San Miguel de Allende is colonial Mexico at its most romantic — cobblestones, church bells, and rooftop dining under the stars.',
bestTime: 'Nov–May',
flightFrom: '10–14h from Europe / 2–5h from US',
topExperience: 'Beach & Cenote Luxury',
perfectFor: [
  'US-based couples wanting luxury without a long-haul flight',
  'Foodies — Mexican cuisine (especially Oaxacan and Yucatecan) is one of the world\'s great food cultures',
  'Couples who want variety — desert, jungle, Caribbean beach, colonial cities',
  'Architecture and design lovers — Mexico has some of the world\'s most creative resort design',
  'Those who want genuine cultural immersion alongside beach luxury',
],
skipIf: [
  'Safety is your primary concern — research your specific destination carefully before booking',
  'You want to leave the resort and explore freely without any planning (some areas require more awareness than others)',
  'You need European-style urban sophistication and café culture',
  'You\'re sensitive to heat — the Riviera Maya in summer is very hot and humid',
],
experiences: [
  {
    icon: '🏊',
    title: 'Private Cenote Swimming (Riviera Maya)',
    description: 'Mexico has thousands of underground sinkholes filled with crystal-clear freshwater connected to the world\'s largest underwater cave system. Swimming in a private cenote by candlelight at Tulum is completely otherworldly.',
    cost: '$50–$200 per person (private access)',
    tip: 'Cenote Dos Ojos, Gran Cenote, and Cenote Ik Kil near Chichén Itzá are the most beautiful. Book a private evening session at a boutique cenote for the most romantic experience.',
  },
  {
    icon: '🏛️',
    title: 'Sunrise at Chichén Itzá',
    description: 'The Mayan pyramid of El Castillo at dawn, before the tour buses arrive, with a private archaeologist guide explaining the astronomical precision of its construction. One of the genuinely moving experiences of the Americas.',
    cost: '$150–$300 per couple (private guide, early access)',
    tip: 'The site opens at 8am but private early access tours start at 7am. Book through your hotel concierge — they have relationships with the archaeological site managers.',
  },
  {
    icon: '🐳',
    title: 'Whale Shark Snorkel (Isla Mujeres, Jun–Sep)',
    description: 'The waters off Isla Mujeres host the world\'s largest congregation of whale sharks from June through September. Snorkeling alongside 20+ whale sharks simultaneously is one of the most extraordinary wildlife experiences on earth.',
    cost: '$100–$180 per person',
    tip: 'The season peaks in July–August. Boats depart from Isla Mujeres — take the early departure (6am) and book with a small operator (max 8 people per boat).',
  },
  {
    icon: '🌵',
    title: 'Desert Sunset at El Arco (Los Cabos)',
    description: 'The iconic rock arch at Land\'s End where the Pacific meets the Sea of Cortez — dramatic, photogenic, and unique to Baja. Take a water taxi to the arch at sunset for an absurdly cinematic evening.',
    cost: '$80–$150 per couple',
    tip: 'The arch is accessible only by water taxi from Medano Beach. Go at 4pm and watch the sunset from the boat — then dinner at a Cabo San Lucas marina restaurant.',
  },
  {
    icon: '🍹',
    title: 'Mezcal Tasting in Oaxaca City',
    description: 'Oaxaca produces the world\'s finest mezcal. A guided tasting tour through the historic center, visiting artisanal mezcaleros and the best restaurant in Mexico (Restaurante Los Danzantes or Casa Oaxaca), is a genuinely life-changing food experience.',
    cost: '$100–$200 per couple (guided tour)',
    tip: 'Oaxaca City is a 1-hour flight from Mexico City. The combination of mezcal, mole negro, and the Zócalo cathedral at night makes it the most romantic city in Mexico.',
  },
],
months: [
  { month: 'Jan', weather: 'Perfect — dry, warm, clear', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Peak season — book far ahead' },
  { month: 'Feb', weather: 'Ideal, dry season peak', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Best weather of the year' },
  { month: 'Mar', weather: 'Spring break crowds, still lovely', emoji: '☀️', crowds: 'Very high', price: 'Very high', verdict: 'Beautiful but most crowded' },
  { month: 'Apr', weather: 'Warm, Easter crowds then calm', emoji: '🌤', crowds: 'Moderate', price: 'Mid-high', verdict: 'Post-Easter is a sweet spot' },
  { month: 'May', weather: 'Hot, pre-hurricane season', emoji: '☀️', crowds: 'Low', price: 'Mid', verdict: 'Good value before summer' },
  { month: 'Jun', weather: 'Whale shark season begins, humid', emoji: '🌤', crowds: 'Low', price: 'Low', verdict: 'Whale sharks arrive — special' },
  { month: 'Jul', weather: 'Hot, humid, hurricane risk begins', emoji: '⛅', crowds: 'Moderate', price: 'Low-mid', verdict: 'Summer families, some risk' },
  { month: 'Aug', weather: 'Hottest, most hurricane risk', emoji: '🌧', crowds: 'Moderate', price: 'Low', verdict: 'Not recommended for Riviera Maya' },
  { month: 'Sep', weather: 'Hurricane season peak', emoji: '🌧', crowds: 'Low', price: 'Lowest', verdict: 'Avoid for Caribbean side' },
  { month: 'Oct', weather: 'Hurricane season ends, transitioning', emoji: '⛅', crowds: 'Low', price: 'Low-mid', verdict: 'Baja (Los Cabos) fine in October' },
  { month: 'Nov', weather: 'Dry season returns, perfect start', emoji: '🌤', crowds: 'Moderate', price: 'Mid', verdict: 'Excellent — season opens' },
  { month: 'Dec', weather: 'Peak dry season, holiday prices', emoji: '☀️', crowds: 'Peak', price: 'Very high', verdict: 'Perfect weather, book a year ahead' },
],
budgetTiers: [
  {
    label: 'Luxury All-Inclusive',
    range: '$400–$800/night',
    gets: 'Premium all-inclusive resorts in Cancun or Riviera Maya. Excellence Playa Mujeres, Secrets Maroma — genuinely outstanding value with all food, drink, and activities included.',
    example: 'Excellence Playa Mujeres, Secrets Maroma Beach',
  },
  {
    label: 'Premium Boutique',
    range: '$800–$2,000/night',
    gets: 'Private plunge pool suites, exceptional service, superb cuisine. The best of Tulum eco-luxury or Los Cabos boutique.',
    example: 'Esperanza Auberge (Los Cabos), Azulik Tulum, Nomade Tulum',
  },
  {
    label: 'Ultra-Luxury',
    range: '$2,000+/night',
    gets: 'Las Ventanas al Paraíso-level — butler service, private beach, dedicated telescope, and the most creative hospitality in Mexico.',
    example: 'Las Ventanas al Paraíso (Los Cabos), One&Only Palmilla',
  },
],
areas: [
  {
    name: 'Los Cabos (Baja California Sur)',
    bestFor: 'Desert-meets-ocean drama, best year-round weather',
    description: 'At the tip of the Baja Peninsula, the Pacific Ocean meets the Sea of Cortez. The landscape is desert and mountain, the water is dramatic rather than calm. Best resorts are on the Corridor between San José and Cabo San Lucas. Year-round sunshine with minimal hurricane risk.',
  },
  {
    name: 'Riviera Maya (Cancun to Tulum)',
    bestFor: 'Caribbean turquoise water, cenotes, Mayan ruins',
    description: 'The Caribbean coast from Cancun to Tulum has flat, calm, turquoise water ideal for swimming and snorkeling. Playa del Carmen and Tulum are the most sophisticated. Chichén Itzá is 2 hours inland. Best November–May to avoid hurricane season.',
  },
  {
    name: 'Tulum',
    bestFor: 'Bohemian eco-luxury, cenotes, spiritual wellness',
    description: 'Tulum has evolved from backpacker to genuinely extraordinary eco-luxury. The cliff-top Mayan ruins above the Caribbean, cenote swimming, and the Tulum Hotel Zone (small boutique properties with no TV, lots of candlelight) make it uniquely romantic.',
  },
  {
    name: 'San Miguel de Allende',
    bestFor: 'Colonial romance, art, non-beach luxury',
    description: 'A UNESCO World Heritage colonial city in the Guanajuato mountains — baroque church, cobblestone streets, rooftop restaurants, and a thriving arts scene. Casa de Sierra Nevada and Rosewood San Miguel de Allende are two of the finest boutique hotels in Mexico.',
  },
],
expertTips: [
  {
    tip: 'Los Cabos has virtually no hurricane risk — the Riviera Maya does',
    detail: 'If you\'re traveling June–November, Los Cabos is dramatically safer from tropical weather than any Caribbean-facing Mexican destination. Baja\'s Pacific exposure and desert landscape mean storms rarely develop here.',
  },
  {
    tip: 'The food at top Mexican resorts is genuinely extraordinary',
    detail: 'Las Ventanas al Paraíso, Nobu Los Cabos, and Casa Dragones give you fine dining that competes with the world\'s best. Do not settle for poolside quesadillas — Mexico\'s culinary scene is a genuine highlight.',
  },
  {
    tip: 'Rent a car in Los Cabos but use taxis in Tulum',
    detail: 'The Corridor between San José del Cabo and Cabo San Lucas is 20 minutes by car. Tulum\'s Hotel Zone is walkable or tuk-tuk accessible. Driving in Mexico City is not recommended for visitors.',
  },
  {
    tip: 'Book your cenote session 48h in advance',
    detail: 'The best cenotes (Dos Ojos, Gran Cenote) have limited private access slots. Morning sessions before 10am have the best light filtering through the limestone ceiling and the clearest water.',
  },
  {
    tip: 'Day of the Dead (Nov 1–2) in Oaxaca is extraordinary',
    detail: 'If your trip overlaps with Día de Muertos in Oaxaca, the cemetery vigils and marigold-covered altars are one of the most profoundly moving cultural events on earth. Hotels book out a year in advance for this period.',
  },
],
packing: [
  { item: 'Reef-safe sunscreen', why: 'Mexico passed reef-protection laws in 2021 — chemical sunscreen is banned at many cenotes and protected reefs.' },
  { item: 'Light linen clothing', why: 'The Riviera Maya humidity in summer is intense. Natural fibres are essential.' },
  { item: 'Water shoes for cenotes', why: 'Cenote entry points are often rocky and slippery. Aqua socks or reef shoes protect your feet and give grip.' },
  { item: 'Insect repellent (DEET)', why: 'The Riviera Maya jungle has mosquitoes and the occasional sand fly at dusk.' },
  { item: 'Waterproof dry bag', why: 'For cenote swimming, boat tours to El Arco, and any Riviera Maya water activity.' },
],
guide: {
  getting: 'Fly into Los Cabos International (SJD) for Baja, or Cancun International (CUN) for Riviera Maya and Tulum. From the US: direct flights from most major cities on American, Delta, United, Southwest, and Volaris. From Europe: direct from London and Madrid to Cancun on British Airways and Iberia; otherwise connect via Mexico City (MEX) or Miami. Inter-Mexico flights on Aeromexico, Volaris, and VivaAerobus.',
  where: 'Los Cabos Corridor (between San José and Cabo) for Baja desert luxury. Playa del Carmen or Akumal for Riviera Maya base. Tulum Hotel Zone for bohemian eco-luxury. San Miguel de Allende for non-beach colonial romance.',
  when: 'November–May is the safest window for both Baja and Caribbean coasts. December–March is the finest weather but the most expensive. April is excellent value. June–October on the Caribbean side carries hurricane risk — Los Cabos is safe year-round.',
},
localFood: 'Fresh-caught grilled lobster at Puerto Nuevo near Ensenada, tacos al pastor from the griddle in Los Cabos fish taco spots, ceviches and tostadas at Contramar-style restaurants, Oaxacan mole negro with turkey, and fresh guacamole made tableside at the resort. Mezcal cocktails at sunset are a Los Cabos ritual.',
currency: 'Mexican Peso (MXN) — hotels quote USD',
language: 'Spanish (English in resorts)',
timezone: 'UTC-6 (CST) / UTC-7 (MST in Baja)',
}

export default meta
