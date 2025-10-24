import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database with test data...')

  // Create a test user
  const testUser = await prisma.user.upsert({
    where: { email: 'test@advancedcuration.com' },
    update: {},
    create: {
      email: 'test@advancedcuration.com',
      name: 'Test User',
      role: 'USER',
    },
  })

  // Create a test collection
  const testCollection = await prisma.collection.upsert({
    where: { slug: 'test-collection' },
    update: {
      title: 'Test Collection - Updated ' + new Date().toISOString(),
    },
    create: {
      title: 'Test Collection - ' + new Date().toISOString(),
      description: 'This is a test collection created to verify database connectivity.',
      slug: 'test-collection',
      isPublic: true,
      userId: testUser.id,
    },
  })

  // Create a test tag
  const testTag = await prisma.tag.upsert({
    where: { name: 'test' },
    update: {},
    create: {
      name: 'test',
      color: '#3B82F6',
    },
  })

  // Create a test item
  const testItem = await prisma.item.create({
    data: {
      title: 'Sample Article - ' + new Date().toISOString(),
      description: 'This is a sample article to test the database connection.',
      url: 'https://example.com',
      type: 'ARTICLE',
      userId: testUser.id,
      collectionId: testCollection.id,
      tags: {
        connect: { id: testTag.id }
      }
    },
  })

  console.log('✅ Database seeded successfully!')
  console.log('📊 Created:')
  console.log(`   - User: ${testUser.name} (${testUser.email})`)
  console.log(`   - Collection: ${testCollection.title}`)
  console.log(`   - Tag: ${testTag.name}`)
  console.log(`   - Item: ${testItem.title}`)
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })