import React from 'react';
import type { School } from '../types/school';
import SchoolCard from './SchoolCard';

interface FavoritesModalProps {
  favorites: School[];
  compareList: Set<string>;
  onClose: () => void;
  onToggleFavorite: (school: School) => void;
  onToggleCompare: (school: School) => void;
}

const FavoritesModal: React.FC<FavoritesModalProps> = ({
  favorites,
  compareList,
  onClose,
  onToggleFavorite,
  onToggleCompare
}) => {
  return (
    <div
      className="mcf-modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="favorites-modal-title"
    >
      <div className="mcf-modal" onClick={(e) => e.stopPropagation()}>
        <div className="mcf-modal-header">
          <h2 id="favorites-modal-title" className="mcf-modal-title">Favorite Schools ({favorites.length})</h2>
          <button
            className="mcf-modal-close"
            onClick={onClose}
            aria-label="Close favorites modal"
          >
            ×
          </button>
        </div>
        <div className="mcf-modal-content">
          {favorites.length === 0 ? (
            <div className="mcf-empty">
              <div className="mcf-empty-icon">★</div>
              <h3 className="mcf-empty-title">No Favorites Yet</h3>
              <p className="mcf-empty-text">
                Click the star icon on any school to add it to your favorites list for quick access later.
              </p>
            </div>
          ) : (
            <div className="mcf-card-grid">
              {favorites.map((school) => (
                <SchoolCard
                  key={school.code}
                  school={school}
                  isFavorite={true}
                  isInCompare={compareList.has(school.code)}
                  onToggleFavorite={() => onToggleFavorite(school)}
                  onToggleCompare={() => onToggleCompare(school)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FavoritesModal;
