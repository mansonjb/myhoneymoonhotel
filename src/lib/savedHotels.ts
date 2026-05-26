/**
 * Client-side helpers for managing saved hotels in localStorage.
 * All functions are SSR-safe — they no-op when window is undefined.
 */

const STORAGE_KEY = 'mhh_saved_hotels'

export function getSavedHotels(): string[] {
  if (typeof window === 'undefined') return []
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed.filter((s): s is string => typeof s === 'string') : []
  } catch {
    return []
  }
}

export function isSavedHotel(slug: string): boolean {
  return getSavedHotels().includes(slug)
}

export function toggleSavedHotel(slug: string): boolean {
  if (typeof window === 'undefined') return false
  const current = getSavedHotels()
  const idx = current.indexOf(slug)
  let next: string[]
  let nowSaved: boolean
  if (idx >= 0) {
    next = current.filter(s => s !== slug)
    nowSaved = false
  } else {
    next = [...current, slug]
    nowSaved = true
  }
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
    // Dispatch event so other components (header badge) can react
    window.dispatchEvent(new CustomEvent('mhh:saved-hotels-changed', { detail: next }))
  } catch {
    // ignore quota errors
  }
  return nowSaved
}
