
import Header from '../../components/header'
import Footer from '../../components/footer'
import { TrendingUp, DollarSign, Award, Calculator } from 'lucide-react'

export const metadata = {
  title: 'Commission Structure - Trevello Agent Platform',
  description: 'Transparent commission rates and earnings potential for Trevello travel agents. No hidden fees, industry-leading splits.',
}

export default function CommissionsPage() {
  const commissionTiers = [
    {
      level: 'New Agent',
      salesVolume: '$0 - $50K',
      commissionRate: '65%',
      benefits: ['Base commission rate', 'AI tools included', 'Basic support'],
      highlight: false
    },
    {
      level: 'Established Agent',
      salesVolume: '$50K - $150K',
      commissionRate: '70%',
      benefits: ['Higher commission rate', 'Priority support', 'Advanced training'],
      highlight: false
    },
    {
      level: 'Elite Agent',
      salesVolume: '$150K+',
      commissionRate: '80%',
      benefits: ['Top commission rate', 'Dedicated account manager', 'Exclusive perks'],
      highlight: true
    }
  ]

  const additionalBenefits = [
    {
      icon: DollarSign,
      title: 'No Hidden Fees',
      description: 'What you see is what you get. No monthly fees, setup costs, or surprise deductions.'
    },
    {
      icon: TrendingUp,
      title: 'Performance Bonuses',
      description: 'Earn additional bonuses for hitting monthly and quarterly sales targets.'
    },
    {
      icon: Award,
      title: 'Recognition Rewards',
      description: 'Top performers receive special recognition and additional earning opportunities.'
    },
    {
      icon: Calculator,
      title: 'Transparent Reporting',
      description: 'Real-time dashboard showing earnings, commissions, and performance metrics.'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main>
        {/* Page Header */}
        <section className="bg-trevello-purple text-white py-16">
          <div className="section-padding text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Commission Structure
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Transparent, fair, and industry-leading commission rates that grow with your success.
            </p>
          </div>
        </section>

        {/* Commission Tiers */}
        <section className="py-16 bg-white">
          <div className="section-padding">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold trevello-purple mb-4">
                Earn More as You Grow
              </h2>
              <p className="text-trevello-gray">
                Our tiered commission structure rewards your success with higher rates
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {commissionTiers?.map((tier) => (
                <div 
                  key={tier?.level} 
                  className={`rounded-2xl p-8 card-hover ${
                    tier?.highlight 
                      ? 'bg-trevello-purple text-white ring-4 ring-trevello-purple/20' 
                      : 'bg-gray-50'
                  }`}
                >
                  {tier?.highlight && (
                    <div className="text-center mb-4">
                      <span className="bg-trevello-coral px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className={`text-2xl font-bold mb-2 ${tier?.highlight ? 'text-white' : 'text-gray-900'}`}>
                      {tier?.level}
                    </h3>
                    <div className={`text-sm mb-4 ${tier?.highlight ? 'text-white/80' : 'text-trevello-gray'}`}>
                      {tier?.salesVolume} annual sales
                    </div>
                    <div className={`text-4xl font-bold ${tier?.highlight ? 'text-trevello-coral' : 'trevello-purple'}`}>
                      {tier?.commissionRate}
                    </div>
                    <div className={`text-sm ${tier?.highlight ? 'text-white/80' : 'text-trevello-gray'}`}>
                      commission rate
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {tier?.benefits?.map((benefit) => (
                      <li key={benefit} className="flex items-center">
                        <div className={`w-2 h-2 rounded-full mr-3 ${
                          tier?.highlight ? 'bg-trevello-coral' : 'bg-trevello-purple'
                        }`} />
                        <span className={`text-sm ${
                          tier?.highlight ? 'text-white' : 'text-gray-600'
                        }`}>
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-trevello-gray mb-6">
                All agents start at the New Agent level and automatically advance based on annual sales volume
              </p>
              <a href="/application" className="btn-trevello-primary">
                Start Earning Today
              </a>
            </div>
          </div>
        </section>

        {/* Additional Benefits */}
        <section className="py-16 bg-gray-50">
          <div className="section-padding">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold trevello-purple mb-4">
                Beyond Commissions
              </h2>
              <p className="text-trevello-gray">
                Additional ways we support your earning potential
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {additionalBenefits?.map((benefit) => {
                const Icon = benefit?.icon
                return (
                  <div key={benefit?.title} className="bg-white rounded-xl p-6 text-center card-hover">
                    <div className="w-12 h-12 bg-trevello-purple/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 trevello-purple" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {benefit?.title}
                    </h3>
                    <p className="text-sm text-trevello-gray">
                      {benefit?.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
