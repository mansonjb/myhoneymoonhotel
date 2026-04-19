import type { Metadata } from 'next'
import { getAllHotels } from '@/lib/hotels'
import HoneymoonQuiz from '@/components/HoneymoonQuiz'

export const metadata: Metadata = {
  title: 'Find My Perfect Honeymoon Hotel',
  description: 'Answer 4 questions and get personalised hotel recommendations matched to your style, budget, travel month and departure region.',
}

export default function QuizPage() {
  const hotels = getAllHotels()
  return <HoneymoonQuiz hotels={hotels} />
}
