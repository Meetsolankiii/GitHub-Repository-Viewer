import React, { useState } from 'react';

const SearchBar = ({ onSearch, isLoading }) => {
<<<<<<< HEAD
  const [username, setUsername] = useState('');
  const [validationError, setValidationError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedUsername = username.trim();

    if (!trimmedUsername) {
      setValidationError('Username cannot be empty.');
      return;
    }

    setValidationError('');
    onSearch(trimmedUsername);
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          placeholder="Search GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={`search-input ${validationError ? 'input-error' : ''}`}
          disabled={isLoading}
        />
        <button type="submit" className="search-button" disabled={isLoading}>
          {isLoading ? 'Searching...' : 'Search'}
        </button>
      </form>
      {validationError && <p className="validation-message">{validationError}</p>}
    </div>
=======
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(input);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="e.g., react-native, e-commerce backend, dsa-roadmaps..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        disabled={isLoading}
      />
      <button type="submit" disabled={isLoading || !input.trim()}>
        {isLoading ? 'Searching...' : 'Analyze'}
      </button>
    </form>
>>>>>>> e85541e (add new feature like top ranker)
  );
};

export default SearchBar;