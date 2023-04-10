import React from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.scss';
import router from './components/layouts/Router';

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
