import type { ExperienceMeta } from '@/types/experience'
import overwaterBungalows from './overwater-bungalows'
import adultsOnly from './adults-only'
import safari from './safari'
import beach from './beach'
import wellness from './wellness'
import luxury from './luxury'

export const EXPERIENCE_META: Record<string, ExperienceMeta> = {
  'overwater-bungalows': overwaterBungalows,
  'adults-only': adultsOnly,
  'safari': safari,
  'beach': beach,
  'wellness': wellness,
  'luxury': luxury,
}
