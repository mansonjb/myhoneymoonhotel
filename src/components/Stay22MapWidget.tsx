import { buildAllezHotelLink, buildProviderUrls, buildStay22MapSrc } from '@/lib/stay22'

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

  // Smart primary CTA — Stay22 Allez Roam picks the best OTA automatically
  const smartUrl = hotelName
    ? buildAllezHotelLink(hotelName, location, country, 'hotelpage-smart')
    : undefined

  // Per-provider direct URLs — lets the user choose their preferred OTA.
  // LetMeAllez intercepts every outbound click and adds affiliate tracking.
  const providers = hotelName
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
