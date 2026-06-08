interface SectionDividerProps {
  label: string
}

export default function SectionDivider({ label }: SectionDividerProps) {
  return (
    <div className="not-prose flex items-center gap-4 my-14">
      <span className="h-px w-12 bg-rose-300" />
      <span className="text-xs font-semibold uppercase tracking-[0.25em] text-rose-400">
        {label}
      </span>
      <span className="h-px flex-1 bg-zinc-100" />
    </div>
  )
}
