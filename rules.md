# Advanced Curation Platform Rules & Architecture

## Platform Purpose & Vision

**Advanced Curation** is a Deal Desk platform that solves the core problem of Media Buyers needing to wait for sellers to create custom Deal IDs. Instead of contacting, negotiating, and waiting for responses with potentially inflated CPMs, Media Buyers get their own **Deal Desk** where they can create deals instantly. The flow goes from AC Deal Curator to the Exchange (via API) and then to their preferred DSP (the exchange handles this part).

**Core Value Proposition**: Speed and Control for Media Buyers - eliminate the waiting game and take ownership of deal creation.

## Target Users

**Primary Users**: Media Buyers within Agencies and DSPs who purchase media through Deal IDs
**Secondary**: Any professional who buys programmatic media through DSPs leveraging Deal IDs

## User Journey & Conversion Flow

### First-Time User (Lead → Client Conversion)
1. **Lead Experience**: Uses Public Deal Curator with 4-digit passcode gate
2. **Deal Creation**: Creates first deal through Deal Curator
3. **Conversion Trigger**: Clicks "Save & Activate" on first Deal ID
4. **Account Setup**: Sets password during conversion process
5. **Client Access**: Redirected to Deal Reporting page with saved Deal ID
6. **Ongoing Usage**: Authenticated clients bypass email entry, all deals auto-save to their account

### Authenticated Client Journey
1. **Default Landing**: Deal Reporting page upon login
2. **Deal Management**: View, edit, pause, resume existing deals
3. **Deal Curator**: Create new deals without re-entering credentials (Agency pre-loaded)
4. **Profile Management**: Update account details via top-right profile access
5. **Navigation**: Access all client pages (Deal Reporting, Deal Management, Deal Curator, Profile)

## Technical Architecture Requirements

### Critical External Integrations
**AC's core external communication will be the API to the Exchange(s).**

**Launch Partner**: **Index Exchange** (First Integration)
- **Index Exchange API** - https://api.indexexchange.com/reference/ixs-rest-apis

**Rollout Sequence** (Post-Launch):
1. **Magnite API**
2. **Nexxen API** 
3. **Pubmatic API**
4. **Additional Exchanges** (as expansion continues)

### API Integration Strategy
- **Exchange-Specific APIs**: Each Exchange has a unique API process and requirements
- **Dynamic API routing** based on selected Exchange in Deal Curator dropdown
- **Custom Implementation per Exchange**: Different API calls, authentication, and data formats
- Each Deal ID must call appropriate Exchange API for:
  - Deal creation
  - Deal modifications  
  - Performance reporting
- APIs must be perfectly integrated - platform fails without proper API functionality
- **Critical**: Cannot use one-size-fits-all approach - each Exchange integration is unique

## Business Model

### Revenue Model
- **12% Margin** on all Deal IDs (built into CPM, invisible to Media Buyer)
- Backend margin management - no client-facing fees

### Client Value Proposition
- **100% FREE** for Media Buyers
- No minimums, contracts, or setup fees
- Time and efficiency savings
- Direct control over deal creation process

## Client Platform Pages

### Client Page Structure
1. **Deal Reporting** (Default Landing Page)
2. **Deal Management** 
3. **Deal Curator**
4. **Profile** (Top-right corner access)

## Core Platform Components

## 1. Deal Curator

### Functionality
- **Targeting Selections**: Media type, flight dates, exchange, inventory, genres, geo targeting
- **Exchange Selection**: Initially only **Index Exchange** in dropdown (launch partner)
- **Output**: Deal ID with format `AC-Agency-Brand-Media`
- **Naming Convention**: 
  - Leads/Clients can customize Deal ID format
  - **MANDATORY**: All Deal IDs must start with "AC-" (non-removable)
  - Default format: `AC-Agency-Brand-Media`

### Lead vs Client Versions
- **Lead Version**: Requires email address entry
- **Client Version**: Auto-authenticated, no email required, Agency pre-loaded from profile
- **Data Persistence**: All deals must save to Neon database and link to user account

### Critical Save Process
- **"Save & Activate"** triggers:
  - Database save to Neon
  - Account linking
  - API call to selected Exchange
  - Lead→Client conversion (if first deal)

## 2. Deal Management

### Core Features
- **Deal Library**: View all user's created Deal IDs
- **Targeting Visibility**: Complete targeting strategy display (expandable/collapsible)
- **Edit Functionality**: Modify existing deals mid-flight
- **Update Process**: "Save & Update" (NOT "Save & Activate")
- **API Sync**: Changes pushed to respective Exchange via API

### Security
- **Account Isolation**: Clients can ONLY see their own deals
- **Data Privacy**: No cross-client data visibility

## 3. Deal Reporting

### Default View
- **Login Landing**: Deal Reporting page (default client landing page)
- **Default Report**: "Today By Deal ID"
- **Timezone**: All data in UTC (clearly labeled)

### Reporting Features
- **Date Selection**: Date picker with presets
  - Today, Yesterday, Last 7 Days, Month to Date, Last Month
- **Deal Filtering**: Search and filter user's deals
- **Export Options**: XLS and CSV download
- **Enhanced Reporting** (Single Deal ID view):
  - AppName/Domain (media type dependent)
  - Hourly reporting (single day only)
  - Geo data (State, DMA, City)

### Required Metrics (API-dependent)
**Must-Have Columns**:
- Deal Requests
- Bids  
- Wins
- Impressions
- Gross Spend
- eCPM

