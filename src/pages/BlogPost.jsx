import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogsData } from '../data/blogs';
import { catalogData } from '../data/catalog';
import SEO from '../components/SEO';
import { Calendar, User, ChevronRight, ArrowLeft, ArrowRight } from 'lucide-react';

const BlogPost = () => {
  const { slug } = useParams();
  
  // Find blog
  const blog = blogsData.find(b => b.slug === slug);

  // Handle 404
  if (!blog) {
    return (
      <div className="min-h-screen bg-[#081225] flex flex-col items-center justify-center pt-24 px-4 text-center">
        <h1 className="text-6xl font-black text-white mb-4">404</h1>
        <p className="text-xl text-gray-400 mb-8">Article not found.</p>
        <Link to="/blog" className="bg-[#D4AF37] text-[#081225] px-8 py-3 rounded-sm font-black uppercase tracking-widest hover:bg-yellow-500 transition-colors">
          Back to Blog
        </Link>
      </div>
    );
  }

  // Get 3 random related products for internal linking
  const relatedProducts = catalogData
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  // SCHEMA MARKUP
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": blog.title,
    "image": [blog.featuredImage],
    "datePublished": blog.updatedAt,
    "dateModified": blog.updatedAt,
    "author": [{
        "@type": "Person",
        "name": blog.author
    }],
    "publisher": {
      "@type": "Organization",
      "name": "Rajeev Engineering Workshop",
      "logo": {
        "@type": "ImageObject",
        "url": "https://rajeev-engineering-workshop.vercel.app/logo.png"
      }
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": blog?.faq?.map(f => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer
      }
    })) || []
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://rajeev-engineering-workshop.vercel.app/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://rajeev-engineering-workshop.vercel.app/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": blog.title,
        "item": `https://rajeev-engineering-workshop.vercel.app/blog/${blog.slug}`
      }
    ]
  };

  return (
    <div className="bg-[#081225] min-h-screen pt-24 pb-24 font-sans text-white">
      
      <SEO 
        title={`${blog?.title || "Blog"} | Rajeev Engineering`}
        description={blog?.description}
        keywords={blog?.keywords}
        image={blog?.featuredImage}
        canonical={`/blog/${blog?.slug}`}
        type="article"
        schemaList={[articleSchema, faqSchema, breadcrumbSchema]}
      />

      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <nav className="flex items-center space-x-2 text-xs font-bold text-gray-400 uppercase tracking-wider mb-6">
          <Link to="/" className="hover:text-[#D4AF37] transition-colors">Home</Link>
          <ChevronRight size={12} className="text-gray-600" />
          <Link to="/blog" className="hover:text-[#D4AF37] transition-colors">Blog</Link>
          <ChevronRight size={12} className="text-gray-600" />
          <span className="text-[#D4AF37] truncate">{blog.title}</span>
        </nav>
        
        <Link 
          to="/blog"
          className="inline-flex items-center space-x-2 text-gray-400 hover:text-white font-bold uppercase tracking-widest transition-colors group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Articles</span>
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Article Header */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight leading-tight mb-6">
            {blog.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-sm font-bold text-gray-400 uppercase tracking-widest">
            {blog?.updatedAt && (
              <span className="flex items-center space-x-2">
                <Calendar size={16} className="text-[#D4AF37]"/> 
                <span>{new Date(blog.updatedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </span>
            )}
            <span className="hidden sm:inline text-gray-700">|</span>
            <span className="flex items-center space-x-2"><User size={16} className="text-[#D4AF37]"/> <span>By {blog?.author || 'Rajeev Engineering'}</span></span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative aspect-[21/9] rounded-sm overflow-hidden mb-12 border border-white/10 shadow-2xl">
          <img src={blog.featuredImage} alt={blog.title} className="w-full h-full object-cover" />
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          <div className="lg:col-span-3">
            {/* Prose Content */}
            <div 
              className="prose prose-invert prose-lg max-w-none prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tight prose-h2:text-[#D4AF37] prose-h2:border-l-4 prose-h2:border-[#D4AF37] prose-h2:pl-4 prose-p:text-gray-300 prose-p:leading-relaxed prose-a:text-[#D4AF37] prose-li:text-gray-300"
              dangerouslySetInnerHTML={{ __html: blog?.content || '' }}
            />

            {/* FAQs */}
            <div className="mt-16 pt-12 border-t border-white/10">
              <h2 className="text-2xl font-black text-white uppercase tracking-widest mb-8 border-l-4 border-[#D4AF37] pl-4">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {blog?.faq?.map((faq, index) => (
                  <div key={index} className="bg-[#111827] p-6 rounded-sm border border-white/5">
                    <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
                    <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* CTA */}
            <div className="mt-16 bg-[#D4AF37] p-8 rounded-sm text-center">
              <h3 className="text-2xl font-black text-[#081225] uppercase tracking-tight mb-4">Ready to Start Your Project?</h3>
              <p className="text-[#081225]/80 font-bold mb-6 max-w-lg mx-auto">Get in touch with Rajeev Engineering Workshop for premium, durable iron fabrication in Bihar.</p>
              <Link to="/contact" className="inline-block bg-[#081225] text-white px-8 py-4 rounded-sm font-black uppercase tracking-widest hover:bg-[#111827] transition-colors">
                Contact Us Now
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-[#111827] border border-white/5 p-6 rounded-sm sticky top-28">
              <h3 className="text-sm font-black text-white uppercase tracking-widest mb-6 pb-2 border-b border-white/10">Top Designs</h3>
              <div className="space-y-6">
                {relatedProducts.map(product => (
                  <Link key={product.id} to={`/designs/${product.slug}`} className="group block">
                    <div className="aspect-[4/3] rounded-sm overflow-hidden mb-3 border border-white/10">
                      <img src={product.image} alt={product.nameKey} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <h4 className="text-white text-sm font-bold uppercase tracking-wide group-hover:text-[#D4AF37] transition-colors">{product.nameKey}</h4>
                  </Link>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-white/10">
                <Link to="/designs" className="text-xs font-black text-[#D4AF37] uppercase tracking-widest hover:text-white transition-colors flex items-center space-x-1">
                  <span>View All Designs</span>
                  <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default BlogPost;
