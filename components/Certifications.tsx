import React, { useState, useMemo } from 'react';
import { ExternalLink, Search } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

type FilterType = 'all' | 'course' | 'cert';

const Certifications: React.FC = () => {
  const { content } = useLanguage();
  const [filter, setFilter] = useState<FilterType>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = useMemo(() => {
    return content.cert_categories.filter((cat: any) => {
      // Filter by type (tab)
      if (filter !== 'all' && cat.type !== filter) return false;
      
      // Filter by search query (if exists)
      if (searchQuery.trim() === '') return true;
      
      const searchLower = searchQuery.toLowerCase();
      // Check category title
      if (cat.title.toLowerCase().includes(searchLower)) return true;
      // Check items inside
      const hasMatchingItems = cat.items.some((item: any) => 
        item.title.toLowerCase().includes(searchLower) || 
        item.tag.toLowerCase().includes(searchLower)
      );
      return hasMatchingItems;
    });
  }, [filter, searchQuery, content]);

  return (
    <div className="bg-[#f6f1ea] rounded-3xl p-6 md:p-8 border border-stone-200/50 shadow-sm">
      
      <div className="mb-6 space-y-4">
        <p className="text-stone-600 leading-relaxed text-sm md:text-base">
          {content.education_intro}
        </p>

        {/* Controls: Tabs & Search */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mt-6">
          <div className="flex p-1 bg-stone-200/50 rounded-xl w-fit">
            {(['all', 'course', 'cert'] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  filter === f 
                    ? 'bg-white text-amber-900 shadow-sm' 
                    : 'text-stone-500 hover:text-stone-700'
                }`}
              >
                {f === 'all' ? content.cert_ui.all : f === 'course' ? content.cert_ui.course : content.cert_ui.cert}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" size={16} />
            <input
              type="text"
              placeholder={content.cert_ui.search_placeholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl border border-stone-200 bg-white focus:outline-none focus:ring-2 focus:ring-amber-200/50 focus:border-amber-400 text-sm"
            />
          </div>
        </div>
      </div>

      {/* Accordion List */}
      <div className="space-y-3">
        {filteredData.length > 0 ? (
          filteredData.map((category: any) => (
            <details 
              key={category.id}
              className="group bg-white rounded-xl border border-stone-100 overflow-hidden transition-all duration-300 open:bg-[#f1dfc8]/30 open:border-amber-100"
              open
            >
              <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none select-none">
                <div>
                  <h4 className="font-bold text-stone-800 text-sm md:text-base">{category.title}</h4>
                  <span className="text-xs text-stone-500 mt-1 block">{category.subtitle}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono bg-stone-100 text-stone-500 px-2 py-1 rounded-md">
                    {category.items.length}
                  </span>
                  <span className="transform group-open:rotate-180 transition-transform duration-300 text-amber-600">▼</span>
                </div>
              </summary>

              <div className="px-5 pb-5 pt-2">
                <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3">
                  {category.items.map((item: any, idx: number) => (
                    <li key={idx} className="text-sm flex items-start justify-between gap-2 border-b border-stone-100/50 pb-2 last:border-0 last:pb-0">
                      <a 
                        href={item.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-stone-700 hover:text-amber-700 hover:underline decoration-amber-300 decoration-2 underline-offset-2 transition-all line-clamp-1 flex-1"
                        title={item.title}
                      >
                        {item.title}
                      </a>
                      <span className="shrink-0 text-[10px] px-2 py-0.5 rounded-full bg-[#e6d3b1] text-[#5a4325] font-medium">
                        {item.tag}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </details>
          ))
        ) : (
          <div className="text-center py-12 text-stone-400">
            {content.cert_ui.no_results}
          </div>
        )}
      </div>

      <div className="mt-6 text-center">
         <a 
          href="https://www.credly.com/users/min-ting-zhong.2d9bde9e/badges" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-amber-700 transition-colors"
        >
          <span>{content.cert_ui.credly_link}</span>
          <ExternalLink size={14} />
        </a>
      </div>
    </div>
  );
};

export default Certifications;