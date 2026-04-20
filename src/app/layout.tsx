import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import { Instrument_Serif } from 'next/font/google'
import Link from 'next/link'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' })
const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-instrument',
})

export const metadata: Metadata = {
  title: {
    template: '%s | My Honeymoon Hotel',
    default: 'My Honeymoon Hotel — Find Your Perfect Honeymoon',
  },
  description: 'Every hotel scored for romance. Real verdicts, room picks, 7-night itineraries and the email to send before arrival.',
  metadataBase: new URL('https://myhoneymoonhotel.com'),
  openGraph: { siteName: 'My Honeymoon Hotel', type: 'website' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const stay22PartnerId = process.env.NEXT_PUBLIC_STAY22_PARTNER_ID || 'myhoneymoonhotel'

  return (
    <html lang="en" className={`${geist.variable} ${instrumentSerif.variable}`}>
      <head>
        <script async src="https://cdn.stay22.com/allez/allez.js" data-stay22-partner-id={stay22PartnerId} />
      </head>
      <body className="bg-white text-zinc-900 antialiased">

        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-zinc-100">
          <div className="max-w-7xl mx-auto px-6 h-[60px] flex items-center justify-between">
            <Link href="/" className="flex items-center gap-1.5">
              <span className="text-rose-400 text-base leading-none">◆</span>
              <span className="text-sm font-semibold tracking-wide text-zinc-900 uppercase">MyHoneymoonHotel</span>
            </Link>

            <nav className="hidden md:flex items-center gap-8 text-[13px] text-zinc-500">
              <Link href="/destinations/maldives" className="hover:text-zinc-900 transition-colors">Maldives</Link>
              <Link href="/destinations/bora-bora" className="hover:text-zinc-900 transition-colors">Bora Bora</Link>
              <Link href="/destinations/st-lucia" className="hover:text-zinc-900 transition-colors">St. Lucia</Link>
              <Link href="/experiences/overwater-bungalows" className="hover:text-zinc-900 transition-colors">Overwater</Link>
              <Link href="/experiences/adults-only" className="hover:text-zinc-900 transition-colors">Adults-Only</Link>
              <Link href="/experiences/safari" className="hover:text-zinc-900 transition-colors">Safari</Link>
            </nav>

            <Link
              href="/quiz"
              className="text-[13px] font-medium text-white bg-rose-500 hover:bg-rose-600 px-5 py-2 rounded-full transition-colors"
            >
              Find My Hotel
            </Link>
          </div>
        </header>

        <main className="pt-[60px]">{children}</main>

        {/* Footer */}
        <footer className="border-t border-zinc-100 mt-32">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="flex flex-col lg:flex-row justify-between gap-12 mb-12">
              {/* Brand */}
              <div className="max-w-xs">
                <div className="flex items-center gap-1.5 mb-4">
                  <span className="text-rose-400 text-base">◆</span>
                  <span className="text-sm font-semibold tracking-wide uppercase">MyHoneymoonHotel</span>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed">The honest guide to honeymoon hotels. Every property scored on 9 romance-specific criteria — never paid placement.</p>
              </div>

              {/* Links grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-4">Destinations</h3>
                  <ul className="space-y-2.5 text-sm text-zinc-500">
                    {[['Maldives','maldives'],['Bora Bora','bora-bora'],['St. Lucia','st-lucia'],['Turks & Caicos','turks-and-caicos'],['Santorini','santorini'],['Bali','bali']].map(([l,s])=>(
                      <li key={s}><Link href={`/destinations/${s}`} className="hover:text-zinc-900 transition-colors">{l}</Link></li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-4">Experiences</h3>
                  <ul className="space-y-2.5 text-sm text-zinc-500">
                    {[['Overwater Villas','overwater-bungalows'],['Adults-Only','adults-only'],['Safari','safari'],['Ultra-Luxury','luxury'],['Beach','beach'],['Wellness','wellness']].map(([l,s])=>(
                      <li key={s}><Link href={`/experiences/${s}`} className="hover:text-zinc-900 transition-colors">{l}</Link></li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-4">About</h3>
                  <ul className="space-y-2.5 text-sm text-zinc-500">
                    <li className="text-zinc-400 text-xs leading-relaxed">Honeymoon Score™ — our algorithmic ranking on romance-specific criteria</li>
                    <li className="mt-4 flex gap-2 flex-wrap">
                      <span className="border border-zinc-200 text-zinc-400 rounded-full px-3 py-1 text-xs">4,200+ Hotels</span>
                      <span className="border border-zinc-200 text-zinc-400 rounded-full px-3 py-1 text-xs">30+ Destinations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-t border-zinc-100 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-zinc-400">
              <p>© 2026 My Honeymoon Hotel.</p>
              <p>Affiliate links via <a href="https://www.stay22.com" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-zinc-600">Stay22</a> — commission at no cost to you, never influences scores.</p>
            </div>
          </div>
        </footer>

      </body>
    </html>
  )
}
