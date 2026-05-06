import type { Metadata } from 'next'
import HomePage from '../page'
import { buildAlternates } from '@/lib/alternates'

export const metadata: Metadata = {
  title: 'My Honeymoon Hotel — Find Your Perfect Honeymoon',
  description: 'Every hotel scored for romance. Real verdicts, room picks, 7-night itineraries and the email to send before arrival.',
  alternates: buildAlternates('/', 'es'),
}

export default function HomePageES() {
  return <HomePage />
}
