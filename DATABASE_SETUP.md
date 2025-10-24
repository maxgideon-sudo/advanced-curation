# Database Setup Guide

## Local Development

Your project is currently set up with Prisma's local PostgreSQL server. This is perfect for development and testing.

### Current Setup
- Database: Prisma local postgres
- Connection: Automatically configured
- No additional setup needed for local development

## Production Database with Neon

For production deployment, you'll want to use a hosted PostgreSQL service like Neon. The easiest way is through Vercel's integration.

### Setting up Neon Database via Vercel Integration (Recommended)

1. **Go to your Vercel Dashboard**
   - Visit https://vercel.com/dashboard
   - Click on your "advancedcuration" project

2. **Add Neon Integration**
   - Go to the "Integrations" tab
   - Search for "Neon" and click "Add Integration"
   - Follow the prompts to connect your Neon account

3. **Create Database**
   - The integration will prompt you to create a new database
   - Choose name: "advanced-curation-db"
   - Select region: US East (or your preferred region)
   - The integration automatically adds `DATABASE_URL` to your Vercel environment variables

4. **Run Database Setup**
   ```bash
   # After database is created, run migrations
   ./scripts/setup-production-db.sh
   ```

### Alternative: Manual Neon Setup

If you prefer to set up manually:

1. **Go to [Neon Console](https://console.neon.tech/)**
2. **Create a new project** called "advanced-curation"
3. **Copy the connection string**
4. **Add to Vercel environment variables**

### Database Migration

Once you have your production database URL:

```bash
# Set your production DATABASE_URL in .env
DATABASE_URL="your-neon-connection-string"

# Run migrations
npx prisma migrate deploy

# Generate Prisma client
npx prisma generate
```

### Environment Variables for Production

Set these in your Vercel project settings:

```env
DATABASE_URL="postgresql://username:password@ep-hostname.us-east-1.aws.neon.tech/dbname?sslmode=require"
NEXTAUTH_URL="https://your-app-domain.vercel.app"
NEXTAUTH_SECRET="your-long-random-secret-key"
NODE_ENV="production"
```

## Security Notes

- ✅ `.env` file is already in `.gitignore`
- ✅ Never commit database credentials to git
- ✅ Use different databases for development and production
- ✅ Generate a strong `NEXTAUTH_SECRET` for production
- ✅ Use SSL connections in production (`sslmode=require`)

## Database Schema

The database includes these main tables:
- `users` - User accounts and profiles
- `collections` - Content collections
- `items` - Individual content items
- `tags` - Categorization system
- `comments` - Social features
- `favorites` - User bookmarks

All relationships and constraints are defined in `prisma/schema.prisma`.