<<<<<<< HEAD
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
=======
/**
 * Utility service to interact with the GitHub REST API v3
 */

const BASE_URL = 'https://api.github.com';

export const githubApi = {
  /**
   * Searches for repositories using keywords or topic names.
   * @param {string} query - The search terms typed by the user
   * @param {number} perPage - Max results to return per call (default 30)
   * @returns {Promise<Array>} Raw items list from GitHub
   */
  searchRepositories: async (query, perPage = 30) => {
    if (!query || !query.trim()) {
      return [];
    }

    // Safely encode variables to prevent breakages with query spaces
    const sanitizedQuery = encodeURIComponent(query.trim());
    const endpoint = `${BASE_URL}/search/repositories?q=${sanitizedQuery}&per_page=${perPage}`;

    try {
      const response = await fetch(endpoint, {
        method: 'GET',
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          // Optional: Add personal access token if you hit rate limits
          // 'Authorization': `token YOUR_GITHUB_PERSONAL_ACCESS_TOKEN`
        }
      });

      // Handle structural error codes explicitly
      if (!response.ok) {
        if (response.status === 403) {
          throw new Error('GitHub API secondary rate limit reached. Please wait a moment.');
        }
        if (response.status === 422) {
          throw new Error('Invalid search criteria or empty query syntax.');
        }
        throw new Error(`GitHub API error: Status ${response.status}`);
      }

      const data = await response.json();
      return data.items || [];
      
    } catch (error) {
      console.error('Error fetching data from GitHub:', error.message);
      throw error; 
    }
>>>>>>> e85541e (add new feature like top ranker)
  }
};