import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { generateHomeMetadata } from "@/lib/metadata";
import { BUSINESS_INFO } from "@/lib/seo-config";
import Schema from "@/components/Schema";
import { getOrganizationSchema, getLocalBusinessSchema } from "@/lib/schema";

// Modern, professional sans-serif for body text
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Elegant serif for headings
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  ...generateHomeMetadata(),
  metadataBase: new URL('https://excel-realty.com'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* Preconnect to important domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Schema Markup - Organization & LocalBusiness */}
        <Schema data={getOrganizationSchema()} />
        <Schema data={getLocalBusinessSchema()} />

        {/* Verification tags (add these when you have accounts) */}
        {/* <meta name="google-site-verification" content="your-verification-code" /> */}
        {/* <meta name="facebook-domain-verification" content="your-verification-code" /> */}
      </head>
      <body
        className={`${inter.className} antialiased bg-white text-gray-900`}
      >
        {/* Global business info in microdata format for additional SEO */}
        <div itemScope itemType="https://schema.org/RealEstateAgent" style={{ display: 'none' }}>
          <span itemProp="name">{BUSINESS_INFO.name}</span>
          <span itemProp="telephone">{BUSINESS_INFO.phone}</span>
          <span itemProp="email">{BUSINESS_INFO.email}</span>
          <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
            <span itemProp="streetAddress">{BUSINESS_INFO.address.street}</span>
            <span itemProp="addressLocality">{BUSINESS_INFO.address.city}</span>
            <span itemProp="addressRegion">{BUSINESS_INFO.address.state}</span>
            <span itemProp="postalCode">{BUSINESS_INFO.address.zip}</span>
          </div>
        </div>

        {children}
      </body>
    </html>
  );
}
