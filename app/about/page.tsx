/**
 * About Page
 * Establishes local authority and expertise
 */

import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import CTA from '@/components/CTA';
import { generateAboutMetadata } from '@/lib/metadata';
import { BUSINESS_INFO, SERVICE_AREAS } from '@/lib/seo-config';

export const metadata: Metadata = generateAboutMetadata();

export default function AboutPage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6 text-white">
                About {BUSINESS_INFO.name}
              </h1>
              <p className="text-xl md:text-2xl text-white/95 mb-6">
                {BUSINESS_INFO.slogan}
              </p>
              <p className="text-lg text-white/90">
                Serving 30+ towns across Gloucester, Burlington, Camden, Atlantic & Cumberland Counties since {BUSINESS_INFO.foundingYear}
              </p>
            </div>
          </div>
        </section>

        {/* Main Story */}
        <section className="section bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <h2>Your Local Real Estate Experts</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {BUSINESS_INFO.name} was founded on a simple principle: real estate is local, and nobody knows Southern
                  New Jersey better than those who live and work here. We're not a national franchise with agents scattered
                  across the country. We're your neighbors, deeply rooted in the communities we serve.
                </p>

                <h3>Deep Local Knowledge</h3>
                <p className="text-gray-700">
                  From the vibrant college-town atmosphere of Glassboro to the historic charm of Moorestown, the growing
                  suburbs of Marlton to the diverse opportunities in Vineland - we know these communities inside and out.
                  We don't just know the real estate markets; we know the best schools, the hidden gems, the up-and-coming
                  neighborhoods, and the unique character that makes each Southern NJ town special.
                </p>

                <h3>Comprehensive Services</h3>
                <p className="text-gray-700">
                  Whether you're a first-time homebuyer searching for an affordable starter home, a growing family needing
                  more space, an empty-nester looking to downsize, or an investor building a rental portfolio - we provide
                  expert guidance every step of the way. Our services include:
                </p>

                <ul className="space-y-2">
                  <li><strong>Buyer Representation:</strong> Full MLS access, expert negotiation, and personalized home search across all 30+ towns we serve</li>
                  <li><strong>Seller Services:</strong> Strategic pricing, professional marketing, and proven selling strategies that get homes sold fast and for top dollar</li>
                  <li><strong>Rental Services:</strong> Quality rental properties and full-service property management throughout Southern NJ</li>
                  <li><strong>Rowan University Housing:</strong> Specialized student housing expertise serving 19,600+ Rowan students and landlords</li>
                  <li><strong>Investment Properties:</strong> Deal sourcing, analysis, and portfolio management for real estate investors</li>
                </ul>

                <h3>Our Service Area</h3>
                <p className="text-gray-700">
                  We proudly serve {SERVICE_AREAS.length} towns across five Southern New Jersey counties:
                </p>

                <div className="grid md:grid-cols-2 gap-6 my-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-lg mb-3">Gloucester County</h4>
                    <p className="text-sm text-gray-700">
                      Glassboro, Washington Township, Deptford, Monroe Township, Williamstown, Mullica Hill, Pitman, Woodbury, Swedesboro, Paulsboro, Elk Township, Newfield, Clayton, Franklinville
                    </p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-lg mb-3">Burlington County</h4>
                    <p className="text-sm text-gray-700">
                      Marlton, Moorestown, Mount Laurel, Evesham, Medford, Delran, Willingboro, Mount Holly
                    </p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-lg mb-3">Camden County</h4>
                    <p className="text-sm text-gray-700">
                      Blackwood, Pine Hill, Lindenwold, Berlin, West Berlin
                    </p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-lg mb-3">Atlantic & Cumberland</h4>
                    <p className="text-sm text-gray-700">
                      Buena (Atlantic County), Vineland (Cumberland County)
                    </p>
                  </div>
                </div>

                <h3>Why Choose Us?</h3>
                <div className="grid md:grid-cols-3 gap-6 my-6">
                  <div className="text-center p-6 bg-primary-50 rounded-lg">
                    <div className="text-4xl font-bold text-primary-600 mb-2">30+</div>
                    <div className="font-semibold">Towns Served</div>
                    <p className="text-sm text-gray-600 mt-2">Comprehensive coverage across Southern NJ</p>
                  </div>

                  <div className="text-center p-6 bg-secondary-50 rounded-lg">
                    <div className="text-4xl font-bold text-secondary-600 mb-2">Local</div>
                    <div className="font-semibold">Expertise</div>
                    <p className="text-sm text-gray-600 mt-2">We live, work, and invest here</p>
                  </div>

                  <div className="text-center p-6 bg-primary-50 rounded-lg">
                    <div className="text-4xl font-bold text-primary-600 mb-2">100%</div>
                    <div className="font-semibold">Commitment</div>
                    <p className="text-sm text-gray-600 mt-2">Your success is our success</p>
                  </div>
                </div>

                <h3>Our Commitment to You</h3>
                <p className="text-gray-700">
                  At {BUSINESS_INFO.name}, you're not just a transaction - you're a neighbor, a client, and hopefully a
                  lifelong relationship. We're committed to providing honest advice, transparent communication, and results
                  that exceed your expectations. Whether you're buying your first home, selling your family property, or
                  building a real estate investment portfolio, we're here to guide you to success.
                </p>

                <p className="text-gray-700">
                  Real estate is one of life's biggest decisions. Choose a team that knows Southern New Jersey,
                  understands your goals, and has the expertise to deliver results. Choose {BUSINESS_INFO.name}.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTA
          title="Ready to Work With Us?"
          description={`Contact ${BUSINESS_INFO.name} today and experience the difference local expertise makes.`}
          primaryButtonText="Get Started"
          primaryButtonHref="/contact"
          secondaryButtonText="View Our Services"
          secondaryButtonHref="/services/buy"
        />
      </main>

      <Footer />
    </>
  );
}
