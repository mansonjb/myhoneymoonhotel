interface Stay22MapWidgetProps {
  location: string
  partnerId?: string
  height?: number
}

export default function Stay22MapWidget({
  location,
  partnerId = process.env.NEXT_PUBLIC_STAY22_PARTNER_ID || 'myhoneymoonhotel',
  height = 500
}: Stay22MapWidgetProps) {
  const src = `https://www.stay22.com/embed/gm?aid=${partnerId}&location=${encodeURIComponent(location)}&maincolor=be123c&viewmode=hybrid&hideguestpicker=1`

  return (
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
  )
}
