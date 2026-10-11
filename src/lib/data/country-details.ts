export interface CountryDetail {
  name: string;
  /** Shorter label for small tiles, e.g. "UK". */
  shortName?: string;
  slug: string;
  region: string;
  /** Optional until a photo is supplied; tiles fall back to a navy panel. */
  image?: string;
  blurb: string;
}

// Listed in the client's priority order.
export const countryDetails: CountryDetail[] = [
  {
    name: "Malaysia",
    slug: "malaysia",
    region: "Asia",
    image: "/stock/countries/malaysia.jpg",
    blurb:
      "Affordable tuition and living costs, English-taught programmes, and a growing hub for business and technology in Southeast Asia.",
  },
  {
    name: "United Kingdom",
    shortName: "UK",
    slug: "united-kingdom",
    region: "Europe",
    image: "/stock/countries/united-kingdom.jpg",
    blurb:
      "Historic, globally respected universities with shorter degree lengths and a direct pathway into international careers.",
  },
  {
    name: "Ireland",
    slug: "ireland",
    region: "Europe",
    image: "/stock/countries/ireland.jpg",
    blurb:
      "An English-speaking EU base with a booming tech sector and generous post-study work opportunities.",
  },
  {
    name: "Australia",
    slug: "australia",
    region: "Oceania",
    image: "/stock/countries/australia.jpg",
    blurb:
      "Top-ranked universities, generous post-study work visas, and a relaxed lifestyle with strong graduate employability.",
  },
  {
    name: "New Zealand",
    slug: "new-zealand",
    region: "Oceania",
    image: "/stock/countries/new-zealand.jpg",
    blurb:
      "Small class sizes, welcoming communities, and a straightforward path to post-study work and residency.",
  },
  {
    name: "Singapore",
    slug: "singapore",
    region: "Asia",
    image: "/stock/countries/singapore.jpg",
    blurb:
      "World-class universities, a multicultural gateway to Asia, and strong pathways into finance, tech, and research.",
  },
  {
    name: "China",
    slug: "china",
    region: "Asia",
    image: "/stock/countries/china.jpg",
    blurb:
      "Deep language and cultural immersion, rapidly rising global rankings, and generous scholarships for international students.",
  },
  {
    name: "United States",
    shortName: "USA",
    slug: "united-states",
    region: "North America",
    image: "/stock/countries/united-states.jpg",
    blurb:
      "The world's largest range of programmes and institutions, with unmatched research funding and campus resources.",
  },
  {
    name: "Canada",
    slug: "canada",
    region: "North America",
    image: "/stock/countries/canada.jpg",
    blurb:
      "Welcoming immigration pathways, affordable tuition relative to the US, and strong outcomes in tech, health, and business.",
  },
  {
    name: "Hungary",
    slug: "hungary",
    region: "Europe",
    image: "/stock/countries/hungary.jpg",
    blurb:
      "Affordable, high-quality medical and engineering degrees taught in English, right in the heart of Europe.",
  },
  {
    name: "Germany",
    slug: "germany",
    region: "Europe",
    image: "/stock/countries/germany.jpg",
    blurb:
      "Low or no tuition fees at public universities, strong engineering and research programmes, and a robust job market after graduation.",
  },
  {
    name: "Switzerland",
    slug: "switzerland",
    region: "Europe",
    image: "/stock/countries/switzerland.jpg",
    blurb:
      "World-renowned hospitality and business schools, plus unmatched quality of life and safety.",
  },
  {
    name: "Spain",
    slug: "spain",
    region: "Europe",
    image: "/stock/countries/spain.jpg",
    blurb:
      "Vibrant culture, affordable living, and growing English-taught programmes in business and the arts.",
  },
  {
    name: "Italy",
    slug: "italy",
    region: "Europe",
    blurb:
      "Historic universities, low public tuition fees, and growing English-taught programmes in design, architecture, medicine, and business.",
  },
];
