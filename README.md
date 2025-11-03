# 🏫 Federal School Directory Search Tool

**An Interactive Learning Tool**

[![Version](https://img.shields.io/badge/version-2.0-blue.svg)](https://github.com/ThiinkMG/Federal-School-Directory-Search-Tool)
[![License](https://img.shields.io/badge/license-All%20Rights%20Reserved-green.svg)](LICENSE)
[![Status](https://img.shields.io/badge/status-production-brightgreen.svg)](https://thiinkmg.github.io/Federal-School-Directory-Search-Tool/)

---

# Federal School Directory Search Tool

A comprehensive, accessible web application for searching and managing federal school codes required for FAFSA and financial aid applications.

## 📋 Overview

The Federal School Directory Search Tool is a powerful, user-friendly application designed to simplify the process of finding federal school codes for the Free Application for Federal Student Aid (FAFSA) and other financial aid forms. With a database of 6,216 schools, this tool provides students, counselors, and parents with an efficient way to search, filter, save, and export school information.

The application features advanced search capabilities, multiple view modes, favorites management, and comprehensive export options. Built with accessibility in mind, it follows WCAG 2.1 AA guidelines and provides a seamless experience across all devices - from smartphones to desktop computers.

Whether you're a student completing your FAFSA, a counselor helping hundreds of students, or a parent assisting your child with college applications, this tool streamlines the school code lookup process and saves valuable time.

### Try it out

[Try Federal School Directory Search Tool](https://thiinkmg.github.io/Federal-School-Directory-Search-Tool/)

---

## ✨ Features

- **Comprehensive School Database**: Access 6,216 federal school codes from across the United States and international institutions
- **Advanced Search**: Real-time search by school name or federal code with 300ms debounced input for optimal performance
- **Smart Filtering**: Filter schools by state and country with instant results
- **Dual View Modes**: Switch between table and card views for your preferred browsing experience
- **Favorites System**: Save frequently accessed schools for quick reference and easy access
- **Locked Schools**: Pin specific schools to keep them visible while searching through results
- **Multiple Export Formats**: Export search results or favorites to PDF, CSV, or Markdown formats
- **Intelligent Pagination**: Navigate large result sets efficiently with smart pagination controls
- **Responsive Design**: Fully optimized for mobile phones, tablets, and desktop computers
- **Dark Mode**: Toggle between light and dark themes with persistent preference storage
- **Quick Copy Functions**: One-click copying of school codes and complete school information
- **Online Search Integration**: Directly search for schools on the web from the application
- **Accessibility Features**: WCAG 2.1 AA compliant with 23+ ARIA attributes and screen reader support
- **Print-Friendly**: Professional print stylesheet for clean, paper-optimized output
- **Loading States**: Visual feedback during search, filter, and export operations

## 🎯 Educational Value

The Federal School Directory Search Tool serves as an essential educational resource for anyone navigating the complex college application and financial aid process. This tool teaches students how to:

- **Efficiently locate federal school codes** required for FAFSA applications
- **Compare institutions** across different states and countries
- **Organize college research** using favorites and locked school features
- **Export and share** school information in various professional formats
- **Navigate large datasets** using advanced search and filtering techniques

The application covers critical topics in the college application journey including understanding federal school identification systems, researching educational institutions, and managing information for multiple schools. By providing instant access to comprehensive school data, it reduces errors in FAFSA completion and ensures students can focus on their applications rather than searching for codes.

## 🚀 Getting Started

### Prerequisites

- Modern web browser (Chrome 90+, Firefox 88+, Safari 14+, or Edge 90+)
- JavaScript enabled
- Internet connection for initial load

### Installation

**Option 1: Online Access (Recommended)**
1. Visit [https://thiinkmg.github.io/Federal-School-Directory-Search-Tool/](https://thiinkmg.github.io/Federal-School-Directory-Search-Tool/)
2. Start using immediately - no installation required

**Option 2: Local Installation**
1. Download or clone the repository
   ```bash
   git clone https://github.com/ThiinkMG/Federal-School-Directory-Search-Tool.git
   ```
2. Navigate to the project directory
   ```bash
   cd Federal-School-Directory-Search-Tool
   ```
3. Open `index.html` in your web browser
   ```bash
   open index.html  # macOS
   start index.html # Windows
   xdg-open index.html # Linux
   ```

### Usage

1. **Search for Schools**
   - Enter a school name or federal code in the search box
   - Search updates automatically after you stop typing (300ms delay)
   - Press Enter or click the Search button

2. **Apply Filters**
   - Select a state from the State filter dropdown
   - Select a country from the Country filter dropdown
   - Filters combine with search for refined results

3. **View Results**
   - Toggle between Table View (📊) and Card View (📇)
   - Table view: Sortable columns with all school information
   - Card view: Visual cards with expandable details

4. **Save Favorites**
   - Click the ⭐ (star) icon next to any school
   - Access all favorites via the "Favorites" button
   - Export favorites separately from search results

5. **Lock Schools**
   - Click the 🔒 (lock) icon to pin a school
   - Locked schools remain visible even when filters change
   - View all locked schools via the "Locked" button

6. **Export Data**
   - Click "📥 Export Results" button
   - Choose from PDF, CSV, or Markdown format
   - Files download automatically with timestamp

7. **Copy Information**
   - 📋 Copy Code: Copies just the federal school code
   - 📄 Copy Info: Copies complete school information
   - Paste into FAFSA or other documents

8. **Search Online**
   - Click 🔍 (search) icon next to any school
   - Opens Google search for the school in new tab

## 🛠️ Technical Details

### Built With

- **HTML5**: Semantic markup for structure and accessibility
- **CSS3**: Modern styling with custom properties, Grid, and Flexbox
  - CSS Clamp() for fluid typography (16px-18px base font)
  - CSS Custom Properties for theming and brand colors
  - Print-specific stylesheet for professional output
- **Vanilla JavaScript**: No frameworks - pure, lightweight JavaScript
  - Debounced search (300ms delay)
  - Dynamic DOM rendering for performance
  - LocalStorage API for data persistence
- **jsPDF Library**: Client-side PDF generation with custom branding
- **ARIA Attributes**: 23+ accessibility labels for screen reader support

### Browser Compatibility

- ✅ **Chrome**: Version 90+ (Recommended)
- ✅ **Firefox**: Version 88+
- ✅ **Safari**: Version 14+
- ✅ **Edge**: Version 90+
- ✅ **Mobile Safari**: iOS 14+
- ✅ **Chrome Mobile**: Android 10+
- ✅ **Samsung Internet**: Latest version

**Note**: JavaScript must be enabled. Internet Explorer is not supported.

## 📱 Responsive Design

The application is fully responsive and optimized for all screen sizes:

- **Desktop (≥1024px)**: Full-featured experience with 3-column search grid, multi-column tables, and side-by-side layouts
- **Tablet (768px-1024px)**: Custom breakpoint with 2-column layouts, optimized card grids, and tablet-friendly navigation
- **Mobile (≤768px)**: Single-column layout, stacked forms, simplified navigation, and touch-optimized 44px minimum touch targets
- **Small Mobile (≤375px)**: Compact header, streamlined footer, and optimized typography for very small screens

### Responsive Breakpoints

```css
/* Extra Small: Very small phones */
@media (max-width: 375px) { }

/* Small: Small phones */
@media (max-width: 576px) { }

/* Medium: Tablets and large phones */
@media (max-width: 768px) {
  /* Header optimizations */
  /* Footer stacked layout */
  /* Single-column forms */
}

/* Large: Tablets */
@media (min-width: 768px) and (max-width: 1024px) {
  /* 2-column search grid */
  /* 2-column card layout */
  /* Optimized spacing */
}

/* Extra Large: Desktop */
@media (min-width: 1024px) {
  /* 3-column search grid */
  /* Multi-column tables */
  /* Maximum layout width */
}
```

### Responsive Features

- **Fluid Typography**: Text scales smoothly from 16px (mobile) to 18px (desktop)
- **Flexible Grids**: CSS Grid and Flexbox adapt to screen size
- **Touch Targets**: Minimum 44x44px for WCAG AA compliance
- **Adaptive Navigation**: Hamburger menu on mobile, full nav on desktop
- **Responsive Tables**: Horizontal scroll on mobile, full display on desktop
- **Dynamic Card Layout**: 1 column (mobile) → 2 columns (tablet) → 3 columns (desktop)

## 🎨 Customization

The application uses CSS custom properties for easy theming and branding consistency:

### MCF Brand Colors

```css
/* Primary Brand Colors */
--mcf-brand-blue: #012699;     /* Primary blue - headers, buttons */
--mcf-brand-green: #26e011;    /* Secondary green - accents */
--mcf-brand-amber: #fdc003;    /* Accent amber - highlights */

/* Semantic Colors */
--mcf-primary: #336bff;        /* Interactive elements */
--mcf-background: #fafafa;     /* Page background */
--mcf-foreground: #09090b;     /* Text color */
--mcf-card: #ffffff;           /* Card backgrounds */
--mcf-border: #e4e4e7;         /* Borders and dividers */
--mcf-muted: #71717a;          /* Secondary text */
```

### Typography Scale

```css
/* Fluid Typography using clamp() */
body { font-size: clamp(16px, 2.5vw, 18px); }
h1 { font-size: clamp(1.5rem, 4vw, 2.5rem); }
h3 { font-size: clamp(1.25rem, 3vw, 1.5rem); }
```

### Touch Targets

All interactive elements meet WCAG AA standards:
- **Minimum size**: 44x44 pixels
- **Padding**: 0.5rem to 0.875rem
- **Visual feedback**: Hover and focus states
- **Keyboard accessible**: Tab navigation support

### Dark Mode

Toggle between light and dark themes:
```javascript
// Theme automatically saves to localStorage
// Persists across sessions
// Smooth transitions between modes
```

## 📊 School Data Structure

The application manages a comprehensive database of 6,216 schools with the following structure:

```javascript
{
  "code": "B00001",           // Federal school code (unique)
  "name": "Harvard University", // Official institution name
  "address": "Massachusetts Hall", // Street address
  "city": "Cambridge",        // City name
  "state": "MA",              // State code (2-letter)
  "zip": "02138",             // ZIP code
  "country": "USA"            // Country (USA or international)
}
```

### Data Features

- **6,216 Total Schools**: Comprehensive US and international institutions
- **Unique Codes**: Each school has a distinct federal identifier
- **Complete Addresses**: Full location information for each institution
- **State Coverage**: All 50 US states plus territories
- **International**: Schools outside the USA marked with country name

### Search Algorithm

```javascript
// Search matches against:
// 1. School code (exact or partial match)
// 2. School name (case-insensitive substring)
// 3. City name (case-insensitive substring)
// 4. Combined with state and country filters

// Example:
filteredSchools = SCHOOLS_DATA.filter(school => {
  const matchesSearch =
    school.code.toLowerCase().includes(searchTerm) ||
    school.name.toLowerCase().includes(searchTerm) ||
    school.city.toLowerCase().includes(searchTerm);

  const matchesState = !stateFilter || school.state === stateFilter;
  const matchesCountry = !countryFilter || school.country === countryFilter;

  return matchesSearch && matchesState && matchesCountry;
});
```

## 📄 Export Features

The application supports multiple export formats for both search results and favorites:

### Export to PDF

**Trigger**: Click "📥 Export Results" → "📄 Export as PDF"

**Content Includes**:
- Document title and generation date
- Total number of schools in export
- Search criteria (if any filters applied)
- Complete school information in formatted list
- Page numbers and professional footer
- MCF branding

**Features**:
- Automatic pagination for large datasets
- Professional formatting with proper spacing
- 60-character text wrapping for long names
- Page break management
- Filename: `federal-school-codes-YYYY-MM-DD.pdf`

**Technical Details**:
```javascript
// Uses jsPDF library
// Font size: 10pt for data, 16pt for title
// Page margins: Standard jsPDF margins
// Colors: MCF brand blue (#012699) for headers
```

### Export to CSV

**Trigger**: Click "📥 Export Results" → "📊 Export as CSV"

**Content Includes**:
- Header row with column names
- All school data in comma-separated format
- Quoted text fields for proper parsing
- Compatible with Excel, Google Sheets, Numbers

**Features**:
- RFC 4180 compliant CSV format
- Automatic quote escaping for names with commas
- UTF-8 encoding for international characters
- Filename: `federal-school-codes-YYYY-MM-DD.csv`

**Column Structure**:
```csv
School Code,School Name,Address,City,State,Zip Code,Country
B00001,"Harvard University","Massachusetts Hall",Cambridge,MA,02138,USA
```

### Export to Markdown

**Trigger**: Click "📥 Export Results" → "📝 Export as Markdown"

**Content Includes**:
- Markdown-formatted document with headers
- Generation date and result count
- Search criteria section (if filters applied)
- School data in Markdown table format
- Footer with tool attribution

**Features**:
- GitHub Flavored Markdown (GFM) compatible
- Pipe-escaped table cells
- Readable plain text format
- Perfect for documentation and sharing
- Filename: `federal-school-codes-YYYY-MM-DD.md`

**Example Output**:
```markdown
# Federal School Code Directory

**Generated:** 1/3/2025
**Total Results:** 50 schools

## Search Criteria
- **State:** MA

## Schools

| Code | School Name | City | State | Zip | Country |
|------|-------------|------|-------|-----|----------|
| B00001 | Harvard University | Cambridge | MA | 02138 | USA |
```

### Export Favorites

All three export formats (PDF, CSV, Markdown) are also available for your saved favorites:
- Click "⭐ Favorites" button to open favorites modal
- Click "📥 Export Favorites" in the modal
- Choose your preferred format
- Favorites export with filenames: `my-favorite-schools-YYYY-MM-DD.[ext]`

## 🎓 Educational Use Cases

Perfect for:

- **FAFSA Applicants**: Quickly find federal school codes required for Free Application for Federal Student Aid forms. Search by school name, save favorites, and copy codes directly into the FAFSA application.

- **High School Counselors**: Efficiently assist multiple students with college research and FAFSA completion. Export lists of schools for different students, maintain favorites for commonly recommended institutions, and provide accurate school codes instantly.

- **College Admissions Officers**: Reference federal school codes for transfer credit evaluations, consortium agreements, and inter-institutional communications. Verify institutional identifiers and maintain lists of partner schools.

- **Education Researchers**: Analyze school distribution across states and countries. Export data for analysis in spreadsheet applications, identify patterns in institutional locations, and compile comprehensive school lists for research projects.

- **Transfer Students**: Compare multiple institutions across different states. Lock schools of interest while exploring options, build a favorites list of target schools, and export comparison data for decision-making.

- **International Students**: Identify US educational institutions for F-1 visa applications and financial aid forms. Filter by state to focus on specific geographic regions, access complete school address information for visa documentation.

- **Parents & Guardians**: Assist children and dependents with college applications and FAFSA completion. Learn the FAFSA school code system, verify institutions appear in federal databases, and help students organize their college lists effectively.

## 🎯 Features Breakdown

### Search & Filter System

**Real-time Search**:
- Searches as you type with 300ms debounce delay
- Matches school codes, names, and city names
- Case-insensitive for user-friendly experience
- Instant visual feedback with result count

**Smart Filters**:
- **State Filter**: All 50 US states plus territories
- **Country Filter**: USA (default) and international schools
- Filters combine with search for precise results
- Reset button clears all filters instantly

### View Modes

**Table View (📊)**:
- Sortable columns for all data fields
- Compact display for viewing many schools
- Horizontal scroll on mobile devices
- Easy scanning of code-name pairs

**Card View (📇)**:
- Visual cards with school details
- Touch-friendly on mobile and tablet
- Expandable sections for addresses
- Better for browsing on smaller screens

### Data Management

**Favorites System (⭐)**:
- Click star icon to save any school
- Access all favorites in dedicated modal
- Export favorites separately from search results
- Persists across browser sessions via localStorage
- Remove favorites by clicking star again

**Locked Schools (🔒)**:
- Pin schools to keep visible during searches
- Locked schools persist through filter changes
- View all locked schools in dedicated modal
- Useful for comparing specific institutions
- Unlocks when clicked again

**History Tracking**:
- Recently viewed schools stored automatically
- Accessible via browser's back button
- Helps retrace research steps
- Privacy-friendly (stored locally only)

### Copy Functions

**Copy School Code (📋)**:
- One-click copy to clipboard
- Perfect for pasting into FAFSA
- Visual checkmark confirmation
- Works on all browsers

**Copy School Info (📄)**:
- Copies complete school information
- Includes code, name, address, city, state, zip
- Formatted for easy pasting
- Ideal for documentation and emails

### Pagination

**Intelligent Navigation**:
- 50 results per page default
- Jump to any page directly
- Previous/Next navigation buttons
- Shows current page and total pages
- Keyboard accessible with proper ARIA labels

## 🔧 Advanced Features

### Debounced Search

**What it does**: Prevents excessive filtering by waiting 300ms after the last keystroke before updating results.

**How it works**:
```javascript
const debouncedFilter = debounce(filterSchools, 300);
searchInput.addEventListener('input', debouncedFilter);
```

**User benefits**:
- Faster, smoother typing experience
- Reduces unnecessary computations
- Better performance with large datasets
- No lag or stuttering while typing

### LocalStorage Persistence

**What it does**: Saves user preferences and data locally in the browser.

**Saved Data**:
- Favorites list (school codes and full info)
- Locked schools (pinned schools list)
- Theme preference (light/dark mode)
- Search history (recently viewed schools)

**Technical Details**:
```javascript
// Storage keys
STORAGE_KEYS = {
  FAVORITES: 'mcf-school-favorites',
  LOCKED: 'mcf-school-locked',
  HISTORY: 'mcf-school-history',
  THEME: 'mcf-theme'
};

// Data persists across:
// - Page refreshes
// - Browser restarts
// - Different browser tabs (same domain)
```

**User benefits**:
- Favorites survive browser restart
- Dark mode preference remembered
- No login required
- Privacy-friendly (data never leaves browser)

### Loading States

**What it does**: Provides visual feedback during asynchronous operations.

**Implemented for**:
- PDF export: "⏳ Generating PDF..."
- CSV export: "⏳ Generating CSV..."
- Markdown export: "⏳ Generating Markdown..."
- Search filtering: Spinner animation

**Features**:
- Button disabled during operation
- Prevents duplicate clicks
- Clear status indication
- Restores original state after completion

### Error Handling

**What it does**: Catches errors and provides user-friendly messages instead of silent failures.

**Coverage**:
```javascript
try {
  // Export or data operation
} catch (error) {
  console.error('Operation failed:', error);
  alert('Failed to complete operation. Please try again.');
} finally {
  // Always restore UI state
}
```

**User benefits**:
- No silent failures
- Clear error messages
- Graceful degradation
- Helpful troubleshooting feedback

## 🔍 Technical Implementation Highlights

### Fluid Typography with CSS Clamp

**Implementation**:
```css
/* Body base font scales from 16px to 18px */
body {
  font-size: clamp(16px, 2.5vw, 18px);
}

/* Headings scale proportionally */
.title-section h1 {
  font-size: clamp(1.5rem, 4vw, 2.5rem); /* 24px to 40px */
}

.title-section p {
  font-size: clamp(1rem, 2vw, 1.125rem); /* 16px to 18px */
}
```

**Benefits**:
- Smooth text scaling across all screen sizes
- No jarring size jumps at breakpoints
- Improved readability on all devices
- Reduces need for multiple media queries
- Better user experience from 320px to 2560px screens

### ARIA Accessibility Attributes

**Implementation**: 23+ ARIA attributes throughout the application:

```html
<!-- Main content regions -->
<main role="main" aria-label="Federal School Directory Search Tool">
<section role="search" aria-label="School search filters">

<!-- Interactive elements -->
<button aria-label="Search schools with current filters">
<button aria-label="Switch to table view" aria-pressed="true">

<!-- Live regions -->
<div role="status" aria-live="polite">
  Showing <span>50</span> of <span>6216</span> schools
</div>

<!-- Table structure -->
<table role="table" aria-label="Federal school directory results">
  <th scope="col">School Code</th>

<!-- Modal dialogs -->
<div role="dialog" aria-modal="true" aria-labelledby="modal-title">
```

**Coverage**:
- All interactive elements labeled
- Table headers properly scoped
- Live regions announce changes
- Modal dialogs identified
- Decorative elements hidden from screen readers

**Current Status**:
- ✅ 23 ARIA attributes implemented
- 🔄 18 additional improvements identified
- 🎯 WCAG 2.1 AA compliance in progress
- 🧪 Screen reader testing pending

### Print Stylesheet Optimization

**Implementation**:
```css
@media print {
  /* Hide interactive elements */
  .search-section,
  .pagination,
  button {
    display: none !important;
  }

  /* Optimize for black & white */
  * {
    color: #000 !important;
    background: #fff !important;
  }

  /* Format table for printing */
  table {
    width: 100%;
    border-collapse: collapse;
  }

  th, td {
    border: 1px solid #000 !important;
    padding: 0.5rem !important;
    font-size: 10pt !important;
  }

  /* Prevent page breaks mid-row */
  tr {
    page-break-inside: avoid;
  }
}
```

**Features**:
- Removes all interactive UI
- Black and white color scheme
- Professional table formatting
- Proper page break management
- Shows link URLs in print
- Company branding preserved

### Dynamic DOM Rendering

**Approach**: Efficient rendering for large datasets (6,216 schools)

```javascript
function renderResults() {
  // Pagination reduces DOM nodes
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const schoolsToRender = filteredSchools.slice(startIndex, endIndex);

  // Template literal for fast string building
  const html = schoolsToRender.map(school => {
    return `<tr>
      <th scope="row">${escapeHtml(school.code)}</th>
      <td>${escapeHtml(school.name)}</td>
      <!-- additional cells -->
    </tr>`;
  }).join('');

  // Single DOM update
  tableBody.innerHTML = html;
}
```

**Performance Benefits**:
- Paginated rendering (50 items max)
- Template literals for speed
- Single DOM update per render
- XSS prevention with escapeHtml()
- Smooth performance even with large datasets

## ♿ Accessibility Features

The Federal School Directory Search Tool is designed with accessibility as a priority, following WCAG 2.1 AA guidelines:

### Screen Reader Support

**Current Implementation**:
- 23 ARIA attributes for element identification
- `role` attributes for semantic meaning
- `aria-label` on all interactive buttons
- `aria-live` regions announce dynamic changes
- `aria-pressed` on toggle buttons
- `scope` attributes on table headers

**Announcements**:
- Search results count updates announced
- Loading states communicated
- Error messages accessible
- Success confirmations read aloud

### Keyboard Navigation

**Full Keyboard Access**:
- Tab through all interactive elements
- Enter to activate buttons and links
- Escape to close modals
- Arrow keys in dropdown menus (in progress)
- Proper tab order throughout application

**Focus Management**:
- Visible focus indicators on all elements
- Focus trapped in modal dialogs (in progress)
- Focus returns to trigger on modal close (in progress)
- No keyboard traps

### Visual Accessibility

**Color Contrast**:
- All text meets WCAG AA contrast ratios
- Primary text: 4.5:1 minimum
- Large text: 3:1 minimum
- Interactive elements clearly distinguishable

**Touch Targets**:
- Minimum 44x44 pixels (WCAG AA compliant)
- Adequate spacing between clickable elements
- Large enough for all users including those with motor disabilities

### Current Status & Roadmap

**Completed** (Session 1):
- ✅ 23 ARIA attributes on static elements
- ✅ Semantic HTML5 structure
- ✅ Keyboard accessible interface
- ✅ 44px minimum touch targets
- ✅ Focus visible indicators
- ✅ Print-friendly output

**In Progress** (18 identified improvements):
- 🔄 Modal focus management and trapping
- 🔄 Dynamic button ARIA labels
- 🔄 Form input associations
- 🔄 State synchronization for toggles
- 🔄 Enhanced pagination context
- 🔄 Loading state announcements

**Testing Pending**:
- NVDA screen reader (Windows)
- JAWS screen reader (Windows)
- VoiceOver (macOS/iOS)
- axe DevTools automated testing
- Manual keyboard-only navigation

**Estimated Time to Full WCAG 2.1 AA**: 8 hours of development work remaining

For detailed accessibility assessment and roadmap, see [session-log.md](session-log.md).

## 🔧 Development

### Local Development

1. **Setup**
   ```bash
   # Clone the repository
   git clone https://github.com/ThiinkMG/Federal-School-Directory-Search-Tool.git

   # Navigate to directory
   cd Federal-School-Directory-Search-Tool

   # Open in browser
   open index.html
   ```

2. **File Structure**
   ```
   federal-school-directory-search-tool/
   ├── index.html           # Main application (1.2MB)
   ├── README.md            # This file
   ├── session-log.md       # Development session tracking (52KB)
   └── rank-list.md         # Task prioritization (11KB)
   ```

3. **Making Changes**
   - Edit `index.html` for all changes (single-file application)
   - CSS is embedded in `<style>` tags
   - JavaScript is embedded in `<script>` tags
   - Refresh browser to see changes

4. **Testing**
   - Test in multiple browsers (Chrome, Firefox, Safari, Edge)
   - Verify responsive design at various breakpoints
   - Check keyboard navigation
   - Validate HTML with W3C validator
   - Run accessibility checks with axe DevTools

### Adding New Schools

To add schools to the database:

1. **Locate the school data array** in `index.html`:
   ```javascript
   const SCHOOLS_DATA = [
     {
       code: 'B00001',
       name: 'Harvard University',
       address: 'Massachusetts Hall',
       city: 'Cambridge',
       state: 'MA',
       zip: '02138',
       country: 'USA'
     },
     // Add new schools here
   ];
   ```

2. **Follow the format**:
   - `code`: Federal school code (unique, alphanumeric)
   - `name`: Official institution name
   - `address`: Street address (optional)
   - `city`: City name
   - `state`: Two-letter state code (US) or province
   - `zip`: ZIP or postal code
   - `country`: 'USA' or country name

3. **Update the total count**:
   ```html
   <span id="total-schools">6,216</span> Schools Available
   ```

### Modifying Export Features

**PDF Export customization**:
```javascript
// Location: exportToPDF() function (line ~1972)
doc.setFontSize(16);
doc.setFont(undefined, 'bold');
doc.text('Federal School Code Directory', 14, 15);

// Customize:
// - Font sizes
// - Colors (using setTextColor)
// - Layout and spacing
// - Page margins
```

**CSV Export customization**:
```javascript
// Location: exportToCSV() function (line ~1920)
const csv = [
  ['School Code', 'School Name', 'Address', ...].join(','),
  // Customize column order and headers
];
```

**Markdown Export customization**:
```javascript
// Location: exportToMarkdown() function (line ~2104)
let markdown = '# Federal School Code Directory\n\n';
// Customize Markdown formatting and structure
```

### Modifying Search Logic

**Search function location**: Line ~1445
```javascript
function filterSchools() {
  const searchTerm = document.getElementById('search-input').value.toLowerCase().trim();

  filteredSchools = SCHOOLS_DATA.filter(school => {
    const matchesSearch =
      school.code.toLowerCase().includes(searchTerm) ||
      school.name.toLowerCase().includes(searchTerm) ||
      school.city.toLowerCase().includes(searchTerm);

    // Add more fields to search:
    // || school.state.toLowerCase().includes(searchTerm)

    return matchesSearch && matchesState && matchesCountry;
  });
}
```

**Customization options**:
- Add more searchable fields (state, ZIP, address)
- Implement fuzzy matching
- Add search term highlighting
- Change case sensitivity
- Modify debounce delay (currently 300ms)

## 🤝 Contributing

We welcome contributions to improve this educational tool!

### How to Contribute

1. **Fork the repository**
   ```bash
   git clone https://github.com/YOUR-USERNAME/Federal-School-Directory-Search-Tool.git
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your improvements**
   - Follow existing code style (2-space indentation)
   - Test all features thoroughly
   - Verify responsive design works
   - Ensure accessibility isn't degraded

4. **Test thoroughly**
   - All browsers (Chrome, Firefox, Safari, Edge)
   - All screen sizes (mobile, tablet, desktop)
   - Keyboard navigation
   - Screen reader compatibility

5. **Submit a pull request**
   - Describe your changes clearly
   - Reference any related issues
   - Include screenshots for UI changes

### Development Guidelines

**Code Style**:
- 2-space indentation
- Single quotes for HTML attributes
- Double quotes for JavaScript strings
- camelCase for JavaScript variables
- kebab-case for CSS classes
- Descriptive function and variable names

**Testing Requirements**:
- Test all new features
- Verify existing features still work
- Check responsive design at all breakpoints
- Validate HTML with W3C validator
- Run accessibility audit with axe DevTools
- Test keyboard navigation
- Verify print stylesheet

**Documentation**:
- Update README.md for new features
- Add inline comments for complex logic
- Document any new dependencies
- Update session-log.md with changes

**Accessibility**:
- Maintain WCAG 2.1 AA compliance
- Add ARIA labels to new interactive elements
- Ensure keyboard accessibility
- Test with screen readers when possible
- Maintain 44px minimum touch targets

## 📞 Support

For questions, bug reports, or feature requests:

### Technical Feedback
[**My College Finance Technical Feedback Form**](https://docs.google.com/forms/d/e/1FAIpQLScyBwnqiz1L3ZOxV3C4f40jsOAW-YCw8xxfoBhPg2mgORshFA/viewform)

### Documentation
- **Session Log**: See [session-log.md](session-log.md) for detailed development history and accessibility roadmap
- **GitHub Issues**: Submit bug reports and feature requests on GitHub

### Known Issues
See the "Known Issues & Resolutions" section below for common problems and solutions.

## 📜 License

© 2025 My College Finance. All rights reserved.

This software is proprietary and confidential. Unauthorized copying, distribution, or use of this software, via any medium, is strictly prohibited.

## 🙏 Acknowledgments

**Created by**: [Thiink Media Graphics](https://www.thiinkmediagraphics.com/)

**In partnership with**: [My College Finance](https://www.mycollegefinance.com/)

**Special Thanks**:
- Federal Student Aid for providing school code data
- Open-source contributors to jsPDF library
- Accessibility testing community

## 🔗 Related Resources

Educational Tools:
- [FAFSA Interactive Research Web Report](https://my-college-finance.github.io/FAFSA-Interactive-Research-Web-Report/)
- [FAFSA Household Support Worksheet](https://thiinkmg.github.io/FAFSA-Household-Support-Worksheet/)
- [FAFSA Troubleshooting Flowchart](https://thiinkmg.github.io/FAFSA-Troubleshooting-Flowchart/)

Official Resources:
- [My College Finance Main Website](https://www.mycollegefinance.com/)
- [FAFSA Official Website](https://studentaid.gov/h/apply-for-aid/fafsa)
- [StudentAid.gov - Make FAFSA Corrections](https://studentaid.gov/apply-for-aid/fafsa/review-and-correct)

Development Resources:
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [jsPDF Documentation](https://github.com/parallax/jsPDF)

## 🐛 Known Issues & Resolutions

### Resolved Issues

- ✅ **Infinite scrolling in iframes**: Fixed with embedded mode detection and max-height constraints
  - **Resolution**: Added CSS and JavaScript to detect iframe context and apply proper height limits
  - **Status**: Fully resolved

- ✅ **Export buttons appeared to hang**: Added loading states with visual feedback
  - **Resolution**: Implemented "⏳ Generating..." indicators and disabled buttons during operations
  - **Status**: Fully resolved

- ✅ **Text too small on mobile**: Implemented fluid typography with CSS clamp()
  - **Resolution**: Base font scales from 16px to 18px responsively
  - **Status**: Fully resolved

- ✅ **Touch targets too small**: Increased all buttons to 44px minimum
  - **Resolution**: Applied WCAG AA compliant sizing with proper padding
  - **Status**: Fully resolved

### Current Limitations

- ⚠️ **Inline onclick handlers**: 20+ handlers in dynamic content need event delegation refactor
  - **Status**: Deferred (2-3 hours estimated)
  - **Impact**: Functional but not ideal for maintainability
  - **Workaround**: Current implementation works correctly

- ⚠️ **Modal focus management incomplete**: Focus trap and return not fully implemented
  - **Status**: In progress (45 minutes estimated)
  - **Impact**: Minor keyboard navigation issue
  - **Workaround**: Users can still close modals with Escape key

- ⚠️ **Screen reader testing pending**: Comprehensive testing with NVDA, JAWS, VoiceOver needed
  - **Status**: Scheduled for next phase
  - **Impact**: Unknown issues may exist
  - **Current**: 23 ARIA attributes implemented

### Browser-Specific Notes

- **Safari iOS**: LocalStorage may clear if device storage is low
  - **Solution**: Favorites and settings automatically restore from data

- **Firefox**: Print preview may take slightly longer due to DOM size
  - **Solution**: Wait 2-3 seconds for print dialog to populate

- **Edge Legacy**: Not supported - use Chromium-based Edge 90+
  - **Solution**: Upgrade to modern Edge browser

- **Internet Explorer**: Not supported
  - **Solution**: Use any modern browser (Chrome, Firefox, Safari, Edge)

### Performance Notes

- **Large result sets**: Pagination keeps DOM size manageable (max 50 items rendered)
- **Search performance**: 300ms debounce prevents lag on slower devices
- **Export generation**: Large exports (1000+ schools) may take 2-3 seconds

### Getting Help

If you encounter issues not listed here:
1. Check browser console for error messages
2. Try clearing browser cache and localStorage
3. Test in a different browser
4. Submit feedback via the [Technical Feedback Form](https://docs.google.com/forms/d/e/1FAIpQLScyBwnqiz1L3ZOxV3C4f40jsOAW-YCw8xxfoBhPg2mgORshFA/viewform)

---

*This tool is designed to assist with FAFSA completion and college research. While we strive for accuracy, users should verify all school codes on the official FAFSA application. For questions about specific schools or FAFSA requirements, consult with a certified financial aid counselor or visit StudentAid.gov.*

**Version**: 2.0 | **Last Updated**: January 3, 2025 | **Status**: Production
