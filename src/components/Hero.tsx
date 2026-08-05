import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import type { MouseEvent } from 'react';
import profileImage from '../assets/images/profile.jpg';
import cvFile from '../assets/cv/Pasindu_Madushan_Dias_CV.pdf';

export default function Hero() {
  // Mouse-driven 3D tilt for the profile photo
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), { stiffness: 150, damping: 15 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-transparent dark:to-transparent pt-16 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center lg:justify-start lg:pl-20 order-1 lg:order-1"
            style={{ perspective: 1000 }}
          >
            <motion.div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
              animate={{ y: [0, -16, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
            >
              {/* Glowing aura behind the photo */}
              <div className="absolute -inset-4 rounded-full bg-blue-500/20 blur-2xl dark:bg-blue-400/30" style={{ transform: 'translateZ(-40px)' }}></div>
              <div className="w-96 h-96 lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden shadow-2xl ring-4 ring-blue-500/30 dark:ring-blue-400/40" style={{ transform: 'translateZ(40px)' }}>
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-transparent" style={{ transform: 'translateZ(60px)' }}></div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
            }}
            style={{ perspective: 1000 }}
            className="text-center lg:text-left order-2 lg:order-2"
          >
            <motion.p
              variants={{ hidden: { opacity: 0, rotateX: -40, y: 20 }, visible: { opacity: 1, rotateX: 0, y: 0 } }}
              className="matrix-mono text-blue-600 dark:text-blue-400 text-base lg:text-lg mb-4 terminal-prompt"
            >
              whoami
            </motion.p>
            <motion.h1
              variants={{ hidden: { opacity: 0, rotateX: -40, y: 30 }, visible: { opacity: 1, rotateX: 0, y: 0 } }}
              className="text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white dark:matrix-glow mb-6"
            >
              Pasindu Madushan
            </motion.h1>
            <motion.h2
              variants={{ hidden: { opacity: 0, rotateX: -40, y: 20 }, visible: { opacity: 1, rotateX: 0, y: 0 } }}
              className="matrix-mono text-2xl lg:text-3xl font-semibold text-blue-600 dark:text-blue-400 dark:matrix-glow mb-8"
            >
              Full-Stack Developer | Flutter & Spring Boot
            </motion.h2>
            <motion.p
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl leading-relaxed"
            >
              a Full-Stack Developer passionate about crafting web and mobile apps,
with a deep appreciation for the power and flexibility of Linux.
            </motion.p>

            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="flex gap-4 justify-center lg:justify-start mt-8">
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
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}