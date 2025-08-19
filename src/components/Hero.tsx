import React from 'react';
import { FiDownload } from 'react-icons/fi';
import { useTypingAnimation } from '../hooks/useTypingAnimation';
import { useTheme } from '../hooks/useTheme';
import AnimatedBackground from './AnimatedBackground';
import { designations, socialLinks, resumeLink } from '../data/portfolio';

const Hero: React.FC = () => {
  const { isDark } = useTheme();

  const { currentText, showCursor } = useTypingAnimation(designations);

  const handleGetInTouch = () => {
    const element = document.querySelector('#contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadResume = () => {
    // Create a dummy resume download
    const link = document.createElement('a');
    link.href = resumeLink;
    link.download = 'Adwait_Abhyankar_Resume.pdf';
    link.click();
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-10 relative overflow-hidden">
      <AnimatedBackground isDark={isDark} />
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Greeting */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Hi, I am{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Adwait Abhyankar
              </span>
            </h1>
            
            {/* Animated typing text */}
            <div className="text-xl md:text-3xl text-gray-600 dark:text-gray-300 h-12 flex items-center justify-center">
              <span>{currentText}</span>
              <span className={`ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>
                |
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about building scalable systems, leading engineering teams, and creating 
            innovative solutions that make a difference. I bring technical expertise and leadership 
            experience to drive product success.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <button
              onClick={handleGetInTouch}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 transform hover:scale-105"
            >
              Get In Touch
            </button>
            
            <button
              onClick={handleDownloadResume}
              className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 transform hover:scale-105"
            >
              <FiDownload size={20} />
              <span>Download Resume</span>
            </button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 transform hover:scale-110"
                aria-label={social.label}
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;