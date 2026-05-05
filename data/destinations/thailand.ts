import type { DestinationMeta } from '@/types/destination'

const meta: DestinationMeta = {
hero: '/images/hotels/amanpuri-phuket-thailand/hero.webp',
tagline: 'From Phuket\'s turquoise bays to Koh Samui\'s palms — Southeast Asia\'s ultimate luxury beach destination.',
intro: 'Thailand has been Asia\'s defining beach honeymoon destination for thirty years — and it keeps reinventing itself at the top. Phuket has world-class hotels that rival anywhere on earth (Amanpuri, Trisara, Sri Panwa) with Andaman Sea clarity and year-round warmth. Koh Samui delivers the quintessential palm-fringed luxury villa experience. Koh Phangan and Koh Lanta offer a more relaxed, wellness-focused alternative. And beyond the islands, Chiang Mai and Bangkok offer two of Asia\'s most extraordinary cities for couples who want culture alongside their beach time.',
bestTime: 'Nov–Apr',
flightFrom: '11–13h from Europe',
topExperience: 'Beach & Wellness',
perfectFor: [
  'Couples who want exceptional value — Thailand offers Maldives-level luxury at a fraction of the cost',
  'Foodies — Thai street food and fine dining are both world-class',
  'Wellness seekers — traditional Thai massage and luxury spa culture are unmatched',
  'Couples who want culture alongside beach (temples, markets, Chiang Mai elephants)',
  'Those who want variety — multiple islands, cities, and landscapes within one country',
],
skipIf: [
  'You want a purely secluded resort bubble — Thailand has significant tourist infrastructure',
  'You\'re traveling June–October and want the Andaman side (Phuket, Krabi) — it\'s their wet season',
  'You need completely English-immersed culture with no language barrier',
  'You\'re sensitive to heat and humidity — it can be intense April–May',
],
experiences: [
  {
    icon: '🏝️',
    title: 'Private Longtail Boat Island-Hop (Krabi)',
    description: 'A private longtail boat through the limestone karst islands of Phang Nga Bay — including James Bond Island, emerald caves, and hidden lagoons. The most iconic Thai seascape.',
    cost: '$150–$300 per couple (private charter)',
    tip: 'Book a private boat, not a group tour. The driver waits while you explore each island. Leave by 7am to beat the tour group boats to the famous spots.',
  },
  {
    icon: '🧘',
    title: 'Luxury Thai Spa Retreat',
    description: 'A full-day treatment at a hotel spa — traditional Thai massage, herbal compress, facial, and flower bath. The Amanpuri spa and Banyan Tree Phuket spa are genuinely among the finest in the world.',
    cost: '$200–$500 per couple',
    tip: 'Book in advance and ask for the couple\'s treatment room. Some spas (Six Senses Yao Noi) offer multi-day wellness programs that are transformative.',
  },
  {
    icon: '🐘',
    title: 'Ethical Elephant Sanctuary (Chiang Mai)',
    description: 'Spending a morning with rescued elephants at an ethical sanctuary — feeding, bathing in the river, walking through jungle. Not riding. The most profound wildlife experience in Southeast Asia.',
    cost: '$80–$150 per person',
    tip: 'Elephant Nature Park and Patara Elephant Farm are the gold standard for ethics. Avoid any sanctuary that offers riding or shows — it indicates poor welfare.',
  },
  {
    icon: '🌅',
    title: 'Phi Phi Islands Sunrise Snorkel',
    description: 'Snorkeling the crystal waters around the Phi Phi islands before the day boats arrive. The coral gardens at Hin Klang and Viking Cave are extraordinary in morning light.',
    cost: '$100–$200 per person (private charter)',
    tip: 'Phi Phi Don has a small village for evening dining. Phi Phi Leh (the uninhabited one) is where The Beach was filmed — snorkel there, don\'t hike the viewpoint at noon.',
  },
  {
    icon: '🍜',
    title: 'Cooking Class in Chiang Mai',
    description: 'A half-day market visit followed by cooking 6 authentic Thai dishes in a traditional wooden sala. You\'ll make pad thai, massaman curry, and mango sticky rice from scratch — and eat it all.',
    cost: '$50–$100 per person',
    tip: 'Zabb E Lee and Thai Farm Cooking School are the best reviewed. Book the morning session so you can eat lunch at the class and have the afternoon free.',
  },
],
months: [
  { month: 'Jan', weather: 'Dry season peak, cool and clear', emoji: '☀️', crowds: 'Peak', price: 'High', verdict: 'Perfect weather, busy and expensive' },
  { month: 'Feb', weather: 'Ideal — dry, not too hot', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Best month of the year' },
  { month: 'Mar', weather: 'Warm, still dry', emoji: '☀️', crowds: 'Moderate', price: 'Mid-high', verdict: 'Excellent, slightly quieter' },
  { month: 'Apr', weather: 'Hot, Songkran water festival', emoji: '🌤', crowds: 'Moderate', price: 'Mid', verdict: 'Songkran is magical if you\'re in it' },
  { month: 'May', weather: 'Pre-monsoon, humid, showers start', emoji: '⛅', crowds: 'Low', price: 'Low', verdict: 'Good deals, some afternoon rain' },
  { month: 'Jun', weather: 'Monsoon begins (Andaman side)', emoji: '🌧', crowds: 'Low', price: 'Lowest', verdict: 'Phuket/Krabi wet, Samui good' },
  { month: 'Jul', weather: 'Monsoon (Andaman), Samui drier', emoji: '🌧', crowds: 'Low', price: 'Low', verdict: 'Switch to Gulf side' },
  { month: 'Aug', weather: 'Similar to July', emoji: '⛅', crowds: 'Low', price: 'Low', verdict: 'Samui and Phangan best bet' },
  { month: 'Sep', weather: 'Wettest month Andaman, Samui OK', emoji: '🌧', crowds: 'Lowest', price: 'Lowest', verdict: 'Not recommended for Andaman beach' },
  { month: 'Oct', weather: 'Transition, Samui gets wetter', emoji: '⛅', crowds: 'Low', price: 'Low-mid', verdict: 'End of monsoon on Andaman side' },
  { month: 'Nov', weather: 'Dry season returns to Phuket', emoji: '🌤', crowds: 'Moderate', price: 'Mid', verdict: 'Excellent — season opens' },
  { month: 'Dec', weather: 'Peak dry season, holiday rush', emoji: '☀️', crowds: 'Peak', price: 'Very high', verdict: 'Perfect weather, book far ahead' },
],
budgetTiers: [
  {
    label: 'Affordable Luxury',
    range: '$200–$500/night',
    gets: 'Boutique pool villa hotels with exceptional service. Thailand punches far above its weight at this price point — things that would cost $1,500 in the Maldives.',
    example: 'The Naka Island (Phuket), Samui Buri Beach Resort',
  },
  {
    label: 'Premium',
    range: '$500–$1,500/night',
    gets: 'Private pool villa with butler service, full beach access, world-class spa. This is where Thailand genuinely competes with the Maldives at half the price.',
    example: 'Six Senses Yao Noi, Trisara Phuket, Four Seasons Koh Samui',
  },
  {
    label: 'Ultra-Luxury',
    range: '$1,500+/night',
    gets: 'Amanpuri-level seclusion, the finest Thai hospitality on earth, private beaches, multiple-bedroom villas. Truly among the world\'s finest resorts.',
    example: 'Amanpuri Phuket, Banyan Tree Samui (private pool villa)',
  },
],
areas: [
  {
    name: 'Phuket — West Coast (Kamala, Surin, Bang Tao)',
    bestFor: 'Best luxury resorts, most reliable Andaman weather',
    description: 'The west coast of Phuket faces the Andaman Sea and has the most consistent clear water and best sunsets. Kamala Bay (Amanpuri, Trisara) is the quietest and most exclusive. Surin and Bang Tao beaches are slightly more social. Patong is the most commercial — avoid for honeymoons.',
  },
  {
    name: 'Koh Samui',
    bestFor: 'Family and couples, Gulf of Thailand',
    description: 'The second-largest island in Thailand has excellent infrastructure, a good international airport, and some outstanding hotels (Four Seasons, Banyan Tree, Six Senses). Best weather November–April. Chaweng is the busiest beach — stay at Choeng Mon or Maenam for more seclusion.',
  },
  {
    name: 'Koh Phangan',
    bestFor: 'Wellness retreats, quieter island life',
    description: 'Famous for the Full Moon Party but increasingly known for world-class wellness retreats. Srithanu on the west coast is the wellness hub — yoga, raw food, and detox programs. The beaches on the south and east coasts are beautiful and quiet.',
  },
  {
    name: 'Krabi — Railay and Koh Lanta',
    bestFor: 'Limestone karst scenery, rock climbing, longtail boat access',
    description: 'Railay Beach is only accessible by boat — dramatic limestone cliffs, excellent snorkeling, and a relaxed atmosphere. Koh Lanta is larger, quieter, and has excellent long-stay eco-resorts. Best for couples who want natural beauty over hotel infrastructure.',
  },
  {
    name: 'Koh Phi Phi',
    bestFor: 'Young couples, most iconic Thai beach scenery',
    description: 'The twin bays of Phi Phi Don are iconic Thai scenery. Very social and popular with younger travelers. The surrounding waters have the best snorkeling in Thailand. Best for a 3–4 night stay rather than a full honeymoon base.',
  },
],
expertTips: [
  {
    tip: 'The two coasts have opposite monsoon seasons — plan accordingly',
    detail: 'The Andaman side (Phuket, Krabi, Phi Phi) is best November–April. The Gulf side (Koh Samui, Koh Phangan) is best December–September. If you\'re going in June–October, base on the Gulf side.',
  },
  {
    tip: 'Add 2 nights in Bangkok at the start of any trip',
    detail: 'Mandarin Oriental Bangkok, The Peninsula, and Capella Bangkok are three of the finest city hotels in Asia. Even if you\'re primarily beach-focused, Bangkok gives your trip a cultural dimension that enriches everything.',
  },
  {
    tip: 'Book a private boat for a full day, not a tour',
    detail: 'A private longtail or speedboat costs $150–$300 for the day and transforms your island exploration. You go where you want, stop when you want, and there are zero other tourists in your photographs.',
  },
  {
    tip: 'The spa culture is the soul of Thai luxury',
    detail: 'Don\'t treat the spa as an optional add-on. A full-day couples treatment at a top Thai spa — Thai massage, herbal compress, scrub, floral bath — is genuinely one of the finest experiences in any honeymoon destination.',
  },
  {
    tip: 'Download Google Translate with Thai offline',
    detail: 'Outside tourist areas, very little English is spoken. The camera translation feature translates menus in real-time and is genuinely useful for finding the authentic local restaurant over the tourist trap.',
  },
],
packing: [
  { item: 'Light linen or cotton clothing', why: 'Humidity is extreme — synthetic fabrics become unbearable. Light natural fibres breathe correctly.' },
  { item: 'Reef-safe sunscreen', why: 'Thailand\'s coral reefs are under severe pressure. Mineral sunscreen is the ethical choice.' },
  { item: 'Anti-mosquito spray (DEET)', why: 'Dengue fever is present — DEET-based repellent for evenings near vegetation is non-negotiable.' },
  { item: 'Modest cover-up for temples', why: 'Shoulders and knees must be covered at Wat Phra Kaew (Bangkok) and most Buddhist temples. A light scarf solves this.' },
  { item: 'Waterproof sandals', why: 'Longtail boat boarding involves stepping through shallow water. Reef-safe sandals protect your feet and don\'t mind getting wet.' },
],
guide: {
  getting: 'Fly into Phuket International (HKT) for Andaman side, or Bangkok Suvarnabhumi (BKK) then connect to Samui (USM) on Bangkok Airways for the Gulf side. From Europe: direct flights to Phuket from London, Frankfurt, and Paris. From the US: connect via Bangkok, Singapore, or Hong Kong. Domestic connections on Bangkok Airways, Thai AirAsia, and Nok Air.',
  where: 'Phuket west coast (Kamala, Surin, Bang Tao) for Andaman luxury. Koh Samui for Gulf of Thailand couples resort experience. Six Senses Yao Noi (between Phuket and Krabi, accessed by speedboat) for the most spectacular setting in Thailand.',
  when: 'November–April is dry season on the Andaman side and the safest choice for a honeymoon. December–March is the driest and most expensive. April is excellent value with fewer crowds. May–October on the Andaman side brings the monsoon — switch to the Gulf coast or embrace the green season discounts.',
},
localFood: 'Massaman curry with beef and peanuts at a Phuket Muslim restaurant, fresh pad thai from a street cart in Koh Samui night market, grilled tiger prawns with nam jim sauce, mango sticky rice with coconut cream, and tom kha gai (coconut galangal chicken soup). Street food in Thailand is genuinely the best food in Asia at the lowest prices.',
currency: 'Thai Baht (THB)',
language: 'Thai (English in tourist areas)',
timezone: 'UTC+7',
}

export default meta
