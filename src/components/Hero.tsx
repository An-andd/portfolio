import React, { useState, useEffect, useRef } from 'react';
import { ArrowDown, Download, Mail, Github, Linkedin, Code2, Award, MapPin, Building2, Sparkles, Zap, Rocket, GraduationCap } from 'lucide-react';

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
      className="min-h-screen relative bg-white dark:bg-gray-900 flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Professional animated background with subtle animations */}
      <div className="absolute inset-0">
        {/* Base gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 dark:from-gray-900 dark:via-slate-900 dark:to-gray-900"></div>
        
        {/* Animated floating elements - Professional and subtle */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-100/30 to-purple-100/20 dark:from-blue-900/20 dark:to-purple-900/10 rounded-full blur-3xl animate-float opacity-60"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-tl from-indigo-100/30 to-blue-100/20 dark:from-indigo-900/20 dark:to-blue-900/10 rounded-full blur-3xl animate-float opacity-50" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-slate-100/20 to-gray-100/20 dark:from-slate-800/20 dark:to-gray-800/20 rounded-full blur-3xl animate-float opacity-40" style={{ animationDelay: '4s' }}></div>
        
        {/* Professional floating icons */}
        <div className="absolute inset-0 pointer-events-none">
          {[
            { icon: Code2, position: 'top-32 left-32', color: 'text-blue-400/30', delay: '0s' },
            { icon: Sparkles, position: 'top-40 right-40', color: 'text-indigo-400/30', delay: '1s' },
            { icon: Zap, position: 'bottom-40 left-40', color: 'text-slate-400/30', delay: '2s' },
            { icon: Award, position: 'bottom-32 right-32', color: 'text-blue-400/30', delay: '3s' },
          ].map(({ icon: Icon, position, color, delay }, index) => (
            <div
              key={index}
              className={`absolute ${position} ${color} animate-float`}
              style={{ animationDelay: delay, animationDuration: '6s' }}
            >
              <Icon size={24} />
            </div>
          ))}
        </div>

        {/* Subtle animated particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/20 dark:bg-blue-300/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${4 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
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

            {/* Name with proper sizing */}
            <div className="mb-8 overflow-hidden">
              <h1 className="font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 dark:from-white dark:via-blue-200 dark:to-white bg-clip-text text-transparent leading-none tracking-tight">
                <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                  Anand Suresh
                </span>
              </h1>
            </div>
            
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
                  label: '2025 Graduate', 
                  sublabel: 'Fresh Talent', 
                  icon: <GraduationCap size={20} />,
                  accent: 'border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300'
                },
                { 
                  label: '3+ Projects', 
                  sublabel: 'Real-world Impact', 
                  icon: <Code2 size={20} />,
                  accent: 'border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300'
                },
                { 
                  label: 'Open to Work', 
                  sublabel: 'Ready for Opportunities', 
                  icon: <Rocket size={20} />,
                  accent: 'border-green-200 dark:border-green-800 text-green-700 dark:text-green-300'
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

          {/* Right side - Professional photo with round design */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Round photo container with sophisticated styling */}
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-gray-700 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-2 relative group">
                <div className="w-full h-full rounded-full overflow-hidden relative">
                  <img
                    src="/images/IMG_4613.jpg"
                    alt="Anand Suresh - Computer Science Engineer"
                    className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                </div>
              </div>

              {/* Orbiting elements around the circular photo */}
              <div className="absolute inset-0 animate-spin-slow">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse shadow-lg"></div>
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-4 h-4 bg-purple-500 rounded-full animate-pulse shadow-lg"></div>
                </div>
                <div className="absolute top-1/2 -left-4 transform -translate-y-1/2">
                  <div className="w-3 h-3 bg-indigo-500 rounded-full animate-pulse shadow-lg"></div>
                </div>
                <div className="absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <div className="w-3 h-3 bg-cyan-500 rounded-full animate-pulse shadow-lg"></div>
                </div>
              </div>

              {/* Floating tech icons around the photo */}
              <div className="absolute inset-0 pointer-events-none">
                {[
                  { icon: Code2, position: '-top-8 -left-8', color: 'text-blue-500', delay: '0s' },
                  { icon: Sparkles, position: '-top-8 -right-8', color: 'text-purple-500', delay: '1s' },
                  { icon: Zap, position: '-bottom-8 -left-8', color: 'text-indigo-500', delay: '2s' },
                  { icon: Award, position: '-bottom-8 -right-8', color: 'text-cyan-500', delay: '3s' },
                ].map(({ icon: Icon, position, color, delay }, index) => (
                  <div
                    key={index}
                    className={`absolute ${position} ${color} animate-float bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg border border-gray-200 dark:border-gray-700`}
                    style={{ animationDelay: delay, animationDuration: '4s' }}
                  >
                    <Icon size={20} />
                  </div>
                ))}
              </div>
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