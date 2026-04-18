import * as fs from 'fs'
import * as path from 'path'
import { collectHotelsForDestination, RawHotel } from './collect'
import { calculateHoneymoonScore, meetsQualityGate } from './score'
import { generateHotelContent } from './generate'

const HOTELS_DIR = path.join(process.cwd(), 'data', 'hotels')

async function run() {
  const args = process.argv.slice(2)
  const destArg = args.find(a => a.startsWith('--destination=') || a.startsWith('--destination'))
  const limitArg = args.find(a => a.startsWith('--limit='))

  const destination = destArg?.split('=')?.[1] || destArg?.split(' ')?.[1] || args[0] || 'maldives'
  const limit = parseInt(limitArg?.split('=')?.[1] || '50')

  console.log(`\n🏨 myhoneymoonhotel.com Pipeline`)
  console.log(`📍 Destination: ${destination}`)
  console.log(`📦 Limit: ${limit} hotels\n`)

  fs.mkdirSync(HOTELS_DIR, { recursive: true })

  // Step 1: Collect
  console.log('Step 1/3: Collecting hotels...')
  const rawHotels = await collectHotelsForDestination(destination, limit)
  console.log(`  Found ${rawHotels.length} hotels\n`)
  console.log(`  📸 Images will be downloaded and compressed to public/images/hotels/\n`)

  if (rawHotels.length === 0) {
    console.log('❌ No hotels found. Check TravelMyth connectivity or use seed data.')
    process.exit(1)
  }

  // Step 2: Score & filter
  console.log('Step 2/3: Scoring hotels...')
  const scoredHotels = rawHotels.map((hotel: RawHotel) => {
    const score = calculateHoneymoonScore(hotel)
    return { ...hotel, honeymoon_score: score.total, score_breakdown: score.breakdown }
  })

  const qualifiedHotels = scoredHotels.filter(hotel => {
    const passes = meetsQualityGate({ total: hotel.honeymoon_score, breakdown: hotel.score_breakdown })
    if (!passes) {
      console.log(`  [SKIP] ${hotel.name} — score ${hotel.honeymoon_score}/100 < 50`)
    }
    return passes
  })

  console.log(`  ${qualifiedHotels.length}/${rawHotels.length} hotels passed quality gate (score ≥ 50)\n`)

  // Step 3: Generate content
  console.log('Step 3/3: Generating content with Claude API...')
  let generated = 0

  for (const hotel of qualifiedHotels) {
    const outputPath = path.join(HOTELS_DIR, `${hotel.slug}.json`)

    // Skip if already generated (cache)
    if (fs.existsSync(outputPath)) {
      console.log(`  [CACHE] ${hotel.name}`)
      generated++
      continue
    }

    if (!process.env.ANTHROPIC_API_KEY) {
      console.warn('  [WARN] ANTHROPIC_API_KEY not set — using placeholder content')
    }

    try {
      console.log(`  Generating: ${hotel.name}...`)
      const content = await generateHotelContent(hotel)

      const hotelPage = {
        ...hotel,
        content,
        last_updated: new Date().toISOString(),
      }

      fs.writeFileSync(outputPath, JSON.stringify(hotelPage, null, 2))
      generated++
      console.log(`  ✅ ${hotel.name} → data/hotels/${hotel.slug}.json`)

      // Rate limiting for Claude API
      await new Promise(r => setTimeout(r, 500))
    } catch (e) {
      console.warn(`  [SKIP] Content generation failed for ${hotel.name}: ${e}`)
    }
  }

  console.log(`\n✅ Pipeline complete: ${generated} hotels written to data/hotels/`)
}

run().catch(console.error)
