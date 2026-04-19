'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Hotel } from '../../types/hotel'

// ─── Types ───────────────────────────────────────────────────────────────────

interface Answers {
  departure: string | null
  month: number | null  // 1-12, or 0 = flexible
  styles: string[]
  budget: string | null
}

type Step = 1 | 2 | 3 | 4 | 'results'

// ─── Config ──────────────────────────────────────────────────────────────────

const DEPARTURE_OPTIONS = [
  { key: 'europe',       emoji: '🇪🇺', label: 'Europe & UK',          sub: 'Maldives, Seychelles, Santorini nearby' },
  { key: 'north-america', emoji: '🇺🇸', label: 'North America',        sub: 'Caribbean, Turks & Caicos nearby' },
  { key: 'australia',    emoji: '🇦🇺', label: 'Australia & NZ',       sub: 'Bali, Maldives, Bora Bora nearby' },
  { key: 'asia',         emoji: '🌏', label: 'Asia',                  sub: 'Bali, Maldives, Seychelles nearby' },
  { key: 'africa-me',    emoji: '🌍', label: 'Africa & Middle East',  sub: 'Seychelles, Maldives, Tanzania nearby' },
  { key: 'flexible',     emoji: '✈️', label: 'Flexible / Anywhere',   sub: "Distance isn't a factor" },
]

const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

const STYLE_OPTIONS = [
  { key: 'overwater-bungalows', emoji: '🌊', label: 'Overwater Bungalow', desc: 'Sleep above a turquoise lagoon' },
  { key: 'beach',               emoji: '🏖️', label: 'Private Beach',       desc: 'Powder sand, barefoot luxury' },
  { key: 'wellness',            emoji: '🌿', label: 'Spa & Wellness',      desc: 'Deep relaxation, restored together' },
  { key: 'safari',              emoji: '🦁', label: 'Safari',              desc: 'Wildlife, sundowners, starlit bush' },
  { key: 'luxury',              emoji: '💎', label: 'Pure Luxury',         desc: 'The absolute best of everything' },
  { key: 'adults-only',         emoji: '🍾', label: 'Adults-Only',         desc: 'No kids, complete couple privacy' },
]

const BUDGET_OPTIONS = [
  { key: 'budget',      range: '$200–$600/night',      label: 'Smart Value',    icon: '💛', featured: false },
  { key: 'comfortable', range: '$600–$1,500/night',    label: 'Luxury',         icon: '🧡', featured: true  },
  { key: 'luxury',      range: '$1,500–$4,000/night',  label: 'Ultra-Luxury',   icon: '❤️', featured: false },
  { key: 'ultra',       range: '$4,000+/night',         label: 'No Limits',      icon: '💜', featured: false },
]

// proximity bonus (0-15) by departure region → destination
const PROXIMITY: Record<string, Record<string, number>> = {
  europe:        { santorini: 15, seychelles: 12, tanzania: 10, maldives: 10, 'st-lucia': 5, 'turks-and-caicos': 5, bali: 2, 'bora-bora': 0 },
  'north-america': { 'turks-and-caicos': 15, 'st-lucia': 12, 'bora-bora': 8, santorini: 5, maldives: 2, seychelles: 2, bali: 0, tanzania: 0 },
  australia:     { bali: 15, maldives: 12, 'bora-bora': 10, seychelles: 8, santorini: 2, 'st-lucia': 0, 'turks-and-caicos': 0, tanzania: 2 },
  asia:          { bali: 15, maldives: 15, seychelles: 10, santorini: 8, tanzania: 8, 'bora-bora': 2, 'st-lucia': 0, 'turks-and-caicos': 0 },
  'africa-me':   { seychelles: 15, tanzania: 15, maldives: 12, santorini: 12, bali: 5, 'bora-bora': 0, 'st-lucia': 0, 'turks-and-caicos': 0 },
}

