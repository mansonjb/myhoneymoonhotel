/* eslint-disable @typescript-eslint/no-explicit-any */
import * as fs from 'fs'
import * as path from 'path'

interface Hotel {
  slug: string
  name: string
  destination: string
  country: string
  honeymoon_score: number
  price_per_night_usd: { min: number; max: number }
  adults_only: boolean
  stars: number
  experience_types: string[]
  seo?: { title?: string; description?: string }
  [k: string]: unknown
}

const DIR = path.join(process.cwd(), 'data', 'hotels')
const FORCE = process.argv.includes('--force')
// Manually curated SEO slugs to never overwrite, even with --force
const MANUAL_SEO_SLUGS = new Set([
  'cempedak-private-island-indonesia',
  'eilert-smith-hotel-stavanger-norway',
  'half-moon-jamaica',
  'hyatt-regency-cabo-verde-cape-verde',
  'passalacqua-lake-como-italy',
  'sossusvlei-desert-lodge-namibia',
  'the-edge-bali-uluwatu',
  'te-tiare-beach-resort-huahine-french-polynesia',
])

// ---------- helpers ----------

const ALL_CAPS_TOKENS = new Set(['uae', 'usa', 'uk'])
function prettyDest(dest: string): string {
  return dest
    .split('-')
    .map((w) => {
      if (ALL_CAPS_TOKENS.has(w.toLowerCase())) return w.toUpperCase()
      if (w.toLowerCase() === 'and') return 'and'
      return w.charAt(0).toUpperCase() + w.slice(1)
    })
    .join(' ')
}

function shortName(name: string): string {
  let n = name
  n = n.replace(/^(A |The )/i, '')
  n = n.replace(/, A Belmond Hotel.*$/i, '')
  n = n.replace(/, Luxury Collection.*$/i, '')
  n = n.replace(/, a Luxury Collection.*$/i, '')
  n = n.replace(/, The Luxury Collection.*$/i, '')
  n = n.replace(/, Marriott.*$/i, '')
  n = n.replace(/, an? IHG Hotel.*$/i, '')
  n = n.replace(/, an? Autograph Collection.*$/i, '')
  n = n.replace(/, Curio Collection.*$/i, '')
  n = n.replace(/ — .*/g, '')
  n = n.replace(/ - .*/g, '')
  return n.trim()
}

const PRIVATE_ISLAND_DESTS = new Set([
  'tetiaroa',
  'vatulele',
  'laucala',
  'kokomo',
  'mnemba',
  'north-island',
  'bawah',
  'amanpulo',
  'cempedak',
])
const OVERWATER_DESTS = new Set(['maldives', 'bora-bora', 'french-polynesia'])
const SAFARI_DESTS = new Set([
  'kenya',
  'tanzania',
  'botswana',
  'namibia',
  'south-africa',
  'rwanda',
  'madagascar',
])
const CLIFF_DESTS = new Set(['amalfi', 'sicily'])
const MOUNTAIN_DESTS = new Set(['switzerland', 'bhutan', 'peru', 'new-zealand'])
const DESERT_DESTS = new Set(['oman', 'uae', 'jordan'])

function detectHook(h: Hotel): string {
  const name = h.name.toLowerCase()
  const dest = h.destination.toLowerCase()
  const exp = (h.experience_types || []).map((e) => e.toLowerCase())

  // 1 Private Island
  if (
    name.includes('private island') ||
    PRIVATE_ISLAND_DESTS.has(dest) ||
    (/\b(island|atoll)\b/i.test(h.name) && h.adults_only === true)
  ) {
    return 'Private Island'
  }
  // 2 Overwater
  if (exp.includes('overwater-bungalows') || OVERWATER_DESTS.has(dest)) {
    return 'Overwater Villas'
  }
  // 3 Cliffside Cave Suites — Santorini
  if (dest === 'santorini') return 'Cliffside Cave Suites'
  // 4 Lakefront Villa
  if (dest === 'lake-como') return 'Lakefront Villa'
  // 5 Safari Camp
  if (exp.includes('safari') || SAFARI_DESTS.has(dest)) return 'Safari Camp'
  // 6 Cliffside Honeymoon
  if (CLIFF_DESTS.has(dest) || /cliff/i.test(h.name)) return 'Cliffside Honeymoon'
  // 7 Adults-Only
  if (h.adults_only === true) return 'Adults-Only Resort'
  // 8 Cave Hotel
  if (dest === 'cappadocia' || /cave/i.test(h.name)) return 'Cave Hotel'
  // 9 Riad
  if (dest === 'morocco' && /(riad|kasbah)/i.test(h.name)) return 'Riad'
  // 10 Glass Igloo
  if (dest === 'lapland' || /(igloo|aurora)/i.test(h.name)) return 'Glass Igloo'
  // 11 Ryokan
  if (dest === 'japan' && /(ryokan|hoshinoya|hoshino)/i.test(h.name)) return 'Ryokan'
  // 12 Tented Camp
  if (/(tent|camp)/i.test(h.name)) return 'Tented Camp'
  // 13 Mountain Lodge
  if (MOUNTAIN_DESTS.has(dest)) return 'Mountain Lodge'
  // 14 Desert Resort
  if (DESERT_DESTS.has(dest) || /desert/i.test(h.name)) return 'Desert Resort'
  // 15 Treehouse
  if (/tree/i.test(h.name)) return 'Treehouse'
  // 16 5-Star Resort
  if (h.stars === 5 && h.price_per_night_usd?.max >= 1500) return '5-Star Resort'
  // 17 Boutique
  if (h.stars === 5 && h.price_per_night_usd?.max < 800) return 'Boutique'
  // 18 Default
  return 'Honeymoon Resort'
}

