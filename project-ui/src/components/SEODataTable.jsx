import React from 'react';
import '../SEODataTable.css'; // Import the CSS file

// Mapping each key and sub-key to a user-friendly alias
const keyAliases = {
  metaDescription: "Meta Description",
  keywords: "Keywords",
  keywordsInTitleAndDescription: "Keywords in Title and Description",
  titleKeywords: "Title Keywords",
  descriptionKeywords: "Description Keywords",
  linkRatio: "Link Ratio",
  internalLinks: "Internal Links",
  externalLinks: "External Links",
  seoTitle: "SEO Title",
  title: "Title",
  titleLength: "Title Length",
  imageAlt: "Image Alt Attributes",
  imageALT: "Image Alt Text",
  totalImages: "Total Images",
};

// Tooltip descriptions for certain keys
const tooltips = {
  metaDescription: "A brief description of the content of the webpage.",
  keywords: "List of keywords used on the page.",
  keywordsInTitleAndDescription: "Keywords found in both the title and description.",
  linkRatio: "Ratio of internal to external links on the page.",
  seoTitle: "The title of the page used for SEO purposes.",
  imageAlt: "Alt attributes for all images on the page.",
};

// Helper function to capitalize the first letter of each word in the label
const formatLabel = (key) => {
  return keyAliases[key] || key.charAt(0).toUpperCase() + key.slice(1);
};

// Tooltip component
const Tooltip = ({ message }) => (
  <span className="tooltip">
    <sup>?</sup>
    <span className="tooltiptext">{message}</span>
  </span>
);

// Accept SEO data as a prop
const SEODataTable = ({ seoData }) => {
  // Helper function to render nested objects as table rows
  const renderObjectAsTableRows = (object, prefix = '') => {
    return Object.keys(object).map((key) => {
      const value = object[key];
      const formattedKey = formatLabel(key);

      // If the value is an object with sub-keys, render the parent key and sub-keys in separate rows
      if (typeof value === 'object' && !Array.isArray(value)) {
        return (
          <>
            <tr key={prefix + key}>
              <td rowSpan={Object.keys(value).length + 1}>
                {formattedKey}
                {tooltips[key] && <Tooltip message={tooltips[key]} />} {/* Add tooltip */}
              </td>
            </tr>
            {Object.keys(value).map((subKey) => (
              <tr key={prefix + key + '.' + subKey}>
                <td>{formatLabel(subKey)}</td>
                <td>{Array.isArray(value[subKey]) ? value[subKey].join(', ') : value[subKey]}</td>
              </tr>
            ))}
          </>
        );
      }

      // If the key is metaDescription or keywords, merge the right column and center the content
      if (key === 'metaDescription' || key === 'keywords') {
        return (
          <tr key={prefix + key}>
            <td>
              {formattedKey}
              {tooltips[key] && <Tooltip message={tooltips[key]} />} {/* Add tooltip */}
            </td>
            <td colSpan="2" style={{ textAlign: 'center' }}>
              {Array.isArray(value) ? value.join(', ') : value}
            </td>
          </tr>
        );
      }

      // For simple key-value pairs, render normally
      return (
        <tr key={prefix + key}>
          <td>
            {formattedKey}
            {tooltips[key] && <Tooltip message={tooltips[key]} />} {/* Add tooltip */}
          </td>
          <td>{Array.isArray(value) ? value.join(', ') : value}</td>
        </tr>
      );
    });
  };

  // Return the table structure with the SEO data
  return (
    <div className="table-container">
      <h1 className="text-lg font-semibold">SEO Analysis Data</h1>
      <table>
        <thead>
          <tr>
            <th>Basic SEO</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {renderObjectAsTableRows(seoData)}
        </tbody>
      </table>
    </div>
  );
};

export default SEODataTable;
