import type { Metadata } from 'next'
import Link from 'next/link'
import { buildAlternates } from '@/lib/alternates'
import AuthorByline from '@/components/AuthorByline'
import { AUTHOR } from '@/data/author'

export const metadata: Metadata = {
  title: 'Lua de mel em bangalô sobre a água: guia 2026',
  description:
    'Maldivas, Bora Bora, Polinésia, Fiji, Belize, México e Indonésia: onde estão os bangalôs reais, três faixas de preço e os oito hotéis que reservaríamos.',
  alternates: buildAlternates('/overwater-bungalow-honeymoon', 'pt'),
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  inLanguage: 'pt-BR',
  headline: 'A lua de mel em bangalô sobre a água: o guia honesto 2026.',
  description:
    'Um guia regional e por faixas para luas de mel em bangalôs sobre a água — onde realmente existem, quanto custam de verdade, oito hotéis que reservaríamos e as realidades que os folhetos omitem.',
  author: { '@type': 'Person', name: AUTHOR.name, url: AUTHOR.url, jobTitle: AUTHOR.role },
  publisher: {
    '@type': 'Organization',
    name: 'My Honeymoon Hotel',
    logo: { '@type': 'ImageObject', url: 'https://myhoneymoonhotel.com/icon.png' },
  },
  datePublished: '2026-06-07',
  dateModified: '2026-06-07',
  mainEntityOfPage: 'https://myhoneymoonhotel.com/pt/overwater-bungalow-honeymoon',
}

