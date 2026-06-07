import type { Metadata } from 'next'
import Link from 'next/link'
import { buildAlternates } from '@/lib/alternates'
import AuthorByline from '@/components/AuthorByline'
import { AUTHOR } from '@/data/author'

export const metadata: Metadata = {
  title: 'Luna de miel todo incluido: ¿vale la pena?',
  description:
    'La opinión honesta sobre el todo incluido en luna de miel — dónde cumple (Caribe, México, Maldivas), dónde evitarlo (Europa, Bali, safari), tres categorías y seis hoteles.',
  alternates: buildAlternates('/all-inclusive-honeymoon', 'es'),
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  inLanguage: 'es',
  headline: 'Luna de miel todo incluido: ¿vale la pena o no?',
  description:
    'Una mirada honesta y por regiones al todo incluido para una luna de miel — dónde aporta lujo real, dónde es un retroceso, tres categorías y los seis hoteles que reservaríamos.',
  author: { '@type': 'Person', name: AUTHOR.name, url: AUTHOR.url, jobTitle: AUTHOR.role },
  publisher: {
    '@type': 'Organization',
    name: 'My Honeymoon Hotel',
    logo: { '@type': 'ImageObject', url: 'https://myhoneymoonhotel.com/icon.png' },
  },
  datePublished: '2026-06-07',
  dateModified: '2026-06-07',
  mainEntityOfPage: 'https://myhoneymoonhotel.com/es/all-inclusive-honeymoon',
}

const faqs = [
  {
    question: '¿Vale la pena el todo incluido para una luna de miel?',
    answer:
      'Depende totalmente del destino. En el Caribe y México, un todo incluido de categoría media o ultra (Excellence, Jade Mountain, Belmond Maroma) suele ser el formato más relajante — comidas, bebidas, servicio de playa, sin estar pagando cuentas. En Europa, Bali o Tailandia, el todo incluido casi siempre es un retroceso, porque la escena gastronómica local es la experiencia y el resort los retiene en su propiedad para maximizar margen.',
  },
  {
    question: '¿Cuál es el mejor resort todo incluido para luna de miel?',
    answer:
      'Ultra-lujo: Jade Mountain en Santa Lucía y los Cheval Blanc en Maldivas. Media solo adultos: Excellence Punta Cana, Sandals Royal Plantation Jamaica y Couples Swept Away en Negril. Para el Caribe con presupuesto contenido: Curtain Bluff (Antigua) y Hermitage Bay ofrecen más romanticismo por dólar que casi cualquier equivalente a la carta.',
  },
  {
    question: '¿Son mejores los solo adultos?',
    answer:
      'Para una luna de miel, casi siempre sí. Solo adultos filtra la energía kids-club del mass-market, sube la tarifa media y permite al resort programar cenas y entretenimiento alrededor de las parejas. Sandals (couples only), Excellence, Couples y la mayoría del ultra caribeño funcionan así. La excepción es el todo incluido maldiviano, donde cada villa ya es lo bastante privada.',
  },
  {
    question: '¿Incluye excursiones?',
    answer:
      'Casi nunca en la entrada y solo a veces en ultra. Sandals y Couples incluyen deportes acuáticos no motorizados (kayak, snorkel) y actividades grupales. Los ultra como Jade Mountain incluyen algunas experiencias propias pero cobran las externas. Lean siempre la hoja de inclusiones — "todo incluido" cubre comida, bebida y propinas; las excursiones suelen ir aparte.',
  },
  {
    question: '¿Todo incluido o media pensión en Maldivas?',
    answer:
      'Para una luna de miel maldiviana, el todo incluido casi siempre es la jugada inteligente. Los resorts ocupan islas privadas sin alternativa de cena fuera, los precios a la carte son brutales (40 USD el desayuno, 200 USD la cena para dos) y el suplemento de todo incluido (200-400 USD/pareja/día) se amortiza al almuerzo del segundo día. La media pensión solo tiene sentido si planean saltarse el almuerzo cada día.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'es',
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
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://myhoneymoonhotel.com/es' },
    { '@type': 'ListItem', position: 2, name: 'Luna de miel todo incluido', item: 'https://myhoneymoonhotel.com/es/all-inclusive-honeymoon' },
  ],
}

