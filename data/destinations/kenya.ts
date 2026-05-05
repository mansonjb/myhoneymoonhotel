import type { DestinationMeta } from '@/types/destination'

const meta: DestinationMeta = {
hero: '/images/hotels/angama-mara-kenya/hero.webp',
tagline: 'The Great Migration, Big Five safaris, and some of the world\'s most romantic tented camps.',
intro: 'Kenya is where the modern luxury safari was invented and where it is still perfected. The Maasai Mara\'s endless plains host the greatest wildlife show on earth — 1.5 million wildebeest crossing the Mara River each year — while private conservancies around Laikipia offer intimate, exclusive encounters with elephant, lion, and rhino without another vehicle in sight. Stay in a tented camp where the canvas walls let in the sound of lions calling at 3am, watch the sunrise over the escarpment with a hot coffee, and sit around the campfire telling stories under the most star-dense sky you\'ve ever seen. This is adventure, romance, and wildness in equal measure.',
bestTime: 'Jul–Oct & Jan–Feb',
flightFrom: '8–10h from Europe',
topExperience: 'Luxury Safari',
perfectFor: [
  'Wildlife obsessives — Kenya\'s Maasai Mara is the finest Big Five destination on earth',
  'Couples who want intimate luxury: candlelit bush dinners, private game drives at dawn',
  'Adventure-seeking honeymooners willing to trade beaches for something extraordinary',
  'Photography couples — the light on the Mara plains at golden hour is unlike anywhere',
  'Those who want to combine safari with Zanzibar or Diani Beach for the ultimate Africa honeymoon',
],
skipIf: [
  'A beach is non-negotiable — Kenya is landlocked safari territory (though the coast exists)',
  'Budget is under $500/night — luxury tented camps are genuinely expensive and worth it',
  'You prefer urban exploration, shopping, and restaurant variety over wilderness',
  'Dust, insects, and pre-dawn wake-up calls aren\'t your idea of a honeymoon',
],
experiences: [
  {
    icon: '🦁',
    title: 'Private Dawn Game Drive, Maasai Mara',
    description: 'Leave camp at first light with your own guide and vehicle — no shared jeeps, no crowds. Watch lion cubs play in the golden hour light, elephants at the waterhole, and cheetah on the hunt. The private conservancies outside the main reserve allow off-road driving.',
    cost: 'Included in most luxury camp rates',
    tip: 'Book a private conservancy camp rather than inside the reserve — you get off-road access, night drives, and walking safaris that are banned in the National Reserve.',
  },
  {
    icon: '🌅',
    title: 'Hot Air Balloon over the Mara',
    description: 'An hour floating over the savannah at sunrise as herds of wildebeest move below you in silence. Champagne breakfast on the plains after landing. One of Africa\'s definitive experiences — the scale of the migration seen from above is incomprehensible.',
    cost: '$450–$650 per person',
    tip: 'Book directly with Governors\' Balloon Safaris or Kichwa Tembo Balloon Safaris — they have the best safety record and the most experienced pilots.',
  },
  {
    icon: '🚶',
    title: 'Bush Walk with Maasai Guide',
    description: 'A 2–3 hour walk with a Maasai warrior guide who reads the landscape — tracking animal signs, identifying plants, and explaining how his people have lived alongside lions for centuries. Ground-level Kenya is completely different from the vehicle.',
    cost: '$80–$150 per couple',
    tip: 'Request a young Maasai guide who also speaks good English — the combination of traditional knowledge and modern communication makes for extraordinary conversation.',
  },
  {
    icon: '🐘',
    title: 'Amboseli at Sunrise with Kilimanjaro',
    description: 'The image that defines Kenya: a hundred elephants grazing against the white mass of Kilimanjaro at dawn. Amboseli National Park has the highest density of elephants in East Africa and the mountain is visible on clear mornings from October to March.',
    cost: 'Included in camp rates — fly from Nairobi Wilson ($80–$150)',
    tip: 'Stay at Tortilis Camp or Tawi Lodge — both have extraordinary Kilimanjaro-facing views. Book October–February for the clearest mountain visibility.',
  },
  {
    icon: '🍷',
    title: 'Sundowner Drinks on the Escarpment',
    description: 'At 6pm, your guide drives to the Oloololo Escarpment — the edge of the Rift Valley — and pops champagne as the sun drops behind the horizon. Below you, 50km of Mara plains glow amber. Hippos grunt from the river. This moment is why people come to Kenya.',
    cost: 'Included at Angama Mara and most top camps',
    tip: 'Angama Mara\'s terrace sundowners from the camp itself are equally spectacular — ask for the table closest to the glass edge.',
  },
],
months: [
  { month: 'Jan', weather: 'Dry and warm, excellent', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Peak quality, very good' },
  { month: 'Feb', weather: 'Dry, hot, superb wildlife', emoji: '☀️', crowds: 'Moderate', price: 'Mid-high', verdict: 'Best value peak month' },
  { month: 'Mar', weather: 'Long rains approaching', emoji: '⛅', crowds: 'Low', price: 'Mid', verdict: 'Good deals, slight risk' },
  { month: 'Apr', weather: 'Long rains, heavy', emoji: '🌧', crowds: 'Very low', price: 'Lowest', verdict: 'Avoid — most camps close' },
  { month: 'May', weather: 'Still raining, lush and green', emoji: '🌦', crowds: 'Very low', price: 'Very low', verdict: 'Many camps closed' },
  { month: 'Jun', weather: 'Drying out, migration arriving', emoji: '🌤', crowds: 'Moderate', price: 'Mid', verdict: 'Migration builds — good value' },
  { month: 'Jul', weather: 'Dry, Great Migration peaks', emoji: '☀️', crowds: 'Peak', price: 'Highest', verdict: 'Greatest show on earth' },
  { month: 'Aug', weather: 'Dry, peak river crossings', emoji: '☀️', crowds: 'Peak', price: 'Highest', verdict: 'Most dramatic migration' },
  { month: 'Sep', weather: 'Dry, migration still present', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Excellent, slightly fewer crowds' },
  { month: 'Oct', weather: 'Short rains starting', emoji: '⛅', crowds: 'Moderate', price: 'Mid', verdict: 'Good wildlife, lower prices' },
  { month: 'Nov', weather: 'Short rains, lush landscape', emoji: '🌦', crowds: 'Low', price: 'Low-mid', verdict: 'Beautiful green Mara, good deals' },
  { month: 'Dec', weather: 'Dry again, festive season', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Excellent, book a year ahead' },
],
budgetTiers: [
  {
    label: 'Mid-Range Safari',
    range: '$350–$600/night all-inclusive',
    gets: 'Comfortable tented camp, shared game drives, full board. Great wildlife access — many excellent Mara camps at this level.',
    example: 'Mara Intrepids, Basecamp Masai Mara, Porini Lion Camp',
  },
  {
    label: 'Luxury Tented Camp',
    range: '$600–$1,500/night all-inclusive',
    gets: 'Private tented suite, en-suite bathroom, private deck, bush dinners, top guides, all activities included. The definitive Kenya honeymoon.',
    example: 'Angama Mara, Kichwa Tembo, Cottar\'s 1920s Camp',
  },
  {
    label: 'Ultra-Private Conservancy',
    range: '$1,500–$4,000+/night all-inclusive',
    gets: 'Exclusive private conservancy, no shared drives, night safaris, walking safaris with armed rangers, private guides. Absolute seclusion in the bush.',
    example: 'Ol Pejeta House, Solio Lodge, Lewa House',
  },
],
areas: [
  {
    name: 'Maasai Mara',
    bestFor: 'Great Migration, Big Five, classic safari',
    description: 'Kenya\'s most famous reserve — and the world\'s finest Big Five destination during the July–October migration. The private conservancies bordering the main reserve (Olare Motorogi, Mara North, Naboisho) offer far more exclusive experiences with off-road driving and fewer vehicles.',
  },
  {
    name: 'Amboseli',
    bestFor: 'Elephants and Kilimanjaro views',
    description: 'Best known for its extraordinary elephant population (200+ individuals, studied for 50 years) and the iconic view of Kilimanjaro rising behind the herds. Smaller and more intimate than the Mara. Best in the dry season when elephants congregate around the springs.',
  },
  {
    name: 'Laikipia Plateau',
    bestFor: 'Private conservancies, rhino, exclusivity',
    description: 'A private plateau north of Mount Kenya with some of Africa\'s finest private conservancies — Ol Pejeta, Lewa, Solio, and Borana. Kenya\'s last healthy black rhino populations live here. No mass tourism — these are truly exclusive, intimate experiences with tiny guest numbers.',
  },
  {
    name: 'Samburu',
    bestFor: 'Northern specialist species',
    description: 'The arid north offers species you won\'t see in the Mara: the reticulated giraffe, Grevy\'s zebra, beisa oryx, Somali ostrich, and gerenuk. Extraordinarily beautiful dry landscape. Combine with the Mara for the full Kenya wildlife picture.',
  },
],
expertTips: [
  {
    tip: 'Book private conservancy camps, not the main reserve',
    detail: 'The Maasai Mara National Reserve is crowded — 50 vehicles around every lion kill in high season. The private conservancies outside the park boundary offer the same wildlife with a fraction of the vehicles, plus night drives and walking safaris. Pay the premium.',
  },
  {
    tip: 'Fly between parks — never drive',
    detail: 'Kenya\'s roads are brutal. Nairobi to the Mara by road is 5–6 hours on terrible tarmac. By light aircraft from Wilson Airport: 45 minutes over the Rift Valley with views of the escarpment. All luxury camp rates include or arrange airstrips transfers.',
  },
  {
    tip: 'Time the migration with flexibility',
    detail: 'The Great Migration is not a fixed calendar event — herds can cross the Mara River between July and October, but the timing varies by year. Book July–September for the highest probability. Trust your camp manager\'s real-time intelligence over fixed itineraries.',
  },
  {
    tip: 'Pack a down jacket for early mornings',
    detail: 'Dawn game drives in June–August start at 5:30am and the open-sided vehicles move at speed — it is genuinely cold on the Mara plains at altitude. Most guests underpack warm layers and shiver through their best wildlife sightings. Bring more layers than you think.',
  },
  {
    tip: 'Add a Zanzibar extension',
    detail: 'Nairobi to Zanzibar is 90 minutes by prop plane (or 2h via Dar es Salaam). The combination of 5 nights Kenya safari + 5 nights Zanzibar beach is one of the world\'s great honeymoon itineraries — culture, wildlife, and Indian Ocean in one trip.',
  },
],
packing: [
  { item: 'Neutral safari colours (khaki, olive, tan)', why: 'Dark colours attract tsetse flies; white spooks animals — the dress code is practical not aesthetic' },
  { item: 'Binoculars (10x42)', why: 'Non-negotiable on safari — even the best guides can\'t get you close enough to see detail without them' },
  { item: 'Down jacket or fleece', why: 'Dawn drives at 5:30am at altitude are genuinely cold — pack more warmth than you think you\'ll need' },
  { item: 'Dust-proof camera bag', why: 'The Mara dusty season coats everything — a sealed bag protects lenses between game drives' },
  { item: 'Yellow fever vaccination certificate', why: 'Required for entry if arriving from certain countries — check requirements and carry the physical card' },
],
guide: {
  getting: 'Fly into Nairobi Jomo Kenyatta International (NBO) — well-served from Europe with KLM (Amsterdam, 8.5h direct), British Airways (London, 8.5h direct), Ethiopian Airlines (Addis Ababa), and Kenya Airways. From NBO, transfer to Wilson Airport (30 min) for light aircraft to bush airstrips. Most luxury camps meet you at Wilson. Internal flights run multiple times daily to all major parks ($80–$200 each way). Do not attempt to drive between parks — fly.',
  where: 'First-time: Maasai Mara private conservancy (Olare Motorogi or Mara North) for 4 nights. Add-on: Amboseli (2 nights) for elephants and Kilimanjaro. Extended: add Laikipia (2 nights) for rhino and exclusivity. Top camps: Angama Mara (best views), Cottar\'s 1920s Camp (most romantic), Sanctuary Olonana (river location). All are all-inclusive — no surprise extras.',
  when: 'July–October for the Great Migration river crossings — the peak wildlife experience. January–February for dry season clarity, excellent predator action, and lower prices than peak. March and November are shoulder months with good wildlife and fewer tourists. Avoid April–May (long rains — many camps close).',
},
localFood: 'Nyama choma (roasted goat or beef) at a local butchery restaurant, ugali (maize flour porridge) with sukuma wiki (collard greens) and stewed beans, mandazi (coconut fried doughnuts) with chai at sunrise, Kenyan AA coffee from Nyeri highlands, and Tusker beer at the camp sundowner. Camp chefs at luxury tented camps produce genuinely extraordinary multi-course dinners in the bush.',
currency: 'Kenyan Shilling (KES) — safaris quote USD',
language: 'English and Swahili (both official)',
timezone: 'UTC+3',
}

export default meta
