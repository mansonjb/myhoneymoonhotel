// Semantic destination clusters for internal linking mesh.
// Each destination can belong to multiple clusters; the helpers below
// produce deduplicated "similar destinations" for the SimilarDestinationsGrid
// component and the SemanticClusterPills component.

export type ClusterSlug =
  | 'overwater-paradise'
  | 'caribbean-classic'
  | 'mediterranean-shore'
  | 'italian-luxury'
  | 'european-countryside'
  | 'alpine-luxury'
  | 'african-safari'
  | 'indian-ocean-island'
  | 'asian-spiritual'
  | 'latin-adventure'
  | 'northern-lights'
  | 'mexico-caribbean-coast'
  | 'french-luxury'

export interface Cluster {
  slug: ClusterSlug
  label: string
  emoji: string
  destinations: string[]
  blurb: string
}

export const CLUSTERS: Cluster[] = [
  { slug: 'overwater-paradise', label: 'Overwater paradise', emoji: '🏝️', destinations: ['maldives', 'bora-bora', 'french-polynesia', 'fiji'], blurb: 'Lagoon villas on stilts, glass-floor bedrooms, the iconic honeymoon shot.' },
  { slug: 'caribbean-classic', label: 'Caribbean classic', emoji: '🌴', destinations: ['st-lucia', 'antigua', 'turks-and-caicos', 'st-barts', 'jamaica', 'bahamas', 'barbados', 'aruba', 'anguilla', 'grenada', 'dominican-republic', 'curacao', 'belize', 'bermuda', 'saint-vincent-grenadines'], blurb: 'Powder beaches, rum-coast warmth, short-haul from the US east coast.' },
  { slug: 'mediterranean-shore', label: 'Mediterranean shore', emoji: '🌊', destinations: ['santorini', 'greece', 'crete', 'mallorca', 'cyprus', 'sicily', 'sardegna', 'mykonos', 'croatia', 'turkey', 'madeira', 'algarve'], blurb: 'Whitewashed villages, taverna lunches, ferry-hop archipelagos.' },
  { slug: 'italian-luxury', label: 'Italian luxury', emoji: '🍝', destinations: ['amalfi', 'capri', 'venice', 'lake-como', 'lake-garda', 'tuscany', 'sicily', 'cinque-terre', 'puglia', 'sardegna', 'dolomites', 'italy'], blurb: 'La dolce vita: hilltop villas, Michelin trattorias, vineyard sunsets.' },
  { slug: 'european-countryside', label: 'European countryside', emoji: '🌾', destinations: ['provence', 'tuscany', 'loire-valley', 'cotswolds', 'burgundy', 'champagne', 'bavaria', 'austria', 'slovenia', 'andalusia'], blurb: 'Slow honeymoons in chateaux, masseria, manor houses with vineyards.' },
  { slug: 'alpine-luxury', label: 'Alpine luxury', emoji: '⛰️', destinations: ['dolomites', 'switzerland', 'bavaria', 'austria', 'banff', 'quebec', 'iceland', 'norway', 'lapland', 'patagonia-chile', 'new-zealand'], blurb: 'Glacier-fed lakes, snow-dusted peaks, ski-in-spa lodge culture.' },
  { slug: 'african-safari', label: 'African safari', emoji: '🦒', destinations: ['kenya', 'tanzania', 'botswana', 'rwanda', 'south-africa', 'namibia', 'zanzibar'], blurb: 'Game drives at dawn, fly-camp dinners under the southern cross.' },
  { slug: 'indian-ocean-island', label: 'Indian Ocean island', emoji: '🐚', destinations: ['maldives', 'seychelles', 'mauritius', 'mozambique', 'reunion', 'madagascar', 'sri-lanka', 'zanzibar'], blurb: 'Granite boulders, lagoon snorkels, palm-thatched private island lodges.' },
  { slug: 'asian-spiritual', label: 'Asian spiritual + boutique', emoji: '🕉️', destinations: ['bali', 'bhutan', 'kerala', 'sri-lanka', 'vietnam', 'cambodia', 'thailand', 'indonesia', 'japan', 'hokkaido', 'philippines', 'singapore'], blurb: 'Temples at sunrise, jungle plunge pools, slow tea ceremonies.' },
  { slug: 'latin-adventure', label: 'Latin adventure', emoji: '🌋', destinations: ['peru', 'patagonia-chile', 'galapagos', 'argentina', 'brazil', 'cartagena', 'mexico', 'costa-rica', 'riviera-maya'], blurb: 'High-altitude trekking, glacier crossings, Andean wine country.' },
  { slug: 'northern-lights', label: 'Northern lights honeymoon', emoji: '🌌', destinations: ['iceland', 'lapland', 'norway', 'faroe-islands'], blurb: 'Glass-igloo nights, aurora chases, Arctic spa rituals.' },
  { slug: 'mexico-caribbean-coast', label: 'Mexican Caribbean coast', emoji: '🇲🇽', destinations: ['mexico', 'riviera-maya', 'belize', 'costa-rica', 'jamaica'], blurb: 'Cenote dives, jungle cliffs, fresh seafood under thatched roofs.' },
  { slug: 'french-luxury', label: 'French luxury', emoji: '🥂', destinations: ['provence', 'cote-dazur', 'loire-valley', 'burgundy', 'champagne'], blurb: "France's honeymoon arc: vineyards, Riviera glamour, chateau romance." },
]

