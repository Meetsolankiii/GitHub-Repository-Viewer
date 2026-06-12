/**
 * Calculates a custom quality score for a repository and sorts the list.
 * Formula: (Stars * 0.5) + (Forks * 0.4) - (Open Issues * 0.1) + RecencyBonus
 */
export const rankRepositories = (repositories) => {
  return repositories
    .map((repo) => {
      const stars = repo.stargazers_count || 0;
      const forks = repo.forks_count || 0;
      const openIssues = repo.open_issues_count || 0;
      
      // Calculate a bonus for recently updated repos (last 30 days)
      const lastUpdate = new Date(repo.updated_at);
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
      const recencyBonus = lastUpdate > thirtyDaysAgo ? 50 : 0;

      // Custom Weighted Score Equation
      const customScore = Math.round(
        stars * 0.5 + forks * 0.4 - openIssues * 0.1 + recencyBonus
      );

      return {
        ...repo,
        customScore: customScore < 0 ? 0 : customScore, // Prevent negative scores
      };
    })
    .sort((a, b) => b.customScore - a.customScore); // Sort Highest Score First
};