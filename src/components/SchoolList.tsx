import React from 'react';
import type { School } from '../types/school';
import SchoolCard from './SchoolCard';
import SchoolTable from './SchoolTable';

interface SchoolListProps {
  schools: School[];
  viewMode: 'table' | 'card';
  favorites: Set<string>;
  compareList: Set<string>;
  onToggleFavorite: (school: School) => void;
  onToggleCompare: (school: School) => void;
}

const SchoolList: React.FC<SchoolListProps> = ({
  schools,
  viewMode,
  favorites,
  compareList,
  onToggleFavorite,
  onToggleCompare
}) => {
  if (schools.length === 0) {
    return (
      <div className="mcf-empty">
        <div className="mcf-empty-icon">🔍</div>
        <h3 className="mcf-empty-title">No Schools Found</h3>
        <p className="mcf-empty-text">
          We couldn't find any schools matching your search criteria. Try adjusting your filters or search terms.
        </p>
      </div>
    );
  }

  if (viewMode === 'table') {
    return (
      <SchoolTable
        schools={schools}
        favorites={favorites}
        compareList={compareList}
        onToggleFavorite={onToggleFavorite}
        onToggleCompare={onToggleCompare}
      />
    );
  }

  return (
    <div className="mcf-card-grid">
      {schools.map((school) => (
        <SchoolCard
          key={school.code}
          school={school}
          isFavorite={favorites.has(school.code)}
          isInCompare={compareList.has(school.code)}
          onToggleFavorite={() => onToggleFavorite(school)}
          onToggleCompare={() => onToggleCompare(school)}
        />
      ))}
    </div>
  );
};

export default SchoolList;
