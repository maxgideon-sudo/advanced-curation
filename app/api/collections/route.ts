import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const userId = searchParams.get('userId')

    const skip = (page - 1) * limit

    const deals = await prisma.deal.findMany({
      where: userId ? { userId } : {},
      include: {
        user: {
          select: {
            name: true,
            email: true,
            company: true
          }
        },
        ctvApps: true,
        domains: true,
        inAppList: true
      },
      orderBy: {
        updatedAt: 'desc'
      },
      skip,
      take: limit
    })

    const total = await prisma.deal.count({
      where: userId ? { userId } : {}
    })

    return NextResponse.json({
      deals,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    })
  } catch (error) {
    console.error('Error fetching deals:', error)
    return NextResponse.json(
      { error: 'Failed to fetch deals' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { 
      email,
      company,
      dsp,
      seatId,
      flightStart,
      flightEnd,
      alwaysOn,
      mediaType,
      geoTargeting,
      idealInventory,
      ctvApps = [],
      domains = [],
      inAppList = [],
      userId
    } = body

    // Generate unique deal ID
    const dealIdPrefix = `AC-${mediaType.toUpperCase()}`
    const dealCount = await prisma.deal.count()
    const dealId = `${dealIdPrefix}-${String(dealCount + 1).padStart(3, '0')}`

    const deal = await prisma.deal.create({
      data: {
        dealId,
        email: userId ? undefined : email, // Only store email for leads
        company,
        dsp,
        seatId,
        flightStart: alwaysOn ? null : new Date(flightStart),
        flightEnd: alwaysOn ? null : new Date(flightEnd),
        alwaysOn,
        mediaType,
        geoTargeting,
        idealInventory,
        userId,
        // Create related data
        ctvApps: {
          create: ctvApps.map((app: { name: string; bundleId: string }) => ({
            name: app.name,
            bundleId: app.bundleId
          }))
        },
        domains: {
          create: domains.map((domain: string) => ({ domain }))
        },
        inAppList: {
          create: inAppList.map((app: { name: string; bundleId: string }) => ({
            appName: app.name,
            bundleId: app.bundleId
          }))
        }
      },
      include: {
        user: {
          select: {
            name: true,
            email: true,
            company: true
          }
        },
        ctvApps: true,
        domains: true,
        inAppList: true
      }
    })

    return NextResponse.json(deal, { status: 201 })
  } catch (error) {
    console.error('Error creating deal:', error)
    return NextResponse.json(
      { error: 'Failed to create deal' },
      { status: 500 }
    )
  }
}