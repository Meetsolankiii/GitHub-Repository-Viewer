import React from 'react';
import RepoCard from './RepoCard';

<<<<<<< HEAD
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
=======
const RepoList = ({ repos }) => {
  return (
    <div className="repo-list-container">
      <div className="list-meta">
        Showing top {repos.length} matches optimized by Quality Score.
      </div>
      <div className="repo-grid">
        {repos.map((repo, index) => (
          <RepoCard key={repo.id} repo={repo} rank={index + 1} />
>>>>>>> e85541e (add new feature like top ranker)
        ))}
      </div>
    </div>
  );
};

export default RepoList;