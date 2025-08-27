
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    return NextResponse.json({ 
      status: 'healthy',
      timestamp: new Date().toISOString(),
      environment: {
        hasAbacusKey: !!process.env.ABACUSAI_API_KEY,
        hasDatabaseUrl: !!process.env.DATABASE_URL,
        abacusKeyLength: process.env.ABACUSAI_API_KEY ? process.env.ABACUSAI_API_KEY.length : 0,
      },
      nodeEnv: process.env.NODE_ENV || 'development'
    })
  } catch (error) {
    return NextResponse.json({ 
      status: 'error',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}
