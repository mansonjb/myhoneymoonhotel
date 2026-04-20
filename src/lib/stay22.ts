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
