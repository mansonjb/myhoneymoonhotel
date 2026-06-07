import type { Metadata } from 'next'
import Link from 'next/link'
import { buildAlternates } from '@/lib/alternates'
import AuthorByline from '@/components/AuthorByline'
import { AUTHOR } from '@/data/author'

export const metadata: Metadata = {
  title: 'All-Inclusive Honeymoon: Worth It or Not? (2026)',
  description:
    'The honest take on all-inclusive honeymoons — where it delivers (Caribbean, Mexico, Maldives), where to skip it (Europe, Bali, Africa), three tiers, six properties we would book.',
  alternates: buildAlternates('/all-inclusive-honeymoon'),
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  inLanguage: 'en',
  headline: 'All-inclusive honeymoon: worth it or not?',
  description:
    'An honest, region-by-region take on the all-inclusive honeymoon — where the format genuinely delivers luxury, where it is a downgrade, three tiers and the six properties we would actually book.',
  author: { '@type': 'Person', name: AUTHOR.name, url: AUTHOR.url, jobTitle: AUTHOR.role },
  publisher: {
    '@type': 'Organization',
    name: 'My Honeymoon Hotel',
    logo: { '@type': 'ImageObject', url: 'https://myhoneymoonhotel.com/icon.png' },
  },
  datePublished: '2026-06-07',
  dateModified: '2026-06-07',
  mainEntityOfPage: 'https://myhoneymoonhotel.com/all-inclusive-honeymoon',
}

const faqs = [
  {
    question: 'Is all-inclusive worth it for a honeymoon?',
    answer:
      'It depends entirely on where. In the Caribbean and Mexico, an all-inclusive at the mid or ultra tier (Excellence, Jade Mountain, Belmond Maroma) is often the most relaxing format for a honeymoon — meals, drinks, beach service, no constant settling of cheques. In Europe, Bali or Thailand, all-inclusive almost always means a downgrade, because the local food scene is the experience and the property is keeping you on-site to maximise their margin.',
  },
  {
    question: "What's the best all-inclusive honeymoon resort?",
    answer:
      'For ultra-luxury: Jade Mountain in St. Lucia (open-air sanctuaries, plunge pools, full board) and Cheval Blanc properties in the Maldives. For mid-tier adults-only: Excellence Punta Cana, Sandals Royal Plantation Jamaica, and Couples Swept Away in Negril. For Caribbean honeymooners on a budget: Curtain Bluff (Antigua) and Hermitage Bay deliver more romance per dollar than nearly any à la carte equivalent.',
  },
  {
    question: 'Are adults-only all-inclusive better?',
    answer:
      'For honeymoons, almost always yes. Adults-only filters out the kids-club energy that defines mass-market all-inclusive, raises the average room rate, and lets the resort programme dinner and entertainment around couples. Sandals (couples-only), Excellence, Couples, and most ultra-tier Caribbean properties operate this way. The exception is Maldives all-inclusive, where every villa is private enough that the adults-only label adds little.',
  },
  {
    question: 'Does all-inclusive include excursions?',
    answer:
      'Almost never at the mass-market tier and only sometimes at the ultra tier. Sandals and Couples include non-motorised water sports (kayak, paddleboard, snorkel) and group activities. Ultra properties like Jade Mountain include some on-site experiences but charge for off-site excursions. Maldives all-inclusive packages (called &ldquo;Diamond&rdquo; or &ldquo;Platinum&rdquo;) sometimes include excursions but the price reflects it. Always read the inclusion sheet — &ldquo;all-inclusive&rdquo; covers food, drink, and tips; excursions are usually extra.',
  },
  {
    question: 'Maldives all-inclusive vs half-board?',
    answer:
      'For a Maldives honeymoon, all-inclusive is almost always the smart play. Resorts sit on private islands with no off-property dining option, transfers back to the airport for a single restaurant choice are impossible, and à la carte pricing on the islands is brutal ($40 for breakfast, $200 for dinner for two). The all-inclusive uplift typically runs $200-$400 per couple per day and breaks even at lunch on day two. Half-board only makes sense if you genuinely plan to skip lunch every day.',
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
    { '@type': 'ListItem', position: 2, name: 'All-inclusive honeymoon', item: 'https://myhoneymoonhotel.com/all-inclusive-honeymoon' },
  ],
}

