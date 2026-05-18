export interface Project {
  id: number;
  name: string;
  type: string;
  category: string;
  year: string;
  location: string;
  scope: string;
  area: string;
  image: string;
  alt: string;
  description: string;
  client: string;
  architect: string;
  duration: string;
  challenges: string[];
  solutions: string[];
  gallery: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    name: 'Indira Gandhi International Airport',
    type: 'Airport Infrastructure',
    category: 'Government',
    year: '2022',
    location: 'New Delhi',
    scope: 'Linear & Baffle Ceiling + Wall Cladding',
    area: '5000+ sqm',
    image: '/assets/images/Delhi T1.jpeg',
    alt: 'Indira Gandhi International Airport T1 — ceiling and cladding execution.',
    description: 'Large-scale airport infrastructure execution involving linear ceilings, baffle ceiling systems, and premium wall cladding solutions designed for high-footfall modern aviation environments.',
    client: 'Airports Authority of India / GMR Group',
    architect: 'Global Aviation Design Consortium',
    duration: '14 Months',
    challenges: [
      'Executing live terminal installations without disrupting ongoing passenger transit operations.',
      'Maintaining precise acoustic compliance across 5,000+ sqm of expansive concourse halls.',
      'Rigorous seismic and wind-load anchoring for heavy baffle ceiling systems.'
    ],
    solutions: [
      'Deployed night-shift specialized rigging crews to ensure zero operational interference.',
      'Integrated custom acoustic fleece-backed metal perforated panels to achieve optimal NRC ratings.',
      'Engineered bespoke primary suspension grids using heavy-gauge structural aluminium.'
    ],
    gallery: [
      '/assets/images/Delhi T1.jpeg',
      '/assets/images/WhatsApp Image 2026-05-11 at 10.01.13 PM.jpeg',
      '/assets/images/WhatsApp Image 2026-05-11 at 10.01.14 PM.jpeg'
    ]
  },
  {
    id: 2,
    name: 'Rajiv Gandhi International Airport',
    type: 'Airport Infrastructure',
    category: 'Government',
    year: '2021',
    location: 'Hyderabad',
    scope: 'Linear Ceiling',
    area: '11000 sqm',
    image: '/assets/images/WhatsApp Image 2026-05-11 at 10.01.13 PM.jpeg',
    alt: 'Rajiv Gandhi International Airport Hyderabad — linear ceiling execution.',
    description: 'Executed extensive linear ceiling systems across airport infrastructure spaces with precision-focused architectural finishing.',
    client: 'GMR Hyderabad International Airport Ltd',
    architect: 'Larsen & Toubro Infrastructure Design',
    duration: '18 Months',
    challenges: [
      'Achieving flawless linear alignment across an 11,000 sqm continuous ceiling expanse.',
      'Coordinating MEP (Mechanical, Electrical, Plumbing) integration within tight ceiling plenums.',
      'Strict adherence to international aviation fire-safety and low-smoke zero-halogen standards.'
    ],
    solutions: [
      'Utilized advanced laser-leveling grid alignment systems for millimeter-perfect installation.',
      'Designed custom modular inspection trapdoors that blend invisibly into the linear panel layout.',
      'Procured non-combustible Class-1 rated architectural aluminium carriers and panels.'
    ],
    gallery: [
      '/assets/images/WhatsApp Image 2026-05-11 at 10.01.13 PM.jpeg',
      '/assets/images/Delhi T1.jpeg',
      '/assets/images/WhatsApp Image 2026-05-11 at 10.01.14 PM (1).jpeg'
    ]
  },
  {
    id: 3,
    name: 'Kempegowda International Airport',
    type: 'Airport Infrastructure',
    category: 'Government',
    year: '2022',
    location: 'Bangalore',
    scope: 'Aluminium Tube Ceiling',
    area: 'Large-scale',
    image: '/assets/images/WhatsApp Image 2026-05-11 at 10.01.14 PM.jpeg',
    alt: 'Kempegowda International Airport Bangalore — aluminium tube ceiling execution.',
    description: 'Modern aluminium tube ceiling execution designed for premium airport interior aesthetics and structural durability.',
    client: 'Bangalore International Airport Limited (BIAL)',
    architect: 'SOM (Skidmore, Owings & Merrill)',
    duration: '16 Months',
    challenges: [
      'Integrating heavy tubular extrusion profiles with complex terminal roof curvatures.',
      'Ensuring anti-glare finishing to complement expansive natural skylight illumination.',
      'Managing high-velocity HVAC airflow dynamics across open tubular ceiling configurations.'
    ],
    solutions: [
      'Fabricated articulated suspension brackets capable of variable-angle locking.',
      'Applied specialized matte-anodized architectural coatings to eliminate direct sunlight reflection.',
      'Conducted computational fluid dynamics (CFD) modeling to optimize baffle spacing.'
    ],
    gallery: [
      '/assets/images/WhatsApp Image 2026-05-11 at 10.01.14 PM.jpeg',
      '/assets/images/WhatsApp Image 2026-05-11 at 10.01.16 PM.jpeg',
      '/assets/images/WhatsApp Image 2026-05-11 at 10.01.17 PM.jpeg'
    ]
  },
  {
    id: 4,
    name: 'Chaudhary Charan Singh International Airport',
    type: 'Airport Infrastructure',
    category: 'Government',
    year: '2023',
    location: 'Lucknow',
    scope: 'Baffle Ceiling',
    area: '2000 sqm',
    image: '/assets/images/WhatsApp Image 2026-05-11 at 10.01.14 PM (1).jpeg',
    alt: 'CCS International Airport Lucknow — baffle ceiling execution.',
    description: 'Delivered advanced baffle ceiling systems for airport infrastructure with emphasis on acoustics, design uniformity, and large-scale execution quality.',
    client: 'Adani Airports Holding Limited',
    architect: 'Pascal+Watson Architects',
    duration: '12 Months',
    challenges: [
      'Executing fast-track modular ceiling installation within an accelerated 12-month terminal expansion.',
      'Ensuring acoustic dampening in a high-reverberation check-in hall environment.',
      'Seamless alignment of integrated linear LED lighting luminaires between baffles.'
    ],
    solutions: [
      'Pre-assembled carrier tracks and baffle clips off-site to double on-site installation velocity.',
      'Incorporated internal sound-absorbing mineral wool cores within perforated baffle extrusions.',
      'Engineered dedicated lighting suspension channels independent of the ceiling grid.'
    ],
    gallery: [
      '/assets/images/WhatsApp Image 2026-05-11 at 10.01.14 PM (1).jpeg',
      '/assets/images/Delhi T1.jpeg',
      '/assets/images/WhatsApp Image 2026-05-11 at 10.01.19 PM.jpeg'
    ]
  },
  {
    id: 5,
    name: 'KIIT University',
    type: 'Educational Institution',
    category: 'Institutional',
    year: '2020',
    location: 'Bhubaneswar',
    scope: 'False Ceiling — 600×600 HDI Systems',
    area: '1000 sqm',
    image: '/assets/images/WhatsApp Image 2026-05-11 at 10.01.16 PM.jpeg',
    alt: 'KIIT University Bhubaneswar — HDI false ceiling systems.',
    description: 'Executed high-quality HDI false ceiling systems for KIIT University, delivering clean architectural finishing and durable execution across educational infrastructure spaces.',
    client: 'Kalinga Institute of Industrial Technology',
    architect: 'KIIT Project Engineering Cell',
    duration: '6 Months',
    challenges: [
      'Delivering high-durability ceiling tiles capable of withstanding humid tropical climates.',
      'Ensuring rapid maintenance access for overhead IT and laboratory networking cables.',
      'Meeting strict institutional budgetary constraints without compromising visual quality.'
    ],
    solutions: [
      'Installed moisture-resistant high-density lay-in ceiling panels with sealed edges.',
      'Implemented a fully demountable exposed T-grid suspension system for instant plenum access.',
      'Optimized tile cut-plans to reduce material wastage to under 3%.'
    ],
    gallery: [
      '/assets/images/WhatsApp Image 2026-05-11 at 10.01.16 PM.jpeg',
      '/assets/images/WhatsApp Image 2026-05-11 at 10.01.20 PM.jpeg',
      '/assets/images/WhatsApp Image 2026-05-11 at 10.01.22 PM.jpeg'
    ]
  },
  {
    id: 6,
    name: 'Coconut Peninsula Resort',
    type: 'Hospitality',
    category: 'Commercial',
    year: '2022',
    location: 'Tangi, Odisha',
    scope: 'Linear Metal & Gypsum Ceiling',
    area: '1200 sqm',
    image: '/assets/images/coconut peninsula resort.jpg',
    alt: 'Coconut Peninsula Resort Tangi Odisha — premium interior execution.',
    description: 'Delivered premium hospitality interior execution featuring gypsum ceiling systems, linear metal ceiling installations, and sophisticated resort interior finishing.',
    client: 'Peninsula Hospitality Group',
    architect: 'Arch-En Design Studio',
    duration: '10 Months',
    challenges: [
      'Creating intricate stepped gypsum ceiling coves to house concealed atmospheric warm-dim lighting.',
      'Protecting exterior semi-open linear metal ceilings from coastal salt-mist corrosion.',
      'Flawless integration of ceiling diffusers and fire sprinklers into decorative ceiling patterns.'
    ],
    solutions: [
      'Utilized laser-cut pre-formed gypsum framing sections to achieve perfectly crisp 90-degree light coves.',
      'Specified exterior-grade PVDF coated aluminium linear panels with heavy-duty wind-lock clips.',
      'Custom-painted all exposed MEP fixtures to match the exact RAL color code of the ceiling.'
    ],
    gallery: [
      '/assets/images/coconut peninsula resort.jpg',
      '/assets/images/WhatsApp Image 2026-05-11 at 10.01.17 PM.jpeg',
      '/assets/images/WhatsApp Image 2026-05-11 at 10.01.16 PM.jpeg'
    ]
  },
  {
    id: 7,
    name: 'Babasaheb Ambedkar Bus Terminal',
    type: 'Public Infrastructure',
    category: 'Government',
    year: '2023',
    location: 'India',
    scope: 'Baffle Ceiling',
    area: '3000 sqm',
    image: '/assets/images/WhatsApp Image 2026-05-11 at 10.01.19 PM.jpeg',
    alt: 'Babasaheb Ambedkar Bus Terminal — large-scale baffle ceiling execution.',
    description: 'Executed high-scale public infrastructure ceiling systems enhancing passenger environment quality and architectural appeal.',
    client: 'State Transport Infrastructure Development Corp',
    architect: 'Urban Mass Transit Company (UMTC)',
    duration: '11 Months',
    challenges: [
      'Managing high ceiling heights (up to 14 meters) requiring heavy scaffolding and aerial lifts.',
      'Ensuring robust resistance against heavy vehicular exhaust fumes and particulate matter.',
      'Executing within a highly congested urban transit hub with restricted material laydown areas.'
    ],
    solutions: [
      'Deployed motorized mast-climbing work platforms for safe and rapid high-level ceiling installation.',
      'Installed wipe-clean polyester powder-coated baffle extrusions with anti-static properties.',
      'Coordinated just-in-time overnight material delivery schedules directly from off-site warehousing.'
    ],
    gallery: [
      '/assets/images/WhatsApp Image 2026-05-11 at 10.01.19 PM.jpeg',
      '/assets/images/WhatsApp Image 2026-05-11 at 10.01.20 PM.jpeg',
      '/assets/images/WhatsApp Image 2026-05-11 at 10.01.14 PM.jpeg'
    ]
  },
  {
    id: 8,
    name: 'DN Regalia Mall',
    type: 'Commercial',
    category: 'Commercial',
    year: '2023',
    location: 'Bhubaneswar',
    scope: 'Aluminium Facade Work',
    area: '1000 sqm',
    image: '/assets/images/WhatsApp Image 2026-05-11 at 10.01.20 PM.jpeg',
    alt: 'DN Regalia Mall Bhubaneswar — aluminium facade execution.',
    description: 'Modern aluminium facade execution for commercial infrastructure with emphasis on contemporary architectural identity.',
    client: 'DN Homes Private Limited',
    architect: 'Innate Architectural Consultants',
    duration: '8 Months',
    challenges: [
      'Engineering exterior aluminium composite panel (ACP) cladding on complex multi-angled building elevations.',
      'Ensuring 100% weather-tightness against torrential monsoon rainfalls.',
      'Integrating dynamic exterior LED media facade lighting within the cladding joints.'
    ],
    solutions: [
      'Utilized 3D total-station surveying to generate precise fabrication drawings for each unique facade cassette.',
      'Implemented a dual-seal structural silicone glazing and flashing system for complete waterproofing.',
      'Designed custom recessed aluminium extrusion channels to securely house linear LED luminaires.'
    ],
    gallery: [
      '/assets/images/WhatsApp Image 2026-05-11 at 10.01.20 PM.jpeg',
      '/assets/images/WhatsApp Image 2026-05-11 at 10.01.22 PM.jpeg',
      '/assets/images/WhatsApp Image 2026-05-11 at 10.01.16 PM.jpeg'
    ]
  },
  {
    id: 9,
    name: 'Nandankanan Zoological Park',
    type: 'Government Infrastructure',
    category: 'Government',
    year: '2023',
    location: 'Bhubaneswar',
    scope: 'Wall Cladding & Metal Ceiling',
    area: 'Large-scale',
    image: '/assets/images/WhatsApp Image 2026-05-11 at 10.01.22 PM.jpeg',
    alt: 'Nandankanan Zoological Park Bhubaneswar — wall cladding and metal ceiling.',
    description: 'Specialized wall cladding and ceiling execution for public infrastructure spaces designed to ensure durability and modern visual appeal.',
    client: 'Forest & Environment Department, Govt of Odisha',
    architect: 'State Bureau of Architecture',
    duration: '9 Months',
    challenges: [
      'Executing construction activities within an eco-sensitive zoological reserve with strict noise limits.',
      'Delivering exterior cladding highly resistant to biological growth, moss, and extreme humidity.',
      'Creating seamless organic curved wall claddings to match the natural landscape design.'
    ],
    solutions: [
      'Mandated the use of low-decibel electric installation tools and restricted heavy machinery timing.',
      'Specified anti-microbial exterior-grade solid aluminium cladding panels with self-cleaning finishes.',
      'Roll-curved structural framing runners on CNC benders to achieve perfect architectural sweeps.'
    ],
    gallery: [
      '/assets/images/WhatsApp Image 2026-05-11 at 10.01.22 PM.jpeg',
      '/assets/images/WhatsApp Image 2026-05-11 at 10.01.19 PM.jpeg',
      '/assets/images/WhatsApp Image 2026-05-11 at 10.01.13 PM.jpeg'
    ]
  },
  {
    id: 10,
    name: 'Odisha Mining Corporation',
    type: 'Corporate Office',
    category: 'Commercial',
    year: '2022',
    location: 'Odisha',
    scope: 'Office & Interior Work',
    area: 'Corporate scale',
    image: '/assets/images/WhatsApp Image 2026-05-11 at 10.01.17 PM.jpeg',
    alt: 'Odisha Mining Corporation — premium office interior execution.',
    description: 'Premium office and interior infrastructure execution focused on functional corporate environments and refined interior finishing.',
    client: 'Odisha Mining Corporation Ltd (OMC)',
    architect: 'Kothari Associates',
    duration: '12 Months',
    challenges: [
      'Delivering executive boardroom acoustic ceilings and specialized timber-finish wall panelling.',
      'Integrating state-of-the-art AV (Audio-Visual) conferencing equipment seamlessly into walls and ceilings.',
      'Meeting aggressive corporate occupation deadlines with multi-agency site coordination.'
    ],
    solutions: [
      'Engineered micro-perforated composite acoustic panelling with an authentic natural walnut veneer finish.',
      'Built motorized concealed ceiling drop-down housings for projectors and teleconferencing monitors.',
      'Implemented daily micro-scheduling and dedicated site management teams to ensure timely completion.'
    ],
    gallery: [
      '/assets/images/WhatsApp Image 2026-05-11 at 10.01.17 PM.jpeg',
      '/assets/images/WhatsApp Image 2026-05-11 at 10.01.16 PM.jpeg',
      '/assets/images/coconut peninsula resort.jpg'
    ]
  },
  {
    id: 11,
    name: 'Mission Shakti Café, Anandvan',
    type: 'Public Hospitality',
    category: 'Commercial',
    year: '2023',
    location: 'Odisha',
    scope: 'Interior & Exterior Work',
    area: 'Full execution',
    image: '/assets/images/WhatsApp Image 2026-05-11 at 10.01.16 PM.jpeg',
    alt: 'Mission Shakti Café Anandvan — complete interior and exterior execution.',
    description: 'Complete interior and exterior execution for a public hospitality initiative, blending functionality with welcoming architectural aesthetics.',
    client: 'Department of Mission Shakti, Govt of Odisha',
    architect: 'Bhubaneswar Development Authority (BDA) Design Cell',
    duration: '5 Months',
    challenges: [
      'Executing a highly aesthetic public café pavilion within an accelerated 5-month target.',
      'Ensuring high-durability interior finishes capable of handling intense daily public footfall.',
      'Integrating sustainable, locally sourced material themes with modern execution standards.'
    ],
    solutions: [
      'Utilized modular prefabricated steel framing and rapid lay-in ceiling systems to compress timelines.',
      'Installed heavy-duty commercial grade vitrified flooring and scrub-resistant wall cladding.',
      'Incorporated biophilic design elements with wood-look aluminium baffle ceilings.'
    ],
    gallery: [
      '/assets/images/WhatsApp Image 2026-05-11 at 10.01.16 PM.jpeg',
      '/assets/images/WhatsApp Image 2026-05-11 at 10.01.20 PM.jpeg',
      '/assets/images/WhatsApp Image 2026-05-11 at 10.01.22 PM.jpeg'
    ]
  },
  {
    id: 12,
    name: 'OPTCL / Tata Power / Power Grid',
    type: 'Power Sector',
    category: 'Government',
    year: '2021',
    location: 'Pan-India',
    scope: 'Civil Construction Works',
    area: 'Multiple sites',
    image: '/assets/images/WhatsApp Image 2026-05-11 at 10.01.22 PM.jpeg',
    alt: 'Civil infrastructure — OPTCL, Tata Power, Power Grid.',
    description: 'Executed civil infrastructure projects for major power and utility organizations with focus on reliability, structural quality, and execution efficiency.',
    client: 'OPTCL / Tata Power / PGCIL',
    architect: 'Central Power Engineering Utility',
    duration: '24 Months (Multi-stage)',
    challenges: [
      'Constructing heavy civil foundations and control room structures in remote, difficult-to-access terrain.',
      'Strict compliance with high-voltage electrical clearance safety regulations during construction.',
      'Ensuring absolute structural stability of control buildings housing critical grid infrastructure.'
    ],
    solutions: [
      'Established mobile on-site concrete batching plants to ensure continuous high-grade mix pouring.',
      'Mandated specialized high-voltage safety training and protective grounding protocols for all civil crews.',
      'Utilized high-strength reinforced concrete framing with specialized damp-proofing and seismic design.'
    ],
    gallery: [
      '/assets/images/WhatsApp Image 2026-05-11 at 10.01.22 PM.jpeg',
      '/assets/images/WhatsApp Image 2026-05-11 at 10.01.19 PM.jpeg',
      '/assets/images/WhatsApp Image 2026-05-11 at 10.01.13 PM.jpeg'
    ]
  }
];
