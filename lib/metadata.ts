/**
 * Metadata Generation Utilities
 * Creates optimized metadata for all pages
 */

import { Metadata } from 'next';
import { DEFAULT_METADATA, BUSINESS_INFO, SERVICE_AREAS, SERVICES, ROWAN_DATA } from './seo-config';

interface GenerateMetadataProps {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
  noindex?: boolean;
}

/**
 * Generate base metadata for any page
 */
export function generateMetadata({
  title,
  description,
  keywords = [],
  ogImage,
  canonical,
  noindex = false,
}: GenerateMetadataProps = {}): Metadata {
  const fullTitle = title
    ? `${title} | ${BUSINESS_INFO.name}`
    : DEFAULT_METADATA.defaultTitle;

  const fullDescription = description || DEFAULT_METADATA.defaultDescription;
  const fullKeywords = [...DEFAULT_METADATA.keywords, ...keywords];
  const fullOgImage = ogImage || DEFAULT_METADATA.ogImage;
  const fullCanonical = canonical ? `${DEFAULT_METADATA.siteUrl}${canonical}` : undefined;

  return {
    title: fullTitle,
    description: fullDescription,
    keywords: fullKeywords.join(', '),

    ...(noindex && {
      robots: {
        index: false,
        follow: false,
      },
    }),

    ...(!noindex && {
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
      },
    }),

    openGraph: {
      title: fullTitle,
      description: fullDescription,
      url: fullCanonical || DEFAULT_METADATA.siteUrl,
      siteName: DEFAULT_METADATA.siteName,
      images: [
        {
          url: fullOgImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },

    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: fullDescription,
      images: [fullOgImage],
      creator: DEFAULT_METADATA.twitterHandle,
    },

    alternates: {
      canonical: fullCanonical,
    },
  };
}

/**
 * Generate metadata for homepage
 */
export function generateHomeMetadata(): Metadata {
  return generateMetadata({
    title: 'Southern New Jersey Real Estate Experts',
    description: `${BUSINESS_INFO.name} - Premier real estate brokerage serving 30+ towns across Southern NJ. Expert agents specializing in residential sales, rentals, and Rowan University student housing. Serving Glassboro, Marlton, Moorestown, Vineland & more.`,
    keywords: [
      'southern new jersey real estate',
      'gloucester county homes',
      'burlington county real estate',
      'camden county homes',
      'rowan university housing',
      'glassboro real estate agent',
      'nj homes for sale',
      'south jersey rentals',
    ],
    canonical: '/',
  });
}

/**
 * Generate metadata for town pages
 */
export function generateTownMetadata(townSlug: string, serviceType?: 'buy' | 'sell' | 'rent'): Metadata {
  const town = SERVICE_AREAS.find(t => t.slug === townSlug);
  if (!town) {
    return generateMetadata();
  }

  const serviceText = serviceType
    ? serviceType === 'buy'
      ? 'Buy Homes'
      : serviceType === 'sell'
      ? 'Sell Your Home'
      : 'Rentals & Apartments'
    : 'Real Estate';

  const title = serviceType
    ? `${serviceText} in ${town.name}, NJ`
    : `${town.name}, NJ Real Estate`;

  const description = serviceType
    ? `${serviceText} in ${town.name}, ${town.county}. Expert local real estate agent with deep ${town.name} market knowledge. ${town.highlights.join(', ')}. Contact ${BUSINESS_INFO.name} today!`
    : `${town.name}, NJ real estate expert. Buy, sell, or rent homes in ${town.name}, ${town.county}. ${town.population.toLocaleString()} residents. Known for ${town.highlights.join(', ')}. Local expertise since ${BUSINESS_INFO.foundingYear}.`;

  const keywords = [
    `${town.name.toLowerCase()} real estate`,
    `${town.name.toLowerCase()} homes for sale`,
    `${town.name.toLowerCase()} real estate agent`,
    `buy house ${town.name.toLowerCase()} nj`,
    `sell house ${town.name.toLowerCase()}`,
    `${town.name.toLowerCase()} ${town.county.toLowerCase()}`,
    `${town.name.toLowerCase()} rentals`,
    `real estate ${town.name.toLowerCase()}`,
    `best realtor ${town.name.toLowerCase()}`,
  ];

  if (serviceType === 'rent') {
    keywords.push(
      `apartments ${town.name.toLowerCase()} nj`,
      `${town.name.toLowerCase()} apartments for rent`,
      `rental agent ${town.name.toLowerCase()}`,
      `property management ${town.name.toLowerCase()}`
    );
  }

  const canonical = serviceType
    ? `/towns/${townSlug}/${serviceType}`
    : `/towns/${townSlug}`;

  return generateMetadata({
    title,
    description,
    keywords,
    canonical,
  });
}

/**
 * Generate metadata for service pages
 */
