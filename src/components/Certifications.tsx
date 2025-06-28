import React, { useEffect, useRef } from 'react';
import { Award, Calendar, Trophy, Star, ExternalLink } from 'lucide-react';

const Certifications: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

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

  const certifications = [
    {
      title: 'Python Programming',
      organization: 'Face in Technologies Pvt. Ltd.',
      date: 'December 2024',
      description: 'Gained expertise in OOP, file handling, and data analysis through project-based learning.',
      icon: <Award className="text-blue-600" size={24} />,
      color: 'blue',
      type: 'Certification',
      skills: ['Object-Oriented Programming', 'File Handling', 'Data Analysis', 'Project Development'],
    },
    {
      title: 'KEEMS SACE 2023',
      organization: 'Innovation Exhibition',
      date: '2023',
      description: 'Exhibited a collaborative ML + IoT project; achieved Top 3 placement for innovation.',
      icon: <Trophy className="text-gold-600" size={24} />,
      color: 'yellow',
      type: 'Achievement',
      skills: ['Machine Learning', 'IoT Development', 'Collaboration', 'Innovation'],
    },
    {
      title: 'NASA Space Apps Challenge',
      organization: 'NASA',
      date: '2024',
      description: 'Recognized for innovative Earth-tech solution addressing global challenges.',
      icon: <Star className="text-purple-600" size={24} />,
      color: 'purple',
      type: 'Recognition',
      skills: ['Problem Solving', 'Innovation', 'Earth Technology', 'Global Impact'],
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: 'bg-blue-50 dark:bg-blue-900/20',
        border: 'border-blue-200 dark:border-blue-800',
        text: 'text-blue-600 dark:text-blue-400',
        gradient: 'from-blue-500 to-blue-600',
      },
      yellow: {
        bg: 'bg-yellow-50 dark:bg-yellow-900/20',
        border: 'border-yellow-200 dark:border-yellow-800',
        text: 'text-yellow-600 dark:text-yellow-400',
        gradient: 'from-yellow-500 to-yellow-600',
      },
      purple: {
        bg: 'bg-purple-50 dark:bg-purple-900/20',
        border: 'border-purple-200 dark:border-purple-800',
        text: 'text-purple-600 dark:text-purple-400',
        gradient: 'from-purple-500 to-purple-600',
      },
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Certifications & Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Recognition for technical excellence and innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => {
            const colorClasses = getColorClasses(cert.color);
            return (
              <div
                key={cert.title}
                className="group bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Header */}
                <div className={`p-6 ${colorClasses.bg} ${colorClasses.border} border-b relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
                  <div className="relative">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                        {cert.icon}
                      </div>
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${colorClasses.bg} ${colorClasses.text} uppercase tracking-wide`}>
                        {cert.type}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {cert.title}
                    </h3>
                    <p className={`font-medium ${colorClasses.text} mb-1`}>
                      {cert.organization}
                    </p>
                    <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                      <Calendar size={14} className="mr-2" />
                      {cert.date}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Skills */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wide">
                      Key Skills
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <button className={`w-full flex items-center justify-center px-4 py-3 bg-gradient-to-r ${colorClasses.gradient} text-white rounded-lg hover:shadow-lg transition-all duration-300 font-medium group-hover:scale-105`}>
                    <ExternalLink size={16} className="mr-2" />
                    View Certificate
                  </button>
                </div>

                {/* Hover Indicator */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className={`w-2 h-2 ${colorClasses.bg} rounded-full animate-pulse`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: '3+', label: 'Certifications', icon: <Award size={24} /> },
            { number: '2', label: 'Awards Won', icon: <Trophy size={24} /> },
            { number: '95%', label: 'Academic Score', icon: <Star size={24} /> },
            { number: '2024', label: 'Latest Achievement', icon: <Calendar size={24} /> },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-blue-600 dark:text-blue-400 mb-3 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                {stat.number}
              </div>
              <p className="text-gray-600 dark:text-gray-300 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;