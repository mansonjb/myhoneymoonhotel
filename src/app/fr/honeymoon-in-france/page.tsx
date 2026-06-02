import type { Metadata } from 'next'
import Link from 'next/link'
import { buildAlternates } from '@/lib/alternates'
import AuthorByline from '@/components/AuthorByline'
import { AUTHOR } from '@/data/author'

export const metadata: Metadata = {
  title: 'Lune de miel en France : le guide honnête 2026',
  description:
    'La France est la première destination de lune de miel d’Europe. Provence, Côte d’Azur, châteaux de la Loire, Champagne — les régions, les hôtels, le vrai budget.',
  alternates: buildAlternates('/honeymoon-in-france', 'fr'),
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  inLanguage: 'fr',
  headline: 'Lune de miel en France : le guide honnête 2026.',
  description:
    'Un guide régional pour une lune de miel française — Provence, Côte d’Azur, châteaux de la Loire, Champagne — avec les hôtels que nous réserverions vraiment, des budgets réels, et les règles non écrites du moment où partir.',
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
  mainEntityOfPage: 'https://myhoneymoonhotel.com/fr/honeymoon-in-france',
}

const faqs = [
  {
    question: 'La France est-elle trop cliché pour une lune de miel ?',
    answer:
      'La France n’est pas un cliché — elle est dominante. La combinaison culture gastronomique, infrastructure ferroviaire, inventaire de châteaux-hôtels et héritage glamour de la Riviera donne à la France le catalogue de lune de miel le plus profond d’Europe, et ce qui ressemble à un cliché de loin se révèle, sur place, d’une grande spécificité (la Loire n’a rien à voir avec la Provence, qui n’a rien à voir avec la Côte d’Azur). Le vrai risque est de faire la France de manière générique — Paris plus une vague semaine dans le sud — au lieu de s’engager dans une ou deux régions avec intention.',
  },
  {
    question: 'Côte d’Azur ou Provence ?',
    answer:
      'Côte d’Azur si vous voulez les palaces Belle Époque, la culture des yachts et l’héritage glamour de la Méditerranée — plages de galets, dîners design, Cap-Eden-Roc et Cap-Ferrat au sommet. Provence si vous voulez les champs de lavande, les villages perchés, les longs déjeuners sous les platanes et le format luxe rural — Domaine de Manville, La Bastide de Gordes. Beaucoup de couples font les deux : trois nuits en Provence, trois sur la côte. La route entre les deux fait deux heures et le contraste est précisément l’intérêt.',
  },
  {
    question: 'Quelle est la meilleure période pour une lune de miel en France ?',
    answer:
      'De mi-mai à fin juin et tout le mois de septembre. Mai et juin offrent de longues journées, des jardins à leur apogée et une affluence civilisée ; septembre offre une mer chaude, moins de touristes, et les vendanges en Champagne et dans la Loire. Évitez le 14 juillet à la troisième semaine d’août sauf si vous voulez activement le pic des vacances françaises — la Côte d’Azur devient véritablement difficile, et les prix doublent dans tout le pays.',
  },
  {
    question: 'Combien coûte une lune de miel de luxe en France ?',
    answer:
      'Une lune de miel de deux semaines en France de luxe (hôtels de niveau palace, vols en classe affaires, transferts privés, trois dîners étoilés) coûte 35 000 à 60 000 $ par couple. Les mêmes deux semaines en Loire et en Champagne avec une escale Côte d’Azur coûtent 18 000 à 30 000 $. La Loire est la région véritablement sous-cotée — des Relais & Châteaux 5 étoiles à 450-700 € la nuit contre 1 500-2 500 € pour une qualité équivalente sur la côte.',
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
    { '@type': 'ListItem', position: 2, name: 'Lune de miel en France', item: 'https://myhoneymoonhotel.com/fr/honeymoon-in-france' },
  ],
}

