
import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const { name, email, subject, message, formType } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create contact form submission
    const submission = await prisma.contactForm.create({
      data: {
        name,
        email,
        subject: subject || null,
        message,
        formType: formType || 'general'
      }
    })

    return NextResponse.json({ 
      success: true, 
      message: 'Message sent successfully',
      submissionId: submission.id 
    })

  } catch (error) {
    console.error('Contact form submission error:', error)
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}
