
import { Suspense } from 'react'
import Header from '../components/header'
import HeroSection from '../components/hero-section'
import AgentBenefits from '../components/agent-benefits'
import AIItinerarySection from '../components/ai-itinerary-section'
import SuccessStats from '../components/success-stats'
import TestimonialsSection from '../components/testimonials-section'
import CTASection from '../components/cta-section'
import Footer from '../components/footer'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <SuccessStats />
        <AgentBenefits />
        <AIItinerarySection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
