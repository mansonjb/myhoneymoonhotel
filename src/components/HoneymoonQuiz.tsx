'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Hotel } from '../../types/hotel'

// ─── Types ───────────────────────────────────────────────────────────────────

interface Answers {
  departure: string | null
  duration: string | null
  month: number | null   // 1-12, or 0 = flexible
  styles: string[]
  priority: string | null
  budget: string | null
}

type Step = 1 | 2 | 3 | 4 | 5 | 6 | 'results'

// ─── Config ──────────────────────────────────────────────────────────────────

const DEPARTURE_OPTIONS = [
  { key: 'europe',        emoji: '🇪🇺', label: 'Europe & UK',         sub: 'Santorini, Seychelles, Maldives' },
  { key: 'north-america', emoji: '🇺🇸', label: 'North America',       sub: 'Caribbean, Turks & Caicos' },
  { key: 'australia',     emoji: '🇦🇺', label: 'Australia & NZ',      sub: 'Bali, Maldives, Bora Bora' },
  { key: 'asia',          emoji: '🌏', label: 'Asia',                 sub: 'Bali, Maldives, Seychelles' },
  { key: 'africa-me',     emoji: '🌍', label: 'Africa & Middle East', sub: 'Seychelles, Tanzania, Maldives' },
  { key: 'latam',         emoji: '🌎', label: 'Latin America',        sub: 'Bora Bora, Caribbean nearby' },
  { key: 'flexible',      emoji: '✈️', label: 'Flexible / Anywhere',  sub: "Distance isn't a factor" },
]

const DURATION_OPTIONS = [
  { key: 'mini',     emoji: '⚡', label: 'Mini-moon',   sub: '3–5 nights', desc: 'Short, intense, unforgettable' },
  { key: 'classic',  emoji: '🌴', label: 'Classic',     sub: '6–8 nights', desc: 'The ideal honeymoon length' },
  { key: 'extended', emoji: '🌍', label: 'Extended',    sub: '9–14 nights', desc: 'Explore more, stress less' },
  { key: 'grand',    emoji: '🛳️', label: 'Grand Tour',  sub: '15+ nights',  desc: 'Multiple destinations possible' },
]

const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

const STYLE_OPTIONS = [
  { key: 'overwater-bungalows', emoji: '🌊', label: 'Overwater Bungalow',   desc: 'Sleep above a turquoise lagoon' },
  { key: 'beach',               emoji: '🏖️', label: 'Private Beach',         desc: 'Powder sand, barefoot luxury' },
  { key: 'wellness',            emoji: '🌿', label: 'Spa & Wellness',        desc: 'Deep relaxation, restored together' },
  { key: 'safari',              emoji: '🦁', label: 'Safari & Wildlife',     desc: 'Migration, sundowners, starlit bush' },
  { key: 'luxury',              emoji: '💎', label: 'Pure Luxury',           desc: 'The absolute best of everything' },
  { key: 'adults-only',         emoji: '🍾', label: 'Adults-Only',           desc: 'No kids, couple atmosphere only' },
  { key: 'city-culture',        emoji: '🏛️', label: 'City & Culture',        desc: 'Art, food, history, local life' },
  { key: 'dramatic-scenery',    emoji: '🌋', label: 'Dramatic Scenery',      desc: 'Cliffs, volcanoes, jungle, mountains' },
  { key: 'diving-watersports',  emoji: '🤿', label: 'Diving & Water Sports', desc: 'Coral reefs, snorkeling, kitesurfing' },
  { key: 'food-fine-dining',    emoji: '🍽️', label: 'Food & Fine Dining',    desc: 'Top restaurants, local cuisine, wine' },
]

const PRIORITY_OPTIONS = [
  { key: 'privacy',      emoji: '🔇', label: 'Total Privacy',         desc: 'Far from crowds, your own slice of paradise' },
  { key: 'photogenic',   emoji: '📸', label: 'Most Photogenic',       desc: 'Every shot looks like a magazine cover' },
  { key: 'sunshine',     emoji: '☀️', label: 'Guaranteed Sunshine',   desc: 'Perfect weather is non-negotiable' },
  { key: 'activities',   emoji: '🤸', label: 'Things To Do',          desc: 'Excursions, watersports, adventures' },
  { key: 'dining',       emoji: '🍷', label: 'Exceptional Dining',    desc: 'Meals are part of the experience' },
  { key: 'relaxation',   emoji: '💆', label: 'Pure Relaxation',       desc: 'No plans, no schedule, completely offline' },
  { key: 'service',      emoji: '🛎️', label: 'Flawless Service',      desc: 'Butler, concierge, every detail handled' },
  { key: 'unique',       emoji: '✨', label: 'Unique Experience',      desc: 'Something you can\'t get anywhere else' },
]

