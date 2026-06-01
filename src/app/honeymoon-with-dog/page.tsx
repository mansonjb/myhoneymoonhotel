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

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
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
          limits, and on-the-ground notes for every entry. If you’re serious about a pet-inclusive honeymoon, that’s
          the catalog to work from — it’s built by the same editorial team behind My Honeymoon Hotel, with the same
          honest scoring approach.
        </p>

        <h2>Destinations that genuinely work</h2>

        <h3>Provence & the Côte d’Azur (France)</h3>
        <p>
          France is the easiest country in the world to honeymoon with a dog. Restaurants welcome them by default,
          trains carry them, and most luxury properties — from Domaine de la Baume to the smaller mas in the
          Luberon — treat them as guests rather than logistics. Pair with a rental car, a slow week of vineyards and
          marchés, and a sunset terrace in Gordes. Our{' '}
          <Link href="/destinations/provence">Provence honeymoon guide</Link> covers the romantic angles; for the
          property-by-property pet policies, see{' '}
          <a href={`${SISTER_SITE}/destinations/provence`} target="_blank" rel="noopener">
            HotelsWithPets.com&apos;s Provence list
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
          <Link href="/destinations/tuscany">Tuscany honeymoon guide</Link> and the corresponding{' '}
          <a href={`${SISTER_SITE}/destinations/tuscany`} target="_blank" rel="noopener">
            pet-friendly Tuscany picks
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

        <h2>What to read next on HotelsWithPets.com</h2>
        <p>
          For property-level detail — pet fees, weight limits, breed restrictions, off-leash zones, and which suite
          the front-desk reserves for dogs — these are the most useful resources our sister site maintains:
        </p>
        <ul>
          <li>
            <a href={`${SISTER_SITE}/the-50-best-luxury-dog-friendly-hotels`} target="_blank" rel="noopener">
              The 50 best luxury dog-friendly hotels
            </a>{' '}
            — the editorial flagship list.
          </li>
          <li>
            <a href={`${SISTER_SITE}/destinations/france`} target="_blank" rel="noopener">
              Pet-friendly hotels in France
            </a>{' '}
            — by far the easiest country for a dog honeymoon.
          </li>
          <li>
            <a href={`${SISTER_SITE}/guides/flying-with-a-dog`} target="_blank" rel="noopener">
              Flying with your dog: cabin vs. cargo
            </a>{' '}
            — the practical question that decides the honeymoon.
          </li>
          <li>
            <a href={`${SISTER_SITE}`} target="_blank" rel="noopener">
              The full pet-friendly hotel directory
            </a>{' '}
            — scored on the same honest criteria we use here.
          </li>
        </ul>

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
          dog, choose one of the few countries that actually accommodates pets at the luxury level, and use{' '}
          <a href={SISTER_SITE} target="_blank" rel="noopener">
            HotelsWithPets.com
          </a>{' '}
          to find the properties built for it. The result is usually the most relaxing honeymoon either partner has
          ever taken — which, when you think about it, is the point.
        </p>

      </div>

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
          href={SISTER_SITE}
          target="_blank"
          rel="noopener"
          className="inline-block bg-rose-500 hover:bg-rose-600 text-white font-semibold text-sm px-6 py-3 rounded-full transition-colors"
        >
          Visit HotelsWithPets.com →
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
