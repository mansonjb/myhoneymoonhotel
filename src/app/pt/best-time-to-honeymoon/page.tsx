import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { getLocalizedPageManifest, tm } from '@/lib/getLocalizedPageManifest'
import { buildAlternates } from '@/lib/alternates'

const SLUG = 'best-time-to-honeymoon'
const m = getLocalizedPageManifest(SLUG, 'pt')
const t = (key: string, fallback = ''): string => tm(m, key, fallback)

const DEST_SLUGS = [
  'maldives', 'bora-bora', 'bali', 'santorini', 'st-lucia', 'turks-and-caicos',
  'mauritius', 'seychelles', 'mexico', 'jamaica', 'fiji', 'bahamas',
  'anguilla', 'antigua', 'barbados', 'sicily', 'amalfi', 'lake-como',
  'hawaii', 'costa-rica',
] as const

const DEST_LABEL_PT: Record<string, string> = {
  maldives: 'Maldivas',
  'bora-bora': 'Bora Bora',
  bali: 'Bali',
  santorini: 'Santorini',
  'st-lucia': 'Santa Lúcia',
  'turks-and-caicos': 'Turks e Caicos',
  mauritius: 'Maurício',
  seychelles: 'Seychelles',
  mexico: 'México',
  jamaica: 'Jamaica',
  fiji: 'Fiji',
  bahamas: 'Bahamas',
  anguilla: 'Anguila',
  antigua: 'Antígua',
  barbados: 'Barbados',
  sicily: 'Sicília',
  amalfi: 'Amalfi',
  'lake-como': 'Lago de Como',
  hawaii: 'Havaí',
  'costa-rica': 'Costa Rica',
}

type Band = 'Peak' | 'High' | 'Shoulder' | 'Low' | 'Avoid'

