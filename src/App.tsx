import React from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.scss';
import Footer from './components/footer/Footer';
import router from './components/layouts/Router';

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
