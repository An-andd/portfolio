import React, { useEffect, useRef, useState } from 'react';
import { GraduationCap, Award, MapPin, Heart, Coffee, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          entry.target.classList.add('animate-fade-in-up');
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: '7.4', label: 'CGPA', icon: <GraduationCap size={24} />, color: 'text-blue-500' },
    { number: '95%', label: 'Academic Score', icon: <Award size={24} />, color: 'text-green-500' },
    { number: '3+', label: 'Major Projects', icon: <Lightbulb size={24} />, color: 'text-purple-500' },
    { number: '2024', label: 'Graduation Year', icon: <Coffee size={24} />, color: 'text-orange-500' },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-32 h-32 border border-blue-300 dark:border-blue-700 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${4 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 transform hover:scale-105 transition-transform duration-300">
            About Me
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 animate-pulse"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Passionate about creating technology that makes a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Section with Animation */}
          <div className="text-center lg:text-left">
            <div className="relative inline-block mb-8 group">
              <div className="w-64 h-64 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-full p-2 animate-spin-slow">
                <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-full flex items-center justify-center relative overflow-hidden">
                  <span className="text-8xl font-bold text-gray-600 dark:text-gray-300 group-hover:scale-110 transition-transform duration-300">AS</span>
                  
                  {/* Floating hearts animation */}
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(5)].map((_, i) => (
                      <Heart
                        key={i}
                        size={16}
                        className="absolute text-red-400 opacity-0 group-hover:opacity-100 group-hover:animate-float"
                        style={{
                          left: `${20 + Math.random() * 60}%`,
                          top: `${20 + Math.random() * 60}%`,
                          animationDelay: `${i * 0.5}s`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Orbiting elements */}
              <div className="absolute inset-0 animate-spin-reverse">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
                  <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4">
                  <div className="w-4 h-4 bg-purple-500 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-center lg:justify-start space-x-3 group">
                <MapPin className="text-blue-600 group-hover:animate-bounce" size={24} />
                <span className="text-xl text-gray-600 dark:text-gray-300">Kochi, Kerala</span>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-2xl border border-blue-200 dark:border-blue-800 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Hi, I'm Anand — a Computer Science student at A P J Abdul Kalam Technological University. 
                  I love building real-world impactful projects in AI, IoT, and full-stack development. 
                  With hands-on experience in embedded systems, cloud APIs, and machine learning, 
                  I aim to create accessible and intelligent technologies.
                </p>
              </div>
            </div>
          </div>

          {/* Education Section with Enhanced Animation */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center lg:text-left">
              Education Journey
            </h3>
            
            <div className="space-y-6">
              {[
                {
                  title: 'B.Tech in Computer Science Engineering',
                  institution: 'A P J Abdul Kalam Technological University',
                  period: '2021 - 2025',
                  score: 'CGPA: 7.4',
                  icon: <GraduationCap size={28} />,
                  color: 'blue',
                },
                {
                  title: 'Senior Secondary (PCMB)',
                  institution: 'Higher Secondary Education',
                  period: '2020 - 2021',
                  score: 'Score: 95.4%',
                  icon: <Award size={28} />,
                  color: 'green',
                },
                {
                  title: 'Higher Secondary (PCMB)',
                  institution: 'Secondary Education',
                  period: '2018 - 2019',
                  score: 'Score: 94.3%',
                  icon: <Award size={28} />,
                  color: 'purple',
                },
              ].map((edu, index) => (
                <div
                  key={edu.title}
                  className="group bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:rotate-1 border border-gray-200 dark:border-gray-700"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 bg-${edu.color}-100 dark:bg-${edu.color}-900 rounded-lg group-hover:animate-bounce`}>
                      <div className={`text-${edu.color}-600 dark:text-${edu.color}-400`}>
                        {edu.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {edu.title}
                      </h4>
                      <p className={`text-${edu.color}-600 dark:text-${edu.color}-400 font-medium mb-1`}>
                        {edu.institution}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">{edu.period}</p>
                      <p className="text-gray-700 dark:text-gray-300 font-semibold">{edu.score}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Animated Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="group text-center p-8 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:rotate-3 border border-gray-200 dark:border-gray-700"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`${stat.color} mb-4 flex justify-center group-hover:animate-spin`}>
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2 group-hover:scale-125 transition-transform duration-300">
                {isVisible && (
                  <CountUpAnimation target={stat.number} />
                )}
              </div>
              <p className="text-gray-600 dark:text-gray-300 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Count up animation component
const CountUpAnimation: React.FC<{ target: string }> = ({ target }) => {
  const [count, setCount] = useState(0);
  const numericTarget = parseFloat(target.replace(/[^\d.]/g, ''));
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prev => {
        const increment = numericTarget / 50;
        if (prev + increment >= numericTarget) {
          clearInterval(timer);
          return numericTarget;
        }
        return prev + increment;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [numericTarget]);

  return <span>{target.includes('.') ? count.toFixed(1) : Math.floor(count)}{target.replace(/[\d.]/g, '')}</span>;
};

export default About;