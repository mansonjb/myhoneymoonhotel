import type { BudgetContent } from './types'

// Unique editorial per budget tier. Hotel slugs verified against data/hotels/*.json.
// Each entry targets ~600+ unique words across the page sections.

export const BUDGET_CONTENT: Record<number, BudgetContent> = {
  5000: {
    intro:
      "$5,000 is the budget where most planning blogs start hedging — promising you a honeymoon and quietly delivering a long weekend at a midscale resort. We won't. At this number, a real honeymoon is possible, but only if you accept two non-negotiables: stay regional (no French Polynesia, no Maldives, no Seychelles), and let go of the 7-night reflex. The math actually works at 4–5 nights at a $300–$400/night hotel in Mexico, Cape Verde, Madeira, or one of the value-tier Caribbean islands — destinations where the food, the flights and the local economy all line up at this price point. Done right, $5k buys a meaningful honeymoon. Done wrong, it buys a slightly nicer all-inclusive than you'd otherwise have booked, which is its own kind of disappointment.",
    whatItBuys:
      "Work the numbers backwards. Subtract $1,500 for two return economy flights (sensible from US East Coast to the Caribbean or Mexico; from Europe to Madeira or Cape Verde). Subtract $700 for transfers, tips, two non-resort dinners and a bottle or two of Champagne. That leaves $2,800 for accommodation — which at $400/night funds 7 nights at a solid 4-star or 5 nights at a real 5-star. The honest path is the second one. A 5-night stay at a confidently good property beats a 7-night stay at a property where the cracks show. The destinations below all have inventory at this maths.",
    budgetTable: [
      { label: 'Nights realistic', value: '4–5 (5 is the sweet spot)' },
      { label: 'Hotel tier', value: 'Entry 5-star or great 4-star' },
      { label: 'Flight class', value: 'Economy, direct preferred' },
      { label: 'Extras buffer', value: '~$700 for transfers + 2 off-resort dinners' },
      { label: 'Per-night ceiling', value: '~$400/night' },
      { label: 'Regions that work', value: 'Mexico, Cape Verde, Madeira, value Caribbean (Jamaica, DR)' },
      { label: 'Regions that don\'t', value: 'Maldives, French Polynesia, Seychelles, peak-season Europe' },
    ],
    hotelSlugs: [
      'belmond-maroma-resort-mexico',
      'belmond-reids-palace-madeira',
      'sandals-grenada',
      'sandals-royal-curacao',
      'excellence-punta-cana-dominican-republic',
      'sandals-royal-plantation-jamaica',
    ],
    splurgeVsSave:
      "Where to splurge: the room. The difference between an entry-level garden room and a private-pool suite at the same property is usually the difference between a hotel honeymoon and a memorable one — and it's a smaller delta than upgrading destinations. Where to save: meals. Resort dinners at $80+ per person twice a day will quietly eat $400 of your budget. Pick one signature dinner, eat the rest at the property's casual outlets or the village. Also save on flights — direct beats one-stop by enough to fund half a night somewhere better. And save on dates — shoulder week (the week after Easter, second week of November) versus peak can be $1,500 off the same hotel.",
    closing:
      "A $5k honeymoon is real if you commit to one destination, one hotel, and a duration that fits the budget honestly. The couples who feel cheated at this number are the ones who tried to stretch to 7 nights in a region that wanted $7k from them. The couples who feel lucky are the ones who picked the right 5 nights.",
    faqs: [
      {
        question: 'Is $5,000 enough for a honeymoon in 2026?',
        answer: "Yes, with caveats. It funds 4–5 nights at a real hotel in a regional destination — Mexico, value Caribbean, Cape Verde, Madeira. It does not fund the Maldives or French Polynesia at any duration. The couples who do this well treat $5k as a 5-night budget, not a 7-night one.",
      },
      {
        question: "What's the single best hotel under $5k all-in?",
        answer: "Belmond Maroma in Riviera Maya — 5 nights at the entry rate plus a Cancun economy flight pair plus extras comes in just under $5k for US East Coast couples and the property is a confident 5-star, not a midscale dressed up. Outside Mexico, Belmond Reid's Palace Madeira pulls the same trick for European couples.",
      },
      {
        question: 'Should I go all-inclusive at this budget?',
        answer: "Often, yes. Caribbean and Mexico all-inclusive inventory is a genuine bargain at this price point — Sandals Grenada, Sandals Royal Curacao, Excellence Punta Cana all deliver real luxury at the same all-in number that buys you a stripped-back stay elsewhere. AI removes the dinner-cost anxiety that quietly ruins mid-budget honeymoons.",
      },
      {
        question: 'Can I get to the Maldives or Bora Bora for $5k?',
        answer: "No. The flight alone is $2,500–4,000 per couple and the cheapest credible overwater villa is $700/night. The honest minimum for a real Maldives honeymoon is $9k. If those are the destinations you want, save for another year — don't half-do them.",
      },
    ],
  },

  10000: {
    intro:
      "$10,000 is the honest sweet spot for most American and European couples. It's enough to put real long-haul on the table — Caribbean classics, Italian shoulder season, even a budget Maldives entry — without forcing the trade-offs that haunt the $5k tier. At $10k, the per-night ceiling becomes $1,000 for 7 nights or $1,400 for 5, which unlocks an entirely different category of property: the Belmond and Rosewood end of the Caribbean, the Borgo-tier of rural Italy, the Six Senses Yao Noi end of Thailand. This is also the budget where you stop being a passive consumer of all-inclusive packages and start curating your own honeymoon — picking the hotel, picking the dinners, picking the experiences. It's the most flexible number on this page, and the one where editing matters most.",
    whatItBuys:
      "Subtract $1,800 for two long-haul economy flights, $1,200 for transfers, three off-resort dinners, a spa half-day, and assorted Champagne. That leaves $7,000 for accommodation — 7 nights at $1,000/night or 5 nights at $1,400. The first buys you a Caribbean confident-5-star or the Tuscan villa hotel of your honeymoon Pinterest board. The second buys you a Como cliffside, an Amalfi balcony at Le Sirenuse, or a real Conrad Maldives entry. The math invariably tilts toward the second — but only if you're picking a destination where 5 nights is enough.",
    budgetTable: [
      { label: 'Nights realistic', value: '5 at $1,400 OR 7 at $1,000' },
      { label: 'Hotel tier', value: 'Confident 5-star to entry luxury' },
      { label: 'Flight class', value: 'Economy or premium economy on long-haul' },
      { label: 'Extras buffer', value: '~$1,200 (3 off-resort dinners + spa)' },
      { label: 'Per-night ceiling', value: '$1,000–1,400/night' },
      { label: 'Regions that work', value: 'Caribbean luxury, Italian shoulder, Bali, Thailand, Mexico high-end' },
      { label: 'Regions still tight', value: 'Maldives (entry only), Bora Bora (no), Seychelles (no)' },
    ],
    hotelSlugs: [
      'belmond-cap-juluca-anguilla',
      'jade-mountain-st-lucia',
      'jumby-bay-island-oetker-antigua',
      'borgo-santo-pietro-tuscany-italy',
      'capella-ubud-bali',
      'amankora-paro-bhutan',
      'le-sirenuse-positano-italy',
      'hotel-santa-caterina-amalfi',
    ],
    splurgeVsSave:
      "Where to splurge: the second dinner. Most couples reserve their splurge for the arrival-night dinner — when they're jetlagged, tired and not really tasting anything. Save that night for room service and burn the budget on night 4, when you've adjusted, you're hungry, and the spend lands. Also splurge on one experience per trip: a Maldives sandbank breakfast ($300), a Como private boat ($600), a Tuscan truffle hunt ($400). It's the line item couples remember best. Where to save: flights (premium economy is a $1,800 upgrade that doesn't show up at the destination), and any room upgrade beyond one tier above entry — diminishing returns set in fast above the threshold suite.",
    closing:
      "$10k is enough to honeymoon honestly anywhere except the absolute top tier (Bora Bora overwater, Maldives at Soneva or Cheval Blanc, peak-season Italian villas). The couples who feel best about this budget pick one region, one hotel, and refuse to stretch — and end up with the trip they actually wanted, not a compressed version of someone else's $25k honeymoon.",
    faqs: [
      {
        question: 'Is $10,000 enough for a Maldives honeymoon?',
        answer: "Just barely — at the entry tier, 5 nights, in shoulder season. Conrad Maldives Rangali Island, Ayada Maldives or Amilla Maldives all start around $900–1,100/night for the simplest beach villa. Adding flights ($2,200 long-haul) and extras ($1,000) gets you to $10k for 5 nights. Overwater villas, peak season, or 7 nights pushes the math to $12–15k. Pick the next budget if those matter.",
      },
      {
        question: "What's the highest-impact upgrade at this budget?",
        answer: "Going from 7 nights at $1,000/night to 5 nights at $1,400/night. The property step-up from $1,000 to $1,400 is one tier above 'good 5-star' — Le Sirenuse versus a smaller Positano hotel, Belmond Cap Juluca versus a midscale Caribbean — and the experience delta is bigger than the two extra nights at the lower tier would have been.",
      },
      {
        question: 'Caribbean classic or Italian shoulder season?',
        answer: "Caribbean if you want the resort-bubble, no-decisions, beach-and-spa rhythm — pick Anguilla (Belmond Cap Juluca), Antigua (Jumby Bay), or St. Lucia (Jade Mountain). Italian shoulder if you want food, scenery, and walking out the door each morning — pick Amalfi (Le Sirenuse), Tuscany (Borgo Santo Pietro), or Lake Como in May/September.",
      },
      {
        question: "Are all-inclusive resorts worth it at $10k?",
        answer: "Less than at $5k. At $10k you can credibly do à la carte — and the upper-tier Caribbean inventory (Belmond Cap Juluca, Jumby Bay) is so good that all-inclusive becomes a compromise rather than an upgrade. The exception is if you specifically don't want to think about money once you arrive — in which case the upper-tier AI properties (Excellence Riviera Cancun's adults-only side, Sandals Royal Plantation) deliver real value.",
      },
    ],
  },

  15000: {
    intro:
      "$15,000 is the entry point to the Maldives done right, and the price of an Italian peak-season honeymoon that doesn't compromise. At $1,000/night for 7 nights you walk through the door at Conrad Maldives Rangali Island in their overwater villa, at Cap-Ferrat on the French Riviera, at Como Belmond Tremezzo with a lake view. The math finally aligns with the catalog: every property couples actually want to talk about — every Pinterest board pin — starts becoming credible at this number. But $15k is also the budget where the temptation to over-reach is strongest. The trap is trying to do too many things ($7k Maldives flight + $7k Italian honeymoon = $14k of hotel + flight gymnastics). The winners stay focused: one destination, one hotel, one splurge experience, and the extra dollars going into the room category, not the geographical scope.",
    whatItBuys:
      "Subtract $2,500 for premium economy long-haul or comfortable business-class regional, $1,500 for two signature off-resort experiences (a private boat, a multi-Michelin dinner, a helicopter transfer), and $11,000 lands on accommodation. That's 7 nights at $1,570/night or 5 nights at $2,200/night. The first buys Conrad Maldives in their entry overwater, Hotel Caruso Belmond on the Amalfi clifftop, Borgo Santo Pietro's biggest suite. The second buys Le Sirenuse in their best room, Aman Venice for a long weekend, or a Maldives overwater at a serious property (Anantara Kihavah, Soneva Fushi).",
    budgetTable: [
      { label: 'Nights realistic', value: '7 at $1,570 OR 5 at $2,200' },
      { label: 'Hotel tier', value: 'Real luxury — overwater villas, Italian peak rooms' },
      { label: 'Flight class', value: 'Premium economy, regional business' },
      { label: 'Splurge experience', value: 'Add 1: private boat, Michelin dinner, heli transfer' },
      { label: 'Per-night ceiling', value: '$1,570–2,200/night' },
      { label: 'Regions that work', value: 'Maldives entry overwater, peak Italy, Bora Bora entry, Seychelles entry' },
      { label: 'Regions still tight', value: 'Soneva Jani, Cheval Blanc Randheli, peak-season Cap d\'Antibes' },
    ],
    hotelSlugs: [
      'conrad-maldives-rangali-island',
      'anantara-kihavah-maldives-villas-maldives',
      'four-seasons-maldives-landaa-giraavaru',
      'grand-hotel-du-cap-ferrat-cote-dazur',
      'grand-hotel-tremezzo-lake-como',
      'passalacqua-lake-como-italy',
      'hotel-caruso-belmond-amalfi',
      'four-seasons-bora-bora',
    ],
    splurgeVsSave:
      "Where to splurge: the signature experience. At $15k, the trip-defining moment isn't the hotel — it's the half-day that lives in the wedding album. A Maldives sandbank dinner ($800), a Como private Riva boat to the villas ($1,200), a Cap-Ferrat private chef on the terrace ($1,500). Spend deliberately on one. Where to save: don't try to upgrade from premium economy to business class on a long-haul — at $4,500 the upgrade per couple, it's the worst per-dollar improvement on the trip. And resist booking the same hotel's two-tiered villa upgrade. The entry overwater villa is the same view as the deluxe overwater at half the price, with a smaller deck you won't fully use.",
    closing:
      "$15k is where most honeymoon dreams actually live, but only if you commit. Pick the Maldives or pick Italy; pick the resort or pick the city; pick one big experience and let the rest of the trip be quiet. The couples who try to compress a $25k honeymoon into $15k arrive exhausted. The couples who treat $15k as exactly $15k — and pick the trip that fits the number — come home glowing.",
    faqs: [
      {
        question: 'Should we go to the Maldives or to Italy at $15k?',
        answer: "Maldives if you want a single-property reset — same view, same sunset, same villa for 7 nights. Italy if you want food, walking, hill towns, and waking up to a different church bell each morning. Maldives wins if you've never done overwater. Italy wins if you've done resort honeymoons before. There is no third answer.",
      },
      {
        question: "Can we do overwater villas at $15k?",
        answer: "Yes. Conrad Maldives Rangali Island, Anantara Kihavah and Four Seasons Landaa Giraavaru all have entry overwater villas in the $1,200–1,600/night range. 7 nights plus $2,500 flights plus $1,500 extras lands inside $15k. You're not in the top-tier overwater (Soneva Jani's $4,000/night reserve, Cheval Blanc Randheli's $5,500/night water villa) but you're in real overwater, on a real Maldivian island, with a slide into the lagoon.",
      },
      {
        question: 'What does $15k get me in Italy that $10k doesn\'t?',
        answer: "Peak-season inventory. At $10k, the Amalfi Coast in August forces you to a smaller hotel or a more inland property; $15k lets you actually stay at Le Sirenuse or Hotel Santa Caterina in August. Same with Como — Passalacqua and Tremezzo become credible in their peak weeks. Italy gets dramatically better at $15k specifically because the supply of top-tier properties is tight and the next-best option is meaningfully worse.",
      },
      {
        question: "Is it worth flying business class on this budget?",
        answer: "Almost never. Business class long-haul is $4,500/couple over economy — 30% of your entire honeymoon budget for 14 hours of slightly better sleep. Premium economy ($1,800 over economy) is the right upgrade if any. The exception: if the destination is French Polynesia or Australia, where the flight is genuinely 18+ hours, business class shows up at the destination as 'still functional on day 1' rather than 'collapsed for 24 hours'. Even then, it's a luxury, not a necessity.",
      },
    ],
  },

  20000: {
    intro:
      "$20,000 is where the honeymoon curve breaks. Below it, every $1,000 you add visibly upgrades the trip — better hotel, longer stay, real overwater. Above it, the curve flattens dramatically: the difference between $20k and $30k is rarely the difference between two trips, and almost never the difference between two memories. At $20k you're in Soneva Jani / Cheval Blanc Randheli territory in the Maldives — the top of the global overwater market — or you can do 10 nights in Italy at the best properties without flinching. Or you can do 5 nights at Cheval Blanc St-Barths and walk away convinced no honeymoon will ever match it. This budget rewards restraint. The couples who go in determined to spend $20k well almost always come back saying they could've spent less; the couples chasing $20k 'because they can' come back unsure what it was for.",
    whatItBuys:
      "Subtract $3,000 for business class on long-haul or premium economy plus heli transfers, $2,000 for two big-ticket experiences (a Maldives private island day, a Como yacht charter, a Cap-Ferrat private chef night), and $15,000 lands on accommodation. That's 7 nights at $2,150/night, 10 nights at $1,500/night, or 5 nights at $3,000/night. The first buys the very best of accessible luxury; the third buys the absolute top of the global market (Cheval Blanc, Soneva Jani Reserve, Le Sirenuse Master Suite, Aman Venice's signature). The 10-night option is the dark-horse winner: ten days at Belmond Caruso or Borgo Santo Pietro at $1,500/night is a fundamentally different experience than 7 days at $2,150/night — slower, more place-like, less rushed.",
    budgetTable: [
      { label: 'Nights realistic', value: '5 at $3,000 OR 7 at $2,150 OR 10 at $1,500' },
      { label: 'Hotel tier', value: 'Top of global market — Cheval Blanc, Soneva, Aman' },
      { label: 'Flight class', value: 'Business class long-haul or PE + heli transfer' },
      { label: 'Splurge experiences', value: '2 big-ticket ($2k total)' },
      { label: 'Per-night ceiling', value: '$1,500–3,000/night' },
      { label: 'What works', value: 'Maldives at the top, Cheval Blanc anywhere, full Italian grand tour' },
      { label: 'Diminishing returns above', value: 'Yes — $25k+ rarely improves the actual trip' },
    ],
    hotelSlugs: [
      'soneva-fushi-maldives',
      'soneva-jani-maldives',
      'cheval-blanc-randheli-maldives',
      'cheval-blanc-isle-de-france-st-barths',
      'aman-venice',
      'le-sirenuse-positano-italy',
      'passalacqua-moltrasio-lake-como',
      'four-seasons-bora-bora',
    ],
    splurgeVsSave:
      "Where to splurge: time. The best-spent dollars at $20k go into duration, not nightly rate. Ten nights at $1,500/night in Italy is a meaningfully different trip from seven at $2,150 — and the property at $1,500/night above $1,500 is largely indistinguishable from the property at $2,150/night. Where to save: every category above 'top accessible luxury'. Going from Conrad Maldives ($1,400/night) to Cheval Blanc Randheli ($4,500/night) is a 3× spend for a 1.2× experience. The diminishing returns curve in honeymoon spending is steepest right around $2,500/night for hotels and $5,000 per couple for flights. Don't push past either unless you've spent the time discount first.",
    closing:
      "Honest take: $20k is the last budget that meaningfully shapes the honeymoon. Everything above it is increasingly about the wedding being talked about, not the honeymoon being lived in. The couples who feel best about this budget treat it as a permission slip to slow down — 10 nights instead of 7, an extra day in the spa, a longer drive between hill towns — rather than a license to spend faster. The trip beyond $20k is rarely the trip your future selves will be glad you took.",
    faqs: [
      {
        question: 'What does $20,000 get me that $15,000 doesn\'t?',
        answer: "Either the absolute top of the overwater market (Soneva Jani's reserves, Cheval Blanc Randheli's water villas, Soneva Fushi's signature beach), or 3 extra nights at the same Italian property at the same tier, or business class long-haul that actually changes your day-1 condition. Pick one — trying to upgrade hotel AND flight class AND duration leaves you with a slightly-better version of the $15k trip rather than a meaningfully different one.",
      },
      {
        question: 'Is Cheval Blanc Randheli worth $4,500/night?',
        answer: "If overwater perfection is the entire point of the honeymoon — yes. Cheval Blanc Randheli is the single best overwater product in the world. If you'd be just as happy at Conrad ($1,400/night), no — and most couples would be. The honest test: would you spend $20k on a 5-night stay at the absolute best property, or $20k on a 14-night stay across two great properties? There's no wrong answer, but most couples in retrospect prefer the second.",
      },
      {
        question: 'What does $30k buy that $20k doesn\'t?',
        answer: "Honestly, very little. Above $20k the marginal dollars buy bigger rooms (which you won't fully use), business class on regional flights (4 hours saved over the whole trip), and a private chef on a night you'd already have eaten well at the restaurant. The exception: French Polynesia island-hopping, true safari + beach trips, and Antarctica honeymoons all need $30k+ to do honestly. For anything else, $20k is the credible ceiling.",
      },
      {
        question: 'Should we go business class at this budget?',
        answer: "For long-haul to the Pacific (Bora Bora, Fiji) — yes, business class is the right call. For Maldives, Caribbean, and Italy, premium economy is fine; the savings are better spent on the hotel or an extra night. The exception is the return flight on a long-haul Pacific trip — many couples regret economy on the way home more than the way out.",
      },
    ],
  },
}
