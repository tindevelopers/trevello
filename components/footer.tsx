
import Link from 'next/link'
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-trevello-dark-2 text-white">
      <div className="section-padding py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-trevello-purple rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">T</span>
              </div>
              <span className="text-xl font-bold">
                Trevello Travel Group
              </span>
            </Link>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Empowering travel advisors with cutting-edge technology, premium support, 
              and proven systems to build thriving travel businesses.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-trevello-coral" />
                <span className="text-gray-300">1-800-TREVELLO</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-trevello-coral" />
                <span className="text-gray-300">partners@trevello.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-6">For Agents</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/application" className="text-gray-300 hover:text-white transition-colors">
                  Apply to Join
                </Link>
              </li>
              <li>
                <Link href="/itinerary-creator" className="text-gray-300 hover:text-white transition-colors">
                  AI Tools Demo
                </Link>
              </li>
              <li>
                <Link href="/commissions" className="text-gray-300 hover:text-white transition-colors">
                  Commission Structure  
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-gray-300 hover:text-white transition-colors">
                  Agent Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-6">Resources</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/training" className="text-gray-300 hover:text-white transition-colors">
                  Training Materials
                </Link>
              </li>
              <li>
                <Link href="/webinars" className="text-gray-300 hover:text-white transition-colors">
                  Live Webinars
                </Link>
              </li>
              <li>
                <Link href="/success-stories" className="text-gray-300 hover:text-white transition-colors">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="font-semibold mb-6">Stay Updated</h3>
            <p className="text-gray-300 text-sm mb-4">
              Get the latest updates on new features, training opportunities, and industry insights.
            </p>
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-trevello-purple"
              />
              <button className="w-full btn-trevello-primary">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="section-padding py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2024 Trevello Travel Group. Empowering travel professionals worldwide.
            </div>
            <div className="flex items-center space-x-6">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
