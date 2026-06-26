import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { buildAlternates } from '@/lib/alternates'
import AuthorByline from '@/components/AuthorByline'
import { AUTHOR } from '@/data/author'
import FAQAccordion from '@/components/longtail/FAQAccordion'
import Stay22InlineCTA from '@/components/longtail/Stay22InlineCTA'

export const metadata: Metadata = {
  title: 'Comment choisir votre destination de lune de miel (2026)',
  description:
    'Le guide le plus complet pour choisir votre destination de lune de miel. Un cadre de décision en 7 questions, 8 archétypes, des cas réels et un regard honnête sur les destinations Instagram.',
  alternates: buildAlternates('/how-to-choose-honeymoon-destination', 'fr'),
  openGraph: {
    title: 'Comment choisir votre destination de lune de miel (2026)',
    description:
      'Un cadre en 7 questions, 8 archétypes, trois cas réels, et le regard honnête qu’Instagram ne vous donnera pas.',
    url: 'https://myhoneymoonhotel.com/fr/how-to-choose-honeymoon-destination',
    siteName: 'MyHoneymoonHotel',
    images: [
      {
        url: 'https://myhoneymoonhotel.com/images/hotels/four-seasons-bora-bora/hero.webp',
        width: 1600,
        height: 900,
        alt: 'Comment choisir votre destination de lune de miel, villa sur pilotis au coucher du soleil',
      },
    ],
    locale: 'fr_FR',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Comment choisir votre destination de lune de miel (2026)',
    description: 'Un cadre en 7 questions, 8 archétypes, trois cas réels. Choisissez une destination que vous aimerez vraiment.',
    images: ['https://myhoneymoonhotel.com/images/hotels/four-seasons-bora-bora/hero.webp'],
  },
}

const FAQS = [
  {
    question: 'Combien de temps à l’avance faut-il réserver sa lune de miel ?',
    answer:
      'Verrouillez la destination 9 à 12 mois avant, l’hôtel 6 à 9 mois avant, et les vols à environ 90 jours du départ. Les villas sur pilotis des Maldives, les meilleurs camps de safari et les bungalows de Bora Bora pour les hautes dates partent régulièrement 9 mois à l’avance. À moins de 4 mois et sur une destination premium, attendez-vous à des dates résiduelles, des chambres résiduelles, et un surcoût de 20 à 40 % sur les vols.',
  },
  {
    question: 'Maldives ou Bora Bora pour une première lune de miel ?',
    answer:
      'Maldives si vous voulez des transferts courts, plusieurs styles de resort et le plus grand choix de villas sur pilotis au monde (plus de 130 resorts). Bora Bora si vous voulez la photo la plus iconique en un seul cliché, moins de logistique et des vols plus courts depuis la côte ouest américaine. Les Maldives l’emportent sur le rapport qualité-prix et le choix ; Bora Bora gagne sur la reconnaissance immédiate. Les deux sont des choix honnêtes pour une première lune de miel.',
  },
  {
    question: 'Le tout-inclus est-il une bonne idée pour une lune de miel ?',
    answer:
      'Oui. Un tout-inclus adults-only dans le bon établissement (Excellence Playa Mujeres, Sandals Royal Curacao, Couples Tower Isle) bat souvent un 5 étoiles à la carte sur le ratio coût-romance. Le piège, c’est le tout-inclus bas de gamme où les buffets deviennent répétitifs dès la cinquième soirée. Choisissez du adults-only, plusieurs restaurants à la carte sur place, et l’alcool premium inclus. Notre analyse complète sur /all-inclusive-honeymoon.',
  },
  {
    question: 'Faut-il passer par une agence de voyage spécialisée ?',
    answer:
      'Pour les voyages de plus de 20 000 $, ou tout ce qui implique les Maldives, Bora Bora, un safari multi-étapes ou la Polynésie française, oui. Un conseiller Virtuoso ou Four Seasons Preferred Partner vous obtient le petit-déjeuner offert, 100 $ de crédit hôtel, un surclassement et le check-in anticipé sans frais pour vous (c’est l’hôtel qui le paie). Pour un voyage simple en Europe ou aux Caraïbes sous 10 000 $, réserver en direct ou via Hotels.com convient très bien.',
  },
  {
    question: 'Comment se mettre d’accord quand on veut des choses opposées ?',
    answer:
      'Optez pour un itinéraire en deux étapes. Les compromis classiques : la plage plus la ville devient 4 nuits Tokyo plus 7 nuits Maldives, ou 3 nuits Le Cap plus 6 nuits safari plus 4 nuits Zanzibar. L’aventure plus la détente devient 5 nuits Patagonie plus 5 nuits Atacama. Chercher une seule destination qui satisfasse des préférences opposées finit en général par produire une destination qui ne satisfait personne.',
  },
  {
    question: 'Quel est le budget moyen d’une lune de miel pour un couple américain ou britannique en 2026 ?',
    answer:
      'La dépense médiane américaine en 2026 tourne autour de 6 500 $ pour un voyage de 7 à 10 nuits, avec le quartile supérieur à 14 000 $ et le top 10 % au-delà de 25 000 $. Les couples britanniques dépensent un peu moins en moyenne (environ 5 000 £) mais s’orientent plutôt vers l’Europe et l’Asie que vers les tropiques long-courriers. Les deux médianes ont grimpé d’environ 35 % depuis 2019, portées par la hausse des billets d’avion et des tarifs luxe.',
  },
  {
    question: 'Quelle est la meilleure destination « sans risque » pour les couples indécis ?',
    answer:
      'Sainte-Lucie, l’Italie (côte amalfitaine plus Toscane) et l’île Maurice. Les trois offrent des paysages de carte postale, une logistique simple, plusieurs gammes d’hôtels, des activités variées et un risque de regret quasi nul. C’est l’équivalent lune de miel de commander le deuxième meilleur plat de la carte : jamais le choix le plus excitant, toujours un choix solide.',
  },
  {
    question: 'Comment concilier le budget réel et la destination de rêve ?',
    answer:
      'Trois options honnêtes. Un, descendre d’une gamme d’hôtel sur la destination de rêve (une garden-villa au Soneva Jani vaut mieux qu’une water-villa dans un 3 étoiles). Deux, basculer vers une « deuxième fenêtre » où la même destination coûte 30 à 50 % de moins (Maldives fin avril, Caraïbes début juin). Trois, échanger la destination contre son analogue le plus proche à un prix inférieur (Cap-Vert pour l’ambiance Maldives au tiers du prix, Albanie pour le décor des îles grecques, Sicile pour Amalfi). Presque jamais rentable : une demi-journée dans votre destination de rêve sur une escale.',
  },
]

