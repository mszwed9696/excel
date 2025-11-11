/**
 * Dynamic Town Page
 * Generates individual pages for all 30 towns
 */

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import Card from '@/components/Card';
import CTA from '@/components/CTA';
import Schema from '@/components/Schema';
import { SERVICE_AREAS, BUSINESS_INFO } from '@/lib/seo-config';
import { generateTownMetadata } from '@/lib/metadata';
import { getTownPlaceSchema, getServiceSchema, getBreadcrumbSchema } from '@/lib/schema';

// Generate static params for all towns
export async function generateStaticParams() {
  return SERVICE_AREAS.map((town) => ({
    slug: town.slug,
  }));
}

// Generate metadata for each town
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  return generateTownMetadata(params.slug);
}

export default function TownPage({ params }: { params: { slug: string } }) {
  const town = SERVICE_AREAS.find(t => t.slug === params.slug);

  if (!town) {
    notFound();
  }

  const breadcrumbs = [
    { name: 'Home', url: 'https://excel-realty.com' },
    { name: 'Towns', url: 'https://excel-realty.com/towns' },
    { name: town.name, url: `https://excel-realty.com/towns/${town.slug}` },
  ];

  return (
    <>
      <Schema data={getTownPlaceSchema(town.slug)} />
      <Schema data={getBreadcrumbSchema(breadcrumbs)} />
      <Header />

      <main>
        {/* Hero */}
        <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <div className="text-sm text-white/80 mb-4">{town.county}</div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6 text-white">
                {town.name}, NJ Real Estate
              </h1>
              <p className="text-xl md:text-2xl mb-6 text-white/95">
                Buy, Sell, or Rent Homes in {town.name} with Local Experts
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {town.highlights.map((highlight, idx) => (
                  <span key={idx} className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                    {highlight}
                  </span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href={`/towns/${town.slug}/buy`} variant="secondary" size="lg">
                  Buy Homes in {town.name}
                </Button>
                <Button href={`/towns/${town.slug}/sell`} variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-600">
                  Sell Your {town.name} Home
                </Button>
                <Button href={`/towns/${town.slug}/rent`} variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-600">
                  Find Rentals
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Facts */}
        <section className="bg-white py-8 border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center max-w-4xl mx-auto">
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-1">{town.population.toLocaleString()}</div>
                <div className="text-sm text-gray-600">Population</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-1">{town.county}</div>
                <div className="text-sm text-gray-600">County</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-1">{town.zip.length}</div>
                <div className="text-sm text-gray-600">ZIP Code{town.zip.length > 1 ? 's' : ''}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-1">Local</div>
                <div className="text-sm text-gray-600">Expertise</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services in This Town */}
        <section className="section bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-8 text-center">
              Real Estate Services in {town.name}
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <Card
                title={`Buy a Home in ${town.name}`}
                description={`Find your perfect home in ${town.name}. Expert buyer representation and deep local market knowledge.`}
                href={`/towns/${town.slug}/buy`}
              />
              <Card
                title={`Sell Your ${town.name} Home`}
                description={`Get top dollar for your property with our proven marketing strategies and local expertise.`}
                href={`/towns/${town.slug}/sell`}
              />
              <Card
                title={`${town.name} Rentals`}
                description={`Find rental properties or list your ${town.name} property for rent with professional management.`}
                href={`/towns/${town.slug}/rent`}
              />
            </div>
          </div>
        </section>

        {/* About The Town */}
        <section className="section bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-8">
                About {town.name}, New Jersey
              </h2>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 mb-6">
                  {town.name} is a thriving {town.county} community with {town.population.toLocaleString()} residents.
                  Known for {town.highlights.join(', ').toLowerCase()}, {town.name} offers an excellent quality of life
                  for families, professionals, and students alike.
                </p>

                <h3>Why People Love {town.name}</h3>
                <ul className="space-y-2">
                  {town.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-gray-700">
                      <strong>{highlight}:</strong> {town.name} is recognized for its {highlight.toLowerCase()},
                      making it an attractive place to call home.
                    </li>
                  ))}
                </ul>

                <h3>Real Estate Market in {town.name}</h3>
                <p className="text-gray-700">
                  The {town.name} real estate market offers diverse opportunities for buyers, sellers, and investors.
                  Whether you're looking for a starter home, luxury property, or investment rental, {town.name} has
                  options across various price points. As local experts serving {town.county}, we provide up-to-date
                  market data and strategic guidance for all your real estate needs in {town.name}.
                </p>

                <h3>Location & Accessibility</h3>
                <p className="text-gray-700">
                  Located in {town.county}, Southern New Jersey, {town.name} offers convenient access to major
                  highways, employment centers, shopping, and recreational amenities. The community benefits from its
                  proximity to both Philadelphia and the Jersey Shore, providing residents with the best of suburban
                  living while maintaining access to urban opportunities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <CTA
          title={`Ready to Buy, Sell, or Rent in ${town.name}?`}
          description={`Contact ${BUSINESS_INFO.name} today for expert real estate guidance in ${town.name}, ${town.county}.`}
          primaryButtonText="Contact Us"
          primaryButtonHref="/contact"
          secondaryButtonText="View All Towns"
          secondaryButtonHref="/towns"
        />
      </main>

      <Footer />
    </>
  );
}
