/**
 * Privacy Policy Page
 */

import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BUSINESS_INFO } from '@/lib/seo-config';

export const metadata: Metadata = {
  title: `Privacy Policy | ${BUSINESS_INFO.name}`,
  description: `Privacy policy for ${BUSINESS_INFO.name}. Learn how we collect, use, and protect your personal information.`,
  robots: {
    index: false,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <>
      <Header />

      <main>
        <section className="section bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6">Privacy Policy</h1>
              <p className="text-gray-600 mb-8">
                <strong>Effective Date:</strong> January 1, 2025
              </p>

              <p>
                {BUSINESS_INFO.name} ("we," "us," or "our") is committed to protecting your privacy. This Privacy
                Policy explains how we collect, use, disclose, and safeguard your information when you visit our
                website excel-realty.com (the "Site") or use our services.
              </p>

              <h2>Information We Collect</h2>

              <h3>Personal Information</h3>
              <p>We may collect personal information that you voluntarily provide to us when you:</p>
              <ul>
                <li>Fill out contact forms on our Site</li>
                <li>Request property information or schedule viewings</li>
                <li>Subscribe to newsletters or email updates</li>
                <li>Apply for rental properties</li>
                <li>Communicate with us via phone, email, or text message</li>
              </ul>

              <p>The personal information we collect may include:</p>
              <ul>
                <li>Name and contact information (email address, phone number, mailing address)</li>
                <li>Student information (if applying for Rowan housing)</li>
                <li>Rental application information (employment, income, rental history)</li>
                <li>Credit and background check information (with your consent)</li>
                <li>Property preferences and search criteria</li>
              </ul>

              <h3>Automatically Collected Information</h3>
              <p>When you visit our Site, we may automatically collect certain information, including:</p>
              <ul>
                <li>IP address and browser type</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website addresses</li>
                <li>Device information</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>

              <h2>How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Provide real estate services and respond to your inquiries</li>
                <li>Process rental applications and tenant screening</li>
                <li>Send property listings and market updates</li>
                <li>Communicate about services, promotions, and events</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
                <li>Prevent fraud and ensure security</li>
              </ul>

              <h2>Disclosure of Your Information</h2>
              <p>We may share your information with:</p>
              <ul>
                <li><strong>Service Providers:</strong> Third-party vendors who perform services on our behalf (e.g., credit check agencies, background screening companies, email marketing platforms)</li>
                <li><strong>Property Owners:</strong> When you apply for rental properties, we share your application information with property owners</li>
                <li><strong>Legal Requirements:</strong> When required by law, court order, or governmental authority</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              </ul>

              <p>We do not sell your personal information to third parties.</p>

              <h2>Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to enhance your browsing experience, analyze site
                traffic, and understand where our visitors are coming from. You can control cookies through your
                browser settings, but disabling cookies may limit some functionality of the Site.
              </p>

              <h2>Third-Party Links</h2>
              <p>
                Our Site may contain links to third-party websites (e.g., MLS listings, social media platforms).
                We are not responsible for the privacy practices of these third-party sites. We encourage you to
                review their privacy policies before providing any personal information.
              </p>

              <h2>Data Security</h2>
              <p>
                We implement reasonable security measures to protect your personal information from unauthorized
                access, alteration, disclosure, or destruction. However, no method of transmission over the Internet
                or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>

              <h2>Your Privacy Rights</h2>
              <p>Depending on your location, you may have certain rights regarding your personal information:</p>
              <ul>
                <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal obligations)</li>
                <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time</li>
              </ul>

              <p>
                To exercise these rights, please contact us at <a href={`mailto:${BUSINESS_INFO.email}`}>{BUSINESS_INFO.email}</a> or
                call <a href={`tel:${BUSINESS_INFO.phone}`}>{BUSINESS_INFO.phone}</a>.
              </p>

              <h2>Children's Privacy</h2>
              <p>
                Our Site and services are not directed to individuals under the age of 18. We do not knowingly
                collect personal information from children. If you believe we have collected information from a
                child, please contact us immediately.
              </p>

              <h2>Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. The updated version will be indicated by an
                updated "Effective Date" at the top of this page. We encourage you to review this Privacy Policy
                periodically for any changes.
              </p>

              <h2>Contact Us</h2>
              <p>If you have questions or concerns about this Privacy Policy, please contact us:</p>
              <div className="bg-gray-50 p-6 rounded-lg not-prose">
                <p className="mb-2">
                  <strong>{BUSINESS_INFO.name}</strong>
                </p>
                <p className="mb-2">
                  {BUSINESS_INFO.address.street}<br />
                  {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.zip}
                </p>
                <p className="mb-2">
                  <strong>Phone:</strong> <a href={`tel:${BUSINESS_INFO.phone}`} className="text-primary-600 hover:text-primary-700">{BUSINESS_INFO.phone}</a>
                </p>
                <p>
                  <strong>Email:</strong> <a href={`mailto:${BUSINESS_INFO.email}`} className="text-primary-600 hover:text-primary-700">{BUSINESS_INFO.email}</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
