import type { Metadata } from 'next'
import Link from 'next/link'
import { buildAlternates } from '@/lib/alternates'
import AuthorByline from '@/components/AuthorByline'
import { AUTHOR } from '@/data/author'

export const metadata: Metadata = {
  title: 'The Honeymoon Packing List: Tropical, Safari, City and Cold-Weather',
  description: 'A practical honeymoon packing list — the genuine essentials for tropical, safari, city and cold-weather honeymoons, with PDF download.',
  alternates: buildAlternates('/honeymoon-packing-list'),
}

const url = 'https://myhoneymoonhotel.com/honeymoon-packing-list'

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article', inLanguage: 'en',
  headline: 'The honeymoon packing list: tropical, safari, city, cold-weather',
  description: 'A no-fluff honeymoon packing list across four climate types.',
  author: { '@type': 'Person', name: AUTHOR.name, url: AUTHOR.url, jobTitle: AUTHOR.role },
  publisher: { '@type': 'Organization', name: 'My Honeymoon Hotel', logo: { '@type': 'ImageObject', url: 'https://myhoneymoonhotel.com/icon.png' } },
  datePublished: '2026-06-07', dateModified: '2026-06-07',
  mainEntityOfPage: url,
}
const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://myhoneymoonhotel.com/' },
    { '@type': 'ListItem', position: 2, name: 'Honeymoon packing list', item: url },
  ],
}
const howToSchema = {
  '@context': 'https://schema.org', '@type': 'HowTo', inLanguage: 'en',
  name: 'How to pack for your honeymoon',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Pick the climate type', text: 'Identify whether your destination is tropical, safari, city or cold-weather. Each requires a different core kit.' },
    { '@type': 'HowToStep', position: 2, name: 'Pack the universal items', text: 'Passports, marriage certificate copy (for upgrades), travel insurance, basic medicine kit, two-prong adapter, dressy outfit each, comfortable walking shoes.' },
    { '@type': 'HowToStep', position: 3, name: 'Add the climate-specific items', text: 'Use the list below for your climate type.' },
    { '@type': 'HowToStep', position: 4, name: 'Test pack 48 hours before departure', text: 'Lay everything out, weigh the bag, identify what you actually use vs what you think you need.' },
  ],
}

export default function HoneymoonPackingListPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      {[articleSchema, breadcrumbSchema, howToSchema].map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">Planning Guide</p>
      <h1 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-6 leading-tight">
        The honeymoon packing list, by climate type.
      </h1>
      <p className="text-zinc-500 text-lg leading-relaxed mb-2">
        Most packing lists are 80 items long and useless. This one is short, climate-specific, and built from the things
        honeymoon couples consistently forget — or pack too much of. Pick your climate, ignore everything else.
      </p>
      <AuthorByline />

      <div className="prose prose-zinc max-w-none prose-headings:font-display prose-headings:text-zinc-900 prose-p:text-zinc-600 prose-p:leading-relaxed prose-a:text-rose-500 prose-a:no-underline hover:prose-a:underline mt-10">

        <h2>The universal kit (every honeymoon)</h2>
        <ul>
          <li><strong>Two passports + photocopy.</strong> The copy in checked luggage.</li>
          <li><strong>Marriage certificate copy.</strong> Upgrade ammunition at check-in; you’ll be surprised how often it works.</li>
          <li><strong>Travel insurance with medical evacuation.</strong> Not a luxury.</li>
          <li><strong>One dressy outfit each.</strong> For the signature dinner. Take photos.</li>
          <li><strong>Universal adapter.</strong> One per device-pair, not per person.</li>
          <li><strong>Mini medicine kit.</strong> Paracetamol, Imodium, antihistamine, plasters, anti-inflammatory.</li>
          <li><strong>Phone charger + spare cable.</strong> Cables fail at the worst time.</li>
          <li><strong>Earplugs + eye mask.</strong> Travel days, jetlag adjustment.</li>
        </ul>

        <h2>Tropical (Maldives, Bora Bora, Caribbean, Bali, Seychelles)</h2>
        <ul>
          <li>Reef-safe sunscreen (SPF 50). Mainstream brands are reef-toxic.</li>
          <li>Polarised sunglasses.</li>
          <li>Two swimsuits per person — they don’t dry overnight.</li>
          <li>Light cover-up / sarong each.</li>
          <li>Reef shoes if you’re going to coral.</li>
          <li>Insect repellent for dusk.</li>
          <li>Underwater camera (Olympus TG-7 or equivalent) — not just a phone.</li>
          <li>Light rain jacket (tropical squalls).</li>
          <li>Hat with chin strap (boat days).</li>
        </ul>

        <h2>Safari (Kenya, Tanzania, Botswana, South Africa)</h2>
        <ul>
          <li>Neutral-colored clothing (khaki, olive, grey). No bright colors, no white.</li>
          <li>Layers — game drives start cold and end hot.</li>
          <li>Wide-brim hat, closed-toe shoes, long pants for evening (insects).</li>
          <li>Binoculars (8x42 minimum; the lodge’s loaners are usually mediocre).</li>
          <li>DEET-based insect repellent.</li>
          <li>Sunscreen + lip balm with SPF.</li>
          <li>Headlamp or small torch.</li>
          <li>Camera with 200mm+ lens (or rent on arrival).</li>
          <li>Malaria prophylaxis if region requires.</li>
        </ul>

        <h2>City (Paris, Tokyo, New York, Venice)</h2>
        <ul>
          <li>One pair of walking shoes already broken in.</li>
          <li>One smart outfit each for restaurants.</li>
          <li>Layers: a city honeymoon swings 10°C between morning and evening.</li>
          <li>Crossbody bag (anti-pickpocket) for the city days.</li>
          <li>Small umbrella.</li>
          <li>Backup phone battery — maps eat charge.</li>
          <li>Reservation list printed in case phone fails.</li>
        </ul>

        <h2>Cold-weather (Iceland, Lapland, Patagonia, Banff)</h2>
        <ul>
          <li>Real winter layers: merino base, mid-layer fleece, hardshell jacket and pants.</li>
          <li>Waterproof insulated boots (not fashion boots).</li>
          <li>Glove system: liner + insulated outer.</li>
          <li>Buff/balaclava, beanie, wool socks (three pairs).</li>
          <li>Hand warmers.</li>
          <li>Sunglasses (snow glare).</li>
          <li>Lip balm + moisturizer (the air is brutal).</li>
          <li>Swimsuit (hot springs, hotel pools).</li>
        </ul>

        <h2>Get the printable PDF</h2>
        <p>
          Subscribe to the My Honeymoon Hotel newsletter and we&rsquo;ll send the full PDF version of this list (universal +
          all four climates, one page each). One email a month after that, the 3 newest properties we scored above 90.
        </p>
        <p>
          <Link href="/#newsletter-heading" className="not-prose inline-block bg-rose-500 hover:bg-rose-600 text-white font-semibold text-sm px-6 py-3 rounded-full transition-colors">Subscribe and get the PDF →</Link>
        </p>

        <p>
          Related: <Link href="/how-to-plan-a-honeymoon">how to plan a honeymoon</Link> ·{' '}
          <Link href="/last-minute-honeymoon">last-minute honeymoon</Link>
        </p>
      </div>
    </div>
  )
}
