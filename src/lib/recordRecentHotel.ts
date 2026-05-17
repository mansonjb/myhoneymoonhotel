export function recordRecentHotel(slug: string, name: string, hero: string, score: number) {
  if (typeof window === 'undefined') return
  try {
    const key = 'mhh_recent_hotels'
    const list = JSON.parse(localStorage.getItem(key) || '[]') as Array<{slug:string;name:string;hero:string;score:number}>
    const filtered = list.filter(x => x.slug !== slug)
    filtered.unshift({ slug, name, hero, score })
    localStorage.setItem(key, JSON.stringify(filtered.slice(0, 8)))
  } catch {}
}
