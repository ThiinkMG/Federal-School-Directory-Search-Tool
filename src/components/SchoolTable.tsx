import React from 'react';
import type { School } from '../types/school';

interface SchoolTableProps {
  schools: School[];
  favorites: Set<string>;
  compareList: Set<string>;
  onToggleFavorite: (school: School) => void;
  onToggleCompare: (school: School) => void;
}

const SchoolTable: React.FC<SchoolTableProps> = ({
  schools,
  favorites,
  compareList,
  onToggleFavorite,
  onToggleCompare
}) => {
  return (
    <div className="mcf-table-container">
      <table className="mcf-table">
        <thead>
          <tr>
            <th scope="col">Actions</th>
            <th scope="col">Code</th>
            <th scope="col">Name</th>
            <th scope="col">Address</th>
            <th scope="col">City</th>
            <th scope="col">State</th>
            <th scope="col">Zip</th>
            <th scope="col">Province</th>
            <th scope="col">Country</th>
          </tr>
        </thead>
        <tbody>
          {schools.map((school) => (
            <tr key={school.code} className={compareList.has(school.code) ? 'in-compare' : ''}>
              <td>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button
                    className={`mcf-icon-btn ${favorites.has(school.code) ? 'active' : ''}`}
                    onClick={() => onToggleFavorite(school)}
                    title={favorites.has(school.code) ? 'Remove from favorites' : 'Add to favorites'}
                    aria-label={favorites.has(school.code) ? `Remove ${school.name} from favorites` : `Add ${school.name} to favorites`}
                  >
                    ★
                  </button>
                  <button
                    className={`mcf-icon-btn ${compareList.has(school.code) ? 'active' : ''}`}
                    onClick={() => onToggleCompare(school)}
                    title={compareList.has(school.code) ? 'Remove from comparison' : 'Add to comparison'}
                    aria-label={compareList.has(school.code) ? `Remove ${school.name} from comparison` : `Add ${school.name} to comparison`}
                  >
                    {compareList.has(school.code) ? '📊' : '📈'}
                  </button>
                  <button
                    className="mcf-icon-btn"
                    onClick={() => {
                      const searchQuery = encodeURIComponent(`${school.name} ${school.city} ${school.state}`);
                      window.open(`https://www.google.com/search?q=${searchQuery}`, '_blank');
                    }}
                    title="Search online"
                    aria-label={`Search for ${school.name} online`}
                  >
                    🔍
                  </button>
                </div>
              </td>
              <td>{school.code}</td>
              <td>{school.name}</td>
              <td>{school.address}</td>
              <td>{school.city}</td>
              <td>{school.state}</td>
              <td>{school.zip}</td>
              <td>{school.province}</td>
              <td>{school.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SchoolTable;
