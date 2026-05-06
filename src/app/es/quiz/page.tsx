import type { Metadata } from 'next'
import { getAllHotels } from '@/lib/hotels'
import HoneymoonQuiz from '@/components/HoneymoonQuiz'
import { buildAlternates } from '@/lib/alternates'

export const metadata: Metadata = {
  title: 'Find My Perfect Honeymoon Hotel',
  description: 'Answer 4 questions and get personalised hotel recommendations matched to your style, budget, travel month and departure region.',
  alternates: buildAlternates('/quiz', 'es'),
}

export default function QuizPageES() {
  const hotels = getAllHotels()
  return <HoneymoonQuiz hotels={hotels} />
}
