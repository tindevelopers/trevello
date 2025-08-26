
'use client'

import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Bot, 
  Sparkles, 
  Clock, 
  Globe,
  ArrowRight,
  Play
} from 'lucide-react'

export default function AIItinerarySection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const aiFeatures = [
    {
      icon: Sparkles,
      title: 'Intelligent Suggestions',
      description: 'AI analyzes client preferences, budget, and travel style to recommend perfect destinations and activities.'
    },
    {
      icon: Clock,
      title: 'Instant Creation',
      description: 'Generate complete, detailed itineraries in under 3 minutes - what used to take hours now takes minutes.'
    },
    {
      icon: Globe,
      title: 'Global Knowledge',
      description: 'Access real-time information about destinations worldwide, from hidden gems to popular attractions.'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="section-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-50 px-4 py-2 rounded-full mb-4">
            <Bot className="w-5 h-5 trevello-purple" />
            <span className="text-sm font-medium trevello-purple">AI-Powered Technology</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold trevello-purple mb-6">
            Create Perfect Itineraries
            <br />
            <span className="text-trevello-coral">In Minutes, Not Hours</span>
          </h2>
          <p className="text-xl text-trevello-gray max-w-3xl mx-auto">
            Revolutionary AI technology that helps you create personalized, 
            detailed itineraries that wow clients and close more bookings.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: AI Demo/Mockup */}
          <div ref={ref} className={`${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="relative">
              {/* Main AI Interface Mockup */}
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-xl border">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-8 h-8 bg-trevello-purple rounded-lg flex items-center justify-center">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Trevello AI Assistant</div>
                    <div className="text-sm text-gray-500">Creating your perfect itinerary...</div>
                  </div>
                  <div className="ml-auto">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                    </div>
                  </div>
                </div>

                {/* Sample AI Response */}
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="text-sm text-blue-800 mb-2">✨ Perfect! I've created a 7-day Paris itinerary for your luxury-seeking couple:</div>
                    <div className="text-sm text-gray-700">
                      <strong>Day 1:</strong> Arrival & Seine River Cruise<br />
                      <strong>Day 2:</strong> Louvre Museum & Michelin Dining<br />
                      <strong>Day 3:</strong> Versailles Palace Tour...
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>⚡ Generated in 2.3 seconds</span>
                    <span>🎯 95% client satisfaction</span>
                  </div>
                </div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -top-4 -right-4 bg-white rounded-lg p-4 shadow-lg border">
                <div className="text-lg font-bold trevello-purple">2.3s</div>
                <div className="text-xs text-gray-600">Average generation time</div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg p-4 shadow-lg border">
                <div className="text-lg font-bold trevello-purple">95%</div>
                <div className="text-xs text-gray-600">Client approval rate</div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className={`space-y-8 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <div>
              <h3 className="text-3xl font-bold trevello-purple mb-6">
                The Future of Travel Planning
              </h3>
              <p className="text-lg text-trevello-gray mb-8">
                Our AI assistant understands your clients' unique preferences, budget constraints, 
                and travel goals to create personalized itineraries that exceed expectations and 
                drive bookings.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-6">
              {aiFeatures?.map((feature, index) => {
                const Icon = feature?.icon
                return (
                  <div key={feature?.title} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-trevello-purple/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 trevello-purple" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {feature?.title}
                      </h4>
                      <p className="text-trevello-gray">
                        {feature?.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/itinerary-creator" className="btn-trevello-primary group">
                Try AI Demo
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="flex items-center justify-center space-x-3 px-8 py-3 border-2 border-trevello-purple trevello-purple rounded-lg font-semibold hover:bg-trevello-purple hover:text-white transition-all duration-300">
                <Play className="w-5 h-5" />
                <span>Watch Demo Video</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Demo Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold trevello-purple mb-4">
              Ready to Experience the Power of AI?
            </h3>
            <p className="text-trevello-gray mb-6 max-w-2xl mx-auto">
              See how our AI assistant can transform your travel planning process. 
              Create your first itinerary in under 3 minutes.
            </p>
            <Link href="/itinerary-creator" className="btn-trevello-primary">
              Start Creating Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
