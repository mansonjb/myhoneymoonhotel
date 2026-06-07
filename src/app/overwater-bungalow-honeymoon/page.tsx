import type { Metadata } from 'next'
import Link from 'next/link'
import { buildAlternates } from '@/lib/alternates'
import AuthorByline from '@/components/AuthorByline'
import { AUTHOR } from '@/data/author'

export const metadata: Metadata = {
  title: 'Overwater Bungalow Honeymoon: The Honest 2026 Guide',
  description:
    'Overwater bungalow honeymoons across Maldives, Bora Bora, Fiji, Belize, Mexico and Indonesia — three tiers, eight properties we would book, and the realities no one tells you.',
  alternates: buildAlternates('/overwater-bungalow-honeymoon'),
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  inLanguage: 'en',
  headline: 'The overwater bungalow honeymoon: the honest 2026 guide.',
  description:
    'A regional and tiered guide to overwater bungalow honeymoons — where they actually exist, what they really cost, which eight properties we would book, and the realities the brochures skip.',
  author: { '@type': 'Person', name: AUTHOR.name, url: AUTHOR.url, jobTitle: AUTHOR.role },
  publisher: {
    '@type': 'Organization',
    name: 'My Honeymoon Hotel',
    logo: { '@type': 'ImageObject', url: 'https://myhoneymoonhotel.com/icon.png' },
  },
  datePublished: '2026-06-07',
  dateModified: '2026-06-07',
  mainEntityOfPage: 'https://myhoneymoonhotel.com/overwater-bungalow-honeymoon',
}

const faqs = [
  {
    question: 'Are overwater bungalows worth the money?',
    answer:
      'Yes, but only at the right tier and the right destination. An entry-level overwater room at $700 in Bora Bora is a different product from a $4,000-per-night Soneva Jani two-storey villa in the Maldives — and many couples who book the entry tier come away disappointed because they expected the catalogue version. The villas that genuinely deliver the honeymoon-of-a-lifetime sit in the $1,500-$3,000/night band, with a private pool, sunset orientation, and direct lagoon access.',
  },
  {
    question: 'Maldives vs Bora Bora?',
    answer:
      'Maldives for the water clarity, marine life, atoll-per-resort exclusivity and the broadest overwater inventory in the world (90% of global stock). Bora Bora for the mountain backdrop, French Polynesian culture and the original 1967 birthplace of the format. Maldives feels otherworldly; Bora Bora feels cinematic. Choose Maldives if you want a single private island and total isolation; choose Bora Bora if you want the iconic Mount Otemanu silhouette behind every photo.',
  },
  {
    question: 'Can you swim from the deck?',
    answer:
      'At nearly every overwater villa, yes — there is a ladder or steps directly into the lagoon. But the experience varies enormously. Premium villas sit over clear sand or coral with 20-30m of visibility; budget villas sometimes sit over seagrass or murky channels and the water is less inviting than the brochure suggests. Always confirm lagoon clarity before booking, not just the villa style.',
  },
  {
    question: 'How much for a 7-night overwater honeymoon?',
    answer:
      'A realistic all-in budget for a couple, including flights, transfers and one excursion: $9,000-$14,000 at the entry tier (Le Moana Bora Bora, Ayada Maldives); $18,000-$30,000 at the mid tier (Conrad Maldives Rangali, Four Seasons Bora Bora); $40,000-$70,000+ at the ultra tier (Soneva Jani, Cheval Blanc Randheli). The Maldives flight transfer (seaplane or domestic flight) adds $400-$1,000 per couple on top of the room rate.',
  },
  {
    question: 'Are overwater bungalows safe in storms?',
    answer:
      'Yes. Modern overwater villas are engineered to withstand tropical storms and the resorts close or evacuate well before any cyclone risk. The genuine risk is not safety but disappointment: cloudy weather wipes out the glass-floor experience, and heavy rain on a thatch roof is loud enough to be either romantic or sleep-killing depending on temperament. Travel in the dry-season windows we recommend below and the weather risk is minimal.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'en',
  mainEntity: faqs.map(f => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://myhoneymoonhotel.com/' },
    { '@type': 'ListItem', position: 2, name: 'Overwater bungalow honeymoon', item: 'https://myhoneymoonhotel.com/overwater-bungalow-honeymoon' },
  ],
}

const hotelPicks = [
  { href: '/hotels/conrad-maldives-rangali-island', name: 'Conrad Maldives Rangali Island', dest: 'Maldives', tier: 'Mid · $1,500/night', why: 'Twin-island resort with the underwater restaurant and the most refined mid-tier overwater experience in the Maldives.' },
  { href: '/hotels/four-seasons-bora-bora', name: 'Four Seasons Resort Bora Bora', dest: 'Bora Bora', tier: 'Mid · $2,000/night', why: 'The mountain-view villas behind a tip-of-the-lagoon spit — the cleanest backdrop in Bora Bora and the best service on the island.' },
  { href: '/hotels/soneva-jani-maldives', name: 'Soneva Jani', dest: 'Maldives', tier: 'Ultra · $4,000+/night', why: 'Two-storey villas with retractable bedroom roofs and a water slide from the upper deck — the most extravagant overwater honeymoon on earth.' },
  { href: '/hotels/cheval-blanc-randheli-maldives', name: 'Cheval Blanc Randheli', dest: 'Maldives', tier: 'Ultra · $4,500+/night', why: 'LVMH flagship — Christian Liaigre interiors, four restaurants, and the most polished butler service of any overwater resort.' },
  { href: '/hotels/gili-lankanfushi-maldives', name: 'Gili Lankanfushi Maldives', dest: 'Maldives', tier: 'Ultra · $2,800/night', why: 'No-news, no-shoes barefoot-luxury benchmark — thatched water villas reached by wooden jetty, no over-the-top showmanship.' },
  { href: '/hotels/intercontinental-le-moana-bora-bora-resort-bora-bora', name: 'InterContinental Le Moana Bora Bora', dest: 'Bora Bora', tier: 'Entry · $800/night', why: 'The classic Matira Point overwater — the most affordable way to do the Bora Bora dream without a real downgrade in the lagoon itself.' },
  { href: '/hotels/cayo-espanto-belize', name: 'Cayo Espanto', dest: 'Belize', tier: 'Ultra · $2,500+/night', why: 'Tiny private-island all-villa hideaway off Belize — the new-frontier overwater honeymoon for couples who want the Caribbean side of the equator.' },
  { href: '/hotels/huvafen-fushi-maldives', name: 'Huvafen Fushi', dest: 'Maldives', tier: 'Mid · $1,800/night', why: 'Adults-only Maldives with the world’s first underwater spa — the right pick for couples who want luxury without children anywhere on the island.' },
]

export default function OverwaterBungalowHoneymoonPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">Planning Guide</p>
      <h1 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-6 leading-tight">
        The overwater bungalow honeymoon: the honest 2026 guide.
      </h1>
      <p className="text-zinc-500 text-lg leading-relaxed mb-2">
        Born at Hotel Bora Bora in 1967 — three Californian hoteliers stuck a row of thatched huts on stilts above a lagoon
        and accidentally invented the most-photographed room type in luxury travel. Six decades later, the overwater
        bungalow is the icon for a reason; but not every one is equal, and the gap between the brochure version and a
        real $700-a-night entry villa is wider than most couples realise. Here is the honest map.
      </p>

      <AuthorByline />

      <div className="prose prose-zinc max-w-none prose-headings:font-display prose-headings:text-zinc-900 prose-p:text-zinc-600 prose-p:leading-relaxed prose-a:text-rose-500 prose-a:no-underline hover:prose-a:underline mt-10">

        <h2>Where the real overwater bungalows are</h2>
        <p>
          Despite the marketing creep, there are only six destinations on earth with a meaningful inventory of genuine,
          purpose-built overwater villas. Everywhere else is a single property masquerading as a region.
        </p>

        <h3><Link href="/destinations/maldives">Maldives</Link> — the atoll archetype</h3>
        <p>
          The Maldives holds roughly 90% of global overwater stock. Each resort sits on its own private atoll-island,
          which is the structural advantage no other destination matches — you never see another hotel from your villa.
          The water is the clearest in the world (25-30m visibility), the variety of villa styles is the deepest, and
          the ultra tier (Soneva Jani, Cheval Blanc Randheli, Joali) is in a class of its own.
        </p>

        <h3><Link href="/destinations/bora-bora">Bora Bora</Link> — the original birthplace</h3>
        <p>
          The format was invented here in 1967. The Mount Otemanu backdrop is the most cinematic in the genre, and for
          North American couples the routing (LAX-PPT direct, then a 50-minute domestic to BOB) is meaningfully easier
          than the Maldives. Inventory is smaller — five resorts have meaningful overwater stock — but the
          mountain-and-lagoon photograph is the one most couples have in their head.
        </p>

        <h3><Link href="/destinations/french-polynesia">French Polynesia</Link> — the quieter twins</h3>
        <p>
          Moorea and Taha&apos;a — the lesser-known sisters of Bora Bora. Moorea is 30 minutes by ferry from Tahiti and
          has a quieter lagoon and a Hilton-tier overwater resort. Taha&apos;a, between Bora Bora and Raiatea, is home
          to Le Taha&apos;a by Pearl Resorts — overwater villas with a view straight across the lagoon to Bora Bora&apos;s
          silhouette. Both are roughly 30% cheaper than Bora Bora itself.
        </p>

        <h3><Link href="/destinations/fiji">Fiji</Link> — closer for Australians and Americans</h3>
        <p>
          Fiji&apos;s overwater inventory is small (Likuliku Lagoon Resort remains the only true overwater property)
          but the routing — 10 hours from LAX, 4 from Sydney — makes it the smartest South Pacific pick when Bora Bora
          is too far or too dear. The lagoon is shallower and the marine life less spectacular than the Maldives, but
          the rate ceiling is lower too.
        </p>

        <h3><Link href="/destinations/mexico">Mexico</Link> — the Riviera Maya exception</h3>
        <p>
          The Palafitos at El Dorado Maroma on the Riviera Maya are the only overwater villas in North America — a
          genuine architectural exception, marketed as &ldquo;El Dorado&rdquo; for North American couples who cannot
          (or will not) fly long-haul. The lagoon is artificially calmed by a reef-edge wall; the experience is
          half-overwater, half-resort, and ideal for couples who want the photo without the 22-hour flight.
        </p>

        <h3><Link href="/destinations/belize">Belize</Link> — the new frontier</h3>
        <p>
          Belize&apos;s small-resort overwater scene is the next-decade story — <Link href="/hotels/cayo-espanto-belize">Cayo Espanto</Link>
          {' '}sits on a private cay off Ambergris with seven villas (including overwater &ldquo;Casa Ventanas&rdquo;),
          and a handful of barrier-reef properties have followed. Belize is the closest English-speaking overwater
          destination to the US, and the diving is the best in the Caribbean.
        </p>

        <h3><Link href="/destinations/indonesia">Indonesia</Link> — Misool and the Raja Ampat outliers</h3>
        <p>
          Indonesia&apos;s overwater stock is concentrated in Raja Ampat — Misool Resort and a few sister properties in
          the world&apos;s most biodiverse reef. This is the wildest end of the genre, with hand-built wood villas, no
          air-conditioning at some, and a 36-hour journey from Europe or North America. For divers and serious
          honeymooners chasing somewhere genuinely remote, nothing else compares.
        </p>

        <h2>The three tiers</h2>
        <p>
          Calling them all &ldquo;overwater bungalows&rdquo; flattens a category that spans $700 to $5,000 a night.
          Three tiers, three different honeymoons.
        </p>

        <h3>Entry · $700-$1,000 / night</h3>
        <p>
          InterContinental Le Moana Bora Bora, Ayada Maldives, Hilton Moorea. You get a real overwater room with a deck
          and direct lagoon access — no private pool, often shared sunset orientation, sometimes a slightly older villa
          that has weathered ten seasons of sun and salt. The lagoon is the same lagoon. The villa is the photo. If the
          budget is $10,000-$14,000 all-in for a week, this is the tier that delivers the honeymoon without overpromising.
        </p>

        <h3>Mid · $1,500-$2,500 / night</h3>
        <p>
          <Link href="/hotels/conrad-maldives-rangali-island">Conrad Maldives Rangali Island</Link>,{' '}
          <Link href="/hotels/four-seasons-bora-bora">Four Seasons Bora Bora</Link>, Anantara Veli,{' '}
          <Link href="/hotels/huvafen-fushi-maldives">Huvafen Fushi</Link>. Private plunge pool on the deck, guaranteed
          sunset orientation, glass floor panel, full in-villa dining. This is the honeymoon sweet spot — the tier where
          the room becomes the entire honeymoon and excursions become optional. Most couples who do overwater well
          stretch to mid rather than book entry for longer.
        </p>

        <h3>Ultra · $4,000+ / night</h3>
        <p>
          <Link href="/hotels/soneva-jani-maldives">Soneva Jani</Link>,{' '}
          <Link href="/hotels/cheval-blanc-randheli-maldives">Cheval Blanc Randheli</Link>, Joali, Velaa, Cheval Blanc
          St-Tropez&apos;s Maldivian sister. Two-storey villas, retractable roofs over the bedroom, private chef on
          call, a butler who lives on the island and is yours for the week. This is honeymoon-as-statement — the kind of
          stay that runs $40,000-$70,000 all-in for seven nights and is, for many couples, the only stay they will ever
          take at this level.
        </p>

        <h2>What no one tells you</h2>
        <ul>
          <li>
            <strong>Sun plus sea equals an aging villa.</strong> Thatch, teak and varnished pine weather fast in the
            tropics. Premium resorts cycle through full villa refurbishment on a four-to-six-year rotation; entry-tier
            resorts often run villas eight or nine years between refits. The brochure photograph and the villa you sleep
            in may be different versions.
          </li>
          <li>
            <strong>Mosquitoes at dusk.</strong> The lagoon is mosquito-free; the deck at 6:30pm is not, particularly
            after rain. Bring DEET or expect to retreat indoors at the exact hour you wanted to be outdoors.
          </li>
          <li>
            <strong>Glass-floor disappointment.</strong> On a sunny day the glass floor is a live aquarium; on a cloudy
            day it is a dark patch of plywood. Plan accordingly — and check the orientation of the panel (over sand vs
            over reef changes everything).
          </li>
          <li>
            <strong>Ocean noise at night.</strong> The slap of water under the villa at 2am is either the most relaxing
            sound on earth or a sleep killer that drives you to ask for an earplugs basket from the front desk on night
            two. Sensitive sleepers should consider a beach villa instead.
          </li>
          <li>
            <strong>The transfer-request rate is real.</strong> Resort GMs in the Maldives report that roughly 70% of
            overwater bookings request a mid-stay transfer to a beach villa — because the heat at midday, the constant
            sea-spray, or the absence of a garden becomes more than the couple expected. The fix: never book an
            overwater-only week. Split four nights overwater and three on the beach.
          </li>
        </ul>

        <h2>The 8 we&apos;d actually pick</h2>
        <p>
          Eight overwater honeymoons worth pinning, drawn from the catalogue. Each is the answer to a different
          question — entry budget, mid sweet-spot, ultra statement, or Caribbean-side exception.
        </p>

        <div className="not-prose grid gap-3 my-8">
          {hotelPicks.map(h => (
            <Link
              key={h.href}
              href={h.href}
              className="block border border-zinc-100 rounded-2xl p-5 hover:border-rose-200 hover:bg-rose-50/30 transition-colors"
            >
              <div className="flex items-baseline justify-between gap-3 mb-1">
                <span className="font-display text-lg text-zinc-900">{h.name}</span>
                <span className="text-xs uppercase tracking-wider text-rose-400 font-semibold shrink-0">{h.dest}</span>
              </div>
              <p className="text-[11px] uppercase tracking-wider text-zinc-400 font-semibold mb-2">{h.tier}</p>
              <p className="text-sm text-zinc-600 leading-relaxed">{h.why}</p>
            </Link>
          ))}
        </div>

        <h2>When to go</h2>
        <p>
          Each destination has a different dry-season window. Plan around it; the gap between the right month and the
          wrong one is the gap between a postcard and a disappointment.
        </p>
        <ul>
          <li><strong>Maldives:</strong> December to April. November is the value-peak before Christmas rates kick in. May-October is monsoon — daily rain risk.</li>
          <li><strong>Bora Bora &amp; French Polynesia:</strong> May to October (Southern Hemisphere dry season). November to April is warm and wetter, with February the rainiest.</li>
          <li><strong>Fiji:</strong> May to October mirrors French Polynesia.</li>
          <li><strong>Mexico (Riviera Maya):</strong> November to May. June-October is hurricane season and you should not book overwater in that window.</li>
          <li><strong>Belize:</strong> December to April for diving visibility; storms peak August-October.</li>
          <li><strong>Indonesia (Raja Ampat):</strong> October to April for the calmest seas and best visibility.</li>
        </ul>

        <h2>The honest take</h2>
        <p>
          The overwater bungalow honeymoon is the icon for a reason — but the version that delivers requires three
          deliberate choices: the right destination for your routing, the right tier for your budget (don&apos;t book
          entry for a week, don&apos;t book ultra for two), and a split itinerary that pairs overwater with a few
          nights on the beach. Get those three right and the format earns the photograph. Get them wrong and the
          mid-week transfer request is real.
        </p>

      </div>

      <section className="mt-16">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">FAQ</p>
        <h2 className="font-display text-3xl text-zinc-900 mb-8">Frequently asked questions</h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <details key={i} className="group border border-zinc-100 rounded-2xl overflow-hidden">
              <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-medium text-zinc-900 text-sm hover:bg-zinc-50 transition-colors list-none">
                <span>{faq.question}</span>
                <svg className="w-4 h-4 text-zinc-400 shrink-0 ml-4 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
              </summary>
              <div className="px-6 pb-6 pt-2">
                <p className="text-zinc-500 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      <div className="mt-16 bg-rose-50/40 border border-rose-100 rounded-2xl p-7 text-center">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-3">Browse the catalogue</p>
        <h3 className="font-display text-2xl text-zinc-900 mb-4">All overwater bungalow hotels, scored.</h3>
        <Link
          href="/experiences/overwater-bungalows"
          className="inline-block bg-rose-500 hover:bg-rose-600 text-white font-semibold text-sm px-6 py-3 rounded-full transition-colors"
        >
          Browse all overwater bungalow hotels →
        </Link>
      </div>

      <div className="mt-12 text-center text-sm text-zinc-500">
        Related guides:{' '}
        <Link href="/luxury-honeymoon" className="text-rose-500 hover:underline">luxury honeymoon</Link>{' '}·{' '}
        <Link href="/all-inclusive-honeymoon" className="text-rose-500 hover:underline">all-inclusive honeymoon</Link>{' '}·{' '}
        <Link href="/itineraries/maldives" className="text-rose-500 hover:underline">Maldives itinerary</Link>
      </div>

      <div className="mt-8 text-center">
        <Link href="/destinations" className="text-rose-500 hover:underline text-sm font-semibold">
          ← Back to all honeymoon destinations
        </Link>
      </div>
    </div>
  )
}
