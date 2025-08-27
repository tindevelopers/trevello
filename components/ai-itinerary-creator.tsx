
'use client'

import { useState } from 'react'
import { 
  Bot, 
  Send, 
  Loader, 
  MapPin, 
  Calendar, 
  DollarSign, 
  Users,
  Sparkles,
  Download,
  Share,
  Copy
} from 'lucide-react'

interface ItineraryFormData {
  agentEmail: string
  clientName: string
  destination: string
  duration: string
  budget: string
  travelStyle: string
  specialRequests: string
}

interface GeneratedItinerary {
  itinerary: string
  destination: string
  clientName: string
  duration: string
}

export default function AIItineraryCreator() {
  const [formData, setFormData] = useState<ItineraryFormData>({
    agentEmail: '',
    clientName: '',
    destination: '',
    duration: '',
    budget: '',
    travelStyle: '',
    specialRequests: ''
  })

  const [generatedItinerary, setGeneratedItinerary] = useState<GeneratedItinerary | null>(null)
  const [isGenerating, setIsGenerating] = useState(false)
  const [progress, setProgress] = useState(0)
  
  // Test data for development
  const testData: ItineraryFormData = {
    agentEmail: 'agent@trevello.com',
    clientName: 'Sarah & Michael Johnson',
    destination: 'Barcelona, Spain',
    duration: '5 days / 4 nights',
    budget: '$2,500 - $5,000 per person',
    travelStyle: 'Cultural Immersion',
    specialRequests: 'Love architecture and local food scene. Interested in Gaudi buildings and authentic tapas experiences. No dietary restrictions.'
  }

  const fillTestData = () => {
    setFormData(testData)
  }

  const travelStyles = [
    'Luxury Travel',
    'Adventure Travel',
    'Cultural Immersion',
    'Relaxation & Spa',
    'Family-Friendly',
    'Budget-Conscious',
    'Eco-Tourism',
    'Food & Wine',
    'Business Travel'
  ]

  const budgetRanges = [
    'Under $1,000 per person',
    '$1,000 - $2,500 per person',
    '$2,500 - $5,000 per person', 
    '$5,000 - $10,000 per person',
    'Over $10,000 per person',
    'Budget flexible'
  ]

  const handleInputChange = (field: keyof ItineraryFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleGenerateItinerary = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsGenerating(true)
    setProgress(0)
    setGeneratedItinerary(null)

    // Simulate progress during generation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev < 90) return prev + Math.random() * 10
        return prev
      })
    }, 500)

    try {
      console.log('Starting itinerary generation...', formData)
      
      const response = await fetch('/api/generate-itinerary', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      clearInterval(progressInterval)

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: 'Unknown error' }))
        throw new Error(errorData?.error || `HTTP ${response.status}`)
      }

      const data = await response.json()
      console.log('API Response:', data)

      if (data?.status === 'completed' && data?.result) {
        setGeneratedItinerary(data.result)
        setProgress(100)
        setIsGenerating(false)
      } else if (data?.error) {
        throw new Error(data.error)
      } else {
        throw new Error('Invalid response format')
      }
      
    } catch (error) {
      clearInterval(progressInterval)
      console.error('Itinerary generation error:', error)
      setIsGenerating(false)
      setProgress(0)
      
      // Show error to user
      alert(`Error generating itinerary: ${error instanceof Error ? error.message : 'Unknown error'}`)
    }
  }

  const handleShare = async () => {
    if (navigator?.share && generatedItinerary) {
      try {
        await navigator.share({
          title: `${generatedItinerary.clientName}'s ${generatedItinerary.destination} Itinerary`,
          text: generatedItinerary.itinerary,
          url: window.location.href
        })
      } catch (error) {
        // Fallback to copy
        await navigator.clipboard.writeText(generatedItinerary.itinerary)
      }
    }
  }

  const handleCopyItinerary = async () => {
    if (generatedItinerary) {
      await navigator.clipboard.writeText(generatedItinerary.itinerary)
    }
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left: Input Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-trevello-purple rounded-lg flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">AI Assistant</h2>
                <p className="text-trevello-gray">Tell me about your client's dream trip</p>
              </div>
            </div>
            
            {/* Test Button - Always visible for testing (will show in development) */}
            <button
              type="button"
              onClick={fillTestData}
              className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-600 transition-all duration-300 flex items-center space-x-2 shadow-lg border-2 border-red-600"
              title="Fill form with test data"
            >
              <Send className="w-4 h-4" />
              <span>Test Data</span>
            </button>
          </div>
          
          <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-700">
              💡 <strong>Quick Testing:</strong> Use the red "Test Data" button above to quickly fill the form with Barcelona sample data for testing the itinerary generator.
            </p>
          </div>

          <form onSubmit={handleGenerateItinerary} className="space-y-6">
            {/* Agent Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Email Address *
              </label>
              <input
                type="email"
                required
                value={formData?.agentEmail}
                onChange={(e) => handleInputChange('agentEmail', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-trevello-purple focus:border-transparent"
                placeholder="agent@trevello.com"
              />
            </div>

            {/* Client Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Client Name *
              </label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  required
                  value={formData?.clientName}
                  onChange={(e) => handleInputChange('clientName', e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-trevello-purple focus:border-transparent"
                  placeholder="Mr. & Mrs. Johnson"
                />
              </div>
            </div>

            {/* Destination */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Destination *
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  required
                  value={formData?.destination}
                  onChange={(e) => handleInputChange('destination', e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-trevello-purple focus:border-transparent"
                  placeholder="Paris, France"
                />
              </div>
            </div>

            {/* Duration */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Trip Duration *
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  required
                  value={formData?.duration}
                  onChange={(e) => handleInputChange('duration', e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-trevello-purple focus:border-transparent"
                  placeholder="7 days / 6 nights"
                />
              </div>
            </div>

            {/* Budget */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Budget Range
              </label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select
                  value={formData?.budget}
                  onChange={(e) => handleInputChange('budget', e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-trevello-purple focus:border-transparent"
                >
                  <option value="">Select budget range</option>
                  {budgetRanges?.map(range => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Travel Style */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Travel Style
              </label>
              <select
                value={formData?.travelStyle}
                onChange={(e) => handleInputChange('travelStyle', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-trevello-purple focus:border-transparent"
              >
                <option value="">Select travel style</option>
                {travelStyles?.map(style => (
                  <option key={style} value={style}>{style}</option>
                ))}
              </select>
            </div>

            {/* Special Requests */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Special Requests / Preferences
              </label>
              <textarea
                rows={4}
                value={formData?.specialRequests}
                onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-trevello-purple focus:border-transparent resize-none"
                placeholder="Any dietary restrictions, accessibility needs, special interests, or specific requests..."
              />
            </div>



            {/* Submit Button */}
            <button
              type="submit"
              disabled={isGenerating}
              className="w-full bg-trevello-purple text-white py-4 rounded-lg font-semibold hover:bg-[rgb(139,69,142)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {isGenerating ? (
                <>
                  <Loader className="w-5 h-5 animate-spin" />
                  <span>Creating Itinerary... {progress}%</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  <span>Generate AI Itinerary</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Right: Generated Itinerary */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Generated Itinerary</h2>
                <p className="text-trevello-gray">AI-crafted travel plan</p>
              </div>
            </div>
            
            {generatedItinerary && (
              <div className="flex items-center space-x-2">
                <button
                  onClick={handleCopyItinerary}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  title="Copy to clipboard"
                >
                  <Copy className="w-5 h-5 text-gray-600" />
                </button>
                <button
                  onClick={handleShare}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  title="Share itinerary"
                >
                  <Share className="w-5 h-5 text-gray-600" />
                </button>
                <button
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  title="Download PDF"
                >
                  <Download className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            )}
          </div>

          {/* Itinerary Display */}
          <div className="min-h-[500px]">
            {isGenerating && (
              <div className="flex flex-col items-center justify-center h-full py-16">
                <div className="w-16 h-16 bg-trevello-purple/10 rounded-full flex items-center justify-center mb-6">
                  <Loader className="w-8 h-8 trevello-purple animate-spin" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Creating Your Perfect Itinerary
                </h3>
                <p className="text-trevello-gray text-center mb-4">
                  Our AI is analyzing destinations, activities, and preferences to create 
                  a personalized travel experience...
                </p>
                <div className="w-full max-w-xs bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-trevello-purple h-2 rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <p className="text-sm text-trevello-gray mt-2">{progress}% Complete</p>
              </div>
            )}

            {generatedItinerary && (
              <div className="space-y-6">
                <div className="border-b pb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {generatedItinerary.clientName}'s {generatedItinerary.destination} Adventure
                  </h3>
                  <p className="text-trevello-gray">
                    {generatedItinerary.duration} | Personalized by Trevello AI
                  </p>
                </div>
                
                <div className="prose prose-gray max-w-none">
                  <div className="whitespace-pre-wrap text-gray-800 leading-relaxed">
                    {generatedItinerary.itinerary}
                  </div>
                </div>
              </div>
            )}

            {!isGenerating && !generatedItinerary && (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                  <Bot className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Ready to Create Magic?
                </h3>
                <p className="text-trevello-gray">
                  Fill out the form on the left and watch as our AI creates a detailed, 
                  personalized itinerary for your client in seconds.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
