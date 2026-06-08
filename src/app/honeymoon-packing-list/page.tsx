import type { Metadata } from 'next'
import Link from 'next/link'
import { buildAlternates } from '@/lib/alternates'
import AuthorByline from '@/components/AuthorByline'
import { AUTHOR } from '@/data/author'
import { PACKING_CONTENT, type PackingItem } from '@/lib/longtail-content/packing'
import FAQAccordion from '@/components/longtail/FAQAccordion'
import SectionDivider from '@/components/longtail/SectionDivider'

export const metadata: Metadata = {
  title: 'The Honeymoon Packing List: Tropical, Safari, City and Cold-Weather',
  description: "A practical honeymoon packing list — the genuine essentials for tropical, safari, city and cold-weather honeymoons, plus what nobody packs but should and what to leave home.",
  alternates: buildAlternates('/honeymoon-packing-list'),
}

const url = 'https://myhoneymoonhotel.com/honeymoon-packing-list'

function ItemList({ items }: { items: PackingItem[] }) {
  return (
    <ul className="not-prose mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
      {items.map((it, i) => (
        <li key={i} className="border border-zinc-100 rounded-xl px-5 py-4 bg-white hover:border-rose-100 transition-colors">
          <p className="font-semibold text-zinc-900 text-sm flex items-start gap-2">
            <span className="text-rose-400 shrink-0">◆</span>
            <span>{it.item}</span>
          </p>
          <p className="text-zinc-500 text-sm mt-1.5 leading-relaxed pl-5">{it.note}</p>
        </li>
      ))}
    </ul>
  )
}

const CLIMATES = [
  { id: 'tropical', label: 'Tropical', sub: 'Maldives · Bora Bora · Caribbean · Bali' },
  { id: 'safari', label: 'Safari', sub: 'Kenya · Tanzania · Botswana · Rwanda' },
  { id: 'city', label: 'City', sub: 'Venice · Paris · Tokyo · Lisbon' },
  { id: 'cold', label: 'Cold-weather', sub: 'Iceland · Lapland · Patagonia · Banff' },
] as const

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

  const climateMap: Record<string, { intro: string; items: PackingItem[] }> = {
    tropical: c.tropical,
    safari: c.safari,
    city: c.city,
    cold: c.cold,
  }

  return (
    <>
      {[articleSchema, breadcrumbSchema, howToSchema, faqSchemaJson].map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      <header className="max-w-3xl mx-auto px-6 pt-20 pb-8">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">Planning Guide</p>
        <h1 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-6 leading-tight">
          The honeymoon packing list, by climate type
        </h1>
        <p className="text-zinc-500 text-lg leading-relaxed mb-6">{c.intro}</p>
        <AuthorByline />
        <div className="mt-10 bg-rose-50/60 border border-rose-100 rounded-2xl p-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-rose-500 mb-2">In short</p>
          <p className="text-zinc-700 leading-relaxed">
            One universal layer plus a climate overlay (tropical, safari, city, cold-weather). Pack the eight universals every time, then add only the climate section that matches your destination. Skip the heels.
          </p>
        </div>
      </header>

      <section className="max-w-5xl mx-auto px-6 mt-12">
        <SectionDivider label="Universal kit" />
        <h2 className="font-display text-3xl text-zinc-900 mb-3">The universal kit (every honeymoon)</h2>
        <p className="text-zinc-500 max-w-3xl mb-6">Eight items that travel on every honeymoon regardless of destination.</p>
        <ItemList items={c.universal} />
      </section>

      <section className="max-w-5xl mx-auto px-6 mt-16">
        <SectionDivider label="By climate" />
        <h2 className="font-display text-3xl text-zinc-900 mb-3">Climate overlays</h2>
        <p className="text-zinc-500 max-w-3xl mb-8">Pick the one that matches your trip and add it to the universal kit.</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {CLIMATES.map(cl => (
            <a key={cl.id} href={`#${cl.id}`} className="block border border-zinc-100 rounded-2xl p-4 bg-white hover:border-rose-200 hover:bg-rose-50/30 transition-colors">
              <p className="font-display text-lg text-zinc-900">{cl.label}</p>
              <p className="text-zinc-500 text-xs mt-1 leading-relaxed">{cl.sub}</p>
            </a>
          ))}
        </div>

        {CLIMATES.map(cl => {
          const block = climateMap[cl.id]
          return (
            <div key={cl.id} id={cl.id} className="mt-12 scroll-mt-24">
              <h3 className="font-display text-2xl text-zinc-900 mb-2">{cl.label} — <span className="text-zinc-500 font-normal text-lg">{cl.sub}</span></h3>
              <p className="text-zinc-600 leading-relaxed">{block.intro}</p>
              <ItemList items={block.items} />
            </div>
          )
        })}
      </section>

      <section className="max-w-5xl mx-auto px-6 mt-16">
        <SectionDivider label="Nobody packs but should" />
        <div className="bg-rose-50/60 border border-rose-100 rounded-2xl p-6">
          <h2 className="font-display text-2xl text-zinc-900 mb-2">What nobody packs but should</h2>
          <p className="text-zinc-600 mb-2 leading-relaxed">The small category that turns a generic trip into a smooth one.</p>
          <ItemList items={c.nobodyPacks} />
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 mt-12">
        <SectionDivider label="Skip these" />
        <div className="border-l-4 border-red-300 bg-red-50/40 rounded-r-2xl p-6">
          <h2 className="font-display text-2xl text-zinc-900 mb-2">What to skip</h2>
          <p className="text-zinc-600 mb-2 leading-relaxed">Items that come home unworn on 90% of honeymoons.</p>
          <ItemList items={c.whatToSkip} />
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 mt-16">
        <div className="bg-gradient-to-br from-rose-50 to-amber-50/40 border border-rose-100 rounded-2xl p-8 text-center">
          <h2 className="font-display text-2xl text-zinc-900 mb-3">Get the printable PDF</h2>
          <p className="text-zinc-600 mb-5 leading-relaxed">Sign up for the newsletter and we&rsquo;ll send the one-page printable version (universal + all four climate overlays + the &lsquo;nobody packs but should&rsquo; list).</p>
          <Link href="/#newsletter-heading" className="inline-block bg-rose-500 hover:bg-rose-600 text-white font-semibold text-sm px-6 py-3 rounded-full transition-colors">
            Subscribe and get the PDF →
          </Link>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 mt-12">
        <div className="prose prose-zinc max-w-none prose-headings:font-display prose-headings:text-zinc-900 prose-p:text-zinc-600 prose-p:leading-relaxed prose-a:text-rose-500 prose-a:no-underline hover:prose-a:underline">
          <h2>The honest take</h2>
          <p>{c.closing}</p>

          <p>
            Related: <Link href="/how-to-plan-a-honeymoon">how to plan a honeymoon</Link> ·{' '}
            <Link href="/last-minute-honeymoon">last-minute honeymoon</Link>
          </p>
        </div>
      </div>

      <section className="max-w-3xl mx-auto px-6 mt-20 pb-24">
        <SectionDivider label="FAQ" />
        <h2 className="font-display text-3xl text-zinc-900 mb-8">Frequently asked questions</h2>
        <FAQAccordion items={c.faqs} />
      </section>
    </>
  )
}
