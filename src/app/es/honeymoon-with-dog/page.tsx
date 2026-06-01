import type { Metadata } from 'next'
import Link from 'next/link'
import { buildAlternates } from '@/lib/alternates'
import AuthorByline from '@/components/AuthorByline'
import { AUTHOR } from '@/data/author'

export const metadata: Metadata = {
  title: 'Luna de miel con perro — Hoteles y destinos',
  description:
    'Cómo planificar una luna de miel que incluya a su perro: hoteles de lujo pet-friendly, los destinos que funcionan y las realidades que la mayoría de guías omiten.',
  alternates: buildAlternates('/honeymoon-with-dog', 'es'),
}

const SISTER_SITE = 'https://hotelswithpets.com'
const SISTER_GUIDE = 'https://hotelswithpets.com/es/guides/honeymoon-with-pet'

const faqs = [
  {
    question: '¿Puedo llevar a mi perro a un hotel de luna de miel de lujo?',
    answer:
      'Sí, pero solo a una pequeña selección de propiedades. Existen tres niveles: tolerado, bienvenido y diseñado para perros. La mayoría de los hoteles "pet-friendly" solo toleran perros; los que de verdad les dan la bienvenida (Belmond, Rosewood, las pequeñas casas de la Toscana, Provenza y los Cotswolds) son los que vale la pena reservar para una luna de miel.',
  },
  {
    question: '¿Cuál es el país más fácil de Europa para una luna de miel con perro?',
    answer:
      'Francia. Los restaurantes admiten perros por defecto, los trenes los transportan y la mayoría de las propiedades de lujo —desde el Domaine de la Baume hasta los pequeños mas del Luberon— los tratan como huéspedes y no como un problema logístico. Italia (la Toscana en particular) le sigue de cerca.',
  },
  {
    question: '¿Necesito pasaporte para mascotas en una luna de miel europea?',
    answer:
      'Viajar dentro de la UE exige un pasaporte europeo para mascotas vigente o un certificado zoosanitario, y el reingreso a EE. UU. ahora requiere un formulario de importación del CDC. Ambos trámites llevan semanas: inícienlos al menos tres meses antes del viaje.',
  },
  {
    question: '¿Puede mi perro viajar en cabina en nuestra luna de miel?',
    answer:
      'Solo perros pequeños (por lo general menos de 8 kg, según la aerolínea) en unas pocas compañías, y casi nunca en vuelos de larga distancia. Para la mayoría de las parejas, esto descarta destinos como las Maldivas, Bora Bora o las Seychelles y orienta la luna de miel hacia una Europa accesible en coche o un destino doméstico.',
  },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  inLanguage: 'es',
  headline: 'Luna de miel con perro: la guía honesta',
  description:
    'Una guía práctica para planificar una luna de miel que incluya a su perro, desde hoteles de lujo pet-friendly hasta los destinos que de verdad funcionan.',
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
  mainEntityOfPage: 'https://myhoneymoonhotel.com/es/honeymoon-with-dog',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://myhoneymoonhotel.com/es' },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Luna de miel con perro',
      item: 'https://myhoneymoonhotel.com/es/honeymoon-with-dog',
    },
  ],
}

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

