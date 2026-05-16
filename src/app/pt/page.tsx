import type { Metadata } from 'next'
import HomePage from '../page'
import { buildAlternates } from '@/lib/alternates'

export const metadata: Metadata = {
  title: 'Hotéis para Lua de Mel — 611 Resorts Pontuados (2026)',
  description: 'Cada hotel pontuado em 9 critérios de romantismo. Veredictos honestos, melhor quarto, roteiros de 7 noites e e-mail pré-chegada. Sem placement pago.',
  alternates: buildAlternates('/', 'pt'),
}

export default function HomePagePT() {
  return <HomePage />
}
