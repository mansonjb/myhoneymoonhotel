import type { Metadata } from 'next'
import Link from 'next/link'
import { buildAlternates } from '@/lib/alternates'
import AuthorByline from '@/components/AuthorByline'
import { AUTHOR } from '@/data/author'

export const metadata: Metadata = {
  title: 'Lune de miel avec son chien — Hôtels & destinations',
  description:
    'Comment organiser une lune de miel qui inclut votre chien : hôtels de luxe pet-friendly, destinations qui fonctionnent vraiment, et les réalités que la plupart des guides omettent.',
  alternates: buildAlternates('/honeymoon-with-dog', 'fr'),
}

const SISTER_SITE = 'https://hotelswithpets.com'
const SISTER_GUIDE = 'https://hotelswithpets.com/fr/guides/honeymoon-with-pet'

const faqs = [
  {
    question: 'Puis-je emmener mon chien dans un hôtel de lune de miel de luxe ?',
    answer:
      'Oui, mais seulement dans une minorité d’établissements. Il existe trois niveaux : toléré, bienvenu, et pensé pour les chiens. La plupart des hôtels « pet-friendly » se contentent de tolérer ; ceux qui accueillent réellement les chiens (Belmond, Rosewood, les petites maisons de Toscane, de Provence et des Cotswolds) sont les seuls à réserver pour une lune de miel.',
  },
  {
    question: 'Quel est le pays le plus facile en Europe pour une lune de miel avec chien ?',
    answer:
      'La France. Les restaurants accueillent les chiens par défaut, les trains les transportent, et la plupart des établissements de luxe — du Domaine de la Baume aux plus petits mas du Luberon — les traitent comme des hôtes plutôt que comme une contrainte logistique. L’Italie (la Toscane en particulier) suit de près.',
  },
  {
    question: 'Faut-il un passeport pour animal pour une lune de miel européenne ?',
    answer:
      'Un voyage dans l’UE exige un passeport européen pour animal à jour ou un certificat zoosanitaire, et la rentrée aux États-Unis exige désormais un formulaire d’importation CDC. Les deux prennent plusieurs semaines — lancez les démarches au moins trois mois avant le départ.',
  },
  {
    question: 'Mon chien peut-il voyager en cabine pour notre lune de miel ?',
    answer:
      'Uniquement les petits chiens (généralement moins de 8 kg, selon la compagnie) sur une poignée de transporteurs, et presque jamais sur les vols long-courriers. Pour la plupart des couples, cela exclut les Maldives, Bora Bora ou les Seychelles et oriente la lune de miel vers une Europe accessible en voiture ou une destination domestique.',
  },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  inLanguage: 'fr',
  headline: 'Lune de miel avec son chien : le guide honnête',
  description:
    'Un guide pratique pour organiser une lune de miel qui inclut votre chien, des hôtels de luxe pet-friendly aux destinations qui fonctionnent vraiment.',
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
  mainEntityOfPage: 'https://myhoneymoonhotel.com/fr/honeymoon-with-dog',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://myhoneymoonhotel.com/fr' },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Lune de miel avec son chien',
      item: 'https://myhoneymoonhotel.com/fr/honeymoon-with-dog',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'fr',
  mainEntity: faqs.map(f => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
}

export default function HoneymoonWithDogPageFR() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">Guide de planification</p>
      <h1 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-6 leading-tight">
        Lune de miel avec son chien&nbsp;: le guide honnête.
      </h1>
      <p className="text-zinc-500 text-lg leading-relaxed mb-2">
        La plupart des conseils sur la lune de miel partent du principe que vous laissez le chien à la maison. Pour les
        couples qui considèrent leur chien comme un membre de la famille, ce n&rsquo;est pas la question — la question
        est de savoir <em>quelle</em> lune de miel fonctionne, et quels hôtels accueillent réellement un labrador
        plutôt que de tolérer un chihuahua dans un sac.
      </p>

      <AuthorByline />

      <div className="prose prose-zinc max-w-none prose-headings:font-display prose-headings:text-zinc-900 prose-p:text-zinc-600 prose-p:leading-relaxed prose-a:text-rose-500 prose-a:no-underline hover:prose-a:underline mt-10">

        <h2>Commencez par le chien, puis choisissez la destination</h2>
        <p>
          Les couples qui planifient une lune de miel avec leur animal font tous la même erreur&nbsp;: ils choisissent
          d&rsquo;abord la destination, puis se demandent si les chiens y sont les bienvenus. Faites l&rsquo;inverse.
          Un bouledogue français âgé qui supporte mal la pression en cabine élimine le long-courrier&nbsp;; un jeune
          border collie qui a besoin de trois heures de liberté par jour élimine les city breaks méditerranéens. La
          réalité du chien rétrécit la carte avant le romantisme.
        </p>
        <p>
          Pour la plupart des couples européens et nord-américains, la short-list pratique est&nbsp;: le luxe domestique
          (Napa, Hudson Valley, les Cotswolds, la Provence), une Europe accessible en voiture (fermes toscanes, vallée
          de la Loire, lacs alpins), et quelques rares lodges de luxe en long séjour qui adoptent réellement les chiens.
          Les lunes de miel long-courrier sur plage — Maldives, Bora Bora, Seychelles — ne fonctionnent presque jamais,
          pour des raisons de transit et parce que les hôtels n&rsquo;y sont pas conçus pour cela.
        </p>

        <h2>Ce que «&nbsp;pet-friendly de luxe&nbsp;» veut vraiment dire</h2>
        <p>
          L&rsquo;expression est galvaudée. Il existe trois niveaux, et la différence compte&nbsp;:
        </p>
        <ul>
          <li>
            <strong>Toléré.</strong> L&rsquo;hôtel accepte les chiens (souvent moyennant un supplément), mais la
            chambre est la même, le restaurant est interdit, et personne au sein du personnel ne sait quoi faire
            d&rsquo;un retriever de 30&nbsp;kilos à l&rsquo;arrivée. La plupart des hôtels «&nbsp;pet-friendly&nbsp;»
            sont à ce niveau.
          </li>
          <li>
            <strong>Bienvenu.</strong> Un panier attend dans la chambre, le concierge dispose d&rsquo;une carte de
            promenade, et au moins une terrasse de restaurant accepte les chiens. Les propriétés Belmond et Rosewood
            qui acceptent les chiens se situent à ce niveau.
          </li>
          <li>
            <strong>Pensé pour les chiens.</strong> Menu canin complet sorti des cuisines, spa pour chien en chambre
            ou jardin clos, personnel formé qui aime réellement les animaux. Ce niveau est rare — mais c&rsquo;est la
            différence entre une lune de miel et un test de résistance.
          </li>
        </ul>
        <p>
          Notre publication sœur{' '}
          <a href={SISTER_SITE} target="_blank" rel="noopener">
            HotelsWithPets.com
          </a>{' '}
          tient la base de données la plus complète des propriétés de niveau deux et trois, avec politiques pour
          animaux, frais, limites de poids et notes de terrain pour chaque entrée. Son guide compagnon,{' '}
          <a href={SISTER_GUIDE} target="_blank" rel="noopener">
            Lune de miel avec un animal
          </a>
          , couvre le versant hôtelier de la même question que nous abordons ici sous l&rsquo;angle des destinations
          — c&rsquo;est le catalogue à consulter une fois le pays choisi.
        </p>

        <h2>Destinations qui fonctionnent vraiment</h2>

        <h3>Provence et Côte d&rsquo;Azur (France)</h3>
        <p>
          La France est le pays le plus facile au monde pour une lune de miel avec un chien. Les restaurants les
          accueillent par défaut, les trains les transportent, et la plupart des propriétés de luxe — du Domaine de
          la Baume aux petits mas du Luberon — les traitent comme des hôtes plutôt que comme une contrainte
          logistique. Combinez avec une voiture de location, une semaine lente entre vignobles et marchés, et une
          terrasse au coucher du soleil à Gordes. Notre{' '}
          <Link href="/fr/destinations/provence">guide lune de miel en Provence</Link> couvre l&rsquo;angle
          romantique&nbsp;; les politiques d&rsquo;accueil propriété par propriété sont détaillées dans{' '}
          <a href={SISTER_GUIDE} target="_blank" rel="noopener">
            le guide lune de miel HotelsWithPets
          </a>
          .
        </p>

        <h3>Toscane (Italie)</h3>
        <p>
          La ferme convertie en relais — format <em>casale</em> — est faite pour les chiens. Borgo Santo Pietro,
          Castello di Casole, Castello di Reschio&nbsp;: les trois accueillent les chiens, les trois disposent de
          domaines où le chien peut redevenir un chien. Ajoutez deux nuits d&rsquo;ouverture à Florence et une
          traversée du Val d&rsquo;Orcia entre cyprès, et vous obtenez l&rsquo;une des lunes de miel canines les plus
          faciles d&rsquo;Europe. Voir notre{' '}
          <Link href="/fr/destinations/tuscany">guide lune de miel en Toscane</Link> pour l&rsquo;angle romantique,
          combiné à la recherche par propriété dans{' '}
          <a href={SISTER_GUIDE} target="_blank" rel="noopener">
            le guide lune de miel HotelsWithPets
          </a>
          .
        </p>

        <h3>Cotswolds et Lake District (Royaume-Uni)</h3>
        <p>
          Les chiens font partie de la culture des country-hotels britanniques. Soho Farmhouse, le groupe The Pig,
          Lime Wood — le luxe rural britannique fonctionne en supposant que le chien sera du voyage. Ajoutez
          l&rsquo;avantage pratique que les propriétaires britanniques n&rsquo;ont pas besoin de passeport pour les
          déplacements domestiques, et les Cotswolds deviennent l&rsquo;un des choix les plus malins pour une lune de
          miel sans avion.
        </p>

        <h3>Napa, Sonoma et Hudson Valley (États-Unis)</h3>
        <p>
          Pour les couples américains qui partent en voiture depuis la ville, le circuit des petites auberges de luxe
          de Napa et de la Hudson Valley mène discrètement la danse sur l&rsquo;hospitalité canine. Auberge du Soleil,
          Meadowood (à sa réouverture), Troutbeck — les chiens sont sur la terrasse au petit-déjeuner, montent dans
          le SUV des tours œnologiques et dorment dans un vrai lit.
        </p>

        <h2>Le guide compagnon sur HotelsWithPets.com</h2>
        <p>
          Là où cet article couvre le versant destination — quels pays, quelles villes, quelle logistique —, notre
          publication sœur couvre le versant propriété. Si la destination est arrêtée et qu&rsquo;il vous reste à
          savoir quel hôtel précis accueillera réellement votre chien comme un hôte plutôt que comme un problème
          logistique, la référence est{' '}
          <a href={SISTER_GUIDE} target="_blank" rel="noopener">
            <strong>Lune de miel avec votre animal</strong> sur HotelsWithPets.com
          </a>
          . Même équipe éditoriale, même approche de notation honnête, appliquée aux politiques d&rsquo;accueil, aux
          frais, aux limites de poids, aux zones de liberté et aux petits détails (paniers en chambre, terrasses de
          restaurant, vétérinaire d&rsquo;astreinte) qui décident si une lune de miel avec un chien est reposante ou
          stressante.
        </p>

        <h2>Réalités pratiques que la plupart des guides oublient</h2>
        <ul>
          <li>
            <strong>Vaccins et paperasse.</strong> Le voyage dans l&rsquo;UE exige un passeport européen pour animal
            à jour ou un certificat zoosanitaire&nbsp;; la rentrée aux États-Unis exige désormais un formulaire
            d&rsquo;importation CDC. Les deux prennent plusieurs semaines — commencez 3&nbsp;mois à l&rsquo;avance.
          </li>
          <li>
            <strong>Assurance.</strong> Une option voyage incluant l&rsquo;animal coûte peu et vaut le coup&nbsp;;
            les polices voyage standard ne couvrent pas les urgences vétérinaires à l&rsquo;étranger.
          </li>
          <li>
            <strong>Restaurants.</strong> La France et l&rsquo;Italie accueillent presque toujours les chiens&nbsp;;
            l&rsquo;Espagne et le Royaume-Uni varient selon l&rsquo;établissement&nbsp;; les États-Unis sont les plus
            restrictifs. Planifiez vos dîners en conséquence.
          </li>
          <li>
            <strong>Activités.</strong> La plupart des classiques de lune de miel — croisières au coucher du soleil,
            tours de vignobles, journées spa — ne sont pas adaptés aux chiens. Construisez le voyage autour de
            balades, de trajets en voiture et de longs déjeuners plutôt que de packages d&rsquo;activités.
          </li>
        </ul>

        <h2>Le verdict honnête</h2>
        <p>
          Une lune de miel avec son chien n&rsquo;est pas une lune de miel au rabais — c&rsquo;est une autre forme
          de lune de miel. Plus lente, plus domestique, avec plus de terrasses et moins de packages d&rsquo;activités.
          Les couples qui la réussissent commencent par le chien, choisissent l&rsquo;un des rares pays qui accueille
          vraiment les animaux au niveau luxe, et associent ce guide à son pendant côté propriétés,{' '}
          <a href={SISTER_GUIDE} target="_blank" rel="noopener">
            Lune de miel avec un animal sur HotelsWithPets.com
          </a>
          . Le résultat est souvent la lune de miel la plus reposante que l&rsquo;un et l&rsquo;autre aient jamais
          prise — ce qui, à bien y réfléchir, est tout l&rsquo;objet.
        </p>

      </div>

      <section className="mt-16">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">FAQ</p>
        <h2 className="font-display text-3xl text-zinc-900 mb-8">Questions fréquentes</h2>
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
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-3">Site partenaire</p>
        <h3 className="font-display text-2xl text-zinc-900 mb-2">
          La base complète des hôtels pet-friendly est ici.
        </h3>
        <p className="text-zinc-600 text-sm leading-relaxed mb-5">
          HotelsWithPets.com est notre publication sœur — même équipe éditoriale, même approche de notation honnête,
          dédiée aux meilleurs hôtels au monde pour les voyageurs avec animaux. Si votre lune de miel inclut un
          chien, commencez par là.
        </p>
        <a
          href={SISTER_GUIDE}
          target="_blank"
          rel="noopener"
          className="inline-block bg-rose-500 hover:bg-rose-600 text-white font-semibold text-sm px-6 py-3 rounded-full transition-colors"
        >
          Lire le guide compagnon sur HotelsWithPets.com →
        </a>
      </div>

      <div className="mt-12 text-center">
        <Link href="/fr/destinations" className="text-rose-500 hover:underline text-sm font-semibold">
          ← Retour à toutes les destinations de lune de miel
        </Link>
      </div>
    </div>
  )
}
