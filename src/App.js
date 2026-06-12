import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import RepoList from './components/RepoList';
import Loader from './components/Loader';
<<<<<<< HEAD
import ErrorMessage from './components/ErrorMessage';
import { fetchUserRepos } from './services/githubApi';
import './App.css';

function App() {
  const [repos, setRepos] = useState(null);
  const [currentUsername, setCurrentUsername] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (username) => {
    setIsLoading(true);
    setError(null);
    setRepos(null);
    setCurrentUsername(username);

    try {
      const data = await fetchUserRepos(username);
      setRepos(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
=======
import { rankRepositories } from './utils/ranker';
import { githubApi } from './services/githubApi';
import './App.css';

function App() {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (query) => {
    if (!query.trim()) return;

    setLoading(true);
    setError(null);
    setHasSearched(true);

    try {
      // Fetching from public GitHub API endpoint
      const response = await fetch(
        `https://api.github.com/search/repositories?q=${encodeURIComponent(query)}`
      );

      if (!response.ok) {
        if (response.status === 403) {
          throw new Error("GitHub API rate limit reached. Please try again in a minute.");
        }
        throw new Error("Something went wrong while fetching data.");
      }

      const data = await response.json();
      
      // Apply our ranking logic to the raw items array
      const rankedData = rankRepositories(data.items || []);
      setRepositories(rankedData);
    } catch (err) {
      setError(err.message);
      setRepositories([]);
    } finally {
      setLoading(false);
>>>>>>> e85541e (add new feature like top ranker)
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
<<<<<<< HEAD
        <svg className="github-logo" viewBox="0 0 16 16" width="32" height="32" aria-hidden="true">
          <path fill="currentColor" d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82A7.933 7.933 0 0 0 8 4.66c-.68.01-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
        </svg>
        <h1>GitHub Repository Viewer</h1>
      </header>

      <main className="app-content">
        <SearchBar onSearch={handleSearch} isLoading={isLoading} />

        {isLoading && <Loader />}
        
        {error && <ErrorMessage message={error} />}
        
        {repos !== null && !isLoading && !error && (
          <RepoList repos={repos} username={currentUsername} />
=======
        <h1>GitHub Repo Analyzer & Ranker</h1>
        <p>Search any topic to find the highest-quality repositories ranked by an advanced performance score.</p>
      </header>

      <main>
        <SearchBar onSearch={handleSearch} isLoading={loading} />

        {loading && <Loader />}

        {error && <div className="error-message">⚠️ {error}</div>}

        {!loading && !error && repositories.length > 0 && (
          <RepoList repos={repositories} />
        )}

        {!loading && !error && hasSearched && repositories.length === 0 && (
          <div className="empty-state">No repositories found matching that query.</div>
        )}
        
        {!hasSearched && !loading && (
          <div className="welcome-state">Type a keyword or tech stack above to start exploring!</div>
>>>>>>> e85541e (add new feature like top ranker)
        )}
      </main>
    </div>
  );
}

export default App;