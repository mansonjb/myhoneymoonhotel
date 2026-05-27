import type { Metadata } from 'next'
import { buildAlternates } from '@/lib/alternates'
import AffiliateDisclosurePage from '../../affiliate-disclosure/page'

export const metadata: Metadata = {
  title: 'Affiliate disclosure',
  description: 'Affiliate disclosure for myhoneymoonhotel.com.',
  alternates: buildAlternates('/affiliate-disclosure', 'fr'),
}

export default function AffiliateDisclosurePageFR() {
  return <AffiliateDisclosurePage />
}
