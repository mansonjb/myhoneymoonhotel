import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { getLocalizedPageManifest, tm } from '@/lib/getLocalizedPageManifest'
import { buildAlternates } from '@/lib/alternates'

const SLUG = 'best-time-to-honeymoon'
const m = getLocalizedPageManifest(SLUG, 'fr')
const t = (key: string, fallback = ''): string => tm(m, key, fallback)

const DEST_SLUGS = [
  'maldives', 'bora-bora', 'bali', 'santorini', 'st-lucia', 'turks-and-caicos',
  'mauritius', 'seychelles', 'mexico', 'jamaica', 'fiji', 'bahamas',
  'anguilla', 'antigua', 'barbados', 'sicily', 'amalfi', 'lake-como',
  'hawaii', 'costa-rica',
] as const

const DEST_LABEL_ES: Record<string, string> = {
  maldives: 'Maldivas',
  'bora-bora': 'Bora Bora',
  bali: 'Bali',
  santorini: 'Santorini',
  'st-lucia': 'Santa Lucía',
  'turks-and-caicos': 'Turks y Caicos',
  mauritius: 'Mauricio',
  seychelles: 'Seychelles',
  mexico: 'México',
  jamaica: 'Jamaica',
  fiji: 'Fiyi',
  bahamas: 'Bahamas',
  anguilla: 'Anguila',
  antigua: 'Antigua',
  barbados: 'Barbados',
  sicily: 'Sicilia',
  amalfi: 'Amalfi',
  'lake-como': 'Lago de Como',
  hawaii: 'Hawái',
  'costa-rica': 'Costa Rica',
}

type Band = 'Peak' | 'High' | 'Shoulder' | 'Low' | 'Avoid'

