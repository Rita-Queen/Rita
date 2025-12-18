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
    <div ref={containerRef} className="space-y-20">
      
      {/* Grid of Theme Groups */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16">
        {content.cert_groups.map((group: any, groupIndex: number) => (
          <div 
            key={group.id} 
            className={`flex flex-col transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            style={{ transitionDelay: `${groupIndex * 100}ms` }}
          >
            {/* Theme Header */}
            <div className="flex items-end justify-between border-b-2 border-stone-200 pb-4 mb-6">
              <h4 className="text-xl md:text-2xl font-extrabold text-stone-900 tracking-tight">
                <Bilingual 
                  zh={zh.cert_groups[groupIndex].title} 
                  en={en.cert_groups[groupIndex].title} 
                  inline
                />
              </h4>
              <span className="text-[10px] font-mono text-stone-400 font-black bg-stone-100 px-3 py-1 rounded-full uppercase tracking-widest">
                {group.items.length} Items
              </span>
            </div>

            {/* List of Certificates in Group */}
            <div className="bg-white rounded-[2rem] shadow-sm border border-stone-100 overflow-hidden divide-y divide-stone-50">
              {group.items.map((item: any, itemIndex: number) => (
                <a 
                  key={itemIndex}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-4 md:p-5 hover:bg-amber-50/40 transition-all active:scale-[0.99]"
                >
                  <div className="flex items-start gap-4 flex-1 min-w-0">
                    <div className="mt-1.5 shrink-0">
                       <ChevronRight size={14} className="text-stone-300 group-hover:text-amber-600 transition-colors" />
                    </div>
                    <div className="space-y-1 min-w-0">
                      <span className="text-sm md:text-base font-bold text-stone-700 group-hover:text-stone-900 transition-colors block leading-tight">
                        {item.title}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-[9px] font-black text-amber-600/60 uppercase tracking-widest bg-amber-50 px-2 py-0.5 rounded">
                          #{item.tag}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="ml-4 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink size={16} className="text-amber-500" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Verification Footer */}
      <div className="pt-16 border-t border-stone-200">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <Bilingual 
            zh={<p className="text-stone-400 text-xs font-black uppercase tracking-[0.4em]">數位徽章與線上查驗</p>}
            en={<p className="text-stone-400 text-[10px] font-black uppercase tracking-[0.4em]">Credential Verification</p>}
          />
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://www.credly.com/users/min-ting-zhong.2d9bde9e/badges" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-4 px-8 py-4 bg-stone-900 text-white rounded-full hover:bg-amber-800 transition-all shadow-xl group hover:-translate-y-1"
            >
              <Award size={20} className="text-amber-400" />
              <span className="text-sm font-bold tracking-wide">Credly Badges</span>
              <ExternalLink size={16} className="opacity-30 group-hover:opacity-100" />
            </a>
            <a 
              href="https://skillshop.credential.net/profile/mintingzhong20027/wallet" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-4 px-8 py-4 bg-white border-2 border-stone-100 text-stone-800 rounded-full hover:border-amber-600 hover:text-amber-800 transition-all shadow-sm group hover:-translate-y-1"
            >
              <ShieldCheck size={20} className="text-stone-400 group-hover:text-amber-600" />
              <span className="text-sm font-bold tracking-wide">Skillshop Wallet</span>
              <ExternalLink size={16} className="opacity-30 group-hover:opacity-100" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;