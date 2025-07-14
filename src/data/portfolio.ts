import { Project, BlogPost, WorkExperience } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Microservices Platform',
    description: 'Scalable microservices architecture with Docker, Kubernetes, and service mesh implementation for enterprise applications.',
    technologies: ['Java', 'Spring Boot', 'Docker', 'Kubernetes', 'Redis', 'PostgreSQL'],
    githubUrl: 'https://github.com/adwaitabhyankar',
    image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: '2',
    title: 'Native Android App',
    description: 'High-performance Android application with modern UI/UX, offline capabilities, and real-time data synchronization.',
    technologies: ['Kotlin', 'Jetpack Compose', 'Room', 'Retrofit', 'Coroutines', 'MVVM'],
    githubUrl: 'https://github.com/adwaitabhyankar',
    liveUrl: 'https://play.google.com/store',
    image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: '3',
    title: 'API Gateway Solution',
    description: 'Enterprise-grade API gateway with rate limiting, authentication, monitoring, and analytics dashboard.',
    technologies: ['Node.js', 'Express', 'Redis', 'MongoDB', 'JWT', 'Prometheus'],
    githubUrl: 'https://github.com/adwaitabhyankar',
    image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Building Scalable Microservices with Spring Boot',
    excerpt: 'Learn how to design and implement scalable microservices architecture using Spring Boot, Docker, and Kubernetes.',
    publishedAt: '2024-01-15',
    readTime: '8 min read',
    url: 'https://medium.com/@adwaitabhyankar',
    platform: 'medium'
  },
  {
    id: '2',
    title: 'Modern Android Development with Jetpack Compose',
    excerpt: 'Exploring the latest Android development practices with Jetpack Compose and architecture components.',
    publishedAt: '2024-01-10',
    readTime: '6 min read',
    url: 'https://dev.to/adwaitabhyankar',
    platform: 'dev.to'
  },
  {
    id: '3',
    title: 'Leadership in Engineering Teams',
    excerpt: 'Insights on leading engineering teams, fostering innovation, and building high-performance development cultures.',
    publishedAt: '2024-01-05',
    readTime: '10 min read',
    url: 'https://medium.com/@adwaitabhyankar',
    platform: 'medium'
  }
];

export const workExperience: WorkExperience[] = [
  {
    id: '1',
    title: 'Senior Engineering Manager',
    company: 'TechCorp Inc.',
    duration: '2022 - Present',
    description: [
      'Lead a team of 12+ engineers across multiple product lines',
      'Architected microservices platform serving 10M+ daily requests',
      'Reduced deployment time by 70% through CI/CD automation',
      'Mentored junior developers and established code review practices'
    ],
    technologies: ['Java', 'Spring Boot', 'Kubernetes', 'AWS', 'PostgreSQL']
  },
  {
    id: '2',
    title: 'Lead Backend Developer',
    company: 'StartupXYZ',
    duration: '2020 - 2022',
    description: [
      'Designed and implemented scalable REST APIs',
      'Built real-time notification system using WebSockets',
      'Optimized database queries resulting in 40% performance improvement',
      'Integrated third-party services and payment gateways'
    ],
    technologies: ['Node.js', 'Express', 'MongoDB', 'Redis', 'AWS']
  },
  {
    id: '3',
    title: 'Android Developer',
    company: 'Mobile Solutions Ltd.',
    duration: '2018 - 2020',
    description: [
      'Developed native Android applications with 500K+ downloads',
      'Implemented offline-first architecture with local caching',
      'Collaborated with UI/UX team to deliver pixel-perfect designs',
      'Published apps on Google Play Store with 4.5+ ratings'
    ],
    technologies: ['Kotlin', 'Java', 'Android SDK', 'Room', 'Retrofit']
  }
];

export const skills = [
  { category: 'Languages', items: ['Java', 'Kotlin', 'JavaScript', 'TypeScript', 'Python', 'Go'] },
  { category: 'Backend', items: ['Spring Boot', 'Node.js', 'Express', 'Microservices', 'REST APIs', 'GraphQL'] },
  { category: 'Mobile', items: ['Android', 'Jetpack Compose', 'Room', 'Retrofit', 'MVVM', 'Coroutines'] },
  { category: 'Database', items: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Elasticsearch'] },
  { category: 'DevOps', items: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Jenkins', 'Prometheus'] },
  { category: 'Leadership', items: ['Team Management', 'Mentoring', 'Agile', 'Code Review', 'Architecture Design'] }
];