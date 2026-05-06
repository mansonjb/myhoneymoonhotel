import type { Metadata } from 'next'
import { buildAlternates } from '@/lib/alternates'
import AboutPage from '../../about/page'

export const metadata: Metadata = {
  title: 'About — The Honeymoon Hotel Guide',
  description: 'Why we built myhoneymoonhotel.com, how we score hotels, and what makes a honeymoon actually great.',
  alternates: buildAlternates('/about', 'es'),
}

export default function AboutPageES() {
  return <AboutPage />
}
