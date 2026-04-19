/**
 * batch-run.ts
 * Run the hotel pipeline for multiple destinations in parallel.
 *
 * Usage:
 *   npx ts-node scripts/pipeline/batch-run.ts                     # Phase 1 (default)
 *   npx ts-node scripts/pipeline/batch-run.ts --phase=2            # Phase 2
 *   npx ts-node scripts/pipeline/batch-run.ts --phase=all          # All phases
 *   npx ts-node scripts/pipeline/batch-run.ts --dest=hawaii,japan  # Specific destinations
 *   npx ts-node scripts/pipeline/batch-run.ts --dry-run            # List what would run
 *
 * Options:
 *   --concurrency=N   Max parallel destinations (default: 3)
 *   --limit=N         Max hotels per destination (default: 12)
 *   --phase=1|2|3|all Which phase to run (default: 1)
 *   --dest=a,b,c      Run specific destinations only
 *   --dry-run         Print plan without executing
 *   --skip-photos     Skip Google Places photo re-fetch at the end
 */

import * as dotenv from 'dotenv'
import * as path from 'path'
dotenv.config({ path: path.join(process.cwd(), '.env.local') })
dotenv.config({ path: path.join(process.cwd(), '.env') })

import * as fs from 'fs'
import { collectHotelsForDestination, RawHotel } from './collect'
import { calculateHoneymoonScore, meetsQualityGate } from './score'
import { generateHotelContent } from './generate'

const HOTELS_DIR = path.join(process.cwd(), 'data', 'hotels')

// ─── Phase definitions (priority order) ──────────────────────────────────────

const PHASES: Record<string, string[]> = {
  // Phase 1: High search volume, European + NA friendly
  '1': [
    'hawaii',
    'thailand',
    'mexico',
    'amalfi',
    'greece',
    'mauritius',
    'zanzibar',
    'kenya',
    'fiji',
    'croatia',
    'portugal',
    'morocco',
  ],
  // Phase 2: Expand existing + new Indian Ocean / Asia-Pacific
  '2': [
    'maldives',      // expand (add new hotels beyond existing 6)
    'bali',          // expand
    'seychelles',    // expand
    'bora-bora',     // expand
    'st-lucia',      // expand
    'japan',
    'sri-lanka',
    'indonesia',
    'philippines',
    'mozambique',
    'reunion',
    'st-barts',
  ],
  // Phase 3: Long tail + niche
  '3': [
    'south-africa',
    'tanzania',
    'french-polynesia',
    'vietnam',
    'cambodia',
    'costa-rica',
    'spain',
    'cape-verde',
    'new-zealand',
    'caribbean',
    'turks-and-caicos', // expand
    'santorini',        // expand
  ],
}

// ─── Types ────────────────────────────────────────────────────────────────────

interface DestinationResult {
  destination: string
  generated: number
  skipped: number
  failed: number
  durationMs: number
}

// ─── Per-destination pipeline ────────────────────────────────────────────────

async function runDestination(destination: string, limit: number): Promise<DestinationResult> {
  const start = Date.now()
  let generated = 0, skipped = 0, failed = 0

  const log = (msg: string) => console.log(`  [${destination}] ${msg}`)

  try {
    log(`collecting...`)
    const rawHotels = await collectHotelsForDestination(destination, limit)
    log(`${rawHotels.length} found`)

    if (rawHotels.length === 0) {
      log(`⚠️  no hotels found`)
      return { destination, generated: 0, skipped: 0, failed: 0, durationMs: Date.now() - start }
    }

    // Score & filter
    const qualified = rawHotels
      .map((hotel: RawHotel) => {
        const score = calculateHoneymoonScore(hotel)
        return { ...hotel, honeymoon_score: score.total, score_breakdown: score.breakdown }
      })
      .filter(hotel => meetsQualityGate({ total: hotel.honeymoon_score, breakdown: hotel.score_breakdown }))

    log(`${qualified.length}/${rawHotels.length} passed quality gate`)

    // Generate content
    for (const hotel of qualified) {
      const outputPath = path.join(HOTELS_DIR, `${hotel.slug}.json`)

      if (fs.existsSync(outputPath)) {
        log(`[cache] ${hotel.name}`)
        skipped++
        continue
      }

      try {
        const content = await generateHotelContent(hotel)
        const hotelPage = { ...hotel, content, last_updated: new Date().toISOString() }
        fs.writeFileSync(outputPath, JSON.stringify(hotelPage, null, 2))
        generated++
        log(`✅ ${hotel.name}`)
        await sleep(400)
      } catch (e) {
        failed++
        log(`❌ ${hotel.name}: ${e}`)
      }
    }
  } catch (e) {
    log(`❌ destination failed: ${e}`)
    failed++
  }

  return { destination, generated, skipped, failed, durationMs: Date.now() - start }
}

