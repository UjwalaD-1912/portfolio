#!/bin/sh
# Auto-deploy script for portfolio

echo "🚀 Starting auto-deployment..."

# Add all changes
git add .

# Check if there are changes to commit
if git diff --staged --quiet; then
    echo "📝 No changes to commit"
    exit 0
fi

# Prompt for commit message or use default
if [ -z "$1" ]; then
    COMMIT_MSG="Auto-update portfolio - $(date '+%Y-%m-%d %H:%M:%S')"
else
    COMMIT_MSG="$1"
fi

# Commit changes
git commit -m "$COMMIT_MSG"

# Push to GitHub
echo "📤 Pushing to GitHub..."
git push origin main

if [ $? -eq 0 ]; then
    echo "✅ Successfully deployed! Your changes will be live in 1-2 minutes."
    echo "🌐 Portfolio URL: https://ujwalad-1912.github.io/portfolio/"
else
    echo "❌ Failed to push. Please check your internet connection and GitHub credentials."
fi