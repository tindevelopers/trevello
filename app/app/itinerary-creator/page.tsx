
import Header from '../../components/header'
import Footer from '../../components/footer'
import AIItineraryCreator from '../../components/ai-itinerary-creator'

export const metadata = {
  title: 'AI Itinerary Creator - Trevello Agent Platform',
  description: 'Experience the power of AI-driven travel planning. Create detailed, personalized itineraries for your clients in minutes.',
}

export default function ItineraryCreatorPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main>
        {/* Page Header */}
        <section className="bg-trevello-purple text-white py-16">
          <div className="section-padding text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              AI-Powered Itinerary Creator
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Transform how you create travel itineraries. Our advanced AI creates detailed, 
              personalized travel plans in minutes, not hours.
            </p>
          </div>
        </section>

        {/* AI Creator Interface */}
        <section className="py-16">
          <div className="section-padding">
            <AIItineraryCreator />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
