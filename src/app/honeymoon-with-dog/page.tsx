import type { Metadata } from 'next'
import Link from 'next/link'
import { buildAlternates } from '@/lib/alternates'
import AuthorByline from '@/components/AuthorByline'
import { AUTHOR } from '@/data/author'

export const metadata: Metadata = {
  title: 'Honeymoon With Your Dog — Hotels, Destinations & How',
  description: 'How to plan a honeymoon that includes your dog: pet-friendly luxury hotels, the destinations that work, and the realities most guides skip.',
  alternates: buildAlternates('/honeymoon-with-dog'),
}

const SISTER_SITE = 'https://hotelswithpets.com'
const SISTER_GUIDE = 'https://hotelswithpets.com/guides/honeymoon-with-pet'

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  inLanguage: 'en',
  headline: 'Honeymoon With Your Dog: The Honest Guide',
  description:
    'A practical guide to planning a honeymoon that includes your dog, from pet-friendly luxury hotels to destinations that actually work.',
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
  mainEntityOfPage: 'https://myhoneymoonhotel.com/honeymoon-with-dog',
}

const faqs = [
  {
    question: 'Can I bring my dog to a luxury honeymoon hotel?',
    answer:
      'Yes, but only at a small subset of properties. There are three tiers — tolerated, welcomed, and built-for-dogs. Most "pet-friendly" hotels merely tolerate dogs; the ones that genuinely welcome them (Belmond, Rosewood, the small luxury inns of Tuscany, Provence and the Cotswolds) are the ones worth booking for a honeymoon.',
  },
  {
    question: "What's the easiest country in Europe for a dog honeymoon?",
    answer:
      'France. Restaurants welcome dogs by default, trains carry them, and most luxury properties — from Domaine de la Baume to the smaller mas in the Luberon — treat them as guests rather than logistics. Italy (Tuscany in particular) is a close second.',
  },
  {
    question: 'Do I need a pet passport for a European honeymoon?',
    answer:
      'EU travel requires an up-to-date EU pet passport or an Animal Health Certificate, and US re-entry now requires a CDC import form. Both take weeks to obtain — start the paperwork at least three months before departure.',
  },
  {
    question: 'Can my dog fly in the cabin for our honeymoon?',
    answer:
      'Only small dogs (typically under 8 kg, depending on the airline) on a handful of carriers, and almost never on long-haul. For most couples, this rules out destinations like the Maldives, Bora Bora, or the Seychelles and points the honeymoon toward drivable Europe or domestic luxe instead.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'en',
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
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://myhoneymoonhotel.com/' },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Honeymoon with your dog',
      item: 'https://myhoneymoonhotel.com/honeymoon-with-dog',
    },
  ],
}

