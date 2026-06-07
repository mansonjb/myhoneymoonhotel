import type { Metadata } from 'next'
import Link from 'next/link'
import { buildAlternates } from '@/lib/alternates'
import AuthorByline from '@/components/AuthorByline'
import { AUTHOR } from '@/data/author'

export const metadata: Metadata = {
  title: 'Lune de miel en bungalow sur pilotis : guide 2026',
  description:
    'Maldives, Bora Bora, Polynésie, Fidji, Belize, Mexique, Indonésie : les vraies destinations de pilotis, trois gammes de prix et les huit adresses que nous réserverions.',
  alternates: buildAlternates('/overwater-bungalow-honeymoon', 'fr'),
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  inLanguage: 'fr',
  headline: 'La lune de miel en bungalow sur pilotis : le guide honnête 2026.',
  description:
    'Un guide régional et tarifaire des lunes de miel en bungalows sur pilotis — où ils existent vraiment, combien ils coûtent réellement, les huit adresses que nous réserverions et les réalités que les brochures passent sous silence.',
  author: { '@type': 'Person', name: AUTHOR.name, url: AUTHOR.url, jobTitle: AUTHOR.role },
  publisher: {
    '@type': 'Organization',
    name: 'My Honeymoon Hotel',
    logo: { '@type': 'ImageObject', url: 'https://myhoneymoonhotel.com/icon.png' },
  },
  datePublished: '2026-06-07',
  dateModified: '2026-06-07',
  mainEntityOfPage: 'https://myhoneymoonhotel.com/fr/overwater-bungalow-honeymoon',
}

const faqs = [
  {
    question: 'Un bungalow sur pilotis vaut-il vraiment son prix ?',
    answer:
      'Oui, mais seulement à la bonne gamme et à la bonne destination. Une chambre sur pilotis à 700&nbsp;$ la nuit à Bora Bora n’est pas le même produit qu’une villa Soneva Jani à 4&nbsp;000&nbsp;$ — et beaucoup de couples qui réservent l’entrée de gamme repartent déçus parce qu’ils attendaient la version catalogue. Les villas qui tiennent vraiment la promesse se situent entre 1&nbsp;500 et 3&nbsp;000&nbsp;$ la nuit, avec piscine privée, orientation coucher de soleil et accès direct au lagon.',
  },
  {
    question: 'Maldives ou Bora Bora&nbsp;?',
    answer:
      'Les Maldives pour la clarté de l’eau, la vie marine, l’exclusivité un atoll = un resort et la plus large offre mondiale de pilotis (90&nbsp;% du parc). Bora Bora pour la silhouette du mont Otemanu, la culture polynésienne et le berceau historique du format (1967). Les Maldives sont irréelles&nbsp;; Bora Bora est cinématographique. Choisissez les Maldives si vous voulez une île privée et l’isolement total&nbsp;; choisissez Bora Bora si vous voulez le mont Otemanu sur chaque photo.',
  },
  {
    question: 'Peut-on nager depuis la terrasse&nbsp;?',
    answer:
      'Sur presque toutes les villas, oui — une échelle ou un escalier descend directement dans le lagon. Mais l’expérience varie énormément. Les villas haut de gamme sont posées au-dessus de sable clair ou de corail avec 20 à 30&nbsp;m de visibilité&nbsp;; les villas d’entrée de gamme surplombent parfois des herbiers ou des chenaux troubles et l’eau est moins engageante que la brochure ne le laisse croire. Vérifiez toujours la clarté du lagon avant de réserver, pas seulement le style de la villa.',
  },
  {
    question: 'Quel budget pour 7 nuits sur pilotis&nbsp;?',
    answer:
      'Un budget tout compris réaliste pour un couple, vols, transferts et une excursion inclus&nbsp;: 9&nbsp;000–14&nbsp;000&nbsp;$ en entrée de gamme (Le Moana Bora Bora, Ayada Maldives)&nbsp;; 18&nbsp;000–30&nbsp;000&nbsp;$ en milieu de gamme (Conrad Maldives Rangali, Four Seasons Bora Bora)&nbsp;; 40&nbsp;000–70&nbsp;000&nbsp;$+ en très haut de gamme (Soneva Jani, Cheval Blanc Randheli). Le transfert maldivien (hydravion ou vol intérieur) ajoute 400 à 1&nbsp;000&nbsp;$ par couple.',
  },
  {
    question: 'Les bungalows sur pilotis résistent-ils aux tempêtes&nbsp;?',
    answer:
      'Oui. Les villas modernes sont conçues pour résister aux tempêtes tropicales et les resorts ferment ou évacuent bien avant tout risque cyclonique. Le vrai risque n’est pas la sécurité mais la déception&nbsp;: un ciel couvert anéantit l’expérience du plancher de verre, et la pluie sur un toit de chaume est soit envoûtante soit insomniante selon votre sommeil. Voyagez dans les fenêtres de saison sèche recommandées plus bas et le risque météo devient marginal.',
  },
]

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

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://myhoneymoonhotel.com/fr' },
    { '@type': 'ListItem', position: 2, name: 'Lune de miel en bungalow sur pilotis', item: 'https://myhoneymoonhotel.com/fr/overwater-bungalow-honeymoon' },
  ],
}

