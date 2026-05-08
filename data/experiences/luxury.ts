import type { ExperienceMeta } from '@/types/experience'

const meta: ExperienceMeta = {
  label: 'Ultra-Luxury Honeymoons',
  tagline: 'The finest hotel experiences in the world, scored for romance',
  hero: '/images/hotels/velaa-private-island-maldives/hero.webp',
  intro: 'Ultra-luxury honeymoon hotels are not defined by price alone — they are defined by the calibre of attention, the singularity of the setting, and the degree to which every detail is configured for intimacy. At properties scoring 90+ on the Honeymoon Score, two things are always true: you stop wanting to leave, and you stop thinking about anything except being in that place with that person.',
  stats: [
    { icon: '⭐', value: '66', label: 'Luxury Properties' },
    { icon: '💰', value: '$500–$8,000', label: 'Per Night Range' },
    { icon: '🏆', value: '96/100', label: 'Top Score (Four Seasons BB)' },
    { icon: '👥', value: '1:1', label: 'Staff-to-Guest Ratio (Top Tier)' },
  ],
  perfectFor: [
    'Couples for whom the honeymoon is a once-in-a-lifetime investment',
    'Those who value extraordinary service over activities',
    'Couples who want to be recognised, remembered, and surprised',
    'Anyone who has stayed in nice hotels before and wants to understand what the next level is',
  ],
  skipIf: [
    'You are uncomfortable with attentive service (some find it intrusive)',
    'You prefer independent travel over curated resort experiences',
    'Budget is the primary constraint — there is no meaningful ultra-luxury under $500/night',
  ],
  reasons: [
    { title: 'Service at this level is transformative', desc: 'A butler who knows your names, your preferences, and has arranged what you were about to ask for. This is not a cliché at properties scoring 90+. It genuinely changes the experience — from reacting to needs to anticipating them.' },
    { title: 'Privacy is the ultimate luxury', desc: 'Ultra-luxury means private villas rather than rooms, private pools rather than shared, private beaches rather than public. At Amanyara or Singita, privacy is the primary amenity. You can spend four days without seeing another guest if you choose.' },
    { title: 'Once in a lifetime justifies the spend', desc: 'Most couples honeymooning at an ultra-luxury property will not return at that price point. The clarity that this is unrepeatable intensifies every moment. The ROI on the best day of your life is theoretically infinite.' },
    { title: 'The architecture', desc: 'At the very top tier, the physical design of the property is extraordinary. Jade Mountain\'s open sanctuaries. Soneva Jani\'s retractable roofs. Singita Sasakwa\'s colonial lodge overlooking the Serengeti. These are among the most beautiful buildings humans have ever made.' },
    { title: 'Food at this level is an experience', desc: 'Ultra-luxury hotel restaurants are frequently better than the local Michelin starred competition. Aman properties retain their own chefs internationally. The Four Seasons culinary standard is consistently excellent. The food at a 90+ scored property is never an afterthought.' },
  ],
  destinations: [
    { name: 'Maldives', slug: 'maldives', why: 'Most ultra-luxury properties per square kilometre in the world. Soneva Jani (97/100), Four Seasons Landaa Giraavaru (91/100). The Maldivian product is the global reference point for overwater luxury.', budget: '$800–$8,000/night', bestFor: 'Overwater ultra-luxury, marine experience, privacy' },
    { name: 'Bora Bora', slug: 'bora-bora', why: 'Four Seasons Resort Bora Bora (96/100) is the benchmark Pacific luxury property. Conrad Nui for the best lagoon position. The landscape is irreplaceable.', budget: '$600–$4,000/night', bestFor: 'View, heritage, French Polynesian culture' },
    { name: 'Seychelles', slug: 'seychelles', why: 'Six Senses Zil Pasyon and Amanyara represent different expressions of ultra-luxury. Less known than Maldives but with stronger nature narrative.', budget: '$500–$3,000/night', bestFor: 'Barefoot luxury, nature, Six Senses wellness' },
    { name: 'Tanzania', slug: 'tanzania', why: 'Singita lodges are the most expensive hotels in Africa and among the most romantic in the world. The safari + luxury combination is unique to this destination.', budget: '$1,500–$5,000/night', bestFor: 'Safari ultra-luxury, once-in-a-lifetime wilderness' },
  ],
  months: [
    { month: 'Jan', emoji: '☀️', verdict: 'Peak', note: 'Maldives and Caribbean dry season peak. Highest rates. Book 18 months ahead.' },
    { month: 'Feb', emoji: '☀️', verdict: 'Peak', note: 'Most popular honeymoon month globally. Maximum rates everywhere.' },
    { month: 'Mar', emoji: '☀️', verdict: 'Peak', note: 'Final peak month. Transitioning to shoulder season in some destinations.' },
    { month: 'Apr', emoji: '🌤️', verdict: 'Shoulder', note: 'First shoulder month. 20–30% rate reductions. Excellent conditions in many destinations.' },
    { month: 'May', emoji: '🌧️', verdict: 'Low', note: 'Maldives wet season. Significant deals at top properties. Worth considering.' },
    { month: 'Jun', emoji: '🌦️', verdict: 'Shoulder', note: 'Some destinations low season. Serengeti dry season begins.' },
    { month: 'Jul', emoji: '☀️', verdict: 'Peak', note: 'Bora Bora peak. Serengeti migration begins. Bali high season.' },
    { month: 'Aug', emoji: '☀️', verdict: 'Peak', note: 'High season most properties. Great Migration peak. Maldives north atolls excellent.' },
    { month: 'Sep', emoji: '🌤️', verdict: 'Good', note: 'Best value at ultra-luxury properties. Slightly fewer guests. Same quality.' },
    { month: 'Oct', emoji: '🌤️', verdict: 'Good', note: 'Caribbean and Maldives season beginning. Good availability at top properties.' },
    { month: 'Nov', emoji: '☀️', verdict: 'Peak', note: 'Pre-Christmas peak beginning. Excellent conditions. More affordable than December.' },
    { month: 'Dec', emoji: '❄️', verdict: 'Peak', note: 'Most expensive period globally. Magical atmosphere. Book 18–24 months ahead.' },
  ],
  budgetTiers: [
    { tier: 'Premium Luxury', range: '$500–$1,200/night', desc: 'Where luxury begins for honeymooners. Suite-level rooms, butler available (shared), excellent spa, five-star dining. Exceptional value per night for the quality delivered. Most couples report this as the most they have ever spent on accommodation — and worth it.', hotels: 'Conrad Bora Bora, Anantara Kihavah, Cap Maison St. Lucia' },
    { tier: 'Ultra-Luxury', range: '$1,200–$3,000/night', desc: 'Dedicated villa with private pool. Personal butler. In-villa dining indistinguishable from the restaurant. The resort knows your name, preferences, and what you ordered on day one before you reach the bar on day three.', hotels: 'Four Seasons Bora Bora, Six Senses Zil Pasyon, Singita Grumeti' },
    { tier: 'Absolute', range: '$3,000–$8,000/night', desc: 'The finest hotels and resorts in the world. Numbers are secondary — this is about being in a singular, extraordinary place with the person you love. Soneva Jani, Singita Sasakwa, Aman Serengeti. The cost is not justified by the amenities list. It is justified by the memory.', hotels: 'Soneva Jani, Singita Sasakwa, Amanyara (exclusive use)' },
  ],
  checklist: [
    { title: 'Getting the most from ultra-luxury', items: ['Email the property 2 weeks before arrival with specific preferences and honeymoon context', 'Ask what the property is best known for and experience it on night one', 'Accept every offered upgrade — at this level, they are genuine improvements', 'Tell them what you want to avoid (over-scheduled activities, group events)', 'Ask what other honeymooners always wish they had done — staff know'] },
    { title: 'Value optimisation', items: ['Book direct or through a luxury travel agent (Virtuoso, Signature Travel Network) for extra amenities', 'Ask about honeymoon packages — they often include breakfast, spa credits, and F&B allowances', 'Target the "last great value window" — 2–3 months before arrival is when resorts discount unsold premium rooms', 'Consider January in the Maldives vs November — identical weather, 30% price difference'] },
  ],
  expertTips: [
    'The most expensive hotel is not always the best honeymoon. A 96/100 Honeymoon Score at $600/night outperforms a 70/100 score at $2,000/night for most couples. Always check the Honeymoon Score before assuming price equals quality.',
    'Book direct or through a Virtuoso-affiliated travel agent. Direct bookings at Aman, Four Seasons, and Six Senses come with benefits (early check-in, spa credit, breakfast) not available on third-party sites. A Virtuoso agent adds these at no cost to you.',
    'The first two nights set the entire emotional register of a honeymoon. Invest disproportionately in the opening hotel, even if it means scaling back on the final nights. The arrival experience when you are freshest and most emotionally primed is the one that defines the trip.',
    'At properties like Soneva Jani, where the suite price includes food and beverages, the effective cost difference from a comparable non-inclusive property is 30–40% lower per night than the rack rate suggests. Factor in-room dining, spa use, and activities when comparing properties.',
    'Request the "honeymoon reveal" when you book — most ultra-luxury resorts have a standard honeymoon setup (flowers, champagne, candles, turndown ritual). Tell them what would actually move you and they will deliver it. The best properties find out beforehand; the best couples tell them.',
  ],
  faqs: [
    { q: 'What is the best ultra-luxury honeymoon hotel in the world?', a: 'Soneva Jani (Maldives, 97/100) currently leads our Honeymoon Score. Close competitors: Four Seasons Resort Bora Bora (96/100), Jade Mountain St. Lucia (94/100), Singita Sasakwa Lodge (88/100). The right answer depends on your preferred destination and experience type — all are exceptional.' },
    { q: 'Is ultra-luxury worth it for a honeymoon?', a: 'The once-in-a-lifetime context makes ultra-luxury rational for many couples who would never spend this way otherwise. The key question is: what actually moves you? If extraordinary settings, privacy, and service resonate — yes, completely worth it. If you prefer experiences over rooms, redistribute the budget toward activities.' },
    { q: 'How do you get upgrades at luxury hotels?', a: 'Book direct or through a luxury travel agent. Send a personalised pre-arrival email 10 days before check-in (mention honeymoon, room preference, specific requests). Arrive with clear, specific preferences — not demands. The hotels that deliver upgrades do so for guests who have made a real human connection with the team before arrival.' },
    { q: 'What is the difference between luxury and ultra-luxury?', a: 'Luxury delivers consistently excellent rooms, dining, and service. Ultra-luxury delivers the sense that the property exists specifically for you — that your preferences have been anticipated, your room was chosen with thought, and the staff have been briefed on what makes your stay meaningful. The psychological difference is significant.' },
  ],
  related: ['overwater-bungalows', 'adults-only', 'safari'],
}

export default meta
