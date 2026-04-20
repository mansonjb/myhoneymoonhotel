/**
 * fetch-booking-urls.ts
 * For each hotel JSON in data/hotels, fetch the direct Booking.com and Hotels.com URLs
 * by scraping DuckDuckGo HTML search with a site: filter.
 *
 * Adds `booking_url` and `hotels_com_url` fields to each hotel JSON so the
 * "Check Availability" buttons deep-link to the specific hotel.
 *
 * Usage:
 *   npx ts-node --project scripts/tsconfig.json scripts/fetch-booking-urls.ts [--force] [--provider=booking|hotels]
 */

import * as fs from 'fs'
import * as path from 'path'

const HOTELS_DIR = path.join(process.cwd(), 'data', 'hotels')
const CONCURRENCY = 6
const BETWEEN_MS = 250 // politeness delay per worker

interface Hotel {
  slug: string
  name: string
  destination: string
  booking_url?: string
  hotels_com_url?: string
  [k: string]: unknown
}

function sleep(ms: number) { return new Promise(r => setTimeout(r, ms)) }

async function fetchFirstMatch(query: string, siteHost: string): Promise<string | null> {
  const url = `https://html.duckduckgo.com/html/?q=${encodeURIComponent(query + ' site:' + siteHost)}`
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml',
        'Accept-Language': 'en-US,en;q=0.9',
      },
    })
    if (!res.ok) return null
    const html = await res.text()
    // DuckDuckGo wraps URLs in /l/?uddg=URL redirects — extract the actual target
    const uddgMatches = html.match(/uddg=([^&"']+)/g) ?? []
    for (const m of uddgMatches) {
      try {
        const decoded = decodeURIComponent(m.replace('uddg=', ''))
        if (decoded.includes(siteHost) && (
          siteHost === 'booking.com' ? decoded.includes('/hotel/') : decoded.includes('/ho')
        )) {
          // Strip query params except the clean URL
          return decoded.split('?')[0]
        }
      } catch { /* skip bad URLs */ }
    }
    // Fallback — look for direct links
    const direct = html.match(new RegExp(`https?://[a-z.]*${siteHost.replace('.', '\\.')}/[^"'\\s]+`, 'g')) ?? []
    for (const d of direct) {
      if (siteHost === 'booking.com' && d.includes('/hotel/')) return d.split('?')[0]
      if (siteHost === 'hotels.com' && d.match(/\/ho\d/)) return d.split('?')[0]
    }
    return null
  } catch {
    return null
  }
}

async function processHotel(file: string, force: boolean, provider: string): Promise<'updated' | 'skipped' | 'failed'> {
  const filePath = path.join(HOTELS_DIR, file)
  const hotel = JSON.parse(fs.readFileSync(filePath, 'utf-8')) as Hotel

  const needBooking = provider !== 'hotels' && (force || !hotel.booking_url)
  const needHotelsCom = provider !== 'booking' && (force || !hotel.hotels_com_url)

  if (!needBooking && !needHotelsCom) return 'skipped'

  const destLabel = hotel.destination.replace(/-/g, ' ')
  const query = `${hotel.name} ${destLabel}`

  let changed = false
  if (needBooking) {
    const url = await fetchFirstMatch(query, 'booking.com')
    if (url) { hotel.booking_url = url; changed = true }
  }
  if (needHotelsCom) {
    const url = await fetchFirstMatch(query, 'hotels.com')
    if (url) { hotel.hotels_com_url = url; changed = true }
  }

  if (changed) {
    fs.writeFileSync(filePath, JSON.stringify(hotel, null, 2))
    console.log(`  ✅ ${hotel.slug} — ${hotel.booking_url ? 'B' : '·'}${hotel.hotels_com_url ? 'H' : '·'}`)
    return 'updated'
  } else {
    console.log(`  ⚠️  ${hotel.slug} — no match found`)
    return 'failed'
  }
}

async function main() {
  const args = process.argv.slice(2)
  const force = args.includes('--force')
  const providerArg = args.find(a => a.startsWith('--provider='))?.split('=')[1] ?? 'both'

  const files = fs.readdirSync(HOTELS_DIR).filter(f => f.endsWith('.json')).sort()
  console.log(`\n🔗 Fetching direct URLs for ${files.length} hotels (concurrency=${CONCURRENCY})`)
  console.log(`   provider=${providerArg} force=${force}\n`)

  const queue = [...files]
  const results = { updated: 0, skipped: 0, failed: 0 }

  async function worker(id: number) {
    while (queue.length > 0) {
      const file = queue.shift()!
      try {
        const r = await processHotel(file, force, providerArg)
        results[r]++
      } catch (e) {
        console.warn(`  ❌ ${file}: ${e}`)
        results.failed++
      }
      await sleep(BETWEEN_MS)
    }
  }

  await Promise.all(Array.from({ length: CONCURRENCY }, (_, i) => worker(i)))

  console.log(`\n📊 Done — ${results.updated} updated, ${results.skipped} skipped, ${results.failed} failed\n`)
}

main().catch(e => { console.error(e); process.exit(1) })
