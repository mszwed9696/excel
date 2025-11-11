/**
 * All Towns Listing Page
 * Shows all 30 Southern NJ towns we serve
 */

import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TownCard from '@/components/TownCard';
import CTA from '@/components/CTA';
import { SERVICE_AREAS } from '@/lib/seo-config';
import { generateMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateMetadata({
  title: '30+ Southern NJ Towns We Serve',
  description: 'Expert real estate services across Gloucester County, Burlington County, Camden County, Atlantic County, and Cumberland County. Find homes for sale, rentals, and local market information in Glassboro, Marlton, Moorestown, Vineland, and 26+ more Southern New Jersey towns.',
  keywords: [
    'southern new jersey real estate',
    'gloucester county towns',
    'burlington county real estate',
    'camden county homes',
    'nj towns served',
    ...SERVICE_AREAS.map(t => `${t.name.toLowerCase()} nj real estate`),
  ],
  canonical: '/towns',
});

export default function AllTownsPage() {
  // Group towns by county
  const townsByCounty = SERVICE_AREAS.reduce((acc, town) => {
    if (!acc[town.county]) {
      acc[town.county] = [];
    }
    acc[town.county].push(town);
    return acc;
  }, {} as Record<string, typeof SERVICE_AREAS>);

  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6 text-white">
                30+ Southern New Jersey Towns We Serve
              </h1>
              <p className="text-xl md:text-2xl mb-6 text-white/95">
                Expert local knowledge across Gloucester, Burlington, Camden, Atlantic & Cumberland Counties
              </p>
              <p className="text-lg text-white/90">
                Whether you're buying, selling, or renting - we provide deep expertise in every community we serve.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="bg-white py-8 border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center max-w-4xl mx-auto">
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-1">{SERVICE_AREAS.length}</div>
                <div className="text-sm text-gray-600">Towns Served</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-1">5</div>
                <div className="text-sm text-gray-600">Counties</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-1">500K+</div>
                <div className="text-sm text-gray-600">Total Population</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-1">100%</div>
                <div className="text-sm text-gray-600">Local Expertise</div>
              </div>
            </div>
          </div>
        </section>

        {/* Towns by County */}
        <section className="section bg-gray-50">
          <div className="container mx-auto px-4">
            {Object.entries(townsByCounty).map(([county, towns]) => (
              <div key={county} className="mb-16 last:mb-0">
                <h2 className="text-3xl font-bold font-serif mb-8 text-center">
                  {county}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {towns.map(town => (
                    <TownCard
                      key={town.slug}
                      name={town.name}
                      slug={town.slug}
                      county={town.county}
                      population={town.population}
                      highlights={town.highlights}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Local Expertise Matters */}
        <section className="section bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-8 text-center">
                Why Local Expertise Matters
              </h2>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 mb-6">
                  Every town in Southern New Jersey has its own unique character, housing market dynamics, and opportunities.
                  What works in Moorestown won't necessarily work in Glassboro. Understanding these nuances is critical to
                  your success, whether you're buying your first home, selling your property, or investing in rentals.
                </p>

                <div className="grid md:grid-cols-3 gap-8 my-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">School Districts</h3>
                    <p className="text-gray-600 text-sm">
                      We know which towns have the top-rated schools, which districts are improving, and how school
                      boundaries affect home values.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">Neighborhoods</h3>
                    <p className="text-gray-600 text-sm">
                      From family-friendly streets to student housing areas, walkable downtowns to quiet cul-de-sacs -
                      we'll match you with the right neighborhood.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">Market Trends</h3>
                    <p className="text-gray-600 text-sm">
                      Real-time knowledge of pricing trends, inventory levels, days on market, and buyer demand in
                      each specific town.
                    </p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4">Southern New Jersey Coverage</h3>
                <p className="text-gray-700 mb-4">
                  Our service area spans five counties across Southern New Jersey: <strong>Gloucester County</strong>
                  (including Glassboro, Washington Township, Deptford, Monroe Township, Williamstown, and more),
                  <strong>Burlington County</strong> (Marlton, Moorestown, Mount Laurel, Medford, Evesham),
                  <strong>Camden County</strong> (Blackwood, Pine Hill, Lindenwold, Berlin),
                  <strong>Atlantic County</strong> (Buena), and <strong>Cumberland County</strong> (Vineland).
                </p>

                <p className="text-gray-700 mb-4">
                  Whether you're looking for an affordable starter home in Williamstown, a luxury property in Moorestown,
                  student housing near Rowan University in Glassboro, or an investment property in Vineland - we have the
                  local expertise to guide you to success.
                </p>

                <h3 className="text-2xl font-bold mb-4">Specializations by Town Type</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li><strong>College Towns:</strong> Glassboro (Rowan University) - student housing expertise</li>
                  <li><strong>Suburban Family Markets:</strong> Marlton, Moorestown, Mount Laurel, Washington Township</li>
                  <li><strong>Affordable Entry Markets:</strong> Vineland, Pine Hill, Lindenwold, Buena</li>
                  <li><strong>Investment Opportunities:</strong> Glassboro, Vineland, Deptford, Williamstown</li>
                  <li><strong>Historic & Charming:</strong> Pitman, Mullica Hill, Swedesboro, Woodbury</li>
                  <li><strong>Growing Suburban:</strong> Monroe Township, Williamstown, Evesham, Medford</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTA
          title="Ready to Explore These Towns?"
          description="Contact us to learn more about any of these Southern New Jersey communities and find your perfect home."
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
