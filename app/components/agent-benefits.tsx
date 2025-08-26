
'use client'

import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Zap, 
  Shield, 
  TrendingUp, 
  Users, 
  Headphones, 
  Award,
  ArrowRight
} from 'lucide-react'

const benefits = [
  {
    icon: Zap,
    title: 'AI-Powered Tools',
    description: 'Create stunning itineraries in minutes with our advanced AI technology. Impress clients and close deals faster.',
    highlight: 'Save 5+ hours per itinerary'
  },
  {
    icon: TrendingUp,
    title: 'Premium Commission Structure',
    description: 'Earn industry-leading commissions with transparent pricing and no hidden fees. Keep more of what you earn.',
    highlight: 'Up to 80% commission splits'
  },
  {
    icon: Shield,
    title: 'Complete Business Protection',
    description: 'Professional liability insurance, legal support, and compliance guidance included at no extra cost.',
    highlight: 'Full coverage included'
  },
  {
    icon: Users,
    title: 'Thriving Community',
    description: 'Connect with 2,500+ successful travel advisors. Share insights, get advice, and grow together.',
    highlight: 'Global agent network'
  },
  {
    icon: Headphones,
    title: '24/7 Premium Support',
    description: 'Get help whenever you need it with our dedicated support team and comprehensive training resources.',
    highlight: 'Always here for you'
  },
  {
    icon: Award,
    title: 'Industry Recognition',
    description: 'Leverage Trevello\'s 30+ years of excellence and award-winning reputation to build client trust.',
    highlight: 'Award-winning partner'
  }
]

export default function AgentBenefits() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <section className="py-20 bg-gray-50">
      <div className="section-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold trevello-purple mb-6">
            Why Choose Trevello?
          </h2>
          <p className="text-xl text-trevello-gray max-w-3xl mx-auto mb-8">
            We provide everything you need to build a thriving travel business, 
            from cutting-edge technology to unmatched support.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left: Image */}
          <div className="relative">
            <div className="aspect-[4/3] relative rounded-2xl overflow-hidden">
              <Image
                src="https://images.presentationgo.com/2025/07/welcoming-consultant-client-meeting.jpg"
                alt="Professional travel consultant working with clients in modern office"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Floating Success Card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-6 shadow-xl border">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">$4.2M</div>
                  <div className="text-sm text-gray-600">Total agent earnings this month</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <h3 className="text-3xl font-bold trevello-purple mb-6">
              Build Your Dream Travel Business
            </h3>
            <p className="text-lg text-trevello-gray mb-8">
              Join thousands of successful travel advisors who have transformed their 
              careers with Trevello's comprehensive platform, premium tools, and 
              industry-leading support.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <span className="text-gray-700">No startup fees or monthly costs</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <span className="text-gray-700">Keep your existing clients and relationships</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <span className="text-gray-700">Comprehensive onboarding and training</span>
              </div>
            </div>

            <Link href="/application" className="btn-trevello-primary group">
              Start Your Application
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Benefits Grid */}
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits?.map((benefit, index) => {
            const Icon = benefit?.icon
            return (
              <div
                key={benefit?.title}
                className={`bg-white p-8 rounded-xl shadow-sm card-hover ${
                  inView ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-trevello-purple/10 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 trevello-purple" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {benefit?.title}
                </h3>
                
                <p className="text-trevello-gray mb-4">
                  {benefit?.description}
                </p>
                
                <div className="text-sm font-medium trevello-purple bg-purple-50 px-3 py-1 rounded-full inline-block">
                  {benefit?.highlight}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
