import { Project, BlogPost, WorkExperience } from '../types';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub } from 'react-icons/fi';
import { SiMedium, SiDevdotto } from 'react-icons/si';
import type { ContactInfo, SocialLink } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Android CRUD App',
    description: 'Companion app for the python_CRUD project',
    technologies: ['Java'],
    githubUrl: 'https://github.com/adwabh/android-CRUD-companion-app',
    image: 'https://cdn-icons-png.flaticon.com/512/1748/174836.png'
  },
  {
    id: '2',
    title: 'Android WorkManager Demo',
    description: 'Work Manager API sample',
    technologies: ['Java', 'Android WorkManager'],
    githubUrl: 'https://github.com/adwabh/WorkManagerSample',
    image: 'https://cdn-icons-png.flaticon.com/512/1748/174836.png'
  },
  {
    id: '3',
    title: 'Django Database Demo',
    description: 'Simple Django project demonstrating API, database operations using PostgreSQL and JSON serialization',
    technologies: ['Python', 'Django', 'PostgreSQL'],
    githubUrl: 'https://github.com/adwabh/DjangoDBDemo',
    image: 'https://www.djangoproject.com/m/img/logos/django-logo-negative.svg'
  },
  {
    id: '4',
    title: 'Kubernetes Sample App',
    description: 'Kubernetes example following Techworld with Nana course',
    technologies: ['Kubernetes', 'Spring Boot', 'Docker'],
    githubUrl: 'https://github.com/adwabh/k8s-sample',
    image: 'https://www.svgrepo.com/show/376331/kubernetes.svg'
  },
  {
    id: '5',
    title: 'Kafka with Spring Boot',
    description: 'A demonstration project showcasing Kafka integration with Spring Boot (producers, consumers, Docker setup)',
    technologies: ['Kotlin', 'Spring Boot', 'Kafka', 'Docker'],
    githubUrl: 'https://github.com/adwabh/kafkademo',
    image: 'https://www.svgrepo.com/show/353950/kafka.svg'
  },
  {
    id: '6',
    title: 'Kubernetes Monitoring App',
    description: 'Sample Spring Boot application for deployment to Google Kubernetes Engine, with Prometheus metrics and Grafana dashboards',
    technologies: ['Kotlin', 'Spring Boot', 'Prometheus', 'Grafana', 'Docker', 'GKE'],
    githubUrl: 'https://github.com/adwabh/kubesample',
    image: 'https://www.svgrepo.com/show/376331/kubernetes.svg'
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'OpenApi 3 Documentation using SpringDoc2',
    excerpt: 'Springdoc OpenAPI automates the generation of API documentation using OpenAPI 3, making it easier to maintain and update.',
    publishedAt: '2025-02-20',
    readTime: '7 min read',
    url: 'https://medium.com/@avabhyankar22/openapi-3-documentation-using-springdoc2-9052672d44ff?source=rss-d11d0b185e5a------2',
    platform: 'medium'
  },
  {
    id: '2',
    title: 'Crafting Reactive REST APIs with WebFlux and Coroutines',
    excerpt: 'Learn how to build high-concurrency, low-latency web applications using reactive programming and Kotlin coroutines.',
    publishedAt: '2023-12-29',
    readTime: '8 min read',
    url: 'https://medium.com/@avabhyankar22/crafting-reactive-rest-apis-with-webflux-and-coroutines-a0aed5b63cb0?source=rss-d11d0b185e5a------2',
    platform: 'medium'
  },
  {
    id: '3',
    title: 'Deploying a Spring Boot App as a Docker Image on GCP using Kubernetes',
    excerpt: 'Step-by-step guide to deploying a Spring Boot app as a Docker image on GCP using Kubernetes.',
    publishedAt: '2023-02-19',
    readTime: '9 min read',
    url: 'https://medium.com/@avabhyankar22/deploying-a-spring-boot-app-as-a-docker-image-on-gcp-using-kubernetes-d2de68fe3dda?source=rss-d11d0b185e5a------2',
    platform: 'medium'
  },
  {
    id: '4',
    title: 'Using Colima to Run Docker and Kubernetes Locally on a Mac',
    excerpt: 'Colima helps developers run Docker and Kubernetes locally on macOS without licensing restrictions.',
    publishedAt: '2023-01-06',
    readTime: '6 min read',
    url: 'https://medium.com/@avabhyankar22/using-colima-to-run-docker-and-kubernetes-locally-on-a-mac-5d8e0a13e1f?source=rss-d11d0b185e5a------2',
    platform: 'medium'
  },
  {
    id: '5',
    title: 'Drag & Drop: An android animated interaction',
    excerpt: 'Explaining step-by-step implementation of drag and drop cart interaction on RecyclerView with animations.',
    publishedAt: '2019-11-27',
    readTime: '5 min read',
    url: 'https://medium.com/@avabhyankar22/drag-drop-an-android-animated-interaction-8c39939bc726?source=rss-d11d0b185e5a------2',
    platform: 'medium'
  }
]


export const workExperience: WorkExperience[] = [
  {
    id: '1',
    title: 'Founding Engineer',
    company: 'Arthasharu Innovations',
    duration: 'Oct 2024 – Present',
    description: [
      'Developed full-stack PoC (Angular + Spring Boot + Android) tested with 500+ active users',
      'Designed and built microservices architecture with Spring Boot and Kotlin',
      'Set coding standards and critical architectural decisions',
      'Led initial team formation and technical interviews',
      'Migrated Business Rules Engine to AWS, achieving 99.5% availability',
      'Implemented observability with Grafana and Prometheus',
      'Developed CI/CD pipelines reducing 40% deployment errors'
    ],
    technologies: ['Spring Boot', 'Kotlin', 'Angular', 'Android', 'AWS', 'Prometheus', 'Grafana', 'CI/CD']
  },
  {
    id: '2',
    title: 'Lead Software Architect',
    company: 'Bajaj Finserv',
    duration: 'May 2023 – Oct 2024',
    description: [
      'Architected scalable backend systems with Spring Boot and microservices',
      'Led architecture reviews, RFCs, ADRs, and deployments with CI/CD',
      'Improved system scalability and maintainability across services'
    ],
    technologies: ['Spring Boot', 'Microservices', 'CI/CD', 'Java', 'Kubernetes']
  },
  {
    id: '3',
    title: 'Senior Fullstack Engineer',
    company: 'Gojek',
    duration: 'Mar 2021 – Apr 2023',
    description: [
      'Led development for GoBiz platform delivering business tools for GoFood and GoPay',
      'Implemented TDD reducing regression by 40%',
      'Built push notification system with scheduling and templates',
      'Designed GoFin Repayment Service for configurable repayment schedules'
    ],
    technologies: ['Java', 'Spring Boot', 'Kubernetes', 'CI/CD', 'Redis']
  },
  {
    id: '4',
    title: 'Senior Android Engineer',
    company: 'Gojek',
    duration: 'Feb 2020 – Mar 2021',
    description: [
      'Developed and delivered KYC module features across financial offerings',
      'Implemented OpenCV-based KYC system within 1 month',
      'Reduced user churn by 8% with faster onboarding'
    ],
    technologies: ['Android', 'Kotlin', 'Java', 'OpenCV']
  },
  {
    id: '5',
    title: 'Senior Software Engineer',
    company: 'Pitney-Bowes',
    duration: 'May 2018 – Dec 2019',
    description: [
      'Built backend APIs for supply portal and machine logging',
      'Developed OAuth SDK reducing integration time by 28%',
      'Created AOSP-based launcher and analytics SDK reducing battery usage by 10%'
    ],
    technologies: ['Spring Boot', 'Android', 'OAuth', 'AOSP']
  },
  {
    id: '6',
    title: 'Senior Software Engineer',
    company: 'Mazkara Internet',
    duration: 'Jun 2017 – May 2018',
    description: [
      'Implemented GitLab CI/CD for Android builds',
      'Streamlined coding standards for EatRepeat and Slurrp apps',
      'Managed monorepo and optimized build deployment'
    ],
    technologies: ['Android', 'GitLab CI/CD', 'Clean Architecture']
  },
  {
    id: '7',
    title: 'Freelance Android Developer',
    company: 'DC Media, Dubai',
    duration: 'Aug 2016 – Dec 2017',
    description: [
      'Developed coupon application CouponCodesME',
      'Built TicketsToDo travel and event booking app'
    ],
    technologies: ['Android', 'Kotlin', 'Java']
  },
  {
    id: '8',
    title: 'Software Engineer',
    company: 'PharmEasy',
    duration: 'Jun 2016 – Aug 2016',
    description: [
      'Developed PharmEasy Logistics app with real-time tracking via HyperTrack API',
      'Maintained and enhanced PharmEasy Consumer app'
    ],
    technologies: ['Android', 'Java', 'HyperTrack API']
  },
  {
    id: '9',
    title: 'Software Engineer',
    company: 'Rediff.com',
    duration: 'Aug 2014 – Jun 2016',
    description: [
      'Developed RediffEdge and Merchant Center apps',
      'Contributed to RediffMail NG 2.0 Android mail client'
    ],
    technologies: ['Android', 'Java']
  }
];


export const contactInfo: ContactInfo[] = [
  { icon: FiMail, label: 'Email', value: 'adwabh@gmail.com' },
  { icon: FiPhone, label: 'Phone', value: '+91 9167385309' },
  { icon: FiMapPin, label: 'Location', value: 'Pune, MH' }
];

export const socialLinks: SocialLink[] = [
  { icon: FiLinkedin, href: 'https://linkedin.com/in/adwaitabhyankar', label: 'LinkedIn' },
  { icon: FiGithub, href: 'https://github.com/adwabh', label: 'GitHub' },
  { icon: SiMedium, href: 'https://medium.com/@avabhyankar22', label: 'Medium' },
  { icon: SiDevdotto, href: 'https://dev.to/adwabh', label: 'Dev.to' }
];

export const designations = [
  'Engineering Leader',
  'Backend Developer',
  'Android Developer',
  'Technical Architect'
];

export const resumeLink = 'https://drive.google.com/uc?export=download&id=1CXbE4YVapPrA5SbCnsAtDKpmp8Gz2I8Q';

export const skills = [
  { category: 'Languages', items: ['Java', 'Kotlin', 'JavaScript', 'TypeScript', 'Python', 'Go'] },
  { category: 'Backend', items: ['Spring Boot', 'Node.js', 'Express', 'Microservices', 'REST APIs', 'GraphQL'] },
  { category: 'Mobile', items: ['Android', 'Jetpack Compose', 'Room', 'Retrofit', 'MVVM', 'Coroutines'] },
  { category: 'Database', items: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Elasticsearch'] },
  { category: 'DevOps', items: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Jenkins', 'Prometheus'] },
  { category: 'Leadership', items: ['Team Management', 'Mentoring', 'Agile', 'Code Review', 'Architecture Design'] }
];