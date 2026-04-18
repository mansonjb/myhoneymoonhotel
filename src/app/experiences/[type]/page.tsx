import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getHotelsByExperience, getAllExperienceTypes } from '@/lib/hotels'
import HotelCard from '@/components/HotelCard'

interface Props { params: Promise<{ type: string }> }

const EXPERIENCE_META: Record<string, {
  label: string
  tagline: string
  hero: string
  intro: string
  reasons: { title: string; desc: string }[]
  guide: { title: string; content: string }[]
  faqs: { q: string; a: string }[]
}> = {
  'overwater-bungalows': {
    label: 'Overwater Villas',
    tagline: 'Sleep above the most beautiful water on earth',
    hero: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=1920&q=80',
    intro: 'The overwater bungalow is the defining honeymoon experience — a private villa built above a turquoise lagoon, where you can slip into the water directly from your deck, watch fish through a glass floor, and fall asleep to the sound of the ocean.',
    reasons: [
      { title: 'Total privacy', desc: 'Your own deck, your own lagoon access, no one walking past. The most intimate hotel room format ever designed.' },
      { title: 'The light', desc: 'Sunrise and sunset over water, from bed. No hotel room experience compares to watching colour spread across a lagoon through floor-to-ceiling glass.' },
      { title: 'The feeling', desc: 'Floating above clear water, at night, under stars — there is a reason overwater villas have been the benchmark honeymoon experience for 50 years.' },
    ],
    guide: [
      { title: 'Budget', content: 'Entry-level overwater: $500–$800/night (Maldives budget atolls, some Pacific). Mid-range: $800–$2,000/night. Luxury: $2,000–$8,000/night. The price gap is real — cheaper villas lack private pools and the best lagoon positions.' },
      { title: 'Destination', content: 'Maldives: most iconic, highest density of quality overwater resorts. Bora Bora: the original, with Mount Otemanu backdrop. Tahiti generally: more affordable than Maldives with French Polynesian charm. The Philippines and Fiji have good options at lower prices.' },
      { title: 'What to check', content: 'Private pool vs shared. Lagoon position (facing lagoon vs ocean). Sunset vs sunrise orientation. Pontoon privacy (how close are neighbours). Glass floor in bathroom or bedroom? These details separate good overwater from exceptional.' },
    ],
    faqs: [
      { q: 'Is the Maldives or Bora Bora better for overwater bungalows?', a: 'Maldives for the water colour and resort exclusivity (each on its own island). Bora Bora for the mountain backdrop and French Polynesian culture. Both are exceptional — the choice is usually budget and flight routing.' },
      { q: 'Do overwater villas have private pools?', a: 'Only at luxury properties ($1,500+/night). The private plunge pool is a significant upgrade — it eliminates any concern about shared water access and is worth it for honeymooners.' },
      { q: 'Are overwater bungalows romantic enough on their own or do you need to add excursions?', a: 'The villa itself is the experience — many honeymoon couples do very little beyond reading, swimming, ordering room service, and watching sunsets. One or two excursions (snorkel, sunset sail) add texture without overwhelming the natural rhythm of the trip.' },
    ]
  },
  'adults-only': {
    label: 'Adults-Only Resorts',
    tagline: 'No families. Just the two of you — and everyone else celebrating the same.',
    hero: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1920&q=80',
    intro: 'Adults-only resorts are one of the most underrated honeymoon choices. The atmosphere is categorically different — quieter pools, earlier mornings, more intimate restaurants, and a guest demographic almost entirely made up of couples. The cumulative effect on a honeymoon is significant.',
    reasons: [
      { title: 'The atmosphere', desc: 'A pool where the only sounds are conversation and clinking glasses. Dinner without background noise. An environment calibrated for romance rather than entertainment.' },
      { title: 'The service', desc: 'When staff know their entire guest list is couples — many honeymooning — they rise to meet that expectation. The quality of personalised service at adults-only resorts is consistently higher.' },
      { title: 'The scoring', desc: 'Adults-only is the single highest-weighted criterion in our Honeymoon Score (+25 points). It is the most reliable indicator of a honeymoon-forward property.' },
    ],
    guide: [
      { title: 'Caribbean vs Indian Ocean', content: 'Caribbean (Jamaica, St. Lucia, Antigua): most adults-only concentration globally, strong all-inclusive culture, shorter flights from the US and Europe. Indian Ocean (Maldives, Seychelles): more exclusive but also more expensive, and many Maldivian resorts are adults-only by default.' },
      { title: 'All-inclusive vs room-only', content: 'Adults-only all-inclusive can work well for honeymooners — it removes the friction of constant decisions and bills. Look for properties where AI means quality dining rather than buffet-and-drinks. Sandals, Excellence, Zoëtry are the benchmark in the Caribbean.' },
      { title: 'What genuinely differs', content: 'Beyond the obvious (no children), look for: couples-oriented spa menus, in-villa dining quality, whether the property does honeymoon touches as standard or as paid add-ons, and the mix of couples vs groups.' },
    ],
    faqs: [
      { q: 'Are adults-only resorts only for older couples?', a: 'No. Adults-only simply means 18+ (some properties 16+). The demographic is typically a wide mix of honeymooners, anniversary couples, and friends groups. It is about atmosphere, not age.' },
      { q: 'Is adults-only better than a family resort for a honeymoon?', a: 'Categorically yes, in our scoring. The difference in poolside atmosphere alone justifies the preference. If you are choosing between two otherwise equal properties, always choose adults-only for a honeymoon.' },
      { q: 'What are the best adults-only destinations?', a: 'Caribbean: Jamaica (Couples, Sandals), St. Lucia (Jade Mountain, Stonefield), Antigua. Indian Ocean: many Maldivian resorts are effectively adults-only. St. Lucia offers the most dramatic scenery in an adults-only context.' },
    ]
  },
  'safari': {
    label: 'Safari Honeymoons',
    tagline: 'The most unforgettable contrast in travel: wilderness by day, world-class luxury by night',
    hero: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920&q=80',
    intro: 'A safari honeymoon occupies a category of its own. No other honeymoon type creates the same level of shared experience — watching lions at dawn, the Milky Way unobstructed by light pollution, the silence of the bush at night. The contrast with the luxury of a top lodge makes it the most memorable honeymoon combination in the world.',
    reasons: [
      { title: 'Shared experience', desc: 'Nothing bonds two people like encountering wildlife together. The moment you see your first elephant, your first lion kill, your first migration river crossing — these become reference points in your relationship forever.' },
      { title: 'Genuine disconnection', desc: 'Private concessions have no Wi-Fi in rooms, no phone signal. The disconnection is not forced — it is natural. You have no choice but to be present with each other.' },
      { title: 'The contrast', desc: 'The 5:30am game drive in an open vehicle, wind in your face, surrounded by Africa — then returning to a butler, a cellar of South African wine, and a canopied bed under stars. The contrast is intoxicating.' },
    ],
    guide: [
      { title: 'Tanzania vs Kenya vs South Africa', content: 'Tanzania (Serengeti): the Great Migration, private concessions, most romantic top-end lodges. Kenya (Masai Mara): similar migration, slightly more accessible. South Africa (Kruger/Sabi Sands): easier to reach from Europe, big 5, excellent lodges, no malaria in some areas.' },
      { title: 'Private concession vs national park', content: 'Private concessions (Singita Grumeti, Sabi Sands) cost more but offer: no other vehicles at sightings, night drives, off-road driving, walking safaris. For honeymooners, the exclusivity of a private concession is worth the premium.' },
      { title: 'Combining with beach', content: '4 nights Serengeti + 4 nights Zanzibar is the classic Tanzania honeymoon. The contrast of dust and ocean is perfect. Plan: safari first (energy-intensive), beach second (recovery). Logistically, it works via Kilimanjaro–Zanzibar charter.' },
    ],
    faqs: [
      { q: 'When is the best time for a Serengeti honeymoon?', a: 'July–October for the Great Migration river crossings — the most dramatic wildlife event on earth. January–February for calving season and predator action. The Serengeti has excellent game year-round.' },
      { q: 'Is a safari honeymoon romantic if you are not a wildlife person?', a: 'Universally yes. The romance of a top safari lodge — the candlelit dinners, the sundowner in the bush, the Milky Way overhead — transcends wildlife interest. The game viewing is a bonus, not the prerequisite.' },
      { q: 'What should you budget for a luxury safari honeymoon?', a: 'Top-tier private concession lodges (Singita, Aman, andBeyond) run $1,500–$5,000 per person per night, all-inclusive. Mid-range excellent options exist at $400–$900 pppn. Budget for charter flights, visas, and vaccinations on top.' },
    ]
  },
  'luxury': {
    label: 'Ultra-Luxury',
    tagline: 'The finest hotel experiences in the world, scored for romance',
    hero: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80',
    intro: 'Ultra-luxury honeymoon hotels are not defined by price alone — they are defined by the quality of attention, the uniqueness of the setting, and the degree to which every detail is calibrated for intimacy. The best properties in the world share one characteristic: you stop wanting to leave.',
    reasons: [
      { title: 'Service at this level is transformative', desc: 'A butler who knows your names, your preferences, and has already arranged what you were about to ask for. This is not a cliché at properties scoring 90+. It genuinely changes the experience.' },
      { title: 'The space', desc: 'Ultra-luxury means space — private villas rather than rooms, private pools rather than shared, private beaches rather than public. Privacy is the ultimate luxury for honeymooners.' },
      { title: 'Once in a lifetime', desc: 'Most couples honeymooning at an ultra-luxury property will not return at that price point. The clarity that this is a singular, unrepeatable experience intensifies every moment.' },
    ],
    guide: [
      { title: 'What distinguishes true luxury', content: 'Butler service (not just concierge). Dedicated villa or suite with private outdoor space. In-villa dining that matches the main restaurant quality. No queuing for anything — ever. Staff who know your name from arrival. At the very top (Aman, Singita, Six Senses), the invisibility of service is itself a luxury.' },
      { title: 'Value in ultra-luxury', content: 'The most expensive hotel is not always the best honeymoon choice. Look for Honeymoon Score, not just price. A $2,000/night resort with adults-only + overwater villa + spa may deliver a better honeymoon than a $5,000/night city hotel.' },
      { title: 'When to splurge vs save', content: 'Splurge on: the first two nights (arrival experience sets the tone), the most memorable location (Four Seasons Bora Bora vs a generic Tahiti resort). Save on: nights in transit cities, internal flights, nights at the end of a trip when you are tired.' },
    ],
    faqs: [
      { q: 'What is the best ultra-luxury honeymoon hotel in the world?', a: 'Soneva Jani (Maldives, 97/100) currently leads our scoring. Close competitors: Four Seasons Bora Bora (96/100), Jade Mountain (94/100). The right answer depends on your preferred destination and experience type.' },
      { q: 'Is ultra-luxury worth it for a honeymoon?', a: 'The once-in-a-lifetime framing makes ultra-luxury rational for many couples who would never spend this way otherwise. The key is matching the property to what actually moves you — stunning settings and privacy have universal appeal; elaborate amenity lists do not.' },
      { q: 'How do you get upgrades at luxury hotels?', a: 'Book direct or through a luxury travel agent (you get better rates and more leverage). Send a personalised pre-arrival email (use our template). Be specific about what you want. Mention your honeymoon at booking and check-in. Arrive with champagne expectations, not demands.' },
    ]
  },
  'minimoon': {
    label: 'Minimoon',
    tagline: 'Short trip, full romance. The smarter honeymoon.',
    hero: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1920&q=80',
    intro: 'A minimoon — typically 2–5 nights, often close to home — is the fastest-growing honeymoon category. Driven by busy careers, destination weddings, and the reality of limited leave allowances, the minimoon is not a compromise: it is a deliberate choice to do one thing exceptionally well.',
    reasons: [
      { title: 'No jet lag', desc: 'The Maldives is extraordinary. But arriving exhausted after 14 hours of flying on your honeymoon night is not. A minimoon lets you arrive alert, rested, and present.' },
      { title: 'Spend more on the hotel, less on getting there', desc: 'The same budget that funds a mediocre long-haul trip can buy an exceptional 3-night stay at a top European hotel. Prioritising quality over distance often delivers a better honeymoon.' },
      { title: 'Do the big trip later', desc: 'Many minimoon couples plan a "delayed honeymoon" at 6 or 12 months — fully rested, better planned, anticipation intact. The minimoon buys time without sacrificing the post-wedding experience.' },
    ],
    guide: [
      { title: 'Europe top minimoon destinations', content: 'Paris (Hotel de Crillon, Le Bristol). Amalfi Coast (Hotel Santa Caterina, Villa Cimbrone). Tuscany (Rosewood Castiglion del Bosco). Scottish Highlands (Gleneagles, Isle of Eriska). Santorini (Mystique, Canaves Oia). All within 2–3 hours from major European cities.' },
      { title: 'How many nights', content: '2 nights: barely enough, but better than nothing. 3 nights: the sweet spot for a minimoon — enough time for an arrival experience, a full middle day, and a relaxed departure. 4–5 nights: a proper minimoon with time to breathe.' },
      { title: 'What to prioritise', content: 'The room quality matters more on a short trip — you spend a higher proportion of your time in it. Book the best room you can afford. Prioritise properties within 2h travel of your wedding venue to minimise logistics.' },
    ],
    faqs: [
      { q: 'Is a minimoon a real honeymoon?', a: 'Yes. A honeymoon is defined by the experience, not the distance. Three nights at a top hotel fully focused on each other outperforms two weeks of exhausted long-haul travel at a mediocre property.' },
      { q: 'How much should you budget for a minimoon?', a: '3 nights at a quality European property: £1,500–£4,000 all-in. For a genuinely luxurious minimoon: £4,000–£10,000. These figures include room, dining, and transport — a fraction of a long-haul honeymoon total.' },
      { q: 'What are the best minimoon destinations from the UK?', a: 'Cotswolds (Soho Farmhouse, The Lygon Arms). Paris (2h20 Eurostar). Amalfi Coast (2h30 flight). Scottish Highlands (1h flight). Lake Como (2h flight). All offer world-class hotels with short travel.' },
    ]
  },
  'ski': {
    label: 'Ski & Mountain',
    tagline: 'Après-ski romance. The most underrated honeymoon category.',
    hero: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1920&q=80',
    intro: 'Ski honeymoons are spectacularly underrated. The combination of physical activity, dramatic mountain scenery, cosy evenings by fires, and world-class alpine hotel hospitality creates a romantic intensity that beach holidays rarely match. If you ski — or even if you do not — a mountain honeymoon deserves serious consideration.',
    reasons: [
      { title: 'Shared adrenaline', desc: 'Skiing together — trying new runs, encouraging each other, falling laughing in the snow — creates shared memories faster than almost any other activity. The physical element bonds.' },
      { title: 'The après atmosphere', desc: 'The ritual of stripping off ski gear, collapsing onto sofas in front of a fire with vin chaud or champagne, while snowflakes fall outside — there is no more romantically charged hotel atmosphere.' },
      { title: 'The food', desc: 'Alpine cuisine — fondue, raclette, fresh mountain fish, exceptional cheeses — eaten at altitude after exercise, surrounded by snow: a sensory experience that beach hotels do not match.' },
    ],
    guide: [
      { title: 'French Alps vs Swiss Alps vs Austria', content: 'French Alps (Courchevel 1850, Val d\'Isère): largest ski areas in the world, excellent luxury hotels, buzzy après scene. Swiss Alps (Zermatt, St. Moritz, Verbier): more exclusive, car-free villages, highest concentration of Michelin stars. Austria (Lech, Kitzbühel): most charming villages, authentic alpine culture, more affordable.' },
      { title: 'Non-skiers', content: 'Mountain honeymoons work exceptionally well for non-skiers: snowshoeing, spa, husky sledding, snowmobiling, mountain walks, fondue tours. The very best mountain hotels are designed around après-ski as much as skiing itself.' },
      { title: 'Season', content: 'Christmas–New Year: magical but expensive and crowded. January: best snow conditions, quietest, best value. February: half-term in Europe — busier. March: spring skiing, longer days, some sun, good conditions. Early April: lower prices, excellent conditions in high-altitude resorts.' },
    ],
    faqs: [
      { q: 'Which is the most romantic ski resort?', a: 'Zermatt (Switzerland) — car-free village, Matterhorn views, exceptional hotels, world-class restaurants. Courchevel 1850 (France) — the most glamorous ski resort in the world, highest concentration of luxury hotels. St. Moritz — most iconic name in ski, extraordinary setting.' },
      { q: 'Do you need to ski to enjoy a ski honeymoon?', a: 'No. The top mountain hotels have exceptional spa facilities, mountain walking programmes, snowshoe tours, and in-village dining scenes. Many honeymooners at ski resorts do one or two ski days and spend the rest in spa, restaurants, and simply enjoying the mountain atmosphere.' },
      { q: 'Is a ski honeymoon expensive?', a: 'At the top level, yes — Courchevel 1850 and Zermatt luxury hotels run €1,000–€5,000/night in peak weeks. But ski honeymoons offer excellent mid-range options at €300–€600/night that deliver the full alpine experience at a fraction of Maldives costs.' },
    ]
  }
}

