/**
 * Dynamic Town Sell Page
 * Generates "Sell Your Home in [Town]" pages for all 30 towns
 */

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import CTA from '@/components/CTA';
import Schema from '@/components/Schema';
import { SERVICE_AREAS, BUSINESS_INFO } from '@/lib/seo-config';
import { generateTownMetadata } from '@/lib/metadata';
import { getServiceSchema, getBreadcrumbSchema } from '@/lib/schema';

export async function generateStaticParams() {
  return SERVICE_AREAS.map((town) => ({
    slug: town.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  return generateTownMetadata(params.slug, 'sell');
}

export default function TownSellPage({ params }: { params: { slug: string } }) {
  const town = SERVICE_AREAS.find(t => t.slug === params.slug);

  if (!town) {
    notFound();
  }

  const breadcrumbs = [
    { name: 'Home', url: 'https://excel-realty.com' },
    { name: 'Towns', url: 'https://excel-realty.com/towns' },
    { name: town.name, url: `https://excel-realty.com/towns/${town.slug}` },
    { name: 'Sell', url: `https://excel-realty.com/towns/${town.slug}/sell` },
  ];

  return (
    <>
      <Schema data={getServiceSchema('sell', town.name)} />
      <Schema data={getBreadcrumbSchema(breadcrumbs)} />
      <Header />

      <main>
        <section className="bg-gradient-to-r from-secondary-600 to-secondary-700 text-white py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6 text-white">
                Sell Your Home in {town.name}, NJ
              </h1>
              <p className="text-xl md:text-2xl mb-6 text-white/95">
                Get Top Dollar for Your {town.name} Property
              </p>
              <p className="text-lg mb-8 text-white/90">
                Professional marketing | Expert pricing | {town.county} local expertise | Proven results
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/contact" variant="primary" size="lg">
                  Get Free Home Valuation
                </Button>
                <a href={`tel:${BUSINESS_INFO.phone}`} className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white rounded-lg hover:bg-white hover:text-secondary-600 transition-all">
                  {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold font-serif mb-6">Why Sell with Us in {town.name}?</h2>

              <div className="space-y-6">
                <p className="text-lg text-gray-700">
                  Selling your {town.name} home is a major decision. You need an agent who understands the local {town.county}
                  market, knows what buyers are looking for in {town.name}, and has a proven track record of selling homes
                  fast and for top dollar. That's where {BUSINESS_INFO.name} comes in.
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-secondary-50 p-6 rounded-lg">
                    <div className="text-3xl font-bold text-secondary-600 mb-2">Fast</div>
                    <h3 className="font-semibold mb-2">Sell Quickly</h3>
                    <p className="text-sm text-gray-700">Strategic pricing and marketing gets your home sold in days, not months</p>
                  </div>

                  <div className="bg-secondary-50 p-6 rounded-lg">
                    <div className="text-3xl font-bold text-secondary-600 mb-2">$$</div>
                    <h3 className="font-semibold mb-2">Top Dollar</h3>
                    <p className="text-sm text-gray-700">Expert negotiation ensures you get the highest possible price</p>
                  </div>

                  <div className="bg-secondary-50 p-6 rounded-lg">
                    <div className="text-3xl font-bold text-secondary-600 mb-2">Local</div>
                    <h3 className="font-semibold mb-2">{town.name} Experts</h3>
                    <p className="text-sm text-gray-700">Deep knowledge of the {town.name} market and buyer preferences</p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold">Our Selling Process in {town.name}</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-semibold text-lg">Free Home Valuation</h4>
                      <p className="text-gray-600">Accurate pricing based on recent {town.name} sales and current market conditions</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-semibold text-lg">Professional Marketing</h4>
                      <p className="text-gray-600">High-quality photos, virtual tours, MLS listing, and targeted advertising to {town.name} buyers</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-semibold text-lg">Showings & Open Houses</h4>
                      <p className="text-gray-600">We handle all showings and showcase your home's best features to qualified buyers</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                    <div>
                      <h4 className="font-semibold text-lg">Negotiate & Close</h4>
                      <p className="text-gray-600">Expert negotiation to get you the best price and smooth closing process</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4">What's Your {town.name} Home Worth?</h3>
                  <p className="text-gray-700 mb-6">
                    Get a free, no-obligation home valuation from a local {town.county} expert. We'll analyze recent sales
                    in {town.name}, current market conditions, and your home's unique features to give you an accurate estimate.
                  </p>
                  <Button href="/contact" variant="secondary" size="lg">
                    Request Free Valuation →
                  </Button>
                </div>

                <h3 className="text-2xl font-bold">Why {town.name} Sellers Choose Us</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-secondary-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-gray-700"><strong>Hyper-Local Knowledge:</strong> We know {town.name} inside and out - every neighborhood, street, and what buyers are looking for</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-secondary-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-gray-700"><strong>Proven Track Record:</strong> Consistent results selling {town.name} homes fast and for top dollar</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-secondary-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-gray-700"><strong>Maximum Exposure:</strong> Your listing reaches all active buyers in {town.name} and surrounding areas</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <CTA
          title={`Ready to Sell Your ${town.name} Home?`}
          description={`Get your free home valuation and discover what your ${town.name} property is worth in today's market.`}
          primaryButtonText="Get Free Valuation"
          primaryButtonHref="/contact"
          secondaryButtonText={`Back to ${town.name}`}
          secondaryButtonHref={`/towns/${town.slug}`}
          backgroundColor="secondary"
        />
      </main>

      <Footer />
    </>
  );
}
