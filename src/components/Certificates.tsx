import { ExternalLink } from 'lucide-react';
import { Certificate } from '../types';
import Linux_01 from '../assets/images/certificates/Linux-01.jpeg';

export default function Certificates() {
  const certificates: Certificate[] = [
    {
      id: '1',
      title: 'Linux Troubleshooting',
      description: 'Certified in diagnosing and resolving Linux system issues to ensure stability and performance.',
      image: Linux_01,
      issuer: 'LinkedIn Learning',
      date: 'July 30 2025',
      credentialUrl: 'https://lnkd.in/eNHSusvQ'
    },
    {
      id: '2',
      title: 'Google Professional Cloud Developer',
      description: 'Demonstrates ability to build and deploy scalable applications on Google Cloud',
      image: 'https://images.pexels.com/photos/573243/pexels-photo-573243.jpeg?auto=compress&cs=tinysrgb&w=800',
      issuer: 'Google Cloud',
      date: 'January 2024',
      credentialUrl: 'https://cloud.google.com/certification'
    },
    {
      id: '3',
      title: 'React Advanced Certification',
      description: 'Comprehensive assessment of React knowledge including hooks, context, and performance optimization',
      image: 'https://images.pexels.com/photos/7088439/pexels-photo-7088439.jpeg?auto=compress&cs=tinysrgb&w=800',
      issuer: 'Frontend Masters',
      date: 'November 2023',
      credentialUrl: 'https://frontendmasters.com'
    }
  ];

  return (
    <section id="certificates" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Certificates & Credentials
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Professional certifications and achievements that demonstrate my skills and expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate) => (
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
    </section>
  );
}
