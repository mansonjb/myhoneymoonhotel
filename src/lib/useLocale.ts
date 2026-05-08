'use client'
import { usePathname } from 'next/navigation'
import type { Locale } from '@/i18n/locales'
import { detectLocaleFromPath } from './locale-paths'

/**
 * Client-side hook that derives the active locale from the current URL.
 * Use together with `localizedHref` from `./locale-paths` to build links
 * that keep the user inside their locale tree.
 */
export function useLocale(): Locale {
  const pathname = usePathname()
  return detectLocaleFromPath(pathname)
}
