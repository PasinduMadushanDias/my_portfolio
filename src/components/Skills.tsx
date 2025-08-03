import React from 'react';
import { Code, Server, PenTool as Tool, Database } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend',
      skills: [
        'React/Next.js',
        'TypeScript',
        'Tailwind CSS',
        'Vue.js',
        'HTML5/CSS3',
        'JavaScript ES6+'
      ]
    },
    {
      icon: Server,
      title: 'Backend',
      skills: [
        'Node.js',
        'Python/Django',
        'Express.js',
        'FastAPI',
        'RESTful APIs',
        'GraphQL'
      ]
    },
    {
      icon: Database,
      title: 'Databases',
      skills: [
        'PostgreSQL',
        'MongoDB',
        'Redis',
        'MySQL',
        'Supabase',
        'Firebase'
      ]
    },
    {
      icon: Tool,
      title: 'Tools & DevOps',
      skills: [
        'AWS/GCP',
        'Docker',
        'Kubernetes',
        'Git/GitHub',
        'CI/CD',
        'Terraform'
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Technologies and tools I use to build exceptional software solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl mb-6 mx-auto">
                  <Icon className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center mb-4">
                  {category.title}
                </h3>

                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="bg-white dark:bg-gray-700 px-4 py-2 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow duration-200"
                    >
                      <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}