import React from 'react';
import { X, Github, ExternalLink, Code, Play, Star, Calendar, Users, Target } from 'lucide-react';

interface ProjectModalProps {
  project: any;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 p-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-xl">
              {project.icon}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{project.title}</h2>
              <p className="text-gray-600 dark:text-gray-400">{project.category}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Project Overview */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Project Overview</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">{project.fullDescription}</p>
            
            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {project.metrics?.map((metric: any, index: number) => (
                <div key={index} className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{metric.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Implementation */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Technical Implementation</h3>
            <div className="space-y-4">
              {project.implementation?.map((item: any, index: number) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600 dark:text-gray-300">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Code Snippets */}
          {project.codeSnippets && (
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Key Code Snippets</h3>
              <div className="space-y-4">
                {project.codeSnippets.map((snippet: any, index: number) => (
                  <div key={index} className="bg-gray-900 rounded-lg overflow-hidden">
                    <div className="flex items-center justify-between px-4 py-2 bg-gray-800">
                      <span className="text-gray-300 text-sm font-medium">{snippet.title}</span>
                      <span className="text-xs text-gray-400">{snippet.language}</span>
                    </div>
                    <pre className="p-4 text-sm text-gray-300 overflow-x-auto">
                      <code>{snippet.code}</code>
                    </pre>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Features */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Key Features</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {project.features?.map((feature: string, index: number) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <Star className="text-yellow-500" size={16} />
                  <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Challenges & Solutions */}
          {project.challenges && (
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Challenges & Solutions</h3>
              <div className="space-y-4">
                {project.challenges.map((challenge: any, index: number) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{challenge.challenge}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{challenge.solution}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-lg transition-colors"
              >
                <Github className="mr-2" size={20} />
                View Source Code
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                <ExternalLink className="mr-2" size={20} />
                Live Demo
              </a>
            )}
            {project.videoUrl && (
              <a
                href={project.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
              >
                <Play className="mr-2" size={20} />
                Watch Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;