export const CLUSTER_LABELS: Record<ClusterSlug, Record<'en' | 'fr' | 'es' | 'pt', string>> = {
  'overwater-paradise': { en: 'Overwater paradise', fr: 'Paradis sur pilotis', es: 'Paraíso sobre el agua', pt: 'Paraíso sobre a água' },
  'caribbean-classic': { en: 'Caribbean classic', fr: 'Caraïbes classiques', es: 'Caribe clásico', pt: 'Caribe clássico' },
  'mediterranean-shore': { en: 'Mediterranean shore', fr: 'Rivage méditerranéen', es: 'Costa mediterránea', pt: 'Costa mediterrânea' },
  'italian-luxury': { en: 'Italian luxury', fr: 'Italie de luxe', es: 'Italia de lujo', pt: 'Itália de luxo' },
  'european-countryside': { en: 'European countryside', fr: 'Campagne européenne', es: 'Campo europeo', pt: 'Campo europeu' },
  'alpine-luxury': { en: 'Alpine luxury', fr: 'Luxe alpin', es: 'Lujo alpino', pt: 'Luxo alpino' },
  'african-safari': { en: 'African safari', fr: 'Safari africain', es: 'Safari africano', pt: 'Safári africano' },
  'indian-ocean-island': { en: 'Indian Ocean island', fr: "Île de l'océan Indien", es: 'Isla del océano Índico', pt: 'Ilha do oceano Índico' },
  'asian-spiritual': { en: 'Asian spiritual', fr: 'Asie spirituelle', es: 'Asia espiritual', pt: 'Ásia espiritual' },
  'latin-adventure': { en: 'Latin adventure', fr: 'Aventure latine', es: 'Aventura latina', pt: 'Aventura latina' },
  'northern-lights': { en: 'Northern lights', fr: 'Aurores boréales', es: 'Aurora boreal', pt: 'Aurora boreal' },
  'mexico-caribbean-coast': { en: 'Mexico Caribbean coast', fr: 'Côte caribéenne du Mexique', es: 'Costa caribeña de México', pt: 'Costa caribenha do México' },
  'french-luxury': { en: 'French luxury', fr: 'France de luxe', es: 'Francia de lujo', pt: 'França de luxo' },
}

// Reverse lookup: destination -> list of clusters it belongs to
export function getClustersForDestination(slug: string): Cluster[] {
  return CLUSTERS.filter(c => c.destinations.includes(slug))
}

// Other destinations in the same cluster(s), deduplicated, excluding self.
export function getSimilarDestinations(slug: string, max = 6): string[] {
  const clusters = getClustersForDestination(slug)
  const set = new Set<string>()
  for (const c of clusters) {
    for (const d of c.destinations) if (d !== slug) set.add(d)
  }
  return Array.from(set).slice(0, max)
}

// Other destinations in a specific cluster, excluding self.
export function getOtherDestinationsInCluster(clusterSlug: ClusterSlug, excludeSlug: string, max = 5): string[] {
  const cluster = CLUSTERS.find(c => c.slug === clusterSlug)
  if (!cluster) return []
  return cluster.destinations.filter(d => d !== excludeSlug).slice(0, max)
}
