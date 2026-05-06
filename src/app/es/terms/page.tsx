import type { Metadata } from 'next'
import { buildAlternates } from '@/lib/alternates'
import TermsPage from '../../terms/page'

export const metadata: Metadata = {
  title: 'Terms of use',
  description: 'Terms of use for myhoneymoonhotel.com.',
  alternates: buildAlternates('/terms', 'es'),
}

export default function TermsPageES() {
  return <TermsPage />
}
