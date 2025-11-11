/**
 * Complete Rowan University Housing Guide
 * Comprehensive resource for students and parents
 */

import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import CTA from '@/components/CTA';
import Schema from '@/components/Schema';
import { BUSINESS_INFO, ROWAN_DATA } from '@/lib/seo-config';
import { generateRowanMetadata } from '@/lib/metadata';
import { getServiceSchema, getBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = generateRowanMetadata('guide');

export default function RowanGuidePage() {
  const breadcrumbs = [
    { name: 'Home', url: 'https://excel-realty.com' },
    { name: 'Rowan Housing', url: 'https://excel-realty.com/rowan' },
    { name: 'Complete Guide', url: 'https://excel-realty.com/rowan/guide' },
  ];

  return (
    <>
      <Schema data={getServiceSchema('rowan-housing')} />
      <Schema data={getBreadcrumbSchema(breadcrumbs)} />
      <Header />

      <main>
        {/* Hero */}
        <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6 text-white">
                Complete Rowan University Off-Campus Housing Guide
              </h1>
              <p className="text-xl md:text-2xl mb-6 text-white/95">
                Everything Students & Parents Need to Know
              </p>
              <p className="text-lg mb-8 text-white/90">
                Your ultimate resource for finding, securing, and thriving in off-campus housing near Rowan
              </p>
            </div>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="section bg-secondary-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold font-serif mb-6 text-center">Guide Contents</h2>
              <div className="grid md:grid-cols-2 gap-4 bg-white p-8 rounded-lg shadow-md">
                <div>
                  <ul className="space-y-2">
                    <li><a href="#timeline" className="text-primary-600 hover:text-primary-700">→ When to Start Your Search</a></li>
                    <li><a href="#neighborhoods" className="text-primary-600 hover:text-primary-700">→ Best Neighborhoods Guide</a></li>
                    <li><a href="#budgeting" className="text-primary-600 hover:text-primary-700">→ Budgeting & Costs</a></li>
                    <li><a href="#roommates" className="text-primary-600 hover:text-primary-700">→ Finding Roommates</a></li>
                    <li><a href="#viewing" className="text-primary-600 hover:text-primary-700">→ Viewing Properties</a></li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2">
                    <li><a href="#applying" className="text-primary-600 hover:text-primary-700">→ Application Process</a></li>
                    <li><a href="#leases" className="text-primary-600 hover:text-primary-700">→ Understanding Leases</a></li>
                    <li><a href="#utilities" className="text-primary-600 hover:text-primary-700">→ Utilities & Move-In</a></li>
                    <li><a href="#living" className="text-primary-600 hover:text-primary-700">→ Living Off-Campus Tips</a></li>
                    <li><a href="#parents" className="text-primary-600 hover:text-primary-700">→ Information for Parents</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section id="timeline" className="section bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-8">When to Start Your Housing Search</h2>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-green-600 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-2 flex items-center">
                    <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">✓</span>
                    November - January: BEST TIME
                  </h3>
                  <p className="text-gray-700 mb-3">
                    <strong>6-8 months before move-in</strong> - This is peak listing season for next academic year.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Maximum selection of available properties</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Best houses and locations go first</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Time to assemble roommate groups</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Landlords offer best pricing early</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-600 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-2 flex items-center">
                    <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">✓</span>
                    February - April: STILL GOOD
                  </h3>
                  <p className="text-gray-700 mb-3">
                    <strong>3-5 months before move-in</strong> - Solid selection remains available.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Many quality properties still available</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Good balance of selection vs. urgency</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Can still be selective about location</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 border-l-4 border-yellow-600 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-2 flex items-center">
                    <span className="bg-yellow-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">!</span>
                    May - August: LIMITED
                  </h3>
                  <p className="text-gray-700 mb-3">
                    <strong>0-3 months before move-in</strong> - Options narrowing but still possible.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span>Fewer options, must act quickly</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span>May find last-minute deals</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span>Consider being flexible on requirements</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Neighborhoods */}
        <section id="neighborhoods" className="section bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-8">Neighborhood Guide</h2>

              <div className="space-y-8">
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold">Downtown Glassboro</h3>
                    <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">MOST POPULAR</span>
                  </div>
                  <div className="mb-4">
                    <span className="font-semibold">Walk Score:</span> <span className="text-green-600 font-bold">9/10</span> |
                    <span className="font-semibold ml-4">Average Rent:</span> $600-700/room
                  </div>
                  <p className="text-gray-700 mb-4">
                    The heart of Rowan's off-campus scene. Streets like High Street, Main Street, and Academy Street
                    are packed with student houses within 5-15 minute walk to campus.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-semibold text-green-600 mb-2">Pros:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Walk to campus and classes</li>
                        <li>• Walk to restaurants, bars, shops</li>
                        <li>• Active social scene</li>
                        <li>• Don't need a car</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-600 mb-2">Cons:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Can be noisy on weekends</li>
                        <li>• Limited parking</li>
                        <li>• Higher rent than suburbs</li>
                        <li>• Older houses (some need updates)</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 italic">
                    <strong>Best For:</strong> Undergrads who want to walk to campus, be in the center of social life,
                    and don't mind some noise. Great for freshmen/sophomores moving off-campus for the first time.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-md">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold">Pitman</h3>
                    <span className="bg-secondary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">QUIET & AFFORDABLE</span>
                  </div>
                  <div className="mb-4">
                    <span className="font-semibold">Walk Score:</span> <span className="text-orange-600 font-bold">4/10</span> |
                    <span className="font-semibold ml-4">Average Rent:</span> $500-650/room
                  </div>
                  <p className="text-gray-700 mb-4">
                    Historic town directly adjacent to Glassboro. Charming downtown, quieter atmosphere, 10-minute drive
                    to campus. Lower rent than Glassboro.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-semibold text-green-600 mb-2">Pros:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• 15-20% cheaper than Glassboro</li>
                        <li>• Quieter for studying</li>
                        <li>• Charming small-town feel</li>
                        <li>• Good restaurants and cafes</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-600 mb-2">Cons:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Need a car (10 min drive)</li>
                        <li>• Less social/party scene</li>
                        <li>• Fewer student housing options</li>
                        <li>• Not walking distance to campus</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 italic">
                    <strong>Best For:</strong> Grad students, upperclassmen, serious studiers who have cars. Good for
                    students who want to save money and prefer a quieter environment away from campus noise.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-md">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold">Mullica Hill / Williamstown</h3>
                    <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">MODERN APARTMENTS</span>
                  </div>
                  <div className="mb-4">
                    <span className="font-semibold">Walk Score:</span> <span className="text-red-600 font-bold">2/10</span> |
                    <span className="font-semibold ml-4">Average Rent:</span> $900-1,200/bedroom
                  </div>
                  <p className="text-gray-700 mb-4">
                    Newer suburban areas 15-20 minutes from campus. Modern apartment complexes with amenities like
                    pools, gyms, and parking.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-semibold text-green-600 mb-2">Pros:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Brand new construction</li>
                        <li>• Modern amenities (pool, gym)</li>
                        <li>• More space and privacy</li>
                        <li>• Plentiful parking</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-600 mb-2">Cons:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• 15-20 minute drive to campus</li>
                        <li>• Car absolutely required</li>
                        <li>• Higher rent for newer units</li>
                        <li>• Isolated from student social scene</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 italic">
                    <strong>Best For:</strong> Upperclassmen and grad students who prioritize modern amenities, quiet
                    environment, and have reliable transportation. Good for students who commute anyway or have
                    mostly online classes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Budgeting */}
        <section id="budgeting" className="section bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-8">Complete Budget Guide</h2>

              <div className="bg-secondary-50 p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Monthly Cost Breakdown</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white p-6 rounded-lg">
                    <h4 className="font-bold text-lg mb-4">Shared House (per person)</h4>
                    <table className="w-full text-sm">
                      <tbody className="space-y-2">
                        <tr className="border-b">
                          <td className="py-2">Rent (per room)</td>
                          <td className="py-2 text-right font-semibold">$500-700</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2">Utilities (split)</td>
                          <td className="py-2 text-right">$50-100</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2">Internet (split)</td>
                          <td className="py-2 text-right">$15-25</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2">Groceries</td>
                          <td className="py-2 text-right">$200-300</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2">Transportation</td>
                          <td className="py-2 text-right">$50-100</td>
                        </tr>
                        <tr className="font-bold text-lg bg-secondary-50">
                          <td className="py-2">Total/Month</td>
                          <td className="py-2 text-right">$815-1,225</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-white p-6 rounded-lg">
                    <h4 className="font-bold text-lg mb-4">1-Bedroom Apartment</h4>
                    <table className="w-full text-sm">
                      <tbody>
                        <tr className="border-b">
                          <td className="py-2">Rent</td>
                          <td className="py-2 text-right font-semibold">$900-1,200</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2">Utilities</td>
                          <td className="py-2 text-right">$80-150</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2">Internet</td>
                          <td className="py-2 text-right">$50-80</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2">Groceries</td>
                          <td className="py-2 text-right">$250-350</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2">Transportation</td>
                          <td className="py-2 text-right">$100-150</td>
                        </tr>
                        <tr className="font-bold text-lg bg-secondary-50">
                          <td className="py-2">Total/Month</td>
                          <td className="py-2 text-right">$1,380-1,930</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg mb-8">
                <h3 className="font-bold text-lg mb-2">💡 Money-Saving Tips</h3>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>More roommates = lower cost per person.</strong> 6-person house costs less per room than 3-person apartment</li>
                  <li>• <strong>Sign early for best pricing.</strong> Landlords reward early commitments with lower rates</li>
                  <li>• <strong>Consider Pitman for 15-20% savings</strong> vs. downtown Glassboro</li>
                  <li>• <strong>Share grocery trips</strong> and cook together to reduce food costs</li>
                  <li>• <strong>Walk/bike when possible</strong> to reduce transportation costs</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">One-Time Move-In Costs</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex justify-between"><span>Security Deposit:</span> <strong>1 month's rent</strong></li>
                  <li className="flex justify-between"><span>First Month's Rent:</span> <strong>1 month's rent</strong></li>
                  <li className="flex justify-between"><span>Utility Deposits:</span> <strong>$100-200</strong></li>
                  <li className="flex justify-between"><span>Furniture/Supplies:</span> <strong>$300-800</strong></li>
                  <li className="flex justify-between border-t pt-2 mt-2 text-lg"><span>Total Move-In:</span> <strong>~$1,500-3,000</strong></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section id="applying" className="section bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-8">Application & Lease Process</h2>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-4">What You'll Need to Apply</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Student Information:</h4>
                      <ul className="space-y-2 text-sm">
                        <li>✓ Valid photo ID</li>
                        <li>✓ Rowan student ID number</li>
                        <li>✓ Social Security Number</li>
                        <li>✓ Current address</li>
                        <li>✓ Expected graduation date</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Cosigner Information:</h4>
                      <ul className="space-y-2 text-sm">
                        <li>✓ Parent/guardian information</li>
                        <li>✓ Proof of income (pay stubs)</li>
                        <li>✓ Employment verification</li>
                        <li>✓ Credit authorization</li>
                        <li>✓ Valid ID</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-4">Understanding Your Lease</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-primary-600">Lease Length</h4>
                      <p className="text-sm text-gray-700">
                        Most student leases are 12 months (August to August) to align with the academic year.
                        Some landlords offer 9-month or summer sublet options.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-600">Joint vs. Individual Leases</h4>
                      <p className="text-sm text-gray-700">
                        <strong>Joint Lease:</strong> All roommates on one lease. Everyone responsible for full rent
                        (if one person doesn't pay, others must cover). <strong>Individual Lease:</strong> Each person
                        responsible only for their room. More common in apartment complexes.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-600">What to Read Carefully</h4>
                      <ul className="text-sm text-gray-700 space-y-1 mt-2">
                        <li>• Pet policy (if you want a pet)</li>
                        <li>• Guest policy (overnight visitors)</li>
                        <li>• Subletting rules (if you need to leave early)</li>
                        <li>• Maintenance responsibilities</li>
                        <li>• Early termination clauses</li>
                        <li>• Security deposit return conditions</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Living Off-Campus */}
        <section id="living" className="section bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-8">Thriving in Your Off-Campus House</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-primary-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Roommate Success Tips</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start">
                      <span className="text-primary-600 font-bold mr-2">1.</span>
                      <span><strong>Set Ground Rules Early:</strong> Discuss cleaning schedules, quiet hours, guests, and shared expenses before conflicts arise</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 font-bold mr-2">2.</span>
                      <span><strong>Split Costs Fairly:</strong> Use apps like Venmo or Splitwise to track shared expenses transparently</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 font-bold mr-2">3.</span>
                      <span><strong>Communicate Issues Promptly:</strong> Don't let small annoyances build into major conflicts</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 font-bold mr-2">4.</span>
                      <span><strong>Respect Privacy & Space:</strong> Even in shared housing, everyone needs personal time</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-secondary-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Managing Your Household</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start">
                      <span className="text-secondary-600 font-bold mr-2">•</span>
                      <span><strong>Create a Cleaning Schedule:</strong> Rotate chores weekly to keep things fair</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary-600 font-bold mr-2">•</span>
                      <span><strong>Pay Rent On Time:</strong> Set up auto-pay or calendar reminders to never miss due dates</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary-600 font-bold mr-2">•</span>
                      <span><strong>Report Maintenance Quickly:</strong> Small issues become big expensive problems if ignored</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary-600 font-bold mr-2">•</span>
                      <span><strong>Be Good Neighbors:</strong> Keep noise reasonable, especially during the week</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary-600 font-bold mr-2">•</span>
                      <span><strong>Document Everything:</strong> Take photos at move-in to protect your security deposit</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* For Parents */}
        <section id="parents" className="section bg-primary-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-8">Information for Parents</h2>

              <div className="bg-white p-8 rounded-lg shadow-md mb-8">
                <h3 className="text-2xl font-bold mb-6">What Parents Should Know</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary-600 mb-2">Cosigning is Usually Required</h4>
                    <p className="text-sm text-gray-700">
                      Most landlords require parent/guardian cosigners for student leases since students typically lack
                      credit history or income. As a cosigner, you're legally responsible if your student doesn't pay rent.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-600 mb-2">What You're Signing</h4>
                    <p className="text-sm text-gray-700">
                      Review the entire lease carefully. Understand you're committing to 12 months of rent payments
                      (~$6,000-$8,000 per year). Ensure the property is safe, well-maintained, and worth the price.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-600 mb-2">Questions to Ask Landlords</h4>
                    <ul className="text-sm text-gray-700 space-y-1 mt-2">
                      <li>• What's included in rent? (Heat, water, trash?)</li>
                      <li>• How are maintenance emergencies handled?</li>
                      <li>• What's the security deposit return policy?</li>
                      <li>• Are there any additional fees?</li>
                      <li>• What's the early termination policy if my student needs to leave?</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-secondary-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Safety Considerations</h3>
                <ul className="space-y-2 text-sm">
                  <li>✓ Visit the property and neighborhood in person if possible</li>
                  <li>✓ Check that smoke detectors and carbon monoxide detectors are installed</li>
                  <li>✓ Ensure all locks work properly on doors and windows</li>
                  <li>✓ Verify adequate outdoor lighting around the property</li>
                  <li>✓ Ask about the landlord's emergency contact procedures</li>
                  <li>✓ Consider renters insurance for your student's belongings ($10-20/month)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <CTA
          title="Ready to Find Your Perfect Rowan Housing?"
          description="Let us help you navigate the off-campus housing process. Contact Excel Realty Group today!"
          primaryButtonText="Students: Browse Housing"
          primaryButtonHref="/rowan/students"
          secondaryButtonText="Parents: Contact Us"
          secondaryButtonHref="/contact"
        />
      </main>

      <Footer />
    </>
  );
}
