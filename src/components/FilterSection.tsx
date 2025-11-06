import React from 'react';

interface FilterSectionProps {
  states: string[];
  cities: string[];
  selectedState: string;
  selectedCity: string;
  onStateChange: (state: string) => void;
  onCityChange: (city: string) => void;
  onClearFilters: () => void;
  statesCount: number;
  citiesCount: number;
}

const FilterSection: React.FC<FilterSectionProps> = ({
  states,
  cities,
  selectedState,
  selectedCity,
  onStateChange,
  onCityChange,
  onClearFilters,
  statesCount,
  citiesCount
}) => {
  return (
    <div className="mcf-filters">
      <div className="mcf-filter-group">
        <label className="mcf-filter-label" htmlFor="state-filter">
          Filter by State
          <span className="mcf-filter-count">({statesCount} available)</span>
        </label>
        <select
          id="state-filter"
          className="mcf-select"
          value={selectedState}
          onChange={(e) => onStateChange(e.target.value)}
        >
          <option value="">All States</option>
          {states.map(state => (
            <option key={state} value={state}>{state}</option>
          ))}
        </select>
      </div>

      <div className="mcf-filter-group">
        <label className="mcf-filter-label" htmlFor="city-filter">
          Filter by City
          {selectedState && <span className="mcf-filter-count">({citiesCount} available)</span>}
        </label>
        <select
          id="city-filter"
          className="mcf-select"
          value={selectedCity}
          onChange={(e) => onCityChange(e.target.value)}
          disabled={!selectedState}
        >
          <option value="">{selectedState ? 'All Cities' : 'Select a state first'}</option>
          {cities.map(city => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>
      </div>

      {(selectedState || selectedCity) && (
        <div className="mcf-filter-group">
          <button
            className="mcf-btn mcf-btn-secondary"
            onClick={onClearFilters}
            aria-label="Clear all filters"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default FilterSection;
