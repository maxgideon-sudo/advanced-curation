# Quick Deployment Guide

## Step-by-Step Production Setup

### 1. Database Setup (Neon + Vercel Integration)

**Option A: Vercel Integration (Recommended)**
1. Go to https://vercel.com/dashboard
2. Open your `advancedcuration` project
3. Go to "Integrations" tab
4. Add "Neon" integration
5. Create database: "advanced-curation-db"
6. ✅ `DATABASE_URL` is automatically added to your environment variables

**Option B: Manual Setup**
1. Go to https://console.neon.tech/
2. Create new project: "advanced-curation"
3. Copy connection string
4. Add to Vercel environment variables

### 2. Environment Variables in Vercel

Go to your Vercel project → Settings → Environment Variables and ensure you have:

```env
DATABASE_URL=postgresql://user:pass@host/db?sslmode=require
NEXTAUTH_URL=https://your-app-domain.vercel.app
NEXTAUTH_SECRET=your-long-random-secret-key
NODE_ENV=production
```

### 3. Database Schema Setup

After database is created, run migrations:

```bash
# If you have the production DATABASE_URL locally
DATABASE_URL="your-production-url" npx prisma migrate deploy

# Or use the setup script
DATABASE_URL="your-production-url" ./scripts/setup-production-db.sh
```

### 4. Deploy

Your app will automatically redeploy when you push to GitHub:

```bash
git add .
git commit -m "Production database setup"
git push
```

Or manually deploy:
```bash
npx vercel --prod
```

### 5. Verify Deployment

1. Visit your live app: https://your-app-domain.vercel.app
2. Check that the database connection works
3. Test creating collections and content

## Troubleshooting

### Database Connection Issues
- Ensure `DATABASE_URL` includes `?sslmode=require`
- Check that environment variables are set in Vercel
- Verify database migrations have been run

### Build Errors
- Check Vercel deployment logs
- Ensure all environment variables are set
- Verify TypeScript compilation locally first

## Useful Commands

```bash
# Check database connection
npx prisma db push

# View database in browser
npx prisma studio

# Reset database (⚠️ destroys data)
npx prisma migrate reset

# Deploy to Vercel
npx vercel --prod

# Check deployment logs
vercel logs
```