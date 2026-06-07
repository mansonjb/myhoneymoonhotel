import type { Metadata } from 'next'
import Link from 'next/link'
import { buildAlternates } from '@/lib/alternates'
import AuthorByline from '@/components/AuthorByline'
import { AUTHOR } from '@/data/author'

export const metadata: Metadata = {
  title: 'Lua de mel all-inclusive: vale a pena ou não?',
  description:
    'O veredicto honesto sobre all-inclusive em lua de mel — onde entrega (Caribe, México, Maldivas), onde evitar (Europa, Bali, safari), três faixas e seis hotéis.',
  alternates: buildAlternates('/all-inclusive-honeymoon', 'pt'),
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  inLanguage: 'pt-BR',
  headline: 'Lua de mel all-inclusive: vale a pena ou não?',
  description:
    'Uma análise honesta e regional do all-inclusive em lua de mel — onde o formato realmente entrega luxo, onde é um retrocesso, três faixas e seis hotéis que reservaríamos.',
  author: { '@type': 'Person', name: AUTHOR.name, url: AUTHOR.url, jobTitle: AUTHOR.role },
  publisher: {
    '@type': 'Organization',
    name: 'My Honeymoon Hotel',
    logo: { '@type': 'ImageObject', url: 'https://myhoneymoonhotel.com/icon.png' },
  },
  datePublished: '2026-06-07',
  dateModified: '2026-06-07',
  mainEntityOfPage: 'https://myhoneymoonhotel.com/pt/all-inclusive-honeymoon',
}

const faqs = [
  {
    question: 'All-inclusive vale a pena em lua de mel?',
    answer:
      'Depende totalmente de onde. No Caribe e no México, um all-inclusive médio ou ultra (Excellence, Jade Mountain, Belmond Maroma) costuma ser o formato mais relaxante — refeições, bebidas, serviço de praia, sem ficar pagando conta. Na Europa, Bali ou Tailândia, all-inclusive quase sempre vira retrocesso, porque a cena gastronômica local é a experiência e o resort prende você na propriedade para maximizar margem.',
  },
  {
    question: 'Qual o melhor resort all-inclusive para lua de mel?',
    answer:
      'Ultra: Jade Mountain em Santa Lúcia e os Cheval Blanc nas Maldivas. Médio adults-only: Excellence Punta Cana, Sandals Royal Plantation Jamaica e Couples Swept Away em Negril. Para Caribe com orçamento contido: Curtain Bluff (Antígua) e Hermitage Bay entregam mais romance por dólar do que quase qualquer equivalente à la carte.',
  },
  {
    question: 'Adults-only é melhor?',
    answer:
      'Para lua de mel, quase sempre sim. Adults-only filtra a energia kids-club do mass-market, sobe a diária média e libera o resort para programar jantar e entretenimento em volta dos casais. Sandals (couples only), Excellence, Couples e a maioria do ultra caribenho funcionam assim. A exceção é o all-inclusive maldivo, onde cada vila já é privativa o bastante.',
  },
  {
    question: 'Inclui excursões?',
    answer:
      'Quase nunca na entrada e só às vezes no ultra. Sandals e Couples incluem esportes não motorizados (caiaque, snorkel) e atividades em grupo. Ultras como Jade Mountain incluem algumas experiências on-site mas cobram excursões externas. Sempre leia a ficha — "all-inclusive" cobre comida, bebida e gorjetas; excursões geralmente são extras.',
  },
  {
    question: 'Maldivas all-inclusive ou meia pensão?',
    answer:
      'Para uma lua de mel nas Maldivas, o all-inclusive quase sempre é a jogada certa. Os resorts ocupam ilhas privadas sem opção de jantar fora, os preços à la carte são brutais (US$ 40 o café, US$ 200 o jantar para dois) e o adicional do all-inclusive (US$ 200-400 por casal por dia) se paga no almoço do segundo dia. Meia pensão só faz sentido se você pretende pular o almoço todos os dias.',
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
    { '@type': 'ListItem', position: 2, name: 'Lua de mel all-inclusive', item: 'https://myhoneymoonhotel.com/pt/all-inclusive-honeymoon' },
  ],
}

