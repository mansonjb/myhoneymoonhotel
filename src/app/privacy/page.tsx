import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How myhoneymoonhotel.com collects, uses, and protects your data.',
}

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20 prose prose-zinc">
      <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">Legal</p>
      <h1 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-8">Privacy Policy</h1>
      <p className="text-zinc-400 text-sm mb-10">Last updated: April 2026</p>

      <div className="space-y-6 text-zinc-600 leading-relaxed">
        <section>
          <h2 className="font-display text-2xl text-zinc-900 mb-3">Who we are</h2>
          <p>
            myhoneymoonhotel.com is a content website providing editorial reviews and information about honeymoon hotels. This Privacy Policy explains what limited personal data we collect and how we use it.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-zinc-900 mb-3">Data we collect</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Usage analytics</strong> — anonymised page views, referrers, approximate country (via Plausible Analytics or similar). No personal identifiers.</li>
            <li><strong>Cookies</strong> — only with your explicit consent. We use no advertising cookies and no cross-site tracking.</li>
            <li><strong>Affiliate click data</strong> — when you click a booking link, our affiliate partner (Stay22) receives the referrer URL to attribute commissions. See our <a href="/affiliate-disclosure" className="text-rose-500 underline">affiliate disclosure</a>.</li>
            <li><strong>Newsletter (optional)</strong> — if you subscribe, we store your email address solely to send you our honeymoon hotel updates. Unsubscribe link in every email.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl text-zinc-900 mb-3">Third-party services</h2>
          <p>We embed or link to:</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li><strong>Stay22</strong> — hotel map widgets and affiliate deep-links (see stay22.com/privacy)</li>
            <li><strong>Booking.com, Hotels.com, Expedia, Agoda, TripAdvisor</strong> — when you click to check availability</li>
            <li><strong>Unsplash</strong> — fallback hotel images</li>
            <li><strong>Vercel</strong> — hosting provider; see vercel.com/legal/privacy-policy</li>
          </ul>
          <p className="mt-3">These partners have their own privacy policies. We recommend reviewing them.</p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-zinc-900 mb-3">Your rights (GDPR)</h2>
          <p>
            If you are in the EU/UK, you have the right to access, rectify, delete, or port your personal data. You can also withdraw consent at any time. To exercise any of these rights, contact us at <a href="mailto:privacy@myhoneymoonhotel.com" className="text-rose-500 underline">privacy@myhoneymoonhotel.com</a>.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-zinc-900 mb-3">Data retention</h2>
          <p>
            Analytics data is retained for 12 months. Newsletter emails are retained until you unsubscribe. We do not sell, rent, or share your personal data with third parties for marketing purposes.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-zinc-900 mb-3">Contact</h2>
          <p>
            For any privacy-related question: <a href="mailto:privacy@myhoneymoonhotel.com" className="text-rose-500 underline">privacy@myhoneymoonhotel.com</a>.
          </p>
        </section>
      </div>
    </div>
  )
}
