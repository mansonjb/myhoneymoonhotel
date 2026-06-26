import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { buildAlternates } from '@/lib/alternates'
import AuthorByline from '@/components/AuthorByline'
import { AUTHOR } from '@/data/author'
import FAQAccordion from '@/components/longtail/FAQAccordion'
import Stay22InlineCTA from '@/components/longtail/Stay22InlineCTA'

export const metadata: Metadata = {
  title: 'Como escolher o destino da sua lua de mel (2026)',
  description:
    'O guia mais completo da internet para escolher o destino da sua lua de mel. Um framework de 7 perguntas, 8 arquétipos, casos reais e a visão honesta sobre destinos movidos pelo Instagram.',
  alternates: buildAlternates('/how-to-choose-honeymoon-destination', 'pt'),
  openGraph: {
    title: 'Como escolher o destino da sua lua de mel (2026)',
    description:
      'Um framework de 7 perguntas, 8 arquétipos de lua de mel, três casos reais e a visão honesta sobre destinos movidos pelo Instagram.',
    url: 'https://myhoneymoonhotel.com/pt/how-to-choose-honeymoon-destination',
    siteName: 'MyHoneymoonHotel',
    images: [
      {
        url: 'https://myhoneymoonhotel.com/images/hotels/four-seasons-bora-bora/hero.webp',
        width: 1600,
        height: 900,
        alt: 'Como escolher o destino da sua lua de mel, vila sobre a água ao pôr do sol',
      },
    ],
    locale: 'pt_BR',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Como escolher o destino da sua lua de mel (2026)',
    description: 'Um framework de 7 perguntas, 8 arquétipos, três casos reais. Escolha um destino que vocês realmente vão amar.',
    images: ['https://myhoneymoonhotel.com/images/hotels/four-seasons-bora-bora/hero.webp'],
  },
}

const FAQS = [
  {
    question: 'Com quanto tempo de antecedência devemos reservar a lua de mel?',
    answer:
      'Feche o destino entre 9 e 12 meses antes, o hotel entre 6 e 9 meses antes e as passagens aéreas na marca dos 90 dias. Vilas sobre a água nas Maldivas, os melhores camps de safári e os bangalôs de Bora Bora nas datas mais cobiçadas costumam esgotar com 9 meses de antecedência. Se vocês estão dentro do prazo de 4 meses e mirando um destino premium, esperem sobras de datas, sobras de quartos e um acréscimo de 20 a 40 por cento nos voos.',
  },
  {
    question: 'Maldivas ou Bora Bora para a nossa primeira lua de mel?',
    answer:
      'Maldivas se vocês querem transferes curtos, vários estilos de resort e o maior número de opções de vilas sobre a água do planeta (mais de 130 resorts). Bora Bora se vocês querem a foto mais icônica de todas, menos logística e voos mais curtos saindo da costa oeste dos EUA. Maldivas ganha em custo-benefício e variedade; Bora Bora ganha em reconhecimento imediato. Ambas são escolhas honestas para uma primeira lua de mel.',
  },
  {
    question: 'Tudo bem fazer uma lua de mel all-inclusive?',
    answer:
      'Sim. Um all-inclusive adults-only na propriedade certa (Excellence Playa Mujeres, Sandals Royal Curacao, Couples Tower Isle) frequentemente bate um resort 5 estrelas à la carte na relação custo-romance. A armadilha é o all-inclusive de orçamento, em que os bufês ficam repetitivos depois da quinta noite. Escolha adults-only, vários restaurantes à la carte no próprio hotel e bebidas premium inclusas. Veja nossa visão completa em /pt/all-inclusive-honeymoon.',
  },
  {
    question: 'Vale a pena usar um agente de viagens?',
    answer:
      'Para viagens acima de $20.000, ou qualquer coisa envolvendo Maldivas, Bora Bora, safáris com várias pernas ou Polinésia Francesa, sim. Um agente Virtuoso ou Four Seasons Preferred Partner garante café da manhã grátis, $100 de crédito no hotel, upgrade de quarto e check-in antecipado sem custo nenhum para vocês (quem paga é o hotel). Para viagens diretas pela Europa ou Caribe abaixo de $10.000, reservar direto ou via Hotels.com está ótimo.',
  },
  {
    question: 'Como nos entendermos se queremos coisas completamente diferentes?',
    answer:
      'Montem um roteiro de duas paradas. Os compromissos clássicos: pessoa de praia mais pessoa de cidade vira 4 noites em Tóquio mais 7 noites nas Maldivas, ou 3 noites na Cidade do Cabo mais 6 noites de safári mais 4 noites em Zanzibar. Pessoa de aventura mais pessoa de relaxamento vira 5 noites na Patagônia mais 5 noites no Atacama. Tentar achar um único destino que satisfaça preferências opostas geralmente entrega um destino que não satisfaz nenhum dos dois.',
  },
  {
    question: 'Quanto, em média, casais dos EUA e do Reino Unido gastam em lua de mel em 2026?',
    answer:
      'A mediana americana em 2026 fica em torno de $6.500 para uma viagem de 7 a 10 noites, com o quartil superior em $14.000 e o top 10 por cento acima de $25.000. Os casais britânicos gastam um pouco menos em média (cerca de £5.000), mas tendem para Europa e Ásia em vez dos trópicos de longa distância. As duas medianas subiram aproximadamente 35 por cento desde 2019, puxadas pelo aumento de passagens aéreas e tarifas de luxo.',
  },
  {
    question: 'Melhor destino seguro para casais indecisos?',
    answer:
      'Santa Lúcia, Itália (Costa Amalfitana mais Toscana) e Maurício. Os três entregam cenário de cartão-postal, logística fácil, várias categorias de hotel, atividades variadas e quase nenhum risco de arrependimento. São o equivalente em lua de mel a pedir o segundo prato mais popular do cardápio: nunca a escolha mais empolgante, sempre uma escolha sólida.',
  },
  {
    question: 'Como conciliar o orçamento que temos com o destino que sonhamos?',
    answer:
      'Três opções honestas. Primeira, baixar a categoria do hotel no destino dos sonhos (uma garden-villa no Soneva Jani bate uma water-villa em um 3 estrelas). Segunda, mudar para uma "segunda melhor janela" em que o mesmo destino custa de 30 a 50 por cento menos (Maldivas no fim de abril, Caribe no começo de junho). Terceira, trocar o destino pelo seu análogo mais próximo em outra faixa de preço (Cabo Verde pelo clima de Maldivas a um terço do custo, Albânia pelo cenário das ilhas gregas, Sicília no lugar da Costa Amalfitana). Quase nunca compensa: meia-tarde no destino dos sonhos durante uma conexão.',
  },
]

const HOWTO_STEPS = [
  {
    name: 'Defina o teto honesto do orçamento',
    text: 'Combinem o orçamento total incluindo voos, hotéis, comida, transferes, atividades, gorjetas e 10 por cento de contingência. Três faixas: Confortável ($8 mil a $12 mil), Premium ($15 mil a $25 mil), Ultra ($30 mil ou mais). Encaixem o destino no teto, e não o contrário.',
  },
  {
    name: 'Decidam quantas noites conseguem se comprometer',
    text: 'Abaixo de 7 noites: fiquem regionais (Itália para europeus, México para americanos, Bali para australianos). 7 a 10 noites: um resort de longa distância, uma única parada. 10 a 14 noites: longa distância com duas paradas. 14 noites ou mais: no máximo três paradas.',
  },
  {
    name: 'Definam sua tolerância a tempo de voo',
    text: 'Abaixo de 6 horas: curta distância (Mediterrâneo, Caribe a partir da costa leste dos EUA, Bali a partir da Austrália). 6 a 12 horas: Maldivas da Europa, Caribe da costa oeste dos EUA, Tóquio da costa oeste dos EUA. Acima de 12 horas: Bora Bora, Maldivas dos EUA, Polinésia Francesa, Seicheles. Tolerância a longas distâncias é o maior filtro que a maioria dos casais pula.',
  },
  {
    name: 'Escolham a estação com honestidade',
    text: 'Encaixe o destino na sua janela de viagem, não o contrário. Maldivas de novembro a abril. Polinésia Francesa de maio a outubro. Caribe de janeiro a maio (temporada de furacões de junho a novembro). Europa de maio a junho e setembro. Use nosso planner mês a mês em /pt/best-time-to-honeymoon.',
  },
  {
    name: 'Escolham a energia da lua de mel',
    text: 'Cinco arquétipos honestos: praia-e-spa (tempo horizontal, sol, água), ativo (caminhadas, mergulho, explorar), cultural (museus, história, comida), espiritual (bem-estar, retiros, ryokans), aventura (safári, geleiras, lugares remotos). A maioria dos casais combina dois; quase nenhum consegue combinar mais de dois numa mesma viagem.',
  },
  {
    name: 'Avaliem o piso de comida e conforto',
    text: 'Quão aventureiro é o paladar de vocês? Quanto de "rústico" toleram em uma propriedade de $1.000 a diária? Um tented camp em Botsuana é uma experiência de luxo, mas vocês dormem sob lona. Um ryokan em Hakone é luxo, mas vocês dormem em um futon. Garantam que os dois sejam honestos antes de reservar.',
  },
  {
    name: 'Avaliem o nível de experiência como viajantes',
    text: 'Viajantes de longa distância de primeira viagem deveriam escolher destinos com resorts que falam inglês, simplicidade de moeda única e logística previsível (Maldivas, Maurício, Santa Lúcia, Bali). Veteranos dão conta de roteiros multi-parada com self-drive, barreiras de língua e transferes complexos (Patagônia, Butão, Madagascar).',
  },
]