const hotelPicks = [
  { href: '/fr/hotels/hotel-du-cap-eden-roc-cote-dazur', name: 'Hôtel du Cap-Eden-Roc', region: 'Côte d’Azur', why: 'L’adresse la plus légendaire de la Riviera — la piscine d’eau de mer, les cabanas, un siècle d’héritage cinématographique.' },
  { href: '/fr/hotels/grand-hotel-du-cap-ferrat-cote-dazur', name: 'Grand-Hôtel du Cap-Ferrat', region: 'Côte d’Azur', why: 'Palace Four Seasons sur la péninsule la plus boisée de la côte — service plus chaleureux que l’Eden-Roc, cadre tout aussi extraordinaire.' },
  { href: '/fr/hotels/cheval-blanc-st-tropez-cote-dazur', name: 'Cheval Blanc St-Tropez', region: 'Saint-Tropez', why: 'Vaisseau-amiral LVMH au cœur du village, avec la seule plage de sable en ville et la cuisine trois étoiles de Donckele.' },
  { href: '/fr/hotels/domaine-de-manville-provence', name: 'Domaine de Manville', region: 'Provence', why: 'Domaine d’oliveraie sous Les Baux — villas indépendantes avec piscine privée, le choix le plus intelligent en Provence.' },
  { href: '/fr/hotels/domaine-des-hauts-de-loire-loire-valley', name: 'Domaine des Hauts de Loire', region: 'Vallée de la Loire', why: 'Relais & Châteaux de chasse près de Chambord, une étoile Michelin, 70 hectares de bois.' },
  { href: '/fr/hotels/royal-champagne-hotel-spa-champagne', name: 'Royal Champagne Hôtel & Spa', region: 'Champagne', why: 'Hôtel panoramique au-dessus d’Épernay avec la plus extraordinaire piscine à débordement du nord de la France.' },
  { href: '/fr/hotels/domaine-les-crayeres-champagne', name: 'Domaine Les Crayères', region: 'Reims', why: 'Manoir Belle Époque avec une cuisine deux étoiles Michelin — le vaisseau-amiral historique de Champagne.' },
  { href: '/fr/hotels/chateau-de-la-chevre-dor-cote-dazur', name: 'Château de la Chèvre d’Or', region: 'Èze', why: 'Village médiéval perché à 400 m au-dessus de la mer — le coucher de soleil le plus cinématographique de France.' },
]

