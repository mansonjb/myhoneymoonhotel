interface ItineraryDayCardProps {
  day: number
  title: string
  morning?: string
  afternoon?: string
  evening?: string
  restaurants?: string
  splurge?: string
  isSleepIn?: boolean
}

export default function ItineraryDayCard({
  day,
  title,
  morning,
  afternoon,
  evening,
  restaurants,
  splurge,
  isSleepIn = false,
}: ItineraryDayCardProps) {
  return (
    <div className={`not-prose relative border rounded-2xl p-6 mb-5 ${isSleepIn ? 'border-amber-200 bg-amber-50/40' : 'border-zinc-100 bg-white'}`}>
      <div className="flex items-start gap-4">
        <div className="shrink-0 w-12 h-12 rounded-full bg-rose-500 text-white flex items-center justify-center font-display text-lg shadow-sm">
          {day}
        </div>
        <div className="flex-1">
          <div className="flex items-baseline justify-between gap-3 flex-wrap">
            <h4 className="font-display text-xl text-zinc-900 leading-tight">
              {title}
            </h4>
            {isSleepIn && (
              <span className="text-[10px] uppercase tracking-widest text-amber-700 font-semibold">Sleep-in day</span>
            )}
          </div>

          <div className="mt-4 space-y-3">
            {morning && (
              <div className="flex gap-3">
                <span className="text-amber-500 text-base shrink-0" aria-hidden>☀</span>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  <strong className="text-zinc-900 font-medium">Morning. </strong>{morning}
                </p>
              </div>
            )}
            {afternoon && (
              <div className="flex gap-3">
                <span className="text-rose-400 text-base shrink-0" aria-hidden>✦</span>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  <strong className="text-zinc-900 font-medium">Afternoon. </strong>{afternoon}
                </p>
              </div>
            )}
            {evening && (
              <div className="flex gap-3">
                <span className="text-indigo-400 text-base shrink-0" aria-hidden>☾</span>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  <strong className="text-zinc-900 font-medium">Evening. </strong>{evening}
                </p>
              </div>
            )}
          </div>

          {restaurants && restaurants !== '—' && (
            <p className="text-zinc-500 text-xs italic mt-3 pt-3 border-t border-zinc-100">
              Restaurants: {restaurants}
            </p>
          )}

          {splurge && (
            <div className="mt-4 bg-rose-50/70 border border-rose-100 rounded-xl px-4 py-3">
              <p className="text-xs uppercase tracking-widest text-rose-500 font-semibold mb-1">Splurge moment</p>
              <p className="text-zinc-700 text-sm leading-relaxed">{splurge}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
