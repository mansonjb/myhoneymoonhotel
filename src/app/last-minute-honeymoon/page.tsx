import type { Metadata } from 'next'
import Link from 'next/link'
import { buildAlternates } from '@/lib/alternates'
import AuthorByline from '@/components/AuthorByline'
import { AUTHOR } from '@/data/author'

export const metadata: Metadata = {
  title: 'Last-Minute Honeymoon: The Honest Take on Booking Inside 30 Days',
  description: 'Can you actually book a 5-star honeymoon last minute? The honest answer — which destinations have late availability, which months work, and the trade-offs.',
  alternates: buildAlternates('/last-minute-honeymoon'),
}

const url = 'https://myhoneymoonhotel.com/last-minute-honeymoon'

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article', inLanguage: 'en',
  headline: 'Last-minute honeymoon: the honest take.',
  description: 'A realistic guide to booking a honeymoon inside 30 days — destinations, properties, trade-offs.',
  author: { '@type': 'Person', name: AUTHOR.name, url: AUTHOR.url, jobTitle: AUTHOR.role },
  publisher: { '@type': 'Organization', name: 'My Honeymoon Hotel', logo: { '@type': 'ImageObject', url: 'https://myhoneymoonhotel.com/icon.png' } },
  datePublished: '2026-06-07', dateModified: '2026-06-07',
  mainEntityOfPage: url,
}
const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://myhoneymoonhotel.com/' },
    { '@type': 'ListItem', position: 2, name: 'Last-minute honeymoon', item: url },
  ],
}

const faqs = [
  { question: 'Can you actually book a 5-star honeymoon hotel last minute?', answer: 'Yes, but only in specific destinations, specific months, and at specific properties. The Maldives off-season (May-Oct excluding July-August peak European holiday), the Caribbean shoulder (April-June), and Mexico\'s Riviera Maya have real last-minute availability. The Maldives in February or Bora Bora at Christmas does not — those rooms sell six to nine months out.' },
  { question: 'How much do last-minute deals actually save?', answer: 'Real numbers: 15-25% off published rates on the Maldives in May-October, 10-20% in the Caribbean April-June, occasionally more via Virtuoso-tier advisors who have unsold inventory. The cheap-flight illusion mostly isn\'t real — flight prices are usually worse, not better, last-minute.' },
  { question: 'Where should I look first?', answer: 'Three places, in order: a Virtuoso travel advisor (they have unsold Four Seasons / Belmond inventory at this point in the cycle), the hotel\'s direct sales team via email (they\'ll discount to fill), and aggregators like Mr & Mrs Smith for under-radar boutique properties.' },
  { question: 'What if my dates are in peak season?', answer: 'Then last-minute almost never works — peak inventory sold months ago. Pivot the destination instead: a 5-star Caribbean shoulder-season honeymoon will outperform a 3-star peak-season Maldives every time.' },
  { question: 'Is last-minute compatible with a great honeymoon?', answer: 'Yes, if you pick well. The single biggest risk isn\'t the hotel — it\'s rushing the planning. Give yourself 48 hours to make the destination decision, then book the best property you can afford that night.' },
]

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage', inLanguage: 'en',
  mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
}

export default function LastMinuteHoneymoonPage() {
  return (
    <>
      <div className="max-w-3xl mx-auto px-6 py-20">
        {[articleSchema, breadcrumbSchema, faqSchema].map((s, i) => (
          <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
        ))}
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">Planning Guide</p>
        <h1 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-6 leading-tight">
          Last-minute honeymoon: the honest take.
        </h1>
        <p className="text-zinc-500 text-lg leading-relaxed mb-2">
          The clean answer to &ldquo;can I book a 5-star honeymoon inside 30 days&rdquo; is: depends on the destination,
          the season, and how flexible you actually are. Some windows are wide open. Others have been gone since last
          October. Here&rsquo;s the honest map.
        </p>
        <AuthorByline />

        <div className="prose prose-zinc max-w-none prose-headings:font-display prose-headings:text-zinc-900 prose-p:text-zinc-600 prose-p:leading-relaxed prose-a:text-rose-500 prose-a:no-underline hover:prose-a:underline mt-10">

          <h2>Destinations with genuine last-minute availability</h2>
          <h3>Maldives — May through October (excluding mid-July / August)</h3>
          <p>
            The SW monsoon technically begins in May but the Maldives stays mostly dry, with passing tropical showers
            rather than washouts. Resort occupancy drops from European school-holiday peak, and properties like Anantara
            Veli, Conrad Rangali, even LUX South Ari take last-minute bookings. Expect 15-25% off published rates.
          </p>
          <h3>Caribbean — April through June</h3>
          <p>
            The window between Easter peak and US summer school holidays. Turks &amp; Caicos, St. Lucia, Antigua all have
            real availability. The official hurricane season is June 1, but statistically meaningful storms cluster in
            August-October — early June is genuinely safe for honeymoons.
          </p>
          <h3>Mexico — most of the year except Christmas/NY and Spring Break</h3>
          <p>
            The Riviera Maya all-inclusive market has the deepest last-minute inventory in the honeymoon world. Excellence
            Playa Mujeres, Hotel Esencia, the smaller adult-only resorts all take 14-day bookings without issue.
          </p>
          <h3>Bali — March-June and September-October</h3>
          <p>
            Indonesia&rsquo;s shoulder seasons. Ubud and the southern beaches both deliver, and the long-haul flights are
            usually still bookable at non-extortionate prices.
          </p>

          <h2>Destinations where last-minute almost never works</h2>
          <ul>
            <li>Maldives / Bora Bora in December-March peak.</li>
            <li>St. Barts at Christmas.</li>
            <li>Aman properties anywhere, any season.</li>
            <li>Anywhere in Europe (Côte d&rsquo;Azur, Amalfi) in August.</li>
            <li>Safari camps in dry season (June-October) — sold months out.</li>
          </ul>

          <h2>The 48-hour booking process</h2>
          <p>
            <strong>Hour 0-12.</strong> Pick the destination. Use the windows above as the hard filter. Don&rsquo;t try
            to do the destination you originally wanted at the wrong time.
          </p>
          <p>
            <strong>Hour 12-24.</strong> Contact a Virtuoso or Fine Hotels &amp; Resorts advisor (free), give them dates
            + budget, ask what they have right now. They&rsquo;ll have access to inventory you can&rsquo;t see online,
            plus perks (breakfast, $100 credit) included.
          </p>
          <p>
            <strong>Hour 24-48.</strong> Make the decision. Last-minute inventory moves fast. Hesitating 72 hours often
            means losing the room you wanted.
          </p>

          <h2>The honest take</h2>
          <p>
            A last-minute honeymoon can be excellent — sometimes better than one planned six months out, because the
            decision pressure forces clarity. The risk isn&rsquo;t availability; it&rsquo;s trying to book the
            destination you fell in love with at the wrong time of year. Pivot the destination, not the dates, and the
            last-minute honeymoon mostly works.
          </p>

          <p>
            Related: <Link href="/honeymoon-on-a-budget">honeymoon on a budget</Link> ·{' '}
            <Link href="/all-inclusive-honeymoon">all-inclusive honeymoon</Link> ·{' '}
            <Link href="/honeymoon-packing-list">packing list</Link>
          </p>
        </div>
      </div>

      <section className="mt-16 max-w-3xl mx-auto px-6">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">FAQ</p>
        <h2 className="font-display text-3xl text-zinc-900 mb-8">Frequently asked questions</h2>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <details key={i} className="group border border-zinc-100 rounded-2xl overflow-hidden">
              <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-medium text-zinc-900 text-sm hover:bg-zinc-50 transition-colors list-none">
                <span>{f.question}</span>
                <svg className="w-4 h-4 text-zinc-400 shrink-0 ml-4 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
              </summary>
              <div className="px-6 pb-6 pt-2">
                <p className="text-zinc-500 text-sm leading-relaxed">{f.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </section>
    </>
  )
}
