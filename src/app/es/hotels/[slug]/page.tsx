import type { Metadata } from 'next'
import { getAllHotels } from '@/lib/hotels'
import { renderHotelPage, buildHotelMetadata } from '../../../hotels/[slug]/renderHotel'

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return getAllHotels().map(h => ({ slug: h.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  return buildHotelMetadata(slug, 'es')
}

export default async function HotelPageES({ params }: Props) {
  const { slug } = await params
  return renderHotelPage(slug, 'es')
}
