#!/bin/bash

echo "🚀 Setting up your Single-Page Portfolio..."
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Create output directory
mkdir -p /mnt/user-data/outputs

# Check if resume exists
if [ ! -f "public/aun.pdf" ]; then
    echo "⚠️  Warning: Resume PDF not found at public/aun.pdf"
    echo "   Please add your resume PDF to the public folder with the name 'aun.pdf'"
else
    echo "✅ Resume PDF found!"
fi

# Build the project
echo ""
echo "🔨 Building the project..."
npm run build

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Build successful!"
    echo ""
    echo "🎉 Setup complete! Your single-page portfolio is ready."
    echo ""
    echo "Next steps:"
    echo "1. Add your resume PDF to public/aun.pdf (if not already done)"
    echo "2. Update personal information in pages/index.jsx"
    echo "3. Update SEO meta tags and canonical URL"
    echo "4. Test locally: npm run dev"
    echo "5. Deploy: npm run build && npm start"
    echo ""
    echo "📖 For detailed instructions, see IMPLEMENTATION_GUIDE.md"
else
    echo ""
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi
