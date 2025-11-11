/**
 * Investment Properties Service Page
 * SEO-optimized page for real estate investors
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

export const metadata: Metadata = generateServiceMetadata('investment');

export default function InvestmentPage() {
  const breadcrumbs = [
    { name: 'Home', url: 'https://excel-realty.com' },
    { name: 'Services', url: 'https://excel-realty.com/services/investment' },
    { name: 'Investment Properties', url: 'https://excel-realty.com/services/investment' },
  ];

  return (
    <>
      <Schema data={getServiceSchema('investment')} />
      <Schema data={getBreadcrumbSchema(breadcrumbs)} />
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-secondary-600 to-secondary-700 text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6 text-white">
                Build Wealth Through Southern NJ Real Estate Investments
              </h1>
              <p className="text-xl md:text-2xl mb-6 text-white/95">
                Cash-Flowing Rentals | Fix & Flip Opportunities | Multi-Family Properties
              </p>
              <p className="text-lg mb-8 text-white/90">
                Expert investment analysis and property sourcing across 30+ Southern New Jersey towns. From starter properties to large portfolios.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/contact" variant="primary" size="lg">
                  Find Investment Properties
                </Button>
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white rounded-lg hover:bg-white hover:text-secondary-600 transition-all"
                >
                  Call {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Investment Types */}
        <section className="section bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
                Investment Property Opportunities
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Whether you're buying your first rental or growing your portfolio, we have opportunities that match your goals
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card
                title="💰 Single-Family Rentals"
                description="$100K-$300K properties with strong rental demand. Ideal for first-time investors. Typical cash-on-cash returns: 8-12%."
              />
              <Card
                title="🏢 Multi-Family Properties"
                description="Duplexes, triplexes, and small apartment buildings. Scale faster with multiple units. Returns: 10-15%+"
              />
              <Card
                title="🔨 Fix & Flip Opportunities"
                description="Distressed properties with high profit potential. We connect you with contractors and help analyze deals."
              />
              <Card
                title="🎓 Student Housing"
                description="Rowan University rentals with year-round demand. Higher rents, strong occupancy. Returns: 12-18%"
              />
              <Card
                title="📈 Value-Add Properties"
                description="Properties you can improve to force appreciation. Renovate, refinance, and build equity fast."
              />
              <Card
                title="🏘️ Turnkey Rentals"
                description="Already rented, cash-flowing properties. Perfect for hands-off investors. Immediate income."
              />
            </div>
          </div>
        </section>

        {/* Why Invest in Southern NJ */}
        <section className="section bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-8 text-center">
                Why Invest in Southern New Jersey?
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <svg className="w-6 h-6 text-secondary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    Affordable Entry Points
                  </h3>
                  <p className="text-gray-700">
                    Single-family homes start under $150K. Build a portfolio without massive capital requirements. Lower prices = lower barriers to entry.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <svg className="w-6 h-6 text-secondary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    Strong Rental Demand
                  </h3>
                  <p className="text-gray-700">
                    Rowan University brings 19,600+ students. Plus working professionals, families, and retirees. Low vacancy rates across most markets.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <svg className="w-6 h-6 text-secondary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    Proximity to Philadelphia
                  </h3>
                  <p className="text-gray-700">
                    25-45 minutes to Philly. Commuters want affordable housing outside the city. Growing population spillover creates appreciation potential.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <svg className="w-6 h-6 text-secondary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    Landlord-Friendly State
                  </h3>
                  <p className="text-gray-700">
                    NJ eviction process is straightforward. Strong property rights. Ability to screen tenants thoroughly and enforce lease terms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Investment Services */}
        <section className="section bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
                How We Help Real Estate Investors Succeed
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-6">Property Sourcing</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span>Off-market deals before they hit MLS</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span>Distressed properties from motivated sellers</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span>Foreclosures, estate sales, divorce sales</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span>Weekly alerts matching your criteria</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-secondary-50 to-primary-50 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-6">Investment Analysis</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-secondary-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span>Detailed cash flow projections</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-secondary-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span>Rental comps and market rent analysis</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-secondary-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span>Repair cost estimates</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-secondary-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span>ROI, cap rate, cash-on-cash return calculations</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-secondary-50 to-primary-50 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-6">Portfolio Management</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-secondary-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span>Full property management services</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-secondary-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span>Tenant placement and screening</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-secondary-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span>Rent collection and accounting</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-secondary-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span>Maintenance coordination</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-6">Network & Resources</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span>Investor-friendly lender referrals</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span>Trusted contractor network</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span>Title company and attorney connections</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span>Insurance and inspection referrals</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Best Markets for Investment */}
        <section className="section bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
                Top Southern NJ Markets for Investment
              </h2>
              <p className="text-xl text-gray-600">
                Each market offers unique opportunities for investors
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2 text-primary-700">Glassboro</h3>
                <p className="text-sm text-gray-600 mb-3">Rowan University student housing capital</p>
                <ul className="text-sm space-y-1 text-gray-700">
                  <li>• Entry: $100K-$250K</li>
                  <li>• Student demand</li>
                  <li>• High occupancy</li>
                  <li>• 10-15% returns</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2 text-primary-700">Moorestown</h3>
                <p className="text-sm text-gray-600 mb-3">Luxury market with strong appreciation</p>
                <ul className="text-sm space-y-1 text-gray-700">
                  <li>• Entry: $300K-$500K+</li>
                  <li>• Top schools</li>
                  <li>• Appreciation focus</li>
                  <li>• 6-10% returns</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2 text-primary-700">Vineland</h3>
                <p className="text-sm text-gray-600 mb-3">Affordable multi-family opportunities</p>
                <ul className="text-sm space-y-1 text-gray-700">
                  <li>• Entry: $80K-$200K</li>
                  <li>• Working class rentals</li>
                  <li>• High cash flow</li>
                  <li>• 12-18% returns</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2 text-primary-700">Mount Laurel</h3>
                <p className="text-sm text-gray-600 mb-3">Corporate rentals and professionals</p>
                <ul className="text-sm space-y-1 text-gray-700">
                  <li>• Entry: $200K-$350K</li>
                  <li>• Quality tenants</li>
                  <li>• Stable demand</li>
                  <li>• 8-12% returns</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2 text-primary-700">Deptford</h3>
                <p className="text-sm text-gray-600 mb-3">Growing suburban market near retail</p>
                <ul className="text-sm space-y-1 text-gray-700">
                  <li>• Entry: $150K-$280K</li>
                  <li>• Family rentals</li>
                  <li>• Employment centers</li>
                  <li>• 9-13% returns</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2 text-primary-700">Washington Township</h3>
                <p className="text-sm text-gray-600 mb-3">Strong schools attract families</p>
                <ul className="text-sm space-y-1 text-gray-700">
                  <li>• Entry: $180K-$320K</li>
                  <li>• School district premium</li>
                  <li>• Low turnover</li>
                  <li>• 7-11% returns</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <CTA
          title="Ready to Start Building Your Real Estate Portfolio?"
          description={`Let ${BUSINESS_INFO.name} help you find cash-flowing investment properties in Southern New Jersey. Schedule a consultation today.`}
          primaryButtonText="Find Investment Properties"
          primaryButtonHref="/contact"
          secondaryButtonText="View All Towns"
          secondaryButtonHref="/towns"
          backgroundColor="secondary"
        />
      </main>

      <Footer />
    </>
  );
}
