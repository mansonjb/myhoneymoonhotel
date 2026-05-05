/**
 * translate-content.ts
 *
 * Translation pipeline for myhoneymoonhotel.com.
 * Calls the Anthropic Claude API to translate English source content
 * (hotels / destinations / comparisons / pillar pages) into Spanish or
 * Brazilian Portuguese, and emits "overlay" JSON files under
 * data/i18n/[locale]/<target>/<slug>.json containing ONLY translated
 * fields. Non-translatable data (slug, prices, photos, scores, urls,
 * dates, currency codes, timezones) stays in the English base.
 *
 * USAGE
 *   npx tsx scripts/translate-content.ts --locale=es --target=hotels [--limit=N] [--slug=foo] [--force]
 *   npx tsx scripts/translate-content.ts --locale=pt --target=destinations
 *   npx tsx scripts/translate-content.ts --locale=es --target=comparisons
 *   npx tsx scripts/translate-content.ts --locale=pt --target=pages
 *   npx tsx scripts/translate-content.ts --locale=es --target=all
 *   npx tsx scripts/translate-content.ts --help
 */

import * as dotenv from 'dotenv'
import * as path from 'path'
dotenv.config({ path: path.join(process.cwd(), '.env.local') })
dotenv.config({ path: path.join(process.cwd(), '.env') })

import Anthropic from '@anthropic-ai/sdk'
import * as fs from 'fs'

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })
const MODEL = 'claude-haiku-4-5-20251022'
const BATCH_SIZE = 5

// ── pricing (USD per 1M tokens) — claude-haiku-4-5 ─────────────────────────
const INPUT_COST_PER_M = 1
const OUTPUT_COST_PER_M = 5

// ── paths ───────────────────────────────────────────────────────────────────
const ROOT = path.resolve(__dirname, '..')
const DATA_DIR = path.join(ROOT, 'data')
const HOTELS_DIR = path.join(DATA_DIR, 'hotels')
const DESTINATIONS_DIR = path.join(DATA_DIR, 'destinations')
const COMPARISONS_FILE = path.join(DATA_DIR, 'comparisons.ts')
const I18N_DIR = path.join(DATA_DIR, 'i18n')

type Locale = 'es' | 'pt'
type Target = 'hotels' | 'destinations' | 'comparisons' | 'pages' | 'all'

interface Args {
  locale: Locale
  target: Target
  limit?: number
  slug?: string
  force: boolean
}

function printUsage() {
  console.log(`
translate-content.ts — generate translation overlays for myhoneymoonhotel.com

Usage:
  npx tsx scripts/translate-content.ts --locale=<es|pt> --target=<hotels|destinations|comparisons|pages|all> [options]

Options:
  --locale=<es|pt>             Required. Target locale.
  --target=<...>               Required. What to translate.
  --limit=N                    Process only the first N items.
  --slug=foo                   Process only one specific item.
  --force                      Re-translate even if overlay file exists.
  --help                       Show this message.

Examples:
  npx tsx scripts/translate-content.ts --locale=es --target=hotels --limit=5
  npx tsx scripts/translate-content.ts --locale=pt --target=destinations --slug=maldives
  npx tsx scripts/translate-content.ts --locale=es --target=all --force
`)
}

function parseArgs(): Args {
  const argv = process.argv.slice(2)
  if (argv.includes('--help') || argv.includes('-h')) {
    printUsage()
    process.exit(0)
  }
  const map: Record<string, string | boolean> = {}
  for (const a of argv) {
    if (!a.startsWith('--')) continue
    const [k, v] = a.replace(/^--/, '').split('=')
    map[k] = v === undefined ? true : v
  }

  const locale = map.locale as string
  const target = map.target as string
  if (locale !== 'es' && locale !== 'pt') {
    console.error('Error: --locale must be "es" or "pt"')
    printUsage()
    process.exit(1)
  }
  const validTargets: Target[] = ['hotels', 'destinations', 'comparisons', 'pages', 'all']
  if (!validTargets.includes(target as Target)) {
    console.error(`Error: --target must be one of ${validTargets.join(', ')}`)
    printUsage()
    process.exit(1)
  }
  return {
    locale: locale as Locale,
    target: target as Target,
    limit: map.limit ? parseInt(String(map.limit), 10) : undefined,
    slug: map.slug ? String(map.slug) : undefined,
    force: !!map.force,
  }
}

