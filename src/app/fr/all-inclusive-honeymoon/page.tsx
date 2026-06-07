import type { Metadata } from 'next'
import Link from 'next/link'
import { buildAlternates } from '@/lib/alternates'
import AuthorByline from '@/components/AuthorByline'
import { AUTHOR } from '@/data/author'

export const metadata: Metadata = {
  title: 'Lune de miel all-inclusive : ça vaut le coup ou pas ?',
  description:
    'Le verdict honnête sur l’all-inclusive en lune de miel — où il tient ses promesses (Caraïbe, Mexique, Maldives), où il faut l’éviter (Europe, Bali, safari), trois gammes et six adresses.',
  alternates: buildAlternates('/all-inclusive-honeymoon', 'fr'),
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  inLanguage: 'fr',
  headline: 'Lune de miel all-inclusive&nbsp;: ça vaut le coup ou pas&nbsp;?',
  description:
    'Une analyse régionale honnête de l’all-inclusive en lune de miel — où le format apporte vraiment du luxe, où il abîme l’expérience, trois gammes et les six adresses que nous réserverions.',
  author: { '@type': 'Person', name: AUTHOR.name, url: AUTHOR.url, jobTitle: AUTHOR.role },
  publisher: {
    '@type': 'Organization',
    name: 'My Honeymoon Hotel',
    logo: { '@type': 'ImageObject', url: 'https://myhoneymoonhotel.com/icon.png' },
  },
  datePublished: '2026-06-07',
  dateModified: '2026-06-07',
  mainEntityOfPage: 'https://myhoneymoonhotel.com/fr/all-inclusive-honeymoon',
}

const faqs = [
  {
    question: 'L’all-inclusive vaut-il le coup pour une lune de miel&nbsp;?',
    answer:
      'Tout dépend de l’endroit. Dans la Caraïbe et au Mexique, un all-inclusive milieu ou très haut de gamme (Excellence, Jade Mountain, Belmond Maroma) est souvent le format le plus reposant — repas, boissons, service plage, plus aucune addition à régler. En Europe, à Bali ou en Thaïlande, l’all-inclusive est presque toujours un recul, parce que la scène gastronomique locale <em>est</em> l’expérience et que le resort vous garde sur place pour maximiser sa marge.',
  },
  {
    question: 'Quel est le meilleur resort all-inclusive pour une lune de miel&nbsp;?',
    answer:
      'En très haut de gamme&nbsp;: Jade Mountain à Sainte-Lucie (suites ouvertes, piscines privées, pension complète) et les propriétés Cheval Blanc aux Maldives. En milieu de gamme adults-only&nbsp;: Excellence Punta Cana, Sandals Royal Plantation Jamaïque et Couples Swept Away à Negril. Pour la Caraïbe à budget mesuré&nbsp;: Curtain Bluff (Antigua) et Hermitage Bay offrent plus de romantisme par dollar que la quasi-totalité des équivalents à la carte.',
  },
  {
    question: 'Les adults-only sont-ils meilleurs&nbsp;?',
    answer:
      'Pour une lune de miel, presque toujours oui. L’adults-only filtre l’ambiance kids-club du mass-market, relève le tarif moyen et permet au resort de programmer dîners et animations autour des couples. Sandals (couples only), Excellence, Couples et la plupart du très haut de gamme caribéen fonctionnent ainsi. L’exception, c’est l’all-inclusive maldivien, où chaque villa est déjà assez privée pour que le label adults-only n’apporte rien.',
  },
  {
    question: 'Les excursions sont-elles incluses&nbsp;?',
    answer:
      'Quasi jamais en entrée de gamme, et seulement parfois en très haut de gamme. Sandals et Couples incluent les sports nautiques non motorisés (kayak, paddle, snorkeling) et les animations de groupe. Les très haut de gamme comme Jade Mountain incluent quelques expériences sur place mais facturent les excursions externes. Lisez toujours la fiche d’inclusions — l’all-inclusive couvre repas, boissons et pourboires&nbsp;; les excursions sont presque toujours en sus.',
  },
  {
    question: 'Maldives all-inclusive ou demi-pension&nbsp;?',
    answer:
      'Pour une lune de miel aux Maldives, l’all-inclusive est presque toujours le bon choix. Les resorts sont sur des îles privées sans option de restauration extérieure, les prix à la carte sont brutaux (40&nbsp;$ le petit déjeuner, 200&nbsp;$ le dîner pour deux) et le supplément all-inclusive (200-400&nbsp;$/couple/jour) est rentabilisé dès le déjeuner du deuxième jour. La demi-pension n’a de sens que si vous comptez sauter le déjeuner tous les jours.',
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
    { '@type': 'ListItem', position: 2, name: 'Lune de miel all-inclusive', item: 'https://myhoneymoonhotel.com/fr/all-inclusive-honeymoon' },
  ],
}

