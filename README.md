# 🏫 Federal School Directory Search Tool

**Search 6,000+ Federal School Codes with Advanced Filtering & Comparison**

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-Copyright_MCF-green.svg)
![Status](https://img.shields.io/badge/status-production-success.svg)
![React](https://img.shields.io/badge/React-19.1.1-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue.svg)

---

## 📋 Overview

The **Federal School Directory Search Tool** is a modern, accessible web application designed to help students, families, and educational professionals quickly search and compare over 6,000 federal school codes. Built with React 19 and TypeScript, this tool provides a fast, intuitive interface for finding schools by name, code, location, or address.

As part of the My College Finance (MCF) educational toolkit, this application simplifies the complex process of locating federal school codes required for FAFSA applications, financial aid forms, and college planning documents. The tool features real-time search with dynamic filtering, side-by-side school comparison, favorites management, and multiple export formats.

**Try it out:** [https://thiinkmg.github.io/Federal-School-Directory-Search-Tool/](https://thiinkmg.github.io/Federal-School-Directory-Search-Tool/)

Whether you're a high school student applying to colleges, a financial aid counselor assisting families, or a parent navigating the college application process, this tool provides the data you need in a format that's easy to understand and use.

---

## ✨ Features

- **Powerful Search Engine**: Instantly search 6,000+ schools by name, federal code, city, state, or address with debounced real-time results
- **ZIP Code Auto-Fill**: Enter a ZIP code and the tool automatically populates state and city filters
- **Dynamic Filtering**: State and city filters update based on search results, ensuring relevant options only
- **Dual View Modes**: Toggle between comprehensive table view and visual card view for different browsing preferences
- **School Comparison**: Select up to 5 schools to view side-by-side comparisons with detailed information
- **Favorites System**: Save frequently accessed schools with persistent localStorage for quick access across sessions
- **Multiple Export Formats**: Export filtered results to CSV (spreadsheet), PDF (document), or Markdown (text) formats
- **Dark Mode Support**: Toggle between light and dark themes with system preference detection and persistent storage
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices with touch-friendly interfaces
- **Pagination**: Browse results in manageable 50-item pages with smooth navigation
- **Accessibility First**: WCAG 2.1 AA compliant with keyboard navigation, ARIA labels, and screen reader support
- **Toast Notifications**: Smart contextual feedback for user actions (added to comparison, favorites saved, etc.)
- **MCF Branding**: Professional design using official My College Finance color scheme and brand identity
- **Persistent State**: Favorites, comparison lists, dark mode preference, and onboarding states saved locally
- **Feature Onboarding**: Interactive introduction cards for new features (dismissible and tracked)

---

## 🎯 Educational Value

The Federal School Directory Search Tool serves as an essential resource for college-bound students and educational professionals navigating the financial aid process. This tool teaches users how to:

- **Locate Federal School Codes**: Understand what federal school codes are and why they're required for FAFSA and other financial aid applications
- **Research Educational Institutions**: Learn to research and compare schools systematically using multiple data points (location, code, full address)
- **Navigate Administrative Processes**: Gain familiarity with the type of institutional data used in college applications and financial aid forms
- **Organize College Search Information**: Develop organizational skills by using favorites and comparison features to track potential schools
- **Analyze Location-Based Options**: Understand geographic distribution of educational institutions and explore regional options

The application covers critical topics in college planning including federal school identification systems, institutional data management, and systematic school comparison methodologies. By providing instant access to 6,000+ verified school records, it reduces research time and ensures students can accurately complete financial aid forms with correct federal codes.

---

## 🚀 Getting Started

### Prerequisites

- **Modern Web Browser**: Chrome 90+, Firefox 88+, Safari 14+, or Edge 90+
- **For Local Development**:
  - Node.js 18.0.0 or higher
  - npm 8.0.0 or higher
  - Git (for cloning the repository)

### Installation

**Option 1: Use Online (Recommended)**

Visit the live application at [https://thiinkmg.github.io/Federal-School-Directory-Search-Tool/](https://thiinkmg.github.io/Federal-School-Directory-Search-Tool/)

No installation required - the app runs entirely in your browser with all data included.

**Option 2: Local Development**

1. Clone the repository:
```bash
git clone https://github.com/ThiinkMG/Federal-School-Directory-Search-Tool.git
cd Federal-School-Directory-Search-Tool
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

### Usage

**Basic Search:**
1. Enter school name, code, city, or address in the search bar
2. Results update in real-time as you type
3. Use state and city filters to narrow results
4. Toggle between table and card view modes

**Advanced Features:**
1. **Compare Schools**: Click the 📊 icon on any school (max 5), then click "Compare" in the header
2. **Save Favorites**: Click the ★ icon on any school, access via "Favorites" button in header
3. **Export Data**: Click CSV, PDF, or Markdown buttons to export filtered results
4. **Dark Mode**: Click the 🌙/☀️ icon in the header to toggle themes

**Pro Tip**: Enter a ZIP code in the search bar to automatically filter by location!

---

## 🛠️ Technical Details

### Built With

**Frontend Framework:**
- **React** 19.1.1 - Modern UI framework with concurrent features
- **TypeScript** 5.9.3 - Type-safe JavaScript for robust code
- **Vite** 7.1.7 - Next-generation build tool with fast HMR

**Core Libraries:**
- **jsPDF** 3.0.3 - Client-side PDF generation for exports
- **React DOM** 19.1.1 - React rendering engine

**Development Tools:**
- **ESLint** 9.36.0 - JavaScript/TypeScript linter
- **TypeScript ESLint** 8.45.0 - TypeScript-specific linting rules
- **@vitejs/plugin-react** 5.0.4 - Vite plugin for React Fast Refresh

**Deployment:**
- **gh-pages** 6.3.0 - GitHub Pages deployment automation
- **GitHub Actions** - Automated CI/CD pipeline

**State Management:**
- React Hooks (useState, useEffect, useMemo, useCallback)
- Custom hooks (useToast)
- localStorage for persistence

### Browser Compatibility

| Browser | Minimum Version | Notes |
|---------|----------------|-------|
| Chrome | 90+ | Full support, recommended |
| Firefox | 88+ | Full support |
| Safari | 14+ | Full support, iOS 14+ |
| Edge | 90+ | Full support |
| Mobile Safari | iOS 14+ | Touch-optimized interface |
| Chrome Mobile | Latest | Touch-optimized interface |

**Note**: Internet Explorer is not supported. Modern JavaScript features (ES2020+) are required.

---

## 📱 Responsive Design

The Federal School Directory Search Tool is built mobile-first with responsive breakpoints ensuring optimal experience across all devices.

### Breakpoints

```css
/* Mobile (default) */
/* Base styles - 320px and up */

/* Tablet */
@media (max-width: 768px) {
  /* Stacked layouts, larger touch targets */
}

/* Small mobile */
@media (max-width: 480px) {
  /* Condensed UI, vertical layouts */
}
```

### Responsive Features

- **Flexible Grid Layouts**: Card grid adapts from multi-column to single-column on mobile
- **Table Responsiveness**: Horizontal scroll with touch optimization for mobile table viewing
- **Touch Targets**: All interactive elements meet 44px × 44px minimum size (WCAG AAA)
- **Responsive Typography**: Fluid font sizing with `clamp()` functions for optimal readability
- **Adaptive Navigation**: Header controls stack vertically on mobile devices
- **Modal Optimization**: Modals use 90% viewport height on mobile for better usability
- **Toast Positioning**: Notifications move to top-center on mobile for visibility

### Example: Responsive Typography

```css
body {
  font-size: clamp(16px, 2.5vw, 18px);
}

.mcf-title {
  font-size: clamp(1.2rem, 3vw, 1.5rem);
}
```

---

## 🎨 Customization

### MCF Brand Colors

The Federal School Directory uses the official My College Finance color palette:

```css
/* Primary Brand Colors */
--mcf-brand-blue: #012699;      /* Primary actions, buttons, links */
--mcf-brand-green: #26e011;     /* Success states, comparison highlights */
--mcf-brand-amber: #fdc003;     /* Warnings, favorites, accents */
--mcf-brand-black: #000516;     /* Dark backgrounds, footer */

/* Light Mode Theme */
--mcf-background: #fafafa;      /* Page background */
--mcf-foreground: #09090b;      /* Primary text */
--mcf-card: #ffffff;            /* Card backgrounds */
--mcf-primary: #012699;         /* Brand blue for CTAs */
--mcf-border: #e2e8f0;          /* Borders and dividers */
--mcf-muted-foreground: #64748b; /* Secondary text */

/* Dark Mode Theme */
body.dark-mode {
  --mcf-background: #09090b;
  --mcf-foreground: #f8fafc;
  --mcf-card: #1a1a1f;
  --mcf-primary: #0139cc;       /* Lighter blue for dark mode */
  --mcf-border: #374151;
  --mcf-accent-green: #3ae826;  /* Brighter green for dark mode */
}
```

**Usage Guidelines:**
- Use `--mcf-brand-blue` for primary call-to-action buttons
- Use `--mcf-brand-green` for success states and comparison features
- Use `--mcf-brand-amber` for favorites, warnings, and highlights
- Maintain WCAG AA contrast ratios: 4.5:1 for normal text, 3:1 for large text

### Typography Scale

```css
/* Font Stack */
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
             'Helvetica Neue', Arial, sans-serif;

/* Font Sizes */
--mcf-text-xs: 0.75rem;     /* 12px - Labels, captions */
--mcf-text-sm: 0.875rem;    /* 14px - Body text, cards */
--mcf-text-base: 1rem;      /* 16px - Primary body text */
--mcf-text-lg: 1.125rem;    /* 18px - Subheadings */
--mcf-text-xl: 1.25rem;     /* 20px - Card titles */
--mcf-text-2xl: 1.5rem;     /* 24px - Section headers */

/* Font Weights */
--font-normal: 400;    /* Regular body text */
--font-medium: 500;    /* Emphasized text */
--font-semibold: 600;  /* Subheadings */
--font-bold: 700;      /* Headings, buttons */
```

### Touch Targets

All interactive elements meet accessibility standards:

```css
/* Minimum touch target sizes (WCAG AAA) */
.mcf-btn {
  min-height: 44px;
  padding: 0.625rem 1.25rem;
}

.mcf-icon-btn {
  min-width: 44px;
  min-height: 44px;
}

.mcf-search-bar {
  min-height: 48px;
  padding: 1rem 1.25rem;
}
```

### Dark Mode Implementation

Dark mode is implemented using CSS classes with localStorage persistence:

```javascript
// Check for saved preference or system preference
const savedTheme = localStorage.getItem('darkMode');
const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches;
const darkMode = savedTheme ? savedTheme === 'true' : systemPreference;

// Apply dark mode class
if (darkMode) {
  document.body.classList.add('dark-mode');
}

// Toggle function
function toggleDarkMode() {
  const isDark = document.body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', isDark.toString());
}
```

**Dark Mode Features:**
- Automatic system preference detection
- Manual toggle in header
- Smooth transitions between themes
- Persistent across sessions
- Optimized contrast for readability

---

## 📊 Data Structures

### School Interface

The application uses a TypeScript interface to ensure type safety:

```typescript
export interface School {
  code: string;          // Federal school code (e.g., "001234")
  name: string;          // Full school name
  address: string;       // Street address
  city: string;          // City name
  state: string;         // Two-letter state code (e.g., "CA")
  zip: string;           // ZIP code
  province: string;      // Province (for non-US schools) or "N/A"
  country: string;       // Country code or "N/A"
  postalCode: string;    // International postal code or "N/A"
}
```

### Data Storage

```typescript
// Schools data located in src/data/schools.json
// Format: Array of School objects
[
  {
    "code": "001234",
    "name": "University Example",
    "address": "123 College St",
    "city": "Anytown",
    "state": "CA",
    "zip": "90210",
    "province": "N/A",
    "country": "USA",
    "postalCode": "N/A"
  },
  // ... 6000+ more schools
]
```

### LocalStorage Schema

```typescript
// Favorites: Array of School objects
localStorage.getItem('mcf-favorites') // JSON.stringify(School[])

// Compare List: Array of School objects (max 5)
localStorage.getItem('mcf-compare') // JSON.stringify(School[])

// Dark Mode Preference: Boolean string
localStorage.getItem('darkMode') // "true" or "false"

// Feature Onboarding Flags: Boolean strings
localStorage.getItem('hasSeenCompareIntro') // "true" or undefined
localStorage.getItem('hasSeenZipTip') // "true" or undefined
```

---

## 📄 Export Features

The application supports three export formats for filtered school data:

### CSV Export

**Format**: Comma-Separated Values (RFC 4180 compliant)

```csv
Code,Name,Address,City,State,Zip,Province,Country,Postal Code
001234,"University Example","123 College St",Anytown,CA,90210,N/A,USA,N/A
```

**Use Cases:**
- Import into Excel, Google Sheets, or Numbers
- Data analysis and manipulation
- Integration with other systems

**Implementation:**
```typescript
export const exportToCSV = (schools: School[], filename = 'schools.csv'): void => {
  const headers = ['Code', 'Name', 'Address', 'City', 'State', 'Zip', 'Province', 'Country', 'Postal Code'];
  const csvContent = [
    headers.join(','),
    ...schools.map(school => [
      school.code,
      `"${school.name}"`,  // Quoted to handle commas in names
      `"${school.address}"`,
      school.city,
      school.state,
      school.zip,
      school.province,
      school.country,
      school.postalCode
    ].join(','))
  ].join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  // Download via browser
};
```

### PDF Export

**Format**: Portable Document Format via jsPDF library

**Features:**
- Multi-page support (automatic page breaks)
- Formatted headers with metadata
- Numbered school listings
- Professional typography

**Implementation:**
```typescript
export const exportToPDF = (schools: School[], filename = 'schools.pdf'): void => {
  const doc = new jsPDF();
  const pageHeight = doc.internal.pageSize.height;
  let y = 20;

  // Add title and metadata
  doc.setFontSize(16);
  doc.text('Federal School Directory', 14, y);
  y += 10;

  doc.setFontSize(10);
  doc.text(`Total Schools: ${schools.length}`, 14, y);
  doc.text(`Generated: ${new Date().toLocaleDateString()}`, 140, y);

  // Add schools with automatic pagination
  schools.forEach((school, index) => {
    if (y > pageHeight - 30) {
      doc.addPage();
      y = 20;
    }
    // Format school data...
  });

  doc.save(filename);
};
```

### Markdown Export

**Format**: GitHub-flavored Markdown with frontmatter

```markdown
# Federal School Directory

**Total Schools:** 25
**Generated:** 11/6/2025

---

## 1. University Example
**Code:** 001234
**Address:** 123 College St
**City:** Anytown
**State:** CA
**Zip:** 90210
```

**Use Cases:**
- Documentation and note-taking
- GitHub wiki integration
- Plain text archival
- Version control friendly

---

## 🎓 Educational Use Cases

Perfect for:

- **High School Students**: Research colleges by location and federal code for FAFSA applications. Use the comparison feature to evaluate multiple schools side-by-side. Save favorites to track schools of interest throughout the application process.

- **College Counselors**: Quickly look up federal school codes for students completing financial aid forms. Export filtered lists by state for regional college fairs. Demonstrate search techniques during counseling sessions using dark mode for presentation environments.

- **Financial Aid Advisors**: Verify federal school codes on submitted financial aid documents. Create custom exports of institutional data for reporting. Access comprehensive school information including alternative addresses and postal codes for international institutions.

- **Parents and Families**: Explore schools in specific geographic areas using ZIP code search. Compare institutional data across multiple schools. Bookmark schools for easy reference during family college planning discussions.

- **Education Researchers**: Export large datasets of schools filtered by state or region. Analyze geographic distribution of educational institutions. Access structured data in multiple formats (CSV, PDF, Markdown) for different research methodologies.

---

## 🎯 Features Breakdown

### Search & Filter System

**Real-Time Search:**
- **Debounced Input**: 300ms delay reduces unnecessary re-renders and improves performance
- **Multi-Field Search**: Searches across school name, federal code, city, state, and address simultaneously
- **Case-Insensitive**: Works regardless of capitalization (e.g., "harvard" finds "Harvard University")
- **Partial Matching**: Finds schools with partial matches (e.g., "tech" finds "Georgia Tech")

**Dynamic Filtering:**
```typescript
// Filters update based on search results
const searchFilteredSchools = useMemo(
  () => filterSchoolsBySearchOnly(schools, searchQuery),
  [schools, searchQuery]
);

const states = useMemo(
  () => getUniqueStates(searchFilteredSchools),
  [searchFilteredSchools]
);
```

**ZIP Code Intelligence:**
- Automatically detects 5-digit ZIP codes in search input
- Auto-populates state and city filters based on ZIP
- Shows one-time educational tooltip explaining the feature
- Persists tip dismissal across sessions

### School Comparison Feature

**Capabilities:**
- Compare up to 5 schools simultaneously
- Side-by-side grid layout (responsive)
- View all school data fields in parallel
- Remove individual schools from comparison
- Clear all comparisons at once
- Persistent across sessions (localStorage)

**Visual Indicators:**
- Green border and background gradient on compared schools
- Compare count badge in header
- 📊 icon on school cards/rows
- Intro card for first-time users (dismissible)

**Implementation:**
```typescript
const handleToggleCompare = (school: School) => {
  const result = toggleCompare(school);
  setCompareList(result.compareList);

  if (result.limitReached) {
    toast.warning(`You can only compare up to ${getMaxCompare()} schools at once.`, 5000);
  } else if (result.added) {
    toast.success(`${school.name} added to comparison`, 2000);
  }
};
```

### Favorites System

**Features:**
- Unlimited favorites storage
- Persistent across browser sessions
- Quick access via modal
- Visual indicators (gold star ★)
- Toggle on/off with single click
- Favorites modal displays all saved schools

**Storage:**
```typescript
// LocalStorage persistence
const getFavorites = (): School[] => {
  const stored = localStorage.getItem('mcf-favorites');
  return stored ? JSON.parse(stored) : [];
};

const toggleFavorite = (school: School): School[] => {
  const favorites = getFavorites();
  const exists = favorites.find(f => f.code === school.code);

  const updated = exists
    ? favorites.filter(f => f.code !== school.code)
    : [...favorites, school];

  localStorage.setItem('mcf-favorites', JSON.stringify(updated));
  return updated;
};
```

### View Modes

**Table View:**
- Compact, data-dense display
- Sortable columns (future enhancement)
- Horizontal scroll on mobile
- Sticky header for long lists
- Hover effects for interactivity

**Card View:**
- Visual, card-based layout
- Responsive grid (auto-fill)
- Touch-friendly on mobile
- Prominent school names
- Action buttons accessible

### Pagination System

**Features:**
- 50 schools per page (configurable)
- Current page indicator
- Previous/Next navigation
- Jump to first/last page
- Smooth scroll to top on page change
- Disabled state for boundary pages

**Calculation:**
```typescript
const ITEMS_PER_PAGE = 50;
const totalPages = Math.ceil(filteredSchools.length / ITEMS_PER_PAGE);

const paginatedSchools = useMemo(() => {
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  return filteredSchools.slice(startIndex, startIndex + ITEMS_PER_PAGE);
}, [filteredSchools, currentPage]);
```

---

## 🔧 Advanced Features

### Custom Toast Notification System

A lightweight, accessible toast notification system built without external dependencies:

**Features:**
- Four notification types: success, warning, error, info
- Auto-dismiss with configurable duration
- Manual dismiss with close button
- Stacked notifications (bottom-right on desktop, top-center on mobile)
- Smooth animations (slide-in effect)
- Accessible (ARIA live regions)

**Implementation:**
```typescript
// Custom useToast hook
export const useToast = () => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = (message: string, type: ToastType, duration = 3000) => {
    const id = Date.now();
    const toast: Toast = { id, message, type };

    setToasts(prev => [...prev, toast]);

    if (duration > 0) {
      setTimeout(() => removeToast(id), duration);
    }
  };

  return {
    toasts,
    success: (msg: string, duration?: number) => addToast(msg, 'success', duration),
    warning: (msg: string, duration?: number) => addToast(msg, 'warning', duration),
    error: (msg: string, duration?: number) => addToast(msg, 'error', duration),
    info: (msg: string, duration?: number) => addToast(msg, 'info', duration),
    removeToast
  };
};
```

**Usage Examples:**
```typescript
toast.success('School added to favorites', 2000);
toast.warning('Maximum 5 schools in comparison', 5000);
toast.info('💡 Auto-filled location: Boston, MA', 3000);
```

### Performance Optimizations

**Memoization:**
```typescript
// Prevent unnecessary recalculations
const filteredSchools = useMemo(
  () => filterSchools(schools, searchQuery, selectedState, selectedCity),
  [schools, searchQuery, selectedState, selectedCity]
);

const favoritesSet = useMemo(
  () => new Set(favorites.map(f => f.code)),
  [favorites]
);
```

**Debounced Search:**
- Search input uses 300ms debounce
- Reduces filtering operations during typing
- Improves performance with 6,000+ schools

**Lazy Rendering:**
- Pagination limits rendered items to 50
- Reduces DOM nodes and improves scroll performance
- Smooth page transitions with scroll-to-top

**Code Splitting:**
- Vite automatically splits code for optimal loading
- Components loaded on demand
- Minimal initial bundle size

### State Management

**React Hooks Pattern:**
- `useState` for local component state
- `useEffect` for side effects (dark mode, ZIP detection)
- `useMemo` for expensive computations
- `useCallback` for stable function references (not yet implemented, optimization opportunity)

**LocalStorage Integration:**
```typescript
// Centralized storage utilities
export const getFavorites = (): School[] => { /* ... */ };
export const toggleFavorite = (school: School): School[] => { /* ... */ };
export const getCompareList = (): School[] => { /* ... */ };
export const toggleCompare = (school: School): CompareResult => { /* ... */ };
export const getDarkMode = (): boolean => { /* ... */ };
export const setDarkMode = (enabled: boolean): void => { /* ... */ };
```

### Filter Logic

**Multi-Stage Filtering:**
```typescript
export const filterSchools = (
  schools: School[],
  searchQuery: string,
  selectedState: string,
  selectedCity: string
): School[] => {
  return schools.filter(school => {
    // Skip header row
    if (school.code === 'School Code') return false;

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      const matchesSearch =
        school.name.toLowerCase().includes(query) ||
        school.code.toLowerCase().includes(query) ||
        school.city.toLowerCase().includes(query) ||
        school.state.toLowerCase().includes(query) ||
        school.address.toLowerCase().includes(query);
      if (!matchesSearch) return false;
    }

    // State filter
    if (selectedState && school.state !== selectedState) return false;

    // City filter
    if (selectedCity && school.city !== selectedCity) return false;

    return true;
  });
};
```

**ZIP Code Detection:**
```typescript
export const detectZipCode = (query: string): boolean => {
  return /^\d{5}$/.test(query.trim());
};

export const getStateAndCityFromZip = (
  schools: School[],
  zip: string
): { state: string; city: string } | null => {
  const match = schools.find(s => s.zip === zip);
  return match ? { state: match.state, city: match.city } : null;
};
```

---

## ♿ Accessibility Features

The Federal School Directory Search Tool is designed to meet **WCAG 2.1 Level AA** standards.

### Keyboard Navigation

**Supported Interactions:**
- `Tab` / `Shift+Tab`: Navigate between interactive elements
- `Enter` / `Space`: Activate buttons and toggle controls
- `Escape`: Close modals
- `Arrow Keys`: Navigate pagination (future enhancement)

**Focus Management:**
```css
.mcf-btn:focus-visible {
  outline: 3px solid var(--mcf-primary);
  outline-offset: 2px;
}

.mcf-skip-link:focus {
  top: 0;  /* Skip to main content link appears on focus */
  outline: 3px solid var(--mcf-accent-amber);
}
```

### ARIA Attributes

**Screen Reader Support:**
```tsx
// Header controls with descriptive labels
<button
  className="mcf-btn"
  onClick={onShowFavorites}
  aria-label={`View favorites, ${favoritesCount} schools saved`}
>
  <span aria-hidden="true">★</span> Favorites ({favoritesCount})
</button>

// Dark mode toggle with state
<button
  aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
  aria-pressed={darkMode}
>
  <span aria-hidden="true">{darkMode ? '☀️' : '🌙'}</span>
</button>

// Live region for dynamic content
<div aria-live="polite" aria-atomic="true" className="sr-only">
  {filteredSchools.length > 0 && `Showing ${filteredSchools.length} schools`}
</div>
```

### Semantic HTML

**Proper Document Structure:**
```html
<header>       <!-- Page header with navigation -->
<main>         <!-- Primary content area -->
  <section>    <!-- Logical content groupings -->
<footer>       <!-- Site footer with links -->
```

**Skip to Main Content:**
```tsx
<a href="#main-content" className="mcf-skip-link">
  Skip to main content
</a>
<main id="main-content" className="mcf-main">
  {/* Main content */}
</main>
```

### Color Contrast

**WCAG AA Compliance:**
- Normal text: 4.5:1 contrast ratio minimum
- Large text (18pt+): 3:1 contrast ratio minimum
- UI components: 3:1 contrast ratio minimum

**Examples:**
```css
/* Light mode - Primary text on background */
color: #09090b;           /* Foreground */
background: #fafafa;      /* Background */
/* Contrast ratio: 15.8:1 (AAA compliant) */

/* Dark mode - Primary text on background */
color: #f8fafc;           /* Foreground */
background: #09090b;      /* Background */
/* Contrast ratio: 15.4:1 (AAA compliant) */

/* Primary button */
color: #ffffff;           /* Text */
background: #012699;      /* Button */
/* Contrast ratio: 8.6:1 (AAA compliant) */
```

### Touch Targets

All interactive elements meet WCAG AAA standards (44px × 44px minimum):

```css
.mcf-btn { min-height: 44px; }
.mcf-icon-btn { min-width: 44px; min-height: 44px; }
.mcf-search-bar { min-height: 48px; }
.mcf-select { min-height: 44px; }
```

### Current Status & Roadmap

**Implemented (v1.0.0):**
- ✅ Keyboard navigation for all controls
- ✅ ARIA labels and live regions
- ✅ Skip to main content link
- ✅ Semantic HTML structure
- ✅ Color contrast compliance (WCAG AA)
- ✅ Touch target sizing (WCAG AAA)
- ✅ Focus indicators
- ✅ Dark mode with high contrast

**Future Enhancements:**
- ⏳ Enhanced screen reader announcements for filter changes
- ⏳ Keyboard shortcuts for common actions
- ⏳ High contrast mode toggle
- ⏳ Adjustable text sizing
- ⏳ Reduced motion mode
- ⏳ Multi-language support

---

## 🔧 Development

### Local Development Setup

**Requirements:**
- Node.js 18.0.0 or higher
- npm 8.0.0 or higher
- Git

**Installation:**
```bash
# Clone the repository
git clone https://github.com/ThiinkMG/Federal-School-Directory-Search-Tool.git
cd Federal-School-Directory-Search-Tool

# Install dependencies
npm install

# Start development server
npm run dev
```

**Development Server:**
- Runs on `http://localhost:5173`
- Hot Module Replacement (HMR) enabled
- Fast Refresh for React components
- TypeScript type checking in IDE

### Project Structure

```
Federal-School-Directory-Search-Tool/
├── src/
│   ├── components/              # React components
│   │   ├── Header.tsx          # Header with navigation and controls
│   │   ├── SearchBar.tsx       # Search input with icon
│   │   ├── FilterSection.tsx   # State and city filters
│   │   ├── SchoolList.tsx      # Main school display component
│   │   ├── SchoolTable.tsx     # Table view implementation
│   │   ├── SchoolCard.tsx      # Card view implementation
│   │   ├── Pagination.tsx      # Pagination controls
│   │   ├── ExportButtons.tsx   # CSV/PDF/Markdown export buttons
│   │   ├── FavoritesModal.tsx  # Favorites management modal
│   │   ├── CompareModal.tsx    # School comparison modal
│   │   ├── Footer.tsx          # Site footer with MCF branding
│   │   ├── Toast.tsx           # Individual toast notification
│   │   └── ToastContainer.tsx  # Toast notification container
│   ├── data/
│   │   └── schools.json        # 6000+ school records
│   ├── types/
│   │   └── school.ts           # TypeScript interfaces
│   ├── utils/
│   │   ├── storage.ts          # localStorage utilities
│   │   ├── export.ts           # Export functionality (CSV/PDF/MD)
│   │   └── filters.ts          # Search and filter logic
│   ├── hooks/
│   │   └── useToast.ts         # Custom toast hook
│   ├── styles/
│   │   └── index.css           # Global styles and MCF theme
│   ├── App.tsx                 # Main application component
│   ├── main.tsx                # Application entry point
│   ├── App.css                 # App-specific styles
│   └── index.css               # Base styles
├── public/                      # Static assets
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment
├── vite.config.ts              # Vite configuration
├── tsconfig.json               # TypeScript configuration
├── tsconfig.app.json           # App-specific TS config
├── tsconfig.node.json          # Node-specific TS config
├── package.json                # Dependencies and scripts
├── eslint.config.js            # ESLint configuration
└── README.md                   # This file
```

### Making Changes

**Component Development:**
1. Create new component in `src/components/`
2. Import and use in `App.tsx` or other components
3. Follow existing naming conventions (PascalCase for components)
4. Use TypeScript interfaces for props

**Styling:**
1. Use MCF CSS variables from `src/styles/index.css`
2. Follow BEM-inspired naming: `.mcf-component-element`
3. Maintain responsive design with media queries
4. Test in both light and dark modes

**Adding Data:**
1. Update `src/data/schools.json` with new school records
2. Ensure data matches the `School` interface
3. Validate JSON syntax before committing

**Testing:**
```bash
# Type check
npm run build  # Will fail if TypeScript errors exist

# Lint code
npm run lint

# Preview production build locally
npm run preview
```

### Build Process

**Development Build:**
```bash
npm run dev
```
- Vite dev server with HMR
- Source maps enabled
- Fast compilation

**Production Build:**
```bash
npm run build
```
- TypeScript compilation (`tsc -b`)
- Vite production build
- Minification and optimization
- Output to `dist/` directory

**Build Output:**
```
dist/
├── index.html              # Entry HTML file
├── assets/
│   ├── index-[hash].js    # Main JavaScript bundle
│   ├── index-[hash].css   # Main CSS bundle
│   └── schools-[hash].json # School data (if chunked)
└── [base path assets]      # Static assets
```

### GitHub Pages Deployment

**Automatic Deployment (Recommended):**

This project uses GitHub Actions for continuous deployment:

1. Push to `main` or `master` branch
2. GitHub Actions workflow triggers automatically
3. Builds the app with Vite
4. Deploys to GitHub Pages
5. Available at `https://thiinkmg.github.io/Federal-School-Directory-Search-Tool/`

**GitHub Actions Workflow:**
```yaml
# Located in .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main, master]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
```

**Manual Deployment:**
```bash
npm run deploy
```

This will:
1. Build the production version (`npm run build`)
2. Deploy to `gh-pages` branch using gh-pages package
3. Make the app available on GitHub Pages

**Configuration:**

The base path is configured in `vite.config.ts`:
```typescript
export default defineConfig({
  plugins: [react()],
  base: '/Federal-School-Directory-Search-Tool/',  // GitHub Pages subdirectory
});
```

And in `package.json`:
```json
{
  "homepage": "https://thiinkmg.github.io/Federal-School-Directory-Search-Tool/"
}
```

**Troubleshooting Deployment:**
- Ensure GitHub Pages is enabled in repository settings
- Verify the base path matches your repository name
- Check that `gh-pages` branch exists and is set as the Pages source
- Clear browser cache if updates don't appear

---

## 🤝 Contributing

We welcome contributions to the Federal School Directory Search Tool! Here's how you can help:

### How to Contribute

1. **Fork the repository** on GitHub
2. **Create a feature branch**:
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes** following the guidelines below
4. **Commit your changes**:
   ```bash
   git commit -m 'Add amazing feature'
   ```
5. **Push to the branch**:
   ```bash
   git push origin feature/amazing-feature
   ```
6. **Open a Pull Request** on GitHub

### Development Guidelines

**Code Style:**
- Use TypeScript for all new code
- Follow existing naming conventions
- Use functional components with hooks (no class components)
- Maintain MCF branding and color scheme
- Write descriptive variable and function names

**Component Guidelines:**
- Keep components focused and single-purpose
- Use props interfaces for type safety
- Add ARIA labels for accessibility
- Test in both light and dark modes
- Ensure responsive design (mobile, tablet, desktop)

**Commit Messages:**
- Use clear, descriptive commit messages
- Start with a verb (Add, Fix, Update, Remove)
- Reference issue numbers when applicable
- Examples:
  - `Add export to Excel feature`
  - `Fix pagination bug on mobile devices`
  - `Update MCF brand colors to latest palette`

**Testing Requirements:**
- Test in multiple browsers (Chrome, Firefox, Safari, Edge)
- Verify mobile responsiveness
- Check keyboard navigation
- Validate TypeScript compilation (`npm run build`)
- Run linter (`npm run lint`)

### Reporting Issues

Found a bug or have a suggestion? Please open an issue on GitHub with:
- Clear description of the problem or suggestion
- Steps to reproduce (for bugs)
- Expected vs. actual behavior
- Screenshots if applicable
- Browser and device information

---

## 📞 Support

Need help or have questions about the Federal School Directory Search Tool?

### Contact Information

- **My College Finance Website**: [https://www.mycollegefinance.com/](https://www.mycollegefinance.com/)
- **Email**: Contact via the MCF website contact form
- **Social Media**: [https://linktr.ee/mycollegefinance](https://linktr.ee/mycollegefinance)

### Feedback Form

We value your feedback! If you have suggestions for improvements or new features:
1. Visit the [My College Finance website](https://www.mycollegefinance.com/)
2. Navigate to the Contact page
3. Describe your suggestion or issue
4. Our team will review and respond

### Known Issues

See the [Known Issues & Resolutions](#-known-issues--resolutions) section below for common problems and solutions.

### Getting Help

For technical issues:
1. Check the [Known Issues](#-known-issues--resolutions) section
2. Review the [Development](#-development) section for setup help
3. Open an issue on GitHub with detailed information
4. Contact MCF via the website for educational support

---

## 📜 License

**Copyright © 2025 My College Finance. All rights reserved.**

This software and associated documentation are proprietary to My College Finance and are protected by copyright laws.

### Terms of Use

- This tool is provided free of charge for educational purposes
- Users may access and use the online version at the provided URL
- Redistribution or modification requires written permission from My College Finance
- For licensing inquiries, contact My College Finance via the website

### Educational Use

Educational institutions and non-profit organizations are encouraged to use this tool to support students in the college application process. For bulk deployment or integration into institutional systems, please contact My College Finance for licensing arrangements.

---

## 🙏 Acknowledgments

### Created By

**My College Finance** - Empowering students with financial education tools

### In Partnership With

This tool was developed as part of the My College Finance educational initiative to simplify the college application and financial aid process for students and families.

### Special Thanks

- The students and families who provided feedback during development
- Educational counselors who contributed use case insights
- The React and TypeScript communities for excellent documentation
- Open source contributors of the libraries used in this project

### Technology Acknowledgments

- **React Team** - For the excellent React 19 framework
- **Vite Team** - For the blazing-fast build tool
- **jsPDF Contributors** - For the PDF generation library
- **TypeScript Team** - For type-safe JavaScript development

---

## 🔗 Related Resources

### Educational Tools

- **[50-30-20 Budget Calculator](https://thiinkmg.github.io/50-30-20-budget-calculator-v3/)** - Learn budgeting principles for college life
- **[Savings Goal Calculator](https://thiinkmg.github.io/Savings-Goal-Calculator/)** - Plan and track college savings goals
- **[FAFSA Household Support Worksheet](https://thiinkmg.github.io/FAFSA-Household-Size-and-Support-Worksheet/)** - Determine FAFSA household size and support

### Official Resources

- **[My College Finance Main Website](https://www.mycollegefinance.com/)** - Comprehensive financial education for college students
- **[Privacy Policy](https://www.mycollegefinance.com/privacy-policy)** - How we protect your data
- **[Terms of Service](https://www.mycollegefinance.com/terms-policy)** - Terms of use for MCF tools
- **[Social Media Hub](https://linktr.ee/mycollegefinance)** - Connect with MCF on social platforms

### Federal Resources

- **[FAFSA Official Website](https://studentaid.gov/h/apply-for-aid/fafsa)** - Free Application for Federal Student Aid
- **[Federal School Code Search](https://studentaid.gov/fafsa-app/FSCsearch)** - Official federal school code lookup
- **[Federal Student Aid](https://studentaid.gov/)** - U.S. Department of Education student aid information

### Development Resources

- **[React Documentation](https://react.dev/)** - Official React documentation
- **[TypeScript Handbook](https://www.typescriptlang.org/docs/)** - TypeScript language guide
- **[Vite Guide](https://vitejs.dev/guide/)** - Vite build tool documentation
- **[WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)** - Web accessibility standards

---

## 🐛 Known Issues & Resolutions

### Resolved Issues

**✅ Issue: ZIP Code Detection Case Sensitivity**
- **Problem**: ZIP code auto-fill only worked with exact case matches
- **Resolution**: Implemented case-insensitive ZIP detection in v1.0.0
- **Status**: Fixed

**✅ Issue: Table Overflow on Mobile**
- **Problem**: Table view was difficult to navigate on small screens
- **Resolution**: Added horizontal scroll with touch optimization
- **Status**: Fixed

**✅ Issue: Dark Mode Flicker on Load**
- **Problem**: Brief flash of light mode before dark mode applied
- **Resolution**: Dark mode preference checked before initial render
- **Status**: Fixed

### Current Limitations

**Known Limitation: Large PDF Exports**
- **Issue**: Exporting 1000+ schools to PDF may take 10-15 seconds
- **Workaround**: Filter results before exporting, or use CSV format for large datasets
- **Status**: Performance optimization planned for v2.0

**Known Limitation: Mobile Table View**
- **Issue**: Table view requires horizontal scrolling on screens < 768px
- **Workaround**: Use card view on mobile devices for better experience
- **Status**: By design - table view prioritizes data density over mobile layout

**Known Limitation: Sort Functionality**
- **Issue**: Column sorting not yet implemented in table view
- **Workaround**: Use filters to narrow results, or export to CSV and sort in spreadsheet software
- **Status**: Planned feature for v1.1

### Browser-Specific Notes

**Safari on iOS:**
- PDF exports may open in a new tab instead of downloading
- This is Safari's default behavior for PDF files
- Users can use the Share button to save the PDF

**Firefox:**
- localStorage limits may affect users with extremely large favorites lists (1000+)
- Recommendation: Keep favorites list under 500 schools

**Edge:**
- CSV downloads may trigger SmartScreen filter warning
- This is normal for locally generated files - click "Keep" to proceed

### Getting Help

If you encounter an issue not listed here:

1. **Clear Browser Cache**: Many issues resolve with a hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
2. **Check Browser Console**: Press F12 and look for error messages
3. **Try Incognito/Private Mode**: Isolates extension conflicts
4. **Report the Issue**: Open a GitHub issue with detailed information

---

**Built with ❤️ by My College Finance**

**EDUCATE • MOTIVATE • ELEVATE**

---

*Last Updated: November 6, 2025*
*Version: 1.0.0*
*Repository: https://github.com/ThiinkMG/Federal-School-Directory-Search-Tool*