const hotelPicks = [
  { href: '/pt/hotels/excellence-punta-cana-dominican-republic', name: 'Excellence Punta Cana', dest: 'República Dominicana', tier: 'Média · US$ 400–700/noite', why: 'Adults-only, suítes swim-up, quatro piscinas e cozinha séria o bastante para você não querer sair do resort.' },
  { href: '/pt/hotels/curtain-bluff-antigua', name: 'Curtain Bluff', dest: 'Antígua', tier: 'Média · US$ 900–1.400/noite', why: 'A grande dama do all-inclusive caribenho — duas praias privativas, programa de tênis sério e adega com Bordeaux antigos.' },
  { href: '/pt/hotels/hermitage-bay-antigua', name: 'Hermitage Bay', dest: 'Antígua', tier: 'Média · US$ 1.000–1.600/noite', why: 'Refúgio adults-only na praia mais selvagem de Antígua — escala boutique, pensão completa e o jantar mais romântico dos AI caribenhos.' },
  { href: '/pt/hotels/couples-swept-away-jamaica', name: 'Couples Swept Away', dest: 'Negril, Jamaica', tier: 'Entrada · US$ 350–550/noite', why: 'O couples-only original — Seven Mile Beach, sem crianças, o melhor custo-benefício do Caribe.' },
  { href: '/pt/hotels/sandals-royal-plantation-jamaica', name: 'Sandals Royal Plantation', dest: 'Ocho Ríos, Jamaica', tier: 'Média · US$ 700–1.000/noite', why: 'O Sandals menor, mais calmo e refinado — 74 suítes de frente para o mar, mordomo em todas, a marca sem a escala de convenção.' },
  { href: '/pt/hotels/cocobay-resort-antigua', name: 'Cocobay Resort', dest: 'Antígua', tier: 'Entrada · US$ 400–650/noite', why: 'AI antiguano adults-only em chalés com as melhores plunge pools abaixo de US$ 700 — valor real sem a escala resort.' },
]

