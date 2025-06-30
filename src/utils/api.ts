import axios from 'axios';
import { Project, GitHubProfile } from '../types';

const API_BASE = import.meta.env.PROD ? 'https://real-time-portfolio-1.onrender.com' : 'http://localhost:3003';

export const api = axios.create({
  baseURL: API_BASE,
});

export const fetchProjects = async (): Promise<Project[]> => {
  const response = await api.get('/api/projects');
  return response.data;
};

export const fetchProfile = async (): Promise<GitHubProfile> => {
  const response = await api.get('/api/profile');
  return response.data;
};