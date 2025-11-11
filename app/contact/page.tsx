/**
 * Contact Page
 * Lead generation and contact information
 */

import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { generateContactMetadata } from '@/lib/metadata';
import { BUSINESS_INFO, SERVICE_AREAS } from '@/lib/seo-config';

export const metadata: Metadata = generateContactMetadata();

export default function ContactPage() {
  const featuredTowns = SERVICE_AREAS.slice(0, 15);

  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6 text-white">
                Contact {BUSINESS_INFO.name}
              </h1>
              <p className="text-xl md:text-2xl text-white/95">
                Ready to buy, sell, or rent in Southern New Jersey? Let's talk.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="section bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold font-serif mb-6">Get in Touch</h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Phone</h3>
                    <a href={`tel:${BUSINESS_INFO.phone}`} className="text-xl text-primary-600 hover:text-primary-700">
                      {BUSINESS_INFO.phone}
                    </a>
                    <p className="text-sm text-gray-600 mt-1">Call or text anytime</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">Email</h3>
                    <a href={`mailto:${BUSINESS_INFO.email}`} className="text-xl text-primary-600 hover:text-primary-700">
                      {BUSINESS_INFO.email}
                    </a>
                    <p className="text-sm text-gray-600 mt-1">We respond within 24 hours</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">Office Location</h3>
                    <address className="not-italic text-gray-700">
                      {BUSINESS_INFO.address.street}<br />
                      {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.zip}
                    </address>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">Hours</h3>
                    <p className="text-gray-700">{BUSINESS_INFO.hours}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">Follow Us</h3>
                    <div className="flex space-x-4">
                      <a href={BUSINESS_INFO.social.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary-600">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                      </a>
                      <a href={BUSINESS_INFO.social.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary-600">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                      </a>
                      <a href={BUSINESS_INFO.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary-600">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-gray-50 p-8 rounded-lg">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

                <form className="space-y-4" action="/api/contact" method="POST">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">
                      I'm interested in...
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="buying">Buying a Home</option>
                      <option value="selling">Selling My Home</option>
                      <option value="renting">Finding a Rental</option>
                      <option value="rowan">Rowan Student Housing</option>
                      <option value="property-management">Property Management</option>
                      <option value="investment">Investment Properties</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="town" className="block text-sm font-medium text-gray-700 mb-1">
                      Town of Interest
                    </label>
                    <select
                      id="town"
                      name="town"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select a town...</option>
                      {SERVICE_AREAS.map(town => (
                        <option key={town.slug} value={town.name}>{town.name}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Tell us about your real estate needs..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                  >
                    Send Message
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    By submitting this form, you agree to be contacted by {BUSINESS_INFO.name}
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Towns We Serve */}
        <section className="section bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold font-serif mb-4">Areas We Serve</h2>
              <p className="text-xl text-gray-600">Contact us about real estate in any of these Southern NJ towns:</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
              {featuredTowns.map(town => (
                <div key={town.slug} className="text-center text-gray-700">
                  {town.name}
                </div>
              ))}
              <div className="text-center text-primary-600 font-semibold">
                +{SERVICE_AREAS.length - featuredTowns.length} more
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
