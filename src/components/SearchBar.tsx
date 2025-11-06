import React, { useCallback } from 'react';
import { debounce } from '../utils/filters';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedChange = useCallback(
    debounce((val: string) => onChange(val), 300),
    [onChange]
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedChange(e.target.value);
  };

  return (
    <div className="mcf-search-wrapper">
      <svg
        className="mcf-search-icon"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="11" cy="11" r="8"></circle>
        <path d="m21 21-4.35-4.35"></path>
      </svg>
      <input
        type="text"
        className="mcf-search-bar"
        placeholder="Search by name, code, city, address, or zip code..."
        defaultValue={value}
        onChange={handleChange}
        aria-label="Search schools"
      />
    </div>
  );
};

export default SearchBar;
