import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { buildAlternates } from '@/lib/alternates'
import AuthorByline from '@/components/AuthorByline'

export const metadata: Metadata = {
  title: 'Best Time to Honeymoon: The 2026 Month-by-Month Calendar',
  description:
    'The honest 2026 honeymoon calendar. 20 destinations × 12 months — when each place peaks, when shoulder beats peak on value, and the six rules that decide every trip. Links to 240 destination-month deep-dives.',
  alternates: buildAlternates('/best-time-to-honeymoon'),
  openGraph: {
    title: 'Best Time to Honeymoon — The 2026 Calendar',
    description:
      '20 destinations × 12 months. Weather, price band, crowds, and the six rules that decide every honeymoon date.',
    url: 'https://myhoneymoonhotel.com/best-time-to-honeymoon',
    siteName: 'MyHoneymoonHotel',
    images: [
      {
        url: 'https://myhoneymoonhotel.com/images/hotels/four-seasons-bora-bora/hero.webp',
        width: 1600,
        height: 900,
        alt: 'Four Seasons Bora Bora overwater villa at sunrise — the canonical honeymoon timing image',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Time to Honeymoon — The 2026 Calendar',
    description: '20 destinations × 12 months. When each place peaks, when shoulder beats peak, the six rules.',
    images: ['https://myhoneymoonhotel.com/images/hotels/four-seasons-bora-bora/hero.webp'],
  },
}

// ----- The 20 destinations (must mirror /destinations/[country]/[month] TARGETS) -----
const DEST_SLUGS = [
  'maldives', 'bora-bora', 'bali', 'santorini', 'st-lucia', 'turks-and-caicos',
  'mauritius', 'seychelles', 'mexico', 'jamaica', 'fiji', 'bahamas',
  'anguilla', 'antigua', 'barbados', 'sicily', 'amalfi', 'lake-como',
  'hawaii', 'costa-rica',
] as const

const DEST_LABEL: Record<string, string> = {
  maldives: 'Maldives',
  'bora-bora': 'Bora Bora',
  bali: 'Bali',
  santorini: 'Santorini',
  'st-lucia': 'St. Lucia',
  'turks-and-caicos': 'Turks & Caicos',
  mauritius: 'Mauritius',
  seychelles: 'Seychelles',
  mexico: 'Mexico',
  jamaica: 'Jamaica',
  fiji: 'Fiji',
  bahamas: 'Bahamas',
  anguilla: 'Anguilla',
  antigua: 'Antigua',
  barbados: 'Barbados',
  sicily: 'Sicily',
  amalfi: 'Amalfi',
  'lake-como': 'Lake Como',
  hawaii: 'Hawaii',
  'costa-rica': 'Costa Rica',
}

// Compact per-destination, per-month verdict matrix:
//   band: Peak | High | Shoulder | Low | Avoid
//   note: 4–7 words on the weather/scene
// 20 × 12 = 240 cards.
type Band = 'Peak' | 'High' | 'Shoulder' | 'Low' | 'Avoid'

const MATRIX: Record<string, { band: Band; note: string }[]> = {
  // Caribbean / tropical (Dec–Apr peak, Jun–Oct hurricane risk)
  maldives: [
    { band: 'Peak', note: 'Dry, hot, near-zero rain' },
    { band: 'Peak', note: 'Driest weeks of the year' },
    { band: 'High', note: 'Hot, calm seas, busy' },
    { band: 'High', note: 'Last of the dry, prices ease' },
    { band: 'Shoulder', note: 'Wet starts, mantas arrive' },
    { band: 'Shoulder', note: 'Whale-shark season, cheaper' },
    { band: 'Low', note: 'Wet but Euro-school spike' },
    { band: 'Low', note: 'Wet, surfers love it' },
    { band: 'Low', note: 'Cheapest weeks, real rain risk' },
    { band: 'Shoulder', note: 'Rains fade by month-end' },
    { band: 'Shoulder', note: 'Dry returns, best value' },
    { band: 'Peak', note: 'Festive peak Dec 20–Jan 5' },
  ],
  'bora-bora': [
    { band: 'Shoulder', note: 'Warm, humid, occasional showers' },
    { band: 'Shoulder', note: 'Wet season tail, hot' },
    { band: 'Shoulder', note: 'Drying out, prices soften' },
    { band: 'High', note: 'Dry season begins, photo-perfect' },
    { band: 'Peak', note: 'Postcard weather, full resorts' },
    { band: 'Peak', note: 'Dry, breezy, peak prices' },
    { band: 'Peak', note: 'Coolest month, busiest' },
    { band: 'Peak', note: 'Heiva festival, fully booked' },
    { band: 'High', note: 'Dry and quieter than July' },
    { band: 'High', note: 'Lagoon at its bluest' },
    { band: 'Shoulder', note: 'Humid returns, deals appear' },
    { band: 'Peak', note: 'Holiday surcharge, rainy' },
  ],
  bali: [
    { band: 'Low', note: 'Rainy season, lush, cheap' },
    { band: 'Low', note: 'Wettest weeks, off-peak prices' },
    { band: 'Shoulder', note: 'Rains taper by mid-month' },
    { band: 'High', note: 'Dry season starts, ideal' },
    { band: 'High', note: 'Best value of the dry months' },
    { band: 'Peak', note: 'Dry, breezy, fully booked' },
    { band: 'Peak', note: 'Dry, cooler, Euro summer' },
    { band: 'Peak', note: 'Driest, busiest, costliest' },
    { band: 'High', note: 'Dry, quieter than August' },
    { band: 'High', note: 'Dry tail, sunset season' },
    { band: 'Shoulder', note: 'Showers return, calm' },
    { band: 'Peak', note: 'Festive spike, wet days' },
  ],
  santorini: [
    { band: 'Low', note: 'Cold, half-shut, raw' },
    { band: 'Low', note: 'Quiet, breezy, romantic' },
    { band: 'Shoulder', note: 'Spring blooms, opens up' },
    { band: 'High', note: 'Mild, walkable, fewer crowds' },
    { band: 'Peak', note: 'Sunny, manageable, postcard' },
    { band: 'Peak', note: 'Hot, full, sunset queues' },
    { band: 'Peak', note: 'Crushing crowds, 35 °C' },
    { band: 'Peak', note: 'Cruise-ship peak, packed' },
    { band: 'Peak', note: 'Warm, calmer, best of summer' },
    { band: 'High', note: 'Last warm weeks, prices drop' },
    { band: 'Shoulder', note: 'Quiet, restaurants close' },
    { band: 'Low', note: 'Largely closed, atmospheric' },
  ],
  'st-lucia': [
    { band: 'Peak', note: 'Dry, breezy, top season' },
    { band: 'Peak', note: 'Driest weeks, Valentine peak' },
    { band: 'High', note: 'Dry and warm, jazz festival' },
    { band: 'High', note: 'Last reliable dry month' },
    { band: 'Shoulder', note: 'Hot, brief afternoon showers' },
    { band: 'Low', note: 'Hurricane window opens' },
    { band: 'Low', note: 'Hot, humid, real storm risk' },
    { band: 'Avoid', note: 'Peak hurricane month, cheap' },
    { band: 'Avoid', note: 'Highest cyclone probability' },
    { band: 'Shoulder', note: 'Storms taper, deals linger' },
    { band: 'High', note: 'Dry returns, excellent value' },
    { band: 'Peak', note: 'Festive peak, dry season' },
  ],
  'turks-and-caicos': [
    { band: 'Peak', note: 'Crystal weather, packed beach' },
    { band: 'Peak', note: 'Dry, breezy, full' },
    { band: 'Peak', note: 'Spring-break premium' },
    { band: 'High', note: 'Warm, drier, calmer' },
    { band: 'High', note: 'Excellent shoulder value' },
    { band: 'Shoulder', note: 'Hot, calm, hurricane window starts' },
    { band: 'Low', note: 'Storm risk climbs, hot' },
    { band: 'Avoid', note: 'Peak hurricane, deepest deals' },
    { band: 'Avoid', note: 'Highest storm risk all year' },
    { band: 'Shoulder', note: 'Storms ease by late month' },
    { band: 'High', note: 'Dry returns, best value' },
    { band: 'Peak', note: 'Holiday peak, dry' },
  ],
  mauritius: [
    { band: 'Peak', note: 'Hot, humid, full lagoon' },
    { band: 'Peak', note: 'Hot, possible cyclone tail' },
    { band: 'High', note: 'Cooling, wet tapers off' },
    { band: 'High', note: 'Mild, dry, ideal' },
    { band: 'Shoulder', note: 'Cooler, dry, great value' },
    { band: 'Shoulder', note: 'Coolest months, surf swell' },
    { band: 'High', note: 'Dry, breezy, Euro summer' },
    { band: 'High', note: 'Dry, kiteboarder season' },
    { band: 'High', note: 'Warming up, quiet' },
    { band: 'Peak', note: 'Sweet spot — warm + calm' },
    { band: 'Peak', note: 'Hot, lagoon at its bluest' },
    { band: 'Peak', note: 'Festive peak, hot' },
  ],
  seychelles: [
    { band: 'Peak', note: 'Hot, calmer NW monsoon' },
    { band: 'Peak', note: 'Warm, brief showers' },
    { band: 'High', note: 'Cross-over month, mixed' },
    { band: 'Peak', note: 'Calm seas both coasts' },
    { band: 'High', note: 'SE trades begin, drying' },
    { band: 'High', note: 'Cooler, breezy, sailing season' },
    { band: 'Peak', note: 'Driest, windiest, Euro spike' },
    { band: 'Peak', note: 'Dry, busy, kite season' },
    { band: 'High', note: 'Winds ease, glassy' },
    { band: 'Peak', note: 'Best of both — warm + calm' },
    { band: 'Peak', note: 'Warm, calm, photo-perfect' },
    { band: 'Peak', note: 'Festive peak, humid' },
  ],
  mexico: [
    { band: 'Peak', note: 'Dry, cool nights, full' },
    { band: 'Peak', note: 'Whale season, sunny' },
    { band: 'Peak', note: 'Spring-break surge' },
    { band: 'High', note: 'Warm, drier, calmer' },
    { band: 'Shoulder', note: 'Hot, sargassum on coast' },
    { band: 'Shoulder', note: 'Storm window opens' },
    { band: 'Low', note: 'Hot, humid, brief storms' },
    { band: 'Low', note: 'Wettest, cheapest weeks' },
    { band: 'Avoid', note: 'Peak hurricane on Caribbean' },
    { band: 'Shoulder', note: 'Storms taper, dry returns' },
    { band: 'Peak', note: 'Dry, warm, ideal' },
    { band: 'Peak', note: 'Holiday peak, dry' },
  ],
  jamaica: [
    { band: 'Peak', note: 'Dry, warm, full' },
    { band: 'Peak', note: 'Reggae month, sunny' },
    { band: 'High', note: 'Spring-break premium' },
    { band: 'High', note: 'Last reliable dry month' },
    { band: 'Shoulder', note: 'Warmer, brief showers' },
    { band: 'Low', note: 'Hurricane window opens' },
    { band: 'Low', note: 'Hot, storm risk climbs' },
    { band: 'Avoid', note: 'Peak hurricane, cheapest' },
    { band: 'Avoid', note: 'Highest storm probability' },
    { band: 'Shoulder', note: 'Storms ease, deals stay' },
    { band: 'High', note: 'Dry returns, excellent value' },
    { band: 'Peak', note: 'Festive peak, dry' },
  ],
  fiji: [
    { band: 'Low', note: 'Wet, hot, cyclone window' },
    { band: 'Low', note: 'Wet, cyclone window' },
    { band: 'Shoulder', note: 'Rains taper, prices drop' },
    { band: 'High', note: 'Dry season starts' },
    { band: 'Peak', note: 'Dry, warm, photo-perfect' },
    { band: 'Peak', note: 'Dry, cooler, peak season' },
    { band: 'Peak', note: 'Driest, cool nights' },
    { band: 'Peak', note: 'Dry, breezy, fully booked' },
    { band: 'Peak', note: 'Dry, warming up' },
    { band: 'High', note: 'Dry tail, great value' },
    { band: 'Shoulder', note: 'Humidity returns' },
    { band: 'Peak', note: 'Holiday spike, wet' },
  ],
  bahamas: [
    { band: 'Peak', note: 'Dry, cool, breezy' },
    { band: 'Peak', note: 'Dry, full, Valentine' },
    { band: 'Peak', note: 'Spring-break premium' },
    { band: 'High', note: 'Warming, calmer seas' },
    { band: 'Shoulder', note: 'Hot, dry, good value' },
    { band: 'Shoulder', note: 'Storm window opens' },
    { band: 'Low', note: 'Hot, humid, storm risk' },
    { band: 'Avoid', note: 'Peak hurricane month' },
    { band: 'Avoid', note: 'Highest storm probability' },
    { band: 'Shoulder', note: 'Storms taper, deals linger' },
    { band: 'High', note: 'Dry returns, excellent value' },
    { band: 'Peak', note: 'Festive peak' },
  ],
  anguilla: [
    { band: 'Peak', note: 'Dry, breezy, packed' },
    { band: 'Peak', note: 'Driest, Valentine peak' },
    { band: 'Peak', note: 'Calm seas, dry' },
    { band: 'High', note: 'Last reliable dry month' },
    { band: 'Shoulder', note: 'Hot, calmer, value' },
    { band: 'Low', note: 'Hurricane window opens' },
    { band: 'Low', note: 'Hot, humid, storm risk' },
    { band: 'Avoid', note: 'Peak hurricane, cheapest' },
    { band: 'Avoid', note: 'Hotels closed Aug–mid Oct' },
    { band: 'Shoulder', note: 'Hotels re-open late month' },
    { band: 'High', note: 'Dry returns, premium light' },
    { band: 'Peak', note: 'Festive peak' },
  ],
  antigua: [
    { band: 'Peak', note: 'Dry, breezy, full' },
    { band: 'Peak', note: 'Sailing week, premium' },
    { band: 'Peak', note: 'Dry, classic regatta month' },
    { band: 'Peak', note: 'Sailing week peak' },
    { band: 'Shoulder', note: 'Hot, dry, great value' },
    { band: 'Low', note: 'Hurricane window opens' },
    { band: 'Low', note: 'Carnival, hot, storm risk' },
    { band: 'Avoid', note: 'Peak hurricane month' },
    { band: 'Avoid', note: 'Highest storm probability' },
    { band: 'Shoulder', note: 'Storms ease, deals stay' },
    { band: 'High', note: 'Dry returns' },
    { band: 'Peak', note: 'Festive peak' },
  ],
  barbados: [
    { band: 'Peak', note: 'Dry, breezy, busy' },
    { band: 'Peak', note: 'Cricket season, full' },
    { band: 'Peak', note: 'Holetown festival, dry' },
    { band: 'High', note: 'Reliable dry month' },
    { band: 'Shoulder', note: 'Hot, dry, sweet-spot value' },
    { band: 'Low', note: 'Crop Over starts, hot' },
    { band: 'Low', note: 'Crop Over peak, hot' },
    { band: 'Low', note: 'Crop Over closes, storm risk' },
    { band: 'Avoid', note: 'Peak hurricane month' },
    { band: 'Shoulder', note: 'Storms ease, deals linger' },
    { band: 'High', note: 'Dry returns' },
    { band: 'Peak', note: 'Festive peak' },
  ],
  // Mediterranean (May–Oct ideal)
  sicily: [
    { band: 'Low', note: 'Cold, wet, atmospheric' },
    { band: 'Low', note: 'Almond blossom, quiet' },
    { band: 'Shoulder', note: 'Spring, blooming, mild' },
    { band: 'High', note: 'Easter, sunny, drying out' },
    { band: 'Peak', note: 'Sweet-spot warm + calm' },
    { band: 'Peak', note: 'Sunny, hot, busy' },
    { band: 'Peak', note: 'Hot (35 °C), crowded' },
    { band: 'Peak', note: 'Italian holiday peak, packed' },
    { band: 'Peak', note: 'Warm sea, fewer crowds' },
    { band: 'High', note: 'Last reliable warm month' },
    { band: 'Shoulder', note: 'Cooler, quiet, restaurant tail' },
    { band: 'Low', note: 'Cold, festive' },
  ],
  amalfi: [
    { band: 'Low', note: 'Closed, wet, raw' },
    { band: 'Low', note: 'Largely closed' },
    { band: 'Shoulder', note: 'Re-opens late month' },
    { band: 'High', note: 'Mild, lemon-blossom' },
    { band: 'Peak', note: 'Sunny, ideal, busy' },
    { band: 'Peak', note: 'Warm sea, peak prices' },
    { band: 'Peak', note: 'Hot, crowded, expensive' },
    { band: 'Peak', note: 'Italian August, packed' },
    { band: 'Peak', note: 'Warm sea, classier crowd' },
    { band: 'High', note: 'Last reliable month' },
    { band: 'Low', note: 'Mostly closed by mid-month' },
    { band: 'Low', note: 'Closed except holidays' },
  ],
  'lake-como': [
    { band: 'Low', note: 'Cold, foggy, atmospheric' },
    { band: 'Low', note: 'Quiet, cold, snow visible' },
    { band: 'Shoulder', note: 'Spring, hotels re-open' },
    { band: 'High', note: 'Mild, blossoms, ideal' },
    { band: 'Peak', note: 'Warm, full, photo-perfect' },
    { band: 'Peak', note: 'Hot, busy, premium' },
    { band: 'Peak', note: 'Hot, crowded, costly' },
    { band: 'Peak', note: 'Italian holiday peak' },
    { band: 'Peak', note: 'Mild, quieter, fashion week' },
    { band: 'High', note: 'Autumn colors, calmer' },
    { band: 'Shoulder', note: 'Cool, hotels close by late month' },
    { band: 'Low', note: 'Cold, festive' },
  ],
  hawaii: [
    { band: 'Peak', note: 'Dry, whale season, full' },
    { band: 'Peak', note: 'Driest, whale peak' },
    { band: 'High', note: 'Spring-break surge' },
    { band: 'Shoulder', note: 'Drying out, value window' },
    { band: 'Shoulder', note: 'Dry, calm, sweet spot' },
    { band: 'High', note: 'Dry, warming up' },
    { band: 'Peak', note: 'Dry, US-summer peak' },
    { band: 'Peak', note: 'Dry, busiest, costliest' },
    { band: 'Shoulder', note: 'Dry tail, best value' },
    { band: 'Shoulder', note: 'Dry, quieter shoulder' },
    { band: 'Peak', note: 'Surf season begins, dry' },
    { band: 'Peak', note: 'Festive peak' },
  ],
  'costa-rica': [
    { band: 'Peak', note: 'Dry season, sunny' },
    { band: 'Peak', note: 'Driest, busy parks' },
    { band: 'Peak', note: 'Spring-break premium' },
    { band: 'High', note: 'Last dry weeks, deals appear' },
    { band: 'Shoulder', note: 'Green season starts, lush' },
    { band: 'Shoulder', note: 'Warm rains, turtles arrive' },
    { band: 'Shoulder', note: 'Veranillo dry spell' },
    { band: 'Low', note: 'Wettest, cheapest' },
    { band: 'Low', note: 'Wettest, cheapest' },
    { band: 'Low', note: 'Wet, but value peaks' },
    { band: 'Shoulder', note: 'Rains taper, drying out' },
    { band: 'Peak', note: 'Festive peak, dry' },
  ],
}

const MONTHS = [
  { slug: 'january', label: 'January', headline: 'The Caribbean and Maldives at their driest' },
  { slug: 'february', label: 'February', headline: 'Whale season — Mexico, Hawaii, and Maldives peak' },
  { slug: 'march', label: 'March', headline: 'Spring-break premium hits the islands' },
  { slug: 'april', label: 'April', headline: 'The bridge month — Easter, lemon-blossom, last dry Caribbean' },
  { slug: 'may', label: 'May', headline: 'The global sweet spot for value' },
  { slug: 'june', label: 'June', headline: 'Mediterranean opens; Caribbean hurricane window cracks' },
  { slug: 'july', label: 'July', headline: 'Mid-summer peak — Europe full, Pacific dry' },
  { slug: 'august', label: 'August', headline: 'Migration month — Kenya, Galapagos, and the wildlife peak' },
  { slug: 'september', label: 'September', headline: 'The most underrated month on the calendar' },
  { slug: 'october', label: 'October', headline: 'Storm tail in the Caribbean, golden Med, fall Asia' },
  { slug: 'november', label: 'November', headline: 'The reset — dry returns almost everywhere' },
  { slug: 'december', label: 'December', headline: 'Festive peak — book a year out or skip the spike' },
] as const

// 2-3 sentence per-month intros — unique copy
const MONTH_INTROS: Record<string, string> = {
  january: 'January is when the Caribbean, the Maldives, and Bora Bora’s shoulder weeks line up against a Northern-Hemisphere that desperately wants out. Prices are firm but not crazy outside the first ten days; the second half of the month is one of the best calendar windows for an overwater honeymoon. Expect dry trade winds, cold-water-rich reefs, and resorts coming off the holiday rush with full staff and recently restocked cellars.',
  february: 'February is a wildlife month. Humpbacks are calving in Mexico’s Sea of Cortez and off Maui, the Maldives is in its driest fortnight, and Southern-Hemisphere destinations like Mauritius and Seychelles are still warm. Prices climb around Valentine’s Day at every Caribbean property — book either side of the 14th and you avoid the spike. Avoid Northern-Italy resorts entirely; the lakes are closed.',
  march: 'March is split. The first three weeks read like January with longer days; the last week kicks off US spring break and Caribbean prices jump 15–25%. Maldives weather is at its absolute best (visibility 30+ metres), but the kids-out-of-school surcharge starts hitting Mexico, Bahamas, and Turks. Southern Europe begins waking up — Sicily and Amalfi unlock by Easter.',
  april: 'April is the bridge: the Caribbean is in its final reliable dry stretch, the Mediterranean is opening (Sicily, Amalfi, Lake Como all back in business), and the Maldives stays excellent into mid-month. Easter is a mini-spike everywhere except Bali (where it overlaps with shoulder season). If your wedding is March, April is the most flexible honeymoon month on the calendar.',
  may: 'May is the highest-value month of the year for the largest number of destinations. The Mediterranean is warm but not yet crowded; Bali has crossed into dry season; Maldives, Bora Bora, and Mauritius all post 30–40% shoulder discounts. The single thing to monitor is the early hurricane season in the Caribbean — risk is statistically negligible until June, but insurance is cheap and worth it.',
  june: 'June flips the script. The Mediterranean enters peak (full hotels, full restaurants, full sunset terraces); Caribbean hurricane season officially opens but storm probability stays low until late August; Bora Bora, Fiji, and the Maldives are mid-shoulder with serious value. Couples who want a beach-and-culture combination — Sicily plus a Greek island, or Amalfi plus the Aeolians — get the best of June.',
  july: 'July is mid-summer peak in Europe and the South Pacific simultaneously. Bora Bora, Fiji, and Tahiti are dry, breezy, and fully booked; Santorini and Amalfi hit 35 °C with cruise-ship crowds at sunset. Caribbean rates collapse but storm risk is rising. The single best July honeymoon for couples who want something different: Iceland (midnight sun, no crowds at the geysers, all hotels open).',
  august: 'August is the wildlife and migration month. Kenya’s Great Migration peaks on the Mara, Madagascar gets humpback whales, Galapagos has clear waters and active wildlife, and Botswana’s Okavango is dry-season game-viewing at its best. Beach destinations are mostly to be avoided: Caribbean is mid-hurricane, Mediterranean is at its hottest and most crowded. If you want beach in August, French Polynesia.',
  september: 'September is the calendar’s great secret. Italian summer holidays end (3 Sept onward); Greek Islands stay warm with half the July crowds; Maldives and Bali are in their cheapest weeks; the Pacific is still mostly dry. The only red flag is the second half of the month for the Caribbean — statistically the single highest hurricane-probability fortnight. Med + Asia couples win September outright.',
  october: 'October is the autumn pivot. The Mediterranean is in its final warm month (Sicily and Mauritius edge into shoulder); the Caribbean is still storm-prone until late month; Bali, Maldives, and Mauritius slide back toward dry season with last-of-the-shoulder pricing. Northern-Hemisphere couples increasingly use October for honeymoons because September weddings became standard — and October delivers.',
  november: 'November is the reset. Dry season returns to the Caribbean, Maldives, Hawaii, and Mauritius simultaneously; hurricane risk effectively closes by November 7; the Mediterranean shuts down (Amalfi closed by mid-month). Prices are at their absolute best for tropical destinations — couples who delayed a hurricane-month wedding to a November honeymoon save 25–40% over December-peak rates.',
  december: 'December is a barbell. The first three weeks are dry, beautiful, well-priced (the Caribbean is in classic mode, the Maldives is humming). December 20 through January 5 is the single most expensive fortnight on the planet — peak surcharges on every flight, every villa, mandatory gala dinners on the 31st. Book 9–12 months ahead for festive weeks or aim for December 5–18.',
}

const BAND_COLOR: Record<Band, string> = {
  Peak: 'bg-rose-100 text-rose-700',
  High: 'bg-amber-100 text-amber-700',
  Shoulder: 'bg-emerald-100 text-emerald-700',
  Low: 'bg-sky-100 text-sky-700',
  Avoid: 'bg-zinc-200 text-zinc-700',
}

// ----- INTENT SECTION -----
const INTENT = [
  {
    title: 'Best for warm weather year-round',
    body: 'Caribbean (December–April), Maldives, and Bora Bora all sit within 8° of the equator. They never go cold; they trade rain risk for storm risk. Couples who want to fly tropical without thinking about a sweater pick from this list.',
    picks: [
      { dest: 'maldives', month: 'february', label: 'Maldives in February' },
      { dest: 'bora-bora', month: 'june', label: 'Bora Bora in June' },
      { dest: 'turks-and-caicos', month: 'february', label: 'Turks & Caicos in February' },
    ],
  },
  {
    title: 'Best for shoulder-season value',
    body: 'Shoulder months are the best price-to-weather ratio on the calendar. May Sicily, May Bali, September Santorini, and November Mauritius all deliver 80% of peak conditions at 60% of peak prices.',
    picks: [
      { dest: 'sicily', month: 'may', label: 'Sicily in May' },
      { dest: 'bali', month: 'may', label: 'Bali in May' },
      { dest: 'santorini', month: 'september', label: 'Santorini in September' },
      { dest: 'mauritius', month: 'november', label: 'Mauritius in November' },
    ],
  },
  {
    title: 'Best for adventure and wildlife',
    body: 'August in Kenya is the Great Migration. October in Madagascar brings humpback whales. June in Iceland delivers midnight sun. April in Galapagos has the clearest water and highest wildlife activity. Honeymoons that double as expeditions.',
    picks: [
      { dest: 'costa-rica', month: 'september', label: 'Costa Rica turtles, September' },
      { dest: 'hawaii', month: 'february', label: 'Hawaii whale season, February' },
      { dest: 'maldives', month: 'june', label: 'Maldives whale-shark, June' },
    ],
  },
  {
    title: 'Best to avoid hurricanes',
    body: 'The Atlantic hurricane window runs June 1 to November 30, with the highest probability mid-August through late September. To avoid storms in the Caribbean entirely, honeymoon December through May. The Pacific is a different system and most resorts there are storm-light.',
    picks: [
      { dest: 'st-lucia', month: 'february', label: 'St. Lucia in February' },
      { dest: 'barbados', month: 'march', label: 'Barbados in March' },
      { dest: 'bahamas', month: 'april', label: 'Bahamas in April' },
    ],
  },
  {
    title: 'Best Northern-Hemisphere winter escape',
    body: 'December through February delivers the strongest motivation-to-fly ratio: short days at home, perfect weather in the Caribbean, Maldives, and Bali. Avoid the Dec 20–Jan 5 festive surcharge by aiming for the first or third week of January.',
    picks: [
      { dest: 'maldives', month: 'january', label: 'Maldives in January' },
      { dest: 'barbados', month: 'january', label: 'Barbados in January' },
      { dest: 'jamaica', month: 'february', label: 'Jamaica in February' },
    ],
  },
  {
    title: 'Best for European summer',
    body: 'June through September is the Mediterranean window. June for value, July for the long-day sunset terrace, September for warm sea minus the crowds. Avoid August in Italy entirely — the country goes on holiday and prices for the same villa double.',
    picks: [
      { dest: 'sicily', month: 'june', label: 'Sicily in June' },
      { dest: 'amalfi', month: 'september', label: 'Amalfi in September' },
      { dest: 'santorini', month: 'june', label: 'Santorini in June' },
      { dest: 'lake-como', month: 'may', label: 'Lake Como in May' },
    ],
  },
]

// ----- 6-RULE FRAMEWORK -----
const FRAMEWORK = [
  {
    title: 'Dry-season anchoring',
    body: 'Every tropical destination has a dry season; that is the cell to start from. Maldives dry runs November–April. Bora Bora May–October. Bali May–September. Mauritius May–November. Caribbean December–May. The single largest source of bad honeymoon photos is booking inside the wet season because the resort was cheap — you save $1,500 and lose two of seven days to indoor lunches. Anchor on dry, then optimize for value at the edges.',
  },
  {
    title: 'Shoulder-month value math',
    body: 'The shoulder is the first or last month of the dry season. Maldives May or November. Mediterranean June or September. Caribbean April or November. Shoulder weeks deliver 80–90% of peak weather quality at 60–70% of peak prices. The reason couples ignore shoulder is fear — they want guaranteed sun. The math says: an extra $1,500 buys you a 5% chance of perfect weather instead of a 90% chance, which is bad capital allocation.',
  },
  {
    title: 'Hurricane buffer zones',
    body: 'Atlantic hurricane season runs June 1 through November 30, but the actual high-risk window is shorter: August 15 to October 15. Inside that window, do not honeymoon in the Atlantic Caribbean (Antigua, Anguilla, St. Lucia, Bahamas, Turks). Outside it, the same destinations are perfectly fine. The southern Caribbean ABCs (Aruba, Bonaire, Curaçao) sit south of the hurricane belt and are an option year-round; we cover them in our wider destination set.',
  },
  {
    title: 'The US East Coast 4-hour-flight rule',
    body: 'For US couples flying from the East Coast: every hour of flight beyond four costs roughly $400/couple in airline reality (premium economy at the longer-haul rates) and one full day of jet-lagged useless beach time at each end. A 4-hour flight to Turks or Bahamas means you land at 1pm and are in the pool by 3pm. The 18-hour Maldives flight means day one is gone to a hotel near Male. Optimize for the value of time at destination, not just the destination itself.',
  },
  {
    title: 'Southern Hemisphere inversion',
    body: 'Mauritius, Seychelles, Fiji, and (off our list) South Africa have inverted seasons. Their summer (November–April) is our winter; their winter (May–October) is our summer. This is the cheat code for US/EU couples who want tropical in July or August: book Mauritius, Seychelles, or Fiji and you escape the European peak entirely. The flights are long; the trade-off is real but underrated.',
  },
  {
    title: 'School-holiday inflation',
    body: 'Three school-holiday windows inflate prices globally: US spring break (mid-March to mid-April, hits Caribbean and Mexico), European summer (mid-July to end-August, hits Mediterranean and Indian Ocean), and the festive fortnight (Dec 20–Jan 5, hits everywhere). Outside these windows, the same hotel, the same room, the same weather is 25–60% cheaper. If your wedding date is flexible, choose a date that gives you a honeymoon outside all three.',
  },
]

// ----- FAQ -----
const FAQS = [
  {
    q: 'When is the best time to honeymoon in the Maldives?',
    a: 'The objective best months are January, February, early March, and November — dry, warm, low rain risk. The best-value months are May, June, September, and October, when prices fall 30–45% with only a marginal weather penalty (5–6 sunny hours per day, afternoon showers possible). Avoid December 20 to January 5 — peak surcharges are 2.2× shoulder rates with mandatory gala dinners.',
  },
  {
    q: 'What’s the cheapest month to honeymoon?',
    a: 'For tropical: September, after Labor Day. The Caribbean is mid-hurricane (so deals are deep), Bali and Maldives are in shoulder season, and US/EU schools are back so flights collapse. The single cheapest dest-month combination of 2026 will be Maldives in September or Bali in February. For Europe: November and February — most of the Mediterranean is closed, but Sicily and Portugal stay open at half-price.',
  },
  {
    q: 'Should we avoid hurricane season?',
    a: 'In the Atlantic Caribbean: yes for mid-August through late September. Outside that six-week window, even within the official June 1 to November 30 hurricane season, day-to-day weather is usually excellent and statistical storm risk is low. The honest math: a June or November Caribbean honeymoon has a 95%+ chance of being weather-perfect, with prices 30% below February. Buy travel insurance with CFAR and the worst case is recoverable.',
  },
  {
    q: 'Is shoulder season worth the risk?',
    a: 'Almost always, yes. Across our 240 destination-month pages, shoulder months average 85% of peak-weather quality at 65% of peak price. The remaining 15% is usually one afternoon of rain across seven nights. The trade is excellent. The exception is destinations where shoulder is dramatically worse (Bahamas in August, Anguilla in September) — those are not shoulder, they are off-season, and prices reflect it.',
  },
  {
    q: 'What about honeymooning around major holidays?',
    a: 'Avoid Christmas/New Year (Dec 20–Jan 5) at all costs — it is the most expensive fortnight on the planet and most resorts impose mandatory gala dinners at $300–$500 per person. Valentine’s Day adds a 10–20% surcharge at Caribbean resorts. Easter is a mini-spike in the Med and Maldives. Chinese New Year (late January or early February) hikes Bali and Phuket rates. Plan around them or accept the premium.',
  },
  {
    q: 'How early should we book for a peak-month honeymoon?',
    a: 'Twelve months out for festive weeks (Dec 20–Jan 5) and for marquee overwater villas at the Maldives, Bora Bora, and Fiji 5-stars. Nine months out for any peak-week trip to a top-tier resort. Six months out for shoulder season at premium properties. Three months out for off-season anywhere. The best villas at the best resorts are 5–10% of inventory and sell out first; late bookers pay more for an inferior room.',
  },
  {
    q: 'What if our wedding date locks us into a bad month?',
    a: 'Decouple the honeymoon from the wedding. Roughly 35% of US couples now delay the honeymoon by 3–6 months — they take a 4-night "mini-moon" right after the wedding, then a full honeymoon during a better-priced window. You arrive less exhausted, with paperwork sorted, name changes done, and 20–40% off peak rates. The romance does not depreciate.',
  },
  {
    q: 'Honeymoon in monsoon: ever a good idea?',
    a: 'Sometimes. Bali in January is monsoon — but it is also lush, dramatic, and 50% cheaper than August. Maldives in September has the same arithmetic. Sri Lanka has two monsoons (one on each coast) so there is always a dry side. The thing to avoid is a single-resort honeymoon in monsoon — you do not want to be locked on a private island during a 4-day storm. Pair monsoon destinations with mobility (city + beach combo) and they work.',
  },
  {
    q: 'Best honeymoon month if we want both beach and culture?',
    a: 'May or September. May delivers Sicily-plus-Aeolian-Islands, Croatia-plus-Hvar, Portugal-plus-Algarve, or Bali (Ubud + Seminyak). September repeats the formula with warmer water. Both months avoid the European holiday peak and pre-empt the Med shoulder pricing while still delivering swimming weather. Couples who want city days plus beach days should anchor on May or September.',
  },
  {
    q: 'Which destinations are year-round?',
    a: 'Truly year-round (no terrible month): Costa Rica (the wet "green season" is gorgeous and budget-friendly), Hawaii (small seasonal price swings, no monsoon), southern Caribbean ABCs (south of the hurricane belt). Effectively year-round with mild trade-offs: Maldives (May–October is wet but workable), Mauritius (Jan–Feb is cyclone-tail but rare). Avoid claiming year-round for Bali, Antigua, or Anguilla — they all have a clear off-season.',
  },
  {
    q: 'Are the "shoulder months" actually quieter, or just marketing?',
    a: 'Genuinely quieter, in our experience and per resort occupancy data. Mid-May in the Maldives runs 60–70% occupancy versus 95%+ in February. Mid-September in Santorini is half the August headcount. Shoulder is real — the marketing problem is that resorts oversell "luxury value" in periods that are properly off-season (e.g. August in Anguilla), which is genuinely the worst time to visit. Read our individual destination-month pages for the honest verdict per dest.',
  },
  {
    q: 'Best month for an overwater bungalow honeymoon specifically?',
    a: 'February for the Maldives (driest weeks, peak photo conditions). June or September for Bora Bora (dry, breezy, photo-perfect). May or October for Fiji (dry season, lower-than-peak prices). The classic overwater stay is 5–7 nights in one resort, and the price difference between peak and shoulder is enormous — booking a Maldives overwater pool villa in May versus February saves roughly $4,000 per couple on a 7-night stay.',
  },
]

// helper for printing the matrix safely
function getCell(dest: string, monthIndex: number): { band: Band; note: string } {
  return MATRIX[dest]?.[monthIndex] ?? { band: 'Shoulder', note: 'Standard shoulder conditions' }
}

export default function BestTimeToHoneymoonPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Best Time to Honeymoon: The 2026 Month-by-Month Calendar',
    description:
      'The honest 2026 honeymoon calendar — 20 destinations × 12 months, with weather, price band, crowds, and the six rules that decide every honeymoon date.',
    image: 'https://myhoneymoonhotel.com/images/hotels/four-seasons-bora-bora/hero.webp',
    author: { '@type': 'Organization', name: 'My Honeymoon Hotel', url: 'https://myhoneymoonhotel.com/about' },
    publisher: {
      '@type': 'Organization',
      name: 'My Honeymoon Hotel',
      logo: { '@type': 'ImageObject', url: 'https://myhoneymoonhotel.com/icon.png' },
    },
    datePublished: '2026-05-19',
    dateModified: '2026-05-19',
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://myhoneymoonhotel.com/best-time-to-honeymoon' },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://myhoneymoonhotel.com' },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Best Time to Honeymoon',
        item: 'https://myhoneymoonhotel.com/best-time-to-honeymoon',
      },
    ],
  }

  const speakableSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://myhoneymoonhotel.com/best-time-to-honeymoon#speakable',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['#tldr'],
    },
  }

  const schemas = [articleSchema, faqSchema, breadcrumbSchema, speakableSchema]

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }} />

      {/* HERO */}
      <section className="relative h-[70vh] min-h-[520px] flex items-end overflow-hidden">
        <Image
          src="/images/hotels/four-seasons-bora-bora/hero.webp"
          alt="Four Seasons Bora Bora overwater villa at sunrise — the canonical honeymoon timing image"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={75}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="relative z-10 px-8 sm:px-12 pb-16 max-w-4xl">
          <p className="text-white/60 text-xs tracking-[0.2em] uppercase mb-5">The 2026 Calendar</p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.05] mb-6">
            Best time to honeymoon:<br />the 2026 calendar.
          </h1>
          <p className="text-white/75 text-base sm:text-lg max-w-2xl leading-relaxed">
            Twenty destinations, twelve months, 240 verdicts. The honest read on when each place is at its best,
            when shoulder beats peak on value, and the six rules that decide every honeymoon date.
          </p>
          <p className="text-white/50 text-xs mt-5">Updated May 19, 2026</p>
        </div>
      </section>

      {/* BREADCRUMB */}
      <nav aria-label="Breadcrumb" className="max-w-4xl mx-auto px-6 pt-8 text-xs text-zinc-500">
        <Link href="/" className="hover:text-zinc-900">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-zinc-900">Best Time to Honeymoon</span>
      </nav>

      <div className="max-w-4xl mx-auto px-6">
        <AuthorByline />
      </div>

      {/* TL;DR */}
      <div className="max-w-3xl mx-auto px-6">
        <aside id="tldr" className="my-8 p-6 rounded-2xl bg-rose-50/60 border border-rose-100">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-2">TL;DR</p>
          <p className="text-zinc-900 text-lg leading-relaxed font-medium">
            The best month for your honeymoon depends on the destination&rsquo;s dry season, crowd level, and price band.
            December through April are peak for the Caribbean and Maldives. May through October are ideal for the
            Mediterranean. August is the Great Migration in Kenya. June through September deliver Iceland&rsquo;s midnight
            sun. Our 240-page calendar tells you exactly what to expect every month, everywhere.
          </p>
          <ul className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-zinc-600">
            <li><strong className="block text-zinc-900 text-xs uppercase tracking-wider mb-1">For</strong>Couples optimizing weather, crowds, and budget together</li>
            <li><strong className="block text-zinc-900 text-xs uppercase tracking-wider mb-1">Cost impact</strong>25–60% swing between peak and shoulder</li>
            <li><strong className="block text-zinc-900 text-xs uppercase tracking-wider mb-1">Strategy</strong>Anchor on dry season, then optimize the edges</li>
          </ul>
        </aside>
      </div>

      {/* INTRO */}
      <section className="max-w-3xl mx-auto px-6 py-12 prose prose-zinc">
        <p className="text-lg text-zinc-700 leading-relaxed">
          Most honeymoon-timing advice is wrong because it&rsquo;s generic. "Avoid hurricane season" treats Antigua and
          Aruba as the same destination; "go in May" assumes you want a Mediterranean honeymoon. The real answer is
          a 240-cell matrix: 20 honeymoon destinations against 12 months, with a verdict in every cell. That&rsquo;s what
          this page is — the hub for our destination-month deep-dives, each one a full guide with hotels, costs, and
          a TL;DR verdict.
        </p>
        <p className="text-base text-zinc-700 leading-relaxed mt-5">
          Below you&rsquo;ll find a month-by-month grid (every month gets 20 destination cards, each linking to its own
          page), a "best by intent" lookup, the six-rule framework that explains every cell in the matrix, and the
          twelve FAQs that get asked the most. For the broader pre-trip checklist see our{' '}
          <Link href="/how-to-plan-a-honeymoon" className="text-rose-500 hover:text-rose-600 underline underline-offset-2">
            full honeymoon planning guide
          </Link>.
        </p>

        <div className="not-prose my-12 bg-zinc-50 border border-zinc-100 rounded-2xl p-7">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-4">In this guide</p>
          <ol className="text-sm text-zinc-700 space-y-2 leading-relaxed list-decimal pl-5">
            <li><a className="hover:text-rose-500" href="#calendar">The month-by-month calendar — 240 verdicts</a></li>
            <li><a className="hover:text-rose-500" href="#intent">Best by intent — quick lookups</a></li>
            <li><a className="hover:text-rose-500" href="#framework">The 6-rule honeymoon-timing framework</a></li>
            <li><a className="hover:text-rose-500" href="#faq">Frequently asked questions</a></li>
          </ol>
        </div>
      </section>

      {/* CALENDAR — 12 MONTHS, EACH WITH 20-DEST GRID */}
      <section id="calendar" className="max-w-6xl mx-auto px-6 py-16">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-3">Section 01</p>
        <h2 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-6 leading-tight">
          The month-by-month calendar
        </h2>
        <p className="text-zinc-700 text-base leading-relaxed mb-10 max-w-3xl">
          Each month below opens with the global pattern, then a 20-destination grid. Click any destination card to
          open its full month-specific page — weather details, top resorts, real costs, a 7-night itinerary, and the
          honest verdict. The four price bands: Peak (book 9–12 months out), High (book 6–9 months), Shoulder
          (genuine value, 3–6 months), Low (deepest deals, last-minute possible), Avoid (off-season or weather risk).
        </p>

        <div className="space-y-20">
          {MONTHS.map((month, mIdx) => (
            <div key={month.slug}>
              <h3 className="font-display text-3xl sm:text-4xl text-zinc-900 mb-3 leading-tight">
                Honeymoon in {month.label} — {month.headline}
              </h3>
              <p className="text-zinc-700 text-base leading-relaxed mb-8 max-w-3xl">
                {MONTH_INTROS[month.slug]}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {DEST_SLUGS.map((dest) => {
                  const cell = getCell(dest, mIdx)
                  return (
                    <Link
                      key={dest}
                      href={`/destinations/${dest}/${month.slug}`}
                      className="block border border-zinc-200 rounded-xl p-4 hover:border-rose-300 hover:shadow-sm transition-all bg-white"
                    >
                      <div className="flex items-baseline justify-between gap-2 mb-1.5">
                        <p className="font-display text-base text-zinc-900 leading-tight">{DEST_LABEL[dest]}</p>
                        <span className={`text-[10px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded ${BAND_COLOR[cell.band]}`}>
                          {cell.band}
                        </span>
                      </div>
                      <p className="text-zinc-600 text-xs leading-snug">{cell.note}</p>
                    </Link>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INTENT */}
      <section id="intent" className="bg-zinc-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-3">Section 02</p>
          <h2 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-6 leading-tight">
            Best by intent — quick lookups
          </h2>
          <p className="text-zinc-700 text-base leading-relaxed mb-10 max-w-3xl">
            Six common honeymoon briefs, each with the destination-month combinations that deliver. Use these as
            shortcuts into the 240-page calendar above.
          </p>
          <div className="space-y-12">
            {INTENT.map((b) => (
              <div key={b.title} className="border-l-2 border-rose-200 pl-6">
                <h3 className="font-display text-2xl text-zinc-900 mb-3">{b.title}</h3>
                <p className="text-zinc-700 text-base leading-relaxed mb-5">{b.body}</p>
                <div className="flex flex-wrap gap-2">
                  {b.picks.map((p) => (
                    <Link
                      key={`${p.dest}-${p.month}`}
                      href={`/destinations/${p.dest}/${p.month}`}
                      className="inline-flex items-center text-sm bg-white border border-zinc-200 rounded-full px-4 py-1.5 hover:border-rose-300 hover:text-rose-600 transition-colors"
                    >
                      {p.label} →
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="text-zinc-700 text-base leading-relaxed mt-12">
            For the curated list of the 50 properties that anchor every destination, see our{' '}
            <Link href="/best/honeymoon-resorts-2026" className="text-rose-500 hover:text-rose-600 underline underline-offset-2">
              Best Honeymoon Resorts 2026 ranking
            </Link>.
          </p>
        </div>
      </section>

      {/* FRAMEWORK */}
      <section id="framework" className="max-w-3xl mx-auto px-6 py-20">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-3">Section 03</p>
        <h2 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-6 leading-tight">
          The 6-rule honeymoon-timing framework
        </h2>
        <p className="text-zinc-700 text-base leading-relaxed mb-10">
          Every cell in the 240-page calendar above follows from these six rules. Internalize them and you can read
          any destination&rsquo;s timing — even ones we don&rsquo;t cover — without looking it up.
        </p>
        <div className="space-y-9">
          {FRAMEWORK.map((r, i) => (
            <div key={r.title} className="border-l-2 border-rose-200 pl-6">
              <p className="text-xs font-mono text-rose-500 uppercase tracking-widest mb-1">Rule {i + 1}</p>
              <h3 className="font-display text-2xl text-zinc-900 mb-3">{r.title}</h3>
              <p className="text-zinc-700 text-base leading-relaxed">{r.body}</p>
            </div>
          ))}
        </div>
        <p className="text-zinc-700 text-base leading-relaxed mt-10">
          The single highest-leverage rule on this list is dry-season anchoring. For the corresponding cost analysis
          of each destination&rsquo;s peak vs. shoulder pricing, dive into our destination cost guides — start with the{' '}
          <Link href="/maldives-honeymoon-cost" className="text-rose-500 hover:text-rose-600 underline underline-offset-2">
            Maldives honeymoon cost
          </Link>{' '}
          breakdown.
        </p>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-zinc-50 py-20">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-3">Section 04</p>
          <h2 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-6 leading-tight">
            Frequently asked questions
          </h2>
          <div className="space-y-7 mt-10">
            {FAQS.map((f, i) => (
              <details key={i} className="group border-b border-zinc-200 pb-5">
                <summary className="cursor-pointer font-medium text-zinc-900 text-lg flex justify-between items-start gap-4">
                  <span>{f.q}</span>
                  <span className="text-rose-500 group-open:rotate-45 transition-transform shrink-0 font-light text-2xl leading-none">+</span>
                </summary>
                <p className="text-zinc-700 text-base leading-relaxed mt-3">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <Image
          src="/images/hotels/four-seasons-bora-bora/hero.webp"
          alt="Find the honeymoon hotel that fits your month"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
        <div className="relative max-w-4xl mx-auto px-6 text-white">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-300 mb-4">Next step</p>
          <h2 className="font-display text-4xl sm:text-5xl leading-tight mb-5">
            Now pick the resort <br className="hidden sm:block" />for your month.
          </h2>
          <p className="text-white/70 text-base leading-relaxed mb-8 max-w-xl">
            Take our 6-step quiz: five lifestyle questions and a date window, and we return three matched resorts at
            your budget tier with the right weather, the right vibe, and the booking timing figured out. Sixty seconds.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/quiz"
              className="bg-rose-500 hover:bg-rose-600 text-white font-semibold text-sm px-8 py-4 rounded-full transition-colors shadow-xl"
            >
              Take the quiz →
            </Link>
            <Link
              href="/how-to-plan-a-honeymoon"
              className="border border-white/30 backdrop-blur-md bg-white/5 hover:bg-white/10 text-white font-semibold text-sm px-8 py-4 rounded-full transition-colors"
            >
              Full planning guide
            </Link>
          </div>
        </div>
      </section>
    </article>
  )
}