// ── system prompts ──────────────────────────────────────────────────────────
const SYSTEM_PROMPTS: Record<Locale, string> = {
  es: 'You translate luxury honeymoon hotel content from English to neutral Spanish (works for Spain + LATAM). Tone: Condé Nast Traveler — aspirational, expert, romantic, evocative. Use "ustedes" formal where addressing the couple. Keep emojis, currency symbols ($, €), hotel names, brand names, region/city names, and proper nouns verbatim. Preserve the JSON shape exactly. Translate only the values you are explicitly asked to translate. Output strict JSON with no markdown fences and no commentary — just the JSON object.',
  pt: 'You translate luxury honeymoon hotel content from English to Brazilian Portuguese (pt-BR). Tone: Condé Nast Traveler — aspirational, expert, romantic, evocative. Use "você" when addressing the couple. Keep emojis, currency symbols ($, €), hotel names, brand names, region/city names, and proper nouns verbatim. Preserve the JSON shape exactly. Translate only the values you are explicitly asked to translate. Output strict JSON with no markdown fences and no commentary — just the JSON object.',
}

const LOCALE_NAME: Record<Locale, string> = {
  es: 'neutral Spanish (es)',
  pt: 'Brazilian Portuguese (pt-BR)',
}

// ── token tracker ───────────────────────────────────────────────────────────
const tokens = { input: 0, output: 0 }
let succeeded = 0
let failed = 0
let skipped = 0

// ── helpers ─────────────────────────────────────────────────────────────────
function ensureDir(p: string) {
  fs.mkdirSync(p, { recursive: true })
}

function overlayPath(locale: Locale, target: string, slug: string) {
  return path.join(I18N_DIR, locale, target, `${slug}.json`)
}

function readJson<T>(p: string): T {
  return JSON.parse(fs.readFileSync(p, 'utf8')) as T
}

function writeJson(p: string, data: unknown) {
  ensureDir(path.dirname(p))
  fs.writeFileSync(p, JSON.stringify(data, null, 2) + '\n', 'utf8')
}

function extractJsonFromText(text: string): string {
  const trimmed = text.trim()
  if (trimmed.startsWith('{') || trimmed.startsWith('[')) return trimmed
  // strip ```json fences
  const fenced = trimmed.match(/```(?:json)?\s*([\s\S]*?)```/)
  if (fenced) return fenced[1].trim()
  // last resort — find first { ... last }
  const first = trimmed.indexOf('{')
  const last = trimmed.lastIndexOf('}')
  if (first >= 0 && last > first) return trimmed.slice(first, last + 1)
  return trimmed
}

async function callTranslate(
  locale: Locale,
  instruction: string,
  payload: unknown,
  maxTokens = 4096,
): Promise<unknown> {
  const userMessage = `${instruction}

Target language: ${LOCALE_NAME[locale]}.

Input JSON:
\`\`\`json
${JSON.stringify(payload, null, 2)}
\`\`\`

Return ONLY the translated JSON object, same shape as the input. No markdown fences, no commentary.`

  const response = await client.messages.create({
    model: MODEL,
    max_tokens: maxTokens,
    system: SYSTEM_PROMPTS[locale],
    messages: [{ role: 'user', content: userMessage }],
  })

  tokens.input += response.usage.input_tokens
  tokens.output += response.usage.output_tokens

  const block = response.content.find((b) => b.type === 'text')
  if (!block || block.type !== 'text') {
    throw new Error('No text block in response')
  }
  const raw = extractJsonFromText(block.text)
  try {
    return JSON.parse(raw)
  } catch (err) {
    throw new Error(`Failed to parse JSON response: ${(err as Error).message}\nRaw: ${raw.slice(0, 500)}`)
  }
}

// ── HOTELS ──────────────────────────────────────────────────────────────────
interface HotelFile {
  slug: string
  content: {
    verdict?: string
    best_room?: string
    itinerary_7_nights?: { day: number; title: string; description: string }[]
    email_template?: string
    hotel_email_template?: string
    caveats?: string[]
    honest_caveats?: string[]
    faqs?: { question: string; answer: string }[]
  }
}

