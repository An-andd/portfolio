import React, { useEffect, useRef, useState } from 'react';
import { Award, Calendar, Trophy, Star, ExternalLink } from 'lucide-react';
import CertificateModal from './CertificateModal';

const Certifications: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedCertificate, setSelectedCertificate] = useState<any>(null);
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

  const certifications = [
    {
      title: 'Python Programming Internship',
      organization: 'Face in Technologies Pvt. Ltd.',
      date: 'December 2024',
      description: 'Successfully completed 10-day Python programming internship with hands-on project development and practical learning.',
      fullDescription: 'Comprehensive Python programming internship at Face in Technologies Pvt. Ltd. covering advanced concepts including object-oriented programming, file I/O operations, data structures, algorithms, and practical project development. The internship included hands-on assignments and real-world applications, demonstrating self-motivation and hard-working attitude with successful project completion.',
      icon: <Award className="text-blue-600" size={24} />,
      color: 'blue',
      type: 'Internship Certificate',
      skills: ['Python Programming', 'Object-Oriented Programming', 'Project Development', 'Problem Solving'],
      bgGradient: 'from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30',
      credentialId: 'FIT-INTERN-2024-ANAND',
      achievements: [
        'Successfully completed 10-day intensive Python internship',
        'Demonstrated self-motivation and hard-working attitude',
        'Completed all assignments with good performance',
        'Successfully delivered final project on time',
        'Received positive feedback for learning dedication'
      ],
      certificateUrl: 'https://faceintech.com/certificates',
      downloadUrl: '/images/Facein.jpeg',
      verifyUrl: 'https://faceintech.com/verify'
    },
    {
      title: 'KEEMS SACE 2023',
      organization: 'Innovation Exhibition',
      date: '2023',
      description: 'Exhibited a collaborative ML + IoT project; achieved Top 3 placement for innovation.',
      fullDescription: 'Kerala Engineering Excellence and Management Society (KEEMS) Science and Engineering Exhibition where I presented an innovative project combining Machine Learning and Internet of Things technologies. The project demonstrated practical applications of AI in everyday life and received recognition for its innovative approach and technical excellence.',
      icon: <Trophy className="text-gold-600" size={24} />,
      color: 'yellow',
      type: 'Achievement',
      skills: ['Machine Learning', 'IoT Development', 'Collaboration', 'Innovation'],
      bgGradient: 'from-yellow-100 to-orange-200 dark:from-yellow-900/30 dark:to-orange-800/30',
      credentialId: 'KEEMS-2023-TOP3',
      achievements: [
        'Secured Top 3 position among 200+ participants',
        'Presented innovative ML + IoT integration',
        'Received recognition from industry experts',
        'Featured in local technology news'
      ],
      certificateUrl: 'https://keems.org/awards/2023/top3',
      downloadUrl: '/certificates/keems-sace-2023.pdf'
    },
    {
      title: 'NASA Space Apps Challenge 2024',
      organization: 'NASA',
      date: 'October 5-6, 2024',
      description: 'Recognized as "Galactic Problem Solver" for outstanding participation and innovative Earth-tech solution.',
      fullDescription: 'Participated in the prestigious NASA Space Apps Challenge 2024, a global hackathon focused on solving challenges related to space exploration and Earth science. Received recognition as "Galactic Problem Solver" for outstanding participation and efforts to address challenges we face on Earth and in space. The project demonstrated innovative use of space technology and data for solving real-world problems.',
      icon: <Star className="text-purple-600" size={24} />,
      color: 'purple',
      type: 'Recognition Certificate',
      skills: ['Space Technology', 'Problem Solving', 'Innovation', 'Earth Science', 'Global Collaboration'],
      bgGradient: 'from-purple-100 to-pink-200 dark:from-purple-900/30 dark:to-pink-800/30',
      credentialId: 'NASA-SAC-2024-GALACTIC-SOLVER',
      achievements: [
        'Recognized as "Galactic Problem Solver" by NASA',
        'Developed innovative Earth monitoring solution',
        'Collaborated with international team members',
        'Addressed real-world space and Earth challenges',
        'Received official NASA recognition certificate'
      ],
      certificateUrl: 'https://spaceappschallenge.org/2024/awards',
      downloadUrl: '/images/NASA Space Apps Challenge_page-0001.jpg',
      verifyUrl: 'https://nasa.gov/verify/space-apps-2024'
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

  const openCertificateModal = (certificate: any) => {
    setSelectedCertificate(certificate);
    setIsModalOpen(true);
  };

  const closeCertificateModal = () => {
    setIsModalOpen(false);
    setSelectedCertificate(null);
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
                  <button 
                    onClick={() => openCertificateModal(cert)}
                    className={`w-full flex items-center justify-center px-4 py-3 bg-gradient-to-r ${colorClasses.gradient} text-white rounded-lg hover:shadow-lg transition-all duration-300 font-medium group-hover:scale-105`}
                  >
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
            { number: '1', label: 'NASA Recognition', icon: <Star size={24} /> },
            { number: '1', label: 'Industry Internship', icon: <Trophy size={24} /> },
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

      {/* Certificate Modal */}
      <CertificateModal
        certificate={selectedCertificate}
        isOpen={isModalOpen}
        onClose={closeCertificateModal}
      />
    </section>
  );
};

export default Certifications;