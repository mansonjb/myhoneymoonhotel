import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Maldives Honeymoon Cost: 2026 Real Numbers ($6k–$80k+)',
  description:
    'How much a Maldives honeymoon really costs in 2026. Four budget tiers, line-by-line breakdown, four real 7-night sample budgets, hidden costs, best months, and 8 ways to spend less.',
  alternates: {
    canonical: 'https://myhoneymoonhotel.com/maldives-honeymoon-cost',
  },
  openGraph: {
    title: 'Maldives Honeymoon Cost — 2026 Real Numbers',
    description:
      'Four budget tiers ($6k–$80k+), real hotel breakdowns, hidden costs (seaplane, Green Tax, GST 16%), best months, and 8 ways to spend less on a Maldives honeymoon.',
    url: 'https://myhoneymoonhotel.com/maldives-honeymoon-cost',
    siteName: 'MyHoneymoonHotel',
    images: [
      {
        url: 'https://myhoneymoonhotel.com/images/hotels/soneva-jani-maldives/hero.webp',
        width: 1600,
        height: 900,
        alt: 'Soneva Jani overwater villa with slide — the canonical Maldives ultra-luxury honeymoon image',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maldives Honeymoon Cost — 2026 Real Numbers',
    description: 'Four budget tiers, real hotel breakdowns, hidden costs, best months, and 8 ways to spend less.',
    images: ['https://myhoneymoonhotel.com/images/hotels/soneva-jani-maldives/hero.webp'],
  },
}

const FAQS: { q: string; a: string }[] = [
  {
    q: 'How much does a Maldives honeymoon cost on average?',
    a: 'For 7 nights all-in (flights, resort, transfers, food, taxes, tips), the typical 2026 US couple spends $14,000 to $18,000 on a "comfortable mid-range" Maldives honeymoon at a 4–5★ property like Kuramathi or Centara Ras Fushi. Drop to $8,000 if you stay near Male and skip the seaplane. Push to $25,000+ for a true 5★ overwater villa at Anantara Kihavah, Conrad Rangali, or Velaa. Ultra-luxury (Soneva Jani, Cheval Blanc Randheli, One&Only Reethi Rah) starts at $35,000 and runs past $80,000 for the headline villas.',
  },
  {
    q: 'Is the Maldives more expensive than Bora Bora?',
    a: 'For an equivalent overwater experience, the Maldives is now slightly cheaper than Bora Bora — by roughly 10–20%. A mid-tier overwater villa runs $1,200–$2,000/night in the Maldives versus $1,500–$2,500/night in Bora Bora. Flights from the US East Coast favor Bora Bora; flights from Europe massively favor the Maldives. Bora Bora has fewer ultra-luxury options at the very top — the Maldives wins at every price band above $25k.',
  },
  {
    q: 'How much is the seaplane transfer in the Maldives?',
    a: 'Round-trip seaplane transfers run $500 to $700 per person — so $1,000 to $1,400 per couple — for resorts in the North and South Male Atolls and Baa Atoll. Trans Maldivian Airways operates the bulk of routes; the resort books it on your behalf. Resorts further afield (Noonu, Raa) can hit $900/pp RT. A handful of resorts use a domestic flight + speedboat combination, which is similar in price but less scenic. Speedboat-only resorts (within 30km of Male) charge $200–$350/pp RT.',
  },
  {
    q: 'When is the cheapest time for a Maldives honeymoon?',
    a: 'May, June, September, and October are the cheapest weeks. These are shoulder months — technically wet season but in practice you get 5–6 sunny hours most days, with afternoon showers. Rates drop 30–45% versus the December–March peak. The window to absolutely avoid for cost is December 20 to January 5 (Christmas/New Year peak), when even mid-range resorts charge $1,500/night for a beach villa and impose mandatory $400/pp gala dinners.',
  },
  {
    q: 'Are there hidden costs at Maldives resorts?',
    a: 'Yes, several. The 16% GST and 10% service charge are added to most bills (a 26% uplift on every line). The Green Tax adds $6/pp/night. Seaplane transfers are almost never included unless you book an all-inclusive package. Wi-Fi is free at most properties now but the in-villa minibar, alcohol outside the meal plan, spa, excursions ($150–$300pp), and photography ($800–$2,500) are all extras. Budget another 15–25% on top of the headline room rate.',
  },
  {
    q: 'Is all-inclusive worth it in the Maldives?',
    a: 'Usually yes. Resort restaurants are the only restaurants — there is no village to walk to, no Uber, no nearby alternatives. Mid-range resorts price half-board at $80–$140/pp/day, full-board at $130–$190, and full all-inclusive at $200–$320. If you intend to drink wine with dinner, do the math: AI almost always wins above two glasses of wine per couple per day. The exception is ultra-luxury, where AI is rarely offered and the à la carte experience is the point.',
  },
  {
    q: 'How long is the flight to the Maldives from the US and Europe?',
    a: 'From New York or Boston, expect 18–22 total hours with one stop in Doha (Qatar), Dubai (Emirates), or Istanbul (Turkish). From the US West Coast, 22–26 hours via Asia (Singapore Airlines, ANA via Tokyo). From London, Paris, Amsterdam, or Frankfurt, 10–12 hours direct or one-stop. Add 30–45 minutes for the seaplane transfer from Male, which only operates in daylight — flights landing after 4pm typically require an overnight in Male.',
  },
  {
    q: 'Do we need a visa for the Maldives?',
    a: 'No. Almost all nationalities receive a free 30-day visa-on-arrival, including US, UK, EU, Australian, and Canadian citizens. You only need a passport valid for 6 months past your return date, a confirmed hotel booking, and proof of onward travel. There is a free online "IMUGA" health-and-arrival form to complete in the 96 hours before landing — fill it on the flight; the QR code is checked at immigration.',
  },
  {
    q: 'Can we use credit-card points for a Maldives honeymoon?',
    a: 'Yes — and it is one of the highest-leverage point redemptions in travel. Business class New York to Male (via Doha on Qatar Airways) runs around $7,500 cash but books for 70,000–95,000 Avios or Alaska miles one-way. Hotel transfers via Marriott Bonvoy and Hilton Honors get you 5★ Maldives nights for 100,000–150,000 points (cash equivalent: $1,200–$1,800). Start accumulating 18 months out using Chase Sapphire, Amex Platinum, or Capital One Venture X.',
  },
  {
    q: 'Is the Maldives worth the cost for a honeymoon?',
    a: 'For couples who want a pure beach honeymoon with zero logistics, total privacy, and the iconic overwater photo — yes, unequivocally. Each resort is a private island; once you arrive, every meal, every excursion, every sunset is on-property. There is nothing to organize. For couples who get restless after 4 days of horizontal time, who want food culture, hiking, or city days, the Maldives is the wrong destination — Bali or Thailand will be more memorable for the same money.',
  },
]

const TIER_TABLE = [
  {
    tier: 'Budget',
    range: '$6,000 – $9,000',
    tag: 'Local-island guesthouse or near-Male 4★',
    examples: 'Adaaran Select Hudhuranfushi · Reethi Beach',
    transfer: 'Speedboat ($250pp RT)',
    villa: 'Beach bungalow',
    meal: 'Half-board',
  },
  {
    tier: 'Mid-range',
    range: '$10,000 – $15,000',
    tag: 'Solid 4★ resort, one overwater splurge',
    examples: 'Kuramathi · Centara Ras Fushi · Sun Siyam Vilu Reef',
    transfer: 'Seaplane or domestic flight',
    villa: 'Beach villa with pool / 1 night overwater',
    meal: 'Full-board or AI',
  },
  {
    tier: 'Luxury',
    range: '$18,000 – $30,000',
    tag: 'Brand-name 5★, full overwater stay',
    examples: 'Anantara Kihavah · Conrad Rangali · Six Senses Laamu',
    transfer: 'Seaplane ($550pp RT)',
    villa: 'Overwater villa with pool',
    meal: 'Full-board',
  },
  {
    tier: 'Ultra-luxury',
    range: '$35,000 – $80,000+',
    tag: 'Top-of-market private island',
    examples: 'Soneva Jani · Cheval Blanc Randheli · One&Only Reethi Rah',
    transfer: 'Private seaplane or yacht',
    villa: '2-bedroom water reserve with slide',
    meal: 'Bespoke / dine-anywhere',
  },
]

const COST_DRIVERS = [
  {
    title: 'Resort tier and brand',
    detail:
      'The single biggest variable. A 4★ near-Male property runs $400–$700/night for a beach bungalow. A mid-tier 5★ overwater villa runs $1,200–$2,000/night. A top-of-market villa at Soneva Jani, Velaa, or Cheval Blanc runs $4,000–$15,000/night. Within "5★", brand prestige adds 30–60% to the rate (St. Regis vs. Anantara) for a similar physical product.',
  },
  {
    title: 'Season and date',
    detail:
      'Peak (Dec 20–Jan 5) costs roughly 2.2× the September–October low. High-season (Dec, Jan, Feb, early March) runs 1.5–1.8× shoulder. May–June and September–October are 35–45% cheaper than peak with only marginally worse weather. Easter and Chinese New Year are mini-peaks with their own surcharges.',
  },
  {
    title: 'Transfer type — seaplane, speedboat, or domestic flight',
    detail:
      'Resorts under 30km from Male use speedboat ($200–$350/pp RT). Resorts in North/South Male and Baa Atoll use seaplane ($500–$700/pp RT). Resorts further out (Raa, Noonu, Gaafu) require a domestic flight + speedboat ($600–$900/pp RT). Seaplane is daylight-only — late-arriving international flights often require a forced $250–$400 overnight in Male.',
  },
  {
    title: 'Meal plan — bed-and-breakfast, half-board, full-board, or all-inclusive',
    detail:
      'On a private island you will not eat anywhere else. BB looks cheap but adds $250–$400/couple/day in à la carte food. Half-board (breakfast + dinner) is the most common honeymoon plan — $80–$140/pp/day. Full-board adds $40–$60/pp/day. All-inclusive at a 5★ runs $200–$320/pp/day and almost always pays back if you drink wine with dinner.',
  },
  {
    title: 'Room category — beach villa vs. overwater villa vs. with-pool',
    detail:
      'Beach villa is the entry-level room at most resorts. Overwater villa adds 25–60% to the nightly rate. Adding a private pool adds another 20–35%. The premium "sunset" overwater villas are typically 15% more than "sunrise" — the sunrise side gets all-day shade by 3pm, which is actually preferable in March–May heat. The cheapest "lagoon-view" overwater villas at Conrad Rangali, Anantara, or Lily Beach are the best price-quality move.',
  },
]

const LINE_ITEMS = [
  ['Flights from US East Coast (premium economy, 2pax)', '$3,200 – $5,500'],
  ['Flights from US West Coast (premium economy, 2pax)', '$4,000 – $7,000'],
  ['Flights from Europe (economy, 2pax)', '$1,400 – $2,800'],
  ['Flights from Europe (business, 2pax)', '$5,000 – $9,000'],
  ['Resort, 7 nights, 4★ beach villa', '$3,500 – $6,000'],
  ['Resort, 7 nights, 5★ overwater villa', '$9,500 – $16,000'],
  ['Resort, 7 nights, ultra-luxury 2BR water reserve', '$25,000 – $80,000'],
  ['Seaplane round-trip transfer (2pax)', '$1,000 – $1,400'],
  ['Speedboat round-trip transfer (2pax, near-Male)', '$400 – $700'],
  ['Half-board upgrade (2pax × 7 nights)', '$1,100 – $1,950'],
  ['All-inclusive upgrade (2pax × 7 nights)', '$2,800 – $4,500'],
  ['Excursions — snorkel safari, sandbank, sunset cruise (2pax)', '$450 – $900'],
  ['Spa — 1 couples 60-min massage', '$350 – $600'],
  ['Honeymoon photoshoot (1 hour, in-villa)', '$800 – $2,500'],
  ['Green Tax ($6/pp/night × 7)', '$84'],
  ['GST (16%) + service charge (10%) on all on-island bills', '+26% uplift'],
  ['Tips — butler, dive guide, housekeeping (7 nights)', '$150 – $250'],
  ['Travel insurance with CFAR ($20k trip value)', '$300 – $700'],
]

const SAMPLE_BUDGETS = [
  {
    name: 'Budget — Adaaran Select Hudhuranfushi',
    total: '$8,200',
    season: 'Late September, 7 nights',
    bullets: [
      ['Flights (economy, NYC → MLE via Doha)', '$2,400'],
      ['Resort, 7 nights, ocean villa, all-inclusive', '$3,800'],
      ['Speedboat transfer RT (45 min)', '$320'],
      ['Excursions (1 snorkel + 1 sunset cruise)', '$450'],
      ['Green Tax + service uplift on extras', '$280'],
      ['Tips + buffer', '$950'],
    ],
    note:
      'Hudhuranfushi is one of the few proper-feeling Maldives experiences under $4k for the resort. The all-inclusive plan covers wine, beer, and most spirits. No seaplane stress.',
  },
  {
    name: 'Mid-range — Kuramathi or Centara Ras Fushi',
    total: '$14,400',
    season: 'Mid-May, 7 nights',
    bullets: [
      ['Flights (premium economy, BOS → MLE via DOH)', '$3,400'],
      ['Resort, 6 nights beach villa with pool', '$4,800'],
      ['Resort, 1 night overwater villa upgrade', '$1,200'],
      ['Half-board for 2', '$1,580'],
      ['Seaplane transfer RT (Kuramathi) or speedboat (Centara)', '$1,100'],
      ['Excursions (sandbank picnic + manta safari)', '$650'],
      ['Spa (1 couples massage)', '$420'],
      ['Green Tax + GST uplift + tips', '$1,250'],
    ],
    note:
      'The textbook mid-range honeymoon. One overwater splurge night for the photo, six nights of beachfront for the hammock-and-book life. Mid-May is the sweet spot — half-empty resorts, full-price weather.',
  },
  {
    name: 'Luxury — Anantara Kihavah',
    total: '$24,300',
    season: 'Early November, 7 nights',
    bullets: [
      ['Flights (business class points + cash, 2pax)', '$3,500'],
      ['Resort, 7 nights overwater pool villa', '$13,800'],
      ['Half-board for 2', '$1,820'],
      ['Seaplane transfer RT (Baa Atoll)', '$1,260'],
      ['SEA underwater restaurant dinner (one night)', '$580'],
      ['Excursions (manta + private sandbank)', '$880'],
      ['Spa, photoshoot, tips', '$1,400'],
      ['Green Tax + GST + service charge uplift', '$1,060'],
    ],
    note:
      'Anantara Kihavah hits the sweet spot of 5★ Maldives — the underwater restaurant SEA is genuinely one of the great dining rooms in the world, the overwater pool villas are 165m² each, and the Baa Atoll location means manta encounters at Hanifaru Bay in season.',
  },
  {
    name: 'Ultra-luxury — Soneva Jani',
    total: '$55,800',
    season: 'February, 7 nights',
    bullets: [
      ['Flights (business class, 2pax)', '$8,500'],
      ['Resort, 7 nights 1BR water reserve with slide', '$36,500'],
      ['Soneva Unlimited (dine + drink anywhere)', 'Included'],
      ['Private seaplane transfer RT', '$1,800'],
      ['Cinema Paradiso, So Hands-On dining nights, dolphin cruise', 'Included'],
      ['Spa, observatory session, photoshoot', '$2,400'],
      ['Green Tax + service uplift + tips', '$3,800'],
      ['Insurance + buffer', '$2,800'],
    ],
    note:
      'Soneva Jani is the headline. The 1-bedroom water reserves have a retractable roof over the bed, a slide from the deck into the lagoon, and the "Soneva Unlimited" package quietly removes the constant à la carte math. Booking 9–12 months ahead is mandatory.',
  },
]

const SEASONS = [
  { months: 'November', verdict: 'Best', detail: 'Dry season starts. Fewer crowds than December peak. Manta migration tail at Hanifaru Bay (Baa Atoll) until early November.' },
  { months: 'December', verdict: 'Peak (avoid Dec 20–Jan 5)', detail: 'Driest weather of the year — and the highest prices. Christmas/New Year fortnight is 2.2× shoulder rates with mandatory gala dinners.' },
  { months: 'January – early March', verdict: 'High season', detail: 'Best weather, big crowds, peak prices. Book 9–12 months ahead.' },
  { months: 'Mid-March – April', verdict: 'Excellent value', detail: 'Still dry, water visibility at its best. Prices begin to soften by mid-March. Easter is a mini-spike.' },
  { months: 'May – June', verdict: 'Best value (shoulder)', detail: 'Wet season starts but in practice 5–6 sunny hours per day. Rates drop 35–45%. Manta and whale-shark season picks up in Baa Atoll.' },
  { months: 'July – August', verdict: 'Mixed', detail: 'European school holidays push prices up slightly despite wet weather. Surfers love this window.' },
  { months: 'September – October', verdict: 'Best value (shoulder)', detail: 'Cheapest weeks of the year. Real risk of 1–2 fully rained-out days per week, but resorts are half-empty and you can negotiate room upgrades on arrival.' },
]

const TIPS = [
  {
    title: 'Book 9 to 12 months ahead',
    detail:
      'The best overwater villas — sunset side, with private pool, at the popular 5★ resorts — are 5–10% of inventory and sell out 9–12 months ahead for any peak week. Booking late means paying more for an inferior room. Set the dates the moment your wedding is locked.',
  },
  {
    title: 'Run the all-inclusive math, then commit',
    detail:
      'On a private island the resort is your only restaurant. Half-board sounds cheaper but if you eat lunch and drink wine with dinner, AI nearly always wins above $50/couple/day in à la carte. Run the calculation before you book — most resorts let you upgrade the meal plan up to 14 days before arrival.',
  },
  {
    title: 'Half-board + paid lunches > full-board',
    detail:
      'Many couples sleep through breakfast and skip lunch on beach days. Full-board pays for meals you do not eat. Half-board (breakfast + dinner) plus 2–3 paid lunches across the week is typically $300–$500 per couple cheaper.',
  },
  {
    title: 'Choose a near-Male resort to avoid the seaplane',
    detail:
      'Speedboat resorts (within 30km of Male) save $700–$1,000 per couple on transfers and remove the daylight-flight constraint. Adaaran Hudhuranfushi, Centara Ras Fushi, Kurumba, Bandos, and Sheraton Full Moon all sit inside this band with proper 4–5★ experiences.',
  },
  {
    title: 'Travel May, June, September, or October',
    detail:
      'The 35–45% shoulder discount more than compensates for the 1–2 likely rained-out afternoons. Resorts run aggressive "stay 7 pay 5" promotions during these months. Avoid August (European school holiday spike) and absolutely avoid Dec 20–Jan 5.',
  },
  {
    title: 'Use a Honeyfund or Zola registry for the seaplane and excursions',
    detail:
      'Frame each gift as an experience: "the seaplane to our island", "the manta safari", "the underwater dinner at SEA". 60% of US couples now use a honeymoon registry — guests prefer experience-gifting to china. We cover this in detail in our planning guide at /how-to-plan-a-honeymoon.',
  },
  {
    title: 'Redeem credit-card points for business class',
    detail:
      'New York to Male in Qatar Q-Suite is $7,500 cash or 70,000–95,000 Avios one-way. Chase Sapphire, Amex Platinum, and Capital One Venture X all transfer to airline partners that fly the route. A single sign-up bonus typically covers one ticket. Start accumulating 18 months out.',
  },
  {
    title: 'Take an "off-peak" honeymoon',
    detail:
      'You do not have to fly within a week of the wedding. Couples who delay the honeymoon by 3–6 months often save 40% by hitting a shoulder month — and arrive less exhausted, with paperwork sorted. The romance does not depreciate.',
  },
]

const HIDDEN_COSTS = [
  ['GST (16%) + service charge (10%)', 'Applied to nearly every line on your bill — food, drink, spa, excursions. A 26% uplift in practice. Always quoted "++" in resort pricing.'],
  ['Green Tax', '$6 per person per night, applied to every guest. $84 for a couple over 7 nights. Charged at checkout.'],
  ['Wi-Fi', 'Free at almost every resort in 2026. Premium "high-speed" tiers ($30/day) are a marketing trick — the free tier is fine for streaming.'],
  ['Excursions', '$150 to $300 per person. Manta safari, dolphin cruise, sandbank picnic, sunset fishing. Plan 2–3 across a 7-night stay.'],
  ['Spa', '$350 to $600 for a 60-minute couples massage at a 5★ property. The signature treatments at Six Senses, Soneva, and Anantara hit $800–$1,200.'],
  ['Alcohol', 'Wine pairings at à la carte dinners run $80–$200 per person. A bottle of decent Sancerre is $90–$140 at resort markup. Verify what your meal plan includes.'],
  ['Photography', '$800 for a 60-minute villa shoot, $1,500–$2,500 for a half-day. Most resorts have an in-house photographer who is significantly cheaper than flying in your own.'],
  ['Tips', 'Roughly $15–$20 per day for the butler/villa host, plus $10/day for housekeeping and $20–$50 per dive or excursion. Budget $150–$250 across 7 nights.'],
  ['Forced overnight in Male', 'If your international flight lands after 4pm, the seaplane cannot fly — you will need a $250–$400 overnight near the airport (Hulhule Island Hotel is the standard).'],
]

const COMPARISON = [
  { dest: 'Maldives', total: '$14k – $24k', flight: '18–22h from US East / 10h from EU', signature: 'Overwater villa, glass floor, private island' },
  { dest: 'Bora Bora', total: '$18k – $28k', flight: '15–18h from US East', signature: 'Mt. Otemanu backdrop, the bluest lagoon on earth' },
  { dest: 'Bali', total: '$8k – $14k', flight: '22h from US East / 16h from EU', signature: 'Jungle + beach combo, half the price of Maldives' },
  { dest: 'Mauritius', total: '$10k – $16k', flight: '11h from EU / 22h from US', signature: 'Hiking, food, beach — more variety than Maldives' },
]

export default function MaldivesHoneymoonCostPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Maldives Honeymoon Cost: 2026 Real Numbers',
    description:
      'How much a Maldives honeymoon really costs in 2026 — four budget tiers, line-by-line breakdown, four real 7-night sample budgets, hidden costs, and 8 ways to spend less.',
    image: 'https://myhoneymoonhotel.com/images/hotels/soneva-jani-maldives/hero.webp',
    author: { '@type': 'Organization', name: 'MyHoneymoonHotel', url: 'https://myhoneymoonhotel.com' },
    publisher: {
      '@type': 'Organization',
      name: 'MyHoneymoonHotel',
      logo: { '@type': 'ImageObject', url: 'https://myhoneymoonhotel.com/logo.png' },
    },
    datePublished: '2026-02-10',
    dateModified: '2026-05-02',
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://myhoneymoonhotel.com/maldives-honeymoon-cost' },
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
        name: 'Maldives Honeymoon Cost',
        item: 'https://myhoneymoonhotel.com/maldives-honeymoon-cost',
      },
    ],
  }

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* HERO */}
      <section className="relative h-[70vh] min-h-[520px] flex items-end overflow-hidden">
        <Image
          src="/images/hotels/soneva-jani-maldives/hero.webp"
          alt="Soneva Jani overwater villa with private slide — Maldives ultra-luxury honeymoon"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={75}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="relative z-10 px-8 sm:px-12 pb-16 max-w-4xl">
          <p className="text-white/60 text-xs tracking-[0.2em] uppercase mb-5">The Cost Guide</p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.05] mb-6">
            Maldives honeymoon<br />cost — 2026.
          </h1>
          <p className="text-white/75 text-base sm:text-lg max-w-2xl leading-relaxed">
            How much a Maldives honeymoon really costs in 2026. Four budget tiers from $6k to $80k+, the five
            cost drivers, line-by-line breakdowns, four real 7-night sample budgets, hidden costs, the cheapest
            months, and the eight ways to spend meaningfully less without losing the magic.
          </p>
        </div>
      </section>

      {/* BREADCRUMB */}
      <nav aria-label="Breadcrumb" className="max-w-4xl mx-auto px-6 pt-8 text-xs text-zinc-500">
        <Link href="/" className="hover:text-zinc-900">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-zinc-900">Maldives Honeymoon Cost</span>
      </nav>

      {/* INTRO + TL;DR */}
      <section className="max-w-3xl mx-auto px-6 py-14 prose prose-zinc">
        <p className="text-lg text-zinc-700 leading-relaxed">
          A Maldives honeymoon in 2026 costs anywhere from <strong>$6,000 to $80,000+</strong> all-in for two
          people, seven nights. That spread is not marketing — it is the honest range, and where you land
          inside it depends on five concrete decisions: resort tier, season, transfer type, meal plan, and
          room category. Get those five right and you can have a real Maldives experience for $14k. Get them
          wrong and the same hotel quietly bills you $24k.
        </p>
        <p className="text-base text-zinc-700 leading-relaxed mt-5">
          This guide is the cost breakdown we wish someone had handed us. Real 2026 prices, real hotels, real
          line items — including the seaplane ($500–$700/pp round-trip), the 16% GST, the 10% service charge,
          and the Green Tax that nobody mentions on the booking page. We work bottom-up: four tiers, the cost
          drivers, a full line-by-line table, four sample 7-night budgets at named hotels, the cheapest
          months, eight ways to spend less, and a head-to-head comparison with Bora Bora, Bali, and Mauritius.
          For the broader pre-trip checklist see our{' '}
          <Link href="/how-to-plan-a-honeymoon" className="text-rose-500 hover:text-rose-600 underline underline-offset-2">
            full honeymoon planning guide
          </Link>.
        </p>

        <div className="not-prose my-12 bg-zinc-50 border border-zinc-100 rounded-2xl p-7">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-4">In this guide</p>
          <ol className="text-sm text-zinc-700 space-y-2 leading-relaxed list-decimal pl-5">
            <li><a className="hover:text-rose-500" href="#tldr">The four budget tiers — TL;DR table</a></li>
            <li><a className="hover:text-rose-500" href="#drivers">The five cost drivers</a></li>
            <li><a className="hover:text-rose-500" href="#line-items">Line-by-line cost breakdown</a></li>
            <li><a className="hover:text-rose-500" href="#samples">Four real 7-night sample budgets</a></li>
            <li><a className="hover:text-rose-500" href="#season">Best value months</a></li>
            <li><a className="hover:text-rose-500" href="#tips">8 ways to spend meaningfully less</a></li>
            <li><a className="hover:text-rose-500" href="#hidden">Hidden costs nobody warns you about</a></li>
            <li><a className="hover:text-rose-500" href="#compare">Maldives vs. Bora Bora vs. Bali vs. Mauritius</a></li>
            <li><a className="hover:text-rose-500" href="#faq">Frequently asked questions</a></li>
          </ol>
        </div>
      </section>

      {/* 1. TL;DR */}
      <section id="tldr" className="bg-zinc-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-3">Section 01</p>
          <h2 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-6 leading-tight">
            The four budget tiers
          </h2>
          <p className="text-zinc-700 text-base leading-relaxed mb-10">
            Seven nights. Two people. All-in — flights from a major US or EU hub, resort, transfers, meals,
            taxes, tips, modest excursions. The tier is set by which resort you book; everything else flows
            from that decision.
          </p>

          <div className="overflow-x-auto -mx-6 px-6">
            <table className="w-full text-sm bg-white border border-zinc-100 rounded-2xl overflow-hidden">
              <thead className="bg-zinc-100 text-zinc-700">
                <tr>
                  <th className="text-left p-4 font-semibold">Tier</th>
                  <th className="text-left p-4 font-semibold">7-night total</th>
                  <th className="text-left p-4 font-semibold">Sample resorts</th>
                  <th className="text-left p-4 font-semibold">Transfer</th>
                  <th className="text-left p-4 font-semibold">Villa</th>
                  <th className="text-left p-4 font-semibold">Meal plan</th>
                </tr>
              </thead>
              <tbody>
                {TIER_TABLE.map((t) => (
                  <tr key={t.tier} className="border-t border-zinc-100 align-top">
                    <td className="p-4 font-semibold text-zinc-900">{t.tier}</td>
                    <td className="p-4 text-rose-500 font-semibold tabular-nums">{t.range}</td>
                    <td className="p-4 text-zinc-700">{t.examples}</td>
                    <td className="p-4 text-zinc-700">{t.transfer}</td>
                    <td className="p-4 text-zinc-700">{t.villa}</td>
                    <td className="p-4 text-zinc-700">{t.meal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-zinc-600 text-sm leading-relaxed mt-6 italic">
            All numbers in 2026 USD, for two people, including 16% GST, 10% service charge, and Green Tax.
            Excludes premium-cabin flight upgrades and credit-card-point redemptions, which can shift the
            top-line by $4k–$10k in either direction.
          </p>
        </div>
      </section>

      {/* 2. COST DRIVERS */}
      <section id="drivers" className="max-w-3xl mx-auto px-6 py-20">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-3">Section 02</p>
        <h2 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-6 leading-tight">
          The five cost drivers
        </h2>
        <p className="text-zinc-700 text-base leading-relaxed mb-10">
          Almost every dollar of variance between a $9k and a $30k Maldives honeymoon is explained by these
          five decisions. Understand them before you start price-shopping rooms — most couples overspend
          because they optimize the room rate while ignoring the four bigger levers.
        </p>
        <div className="space-y-9">
          {COST_DRIVERS.map((d, i) => (
            <div key={d.title} className="border-l-2 border-rose-200 pl-6">
              <p className="text-xs font-mono text-rose-500 uppercase tracking-widest mb-1">Driver {i + 1}</p>
              <h3 className="font-display text-2xl text-zinc-900 mb-3">{d.title}</h3>
              <p className="text-zinc-700 text-base leading-relaxed">{d.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. LINE ITEMS */}
      <section id="line-items" className="bg-zinc-50 py-20">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-3">Section 03</p>
          <h2 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-6 leading-tight">
            Line-by-line cost breakdown
          </h2>
          <p className="text-zinc-700 text-base leading-relaxed mb-10">
            Every line item that hits a typical 7-night Maldives honeymoon, with 2026 ranges. Build your own
            number by selecting one row from each category — flights, resort, transfer, meal upgrade — then
            adding the fixed lines (Green Tax, GST uplift, tips, insurance).
          </p>

          <div className="overflow-x-auto -mx-6 px-6">
            <table className="w-full text-sm bg-white border border-zinc-100 rounded-2xl overflow-hidden">
              <tbody>
                {LINE_ITEMS.map((row, i) => (
                  <tr key={i} className="border-t border-zinc-100 first:border-t-0">
                    <td className="p-4 text-zinc-700">{row[0]}</td>
                    <td className="p-4 text-zinc-900 font-medium text-right tabular-nums whitespace-nowrap">{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-zinc-600 text-sm leading-relaxed mt-6 italic">
            The "+26% uplift" line on GST + service charge is the single most overlooked figure in Maldives
            budgeting. Resorts quote room rates "++" — meaning the printed price plus 16% GST plus 10%
            service. A $1,000/night villa is a $1,260 villa.
          </p>
        </div>
      </section>

      {/* 4. SAMPLE BUDGETS */}
      <section id="samples" className="max-w-3xl mx-auto px-6 py-20">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-3">Section 04</p>
        <h2 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-6 leading-tight">
          Four real 7-night sample budgets
        </h2>
        <p className="text-zinc-700 text-base leading-relaxed mb-10">
          Four named-hotel honeymoons we have priced in 2026, top to bottom, with line items and the season
          we recommend for each tier. Use them as a calibration: find the one closest to your dream and
          adjust line by line.
        </p>
        <div className="space-y-10">
          {SAMPLE_BUDGETS.map((s) => (
            <div key={s.name} className="border border-zinc-100 rounded-2xl p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-3 mb-1">
                <h3 className="font-display text-2xl text-zinc-900">{s.name}</h3>
                <p className="text-rose-500 font-semibold text-lg tabular-nums">{s.total}</p>
              </div>
              <p className="text-zinc-500 text-xs uppercase tracking-widest mb-5">{s.season}</p>
              <table className="w-full text-sm mb-5">
                <tbody>
                  {s.bullets.map((row, i) => (
                    <tr key={i} className="border-t border-zinc-100">
                      <td className="py-2 text-zinc-600">{row[0]}</td>
                      <td className="py-2 text-zinc-900 font-medium text-right tabular-nums whitespace-nowrap">{row[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-zinc-700 text-sm leading-relaxed italic">{s.note}</p>
            </div>
          ))}
        </div>
        <p className="text-zinc-700 text-base leading-relaxed mt-10">
          For the curated edit of every property we cover in this destination, see our{' '}
          <Link href="/destinations/maldives" className="text-rose-500 hover:text-rose-600 underline underline-offset-2">
            Maldives destination guide
          </Link>{' '}
          and the{' '}
          <Link href="/experiences/overwater-bungalows" className="text-rose-500 hover:text-rose-600 underline underline-offset-2">
            overwater bungalow experience hub
          </Link>.
        </p>
      </section>

      {/* 5. SEASON */}
      <section id="season" className="bg-zinc-50 py-20">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-3">Section 05</p>
          <h2 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-6 leading-tight">
            Best value months for a Maldives honeymoon
          </h2>
          <p className="text-zinc-700 text-base leading-relaxed mb-10">
            The Maldives has two seasons — dry (November to April) and wet (May to October) — but in practice
            the price spread is sharper than the weather spread. The cheapest weeks (May, June, September,
            October) come with 1–2 likely rained-out afternoons across a 7-night stay; the trade is 35–45%
            off the headline rate.
          </p>
          <div className="space-y-6">
            {SEASONS.map((s) => (
              <div key={s.months} className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 border-b border-zinc-200 pb-5">
                <div className="sm:w-44 shrink-0">
                  <p className="font-display text-xl text-zinc-900">{s.months}</p>
                  <p className="text-rose-500 text-xs font-semibold uppercase tracking-widest mt-0.5">{s.verdict}</p>
                </div>
                <p className="text-zinc-700 text-base leading-relaxed">{s.detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 bg-rose-50 border border-rose-100 rounded-2xl p-6">
            <p className="text-zinc-700 text-base leading-relaxed">
              <strong>The single rule:</strong> avoid December 20 to January 5. Even mid-tier resorts charge
              $1,500/night for a beach villa during this fortnight, often with a mandatory $400/pp gala
              dinner on December 31. If your wedding falls in early December, push the honeymoon to mid-January.
            </p>
          </div>
        </div>
      </section>

      {/* 6. TIPS */}
      <section id="tips" className="max-w-3xl mx-auto px-6 py-20">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-3">Section 06</p>
        <h2 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-6 leading-tight">
          8 ways to spend meaningfully less
        </h2>
        <p className="text-zinc-700 text-base leading-relaxed mb-10">
          Each of these saves at least $500 per couple. Stack four or five and the same Maldives experience
          drops $3,000–$5,000 without losing anything that matters.
        </p>
        <ol className="space-y-7">
          {TIPS.map((t, i) => (
            <li key={t.title} className="flex gap-5">
              <span className="font-display text-2xl text-rose-500 tabular-nums w-8 shrink-0">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="font-medium text-zinc-900 mb-1.5">{t.title}</h3>
                <p className="text-zinc-700 text-sm leading-relaxed">{t.detail}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="text-zinc-700 text-base leading-relaxed mt-10">
          The all-inclusive math is the highest-leverage tip on this list. See our deep-dive on the{' '}
          <Link href="/experiences/all-inclusive" className="text-rose-500 hover:text-rose-600 underline underline-offset-2">
            all-inclusive resort experience
          </Link>{' '}
          for the full breakdown.
        </p>
      </section>

      {/* 7. HIDDEN COSTS */}
      <section id="hidden" className="bg-zinc-950 text-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">Section 07</p>
          <h2 className="font-display text-4xl sm:text-5xl mb-6 leading-tight">
            Hidden costs nobody warns you about
          </h2>
          <p className="text-zinc-400 text-base leading-relaxed mb-10">
            Nine line items that quietly add 15–25% to the headline number. Read this before you book —
            most are avoidable or budgetable, none are deal-breakers if you see them coming.
          </p>
          <div className="space-y-6">
            {HIDDEN_COSTS.map((row) => (
              <div key={row[0]} className="border-b border-zinc-800 pb-5">
                <h3 className="font-display text-xl text-rose-300 mb-2">{row[0]}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{row[1]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. COMPARISON */}
      <section id="compare" className="max-w-3xl mx-auto px-6 py-20">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-3">Section 08</p>
        <h2 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-6 leading-tight">
          Maldives vs. Bora Bora vs. Bali vs. Mauritius
        </h2>
        <p className="text-zinc-700 text-base leading-relaxed mb-10">
          Four tropical honeymoon destinations at roughly comparable spend bands. The Maldives wins for the
          iconic photo and total privacy; Bora Bora wins for the lagoon color; Bali wins on price and
          variety; Mauritius wins for couples who refuse to sit still.
        </p>

        <div className="overflow-x-auto -mx-6 px-6">
          <table className="w-full text-sm bg-white border border-zinc-100 rounded-2xl overflow-hidden">
            <thead className="bg-zinc-100 text-zinc-700">
              <tr>
                <th className="text-left p-4 font-semibold">Destination</th>
                <th className="text-left p-4 font-semibold">7-night total</th>
                <th className="text-left p-4 font-semibold">Flight time</th>
                <th className="text-left p-4 font-semibold">Signature</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON.map((c) => (
                <tr key={c.dest} className="border-t border-zinc-100 align-top">
                  <td className="p-4 font-semibold text-zinc-900">{c.dest}</td>
                  <td className="p-4 text-rose-500 font-semibold tabular-nums whitespace-nowrap">{c.total}</td>
                  <td className="p-4 text-zinc-700 whitespace-nowrap">{c.flight}</td>
                  <td className="p-4 text-zinc-700">{c.signature}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-zinc-700 text-base leading-relaxed mt-8">
          Dive deeper into the alternatives:{' '}
          <Link href="/destinations/bora-bora" className="text-rose-500 hover:text-rose-600 underline underline-offset-2">
            Bora Bora
          </Link>
          ,{' '}
          <Link href="/destinations/bali" className="text-rose-500 hover:text-rose-600 underline underline-offset-2">
            Bali
          </Link>
          , and{' '}
          <Link href="/destinations/mauritius" className="text-rose-500 hover:text-rose-600 underline underline-offset-2">
            Mauritius
          </Link>
          . Or run a head-to-head on our{' '}
          <Link href="/compare" className="text-rose-500 hover:text-rose-600 underline underline-offset-2">
            comparison hub
          </Link>.
        </p>
      </section>

      {/* 9. FAQ */}
      <section id="faq" className="bg-zinc-50 py-20">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-3">Section 09</p>
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
          src="/images/hotels/soneva-jani-maldives/hero.webp"
          alt="Find your Maldives honeymoon hotel"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
        <div className="relative max-w-4xl mx-auto px-6 text-white">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-300 mb-4">Now, the resort</p>
          <h2 className="font-display text-4xl sm:text-5xl leading-tight mb-5">
            Find the Maldives resort <br className="hidden sm:block" />that fits your budget.
          </h2>
          <p className="text-white/70 text-base leading-relaxed mb-8 max-w-xl">
            Take the 6-step quiz — five lifestyle questions and we return three matched Maldives resorts at
            your tier, with vetted hotel notes, real prices, and the seaplane logistics figured out. Sixty
            seconds.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/quiz"
              className="bg-rose-500 hover:bg-rose-600 text-white font-semibold text-sm px-8 py-4 rounded-full transition-colors shadow-xl"
            >
              Take the quiz →
            </Link>
            <Link
              href="/destinations/maldives"
              className="border border-white/30 backdrop-blur-md bg-white/5 hover:bg-white/10 text-white font-semibold text-sm px-8 py-4 rounded-full transition-colors"
            >
              See every Maldives resort
            </Link>
          </div>
        </div>
      </section>
    </article>
  )
}
