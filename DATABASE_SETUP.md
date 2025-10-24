# Database Setup Guide

## Local Development

Your project is currently set up with Prisma's local PostgreSQL server. This is perfect for development and testing.

### Current Setup
- Database: Prisma local postgres
- Connection: Automatically configured
- No additional setup needed for local development

## Production Database with Neon

For production deployment, you'll want to use a hosted PostgreSQL service like Neon.

### Setting up Neon Database

1. **Go to [Neon Console](https://console.neon.tech/)**
2. **Create a new project** called "advanced-curation"
3. **Copy the connection string** (it will look like this):
   ```
   postgresql://username:password@ep-hostname.us-east-1.aws.neon.tech/dbname?sslmode=require
   ```

4. **Update your production environment**:
   - In Vercel dashboard, go to your project settings
   - Go to "Environment Variables" 
   - Update `DATABASE_URL` with your Neon connection string

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