/**
 * Rowan Students Housing Page
 * For students seeking off-campus housing near Rowan University
 */

import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import CTA from '@/components/CTA';
import Schema from '@/components/Schema';
import { BUSINESS_INFO, ROWAN_DATA } from '@/lib/seo-config';
import { generateRowanMetadata } from '@/lib/metadata';
import { getServiceSchema, getBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = generateRowanMetadata('students');

export default function RowanStudentsPage() {
  const breadcrumbs = [
    { name: 'Home', url: 'https://excel-realty.com' },
    { name: 'Rowan Housing', url: 'https://excel-realty.com/rowan' },
    { name: 'For Students', url: 'https://excel-realty.com/rowan/students' },
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
                Rowan University Off-Campus Housing for Students
              </h1>
              <p className="text-xl md:text-2xl mb-6 text-white/95">
                Find Your Perfect House or Apartment Near Campus
              </p>
              <p className="text-lg mb-8 text-white/90">
                Budget-friendly options starting at $500/month | Walking distance to campus | Roommate matching | Flexible leases
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/contact" variant="secondary" size="lg">
                  Browse Available Housing →
                </Button>
                <a href={`tel:${BUSINESS_INFO.phone}`} className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white rounded-lg hover:bg-white hover:text-primary-600 transition-all">
                  Call: {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Options */}
        <section className="section bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-8 text-center">Popular Student Housing Options</h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                <div className="bg-white border-2 border-primary-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
                  <div className="text-primary-600 font-bold text-sm mb-2">MOST POPULAR</div>
                  <h3 className="text-2xl font-bold mb-2">Shared Houses</h3>
                  <div className="text-3xl font-bold text-secondary-600 mb-4">$500-700<span className="text-lg text-gray-600">/room</span></div>
                  <ul className="space-y-2 text-sm mb-6">
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      3-6 bedrooms
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      Walking distance to campus
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      Free parking
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      Social atmosphere
                    </li>
                  </ul>
                  <p className="text-xs text-gray-600">Perfect for groups of friends</p>
                </div>

                <div className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
                  <div className="text-gray-600 font-bold text-sm mb-2">QUIET & PRIVATE</div>
                  <h3 className="text-2xl font-bold mb-2">1-Bedroom Apartments</h3>
                  <div className="text-3xl font-bold text-secondary-600 mb-4">$900-1,200<span className="text-lg text-gray-600">/mo</span></div>
                  <ul className="space-y-2 text-sm mb-6">
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      Private space
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      Modern kitchens
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      On-site laundry
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      Great for grad students
                    </li>
                  </ul>
                  <p className="text-xs text-gray-600">Ideal for serious studiers</p>
                </div>

                <div className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
                  <div className="text-gray-600 font-bold text-sm mb-2">BEST VALUE</div>
                  <h3 className="text-2xl font-bold mb-2">2-3 Bedroom Units</h3>
                  <div className="text-3xl font-bold text-secondary-600 mb-4">$1,200-1,800<span className="text-lg text-gray-600">/mo</span></div>
                  <ul className="space-y-2 text-sm mb-6">
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      2-3 roommates
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      Split rent = lower cost
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      Private bedrooms
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      More amenities
                    </li>
                  </ul>
                  <p className="text-xs text-gray-600">Great balance of cost & comfort</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Free Services for Students */}
        <section className="section bg-secondary-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4 text-center">Free Services for Rowan Students</h2>
              <p className="text-xl text-gray-600 text-center mb-12">We make finding off-campus housing easy and stress-free</p>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mr-4">1</div>
                    <h3 className="text-2xl font-bold">Roommate Matching</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Don't have roommates yet? We'll connect you with other Rowan students looking for housing.
                    Build your perfect roommate group before you even start searching for houses.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 text-secondary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      Match by budget preferences
                    </li>
                    <li className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 text-secondary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      Similar lifestyle interests
                    </li>
                    <li className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 text-secondary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      Same academic schedule
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mr-4">2</div>
                    <h3 className="text-2xl font-bold">Virtual Tours</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Can't visit in person? We offer video tours and live virtual walkthroughs of all our properties.
                    Browse houses from your dorm room or even from home over break.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 text-secondary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      Recorded video tours
                    </li>
                    <li className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 text-secondary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      Live FaceTime showings
                    </li>
                    <li className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 text-secondary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      Ask questions in real-time
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mr-4">3</div>
                    <h3 className="text-2xl font-bold">Cosigner Help</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    First time renting? No credit history? No problem. We work with parents and cosigners to make
                    the application process smooth and straightforward.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 text-secondary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      Parent-friendly process
                    </li>
                    <li className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 text-secondary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      Clear requirements explained
                    </li>
                    <li className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 text-secondary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      Digital signing available
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mr-4">4</div>
                    <h3 className="text-2xl font-bold">Move-In Coordination</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    We coordinate your move-in around Rowan's academic calendar. Get your keys when you need them,
                    with utilities already set up and ready to go.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 text-secondary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      Flexible move-in dates
                    </li>
                    <li className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 text-secondary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      Utilities setup assistance
                    </li>
                    <li className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 text-secondary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      24/7 maintenance support
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Neighborhoods */}
        <section className="section bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-8 text-center">Popular Student Neighborhoods</h2>

              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-3">Downtown Glassboro</h3>
                  <p className="text-gray-700 mb-4">
                    <strong>Walking Distance to Campus</strong> | 5-15 minute walk to academic buildings
                  </p>
                  <p className="text-gray-600 mb-4">
                    The most popular area for Rowan students. Close to campus, restaurants, bars, and shopping.
                    Mix of houses and apartment buildings. Social atmosphere perfect for undergrads who want to
                    be in the center of everything.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">Walking to campus</span>
                    <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">Restaurants nearby</span>
                    <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">Active nightlife</span>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-3">Pitman</h3>
                  <p className="text-gray-700 mb-4">
                    <strong>Quiet & Affordable</strong> | 10 minute drive to campus
                  </p>
                  <p className="text-gray-600 mb-4">
                    Charming small town adjacent to Glassboro. Quieter atmosphere ideal for grad students and
                    serious studiers. More affordable than downtown Glassboro. Historic downtown with unique shops
                    and cafes. Great option if you have a car.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full text-sm">Lower rent</span>
                    <span className="bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full text-sm">Quiet environment</span>
                    <span className="bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full text-sm">Car recommended</span>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-3">Mullica Hill & Williamstown</h3>
                  <p className="text-gray-700 mb-4">
                    <strong>Newer Construction</strong> | 15-20 minute drive to campus
                  </p>
                  <p className="text-gray-600 mb-4">
                    Modern apartment complexes with amenities like pools, gyms, and parking. More suburban feel.
                    Great for students with cars who want newer buildings and more space. Popular with grad students,
                    older undergrads, and those who prefer quieter surroundings.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">Modern apartments</span>
                    <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">Amenities included</span>
                    <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">Car required</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lease Timing Tips */}
        <section className="section bg-primary-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold font-serif mb-6 text-center">When to Start Your Housing Search</h2>

              <div className="bg-white p-8 rounded-lg shadow-md mb-8">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-secondary-600 mb-2">November - January</div>
                    <div className="font-semibold mb-2">BEST TIME</div>
                    <p className="text-sm text-gray-600">
                      Maximum selection. Landlords list properties 6-8 months before next school year.
                      Get first pick of the best houses.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary-600 mb-2">February - April</div>
                    <div className="font-semibold mb-2">STILL GOOD</div>
                    <p className="text-sm text-gray-600">
                      Good selection remains. Many quality options available. Best balance of
                      selection and not rushing your decision.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gray-600 mb-2">May - August</div>
                    <div className="font-semibold mb-2">LIMITED</div>
                    <p className="text-sm text-gray-600">
                      Fewer options but deals possible. Landlords may negotiate on remaining properties.
                      Good for last-minute housing needs.
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-lg text-gray-700 mb-6">
                  <strong>Pro Tip:</strong> Start your search early, but don't feel pressured. We add new listings
                  throughout the year and can help you find housing even at the last minute.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <section className="section bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <h2>Your Rowan University Off-Campus Housing Partner</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Finding the right off-campus housing at Rowan University is one of the most important decisions you'll
                make during your college years. {BUSINESS_INFO.name} specializes in helping Rowan students find
                houses and apartments in Glassboro, Pitman, and surrounding areas that fit their budget, lifestyle,
                and academic needs.
              </p>

              <h3>Why Students Choose Excel Realty Group</h3>
              <p className="text-gray-700">
                We've been serving Rowan students for over 15 years. We understand student budgets, flexible lease
                needs, roommate dynamics, and the Rowan academic calendar. Whether you're a freshman moving off-campus
                for the first time or a senior looking for your final year house, we make the process easy and stress-free.
              </p>

              <h3>More Than Just Housing - We're Your Rowan Resource</h3>
              <p className="text-gray-700">
                Beyond finding you a great place to live, we're here to support your entire Rowan experience. Need
                help finding roommates? We'll connect you. Questions about which neighborhoods are best? We know them
                all. Worried about the lease process? We'll walk you through every step. Our goal is to make your
                off-campus housing search as easy as possible so you can focus on your studies and enjoy your time at Rowan.
              </p>
            </div>
          </div>
        </section>

        <CTA
          title="Ready to Find Your Perfect Rowan Housing?"
          description="Browse available houses and apartments or contact us to discuss your needs. We're here to help!"
          primaryButtonText="Browse Available Housing"
          primaryButtonHref="/contact"
          secondaryButtonText="Learn More About Rowan Housing"
          secondaryButtonHref="/rowan/guide"
        />
      </main>

      <Footer />
    </>
  );
}
