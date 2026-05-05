import type { DestinationMeta } from '@/types/destination'

const meta: DestinationMeta = {
hero: '/images/hotels/aman-kyoto-japan/hero.webp',
tagline: 'Cherry blossoms, private onsen, and ryokan dinners — the world\'s most refined honeymoon culture.',
intro: 'Japan rewards honeymooners with an extraordinary paradox: simultaneously the most ancient and most modern destination on earth. In Kyoto, paper-screened ryokan rooms overlook moss gardens unchanged for 400 years. In Tokyo, Michelin-starred restaurants occupy tower floors above neon streets. In Hakone, private onsen baths with direct views of Mount Fuji provide the single most romantic morning in Asia. No destination balances cultural depth, culinary excellence, natural beauty, and genuine luxury hospitality quite like Japan.',
bestTime: 'Mar–Apr (cherry blossoms) & Nov (autumn foliage)',
flightFrom: '12–14h from Europe',
topExperience: 'Ryokan & Onsen Romance',
perfectFor: [
  'Couples who want cultural depth alongside world-class luxury',
  'Food-obsessed travellers — Japan has more Michelin stars than any country on earth',
  'Cherry blossom romantics — the sakura experience is genuinely life-changing',
  'Those wanting a mix of ancient temples and hyper-modern city energy',
  'Honeymooners seeking ryokan hospitality — the most attentive service in the world',
],
skipIf: [
  'You want a beach-and-pool relaxation holiday — Japan is active and stimulating',
  'Navigating a non-English country feels stressful — signage is challenging outside big cities',
  'Your budget is extremely tight — top ryokan charge $600–$2,000+ per night',
  'You need nightlife until 4am — Kyoto quiets down early',
],
experiences: [
  {
    icon: '♨️',
    title: 'Private Onsen at Dawn',
    description: 'Reserve a private rotenburo (outdoor hot spring bath) at your ryokan for 6am. Steam rising from mineral water, pine trees framing the view, total silence. The most intimate 45 minutes in Japan.',
    cost: 'Often included at top ryokan; private slot $30–$80 extra',
    tip: 'Book the dawn slot at check-in — it fills by afternoon. The mineral water is richest in the morning.',
  },
  {
    icon: '🌸',
    title: 'Arashiyama Dawn Walk',
    description: 'Kyoto\'s bamboo grove and Togetsukyo bridge at 6am before tour groups arrive. In late March the Nakanoshima park fills with cherry blossoms reflected in the Katsura River.',
    cost: 'Free',
    tip: 'Walk from your ryokan if staying in Arashiyama. Take a rickshaw back — drivers know the best secondary paths.',
  },
  {
    icon: '🍱',
    title: 'Kaiseki Dinner in Your Tatami Room',
    description: 'A 12-course seasonal Japanese dinner served in your room by a dedicated attendant. Every dish is a miniature artwork timed to the season. The sake pairing transforms it into a 3-hour ceremony.',
    cost: 'Included in most top ryokan rates ($300–$600 value)',
    tip: 'Notify the ryokan of dietary requirements 48h ahead. Wagyu courses can usually be added for $80–$120.',
  },
  {
    icon: '🗻',
    title: 'Mount Fuji View from Hakone',
    description: 'From Hakone\'s onsen ridge on a clear morning, Fuji rises perfectly symmetrical above Lake Ashi. Pair with the Hakone Open Air Museum and a ryokan with a Fuji-facing private bath.',
    cost: 'Day trip from Tokyo $80–$200 including transport; Hakone ryokan from $400/night',
    tip: 'Fuji is clearest in winter and early spring. October–March gives best visibility. Summer brings heavy cloud cover.',
  },
  {
    icon: '🏮',
    title: 'Gion Evening Stroll',
    description: 'Kyoto\'s geisha district at dusk — wooden machiya townhouses, stone-paved Hanamikoji Street, paper lanterns. If you\'re lucky, you\'ll glimpse a geiko or maiko hurrying to an engagement.',
    cost: 'Free to walk; dinner at a Gion kaiseki restaurant $150–$400pp',
    tip: 'Visit on a weekday. Don\'t photograph geisha without permission. Stay north of Shijo Street for the most authentic atmosphere.',
  },
],
months: [
  { month: 'Jan', weather: 'Cold, dry, crystal clear skies', emoji: '❄️', crowds: 'Low', price: 'Low', verdict: 'Best Fuji views, peaceful temples' },
  { month: 'Feb', weather: 'Coldest month, plum blossoms start', emoji: '❄️', crowds: 'Low', price: 'Low', verdict: 'Quiet and beautiful plum season' },
  { month: 'Mar', weather: 'Warming, cherry blossoms late month', emoji: '🌸', crowds: 'High', price: 'High', verdict: 'Magical if timing is right' },
  { month: 'Apr', weather: 'Cherry blossom peak, warm spring', emoji: '🌸', crowds: 'Peak', price: 'Highest', verdict: 'Most romantic — book a year ahead' },
  { month: 'May', weather: 'Warm, fresh green, Golden Week busy', emoji: '🌿', crowds: 'High', price: 'High', verdict: 'Beautiful but Golden Week is chaotic' },
  { month: 'Jun', weather: 'Rainy season (tsuyu) begins', emoji: '🌧', crowds: 'Low', price: 'Low-mid', verdict: 'Good deals, hydrangeas bloom' },
  { month: 'Jul', weather: 'Hot, humid, rainy season ends', emoji: '☀️', crowds: 'Moderate', price: 'Mid', verdict: 'Festivals and fireworks, but hot' },
  { month: 'Aug', weather: 'Very hot and humid', emoji: '🥵', crowds: 'High', price: 'High', verdict: 'Obon festivals beautiful, heat is real' },
  { month: 'Sep', weather: 'Cooling, some typhoon risk', emoji: '🌀', crowds: 'Low', price: 'Low-mid', verdict: 'Good value, minor typhoon risk' },
  { month: 'Oct', weather: 'Perfect autumn weather', emoji: '🍂', crowds: 'Moderate', price: 'Mid-high', verdict: 'Excellent shoulder season' },
  { month: 'Nov', weather: 'Autumn foliage peak, stunning', emoji: '🍁', crowds: 'Peak', price: 'Highest', verdict: 'As magical as cherry blossom season' },
  { month: 'Dec', weather: 'Cool to cold, festive, uncrowded', emoji: '⛩️', crowds: 'Low', price: 'Mid', verdict: 'Underrated — quiet and beautiful' },
],
budgetTiers: [
  {
    label: 'Boutique & Business Hotels',
    range: '$200–$500/night',
    gets: 'Quality hotel with excellent location. Good service, no tatami ryokan experience. Perfect Tokyo base.',
    example: 'Hyatt Regency Kyoto, Park Hotel Tokyo, Trunk Hotel Shibuya',
  },
  {
    label: 'Premium Ryokan & City Luxury',
    range: '$500–$1,200/night',
    gets: 'Traditional ryokan with tatami rooms, kaiseki dinner, private onsen access. The authentic Japan honeymoon.',
    example: 'Hoshinoya Kyoto, Gora Kadan Hakone, Palace Hotel Tokyo',
  },
  {
    label: 'Ultra-Luxury Ryokan',
    range: '$1,200–$2,500+/night',
    gets: 'Private villa ryokan, in-room kaiseki, dedicated attendant, private outdoor onsen. The pinnacle of Japanese hospitality.',
    example: 'Aman Kyoto, Suiran Kyoto, Beniya Mukayu Kanazawa',
  },
],
areas: [
  {
    name: 'Kyoto',
    bestFor: 'Temples, ryokan, geisha culture',
    description: 'The cultural heart of Japan. Stay in Arashiyama or Higashiyama for ryokan immersion. Three nights minimum; five is better. Avoid the station area entirely for romance.',
  },
  {
    name: 'Tokyo',
    bestFor: 'City glamour, food, Michelin dining',
    description: 'Two to three nights adds electric contrast to Kyoto\'s serenity. Shinjuku, Ginza, and Yanaka offer completely different energy. The food scene alone justifies the stop.',
  },
  {
    name: 'Hakone',
    bestFor: 'Mount Fuji views, onsen',
    description: 'One to two nights between Tokyo and Kyoto. The classic ryokan onsen experience with Japan\'s most iconic mountain as backdrop. Clear winter mornings are breathtaking.',
  },
  {
    name: 'Nara',
    bestFor: 'Ancient temples, deer park',
    description: 'A half-day from Kyoto. Deer roam freely among 8th-century temples. Todai-ji\'s Great Buddha is Japan\'s largest. Gentle, meditative pace — perfect mid-trip breathing space.',
  },
  {
    name: 'Osaka',
    bestFor: 'Street food, energy, Dotonbori',
    description: 'Japan\'s culinary capital. Add one night before flying out. Takoyaki, ramen, kushikatsu — the most indulgent final dinner in the country.',
  },
],
expertTips: [
  {
    tip: 'Buy a 7-day JR Pass before leaving home',
    detail: 'The JR Pass covers all Shinkansen bullet train travel and is only available to tourists purchasing outside Japan. Tokyo–Kyoto return alone costs more than the pass.',
  },
  {
    tip: 'Book ryokan 3–6 months ahead for cherry blossom season',
    detail: 'Top properties in Kyoto and Hakone during late March–early April sell out within hours of availability opening. Book the day dates become available.',
  },
  {
    tip: 'Get a pocket WiFi at the airport',
    detail: 'Japan\'s public WiFi is unreliable. A pocket WiFi rental ($5–$8/day) gives unlimited data for maps, translations, and restaurant bookings. Essential for independent navigation.',
  },
  {
    tip: 'Carry cash — Japan is still largely cash-based',
    detail: 'Many ryokan, temples, and street vendors are cash-only. Withdraw ¥50,000–¥100,000 from 7-Eleven ATMs on arrival — they reliably accept foreign cards.',
  },
  {
    tip: 'The ryokan rhythm is everything — commit to it',
    detail: 'Check in by 3pm, bathe before dinner, wear the yukata all evening, sleep early, bathe again at dawn. The ryokan experience only works if you surrender to the pace.',
  },
],
packing: [
  { item: 'Slip-on shoes', why: 'You remove shoes dozens of times daily at temples, ryokan, and restaurants. Laces become maddening by day two.' },
  { item: 'Lightweight layers', why: 'Japan\'s indoor heating and cooling is aggressive. Temples are unheated in winter. Summers are tropical. Layer constantly.' },
  { item: 'IC Card (Suica or Pasmo)', why: 'Load ¥5,000 on arrival at any station. Works on every metro, bus, and most convenience stores. Faster than buying individual tickets.' },
  { item: 'Compact umbrella', why: 'Japan has frequent brief rain showers year-round. As essential as your phone.' },
  { item: 'Small day backpack', why: 'Japan\'s streets and transport reward compact luggage. A small pack for daily sightseeing avoids left-luggage hassles.' },
],
guide: {
  getting: 'Fly to Tokyo Narita (NRT) or Haneda (HND) — Haneda is closer to the city. From London: direct on JAL/ANA/BA (12h). From Europe: connections via Amsterdam, Paris, Frankfurt (13–14h total). From the US: direct from LAX, SFO, JFK (11–14h). Take the Narita Express ($30) or Limousine Bus to your hotel. Tokyo to Kyoto: Shinkansen Nozomi (2h15m, ~$130 each way) — book seats in advance.',
  where: 'Kyoto: stay in Arashiyama (most serene) or Higashiyama (most central to temples). Tokyo: Shinjuku or Ginza for luxury; Aoyama for boutique style. Hakone: anywhere on the Kowakidani ridge. Classic itinerary: 2 nights Tokyo → 1 night Hakone → 3 nights Kyoto → 1 night Osaka.',
  when: 'Cherry blossom (late March–early April) is magical but peak-priced. Autumn foliage (mid-November) is equally beautiful with slightly fewer crowds. May is underrated — fresh green, warm, past the main rush. December is peaceful and atmospheric. Avoid Golden Week (late April–early May) and Obon (mid-August) unless booking far in advance.',
},
localFood: 'Kaiseki (Japan\'s haute cuisine — a seasonal 10+ course ceremony), ramen in a tiny 8-seat basement shop, Kyoto obanzai (small seasonal dishes of pickles, tofu, and grilled fish), Osaka takoyaki and okonomiyaki, wagyu beef sukiyaki in a Ginza specialist, matcha everything in Uji near Kyoto. Japan has more Michelin-starred restaurants than France. Even a ¥700 convenience store onigiri is transcendent.',
currency: 'Japanese Yen (JPY) — largely cash economy; cards accepted at hotels',
language: 'Japanese. English spoken in tourist areas; Google Translate camera mode is essential elsewhere.',
timezone: 'UTC+9 (Japan Standard Time)',
}

export default meta
