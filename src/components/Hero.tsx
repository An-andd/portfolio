import React, { useState, useEffect, useRef } from 'react';
import { ArrowDown, Download, Mail, Github, Linkedin, Code2, Award, MapPin, Building2 } from 'lucide-react';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const heroRef = useRef<HTMLElement>(null);
  const fullText = "Innovative Computer Science Engineer specializing in AI, IoT, and Full-Stack Development";

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }
    }, 60);

    return () => clearTimeout(timer);
  }, [currentIndex, fullText]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="min-h-screen relative bg-white dark:bg-gray-900 flex items-center justify-center pt-24 pb-16"
    >
      {/* Sophisticated background with subtle color */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 dark:from-gray-900 dark:via-slate-900 dark:to-gray-900"></div>
        
        {/* Elegant geometric patterns */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-100/20 to-transparent dark:from-blue-900/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-indigo-100/20 to-transparent dark:from-indigo-900/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Professional Content */}
          <div className="text-center lg:text-left">
            {/* Professional badge with proper spacing */}
            <div className="mb-6">
              <span className="inline-flex items-center px-6 py-3 bg-white dark:bg-gray-800 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-semibold shadow-sm">
                <Building2 className="mr-2 text-blue-600" size={18} />
                Computer Science Engineer
              </span>
            </div>

            {/* PROFESSIONAL NAME - Fixed sizing to ensure full visibility */}
            <h1 className="mb-8 leading-none tracking-tight overflow-hidden">
              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 dark:from-white dark:via-blue-200 dark:to-white bg-clip-text text-transparent">
                Anand Suresh
              </span>
            </h1>
            
            {/* Professional subtitle with elegant color accent */}
            <div className="mb-10">
              <p className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 font-medium leading-relaxed max-w-2xl">
                {displayText}
                <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100 text-blue-600`}>|</span>
              </p>
            </div>

            {/* Professional credentials with subtle color accents */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {[
                { 
                  label: 'CGPA 7.4', 
                  sublabel: 'Academic Excellence', 
                  icon: <Award size={20} />,
                  accent: 'border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300'
                },
                { 
                  label: '3+ Projects', 
                  sublabel: 'Real-world Impact', 
                  icon: <Code2 size={20} />,
                  accent: 'border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300'
                },
                { 
                  label: '2025 Graduate', 
                  sublabel: 'Fresh Talent', 
                  icon: <Building2 size={20} />,
                  accent: 'border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                }
              ].map((item, index) => (
                <div
                  key={item.label}
                  className={`text-center p-6 bg-white dark:bg-gray-800 rounded-xl border-2 ${item.accent} shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1`}
                >
                  <div className="flex justify-center mb-3">{item.icon}</div>
                  <div className="text-lg font-bold text-gray-900 dark:text-white">{item.label}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">{item.sublabel}</div>
                </div>
              ))}
            </div>

            {/* Location with professional styling */}
            <div className="flex items-center justify-center lg:justify-start mb-12 text-gray-600 dark:text-gray-400">
              <MapPin size={20} className="mr-3 text-blue-600" />
              <span className="font-medium text-lg">Kochi, Kerala, India</span>
            </div>

            {/* Professional action buttons with sophisticated styling */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button
                onClick={scrollToProjects}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center"
              >
                <Code2 className="mr-2" size={20} />
                View Portfolio
              </button>
              
              <a
                href="/AnandResume (1).pdf"
                download="Anand_Suresh_Resume.pdf"
                className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg font-semibold transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 flex items-center justify-center"
              >
                <Download className="mr-2" size={20} />
                Download Resume
              </a>
            </div>

            {/* Professional social links with elegant styling */}
            <div className="flex justify-center lg:justify-start space-x-4">
              {[
                { 
                  icon: Mail, 
                  href: 'mailto:callmeanand5@gmail.com', 
                  label: 'Email',
                  hoverColor: 'hover:bg-red-50 hover:border-red-200 hover:text-red-600 dark:hover:bg-red-900/20 dark:hover:border-red-800 dark:hover:text-red-400'
                },
                { 
                  icon: Github, 
                  href: 'https://github.com/An-andd', 
                  label: 'GitHub',
                  hoverColor: 'hover:bg-gray-50 hover:border-gray-300 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:border-gray-600 dark:hover:text-white'
                },
                { 
                  icon: Linkedin, 
                  href: 'https://linkedin.com/in/anand-suresh-8b8a73325', 
                  label: 'LinkedIn',
                  hoverColor: 'hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600 dark:hover:bg-blue-900/20 dark:hover:border-blue-800 dark:hover:text-blue-400'
                },
              ].map(({ icon: Icon, href, label, hoverColor }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-600 dark:text-gray-400 ${hoverColor} transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5`}
                  title={label}
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>

          {/* Right side - Professional photo with sophisticated frame */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Sophisticated photo container */}
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-700 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-2">
                <div className="w-full h-full rounded-xl overflow-hidden">
                  <img
                    src="/images/IMG_4271.PNG"
                    alt="Anand Suresh - Computer Science Engineer"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>

              {/* Professional availability badge */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 px-6 py-3 bg-white dark:bg-gray-800 border border-green-200 dark:border-green-800 rounded-full shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Available for opportunities</span>
                </div>
              </div>

              {/* Subtle decorative elements */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full opacity-60"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-indigo-500 rounded-full opacity-50"></div>
            </div>
          </div>
        </div>

        {/* Professional scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
          <button
            onClick={scrollToAbout}
            className="flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
          >
            <span className="text-sm font-medium mb-2">Learn More</span>
            <ArrowDown size={24} className="animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;