import React from 'react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { Experience } from '../types';

export default function ExperienceSection() {
  const experiences: Experience[] = [
    {
      id: '1',
      company: 'TechCorp Solutions',
      position: 'Senior Software Engineer',
      duration: '2022 - Present',
      location: 'San Francisco, CA',
      achievements: [
        'Led development of microservices architecture serving 1M+ users',
        'Improved application performance by 40% through optimization strategies',
        'Mentored 3 junior developers and established code review processes',
        'Implemented CI/CD pipelines reducing deployment time by 60%'
      ]
    },
    {
      id: '2',
      company: 'StartupXYZ',
      position: 'Full Stack Developer',
      duration: '2020 - 2022',
      location: 'Remote',
      achievements: [
        'Built scalable web applications from concept to production',
        'Developed RESTful APIs handling 10k+ requests per minute',
        'Collaborated with design team to implement pixel-perfect UIs',
        'Integrated third-party services including payment processors'
      ]
    },
    {
      id: '3',
      company: 'Digital Agency Pro',
      position: 'Junior Software Developer',
      duration: '2019 - 2020',
      location: 'Austin, TX',
      achievements: [
        'Developed responsive websites for 20+ client projects',
        'Maintained and enhanced legacy codebases',
        'Participated in agile development processes',
        'Gained expertise in modern JavaScript frameworks'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My professional journey in software development, building solutions across various industries.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="relative bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              {index !== experiences.length - 1 && (
                <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-full">
                  <div className="w-px h-8 bg-gradient-to-b from-emerald-500 to-transparent"></div>
                </div>
              )}

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <Briefcase className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {exp.position}
                    </h3>
                  </div>
                  <p className="text-lg font-medium text-emerald-600 dark:text-emerald-400 mb-3">
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
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}