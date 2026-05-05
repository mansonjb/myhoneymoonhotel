import { buildAllezHotelLink, buildProviderUrls, buildStay22MapSrc } from '@/lib/stay22'

interface Stay22MapWidgetProps {
  location: string            // destination slug or readable label (used for the map)
  hotelName?: string          // when set: render hotel-page CTAs (Allez, providers)
  anchorHotelName?: string    // for destination pages: name of a real hotel in our DB to center the map on
                              // Stay22 finds it → shows neighbour hotels nearby. Robust against country-zoom dead zones.
  country?: string            // country slug/name, used by Stay22 Allez to narrow the match
  height?: number
  directBookingOnly?: boolean // when true (ultra-luxury lodges not on OTAs): center map on destination,
                              // hide OTA grid, show "Book direct" notice instead.
}

/**
 * Stay22's geocoder doesn't always return hotels for a bare country/region name
 * (e.g. "Iceland", "Botswana"). For those destinations we route the embed to a
 * specific city/area where Stay22 has dense inventory.
 *
 * Match against the lowercased destination string — both slugs and pretty labels.
 */
const MAP_LOCATION_OVERRIDE: Record<string, string> = {
  iceland:           'Reykjavik, Iceland',
  switzerland:       'Zermatt, Switzerland',
  botswana:          'Maun, Botswana',
  argentina:         'Buenos Aires, Argentina',
  'new-zealand':     'Queenstown, New Zealand',
  'new zealand':     'Queenstown, New Zealand',
  jordan:            'Petra, Jordan',
  oman:              'Muscat, Oman',
  uae:               'Dubai, UAE',
  morocco:           'Marrakech, Morocco',
  sardegna:          'Olbia, Sardinia',
  caribbean:         'Antigua, Caribbean',
  'french-polynesia':'Tahiti, French Polynesia',
  'rest of french polynesia': 'Moorea, French Polynesia',
  'cape-verde':      'Sal, Cape Verde',
  'cape verde':      'Sal, Cape Verde',
  mozambique:        'Vilankulo, Mozambique',
  reunion:           'Saint-Gilles, Reunion',
  madagascar:        'Nosy Be, Madagascar',
  'sri-lanka':       'Bentota, Sri Lanka',
  'sri lanka':       'Bentota, Sri Lanka',
  cambodia:          'Siem Reap, Cambodia',
  vietnam:           'Hoi An, Vietnam',
  philippines:       'Palawan, Philippines',
  indonesia:         'Yogyakarta, Indonesia',
  greece:            'Mykonos, Greece',
  'mainland & mykonos': 'Mykonos, Greece',
  amalfi:            'Positano, Italy',
  'amalfi coast':    'Positano, Italy',
  croatia:           'Dubrovnik, Croatia',
  portugal:          'Algarve, Portugal',
  spain:             'Mallorca, Spain',
  hawaii:            'Maui, Hawaii',
  lapland:           'Rovaniemi, Finland',
  bhutan:            'Paro, Bhutan',
  peru:              'Cusco, Peru',
  galapagos:         'Santa Cruz, Galapagos',
  italy:             'Amalfi, Italy',
  tuscany:           'Siena, Italy',
  sicily:            'Taormina, Italy',
  jamaica:           'Montego Bay, Jamaica',
  anguilla:          'Meads Bay, Anguilla',
  antigua:           'St John\'s, Antigua',
  bahamas:           'Nassau, Bahamas',
  barbados:          'Holetown, Barbados',
  aruba:             'Palm Beach, Aruba',
  turkey:            'Bodrum, Turkey',
}

function resolveMapLocation(input: string): string {
  const key = input.trim().toLowerCase()
  return MAP_LOCATION_OVERRIDE[key] ?? input
}

export default function Stay22MapWidget({
  location,
  hotelName,
  anchorHotelName,
  country = '',
  height = 500,
  directBookingOnly = false,
}: Stay22MapWidgetProps) {
  // Three priorities for the embed map's search query:
  // 1. Hotel page (hotelName provided + on OTAs) → exact hotel + location
  // 2. Destination page with a known top hotel (anchorHotelName) → center on that hotel,
  //    Stay22 finds it and shows ~30 nearby hotels — robust against sparse-country dead zones
  // 3. Direct-booking-only hotel OR fallback → use destination override
  const embedQuery = (hotelName && !directBookingOnly)
    ? `${hotelName} ${location}`
    : anchorHotelName
      ? `${anchorHotelName} ${location}`
      : resolveMapLocation(location)
  const src = buildStay22MapSrc(embedQuery)

  // Smart primary CTA — Stay22 Allez Roam picks the best OTA automatically
  const smartUrl = (hotelName && !directBookingOnly)
    ? buildAllezHotelLink(hotelName, location, country, 'hotelpage-smart')
    : undefined

  // Per-provider direct URLs — lets the user choose their preferred OTA.
  // LetMeAllez intercepts every outbound click and adds affiliate tracking.
  const providers = (hotelName && !directBookingOnly)
    ? buildProviderUrls(hotelName, location.replace(/-/g, ' '), country.replace(/-/g, ' '))
    : undefined

  return (
    <div className="space-y-5">
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

      {hotelName && directBookingOnly && (
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 text-center">
          <p className="text-sm font-semibold text-amber-900 mb-1">Direct booking only</p>
          <p className="text-xs text-amber-800 leading-relaxed">
            {hotelName} is an ultra-luxury private lodge that does not sell through booking platforms.
            The map above shows nearby honeymoon hotels in {country.replace(/-/g, ' ') || location.replace(/-/g, ' ')}.
            To book {hotelName}, contact the lodge directly via their official website.
          </p>
        </div>
      )}

      {hotelName && smartUrl && providers && (
        <div>
          {/* Primary — smart best-price CTA */}
          <a
            href={smartUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-rose-500 hover:bg-rose-600 text-white font-semibold text-base px-6 py-4 rounded-full transition-colors text-center shadow-sm"
          >
            ✨ Find the best price →
          </a>
          <p className="text-center text-xs text-zinc-400 mt-2 mb-5">
            We compare {hotelName.split(' ').slice(0, 2).join(' ')} across partners and redirect to the cheapest option.
          </p>

          {/* Or pick a preferred platform */}
          <div className="text-center mb-3">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-zinc-400">Or choose your platform</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            <ProviderButton href={providers.booking} label="Booking.com" accent="bg-[#003580]" />
            <ProviderButton href={providers.hotelsCom} label="Hotels.com" accent="bg-[#D32F2F]" />
            <ProviderButton href={providers.expedia} label="Expedia" accent="bg-[#FFC439]" darkText />
            <ProviderButton href={providers.agoda} label="Agoda" accent="bg-[#FF5B00]" />
            <ProviderButton href={providers.tripadvisor} label="TripAdvisor" accent="bg-[#00AA6C]" />
          </div>
        </div>
      )}
    </div>
  )
}

function ProviderButton({ href, label, accent, darkText = false }: { href: string; label: string; accent: string; darkText?: boolean }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${accent} ${darkText ? 'text-zinc-900' : 'text-white'} font-semibold text-xs px-4 py-3 rounded-full hover:opacity-90 transition-opacity text-center`}
    >
      {label}
    </a>
  )
}