const hotelPicks = [
  { href: '/fr/hotels/conrad-maldives-rangali-island', name: 'Conrad Maldives Rangali Island', dest: 'Maldives', tier: 'Milieu · 1 500 $/nuit', why: 'Resort en deux îles, restaurant sous-marin et la version la plus aboutie du pilotis milieu de gamme aux Maldives.' },
  { href: '/fr/hotels/four-seasons-bora-bora', name: 'Four Seasons Resort Bora Bora', dest: 'Bora Bora', tier: 'Milieu · 2 000 $/nuit', why: 'Les villas avec vue sur le mont Otemanu, le décor le plus pur de Bora Bora et le meilleur service de l’île.' },
  { href: '/fr/hotels/soneva-jani-maldives', name: 'Soneva Jani', dest: 'Maldives', tier: 'Très haut · 4 000 $+/nuit', why: 'Villas sur deux niveaux, toit rétractable au-dessus du lit et toboggan depuis le pont supérieur — la lune de miel pilotis la plus spectaculaire du monde.' },
  { href: '/fr/hotels/cheval-blanc-randheli-maldives', name: 'Cheval Blanc Randheli', dest: 'Maldives', tier: 'Très haut · 4 500 $+/nuit', why: 'Le vaisseau amiral de LVMH — intérieurs Christian Liaigre, quatre restaurants, service de majordome le plus raffiné du segment.' },
  { href: '/fr/hotels/gili-lankanfushi-maldives', name: 'Gili Lankanfushi Maldives', dest: 'Maldives', tier: 'Très haut · 2 800 $/nuit', why: 'La référence «&nbsp;no news, no shoes&nbsp;» — villas en chaume reliées par pontons de bois, luxe pieds nus sans démonstration.' },
  { href: '/fr/hotels/intercontinental-le-moana-bora-bora-resort-bora-bora', name: 'InterContinental Le Moana Bora Bora', dest: 'Bora Bora', tier: 'Entrée · 800 $/nuit', why: 'Le classique de Matira Point — l’accès le plus abordable au rêve Bora Bora sans véritable compromis sur le lagon.' },
  { href: '/fr/hotels/cayo-espanto-belize', name: 'Cayo Espanto', dest: 'Belize', tier: 'Très haut · 2 500 $+/nuit', why: 'Toute petite île privée au large d’Ambergris — la nouvelle frontière du pilotis pour les couples qui veulent la Caraïbe.' },
  { href: '/fr/hotels/huvafen-fushi-maldives', name: 'Huvafen Fushi', dest: 'Maldives', tier: 'Milieu · 1 800 $/nuit', why: 'Adults-only aux Maldives avec le premier spa sous-marin du monde — le bon choix pour le luxe sans enfants sur l’île.' },
]

