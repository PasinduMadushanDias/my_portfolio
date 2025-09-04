import { ArrowDown } from 'lucide-react';
import profileImage from '../assets/images/profile.jpg';

export default function Hero() {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Photo */}
          <div className="flex justify-center lg:justify-start lg:pl-20 order-1 lg:order-1">
            <div className="relative">
              <div className="w-96 h-96 rounded-full overflow-hidden shadow-2xl ring-4 ring-emerald-500/20 dark:ring-emerald-400/20">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-emerald-500/20 to-transparent"></div>
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left order-2 lg:order-2">
            <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
              Pasindu Madushan
            </h1>
            <h2 className="text-3xl lg:text-4xl font-semibold text-emerald-600 dark:text-emerald-400 mb-8">
              Full-Stack Developer | Flutter & Spring Boot 
            </h2>
            <p className="text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl leading-relaxed">
              a Full-Stack Developer passionate about crafting web and mobile apps,  
with a deep appreciation for the power and flexibility of Linux.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={scrollToAbout}
                className="inline-flex items-center px-10 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-all duration-200 transform hover:scale-105"
              >
                Learn More
                <ArrowDown className="ml-2 h-5 w-5" />
              </button>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector('#contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center px-10 py-4 border-2 border-emerald-600 dark:border-emerald-400 text-lg font-medium rounded-lg text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-all duration-200"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}