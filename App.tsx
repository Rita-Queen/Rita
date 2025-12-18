import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Section from './components/Section';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import Bilingual from './components/Bilingual';
import { useLanguage } from './contexts/LanguageContext';

const App: React.FC = () => {
  const { zh, en } = useLanguage();

  return (
    <div className="min-h-screen bg-[#faf8f4] text-stone-800 selection:bg-amber-200 selection:text-amber-900 overflow-x-hidden">
      <Navigation />
      
      <main>
        <Hero />
        
        <Section id="about" titleKey="about">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8 space-y-12 bg-white p-10 md:p-16 rounded-[3rem] shadow-sm border border-stone-100 card-hover max-w-[800px]">
              {zh.about_sections.map((section, index) => (
                <div key={index} className="space-y-5">
                  <h4 className="text-2xl font-black text-stone-900 border-b-2 border-stone-50 pb-3 flex items-center gap-4">
                    <span className="w-2 h-8 bg-amber-600/20 rounded-full shrink-0"></span>
                    <Bilingual zh={section.title} en={en.about_sections[index].title} inline />
                  </h4>
                  <p className="text-stone-600 leading-relaxed text-lg md:text-xl">
                    <Bilingual zh={section.content} en={en.about_sections[index].content} />
                  </p>
                </div>
              ))}
            </div>
            
            <div className="lg:col-span-4 space-y-8">
               <div className="w-full aspect-square bg-stone-50 rounded-[3.5rem] flex items-center justify-center p-12 border-2 border-stone-100 shadow-inner group">
                  <div className="text-center space-y-6">
                    <div className="text-7xl md:text-8xl text-amber-600/20 font-black group-hover:text-amber-600/40 transition-colors">
                      <Bilingual zh={zh.about_stats} en={en.about_stats} />
                    </div>
                    <div className="text-stone-400 font-black uppercase tracking-[0.3em] text-[10px] md:text-xs">
                      <Bilingual zh={zh.about_stats_label} en={en.about_stats_label} />
                    </div>
                  </div>
               </div>
               <div className="bg-amber-900 text-amber-50 p-10 rounded-[2.5rem] shadow-xl transform rotate-1">
                  <p className="text-lg md:text-xl font-bold leading-relaxed italic">
                    <Bilingual 
                      zh={zh.about_quote} 
                      en={en.about_quote} 
                    />
                  </p>
               </div>
            </div>
          </div>
        </Section>

        <Section id="skills" titleKey="skills">
          <Skills />
        </Section>

        <Section id="experience" titleKey="experience">
          <Experience />
        </Section>

        <Section id="projects" titleKey="projects">
          <Projects />
        </Section>

        <Section id="education" titleKey="education">
          <Certifications />
        </Section>

        <Section id="traits" titleKey="traits">
           <div className="grid md:grid-cols-2 gap-8">
              {zh.traits_points.map((point, index) => (
                <div 
                  key={index} 
                  className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-stone-100 card-hover flex gap-8 items-start"
                >
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 font-black text-lg shadow-sm">
                    {index + 1}
                  </div>
                  <div className="text-stone-600 font-bold leading-relaxed text-lg">
                    <Bilingual zh={point} en={en.traits_points[index]} />
                  </div>
                </div>
              ))}
           </div>
        </Section>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default App;