// season quality per destination per month (0=avoid, 1=ok, 2=good, 3=peak)
const SEASON: Record<string, number[]> = {
  maldives:          [3,3,2,1,0,0,3,3,2,2,3,3],
  'bora-bora':       [3,3,2,2,1,0,3,3,2,2,2,3],
  'st-lucia':        [3,3,3,2,1,1,2,2,1,2,3,3],
  'turks-and-caicos':[3,3,3,2,2,1,1,1,1,2,3,3],
  seychelles:        [2,2,2,3,3,2,2,2,3,3,2,2],
  bali:              [2,2,1,1,0,0,3,3,3,2,1,1],
  santorini:         [1,1,2,3,3,3,3,3,3,2,1,1],
  tanzania:          [2,2,0,0,1,3,3,3,3,2,1,2],
}

const BUDGET_MAX: Record<string, number> = {
  budget: 650,
  comfortable: 1600,
  luxury: 4500,
  ultra: Infinity,
}

// ─── Matching ────────────────────────────────────────────────────────────────

interface Result {
  hotel: Hotel
  score: number
  reasons: string[]
  matchPct: number
}

function computeResults(hotels: Hotel[], answers: Answers): Result[] {
  const maxBudget = answers.budget ? BUDGET_MAX[answers.budget] : Infinity

  const scored: Result[] = []

  for (const hotel of hotels) {
    // Hard budget cap
    if (hotel.price_per_night_usd.min > maxBudget * 1.3) continue

    let score = hotel.honeymoon_score
    const reasons: string[] = []

    // Style match (+12 per hit)
    const hits = answers.styles.filter(s => hotel.experience_types.includes(s))
    score += hits.length * 12
    hits.slice(0, 2).forEach(s => {
      const opt = STYLE_OPTIONS.find(o => o.key === s)
      if (opt) reasons.push(`${opt.emoji} ${opt.label}`)
    })
    if (hits.length === 0 && answers.styles.length > 0) score -= 15

    // Proximity bonus
    const prox = (answers.departure && answers.departure !== 'flexible')
      ? (PROXIMITY[answers.departure]?.[hotel.destination] ?? 3)
      : 8
    score += prox
    if (prox >= 12) reasons.push('✈️ Short flight from your region')

    // Season quality
    if (answers.month && answers.month > 0) {
      const q = SEASON[hotel.destination]?.[answers.month - 1] ?? 2
      if (q === 3) { score += 10; reasons.push('📅 Perfect season') }
      else if (q === 2) score += 4
      else if (q === 1) score -= 5
      else score -= 25  // avoid
    }

    // Adults-only exact match
    if (answers.styles.includes('adults-only') && hotel.adults_only) {
      score += 15
      reasons.push('🔞 Adults-only resort')
    }

    reasons.push(`⭐ ${hotel.honeymoon_score}/100 honeymoon score`)

    scored.push({ hotel, score, reasons: reasons.slice(0, 3), matchPct: 0 })
  }

  scored.sort((a, b) => b.score - a.score)
  const top = scored[0]?.score ?? 100
  return scored.slice(0, 6).map(r => ({
    ...r,
    matchPct: Math.min(99, Math.round((r.score / top) * 100)),
  }))
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function HoneymoonQuiz({ hotels }: { hotels: Hotel[] }) {
  const [step, setStep] = useState<Step>(1)
  const [answers, setAnswers] = useState<Answers>({ departure: null, month: null, styles: [], budget: null })

  const results = useMemo(
    () => step === 'results' ? computeResults(hotels, answers) : [],
    [step, hotels, answers]
  )

  function pickDeparture(key: string) {
    setAnswers(a => ({ ...a, departure: key }))
    setStep(2)
  }

  function pickMonth(m: number) {
    setAnswers(a => ({ ...a, month: m }))
    setStep(3)
  }

  function toggleStyle(key: string) {
    setAnswers(a => ({
      ...a,
      styles: a.styles.includes(key) ? a.styles.filter(s => s !== key) : [...a.styles, key],
    }))
  }

  function pickBudget(key: string) {
    setAnswers(a => ({ ...a, budget: key }))
    setStep('results')
  }

  function reset() {
    setStep(1)
    setAnswers({ departure: null, month: null, styles: [], budget: null })
  }

  const stepNum = step === 'results' ? 5 : (step as number)

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50">

      {/* Sticky header */}
      <div className="bg-white/80 backdrop-blur-md border-b border-rose-100 px-6 py-4 flex items-center justify-between sticky top-[60px] z-10">
        <Link href="/" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">← Back</Link>
        <span className="text-xs font-semibold tracking-widest text-rose-400 uppercase">Honeymoon Advisor</span>
        {step === 'results'
          ? <button onClick={reset} className="text-sm text-rose-500 hover:text-rose-700 font-medium transition-colors">Retake quiz</button>
          : <span className="text-sm text-zinc-400">{stepNum}/4</span>
        }
      </div>

      {/* Progress bar */}
      {step !== 'results' && (
        <div className="h-1 bg-rose-100">
          <div className="h-full bg-rose-400 transition-all duration-500" style={{ width: `${(stepNum / 4) * 100}%` }} />
        </div>
      )}

      <div className="max-w-2xl mx-auto px-4 py-12">

        {/* ── Step 1: Departure ─────────────────────────────────────────────── */}
        {step === 1 && (
          <div>
            <div className="text-center mb-10">
              <p className="text-rose-400 text-sm font-semibold tracking-widest uppercase mb-3">Step 1 of 4</p>
              <h1 className="text-3xl sm:text-4xl font-serif text-zinc-900 mb-3">Where are you flying from?</h1>
              <p className="text-zinc-500">We'll prioritise destinations that are easy to reach from your region.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {DEPARTURE_OPTIONS.map(opt => (
                <button
                  key={opt.key}
                  onClick={() => pickDeparture(opt.key)}
                  className="flex flex-col items-center gap-2 p-5 rounded-2xl border-2 border-zinc-100 bg-white hover:border-rose-300 hover:bg-rose-50 hover:shadow-sm transition-all text-center group"
                >
                  <span className="text-3xl">{opt.emoji}</span>
                  <span className="text-sm font-semibold text-zinc-800 group-hover:text-rose-700 transition-colors">{opt.label}</span>
                  <span className="text-xs text-zinc-400 leading-tight">{opt.sub}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ── Step 2: Month ─────────────────────────────────────────────────── */}
        {step === 2 && (
          <div>
            <div className="text-center mb-10">
              <p className="text-rose-400 text-sm font-semibold tracking-widest uppercase mb-3">Step 2 of 4</p>
              <h1 className="text-3xl sm:text-4xl font-serif text-zinc-900 mb-3">When&apos;s your honeymoon?</h1>
              <p className="text-zinc-500">We&apos;ll match you to destinations in their best season.</p>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
              {MONTHS.map((month, i) => (
                <button
                  key={month}
                  onClick={() => pickMonth(i + 1)}
                  className="py-4 rounded-2xl border-2 border-zinc-100 bg-white hover:border-rose-300 hover:bg-rose-50 transition-all font-medium text-zinc-700 hover:text-rose-700"
                >
                  {month}
                </button>
              ))}
              <button
                onClick={() => pickMonth(0)}
                className="py-4 col-span-3 sm:col-span-4 rounded-2xl border-2 border-dashed border-zinc-200 bg-white/50 hover:border-rose-300 text-sm text-zinc-500 hover:text-rose-500 transition-all"
              >
                Not sure yet — skip
              </button>
            </div>
          </div>
        )}

        {/* ── Step 3: Style ─────────────────────────────────────────────────── */}
        {step === 3 && (
          <div>
            <div className="text-center mb-10">
              <p className="text-rose-400 text-sm font-semibold tracking-widest uppercase mb-3">Step 3 of 4</p>
              <h1 className="text-3xl sm:text-4xl font-serif text-zinc-900 mb-3">What&apos;s your dream honeymoon?</h1>
              <p className="text-zinc-500">Select everything that speaks to you. You can pick multiple.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {STYLE_OPTIONS.map(opt => {
                const sel = answers.styles.includes(opt.key)
                return (
                  <button
                    key={opt.key}
                    onClick={() => toggleStyle(opt.key)}
                    className={`flex items-center gap-4 p-5 rounded-2xl border-2 text-left transition-all ${
                      sel ? 'border-rose-400 bg-rose-50 shadow-sm' : 'border-zinc-100 bg-white hover:border-rose-200 hover:bg-rose-50/40'
                    }`}
                  >
                    <span className="text-3xl flex-shrink-0">{opt.emoji}</span>
                    <div className="flex-1 min-w-0">
                      <div className={`font-semibold text-sm ${sel ? 'text-rose-700' : 'text-zinc-900'}`}>{opt.label}</div>
                      <div className="text-xs text-zinc-500 mt-0.5">{opt.desc}</div>
                    </div>
                    <div className={`w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-all ${
                      sel ? 'bg-rose-400 border-rose-400' : 'border-zinc-200'
                    }`}>
                      {sel && (
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 12 12">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M2 6l3 3 5-5"/>
                        </svg>
                      )}
                    </div>
                  </button>
                )
              })}
            </div>
            <button
              onClick={() => setStep(4)}
              disabled={answers.styles.length === 0}
              className="w-full py-4 rounded-2xl bg-rose-500 text-white font-semibold text-base hover:bg-rose-600 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-sm"
            >
              {answers.styles.length === 0
                ? 'Select at least one style'
                : `Continue with ${answers.styles.length} choice${answers.styles.length > 1 ? 's' : ''} →`
              }
            </button>
          </div>
        )}

        {/* ── Step 4: Budget ────────────────────────────────────────────────── */}
        {step === 4 && (
          <div>
            <div className="text-center mb-10">
              <p className="text-rose-400 text-sm font-semibold tracking-widest uppercase mb-3">Step 4 of 4</p>
              <h1 className="text-3xl sm:text-4xl font-serif text-zinc-900 mb-3">What&apos;s your budget per night?</h1>
              <p className="text-zinc-500">Per couple. We&apos;ll show you what&apos;s possible at every level.</p>
            </div>
            <div className="flex flex-col gap-3">
              {BUDGET_OPTIONS.map(opt => (
                <button
                  key={opt.key}
                  onClick={() => pickBudget(opt.key)}
                  className={`flex items-center gap-4 p-5 rounded-2xl border-2 text-left transition-all group ${
                    opt.featured
                      ? 'border-rose-200 bg-rose-50 hover:border-rose-400 hover:bg-rose-100'
                      : 'border-zinc-100 bg-white hover:border-rose-200 hover:bg-rose-50/40'
                  }`}
                >
                  <span className="text-2xl flex-shrink-0">{opt.icon}</span>
                  <div className="flex-1">
                    <div className="font-semibold text-zinc-900">{opt.label}</div>
                    <div className="text-sm text-zinc-500">{opt.range}</div>
                  </div>
                  {opt.featured && (
                    <span className="text-xs font-semibold bg-rose-400 text-white px-2.5 py-1 rounded-full flex-shrink-0">Most popular</span>
                  )}
                  <svg className="w-5 h-5 text-zinc-300 group-hover:text-rose-400 transition-colors flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
                  </svg>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ── Results ───────────────────────────────────────────────────────── */}
        {step === 'results' && (
          <div>
            <div className="text-center mb-10">
              <div className="text-5xl mb-4">💌</div>
              <h1 className="text-3xl sm:text-4xl font-serif text-zinc-900 mb-3">Your perfect honeymoon hotels</h1>
              <p className="text-zinc-500 mb-6">
                Matched {results.length} hotels from {hotels.length} scored properties — ranked by fit.
              </p>
              {/* Answer summary */}
              <div className="flex flex-wrap justify-center gap-2 text-xs">
                {answers.departure && answers.departure !== 'flexible' && (
                  <span className="bg-zinc-100 text-zinc-600 px-3 py-1 rounded-full">
                    {DEPARTURE_OPTIONS.find(o => o.key === answers.departure)?.emoji} {DEPARTURE_OPTIONS.find(o => o.key === answers.departure)?.label}
                  </span>
                )}
                {answers.month && answers.month > 0 && (
                  <span className="bg-zinc-100 text-zinc-600 px-3 py-1 rounded-full">📅 {MONTHS[answers.month - 1]}</span>
                )}
                {answers.styles.map(s => {
                  const opt = STYLE_OPTIONS.find(o => o.key === s)
                  return opt ? (
                    <span key={s} className="bg-rose-50 text-rose-600 border border-rose-100 px-3 py-1 rounded-full">{opt.emoji} {opt.label}</span>
                  ) : null
                })}
                {answers.budget && (
                  <span className="bg-zinc-100 text-zinc-600 px-3 py-1 rounded-full">
                    {BUDGET_OPTIONS.find(o => o.key === answers.budget)?.range}
                  </span>
                )}
              </div>
            </div>

            {results.length === 0 ? (
              <div className="text-center py-16 text-zinc-400">
                <div className="text-4xl mb-4">🔍</div>
                <p className="font-medium text-zinc-600 mb-2">No exact matches found</p>
                <p className="text-sm mb-6">Try a higher budget or different style preferences.</p>
                <button onClick={reset} className="text-sm text-rose-500 hover:text-rose-700 underline">Retake the quiz</button>
              </div>
            ) : (
              <div className="space-y-4">
                {results.map(({ hotel, matchPct, reasons }, i) => {
                  const hero = hotel.photos.find(p => p.type === 'hero')
                  return (
                    <Link
                      key={hotel.slug}
                      href={`/hotels/${hotel.slug}`}
                      className="flex rounded-2xl overflow-hidden border border-zinc-100 bg-white hover:shadow-lg hover:border-rose-100 transition-all group"
                    >
                      {/* Image */}
                      <div className="relative w-32 sm:w-44 flex-shrink-0">
                        {hero ? (
                          <Image
                            src={hero.url}
                            alt={hotel.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 640px) 128px, 176px"
                          />
                        ) : (
                          <div className="w-full h-full bg-rose-100" />
                        )}
                        {/* Rank badge */}
                        <div className={`absolute top-2 left-2 text-xs font-bold px-2 py-0.5 rounded-full ${
                          i === 0 ? 'bg-rose-500 text-white' : 'bg-white/90 text-zinc-700'
                        }`}>
                          {i === 0 ? '🏆 #1' : `#${i + 1}`}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-4 flex-1 min-w-0 flex flex-col justify-between">
                        <div>
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <div className="min-w-0">
                              <div className="flex items-center gap-1.5 flex-wrap mb-1">
                                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                                  matchPct >= 90 ? 'bg-emerald-100 text-emerald-700' :
                                  matchPct >= 75 ? 'bg-blue-100 text-blue-700' :
                                  'bg-zinc-100 text-zinc-600'
                                }`}>
                                  {matchPct}% match
                                </span>
                              </div>
                              <h3 className="font-semibold text-zinc-900 text-sm leading-snug">{hotel.name}</h3>
                              <p className="text-xs text-zinc-400 mt-0.5 capitalize">{hotel.destination.replace(/-/g, ' ')}</p>
                            </div>
                            <div className="text-right flex-shrink-0">
                              <div className="text-xl font-bold text-zinc-900 leading-none">{hotel.honeymoon_score}</div>
                              <div className="text-xs text-zinc-400">/100</div>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-1 mb-2">
                            {reasons.map((r, j) => (
                              <span key={j} className="text-xs bg-zinc-50 text-zinc-600 px-2 py-0.5 rounded-full border border-zinc-100">
                                {r}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-xs text-zinc-400">From ${hotel.price_per_night_usd.min.toLocaleString()}/night</span>
                          <span className="text-xs font-medium text-rose-500 group-hover:text-rose-700 transition-colors">View hotel →</span>
                        </div>
                      </div>
                    </Link>
                  )
                })}
              </div>
            )}

            <div className="mt-10 text-center space-y-3">
              <p className="text-sm text-zinc-500">Not finding what you&apos;re looking for?</p>
              <div className="flex items-center justify-center gap-4">
                <button onClick={reset} className="text-sm font-medium text-rose-500 hover:text-rose-700 underline transition-colors">
                  Retake with new answers
                </button>
                <span className="text-zinc-200">|</span>
                <Link href="/hotels" className="text-sm font-medium text-zinc-500 hover:text-zinc-900 underline transition-colors">
                  Browse all hotels
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
