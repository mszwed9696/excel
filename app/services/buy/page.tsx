/**
 * Buy a Home Service Page
 * SEO-optimized page for home buyers in Southern NJ
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

export const metadata: Metadata = generateServiceMetadata('buy');

export default function BuyPage() {
  const breadcrumbs = [
    { name: 'Home', url: 'https://excel-realty.com' },
    { name: 'Services', url: 'https://excel-realty.com/services/buy' },
    { name: 'Buy a Home', url: 'https://excel-realty.com/services/buy' },
  ];

  const featuredTowns = SERVICE_AREAS.slice(0, 15);

  return (
    <>
      <Schema data={getServiceSchema('buy')} />
      <Schema data={getBreadcrumbSchema(breadcrumbs)} />
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6 text-white">
                Find Your Dream Home in Southern New Jersey
              </h1>
              <p className="text-xl md:text-2xl mb-6 text-white/95">
                Expert buyer representation across 30+ towns in Gloucester, Burlington, Camden & Atlantic Counties
              </p>
              <p className="text-lg mb-8 text-white/90">
                From first-time buyers to luxury properties - we'll help you find the perfect home and negotiate the best deal.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/contact" variant="secondary" size="lg">
                  Start Your Home Search
                </Button>
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white rounded-lg hover:bg-white hover:text-primary-600 transition-all"
                >
                  Call {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* The Home Buying Process */}
        <section className="section bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
                Your Home Buying Journey
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We guide you through every step, from pre-approval to closing day
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card
                title="1. Get Pre-Approved"
                description="Connect with trusted lenders and understand your budget before shopping"
              />
              <Card
                title="2. Find Your Home"
                description="Search all available properties with full MLS access and expert local insights"
              />
              <Card
                title="3. Make an Offer"
                description="Strategic negotiation to get the best price and terms"
              />
              <Card
                title="4. Close the Deal"
                description="Handle inspections, appraisals, and paperwork smoothly"
              />
            </div>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="section bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">
                  Why Buyers Choose {BUSINESS_INFO.name}
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Full MLS Access</h3>
                      <p className="text-gray-600">Search every available home in Southern NJ - nothing is hidden</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Hyper-Local Expertise</h3>
                      <p className="text-gray-600">Deep knowledge of neighborhoods, schools, and market values in every town we serve</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Expert Negotiation</h3>
                      <p className="text-gray-600">Protect your interests and get the best deal possible</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">No Cost to Buyers</h3>
                      <p className="text-gray-600">Seller pays our commission - you get expert representation at no cost</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Ready to Start?</h3>
                <p className="text-gray-600 mb-6">
                  Schedule a free consultation to discuss your home buying goals and get started today.
                </p>
                <Button href="/contact" variant="primary" size="lg" fullWidth>
                  Schedule Free Consultation
                </Button>
                <p className="text-center text-gray-500 text-sm mt-4">
                  Or call us at <a href={`tel:${BUSINESS_INFO.phone}`} className="text-primary-600 font-semibold">{BUSINESS_INFO.phone}</a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Where We Buy Homes */}
        <section className="section bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
                Find Homes for Sale Across Southern NJ
              </h2>
              <p className="text-xl text-gray-600">
                We help buyers find their perfect home in these Southern New Jersey communities:
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {featuredTowns.map(town => (
                <a
                  key={town.slug}
                  href={`/towns/${town.slug}/buy`}
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

        {/* First-Time Buyer Section */}
        <section className="section bg-secondary-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6 text-center">
                First-Time Home Buyer?
              </h2>
              <p className="text-xl text-gray-700 mb-8 text-center">
                We specialize in helping first-time buyers navigate the process with confidence
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Down Payment Assistance</h3>
                  <p className="text-gray-600 text-sm">
                    Learn about NJ first-time buyer programs that can help with down payment and closing costs
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Education & Guidance</h3>
                  <p className="text-gray-600 text-sm">
                    We explain every step of the process in plain English - no confusing jargon
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Trusted Partners</h3>
                  <p className="text-gray-600 text-sm">
                    Connections to great lenders, inspectors, and attorneys who specialize in first-time buyers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <CTA
          title="Ready to Find Your Perfect Home?"
          description={`Contact ${BUSINESS_INFO.name} today to start your Southern NJ home search with an expert buyer's agent.`}
          primaryButtonText="Start Your Search"
          primaryButtonHref="/contact"
          secondaryButtonText="Browse Towns"
          secondaryButtonHref="/towns"
        />
      </main>

      <Footer />
    </>
  );
}