const MATRIX: Record<string, { band: Band; note: string }[]> = {
  maldives: [
    { band: 'Peak', note: 'Seco, caluroso, casi sin lluvia' },
    { band: 'Peak', note: 'Las semanas más secas del año' },
    { band: 'High', note: 'Calor, mar en calma, animado' },
    { band: 'High', note: 'Última seca, bajan los precios' },
    { band: 'Shoulder', note: 'Empieza el húmedo, llegan mantas' },
    { band: 'Shoulder', note: 'Tiburones ballena, más barato' },
    { band: 'Low', note: 'Húmedo pero pico escolar europeo' },
    { band: 'Low', note: 'Húmedo, gusta a surfistas' },
    { band: 'Low', note: 'Semanas más baratas, riesgo de lluvia' },
    { band: 'Shoulder', note: 'Lluvias se van a fin de mes' },
    { band: 'Shoulder', note: 'Vuelve la seca, mejor valor' },
    { band: 'Peak', note: 'Pico festivo 20 dic-5 ene' },
  ],
  'bora-bora': [
    { band: 'Shoulder', note: 'Cálido, húmedo, chubascos' },
    { band: 'Shoulder', note: 'Cola del húmedo, calor' },
    { band: 'Shoulder', note: 'Secando, bajan precios' },
    { band: 'High', note: 'Empieza la seca, foto perfecta' },
    { band: 'Peak', note: 'Clima de postal, resorts llenos' },
    { band: 'Peak', note: 'Seco, brisa, precios pico' },
    { band: 'Peak', note: 'Mes más fresco, más concurrido' },
    { band: 'Peak', note: 'Festival Heiva, lleno' },
    { band: 'High', note: 'Seco y más tranquilo que julio' },
    { band: 'High', note: 'Laguna en su azul más intenso' },
    { band: 'Shoulder', note: 'Vuelve la humedad, ofertas' },
    { band: 'Peak', note: 'Recargo festivo, lluvioso' },
  ],
  bali: [
    { band: 'Low', note: 'Estación lluviosa, lujuriante, barato' },
    { band: 'Low', note: 'Las semanas más lluviosas, off-peak' },
    { band: 'Shoulder', note: 'Las lluvias se reducen a mediados' },
    { band: 'High', note: 'Empieza la seca, ideal' },
    { band: 'High', note: 'Mejor valor de los meses secos' },
    { band: 'Peak', note: 'Seco, brisa, lleno' },
    { band: 'Peak', note: 'Seco, más fresco, verano europeo' },
    { band: 'Peak', note: 'Más seco, más concurrido, más caro' },
    { band: 'High', note: 'Seco, más tranquilo que agosto' },
    { band: 'High', note: 'Cola seca, mes de atardeceres' },
    { band: 'Shoulder', note: 'Vuelven los chubascos, calmo' },
    { band: 'Peak', note: 'Pico festivo, días húmedos' },
  ],
  santorini: [
    { band: 'Low', note: 'Frío, medio cerrado, crudo' },
    { band: 'Low', note: 'Tranquilo, con brisa, romántico' },
    { band: 'Shoulder', note: 'Flores de primavera, se abre' },
    { band: 'High', note: 'Templado, andable, sin masas' },
    { band: 'Peak', note: 'Soleado, manejable, postal' },
    { band: 'Peak', note: 'Calor, lleno, colas al atardecer' },
    { band: 'Peak', note: 'Aplastante de gente, 35 °C' },
    { band: 'Peak', note: 'Pico de cruceros, atestado' },
    { band: 'Peak', note: 'Cálido, más calmo, lo mejor del verano' },
    { band: 'High', note: 'Últimas semanas cálidas, bajan precios' },
    { band: 'Shoulder', note: 'Tranquilo, cierran restaurantes' },
    { band: 'Low', note: 'Casi todo cerrado, atmosférico' },
  ],
  'st-lucia': [
    { band: 'Peak', note: 'Seco, brisa, mejor temporada' },
    { band: 'Peak', note: 'Semanas más secas, pico Valentín' },
    { band: 'High', note: 'Seco y cálido, festival de jazz' },
    { band: 'High', note: 'Último mes seco fiable' },
    { band: 'Shoulder', note: 'Calor, breves chubascos vespertinos' },
    { band: 'Low', note: 'Se abre la ventana de huracanes' },
    { band: 'Low', note: 'Calor, humedad, riesgo real' },
    { band: 'Avoid', note: 'Pico de huracanes, barato' },
    { band: 'Avoid', note: 'Probabilidad de ciclón más alta' },
    { band: 'Shoulder', note: 'Las tormentas decaen, ofertas duran' },
    { band: 'High', note: 'Vuelve la seca, valor excelente' },
    { band: 'Peak', note: 'Pico festivo, estación seca' },
  ],
  'turks-and-caicos': [
    { band: 'Peak', note: 'Clima cristalino, playa llena' },
    { band: 'Peak', note: 'Seco, brisa, completo' },
    { band: 'Peak', note: 'Recargo spring break' },
    { band: 'High', note: 'Cálido, más seco, calmo' },
    { band: 'High', note: 'Excelente valor intermedio' },
    { band: 'Shoulder', note: 'Calor, calma, abre ventana de huracanes' },
    { band: 'Low', note: 'Sube el riesgo de tormenta' },
    { band: 'Avoid', note: 'Pico de huracanes, ofertas más profundas' },
    { band: 'Avoid', note: 'Mayor riesgo de tormenta del año' },
    { band: 'Shoulder', note: 'Las tormentas decaen a fin de mes' },
    { band: 'High', note: 'Vuelve la seca, mejor valor' },
    { band: 'Peak', note: 'Pico festivo, seco' },
  ],
  mauritius: [
    { band: 'Peak', note: 'Calor, humedad, laguna llena' },
    { band: 'Peak', note: 'Calor, posible cola ciclónica' },
    { band: 'High', note: 'Enfriando, se acaba el húmedo' },
    { band: 'High', note: 'Templado, seco, ideal' },
    { band: 'Shoulder', note: 'Más fresco, seco, gran valor' },
    { band: 'Shoulder', note: 'Meses más fríos, oleaje surf' },
    { band: 'High', note: 'Seco, brisa, verano europeo' },
    { band: 'High', note: 'Seco, temporada kiteboard' },
    { band: 'High', note: 'Calentando, tranquilo' },
    { band: 'Peak', note: 'Punto óptimo: cálido y calmo' },
    { band: 'Peak', note: 'Calor, laguna en su mejor azul' },
    { band: 'Peak', note: 'Pico festivo, calor' },
  ],
  seychelles: [
    { band: 'Peak', note: 'Calor, monzón NW calmo' },
    { band: 'Peak', note: 'Cálido, breves chubascos' },
    { band: 'High', note: 'Mes de transición, mixto' },
    { band: 'Peak', note: 'Mar en calma en ambas costas' },
    { band: 'High', note: 'Empiezan alisios SE, secando' },
    { band: 'High', note: 'Más fresco, brisa, temporada de vela' },
    { band: 'Peak', note: 'Más seco, más ventoso, pico europeo' },
    { band: 'Peak', note: 'Seco, animado, temporada de kite' },
    { band: 'High', note: 'Vientos amainan, espejo' },
    { band: 'Peak', note: 'Lo mejor: cálido y calmo' },
    { band: 'Peak', note: 'Cálido, calmo, foto perfecta' },
    { band: 'Peak', note: 'Pico festivo, húmedo' },
  ],
  mexico: [
    { band: 'Peak', note: 'Seco, noches frescas, lleno' },
    { band: 'Peak', note: 'Temporada de ballenas, soleado' },
    { band: 'Peak', note: 'Pico spring break' },
    { band: 'High', note: 'Cálido, más seco, calmo' },
    { band: 'Shoulder', note: 'Calor, sargazo en la costa' },
    { band: 'Shoulder', note: 'Se abre la ventana de tormentas' },
    { band: 'Low', note: 'Calor, humedad, breves tormentas' },
    { band: 'Low', note: 'Las semanas más húmedas y baratas' },
    { band: 'Avoid', note: 'Pico de huracanes en el Caribe' },
    { band: 'Shoulder', note: 'Tormentas decaen, vuelve la seca' },
    { band: 'Peak', note: 'Seco, cálido, ideal' },
    { band: 'Peak', note: 'Pico festivo, seco' },
  ],
  jamaica: [
    { band: 'Peak', note: 'Seco, cálido, lleno' },
    { band: 'Peak', note: 'Mes del reggae, soleado' },
    { band: 'High', note: 'Recargo spring break' },
    { band: 'High', note: 'Último mes seco fiable' },
    { band: 'Shoulder', note: 'Más cálido, breves chubascos' },
    { band: 'Low', note: 'Se abre la ventana de huracanes' },
    { band: 'Low', note: 'Calor, sube el riesgo de tormenta' },
    { band: 'Avoid', note: 'Pico de huracanes, lo más barato' },
    { band: 'Avoid', note: 'Mayor probabilidad de tormenta' },
    { band: 'Shoulder', note: 'Tormentas decaen, ofertas siguen' },
    { band: 'High', note: 'Vuelve la seca, valor excelente' },
    { band: 'Peak', note: 'Pico festivo, seco' },
  ],
  fiji: [
    { band: 'Low', note: 'Húmedo, calor, ventana ciclónica' },
    { band: 'Low', note: 'Húmedo, ventana ciclónica' },
    { band: 'Shoulder', note: 'Lluvias decaen, bajan precios' },
    { band: 'High', note: 'Empieza la estación seca' },
    { band: 'Peak', note: 'Seco, cálido, foto perfecta' },
    { band: 'Peak', note: 'Seco, más fresco, pico' },
    { band: 'Peak', note: 'Más seco, noches frescas' },
    { band: 'Peak', note: 'Seco, brisa, completo' },
    { band: 'Peak', note: 'Seco, calentando' },
    { band: 'High', note: 'Cola seca, gran valor' },
    { band: 'Shoulder', note: 'Vuelve la humedad' },
    { band: 'Peak', note: 'Pico festivo, húmedo' },
  ],
  bahamas: [
    { band: 'Peak', note: 'Seco, fresco, brisa' },
    { band: 'Peak', note: 'Seco, lleno, Valentín' },
    { band: 'Peak', note: 'Recargo spring break' },
    { band: 'High', note: 'Calentando, mar más calmo' },
    { band: 'Shoulder', note: 'Calor, seco, buen valor' },
    { band: 'Shoulder', note: 'Se abre la ventana de tormentas' },
    { band: 'Low', note: 'Calor, humedad, riesgo de tormenta' },
    { band: 'Avoid', note: 'Pico de huracanes' },
    { band: 'Avoid', note: 'Mayor probabilidad de tormenta' },
    { band: 'Shoulder', note: 'Tormentas decaen, ofertas duran' },
    { band: 'High', note: 'Vuelve la seca, valor excelente' },
    { band: 'Peak', note: 'Pico festivo' },
  ],
  anguilla: [
    { band: 'Peak', note: 'Seco, brisa, abarrotado' },
    { band: 'Peak', note: 'Más seco, pico Valentín' },
    { band: 'Peak', note: 'Mar en calma, seco' },
    { band: 'High', note: 'Último mes seco fiable' },
    { band: 'Shoulder', note: 'Calor, calmo, valor' },
    { band: 'Low', note: 'Se abre la ventana de huracanes' },
    { band: 'Low', note: 'Calor, humedad, riesgo' },
    { band: 'Avoid', note: 'Pico de huracanes, lo más barato' },
    { band: 'Avoid', note: 'Hoteles cerrados ago-medio oct' },
    { band: 'Shoulder', note: 'Hoteles reabren a fin de mes' },
    { band: 'High', note: 'Vuelve la seca, alta gama' },
    { band: 'Peak', note: 'Pico festivo' },
  ],
  antigua: [
    { band: 'Peak', note: 'Seco, brisa, lleno' },
    { band: 'Peak', note: 'Semana de la vela, recargo' },
    { band: 'Peak', note: 'Seco, mes clásico de regatas' },
    { band: 'Peak', note: 'Pico de la semana de la vela' },
    { band: 'Shoulder', note: 'Calor, seco, gran valor' },
    { band: 'Low', note: 'Se abre la ventana de huracanes' },
    { band: 'Low', note: 'Carnaval, calor, riesgo' },
    { band: 'Avoid', note: 'Pico de huracanes' },
    { band: 'Avoid', note: 'Mayor probabilidad de tormenta' },
    { band: 'Shoulder', note: 'Tormentas decaen, ofertas siguen' },
    { band: 'High', note: 'Vuelve la seca' },
    { band: 'Peak', note: 'Pico festivo' },
  ],
  barbados: [
    { band: 'Peak', note: 'Seco, brisa, animado' },
    { band: 'Peak', note: 'Temporada de cricket, lleno' },
    { band: 'Peak', note: 'Festival de Holetown, seco' },
    { band: 'High', note: 'Mes seco fiable' },
    { band: 'Shoulder', note: 'Calor, seco, valor óptimo' },
    { band: 'Low', note: 'Empieza Crop Over, calor' },
    { band: 'Low', note: 'Pico Crop Over, calor' },
    { band: 'Low', note: 'Cierra Crop Over, riesgo de tormenta' },
    { band: 'Avoid', note: 'Pico de huracanes' },
    { band: 'Shoulder', note: 'Tormentas decaen, ofertas duran' },
    { band: 'High', note: 'Vuelve la seca' },
    { band: 'Peak', note: 'Pico festivo' },
  ],
  sicily: [
    { band: 'Low', note: 'Frío, húmedo, atmosférico' },
    { band: 'Low', note: 'Almendros en flor, tranquilo' },
    { band: 'Shoulder', note: 'Primavera, floraciones, templado' },
    { band: 'High', note: 'Semana Santa, soleado, secando' },
    { band: 'Peak', note: 'Punto óptimo: cálido y calmo' },
    { band: 'Peak', note: 'Soleado, calor, lleno' },
    { band: 'Peak', note: 'Calor (35 °C), atestado' },
    { band: 'Peak', note: 'Pico vacacional italiano, lleno' },
    { band: 'Peak', note: 'Mar cálido, menos gente' },
    { band: 'High', note: 'Último mes cálido fiable' },
    { band: 'Shoulder', note: 'Más fresco, tranquilo, cola gastronómica' },
    { band: 'Low', note: 'Frío, festivo' },
  ],
  amalfi: [
    { band: 'Low', note: 'Cerrado, húmedo, crudo' },
    { band: 'Low', note: 'Casi todo cerrado' },
    { band: 'Shoulder', note: 'Reabre a fin de mes' },
    { band: 'High', note: 'Templado, azahares' },
    { band: 'Peak', note: 'Soleado, ideal, lleno' },
    { band: 'Peak', note: 'Mar cálido, precios pico' },
    { band: 'Peak', note: 'Calor, atestado, caro' },
    { band: 'Peak', note: 'Agosto italiano, lleno' },
    { band: 'Peak', note: 'Mar cálido, público más selecto' },
    { band: 'High', note: 'Último mes fiable' },
    { band: 'Low', note: 'Cerrado en su mayoría a mediados' },
    { band: 'Low', note: 'Cerrado salvo festivos' },
  ],
  'lake-como': [
    { band: 'Low', note: 'Frío, neblinoso, atmosférico' },
    { band: 'Low', note: 'Tranquilo, frío, nieve visible' },
    { band: 'Shoulder', note: 'Primavera, hoteles reabren' },
    { band: 'High', note: 'Templado, floraciones, ideal' },
    { band: 'Peak', note: 'Cálido, lleno, foto perfecta' },
    { band: 'Peak', note: 'Calor, animado, premium' },
    { band: 'Peak', note: 'Calor, atestado, caro' },
    { band: 'Peak', note: 'Pico vacacional italiano' },
    { band: 'Peak', note: 'Templado, más tranquilo, semana de la moda' },
    { band: 'High', note: 'Colores de otoño, calmo' },
    { band: 'Shoulder', note: 'Fresco, hoteles cierran a fin de mes' },
    { band: 'Low', note: 'Frío, festivo' },
  ],
  hawaii: [
    { band: 'Peak', note: 'Seco, temporada de ballenas, lleno' },
    { band: 'Peak', note: 'Más seco, pico de ballenas' },
    { band: 'High', note: 'Pico spring break' },
    { band: 'Shoulder', note: 'Secando, ventana de valor' },
    { band: 'Shoulder', note: 'Seco, calmo, punto óptimo' },
    { band: 'High', note: 'Seco, calentando' },
    { band: 'Peak', note: 'Seco, pico de verano de EE. UU.' },
    { band: 'Peak', note: 'Seco, más concurrido, más caro' },
    { band: 'Shoulder', note: 'Cola seca, mejor valor' },
    { band: 'Shoulder', note: 'Seco, intermedia tranquila' },
    { band: 'Peak', note: 'Empieza la temporada de surf, seco' },
    { band: 'Peak', note: 'Pico festivo' },
  ],
  'costa-rica': [
    { band: 'Peak', note: 'Estación seca, soleado' },
    { band: 'Peak', note: 'Más seco, parques animados' },
    { band: 'Peak', note: 'Recargo spring break' },
    { band: 'High', note: 'Últimas semanas secas, ofertas' },
    { band: 'Shoulder', note: 'Empieza la temporada verde, lujuriante' },
    { band: 'Shoulder', note: 'Lluvias cálidas, llegan tortugas' },
    { band: 'Shoulder', note: 'Veranillo, sequía corta' },
    { band: 'Low', note: 'Lo más húmedo, lo más barato' },
    { band: 'Low', note: 'Lo más húmedo, lo más barato' },
    { band: 'Low', note: 'Húmedo, pero pico de valor' },
    { band: 'Shoulder', note: 'Lluvias decaen, secando' },
    { band: 'Peak', note: 'Pico festivo, seco' },
  ],
}

