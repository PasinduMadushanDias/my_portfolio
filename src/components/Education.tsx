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
    },
    {
      id: '2',
      institution: 'St. Aloysius\' College',
      degree: 'Grade 1 to G.C.E. Advanced Level',
      duration: 'Completed',
      location: 'Galle, Sri Lanka',
      achievements: [
        'G.C.E. Advanced Level Examination – Physical Science Stream',
        'Z-Score: 1.7732 | Combined Mathematics: A, Physics: A, Chemistry: B'
      ]
    }
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

        <div className="max-w-4xl mx-auto">
          {/* Academic Education */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 flex items-center">
              <GraduationCap className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3" />
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
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
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
                  {edu.achievements && edu.achievements.length > 0 && (
                    <ul className="mt-4 space-y-2">
                      {edu.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start space-x-3 text-sm text-gray-600 dark:text-gray-300">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}