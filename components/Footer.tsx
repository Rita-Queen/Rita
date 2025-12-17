import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Building2, ExternalLink, Check, Copy } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { content } = useLanguage();
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (email: string, id: string) => {
    navigator.clipboard.writeText(email).then(() => {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };

  return (
    <footer id="contact" className="bg-stone-900 text-stone-300 py-16 px-6 scroll-mt-24">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
        
        <div>
          <h3 className="text-2xl font-bold text-white mb-6">{content.footer.contact}</h3>
          <div className="space-y-4">
            {/* Personal Email */}
            <div className="relative flex items-center group">
              <a 
                href="mailto:rihata0408@gmail.com" 
                onClick={(e) => {
                  handleCopy('rihata0408@gmail.com', 'personal');
                }}
                className="flex items-center gap-3 hover:text-amber-400 transition-colors py-1 pr-4 rounded-lg group-hover:bg-white/5"
                title="Click to copy & open mail"
              >
                <Mail size={18} className="shrink-0" />
                <span className="truncate">rihata0408@gmail.com</span>
                <Copy size={14} className="opacity-0 group-hover:opacity-50 transition-opacity shrink-0" />
              </a>
              {copiedId === 'personal' && (
                <span className="absolute -right-4 translate-x-full flex items-center gap-1 text-xs font-bold text-amber-400 animate-fade-in-up">
                  <Check size={12} /> Copied!
                </span>
              )}
            </div>

            {/* Work Email */}
            <div className="relative flex items-center group">
              <a 
                href="mailto:rihata0408@must.edu.tw" 
                onClick={(e) => {
                  handleCopy('rihata0408@must.edu.tw', 'work');
                }}
                className="flex items-center gap-3 hover:text-amber-400 transition-colors py-1 pr-4 rounded-lg group-hover:bg-white/5"
                title="Click to copy & open mail"
              >
                <Building2 size={18} className="shrink-0" />
                <span className="truncate">rihata0408@must.edu.tw (Work)</span>
                <Copy size={14} className="opacity-0 group-hover:opacity-50 transition-opacity shrink-0" />
              </a>
              {copiedId === 'work' && (
                <span className="absolute -right-4 translate-x-full flex items-center gap-1 text-xs font-bold text-amber-400 animate-fade-in-up">
                  <Check size={12} /> Copied!
                </span>
              )}
            </div>

            <a href="tel:+886901111761" className="flex items-center gap-3 hover:text-amber-400 transition-colors py-1">
              <Phone size={18} className="shrink-0" />
              <span>0901-111-761</span>
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white mb-6">{content.footer.profiles}</h3>
          <div className="space-y-4">
            <a 
              href="https://www.linkedin.com/in/min-ting-zhong-528494397" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-amber-400 transition-colors py-1"
            >
              <Linkedin size={18} className="shrink-0" />
              <span>LinkedIn Profile</span>
              <ExternalLink size={14} className="opacity-50 shrink-0" />
            </a>
            <a 
              href="https://acade.must.edu.tw/index.aspx?UnitID=1241" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-amber-400 transition-colors py-1"
            >
              <Building2 size={18} className="shrink-0" />
              <span>明新科技大學｜雙語教育中心</span>
              <ExternalLink size={14} className="opacity-50 shrink-0" />
            </a>
          </div>
        </div>

      </div>
      
      <div className="max-w-4xl mx-auto mt-12 pt-8 border-t border-stone-800 text-center text-sm text-stone-500">
        <p>© {new Date().getFullYear()} Rita Zhong. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;