async function translateHotel(slug: string, locale: Locale, force: boolean): Promise<'ok' | 'skip' | 'fail'> {
  const out = overlayPath(locale, 'hotels', slug)
  if (!force && fs.existsSync(out)) return 'skip'

  const src = path.join(HOTELS_DIR, `${slug}.json`)
  if (!fs.existsSync(src)) {
    console.error(`  [hotels] [${slug}] source file not found: ${src}`)
    return 'fail'
  }
  const hotel = readJson<HotelFile>(src)
  const c = hotel.content || {}

  // Build payload using the canonical key names the overlay must emit.
  const payload = {
    verdict: c.verdict ?? '',
    best_room: c.best_room ?? '',
    itinerary_7_nights: (c.itinerary_7_nights ?? []).map((d) => ({
      day: d.day,
      title: d.title,
      description: d.description,
    })),
    email_template: c.email_template ?? c.hotel_email_template ?? '',
    caveats: c.caveats ?? c.honest_caveats ?? [],
    faqs: (c.faqs ?? []).map((f) => ({ question: f.question, answer: f.answer })),
  }

  const instruction =
    'Translate the following luxury honeymoon hotel content. Translate every string value EXCEPT the integer "day" fields (which must stay numeric and unchanged). Keep hotel names, brand names, place names, currency symbols, and emojis verbatim. The JSON shape and all keys must remain identical.'

  const translated = (await callTranslate(locale, instruction, payload, 3500)) as typeof payload

  const overlay = { content: translated }
  writeJson(out, overlay)
  return 'ok'
}

// ── DESTINATIONS ────────────────────────────────────────────────────────────
// Destinations live as .ts files exporting `meta`. We extract the object via
// dynamic import (ts-node / tsx handles TS imports at runtime).
async function loadDestinationMeta(slug: string): Promise<Record<string, unknown> | null> {
  const file = path.join(DESTINATIONS_DIR, `${slug}.ts`)
  if (!fs.existsSync(file)) return null
  // Use require-like dynamic import; tsx will transpile.
  const mod = await import(file)
  return (mod.default ?? mod.meta ?? null) as Record<string, unknown> | null
}

async function translateDestination(slug: string, locale: Locale, force: boolean): Promise<'ok' | 'skip' | 'fail'> {
  const out = overlayPath(locale, 'destinations', slug)
  if (!force && fs.existsSync(out)) return 'skip'

  const meta = await loadDestinationMeta(slug)
  if (!meta) {
    console.error(`  [destinations] [${slug}] could not load meta`)
    return 'fail'
  }

  // Build a payload of translatable fields only. `hero`, `currency`, `timezone`
  // stay verbatim — we don't include them in the overlay at all.
  const payload = {
    tagline: meta.tagline ?? '',
    intro: meta.intro ?? '',
    bestTime: meta.bestTime ?? '',
    flightFrom: meta.flightFrom ?? '',
    topExperience: meta.topExperience ?? '',
    perfectFor: meta.perfectFor ?? [],
    skipIf: meta.skipIf ?? [],
    experiences: meta.experiences ?? [],
    months: meta.months ?? [],
    budgetTiers: meta.budgetTiers ?? [],
    areas: meta.areas ?? [],
    expertTips: meta.expertTips ?? [],
    packing: meta.packing ?? [],
    guide: meta.guide ?? {},
    localFood: meta.localFood ?? '',
    language: meta.language ?? '',
  }

  const instruction = `Translate every string value of this destination metadata.
Rules:
- Inside "experiences[*]": translate "title", "description", "cost", "tip". DO NOT translate "icon" (it is an emoji, keep verbatim).
- Inside "months[*]": translate "weather", "crowds", "price", "verdict". DO NOT translate "month" (English month name) or "emoji".
- Inside "budgetTiers[*]": translate "label", "gets", "example". DO NOT translate "range" (currency amounts).
- Inside "areas[*]": translate "name" only if it is a generic descriptor (e.g. "South Coast"); keep specific place names verbatim. Translate "bestFor" and "description".
- Inside "expertTips[*]" and "packing[*]": translate everything.
- Inside "guide": translate every string value.
- Keep currency symbols, place names, brand names, hotel names, and emojis verbatim.
- Preserve JSON shape exactly.`

  const translated = (await callTranslate(locale, instruction, payload, 4096)) as typeof payload
  writeJson(out, translated)
  return 'ok'
}

