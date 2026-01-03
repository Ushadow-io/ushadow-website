#!/bin/bash
set -e

echo "🔨 Building site..."
npm run build

echo "🚀 Deploying to Cloudflare Pages..."
npx wrangler pages deploy out --project-name=ushadow-website

echo "✅ Deploy complete!"
