
import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
    console.log('API called - starting itinerary generation')
    
    const body = await request.json()
    console.log('Request body received:', { ...body, agentEmail: '***' })
    
    const {
      agentEmail,
      clientName,
      destination,
      duration,
      budget,
      travelStyle,
      specialRequests
    } = body

    // Validate required fields
    if (!agentEmail || !clientName || !destination || !duration) {
      console.log('Missing required fields:', { agentEmail: !!agentEmail, clientName: !!clientName, destination: !!destination, duration: !!duration })
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    console.log('Environment check:', {
      hasAbacusKey: !!process.env.ABACUSAI_API_KEY,
      hasDatabaseUrl: !!process.env.DATABASE_URL
    })

    // Save itinerary request to database
    const itineraryRequest = await prisma.itineraryRequest.create({
      data: {
        agentEmail,
        clientName,
        destination,
        duration,
        budget: budget || null,
        travelStyle: travelStyle || null,
        specialRequests: specialRequests || null,
        status: 'processing'
      }
    })

    // Prepare the prompt for the AI
    let prompt = `Create a detailed, personalized travel itinerary for ${clientName} visiting ${destination} for ${duration}.

Client Details:
- Name: ${clientName}
- Destination: ${destination}  
- Duration: ${duration}`

    if (budget) {
      prompt += `\n- Budget: ${budget}`
    }
    if (travelStyle) {
      prompt += `\n- Travel Style: ${travelStyle}`
    }
    if (specialRequests) {
      prompt += `\n- Special Requests: ${specialRequests}`
    }

    prompt += `

Please create a comprehensive day-by-day itinerary that includes:
- Detailed daily activities and attractions
- Recommended restaurants and dining experiences
- Transportation suggestions
- Accommodation recommendations (general area/type)
- Cultural tips and local insights
- Estimated timing for activities
- Budget-conscious alternatives where applicable

Format the response in a clear, professional manner that a travel agent can present directly to their client. Make it engaging and personalized based on the provided preferences.

Respond with raw text only. Do not include code blocks, markdown, or any other formatting.`

    const messages = [
      {
        role: 'user',
        content: prompt
      }
    ]

    // Call the LLM API (non-streaming for better reliability)
    const response = await fetch('https://apps.abacus.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.ABACUSAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: messages,
        stream: false,
        max_tokens: 3000,
      }),
    })

    if (!response.ok) {
      throw new Error(`LLM API error: ${response.status} ${response.statusText}`)
    }

    const data = await response.json()
    const generatedItinerary = data?.choices?.[0]?.message?.content || 'Unable to generate itinerary'

    // Save the completed itinerary to database
    await prisma.itineraryRequest.update({
      where: { id: itineraryRequest.id },
      data: {
        generatedItinerary,
        status: 'completed'
      }
    })

    const result = {
      itinerary: generatedItinerary,
      destination,
      clientName,
      duration,
      requestId: itineraryRequest.id
    }

    return NextResponse.json({
      status: 'completed',
      result
    })

  } catch (error) {
    console.error('Itinerary generation error:', error)
    console.error('Error details:', {
      name: error instanceof Error ? error.name : 'Unknown',
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : 'No stack trace'
    })
    return NextResponse.json(
      { 
        error: 'Failed to generate itinerary',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}
