import type { Metadata } from 'next'
import * as fs from 'fs'
import * as path from 'path'
import { HOTEL_COMPARISONS } from '../../../../../../data/hotel-comparisons'
import { renderHotelComparisonPage, buildHotelComparisonMetadata } from '../../../../compare/hotels/[slug]/renderHotelComparison'

interface Props { params: Promise<{ slug: string }> }

// Only generate /fr/compare/hotels/[slug] when both hotels in the pair have
// a Spanish overlay — otherwise the page would ship English content under an
// /fr/ URL (duplicate / canonical mismatch with the English version).
export async function generateStaticParams() {
  const dir = path.join(process.cwd(), 'data', 'i18n', 'fr', 'hotels')
  if (!fs.existsSync(dir)) return []
  const overlaid = new Set(fs.readdirSync(dir).filter(f => f.endsWith('.json')).map(f => f.replace(/\.json$/, '')))
  return HOTEL_COMPARISONS
    .filter(c => overlaid.has(c.a) && overlaid.has(c.b))
    .map(c => ({ slug: c.slug }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  return buildHotelComparisonMetadata(slug, 'fr')
}

export default async function HotelComparisonPageFR({ params }: Props) {
  const { slug } = await params
  return renderHotelComparisonPage(slug, 'fr')
}
