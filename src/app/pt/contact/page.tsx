import type { Metadata } from 'next'
import { buildAlternates } from '@/lib/alternates'
import ContactPage from '../../contact/page'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Reach the myhoneymoonhotel.com team.',
  alternates: buildAlternates('/contact', 'pt'),
}

export default function ContactPagePT() {
  return <ContactPage />
}
