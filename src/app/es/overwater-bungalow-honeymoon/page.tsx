import type { Metadata } from 'next'
import Link from 'next/link'
import { buildAlternates } from '@/lib/alternates'
import AuthorByline from '@/components/AuthorByline'
import { AUTHOR } from '@/data/author'

export const metadata: Metadata = {
  title: 'Luna de miel en bungalows sobre el agua: guía 2026',
  description:
    'Maldivas, Bora Bora, Polinesia, Fiyi, Belice, México e Indonesia: dónde están los bungalows reales, tres categorías de precio y los ocho hoteles que reservaríamos.',
  alternates: buildAlternates('/overwater-bungalow-honeymoon', 'es'),
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  inLanguage: 'es',
  headline: 'La luna de miel en bungalow sobre el agua: la guía honesta 2026.',
  description:
    'Una guía regional y por categorías de las lunas de miel en bungalows sobre el agua: dónde existen realmente, cuánto cuestan, los ocho hoteles que reservaríamos y las realidades que los folletos omiten.',
  author: { '@type': 'Person', name: AUTHOR.name, url: AUTHOR.url, jobTitle: AUTHOR.role },
  publisher: {
    '@type': 'Organization',
    name: 'My Honeymoon Hotel',
    logo: { '@type': 'ImageObject', url: 'https://myhoneymoonhotel.com/icon.png' },
  },
  datePublished: '2026-06-07',
  dateModified: '2026-06-07',
  mainEntityOfPage: 'https://myhoneymoonhotel.com/es/overwater-bungalow-honeymoon',
}

const faqs = [
  {
    question: '¿Vale la pena un bungalow sobre el agua?',
    answer:
      'Sí, pero solo en la categoría y el destino adecuados. Una habitación de nivel básico a 700 USD la noche en Bora Bora no es el mismo producto que una villa Soneva Jani de 4.000 USD, y muchas parejas que reservan la entrada vuelven decepcionadas porque esperaban la versión del folleto. Las villas que realmente cumplen están entre 1.500 y 3.000 USD la noche, con piscina privada, orientación al atardecer y acceso directo a la laguna.',
  },
  {
    question: '¿Maldivas o Bora Bora?',
    answer:
      'Maldivas por la claridad del agua, la vida marina, la exclusividad de un atolón por resort y el inventario más amplio del mundo (90% del parque global). Bora Bora por la silueta del monte Otemanu, la cultura polinesia y la cuna original del formato. Maldivas se siente irreal; Bora Bora se siente cinematográfica. Elija Maldivas si quiere una isla privada y aislamiento total; elija Bora Bora si quiere el Otemanu detrás de cada foto.',
  },
  {
    question: '¿Pueden bañarse desde la terraza?',
    answer:
      'En casi todas las villas, sí: una escalera baja directamente a la laguna. Pero la experiencia varía mucho. Las villas premium se sitúan sobre arena clara o coral con 20-30 m de visibilidad; las de entrada a veces sobre praderas marinas o canales turbios. Confirme siempre la claridad de la laguna antes de reservar, no solo el estilo de la villa.',
  },
  {
    question: '¿Cuánto cuesta una luna de miel de 7 noches sobre el agua?',
    answer:
      'Presupuesto realista para una pareja, vuelos, traslados y una excursión incluidos: 9.000-14.000 USD en entrada (Le Moana Bora Bora, Ayada Maldivas); 18.000-30.000 USD en media (Conrad Maldivas Rangali, Four Seasons Bora Bora); 40.000-70.000 USD+ en ultra (Soneva Jani, Cheval Blanc Randheli). El traslado en Maldivas (hidroavión o vuelo doméstico) añade 400-1.000 USD por pareja.',
  },
  {
    question: '¿Son seguros en tormentas?',
    answer:
      'Sí. Las villas modernas están diseñadas para resistir tormentas tropicales y los resorts cierran o evacuan mucho antes de cualquier ciclón. El riesgo real no es la seguridad sino la decepción: un cielo nublado anula la experiencia del suelo de cristal, y la lluvia sobre techo de palma es romántica o desvelante según el sueño. Viaje en las ventanas secas que recomendamos abajo y el riesgo es mínimo.',
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
    { '@type': 'ListItem', position: 2, name: 'Luna de miel en bungalow sobre el agua', item: 'https://myhoneymoonhotel.com/es/overwater-bungalow-honeymoon' },
  ],
}

