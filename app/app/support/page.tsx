
import Header from '../../components/header'
import Footer from '../../components/footer'
import { Headphones, Mail, Phone, MessageCircle, Book, Video } from 'lucide-react'

export const metadata = {
  title: 'Agent Support - Trevello Agent Platform',
  description: 'Get 24/7 support, access training resources, and connect with our dedicated team to help you succeed as a Trevello agent.',
}

export default function SupportPage() {
  const supportOptions = [
    {
      icon: Headphones,
      title: '24/7 Live Support',
      description: 'Get instant help from our dedicated support team anytime, anywhere.',
      action: 'Start Live Chat',
      available: 'Always Available'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our support specialists for complex issues.',
      action: '1-800-TREVELLO',
      available: 'Mon-Fri 8am-6pm EST'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send detailed questions and get comprehensive responses.',
      action: 'support@trevello.com',
      available: 'Response within 4 hours'
    }
  ]

  const resources = [
    {
      icon: Book,
      title: 'Knowledge Base',
      description: 'Comprehensive guides and tutorials for all platform features.',
      items: ['Getting Started Guide', 'AI Tools Tutorial', 'Commission Structure', 'Best Practices']
    },
    {
      icon: Video,
      title: 'Video Training',
      description: 'Step-by-step video tutorials and live training sessions.',
      items: ['Platform Overview', 'AI Itinerary Creation', 'Client Management', 'Success Strategies']
    },
    {
      icon: MessageCircle,
      title: 'Community Forum',
      description: 'Connect with other agents, share tips, and learn from experts.',
      items: ['Agent Discussions', 'Success Stories', 'Q&A Sessions', 'Best Practices']
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
              Agent Support Center
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              We're committed to your success. Get the support, training, and resources 
              you need to thrive as a Trevello agent.
            </p>
          </div>
        </section>

        {/* Support Options */}
        <section className="py-16 bg-white">
          <div className="section-padding">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold trevello-purple mb-4">
                Get Help When You Need It
              </h2>
              <p className="text-trevello-gray">
                Multiple ways to connect with our support team
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {supportOptions?.map((option) => {
                const Icon = option?.icon
                return (
                  <div key={option?.title} className="bg-gray-50 rounded-2xl p-8 text-center card-hover">
                    <div className="w-16 h-16 bg-trevello-purple/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 trevello-purple" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {option?.title}
                    </h3>
                    <p className="text-trevello-gray mb-6">
                      {option?.description}
                    </p>
                    <div className="font-semibold trevello-purple mb-2">
                      {option?.action}
                    </div>
                    <div className="text-sm text-gray-500">
                      {option?.available}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="py-16 bg-gray-50">
          <div className="section-padding">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold trevello-purple mb-4">
                Training & Resources
              </h2>
              <p className="text-trevello-gray">
                Everything you need to master the platform and grow your business
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {resources?.map((resource) => {
                const Icon = resource?.icon
                return (
                  <div key={resource?.title} className="bg-white rounded-2xl p-8 card-hover">
                    <div className="w-12 h-12 bg-trevello-purple/10 rounded-lg flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6 trevello-purple" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {resource?.title}
                    </h3>
                    <p className="text-trevello-gray mb-6">
                      {resource?.description}
                    </p>
                    <ul className="space-y-2">
                      {resource?.items?.map((item) => (
                        <li key={item} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-trevello-purple rounded-full mr-3" />
                          {item}
                        </li>
                      ))}
                    </ul>
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
