
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET() {
  return NextResponse.json({ 
    message: 'API is working!',
    timestamp: new Date().toISOString(),
    env: {
      hasAbacusKey: !!process.env.ABACUSAI_API_KEY,
      hasDatabaseUrl: !!process.env.DATABASE_URL,
    }
  })
}

export async function POST() {
  return NextResponse.json({ 
    message: 'POST API is working!',
    timestamp: new Date().toISOString()
  })
}
