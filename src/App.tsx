import React from 'react';
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import './App.css';

// Components
import Title from './components/Title';
import Footer from './components/Footer';
import RootLayout from './components/layouts/RootLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Title>{'Home page'}</Title>}></Route>
      <Route path="about" element={<Title>{'About'}</Title>}></Route>
      <Route path="*" element={<Title>{'Page not found'}</Title>}></Route>
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
