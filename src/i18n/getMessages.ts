import 'server-only'
import en from './messages/en.json'
import esRaw from './messages/es.json'
import ptRaw from './messages/pt.json'
import type { Locale } from './locales'

export type Messages = typeof en
export type MessageKey = keyof Messages

// es/pt start as partial overlays — fall back to English for missing keys.
const es = esRaw as Partial<Messages>
const pt = ptRaw as Partial<Messages>

const dict: Record<Locale, Partial<Messages>> = { en, es, pt }

export function getMessages(locale: Locale): Messages {
  // Merge English defaults with locale overrides so the returned object always
  // satisfies the full Messages shape — callers never need to handle `undefined`.
  return { ...en, ...(dict[locale] ?? {}) } as Messages
}

// Helper for component-level use — returns string with English fallback.
export function t(messages: Messages, key: MessageKey): string {
  return messages[key] ?? (en as Messages)[key] ?? String(key)
}