const faqs = [
  {
    question: 'Um bangalô sobre a água vale a pena?',
    answer:
      'Sim, mas apenas na faixa e no destino certos. Um quarto de entrada por US$ 700 a noite em Bora Bora não é o mesmo produto que uma vila Soneva Jani a US$ 4.000 — e muitos casais que reservam a entrada voltam decepcionados porque esperavam a versão do folheto. As vilas que realmente entregam ficam entre US$ 1.500 e US$ 3.000 a noite, com piscina privativa, orientação para o pôr do sol e acesso direto à laguna.',
  },
  {
    question: 'Maldivas ou Bora Bora?',
    answer:
      'Maldivas pela clareza da água, vida marinha, exclusividade um atol por resort e o maior inventário do mundo (90% do estoque global). Bora Bora pela silhueta do monte Otemanu, cultura polinésia e o berço original do formato. Maldivas parece de outro mundo; Bora Bora parece cinema. Escolha Maldivas se você quer ilha privada e isolamento total; escolha Bora Bora se você quer o Otemanu em todas as fotos.',
  },
  {
    question: 'Dá para nadar direto do deck?',
    answer:
      'Em quase todas as vilas, sim — uma escada desce direto na laguna. Mas a experiência varia bastante. Vilas premium ficam sobre areia clara ou coral com 20-30 m de visibilidade; vilas de entrada às vezes ficam sobre algas ou canais turvos e a água é menos convidativa do que o folheto sugere. Sempre confirme a clareza da laguna antes de reservar, não só o estilo da vila.',
  },
  {
    question: 'Quanto custa uma lua de mel de 7 noites sobre a água?',
    answer:
      'Orçamento realista para um casal, voos, transfers e uma excursão incluídos: US$ 9.000-14.000 na entrada (Le Moana Bora Bora, Ayada Maldivas); US$ 18.000-30.000 na média (Conrad Maldivas Rangali, Four Seasons Bora Bora); US$ 40.000-70.000+ no ultra (Soneva Jani, Cheval Blanc Randheli). O transfer nas Maldivas (hidroavião ou voo doméstico) acrescenta US$ 400-1.000 por casal.',
  },
  {
    question: 'É seguro em tempestades?',
    answer:
      'Sim. As vilas modernas são projetadas para tempestades tropicais e os resorts fecham ou evacuam bem antes de qualquer ciclone. O risco real não é segurança, é decepção: céu nublado anula a experiência do piso de vidro, e chuva no telhado de palha é romântica ou tira o sono dependendo do casal. Viaje nas janelas de seca recomendadas abaixo e o risco fica mínimo.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'pt-BR',
  mainEntity: faqs.map(f => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://myhoneymoonhotel.com/pt' },
    { '@type': 'ListItem', position: 2, name: 'Lua de mel em bangalô sobre a água', item: 'https://myhoneymoonhotel.com/pt/overwater-bungalow-honeymoon' },
  ],
}

const hotelPicks = [
  { href: '/pt/hotels/conrad-maldives-rangali-island', name: 'Conrad Maldives Rangali Island', dest: 'Maldivas', tier: 'Média · US$ 1.500/noite', why: 'Resort em duas ilhas, restaurante submarino e a versão média mais refinada das Maldivas.' },
  { href: '/pt/hotels/four-seasons-bora-bora', name: 'Four Seasons Resort Bora Bora', dest: 'Bora Bora', tier: 'Média · US$ 2.000/noite', why: 'Vilas com vista para o Otemanu, o cenário mais limpo de Bora Bora e o melhor serviço da ilha.' },
  { href: '/pt/hotels/soneva-jani-maldives', name: 'Soneva Jani', dest: 'Maldivas', tier: 'Ultra · US$ 4.000+/noite', why: 'Vilas de dois andares com teto retrátil sobre a cama e tobogã do deck superior — a lua de mel sobre a água mais espetacular do mundo.' },
  { href: '/pt/hotels/cheval-blanc-randheli-maldives', name: 'Cheval Blanc Randheli', dest: 'Maldivas', tier: 'Ultra · US$ 4.500+/noite', why: 'Carro-chefe da LVMH: interiores Christian Liaigre, quatro restaurantes e o serviço de mordomo mais polido do segmento.' },
  { href: '/pt/hotels/gili-lankanfushi-maldives', name: 'Gili Lankanfushi Maldives', dest: 'Maldivas', tier: 'Ultra · US$ 2.800/noite', why: 'A referência "no news, no shoes" — vilas em palha ligadas por passarelas, luxo descalço sem teatro.' },
  { href: '/pt/hotels/intercontinental-le-moana-bora-bora-resort-bora-bora', name: 'InterContinental Le Moana Bora Bora', dest: 'Bora Bora', tier: 'Entrada · US$ 800/noite', why: 'O clássico de Matira Point — a forma mais acessível de viver o sonho Bora Bora sem cortes na laguna.' },
  { href: '/pt/hotels/cayo-espanto-belize', name: 'Cayo Espanto', dest: 'Belize', tier: 'Ultra · US$ 2.500+/noite', why: 'Ilhota privada em frente a Ambergris — a nova fronteira do overwater para casais que preferem o Caribe.' },
  { href: '/pt/hotels/huvafen-fushi-maldives', name: 'Huvafen Fushi', dest: 'Maldivas', tier: 'Média · US$ 1.800/noite', why: 'Maldivas adults-only com o primeiro spa submarino do mundo — a escolha para luxo sem crianças na ilha.' },
]

export default function OverwaterBungalowHoneymoonPagePT() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">Guia de planejamento</p>
      <h1 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-6 leading-tight">
        A lua de mel em bangalô sobre a água: o guia honesto 2026.
      </h1>
      <p className="text-zinc-500 text-lg leading-relaxed mb-2">
        Nascido no Hotel Bora Bora em 1967 — três hoteleiros californianos colocaram uma fileira de cabanas de palha
        sobre estacas em uma laguna e inventaram por acaso o quarto mais fotografado do luxo. Seis décadas depois, o
        bangalô sobre a água segue sendo o ícone, mas nem todos são iguais e a distância entre o folheto e uma vila de
        entrada real por US$ 700 a noite é maior do que parece. Aqui está o mapa honesto.
      </p>

      <AuthorByline />

      <div className="prose prose-zinc max-w-none prose-headings:font-display prose-headings:text-zinc-900 prose-p:text-zinc-600 prose-p:leading-relaxed prose-a:text-rose-500 prose-a:no-underline hover:prose-a:underline mt-10">

        <h2>Onde estão os bangalôs sobre a água de verdade</h2>
        <p>
          Apesar do marketing, só seis destinos no mundo têm um estoque significativo de vilas realmente construídas
          para isso. O resto é um único hotel se passando por região.
        </p>

        <h3><Link href="/pt/destinations/maldives">Maldivas</Link> — o arquétipo do atol</h3>
        <p>
          As Maldivas concentram cerca de 90% do estoque mundial. Cada resort ocupa o próprio atol — vantagem
          estrutural que nenhum outro destino oferece: você nunca enxerga outro hotel da sua vila. A água é a mais
          clara do mundo (25-30 m de visibilidade), a variedade de vilas é a maior, e o ultra (Soneva Jani, Cheval
          Blanc Randheli, Joali) joga sozinho.
        </p>

        <h3><Link href="/pt/destinations/bora-bora">Bora Bora</Link> — o berço</h3>
        <p>
          O formato nasceu aqui em 1967. A silhueta do monte Otemanu segue como o pano de fundo mais cinematográfico
          do gênero e, para casais norte-americanos, a rota (LAX-PPT direto, depois 50 minutos de voo doméstico até
          BOB) é bem mais simples que Maldivas. O estoque é menor — cinco resorts relevantes — mas a foto "montanha e
          laguna" é a que a maioria tem na cabeça.
        </p>

        <h3><Link href="/pt/destinations/french-polynesia">Polinésia Francesa</Link> — as irmãs mais calmas</h3>
        <p>
          Moorea e Taha&apos;a — as irmãs menos conhecidas de Bora Bora. Moorea fica a 30 minutos de balsa do Taiti e
          tem um resort overwater (Hilton). Taha&apos;a, entre Bora Bora e Raiatea, abriga Le Taha&apos;a by Pearl
          Resorts — vilas com vista direta para a silhueta de Bora Bora. Ambas saem ~30% mais baratas que Bora Bora.
        </p>

        <h3><Link href="/pt/destinations/fiji">Fiji</Link> — mais perto para australianos e americanos</h3>
        <p>
          O estoque de Fiji é pequeno (Likuliku Lagoon Resort é o único overwater real), mas a rota — 10 horas de LAX,
          4 de Sydney — faz dele a escolha esperta do Pacífico Sul quando Bora Bora fica longe ou caro demais.
        </p>

        <h3><Link href="/pt/destinations/mexico">México</Link> — a exceção Riviera Maya</h3>
        <p>
          Os Palafitos do El Dorado Maroma, na Riviera Maya, são os únicos bangalôs sobre a água da América do Norte —
          uma exceção arquitetônica real, comercializada como "El Dorado" para casais norte-americanos que não podem
          ou não querem voar long-haul. A laguna é calmada por um muro de recife; a experiência é metade overwater,
          metade resort, ideal para quem quer a foto sem as 22 horas de voo.
        </p>

        <h3><Link href="/pt/destinations/belize">Belize</Link> — a nova fronteira</h3>
        <p>
          A pequena cena overwater de Belize é a história da próxima década —{' '}
          <Link href="/pt/hotels/cayo-espanto-belize">Cayo Espanto</Link> fica num caye privado em frente a Ambergris
          com sete vilas (incluindo a "Casa Ventanas" sobre a água). Belize é o destino overwater anglófono mais
          próximo dos EUA e o mergulho é o melhor do Caribe.
        </p>

        <h3><Link href="/pt/destinations/indonesia">Indonésia</Link> — Misool e os overwater de Raja Ampat</h3>
        <p>
          O estoque indonésio se concentra em Raja Ampat — Misool Resort e algumas irmãs no recife mais biodiverso do
          planeta. É o extremo mais selvagem do gênero: vilas de madeira feitas à mão, às vezes sem ar-condicionado,
          e 36 horas de viagem da Europa ou das Américas. Para mergulhadores e casais em busca do realmente remoto,
          nada se compara.
        </p>

        <h2>As três faixas</h2>

        <h3>Entrada · US$ 700-1.000/noite</h3>
        <p>
          InterContinental Le Moana Bora Bora, Ayada Maldivas, Hilton Moorea. Quarto sobre a água real com deck e
          acesso direto à laguna — sem piscina privativa, às vezes orientação compartilhada do pôr do sol, às vezes
          uma vila um pouco mais velha. A laguna é a mesma. A vila faz a foto. Para um orçamento de US$ 10.000-14.000
          tudo incluído por uma semana, essa faixa entrega sem prometer demais.
        </p>

        <h3>Média · US$ 1.500-2.500/noite</h3>
        <p>
          <Link href="/pt/hotels/conrad-maldives-rangali-island">Conrad Maldives Rangali Island</Link>,{' '}
          <Link href="/pt/hotels/four-seasons-bora-bora">Four Seasons Bora Bora</Link>, Anantara Veli,{' '}
          <Link href="/pt/hotels/huvafen-fushi-maldives">Huvafen Fushi</Link>. Piscina privativa no deck, orientação
          para o pôr do sol garantida, painel de vidro, refeições servidas na vila. O ponto ótimo — a faixa em que o
          quarto vira a lua de mel inteira.
        </p>

        <h3>Ultra · US$ 4.000+/noite</h3>
        <p>
          <Link href="/pt/hotels/soneva-jani-maldives">Soneva Jani</Link>,{' '}
          <Link href="/pt/hotels/cheval-blanc-randheli-maldives">Cheval Blanc Randheli</Link>, Joali, Velaa. Vilas de
          dois andares, tetos retráteis, chef privativo sob demanda, mordomo que mora na ilha. A lua de mel como
          declaração — US$ 40.000-70.000 tudo incluído por sete noites.
        </p>

        <h2>O que ninguém conta</h2>
        <ul>
          <li><strong>Sol + mar envelhecem a vila.</strong> Palha, teca e pinho envernizado se desgastam rápido nos trópicos. Os resorts premium reformam vilas a cada 4-6 anos; os de entrada esperam 8-9. A foto do folheto e a vila onde você dorme podem ser versões diferentes.</li>
          <li><strong>Mosquitos no fim da tarde.</strong> A laguna não tem; o deck às 18h30 tem, sobretudo depois de chuva. Leve DEET ou prepare-se para entrar exatamente na hora em que queria sair.</li>
          <li><strong>Decepção do piso de vidro.</strong> Com sol é um aquário vivo; com nuvens é uma chapa escura. Verifique a orientação do painel (sobre areia vs. coral muda tudo).</li>
          <li><strong>Barulho do oceano à noite.</strong> O bater da água sob a vila às 2h é o som mais relaxante do mundo ou um destruidor de sono. Para quem dorme leve, vila de praia é a saída.</li>
          <li><strong>O índice de pedido de transfer é real.</strong> Gerentes de resorts maldivos relatam que ~70% das reservas overwater pedem mudança para vila de praia no meio da estadia — calor de meio-dia, salinidade contínua ou falta de jardim viram demais. Solução: nunca reserve uma semana inteira sobre a água. Quatro noites overwater, três na praia.</li>
        </ul>

        <h2>Os 8 que escolheríamos</h2>
        <p>
          Oito luas de mel overwater para guardar, tirados do catálogo. Cada uma responde a uma pergunta diferente:
          entrada controlada, média equilibrada, ultra statement, ou exceção caribenha.
        </p>

        <div className="not-prose grid gap-3 my-8">
          {hotelPicks.map(h => (
            <Link
              key={h.href}
              href={h.href}
              className="block border border-zinc-100 rounded-2xl p-5 hover:border-rose-200 hover:bg-rose-50/30 transition-colors"
            >
              <div className="flex items-baseline justify-between gap-3 mb-1">
                <span className="font-display text-lg text-zinc-900">{h.name}</span>
                <span className="text-xs uppercase tracking-wider text-rose-400 font-semibold shrink-0">{h.dest}</span>
              </div>
              <p className="text-[11px] uppercase tracking-wider text-zinc-400 font-semibold mb-2">{h.tier}</p>
              <p className="text-sm text-zinc-600 leading-relaxed">{h.why}</p>
            </Link>
          ))}
        </div>

        <h2>Quando ir</h2>
        <ul>
          <li><strong>Maldivas:</strong> dezembro a abril. Novembro é o pico-valor antes das tarifas de Natal. Maio-outubro é monção.</li>
          <li><strong>Bora Bora e Polinésia Francesa:</strong> maio a outubro (seca austral). Fevereiro é o mais chuvoso.</li>
          <li><strong>Fiji:</strong> maio a outubro, calendário igual.</li>
          <li><strong>México (Riviera Maya):</strong> novembro a maio. Junho-outubro é temporada de furacões — não reserve overwater nessa janela.</li>
          <li><strong>Belize:</strong> dezembro a abril para visibilidade de mergulho; tempestades de pico agosto-outubro.</li>
          <li><strong>Indonésia (Raja Ampat):</strong> outubro a abril para mares calmos e melhor visibilidade.</li>
        </ul>

        <h2>O veredicto honesto</h2>
        <p>
          A lua de mel sobre a água segue sendo ícone por motivo — mas a versão que entrega exige três escolhas
          deliberadas: o destino certo para a sua rota, a faixa certa para o seu orçamento (não reserve entrada para
          uma semana inteira, não reserve ultra para duas), e um roteiro fracionado que combine overwater com algumas
          noites na praia. Acerte os três e o formato merece a foto. Erre e o pedido de transfer no meio da estadia
          vira realidade.
        </p>

      </div>

      <section className="mt-16">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">FAQ</p>
        <h2 className="font-display text-3xl text-zinc-900 mb-8">Perguntas frequentes</h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <details key={i} className="group border border-zinc-100 rounded-2xl overflow-hidden">
              <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-medium text-zinc-900 text-sm hover:bg-zinc-50 transition-colors list-none">
                <span>{faq.question}</span>
                <svg className="w-4 h-4 text-zinc-400 shrink-0 ml-4 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
              </summary>
              <div className="px-6 pb-6 pt-2">
                <p className="text-zinc-500 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      <div className="mt-16 bg-rose-50/40 border border-rose-100 rounded-2xl p-7 text-center">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-3">Explorar o catálogo</p>
        <h3 className="font-display text-2xl text-zinc-900 mb-4">Todos os hotéis com bangalôs sobre a água, pontuados.</h3>
        <Link
          href="/pt/experiences/overwater-bungalows"
          className="inline-block bg-rose-500 hover:bg-rose-600 text-white font-semibold text-sm px-6 py-3 rounded-full transition-colors"
        >
          Ver todos os hotéis sobre a água →
        </Link>
      </div>

      <div className="mt-12 text-center">
        <Link href="/pt/destinations" className="text-rose-500 hover:underline text-sm font-semibold">
          ← Todos os destinos de lua de mel
        </Link>
      </div>
    </div>
  )
}
