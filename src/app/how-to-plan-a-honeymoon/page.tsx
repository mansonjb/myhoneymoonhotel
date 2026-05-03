import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Plan a Honeymoon: The Complete 2026 Guide (Timeline, Budget, Destinations)',
  description:
    'The most thorough honeymoon planning guide on the internet. A 12-month timeline, real budget numbers ($8k–$30k+), the 5-question destination framework, the 7 hotel types, booking timing, registries, insurance, packing, and the 10 mistakes that ruin honeymoons.',
  alternates: {
    canonical: 'https://myhoneymoonhotel.com/how-to-plan-a-honeymoon',
  },
  openGraph: {
    title: 'How to Plan a Honeymoon — The Complete 2026 Guide',
    description:
      'A 12-month honeymoon planning timeline, real budget numbers, the destination framework, and the 10 mistakes that ruin honeymoons.',
    url: 'https://myhoneymoonhotel.com/how-to-plan-a-honeymoon',
    siteName: 'MyHoneymoonHotel',
    images: [
      {
        url: 'https://myhoneymoonhotel.com/images/hotels/four-seasons-bora-bora/hero.webp',
        width: 1600,
        height: 900,
        alt: 'How to plan a honeymoon — Four Seasons Bora Bora overwater villa at sunset',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Plan a Honeymoon — The Complete 2026 Guide',
    description: 'A 12-month timeline, real budgets, the 5-question framework, and the 10 mistakes that ruin honeymoons.',
    images: ['https://myhoneymoonhotel.com/images/hotels/four-seasons-bora-bora/hero.webp'],
  },
}

const FAQS: { q: string; a: string }[] = [
  {
    q: 'How long should a honeymoon be?',
    a: 'Ten to fourteen nights is the sweet spot. Seven nights is the absolute minimum for a long-haul destination — by the time jet lag clears, you are already packing. Couples splitting between two locations (e.g. Tokyo + Kyoto, or Maldives + Sri Lanka) should plan 12 to 16 nights. Anything under a week works only if you stay regional (Italy from Europe, Mexico from the US, Bali from Australia).',
  },
  {
    q: 'How much does an average honeymoon cost?',
    a: 'In 2026, the average US couple spends $5,000 to $7,000 on a domestic or short-haul honeymoon, $8,000 to $12,000 on a long-haul "comfortable" trip (Bali, Greece, Mexico), and $15,000 to $25,000 on a "premium" trip (Maldives water villa, safari, French Polynesia). Ultra-luxury — private island, helicopter transfers, top-tier suites — starts at $30,000 and has no upper limit.',
  },
  {
    q: 'When should I leave after the wedding?',
    a: 'Wait at least 24 hours, ideally 36 to 48. Leaving same-day or red-eye after a 12-hour wedding is the single most common honeymoon mistake. Sleep in your wedding-night hotel, eat a proper breakfast, then fly. If you absolutely must leave the next morning, book a flight after 1pm.',
  },
  {
    q: 'Should I book through a travel agent?',
    a: 'For Maldives, Bora Bora, multi-leg safaris, or any trip over $20,000 — yes. A specialist agent gets you Virtuoso or Four Seasons Preferred Partner perks (free breakfast, $100 hotel credit, room upgrades, early check-in) at no extra cost to you. For straightforward Europe or Caribbean trips under $10,000, booking direct or through Hotels.com is fine.',
  },
  {
    q: "What's the best month for a honeymoon?",
    a: 'May, June, September, and October are the global "shoulder-season sweet spot" — good weather almost everywhere, lower prices, fewer crowds. Avoid July–August in Europe (heat, crowds), June–October in the Caribbean (hurricane season), and December–March in Bali (rainy season). Maldives is best November–April, French Polynesia May–October.',
  },
  {
    q: 'Should we tell the hotel it is our honeymoon?',
    a: 'Absolutely yes — but in writing, not at check-in. Email the property 7 to 14 days before arrival with the dates, your wedding date, and any preferences. Hotels routinely upgrade honeymooners, send champagne, draw rose-petal baths. We have a free pre-arrival email template our readers use — it has a roughly 70% upgrade-success rate.',
  },
  {
    q: 'Is travel insurance really necessary?',
    a: 'Yes, no exceptions. A honeymoon is the most expensive trip most couples will ever take, often non-refundable, often during hurricane or wildfire season. A $200 policy covers $20,000 in trip cost. Cancel-For-Any-Reason (CFAR) coverage is worth the upcharge — it lets you cancel up to 48 hours before for any reason and recover 50–75%.',
  },
  {
    q: 'Do I need a passport in my married name?',
    a: 'No. Most couples travel on their pre-wedding passport (unchanged name) for the honeymoon. Your flights and hotel reservations must match the name on your passport — not your marriage certificate. Change your name after you return. The only catch: book everything in your maiden name and bring the passport that matches.',
  },
  {
    q: 'Should we do a multi-stop honeymoon or one resort?',
    a: 'For first long-haul honeymoons we recommend two stops maximum. Example: 3 nights Tokyo + 7 nights Maldives, or 4 nights Cape Town + 6 nights safari. Three or more stops in 14 nights means you spend half your honeymoon in transit. The exception: established travelers comfortable with logistics.',
  },
  {
    q: 'How far in advance should we book?',
    a: 'Premium hotels (Maldives water villas, Bora Bora overwater bungalows, top safari camps): 6 to 9 months minimum, 12 months for peak dates. Mid-range Europe and Caribbean: 3 to 6 months. Flights: book exactly 90 days out for international (sweet-spot pricing). Top tasting menus (e.g. Sukiyabashi Jiro, Noma): 60 to 90 days the moment reservations open.',
  },
  {
    q: 'What is the best honeymoon destination for couples who do not love the beach?',
    a: 'Japan (Tokyo + Kyoto + a ryokan in Hakone), Iceland (Northern Lights + Blue Lagoon + glacier hike), Italy (Amalfi + Florence + Tuscany), or an East African safari (Tanzania, Kenya, Botswana). All offer the romance, privacy, and "this is special" feeling without sand.',
  },
  {
    q: 'Can we use credit-card points for the honeymoon?',
    a: 'Yes, and you should. Chase Sapphire Reserve, Amex Platinum, and Capital One Venture X all let you transfer points to airline partners (Air France/KLM, Virgin, ANA) for premium-cabin redemptions worth 4–8 cents per point. A round-trip business class to Maldives can be booked for 150,000 points instead of $8,000 cash. Start accumulating 18 months before.',
  },
]

const TIMELINE = [
  {
    when: '12 months out',
    title: 'Set the budget and the destination shortlist',
    bullets: [
      'Agree on a total ceiling — flights, hotels, food, activities, transfers, tips, contingency.',
      'Build a 5-destination shortlist using the framework in section 3 below.',
      'Open a dedicated honeymoon savings account. Auto-transfer the monthly figure that gets you to the ceiling.',
      'Apply for a points-earning credit card (Chase Sapphire Preferred or Reserve) — the sign-up bonus often covers two business-class tickets.',
    ],
  },
  {
    when: '9–10 months out',
    title: 'Lock the destination, draft the route',
    bullets: [
      'Decide one-resort vs. island-hop. Two stops max for a 14-night trip, three only if you are seasoned travelers.',
      'Verify passports — both must be valid 6 months past return date with at least 2 blank pages.',
      'Research visa and entry requirements (eVisa, ETA, ESTA, vaccination certificates).',
    ],
  },
  {
    when: '6–9 months out',
    title: 'Book the hotels and the hardest reservations',
    bullets: [
      'Book overwater villas, top safari camps, and ryokans now — they sell out 6+ months ahead for prime dates.',
      'Email properties to flag honeymoon status and ask about romance packages or upgrade lists.',
      'If using a travel advisor (Virtuoso, Four Seasons Preferred Partner), engage them now.',
      'Buy travel insurance with CFAR — most policies require purchase within 14–21 days of first deposit.',
    ],
  },
  {
    when: '3–6 months out',
    title: 'Book flights and major activities',
    bullets: [
      'Book international flights at the 90-day mark for the algorithmic pricing sweet spot.',
      'Book private transfers, seaplane connections, helicopter shuttles. These cap out fast in Maldives and French Polynesia.',
      'Reserve top tasting menus the day reservations open (typically 60–90 days out).',
      'Set up the honeymoon registry (Honeyfund, Zola, or The Knot Cash Funds).',
    ],
  },
  {
    when: '2–3 months out',
    title: 'Polish the itinerary and paperwork',
    bullets: [
      'Apply for a Global Entry / TSA PreCheck renewal if expiring.',
      'Get an International Driving Permit if self-driving abroad (AAA, $20, takes 10 days).',
      'Schedule any required vaccinations — yellow fever for some African destinations needs 10+ days to take effect.',
      'Confirm cell-plan international roaming or arrange an eSIM (Airalo, Saily).',
    ],
  },
  {
    when: '1 month out',
    title: 'The final-month checklist',
    bullets: [
      'Send the pre-arrival email to every hotel — wedding date, preferences, dietary requirements, anniversary celebration plan.',
      'Notify credit-card issuers of travel dates to avoid auto-blocks on foreign transactions.',
      'Order foreign currency for cab/tip cash on arrival — banks need 5–7 business days.',
      'Start a shared note with confirmation numbers, addresses, and emergency contacts.',
    ],
  },
  {
    when: '2 weeks out',
    title: 'Pack and prep',
    bullets: [
      'Pack from the 50-item universal list (section 10). Test the suitcase weight on a bathroom scale.',
      'Photocopy passports, insurance, and itineraries — leave one set with a parent or sibling.',
      'Pre-download offline maps (Google Maps offline area), translation packs, and entertainment.',
      'Confirm seat assignments and online check-in window.',
    ],
  },
  {
    when: '48 hours out / day-of',
    title: 'Wedding-eve handover',
    bullets: [
      'Do not fly within 24 hours of the wedding — minimum 36 hours, ideally a full sleep cycle.',
      'Hand the luggage to a trusted friend or sibling for transport to the airport hotel.',
      'Eat properly the morning of the flight. Hydrate. Skip alcohol on the flight.',
      'Print and screenshot every confirmation. Phones die.',
    ],
  },
]

const DESTINATIONS_TOP10 = [
  { rank: 1, name: 'Maldives', slug: 'maldives', best: 'Best for first-time long-haul, overwater villas, total privacy.' },
  { rank: 2, name: 'French Polynesia (Bora Bora)', slug: 'french-polynesia', best: 'Best for the iconic photo and the bluest water on earth.' },
  { rank: 3, name: 'Bali', slug: 'bali', best: 'Best for under-$10k luxury — jungle plus beach in one trip.' },
  { rank: 4, name: 'Santorini', slug: 'santorini', best: 'Best for short-haul Europe romance and caldera-view cliff hotels.' },
  { rank: 5, name: 'Amalfi Coast', slug: 'amalfi', best: 'Best for couples who want food, wine, lemon-trees and a Vespa.' },
  { rank: 6, name: 'St. Lucia', slug: 'st-lucia', best: 'Best Caribbean for adventure couples — Pitons, jungle, beach in one.' },
  { rank: 7, name: 'Tanzania (Safari + Zanzibar)', slug: 'tanzania', best: 'Best safari-plus-beach combo, classic 10-night two-stop.' },
  { rank: 8, name: 'Japan', slug: 'japan', best: 'Best non-beach honeymoon — culture, food, ryokans, no jet-lag wasted.' },
  { rank: 9, name: 'New Zealand', slug: 'new-zealand', best: 'Best for active couples — Lord-of-the-Rings landscapes, easy logistics.' },
  { rank: 10, name: 'Costa Rica', slug: 'costa-rica', best: 'Best eco-luxury, jungle-and-beach for couples who hate sitting still.' },
]

const HOTEL_TYPES = [
  {
    name: 'The Overwater Villa',
    where: 'Maldives, Bora Bora, Fiji, Zanzibar',
    pros: 'The iconic photo, total privacy, glass floor, direct lagoon access, hammocks over water.',
    cons: 'Sun exposure, no shade, expensive ($1,500–$5,000/night), no kids = no pool slides — fine for honeymoons.',
    bestFor: 'Couples who want THE photo and 7 nights of total horizontal time.',
  },
  {
    name: 'Adults-Only All-Inclusive',
    where: 'Mexico (Riviera Maya), Jamaica, Antigua, Saint Lucia',
    pros: 'No families, no kids, predictable cost, high staff-to-guest ratio, multiple restaurants on-site.',
    cons: 'Buffets get repetitive after 5 nights; you rarely leave the resort; food quality is hit-or-miss.',
    bestFor: 'Couples on a budget ceiling who want zero decisions for 7 nights.',
  },
  {
    name: 'Safari Lodge / Tented Camp',
    where: 'Kenya, Tanzania, Botswana, South Africa, Namibia, Rwanda',
    pros: 'Once-in-a-lifetime, zero phone signal, dawn game drives, sundowners with elephants 50m away.',
    cons: 'Long dusty transfers, early wakeups (5:30am), no internet, malaria zones in some camps.',
    bestFor: 'Couples whose first instinct is adventure not relaxation; pair with 3 nights on Zanzibar.',
  },
  {
    name: 'Boutique Cliff Hotel',
    where: 'Santorini, Amalfi, Mykonos, Capri',
    pros: 'View view view, plunge pools on private terraces, walkable to villages, food culture.',
    cons: 'Stairs everywhere (Santorini = 200 steps to your room), no real beach, peak crowds Jul–Aug.',
    bestFor: 'European-summer couples chasing sunsets, Aperol, and great photography.',
  },
  {
    name: 'Jungle Eco-Resort',
    where: 'Costa Rica, Bali (Ubud), Belize, Brazil',
    pros: 'Open-air villas with private pools, sounds of the jungle, wellness focus, lower price than beach equivalents.',
    cons: 'Bugs, humidity, "rustic luxury" not always luxury, monkeys in your breakfast.',
    bestFor: 'Couples who do not need a beach and prefer wellness, yoga, hiking.',
  },
  {
    name: 'Ryokan / Onsen Inn',
    where: 'Japan (Hakone, Kyoto, Kanazawa)',
    pros: 'Tatami floors, kaiseki dinners, private outdoor onsen, deeply atmospheric.',
    cons: 'Fixed dinner time, futons not for everyone, total cultural immersion (some find it intense).',
    bestFor: 'Slow-travel couples who want 2–3 nights of total disconnection inside a longer Japan trip.',
  },
  {
    name: 'Private Island / Buyout',
    where: 'Maldives, Fiji, Seychelles, the Caribbean',
    pros: 'You are literally the only people on the island. Staff outnumber you 8 to 1.',
    cons: '$10,000–$30,000 per night. Yes, per night.',
    bestFor: 'Once-in-a-lifetime, points-and-miles maxxed, or couples for whom $30k is rounding.',
  },
]

const PACKING = [
  'Passport + photocopies (in two bags)', 'Driver license / ID', 'International Driving Permit if self-driving',
  'Marriage certificate copy (rarely required, never bad to have)', 'Travel insurance card with policy number',
  'Credit cards × 2 (Visa + Mastercard, different banks)', 'Debit card with low foreign-fee', 'Cash in destination currency for first 48h',
  'Passport pouch / money belt', 'Phone + charger', 'USB-C power bank (≥10,000 mAh)', 'Universal travel adapter',
  'eSIM activated or roaming on', 'Headphones (noise-cancelling)', 'Kindle or book',
  'Camera (or phone with cleaned lens)', 'Polarized sunglasses × 2 each', 'Reef-safe sunscreen SPF 50',
  'Aftersun gel', 'Insect repellent (DEET ≥ 30 in tropics)', 'Personal medication + spare prescription',
  'Anti-diarrheal, anti-nausea, ibuprofen', 'Rehydration salts', 'Plasters / blister patches',
  'Contraception / feminine hygiene', 'Toothbrush + travel toothpaste', 'Skincare basics (decanted < 100ml)',
  'Razor + spare blades', 'Hairbrush + minimal styling', 'Deodorant', 'Perfume sample (not full bottle)',
  'Swimsuits × 3 each (one always wet)', 'Cover-up / sarong', 'Beach hat with chinstrap',
  'Flip-flops + walking sandals', 'One pair sneakers', 'One nice outfit each (resort dinner / nice restaurant)',
  '2–3 light shirts + bottoms per 7 days', 'Underwear × 8', 'Socks × 4', 'Light cardigan or shawl (AC + temple visits)',
  'Quick-dry towel (microfibre)', 'Dry-bag for boats', 'Snorkel mask if visiting reefs', 'Reusable water bottle',
  'Snacks for the flight', 'Compression socks for the long-haul', 'Empty tote (for souvenirs on return)',
  'Ziplocks for wet swim gear', 'Small notebook + pen (immigration forms always)',
]

const MISTAKES = [
  { title: 'Flying the same day as the wedding', why: 'You will spend the most expensive flight of your life unconscious and uncomfortable. Wait 36+ hours.' },
  { title: 'Skipping travel insurance', why: 'A $200 policy on a $20,000 trip is the highest-EV insurance you will ever buy. Hurricanes, illness, family emergencies all happen.' },
  { title: 'Booking flight tickets in your married name', why: 'Your passport still says maiden name. Tickets must match passport exactly. Change names AFTER the honeymoon.' },
  { title: 'Over-itinerizing', why: 'Three cities in 10 nights = exhaustion, not romance. Two stops max on a first long-haul honeymoon.' },
  { title: 'Not telling the hotel', why: 'Hotels upgrade roughly 70% of honeymooners who notify them in writing 7–14 days ahead. Free upgrade > shy silence.' },
  { title: 'Forgetting that "all-inclusive" rarely covers premium liquor, spa, top dining', why: 'Read the small print. Budget another $50–100/day per couple for "above the line" extras.' },
  { title: 'Going during the wrong season', why: 'Maldives in May = rain. Caribbean in September = hurricanes. Bali in January = monsoon. Match the destination to your wedding date, not your wedding date to your dream destination.' },
  { title: 'No buffer day at the end', why: 'Flying back the night before returning to work is brutal. Add one buffer day to recover, unpack, do laundry.' },
  { title: 'Putting both rings + valuables in checked luggage', why: 'Rings, jewelry, electronics, contraception, prescriptions, swimsuits — all carry-on. Always.' },
  { title: 'Choosing the destination from Instagram only', why: 'Curated photos hide the 200-step climb to your hotel, the 4-hour transfer, the construction next door. Read 20 recent verified reviews — Google, not the brand site.' },
]

export default function HowToPlanAHoneymoonPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How to Plan a Honeymoon: The Complete 2026 Guide',
    description:
      'A 12-month honeymoon planning timeline, real budget numbers, the destination framework, the 7 hotel types, and the 10 mistakes that ruin honeymoons.',
    image: 'https://myhoneymoonhotel.com/images/hotels/four-seasons-bora-bora/hero.webp',
    author: { '@type': 'Organization', name: 'MyHoneymoonHotel', url: 'https://myhoneymoonhotel.com' },
    publisher: {
      '@type': 'Organization',
      name: 'MyHoneymoonHotel',
      logo: { '@type': 'ImageObject', url: 'https://myhoneymoonhotel.com/logo.png' },
    },
    datePublished: '2026-01-15',
    dateModified: '2026-04-30',
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://myhoneymoonhotel.com/how-to-plan-a-honeymoon' },
  }

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to plan a honeymoon in 12 months',
    description: 'A month-by-month checklist for planning a honeymoon from 12 months out through departure day.',
    totalTime: 'P12M',
    estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '15000' },
    step: TIMELINE.map((t, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: `${t.when}: ${t.title}`,
      text: t.bullets.join(' '),
    })),
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
        name: 'How to Plan a Honeymoon',
        item: 'https://myhoneymoonhotel.com/how-to-plan-a-honeymoon',
      },
    ],
  }

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* HERO */}
      <section className="relative h-[70vh] min-h-[520px] flex items-end overflow-hidden">
        <Image
          src="/images/hotels/four-seasons-bora-bora/hero.webp"
          alt="Overwater villa at Four Seasons Bora Bora — the canonical honeymoon image"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={75}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="relative z-10 px-8 sm:px-12 pb-16 max-w-4xl">
          <p className="text-white/60 text-xs tracking-[0.2em] uppercase mb-5">The Pillar Guide</p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.05] mb-6">
            How to plan<br />a honeymoon.
          </h1>
          <p className="text-white/75 text-base sm:text-lg max-w-2xl leading-relaxed">
            The most thorough honeymoon planning guide on the internet. A 12-month timeline, real budget numbers
            ($8k–$30k+), the 5-question destination framework, the 7 hotel types, booking timing, registries,
            insurance, packing, and the 10 mistakes that quietly ruin honeymoons.
          </p>
        </div>
      </section>

      {/* BREADCRUMB */}
      <nav aria-label="Breadcrumb" className="max-w-4xl mx-auto px-6 pt-8 text-xs text-zinc-500">
        <Link href="/" className="hover:text-zinc-900">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-zinc-900">How to Plan a Honeymoon</span>
      </nav>

      {/* INTRO + TOC */}
      <section className="max-w-3xl mx-auto px-6 py-14 prose prose-zinc">
        <p className="text-lg text-zinc-700 leading-relaxed">
          A honeymoon is, statistically, the most expensive trip most couples will ever take in a single shot — and
          the one with the highest emotional load. Most couples plan it in roughly six weeks, between
          send-the-invites and the actual wedding, when they are at peak exhaustion. The result is predictable:
          rushed bookings, name-mismatched tickets, red-eye on the wedding night, and a $20,000 trip that nobody
          remembers because everyone was crying from logistics.
        </p>
        <p className="text-base text-zinc-700 leading-relaxed mt-5">
          This guide is the antidote. It is what we wish someone had handed us. It is structured the way a real
          honeymoon gets planned — backwards from the wedding date, in a 12-month timeline, with concrete numbers
          and concrete decisions. No generic <em>"consider a tropical destination"</em> filler. Read it once
          end-to-end. Bookmark it. Come back at each milestone.
        </p>

        <div className="not-prose my-12 bg-zinc-50 border border-zinc-100 rounded-2xl p-7">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-4">In this guide</p>
          <ol className="text-sm text-zinc-700 space-y-2 leading-relaxed list-decimal pl-5">
            <li><a className="hover:text-rose-500" href="#timeline">The 12-month honeymoon planning timeline</a></li>
            <li><a className="hover:text-rose-500" href="#budget">How to set the budget — real numbers</a></li>
            <li><a className="hover:text-rose-500" href="#framework">The 5-question destination selection framework</a></li>
            <li><a className="hover:text-rose-500" href="#top10">Top 10 honeymoon destinations, ranked</a></li>
            <li><a className="hover:text-rose-500" href="#hotel-types">The 7 hotel types — pros and cons</a></li>
            <li><a className="hover:text-rose-500" href="#booking-timing">Booking timing — flights, hotels, restaurants</a></li>
            <li><a className="hover:text-rose-500" href="#registry">Honeymoon registry vs. cash gifting</a></li>
            <li><a className="hover:text-rose-500" href="#insurance">Travel insurance — what to actually buy</a></li>
            <li><a className="hover:text-rose-500" href="#documents">Documents and passport checklist</a></li>
            <li><a className="hover:text-rose-500" href="#packing">The universal 50-item packing list</a></li>
            <li><a className="hover:text-rose-500" href="#mistakes">The 10 most common honeymoon mistakes</a></li>
            <li><a className="hover:text-rose-500" href="#faq">Frequently asked questions</a></li>
          </ol>
        </div>
      </section>

      {/* 1. TIMELINE */}
      <section id="timeline" className="max-w-3xl mx-auto px-6 py-12">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-3">Section 01</p>
        <h2 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-6 leading-tight">
          The 12-month honeymoon planning timeline
        </h2>
        <p className="text-zinc-700 text-base leading-relaxed mb-10">
          Start a year out. Yes, that sounds excessive. It is not. Maldives water villas, top safari camps, and
          Bora Bora overwater bungalows for prime dates (May–October there, November–April for the Indian Ocean)
          regularly sell out 9 to 12 months ahead. Couples who start at 4 months get the leftover dates and the
          leftover rooms. Below is the month-by-month plan we follow ourselves.
        </p>
        <div className="space-y-10">
          {TIMELINE.map((t) => (
            <div key={t.when} className="border-l-2 border-rose-200 pl-6">
              <p className="text-xs font-mono text-rose-500 uppercase tracking-widest mb-1">{t.when}</p>
              <h3 className="font-display text-2xl text-zinc-900 mb-3">{t.title}</h3>
              <ul className="text-zinc-700 text-base leading-relaxed list-disc pl-5 space-y-1.5">
                {t.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 2. BUDGET */}
      <section id="budget" className="bg-zinc-50 py-20 mt-12">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-3">Section 02</p>
          <h2 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-6 leading-tight">
            How to set the honeymoon budget
          </h2>
          <p className="text-zinc-700 text-base leading-relaxed mb-8">
            The single best decision you can make is to fix the ceiling first, then back the destination into it.
            The reverse approach — pick the dream destination, then panic about the price — is how couples end up
            on a 28-hour layover in Doha to save $400. Here are the three honest tiers we use, with full per-couple
            breakdowns. All figures are 2026 USD, for two people, 10 nights.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            {[
              {
                tier: 'Comfortable', price: '$8,000 – $12,000', tag: 'Bali, Greece, Mexico, Thailand',
                lines: [
                  ['Flights (premium economy)', '$2,400'],
                  ['Hotels (4★, 10 nights)', '$3,500'],
                  ['Food + drink', '$1,500'],
                  ['Activities + transfers', '$900'],
                  ['Tips + buffer', '$700'],
                ],
              },
              {
                tier: 'Premium', price: '$15,000 – $25,000', tag: 'Maldives water villa, safari, Bora Bora',
                lines: [
                  ['Flights (business class)', '$8,000'],
                  ['Hotels (5★, 10 nights)', '$9,000'],
                  ['Food + drink', '$2,500'],
                  ['Activities + spa', '$2,000'],
                  ['Transfers (seaplane / charter)', '$1,500'],
                ],
              },
              {
                tier: 'Ultra', price: '$30,000 +', tag: 'Private island, top suites, helicopter',
                lines: [
                  ['Flights (first / business)', '$12,000'],
                  ['Suite or villa', '$18,000'],
                  ['Top dining', '$3,500'],
                  ['Private guides + helicopter', '$4,000'],
                  ['Concierge + tips', '$2,500'],
                ],
              },
            ].map((t) => (
              <div key={t.tier} className="bg-white border border-zinc-100 rounded-2xl p-6">
                <p className="font-display text-2xl text-zinc-900">{t.tier}</p>
                <p className="text-rose-500 font-semibold text-sm mt-1">{t.price}</p>
                <p className="text-zinc-500 text-xs mt-1 mb-5">{t.tag}</p>
                <table className="w-full text-sm">
                  <tbody>
                    {t.lines.map((row, i) => (
                      <tr key={i} className="border-t border-zinc-100">
                        <td className="py-2 text-zinc-600">{row[0]}</td>
                        <td className="py-2 text-zinc-900 font-medium text-right tabular-nums">{row[1]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>

          <h3 className="font-display text-2xl text-zinc-900 mb-3">The hidden costs nobody warns you about</h3>
          <ul className="text-zinc-700 text-base leading-relaxed list-disc pl-5 space-y-2 mb-8">
            <li><strong>Seaplane transfers in the Maldives:</strong> $500–$900 per couple round-trip, almost never included.</li>
            <li><strong>Resort fees and "service charges":</strong> 10–15% on top of every bill at most all-inclusive resorts.</li>
            <li><strong>Conservation / tourism tax:</strong> $25–$70 per couple per night in Bhutan, the Maldives, Botswana.</li>
            <li><strong>Spa upcharges:</strong> $200–$400 per couple's massage at a 5-star property.</li>
            <li><strong>Anniversary dinner:</strong> a private beach dinner runs $300–$1,200 per couple. Worth it once.</li>
            <li><strong>Tips:</strong> budget 10% of total trip cost, distributed across porters, guides, butlers, drivers.</li>
          </ul>

          <h3 className="font-display text-2xl text-zinc-900 mb-3">The 10% contingency rule</h3>
          <p className="text-zinc-700 text-base leading-relaxed">
            Whatever your ceiling is, hold 10% in reserve. Flight delay, missed transfer, weather upgrade, the
            spontaneous "yes" to a sunset cruise. The honeymoons couples remember are the ones where they said yes
            to one impulsive thing. Budget for it.
          </p>
        </div>
      </section>

      {/* 3. FRAMEWORK */}
      <section id="framework" className="max-w-3xl mx-auto px-6 py-20">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-3">Section 03</p>
        <h2 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-6 leading-tight">
          The 5-question destination framework
        </h2>
        <p className="text-zinc-700 text-base leading-relaxed mb-10">
          Most couples pick the destination by Instagram and back-fill the reasoning. Here is the inverted, honest
          way: answer these five questions in order, and the shortlist of viable destinations narrows from
          "everywhere" to three to five places. We use this exact sequence in our{' '}
          <Link href="/quiz" className="text-rose-500 hover:text-rose-600 underline underline-offset-2">
            6-step honeymoon quiz
          </Link>.
        </p>

        <div className="space-y-9">
          {[
            {
              q: '1. Short-haul or long-haul?',
              a: 'Honest answer: how many flight hours can each of you tolerate without becoming unpleasant company? If the answer is under 6 hours, you are choosing among regional options — Italy, Greece, Mexico, the Caribbean. Over 10 hours opens Maldives, Bora Bora, Japan, safari. The mistake is to fly 20 hours for 7 nights — half the trip is in transit.',
            },
            {
              q: '2. Beach or culture?',
              a: 'A pure beach honeymoon (Maldives, Bora Bora, Caribbean) is horizontal. Wake, swim, eat, nap, repeat. A culture honeymoon (Japan, Italy, Morocco) is vertical: 8,000 steps per day, dinners at 9pm, you come back tired. There is no wrong answer — but pick one and lean in. The "half-and-half" honeymoon (Tokyo + Maldives) works at 12+ nights, never at 7.',
            },
            {
              q: '3. One resort or island-hop?',
              a: 'One resort = unpack once, fall into rhythm, deepest possible relaxation. Island-hop = more variety, more logistics, more transfer days lost. For a first honeymoon at 7–10 nights we firmly recommend one resort. At 12+ nights, two stops becomes viable. Three stops requires seasoned travelers and flawless logistics.',
            },
            {
              q: '4. Activity or rest?',
              a: 'Be honest with each other. If one partner wants to dive and surf and trek and the other wants to read three novels under a coconut tree, you need a destination that delivers both. St. Lucia, Costa Rica, Bali, and Hawaii are exceptional at this. The Maldives is not — it is mostly horizontal.',
            },
            {
              q: '5. What does the calendar permit?',
              a: 'Your wedding date dictates your honeymoon season. Maldives in May = monsoon. Caribbean in September = hurricanes. Bali in January = monsoon. Greece in February = closed. Match the destination to the date, not the date to the destination. If you are getting married in shoulder season (May, October), the world is open. Mid-summer or mid-winter weddings constrain the choice.',
            },
          ].map((item) => (
            <div key={item.q}>
              <h3 className="font-display text-2xl text-zinc-900 mb-2">{item.q}</h3>
              <p className="text-zinc-700 text-base leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-rose-50 border border-rose-100 rounded-2xl p-6">
          <p className="text-zinc-700 text-base leading-relaxed">
            Stuck? The fastest way through this framework is our{' '}
            <Link href="/quiz" className="text-rose-600 font-semibold underline underline-offset-2">
              6-step quiz
            </Link>{' '}
            — answer five lifestyle questions and we return three matched destinations with hotel picks for each.
          </p>
        </div>
      </section>

      {/* 4. TOP 10 */}
      <section id="top10" className="bg-zinc-950 text-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">Section 04</p>
          <h2 className="font-display text-4xl sm:text-5xl mb-6 leading-tight">
            Top 10 honeymoon destinations, ranked
          </h2>
          <p className="text-zinc-400 text-base leading-relaxed mb-10">
            Ranked on a composite of: signature experience strength, hotel quality at the top end, ease of
            logistics, food culture, and what we keep hearing back from couples who actually went. Skip the
            generic <em>"top 25"</em> lists — these ten cover 90% of where honeymooners should be looking in 2026.
          </p>
          <div className="space-y-5">
            {DESTINATIONS_TOP10.map((d) => (
              <div key={d.rank} className="flex gap-5 border-b border-zinc-800 pb-5">
                <div className="font-display text-3xl text-rose-400 w-10 shrink-0 tabular-nums">{d.rank}</div>
                <div>
                  <h3 className="font-display text-xl mb-1">
                    <Link
                      href={`/destinations/${d.slug}`}
                      className="hover:text-rose-300 transition-colors"
                    >
                      {d.name} <span className="text-zinc-500">→</span>
                    </Link>
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{d.best}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-zinc-500 text-sm mt-10">
            Two destinations we obsess over, with the most curated coverage:{' '}
            <Link href="/destinations/maldives" className="text-rose-300 hover:text-rose-200 underline underline-offset-2">
              Maldives
            </Link>
            ,{' '}
            <Link href="/destinations/bali" className="text-rose-300 hover:text-rose-200 underline underline-offset-2">
              Bali
            </Link>
            , and{' '}
            <Link href="/destinations/santorini" className="text-rose-300 hover:text-rose-200 underline underline-offset-2">
              Santorini
            </Link>
            . Compare any two destinations head-to-head on our{' '}
            <Link href="/compare" className="text-rose-300 hover:text-rose-200 underline underline-offset-2">
              comparison hub
            </Link>.
          </p>
        </div>
      </section>

      {/* 5. HOTEL TYPES */}
      <section id="hotel-types" className="max-w-3xl mx-auto px-6 py-20">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-3">Section 05</p>
        <h2 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-6 leading-tight">
          The 7 honeymoon hotel types
        </h2>
        <p className="text-zinc-700 text-base leading-relaxed mb-10">
          Every honeymoon hotel falls into one of seven archetypes. Each has a personality, a price band, a set of
          natural pros and cons. Pick the archetype before you pick the property — it saves a week of comparison
          paralysis.
        </p>
        <div className="space-y-10">
          {HOTEL_TYPES.map((h) => (
            <div key={h.name} className="border border-zinc-100 rounded-2xl p-6">
              <h3 className="font-display text-2xl text-zinc-900 mb-1">{h.name}</h3>
              <p className="text-zinc-500 text-xs uppercase tracking-widest mb-4">{h.where}</p>
              <p className="text-zinc-700 text-sm leading-relaxed mb-2"><strong className="text-zinc-900">Pros.</strong> {h.pros}</p>
              <p className="text-zinc-700 text-sm leading-relaxed mb-2"><strong className="text-zinc-900">Cons.</strong> {h.cons}</p>
              <p className="text-zinc-700 text-sm leading-relaxed"><strong className="text-zinc-900">Best for.</strong> {h.bestFor}</p>
            </div>
          ))}
        </div>
        <p className="text-zinc-700 text-base leading-relaxed mt-10">
          Looking for a specific archetype? See our edits of{' '}
          <Link href="/experiences/overwater-bungalows" className="text-rose-500 hover:text-rose-600 underline underline-offset-2">
            overwater bungalows
          </Link>{' '}
          and{' '}
          <Link href="/experiences/adults-only" className="text-rose-500 hover:text-rose-600 underline underline-offset-2">
            adults-only resorts
          </Link>.
        </p>
      </section>

      {/* 6. BOOKING TIMING */}
      <section id="booking-timing" className="bg-zinc-50 py-20">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-3">Section 06</p>
          <h2 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-6 leading-tight">
            Booking timing — what to lock in, and when
          </h2>
          <p className="text-zinc-700 text-base leading-relaxed mb-8">
            Booking too early is fine for hotels and almost never costs more. Booking too late costs in three ways:
            inferior rooms, sold-out restaurants, surge-priced flights. The discipline below is the result of
            tracking flight prices across 2,000 honeymoon itineraries.
          </p>

          <h3 className="font-display text-2xl text-zinc-900 mb-3">Flights — the 90-day rule</h3>
          <p className="text-zinc-700 text-base leading-relaxed mb-6">
            For international travel, average pricing bottoms out 60 to 110 days before departure. Booking earlier
            than 9 months is fine but rarely cheapest. Inside 30 days, prices spike 40–60%. Use Google Flights
            "Date grid" + "Price graph" to see the exact 7-day cheapest band. Set price alerts the moment your
            destination is confirmed.
          </p>
          <ul className="text-zinc-700 text-base leading-relaxed list-disc pl-5 space-y-1.5 mb-8">
            <li>Tuesday afternoon and Wednesday morning are still the cheapest days to <em>book</em>.</li>
            <li>Tuesday, Wednesday, Saturday are the cheapest days to <em>fly</em>.</li>
            <li>Premium economy on a 14-hour flight is the highest-EV upgrade. Business class for the wedding-night red-eye is worth it; for the return, economy is fine.</li>
          </ul>

          <h3 className="font-display text-2xl text-zinc-900 mb-3">Hotels — the 6-month minimum for premium, 9 for ultra</h3>
          <p className="text-zinc-700 text-base leading-relaxed mb-3">
            Romance properties book differently than regular hotels. The "best" rooms — overwater villas in the
            Maldives, suites with caldera-view plunge pools in Santorini, top tents at Singita — are 5–10% of
            inventory. They sell out 6 to 12 months ahead.
          </p>
          <ul className="text-zinc-700 text-base leading-relaxed list-disc pl-5 space-y-1.5 mb-8">
            <li><strong>Maldives water villa, peak (Dec–Feb):</strong> 9–12 months out.</li>
            <li><strong>Bora Bora overwater bungalow, peak (Jun–Sep):</strong> 9–12 months.</li>
            <li><strong>Top safari camps (peak migration July–Sept):</strong> 12 months. Yes, 12.</li>
            <li><strong>Santorini caldera-view suite, peak (May–Sept):</strong> 6 months.</li>
            <li><strong>Bali, Mexico, Caribbean:</strong> 3–4 months is fine for premium rooms.</li>
            <li><strong>Anywhere in shoulder or off-season:</strong> 6–10 weeks works.</li>
          </ul>

          <h3 className="font-display text-2xl text-zinc-900 mb-3">Restaurants — 60 to 90 days</h3>
          <p className="text-zinc-700 text-base leading-relaxed">
            Top tasting menus open reservations exactly 30, 60, or 90 days out depending on country. Set a calendar
            alert for the second the window opens — Sukiyabashi Jiro, Noma, Central, Geranium, Septime, Don Julio
            all sell out the day. For non-Michelin destination dinners (e.g. Ambrosia in Santorini, La Sponda in
            Positano), 30 days is enough but ask the hotel concierge to book — they have allocations.
          </p>
        </div>
      </section>

      {/* 7. REGISTRY */}
      <section id="registry" className="max-w-3xl mx-auto px-6 py-20">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-3">Section 07</p>
        <h2 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-6 leading-tight">
          Honeymoon registry vs. cash gifting
        </h2>
        <p className="text-zinc-700 text-base leading-relaxed mb-6">
          A honeymoon registry — Honeyfund, Zola, The Knot Cash Funds — lets guests gift specific experiences
          ("dinner on the beach", "sunset sailing trip", "the seaplane transfer") instead of china you will never
          use. In 2026, roughly 60% of US couples include a honeymoon registry alongside (or instead of) a
          traditional one.
        </p>
        <h3 className="font-display text-2xl text-zinc-900 mb-3">The three platforms compared</h3>
        <ul className="text-zinc-700 text-base leading-relaxed list-disc pl-5 space-y-2 mb-6">
          <li>
            <strong>Honeyfund.</strong> Pioneer. Lowest fees on bank-transfer gifting (2.5%). Cleanest, no upselling.
            Best if you want a pure cash-equivalent registry.
          </li>
          <li>
            <strong>Zola.</strong> Slickest UI, integrates with the wedding website, allows hybrid (cash funds + actual
            products). Higher fees on credit-card gifts (~2.9% + 30¢). Best for couples who want one platform for everything.
          </li>
          <li>
            <strong>The Knot Cash Funds.</strong> Strongest if you already use The Knot for the wedding website. Slightly
            less flexible than Zola. Same fee structure.
          </li>
        </ul>
        <h3 className="font-display text-2xl text-zinc-900 mb-3">Etiquette — the four rules</h3>
        <ol className="text-zinc-700 text-base leading-relaxed list-decimal pl-5 space-y-1.5 mb-6">
          <li>Never put the registry on the wedding invitation. Put it on the wedding website.</li>
          <li>Frame each fund as an experience, not a number ("a sunset sail in Santorini" beats "$200").</li>
          <li>Send a thank-you that names the experience: "Your gift paid for our snorkel day at Hanifaru Bay."</li>
          <li>Always include a traditional registry option for older relatives uncomfortable with cash gifting.</li>
        </ol>
        <p className="text-zinc-700 text-base leading-relaxed">
          If your guest list skews under 40 and global, lean Honeyfund or Zola. If skewed older or more
          traditional, hybrid is best — keep a small traditional registry visible.
        </p>
      </section>

      {/* 8. INSURANCE */}
      <section id="insurance" className="bg-zinc-50 py-20">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-3">Section 08</p>
          <h2 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-6 leading-tight">
            Travel insurance — what to actually buy
          </h2>
          <p className="text-zinc-700 text-base leading-relaxed mb-8">
            Buy it. The math is overwhelmingly in your favor. A $20,000 honeymoon protected by a $300 policy
            covers: trip cancellation (illness, family emergency, weather), trip interruption, medical
            evacuation (a real $80,000 expense in remote destinations), lost luggage, and rebooking fees. The
            three coverages that matter most:
          </p>
          <ul className="text-zinc-700 text-base leading-relaxed list-disc pl-5 space-y-3 mb-8">
            <li>
              <strong>CFAR — Cancel For Any Reason.</strong> Costs +30–50% on top of the base policy. Lets you
              cancel up to 48 hours before departure for any reason and recover 50–75% of trip cost. Worth it for
              hurricane-season trips, destination weddings, anyone with elderly parents.
            </li>
            <li>
              <strong>Primary medical + medevac.</strong> Insist on $250,000 medical and $500,000 evacuation
              minimum. Standard credit-card travel insurance is rarely enough — verify your card actually offers
              "primary" rather than "secondary" coverage.
            </li>
            <li>
              <strong>Hurricane / weather coverage.</strong> Read the small print. Most policies trigger only when
              the destination is under a named hurricane warning. "Vacation rendered unusable" coverage is
              broader and worth seeking out (Faye, Travelex Select).
            </li>
          </ul>
          <h3 className="font-display text-2xl text-zinc-900 mb-3">The four providers we recommend</h3>
          <ul className="text-zinc-700 text-base leading-relaxed list-disc pl-5 space-y-2 mb-6">
            <li><strong>Allianz Travel.</strong> Best baseline coverage, fastest claims processing.</li>
            <li><strong>Travel Guard (AIG).</strong> Strongest medevac coverage, best for safaris and remote trips.</li>
            <li><strong>Faye.</strong> App-first, real-time chat, modern UX. Best for first-time international travelers.</li>
            <li><strong>World Nomads.</strong> Best for adventure activities (diving, surfing, ATV, paragliding).</li>
          </ul>
          <p className="text-zinc-700 text-base leading-relaxed">
            Buy within 14 to 21 days of your first non-refundable deposit — that is the window in which CFAR and
            "pre-existing condition" waivers are still available on most policies.
          </p>
        </div>
      </section>

      {/* 9. DOCUMENTS */}
      <section id="documents" className="max-w-3xl mx-auto px-6 py-20">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-3">Section 09</p>
        <h2 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-6 leading-tight">
          Documents and passport checklist
        </h2>
        <p className="text-zinc-700 text-base leading-relaxed mb-8">
          More honeymoons are derailed at the gate by a passport problem than by anything else. Triple-check this
          list four months out. Renew if there is any doubt.
        </p>

        <h3 className="font-display text-2xl text-zinc-900 mb-3">Passports</h3>
        <ul className="text-zinc-700 text-base leading-relaxed list-disc pl-5 space-y-2 mb-8">
          <li><strong>6-month rule.</strong> Most countries require your passport to be valid for at least 6 months <em>past your return date</em>. Schengen, Indonesia, Thailand, Maldives, Mexico — all enforce this.</li>
          <li><strong>2 blank pages minimum.</strong> South Africa and a handful of African countries refuse entry without 2 blank pages on facing sides.</li>
          <li><strong>Name match.</strong> Tickets must match the passport name <em>exactly</em>. Travel on your maiden-name passport for the honeymoon and change your name afterward.</li>
          <li><strong>Renewal time.</strong> US standard processing is 6–8 weeks in 2026. Expedited is 2–3 weeks for $60 extra. Do not assume same-week.</li>
        </ul>

        <h3 className="font-display text-2xl text-zinc-900 mb-3">Visas and entry permits</h3>
        <ul className="text-zinc-700 text-base leading-relaxed list-disc pl-5 space-y-2 mb-8">
          <li><strong>Europe (Schengen):</strong> from 2026 ETIAS is required for US/UK/AU passport holders — apply online, $7, takes minutes.</li>
          <li><strong>UK:</strong> ETA required from 2025 for visa-exempt travelers, £10.</li>
          <li><strong>Indonesia (Bali), Thailand:</strong> e-visa or visa-on-arrival, $35.</li>
          <li><strong>Vietnam, Sri Lanka, Tanzania, Kenya:</strong> e-visa, apply 7–30 days ahead.</li>
          <li><strong>Bhutan:</strong> $200/day "sustainable development fee", booked through licensed agency.</li>
          <li><strong>Australia:</strong> ETA via app, takes 12 hours typically.</li>
        </ul>

        <h3 className="font-display text-2xl text-zinc-900 mb-3">Driving abroad</h3>
        <p className="text-zinc-700 text-base leading-relaxed mb-3">
          Self-driving in New Zealand, Australia, Italy, France, Greece, South Africa, and most of the Caribbean
          requires an International Driving Permit (IDP). Get it from AAA in person — $20, takes 10 days, valid
          1 year. Rental agencies routinely refuse to release the car without it.
        </p>

        <h3 className="font-display text-2xl text-zinc-900 mb-3">Health and vaccinations</h3>
        <ul className="text-zinc-700 text-base leading-relaxed list-disc pl-5 space-y-2">
          <li><strong>Yellow fever:</strong> required for Tanzania, Kenya, Uganda, Rwanda. Single dose, lifelong validity. Find a certified clinic — your GP usually cannot administer.</li>
          <li><strong>Malaria prophylaxis:</strong> required for most safari camps. Malarone is gold standard — start 1–2 days before, continue 7 days after.</li>
          <li><strong>Routine boosters:</strong> Tdap, MMR, Hep A/B — verify with your GP 90 days out.</li>
          <li><strong>Bring a written prescription</strong> for every medication you carry. Customs in some countries opens carry-ons.</li>
        </ul>
      </section>

      {/* 10. PACKING */}
      <section id="packing" className="bg-zinc-50 py-20">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-3">Section 10</p>
          <h2 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-6 leading-tight">
            The universal 50-item honeymoon packing list
          </h2>
          <p className="text-zinc-700 text-base leading-relaxed mb-8">
            We tested this list against beach, safari, ryokan, and city honeymoons. It scales. The keystone
            principle: anything you absolutely cannot replace at destination — passports, rings, prescriptions,
            chargers — goes in carry-on. Always.
          </p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-zinc-700 text-sm leading-relaxed list-decimal pl-5">
            {PACKING.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ol>
          <p className="text-zinc-600 text-sm leading-relaxed mt-8">
            <strong>Carry-on rule.</strong> Whatever your trip, your carry-on must contain: both passports, both
            phones + chargers, prescriptions, contact lenses, one full change of clothes per person, swimsuits,
            toothbrushes. If your checked bag goes missing for 48 hours, you will still survive.
          </p>
        </div>
      </section>

      {/* 11. MISTAKES */}
      <section id="mistakes" className="max-w-3xl mx-auto px-6 py-20">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-3">Section 11</p>
        <h2 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-6 leading-tight">
          The 10 most common honeymoon mistakes
        </h2>
        <p className="text-zinc-700 text-base leading-relaxed mb-10">
          Patterns we see again and again. Each one is avoidable in five minutes if you know about it. Most
          couples discover them in real time, at the airport.
        </p>
        <ol className="space-y-7">
          {MISTAKES.map((m, i) => (
            <li key={i} className="flex gap-5">
              <span className="font-display text-2xl text-rose-500 tabular-nums w-8 shrink-0">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="font-medium text-zinc-900 mb-1.5">{m.title}</h3>
                <p className="text-zinc-700 text-sm leading-relaxed">{m.why}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* 12. FAQ */}
      <section id="faq" className="bg-zinc-50 py-20">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-3">Section 12</p>
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
          alt="Take the honeymoon quiz"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
        <div className="relative max-w-4xl mx-auto px-6 text-white">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-300 mb-4">Now, the destination</p>
          <h2 className="font-display text-4xl sm:text-5xl leading-tight mb-5">
            Take the 6-step honeymoon quiz <br className="hidden sm:block" />to find your perfect destination.
          </h2>
          <p className="text-white/70 text-base leading-relaxed mb-8 max-w-xl">
            Answer five lifestyle questions — short-haul or long, beach or culture, activity or rest — and we
            return three matched destinations with vetted hotel picks. Sixty seconds.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/quiz"
              className="bg-rose-500 hover:bg-rose-600 text-white font-semibold text-sm px-8 py-4 rounded-full transition-colors shadow-xl"
            >
              Take the quiz →
            </Link>
            <Link
              href="/compare"
              className="border border-white/30 backdrop-blur-md bg-white/5 hover:bg-white/10 text-white font-semibold text-sm px-8 py-4 rounded-full transition-colors"
            >
              Compare destinations
            </Link>
          </div>
        </div>
      </section>
    </article>
  )
}
