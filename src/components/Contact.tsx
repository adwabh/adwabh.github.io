import React, { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiDownload } from 'react-icons/fi';
import { SiMedium, SiDevdotto } from 'react-icons/si';
import ContactModal from './ContactModal';
import { useTheme } from '../hooks/useTheme';
import AnimatedBackground from './AnimatedBackground';

const Contact: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isDark } = useTheme();

  const socialLinks = [
    { icon: FiLinkedin, href: 'https://linkedin.com/in/adwaitabhyankar', label: 'LinkedIn' },
    { icon: FiGithub, href: 'https://github.com/adwaitabhyankar', label: 'GitHub' },
    { icon: SiMedium, href: 'https://medium.com/@adwaitabhyankar', label: 'Medium' },
    { icon: SiDevdotto, href: 'https://dev.to/adwaitabhyankar', label: 'Dev.to' }
  ];

  const contactInfo = [
    { icon: FiMail, label: 'Email', value: 'adwabh@gmail.com' },
    { icon: FiPhone, label: 'Phone', value: '+91 9167385309' },
    { icon: FiMapPin, label: 'Location', value: 'Pune, MH' }
  ];

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'Adwait_Abhyankar_Resume.pdf';
    link.click();
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <AnimatedBackground isDark={isDark} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Let's Connect
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Get In Touch
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                I'm always interested in hearing about new opportunities, challenging projects, 
                or just having a conversation about technology and leadership. Feel free to reach out!
              </p>
              
              <div className="space-y-4 mb-8">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                      <info.icon className="text-blue-600 dark:text-blue-400" size={18} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{info.label}</p>
                      <p className="text-gray-900 dark:text-white font-medium">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Social Links */}
              <div className="flex items-center space-x-4 mb-8">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 transform hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
                
                {/* Resume Download Button */}
                <button
                  onClick={handleDownloadResume}
                  className="p-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 transform hover:scale-110"
                  aria-label="Download Resume"
                >
                  <FiDownload size={20} />
                </button>
              </div>
            </div>
            
            {/* CTA Section */}
            <div className="bg-gray-100/20 dark:bg-blue-900/20 rounded-lg p-8 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Ready to Start a Conversation?
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Whether you have a project in mind, want to discuss opportunities, or just want 
                to connect, I'd love to hear from you.
              </p>
              
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200 transform hover:scale-105"
              >
                Send Me a Message
              </button>
              
              <div className="mt-4 text-center">
                <span className="text-gray-500 dark:text-gray-400 text-sm">
                  Or email me directly at{' '}
                  <a 
                    href="mailto:adwabh@gmail.com"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    adwabh@gmail.com
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
};

export default Contact;