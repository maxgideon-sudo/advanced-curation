import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const collection = await prisma.collection.findUnique({
      where: { id },
      include: {
        user: {
          select: {
            name: true,
            avatar: true
          }
        },
        tags: true,
        items: {
          include: {
            tags: true,
            _count: {
              select: {
                comments: true,
                favorites: true
              }
            }
          },
          orderBy: {
            createdAt: 'desc'
          }
        }
      }
    })

    if (!collection) {
      return NextResponse.json(
        { error: 'Collection not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(collection)
  } catch (error) {
    console.error('Error fetching collection:', error)
    return NextResponse.json(
      { error: 'Failed to fetch collection' },
      { status: 500 }
    )
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const body = await request.json()
    const { title, description, isPublic, tags = [] } = body

    const collection = await prisma.collection.update({
      where: { id },
      data: {
        title,
        description,
        isPublic,
        slug: title.toLowerCase().replace(/\s+/g, '-'),
        tags: {
          set: [],
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

    return NextResponse.json(collection)
  } catch (error) {
    console.error('Error updating collection:', error)
    return NextResponse.json(
      { error: 'Failed to update collection' },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    await prisma.collection.delete({
      where: { id }
    })

    return NextResponse.json({ message: 'Collection deleted successfully' })
  } catch (error) {
    console.error('Error deleting collection:', error)
    return NextResponse.json(
      { error: 'Failed to delete collection' },
      { status: 500 }
    )
  }
}