const BUDGET_OPTIONS = [
  { key: 'budget',      range: '$200–$600/night',     label: 'Smart Value',    icon: '💛', featured: false },
  { key: 'comfortable', range: '$600–$1,500/night',   label: 'Luxury',         icon: '🧡', featured: true },
  { key: 'luxury',      range: '$1,500–$4,000/night', label: 'Ultra-Luxury',   icon: '❤️', featured: false },
  { key: 'ultra',       range: '$4,000+/night',        label: 'No Limits',      icon: '💜', featured: false },
]

// ─── Matching data ────────────────────────────────────────────────────────────

const PROXIMITY: Record<string, Record<string, number>> = {
  europe:          { santorini:15, seychelles:12, tanzania:10, maldives:10, 'st-lucia':5, 'turks-and-caicos':5, bali:2, 'bora-bora':0, 'french-polynesia':0 },
  'north-america': { 'turks-and-caicos':15, 'st-lucia':12, 'bora-bora':8, santorini:5, maldives:2, seychelles:2, bali:0, tanzania:0 },
  australia:       { bali:15, maldives:12, 'bora-bora':10, seychelles:8, santorini:2, 'st-lucia':0, 'turks-and-caicos':0, tanzania:2 },
  asia:            { bali:15, maldives:15, seychelles:10, santorini:8, tanzania:8, 'bora-bora':2, 'st-lucia':0, 'turks-and-caicos':0 },
  'africa-me':     { seychelles:15, tanzania:15, maldives:12, santorini:12, bali:5, 'bora-bora':0, 'st-lucia':0, 'turks-and-caicos':0 },
  latam:           { 'bora-bora':12, 'turks-and-caicos':10, 'st-lucia':8, santorini:4, maldives:2, seychelles:2, bali:0, tanzania:0 },
}

const SEASON: Record<string, number[]> = {
  maldives:           [3,3,2,1,0,0,3,3,2,2,3,3],
  'bora-bora':        [3,3,2,2,1,0,3,3,2,2,2,3],
  'st-lucia':         [3,3,3,2,1,1,2,2,1,2,3,3],
  'turks-and-caicos': [3,3,3,2,2,1,1,1,1,2,3,3],
  seychelles:         [2,2,2,3,3,2,2,2,3,3,2,2],
  bali:               [2,2,1,1,0,0,3,3,3,2,1,1],
  santorini:          [1,1,2,3,3,3,3,3,3,2,1,1],
  tanzania:           [2,2,0,0,1,3,3,3,3,2,1,2],
}

// Destination boosts for styles that don't map to experience_types in hotel JSON
const STYLE_DEST_BONUS: Record<string, string[]> = {
  'city-culture':       ['santorini', 'bali'],
  'dramatic-scenery':   ['santorini', 'bali', 'st-lucia'],
  'diving-watersports': ['maldives', 'bora-bora', 'turks-and-caicos', 'bali', 'seychelles'],
  'food-fine-dining':   ['santorini', 'bali', 'st-lucia', 'maldives'],
}

// Priority boosts: priority key → which hotels get extra points
const PRIORITY_BOOSTS: Record<string, (h: Hotel) => number> = {
  privacy:     h => (h.adults_only ? 12 : 0) + (h.price_per_night_usd.min >= 1200 ? 5 : 0),
  photogenic:  h => ['bora-bora','santorini','maldives','st-lucia'].includes(h.destination) ? 10 : 0,
  sunshine:    h => ['maldives','bora-bora','turks-and-caicos'].includes(h.destination) ? 8 : 0,
  activities:  h => (h.amenities.includes('snorkeling') || h.amenities.includes('beach') ? 8 : 0),
  dining:      h => (h.tripadvisor_award ? 10 : 0) + (h.stars === 5 ? 5 : 0),
  relaxation:  h => (h.amenities.includes('spa') ? 10 : 0),
  service:     h => (h.stars === 5 ? 8 : 0) + (h.amenities.includes('butler service') ? 8 : 0),
  unique:      h => (['bora-bora','santorini','tanzania'].includes(h.destination) ? 8 : 0),
}

