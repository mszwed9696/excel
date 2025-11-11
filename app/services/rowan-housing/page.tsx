/**
 * Rowan University Student Housing Service Page
 * SEO-optimized page targeting Rowan student housing keywords
 */

import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import Card from '@/components/Card';
import CTA from '@/components/CTA';
import Schema from '@/components/Schema';
import { generateServiceMetadata } from '@/lib/metadata';
import { getServiceSchema, getBreadcrumbSchema, getEducationalOrganizationSchema } from '@/lib/schema';
import { BUSINESS_INFO, ROWAN_DATA } from '@/lib/seo-config';

export const metadata: Metadata = generateServiceMetadata('rowan-housing');

export default function RowanHousingPage() {
  const breadcrumbs = [
    { name: 'Home', url: 'https://excel-realty.com' },
    { name: 'Services', url: 'https://excel-realty.com/services/rowan-housing' },
    { name: 'Rowan University Housing', url: 'https://excel-realty.com/services/rowan-housing' },
  ];

  return (
    <>
      <Schema data={getServiceSchema('rowan-housing')} />
      <Schema data={getBreadcrumbSchema(breadcrumbs)} />
      <Schema data={getEducationalOrganizationSchema()} />
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6 text-white">
                Rowan University Student Housing Specialists
              </h1>
              <p className="text-xl md:text-2xl mb-6 text-white/95">
                Off-Campus Apartments & Houses Near Rowan in Glassboro & Pitman, NJ
              </p>
              <p className="text-lg mb-8 text-white/90">
                Serving {ROWAN_DATA.students.toLocaleString()}+ Rowan students and landlords since {BUSINESS_INFO.foundingYear}. Your local experts for off-campus housing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/rowan/students" variant="secondary" size="lg">
                  Students: Find Housing
                </Button>
                <Button href="/rowan/landlords" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-600">
                  Landlords: List Property
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="section bg-secondary-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl font-bold text-primary-600 mb-2">{ROWAN_DATA.students.toLocaleString()}+</div>
                <div className="text-gray-600">Rowan Students</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl font-bold text-primary-600 mb-2">$550</div>
                <div className="text-gray-600">Avg. Rent Per Room</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl font-bold text-primary-600 mb-2">Oct-Feb</div>
                <div className="text-gray-600">Peak Leasing Season</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl font-bold text-primary-600 mb-2">Year-Round</div>
                <div className="text-gray-600">Rental Demand</div>
              </div>
            </div>
          </div>
        </section>

        {/* For Students */}
        <section className="section bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">
                  Students: Find Your Perfect Off-Campus Home
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  Moving off-campus? We specialize in helping Rowan students find safe, affordable housing close to campus.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <div>
                      <h4 className="font-semibold">Walking Distance to Campus</h4>
                      <p className="text-sm text-gray-600">Properties within 1 mile of Rowan's main campus</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <div>
                      <h4 className="font-semibold">Budget-Friendly Options</h4>
                      <p className="text-sm text-gray-600">{ROWAN_DATA.averageRent.studio} - {ROWAN_DATA.averageRent.fourBed} per month</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <div>
                      <h4 className="font-semibold">Roommate Matching Help</h4>
                      <p className="text-sm text-gray-600">Connect with other Rowan students looking for roommates</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <div>
                      <h4 className="font-semibold">Student-Friendly Leases</h4>
                      <p className="text-sm text-gray-600">August-to-August leases that match the academic calendar</p>
                    </div>
                  </div>
                </div>

                <Button href="/rowan/students" variant="primary" size="lg">
                  Browse Student Housing →
                </Button>
              </div>

              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6">Popular Neighborhoods for Rowan Students</h3>

                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-1">Downtown Glassboro</h4>
                    <p className="text-sm text-gray-600 mb-2">5-10 minute walk to campus. Restaurants, shops, and nightlife nearby.</p>
                    <p className="text-xs text-primary-600 font-medium">Average: $500-600/room</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-1">Rowan Boulevard Area</h4>
                    <p className="text-sm text-gray-600 mb-2">Right across from campus. Brand new apartments and townhomes.</p>
                    <p className="text-xs text-primary-600 font-medium">Average: $650-750/room</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-1">Pitman (Adjacent Town)</h4>
                    <p className="text-sm text-gray-600 mb-2">Quiet residential area. 5 minute drive or bike ride to campus.</p>
                    <p className="text-xs text-primary-600 font-medium">Average: $450-550/room</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-1">Whitney Avenue</h4>
                    <p className="text-sm text-gray-600 mb-2">Close to campus with free parking. Popular with upperclassmen.</p>
                    <p className="text-xs text-primary-600 font-medium">Average: $500-600/room</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* For Landlords */}
        <section className="section bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
                Landlords: Fill Your Rowan Rental Fast
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We connect your property with {ROWAN_DATA.students.toLocaleString()}+ quality student tenants
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card
                title="Professional Marketing"
                description="We list your property on all major student housing platforms and social media"
              />
              <Card
                title="Quality Tenant Screening"
                description="Background checks, co-signer verification, and rental history reviews"
              />
              <Card
                title="Year-Round Occupancy"
                description="Stay rented with our large database of Rowan students and transfers"
              />
            </div>

            <div className="mt-12 bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-center">Why Rowan Landlords Choose Us</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-secondary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    Fill vacancies in days, not weeks
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-secondary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    Access to thousands of students
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-secondary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    Professional property photos
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-secondary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    Manage showings for you
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-secondary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    Lease preparation & signing
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-secondary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    Optional property management
                  </li>
                </ul>
              </div>
              <div className="text-center mt-8">
                <Button href="/rowan/landlords" variant="secondary" size="lg">
                  List Your Rowan Property →
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Leasing Timeline */}
        <section className="section bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-8 text-center">
                When to Start Your Housing Search
              </h2>

              <div className="space-y-6">
                <div className="bg-secondary-50 p-6 rounded-lg">
                  <div className="flex items-center mb-3">
                    <div className="bg-secondary-600 text-white w-20 h-20 rounded-full flex items-center justify-center font-bold text-lg mr-4">
                      OCT-NOV
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Peak Leasing Season #1</h3>
                      <p className="text-gray-600">Most students sign leases for next August</p>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    <strong>Best selection</strong> of properties available. Landlords are actively marketing for the upcoming academic year.
                  </p>
                </div>

                <div className="bg-primary-50 p-6 rounded-lg">
                  <div className="flex items-center mb-3">
                    <div className="bg-primary-600 text-white w-20 h-20 rounded-full flex items-center justify-center font-bold text-lg mr-4">
                      JAN-FEB
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Peak Leasing Season #2</h3>
                      <p className="text-gray-600">Second wave of lease signings</p>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    Students who waited often find great deals as landlords want to fill remaining units.
                  </p>
                </div>

                <div className="bg-gray-100 p-6 rounded-lg">
                  <div className="flex items-center mb-3">
                    <div className="bg-gray-600 text-white w-20 h-20 rounded-full flex items-center justify-center font-bold text-lg mr-4">
                      SUMMER
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Last-Minute Deals</h3>
                      <p className="text-gray-600">Limited availability but good negotiating power</p>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    Some units become available due to student transfers or plans changing. Often discounted.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <CTA
          title="Ready to Find Your Rowan Housing Solution?"
          description="Whether you're a student looking for off-campus housing or a landlord wanting to fill your property, we're here to help."
          primaryButtonText="Students: Find Housing"
          primaryButtonHref="/rowan/students"
          secondaryButtonText="Landlords: Get Started"
          secondaryButtonHref="/rowan/landlords"
          backgroundColor="primary"
        />
      </main>

      <Footer />
    </>
  );
}