// ── COMPARISONS ─────────────────────────────────────────────────────────────
async function loadComparisons(): Promise<Array<Record<string, unknown>>> {
  const mod = await import(COMPARISONS_FILE)
  return (mod.COMPARISONS ?? mod.default ?? []) as Array<Record<string, unknown>>
}

async function translateComparison(
  cmp: Record<string, unknown>,
  locale: Locale,
  force: boolean,
): Promise<'ok' | 'skip' | 'fail'> {
  const slug = String(cmp.slug)
  const out = overlayPath(locale, 'comparisons', slug)
  if (!force && fs.existsSync(out)) return 'skip'

  const a = cmp.a as { destination: string; label: string }
  const b = cmp.b as { destination: string; label: string }
  const payload = {
    a: { label: a?.label ?? '' },
    b: { label: b?.label ?? '' },
    tagline: cmp.tagline ?? '',
    metaDescription: cmp.metaDescription ?? '',
    verdict: cmp.verdict ?? '',
    tldr: cmp.tldr ?? {},
    criteria: (cmp.criteria as Array<{ label: string; aDetail: string; bDetail: string }> | undefined)?.map((c) => ({
      label: c.label,
      aDetail: c.aDetail,
      bDetail: c.bDetail,
    })) ?? [],
    pickA: cmp.pickA ?? {},
    pickB: cmp.pickB ?? {},
    faqs: cmp.faqs ?? [],
  }

  const instruction = `Translate every string value of this destination comparison.
- Keep all proper nouns (place names, hotel names, brand names) verbatim.
- Keep currency amounts, prices, flight times, and numeric values verbatim — translate only the surrounding prose.
- "criteria[*].label" is a category label (e.g. "Flight time (from Europe)") — translate it.
- "faqs[*]" use keys "q" and "a" — translate both values, preserve the keys.
- Preserve JSON shape exactly.`

  const translated = (await callTranslate(locale, instruction, payload, 4096)) as typeof payload
  writeJson(out, translated)
  return 'ok'
}

// ── PILLAR PAGES ────────────────────────────────────────────────────────────
// V1 approach: a hand-curated manifest of {key, englishText} per pillar page.
// We focus on the highest-leverage blocks: hero intro, key sections, FAQ, CTA,
// metadata. Body prose is consolidated into a few long blocks per page.

