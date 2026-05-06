import type { Metadata } from 'next'
import { getAllDestinations } from '@/lib/hotels'
import { renderDestinationPage, buildDestinationMetadata } from '../../../destinations/[country]/renderDestination'

interface Props { params: Promise<{ country: string }> }

export async function generateStaticParams() {
  return getAllDestinations().map(d => ({ country: d }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country } = await params
  return buildDestinationMetadata(country, 'es')
}

export default async function DestinationPageES({ params }: Props) {
  const { country } = await params
  return renderDestinationPage(country, 'es')
}
