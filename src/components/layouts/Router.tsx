import React from 'react';
import { createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom';
import Home from '../main/home/Home';
import FormPage from '../main/forms/FormPage';
import Page404 from '../main/page404/Page404';
import RootLayout from './RootLayout';
import About from '../main/about/About';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />}></Route>
      <Route path="about" element={<About />}></Route>
      <Route path="forms" element={<FormPage />}></Route>
      <Route path="*" element={<Page404 />}></Route>
    </Route>
  )
);

export default router;
