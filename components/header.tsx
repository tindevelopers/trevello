
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState('')

  const navigation = [
    { name: 'Home', href: '/' },
    { 
      name: 'Join Our Network', 
      href: '/join',
      dropdown: [
        { name: 'Why Choose Trevello', href: '/why-choose' },
        { name: 'Application Process', href: '/application' },
        { name: 'Commission Structure', href: '/commissions' }
      ]
    },
    { 
      name: 'AI Tools', 
      href: '/ai-tools',
      dropdown: [
        { name: 'Itinerary Creator', href: '/itinerary-creator' },
        { name: 'Client Management', href: '/client-tools' }
      ]
    },
    { name: 'Support', href: '/support' },
    { name: 'Contact', href: '/contact' }
  ]

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="section-padding">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-trevello-purple rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">T</span>
            </div>
            <span className="text-xl font-bold trevello-purple">
              Trevello Travel Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation?.map((item) => (
              <div 
                key={item?.name}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item?.name || '')}
                onMouseLeave={() => setActiveDropdown('')}
              >
                <Link
                  href={item?.href || '#'}
                  className="text-trevello-gray hover:trevello-purple transition-colors flex items-center space-x-1"
                >
                  <span>{item?.name}</span>
                  {item?.dropdown && <ChevronDown className="w-4 h-4" />}
                </Link>
                
                {item?.dropdown && activeDropdown === item?.name && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border py-2">
                    {item?.dropdown?.map((dropdownItem) => (
                      <Link
                        key={dropdownItem?.name}
                        href={dropdownItem?.href || '#'}
                        className="block px-4 py-2 text-sm text-trevello-gray hover:bg-gray-50 hover:trevello-purple"
                      >
                        {dropdownItem?.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/application" className="btn-trevello-primary">
              Apply Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-trevello-gray" />
            ) : (
              <Menu className="w-6 h-6 text-trevello-gray" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <div className="space-y-4">
              {navigation?.map((item) => (
                <div key={item?.name}>
                  <Link
                    href={item?.href || '#'}
                    className="block text-trevello-gray hover:trevello-purple py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item?.name}
                  </Link>
                  {item?.dropdown && (
                    <div className="ml-4 space-y-2">
                      {item?.dropdown?.map((dropdownItem) => (
                        <Link
                          key={dropdownItem?.name}
                          href={dropdownItem?.href || '#'}
                          className="block text-sm text-trevello-gray hover:trevello-purple py-1"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {dropdownItem?.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Link 
                  href="/application" 
                  className="btn-trevello-primary inline-block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
