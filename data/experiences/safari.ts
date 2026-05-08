import type { ExperienceMeta } from '@/types/experience'

const meta: ExperienceMeta = {
  label: 'Safari Honeymoons',
  tagline: 'The most unforgettable shared experience in travel',
  hero: '/images/hotels/singita-grumeti-tanzania/hero.webp',
  intro: 'A safari honeymoon occupies a category of its own. No other honeymoon type creates the same depth of shared experience — watching lions hunt at dawn, the Great Migration crossing the Mara River, the Milky Way over the Serengeti unobstructed by light pollution, the silence of the bush at 11pm. Paired with the extraordinary luxury of top African lodges, the safari honeymoon consistently ranks as the most memorable travel experience couples have ever had.',
  stats: [
    { icon: '🦁', value: '1', label: 'Scored Properties' },
    { icon: '💰', value: '$800–$5,000', label: 'Per Night Range' },
    { icon: '📍', value: '4', label: 'Safari Countries' },
    { icon: '🌍', value: '88/100', label: 'Avg Honeymoon Score' },
  ],
  perfectFor: [
    'Couples who want the most memorable shared experience in travel',
    'Those who value genuine disconnection — no signal is a feature, not a bug',
    'Couples comfortable with early mornings (5:30am game drives)',
    'Anyone wanting to combine adventure with extreme luxury',
    'Couples who would pair a safari with a beach stay (Zanzibar, Seychelles)',
  ],
  skipIf: [
    'You dislike early mornings — game drives leave at 5:30am daily',
    'You are sensitive to insects, dust, or heat',
    'Budget under $600/night — below this, the lodge quality drops significantly',
    'You need Wi-Fi at all times — private concessions have no signal by design',
  ],
  reasons: [
    { title: 'Shared experience unlike anything else', desc: 'Nothing bonds two people like encountering wildlife together. The moment you see your first lion, your first elephant herd, your first Great Migration crossing — these become permanent reference points in your relationship. Couples who have done it report it as transformational, not just memorable.' },
    { title: 'Genuine, enforced disconnection', desc: 'Private concessions have no Wi-Fi in rooms, no phone signal. The disconnection is not a policy — it is the landscape. You have no choice but to be present with each other, sunrise to sunset. This is increasingly rare and genuinely valuable.' },
    { title: 'The contrast is the experience', desc: 'The 5:30am game drive in an open vehicle, wind in your face, surrounded by Africa — then returning to a butler, a cellar of South African wine, an outdoor bathtub overlooking the plains, and a canopied bed under stars. The contrast between wilderness and luxury is intoxicating.' },
    { title: 'The Milky Way overhead', desc: 'Private concessions are 50–100km from the nearest town light. The night sky is a different object here. Sleeping under canvas with the sound of distant elephants and the full arc of the Milky Way overhead is an experience unavailable anywhere else at any price.' },
    { title: 'The logistics are taken care of', desc: 'Top-tier safari companies handle every detail — charter flights, bush dinners, sundowners in impossible locations, surprise picnics in the bush. The planning infrastructure of a great safari lodge is the hidden luxury. You make zero decisions.' },
  ],
  destinations: [
    { name: 'Tanzania — Serengeti', slug: 'tanzania', why: 'The Great Migration, private concessions with near-zero other-vehicle density, most romantic top-tier lodges (Singita, andBeyond, Four Seasons). The standard for safari excellence.', budget: '$1,000–$5,000/night', bestFor: 'The Migration, ultimate luxury, romance' },
    { name: 'Masai Mara (Kenya)', slug: 'kenya', why: 'Same ecosystem as Serengeti, slightly more accessible from Europe. Migration river crossings July–October. Camp-style luxury with views directly onto the Mara plains.', budget: '$500–$3,000/night', bestFor: 'Shorter flight, river crossings, culture' },
    { name: 'Sabi Sands (South Africa)', slug: 'south-africa', why: 'Malaria-free options available. Big 5 sightings almost guaranteed. 2.5-hour flight from Johannesburg (international hub). Excellent private game reserves.', budget: '$400–$2,000/night', bestFor: 'No malaria option, European accessibility, Big 5 certainty' },
    { name: 'Okavango Delta (Botswana)', slug: 'botswana', why: 'Water-based safari — mokoro canoes through lily-pad channels. Exceptionally low tourist density. Among the most exclusive safari experiences in the world.', budget: '$1,200–$6,000/night', bestFor: 'Ultra-exclusive, water-based safari, lowest crowds' },
  ],
  months: [
    { month: 'Jan', emoji: '🌿', verdict: 'Good', note: 'Calving season Serengeti — predator action peaks. Short rains over. Good value.' },
    { month: 'Feb', emoji: '🌿', verdict: 'Good', note: 'Peak calving. Ngorongoro excellent. Fewer tourists than peak season.' },
    { month: 'Mar', emoji: '🌧️', verdict: 'Avoid', note: 'Long rains begin. Roads difficult. Some lodges close. Not recommended.' },
    { month: 'Apr', emoji: '🌧️', verdict: 'Avoid', note: 'Long rains peak. Access difficult in Serengeti. Best avoided.' },
    { month: 'May', emoji: '🌦️', verdict: 'Shoulder', note: 'Rains ending. Lush green landscape. Very few tourists. Significant discounts.' },
    { month: 'Jun', emoji: '☀️', verdict: 'Peak', note: 'Dry season begins. Wildebeest moving north. Excellent predator activity.' },
    { month: 'Jul', emoji: '🌊', verdict: 'Peak', note: 'Great Migration river crossings begin (Mara River). The bucket-list moment. Book 18+ months ahead.' },
    { month: 'Aug', emoji: '🌊', verdict: 'Peak', note: 'Peak migration. Highest prices. Most dramatic crossings. Extraordinary.' },
    { month: 'Sep', emoji: '☀️', verdict: 'Peak', note: 'Migration crossing continues. Slightly fewer tourists than August. Still book far ahead.' },
    { month: 'Oct', emoji: '🌤️', verdict: 'Good', note: 'Migration returning south. Excellent game viewing. Short rains may start late month.' },
    { month: 'Nov', emoji: '🌦️', verdict: 'Shoulder', note: 'Short rains. Green and beautiful. Newborn animals. Good value, fewer tourists.' },
    { month: 'Dec', emoji: '🌿', verdict: 'Good', note: 'Short rains end. Christmas bookings very expensive top lodges. Beautiful light.' },
  ],
  budgetTiers: [
    { tier: 'Entry', range: '$400–$800 pppn', desc: 'Mid-range tented camps with good game viewing. National park (not private concession), so other vehicles at sightings. Still extraordinary wildlife. No night drives.', hotels: 'Various &Beyond and Sanctuary camps' },
    { tier: 'Premium', range: '$800–$2,000 pppn', desc: 'Private concession access. Night drives and off-road. High staff-to-guest ratio. Excellent food and wine. The sweet spot for a honeymoon safari — full experience without ultra-tier pricing.', hotels: 'Singita Grumeti, andBeyond Ngorongoro Crater' },
    { tier: 'Ultra', range: '$2,000–$6,000 pppn', desc: 'Exclusive-use possible. Singita lodges. Aman in the Serengeti. The most extraordinary lodges in the world, in the most extraordinary landscapes. All-inclusive including helicopter transfers.', hotels: 'Singita Sasakwa, Singita Mara, Aman Serengeti' },
  ],
  checklist: [
    { title: 'Essential planning', items: ['Book flights first — charter flights in East Africa are complex and expensive', 'Confirm malaria prophylaxis with your doctor 6 weeks before travel', 'Pack neutral-coloured clothing (khaki, olive, beige) — bright colours disturb wildlife', 'Bring a dust bag for your camera equipment', 'Travel insurance with emergency evacuation coverage is non-negotiable in the Serengeti'] },
    { title: 'At the lodge', items: ['Ask for your guide by name on return drives (chemistry matters enormously)', 'Request a bush dinner or sundowners "in the bush" — great lodges organise this routinely', 'Keep room flaps/canvas closed during the day to prevent vervet monkey raids', 'Wake up for the night sounds around 1am — you will hear hyena, lion, and elephant', 'Tip your guide: USD $15–30/day is standard at top lodges'] },
  ],
  expertTips: [
    'Combine 4 nights Serengeti + 4 nights Zanzibar for the classic Tanzania honeymoon. Safari first (energy-intensive), beach second (recovery). The contrast — dust and acacia trees to white sand and turquoise water — is perfect. Book a charter through Kilimanjaro to Zanzibar.',
    'Private concessions cost 30–50% more than national park camps but deliver a fundamentally different experience: no other vehicles at sightings, night drives, walking safaris, off-road tracking. For a honeymoon safari, this difference justifies the premium completely.',
    'The migration river crossings (July–October) are the peak experience but not the only remarkable thing. February calving season offers predator density that rivals the migration — at lower prices and with fewer tourists. January–February is underrated for couples on a safari budget.',
    'Packing for safari: bring one light merino wool layer for morning drives (5:30am can be cold even in July). High SPF SPF. Dust-sealed camera bag. Avoid perfume and strong scents near wildlife. Leave valuables at the lodge safe.',
    'Tell your lodge exactly what you want the trip to mean. The best lodges (Singita, andBeyond) can organise a candlelit bush dinner under the stars, a private sundowner on a kopje, a dawn champagne breakfast with the plains to yourselves. None of this is mentioned in brochures — you must ask.',
  ],
  faqs: [
    { q: 'What is the best time for a Serengeti honeymoon safari?', a: 'July–October for the Great Migration river crossings — the most dramatic wildlife event on earth. January–February for calving season and peak predator activity. The Serengeti has excellent game year-round — no truly bad month exists, only wet-season access issues (March–April).' },
    { q: 'Is a safari honeymoon romantic if you are not interested in wildlife?', a: 'Universally yes, based on every couple we have interviewed. The romance of a top safari lodge — the candlelit dinners under stars, the sundowner in the bush with a cold gin, the Milky Way visible from your outdoor bath — transcends wildlife interest. The game viewing is a bonus, not the prerequisite.' },
    { q: 'Should you book a safari honeymoon through a specialist or direct?', a: 'Through a specialist for East Africa, always. The charter flight logistics, permit system, and lodge combination planning are complex. A good specialist adds significant value at no extra cost (they receive commission from lodges). Use specialists like Ker & Downey, Micato, or Expert Africa.' },
    { q: 'What vaccinations do you need for a Serengeti safari?', a: 'Yellow fever (required entry for Tanzania), typhoid (recommended), hepatitis A (recommended), and malaria prophylaxis (essential). Consult a travel medicine clinic 8 weeks before departure. Most antimalarials need to start 2 weeks before travel.' },
  ],
  related: ['luxury', 'beach'],
}

export default meta
