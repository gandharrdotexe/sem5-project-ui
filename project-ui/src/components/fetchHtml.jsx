// src/components/FetchHTML.js

import React, { useState } from 'react';

const FetchHTML = () => {
  const [url, setUrl] = useState('');
  const [htmlContent, setHtmlContent] = useState('');

  const handleFetchHTML = async () => {
    try {
      // Call the backend API you just created
      const response = await fetch(`http://localhost:5000/fetch-html?url=${encodeURIComponent(url)}`);
      const html = await response.text();
      setHtmlContent(html);
    } catch (error) {
      console.error('Error fetching HTML:', error);
      setHtmlContent('Failed to fetch HTML content');
    }
  };
  

  return (
    <div className="fetch-html">
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter website URL"
        className="input-url"
      />
      <button onClick={handleFetchHTML} className="btn-fetch">Fetch HTML</button>

      <textarea
        className="html-display"
        value={htmlContent}
        readOnly
        placeholder="HTML content will be displayed here"
      />
    </div>
  );
};

export default FetchHTML;
