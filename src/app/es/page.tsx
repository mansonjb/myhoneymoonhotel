import type { Metadata } from 'next'
import HomePage from '../page'
import { buildAlternates } from '@/lib/alternates'

export const metadata: Metadata = {
  title: 'Hoteles para Luna de Miel — 611 Propiedades Puntuadas (2026)',
  description: 'Cada hotel puntuado en 9 criterios de romanticismo. Veredictos honestos, mejor habitación, itinerarios de 7 noches y email pre-llegada. Sin colocación pagada.',
  alternates: buildAlternates('/', 'es'),
}

export default function HomePageES() {
  return <HomePage />
}
