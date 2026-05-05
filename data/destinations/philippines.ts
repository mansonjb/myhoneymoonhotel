import type { DestinationMeta } from '@/types/destination'

const meta: DestinationMeta = {
hero: '/images/hotels/amanpulo-pamalican-philippines/hero.webp',
tagline: 'Over 7,000 islands, private atolls, and some of Asia\'s clearest water — the archipelago of dreams.',
intro: 'The Philippines is Southeast Asia\'s best-kept luxury secret. While Thailand and Bali absorb the crowds, Palawan\'s UNESCO-listed limestone karst bays, Siargao\'s coconut-grove surf breaks, and Pamalican\'s Aman private atoll offer some of the most dramatic and pristine island scenery in the world. Amanpulo on Pamalican has the most extraordinary private beach casitas in Asia. Coron\'s crystal-clear lakes and WWII wreck diving are unique on earth. The Philippines rewards couples who look past the surface.',
bestTime: 'Nov–May',
flightFrom: '13–16h from Europe (via Singapore or Hong Kong)',
topExperience: 'Private Island & Diving',
perfectFor: [
  'Couples wanting true private island seclusion — Amanpulo has no day visitors',
  'Diving enthusiasts — Tubbataha Reef is one of the world\'s top three dive sites',
  'El Nido island-hopping addicts — the most spectacular coastal scenery in Asia',
  'Surfers who want a romantic destination with world-class waves (Siargao)',
  'Those seeking Asia\'s finest beach luxury at lower prices than the Maldives',
],
skipIf: [
  'You\'re visiting June–October — typhoon season makes northern areas risky',
  'Easy travel logistics are a priority — inter-island connections require planning',
  'You want city culture alongside beach time — Manila is best skipped',
  'Budget is under $200/night — the Philippines\' best is accessible but not cheap',
],
experiences: [
  {
    icon: '🏝️',
    title: 'El Nido Island Hopping Tour C',
    description: 'The Bacuit Archipelago\'s most spectacular day — Hidden Beach, Secret Lagoon, and the Big Lagoon by bangka through limestone towers rising from an emerald sea. Nothing else in Asia compares.',
    cost: '$25–$60 per person shared; private charter $200–$400',
    tip: 'Start at 6am with a private charter to arrive at Hidden Beach before the flotilla of tour boats. Tours A and C are the two unmissable routes.',
  },
  {
    icon: '🤿',
    title: 'Coron WWII Wreck Diving',
    description: 'Coron Bay holds a fleet of Japanese WWII warships at 15–35m, now encrusted with coral and inhabited by enormous grouper. Kogyo Maru and Okikawa Maru are among the world\'s best wreck dives.',
    cost: '$60–$100 per person for guided wreck dive',
    tip: 'Combine with Kayangan Lake — reputedly the cleanest lake in Asia, with striking limestone walls.',
  },
  {
    icon: '🌊',
    title: 'Cloud 9 Surf, Siargao',
    description: 'Asia\'s most famous reef break — a powerful hollow right-hander that hosts international championships. Beginners learn at Jacking Horse or Stimpy\'s, not Cloud 9.',
    cost: 'Lessons $20–$30; board rental $10–$15/day',
    tip: 'September is when Cloud 9 is at its biggest and best. May–June offers great atmosphere without the crowds.',
  },
  {
    icon: '🦈',
    title: 'Tubbataha Reef Liveaboard',
    description: 'One of UNESCO\'s most protected coral systems — accessible only March–June by liveaboard from Puerto Princesa. Sharks, manta rays, and pristine walls untouched by mass tourism.',
    cost: '$3,000–$5,000 per couple for 5-night liveaboard',
    tip: 'Book by November for the following year — permits are strictly limited.',
  },
  {
    icon: '🌅',
    title: 'Amanpulo Private Island Sunset',
    description: 'Pamalican Island\'s 40 beach and hillside casitas with butler service and private pools. Sunset on the beach with zero other guests visible is the purest private island fantasy in Asia.',
    cost: '$1,500–$3,000/night (all-inclusive equivalent)',
    tip: 'Book the Beach Casita over Hillside for direct sand access. The house reef snorkelling is among the best in the country.',
  },
],
months: [
  { month: 'Jan', weather: 'Dry and warm, ideal conditions', emoji: '☀️', crowds: 'Moderate', price: 'Mid', verdict: 'Excellent — peak of best season' },
  { month: 'Feb', weather: 'Best month overall, dry and clear', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'The finest month in the Philippines' },
  { month: 'Mar', weather: 'Warm, dry, best diving visibility', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Excellent, Tubbataha season opens' },
  { month: 'Apr', weather: 'Very warm, Easter peak crowds', emoji: '🥵', crowds: 'Peak', price: 'Highest', verdict: 'Hot but beautiful — book ahead' },
  { month: 'May', weather: 'Transitioning, warm, pre-wet season', emoji: '🌤', crowds: 'Low-mod', price: 'Mid', verdict: 'Good value, Siargao perfect' },
  { month: 'Jun', weather: 'Wet season starts, typhoon risk', emoji: '🌧', crowds: 'Low', price: 'Low', verdict: 'Manageable south, risky north' },
  { month: 'Jul', weather: 'Typhoon season peak', emoji: '🌀', crowds: 'Low', price: 'Lowest', verdict: 'Avoid most destinations' },
  { month: 'Aug', weather: 'High typhoon risk', emoji: '🌀', crowds: 'Low', price: 'Lowest', verdict: 'Not recommended for honeymoon' },
  { month: 'Sep', weather: 'Typhoon risk, Siargao surf peaks', emoji: '🌊', crowds: 'Low', price: 'Low', verdict: 'Surfers only; rest avoid' },
  { month: 'Oct', weather: 'Tail end of typhoon season', emoji: '⛅', crowds: 'Low', price: 'Low-mid', verdict: 'Improving but still some risk' },
  { month: 'Nov', weather: 'Dry season starts, Palawan opens', emoji: '🌤', crowds: 'Moderate', price: 'Mid', verdict: 'Excellent start to season' },
  { month: 'Dec', weather: 'Dry, warm, festive atmosphere', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Festive season, beautiful weather' },
],
budgetTiers: [
  {
    label: 'Boutique Islands',
    range: '$120–$350/night',
    gets: 'Well-designed cottage on a beautiful beach. All-inclusive meal options, snorkelling from shore. Great value for the setting.',
    example: 'El Nido Resorts Apulit Island, Bohol Beach Club, El Nido boutique guesthouses',
  },
  {
    label: 'Premium Private Islands',
    range: '$400–$900/night',
    gets: 'Private pool villa on a secluded island. Excellent diving and snorkelling included. Limited guest numbers.',
    example: 'Huma Island Resort, Club Paradise Dimakya, Badian Island Wellness Resort',
  },
  {
    label: 'Ultra-Luxury',
    range: '$1,500–$3,000+/night',
    gets: 'Aman-level private island. Butler, private beach, house reef. The most exclusive in Southeast Asia.',
    example: 'Amanpulo Pamalican, Dedon Island Siargao',
  },
],
areas: [
  {
    name: 'Palawan / El Nido',
    bestFor: 'Limestone karst, UNESCO coastline',
    description: 'The most spectacular coastal scenery in Asia. El Nido is the base for island-hopping through the Bacuit Archipelago. Fly direct from Manila (1h15m). Stay minimum 3 nights.',
  },
  {
    name: 'Siargao',
    bestFor: 'Surf, coconut groves, laid-back romance',
    description: 'Asia\'s surf capital, increasingly known for its beautiful coconut palm landscape, blue lagoons, and relaxed luxury resorts. General Luna village has excellent restaurants. Fly via Cebu.',
  },
  {
    name: 'Bohol',
    bestFor: 'Chocolate Hills, wildlife, diving',
    description: 'Famous for the Chocolate Hills and the world\'s smallest primate (the tarsier). Panglao Island\'s beaches are excellent. Fly to Tagbilaran from Manila or Cebu.',
  },
  {
    name: 'Coron',
    bestFor: 'Wreck diving, crystal lakes, remoteness',
    description: 'The most underrated island in the Philippines. Kayangan Lake, Barracuda Lake diving, and the world\'s best WWII wreck diving. Fly from Manila (1h15m).',
  },
],
expertTips: [
  {
    tip: 'Avoid Manila — fly directly to your island destination',
    detail: 'Manila has little to offer honeymooners. Book direct flights to El Nido via Busuanga, Siargao, or Coron. Cebu is a decent connection hub.',
  },
  {
    tip: 'Inter-island flights fill weeks ahead in peak season',
    detail: 'AirSwift, Cebu Pacific, and PAL Express flights to El Nido and Siargao are limited. Book all domestic flights before leaving home.',
  },
  {
    tip: 'El Nido lagoons at 5:30am are a different world',
    detail: 'The Secret Lagoon fills with boats by 10am. Charter a private bangka for an early start and you\'ll have the limestone bays entirely to yourselves.',
  },
  {
    tip: 'ATMs in El Nido run out of cash on weekends',
    detail: 'Carry enough cash from Puerto Princesa or Manila. Many island restaurants and boat charters are cash-only.',
  },
],
packing: [
  { item: 'Reef-safe mineral sunscreen', why: 'El Nido and Tubbataha ban chemical sunscreen. Mineral-based is required and hard to find locally.' },
  { item: 'Waterproof dry bag', why: 'Bangka boats take on spray on every island-hopping day. Your camera and phone need full protection.' },
  { item: 'Light rash guard', why: 'Snorkelling for 4+ hours in tropical sun without a rash guard causes severe sunburn.' },
  { item: 'Electrolyte packets', why: 'Heat and activity cause rapid dehydration. A daily electrolyte drink prevents headaches that ruin beach afternoons.' },
  { item: 'Biodegradable insect repellent', why: 'Mosquitoes at dawn and dusk are significant, particularly in Siargao and inland Palawan.' },
],
guide: {
  getting: 'Fly to Manila (MNL) or Cebu (CEB). From Europe: 13–16h via Singapore, Hong Kong, or Dubai. From Australia: direct from Sydney to Manila (8h). Domestic connections: Manila to El Nido via Busuanga on AirSwift (1h15m); Manila to Siargao via Cebu (90 min total); Manila to Coron direct (1h15m). Book all domestic legs immediately — they fill fastest.',
  where: 'El Nido is the flagship — 3–4 nights, consider a 2-night extension to Coron by speedboat or small plane. Siargao for couples who want surf culture with romance — 3–4 nights in General Luna. Amanpulo works as a standalone 4-night island experience. Classic: 4 nights El Nido → 2 nights Coron, or 4 nights El Nido → 3 nights Amanpulo.',
  when: 'November through May is the dry season. February–March is the absolute peak for weather, diving, and beach conditions. April is hot but beautiful. Avoid June–October for north Palawan and Siargao — typhoon risk is real. Coron is more sheltered and sometimes accessible year-round.',
},
localFood: 'Kinilaw (Filipino ceviche with fresh tuna in vinegar and calamansi — extraordinary), grilled seafood with garlic rice and sawsawan dipping sauce, lechon (Cebu-style whole roasted pig — the most celebrated dish in the country), sinigang (tamarind sour soup with prawns or pork), fresh buko (young coconut) drunk straight from the shell on the beach.',
currency: 'Philippine Peso (PHP) — resorts and tours typically quote USD',
language: 'Filipino and English — English is an official language, universally spoken',
timezone: 'UTC+8 (Philippine Standard Time)',
}

export default meta
