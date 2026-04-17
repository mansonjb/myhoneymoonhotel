import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getHotelsByExperience, getAllExperienceTypes } from '@/lib/hotels'
import HotelCard from '@/components/HotelCard'

const experienceLabels: Record<string, { title: string; description: string }> = {
  'overwater-bungalows': {
    title: 'Overwater Bungalow Honeymoons',
    description: 'Wake up above the water. These hotels offer the most iconic overwater villa experiences for honeymooners worldwide.',
  },
  'adults-only': {
    title: 'Adults-Only Honeymoon Resorts',
    description: 'No kids, no noise — just the two of you. These resorts are designed exclusively for couples.',
  },
  'safari': {
    title: 'Safari Honeymoons',
    description: 'Romance meets wilderness. These lodges combine luxury accommodation with unforgettable wildlife experiences.',
  },
  'minimoon': {
    title: 'Minimoon Hotels',
    description: 'Short on time, big on romance. Perfect for a 2–4 night honeymoon closer to home.',
  },
  'ski': {
    title: 'Ski & Mountain Honeymoons',
    description: 'Cosy up après-ski. These mountain retreats are ideal for winter weddings and couples who love the mountains.',
  },
  'luxury': {
    title: 'Luxury Honeymoon Hotels',
    description: 'The finest properties for the most important trip of your life.',
  },
  'wellness': {
    title: 'Wellness & Spa Honeymoons',
    description: 'Relax, reconnect, restore. These properties are designed around well-being for couples.',
  },
}

interface Props {
  params: Promise<{ type: string }>
}

export async function generateStaticParams() {
  return getAllExperienceTypes().map(t => ({ type: t }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { type } = await params
  const label = experienceLabels[type]
  return {
    title: label?.title || `${type.replace(/-/g, ' ')} Honeymoon Hotels`,
    description: label?.description || `Curated ${type.replace(/-/g, ' ')} hotels for honeymooners.`,
  }
}

export default async function ExperiencePage({ params }: Props) {
  const { type } = await params
  const hotels = getHotelsByExperience(type)
  const label = experienceLabels[type] || {
    title: `${type.replace(/-/g, ' ')} Honeymoon Hotels`,
    description: `Curated hotels for couples seeking a ${type.replace(/-/g, ' ')} honeymoon experience.`,
  }

  if (hotels.length === 0) notFound()

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="mb-10">
        <p className="text-rose-600 text-sm font-medium uppercase tracking-wide mb-2">Experience Guide</p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{label.title}</h1>
        <p className="text-gray-500 text-lg max-w-2xl">{label.description}</p>
        <p className="text-gray-400 text-sm mt-2">{hotels.length} hotels · All scored ≥ 50</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {hotels.map(hotel => (
          <HotelCard key={hotel.slug} hotel={hotel} />
        ))}
      </div>
    </div>
  )
}
