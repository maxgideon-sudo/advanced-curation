import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database with test data...')

  // Create a test user (Lead)
  const testLead = await prisma.user.upsert({
    where: { email: 'lead@testbrand.com' },
    update: {},
    create: {
      email: 'lead@testbrand.com',
      name: 'John Smith',
      company: 'Test Brand Agency',
      role: 'LEAD',
    },
  })

  // Create a test client
  const testClient = await prisma.user.upsert({
    where: { email: 'client@testcorp.com' },
    update: {},
    create: {
      email: 'client@testcorp.com',
      name: 'Sarah Johnson',
      company: 'Test Corp',
      password: 'hashedpassword123',
      role: 'CLIENT',
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

  // Create test deals
  const testDeal1 = await prisma.deal.create({
    data: {
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
      userId: testClient.id,
      ctvApps: {
        create: [
          { name: 'ESPN', bundleId: 'com.espn.score_center' },
          { name: 'Nike Training Club', bundleId: 'com.nike.ntc' },
        ]
      }
    },
  })

  const testDeal2 = await prisma.deal.create({
    data: {
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
      userId: testClient.id,
      domains: {
        create: [
          { domain: 'cnn.com' },
          { domain: 'buzzfeed.com' },
          { domain: 'espn.com' },
        ]
      }
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
  console.log(`   - Lead: ${testLead.name} (${testLead.email})`)
  console.log(`   - Client: ${testClient.name} (${testClient.email})`)
  console.log(`   - Deal 1: ${testDeal1.dealId} - ${testDeal1.company}`)
  console.log(`   - Deal 2: ${testDeal2.dealId} - ${testDeal2.company}`)
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