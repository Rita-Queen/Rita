import React from 'react';
import { Mail, Phone, Linkedin, Building2, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { content } = useLanguage();

  return (
    <footer id="contact" className="bg-stone-900 text-stone-300 py-16 px-6 scroll-mt-24">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
        
        <div>
          <h3 className="text-2xl font-bold text-white mb-6">{content.footer.contact}</h3>
          <div className="space-y-4">
            <a href="mailto:rihata0408@gmail.com" className="flex items-center gap-3 hover:text-amber-400 transition-colors">
              <Mail size={18} />
              <span>rihata0408@gmail.com</span>
            </a>
            <a href="mailto:rihata0408@must.edu.tw" className="flex items-center gap-3 hover:text-amber-400 transition-colors">
              <Building2 size={18} />
              <span>rihata0408@must.edu.tw (Work)</span>
            </a>
            <a href="tel:+886901111761" className="flex items-center gap-3 hover:text-amber-400 transition-colors">
              <Phone size={18} />
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
              className="flex items-center gap-3 hover:text-amber-400 transition-colors"
            >
              <Linkedin size={18} />
              <span>LinkedIn Profile</span>
              <ExternalLink size={14} className="opacity-50" />
            </a>
            <a 
              href="https://acade.must.edu.tw/index.aspx?UnitID=1241" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-amber-400 transition-colors"
            >
              <Building2 size={18} />
              <span>明新科技大學｜雙語教育中心</span>
              <ExternalLink size={14} className="opacity-50" />
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