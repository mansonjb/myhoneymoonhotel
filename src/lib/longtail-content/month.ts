import type { MonthContent } from './types'

// Destination slugs used here must exist in DESTINATION_META (data/destinations).
// Each month's content reflects that month's specific weather/crowd/price reality.

export const MONTH_CONTENT: Record<string, MonthContent> = {
  january: {
    intro:
      "January is when the Caribbean honeymoon season opens at full volume. The trade winds are reliable, the humidity drops, the Maldives is in its dry-season peak — and the entire industry knows it, which means peak pricing across the board. The honest read on January: it is the single best month for the Indian Ocean (Maldives, Seychelles) and the Caribbean's most consistent month, but you'll pay 30–40% more than shoulder-season pricing for the privilege. The pay-off is real — these are the weeks the destinations are designed for — but the trip benefits dramatically from booking 6+ months out, because the best villas and the best dates go first. January also rewards couples who can travel mid-month (the second and third weeks), avoiding both the New Year holiday surcharge and the late-January cold snap that occasionally hits the northern Caribbean.",
    whereToGo: [
      { destSlug: 'maldives', rationale: 'Dry-season peak with flat seas, clearest visibility of the year, and reliable sunshine. The reason to pay January prices.' },
      { destSlug: 'st-lucia', rationale: 'Trade winds steady, humidity low, Pitons in their photogenic best. Sugar Beach and Jade Mountain are at their best.' },
      { destSlug: 'turks-and-caicos', rationale: "Grace Bay's water is at its calmest and clearest in January. Direct flights from East Coast US make it the lowest-friction luxury Caribbean." },
      { destSlug: 'antigua', rationale: 'Cooler nights make the open-air dinners actually pleasant — August Antigua is humid; January Antigua is glassy.' },
      { destSlug: 'thailand', rationale: 'Andaman coast in dry season — Phuket, Krabi, Koh Yao are at their reliable best. Crowded but the weather earns it.' },
      { destSlug: 'mexico', rationale: 'Riviera Maya in its dry, cool, low-humidity window. The cenotes are at their clearest, and Tulum is finally walkable in midday.' },
    ],
    whereToSkip: [
      { destSlug: 'bali', reason: 'Wet season — daily afternoon downpours and lower visibility for snorkeling and surf.' },
      { destSlug: 'kenya', reason: 'Short rains have ended but the Great Migration is in southern Serengeti, not Mara — wrong month for the iconic shot.' },
      { destSlug: 'amalfi', reason: 'Many hotels closed for the season; the ones that are open feel half-empty in a sad way, not in a romantic way.' },
    ],
    whatsSpecial:
      "January's signature window is the Maldives manta-and-whale-shark season opener in the southern atolls — book at LUX South Ari Atoll or Cheval Blanc Randheli for the highest sighting probability. The Caribbean's full luxury inventory is open and operating at peak service levels. New Year's week is overpriced; the second and third weeks of January are the actual peak-quality, peak-price moment. Lunar New Year falls in late January or early February and can drive prices up across Southeast Asia — check the date if Thailand or Singapore is on the list.",
    closing:
      "January rewards committing. The honeymoons that work in this month are the ones booked 8 months out at a single great property in a region where January is the actual peak. The ones that don't work are the deal-hunting kind — there are no deals in January, only good trips and disappointing ones.",
    faqs: [
      { question: 'Is January worth the price premium?', answer: "Only for the Maldives, the Caribbean's top properties, and Thailand's Andaman coast. For anywhere else, March or November give you 90% of the experience at 70% of the cost. January is for couples who specifically want the destinations that are actively in peak season this month." },
      { question: "What's the cheapest January honeymoon destination?", answer: 'Mexico — Riviera Maya remains 15–25% cheaper than Caribbean equivalents and the weather is comparable. Sandals Royal Curacao and the upper-tier Mexico AI properties are the budget play.' },
      { question: 'Should we worry about the late-January weather dip?', answer: 'A weak cold front occasionally pushes into the northern Caribbean (Bahamas, Turks & Caicos) in late January, dropping evening temperatures into the mid-60s. It rarely affects daytime conditions. Southern Caribbean (St. Lucia, Grenada) is unaffected.' },
      { question: "Is the Maldives at its absolute best in January?", answer: "Yes, slightly. January and February are statistically the driest months with the calmest seas. March is 95% as good for ~85% of the price; some couples prefer it. January is the right pick if you want the absolute peak conditions." },
    ],
  },

  february: {
    intro:
      "February is the Valentine's premium month — the Caribbean and Maldives remain at peak quality but with a layered surcharge for the holiday weekend. The honest math: avoid the week of Valentine's Day (10–17 Feb), and February is essentially January's weather at a 10–15% discount. The Caribbean is at its driest. The Maldives is at its absolute statistical peak for visibility and flat seas. The Seychelles, often overlooked in winter, is in its sweet spot. The trip-planning move in February is to either pay the Valentine's premium for the weekend itself (a 3-night romantic stay at a top property) or book either side of the holiday and have a quieter, cheaper, equally-perfect honeymoon. Couples who try to split the difference (booking through the holiday but at a mid-tier property to save money) end up with the worst version of both options.",
    whereToGo: [
      { destSlug: 'maldives', rationale: 'Statistical peak for visibility and calm seas. February in the Maldives is the photograph you have in your head.' },
      { destSlug: 'seychelles', rationale: 'The under-appreciated winter window — North Island and Fregate in February are quieter than the Maldives and equally extraordinary.' },
      { destSlug: 'st-barts', rationale: 'February is St. Barts at its social peak. Cheval Blanc and Eden Rock are full of who they need to be full of; book 12 months out.' },
      { destSlug: 'antigua', rationale: 'Dry, breezy, low-humidity — the right Caribbean month for Jumby Bay specifically, whose ocean-front villas need the wind.' },
      { destSlug: 'thailand', rationale: 'Phuket and Phang Nga peak conditions. Six Senses Yao Noi in February is exactly what they sell on the brochure.' },
      { destSlug: 'sri-lanka', rationale: 'Galle and the south coast are in their dry-season peak — beach weather in the morning, tea-country drives in the cool afternoon.' },
    ],
    whereToSkip: [
      { destSlug: 'amalfi', reason: 'Closed season. Most properties dark until April. The few open feel ghost-town quiet.' },
      { destSlug: 'bali', reason: 'Wet season continuing — afternoon storms, lower temple visibility, surf inconsistent.' },
      { destSlug: 'iceland', reason: 'Days too short for road-trip honeymoons; Northern Lights are real, but the cold makes outdoor activity a chore rather than a romance.' },
    ],
    whatsSpecial:
      "Valentine's Day weekend (10–17 Feb) drives a $400–1,000/night premium at top resorts. Many properties run actual Valentine's packages — a private dinner setup, a turndown rose petal scene — that are worth booking on the night of the 14th specifically, not the surrounding nights. February is also when the Maldives manta ray season hits its peak in Ari Atoll. Whale-watching season opens in some Indian Ocean destinations. For couples flexible on date, the third and fourth weeks of February are the unbeatable value window — peak weather, post-Valentine pricing.",
    closing:
      "February is the secret of luxury honeymoon planning: skip the actual Valentine's weekend, book the week after, and you get January-tier conditions at a meaningful discount in destinations that aren't trying to charge a Valentine's premium for being themselves.",
    faqs: [
      { question: "Is the Valentine's premium worth it?", answer: "For one night, maybe — if you specifically want the rose-petal-turndown moment on the 14th itself. For a 7-night honeymoon, no. Book the week of the 17th–24th, save $400–800/night, and have the same weather." },
      { question: "What's better in February than January?", answer: 'The statistical reliability — February is the single driest month in much of the Maldives and Caribbean. The discount the week after Valentine\'s. And the Seychelles, which is in its under-priced peak.' },
      { question: 'Can we honeymoon in Europe in February?', answer: "Only Lapland (Northern Lights), Paris (it's beautiful), or Madeira/Canaries (warm enough to swim). Italy and Greece are mostly closed. Spain and Portugal are coastal-cold." },
      { question: "Why is St. Barts so expensive in February?", answer: "It's the social peak — a confluence of fashion industry, the Cheval Blanc / Eden Rock crowd, and post-Cannes-of-the-Caribbean energy. The 9th–17th of February at top properties commands a 50%+ premium over the December baseline. The week before or after is dramatically cheaper at the same hotels." },
    ],
  },

  march: {
    intro:
      "March is the crossover month — the Maldives sliding out of statistical peak, Mexico still in cool-dry conditions, Asia's beaches at their reliable best, and Europe just barely starting to wake up. The honest read on March: it's the smartest pricing month of the high-quality first quarter. You're paying 20–30% less than February at properties that are still 95% as good. The trade-off is variability — the Maldives starts catching its first occasional transition showers, the Caribbean has more wind, and weather forecasts get less reliable as the month progresses. Mid-March is the sweet spot: still firmly in the dry-season system, but at a price point that feels less like surrender. March is also the right month for couples who want a quieter version of the January experience — most properties are at 70–80% capacity, the resort beach is your beach, and dinner reservations are easy.",
    whereToGo: [
      { destSlug: 'maldives', rationale: 'Still dry, less crowded than February, prices noticeably softer. The smart pick if you want a Maldives honeymoon at 80% of January money.' },
      { destSlug: 'mexico', rationale: 'Riviera Maya in cool-dry mode, before the spring-break crowds dominate. Mid-March specifically is the value window.' },
      { destSlug: 'thailand', rationale: 'Peak dry-season conditions in the Andaman, before April humidity arrives. Yao Noi and Krabi at their best.' },
      { destSlug: 'japan', rationale: 'Cherry blossoms begin late March in Kyoto/Tokyo — the most romantic Japanese honeymoon window of the year, and the most photographed.' },
      { destSlug: 'morocco', rationale: 'Desert temperatures finally pleasant, riads in their value window before April high season. Marrakech to the Atlas in 5 days.' },
      { destSlug: 'south-africa', rationale: 'End of the rainy season in the Cape — wine country at its lushest. Sabi Sands game viewing strong as bush thins.' },
    ],
    whereToSkip: [
      { destSlug: 'bali', reason: 'Tail of the wet season — improving, but March 15-onward is when the gamble starts to pay off. Early March is still rainy.' },
      { destSlug: 'iceland', reason: 'Mud season — neither winter Northern Lights nor summer Highlands. Wait for June or do Feb properly.' },
      { destSlug: 'amalfi', reason: "Most properties don't open until Easter. Worth waiting." },
    ],
    whatsSpecial:
      "March is the cherry-blossom window in Japan — the single most romantic week of the Japanese travel year. The Maldives whale shark season holds strong in Ari Atoll. The Mexican Riviera enters its 'between the New Year peak and spring break' window — a 3-week pocket of low crowds, good prices, and reliable weather (typically mid-March to early April). Easter weekend (late March / early April depending on year) drives a sharp pricing spike at European Mediterranean destinations as they open for the season.",
    closing:
      "March is the planner's month. It rewards the couples who watched January and February prices, opted out, and waited for the quieter, cheaper, equally-good window. The risk is small (occasional shoulder weather) and the savings are real. If your dates are flexible, this is the month.",
    faqs: [
      { question: 'Is March still good for the Maldives?', answer: "Yes — March is 90% of February's quality at 75–80% of the price. The first signs of the southwest monsoon transition appear toward the end of March, but the first three weeks are firmly dry-season conditions." },
      { question: 'When in March exactly?', answer: 'The second and third weeks. The first week sometimes carries late-February pricing if Easter is early; the last week starts to hint at transition weather in tropical destinations.' },
      { question: 'Cherry blossoms in Japan — when exactly?', answer: 'Late March to early April for Tokyo and Kyoto, with the peak typically falling in the last week of March. Bookings 9 months out are essential — every romantic ryokan goes by the previous summer.' },
      { question: 'Spring break overlap — does it matter?', answer: 'Yes, in Mexico and the Bahamas specifically. The third and fourth weeks of March bring US spring break crowds to family-leaning destinations. Adults-only resorts (Belmond Maroma, Excellence Riviera Cancun) are insulated, but the airports and roads are crowded.' },
    ],
  },

  april: {
    intro:
      "April is the Mediterranean shoulder magic. The hill-town Italians, the Provençal villages, the Greek islands — all of them are reopening, the weather is genuinely warm enough to swim by the third week, and the crowds and pricing are dramatically below the May–September peak. The honest read on April: it is the smartest European honeymoon month of the year, with the single caveat that Easter weekend drives a sharp pricing spike and partial closure of restaurants. Plan around Easter or aim for the two weeks after. The Indian Ocean is starting its monsoon transition (Maldives prices drop, but so does reliability). Tropical destinations are increasingly variable. Japan is in late-cherry-blossom mode, and Sri Lanka is at the very end of its dry-season run. April rewards couples who want shoulder-season Mediterranean over winter-tropical — and that includes most couples who haven't already done the Mediterranean.",
    whereToGo: [
      { destSlug: 'amalfi', rationale: 'Coast just reopening — Le Sirenuse and Caruso back in service, weather warm enough for the lemon-garden lunch but pre-July crush.' },
      { destSlug: 'tuscany', rationale: "Wildflowers in the Val d'Orcia, truffle restaurants reopened, Borgo Santo Pietro's kitchen garden coming back to life." },
      { destSlug: 'santorini', rationale: 'Cliffside hotels reopening, cave suites still discount-priced, sunset at Oia without the August tour-bus crush.' },
      { destSlug: 'provence', rationale: 'Almonds in bloom, Domaine de Manville reopening, lavender fields preparing — Provence in its pre-lavender quiet window.' },
      { destSlug: 'japan', rationale: 'Late cherry blossoms in the north (Tohoku, Kyoto rural areas), then immediate transition to spring green. The two-week post-bloom window is criminally underrated.' },
      { destSlug: 'morocco', rationale: 'Desert nights cool, days warm, riads at their value-window best. Marrakech-to-Atlas-to-coast 10-day routings work properly in April.' },
    ],
    whereToSkip: [
      { destSlug: 'maldives', reason: 'Monsoon transition begins late April — visibility declines, afternoon storms possible. May–October pricing kicks in but conditions deteriorate.' },
      { destSlug: 'thailand', reason: 'Humidity surges in mid-April; Songkran festival (mid-April) shuts much of the country down for the week.' },
      { destSlug: 'caribbean', reason: 'Last good month of the dry-season but pricing still peak — not bad, just inferior to the alternatives in April specifically.' },
    ],
    whatsSpecial:
      "Easter weekend (varies by year) drives the Mediterranean spike — book around it. The two weeks after Easter are the European sweet-spot specifically: hotels open, restaurants reopen, but pre-May Day surge. Japan's cherry blossoms tail off in early April; the immediate post-bloom green window is dramatic in Kyoto's rural ryokans. Songkran (Thai New Year, mid-April) brings a country-wide water festival — beautiful as a cultural moment, brutal as a beach honeymoon week.",
    closing:
      "April is the Mediterranean's secret. It earns the couples who want Italy or Greece without the Italian Greece crush, who can travel either side of Easter, and who like the idea of being among the first guests of the season at properties that have been waiting all winter to host them.",
    faqs: [
      { question: 'Is April warm enough for the Mediterranean?', answer: 'By the third week, yes — pool weather, with cool nights. The first two weeks are walking-and-lunch warm but not swimming warm. Pick a property with a heated pool if you want to swim in early April.' },
      { question: 'Easter — how much does it move pricing?', answer: 'A lot. Italian, French and Greek properties spike 30–50% the week of Easter. The week after is back to shoulder-season pricing.' },
      { question: 'Is the Maldives still worth it in April?', answer: 'Early April yes, late April marginal. The southwest monsoon transition begins around April 20 and visibility/weather starts trending downward.' },
      { question: 'What about Tahiti / Bora Bora in April?', answer: 'Genuinely good — dry-season-adjacent, before high season pricing arrives. April is the under-rated French Polynesia window if you can stomach the long flight.' },
    ],
  },

  may: {
    intro:
      "May is the European sweet spot — the single best honeymoon month of the European year, full stop. The Mediterranean is warm enough for the lifestyle that matters (long lunches outside, swims after lunch, late-afternoon Aperol on the terrace). The crowds haven't arrived. Pricing is still meaningfully below peak. Provence is wildflower-led; Tuscany is in its green-hill, pre-summer-burn phase; the Amalfi Coast is at its photogenic best with bougainvillea peaking. The honest math: a May honeymoon at a tier-1 European property frequently outperforms a July or August honeymoon at the same property for half the friction, 30% less money, and 90% of the temperature. Outside Europe, May is uneven — the Indian Ocean is monsoon-transitioned, the Caribbean is at the start of hurricane prep, Asia is hot and humid. May is the European month, and couples who plan their dates around it specifically come back convinced.",
    whereToGo: [
      { destSlug: 'provence', rationale: 'Wildflowers and almond bloom continuing, lavender setting up for June, restaurants and markets all open. The single best Provençal month.' },
      { destSlug: 'tuscany', rationale: 'Hills still green, no high-summer haze, all properties open and restaurants in season. Borgo Santo Pietro and Castello di Reschio at their best.' },
      { destSlug: 'amalfi', rationale: 'Bougainvillea peak, weather pool-warm, prices below July/August by 25%. The smart honeymooner Amalfi week.' },
      { destSlug: 'greece', rationale: "Cyclades open, water warm enough by mid-May, restaurants fully back. Santorini in May is Santorini's secret." },
      { destSlug: 'morocco', rationale: 'Late spring before the desert heat — still pleasant in Marrakech and the Atlas. Riad season ends mid-month; book the first half.' },
      { destSlug: 'japan', rationale: 'Golden Week (early May) is brutal; mid-to-late May is one of the most pleasant Japanese windows of the year — green mountains, no crowds, mild temperatures.' },
    ],
    whereToSkip: [
      { destSlug: 'maldives', reason: 'Monsoon period — afternoon storms, lower visibility, less reliable weather. Cheaper, but you came for guaranteed sun.' },
      { destSlug: 'caribbean', reason: 'Late dry season but hurricane season opens in June — most couples opt for either January peak or late November after the all-clear.' },
      { destSlug: 'india', reason: 'Pre-monsoon heat at its worst — Rajasthan above 100°F daily; not the romantic Mughal-palace experience the brochures sell.' },
    ],
    whatsSpecial:
      "Cannes (mid-May) shuts the Riviera for a week — book Côte d'Azur either side of it or accept the social-scene chaos. Provençal lavender begins in late May at low elevation. Italian truffle season starts to wind down (a few mountain truffles remain). The Greek Easter (varies) may push into May and drives ferry and hotel spikes. Japan's Golden Week (first week of May) is the country's most-crowded domestic travel week of the year — avoid.",
    closing:
      "If your dates are flexible and you want a Mediterranean honeymoon, May is the answer. Every couple who has done Provence or Tuscany in May independently arrives at the same conclusion: this is the month the postcards were taken in, and there's no good reason to come at any other time.",
    faqs: [
      { question: 'Is the water warm enough to swim in May?', answer: 'In the Mediterranean: by mid-May, yes — pool warm and morning ocean swim warm. The Adriatic and the Greek Aegean run cooler than the Tyrrhenian by 2–3°F.' },
      { question: 'Provence in May or June?', answer: 'May for wildflowers, green hills, lower prices. June for the iconic lavender bloom. Honest pick: May for everything except the photo specifically of you in the lavender — that needs late June.' },
      { question: 'Is Cannes a problem if we\'re not going to Cannes?', answer: 'Yes — Cannes pulls hotel rates and flights up across the Riviera, Provence, and Italian Riviera for a 7–10 day window. Book either side of it.' },
      { question: "What's the best 'second' European honeymoon in May?", answer: "Portugal — the Algarve and the Douro. Pre-summer crowds, full restaurant season, prices still kind. The under-the-radar pick for couples who've already done Italy or France." },
    ],
  },

  june: {
    intro:
      "June is the month two things happen simultaneously: Bora Bora and French Polynesia open their dry season, and Greece moves into its full high season. Everything in the South Pacific tilts dramatically in your favor — lagoons flat, skies clear, trade winds easing — and Greek prices and crowds tilt against you. June is also when the Maldives is firmly in its monsoon (cheap but variable), Italy and Provence are still good but starting to fill, and the Caribbean officially enters hurricane season. The honest read on June: if you're going long-haul to the Pacific, this is the right time. If you're going to Europe, you're choosing between the end of the May shoulder (the first half of June) and the start of the July crush (the second half). Greek islands specifically swing through June from quiet to mobbed within two weeks. The first ten days of June are the under-the-radar Greek honeymoon window.",
    whereToGo: [
      { destSlug: 'bora-bora', rationale: 'Dry season opens — flat lagoons, clear skies, every overwater villa in service. The reason couples wait a year to book this month.' },
      { destSlug: 'french-polynesia', rationale: 'Moorea, Bora Bora, Tahaa all in their peak weather window. The 14-day French Polynesia island-hop honeymoon starts working in June.' },
      { destSlug: 'fiji', rationale: 'Dry season — Likuliku, Vomo, Laucala at their best. The under-priced Pacific alternative to Bora Bora.' },
      { destSlug: 'greece', rationale: 'Early June is the high-quality, pre-crush window. Cyclades warm, sunset reservations easy, July prices not yet active.' },
      { destSlug: 'provence', rationale: 'Lavender begins — early June is wildflowers, late June is the first lavender bloom. Pick the window that matches the photograph you want.' },
      { destSlug: 'iceland', rationale: 'Midnight sun, Highlands accessible, road-trip honeymoon weather. Deplar Farm at its summer peak.' },
    ],
    whereToSkip: [
      { destSlug: 'maldives', reason: 'Active monsoon — choppy seas, afternoon storms, reduced snorkeling visibility. Skip unless cost is the only metric.' },
      { destSlug: 'mexico', reason: 'Caribbean hurricane prep begins — not high-risk yet but humidity surges and prices reflect the shoulder.' },
      { destSlug: 'sri-lanka', reason: 'Southwest monsoon hits the south and west coasts — Galle and Tangalle off the table.' },
    ],
    whatsSpecial:
      "Bora Bora's dry season opens — the single best month-pair (June/July) of the South Pacific year, before the cyclone-shoulder of October. Provençal lavender begins in mid-to-late June at low elevation, late June at higher. Greek islands flip from 'discoverable' to 'crowded' around June 15 — book the first half. European school holidays haven't started; that happens in early July.",
    closing:
      "June is the South Pacific month. If you've been waiting for the Bora Bora overwater villa moment, this is when to do it. Outside the Pacific, June is a transitional, second-best choice — the May shoulder dies, the July crush builds.",
    faqs: [
      { question: "Is Bora Bora really at its best in June?", answer: 'Yes — June and July are statistically the driest, calmest, clearest months in French Polynesia. Slightly cooler than August (which can be muggy), and before the August school-holiday surge from Europe.' },
      { question: 'When does the lavender bloom?', answer: "Low-elevation Provence (Valensole) starts mid-to-late June; the Plateau de Valensole is photo-iconic by July 1. Higher elevations (Sault) wait until early July." },
      { question: 'Is June too late for May-tier European pricing?', answer: 'First 10 days yes, in many properties. After June 10, pricing moves toward July rates rapidly. Greek islands in particular swing fast.' },
      { question: 'What about the Caribbean in June?', answer: 'Statistically still pre-active-hurricane (peak is August–October), but humidity is high and the savings versus January are not life-changing. Skip unless your dates are locked.' },
    ],
  },

  july: {
    intro:
      "July is the African safari peak. The Maasai Mara, the Serengeti, Kenya's Laikipia, Botswana's Okavango — all of them hit dry-season conditions, game thinning around remaining water, and the photographic light becomes extraordinary. For a safari honeymoon, July is the answer. Outside Africa, July is mixed: Bora Bora and Fiji are at peak conditions; Greece and Italy are at their fullest, hottest and most expensive (the crowds are real, the prices are unforgiving, and the heat in southern Italy hits 95°F+); the Caribbean and Maldives are out of season. The honest read on July: it is the African month, the French Polynesia month, and the right time only for Mediterranean travelers who are committed to the peak experience and willing to pay for it. For most couples, August and July are the months to skip in Europe, but if you're going on safari, this is the month that justifies the trip.",
    whereToGo: [
      { destSlug: 'kenya', rationale: 'Mara migration arriving — wildebeest crossings begin, game density peaks, dry-season light at its most photographic.' },
      { destSlug: 'tanzania', rationale: 'Serengeti in dry-season conditions, Mara River crossings near the Kenyan border. Singita Grumeti and Faru Faru at their peak.' },
      { destSlug: 'botswana', rationale: 'Okavango Delta with the floodwaters in — Belmond Eagle Island Camp and Mombo Camp in their photographic prime.' },
      { destSlug: 'bora-bora', rationale: 'Mid-dry-season — same conditions as June but with marginally higher prices and the European school crowd starting to fill.' },
      { destSlug: 'iceland', rationale: 'Highlands fully accessible, all roads open, midnight sun makes a honeymoon road trip feel infinite.' },
      { destSlug: 'patagonia-chile', rationale: 'Counter-season — Patagonian winter. Tierra Patagonia in snow is a fundamentally different honeymoon (skiing, fireside lodge nights). For couples who want winter.' },
    ],
    whereToSkip: [
      { destSlug: 'amalfi', reason: '95°F+, fully crowded, every restaurant booked weeks out. The Amalfi of brochures is gone in July — even Le Sirenuse feels overrun.' },
      { destSlug: 'maldives', reason: 'Active monsoon, reduced visibility, frequent storms. The cheap option but not what you came for.' },
      { destSlug: 'thailand', reason: 'Andaman coast in low season — rainy days, surf rough. Wait for November.' },
    ],
    whatsSpecial:
      "Maasai Mara wildebeest migration crossings begin in July — book Angama Mara, Cottar's 1920s or Mara Bushtops 12+ months out. Bora Bora is in mid-dry-season, the most reliable conditions of the year. Bastille Day (July 14) in France shuts much of the country down for a 4-day window. Italian and Greek school holidays begin mid-July — pricing moves up sharply.",
    closing:
      "July is the safari honeymoon. Couples who book a safari for this month tend to remember it as one of the most distinctive trips of their lives. Couples who book Italy or Greece in July tend to come back wishing they'd gone in May or September.",
    faqs: [
      { question: 'Is July the best safari month?', answer: 'For the Mara crossings — yes. For game viewing generally — July through October is the peak window. July offers slightly cooler nights than August and slightly fewer crowds than late August.' },
      { question: 'Bora Bora July or August?', answer: 'July is marginally drier and cooler. August carries the European school crowd surge. July wins on both counts.' },
      { question: 'Should we ever do Italy in July?', answer: "Only if your dates are locked and Italy is the only choice. Even then, pick rural Tuscany (Borgo Santo Pietro) over the coastal Amalfi — the inland heat is easier to manage at a hilltop property with pool and shade than at a coastal property where the heat radiates off the cliffs." },
      { question: 'What does a safari honeymoon cost in July?', answer: 'Realistic: $1,500–4,000 per person per night at the top-tier camps (Singita, Cottar\'s, Mombo). 5–7 nights of safari plus 5 nights of beach (Zanzibar, Mauritius) lands at $25–45k per couple. The high end of honeymoon budgets, but for many couples the most memorable money they\'ve spent on a trip.' },
    ],
  },

  august: {
    intro:
      "August is the month to skip Europe and go South Pacific. The Mediterranean is at its absolute peak crush — every Italian, French, and Spanish family takes August off, Le Sirenuse has zero last-minute availability, every restaurant on the Amalfi Coast has a 3-week-out booking window, and the heat in southern Europe regularly hits 100°F. For a couple looking at a honeymoon specifically (intimacy, calm, focus on each other), August in Europe is a categorical mistake. The South Pacific, however, is exactly the opposite — Bora Bora, French Polynesia, and Fiji are all in peak dry-season conditions, and Mauritius and the Seychelles are in their winter sweet spot (dry, breezy, cooler than the summer months). Africa is still in safari peak. The Americas (Patagonian winter, Mexico's hurricane shoulder) are mostly off the table. The honest read on August: it is the single most consequential month-of-year planning decision in honeymoon planning, because the wrong destination ruins the trip and the right destinations are spectacular.",
    whereToGo: [
      { destSlug: 'bora-bora', rationale: 'Peak dry season — flat lagoons, clear skies, every overwater villa in service. The reason to fly 18 hours.' },
      { destSlug: 'french-polynesia', rationale: 'Tahiti-Moorea-Bora-Bora island-hopping at its best. The 14-day French Polynesia honeymoon was designed for this month.' },
      { destSlug: 'fiji', rationale: 'Dry, breezy, prices still below October peak. Likuliku and Laucala at their honeymoon peak.' },
      { destSlug: 'mauritius', rationale: 'Winter sweet spot — dry, breezy, cooler. Constance Le Prince Maurice and Royal Palm at their most pleasant.' },
      { destSlug: 'kenya', rationale: 'Mara migration in full force — peak game viewing window of the year. Wildebeest crossings near-daily.' },
      { destSlug: 'iceland', rationale: 'Last month of fully accessible Highlands; midnight sun fading but still long days. Deplar Farm peak season.' },
    ],
    whereToSkip: [
      { destSlug: 'amalfi', reason: '100°F+, every restaurant booked weeks out, cliffs throwing back heat. The honeymoon Amalfi of brochures does not exist in August.' },
      { destSlug: 'tuscany', reason: '95°F+, hill towns hot enough that midday walking is unpleasant. Wait for September.' },
      { destSlug: 'provence', reason: 'Lavender already over, mistral winds blowing hot, August holiday crush. Pick June for lavender or September for quiet.' },
    ],
    whatsSpecial:
      "Bora Bora hits peak conditions — driest, calmest seas, clearest visibility. The Mara wildebeest migration is in full force — the iconic river crossings are most likely in August. Italian Ferragosto (August 15) shuts much of the country down for a full week. The Maldives transitions from monsoon to dry around the third or fourth week of August — late August is the smart-pricing window if you can stomach the variability.",
    closing:
      "August rewards picking the right hemisphere. The South Pacific in August is the trip of a lifetime; Europe in August is a logistical hostage situation. The single biggest planning mistake honeymoon-bound couples make is not understanding this.",
    faqs: [
      { question: "Why is Europe so bad in August?", answer: "Because every Italian, French and Spanish family takes August off — restaurants close (the owners' families are also on holiday), traffic surges, prices peak, and the Mediterranean coastal towns triple in population. The heat compounds it. The combined experience is a beach-town fairground, not a honeymoon." },
      { question: 'Is Bora Bora really worth the 18-hour flight in August?', answer: 'For most American couples who specifically want the overwater villa experience — yes. August is the single most reliable Bora Bora window of the year, and the conditions justify the long flight. The trip pays back on the lagoon.' },
      { question: 'What about Mexico or the Caribbean in August?', answer: "Active hurricane season starts mid-August. The risk isn't extreme, but the insurance, the weather variability, and the heat all stack against you. Most couples wait for January or November." },
      { question: 'African safari in August versus July?', answer: 'August has marginally higher game density and migration intensity, but also higher crowds in the Mara (peak season). July is slightly quieter; September is the smart-pricing window. All three are excellent.' },
    ],
  },

  september: {
    intro:
      "September is the insider's month. Italy is quiet and warm — the August crowds have gone home, the restaurants have reopened from Ferragosto, the heat has eased, and the wine harvest begins. Greece is at its second peak — water still warm from August, sunshine reliable, prices noticeably softer than July. The Aegean specifically is magical in September. Outside Europe, Bora Bora is wrapping up its dry season, the Maldives is transitioning back to dry conditions, and African safari is still in peak. The honest read on September: it is the smartest European honeymoon month for couples who want warmth but not crowds, food but not chaos, and pricing that respects them. The single best week of the European honeymoon year is arguably the second week of September — restaurants open, weather pristine, hotels at 70% capacity, and the September discount visible across the board. Booking 6+ months out is essential because the locals know this too.",
    whereToGo: [
      { destSlug: 'tuscany', rationale: 'Harvest season — Brunello, Chianti, vintages being picked. Borgo Santo Pietro and Castello di Reschio at their gastronomic peak.' },
      { destSlug: 'greece', rationale: 'Aegean water still warm, restaurants reopened from August crush, prices below July by 25%. The Cyclades secret.' },
      { destSlug: 'amalfi', rationale: 'Heat eased, restaurants and shops back from holiday, the September Coast is what couples thought they were getting in July.' },
      { destSlug: 'sicily', rationale: 'Warm, no longer scorching, harvest table at country properties. Verdura and Rocco Forte in their best window.' },
      { destSlug: 'croatia', rationale: 'Dalmatian coast in its post-August calm — Dubrovnik, Hvar without the crush, ferry routes still in full schedule.' },
      { destSlug: 'kenya', rationale: 'Mara migration still strong, dry-season light excellent, slight pricing discount as European school year resumes.' },
    ],
    whereToSkip: [
      { destSlug: 'caribbean', reason: 'Peak hurricane season — September is statistically the highest-risk Atlantic month.' },
      { destSlug: 'maldives', reason: 'Tail of monsoon transition — improving but not yet at dry-season reliability.' },
      { destSlug: 'mexico', reason: 'Hurricane risk to Riviera Maya; the September discount is not enough to justify the variability.' },
    ],
    whatsSpecial:
      "Italian wine harvest begins — many properties run harvest dinners, vineyard walks, and barrel tastings. The second week of September is the unofficial 'best week of the European year' among travel professionals. Greek tourist crowds collapse the week after the Greek school year starts (early September), opening up the islands. The Bora Bora dry season starts to wind down — last call for the calm-lagoon photograph.",
    closing:
      "September is when honeymoon planning rewards patience. The couples who watched the July and August Italian prices, opted out, and booked September come back glowing. Every other month in Europe is some version of compromise; September is when the compromises evaporate.",
    faqs: [
      { question: 'Is September warm enough for European honeymoons?', answer: 'Yes — both Italian Riviera and Greek Aegean water remain swim-warm through September. Daytime highs are mid-80s; cooler nights are pleasant.' },
      { question: "What's the single best September week?", answer: "The second week (typically September 8–15). Restaurants are open, weather is warm, August crowds are gone, and the pre-October pricing window holds. Many travel professionals consider this the single best European honeymoon week of the year." },
      { question: 'Italy in September: south or north?', answer: 'Either works. The south (Amalfi, Sicily) is at the harvest table; the north (Lake Como, Piedmont) is at the wine peak. Honest pick: Sicily for couples who want unique food and quieter beaches; Tuscany for couples who want the postcard rural Italy.' },
      { question: 'Why not Caribbean in September?', answer: "Statistical peak hurricane month. The risk isn't catastrophic, but the insurance and contingency planning add stress to a trip that should be the opposite. Wait six weeks." },
    ],
  },

  october: {
    intro:
      "October is two distinct windows: the last weeks of warmth in the Mediterranean (first half of the month) and the opening of Sri Lanka and select Asian destinations (second half). Italy and Greece are still warm enough for swimming through mid-October, with crowds collapsed and pricing aggressive. Sri Lanka emerges from its monsoon and becomes the under-priced honeymoon find of the second half of the year. The Maldives is transitioning back to dry-season reliability. Caribbean is still hurricane-shoulder. The honest read on October: it is the smart-pricing tail of the European year, and the opening of the Indian Ocean's second peak. Couples flexible on dates can do a stunning Italian honeymoon at 40% off the July prices, or an early-Maldives stay before the December crush starts driving up rates. October also rewards couples who don't need 'classic' destinations — Morocco, Sri Lanka, Madeira are all in their value sweet-spot.",
    whereToGo: [
      { destSlug: 'sri-lanka', rationale: 'Monsoon transitions out — south coast (Galle, Tangalle) reopens, hill country (Kandy, Nuwara Eliya) in cool-season peak.' },
      { destSlug: 'amalfi', rationale: 'First half of October — water still warm, restaurants still open, August prices forgotten. The under-the-radar Amalfi window.' },
      { destSlug: 'sicily', rationale: 'Warm afternoons, cool evenings, harvest gone but the food culture lingering. Verdura with the pool warm and the dining room quiet.' },
      { destSlug: 'morocco', rationale: 'Desert temperatures pleasant again, riads at value pricing before the December peak. Marrakech to the Atlas at its best window.' },
      { destSlug: 'maldives', rationale: 'Transition to dry season — late October sees increasing reliability with pre-December pricing still holding.' },
      { destSlug: 'japan', rationale: 'Autumn foliage in Kyoto begins late October — koyo season opens, ryokans in their second-peak window. Romantic and dramatic.' },
    ],
    whereToSkip: [
      { destSlug: 'caribbean', reason: 'Late hurricane shoulder — risk easing but not gone, and the savings are not enough to justify the contingency planning.' },
      { destSlug: 'mauritius', reason: 'Transitional weather — improving from winter but not yet at peak. Wait for November or December.' },
      { destSlug: 'bora-bora', reason: 'End of dry season — cyclone risk starts to creep up. Wait for next May or accept the variability.' },
    ],
    whatsSpecial:
      "Sri Lanka's south coast reopens after the southwest monsoon — Cape Weligama, Anantara Tangalle, the south's full beach inventory comes back online. Japan's koyo (autumn foliage) opens in late October — Kyoto rural ryokans at their second peak. Italian truffle season opens in late October — Alba white truffles at the Piedmont. Halloween / European school half-term drives a small spike in late October — book around it if dates are flexible.",
    closing:
      "October is the value month for couples who want a European honeymoon without paying European peak prices, and the opening of the Indian Ocean's second peak. It rewards both nostalgia (one more week of warm Italy) and discovery (a new destination at its quiet best).",
    faqs: [
      { question: 'Is the Mediterranean still warm enough in October?', answer: 'First two weeks yes — water remains swim-warm, daytime highs in the mid-70s. After mid-October the swimming window closes; the walking-and-dining window holds through the end of the month.' },
      { question: "What's Sri Lanka actually like in October?", answer: 'South coast (Galle, Tangalle, Mirissa) reopens — beach weather returns. Hill country (Kandy, Nuwara Eliya) is in its dry, cool window. The cultural triangle (Sigiriya, Polonnaruwa) is mid-monsoon transition; check the week.' },
      { question: 'Italy in October — North or South?', answer: 'South. Sicily, Amalfi, Puglia all hold warmth into October. Northern Italy (Como, Piedmont) becomes a different trip — wine country and foliage, beautiful but cool.' },
      { question: 'Is October worth it in Japan?', answer: 'Late October specifically — yes. The koyo (autumn foliage) season opens in Kyoto and the rural ryokans at the same moment. One of the most photogenic Japanese honeymoon windows.' },
    ],
  },

  november: {
    intro:
      "November is the Maldives dry-season opener — the calmer seas, clearer skies, and reliable sunshine all return, but pricing hasn't yet hit the December peak. The honest math: November is the single smartest Maldives month of the year. You're paying 40–50% less than December for 95% of the weather. The first two weeks of November are the under-the-radar Indian Ocean honeymoon window. November also opens Bali's wet season (cheap but variable), the Caribbean's post-hurricane all-clear, and the Thai dry season's first weeks. It is broadly the start of the tropical second peak. Europe is mostly closed for honeymoon purposes. The honest read on November: it is the month for couples who watch pricing carefully — every tropical destination is either at the start of its second peak or in a value pocket, and the discipline of booking early November rather than late November pays back in real money.",
    whereToGo: [
      { destSlug: 'maldives', rationale: 'Dry season opens — first two weeks of November are 95% of December conditions at 50–60% of the price. The smart play.' },
      { destSlug: 'seychelles', rationale: 'Drier-season opening — North Island and Fregate at their best, and the pricing window before the December surge.' },
      { destSlug: 'thailand', rationale: 'Andaman coast dries out — Yao Noi, Krabi, Phuket entering peak. Pre-December pricing window.' },
      { destSlug: 'caribbean', rationale: "Post-hurricane all-clear — the late-November Caribbean honeymoon is one of the year's best-priced. Belmond Cap Juluca, Jumby Bay back in form." },
      { destSlug: 'bali', rationale: 'Wet season opens — afternoon storms but morning sun, prices low, fewer tourists. The value pick if you can flex around weather.' },
      { destSlug: 'mexico', rationale: 'Post-hurricane Riviera Maya in its cool, dry, low-humidity sweet spot. Belmond Maroma at its best window.' },
    ],
    whereToSkip: [
      { destSlug: 'amalfi', reason: 'Closed season — most properties shutting down or closed. Wait until April.' },
      { destSlug: 'greece', reason: "Cyclades closed, mainland cool and wet. Athens still works, but it's a city break, not a honeymoon." },
      { destSlug: 'kenya', reason: "Short rains — the Mara is recovering, game viewing is variable. Wait for January or skip to next July." },
    ],
    whatsSpecial:
      "Maldives dry season opens — the price-to-quality ratio peaks in the first two weeks. American Thanksgiving (third or fourth week of November) drives a US-resort surge that hits the Caribbean and Mexico but largely spares the Maldives. Diwali (early-to-mid November) drives a surge across India and Sri Lanka — book around it. Bali enters wet season with afternoon storms but morning sun — a real value window for couples who don't need every afternoon dry.",
    closing:
      "November is the planner's reward. The honeymoons that work best in this month are the ones booked early — first-two-weeks dates locked at properties that are about to enter their high-season prices but haven't yet. The discipline of November pays back in money the December bookings never will.",
    faqs: [
      { question: 'Maldives in November or December?', answer: 'November, if your dates are flexible. The first two weeks of November give you 95% of December conditions at 50–60% of December prices. The third week of November is the value sweet spot — dry-season established, pre-Thanksgiving surge, pre-December peak.' },
      { question: 'Is the Caribbean safe in November?', answer: 'Statistically yes — peak hurricane season ends in late October. Late November is firmly in the all-clear window. The first weeks of December haven\'t yet caught Christmas pricing.' },
      { question: 'Bali in November — should we?', answer: 'It is the value pick. Afternoon storms are real but generally short (90 minutes), and the rest of the day is sunny. If you can flex one afternoon to spa instead of beach, November Bali is genuinely good value.' },
      { question: 'What about Thanksgiving travel?', answer: 'It surges the US and Caribbean specifically. Maldives, Bali, Thailand are largely unaffected — November Thanksgiving is a great time to do Indian Ocean.' },
    ],
  },

  december: {
    intro:
      "December is the global peak — Maldives, Caribbean, Indian Ocean, Mexico all at maximum quality and maximum price. The honeymoon you saw on Instagram was probably shot in December at one of fifteen specific resorts, and they all charge accordingly. The honest read on December: it is the most expensive honeymoon month of the year, with no discount available for any quality destination. The flip side: it works. Every destination on this list delivers exactly what it promises. The Maldives is glass-flat; the Caribbean is dry; Mexico is cool; Mauritius and the Seychelles are pristine. December is also the month for couples who specifically want the Christmas-honeymoon experience (Lapland's Northern Lights, an Aman Christmas in Bhutan, or a New Year's at the Maldives with the resort's most elaborate dinner of the year). The strategy in December is to either pay the peak premium consciously, or take the first two weeks (pre-Christmas peak) where the weather is identical and prices are 25% lower.",
    whereToGo: [
      { destSlug: 'maldives', rationale: 'Statistical peak — flat seas, peak visibility, dry sky. The trip the brochure promised, at the brochure price.' },
      { destSlug: 'caribbean', rationale: 'Trade winds steady, dry-season peak, perfect water. St. Lucia, Antigua, Anguilla in their photographic best.' },
      { destSlug: 'mauritius', rationale: 'Dry-season peak — Constance Le Prince Maurice, Royal Palm, Saint Géran at their best.' },
      { destSlug: 'seychelles', rationale: 'Dry season — North Island, Fregate, Constance Lemuria all at peak conditions.' },
      { destSlug: 'iceland', rationale: 'Northern Lights peak window — Deplar Farm in winter is a fundamentally different and dramatic honeymoon.' },
      { destSlug: 'finland', rationale: 'Lapland honeymoons in their iconic window — glass igloos, Northern Lights, snow. The non-tropical December alternative.' },
    ],
    whereToSkip: [
      { destSlug: 'bali', reason: 'Wet season peak — afternoon storms heavy, ceremonies disrupted, surf inconsistent.' },
      { destSlug: 'amalfi', reason: 'Fully closed.' },
      { destSlug: 'tuscany', reason: 'Cold and closed — wait for May.' },
    ],
    whatsSpecial:
      "Christmas and New Year are the two most expensive weeks of the year at every tropical property — pricing premiums of 40–80% over the November baseline. Many properties require minimum-stay bookings (7+ nights) over the holiday weeks. The first two weeks of December (December 1–15) carry full dry-season conditions at pre-Christmas pricing — the smart play. Lapland's Northern Lights peak in late December — Levi, Saariselkä, Inari all in their most photographic window. New Year's at the Maldives often includes an elaborate gala dinner included in the package — worth budgeting for if you're going anyway.",
    closing:
      "December rewards committing to the peak. The couples who feel best about it are the ones who booked early, paid the premium consciously, and got exactly the trip they wanted. The ones who feel cheated are the ones who tried to deal-hunt into a December honeymoon — that doesn't exist. The honest play is to either go in December at full price for the certain experience, or to go in early November or late March for the same weather at half the cost.",
    faqs: [
      { question: 'Is December too expensive to be worth it?', answer: 'Only if you can travel in November or March instead. December delivers exactly what it promises — flat-perfect Maldives, dry Caribbean, pristine Mauritius. The question is whether the certainty is worth 40–60% more than November or 25% more than late March.' },
      { question: "What's the single best December week?", answer: 'The week of December 8–15. Full dry-season conditions, pre-Christmas pricing, less crowded than the holiday peak. Couples who can travel this exact week get 95% of December at 75% of the cost.' },
      { question: 'Northern Lights in December?', answer: 'Yes — late December is the peak window for Lapland. Deplar Farm in Iceland, Octola in Finland, Aurora Safari in Sweden. A fundamentally different December honeymoon, but for many couples a better fit than tropical-peak.' },
      { question: 'Christmas at the Maldives — what does it cost?', answer: 'Realistic: $1,500–4,000+ per night for the holiday week, often with 7-night minimum stays. The included gala dinner (December 31) is genuinely elaborate. Total all-in for the week: $20–45k per couple. The trip is real; the price tag is not for everyone.' },
    ],
  },
}
