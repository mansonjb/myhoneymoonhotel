import type { Metadata } from 'next'
import BestResortsPage from '../../../best/honeymoon-resorts-2026/page'
import { getLocalizedPageManifest, tm } from '@/lib/getLocalizedPageManifest'
import { buildAlternates } from '@/lib/alternates'

export async function generateMetadata(): Promise<Metadata> {
  const manifest = getLocalizedPageManifest('best-honeymoon-resorts-2026', 'es')
  return {
    title: tm(manifest, 'metadata.title', 'Best Honeymoon Resorts 2026 — Top Properties for Couples'),
    description: tm(manifest, 'metadata.description', 'The 50 best honeymoon resorts of 2026.'),
    alternates: buildAlternates('/best/honeymoon-resorts-2026', 'es'),
    openGraph: {
      title: tm(manifest, 'metadata.ogTitle', 'Best Honeymoon Resorts 2026'),
      description: tm(manifest, 'metadata.ogDescription', 'The 50 best honeymoon resorts of 2026.'),
    },
  }
}

export default function BestResortsPageES() {
  return <BestResortsPage />
}
