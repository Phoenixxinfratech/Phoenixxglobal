export type NavLink = {
  label: string;
  href: string;
  description?: string;
};

export type NavGroup = {
  label: string;
  href: string;
  columns?: {
    title: string;
    links: NavLink[];
  }[];
  promo?: {
    title: string;
    description: string;
    href: string;
    cta: string;
  };
  links?: NavLink[];
};

export const primaryNav: NavGroup[] = [
  {
    label: "Products",
    href: "/products/",
    columns: [
      {
        title: "Panel cores",
        links: [
          {
            label: "PUF Panels",
            href: "/products/puf-panels/",
            description: "Polyurethane core for cold rooms",
          },
          {
            label: "PIR Panels",
            href: "/products/pir-panels/",
            description: "Higher fire performance than PUF",
          },
          {
            label: "Rockwool Panels",
            href: "/products/rockwool-panels/",
            description: "Mineral wool, fire-rated walls",
          },
        ],
      },
      {
        title: "Profiles & systems",
        links: [
          {
            label: "Roofing Panels",
            href: "/products/roofing-panels/",
            description: "Trapezoidal roof sandwich panels",
          },
          {
            label: "Wall Panels",
            href: "/products/wall-panels/",
            description: "Exterior and partition walls",
          },
          {
            label: "Cold Room Panels",
            href: "/products/cold-room-panels/",
            description: "Cam-lock panels for cold chain",
          },
          {
            label: "Cleanroom Panels",
            href: "/products/cleanroom-panels/",
            description: "Smooth facings for hygiene zones",
          },
          {
            label: "Fire Rated Panels",
            href: "/products/fire-rated-panels/",
            description: "Specified fire resistance periods",
          },
        ],
      },
      {
        title: "Doors & structures",
        links: [
          {
            label: "Industrial Doors",
            href: "/products/industrial-doors/",
            description: "Cold room and cleanroom doors",
          },
          {
            label: "PEB & Prefab",
            href: "/products/peb-prefabricated-buildings/",
            description: "Steel frames with panel cladding",
          },
        ],
      },
      {
        title: "Applications",
        links: [
          {
            label: "Cold storage buildings",
            href: "/solutions/cold-storage/",
            description: "Panel selection by temperature band",
          },
          {
            label: "Warehousing & logistics",
            href: "/solutions/warehousing-logistics/",
            description: "Fast-erect insulated sheds",
          },
          {
            label: "Pharma & cleanroom",
            href: "/solutions/pharmaceutical-cleanroom/",
            description: "Hygiene-grade wall systems",
          },
        ],
      },
    ],
    promo: {
      title: "PUF vs PIR — which core?",
      description:
        "A plain comparison of thermal performance, fire behaviour and cost so you can specify with confidence.",
      href: "/resources/comparisons/puf-vs-pir-panels/",
      cta: "Read the comparison",
    },
  },
  {
    label: "Solutions",
    href: "/solutions/",
    columns: [
      {
        title: "By industry",
        links: [
          {
            label: "Cold Storage",
            href: "/solutions/cold-storage/",
            description: "Freezers, chillers, ante rooms",
          },
          {
            label: "Food Processing",
            href: "/solutions/food-processing/",
            description: "Hygiene walls and cold docks",
          },
          {
            label: "Pharmaceutical & Cleanroom",
            href: "/solutions/pharmaceutical-cleanroom/",
            description: "Controlled environments",
          },
          {
            label: "Warehousing & Logistics",
            href: "/solutions/warehousing-logistics/",
            description: "Insulated industrial sheds",
          },
          {
            label: "Dairy",
            href: "/solutions/dairy/",
            description: "Milk chilling and packing halls",
          },
        ],
      },
      {
        title: "More sectors",
        links: [
          {
            label: "Poultry & Meat",
            href: "/solutions/poultry-meat-processing/",
            description: "Processing and cold holding",
          },
          {
            label: "Hospitals",
            href: "/solutions/hospitals/",
            description: "OT and pharmacy partitions",
          },
          {
            label: "Data Centres",
            href: "/solutions/data-centres/",
            description: "Fire-rated envelope options",
          },
          {
            label: "Manufacturing Plants",
            href: "/solutions/manufacturing-plants/",
            description: "Factory walls and roofs",
          },
        ],
      },
    ],
    promo: {
      title: "Cold storage panel guide",
      description:
        "Thickness, joint type and facing choices for −25 °C rooms — written for project engineers.",
      href: "/solutions/cold-storage/",
      cta: "Open cold storage guide",
    },
  },
  {
    label: "Export",
    href: "/export/",
    columns: [
      {
        title: "Markets",
        links: [
          { label: "Export Home", href: "/export/", description: "How we ship from India" },
          { label: "Africa", href: "/export/africa/", description: "Regional overview" },
          { label: "Kenya", href: "/export/kenya/", description: "Mombasa and inland" },
          { label: "Tanzania", href: "/export/tanzania/", description: "Dar es Salaam corridor" },
          { label: "Ghana", href: "/export/ghana/", description: "Tema port projects" },
          { label: "Uganda", href: "/export/uganda/", description: "Kampala and inland" },
        ],
      },
      {
        title: "More countries",
        links: [
          { label: "Rwanda", href: "/export/rwanda/" },
          { label: "Zambia", href: "/export/zambia/" },
          { label: "Mozambique", href: "/export/mozambique/" },
          { label: "Namibia", href: "/export/namibia/" },
          { label: "Botswana", href: "/export/botswana/" },
          { label: "Angola", href: "/export/angola/" },
        ],
      },
      {
        title: "Process",
        links: [
          {
            label: "Export Process",
            href: "/export/process/",
            description: "Enquiry to vessel booking",
          },
          {
            label: "Documentation",
            href: "/export/documentation/",
            description: "Commercial invoice, packing list, CoO",
          },
          {
            label: "Packaging & Loading",
            href: "/export/packaging-and-container-loading/",
            description: "40-foot HC packing practice",
          },
        ],
      },
    ],
  },
  {
    label: "Resources",
    href: "/resources/",
    links: [
      { label: "Technical Guides", href: "/resources/guides/", description: "Spec and install notes" },
      {
        label: "Comparisons",
        href: "/resources/comparisons/",
        description: "PUF vs PIR and more",
      },
      {
        label: "Panel Selection Tool",
        href: "/resources/panel-selection/",
        description: "Match core and thickness",
      },
      { label: "Datasheets", href: "/resources/datasheets/", description: "PDF downloads" },
      { label: "FAQs", href: "/resources/faqs/", description: "Buyer questions answered" },
      { label: "Glossary", href: "/resources/glossary/", description: "Panel terminology" },
      { label: "Blog", href: "/blog/", description: "Project and export notes" },
    ],
  },
  {
    label: "Company",
    href: "/about/",
    links: [
      { label: "About", href: "/about/" },
      { label: "Manufacturing", href: "/manufacturing/" },
      { label: "Quality & Testing", href: "/quality-and-testing/" },
      { label: "Projects", href: "/projects/" },
      { label: "Careers", href: "/careers/" },
      { label: "Contact", href: "/contact/" },
    ],
  },
];
