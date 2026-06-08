import Stay22MapWidget from '@/components/Stay22MapWidget'

interface Stay22MapInlineProps {
  destination: string
  anchorHotelName?: string
  headline?: string
  country?: string
}

export default function Stay22MapInline({
  destination,
  anchorHotelName,
  headline,
  country,
}: Stay22MapInlineProps) {
  return (
    <div className="not-prose my-12">
      {headline && (
        <h3 className="font-display text-2xl text-zinc-900 mb-4">
          {headline}
        </h3>
      )}
      <div className="border border-zinc-100 rounded-2xl overflow-hidden">
        <Stay22MapWidget
          location={destination}
          anchorHotelName={anchorHotelName}
          country={country}
          height={400}
        />
      </div>
    </div>
  )
}
