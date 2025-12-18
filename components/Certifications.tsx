import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Award, ShieldCheck, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import Bilingual from './Bilingual';

const Certifications: React.FC = () => {
  const { zh, en, content } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.05 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="space-y-16">
      
      {/* Education Intro */}
      <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <p className="text-stone-600 leading-relaxed text-lg italic border-l-4 border-amber-600/30 pl-8 max-w-4xl bg-stone-100/30 py-6 rounded-r-2xl">
          <Bilingual zh={zh.education_intro} en={en.education_intro} />
        </p>
      </div>

      {/* Full Certificates List - Divided by Themes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {content.cert_groups.map((group: any, groupIndex: number) => (
          <div 
            key={group.id} 
            className={`flex flex-col transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            style={{ transitionDelay: `${groupIndex * 150}ms` }}
          >
            {/* Theme Header */}
            <div className="flex items-center justify-between border-b-2 border-stone-200 pb-3 mb-6">
              <h4 className="text-2xl font-bold text-stone-900 tracking-tight">
                <Bilingual 
                  zh={zh.cert_groups[groupIndex].title} 
                  en={en.cert_groups[groupIndex].title} 
                  inline
                />
              </h4>
              <span className="text-[10px] font-mono text-stone-400 font-bold bg-stone-100 px-3 py-1 rounded-full uppercase">
                {group.items.length} Items
              </span>
            </div>

            {/* Expanded List Items */}
            <div className="bg-white rounded-3xl shadow-sm border border-stone-100 overflow-hidden divide-y divide-stone-50">
              {group.items.map((item: any, itemIndex: number) => (
                <a 
                  key={itemIndex}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-4 hover:bg-amber-50/30 transition-all active:scale-[0.98]"
                >
                  <div className="flex items-start gap-3 flex-1 min-w-0">
                    <div className="mt-1 shrink-0">
                       <ChevronRight size={14} className="text-stone-300 group-hover:text-amber-500 transition-colors" />
                    </div>
                    <div className="space-y-0.5 min-w-0">
                      <span className="text-sm font-semibold text-stone-700 group-hover:text-stone-900 transition-colors block leading-snug truncate">
                        {item.title}
                      </span>
                      <span className="text-[9px] font-bold text-stone-300 uppercase tracking-widest block">
                        #{item.tag}
                      </span>
                    </div>
                  </div>
                  <div className="ml-4 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink size={14} className="text-amber-500" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Professional Social Verification */}
      <div className="pt-12 border-t border-stone-200">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <Bilingual 
            zh={<p className="text-stone-400 text-xs font-bold uppercase tracking-[0.3em]">數位徽章與線上查驗</p>}
            en={<p className="text-stone-400 text-[10px] font-bold uppercase tracking-[0.3em]">Digital Verification</p>}
          />
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://www.credly.com/users/min-ting-zhong.2d9bde9e/badges" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-stone-900 text-white rounded-full hover:bg-amber-800 transition-all shadow-xl group"
            >
              <Award size={20} className="text-amber-400" />
              <span className="text-sm font-bold tracking-wide">View on Credly</span>
              <ExternalLink size={16} className="opacity-40" />
            </a>
            <a 
              href="https://skillshop.credential.net/profile/mintingzhong20027/wallet" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-white border border-stone-200 text-stone-700 rounded-full hover:border-amber-500 transition-all shadow-sm group"
            >
              <ShieldCheck size={20} className="text-stone-400 group-hover:text-amber-500" />
              <span className="text-sm font-bold tracking-wide">Skillshop Profile</span>
              <ExternalLink size={16} className="opacity-40" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;