import React from 'react';

const ErrorMessage = ({ message }) => {
  return (
    <div className="error-container">
      <svg className="error-icon" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">
        <path fill="currentColor" d="M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.03 11.3a1.75 1.75 0 0 1-1.543 2.573H1.97A1.75 1.75 0 0 1 .427 12.34l6.03-11.3ZM8 4a.75.75 0 0 0-.75.75v3.5a.75.75 0 0 0 1.5 0v-3.5A.75.75 0 0 0 8 4Zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path>
      </svg>
      <p className="error-message">{message}</p>
    </div>
  );
};

export default ErrorMessage;