import type { School } from '../types/school';

export const filterSchools = (
  schools: School[],
  searchQuery: string,
  selectedState: string,
  selectedCity: string
): School[] => {
  return schools.filter(school => {
    // Skip header row
    if (school.code === 'School Code') return false;

    // Search query filter
    const query = searchQuery.toLowerCase();
    const matchesSearch = !query ||
      school.name.toLowerCase().includes(query) ||
      school.code.toLowerCase().includes(query) ||
      school.city.toLowerCase().includes(query) ||
      school.address.toLowerCase().includes(query) ||
      school.zip.toLowerCase().includes(query);

    // State filter
    const matchesState = !selectedState || school.state === selectedState;

    // City filter
    const matchesCity = !selectedCity || school.city === selectedCity;

    return matchesSearch && matchesState && matchesCity;
  });
};

export const filterSchoolsBySearchOnly = (
  schools: School[],
  searchQuery: string
): School[] => {
  return schools.filter(school => {
    // Skip header row
    if (school.code === 'School Code') return false;

    // Search query filter only
    const query = searchQuery.toLowerCase();
    const matchesSearch = !query ||
      school.name.toLowerCase().includes(query) ||
      school.code.toLowerCase().includes(query) ||
      school.city.toLowerCase().includes(query) ||
      school.address.toLowerCase().includes(query) ||
      school.zip.toLowerCase().includes(query) ||
      school.state.toLowerCase().startsWith(query); // Support "M" → Massachusetts

    return matchesSearch;
  });
};

export const getUniqueStates = (schools: School[]): string[] => {
  const states = schools
    .filter(s => s.code !== 'School Code' && s.state && s.state !== 'N/A')
    .map(s => s.state);
  return Array.from(new Set(states)).sort();
};

export const getUniqueCities = (schools: School[], selectedState?: string): string[] => {
  const cities = schools
    .filter(s => {
      if (s.code === 'School Code' || !s.city || s.city === 'N/A') return false;
      // If a state is selected, only show cities from that state
      if (selectedState && s.state !== selectedState) return false;
      return true;
    })
    .map(s => s.city);
  return Array.from(new Set(cities)).sort();
};

export const detectZipCode = (query: string): boolean => {
  // Detect if query is a zip code (3-5 digits, all numeric)
  const trimmed = query.trim();
  return /^\d{3,5}$/.test(trimmed);
};

export const getStateAndCityFromZip = (
  schools: School[],
  zipCode: string
): { state: string; city: string } | null => {
  // Find first school with matching zip code
  const school = schools.find(s =>
    s.code !== 'School Code' && s.zip === zipCode
  );

  if (school) {
    return {
      state: school.state,
      city: school.city
    };
  }

  return null;
};

export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: ReturnType<typeof setTimeout>;

  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};
