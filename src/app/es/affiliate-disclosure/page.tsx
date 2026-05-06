import type { Metadata } from 'next'
import { buildAlternates } from '@/lib/alternates'
import AffiliateDisclosurePage from '../../affiliate-disclosure/page'

export const metadata: Metadata = {
  title: 'Affiliate disclosure',
  description: 'Affiliate disclosure for myhoneymoonhotel.com.',
  alternates: buildAlternates('/affiliate-disclosure', 'es'),
}

export default function AffiliateDisclosurePageES() {
  return <AffiliateDisclosurePage />
}
