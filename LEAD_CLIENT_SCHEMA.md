# Database Schema Overview - Lead and Client Tables

## New Tables Added

### 📋 **Lead Table**
Tracks potential clients through the sales pipeline.

**Fields:**
- `id` - Unique identifier 
- `email` - Lead's email (unique)
- `name` - Lead's name
- `company` - Brand or Agency name
- `phone` - Contact number
- `source` - How they found us (website, referral, etc.)
- `status` - Pipeline status (NEW, CONTACTED, QUALIFIED, PROPOSAL_SENT, NEGOTIATING, CONVERTED, LOST)
- `notes` - Sales notes and context
- `lastContact` - Last interaction date
- `convertedAt` - When they became a client
- `createdAt` / `updatedAt` - Timestamps

**Relations:**
- Can have multiple `deals` (before conversion)
- Can convert to one `client` (via convertedToClient relation)

### 👤 **Client Table** 
Tracks converted leads and direct client signups.

**Fields:**
- `id` - Unique identifier
- `email` - Client's email (unique)
- `password` - Authentication (required for clients)
- `name` - Client's name
- `company` - Brand or Agency name
- `phone` - Contact number
- `billingAddress` - JSON field for flexible address storage
- `subscriptionPlan` - Future: subscription tiers
- `isActive` - Account status
- `createdAt` / `updatedAt` - Timestamps

**Relations:**
- Can have multiple `deals`
- Can reference original `lead` if converted (via originalLead relation)

### 📄 **Updated Deal Table**
Now supports three types of ownership:

**Relations:**
- `userId` - Legacy User relation (backward compatibility)
- `leadId` - Deal created by a Lead
- `clientId` - Deal owned by a Client

## Sample Data Created

### 🎯 **Leads**
1. **John Smith** (lead1@testbrand.com)
   - Company: Test Brand Agency
   - Status: NEW
   - Interested in CTV campaigns

2. **Emily Chen** (lead2@innovateads.com)
   - Company: Innovate Ads
   - Status: QUALIFIED
   - Looking for multi-media solutions

### 💼 **Clients**
1. **Sarah Johnson** (client@testcorp.com)
   - Company: Test Corp
   - Active client account

2. **Michael Rodriguez** (media@globalbrands.com)
   - Company: Global Brands Inc
   - Active client account

### 📊 **Deal Distribution**
- **Deal 1** (AC-CTV-001): Nike → Owned by Client 1
- **Deal 2** (AC-DIS-002): Coca-Cola → Created by Lead 1
- **Deal 3** (AC-OLV-003): Global Brands → Created by Lead 2

## Lead-to-Client Conversion Flow

1. **Lead Creation**: New lead enters system via Deal Curator (passcode 1226)
2. **Deal Creation**: Lead creates deals before account conversion
3. **Lead Nurturing**: Track status through sales pipeline
4. **Conversion**: Lead becomes Client with password-protected account
5. **Deal Transfer**: Existing deals transfer from Lead to Client
6. **Ongoing Management**: Client manages deals through dashboard

## API Implications

The existing API routes will continue to work with backward compatibility:
- Deals can be associated with User (legacy), Lead, or Client
- Frontend can query deals by any ownership type
- Conversion process can transfer deals from Lead to Client

## Benefits

✅ **Better CRM**: Track leads through sales pipeline
✅ **Conversion Tracking**: Clear lead-to-client funnel
✅ **Deal Attribution**: Know if deal came from lead or direct client
✅ **Account Management**: Separate authentication for clients
✅ **Backward Compatibility**: Existing User model preserved
✅ **Scalability**: Ready for subscription plans and billing