const hotelPicks = [
  { href: '/hotels/excellence-punta-cana-dominican-republic', name: 'Excellence Punta Cana', dest: 'Dominican Republic', tier: 'Mid · $400–$700/night AI', why: 'Adults-only, swim-up suites, four pools and a serious enough food programme that you genuinely do not want to leave the property.' },
  { href: '/hotels/curtain-bluff-antigua', name: 'Curtain Bluff', dest: 'Antigua', tier: 'Mid · $900–$1,400/night AI', why: 'The grande-dame of Caribbean all-inclusive — two private beaches, an actual tennis programme, and a cellar that holds back-vintage Bordeaux. Worth the rate.' },
  { href: '/hotels/hermitage-bay-antigua', name: 'Hermitage Bay', dest: 'Antigua', tier: 'Mid · $1,000–$1,600/night AI', why: 'Adults-only hillside hideaway on the wildest beach in Antigua — boutique scale, full board, and the most romantic dining of any Caribbean AI.' },
  { href: '/hotels/couples-swept-away-jamaica', name: 'Couples Swept Away', dest: 'Negril, Jamaica', tier: 'Entry · $350–$550/night AI', why: 'The original couples-only all-inclusive — Seven Mile Beach, no kids, and the smartest mid-tier value of any Caribbean honeymoon resort.' },
  { href: '/hotels/sandals-royal-plantation-jamaica', name: 'Sandals Royal Plantation', dest: 'Ocho Rios, Jamaica', tier: 'Mid · $700–$1,000/night AI', why: 'The smallest, quietest, most luxe Sandals — 74 oceanfront suites only, butler service throughout, the brand without the convention-resort scale.' },
  { href: '/hotels/cocobay-resort-antigua', name: 'Cocobay Resort', dest: 'Antigua', tier: 'Entry · $400–$650/night AI', why: 'Adults-only Antiguan cottage-style AI with the most romantic plunge-pool cottages in the under-$700 band — the value-pick for couples who want all-inclusive without the resort scale.' },
]

export default function AllInclusiveHoneymoonPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">Planning Guide</p>
      <h1 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-6 leading-tight">
        All-inclusive honeymoon: worth it or not?
      </h1>
      <p className="text-zinc-500 text-lg leading-relaxed mb-2">
        The honest answer to &ldquo;is all-inclusive worth it for a honeymoon?&rdquo; is not yes or no — it is{' '}
        <em>where</em>. The same format that delivers genuine value in St. Lucia or the Maldives becomes a downgrade in
        Provence or Bali, and most travel guides flatten this into a single bad recommendation in either direction.
        Here is the regional, tiered, honest version.
      </p>

      <AuthorByline />

      <div className="prose prose-zinc max-w-none prose-headings:font-display prose-headings:text-zinc-900 prose-p:text-zinc-600 prose-p:leading-relaxed prose-a:text-rose-500 prose-a:no-underline hover:prose-a:underline mt-10">

        <h2>Where all-inclusive genuinely shines</h2>
        <p>
          Four regions where the format is, on balance, the smart play for a honeymoon. The common thread is
          isolation: when stepping off the property to find a credible dinner is genuinely difficult, all-inclusive
          collapses the friction and lets the honeymoon happen.
        </p>

        <h3><Link href="/destinations/st-lucia">St. Lucia</Link></h3>
        <p>
          The Piton-view resorts (Jade Mountain, Ladera, Sugar Beach) sit far enough from any town that off-property
          dining is a 45-minute drive — and the on-property food at the top tier is genuinely Michelin-credible. The
          Caribbean&apos;s most photogenic island and the easiest answer to &ldquo;adults-only all-inclusive that does
          not feel mass-market.&rdquo;
        </p>

        <h3><Link href="/destinations/antigua">Antigua</Link> &amp; <Link href="/destinations/jamaica">Jamaica</Link></h3>
        <p>
          Antigua is the highest concentration of small-scale, couples-credible all-inclusive in the Caribbean —
          Curtain Bluff, Hermitage Bay, Galley Bay, Cocobay all operate at honeymoon-credible quality. Jamaica is the
          original all-inclusive market (Sandals and Couples were both invented here) and the adults-only properties
          deliver more romance per dollar than nearly anywhere else.
        </p>

        <h3><Link href="/destinations/turks-and-caicos">Turks &amp; Caicos</Link></h3>
        <p>
          The newer Caribbean all-inclusive scene — Blue Haven, Beaches, Alexandra. Grace Bay is among the world&apos;s
          most beautiful beaches and the all-inclusive properties make a strong case as a flight-saver compared to
          St. Lucia for North American couples.
        </p>

        <h3><Link href="/destinations/mexico">Mexico</Link> — Riviera Maya &amp; Los Cabos</h3>
        <p>
          The Riviera Maya is the largest all-inclusive market on earth and the polish of the top tier (Belmond Maroma,
          Rosewood Mayakoba, the &ldquo;El Dorado&rdquo; properties) is genuinely high. Cabo is more à la carte than
          Riviera Maya, but Pueblo Bonito and a handful of others operate strong adults-only AI.
        </p>

        <h3><Link href="/destinations/maldives">Maldives</Link> — the special case</h3>
        <p>
          A category of its own. Every Maldives resort is a private island with no off-property dining — all-inclusive is
          effectively the only sensible booking format. Resort à la carte pricing is brutal ($200 for dinner for two,
          $40 for breakfast) and the all-inclusive uplift typically breaks even at lunch on day two. Book it.
        </p>

        <h2>Where to skip it</h2>
        <p>
          The flip side. Five regions where all-inclusive nearly always means a downgrade — because the off-property
          food, culture or experience <em>is</em> the honeymoon, and locking yourself into a property buffet means
          deliberately skipping the country you came to see.
        </p>
        <ul>
          <li>
            <strong>Europe (all of it).</strong> Provence, Tuscany, Santorini, the Amalfi Coast — the long lunch under
            plane trees, the village trattoria, the boat-and-beach-club routine is the entire point. All-inclusive
            European resorts almost always operate in the mass-market tier and the food cannot compete with what the
            village restaurant down the road serves.
          </li>
          <li>
            <strong>Bali and Thailand.</strong> Street food and the rural-temple-warung scene is what makes both
            countries a honeymoon. The all-inclusive resorts that exist (mostly in the mid-tier) are decent enough but
            you are paying for full board and skipping the part of the trip that is unrepeatable elsewhere.
          </li>
          <li>
            <strong>Africa safari.</strong> All-inclusive safari is structurally different — the game-drive schedule is
            the meal, the lodge dining is communal, and the &ldquo;all-inclusive&rdquo; label means meals plus two
            game-drives per day and is essentially mandatory. Different category, do not confuse with beach AI.
          </li>
          <li>
            <strong>Japan.</strong> The ryokan model is full-board (kaiseki dinner, traditional breakfast) but it is
            not all-inclusive — and every meal away from the ryokan is a non-negotiable cultural experience. Book
            ryokan for the format and skip anything labelled all-inclusive.
          </li>
          <li>
            <strong>Italy, France, Greece, Spain coastal honeymoons.</strong> Same logic as Europe-wide — coastal villas
            and small hotels exist precisely so you can walk to the harbour-side trattoria. All-inclusive removes the
            single thing that makes a Mediterranean honeymoon a Mediterranean honeymoon.
          </li>
        </ul>

        <h2>The three honest tiers</h2>

        <h3>Entry · $250-$500 / night AI</h3>
        <p>
          Mass-market Sandals (the larger properties), Iberostar, RIU, Excellence Riviera Cancún, Couples Negril. House
          brand drinks, four restaurants on rotation, kids-club on some (avoid if not adults-only), a buffet that does
          the job but is not the reason to come. Value play; not the romance ceiling. Total 7-night cost for two,
          including economy flights from the US: $4,000-$7,000.
        </p>

        <h3>Mid · $500-$1,200 / night AI</h3>
        <p>
          The sweet spot. Excellence Punta Cana, Couples Swept Away,{' '}
          <Link href="/hotels/sandals-royal-plantation-jamaica">Sandals Royal Plantation</Link>, Hermitage Bay,
          Galley Bay, Curtain Bluff. Adults-only (mostly), premium drinks programme, four to seven restaurants of
          credible quality, butler or concierge on the higher rooms, real spa, included non-motorised water sports.
          Total 7-night cost: $8,000-$15,000 all-in.
        </p>

        <h3>Ultra · $1,500+ / night AI</h3>
        <p>
          The hotels that happen to be all-inclusive rather than the all-inclusives that happen to be luxe.{' '}
          <Link href="/hotels/jade-mountain-st-lucia">Jade Mountain</Link>,{' '}
          <Link href="/hotels/ladera-resort-st-lucia">Ladera</Link>, Sugar Beach (Viceroy), Cheval Blanc Randheli (when
          booked on the AI package). Open-air sanctuaries, full board with a Michelin-tier kitchen, private plunge
          pools, butler service throughout, the resort is the destination. Total 7-night cost: $18,000-$35,000+.
        </p>

        <h2>The 6 properties we&apos;d actually book</h2>
        <p>
          Pulled from the catalogue. Each is the answer to a different question — entry value, mid sweet-spot, adults-
          only luxe, Caribbean classic.
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

        <h2>What &ldquo;all-inclusive&rdquo; actually includes vs hides</h2>
        <ul>
          <li><strong>Drinks:</strong> Yes — but at entry tier, house brand only. Premium spirits and quality wine are an upcharge unless you book the &ldquo;ultra&rdquo; or &ldquo;butler&rdquo; package.</li>
          <li><strong>Meals:</strong> Yes — but the speciality restaurants are usually reservation-only and limited to one or two visits per week. The buffet covers the rest.</li>
          <li><strong>Spa:</strong> Almost never. One $200 couples massage on the welcome sheet is the marketing version; the rest is à la carte.</li>
          <li><strong>Activities:</strong> Non-motorised water sports (kayak, snorkel) usually included; motorised (jet ski, scuba) almost never.</li>
          <li><strong>Wi-Fi:</strong> Usually included now, but the premium tier is sometimes upsell at older resorts.</li>
          <li><strong>Gratuities:</strong> Sometimes included (Sandals, Couples), sometimes expected on top (Curtain Bluff, most mid-tier).</li>
          <li><strong>Excursions:</strong> Almost never included. Budget $200-$500 per couple for the snorkel cruise, the rainforest hike, the zip-line day.</li>
        </ul>

        <h2>Cost reality check</h2>
        <p>
          A typical 7-night mid-tier all-inclusive Caribbean honeymoon for two, including economy flights from the
          eastern US: $8,000-$14,000 all-in. The same shape at the ultra tier (Jade Mountain, Ladera): $20,000-$32,000.
          For comparison, a 7-night à la carte Maldives honeymoon at the mid tier (Conrad Rangali, half-board) plus
          flights runs $18,000-$25,000 all-in; the same Maldives stay booked all-inclusive runs $22,000-$30,000 — the
          uplift pays for itself.
        </p>
        <p>
          The honest math: all-inclusive at the mid tier is genuinely cheaper than the equivalent à la carte Caribbean
          stay <em>when</em> couples would otherwise eat and drink heavily. For couples who plan to skip lunch, drink
          one cocktail a day, and explore off-property restaurants, half-board or B&amp;B is the better-value format.
        </p>

        <h2>The honest take</h2>
        <p>
          Stop asking &ldquo;is all-inclusive worth it&rdquo; and start asking &ldquo;does the destination work as a
          closed-loop property?&rdquo; In the Caribbean, Mexico and the Maldives, the answer is almost always yes —
          and the mid-tier adults-only all-inclusive is one of the most relaxing honeymoon formats in travel. In
          Europe, Asia and Africa-safari country, the answer is almost always no, and you should book à la carte. Get
          that filter right and the rest of the planning is easy.
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
        <h3 className="font-display text-2xl text-zinc-900 mb-4">All all-inclusive honeymoon hotels, scored.</h3>
        <Link
          href="/experiences/all-inclusive"
          className="inline-block bg-rose-500 hover:bg-rose-600 text-white font-semibold text-sm px-6 py-3 rounded-full transition-colors"
        >
          Browse all all-inclusive honeymoon hotels →
        </Link>
      </div>

      <div className="mt-12 text-center text-sm text-zinc-500">
        Related guides:{' '}
        <Link href="/honeymoon-on-a-budget" className="text-rose-500 hover:underline">honeymoon on a budget</Link>{' '}·{' '}
        <Link href="/luxury-honeymoon" className="text-rose-500 hover:underline">luxury honeymoon</Link>{' '}·{' '}
        <Link href="/last-minute-honeymoon" className="text-rose-500 hover:underline">last-minute honeymoon</Link>
      </div>

      <div className="mt-8 text-center">
        <Link href="/destinations" className="text-rose-500 hover:underline text-sm font-semibold">
          ← Back to all honeymoon destinations
        </Link>
      </div>
    </div>
  )
}
