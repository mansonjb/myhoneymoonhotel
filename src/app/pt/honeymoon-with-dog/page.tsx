import type { Metadata } from 'next'
import Link from 'next/link'
import { buildAlternates } from '@/lib/alternates'
import AuthorByline from '@/components/AuthorByline'
import { AUTHOR } from '@/data/author'

export const metadata: Metadata = {
  title: 'Lua de mel com cachorro — Hotéis e destinos',
  description:
    'Como planejar uma lua de mel que inclua o seu cachorro: hotéis de luxo pet-friendly, destinos que realmente funcionam e as realidades que a maioria dos guias omite.',
  alternates: buildAlternates('/honeymoon-with-dog', 'pt'),
}

const SISTER_SITE = 'https://hotelswithpets.com'
const SISTER_GUIDE = 'https://hotelswithpets.com/pt/guides/honeymoon-with-pet'

const faqs = [
  {
    question: 'Posso levar meu cachorro a um hotel de lua de mel de luxo?',
    answer:
      'Sim, mas só em um pequeno conjunto de propriedades. Existem três níveis: tolerado, bem-vindo e pensado para cães. A maioria dos hotéis "pet-friendly" apenas tolera; os que realmente recebem cães (Belmond, Rosewood, as pequenas casas da Toscana, Provença e dos Cotswolds) são os que valem a reserva para uma lua de mel.',
  },
  {
    question: 'Qual é o país mais fácil da Europa para uma lua de mel com cachorro?',
    answer:
      'A França. Os restaurantes aceitam cães por padrão, os trens os transportam e a maioria das propriedades de luxo — do Domaine de la Baume aos pequenos mas do Luberon — trata o animal como hóspede, não como problema logístico. A Itália (a Toscana em particular) vem logo atrás.',
  },
  {
    question: 'Preciso de passaporte pet para uma lua de mel na Europa?',
    answer:
      'Viajar pela UE exige um passaporte pet europeu em dia ou um certificado zoossanitário, e a reentrada nos EUA agora exige o formulário de importação do CDC. Ambos levam semanas — comece pelo menos três meses antes da viagem.',
  },
  {
    question: 'Meu cachorro pode voar na cabine na nossa lua de mel?',
    answer:
      'Apenas cães pequenos (em geral até 8 kg, conforme a companhia) em algumas poucas empresas, e quase nunca em voos de longa distância. Para a maioria dos casais, isso descarta destinos como Maldivas, Bora Bora ou Seychelles e leva a lua de mel para uma Europa acessível de carro ou um destino doméstico.',
  },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  inLanguage: 'pt-BR',
  headline: 'Lua de mel com cachorro: o guia honesto',
  description:
    'Um guia prático para planejar uma lua de mel que inclua o seu cachorro, dos hotéis de luxo pet-friendly aos destinos que realmente funcionam.',
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
  datePublished: '2026-05-28',
  dateModified: '2026-05-28',
  mainEntityOfPage: 'https://myhoneymoonhotel.com/pt/honeymoon-with-dog',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://myhoneymoonhotel.com/pt' },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Lua de mel com cachorro',
      item: 'https://myhoneymoonhotel.com/pt/honeymoon-with-dog',
    },
  ],
}

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

