import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/PasinduMadushanDias',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/pasindu-madushan-504907281/',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: 'mailto:pmdwijegunasinghe@gmail.com',
      label: 'Email'
    }
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 dark:bg-gray-700 rounded-lg flex items-center justify-center hover:bg-emerald-600 dark:hover:bg-emerald-600 transition-all duration-200 transform hover:scale-110"
                  aria-label={social.label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-400 flex items-center justify-center space-x-1">
              <span>© 2025 Pasindu Madushan. </span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span></span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}