import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import { Instrument_Serif } from 'next/font/google'
import Link from 'next/link'
import Script from 'next/script'
import CookieBanner from '@/components/CookieBanner'
import NewsletterCapture from '@/components/NewsletterCapture'
import HeaderNav from '@/components/HeaderNav'
import { getAllHotels } from '@/lib/hotels'
import './globals.css'

// Destination → region + country mapping (shared with home page and nav)
const DEST_META: Record<string, { region: string; country: string }> = {
  // Indian Ocean
  'maldives':        { region: 'Indian Ocean', country: 'Maldives' },
  'seychelles':      { region: 'Indian Ocean', country: 'Seychelles' },
  'mauritius':       { region: 'Indian Ocean', country: 'Mauritius' },
  'zanzibar':        { region: 'Indian Ocean', country: 'Tanzania' },
  'mozambique':      { region: 'Indian Ocean', country: 'Mozambique' },
  'reunion':         { region: 'Indian Ocean', country: 'Réunion' },
  'sri-lanka':       { region: 'Indian Ocean', country: 'Sri Lanka' },
  // South Pacific
  'bora-bora':         { region: 'South Pacific', country: 'French Polynesia' },
  'french-polynesia':  { region: 'South Pacific', country: 'French Polynesia' },
  'fiji':              { region: 'South Pacific', country: 'Fiji' },
  'new-zealand':       { region: 'South Pacific', country: 'New Zealand' },
  'australia':         { region: 'South Pacific', country: 'Australia' },
  // Caribbean & Americas
  'st-lucia':          { region: 'Caribbean & Americas', country: 'St. Lucia' },
  'turks-and-caicos':  { region: 'Caribbean & Americas', country: 'Turks & Caicos' },
  'st-barts':          { region: 'Caribbean & Americas', country: 'St. Barts' },
  'caribbean':         { region: 'Caribbean & Americas', country: 'Caribbean' },
  'mexico':            { region: 'Caribbean & Americas', country: 'Mexico' },
  'costa-rica':        { region: 'Caribbean & Americas', country: 'Costa Rica' },
  'jamaica':           { region: 'Caribbean & Americas', country: 'Jamaica' },
  'antigua':           { region: 'Caribbean & Americas', country: 'Antigua' },
  'bahamas':           { region: 'Caribbean & Americas', country: 'Bahamas' },
  // Europe
  'santorini':  { region: 'Europe', country: 'Greece' },
  'greece':     { region: 'Europe', country: 'Greece' },
  'amalfi':     { region: 'Europe', country: 'Italy' },
  'sardegna':   { region: 'Europe', country: 'Italy' },
  'lake-como':  { region: 'Europe', country: 'Italy' },
  'italy':      { region: 'Europe', country: 'Italy' },
  'croatia':    { region: 'Europe', country: 'Croatia' },
  'portugal':   { region: 'Europe', country: 'Portugal' },
  'spain':      { region: 'Europe', country: 'Spain' },
  'switzerland':  { region: 'Europe', country: 'Switzerland' },
  'iceland':    { region: 'Europe', country: 'Iceland' },
  'norway':     { region: 'Europe', country: 'Norway' },
  'lapland':    { region: 'Europe', country: 'Finland' },
  // South America
  'argentina':  { region: 'South America', country: 'Argentina' },
  'peru':       { region: 'South America', country: 'Peru' },
  'galapagos':  { region: 'South America', country: 'Ecuador' },
  // North America
  'hawaii':     { region: 'North America', country: 'USA — Hawaii' },
  // Middle East
  'oman':    { region: 'Middle East', country: 'Oman' },
  'uae':     { region: 'Middle East', country: 'United Arab Emirates' },
  'jordan':  { region: 'Middle East', country: 'Jordan' },
  // Africa
  'cape-verde':   { region: 'Africa & Atlantic', country: 'Cape Verde' },
  'morocco':      { region: 'Africa & Atlantic', country: 'Morocco' },
  'kenya':        { region: 'Africa Safari', country: 'Kenya' },
  'tanzania':     { region: 'Africa Safari', country: 'Tanzania' },
  'south-africa': { region: 'Africa Safari', country: 'South Africa' },
  'botswana':     { region: 'Africa Safari', country: 'Botswana' },
  'rwanda':       { region: 'Africa Safari', country: 'Rwanda' },
  // Asia
  'thailand':     { region: 'Asia', country: 'Thailand' },
  'indonesia':    { region: 'Asia', country: 'Indonesia' },
  'bali':         { region: 'Asia', country: 'Indonesia' },
  'philippines':  { region: 'Asia', country: 'Philippines' },
  'vietnam':      { region: 'Asia', country: 'Vietnam' },
  'cambodia':     { region: 'Asia', country: 'Cambodia' },
  'japan':        { region: 'Asia', country: 'Japan' },
  'bhutan':       { region: 'Asia', country: 'Bhutan' },
}

