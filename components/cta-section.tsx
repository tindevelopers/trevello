
'use client'

import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'

export default function CTASection() {
  const benefits = [
    'No startup fees or monthly costs',
    'Keep 100% of your existing clients', 
    'AI-powered itinerary tools included',
    '24/7 premium support and training',
    'Industry-leading commission structure'
  ]

  return (
    <section className="py-20 hero-gradient text-white">
      <div className="section-padding text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your
            <br />
            <span className="text-trevello-coral">Travel Business?</span>
          </h2>
          
          <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto">
            Join thousands of successful travel advisors who have already transformed 
            their careers with Trevello's platform, tools, and support.
          </p>

          {/* Benefits List */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12 max-w-3xl mx-auto">
            {benefits?.map((benefit) => (
              <div key={benefit} className="flex items-center space-x-3 text-left">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-sm">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link href="/application" className="btn-trevello-outline group text-lg px-10 py-4">
              Start Your Application
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/itinerary-creator" className="text-white hover:text-trevello-coral transition-colors underline">
              Try AI Demo First →
            </Link>
          </div>

          {/* Urgency/Incentive */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <p className="text-sm opacity-90">
              <strong>Limited Time:</strong> New agents joining this month get priority access 
              to our exclusive AI training bootcamp and 1-on-1 success coaching sessions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
