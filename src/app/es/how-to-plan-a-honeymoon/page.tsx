import type { Metadata } from 'next'
import HowToPlanPage from '../../how-to-plan-a-honeymoon/page'
import { getLocalizedPageManifest, tm } from '@/lib/getLocalizedPageManifest'
import { buildAlternates } from '@/lib/alternates'

export async function generateMetadata(): Promise<Metadata> {
  const manifest = getLocalizedPageManifest('how-to-plan-a-honeymoon', 'es')
  return {
    title: tm(manifest, 'metadata.title', 'How to Plan a Honeymoon: Complete 2026 Guide'),
    description: tm(manifest, 'metadata.description', 'A step-by-step playbook to plan a honeymoon in 2026.'),
    alternates: buildAlternates('/how-to-plan-a-honeymoon', 'es'),
    openGraph: {
      title: tm(manifest, 'metadata.ogTitle', 'How to Plan a Honeymoon — Complete 2026 Guide'),
      description: tm(manifest, 'metadata.ogDescription', 'Step-by-step playbook for planning a honeymoon.'),
    },
  }
}

export default function HowToPlanPageES() {
  return <HowToPlanPage />
}
