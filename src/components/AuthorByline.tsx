interface AuthorBylineProps {
  authorName?: string
  role?: string
  reviewedDate?: string
}

export default function AuthorByline({
  authorName = 'Jean-Baptiste Manson',
  role = 'Editor',
  reviewedDate,
}: AuthorBylineProps) {
  const date = reviewedDate ?? new Date().toISOString().slice(0, 10)
  const initials = authorName
    .split(/\s+/)
    .map(p => p[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase()

  return (
    <div className="my-6 flex items-center gap-3 text-sm">
      <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center text-rose-500 font-semibold">
        {initials}
      </div>
      <div>
        <div className="font-semibold text-zinc-900">{authorName}</div>
        <div className="text-zinc-500 text-xs">{role} · Reviewed {date}</div>
      </div>
    </div>
  )
}
