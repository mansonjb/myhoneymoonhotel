import type { Metadata } from 'next'
import { getAllExperienceTypes } from '@/lib/hotels'
import { buildExperienceMetadata, renderExperiencePage } from '../../../experiences/[type]/renderExperience'

interface Props { params: Promise<{ type: string }> }

export async function generateStaticParams() {
  return getAllExperienceTypes().map(t => ({ type: t }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { type } = await params
  return buildExperienceMetadata(type, 'fr')
}

export default async function ExperiencePageFR({ params }: Props) {
  const { type } = await params
  return renderExperiencePage(type, 'fr')
}
