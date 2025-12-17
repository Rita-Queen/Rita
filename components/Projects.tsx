import React from 'react';
import { FolderKanban } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Projects: React.FC = () => {
  const { content } = useLanguage();

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {content.projects.map((project) => (
        <div 
          key={project.id}
          className="group bg-white p-8 rounded-2xl border border-stone-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default"
        >
          <div className="w-12 h-12 bg-stone-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-100 transition-colors">
            <FolderKanban className="text-stone-400 group-hover:text-amber-700" size={24} />
          </div>
          <h4 className="text-xl font-bold text-stone-900 mb-3">{project.title}</h4>
          <p className="text-stone-600 leading-relaxed">
            {project.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Projects;