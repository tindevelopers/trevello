
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { 
  User, 
  Mail, 
  Phone, 
  Briefcase, 
  Target,
  Globe,
  FileText,
  CheckCircle,
  AlertCircle,
  Loader
} from 'lucide-react'

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  experience: string
  currentRole: string
  specialties: string
  motivation: string
  businessGoals: string
  referralSource: string
  linkedInProfile: string
  website: string
}

export default function AgentApplicationForm() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    experience: '',
    currentRole: '',
    specialties: '',
    motivation: '',
    businessGoals: '',
    referralSource: '',
    linkedInProfile: '',
    website: ''
  })

  const experienceOptions = [
    'New to travel industry',
    'Less than 1 year',
    '1-2 years',
    '3-5 years',
    '5+ years',
    '10+ years'
  ]

  const referralOptions = [
    'Google Search',
    'Social Media',
    'Existing Trevello Agent',
    'Industry Publication',
    'Conference/Event',
    'Word of Mouth',
    'Other'
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/agent-application', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response?.ok) {
        setSubmitStatus('success')
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          experience: '',
          currentRole: '',
          specialties: '',
          motivation: '',
          businessGoals: '',
          referralSource: '',
          linkedInProfile: '',
          website: ''
        })
        
        // Redirect to success page after 3 seconds
        setTimeout(() => {
          router.push('/application-success')
        }, 3000)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Application submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  if (submitStatus === 'success') {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Application Submitted Successfully!
        </h3>
        <p className="text-trevello-gray mb-6">
          Thank you for your interest in joining Trevello. We'll review your application 
          and get back to you within 1-2 business days.
        </p>
        <p className="text-sm text-gray-500">
          Redirecting you to next steps...
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8">
      {/* Personal Information */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
          <User className="w-5 h-5 mr-2 trevello-purple" />
          Personal Information
        </h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              First Name *
            </label>
            <input
              type="text"
              required
              value={formData?.firstName}
              onChange={(e) => handleInputChange('firstName', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-trevello-purple focus:border-transparent"
              placeholder="Enter your first name"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Last Name *
            </label>
            <input
              type="text"
              required
              value={formData?.lastName}
              onChange={(e) => handleInputChange('lastName', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-trevello-purple focus:border-transparent"
              placeholder="Enter your last name"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                required
                value={formData?.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-trevello-purple focus:border-transparent"
                placeholder="your@email.com"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number *
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="tel"
                required
                value={formData?.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-trevello-purple focus:border-transparent"
                placeholder="(555) 123-4567"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Professional Experience */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
          <Briefcase className="w-5 h-5 mr-2 trevello-purple" />
          Professional Experience
        </h3>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Experience Level *
            </label>
            <select
              required
              value={formData?.experience}
              onChange={(e) => handleInputChange('experience', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-trevello-purple focus:border-transparent"
            >
              <option value="">Select your experience level</option>
              {experienceOptions?.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Role/Position
            </label>
            <input
              type="text"
              value={formData?.currentRole}
              onChange={(e) => handleInputChange('currentRole', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-trevello-purple focus:border-transparent"
              placeholder="e.g., Independent Travel Advisor, Corporate Travel Manager"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Travel Specialties
            </label>
            <input
              type="text"
              value={formData?.specialties}
              onChange={(e) => handleInputChange('specialties', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-trevello-purple focus:border-transparent"
              placeholder="e.g., Luxury Travel, Adventure Tourism, Destination Weddings"
            />
          </div>
        </div>
      </div>

      {/* Goals & Motivation */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
          <Target className="w-5 h-5 mr-2 trevello-purple" />
          Goals & Motivation
        </h3>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Why do you want to join Trevello? *
            </label>
            <textarea
              required
              rows={4}
              value={formData?.motivation}
              onChange={(e) => handleInputChange('motivation', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-trevello-purple focus:border-transparent resize-none"
              placeholder="Tell us what motivates you and why Trevello is the right fit..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Business Goals (Optional)
            </label>
            <textarea
              rows={3}
              value={formData?.businessGoals}
              onChange={(e) => handleInputChange('businessGoals', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-trevello-purple focus:border-transparent resize-none"
              placeholder="What are your short and long-term business goals?"
            />
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
          <Globe className="w-5 h-5 mr-2 trevello-purple" />
          Additional Information
        </h3>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              How did you hear about Trevello? *
            </label>
            <select
              required
              value={formData?.referralSource}
              onChange={(e) => handleInputChange('referralSource', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-trevello-purple focus:border-transparent"
            >
              <option value="">Select referral source</option>
              {referralOptions?.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                LinkedIn Profile (Optional)
              </label>
              <input
                type="url"
                value={formData?.linkedInProfile}
                onChange={(e) => handleInputChange('linkedInProfile', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-trevello-purple focus:border-transparent"
                placeholder="https://linkedin.com/in/yourprofile"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Website/Portfolio (Optional)
              </label>
              <input
                type="url"
                value={formData?.website}
                onChange={(e) => handleInputChange('website', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-trevello-purple focus:border-transparent"
                placeholder="https://yourwebsite.com"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Error Message */}
      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
          <AlertCircle className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" />
          <p className="text-red-700 text-sm">
            There was an error submitting your application. Please try again.
          </p>
        </div>
      )}

      {/* Submit Button */}
      <div className="flex justify-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-trevello-purple text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[rgb(139,69,142)] transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center space-x-2"
        >
          {isSubmitting ? (
            <>
              <Loader className="w-5 h-5 animate-spin" />
              <span>Submitting Application...</span>
            </>
          ) : (
            <>
              <FileText className="w-5 h-5" />
              <span>Submit Application</span>
            </>
          )}
        </button>
      </div>
    </form>
  )
}