// ---------- title ----------

function buildTitle(h: Hotel, hook: string, seen: Set<string>): string {
  const lowScore = h.honeymoon_score < 60
  const topScore = h.honeymoon_score >= 95

  const baseName = shortName(h.name)
  const prestige = topScore ? 'Top-Scored ' : ''
  const reviewWord = lowScore ? 'Hotel' : 'Review'

  // Hooks that already end with "Resort"/"Hotel"/"Villa"/"Camp" etc → drop redundant "Honeymoon Resort Honeymoon"
  const hookEndsInNoun = /(Resort|Hotel|Villa|Villas|Camp|Lodge|Ryokan|Riad|Treehouse|Igloo|Boutique|Suites)$/i.test(
    hook,
  )
  // Special: if hook already contains "Honeymoon" don't duplicate it
  const hookHasHoneymoon = /honeymoon/i.test(hook)
  const hookPhrase = hookEndsInNoun ? hook : `${hook} Honeymoon`
  let headline: string
  if (hookHasHoneymoon) {
    headline = `${hook} ${reviewWord}`
  } else if (hookEndsInNoun) {
    headline = `${hookPhrase} Honeymoon ${reviewWord}`
  } else {
    headline = `${hookPhrase} ${reviewWord}`
  }

  // Variants in priority order
  const variants: string[] = []
  // v1
  variants.push(`${baseName}: ${prestige}${headline} (2026)`)
  // v2: drop (2026)
  variants.push(`${baseName}: ${prestige}${headline}`)
  // v3: drop review word
  variants.push(`${baseName}: ${prestige}${hookPhrase} (2026)`)
  // v4
  variants.push(`${baseName}: ${prestige}${hookPhrase}`)
  // v5: em dash
  variants.push(`${baseName} — ${hookPhrase}`)
  // v6: minimal
  variants.push(`${baseName}: ${hook}`)

  let chosen = variants.find((v) => v.length <= 60) || variants[variants.length - 1]

  // If still > 60, hard truncate by shortening name further
  if (chosen.length > 60) {
    const shorter = baseName.split(/[,—-]/)[0].trim()
    chosen = `${shorter}: ${hook} Honeymoon`
    if (chosen.length > 60) {
      // word-boundary truncate
      const words = chosen.split(' ')
      while (words.length > 1 && words.join(' ').length > 60) words.pop()
      chosen = words.join(' ')
    }
  }

  // Dedup
  if (seen.has(chosen)) {
    const dest = prettyDest(h.destination)
    const country = prettyDest(h.country)
    const tryDest = chosen.replace(/( \(2026\))?$/, ` ${dest}$1`).trim()
    if (!seen.has(tryDest) && tryDest.length <= 60) {
      chosen = tryDest
    } else {
      const minimal = `${baseName} ${dest}: ${hook} Honeymoon`
      if (minimal.length <= 60 && !seen.has(minimal)) chosen = minimal
      else {
        const minimal2 = `${baseName} ${country}: ${hook}`
        if (minimal2.length <= 60 && !seen.has(minimal2)) chosen = minimal2
        else {
          // last resort: append destination slug
          chosen = `${baseName} — ${hook} (${dest})`
          if (chosen.length > 60) {
            chosen = chosen.slice(0, 60).replace(/\s+\S*$/, '')
          }
        }
      }
    }
  }

  return chosen
}

// ---------- description ----------

