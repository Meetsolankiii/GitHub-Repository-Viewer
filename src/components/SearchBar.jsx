import React, { useState } from 'react';

const SearchBar = ({ onSearch, isLoading }) => {
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
  );
};

export default SearchBar;