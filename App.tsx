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
import { useLanguage } from './contexts/LanguageContext';

const App: React.FC = () => {
  const { content } = useLanguage();

  return (
    <div className="min-h-screen bg-[#faf8f4] text-stone-800 selection:bg-amber-200 selection:text-amber-900">
      <Navigation />
      
      <main>
        <Hero />
        
        <Section id="about" title={content.section_titles.about} subtitle={content.section_titles.about_sub}>
          <div className="text-lg text-stone-600 space-y-4 leading-relaxed bg-white p-8 rounded-3xl shadow-sm border border-stone-100">
            {content.about_text.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </Section>

        <Section id="skills" title={content.section_titles.skills} subtitle={content.section_titles.skills_sub}>
          <Skills />
        </Section>

        <Section id="experience" title={content.section_titles.experience} subtitle={content.section_titles.experience_sub}>
          <Experience />
        </Section>

        <Section id="projects" title={content.section_titles.projects} subtitle={content.section_titles.projects_sub}>
          <Projects />
        </Section>

        <Section id="education" title={content.section_titles.education} subtitle={content.section_titles.education_sub}>
          <Certifications />
        </Section>

        <Section id="traits" title={content.section_titles.traits} subtitle={content.section_titles.traits_sub}>
           <div className="bg-amber-700 text-white p-8 rounded-3xl shadow-lg relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
             <p className="text-lg md:text-xl font-medium leading-relaxed relative z-10 text-center md:text-left">
              "{content.traits_quote}"
             </p>
           </div>
        </Section>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default App;