import type { Metadata } from 'next'
import {
  renderDestinationMonthPage,
  buildDestinationMonthMetadata,
  TARGETS,
  MONTHS,
} from '../../../../destinations/[country]/[month]/renderDestinationMonth'

interface Props { params: Promise<{ country: string; month: string }> }

export async function generateStaticParams() {
  return TARGETS.flatMap((country) => MONTHS.map((month) => ({ country, month })))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country, month } = await params
  return buildDestinationMonthMetadata(country, month, 'es')
}

export default async function DestinationMonthPageES({ params }: Props) {
  const { country, month } = await params
  return renderDestinationMonthPage(country, month, 'es')
}