const hotelPicks = [
  { href: '/es/hotels/conrad-maldives-rangali-island', name: 'Conrad Maldives Rangali Island', dest: 'Maldivas', tier: 'Media · 1.500 USD/noche', why: 'Resort de dos islas, restaurante submarino y la versión media más refinada de las Maldivas.' },
  { href: '/es/hotels/four-seasons-bora-bora', name: 'Four Seasons Resort Bora Bora', dest: 'Bora Bora', tier: 'Media · 2.000 USD/noche', why: 'Villas con vista al Otemanu, el fondo más limpio de Bora Bora y el mejor servicio de la isla.' },
  { href: '/es/hotels/soneva-jani-maldives', name: 'Soneva Jani', dest: 'Maldivas', tier: 'Ultra · 4.000 USD+/noche', why: 'Villas de dos plantas con techo retráctil sobre la cama y tobogán desde la cubierta superior — la luna de miel sobre el agua más espectacular del mundo.' },
  { href: '/es/hotels/cheval-blanc-randheli-maldives', name: 'Cheval Blanc Randheli', dest: 'Maldivas', tier: 'Ultra · 4.500 USD+/noche', why: 'Buque insignia de LVMH: interiores Christian Liaigre, cuatro restaurantes y el servicio de mayordomo más pulido del segmento.' },
  { href: '/es/hotels/gili-lankanfushi-maldives', name: 'Gili Lankanfushi Maldives', dest: 'Maldivas', tier: 'Ultra · 2.800 USD/noche', why: 'La referencia "no news, no shoes": villas de palma unidas por pasarelas, lujo descalzo sin teatralidad.' },
  { href: '/es/hotels/intercontinental-le-moana-bora-bora-resort-bora-bora', name: 'InterContinental Le Moana Bora Bora', dest: 'Bora Bora', tier: 'Entrada · 800 USD/noche', why: 'El clásico de Matira Point — la forma más asequible de vivir el sueño Bora Bora sin verdadero recorte en la laguna.' },
  { href: '/es/hotels/cayo-espanto-belize', name: 'Cayo Espanto', dest: 'Belice', tier: 'Ultra · 2.500 USD+/noche', why: 'Diminuta isla privada frente a Ambergris — la nueva frontera del overwater para parejas que prefieren el Caribe.' },
  { href: '/es/hotels/huvafen-fushi-maldives', name: 'Huvafen Fushi', dest: 'Maldivas', tier: 'Media · 1.800 USD/noche', why: 'Maldivas solo adultos con el primer spa submarino del mundo — la opción para lujo sin niños en la isla.' },
]

