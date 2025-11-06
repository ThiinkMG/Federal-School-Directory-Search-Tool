import React from 'react';
import type { School } from '../types/school';

interface SchoolCardProps {
  school: School;
  isFavorite: boolean;
  isInCompare: boolean;
  onToggleFavorite: () => void;
  onToggleCompare: () => void;
}

const SchoolCard: React.FC<SchoolCardProps> = ({
  school,
  isFavorite,
  isInCompare,
  onToggleFavorite,
  onToggleCompare
}) => {
  return (
    <div className={`mcf-card ${isInCompare ? 'in-compare' : ''}`}>
      <div className="mcf-card-header">
        <div>
          <h3 className="mcf-card-title">{school.name}</h3>
          <p className="mcf-card-code">{school.code}</p>
        </div>
        <div className="mcf-card-actions">
          <button
            className={`mcf-icon-btn ${isFavorite ? 'active' : ''}`}
            onClick={onToggleFavorite}
            title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
            aria-label={isFavorite ? `Remove ${school.name} from favorites` : `Add ${school.name} to favorites`}
          >
            ★
          </button>
          <button
            className={`mcf-icon-btn ${isInCompare ? 'active' : ''}`}
            onClick={onToggleCompare}
            title={isInCompare ? 'Remove from comparison' : 'Add to comparison'}
            aria-label={isInCompare ? `Remove ${school.name} from comparison` : `Add ${school.name} to comparison`}
          >
            {isInCompare ? '📊' : '📈'}
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
      </div>
      <div className="mcf-card-content">
        <div className="mcf-card-row">
          <strong>Address:</strong> {school.address}
        </div>
        <div className="mcf-card-row">
          <strong>City:</strong> {school.city}
        </div>
        <div className="mcf-card-row">
          <strong>State:</strong> {school.state}
        </div>
        <div className="mcf-card-row">
          <strong>Zip:</strong> {school.zip}
        </div>
        {school.province !== 'N/A' && (
          <div className="mcf-card-row">
            <strong>Province:</strong> {school.province}
          </div>
        )}
        {school.country !== 'N/A' && (
          <div className="mcf-card-row">
            <strong>Country:</strong> {school.country}
          </div>
        )}
        {school.postalCode !== 'N/A' && (
          <div className="mcf-card-row">
            <strong>Postal Code:</strong> {school.postalCode}
          </div>
        )}
      </div>
    </div>
  );
};

export default SchoolCard;