const PILLAR_MANIFESTS: Record<string, Record<string, string>> = {
  'maldives-honeymoon-cost': {
    metaTitle: 'Maldives Honeymoon Cost: Real Budget Breakdown for 2026',
    metaDescription:
      'How much does a Maldives honeymoon really cost in 2026? Real numbers for flights, overwater villas, transfers, food, and extras — by tier.',
    heroEyebrow: 'Honeymoon planning',
    heroTitle: 'How much does a Maldives honeymoon really cost?',
    heroSubtitle:
      'A clear, opinionated breakdown of what you will actually spend on a Maldives honeymoon in 2026 — from the seaplane to the sunset cocktails.',
    introBlock:
      'The Maldives is the single most expensive overwater honeymoon destination on earth, and also the most worth-it for the right couple. Here is exactly where the money goes, what you can cut, and what is genuinely non-negotiable. All figures are USD per couple for a 7-night trip in 2026.',
    driversTitle: 'What actually drives the cost',
    driversBlock:
      'Five things move the needle: the resort tier, the season, the seaplane vs speedboat transfer, whether you go all-inclusive, and how much you spend on excursions. The villa itself is only half the bill.',
    breakdownTitle: 'Full 7-night breakdown by tier',
    breakdownBlock:
      'Entry-level overwater (think Sun Siyam, Kandolhu) lands around $9,000–$13,000 all-in for two. Mid-tier signature (Velassaru, Anantara Kihavah) is $15,000–$22,000. Top-tier private-island (Soneva Jani, Cheval Blanc, Velaa) is $30,000–$60,000+ — and that is before the wine list.',
    seasonTitle: 'When to go (and what it costs)',
    seasonBlock:
      'November to April is dry season and prices peak — Christmas and New Year are 50–80% above shoulder. May to October is monsoon-shoulder, prices drop 30–40%, and the weather is far better than its reputation suggests.',
    savingsTitle: 'Where you can genuinely save',
    savingsBlock:
      'Skip the seaplane (book a speedboat-accessible resort within 30km of Malé), travel May–June, book directly with the resort for honeymoon perks, and prefer half-board over all-inclusive unless you drink heavily.',
    faqTitle: 'Maldives honeymoon cost FAQ',
    faq1Q: 'Is a Maldives honeymoon worth the money?',
    faq1A:
      'For couples who prioritize total privacy, water clarity, and the overwater villa experience — yes, unequivocally. For couples who want culture, food scenes, or to explore on foot — no, you will be bored.',
    faq2Q: 'What is the absolute minimum budget that still feels luxurious?',
    faq2A:
      'About $9,000 per couple for 7 nights, all-in, in shoulder season at a speedboat-accessible 5-star like Kandolhu or Sun Siyam. Below that you compromise on either the villa or the food.',
    ctaLabel: 'See our top Maldives resorts',
    ctaSubtext: 'Hand-picked for honeymooners — no AI fluff, real reporting.',
  },
  'bali-honeymoon-cost': {
    metaTitle: 'Bali Honeymoon Cost: Real 2026 Budget by Region',
    metaDescription:
      'How much a Bali honeymoon costs in 2026 — Ubud villas, Seminyak resorts, Nusa Dua all-inclusive. Real numbers, real trade-offs.',
    heroEyebrow: 'Honeymoon planning',
    heroTitle: 'How much does a Bali honeymoon really cost?',
    heroSubtitle:
      'Bali is the most flexible luxury honeymoon destination in the world — $4,000 or $40,000 per couple, both feel exceptional. Here is exactly where the money goes.',
    introBlock:
      'Bali is the rare destination where the spread between budget-romantic and ultra-luxury is enormous, and both ends are genuinely good. This is a real-numbers breakdown for a 10-night honeymoon in 2026, by region and tier.',
    driversTitle: 'What actually drives the cost',
    driversBlock:
      'Three things: which regions you split between (Ubud + a beach is the classic combo), whether you stay in private pool villas vs branded resorts, and how much you spend on drivers, spa days, and private dinners.',
    breakdownTitle: 'Full breakdown by tier and region',
    breakdownBlock:
      'Smart-budget pool villas (Ubud + Uluwatu) for two, 10 nights: $4,000–$6,500. Mid-tier resort circuit (Como Shambhala, The Edge, Soori): $9,000–$15,000. Top-tier (Capella Ubud, Bulgari Uluwatu, Nihi Sumba add-on): $20,000–$45,000.',
    seasonTitle: 'When to go (and what it costs)',
    seasonBlock:
      'Dry season (May–October) is peak — July and August see the highest prices and crowds. April and October are the sweet spot: dry, less busy, 20% cheaper. Wet season (November–March) is 30–40% cheaper but afternoon storms are real.',
    savingsTitle: 'Where you can genuinely save',
    savingsBlock:
      'Stay in independent pool villas in Ubud (often half the price of branded resorts for more space), eat at warungs and beach clubs rather than hotel restaurants, and hire a driver for the day instead of booking transfers individually.',
    faqTitle: 'Bali honeymoon cost FAQ',
    faq1Q: 'Is Bali too touristy for a honeymoon now?',
    faq1A:
      'Parts of it, yes — Canggu and central Seminyak feel overrun. But Ubud rice-terrace villas, Uluwatu clifftop resorts, and the east coast (Sidemen, Amed) are still spectacular and quieter than they were five years ago.',
    faq2Q: 'How does Bali compare to the Maldives on cost?',
    faq2A:
      'Bali is roughly one-third the cost for a comparable luxury experience. You trade overwater villas and total isolation for jungle, culture, food, and a far more flexible honeymoon.',
    ctaLabel: 'See our top Bali resorts and villas',
    ctaSubtext: 'Hand-picked for honeymooners across Ubud, Uluwatu, and Sumba.',
  },
  'how-to-plan-a-honeymoon': {
    metaTitle: 'How to Plan a Honeymoon: The 2026 Step-by-Step Guide',
    metaDescription:
      'A complete, opinionated guide to planning a honeymoon in 2026 — timing, budget, destination shortlisting, booking, and the small details that matter.',
    heroEyebrow: 'Honeymoon planning',
    heroTitle: 'How to plan a honeymoon, properly',
    heroSubtitle:
      'A step-by-step guide from couples who have planned hundreds of them. No fluff, no affiliate-driven nonsense — just the real process.',
    introBlock:
      'A great honeymoon is mostly about three decisions: how many nights you can really take off, what kind of trip you both want, and how you split a fixed budget between flights, the room, and the experiences. Get those three right and the rest is logistics.',
    step1Title: 'Step 1 — Set the timeline and length',
    step1Block:
      'Most couples take 7–10 nights. We strongly recommend at least 8 — anything shorter and the first two days are jet lag. If you are flying long-haul, 10–14 is ideal. Book 6–9 months ahead for peak season, 4–6 for shoulder.',
    step2Title: 'Step 2 — Define the trip you actually want',
    step2Block:
      'Beach-and-villa, multi-stop adventure, or city-and-mountain? Have an honest conversation about pace. The single most common honeymoon mistake is one partner wanting to relax and the other wanting to explore — pick a primary mode and add a small dose of the other.',
    step3Title: 'Step 3 — Build the budget envelope',
    step3Block:
      'A useful rule: 30% flights, 50% accommodation, 20% experiences and food. For a $15,000 honeymoon, that is $4,500 in flights, $7,500 in rooms, $3,000 in everything else. Adjust to match your trip — overwater Maldives shifts toward accommodation, multi-stop Asia shifts toward experiences.',
    step4Title: 'Step 4 — Shortlist destinations honestly',
    step4Block:
      'Cross-reference flight time, season, your trip type, and budget. Most couples should be comparing 3 destinations max. Pick the one that wins on the criterion you both care about most — not the most-Instagrammed.',
    step5Title: 'Step 5 — Book the foundation, then the flourishes',
    step5Block:
      'Book flights and the main hotel first — those are the hardest to change. Then transfers, then the standout experiences (a private dinner, a spa day, a sunset sail). Save 15% of budget for spontaneous decisions on the ground.',
    faqTitle: 'Honeymoon planning FAQ',
    faq1Q: 'How far in advance should we book?',
    faq1A:
      '6–9 months for peak-season tropical (Maldives Christmas, Bora Bora July). 4–6 months is enough for shoulder season. Last-minute is risky for the best villas — they book first.',
    faq2Q: 'Should we use a travel agent?',
    faq2A:
      'For a single-destination luxury honeymoon — usually no, you can book direct and get the same perks via the hotel. For complex multi-stop trips with tricky logistics, a specialist agent earns their keep.',
    ctaLabel: 'Browse honeymoon destinations',
    ctaSubtext: 'Real reporting on every major honeymoon destination.',
  },
  'best-honeymoon-resorts-2026': {
    metaTitle: 'The Best Honeymoon Resorts in the World, 2026',
    metaDescription:
      'Our hand-picked, ranked list of the best honeymoon resorts in the world for 2026 — overwater villas, clifftop suites, private islands. Real reporting.',
    heroEyebrow: 'The 2026 list',
    heroTitle: 'The best honeymoon resorts in the world, 2026',
    heroSubtitle:
      'Our ranked, hand-picked list — no sponsored placements, no AI-generated puff. The resorts our editors actually send couples to.',
    introBlock:
      'We score every property in our database on nine honeymoon-specific criteria — adults-only, couples-review percentage, spa quality, awards, pool, beach, room service, stars, and luxury indicators. The top of that ranking, edited and reality-checked, becomes this list.',
    methodologyTitle: 'How we ranked them',
    methodologyBlock:
      'We started with 600+ luxury hotels worldwide. We filtered for verified couples-review percentages above 70%, four-star-plus minimum, and at least one of: overwater villa, private pool villa, or adults-only. Then our editors visited or vetted each top entry.',
    overallTitle: 'The overall top 10',
    overallBlock:
      'Soneva Jani (Maldives), Cheval Blanc Randheli (Maldives), Le Sirenuse (Amalfi), Belmond Caruso (Ravello), Four Seasons Bora Bora, Capella Ubud (Bali), Nihi Sumba (Indonesia), Aman Tokyo, Six Senses Ninh Van Bay (Vietnam), Como Parrot Cay (Turks and Caicos).',
    categoryTitle: 'By category — beach, mountain, design, value',
    categoryBlock:
      'Best overwater: Soneva Jani. Best clifftop: Le Sirenuse. Best jungle: Capella Ubud. Best design-forward: Aman Tokyo. Best value-for-luxury: Como Uma Canggu. Best adults-only: Excellence Playa Mujeres. Best for adventure: Nihi Sumba.',
    faqTitle: 'Honeymoon resort FAQ',
    faq1Q: 'Are overwater villas worth the price premium?',
    faq1A:
      'For 5–7 nights, yes, if it is your first time and the villa is the experience. For longer stays, splitting overwater + a beach villa or mainland resort gives you a more varied honeymoon for less.',
    faq2Q: 'How do we get honeymoon perks at these resorts?',
    faq2A:
      'Email the hotel directly 2 weeks before arrival, mention you are honeymooning, request a quiet villa, and ask if they have a honeymoon turndown or in-villa dinner. Most 5-stars include something complimentary.',
    ctaLabel: 'See the full ranked list',
    ctaSubtext: 'Filterable by destination, vibe, and budget.',
  },
}

