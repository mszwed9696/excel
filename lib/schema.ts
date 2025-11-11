/**
 * JSON-LD Schema Markup Generation
 * Creates structured data for Google and other search engines
 */

import { BUSINESS_INFO, SERVICE_AREAS, SERVICES, ROWAN_DATA } from './seo-config';

/**
 * Organization Schema - Use on homepage
 */
export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: BUSINESS_INFO.name,
    legalName: BUSINESS_INFO.legalName,
    description: BUSINESS_INFO.description,
    url: 'https://excel-realty.com',
    logo: {
      '@type': 'ImageObject',
      url: `https://excel-realty.com${BUSINESS_INFO.logo}`,
    },
    image: `https://excel-realty.com${BUSINESS_INFO.logo}`,
    telephone: BUSINESS_INFO.phone,
    email: BUSINESS_INFO.email,
    foundingDate: BUSINESS_INFO.foundingYear.toString(),
    slogan: BUSINESS_INFO.slogan,

    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_INFO.address.street,
      addressLocality: BUSINESS_INFO.address.city,
      addressRegion: BUSINESS_INFO.address.state,
      postalCode: BUSINESS_INFO.address.zip,
      addressCountry: 'US',
    },

    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS_INFO.geo.latitude,
      longitude: BUSINESS_INFO.geo.longitude,
    },

    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '10:00',
        closes: '16:00',
      },
    ],

    sameAs: [
      BUSINESS_INFO.social.facebook,
      BUSINESS_INFO.social.instagram,
      BUSINESS_INFO.social.linkedin,
      BUSINESS_INFO.social.youtube,
    ],

    areaServed: SERVICE_AREAS.map(area => ({
      '@type': 'City',
      name: area.name,
      '@id': `https://excel-realty.com/towns/${area.slug}`,
    })),

    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Real Estate Services',
      itemListElement: SERVICES.map((service, index) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.name,
          description: service.description,
          url: `https://excel-realty.com/services/${service.slug}`,
        },
        position: index + 1,
      })),
    },
  };
}

/**
 * LocalBusiness Schema with Service Areas
 */
export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://excel-realty.com/#localbusiness',
    name: BUSINESS_INFO.name,
    telephone: BUSINESS_INFO.phone,
    email: BUSINESS_INFO.email,

    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_INFO.address.street,
      addressLocality: BUSINESS_INFO.address.city,
      addressRegion: BUSINESS_INFO.address.state,
      postalCode: BUSINESS_INFO.address.zip,
      addressCountry: 'US',
    },

    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS_INFO.geo.latitude,
      longitude: BUSINESS_INFO.geo.longitude,
    },

    areaServed: SERVICE_AREAS.map(area => ({
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: area.geo.lat,
        longitude: area.geo.lng,
      },
      geoRadius: '5000', // 5km radius around each town
    })),
  };
}

/**
 * Place Schema for Town Pages
 */
export function getTownPlaceSchema(townSlug: string) {
  const town = SERVICE_AREAS.find(t => t.slug === townSlug);
  if (!town) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: `${town.name}, ${town.county}, New Jersey`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: town.name,
      addressRegion: 'NJ',
      addressCountry: 'US',
      postalCode: town.zip[0],
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: town.geo.lat,
      longitude: town.geo.lng,
    },
    description: `${town.name} is a ${town.county} community with ${town.population.toLocaleString()} residents. Known for ${town.highlights.join(', ')}.`,
  };
}

/**
 * Service Schema for Service Pages
 */
export function getServiceSchema(serviceSlug: string, townName?: string) {
  const service = SERVICES.find(s => s.slug === serviceSlug);
  if (!service) return null;

  const serviceName = townName
    ? `${service.name} in ${townName}, NJ`
    : service.name;

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description: service.description,
    provider: {
      '@type': 'RealEstateAgent',
      name: BUSINESS_INFO.name,
      telephone: BUSINESS_INFO.phone,
      url: 'https://excel-realty.com',
    },
    areaServed: townName
      ? {
          '@type': 'City',
          name: townName,
          addressRegion: 'NJ',
        }
      : SERVICE_AREAS.map(area => ({
          '@type': 'City',
          name: area.name,
        })),
    url: townName
      ? `https://excel-realty.com/towns/${SERVICE_AREAS.find(t => t.name === townName)?.slug}/${serviceSlug}`
      : `https://excel-realty.com/services/${serviceSlug}`,
  };
}

/**
 * Educational Organization Schema for Rowan Pages
 */
export function getEducationalOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: ROWAN_DATA.name,
    url: 'https://www.rowan.edu',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Glassboro',
      addressRegion: 'NJ',
      postalCode: '08028',
      addressCountry: 'US',
    },
  };
}

/**
 * Breadcrumb Schema
 */
export function getBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * FAQ Schema for pages with FAQs
 */
export function getFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Article Schema for Blog Posts
 */
export function getArticleSchema(article: {
  title: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: article.image || `https://excel-realty.com${BUSINESS_INFO.logo}`,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: BUSINESS_INFO.name,
      logo: {
        '@type': 'ImageObject',
        url: `https://excel-realty.com${BUSINESS_INFO.logo}`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': article.url,
    },
  };
}

/**
 * Real Estate Listing Schema (for property pages when you have listings)
 */
export function getRealEstateListingSchema(listing: {
  address: string;
  city: string;
  state: string;
  zip: string;
  price: number;
  bedrooms?: number;
  bathrooms?: number;
  squareFeet?: number;
  description: string;
  images?: string[];
  listingType: 'sale' | 'rent';
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    name: `${listing.address}, ${listing.city}, ${listing.state}`,
    description: listing.description,
    url: `https://excel-realty.com/listings/${listing.city.toLowerCase()}/${listing.address.replace(/\s/g, '-').toLowerCase()}`,

    address: {
      '@type': 'PostalAddress',
      streetAddress: listing.address,
      addressLocality: listing.city,
      addressRegion: listing.state,
      postalCode: listing.zip,
      addressCountry: 'US',
    },

    offers: {
      '@type': 'Offer',
      price: listing.price,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      validFrom: new Date().toISOString(),
    },

    ...(listing.bedrooms && {
      numberOfBedrooms: listing.bedrooms,
    }),

    ...(listing.bathrooms && {
      numberOfBathroomsTotal: listing.bathrooms,
    }),

    ...(listing.squareFeet && {
      floorSize: {
        '@type': 'QuantitativeValue',
        value: listing.squareFeet,
        unitCode: 'FTK', // Square feet
      },
    }),

    ...(listing.images && listing.images.length > 0 && {
      image: listing.images,
    }),
  };
}

/**
 * Helper to convert schema to JSON string for embedding
 * Use the Schema component from @/components/Schema for rendering
 */
export function stringifySchema(schema: any): string {
  return JSON.stringify(schema);
}
