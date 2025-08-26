
import { Suspense } from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import AgentApplicationForm from '../../components/agent-application-form'
import { UserCheck, Clock, FileText, Award } from 'lucide-react'

export const metadata = {
  title: 'Apply to Join Trevello - Start Your Travel Business Journey',
  description: 'Take the first step towards building your dream travel business. Apply to join Trevello\'s network of successful travel advisors.',
}

const applicationProcess = [
  {
    icon: FileText,
    title: 'Submit Application',
    description: 'Complete our comprehensive application form with your experience and goals.',
    timeframe: '5 minutes'
  },
  {
    icon: UserCheck,
    title: 'Initial Review',
    description: 'Our team reviews your application and experience to ensure good fit.',
    timeframe: '1-2 business days'
  },
  {
    icon: Clock,
    title: 'Interview Process',
    description: 'Brief conversation to understand your goals and answer questions.',
    timeframe: '30 minutes'
  },
  {
    icon: Award,
    title: 'Welcome & Onboarding',
    description: 'Get access to tools, training materials, and dedicated support.',
    timeframe: 'Same day approval'
  }
]

export default function ApplicationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main>
        {/* Page Header */}
        <section className="bg-trevello-purple text-white py-16">
          <div className="section-padding text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Join the Trevello Family
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Take the first step towards building your dream travel business with 
              industry-leading support, cutting-edge tools, and proven success systems.
            </p>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-16 bg-white">
          <div className="section-padding">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold trevello-purple mb-4">
                Simple 4-Step Process
              </h2>
              <p className="text-trevello-gray max-w-2xl mx-auto">
                We've streamlined our application process to get you started quickly 
                while ensuring the perfect match for long-term success.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {applicationProcess?.map((step, index) => {
                const Icon = step?.icon
                return (
                  <div key={step?.title} className="text-center">
                    <div className="relative mb-6">
                      <div className="w-16 h-16 bg-trevello-purple/10 rounded-full flex items-center justify-center mx-auto">
                        <Icon className="w-8 h-8 trevello-purple" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-trevello-purple rounded-full flex items-center justify-center text-white text-sm font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {step?.title}
                    </h3>
                    <p className="text-trevello-gray text-sm mb-2">
                      {step?.description}
                    </p>
                    <div className="text-xs font-medium trevello-purple">
                      {step?.timeframe}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="py-16 bg-gray-50">
          <div className="section-padding">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold trevello-purple mb-4">
                  Complete Your Application
                </h2>
                <p className="text-trevello-gray">
                  Tell us about your experience and goals so we can provide the best support for your success.
                </p>
              </div>
              
              <Suspense fallback={<div className="text-center py-8">Loading application form...</div>}>
                <AgentApplicationForm />
              </Suspense>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
