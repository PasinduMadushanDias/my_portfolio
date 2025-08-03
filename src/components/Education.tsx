import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { Education } from '../types';

export default function EducationSection() {
  const education: Education[] = [
    {
      id: '1',
      institution: 'University of Colombo School of Computing',
      degree: 'Bachelor of Computer Science',
      duration: '2023 - Present',
      location: 'Colombo, Sri Lanka'
    }
    // {
    //   id: '2',
    //   institution: 'State University',
    //   degree: 'Bachelor of Science in Software Engineering',
    //   duration: '2013 - 2017',
    //   location: 'Austin, TX'
    // }
  ];

  const certifications = [
    'AWS Certified Solutions Architect',
    'Google Cloud Professional Developer',
    'MongoDB Certified Developer',
    'Scrum Master Certification'
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Academic foundation and continuous learning in computer science and software engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Academic Education */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 flex items-center">
              <GraduationCap className="h-6 w-6 text-emerald-600 dark:text-emerald-400 mr-3" />
              Academic Qualifications
            </h3>
            
            <div className="space-y-6">
              {education.map((edu) => (
                <div
                  key={edu.id}
                  className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {edu.degree}
                  </h4>
                  <p className="text-emerald-600 dark:text-emerald-400 font-medium mb-3">
                    {edu.institution}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{edu.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
              Certifications
            </h3>
            
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md">
              <div className="grid grid-cols-1 gap-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                  >
                    <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-800 dark:text-gray-200 font-medium">
                      {cert}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}