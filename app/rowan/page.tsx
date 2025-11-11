/**
 * Rowan University Housing Hub
 * Main landing page for Rowan student housing - targets all Rowan-related keywords
 */

import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import CTA from '@/components/CTA';
import Schema from '@/components/Schema';
import { BUSINESS_INFO, SERVICE_AREAS, ROWAN_DATA } from '@/lib/seo-config';
import { generateRowanMetadata } from '@/lib/metadata';
import { getServiceSchema, getBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = generateRowanMetadata();

export default function RowanHubPage() {
  const nearbyTowns = SERVICE_AREAS.filter(town =>
    ['glassboro', 'pitman', 'mullica-hill', 'williamstown', 'sewell', 'washington-township'].includes(town.slug)
  );

  const breadcrumbs = [
    { name: 'Home', url: 'https://excel-realty.com' },
    { name: 'Rowan University Housing', url: 'https://excel-realty.com/rowan' },
  ];

  return (
    <>
      <Schema data={getServiceSchema('rowan-housing')} />
      <Schema data={getBreadcrumbSchema(breadcrumbs)} />
      <Header />

      <main>
        {/* Hero */}
        <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6 text-white">
                Rowan University Off-Campus Housing Experts
              </h1>
              <p className="text-xl md:text-2xl mb-6 text-white/95">
                The #1 Choice for {ROWAN_DATA.students.toLocaleString()}+ Rowan Students & Landlords
              </p>
              <p className="text-lg mb-8 text-white/90">
                Student rentals | Landlord services | Property management | Local expertise since {BUSINESS_INFO.foundingYear}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/rowan/students" variant="secondary" size="lg">
                  Students: Find Housing →
                </Button>
                <Button href="/rowan/landlords" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-600">
                  Landlords: List Property
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section bg-secondary-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">Why Rowan Students & Landlords Choose Us</h2>
              <p className="text-xl text-gray-600">The most trusted name in Rowan University off-campus housing</p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  {ROWAN_DATA.students.toLocaleString()}+
                </div>
                <div className="text-gray-700 font-semibold">Rowan Students</div>
                <p className="text-sm text-gray-600 mt-2">Massive rental demand</p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="text-4xl font-bold text-secondary-600 mb-2">500+</div>
                <div className="text-gray-700 font-semibold">Properties Managed</div>
                <p className="text-sm text-gray-600 mt-2">Extensive local inventory</p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">24/7</div>
                <div className="text-gray-700 font-semibold">Support</div>
                <p className="text-sm text-gray-600 mt-2">Always available</p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="text-4xl font-bold text-secondary-600 mb-2">15+</div>
                <div className="text-gray-700 font-semibold">Years Experience</div>
                <p className="text-sm text-gray-600 mt-2">Trusted expertise</p>
              </div>
            </div>
          </div>
        </section>

        {/* For Students */}
        <section className="section bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">Rowan Students: Find Your Perfect Off-Campus House</h2>
                <p className="text-xl text-gray-600">Apartments, houses, and rooms near campus starting from $500/month</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4">Popular Student Housing Options</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <div>
                        <strong>Glassboro Student Houses:</strong> 3-6 bedroom houses walking distance to campus ($500-700/room)
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <div>
                        <strong>Apartments Near Rowan:</strong> 1-2 bedroom apartments in Glassboro and Pitman ($900-1400/month)
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <div>
                        <strong>Shared Rooms:</strong> Budget-friendly options for students ($400-600/month)
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-primary-50 p-8 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4">Student Services</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-secondary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <span>Free roommate matching</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-secondary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <span>Virtual tours available</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-secondary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <span>Flexible lease terms</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-secondary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <span>Cosigner assistance</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-secondary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <span>Move-in coordination</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-center">
                <Button href="/rowan/students" variant="primary" size="lg">
                  Browse Student Housing →
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* For Landlords */}
        <section className="section bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">Landlords: Fill Your Rowan Rental Fast</h2>
                <p className="text-xl text-gray-600">Guaranteed occupancy with quality student tenants</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-secondary-600 mb-3">Fast</div>
                  <h3 className="text-xl font-semibold mb-2">Quick Placement</h3>
                  <p className="text-gray-700">With {ROWAN_DATA.students.toLocaleString()}+ students seeking housing, we fill vacancies in days, not weeks</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-secondary-600 mb-3">$$</div>
                  <h3 className="text-xl font-semibold mb-2">Maximum ROI</h3>
                  <p className="text-gray-700">Strategic pricing and year-round demand means consistent rental income</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-secondary-600 mb-3">✓</div>
                  <h3 className="text-xl font-semibold mb-2">Screened Tenants</h3>
                  <p className="text-gray-700">Comprehensive background and credit checks ensure quality renters</p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
                <h3 className="text-2xl font-bold mb-6">Full-Service Property Management</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-3">Tenant Services</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        <span>Professional marketing to Rowan students</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        <span>Tenant screening and placement</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        <span>Lease preparation and signing</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        <span>Move-in/move-out coordination</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-3">Ongoing Management</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        <span>Monthly rent collection</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        <span>Maintenance coordination</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        <span>24/7 emergency response</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        <span>Financial reporting and accounting</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Button href="/rowan/landlords" variant="secondary" size="lg">
                  Learn About Landlord Services →
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Nearby Towns */}
        <section className="section bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold font-serif mb-6 text-center">Popular Towns Near Rowan University</h2>
              <p className="text-xl text-gray-600 text-center mb-8">
                We serve student housing and rentals in these towns within easy commuting distance to Rowan
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                {nearbyTowns.map(town => (
                  <div key={town.slug} className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-semibold mb-2">{town.name}</h3>
                    <p className="text-sm text-gray-600 mb-4">{town.county}</p>
                    <div className="space-y-2">
                      <a href={`/towns/${town.slug}/rent`} className="block text-primary-600 hover:text-primary-700 text-sm">
                        View {town.name} Rentals →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <section className="section bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <h2>Your Rowan University Off-Campus Housing Experts</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                With over {ROWAN_DATA.students.toLocaleString()} students attending Rowan University, the demand for quality
                off-campus housing has never been higher. {BUSINESS_INFO.name} is the leading provider of student rentals
                in Glassboro and surrounding areas, offering everything from budget-friendly shared houses to premium apartments
                within walking distance of campus.
              </p>

              <h3>Why Rowan Students Choose Excel Realty Group</h3>
              <p className="text-gray-700">
                We understand the unique needs of Rowan students. Whether you're looking for your first off-campus house
                with friends, need a quiet apartment for serious studying, or want to be right in the heart of the
                Glassboro social scene - we have options that fit your lifestyle and budget. Our team knows every street,
                every neighborhood, and what makes each property special.
              </p>

              <h3>Why Landlords Trust Us with Their Rowan Rentals</h3>
              <p className="text-gray-700">
                Property owners choose {BUSINESS_INFO.name} because we deliver results. With guaranteed occupancy,
                professional tenant screening, and full-service property management, we take the stress out of renting
                to students. Our extensive student network means your property gets maximum exposure to qualified renters,
                and our proven systems ensure on-time rent collection and property maintenance.
              </p>

              <h3>Complete Rowan Housing Solutions</h3>
              <p className="text-gray-700">
                From finding roommates to coordinating move-ins, from emergency maintenance to lease renewals - we provide
                comprehensive support throughout the entire rental process. Both students and landlords benefit from our
                local expertise, responsive service, and commitment to building long-term relationships.
              </p>
            </div>
          </div>
        </section>

        <CTA
          title="Ready to Find Rowan Housing?"
          description="Whether you're a student seeking housing or a landlord with a property to rent, we're here to help."
          primaryButtonText="Students: Find Housing"
          primaryButtonHref="/rowan/students"
          secondaryButtonText="Landlords: List Property"
          secondaryButtonHref="/rowan/landlords"
        />
      </main>

      <Footer />
    </>
  );
}
