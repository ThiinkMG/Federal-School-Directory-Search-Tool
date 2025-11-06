export interface School {
  code: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  province: string;
  country: string;
  postalCode: string;
}

export interface FilterState {
  searchQuery: string;
  selectedState: string;
  selectedCountry: string;
}

export type ViewMode = 'table' | 'card';
