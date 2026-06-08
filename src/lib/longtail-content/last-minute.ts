import type { LastMinuteContent } from './types'

export const LAST_MINUTE_CONTENT: LastMinuteContent = {
  intro:
    "The clean answer to 'can I book a real honeymoon inside 30 days' is yes — about 80% of the catalogue is available at 14 days' notice if you have flexibility on date AND destination, and 95% is available at 30 days' notice except for the four or five weeks of the year when global luxury inventory is simply sold out. The honest version of this page is destination- and season-specific: some windows are wide open all year (Maldives off-season, shoulder Caribbean, Riviera Maya, Bali outside Christmas), some windows are gone six months out (peak Maldives Dec-Feb, Christmas/NY St. Barts, August Amalfi, peak safari season in Kenya and Botswana). The pitch nobody writes honestly: by being flexible on dates within a 4-week window, couples save 20-30% on the same hotel they'd have paid full rack rate for if they'd booked it 8 months out. Last-minute is not the discount path, but it's not the disaster path either — if you pivot the destination to the season, the trip works.",
  yesWindows: [
    {
      title: 'Maldives — April-May and September-October',
      body: "The pre-monsoon shoulder (April-May) and the post-monsoon recovery (September-October) both deliver 80-90% of peak Maldives weather at 60-70% of peak rates, and properties take last-minute bookings as standard. Conrad Maldives Rangali Island, Anantara Kihavah, LUX South Ari Atoll, and most of the Soneva and Six Senses lower categories have real 14-day availability. Even Cheval Blanc Randheli takes inside-30-day bookings in these windows. The trick: book the seaplane transfer at the same time, not later — that's the constraint, not the room.",
    },
    {
      title: 'Caribbean — May, September, October-November (pre-Christmas)',
      body: "The post-Easter softness through to early summer, and the September-November shoulder, both produce real last-minute availability across St. Lucia, Antigua, Grenada, Turks & Caicos, and Anguilla. Belmond Cap Juluca, Jumby Bay, Jade Mountain, Sugar Beach all have direct-website last-minute deals in these windows. The hurricane-season caveat: late August through early October has statistically higher storm risk; book travel insurance with the cancellation clause active.",
    },
    {
      title: 'Italy — April and October (shoulder)',
      body: "The Amalfi Coast, Tuscany, Lake Como, and Cap-Ferrat all reopen in April and start tapering in October. Within a 4-week window in April or October, last-minute bookings at Le Sirenuse, Borgo Santo Pietro, Hotel Caruso, and Grand Hotel Tremezzo are credible — same hotels, 25-35% less than peak. The Italian shoulder advantage: restaurants are open, queues are gone, the weather is mid-20s°C, and the property staff are still pre- or post-peak relaxed.",
    },
    {
      title: 'Bali — March and October-November (wet shoulder)',
      body: "Bali's wet season has thinner rain than people think — afternoon storms, mornings clear. March (end of wet season) and October-November (start of wet season) both produce open last-minute availability at Capella Ubud, Alila Villas Uluwatu, Como Shambhala, and the mid-tier villa properties. The trade-off: occasional washouts. The pay-off: 30-40% off peak rates and noticeably fewer Instagrammers at the temples.",
    },
  ],
  noWindows: [
    {
      title: 'Maldives — December through February peak',
      body: "Soneva, Cheval Blanc, Six Senses Laamu, Anantara Kihavah, the entire top-tier overwater inventory: sold 6-12 months out for this window. Even at 30 days' notice the only properties with availability are 3-star or the mid-tier resorts with structural softness. The Maldives at peak is a 9-month booking process; last-minute does not work.",
    },
    {
      title: 'Italian peak summer (mid-June through August)',
      body: "Amalfi Coast, Capri, Cap-Ferrat, Mykonos, Sardinia: peak inventory is sold by March of the same year. Le Sirenuse, Hotel Splendido, Cap-Ferrat Four Seasons, Cala di Volpe: 6+ month lead time. Inside-30-day bookings in this window are the 3-star fallback inventory, not the honeymoon catalogue.",
    },
    {
      title: 'Caribbean Christmas / New Year week',
      body: "The two weeks bracketing Christmas and New Year at every St. Barts, Anguilla, Turks & Caicos and Antigua property are sold by August of the prior year. Cheval Blanc Isle de France, Eden Rock, Belmond Cap Juluca, Jumby Bay: gone. Last-minute Christmas Caribbean is not a category.",
    },
    {
      title: 'Japanese cherry-blossom season (late March / early April)',
      body: "Aman Tokyo, Aman Kyoto, the Park Hyatt, Ritz-Carlton Kyoto: every honeymoon-grade Tokyo and Kyoto property is sold out for the 2-3 weeks of peak cherry blossom 9-12 months in advance. The same applies to Tokyo's Michelin-starred restaurants. Last-minute Japan in sakura season is one of the hardest international honeymoon bookings on the calendar.",
    },
  ],
  reality:
    "The actual 14-day reality: roughly 80% of our catalogue has some availability inside two weeks if you have flexibility on both date and destination. Lock in one variable (must be Maldives, OR must be week of August 12, OR must be overwater villa) and you cut availability in half. Lock in two and you cut it again — most failed last-minute searches are because the couple has chosen the destination, the week, and the property type before searching. The 30-day reality is much better: 95% of the catalogue is bookable inside 30 days outside the peak windows above. The 60-day reality is the entire catalogue minus Christmas Maldives and August Amalfi. So the planning question is not 'is last-minute possible' but 'is your destination/date combination in a yes-window or a no-window'. If yes, book directly and save the 25-35%. If no, pivot one variable — the destination, the week, or the room category — and the trip is still real.",
  savings:
    "The savings pitch is genuine but specific. At Tier-2 luxury (Aman, Belmond, Soneva, Four Seasons in their shoulder weeks), last-minute via a Virtuoso or Fine Hotels & Resorts advisor consistently delivers 20-30% off rack rate plus the standard perks (breakfast, $100 credit, upgrade at check-in). At Tier-1 ($1,000-1,800/night), the savings are smaller — usually 10-20% — but the advisor perks remain. The savings come from unsold inventory the hotel needs to fill; the price-discrimination is structural rather than promotional. Three places to look, in order: (1) a Virtuoso or FHR advisor (free, has access to inventory you cannot see), (2) the hotel's own last-minute email list or 'special offers' page, (3) Mr & Mrs Smith or Tablet Hotels for boutique under-radar inventory. Skip the discount aggregators — Booking.com and Expedia rarely undercut the direct rate at the luxury tier.",
  hotelSlugs: [
    'conrad-maldives-rangali-island',
    'anantara-kihavah-maldives-villas-maldives',
    'belmond-cap-juluca-anguilla',
    'jumby-bay-island-oetker-antigua',
    'capella-ubud-bali',
    'belmond-hotel-caruso-italy',
  ],
  closing:
    "The honest last-minute honeymoon is the one where you pivot the destination to the season rather than the other way round. April Caribbean, May Maldives, October Italy, March Bali: all bookable at 14 days, all genuinely great. Christmas Maldives, August Amalfi, March Japan: not bookable. If the destination you want is in a no-window, change the destination or change the dates — don't try to brute-force the booking through. The trip that works on a 14-day decision is the one matched to the calendar, not the one matched to the Pinterest board.",
  faqs: [
    {
      question: "How late is too late to book a honeymoon?",
      answer: "7 days is the floor for almost all destinations outside Christmas peak. 14 days is the comfortable minimum that opens 80% of the catalogue. Inside 7 days you're restricted to whatever has open inventory tonight — workable in Maldives off-season, Mexico's Riviera Maya, and the Caribbean shoulder, hard everywhere else.",
    },
    {
      question: "What's the cheapest month for last-minute?",
      answer: "May, across most regions. Post-Easter, pre-US-summer, the Maldives in shoulder, the Caribbean before hurricane risk, Italy reopening for the season. The combined effect is that hotels are discounting to fill across multiple destinations at the same time, which gives genuine choice rather than a forced pick.",
    },
    {
      question: "Honeymoon registry vs cash for last-minute?",
      answer: "Cash, by a wide margin. A honeymoon registry (Honeyfund, Zola Honeymoon) assumes you have the trip booked when you launch it; for a last-minute booking the timing doesn't work. Take the cash from the registry-fund equivalent and book directly. The gift contributions can come post-trip if guests prefer to fund specific moments.",
    },
    {
      question: "What do hotels actually do for last-minute honeymooners?",
      answer: "At the luxury tier, more than couples expect. Tell the hotel it's a honeymoon when booking (not at check-in) and you'll consistently get: rose-petal turndown the first night, a complimentary bottle of sparkling on arrival, a small room category upgrade where available, an anniversary card from the GM. None of it is the booking discount, but all of it converts a generic booking into something that feels like the honeymoon you'd have planned. Last-minute bookers who don't mention the honeymoon get none of this.",
    },
  ],
}
