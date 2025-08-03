import React from 'react';
import { Code, Zap, Users } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code that stands the test of time.'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing applications for speed, scalability, and exceptional user experience.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively in agile teams to deliver high-quality software solutions.'
    }
  ];

  const coreSkills = [
    'JavaScript/TypeScript', 'React/Next.js', 'Node.js', 'Python',
    'AWS/Cloud Services', 'PostgreSQL/MongoDB', 'Docker/Kubernetes', 'Git/CI/CD'
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Passionate software engineer with 5+ years of experience building robust web applications 
            and scalable backend systems. I thrive on solving complex problems and turning innovative 
            ideas into reality.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              What I Bring
            </h3>
            <div className="space-y-6">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center">
                        <Icon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Core Technologies
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {coreSkills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-700 px-4 py-3 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}