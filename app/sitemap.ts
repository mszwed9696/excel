/**
 * Dynamic XML Sitemap Generation
 * Automatically includes all pages with proper priority and changefreq
 */

import { MetadataRoute } from 'next';
import { SERVICE_AREAS, SERVICES } from '@/lib/seo-config';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://excel-realty.com';
  const currentDate = new Date();

  // Homepage
  const homepage = {
    url: baseUrl,
    lastModified: currentDate,
    changeFrequency: 'daily' as const,
    priority: 1.0,
  };

  // Service pages
  const servicePages = SERVICES.map(service => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // Town pages (main)
  const townPages = SERVICE_AREAS.map(town => ({
    url: `${baseUrl}/towns/${town.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // Town sub-pages (buy/sell/rent for each town)
  const townSubPages = SERVICE_AREAS.flatMap(town => [
    {
      url: `${baseUrl}/towns/${town.slug}/buy`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/towns/${town.slug}/sell`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/towns/${town.slug}/rent`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ]);

  // Rowan University pages
  const rowanPages = [
    {
      url: `${baseUrl}/rowan`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/rowan/students`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/rowan/landlords`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/rowan/guide`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ];

  // Static pages
  const staticPages = [
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
  ];

  return [
    homepage,
    ...servicePages,
    ...townPages,
    ...townSubPages,
    ...rowanPages,
    ...staticPages,
  ];
}
