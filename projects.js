/*
  CONTENT LIVES HERE. Edit this file without touching the rest of the site.

  To add an experience: copy one block from { to }, paste it in the list, change the text.
  To remove one: delete its block.
  categories: any of "sport", "hospitality", "production", "international".
  Leave period or place as '' when unknown: the line simply disappears.
  Leave stat as '' when there is no figure.
*/

const PROFILE = {
    email: 'emilealexandre03@gmail.com',
    linkedin: 'https://www.linkedin.com/in/emile-alexandre',
    cv: 'assets/CV_Emile_Alexandre.pdf',
};

const CATEGORIES = {
    sport: 'Sport',
    hospitality: 'Hospitality',
    production: 'Production',
    international: 'International',
};

const PROJECTS = [
    {
        title: 'Tour de France, Continental activation',
        role: 'Site manager (régisseur)',
        org: 'Eventeam, for Continental',
        categories: ['sport', 'international'],
        place: 'Barcelona, Lille, Rouen, Paris',
        period: '2025 and 2026 editions',
        summary:
            'Operational and logistical coordination of Continental’s hospitality and partner areas at the start and finish activations of the Tour de France. Five days per edition, with a group of 120 Continental clients each year.',
        bullets: [
            'Managed local suppliers and supervised technical installations.',
            'Welcomed and looked after brand guests and delegations on site.',
        ],
        tags: 'Hospitality areas, suppliers, logistics, client groups',
        stat: '120',
        statLabel: 'Continental clients managed per edition',
    },
    {
        title: 'Paris 2024 Olympic Games, Petit Palais',
        role: 'Site manager (régisseur)',
        org: 'Petit Palais, Paris',
        categories: ['sport', 'production'],
        place: 'Paris',
        period: 'Jul to Aug 2024',
        summary:
            'Worked across the whole event, with a team coordinating the venue’s logistics and guest welcome for more than 300 clients a day.',
        bullets: [
            'Organised and ran events and exhibitions at the venue.',
            'Coordinated set-up, daily operation and dismantling of temporary infrastructure.',
            'Managed access and visitor flows, applying Olympic security protocols.',
        ],
        tags: 'Logistics, temporary infrastructure, access, flow management',
        stat: '300+',
        statLabel: 'clients a day at the venue',
    },
    {
        title: 'Roland-Garros, VIP hospitality',
        role: 'VIP host',
        org: 'Moët Hennessy partner village, via agency Florence Dorée',
        categories: ['sport', 'hospitality'],
        place: 'Paris',
        period: '',
        summary:
            'Welcomed and looked after more than 50 VIP clients a day, escorting them to the partner hospitality areas and then to the boxes on the central court.',
        bullets: [
            'Applied high-end welcome standards and coordinated with the on-site teams for a smooth guest experience.',
        ],
        tags: 'VIP welcome, hospitality, guest escort',
        stat: '50+',
        statLabel: 'VIP clients a day',
    },
    {
        title: 'Paris Fashion Week, VIP welcome',
        role: 'VIP host',
        org: 'Moët Hennessy',
        categories: ['hospitality'],
        place: 'Paris',
        period: '',
        summary:
            'Personalised welcome of international guests and management of protocol access at official shows.',
        bullets: [
            'Seated guests in the room and quickly solved seating and accreditation issues.',
        ],
        tags: 'Shows: Chanel, Dior, Balmain, Louis Vuitton, Prada, Miu Miu. Protocol, accreditation',
        stat: '',
        statLabel: '',
    },
    {
        title: 'Hugo’s Manly, Sydney',
        role: 'Bartender and runner',
        org: 'Hugo’s Manly',
        categories: ['hospitality', 'international'],
        place: 'Sydney, Australia',
        period: 'Jan to Jul 2025',
        summary:
            'Six months of full immersion in an English-speaking workplace, building a fluent C1 level of English.',
        bullets: [
            'Worked in an international team and kept guests satisfied at a high pace.',
            'Ran table service and the bar in a high-volume venue with high standards.',
        ],
        tags: 'English C1, teamwork, high-volume service',
        stat: '',
        statLabel: '',
    },
    {
        title: 'Stand design for Engie and Louis Vuitton',
        role: 'Assistant project manager (intern)',
        org: 'Mythologies, events agency',
        categories: ['production'],
        place: '',
        period: '',
        summary:
            'Internship in an events agency. Two major projects: stand design for Engie and for Louis Vuitton, at an aeronautics trade show and VivaTech.',
        bullets: [],
        tags: 'Events and stands. Accounts and events: KIA Auto, VivaTech, SIAE 2023',
        stat: '2',
        statLabel: 'major stand projects',
    },
    {
        title: 'Top 14 semi-finals, signage',
        role: 'Assistant project manager (intern)',
        org: 'MCI France',
        categories: ['sport', 'production'],
        place: 'Lyon',
        period: '',
        summary: 'Internship focused on the signage for the Top 14 rugby semi-finals in Lyon.',
        bullets: [],
        tags: 'Signage, rugby, event production',
        stat: '',
        statLabel: '',
    },
    {
        title: 'Surf and kitesurf shop',
        role: 'Sales intern',
        org: 'Cornershop',
        categories: ['sport'],
        place: '',
        period: '4 months',
        summary:
            'Four-month internship in a surf and kitesurf shop, covering both sales and the shop’s logistics, with strong sales results every week.',
        bullets: [
            'Handled orders to ship and remote sales.',
            'Managed stock.',
            'Helped develop the shop’s marketing on social media.',
        ],
        tags: 'Retail, logistics, stock, social media, kitesurf',
        stat: '',
        statLabel: '',
    },
    {
        title: 'Music festivals, bar service',
        role: 'Bar staff',
        org: 'We Love Green, Solidays, Lollapalooza, Rock en Seine',
        categories: ['hospitality'],
        place: '',
        period: '',
        summary: 'Bar work at four music festivals: We Love Green, Solidays, Lollapalooza and Rock en Seine.',
        bullets: [],
        tags: 'Festivals, bar, high-volume service',
        stat: '',
        statLabel: '',
    },
];
