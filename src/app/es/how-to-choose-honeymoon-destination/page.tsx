import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { buildAlternates } from '@/lib/alternates'
import AuthorByline from '@/components/AuthorByline'
import { AUTHOR } from '@/data/author'
import FAQAccordion from '@/components/longtail/FAQAccordion'
import Stay22InlineCTA from '@/components/longtail/Stay22InlineCTA'

export const metadata: Metadata = {
  title: 'Cómo elegir el destino de tu luna de miel (2026)',
  description:
    'La guía más completa para elegir el destino de su luna de miel. Un marco de 7 preguntas, 8 arquetipos, casos reales y la verdad sobre los destinos virales. Elija un destino que de verdad amen.',
  alternates: buildAlternates('/how-to-choose-honeymoon-destination', 'es'),
  openGraph: {
    title: 'Cómo elegir el destino de tu luna de miel (2026)',
    description:
      'Un marco de 7 preguntas, 8 arquetipos de luna de miel, tres casos reales y las opiniones honestas que Instagram no les dará.',
    url: 'https://myhoneymoonhotel.com/es/how-to-choose-honeymoon-destination',
    siteName: 'MyHoneymoonHotel',
    images: [
      {
        url: 'https://myhoneymoonhotel.com/images/hotels/four-seasons-bora-bora/hero.webp',
        width: 1600,
        height: 900,
        alt: 'Cómo elegir el destino de su luna de miel, villa sobre el agua al atardecer',
      },
    ],
    locale: 'es_ES',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cómo elegir el destino de tu luna de miel (2026)',
    description: 'Un marco de 7 preguntas, 8 arquetipos, tres casos reales. Elijan el destino que de verdad amarán.',
    images: ['https://myhoneymoonhotel.com/images/hotels/four-seasons-bora-bora/hero.webp'],
  },
}

const FAQS = [
  {
    question: '¿Con cuánta antelación deberíamos reservar la luna de miel?',
    answer:
      'Fijen el destino entre 9 y 12 meses antes, el hotel entre 6 y 9 meses antes, y los vuelos en torno a los 90 días. Las villas sobre el agua en Maldivas, los mejores campamentos de safari y los bungalows de Bora Bora para fechas premium se agotan de forma rutinaria con 9 meses de antelación. Si están dentro de los 4 meses y apuntan a un destino premium, esperen fechas sobrantes, habitaciones sobrantes y un sobreprecio del 20 al 40 por ciento en los vuelos.',
  },
  {
    question: '¿Maldivas o Bora Bora para una primera luna de miel?',
    answer:
      'Maldivas si quieren traslados cortos, varios estilos de resort y la mayor oferta de villas sobre el agua del planeta (más de 130 resorts). Bora Bora si quieren la foto más icónica, menos logística y vuelos más cortos desde la costa oeste de EE. UU. Maldivas gana en valor y variedad; Bora Bora gana en reconocimiento inmediato. Ambas son opciones honestas para una primera luna de miel.',
  },
  {
    question: '¿Está bien hacer una luna de miel en régimen todo incluido?',
    answer:
      'Sí. Un todo incluido solo para adultos en la propiedad correcta (Excellence Playa Mujeres, Sandals Royal Curacao, Couples Tower Isle) suele superar a un resort 5 estrellas a la carta en la relación coste-romance. La trampa es el todo incluido económico, donde los bufés se vuelven repetitivos a partir de la quinta noche. Elijan adults-only, varios restaurantes a la carta dentro del hotel y licores premium incluidos. Vean nuestra opinión completa en /es/all-inclusive-honeymoon.',
  },
  {
    question: '¿Conviene usar un asesor de viajes?',
    answer:
      'Para viajes de más de 20.000 dólares, o cualquier cosa que implique Maldivas, Bora Bora, safaris con varias etapas o Polinesia Francesa, sí. Un asesor de Virtuoso o Four Seasons Preferred Partner les consigue desayuno gratis, 100 dólares de crédito en el hotel, mejoras de habitación y check-in temprano sin coste para ustedes (lo paga el hotel). Para viajes sencillos por Europa o el Caribe por menos de 10.000 dólares, reservar directamente o vía Hotels.com está bien.',
  },
  {
    question: '¿Cómo nos ponemos de acuerdo si queremos cosas completamente distintas?',
    answer:
      'Hagan un itinerario con dos paradas. Los compromisos clásicos: persona de playa más persona de ciudad se convierte en 4 noches en Tokio más 7 noches en Maldivas, o 3 noches en Ciudad del Cabo más 6 noches de safari más 4 noches en Zanzíbar. Aventurero más amante del descanso se convierte en 5 noches en Patagonia más 5 noches en Atacama. Intentar encontrar un solo destino que satisfaga preferencias opuestas suele terminar en un destino que no satisface a ninguno.',
  },
  {
    question: '¿Cuánto gasta de media una pareja estadounidense o británica en una luna de miel en 2026?',
    answer:
      'La mediana de gasto en EE. UU. en 2026 ronda los 6.500 dólares para un viaje de 7 a 10 noches, con el cuartil superior en 14.000 dólares y el 10 por ciento más alto por encima de 25.000 dólares. Las parejas británicas gastan algo menos de media (unas 5.000 libras), pero se inclinan más por Europa y Asia que por trópicos de larga distancia. Ambas medianas han subido un 35 por ciento aproximadamente desde 2019, impulsadas por las tarifas aéreas y las subidas de precios en la categoría lujo.',
  },
  {
    question: '¿Cuál es el mejor destino seguro para parejas indecisas?',
    answer:
      'Santa Lucía, Italia (Costa Amalfitana más Toscana) y Mauricio. Los tres ofrecen paisajes de postal, logística sencilla, varias categorías de hotel, actividades variadas y casi ningún riesgo de arrepentirse. Son el equivalente en luna de miel a pedir el segundo plato más popular de la carta: nunca la elección más emocionante, siempre una elección sólida.',
  },
  {
    question: '¿Cómo equilibramos el presupuesto que tenemos con el destino que soñamos?',
    answer:
      'Tres opciones honestas. Primera: bajar la categoría de hotel en el destino soñado (una villa jardín en Soneva Jani gana a una villa sobre el agua en un 3 estrellas). Segunda: desplazarse a una "segunda mejor ventana" donde el mismo destino cuesta entre un 30 y un 50 por ciento menos (Maldivas a finales de abril, Caribe a principios de junio). Tercera: cambiar el destino por su análogo más cercano a un precio inferior (Cabo Verde por la sensación Maldivas a un tercio del coste, Albania por paisaje de isla griega, Sicilia por la Costa Amalfitana). Casi nunca vale la pena: medio día en su destino soñado dentro de una escala.',
  },
]

