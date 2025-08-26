
import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
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
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

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

    // Call the LLM API with streaming
    const response = await fetch('https://apps.abacus.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.ABACUSAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-4.1-mini',
        messages: messages,
        stream: true,
        max_tokens: 3000,
      }),
    })

    if (!response?.body) {
      throw new Error('No response body from LLM API')
    }

    let buffer = ''
    let partialRead = ''

    const stream = new ReadableStream({
      async start(controller) {
        const reader = response.body?.getReader()
        const decoder = new TextDecoder()
        const encoder = new TextEncoder()
        
        try {
          while (true) {
            const { done, value } = await reader?.read() || { done: true, value: undefined }
            if (done) break

            partialRead += decoder.decode(value, { stream: true })
            let lines = partialRead.split('\n')
            partialRead = lines.pop() || ''

            for (const line of lines) {
              if (line.startsWith('data: ')) {
                const data = line.slice(6)
                if (data === '[DONE]') {
                  // Save the completed itinerary to database
                  await prisma.itineraryRequest.update({
                    where: { id: itineraryRequest.id },
                    data: {
                      generatedItinerary: buffer,
                      status: 'completed'
                    }
                  })

                  const finalResult = {
                    itinerary: buffer,
                    destination,
                    clientName,
                    duration,
                    requestId: itineraryRequest.id
                  }

                  const finalData = JSON.stringify({
                    status: 'completed',
                    result: finalResult
                  })
                  controller.enqueue(encoder.encode(`data: ${finalData}\n\n`))
                  controller.close()
                  return
                }
                try {
                  const parsed = JSON.parse(data)
                  buffer += parsed?.choices?.[0]?.delta?.content || ''
                  const progressData = JSON.stringify({
                    status: 'processing',
                    message: 'Generating itinerary...'
                  })
                  controller.enqueue(encoder.encode(`data: ${progressData}\n\n`))
                } catch (e) {
                  // Skip invalid JSON
                }
              }
            }
          }
        } catch (error) {
          console.error('Stream error:', error)
          
          // Update database with error status
          await prisma.itineraryRequest.update({
            where: { id: itineraryRequest.id },
            data: { status: 'failed' }
          })

          const errorData = JSON.stringify({
            status: 'error',
            message: 'Failed to generate itinerary'
          })
          controller.enqueue(encoder.encode(`data: ${errorData}\n\n`))
          controller.close()
        }
      },
    })

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    })

  } catch (error) {
    console.error('Itinerary generation error:', error)
    return NextResponse.json(
      { error: 'Failed to generate itinerary' },
      { status: 500 }
    )
  }
}
