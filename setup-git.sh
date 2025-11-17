#!/bin/bash

# Salesforce Portfolio - GitHub Repository Setup Script
# This script helps initialize your Git repository and prepare for GitHub upload

echo "🚀 Salesforce Portfolio - GitHub Setup"
echo "======================================"

# Check if we're in the right directory
if [ ! -f "index.html" ]; then
    echo "❌ Error: Please run this script from your portfolio project directory"
    echo "   Expected files: index.html, styles.css, script.js"
    exit 1
fi

echo "✅ Found portfolio files in current directory"

# Initialize Git repository if not already initialized
if [ ! -d ".git" ]; then
    echo "📦 Initializing Git repository..."
    git init
    echo "✅ Git repository initialized"
else
    echo "✅ Git repository already exists"
fi

# Create .gitignore file
echo "📝 Creating .gitignore file..."
cat > .gitignore << 'EOF'
# macOS
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes
ehthumbs.db
Thumbs.db

# Editor files
.vscode/
.idea/
*.swp
*.swo
*~

# Logs
*.log

# Runtime data
pids
*.pid
*.seed

# Temporary files
*.tmp
*.temp

# Backup files
*.bak
*.backup
EOF

# Check Git configuration
echo "🔧 Checking Git configuration..."
if ! git config --get user.name > /dev/null; then
    echo "⚠️  Git user name not set. Please configure:"
    echo "   git config --global user.name 'Your Name'"
fi

if ! git config --get user.email > /dev/null; then
    echo "⚠️  Git email not set. Please configure:"
    echo "   git config --global user.email 'your.email@example.com'"
fi

# Add all files to Git
echo "📁 Adding files to Git..."
git add .

# Check if there are changes to commit
if git diff --staged --quiet; then
    echo "ℹ️  No changes to commit"
else
    echo "💾 Creating initial commit..."
    git commit -m "Initial commit: Salesforce Developer Portfolio

- Professional portfolio showcasing 8+ years Salesforce experience
- Lightning Design System inspired styling
- Responsive design with modern animations
- Includes resume, project showcase, and contact form
- Built with HTML5, CSS3, and vanilla JavaScript"
    echo "✅ Initial commit created"
fi

echo ""
echo "🎉 Git repository setup complete!"
echo ""
echo "📋 Next Steps:"
echo "1. Create a new repository on GitHub:"
echo "   - Go to https://github.com/new"
echo "   - Repository name: 'salesforce-portfolio' or 'ujwala-portfolio'"
echo "   - Make it Public"
echo "   - Don't initialize with README (you already have one)"
echo ""
echo "2. Connect your local repository to GitHub:"
echo "   git remote add origin https://github.com/yourusername/your-repo-name.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "3. Enable GitHub Pages:"
echo "   - Go to repository Settings > Pages"
echo "   - Source: Deploy from a branch"
echo "   - Branch: main"
echo "   - Save"
echo ""
echo "4. Your portfolio will be live at:"
echo "   https://yourusername.github.io/your-repo-name/"
echo ""
echo "📖 For detailed instructions, see GITHUB_DEPLOYMENT.md"