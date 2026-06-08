import type { Metadata } from 'next'
import Link from 'next/link'
import { buildAlternates } from '@/lib/alternates'
import AuthorByline from '@/components/AuthorByline'
import { AUTHOR } from '@/data/author'
import { PACKING_CONTENT, type PackingItem } from '@/lib/longtail-content/packing'

export const metadata: Metadata = {
  title: 'The Honeymoon Packing List: Tropical, Safari, City and Cold-Weather',
  description: "A practical honeymoon packing list — the genuine essentials for tropical, safari, city and cold-weather honeymoons, plus what nobody packs but should and what to leave home.",
  alternates: buildAlternates('/honeymoon-packing-list'),
}

const url = 'https://myhoneymoonhotel.com/honeymoon-packing-list'

function ItemList({ items }: { items: PackingItem[] }) {
  return (
    <ul className="not-prose mt-4 space-y-3">
      {items.map((it, i) => (
        <li key={i} className="border border-zinc-100 rounded-xl px-5 py-4">
          <p className="font-semibold text-zinc-900 text-sm">{it.item}</p>
          <p className="text-zinc-500 text-sm mt-1 leading-relaxed">{it.note}</p>
        </li>
      ))}
    </ul>
  )
}

export default function HoneymoonPackingListPage() {
  const c = PACKING_CONTENT

  const articleSchema = {
    '@context': 'https://schema.org', '@type': 'Article', inLanguage: 'en',
    headline: 'The honeymoon packing list: tropical, safari, city, cold-weather',
    description: 'A no-fluff honeymoon packing list across four climate types — plus what nobody packs but should and what to leave home.',
    author: { '@type': 'Person', name: AUTHOR.name, url: AUTHOR.url, jobTitle: AUTHOR.role },
    publisher: { '@type': 'Organization', name: 'My Honeymoon Hotel', logo: { '@type': 'ImageObject', url: 'https://myhoneymoonhotel.com/icon.png' } },
    datePublished: '2026-06-07', dateModified: '2026-06-08',
    mainEntityOfPage: url,
  }
  const breadcrumbSchema = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://myhoneymoonhotel.com/' },
      { '@type': 'ListItem', position: 2, name: 'Honeymoon packing list', item: url },
    ],
  }
  const faqSchemaJson = {
    '@context': 'https://schema.org', '@type': 'FAQPage', inLanguage: 'en',
    mainEntity: c.faqs.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
  }
  const howToSchema = {
    '@context': 'https://schema.org', '@type': 'HowTo', inLanguage: 'en',
    name: 'How to pack for your honeymoon',
    step: [
      { '@type': 'HowToStep', position: 1, name: 'Pick the climate type', text: 'Identify whether your destination is tropical, safari, city or cold-weather. Each requires a different core kit.' },
      { '@type': 'HowToStep', position: 2, name: 'Pack the universal layer', text: 'Passports, marriage certificate copy, travel insurance, mini medicine kit, adapter, dressy outfit, earplugs.' },
      { '@type': 'HowToStep', position: 3, name: 'Add the climate overlay', text: 'Use the appropriate climate section from this list.' },
      { '@type': 'HowToStep', position: 4, name: 'Test pack 48 hours out', text: 'Lay everything out, weigh the bag, remove anything you would not actually use.' },
    ],
  }

  return (
    <>
      <div className="max-w-3xl mx-auto px-6 py-20">
        {[articleSchema, breadcrumbSchema, howToSchema, faqSchemaJson].map((s, i) => (
          <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
        ))}
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">Planning Guide</p>
        <h1 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-6 leading-tight">
          The honeymoon packing list, by climate type.
        </h1>
        <p className="text-zinc-500 text-lg leading-relaxed mb-2">{c.intro}</p>
        <AuthorByline />

        <div className="prose prose-zinc max-w-none prose-headings:font-display prose-headings:text-zinc-900 prose-p:text-zinc-600 prose-p:leading-relaxed prose-a:text-rose-500 prose-a:no-underline hover:prose-a:underline mt-10">

          <h2>The universal kit (every honeymoon)</h2>
          <p>The eight items below go on every trip regardless of destination — they cover documents, health, sleep and the small detail items that come up everywhere.</p>
          <ItemList items={c.universal} />

          <h2>Tropical — Maldives, Bora Bora, Caribbean, Bali, Seychelles</h2>
          <p>{c.tropical.intro}</p>
          <ItemList items={c.tropical.items} />

          <h2>Safari — Kenya, Tanzania, Botswana, South Africa, Rwanda</h2>
          <p>{c.safari.intro}</p>
          <ItemList items={c.safari.items} />

          <h2>City — Venice, Paris, Tokyo, New York, Lisbon</h2>
          <p>{c.city.intro}</p>
          <ItemList items={c.city.items} />

          <h2>Cold-weather — Iceland, Lapland, Norway, Patagonia, Banff</h2>
          <p>{c.cold.intro}</p>
          <ItemList items={c.cold.items} />

          <h2>What nobody packs but should</h2>
          <p>The small category of items that turn a generic trip into a smooth one. None of these is essential; all of them solve a specific honeymoon failure mode.</p>
          <ItemList items={c.nobodyPacks} />

          <h2>What to skip</h2>
          <p>The items that come home unworn on 90% of honeymoons. Removing these saves 3-4 kg of luggage weight and most of the second suitcase.</p>
          <ItemList items={c.whatToSkip} />

          <h2>The honest take</h2>
          <p>{c.closing}</p>

          <h2>Get the printable PDF</h2>
          <p>Sign up for the newsletter and we&rsquo;ll send the one-page printable version (universal + all four climate overlays + the &lsquo;nobody packs but should&rsquo; list).</p>
          <p>
            <Link href="/#newsletter-heading" className="not-prose inline-block bg-rose-500 hover:bg-rose-600 text-white font-semibold text-sm px-6 py-3 rounded-full transition-colors">Subscribe and get the PDF →</Link>
          </p>

          <p>
            Related: <Link href="/how-to-plan-a-honeymoon">how to plan a honeymoon</Link> ·{' '}
            <Link href="/last-minute-honeymoon">last-minute honeymoon</Link>
          </p>
        </div>
      </div>

      <section className="mt-16 max-w-3xl mx-auto px-6">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">FAQ</p>
        <h2 className="font-display text-3xl text-zinc-900 mb-8">Frequently asked questions</h2>
        <div className="space-y-3">
          {c.faqs.map((f, i) => (
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
