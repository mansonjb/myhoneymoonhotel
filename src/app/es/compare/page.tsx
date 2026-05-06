import type { Metadata } from 'next'
import { buildAlternates } from '@/lib/alternates'
import CompareIndex from '../../compare/page'

export const metadata: Metadata = {
  title: 'Honeymoon Destination Comparisons',
  description: 'Head-to-head comparisons of the most-searched honeymoon destinations.',
  alternates: buildAlternates('/compare', 'es'),
}

export default function CompareIndexES() {
  return <CompareIndex />
}