// ─── Batch runner with controlled concurrency ─────────────────────────────────

async function runBatch(destinations: string[], concurrency: number, limit: number): Promise<DestinationResult[]> {
  const queue = [...destinations]
  const results: DestinationResult[] = []

  async function worker() {
    while (queue.length > 0) {
      const dest = queue.shift()!
      const result = await runDestination(dest, limit)
      results.push(result)
      printProgress(result)
    }
  }

  const workers = Array.from({ length: Math.min(concurrency, destinations.length) }, () => worker())
  await Promise.all(workers)

  return results
}

function printProgress(r: DestinationResult) {
  const s = Math.round(r.durationMs / 1000)
  console.log(
    `\n  ✅ ${r.destination.padEnd(20)} ` +
    `+${r.generated} new  ${r.skipped} cached  ${r.failed} failed  (${s}s)\n`
  )
}

function sleep(ms: number) { return new Promise(r => setTimeout(r, ms)) }

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  const args = process.argv.slice(2)
  const phase     = args.find(a => a.startsWith('--phase='))?.split('=')?.[1] ?? '1'
  const concStr   = args.find(a => a.startsWith('--concurrency='))?.split('=')?.[1] ?? '3'
  const limitStr  = args.find(a => a.startsWith('--limit='))?.split('=')?.[1] ?? '12'
  const destArg   = args.find(a => a.startsWith('--dest='))?.split('=')?.[1]
  const dryRun    = args.includes('--dry-run')
  const skipPhotos = args.includes('--skip-photos')

  const concurrency = parseInt(concStr)
  const limit = parseInt(limitStr)

  // Determine destination list
  let destinations: string[]
  if (destArg) {
    destinations = destArg.split(',').map(d => d.trim())
  } else if (phase === 'all') {
    destinations = [...PHASES['1'], ...PHASES['2'], ...PHASES['3']]
  } else {
    destinations = PHASES[phase] ?? PHASES['1']
  }

  // Check existing hotels count
  const existing = fs.existsSync(HOTELS_DIR)
    ? fs.readdirSync(HOTELS_DIR).filter(f => f.endsWith('.json')).length
    : 0

  console.log('\n🌍 myhoneymoonhotel.com — Batch Pipeline')
  console.log('─'.repeat(50))
  console.log(`Phase:        ${phase}`)
  console.log(`Destinations: ${destinations.length}`)
  console.log(`Concurrency:  ${concurrency} parallel`)
  console.log(`Limit/dest:   ${limit} hotels max`)
  console.log(`Existing:     ${existing} hotels already in /data/hotels/`)
  console.log(`Estimated:    ~${destinations.length * 8} new hotels`)
  console.log(`Est. time:    ~${Math.ceil(destinations.length * limit * 35 / concurrency / 60)} minutes`)
  console.log('─'.repeat(50))
  console.log('\nDestinations:')
  destinations.forEach((d, i) => console.log(`  ${String(i + 1).padStart(2)}. ${d}`))
  console.log()

  if (dryRun) {
    console.log('🔍 Dry run — exiting without executing.')
    return
  }

  if (!process.env.ANTHROPIC_API_KEY) {
    console.error('❌ ANTHROPIC_API_KEY not set in .env.local')
    process.exit(1)
  }
  if (!process.env.GOOGLE_PLACES_API_KEY) {
    console.warn('⚠️  GOOGLE_PLACES_API_KEY not set — photo download will be limited')
  }

  fs.mkdirSync(HOTELS_DIR, { recursive: true })

  const startAll = Date.now()
  const results = await runBatch(destinations, concurrency, limit)

  // Summary
  const totalNew    = results.reduce((s, r) => s + r.generated, 0)
  const totalCached = results.reduce((s, r) => s + r.skipped, 0)
  const totalFailed = results.reduce((s, r) => s + r.failed, 0)
  const totalTime   = Math.round((Date.now() - startAll) / 1000)

  console.log('\n' + '─'.repeat(50))
  console.log('📊 Batch complete')
  console.log(`  New hotels:    ${totalNew}`)
  console.log(`  Cached:        ${totalCached}`)
  console.log(`  Failed:        ${totalFailed}`)
  console.log(`  Total time:    ${Math.floor(totalTime/60)}m ${totalTime%60}s`)
  console.log(`  Hotels in DB:  ${existing + totalNew}`)
  console.log('─'.repeat(50))

  if (!skipPhotos && totalNew > 0) {
    console.log('\n📸 Running fix-photos to upgrade landscape images...')
    console.log('   Run manually: npx ts-node scripts/fix-photos.ts --all\n')
  }

  console.log('\n✅ Done! Commit with:')
  console.log('   git add data/hotels/ public/images/hotels/')
  console.log('   git commit -m "data: add hotels from batch phase ' + phase + '"')
  console.log('   git push origin main\n')
}

main().catch(console.error)
