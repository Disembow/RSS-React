import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './main.scss';

export const root: HTMLDivElement | null = document.querySelector('#root');
if (root)
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
