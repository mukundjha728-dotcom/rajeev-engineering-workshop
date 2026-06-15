import React from 'react';
import { Link } from 'react-router-dom';
import { blogsData } from '../data/blogs';
import SEO from '../components/SEO';
import { Calendar, User, ArrowRight } from 'lucide-react';

const BlogList = () => {
  return (
    <div className="bg-[#081225] min-h-screen pt-32 pb-24 font-sans text-white">
      
      <SEO 
        title="Industrial Iron Works Blog | Rajeev Engineering Workshop"
        description="Expert insights, buying guides, and trends in custom iron fabrication, gates, shutters, and industrial sheds in Bihar."
        keywords="iron works blog, gate buying guide, bihar fabrication, steel shed tips"
        canonical="/blog"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-6">
            Fabrication <span className="text-[#D4AF37]">Insights</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Expert guides, architectural trends, and everything you need to know about premium iron and steel fabrication.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogsData.map(blog => (
            <Link 
              key={blog.id} 
              to={`/blog/${blog.slug}`}
              className="bg-[#111827] rounded-sm border border-white/5 flex flex-col group hover:border-[#D4AF37]/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(212,175,55,0.15)] overflow-hidden"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-[#081225]">
                <img 
                  src={blog.featuredImage} 
                  alt={blog.title} 
                  loading="lazy"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827] to-transparent opacity-80"></div>
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center space-x-4 text-xs font-bold text-[#D4AF37] uppercase tracking-widest mb-4">
                  <span className="flex items-center space-x-1"><Calendar size={12}/> <span>{new Date(blog.updatedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span></span>
                  <span className="flex items-center space-x-1"><User size={12}/> <span>{blog.author}</span></span>
                </div>
                
                <h2 className="text-xl font-black text-white leading-tight mb-3 group-hover:text-[#D4AF37] transition-colors">{blog.title}</h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">{blog.description}</p>
                
                <div className="flex items-center space-x-2 text-white text-xs font-black uppercase tracking-widest group-hover:text-[#D4AF37] transition-colors mt-auto">
                  <span>Read Article</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
};

export default BlogList;
