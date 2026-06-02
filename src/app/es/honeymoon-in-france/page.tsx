import type { Metadata } from 'next'
import Link from 'next/link'
import { buildAlternates } from '@/lib/alternates'
import AuthorByline from '@/components/AuthorByline'
import { AUTHOR } from '@/data/author'

export const metadata: Metadata = {
  title: 'Luna de miel en Francia: la guía honesta 2026',
  description:
    'Francia es el destino de luna de miel #1 de Europa. Provenza, Costa Azul, castillos del Loira, Champaña — las regiones, los hoteles, el presupuesto real.',
  alternates: buildAlternates('/honeymoon-in-france', 'es'),
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  inLanguage: 'es',
  headline: 'Luna de miel en Francia: la guía honesta 2026.',
  description:
    'Una guía regional para una luna de miel en Francia — Provenza, Costa Azul, castillos del Loira, Champaña — con los hoteles que realmente reservaríamos, presupuestos reales y las reglas no escritas de cuándo ir.',
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
  mainEntityOfPage: 'https://myhoneymoonhotel.com/es/honeymoon-in-france',
}

const faqs = [
  {
    question: '¿Francia es demasiado cliché para una luna de miel?',
    answer:
      'Francia no es un cliché — es dominante. La combinación de cultura gastronómica, infraestructura ferroviaria, inventario de castillos-hotel y herencia de glamour de la Riviera le da a Francia el catálogo de luna de miel más profundo de Europa, y lo que parece cliché desde lejos se disuelve al llegar en especificidad (el Loira no se parece a la Provenza, que no se parece a la Costa Azul). El riesgo real es hacer Francia genéricamente — París más una semana vaga en el sur — en lugar de comprometerse con una o dos regiones con intención.',
  },
  {
    question: '¿Costa Azul o Provenza?',
    answer:
      'Costa Azul si quieres palacios Belle Époque, cultura de yates y la herencia de glamour mediterráneo — playas de guijarros, cenas de diseño, Cap-Eden-Roc y Cap-Ferrat en lo más alto. Provenza si quieres campos de lavanda, pueblos en lo alto de las colinas, almuerzos lentos bajo plátanos y el formato lujo rural — Domaine de Manville, La Bastide de Gordes. Muchas parejas hacen ambos: tres noches en Provenza, tres en la costa. La carretera entre ambos toma dos horas y el contraste es precisamente la gracia.',
  },
  {
    question: '¿Cuál es la mejor época para una luna de miel en Francia?',
    answer:
      'De mediados de mayo a finales de junio y todo septiembre. Mayo y junio ofrecen días largos, jardines en su mejor momento y multitudes civilizadas; septiembre ofrece mar cálido, menor densidad turística y la vendimia en Champaña y el Loira. Evita del 14 de julio hasta la tercera semana de agosto a menos que quieras activamente el pico vacacional francés — la Costa Azul se vuelve realmente difícil, y los precios se duplican en todo el país.',
  },
  {
    question: '¿Cuánto cuesta una luna de miel de lujo en Francia?',
    answer:
      'Una luna de miel de dos semanas de lujo (hoteles tipo palacio, vuelos en clase ejecutiva, traslados privados, tres cenas Michelin) cuesta entre 35.000 y 60.000 USD por pareja. Las mismas dos semanas en el Loira y Champaña con una escala en la Costa Azul cuestan entre 18.000 y 30.000 USD. El Loira es la región genuinamente subestimada — propiedades Relais & Châteaux 5 estrellas a 450-700 € por noche frente a 1.500-2.500 € por la misma calidad en la costa.',
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
    { '@type': 'ListItem', position: 2, name: 'Luna de miel en Francia', item: 'https://myhoneymoonhotel.com/es/honeymoon-in-france' },
  ],
}

