import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Zap, Shield, Bot, ArrowRight, Play, Star, Heart } from 'lucide-react';

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
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

  const projects = [
    {
      title: 'Tactile Braille',
      description: 'Developed a tactile Braille output device with vibration motors for visually impaired users. Enhanced response time by 40% using optimized Python-Arduino serial sync.',
      tech: ['Arduino', 'Python', 'Serial Communication'],
      icon: <Zap className="text-blue-600" size={32} />,
      color: 'blue',
      impact: '40% faster response time',
      category: 'Accessibility Tech',
      gradient: 'from-blue-500 to-cyan-500',
      likes: 127,
      views: 1240,
    },
    {
      title: 'Smart Lock Uno',
      description: 'Built a smart lock integrating facial recognition (98% accuracy), RFID, and remote API access. Achieved 90% reduction in unauthorized access and 99% device uptime.',
      tech: ['Arduino Uno', 'OpenCV', 'RFID', 'Web API'],
      icon: <Shield className="text-green-600" size={32} />,
      color: 'green',
      impact: '98% accuracy, 99% uptime',
      category: 'IoT Security',
      gradient: 'from-green-500 to-emerald-500',
      likes: 89,
      views: 856,
    },
    {
      title: 'SpeakEasy AI Assistant',
      description: 'Created a mobile AI assistant with emotion recognition and voice translation. Increased user engagement by 25% via personalized, multilingual conversations.',
      tech: ['React Native', 'Node.js', 'Firebase', 'Hume AI', 'Google APIs'],
      icon: <Bot className="text-purple-600" size={32} />,
      color: 'purple',
      impact: '25% engagement increase',
      category: 'AI & Mobile',
      gradient: 'from-purple-500 to-pink-500',
      likes: 203,
      views: 1890,
    },
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 transform hover:scale-105 transition-transform duration-300">
            Featured Projects
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 animate-pulse"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Real-world solutions that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:rotate-1 overflow-hidden border border-gray-200 dark:border-gray-700 relative"
              style={{ animationDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredProject(project.title)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Animated background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Project Header */}
              <div className="relative p-6 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 border-b border-gray-200 dark:border-gray-600">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-white dark:bg-gray-800 rounded-xl shadow-md group-hover:animate-bounce">
                    {project.icon}
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400">
                      <Heart size={16} className="group-hover:text-red-500 group-hover:animate-pulse" />
                      <span className="text-sm">{project.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400">
                      <Play size={16} />
                      <span className="text-sm">{project.views}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-sm font-medium px-3 py-1 rounded-full bg-${project.color}-100 dark:bg-${project.color}-900 text-${project.color}-600 dark:text-${project.color}-400`}>
                    {project.category}
                  </span>
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${project.gradient} text-white animate-pulse`}>
                    {project.impact}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
              </div>

              {/* Project Content */}
              <div className="relative p-6">
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                  {project.description}
                </p>

                {/* Tech Stack with Animation */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wide">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:scale-110 transition-transform duration-300 cursor-default"
                        style={{ animationDelay: `${techIndex * 100}ms` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button className={`flex items-center px-4 py-2 bg-gradient-to-r ${project.gradient} text-white rounded-lg hover:shadow-lg transition-all duration-300 font-medium group-hover:scale-105 relative overflow-hidden`}>
                    <span className="relative z-10 flex items-center">
                      <ExternalLink size={16} className="mr-2" />
                      View Details
                    </span>
                    <div className="absolute inset-0 bg-white opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
                  </button>
                  <button className="flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 font-medium group-hover:scale-105">
                    <Github size={16} className="mr-2" />
                    Code
                  </button>
                </div>
              </div>

              {/* Hover Effects */}
              {hoveredProject === project.title && (
                <>
                  {/* Floating stars */}
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="absolute text-yellow-400 animate-ping"
                        style={{
                          left: `${20 + Math.random() * 60}%`,
                          top: `${20 + Math.random() * 60}%`,
                          animationDelay: `${i * 0.2}s`,
                        }}
                      />
                    ))}
                  </div>
                  
                  {/* Animated border */}
                  <div className="absolute inset-0 border-2 border-blue-400 rounded-2xl animate-pulse"></div>
                </>
              )}

              {/* Corner decoration */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowRight className="text-gray-400 group-hover:text-blue-500 group-hover:animate-bounce" size={20} />
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Want to see more of my work?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Explore my complete portfolio on GitHub with detailed documentation and live demos
            </p>
            <a
              href="https://github.com/An-andd"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-2xl relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                <Github className="mr-2 group-hover:animate-spin" size={20} />
                View All Projects on GitHub
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;