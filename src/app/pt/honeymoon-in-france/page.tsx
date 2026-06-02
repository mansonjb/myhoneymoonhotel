import type { Metadata } from 'next'
import Link from 'next/link'
import { buildAlternates } from '@/lib/alternates'
import AuthorByline from '@/components/AuthorByline'
import { AUTHOR } from '@/data/author'

export const metadata: Metadata = {
  title: 'Lua de mel na França: o guia honesto 2026',
  description:
    'A França é o destino de lua de mel nº 1 da Europa. Provence, Côte d\'Azur, castelos do Loire, Champagne — as regiões, os hotéis, o orçamento real.',
  alternates: buildAlternates('/honeymoon-in-france', 'pt'),
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  inLanguage: 'pt-BR',
  headline: 'Lua de mel na França: o guia honesto 2026.',
  description:
    'Um guia regional para uma lua de mel francesa — Provence, Côte d\'Azur, castelos do Loire, Champagne — com os hotéis que realmente reservaríamos, orçamentos reais e as regras não escritas de quando ir.',
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
  mainEntityOfPage: 'https://myhoneymoonhotel.com/pt/honeymoon-in-france',
}

const faqs = [
  {
    question: 'A França é clichê demais para uma lua de mel?',
    answer:
      'A França não é clichê — é dominante. A combinação de cultura gastronômica, infraestrutura ferroviária, inventário de castelos-hotel e herança de glamour da Riviera dá à França o catálogo de lua de mel mais profundo da Europa, e o que parece clichê de longe se dissolve na chegada em especificidade (o Loire não tem nada a ver com a Provence, que não tem nada a ver com a Côte d\'Azur). O risco real é fazer França genericamente — Paris mais uma semana vaga no sul — em vez de se comprometer com uma ou duas regiões com intenção.',
  },
  {
    question: 'Côte d\'Azur ou Provence?',
    answer:
      'Côte d\'Azur se você quer palácios Belle Époque, cultura de iates e a herança de glamour mediterrâneo — praias de pedras, jantares de design, Cap-Eden-Roc e Cap-Ferrat no topo. Provence se você quer campos de lavanda, vilarejos no alto de colinas, almoços lentos sob plátanos e o formato luxo rural — Domaine de Manville, La Bastide de Gordes. Muitos casais fazem os dois: três noites na Provence, três na costa. A estrada entre os dois leva duas horas e o contraste é justamente o ponto.',
  },
  {
    question: 'Qual a melhor época para uma lua de mel na França?',
    answer:
      'De meados de maio ao fim de junho e todo o mês de setembro. Maio e junho oferecem dias longos, jardins no auge e multidões civilizadas; setembro oferece mar quente, menor densidade turística e a vindima na Champagne e no Loire. Evite do 14 de julho à terceira semana de agosto, a menos que você queira ativamente o pico das férias francesas — a Côte d\'Azur fica genuinamente difícil, e os preços dobram em todo o país.',
  },
  {
    question: 'Quanto custa uma lua de mel de luxo na França?',
    answer:
      'Uma lua de mel de duas semanas de luxo (hotéis nível palácio, voos em classe executiva, transfers privados, três jantares Michelin) custa US$ 35 mil a US$ 60 mil por casal. As mesmas duas semanas no Loire e Champagne com uma escala na Côte d\'Azur custam US$ 18 mil a US$ 30 mil. O Loire é a região genuinamente subprecificada — propriedades Relais & Châteaux 5 estrelas a € 450-700 por noite contra € 1.500-2.500 para qualidade equivalente na costa.',
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
    { '@type': 'ListItem', position: 2, name: 'Lua de mel na França', item: 'https://myhoneymoonhotel.com/pt/honeymoon-in-france' },
  ],
}

