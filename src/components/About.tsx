import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Third-year Software Engineering undergraduate with demonstrated expertise in full-stack development using 
            Spring Boot, React, Laravel, and PostgreSQL. Experienced in mobile development with React Native and 
            Flutter. Passionate about clean software architecture, scalable system design, and collaborative agile workflows. 
            Actively seeking Software Engineering Internship opportunities to apply technical skills and contribute to 
            building efficient, user-focused applications.
          </p>
        </motion.div>
      </div>
    </section>
  );
}