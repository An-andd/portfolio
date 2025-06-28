import React from 'react';
import { Heart, Code, Coffee } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Anand Suresh
            </div>
            <p className="text-gray-400 leading-relaxed">
              Computer Science student passionate about creating intelligent, 
              accessible technology solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    document.querySelector(`#${link.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block text-gray-400 hover:text-white transition-colors duration-200 mx-auto"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold mb-4">Let's Connect</h3>
            <div className="space-y-2 text-gray-400">
              <p>callmeanand5@gmail.com</p>
              <p>+91-8589936359</p>
              <p>Kochi, Kerala</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="text-gray-400 mb-4 md:mb-0">
              <p className="flex items-center justify-center md:justify-start">
                © {currentYear} Anand Suresh. Made with
                <Heart className="text-red-500 mx-1" size={16} />
                and
                <Code className="text-blue-400 mx-1" size={16} />
                in India
                <Coffee className="text-yellow-600 ml-1" size={16} />
              </p>
            </div>

            {/* Tech Stack Badge */}
            <div className="text-gray-400 text-sm">
              <p>Built with React + TypeScript + Tailwind CSS</p>
            </div>
          </div>
        </div>

        {/* Animated Bottom Border */}
        <div className="mt-8">
          <div className="w-full h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-full opacity-50"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;