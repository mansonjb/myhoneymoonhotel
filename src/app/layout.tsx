import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import Link from 'next/link'
import './globals.css'

const geist = Geist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | My Honeymoon Hotel',
    default: 'My Honeymoon Hotel — Find Your Perfect Honeymoon',
  },
  description: 'The definitive guide to honeymoon hotels worldwide. Curated by experts, scored for romance.',
  metadataBase: new URL('https://myhoneymoonhotel.com'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const stay22PartnerId = process.env.NEXT_PUBLIC_STAY22_PARTNER_ID || 'myhoneymoonhotel'

  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://cdn.stay22.com/allez/allez.js"
          data-stay22-partner-id={stay22PartnerId}
        />
      </head>
      <body className={`${geist.className} bg-white text-gray-900 antialiased`}>
        <header className="border-b border-gray-100 px-6 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-rose-700">
              My Honeymoon Hotel
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
              <Link href="/destinations" className="hover:text-rose-700 transition-colors">Destinations</Link>
              <Link href="/experiences/overwater-bungalows" className="hover:text-rose-700 transition-colors">Overwater Villas</Link>
              <Link href="/experiences/adults-only" className="hover:text-rose-700 transition-colors">Adults Only</Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="border-t border-gray-100 mt-16 px-6 py-8 text-sm text-gray-400">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© 2026 My Honeymoon Hotel. All rights reserved.</p>
            <p>
              This site uses affiliate links via{' '}
              <a href="https://www.stay22.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">
                Stay22
              </a>
              . We may earn a commission at no extra cost to you.
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}
