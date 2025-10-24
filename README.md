# Advanced Curation - AI-Powered Deal Desk

Agentic programmatic deal desk platform for brands and agencies to create custom Deal IDs and PMPs for programmatic media buying across all media types with AI-powered targeting.

## Features

- **AI-Powered Deal Curation**: Leverage OpenAI to analyze inventory requirements and generate optimal deal targeting
- **Multi-Media Support**: Create deals across CTV, OLV, Display, and In-App with platform-specific targeting  
- **DSP Integration Ready**: Generate Deal IDs compatible with major DSPs and manage seat ID validation
- **Lead to Client Conversion**: Streamlined flow from initial deal creation to client account setup
- **Comprehensive Targeting**: Geographic targeting (US, States, DMAs, Cities, Zip codes) with CSV uploads
- **Deal Management**: View, edit, pause, and export all your programmatic deals
- **PDF Export**: Custom PDF generation for deal targeting and specifications

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Database**: PostgreSQL with Prisma ORM  
- **AI**: OpenAI API integration for deal curation
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **TypeScript**: Full type safety

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database (Neon recommended for production)
- OpenAI API key (for AI-powered deal curation)

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

Edit `.env` and add your configuration:
```env
# Database (Neon production database)
DATABASE_URL="postgresql://username:password@hostname:5432/database?sslmode=require"

# OpenAI API (for deal curation)
OPENAI_API_KEY="your-openai-api-key"

# Authentication
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

5. Seed the database with test data:
```bash
npm run db:seed
```

6. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Database Schema

The application uses the following main entities:

### Core Entities
- **Users**: Lead and Client accounts with authentication
- **Deals**: Programmatic deal records with targeting specifications
- **DSPs**: Demand Side Platform reference data
- **SeatIds**: Valid seat ID validation and management

### Media-Specific Targeting
- **CtvApps**: Connected TV app targeting with bundle IDs
- **Domains**: Domain lists for OLV and Display campaigns  
- **InAppItems**: In-app advertising targeting

### Geographic Targeting
- **States**: US state-level targeting
- **DMAs**: Designated Market Area targeting
- **Cities**: City-level targeting  
- **ZipCodes**: Zip code targeting with CSV upload support

## User Flow

### Lead Flow (First-time Users)
1. Access Deal Curator with passcode (1226)
2. Fill out deal details form
3. AI analyzes ideal inventory description
4. Create account (convert to Client) 
5. Receive Deal ID and PDF export

### Client Flow (Returning Users)
1. Login to dashboard
2. View existing deals
3. Create new deals via Deal Curator
4. Manage and edit existing deals
5. Export deal specifications as PDF

## API Routes

### Deal Management
- `GET /api/collections` - List all deals (supports user filtering)
- `POST /api/collections` - Create a new deal
- `GET /api/collections/[id]` - Get a specific deal
- `PUT /api/collections/[id]` - Update a deal  
- `DELETE /api/collections/[id]` - Delete a deal

### Reference Data
- `GET /api/dsps` - List available DSPs
- `GET /api/seat-ids` - Validate seat IDs
- `GET /api/geo-targeting` - Geographic targeting options

## Pages

- `/` - Homepage with platform overview and features
- `/deal-curator` - AI-powered deal creation form (passcode: 1226 for leads)
- `/dashboard` - Client dashboard for managing deals
- `/deals/[id]` - Individual deal view and editing
- `/about` - Platform information
- `/contact` - Contact and support

## AI Integration

The platform uses OpenAI's API to analyze the "Ideal Inventory" description and provide:
- Optimized targeting recommendations
- Inventory quality scoring  
- Campaign optimization suggestions
- Audience matching insights

## Deployment

This application is designed to be deployed on Vercel with a PostgreSQL database (Neon recommended).

### Environment Variables for Production
Set these in your Vercel project settings:

```env
DATABASE_URL="your-neon-connection-string"
OPENAI_API_KEY="your-openai-api-key"
NEXTAUTH_URL="https://your-app-domain.vercel.app"
NEXTAUTH_SECRET="your-long-random-secret-key"
NODE_ENV="production"
```

### Deployment Steps
1. Connect GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on git push
4. Run database migrations in production

## Contributing

1. Fork the repository
2. Create a feature branch  
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

MIT License - see LICENSE file for details.
