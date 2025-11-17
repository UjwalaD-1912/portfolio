# GitHub Portfolio Deployment Guide

## 🚀 Step-by-Step GitHub Pages Deployment

### Step 1: Create GitHub Account (if you don't have one)
1. Go to [github.com](https://github.com)
2. Click "Sign up" if you need to create an account
3. Choose a username (suggestion: `ujwaladindi` or similar)

### Step 2: Create New Repository
1. Click the "+" icon in top right corner
2. Select "New repository"
3. **Repository name**: `ujwala-salesforce-portfolio` (or any name you prefer)
4. **Description**: `Professional Salesforce Developer Portfolio - Showcasing 8+ years of enterprise Salesforce experience`
5. Make sure it's set to **Public**
6. Check "Add a README file"
7. Click "Create repository"

### Step 3: Upload Your Portfolio Files

#### Option A: Using GitHub Web Interface (Easiest)
1. In your new repository, click "uploading an existing file"
2. Drag and drop ALL these files from your project folder:
   - `index.html`
   - `styles.css` 
   - `script.js`
   - `resume.html`
   - `README.md`
   - `DEPLOYMENT_GUIDE.md`
   - `PROFILE_PHOTO_SETUP.md`
   - `images/` folder (with IMG_1935.jpeg)

3. **Commit message**: "Initial portfolio upload - Salesforce Developer Portfolio"
4. Click "Commit changes"

#### Option B: Using Git Commands (Advanced)
```bash
# Navigate to your project folder
cd "/Users/ujwaladindi/Desktop/Ujwala Project"

# Initialize git repository
git init

# Add all files
git add .

# Make initial commit
git commit -m "Initial portfolio upload - Salesforce Developer Portfolio"

# Add GitHub remote (replace with your actual repository URL)
git remote add origin https://github.com/yourusername/ujwala-salesforce-portfolio.git

# Push to GitHub
git push -u origin main
```

### Step 4: Enable GitHub Pages
1. In your GitHub repository, go to **Settings** tab
2. Scroll down to **Pages** section (left sidebar)
3. Under "Source", select **Deploy from a branch**
4. Choose branch: **main**
5. Choose folder: **/ (root)**
6. Click **Save**

### Step 5: Access Your Live Portfolio
After 5-10 minutes, your portfolio will be live at:
```
https://yourusername.github.io/ujwala-salesforce-portfolio/
```

### Step 6: Custom Domain (Optional - Free)
If you want a custom domain like `ujwaladindi.dev`:
1. Buy domain from providers like Namecheap, GoDaddy
2. In GitHub Pages settings, add your custom domain
3. Configure DNS records as instructed

## 📋 Pre-Upload Checklist

### Files to Upload:
- [ ] `index.html` - Main portfolio page
- [ ] `styles.css` - Salesforce-themed styling
- [ ] `script.js` - Interactive features
- [ ] `resume.html` - Professional resume
- [ ] `images/IMG_1935.jpeg` - Your profile photo
- [ ] `README.md` - Project documentation
- [ ] `DEPLOYMENT_GUIDE.md` - Hosting instructions
- [ ] `PROFILE_PHOTO_SETUP.md` - Photo setup guide

### Final Checks:
- [ ] Profile photo displays correctly
- [ ] All navigation links work
- [ ] Resume download functions properly
- [ ] Contact form validates correctly
- [ ] Mobile responsive design works
- [ ] All animations and effects function

## 🎯 Repository Best Practices

### Repository Description:
```
Professional Salesforce Developer Portfolio showcasing 8+ years of enterprise experience across Financial Services, Aviation, and Insurance sectors. Built with modern web technologies and Salesforce Lightning Design System aesthetics.
```

### Topics/Tags to Add:
- `salesforce`
- `portfolio`
- `web-development`
- `lightning-design-system`
- `apex`
- `lightning-web-components`
- `javascript`
- `css3`
- `html5`
- `responsive-design`

### README.md Content:
Your repository should include a professional README describing:
- Portfolio overview
- Technologies used
- Features showcased
- Live demo link
- Contact information

## 🌟 Portfolio URL Examples

Based on common GitHub username patterns:
- `https://ujwaladindi.github.io/salesforce-portfolio/`
- `https://ujwala-dindi.github.io/professional-portfolio/`
- `https://ujwaladndu.github.io/ujwala-portfolio/`

## 📞 Troubleshooting

### If GitHub Pages doesn't work:
1. Check repository is **Public**
2. Ensure `index.html` is in root folder
3. Wait 10-15 minutes for deployment
4. Check GitHub Pages settings are correct
5. Look for any error messages in repository

### If images don't load:
1. Ensure images folder is uploaded
2. Check file paths in HTML are correct
3. Verify image file names match exactly

## 🚀 Next Steps After Deployment

1. **Test Everything**: Visit your live URL and test all features
2. **Share Your Portfolio**: 
   - Add URL to LinkedIn profile
   - Include in email signature
   - Share on professional networks
3. **SEO Optimization**: 
   - Submit to Google Search Console
   - Share on social media for backlinks
4. **Regular Updates**: 
   - Add new projects and certifications
   - Keep experience section current
   - Update skills as you grow

## 💡 Pro Tips

- **Mobile First**: Always test on mobile devices
- **Loading Speed**: Optimize images for faster loading
- **Regular Updates**: Keep portfolio current with latest projects
- **Analytics**: Consider adding Google Analytics to track visitors
- **Backup**: Keep local backups of your portfolio files

Your Salesforce expertise combined with this professional portfolio will create a powerful impression on potential employers and clients!