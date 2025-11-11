/**
 * Dynamic Town Rent Page
 * Generates "Rentals in [Town]" pages for all 30 towns
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
  return generateTownMetadata(params.slug, 'rent');
}

export default function TownRentPage({ params }: { params: { slug: string } }) {
  const town = SERVICE_AREAS.find(t => t.slug === params.slug);

  if (!town) {
    notFound();
  }

  const breadcrumbs = [
    { name: 'Home', url: 'https://excel-realty.com' },
    { name: 'Towns', url: 'https://excel-realty.com/towns' },
    { name: town.name, url: `https://excel-realty.com/towns/${town.slug}` },
    { name: 'Rent', url: `https://excel-realty.com/towns/${town.slug}/rent` },
  ];

  return (
    <>
      <Schema data={getServiceSchema('rentals', town.name)} />
      <Schema data={getBreadcrumbSchema(breadcrumbs)} />
      <Header />

      <main>
        <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6 text-white">
                Apartments & Houses for Rent in {town.name}, NJ
              </h1>
              <p className="text-xl md:text-2xl mb-6 text-white/95">
                Find Your Perfect Rental in {town.name}, {town.county}
              </p>
              <p className="text-lg mb-8 text-white/90">
                Quality rentals | Property management | Landlord services | Local expertise
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/contact" variant="secondary" size="lg">
                  Find {town.name} Rentals
                </Button>
                <Button href="#landlords" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-600">
                  List Your Property
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* For Renters */}
        <section className="section bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold font-serif mb-6">Rental Properties in {town.name}</h2>

              <div className="space-y-6">
                <p className="text-lg text-gray-700">
                  Looking for an apartment or house to rent in {town.name}? {BUSINESS_INFO.name} offers a wide selection
                  of quality rental properties across {town.county}. Whether you need a 1-bedroom apartment, family home,
                  or student housing, we'll help you find the perfect place in {town.name}.
                </p>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Why Rent in {town.name}?</h3>
                  <ul className="space-y-2">
                    {town.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <h3 className="text-2xl font-bold">Types of Rentals Available in {town.name}</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border border-gray-200 p-6 rounded-lg">
                    <h4 className="font-semibold text-lg mb-2">Apartments</h4>
                    <p className="text-gray-600 text-sm mb-2">1, 2, and 3-bedroom apartments throughout {town.name}</p>
                    <p className="text-primary-600 font-medium">Starting from $900/month</p>
                  </div>

                  <div className="border border-gray-200 p-6 rounded-lg">
                    <h4 className="font-semibold text-lg mb-2">Single-Family Homes</h4>
                    <p className="text-gray-600 text-sm mb-2">Houses for rent with yards and parking</p>
                    <p className="text-primary-600 font-medium">$1,200 - $2,500/month</p>
                  </div>

                  <div className="border border-gray-200 p-6 rounded-lg">
                    <h4 className="font-semibold text-lg mb-2">Townhouses</h4>
                    <p className="text-gray-600 text-sm mb-2">Multi-level rentals with modern amenities</p>
                    <p className="text-primary-600 font-medium">$1,400 - $2,000/month</p>
                  </div>

                  <div className="border border-gray-200 p-6 rounded-lg">
                    <h4 className="font-semibold text-lg mb-2">Student Housing</h4>
                    <p className="text-gray-600 text-sm mb-2">Rooms and houses near schools/universities</p>
                    <p className="text-primary-600 font-medium">$500 - $700/room</p>
                  </div>
                </div>

                <div className="bg-primary-50 p-8 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4">Ready to Find Your {town.name} Rental?</h3>
                  <p className="text-gray-700 mb-6">
                    Browse available apartments and houses in {town.name} or contact us to discuss your rental needs.
                    We'll help you find the perfect place that fits your budget and lifestyle.
                  </p>
                  <Button href="/contact" variant="primary" size="lg">
                    Browse {town.name} Rentals →
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* For Landlords */}
        <section id="landlords" className="section bg-secondary-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold font-serif mb-6">Landlords: Fill Your {town.name} Rental Fast</h2>

              <div className="space-y-6">
                <p className="text-lg text-gray-700">
                  Own rental property in {town.name}? {BUSINESS_INFO.name} provides comprehensive property management
                  and tenant placement services to keep your {town.name} rental occupied with quality tenants.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4">Tenant Placement Services</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-secondary-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        <span>Professional marketing of your {town.name} property</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-secondary-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        <span>Comprehensive tenant screening</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-secondary-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        <span>Lease preparation and signing</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-secondary-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        <span>Move-in coordination</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4">Property Management</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-secondary-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        <span>Monthly rent collection</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-secondary-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        <span>Maintenance coordination</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-secondary-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        <span>24/7 emergency response</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-secondary-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        <span>Financial reporting</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold mb-4">List Your {town.name} Rental Property</h3>
                  <p className="text-gray-700 mb-6">
                    Contact us today to discuss property management or tenant placement for your {town.name} rental.
                    We'll keep your property occupied with quality tenants who pay on time.
                  </p>
                  <Button href="/contact" variant="secondary" size="lg">
                    Get Started →
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTA
          title={`Find Your Perfect Rental in ${town.name}`}
          description={`Browse available apartments and houses in ${town.name} or contact us to discuss your rental needs.`}
          primaryButtonText="Contact Us"
          primaryButtonHref="/contact"
          secondaryButtonText={`Back to ${town.name}`}
          secondaryButtonHref={`/towns/${town.slug}`}
        />
      </main>

      <Footer />
    </>
  );
}
