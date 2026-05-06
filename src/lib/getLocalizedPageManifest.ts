import 'server-only'
import * as fs from 'fs'
import * as path from 'path'
import type { Locale } from '@/i18n/locales'

const I18N_DIR = path.join(process.cwd(), 'data', 'i18n')

export type PageManifest = Record<string, string>

/**
 * Loads a flat-key page manifest at `data/i18n/<locale>/pages/<slug>.json`.
 * Returns an empty object for English (callers should fall back to source strings)
 * or when the file is missing/invalid.
 *
 * Helper `t(manifest, key, fallback)` returns the manifest value or `fallback`.
 */
export function getLocalizedPageManifest(slug: string, locale: Locale): PageManifest {
  if (locale === 'en') return {}
  const file = path.join(I18N_DIR, locale, 'pages', `${slug}.json`)
  if (!fs.existsSync(file)) return {}
  try {
    return JSON.parse(fs.readFileSync(file, 'utf-8')) as PageManifest
  } catch {
    return {}
  }
}

export function tm(manifest: PageManifest, key: string, fallback: string): string {
  const v = manifest[key]
  return typeof v === 'string' && v.length > 0 ? v : fallback
}
