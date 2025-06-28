import React, { useEffect, useRef, useState } from 'react';
import { Code, Database, PenTool as Tool, Users, Clock, MessageCircle, Target, Trophy, Zap, Star } from 'lucide-react';

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

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

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="text-blue-600" size={28} />,
      skills: [
        { name: 'Python', level: 90, color: 'from-yellow-400 to-blue-500' },
        { name: 'Java', level: 75, color: 'from-red-500 to-orange-500' },
        { name: 'C', level: 85, color: 'from-blue-600 to-purple-600' },
        { name: 'HTML/CSS', level: 80, color: 'from-orange-500 to-red-500' },
        { name: 'SQL', level: 85, color: 'from-green-500 to-blue-500' },
      ],
      color: 'blue',
      bgGradient: 'from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20',
    },
    {
      title: 'Tools & Platforms',
      icon: <Tool className="text-green-600" size={28} />,
      skills: [
        { name: 'Visual Studio Code', level: 92, color: 'from-blue-500 to-purple-500' },
        { name: 'PyCharm', level: 85, color: 'from-green-500 to-yellow-500' },
        { name: 'Firebase', level: 80, color: 'from-yellow-500 to-orange-500' },
        { name: 'Google Cloud APIs', level: 78, color: 'from-blue-500 to-green-500' },
        { name: 'Git/GitHub', level: 85, color: 'from-gray-700 to-gray-900' },
      ],
      color: 'green',
      bgGradient: 'from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20',
    },
    {
      title: 'Soft Skills',
      icon: <Users className="text-purple-600" size={28} />,
      skills: [
        { name: 'Time Management', level: 88, color: 'from-purple-500 to-pink-500' },
        { name: 'Teamwork', level: 92, color: 'from-blue-500 to-purple-500' },
        { name: 'Communication', level: 85, color: 'from-green-500 to-blue-500' },
        { name: 'Problem Solving', level: 90, color: 'from-red-500 to-purple-500' },
        { name: 'Leadership', level: 82, color: 'from-yellow-500 to-red-500' },
      ],
      color: 'purple',
      bgGradient: 'from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20',
    },
  ];

  const floatingIcons = [
    { icon: <Zap size={20} />, color: 'text-yellow-500' },
    { icon: <Star size={20} />, color: 'text-blue-500' },
    { icon: <Target size={20} />, color: 'text-green-500' },
    { icon: <Trophy size={20} />, color: 'text-purple-500' },
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Animated floating icons */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingIcons.map((item, i) => (
          <div
            key={i}
            className={`absolute ${item.color} opacity-20 animate-float`}
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${4 + Math.random() * 2}s`,
            }}
          >
            {item.icon}
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 transform hover:scale-105 transition-transform duration-300">
            Skills & Expertise
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 animate-pulse"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive skill set spanning multiple technologies and soft skills
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`group bg-gradient-to-br ${category.bgGradient} rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 transform hover:scale-105 hover:rotate-1 border border-gray-200 dark:border-gray-700 relative overflow-hidden`}
            >
              {/* Background animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-8">
                  <div className="p-3 bg-white dark:bg-gray-800 rounded-xl mr-4 shadow-md group-hover:animate-bounce">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skill.name} 
                      className="relative group/skill"
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-gray-700 dark:text-gray-300 font-semibold group-hover/skill:text-blue-600 dark:group-hover/skill:text-blue-400 transition-colors duration-300">
                          {skill.name}
                        </span>
                        <span className="text-gray-500 dark:text-gray-400 text-sm font-bold">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="relative">
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                          <div
                            className={`h-3 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out relative overflow-hidden`}
                            style={{
                              width: isVisible ? `${skill.level}%` : '0%',
                              transitionDelay: `${(categoryIndex * 3 + skillIndex) * 200}ms`,
                            }}
                          >
                            {/* Animated shine effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-shine"></div>
                          </div>
                        </div>
                        
                        {/* Floating percentage on hover */}
                        {hoveredSkill === skill.name && (
                          <div className="absolute -top-8 right-0 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-2 py-1 rounded text-xs font-bold animate-bounce">
                            {skill.level}%
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Skills Showcase */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: <Clock size={32} />, label: 'Time Management', color: 'text-blue-600', bg: 'bg-blue-100 dark:bg-blue-900' },
            { icon: <MessageCircle size={32} />, label: 'Communication', color: 'text-green-600', bg: 'bg-green-100 dark:bg-green-900' },
            { icon: <Target size={32} />, label: 'Problem Solving', color: 'text-purple-600', bg: 'bg-purple-100 dark:bg-purple-900' },
            { icon: <Trophy size={32} />, label: 'Leadership', color: 'text-orange-600', bg: 'bg-orange-100 dark:bg-orange-900' },
          ].map((item, index) => (
            <div
              key={item.label}
              className="group text-center p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:rotate-6 border border-gray-200 dark:border-gray-700 relative overflow-hidden cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Background pulse effect */}
              <div className={`absolute inset-0 ${item.bg} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className={`${item.color} mb-4 flex justify-center group-hover:animate-spin`}>
                  {item.icon}
                </div>
                <p className="text-gray-700 dark:text-gray-300 font-semibold group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                  {item.label}
                </p>
              </div>
              
              {/* Hover sparkles */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(3)].map((_, i) => (
                  <Star
                    key={i}
                    size={12}
                    className="absolute text-yellow-400 opacity-0 group-hover:opacity-100 group-hover:animate-ping"
                    style={{
                      left: `${20 + Math.random() * 60}%`,
                      top: `${20 + Math.random() * 60}%`,
                      animationDelay: `${i * 0.3}s`,
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;