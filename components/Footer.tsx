import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Building2, ExternalLink, Check, Copy } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import Bilingual from './Bilingual';

const Footer: React.FC = () => {
  const { zh, en } = useLanguage();
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (email: string, id: string) => {
    navigator.clipboard.writeText(email).then(() => {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };

  return (
    <footer id="contact" className="bg-stone-900 text-stone-300 py-20 px-6 scroll-mt-24">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16">
        
        <div>
          <h3 className="text-2xl font-bold text-white mb-8">
            <Bilingual zh={zh.footer.contact} en={en.footer.contact} inline />
          </h3>
          <div className="space-y-5">
            {/* Personal Email */}
            <div className="relative flex items-center group">
              <button 
                onClick={() => handleCopy('rihata0408@gmail.com', 'personal')}
                className="flex items-center gap-4 hover:text-amber-400 transition-colors py-1 text-left w-full group"
                title="Click to copy email"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-amber-400/10 transition-colors">
                  <Mail size={18} className="shrink-0" />
                </div>
                <div className="flex flex-col">
                  <span className="text-stone-400 text-[10px] font-black uppercase tracking-widest">Personal</span>
                  <span className="text-lg">rihata0408@gmail.com</span>
                </div>
                <Copy size={14} className="opacity-0 group-hover:opacity-50 transition-opacity ml-auto" />
              </button>
              {copiedId === 'personal' && (
                <span className="absolute right-0 top-0 bg-amber-500 text-stone-900 text-[10px] font-bold px-2 py-1 rounded animate-bounce">
                  COPIED!
                </span>
              )}
            </div>

            {/* Work Email */}
            <div className="relative flex items-center group">
              <button 
                onClick={() => handleCopy('rihata0408@must.edu.tw', 'work')}
                className="flex items-center gap-4 hover:text-amber-400 transition-colors py-1 text-left w-full group"
                title="Click to copy email"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-amber-400/10 transition-colors">
                  <Building2 size={18} className="shrink-0" />
                </div>
                <div className="flex flex-col">
                  <span className="text-stone-400 text-[10px] font-black uppercase tracking-widest">Work</span>
                  <span className="text-lg">rihata0408@must.edu.tw</span>
                </div>
                <Copy size={14} className="opacity-0 group-hover:opacity-50 transition-opacity ml-auto" />
              </button>
              {copiedId === 'work' && (
                <span className="absolute right-0 top-0 bg-amber-500 text-stone-900 text-[10px] font-bold px-2 py-1 rounded animate-bounce">
                  COPIED!
                </span>
              )}
            </div>

            <a href="tel:+886901111761" className="flex items-center gap-4 hover:text-amber-400 transition-colors py-1">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                <Phone size={18} className="shrink-0" />
              </div>
              <div className="flex flex-col">
                <span className="text-stone-400 text-[10px] font-black uppercase tracking-widest">Phone</span>
                <span className="text-lg">0901-111-761</span>
              </div>
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white mb-8">
            <Bilingual zh={zh.footer.profiles} en={en.footer.profiles} inline />
          </h3>
          <div className="space-y-6">
            <a 
              href="https://www.linkedin.com/in/min-ting-zhong-528494397" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-amber-500/30 hover:bg-amber-500/5 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-stone-800 flex items-center justify-center group-hover:bg-amber-500 transition-colors">
                <Linkedin size={24} className="text-white" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">LinkedIn Profile</p>
                <p className="text-xs text-stone-500">Connect with me professionally</p>
              </div>
              <ExternalLink size={14} className="ml-auto opacity-30 group-hover:opacity-100 transition-opacity" />
            </a>
            
            <a 
              href="https://acade.must.edu.tw/index.aspx?UnitID=1241" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-amber-500/30 hover:bg-amber-500/5 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-stone-800 flex items-center justify-center group-hover:bg-amber-50 transition-colors">
                <Building2 size={24} className="text-white" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">Minghsin University</p>
                <p className="text-xs text-stone-500">Bilingual Education Center</p>
              </div>
              <ExternalLink size={14} className="ml-auto opacity-30 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>

      </div>
      
      <div className="max-w-4xl mx-auto mt-20 pt-10 border-t border-white/5 text-center text-[10px] font-black uppercase tracking-widest text-stone-600">
        <p>© {new Date().getFullYear()} Rita Zhong. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;