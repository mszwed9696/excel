import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BUSINESS_INFO, SERVICE_AREAS } from '@/lib/seo-config';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* Hero Section - Full Screen with Background Image */}
        <section className="relative h-[calc(100vh-5rem)] min-h-[600px] flex items-center justify-center">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero-southjersey.jpg"
              alt="Southern New Jersey Landscape"
              fill
              className="object-cover"
              priority
              quality={90}
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
            <p className="text-sm md:text-base uppercase tracking-[0.3em] mb-6 font-medium">
              {BUSINESS_INFO.slogan}
            </p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold mb-12 leading-[1.1]">
              EXCEL REALTY &<br />PROPERTY MANAGEMENT
            </h1>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href="/services/buy"
                className="inline-block px-8 py-4 text-sm md:text-base uppercase tracking-wider font-semibold border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300"
              >
                Browse Homes
              </Link>
              <Link
                href="/towns"
                className="inline-block px-8 py-4 text-sm md:text-base uppercase tracking-wider font-semibold border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300"
              >
                Explore Neighborhoods
              </Link>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
              <div className="text-center">
                <h3 className="text-4xl md:text-5xl font-serif font-bold text-black mb-3">300+</h3>
                <p className="text-gray-700 text-sm uppercase tracking-wider">Homes Sold</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl md:text-5xl font-serif font-bold text-black mb-3">TOP 5%</h3>
                <p className="text-gray-700 text-sm uppercase tracking-wider">In Southern NJ</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl md:text-5xl font-serif font-bold text-black mb-3">30+ TOWNS</h3>
                <p className="text-gray-700 text-sm uppercase tracking-wider">Markets Served</p>
              </div>
            </div>
          </div>
        </section>

        {/* Buy a Home - Full Width Image Card */}
        <section className="relative h-[500px] md:h-[600px] group overflow-hidden">
          <Image
            src="/images/buy-home.jpg"
            alt="Buy a Home in Southern New Jersey"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300"></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">BUY A HOME</h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl text-center">
              Find your dream home in one of Southern New Jersey's most desirable communities
            </p>
            <Link
              href="/services/buy"
              className="inline-block px-10 py-4 text-sm uppercase tracking-wider font-semibold bg-white text-black hover:bg-secondary-600 hover:text-white transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </section>

        {/* Sell a Home - Full Width Image Card */}
        <section className="relative h-[500px] md:h-[600px] group overflow-hidden">
          <Image
            src="/images/sell-home.jpg"
            alt="Sell Your Home in Southern New Jersey"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300"></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">SELL A HOME</h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl text-center">
              Get top dollar for your property with our proven marketing strategies
            </p>
            <Link
              href="/services/sell"
              className="inline-block px-10 py-4 text-sm uppercase tracking-wider font-semibold bg-white text-black hover:bg-secondary-600 hover:text-white transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </section>

        {/* Property Management - Full Width Image Card */}
        <section className="relative h-[500px] md:h-[600px] group overflow-hidden">
          <Image
            src="/images/property-management.jpg"
            alt="Property Management Services in Southern New Jersey"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300"></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">PROPERTY MANAGEMENT</h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl text-center">
              Professional management services to maximize your rental investment
            </p>
            <Link
              href="/services/rentals"
              className="inline-block px-10 py-4 text-sm uppercase tracking-wider font-semibold bg-white text-black hover:bg-secondary-600 hover:text-white transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </section>

        {/* Featured Towns Grid - Now with images */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                Featured Communities
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore homes in Southern New Jersey's most sought-after towns
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {SERVICE_AREAS.slice(0, 8).map(town => (
                <Link
                  key={town.slug}
                  href={`/towns/${town.slug}`}
                  className="group relative h-64 overflow-hidden bg-gray-200"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/70 transition-all duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-serif font-bold mb-1">{town.name}</h3>
                    <p className="text-sm text-gray-200">{town.county}</p>
                    <p className="text-xs text-gray-300 mt-2">{town.population.toLocaleString()} residents</p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/towns"
                className="inline-block px-10 py-4 text-sm uppercase tracking-wider font-semibold border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300"
              >
                View All Towns
              </Link>
            </div>
          </div>
        </section>

        {/* Rowan University Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Rowan University Housing Specialists
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                Serving students and landlords in the Glassboro and Pitman communities for over a decade
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/rowan/students"
                  className="inline-block px-10 py-4 text-sm uppercase tracking-wider font-semibold bg-black text-white hover:bg-secondary-600 transition-all duration-300"
                >
                  Students: Find Housing
                </Link>
                <Link
                  href="/rowan/landlords"
                  className="inline-block px-10 py-4 text-sm uppercase tracking-wider font-semibold border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300"
                >
                  Landlords: List Property
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
              Contact us today for a free consultation about your real estate needs
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="inline-block px-10 py-4 text-sm uppercase tracking-wider font-semibold bg-white text-black hover:bg-secondary-600 hover:text-white transition-all duration-300"
              >
                Contact Us
              </Link>
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="inline-block px-10 py-4 text-sm uppercase tracking-wider font-semibold border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300"
              >
                {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>
        </section>

        {/* SEO Content Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <h2>Your Trusted Real Estate Partner in Southern New Jersey</h2>
              <p>
                Looking to buy, sell, or rent a home in Southern New Jersey? {BUSINESS_INFO.name} is your local real estate expert serving Gloucester County, Burlington County, Camden County, Atlantic County, and Cumberland County. With over a decade of experience in communities like Glassboro, Marlton, Moorestown, Washington Township, Vineland, and 25+ more towns, we bring unmatched local knowledge and proven results to every transaction.
              </p>

              <h3>Buying a Home in Southern NJ</h3>
              <p>
                Whether you're a first-time homebuyer searching for an affordable starter home in Williamstown or looking for a luxury property in Moorestown, our buyer specialists will guide you through the entire process. We have access to all available homes for sale in Southern New Jersey and can help you find the perfect property that fits your budget, lifestyle, and long-term goals.
              </p>

              <h3>Selling Your Southern NJ Home</h3>
              <p>
                Ready to sell your house in Glassboro, Deptford, Mount Laurel, or anywhere in South Jersey? Our proven marketing strategies, professional photography, and expert negotiation skills help our clients sell faster and for more money. Get your free home valuation today and discover what your property is worth in today's market.
              </p>

              <h3>Property Management Services</h3>
              <p>
                From single-family homes to multi-unit properties, we offer comprehensive rental and property management services throughout Southern NJ. Landlords trust us to find quality tenants, handle maintenance, and maximize rental income. Our property management division ensures your investment is protected and profitable.
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
      </main>

      <Footer />
    </>
  );
}