export default function HoneymoonWithDogPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">Planning Guide</p>
      <h1 className="font-display text-4xl sm:text-5xl text-zinc-900 mb-6 leading-tight">
        Honeymoon with your dog: the honest guide.
      </h1>
      <p className="text-zinc-500 text-lg leading-relaxed mb-2">
        Most honeymoon advice assumes you’re leaving the dog at home. For couples who consider their dog a member of the
        family, that’s not the question — the question is <em>which</em> honeymoon works, and which hotels actually
        welcome a Labrador rather than tolerate a Chihuahua in a tote bag.
      </p>

      <AuthorByline />

      <div className="prose prose-zinc max-w-none prose-headings:font-display prose-headings:text-zinc-900 prose-p:text-zinc-600 prose-p:leading-relaxed prose-a:text-rose-500 prose-a:no-underline hover:prose-a:underline mt-10">

        <h2>Start with the dog, then pick the destination</h2>
        <p>
          Couples planning a pet-inclusive honeymoon make the same mistake: they pick the destination first, then ask
          whether dogs are welcome. Do it the other way around. A senior Frenchie that struggles with cabin pressure
          rules out long-haul; a young border collie that needs three hours of off-leash a day rules out Mediterranean
          city breaks. The dog’s reality narrows the map before romance does.
        </p>
        <p>
          For most North American and European couples, the practical short-list is: domestic luxe (Napa, Hudson
          Valley, the Cotswolds, Provence), driving Europe (Tuscany farmhouses, the Loire, Alpine lakes), and a few
          long-stay luxury lodges that genuinely embrace dogs. Long-haul beach honeymoons — Maldives, Bora Bora,
          Seychelles — almost never work, both for transit reasons and because the hotels aren’t set up for it.
        </p>

        <h2>What “pet-friendly luxury” actually means</h2>
        <p>
          The phrase is overused. There are three tiers, and the difference matters:
        </p>
        <ul>
          <li>
            <strong>Tolerated.</strong> The hotel accepts dogs (often with a fee), but the room is the same, the
            restaurant is off-limits, and no one on staff knows what to do with a 30-kilo retriever at check-in. Most
            “pet-friendly” hotels live here.
          </li>
          <li>
            <strong>Welcomed.</strong> A dog bed waits in the room, the concierge has a walking map, and at least one
            restaurant terrace allows dogs. The Belmond and Rosewood properties that take dogs sit at this tier.
          </li>
          <li>
            <strong>Built for dogs.</strong> Full dog menu from the kitchen, in-room dog spa or off-leash garden,
            staff trained to actually like animals. This tier is small — but it’s the difference between a honeymoon
            and a stress test.
          </li>
        </ul>
        <p>
          Our sister publication{' '}
          <a href={SISTER_SITE} target="_blank" rel="noopener">
            HotelsWithPets.com
          </a>{' '}
          maintains the most thorough database of tier-two and tier-three properties, with pet policies, fees, weight
          limits, and on-the-ground notes for every entry. Their companion guide,{' '}
          <a href={SISTER_GUIDE} target="_blank" rel="noopener">
            Honeymoon with a pet
          </a>
          , covers the property side of the same question we tackle here from the destination side — it’s the catalog
          to work from once you’ve picked the country.
        </p>

        <h2>Destinations that genuinely work</h2>

        <h3>Provence & the Côte d’Azur (France)</h3>
        <p>
          France is the easiest country in the world to honeymoon with a dog. Restaurants welcome them by default,
          trains carry them, and most luxury properties — from Domaine de la Baume to the smaller mas in the
          Luberon — treat them as guests rather than logistics. Pair with a rental car, a slow week of vineyards and
          marchés, and a sunset terrace in Gordes. Our{' '}
          <Link href="/destinations/provence">Provence honeymoon guide</Link> covers the romantic angles; the
          property-by-property pet policies are covered in{' '}
          <a href={SISTER_GUIDE} target="_blank" rel="noopener">
            the HotelsWithPets honeymoon guide
          </a>
          .
        </p>

        <h3>Tuscany (Italy)</h3>
        <p>
          Farmhouse converted to relais — the {' '}
          <em>casale</em> format — is made for dogs. Borgo Santo Pietro, Castello di Casole, Castello di
          Reschio: all three accept dogs, all three have grounds where the dog can be the dog. Add a Florence
          two-night opener and a Val d’Orcia drive between cypresses, and you have one of the easiest dog-honeymoons
          in Europe. See our{' '}
          <Link href="/destinations/tuscany">Tuscany honeymoon guide</Link> for the romantic angle, paired with the
          property-level pet research in the{' '}
          <a href={SISTER_GUIDE} target="_blank" rel="noopener">
            HotelsWithPets honeymoon guide
          </a>
          .
        </p>

        <h3>The Cotswolds & Lake District (UK)</h3>
        <p>
          Dogs are part of British country-hotel culture. Soho Farmhouse, The Pig group, Lime Wood — the British
          luxury countryside operates on the assumption that the dog is coming. Add the practical advantage that UK
          dog owners don’t need a pet passport for domestic travel, and the Cotswolds becomes one of the smartest
          choices for a honeymoon that doesn’t require a flight.
        </p>

        <h3>Napa, Sonoma & Hudson Valley (US)</h3>
        <p>
          For American couples driving from the city, the small-luxury inn circuit in Napa and the Hudson Valley
          quietly leads on dog-inclusive hospitality. Auberge du Soleil, Meadowood (when re-opened), Troutbeck —
          dogs sit on the terrace at breakfast, ride in the wine-tour SUV, and sleep on a real bed.
        </p>

        <h2>The companion guide on HotelsWithPets.com</h2>
        <p>
          Where this article covers the destination side — which countries, which cities, which logistics — our
          sister publication covers the property side. If you have the destination locked and you need to know which
          specific hotel will actually welcome your dog as a guest rather than as a logistics problem, the canonical
          piece is{' '}
          <a href={SISTER_GUIDE} target="_blank" rel="noopener">
            <strong>Honeymoon with your pet</strong> on HotelsWithPets.com
          </a>
          . Same editorial team, same honest scoring approach, applied to pet policies, fees, weight limits,
          off-leash zones, and the small details (in-room dog beds, restaurant terraces, vet on call) that decide
          whether a honeymoon with a dog is restful or stressful.
        </p>

        <h2>Practical realities most guides skip</h2>
        <ul>
          <li>
            <strong>Vaccination & paperwork.</strong> EU travel requires an up-to-date EU pet passport or an Animal
            Health Certificate; US re-entry now requires a CDC import form. Both take weeks — start 3 months out.
          </li>
          <li>
            <strong>Insurance.</strong> A pet-inclusive travel insurance rider is cheap and worth it; standard
            travel policies do not cover veterinary emergencies abroad.
          </li>
          <li>
            <strong>Restaurants.</strong> France and Italy welcome dogs almost universally; Spain and the UK vary by
            establishment; the US is the most restrictive. Plan dinners accordingly.
          </li>
          <li>
            <strong>Activities.</strong> Most honeymoon hits — sunset cruises, vineyard tours, spa days — are not
            dog-friendly. Build the trip around walks, drives, and long lunches instead of activity packages.
          </li>
        </ul>

        <h2>The honest take</h2>
        <p>
          A honeymoon with your dog isn’t a compromised honeymoon — it’s a different shape of honeymoon. Slower,
          more domestic, with more terraces and fewer activity packages. The couples who do it well start with the
          dog, choose one of the few countries that actually accommodates pets at the luxury level, and pair this
          guide with the property-side companion piece,{' '}
          <a href={SISTER_GUIDE} target="_blank" rel="noopener">
            Honeymoon with a pet on HotelsWithPets.com
          </a>
          . The result is usually the most relaxing honeymoon either partner has ever taken — which, when you think
          about it, is the point.
        </p>

      </div>

      <section className="mt-16">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">FAQ</p>
        <h2 className="font-display text-3xl text-zinc-900 mb-8">Frequently asked questions</h2>
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
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-3">Sister Site</p>
        <h3 className="font-display text-2xl text-zinc-900 mb-2">
          The full pet-friendly hotel database lives here.
        </h3>
        <p className="text-zinc-600 text-sm leading-relaxed mb-5">
          HotelsWithPets.com is our sister publication — the same editorial team, the same honest scoring approach,
          dedicated to the world&apos;s best hotels for travellers with pets. If your honeymoon includes a dog,
          start there.
        </p>
        <a
          href={SISTER_GUIDE}
          target="_blank"
          rel="noopener"
          className="inline-block bg-rose-500 hover:bg-rose-600 text-white font-semibold text-sm px-6 py-3 rounded-full transition-colors"
        >
          Read the companion guide on HotelsWithPets.com →
        </a>
      </div>

      <div className="mt-12 text-center">
        <Link href="/destinations" className="text-rose-500 hover:underline text-sm font-semibold">
          ← Back to all honeymoon destinations
        </Link>
      </div>
    </div>
  )
}
