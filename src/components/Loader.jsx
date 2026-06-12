import React from 'react';

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="spinner"></div>
      <p>Analyzing GitHub data structures and recalculating ranks...</p>
    </div>
  );
};

export default Loader;