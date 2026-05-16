import type { ExperienceMeta } from '@/types/experience'

const meta: ExperienceMeta = {
  label: 'Wellness & Spa Honeymoons',
  seo: {
    title: 'Wellness Honeymoon Resorts: 384 Spa & Onsen Picks 2026',
    description: 'Wellness honeymoon resorts across 54 destinations — 384 properties scored on spa depth, sleep programs, cuisine and ritual. From $150 to $5,000 a night.',
  },
  tagline: 'The honeymoon that changes how you feel, not just where you go',
  hero: '/images/hotels/six-senses-zil-pasyon-seychelles/hero.webp',
  intro: 'Wellness honeymoons are the fastest-growing category in luxury travel — couples increasingly want to arrive home from their honeymoon feeling genuinely better than when they left, not just rested. The best wellness-focused properties offer not just world-class spas, but a full sensory architecture: extraordinary cuisine, sleep programmes, movement and yoga, and spa treatments drawn from traditional healing systems that have been refined over centuries.',
  stats: [
    { icon: '🧘', value: '58', label: 'Spa-Equipped Properties' },
    { icon: '💆', value: '$200–$4,000', label: 'Per Night Range' },
    { icon: '🌿', value: '4+', label: 'Hours Spa/Day Average' },
    { icon: '✨', value: '92/100', label: 'Avg Honeymoon Score' },
  ],
  perfectFor: [
    'Couples leaving an intensely stressful wedding planning period',
    'Those who want to arrive home genuinely transformed, not just rested',
    'Couples interested in traditional healing systems (Ayurveda, Balinese, Thalasso)',
    'Anyone who prioritises the spa over the pool',
    'Couples comfortable spending significant time apart in separate treatment rooms',
  ],
  skipIf: [
    'You dislike being touched or are uncomfortable with body treatments',
    'You want high-energy nightlife or entertainment',
    'You have specific dietary restrictions that make therapeutic menus difficult',
  ],
  reasons: [
    { title: 'The de-compression after wedding planning', desc: 'The final weeks before a wedding are among the most stressful in a couple\'s life. A wellness honeymoon is specifically designed to reverse this — not just relax you, but actively restore your nervous system. The best programmes do this deliberately and measurably.' },
    { title: 'Traditional healing systems', desc: 'Balinese healing (Bali), Ayurveda (Sri Lanka, India, Maldives), thalassotherapy (French Polynesia), Traditional Chinese Medicine (Asia). These are not hotel spa massages — they are sophisticated medical traditions adapted for resort delivery. The treatments last 90–120 minutes and their effects are felt for days.' },
    { title: 'Food as part of the experience', desc: 'The best wellness resorts treat food as medicine: Six Senses has nutritionists on-site, Anantara Kihavah serves spa cuisine in the underwater restaurant, The Kayon Jungle Resort sources locally and offers fasting programmes. The food experience elevates everything else.' },
    { title: 'Sleep quality', desc: 'Well-designed wellness properties are silent. Insulation, natural materials, no through-traffic, and sleep-focused programming (magnesium baths, guided meditation, blue-light-free rooms) mean guests consistently report their best sleep in years. After a wedding, this matters.' },
    { title: 'You arrive home different', desc: 'The test of a wellness honeymoon is not how you feel on the final morning — it is how you feel a week after returning. The best programmes create changes that outlast the trip: better sleep rhythms, reduced baseline anxiety, improved movement habits.' },
  ],
  destinations: [
    { name: 'Bali', slug: 'bali', why: 'World capital of wellness travel. Ubud jungle resorts, Balinese healing tradition, extraordinary food culture. The Kayon and Hanging Gardens are benchmark wellness properties.', budget: '$200–$800/night', bestFor: 'Ayurvedic/Balinese treatments, jungle atmosphere, value' },
    { name: 'Maldives', slug: 'maldives', why: 'Overwater spa treatment rooms where you hear only water. Anantara Kihavah\'s underwater spa. Six Senses Laamu. The combination of aquatic environment and world-class treatment is unique.', budget: '$600–$4,000/night', bestFor: 'Marine wellness, overwater treatment rooms, total isolation' },
    { name: 'Seychelles', slug: 'seychelles', why: 'Six Senses Zil Pasyon Seychelles is the benchmark for biophilic wellness design — the architecture, the food, the treatment philosophy are one integrated experience.', budget: '$400–$2,500/night', bestFor: 'Six Senses signature, island nature, barefoot luxury' },
    { name: 'Santorini', slug: 'santorini', why: 'The clifftop pool-and-view culture of Santorini is inherently relaxing. Cave spa treatments, volcanic mineral baths, and the meditative quality of watching the Aegean from a private terrace.', budget: '$300–$1,500/night', bestFor: 'European accessibility, views, volcanic spa minerals' },
  ],
  months: [
    { month: 'Jan', emoji: '🧘', verdict: 'Peak', note: 'Post-holiday detox season. Most wellness programmes fully booked. Book early.' },
    { month: 'Feb', emoji: '☀️', verdict: 'Good', note: 'Good weather most destinations. Valentine\'s couples spa packages everywhere.' },
    { month: 'Mar', emoji: '🌸', verdict: 'Good', note: 'Pre-Easter. Bali perfect. Maldives excellent. Good shoulder value.' },
    { month: 'Apr', emoji: '🌸', verdict: 'Good', note: 'Bali peak dry season. European shoulder. Seychelles shoulder rate.' },
    { month: 'May', emoji: '🌿', verdict: 'Shoulder', note: 'Quieter globally. Wellness retreats less crowded. Often good deals.' },
    { month: 'Jun', emoji: '🌿', verdict: 'Good', note: 'Bali dry season. Santorini season opens. Good weather Europe and Asia.' },
    { month: 'Jul', emoji: '☀️', verdict: 'Peak', note: 'Bali high season. Santorini busiest. Book spa programmes in advance.' },
    { month: 'Aug', emoji: '☀️', verdict: 'Peak', note: 'Peak European summer. Best weather Santorini, Seychelles. High demand.' },
    { month: 'Sep', emoji: '🌤️', verdict: 'Good', note: 'Post-peak. Bali still excellent. Santorini quieter. Best value premium month.' },
    { month: 'Oct', emoji: '🍂', verdict: 'Good', note: 'Excellent conditions most destinations. Shoulder pricing. Strong spa focus.' },
    { month: 'Nov', emoji: '🌿', verdict: 'Good', note: 'Quiet globally. Best for intensive wellness programmes — few distractions.' },
    { month: 'Dec', emoji: '❄️', verdict: 'Peak', note: 'Year-end reset culture. Most wellness destinations fully booked. Premium pricing.' },
  ],
  budgetTiers: [
    { tier: 'Entry', range: '$200–$500/night', desc: 'Good spa facilities and quality local treatments (Balinese massage, scrub, wrap). This tier is excellent value in Bali and Thailand. You get authentic treatment quality at a fraction of Maldives costs.', hotels: 'Hanging Gardens Bali, various Ubud wellness properties' },
    { tier: 'Premium', range: '$500–$1,500/night', desc: 'Full wellness programme access, nutritionist or wellness consultant, daily yoga/meditation, high-quality treatment rooms with unique views (overwater, cliff, jungle canopy). The sweet spot for wellness honeymooners.', hotels: 'The Kayon Jungle Resort, Anantara Kihavah, Constance Ephelia Seychelles' },
    { tier: 'Ultra', range: '$1,500–$4,000/night', desc: 'Bespoke wellness journey designed before arrival. Biometric testing. Private wellness guide. Cuisine designed to your health profile. Six Senses DNA testing programmes. This changes you.', hotels: 'Six Senses Zil Pasyon, Anantara Maia Seychelles, InterContinental Thalasso Bora Bora' },
  ],
  checklist: [
    { title: 'Before you book', items: ['Confirm the spa has treatment rooms with views (overwater, jungle, sea)', 'Ask about a couples spa package — most resorts offer discounts over individual bookings', 'Check if a nutritionist or wellness consultant is available', 'Inquire about pre-arrival wellness intake forms — top resorts personalise your programme', 'Verify pool temperature — some wellness pools are therapeutic (cold/contrast), not just for sunbathing'] },
    { title: 'Maximising the experience', items: ['Book your first spa session on day 1 (arrival day or next morning)', 'Ask for a "wellness journey" consultation at check-in', 'Eat the spa menu at least once — the quality is usually excellent', 'Do yoga every morning even if you\'re not a practitioner — the setting transforms it', 'Leave your phone off for the first 48 hours — your nervous system will do the rest'] },
  ],
  expertTips: [
    'The best wellness properties are not the ones with the largest spa menus — they are the ones where the wellness philosophy is integrated into the whole resort. Six Senses is the benchmark: the food, the sleep programme, the architecture, and the treatment all form one coherent experience.',
    'Book your spa treatments in advance, not at the resort. The best therapists and time slots at top wellness properties (morning mist hours, sunset slots) fill up 30–60 days before arrival. Email the spa team directly to reserve.',
    'A couples massage is the single most universally appreciated wellness activity for honeymooners. Side-by-side treatment tables in a room with a view — a 90-minute couples massage in an overwater treatment room in the Maldives costs $400–$600 but delivers an experience that is referenced for years.',
    'Bali offers the world\'s best value wellness honeymoon by a significant margin. A $300/night property in Ubud delivers treatment quality, food, and atmosphere that rivals $1,500/night Maldivian spa resorts. If budget matters, Bali wellness is the answer.',
    'Thalassotherapy (seawater therapy) in French Polynesia — specifically the InterContinental Bora Bora Thalasso Spa — uses deep cold seawater pumped from 915 metres to power treatments. This is a unique therapeutic system unavailable anywhere else. The effects on jet lag and muscle recovery are genuine.',
  ],
  faqs: [
    { q: 'What is the best wellness honeymoon destination?', a: 'Bali for value and authenticity of Balinese healing tradition. Maldives for the extraordinary spa environment (overwater treatment rooms, marine elements). Seychelles (Six Senses) for the most integrated wellness philosophy. Santorini for European accessibility with volcanic mineral spa culture. The best depends on budget and treatment preference.' },
    { q: 'Do we need to be "wellness people" to enjoy a spa honeymoon?', a: 'No. Most couples who choose wellness properties primarily enjoy them for the environment: the silence, the beautiful pools, the quality of food, and the atmosphere of genuine calm. The treatments are an optional layer that most couples discover they love regardless of prior interest.' },
    { q: 'How much spa time is typical on a wellness honeymoon?', a: 'At dedicated wellness resorts, couples typically have 2–4 hours of spa time daily — either in treatments or using the spa facilities (pools, steam, relaxation rooms). This naturally balances with beach/pool time, meals, and activities. You will not feel pressured into treatments at a good property.' },
    { q: 'Is Ayurveda appropriate for a honeymoon?', a: 'Genuine Ayurveda (as practised in Kerala, India or Sri Lanka) is a 21-day programme that involves restrictive diet and therapeutic purges — not appropriate for a honeymoon. Resort Ayurveda (as offered in Bali and the Maldives) is a curated, adapted version that selects the most relevant and pleasant elements. This is excellent for honeymoons.' },
  ],
  related: ['beach', 'adults-only', 'overwater-bungalows'],
}

export default meta
