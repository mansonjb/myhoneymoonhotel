import * as fs from 'fs'
import * as path from 'path'
import { Hotel } from '../../types/hotel'

const HOTELS_DIR = path.join(process.cwd(), 'data', 'hotels')

export function getAllHotels(): Hotel[] {
  if (!fs.existsSync(HOTELS_DIR)) return []
  return fs.readdirSync(HOTELS_DIR)
    .filter(f => f.endsWith('.json'))
    .map(f => JSON.parse(fs.readFileSync(path.join(HOTELS_DIR, f), 'utf-8')) as Hotel)
    .sort((a, b) => b.honeymoon_score - a.honeymoon_score)
}

export function getHotelBySlug(slug: string): Hotel | null {
  const filePath = path.join(HOTELS_DIR, `${slug}.json`)
  if (!fs.existsSync(filePath)) return null
  return JSON.parse(fs.readFileSync(filePath, 'utf-8')) as Hotel
}

export function getHotelsByDestination(destination: string): Hotel[] {
  return getAllHotels().filter(h => h.destination === destination)
}

export function getHotelsByExperience(experienceType: string): Hotel[] {
  return getAllHotels().filter(h => h.experience_types.includes(experienceType))
}

export function getRelatedHotels(hotel: Hotel): { sameStyle: Hotel[]; sameDestination: Hotel[] } {
  const all = getAllHotels().filter(h => h.slug !== hotel.slug)

  const sameStyle = all
    .filter(h => h.experience_types.some(t => hotel.experience_types.includes(t)))
    .filter(h => h.destination !== hotel.destination)
    .slice(0, 3)

  const sameDestination = all
    .filter(h => h.destination === hotel.destination)
    .slice(0, 3)

  return { sameStyle, sameDestination }
}

export function getAllDestinations(): string[] {
  return [...new Set(getAllHotels().map(h => h.destination))]
}

export function getAllExperienceTypes(): string[] {
  return [...new Set(getAllHotels().flatMap(h => h.experience_types))]
}
