import type { Metadata } from 'next'
import Link from 'next/link'
import { buildAlternates } from '@/lib/alternates'
import AuthorByline from '@/components/AuthorByline'
import { AUTHOR } from '@/data/author'

export const metadata: Metadata = {
  title: 'Honeymoon in France: The Honest 2026 Guide',
  description:
    'France is the #1 honeymoon destination in Europe. Provence, Côte d\'Azur, Loire châteaux, Champagne — the regions, the hotels, the honest budget.',
  alternates: buildAlternates('/honeymoon-in-france'),
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  inLanguage: 'en',
  headline: 'Honeymoon in France: the honest 2026 guide.',
  description:
    'A regional guide to a French honeymoon — Provence, Côte d\'Azur, Loire châteaux, Champagne — with the hotels we would actually book, real budgets, and the unspoken rules of when to go.',
  author: {
    '@type': 'Person',
    name: AUTHOR.name,
    url: AUTHOR.url,
    jobTitle: AUTHOR.role,
  },
  publisher: {
    '@type': 'Organization',
    name: 'My Honeymoon Hotel',
    logo: { '@type': 'ImageObject', url: 'https://myhoneymoonhotel.com/icon.png' },
  },
  datePublished: '2026-05-28',
  dateModified: '2026-05-28',
  mainEntityOfPage: 'https://myhoneymoonhotel.com/honeymoon-in-france',
}

const faqs = [
  {
    question: 'Is France too cliché for a honeymoon?',
    answer:
      'France is not cliché — it is dominant. The combination of food culture, train infrastructure, château-hotel inventory, and Riviera glamour gives France the deepest honeymoon catalogue in Europe, and what looks like cliché from a distance dissolves on arrival into specificity (the Loire is nothing like Provence, which is nothing like the Côte d\'Azur). The genuine risk is doing France generically — Paris plus a vague south-of-France week — rather than committing to one or two regions with intent.',
  },
  {
    question: 'Côte d\'Azur or Provence?',
    answer:
      'Côte d\'Azur if you want belle époque palace hotels, yacht culture, and the Mediterranean glamour heritage — pebble beaches, designer dinners, Cap-Eden-Roc and Cap-Ferrat at the top end. Provence if you want lavender fields, hilltop villages, slow lunches under plane trees, and the rural-luxury format — Domaine de Manville, La Bastide de Gordes. Couples often do both: three nights in Provence, three on the coast. The road between them is two hours and the contrast is the point.',
  },
  {
    question: 'When is the best time to honeymoon in France?',
    answer:
      'Mid-May through late June and the whole of September. May and June give you long days, gardens at their peak, and civilised crowds; September gives you warm Mediterranean water, lighter tourist density, and the harvest in Champagne and the Loire. Avoid Bastille Day (14 July) through the third week of August unless you actively want the French holiday peak — the Côte d\'Azur becomes genuinely difficult, and prices double across the country.',
  },
  {
    question: 'How much does a luxury France honeymoon cost?',
    answer:
      'A two-week luxury France honeymoon (palace-tier hotels, business-class flights, private transfers, three Michelin dinners) runs $35,000-$60,000 per couple. The same two weeks at the Loire and Champagne with one Côte d\'Azur stop runs $18,000-$30,000. The Loire is the genuinely under-priced region — five-star Relais & Châteaux properties at €450-700 per night versus €1,500-2,500 for equivalent quality on the coast.',
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
    { '@type': 'ListItem', position: 2, name: 'Honeymoon in France', item: 'https://myhoneymoonhotel.com/honeymoon-in-france' },
  ],
}

const hotelPicks = [
  { href: '/hotels/hotel-du-cap-eden-roc-cote-dazur', name: 'Hôtel du Cap-Eden-Roc', region: 'Côte d\'Azur', why: 'The most legendary address on the Riviera — the seawater pool, the cabanas, a century of cinematic legacy.' },
  { href: '/hotels/grand-hotel-du-cap-ferrat-cote-dazur', name: 'Grand-Hôtel du Cap-Ferrat', region: 'Côte d\'Azur', why: 'Four Seasons palace on the leafiest peninsula of the coast — warmer service than Eden-Roc, equally extraordinary setting.' },
  { href: '/hotels/cheval-blanc-st-tropez-cote-dazur', name: 'Cheval Blanc St-Tropez', region: 'Saint-Tropez', why: 'LVMH flagship in the heart of the village, with the only sand beach in town and Donckele\'s three-Michelin-star kitchen.' },
  { href: '/hotels/domaine-de-manville-provence', name: 'Domaine de Manville', region: 'Provence', why: 'Olive-grove estate below Les Baux — standalone villas with plunge pools, the smartest Provence honeymoon pick.' },
  { href: '/hotels/domaine-des-hauts-de-loire-loire-valley', name: 'Domaine des Hauts de Loire', region: 'Loire Valley', why: 'Relais & Châteaux hunting estate near Chambord, one Michelin star, 70 hectares of woodland.' },
  { href: '/hotels/royal-champagne-hotel-spa-champagne', name: 'Royal Champagne Hotel & Spa', region: 'Champagne', why: 'Panoramic vineyard hotel above Épernay with the most extraordinary infinity-pool view in northern France.' },
  { href: '/hotels/domaine-les-crayeres-champagne', name: 'Domaine Les Crayères', region: 'Reims', why: 'Belle époque mansion with a two-Michelin-star kitchen — the historic Relais flagship of Champagne.' },
  { href: '/hotels/chateau-de-la-chevre-dor-cote-dazur', name: 'Château de la Chèvre d\'Or', region: 'Èze', why: 'Clifftop Riviera medieval village 400m above the sea — the most cinematic sunset in France.' },
]

export default function HoneymoonInFrancePage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">Planning Guide</p>
      <h1 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-6 leading-tight">
        Honeymoon in France: the honest 2026 guide.
      </h1>
      <p className="text-zinc-500 text-lg leading-relaxed mb-2">
        France is the most-booked honeymoon destination in Europe, and the most generically-planned. The country is six
        regions, not one, and the honeymoon couples who do France well commit to two or three rather than try to thread
        Paris-Provence-Côte d&apos;Azur into a single week. Here is how we&apos;d actually plan it.
      </p>

      <AuthorByline />

      <div className="prose prose-zinc max-w-none prose-headings:font-display prose-headings:text-zinc-900 prose-p:text-zinc-600 prose-p:leading-relaxed prose-a:text-rose-500 prose-a:no-underline hover:prose-a:underline mt-10">

        <h2>Why France is the #1 honeymoon destination in Europe</h2>
        <p>
          France wins on four structural advantages that no other European country combines. First, food: every region
          has a serious culinary identity, and every honeymoon hotel of consequence operates a Michelin-tier kitchen.
          Second, infrastructure: the TGV network puts Champagne 45 minutes from Paris, the Loire 1 hour, and the Côte
          d&apos;Azur 5h 30 from the same station — no other country in Europe makes regional honeymoon hopping this
          easy. Third, château-hotel inventory: France has more Relais &amp; Châteaux properties than any other country
          (over 150), and the Loire-and-Provence depth is unmatched. Fourth, the Riviera: belle époque palace hotels
          like Cap-Eden-Roc, Cap-Ferrat, and La Réserve de Beaulieu hold a century of romance heritage that the rest of
          the Mediterranean simply cannot match.
        </p>

        <h2>Where to honeymoon in France</h2>
        <p>
          Six regions are honeymoon-credible. Each has a distinct personality and a different price ceiling. Match the
          shape of the trip to your taste — palace versus château, beach versus vineyard, coastal glamour versus rural
          slow.
        </p>

        <h3><Link href="/destinations/provence">Provence</Link> — sunlit dolce-vita</h3>
        <p>
          The Luberon and the Alpilles — lavender fields, hilltop stone villages (Gordes, Ménerbes, Bonnieux), the
          rural-luxury format at its best. La Bastide de Gordes, Domaine de Manville, Coquillade for the polished
          Relais experience; Hotel Crillon le Brave for the historic village hotel. The point of Provence is the slow
          rural rhythm — markets, long lunches, vineyards, the cicadas. Best May-June and September.
        </p>

        <h3><Link href="/destinations/cote-dazur">Côte d&apos;Azur</Link> — belle époque glamour</h3>
        <p>
          The Riviera proper — Saint-Tropez, Cap-Ferrat, Cannes, Antibes, Èze, Monaco. Pebble beaches, palace hotels,
          yacht culture, Riviera-grade dinners. Hôtel du Cap-Eden-Roc and Grand-Hôtel du Cap-Ferrat are the
          architectural-cinematic flagships; Cheval Blanc St-Tropez and Château de la Chèvre d&apos;Or are the
          contemporary and clifftop alternatives. The point of the Côte d&apos;Azur is the glamour heritage. Best
          late-May to June and September; avoid August at all costs.
        </p>

        <h3><Link href="/destinations/loire-valley">Loire Valley</Link> — Renaissance châteaux</h3>
        <p>
          The most under-priced honeymoon region in France. The Renaissance châteaux country — Chenonceau, Chambord,
          Cheverny — combined with five-star Relais hotels in actual royal châteaux (Domaine des Hauts de Loire,
          Château d&apos;Artigny, Château de Pray). One hour by TGV from Paris. Half the price of equivalent Provence
          and Côte d&apos;Azur properties. Best May to September.
        </p>

        <h3><Link href="/destinations/champagne">Champagne</Link> — drink it at the source</h3>
        <p>
          The under-rated wine-country honeymoon — 45 minutes by TGV from Paris to Reims, the Gothic cathedral, and the
          Avenue de Champagne in Épernay. Krug, Bollinger, Veuve Clicquot, Pol Roger — intimate cellar visits and
          prestige tastings impossible at home. Royal Champagne Hotel and Domaine Les Crayères are the flagships.
          Quieter than Burgundy, easier than Bordeaux, more romantic than anywhere else wine is made. Best May to
          October.
        </p>

        <h3>Paris (as a stopover, not a destination)</h3>
        <p>
          Paris is the universal opener or closer for a French honeymoon — two or three nights as a Champagne or Loire
          pairing, not the centre of the week. The Bristol, the Ritz, the Crillon, and the Cheval Blanc Paris are the
          palace addresses. Pair with the TGV south after a long weekend of museums and bistros. We don&apos;t treat
          Paris as a honeymoon destination on its own — couples do, and they love it, but the romance-density per day
          is lower than what the regions deliver.
        </p>

        <h2>The honest budget</h2>
        <p>
          The price spread across French honeymoon regions is enormous. At the top, a peak-week stay at Hôtel du
          Cap-Eden-Roc runs $1,800-$3,000 per night for a base sea-view room; the Bellini Suite can reach $10,000 in
          August. At the value end, Château de Pray in the Loire is €280-450 per night for a real 13th-century castle
          stay with a Michelin-tier kitchen. The same shape of honeymoon — five-star French romance — varies five-fold
          in price by region. A two-week honeymoon at the top of the Côte d&apos;Azur runs $35,000-$60,000 per couple
          all-in; the same two weeks split between the Loire and Champagne runs $18,000-$28,000. The Loire and
          Champagne are the value plays of the decade — both an hour from Paris, both with Relais &amp; Châteaux
          inventory at half Côte d&apos;Azur prices.
        </p>

        <h2>When to go</h2>
        <p>
          The honeymoon windows differ by region. Côte d&apos;Azur and Provence run May to October but August is
          impossible (heat, crowds, gridlock); the best windows are mid-May to late June and September to mid-October.
          Loire and Champagne run May to October with September shaping up as the secret-best month (harvest in
          Champagne, autumn vines in the Loire, warm long days, manageable crowds). The unspoken rule for the
          Côte d&apos;Azur is the same as the unspoken rule for Saint-Tropez: avoid Bastille Day (14 July) through the
          third week of August. The unspoken rule for Champagne is to avoid the last week of September (vendanges) when
          the maisons are working at full capacity and visits get cancelled. October once the harvest is finished is
          the calmer, more beautiful version of Champagne.
        </p>

        <h2>The hotels we&apos;d actually pick</h2>
        <p>
          Eight French honeymoon hotels worth pinning. Each is the answer to a different question — palace versus
          château, coast versus vineyard, intimate versus flagship.
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
                <span className="text-xs uppercase tracking-wider text-rose-400 font-semibold shrink-0">{h.region}</span>
              </div>
              <p className="text-sm text-zinc-600 leading-relaxed">{h.why}</p>
            </Link>
          ))}
        </div>

        <h2>Itinerary templates</h2>

        <h3>The Provence + Côte d&apos;Azur classic (7 nights)</h3>
        <p>
          3 nights at Domaine de Manville in the Alpilles — Les Baux, Saint-Rémy, Carrières des Lumières, lavender if
          in season. Drive 2 hours east to the coast. 4 nights at Grand-Hôtel du Cap-Ferrat — Villa Ephrussi, Monaco
          evening, Saint-Paul-de-Vence and Fondation Maeght day, private boat to the Îles de Lérins. The classic French
          honeymoon week: rural slow then coastal glamour.
        </p>

        <h3>The Loire châteaux route (5 nights)</h3>
        <p>
          5 nights at Domaine des Hauts de Loire in Onzain — Chambord and Cheverny day, Chenonceau morning, Amboise and
          Clos Lucé, Vouvray vineyard day, Villandry gardens. Optional dawn hot-air balloon over Chambord. The
          value-tier French honeymoon — five-star Relais experience at half Côte d&apos;Azur prices.
        </p>

        <h3>The Paris + Champagne weekend (3 nights)</h3>
        <p>
          1 night Paris (an opener at Le Bristol or the Ritz), 2 nights at Royal Champagne in Champillon — Krug or
          Bollinger private visit, Avenue de Champagne day, the infinity-pool spa above the Marne valley. The shortest
          credible French honeymoon — 45 minutes by TGV, three days of legendary cellars and the best vineyard view in
          northern France.
        </p>

        <h2>The honest take</h2>
        <p>
          A French honeymoon is best when it&apos;s committed — two regions done properly rather than five regions done
          on a Best-of-France itinerary. The country rewards depth. A week in the Loire châteaux teaches you more about
          France than a fortnight of hopscotching, and the room rates at the Loire and Champagne are low enough that
          you can stay at the actual flagship Relais &amp; Châteaux properties rather than the second-tier hotels you
          would settle for on the Côte d&apos;Azur. Pick your regions, book the right hotels, eat well, drink the local
          wine, and let the country do its work.
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
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-3">Start Planning</p>
        <h3 className="font-display text-2xl text-zinc-900 mb-4">Find your French honeymoon hotel.</h3>
        <Link
          href="/destinations"
          className="inline-block bg-rose-500 hover:bg-rose-600 text-white font-semibold text-sm px-6 py-3 rounded-full transition-colors"
        >
          Browse all destinations →
        </Link>
      </div>

      <div className="mt-12 text-center">
        <Link href="/destinations" className="text-rose-500 hover:underline text-sm font-semibold">
          ← Back to all honeymoon destinations
        </Link>
      </div>
    </div>
  )
}
