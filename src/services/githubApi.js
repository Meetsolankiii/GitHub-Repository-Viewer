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

    const sanitizedQuery = encodeURIComponent(query.trim());
    const endpoint = `${BASE_URL}/search/repositories?q=${sanitizedQuery}&per_page=${perPage}`;

    try {
      const response = await fetch(endpoint, {
        method: 'GET',
        headers: {
          'Accept': 'application/vnd.github.v3+json'
        }
      });

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
  }
};