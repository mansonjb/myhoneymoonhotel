import type { Metadata } from 'next'
import * as fs from 'fs'
import * as path from 'path'
import { renderHotelPage, buildHotelMetadata } from '../../../hotels/[slug]/renderHotel'

interface Props { params: Promise<{ slug: string }> }

// Only generate /es/hotels/[slug] for hotels that have a Spanish content
// overlay. Hotels without an ES overlay 404 here so we don't ship duplicate
// EN content under /es/ URLs (Google would flag as thin/duplicate
// translation and demote on hreflang signals).
export async function generateStaticParams() {
  const dir = path.join(process.cwd(), 'data', 'i18n', 'es', 'hotels')
  const slugs = fs.readdirSync(dir).filter(f => f.endsWith('.json')).map(f => f.replace(/\.json$/, ''))
  return slugs.map(slug => ({ slug }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  return buildHotelMetadata(slug, 'es')
}

export default async function HotelPageES({ params }: Props) {
  const { slug } = await params
  return renderHotelPage(slug, 'es')
}
