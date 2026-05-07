import type { Metadata } from 'next'
import { buildAlternates } from '@/lib/alternates'
import PrivacyPage from '../../privacy/page'

export const metadata: Metadata = {
  title: 'Privacy',
  description: 'Privacy policy for myhoneymoonhotel.com.',
  alternates: buildAlternates('/privacy', 'pt'),
}

export default function PrivacyPagePT() {
  return <PrivacyPage />
}
