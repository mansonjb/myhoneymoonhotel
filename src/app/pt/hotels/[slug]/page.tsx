import type { Metadata } from 'next'
import * as fs from 'fs'
import * as path from 'path'
import { renderHotelPage, buildHotelMetadata } from '../../../hotels/[slug]/renderHotel'

interface Props { params: Promise<{ slug: string }> }

// Only generate /pt/hotels/[slug] for hotels that have a Portuguese overlay.
// See ES sibling for rationale.
export async function generateStaticParams() {
  const dir = path.join(process.cwd(), 'data', 'i18n', 'pt', 'hotels')
  const slugs = fs.readdirSync(dir).filter(f => f.endsWith('.json')).map(f => f.replace(/\.json$/, ''))
  return slugs.map(slug => ({ slug }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  return buildHotelMetadata(slug, 'pt')
}

export default async function HotelPagePT({ params }: Props) {
  const { slug } = await params
  return renderHotelPage(slug, 'pt')
}
