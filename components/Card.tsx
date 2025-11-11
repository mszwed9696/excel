/**
 * Card Component
 * Reusable card for displaying content blocks
 */

import Link from 'next/link';

interface CardProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  href?: string;
  children?: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}

export default function Card({
  title,
  description,
  icon,
  href,
  children,
  className = '',
  hoverable = true,
}: CardProps) {
  const baseClasses = 'bg-white rounded-lg border border-gray-200 p-6';
  const hoverClasses = hoverable ? 'transition-all duration-200 hover:shadow-lg hover:border-primary-300' : '';
  const classes = `${baseClasses} ${hoverClasses} ${className}`;

  const content = (
    <>
      {icon && (
        <div className="mb-4 text-4xl">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-semibold mb-2 text-primary-700">
        {title}
      </h3>
      {description && (
        <p className="text-gray-600 mb-4">
          {description}
        </p>
      )}
      {children}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`block ${classes}`}>
        {content}
        <div className="mt-4 text-primary-600 font-medium inline-flex items-center">
          Learn More
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </Link>
    );
  }

  return <div className={classes}>{content}</div>;
}
