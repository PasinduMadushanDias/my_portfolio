import { Project } from '../types';
import LaunchPadImage from '../assets/images/projects/LaunchPad.png';
import SnapTalkImage from '../assets/images/projects/SnapTalk.png';

export const projects: Project[] = [
  {
    id: '1',
    title: 'LaunchPad Internship Management System',
    summary: 'A web platform that simplifies internship applications and management for students, mentors, and admins.',
    description:
      'A web platform built in my 2nd year to simplify internship applications and management. It supports student applications, mentor tracking, and admin controls.',
    details: [
      'Enabled students to apply for internships and track their application status',
      'Provided mentors with tools to monitor and manage assigned students',
      'Built admin controls for overseeing applications and platform data',
    ],
    image: LaunchPadImage,
    techStack: ['HTML', 'CSS', 'PostgreSQL', 'PHP', 'Asana'],
    githubUrls: ['https://github.com/group-project-cs46/website'],
    category: 'Web',
  },
  {
    id: '2',
    title: 'PureLeaf – Tea Factory Management System',
    summary:
      'A multi-tenant management ecosystem for 14 tea factories with 7 user roles, a mobile app, and a web dashboard.',
    description:
      'A multi-tenant factory management ecosystem supporting 14 tea factories with centralized owner oversight and real-time data synchronization.',
    details: [
      'Planned and launched a multi-tenant factory management ecosystem supporting 14 tea factories with centralized owner oversight and real-time data synchronization',
      'Created a comprehensive platform with 7 distinct user roles: Supplier, Driver, Inventory Manager, Transport Manager, Owner, Factory Manager, and Fertilizer Manager',
      'Built a cross-platform mobile application for Suppliers and Drivers, complemented by a robust Web Dashboard for administrative and managerial roles',
      'Streamlined core operational workflows including route optimization, fertilizer measurement, loan processing, and advance payment management',
      'Engineered an 88-test automated QA suite (Playwright + pytest) covering API and UI layers with cross-verification against the database, integrated into a GitHub Actions CI/CD pipeline for smoke tests on every push and on-demand full regression across multiple browsers',
      'Technologies: React, Spring Boot, PostgreSQL, Firebase, React Native, Playwright, pytest',
    ],
    image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800',
    techStack: ['React', 'Spring Boot', 'PostgreSQL', 'Firebase', 'React Native', 'Playwright', 'pytest'],
    githubUrls: [
      'https://github.com/3rd-year-project-14/tea-factory-frontend-web.git',
      'https://github.com/3rd-year-project-14/tea-factory-backend.git',
      'https://github.com/3rd-year-project-14/tea-factory-mobile-app.git',
    ],
    category: 'Web',
  },
  {
    id: '6',
    title: 'Beeline Campus SMS – Student Management System',
    summary:
      'A full-stack Student Management System for a multi-branch language campus with QR-code attendance and role-based dashboards.',
    description:
      'A full-stack Student Management System for a multi-branch language campus (Galle and Matara) serving four distinct user roles: Admin, Teacher, Staff, and Student.',
    details: [
      'Designed and built a full-stack Student Management System for a multi-branch language campus (Galle and Matara), serving four distinct user roles: Admin, Teacher, Staff, and Student',
      'Architected a layered Spring Boot REST API (Controller-Service-Repository-Entity) backed by PostgreSQL/Hibernate, exposing endpoints for authentication, branch/student/staff management, attendance, homework, and announcements',
      'Implemented QR-code-based attendance: generated printable per-student QR stickers and built a camera-driven scanner (html5-qrcode) for staff to mark attendance in real time, with duplicate-per-day prevention, alongside a manual attendance fallback',
      'Built branch-scoped homework tracking and campus-wide/branch-scoped announcements, plus a student fee and installment breakdown module tied to branch-level fee configuration',
      'Developed a role-based React SPA with dedicated dashboards, shared UI components, and centralized auth/app-state context, secured behind HTTPS to enable browser camera access for QR scanning',
      'Technologies: React 19, Vite, Tailwind CSS, Spring Boot 3.3, Hibernate, PostgreSQL, Java 17, Maven',
    ],
    image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800',
    techStack: ['React 19', 'Vite', 'Tailwind CSS', 'Spring Boot 3.3', 'Hibernate', 'PostgreSQL', 'Java 17', 'Maven'],
    githubUrls: ['#'],
    category: 'Web',
  },
  {
    id: '3',
    title: 'DineMate Restaurant Management System',
    summary: 'A platform for restaurant operations: table reservations, order management, and customer feedback.',
    description:
      'A comprehensive platform for managing restaurant operations, including table reservations, order management, and customer feedback.',
    details: [
      'Managed table reservations with real-time availability',
      'Handled order management across the dining workflow',
      'Collected and surfaced customer feedback',
    ],
    image: 'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=800',
    techStack: ['React', 'Express', 'MongoDB', 'Node.js'],
    githubUrls: ['https://github.com/mern-stack-dev-project/food-mern-stack-project.git'],
    category: 'Web',
  },
  {
    id: '4',
    title: 'SnapTalk Mobile Chat Application',
    summary: 'An instant chat app where two users start a conversation by scanning a QR code.',
    description:
      'An instant chat app where two users can create a chat by scanning a QR code. Enables fast and secure messaging between users.',
    details: [
      'Started chats instantly by scanning a QR code between two users',
      'Delivered fast and secure real-time messaging',
      'Built with Flutter, backed by SQLite and Firebase',
    ],
    image: SnapTalkImage,
    techStack: ['Flutter', 'SQLite', 'Firebase'],
    githubUrls: ['https://github.com/TheekshanaThathsara/qr_chat_app.git'],
    category: 'Mobile',
  },
  {
    id: '5',
    title: 'PetKart Online Pet Marketplace',
    summary: 'An online marketplace for buying, selling, and rehoming pets such as cats, dogs, and fish.',
    description:
      'PetKart is an online marketplace designed for buying and selling pets, including cats, dogs, and fish. The platform allows users to browse pet listings, connect with sellers, and securely find or rehome pets with ease.',
    details: [
      'Browsed pet listings across cats, dogs, and fish',
      'Connected buyers with sellers to find or rehome pets',
      'Provided a secure marketplace experience',
    ],
    image: 'https://images.pexels.com/photos/163077/game-console-controller-joystick-163077.jpeg?auto=compress&cs=tinysrgb&w=800',
    techStack: ['React', 'Express', 'MongoDB', 'Node.js'],
    githubUrls: ['https://github.com/PetKart/petkart.git'],
    category: 'Web',
  },
];
