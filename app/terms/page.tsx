/**
 * Terms of Service Page
 */

import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BUSINESS_INFO } from '@/lib/seo-config';

export const metadata: Metadata = {
  title: `Terms of Service | ${BUSINESS_INFO.name}`,
  description: `Terms of Service for ${BUSINESS_INFO.name}. Read our terms and conditions for using our website and services.`,
  robots: {
    index: false,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <>
      <Header />

      <main>
        <section className="section bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6">Terms of Service</h1>
              <p className="text-gray-600 mb-8">
                <strong>Effective Date:</strong> January 1, 2025
              </p>

              <p>
                Welcome to {BUSINESS_INFO.name}. These Terms of Service ("Terms") govern your use of our website
                excel-realty.com (the "Site") and the services we provide. By accessing or using our Site, you agree
                to be bound by these Terms. If you do not agree with these Terms, please do not use our Site.
              </p>

              <h2>1. Use of Our Site</h2>

              <h3>Permitted Use</h3>
              <p>You may use our Site for lawful purposes only. You agree not to:</p>
              <ul>
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the rights of others</li>
                <li>Transmit any harmful or malicious code</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Scrape, harvest, or collect information from the Site using automated means</li>
                <li>Impersonate any person or entity</li>
                <li>Submit false or misleading information</li>
              </ul>

              <h3>User Accounts</h3>
              <p>
                If you create an account on our Site, you are responsible for maintaining the confidentiality of
                your account credentials and for all activities that occur under your account. You agree to notify
                us immediately of any unauthorized use of your account.
              </p>

              <h2>2. Real Estate Services</h2>

              <h3>No Guarantee of Results</h3>
              <p>
                While we strive to provide excellent real estate services, we do not guarantee specific results
                such as the sale, purchase, or rental of any property. Property transactions depend on numerous
                factors beyond our control.
              </p>

              <h3>Listings and Information</h3>
              <p>
                Property listings and information on our Site are provided for general informational purposes.
                We make reasonable efforts to ensure accuracy, but we do not warrant that all information is
                current, complete, or error-free. Property availability, pricing, and features are subject to
                change without notice.
              </p>

              <h3>Third-Party Listings</h3>
              <p>
                Some property listings may be provided by third-party sources including MLS (Multiple Listing
                Service). We are not responsible for the accuracy of third-party listings or any issues arising
                from transactions involving third-party properties.
              </p>

              <h2>3. Rental Applications</h2>

              <h3>Application Process</h3>
              <p>
                When you submit a rental application through our Site or services, you agree that all information
                provided is accurate and complete. Submission of an application does not guarantee approval or
                that you will be offered a lease.
              </p>

              <h3>Background and Credit Checks</h3>
              <p>
                By submitting a rental application, you authorize us to conduct background checks, credit checks,
                and verify your rental history, employment, and income. Application fees are non-refundable.
              </p>

              <h3>Fair Housing</h3>
              <p>
                {BUSINESS_INFO.name} is committed to fair housing practices. We do not discriminate on the basis
                of race, color, religion, sex, national origin, familial status, disability, or any other protected
                characteristic under federal, state, or local fair housing laws.
              </p>

              <h2>4. Intellectual Property</h2>

              <h3>Copyright and Trademarks</h3>
              <p>
                All content on this Site, including text, graphics, logos, images, and software, is the property
                of {BUSINESS_INFO.name} or its licensors and is protected by copyright and trademark laws. You
                may not copy, reproduce, distribute, or create derivative works from our content without express
                written permission.
              </p>

              <h3>User-Generated Content</h3>
              <p>
                If you submit content to our Site (e.g., reviews, comments, photos), you grant us a non-exclusive,
                royalty-free, worldwide license to use, reproduce, modify, and distribute that content in connection
                with our services.
              </p>

              <h2>5. Disclaimer of Warranties</h2>
              <p>
                OUR SITE AND SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND,
                EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY,
                FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
              </p>
              <p>
                We do not warrant that:
              </p>
              <ul>
                <li>Our Site will be uninterrupted, timely, secure, or error-free</li>
                <li>Results obtained from using our Site will be accurate or reliable</li>
                <li>Any defects in our Site will be corrected</li>
              </ul>

              <h2>6. Limitation of Liability</h2>
              <p>
                TO THE FULLEST EXTENT PERMITTED BY LAW, {BUSINESS_INFO.name.toUpperCase()} SHALL NOT BE LIABLE
                FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS
                OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER
                INTANGIBLE LOSSES RESULTING FROM:
              </p>
              <ul>
                <li>Your use or inability to use our Site or services</li>
                <li>Any unauthorized access to or use of our servers</li>
                <li>Any errors or omissions in content</li>
                <li>Any property transaction or rental application</li>
              </ul>

              <h2>7. Indemnification</h2>
              <p>
                You agree to indemnify, defend, and hold harmless {BUSINESS_INFO.name}, its officers, directors,
                employees, and agents from any claims, liabilities, damages, losses, costs, or expenses (including
                reasonable attorneys' fees) arising from:
              </p>
              <ul>
                <li>Your use of our Site or services</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any rights of another person or entity</li>
                <li>Any information you submit through our Site</li>
              </ul>

              <h2>8. Third-Party Links and Services</h2>
              <p>
                Our Site may contain links to third-party websites or services (e.g., MLS portals, mortgage
                calculators, social media). We are not responsible for the content, privacy policies, or practices
                of third-party sites. Your use of third-party sites is at your own risk.
              </p>

              <h2>9. Termination</h2>
              <p>
                We reserve the right to terminate or suspend your access to our Site at any time, without notice,
                for conduct that we believe violates these Terms or is harmful to other users, us, or third parties,
                or for any other reason.
              </p>

              <h2>10. Governing Law and Dispute Resolution</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the State of New Jersey,
                without regard to its conflict of law provisions.
              </p>
              <p>
                Any disputes arising from these Terms or your use of our Site shall be resolved through binding
                arbitration in Gloucester County, New Jersey, except that either party may seek injunctive relief
                in court to prevent irreparable harm. You waive any right to a jury trial.
              </p>

              <h2>11. Changes to These Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon
                posting to the Site. Your continued use of the Site after changes are posted constitutes your
                acceptance of the revised Terms. We encourage you to review these Terms periodically.
              </p>

              <h2>12. Severability</h2>
              <p>
                If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions
                shall continue in full force and effect.
              </p>

              <h2>13. Entire Agreement</h2>
              <p>
                These Terms constitute the entire agreement between you and {BUSINESS_INFO.name} regarding your
                use of our Site and supersede any prior agreements or understandings.
              </p>

              <h2>14. Contact Information</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us:
              </p>
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

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg mt-8 not-prose">
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong> These Terms of Service are a general template. For legally binding terms
                  specific to your situation, we recommend consulting with a qualified attorney licensed in New Jersey.
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