const HOWTO_STEPS = [
  {
    name: 'Fixer un plafond budgétaire honnête',
    text: 'Mettez-vous d’accord sur un budget total incluant vols, hôtels, restauration, transferts, activités, pourboires et 10 % d’imprévus. Trois paliers : Confort (8 000 $ à 12 000 $), Premium (15 000 $ à 25 000 $), Ultra (30 000 $ et plus). Adaptez la destination au plafond, pas l’inverse.',
  },
  {
    name: 'Décider combien de nuits vous pouvez vraiment poser',
    text: 'Moins de 7 nuits : restez régional (Italie depuis l’Europe, Mexique depuis les États-Unis, Bali depuis l’Australie). 7 à 10 nuits : un resort long-courrier, une seule étape. 10 à 14 nuits : long-courrier en deux étapes. 14 nuits ou plus : trois étapes maximum.',
  },
  {
    name: 'Fixer votre seuil de tolérance au temps de vol',
    text: 'Moins de 6 h : court-courrier (Méditerranée, Caraïbes depuis la côte est des États-Unis, Bali depuis l’Australie). 6 à 12 h : Maldives depuis l’Europe, Caraïbes depuis la côte ouest des États-Unis, Tokyo depuis la côte ouest. Plus de 12 h : Bora Bora, Maldives depuis les États-Unis, Polynésie française, Seychelles. La tolérance au long-courrier est le filtre le plus important que la plupart des couples négligent.',
  },
  {
    name: 'Choisir la saison honnêtement',
    text: 'Adaptez la destination à votre fenêtre de voyage, pas l’inverse. Maldives de novembre à avril. Polynésie française de mai à octobre. Caraïbes de janvier à mai (saison des ouragans de juin à novembre). Europe en mai-juin et septembre. Utilisez notre planificateur mois par mois sur /best-time-to-honeymoon.',
  },
  {
    name: 'Choisir l’énergie de votre lune de miel',
    text: 'Cinq archétypes honnêtes : plage-et-spa (temps horizontal, soleil, eau), actif (randonnée, plongée, exploration), culturel (musées, histoire, gastronomie), spirituel (bien-être, retraites, ryokan), aventure (safari, glaciers, lieux reculés). La plupart des couples combinent deux énergies ; presque aucun n’arrive à en combiner plus de deux sur un même voyage.',
  },
  {
    name: 'Auditer votre seuil de confort et votre appétit culinaire',
    text: 'Quel est votre niveau d’aventure côté nourriture ? Combien de « rustique » tolérez-vous dans un hôtel à 1 000 $ la nuit ? Un camp de tentes au Botswana est une expérience de luxe, mais vous dormez sous toile. Un ryokan à Hakone est luxueux, mais vous dormez sur un futon. Soyez honnêtes à deux avant de réserver.',
  },
  {
    name: 'Auditer votre niveau d’expérience en voyage',
    text: 'Les couples qui font leur premier long-courrier ont intérêt à choisir des destinations avec des resorts anglophones, une seule monnaie et une logistique prévisible (Maldives, Maurice, Sainte-Lucie, Bali). Les voyageurs aguerris peuvent gérer des itinéraires multi-étapes avec autoconduite, barrières linguistiques et transferts complexes (Patagonie, Bhoutan, Madagascar).',
  },
]

const ARCHETYPES = [
  {
    title: 'Paradis insulaire sur pilotis',
    vibe: 'L’image canonique de la lune de miel : villas à plancher de verre, lagon turquoise, temps horizontal absolu.',
    whoFor: 'Couples qui font leur premier long-courrier, qui veulent LA photo, 7 à 10 nuits sans aucune décision, et la sensation la plus romantique possible de « on l’a fait ».',
    whoSkip: 'Couples actifs qui s’ennuient au bout de 48 h de soleil. Couples avec un budget sous 10 000 $ (les villas sur pilotis démarrent à 1 500 $ la nuit minimum).',
    destinations: ['Maldives', 'Bora Bora', 'Fidji'],
    flagshipHotel: 'Soneva Jani (Maldives) pour les primo-arrivants, Four Seasons Bora Bora pour l’expérience Polynésie française iconique',
    cost: '15 000 $ à 35 000 $ pour 7 à 10 nuits',
    pillarLink: '/fr/overwater-bungalow-honeymoon',
  },
  {
    title: 'Classique balnéaire des Caraïbes',
    vibe: 'Sable blanc, palmiers, rhum au coucher du soleil, facilité du tout-inclus, vols simples depuis l’Amérique du Nord.',
    whoFor: 'Couples de la côte est des États-Unis qui veulent un vol de 5 h, une plage à moins de 50 mètres de la chambre, et un prix fixe pour toute la semaine.',
    whoSkip: 'Couples sensibles au risque d’ouragan (juin à novembre est une loterie). Tous ceux qui trouvent les buffets peu romantiques.',
    destinations: ['Sainte-Lucie', 'Antigua', 'Turks-et-Caïcos', 'Barbade'],
    flagshipHotel: 'Jade Mountain à Sainte-Lucie pour la dramaturgie architecturale, Jumby Bay pour l’intimité d’Antigua',
    cost: '8 000 $ à 18 000 $ pour 7 nuits',
    pillarLink: '/fr/all-inclusive-honeymoon',
  },
  {
    title: 'Rivage et village méditerranéens',
    vibe: 'Hôtels en falaise, citronniers, Aperol à l’heure dorée, villages que l’on traverse à pied, la culture culinaire comme préliminaire.',
    whoFor: 'Couples européens, couples gastronomes américains sur un arc italien ou grec de 10 jours, et tous ceux qui trouvent la plage assise lassante au bout de 3 jours.',
    whoSkip: 'Voyageurs de juillet et août (chaleur, foules, paquebots). Couples qui ont besoin d’une piscine privée tous les jours.',
    destinations: ['Côte amalfitaine', 'Santorin', 'Majorque', 'Sicile', 'Mykonos'],
    flagshipHotel: 'Hotel Caruso à Ravello, Grace Hotel Santorini',
    cost: '10 000 $ à 22 000 $ pour 10 nuits',
    pillarLink: '/fr/destinations/amalfi',
  },
  {
    title: 'Campagne européenne',
    vibe: 'Vignobles, slow food, routes entre châteaux, jardins de roses, aucun agenda au-delà du prochain déjeuner.',
    whoFor: 'Couples pour qui le repas est l’activité. Tous ceux qui veulent une semaine en autoconduite, sans aéroport au milieu, totalement analogique.',
    whoSkip: 'Amateurs de plage, ceux qui ont besoin d’une piscine chaque après-midi, primo-voyageurs qui veulent être pris par la main.',
    destinations: ['Toscane', 'Provence', 'Val de Loire', 'Cotswolds'],
    flagshipHotel: 'Castello di Casole en Toscane, La Bastide de Gordes en Provence',
    cost: '9 000 $ à 20 000 $ pour 10 nuits',
    pillarLink: '/fr/honeymoon-in-france',
  },
  {
    title: 'Safari africain',
    vibe: 'Game drives à l’aube, sundowners à 50 mètres des éléphants, déconnexion totale, la lune de miel la plus « ça nous a changés » qui soit.',
    whoFor: 'Couples dont le premier réflexe est l’aventure plutôt que la détente. Tous ceux qui acceptent un réveil à 5 h 30 pour une famille d’éléphants. À combiner avec 3 à 5 nuits à Zanzibar ou au Cap.',
    whoSkip: 'Couples qui considèrent le Wi-Fi comme un besoin de base. Tous ceux pour qui les insectes sont rédhibitoires.',
    destinations: ['Kenya', 'Tanzanie', 'Botswana', 'Afrique du Sud', 'Namibie'],
    flagshipHotel: 'Singita Sasakwa (Tanzanie), Mombo Camp (Botswana)',
    cost: '18 000 $ à 45 000 $ pour 10 nuits',
    pillarLink: '/fr/destinations/tanzania',
  },
  {
    title: 'Spirituel et boutique en Asie',
    vibe: 'Rituels lents, dîners kaiseki, piscines dans la jungle, temples à l’aube, une destination qui vous réorganise discrètement.',
    whoFor: 'Couples qui veulent de la profondeur, pas seulement des photos. Voyageurs récurrents qui ont déjà fait les destinations évidentes. Tous ceux dans un moment de transition (second mariage, redéfinition des priorités post-pandémie).',
    whoSkip: 'Couples qui veulent un voyage exclusivement balnéaire. Primo-voyageurs long-courrier qui trouvent l’immersion culturelle stressante.',
    destinations: ['Bali (Ubud)', 'Bhoutan', 'Kerala', 'Sri Lanka', 'Japon'],
    flagshipHotel: 'Circuit Amankora au Bhoutan, Aman Kyoto, Como Shambhala Bali',
    cost: '12 000 $ à 35 000 $ pour 10 à 14 nuits',
    pillarLink: '/fr/destinations/bali',
  },
  {
    title: 'Aventure en Amérique latine',
    vibe: 'Glaciers, condors, salars, vignobles, Galápagos, arcs en deux étapes qui donnent l’impression d’avoir fait trois voyages.',
    whoFor: 'Voyageurs aguerris, couples qui ont déjà fait les Maldives, tous ceux qui trouvent une lune de miel passive déprimante.',
    whoSkip: 'Primo-voyageurs long-courrier, couples qui veulent zéro logistique, et tous ceux sensibles à l’altitude.',
    destinations: ['Pérou (Vallée sacrée plus Machu Picchu)', 'Patagonie', 'Atacama', 'Galápagos', 'Colombie (Carthagène plus région du café)'],
    flagshipHotel: 'Explora Patagonia, Tierra Atacama, Inkaterra Machu Picchu',
    cost: '14 000 $ à 30 000 $ pour 12 nuits',
    pillarLink: '/fr/destinations/peru',
  },
  {
    title: 'Climat froid et aurores boréales',
    vibe: 'Aurores à 1 h du matin, igloos à toit de verre, fjords, sources chaudes après des randonnées sous zéro, la romance en moufles.',
    whoFor: 'Couples qui détestent la chaleur tropicale, ceux qui se marient en été et veulent la saison opposée pour la lune de miel, voyageurs récurrents en quête d’un contraste dramatique.',
    whoSkip: 'Tous ceux qui ont besoin de la baignade dans leur définition de la « lune de miel ». Couples déjà frileux.',
    destinations: ['Islande', 'Laponie finlandaise', 'Norvège (Lofoten ou Tromsø)', 'Arctique suédois'],
    flagshipHotel: 'Deplar Farm (Islande), Kakslauttanen Arctic Resort (Finlande)',
    cost: '10 000 $ à 25 000 $ pour 7 à 10 nuits',
    pillarLink: '/fr/destinations/iceland',
  },
]

