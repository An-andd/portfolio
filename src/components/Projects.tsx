import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Zap, Shield, Bot, ArrowRight, Play, Star, Heart } from 'lucide-react';
import ProjectModal from './ProjectModal';

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      fullDescription: 'The Tactile Braille project is an innovative assistive technology solution designed to help visually impaired individuals access digital content through tactile feedback. The system converts text input into Braille patterns using an array of vibration motors controlled by Arduino microcontrollers.',
      tech: ['Arduino', 'Python', 'Serial Communication'],
      icon: <Zap className="text-blue-600" size={32} />,
      color: 'blue',
      impact: '40% faster response time',
      category: 'Accessibility Tech',
      gradient: 'from-blue-500 to-cyan-500',
      likes: 127,
      views: 1240,
      metrics: [
        { value: '40%', label: 'Faster Response' },
        { value: '6', label: 'Braille Cells' },
        { value: '95%', label: 'Accuracy Rate' },
        { value: '2s', label: 'Processing Time' }
      ],
      implementation: [
        'Designed custom PCB layout for optimal vibration motor placement',
        'Implemented real-time serial communication protocol between Python and Arduino',
        'Created efficient Braille translation algorithm with Unicode support',
        'Developed user-friendly interface with audio feedback integration',
        'Optimized power consumption for extended battery life'
      ],
      features: [
        'Real-time text to Braille conversion',
        'Adjustable vibration intensity',
        'Multi-language support',
        'Audio feedback system',
        'Portable battery-powered design',
        'USB connectivity'
      ],
      challenges: [
        {
          challenge: 'Synchronization Issues',
          solution: 'Implemented custom serial communication protocol with acknowledgment system to ensure perfect timing between Python processing and Arduino output.'
        },
        {
          challenge: 'Power Optimization',
          solution: 'Designed intelligent power management system that reduces consumption by 60% through selective motor activation and sleep modes.'
        }
      ],
      codeSnippets: [
        {
          title: 'Braille Translation Algorithm',
          language: 'Python',
          code: `def text_to_braille(text):
    braille_map = {
        'a': '⠁', 'b': '⠃', 'c': '⠉', 'd': '⠙', 'e': '⠑',
        'f': '⠋', 'g': '⠛', 'h': '⠓', 'i': '⠊', 'j': '⠚'
        # ... complete mapping
    }
    
    result = []
    for char in text.lower():
        if char in braille_map:
            result.append(braille_map[char])
        elif char == ' ':
            result.append('⠀')
    
    return ''.join(result)`
        },
        {
          title: 'Arduino Motor Control',
          language: 'C++',
          code: `void activateMotors(byte pattern) {
    for (int i = 0; i < 6; i++) {
        if (pattern & (1 << i)) {
            digitalWrite(motorPins[i], HIGH);
            delay(VIBRATION_DURATION);
            digitalWrite(motorPins[i], LOW);
        }
    }
    
    // Send acknowledgment back to Python
    Serial.println("PATTERN_COMPLETE");
}`
        }
      ],
      githubUrl: 'https://github.com/An-andd/tactile-braille',
      liveUrl: null,
      videoUrl: 'https://youtube.com/watch?v=demo-video'
    },
    {
      title: 'Smart Lock Uno',
      description: 'Built a smart lock integrating facial recognition (98% accuracy), RFID, and remote API access. Achieved 90% reduction in unauthorized access and 99% device uptime.',
      fullDescription: 'Smart Lock Uno is a comprehensive IoT security solution that combines multiple authentication methods including facial recognition, RFID cards, and remote API access. The system provides enterprise-grade security with real-time monitoring and logging capabilities.',
      tech: ['Arduino Uno', 'OpenCV', 'RFID', 'Web API'],
      icon: <Shield className="text-green-600" size={32} />,
      color: 'green',
      impact: '98% accuracy, 99% uptime',
      category: 'IoT Security',
      gradient: 'from-green-500 to-emerald-500',
      likes: 89,
      views: 856,
      metrics: [
        { value: '98%', label: 'Face Recognition' },
        { value: '99%', label: 'System Uptime' },
        { value: '90%', label: 'Security Improvement' },
        { value: '0.5s', label: 'Response Time' }
      ],
      implementation: [
        'Integrated OpenCV for real-time facial recognition processing',
        'Developed RFID authentication system with encrypted card data',
        'Created RESTful API for remote access and monitoring',
        'Implemented secure database for user management and access logs',
        'Built mobile app for remote lock control and notifications'
      ],
      features: [
        'Multi-factor authentication',
        'Real-time access logging',
        'Remote monitoring dashboard',
        'Mobile app integration',
        'Emergency override system',
        'Battery backup support'
      ],
      challenges: [
        {
          challenge: 'Lighting Conditions',
          solution: 'Implemented adaptive lighting compensation and infrared support for consistent facial recognition in various lighting conditions.'
        },
        {
          challenge: 'Network Reliability',
          solution: 'Added offline mode with local authentication and automatic sync when connection is restored.'
        }
      ],
      codeSnippets: [
        {
          title: 'Facial Recognition System',
          language: 'Python',
          code: `import cv2
import face_recognition

def authenticate_face(image_path, known_faces):
    unknown_image = face_recognition.load_image_file(image_path)
    unknown_encodings = face_recognition.face_encodings(unknown_image)
    
    if len(unknown_encodings) > 0:
        unknown_encoding = unknown_encodings[0]
        
        for known_encoding in known_faces:
            matches = face_recognition.compare_faces([known_encoding], unknown_encoding)
            if matches[0]:
                return True
    
    return False`
        },
        {
          title: 'RFID Authentication',
          language: 'C++',
          code: `bool authenticateRFID(String cardID) {
    // Check against authorized cards database
    for (int i = 0; i < authorizedCards.size(); i++) {
        if (cardID == authorizedCards[i]) {
            logAccess(cardID, "RFID", true);
            return true;
        }
    }
    
    logAccess(cardID, "RFID", false);
    return false;
}`
        }
      ],
      githubUrl: 'https://github.com/An-andd/smart-lock-uno',
      liveUrl: 'https://smartlock-demo.herokuapp.com',
      videoUrl: 'https://youtube.com/watch?v=smart-lock-demo'
    },
    {
      title: 'SpeakEasy AI Assistant',
      description: 'Created a mobile AI assistant with emotion recognition and voice translation. Increased user engagement by 25% via personalized, multilingual conversations.',
      fullDescription: 'SpeakEasy AI Assistant is an advanced conversational AI application built with React Native that combines natural language processing, emotion recognition, and real-time translation capabilities. The app provides personalized interactions based on user emotions and preferences.',
      tech: ['React Native', 'Node.js', 'Firebase', 'Hume AI', 'Google APIs'],
      icon: <Bot className="text-purple-600" size={32} />,
      color: 'purple',
      impact: '25% engagement increase',
      category: 'AI & Mobile',
      gradient: 'from-purple-500 to-pink-500',
      likes: 203,
      views: 1890,
      metrics: [
        { value: '25%', label: 'Engagement Boost' },
        { value: '15', label: 'Languages' },
        { value: '92%', label: 'Emotion Accuracy' },
        { value: '1.2s', label: 'Response Time' }
      ],
      implementation: [
        'Integrated Hume AI for real-time emotion detection from voice',
        'Built custom NLP pipeline for context-aware responses',
        'Implemented Google Translate API for multilingual support',
        'Created Firebase backend for user data and conversation history',
        'Developed React Native app with cross-platform compatibility'
      ],
      features: [
        'Real-time emotion recognition',
        'Multi-language translation',
        'Personalized responses',
        'Voice-to-text conversion',
        'Conversation history',
        'Offline mode support'
      ],
      challenges: [
        {
          challenge: 'Real-time Processing',
          solution: 'Implemented efficient audio streaming and processing pipeline with WebSocket connections for minimal latency.'
        },
        {
          challenge: 'Cross-platform Compatibility',
          solution: 'Used React Native with platform-specific optimizations and native modules for audio processing.'
        }
      ],
      codeSnippets: [
        {
          title: 'Emotion Recognition Integration',
          language: 'JavaScript',
          code: `const analyzeEmotion = async (audioBuffer) => {
    try {
        const response = await fetch('https://api.hume.ai/v0/batch/jobs', {
            method: 'POST',
            headers: {
                'X-Hume-Api-Key': HUME_API_KEY,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                models: {
                    prosody: {}
                },
                transcription: {
                    language: 'en'
                }
            })
        });
        
        const result = await response.json();
        return result.predictions[0].models.prosody.grouped_predictions[0].predictions[0].emotions;
    } catch (error) {
        console.error('Emotion analysis failed:', error);
        return null;
    }
};`
        },
        {
          title: 'Voice Translation System',
          language: 'JavaScript',
          code: `const translateAndSpeak = async (text, targetLanguage) => {
    // Translate text
    const translatedText = await googleTranslate.translate(text, {
        from: 'auto',
        to: targetLanguage
    });
    
    // Convert to speech
    const audioUrl = await textToSpeech(translatedText[0], targetLanguage);
    
    // Play audio
    const sound = new Audio(audioUrl);
    sound.play();
    
    return translatedText[0];
};`
        }
      ],
      githubUrl: 'https://github.com/An-andd/speakeasy-ai',
      liveUrl: 'https://speakeasy-ai-demo.netlify.app',
      videoUrl: 'https://youtube.com/watch?v=speakeasy-demo'
    },
  ];

  const openProjectModal = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

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
                  <button 
                    onClick={() => openProjectModal(project)}
                    className={`flex items-center px-4 py-2 bg-gradient-to-r ${project.gradient} text-white rounded-lg hover:shadow-lg transition-all duration-300 font-medium group-hover:scale-105 relative overflow-hidden`}
                  >
                    <span className="relative z-10 flex items-center">
                      <ExternalLink size={16} className="mr-2" />
                      View Details
                    </span>
                    <div className="absolute inset-0 bg-white opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
                  </button>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 font-medium group-hover:scale-105"
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </a>
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

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeProjectModal}
      />
    </section>
  );
};

export default Projects;