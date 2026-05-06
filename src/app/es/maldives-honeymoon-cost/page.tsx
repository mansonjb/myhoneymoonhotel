import type { Metadata } from 'next'
import MaldivesHoneymoonCostPage from '../../maldives-honeymoon-cost/page'
import { getLocalizedPageManifest, tm } from '@/lib/getLocalizedPageManifest'
import { buildAlternates } from '@/lib/alternates'

export async function generateMetadata(): Promise<Metadata> {
  const manifest = getLocalizedPageManifest('maldives-honeymoon-cost', 'es')
  return {
    title: tm(manifest, 'metadata.title', 'Maldives Honeymoon Cost: 2026 Real Numbers ($6k–$80k+)'),
    description: tm(manifest, 'metadata.description', 'How much a Maldives honeymoon really costs in 2026.'),
    alternates: buildAlternates('/maldives-honeymoon-cost', 'es'),
    openGraph: {
      title: tm(manifest, 'metadata.ogTitle', 'Maldives Honeymoon Cost — 2026 Real Numbers'),
      description: tm(manifest, 'metadata.ogDescription', 'Four budget tiers, real hotel breakdowns, hidden costs.'),
    },
  }
}

export default function MaldivesHoneymoonCostPageES() {
  return <MaldivesHoneymoonCostPage />
}
