import type { Metadata } from 'next'
import BaliHoneymoonCostPage from '../../bali-honeymoon-cost/page'
import { getLocalizedPageManifest, tm } from '@/lib/getLocalizedPageManifest'
import { buildAlternates } from '@/lib/alternates'

export async function generateMetadata(): Promise<Metadata> {
  const manifest = getLocalizedPageManifest('bali-honeymoon-cost', 'es')
  return {
    title: tm(manifest, 'metadata.title', 'Bali Honeymoon Cost: 2026 Real Numbers'),
    description: tm(manifest, 'metadata.description', 'How much a Bali honeymoon really costs in 2026.'),
    alternates: buildAlternates('/bali-honeymoon-cost', 'es'),
    openGraph: {
      title: tm(manifest, 'metadata.ogTitle', 'Bali Honeymoon Cost — 2026 Real Numbers'),
      description: tm(manifest, 'metadata.ogDescription', 'Real budget tiers and breakdowns for a Bali honeymoon.'),
    },
  }
}

export default function BaliHoneymoonCostPageES() {
  return <BaliHoneymoonCostPage />
}
