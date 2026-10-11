import { countryDetails } from "@/lib/data/country-details";

export interface CountryRegion {
  region: string;
  countries: string[];
}

const regionOrder = ["Asia", "Europe", "Oceania", "North America"];

export const destinationRegions: CountryRegion[] = regionOrder.map((region) => ({
  region,
  countries: countryDetails.filter((c) => c.region === region).map((c) => c.name),
}));

// Priority order, as set by the client.
export const allDestinations = countryDetails.map((c) => c.name);
