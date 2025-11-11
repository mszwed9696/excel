/**
 * Header/Navigation Component
 * Main site navigation with mobile menu
 */

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { BUSINESS_INFO, SERVICE_AREAS } from '@/lib/seo-config';
import Button from './Button';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [townsDropdownOpen, setTownsDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold font-serif text-primary-600">
              {BUSINESS_INFO.name}
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/services/buy" className="text-gray-700 hover:text-primary-600 font-medium">
              Buy
            </Link>
            <Link href="/services/sell" className="text-gray-700 hover:text-primary-600 font-medium">
              Sell
            </Link>
            <Link href="/services/rentals" className="text-gray-700 hover:text-primary-600 font-medium">
              Rentals
            </Link>
            <Link href="/rowan" className="text-gray-700 hover:text-primary-600 font-medium">
              Rowan Housing
            </Link>

            {/* Towns Dropdown */}
            <div className="relative">
              <button
                onClick={() => setTownsDropdownOpen(!townsDropdownOpen)}
                className="text-gray-700 hover:text-primary-600 font-medium flex items-center"
              >
                Towns
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {townsDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 p-4 grid grid-cols-2 gap-2 max-h-96 overflow-y-auto">
                  {SERVICE_AREAS.slice(0, 12).map(town => (
                    <Link
                      key={town.slug}
                      href={`/towns/${town.slug}`}
                      className="text-sm text-gray-700 hover:text-primary-600 hover:bg-gray-50 px-2 py-1 rounded"
                      onClick={() => setTownsDropdownOpen(false)}
                    >
                      {town.name}
                    </Link>
                  ))}
                  <Link
                    href="/towns"
                    className="col-span-2 text-sm text-primary-600 hover:text-primary-700 font-semibold px-2 py-1 text-center border-t border-gray-200 mt-2 pt-2"
                    onClick={() => setTownsDropdownOpen(false)}
                  >
                    View All 30 Towns →
                  </Link>
                </div>
              )}
            </div>

            <Link href="/blog" className="text-gray-700 hover:text-primary-600 font-medium">
              Blog
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary-600 font-medium">
              About
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href={`tel:${BUSINESS_INFO.phone}`} className="text-primary-600 font-semibold hover:text-primary-700">
              {BUSINESS_INFO.phone}
            </a>
            <Button href="/contact" variant="primary" size="md">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-primary-600"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link href="/services/buy" className="text-gray-700 hover:text-primary-600 font-medium" onClick={() => setMobileMenuOpen(false)}>
                Buy a Home
              </Link>
              <Link href="/services/sell" className="text-gray-700 hover:text-primary-600 font-medium" onClick={() => setMobileMenuOpen(false)}>
                Sell Your Home
              </Link>
              <Link href="/services/rentals" className="text-gray-700 hover:text-primary-600 font-medium" onClick={() => setMobileMenuOpen(false)}>
                Rentals
              </Link>
              <Link href="/rowan" className="text-gray-700 hover:text-primary-600 font-medium" onClick={() => setMobileMenuOpen(false)}>
                Rowan Housing
              </Link>
              <Link href="/towns" className="text-gray-700 hover:text-primary-600 font-medium" onClick={() => setMobileMenuOpen(false)}>
                All Towns
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-primary-600 font-medium" onClick={() => setMobileMenuOpen(false)}>
                Blog
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-primary-600 font-medium" onClick={() => setMobileMenuOpen(false)}>
                About Us
              </Link>
              <div className="pt-4 border-t border-gray-200">
                <a href={`tel:${BUSINESS_INFO.phone}`} className="text-primary-600 font-semibold text-lg block mb-3">
                  {BUSINESS_INFO.phone}
                </a>
                <Button href="/contact" variant="primary" size="md" fullWidth onClick={() => setMobileMenuOpen(false)}>
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
