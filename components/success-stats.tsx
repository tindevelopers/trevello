
'use client'

import { useEffect, useState, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import { TrendingUp, Users, Award, DollarSign } from 'lucide-react'

interface StatItem {
  icon: React.ComponentType<any>
  value: number
  suffix: string
  label: string
  description: string
}

const stats: StatItem[] = [
  {
    icon: DollarSign,
    value: 150,
    suffix: 'K+',
    label: 'Average Annual Revenue',
    description: 'Our top-performing agents consistently exceed industry standards'
  },
  {
    icon: Users,
    value: 2500,
    suffix: '+',
    label: 'Active Travel Advisors',
    description: 'Growing community of successful professionals worldwide'
  },
  {
    icon: TrendingUp,
    value: 85,
    suffix: '%',
    label: 'Year-over-Year Growth',
    description: 'Agent revenue increase in their first year with Trevello'
  },
  {
    icon: Award,
    value: 95,
    suffix: '%',
    label: 'Agent Satisfaction Rate',
    description: 'Industry-leading support and tools drive success'
  }
]

function AnimatedCounter({ value, duration = 2000 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const [inView] = useInView({ threshold: 0.3, triggerOnce: true })

  useEffect(() => {
    if (!inView) return

    let startTime: number | null = null
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = (timestamp - startTime) / duration

      if (progress < 1) {
        setCount(Math.floor(value * progress))
        requestAnimationFrame(animate)
      } else {
        setCount(value)
      }
    }

    requestAnimationFrame(animate)
  }, [inView, value, duration])

  return <span>{count.toLocaleString()}</span>
}

export default function SuccessStats() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  return (
    <section className="py-20 bg-white">
      <div className="section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold trevello-purple mb-4">
            Proven Success in Numbers
          </h2>
          <p className="text-xl text-trevello-gray max-w-3xl mx-auto">
            Join a thriving community of travel professionals who have transformed 
            their careers with Trevello's comprehensive support and cutting-edge tools.
          </p>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats?.map((stat, index) => {
            const Icon = stat?.icon
            return (
              <div
                key={stat?.label}
                className={`text-center p-8 rounded-xl bg-gray-50 card-hover ${
                  inView ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 bg-trevello-purple/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 trevello-purple" />
                </div>
                
                <div className="counter-animation trevello-purple mb-2">
                  <AnimatedCounter value={stat?.value || 0} />
                  {stat?.suffix}
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {stat?.label}
                </h3>
                
                <p className="text-trevello-gray text-sm leading-relaxed">
                  {stat?.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
