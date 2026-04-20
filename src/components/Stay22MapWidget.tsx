import { buildAllezHotelLink, buildAllezDestLink, buildStay22MapSrc } from '@/lib/stay22'

interface Stay22MapWidgetProps {
  location: string            // destination slug or readable label (used for the map)
  hotelName?: string
  country?: string            // country slug/name, used by Stay22 Allez to narrow the match
  height?: number
}

export default function Stay22MapWidget({
  location,
  hotelName,
  country = '',
  height = 500,
}: Stay22MapWidgetProps) {
  const embedQuery = hotelName ? `${hotelName} ${location}` : location
  const src = buildStay22MapSrc(embedQuery)

  // Stay22 Allez Roam: deep-link to the exact hotel page on the best OTA for the user's region.
  // Commission tracked via our AID — no scraping of direct Booking/Hotels.com URLs required.
  const allezUrl = hotelName
    ? buildAllezHotelLink(hotelName, location, country, 'hotelpage-cta')
    : buildAllezDestLink(location, country, 'destination-cta')

  return (
    <div className="space-y-4">
      <div className="w-full rounded-2xl overflow-hidden shadow-lg">
        <iframe
          src={src}
          width="100%"
          height={height}
          loading="lazy"
          title={`Honeymoon hotels in ${location}`}
          className="block border-0"
        />
      </div>
      {hotelName && (
        <a
          href={allezUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-rose-500 hover:bg-rose-600 text-white font-semibold text-base px-6 py-4 rounded-full transition-colors text-center"
        >
          Check availability & book →
        </a>
      )}
    </div>
  )
}