const HOWTO_STEPS = [
  {
    name: 'Fijen su techo de presupuesto honesto',
    text: 'Acuerden el presupuesto total incluyendo vuelos, hoteles, comida, traslados, actividades, propinas y un 10 por ciento de imprevistos. Tres niveles: Cómodo (8.000 a 12.000 dólares), Premium (15.000 a 25.000 dólares), Ultra (30.000 dólares o más). Adapten el destino al techo, no al revés.',
  },
  {
    name: 'Decidan cuántas noches pueden comprometer',
    text: 'Menos de 7 noches: queden cerca (Italia desde Europa, México desde EE. UU., Bali desde Australia). De 7 a 10 noches: un resort de larga distancia, una sola parada. De 10 a 14 noches: larga distancia con dos paradas. 14 noches o más: tres paradas como máximo.',
  },
  {
    name: 'Fijen su tolerancia al tiempo de vuelo',
    text: 'Menos de 6 horas: corta distancia (Mediterráneo, Caribe desde la costa este de EE. UU., Bali desde Australia). De 6 a 12 horas: Maldivas desde Europa, Caribe desde la costa oeste de EE. UU., Tokio desde la costa oeste de EE. UU. Más de 12 horas: Bora Bora, Maldivas desde EE. UU., Polinesia Francesa, Seychelles. La tolerancia al vuelo largo es el mayor filtro que la mayoría de las parejas se salta.',
  },
  {
    name: 'Elijan la temporada con honestidad',
    text: 'Adapten el destino a su ventana de viaje, no al revés. Maldivas de noviembre a abril. Polinesia Francesa de mayo a octubre. Caribe de enero a mayo (temporada de huracanes de junio a noviembre). Europa de mayo a junio y septiembre. Usen nuestro planificador mes a mes en /es/best-time-to-honeymoon.',
  },
  {
    name: 'Elijan la energía de su luna de miel',
    text: 'Cinco arquetipos honestos: playa y spa (tiempo horizontal, sol, agua), activo (senderismo, buceo, exploración), cultural (museos, historia, gastronomía), espiritual (bienestar, retiros, ryokans), aventura (safari, glaciares, lugares remotos). La mayoría de las parejas mezclan dos; casi ninguna logra mezclar más de dos en un mismo viaje.',
  },
  {
    name: 'Auditen su umbral de comodidad y de comida',
    text: '¿Qué tan aventureros son con la comida? ¿Cuánto "rústico" toleran en una propiedad de 1.000 dólares la noche? Un campamento de tiendas en Botsuana es una experiencia de lujo, pero duermen bajo lona. Un ryokan en Hakone es lujo, pero duermen sobre un futón. Asegúrense de que ambos sean honestos antes de reservar.',
  },
  {
    name: 'Auditen su nivel de experiencia viajera',
    text: 'Los viajeros que hacen su primer vuelo de larga distancia deberían elegir destinos con resorts donde se hable inglés, simplicidad de una sola moneda y logística predecible (Maldivas, Mauricio, Santa Lucía, Bali). Los veteranos pueden con itinerarios de varias paradas con coche propio, barreras de idioma y traslados complejos (Patagonia, Bután, Madagascar).',
  },
]

const ARCHETYPES = [
  {
    title: 'Paraíso isleño con villas sobre el agua',
    vibe: 'La imagen canónica de luna de miel: villas con suelo de cristal, laguna turquesa, tiempo horizontal absoluto.',
    whoFor: 'Parejas primerizas en larga distancia que quieren LA foto, de 7 a 10 noches sin decisiones y la sensación más romántica posible de "lo hicimos".',
    whoSkip: 'Parejas activas que se inquietan tras 48 horas de sol. Parejas con presupuesto inferior a 10.000 dólares (las villas sobre el agua arrancan en 1.500 dólares la noche como mínimo).',
    destinations: ['Maldivas', 'Bora Bora', 'Fiyi'],
    flagshipHotel: 'Soneva Jani (Maldivas) para primerizos, Four Seasons Bora Bora para la experiencia icónica de Polinesia Francesa',
    cost: '15.000 a 35.000 dólares por 7 a 10 noches',
    pillarLink: '/es/overwater-bungalow-honeymoon',
  },
  {
    title: 'Clásico de playa caribeña',
    vibe: 'Arena blanca, palmeras, ron al atardecer, comodidad todo incluido, vuelos fáciles desde Norteamérica.',
    whoFor: 'Parejas de la costa este de EE. UU. que quieren un vuelo de 5 horas, una playa a menos de 50 metros de la habitación y un precio cerrado para toda la semana.',
    whoSkip: 'Parejas sensibles al riesgo de huracanes (de junio a noviembre es una lotería). Cualquiera a quien los bufés le parezcan poco románticos.',
    destinations: ['Santa Lucía', 'Antigua', 'Turks y Caicos', 'Barbados'],
    flagshipHotel: 'Jade Mountain en Santa Lucía por el dramatismo arquitectónico, Jumby Bay por la privacidad de Antigua',
    cost: '8.000 a 18.000 dólares por 7 noches',
    pillarLink: '/es/all-inclusive-honeymoon',
  },
  {
    title: 'Costa y pueblo mediterráneos',
    vibe: 'Hoteles colgados de acantilados, limoneros, Aperol a la hora dorada, pueblos para caminar, cultura gastronómica como preámbulo.',
    whoFor: 'Parejas europeas, parejas estadounidenses foodies en un arco de 10 días por Italia o Grecia, cualquiera a quien le aburra estar tumbado en la playa después de 3 días.',
    whoSkip: 'Quienes viajen en julio y agosto (calor, multitudes, cruceros). Parejas que necesiten piscina privada todos los días.',
    destinations: ['Costa Amalfitana', 'Santorini', 'Mallorca', 'Sicilia', 'Míkonos'],
    flagshipHotel: 'Hotel Caruso en Ravello, Grace Hotel Santorini',
    cost: '10.000 a 22.000 dólares por 10 noches',
    pillarLink: '/es/destinations/amalfi',
  },
  {
    title: 'Campiña europea',
    vibe: 'Viñedos, slow food, trayectos entre castillos, jardines de rosas, sin más agenda que la próxima comida.',
    whoFor: 'Parejas que consideran que la comida es la actividad. Cualquiera que quiera una semana en coche, sin aeropuerto a la mitad, completamente analógica.',
    whoSkip: 'Amantes de la playa, cualquiera que necesite piscina cada tarde, primerizos que necesiten que les lleven de la mano.',
    destinations: ['Toscana', 'Provenza', 'Valle del Loira', 'Los Cotswolds'],
    flagshipHotel: 'Castello di Casole en Toscana, La Bastide de Gordes en Provenza',
    cost: '9.000 a 20.000 dólares por 10 noches',
    pillarLink: '/es/honeymoon-in-france',
  },
  {
    title: 'Safari africano',
    vibe: 'Recorridos al amanecer, sundowners a 50 metros de los elefantes, desconexión total, la luna de miel más del tipo "esto nos cambió" que existe.',
    whoFor: 'Parejas cuyo primer instinto es la aventura, no el descanso. Cualquiera que pueda con despertarse a las 5:30 por una familia de elefantes. Combínenlo con 3 a 5 noches en Zanzíbar o en Ciudad del Cabo.',
    whoSkip: 'Parejas que consideran el wifi una necesidad básica. Cualquiera a quien los insectos le rompan el viaje.',
    destinations: ['Kenia', 'Tanzania', 'Botsuana', 'Sudáfrica', 'Namibia'],
    flagshipHotel: 'Singita Sasakwa (Tanzania), Mombo Camp (Botsuana)',
    cost: '18.000 a 45.000 dólares por 10 noches',
    pillarLink: '/es/destinations/tanzania',
  },
  {
    title: 'Asia espiritual y boutique',
    vibe: 'Rituales pausados, cenas kaiseki, piscinas en la jungla, templos al amanecer, un destino que silenciosamente los reorganiza.',
    whoFor: 'Parejas que buscan profundidad, no solo fotos. Viajeros repetidores que ya hicieron los destinos obvios. Cualquiera en un momento de transición (segundo matrimonio, reseteo postpandemia de prioridades).',
    whoSkip: 'Parejas que quieren un viaje solo de playa. Primerizos de larga distancia a quienes la inmersión cultural les genera estrés.',
    destinations: ['Bali (Ubud)', 'Bután', 'Kerala', 'Sri Lanka', 'Japón'],
    flagshipHotel: 'Circuito Amankora en Bután, Aman Kyoto, Como Shambhala Bali',
    cost: '12.000 a 35.000 dólares por 10 a 14 noches',
    pillarLink: '/es/destinations/bali',
  },
  {
    title: 'Aventura latinoamericana',
    vibe: 'Glaciares, cóndores, salares, viñedos, las Galápagos, arcos de dos paradas que se sienten como tres viajes.',
    whoFor: 'Viajeros veteranos, parejas que ya hicieron Maldivas, cualquiera a quien una luna de miel pasiva le resulte deprimente.',
    whoSkip: 'Primerizos de larga distancia, parejas que quieren cero logística, cualquiera con sensibilidad a la altitud.',
    destinations: ['Perú (Valle Sagrado y Machu Picchu)', 'Patagonia', 'Atacama', 'Galápagos', 'Colombia (Cartagena y Eje Cafetero)'],
    flagshipHotel: 'Explora Patagonia, Tierra Atacama, Inkaterra Machu Picchu',
    cost: '14.000 a 30.000 dólares por 12 noches',
    pillarLink: '/es/destinations/peru',
  },
  {
    title: 'Auroras boreales en climas fríos',
    vibe: 'Aurora a la una de la mañana, iglús con techo de cristal, fiordos, aguas termales tras caminatas bajo cero, romance con guantes.',
    whoFor: 'Parejas a las que no les gusta el calor tropical, cualquiera que se case en verano y quiera la estación opuesta para la luna de miel, viajeros repetidores que buscan el contraste dramático.',
    whoSkip: 'Cualquiera que necesite nadar como parte de "luna de miel". Parejas que ya son friolentas.',
    destinations: ['Islandia', 'Laponia finlandesa', 'Noruega (Lofoten o Tromsø)', 'Ártico sueco'],
    flagshipHotel: 'Deplar Farm (Islandia), Kakslauttanen Arctic Resort (Finlandia)',
    cost: '10.000 a 25.000 dólares por 7 a 10 noches',
    pillarLink: '/es/destinations/iceland',
  },
]

