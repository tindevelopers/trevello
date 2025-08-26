
import Header from '../../components/header'
import Footer from '../../components/footer'
import ContactForm from '../../components/contact-form'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export const metadata = {
  title: 'Contact Trevello - Get in Touch with Our Team',
  description: 'Contact Trevello for questions about joining our network, using our AI tools, or general support. We\'re here to help you succeed.',
}

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Send us a message and we\'ll respond within 24 hours',
      contact: 'partners@trevello.com',
      action: 'mailto:partners@trevello.com'
    },
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak with our team Monday-Friday, 8am-6pm EST',
      contact: '1-800-TREVELLO',
      action: 'tel:18008738355'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      description: 'Our headquarters in the heart of travel innovation',
      contact: 'New York, NY',
      action: '#'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      description: 'We\'re here when you need us most',
      contact: 'Mon-Fri: 8am-6pm EST',
      action: '#'
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
              Get in Touch
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Have questions about joining Trevello or using our AI tools? 
              Our dedicated team is here to support your success.
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16 bg-white">
          <div className="section-padding">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {contactMethods?.map((method) => {
                const Icon = method?.icon
                return (
                  <div key={method?.title} className="text-center">
                    <div className="w-16 h-16 bg-trevello-purple/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 trevello-purple" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {method?.title}
                    </h3>
                    <p className="text-sm text-trevello-gray mb-4">
                      {method?.description}
                    </p>
                    <div className="font-medium trevello-purple">
                      {method?.contact}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 bg-gray-50">
          <div className="section-padding">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold trevello-purple mb-4">
                  Send Us a Message
                </h2>
                <p className="text-trevello-gray">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>
              
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
