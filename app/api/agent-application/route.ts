
import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const {
      firstName,
      lastName,
      email,
      phone,
      experience,
      currentRole,
      specialties,
      motivation,
      businessGoals,
      referralSource,
      linkedInProfile,
      website
    } = body

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !experience || !motivation || !referralSource) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create agent application
    const application = await prisma.agentApplication.create({
      data: {
        firstName,
        lastName,
        email,
        phone,
        experience,
        currentRole: currentRole || null,
        specialties: specialties || null,
        motivation,
        businessGoals: businessGoals || null,
        referralSource,
        linkedInProfile: linkedInProfile || null,
        website: website || null,
        status: 'pending'
      }
    })

    return NextResponse.json({ 
      success: true, 
      message: 'Application submitted successfully',
      applicationId: application.id 
    })

  } catch (error) {
    console.error('Agent application submission error:', error)
    
    // Handle unique constraint violation (duplicate email)
    if (error instanceof Error && error.message.includes('Unique constraint')) {
      return NextResponse.json(
        { error: 'An application with this email already exists' },
        { status: 409 }
      )
    }

    return NextResponse.json(
      { error: 'Failed to submit application' },
      { status: 500 }
    )
  }
}
