# 🚀 GitHub Pages Deployment Guide

Your React portfolio is configured for easy deployment to GitHub Pages!

## 📋 Prerequisites

- GitHub account
- Git installed locally
- Node.js 16+ installed

## 🔧 Setup Instructions

### 1. **Create/Update Your GitHub Repository**

If you haven't already, create a repository named `e-portfolio`:

```bash
cd portfolio-react

# Initialize git (if not already done)
git init

# Add remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/e-portfolio.git

# Set the main branch
git branch -M main
```

### 2. **Configure GitHub Pages Settings**

1. Go to your GitHub repository: `https://github.com/YOUR_USERNAME/e-portfolio`
2. Navigate to **Settings** → **Pages**
3. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
   - This will automatically use the workflow we've created

### 3. **Deploy Your Site**

#### **Option A: Automatic Deployment (Recommended)**

The GitHub Actions workflow will automatically deploy when you push to `main`:

```bash
# Add all files
git add .

# Commit
git commit -m "Initial portfolio deployment"

# Push to GitHub (this triggers automatic deployment)
git push -u origin main
```

The workflow will:
- ✅ Build your React app
- ✅ Generate optimized production files in `dist/`
- ✅ Deploy to GitHub Pages automatically

**Your site will be live at:** `https://YOUR_USERNAME.github.io/e-portfolio/`

#### **Option B: Manual Deployment**

If you prefer manual control:

```bash
npm run build
npm run deploy
```

## ✅ Verify Deployment

1. After pushing, go to your repository on GitHub
2. Click the **Actions** tab
3. You should see a workflow job running
4. Wait for it to complete (green checkmark ✅)
5. Visit `https://YOUR_USERNAME.github.io/e-portfolio/` to see your live site

## 📝 Important Notes

### Base Path
The site is configured to run at `/e-portfolio/` (repository name). This is set in:
- `vite.config.js` → `base: '/e-portfolio/'`

If you rename your repository, update this path accordingly.

### First Deployment
The first deployment may take a few minutes. Subsequent deployments are usually faster.

### Troubleshooting

**Site not loading?**
- Check that the Actions workflow completed successfully
- Verify GitHub Pages is set to "GitHub Actions" as the source
- Clear browser cache and try again

**Images not loading?**
- Make sure image files (AgroFair.png, TetrisAssembly.jpg, etc.) are in the `public/` folder
- Use paths relative to `/e-portfolio/` if needed

**Styles look broken?**
- The base path affects CSS and JS imports
- Vite automatically handles this with the `base` config

## 🔄 Updating Your Site

To make changes and deploy updates:

```bash
# Make your changes
# ...

# Commit and push
git add .
git commit -m "Update portfolio content"
git push
```

The GitHub Actions workflow will automatically rebuild and deploy!

## 📱 Custom Domain (Optional)

If you want to use a custom domain:

1. Update the `cname` setting in `.github/workflows/deploy.yml`:
   ```yaml
   cname: yourdomain.com
   ```

2. Configure your domain's DNS to point to GitHub Pages (see [GitHub docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site))

## 🛠️ Build Settings

Current configuration:
- **Output directory**: `dist/`
- **Base path**: `/e-portfolio/`
- **Node version**: 18 (in GitHub Actions)
- **Build command**: `vite build`

## 📊 Monitoring Deployments

View deployment status and logs:

1. Repository → **Actions** tab
2. Click the latest workflow run
3. Click "Deploy to GitHub Pages" job
4. Check logs for any issues

## 💡 Performance Tips

- Images are optimized by Vite during build
- CSS is minified automatically
- JavaScript is bundled efficiently
- GitHub Pages provides free CDN globally

## ❓ Frequently Asked Questions

**Q: Can I use a different branch?**
A: Yes, update `.github/workflows/deploy.yml` to trigger on a different branch.

**Q: How do I preview before deploying?**
A: Run `npm run preview` locally to test the production build.

**Q: Can I have multiple portfolios?**
A: Yes! Create separate repositories, e.g., `portfolio`, `portfolio-v2`, etc.

---

**Happy deploying! Your portfolio is now live on GitHub Pages! 🎉**
