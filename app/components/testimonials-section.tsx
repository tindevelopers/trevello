
'use client'

import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Luxury Travel Specialist',
    location: 'San Francisco, CA',
    image: 'https://media.cntraveler.com/photos/64d573b2f3e99758036e9535/4:3/w_1648,h_1236,c_limit/Travel-Agent-GettyImages-1399720393.jpg',
    quote: 'Trevello\'s AI tools have revolutionized my business. I can now create stunning itineraries in minutes that used to take me hours. My client satisfaction has never been higher.',
    rating: 5,
    stats: { revenue: '$285K', increase: '156%' }
  },
  {
    name: 'Marcus Thompson',
    role: 'Adventure Travel Advisor',
    location: 'Denver, CO',
    image: 'https://media.wired.com/photos/6517554f09807970da6567b8/4:3/w_2180,h_1635,c_limit/Tips-For-Remote-Work-Business-1441444285.jpg',
    quote: 'The support from Trevello is unmatched. They truly care about our success and provide everything needed to thrive in this industry. Best decision I ever made.',
    rating: 5,
    stats: { revenue: '$195K', increase: '89%' }
  },
  {
    name: 'Elena Rodriguez',
    role: 'Destination Wedding Planner',
    location: 'Miami, FL',
    image: 'https://assets.entrepreneur.com/content/3x2/2000/20170925114504-MonishMalhar.jpeg?format=pjeg&auto=webp&crop=4:3',
    quote: 'The commission structure is transparent and fair. Plus, the AI assistant helps me plan incredible destination weddings that wow my couples every time.',
    rating: 5,
    stats: { revenue: '$340K', increase: '203%' }
  }
]

export default function TestimonialsSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <section className="py-20 bg-trevello-dark text-white">
      <div className="section-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Success Stories from Our Agents
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Hear from travel advisors who have transformed their careers and 
            built thriving businesses with Trevello's platform and support.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials?.map((testimonial, index) => (
            <div
              key={testimonial?.name}
              className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 card-hover ${
                inView ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="w-8 h-8 text-trevello-coral opacity-50" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial?.rating || 5)]?.map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-lg mb-8 leading-relaxed opacity-90">
                "{testimonial?.quote}"
              </blockquote>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8 py-4 border-t border-white/10">
                <div>
                  <div className="text-2xl font-bold text-trevello-coral">
                    {testimonial?.stats?.revenue}
                  </div>
                  <div className="text-sm opacity-70">Annual Revenue</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-400">
                    +{testimonial?.stats?.increase}
                  </div>
                  <div className="text-sm opacity-70">Growth Rate</div>
                </div>
              </div>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                  <Image
                    src={testimonial?.image || ''}
                    alt={`${testimonial?.name} - ${testimonial?.role}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold">{testimonial?.name}</div>
                  <div className="text-sm opacity-70">
                    {testimonial?.role}
                  </div>
                  <div className="text-xs text-trevello-coral">
                    {testimonial?.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-trevello-coral mb-2">98%</div>
              <div className="text-sm opacity-70">Would Recommend</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-trevello-coral mb-2">$2.1M</div>
              <div className="text-sm opacity-70">Total Earnings Last Month</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-trevello-coral mb-2">4.9★</div>
              <div className="text-sm opacity-70">Average Agent Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-trevello-coral mb-2">24hrs</div>
              <div className="text-sm opacity-70">Average Response Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
