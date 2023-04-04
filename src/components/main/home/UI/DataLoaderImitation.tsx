import React from 'react';

export default function DataLoaderImitation() {
  return (
    <div className="container">
      <h3 className="progress-bar__message">Loading, please wait.</h3>
      <div className="progress-bar">
        <div className="shadow"></div>
      </div>
    </div>
  );
}
