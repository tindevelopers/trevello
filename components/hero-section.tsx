
'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Play } from 'lucide-react'

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="hero-gradient min-h-screen flex items-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='https://i.etsystatic.com/18004091/r/il/989bc3/2316766243/il_570xN.2316766243_p3vt.jpg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="section-padding w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`text-white space-y-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Infinite <span className="text-trevello-coral">Possibilities</span>
                <br />
                for Travel Advisors
              </h1>
              <p className="text-xl lg:text-2xl opacity-90 max-w-lg">
                Helping today's independent Travel Advisors thrive with AI-powered tools, 
                premium support, and proven systems to grow your business.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/application" className="btn-trevello-outline group">
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="flex items-center space-x-3 text-white hover:text-trevello-coral transition-colors">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                  <Play className="w-5 h-5 ml-1" />
                </div>
                <span className="text-lg">Watch Success Stories</span>
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
              <div>
                <div className="text-3xl font-bold counter-animation">30+</div>
                <div className="text-sm opacity-80">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold counter-animation">2,500+</div>
                <div className="text-sm opacity-80">Active Agents</div>
              </div>
              <div>
                <div className="text-3xl font-bold counter-animation">95%</div>
                <div className="text-sm opacity-80">Agent Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className={`relative ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <div className="relative aspect-[4/5] w-full max-w-lg mx-auto">
              <div className="absolute inset-0 bg-white/10 rounded-lg backdrop-blur-sm" />
              <Image
                src="https://cdn.abacus.ai/images/8180060f-b8be-4611-9625-88857c5a0435.png"
                alt="Professional travel consultant helping clients plan their perfect trip"
                fill
                className="object-cover rounded-lg shadow-2xl"
                priority
              />
              
              {/* Floating Stats Cards */}
              <div className="absolute -top-4 -left-4 bg-white rounded-lg p-4 shadow-lg">
                <div className="text-2xl font-bold trevello-purple">$150K+</div>
                <div className="text-sm text-trevello-gray">Avg Annual Revenue</div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg p-4 shadow-lg">
                <div className="text-2xl font-bold trevello-purple">24/7</div>
                <div className="text-sm text-trevello-gray">Premium Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
