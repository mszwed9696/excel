import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import Card from '@/components/Card';
import TownCard from '@/components/TownCard';
import CTA from '@/components/CTA';
import { BUSINESS_INFO, SERVICE_AREAS, SERVICES } from '@/lib/seo-config';

export default function Home() {
  // Featured towns for homepage (top 12)
  const featuredTowns = SERVICE_AREAS.slice(0, 12);

  return (
    <>
      <Header />

      <main>
        {/* Hero Section - Above the Fold SEO Content */}
        <section className="relative bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500 text-white py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6 leading-tight text-white">
                Southern New Jersey's Most Trusted Real Estate Experts
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/95">
                Buy, Sell, or Rent Homes in 30+ Towns Across Gloucester, Burlington, Camden & Atlantic Counties
              </p>
              <p className="text-lg mb-10 text-white/90 max-w-3xl">
                From Glassboro to Moorestown, Marlton to Vineland - Expert local agents specializing in residential sales, rental properties, and Rowan University student housing throughout Southern NJ.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/contact" variant="secondary" size="lg">
                  Get Your Free Home Valuation
                </Button>
                <Button href="/services/buy" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-600">
                  Search Homes for Sale
                </Button>
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white hover:text-secondary-300 transition-colors"
                >
                  📞 {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Decorative wave */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white"/>
            </svg>
          </div>
        </section>

        {/* Services Section */}
        <section className="section bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
                Comprehensive Real Estate Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Whether you're buying your first home, selling your property, or looking for rental income, we provide expert guidance every step of the way.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES.map(service => (
                <Card
                  key={service.slug}
                  title={service.name}
                  description={service.description}
                  icon={service.icon}
                  href={`/services/${service.slug}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Rowan University Section - Special Focus */}
        <section className="section bg-secondary-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
                  Rowan University Housing Specialists
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  Serving 19,600+ Rowan students and landlords in Glassboro and Pitman. We're the local experts in off-campus student housing.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-secondary-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-gray-700">Student-friendly apartments near campus</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-secondary-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-gray-700">Landlord services - fill your rental fast</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-secondary-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-gray-700">Property management for student rentals</span>
                  </li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button href="/rowan/students" variant="primary">
                    Students: Find Housing
                  </Button>
                  <Button href="/rowan/landlords" variant="outline">
                    Landlords: List Property
                  </Button>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">Quick Rowan Facts</h3>
                <dl className="space-y-3">
                  <div>
                    <dt className="text-sm text-gray-600">Total Students:</dt>
                    <dd className="text-2xl font-bold text-primary-600">19,600+</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-gray-600">Average Rent (per room):</dt>
                    <dd className="text-2xl font-bold text-primary-600">$550/month</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-gray-600">Peak Leasing Months:</dt>
                    <dd className="text-lg font-semibold text-gray-700">Oct-Nov, Jan-Feb</dd>
                  </div>
                </dl>
                <Button href="/rowan/guide" variant="ghost" className="mt-6 w-full">
                  Read Complete Housing Guide →
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Towns We Serve */}
        <section className="section bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
                30+ Southern NJ Towns We Serve
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Deep local expertise across Gloucester County, Burlington County, Camden County, Atlantic County, and Cumberland County
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
              {featuredTowns.map(town => (
                <TownCard
                  key={town.slug}
                  name={town.name}
                  slug={town.slug}
                  county={town.county}
                  population={town.population}
                  highlights={town.highlights}
                />
              ))}
            </div>

            <div className="text-center">
              <Button href="/towns" variant="primary" size="lg">
                View All 30 Towns
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
                Why Choose {BUSINESS_INFO.name}?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Local expertise, proven results, and personalized service that puts your goals first
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Hyper-Local Knowledge</h3>
                <p className="text-gray-600">
                  We know every neighborhood, school district, and market trend across all 30 towns we serve
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
                <p className="text-gray-600">
                  Our clients get top dollar for their homes and find their perfect property faster
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Personalized Service</h3>
                <p className="text-gray-600">
                  You're not just a transaction - we build relationships and guide you through every step
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SEO-Rich Content Section */}
        <section className="section bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <h2>Your Trusted Real Estate Partner in Southern New Jersey</h2>
              <p>
                Looking to buy, sell, or rent a home in Southern New Jersey? {BUSINESS_INFO.name} is your local real estate expert serving Gloucester County, Burlington County, Camden County, Atlantic County, and Cumberland County. With deep roots in communities like Glassboro, Marlton, Moorestown, Washington Township, Vineland, and 25+ more towns, we bring unmatched local knowledge and proven results to every transaction.
              </p>

              <h3>Buying a Home in Southern NJ</h3>
              <p>
                Whether you're a first-time homebuyer searching for an affordable starter home in Williamstown or looking for a luxury property in Moorestown, our buyer specialists will guide you through the entire process. We have access to all available homes for sale in Southern New Jersey and can help you find the perfect property that fits your budget, lifestyle, and long-term goals.
              </p>

              <h3>Selling Your Southern NJ Home</h3>
              <p>
                Ready to sell your house in Glassboro, Deptford, Mount Laurel, or anywhere in South Jersey? Our proven marketing strategies, professional photography, and expert negotiation skills help our clients sell faster and for more money. Get your free home valuation today and discover what your property is worth in today's market.
              </p>

              <h3>Rentals & Property Management</h3>
              <p>
                From single-family homes to multi-unit properties, we offer comprehensive rental and property management services throughout Southern NJ. Landlords trust us to find quality tenants, handle maintenance, and maximize rental income. Renters choose us for our extensive selection of apartments and houses across all price ranges.
              </p>

              <h3>Rowan University Student Housing Experts</h3>
              <p>
                With over 19,600 students at Rowan University, the demand for quality off-campus housing in Glassboro and Pitman is constant. We specialize in connecting students with safe, affordable apartments near campus and helping landlords keep their properties occupied year-round. Whether you're a student looking for your first apartment or a property owner wanting to tap into the student market, we're your Rowan housing experts.
              </p>

              <h3>Communities We Serve</h3>
              <p>
                Our real estate services extend across {SERVICE_AREAS.length} Southern New Jersey towns including: {SERVICE_AREAS.map(t => t.name).join(', ')}. Each community has its own unique character, housing market, and opportunities. Our agents live and work in these communities, giving you insider knowledge you won't find anywhere else.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <CTA
          title="Ready to Make Your Move?"
          description="Whether you're buying, selling, renting, or investing - let's start your Southern NJ real estate journey today."
          primaryButtonText="Contact Us Today"
          secondaryButtonText="Search Homes"
          secondaryButtonHref="/services/buy"
          backgroundColor="primary"
          size="lg"
        />
      </main>

      <Footer />
    </>
  );
}
