import React, { useState, useEffect, useRef } from 'react';
import { ArrowDown, Download, Mail, Github, Linkedin, Sparkles, Zap, Code2 } from 'lucide-react';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const heroRef = useRef<HTMLElement>(null);
  const fullText = "Turning code into impact-driven innovation.";

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }
    }, 80);

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

  const FloatingIcon = ({ icon: Icon, delay, className }: { icon: any, delay: number, className: string }) => (
    <div 
      className={`absolute ${className} animate-float opacity-20 dark:opacity-30`}
      style={{ animationDelay: `${delay}s`, animationDuration: '4s' }}
    >
      <Icon size={24} />
    </div>
  );

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 flex items-center justify-center"
    >
      {/* Animated floating icons */}
      <FloatingIcon icon={Code2} delay={0} className="top-20 left-20 text-blue-500" />
      <FloatingIcon icon={Zap} delay={1} className="top-32 right-32 text-purple-500" />
      <FloatingIcon icon={Sparkles} delay={2} className="bottom-40 left-40 text-pink-500" />
      <FloatingIcon icon={Github} delay={0.5} className="top-60 right-20 text-gray-600" />
      <FloatingIcon icon={Code2} delay={1.5} className="bottom-20 right-60 text-indigo-500" />

      {/* Animated background blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-96 h-96 bg-gradient-to-r from-pink-400 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Animated entrance */}
        <div className="animate-fade-in-up">
          {/* Greeting with wave animation */}
          <div className="mb-6">
            <span className="text-2xl md:text-3xl">
               <span className="inline-block animate-bounce"></span>
            </span>
          </div>

          {/* Main name with gradient and scale animation */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 transform hover:scale-105 transition-transform duration-300">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-pulse-glow">
              Anand
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Suresh
            </span>
          </h1>
          
          {/* Animated role badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {['Developer', 'AI Enthusiast', 'IoT Creator', 'CSE Student'].map((role, index) => (
              <span
                key={role}
                className="px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full text-sm font-semibold text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:scale-110 transition-transform duration-300 cursor-default"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {role}
              </span>
            ))}
          </div>

          {/* Location with animated pin */}
          <div className="flex items-center justify-center mb-8 text-lg text-gray-600 dark:text-gray-400">
            <span className="animate-bounce mr-2">📍</span>
            Kochi, Kerala
          </div>

          {/* Typewriter effect */}
          <div className="h-20 flex items-center justify-center mb-12">
            <p className="text-2xl md:text-3xl lg:text-4xl text-gray-700 dark:text-gray-300 font-medium">
              {displayText}
              <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>|</span>
            </p>
          </div>

          {/* Interactive action buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button
              onClick={scrollToProjects}
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-2xl relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                <Sparkles className="mr-2 group-hover:animate-spin" size={20} />
                See My Work
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <a
              href="mailto:callmeanand5@gmail.com"
              className="group px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-full font-semibold hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transform hover:scale-110 transition-all duration-300 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                <Download className="mr-2 group-hover:animate-bounce" size={20} />
                Download Resume
              </span>
            </a>
          </div>

          {/* Animated social links */}
          <div className="flex justify-center space-x-8 mb-16">
            {[
              { icon: Mail, href: 'mailto:callmeanand5@gmail.com', color: 'hover:text-red-500' },
              { icon: Github, href: 'https://github.com/An-andd', color: 'hover:text-gray-900 dark:hover:text-white' },
              { icon: Linkedin, href: 'https://linkedin.com/in/anand-suresh-8b8a73325', color: 'hover:text-blue-600' },
            ].map(({ icon: Icon, href, color }, index) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-2xl transform hover:scale-125 hover:rotate-12 transition-all duration-300 ${color}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <Icon size={24} className="group-hover:animate-pulse" />
              </a>
            ))}
          </div>

          {/* Animated scroll indicator */}
          <div className="animate-bounce">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">Scroll to explore</span>
              <ArrowDown className="text-gray-400 dark:text-gray-500 animate-pulse" size={32} />
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements for visual interest */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;