export default function AllInclusiveHoneymoonPagePT() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">Guia de planejamento</p>
      <h1 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-6 leading-tight">
        Lua de mel all-inclusive: vale a pena ou não?
      </h1>
      <p className="text-zinc-500 text-lg leading-relaxed mb-2">
        A resposta honesta para "vale a pena all-inclusive em lua de mel?" não é sim ou não — é <em>onde</em>. O mesmo
        formato que entrega valor real em Santa Lúcia ou nas Maldivas vira retrocesso na Provença ou em Bali, e a
        maioria dos guias achata essa nuance em uma única recomendação ruim para um dos lados. Esta é a versão
        regional, por faixa, honesta.
      </p>

      <AuthorByline />

      <div className="prose prose-zinc max-w-none prose-headings:font-display prose-headings:text-zinc-900 prose-p:text-zinc-600 prose-p:leading-relaxed prose-a:text-rose-500 prose-a:no-underline hover:prose-a:underline mt-10">

        <h2>Onde o all-inclusive brilha</h2>
        <p>
          Quatro regiões onde, no saldo, o formato é a jogada esperta. O fio comum: isolamento. Quando sair do resort
          para um jantar decente é difícil, o all-inclusive elimina o atrito e a lua de mel acontece sem percalços.
        </p>

        <h3><Link href="/pt/destinations/st-lucia">Santa Lúcia</Link></h3>
        <p>
          Os resorts com vista para os Pitons (Jade Mountain, Ladera, Sugar Beach) ficam longe o bastante das cidades
          para que jantar fora vire 45 minutos de carro — e a cozinha do topo é genuinamente nível Michelin. A ilha
          mais fotogênica do Caribe e a resposta mais fácil para "adults-only all-inclusive sem cara de mass-market".
        </p>

        <h3><Link href="/pt/destinations/antigua">Antígua</Link> e <Link href="/pt/destinations/jamaica">Jamaica</Link></h3>
        <p>
          Antígua concentra a maior densidade de AI pequenos e críveis para casais do Caribe — Curtain Bluff,
          Hermitage Bay, Galley Bay, Cocobay. A Jamaica é o mercado original (Sandals e Couples nasceram aqui) e os
          adults-only entregam mais romance por dólar do que quase qualquer destino.
        </p>

        <h3><Link href="/pt/destinations/turks-and-caicos">Turks & Caicos</Link></h3>
        <p>
          A cena AI caribenha mais nova — Blue Haven, Beaches, Alexandra. Grace Bay está entre as praias mais bonitas
          do mundo e os AI funcionam como "economia de voo" frente a Santa Lúcia para casais norte-americanos.
        </p>

        <h3><Link href="/pt/destinations/mexico">México</Link> — Riviera Maya e Los Cabos</h3>
        <p>
          A Riviera Maya é o maior mercado AI do planeta e o polimento do topo (Belmond Maroma, Rosewood Mayakoba, os
          "El Dorado") é alto de verdade. Cabo é mais à la carte, mas Pueblo Bonito e outros operam bons AI
          adults-only.
        </p>

        <h3><Link href="/pt/destinations/maldives">Maldivas</Link> — o caso especial</h3>
        <p>
          Categoria à parte. Todo resort maldivo é uma ilha privada sem opção gastronômica fora — o all-inclusive é
          de fato o único formato sensato. Os preços à la carte são brutais e o adicional se paga no almoço do
          segundo dia. Reservar.
        </p>

        <h2>Onde evitar</h2>
        <p>
          O outro lado. Cinco regiões onde all-inclusive quase sempre é retrocesso — porque a comida, a cultura ou a
          experiência fora do resort <em>é</em> a lua de mel, e se trancar no buffet da propriedade significa abrir
          mão do país de propósito.
        </p>
        <ul>
          <li><strong>Europa (toda).</strong> Provença, Toscana, Santorini, Costa Amalfitana — o almoço sob plátanos, a trattoria do vilarejo, o ritmo barco-clube-de-praia são o ponto inteiro. Os poucos AI europeus operam em mass-market e não competem com o restaurante da vila ao lado.</li>
          <li><strong>Bali e Tailândia.</strong> Comida de rua e cena warung-templo é o que faz desses países uma lua de mel. Os AI existentes são decentes mas você paga pensão completa para pular o que é insubstituível.</li>
          <li><strong>Safari africano.</strong> AI safari é estruturalmente diferente — o game drive marca as refeições, o jantar no lodge é comunal e "all-inclusive" significa refeições mais dois game drives por dia, basicamente obrigatório. Outra categoria.</li>
          <li><strong>Japão.</strong> O ryokan é pensão completa (kaiseki no jantar e café tradicional) mas não é "all-inclusive" — e cada refeição fora do ryokan é experiência cultural inegociável. Reserve ryokan pelo formato e fuja do que vier rotulado all-inclusive.</li>
          <li><strong>Itália, França, Grécia, Espanha costeiras.</strong> Mesma lógica europeia — vilas e pequenos hotéis costeiros existem justamente para você caminhar até o restaurante do porto. AI tira a única coisa que faz mediterrânea uma lua de mel mediterrânea.</li>
        </ul>

        <h2>As três faixas honestas</h2>

        <h3>Entrada · US$ 250-500/noite AI</h3>
        <p>
          Sandals mass-market, Iberostar, RIU, Excellence Riviera Cancún, Couples Negril. Bebidas marca própria,
          quatro restaurantes em rodízio, às vezes kids-club (evitar se não for adults-only), buffet correto mas não
          é o motivo de ir. Opção valor; não é o teto romântico. Custo total 7 noites para dois com voos econômicos
          dos EUA: US$ 4.000-7.000.
        </p>

        <h3>Média · US$ 500-1.200/noite AI</h3>
        <p>
          O ponto ótimo. Excellence Punta Cana, Couples Swept Away,{' '}
          <Link href="/pt/hotels/sandals-royal-plantation-jamaica">Sandals Royal Plantation</Link>, Hermitage Bay,
          Galley Bay, Curtain Bluff. Adults-only (na maioria), bar premium, quatro a sete restaurantes críveis,
          mordomo ou concierge nas categorias altas, spa de verdade, esportes não motorizados inclusos. Custo total 7
          noites: US$ 8.000-15.000 tudo incluído.
        </p>

        <h3>Ultra · US$ 1.500+/noite AI</h3>
        <p>
          Os hotéis que por acaso são all-inclusive, e não os AI que por acaso são de luxo.{' '}
          <Link href="/pt/hotels/jade-mountain-st-lucia">Jade Mountain</Link>,{' '}
          <Link href="/pt/hotels/ladera-resort-st-lucia">Ladera</Link>, Sugar Beach (Viceroy), Cheval Blanc Randheli
          (em pacote AI). Santuários abertos, pensão completa com cozinha nível Michelin, plunge pools privativas,
          mordomo em todas, o resort é o destino. Custo total 7 noites: US$ 18.000-35.000+.
        </p>

        <h2>Os 6 que reservaríamos</h2>

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

        <h2>O que o "all-inclusive" realmente cobre</h2>
        <ul>
          <li><strong>Bebidas:</strong> sim — mas na entrada, só marcas da casa. Destilados premium e vinhos bons são extras.</li>
          <li><strong>Refeições:</strong> sim — mas os restaurantes de especialidade são por reserva e limitados a uma ou duas visitas por semana.</li>
          <li><strong>Spa:</strong> quase nunca. Uma massagem de boas-vindas é marketing; o resto é à la carte.</li>
          <li><strong>Atividades:</strong> esportes não motorizados sim; motorizados (jet ski, mergulho) quase nunca.</li>
          <li><strong>Wi-Fi:</strong> normalmente incluso, às vezes upsell em resorts antigos.</li>
          <li><strong>Gorjetas:</strong> às vezes inclusas (Sandals, Couples), às vezes esperadas por fora.</li>
          <li><strong>Excursões:</strong> quase nunca. Reserve US$ 200-500 por casal.</li>
        </ul>

        <h2>Realidade do custo</h2>
        <p>
          Uma lua de mel caribenha média de 7 noites AI para dois, voos econômicos do leste dos EUA: US$ 8.000-14.000
          tudo incluído. A mesma coisa em ultra (Jade Mountain, Ladera): US$ 20.000-32.000. Comparativo: uma Maldivas
          à la carte (Conrad Rangali, meia pensão) com voos sai por US$ 18.000-25.000; a mesma em AI: US$
          22.000-30.000 — o adicional se paga.
        </p>

        <h2>O veredicto honesto</h2>
        <p>
          Pare de perguntar "all-inclusive vale a pena?" e comece a perguntar "o destino funciona como circuito
          fechado?". No Caribe, México e Maldivas a resposta é quase sempre sim — e o AI médio adults-only é um dos
          formatos mais relaxantes do luxo. Na Europa, Ásia e safari, a resposta é quase sempre não, e você deve
          reservar à la carte. Acerte esse filtro e o resto fica simples.
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
        <h3 className="font-display text-2xl text-zinc-900 mb-4">Todos os hotéis all-inclusive de lua de mel, pontuados.</h3>
        <Link
          href="/pt/experiences/all-inclusive"
          className="inline-block bg-rose-500 hover:bg-rose-600 text-white font-semibold text-sm px-6 py-3 rounded-full transition-colors"
        >
          Ver todos os hotéis all-inclusive →
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