function formatPrice(min: number): string {
  if (!min || min <= 0) return ''
  if (min >= 10000) {
    const rounded = Math.round(min / 1000) * 1000
    return `$${rounded.toLocaleString('en-US')}+/night`
  }
  return `$${min}/night`
}

function hookLead(hook: string, prettyD: string): string {
  switch (hook) {
    case 'Overwater Villas':
      return `Overwater villas above the lagoon in ${prettyD}`
    case 'Safari Camp':
      return `Big Five safari camp in ${prettyD}'s bush`
    case 'Adults-Only Resort':
      return `Adults-only honeymoon resort in ${prettyD}`
    case 'Cliffside Cave Suites':
      return `Cliffside cave suites carved into Santorini's caldera`
    case 'Private Island':
      return `Private island for honeymooners in ${prettyD}`
    case 'Lakefront Villa':
      return `Lakefront honeymoon villa on Lake Como`
    case 'Cliffside Honeymoon':
      return `Cliffside honeymoon hotel in ${prettyD}`
    case 'Cave Hotel':
      return `Cave-suite hotel in ${prettyD}`
    case 'Riad':
      return `Romantic riad in ${prettyD}`
    case 'Glass Igloo':
      return `Glass-igloo aurora retreat in ${prettyD}`
    case 'Ryokan':
      return `Traditional ryokan honeymoon in ${prettyD}`
    case 'Tented Camp':
      return `Luxury tented camp in ${prettyD}`
    case 'Mountain Lodge':
      return `Mountain honeymoon lodge in ${prettyD}`
    case 'Desert Resort':
      return `Desert honeymoon resort in ${prettyD}`
    case 'Treehouse':
      return `Treehouse honeymoon retreat in ${prettyD}`
    case '5-Star Resort':
      return `5-star honeymoon resort in ${prettyD}`
    case 'Boutique':
      return `Boutique honeymoon hotel in ${prettyD}`
    default:
      return `Honeymoon hotel in ${prettyD}`
  }
}

function trimToBudget(s: string, max: number): string {
  if (s.length <= max) return s
  const words = s.split(' ')
  while (words.length > 1 && words.join(' ').length > max) words.pop()
  let out = words.join(' ')
  out = out.replace(/[,;:\s]+$/, '')
  if (!/[.!?]$/.test(out)) out += '.'
  return out
}

function padToMin(s: string, min: number, filler: string): string {
  if (s.length >= min) return s
  const trimmed = s.replace(/\.$/, '')
  const candidate = trimmed + '. ' + filler.replace(/\.$/, '') + '.'
  if (candidate.length <= 160) return candidate
  return s
}

function buildDescription(h: Hotel, hook: string, seenDescs: Set<string>): string {
  const prettyD = prettyDest(h.destination)
  const lead = hookLead(hook, prettyD)
  const score = h.honeymoon_score
  const min = h.price_per_night_usd?.min
  const priceStr = formatPrice(min)

  const scorePart = score ? ` Score ${score}/100` : ''
  const pricePart = priceStr ? `, from ${priceStr}` : ''

  // Primary template
  const base = `${lead}.${scorePart ? scorePart : ''}${pricePart}. Honest 2026 verdict, best room, 7-night itinerary, real cost & email.`

  let desc = base
  // If under 130, add a trust phrase
  if (desc.length < 130) {
    desc = padToMin(
      desc,
      130,
      'Editor pick, every detail vetted',
    )
  }
  // If still under, try another
  if (desc.length < 130) {
    desc = desc.replace(/\.$/, '') + ' — vetted by honeymoon editors.'
  }
  // If over 160, trim
  if (desc.length > 160) {
    // Try shorter variant: drop "& email"
    const shorter = `${lead}.${scorePart}${pricePart}. Honest 2026 verdict, best room, 7-night itinerary, real cost.`
    desc = shorter
  }
  if (desc.length > 160) {
    const shorter2 = `${lead}.${scorePart}${pricePart}. Honest 2026 verdict, best room, real cost.`
    desc = shorter2
  }
  if (desc.length > 160) {
    desc = trimToBudget(desc, 160)
  }
  if (desc.length < 130) {
    // last padding
    desc = desc.replace(/\.$/, '') + ' Real cost, best room & email template inside.'
    if (desc.length > 160) desc = trimToBudget(desc, 160)
  }

  // Dedup
  if (seenDescs.has(desc)) {
    const country = prettyDest(h.country)
    const variant = desc.replace(/Honest 2026/, `Honest 2026 ${country}`)
    if (!seenDescs.has(variant) && variant.length <= 160) desc = variant
  }

  return desc
}

// ---------- write with field ordering ----------

