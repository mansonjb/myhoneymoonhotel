import type { Metadata } from 'next'
import { getAllComparisonSlugs } from '../../../../../data/comparisons'
import { renderComparisonPage, buildComparisonMetadata } from '../../../compare/[slug]/renderComparison'

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return getAllComparisonSlugs().map(slug => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  return buildComparisonMetadata(slug, 'fr')
}

export default async function ComparisonPageFR({ params }: Props) {
  const { slug } = await params
  return renderComparisonPage(slug, 'fr')
}