export default function HoneymoonWithDogPagePT() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">Guia de planejamento</p>
      <h1 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-6 leading-tight">
        Lua de mel com cachorro: o guia honesto.
      </h1>
      <p className="text-zinc-500 text-lg leading-relaxed mb-2">
        A maioria dos conselhos sobre lua de mel parte do princípio de que você vai deixar o cachorro em casa. Para
        os casais que consideram o cão um membro da família, essa não é a pergunta — a pergunta é <em>qual</em> lua
        de mel funciona e quais hotéis realmente recebem um labrador, em vez de tolerar um chihuahua dentro de uma
        bolsa.
      </p>

      <AuthorByline />

      <div className="prose prose-zinc max-w-none prose-headings:font-display prose-headings:text-zinc-900 prose-p:text-zinc-600 prose-p:leading-relaxed prose-a:text-rose-500 prose-a:no-underline hover:prose-a:underline mt-10">

        <h2>Comece pelo cachorro e depois escolha o destino</h2>
        <p>
          Casais que planejam uma lua de mel com pet cometem o mesmo erro: escolhem o destino primeiro e só depois
          perguntam se cães são bem-vindos. Faça o contrário. Um bulldog francês idoso que sofre com a pressão na
          cabine elimina o longo curso; um border collie jovem que precisa de três horas diárias solto descarta os
          city breaks mediterrâneos. A realidade do cão estreita o mapa antes do romance.
        </p>
        <p>
          Para a maioria dos casais norte-americanos e europeus, a shortlist prática é: luxo doméstico (Napa, Hudson
          Valley, Cotswolds, Provença), uma Europa acessível de carro (casas de campo da Toscana, vale do Loire,
          lagos alpinos) e alguns poucos lodges de luxo de estadia longa que de fato abraçam cães. Luas de mel de
          longo curso em praias — Maldivas, Bora Bora, Seychelles — quase nunca dão certo, tanto pelo trânsito quanto
          porque os hotéis não estão preparados para isso.
        </p>

        <h2>O que "pet-friendly de luxo" realmente significa</h2>
        <p>
          A expressão está banalizada. Existem três níveis e a diferença importa:
        </p>
        <ul>
          <li>
            <strong>Tolerado.</strong> O hotel aceita cães (em geral com taxa), mas o quarto é o mesmo, o restaurante
            é proibido e ninguém da equipe sabe o que fazer com um retriever de 30 quilos no check-in. A maioria dos
            hotéis "pet-friendly" fica aqui.
          </li>
          <li>
            <strong>Bem-vindo.</strong> Uma caminha aguarda no quarto, o concierge tem um mapa de passeios e pelo
            menos um terraço de restaurante aceita cães. As propriedades Belmond e Rosewood que recebem cães estão
            nesse nível.
          </li>
          <li>
            <strong>Pensado para cães.</strong> Cardápio canino completo saindo da cozinha, spa para cães no quarto
            ou jardim cercado, equipe treinada que realmente gosta de animais. Esse nível é pequeno, mas é a
            diferença entre uma lua de mel e um teste de estresse.
          </li>
        </ul>
        <p>
          Nossa publicação irmã{' '}
          <a href={SISTER_SITE} target="_blank" rel="noopener">
            HotelsWithPets.com
          </a>{' '}
          mantém o banco de dados mais completo de propriedades de nível dois e três, com políticas para pets, taxas,
          limites de peso e notas de campo para cada entrada. O guia complementar deles,{' '}
          <a href={SISTER_GUIDE} target="_blank" rel="noopener">
            Lua de mel com pet
          </a>
          , cobre o lado dos hotéis da mesma pergunta que tratamos aqui pelo lado dos destinos — é o catálogo a
          consultar depois de escolher o país.
        </p>

        <h2>Destinos que realmente funcionam</h2>

        <h3>Provença e Costa Azul (França)</h3>
        <p>
          A França é o país mais fácil do mundo para uma lua de mel com cachorro. Restaurantes aceitam cães por
          padrão, os trens os transportam e a maioria das propriedades de luxo — do Domaine de la Baume aos pequenos
          mas do Luberon — os trata como hóspedes, não como logística. Combine com um carro alugado, uma semana
          tranquila de vinhedos e mercados e um terraço ao pôr do sol em Gordes. Nosso{' '}
          <Link href="/pt/destinations/provence">guia de lua de mel na Provença</Link> cobre o lado romântico; as
          políticas para pets propriedade por propriedade estão{' '}
          <a href={SISTER_GUIDE} target="_blank" rel="noopener">
            no guia de lua de mel do HotelsWithPets
          </a>
          .
        </p>

        <h3>Toscana (Itália)</h3>
        <p>
          A fazenda convertida em relais — o formato <em>casale</em> — é feita para cães. Borgo Santo Pietro,
          Castello di Casole, Castello di Reschio: as três aceitam cães e as três têm áreas onde o cachorro pode
          voltar a ser cachorro. Some duas noites de abertura em Florença e uma rota pelo Val d&rsquo;Orcia entre
          ciprestes e você terá uma das luas de mel caninas mais fáceis da Europa. Veja nosso{' '}
          <Link href="/pt/destinations/tuscany">guia de lua de mel na Toscana</Link> para o lado romântico, somado à
          pesquisa propriedade por propriedade{' '}
          <a href={SISTER_GUIDE} target="_blank" rel="noopener">
            no guia de lua de mel do HotelsWithPets
          </a>
          .
        </p>

        <h3>Cotswolds e Lake District (Reino Unido)</h3>
        <p>
          Cães fazem parte da cultura dos country hotels britânicos. Soho Farmhouse, o grupo The Pig, Lime Wood — o
          luxo rural britânico parte do pressuposto de que o cachorro vai junto. Some a vantagem prática de que
          donos britânicos não precisam de passaporte pet em viagens domésticas e os Cotswolds viram uma das
          escolhas mais inteligentes para uma lua de mel sem avião.
        </p>

        <h3>Napa, Sonoma e Hudson Valley (EUA)</h3>
        <p>
          Para casais americanos que saem da cidade de carro, o circuito de pequenas pousadas de luxo de Napa e do
          Hudson Valley lidera discretamente em hospitalidade canina. Auberge du Soleil, Meadowood (quando reabrir),
          Troutbeck — os cães tomam café da manhã no terraço, andam no SUV do tour de vinícolas e dormem em uma cama
          de verdade.
        </p>

        <h2>O guia complementar no HotelsWithPets.com</h2>
        <p>
          Enquanto este artigo cobre o lado do destino — quais países, quais cidades, qual logística —, nossa
          publicação irmã cobre o lado da propriedade. Se o destino já está fechado e você precisa saber qual hotel
          específico vai receber o seu cachorro como hóspede, e não como problema logístico, o texto-referência é{' '}
          <a href={SISTER_GUIDE} target="_blank" rel="noopener">
            <strong>Lua de mel com o seu pet</strong> no HotelsWithPets.com
          </a>
          . Mesma equipe editorial, mesma abordagem honesta de avaliação, aplicada a políticas para pets, taxas,
          limites de peso, áreas sem coleira e os pequenos detalhes (caminhas no quarto, terraços de restaurante,
          veterinário de plantão) que decidem se uma lua de mel com cachorro será relaxante ou estressante.
        </p>

        <h2>Realidades práticas que a maioria dos guias omite</h2>
        <ul>
          <li>
            <strong>Vacinas e papelada.</strong> Viajar pela UE exige um passaporte pet europeu em dia ou um
            certificado zoossanitário; a reentrada nos EUA exige agora o formulário de importação do CDC. Os dois
            levam semanas — comece 3 meses antes.
          </li>
          <li>
            <strong>Seguro.</strong> Um adicional de seguro-viagem que cubra o pet é barato e vale a pena; apólices
            padrão não cobrem emergências veterinárias no exterior.
          </li>
          <li>
            <strong>Restaurantes.</strong> França e Itália aceitam cães quase universalmente; Espanha e Reino Unido
            variam por estabelecimento; os EUA são os mais restritivos. Planeje os jantares de acordo.
          </li>
          <li>
            <strong>Atividades.</strong> A maioria dos clássicos de lua de mel — passeios de barco no pôr do sol,
            tours por vinícolas, dias de spa — não aceita cães. Monte a viagem em torno de caminhadas, trajetos de
            carro e almoços longos em vez de pacotes de atividades.
          </li>
        </ul>

        <h2>O veredito honesto</h2>
        <p>
          Uma lua de mel com cachorro não é uma lua de mel pela metade — é uma lua de mel de outro formato. Mais
          lenta, mais doméstica, com mais terraços e menos pacotes de atividades. Os casais que fazem isso bem
          começam pelo cachorro, escolhem um dos poucos países que de fato acomoda pets no nível luxo e combinam
          este guia com o complementar do lado dos hotéis,{' '}
          <a href={SISTER_GUIDE} target="_blank" rel="noopener">
            Lua de mel com pet no HotelsWithPets.com
          </a>
          . O resultado costuma ser a lua de mel mais relaxante que qualquer um dos dois já teve — o que, pensando
          bem, é exatamente o ponto.
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

      <div className="mt-16 bg-rose-50/40 border border-rose-100 rounded-2xl p-7">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-3">Site irmão</p>
        <h3 className="font-display text-2xl text-zinc-900 mb-2">
          A base completa de hotéis pet-friendly está aqui.
        </h3>
        <p className="text-zinc-600 text-sm leading-relaxed mb-5">
          O HotelsWithPets.com é nossa publicação irmã — mesma equipe editorial, mesma abordagem honesta de
          avaliação, dedicada aos melhores hotéis do mundo para quem viaja com pet. Se a sua lua de mel inclui um
          cachorro, comece por lá.
        </p>
        <a
          href={SISTER_GUIDE}
          target="_blank"
          rel="noopener"
          className="inline-block bg-rose-500 hover:bg-rose-600 text-white font-semibold text-sm px-6 py-3 rounded-full transition-colors"
        >
          Ler o guia complementar no HotelsWithPets.com →
        </a>
      </div>

      <div className="mt-12 text-center">
        <Link href="/pt/destinations" className="text-rose-500 hover:underline text-sm font-semibold">
          ← Voltar a todos os destinos de lua de mel
        </Link>
      </div>
    </div>
  )
}