export default function OverwaterBungalowHoneymoonPageFR() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">Guide de planification</p>
      <h1 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-6 leading-tight">
        La lune de miel en bungalow sur pilotis&nbsp;: le guide honnête 2026.
      </h1>
      <p className="text-zinc-500 text-lg leading-relaxed mb-2">
        Né à l’Hôtel Bora Bora en 1967 — trois hôteliers californiens posent une rangée de huttes en chaume sur pilotis
        au-dessus d’un lagon et inventent par hasard la chambre la plus photographiée du voyage de luxe. Soixante ans
        plus tard, le bungalow sur pilotis reste une icône, mais tous ne se valent pas, et l’écart entre la brochure et
        une vraie villa d’entrée de gamme à 700&nbsp;$ est plus large qu’on ne le pense. Voici la carte honnête.
      </p>

      <AuthorByline />

      <div className="prose prose-zinc max-w-none prose-headings:font-display prose-headings:text-zinc-900 prose-p:text-zinc-600 prose-p:leading-relaxed prose-a:text-rose-500 prose-a:no-underline hover:prose-a:underline mt-10">

        <h2>Où se trouvent les vrais bungalows sur pilotis</h2>
        <p>
          Malgré la dérive marketing, seules six destinations dans le monde disposent d’un parc significatif de villas
          sur pilotis purement conçues pour. Partout ailleurs, il s’agit d’un seul établissement qui se fait passer pour
          une région.
        </p>

        <h3><Link href="/fr/destinations/maldives">Maldives</Link> — l’archétype de l’atoll</h3>
        <p>
          Les Maldives concentrent environ 90&nbsp;% du parc mondial. Chaque resort occupe son propre atoll — l’avantage
          structurel qu’aucune autre destination n’offre&nbsp;: vous ne voyez jamais d’autre hôtel depuis votre villa.
          L’eau est la plus claire du monde (25-30&nbsp;m de visibilité), la variété de villas est la plus large, et le
          très haut de gamme (Soneva Jani, Cheval Blanc Randheli, Joali) joue dans une catégorie à part.
        </p>

        <h3><Link href="/fr/destinations/bora-bora">Bora Bora</Link> — le berceau d’origine</h3>
        <p>
          Le format y est né en 1967. Le décor du mont Otemanu reste le plus cinématographique du genre, et pour les
          couples nord-américains, l’itinéraire (LAX-PPT direct puis 50&nbsp;minutes de vol intérieur jusqu’à BOB) est
          nettement plus simple que les Maldives. Le parc est plus restreint — cinq resorts ont un parc significatif —
          mais la photo «&nbsp;montagne et lagon&nbsp;» reste celle que la plupart des couples ont en tête.
        </p>

        <h3><Link href="/fr/destinations/french-polynesia">Polynésie française</Link> — les jumelles tranquilles</h3>
        <p>
          Moorea et Taha&apos;a — les sœurs moins connues de Bora Bora. Moorea est à 30&nbsp;minutes de ferry de Tahiti
          et abrite un resort sur pilotis (Hilton). Taha&apos;a, entre Bora Bora et Raiatea, accueille Le Taha&apos;a by
          Pearl Resorts — pilotis avec vue directe sur la silhouette de Bora Bora. Les deux sont environ 30&nbsp;% moins
          chers que Bora Bora elle-même.
        </p>

        <h3><Link href="/fr/destinations/fiji">Fidji</Link> — plus proches pour Australiens et Américains</h3>
        <p>
          Le parc de Fidji est minuscule (Likuliku Lagoon Resort reste le seul vrai pilotis) mais l’itinéraire —
          10&nbsp;heures depuis LAX, 4 depuis Sydney — en fait le choix intelligent du Pacifique Sud quand Bora Bora est
          trop loin ou trop cher. Le lagon est plus peu profond et la vie marine moins spectaculaire qu’aux Maldives,
          mais les tarifs sont plus bas.
        </p>

        <h3><Link href="/fr/destinations/mexico">Mexique</Link> — l’exception Riviera Maya</h3>
        <p>
          Les Palafitos d’El Dorado Maroma sur la Riviera Maya sont les seuls bungalows sur pilotis d’Amérique du Nord —
          une véritable exception architecturale, commercialisée sous le nom d’«&nbsp;El Dorado&nbsp;» pour les couples
          nord-américains qui ne peuvent (ou ne veulent) pas voler long-courrier. Le lagon est artificiellement apaisé
          par un mur de récif&nbsp;; l’expérience est mi-pilotis, mi-resort, et idéale pour qui veut la photo sans les
          22 heures de vol.
        </p>

        <h3><Link href="/fr/destinations/belize">Belize</Link> — la nouvelle frontière</h3>
        <p>
          La petite scène pilotis du Belize est le récit de la prochaine décennie —{' '}
          <Link href="/fr/hotels/cayo-espanto-belize">Cayo Espanto</Link> occupe un îlot privé au large d’Ambergris avec
          sept villas (dont la «&nbsp;Casa Ventanas&nbsp;» sur pilotis), et quelques propriétés en bordure de barrière
          ont suivi. Le Belize est la destination pilotis anglophone la plus proche des États-Unis, avec la meilleure
          plongée de la Caraïbe.
        </p>

        <h3><Link href="/fr/destinations/indonesia">Indonésie</Link> — Misool et les pilotis de Raja Ampat</h3>
        <p>
          Le parc indonésien se concentre à Raja Ampat — Misool Resort et quelques jumelles dans le récif le plus
          biodivers de la planète. C’est l’extrémité la plus sauvage du genre&nbsp;: villas en bois construites à la
          main, parfois sans climatisation, et 36&nbsp;heures de trajet depuis l’Europe ou l’Amérique du Nord. Pour les
          plongeurs et les couples en quête de l’ailleurs, rien d’autre n’est comparable.
        </p>

        <h2>Les trois gammes</h2>
        <p>
          Les regrouper toutes sous «&nbsp;bungalow sur pilotis&nbsp;» aplatit une catégorie qui va de 700 à
          5&nbsp;000&nbsp;$ la nuit. Trois gammes, trois lunes de miel différentes.
        </p>

        <h3>Entrée · 700-1&nbsp;000&nbsp;$/nuit</h3>
        <p>
          InterContinental Le Moana Bora Bora, Ayada Maldives, Hilton Moorea. Vous obtenez une vraie chambre sur pilotis
          avec terrasse et accès direct au lagon — pas de piscine privée, parfois une orientation partagée du coucher de
          soleil, parfois une villa un peu plus âgée qui a encaissé dix saisons de soleil et de sel. Le lagon, lui, est
          le même. La villa fait la photo. Pour un budget de 10&nbsp;000-14&nbsp;000&nbsp;$ tout compris pour une
          semaine, cette gamme tient ses promesses sans surenchère.
        </p>

        <h3>Milieu · 1&nbsp;500-2&nbsp;500&nbsp;$/nuit</h3>
        <p>
          <Link href="/fr/hotels/conrad-maldives-rangali-island">Conrad Maldives Rangali Island</Link>,{' '}
          <Link href="/fr/hotels/four-seasons-bora-bora">Four Seasons Bora Bora</Link>, Anantara Veli,{' '}
          <Link href="/fr/hotels/huvafen-fushi-maldives">Huvafen Fushi</Link>. Piscine privée sur la terrasse, orientation
          coucher de soleil garantie, panneau de verre, repas servis dans la villa. C’est le point d’équilibre — la
          gamme où la chambre devient toute la lune de miel et où les excursions deviennent facultatives.
        </p>

        <h3>Très haut · 4&nbsp;000&nbsp;$+/nuit</h3>
        <p>
          <Link href="/fr/hotels/soneva-jani-maldives">Soneva Jani</Link>,{' '}
          <Link href="/fr/hotels/cheval-blanc-randheli-maldives">Cheval Blanc Randheli</Link>, Joali, Velaa. Villas sur
          deux niveaux, toits rétractables, chef privé sur demande, majordome qui vit sur l’île pour la semaine. La lune
          de miel comme déclaration — 40&nbsp;000-70&nbsp;000&nbsp;$ tout compris pour sept nuits, et pour beaucoup,
          l’unique séjour de leur vie à ce niveau.
        </p>

        <h2>Ce qu’on ne vous dit pas</h2>
        <ul>
          <li>
            <strong>Soleil + mer = villa qui vieillit.</strong> Chaume, teck et pin verni se patinent vite sous les
            tropiques. Les resorts haut de gamme font tourner les villas en rénovation tous les quatre à six ans&nbsp;;
            l’entrée de gamme attend souvent huit à neuf ans. La photo de la brochure et la villa où vous dormez
            peuvent être deux versions différentes.
          </li>
          <li>
            <strong>Moustiques au crépuscule.</strong> Le lagon en est exempt&nbsp;; la terrasse à 18&nbsp;h&nbsp;30 ne
            l’est pas, surtout après la pluie. Apportez du DEET ou prévoyez de rentrer pile à l’heure où vous vouliez
            sortir.
          </li>
          <li>
            <strong>Déception du plancher de verre.</strong> Par grand soleil, c’est un aquarium vivant&nbsp;; par ciel
            couvert, c’est une plaque sombre. Anticipez — et vérifiez l’orientation (sable ou corail, l’écart est total).
          </li>
          <li>
            <strong>Bruit de l’océan la nuit.</strong> Le clapot sous la villa à 2&nbsp;h du matin est soit le son le
            plus apaisant qui soit, soit ce qui vous fait demander des bouchons d’oreilles dès le deuxième soir. Les
            dormeurs sensibles devraient envisager une villa de plage à la place.
          </li>
          <li>
            <strong>Le taux de demande de transfert est réel.</strong> Les directeurs de resorts maldiviens estiment
            qu’environ 70&nbsp;% des réservations pilotis demandent un transfert en cours de séjour vers une villa de
            plage — parce que la chaleur de midi, les embruns continus ou l’absence de jardin deviennent trop. La
            parade&nbsp;: ne réservez jamais une semaine entière sur pilotis. Quatre nuits sur pilotis, trois sur la
            plage.
          </li>
        </ul>

        <h2>Les 8 que nous choisirions vraiment</h2>
        <p>
          Huit lunes de miel sur pilotis à épingler, tirées du catalogue. Chacune répond à une question différente —
          entrée de gamme maîtrisée, milieu équilibré, très haut de gamme statement, ou exception côté Caraïbe.
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

        <h2>Quand partir</h2>
        <ul>
          <li><strong>Maldives&nbsp;:</strong> décembre à avril. Novembre est le pic à bon prix avant les tarifs de Noël. Mai-octobre c’est la mousson — risque de pluie quotidien.</li>
          <li><strong>Bora Bora et Polynésie française&nbsp;:</strong> mai à octobre (saison sèche de l’hémisphère sud). Novembre à avril, c’est chaud et plus humide, février étant le plus pluvieux.</li>
          <li><strong>Fidji&nbsp;:</strong> mai à octobre, calendrier identique.</li>
          <li><strong>Mexique (Riviera Maya)&nbsp;:</strong> novembre à mai. Juin-octobre, c’est la saison cyclonique&nbsp;: pas de réservation pilotis sur cette fenêtre.</li>
          <li><strong>Belize&nbsp;:</strong> décembre à avril pour la visibilité en plongée&nbsp;; tempêtes maximales d’août à octobre.</li>
          <li><strong>Indonésie (Raja Ampat)&nbsp;:</strong> octobre à avril pour les mers les plus calmes et la meilleure visibilité.</li>
        </ul>

        <h2>Le verdict honnête</h2>
        <p>
          La lune de miel sur pilotis reste l’icône à raison — mais la version qui tient ses promesses repose sur trois
          choix délibérés&nbsp;: la bonne destination par rapport à votre itinéraire, la bonne gamme pour votre budget
          (ne réservez pas l’entrée de gamme pour une semaine entière, ne réservez pas le très haut de gamme pour deux
          semaines), et un séjour fractionné qui combine pilotis et plage. Faites ces trois choix correctement et le
          format mérite la photo. Manquez-les et la demande de transfert en milieu de séjour devient bien réelle.
        </p>

      </div>

      <section className="mt-16">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">FAQ</p>
        <h2 className="font-display text-3xl text-zinc-900 mb-8">Questions fréquentes</h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <details key={i} className="group border border-zinc-100 rounded-2xl overflow-hidden">
              <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-medium text-zinc-900 text-sm hover:bg-zinc-50 transition-colors list-none">
                <span dangerouslySetInnerHTML={{ __html: faq.question }} />
                <svg className="w-4 h-4 text-zinc-400 shrink-0 ml-4 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
              </summary>
              <div className="px-6 pb-6 pt-2">
                <p className="text-zinc-500 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: faq.answer }} />
              </div>
            </details>
          ))}
        </div>
      </section>

      <div className="mt-16 bg-rose-50/40 border border-rose-100 rounded-2xl p-7 text-center">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-3">Parcourir le catalogue</p>
        <h3 className="font-display text-2xl text-zinc-900 mb-4">Tous les hôtels avec bungalows sur pilotis, notés.</h3>
        <Link
          href="/fr/experiences/overwater-bungalows"
          className="inline-block bg-rose-500 hover:bg-rose-600 text-white font-semibold text-sm px-6 py-3 rounded-full transition-colors"
        >
          Voir tous les hôtels sur pilotis →
        </Link>
      </div>

      <div className="mt-12 text-center">
        <Link href="/fr/destinations" className="text-rose-500 hover:underline text-sm font-semibold">
          ← Toutes les destinations de lune de miel
        </Link>
      </div>
    </div>
  )
}
