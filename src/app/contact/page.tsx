import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Reach the myhoneymoonhotel.com team.',
}

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-20">
      <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">Get in touch</p>
      <h1 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-6">Contact</h1>
      <p className="text-zinc-500 text-lg leading-relaxed mb-12">
        Tell us which hotel made your honeymoon, which one didn't, or which we should review next. Real replies from real humans — usually within 48 hours.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 mb-14">
        <div className="border border-zinc-100 rounded-2xl p-6">
          <div className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-2">General</div>
          <a href="mailto:hello@myhoneymoonhotel.com" className="text-rose-500 font-medium text-lg hover:underline">
            hello@myhoneymoonhotel.com
          </a>
          <p className="text-zinc-400 text-sm mt-2">Tips, feedback, corrections, hotel suggestions.</p>
        </div>

        <div className="border border-zinc-100 rounded-2xl p-6">
          <div className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-2">Privacy & legal</div>
          <a href="mailto:privacy@myhoneymoonhotel.com" className="text-rose-500 font-medium text-lg hover:underline">
            privacy@myhoneymoonhotel.com
          </a>
          <p className="text-zinc-400 text-sm mt-2">Data requests, GDPR, takedowns.</p>
        </div>

        <div className="border border-zinc-100 rounded-2xl p-6">
          <div className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-2">Partnerships</div>
          <a href="mailto:partners@myhoneymoonhotel.com" className="text-rose-500 font-medium text-lg hover:underline">
            partners@myhoneymoonhotel.com
          </a>
          <p className="text-zinc-400 text-sm mt-2">Hotels, DMCs, PR agencies, travel brands.</p>
        </div>

        <div className="border border-zinc-100 rounded-2xl p-6">
          <div className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-2">Press</div>
          <a href="mailto:press@myhoneymoonhotel.com" className="text-rose-500 font-medium text-lg hover:underline">
            press@myhoneymoonhotel.com
          </a>
          <p className="text-zinc-400 text-sm mt-2">Interviews, quotes, editorial collaborations.</p>
        </div>
      </div>

      <div className="bg-rose-50 border border-rose-100 rounded-2xl p-6 text-zinc-700 leading-relaxed">
        <strong className="text-zinc-900 block mb-2">One thing we can't help with</strong>
        We can't book hotels on your behalf or intervene with a reservation. For availability, rates, and booking support, contact the hotel directly or your booking platform (Booking.com / Hotels.com / etc.).
      </div>
    </div>
  )
}
