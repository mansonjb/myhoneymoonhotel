interface Stay22MapWidgetProps {
  location: string
  hotelName?: string
  bookingUrl?: string     // direct Booking.com hotel URL (preferred)
  hotelsComUrl?: string   // direct Hotels.com hotel URL (preferred)
  partnerId?: string
  height?: number
}

export default function Stay22MapWidget({
  location,
  hotelName,
  bookingUrl,
  hotelsComUrl,
  partnerId = process.env.NEXT_PUBLIC_STAY22_PARTNER_ID || 'myhoneymoonhotel',
  height = 500,
}: Stay22MapWidgetProps) {
  const query = hotelName ? `${hotelName} ${location}` : location
  const src = `https://www.stay22.com/embed/gm?aid=${partnerId}&address=${encodeURIComponent(query)}&maincolor=be123c&viewmode=hybrid&hideguestpicker=1`

  // Prefer direct hotel URLs (pre-fetched at build time). Fall back to search URL.
  const finalBookingUrl = bookingUrl ?? `https://www.booking.com/searchresults.html?ss=${encodeURIComponent(query)}`
  const finalHotelsComUrl = hotelsComUrl ?? `https://www.hotels.com/search.do?q-destination=${encodeURIComponent(query)}`

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