const PERSONAS = [
  {
    label: 'Los foodies',
    link: '/honeymoon-for-foodies',
    text: 'Elijan un destino donde la comida sea la actividad, no una interrupción. Japón (Tokio más Kioto más un ryokan kaiseki), norte de Italia (Bolonia, Módena, Las Langhe), Lyon más Borgoña, San Sebastián más Rioja, o Ciudad de México más Oaxaca. Eviten los todo incluido: limitan su techo gastronómico al bufé, y una luna de miel foodie necesita reservas, no pulseras.',
  },
  {
    label: 'Los introvertidos',
    link: '/honeymoon-for-introverts',
    text: 'Elijan destinos donde la propiedad sea el destino. Islas privadas en Maldivas o Seychelles, ryokans aislados en Hakone o Kanazawa, un circuito por Bután donde apenas vean a otros huéspedes, o una estancia patagónica donde el personal supere en número a los visitantes. Eviten Santorini en verano, Bali Seminyak y cualquier todo incluido de más de 200 habitaciones.',
  },
  {
    label: 'Los buscadores de aventura',
    link: '/honeymoon-for-adventure-seekers',
    text: 'Elijan un destino donde el menú de actividades sea denso y variado. Costa Rica (jungla más volcán más playa), Nueva Zelanda (autoconducida por la isla sur), Patagonia (glaciares más senderismo más W-trek ligero), Islandia (cascadas más aurora más glaciar), o un safari por África del Este más Zanzíbar. El equivalente en luna de miel a descansar es moverse.',
  },
  {
    label: 'Las parejas mayores de 40',
    link: '/honeymoon-for-over-40',
    text: 'Ya hicieron los destinos obvios. Salten Maldivas de entrada, la multitud del atardecer de Santorini, la escena de Tulum. Apuesten por la profundidad: propiedades Aman en Japón, Singita en el Serengeti, un triple de Aman Tokio más Hoshinoya Kioto más Park Hyatt Niseko, un arco de Ciudad del Cabo más zona vinícola más safari. Menos Instagram, más "esto cambió la forma en que pensamos viajar juntos".',
  },
]

const DECISION_TREE = [
  '¿Presupuesto inferior a 10.000 dólares? Cabo Verde, Bali (Ubud y Uluwatu), Riviera Maya en todo incluido, isla griega secundaria (Milos, Folegandros, Naxos), Sicilia.',
  '¿Presupuesto de 10.000 a 20.000 dólares? Villa jardín en Maldivas, Santa Lucía (Jade Mountain), Toscana más Costa Amalfitana, Bali más Komodo, Costa Rica jungla y playa.',
  '¿Presupuesto de 20.000 a 35.000 dólares? Villa sobre el agua en Maldivas, Polinesia Francesa (Bora Bora más Tahití o Moorea), safari en África del Este más Zanzíbar, circuito de ryokans por Japón.',
  '¿Presupuesto de 35.000 dólares o más? Singita Sasakwa más Ciudad del Cabo, Aman Tokio más Aman Kyoto más Park Hyatt Niseko, alquiler completo de isla privada en Fiyi, villa sobre el agua con tobogán en Soneva Jani.',
  '¿Detestan los vuelos largos? Mediterráneo (Costa Amalfitana, Santorini, Mallorca), Caribe desde la costa este (Santa Lucía, Antigua, Turks y Caicos), México (Riviera Maya, Tulum), Islandia.',
  '¿Primera vez en larga distancia? Maldivas (un solo resort), Mauricio, Santa Lucía, Bali Ubud y Uluwatu. Salten los itinerarios multipaís.',
  '¿Viajeros con experiencia? Patagonia más Atacama, Bután más India, África del Este más Zanzíbar, Japón más Corea.',
  '¿Boda en invierno? Maldivas (temporada alta), Caribe, Bali, Tailandia, Mauricio.',
  '¿Boda en verano? Polinesia Francesa, Mediterráneo, safari en África del Este, Islandia, Patagonia (su invierno es nuestro verano).',
]

export default function HowToChooseHoneymoonDestinationPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    inLanguage: 'es',
    headline: 'Cómo elegir el destino de su luna de miel: la guía honesta 2026',
    description:
      'La guía más completa de internet para elegir el destino de su luna de miel. Un marco de 7 preguntas, 8 arquetipos y tres casos reales.',
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
    mainEntityOfPage: 'https://myhoneymoonhotel.com/es/how-to-choose-honeymoon-destination',
  }

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Cómo elegir el destino de su luna de miel (el marco de 7 preguntas)',
    description:
      'Un marco de decisión de 7 preguntas que conecta su presupuesto, calendario, energía y experiencia viajera con los destinos que de verdad encajan.',
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
    inLanguage: 'es',
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
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://myhoneymoonhotel.com/es/' },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Cómo elegir el destino de su luna de miel',
        item: 'https://myhoneymoonhotel.com/es/how-to-choose-honeymoon-destination',
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
      <section className="relative h-[70vh] min-h-[520px] flex items-end overflow-hidden">
        <Image
          src="/images/hotels/four-seasons-bora-bora/hero.webp"
          alt="Cómo elegir el destino de su luna de miel, villa sobre el agua al atardecer"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={75}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="relative z-10 px-8 sm:px-12 pb-16 max-w-4xl">
          <p className="text-white/60 text-xs tracking-[0.2em] uppercase mb-5">La guía de decisión</p>
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl text-white leading-[1.05] mb-6">
            Cómo elegir su<br />destino de luna de miel.
          </h1>
          <p className="text-white/75 text-base sm:text-lg max-w-2xl leading-relaxed">
            La guía honesta 2026. Un marco de 7 preguntas, ocho arquetipos de luna de miel, tres casos reales y las
            opiniones que Instagram no les dará. Elijan un destino que de verdad amen, no el que su feed les insiste.
          </p>
        </div>
      </section>

      {/* BREADCRUMB */}
      <nav aria-label="Breadcrumb" className="max-w-4xl mx-auto px-6 pt-8 text-xs text-zinc-500">
        <Link href="/es" className="hover:text-zinc-900">Inicio</Link>
        <span className="mx-2">/</span>
        <span className="text-zinc-900">Cómo elegir el destino de su luna de miel</span>
      </nav>

      <div className="max-w-4xl mx-auto px-6">
        <AuthorByline reviewedDate="2026-06-25" />
      </div>

      {/* TL;DR */}
      <div className="max-w-3xl mx-auto px-6">
        <aside id="tldr" className="my-8 p-6 rounded-2xl bg-rose-50/60 border border-rose-100">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-2">En resumen</p>
          <p className="text-zinc-900 text-lg leading-relaxed font-medium">
            La mayoría de las parejas eligen el destino de su luna de miel desde Instagram y luego entran en pánico
            cuando la realidad, el presupuesto o el clima se niegan a cooperar. El enfoque opuesto funciona mejor:
            respondan siete preguntas honestas (presupuesto, noches, tolerancia al vuelo, temporada, energía, umbral
            de comodidad, experiencia viajera) y luego conecten sus respuestas con uno de los ocho arquetipos de luna
            de miel. Si los dos no están de acuerdo, hagan un itinerario con dos paradas. Si siguen atascados, hagan
            nuestro test en <Link href="/es/quiz" className="underline underline-offset-4 decoration-rose-300 hover:decoration-rose-500">/es/quiz</Link>.
          </p>
        </aside>
      </div>

      <article className="max-w-3xl mx-auto px-6 pb-20">
        <div className="prose prose-zinc max-w-none prose-headings:font-display prose-h2:text-4xl prose-h2:sm:text-5xl prose-h2:leading-tight prose-h2:mt-16 prose-h2:mb-6 prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-3 prose-p:leading-relaxed prose-li:leading-relaxed">

          <p className="lead text-lg text-zinc-700 mt-8">
            Esta página es la que habríamos querido que alguien nos entregara al empezar. No es un listado de "diez
            destinos de ensueño" sacados del feed de otra persona. Es un marco de decisión, probado a lo largo de doce
            años planificando lunas de miel para nosotros mismos y para nuestros lectores, contra el único criterio que
            importa: ¿volvieron a casa contentos con el destino que eligieron, o volvieron murmurando "la próxima vez
            deberíamos haber ido a Mauricio"? La mayoría de los lamentos son evitables. Sigan leyendo.
          </p>

          <p className="text-zinc-700">
            Si además necesitan el calendario (cuándo reservar qué), el desglose de presupuesto por nivel, la lista de
            equipaje y la cuestión del seguro, los tratamos por separado en <Link href="/es/how-to-plan-a-honeymoon">cómo
            planear una luna de miel</Link>. Si ya eligieron la temporada y quieren saber qué está abierto y bueno en
            ese mes, vean <Link href="/es/best-time-to-honeymoon">la mejor época para una luna de miel</Link>. Esta
            página se centra estrictamente en responder una sola pregunta: ¿qué destino van a amar de verdad?
          </p>

          {/* 2 */}
          <h2>El error que cometen la mayoría de las parejas</h2>
          <p>
            El error más común en una luna de miel no es volar el mismo día de la boda (ese es el error número dos). Es
            elegir el destino desde Instagram y luego intentar doblegar el presupuesto, la temporada de la boda, la
            tolerancia al vuelo y las preferencias reales de la pareja en torno a una foto. El destino se decide con la
            emoción; después se diseña el viaje hacia atrás para justificarlo. El resultado, en nuestra bandeja de
            entrada al menos una vez por semana: una pareja que pagó 22.000 dólares para descubrir que Santorini entre
            el 15 de julio y el 20 de agosto es un aparcamiento de cruceros, que Maldivas en mayo son tormentas
            diarias, que Bali en enero es monzón y que la foto icónica que perseguían existe unos noventa minutos al
            día, rodeada de trípodes.
          </p>
          <p>
            La solución no es dejar de soñar. La solución es soñar después, una vez que hayan respondido siete
            preguntas honestas sobre quiénes son de verdad como pareja. Entonces la lista corta de destinos se escribe
            sola. Casi siempre hay entre tres y cinco destinos que encajan, no el que Instagram les insistía. Uno de
            ellos seguirá siendo un destino "de ensueño". Solo que será el que sobreviva al contacto con la realidad.
          </p>
          <p>
            Las cinco consecuencias más comunes de elegir el destino desde Instagram, en orden de frecuencia en nuestra
            bandeja de entrada: llegar en monzón y ver dos días de sol en diez; gastar la mitad del presupuesto en
            vuelos que no podían pagar porque nadie los cotizó antes del depósito; aterrizar en un destino donde uno de
            los dos está infeliz porque sus preferencias nunca se pusieron sobre la mesa; reservar la temporada
            equivocada porque las fotos eran de marzo y ustedes fueron en agosto; y, el más silencioso y doloroso,
            elegir un destino tan famoso que no puede ofrecer la privacidad y el silencio que prometían las fotos. Los
            cinco se pueden evitar. Ninguno se evita esforzándose más en Instagram.
          </p>

          {/* 3 */}
          <h2 id="framework">El marco de decisión de 7 preguntas</h2>
          <p>
            Repasen estas siete preguntas con su pareja, idealmente en una noche tranquila, idealmente con una copa de
            algo, idealmente antes de haber mirado una sola foto. Cada pregunta filtra la lista larga. Al final tendrán
            una lista corta de tres a cinco destinos que de verdad encajan. Entonces miren las fotos.
          </p>

          <h3>P1. ¿Cuál es su presupuesto honesto?</h3>
          <p>
            No el presupuesto que les gustaría tener, el presupuesto que existe. Elijan un techo que incluya vuelos,
            hoteles, comida, traslados, actividades, propinas y un 10 por ciento de imprevistos. Tres niveles cubren
            con honestidad a casi todo el mundo:
          </p>
          <ul>
            <li><strong>Cómodo, de 8.000 a 12.000 dólares:</strong> Bali (Ubud y una zona de playa), Grecia (continente y una isla secundaria), México (Riviera Maya todo incluido y Tulum), Cabo Verde, Sicilia, Mallorca. Para el extremo más bajo de este rango, vean nuestra guía completa en <Link href="/honeymoon-on-a-budget">luna de miel con presupuesto ajustado</Link>.</li>
            <li><strong>Premium, de 15.000 a 25.000 dólares:</strong> villa sobre el agua en Maldivas (un solo resort), safari en África del Este (un campamento y Zanzíbar), Polinesia Francesa (Bora Bora y Tahití), circuito de ryokans por Japón, Italia (Costa Amalfitana y Toscana).</li>
            <li><strong>Ultra, 30.000 dólares o más:</strong> isla privada en Maldivas o Fiyi, circuito Aman (Tokio, Kioto y Niseko), Singita en el Serengeti, combinación Polinesia Francesa más Nueva Zelanda con varias paradas, ruta por Bután en helicóptero.</li>
          </ul>
          <p>
            Para desgloses de presupuesto por destino, mantenemos páginas con cifras reales: <Link href="/honeymoon-under-5000">por debajo de 5.000 dólares</Link>, <Link href="/honeymoon-under-10000">por debajo de 10.000 dólares</Link>, <Link href="/honeymoon-under-15000">por debajo de 15.000 dólares</Link>, <Link href="/honeymoon-under-20000">por debajo de 20.000 dólares</Link>, más páginas por destino para <Link href="/es/maldives-honeymoon-cost">Maldivas</Link>, <Link href="/es/bali-honeymoon-cost">Bali</Link>, <Link href="/es/mexico-honeymoon-cost">México</Link>, <Link href="/es/turks-and-caicos-honeymoon-cost">Turks y Caicos</Link>, <Link href="/es/bahamas-honeymoon-cost">Bahamas</Link>, <Link href="/es/barbados-honeymoon-cost">Barbados</Link> y <Link href="/es/cape-verde-honeymoon-cost">Cabo Verde</Link>.
          </p>

          <h3>P2. ¿Cuántas noches pueden comprometer?</h3>
          <p>
            En una luna de miel el tiempo importa más que el dinero. Un viaje de 5 noches a Maldivas es un insulto
            logístico al destino: 36 horas de tránsito consumen el 30 por ciento del viaje. Los rangos honestos:
          </p>
          <ul>
            <li><strong>Menos de 7 noches:</strong> queden cerca. Italia o Grecia desde Europa, México o Caribe desde EE. UU., Bali o Tailandia desde Australia, Mauricio desde Sudáfrica. Larga distancia con menos de 7 noches es un impuesto que se cobran a sí mismos.</li>
            <li><strong>De 7 a 10 noches:</strong> un resort de larga distancia, una sola parada. Esta es la luna de miel canónica de Maldivas, Bora Bora, Fiyi o Seychelles.</li>
            <li><strong>De 10 a 14 noches:</strong> larga distancia con dos paradas. Safari más playa (Tanzania más Zanzíbar), ciudad más resort (Tokio más Maldivas), aventura más descanso (Patagonia más Atacama).</li>
            <li><strong>14 noches o más:</strong> tres paradas como máximo. Más de tres y pasarán la luna de miel en aeropuertos. La excepción es una inmersión profunda en un solo país, como un circuito por Bután o cruzar Sudáfrica.</li>
          </ul>
          <p>
            Para itinerarios por duración, vean nuestros planificadores de <Link href="/3-day-honeymoon">3 días</Link>, <Link href="/5-day-honeymoon">5 días</Link>, <Link href="/7-day-honeymoon">7 días</Link>, <Link href="/10-day-honeymoon">10 días</Link> y <Link href="/14-day-honeymoon">14 días</Link>.
          </p>

          <h3>P3. ¿Cuánto tiempo de viaje toleran?</h3>
          <p>
            Uno de los filtros más subestimados. Una pareja a la que un vuelo de 5 horas le resulta incómodo no debería
            reservar Maldivas desde Nueva York (16 horas más un traslado en hidroavión). Los niveles honestos:
          </p>
          <ul>
            <li><strong>Menos de 6 horas:</strong> desde la costa este de EE. UU., el Caribe y México. Desde Europa, el Mediterráneo y el norte de África. Desde Australia, Bali, Fiyi, Nueva Zelanda.</li>
            <li><strong>De 6 a 12 horas:</strong> desde la costa este de EE. UU., Europa y el norte de Sudamérica. Desde Europa, Maldivas, Seychelles, África del Este. Desde la costa oeste de EE. UU., Tokio y Bora Bora.</li>
            <li><strong>Más de 12 horas:</strong> desde EE. UU., Polinesia Francesa, Maldivas, Seychelles, Bali, Australia. Desde Europa, Australia, Polinesia Francesa, Islas Cook, Pacífico profundo.</li>
          </ul>
          <p>
            Premium economy o business cambian el cálculo. Un vuelo de 16 horas en business plana es una experiencia
            distinta al mismo vuelo en turista. Si el presupuesto da para business plana en una sola dirección (a
            menudo alcanzable con millas), háganlo en el tramo de ida y en clase estándar a la vuelta, cuando el
            cansancio importa menos.
          </p>

          <h3>P4. ¿En qué temporada van a viajar?</h3>
          <p>
            Adapten el destino a su ventana de viaje, no al revés. La forma más rápida de arruinar una luna de miel en
            Maldivas es reservar mayo porque es cuando se casan. Las grandes ventanas:
          </p>
          <ul>
            <li><strong>Diciembre a marzo:</strong> Maldivas, Bali (seco), Tailandia, Mauricio, Seychelles en plena temporada. Caribe fiable.</li>
            <li><strong>Abril a junio:</strong> hombro mediterráneo (el punto dulce), cerezos en Japón, estación verde en África del Este.</li>
            <li><strong>Julio a agosto:</strong> Polinesia Francesa, Islandia, Escandinavia, estación seca en África del Este, invierno austral (bueno para safari). Eviten el Mediterráneo a menos que les encanten las multitudes.</li>
            <li><strong>Septiembre a noviembre:</strong> hombro mediterráneo de nuevo (el segundo punto dulce), hombro en Maldivas, apertura de Patagonia, hombro en Galápagos.</li>
          </ul>
          <p>
            Para emparejar destino y mes, vean nuestro planificador en <Link href="/es/best-time-to-honeymoon">la mejor época para la luna de miel</Link>, más las páginas por mes para <Link href="/honeymoon-in-january">enero</Link>, <Link href="/honeymoon-in-february">febrero</Link>, <Link href="/honeymoon-in-march">marzo</Link>, <Link href="/honeymoon-in-april">abril</Link>, <Link href="/honeymoon-in-may">mayo</Link>, <Link href="/honeymoon-in-june">junio</Link>, <Link href="/honeymoon-in-july">julio</Link>, <Link href="/honeymoon-in-august">agosto</Link>, <Link href="/honeymoon-in-september">septiembre</Link>, <Link href="/honeymoon-in-october">octubre</Link>, <Link href="/honeymoon-in-november">noviembre</Link> y <Link href="/honeymoon-in-december">diciembre</Link>.
          </p>

          <h3>P5. ¿Qué energía quieren?</h3>
          <p>
            Aquí es donde la mayoría de las parejas pasan por encima. Hay cinco energías honestas de luna de miel. La
            mayoría de las parejas pueden mezclar dos; casi ninguna logra mezclar más de dos en un solo viaje.
          </p>
          <ul>
            <li><strong>Playa y spa:</strong> tiempo horizontal, sol, agua, masajes, sin horario. Maldivas, Bora Bora, Mauricio, Caribe.</li>
            <li><strong>Activa:</strong> senderismo, buceo, exploración, días variados. Costa Rica, Nueva Zelanda, Hawái, Bali (Ubud más surf).</li>
            <li><strong>Cultural:</strong> museos, historia, gastronomía, ciudades para caminar. Japón, Italia, Portugal, Ciudad de México y Oaxaca, Marrakech.</li>
            <li><strong>Espiritual o bienestar:</strong> retiros, ryokans, ayurveda, viaje lento y profundo. Bután, Kerala, Bali Ubud, Hakone, ciertas propiedades Aman.</li>
            <li><strong>Aventura:</strong> safari, glaciares, paisajes remotos, nivel expedición. África del Este, Patagonia, Islandia, Galápagos, Bután.</li>
          </ul>
          <p>
            Las mezclas clásicas de dos: safari más playa, ciudad más resort, aventura más descanso, cultura más
            playa. El error clásico: intentar mezclar tres o más y terminar con un viaje de 14 noches y siete
            aeropuertos.
          </p>

          <h3>P6. ¿Qué tan flexibles son con la comida y la comodidad?</h3>
          <p>
            Esta pregunta rara vez se hace en voz alta y pesa enormemente. Un campamento de tiendas en Botsuana es una
            experiencia de "lujo", pero duermen bajo lona y se duchan con un balde. Un ryokan en Hakone es lujo, pero
            duermen sobre un futón, la cena es un kaiseki fijo a las 6:30 y no hay opción de desayuno occidental. Un
            eco-resort en la jungla de Bali es precioso, pero hay insectos en la villa abierta y un trayecto de 4 horas
            desde el aeropuerto.
          </p>
          <p>
            Si ambos son honestamente viajeros con "umbral de comodidad alto", inclínense por villas sobre el agua,
            todo incluido en el Caribe, el Mediterráneo y hoteles urbanos 5 estrellas en Tokio o París. Si uno o los
            dos son "umbral de comodidad flexible", el mundo se abre: safari, jungla, ryokan, crucero de expedición,
            todo se vuelve viable. Si están desemparejados en este eje, nómbrenlo, y elijan un destino que cumpla con
            el umbral más alto. Lo contrario (la pareja de umbral alto apretando los dientes en un campamento de
            tiendas) es una causa común de resentimiento postluna de miel.
          </p>

          <h3>P7. ¿Son los dos primerizos en larga distancia, o veteranos?</h3>
          <p>
            La pregunta más pasada por alto de las siete. Los primerizos de larga distancia se benefician enormemente
            de destinos con resorts donde se habla inglés, simplicidad de una sola moneda, logística predecible y un
            único hotel para todo el viaje. La luna de miel en Maldivas con un solo resort está casi diseñada para
            primerizos. Igual que Mauricio, Santa Lucía, Bali Ubud más Uluwatu y el todo incluido de Riviera Maya.
          </p>
          <p>
            Los veteranos pueden con itinerarios de varias paradas con coche propio, barreras de idioma y traslados
            complejos. Patagonia más Atacama, Bután más India, Madagascar más Reunión y Japón más Corea son lunas de
            miel legítimas para veteranos. Si uno es veterano y el otro primerizo, prioricen "amigable para
            primerizos". El veterano ya lo hizo antes; el primerizo lo está haciendo por primera vez, en el viaje
            emocionalmente más cargado de su vida hasta ahora.
          </p>

          {/* 4 ARCHETYPES */}
          <h2 id="archetypes">Los 8 arquetipos de luna de miel</h2>
          <p>
            Una vez hayan recorrido las siete preguntas, sus respuestas se conectan casi limpiamente con uno de estos
            ocho arquetipos. Cada uno es un patrón real y consolidado de luna de miel, con su rango de coste honesto,
            el resort que lo define y las parejas para las que no es adecuado. Hemos enlazado al pilar dedicado donde
            corresponde.
          </p>

          {ARCHETYPES.map((a) => (
            <div key={a.title} className="not-prose my-10 border border-zinc-100 rounded-2xl p-6 sm:p-8 bg-white">
              <h3 className="font-display text-2xl text-zinc-900 mb-3">{a.title}</h3>
              <p className="text-zinc-700 text-base mb-4 italic">{a.vibe}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-zinc-700 mb-4">
                <div>
                  <p className="text-xs uppercase tracking-widest text-rose-500 font-semibold mb-1">Para quién es</p>
                  <p>{a.whoFor}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-rose-500 font-semibold mb-1">Quién debe saltarlo</p>
                  <p>{a.whoSkip}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-rose-500 font-semibold mb-1">Destinos</p>
                  <p>{a.destinations.join(', ')}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-rose-500 font-semibold mb-1">Buque insignia</p>
                  <p>{a.flagshipHotel}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-rose-500 font-semibold mb-1">Coste real</p>
                  <p>{a.cost}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-rose-500 font-semibold mb-1">Leer más</p>
                  <p><Link href={a.pillarLink} className="text-rose-500 hover:underline">{a.pillarLink}</Link></p>
                </div>
              </div>
            </div>
          ))}

          {/* 5 DEAL-BREAKERS */}
          <h2>Los 5 conflictos típicos y cómo resolverlos</h2>

          <h3>1. Uno quiere playa, el otro quiere ciudad</h3>
          <p>
            Es el desacuerdo individual más común que vemos, y el más fácil de resolver. Hagan un itinerario con dos
            paradas. Los arcos clásicos: 4 noches en Tokio más 7 noches en Maldivas, 3 noches en Ciudad del Cabo más 6
            noches de safari más 4 noches en Zanzíbar, 4 noches en Buenos Aires más 6 noches en Patagonia, 5 noches en
            Ciudad de México más 5 noches en Riviera Maya. La persona de playa tiene su semana; la de ciudad tiene su
            ración cultural; nadie cede hacia un destino que no satisface a ninguno.
          </p>

          <h3>2. Brecha entre expectativas de presupuesto y realidad</h3>
          <p>
            Uno quiere la villa sobre el agua del Soneva Jani, el otro sabe que el presupuesto son 12.000 dólares. La
            conversación honesta es qué compromiso duele menos. Tres opciones, por orden de impacto. Primera: bajar la
            categoría de hotel dentro del destino soñado (una villa jardín en Maldivas en un resort 4 estrellas
            ofrece el 80 por ciento de la experiencia de Maldivas al 40 por ciento del coste). Segunda: desplazar el
            destino soñado una temporada (Maldivas a finales de abril en vez de enero, Caribe a principios de junio en
            vez de febrero). Tercera: cambiar el destino por su análogo más cercano: Cabo Verde por la sensación
            Maldivas a un tercio del coste, Albania por el paisaje de isla griega, Sicilia por la Costa Amalfitana,
            Mauricio por Seychelles.
          </p>

          <h3>3. A uno no le gustan los vuelos largos</h3>
          <p>
            Las lunas de miel de corta distancia son lunas de miel reales. El Mediterráneo (Costa Amalfitana, Mallorca,
            Creta) desde Europa. El Caribe (Antigua, Turks y Caicos, Santa Lucía) desde la costa este de EE. UU. Bali
            desde Australia. Cabo Verde desde Europa occidental (5,5 horas, sin jet lag, vibras de villa sobre el
            agua). México desde cualquier punto del continente. Ninguno de estos es de segunda categoría. Son
            distintos.
          </p>

          <h3>4. Visado, pasaporte o papeleo</h3>
          <p>
            Algunos destinos requieren entre 6 y 12 semanas de papeleo (visado de Bután, e-visa con biometría para
            India, Rusia, partes de África, Brasil para algunos pasaportes). Algunos exigen vacunas (la fiebre amarilla
            para ciertos destinos africanos necesita 10 días mínimo para hacer efecto). Otros piden un pasaporte
            válido 6 meses después del regreso con dos páginas en blanco. Audítenlo antes de enamorarse del destino.
            El número de parejas que depositan dinero no reembolsable en un destino al que no pueden entrar a tiempo
            no es cero.
          </p>

          <h3>5. Temporada que no encaja con la fecha de la boda</h3>
          <p>
            Su destino soñado tiene la estación equivocada. Tres opciones honestas. Primera: aceptar la temporada
            equivocada con un descuento del 30 al 50 por ciento y diseñar el viaje en torno a ello (Maldivas en mayo,
            asuman las tormentas, elijan un resort con buenos espacios interiores). Segunda: elegir la "segunda mejor
            ventana" donde el destino sigue funcionando al 70 por ciento de calidad: Maldivas a finales de abril,
            Caribe a principios de junio, Polinesia Francesa a principios de noviembre. Tercera: aplazar la luna de
            miel de 3 a 6 meses. Una luna de miel diferida en la temporada correcta supera a una luna de miel en
            fecha perfecta pero en monzón, siempre.
          </p>

          {/* 6 PERSONAS */}
          <h2 id="personas">Por personalidad de luna de miel</h2>
          <p>
            Más allá del marco de siete preguntas, aquí van cuatro tipos de personalidad con orientación concreta de
            destino. Cada uno enlaza con nuestro pilar dedicado, con una lista más larga.
          </p>

          {PERSONAS.map((p) => (
            <div key={p.label} className="not-prose my-6 border-l-2 border-rose-200 pl-5">
              <h3 className="font-display text-xl text-zinc-900 mb-2">
                <Link href={p.link} className="hover:text-rose-500">{p.label} →</Link>
              </h3>
              <p className="text-zinc-700 text-sm leading-relaxed">{p.text}</p>
            </div>
          ))}

          {/* 7 PARTNER QUESTIONS */}
          <h2>Las 5 preguntas que deberían hacerse antes de reservar</h2>
          <p>
            Antes de hacer un depósito, siéntense con su pareja sin portátil, sin teléfono, sin tablero de
            inspiración. Háganse estas cinco preguntas. Las respuestas sacan a la luz preferencias y líneas rojas que
            ninguna lista corta de destinos puede prever.
          </p>
          <ol>
            <li><strong>Si hiciéramos este viaje y uno de los dos odiara tres días, ¿qué tres días estaría dispuesto cada uno a absorber?</strong> La respuesta honesta revela las tolerancias. Si ninguno absorbería un día de traslado de 4 horas, taquen los destinos con traslados largos. Si uno no aguantaría un madrugón a las 5 para un safari, el safari queda fuera.</li>
            <li><strong>¿Qué fue lo que más nos gustó del mejor viaje que hicimos juntos hasta ahora, y qué parte de eso debería repetir la luna de miel?</strong> Las lunas de miel que ignoran los picos de los viajes previos compartidos suelen rendir por debajo. El viaje que ambos amaron es información.</li>
            <li><strong>¿Qué es algo que ninguno de los dos le diría jamás a un asesor de viajes, pero que es cierto?</strong> A menudo aflora preferencias reales: "me da ansiedad ir a mercados", "no puedo dormir en habitaciones con paredes medianeras", "me mareo en barcos pequeños". Planifiquen en torno a eso.</li>
            <li><strong>¿Cuál es la foto con la que queremos volver a casa? Y luego: ¿qué viaje nos daría esa foto y otras doce cosas que amamos?</strong> Una inversión útil del problema de Instagram. Usen la foto como etiqueta, no como brief.</li>
            <li><strong>Si tuviéramos la mitad del presupuesto, ¿qué destino elegiríamos en su lugar?</strong> La respuesta a menudo revela para qué es realmente el destino. Si "la mitad del presupuesto" los lleva a un lugar genuinamente atractivo, el destino original quizá fuera un alarde, no un buen encaje.</li>
          </ol>

          {/* 8 CASE STUDIES */}
          <h2 id="case-studies">Tres casos reales</h2>
          <p>
            Tres parejas con las que hemos trabajado (detalles y nombres compuestos y modificados por privacidad). Las
            decisiones que hicieron pasar por el marco de siete preguntas. Los destinos que el marco produjo de
            verdad.
          </p>

          <h3>Caso A: pareja de Brooklyn, presupuesto de $8.000, 7 noches, primera larga distancia</h3>
          <p>
            Mia y Daniel, ambos de 31 años, se casan en octubre. Techo de $8.000 para la luna de miel. Los dos
            ansiosos con la logística de varias paradas. Ninguno ha volado más de 8 horas antes. Destino soñado:
            Maldivas. Realidad presupuestaria: no. El marco lo filtra duro. P1 (presupuesto): $8k. P2 (noches): 7. P3
            (tolerancia al vuelo): menos de 10 horas. P4 (temporada): finales de octubre. P5 (energía): playa y spa,
            cultura ligera. P6 (umbral de comodidad): alto. P7 (experiencia): primera larga distancia.
          </p>
          <p>
            La lista corta que produjo el marco: Cabo Verde (Sal o Boa Vista), Grecia (Creta o Naxos a final de
            temporada), México (Riviera Maya en todo incluido). La elección: Cabo Verde, 6 horas desde JFK vía Lisboa,
            villas frente al agua a una fracción del coste de Maldivas, finales de octubre con buen tiempo de playa.
            Reservaron Pestana Tropico en Praia para el anclaje urbano y una pousada frente al mar en Boa Vista para 5
            noches. Gasto total incluyendo vuelos: $7.400. Volvieron a casa contentos de no haber perseguido la foto
            de Maldivas al doble del precio. Vean nuestra guía completa de
            <Link href="/es/cape-verde-honeymoon-cost"> coste de luna de miel en Cabo Verde</Link>.
          </p>

          <h3>Caso B: presupuesto de $25.000, 12 noches, los dos viajeros con experiencia</h3>
          <p>
            Ana y Tom, treinta y pocos, se casan en noviembre. Techo de $25.000. Los dos ya hicieron los destinos
            obvios (Bali, Tailandia, México, Italia). Ninguno quiere un viaje solo de playa. Los dos manejan dos
            paradas con soltura. P1: $25k. P2: 12 noches. P3: larga distancia sin problema. P4: finales de noviembre.
            P5: aventura más descanso. P6: umbral de comodidad flexible. P7: veteranos.
          </p>
          <p>
            El marco produjo: Patagonia más Atacama (su verano es nuestro invierno, momento perfecto en noviembre),
            safari en África del Este más Zanzíbar, Japón en color otoñal, circuito por Bután. La elección: Patagonia
            más Atacama. 5 noches en Explora Patagonia (lodge de senderismo en pensión completa), 5 noches en Tierra
            Atacama (pensión completa en altiplano), 2 noches en Santiago al principio y al final. Gasto total
            incluyendo business class con millas en una dirección: $24.800. Volvieron a casa con el viaje que la
            versión safari más playa no habría dado: cansancio real, glaciares al amanecer, salares bajo la luna y dos
            destinos que ninguno de los dos habría elegido solo.
          </p>

          <h3>Caso C: presupuesto de $50.000, 14 noches, los dos mayores de 45, segundo matrimonio</h3>
          <p>
            Helen y James, ambos de 47, se casan a finales de febrero (la boda de ella, diez meses antes, fue la
            primera). Los dos han hecho Maldivas, Bora Bora, Toscana, Provenza, Japón una vez. Los dos quieren
            profundidad y un destino que "se lo gane". Presupuesto de $50.000. P1: $50k. P2: 14 noches. P3: larga
            distancia sin problema. P4: finales de febrero (su persecución estival, nuestro invierno). P5: cultura más
            bienestar más aventura ligera. P6: umbral de comodidad alto (sin baldes, sin paredes medianeras). P7:
            veteranos profundos.
          </p>
          <p>
            El marco produjo: Aman Tokio más Hoshinoya Kioto más Park Hyatt Niseko (Japón en versión profunda, con
            esquí en Niseko para febrero). Singita Sasakwa más Ciudad del Cabo más zona vinícola (África en versión
            profunda). Circuito por Bután con el arco de cinco propiedades Aman. La elección: el triple por Japón. 4
            noches en Aman Tokio, 4 noches en Hoshinoya Kioto (con excursiones a Nara y Osaka), 4 noches esquiando en
            Park Hyatt Niseko, 2 noches en Tokio a la vuelta. Business class ida y vuelta. Gasto total: $48.400.
            Volvieron a casa, en sus propias palabras, con la sensación de que "la segunda boda fue una celebración;
            la luna de miel fue la declaración de verdad". Eso es lo que compran $50k cuando se gastan con precisión.
          </p>

          {/* 9 INSTAGRAM */}
          <h2 id="instagram-honest">La opinión honesta sobre los destinos impulsados por Instagram</h2>
          <p>
            Cinco destinos cuya representación en Instagram diverge más de la realidad, según nuestra experiencia.
            Vale la pena nombrarlos porque concentran una parte desproporcionada de la decepción posluna de miel.
          </p>
          <p>
            <strong>Santorini en julio y agosto.</strong> Las fotos de la caldera son reales. La descarga de 12.000
            turistas de crucero en Oía a las 4 de la tarde también es real. Aproximadamente desde las 10 hasta las 18
            en temporada alta, los pueblos famosos son inaccesibles. La Santorini amable para luna de miel existe en
            mayo, finales de septiembre y octubre. O en uno de los pocos hoteles de acantilado (Grace, Canaves Oia,
            Katikies) con piscina privada de la que no salen.
          </p>
          <p>
            <strong>Bali Seminyak en temporada seca.</strong> La Bali de luna de miel existe. No está en Seminyak.
            Está en Ubud (terrazas de arroz, ritual, villas en la jungla) más Uluwatu (hoteles en acantilado,
            atardecer, surf). Seminyak en julio son beach clubs, tráfico y una demografía distinta a la que sugieren
            las fotos.
          </p>
          <p>
            <strong>Maldivas de mayo a octubre.</strong> Tormentas diarias en el 30 a 60 por ciento de los días. La
            experiencia de villa sobre el agua se degrada con lluvia fuerte (la escena icónica del suelo de cristal
            asume sol). Maldivas es de noviembre a abril para las primeras lunas de miel. El hombro es real pero
            opcional.
          </p>
          <p>
            <strong>Bora Bora solo por la foto.</strong> El plano icónico único (el Monte Otemanu desde una villa
            sobre el agua) es real y se entrega aproximadamente el 70 por ciento de las mañanas. El resto del viaje
            es un resort, una laguna, una vista. Las parejas que quieren variedad a menudo se arrepienten de quedarse
            solo en Bora Bora y desearían haberlo combinado con Tahití o Moorea. Los arcos de dos islas para Polinesia
            Francesa casi siempre ganan.
          </p>
          <p>
            <strong>Tulum.</strong> Lo que hace cinco años era un pueblo de playa tranquilo es ahora jungle-chic,
            fotogénico y con un tráfico severamente congestionado. Las carreteras están mal, la erosión de la playa es
            importante y la escena es más exigente de lo que sugieren las fotos. La luna de miel honesta del Yucatán
            suele combinar Tulum (2 noches) con Holbox o Isla Mujeres (5 noches) para encontrar el silencio que
            prometen las fotos.
          </p>

          {/* 10 DECISION TREE */}
          <h2 id="tree">Árbol de decisión, en resumen</h2>
          <p>La forma más rápida de convertir el marco en acción. Lean de arriba abajo; deténganse en la primera línea que encaje.</p>
          <ul>
            {DECISION_TREE.map((line, i) => <li key={i}>{line}</li>)}
          </ul>

          <Stay22InlineCTA
            destination="maldives"
            country="Maldives"
            headline="¿Cotizando la lista corta?"
            subline="Una vez que tengan su lista corta de tres a cinco destinos, nuestro comparador asociado abre todos los motores de reserva con un clic. Sin impacto de comisión en su precio."
            campaign="how-to-choose-destination"
            locale="es"
          />

          {/* 11 FAQ */}
          <h2 id="faq">Preguntas frecuentes</h2>
          <FAQAccordion items={FAQS} />

          {/* 12 CTA */}
          <h2 id="cta">¿Siguen atascados? Dos próximos pasos</h2>
          <p>
            Si ya pasaron por el marco y aún no se deciden, los dos próximos pasos son útiles. Primero, hagan nuestro
            breve test en <Link href="/es/quiz">el test de luna de miel</Link>. Recorre las siete preguntas de forma
            interactiva y devuelve una lista corta ordenada por puntuación, atada a hoteles concretos que evaluamos.
            Segundo, exploren nuestro <Link href="/es/destinations">atlas de destinos</Link> con la lista corta en
            mente, y lean la página de cada destino de principio a fin antes de hacer un depósito. Los destinos de
            luna de miel premian a la pareja que los eligió deliberadamente. Elijan el suyo así.
          </p>
          <p className="mt-8">
            Para el resto del manual de planificación, vean <Link href="/es/how-to-plan-a-honeymoon">cómo planear una luna de miel</Link>:
            el calendario de 12 meses, los desgloses de presupuesto, la lista de regalos, el seguro, el equipaje y los
            10 errores que arruinan las lunas de miel.
          </p>
        </div>
      </article>
    </article>
  )
}