const hotelPicks = [
  { href: '/es/hotels/hotel-du-cap-eden-roc-cote-dazur', name: 'Hôtel du Cap-Eden-Roc', region: 'Costa Azul', why: 'La dirección más legendaria de la Riviera — la piscina de agua de mar, las cabañas, un siglo de legado cinematográfico.' },
  { href: '/es/hotels/grand-hotel-du-cap-ferrat-cote-dazur', name: 'Grand-Hôtel du Cap-Ferrat', region: 'Costa Azul', why: 'Palacio Four Seasons en la península más arbolada de la costa — servicio más cálido que Eden-Roc, escenario igualmente extraordinario.' },
  { href: '/es/hotels/cheval-blanc-st-tropez-cote-dazur', name: 'Cheval Blanc St-Tropez', region: 'Saint-Tropez', why: 'Buque insignia LVMH en el corazón del pueblo, con la única playa de arena del pueblo y la cocina de tres estrellas Michelin de Donckele.' },
  { href: '/es/hotels/domaine-de-manville-provence', name: 'Domaine de Manville', region: 'Provenza', why: 'Finca de olivar bajo Les Baux — villas independientes con piscinas privadas, la opción más inteligente para Provenza.' },
  { href: '/es/hotels/domaine-des-hauts-de-loire-loire-valley', name: 'Domaine des Hauts de Loire', region: 'Valle del Loira', why: 'Finca de caza Relais & Châteaux cerca de Chambord, una estrella Michelin, 70 hectáreas de bosque.' },
  { href: '/es/hotels/royal-champagne-hotel-spa-champagne', name: 'Royal Champagne Hotel & Spa', region: 'Champaña', why: 'Hotel panorámico sobre los viñedos de Épernay con la piscina infinita con vistas más extraordinaria del norte de Francia.' },
  { href: '/es/hotels/domaine-les-crayeres-champagne', name: 'Domaine Les Crayères', region: 'Reims', why: 'Mansión Belle Époque con cocina de dos estrellas Michelin — el buque insignia histórico Relais de Champaña.' },
  { href: '/es/hotels/chateau-de-la-chevre-dor-cote-dazur', name: 'Château de la Chèvre d\'Or', region: 'Èze', why: 'Pueblo medieval en lo alto de un acantilado a 400 m sobre el mar — la puesta de sol más cinematográfica de Francia.' },
]

