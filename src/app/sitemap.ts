import { MetadataRoute } from 'next'
import { getAllHotels, getAllDestinations, getAllExperienceTypes } from '@/lib/hotels'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://myhoneymoonhotel.com'
  const hotels = getAllHotels()
  const destinations = getAllDestinations()
  const experiences = getAllExperienceTypes()

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

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
    ...destinationUrls,
    ...experienceUrls,
    ...hotelUrls,
  ]
}
