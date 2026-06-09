import axios from 'axios';

const GITHUB_BASE_URL = 'https://api.github.com';

export const fetchUserRepos = async (username) => {
  try {
    const response = await axios.get(`${GITHUB_BASE_URL}/users/${username}/repos`, {
      params: {
        per_page: 100, // Fetch up to 100 repositories
      },
    });
    
    // Sort repositories by star count descending automatically
    const sortedRepos = response.data.sort((a, b) => b.stargazers_count - a.stargazers_count);
    return sortedRepos;
  } catch (error) {
    if (error.response) {
      if (error.response.status === 404) {
        throw new Error('User not found. Please check the username and try again.');
      }
      if (error.response.status === 403) {
        throw new Error('GitHub API rate limit exceeded. Please try again later.');
      }
    }
    throw new Error(error.message || 'Network error occurred. Please check your connection.');
  }
};