## 4. Client Profile

### Profile Access
- **Location**: Top-right corner when client is logged in
- **Default Avatar**: Unique Identicon (generated per user)
- **Profile Icon**: Clickable to access Profile page

### Profile Management Features
- **Profile Picture**: Upload/change profile image (replaces Identicon)
- **Password Update**: Change account password with current password verification
- **Email Address**: Update email address (becomes new username)
- **Agency**: Update agency name (pre-loads in Deal Curator)

### Profile Integration
- **Deal Curator Pre-loading**: Agency field auto-populated from profile
- **Authentication Sync**: Email changes update login credentials
- **Data Consistency**: Profile updates reflect across all client pages

## Platform Navigation

### Custom Headers (Hamburger Menu Dropdown)

**Admin Navigation Menu:**
- Reporting
- Deal Manager  
- Deal Curator
- Clients
- Leads
- Log Out

**Client Navigation Menu:**
- Deal Reporting
- Deal Manager
- Deal Curator  
- Profile
- Log Out
- Contact Support (leads to contact form → email to max@advancedcuration.com)

### Navigation Features
- **Custom Headers**: Different navigation options based on user role (Admin vs Client)
- **Hamburger Menu**: Dropdown navigation accessed via hamburger icon
- **Contact Support**: Client-only feature that creates support ticket via email submission
- **Role-Based Access**: Menu items reflect available functionality per user type

## Administrator Platform

### Admin User
- **Single Admin**: Platform owner/creator
- **Full Platform Access**: View ALL data across entire platform
- **Client Impersonation**: Access any client's pages + return to Admin view

### Admin Page Structure
1. **Admin Reporting** (Default Landing Page)
2. **Admin Deal Management**
3. **Admin Deal Curator**
4. **Admin Client View**
5. **Admin Lead View**

### Admin Reporting (Default Landing Page)
- **Default View**: Today's Gross & Net Revenue BY EXCHANGE
- **Exchange-Level Analytics**: Critical for API performance tracking
- **Enhanced Metrics**:
  - All client metrics PLUS Net Revenue
  - Exchange-specific revenue tracking (e.g., "Marketplace Owner Fee" for Index Exchange)
- **Data Normalization**: Standardize varying Exchange API responses

### Admin Deal Management
- **Universal Deal View**: ALL deals in platform
- **Pagination**: 25 deals/page (toggleable to show all)
- **Sortable Columns**: Email, Agency, Brand, Deal ID
- **Search Functionality**: Real-time search across all deal elements

### Admin Deal Curator
- **Client Deal Creation**: Create deals for existing clients
- **Email Verification**: Green checkbox confirmation for valid client emails
- **Client Account Linking**: Deals appear in target client's Deal Reporting/Management pages

### Admin Client View
- **Client Directory**: View all converted clients
- **Account Access**: Jump into any client's account (Deal Reporting, Deal Management, Deal Curator)
- **Return Functionality**: Easy return to Admin view

### Admin Lead View
- **Lead Tracking**: View all users who created deals but didn't click "Save & Activate"
- **Conversion Monitoring**: Track leads who haven't converted to clients yet
- **Lead Management**: Tools to follow up with unconverted leads

### Critical Admin Metrics
- Opportunities, Bids, Wins, Impressions
- **Gross Revenue**: Total platform revenue
- **Net Revenue**: Advanced Curation earnings (THE critical metric)
- eCPM, breakdown by Deal/Agency/Brand/Media Type/Inventory/Geo

## Development Standards

### Database Requirements
- **Primary DB**: Neon (PostgreSQL)
- **User Isolation**: Strict account-based data segregation
- **Deal Persistence**: All deals must be permanently stored and linked
- **Audit Trail**: Track all deal modifications

### API Integration Standards
- **Error Handling**: Graceful failures with user feedback
- **Response Normalization**: Standardize data across different Exchange APIs
- **Rate Limiting**: Respect Exchange API limits
- **Authentication**: Secure API key management per Exchange

### Security Requirements
- **Data Isolation**: Clients cannot access other clients' data
- **Admin Privileges**: Full platform access with audit logging
- **API Security**: Encrypted communications with all Exchanges

### UI/UX Standards
- **Timezone Clarity**: Always specify UTC in reporting
- **Loading States**: Clear feedback during API calls
- **Error Messages**: User-friendly error handling
- **Responsive Design**: Mobile-optimized interfaces

## Deal ID Formatting Rules

### Mandatory Requirements
- **Prefix**: ALL Deal IDs MUST start with "AC-"
- **Non-removable**: Users cannot delete "AC-" prefix
- **Default Format**: `AC-Agency-Brand-Media`
- **Customization**: Users can modify everything after "AC-"

## Key Technical Constraints

### Exchange API Dependencies
- Platform functionality is 100% dependent on Exchange API integration
- Each Exchange requires unique API implementation
- Reporting data normalization across different Exchange response formats
- Real-time API availability monitoring

### Data Flow Architecture
1. **Deal Creation**: UI → Neon DB → Exchange API
2. **Deal Updates**: UI → Neon DB → Exchange API  
3. **Reporting**: Exchange API → Data Normalization → UI
4. **Admin Reporting**: Multiple Exchange APIs → Revenue Aggregation → UI

This `rules.md` serves as the definitive guide for all Advanced Curation platform development decisions and architectural requirements.