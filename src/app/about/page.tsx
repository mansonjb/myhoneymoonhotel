import type { Metadata } from 'next'
import Link from 'next/link'
import { buildAlternates } from '@/lib/alternates'

export const metadata: Metadata = {
  title: 'About — The Honeymoon Hotel Guide',
  description: 'Why we built myhoneymoonhotel.com, how we score hotels, and what makes a honeymoon actually great.',
  alternates: buildAlternates('/about'),
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'My Honeymoon Hotel',
  alternateName: 'MyHoneymoonHotel',
  url: 'https://myhoneymoonhotel.com',
  logo: 'https://myhoneymoonhotel.com/icon.png',
  description: 'The honest guide to honeymoon hotels. 624 properties scored on 9 romance-specific criteria across 77 destinations. Never paid placement.',
  email: 'contact@myhoneymoonhotel.com',
  foundingDate: '2026',
  sameAs: [
    'https://www.linkedin.com/company/myhoneymoonhotel',
    'https://www.pinterest.com/myhoneymoonhotel',
  ],
}

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">About</p>
      <h1 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-8">
        The honeymoon guide we wished we had.
      </h1>

      {/* EDITORIAL TEAM CARD */}
      <section className="my-10 flex items-start gap-5 p-6 rounded-2xl bg-rose-50/60 border border-rose-100">
        <div className="w-20 h-20 shrink-0 rounded-full bg-rose-100 flex items-center justify-center text-rose-500 text-3xl">
          ◆
        </div>
        <div className="text-sm text-zinc-700 leading-relaxed">
          <div className="font-semibold text-zinc-900 text-base">MyHoneymoonHotel Editors</div>
          <div className="text-zinc-500 text-xs uppercase tracking-[0.15em] mt-1">Editorial team</div>
          <p className="mt-3">
            A small team with a background in travel editorial, SEO, and software. We specialise in
            luxury romance travel and the unglamorous logistics that make it actually work —
            overwater villa transfers, adults-only verification, monsoon-shoulder pricing, and the
            difference between a brochure suite and the one worth booking.
          </p>
          <p className="mt-3 text-zinc-600">
            Reach us: <a href="mailto:contact@myhoneymoonhotel.com" className="text-rose-500 underline">contact@myhoneymoonhotel.com</a>
          </p>
        </div>
      </section>

      <div className="space-y-7 text-zinc-600 leading-relaxed text-lg">
        <p>
          Planning a honeymoon is the most emotionally loaded hotel search most couples ever do. You're picking one trip that has to work — overwater villa, romantic beach, adults-only, private pool, right month, right flight, right budget. The stakes are high. The research is exhausting.
        </p>

        <p>
          Most travel sites are paid-placement aggregators or anonymous forums. You read 40 TripAdvisor reviews, two Reddit threads, and six Pinterest pins — and you still don't know if the resort you're considering is right for <em>you</em>, specifically, for a <em>honeymoon</em>.
        </p>

        <p className="font-display text-2xl text-zinc-900 leading-snug">
          That's the gap we built this site to fill.
        </p>

        <p>
          For every hotel, we generate an honest editorial review covering:
        </p>

        <ul className="list-disc pl-6 space-y-3">
          <li><strong className="text-zinc-900">A verdict</strong> — is this place actually worth the premium, and if so, for whom?</li>
          <li><strong className="text-zinc-900">A Honeymoon Score (0-100)</strong> — algorithmic, based on adults-only status, couples-review share, spa, awards, pool, beach access, and service tier.</li>
          <li><strong className="text-zinc-900">The best room to book</strong> — and why. Not the entry-level, not the most expensive — the one that makes the trip.</li>
          <li><strong className="text-zinc-900">A 7-night itinerary</strong> — day by day, with specific experiences worth the effort.</li>
          <li><strong className="text-zinc-900">Honest caveats</strong> — what we'd skip, what might disappoint, what nobody tells you in marketing copy.</li>
          <li><strong className="text-zinc-900">A pre-arrival email template</strong> — ready to copy-paste, so the hotel actually treats you like honeymooners.</li>
          <li><strong className="text-zinc-900">A true-cost breakdown</strong> — 7 nights for two, with flights, transfers, dining, excursions, and tips.</li>
        </ul>

        <h2 className="font-display text-3xl text-zinc-900 pt-8">How the scores work</h2>
        <p>
          The Honeymoon Score is <em>not</em> an overall hotel quality score. It's specifically tuned for couples on honeymoon. A family resort with a huge buffet and kids' club might get 5 stars on TripAdvisor and 65 on our score. An adults-only boutique with 20 rooms and no pool might get 4 stars and 92 on our score. The formula favours privacy, romance, service, and adult-only atmosphere.
        </p>

        <h2 className="font-display text-3xl text-zinc-900 pt-8">How we make money</h2>
        <p>
          We earn affiliate commissions when you book through our links. Hotels do not pay to be listed, scored, or ranked. We recommend hotels we genuinely believe are right for honeymooners — including hotels with which we have no affiliate relationship. Read the full <Link href="/affiliate-disclosure" className="text-rose-500 underline">affiliate disclosure</Link>.
        </p>

        <h2 className="font-display text-3xl text-zinc-900 pt-8">Who built this</h2>
        <p>
          The site is run by a small team with a background in travel content, SEO, and software engineering. We've personally stayed at dozens of the properties we cover, and we rely on a combination of first-hand reporting, public review data, industry editorial sources, and AI-assisted drafting — every recommendation is reviewed by humans before publication.
        </p>

        <p>
          Questions, feedback, or a hotel we should cover next? <Link href="/contact" className="text-rose-500 underline">Get in touch</Link>.
        </p>
      </div>
    </div>
  )
}
