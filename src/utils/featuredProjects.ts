import { Project } from '../types';

// Featured projects that will be displayed alongside GitHub projects
export const featuredProjects: Project[] = [
  {
    id: 1001,
    name: 'AI-Powered Content Generator',
    description: 'A sophisticated content generation tool using OpenAI GPT models to create high-quality articles, blog posts, and marketing copy tailored to specific industries.',
    html_url: 'https://github.com/Bilalishaquee/ai-content-generator',
    homepage: 'https://real-time-portfolio.vercel.app/projects/ai-content-generator',
    stargazers_count: 48,
    forks_count: 12,
    language: 'TypeScript',
    created_at: '2023-06-15T10:30:00Z',
    updated_at: '2023-12-20T14:45:00Z',
    topics: ['ai', 'nlp', 'content-generation', 'openai']
  },
  {
    id: 1002,
    name: 'Blockchain Voting System',
    description: 'A secure and transparent voting system built on Ethereum blockchain. Features include voter verification, tamper-proof ballots, and real-time result tabulation.',
    html_url: 'https://github.com/Bilalishaquee/blockchain-voting',
    homepage: 'https://real-time-portfolio.vercel.app/projects/blockchain-voting',
    stargazers_count: 56,
    forks_count: 18,
    language: 'Solidity',
    created_at: '2023-04-10T09:15:00Z',
    updated_at: '2023-11-25T16:30:00Z',
    topics: ['blockchain', 'ethereum', 'smart-contracts', 'voting']
  },
  {
    id: 1003,
    name: 'AI Image Recognition API',
    description: 'A robust API service that uses machine learning to identify objects, scenes, and people in images. Built with TensorFlow and deployed as a scalable microservice.',
    html_url: 'https://github.com/Bilalishaquee/image-recognition-api',
    homepage: 'https://real-time-portfolio.vercel.app/projects/image-recognition-api',
    stargazers_count: 37,
    forks_count: 9,
    language: 'Python',
    created_at: '2023-08-05T11:20:00Z',
    updated_at: '2024-01-15T13:10:00Z',
    topics: ['machine-learning', 'computer-vision', 'tensorflow', 'api']
  },
  {
    id: 1004,
    name: 'NFT Marketplace',
    description: 'A full-featured NFT marketplace allowing artists to mint, sell, and auction digital assets. Includes wallet integration, bidding system, and royalty management.',
    html_url: 'https://github.com/Bilalishaquee/nft-marketplace',
    homepage: 'https://real-time-portfolio.vercel.app/projects/nft-marketplace',
    stargazers_count: 62,
    forks_count: 21,
    language: 'JavaScript',
    created_at: '2023-03-20T08:45:00Z',
    updated_at: '2024-02-10T15:25:00Z',
    topics: ['blockchain', 'nft', 'ethereum', 'web3']
  }
];