import { MetadataRoute } from 'next'
import { getAllHotels, getAllDestinations, getAllExperienceTypes } from '@/lib/hotels'
import { getAllComparisonSlugs } from '../../data/comparisons'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://myhoneymoonhotel.com'
  const hotels = getAllHotels()
  const destinations = getAllDestinations()
  const experiences = getAllExperienceTypes()
  const comparisons = getAllComparisonSlugs()

  const hotelUrls = hotels.map(h => ({
    url: `${baseUrl}/hotels/${h.slug}`,
    lastModified: new Date(h.last_updated),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  const destinationUrls = destinations.map(d => ({
    url: `${baseUrl}/destinations/${d}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const experienceUrls = experiences.map(e => ({
    url: `${baseUrl}/experiences/${e}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const comparisonUrls = comparisons.map(slug => ({
    url: `${baseUrl}/compare/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }))

  const staticUrls = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'daily' as const, priority: 1 },
    { url: `${baseUrl}/destinations`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.85 },
    { url: `${baseUrl}/quiz`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/how-to-plan-a-honeymoon`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/maldives-honeymoon-cost`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.85 },
    { url: `${baseUrl}/bali-honeymoon-cost`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.85 },
    { url: `${baseUrl}/best/honeymoon-resorts-2026`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/compare`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.75 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.5 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.4 },
    { url: `${baseUrl}/privacy`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.2 },
    { url: `${baseUrl}/terms`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.2 },
    { url: `${baseUrl}/affiliate-disclosure`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.2 },
  ]

  return [
    ...staticUrls,
    ...comparisonUrls,
    ...destinationUrls,
    ...experienceUrls,
    ...hotelUrls,
  ]
}