const hotelPicks = [
  { href: '/pt/hotels/hotel-du-cap-eden-roc-cote-dazur', name: 'Hôtel du Cap-Eden-Roc', region: 'Côte d\'Azur', why: 'O endereço mais lendário da Riviera — a piscina de água do mar, as cabanas, um século de legado cinematográfico.' },
  { href: '/pt/hotels/grand-hotel-du-cap-ferrat-cote-dazur', name: 'Grand-Hôtel du Cap-Ferrat', region: 'Côte d\'Azur', why: 'Palácio Four Seasons na península mais arborizada da costa — serviço mais caloroso que o Eden-Roc, cenário igualmente extraordinário.' },
  { href: '/pt/hotels/cheval-blanc-st-tropez-cote-dazur', name: 'Cheval Blanc St-Tropez', region: 'Saint-Tropez', why: 'Carro-chefe LVMH no coração do vilarejo, com a única praia de areia da cidade e a cozinha de três estrelas Michelin de Donckele.' },
  { href: '/pt/hotels/domaine-de-manville-provence', name: 'Domaine de Manville', region: 'Provence', why: 'Propriedade de olival sob Les Baux — vilas independentes com piscinas privativas, a escolha mais inteligente para Provence.' },
  { href: '/pt/hotels/domaine-des-hauts-de-loire-loire-valley', name: 'Domaine des Hauts de Loire', region: 'Vale do Loire', why: 'Propriedade de caça Relais & Châteaux perto de Chambord, uma estrela Michelin, 70 hectares de bosque.' },
  { href: '/pt/hotels/royal-champagne-hotel-spa-champagne', name: 'Royal Champagne Hotel & Spa', region: 'Champagne', why: 'Hotel panorâmico sobre os vinhedos de Épernay com a piscina infinita mais extraordinária do norte da França.' },
  { href: '/pt/hotels/domaine-les-crayeres-champagne', name: 'Domaine Les Crayères', region: 'Reims', why: 'Mansão Belle Époque com cozinha de duas estrelas Michelin — o carro-chefe histórico Relais da Champagne.' },
  { href: '/pt/hotels/chateau-de-la-chevre-dor-cote-dazur', name: 'Château de la Chèvre d\'Or', region: 'Èze', why: 'Vilarejo medieval no topo de uma falésia a 400 m acima do mar — o pôr do sol mais cinematográfico da França.' },
]

