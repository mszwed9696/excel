/**
 * Dynamic Town Buy Page
 * Generates "Buy Homes in [Town]" pages for all 30 towns
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
  return generateTownMetadata(params.slug, 'buy');
}

export default function TownBuyPage({ params }: { params: { slug: string } }) {
  const town = SERVICE_AREAS.find(t => t.slug === params.slug);

  if (!town) {
    notFound();
  }

  const breadcrumbs = [
    { name: 'Home', url: 'https://excel-realty.com' },
    { name: 'Towns', url: 'https://excel-realty.com/towns' },
    { name: town.name, url: `https://excel-realty.com/towns/${town.slug}` },
    { name: 'Buy', url: `https://excel-realty.com/towns/${town.slug}/buy` },
  ];

  return (
    <>
      <Schema data={getServiceSchema('buy', town.name)} />
      <Schema data={getBreadcrumbSchema(breadcrumbs)} />
      <Header />

      <main>
        <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6 text-white">
                Buy a Home in {town.name}, NJ
              </h1>
              <p className="text-xl md:text-2xl mb-6 text-white/95">
                Find Your Perfect Home in {town.name}, {town.county}
              </p>
              <p className="text-lg mb-8 text-white/90">
                Expert buyer representation | Full MLS access | Local market expertise | {town.population.toLocaleString()} residents call {town.name} home
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/contact" variant="secondary" size="lg">
                  Start Your {town.name} Home Search
                </Button>
                <a href={`tel:${BUSINESS_INFO.phone}`} className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white rounded-lg hover:bg-white hover:text-primary-600 transition-all">
                  {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold font-serif mb-6">Why Buy a Home in {town.name}?</h2>

              <div className="space-y-6">
                <p className="text-lg text-gray-700">
                  {town.name} offers an exceptional quality of life for homebuyers. Located in {town.county}, this vibrant
                  community of {town.population.toLocaleString()} residents is known for {town.highlights.join(', ').toLowerCase()}.
                  Whether you're a first-time buyer, growing family, or looking to downsize, {town.name} has diverse housing
                  options to match your needs and budget.
                </p>

                <div className="bg-secondary-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">{town.name} Highlights:</h3>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {town.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 text-secondary-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <h3 className="text-2xl font-bold">Our Home Buying Services in {town.name}</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-lg mb-2">Full MLS Access</h4>
                    <p className="text-gray-600">Search every available home for sale in {town.name} and surrounding areas</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-lg mb-2">Local Market Expertise</h4>
                    <p className="text-gray-600">Deep knowledge of {town.name} neighborhoods, schools, and property values</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-lg mb-2">Expert Negotiation</h4>
                    <p className="text-gray-600">Get the best price and terms on your {town.name} home purchase</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-lg mb-2">Smooth Process</h4>
                    <p className="text-gray-600">From offer to closing, we handle all the details</p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold">Types of Homes Available in {town.name}</h3>
                <p className="text-gray-700">
                  The {town.name} real estate market offers a variety of housing options including single-family homes,
                  townhouses, condominiums, and luxury properties. Whether you're looking for a charming starter home,
                  a family-sized property in a top school district, or an upscale residence, {town.name} has opportunities
                  across multiple price points. Our local expertise helps you find the perfect home that matches your
                  lifestyle and investment goals.
                </p>
              </div>
            </div>
          </div>
        </section>

        <CTA
          title={`Ready to Buy Your ${town.name} Home?`}
          description={`Contact ${BUSINESS_INFO.name} today to start your home search in ${town.name}, ${town.county}.`}
          primaryButtonText="Get Started"
          primaryButtonHref="/contact"
          secondaryButtonText={`Back to ${town.name}`}
          secondaryButtonHref={`/towns/${town.slug}`}
        />
      </main>

      <Footer />
    </>
  );
}
