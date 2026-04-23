import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { COMPARISONS } from '../../../data/comparisons'

export const metadata: Metadata = {
  title: 'Honeymoon Destination Comparisons',
  description: 'Head-to-head comparisons of the most-searched honeymoon destinations. Maldives vs Bora Bora, Bali vs Thailand, Santorini vs Amalfi — expert verdicts for every couple.',
  alternates: { canonical: '/compare' },
}

const DEST_HERO: Record<string, string> = {
  maldives: '/images/hotels/velaa-private-island-maldives/hero.webp',
  'bora-bora': '/images/hotels/four-seasons-bora-bora/hero.webp',
  seychelles: '/images/hotels/six-senses-zil-pasyon-seychelles/hero.webp',
  bali: '/images/hotels/bulgari-resort-bali/hero.webp',
  thailand: '/images/hotels/amanpuri-phuket-thailand/hero.webp',
  santorini: '/images/hotels/canaves-oia-suites-greece/hero.webp',
  amalfi: '/images/hotels/le-sirenuse-positano-amalfi/hero.webp',
  kenya: '/images/hotels/angama-mara-kenya/hero.webp',
  tanzania: '/images/hotels/andbeyond-ngorongoro-crater-lodge-tanzania/hero.webp',
  mauritius: '/images/hotels/one-and-only-le-saint-geran-mauritius/hero.webp',
  fiji: '/images/hotels/laucala-island-resort-fiji/hero.webp',
  'st-lucia': '/images/hotels/jade-mountain-st-lucia/hero.webp',
  'turks-and-caicos': '/images/hotels/amanyara-turks-caicos/hero.webp',
  morocco: '/images/hotels/royal-mansour-marrakech-morocco/hero.webp',
  jordan: 'https://images.unsplash.com/photo-1544087931-1ec5d5e7e8be?w=1400&q=80',
  iceland: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=1400&q=80',
  switzerland: '/images/hotels/badrutts-palace-hotel-st-moritz-switzerland/hero.webp',
  greece: '/images/hotels/amanzoe-porto-heli-greece/hero.webp',
  mexico: '/images/hotels/las-ventanas-al-paraiso-mexico/hero.webp',
  caribbean: '/images/hotels/pink-sands-club-harbour-island-caribbean/hero.webp',
  'french-polynesia': '/images/hotels/the-brando-tetiaroa-french-polynesia/hero.webp',
}

export default function ComparisonsIndex() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">Head-to-Head</p>
      <h1 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-4">Honeymoon Comparisons</h1>
      <p className="text-zinc-500 text-lg max-w-2xl leading-relaxed mb-12">
        The destinations most couples actually waver between — scored, analysed, and called. No fluff, just opinionated head-to-heads by our editorial team.
      </p>

      <div className="grid md:grid-cols-2 gap-5">
        {COMPARISONS.map(c => (
          <Link
            key={c.slug}
            href={`/compare/${c.slug}`}
            className="group block border border-zinc-100 hover:border-rose-200 rounded-2xl overflow-hidden transition-colors"
          >
            <div className="grid grid-cols-2 aspect-[2/1] relative">
              <div className="relative overflow-hidden">
                <Image
                  src={DEST_HERO[c.a.destination] ?? '/images/hotels/four-seasons-bora-bora/hero.webp'}
                  alt={c.a.label}
                  fill
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 300px"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/40" />
              </div>
              <div className="relative overflow-hidden">
                <Image
                  src={DEST_HERO[c.b.destination] ?? '/images/hotels/velaa-private-island-maldives/hero.webp'}
                  alt={c.b.label}
                  fill
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 300px"
                />
                <div className="absolute inset-0 bg-gradient-to-bl from-transparent to-black/40" />
              </div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-rose-500 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                <span className="font-display text-lg">vs</span>
              </div>
            </div>
            <div className="p-6">
              <h2 className="font-display text-2xl text-zinc-900 mb-2 group-hover:text-rose-500 transition-colors">
                {c.a.label} <span className="text-zinc-300 text-lg">vs</span> {c.b.label}
              </h2>
              <p className="text-zinc-500 text-sm leading-relaxed">{c.tagline}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
