import express from 'express';
import cors from 'cors';
import axios from 'axios';
import NodeCache from 'node-cache';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3003; // Changed to port 3003 to avoid conflicts
const cache = new NodeCache({ stdTTL: 600 }); // Cache for 10 minutes

// Middleware
app.use(cors());
app.use(express.json());

// GitHub API configuration
const GITHUB_USERNAME = 'Bilalishaquee';
const GITHUB_API_BASE = 'https://api.github.com';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

// Routes
app.get('/api/projects', async (req, res) => {
  try {
    const cacheKey = 'github-repos';
    const cachedData = cache.get(cacheKey);
    
    if (cachedData) {
      return res.json(cachedData);
    }

    console.log('GitHub Token:', GITHUB_TOKEN ? 'Token exists' : 'No token');
    console.log('Making GitHub API request to:', `${GITHUB_API_BASE}/users/${GITHUB_USERNAME}/repos`);
    
    const response = await axios.get(`${GITHUB_API_BASE}/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=12`, {
      headers: {
        Authorization: GITHUB_TOKEN ? `Bearer ${GITHUB_TOKEN}` : ''
      }
    });
    const repos = response.data;

    // Filter and format repositories
    const projects = repos
      .filter(repo => !repo.fork && repo.name !== GITHUB_USERNAME)
      .map(repo => ({
        id: repo.id,
        name: repo.name,
        description: repo.description || 'No description available',
        html_url: repo.html_url,
        homepage: repo.homepage,
        stargazers_count: repo.stargazers_count,
        forks_count: repo.forks_count,
        language: repo.language,
        created_at: repo.created_at,
        updated_at: repo.updated_at,
        topics: repo.topics || []
      }));

    cache.set(cacheKey, projects);
    res.json(projects);
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    res.status(500).json({ error: 'Failed to fetch repositories' });
  }
});

app.get('/api/profile', async (req, res) => {
  try {
    const cacheKey = 'github-profile';
    const cachedData = cache.get(cacheKey);
    
    if (cachedData) {
      return res.json(cachedData);
    }

    const response = await axios.get(`${GITHUB_API_BASE}/users/${GITHUB_USERNAME}`, {
      headers: {
        Authorization: GITHUB_TOKEN ? `Bearer ${GITHUB_TOKEN}` : ''
      }
    });
    const profile = {
      name: response.data.name,
      bio: response.data.bio,
      avatar_url: response.data.avatar_url,
      html_url: response.data.html_url,
      public_repos: response.data.public_repos,
      followers: response.data.followers,
      following: response.data.following,
      location: response.data.location,
      company: response.data.company
    };

    cache.set(cacheKey, profile);
    res.json(profile);
  } catch (error) {
    console.error('Error fetching GitHub profile:', error);
    res.status(500).json({ error: 'Failed to fetch profile' });
  }
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port} and listening on all interfaces`);
});