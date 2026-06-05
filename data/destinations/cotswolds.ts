import type { DestinationMeta } from '@/types/destination'

const meta: DestinationMeta = {
  hero: '/images/hotels/soho-farmhouse-great-tew-cotswolds/hero.webp',
  tagline: 'Honey-stone villages, gastropubs, Soho Farmhouse — peak English countryside, 90 minutes from London.',
  intro: 'The Cotswolds is the most romantic stretch of rural England — 800 square miles of honey-coloured limestone villages between Oxford and Bath, draped over rolling hills and threaded by drystone walls, sheep pastures, and ancient gastropubs. Bourton-on-the-Water, Burford, Stow-on-the-Wold, Castle Combe — every village looks like it was built for a film set, and many actually have been (Bridget Jones, Stardust, Harry Potter all filmed here). What makes the region honeymoon-relevant in the 2020s is the hotel renaissance: Soho Farmhouse, The Pig at Combe, Foxhill Manor, Lime Wood, Thyme — a generation of country-house properties that combine 17th-century stone with serious design, farm-to-table kitchens, and dog-friendly luxury. Add Daylesford Organic for lunch, the Cotswold Way for walking, and the easy 90-minute train from London Paddington, and you have the most accessible, language-barrier-free, aspirational English honeymoon destination on the map.',
  bestTime: 'May–Sep & December',
  flightFrom: '1.5h drive from London Heathrow',
  topExperience: 'English Countryside Romance & Gastropubs',
  perfectFor: [
    'Couples who want peak English-aesthetic romance without leaving the language behind',
    'Honeymooners pairing London with countryside — easy 90-minute Paddington train',
    'Dog owners — the Cotswolds is the most dog-friendly luxury region in Europe',
    'Walkers and gastropub lovers — the Cotswold Way runs 100 miles through the region',
    'Couples coming in December — the festive country-house Christmas is genuinely magical',
  ],
  skipIf: [
    'You need beach access or guaranteed sun — this is English countryside, not the Med',
    'You want city nightlife — most villages shut down after 10pm',
    'You\'re on a tight budget — the best Cotswolds hotels run £600–£1,200/night',
    'You hate driving narrow lanes — public transport between villages is minimal',
  ],
  experiences: [
    {
      icon: '🥧',
      title: 'Gastropub Lunch Crawl',
      description: 'The Cotswolds invented the modern gastropub. The Wild Rabbit (Kingham), The Bull (Charlbury, Jeremy Clarkson\'s pub), The Feathered Nest (Nether Westcote), The Lamb (Burford). Order Sunday roast or a beef pie, drink a pint of Hook Norton, sit by the fire.',
      cost: '$80–$150 per couple (lunch with drinks)',
      tip: 'Book Sunday lunch at The Wild Rabbit two weeks ahead. The Bull at Charlbury is walk-in for lunch but books out for dinner. The Lamb at Burford has rooms above the pub if you want to stay over.',
    },
    {
      icon: '🌿',
      title: 'Daylesford Organic Full Day',
      description: 'Daylesford is the most ambitious farm-shop-cum-spa-cum-cookery-school in Britain — Lady Bamford\'s 2,500-acre organic estate near Kingham. Cookery class in the morning, lunch in the farm restaurant, afternoon at the Bamford Haybarn Spa, shop for hampers to take home.',
      cost: '$300–$600 per couple (class, lunch, spa)',
      tip: 'Book the Bread or Pasta cookery class — both run weekly and end with eating what you cooked. The spa needs booking 2-3 weeks ahead. Daylesford\'s wine cellar is genuinely good — taste before you buy.',
    },
    {
      icon: '🥾',
      title: 'Cotswold Way Walk — Broadway to Stanton',
      description: 'The Cotswold Way runs 100 miles from Chipping Campden to Bath along the escarpment. The Broadway-Stanton stretch (5 miles, 3 hours) climbs to Broadway Tower (the highest folly in England) with views across seven counties, then drops to Stanton — the most perfect honey-stone village in the region.',
      cost: '$0–$50 per couple (lunch at The Mount Inn)',
      tip: 'Start in Broadway after breakfast, lunch at The Mount Inn in Stanton (book ahead, especially Sundays), taxi back. Good boots required — the descent off Shenberrow Hill is steep. Avoid in muddy weather.',
    },
    {
      icon: '🏰',
      title: 'Blenheim Palace and Castle Combe',
      description: 'Blenheim Palace (Churchill\'s birthplace, the only non-royal English country house called a palace) is 20 minutes from most Cotswolds hotels. Combine with lunch in Castle Combe — voted the prettiest village in England and the filming location for War Horse and Stardust.',
      cost: '$100–$200 per couple (Blenheim admission, lunch)',
      tip: 'Book the Blenheim Palace State Rooms tour first thing (9:30am). Lunch at The Manor House Hotel in Castle Combe — the village has no parking, leave the car at the top and walk down.',
    },
    {
      icon: '☕',
      title: 'Burford and Bibury Antique-Hunting Morning',
      description: 'Burford\'s steep High Street is the antique-buying capital of the Cotswolds — Manfred Schotten Antiques and Jonathan Fyson are the serious dealers. Bibury (William Morris called it "the most beautiful village in England") has Arlington Row, the most photographed 14th-century weaver\'s cottages.',
      cost: '$50–$100 per couple (coffee, small antique)',
      tip: 'Burford for buying, Bibury for photographing. Park at Burford and walk down the hill — the antique shops are on the lower stretch. Bibury parking is mayhem after 10am — arrive at 8am or after 4pm.',
    },
  ],
  months: [
    { month: 'Jan', weather: 'Cold, often misty, log fires', emoji: '⛅', crowds: 'Minimal', price: 'Low', verdict: 'Cosy if you love roaring fires' },
    { month: 'Feb', weather: 'Cold, snowdrops at Painswick', emoji: '⛅', crowds: 'Minimal', price: 'Low', verdict: 'Quiet, atmospheric, fireside' },
    { month: 'Mar', weather: 'Warming, daffodils, lambs', emoji: '🌤', crowds: 'Low', price: 'Low-mid', verdict: 'Spring properly arriving' },
    { month: 'Apr', weather: 'Lambing, blossom, Easter break', emoji: '🌤', crowds: 'Moderate', price: 'Mid', verdict: 'Lovely — book around Easter holidays' },
    { month: 'May', weather: 'Bluebells in the woods, perfect walking', emoji: '☀️', crowds: 'Moderate', price: 'Mid-high', verdict: 'One of the two best months' },
    { month: 'Jun', weather: 'Long days, gardens peaking, Wimbledon', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Peak — book early' },
    { month: 'Jul', weather: 'Warm, school holidays starting late month', emoji: '☀️', crowds: 'High', price: 'High', verdict: 'Beautiful, busy' },
    { month: 'Aug', weather: 'Warm, full UK school holidays', emoji: '☀️', crowds: 'Peak', price: 'Highest', verdict: 'Crowded — avoid if possible' },
    { month: 'Sep', weather: 'Golden light, harvest, quieter', emoji: '☀️', crowds: 'Moderate', price: 'High', verdict: 'The secret best month' },
    { month: 'Oct', weather: 'Autumn colour, fires lit, cosy', emoji: '🌤', crowds: 'Low-mod', price: 'Mid', verdict: 'Excellent — autumn at its prettiest' },
    { month: 'Nov', weather: 'Cold, bare trees, quiet', emoji: '⛅', crowds: 'Low', price: 'Low-mid', verdict: 'Quiet, fireside, low value' },
    { month: 'Dec', weather: 'Cold, Christmas markets, candlelit pubs', emoji: '🎄', crowds: 'Mod-high', price: 'High', verdict: 'Magical — book country-house Christmas' },
  ],
  budgetTiers: [
    {
      label: 'Boutique Inn',
      range: '$300–$500/night',
      gets: 'Beautifully restored coaching inns and gastropubs with rooms — character, location, good breakfast. The Cotswolds excels at this category.',
      example: 'The Lygon Arms (Broadway), The Lamb (Burford)',
    },
    {
      label: 'Premium Country House',
      range: '$500–$900/night',
      gets: 'The polished country-house properties with spa, kitchen garden, dog welcome, and serious dining. The honeymoon sweet spot.',
      example: 'The Pig at Combe, Cowley Manor Experimental, Thyme',
    },
    {
      label: 'Ultra-Luxury',
      range: '$900–$2,000/night',
      gets: 'Soho Farmhouse cabins, Foxhill Manor exclusive-use, Lime Wood Forest Suites — the best private country-house experiences in England.',
      example: 'Soho Farmhouse Big Cabins, Foxhill Manor, Thyme Ox-House Suite',
    },
  ],
  areas: [
    {
      name: 'North Cotswolds — Broadway & Chipping Campden',
      bestFor: 'Honey-stone perfection, the prettiest villages, Foxhill Manor',
      description: 'The northern Cotswolds around Broadway and Chipping Campden are the chocolate-box heart of the region — wide green High Streets, the warmest honey-coloured stone, and Foxhill Manor on the Farncombe Estate. Closest to Stratford-upon-Avon and the Shakespeare country day trip.',
    },
    {
      name: 'Central Cotswolds — Burford & Stow-on-the-Wold',
      bestFor: 'Best base for villages and antique shopping, easy access',
      description: 'Burford\'s steep medieval High Street and Stow\'s ancient market square sit at the geographic centre of the region. Easy reach of Daylesford, Soho Farmhouse, Bourton-on-the-Water. The best all-rounder base for first-time visitors.',
    },
    {
      name: 'South Cotswolds — Tetbury & Cirencester',
      bestFor: 'Calcot Manor country, Highgrove, quieter pace',
      description: 'The southern Cotswolds around Tetbury (King Charles\'s Highgrove is here) and Cirencester (the Roman capital of the region) are quieter and less photographed. Calcot Manor and Whatley Manor are the famous hotels. Closer to Bath for a day trip.',
    },
    {
      name: 'East Cotswolds — Great Tew & Kingham',
      bestFor: 'Soho Farmhouse country, gastropub heartland, Daylesford',
      description: 'The eastern Cotswolds around Chipping Norton, Kingham, and Great Tew is the gastropub-and-luxury heartland — Soho Farmhouse, The Wild Rabbit, Daylesford, Thyme at Southrop. The most fashionable corner of the region.',
    },
  ],
  expertTips: [
    {
      tip: 'Hire a car at Heathrow — the Cotswolds is not navigable by train',
      detail: 'The Cotswolds proper has limited rail — Moreton-in-Marsh and Kingham are the only useful stations. Between villages, taxis are scarce and expensive. Pick up a small automatic at Heathrow (the lanes are tight) and you can explore properly.',
    },
    {
      tip: 'Book your gastropub Sunday lunches before you book your room',
      detail: 'The best Sunday lunches (The Wild Rabbit, The Bull, The Feathered Nest, The Plough at Kelmscott) book out 2-3 weeks ahead. Lock those in first, then plan the itinerary around them. The Sunday lunch is the defining Cotswolds meal.',
    },
    {
      tip: 'Avoid Bourton-on-the-Water on weekends',
      detail: 'Bourton is the prettiest village but has been discovered by every UK coach tour. Weekends are chaos. Visit Tuesday-Thursday at 9am — you\'ll have the river bridges to yourselves. Same logic for Bibury and Castle Combe.',
    },
    {
      tip: 'A Christmas country-house break is the sleeper hit',
      detail: 'The Cotswolds country-house Christmas (24-27 December) is the bookings most lock in by September. Lime Wood, The Pig, Calcot, and Foxhill all run multi-day Christmas programmes — black-tie dinner, carol singers, Boxing Day hunt meets. Genuinely magical.',
    },
    {
      tip: 'Pair the Cotswolds with London, not Bath',
      detail: 'Three nights London + four nights Cotswolds is the perfect honeymoon shape. Bath is lovely but only an hour from the southern Cotswolds — better as a day trip than a separate base. Save the urban budget for London.',
    },
  ],
  packing: [
    { item: 'Waterproof walking boots', why: 'Even in summer, Cotswold paths are muddy. A proper leather boot (not a sneaker) is essential for any walking. Wellies if you\'re going in October-March.' },
    { item: 'Smart-casual dinner wear with a jacket', why: 'Country-house hotels expect a jacket for men at dinner and a smart dress or blouse-trouser combo for women. The Pig is more relaxed; Foxhill Manor and Lime Wood are properly formal.' },
    { item: 'Layered knitwear — a good wool jumper', why: 'English country evenings are cold even in summer. A cashmere or merino jumper for around the log fire and for early-morning walks. Avoid synthetics — they look wrong here.' },
    { item: 'Compact umbrella and a waxed jacket', why: 'It will rain. A Barbour-style waxed jacket is the local uniform and works perfectly for the conditions. A small folding umbrella for village walks.' },
    { item: 'Good binoculars for birdwatching', why: 'The Cotswolds is one of the best birdwatching regions in England — red kites, buzzards, kingfishers on the rivers. A pair of compact binoculars elevates every walk and every garden breakfast.' },
    { item: 'A book and a notebook', why: 'You will spend time by a fire in a window seat with a glass of wine and a book. This is the Cotswolds. Pack accordingly.' },
  ],
  guide: {
    getting: 'Fly into London Heathrow (LHR) — the closest major airport. From Heathrow: hire a car (1.5-2h drive depending on village) or train (Heathrow Express to Paddington, then GWR direct to Moreton-in-Marsh, Kingham, or Charlbury in 90 minutes). London City and Stansted are alternatives. From Heathrow direct by chauffeur car: £250-£350.',
    where: 'Soho Farmhouse (Great Tew) for the fashionable Members\' Club experience. Foxhill Manor (Broadway) for exclusive-use 8-suite intimacy. Thyme (Southrop) for the design-led village experience. The Lygon Arms (Broadway) for the historic coaching inn. The Pig at Combe for the gastropub-with-rooms model. Lime Wood (substitute, New Forest) for full spa.',
    when: 'May-June and September-October are the prime windows — long days, gardens at peak, dry weather, civilised crowds. July-August work but draw UK family holidaymakers. December for the country-house Christmas — magical but books out 6+ months ahead.',
  },
  localFood: 'Sunday roast beef with Yorkshire pudding and proper gravy at The Wild Rabbit, Cotswold Old Spot pork from local farms, Single Gloucester and Double Gloucester cheeses, beef pie with a pint of Hook Norton bitter, fresh asparagus from Vale of Evesham (April-June), and a sticky toffee pudding by a log fire on a rainy evening.',
  currency: 'British Pound (GBP)',
  language: 'English',
  timezone: 'UTC (GMT) / UTC+1 (BST in summer)',
  seo: { title: 'Cotswolds Honeymoon: 6 Country House Hotels Scored 2026', description: 'Soho Farmhouse, Foxhill Manor, The Pig, Thyme ranked. From $400/night, 90 min from London. May-Sep verdicts.' },
}

export default meta
