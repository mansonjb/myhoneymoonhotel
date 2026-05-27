import { AUTHOR } from '@/data/author'

interface AuthorBylineProps {
  authorName?: string
  role?: string
  reviewedDate?: string
}

// Default reviewed date pinned to last editorial pass — stable in
// rendering so search engines don't see fake daily "freshness churn".
// Bump at each real editorial pass.
const DEFAULT_REVIEWED = '2026-05-12'

export default function AuthorByline({
  authorName = AUTHOR.name,
  role = AUTHOR.role,
  reviewedDate = DEFAULT_REVIEWED,
}: AuthorBylineProps) {
  return (
    <div className="my-6 flex items-center gap-3 text-sm">
      <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 font-semibold">
        {AUTHOR.avatarInitials}
      </div>
      <div>
        <div className="font-semibold text-zinc-900">{authorName}</div>
        <div className="text-zinc-500 text-xs">{role} · Reviewed {reviewedDate}</div>
      </div>
    </div>
  )
}