const MONTH_INDICES = Array.from({ length: 12 }, (_, i) => i)
const INTENT_INDICES = [0, 1, 2, 3, 4, 5]
const INTENT_PICK_COUNTS = [3, 4, 3, 3, 3, 4]
const RULE_INDICES = [0, 1, 2, 3, 4, 5]
const FAQ_INDICES = Array.from({ length: 12 }, (_, i) => i)

const BAND_COLOR: Record<Band, string> = {
  Peak: 'bg-rose-100 text-rose-700',
  High: 'bg-amber-100 text-amber-700',
  Shoulder: 'bg-emerald-100 text-emerald-700',
  Low: 'bg-sky-100 text-sky-700',
  Avoid: 'bg-zinc-200 text-zinc-700',
}

const BAND_LABEL_KEY: Record<Band, string> = {
  Peak: 'band.peak',
  High: 'band.high',
  Shoulder: 'band.shoulder',
  Low: 'band.low',
  Avoid: 'band.avoid',
}

// Map ISO month index -> destination/[country]/[month] slug
const MONTH_SLUGS = [
  'january', 'february', 'march', 'april', 'may', 'june',
  'july', 'august', 'september', 'october', 'november', 'december',
] as const

// Intent picks reference dest+month combinations (must mirror EN page picks)
const INTENT_PICKS: { dest: string; month: string }[][] = [
  [{ dest: 'maldives', month: 'february' }, { dest: 'bora-bora', month: 'june' }, { dest: 'turks-and-caicos', month: 'february' }],
  [{ dest: 'sicily', month: 'may' }, { dest: 'bali', month: 'may' }, { dest: 'santorini', month: 'september' }, { dest: 'mauritius', month: 'november' }],
  [{ dest: 'costa-rica', month: 'september' }, { dest: 'hawaii', month: 'february' }, { dest: 'maldives', month: 'june' }],
  [{ dest: 'st-lucia', month: 'february' }, { dest: 'barbados', month: 'march' }, { dest: 'bahamas', month: 'april' }],
  [{ dest: 'maldives', month: 'january' }, { dest: 'barbados', month: 'january' }, { dest: 'jamaica', month: 'february' }],
  [{ dest: 'sicily', month: 'june' }, { dest: 'amalfi', month: 'september' }, { dest: 'santorini', month: 'june' }, { dest: 'lake-como', month: 'may' }],
]

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: t('metadata.title', 'Mejor época para luna de miel — calendario 2026'),
    description: t('metadata.description', ''),
    alternates: buildAlternates('/best-time-to-honeymoon', 'fr'),
    openGraph: {
      title: t('metadata.ogTitle', ''),
      description: t('metadata.ogDescription', ''),
      url: 'https://myhoneymoonhotel.com/fr/best-time-to-honeymoon',
      siteName: 'MyHoneymoonHotel',
      images: [
        {
          url: 'https://myhoneymoonhotel.com/images/hotels/four-seasons-bora-bora/hero.webp',
          width: 1600,
          height: 900,
          alt: t('metadata.ogImageAlt', ''),
        },
      ],
      locale: 'fr_FR',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('metadata.twitterTitle', ''),
      description: t('metadata.twitterDescription', ''),
      images: ['https://myhoneymoonhotel.com/images/hotels/four-seasons-bora-bora/hero.webp'],
    },
  }
}

