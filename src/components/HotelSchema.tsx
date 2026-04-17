import { Hotel } from '../../types/hotel'

interface HotelSchemaProps {
  hotel: Hotel
}

export default function HotelSchema({ hotel }: HotelSchemaProps) {
  const heroPhoto = hotel.photos.find(p => p.type === 'hero') || hotel.photos[0]

  const lodgingBusiness = {
    '@context': 'https://schema.org',
    '@type': 'LodgingBusiness',
    name: hotel.name,
    description: hotel.content.verdict.slice(0, 200),
    image: heroPhoto?.url,
    priceRange: `$${hotel.price_per_night_usd.min}–$${hotel.price_per_night_usd.max} per night`,
    starRating: {
      '@type': 'Rating',
      ratingValue: hotel.stars,
    },
    ...(hotel.tripadvisor_rating && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: hotel.tripadvisor_rating,
        bestRating: 10,
        reviewCount: 100,
      },
    }),
    amenityFeature: hotel.amenities.map(a => ({
      '@type': 'LocationFeatureSpecification',
      name: a,
      value: true,
    })),
  }

  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: hotel.content.faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  const speakable = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['#hotel-verdict', '#hotel-best-room'],
    },
  }

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://myhoneymoonhotel.com' },
      { '@type': 'ListItem', position: 2, name: hotel.destination.replace(/-/g, ' '), item: `https://myhoneymoonhotel.com/destinations/${hotel.destination}` },
      { '@type': 'ListItem', position: 3, name: hotel.name },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(lodgingBusiness) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakable) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </>
  )
}
