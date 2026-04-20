import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Affiliate Disclosure',
  description: 'How myhoneymoonhotel.com earns revenue through affiliate partnerships.',
}

export default function AffiliateDisclosurePage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">Legal</p>
      <h1 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-8">Affiliate Disclosure</h1>
      <p className="text-zinc-400 text-sm mb-10">Last updated: April 2026</p>

      <div className="space-y-6 text-zinc-600 leading-relaxed">
        <section>
          <p className="text-lg text-zinc-800">
            myhoneymoonhotel.com participates in affiliate programmes. When you click a booking link and complete a reservation, we may earn a small commission — <strong>at no additional cost to you</strong>.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-zinc-900 mb-3">Our affiliate partners</h2>
          <p>
            We partner with <strong>Stay22</strong>, which aggregates affiliate relationships with major booking platforms:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li>Booking.com</li>
            <li>Hotels.com</li>
            <li>Expedia</li>
            <li>Agoda</li>
            <li>TripAdvisor</li>
            <li>Vrbo, Kayak, GetYourGuide</li>
          </ul>
          <p className="mt-4">
            When you click a "Check availability" or "Find the best price" button, Stay22's script attributes the click to our partner ID and tracks any subsequent booking.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-zinc-900 mb-3">Our editorial independence</h2>
          <p>
            This is the most important thing to know: <strong>our scores and recommendations are never influenced by commissions</strong>.
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li>Hotels do not pay to be listed, reviewed, or ranked.</li>
            <li>The Honeymoon Score is algorithmic and based on objective factors.</li>
            <li>We recommend hotels we genuinely believe are right for honeymooners — including hotels with which we have no affiliate relationship.</li>
            <li>When we identify caveats or reasons to skip a hotel, we say so clearly, regardless of whether we earn a commission.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl text-zinc-900 mb-3">Why this model</h2>
          <p>
            Affiliate revenue lets us keep the site free to use, with no pop-ups, no email walls, and no paid placement. If you find our content useful, the best way to support us is to book through our links — whichever platform you prefer.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-zinc-900 mb-3">FTC / EU compliance</h2>
          <p>
            This disclosure is provided in accordance with the US Federal Trade Commission (FTC) 16 CFR, Part 255 (Guides Concerning the Use of Endorsements and Testimonials in Advertising) and the European Union Directive 2005/29/EC on unfair commercial practices.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-zinc-900 mb-3">Questions?</h2>
          <p>
            Reach out at <a href="mailto:hello@myhoneymoonhotel.com" className="text-rose-500 underline">hello@myhoneymoonhotel.com</a>.
          </p>
        </section>
      </div>
    </div>
  )
}