export default function HoneymoonInFrancePagePT() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">Guia de planejamento</p>
      <h1 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-6 leading-tight">
        Lua de mel na França: o guia honesto 2026.
      </h1>
      <p className="text-zinc-500 text-lg leading-relaxed mb-2">
        A França é o destino de lua de mel mais reservado da Europa — e o mais mal planejado. O país tem seis
        regiões, não uma só, e os casais que fazem a França direito se comprometem com duas ou três em vez de
        tentar costurar Paris-Provence-Côte d&apos;Azur em uma única semana. Veja como nós realmente
        planejaríamos.
      </p>

      <AuthorByline />

      <div className="prose prose-zinc max-w-none prose-headings:font-display prose-headings:text-zinc-900 prose-p:text-zinc-600 prose-p:leading-relaxed prose-a:text-rose-500 prose-a:no-underline hover:prose-a:underline mt-10">

        <h2>Por que a França é o destino de lua de mel nº 1 da Europa</h2>
        <p>
          A França vence em quatro vantagens estruturais que nenhum outro país europeu combina. Primeiro,
          gastronomia: cada região tem uma identidade culinária séria, e todo hotel de lua de mel relevante opera
          uma cozinha de nível Michelin. Segundo, infraestrutura: a rede TGV coloca a Champagne a 45 minutos de
          Paris, o Loire a 1 hora e a Côte d&apos;Azur a 5h 30 da mesma estação — nenhum outro país europeu
          facilita tanto o salto regional. Terceiro, inventário de castelos-hotel: a França tem mais propriedades
          Relais &amp; Châteaux que qualquer outro país (mais de 150), e a profundidade Loire-Provence é
          incomparável. Quarto, a Riviera: palácios Belle Époque como Cap-Eden-Roc, Cap-Ferrat e La Réserve de
          Beaulieu carregam um século de herança romântica que o resto do Mediterrâneo simplesmente não consegue
          igualar.
        </p>

        <h2>Onde fazer lua de mel na França</h2>
        <p>
          Seis regiões são plausíveis para lua de mel. Cada uma tem personalidade distinta e um teto de preço
          diferente. Combine a forma da viagem com seu gosto — palácio ou castelo, praia ou vinhedo, glamour
          costeiro ou lentidão rural.
        </p>

        <h3><Link href="/pt/destinations/provence">Provence</Link> — dolce vita ensolarada</h3>
        <p>
          O Luberon e os Alpilles — campos de lavanda, vilarejos de pedra no alto de colinas (Gordes, Ménerbes,
          Bonnieux), o formato luxo rural no seu melhor. La Bastide de Gordes, Domaine de Manville e Coquillade
          para a experiência Relais polida; Hotel Crillon le Brave para o hotel histórico do vilarejo. O ponto da
          Provence é o ritmo rural lento — feiras, almoços longos, vinhedos, cigarras. Melhor em maio-junho e
          setembro.
        </p>

        <h3><Link href="/pt/destinations/cote-dazur">Côte d&apos;Azur</Link> — glamour Belle Époque</h3>
        <p>
          A Riviera propriamente dita — Saint-Tropez, Cap-Ferrat, Cannes, Antibes, Èze, Mônaco. Praias de pedras,
          hotéis palácios, cultura de iates, jantares de nível Riviera. Hôtel du Cap-Eden-Roc e Grand-Hôtel du
          Cap-Ferrat são os carros-chefes arquitetônico-cinematográficos; Cheval Blanc St-Tropez e Château de la
          Chèvre d&apos;Or são as alternativas contemporânea e em falésia. O ponto da Côte d&apos;Azur é a herança
          de glamour. Melhor do fim de maio a junho e setembro; evite agosto a todo custo.
        </p>

        <h3><Link href="/pt/destinations/loire-valley">Vale do Loire</Link> — castelos renascentistas</h3>
        <p>
          A região de lua de mel mais subprecificada da França. O país dos castelos renascentistas — Chenonceau,
          Chambord, Cheverny — combinado com hotéis Relais 5 estrelas em castelos reais reais (Domaine des Hauts
          de Loire, Château d&apos;Artigny, Château de Pray). Uma hora de TGV de Paris. Metade do preço de
          propriedades equivalentes em Provence e Côte d&apos;Azur. Melhor de maio a setembro.
        </p>

        <h3><Link href="/pt/destinations/champagne">Champagne</Link> — beba na fonte</h3>
        <p>
          A lua de mel vinícola subestimada — 45 minutos de TGV de Paris a Reims, a catedral gótica e a Avenue de
          Champagne em Épernay. Krug, Bollinger, Veuve Clicquot, Pol Roger — visitas íntimas a caves e degustações
          de prestígio impossíveis de replicar em casa. Royal Champagne Hotel e Domaine Les Crayères são os
          carros-chefes. Mais calmo que a Borgonha, mais fácil que Bordeaux, mais romântico que qualquer outro
          lugar onde se faça vinho. Melhor de maio a outubro.
        </p>

        <h3>Paris (como escala, não como destino)</h3>
        <p>
          Paris é a abertura ou o encerramento universal de uma lua de mel francesa — duas ou três noites como
          complemento de uma etapa Champagne ou Loire, não o centro da semana. Le Bristol, o Ritz, o Crillon e o
          Cheval Blanc Paris são os endereços palácios. Combine com TGV ao sul depois de um longo fim de semana de
          museus e bistrôs. Não tratamos Paris como destino de lua de mel por si só — casais o fazem e adoram, mas
          a densidade romântica por dia é menor do que as regiões entregam.
        </p>

        <h2>O orçamento honesto</h2>
        <p>
          A diferença de preço entre regiões francesas é enorme. No topo, uma semana de pico no Hôtel du
          Cap-Eden-Roc custa US$ 1.800 a US$ 3.000 por noite para um quarto base com vista mar; a Suíte Bellini
          pode chegar a US$ 10.000 em agosto. Na ponta de valor, o Château de Pray no Loire custa € 280-450 por
          noite por uma estadia real num castelo do século XIII com cozinha de nível Michelin. A mesma forma de
          lua de mel — romance francês 5 estrelas — varia em cinco vezes por região. Duas semanas no topo da Côte
          d&apos;Azur custam US$ 35-60 mil por casal incluindo tudo; as mesmas duas semanas divididas entre Loire
          e Champagne custam US$ 18-28 mil. Loire e Champagne são as escolhas inteligentes da década — ambas a uma
          hora de Paris, ambas com inventário Relais &amp; Châteaux a metade do preço da Côte d&apos;Azur.
        </p>

        <h2>Quando ir</h2>
        <p>
          As janelas de lua de mel diferem por região. Côte d&apos;Azur e Provence vão de maio a outubro, mas
          agosto é impossível (calor, multidões, congestionamentos); as melhores janelas são meados de maio ao fim
          de junho e setembro a meados de outubro. Loire e Champagne vão de maio a outubro, com setembro se
          firmando como o mês secreto (vindima na Champagne, vinhas de outono no Loire, dias quentes e longos,
          multidões gerenciáveis). A regra não escrita da Côte d&apos;Azur é a mesma de Saint-Tropez: evite do 14
          de julho à terceira semana de agosto. A regra não escrita da Champagne é evitar a última semana de
          setembro (vendanges), quando as maisons trabalham em capacidade total e visitas são canceladas.
          Outubro, depois da vindima, é a versão mais calma e bonita da Champagne.
        </p>

        <h2>Os hotéis que realmente escolheríamos</h2>
        <p>
          Oito hotéis franceses de lua de mel para guardar. Cada um responde a uma pergunta diferente — palácio ou
          castelo, costa ou vinhedo, íntimo ou carro-chefe.
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
                <span className="text-xs uppercase tracking-wider text-rose-400 font-semibold shrink-0">{h.region}</span>
              </div>
              <p className="text-sm text-zinc-600 leading-relaxed">{h.why}</p>
            </Link>
          ))}
        </div>

        <h2>Modelos de itinerário</h2>

        <h3>O clássico Provence + Côte d&apos;Azur (7 noites)</h3>
        <p>
          3 noites no Domaine de Manville nos Alpilles — Les Baux, Saint-Rémy, Carrières des Lumières, lavanda se
          em temporada. Dirija 2 horas a leste até a costa. 4 noites no Grand-Hôtel du Cap-Ferrat — Villa
          Ephrussi, noite em Mônaco, dia em Saint-Paul-de-Vence e Fondation Maeght, barco privado para as Îles de
          Lérins. A semana clássica de lua de mel francesa: lentidão rural e depois glamour costeiro.
        </p>

        <h3>A rota dos castelos do Loire (5 noites)</h3>
        <p>
          5 noites no Domaine des Hauts de Loire em Onzain — dia Chambord e Cheverny, manhã em Chenonceau, Amboise
          e Clos Lucé, dia de vinhedos em Vouvray, jardins de Villandry. Opcional voo de balão ao amanhecer sobre
          Chambord. A lua de mel francesa com bom custo-benefício — experiência Relais 5 estrelas por metade do
          preço da Côte d&apos;Azur.
        </p>

        <h3>O fim de semana Paris + Champagne (3 noites)</h3>
        <p>
          1 noite em Paris (abertura no Le Bristol ou Ritz), 2 noites no Royal Champagne em Champillon — visita
          privada Krug ou Bollinger, dia da Avenue de Champagne, o spa com piscina infinita acima do vale do
          Marne. A lua de mel francesa mais curta que faz sentido — 45 minutos de TGV, três dias de caves
          lendárias e a melhor vista de vinhedos do norte da França.
        </p>

        <h2>Nossa opinião honesta</h2>
        <p>
          Uma lua de mel francesa funciona melhor quando é comprometida — duas regiões feitas direito em vez de
          cinco regiões num itinerário «Best of France». O país recompensa profundidade. Uma semana nos castelos
          do Loire ensina mais sobre a França do que uma quinzena pulando de canto em canto, e as tarifas de
          quartos no Loire e Champagne são baixas o suficiente para você ficar nos carros-chefes Relais &amp;
          Châteaux em vez dos hotéis de segunda linha com os quais você se contentaria na Côte d&apos;Azur.
          Escolha suas regiões, reserve os hotéis certos, coma bem, beba o vinho local e deixe o país fazer seu
          trabalho.
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
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-3">Comece a planejar</p>
        <h3 className="font-display text-2xl text-zinc-900 mb-4">Encontre seu hotel de lua de mel na França.</h3>
        <Link
          href="/pt/destinations"
          className="inline-block bg-rose-500 hover:bg-rose-600 text-white font-semibold text-sm px-6 py-3 rounded-full transition-colors"
        >
          Ver todos os destinos →
        </Link>
      </div>

      <div className="mt-12 text-center">
        <Link href="/pt/destinations" className="text-rose-500 hover:underline text-sm font-semibold">
          ← Voltar a todos os destinos
        </Link>
      </div>
    </div>
  )
}
