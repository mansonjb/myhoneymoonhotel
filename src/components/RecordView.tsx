'use client'

import { useEffect } from 'react'
import { recordRecentHotel } from '@/lib/recordRecentHotel'

type Props = {
  slug: string
  name: string
  hero: string
  score: number
}

export default function RecordView({ slug, name, hero, score }: Props) {
  useEffect(() => {
    recordRecentHotel(slug, name, hero, score)
  }, [slug, name, hero, score])

  return null
}
