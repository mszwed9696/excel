/**
 * Blog Listing Page
 * Displays all blog posts with category filtering
 */

import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BUSINESS_INFO } from '@/lib/seo-config';
import { getAllPosts, getCategories } from '@/lib/blog-posts';

export const metadata: Metadata = {
  title: `Real Estate Blog | ${BUSINESS_INFO.name}`,
  description: `Expert real estate advice for Southern New Jersey. Home buying tips, selling strategies, market updates, and neighborhood guides for Gloucester, Burlington, and Camden counties.`,
  keywords: [
    'southern nj real estate blog',
    'home selling tips nj',
    'home buying advice southern new jersey',
    'gloucester county real estate tips',
    'rowan university housing advice',
  ].join(', '),
};

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getCategories();

  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6 text-white">
                Real Estate Blog
              </h1>
              <p className="text-xl md:text-2xl text-white/95">
                Expert advice for buying, selling, and renting in Southern New Jersey
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="section bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-center">Browse by Category</h2>
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map(category => (
                  <span
                    key={category}
                    className="bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-shadow cursor-pointer text-gray-700 font-semibold"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="section bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid gap-8">
                {posts.map(post => (
                  <article key={post.slug} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="p-8">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-semibold">
                          {post.category}
                        </span>
                        <time className="text-sm text-gray-600">
                          {new Date(post.publishedDate).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </time>
                      </div>

                      <h2 className="text-3xl font-bold font-serif mb-4 hover:text-primary-600 transition-colors">
                        <Link href={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h2>

                      <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <Link
                          href={`/blog/${post.slug}`}
                          className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold"
                        >
                          Read More
                          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>

                        <div className="text-sm text-gray-600">
                          By {post.author}
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section bg-secondary-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold font-serif mb-4">Need Real Estate Help?</h2>
              <p className="text-xl text-gray-700 mb-8">
                Our blog provides valuable information, but nothing beats personalized guidance from a local expert.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Contact Us
                </Link>
                <Link
                  href="/services/buy"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-600 bg-white border-2 border-primary-600 rounded-lg hover:bg-primary-50 transition-colors"
                >
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
