import { Github, Linkedin, Mail, Download } from 'lucide-react';
import profileImage from '../assets/images/profile.jpg';
import cvFile from '../assets/cv/Pasindu_Madushan_Dias_CV.pdf';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Photo */}
          <div className="flex justify-center lg:justify-start lg:pl-20 order-1 lg:order-1">
            <div className="relative">
              <div className="w-96 h-96 lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden shadow-2xl ring-4 ring-blue-500/20 dark:ring-blue-400/20">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-transparent"></div>
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left order-2 lg:order-2">
            <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
              Pasindu Madushan
            </h1>
            <h2 className="text-3xl lg:text-4xl font-semibold text-blue-600 dark:text-blue-400 mb-8">
              Full-Stack Developer | Flutter & Spring Boot 
            </h2>
            <p className="text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl leading-relaxed">
              a Full-Stack Developer passionate about crafting web and mobile apps,  
with a deep appreciation for the power and flexibility of Linux.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector('#contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center px-10 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 transform hover:scale-105"
              >
                Get In Touch
              </a>
              <a
                href={cvFile}
                download="Pasindu_Madushan_CV.pdf"
                className="inline-flex items-center justify-center px-10 py-4 border-2 border-blue-600 dark:border-blue-400 text-lg font-medium rounded-lg text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start mt-8">
              <a
                href="https://github.com/PasinduMadushanDias"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all duration-200 transform hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400" />
              </a>
              <a
                href="https://www.linkedin.com/in/pasindu-madushan-504907281/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all duration-200 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400" />
              </a>
              <a
                href="mailto:pmdwijegunasinghe@gmail.com"
                className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all duration-200 transform hover:scale-110"
                aria-label="Email"
              >
                <Mail className="h-6 w-6 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}