export default function HoneymoonInFrancePageES() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">Guía de planificación</p>
      <h1 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-6 leading-tight">
        Luna de miel en Francia: la guía honesta 2026.
      </h1>
      <p className="text-zinc-500 text-lg leading-relaxed mb-2">
        Francia es el destino de luna de miel más reservado de Europa, y el peor planificado. El país tiene seis
        regiones, no una, y las parejas que hacen Francia bien se comprometen con dos o tres en lugar de intentar
        hilvanar París-Provenza-Costa Azul en una sola semana. Así es como la planificaríamos nosotros.
      </p>

      <AuthorByline />

      <div className="prose prose-zinc max-w-none prose-headings:font-display prose-headings:text-zinc-900 prose-p:text-zinc-600 prose-p:leading-relaxed prose-a:text-rose-500 prose-a:no-underline hover:prose-a:underline mt-10">

        <h2>Por qué Francia es el destino de luna de miel #1 de Europa</h2>
        <p>
          Francia gana en cuatro ventajas estructurales que ningún otro país europeo combina. Primero, la
          gastronomía: cada región tiene una identidad culinaria seria, y cada hotel de luna de miel relevante opera
          una cocina de nivel Michelin. Segundo, la infraestructura: la red TGV pone Champaña a 45 minutos de París,
          el Loira a 1 hora y la Costa Azul a 5h 30 desde la misma estación — ningún otro país en Europa facilita
          tanto el salto regional. Tercero, el inventario de castillos-hotel: Francia tiene más propiedades Relais
          & Châteaux que cualquier otro país (más de 150), y la profundidad Loira-Provenza es insuperable. Cuarto,
          la Riviera: palacios Belle Époque como Cap-Eden-Roc, Cap-Ferrat y La Réserve de Beaulieu poseen un siglo
          de herencia romántica que el resto del Mediterráneo simplemente no puede igualar.
        </p>

        <h2>Dónde ir de luna de miel en Francia</h2>
        <p>
          Seis regiones son creíbles para una luna de miel. Cada una tiene una personalidad distinta y un techo de
          precio diferente. Adapta la forma del viaje a tu gusto — palacio o castillo, playa o viñedo, glamour
          costero o lentitud rural.
        </p>

        <h3><Link href="/es/destinations/provence">Provenza</Link> — dolce vita soleada</h3>
        <p>
          El Luberon y los Alpilles — campos de lavanda, pueblos de piedra en lo alto de las colinas (Gordes,
          Ménerbes, Bonnieux), el formato de lujo rural en su mejor versión. La Bastide de Gordes, el Domaine de
          Manville y la Coquillade para la experiencia Relais pulida; el Hotel Crillon le Brave para el hotel
          histórico de pueblo. La gracia de Provenza es el ritmo rural lento — mercados, almuerzos largos, viñedos,
          cigarras. Mejor en mayo-junio y septiembre.
        </p>

        <h3><Link href="/es/destinations/cote-dazur">Costa Azul</Link> — glamour Belle Époque</h3>
        <p>
          La Riviera propiamente dicha — Saint-Tropez, Cap-Ferrat, Cannes, Antibes, Èze, Mónaco. Playas de
          guijarros, hoteles palaciegos, cultura de yates, cenas de nivel Riviera. El Hôtel du Cap-Eden-Roc y el
          Grand-Hôtel du Cap-Ferrat son los buques insignia arquitectónico-cinematográficos; Cheval Blanc
          St-Tropez y el Château de la Chèvre d&apos;Or son las alternativas contemporánea y en acantilado. La
          gracia de la Costa Azul es la herencia de glamour. Mejor de finales de mayo a junio y septiembre; evita
          agosto a toda costa.
        </p>

        <h3><Link href="/es/destinations/loire-valley">Valle del Loira</Link> — castillos renacentistas</h3>
        <p>
          La región de luna de miel más subestimada de Francia. El país de los castillos renacentistas — Chenonceau,
          Chambord, Cheverny — combinado con hoteles Relais 5 estrellas en castillos reales reales (Domaine des
          Hauts de Loire, Château d&apos;Artigny, Château de Pray). Una hora en TGV desde París. La mitad de
          precio que propiedades equivalentes en Provenza y Costa Azul. Mejor de mayo a septiembre.
        </p>

        <h3><Link href="/es/destinations/champagne">Champaña</Link> — beber en la fuente</h3>
        <p>
          La luna de miel vinícola subestimada — 45 minutos en TGV desde París hasta Reims, la catedral gótica y la
          Avenue de Champagne en Épernay. Krug, Bollinger, Veuve Clicquot, Pol Roger — visitas íntimas a bodegas y
          catas de prestigio imposibles de replicar en casa. Royal Champagne Hotel y Domaine Les Crayères son los
          buques insignia. Más tranquilo que Borgoña, más fácil que Burdeos, más romántico que cualquier otro lugar
          donde se haga vino. Mejor de mayo a octubre.
        </p>

        <h3>París (como escala, no como destino)</h3>
        <p>
          París es la apertura o el cierre universal de una luna de miel francesa — dos o tres noches como
          maridaje de una etapa Champaña o Loira, no el centro de la semana. Le Bristol, el Ritz, el Crillon y el
          Cheval Blanc Paris son las direcciones palaciegas. Combina con TGV hacia el sur tras un largo fin de
          semana de museos y bistrós. No tratamos París como un destino de luna de miel por derecho propio —
          parejas lo hacen y lo aman, pero la densidad romántica por día es menor que la que ofrecen las regiones.
        </p>

        <h2>El presupuesto honesto</h2>
        <p>
          La horquilla de precios entre regiones francesas es enorme. En la cumbre, una semana de pico en el
          Hôtel du Cap-Eden-Roc cuesta entre 1.800 y 3.000 USD por noche por una habitación base con vistas al mar;
          la Suite Bellini puede alcanzar los 10.000 USD en agosto. En el extremo de valor, Château de Pray en el
          Loira cuesta 280-450 € por noche por una estancia real en un castillo del siglo XIII con cocina de nivel
          Michelin. La misma forma de luna de miel — romance francés 5 estrellas — varía cinco veces por región.
          Dos semanas en lo más alto de la Costa Azul cuestan entre 35.000 y 60.000 USD por pareja todo incluido;
          las mismas dos semanas repartidas entre el Loira y Champaña cuestan entre 18.000 y 28.000 USD. Loira y
          Champaña son las opciones inteligentes de la década — ambas a una hora de París, ambas con inventario
          Relais & Châteaux a mitad de precio que la Costa Azul.
        </p>

        <h2>Cuándo ir</h2>
        <p>
          Las ventanas de luna de miel difieren por región. Costa Azul y Provenza van de mayo a octubre pero agosto
          es imposible (calor, multitudes, atascos); las mejores ventanas son de mediados de mayo a finales de
          junio y de septiembre a mediados de octubre. Loira y Champaña van de mayo a octubre con septiembre
          perfilándose como el mes secreto (vendimia en Champaña, viñas otoñales en el Loira, días cálidos y
          largos, multitudes manejables). La regla no escrita para la Costa Azul es la misma que para Saint-Tropez:
          evita del 14 de julio hasta la tercera semana de agosto. La regla no escrita para Champaña es evitar la
          última semana de septiembre (vendanges), cuando las maisons trabajan a plena capacidad y se cancelan
          visitas. Octubre, una vez terminada la vendimia, es la versión más tranquila y bella de Champaña.
        </p>

        <h2>Los hoteles que realmente elegiríamos</h2>
        <p>
          Ocho hoteles franceses de luna de miel para guardar. Cada uno responde a una pregunta distinta — palacio
          o castillo, costa o viñedo, íntimo o buque insignia.
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

        <h2>Plantillas de itinerario</h2>

        <h3>El clásico Provenza + Costa Azul (7 noches)</h3>
        <p>
          3 noches en el Domaine de Manville en los Alpilles — Les Baux, Saint-Rémy, Carrières des Lumières,
          lavanda si está en temporada. 2 horas en coche al este hasta la costa. 4 noches en el Grand-Hôtel du
          Cap-Ferrat — Villa Ephrussi, velada en Mónaco, día en Saint-Paul-de-Vence y Fondation Maeght, barco
          privado a las Îles de Lérins. La semana clásica de luna de miel francesa: lentitud rural y luego glamour
          costero.
        </p>

        <h3>La ruta de los castillos del Loira (5 noches)</h3>
        <p>
          5 noches en el Domaine des Hauts de Loire en Onzain — día Chambord y Cheverny, mañana en Chenonceau,
          Amboise y Clos Lucé, día de viñedos en Vouvray, jardines de Villandry. Opcional vuelo en globo al
          amanecer sobre Chambord. La luna de miel francesa con buena relación calidad-precio — experiencia
          Relais 5 estrellas a mitad de precio que la Costa Azul.
        </p>

        <h3>El fin de semana París + Champaña (3 noches)</h3>
        <p>
          1 noche en París (apertura en Le Bristol o el Ritz), 2 noches en Royal Champagne en Champillon — visita
          privada Krug o Bollinger, día de Avenue de Champagne, el spa con piscina infinita sobre el valle del
          Marne. La luna de miel francesa más corta creíble — 45 minutos en TGV, tres días de bodegas legendarias
          y la mejor vista de viñedos del norte de Francia.
        </p>

        <h2>Nuestra opinión honesta</h2>
        <p>
          Una luna de miel francesa funciona mejor cuando está comprometida — dos regiones hechas correctamente en
          lugar de cinco regiones hechas en un itinerario «Best of France». El país recompensa la profundidad. Una
          semana en los castillos del Loira te enseña más sobre Francia que una quincena saltando de aquí para
          allá, y las tarifas de habitación en Loira y Champaña son lo suficientemente bajas como para alojarse en
          los buques insignia Relais & Châteaux en lugar de los hoteles de segunda fila con los que te
          conformarías en la Costa Azul. Elige tus regiones, reserva los hoteles adecuados, come bien, bebe el
          vino local y deja que el país haga su trabajo.
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
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-3">Empieza a planificar</p>
        <h3 className="font-display text-2xl text-zinc-900 mb-4">Encuentra tu hotel de luna de miel en Francia.</h3>
        <Link
          href="/es/destinations"
          className="inline-block bg-rose-500 hover:bg-rose-600 text-white font-semibold text-sm px-6 py-3 rounded-full transition-colors"
        >
          Ver todos los destinos →
        </Link>
      </div>

      <div className="mt-12 text-center">
        <Link href="/es/destinations" className="text-rose-500 hover:underline text-sm font-semibold">
          ← Volver a todos los destinos
        </Link>
      </div>
    </div>
  )
}