export default function HoneymoonInFrancePageFR() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">Guide de planification</p>
      <h1 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-6 leading-tight">
        Lune de miel en France&nbsp;: le guide honnête 2026.
      </h1>
      <p className="text-zinc-500 text-lg leading-relaxed mb-2">
        La France est la destination de lune de miel la plus réservée d’Europe — et la plus mal planifiée. Le pays
        compte six régions, pas une seule, et les couples qui réussissent leur lune de miel en France s’engagent dans
        deux ou trois plutôt que de vouloir enfiler Paris-Provence-Côte d’Azur en une seule semaine. Voici comment
        nous la planifierions vraiment.
      </p>

      <AuthorByline />

      <div className="prose prose-zinc max-w-none prose-headings:font-display prose-headings:text-zinc-900 prose-p:text-zinc-600 prose-p:leading-relaxed prose-a:text-rose-500 prose-a:no-underline hover:prose-a:underline mt-10">

        <h2>Pourquoi la France est la 1re destination de lune de miel d’Europe</h2>
        <p>
          La France gagne sur quatre avantages structurels qu’aucun autre pays européen ne combine. D’abord, la
          gastronomie&nbsp;: chaque région possède une identité culinaire forte, et chaque hôtel de lune de miel
          digne de ce nom exploite une cuisine de niveau Michelin. Ensuite, l’infrastructure&nbsp;: le réseau TGV
          place la Champagne à 45 minutes de Paris, la Loire à 1&nbsp;heure et la Côte d’Azur à 5&nbsp;h&nbsp;30 de
          la même gare — aucun autre pays d’Europe ne rend le saut interrégional aussi facile. Troisièmement,
          l’inventaire de châteaux-hôtels&nbsp;: la France compte plus de Relais &amp; Châteaux qu’aucun autre pays
          (plus de 150), et la profondeur Loire-Provence est inégalée. Enfin, la Riviera&nbsp;: les palaces Belle
          Époque comme le Cap-Eden-Roc, le Cap-Ferrat et La Réserve de Beaulieu détiennent un siècle d’héritage
          romantique que le reste de la Méditerranée n’atteint tout simplement pas.
        </p>

        <h2>Où passer sa lune de miel en France</h2>
        <p>
          Six régions sont crédibles pour une lune de miel. Chacune a une personnalité distincte et un plafond de
          prix différent. Ajustez la forme du voyage à votre goût — palace ou château, plage ou vignoble, glamour
          côtier ou lenteur rurale.
        </p>

        <h3><Link href="/fr/destinations/provence">Provence</Link> — dolce-vita ensoleillée</h3>
        <p>
          Le Luberon et les Alpilles — champs de lavande, villages de pierre perchés (Gordes, Ménerbes, Bonnieux),
          le format luxe rural à son meilleur. La Bastide de Gordes, le Domaine de Manville, la Coquillade pour
          l’expérience Relais polie&nbsp;; l’Hôtel Crillon le Brave pour l’hôtel de village historique. L’intérêt
          de la Provence est le rythme rural lent — marchés, longs déjeuners, vignobles, cigales. Mieux en mai-juin
          et en septembre.
        </p>

        <h3><Link href="/fr/destinations/cote-dazur">Côte d’Azur</Link> — glamour Belle Époque</h3>
        <p>
          La Riviera proprement dite — Saint-Tropez, Cap-Ferrat, Cannes, Antibes, Èze, Monaco. Plages de galets,
          palaces, culture des yachts, dîners de niveau Riviera. L’Hôtel du Cap-Eden-Roc et le Grand-Hôtel du
          Cap-Ferrat sont les vaisseaux-amiraux architecturaux et cinématographiques&nbsp;; Cheval Blanc St-Tropez
          et le Château de la Chèvre d’Or en sont les alternatives contemporaines et perchées. L’intérêt de la Côte
          d’Azur est l’héritage glamour. Mieux fin mai-juin et septembre&nbsp;; évitez août à tout prix.
        </p>

        <h3><Link href="/fr/destinations/loire-valley">Vallée de la Loire</Link> — châteaux Renaissance</h3>
        <p>
          La région de lune de miel la plus sous-cotée de France. Le pays des châteaux Renaissance — Chenonceau,
          Chambord, Cheverny — combiné à des hôtels Relais 5 étoiles dans de véritables châteaux royaux (Domaine
          des Hauts de Loire, Château d’Artigny, Château de Pray). Une heure de TGV depuis Paris. Moitié prix des
          propriétés équivalentes en Provence et sur la Côte d’Azur. Mieux de mai à septembre.
        </p>

        <h3><Link href="/fr/destinations/champagne">Champagne</Link> — boire la source</h3>
        <p>
          La lune de miel viticole sous-estimée — 45 minutes de TGV depuis Paris jusqu’à Reims, la cathédrale
          gothique, et l’Avenue de Champagne à Épernay. Krug, Bollinger, Veuve Clicquot, Pol Roger — visites de
          caves intimes et dégustations prestige impossibles à reproduire chez soi. Le Royal Champagne et le
          Domaine Les Crayères en sont les vaisseaux-amiraux. Plus calme que la Bourgogne, plus simple que
          Bordeaux, plus romantique qu’aucune autre région viticole. Mieux de mai à octobre.
        </p>

        <h3>Paris (en escale, pas en destination)</h3>
        <p>
          Paris est l’ouverture ou la clôture universelle d’une lune de miel française — deux ou trois nuits en
          appui d’une étape Champagne ou Loire, et non le centre de la semaine. Le Bristol, le Ritz, le Crillon et
          le Cheval Blanc Paris en sont les adresses palaces. Associez avec le TGV vers le sud après un long
          week-end de musées et de bistrots. Nous ne traitons pas Paris comme une destination de lune de miel en
          soi — des couples le font et l’adorent, mais la densité romantique par jour y est plus faible que ce que
          les régions livrent.
        </p>

        <h2>Le vrai budget</h2>
        <p>
          L’écart de prix entre régions françaises est énorme. Au sommet, une semaine de pointe à l’Hôtel du
          Cap-Eden-Roc coûte 1&nbsp;800 à 3&nbsp;000&nbsp;$ la nuit pour une chambre de base vue mer&nbsp;; la
          suite Bellini peut atteindre 10&nbsp;000&nbsp;$ en août. À l’autre bout, le Château de Pray dans la Loire
          se loue 280 à 450&nbsp;€ la nuit pour un véritable séjour en château du XIIIᵉ siècle avec une cuisine de
          niveau Michelin. La même forme de lune de miel — romance française 5 étoiles — varie d’un facteur cinq
          selon la région. Deux semaines au sommet de la Côte d’Azur coûtent 35&nbsp;000 à 60&nbsp;000&nbsp;$ par
          couple tout compris&nbsp;; les mêmes deux semaines partagées entre la Loire et la Champagne coûtent
          18&nbsp;000 à 28&nbsp;000&nbsp;$. La Loire et la Champagne sont les plans malins de la décennie — toutes
          deux à une heure de Paris, toutes deux avec un inventaire Relais &amp; Châteaux à moitié prix de la Côte
          d’Azur.
        </p>

        <h2>Quand partir</h2>
        <p>
          Les fenêtres de lune de miel diffèrent par région. Côte d’Azur et Provence vont de mai à octobre mais
          août est impossible (chaleur, foule, embouteillages)&nbsp;; les meilleures fenêtres sont mi-mai à fin
          juin et septembre à mi-octobre. Loire et Champagne vont de mai à octobre, septembre s’imposant comme le
          mois secret (vendanges en Champagne, vignes d’automne en Loire, longues journées chaudes, affluence
          maîtrisée). La règle non écrite pour la Côte d’Azur est la même qu’à Saint-Tropez&nbsp;: évitez du 14
          juillet à la troisième semaine d’août. La règle non écrite pour la Champagne est d’éviter la dernière
          semaine de septembre (vendanges), période où les maisons tournent à pleine capacité et où les visites
          sont annulées. Octobre, une fois les vendanges terminées, est la version plus calme et plus belle de la
          Champagne.
        </p>

        <h2>Les hôtels que nous choisirions vraiment</h2>
        <p>
          Huit hôtels de lune de miel français à épingler. Chacun répond à une question différente — palace ou
          château, côte ou vignoble, intime ou vaisseau-amiral.
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

        <h2>Modèles d’itinéraires</h2>

        <h3>Le classique Provence + Côte d’Azur (7 nuits)</h3>
        <p>
          3 nuits au Domaine de Manville dans les Alpilles — Les Baux, Saint-Rémy, les Carrières des Lumières, la
          lavande si la saison s’y prête. Deux heures de route vers l’est jusqu’à la côte. 4 nuits au Grand-Hôtel
          du Cap-Ferrat — Villa Ephrussi, soirée à Monaco, journée Saint-Paul-de-Vence et Fondation Maeght, bateau
          privé jusqu’aux îles de Lérins. La semaine classique de lune de miel à la française&nbsp;: lenteur
          rurale puis glamour côtier.
        </p>

        <h3>La route des châteaux de la Loire (5 nuits)</h3>
        <p>
          5 nuits au Domaine des Hauts de Loire à Onzain — journée Chambord et Cheverny, matinée à Chenonceau,
          Amboise et le Clos Lucé, journée des vignobles de Vouvray, jardins de Villandry. Option vol en
          montgolfière à l’aube au-dessus de Chambord. La lune de miel française à la juste valeur — expérience
          Relais 5 étoiles à moitié prix de la Côte d’Azur.
        </p>

        <h3>Le week-end Paris + Champagne (3 nuits)</h3>
        <p>
          1 nuit à Paris (ouverture au Bristol ou au Ritz), 2 nuits au Royal Champagne à Champillon — visite
          privée Krug ou Bollinger, journée Avenue de Champagne, le spa-piscine à débordement au-dessus de la
          vallée de la Marne. La lune de miel française la plus courte qui tienne debout — 45 minutes de TGV,
          trois jours de caves légendaires et la plus belle vue de vignoble du nord de la France.
        </p>

        <h2>Notre verdict honnête</h2>
        <p>
          Une lune de miel française réussit lorsqu’elle est engagée&nbsp;: deux régions faites correctement plutôt
          que cinq régions sur un itinéraire « Best of France ». Le pays récompense la profondeur. Une semaine
          dans les châteaux de la Loire vous en apprend plus sur la France qu’une quinzaine en patchwork, et les
          tarifs des chambres en Loire et en Champagne sont assez bas pour vous loger dans les vaisseaux-amiraux
          Relais &amp; Châteaux plutôt que dans les hôtels de second rang auxquels vous vous résigneriez sur la
          Côte d’Azur. Choisissez vos régions, réservez les bons hôtels, mangez bien, buvez le vin local, et
          laissez le pays faire son œuvre.
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

      <div className="mt-16 bg-rose-50/40 border border-rose-100 rounded-2xl p-7 text-center">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-3">Commencer à planifier</p>
        <h3 className="font-display text-2xl text-zinc-900 mb-4">Trouvez votre hôtel de lune de miel en France.</h3>
        <Link
          href="/fr/destinations"
          className="inline-block bg-rose-500 hover:bg-rose-600 text-white font-semibold text-sm px-6 py-3 rounded-full transition-colors"
        >
          Parcourir toutes les destinations →
        </Link>
      </div>

      <div className="mt-12 text-center">
        <Link href="/fr/destinations" className="text-rose-500 hover:underline text-sm font-semibold">
          ← Retour à toutes les destinations
        </Link>
      </div>
    </div>
  )
}
