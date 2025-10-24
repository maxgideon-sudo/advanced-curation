import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const search = searchParams.get('search') || ''

    const skip = (page - 1) * limit

    const collections = await prisma.collection.findMany({
      where: {
        isPublic: true,
        OR: search ? [
          { title: { contains: search, mode: 'insensitive' } },
          { description: { contains: search, mode: 'insensitive' } }
        ] : undefined
      },
      include: {
        user: {
          select: {
            name: true,
            avatar: true
          }
        },
        tags: true,
        _count: {
          select: {
            items: true
          }
        }
      },
      orderBy: {
        updatedAt: 'desc'
      },
      skip,
      take: limit
    })

    const total = await prisma.collection.count({
      where: {
        isPublic: true,
        OR: search ? [
          { title: { contains: search, mode: 'insensitive' } },
          { description: { contains: search, mode: 'insensitive' } }
        ] : undefined
      }
    })

    return NextResponse.json({
      collections,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    })
  } catch (error) {
    console.error('Error fetching collections:', error)
    return NextResponse.json(
      { error: 'Failed to fetch collections' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { title, description, isPublic = true, tags = [] } = body

    // For now, we'll use a mock user ID
    // In a real app, this would come from authentication
    const userId = 'mock-user-id'

    const collection = await prisma.collection.create({
      data: {
        title,
        description,
        slug: title.toLowerCase().replace(/\s+/g, '-'),
        isPublic,
        userId,
        tags: {
          connectOrCreate: tags.map((tagName: string) => ({
            where: { name: tagName },
            create: { name: tagName }
          }))
        }
      },
      include: {
        user: {
          select: {
            name: true,
            avatar: true
          }
        },
        tags: true,
        _count: {
          select: {
            items: true
          }
        }
      }
    })

    return NextResponse.json(collection, { status: 201 })
  } catch (error) {
    console.error('Error creating collection:', error)
    return NextResponse.json(
      { error: 'Failed to create collection' },
      { status: 500 }
    )
  }
}