const ARCHETYPES = [
  {
    title: 'Paraíso ilhéu sobre a água',
    vibe: 'A imagem canônica da lua de mel: vilas com piso de vidro, lagoa turquesa, tempo 100 por cento horizontal.',
    whoFor: 'Casais de primeira longa distância que querem A foto, 7 a 10 noites sem decisões e a sensação mais romântica possível de "conseguimos".',
    whoSkip: 'Casais ativos que ficam inquietos depois de 48 horas de sol. Casais com orçamento abaixo de $10 mil (water villas começam, no mínimo, em $1.500 por noite).',
    destinations: ['Maldivas', 'Bora Bora', 'Fiji'],
    flagshipHotel: 'Soneva Jani (Maldivas) para a primeira vez, Four Seasons Bora Bora para a experiência icônica de Polinésia Francesa',
    cost: '$15.000 a $35.000 por 7 a 10 noites',
    pillarLink: '/pt/overwater-bungalow-honeymoon',
  },
  {
    title: 'Clássico de praia caribenha',
    vibe: 'Areia branca, coqueiros, rum no pôr do sol, tudo incluído sem fricção, voos curtos a partir da América do Norte.',
    whoFor: 'Casais da costa leste dos EUA que querem voo de 5 horas, praia a menos de 50 metros do quarto e preço fechado para a semana inteira.',
    whoSkip: 'Casais sensíveis ao risco de furacão (junho a novembro é loteria). Quem acha bufê pouco romântico.',
    destinations: ['Santa Lúcia', 'Antígua', 'Turks and Caicos', 'Barbados'],
    flagshipHotel: 'Jade Mountain em Santa Lúcia pelo drama arquitetônico, Jumby Bay pela privacidade em Antígua',
    cost: '$8.000 a $18.000 por 7 noites',
    pillarLink: '/pt/all-inclusive-honeymoon',
  },
  {
    title: 'Costa e vilarejo no Mediterrâneo',
    vibe: 'Hotéis na falésia, limoeiros, Aperol no golden hour, vilarejos caminháveis, cultura da mesa como preliminar.',
    whoFor: 'Casais europeus, casais americanos foodies em arco de 10 dias pela Itália ou Grécia, qualquer um que ache "praia-e-sentar" tedioso depois de 3 dias.',
    whoSkip: 'Viajantes de julho e agosto (calor, multidões, navios de cruzeiro). Casais que precisam de piscina privativa todo dia.',
    destinations: ['Costa Amalfitana', 'Santorini', 'Maiorca', 'Sicília', 'Mykonos'],
    flagshipHotel: 'Hotel Caruso em Ravello, Grace Hotel Santorini',
    cost: '$10.000 a $22.000 por 10 noites',
    pillarLink: '/pt/destinations/amalfi',
  },
  {
    title: 'Campo europeu',
    vibe: 'Vinhedos, slow food, drives entre châteaux, roseirais, sem agenda além do próximo almoço.',
    whoFor: 'Casais que consideram a refeição a atividade. Quem quer uma semana de self-drive, sem aeroporto no meio, totalmente analógica.',
    whoSkip: 'Amantes de praia, quem precisa de piscina toda tarde, viajantes de primeira viagem que querem ser conduzidos pela mão.',
    destinations: ['Toscana', 'Provença', 'Vale do Loire', 'The Cotswolds'],
    flagshipHotel: 'Castello di Casole na Toscana, La Bastide de Gordes na Provença',
    cost: '$9.000 a $20.000 por 10 noites',
    pillarLink: '/pt/honeymoon-in-france',
  },
  {
    title: 'Safári africano',
    vibe: 'Game drives ao amanhecer, sundowners a 50 metros dos elefantes, desconexão total, a lua de mel mais "isso mudou a gente" do mercado.',
    whoFor: 'Casais cujo primeiro instinto é aventura, não relaxamento. Quem aguenta acordar às 5h30 por uma família de elefantes. Combinem com 3 a 5 noites em Zanzibar ou na Cidade do Cabo.',
    whoSkip: 'Casais que consideram Wi-Fi necessidade básica. Quem acha que inseto é dealbreaker.',
    destinations: ['Quênia', 'Tanzânia', 'Botsuana', 'África do Sul', 'Namíbia'],
    flagshipHotel: 'Singita Sasakwa (Tanzânia), Mombo Camp (Botsuana)',
    cost: '$18.000 a $45.000 por 10 noites',
    pillarLink: '/pt/destinations/tanzania',
  },
  {
    title: 'Espiritual e boutique asiático',
    vibe: 'Rituais lentos, jantares kaiseki, piscinas na selva, templos ao amanhecer, um destino que reorganiza você em silêncio.',
    whoFor: 'Casais que querem profundidade e não só fotos. Viajantes repetidos que já fizeram os destinos óbvios. Quem está em um momento de transição (segundo casamento, reset de prioridades pós-pandemia).',
    whoSkip: 'Casais que querem viagem só de praia. Casais de primeira longa distância que acham imersão cultural estressante.',
    destinations: ['Bali (Ubud)', 'Butão', 'Kerala', 'Sri Lanka', 'Japão'],
    flagshipHotel: 'Circuito Amankora no Butão, Aman Kyoto, Como Shambhala Bali',
    cost: '$12.000 a $35.000 por 10 a 14 noites',
    pillarLink: '/pt/destinations/bali',
  },
  {
    title: 'Aventura latino-americana',
    vibe: 'Geleiras, condores, salares, vinhedos, as Galápagos, arcos de duas paradas que parecem três viagens.',
    whoFor: 'Viajantes veteranos, casais que já fizeram Maldivas, quem acha lua de mel passiva deprimente.',
    whoSkip: 'Casais de primeira longa distância, casais que querem zero logística, quem tem sensibilidade à altitude.',
    destinations: ['Peru (Vale Sagrado mais Machu Picchu)', 'Patagônia', 'Atacama', 'Galápagos', 'Colômbia (Cartagena mais região cafeeira)'],
    flagshipHotel: 'Explora Patagonia, Tierra Atacama, Inkaterra Machu Picchu',
    cost: '$14.000 a $30.000 por 12 noites',
    pillarLink: '/pt/destinations/peru',
  },
  {
    title: 'Aurora boreal em clima frio',
    vibe: 'Aurora à 1 da manhã, iglus com teto de vidro, fjordes, fontes termais depois de caminhadas em temperaturas negativas, romance de luvas.',
    whoFor: 'Casais que odeiam calor tropical, quem casa no verão e quer a estação oposta na lua de mel, viajantes repetidos buscando o oposto dramático.',
    whoSkip: 'Quem precisa de natação como parte de "lua de mel". Casais que já sofrem com o frio.',
    destinations: ['Islândia', 'Lapônia finlandesa', 'Noruega (Lofoten ou Tromsø)', 'Ártico sueco'],
    flagshipHotel: 'Deplar Farm (Islândia), Kakslauttanen Arctic Resort (Finlândia)',
    cost: '$10.000 a $25.000 por 7 a 10 noites',
    pillarLink: '/pt/destinations/iceland',
  },
]

const PERSONAS = [
  {
    label: 'Os foodies',
    link: '/honeymoon-for-foodies',
    text: 'Escolham um destino em que a refeição é a atividade, não uma interrupção. Japão (Tóquio mais Quioto mais um ryokan kaiseki), norte da Itália (Bolonha, Modena, Langhe), Lyon mais Borgonha, San Sebastián mais Rioja, ou Cidade do México mais Oaxaca. Evitem os all-inclusives: eles limitam o teto gastronômico ao bufê, e uma lua de mel foodie precisa de reservas, não de pulseirinhas.',
  },
  {
    label: 'Os introvertidos',
    link: '/honeymoon-for-introverts',
    text: 'Escolham destinos em que a propriedade é o destino. Ilhas privadas nas Maldivas ou Seicheles, ryokans isolados em Hakone ou Kanazawa, um circuito do Butão em que vocês quase não veem outros hóspedes, ou uma estância na Patagônia em que a equipe supera os visitantes. Evitem Santorini no verão, Bali Seminyak e qualquer all-inclusive com mais de 200 chaves.',
  },
  {
    label: 'Os caçadores de aventura',
    link: '/honeymoon-for-adventure-seekers',
    text: 'Escolham um destino com cardápio de atividades denso e variado. Costa Rica (selva mais vulcão mais praia), Nova Zelândia (self-drive pela ilha sul), Patagônia (geleiras mais trilhas mais W-trek-light), Islândia (cachoeiras mais aurora mais geleira), ou um safári no leste da África mais Zanzibar. O equivalente em lua de mel a descansar é continuar em movimento.',
  },
  {
    label: 'Os casais 40+',
    link: '/honeymoon-for-over-40',
    text: 'Vocês já fizeram os destinos óbvios. Pulem as Maldivas iniciantes, a multidão do pôr do sol em Santorini, a cena de Tulum. Aprofundem: propriedades Aman no Japão, Singita no Serengeti, um triplo Aman Tokyo mais Hoshinoya Kyoto mais Park Hyatt Niseko, um arco Cidade do Cabo mais winelands mais safári. Menos Instagram, mais "isso mudou como pensamos em viajar juntos".',
  },
]

const DECISION_TREE = [
  'Orçamento abaixo de $10 mil? Cabo Verde, Bali (Ubud mais Uluwatu), all-inclusive na Riviera Maya, ilhas gregas secundárias (Milos, Folegandros, Naxos), Sicília.',
  'Orçamento de $10 mil a $20 mil? Garden villa nas Maldivas, Santa Lúcia (Jade Mountain), Toscana mais Costa Amalfitana, Bali mais Komodo, Costa Rica selva mais praia.',
  'Orçamento de $20 mil a $35 mil? Water villa nas Maldivas, Polinésia Francesa (Bora Bora mais Taiti ou Moorea), safári no leste da África mais Zanzibar, circuito de ryokans no Japão.',
  'Orçamento de $35 mil ou mais? Singita Sasakwa mais Cidade do Cabo, Aman Tokyo mais Aman Kyoto mais Park Hyatt Niseko, buyout de ilha privada em Fiji, water villa com escorregador no Soneva Jani.',
  'Detestam voos de longa distância? Mediterrâneo (Costa Amalfitana, Santorini, Maiorca), Caribe a partir da costa leste (Santa Lúcia, Antígua, Turks and Caicos), México (Riviera Maya, Tulum), Islândia.',
  'Primeira viagem de longa distância? Maldivas (resort único), Maurício, Santa Lúcia, Bali Ubud mais Uluwatu. Pulem roteiros multi-país.',
  'Viajantes experientes? Patagônia mais Atacama, Butão mais Índia, leste da África mais Zanzibar, Japão mais Coreia.',
  'Casamento no inverno? Maldivas (alta temporada), Caribe, Bali, Tailândia, Maurício.',
  'Casamento no verão? Polinésia Francesa, Mediterrâneo, safári no leste da África, Islândia, Patagônia (o inverno deles é o seu verão).',
]

export default function HowToChooseHoneymoonDestinationPagePt() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    inLanguage: 'pt-BR',
    headline: 'Como escolher o destino da sua lua de mel: o guia honesto de 2026',
    description:
      'O guia mais completo da internet para escolher o destino da sua lua de mel. Um framework de 7 perguntas, 8 arquétipos e três casos reais.',
    image: 'https://myhoneymoonhotel.com/images/hotels/four-seasons-bora-bora/hero.webp',
    author: {
      '@type': 'Person',
      name: AUTHOR.name,
      url: AUTHOR.url,
      jobTitle: AUTHOR.role,
    },
    publisher: {
      '@type': 'Organization',
      name: 'My Honeymoon Hotel',
      logo: { '@type': 'ImageObject', url: 'https://myhoneymoonhotel.com/icon.png' },
    },
    datePublished: '2026-06-25',
    dateModified: '2026-06-25',
    mainEntityOfPage: 'https://myhoneymoonhotel.com/pt/how-to-choose-honeymoon-destination',
  }

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Como escolher o destino da sua lua de mel (o framework de 7 perguntas)',
    description:
      'Um framework de decisão em 7 perguntas que mapeia orçamento, tempo, energia e experiência de viagem aos destinos que de fato combinam com vocês.',
    step: HOWTO_STEPS.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: 'pt-BR',
    mainEntity: FAQS.map(f => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://myhoneymoonhotel.com/pt/' },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Como escolher o destino da sua lua de mel',
        item: 'https://myhoneymoonhotel.com/pt/how-to-choose-honeymoon-destination',
      },
    ],
  }

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* HERO */}
      <section className="relative h-[480px] md:h-[600px] rounded-3xl overflow-hidden my-6 mx-auto max-w-6xl">
        <Image
          src="/images/hotels/four-seasons-bora-bora/hero.webp"
          alt="Como escolher o destino da sua lua de mel, vila sobre a água ao pôr do sol"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={75}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/60 via-zinc-900/30 to-zinc-900/70" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div className="max-w-3xl">
            <p className="text-rose-400 uppercase tracking-[0.3em] text-xs font-semibold mb-5">Guia de planejamento</p>
            <h1 className="font-display text-5xl md:text-7xl text-white leading-[1.05] mb-6">
              Como escolher o destino da sua lua de mel.
            </h1>
            <p className="text-white/90 text-lg md:text-xl leading-relaxed">
              O guia honesto de 2026. Um framework de 7 perguntas, oito arquétipos de lua de mel, três casos reais e
              as opiniões que o Instagram não vai dar. Escolham um destino que vocês realmente vão amar, não aquele
              que o feed insiste em mostrar.
            </p>
          </div>
        </div>
      </section>

      {/* BREADCRUMB */}
      <nav aria-label="Breadcrumb" className="max-w-4xl mx-auto px-6 pt-8 text-xs text-zinc-500">
        <Link href="/pt/" className="hover:text-zinc-900">Início</Link>
        <span className="mx-2">/</span>
        <span className="text-zinc-900">Como escolher o destino da sua lua de mel</span>
      </nav>

      <div className="max-w-4xl mx-auto px-6">
        <AuthorByline reviewedDate="2026-06-25" />
      </div>

      {/* TL;DR */}
      <div className="max-w-3xl mx-auto px-6">
        <aside id="tldr" className="my-12 bg-rose-50/60 border-l-4 border-rose-500 rounded-r-2xl p-7 md:p-8">
          <p className="text-xs font-semibold tracking-widest uppercase text-rose-500 mb-3">TL;DR</p>
          <p className="text-zinc-700 text-lg leading-relaxed">
            A maioria dos casais escolhe o destino da lua de mel pelo Instagram e depois entra em pânico quando a
            realidade, o orçamento ou o clima se recusam a cooperar. O caminho inverso funciona melhor: respondam
            a sete perguntas honestas (orçamento, noites, tolerância a voo, estação, energia, piso de conforto,
            experiência como viajante) e encaixem suas respostas em um dos oito arquétipos de lua de mel. Se vocês
            discordam, montem um roteiro de duas paradas. Se ainda travarem, façam nosso quiz em <Link href="/pt/quiz" className="underline underline-offset-4 decoration-rose-300 hover:decoration-rose-500">/pt/quiz</Link>.
          </p>
        </aside>
      </div>

      <article className="max-w-3xl mx-auto px-6 pb-20">
        <div className="prose prose-zinc max-w-none prose-headings:font-display prose-h2:text-4xl prose-h2:sm:text-5xl prose-h2:leading-tight prose-h2:mt-16 prose-h2:mb-6 prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-3 prose-p:leading-relaxed prose-li:leading-relaxed">

          <p className="lead text-lg text-zinc-700 mt-8">
            Esta página é aquela que a gente queria que alguém tivesse entregue para nós quando começamos. Não é uma
            listinha de "dez destinos dos sonhos" tirada do feed de outra pessoa. É um framework de decisão, testado
            ao longo de doze anos planejando luas de mel para nós e para os nossos leitores, contra o único critério
            que importa: o casal voltou para casa feliz com o destino que escolheu, ou voltou murmurando "da próxima
            vez a gente devia ter ido para Maurício". Quase todo esse murmúrio é evitável. Sigam em frente.
          </p>

          <p className="text-zinc-700">
            Se vocês também precisam do cronograma (quando reservar o quê), do detalhamento de orçamento por faixa,
            da lista de mala e da questão do seguro, tudo isso está em <Link href="/pt/how-to-plan-a-honeymoon">como
            planejar uma lua de mel</Link>. Se já escolheram a estação e querem saber o que está aberto e bom naquele
            mês, vejam <Link href="/pt/best-time-to-honeymoon">a melhor época para a lua de mel</Link>. Esta página é
            estritamente sobre responder a uma pergunta: qual destino vocês realmente vão amar?
          </p>

          {/* 2 */}
          <div className="my-16 flex items-center gap-4">
            <div className="h-px flex-1 bg-rose-200" />
            <span className="text-rose-400 text-xs font-semibold uppercase tracking-[0.25em]">Realidade</span>
            <div className="h-px flex-1 bg-rose-200" />
          </div>
          <h2>O erro mais comum dos casais</h2>
          <blockquote className="not-prose my-12 pl-6 border-l-4 border-rose-500 text-2xl md:text-3xl font-display italic text-zinc-700 leading-snug">
            O destino é decidido com emoção; a viagem é então engenheirada para trás para justificar a decisão.
          </blockquote>
          <p className="text-rose-400 text-sm mt-2">Pierre Lambert, editor</p>
          <p>
            O erro mais comum de uma lua de mel não é viajar no mesmo dia do casamento (esse é o erro número dois). É
            escolher o destino pelo Instagram e tentar fazer o seu orçamento, a estação do seu casamento, sua tolerância
            a voo e as preferências reais do seu parceiro caberem em volta de uma foto. O destino é decidido com
            emoção; a viagem é então engenheirada para trás para justificar a decisão. O resultado, na nossa caixa de
            entrada pelo menos uma vez por semana: um casal que pagou $22.000 para descobrir que Santorini entre 15
            de julho e 20 de agosto é estacionamento de navio de cruzeiro, que Maldivas em maio é tempestade diária,
            que Bali em janeiro é monção e que a foto icônica que perseguiram existe por uns noventa minutos por dia,
            cercada de tripés.
          </p>
          <p>
            A solução não é parar de sonhar. A solução é sonhar em segundo lugar, depois de responder a sete perguntas
            honestas sobre quem vocês de fato são como casal. Aí a shortlist de destinos se escreve sozinha. Quase
            sempre há três a cinco destinos que se encaixam, não o único que o Instagram insistia. Um deles ainda será
            um destino "dos sonhos". Só que será aquele que sobrevive ao contato com a realidade.
          </p>
          <p>
            As cinco consequências mais comuns de uma escolha de destino guiada pelo Instagram, em ordem de frequência
            na nossa caixa de entrada: chegar em plena monção e ver dois dias de sol em dez; gastar metade do orçamento
            em voos que não cabiam no bolso porque ninguém precificou antes do depósito; aterrissar em um destino onde
            uma pessoa do casal está infeliz porque suas preferências nunca foram nomeadas; bater na estação errada
            porque as fotos foram feitas em março e vocês foram em agosto; e, o mais quietamente doloroso, escolher um
            destino tão famoso que ele não consegue entregar a privacidade e o silêncio que as fotos prometiam. Os
            cinco são evitáveis. Nenhum é evitável tentando mais forte no Instagram.
          </p>

          {/* 3 */}
          <div className="my-16 flex items-center gap-4">
            <div className="h-px flex-1 bg-rose-200" />
            <span className="text-rose-400 text-xs font-semibold uppercase tracking-[0.25em]">O método</span>
            <div className="h-px flex-1 bg-rose-200" />
          </div>
          <h2 id="framework">O framework de decisão em 7 perguntas</h2>
          <p>
            Percorram estas sete perguntas com o seu parceiro, idealmente em uma noite tranquila, idealmente com uma
            taça na mão, idealmente antes de olhar qualquer foto. Cada pergunta filtra a lista longa. No fim, vocês
            terão uma shortlist de três a cinco destinos que realmente combinam. Aí olhem as fotos.
          </p>

          <div className="my-10 bg-white border border-rose-100 rounded-2xl p-6 md:p-8 shadow-sm">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-rose-500 text-white flex items-center justify-center font-display text-xl font-bold">1</div>
              <div className="flex-1">
                <h3 className="font-display text-2xl md:text-3xl text-zinc-900 m-0">Q1. Qual é o orçamento honesto de vocês?</h3>
              </div>
            </div>
            <p>
              Não o orçamento que vocês gostariam de ter, o orçamento que existe. Definam um teto que inclua voos,
              hotéis, comida, transferes, atividades, gorjetas e 10 por cento de contingência. Três faixas cobrem
              honestamente quase todo mundo:
            </p>
            <ul>
              <li><strong>Confortável, $8.000 a $12.000:</strong> Bali (Ubud mais uma área de praia), Grécia (continente mais uma ilha secundária), México (all-inclusive na Riviera Maya mais Tulum), Cabo Verde, Sicília, Maiorca. Para o piso dessa faixa, vejam nosso guia completo em <Link href="/honeymoon-on-a-budget">lua de mel econômica</Link>.</li>
              <li><strong>Premium, $15.000 a $25.000:</strong> Water villa nas Maldivas (resort único), safári no leste da África (um camp mais Zanzibar), Polinésia Francesa (Bora Bora mais Taiti), circuito de ryokans no Japão, Itália (Costa Amalfitana mais Toscana).</li>
              <li><strong>Ultra, $30.000 ou mais:</strong> Ilha privada nas Maldivas ou em Fiji, circuito Aman (Tóquio mais Quioto mais Niseko), Singita no Serengeti, multi-parada Polinésia Francesa mais Nova Zelândia, rota de helicóptero pelo Butão.</li>
            </ul>
            <p>
              Para detalhamentos de custo por destino, mantemos páginas com números reais: <Link href="/honeymoon-under-5000">abaixo de $5 mil</Link>, <Link href="/honeymoon-under-10000">abaixo de $10 mil</Link>, <Link href="/honeymoon-under-15000">abaixo de $15 mil</Link>, <Link href="/honeymoon-under-20000">abaixo de $20 mil</Link>, além das páginas por destino para <Link href="/pt/maldives-honeymoon-cost">Maldivas</Link>, <Link href="/pt/bali-honeymoon-cost">Bali</Link>, <Link href="/pt/mexico-honeymoon-cost">México</Link>, <Link href="/pt/turks-and-caicos-honeymoon-cost">Turks and Caicos</Link>, <Link href="/pt/bahamas-honeymoon-cost">Bahamas</Link>, <Link href="/pt/barbados-honeymoon-cost">Barbados</Link> e <Link href="/pt/cape-verde-honeymoon-cost">Cabo Verde</Link>.
            </p>

          </div>

          <div className="my-10 bg-white border border-rose-100 rounded-2xl p-6 md:p-8 shadow-sm">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-rose-500 text-white flex items-center justify-center font-display text-xl font-bold">2</div>
              <div className="flex-1">
                <h3 className="font-display text-2xl md:text-3xl text-zinc-900 m-0">Q2. Quantas noites vocês conseguem se comprometer?</h3>
              </div>
            </div>
            <p>
              Tempo importa mais que dinheiro em uma lua de mel. Uma viagem de 5 noites para as Maldivas é um insulto
              logístico ao destino: 36 horas de trânsito consomem 30 por cento da viagem. As faixas honestas:
            </p>
            <ul>
              <li><strong>Abaixo de 7 noites:</strong> fiquem regionais. Itália ou Grécia para europeus, México ou Caribe para americanos, Bali ou Tailândia para australianos, Maurício para sul-africanos. Longa distância em menos de 7 noites é um imposto que vocês cobram de vocês mesmos.</li>
              <li><strong>7 a 10 noites:</strong> um resort de longa distância, uma única parada. Esta é a lua de mel canônica de Maldivas, Bora Bora, Fiji, Seicheles.</li>
              <li><strong>10 a 14 noites:</strong> longa distância em duas paradas. Safári mais praia (Tanzânia mais Zanzibar), cidade mais resort (Tóquio mais Maldivas), aventura mais relaxamento (Patagônia mais Atacama).</li>
              <li><strong>14 noites ou mais:</strong> no máximo três paradas. Mais que três e vocês passam a lua de mel em aeroportos. Exceção é o mergulho profundo em um único país, como um circuito do Butão ou um cross-country pela África do Sul.</li>
            </ul>
            <p>
              Para roteiros por duração, vejam nossos planners de <Link href="/3-day-honeymoon">3 dias</Link>, <Link href="/5-day-honeymoon">5 dias</Link>, <Link href="/7-day-honeymoon">7 dias</Link>, <Link href="/10-day-honeymoon">10 dias</Link> e <Link href="/14-day-honeymoon">14 dias</Link>.
            </p>

          </div>

          <div className="my-10 bg-white border border-rose-100 rounded-2xl p-6 md:p-8 shadow-sm">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-rose-500 text-white flex items-center justify-center font-display text-xl font-bold">3</div>
              <div className="flex-1">
                <h3 className="font-display text-2xl md:text-3xl text-zinc-900 m-0">Q3. Quanto tempo de viagem vocês toleram?</h3>
              </div>
            </div>
            <p>
              Um dos filtros mais subestimados. Um casal que acha um voo de 5 horas desconfortável não deveria reservar
              Maldivas saindo de Nova York (16 horas mais um transfer de hidroavião). As faixas honestas:
            </p>
            <ul>
              <li><strong>Abaixo de 6 horas:</strong> a partir da costa leste dos EUA, Caribe e México. A partir da Europa, Mediterrâneo e norte da África. A partir da Austrália, Bali, Fiji, Nova Zelândia.</li>
              <li><strong>6 a 12 horas:</strong> a partir da costa leste dos EUA, Europa e norte da América do Sul. A partir da Europa, Maldivas, Seicheles, leste da África. A partir da costa oeste dos EUA, Tóquio e Bora Bora.</li>
              <li><strong>Acima de 12 horas:</strong> a partir dos EUA, Polinésia Francesa, Maldivas, Seicheles, Bali, Austrália. A partir da Europa, Austrália, Polinésia Francesa, Ilhas Cook, Pacífico profundo.</li>
            </ul>
            <p>
              Premium economy ou classe executiva mudam a conta. Um voo de 16 horas em assento-cama na executiva é uma
              experiência diferente do mesmo voo na econômica. Se o orçamento sustenta lie-flat em uma das pernas
              (frequentemente viável via pontos), façam a ida longa na executiva e a volta no padrão, quando a fadiga
              importa menos.
            </p>

          </div>

          <div className="my-10 bg-white border border-rose-100 rounded-2xl p-6 md:p-8 shadow-sm">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-rose-500 text-white flex items-center justify-center font-display text-xl font-bold">4</div>
              <div className="flex-1">
                <h3 className="font-display text-2xl md:text-3xl text-zinc-900 m-0">Q4. Em qual estação vocês vão viajar?</h3>
              </div>
            </div>
            <p>
              Encaixem o destino na sua janela de viagem, não o contrário. A maneira mais rápida de estragar uma lua de
              mel nas Maldivas é reservar maio porque é quando o casamento acontece. As grandes janelas:
            </p>
            <ul>
              <li><strong>Dezembro a março:</strong> pico em Maldivas, Bali (seca), Tailândia, Maurício, Seicheles. Caribe confiável.</li>
              <li><strong>Abril a junho:</strong> meia-estação no Mediterrâneo (o ponto doce), cerejeiras no Japão, estação verde no leste da África.</li>
              <li><strong>Julho a agosto:</strong> Polinésia Francesa, Islândia, Escandinávia, estação seca no leste da África, inverno no sul da África (ótimo para safári). Evitem o Mediterrâneo a menos que amem multidão.</li>
              <li><strong>Setembro a novembro:</strong> meia-estação no Mediterrâneo de novo (o segundo ponto doce), meia-estação nas Maldivas, abertura da Patagônia, meia-estação em Galápagos.</li>
            </ul>
            <p>
              Para um mapeamento mês a mês, vejam nosso planner em <Link href="/pt/best-time-to-honeymoon">melhor época para a lua de mel</Link>, além das páginas mensais de <Link href="/honeymoon-in-january">janeiro</Link>, <Link href="/honeymoon-in-february">fevereiro</Link>, <Link href="/honeymoon-in-march">março</Link>, <Link href="/honeymoon-in-april">abril</Link>, <Link href="/honeymoon-in-may">maio</Link>, <Link href="/honeymoon-in-june">junho</Link>, <Link href="/honeymoon-in-july">julho</Link>, <Link href="/honeymoon-in-august">agosto</Link>, <Link href="/honeymoon-in-september">setembro</Link>, <Link href="/honeymoon-in-october">outubro</Link>, <Link href="/honeymoon-in-november">novembro</Link> e <Link href="/honeymoon-in-december">dezembro</Link>.
            </p>

          </div>

          <div className="my-10 bg-white border border-rose-100 rounded-2xl p-6 md:p-8 shadow-sm">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-rose-500 text-white flex items-center justify-center font-display text-xl font-bold">5</div>
              <div className="flex-1">
                <h3 className="font-display text-2xl md:text-3xl text-zinc-900 m-0">Q5. Qual energia vocês querem?</h3>
              </div>
            </div>
            <p>
              É aqui que a maioria dos casais escorrega. Existem cinco energias honestas de lua de mel. A maioria
              consegue misturar duas; quase ninguém consegue misturar mais de duas numa única viagem.
            </p>
            <ul>
              <li><strong>Praia-e-spa:</strong> tempo horizontal, sol, água, massagens, sem agenda. Maldivas, Bora Bora, Maurício, Caribe.</li>
              <li><strong>Ativa:</strong> caminhadas, mergulho, exploração, dias variados. Costa Rica, Nova Zelândia, Havaí, Bali (Ubud mais surfe).</li>
              <li><strong>Cultural:</strong> museus, história, comida, cidades caminháveis. Japão, Itália, Portugal, Cidade do México mais Oaxaca, Marrakesh.</li>
              <li><strong>Espiritual ou bem-estar:</strong> retiros, ryokans, ayurveda, slow travel profundo. Butão, Kerala, Bali Ubud, Hakone, algumas propriedades Aman.</li>
              <li><strong>Aventura:</strong> safári, geleiras, paisagens remotas, nível de expedição. Leste da África, Patagônia, Islândia, Galápagos, Butão.</li>
            </ul>
            <p>
              As misturas clássicas em dupla: safári mais praia, cidade mais resort, aventura mais relaxamento, cultural
              mais praia. O erro clássico: tentar misturar três ou mais e terminar uma viagem de 14 noites em sete
              aeroportos.
            </p>

          </div>

          <div className="my-10 bg-white border border-rose-100 rounded-2xl p-6 md:p-8 shadow-sm">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-rose-500 text-white flex items-center justify-center font-display text-xl font-bold">6</div>
              <div className="flex-1">
                <h3 className="font-display text-2xl md:text-3xl text-zinc-900 m-0">Q6. Qual é o piso de comida e conforto de vocês?</h3>
              </div>
            </div>
            <p>
              Esta pergunta raramente é feita em voz alta e importa enormemente. Um tented camp em Botsuana é uma
              experiência "de luxo", mas vocês dormem sob lona e tomam banho de balde. Um ryokan em Hakone é luxo, mas
              vocês dormem em um futon, o jantar é um kaiseki fixo às 18h30 e não existe opção de café da manhã
              ocidental. Um eco-resort na selva em Bali é lindíssimo, mas há insetos na vila aberta e 4 horas de carro
              do aeroporto.
            </p>
            <p>
              Se os dois forem honestamente "piso de conforto alto", inclinem-se para vilas sobre a água, all-inclusives
              no Caribe, Mediterrâneo e hotéis 5 estrelas urbanos em Tóquio ou Paris. Se um ou os dois forem "piso de
              conforto flexível", o mundo se abre: safári, selva, ryokan, cruzeiro de expedição, tudo passa a ser
              viável. Se vocês estão descalibrados nesse eixo, nomeiem isso e escolham um destino que atenda ao piso
              mais alto. O inverso (o parceiro de conforto alto cerrando os dentes em um tented camp) é uma causa comum
              de rancor pós-lua de mel.
            </p>

          </div>

          <div className="my-10 bg-white border border-rose-100 rounded-2xl p-6 md:p-8 shadow-sm">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-rose-500 text-white flex items-center justify-center font-display text-xl font-bold">7</div>
              <div className="flex-1">
                <h3 className="font-display text-2xl md:text-3xl text-zinc-900 m-0">Q7. Vocês dois são viajantes de longa distância de primeira viagem ou veteranos?</h3>
              </div>
            </div>
            <p>
              A pergunta mais negligenciada das sete. Viajantes de longa distância de primeira viagem se beneficiam
              enormemente de destinos com resorts que falam inglês, simplicidade de moeda única, logística previsível e
              um único hotel para a viagem inteira. A lua de mel nas Maldivas em resort único é quase engenheirada para
              quem nunca foi. O mesmo vale para Maurício, Santa Lúcia, Bali Ubud mais Uluwatu e o all-inclusive da
              Riviera Maya.
            </p>
            <p>
              Veteranos dão conta de roteiros multi-parada com self-drive, barreiras de língua e transferes complexos.
              Patagônia mais Atacama, Butão mais Índia, Madagascar mais Reunião e Japão mais Coreia são todas luas de
              mel legítimas de veteranos. Se um de vocês é veterano e o outro é estreante, vão para o padrão amigável
              a estreantes. O veterano já fez isso antes; o estreante está fazendo pela primeira vez, na viagem mais
              carregada emocionalmente da vida até agora.
            </p>

          </div>

          {/* 4 ARCHETYPES */}
          <div className="my-16 flex items-center gap-4">
            <div className="h-px flex-1 bg-rose-200" />
            <span className="text-rose-400 text-xs font-semibold uppercase tracking-[0.25em]">Arquétipos</span>
            <div className="h-px flex-1 bg-rose-200" />
          </div>
          <h2 id="archetypes">Os 8 arquétipos de lua de mel</h2>
          <p>
            Depois de rodar as sete perguntas, suas respostas mapeiam quase limpamente para um destes oito arquétipos.
            Cada um é um padrão real e estabelecido de lua de mel, com sua faixa honesta de custo, o resort que o
            define e os casais para quem ele está errado. Linkamos para o pilar dedicado quando relevante.
          </p>

          <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
            {ARCHETYPES.map((a, idx) => {
              const emojis = ['🏝️', '🌴', '🌊', '🏞️', '🦒', '🕉️', '🏔️', '✨']
              return (
                <div key={a.title} className="bg-white border border-zinc-200 rounded-2xl p-6 flex flex-col">
                  <div className="w-14 h-14 rounded-full bg-rose-100 text-3xl flex items-center justify-center mb-4">{emojis[idx]}</div>
                  <h3 className="font-display text-2xl text-zinc-900 mb-2">{a.title}</h3>
                  <p className="italic text-zinc-500 mb-4">{a.vibe}</p>
                  <div className="text-sm text-zinc-700 space-y-3 mb-4">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-rose-500 font-semibold mb-1">Para quem é</p>
                      <p>{a.whoFor}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-rose-500 font-semibold mb-1">Quem deve pular</p>
                      <p>{a.whoSkip}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-rose-500 font-semibold mb-1">Destinos</p>
                      <p>{a.destinations.join(', ')}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-rose-500 font-semibold mb-1">Carro-chefe</p>
                      <p>{a.flagshipHotel}</p>
                    </div>
                  </div>
                  <div className="mt-auto bg-rose-50/60 rounded-xl p-4 text-sm">
                    <p className="text-xs uppercase tracking-widest text-rose-500 font-semibold mb-1">Custo real</p>
                    <p className="text-zinc-700 mb-2">{a.cost}</p>
                    <Link href={a.pillarLink} className="text-rose-500 hover:underline">{a.pillarLink}</Link>
                  </div>
                </div>
              )
            })}
          </div>

          {/* 5 DEAL-BREAKERS */}
          <div className="my-16 flex items-center gap-4">
            <div className="h-px flex-1 bg-rose-200" />
            <span className="text-rose-400 text-xs font-semibold uppercase tracking-[0.25em]">Obstáculos</span>
            <div className="h-px flex-1 bg-rose-200" />
          </div>
          <h2>Os 5 dealbreakers comuns e como lidar</h2>

          <h3>1. Uma pessoa quer praia, a outra quer cidade</h3>
          <p>
            É a discordância isolada mais comum que vemos e a mais fácil de resolver. Montem uma viagem em duas
            paradas. Os arcos clássicos: 4 noites em Tóquio mais 7 noites nas Maldivas, 3 noites na Cidade do Cabo
            mais 6 noites de safári mais 4 noites em Zanzibar, 4 noites em Buenos Aires mais 6 noites na Patagônia,
            5 noites na Cidade do México mais 5 noites na Riviera Maya. A pessoa da praia tem sua semana; a pessoa
            da cidade tem sua dose cultural; ninguém se contorce em um destino que não satisfaz nenhum dos dois.
          </p>

          <h3>2. Gap entre expectativa de orçamento e realidade</h3>
          <p>
            Uma pessoa quer a water villa do Soneva Jani, a outra sabe que o orçamento é $12.000. A conversa honesta
            é sobre qual compromisso dói menos. Três opções, em ordem de impacto. Primeira, baixar a categoria do
            hotel dentro do destino dos sonhos (uma garden villa de Maldivas em um 4 estrelas entrega 80 por cento da
            experiência por 40 por cento do custo). Segunda, deslocar o destino dos sonhos em uma estação (Maldivas
            no fim de abril em vez de janeiro, Caribe no começo de junho em vez de fevereiro). Terceira, trocar o
            destino pelo seu análogo mais próximo: Cabo Verde pelo clima de Maldivas a um terço do custo, Albânia pelo
            cenário das ilhas gregas, Sicília pela Costa Amalfitana, Maurício no lugar das Seicheles.
          </p>

          <h3>3. Uma pessoa não gosta de voos longos</h3>
          <p>
            Luas de mel de curta distância são luas de mel de verdade. O Mediterrâneo (Costa Amalfitana, Maiorca,
            Creta) para europeus. O Caribe (Antígua, Turks and Caicos, Santa Lúcia) para quem está na costa leste dos
            EUA. Bali para australianos. Cabo Verde para o oeste da Europa (5h30, sem jet lag, clima de water villa).
            México de qualquer ponto do continente. Nada disso é segunda opção. É diferente.
          </p>

          <h3>4. Visto, passaporte ou burocracia</h3>
          <p>
            Alguns destinos exigem de 6 a 12 semanas de papelada (visto para o Butão, e-visto da Índia com biometria,
            Rússia, partes da África, Brasil para alguns passaportes). Alguns exigem vacinas (febre amarela para
            certos destinos africanos precisa de 10 dias mínimos para fazer efeito). Alguns exigem passaporte válido
            por 6 meses além do retorno e duas páginas em branco. Auditem isso antes de se apaixonar pelo destino. O
            número de casais que dão um sinal não reembolsável em um destino em que não conseguem entrar a tempo é
            diferente de zero.
          </p>

          <h3>5. Estação fora de sincronia com a data do casamento</h3>
          <p>
            O destino dos sonhos está na estação errada. Três opções honestas. Primeira, aceitar a estação errada com
            30 a 50 por cento de desconto e engenheirar a viagem em volta disso (Maldivas em maio, aceitando as
            tempestades, escolhendo um resort com boas amenidades indoor). Segunda, escolher a "segunda melhor janela"
            em que o destino ainda funciona em 70 por cento da qualidade: Maldivas no fim de abril, Caribe no começo
            de junho, Polinésia Francesa no começo de novembro. Terceira, adiar a lua de mel por 3 a 6 meses. Uma lua
            de mel adiada na estação certa bate uma lua de mel em data perfeita debaixo da monção, todas as vezes.
          </p>

          {/* 6 PERSONAS */}
          <div className="my-16 flex items-center gap-4">
            <div className="h-px flex-1 bg-rose-200" />
            <span className="text-rose-400 text-xs font-semibold uppercase tracking-[0.25em]">Personalidades</span>
            <div className="h-px flex-1 bg-rose-200" />
          </div>
          <h2 id="personas">Por personalidade de lua de mel</h2>
          <p>
            Além do framework de 7 perguntas, aqui estão quatro tipos de personalidade com orientação concreta de
            destino. Cada um aponta para o nosso pilar dedicado, com listas mais longas.
          </p>

          <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-4 my-10">
            {PERSONAS.map((p) => (
              <div key={p.label} className="bg-rose-50 border border-rose-100 rounded-xl p-5">
                <h3 className="font-display text-xl text-zinc-900 mb-2">
                  <Link href={p.link} className="hover:text-rose-500">{p.label} →</Link>
                </h3>
                <p className="text-zinc-700 text-sm leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>

          {/* 7 PARTNER QUESTIONS */}
          <div className="my-16 flex items-center gap-4">
            <div className="h-px flex-1 bg-rose-200" />
            <span className="text-rose-400 text-xs font-semibold uppercase tracking-[0.25em]">Perguntas a fazer</span>
            <div className="h-px flex-1 bg-rose-200" />
          </div>
          <h2>As 5 perguntas para fazerem um ao outro antes de reservar</h2>
          <p>
            Antes de colocar um sinal, sentem-se com o seu parceiro sem notebook, sem celular, sem mood board. Façam
            estas cinco perguntas. As respostas trazem à tona preferências e dealbreakers que nenhuma shortlist de
            destino consegue prever.
          </p>
          <ol>
            <li><strong>Se fizéssemos esta viagem e um de nós odiasse três dias dela, quais três dias cada um estaria disposto a absorver?</strong> A resposta honesta revela tolerâncias. Se nenhum dos dois absorveria um dia de transfer de 4 horas, risquem destinos com longos transferes. Se um dos dois não absorveria um despertar às 5h para game drive, safári está fora.</li>
            <li><strong>O que cada um de nós mais amou na melhor viagem que fizemos juntos até hoje, e qual parte daquilo a lua de mel deveria repetir?</strong> Luas de mel que ignoram os pontos altos das viagens passadas em dupla tendem a entregar abaixo do esperado. A viagem que vocês amaram é dado.</li>
            <li><strong>Qual é uma coisa que cada um de nós nunca contaria a um agente de viagens, mas é verdade?</strong> Costuma trazer preferências reais à tona: "fico ansioso em mercados", "não consigo dormir em quartos com paredes compartilhadas", "fico enjoado em barcos pequenos". Planejem em torno disso.</li>
            <li><strong>Qual é a foto que queremos trazer para casa? E em seguida: que viagem entregaria essa foto e mais doze coisas que amamos?</strong> Inversão útil do problema do Instagram. Usem a foto como etiqueta, não como briefing.</li>
            <li><strong>Se tivéssemos metade do orçamento, que destino escolheríamos no lugar?</strong> A resposta muitas vezes revela para que o destino realmente serve. Se "metade do orçamento" leva vocês a um lugar genuinamente atraente, o destino original pode ter sido status, não match.</li>
          </ol>

          {/* 8 CASE STUDIES */}
          <div className="my-16 flex items-center gap-4">
            <div className="h-px flex-1 bg-rose-200" />
            <span className="text-rose-400 text-xs font-semibold uppercase tracking-[0.25em]">Casais reais</span>
            <div className="h-px flex-1 bg-rose-200" />
          </div>
          <h2 id="case-studies">Três casos reais</h2>
          <p>
            Três casais com quem trabalhamos (detalhes e nomes compostos e alterados por privacidade). As decisões que
            rodaram pelo framework de 7 perguntas. Os destinos que o framework de fato produziu.
          </p>

          <div className="not-prose my-10 bg-zinc-50 border border-zinc-200 rounded-2xl p-7 md:p-8 prose prose-zinc max-w-none">
          <h3 className="font-display text-2xl mt-0">Caso A: casal do Brooklyn, $8.000 de orçamento, 7 noites, primeira longa distância</h3>
          <p>
            Mia e Daniel, ambos com 31, casando em outubro. Teto de $8.000 para a lua de mel. Os dois ansiosos com
            logística multi-parada. Nenhum dos dois voou mais de 8 horas. Destino dos sonhos: Maldivas. Realidade
            orçamentária: não. O framework filtra isso na hora. Q1 (orçamento): $8 mil. Q2 (noites): 7. Q3 (tolerância
            a voo): abaixo de 10 horas. Q4 (estação): fim de outubro. Q5 (energia): praia mais spa, cultural leve.
            Q6 (piso de conforto): alto. Q7 (experiência): primeira longa distância.
          </p>
          <p>
            A shortlist produzida pelo framework: Cabo Verde (Sal ou Boa Vista), Grécia (Creta ou Naxos no fim de
            temporada), México (all-inclusive na Riviera Maya). A escolha: Cabo Verde, 6 horas a partir do JFK via
            Lisboa, water villas a uma fração do custo das Maldivas, fim de outubro ainda com clima de praia. Eles
            reservaram o Pestana Tropico em Praia como âncora urbana e uma pousada à beira-mar em Boa Vista por 5
            noites. Total gasto incluindo voos: $7.400. Voltaram para casa felizes por não terem perseguido a foto de
            Maldivas pelo dobro do preço. Vejam nosso guia completo de
            <Link href="/pt/cape-verde-honeymoon-cost"> custo de lua de mel em Cabo Verde</Link>.
          </p>
          </div>

          <div className="not-prose my-10 bg-zinc-50 border border-zinc-200 rounded-2xl p-7 md:p-8 prose prose-zinc max-w-none">
          <h3 className="font-display text-2xl mt-0">Caso B: $25.000 de orçamento, 12 noites, os dois viajantes experientes</h3>
          <p>
            Ana e Tom, na casa dos 30 e poucos, casando em novembro. Teto de $25.000. Os dois já fizeram os destinos
            óbvios (Bali, Tailândia, México, Itália). Nenhum quer viagem só de praia. Os dois fluentes em duas paradas.
            Q1: $25 mil. Q2: 12 noites. Q3: longa distância tranquilo. Q4: fim de novembro. Q5: aventura mais
            relaxamento. Q6: piso de conforto flexível. Q7: veteranos.
          </p>
          <p>
            O framework produziu: Patagônia mais Atacama (o verão deles é o inverno de vocês, timing perfeito para
            novembro), safári no leste da África mais Zanzibar, Japão na temporada de folhagem de outono, circuito
            do Butão. A escolha: Patagônia mais Atacama. 5 noites no Explora Patagonia (lodge full-board de trekking),
            5 noites no Tierra Atacama (full-board no alto deserto), 2 noites em Santiago na ida e na volta. Total
            gasto incluindo executiva em pontos em uma das pernas: $24.800. Voltaram com a viagem que a versão safári
            mais praia não teria entregue: exaustão de verdade, geleiras ao nascer do sol, salar ao luar e dois
            destinos que nenhum dos dois teria escolhido sozinho.
          </p>
          </div>

          <div className="not-prose my-10 bg-zinc-50 border border-zinc-200 rounded-2xl p-7 md:p-8 prose prose-zinc max-w-none">
          <h3 className="font-display text-2xl mt-0">Caso C: $50.000 de orçamento, 14 noites, os dois 45+, segundo casamento</h3>
          <p>
            Helen e James, ambos com 47, casando no fim de fevereiro (o casamento dela dez meses antes foi o primeiro).
            Os dois já fizeram Maldivas, Bora Bora, Toscana, Provença, Japão uma vez. Os dois querem profundidade e
            um destino que "se justifique". Orçamento de $50.000. Q1: $50 mil. Q2: 14 noites. Q3: longa distância
            tranquilo. Q4: fim de fevereiro (verão lá, inverno aqui). Q5: cultural mais bem-estar mais aventura leve.
            Q6: piso de conforto alto (sem balde, sem paredes compartilhadas). Q7: veteranos profundos.
          </p>
          <p>
            O framework produziu: Aman Tokyo mais Hoshinoya Kyoto mais Park Hyatt Niseko (Japão deep cut, com esqui em
            Niseko para fevereiro). Singita Sasakwa mais Cidade do Cabo mais winelands (África deep cut). Circuito do
            Butão em arco de cinco propriedades Aman. A escolha: o triplo do Japão. 4 noites no Aman Tokyo, 4 noites no
            Hoshinoya Kyoto (com bate-volta para Nara e Osaka), 4 noites de esqui no Park Hyatt Niseko, 2 noites em
            Tóquio na volta. Executiva ida e volta. Total gasto: $48.400. Voltaram, nas palavras deles, com a
            sensação de que "o segundo casamento foi uma celebração; a lua de mel foi a declaração de verdade". É o
            que $50 mil compram quando são gastos com precisão.
          </p>
          </div>

          {/* 9 INSTAGRAM */}
          <div className="my-16 flex items-center gap-4">
            <div className="h-px flex-1 bg-rose-200" />
            <span className="text-rose-400 text-xs font-semibold uppercase tracking-[0.25em]">Sem filtros</span>
            <div className="h-px flex-1 bg-rose-200" />
          </div>
          <h2 id="instagram-honest">A visão honesta sobre destinos movidos pelo Instagram</h2>
          <blockquote className="not-prose my-12 pl-6 border-l-4 border-rose-500 text-2xl md:text-3xl font-display italic text-zinc-700 leading-snug">
            A foto icônica que perseguiram existe por uns noventa minutos por dia, cercada de tripés.
          </blockquote>
          <p className="text-rose-400 text-sm mt-2">Pierre Lambert, editor</p>
          <p>
            Cinco destinos cuja representação no Instagram mais diverge da realidade, na nossa experiência. Vale
            nomear porque eles respondem por uma fatia desproporcional das decepções pós-lua de mel.
          </p>
          <p>
            <strong>Santorini em julho e agosto.</strong> As fotos da caldeira são reais. O despejo das 16h de 12.000
            day-trippers de navios de cruzeiro em Oia também é real. De cerca de 10h às 18h na alta temporada, as
            vilas famosas ficam inacessíveis. A Santorini compatível com lua de mel existe em maio, fim de setembro
            e outubro. Ou em um dos poucos hotéis de falésia (Grace, Canaves Oia, Katikies) com piscina privativa de
            onde vocês não saem.
          </p>
          <p>
            <strong>Bali Seminyak na estação seca.</strong> A Bali da lua de mel existe. Não é em Seminyak. É em
            Ubud (terraços de arroz, ritual, vilas na selva) mais Uluwatu (hotéis de falésia, pôr do sol, surfe).
            Seminyak em julho é beach club, trânsito e um público diferente do que as fotos sugerem.
          </p>
          <p>
            <strong>Maldivas de maio a outubro.</strong> Tempestades diárias em 30 a 60 por cento dos dias. A
            experiência da water villa degrada com chuva forte (a cena icônica do piso de vidro pressupõe sol). As
            Maldivas, para primeiras luas de mel, são de novembro a abril. Meia-estação é real, mas opcional.
          </p>
          <p>
            <strong>Bora Bora reduzida à foto.</strong> O único clique icônico (o Monte Otemanu visto de uma water
            villa) é real e é entregue em cerca de 70 por cento das manhãs. O resto da viagem é um resort, uma lagoa,
            uma vista. Casais que querem variedade frequentemente se arrependem de Bora Bora em resort único e
            queriam ter combinado com Taiti ou Moorea. Arcos de duas ilhas pela Polinésia Francesa quase sempre
            ganham.
          </p>
          <p>
            <strong>Tulum.</strong> O que era uma cidade de praia tranquila cinco anos atrás virou jungle-chic,
            fotogênico e severamente congestionado. As estradas são ruins, a erosão da praia é significativa e a
            cena é mais exigente do que as fotos sugerem. A lua de mel honesta no Yucatán costuma combinar Tulum (2
            noites) com Holbox ou Isla Mujeres (5 noites) pelo silêncio prometido nas fotos.
          </p>

          {/* 10 DECISION TREE */}
          <div className="my-16 flex items-center gap-4">
            <div className="h-px flex-1 bg-rose-200" />
            <span className="text-rose-400 text-xs font-semibold uppercase tracking-[0.25em]">Árvore de decisão</span>
            <div className="h-px flex-1 bg-rose-200" />
          </div>
          <h2 id="tree">Árvore de decisão em resumo</h2>
          <p>A forma mais rápida de transformar o framework em ação. Leiam de cima para baixo; parem na primeira linha que combina com vocês.</p>
          <ol className="not-prose my-8 space-y-4 list-none p-0">
            {DECISION_TREE.map((line, i) => (
              <li key={i} className="bg-white border border-rose-100 rounded-xl p-5 flex gap-4">
                <div className="w-8 h-8 rounded-full bg-rose-500 text-white text-sm font-bold flex items-center justify-center shrink-0">{i + 1}</div>
                <p className="text-zinc-700 m-0">{line}</p>
              </li>
            ))}
          </ol>

          <Stay22InlineCTA
            destination="maldives"
            country="Maldivas"
            locale="pt"
            headline="Precificando a shortlist?"
            subline="Depois que vocês tiverem a shortlist de três a cinco destinos, nosso parceiro de comparação de preços abre todas as engines de reserva em um clique. Sem impacto de comissão no preço de vocês."
            campaign="how-to-choose-destination"
          />

          {/* 11 FAQ */}
          <div className="my-16 flex items-center gap-4">
            <div className="h-px flex-1 bg-rose-200" />
            <span className="text-rose-400 text-xs font-semibold uppercase tracking-[0.25em]">FAQ</span>
            <div className="h-px flex-1 bg-rose-200" />
          </div>
          <h2 id="faq" className="sr-only">Perguntas frequentes</h2>
          <div className="not-prose my-12 bg-white border border-zinc-200 rounded-2xl p-7 md:p-8">
            <h3 className="font-display text-2xl text-zinc-900 mb-6 flex items-center gap-2"><span className="text-rose-500">▸</span> Perguntas frequentes</h3>
            <FAQAccordion items={FAQS} />
          </div>

          {/* 12 CTA */}
          <div className="not-prose my-16 bg-gradient-to-br from-rose-500 to-rose-600 text-white rounded-3xl p-8 md:p-12 text-center">
            <h2 id="cta" className="font-display text-3xl md:text-4xl text-white mb-4">Ainda travados? Dois próximos passos</h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
              Se rodaram o framework e ainda não conseguem decidir, os próximos dois passos ajudam. Primeiro, façam
              nosso quiz curto em o quiz da lua de mel. Ele aplica as sete perguntas em formato interativo e devolve
              uma shortlist ranqueada amarrada a hotéis específicos que pontuamos. Segundo, naveguem pelo nosso atlas
              de destinos com a shortlist em mente e leiam a página do destino de ponta a ponta antes de pagar o sinal.
              Destinos de lua de mel recompensam o casal que os escolheu de maneira deliberada. Escolham o de vocês
              assim.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pt/quiz" className="bg-white text-rose-600 px-8 py-4 rounded-full font-semibold hover:bg-rose-50 transition">Fazer o quiz</Link>
              <Link href="/pt/destinations" className="text-white underline underline-offset-4 self-center">Explorar destinos</Link>
            </div>
          </div>
          <p className="mt-8">
            Para o resto do playbook de planejamento, vejam <Link href="/pt/how-to-plan-a-honeymoon">como planejar uma
            lua de mel</Link>: o cronograma de 12 meses, os detalhamentos de orçamento, a lista de presentes, seguro,
            mala e os 10 erros que estragam luas de mel.
          </p>
        </div>
      </article>
    </article>
  )
}
