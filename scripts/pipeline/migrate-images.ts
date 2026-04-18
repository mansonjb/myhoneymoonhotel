import * as fs from 'fs'
import * as path from 'path'
import { downloadAndCompressPhotos } from './download-images'

const HOTELS_DIR = path.join(process.cwd(), 'data', 'hotels')

async function migrate() {
  const files = fs.readdirSync(HOTELS_DIR).filter(f => f.endsWith('.json'))
  console.log(`\n📸 Migrating images for ${files.length} hotels to local WebP...\n`)

  for (const file of files) {
    const hotelPath = path.join(HOTELS_DIR, file)
    const hotel = JSON.parse(fs.readFileSync(hotelPath, 'utf-8'))
    const slug = hotel.slug

    // Check if any photo is already local
    const hasExternal = hotel.photos.some((p: { url: string }) => p.url.startsWith('http'))
    if (!hasExternal) {
      console.log(`  [SKIP] ${hotel.name} — already local`)
      continue
    }

    console.log(`  Processing: ${hotel.name}`)
    const processed = await downloadAndCompressPhotos(slug, hotel.photos)

    if (processed.length > 0) {
      hotel.photos = processed
      fs.writeFileSync(hotelPath, JSON.stringify(hotel, null, 2))
      console.log(`  ✅ ${hotel.name} — ${processed.length} photos migrated\n`)
    } else {
      console.log(`  ⚠️  ${hotel.name} — no photos downloaded (external URLs may be broken)\n`)
    }
  }

  console.log('✅ Migration complete')
}

migrate().catch(console.error)
