# Deployment Guide

This guide explains how to deploy the Federal School Directory Search App to GitHub Pages.

## Prerequisites

1. GitHub account
2. Git installed locally
3. Repository created on GitHub
4. Node.js 18+ installed

## Option 1: Automatic Deployment with GitHub Actions (Recommended)

### Step 1: Push Code to GitHub

```bash
# Initialize git (if not already done)
cd webapp
git init

# Add files
git add .
git commit -m "Initial commit: Federal School Directory webapp"

# Add remote repository
git remote add origin https://github.com/ThiinkMG/Federal-School-Directory-Search-App.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** > **Pages**
3. Under **Source**, select **GitHub Actions**
4. The workflow will automatically run and deploy your site

### Step 3: Access Your Site

After deployment completes (2-5 minutes), your site will be available at:
```
https://thiinkmg.github.io/Federal-School-Directory-Search-App/
```

### How It Works

The GitHub Actions workflow (`.github/workflows/deploy.yml`) automatically:
1. Triggers on every push to main/master branch
2. Installs dependencies
3. Builds the production version
4. Deploys to GitHub Pages

## Option 2: Manual Deployment with gh-pages

### Step 1: Install and Build

```bash
cd webapp
npm install
npm run build
```

### Step 2: Deploy

```bash
npm run deploy
```

This command:
1. Builds the production version
2. Pushes the `dist` folder to the `gh-pages` branch
3. GitHub Pages will automatically serve from this branch

### Step 3: Enable GitHub Pages

1. Go to **Settings** > **Pages**
2. Under **Source**, select:
   - **Branch**: `gh-pages`
   - **Folder**: `/ (root)`
3. Click **Save**

## Configuration

### Update Base Path

If deploying to a different repository name, update `vite.config.ts`:

```typescript
export default defineConfig({
  plugins: [react()],
  base: '/YOUR-REPO-NAME/',  // Change this
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
  },
})
```

### Update Homepage

Update `package.json`:

```json
{
  "homepage": "https://YOUR_USERNAME.github.io/YOUR-REPO-NAME/"
}
```

## Troubleshooting

### Issue: 404 on GitHub Pages

**Solution**: Check that:
1. The base path in `vite.config.ts` matches your repository name
2. GitHub Pages is enabled in repository settings
3. The deployment workflow completed successfully

### Issue: Blank Page

**Solution**:
1. Check browser console for errors
2. Verify the base path is correct
3. Check that assets are loading from the correct path

### Issue: Build Fails

**Solution**:
1. Check Node.js version (should be 18+)
2. Delete `node_modules` and reinstall: `npm ci`
3. Check for TypeScript errors: `npm run lint`

### Issue: Large Bundle Size Warning

**Expected**: The school data JSON is 1.7MB, which causes a large bundle size. This is normal for this application.

## Custom Domain

To use a custom domain:

1. Add a `CNAME` file to the `public` folder with your domain name
2. Configure DNS with your domain provider
3. Enable HTTPS in GitHub Pages settings

## Environment Variables

For different environments, you can create:

- `.env.development` - For local development
- `.env.production` - For production builds

Example:
```env
VITE_API_URL=https://api.example.com
```

Access in code:
```typescript
const apiUrl = import.meta.env.VITE_API_URL
```

## Performance Optimization

The build is already optimized, but for further improvements:

1. **Code Splitting**: Currently using pagination (50 items/page)
2. **Lazy Loading**: Components load on-demand
3. **Asset Optimization**: Vite automatically minifies and optimizes

## Monitoring Deployment

### GitHub Actions

View deployment status:
1. Go to **Actions** tab in your repository
2. Click on the latest workflow run
3. Check build and deploy steps

### Deployment URL

After successful deployment, find your URL:
1. Go to **Settings** > **Pages**
2. Your site URL will be shown at the top

## Updating the Deployed Site

### With GitHub Actions (Automatic)

Simply push changes to main/master:
```bash
git add .
git commit -m "Update feature"
git push
```

The site will automatically rebuild and redeploy.

### With gh-pages (Manual)

```bash
npm run build
npm run deploy
```

## Rollback

To rollback to a previous version:

1. Find the commit hash: `git log`
2. Reset to that commit: `git reset --hard COMMIT_HASH`
3. Force push: `git push -f origin main`
4. GitHub Actions will redeploy the previous version

## Security

- No API keys or secrets are exposed (client-side only app)
- All data is static and included in the build
- HTTPS is enforced by GitHub Pages

## Support

For deployment issues:
- Check [GitHub Pages documentation](https://docs.github.com/en/pages)
- Check [Vite deployment guide](https://vitejs.dev/guide/static-deploy.html)
- Create an issue in the repository

---

Last updated: November 2025
