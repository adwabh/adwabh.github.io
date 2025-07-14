export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  readTime: string;
  url: string;
  platform: 'medium' | 'dev.to' | 'personal';
}

export interface WorkExperience {
  id: string;
  title: string;
  company: string;
  duration: string;
  description: string[];
  technologies: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}