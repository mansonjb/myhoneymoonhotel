import Link from 'next/link'
import { DESTINATION_META } from '../../../data/destinations'

interface DestinationPickCardProps {
  slug: string
  displayLabel: string
  tagline?: string
  whyHere?: string
}

export default function DestinationPickCard({ slug, displayLabel, tagline, whyHere }: DestinationPickCardProps) {
  const meta = DESTINATION_META[slug]
  const resolvedTagline = tagline ?? meta?.tagline

  return (
    <Link
      href={`/destinations/${slug}`}
      className="group block border border-zinc-100 rounded-2xl overflow-hidden bg-white hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
    >
      <div className="relative h-28 bg-gradient-to-br from-rose-100 via-rose-50 to-amber-50 flex items-center justify-center px-6">
        <span className="font-display text-2xl text-rose-600/80 text-center leading-tight">
          {displayLabel}
        </span>
      </div>

      <div className="p-5">
        {resolvedTagline && (
          <p className="text-zinc-500 text-sm italic leading-relaxed">
            {resolvedTagline}
          </p>
        )}
        {whyHere && (
          <p className="text-zinc-700 text-sm mt-3 leading-relaxed">
            {whyHere}
          </p>
        )}
        <span className="inline-block mt-4 text-rose-500 font-medium text-sm group-hover:underline">
          Explore {displayLabel} →
        </span>
      </div>
    </Link>
  )
}