// Pretty destination label (e.g. "santorini" → "Santorini", "st-barts" → "St. Barts")
function prettyLabel(slug: string): string {
  const overrides: Record<string, string> = {
    'st-lucia': 'St. Lucia',
    'st-barts': 'St. Barts',
    'turks-and-caicos': 'Turks & Caicos',
    'bora-bora': 'Bora Bora',
    'french-polynesia': 'Rest of French Polynesia',
    'amalfi': 'Amalfi Coast',
    'greece': 'Mainland & Mykonos',
    'hawaii': 'Hawaii',
    'reunion': 'Réunion',
    'cape-verde': 'Cape Verde',
    'sri-lanka': 'Sri Lanka',
    'costa-rica': 'Costa Rica',
    'south-africa': 'South Africa',
    'new-zealand': 'New Zealand',
  }
  return overrides[slug] ?? slug.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ')
}

const EXPERIENCES = [
  { slug: 'overwater-bungalows', label: 'Overwater Villas', icon: '🌊', sub: 'Sleep above the lagoon' },
  { slug: 'adults-only',         label: 'Adults-Only',       icon: '🥂', sub: 'No families. Pure romance.' },
  { slug: 'luxury',              label: 'Ultra-Luxury',      icon: '💎', sub: 'The finest on earth' },
  { slug: 'safari',              label: 'Safari & Bush',     icon: '🦁', sub: 'Big Five under canvas' },
  { slug: 'beach',               label: 'Beach',             icon: '🏖', sub: 'White sand, turquoise water' },
  { slug: 'wellness',            label: 'Wellness & Spa',    icon: '🧘', sub: 'Yoga, onsen, holistic retreats' },
]

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
  // Build destination list with live counts + region grouping for the nav dropdown
  const allHotels = getAllHotels()
  const counts = allHotels.reduce((acc, h) => {
    acc[h.destination] = (acc[h.destination] ?? 0) + 1
    return acc
  }, {} as Record<string, number>)
  const destinations = Object.entries(counts).map(([slug, count]) => ({
    slug,
    label: prettyLabel(slug),
    count,
    region: DEST_META[slug]?.region ?? 'Other',
    country: DEST_META[slug]?.country ?? prettyLabel(slug),
  }))

  return (
    <html lang="en" className={`${geist.variable} ${instrumentSerif.variable}`}>
      <head>
        {/* Lightweight hints — Lighthouse caps preconnect at 4, and each costs a TCP/TLS handshake.
            We keep just the ONE hard preconnect to the Stay22 script origin (it will load lazily
            but the click path then needs no handshake). Everything else is dns-prefetch only. */}
        <link rel="preconnect" href="https://scripts.stay22.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.stay22.com" />
        <link rel="dns-prefetch" href="https://www.booking.com" />
        <link rel="dns-prefetch" href="https://www.hotels.com" />
      </head>
      <body className="bg-white text-zinc-900 antialiased">

        {/* Stay22 LetMeAllez — lazy-loaded (only needed when user is about to click an outbound booking link).
            Saves ~110 KiB off the critical path and removes 134ms of forced-layout from the main thread. */}
        <Script
          id="stay22-letmeallez"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `(function (s, t, a, y, twenty, two) {
              s.Stay22 = s.Stay22 || {};
              s.Stay22.params = { lmaID: '69e61f107efbf4c77a364d5c' };
              twenty = t.createElement(a);
              two = t.getElementsByTagName(a)[0];
              twenty.async = 1;
              twenty.src = y;
              two.parentNode.insertBefore(twenty, two);
            })(window, document, 'script', 'https://scripts.stay22.com/letmeallez.js');`,
          }}
        />

        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-zinc-100">
          <div className="max-w-7xl mx-auto px-6 h-[60px] flex items-center justify-between relative">
            <Link href="/" className="flex items-center gap-1.5">
              <span className="text-rose-400 text-base leading-none">◆</span>
              <span className="text-sm font-semibold tracking-wide text-zinc-900 uppercase">MyHoneymoonHotel</span>
            </Link>

            <HeaderNav destinations={destinations} experiences={EXPERIENCES} />

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
                    <li><Link href="/about" className="hover:text-zinc-900 transition-colors">Our story</Link></li>
                    <li><Link href="/quiz" className="hover:text-zinc-900 transition-colors">Find my hotel</Link></li>
                    <li><Link href="/contact" className="hover:text-zinc-900 transition-colors">Contact</Link></li>
                    <li><Link href="/affiliate-disclosure" className="hover:text-zinc-900 transition-colors">Affiliate disclosure</Link></li>
                    <li><Link href="/privacy" className="hover:text-zinc-900 transition-colors">Privacy</Link></li>
                    <li><Link href="/terms" className="hover:text-zinc-900 transition-colors">Terms</Link></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Newsletter capture */}
            <div className="border-t border-zinc-100 pt-10 pb-10 mb-4 max-w-xl">
              <h3 className="font-display text-2xl text-zinc-900 mb-2">Get the best new honeymoon hotels</h3>
              <p className="text-zinc-500 text-sm mb-5 leading-relaxed">
                One email a month. The 3 newest properties we scored above 90, plus the honest pick of the month. No spam, unsubscribe any time.
              </p>
              <NewsletterCapture />
            </div>

            <div className="border-t border-zinc-100 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-zinc-400">
              <p>© 2026 My Honeymoon Hotel.</p>
              <p>Affiliate links via <a href="https://www.stay22.com" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-zinc-600">Stay22</a> — commission at no cost to you, never influences scores.</p>
            </div>
          </div>
        </footer>

        <CookieBanner />
      </body>
    </html>
  )
}