const hotelPicks = [
  { href: '/es/hotels/excellence-punta-cana-dominican-republic', name: 'Excellence Punta Cana', dest: 'República Dominicana', tier: 'Media · 400–700 USD/noche', why: 'Solo adultos, suites swim-up, cuatro piscinas y un programa gastronómico lo bastante serio para no querer salir del resort.' },
  { href: '/es/hotels/curtain-bluff-antigua', name: 'Curtain Bluff', dest: 'Antigua', tier: 'Media · 900–1.400 USD/noche', why: 'La gran dama del todo incluido caribeño — dos playas privadas, programa de tenis serio y bodega con burdeos añejos.' },
  { href: '/es/hotels/hermitage-bay-antigua', name: 'Hermitage Bay', dest: 'Antigua', tier: 'Media · 1.000–1.600 USD/noche', why: 'Refugio solo adultos en la playa más salvaje de Antigua — escala boutique, pensión completa y la cena más romántica del Caribe AI.' },
  { href: '/es/hotels/couples-swept-away-jamaica', name: 'Couples Swept Away', dest: 'Negril, Jamaica', tier: 'Entrada · 350–550 USD/noche', why: 'El todo incluido solo parejas original — Seven Mile Beach, sin niños, la mejor relación valor del Caribe.' },
  { href: '/es/hotels/sandals-royal-plantation-jamaica', name: 'Sandals Royal Plantation', dest: 'Ocho Ríos, Jamaica', tier: 'Media · 700–1.000 USD/noche', why: 'El Sandals más pequeño, tranquilo y refinado — 74 suites frente al mar, mayordomo en todas, la marca sin la escala de convención.' },
  { href: '/es/hotels/cocobay-resort-antigua', name: 'Cocobay Resort', dest: 'Antigua', tier: 'Entrada · 400–650 USD/noche', why: 'Solo adultos antiguano en cabañas con las mejores plunge pools bajo 700 USD — el valor real sin escala resort.' },
]

