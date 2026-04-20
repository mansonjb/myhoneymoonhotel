interface Stay22MapWidgetProps {
  location: string
  hotelName?: string
  bookingUrl?: string
  hotelsComUrl?: string
  partnerId?: string
  height?: number
}

/**
 * Build a Booking.com search URL that matches a specific hotel as the top result.
 * Using ss=<hotel name> + dest_type=hotel forces the search engine to rank hotel
 * name matches instead of destination/city matches. LetMeAllez (in layout.tsx)
 * auto-adds affiliate tracking on click.
 */
function buildBookingSearchUrl(hotelName: string): string {
  const params = new URLSearchParams({
    ss: hotelName,
    dest_type: 'hotel',
    group_adults: '2',
    no_rooms: '1',
    group_children: '0',
    search_selected: 'true',
    from_ss: '1',
  })
  return `https://www.booking.com/searchresults.html?${params.toString()}`
}

function buildHotelsComSearchUrl(hotelName: string): string {
  const params = new URLSearchParams({
    'q-destination': hotelName,
    'q-rooms': '1',
    'q-room-0-adults': '2',
    'q-room-0-children': '0',
  })
  return `https://www.hotels.com/Hotel-Search?${params.toString()}`
}

export default function Stay22MapWidget({
  location,
  hotelName,
  bookingUrl,
  hotelsComUrl,
  partnerId = process.env.NEXT_PUBLIC_STAY22_PARTNER_ID || 'myhoneymoonhotel',
  height = 500,
}: Stay22MapWidgetProps) {
  const embedQuery = hotelName ? `${hotelName} ${location}` : location
  const src = `https://www.stay22.com/embed/gm?aid=${partnerId}&address=${encodeURIComponent(embedQuery)}&maincolor=be123c&viewmode=hybrid&hideguestpicker=1`

  // Prefer direct hotel URL if we pre-fetched it; otherwise use a hotel-targeted search URL.
  const finalBookingUrl = bookingUrl ?? (hotelName ? buildBookingSearchUrl(hotelName) : `https://www.booking.com/searchresults.html?ss=${encodeURIComponent(location)}`)
  const finalHotelsComUrl = hotelsComUrl ?? (hotelName ? buildHotelsComSearchUrl(hotelName) : `https://www.hotels.com/Hotel-Search?q-destination=${encodeURIComponent(location)}`)

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
        <div className="grid sm:grid-cols-2 gap-3">
          <a
            href={finalBookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-rose-500 hover:bg-rose-600 text-white font-semibold text-sm px-6 py-4 rounded-full transition-colors text-center"
          >
            Check availability on Booking.com →
          </a>
          <a
            href={finalHotelsComUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-zinc-900 hover:bg-zinc-700 text-white font-semibold text-sm px-6 py-4 rounded-full transition-colors text-center"
          >
            Check availability on Hotels.com →
          </a>
        </div>
      )}
    </div>
  )
}
