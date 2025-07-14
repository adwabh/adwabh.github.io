import React from 'react';
import { FiHeart } from 'react-icons/fi';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="flex items-center justify-center space-x-2 text-gray-300">
            <span>Made with</span>
            <FiHeart className="text-red-500" size={16} />
            <span>by Adwait Abhyankar</span>
          </p>
          <p className="text-gray-400 text-sm mt-2">
            © {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;