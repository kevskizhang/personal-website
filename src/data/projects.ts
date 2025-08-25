export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  slug: string;
  fullDescription?: string;
  features?: string[];
  technologies?: string[];
  githubUrl?: string;
  liveUrl?: string | null;
}

export const projectsData: Project[] = [
  {
    id: 4,
    title: 'Stackd',
    description: 'A full-stack multiplayer poker application built with Next.js and TypeScript that implements real-time Texas Hold\'em gameplay using WebSocket architecture and event sourcing for authoritative game state management',
    tags: ['Vue.js', 'Express.js', 'PostgreSQL'],
    image: '/images/project-placeholder.jpg',
    slug: 'stackd',
    fullDescription: 'WIP',
    features: [
      'WIP'
    ],
    technologies: [''],
    githubUrl: '#',
    liveUrl: null
  },
  {
    id: 3,
    title: 'ReceiptReviewer',
    description: 'Allows you to input a receipt with a breakdown of items, prices, and people, and calculates the cost per person',
    tags: ['TypeSCript', 'React', 'Vercel'],
    image: '/images/receiptreviewer.png',
    slug: 'Receipt-Reviewer',
    fullDescription: 'WIP',
    features: [
      'WIP'
    ],
    technologies: ['TypeScript', 'React', 'Vercel'],
    githubUrl: '#',
    liveUrl: 'https://receiptreviewer.vercel.app/'
  },
  {
    id: 2,
    title: 'sixsevenamac',
    description: 'the arithmetic drilling game zetamac but every answer is 67',
    tags: ['Vercel', 'HTML'],
    image: '/images/sixsevenamac.png',
    slug: 'sixsevenamac',
    fullDescription: 'WIP',
    features: [
      'WIP'
    ],
    technologies: ['Vercel', 'HTML'],
    githubUrl: '#',
    liveUrl: 'https://sixsevenamac.com'
  },
  {
    id: 1,
    title: 'Agri',
    description: 'A web app that calculates the environmental cost of your grocery list; built for CS 411 Database Systems',
    tags: ['React', 'TypeScript', 'Node.js'],
    image: '/images/agri.png',
    slug: 'agri',
    fullDescription: 'WIP',
    features: [
      'WIP'
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Express.js'],
    githubUrl: '#',
    liveUrl: null
  }
];