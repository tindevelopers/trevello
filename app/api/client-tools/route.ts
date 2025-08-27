
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET() {
  return NextResponse.json({ 
    message: 'Client tools endpoint - not implemented',
    status: 'placeholder'
  })
}

export async function POST() {
  return NextResponse.json({ 
    message: 'Client tools endpoint - not implemented',
    status: 'placeholder'
  })
}
