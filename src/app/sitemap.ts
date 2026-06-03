import { MetadataRoute } from 'next'
import { getAllHotels, getAllDestinations, getAllExperienceTypes } from '@/lib/hotels'
import { getCountriesWithHotels } from '@/lib/countries'
import { getAllComparisonSlugs } from '../../data/comparisons'
import { getAllHotelComparisonSlugs } from '../../data/hotel-comparisons'

const SITE_URL = 'https://myhoneymoonhotel.com'

// Locales that have a fully-rendered tree alongside English. Spanish + Portuguese + French live.
const LIVE_LOCALES = ['es', 'pt', 'fr'] as const

interface PathEntry {
  path: string
  lastModified: Date
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
  priority: number
}

function entry(p: PathEntry): MetadataRoute.Sitemap[number] {
  // Spread English + every live alternate locale. hreflang lives in `alternates.languages`.
  const url = `${SITE_URL}${p.path === '/' ? '' : p.path}` || SITE_URL
  const languages: Record<string, string> = {
    en: url,
    'x-default': url,
  }
  for (const loc of LIVE_LOCALES) {
    languages[loc] = `${SITE_URL}/${loc}${p.path === '/' ? '' : p.path}`
  }
  return {
    url,
    lastModified: p.lastModified,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
    alternates: { languages },
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const hotels = getAllHotels()
  const destinations = getAllDestinations()
  const experiences = getAllExperienceTypes()
  const comparisons = getAllComparisonSlugs()
  const hotelComparisons = getAllHotelComparisonSlugs()

  const staticPaths: PathEntry[] = [
    { path: '/', lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
    { path: '/destinations', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.85 },
    { path: '/quiz', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { path: '/how-to-plan-a-honeymoon', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { path: '/best-time-to-honeymoon', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { path: '/maldives-honeymoon-cost', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { path: '/bali-honeymoon-cost', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { path: '/bahamas-honeymoon-cost', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { path: '/turks-and-caicos-honeymoon-cost', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { path: '/mexico-honeymoon-cost', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { path: '/barbados-honeymoon-cost', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { path: '/cape-verde-honeymoon-cost', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { path: '/best/honeymoon-resorts-2026', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { path: '/compare', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.75 },
    { path: '/honeymoon-with-dog', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { path: '/honeymoon-in-france', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { path: '/about', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },
    { path: '/contact', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.4 },
    { path: '/privacy', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
    { path: '/terms', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
    { path: '/affiliate-disclosure', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
  ]
  const hotelPaths: PathEntry[] = hotels.map(h => ({
    path: `/hotels/${h.slug}`,
    lastModified: new Date(h.last_updated),
    changeFrequency: 'weekly',
    priority: 0.9,
  }))
  const destPaths: PathEntry[] = destinations.map(d => ({
    path: `/destinations/${d}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }))
  const DEST_MONTH_TARGETS = [
    'maldives', 'bora-bora', 'bali', 'santorini', 'st-lucia', 'turks-and-caicos',
    'mauritius', 'seychelles', 'mexico', 'jamaica', 'fiji', 'bahamas',
    'anguilla', 'antigua', 'barbados', 'sicily', 'amalfi', 'lake-como',
    'hawaii', 'costa-rica',
  ]
  const DEST_MONTHS = [
    'january', 'february', 'march', 'april', 'may', 'june',
    'july', 'august', 'september', 'october', 'november', 'december',
  ]
  const destMonthPaths: PathEntry[] = DEST_MONTH_TARGETS.flatMap(d =>
    DEST_MONTHS.map(m => ({
      path: `/destinations/${d}/${m}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  )
  const expPaths: PathEntry[] = experiences.map(e => ({
    path: `/experiences/${e}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))
  const cmpPaths: PathEntry[] = comparisons.map(slug => ({
    path: `/compare/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.85,
  }))
  const hotelCmpPaths: PathEntry[] = hotelComparisons.map(slug => ({
    path: `/compare/hotels/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const countryGuidePaths: PathEntry[] = getCountriesWithHotels()
    .filter(c => c.slug !== 'france') // France has its own artisanal page in staticPaths
    .map(c => ({
      path: `/honeymoon-in/${c.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }))

  return [...staticPaths, ...cmpPaths, ...hotelCmpPaths, ...destPaths, ...destMonthPaths, ...expPaths, ...countryGuidePaths, ...hotelPaths].map(entry)
}
