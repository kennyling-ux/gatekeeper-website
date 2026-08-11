export interface CountryRegion {
  region: string;
  countries: string[];
}

export const destinationRegions: CountryRegion[] = [
  {
    region: "Asia",
    countries: ["Malaysia", "Singapore", "China", "South Korea"],
  },
  {
    region: "Europe",
    countries: [
      "United Kingdom",
      "Ireland",
      "Germany",
      "Hungary",
      "Spain",
      "Switzerland",
    ],
  },
  {
    region: "Oceania",
    countries: ["Australia", "New Zealand"],
  },
  {
    region: "North America",
    countries: ["United States", "Canada"],
  },
];

export const allDestinations = destinationRegions.flatMap((r) => r.countries);
