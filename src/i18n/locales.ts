export const LOCALES = ['en', 'es', 'pt'] as const
export type Locale = typeof LOCALES[number]
export const DEFAULT_LOCALE: Locale = 'en'

export function isLocale(x: string): x is Locale {
  return (LOCALES as readonly string[]).includes(x)
}

// Map locale → BCP-47 for <html lang> + hreflang
export const HTML_LANG: Record<Locale, string> = {
  en: 'en',
  es: 'es',
  pt: 'pt-BR',
}

// Pretty label for locale switcher
export const LOCALE_LABEL: Record<Locale, string> = {
  en: 'English',
  es: 'Español',
  pt: 'Português',
}
