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
    <div className="min-h-screen bg-[#faf8f4] text-stone-800 selection:bg-amber-200 selection:text-amber-900">
      <Navigation />
      
      <main>
        <Hero />
        
        <Section id="about" titleKey="about">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-3 space-y-8 text-lg text-stone-600 leading-relaxed bg-white p-10 rounded-[2.5rem] shadow-sm border border-stone-100 card-hover">
              {zh.about_text.map((paragraph, index) => (
                <Bilingual key={index} zh={paragraph} en={en.about_text[index]} />
              ))}
            </div>
            <div className="md:col-span-2 flex justify-center">
               <div className="w-full aspect-square bg-stone-100 rounded-[3rem] flex items-center justify-center p-8 border border-stone-200 shadow-inner">
                  <div className="text-center space-y-4">
                    <div className="text-6xl text-amber-600/30 font-black">10+</div>
                    <div className="text-stone-400 font-bold uppercase tracking-[0.2em] text-[10px]">
                      <Bilingual zh="行政歷練" en="Years Admin Experience" />
                    </div>
                  </div>
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
           <div className="grid md:grid-cols-2 gap-6">
              {zh.traits_points.map((point, index) => (
                <div 
                  key={index} 
                  className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 card-hover flex gap-6 items-start"
                >
                  <div className="w-8 h-8 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 font-bold text-xs shadow-sm">
                    0{index + 1}
                  </div>
                  <div className="text-stone-600 font-medium leading-relaxed">
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