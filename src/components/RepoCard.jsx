import React from 'react';

const RepoCard = ({ repo, rank }) => {
  // Format long descriptions safely
  const truncateText = (text, maxLength) => {
    if (!text) return 'No description provided.';
    return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
  };

  return (
    <div className={`repo-card ${rank === 1 ? 'top-ranked' : ''}`}>
      {rank === 1 && <span className="badge-premium">🏆 Best Match</span>}
      
      <div className="card-header">
        <span className="rank-number">#{rank}</span>
        <img src={repo.owner?.avatar_url} alt={repo.owner?.login} className="owner-avatar" />
        <div className="title-section">
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="repo-name">
            {repo.name}
          </a>
          <span className="owner-name">by {repo.owner?.login}</span>
        </div>
      </div>

      <p className="repo-description">{truncateText(repo.description, 140)}</p>

      <div className="repo-tags">
        {repo.language && <span className="language-tag">{repo.language}</span>}
      </div>

      <div className="card-metrics">
        <div className="metric">⭐ <span>{repo.stargazers_count?.toLocaleString()}</span></div>
        <div className="metric">🍴 <span>{repo.forks_count?.toLocaleString()}</span></div>
        <div className="metric">🐛 <span>{repo.open_issues_count}</span></div>
      </div>

      <div className="score-footer">
        <span className="score-label">Custom Quality Score:</span>
        <span className="score-value">{repo.customScore} pts</span>
      </div>
    </div>
  );
};

export default RepoCard;