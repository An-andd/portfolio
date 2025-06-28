import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');

    // Simulate form submission
    setTimeout(() => {
      if (formData.name && formData.email && formData.message) {
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setFormStatus('idle'), 3000);
      } else {
        setFormStatus('error');
        setTimeout(() => setFormStatus('idle'), 3000);
      }
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <Mail className="text-blue-600" size={24} />,
      label: 'Email',
      value: 'callmeanand5@gmail.com',
      link: 'mailto:callmeanand5@gmail.com',
      color: 'blue',
    },
    {
      icon: <Phone className="text-green-600" size={24} />,
      label: 'Phone',
      value: '+91-8589936359',
      link: 'tel:+918589936359',
      color: 'green',
    },
    {
      icon: <MapPin className="text-purple-600" size={24} />,
      label: 'Location',
      value: 'Kochi, Kerala',
      link: null,
      color: 'purple',
    },
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      label: 'GitHub',
      url: 'https://github.com/An-andd',
      color: 'hover:text-gray-900 dark:hover:text-white',
    },
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/anand-suresh-8b8a73325',
      color: 'hover:text-blue-600',
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Get in Touch
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, innovative projects, 
                or just having a chat about technology. Feel free to reach out!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div
                  key={info.label}
                  className="flex items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-md transition-all duration-300 transform hover:scale-105"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="p-3 bg-white dark:bg-gray-700 rounded-lg shadow-sm mr-4">
                    {info.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                      {info.label}
                    </p>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-lg font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-lg font-semibold text-gray-900 dark:text-white">
                        {info.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-110 hover:shadow-lg`}
                    title={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200 resize-none"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              <button
                type="submit"
                disabled={formStatus === 'sending'}
                className={`w-full flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                  formStatus === 'sending'
                    ? 'bg-gray-400 cursor-not-allowed'
                    : formStatus === 'success'
                    ? 'bg-green-600 hover:bg-green-700'
                    : formStatus === 'error'
                    ? 'bg-red-600 hover:bg-red-700'
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl'
                } text-white`}
              >
                {formStatus === 'sending' && (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                )}
                {formStatus === 'success' && <CheckCircle size={20} className="mr-2" />}
                {formStatus === 'error' && <AlertCircle size={20} className="mr-2" />}
                {formStatus === 'idle' && <Send size={20} className="mr-2" />}
                
                {formStatus === 'sending' && 'Sending...'}
                {formStatus === 'success' && 'Message Sent!'}
                {formStatus === 'error' && 'Error Occurred'}
                {formStatus === 'idle' && 'Send Message'}
              </button>
            </form>

            {/* Status Messages */}
            {formStatus === 'success' && (
              <div className="mt-4 p-4 bg-green-100 dark:bg-green-900/30 border border-green-400 dark:border-green-600 rounded-lg">
                <p className="text-green-800 dark:text-green-400 text-sm">
                  Thank you for your message! I'll get back to you soon.
                </p>
              </div>
            )}

            {formStatus === 'error' && (
              <div className="mt-4 p-4 bg-red-100 dark:bg-red-900/30 border border-red-400 dark:border-red-600 rounded-lg">
                <p className="text-red-800 dark:text-red-400 text-sm">
                  Something went wrong. Please try again or contact me directly.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;