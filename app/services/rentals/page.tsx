/**
 * Rentals & Property Management Service Page
 * SEO-optimized page for renters and landlords in Southern NJ
 */

import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import Card from '@/components/Card';
import CTA from '@/components/CTA';
import Schema from '@/components/Schema';
import { generateServiceMetadata } from '@/lib/metadata';
import { getServiceSchema, getBreadcrumbSchema } from '@/lib/schema';
import { BUSINESS_INFO, SERVICE_AREAS } from '@/lib/seo-config';

export const metadata: Metadata = generateServiceMetadata('rentals');

export default function RentalsPage() {
  const breadcrumbs = [
    { name: 'Home', url: 'https://excel-realty.com' },
    { name: 'Services', url: 'https://excel-realty.com/services/rentals' },
    { name: 'Rentals & Property Management', url: 'https://excel-realty.com/services/rentals' },
  ];

  const featuredTowns = SERVICE_AREAS.slice(0, 12);

  return (
    <>
      <Schema data={getServiceSchema('rentals')} />
      <Schema data={getBreadcrumbSchema(breadcrumbs)} />
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6 text-white">
                Rental Properties & Property Management in Southern NJ
              </h1>
              <p className="text-xl md:text-2xl mb-6 text-white/95">
                Quality Apartments & Houses for Rent | Full-Service Property Management
              </p>
              <p className="text-lg mb-8 text-white/90">
                Serving renters and landlords across Glassboro, Marlton, Moorestown, Vineland, and 26+ more Southern New Jersey towns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/contact" variant="secondary" size="lg">
                  Find a Rental
                </Button>
                <Button href="#landlords" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-600">
                  Property Management
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* For Renters */}
        <section className="section bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
                Find Your Perfect Rental in Southern NJ
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Apartments, houses, and townhomes across all price ranges
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card
                title="1-Bedroom Apartments"
                description="Perfect for singles and couples. Starting from $900/month."
              />
              <Card
                title="2-3 Bedroom Homes"
                description="Ideal for small families. Great school districts available."
              />
              <Card
                title="Student Housing"
                description="Near Rowan University. Affordable and convenient options."
              />
              <Card
                title="Luxury Rentals"
                description="Upscale properties with premium amenities."
              />
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-center">Why Rent With Us?</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <div>
                    <h4 className="font-semibold mb-1">Extensive Selection</h4>
                    <p className="text-sm text-gray-600">Access to hundreds of rental properties</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <div>
                    <h4 className="font-semibold mb-1">No Hidden Fees</h4>
                    <p className="text-sm text-gray-600">Transparent pricing and lease terms</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <div>
                    <h4 className="font-semibold mb-1">Local Expertise</h4>
                    <p className="text-sm text-gray-600">We know every neighborhood and community</p>
                  </div>
                </div>
              </div>

              <div className="text-center mt-8">
                <Button href="/contact" variant="primary" size="lg">
                  Browse Available Rentals
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* For Landlords */}
        <section id="landlords" className="section bg-secondary-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
                Full-Service Property Management
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Maximize your rental income while we handle everything
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-6">Our Property Management Services</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-secondary-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <div>
                      <h4 className="font-semibold">Tenant Screening</h4>
                      <p className="text-sm text-gray-600">Background checks, credit reports, employment verification</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-secondary-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <div>
                      <h4 className="font-semibold">Rent Collection</h4>
                      <p className="text-sm text-gray-600">Automated payments, late fee enforcement, eviction handling</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-secondary-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <div>
                      <h4 className="font-semibold">Maintenance Coordination</h4>
                      <p className="text-sm text-gray-600">24/7 emergency response, vetted contractor network</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-secondary-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <div>
                      <h4 className="font-semibold">Marketing & Leasing</h4>
                      <p className="text-sm text-gray-600">Professional photos, online listings, showing coordination</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-secondary-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <div>
                      <h4 className="font-semibold">Financial Reporting</h4>
                      <p className="text-sm text-gray-600">Monthly statements, tax documentation, expense tracking</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold mb-3">Benefits for Landlords</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ Higher occupancy rates</li>
                    <li>✓ Quality tenants who pay on time</li>
                    <li>✓ Lower vacancy periods</li>
                    <li>✓ Reduced maintenance costs</li>
                    <li>✓ Legal compliance & documentation</li>
                    <li>✓ Peace of mind - we handle the hassles</li>
                  </ul>
                </div>

                <div className="bg-primary-600 text-white p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-2">Rowan University Specialists</h4>
                  <p className="text-white/90 mb-4">
                    Own property near Rowan? We'll keep it rented year-round with quality student tenants.
                  </p>
                  <Button href="/rowan/landlords" variant="secondary" size="md">
                    Learn About Rowan Landlord Services
                  </Button>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold mb-3">Competitive Rates</h4>
                  <p className="text-gray-700">
                    Our management fees are competitive and transparent. Contact us for a custom quote based on your property.
                  </p>
                  <Button href="/contact" variant="outline" size="md" className="mt-4">
                    Request Property Management Quote
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Towns We Serve */}
        <section className="section bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
                Rental Properties Across Southern NJ
              </h2>
              <p className="text-xl text-gray-600">
                Find rentals or list your property for management in these towns:
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {featuredTowns.map(town => (
                <a
                  key={town.slug}
                  href={`/towns/${town.slug}/rent`}
                  className="text-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 hover:shadow-md transition-all"
                >
                  <h3 className="font-semibold text-primary-700">{town.name}</h3>
                  <p className="text-sm text-gray-600">{town.county}</p>
                </a>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button href="/towns" variant="outline" size="lg">
                View All 30 Towns →
              </Button>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <CTA
          title="Ready to Find Your Rental or List Your Property?"
          description={`Whether you're looking for a place to live or need professional property management, ${BUSINESS_INFO.name} has you covered.`}
          primaryButtonText="Renters: Find a Home"
          primaryButtonHref="/contact"
          secondaryButtonText="Landlords: Get Started"
          secondaryButtonHref="/contact"
        />
      </main>

      <Footer />
    </>
  );
}
