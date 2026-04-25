'use client'
import Image from 'next/image'
import { useState } from 'react'

const DEST_FALLBACK: Record<string, string> = {
  'maldives':         'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1920&q=80',
  'bora-bora':        'https://images.unsplash.com/photo-1589979481223-deb893043163?w=1920&q=80',
  'seychelles':       'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=1920&q=80',
  'st-lucia':         'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=1920&q=80',
  'santorini':        'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1920&q=80',
  'turks-and-caicos': 'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1920&q=80',
  'bali':             'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1920&q=80',
  'hawaii':           'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80',
  'thailand':         'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=1920&q=80',
  'mexico':           'https://images.unsplash.com/photo-1512813195386-6cf811ad3542?w=1920&q=80',
  'amalfi':           'https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?w=1920&q=80',
  'greece':           'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1920&q=80',
  'mauritius':        'https://images.unsplash.com/photo-1563911302283-d2bc129e7570?w=1920&q=80',
  'zanzibar':         'https://images.unsplash.com/photo-1586861256632-a9994f0a1a7d?w=1920&q=80',
  'kenya':            'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920&q=80',
  'fiji':             'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1920&q=80',
  'croatia':          'https://images.unsplash.com/photo-1555990793-da11153b2473?w=1920&q=80',
  'portugal':         'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1920&q=80',
  'morocco':          'https://images.unsplash.com/photo-1539020140153-e479b8e9d1ef?w=1920&q=80',
  'japan':            'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1920&q=80',
  'sri-lanka':        'https://images.unsplash.com/photo-1588258219511-64eb629cb833?w=1920&q=80',
  'indonesia':        'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1920&q=80',
  'philippines':      'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=1920&q=80',
  'mozambique':       'https://images.unsplash.com/photo-1586861256632-a9994f0a1a7d?w=1920&q=80',
  'reunion':          'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1920&q=80',
  'st-barts':         'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1920&q=80',
  'south-africa':     'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920&q=80',
  'tanzania':         'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920&q=80',
  'french-polynesia': 'https://images.unsplash.com/photo-1589979481223-deb893043163?w=1920&q=80',
  'vietnam':          'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1920&q=80',
  'cambodia':         'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1920&q=80',
  'costa-rica':       'https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=1920&q=80',
  'spain':            'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1920&q=80',
  'cape-verde':       'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80',
  'new-zealand':      'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=1920&q=80',
  'caribbean':        'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1920&q=80',
  'oman':             'https://images.unsplash.com/photo-1539020140153-e479b8e9d1ef?w=1920&q=80',
  'uae':              'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80',
  'switzerland':      'https://images.unsplash.com/photo-1527668752968-14dc70a27c95?w=1920&q=80',
  'botswana':         'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920&q=80',
  'jordan':           'https://images.unsplash.com/photo-1563177682-12cf7666a6e8?w=1920&q=80',
  'iceland':          'https://images.unsplash.com/photo-1531168556467-80aace0d0144?w=1920&q=80',
  'sardegna':         'https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?w=1920&q=80',
  'argentina':        'https://images.unsplash.com/photo-1607627000458-210e8d2bdb1d?w=1920&q=80',
}

const DEFAULT = 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1920&q=80'

interface HeroImageProps {
  src: string
  alt: string
  destination: string
  priority?: boolean
  className?: string
}

export default function HeroImage({ src, alt, destination, priority = true, className = 'object-cover' }: HeroImageProps) {
  const fallback = DEST_FALLBACK[destination] ?? DEFAULT
  const [imgSrc, setImgSrc] = useState(src)
  const isExternal = imgSrc.startsWith('http')

  return (
    <Image
      src={imgSrc}
      alt={alt}
      fill
      priority={priority}
      className={className}
      sizes="100vw"
      onError={() => setImgSrc(fallback)}
      unoptimized={isExternal}
    />
  )
}
