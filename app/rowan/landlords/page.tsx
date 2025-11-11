/**
 * Rowan Landlords Page
 * For property owners renting to Rowan University students
 */

import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import CTA from '@/components/CTA';
import Schema from '@/components/Schema';
import { BUSINESS_INFO, ROWAN_DATA } from '@/lib/seo-config';
import { generateRowanMetadata } from '@/lib/metadata';
import { getServiceSchema, getBreadcrumbSchema, getFAQSchema } from '@/lib/schema';

export const metadata: Metadata = generateRowanMetadata('landlords');

export default function RowanLandlordsPage() {
  const breadcrumbs = [
    { name: 'Home', url: 'https://excel-realty.com' },
    { name: 'Rowan Housing', url: 'https://excel-realty.com/rowan' },
    { name: 'For Landlords', url: 'https://excel-realty.com/rowan/landlords' },
  ];

  const faqs = [
    {
      question: 'How quickly can you fill my Rowan rental property?',
      answer: `With ${ROWAN_DATA.students.toLocaleString()} Rowan students seeking housing and our extensive student database, we typically fill properties within 1-3 weeks during peak season (November-April). Properties listed in summer may take 4-8 weeks but we maintain interest year-round.`,
    },
    {
      question: 'What are your property management fees?',
      answer: 'We offer flexible pricing based on services needed. Tenant placement only is typically one month\'s rent. Full property management (including rent collection, maintenance coordination, and tenant relations) is 8-10% of monthly rent. Contact us for a customized quote based on your property.',
    },
    {
      question: 'How do you screen student tenants?',
      answer: 'We conduct comprehensive screening including credit checks, background checks, rental history verification, and income verification (often from parents/cosigners). We also verify student status at Rowan and check for any university conduct issues. Our screening process ensures you get responsible, qualified tenants.',
    },
    {
      question: 'What if students damage my property?',
      answer: 'We collect security deposits and conduct thorough move-in and move-out inspections with photo documentation. Any damages beyond normal wear and tear are charged to the security deposit. We also recommend landlord insurance and can help you find appropriate coverage.',
    },
    {
      question: 'Can you handle maintenance and repairs?',
      answer: 'Yes! We have a network of trusted local contractors and handle all maintenance coordination. From emergency repairs to routine maintenance, we manage it all and keep you informed. Tenants report issues directly to us, saving you middle-of-the-night phone calls.',
    },
  ];

  return (
    <>
      <Schema data={getServiceSchema('rowan-housing')} />
      <Schema data={getBreadcrumbSchema(breadcrumbs)} />
      <Schema data={getFAQSchema(faqs)} />
      <Header />

      <main>
        {/* Hero */}
        <section className="bg-gradient-to-r from-secondary-600 to-secondary-700 text-white py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6 text-white">
                Fill Your Rowan Rental Property Fast
              </h1>
              <p className="text-xl md:text-2xl mb-6 text-white/95">
                {ROWAN_DATA.students.toLocaleString()}+ Students Need Housing - We'll Find You Quality Tenants
              </p>
              <p className="text-lg mb-8 text-white/90">
                Professional property management | Guaranteed occupancy | Screened tenants | Maximize your ROI
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/contact" variant="primary" size="lg">
                  List Your Property →
                </Button>
                <a href={`tel:${BUSINESS_INFO.phone}`} className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white rounded-lg hover:bg-white hover:text-secondary-600 transition-all">
                  {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why Rowan Rentals */}
        <section className="section bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-8 text-center">Why Invest in Rowan Student Housing?</h2>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-primary-50 p-8 rounded-lg text-center">
                  <div className="text-5xl font-bold text-primary-600 mb-3">
                    {ROWAN_DATA.students.toLocaleString()}+
                  </div>
                  <h3 className="text-xl font-bold mb-2">Students Need Housing</h3>
                  <p className="text-gray-700">
                    Massive built-in demand with Rowan's growing enrollment. Students continuously seek off-campus housing.
                  </p>
                </div>

                <div className="bg-secondary-50 p-8 rounded-lg text-center">
                  <div className="text-5xl font-bold text-secondary-600 mb-3">Year-Round</div>
                  <h3 className="text-xl font-bold mb-2">Demand</h3>
                  <p className="text-gray-700">
                    Academic calendar creates consistent 9-12 month leases. Students renew or new groups take over.
                  </p>
                </div>

                <div className="bg-primary-50 p-8 rounded-lg text-center">
                  <div className="text-5xl font-bold text-primary-600 mb-3">High ROI</div>
                  <h3 className="text-xl font-bold mb-2">Strong Returns</h3>
                  <p className="text-gray-700">
                    Student rentals command premium rents. Multiple tenants sharing rent = higher total monthly income.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-center">Market Demand Statistics</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Student Demographics</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex justify-between">
                        <span>Total Rowan Students:</span>
                        <strong>{ROWAN_DATA.students.toLocaleString()}</strong>
                      </li>
                      <li className="flex justify-between">
                        <span>Living Off-Campus (est):</span>
                        <strong>~12,000+</strong>
                      </li>
                      <li className="flex justify-between">
                        <span>New Students Each Year:</span>
                        <strong>~3,500</strong>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Average Rental Rates</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex justify-between">
                        <span>Studio Apartments:</span>
                        <strong>{ROWAN_DATA.averageRent.studio}/month</strong>
                      </li>
                      <li className="flex justify-between">
                        <span>1-Bedroom:</span>
                        <strong>{ROWAN_DATA.averageRent.oneBed}/month</strong>
                      </li>
                      <li className="flex justify-between">
                        <span>Per Room (Shared House):</span>
                        <strong>{ROWAN_DATA.averageRent.perRoom}/month</strong>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Services */}
        <section className="section bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-8 text-center">Property Management Services</h2>
              <p className="text-xl text-gray-600 text-center mb-12">
                Choose the level of service that fits your needs
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Tenant Placement */}
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <div className="bg-primary-600 text-white px-4 py-2 rounded-full inline-block mb-4">
                    <h3 className="text-xl font-bold">Tenant Placement Only</h3>
                  </div>
                  <div className="text-3xl font-bold text-secondary-600 mb-6">
                    1 Month Rent<span className="text-lg text-gray-600"> (one-time fee)</span>
                  </div>

                  <p className="text-gray-700 mb-6">
                    Perfect for hands-on landlords who want to manage their own property but need help finding quality tenants.
                  </p>

                  <h4 className="font-semibold mb-3">What's Included:</h4>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-sm">Professional listing and marketing to {ROWAN_DATA.students.toLocaleString()}+ Rowan students</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-sm">Property showings and virtual tours</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-sm">Comprehensive tenant screening (credit, background, rental history)</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-sm">Lease preparation and signing</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-sm">Move-in inspection and documentation</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-sm">Security deposit collection</span>
                    </li>
                  </ul>

                  <div className="text-center">
                    <Button href="/contact" variant="primary">
                      Get Started
                    </Button>
                  </div>
                </div>

                {/* Full Management */}
                <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-secondary-400">
                  <div className="bg-secondary-600 text-white px-4 py-2 rounded-full inline-block mb-4">
                    <h3 className="text-xl font-bold">Full Property Management</h3>
                  </div>
                  <div className="flex items-baseline gap-2 mb-6">
                    <div className="text-3xl font-bold text-secondary-600">8-10%</div>
                    <span className="text-lg text-gray-600">of monthly rent</span>
                  </div>

                  <p className="text-gray-700 mb-6">
                    Complete hands-off solution. We handle everything so you can collect rent checks and relax.
                  </p>

                  <h4 className="font-semibold mb-3">Everything in Tenant Placement, PLUS:</h4>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-secondary-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-sm">Monthly rent collection and late fee enforcement</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-secondary-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-sm">24/7 maintenance coordination and emergency response</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-secondary-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-sm">Regular property inspections</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-secondary-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-sm">Tenant communication and relations</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-secondary-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-sm">Move-out inspections and security deposit reconciliation</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-secondary-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-sm">Eviction processing if needed</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-secondary-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-sm">Monthly financial reporting and accounting</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-secondary-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-sm">Automatic tenant renewal or new placement</span>
                    </li>
                  </ul>

                  <div className="text-center">
                    <Button href="/contact" variant="secondary">
                      Get Started
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="section bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-12 text-center">How It Works</h2>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-2xl mr-6 flex-shrink-0">1</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Property Evaluation</h3>
                    <p className="text-gray-700">
                      We visit your property, assess its condition, and provide market analysis. We'll recommend
                      optimal pricing based on location, features, and current Rowan student demand. We'll also
                      suggest any improvements that could increase rent or appeal.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-2xl mr-6 flex-shrink-0">2</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Professional Marketing</h3>
                    <p className="text-gray-700">
                      We create professional listings with photos, floor plans, and virtual tours. Your property
                      gets promoted across our student network, social media, Rowan campus channels, and rental
                      websites. We target students actively searching for housing.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-2xl mr-6 flex-shrink-0">3</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Tenant Screening & Selection</h3>
                    <p className="text-gray-700">
                      We handle all showings, answer questions, and collect applications. Every applicant undergoes
                      comprehensive screening including credit, background, and references. We verify Rowan student
                      status and coordinate with parent cosigners. You get pre-qualified, vetted tenants only.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-2xl mr-6 flex-shrink-0">4</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Lease Signing & Move-In</h3>
                    <p className="text-gray-700">
                      We prepare legally compliant leases, collect deposits and first month's rent, coordinate
                      move-in timing with the academic calendar, and conduct detailed move-in inspections. Your
                      property goes from vacant to occupied seamlessly.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-2xl mr-6 flex-shrink-0">5</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Ongoing Management (If Selected)</h3>
                    <p className="text-gray-700">
                      With full management, we handle rent collection, maintenance requests, property inspections,
                      tenant issues, and everything in between. You receive monthly statements and rent payments
                      deposited directly to your account. We keep your property occupied and profitable year after year.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="section bg-secondary-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-12 text-center">Landlord Success Stories</h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mr-4">
                      JM
                    </div>
                    <div>
                      <div className="font-bold">John M.</div>
                      <div className="text-sm text-gray-600">Glassboro 6-Bedroom House</div>
                    </div>
                  </div>
                  <p className="text-gray-700 italic mb-4">
                    "I was nervous about renting to students, but Excel Realty made it effortless. They found me
                    6 responsible tenants within 2 weeks, handled all the paperwork, and have been managing the
                    property for 3 years now. Best investment decision I ever made!"
                  </p>
                  <div className="text-sm text-gray-600">
                    <strong>ROI:</strong> 12% annual return | <strong>Vacancy:</strong> 0 days in 3 years
                  </div>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-secondary-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mr-4">
                      ST
                    </div>
                    <div>
                      <div className="font-bold">Sarah T.</div>
                      <div className="text-sm text-gray-600">Pitman 2-Bedroom Apartment</div>
                    </div>
                  </div>
                  <p className="text-gray-700 italic mb-4">
                    "As an out-of-state owner, I needed someone local I could trust. Excel handles everything -
                    from finding tenants to coordinating maintenance. I get monthly reports and rent deposits
                    without any hassle. Highly recommend!"
                  </p>
                  <div className="text-sm text-gray-600">
                    <strong>Time Saved:</strong> 20+ hours/month | <strong>Occupancy:</strong> 100% since 2020
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="section bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-12 text-center">Frequently Asked Questions</h2>

              <div className="space-y-6">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                    <p className="text-gray-700">{faq.answer}</p>
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
              <h2>Maximize Your Rowan Rental Property Investment</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Owning rental property near Rowan University offers exceptional investment potential. With over
                {ROWAN_DATA.students.toLocaleString()} students and limited on-campus housing, the demand for
                quality off-campus housing remains consistently strong. {BUSINESS_INFO.name} specializes in
                connecting property owners with responsible Rowan student tenants and providing comprehensive
                property management services.
              </p>

              <h3>Why Choose Professional Property Management?</h3>
              <p className="text-gray-700">
                Managing student rentals requires unique expertise. From understanding academic calendars to
                coordinating with parent cosigners, navigating student tenant needs differs from traditional
                residential property management. Our 15+ years serving the Rowan market means we understand
                student housing inside and out. We know when to list properties, how to price them competitively,
                and how to find and retain quality student tenants.
              </p>

              <h3>Guaranteed Results</h3>
              <p className="text-gray-700">
                We're confident in our ability to fill your property because we have direct access to thousands of
                Rowan students actively searching for housing. Our established presence on campus, extensive student
                database, and proven marketing strategies ensure your property gets maximum exposure to qualified
                renters. Most properties are leased within 1-3 weeks during peak season.
              </p>
            </div>
          </div>
        </section>

        <CTA
          title="Ready to Fill Your Rowan Rental Property?"
          description="Contact us today for a free property evaluation and rental market analysis."
          primaryButtonText="Get Free Property Evaluation"
          primaryButtonHref="/contact"
          secondaryButtonText="Learn More About Services"
          secondaryButtonHref="/rowan"
          backgroundColor="secondary"
        />
      </main>

      <Footer />
    </>
  );
}
