/*
  YOUR CONTENT LIVES HERE. You can edit this file without touching the rest of the site.

  To add a mission: copy one block from { to }, paste it in the list, and change the text.
  To remove a mission: delete its block.
  Category must be "sport", "luxury", "agency" or "service".
  Leave link: "" if there is nothing to link to. The link then disappears.
  Leave fact: "" if you have no figure to show.
  Logos: list file names from assets/logos/ (see assets/logos/LISEZ-MOI.txt). A logo whose
  file is missing is simply not shown, so you can add them one at a time.
*/

const PROFILE = {
    email: 'emilealexandre03@gmail.com',
    linkedin: 'https://www.linkedin.com/in/emile-alexandre',
    cv: 'assets/CV_Emile_Alexandre.pdf',
};

const PROJECTS = [
    {
        title: 'Tour de France',
        logos: ['assets/logos/tour-de-france.png', 'assets/logos/continental.png'],
        category: 'sport',
        role: 'Event Operations Manager, Continental',
        context: 'Barcelona, Lille, Rouen, Paris · July 2025 and July 2026',
        description:
            'I coordinated the hospitality and partner areas for Continental at the start and finish activations. That meant managing local service providers, supervising the technical installations, and looking after brand guests and delegations on site.',
        tools: 'Hospitality, logistics, suppliers, on-site coordination',
        fact: 'A group of 120 Continental guests on each edition, over 5 days (start and finish)',
        link: '',
        linkLabel: '',
    },
    {
        title: 'Roland-Garros, Moët Hennessy',
        logos: ['assets/logos/roland-garros.png', 'assets/logos/moet-hennessy.png'],
        category: 'sport',
        role: 'VIP Reception Host',
        context: 'Paris · June to July 2026',
        description:
            'I applied high-end hospitality standards and worked with the on-site teams so guests had a smooth day. I escorted them to the partner hospitality areas, then gave them dedicated access to the Centre Court boxes.',
        tools: 'VIP hospitality, guest flow, protocol',
        fact: 'About 100 VIP guests welcomed and looked after each day',
        link: '',
        linkLabel: '',
    },
    {
        title: 'Paris 2024 Olympic Games',
        logos: ['assets/logos/paris-2024.png'],
        category: 'sport',
        role: 'Production Manager, Groupe BPCE',
        context: 'Petit Palais, Paris · July to August 2024',
        description:
            'I worked on the whole event for Groupe BPCE at the Petit Palais: set-up, daily operations and dismantling of the temporary infrastructure. I managed access and flow control and applied the Olympic security protocols.',
        tools: 'Production, logistics, access and flow, security protocols',
        fact: 'About 1,500 guests a day, with a team coordinating venue logistics and reception',
        link: '',
        linkLabel: '',
    },
    {
        title: 'Paris Fashion Week',
        logos: ['assets/logos/paris-fashion-week.png'],
        category: 'luxury',
        role: 'VIP Reception Host',
        context: 'Paris · 2025 and 2026 editions',
        description:
            'I welcomed international guests personally and managed protocol access at official shows, including Chanel, Dior, Balmain, Louis Vuitton, Prada and Miu Miu. I seated guests and solved seating and accreditation issues quickly.',
        tools: 'Protocol, accreditations, guest seating',
        fact: '',
        link: '',
        linkLabel: '',
    },
    {
        title: 'Mythologies Agency',
        logos: ['assets/logos/mythologies.png'],
        category: 'agency',
        role: 'Assistant Project Manager Intern',
        context: 'Event agency, Paris · 2023 · 4 months',
        description:
            'I supported the preparation and production of projects for KIA Auto, Viva Technology and the Paris Air Show (SIAE 2023).',
        tools: 'Event production, project support',
        fact: '',
        link: '',
        linkLabel: '',
    },
    {
        title: 'Music festivals',
        logos: ['assets/logos/we-love-green.png', 'assets/logos/solidays.png', 'assets/logos/lollapalooza.png', 'assets/logos/rock-en-seine.png'],
        category: 'agency',
        role: 'Bar Manager and Bartender',
        context: 'Paris · 2022 and 2023',
        description:
            'I worked as bar manager at We Love Green, Solidays, Lollapalooza and Rock en Seine.',
        tools: 'Team management, high-volume service',
        fact: '',
        link: '',
        linkLabel: '',
    },
    {
        title: 'Cornershop',
        logos: ['assets/logos/cornershop.png'],
        category: 'service',
        role: 'Sales Associate',
        context: 'Surf and kitesurf shop · January to April 2026',
        description:
            'I handled both sales and the shop logistics: stock management, orders to ship and remote sales. I also helped develop the shop’s social media marketing, and sales were strong every week.',
        tools: 'Retail, stock, remote sales, social media',
        fact: '',
        link: '',
        linkLabel: '',
    },
    {
        title: 'Hugo’s Manly',
        logos: ['assets/logos/hugos-manly.png'],
        category: 'service',
        role: 'Bartender and Runner',
        context: 'Sydney, Australia · January to July 2025',
        description:
            'Six months of full immersion in an English-speaking country, working in an international team in a high-volume, high-standard venue. I handled floor service and the bar, and I took care of customer satisfaction at a fast pace.',
        tools: 'English (C1), floor service, bar',
        fact: '',
        link: '',
        linkLabel: '',
    },
    {
        title: 'Roland-Garros 2019',
        logos: ['assets/logos/roland-garros.png'],
        category: 'sport',
        role: 'Official Ball Boy',
        context: 'Paris · 2019 edition',
        description: 'Selected as an official ball boy for the French Open.',
        tools: 'Tennis, tournament environment',
        fact: '',
        link: '',
        linkLabel: '',
    },
];
