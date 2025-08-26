
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Trevello Agent Platform - Empower Your Travel Business',
  description: 'Join the Trevello network of successful travel advisors. Access AI-powered tools, premium support, and grow your travel business with industry leaders.',
  keywords: 'travel agent, travel advisor, Trevello, AI travel tools, itinerary creation, travel business',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white">
        {children}
      </body>
    </html>
  )
}
