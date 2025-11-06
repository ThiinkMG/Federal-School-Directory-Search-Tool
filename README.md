# Federal School Directory Search Tool

A modern React + TypeScript + Vite webapp for searching and managing federal school codes. Built for My College Finance (MCF).

## Features

- **Search & Filter**: Search 6,000+ schools by name, code, city, or address
- **Multiple Views**: Toggle between table and card view modes
- **State & Country Filters**: Filter schools by state or country
- **Favorites System**: Save favorite schools (stored in localStorage)
- **Locked Schools**: Mark schools as locked with visual indicators
- **Export Functionality**: Export data to CSV, PDF, or Markdown
- **Dark Mode**: Toggle between light and dark themes
- **Responsive Design**: Mobile-friendly interface
- **Pagination**: Browse schools 50 at a time
- **MCF Branding**: Uses official My College Finance color scheme

## MCF Color Scheme

- **Primary Blue**: #012699
- **Secondary Green**: #26e011
- **Accent Amber**: #fdc003
- **Brand Black**: #000516

## Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **jsPDF** - PDF export functionality
- **CSS Variables** - Theme management
- **localStorage** - Client-side data persistence

## Project Structure

```
webapp/
├── src/
│   ├── components/         # React components
│   │   ├── Header.tsx
│   │   ├── SearchBar.tsx
│   │   ├── FilterSection.tsx
│   │   ├── SchoolCard.tsx
│   │   ├── SchoolTable.tsx
│   │   ├── SchoolList.tsx
│   │   ├── Pagination.tsx
│   │   ├── ExportButtons.tsx
│   │   └── FavoritesModal.tsx
│   ├── data/              # School data
│   │   └── schools.json
│   ├── types/             # TypeScript interfaces
│   │   └── school.ts
│   ├── utils/             # Utility functions
│   │   ├── storage.ts     # localStorage management
│   │   ├── export.ts      # Export functionality
│   │   └── filters.ts     # Search and filter logic
│   ├── styles/            # CSS styling
│   │   └── index.css
│   ├── App.tsx            # Main app component
│   └── main.tsx           # Entry point
├── .github/
│   └── workflows/
│       └── deploy.yml     # GitHub Actions deployment
├── public/                # Static assets
├── vite.config.ts         # Vite configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies and scripts
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Federal-School-Directory-Search-App
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

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run linter
npm run lint
```

## Building for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

## GitHub Pages Deployment

### Automatic Deployment (Recommended)

This project is configured for automatic deployment to GitHub Pages using GitHub Actions:

1. **Push to main/master branch** - The app automatically builds and deploys
2. **GitHub Actions workflow** - Located in `.github/workflows/deploy.yml`
3. **Live URL** - `https://thiinkmg.github.io/Federal-School-Directory-Search-App/`

### Manual Deployment

If you prefer to deploy manually:

```bash
npm run deploy
```

This will:
1. Build the production version
2. Deploy to the `gh-pages` branch
3. Make the app available on GitHub Pages

### GitHub Pages Setup

To enable GitHub Pages for your repository:

1. Go to your repository on GitHub
2. Click **Settings** > **Pages**
3. Under **Source**, select:
   - **Source**: Deploy from a branch
   - **Branch**: `gh-pages`
   - **Folder**: `/ (root)`
4. Click **Save**
5. Wait a few minutes for deployment

Alternatively, for GitHub Actions deployment:

1. Go to **Settings** > **Pages**
2. Under **Source**, select **GitHub Actions**
3. Push to main/master branch to trigger deployment

## Configuration

### Base Path

The base path is configured in `vite.config.ts`:

```typescript
base: '/Federal-School-Directory-Search-App/'
```

Change this if deploying to a different repository or custom domain.

### Homepage URL

Update the homepage in `package.json`:

```json
"homepage": "https://thiinkmg.github.io/Federal-School-Directory-Search-App/"
```

### School Data

The school data is located in `src/data/schools.json`. To update:

1. Replace the JSON file with new data
2. Ensure the data structure matches the `School` interface in `src/types/school.ts`

## Features in Detail

### Search Functionality
- **Debounced input** - 300ms delay to reduce re-renders
- **Multi-field search** - Searches name, code, city, and address
- **Case-insensitive** - Works with any capitalization

### Favorites System
- **Persistent storage** - Saved to browser localStorage
- **Quick access** - View all favorites in a modal
- **Visual indicators** - Gold star icon for favorited schools

### Locked Schools
- **Visual distinction** - Dashed border and reduced opacity
- **Pattern overlay** - Diagonal stripes in table view
- **Persistent** - Saved to localStorage

### Export Options
- **CSV** - Spreadsheet-compatible format
- **PDF** - Formatted document with metadata
- **Markdown** - Text-based format for documentation

### Dark Mode
- **System preference detection** - Respects OS theme
- **Manual toggle** - Switch between light and dark
- **Persistent** - Saved to localStorage
- **Smooth transitions** - Animated theme changes

### Responsive Design
- **Mobile-first** - Optimized for all screen sizes
- **Flexible layouts** - Grid and table adapt to viewport
- **Touch-friendly** - Large tap targets for mobile
- **Accessible** - Semantic HTML and ARIA labels

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility

- Semantic HTML elements
- ARIA labels for interactive elements
- Keyboard navigation support
- High contrast in dark mode
- Responsive text sizing

## Performance

- **Code splitting** - Lazy loading for optimal bundle size
- **Memoization** - Prevents unnecessary re-renders
- **Virtual scrolling** - Efficient pagination (50 items/page)
- **Optimized builds** - Vite's fast build process
- **Asset optimization** - Minified CSS and JS

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

Copyright My College Finance. All rights reserved.

## Support

For issues or questions:
- Create an issue on GitHub
- Contact: mycollegefinance.com

## Changelog

### Version 1.0.0
- Initial release
- Search and filter functionality
- Favorites and locked schools
- Export to CSV/PDF/Markdown
- Dark mode support
- Responsive design
- GitHub Pages deployment

---

Built with ❤️ by My College Finance
