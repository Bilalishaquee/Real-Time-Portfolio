export interface Project {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage?: string;
  stargazers_count: number;
  forks_count: number;
  language?: string;
  created_at: string;
  updated_at: string;
  topics: string[];
}

export interface GitHubProfile {
  name: string;
  bio: string;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  followers: number;
  following: number;
  location?: string;
  company?: string;
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
}