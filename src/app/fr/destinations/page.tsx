import type { Metadata } from 'next'
import { buildAlternates } from '@/lib/alternates'
import DestinationsIndex from '../../destinations/page'

export const metadata: Metadata = {
  title: 'All Honeymoon Destinations',
  description: 'Browse all honeymoon destinations scored on myhoneymoonhotel.com.',
  alternates: buildAlternates('/destinations', 'fr'),
}

export default function DestinationsIndexFR() {
  return <DestinationsIndex />
}
