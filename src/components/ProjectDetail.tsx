import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  // Always start at the top when opening a detail page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const backToProjects = () => {
    navigate('/');
    setTimeout(() => {
      document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  if (!project) {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center px-4 text-center pt-24">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Project not found</h1>
        <button
          onClick={backToProjects}
          className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline"
        >
          <ArrowLeft className="h-4 w-4 mr-1" /> Back to Projects
        </button>
      </section>
    );
  }

  const validGithubUrls = (project.githubUrls ?? []).filter((url) => url && url !== '#');

  return (
    <section className="min-h-screen pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={backToProjects}
          className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-1" /> Back to Projects
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-lg mb-8">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <span className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold rounded-full bg-blue-600 text-white">
              {project.category}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {project.title}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            {project.description}
          </p>

          {project.details && project.details.length > 0 && (
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Highlights</h2>
              <ul className="space-y-3">
                {project.details.map((detail, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.08 }}
                    className="flex items-start space-x-3 text-gray-600 dark:text-gray-300"
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="leading-relaxed">{detail}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          )}

          <div className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm font-medium text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/30 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            {validGithubUrls.map((url, idx) => (
              <a
                key={url}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
              >
                <Github className="h-4 w-4 mr-2" />
                {validGithubUrls.length > 1 ? `Repository ${idx + 1}` : 'View Repository'}
              </a>
            ))}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Live Demo
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
