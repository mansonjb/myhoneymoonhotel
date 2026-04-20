/**
 * Stay22 Allez Roam — server-side deep-link builder.
 *
 * Redirects the user to the correct hotel page on the best booking platform
 * for their country (Booking.com, Expedia, Agoda, Hotels.com…) and tracks the
 * click under our affiliate AID. Commission is guaranteed.
 *
 * Docs: https://docs.stay22.com/ (Allez / LetMeAllez)
 */

export const STAY22_AID = process.env.NEXT_PUBLIC_STAY22_PARTNER_ID || 'myhoneymoonhotel'

/** Direct deep-link for a specific hotel. Opens the exact hotel page on the best OTA. */
export function buildAllezHotelLink(
  hotelName: string,
  destination: string,
  country: string,
  campaign = 'hotelpage'
): string {
  const address = `${destination.replace(/-/g, ' ')} ${country.replace(/-/g, ' ')}`
  const params = new URLSearchParams({
    aid: STAY22_AID,
    campaign,
    hotelname: hotelName,
    address,
  })
  return `https://www.stay22.com/allez/roam?${params.toString()}`
}

/** Destination-level deep-link — shows all available hotels in that city/region. */
export function buildAllezDestLink(
  destination: string,
  country: string,
  campaign = 'destination'
): string {
  const address = `${destination.replace(/-/g, ' ')} ${country.replace(/-/g, ' ')}`
  const params = new URLSearchParams({
    aid: STAY22_AID,
    campaign,
    address,
  })
  return `https://www.stay22.com/allez/roam?${params.toString()}`
}

/**
 * Per-OTA direct hotel URLs. The LetMeAllez script in layout.tsx intercepts outbound
 * clicks on these and rewrites them into affiliate-tracked redirects — commission tracked
 * on whichever provider the user chooses.
 */
export function buildProviderUrls(hotelName: string, destinationLabel: string, countryLabel: string) {
  const locationQuery = `${destinationLabel} ${countryLabel}`.trim()
  const fullQuery = `${hotelName} ${locationQuery}`.trim()

  // Booking.com — ss=<name> + dest_type=hotel narrows to hotel-name match first
  const bookingParams = new URLSearchParams({
    ss: hotelName,
    dest_type: 'hotel',
    group_adults: '2',
    no_rooms: '1',
    group_children: '0',
    search_selected: 'true',
    from_ss: '1',
  })
  const booking = `https://www.booking.com/searchresults.html?${bookingParams.toString()}`

  // Hotels.com — q-destination searches the catalog; exact name hits match the hotel
  const hotelsComParams = new URLSearchParams({
    'q-destination': hotelName,
    'q-rooms': '1',
    'q-room-0-adults': '2',
    'q-room-0-children': '0',
  })
  const hotelsCom = `https://www.hotels.com/Hotel-Search?${hotelsComParams.toString()}`

  // Expedia
  const expediaParams = new URLSearchParams({
    destination: fullQuery,
    adults: '2',
  })
  const expedia = `https://www.expedia.com/Hotel-Search?${expediaParams.toString()}`

  // Agoda
  const agodaParams = new URLSearchParams({
    city: hotelName,
    checkIn: '',
    los: '7',
    adults: '2',
  })
  const agoda = `https://www.agoda.com/search?${agodaParams.toString()}`

  // TripAdvisor
  const tripadvisor = `https://www.tripadvisor.com/Search?q=${encodeURIComponent(fullQuery)}`

  return { booking, hotelsCom, expedia, agoda, tripadvisor }
}

/** Stay22 embed map (unchanged). */
export function buildStay22MapSrc(
  location: string,
  campaign = 'hotelpage'
): string {
  const params = new URLSearchParams({
    aid: STAY22_AID,
    address: location,
    campaign,
    maincolor: 'be123c',
    viewmode: 'hybrid',
    hideguestpicker: '1',
  })
  return `https://www.stay22.com/embed/gm?${params.toString()}`
}
