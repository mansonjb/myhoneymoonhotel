import type { Metadata } from 'next'
import { getAllExperienceTypes } from '@/lib/hotels'
import { buildExperienceMetadata, renderExperiencePage } from './renderExperience'

interface Props { params: Promise<{ type: string }> }

export async function generateStaticParams() {
  return getAllExperienceTypes().map(t => ({ type: t }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { type } = await params
  return buildExperienceMetadata(type, 'en')
}

export default async function ExperiencePage({ params }: Props) {
  const { type } = await params
  return renderExperiencePage(type, 'en')
}
