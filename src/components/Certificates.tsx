import { ExternalLink, MapPin } from 'lucide-react';
import { Certificate } from '../types';
import { useState } from 'react';
import Linux_01 from '../assets/images/certificates/Linux-01.jpeg';

export default function Certificates() {
  const [filter, setFilter] = useState<'professional' | 'sports'>('professional');
  
  const professionalCertificates: Certificate[] = [
    {
      id: '1',
      title: 'Linux Troubleshooting',
      description: 'Certified in diagnosing and resolving Linux system issues to ensure stability and performance.',
      image: Linux_01,
      issuer: 'LinkedIn Learning',
      date: 'July 30 2025',
      category: 'professional',
      credentialUrl: 'https://lnkd.in/eNHSusvQ'
    },
    {
      id: '2',
      title: 'Google Professional Cloud Developer',
      description: 'Demonstrates ability to build and deploy scalable applications on Google Cloud',
      image: 'https://images.pexels.com/photos/573243/pexels-photo-573243.jpeg?auto=compress&cs=tinysrgb&w=800',
      issuer: 'Google Cloud',
      date: 'January 2024',
      category: 'professional',
      credentialUrl: 'https://cloud.google.com/certification'
    },
    {
      id: '3',
      title: 'React Advanced Certification',
      description: 'Comprehensive assessment of React knowledge including hooks, context, and performance optimization',
      image: 'https://images.pexels.com/photos/7088439/pexels-photo-7088439.jpeg?auto=compress&cs=tinysrgb&w=800',
      issuer: 'Frontend Masters',
      date: 'November 2023',
      category: 'professional',
      credentialUrl: 'https://frontendmasters.com'
    }
  ];
  
  const sportsCertificates: Certificate[] = [
    {
      id: '4',
      title: 'National Swimming Championship',
      description: 'Competed in the 100m freestyle event against top swimmers from across the country.',
      image: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=800',
      issuer: 'National Aquatics Association',
      achievement: 'Silver Medal',
      date: 'June 2023',
      category: 'sports',
      location: 'National Aquatic Center, Colombo',
      credentialUrl: 'https://example.com/certificate'
    },
    {
      id: '5',
      title: 'Inter-University Basketball Tournament',
      description: 'Represented the university in the annual inter-university basketball championship.',
      image: 'https://images.pexels.com/photos/358042/pexels-photo-358042.jpeg?auto=compress&cs=tinysrgb&w=800',
      issuer: 'University Sports Council',
      achievement: 'Champions - Team Captain',
      date: 'March 2024',
      category: 'sports',
      location: 'University Sports Complex',
      credentialUrl: 'https://example.com/certificate'
    }
  ];

  return (
    <section id="certificates" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Certificates & Credentials
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Professional certifications and achievements that demonstrate my skills and expertise.
          </p>
        </div>
        
        {/* Filter Buttons */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
            <button
              onClick={() => setFilter('professional')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                filter === 'professional'
                  ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                  : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Professional
            </button>
            <button
              onClick={() => setFilter('sports')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                filter === 'sports'
                  ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                  : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Sports
            </button>
          </div>
        </div>

        {/* Professional Certificates */}
        {filter === 'professional' && (
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-8 pb-2 border-b border-gray-200 dark:border-gray-700">
              Professional Certifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {professionalCertificates.map((certificate) => (
                <div
                  key={certificate.id}
                  className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
                >
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={certificate.image}
                      alt={certificate.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {certificate.title}
                    </h3>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 mb-3 text-sm">
                      <span className="font-medium">{certificate.issuer}</span>
                      <span className="mx-2">•</span>
                      <span>{certificate.date}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {certificate.description}
                    </p>

                    {certificate.credentialUrl && (
                      <div className="mt-4">
                        <a
                          href={certificate.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View Credential
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Sports Achievements */}
        {filter === 'sports' && (
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-8 pb-2 border-b border-gray-200 dark:border-gray-700">
              Sports Achievements
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sportsCertificates.map((certificate) => (
                <div
                  key={certificate.id}
                  className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
                >
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={certificate.image}
                      alt={certificate.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    {certificate.achievement && (
                      <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                        {certificate.achievement}
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {certificate.title}
                    </h3>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 mb-3 text-sm">
                      <span className="font-medium">{certificate.issuer}</span>
                      <span className="mx-2">•</span>
                      <span>{certificate.date}</span>
                    </div>
                    {certificate.location && (
                      <div className="flex items-center text-gray-500 dark:text-gray-400 mb-3 text-sm">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{certificate.location}</span>
                      </div>
                    )}
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {certificate.description}
                    </p>

                    {certificate.credentialUrl && (
                      <div className="mt-4">
                        <a
                          href={certificate.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-yellow-600 hover:bg-yellow-700 rounded-lg transition-colors duration-200"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View Certificate
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
