import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database with test data...')

  // Create test leads
  const testLead1 = await prisma.lead.upsert({
    where: { email: 'lead1@testbrand.com' },
    update: {},
    create: {
      email: 'lead1@testbrand.com',
      name: 'John Smith',
      company: 'Test Brand Agency',
      phone: '+1-555-0123',
      source: 'Website',
      status: 'NEW',
      notes: 'Interested in CTV campaigns for Q1 2025',
    },
  })

  const testLead2 = await prisma.lead.upsert({
    where: { email: 'lead2@innovateads.com' },
    update: {},
    create: {
      email: 'lead2@innovateads.com',
      name: 'Emily Chen',
      company: 'Innovate Ads',
      phone: '+1-555-0456',
      source: 'Referral',
      status: 'QUALIFIED',
      notes: 'Looking for multi-media programmatic solutions',
    },
  })

  // Create test clients (converted leads and direct signups)
  const testClient1 = await prisma.client.upsert({
    where: { email: 'client@testcorp.com' },
    update: {},
    create: {
      email: 'client@testcorp.com',
      name: 'Sarah Johnson',
      company: 'Test Corp',
      password: 'hashedpassword123',
      phone: '+1-555-0789',
      isActive: true,
    },
  })

  const testClient2 = await prisma.client.upsert({
    where: { email: 'media@globalbrands.com' },
    update: {},
    create: {
      email: 'media@globalbrands.com',
      name: 'Michael Rodriguez',
      company: 'Global Brands Inc',
      password: 'hashedpassword456',
      phone: '+1-555-0987',
      isActive: true,
    },
  })

  // Create a test user (Legacy - for backward compatibility)
  const testLegacyUser = await prisma.user.upsert({
    where: { email: 'legacy@testbrand.com' },
    update: {},
    create: {
      email: 'legacy@testbrand.com',
      name: 'Legacy User',
      company: 'Legacy Agency',
      role: 'CLIENT',
      password: 'legacypassword',
    },
  })

  // Create test DSPs
  await prisma.dSP.createMany({
    data: [
      { name: 'DV360', code: 'DV360' },
      { name: 'The Trade Desk', code: 'TTD' },
      { name: 'Amazon DSP', code: 'AMZN' },
    ],
    skipDuplicates: true,
  })

  // Create test Seat IDs
  await prisma.seatId.createMany({
    data: [
      { seatId: 'SEAT-12345', dspId: 'dv360-1', name: 'DV360 Seat 1' },
      { seatId: 'SEAT-67890', dspId: 'ttd-1', name: 'TTD Seat 1' },
      { seatId: 'SEAT-11111', dspId: 'amzn-1', name: 'Amazon Seat 1' },
    ],
    skipDuplicates: true,
  })

  // Create test deals (mix of lead, client, and legacy user deals)
  const testDeal1 = await prisma.deal.upsert({
    where: { dealId: 'AC-CTV-001' },
    update: {},
    create: {
      dealId: 'AC-CTV-001',
      company: 'Nike',
      dsp: 'DV360',
      seatId: 'SEAT-12345',
      flightStart: new Date('2024-01-15'),
      flightEnd: new Date('2024-02-15'),
      alwaysOn: false,
      mediaType: 'CTV',
      geoTargeting: { type: 'US_ONLY' },
      idealInventory: 'Looking for premium sports and fitness content on CTV platforms targeting active lifestyle audiences.',
      clientId: testClient1.id,
    },
  })

  const testDeal2 = await prisma.deal.upsert({
    where: { dealId: 'AC-DIS-002' },
    update: {},
    create: {
      dealId: 'AC-DIS-002',
      company: 'Coca-Cola',
      dsp: 'The Trade Desk',
      seatId: 'SEAT-67890',
      flightStart: new Date('2024-01-20'),
      flightEnd: null,
      alwaysOn: true,
      mediaType: 'DISPLAY',
      geoTargeting: { type: 'STATES', states: ['CA', 'NY', 'TX'] },
      idealInventory: 'Premium display inventory on lifestyle and entertainment websites targeting young adults 18-34.',
      clientId: testClient2.id,
    },
  })

  const testDeal3 = await prisma.deal.upsert({
    where: { dealId: 'AC-OLV-003' },
    update: {},
    create: {
      dealId: 'AC-OLV-003',
      company: 'Global Brands Inc',
      dsp: 'Amazon DSP',
      seatId: 'SEAT-11111',
      flightStart: new Date('2024-02-01'),
      flightEnd: new Date('2024-03-01'),
      alwaysOn: false,
      mediaType: 'OLV',
      geoTargeting: { type: 'DMAS', dmas: ['501', '803', '602'] },
      idealInventory: 'Online video placements targeting premium lifestyle and luxury audiences.',
      leadId: testLead2.id,
    },
  })

  // Create some geo data
  await prisma.state.createMany({
    data: [
      { name: 'California', code: 'CA' },
      { name: 'New York', code: 'NY' },
      { name: 'Texas', code: 'TX' },
      { name: 'Florida', code: 'FL' },
    ],
    skipDuplicates: true,
  })

  console.log('✅ Database seeded successfully!')
  console.log('📊 Created:')
  console.log(`   - Lead 1: ${testLead1.name} (${testLead1.email})`)
  console.log(`   - Lead 2: ${testLead2.name} (${testLead2.email})`)
  console.log(`   - Client 1: ${testClient1.name} (${testClient1.email})`)
  console.log(`   - Client 2: ${testClient2.name} (${testClient2.email})`)
  console.log(`   - Legacy User: ${testLegacyUser.name} (${testLegacyUser.email})`)
  console.log(`   - Deal 1: ${testDeal1.dealId} - ${testDeal1.company} (Client)`)
  console.log(`   - Deal 2: ${testDeal2.dealId} - ${testDeal2.company} (Lead)`)
  console.log(`   - Deal 3: ${testDeal3.dealId} - ${testDeal3.company} (Client)`)
  console.log(`   - 3 DSPs and Seat IDs`)
  console.log(`   - 4 US States`)
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })