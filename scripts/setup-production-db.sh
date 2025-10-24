#!/bin/bash
# Production Database Setup Script
# Run this after setting up Neon database through Vercel integration

echo "🗄️  Setting up production database schema..."

# Check if we have the production DATABASE_URL
if [ -z "$DATABASE_URL" ]; then
    echo "❌ DATABASE_URL not found. Make sure you've set up the Neon integration in Vercel."
    echo "You can get the URL from Vercel dashboard > Your Project > Settings > Environment Variables"
    exit 1
fi

# Generate Prisma client
echo "📦 Generating Prisma client..."
npx prisma generate

# Run database migrations
echo "🚀 Running database migrations..."
npx prisma migrate deploy

# Optional: Seed the database with sample data
echo "🌱 Seeding database (optional)..."
# npx prisma db seed

echo "✅ Database setup complete!"
echo "Your production database is ready to use."