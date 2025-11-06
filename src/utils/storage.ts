import type { School } from '../types/school';

const FAVORITES_KEY = 'mcf_favorites';
const COMPARE_KEY = 'mcf_compare';
const DARK_MODE_KEY = 'mcf_dark_mode';
const MAX_COMPARE = 5;

export const getFavorites = (): School[] => {
  try {
    const stored = localStorage.getItem(FAVORITES_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

export const saveFavorites = (favorites: School[]): void => {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
};

export const toggleFavorite = (school: School): School[] => {
  const favorites = getFavorites();
  const index = favorites.findIndex(f => f.code === school.code);

  if (index > -1) {
    favorites.splice(index, 1);
  } else {
    favorites.push(school);
  }

  saveFavorites(favorites);
  return favorites;
};

export const isFavorite = (schoolCode: string): boolean => {
  const favorites = getFavorites();
  return favorites.some(f => f.code === schoolCode);
};

export const getCompareList = (): School[] => {
  try {
    const stored = localStorage.getItem(COMPARE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

export const saveCompareList = (compare: School[]): void => {
  localStorage.setItem(COMPARE_KEY, JSON.stringify(compare));
};

export const toggleCompare = (school: School): { compareList: School[]; added: boolean; limitReached: boolean } => {
  const compareList = getCompareList();
  const index = compareList.findIndex(s => s.code === school.code);

  if (index > -1) {
    compareList.splice(index, 1);
    saveCompareList(compareList);
    return { compareList, added: false, limitReached: false };
  } else {
    if (compareList.length >= MAX_COMPARE) {
      return { compareList, added: false, limitReached: true };
    }
    compareList.push(school);
    saveCompareList(compareList);
    return { compareList, added: true, limitReached: false };
  }
};

export const isInCompare = (schoolCode: string): boolean => {
  const compareList = getCompareList();
  return compareList.some(s => s.code === schoolCode);
};

export const clearCompareList = (): void => {
  localStorage.setItem(COMPARE_KEY, JSON.stringify([]));
};

export const getMaxCompare = (): number => {
  return MAX_COMPARE;
};

export const getDarkMode = (): boolean => {
  try {
    const stored = localStorage.getItem(DARK_MODE_KEY);
    return stored === 'true';
  } catch {
    return false;
  }
};

export const setDarkMode = (isDark: boolean): void => {
  localStorage.setItem(DARK_MODE_KEY, isDark.toString());
};
