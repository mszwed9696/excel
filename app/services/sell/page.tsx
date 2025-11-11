/**
 * Sell Your Home Service Page
 * SEO-optimized page for home sellers in Southern NJ
 */

import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import Card from '@/components/Card';
import CTA from '@/components/CTA';
import Schema from '@/components/Schema';
import { generateServiceMetadata } from '@/lib/metadata';
import { getServiceSchema, getBreadcrumbSchema, getFAQSchema } from '@/lib/schema';
import { BUSINESS_INFO, SERVICE_AREAS } from '@/lib/seo-config';

export const metadata: Metadata = generateServiceMetadata('sell');

export default function SellPage() {
  const breadcrumbs = [
    { name: 'Home', url: 'https://excel-realty.com' },
    { name: 'Services', url: 'https://excel-realty.com/services/sell' },
    { name: 'Sell Your Home', url: 'https://excel-realty.com/services/sell' },
  ];

  const faqs = [
    {
      question: 'How much is my home worth?',
      answer: 'We provide a free, no-obligation home valuation using comparative market analysis of recent sales in your neighborhood. Contact us for an accurate assessment of your property\'s current market value.',
    },
    {
      question: 'How long does it take to sell a house in Southern NJ?',
      answer: 'On average, homes in Southern New Jersey sell within 30-60 days, but this varies by location, price point, and market conditions. Our strategic marketing typically sells homes faster than the market average.',
    },
    {
      question: 'What are the costs of selling my home?',
      answer: 'Typical costs include real estate commission (usually 5-6% split between agents), title fees, and any pre-listing repairs or staging. We\'ll provide a detailed net proceeds estimate upfront so you know exactly what to expect.',
    },
    {
      question: 'Should I make repairs before selling?',
      answer: 'Not always. We\'ll assess your property and recommend only the repairs that will provide a positive return on investment. Sometimes selling as-is is the better strategy.',
    },
  ];

  const featuredTowns = SERVICE_AREAS.slice(0, 15);

  return (
    <>
      <Schema data={getServiceSchema('sell')} />
      <Schema data={getBreadcrumbSchema(breadcrumbs)} />
      <Schema data={getFAQSchema(faqs)} />
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-secondary-600 to-secondary-700 text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6 text-white">
                Sell Your Southern NJ Home Fast & For Top Dollar
              </h1>
              <p className="text-xl md:text-2xl mb-6 text-white/95">
                Expert marketing, professional photography, and proven negotiation strategies
              </p>
              <p className="text-lg mb-8 text-white/90">
                Serving home sellers in Glassboro, Marlton, Moorestown, Vineland, and 26+ more Southern New Jersey towns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/contact" variant="primary" size="lg">
                  Get Your Free Home Valuation
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

        {/* Our Selling Process */}
        <section className="section bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
                Our Proven Home Selling Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We handle everything from pricing strategy to closing day
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card
                title="1. Free Home Valuation"
                description="Accurate pricing based on local market data and comparable sales"
              />
              <Card
                title="2. Strategic Marketing"
                description="Professional photos, virtual tours, MLS listing, and targeted advertising"
              />
              <Card
                title="3. Showings & Negotiation"
                description="We handle all showings and negotiate the best price and terms"
              />
              <Card
                title="4. Close the Sale"
                description="Smooth transaction from contract to closing day"
              />
            </div>
          </div>
        </section>

        {/* Why Sellers Choose Us */}
        <section className="section bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">
                  Why Sellers Choose {BUSINESS_INFO.name}
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-secondary-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Strategic Pricing</h3>
                      <p className="text-gray-600">We price your home to sell quickly while maximizing your profit</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-secondary-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Professional Marketing</h3>
                      <p className="text-gray-600">High-quality photos, virtual tours, social media ads, and MLS exposure</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-secondary-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Expert Negotiation</h3>
                      <p className="text-gray-600">We fight for every dollar and protect your interests throughout the deal</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-secondary-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Local Market Expertise</h3>
                      <p className="text-gray-600">Deep knowledge of buyer demand and pricing trends in your specific neighborhood</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">What's Your Home Worth?</h3>
                <p className="text-gray-600 mb-6">
                  Get a free, accurate home valuation from a local expert. No obligation, no pressure.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-secondary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    Comparative market analysis
                  </div>
                  <div className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-secondary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    Recent sales in your area
                  </div>
                  <div className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-secondary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    Current market conditions
                  </div>
                  <div className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-secondary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    Net proceeds estimate
                  </div>
                </div>
                <Button href="/contact" variant="secondary" size="lg" fullWidth className="mt-6">
                  Request Free Valuation
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Marketing That Works */}
        <section className="section bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
                Marketing That Sells Homes Fast
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Your home deserves maximum exposure to qualified buyers
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Professional Photography</h3>
                <p className="text-gray-600">
                  High-quality photos that showcase your home's best features
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Online Marketing</h3>
                <p className="text-gray-600">
                  MLS listing, Zillow, Realtor.com, social media ads, and targeted campaigns
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Agent Network</h3>
                <p className="text-gray-600">
                  Direct outreach to buyer's agents and our database of qualified buyers
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Where We Sell Homes */}
        <section className="section bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
                Sell Your Home in These Southern NJ Towns
              </h2>
              <p className="text-xl text-gray-600">
                Expert selling services across Gloucester, Burlington, Camden & Atlantic Counties:
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {featuredTowns.map(town => (
                <a
                  key={town.slug}
                  href={`/towns/${town.slug}/sell`}
                  className="text-center p-4 bg-white rounded-lg hover:bg-secondary-50 hover:shadow-md transition-all"
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

        {/* FAQ Section */}
        <section className="section bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-8 text-center">
                Common Questions About Selling Your Home
              </h2>

              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 pb-6">
                    <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <CTA
          title="Ready to Sell Your Home?"
          description={`Get your free home valuation and discover how ${BUSINESS_INFO.name} can help you sell fast and for top dollar.`}
          primaryButtonText="Get Free Valuation"
          primaryButtonHref="/contact"
          secondaryButtonText="Learn About Our Process"
          secondaryButtonHref="/about"
          backgroundColor="secondary"
        />
      </main>

      <Footer />
    </>
  );
}
