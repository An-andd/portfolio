import React from 'react';
import { X, Award, Calendar, ExternalLink, Download, Star, CheckCircle } from 'lucide-react';

interface CertificateModalProps {
  certificate: any;
  isOpen: boolean;
  onClose: () => void;
}

const CertificateModal: React.FC<CertificateModalProps> = ({ certificate, isOpen, onClose }) => {
  if (!isOpen || !certificate) return null;

  const getCertificateImage = (title: string) => {
    if (title.includes('NASA Space Apps Challenge')) {
      return '/images/NASA Space Apps Challenge_page-0001.jpg';
    }
    if (title.includes('Python Programming')) {
      return '/images/Facein.jpeg';
    }
    return null;
  };

  const certificateImage = getCertificateImage(certificate.title);

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 p-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className={`p-3 bg-gradient-to-r ${certificate.bgGradient} rounded-xl`}>
              {certificate.icon}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{certificate.title}</h2>
              <p className="text-gray-600 dark:text-gray-400">{certificate.organization}</p>
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
        <div className="p-6 space-y-6">
          {/* Certificate Image Display */}
          {certificateImage && (
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">Official Certificate</h3>
              <div className="relative group">
                <img
                  src={certificateImage}
                  alt={`${certificate.title} Certificate`}
                  className="w-full h-auto rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                
                {/* Zoom indicator */}
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink size={16} className="text-gray-700 dark:text-gray-300" />
                </div>
              </div>
              
              {/* Certificate Actions */}
              <div className="flex justify-center space-x-4 mt-4">
                <button
                  onClick={() => window.open(certificateImage, '_blank')}
                  className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm"
                >
                  <ExternalLink className="mr-2" size={16} />
                  View Full Size
                </button>
                <a
                  href={certificateImage}
                  download={`${certificate.title.replace(/\s+/g, '_')}_Certificate.jpg`}
                  className="flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors text-sm"
                >
                  <Download className="mr-2" size={16} />
                  Download Image
                </a>
              </div>
            </div>
          )}

          {/* Certificate Details */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Certificate Details</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Award className="text-blue-600" size={16} />
                  <span className="text-gray-600 dark:text-gray-300">Type: {certificate.type}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="text-green-600" size={16} />
                  <span className="text-gray-600 dark:text-gray-300">Issued: {certificate.date}</span>
                </div>
                {certificate.credentialId && (
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="text-purple-600" size={16} />
                    <span className="text-gray-600 dark:text-gray-300">ID: {certificate.credentialId}</span>
                  </div>
                )}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Skills Acquired</h4>
              <div className="flex flex-wrap gap-2">
                {certificate.skills.map((skill: string, index: number) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Description</h4>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{certificate.fullDescription}</p>
          </div>

          {/* Key Achievements */}
          {certificate.achievements && (
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Key Achievements</h4>
              <div className="space-y-2">
                {certificate.achievements.map((achievement: string, index: number) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Star className="text-yellow-500 mt-0.5" size={16} />
                    <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Verification Section */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl p-6 border border-green-200 dark:border-green-800">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
              <CheckCircle className="text-green-600 mr-2" size={20} />
              Certificate Verification
            </h4>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              This certificate has been verified and is authentic. You can verify its authenticity through the official channels.
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              {certificate.certificateUrl && (
                <a
                  href={certificate.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                >
                  <ExternalLink className="mr-2" size={20} />
                  View on Official Site
                </a>
              )}
              {certificate.verifyUrl && (
                <a
                  href={certificate.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
                >
                  <CheckCircle className="mr-2" size={20} />
                  Verify Certificate
                </a>
              )}
              <button
                onClick={() => {
                  navigator.clipboard.writeText(certificate.credentialId || certificate.title);
                  alert('Certificate ID copied to clipboard!');
                }}
                className="flex items-center px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors"
              >
                <Award className="mr-2" size={20} />
                Copy Certificate ID
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateModal;