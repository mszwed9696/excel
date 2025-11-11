/**
 * TownCard Component
 * Displays town information with links to town pages
 */

import Link from 'next/link';

interface TownCardProps {
  name: string;
  slug: string;
  county: string;
  population: number;
  highlights: string[];
}

export default function TownCard({ name, slug, county, population, highlights }: TownCardProps) {
  return (
    <Link
      href={`/towns/${slug}`}
      className="block bg-white rounded-lg border border-gray-200 p-5 transition-all duration-200 hover:shadow-lg hover:border-primary-300"
    >
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-semibold text-primary-700">
          {name}
        </h3>
        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
          {population.toLocaleString()}
        </span>
      </div>

      <p className="text-sm text-gray-600 mb-3">
        {county}
      </p>

      <div className="flex flex-wrap gap-1 mb-3">
        {highlights.slice(0, 2).map((highlight, index) => (
          <span
            key={index}
            className="text-xs text-primary-600 bg-primary-50 px-2 py-1 rounded"
          >
            {highlight}
          </span>
        ))}
      </div>

      <div className="flex justify-between items-center pt-3 border-t border-gray-100">
        <div className="flex space-x-3 text-xs text-gray-600">
          <span>Buy</span>
          <span>Sell</span>
          <span>Rent</span>
        </div>
        <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
}
