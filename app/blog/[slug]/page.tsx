/**
 * Dynamic Blog Post Page
 * Renders individual blog posts with SEO optimization
 */

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Schema from '@/components/Schema';
import { getAllPosts, getPostBySlug } from '@/lib/blog-posts';
import { generateBlogMetadata } from '@/lib/metadata';
import { getBreadcrumbSchema } from '@/lib/schema';

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return generateBlogMetadata(post);
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const breadcrumbs = [
    { name: 'Home', url: 'https://excel-realty.com' },
    { name: 'Blog', url: 'https://excel-realty.com/blog' },
    { name: post.title, url: `https://excel-realty.com/blog/${post.slug}` },
  ];

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    author: {
      '@type': 'Organization',
      name: post.author,
    },
    datePublished: post.publishedDate,
    dateModified: post.publishedDate,
    keywords: post.keywords.join(', '),
  };

  return (
    <>
      <Schema data={articleSchema} />
      <Schema data={getBreadcrumbSchema(breadcrumbs)} />
      <Header />

      <main>
        {/* Article Header */}
        <article className="section bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Breadcrumbs */}
              <nav className="mb-8">
                <ol className="flex items-center text-sm text-gray-600">
                  <li>
                    <Link href="/" className="hover:text-primary-600">Home</Link>
                  </li>
                  <li className="mx-2">/</li>
                  <li>
                    <Link href="/blog" className="hover:text-primary-600">Blog</Link>
                  </li>
                  <li className="mx-2">/</li>
                  <li className="text-gray-900">{post.title}</li>
                </ol>
              </nav>

              {/* Post Header */}
              <header className="mb-12">
                <div className="flex items-center gap-4 mb-6">
                  <span className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold">
                    {post.category}
                  </span>
                  <time className="text-gray-600">
                    {new Date(post.publishedDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6 leading-tight">
                  {post.title}
                </h1>

                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  {post.excerpt}
                </p>

                <div className="flex items-center text-gray-600">
                  <span>By {post.author}</span>
                </div>
              </header>

              {/* Post Content */}
              <div className="prose prose-lg max-w-none">
                {post.content.split('\n').map((paragraph, idx) => {
                  // Handle headings
                  if (paragraph.startsWith('## ')) {
                    return <h2 key={idx}>{paragraph.replace('## ', '')}</h2>;
                  }
                  if (paragraph.startsWith('### ')) {
                    return <h3 key={idx}>{paragraph.replace('### ', '')}</h3>;
                  }

                  // Handle bold text
                  if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                    return <p key={idx}><strong>{paragraph.replace(/\*\*/g, '')}</strong></p>;
                  }

                  // Handle lists
                  if (paragraph.startsWith('- ')) {
                    return (
                      <li key={idx} className="ml-6">
                        {paragraph.replace('- ', '').replace(/\*\*/g, '')}
                      </li>
                    );
                  }

                  // Handle emoji flags
                  if (paragraph.startsWith('🚩')) {
                    return (
                      <p key={idx} className="flex items-start gap-2">
                        <span>🚩</span>
                        <span>{paragraph.replace('🚩 ', '')}</span>
                      </p>
                    );
                  }

                  // Regular paragraphs
                  if (paragraph.trim()) {
                    return <p key={idx}>{paragraph}</p>;
                  }

                  return null;
                })}
              </div>

              {/* Post Footer */}
              <footer className="mt-12 pt-8 border-t border-gray-200">
                <div className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4">Tagged Keywords</h3>
                  <div className="flex flex-wrap gap-2">
                    {post.keywords.map(keyword => (
                      <span
                        key={keyword}
                        className="bg-white px-4 py-2 rounded-full text-sm text-gray-700 border border-gray-200"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </article>

        {/* Related Posts / CTA */}
        <section className="section bg-secondary-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold font-serif mb-4">Need Personalized Advice?</h2>
              <p className="text-xl text-gray-700 mb-8">
                Our local experts are here to help with all your Southern New Jersey real estate needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Contact Us Today
                </Link>
                <Link
                  href="/blog"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-600 bg-white border-2 border-primary-600 rounded-lg hover:bg-primary-50 transition-colors"
                >
                  ← Back to Blog
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