const PERSONAS = [
  {
    label: 'Les gastronomes',
    link: '/honeymoon-for-foodies',
    text: 'Choisissez une destination où le repas est l’activité, pas une interruption. Japon (Tokyo plus Kyoto plus un ryokan kaiseki), nord de l’Italie (Bologne, Modène, les Langhe), Lyon plus Bourgogne, Saint-Sébastien plus Rioja, ou Mexico plus Oaxaca. Évitez les tout-inclus : ils plafonnent votre plafond gastronomique au buffet, et une lune de miel gastronome a besoin de réservations, pas de bracelets.',
  },
  {
    label: 'Les introvertis',
    link: '/honeymoon-for-introverts',
    text: 'Choisissez des destinations où l’établissement est la destination. Îles privées aux Maldives ou aux Seychelles, ryokans isolés à Hakone ou Kanazawa, un circuit au Bhoutan où vous croisez à peine d’autres clients, ou une estancia de Patagonie où le personnel est plus nombreux que les visiteurs. Évitez Santorin en été, Bali Seminyak, et tout tout-inclus de plus de 200 clés.',
  },
  {
    label: 'Les amateurs d’aventure',
    link: '/honeymoon-for-adventure-seekers',
    text: 'Choisissez une destination où le menu d’activités est dense et varié. Costa Rica (jungle plus volcan plus plage), Nouvelle-Zélande (île du Sud en autoconduite), Patagonie (glaciers plus randonnée plus W-trek allégé), Islande (cascades plus aurores plus glacier), ou un safari est-africain plus Zanzibar. L’équivalent lune de miel du repos, c’est le mouvement.',
  },
  {
    label: 'Les couples de 40 ans et plus',
    link: '/honeymoon-for-over-40',
    text: 'Vous avez fait les destinations évidentes. Évitez les Maldives d’entrée de gamme, la foule du coucher de soleil de Santorin, la scène de Tulum. Misez sur la profondeur : adresses Aman au Japon, Singita dans le Serengeti, un triplé Aman Tokyo plus Hoshinoya Kyoto plus Park Hyatt Niseko, un arc Le Cap plus winelands plus safari. Moins d’Instagram, plus de « ça a changé notre façon de voyager ensemble ».',
  },
]

const DECISION_TREE = [
  'Budget inférieur à 10 000 $ ? Cap-Vert, Bali (Ubud plus Uluwatu), Riviera Maya tout-inclus, îles grecques secondaires (Milos, Folégandros, Naxos), Sicile.',
  'Budget de 10 000 $ à 20 000 $ ? Garden-villa aux Maldives, Sainte-Lucie (Jade Mountain), Toscane plus Amalfi, Bali plus Komodo, Costa Rica jungle plus plage.',
  'Budget de 20 000 $ à 35 000 $ ? Water-villa aux Maldives, Polynésie française (Bora Bora plus Tahiti ou Moorea), safari est-africain plus Zanzibar, circuit ryokan au Japon.',
  'Budget de 35 000 $ et plus ? Singita Sasakwa plus Le Cap, Aman Tokyo plus Aman Kyoto plus Park Hyatt Niseko, privatisation d’île aux Fidji, water-villa avec toboggan au Soneva Jani.',
  'Vous détestez le long-courrier ? Méditerranée (Amalfi, Santorin, Majorque), Caraïbes depuis la côte est (Sainte-Lucie, Antigua, Turks-et-Caïcos), Mexique (Riviera Maya, Tulum), Islande.',
  'Premier long-courrier ? Maldives (un seul resort), Maurice, Sainte-Lucie, Bali Ubud plus Uluwatu. Évitez les itinéraires multi-pays.',
  'Voyageurs aguerris ? Patagonie plus Atacama, Bhoutan plus Inde, Afrique de l’Est plus Zanzibar, Japon plus Corée.',
  'Mariage en hiver ? Maldives (haute saison), Caraïbes, Bali, Thaïlande, Maurice.',
  'Mariage en été ? Polynésie française, Méditerranée, safari est-africain, Islande, Patagonie (leur hiver est votre été).',
]

export default function HowToChooseHoneymoonDestinationPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    inLanguage: 'fr',
    headline: 'Comment choisir votre destination de lune de miel : le guide honnête 2026',
    description:
      'Le guide le plus complet pour choisir votre destination de lune de miel. Un cadre en 7 questions, 8 archétypes et trois cas réels.',
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
    mainEntityOfPage: 'https://myhoneymoonhotel.com/fr/how-to-choose-honeymoon-destination',
  }

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Comment choisir votre destination de lune de miel (le cadre en 7 questions)',
    description:
      'Un cadre de décision en 7 questions qui relie votre budget, votre calendrier, votre énergie et votre expérience de voyage aux destinations qui vous correspondent réellement.',
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
    inLanguage: 'fr',
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
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://myhoneymoonhotel.com/fr/' },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Comment choisir votre destination de lune de miel',
        item: 'https://myhoneymoonhotel.com/fr/how-to-choose-honeymoon-destination',
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
          alt="Comment choisir votre destination de lune de miel, villa sur pilotis au coucher du soleil"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={75}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="relative z-10 px-8 sm:px-12 pb-16 max-w-4xl">
          <p className="text-white/60 text-xs tracking-[0.2em] uppercase mb-5">Le guide de décision</p>
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl text-white leading-[1.05] mb-6">
            Comment choisir votre<br />destination de lune de miel.
          </h1>
          <p className="text-white/75 text-base sm:text-lg max-w-2xl leading-relaxed">
            Le guide honnête 2026. Un cadre en 7 questions, huit archétypes de lune de miel, trois cas réels, et les
            vérités qu’Instagram ne vous donnera pas. Choisissez une destination que vous aimerez vraiment, pas celle
            que votre fil d’actualité vous impose.
          </p>
        </div>
      </section>

      {/* BREADCRUMB */}
      <nav aria-label="Fil d’Ariane" className="max-w-4xl mx-auto px-6 pt-8 text-xs text-zinc-500">
        <Link href="/fr/" className="hover:text-zinc-900">Accueil</Link>
        <span className="mx-2">/</span>
        <span className="text-zinc-900">Comment choisir votre destination de lune de miel</span>
      </nav>

      <div className="max-w-4xl mx-auto px-6">
        <AuthorByline reviewedDate="2026-06-25" />
      </div>

      {/* TL;DR */}
      <div className="max-w-3xl mx-auto px-6">
        <aside id="tldr" className="my-8 p-6 rounded-2xl bg-rose-50/60 border border-rose-100">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-2">L’essentiel</p>
          <p className="text-zinc-900 text-lg leading-relaxed font-medium">
            La plupart des couples choisissent leur destination de lune de miel sur Instagram, puis paniquent quand la
            réalité, le budget ou la météo refusent de coopérer. L’approche inverse marche mieux : répondez à sept
            questions honnêtes (budget, nombre de nuits, tolérance au vol, saison, énergie, seuil de confort,
            expérience de voyage), puis projetez vos réponses sur l’un des huit archétypes de lune de miel. Si vous
            êtes en désaccord, optez pour un itinéraire en deux étapes. Si vous bloquez encore, faites notre quiz sur
            <Link href="/fr/quiz" className="underline underline-offset-4 decoration-rose-300 hover:decoration-rose-500"> /quiz</Link>.
          </p>
        </aside>
      </div>

      <article className="max-w-3xl mx-auto px-6 pb-20">
        <div className="prose prose-zinc max-w-none prose-headings:font-display prose-h2:text-4xl prose-h2:sm:text-5xl prose-h2:leading-tight prose-h2:mt-16 prose-h2:mb-6 prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-3 prose-p:leading-relaxed prose-li:leading-relaxed">

          <p className="lead text-lg text-zinc-700 mt-8">
            Cette page est celle que nous aurions aimé qu’on nous tende au moment où nous avons commencé. Ce n’est pas
            une liste de «&nbsp;dix destinations de rêve&nbsp;» piochée dans le fil de quelqu’un d’autre. C’est un
            cadre de décision, testé sur douze ans de planification de lunes de miel pour nous-mêmes et nos lectrices,
            selon le seul critère qui compte&nbsp;: le couple est-il rentré heureux d’avoir choisi cette destination,
            ou est-il rentré en murmurant «&nbsp;la prochaine fois, on aurait dû aller à Maurice&nbsp;». La plupart
            de ces murmures sont évitables. La suite est ici.
          </p>

          <p className="text-zinc-700">
            Si vous avez aussi besoin du calendrier (quand réserver quoi), de la répartition du budget par palier, de
            la liste de bagages et de la question de l’assurance, tout cela est traité séparément sur
            <Link href="/fr/how-to-plan-a-honeymoon"> comment planifier une lune de miel</Link>. Si vous avez déjà
            choisi la saison et voulez savoir ce qui est ouvert et de qualité ce mois-là, voyez
            <Link href="/fr/best-time-to-honeymoon"> la meilleure période pour partir en lune de miel</Link>. Cette
            page porte strictement sur une seule question&nbsp;: quelle destination allez-vous vraiment aimer&nbsp;?
          </p>

          {/* 2 */}
          <h2>L’erreur que commettent la plupart des couples</h2>
          <p>
            La pire erreur de lune de miel n’est pas de prendre l’avion le jour même du mariage (c’est l’erreur numéro
            deux). C’est de choisir la destination sur Instagram, puis d’essayer de plier son budget, sa saison de
            mariage, sa tolérance au vol et les vraies préférences de son partenaire autour d’une photo. La
            destination est décidée émotionnellement&nbsp;; le voyage est ensuite reconstruit à l’envers pour la
            justifier. Le résultat, dans la boîte mail de nos lectrices au moins une fois par semaine&nbsp;: un
            couple qui a payé 22 000 $ pour découvrir que Santorin entre le 15 juillet et le 20 août est un parking
            à paquebots, que les Maldives en mai sont des orages quotidiens, que Bali en janvier est en mousson, et
            que la photo iconique qu’ils traquaient existe environ quatre-vingt-dix minutes par jour, entourée de
            trépieds.
          </p>
          <p>
            Le remède n’est pas de renoncer à rêver. Le remède est de rêver en second, après avoir répondu à sept
            questions honnêtes sur qui vous êtes vraiment en tant que couple. La sélection se fait alors d’elle-même.
            Presque toujours, trois à cinq destinations conviennent, pas celle qu’Instagram a imposée. L’une d’elles
            restera une destination «&nbsp;de rêve&nbsp;». Ce sera simplement celle qui survit au contact avec la
            réalité.
          </p>
          <p>
            Les cinq conséquences les plus courantes du choix piloté par Instagram, par ordre de fréquence dans
            notre boîte&nbsp;: arriver en mousson et voir deux jours de soleil sur dix&nbsp;; dépenser la moitié du
            budget sur des vols inabordables que personne n’avait chiffrés avant l’acompte&nbsp;; atterrir dans une
            destination où l’un des deux est malheureux parce que ses préférences n’ont jamais été nommées&nbsp;;
            tomber sur la mauvaise saison parce que les photos ont été prises en mars et que vous y êtes allés en
            août&nbsp;; et, plus douloureux encore, choisir une destination si célèbre qu’elle ne peut tenir la
            promesse d’intimité et de calme des photos. Les cinq sont évitables. Aucune ne s’évite en s’acharnant
            davantage sur Instagram.
          </p>

          {/* 3 */}
          <h2 id="framework">Le cadre de décision en 7 questions</h2>
          <p>
            Traversez ces sept questions avec votre partenaire, idéalement un soir tranquille, idéalement un verre
            à la main, idéalement avant d’avoir regardé la moindre photo. Chaque question filtre la longue liste. À
            la fin, vous aurez une sélection de trois à cinq destinations qui collent vraiment. C’est alors que vous
            regardez les photos.
          </p>

          <h3>Q1. Quel est votre budget honnête&nbsp;?</h3>
          <p>
            Pas le budget que vous aimeriez avoir, le budget qui existe. Fixez un plafond qui inclut vols, hôtels,
            restauration, transferts, activités, pourboires et 10 % d’imprévus. Trois paliers couvrent honnêtement
            presque tout le monde&nbsp;:
          </p>
          <ul>
            <li><strong>Confort, 8 000 $ à 12 000 $&nbsp;:</strong> Bali (Ubud plus une zone balnéaire), Grèce
            (continent plus une île secondaire), Mexique (Riviera Maya tout-inclus plus Tulum), Cap-Vert, Sicile,
            Majorque. Pour la fourchette basse, voyez notre guide complet sur
            <Link href="/honeymoon-on-a-budget"> lune de miel à petit budget</Link>.</li>
            <li><strong>Premium, 15 000 $ à 25 000 $&nbsp;:</strong> water-villa aux Maldives (un seul resort),
            safari est-africain (un camp plus Zanzibar), Polynésie française (Bora Bora plus Tahiti), circuit ryokan
            au Japon, Italie (Amalfi plus Toscane).</li>
            <li><strong>Ultra, 30 000 $ et plus&nbsp;:</strong> île privée aux Maldives ou aux Fidji, circuit Aman
            (Tokyo plus Kyoto plus Niseko), Singita dans le Serengeti, un multi-stop Polynésie française plus
            Nouvelle-Zélande, un parcours au Bhoutan en hélicoptère.</li>
          </ul>
          <p>
            Pour les budgets ventilés par destination, nous tenons à jour des pages de chiffres réels&nbsp;:
            <Link href="/honeymoon-under-5000"> moins de 5 000 $</Link>,
            <Link href="/honeymoon-under-10000"> moins de 10 000 $</Link>,
            <Link href="/honeymoon-under-15000"> moins de 15 000 $</Link>,
            <Link href="/honeymoon-under-20000"> moins de 20 000 $</Link>,
            ainsi que les pages par destination pour les
            <Link href="/fr/maldives-honeymoon-cost"> Maldives</Link>,
            <Link href="/fr/bali-honeymoon-cost"> Bali</Link>,
            <Link href="/fr/mexico-honeymoon-cost"> le Mexique</Link>,
            <Link href="/fr/turks-and-caicos-honeymoon-cost"> Turks-et-Caïcos</Link>,
            <Link href="/fr/bahamas-honeymoon-cost"> les Bahamas</Link>,
            <Link href="/fr/barbados-honeymoon-cost"> la Barbade</Link>, et
            <Link href="/fr/cape-verde-honeymoon-cost"> le Cap-Vert</Link>.
          </p>

          <h3>Q2. Combien de nuits pouvez-vous vraiment poser&nbsp;?</h3>
          <p>
            Le temps compte plus que l’argent sur une lune de miel. Un séjour de 5 nuits aux Maldives est une insulte
            logistique à la destination&nbsp;: 36 heures de transit consomment 30 % du voyage. Les seuils
            honnêtes&nbsp;:
          </p>
          <ul>
            <li><strong>Moins de 7 nuits&nbsp;:</strong> restez régional. Italie ou Grèce depuis l’Europe, Mexique
            ou Caraïbes depuis les États-Unis, Bali ou Thaïlande depuis l’Australie, Maurice depuis l’Afrique du
            Sud. Le long-courrier sous 7 nuits est une taxe que vous vous infligez.</li>
            <li><strong>7 à 10 nuits&nbsp;:</strong> un resort long-courrier, une seule étape. C’est la lune de
            miel canonique Maldives, Bora Bora, Fidji, Seychelles.</li>
            <li><strong>10 à 14 nuits&nbsp;:</strong> long-courrier en deux étapes. Safari plus plage (Tanzanie
            plus Zanzibar), ville plus resort (Tokyo plus Maldives), aventure plus détente (Patagonie plus
            Atacama).</li>
            <li><strong>14 nuits ou plus&nbsp;:</strong> trois étapes maximum. Au-delà, vous passez la lune de miel
            dans les aéroports. Exception&nbsp;: une plongée mono-pays comme un circuit au Bhoutan ou une
            traversée de l’Afrique du Sud.</li>
          </ul>
          <p>
            Pour des itinéraires par durée, voyez nos planificateurs
            <Link href="/3-day-honeymoon"> 3 jours</Link>,
            <Link href="/5-day-honeymoon"> 5 jours</Link>,
            <Link href="/7-day-honeymoon"> 7 jours</Link>,
            <Link href="/10-day-honeymoon"> 10 jours</Link>, et
            <Link href="/14-day-honeymoon"> 14 jours</Link>.
          </p>

          <h3>Q3. Quelle durée de trajet tolérez-vous&nbsp;?</h3>
          <p>
            L’un des filtres les plus sous-estimés. Un couple qui trouve un vol de 5 h inconfortable ne devrait pas
            réserver les Maldives depuis New York (16 h plus un transfert en hydravion). Les paliers honnêtes&nbsp;:
          </p>
          <ul>
            <li><strong>Moins de 6 h&nbsp;:</strong> depuis la côte est des États-Unis, les Caraïbes et le Mexique.
            Depuis l’Europe, la Méditerranée et l’Afrique du Nord. Depuis l’Australie, Bali, les Fidji, la
            Nouvelle-Zélande.</li>
            <li><strong>6 à 12 h&nbsp;:</strong> depuis la côte est des États-Unis, l’Europe et le nord de
            l’Amérique du Sud. Depuis l’Europe, les Maldives, les Seychelles, l’Afrique de l’Est. Depuis la côte
            ouest des États-Unis, Tokyo et Bora Bora.</li>
            <li><strong>Plus de 12 h&nbsp;:</strong> depuis les États-Unis, la Polynésie française, les Maldives,
            les Seychelles, Bali, l’Australie. Depuis l’Europe, l’Australie, la Polynésie française, les îles Cook,
            le Pacifique profond.</li>
          </ul>
          <p>
            La premium economy ou la classe affaires change tout. Un vol de 16 h en lit plat n’a rien à voir avec
            le même vol en éco. Si le budget supporte le lit plat à l’aller (souvent atteignable en miles), faites
            le long segment à l’aller, et le standard au retour, quand la fatigue compte moins.
          </p>

          <h3>Q4. À quelle saison voyagez-vous&nbsp;?</h3>
          <p>
            Adaptez la destination à votre fenêtre de voyage, pas l’inverse. Le moyen le plus rapide de gâcher une
            lune de miel aux Maldives, c’est de la réserver en mai parce que c’est le mois du mariage. Les grandes
            fenêtres&nbsp;:
          </p>
          <ul>
            <li><strong>Décembre à mars&nbsp;:</strong> Maldives, Bali (saison sèche), Thaïlande, Maurice,
            Seychelles en pleine saison. Caraïbes fiables.</li>
            <li><strong>Avril à juin&nbsp;:</strong> Méditerranée intersaison (le sweet spot), cerisiers en fleurs
            au Japon, saison verte est-africaine.</li>
            <li><strong>Juillet à août&nbsp;:</strong> Polynésie française, Islande, Scandinavie, saison sèche
            est-africaine, hiver austral en Afrique australe (bon pour le safari). Évitez la Méditerranée si vous
            n’aimez pas la foule.</li>
            <li><strong>Septembre à novembre&nbsp;:</strong> de nouveau l’intersaison méditerranéenne (le second
            sweet spot), intersaison aux Maldives, ouverture de la Patagonie, intersaison aux Galápagos.</li>
          </ul>
          <p>
            Pour un appariement destination par mois, voyez notre planificateur sur
            <Link href="/fr/best-time-to-honeymoon"> la meilleure période pour partir en lune de miel</Link>, et les
            pages par mois&nbsp;:
            <Link href="/honeymoon-in-january"> janvier</Link>,
            <Link href="/honeymoon-in-february"> février</Link>,
            <Link href="/honeymoon-in-march"> mars</Link>,
            <Link href="/honeymoon-in-april"> avril</Link>,
            <Link href="/honeymoon-in-may"> mai</Link>,
            <Link href="/honeymoon-in-june"> juin</Link>,
            <Link href="/honeymoon-in-july"> juillet</Link>,
            <Link href="/honeymoon-in-august"> août</Link>,
            <Link href="/honeymoon-in-september"> septembre</Link>,
            <Link href="/honeymoon-in-october"> octobre</Link>,
            <Link href="/honeymoon-in-november"> novembre</Link>, et
            <Link href="/honeymoon-in-december"> décembre</Link>.
          </p>

          <h3>Q5. Quelle énergie voulez-vous&nbsp;?</h3>
          <p>
            C’est là que la plupart des couples passent à côté de l’essentiel. Il existe cinq énergies de lune de
            miel honnêtes. La plupart des couples en combinent deux&nbsp;; presque aucun n’en combine plus de deux
            sur un même voyage.
          </p>
          <ul>
            <li><strong>Plage-et-spa&nbsp;:</strong> temps horizontal, soleil, eau, massages, aucun planning.
            Maldives, Bora Bora, Maurice, Caraïbes.</li>
            <li><strong>Actif&nbsp;:</strong> randonnée, plongée, exploration, journées variées. Costa Rica,
            Nouvelle-Zélande, Hawaï, Bali (Ubud plus surf).</li>
            <li><strong>Culturel&nbsp;:</strong> musées, histoire, gastronomie, villes à arpenter. Japon, Italie,
            Portugal, Mexico plus Oaxaca, Marrakech.</li>
            <li><strong>Spirituel ou bien-être&nbsp;:</strong> retraites, ryokans, ayurvéda, slow travel en
            profondeur. Bhoutan, Kerala, Bali Ubud, Hakone, certaines adresses Aman.</li>
            <li><strong>Aventure&nbsp;:</strong> safari, glaciers, paysages reculés, niveau expédition. Afrique de
            l’Est, Patagonie, Islande, Galápagos, Bhoutan.</li>
          </ul>
          <p>
            Les couples gagnants en double énergie&nbsp;: safari plus plage, ville plus resort, aventure plus
            détente, culturel plus plage. L’erreur classique&nbsp;: tenter d’en combiner trois ou plus, et finir un
            voyage de 14 nuits avec sept aéroports.
          </p>

          <h3>Q6. Quel est votre seuil de confort et votre appétit culinaire&nbsp;?</h3>
          <p>
            Cette question est rarement posée à voix haute, et elle pèse énormément. Un camp de tentes au Botswana
            est une expérience «&nbsp;luxe&nbsp;» mais vous dormez sous toile et vous douchez au seau. Un ryokan à
            Hakone est luxueux, mais vous dormez sur un futon, le dîner est un kaiseki fixe à 18 h 30, et il n’y
            a pas d’option petit-déjeuner occidental. Un éco-resort en pleine jungle à Bali est superbe, mais il y
            a des insectes dans la villa à ciel ouvert, et c’est à 4 h de route de l’aéroport.
          </p>
          <p>
            Si les deux partenaires sont honnêtement «&nbsp;seuil de confort élevé&nbsp;», orientez-vous vers les
            villas sur pilotis, les tout-inclus caribéens, la Méditerranée et les 5 étoiles urbains à Tokyo ou
            Paris. Si l’un ou les deux sont «&nbsp;seuil de confort flexible&nbsp;», le monde s’ouvre&nbsp;: safari,
            jungle, ryokan, croisière d’expédition, tout devient envisageable. En cas de désalignement sur cet
            axe, nommez-le, et choisissez une destination qui satisfait le seuil le plus élevé. L’inverse (le
            partenaire à seuil élevé serrant les dents dans un camp de tentes) est une cause classique de
            rancune post-lune de miel.
          </p>

          <h3>Q7. Êtes-vous tous deux primo-voyageurs long-courrier, ou aguerris&nbsp;?</h3>
          <p>
            La question la plus négligée des sept. Les primo-voyageurs long-courrier tirent un bénéfice énorme des
            destinations à resorts anglophones, à monnaie unique, à logistique prévisible et à un seul hôtel pour
            tout le voyage. La lune de miel mono-resort aux Maldives est presque calibrée pour les primo-arrivants.
            Maurice, Sainte-Lucie, Bali Ubud plus Uluwatu et le tout-inclus de la Riviera Maya aussi.
          </p>
          <p>
            Les voyageurs aguerris peuvent gérer des itinéraires multi-étapes avec autoconduite, barrières
            linguistiques et transferts complexes. Patagonie plus Atacama, Bhoutan plus Inde, Madagascar plus la
            Réunion, et Japon plus Corée sont tous de légitimes lunes de miel d’aguerris. Si l’un est aguerri et
            l’autre primo, alignez-vous par défaut sur le primo. L’aguerri a déjà connu cela&nbsp;; le primo le vit
            pour la première fois, sur le voyage le plus chargé émotionnellement de sa vie jusqu’ici.
          </p>

          {/* 4 ARCHETYPES */}
          <h2 id="archetypes">Les 8 archétypes de lune de miel</h2>
          <p>
            Une fois les sept questions traversées, vos réponses pointent presque toujours vers l’un de ces huit
            archétypes. Chacun est un schéma de lune de miel réel et établi, avec sa fourchette de coût honnête, le
            resort qui le définit, et les couples pour lesquels il est inadapté. Nous renvoyons vers le pilier
            dédié quand il existe.
          </p>

          {ARCHETYPES.map((a) => (
            <div key={a.title} className="not-prose my-10 border border-zinc-100 rounded-2xl p-6 sm:p-8 bg-white">
              <h3 className="font-display text-2xl text-zinc-900 mb-3">{a.title}</h3>
              <p className="text-zinc-700 text-base mb-4 italic">{a.vibe}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-zinc-700 mb-4">
                <div>
                  <p className="text-xs uppercase tracking-widest text-rose-500 font-semibold mb-1">Pour qui</p>
                  <p>{a.whoFor}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-rose-500 font-semibold mb-1">À éviter si</p>
                  <p>{a.whoSkip}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-rose-500 font-semibold mb-1">Destinations</p>
                  <p>{a.destinations.join(', ')}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-rose-500 font-semibold mb-1">Adresse de référence</p>
                  <p>{a.flagshipHotel}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-rose-500 font-semibold mb-1">Coût réel</p>
                  <p>{a.cost}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-rose-500 font-semibold mb-1">En savoir plus</p>
                  <p><Link href={a.pillarLink} className="text-rose-500 hover:underline">{a.pillarLink}</Link></p>
                </div>
              </div>
            </div>
          ))}

          {/* 5 DEAL-BREAKERS */}
          <h2>Les 5 points de blocage classiques et comment les traiter</h2>

          <h3>1. L’un veut la plage, l’autre veut la ville</h3>
          <p>
            C’est le désaccord unique le plus fréquent que nous voyons, et le plus simple à résoudre. Faites un
            deux-étapes. Les arcs classiques&nbsp;: 4 nuits Tokyo plus 7 nuits Maldives, 3 nuits Le Cap plus 6
            nuits safari plus 4 nuits Zanzibar, 4 nuits Buenos Aires plus 6 nuits Patagonie, 5 nuits Mexico plus 5
            nuits Riviera Maya. La personne plage a sa semaine&nbsp;; la personne ville a sa dose culturelle&nbsp;;
            personne ne capitule sur une destination qui ne satisfait ni l’un ni l’autre.
          </p>

          <h3>2. Écart de budget entre les attentes et la réalité</h3>
          <p>
            L’un veut la water-villa du Soneva Jani, l’autre sait que le budget est de 12 000 $. La conversation
            honnête consiste à choisir le compromis le moins douloureux. Trois options, par ordre d’impact. Un,
            descendre d’une gamme d’hôtel à l’intérieur de la destination de rêve (une garden-villa dans un 4
            étoiles maldivien restitue 80 % de l’expérience Maldives à 40 % du prix). Deux, décaler la destination
            de rêve d’une saison (Maldives fin avril plutôt qu’en janvier, Caraïbes début juin plutôt qu’en
            février). Trois, troquer la destination contre son analogue le plus proche&nbsp;: Cap-Vert pour
            l’ambiance Maldives au tiers du prix, Albanie pour le décor des îles grecques, Sicile pour Amalfi,
            Maurice pour les Seychelles.
          </p>

          <h3>3. L’un déteste les longs vols</h3>
          <p>
            Les lunes de miel court-courrier sont de vraies lunes de miel. La Méditerranée (Amalfi, Majorque,
            Crète) depuis l’Europe. Les Caraïbes (Antigua, Turks-et-Caïcos, Sainte-Lucie) depuis la côte est des
            États-Unis. Bali depuis l’Australie. Cap-Vert depuis l’Europe de l’Ouest (5 h 30, pas de décalage,
            ambiance villa sur pilotis). Le Mexique depuis n’importe où sur le continent. Aucune de ces options
            n’est de second rang. Elles sont simplement différentes.
          </p>

          <h3>4. Visa, passeport ou contraintes administratives</h3>
          <p>
            Certaines destinations exigent 6 à 12 semaines de paperasse (visa Bhoutan, e-visa indien avec
            biométrie, Russie, certaines parties d’Afrique, Brésil selon le passeport). Certaines exigent des
            vaccins (la fièvre jaune pour certaines destinations africaines nécessite 10 jours minimum pour être
            active). Certaines exigent un passeport valable 6 mois après le retour avec deux pages vierges. Auditez
            cela avant de tomber amoureux de la destination. Le nombre de couples qui posent un acompte non
            remboursable sur une destination où ils ne peuvent pas effectivement entrer à temps n’est pas nul.
          </p>

          <h3>5. Décalage entre la saison rêvée et la date du mariage</h3>
          <p>
            Votre destination de rêve est en mauvaise saison. Trois options honnêtes. Un, accepter la mauvaise
            saison avec une décote de 30 à 50 % et caler le voyage autour (Maldives en mai, accepter les orages,
            choisir un resort aux solides aménités intérieures). Deux, viser la «&nbsp;deuxième fenêtre&nbsp;» où
            la destination fonctionne encore à 70 %&nbsp;: Maldives fin avril, Caraïbes début juin, Polynésie
            française début novembre. Trois, reporter la lune de miel de 3 à 6 mois. Une lune de miel décalée à la
            bonne saison bat à chaque coup une lune de miel parfaitement datée en mousson.
          </p>

          {/* 6 PERSONAS */}
          <h2 id="personas">Par personnalité de lune de miel</h2>
          <p>
            Au-delà du cadre en sept questions, voici quatre profils avec des recommandations concrètes. Chacun
            renvoie vers notre pilier persona dédié avec une liste plus longue.
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
          <h2>Les 5 questions à se poser avant de réserver</h2>
          <p>
            Avant de poser un acompte, asseyez-vous avec votre partenaire, sans ordinateur, sans téléphone, sans
            tableau d’inspiration. Posez-vous ces cinq questions. Les réponses font remonter des préférences et des
            rédhibitoires qu’aucune sélection ne peut anticiper.
          </p>
          <ol>
            <li><strong>Si on faisait ce voyage et que l’un de nous deux détestait trois jours, lesquels chacun serait prêt à encaisser&nbsp;?</strong> La réponse honnête révèle les tolérances. Si aucun n’encaisserait une journée de 4 h de transfert, rayez les destinations à longs transferts. Si l’un refuse un réveil à 5 h pour des game drives, le safari sort.</li>
            <li><strong>Qu’avons-nous chacun préféré dans le meilleur voyage que nous ayons fait ensemble jusqu’ici, et que faut-il que la lune de miel répète&nbsp;?</strong> Les lunes de miel qui ignorent les meilleurs souvenirs communs ont tendance à décevoir. Ce voyage que vous avez tous deux aimé est de la donnée.</li>
            <li><strong>Quelle est une chose que l’un de nous ne dirait jamais à un conseiller voyage, mais qui est vraie&nbsp;?</strong> Cela fait souvent émerger les vraies préférences&nbsp;: «&nbsp;les marchés m’angoissent&nbsp;», «&nbsp;je ne dors pas dans des chambres mitoyennes&nbsp;», «&nbsp;j’ai le mal de mer sur les petits bateaux&nbsp;». Planifiez autour.</li>
            <li><strong>Quelle est la photo que l’on veut ramener à la maison&nbsp;? Puis&nbsp;: quel voyage livrerait cette photo et douze autres choses que l’on aime&nbsp;?</strong> Inversion utile du problème Instagram. Servez-vous de la photo comme d’une étiquette, pas comme du brief.</li>
            <li><strong>Avec la moitié du budget, quelle destination choisirait-on à la place&nbsp;?</strong> La réponse révèle souvent à quoi sert vraiment la destination. Si la version «&nbsp;moitié de budget&nbsp;» vous mène quelque part de réellement désirable, la destination de départ relevait peut-être de la démonstration, pas du fit.</li>
          </ol>

          {/* 8 CASE STUDIES */}
          <h2 id="case-studies">Trois cas réels</h2>
          <p>
            Trois couples avec lesquels nous avons travaillé (détails et prénoms recomposés et modifiés pour
            l’anonymat). Les décisions qu’ils ont fait passer dans le cadre en sept questions. Les destinations que
            le cadre a effectivement produites.
          </p>

          <h3>Cas A&nbsp;: couple new-yorkais, budget 8 000 $, 7 nuits, premier long-courrier</h3>
          <p>
            Mia et Daniel, 31 ans tous les deux, mariage en octobre. Plafond de 8 000 $ pour la lune de miel. Tous
            les deux anxieux à l’idée d’une logistique multi-étapes. Aucun n’a déjà pris un vol de plus de 8 h.
            Destination de rêve&nbsp;: les Maldives. Réalité budgétaire&nbsp;: non. Le cadre filtre cela
            durement. Q1 (budget)&nbsp;: 8 000 $. Q2 (nuits)&nbsp;: 7. Q3 (tolérance au vol)&nbsp;: moins de 10 h.
            Q4 (saison)&nbsp;: fin octobre. Q5 (énergie)&nbsp;: plage plus spa, culturel léger. Q6 (seuil de
            confort)&nbsp;: élevé. Q7 (expérience)&nbsp;: premier long-courrier.
          </p>
          <p>
            La sélection produite par le cadre&nbsp;: Cap-Vert (Sal ou Boa Vista), Grèce (Crète ou Naxos en fin de
            saison), Mexique (Riviera Maya tout-inclus). Le choix&nbsp;: Cap-Vert, 6 h depuis JFK via Lisbonne,
            villas sur pilotis à une fraction du coût des Maldives, fin octobre encore en météo de plage. Ils ont
            réservé le Pestana Tropico à Praia comme ancrage urbain, et une pousada en bord de mer à Boa Vista
            pour 5 nuits. Dépense totale, vols compris&nbsp;: 7 400 $. Ils sont rentrés heureux de ne pas avoir
            poursuivi la photo des Maldives à deux fois le prix. Voyez notre guide complet
            <Link href="/fr/cape-verde-honeymoon-cost"> coût d’une lune de miel au Cap-Vert</Link>.
          </p>

          <h3>Cas B&nbsp;: budget 25 000 $, 12 nuits, deux voyageurs aguerris</h3>
          <p>
            Ana et Tom, milieu de la trentaine, mariage en novembre. Plafond de 25 000 $. Tous deux ont déjà fait
            les destinations évidentes (Bali, Thaïlande, Mexique, Italie). Aucun ne veut un voyage uniquement
            balnéaire. Tous deux à l’aise avec un deux-étapes. Q1&nbsp;: 25 000 $. Q2&nbsp;: 12 nuits. Q3&nbsp;:
            long-courrier sans problème. Q4&nbsp;: fin novembre. Q5&nbsp;: aventure plus détente. Q6&nbsp;: seuil
            de confort flexible. Q7&nbsp;: aguerris.
          </p>
          <p>
            Le cadre a produit&nbsp;: Patagonie plus Atacama (leur été est votre hiver, parfait pour novembre),
            safari est-africain plus Zanzibar, Japon en automne flamboyant, circuit Bhoutan. Le choix&nbsp;:
            Patagonie plus Atacama. 5 nuits à Explora Patagonia (lodge de randonnée en pension complète), 5 nuits
            au Tierra Atacama (haut-désert en pension complète), 2 nuits à Santiago à l’aller et au retour.
            Dépense totale, business class en miles à l’aller comprise&nbsp;: 24 800 $. Ils sont rentrés avec le
            voyage que la version safari plus plage n’aurait pas livré&nbsp;: une fatigue réelle, des glaciers au
            lever du soleil, des salars au lever de lune, et deux destinations qu’aucun des deux n’aurait choisies
            seul.
          </p>

          <h3>Cas C&nbsp;: budget 50 000 $, 14 nuits, tous deux quadragénaires, second mariage</h3>
          <p>
            Helen et James, 47 ans tous les deux, mariage fin février (le sien dix mois plus tôt était le premier).
            Tous deux ont déjà fait les Maldives, Bora Bora, la Toscane, la Provence, le Japon une fois. Tous deux
            veulent de la profondeur et une destination qui «&nbsp;mérite&nbsp;» cette lune de miel. Budget de
            50 000 $. Q1&nbsp;: 50 000 $. Q2&nbsp;: 14 nuits. Q3&nbsp;: long-courrier sans problème. Q4&nbsp;: fin
            février (leur poursuite d’été, notre hiver). Q5&nbsp;: culturel plus bien-être plus aventure légère.
            Q6&nbsp;: seuil de confort élevé (pas de seau, pas de murs mitoyens). Q7&nbsp;: aguerris en
            profondeur.
          </p>
          <p>
            Le cadre a produit&nbsp;: Aman Tokyo plus Hoshinoya Kyoto plus Park Hyatt Niseko (Japon en version
            approfondie, avec ski à Niseko pour février). Singita Sasakwa plus Le Cap plus winelands (Afrique en
            version approfondie). Circuit Bhoutan en cinq adresses Aman. Le choix&nbsp;: le triplé japonais. 4
            nuits à l’Aman Tokyo, 4 nuits au Hoshinoya Kyoto (avec excursions à Nara et Osaka), 4 nuits ski au
            Park Hyatt Niseko, 2 nuits à Tokyo au retour. Business class aller-retour. Dépense totale&nbsp;:
            48 400 $. Ils sont rentrés, selon leurs mots, avec le sentiment que «&nbsp;le second mariage était une
            célébration&nbsp;; la lune de miel, c’était la vraie déclaration&nbsp;». Voilà ce qu’achètent 50 000 $
            dépensés avec précision.
          </p>

          {/* 9 INSTAGRAM */}
          <h2 id="instagram-honest">Le regard honnête sur les destinations Instagram</h2>
          <p>
            Cinq destinations dont la représentation Instagram diverge le plus de la réalité, d’après notre
            expérience. Méritent d’être nommées parce qu’elles concentrent une part disproportionnée des
            déceptions post-lune de miel.
          </p>
          <p>
            <strong>Santorin en juillet et août.</strong> Les photos de la caldera sont réelles. Le déversement de
            16 h des paquebots avec 12 000 visiteurs d’un jour dans Oia est tout aussi réel. De 10 h à 18 h en
            haute saison, les villages célèbres sont inaccessibles. Le Santorin compatible avec la lune de miel
            existe en mai, fin septembre et octobre. Ou dans l’un des rares hôtels en falaise (Grace, Canaves Oia,
            Katikies) avec piscine privée que vous ne quittez pas.
          </p>
          <p>
            <strong>Bali Seminyak en saison sèche.</strong> La lune de miel à Bali existe. Pas à Seminyak. Mais à
            Ubud (rizières en terrasses, rituels, villas de jungle) plus Uluwatu (hôtels en falaise, coucher de
            soleil, surf). Seminyak en juillet, c’est beach clubs, embouteillages et un public qui ne correspond
            pas aux photos.
          </p>
          <p>
            <strong>Maldives de mai à octobre.</strong> Orages quotidiens 30 à 60 % des jours. L’expérience
            villa sur pilotis se dégrade sous la pluie soutenue (la scène iconique plancher de verre suppose du
            soleil). Pour une première lune de miel, les Maldives, c’est novembre à avril. L’intersaison existe,
            mais reste optionnelle.
          </p>
          <p>
            <strong>Bora Bora pour la photo, seulement.</strong> Le cliché iconique unique (mont Otemanu depuis
            une villa sur pilotis) est réel et livré environ 70 % des matins. Le reste du voyage, c’est un seul
            resort, un seul lagon, une seule vue. Les couples qui veulent de la variété regrettent souvent le
            mono-resort à Bora Bora et auraient préféré l’associer à Tahiti ou Moorea. Les arcs à deux îles pour
            la Polynésie française gagnent presque toujours.
          </p>
          <p>
            <strong>Tulum.</strong> Ce qui était un village balnéaire tranquille il y a cinq ans est devenu
            jungle-chic, photogénique et durement embouteillé. Les routes sont mauvaises, l’érosion de la plage
            est significative, et la scène est plus exigeante que ne le suggèrent les photos. La lune de miel
            yucatèque honnête associe souvent Tulum (2 nuits) à Holbox ou Isla Mujeres (5 nuits) pour le calme
            promis sur les photos.
          </p>

          {/* 10 DECISION TREE */}
          <h2 id="tree">Arbre de décision en résumé</h2>
          <p>Le moyen le plus rapide de transformer le cadre en action. Lisez de haut en bas&nbsp;; arrêtez-vous à la première ligne qui vous correspond.</p>
          <ul>
            {DECISION_TREE.map((line, i) => <li key={i}>{line}</li>)}
          </ul>

          <Stay22InlineCTA
            destination="maldives"
            country="Maldives"
            headline="Vous chiffrez votre sélection&nbsp;?"
            subline="Une fois votre liste de trois à cinq destinations établie, notre comparateur partenaire ouvre tous les moteurs de réservation en un clic. Aucun impact de la commission sur votre prix."
            campaign="how-to-choose-destination"
            locale="fr"
          />

          {/* 11 FAQ */}
          <h2 id="faq">Questions fréquentes</h2>
          <FAQAccordion items={FAQS} />

          {/* 12 CTA */}
          <h2 id="cta">Toujours bloqués&nbsp;? Deux étapes utiles</h2>
          <p>
            Si vous avez fait tourner le cadre et que vous n’arrivez toujours pas à trancher, deux prochaines
            étapes valent la peine. D’abord, faites notre court quiz sur
            <Link href="/fr/quiz"> le quiz lune de miel</Link>. Il déroule les sept questions en mode interactif et
            produit une sélection classée, reliée à des hôtels que nous notons. Ensuite, parcourez notre
            <Link href="/fr/destinations"> atlas des destinations</Link> avec votre sélection en tête, et lisez la
            fiche destination de haut en bas avant de poser un acompte. Les destinations de lune de miel
            récompensent les couples qui les ont choisies avec discernement. Choisissez la vôtre ainsi.
          </p>
          <p className="mt-8">
            Pour la suite du plan d’action, voyez
            <Link href="/fr/how-to-plan-a-honeymoon"> comment planifier une lune de miel</Link>&nbsp;: le calendrier
            sur 12 mois, la ventilation des budgets, la liste de cadeaux, l’assurance, les bagages, et les 10
            erreurs qui gâchent les lunes de miel.
          </p>
        </div>
      </article>
    </article>
  )
}