function getCell(dest: string, monthIndex: number): { band: Band; note: string } {
  return MATRIX[dest]?.[monthIndex] ?? { band: 'Shoulder', note: '' }
}

export default function BestTimeToHoneymoonPageFR() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: t('metadata.ogTitle', ''),
    description: t('metadata.description', ''),
    image: 'https://myhoneymoonhotel.com/images/hotels/four-seasons-bora-bora/hero.webp',
    inLanguage: 'fr',
    author: { '@type': 'Organization', name: 'My Honeymoon Hotel', url: 'https://myhoneymoonhotel.com/about' },
    publisher: { '@type': 'Organization', name: 'My Honeymoon Hotel', logo: { '@type': 'ImageObject', url: 'https://myhoneymoonhotel.com/icon.png' } },
    datePublished: '2026-05-19',
    dateModified: '2026-05-19',
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://myhoneymoonhotel.com/fr/best-time-to-honeymoon' },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: 'fr',
    mainEntity: FAQ_INDICES.map((i) => ({
      '@type': 'Question',
      name: t(`faqs.${i}.question`, ''),
      acceptedAnswer: { '@type': 'Answer', text: t(`faqs.${i}.answer`, '') },
    })),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: t('schema.breadcrumb.home', 'Inicio'), item: 'https://myhoneymoonhotel.com/fr' },
      { '@type': 'ListItem', position: 2, name: t('schema.breadcrumb.page', ''), item: 'https://myhoneymoonhotel.com/fr/best-time-to-honeymoon' },
    ],
  }

  const speakableSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://myhoneymoonhotel.com/fr/best-time-to-honeymoon#speakable',
    inLanguage: 'fr',
    speakable: { '@type': 'SpeakableSpecification', cssSelector: ['#tldr'] },
  }

  const schemas = [articleSchema, faqSchema, breadcrumbSchema, speakableSchema]

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }} />

      {/* HERO */}
      <section className="relative h-[70vh] min-h-[520px] flex items-end overflow-hidden">
        <Image
          src="/images/hotels/four-seasons-bora-bora/hero.webp"
          alt={t('hero.imageAlt', '')}
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={75}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="relative z-10 px-8 sm:px-12 pb-16 max-w-4xl">
          <p className="text-white/60 text-xs tracking-[0.2em] uppercase mb-5">{t('hero.kicker', '')}</p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.05] mb-6">
            {t('hero.h1.line1', '')}<br />{t('hero.h1.line2', '')}
          </h1>
          <p className="text-white/75 text-base sm:text-lg max-w-2xl leading-relaxed">{t('hero.intro', '')}</p>
          <p className="text-white/50 text-xs mt-5">{t('hero.updated', '')}</p>
        </div>
      </section>

      {/* BREADCRUMB */}
      <nav aria-label="Breadcrumb" className="max-w-4xl mx-auto px-6 pt-8 text-xs text-zinc-500">
        <Link href="/fr" className="hover:text-zinc-900">{t('breadcrumb.home', 'Inicio')}</Link>
        <span className="mx-2">/</span>
        <span className="text-zinc-900">{t('breadcrumb.current', '')}</span>
      </nav>

      {/* TL;DR */}
      <div className="max-w-3xl mx-auto px-6">
        <aside id="tldr" className="my-8 p-6 rounded-2xl bg-rose-50/60 border border-rose-100">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-2">TL;DR</p>
          <p className="text-zinc-900 text-lg leading-relaxed font-medium">{t('tldr.answer', '')}</p>
          <ul className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-zinc-600">
            <li><strong className="block text-zinc-900 text-xs uppercase tracking-wider mb-1">{t('tldr.forLabel', 'Para')}</strong>{t('tldr.forValue', '')}</li>
            <li><strong className="block text-zinc-900 text-xs uppercase tracking-wider mb-1">{t('tldr.costLabel', '')}</strong>{t('tldr.costValue', '')}</li>
            <li><strong className="block text-zinc-900 text-xs uppercase tracking-wider mb-1">{t('tldr.strategyLabel', '')}</strong>{t('tldr.strategyValue', '')}</li>
          </ul>
        </aside>
      </div>

      {/* INTRO */}
      <section className="max-w-3xl mx-auto px-6 py-12 prose prose-zinc">
        <p className="text-lg text-zinc-700 leading-relaxed">{t('intro.p1', '')}</p>
        <p className="text-base text-zinc-700 leading-relaxed mt-5">
          {t('intro.p2.before', '')}{' '}
          <Link href="/fr/how-to-plan-a-honeymoon" className="text-rose-500 hover:text-rose-600 underline underline-offset-2">
            {t('intro.p2.linkText', '')}
          </Link>
          {t('intro.p2.after', '.')}
        </p>

        <div className="not-prose my-12 bg-zinc-50 border border-zinc-100 rounded-2xl p-7">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-4">{t('toc.kicker', '')}</p>
          <ol className="text-sm text-zinc-700 space-y-2 leading-relaxed list-decimal pl-5">
            <li><a className="hover:text-rose-500" href="#calendar">{t('toc.1', '')}</a></li>
            <li><a className="hover:text-rose-500" href="#intent">{t('toc.2', '')}</a></li>
            <li><a className="hover:text-rose-500" href="#framework">{t('toc.3', '')}</a></li>
            <li><a className="hover:text-rose-500" href="#faq">{t('toc.4', '')}</a></li>
          </ol>
        </div>
      </section>

      {/* CALENDAR */}
      <section id="calendar" className="max-w-6xl mx-auto px-6 py-16">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-3">{t('section.calendar.kicker', '')}</p>
        <h2 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-6 leading-tight">{t('section.calendar.h2', '')}</h2>
        <p className="text-zinc-700 text-base leading-relaxed mb-10 max-w-3xl">{t('section.calendar.intro', '')}</p>

        <div className="space-y-20">
          {MONTH_INDICES.map((mIdx) => {
            const monthSlug = MONTH_SLUGS[mIdx]
            return (
              <div key={monthSlug}>
                <h3 className="font-display text-3xl sm:text-4xl text-zinc-900 mb-3 leading-tight">
                  {t(`month.${mIdx}.label`, '')} — {t(`month.${mIdx}.headline`, '')}
                </h3>
                <p className="text-zinc-700 text-base leading-relaxed mb-8 max-w-3xl">{t(`month.${mIdx}.intro`, '')}</p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {DEST_SLUGS.map((dest) => {
                    const cell = getCell(dest, mIdx)
                    return (
                      <Link
                        key={dest}
                        href={`/fr/destinations/${dest}/${monthSlug}`}
                        className="block border border-zinc-200 rounded-xl p-4 hover:border-rose-300 hover:shadow-sm transition-all bg-white"
                      >
                        <div className="flex items-baseline justify-between gap-2 mb-1.5">
                          <p className="font-display text-base text-zinc-900 leading-tight">{DEST_LABEL_ES[dest]}</p>
                          <span className={`text-[10px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded ${BAND_COLOR[cell.band]}`}>
                            {t(BAND_LABEL_KEY[cell.band], cell.band)}
                          </span>
                        </div>
                        <p className="text-zinc-600 text-xs leading-snug">{cell.note}</p>
                      </Link>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* INTENT */}
      <section id="intent" className="bg-zinc-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-3">{t('section.intent.kicker', '')}</p>
          <h2 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-6 leading-tight">{t('section.intent.h2', '')}</h2>
          <p className="text-zinc-700 text-base leading-relaxed mb-10 max-w-3xl">{t('section.intent.intro', '')}</p>
          <div className="space-y-12">
            {INTENT_INDICES.map((i) => (
              <div key={i} className="border-l-2 border-rose-200 pl-6">
                <h3 className="font-display text-2xl text-zinc-900 mb-3">{t(`intent.${i}.title`, '')}</h3>
                <p className="text-zinc-700 text-base leading-relaxed mb-5">{t(`intent.${i}.body`, '')}</p>
                <div className="flex flex-wrap gap-2">
                  {Array.from({ length: INTENT_PICK_COUNTS[i] }, (_, k) => {
                    const pick = INTENT_PICKS[i][k]
                    return (
                      <Link
                        key={k}
                        href={`/fr/destinations/${pick.dest}/${pick.month}`}
                        className="inline-flex items-center text-sm bg-white border border-zinc-200 rounded-full px-4 py-1.5 hover:border-rose-300 hover:text-rose-600 transition-colors"
                      >
                        {t(`intent.${i}.pick.${k}`, '')} →
                      </Link>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
          <p className="text-zinc-700 text-base leading-relaxed mt-12">
            {t('section.intent.outro1', '')}{' '}
            <Link href="/fr/best/honeymoon-resorts-2026" className="text-rose-500 hover:text-rose-600 underline underline-offset-2">
              {t('section.intent.outro.bestLink', '')}
            </Link>
            {t('section.intent.outro2', '.')}
          </p>
        </div>
      </section>

      {/* FRAMEWORK */}
      <section id="framework" className="max-w-3xl mx-auto px-6 py-20">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-3">{t('section.framework.kicker', '')}</p>
        <h2 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-6 leading-tight">{t('section.framework.h2', '')}</h2>
        <p className="text-zinc-700 text-base leading-relaxed mb-10">{t('section.framework.intro', '')}</p>
        <div className="space-y-9">
          {RULE_INDICES.map((i) => (
            <div key={i} className="border-l-2 border-rose-200 pl-6">
              <p className="text-xs font-mono text-rose-500 uppercase tracking-widest mb-1">Regla {i + 1}</p>
              <h3 className="font-display text-2xl text-zinc-900 mb-3">{t(`rule.${i}.title`, '')}</h3>
              <p className="text-zinc-700 text-base leading-relaxed">{t(`rule.${i}.body`, '')}</p>
            </div>
          ))}
        </div>
        <p className="text-zinc-700 text-base leading-relaxed mt-10">
          {t('section.framework.outro1', '')}{' '}
          <Link href="/fr/maldives-honeymoon-cost" className="text-rose-500 hover:text-rose-600 underline underline-offset-2">
            {t('section.framework.outro.maldivesLink', '')}
          </Link>
          {t('section.framework.outro2', '.')}
        </p>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-zinc-50 py-20">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-3">{t('section.faq.kicker', '')}</p>
          <h2 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-6 leading-tight">{t('section.faq.h2', '')}</h2>
          <div className="space-y-7 mt-10">
            {FAQ_INDICES.map((i) => (
              <details key={i} className="group border-b border-zinc-200 pb-5">
                <summary className="cursor-pointer font-medium text-zinc-900 text-lg flex justify-between items-start gap-4">
                  <span>{t(`faqs.${i}.question`, '')}</span>
                  <span className="text-rose-500 group-open:rotate-45 transition-transform shrink-0 font-light text-2xl leading-none">+</span>
                </summary>
                <p className="text-zinc-700 text-base leading-relaxed mt-3">{t(`faqs.${i}.answer`, '')}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <Image src="/images/hotels/four-seasons-bora-bora/hero.webp" alt={t('cta.imageAlt', '')} fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
        <div className="relative max-w-4xl mx-auto px-6 text-white">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-300 mb-4">{t('cta.kicker', '')}</p>
          <h2 className="font-display text-4xl sm:text-5xl leading-tight mb-5">
            {t('cta.h2.line1', '')} <br className="hidden sm:block" />{t('cta.h2.line2', '')}
          </h2>
          <p className="text-white/70 text-base leading-relaxed mb-8 max-w-xl">{t('cta.body', '')}</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/fr/quiz" className="bg-rose-500 hover:bg-rose-600 text-white font-semibold text-sm px-8 py-4 rounded-full transition-colors shadow-xl">
              {t('cta.button.primary', '')}
            </Link>
            <Link href="/fr/how-to-plan-a-honeymoon" className="border border-white/30 backdrop-blur-md bg-white/5 hover:bg-white/10 text-white font-semibold text-sm px-8 py-4 rounded-full transition-colors">
              {t('cta.button.secondary', '')}
            </Link>
          </div>
        </div>
      </section>
    </article>
  )
}
