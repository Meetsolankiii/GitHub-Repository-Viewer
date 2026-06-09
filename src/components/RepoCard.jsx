import React from 'react';
import { formatRelativeTime } from '../utils/formatDate';

const RepoCard = ({ repo }) => {
  return (
    <div className="repo-card">
      <div className="repo-card-header">
        <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="repo-name">
          {repo.name}
        </a>
        {repo.private ? (
          <span className="badge">Private</span>
        ) : (
          <span className="badge">Public</span>
        )}
      </div>
      
      <p className="repo-description">
        {repo.description || 'No description provided for this repository.'}
      </p>
      
      <div className="repo-metadata">
        {repo.language && (
          <div className="meta-item">
            <span className={`language-dot ${repo.language.toLowerCase()}`}></span>
            <span>{repo.language}</span>
          </div>
        )}
        
        <div className="meta-item">
          <svg className="icon-star" viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
            <path fill="currentColor" d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z"></path>
          </svg>
          <span>{repo.stargazers_count.toLocaleString()}</span>
        </div>
        
        <div className="meta-item">
          <span>Updated {formatRelativeTime(repo.updated_at)}</span>
        </div>
      </div>
    </div>
  );
};

export default RepoCard;