async function translatePillarPage(slug: string, locale: Locale, force: boolean): Promise<'ok' | 'skip' | 'fail'> {
  const out = overlayPath(locale, 'pages', slug)
  if (!force && fs.existsSync(out)) return 'skip'

  const manifest = PILLAR_MANIFESTS[slug]
  if (!manifest) {
    console.error(`  [pages] [${slug}] no manifest defined`)
    return 'fail'
  }

  const instruction = `Translate every value of this object. The keys MUST stay identical (they are stable code identifiers). Translate values into idiomatic, evocative ${LOCALE_NAME[locale]} suitable for a luxury honeymoon publication. Keep brand names, hotel names, place names, currency symbols, and emojis verbatim.`

  const translated = (await callTranslate(locale, instruction, manifest, 4096)) as Record<string, string>
  writeJson(out, translated)
  return 'ok'
}

// ── orchestration ───────────────────────────────────────────────────────────
async function processInBatches<T>(
  items: T[],
  worker: (item: T, idx: number) => Promise<void>,
) {
  for (let i = 0; i < items.length; i += BATCH_SIZE) {
    const slice = items.slice(i, i + BATCH_SIZE)
    await Promise.all(slice.map((item, j) => worker(item, i + j)))
  }
}

async function runHotels(args: Args) {
  let slugs = fs
    .readdirSync(HOTELS_DIR)
    .filter((f) => f.endsWith('.json'))
    .map((f) => f.replace(/\.json$/, ''))
    .sort()
  if (args.slug) slugs = slugs.filter((s) => s === args.slug)
  if (args.limit) slugs = slugs.slice(0, args.limit)

  const total = slugs.length
  console.log(`[hotels] processing ${total} item(s) → ${args.locale}`)
  await processInBatches(slugs, async (slug, idx) => {
    const t0 = Date.now()
    try {
      const result = await translateHotel(slug, args.locale, args.force)
      const ms = Date.now() - t0
      if (result === 'skip') {
        skipped++
        console.log(`  [${idx + 1}/${total}] [hotels] [${slug}] skipped (overlay exists)`)
      } else {
        succeeded++
        console.log(`  [${idx + 1}/${total}] [hotels] [${slug}] ✓ (${ms}ms, in=${tokens.input} out=${tokens.output})`)
      }
    } catch (err) {
      failed++
      console.error(`  [${idx + 1}/${total}] [hotels] [${slug}] ✗ ${(err as Error).message}`)
    }
  })
}