export default function OverwaterBungalowHoneymoonPageES() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">Guía de planificación</p>
      <h1 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-6 leading-tight">
        La luna de miel en bungalow sobre el agua: la guía honesta 2026.
      </h1>
      <p className="text-zinc-500 text-lg leading-relaxed mb-2">
        Nació en el Hotel Bora Bora en 1967: tres hoteleros californianos pusieron una hilera de chozas de palma sobre
        pilotes en una laguna e inventaron por accidente la habitación más fotografiada del viaje de lujo. Seis décadas
        después, el bungalow sobre el agua sigue siendo el icono, pero no todos son iguales y la distancia entre el
        folleto y una villa real de entrada a 700 USD es mayor de lo que parece. Este es el mapa honesto.
      </p>

      <AuthorByline />

      <div className="prose prose-zinc max-w-none prose-headings:font-display prose-headings:text-zinc-900 prose-p:text-zinc-600 prose-p:leading-relaxed prose-a:text-rose-500 prose-a:no-underline hover:prose-a:underline mt-10">

        <h2>Dónde están los verdaderos bungalows sobre el agua</h2>
        <p>
          Pese al ruido del marketing, solo seis destinos del mundo tienen un parque significativo de villas
          construidas para esto. El resto son hoteles aislados haciéndose pasar por región.
        </p>

        <h3><Link href="/es/destinations/maldives">Maldivas</Link> — el arquetipo del atolón</h3>
        <p>
          Maldivas concentra alrededor del 90% del parque mundial. Cada resort ocupa su propio atolón: la ventaja
          estructural que ningún otro destino iguala — ustedes nunca ven otro hotel desde su villa. El agua es la más
          clara del mundo (25-30 m de visibilidad), la variedad de villas es la más profunda y la categoría ultra
          (Soneva Jani, Cheval Blanc Randheli, Joali) juega sola.
        </p>

        <h3><Link href="/es/destinations/bora-bora">Bora Bora</Link> — la cuna</h3>
        <p>
          El formato nació aquí en 1967. La silueta del monte Otemanu sigue siendo el fondo más cinematográfico del
          género y, para parejas norteamericanas, la ruta (LAX-PPT directo y luego 50 minutos doméstico a BOB) es
          mucho más simple que Maldivas. El parque es menor — cinco resorts con stock relevante — pero la foto
          "montaña y laguna" es la que la mayoría lleva en la cabeza.
        </p>

        <h3><Link href="/es/destinations/french-polynesia">Polinesia Francesa</Link> — las hermanas más tranquilas</h3>
        <p>
          Moorea y Taha&apos;a — las hermanas menos conocidas de Bora Bora. Moorea está a 30 minutos en ferry de Tahití
          y tiene un resort overwater (Hilton). Taha&apos;a, entre Bora Bora y Raiatea, alberga Le Taha&apos;a by Pearl
          Resorts — villas con vista directa a la silueta de Bora Bora. Ambas son un 30% más asequibles que Bora Bora.
        </p>

        <h3><Link href="/es/destinations/fiji">Fiyi</Link> — más cerca para australianos y norteamericanos</h3>
        <p>
          El parco fiyiano es pequeño (Likuliku Lagoon Resort es el único overwater real) pero la ruta — 10 horas desde
          LAX, 4 desde Sídney — lo convierte en la opción inteligente del Pacífico Sur cuando Bora Bora queda lejos o
          caro. Laguna más somera y vida marina menos espectacular que en Maldivas, pero el techo tarifario es más bajo.
        </p>

        <h3><Link href="/es/destinations/mexico">México</Link> — la excepción Riviera Maya</h3>
        <p>
          Los Palafitos de El Dorado Maroma en la Riviera Maya son los únicos bungalows sobre el agua de Norteamérica —
          una excepción arquitectónica genuina, comercializada como "El Dorado" para parejas norteamericanas que no
          pueden o no quieren volar long-haul. La laguna está calmada por un muro de arrecife; la experiencia es mitad
          overwater, mitad resort, ideal para quien quiere la foto sin las 22 horas de vuelo.
        </p>

        <h3><Link href="/es/destinations/belize">Belice</Link> — la nueva frontera</h3>
        <p>
          La pequeña escena overwater de Belice es la historia de la próxima década —{' '}
          <Link href="/es/hotels/cayo-espanto-belize">Cayo Espanto</Link> ocupa un cayo privado frente a Ambergris con
          siete villas (incluida la "Casa Ventanas" sobre el agua) y un puñado de propiedades junto a la barrera de
          coral han seguido. Belice es el destino overwater anglófono más cercano a EE. UU. y el buceo es el mejor del
          Caribe.
        </p>

        <h3><Link href="/es/destinations/indonesia">Indonesia</Link> — Misool y los overwater de Raja Ampat</h3>
        <p>
          El parque indonesio se concentra en Raja Ampat — Misool Resort y algunas hermanas en el arrecife más
          biodiverso del planeta. Es el extremo más salvaje del género: villas de madera artesanales, a veces sin aire
          acondicionado, y 36 horas de viaje desde Europa o América. Para buzos y parejas que buscan lo realmente
          remoto, no hay comparación.
        </p>

        <h2>Las tres categorías</h2>

        <h3>Entrada · 700-1.000 USD/noche</h3>
        <p>
          InterContinental Le Moana Bora Bora, Ayada Maldivas, Hilton Moorea. Habitación real sobre el agua con cubierta
          y acceso directo a la laguna — sin piscina privada, a veces orientación compartida del atardecer, a veces una
          villa algo más antigua. La laguna es la misma. La villa hace la foto. Para un presupuesto de 10.000-14.000
          USD todo incluido por semana, esta categoría cumple sin exagerar.
        </p>

        <h3>Media · 1.500-2.500 USD/noche</h3>
        <p>
          <Link href="/es/hotels/conrad-maldives-rangali-island">Conrad Maldives Rangali Island</Link>,{' '}
          <Link href="/es/hotels/four-seasons-bora-bora">Four Seasons Bora Bora</Link>, Anantara Veli,{' '}
          <Link href="/es/hotels/huvafen-fushi-maldives">Huvafen Fushi</Link>. Piscina privada en la cubierta,
          orientación al atardecer garantizada, suelo de cristal, servicio completo en la villa. El punto óptimo — la
          categoría donde la habitación se convierte en toda la luna de miel.
        </p>

        <h3>Ultra · 4.000 USD+/noche</h3>
        <p>
          <Link href="/es/hotels/soneva-jani-maldives">Soneva Jani</Link>,{' '}
          <Link href="/es/hotels/cheval-blanc-randheli-maldives">Cheval Blanc Randheli</Link>, Joali, Velaa. Villas de
          dos plantas, techos retráctiles, chef privado bajo demanda, mayordomo en la isla toda la semana. La luna de
          miel como declaración — 40.000-70.000 USD todo incluido por siete noches.
        </p>

        <h2>Lo que nadie cuenta</h2>
        <ul>
          <li><strong>Sol y mar envejecen la villa.</strong> Palma, teca y pino barnizado se desgastan rápido en el trópico. Los resorts premium renuevan villas cada 4-6 años; los de entrada esperan 8-9. La foto del folleto y la villa donde duermen pueden ser versiones distintas.</li>
          <li><strong>Mosquitos al atardecer.</strong> La laguna no tiene; la cubierta a las 18:30 sí, especialmente tras lluvia. Lleven DEET o prepárense para entrar a la hora justa en que querían salir.</li>
          <li><strong>Decepción del suelo de cristal.</strong> Con sol es un acuario vivo; con nubes es una plancha oscura. Anticipen, y verifiquen la orientación (sobre arena vs. coral lo cambia todo).</li>
          <li><strong>Ruido del océano de noche.</strong> El chapoteo bajo la villa a las 2 am es el sonido más relajante del mundo o un asesino del sueño. Si duermen ligero, consideren una villa de playa.</li>
          <li><strong>La tasa de traslado a mitad de estancia es real.</strong> Los gerentes maldivianos reportan que cerca del 70% de las reservas overwater piden cambio a villa de playa a media estancia — por el calor del mediodía, la salinidad continua o la falta de jardín. Solución: nunca reserven una semana entera sobre el agua. Cuatro noches overwater, tres en la playa.</li>
        </ul>

        <h2>Los 8 que elegiríamos</h2>
        <p>
          Ocho lunas de miel overwater para guardar, sacadas del catálogo. Cada una responde a una pregunta distinta:
          entrada controlada, media equilibrada, ultra statement o excepción caribeña.
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

        <h2>Cuándo ir</h2>
        <ul>
          <li><strong>Maldivas:</strong> diciembre a abril. Noviembre es el pico-valor antes de tarifas navideñas. Mayo-octubre es monzón.</li>
          <li><strong>Bora Bora y Polinesia Francesa:</strong> mayo a octubre (seca austral). Febrero el más lluvioso.</li>
          <li><strong>Fiyi:</strong> mayo a octubre, calendario igual.</li>
          <li><strong>México (Riviera Maya):</strong> noviembre a mayo. Junio-octubre es temporada de huracanes — no reserven overwater ahí.</li>
          <li><strong>Belice:</strong> diciembre a abril por visibilidad de buceo; tormentas pico agosto-octubre.</li>
          <li><strong>Indonesia (Raja Ampat):</strong> octubre a abril por mares más calmos y mejor visibilidad.</li>
        </ul>

        <h2>El veredicto honesto</h2>
        <p>
          La luna de miel sobre el agua sigue siendo el icono por una razón — pero la versión que cumple exige tres
          decisiones deliberadas: el destino correcto para su ruta, la categoría correcta para su presupuesto (no
          reserven entrada para toda una semana, no reserven ultra para dos), y un itinerario partido que combine
          overwater con noches en la playa. Háganlo bien y el formato merece la foto. Háganlo mal y la petición de
          traslado a media estancia es muy real.
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
        <h3 className="font-display text-2xl text-zinc-900 mb-4">Todos los hoteles con bungalows sobre el agua, puntuados.</h3>
        <Link
          href="/es/experiences/overwater-bungalows"
          className="inline-block bg-rose-500 hover:bg-rose-600 text-white font-semibold text-sm px-6 py-3 rounded-full transition-colors"
        >
          Ver todos los hoteles sobre el agua →
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