export default function HoneymoonWithDogPageES() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">Guía de planificación</p>
      <h1 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-6 leading-tight">
        Luna de miel con perro: la guía honesta.
      </h1>
      <p className="text-zinc-500 text-lg leading-relaxed mb-2">
        La mayoría de los consejos sobre lunas de miel asumen que ustedes dejarán al perro en casa. Para las parejas
        que consideran a su perro un miembro de la familia, esa no es la pregunta: la pregunta es <em>cuál</em> luna
        de miel funciona y qué hoteles realmente reciben a un labrador en lugar de tolerar a un chihuahua en un bolso.
      </p>

      <AuthorByline />

      <div className="prose prose-zinc max-w-none prose-headings:font-display prose-headings:text-zinc-900 prose-p:text-zinc-600 prose-p:leading-relaxed prose-a:text-rose-500 prose-a:no-underline hover:prose-a:underline mt-10">

        <h2>Empiecen por el perro y luego elijan el destino</h2>
        <p>
          Las parejas que planifican una luna de miel con mascota cometen el mismo error: eligen primero el destino y
          después preguntan si los perros son bienvenidos. Háganlo al revés. Un bulldog francés mayor que sufre con la
          presión de cabina descarta los vuelos de larga distancia; un border collie joven que necesita tres horas
          diarias sin correa descarta las escapadas urbanas mediterráneas. La realidad del perro acota el mapa antes
          que el romance.
        </p>
        <p>
          Para la mayoría de las parejas norteamericanas y europeas, la lista práctica es: lujo doméstico (Napa,
          Hudson Valley, los Cotswolds, la Provenza), una Europa accesible en coche (casas rurales toscanas, el
          Loira, lagos alpinos) y algunos lodges de lujo de estancia larga que realmente acogen a los perros. Las
          lunas de miel de playa de larga distancia —Maldivas, Bora Bora, Seychelles— casi nunca funcionan, tanto por
          el tránsito como porque los hoteles no están preparados.
        </p>

        <h2>Qué significa de verdad "pet-friendly de lujo"</h2>
        <p>
          La expresión está sobreusada. Hay tres niveles, y la diferencia importa:
        </p>
        <ul>
          <li>
            <strong>Tolerado.</strong> El hotel acepta perros (a menudo con un cargo), pero la habitación es la
            misma, el restaurante está vetado y nadie del personal sabe qué hacer con un retriever de 30 kilos en el
            check-in. La mayoría de los hoteles "pet-friendly" se sitúa aquí.
          </li>
          <li>
            <strong>Bienvenido.</strong> Una cama para perro espera en la habitación, el conserje tiene un mapa de
            paseos y al menos una terraza de restaurante admite perros. Las propiedades de Belmond y Rosewood que
            aceptan perros están en este nivel.
          </li>
          <li>
            <strong>Diseñado para perros.</strong> Menú canino completo desde la cocina, spa para perros en la
            habitación o jardín sin correa, personal formado a quien realmente le gustan los animales. Este nivel es
            reducido, pero marca la diferencia entre una luna de miel y una prueba de estrés.
          </li>
        </ul>
        <p>
          Nuestra publicación hermana{' '}
          <a href={SISTER_SITE} target="_blank" rel="noopener">
            HotelsWithPets.com
          </a>{' '}
          mantiene la base de datos más completa de propiedades de nivel dos y tres, con políticas para mascotas,
          tarifas, límites de peso y notas sobre el terreno para cada entrada. Su guía complementaria,{' '}
          <a href={SISTER_GUIDE} target="_blank" rel="noopener">
            Luna de miel con mascota
          </a>
          , cubre el lado hotelero de la misma pregunta que aquí abordamos desde el lado del destino: es el catálogo
          al que recurrir una vez elegido el país.
        </p>

        <h2>Destinos que de verdad funcionan</h2>

        <h3>Provenza y Costa Azul (Francia)</h3>
        <p>
          Francia es el país más fácil del mundo para una luna de miel con perro. Los restaurantes los reciben por
          defecto, los trenes los transportan y la mayoría de propiedades de lujo —del Domaine de la Baume a los
          pequeños mas del Luberon— los tratan como huéspedes y no como logística. Combínenlo con un coche de
          alquiler, una semana pausada de viñedos y mercados, y una terraza al atardecer en Gordes. Nuestra{' '}
          <Link href="/es/destinations/provence">guía de luna de miel en Provenza</Link> cubre el ángulo romántico;
          las políticas de admisión hotel por hotel están en{' '}
          <a href={SISTER_GUIDE} target="_blank" rel="noopener">
            la guía de luna de miel de HotelsWithPets
          </a>
          .
        </p>

        <h3>Toscana (Italia)</h3>
        <p>
          La granja reconvertida en relais —el formato <em>casale</em>— está hecha para los perros. Borgo Santo
          Pietro, Castello di Casole, Castello di Reschio: las tres aceptan perros, las tres tienen fincas donde el
          perro puede ser perro. Añadan dos noches de apertura en Florencia y una ruta por el Val d&rsquo;Orcia entre
          cipreses y tendrán una de las lunas de miel caninas más fáciles de Europa. Vean nuestra{' '}
          <Link href="/es/destinations/tuscany">guía de luna de miel en la Toscana</Link> para el ángulo romántico,
          junto con la investigación hotel por hotel en{' '}
          <a href={SISTER_GUIDE} target="_blank" rel="noopener">
            la guía de luna de miel de HotelsWithPets
          </a>
          .
        </p>

        <h3>Cotswolds y Lake District (Reino Unido)</h3>
        <p>
          Los perros forman parte de la cultura de los country hotels británicos. Soho Farmhouse, el grupo The Pig,
          Lime Wood: el lujo rural británico parte de la base de que el perro viaja con ustedes. Si añaden la ventaja
          práctica de que los dueños británicos no necesitan pasaporte para mascotas en viajes domésticos, los
          Cotswolds se convierten en una de las opciones más inteligentes para una luna de miel sin avión.
        </p>

        <h3>Napa, Sonoma y Hudson Valley (EE. UU.)</h3>
        <p>
          Para las parejas estadounidenses que viajan en coche desde la ciudad, el circuito de pequeñas posadas de
          lujo de Napa y Hudson Valley lidera discretamente la hospitalidad canina. Auberge du Soleil, Meadowood
          (cuando reabra), Troutbeck: los perros desayunan en la terraza, suben al SUV del tour vinícola y duermen
          en una cama de verdad.
        </p>

        <h2>La guía complementaria en HotelsWithPets.com</h2>
        <p>
          Donde este artículo cubre el lado del destino —qué países, qué ciudades, qué logística—, nuestra publicación
          hermana cubre el lado de la propiedad. Si ya tienen el destino cerrado y necesitan saber qué hotel concreto
          recibirá a su perro como huésped y no como problema, la pieza canónica es{' '}
          <a href={SISTER_GUIDE} target="_blank" rel="noopener">
            <strong>Luna de miel con su mascota</strong> en HotelsWithPets.com
          </a>
          . Mismo equipo editorial, mismo enfoque honesto de puntuación, aplicado a políticas para mascotas,
          tarifas, límites de peso, zonas sin correa y los pequeños detalles (camas en la habitación, terrazas de
          restaurante, veterinario de guardia) que deciden si una luna de miel con perro es relajante o estresante.
        </p>

        <h2>Realidades prácticas que la mayoría de guías omite</h2>
        <ul>
          <li>
            <strong>Vacunas y papeleo.</strong> Viajar por la UE requiere un pasaporte europeo para mascotas vigente
            o un certificado zoosanitario; el reingreso a EE. UU. ahora exige un formulario de importación del CDC.
            Ambos llevan semanas: empiecen 3 meses antes.
          </li>
          <li>
            <strong>Seguro.</strong> Un complemento de seguro de viaje que incluya a la mascota es barato y vale la
            pena; las pólizas estándar no cubren urgencias veterinarias en el extranjero.
          </li>
          <li>
            <strong>Restaurantes.</strong> Francia e Italia admiten perros casi universalmente; España y el Reino
            Unido varían según el establecimiento; EE. UU. es el más restrictivo. Planifiquen las cenas en
            consecuencia.
          </li>
          <li>
            <strong>Actividades.</strong> La mayoría de los clásicos de luna de miel —cruceros al atardecer, tours
            por bodegas, días de spa— no admite perros. Organicen el viaje en torno a paseos, trayectos en coche y
            comidas largas en lugar de paquetes de actividades.
          </li>
        </ul>

        <h2>La conclusión honesta</h2>
        <p>
          Una luna de miel con perro no es una luna de miel a medias: es una luna de miel con otra forma. Más lenta,
          más doméstica, con más terrazas y menos paquetes de actividades. Las parejas que lo hacen bien empiezan por
          el perro, eligen uno de los pocos países que de verdad acomoda animales al nivel de lujo y combinan esta
          guía con la pieza complementaria desde el lado hotelero,{' '}
          <a href={SISTER_GUIDE} target="_blank" rel="noopener">
            Luna de miel con mascota en HotelsWithPets.com
          </a>
          . El resultado suele ser la luna de miel más relajante que ninguno de los dos haya tenido, lo que, si lo
          piensan bien, es justo el objetivo.
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

      <div className="mt-16 bg-rose-50/40 border border-rose-100 rounded-2xl p-7">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-3">Sitio hermano</p>
        <h3 className="font-display text-2xl text-zinc-900 mb-2">
          La base completa de hoteles pet-friendly está aquí.
        </h3>
        <p className="text-zinc-600 text-sm leading-relaxed mb-5">
          HotelsWithPets.com es nuestra publicación hermana: mismo equipo editorial, mismo enfoque honesto de
          puntuación, dedicada a los mejores hoteles del mundo para viajeros con mascotas. Si su luna de miel
          incluye un perro, empiecen ahí.
        </p>
        <a
          href={SISTER_GUIDE}
          target="_blank"
          rel="noopener"
          className="inline-block bg-rose-500 hover:bg-rose-600 text-white font-semibold text-sm px-6 py-3 rounded-full transition-colors"
        >
          Leer la guía complementaria en HotelsWithPets.com →
        </a>
      </div>

      <div className="mt-12 text-center">
        <Link href="/es/destinations" className="text-rose-500 hover:underline text-sm font-semibold">
          ← Volver a todos los destinos de luna de miel
        </Link>
      </div>
    </div>
  )
}