async function runDestinations(args: Args) {
  let slugs = fs
    .readdirSync(DESTINATIONS_DIR)
    .filter((f) => f.endsWith('.ts'))
    .map((f) => f.replace(/\.ts$/, ''))
    .sort()
  if (args.slug) slugs = slugs.filter((s) => s === args.slug)
  if (args.limit) slugs = slugs.slice(0, args.limit)

  const total = slugs.length
  console.log(`[destinations] processing ${total} item(s) → ${args.locale}`)
  await processInBatches(slugs, async (slug, idx) => {
    const t0 = Date.now()
    try {
      const result = await translateDestination(slug, args.locale, args.force)
      const ms = Date.now() - t0
      if (result === 'skip') {
        skipped++
        console.log(`  [${idx + 1}/${total}] [destinations] [${slug}] skipped (overlay exists)`)
      } else {
        succeeded++
        console.log(`  [${idx + 1}/${total}] [destinations] [${slug}] ✓ (${ms}ms, in=${tokens.input} out=${tokens.output})`)
      }
    } catch (err) {
      failed++
      console.error(`  [${idx + 1}/${total}] [destinations] [${slug}] ✗ ${(err as Error).message}`)
    }
  })
}

async function runComparisons(args: Args) {
  const all = await loadComparisons()
  let list = all
  if (args.slug) list = list.filter((c) => String(c.slug) === args.slug)
  if (args.limit) list = list.slice(0, args.limit)

  const total = list.length
  console.log(`[comparisons] processing ${total} item(s) → ${args.locale}`)
  await processInBatches(list, async (cmp, idx) => {
    const slug = String(cmp.slug)
    const t0 = Date.now()
    try {
      const result = await translateComparison(cmp, args.locale, args.force)
      const ms = Date.now() - t0
      if (result === 'skip') {
        skipped++
        console.log(`  [${idx + 1}/${total}] [comparisons] [${slug}] skipped (overlay exists)`)
      } else {
        succeeded++
        console.log(`  [${idx + 1}/${total}] [comparisons] [${slug}] ✓ (${ms}ms, in=${tokens.input} out=${tokens.output})`)
      }
    } catch (err) {
      failed++
      console.error(`  [${idx + 1}/${total}] [comparisons] [${slug}] ✗ ${(err as Error).message}`)
    }
  })
}

