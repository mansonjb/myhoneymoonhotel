export type SisterSite = 'hotelswithpets' | 'screentotrip' | 'bestsnowhotels' | 'raceweekstays'

export interface SisterLink {
  site: SisterSite
  url: string
  anchorText: string
  context: string
  contextFr?: string
  contextEs?: string
  contextPt?: string
}

export interface SisterSiteMeta {
  name: string
  tagline: string
  hostname: string
}

export const SISTER_SITE_META: Record<SisterSite, SisterSiteMeta> = {
  hotelswithpets: { name: 'Hotels With Pets', tagline: 'Luxury hotels that welcome dogs as guests', hostname: 'hotelswithpets.com' },
  screentotrip: { name: 'Screen To Trip', tagline: 'Hotels in iconic filming locations', hostname: 'screentotrip.com' },
  bestsnowhotels: { name: 'Best Snow Hotels', tagline: 'Slope-side luxury ski and snow hotels', hostname: 'bestsnowhotels.com' },
  raceweekstays: { name: 'Race Week Stays', tagline: 'Race-weekend hotels at every Grand Prix circuit', hostname: 'raceweekstays.com' },
}

export const SISTER_LINKS_BY_DESTINATION: Record<string, SisterLink[]> = {
  banff: [
    {
      site: 'bestsnowhotels',
      url: 'https://bestsnowhotels.com/destinations/banff',
      anchorText: 'Banff for ski honeymoons',
      context: "Same hotels (Fairmont Banff Springs, Chateau Lake Louise, Post Hotel) graded for ski-in/ski-out, lift access, après-ski. The winter angle on Banff.",
      contextFr: "Les mêmes hôtels (Fairmont Banff Springs, Chateau Lake Louise, Post Hotel) notés pour le ski aux pieds, l'accès aux remontées et l'après-ski. L'angle hivernal sur Banff.",
      contextEs: "Los mismos hoteles (Fairmont Banff Springs, Chateau Lake Louise, Post Hotel) evaluados por su acceso a las pistas, los remontes y el après-ski. La perspectiva invernal sobre Banff.",
      contextPt: "Os mesmos hotéis (Fairmont Banff Springs, Chateau Lake Louise, Post Hotel) avaliados por acesso às pistas, remontes e après-ski. A perspectiva de inverno sobre Banff.",
    },
  ],
  hokkaido: [
    {
      site: 'bestsnowhotels',
      url: 'https://bestsnowhotels.com/destinations/hokkaido',
      anchorText: 'Hokkaido for powder honeymoons',
      context: "Niseko's world-class snow, Zaborin's onsen-after-ski experience, Park Hyatt Hanazono. The winter angle on Hokkaido.",
      contextFr: "La neige poudreuse de classe mondiale de Niseko, l'expérience onsen-après-ski de Zaborin, le Park Hyatt Hanazono. L'angle hivernal sur Hokkaido.",
      contextEs: "La nieve polvo de clase mundial de Niseko, la experiencia onsen tras esquiar de Zaborin, el Park Hyatt Hanazono. La perspectiva invernal sobre Hokkaido.",
      contextPt: "A neve pó de classe mundial de Niseko, a experiência onsen pós-esqui de Zaborin, o Park Hyatt Hanazono. A perspectiva de inverno sobre Hokkaido.",
    },
    {
      site: 'screentotrip',
      url: 'https://screentotrip.com/destinations/hokkaido',
      anchorText: "Hokkaido on screen",
      context: "Filming locations across the island. The set-jetting angle on Hokkaido.",
    },
  ],
  dolomites: [
    {
      site: 'bestsnowhotels',
      url: 'https://bestsnowhotels.com/destinations/dolomites',
      anchorText: 'Dolomites in winter',
      context: 'Forestis, Rosa Alpina, Cristallo at peak ski season. The winter angle on the Dolomites.',
    },
  ],
  switzerland: [
    {
      site: 'bestsnowhotels',
      url: 'https://bestsnowhotels.com/destinations/switzerland',
      anchorText: 'Swiss alpine luxury',
      context: "Same Swiss hotels (Badrutt's Palace, The Alpina Gstaad, Chedi Andermatt) at peak winter. The ski angle on Switzerland.",
    },
  ],
  bavaria: [
    {
      site: 'bestsnowhotels',
      url: 'https://bestsnowhotels.com/destinations/bavaria',
      anchorText: 'Bavarian alpine luxury',
      context: 'Schloss Elmau in winter, Garmisch-Partenkirchen ski access. The winter angle on Bavaria.',
    },
    {
      site: 'raceweekstays',
      url: 'https://raceweekstays.com/destinations/bavaria',
      anchorText: 'Bavaria for the German GP weekend',
      context: 'Same Bavarian alpine luxury becomes race accommodation during Hockenheim or Nürburgring weekends. The motorsport angle on Bavaria.',
    },
  ],
  lapland: [
    {
      site: 'bestsnowhotels',
      url: 'https://bestsnowhotels.com/destinations/lapland',
      anchorText: 'Lapland for winter honeymoons',
      context: 'Northern lights + Arctic spa rituals + dog sled at peak season. The winter angle on Lapland.',
    },
  ],
  iceland: [
    {
      site: 'bestsnowhotels',
      url: 'https://bestsnowhotels.com/destinations/iceland',
      anchorText: 'Iceland in winter',
      context: 'Aurora season at Deplar Farm, Blue Lagoon retreat, ION Adventure Hotel. The winter angle on Iceland.',
      contextFr: "Saison des aurores à Deplar Farm, retraite au Blue Lagoon, ION Adventure Hotel. L'angle hivernal sur l'Islande.",
      contextEs: "Temporada de auroras en Deplar Farm, retiro en Blue Lagoon, ION Adventure Hotel. La perspectiva invernal sobre Islandia.",
      contextPt: "Temporada de auroras na Deplar Farm, retiro no Blue Lagoon, ION Adventure Hotel. A perspectiva de inverno sobre a Islândia.",
    },
    {
      site: 'screentotrip',
      url: 'https://screentotrip.com/destinations/iceland',
      anchorText: "Iceland's screen geography",
      context: "Game of Thrones Lands Beyond the Wall, Interstellar's planet of ice, James Bond's chase scenes. Visit the locations.",
      contextFr: "Les Contrées de l'au-delà du Mur de Game of Thrones, la planète de glace d'Interstellar, les courses-poursuites de James Bond. Visitez les lieux.",
      contextEs: "Las Tierras más allá del Muro de Juego de Tronos, el planeta de hielo de Interstellar, las persecuciones de James Bond. Visita los escenarios.",
      contextPt: "As Terras Além da Muralha de Game of Thrones, o planeta de gelo de Interstellar, as perseguições de James Bond. Visite os locais.",
    },
  ],
  norway: [
    {
      site: 'bestsnowhotels',
      url: 'https://bestsnowhotels.com/destinations/norway',
      anchorText: 'Norwegian fjord winter luxury',
      context: 'Juvet Landscape Hotel in snow, the slow-train Bergen route. The winter angle on Norway.',
    },
  ],
  'new-zealand': [
    {
      site: 'bestsnowhotels',
      url: 'https://bestsnowhotels.com/destinations/new-zealand',
      anchorText: 'Queenstown ski + Lake Wanaka',
      context: 'Southern alps from the same lodges (Eichardt\'s, Matakauri) at peak winter. The winter angle on New Zealand.',
    },
    {
      site: 'screentotrip',
      url: 'https://screentotrip.com/destinations/new-zealand',
      anchorText: 'New Zealand on screen',
      context: 'Lord of the Rings, The Hobbit, Avatar — see Hobbiton and the Tongariro crossing on a honeymoon plan.',
    },
  ],
  bhutan: [
    {
      site: 'bestsnowhotels',
      url: 'https://bestsnowhotels.com/destinations/bhutan',
      anchorText: 'Bhutan in winter',
      context: "Aman Paro snow-dusted Tiger's Nest, lower-season clarity. The winter angle on Bhutan.",
    },
  ],
  croatia: [
    {
      site: 'screentotrip',
      url: 'https://screentotrip.com/destinations/croatia',
      anchorText: 'Croatia on screen',
      context: "King's Landing (Dubrovnik), the GoT Iron Throne room. The set-jetting angle.",
      contextFr: "Port-Réal (Dubrovnik), la salle du Trône de Fer de GoT. L'angle set-jetting.",
      contextEs: "Desembarco del Rey (Dubrovnik), la sala del Trono de Hierro de GoT. La perspectiva set-jetting.",
      contextPt: "Porto Real (Dubrovnik), a sala do Trono de Ferro de GoT. A perspectiva set-jetting.",
    },
  ],
  santorini: [
    {
      site: 'screentotrip',
      url: 'https://screentotrip.com/destinations/santorini',
      anchorText: 'Santorini in film',
      context: 'Mamma Mia: Here We Go Again was Skiathos in disguise — but Oia delivers the Mamma Mia look. The screen-influenced trip.',
      contextFr: "Mamma Mia: Here We Go Again, c'était Skiathos déguisée, mais Oia offre le look Mamma Mia. Le voyage influencé par l'écran.",
      contextEs: "Mamma Mia: Una y otra vez era Skiathos disfrazada, pero Oía entrega el look Mamma Mia. El viaje inspirado por la pantalla.",
      contextPt: "Mamma Mia: Lá Vamos Nós Outra Vez era Skiathos disfarçada, mas Oia entrega o visual Mamma Mia. A viagem inspirada pela tela.",
    },
  ],
  amalfi: [
    {
      site: 'screentotrip',
      url: 'https://screentotrip.com/destinations/amalfi',
      anchorText: 'Amalfi on screen',
      context: 'Ripley (Netflix 2024), The Talented Mr Ripley, Vivere series. The set-jetting angle on the Amalfi Coast.',
      contextFr: "Ripley (Netflix 2024), Le Talentueux Mr Ripley, la série Vivere. L'angle set-jetting sur la côte amalfitaine.",
      contextEs: "Ripley (Netflix 2024), El talento de Mr. Ripley, la serie Vivere. La perspectiva set-jetting sobre la Costa Amalfitana.",
      contextPt: "Ripley (Netflix 2024), O Talentoso Ripley, série Vivere. A perspectiva set-jetting sobre a Costa Amalfitana.",
    },
  ],
  capri: [
    {
      site: 'screentotrip',
      url: 'https://screentotrip.com/destinations/capri',
      anchorText: 'Capri on screen',
      context: 'The Talented Mr Ripley, La Pelle, Bvlgari ad campaigns. The set-jetting angle.',
      contextFr: "Le Talentueux Mr Ripley, La Peau, les campagnes Bvlgari. L'angle set-jetting.",
      contextEs: "El talento de Mr. Ripley, La Piel, las campañas de Bvlgari. La perspectiva set-jetting.",
      contextPt: "O Talentoso Ripley, A Pele, campanhas Bvlgari. A perspectiva set-jetting.",
    },
  ],
  'lake-como': [
    {
      site: 'screentotrip',
      url: 'https://screentotrip.com/destinations/lake-como',
      anchorText: 'Lake Como on screen',
      context: "Casino Royale's Villa del Balbianello, Ocean's Twelve's Villa Erba, Star Wars Episode II's Naboo. The set-jetting angle on Lake Como.",
      contextFr: "La Villa del Balbianello de Casino Royale, la Villa Erba d'Ocean's Twelve, le Naboo de Star Wars Épisode II. L'angle set-jetting sur le lac de Côme.",
      contextEs: "La Villa del Balbianello de Casino Royale, la Villa Erba de Ocean's Twelve, el Naboo de Star Wars Episodio II. La perspectiva set-jetting sobre el lago de Como.",
      contextPt: "A Villa del Balbianello de Casino Royale, a Villa Erba de Onze Homens e um Segredo, Naboo de Star Wars Episódio II. A perspectiva set-jetting sobre o Lago de Como.",
    },
    {
      site: 'raceweekstays',
      url: 'https://raceweekstays.com/destinations/lake-como',
      anchorText: 'Lake Como for the Italian GP',
      context: "45 minutes from Monza. Villa d'Este and Passalacqua become race-week command centres. The motorsport angle.",
      contextFr: "À 45 minutes de Monza. Villa d'Este et Passalacqua deviennent des QG pour la semaine du GP. L'angle motorsport.",
      contextEs: "A 45 minutos de Monza. Villa d'Este y Passalacqua se convierten en cuarteles para la semana de GP. La perspectiva del motorsport.",
      contextPt: "A 45 minutos de Monza. Villa d'Este e Passalacqua viram quartéis para a semana do GP. A perspectiva do automobilismo.",
    },
  ],
  morocco: [
    {
      site: 'screentotrip',
      url: 'https://screentotrip.com/destinations/morocco',
      anchorText: 'Morocco on screen',
      context: "Gladiator's gladiator school, Lawrence of Arabia, The Mummy. The set-jetting angle on Morocco.",
    },
  ],
  tuscany: [
    {
      site: 'screentotrip',
      url: 'https://screentotrip.com/destinations/tuscany',
      anchorText: 'Tuscany on screen',
      context: "Under the Tuscan Sun's Cortona, The English Patient's monastery. The set-jetting angle on Tuscany.",
      contextFr: "Le Cortona de Sous le soleil de Toscane, le monastère du Patient anglais. L'angle set-jetting sur la Toscane.",
      contextEs: "El Cortona de Bajo el sol de Toscana, el monasterio de El paciente inglés. La perspectiva set-jetting sobre la Toscana.",
      contextPt: "A Cortona de Sob o Sol da Toscana, o mosteiro de O Paciente Inglês. A perspectiva set-jetting sobre a Toscana.",
    },
    {
      site: 'hotelswithpets',
      url: 'https://hotelswithpets.com/destinations/tuscany',
      anchorText: 'Tuscany with your dog',
      context: 'Castello di Casole and Borgo Santo Pietro both welcome dogs. Same hotels audited from the pet angle.',
      contextFr: "Castello di Casole et Borgo Santo Pietro accueillent les chiens. Les mêmes hôtels audités sous l'angle pet-friendly.",
      contextEs: "Castello di Casole y Borgo Santo Pietro reciben perros. Los mismos hoteles auditados desde la perspectiva pet-friendly.",
      contextPt: "Castello di Casole e Borgo Santo Pietro recebem cães. Os mesmos hotéis auditados pela ótica pet-friendly.",
    },
  ],
  bali: [
    {
      site: 'screentotrip',
      url: 'https://screentotrip.com/destinations/bali',
      anchorText: 'Bali on screen',
      context: "Eat Pray Love's Ubud, A Perfect Getaway. The set-jetting angle on Bali.",
    },
  ],
  cartagena: [
    {
      site: 'screentotrip',
      url: 'https://screentotrip.com/destinations/cartagena',
      anchorText: 'Cartagena on screen',
      context: 'Romancing the Stone, Love in the Time of Cholera, Strega Nona. The set-jetting angle on Cartagena.',
    },
  ],
  jordan: [
    {
      site: 'screentotrip',
      url: 'https://screentotrip.com/destinations/jordan',
      anchorText: 'Petra and Wadi Rum on screen',
      context: 'Indiana Jones and the Last Crusade, The Martian, Dune. The set-jetting angle on Jordan.',
    },
  ],
  turkey: [
    {
      site: 'screentotrip',
      url: 'https://screentotrip.com/destinations/turkey',
      anchorText: 'Cappadocia on screen',
      context: 'Many filmings — Star Wars Episode IX, several Bollywood films. The set-jetting angle on Cappadocia.',
    },
  ],
  galapagos: [
    {
      site: 'screentotrip',
      url: 'https://screentotrip.com/destinations/galapagos',
      anchorText: 'Galapagos on screen',
      context: 'Master and Commander, BBC nature series filming locations. The set-jetting angle.',
    },
  ],
  maldives: [
    {
      site: 'screentotrip',
      url: 'https://screentotrip.com/destinations/maldives',
      anchorText: 'Maldives on screen',
      context: 'The Last Vermeer, multiple James Bond scenes, Crazy Rich Asians spinoffs. The set-jetting angle on the Maldives.',
    },
  ],
  'french-polynesia': [
    {
      site: 'screentotrip',
      url: 'https://screentotrip.com/destinations/french-polynesia',
      anchorText: 'Tahiti on screen',
      context: 'Mutiny on the Bounty, Couples Retreat. The set-jetting angle on French Polynesia.',
    },
  ],
  'faroe-islands': [
    {
      site: 'screentotrip',
      url: 'https://screentotrip.com/destinations/faroe-islands',
      anchorText: 'The Faroe Islands on screen',
      context: 'The Northman, several Nordic noir series. The set-jetting angle.',
    },
  ],
  slovenia: [
    {
      site: 'screentotrip',
      url: 'https://screentotrip.com/destinations/slovenia',
      anchorText: 'Slovenia on screen',
      context: 'The Chronicles of Narnia, Dancing with Wolves dub locations. The set-jetting angle on Slovenia.',
    },
  ],
  scotland: [
    {
      site: 'screentotrip',
      url: 'https://screentotrip.com/destinations/scotland',
      anchorText: 'Scotland on screen',
      context: "Outlander's Highlands, Brave, Skyfall, Harry Potter's Glenfinnan Viaduct. The set-jetting angle on Scotland.",
    },
    {
      site: 'hotelswithpets',
      url: 'https://hotelswithpets.com/destinations/scotland',
      anchorText: 'Scotland with your dog',
      context: 'Many Highland estates welcome dogs as guests. Same hotels audited for off-leash walks + room policies.',
    },
  ],
  ireland: [
    {
      site: 'screentotrip',
      url: 'https://screentotrip.com/destinations/ireland',
      anchorText: 'Ireland on screen',
      context: 'Star Wars The Last Jedi (Skellig Michael), The Banshees of Inisherin (Achill Island). The set-jetting angle on Ireland.',
    },
    {
      site: 'hotelswithpets',
      url: 'https://hotelswithpets.com/destinations/ireland',
      anchorText: 'Ireland with your dog',
      context: 'Castle hotels (Ashford, Adare, Dromoland) audited for pet policies. The Irish countryside is dog-welcoming.',
    },
  ],
  'big-sur': [
    {
      site: 'screentotrip',
      url: 'https://screentotrip.com/destinations/big-sur',
      anchorText: 'Big Sur on screen',
      context: 'Big Little Lies, Vertigo, plenty of indie films. The set-jetting angle on Big Sur.',
    },
  ],
  'cinque-terre': [
    {
      site: 'screentotrip',
      url: 'https://screentotrip.com/destinations/cinque-terre',
      anchorText: 'Cinque Terre on screen',
      context: "Pixar's Luca was set in Portovenere just south — but the Cinque Terre vibe is unmistakable. The set-jetting angle.",
    },
  ],
  venice: [
    {
      site: 'screentotrip',
      url: 'https://screentotrip.com/destinations/venice',
      anchorText: 'Venice on screen',
      context: "Don't Look Now, Casino Royale, From Russia With Love, The Tourist. The set-jetting angle on Venice.",
    },
  ],
  cotswolds: [
    {
      site: 'hotelswithpets',
      url: 'https://hotelswithpets.com/destinations/cotswolds',
      anchorText: 'Cotswolds with your dog',
      context: 'The Cotswolds is the British dog-honeymoon capital. Same hotels (Soho Farmhouse, The Pig, Thyme) audited for pet policies, off-leash trails, terrace dining with dogs.',
      contextFr: "Les Cotswolds sont la capitale britannique de la lune de miel avec chien. Les mêmes hôtels (Soho Farmhouse, The Pig, Thyme) audités pour les politiques pet, les sentiers sans laisse, le dîner en terrasse avec chien.",
      contextEs: "Los Cotswolds son la capital británica de la luna de miel con perro. Los mismos hoteles (Soho Farmhouse, The Pig, Thyme) auditados por políticas pet, senderos sin correa y cenas en terraza con perro.",
      contextPt: "Os Cotswolds são a capital britânica da lua de mel com cão. Os mesmos hotéis (Soho Farmhouse, The Pig, Thyme) auditados por políticas pet, trilhas sem coleira e jantares no terraço com cão.",
    },
    {
      site: 'raceweekstays',
      url: 'https://raceweekstays.com/destinations/cotswolds',
      anchorText: 'Cotswolds for the British GP',
      context: 'Soho Farmhouse, The Pig, Thyme — all within an hour of Silverstone. Race-week luxury away from the circuit crowds. The motorsport angle.',
    },
  ],
  provence: [
    {
      site: 'hotelswithpets',
      url: 'https://hotelswithpets.com/destinations/provence',
      anchorText: 'Provence with your dog',
      context: "France's dog-welcoming culture extends into 5-star hotels in the Luberon. Same hotels graded for pet fees, walks, and dog beds.",
      contextFr: "La culture française pro-chien s'étend aux hôtels 5 étoiles du Luberon. Les mêmes hôtels notés pour les frais pet, les balades et les couchages.",
      contextEs: "La cultura francesa amistosa con perros llega a los hoteles 5 estrellas del Luberon. Los mismos hoteles evaluados por tarifas pet, paseos y camas para perros.",
      contextPt: "A cultura francesa amiga dos cães chega aos hotéis 5 estrelas do Luberon. Os mesmos hotéis avaliados por taxas pet, passeios e camas para cães.",
    },
  ],
  'loire-valley': [
    {
      site: 'hotelswithpets',
      url: 'https://hotelswithpets.com/destinations/loire-valley',
      anchorText: 'Loire chateaux with your dog',
      context: 'Most chateau-hotels welcome dogs in the gardens. Same hotels from the pet angle.',
    },
    {
      site: 'raceweekstays',
      url: 'https://raceweekstays.com/destinations/loire-valley',
      anchorText: 'Loire Valley for Le Mans race week',
      context: 'Le Mans is in the Loire region. The same château hotels we love for honeymoons become race-week accommodation during the 24 Heures du Mans. The motorsport angle.',
    },
  ],
  burgundy: [
    {
      site: 'hotelswithpets',
      url: 'https://hotelswithpets.com/destinations/burgundy',
      anchorText: 'Burgundy with your dog',
      context: 'Quiet vineyards + small-luxury inns. Same hotels audited for pet welcome.',
    },
  ],
  'cote-dazur': [
    {
      site: 'hotelswithpets',
      url: 'https://hotelswithpets.com/destinations/cote-dazur',
      anchorText: "Côte d'Azur with your dog",
      context: 'The Riviera is dog-friendly by default. Same hotels audited for pet policies + terrace dining.',
      contextFr: "La Riviera est par défaut pet-friendly. Les mêmes hôtels audités pour les politiques pet et le dîner en terrasse.",
      contextEs: "La Riviera es por defecto pet-friendly. Los mismos hoteles auditados por políticas pet y cenas en terraza.",
      contextPt: "A Riviera é por padrão pet-friendly. Os mesmos hotéis auditados por políticas pet e jantares no terraço.",
    },
    {
      site: 'raceweekstays',
      url: 'https://raceweekstays.com/destinations/cote-dazur',
      anchorText: "Côte d'Azur for the Monaco Grand Prix",
      context: 'Cap-Ferrat, Monte-Carlo, Èze — these hotels are race-week command centres. The motorsport angle on Monaco GP.',
      contextFr: "Cap-Ferrat, Monte-Carlo, Èze — ces hôtels sont les QG de la semaine de course. L'angle motorsport sur le GP de Monaco.",
      contextEs: "Cap-Ferrat, Monte-Carlo, Èze — estos hoteles son cuarteles de la semana de carrera. La perspectiva motorsport sobre el GP de Mónaco.",
      contextPt: "Cap-Ferrat, Monte-Carlo, Èze — esses hotéis são quartéis da semana de corrida. A perspectiva automobilística sobre o GP de Mônaco.",
    },
  ],
  champagne: [
    {
      site: 'hotelswithpets',
      url: 'https://hotelswithpets.com/destinations/champagne',
      anchorText: 'Champagne region with your dog',
      context: 'Slow vineyard honeymoons. Same hotels graded for pet welcome.',
    },
  ],
  'lake-garda': [
    {
      site: 'raceweekstays',
      url: 'https://raceweekstays.com/destinations/lake-garda',
      anchorText: 'Lake Garda for the Italian GP',
      context: 'Close to Monza. Villa Feltrinelli and Lefay become race-week luxury bases. The motorsport angle on Lake Garda.',
    },
  ],
}