export async function generateStaticParams() {
  return getAllExperienceTypes().map(t => ({ type: t }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { type } = await params
  const meta = EXPERIENCE_META[type]
  return {
    title: meta ? `${meta.label} Honeymoon Hotels — Scored & Ranked` : `${type.replace(/-/g, ' ')} Honeymoon Hotels`,
    description: meta?.intro.slice(0, 160) ?? `Curated ${type.replace(/-/g, ' ')} hotels for honeymooners.`,
  }
}

export default async function ExperiencePage({ params }: Props) {
  const { type } = await params
  const hotels = getHotelsByExperience(type)
  const meta = EXPERIENCE_META[type]

  if (hotels.length === 0) notFound()

  const destinations = Array.from(new Set(hotels.map(h => h.destination)))

  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        {meta?.hero && (
          <>
            <Image src={meta.hero} alt={meta?.label ?? type} fill priority className="object-cover" sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          </>
        )}
        <nav className="absolute top-6 left-6 flex items-center gap-2 text-white/60 text-xs">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <span className="text-white/40">Experiences</span>
          <span>/</span>
          <span className="text-white/60 capitalize">{meta?.label ?? type.replace(/-/g, ' ')}</span>
        </nav>
        <div className="absolute bottom-10 left-8 sm:left-12">
          <p className="text-white/60 text-xs tracking-[0.2em] uppercase mb-3">Experience Guide</p>
          <h1 className="font-display text-5xl sm:text-6xl text-white mb-3">{meta?.label ?? type.replace(/-/g, ' ')}</h1>
          {meta?.tagline && <p className="text-white/70 text-base max-w-xl">{meta.tagline}</p>}
          <p className="text-white/50 text-sm mt-2">{hotels.length} hotels scored ≥ 50</p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 space-y-20 py-20 pb-28">

        {/* ── INTRO ── */}
        {meta?.intro && (
          <section className="max-w-2xl">
            <p className="text-zinc-600 text-lg leading-relaxed">{meta.intro}</p>
          </section>
        )}

        {/* ── WHY THIS EXPERIENCE ── */}
        {meta?.reasons && (
          <section>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">Why This Experience</p>
            <h2 className="font-display text-3xl sm:text-4xl mb-8">Why couples choose {meta.label.toLowerCase()} for their honeymoon</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {meta.reasons.map((r, i) => (
                <div key={i} className="border border-zinc-100 rounded-2xl p-6">
                  <div className="font-display text-4xl text-zinc-100 mb-3">0{i + 1}</div>
                  <h3 className="font-semibold text-zinc-900 mb-2">{r.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{r.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── HOTEL GRID ── */}
        <section>
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-2">All Hotels</p>
              <h2 className="font-display text-3xl sm:text-4xl">Top {meta?.label ?? type.replace(/-/g, ' ')} Hotels</h2>
            </div>
            <p className="text-zinc-400 text-sm hidden sm:block">{hotels.length} properties · sorted by score</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[...hotels].sort((a, b) => b.honeymoon_score - a.honeymoon_score).map(h => (
              <HotelCard key={h.slug} hotel={h} />
            ))}
          </div>
        </section>

        {/* ── BUYING GUIDE ── */}
        {meta?.guide && (
          <section>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">Buying Guide</p>
            <h2 className="font-display text-3xl sm:text-4xl mb-8">How to choose the right {meta.label.toLowerCase()} hotel</h2>
            <div className="space-y-4">
              {meta.guide.map((g, i) => (
                <div key={i} className="bg-zinc-50 border border-zinc-100 rounded-2xl p-6">
                  <h3 className="font-semibold text-zinc-900 mb-2">{g.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{g.content}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── DESTINATIONS ── */}
        {destinations.length > 0 && (
          <section>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">Top Destinations</p>
            <h2 className="font-display text-3xl sm:text-4xl mb-6">Best destinations for {meta?.label.toLowerCase() ?? type.replace(/-/g, ' ')}</h2>
            <div className="flex flex-wrap gap-3">
              {destinations.map(d => (
                <Link key={d} href={`/destinations/${d}`}
                  className="border border-zinc-200 hover:border-zinc-900 text-zinc-600 hover:text-zinc-900 px-5 py-2.5 rounded-full text-sm font-medium transition-colors capitalize">
                  {d.replace(/-/g, ' ')}
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* ── FAQ ── */}
        {meta?.faqs && (
          <section>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 mb-3">FAQ</p>
            <h2 className="font-display text-3xl sm:text-4xl mb-8">Frequently asked questions</h2>
            <div className="space-y-3">
              {meta.faqs.map((faq, i) => (
                <details key={i} className="group border border-zinc-100 rounded-2xl overflow-hidden">
                  <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-medium text-zinc-900 text-sm hover:bg-zinc-50 transition-colors list-none">
                    <span>{faq.q}</span>
                    <svg className="w-4 h-4 text-zinc-400 shrink-0 ml-4 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
                  </summary>
                  <div className="px-6 pb-6 pt-2">
                    <p className="text-zinc-500 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </section>
        )}

      </div>
    </div>
  )
}