async function runPages(args: Args) {
  let slugs = Object.keys(PILLAR_MANIFESTS)
  if (args.slug) slugs = slugs.filter((s) => s === args.slug)
  if (args.limit) slugs = slugs.slice(0, args.limit)

  const total = slugs.length
  console.log(`[pages] processing ${total} item(s) → ${args.locale}`)
  await processInBatches(slugs, async (slug, idx) => {
    const t0 = Date.now()
    try {
      const result = await translatePillarPage(slug, args.locale, args.force)
      const ms = Date.now() - t0
      if (result === 'skip') {
        skipped++
        console.log(`  [${idx + 1}/${total}] [pages] [${slug}] skipped (overlay exists)`)
      } else {
        succeeded++
        console.log(`  [${idx + 1}/${total}] [pages] [${slug}] ✓ (${ms}ms, in=${tokens.input} out=${tokens.output})`)
      }
    } catch (err) {
      failed++
      console.error(`  [${idx + 1}/${total}] [pages] [${slug}] ✗ ${(err as Error).message}`)
    }
  })
}

async function main() {
  const args = parseArgs()
  if (!process.env.ANTHROPIC_API_KEY) {
    console.error('Error: ANTHROPIC_API_KEY not set (looked for .env and .env.local).')
    process.exit(1)
  }

  ensureDir(I18N_DIR)
  const tStart = Date.now()

  if (args.target === 'hotels' || args.target === 'all') await runHotels(args)
  if (args.target === 'destinations' || args.target === 'all') await runDestinations(args)
  if (args.target === 'comparisons' || args.target === 'all') await runComparisons(args)
  if (args.target === 'pages' || args.target === 'all') await runPages(args)

  const elapsed = ((Date.now() - tStart) / 1000).toFixed(1)
  const inCost = (tokens.input / 1_000_000) * INPUT_COST_PER_M
  const outCost = (tokens.output / 1_000_000) * OUTPUT_COST_PER_M
  const totalCost = inCost + outCost

  console.log('')
  console.log('────────────────────────────────────────────────────────')
  console.log(`Done in ${elapsed}s — ok=${succeeded} skip=${skipped} fail=${failed}`)
  console.log(`Tokens: input=${tokens.input.toLocaleString()}  output=${tokens.output.toLocaleString()}`)
  console.log(
    `Cost:   input=$${inCost.toFixed(4)}  output=$${outCost.toFixed(4)}  total=$${totalCost.toFixed(4)}`,
  )
  console.log('────────────────────────────────────────────────────────')
}

main().catch((err) => {
  console.error('Fatal:', err)
  process.exit(1)
})
