export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface Certificate {
  id: string;
  title: string;
  description: string;
  image: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  location: string;
  achievements: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  duration: string;
  location: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}