const hotelPicks = [
  { href: '/fr/hotels/excellence-punta-cana-dominican-republic', name: 'Excellence Punta Cana', dest: 'République dominicaine', tier: 'Milieu · 400–700 $/nuit AI', why: 'Adults-only, suites swim-up, quatre piscines et une cuisine assez sérieuse pour que vous n’ayez plus envie de quitter le resort.' },
  { href: '/fr/hotels/curtain-bluff-antigua', name: 'Curtain Bluff', dest: 'Antigua', tier: 'Milieu · 900–1 400 $/nuit AI', why: 'La grande dame de l’all-inclusive caribéen — deux plages privées, un vrai programme tennis et une cave qui garde des bordeaux d’anciens millésimes.' },
  { href: '/fr/hotels/hermitage-bay-antigua', name: 'Hermitage Bay', dest: 'Antigua', tier: 'Milieu · 1 000–1 600 $/nuit AI', why: 'Refuge adults-only sur la plage la plus sauvage d’Antigua — petite échelle, pension complète et le dîner le plus romantique de tous les AI de la Caraïbe.' },
  { href: '/fr/hotels/couples-swept-away-jamaica', name: 'Couples Swept Away', dest: 'Negril, Jamaïque', tier: 'Entrée · 350–550 $/nuit AI', why: 'L’all-inclusive couples-only originel — Seven Mile Beach, pas d’enfants, et le meilleur rapport qualité-prix milieu de gamme de la Caraïbe.' },
  { href: '/fr/hotels/sandals-royal-plantation-jamaica', name: 'Sandals Royal Plantation', dest: 'Ocho Rios, Jamaïque', tier: 'Milieu · 700–1 000 $/nuit AI', why: 'Le plus petit, le plus calme, le plus raffiné des Sandals — 74 suites face mer, service majordome partout, la marque sans l’échelle.' },
  { href: '/fr/hotels/cocobay-resort-antigua', name: 'Cocobay Resort', dest: 'Antigua', tier: 'Entrée · 400–650 $/nuit AI', why: 'AI antiguais adults-only en cottages avec les plus belles plunge pools sous 700&nbsp;$ — le vrai choix valeur pour qui veut l’all-inclusive sans l’échelle resort.' },
]