export default function AllInclusiveHoneymoonPageES() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">Guía de planificación</p>
      <h1 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-6 leading-tight">
        Luna de miel todo incluido: ¿vale la pena o no?
      </h1>
      <p className="text-zinc-500 text-lg leading-relaxed mb-2">
        La respuesta honesta a "¿vale la pena el todo incluido para una luna de miel?" no es sí o no — es{' '}
        <em>dónde</em>. El mismo formato que aporta valor real en Santa Lucía o Maldivas se vuelve un retroceso en
        Provenza o Bali, y la mayoría de las guías aplastan este matiz en una mala recomendación en cualquier
        dirección. Esta es la versión regional, por categoría, honesta.
      </p>

      <AuthorByline />

      <div className="prose prose-zinc max-w-none prose-headings:font-display prose-headings:text-zinc-900 prose-p:text-zinc-600 prose-p:leading-relaxed prose-a:text-rose-500 prose-a:no-underline hover:prose-a:underline mt-10">

        <h2>Dónde brilla el todo incluido</h2>
        <p>
          Cuatro regiones donde el formato es, en el cómputo, la jugada inteligente. El hilo común: aislamiento. Cuando
          salir del resort para una cena creíble es difícil, el todo incluido elimina la fricción y la luna de miel
          ocurre sin estorbos.
        </p>

        <h3><Link href="/es/destinations/st-lucia">Santa Lucía</Link></h3>
        <p>
          Los resorts con vista a los Pitones (Jade Mountain, Ladera, Sugar Beach) están lo bastante lejos de cualquier
          pueblo como para que cenar fuera sean 45 minutos en coche, y la cocina interna en el tope es genuinamente
          de nivel Michelin. La isla más fotogénica del Caribe y la respuesta más fácil a "solo adultos todo incluido
          que no se sienta mass-market".
        </p>

        <h3><Link href="/es/destinations/antigua">Antigua</Link> y <Link href="/es/destinations/jamaica">Jamaica</Link></h3>
        <p>
          Antigua concentra la mayor densidad de todo incluido a escala pequeña y creíble para parejas — Curtain Bluff,
          Hermitage Bay, Galley Bay, Cocobay. Jamaica es el mercado original (Sandals y Couples nacieron aquí) y las
          propiedades solo adultos entregan más romanticismo por dólar que casi cualquier otro destino.
        </p>

        <h3><Link href="/es/destinations/turks-and-caicos">Turcas y Caicos</Link></h3>
        <p>
          La escena AI caribeña más reciente — Blue Haven, Beaches, Alexandra. Grace Bay está entre las playas más
          bellas del mundo y los todo incluido son una buena alternativa de "ahorro de vuelo" frente a Santa Lucía para
          parejas norteamericanas.
        </p>

        <h3><Link href="/es/destinations/mexico">México</Link> — Riviera Maya y Los Cabos</h3>
        <p>
          La Riviera Maya es el mercado AI más grande del planeta y el pulido del tope (Belmond Maroma, Rosewood
          Mayakoba, los "El Dorado") es realmente alto. Cabo es más a la carta, pero Pueblo Bonito y otros operan
          buenos AI solo adultos.
        </p>

        <h3><Link href="/es/destinations/maldives">Maldivas</Link> — el caso especial</h3>
        <p>
          Una categoría aparte. Cada resort maldiviano es una isla privada sin opción gastronómica externa — el todo
          incluido es de facto el único formato sensato. Los precios a la carta son brutales y el suplemento se
          amortiza al almuerzo del segundo día. Reservarlo.
        </p>

        <h2>Dónde evitarlo</h2>
        <p>
          El reverso. Cinco regiones donde el todo incluido casi siempre es un retroceso — porque la comida, la cultura
          o la experiencia fuera del resort <em>es</em> la luna de miel, y encerrarse en el buffet de la propiedad
          significa renunciar deliberadamente al país.
        </p>
        <ul>
          <li><strong>Europa (toda).</strong> Provenza, Toscana, Santorini, costa Amalfitana — el almuerzo bajo plátanos, la trattoria del pueblo, el ritmo barco-club-de-playa son el sentido completo. Los pocos AI europeos operan en mass-market y la cocina no compite con el restaurante del pueblo de al lado.</li>
          <li><strong>Bali y Tailandia.</strong> La comida de calle y la escena warung-templo es lo que vuelve estos países una luna de miel. Los AI que existen son correctos pero pagan pensión completa para saltarse lo irreemplazable.</li>
          <li><strong>Safari africano.</strong> El AI safari es estructuralmente distinto — el game drive marca las comidas, la cena en lodge es comunal y "todo incluido" significa comidas más dos game drives diarios, prácticamente obligatorio. Categoría aparte.</li>
          <li><strong>Japón.</strong> El ryokan es pensión completa (kaiseki y desayuno tradicional) pero no es "all-inclusive" — y cada comida fuera del ryokan es una experiencia cultural innegociable. Reserven ryokan por el formato y eviten lo etiquetado como todo incluido.</li>
          <li><strong>Italia, Francia, Grecia, España costeras.</strong> Misma lógica europea — las villas y pequeños hoteles costeros existen precisamente para que caminen al restaurante del puerto. El AI elimina lo único que hace mediterránea a una luna de miel mediterránea.</li>
        </ul>

        <h2>Las tres categorías honestas</h2>

        <h3>Entrada · 250-500 USD/noche AI</h3>
        <p>
          Sandals mass-market, Iberostar, RIU, Excellence Riviera Cancún, Couples Negril. Bebidas marca propia, cuatro
          restaurantes en rotación, a veces kids-club (evítenlo si no es solo adultos), buffet correcto pero no es el
          motivo de venir. Opción valor; no el tope romántico. Coste total 7 noches para dos con vuelos económicos
          desde EE. UU.: 4.000-7.000 USD.
        </p>

        <h3>Media · 500-1.200 USD/noche AI</h3>
        <p>
          El punto óptimo. Excellence Punta Cana, Couples Swept Away,{' '}
          <Link href="/es/hotels/sandals-royal-plantation-jamaica">Sandals Royal Plantation</Link>, Hermitage Bay,
          Galley Bay, Curtain Bluff. Solo adultos (en su mayoría), barra premium, cuatro a siete restaurantes
          creíbles, mayordomo o concierge en habitaciones altas, spa real, deportes acuáticos no motorizados incluidos.
          Coste total 7 noches: 8.000-15.000 USD todo incluido.
        </p>

        <h3>Ultra · 1.500 USD+/noche AI</h3>
        <p>
          Los hoteles que casualmente son todo incluido, no los todo incluido que casualmente son de lujo.{' '}
          <Link href="/es/hotels/jade-mountain-st-lucia">Jade Mountain</Link>,{' '}
          <Link href="/es/hotels/ladera-resort-st-lucia">Ladera</Link>, Sugar Beach (Viceroy), Cheval Blanc Randheli
          (en formato AI). Santuarios al aire libre, pensión completa con cocina nivel Michelin, plunge pools privadas,
          mayordomo en todas, el resort es el destino. Coste total 7 noches: 18.000-35.000 USD+.
        </p>

        <h2>Los 6 que reservaríamos</h2>

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

        <h2>Qué incluye realmente "todo incluido"</h2>
        <ul>
          <li><strong>Bebidas:</strong> sí — pero en entrada, solo marcas propias. Destilados premium y vinos de calidad son extra.</li>
          <li><strong>Comidas:</strong> sí — pero los restaurantes de especialidad son con reserva y limitados a una o dos visitas por semana.</li>
          <li><strong>Spa:</strong> casi nunca. Un masaje de bienvenida es marketing; el resto es a la carta.</li>
          <li><strong>Actividades:</strong> deportes acuáticos no motorizados sí; motorizados (jet ski, buceo) casi nunca.</li>
          <li><strong>Wifi:</strong> normalmente incluido, a veces premium upsell en resorts antiguos.</li>
          <li><strong>Propinas:</strong> a veces incluidas (Sandals, Couples), a veces esperadas aparte.</li>
          <li><strong>Excursiones:</strong> casi nunca incluidas. Presupuesten 200-500 USD/pareja.</li>
        </ul>

        <h2>Realidad del coste</h2>
        <p>
          Una luna de miel caribeña media de 7 noches AI para dos, vuelos económicos desde la costa este de EE.&nbsp;UU.:
          8.000-14.000 USD todo incluido. Lo mismo en ultra (Jade Mountain, Ladera): 20.000-32.000 USD. Comparativa:
          una Maldivas a la carta (Conrad Rangali, media pensión) más vuelos sale por 18.000-25.000 USD; la misma en
          AI: 22.000-30.000 USD — el suplemento se paga solo.
        </p>

        <h2>El veredicto honesto</h2>
        <p>
          Dejen de preguntar "¿vale el todo incluido?" y empiecen a preguntar "¿funciona el destino como circuito
          cerrado?". En el Caribe, México y Maldivas la respuesta es casi siempre sí — y el AI medio solo adultos es
          uno de los formatos más relajantes del viaje de lujo. En Europa, Asia y safari, la respuesta es casi siempre
          no, y deben reservar a la carta. Acierten en ese filtro y el resto será fácil.
        </p>

      </div>

      <section className="mt-16">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">FAQ</p>
        <h2 className="font-display text-3xl text-zinc-900 mb-8">Preguntas frecuentes</h2>
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
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-3">Explorar el catálogo</p>
        <h3 className="font-display text-2xl text-zinc-900 mb-4">Todos los hoteles todo incluido de luna de miel, puntuados.</h3>
        <Link
          href="/es/experiences/all-inclusive"
          className="inline-block bg-rose-500 hover:bg-rose-600 text-white font-semibold text-sm px-6 py-3 rounded-full transition-colors"
        >
          Ver todos los hoteles todo incluido →
        </Link>
      </div>

      <div className="mt-12 text-center">
        <Link href="/es/destinations" className="text-rose-500 hover:underline text-sm font-semibold">
          ← Todos los destinos de luna de miel
        </Link>
      </div>
    </div>
  )
}
