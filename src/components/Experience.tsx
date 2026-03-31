import { Briefcase, MapPin, Calendar, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { Experience } from '../types';

export default function ExperienceSection() {
  const experiences: Experience[] = [
    {
      id: 'rasaswadaya',
      position: 'Research Student',
      company: 'Rasaswadaya Project (AI-Driven Entertainment Platform)',
      duration: 'Recent',
      location: 'Sri Lankan Arts & Culture',
      achievements: [
        'Architected and built scalable backend APIs using Next.js, Nest.js, and PostgreSQL, serving 500+ concurrent users',
        'Engineered AI/ML modules for social graph mining, achieving 85% accuracy in personalized content recommendations',
        'Delivered core platform features including user/artist management, content uploads, event handling, live streaming capabilities, and real-time analytics dashboards',
        'Collaborated with cross-functional team of 5 developers to ensure on-time delivery of project milestones under supervision of Dr. Shiromi Arunathilake',
        'Technologies: Next.js, Nest.js, PostgreSQL, Python'
      ],
      repositoryUrl: '#'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Experience
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            My professional journey in software development, building solutions across various industries.
          </motion.p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              {index !== experiences.length - 1 && (
                <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-full">
                  <div className="w-px h-8 bg-gradient-to-b from-blue-500 to-transparent"></div>
                </div>
              )}

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <Briefcase className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {exp.position}
                    </h3>
                  </div>
                  <p className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-3">
                    {exp.company}
                  </p>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  {exp.repositoryUrl && (
                    <a
                      href={exp.repositoryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center mt-4 space-x-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>View Repository</span>
                    </a>
                  )}
                </div>

                <div className="lg:col-span-2">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achieveIndex) => (
                      <li
                        key={achieveIndex}
                        className="flex items-start space-x-3 text-gray-600 dark:text-gray-300"
                      >
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}