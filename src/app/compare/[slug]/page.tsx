import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { COMPARISONS, getComparisonBySlug, getAllComparisonSlugs } from '../../../../data/comparisons'
import { getHotelsByDestination } from '@/lib/hotels'
import HotelCard from '@/components/HotelCard'

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return getAllComparisonSlugs().map(slug => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const cmp = getComparisonBySlug(slug)
  if (!cmp) return { title: 'Comparison not found' }
  const title = `${cmp.a.label} vs ${cmp.b.label} — Honeymoon Comparison`
  return {
    title,
    description: cmp.metaDescription,
    openGraph: { title, description: cmp.metaDescription, type: 'article' },
    alternates: { canonical: `/compare/${slug}` },
  }
}

// Hero image per destination (reuse what's on destination hubs)
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
}

export default async function ComparisonPage({ params }: Props) {
  const { slug } = await params
  const cmp = getComparisonBySlug(slug)
  if (!cmp) notFound()

  const heroA = DEST_HERO[cmp.a.destination] ?? '/images/hotels/four-seasons-bora-bora/hero.webp'
  const heroB = DEST_HERO[cmp.b.destination] ?? '/images/hotels/velaa-private-island-maldives/hero.webp'

  // Top 3 hotels in each destination
  const hotelsA = getHotelsByDestination(cmp.a.destination).slice(0, 3)
  const hotelsB = getHotelsByDestination(cmp.b.destination).slice(0, 3)

  // Count wins per side for the summary badge
  const aWins = cmp.criteria.filter(c => c.aWins === true).length
  const bWins = cmp.criteria.filter(c => c.aWins === false).length

  return (
    <>
      {/* JSON-LD: Article + FAQPage schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: `${cmp.a.label} vs ${cmp.b.label} — Honeymoon Comparison`,
              description: cmp.metaDescription,
              author: { '@type': 'Organization', name: 'My Honeymoon Hotel' },
              publisher: { '@type': 'Organization', name: 'My Honeymoon Hotel', url: 'https://myhoneymoonhotel.com' },
              datePublished: '2026-04-23',
            },
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: cmp.faqs.map(f => ({
                '@type': 'Question',
                name: f.q,
                acceptedAnswer: { '@type': 'Answer', text: f.a },
              })),
            },
          ]),
        }}
      />

      <article className="pb-24">
        {/* ── HERO ── */}
        <section className="relative">
          <div className="grid grid-cols-2 h-[60vh] min-h-[440px]">
            <div className="relative overflow-hidden">
              <Image src={heroA} alt={cmp.a.label} fill priority className="object-cover" sizes="50vw" />
              <div className="absolute inset-0 bg-gradient-to-br from-rose-900/30 to-black/50" />
              <div className="absolute bottom-10 left-8 sm:left-12 text-white">
                <div className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-200 mb-2">Option A</div>
                <div className="font-display text-4xl sm:text-5xl">{cmp.a.label}</div>
              </div>
            </div>
            <div className="relative overflow-hidden">
              <Image src={heroB} alt={cmp.b.label} fill className="object-cover" sizes="50vw" />
              <div className="absolute inset-0 bg-gradient-to-bl from-zinc-900/30 to-black/50" />
              <div className="absolute bottom-10 right-8 sm:right-12 text-white text-right">
                <div className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-200 mb-2">Option B</div>
                <div className="font-display text-4xl sm:text-5xl">{cmp.b.label}</div>
              </div>
            </div>
          </div>

          {/* VS badge in the middle */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-rose-500 text-white rounded-full w-20 h-20 flex items-center justify-center shadow-2xl">
            <span className="font-display text-3xl">vs</span>
          </div>

          <nav className="absolute top-6 left-6 flex items-center gap-2 text-white/60 text-xs">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-white/40">Compare</span>
            <span>/</span>
            <span className="text-white/70">{cmp.a.label} vs {cmp.b.label}</span>
          </nav>
        </section>

        <div className="max-w-5xl mx-auto px-6 py-14 space-y-16">
          {/* ── HEADLINE + VERDICT ── */}
          <section>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-4 text-center">Honeymoon Head-to-Head</p>
            <h1 className="font-display text-4xl sm:text-5xl text-zinc-900 text-center mb-5 leading-tight">
              {cmp.a.label} vs {cmp.b.label}
            </h1>
            <p className="text-center text-zinc-500 text-lg italic mb-10 max-w-2xl mx-auto">{cmp.tagline}</p>

            <div className="bg-zinc-50 border border-zinc-100 rounded-3xl p-8 sm:p-10">
              <div className="text-xs font-semibold tracking-widest uppercase text-rose-400 mb-3">Our Verdict</div>
              <p className="text-zinc-700 text-lg leading-relaxed">{cmp.verdict}</p>
            </div>
          </section>

          {/* ── TL;DR 3 CARDS ── */}
          <section>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-white border-2 border-rose-100 rounded-2xl p-5">
                <div className="text-[10px] font-semibold uppercase tracking-widest text-rose-500 mb-2">Pick A</div>
                <div className="font-semibold text-zinc-900 mb-2">{cmp.a.label}</div>
                <p className="text-zinc-600 text-sm leading-relaxed">{cmp.tldr.forA}</p>
              </div>
              <div className="bg-white border-2 border-zinc-100 rounded-2xl p-5">
                <div className="text-[10px] font-semibold uppercase tracking-widest text-zinc-500 mb-2">It's a tie</div>
                <div className="font-semibold text-zinc-900 mb-2">⚖️</div>
                <p className="text-zinc-600 text-sm leading-relaxed">{cmp.tldr.tie}</p>
              </div>
              <div className="bg-white border-2 border-rose-100 rounded-2xl p-5">
                <div className="text-[10px] font-semibold uppercase tracking-widest text-rose-500 mb-2">Pick B</div>
                <div className="font-semibold text-zinc-900 mb-2">{cmp.b.label}</div>
                <p className="text-zinc-600 text-sm leading-relaxed">{cmp.tldr.forB}</p>
              </div>
            </div>
          </section>

          {/* ── CRITERIA TABLE ── */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-2">Side-by-side</p>
                <h2 className="font-display text-3xl text-zinc-900">Compared on {cmp.criteria.length} criteria</h2>
              </div>
              <div className="flex gap-3 text-sm">
                <div className="text-center">
                  <div className="font-display text-2xl text-rose-500">{aWins}</div>
                  <div className="text-xs text-zinc-400">{cmp.a.label} wins</div>
                </div>
                <div className="text-center">
                  <div className="font-display text-2xl text-rose-500">{bWins}</div>
                  <div className="text-xs text-zinc-400">{cmp.b.label} wins</div>
                </div>
              </div>
            </div>

            <div className="border border-zinc-100 rounded-2xl overflow-hidden">
              <div className="grid grid-cols-[1fr_2fr_2fr] bg-zinc-50 border-b border-zinc-100 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                <div className="px-5 py-3">Criterion</div>
                <div className="px-5 py-3 border-l border-zinc-100">{cmp.a.label}</div>
                <div className="px-5 py-3 border-l border-zinc-100">{cmp.b.label}</div>
              </div>
              {cmp.criteria.map((c, i) => (
                <div key={i} className="grid grid-cols-[1fr_2fr_2fr] border-b border-zinc-50 last:border-b-0 hover:bg-zinc-50/40 transition-colors">
                  <div className="px-5 py-4 text-sm font-medium text-zinc-800">{c.label}</div>
                  <div className={`px-5 py-4 text-sm leading-relaxed border-l border-zinc-100 ${c.aWins === true ? 'bg-emerald-50/50 text-zinc-800 font-medium' : 'text-zinc-600'}`}>
                    {c.aWins === true && <span className="inline-block text-emerald-600 mr-1.5">✓</span>}
                    {c.aDetail}
                  </div>
                  <div className={`px-5 py-4 text-sm leading-relaxed border-l border-zinc-100 ${c.aWins === false ? 'bg-emerald-50/50 text-zinc-800 font-medium' : 'text-zinc-600'}`}>
                    {c.aWins === false && <span className="inline-block text-emerald-600 mr-1.5">✓</span>}
                    {c.bDetail}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── PICK SECTIONS ── */}
          <section className="grid lg:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-rose-50 to-white border border-rose-100 rounded-3xl p-8">
              <p className="text-xs font-semibold tracking-widest uppercase text-rose-500 mb-3">Decision Guide</p>
              <h3 className="font-display text-2xl text-zinc-900 mb-5">{cmp.pickA.title}</h3>
              <ul className="space-y-3">
                {cmp.pickA.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3 text-zinc-700 text-sm leading-relaxed">
                    <span className="text-rose-500 shrink-0 mt-1">◆</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-zinc-50 to-white border border-zinc-100 rounded-3xl p-8">
              <p className="text-xs font-semibold tracking-widest uppercase text-zinc-500 mb-3">Decision Guide</p>
              <h3 className="font-display text-2xl text-zinc-900 mb-5">{cmp.pickB.title}</h3>
              <ul className="space-y-3">
                {cmp.pickB.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3 text-zinc-700 text-sm leading-relaxed">
                    <span className="text-zinc-600 shrink-0 mt-1">◆</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* ── TOP HOTELS IN EACH ── */}
          {(hotelsA.length > 0 || hotelsB.length > 0) && (
            <section>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-2">Top picks</p>
              <h2 className="font-display text-3xl text-zinc-900 mb-8">Best honeymoon hotels in each</h2>

              {hotelsA.length > 0 && (
                <div className="mb-10">
                  <div className="flex items-center justify-between mb-5">
                    <h3 className="font-display text-xl text-zinc-900">{cmp.a.label}</h3>
                    <Link href={`/destinations/${cmp.a.destination}`} className="text-rose-500 text-sm font-medium hover:underline">
                      All {cmp.a.label} hotels →
                    </Link>
                  </div>
                  <div className="grid sm:grid-cols-3 gap-5">
                    {hotelsA.map(h => <HotelCard key={h.slug} hotel={h} />)}
                  </div>
                </div>
              )}

              {hotelsB.length > 0 && (
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <h3 className="font-display text-xl text-zinc-900">{cmp.b.label}</h3>
                    <Link href={`/destinations/${cmp.b.destination}`} className="text-rose-500 text-sm font-medium hover:underline">
                      All {cmp.b.label} hotels →
                    </Link>
                  </div>
                  <div className="grid sm:grid-cols-3 gap-5">
                    {hotelsB.map(h => <HotelCard key={h.slug} hotel={h} />)}
                  </div>
                </div>
              )}
            </section>
          )}

          {/* ── FAQ ── */}
          <section>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-2">Common questions</p>
            <h2 className="font-display text-3xl text-zinc-900 mb-8">FAQ</h2>
            <div className="space-y-4">
              {cmp.faqs.map((f, i) => (
                <details key={i} className="group border border-zinc-100 rounded-2xl overflow-hidden">
                  <summary className="cursor-pointer px-6 py-4 flex items-center justify-between font-medium text-zinc-900 hover:bg-zinc-50 transition-colors">
                    {f.q}
                    <span className="text-zinc-400 group-open:rotate-45 transition-transform text-xl leading-none">+</span>
                  </summary>
                  <div className="px-6 pb-5 text-zinc-600 text-sm leading-relaxed border-t border-zinc-50 pt-4">{f.a}</div>
                </details>
              ))}
            </div>
          </section>

          {/* ── MORE COMPARISONS ── */}
          <section className="pt-4 border-t border-zinc-100">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-5">Still comparing?</p>
            <h2 className="font-display text-2xl text-zinc-900 mb-6">More honeymoon head-to-heads</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {COMPARISONS.filter(c => c.slug !== slug).slice(0, 5).map(c => (
                <Link
                  key={c.slug}
                  href={`/compare/${c.slug}`}
                  className="group flex items-center justify-between px-5 py-4 border border-zinc-100 rounded-2xl hover:border-rose-200 hover:bg-rose-50 transition-colors"
                >
                  <span className="text-zinc-900 font-medium text-sm group-hover:text-rose-600">{c.a.label} vs {c.b.label}</span>
                  <span className="text-rose-400 group-hover:text-rose-600">→</span>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </article>
    </>
  )
}
