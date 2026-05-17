import { Hotel } from '../../types/hotel'
import type { Locale } from '@/i18n/locales'
import { localizedUrl } from '@/lib/alternates'
import { getMessages } from '@/i18n/getMessages'

interface HotelSchemaProps {
  hotel: Hotel
  locale?: Locale
}

export default function HotelSchema({ hotel, locale = 'en' }: HotelSchemaProps) {
  const heroPhoto = hotel.photos.find(p => p.type === 'hero') || hotel.photos[0]
  const m = getMessages(locale)
  const homeLabel = (m as unknown as Record<string, string>)['generic.home'] ?? 'Home'

  const lodgingBusiness = {
    '@context': 'https://schema.org',
    '@type': 'LodgingBusiness',
    name: hotel.name,
    description: hotel.content.verdict.slice(0, 200),
    image: heroPhoto?.url,
    priceRange: `$${hotel.price_per_night_usd.min}–$${hotel.price_per_night_usd.max} per night`,
    // author moved to a separate Article node below — LodgingBusiness spec
    // does NOT accept `author` (Google ignores it; risks Rich-Results warnings).
    starRating: {
      '@type': 'Rating',
      ratingValue: hotel.stars,
    },
    // Removed synthetic AggregateRating — Google's structured-data spam policy
    // prohibits fabricated reviewCount values. Re-introduce only when we have
    // first-party reviews we can attest to.
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
      { '@type': 'ListItem', position: 1, name: homeLabel, item: localizedUrl('/', locale) },
      {
        '@type': 'ListItem',
        position: 2,
        name: hotel.destination.replace(/-/g, ' '),
        item: localizedUrl(`/destinations/${hotel.destination}`, locale),
      },
      { '@type': 'ListItem', position: 3, name: hotel.name },
    ],
  }

  // Article node carries the author + dateModified E-E-A-T signal. Linked
  // to the LodgingBusiness via `about`. This is the schema-valid way to
  // attribute editorial reviews of a business entity.
  const article = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${hotel.name} — Honeymoon Review`,
    about: { '@type': 'LodgingBusiness', name: hotel.name },
    author: {
      '@type': 'Organization',
      name: 'My Honeymoon Hotel',
      url: 'https://myhoneymoonhotel.com/about',
    },
    publisher: {
      '@type': 'Organization',
      name: 'My Honeymoon Hotel',
      logo: { '@type': 'ImageObject', url: 'https://myhoneymoonhotel.com/icon.png' },
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(lodgingBusiness) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakable) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </>
  )
}
