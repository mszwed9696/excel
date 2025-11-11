/**
 * Footer Component
 * Site footer with important links and SEO-rich content
 */

import Link from 'next/link';
import Image from 'next/image';
import { BUSINESS_INFO, SERVICE_AREAS, SERVICES } from '@/lib/seo-config';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Featured towns for footer (top 12)
  const featuredTowns = SERVICE_AREAS.slice(0, 12);

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            {/* Logo and Brand */}
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative w-10 h-10 flex-shrink-0">
                <Image
                  src="/images/logo.png"
                  alt={`${BUSINESS_INFO.name} Logo`}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold font-serif text-white leading-none">
                  EXCEL REALTY
                </span>
                <span className="text-[10px] font-semibold text-gray-400 leading-none mt-0.5">
                  & PROPERTY MANAGEMENT
                </span>
              </div>
            </div>
            <p className="text-sm mb-4">
              {BUSINESS_INFO.description.substring(0, 150)}...
            </p>
            <div className="space-y-2 text-sm">
              <p>
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-secondary-400">
                  {BUSINESS_INFO.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-secondary-400">
                  {BUSINESS_INFO.email}
                </a>
              </p>
              <p className="text-xs">
                {BUSINESS_INFO.address.street}<br />
                {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.zip}
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-4">
              <a href={BUSINESS_INFO.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-secondary-400" aria-label="Facebook">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href={BUSINESS_INFO.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-secondary-400" aria-label="Instagram">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href={BUSINESS_INFO.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-secondary-400" aria-label="LinkedIn">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {SERVICES.map(service => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`} className="hover:text-secondary-400">
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/rowan" className="hover:text-secondary-400">
                  Rowan University Housing
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Towns */}
          <div>
            <h4 className="text-white font-semibold mb-4">Popular Towns</h4>
            <ul className="space-y-2 text-sm">
              {featuredTowns.map(town => (
                <li key={town.slug}>
                  <Link href={`/towns/${town.slug}`} className="hover:text-secondary-400">
                    {town.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/towns" className="text-secondary-400 hover:text-secondary-300 text-sm font-medium mt-2 inline-block">
              View All Towns →
            </Link>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/blog" className="hover:text-secondary-400">
                  Blog & Market Updates
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-secondary-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-secondary-400">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/rowan/guide" className="hover:text-secondary-400">
                  Rowan Housing Guide
                </Link>
              </li>
              <li>
                <Link href="/resources/home-valuation" className="hover:text-secondary-400">
                  Home Valuation Tool
                </Link>
              </li>
              <li>
                <Link href="/resources/mortgage-calculator" className="hover:text-secondary-400">
                  Mortgage Calculator
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p className="text-gray-400 mb-4 md:mb-0">
              © {currentYear} {BUSINESS_INFO.name}. All rights reserved.
            </p>
            <div className="flex space-x-6 text-gray-400">
              <Link href="/privacy" className="hover:text-secondary-400">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-secondary-400">
                Terms of Service
              </Link>
              <Link href="/sitemap.xml" className="hover:text-secondary-400">
                Sitemap
              </Link>
            </div>
          </div>

          {/* SEO-rich footer text */}
          <div className="mt-6 text-xs text-gray-500 leading-relaxed">
            <p>
              {BUSINESS_INFO.name} is a premier real estate brokerage serving Southern New Jersey, including {SERVICE_AREAS.slice(0, 10).map(t => t.name).join(', ')}, and {SERVICE_AREAS.length - 10}+ more towns across Gloucester County, Burlington County, Camden County, Atlantic County, and Cumberland County. We specialize in residential real estate sales, rental properties, property management, and Rowan University student housing. Whether you're buying your first home, selling your property, looking for rental apartments, or need expert property management services, our experienced real estate agents provide personalized service and deep local market knowledge throughout Southern NJ.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
