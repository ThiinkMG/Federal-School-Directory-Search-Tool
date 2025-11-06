import React from 'react';

interface HeaderProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
  onShowFavorites: () => void;
  favoritesCount: number;
  compareCount: number;
  onShowCompare: () => void;
}

const Header: React.FC<HeaderProps> = ({
  darkMode,
  onToggleDarkMode,
  onShowFavorites,
  favoritesCount,
  compareCount,
  onShowCompare
}) => {
  return (
    <header className="mcf-header">
      <div className="mcf-header-content">
        <div className="mcf-header-brand">
          <img
            src="https://static.wixstatic.com/media/c24a60_2b6231b666214539ae22ebd2dffe7a09~mv2.png"
            alt="My College Finance Logo"
            className="mcf-logo-header"
          />
          <div>
            <h1 className="mcf-title">Federal School Directory</h1>
            <p className="mcf-subtitle">My College Finance</p>
          </div>
        </div>
        <div className="mcf-controls">
          <button
            className="mcf-btn"
            onClick={onShowFavorites}
            aria-label={`View favorites, ${favoritesCount} schools saved`}
          >
            <span aria-hidden="true">★</span> Favorites ({favoritesCount})
          </button>
          <button
            className="mcf-btn"
            onClick={onShowCompare}
            aria-label={`Compare schools, ${compareCount} schools selected`}
          >
            <span aria-hidden="true">📊</span> Compare ({compareCount})
          </button>
          <button
            className="mcf-btn"
            onClick={onToggleDarkMode}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            aria-pressed={darkMode}
          >
            <span aria-hidden="true">{darkMode ? '☀️' : '🌙'}</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
