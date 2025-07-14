import React from 'react';
import { workExperience } from '../data/portfolio';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
            Work Experience
          </h2>
          
          <div className="relative">
            {/* Timeline line - centered and visible */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-600 transform md:-translate-x-0.5 z-0"></div>
            
            <div className="space-y-12">
              {workExperience.map((job, index) => (
                <div
                  key={job.id}
                  className={`relative flex flex-col md:flex-row items-start ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot - properly positioned */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-blue-600 rounded-full transform -translate-x-2 md:-translate-x-2 z-10 mt-6 border-4 border-white dark:border-gray-800 shadow-lg"></div>
                  
                  {/* Content card */}
                  <div className={`flex-1 ml-16 md:ml-0 ${
                    index % 2 === 0 
                      ? 'md:pr-12 md:text-right' 
                      : 'md:pl-12 md:text-left'
                  }`}>
                    <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                      {/* Header */}
                      <div className={`flex flex-col ${
                        index % 2 === 0 ? 'md:items-end' : 'md:items-start'
                      } mb-4`}>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                          {job.title}
                        </h3>
                        <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
                          {job.company}
                        </h4>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                          {job.duration}
                        </span>
                      </div>
                      
                      {/* Description */}
                      <ul className={`space-y-3 mb-6 ${
                        index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                      }`}>
                        {job.description.map((desc, descIndex) => (
                          <li
                            key={descIndex}
                            className={`text-gray-600 dark:text-gray-300 flex items-start ${
                              index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
                            }`}
                          >
                            <span className={`w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 mt-2 ${
                              index % 2 === 0 ? 'md:ml-3 mr-3 md:mr-0' : 'mr-3 md:mr-3'
                            }`}></span>
                            <span className="leading-relaxed">{desc}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {/* Technologies */}
                      <div className={`flex flex-wrap gap-2 ${
                        index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                      }`}>
                        {job.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1"></div>
                </div>
              ))}
            </div>
            
            {/* Timeline end indicator */}
            <div className="absolute left-8 md:left-1/2 bottom-0 w-4 h-4 bg-gray-300 dark:bg-gray-600 rounded-full transform -translate-x-2 md:-translate-x-2 z-10 border-4 border-white dark:border-gray-800"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;