function writeHotelWithSeo(p: string, hotel: Hotel, seo: { title: string; description: string }) {
  // Read raw to determine current key order, rebuild preserving order with seo inserted after country.
  const obj = hotel as Record<string, unknown>
  const keys = Object.keys(obj).filter((k) => k !== 'seo')
  const out: Record<string, unknown> = {}
  for (const k of keys) {
    out[k] = obj[k]
    if (k === 'country') {
      out['seo'] = seo
    }
  }
  // Safety: ensure seo present
  if (!('seo' in out)) out['seo'] = seo
  fs.writeFileSync(p, JSON.stringify(out, null, 2) + '\n')
}

// ---------- main ----------

function main() {
  const files = fs.readdirSync(DIR).filter((f) => f.endsWith('.json'))
  let written = 0
  let skipped = 0
  let lowScoreFlagged: string[] = []
  let collisionFixed = 0
  const seenTitles = new Set<string>()
  const seenDescs = new Set<string>()
  const titleLengths: number[] = []
  const descLengths: number[] = []
  const samples: { slug: string; hook: string; title: string; description: string }[] = []
  const hookCounts: Record<string, number> = {}

  // Preload manual SEO titles into seen set
  for (const file of files) {
    const p = path.join(DIR, file)
    try {
      const h: Hotel = JSON.parse(fs.readFileSync(p, 'utf-8'))
      if (MANUAL_SEO_SLUGS.has(h.slug) && h.seo?.title) {
        seenTitles.add(h.seo.title)
        if (h.seo.description) seenDescs.add(h.seo.description)
      }
    } catch {}
  }

  for (const file of files) {
    const p = path.join(DIR, file)
    const hotel: Hotel = JSON.parse(fs.readFileSync(p, 'utf-8'))
    if (MANUAL_SEO_SLUGS.has(hotel.slug)) {
      skipped++
      continue
    }
    if (!FORCE && hotel.seo?.title) {
      skipped++
      continue
    }

    const hook = detectHook(hotel)
    hookCounts[hook] = (hookCounts[hook] || 0) + 1

    const titleBefore = buildTitle(hotel, hook, new Set())
    const title = buildTitle(hotel, hook, seenTitles)
    if (title !== titleBefore) collisionFixed++
    const description = buildDescription(hotel, hook, seenDescs)

    seenTitles.add(title)
    seenDescs.add(description)
    titleLengths.push(title.length)
    descLengths.push(description.length)

    if (hotel.honeymoon_score < 60) lowScoreFlagged.push(hotel.slug)

    writeHotelWithSeo(p, hotel, { title, description })
    written++
    if (samples.length < 12) samples.push({ slug: hotel.slug, hook, title, description })
  }

  const avg = (arr: number[]) =>
    arr.length ? Math.round(arr.reduce((a, b) => a + b, 0) / arr.length) : 0

  console.log(`\n=== SEO Generation Report ===`)
  console.log(`Total files: ${files.length}`)
  console.log(`Written:     ${written}`)
  console.log(`Skipped:     ${skipped}`)
  console.log(`\nTitle length: avg=${avg(titleLengths)} min=${Math.min(...titleLengths)} max=${Math.max(...titleLengths)}`)
  console.log(`Desc length:  avg=${avg(descLengths)} min=${Math.min(...descLengths)} max=${Math.max(...descLengths)}`)
  console.log(`Title collisions resolved: ${collisionFixed}`)

  // Validate lengths
  const titleOver = titleLengths.filter((l) => l > 60).length
  const titleUnder = titleLengths.filter((l) => l < 30).length
  const descOver = descLengths.filter((l) => l > 160).length
  const descUnder = descLengths.filter((l) => l < 130).length
  console.log(`\nTitles >60: ${titleOver}, <30: ${titleUnder}`)
  console.log(`Descs >160: ${descOver}, <130: ${descUnder}`)

  console.log(`\nHook distribution:`)
  Object.entries(hookCounts)
    .sort(([, a], [, b]) => b - a)
    .forEach(([k, v]) => console.log(`  ${v.toString().padStart(4)} — ${k}`))

  console.log(`\nLow-score flagged (<60): ${lowScoreFlagged.length}`)
  if (lowScoreFlagged.length) console.log('  ' + lowScoreFlagged.slice(0, 10).join(', '))

  console.log(`\nSamples:`)
  samples.forEach((s) => {
    console.log(`  [${s.hook}] ${s.slug}`)
    console.log(`    T(${s.title.length}): ${s.title}`)
    console.log(`    D(${s.description.length}): ${s.description}`)
  })
}

main()
