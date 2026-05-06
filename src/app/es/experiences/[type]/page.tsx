import type { Metadata } from 'next'
import { getAllExperienceTypes } from '@/lib/hotels'
import ExperiencePage, { generateMetadata as enGenerateMetadata } from '../../../experiences/[type]/page'
import { buildAlternates } from '@/lib/alternates'

interface Props { params: Promise<{ type: string }> }

export async function generateStaticParams() {
  return getAllExperienceTypes().map(t => ({ type: t }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { type } = await params
  const enMeta = await enGenerateMetadata({ params: Promise.resolve({ type }) })
  return {
    ...enMeta,
    alternates: buildAlternates(`/experiences/${type}`, 'es'),
  }
}

export default function ExperiencePageES({ params }: Props) {
  return <ExperiencePage params={params} />
}
