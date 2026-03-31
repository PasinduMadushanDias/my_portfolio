import { Code, Rocket, Brain, Target } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  const highlights = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Proficient in building end-to-end applications using modern technologies like React, Spring Boot, and Flutter for seamless user experiences.'
    },
    {
      icon: Rocket,
      title: 'Problem Solver',
      description: 'Passionate about tackling complex challenges and transforming innovative ideas into functional, scalable solutions.'
    },
    {
      icon: Brain,
      title: 'Continuous Learning',
      description: 'Committed to staying current with emerging technologies and industry best practices to deliver cutting-edge solutions.'
    },
    {
      icon: Target,
      title: 'Project Delivery',
      description: 'Experienced in managing projects from conception to deployment, ensuring quality and meeting deadlines consistently.'
    }
  ];

  const coreSkills = [
    'React.js', 'Spring Boot', 'Flutter', 'Node.js',
    'PostgreSQL', 'MongoDB', 'Firebase', 'Tailwind CSS'
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm a passionate Computer Science undergraduate at the University of Colombo School of Computing, 
            specializing in full-stack development. With hands-on experience in building web and mobile applications, 
            I combine technical expertise with creative problem-solving to deliver impactful software solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              What I Bring
            </h3>
            <div className="space-y-6">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                        <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
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
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Core Technologies
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {coreSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white dark:bg-gray-700 px-4 py-3 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}