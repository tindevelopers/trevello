
import Link from 'next/link'
import Header from '../../components/header'
import Footer from '../../components/footer'
import { CheckCircle, Clock, Mail, Phone } from 'lucide-react'

export const metadata = {
  title: 'Application Submitted - Trevello Agent Platform',
  description: 'Thank you for applying to join Trevello. We\'ll review your application and get back to you soon.',
}

export default function ApplicationSuccessPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="py-16">
        <div className="section-padding">
          <div className="max-w-3xl mx-auto text-center">
            {/* Success Icon */}
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>

            {/* Success Message */}
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Application Submitted Successfully!
            </h1>
            
            <p className="text-xl text-trevello-gray mb-8">
              Thank you for your interest in joining the Trevello family. We're excited to 
              review your application and help you build your dream travel business.
            </p>

            {/* What's Next */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What Happens Next?</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Initial Review</h3>
                  <p className="text-sm text-trevello-gray">
                    Our team reviews your application within 1-2 business days
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-purple-600 font-bold">2</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Phone Interview</h3>
                  <p className="text-sm text-trevello-gray">
                    Brief 30-minute conversation to discuss your goals
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-green-600 font-bold">3</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Welcome Aboard</h3>
                  <p className="text-sm text-trevello-gray">
                    Access to tools, training, and dedicated support
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-trevello-purple/5 rounded-2xl p-8 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Questions? We're Here to Help
              </h3>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 trevello-purple" />
                  <span className="text-trevello-gray">partners@trevello.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 trevello-purple" />
                  <span className="text-trevello-gray">1-800-TREVELLO</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/itinerary-creator" className="btn-trevello-primary">
                Try Our AI Demo
              </Link>
              <Link href="/" className="px-8 py-3 border-2 border-trevello-purple trevello-purple rounded-lg font-semibold hover:bg-trevello-purple hover:text-white transition-all duration-300">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
