import { useState, useEffect, useMemo } from 'react';
import type { School, ViewMode } from './types/school';
import schoolsData from './data/schools.json';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import FilterSection from './components/FilterSection';
import SchoolList from './components/SchoolList';
import Pagination from './components/Pagination';
import ExportButtons from './components/ExportButtons';
import FavoritesModal from './components/FavoritesModal';
import CompareModal from './components/CompareModal';
import Footer from './components/Footer';
import ToastContainer from './components/ToastContainer';
import { useToast } from './hooks/useToast';
import {
  getFavorites,
  toggleFavorite,
  getCompareList,
  toggleCompare,
  clearCompareList,
  getMaxCompare,
  saveCompareList,
  getDarkMode,
  setDarkMode
} from './utils/storage';
import {
  filterSchools,
  filterSchoolsBySearchOnly,
  getUniqueStates,
  getUniqueCities,
  detectZipCode,
  getStateAndCityFromZip
} from './utils/filters';
import './styles/index.css';

const ITEMS_PER_PAGE = 50;

function App() {
  const [darkMode, setDarkModeState] = useState(getDarkMode());
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [viewMode, setViewMode] = useState<ViewMode>('table');
  const [currentPage, setCurrentPage] = useState(1);
  const [favorites, setFavorites] = useState<School[]>(getFavorites());
  const [compareList, setCompareList] = useState<School[]>(getCompareList());
  const [showFavoritesModal, setShowFavoritesModal] = useState(false);
  const [showCompareModal, setShowCompareModal] = useState(false);
  const [showCompareIntro, setShowCompareIntro] = useState(() => {
    return !localStorage.getItem('hasSeenCompareIntro');
  });
  const [hasShownZipTip, setHasShownZipTip] = useState(() => {
    return localStorage.getItem('hasSeenZipTip') === 'true';
  });

  const toast = useToast();

  const schools = schoolsData as School[];

  // Get unique states and cities (filtered by search results)
  const searchFilteredSchools = useMemo(
    () => filterSchoolsBySearchOnly(schools, searchQuery),
    [schools, searchQuery]
  );

  const states = useMemo(
    () => getUniqueStates(searchFilteredSchools),
    [searchFilteredSchools]
  );

  const cities = useMemo(
    () => getUniqueCities(searchFilteredSchools, selectedState),
    [searchFilteredSchools, selectedState]
  );

  // Filter schools
  const filteredSchools = useMemo(
    () => filterSchools(schools, searchQuery, selectedState, selectedCity),
    [schools, searchQuery, selectedState, selectedCity]
  );

  // Pagination
  const totalPages = Math.ceil(filteredSchools.length / ITEMS_PER_PAGE);
  const paginatedSchools = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredSchools.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredSchools, currentPage]);

  // Dark mode toggle
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  // Auto-populate state and city when zip code is detected
  useEffect(() => {
    if (detectZipCode(searchQuery)) {
      const location = getStateAndCityFromZip(schools, searchQuery.trim());
      if (location) {
        setSelectedState(location.state);
        setSelectedCity(location.city);

        // Show tip only once
        if (!hasShownZipTip) {
          toast.info(`💡 Auto-filled location: ${location.city}, ${location.state}`, 3000);
          setHasShownZipTip(true);
          localStorage.setItem('hasSeenZipTip', 'true');
        }
      }
    }
  }, [searchQuery, schools, hasShownZipTip, toast]);

  const handleToggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkModeState(newMode);
    setDarkMode(newMode);
  };

  const handleToggleFavorite = (school: School) => {
    const newFavorites = toggleFavorite(school);
    setFavorites(newFavorites);
  };

  const handleToggleCompare = (school: School) => {
    const result = toggleCompare(school);
    setCompareList(result.compareList);

    if (result.limitReached) {
      toast.warning(`You can only compare up to ${getMaxCompare()} schools at once. Remove a school first to add another.`, 5000);
    } else if (result.added) {
      toast.success(`${school.name} added to comparison`, 2000);
    }
  };

  const handleClearCompare = () => {
    if (window.confirm('Are you sure you want to remove all schools from comparison?')) {
      clearCompareList();
      setCompareList([]);
    }
  };

  const handleRemoveFromCompare = (schoolCode: string) => {
    const updated = compareList.filter(s => s.code !== schoolCode);
    setCompareList(updated);
    saveCompareList(updated);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleStateChange = (state: string) => {
    setSelectedState(state);
    setSelectedCity(''); // Clear city selection when state changes
    setCurrentPage(1);
  };

  const handleCityChange = (city: string) => {
    setSelectedCity(city);
    setCurrentPage(1);
  };

  const handleClearFilters = () => {
    setSelectedState('');
    setSelectedCity('');
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const favoritesSet = useMemo(
    () => new Set(favorites.map(f => f.code)),
    [favorites]
  );

  const compareSet = useMemo(() => new Set(compareList.map(s => s.code)), [compareList]);

  const handleDismissCompareIntro = () => {
    setShowCompareIntro(false);
    localStorage.setItem('hasSeenCompareIntro', 'true');
  };

  return (
    <>
      <a href="#main-content" className="mcf-skip-link">
        Skip to main content
      </a>
      <Header
        darkMode={darkMode}
        onToggleDarkMode={handleToggleDarkMode}
        onShowFavorites={() => setShowFavoritesModal(true)}
        favoritesCount={favorites.length}
        compareCount={compareList.length}
        onShowCompare={() => setShowCompareModal(true)}
      />

      <main id="main-content" className="mcf-main">
        {showCompareIntro && (
          <div className="mcf-intro-card">
            <div className="mcf-intro-card-content">
              <h2 className="mcf-intro-card-title">
                <span className="mcf-intro-card-badge">NEW</span>
                Compare Schools Feature
              </h2>
              <p className="mcf-intro-card-text">
                Select up to 5 schools to view side-by-side. Look for the 📊 icon in the table or cards!
              </p>
            </div>
            <div className="mcf-intro-card-actions">
              <button
                className="mcf-intro-card-button mcf-intro-card-button-primary"
                onClick={handleDismissCompareIntro}
              >
                Got it!
              </button>
            </div>
          </div>
        )}

        <div className="mcf-search-section">
          <SearchBar value={searchQuery} onChange={handleSearchChange} />
          <FilterSection
            states={states}
            cities={cities}
            selectedState={selectedState}
            selectedCity={selectedCity}
            onStateChange={handleStateChange}
            onCityChange={handleCityChange}
            onClearFilters={handleClearFilters}
            statesCount={states.length}
            citiesCount={cities.length}
          />
          <p className="mcf-helper-text">
            💡 Tip: Filters update dynamically based on your search results. Enter a ZIP code to auto-fill location.
          </p>
        </div>

        <div className="mcf-stats">
          <div className="mcf-stats-info">
            <div className="mcf-stat-badge">
              Total Schools: {schools.filter(s => s.code !== 'School Code').length.toLocaleString()}
            </div>
            <div className="mcf-stat-badge">
              Showing: {filteredSchools.length.toLocaleString()}
            </div>
          </div>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <div className="mcf-view-toggle">
              <button
                className={`mcf-btn ${viewMode === 'table' ? 'mcf-btn-primary' : ''}`}
                onClick={() => setViewMode('table')}
              >
                Table View
              </button>
              <button
                className={`mcf-btn ${viewMode === 'card' ? 'mcf-btn-primary' : ''}`}
                onClick={() => setViewMode('card')}
              >
                Card View
              </button>
            </div>
            <ExportButtons schools={filteredSchools} />
          </div>
        </div>

        <SchoolList
          schools={paginatedSchools}
          viewMode={viewMode}
          favorites={favoritesSet}
          compareList={compareSet}
          onToggleFavorite={handleToggleFavorite}
          onToggleCompare={handleToggleCompare}
        />

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </main>

      <Footer />

      {showFavoritesModal && (
        <FavoritesModal
          favorites={favorites}
          compareList={compareSet}
          onClose={() => setShowFavoritesModal(false)}
          onToggleFavorite={handleToggleFavorite}
          onToggleCompare={handleToggleCompare}
        />
      )}

      {showCompareModal && (
        <CompareModal
          compareList={compareList}
          onClose={() => setShowCompareModal(false)}
          onRemove={handleRemoveFromCompare}
          onClearAll={handleClearCompare}
        />
      )}

      <ToastContainer toasts={toast.toasts} onRemove={toast.removeToast} />

      {/* Screen reader live region for announcements */}
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        {filteredSchools.length > 0 && `Showing ${filteredSchools.length} schools`}
      </div>
    </>
  );
}

export default App;
