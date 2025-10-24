# Advanced Curation

The ultimate platform for content curation and discovery. Organize articles, videos, links, and more into beautiful collections. Share your curated content with the world or keep it private for yourself.

## Features

- **Smart Collections**: Organize your content into themed collections with rich metadata and tagging
- **Social Features**: Share collections, get feedback, and discover content from other curators
- **Powerful Search**: Find exactly what you're looking for with advanced search and filtering
- **User Authentication**: Secure user accounts with role-based permissions
- **Modern UI**: Beautiful, responsive design built with Tailwind CSS
- **Database Integration**: PostgreSQL database with Prisma ORM

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Database**: PostgreSQL with Prisma ORM
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **TypeScript**: Full type safety

## Getting Started

### Prerequisites

- Node.js 18+ 
- PostgreSQL database (or use a hosted solution like Neon)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd advancedcuration
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

Edit `.env` and add your database URL and other configuration:
```env
# For local development (using Prisma local postgres)
DATABASE_URL="prisma+postgres://localhost:51213/?api_key=your-api-key"

# For production (using Neon or other PostgreSQL provider)
# DATABASE_URL="postgresql://username:password@hostname:5432/database?sslmode=require"

NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-super-secret-key-change-this-in-production"
NODE_ENV="development"
```

**Important**: Never commit your `.env` file to version control. It's already included in `.gitignore`.

4. Set up the database:
```bash
npx prisma migrate dev --name init
npx prisma generate
```

5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Database Schema

The application uses the following main entities:

- **Users**: User accounts with authentication
- **Collections**: Curated content collections
- **Items**: Individual content items within collections
- **Tags**: Categorization and filtering
- **Comments**: Social interaction on items
- **Favorites**: User bookmarking system

## API Routes

- `GET /api/collections` - List all public collections
- `POST /api/collections` - Create a new collection
- `GET /api/collections/[id]` - Get a specific collection
- `PUT /api/collections/[id]` - Update a collection
- `DELETE /api/collections/[id]` - Delete a collection

## Pages

- `/` - Homepage with features and sample collections
- `/explore` - Browse and search all public collections
- `/dashboard` - User dashboard for managing collections
- `/collections/[id]` - Individual collection view

## Deployment

This application is designed to be deployed on Vercel with a PostgreSQL database (such as Neon).

1. Deploy to Vercel
2. Set up your database and add the connection string to environment variables
3. Run the database migrations in production

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

MIT License - see LICENSE file for details.