const MATRIX: Record<string, { band: Band; note: string }[]> = {
  maldives: [
    { band: 'Peak', note: 'Seco, quente, quase sem chuva' },
    { band: 'Peak', note: 'As semanas mais secas do ano' },
    { band: 'High', note: 'Quente, mar calmo, movimentado' },
    { band: 'High', note: 'Última seca, preços caem' },
    { band: 'Shoulder', note: 'Começa o úmido, mantas chegam' },
    { band: 'Shoulder', note: 'Tubarões-baleia, mais barato' },
    { band: 'Low', note: 'Úmido, pico escolar europeu' },
    { band: 'Low', note: 'Úmido, surfistas adoram' },
    { band: 'Low', note: 'Semanas mais baratas, risco real' },
    { band: 'Shoulder', note: 'Chuvas saem no fim do mês' },
    { band: 'Shoulder', note: 'Volta a seca, melhor custo' },
    { band: 'Peak', note: 'Pico festivo 20 dez-5 jan' },
  ],
  'bora-bora': [
    { band: 'Shoulder', note: 'Quente, úmido, pancadas' },
    { band: 'Shoulder', note: 'Cauda da estação úmida' },
    { band: 'Shoulder', note: 'Secando, preços caem' },
    { band: 'High', note: 'Começa a seca, foto perfeita' },
    { band: 'Peak', note: 'Clima de cartão-postal, lotado' },
    { band: 'Peak', note: 'Seco, brisa, preços de pico' },
    { band: 'Peak', note: 'Mês mais frio, mais cheio' },
    { band: 'Peak', note: 'Festival Heiva, lotado' },
    { band: 'High', note: 'Seco e mais tranquilo que julho' },
    { band: 'High', note: 'Lagoa no seu azul mais intenso' },
    { band: 'Shoulder', note: 'Volta a umidade, ofertas' },
    { band: 'Peak', note: 'Adicional festivo, chuvoso' },
  ],
  bali: [
    { band: 'Low', note: 'Estação chuvosa, exuberante, barato' },
    { band: 'Low', note: 'Semanas mais úmidas, off-peak' },
    { band: 'Shoulder', note: 'Chuvas diminuem em meados' },
    { band: 'High', note: 'Começa a seca, ideal' },
    { band: 'High', note: 'Melhor custo dos meses secos' },
    { band: 'Peak', note: 'Seco, brisa, lotado' },
    { band: 'Peak', note: 'Seco, mais fresco, verão europeu' },
    { band: 'Peak', note: 'Mais seco, mais cheio, mais caro' },
    { band: 'High', note: 'Seco, mais tranquilo que agosto' },
    { band: 'High', note: 'Cauda seca, mês de pôr do sol' },
    { band: 'Shoulder', note: 'Voltam pancadas, calmo' },
    { band: 'Peak', note: 'Pico festivo, dias úmidos' },
  ],
  santorini: [
    { band: 'Low', note: 'Frio, meio fechado, cru' },
    { band: 'Low', note: 'Tranquilo, com brisa, romântico' },
    { band: 'Shoulder', note: 'Flores de primavera, abre' },
    { band: 'High', note: 'Ameno, caminhável, sem multidão' },
    { band: 'Peak', note: 'Ensolarado, manejável, cartão-postal' },
    { band: 'Peak', note: 'Quente, lotado, filas no pôr do sol' },
    { band: 'Peak', note: 'Multidão esmagadora, 35 °C' },
    { band: 'Peak', note: 'Pico de cruzeiros, lotado' },
    { band: 'Peak', note: 'Morno, mais calmo, melhor do verão' },
    { band: 'High', note: 'Últimas semanas mornas, preços caem' },
    { band: 'Shoulder', note: 'Tranquilo, restaurantes fecham' },
    { band: 'Low', note: 'Quase tudo fechado, atmosférico' },
  ],
  'st-lucia': [
    { band: 'Peak', note: 'Seco, brisa, melhor temporada' },
    { band: 'Peak', note: 'Semanas mais secas, pico Valentine' },
    { band: 'High', note: 'Seco e quente, festival de jazz' },
    { band: 'High', note: 'Último mês seco confiável' },
    { band: 'Shoulder', note: 'Quente, breves pancadas à tarde' },
    { band: 'Low', note: 'Abre a janela de furacões' },
    { band: 'Low', note: 'Quente, úmido, risco real' },
    { band: 'Avoid', note: 'Pico de furacões, barato' },
    { band: 'Avoid', note: 'Maior probabilidade de ciclone' },
    { band: 'Shoulder', note: 'Tempestades diminuem, ofertas duram' },
    { band: 'High', note: 'Volta a seca, ótimo custo' },
    { band: 'Peak', note: 'Pico festivo, estação seca' },
  ],
  'turks-and-caicos': [
    { band: 'Peak', note: 'Tempo cristalino, praia cheia' },
    { band: 'Peak', note: 'Seco, com brisa, lotado' },
    { band: 'Peak', note: 'Adicional spring break' },
    { band: 'High', note: 'Quente, mais seco, calmo' },
    { band: 'High', note: 'Ótimo custo de meia-estação' },
    { band: 'Shoulder', note: 'Quente, calmo, abre janela de furacões' },
    { band: 'Low', note: 'Sobe o risco de tempestade' },
    { band: 'Avoid', note: 'Pico de furacões, ofertas mais profundas' },
    { band: 'Avoid', note: 'Maior risco de tempestade do ano' },
    { band: 'Shoulder', note: 'Tempestades diminuem no fim do mês' },
    { band: 'High', note: 'Volta a seca, melhor custo' },
    { band: 'Peak', note: 'Pico festivo, seco' },
  ],
  mauritius: [
    { band: 'Peak', note: 'Quente, úmido, lagoa cheia' },
    { band: 'Peak', note: 'Quente, possível cauda ciclônica' },
    { band: 'High', note: 'Esfriando, úmido se vai' },
    { band: 'High', note: 'Ameno, seco, ideal' },
    { band: 'Shoulder', note: 'Mais fresco, seco, ótimo custo' },
    { band: 'Shoulder', note: 'Meses mais frios, swell de surfe' },
    { band: 'High', note: 'Seco, brisa, verão europeu' },
    { band: 'High', note: 'Seco, temporada de kite' },
    { band: 'High', note: 'Esquentando, tranquilo' },
    { band: 'Peak', note: 'Ponto ótimo: quente e calmo' },
    { band: 'Peak', note: 'Quente, lagoa no azul mais intenso' },
    { band: 'Peak', note: 'Pico festivo, quente' },
  ],
  seychelles: [
    { band: 'Peak', note: 'Quente, monção NW calma' },
    { band: 'Peak', note: 'Morno, breves pancadas' },
    { band: 'High', note: 'Mês de transição, misto' },
    { band: 'Peak', note: 'Mar calmo em ambas as costas' },
    { band: 'High', note: 'Começam alísios SE, secando' },
    { band: 'High', note: 'Mais fresco, brisa, temporada de vela' },
    { band: 'Peak', note: 'Mais seco, mais ventoso, pico europeu' },
    { band: 'Peak', note: 'Seco, agitado, temporada de kite' },
    { band: 'High', note: 'Ventos diminuem, espelhado' },
    { band: 'Peak', note: 'O melhor: quente e calmo' },
    { band: 'Peak', note: 'Quente, calmo, foto perfeita' },
    { band: 'Peak', note: 'Pico festivo, úmido' },
  ],
  mexico: [
    { band: 'Peak', note: 'Seco, noites frescas, lotado' },
    { band: 'Peak', note: 'Temporada de baleias, ensolarado' },
    { band: 'Peak', note: 'Pico spring break' },
    { band: 'High', note: 'Quente, mais seco, calmo' },
    { band: 'Shoulder', note: 'Quente, sargaço na costa' },
    { band: 'Shoulder', note: 'Abre a janela de tempestades' },
    { band: 'Low', note: 'Quente, úmido, breves tempestades' },
    { band: 'Low', note: 'Mais úmido, semanas mais baratas' },
    { band: 'Avoid', note: 'Pico de furacões no Caribe' },
    { band: 'Shoulder', note: 'Tempestades diminuem, volta a seca' },
    { band: 'Peak', note: 'Seco, quente, ideal' },
    { band: 'Peak', note: 'Pico festivo, seco' },
  ],
  jamaica: [
    { band: 'Peak', note: 'Seco, quente, lotado' },
    { band: 'Peak', note: 'Mês do reggae, ensolarado' },
    { band: 'High', note: 'Adicional spring break' },
    { band: 'High', note: 'Último mês seco confiável' },
    { band: 'Shoulder', note: 'Mais quente, breves pancadas' },
    { band: 'Low', note: 'Abre a janela de furacões' },
    { band: 'Low', note: 'Quente, sobe o risco de tempestade' },
    { band: 'Avoid', note: 'Pico de furacões, o mais barato' },
    { band: 'Avoid', note: 'Maior probabilidade de tempestade' },
    { band: 'Shoulder', note: 'Tempestades diminuem, ofertas seguem' },
    { band: 'High', note: 'Volta a seca, ótimo custo' },
    { band: 'Peak', note: 'Pico festivo, seco' },
  ],
  fiji: [
    { band: 'Low', note: 'Úmido, quente, janela ciclônica' },
    { band: 'Low', note: 'Úmido, janela ciclônica' },
    { band: 'Shoulder', note: 'Chuvas diminuem, preços caem' },
    { band: 'High', note: 'Começa a estação seca' },
    { band: 'Peak', note: 'Seco, quente, foto perfeita' },
    { band: 'Peak', note: 'Seco, mais fresco, pico' },
    { band: 'Peak', note: 'Mais seco, noites frescas' },
    { band: 'Peak', note: 'Seco, brisa, lotado' },
    { band: 'Peak', note: 'Seco, esquentando' },
    { band: 'High', note: 'Cauda seca, ótimo custo' },
    { band: 'Shoulder', note: 'Volta a umidade' },
    { band: 'Peak', note: 'Pico festivo, úmido' },
  ],
  bahamas: [
    { band: 'Peak', note: 'Seco, fresco, brisa' },
    { band: 'Peak', note: 'Seco, lotado, Valentine' },
    { band: 'Peak', note: 'Adicional spring break' },
    { band: 'High', note: 'Esquentando, mar mais calmo' },
    { band: 'Shoulder', note: 'Quente, seco, bom custo' },
    { band: 'Shoulder', note: 'Abre a janela de tempestades' },
    { band: 'Low', note: 'Quente, úmido, risco de tempestade' },
    { band: 'Avoid', note: 'Pico de furacões' },
    { band: 'Avoid', note: 'Maior probabilidade de tempestade' },
    { band: 'Shoulder', note: 'Tempestades diminuem, ofertas duram' },
    { band: 'High', note: 'Volta a seca, ótimo custo' },
    { band: 'Peak', note: 'Pico festivo' },
  ],
  anguilla: [
    { band: 'Peak', note: 'Seco, brisa, lotado' },
    { band: 'Peak', note: 'Mais seco, pico Valentine' },
    { band: 'Peak', note: 'Mar calmo, seco' },
    { band: 'High', note: 'Último mês seco confiável' },
    { band: 'Shoulder', note: 'Quente, calmo, valor' },
    { band: 'Low', note: 'Abre a janela de furacões' },
    { band: 'Low', note: 'Quente, úmido, risco' },
    { band: 'Avoid', note: 'Pico de furacões, o mais barato' },
    { band: 'Avoid', note: 'Hotéis fechados ago-meados de out' },
    { band: 'Shoulder', note: 'Hotéis reabrem no fim do mês' },
    { band: 'High', note: 'Volta a seca, alta categoria' },
    { band: 'Peak', note: 'Pico festivo' },
  ],
  antigua: [
    { band: 'Peak', note: 'Seco, brisa, lotado' },
    { band: 'Peak', note: 'Semana da vela, adicional' },
    { band: 'Peak', note: 'Seco, mês clássico de regatas' },
    { band: 'Peak', note: 'Pico da semana da vela' },
    { band: 'Shoulder', note: 'Quente, seco, ótimo custo' },
    { band: 'Low', note: 'Abre a janela de furacões' },
    { band: 'Low', note: 'Carnaval, quente, risco' },
    { band: 'Avoid', note: 'Pico de furacões' },
    { band: 'Avoid', note: 'Maior probabilidade de tempestade' },
    { band: 'Shoulder', note: 'Tempestades diminuem, ofertas seguem' },
    { band: 'High', note: 'Volta a seca' },
    { band: 'Peak', note: 'Pico festivo' },
  ],
  barbados: [
    { band: 'Peak', note: 'Seco, brisa, movimentado' },
    { band: 'Peak', note: 'Temporada de cricket, lotado' },
    { band: 'Peak', note: 'Festival de Holetown, seco' },
    { band: 'High', note: 'Mês seco confiável' },
    { band: 'Shoulder', note: 'Quente, seco, ponto ótimo' },
    { band: 'Low', note: 'Começa Crop Over, quente' },
    { band: 'Low', note: 'Pico Crop Over, quente' },
    { band: 'Low', note: 'Fecha Crop Over, risco de tempestade' },
    { band: 'Avoid', note: 'Pico de furacões' },
    { band: 'Shoulder', note: 'Tempestades diminuem, ofertas duram' },
    { band: 'High', note: 'Volta a seca' },
    { band: 'Peak', note: 'Pico festivo' },
  ],
  sicily: [
    { band: 'Low', note: 'Frio, úmido, atmosférico' },
    { band: 'Low', note: 'Amendoeiras em flor, tranquilo' },
    { band: 'Shoulder', note: 'Primavera, florescendo, ameno' },
    { band: 'High', note: 'Páscoa, ensolarado, secando' },
    { band: 'Peak', note: 'Ponto ótimo: morno e calmo' },
    { band: 'Peak', note: 'Ensolarado, quente, movimentado' },
    { band: 'Peak', note: 'Quente (35 °C), lotado' },
    { band: 'Peak', note: 'Pico de férias italianas, lotado' },
    { band: 'Peak', note: 'Mar quente, menos gente' },
    { band: 'High', note: 'Último mês quente confiável' },
    { band: 'Shoulder', note: 'Mais frio, tranquilo, cauda gastronômica' },
    { band: 'Low', note: 'Frio, festivo' },
  ],
  amalfi: [
    { band: 'Low', note: 'Fechado, úmido, cru' },
    { band: 'Low', note: 'Quase tudo fechado' },
    { band: 'Shoulder', note: 'Reabre no fim do mês' },
    { band: 'High', note: 'Ameno, flor de limoeiro' },
    { band: 'Peak', note: 'Ensolarado, ideal, lotado' },
    { band: 'Peak', note: 'Mar quente, preços de pico' },
    { band: 'Peak', note: 'Quente, lotado, caro' },
    { band: 'Peak', note: 'Agosto italiano, lotado' },
    { band: 'Peak', note: 'Mar quente, público mais seleto' },
    { band: 'High', note: 'Último mês confiável' },
    { band: 'Low', note: 'Quase tudo fechado em meados' },
    { band: 'Low', note: 'Fechado, salvo feriados' },
  ],
  'lake-como': [
    { band: 'Low', note: 'Frio, nebuloso, atmosférico' },
    { band: 'Low', note: 'Tranquilo, frio, neve visível' },
    { band: 'Shoulder', note: 'Primavera, hotéis reabrem' },
    { band: 'High', note: 'Ameno, flores, ideal' },
    { band: 'Peak', note: 'Morno, lotado, foto perfeita' },
    { band: 'Peak', note: 'Quente, movimentado, premium' },
    { band: 'Peak', note: 'Quente, lotado, caro' },
    { band: 'Peak', note: 'Pico de férias italianas' },
    { band: 'Peak', note: 'Ameno, mais tranquilo, semana de moda' },
    { band: 'High', note: 'Cores de outono, calmo' },
    { band: 'Shoulder', note: 'Fresco, hotéis fecham no fim do mês' },
    { band: 'Low', note: 'Frio, festivo' },
  ],
  hawaii: [
    { band: 'Peak', note: 'Seco, temporada de baleias, lotado' },
    { band: 'Peak', note: 'Mais seco, pico de baleias' },
    { band: 'High', note: 'Pico spring break' },
    { band: 'Shoulder', note: 'Secando, janela de valor' },
    { band: 'Shoulder', note: 'Seco, calmo, ponto ótimo' },
    { band: 'High', note: 'Seco, esquentando' },
    { band: 'Peak', note: 'Seco, pico de verão dos EUA' },
    { band: 'Peak', note: 'Seco, mais cheio, mais caro' },
    { band: 'Shoulder', note: 'Cauda seca, melhor valor' },
    { band: 'Shoulder', note: 'Seco, meia-estação tranquila' },
    { band: 'Peak', note: 'Começa a temporada de surfe, seco' },
    { band: 'Peak', note: 'Pico festivo' },
  ],
  'costa-rica': [
    { band: 'Peak', note: 'Estação seca, ensolarado' },
    { band: 'Peak', note: 'Mais seco, parques movimentados' },
    { band: 'Peak', note: 'Adicional spring break' },
    { band: 'High', note: 'Últimas semanas secas, ofertas' },
    { band: 'Shoulder', note: 'Começa a estação verde, exuberante' },
    { band: 'Shoulder', note: 'Chuvas mornas, tartarugas chegam' },
    { band: 'Shoulder', note: 'Veranillo, estiagem breve' },
    { band: 'Low', note: 'Mais úmido, mais barato' },
    { band: 'Low', note: 'Mais úmido, mais barato' },
    { band: 'Low', note: 'Úmido, mas pico de valor' },
    { band: 'Shoulder', note: 'Chuvas diminuem, secando' },
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

const MONTH_SLUGS = [
  'january', 'february', 'march', 'april', 'may', 'june',
  'july', 'august', 'september', 'october', 'november', 'december',
] as const

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
    title: t('metadata.title', 'Melhor época para lua de mel — calendário 2026'),
    description: t('metadata.description', ''),
    alternates: buildAlternates('/best-time-to-honeymoon', 'pt'),
    openGraph: {
      title: t('metadata.ogTitle', ''),
      description: t('metadata.ogDescription', ''),
      url: 'https://myhoneymoonhotel.com/pt/best-time-to-honeymoon',
      siteName: 'MyHoneymoonHotel',
      images: [
        {
          url: 'https://myhoneymoonhotel.com/images/hotels/four-seasons-bora-bora/hero.webp',
          width: 1600,
          height: 900,
          alt: t('metadata.ogImageAlt', ''),
        },
      ],
      locale: 'pt_BR',
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

export default function BestTimeToHoneymoonPagePT() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: t('metadata.ogTitle', ''),
    description: t('metadata.description', ''),
    image: 'https://myhoneymoonhotel.com/images/hotels/four-seasons-bora-bora/hero.webp',
    inLanguage: 'pt-BR',
    author: { '@type': 'Organization', name: 'My Honeymoon Hotel', url: 'https://myhoneymoonhotel.com/about' },
    publisher: { '@type': 'Organization', name: 'My Honeymoon Hotel', logo: { '@type': 'ImageObject', url: 'https://myhoneymoonhotel.com/icon.png' } },
    datePublished: '2026-05-19',
    dateModified: '2026-05-19',
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://myhoneymoonhotel.com/pt/best-time-to-honeymoon' },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: 'pt-BR',
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
      { '@type': 'ListItem', position: 1, name: t('schema.breadcrumb.home', 'Início'), item: 'https://myhoneymoonhotel.com/pt' },
      { '@type': 'ListItem', position: 2, name: t('schema.breadcrumb.page', ''), item: 'https://myhoneymoonhotel.com/pt/best-time-to-honeymoon' },
    ],
  }

  const speakableSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://myhoneymoonhotel.com/pt/best-time-to-honeymoon#speakable',
    inLanguage: 'pt-BR',
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
        <Link href="/pt" className="hover:text-zinc-900">{t('breadcrumb.home', 'Início')}</Link>
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
          <Link href="/pt/how-to-plan-a-honeymoon" className="text-rose-500 hover:text-rose-600 underline underline-offset-2">
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
                        href={`/pt/destinations/${dest}/${monthSlug}`}
                        className="block border border-zinc-200 rounded-xl p-4 hover:border-rose-300 hover:shadow-sm transition-all bg-white"
                      >
                        <div className="flex items-baseline justify-between gap-2 mb-1.5">
                          <p className="font-display text-base text-zinc-900 leading-tight">{DEST_LABEL_PT[dest]}</p>
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
                        href={`/pt/destinations/${pick.dest}/${pick.month}`}
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
            <Link href="/pt/best/honeymoon-resorts-2026" className="text-rose-500 hover:text-rose-600 underline underline-offset-2">
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
              <p className="text-xs font-mono text-rose-500 uppercase tracking-widest mb-1">Regra {i + 1}</p>
              <h3 className="font-display text-2xl text-zinc-900 mb-3">{t(`rule.${i}.title`, '')}</h3>
              <p className="text-zinc-700 text-base leading-relaxed">{t(`rule.${i}.body`, '')}</p>
            </div>
          ))}
        </div>
        <p className="text-zinc-700 text-base leading-relaxed mt-10">
          {t('section.framework.outro1', '')}{' '}
          <Link href="/pt/maldives-honeymoon-cost" className="text-rose-500 hover:text-rose-600 underline underline-offset-2">
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
            <Link href="/pt/quiz" className="bg-rose-500 hover:bg-rose-600 text-white font-semibold text-sm px-8 py-4 rounded-full transition-colors shadow-xl">
              {t('cta.button.primary', '')}
            </Link>
            <Link href="/pt/how-to-plan-a-honeymoon" className="border border-white/30 backdrop-blur-md bg-white/5 hover:bg-white/10 text-white font-semibold text-sm px-8 py-4 rounded-full transition-colors">
              {t('cta.button.secondary', '')}
            </Link>
          </div>
        </div>
      </section>
    </article>
  )
}
