/**
 * Call-to-Action Component
 * Reusable CTA section for conversion optimization
 */

import Button from './Button';
import { BUSINESS_INFO } from '@/lib/seo-config';

interface CTAProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  showPhone?: boolean;
  backgroundColor?: 'primary' | 'secondary' | 'white' | 'gray';
  size?: 'sm' | 'md' | 'lg';
}

export default function CTA({
  title = 'Ready to Get Started?',
  description = `Contact ${BUSINESS_INFO.name} today for expert real estate guidance in Southern New Jersey.`,
  primaryButtonText = 'Contact Us',
  primaryButtonHref = '/contact',
  secondaryButtonText,
  secondaryButtonHref,
  showPhone = true,
  backgroundColor = 'primary',
  size = 'md',
}: CTAProps) {
  const bgClasses = {
    primary: 'bg-primary-600 text-white',
    secondary: 'bg-secondary-500 text-white',
    white: 'bg-white text-gray-900',
    gray: 'bg-gray-100 text-gray-900',
  };

  const sizeClasses = {
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16',
  };

  return (
    <section className={`${bgClasses[backgroundColor]} ${sizeClasses[size]}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-3xl md:text-4xl font-bold font-serif mb-4 ${backgroundColor === 'primary' || backgroundColor === 'secondary' ? 'text-white' : ''}`}>
            {title}
          </h2>
          <p className={`text-lg md:text-xl mb-8 ${backgroundColor === 'primary' || backgroundColor === 'secondary' ? 'text-white/90' : 'text-gray-600'}`}>
            {description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href={primaryButtonHref}
              variant={backgroundColor === 'primary' || backgroundColor === 'secondary' ? 'secondary' : 'primary'}
              size="lg"
            >
              {primaryButtonText}
            </Button>

            {secondaryButtonText && secondaryButtonHref && (
              <Button
                href={secondaryButtonHref}
                variant="outline"
                size="lg"
              >
                {secondaryButtonText}
              </Button>
            )}

            {showPhone && (
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className={`text-lg font-semibold hover:opacity-80 transition-opacity ${
                  backgroundColor === 'primary' || backgroundColor === 'secondary'
                    ? 'text-white'
                    : 'text-primary-600'
                }`}
              >
                or call {BUSINESS_INFO.phone}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
