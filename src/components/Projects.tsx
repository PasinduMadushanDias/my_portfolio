import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';
import LaunchPadImage from '../assets/images/projects/LaunchPad.png';
import SnapTalkImage from '../assets/images/projects/SnapTalk.png';

import { useState } from 'react';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Web' | 'Mobile'>('All');
  const projects: Project[] = [
    {
      id: '1',
      title: 'LaunchPad Internship Management System',
      description: 'A web platform built in my 2nd year to simplify internship applications and management. It supports student applications, mentor tracking, and admin controls',
      image: LaunchPadImage,
      techStack: ['HTML', 'CSS', 'PostgreSQL', 'PHP', 'Asana'],
      githubUrls: ['https://github.com/group-project-cs46/website'],
      category: 'Web'
    },
    {
      id: '2',
      title: 'Pure Leaf Tea Factory Management System',
      description: 'A comprehensive system for managing tea factory operations, including route management, transport management, loan and advance processing, fertilizer management, and tea leaf inventory tracking.',
      image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800',
      techStack: ['React', 'Spring Boot', 'PostgreSQL', 'Tailwind CSS', 'Firebase', 'Neon online DB'],
      githubUrls: [
        'https://github.com/3rd-year-project-14/tea-factory-frontend-web.git',
        'https://github.com/3rd-year-project-14/tea-factory-backend.git',
        'https://github.com/3rd-year-project-14/tea-factory-mobile-app.git'
      ],
      category: 'Web'
    },
    {
      id: '3',
      title: 'DineMate Restaurant Management System',
      description: 'A comprehensive platform for managing restaurant operations, including table reservations, order management, and customer feedback.',
      image: 'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=800',
      techStack: ['React', 'Express', 'MongoDB', 'Node.js'],
      githubUrls: ['https://github.com/mern-stack-dev-project/food-mern-stack-project.git'],
      category: 'Web'
    },

    {
      id: '4',
      title: 'SnapTalk Mobile Chat Application',
      description: 'An instant chat app where two users can create a chat by scanning a QR code. Enables fast and secure messaging between users.',
      image: SnapTalkImage,
      techStack: ['Flutter ', 'SQLite', 'Firebase'],
      githubUrls: ['https://github.com/TheekshanaThathsara/qr_chat_app.git'],
      category: 'Mobile'
    },
    {
      id: '5',
      title: 'PetKart Online Pet Marketplace',
      description: 'PetKart is an online marketplace designed for buying and selling pets, including cats, dogs, and fish. The platform allows users to browse pet listings, connect with sellers, and securely find or rehome pets with ease.',
      image: 'https://images.pexels.com/photos/163077/game-console-controller-joystick-163077.jpeg?auto=compress&cs=tinysrgb&w=800',
      techStack: ['Unity', 'C#', 'Photoshop'],
      githubUrls: ['https://github.com/PetKart/petkart.git'],
      category: 'Web'
    }
  ];

  const categories: Array<'All' | 'Web' | 'Mobile'> = ['All', 'Web', 'Mobile'];
  const filteredProjects = selectedCategory === 'All' ? projects : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A selection of my recent work showcasing different technologies and problem-solving approaches.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full font-medium border transition-colors duration-200 focus:outline-none
                ${selectedCategory === cat
                  ? 'bg-emerald-600 text-white border-emerald-600'
                  : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-700 hover:bg-emerald-50 dark:hover:bg-gray-800'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.length === 0 ? (
            <div className="col-span-full text-center text-gray-500 dark:text-gray-400 text-lg py-12">
              No projects found in this category.
            </div>
          ) : (
            filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-900/30 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    {Array.isArray(project.githubUrls) && project.githubUrls.map((url, idx) => (
                      <a
                        key={url}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code {project.githubUrls && project.githubUrls.length > 1 ? idx + 1 : ''}
                      </a>
                    ))}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors duration-200"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}