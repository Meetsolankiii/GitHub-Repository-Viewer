import React from 'react';
import RepoCard from './RepoCard';

const RepoList = ({ repos, username }) => {
  if (repos.length === 0) {
    return (
      <div className="empty-state">
        <p>No repositories found.</p>
      </div>
    );
  }

  return (
    <div className="repo-list-container">
      <h2 className="repo-list-heading">
        {username}'s Repositories <span className="count-badge">{repos.length}</span>
      </h2>
      <div className="repo-grid">
        {repos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
};

export default RepoList;