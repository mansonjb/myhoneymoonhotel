import type { PackingContent, PackingItem } from './types'

export type { PackingItem }

export const PACKING_CONTENT: PackingContent = {
  intro:
    "Most honeymoon packing lists are 80 items long and most of those items will come home unworn. The version that actually works has two layers: a universal kit that goes on every honeymoon regardless of destination, and a climate-specific overlay (tropical, safari, city, cold-weather) that swaps in. The list below is shorter than what you'll find on most wedding-blog versions because we've stripped the items couples consistently report leaving in the suitcase. We've also added the small category that almost nobody packs but probably should — a copy of the marriage certificate, a printed itinerary, a USB-C charger that handles airline sockets — and the category nobody packs that actually shouldn't be packed (heels: 90% of honeymoon photographs are barefoot or in sneakers; full-size toiletries; two cameras). Pick your climate, run the list, ignore the rest.",
  universal: [
    { item: 'Two passports + a photocopy', note: 'Photocopy in the checked bag, not in the carry-on with the originals.' },
    { item: 'Marriage certificate copy', note: 'Upgrade ammunition at check-in. Some hotels still ask; some honeymoon perks (free Champagne, room upgrade) need proof.' },
    { item: 'Travel insurance card with policy number', note: 'Medical evacuation cover specifically. Not a luxury at this trip size.' },
    { item: 'Universal adapter — one per device pair', note: 'A 4-port USB-C version replaces 4 adapters and saves luggage weight.' },
    { item: 'Mini medicine kit', note: 'Paracetamol, ibuprofen, Imodium, antihistamine, plasters, electrolyte sachets, anti-nausea. Total weight under 200g.' },
    { item: 'One dressy outfit each', note: 'For the one signature dinner. Compresses to less than you think — linen for tropical, smart-casual for everywhere else.' },
    { item: 'Earplugs + eye mask', note: 'Travel day, jetlag adjustment, and the first night at a new property.' },
    { item: 'Reusable water bottle', note: 'Saves $40-80 over a 7-night trip and the airline lounges all refill them.' },
  ],
  tropical: {
    intro:
      "Maldives, Bora Bora, the Caribbean, Bali, the Seychelles. The pack weighs less than you think because the destination is hot — but you'll need two of everything wet because nothing dries fully overnight in 75% humidity.",
    items: [
      { item: 'Reef-safe sunscreen (SPF 50)', note: 'Mainstream brands (Banana Boat, Hawaiian Tropic) are reef-toxic and increasingly illegal in Maldives, Mexico, Hawaii. Stream2Sea, All Good, or Stream2Sea Eco are the right ones.' },
      { item: 'Two swimsuits per person', note: 'They do not dry overnight. Two is the minimum, three is comfortable.' },
      { item: 'Light cover-up / sarong each', note: 'For walking to breakfast, the pool, the spa. Linen or cotton, not synthetic.' },
      { item: 'Reef shoes / sea-shoes for atolls', note: 'Maldives and Bora Bora coral cuts are common and ruin two days of the trip.' },
      { item: 'Insect repellent for dusk', note: 'DEET 30% or picaridin 20%. The lemongrass-citronella sprays are for backyard barbecues, not honeymoons.' },
      { item: 'Polarised sunglasses', note: 'The water glare is worse than people expect. Polarised is the difference between seeing the reef and not.' },
      { item: 'Underwater camera (Olympus TG-7 or equivalent)', note: 'Not just a phone in a case. The phone-case versions fail; the dedicated underwater camera is $400 and lasts a decade.' },
      { item: 'Hat with chin strap', note: 'Boat days. Standard sunhats are gone at 15 knots.' },
      { item: 'Light rain jacket', note: 'Tropical squalls are sudden and warm; the jacket is a 5-minute item, not a daily one.' },
    ],
  },
  safari: {
    intro:
      "Kenya, Tanzania, Botswana, South Africa, Rwanda. The packing problem is colour discipline (no white, no bright) and temperature range (game drives can start at 5°C and end at 30°C the same day).",
    items: [
      { item: 'Neutral-coloured clothing only', note: 'Khaki, olive, grey, tan. No white (attracts dust and tsetse flies), no bright colours (spooks game). 5 outfits is plenty for 7 days; lodges launder daily.' },
      { item: 'Mid-layer fleece + windproof', note: 'Pre-dawn game drives are genuinely cold even in summer. A 100-weight fleece + a packable shell is the right combo.' },
      { item: 'Wide-brim hat with chin strap', note: 'Open vehicles, no shade. Baseball caps fail at 40 km/h.' },
      { item: 'Closed-toe walking shoes', note: 'Not sandals. Trail runners or low hikers. Camps will ban open-toe on walking safaris and in the bush.' },
      { item: 'Binoculars (8x42 minimum)', note: "The camp's loaners are usually mediocre and you'll share one pair. A personal 8x42 is the single highest-impact safari item." },
      { item: 'Dust-proof camera bag', note: 'The Kalahari and Mara dust gets into everything. A Peak Design or Lowepro bag with a rain cover.' },
      { item: 'DEET-based insect repellent', note: '30%+ for malaria zones. Bracelet repellents are theatre.' },
      { item: 'Headlamp', note: 'Camps power down at night; bathrooms can be 50m from the tent. Petzl Tikka or equivalent.' },
      { item: 'Malaria prophylaxis (if region requires)', note: 'Malarone is the standard. Start 1-2 days before, continue 7 days after. Get the prescription a month out.' },
    ],
  },
  city: {
    intro:
      "Venice, Paris, Tokyo, New York, Lisbon. The pack rewards layering and shoe discipline — a city honeymoon is 15-20 km of walking per day in mixed weather.",
    items: [
      { item: 'Comfortable but presentable shoes', note: 'Sneakers that pass for restaurant-wear (Common Projects, Veja, Adidas Stan Smith). Already broken in. The shoe wrong-choice ends honeymoons.' },
      { item: 'Layers, not bulk', note: 'A merino base, a mid-weight cardigan or pullover, a packable rain shell. City honeymoons swing 10°C between morning coffee and midnight walking.' },
      { item: 'One dressy outfit each', note: 'For dinner at the flagship restaurant. The city dressy outfit is more formal than the tropical one — jacket-required is still real in Paris and Tokyo.' },
      { item: 'Crossbody bag (anti-pickpocket)', note: 'Pickpocketing in Paris, Rome, Barcelona is a real problem. A zipped crossbody worn front-forward solves it.' },
      { item: 'Compact umbrella', note: 'The hotel ones are too big to take everywhere. A Blunt or Senz mini fits a daybag.' },
      { item: 'Backup phone battery (10,000mAh)', note: 'Google Maps eats charge faster than anything else on a city trip. Anker PowerCore is the reference.' },
      { item: 'Printed reservation list', note: 'Phone fails, restaurant has no record, you have the printed confirmation. Old-school but reliable.' },
      { item: 'Day pack (collapsible)', note: 'For the museum days, the picnic lunches. A Sea to Summit or similar that folds to fist-size.' },
    ],
  },
  cold: {
    intro:
      "Iceland, Lapland, Norway, Patagonia, Banff. The pack is structural — without the right base layer the entire trip is uncomfortable.",
    items: [
      { item: 'Merino wool base layer (top + bottom)', note: 'Smartwool, Icebreaker, or Ortovox 200-weight. Worth the $200 for the set. Cotton is the wrong answer.' },
      { item: 'Mid-weight fleece or down sweater', note: 'Patagonia R1, Arc\'teryx Atom LT, or equivalent. The middle insulation layer.' },
      { item: 'Hard-shell waterproof outer (jacket + pants)', note: 'GoreTex or eVent. The cheap waterproofs wet out in 30 minutes of Icelandic rain.' },
      { item: 'Waterproof insulated boots', note: 'Sorel Caribou or equivalent. Not fashion boots. Cold feet ruin the entire day.' },
      { item: 'Glove system: liner + insulated outer', note: 'The liner lets you operate the camera without taking the outer off entirely.' },
      { item: 'Wool socks (three pairs)', note: 'Darn Tough lifetime-guaranteed. Worth carrying the spare.' },
      { item: 'Hand warmers (a box of 10)', note: 'HotHands or Hothands brand. Northern Lights nights are colder than people expect.' },
      { item: 'Headlamp', note: 'Iceland and Lapland in winter have 4 hours of daylight. The headlamp is the constant.' },
      { item: 'Swimsuit', note: 'Geothermal pools, hot springs, hotel saunas. Pack the swimsuit even on the coldest trip.' },
    ],
  },
  nobodyPacks: [
    { item: 'A copy of the marriage certificate', note: 'Hotels offering honeymoon perks (free Champagne, room upgrade, romantic turndown) increasingly ask for it. The photocopy is enough.' },
    { item: 'One printed itinerary', note: 'Reservation numbers, transfer companies, hotel address in destination language. The day the phone dies, the printed version is the entire trip.' },
    { item: 'A USB-C charger that handles airline sockets', note: 'Most laptops now charge via airline USB-C ports — bringing the right cable saves 8 hours of in-flight battery anxiety.' },
    { item: 'Sleep mask + earplugs (the good ones)', note: 'Manta sleep mask, Loop earplugs. Most jetlag is fixable with two good sleeps; the equipment matters.' },
    { item: 'A spare contact lens / glasses', note: 'Snorkelling, surfing, sand, bright sun: contact lenses leave more often than at home. One backup pair saves the trip.' },
    { item: 'A small thank-you gift from home', note: 'A souvenir from where you live, in case a staff member at the property goes above and beyond. The Maldives villa-host gift, the Tuscan vineyard tour guide tip — handed-over thoughtfully, it converts goodwill into the kind of service couples remember.' },
  ],
  whatToSkip: [
    { item: 'Heels', note: '90% of honeymoon photographs are barefoot or in sneakers. Bring one pair of low wedge or sandal if you must — leave the heels at home.' },
    { item: 'Full-size toiletries', note: 'The hotel provides them at this tier and they take 15% of suitcase weight. Travel-size everything; replenish at the destination if needed.' },
    { item: 'Two cameras', note: 'One mirrorless or one good underwater. Two is two devices to charge, two memory cards to manage, and one will go unused. The phone covers the rest.' },
    { item: 'Books in physical form', note: 'A Kindle Paperwhite holds 200 books at the weight of half of one. Honeymoons are good reading time; the physical book is the wrong format on a 30-hour trip.' },
    { item: 'A formal blazer for tropical destinations', note: 'No tropical hotel has a jacket-required dining room. A linen shirt is the right level.' },
    { item: 'A hairdryer / styling tool', note: "Every hotel above 3-star has them. The travel hairdryer is the most reliable wasted-weight item on honeymoon lists." },
  ],
  closing:
    "The honest test of a honeymoon packing list is what comes home unworn. Two swimsuits per person on a tropical trip will both be worn; the third probably won't. One dressy outfit each will be worn once; the second won't. A printed itinerary will be used; an emergency kit beyond the minimum medicine won't. Pack the universal layer, add the climate layer, skip the heels-and-blazer reflex. Six days into the trip you'll be surprised how little of what came in the suitcase you've actually opened.",
  faqs: [
    {
      question: "How big a suitcase per person?",
      answer: "Carry-on (35-40L) for a 7-night tropical or city honeymoon; a 60-70L checked bag per person for safari (the gear adds weight) or cold-weather (the layers add bulk). Two big checked bags per couple is too much for any climate.",
    },
    {
      question: "Should we pack a 'just in case' formal outfit?",
      answer: "One per person, for one dinner. Two is too many — the second formal outfit always comes home unworn on honeymoons because the rhythm of the trip selects against two formal nights.",
    },
    {
      question: "What's the most-forgotten honeymoon item?",
      answer: "A photocopy of the marriage certificate, by a wide margin. The second-most-forgotten is reef-safe sunscreen — the airport sells reef-toxic versions and most couples buy the wrong one on arrival, then discover the resort sells reef-safe at triple the price.",
    },
    {
      question: "Is a printable PDF available?",
      answer: "Yes — sign up for the newsletter and we'll send the one-page version (universal kit + all four climate overlays + the 'nobody packs but should' list) as a printable PDF you can take to the hotel with you.",
    },
  ],
}
