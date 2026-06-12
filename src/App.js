import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import RepoList from './components/RepoList';
import Loader from './components/Loader';
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
      const rawItems = await githubApi.searchRepositories(query);
      const rankedData = rankRepositories(rawItems);
      setRepositories(rankedData);
    } catch (err) {
      setError(err.message);
      setRepositories([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
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
        )}
      </main>
    </div>
  );
}

export default App;