export function generateServiceMetadata(serviceSlug: string): Metadata {
  const service = SERVICES.find(s => s.slug === serviceSlug);
  if (!service) {
    return generateMetadata();
  }

  const townList = 'Glassboro, Marlton, Moorestown, Vineland, Washington Township, Sewell, Deptford, Mount Laurel';

  const titles: Record<string, string> = {
    buy: 'Buy a Home in Southern New Jersey',
    sell: 'Sell Your Home Fast in Southern NJ',
    rentals: 'Rentals & Property Management in Southern NJ',
    'rowan-housing': 'Rowan University Student Housing & Off-Campus Rentals',
    investment: 'Investment Properties in Southern New Jersey',
  };

  const descriptions: Record<string, string> = {
    buy: `Find your dream home in Southern New Jersey with ${BUSINESS_INFO.name}. Expert buyer representation in ${townList}. First-time buyers welcome. Free home search and market analysis.`,
    sell: `Sell your home fast and for top dollar with ${BUSINESS_INFO.name}. Expert marketing, professional photography, and proven results across ${townList}. Free home valuation.`,
    rentals: `Quality rental properties and full-service property management in Southern NJ. Serving landlords and tenants in ${townList}. Tenant screening, rent collection, maintenance coordination.`,
    'rowan-housing': `Rowan University student housing specialist. Off-campus apartments and houses near Rowan campus in Glassboro and Pitman. Landlord services for Rowan rental properties. ${ROWAN_DATA.students.toLocaleString()} students need housing!`,
    investment: `Build wealth through Southern NJ real estate investments. Find cash-flowing rental properties, fix-and-flip opportunities, and multi-family properties in ${townList}. Investment analysis and property management.`,
  };

  return generateMetadata({
    title: titles[serviceSlug] || service.name,
    description: descriptions[serviceSlug] || service.description,
    keywords: [
      service.name.toLowerCase(),
      `${service.slug} southern new jersey`,
      `${service.slug} gloucester county`,
      'real estate services nj',
    ],
    canonical: `/services/${serviceSlug}`,
  });
}

/**
 * Generate metadata for Rowan University pages
 */
export function generateRowanMetadata(subpage?: 'landlords' | 'students' | 'guide'): Metadata {
  const titles: Record<string, string> = {
    landlords: 'Rowan University Landlord Services - Fill Your Rental Fast',
    students: 'Rowan University Off-Campus Housing for Students',
    guide: 'Complete Rowan University Housing Guide',
  };

  const descriptions: Record<string, string> = {
    landlords: `Market your Glassboro rental to ${ROWAN_DATA.students.toLocaleString()} Rowan students. Professional property management, tenant screening, and year-round occupancy. Maximize your rental income near Rowan University.`,
    students: `Find the perfect off-campus housing near Rowan University. Apartments and houses in Glassboro and Pitman. Budget-friendly options, roommate matching, and close to campus. ${ROWAN_DATA.students.toLocaleString()} students trust us!`,
    guide: `Ultimate Rowan University housing guide. Everything students and landlords need to know about off-campus rentals in Glassboro, NJ. Neighborhoods, pricing, lease timing, and local tips.`,
  };

  const baseDescription = `Rowan University housing specialist serving ${ROWAN_DATA.students.toLocaleString()} students. Off-campus apartments and houses in Glassboro and Pitman, NJ. Expert services for students and landlords.`;

  return generateMetadata({
    title: subpage ? titles[subpage] : 'Rowan University Student Housing Specialist',
    description: subpage ? descriptions[subpage] : baseDescription,
    keywords: [
      'rowan university housing',
      'rowan off campus housing',
      'rowan student apartments',
      'glassboro student housing',
      'rowan university rentals',
      'apartments near rowan',
      'rowan housing specialist',
      'pitman rowan housing',
      'rowan landlord services',
    ],
    canonical: subpage ? `/rowan/${subpage}` : '/rowan',
  });
}

/**
 * Generate metadata for blog posts
 */
export function generateBlogMetadata(post: {
  title: string;
  excerpt: string;
  slug: string;
  keywords?: string[];
  image?: string;
}): Metadata {
  return generateMetadata({
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords || [],
    ogImage: post.image,
    canonical: `/blog/${post.slug}`,
  });
}

/**
 * Generate metadata for about page
 */
export function generateAboutMetadata(): Metadata {
  return generateMetadata({
    title: 'About Us - Southern NJ Real Estate Experts',
    description: `Learn about ${BUSINESS_INFO.name}. Expert real estate agents serving Southern New Jersey since ${BUSINESS_INFO.foundingYear}. Local knowledge, proven results, and personalized service across 30+ towns.`,
    keywords: [
      'about excel realty',
      'southern nj real estate team',
      'local real estate experts',
      'gloucester county realtors',
    ],
    canonical: '/about',
  });
}

/**
 * Generate metadata for contact page
 */
export function generateContactMetadata(): Metadata {
  return generateMetadata({
    title: 'Contact Us - Get Started Today',
    description: `Contact ${BUSINESS_INFO.name} for all your Southern NJ real estate needs. Call ${BUSINESS_INFO.phone} or visit our Glassboro office. Serving 30+ towns across Gloucester, Burlington, and Camden counties.`,
    keywords: [
      'contact real estate agent',
      'glassboro real estate office',
      'southern nj realtor contact',
    ],
    canonical: '/contact',
  });
}
