import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Terms and conditions for using myhoneymoonhotel.com.',
}

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">Legal</p>
      <h1 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-8">Terms of Use</h1>
      <p className="text-zinc-400 text-sm mb-10">Last updated: April 2026</p>

      <div className="space-y-6 text-zinc-600 leading-relaxed">
        <section>
          <h2 className="font-display text-2xl text-zinc-900 mb-3">1. Acceptance</h2>
          <p>
            By accessing myhoneymoonhotel.com ("the Site"), you agree to these Terms. If you do not agree, do not use the Site.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-zinc-900 mb-3">2. Editorial content</h2>
          <p>
            All reviews, scores, itineraries, and recommendations are editorial opinions based on publicly available data, hotel websites, review platforms (TripAdvisor, Booking.com), and industry sources. Content is provided for informational purposes only. We do not guarantee accuracy, completeness, or fitness for a particular purpose.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-zinc-900 mb-3">3. Honeymoon Score</h2>
          <p>
            The Honeymoon Score is an algorithmic rating we compute for each property based on factors like adults-only status, couples-review share, amenities, and awards. It is a proprietary editorial metric, not an official hotel rating. Hotels do not pay to be scored or ranked.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-zinc-900 mb-3">4. Bookings & third parties</h2>
          <p>
            myhoneymoonhotel.com does not sell, process, or manage hotel reservations. All bookings happen on third-party platforms (Booking.com, Hotels.com, Expedia, Agoda, TripAdvisor, or the hotel's own site). Your booking is governed by the booking platform's terms, not ours. We are not liable for any issue, dispute, cancellation, refund, or loss arising from your booking.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-zinc-900 mb-3">5. Affiliate relationships</h2>
          <p>
            We earn affiliate commissions when you book through our links. See our <a href="/affiliate-disclosure" className="text-rose-500 underline">Affiliate Disclosure</a>. This never influences our scores or recommendations.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-zinc-900 mb-3">6. Intellectual property</h2>
          <p>
            All editorial content (verdicts, itineraries, caveats, FAQs) is © myhoneymoonhotel.com. Photos credit respective owners (hotels, Google Places, Unsplash). You may quote or link to the site with attribution, but you may not scrape, republish, or syndicate content without written permission.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-zinc-900 mb-3">7. Limitation of liability</h2>
          <p>
            To the maximum extent permitted by law, myhoneymoonhotel.com is not liable for direct, indirect, incidental, consequential, or punitive damages arising from your use of the Site or reliance on its content.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-zinc-900 mb-3">8. Changes</h2>
          <p>
            We may update these Terms at any time. Changes take effect when posted. Continued use of the Site constitutes acceptance of the updated Terms.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-zinc-900 mb-3">9. Governing law</h2>
          <p>
            These Terms are governed by French law. Any dispute will be submitted to the competent courts of France.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-zinc-900 mb-3">Contact</h2>
          <p>
            <a href="mailto:hello@myhoneymoonhotel.com" className="text-rose-500 underline">hello@myhoneymoonhotel.com</a>
          </p>
        </section>
      </div>
    </div>
  )
}
