# Quick Start Guide

## Run Locally (Development)

```bash
cd webapp
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

## Build for Production

```bash
npm run build
```

The production files will be in the `dist/` folder.

## Test Production Build Locally

```bash
npm run preview
```

Open http://localhost:4173/Federal-School-Directory-Search-App/ in your browser.

## Deploy to GitHub Pages

### Method 1: Automatic (Recommended)

1. Create a GitHub repository
2. Push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/ThiinkMG/Federal-School-Directory-Search-App.git
   git branch -M main
   git push -u origin main
   ```
3. Enable GitHub Pages:
   - Go to Settings > Pages
   - Select "GitHub Actions" as source
4. Wait 2-5 minutes for automatic deployment

### Method 2: Manual

```bash
npm run deploy
```

Then enable GitHub Pages:
- Go to Settings > Pages
- Select "gh-pages" branch as source

## Your Live URL

After deployment, your site will be available at:
```
https://thiinkmg.github.io/Federal-School-Directory-Search-App/
```

## Need Help?

- See **README.md** for detailed documentation
- See **DEPLOYMENT.md** for troubleshooting
- See **PROJECT_SUMMARY.md** for technical details

## Key Features

- Search 6,216 federal schools
- Filter by state and country
- Table and card views
- Export to CSV, PDF, or Markdown
- Dark mode
- Favorites and locked schools
- Fully responsive

## Project Structure

```
webapp/
├── src/
│   ├── components/    # React components
│   ├── data/          # School data (6,216 schools)
│   ├── types/         # TypeScript types
│   ├── utils/         # Helper functions
│   └── styles/        # CSS styles
├── dist/              # Production build
└── package.json       # Dependencies
```

## Support

For issues or questions, check the documentation files or create a GitHub issue.

---

Happy coding!
