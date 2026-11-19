const unassignedMedia = (title) => ({
  hero: {
    kind: 'image',
    alt: `${title} project media`,
    aspectRatio: '1.66 / 1',
  },
});

const still = (src, alt, aspectRatio = '1.66 / 1') => ({
  kind: 'image',
  src,
  alt,
  aspectRatio,
  objectPosition: '50% 50%',
});

export const projects = [
  {
    slug: 'colectivo-mpu',
    title: 'Colectivo',
    category: 'Labor',
    clientOutlet: 'More Perfect Union',
    roles: ['Producer', 'Director', 'Editor'],
    media: {
      hero: still('/media/peter-labor-selection.jpg', 'Colectivo project media'),
      gallery: [still('/media/peter-labor-selection.jpg', 'Colectivo project media, frame one')],
    },
  },
  { slug: 'ups-part-timer', title: 'UPS $25 Part-Timer Campaign', category: 'Labor', roles: [], media: unassignedMedia('UPS $25 Part-Timer Campaign') },
  { slug: 'kellogg-strike', title: 'Kellogg Strike', category: 'Labor', clientOutlet: 'More Perfect Union', roles: [], media: unassignedMedia('Kellogg Strike') },
  { slug: 'amazon-organizing', title: 'Amazon Organizing', category: 'Labor', roles: [], media: unassignedMedia('Amazon Organizing') },
  { slug: 'tdu-teamsters', title: 'TDU / Teamsters', category: 'Labor', roles: [], media: unassignedMedia('TDU / Teamsters') },
  { slug: 'essential-workers-democracy', title: 'Essential Workers for Democracy', category: 'Labor', roles: [], media: unassignedMedia('Essential Workers for Democracy') },
  { slug: 'art-institute-workers-united', title: 'Art Institute Workers United', category: 'Labor', roles: [], media: unassignedMedia('Art Institute Workers United') },
  { slug: 'gary-indiana-power', title: 'Gary Indiana Power Outage', category: 'Labor', clientOutlet: 'More Perfect Union', roles: [], media: unassignedMedia('Gary Indiana Power Outage') },
  {
    slug: 'miguel-alvelo-rivera',
    title: 'Miguel Alvelo Rivera for State Representative',
    category: 'Politics',
    roles: ['Media Strategist', 'Producer', 'Director'],
    media: { hero: still('/media/peter-politics-selection.jpg', 'Miguel Alvelo Rivera project media') },
  },
  { slug: 'claudia-peralta', title: 'Claudia Peralta for School Board', category: 'Politics', roles: [], media: unassignedMedia('Claudia Peralta for School Board') },
  { slug: 'rossana-rodriguez-sanchez', title: 'Rossana Rodriguez-Sanchez', category: 'Politics', roles: [], media: unassignedMedia('Rossana Rodriguez-Sanchez') },
  { slug: 'graciela-guzman', title: 'Graciela Guzmán', category: 'Politics', roles: [], media: unassignedMedia('Graciela Guzmán') },
  { slug: 'byron-sigcho-lopez', title: 'Byron Sigcho-Lopez', category: 'Politics', roles: [], media: unassignedMedia('Byron Sigcho-Lopez') },
  { slug: 'robin-kelly', title: 'Robin Kelly', category: 'Politics', roles: [], media: unassignedMedia('Robin Kelly') },
  { slug: 'raheem-uqdah', title: 'Raheem Uqdah', category: 'Politics', roles: [], media: unassignedMedia('Raheem Uqdah') },
  { slug: 'anthony-quezada', title: 'Anthony Quezada', category: 'Politics', roles: [], media: unassignedMedia('Anthony Quezada') },
  {
    slug: 'indiana-data-centers',
    title: 'Indiana Data Centers',
    category: 'Documentary',
    clientOutlet: 'More Perfect Union',
    roles: ['Director of Photography'],
    media: { hero: still('/media/peter-documentary-selection.jpg', 'Indiana Data Centers project media') },
  },
  { slug: 'indiana-solar-farms', title: 'Indiana Solar Farms', category: 'Documentary', roles: [], media: unassignedMedia('Indiana Solar Farms') },
  {
    slug: 'south-bend-doc',
    title: 'South Bend Documentary Work',
    category: 'Documentary',
    roles: [],
    media: { hero: still('/media/peter-documentary-selection.jpg', 'South Bend Documentary Work project media') },
  },
];

export const homeCuration = {
  doors: [
    { category: 'Labor', projectSlug: 'colectivo-mpu', media: still('/media/peter-labor-door.jpg', 'Labor category representative media') },
    { category: 'Politics', projectSlug: 'miguel-alvelo-rivera', media: still('/media/peter-politics-door.jpg', 'Politics category representative media') },
    { category: 'Documentary', projectSlug: 'indiana-data-centers', media: still('/media/peter-documentary-door.jpg', 'Documentary category representative media') },
  ],
  selectedWork: ['colectivo-mpu', 'miguel-alvelo-rivera', 'indiana-data-centers', 'kellogg-strike', 'south-bend-doc'],
};

export const additionalCredits = [
  { show: 'Finding Your Roots', outlet: 'PBS' },
  { show: "I'll Be Gone in the Dark", outlet: 'HBO' },
  { show: 'Icons Unearthed', outlet: 'Nacelle' },
  { show: 'Nacelle / Netflix Productions', outlet: 'Netflix' },
  { show: 'Live Political Production', outlet: 'Various' },
];