export default function AllInclusiveHoneymoonPageFR() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">Guide de planification</p>
      <h1 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-6 leading-tight">
        Lune de miel all-inclusive&nbsp;: ça vaut le coup ou pas&nbsp;?
      </h1>
      <p className="text-zinc-500 text-lg leading-relaxed mb-2">
        La vraie réponse à «&nbsp;est-ce que l’all-inclusive vaut le coup pour une lune de miel&nbsp;?&nbsp;» n’est ni
        oui ni non — c’est <em>où</em>. Le même format qui apporte une réelle valeur à Sainte-Lucie ou aux Maldives
        devient un recul en Provence ou à Bali, et la plupart des guides aplatissent cette nuance en une mauvaise
        recommandation d’un côté ou de l’autre. Voici la version régionale, par gamme, honnête.
      </p>

      <AuthorByline />

      <div className="prose prose-zinc max-w-none prose-headings:font-display prose-headings:text-zinc-900 prose-p:text-zinc-600 prose-p:leading-relaxed prose-a:text-rose-500 prose-a:no-underline hover:prose-a:underline mt-10">

        <h2>Là où l’all-inclusive brille vraiment</h2>
        <p>
          Quatre régions où le format est, en équilibre, le bon choix pour une lune de miel. Le point commun&nbsp;:
          l’isolement. Quand sortir du resort pour dîner devient compliqué, l’all-inclusive supprime la friction et la
          lune de miel se déroule sans accroc.
        </p>

        <h3><Link href="/fr/destinations/st-lucia">Sainte-Lucie</Link></h3>
        <p>
          Les resorts avec vue Pitons (Jade Mountain, Ladera, Sugar Beach) sont assez éloignés des villes pour qu’un
          dîner externe soit un trajet de 45&nbsp;minutes — et la cuisine sur place est, au sommet, d’un niveau
          véritablement Michelin. L’île la plus photogénique de la Caraïbe, et la réponse la plus simple à
          «&nbsp;adults-only all-inclusive sans côté mass-market&nbsp;».
        </p>

        <h3><Link href="/fr/destinations/antigua">Antigua</Link> et <Link href="/fr/destinations/jamaica">Jamaïque</Link></h3>
        <p>
          Antigua concentre la plus forte densité de petits AI à crédibilité couple de la Caraïbe — Curtain Bluff,
          Hermitage Bay, Galley Bay, Cocobay tournent tous à un niveau honeymoon-crédible. La Jamaïque est le marché
          d’origine de l’AI (Sandals et Couples y ont été inventés) et les adresses adults-only offrent plus de
          romantisme par dollar que presque partout ailleurs.
        </p>

        <h3><Link href="/fr/destinations/turks-and-caicos">Turks-et-Caïcos</Link></h3>
        <p>
          La nouvelle scène AI caribéenne — Blue Haven, Beaches, Alexandra. Grace Bay figure parmi les plus belles
          plages du monde, et les AI font un argument solide comme «&nbsp;épargne-vol&nbsp;» face à Sainte-Lucie pour
          les couples nord-américains.
        </p>

        <h3><Link href="/fr/destinations/mexico">Mexique</Link> — Riviera Maya et Los Cabos</h3>
        <p>
          La Riviera Maya est le plus grand marché AI du monde et le très haut de gamme (Belmond Maroma, Rosewood
          Mayakoba, les propriétés «&nbsp;El Dorado&nbsp;») est d’un niveau réellement élevé. Los Cabos est plus à la
          carte, mais Pueblo Bonito et quelques autres opèrent de solides AI adults-only.
        </p>

        <h3><Link href="/fr/destinations/maldives">Maldives</Link> — le cas particulier</h3>
        <p>
          Une catégorie à part. Chaque resort des Maldives est une île privée sans restauration extérieure —
          l’all-inclusive est de fait le seul format sensé. Les tarifs à la carte sont brutaux (200&nbsp;$ le dîner pour
          deux, 40&nbsp;$ le petit déjeuner) et le supplément AI est rentabilisé dès le déjeuner du deuxième jour. À
          réserver.
        </p>

        <h2>Là où il faut l’éviter</h2>
        <p>
          Le revers. Cinq régions où l’all-inclusive est presque toujours un recul — parce que la cuisine, la culture
          ou l’expérience hors resort <em>est</em> la lune de miel, et que s’enfermer dans un buffet de propriété
          signifie sciemment renoncer au pays pour lequel vous êtes venus.
        </p>
        <ul>
          <li>
            <strong>Europe (toute).</strong> Provence, Toscane, Santorin, côte amalfitaine — le long déjeuner sous les
            platanes, la trattoria de village, le rythme bateau-club-de-plage sont l’essentiel. Les rares AI européens
            opèrent presque tous en mass-market et leur cuisine ne peut rivaliser avec le restaurant du village voisin.
          </li>
          <li>
            <strong>Bali et Thaïlande.</strong> La street food et la scène warung sont ce qui fait une lune de miel dans
            ces pays. Les AI qui existent (milieu de gamme surtout) sont corrects mais vous payez la pension complète
            pour sauter ce qui est irremplaçable ailleurs.
          </li>
          <li>
            <strong>Safari en Afrique.</strong> L’AI safari est structurellement différent — le rythme game drive
            cadence les repas, le dîner en lodge est convivial, et l’«&nbsp;all-inclusive&nbsp;» (repas + deux game
            drives par jour) est de fait obligatoire. Autre catégorie, à ne pas confondre avec l’AI balnéaire.
          </li>
          <li>
            <strong>Japon.</strong> Le ryokan est en pension complète (kaiseki au dîner, petit déjeuner traditionnel)
            mais ce n’est pas un all-inclusive — et chaque repas hors ryokan reste un acte culturel non négociable.
            Réservez le ryokan pour le format, fuyez ce qui s’appelle «&nbsp;all-inclusive&nbsp;».
          </li>
          <li>
            <strong>Italie, France, Grèce, Espagne côtières.</strong> Même logique. Les petites villas et hôtels côtiers
            existent justement pour que vous marchiez jusqu’à la trattoria du port. L’AI supprime la seule chose qui
            fait d’une lune de miel méditerranéenne ce qu’elle est.
          </li>
        </ul>

        <h2>Les trois gammes honnêtes</h2>

        <h3>Entrée · 250-500&nbsp;$/nuit AI</h3>
        <p>
          Sandals grand format mass-market, Iberostar, RIU, Excellence Riviera Cancún, Couples Negril. Boissons maison,
          quatre restaurants en rotation, parfois un kids-club (à éviter si non adults-only), un buffet qui fait le
          travail mais n’est pas la raison de venir. Choix valeur&nbsp;; pas le plafond romantique. Coût total 7 nuits
          pour deux, vols économiques US inclus&nbsp;: 4&nbsp;000-7&nbsp;000&nbsp;$.
        </p>

        <h3>Milieu · 500-1&nbsp;200&nbsp;$/nuit AI</h3>
        <p>
          Le point d’équilibre. Excellence Punta Cana, Couples Swept Away,{' '}
          <Link href="/fr/hotels/sandals-royal-plantation-jamaica">Sandals Royal Plantation</Link>, Hermitage Bay,
          Galley Bay, Curtain Bluff. Adults-only (souvent), bar premium, quatre à sept restaurants de niveau crédible,
          majordome ou concierge sur les chambres hautes, vrai spa, sports nautiques non motorisés inclus. Coût total 7
          nuits&nbsp;: 8&nbsp;000-15&nbsp;000&nbsp;$ tout compris.
        </p>

        <h3>Très haut · 1&nbsp;500&nbsp;$+/nuit AI</h3>
        <p>
          Les hôtels qui se trouvent être en AI plutôt que les AI qui se trouvent être luxe.{' '}
          <Link href="/fr/hotels/jade-mountain-st-lucia">Jade Mountain</Link>,{' '}
          <Link href="/fr/hotels/ladera-resort-st-lucia">Ladera</Link>, Sugar Beach (Viceroy), Cheval Blanc Randheli
          (quand réservé en formule AI). Sanctuaires à ciel ouvert, pension complète avec cuisine niveau Michelin,
          plunge pools privées, majordome partout, le resort est la destination. Coût total 7 nuits&nbsp;:
          18&nbsp;000-35&nbsp;000&nbsp;$+.
        </p>

        <h2>Les 6 que nous réserverions vraiment</h2>
        <p>
          Tirés du catalogue. Chacun répond à une question différente — valeur entrée de gamme, équilibre milieu,
          adults-only luxe, classique caribéen.
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
              <p className="text-sm text-zinc-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: h.why }} />
            </Link>
          ))}
        </div>

        <h2>Ce que l’«&nbsp;all-inclusive&nbsp;» couvre vraiment</h2>
        <ul>
          <li><strong>Boissons&nbsp;:</strong> oui — mais en entrée de gamme, marques maison uniquement. Spiritueux premium et bons vins en supplément, sauf forfait «&nbsp;ultra&nbsp;» ou «&nbsp;majordome&nbsp;».</li>
          <li><strong>Repas&nbsp;:</strong> oui — mais les restaurants à spécialité sont sur réservation et limités à une ou deux visites par semaine. Le buffet couvre le reste.</li>
          <li><strong>Spa&nbsp;:</strong> presque jamais. Le seul massage couple à 200&nbsp;$ sur la fiche d’accueil est la version marketing&nbsp;; le reste est à la carte.</li>
          <li><strong>Activités&nbsp;:</strong> sports nautiques non motorisés (kayak, snorkeling) habituellement inclus&nbsp;; motorisés (jet-ski, plongée) quasi jamais.</li>
          <li><strong>Wi-Fi&nbsp;:</strong> souvent inclus aujourd’hui, mais le tier premium reste parfois en upsell dans les resorts plus anciens.</li>
          <li><strong>Pourboires&nbsp;:</strong> parfois inclus (Sandals, Couples), parfois attendus en plus (Curtain Bluff, la plupart des milieux de gamme).</li>
          <li><strong>Excursions&nbsp;:</strong> presque jamais incluses. Comptez 200-500&nbsp;$/couple pour la croisière snorkeling, la rando en forêt tropicale, la journée tyrolienne.</li>
        </ul>

        <h2>Vérité des coûts</h2>
        <p>
          Une lune de miel caribéenne classique de 7 nuits en milieu de gamme AI pour deux, vols économiques depuis la
          côte Est&nbsp;: 8&nbsp;000-14&nbsp;000&nbsp;$ tout compris. La même formule en très haut de gamme (Jade
          Mountain, Ladera)&nbsp;: 20&nbsp;000-32&nbsp;000&nbsp;$. À comparer&nbsp;: une lune de miel maldivienne à la
          carte (Conrad Rangali, demi-pension) plus vols revient à 18&nbsp;000-25&nbsp;000&nbsp;$ tout compris&nbsp;;
          la même en AI&nbsp;: 22&nbsp;000-30&nbsp;000&nbsp;$ — le supplément est rentabilisé.
        </p>
        <p>
          La vérité mathématique&nbsp;: l’AI milieu de gamme est réellement moins cher qu’un équivalent caribéen à la
          carte <em>lorsque</em> les couples mangeraient et boiraient copieusement. Pour ceux qui prévoient de sauter
          le déjeuner, de boire un cocktail par jour et d’explorer les restaurants extérieurs, la demi-pension ou le
          B&amp;B est le meilleur format.
        </p>

        <h2>Le verdict honnête</h2>
        <p>
          Cessez de demander «&nbsp;l’all-inclusive vaut-il le coup&nbsp;?&nbsp;» et demandez plutôt «&nbsp;la
          destination fonctionne-t-elle en boucle fermée&nbsp;?&nbsp;». Dans la Caraïbe, au Mexique et aux Maldives, la
          réponse est presque toujours oui — et l’AI milieu de gamme adults-only est l’un des formats de lune de miel
          les plus reposants du voyage de luxe. En Europe, en Asie et au safari, la réponse est presque toujours non,
          et il faut réserver à la carte. Ce filtre posé, tout le reste devient simple.
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
        <h3 className="font-display text-2xl text-zinc-900 mb-4">Tous les hôtels all-inclusive lune de miel, notés.</h3>
        <Link
          href="/fr/experiences/all-inclusive"
          className="inline-block bg-rose-500 hover:bg-rose-600 text-white font-semibold text-sm px-6 py-3 rounded-full transition-colors"
        >
          Voir tous les hôtels all-inclusive →
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
