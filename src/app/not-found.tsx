import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="max-w-lg text-center">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-4">404</p>
        <h1 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-4">Lost between islands.</h1>
        <p className="text-zinc-500 text-lg leading-relaxed mb-8">
          The page you&apos;re looking for doesn&apos;t exist — or perhaps it was a hotel we haven&apos;t scored yet.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="bg-rose-500 hover:bg-rose-600 text-white font-semibold text-sm px-7 py-3.5 rounded-full transition-colors"
          >
            Back home
          </Link>
          <Link
            href="/quiz"
            className="border border-zinc-200 hover:border-zinc-400 text-zinc-900 font-semibold text-sm px-7 py-3.5 rounded-full transition-colors"
          >
            Take the 60-second quiz
          </Link>
        </div>
      </div>
    </div>
  )
}
