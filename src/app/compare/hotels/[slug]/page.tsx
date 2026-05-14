import type { Metadata } from 'next'
import { getAllHotelComparisonSlugs } from '../../../../../data/hotel-comparisons'
import { renderHotelComparisonPage, buildHotelComparisonMetadata } from './renderHotelComparison'

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return getAllHotelComparisonSlugs().map(slug => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  return buildHotelComparisonMetadata(slug, 'en')
}

export default async function HotelComparisonPage({ params }: Props) {
  const { slug } = await params
  return renderHotelComparisonPage(slug, 'en')
}
