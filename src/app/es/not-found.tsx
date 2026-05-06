import Link from 'next/link'
import en from '@/i18n/messages/en.json'
import es from '@/i18n/messages/es.json'

const dict: Record<string, string> = { ...en, ...es } as Record<string, string>
const tx = (k: string, fb: string) => dict[k] ?? fb

export default function NotFoundES() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="max-w-lg text-center">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-4">404</p>
        <h1 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-4">{tx('notFound.title', 'Lost between islands.')}</h1>
        <p className="text-zinc-500 text-lg leading-relaxed mb-8">
          {tx('notFound.body', "The page you're looking for doesn't exist — or perhaps it was a hotel we haven't scored yet.")}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/es"
            className="bg-rose-500 hover:bg-rose-600 text-white font-semibold text-sm px-7 py-3.5 rounded-full transition-colors"
          >
            {tx('notFound.backHome', 'Back home')}
          </Link>
          <Link
            href="/es/quiz"
            className="border border-zinc-200 hover:border-zinc-400 text-zinc-900 font-semibold text-sm px-7 py-3.5 rounded-full transition-colors"
          >
            {tx('notFound.takeQuiz', 'Take the 60-second quiz')}
          </Link>
        </div>
      </div>
    </div>
  )
}
