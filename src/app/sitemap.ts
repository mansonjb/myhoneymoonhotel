import { MetadataRoute } from 'next'
import { getAllHotels, getAllDestinations, getAllExperienceTypes } from '@/lib/hotels'
import { getAllComparisonSlugs } from '../../data/comparisons'

const SITE_URL = 'https://myhoneymoonhotel.com'

// Locales that have a fully-rendered tree alongside English. Spanish only for v1.
const LIVE_LOCALES = ['es'] as const

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

  const staticPaths: PathEntry[] = [
    { path: '/', lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
    { path: '/destinations', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.85 },
    { path: '/quiz', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { path: '/how-to-plan-a-honeymoon', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { path: '/maldives-honeymoon-cost', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { path: '/bali-honeymoon-cost', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { path: '/best/honeymoon-resorts-2026', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { path: '/compare', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.75 },
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

  return [...staticPaths, ...cmpPaths, ...destPaths, ...expPaths, ...hotelPaths].map(entry)
}
