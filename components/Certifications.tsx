import React, { useState, useMemo, useEffect, useRef } from 'react';
import { ExternalLink, Search, Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

type FilterType = 'all' | 'course' | 'cert';

const Certifications: React.FC = () => {
  const { content } = useLanguage();
  const [filter, setFilter] = useState<FilterType>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  const filteredData = useMemo(() => {
    return content.cert_categories.filter((cat: any) => {
      if (filter !== 'all' && cat.type !== filter) return false;
      if (searchQuery.trim() === '') return true;
      const searchLower = searchQuery.toLowerCase();
      if (cat.title.toLowerCase().includes(searchLower)) return true;
      return cat.items.some((item: any) => 
        item.title.toLowerCase().includes(searchLower) || 
        item.tag.toLowerCase().includes(searchLower)
      );
    });
  }, [filter, searchQuery, content]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.05 }
    );
    if (gridRef.current) observer.observe(gridRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#f6f1ea] rounded-[2.5rem] p-8 md:p-12 border border-stone-200/50 shadow-sm transition-all duration-500">
      
      {/* Intro & Search */}
      <div className="mb-12 space-y-8">
        <p className="text-stone-600 leading-relaxed text-sm md:text-lg italic border-l-4 border-amber-600/30 pl-6 max-w-3xl">
          {content.education_intro}
        </p>

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pt-2">
          {/* Categories Filter */}
          <div className="flex p-1 bg-stone-200/50 rounded-2xl w-fit shadow-inner">
            {(['all', 'course', 'cert'] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${filter === f ? 'bg-white text-amber-900 shadow-md' : 'text-stone-500 hover:text-stone-800'}`}
              >
                {f === 'all' ? content.cert_ui.all : f === 'course' ? content.cert_ui.course : content.cert_ui.cert}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full lg:w-80 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 group-focus-within:text-amber-600 transition-colors" size={18} />
            <input
              type="text"
              placeholder={content.cert_ui.search_placeholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-6 py-3.5 rounded-2xl border border-stone-200 bg-white focus:outline-none focus:ring-4 focus:ring-amber-200/30 text-sm shadow-sm transition-all"
            />
          </div>
        </div>
      </div>

      {/* Modern Grid Cards */}
      <div 
        ref={gridRef}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {filteredData.length > 0 ? (
          filteredData.map((category: any, index: number) => (
            <div 
              key={category.id}
              className={`hover-lift bg-white rounded-3xl border border-stone-100 p-8 flex flex-col h-full transition-all duration-700 ${
                isVisible ? 'reveal-active' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="space-y-1">
                  <h4 className="font-bold text-stone-900 text-lg md:text-xl group-hover:text-amber-800 transition-colors">
                    {category.title}
                  </h4>
                  <span className="text-[10px] text-amber-600 font-bold uppercase tracking-[0.2em]">
                    {category.subtitle}
                  </span>
                </div>
                <div className="p-3 rounded-2xl bg-stone-50 text-amber-600/30">
                  <Award size={24} />
                </div>
              </div>

              <div className="flex-1 space-y-4">
                <div className="space-y-2">
                  {category.items.map((item: any, idx: number) => (
                    <div key={idx} className="group/item py-2 border-b border-stone-50 last:border-0">
                      <a 
                        href={item.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="link-underline text-stone-700 hover:text-amber-800 text-sm font-semibold flex items-center justify-between gap-3"
                      >
                        <span className="line-clamp-1">{item.title}</span>
                        <ExternalLink size={14} className="shrink-0 opacity-0 group-hover/item:opacity-100 transition-opacity text-amber-400" />
                      </a>
                      <div className="mt-1">
                        <span className="text-[10px] font-bold text-stone-300 font-mono">#{item.tag}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-stone-50 flex items-center justify-between text-[11px] font-bold text-stone-400 font-mono uppercase tracking-widest">
                <span>{category.items.length} 項目</span>
                <span className="text-stone-200">ID: {category.id.split('-')[1]}</span>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full py-24 text-center bg-white/50 rounded-3xl border-2 border-dashed border-stone-200">
            <p className="text-stone-400 font-bold italic">{content.cert_ui.no_results}</p>
          </div>
        )}
      </div>

      {/* Official Link Footer */}
      <div className="mt-16 text-center pt-10 border-t border-stone-200/50">
         <a 
          href="https://www.credly.com/users/min-ting-zhong.2d9bde9e/badges" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 text-sm font-bold text-stone-500 hover:text-amber-800 transition-all py-4 px-10 rounded-full hover:bg-white hover:shadow-xl group"
        >
          <Award size={18} className="text-amber-500 group-hover:scale-125 transition-transform" />
          <span className="tracking-wide uppercase">{content.cert_ui.credly_link}</span>
          <ExternalLink size={16} className="opacity-40" />
        </a>
      </div>
    </div>
  );
};

export default Certifications;