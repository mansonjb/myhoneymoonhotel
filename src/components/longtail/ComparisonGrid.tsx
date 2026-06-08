import Link from 'next/link'

interface ComparisonSide {
  name: string
  slug: string
  data?: Record<string, string>
}

export interface ComparisonCriterion {
  label: string
  leftValue: string
  rightValue: string
  winner?: 'left' | 'right' | 'tie'
}

interface ComparisonGridProps {
  left: ComparisonSide
  right: ComparisonSide
  criteria: ComparisonCriterion[]
}

function Check() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="inline-block text-rose-500 ml-1.5 -mt-0.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}

export default function ComparisonGrid({ left, right, criteria }: ComparisonGridProps) {
  return (
    <div className="not-prose my-10 border border-zinc-100 rounded-2xl overflow-hidden">
      <div className="grid grid-cols-3 bg-zinc-50 border-b border-zinc-100">
        <div className="px-4 py-4 text-xs font-semibold uppercase tracking-wider text-zinc-500">
          Criterion
        </div>
        <div className="px-4 py-4 text-center">
          <Link href={`/destinations/${left.slug}`} className="font-display text-base text-zinc-900 hover:text-rose-500">
            {left.name}
          </Link>
        </div>
        <div className="px-4 py-4 text-center">
          <Link href={`/destinations/${right.slug}`} className="font-display text-base text-zinc-900 hover:text-rose-500">
            {right.name}
          </Link>
        </div>
      </div>

      {criteria.map((c, i) => (
        <div key={i} className={`grid grid-cols-3 ${i % 2 === 0 ? 'bg-white' : 'bg-zinc-50/50'} border-t border-zinc-100 first:border-t-0`}>
          <div className="px-4 py-4 text-sm font-medium text-zinc-900">
            {c.label}
          </div>
          <div className={`px-4 py-4 text-sm leading-relaxed ${c.winner === 'left' ? 'text-zinc-900 font-medium' : 'text-zinc-600'}`}>
            {c.leftValue}
            {c.winner === 'left' && <Check />}
          </div>
          <div className={`px-4 py-4 text-sm leading-relaxed ${c.winner === 'right' ? 'text-zinc-900 font-medium' : 'text-zinc-600'}`}>
            {c.rightValue}
            {c.winner === 'right' && <Check />}
          </div>
        </div>
      ))}
    </div>
  )
}