const BUDGET_MAX: Record<string, number> = {
  budget: 650, comfortable: 1600, luxury: 4500, ultra: Infinity,
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
    if (hotel.price_per_night_usd.min > maxBudget * 1.3) continue

    let score = hotel.honeymoon_score
    const reasons: string[] = []

    // ── Style match ──
    const directHits = answers.styles.filter(s => hotel.experience_types.includes(s))
    score += directHits.length * 12
    directHits.slice(0, 2).forEach(s => {
      const opt = STYLE_OPTIONS.find(o => o.key === s)
      if (opt) reasons.push(`${opt.emoji} ${opt.label}`)
    })

    // Destination-mapped style boosts
    answers.styles.forEach(s => {
      const destList = STYLE_DEST_BONUS[s]
      if (destList?.includes(hotel.destination)) {
        score += 10
        const opt = STYLE_OPTIONS.find(o => o.key === s)
        if (opt && !reasons.some(r => r.includes(opt.label))) {
          reasons.push(`${opt.emoji} ${opt.label}`)
        }
      }
    })

    if (directHits.length === 0 && !answers.styles.some(s => STYLE_DEST_BONUS[s]?.includes(hotel.destination)) && answers.styles.length > 0) {
      score -= 15
    }

    // ── Proximity ──
    const prox = (answers.departure && answers.departure !== 'flexible')
      ? (PROXIMITY[answers.departure]?.[hotel.destination] ?? 3)
      : 8
    score += prox
    if (prox >= 12) reasons.push('✈️ Short flight from your region')

    // ── Season quality ──
    if (answers.month && answers.month > 0) {
      const q = SEASON[hotel.destination]?.[answers.month - 1] ?? 2
      if (q === 3) { score += 10; reasons.push('📅 Perfect season') }
      else if (q === 2) score += 4
      else if (q === 1) score -= 5
      else score -= 25
    }

    // ── Duration ──
    if (answers.duration === 'mini') {
      // Favour closer destinations + simpler resort experiences
      score += prox >= 10 ? 5 : -5
    } else if (answers.duration === 'grand') {
      // Grand tours: slightly prefer destination variety potential
      if (['bali','seychelles','santorini'].includes(hotel.destination)) score += 5
    }

    // ── Adults-only exact match ──
    if (answers.styles.includes('adults-only') && hotel.adults_only) {
      score += 15
      if (!reasons.some(r => r.includes('Adults'))) reasons.push('🔞 Adults-only resort')
    }

    // ── Priority modifier ──
    if (answers.priority) {
      const boost = PRIORITY_BOOSTS[answers.priority]?.(hotel) ?? 0
      score += boost
      if (boost >= 8) {
        const opt = PRIORITY_OPTIONS.find(o => o.key === answers.priority)
        if (opt && !reasons.some(r => r.includes(opt.label))) {
          reasons.push(`${opt.emoji} ${opt.label}`)
        }
      }
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

// ─── Helpers ─────────────────────────────────────────────────────────────────

function StepHeader({ step, total, title, sub }: { step: number; total: number; title: string; sub: string }) {
  return (
    <div className="text-center mb-10">
      <p className="text-rose-400 text-sm font-semibold tracking-widest uppercase mb-3">Step {step} of {total}</p>
      <h1 className="text-3xl sm:text-4xl font-serif text-zinc-900 mb-3">{title}</h1>
      <p className="text-zinc-500 text-base">{sub}</p>
    </div>
  )
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function HoneymoonQuiz({ hotels }: { hotels: Hotel[] }) {
  const [step, setStep] = useState<Step>(1)
  const [answers, setAnswers] = useState<Answers>({
    departure: null, duration: null, month: null, styles: [], priority: null, budget: null,
  })

  const results = useMemo(
    () => step === 'results' ? computeResults(hotels, answers) : [],
    [step, hotels, answers]
  )

  function reset() {
    setStep(1)
    setAnswers({ departure: null, duration: null, month: null, styles: [], priority: null, budget: null })
  }

  const TOTAL = 6
  const stepNum = step === 'results' ? TOTAL + 1 : (step as number)

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50">

      {/* Sticky header */}
      <div className="bg-white/80 backdrop-blur-md border-b border-rose-100 px-6 py-4 flex items-center justify-between sticky top-[60px] z-10">
        <button
          onClick={step === 1 ? undefined : () => setStep(s => s === 'results' ? 6 : Math.max(1, (s as number) - 1) as Step)}
          className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
        >
          {step === 1 ? <Link href="/">← Back</Link> : '← Back'}
        </button>
        <span className="text-xs font-semibold tracking-widest text-rose-400 uppercase">Honeymoon Advisor</span>
        {step === 'results'
          ? <button onClick={reset} className="text-sm text-rose-500 hover:text-rose-700 font-medium">Retake →</button>
          : <span className="text-sm text-zinc-400">{stepNum}/{TOTAL}</span>
        }
      </div>

      {/* Progress bar */}
      {step !== 'results' && (
        <div className="h-1 bg-rose-100">
          <div className="h-full bg-rose-400 transition-all duration-500" style={{ width: `${(stepNum / TOTAL) * 100}%` }} />
        </div>
      )}

      <div className="max-w-2xl mx-auto px-4 py-12">

        {/* ── Step 1: Departure ────────────────────────────────────────────── */}
        {step === 1 && (
          <div>
            <StepHeader step={1} total={TOTAL} title="Where are you flying from?" sub="We'll prioritise destinations easy to reach from your region." />
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {DEPARTURE_OPTIONS.map(opt => (
                <button
                  key={opt.key}
                  onClick={() => { setAnswers(a => ({ ...a, departure: opt.key })); setStep(2) }}
                  className="flex flex-col items-center gap-2 p-5 rounded-2xl border-2 border-zinc-100 bg-white hover:border-rose-300 hover:bg-rose-50 hover:shadow-sm transition-all text-center group"
                >
                  <span className="text-3xl">{opt.emoji}</span>
                  <span className="text-sm font-semibold text-zinc-800 group-hover:text-rose-700 transition-colors leading-tight">{opt.label}</span>
                  <span className="text-xs text-zinc-400 leading-tight">{opt.sub}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ── Step 2: Duration ─────────────────────────────────────────────── */}
        {step === 2 && (
          <div>
            <StepHeader step={2} total={TOTAL} title="How long is your honeymoon?" sub="This helps us match the right depth of experience." />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {DURATION_OPTIONS.map(opt => (
                <button
                  key={opt.key}
                  onClick={() => { setAnswers(a => ({ ...a, duration: opt.key })); setStep(3) }}
                  className="flex items-center gap-4 p-5 rounded-2xl border-2 border-zinc-100 bg-white hover:border-rose-300 hover:bg-rose-50 transition-all text-left group"
                >
                  <span className="text-3xl flex-shrink-0">{opt.emoji}</span>
                  <div>
                    <div className="font-semibold text-zinc-900 group-hover:text-rose-700 transition-colors">{opt.label}</div>
                    <div className="text-sm font-medium text-rose-400">{opt.sub}</div>
                    <div className="text-xs text-zinc-400 mt-0.5">{opt.desc}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ── Step 3: Month ────────────────────────────────────────────────── */}
        {step === 3 && (
          <div>
            <StepHeader step={3} total={TOTAL} title="When's your honeymoon?" sub="We'll match you to destinations in their best season." />
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
              {MONTHS.map((month, i) => (
                <button
                  key={month}
                  onClick={() => { setAnswers(a => ({ ...a, month: i + 1 })); setStep(4) }}
                  className="py-4 rounded-2xl border-2 border-zinc-100 bg-white hover:border-rose-300 hover:bg-rose-50 transition-all font-medium text-zinc-700 hover:text-rose-700"
                >
                  {month}
                </button>
              ))}
              <button
                onClick={() => { setAnswers(a => ({ ...a, month: 0 })); setStep(4) }}
                className="py-4 col-span-3 sm:col-span-4 rounded-2xl border-2 border-dashed border-zinc-200 bg-white/50 hover:border-rose-300 text-sm text-zinc-400 hover:text-rose-500 transition-all"
              >
                Not sure yet — skip
              </button>
            </div>
          </div>
        )}

        {/* ── Step 4: Styles ───────────────────────────────────────────────── */}
        {step === 4 && (
          <div>
            <StepHeader step={4} total={TOTAL} title="What's your dream honeymoon?" sub="Select everything that speaks to you — no wrong answers." />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {STYLE_OPTIONS.map(opt => {
                const sel = answers.styles.includes(opt.key)
                return (
                  <button
                    key={opt.key}
                    onClick={() => setAnswers(a => ({
                      ...a,
                      styles: sel ? a.styles.filter(s => s !== opt.key) : [...a.styles, opt.key],
                    }))}
                    className={`flex items-center gap-4 p-4 rounded-2xl border-2 text-left transition-all ${
                      sel ? 'border-rose-400 bg-rose-50 shadow-sm' : 'border-zinc-100 bg-white hover:border-rose-200 hover:bg-rose-50/40'
                    }`}
                  >
                    <span className="text-2xl flex-shrink-0">{opt.emoji}</span>
                    <div className="flex-1 min-w-0">
                      <div className={`font-semibold text-sm ${sel ? 'text-rose-700' : 'text-zinc-900'}`}>{opt.label}</div>
                      <div className="text-xs text-zinc-400 mt-0.5">{opt.desc}</div>
                    </div>
                    <div className={`w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-all ${sel ? 'bg-rose-400 border-rose-400' : 'border-zinc-200'}`}>
                      {sel && <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 12 12"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M2 6l3 3 5-5"/></svg>}
                    </div>
                  </button>
                )
              })}
            </div>
            <button
              onClick={() => setStep(5)}
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

        {/* ── Step 5: Priority ─────────────────────────────────────────────── */}
        {step === 5 && (
          <div>
            <StepHeader step={5} total={TOTAL} title="What's non-negotiable?" sub="One thing that, if missing, would ruin the honeymoon." />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {PRIORITY_OPTIONS.map(opt => (
                <button
                  key={opt.key}
                  onClick={() => { setAnswers(a => ({ ...a, priority: opt.key })); setStep(6) }}
                  className="flex items-center gap-4 p-5 rounded-2xl border-2 border-zinc-100 bg-white hover:border-rose-300 hover:bg-rose-50 transition-all text-left group"
                >
                  <span className="text-2xl flex-shrink-0">{opt.emoji}</span>
                  <div>
                    <div className="font-semibold text-sm text-zinc-900 group-hover:text-rose-700 transition-colors">{opt.label}</div>
                    <div className="text-xs text-zinc-400 mt-0.5">{opt.desc}</div>
                  </div>
                </button>
              ))}
            </div>
            <button onClick={() => { setAnswers(a => ({ ...a, priority: null })); setStep(6) }} className="mt-4 w-full py-3 text-sm text-zinc-400 hover:text-zinc-600 transition-colors">
              Skip — no single priority
            </button>
          </div>
        )}

        {/* ── Step 6: Budget ───────────────────────────────────────────────── */}
        {step === 6 && (
          <div>
            <StepHeader step={6} total={TOTAL} title="What's your budget per night?" sub="Per couple. We'll show you what's possible at every level." />
            <div className="flex flex-col gap-3">
              {BUDGET_OPTIONS.map(opt => (
                <button
                  key={opt.key}
                  onClick={() => { setAnswers(a => ({ ...a, budget: opt.key })); setStep('results') }}
                  className={`flex items-center gap-4 p-5 rounded-2xl border-2 text-left transition-all group ${
                    opt.featured ? 'border-rose-200 bg-rose-50 hover:border-rose-400' : 'border-zinc-100 bg-white hover:border-rose-200 hover:bg-rose-50/40'
                  }`}
                >
                  <span className="text-2xl flex-shrink-0">{opt.icon}</span>
                  <div className="flex-1">
                    <div className="font-semibold text-zinc-900">{opt.label}</div>
                    <div className="text-sm text-zinc-500">{opt.range}</div>
                  </div>
                  {opt.featured && <span className="text-xs font-semibold bg-rose-400 text-white px-2.5 py-1 rounded-full flex-shrink-0">Most popular</span>}
                  <svg className="w-5 h-5 text-zinc-300 group-hover:text-rose-400 transition-colors flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ── Results ──────────────────────────────────────────────────────── */}
        {step === 'results' && (
          <div>
            <div className="text-center mb-10">
              <div className="text-5xl mb-4">💌</div>
              <h1 className="text-3xl sm:text-4xl font-serif text-zinc-900 mb-3">Your perfect honeymoon hotels</h1>
              <p className="text-zinc-500 mb-6">
                {results.length} hotels matched from {hotels.length} scored properties — ranked by personal fit.
              </p>
              {/* Answer summary chips */}
              <div className="flex flex-wrap justify-center gap-2 text-xs">
                {answers.departure && answers.departure !== 'flexible' && (
                  <span className="bg-zinc-100 text-zinc-600 px-3 py-1.5 rounded-full">
                    {DEPARTURE_OPTIONS.find(o => o.key === answers.departure)?.emoji}{' '}
                    {DEPARTURE_OPTIONS.find(o => o.key === answers.departure)?.label}
                  </span>
                )}
                {answers.duration && (
                  <span className="bg-zinc-100 text-zinc-600 px-3 py-1.5 rounded-full">
                    {DURATION_OPTIONS.find(o => o.key === answers.duration)?.emoji}{' '}
                    {DURATION_OPTIONS.find(o => o.key === answers.duration)?.sub}
                  </span>
                )}
                {answers.month && answers.month > 0 && (
                  <span className="bg-zinc-100 text-zinc-600 px-3 py-1.5 rounded-full">📅 {MONTHS[answers.month - 1]}</span>
                )}
                {answers.styles.map(s => {
                  const opt = STYLE_OPTIONS.find(o => o.key === s)
                  return opt ? (
                    <span key={s} className="bg-rose-50 text-rose-600 border border-rose-100 px-3 py-1.5 rounded-full">
                      {opt.emoji} {opt.label}
                    </span>
                  ) : null
                })}
                {answers.priority && (
                  <span className="bg-amber-50 text-amber-700 border border-amber-100 px-3 py-1.5 rounded-full">
                    {PRIORITY_OPTIONS.find(o => o.key === answers.priority)?.emoji}{' '}
                    {PRIORITY_OPTIONS.find(o => o.key === answers.priority)?.label}
                  </span>
                )}
                {answers.budget && (
                  <span className="bg-zinc-100 text-zinc-600 px-3 py-1.5 rounded-full">
                    {BUDGET_OPTIONS.find(o => o.key === answers.budget)?.range}
                  </span>
                )}
              </div>
            </div>

            {results.length === 0 ? (
              <div className="text-center py-16">
                <div className="text-4xl mb-4">🔍</div>
                <p className="font-medium text-zinc-700 mb-2">No exact matches found</p>
                <p className="text-sm text-zinc-400 mb-6">Try a higher budget or different style preferences.</p>
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
                      <div className="relative w-32 sm:w-44 flex-shrink-0">
                        {hero ? (
                          <Image src={hero.url} alt={hotel.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width:640px) 128px,176px" />
                        ) : (
                          <div className="w-full h-full bg-rose-100" />
                        )}
                        <div className={`absolute top-2 left-2 text-xs font-bold px-2 py-0.5 rounded-full ${i === 0 ? 'bg-rose-500 text-white' : 'bg-white/90 text-zinc-700'}`}>
                          {i === 0 ? '🏆 #1' : `#${i + 1}`}
                        </div>
                      </div>

                      <div className="p-4 flex-1 min-w-0 flex flex-col justify-between">
                        <div>
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <div className="min-w-0">
                              <span className={`inline-block text-xs font-semibold px-2 py-0.5 rounded-full mb-1 ${
                                matchPct >= 90 ? 'bg-emerald-100 text-emerald-700' :
                                matchPct >= 75 ? 'bg-blue-100 text-blue-700' :
                                'bg-zinc-100 text-zinc-600'
                              }`}>
                                {matchPct}% match
                              </span>
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
                              <span key={j} className="text-xs bg-zinc-50 text-zinc-600 px-2 py-0.5 rounded-full border border-zinc-100">{r}</span>
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

            <div className="mt-10 pt-6 border-t border-zinc-100 text-center space-y-3">
              <p className="text-sm text-zinc-500">Not what you expected?</p>
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <button onClick={reset} className="text-sm font-medium text-rose-500 hover:text-rose-700 transition-colors underline">
                  Retake with new answers
                </button>
                <span className="text-zinc-200">|</span>
                <Link href="/" className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors underline">
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
