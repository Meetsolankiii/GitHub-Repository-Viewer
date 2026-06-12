import React from 'react';
import RepoCard from './RepoCard';

const RepoList = ({ repos }) => {
  return (
    <div className="repo-list-container">
      <div className="list-meta">
        Showing top {repos.length} matches optimized by Quality Score.
      </div>
      <div className="repo-grid">
        {repos.map((repo, index) => (
          <RepoCard key={repo.id} repo={repo} rank={index + 1} />
        ))}
      </div>
    </div>
  );
};

export default RepoList;