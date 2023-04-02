import React from 'react';
import { createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom';
import Home from '../main/home/Home';
import FormPage from '../main/forms/FormPage';
import Title from '../header/Title';
import RootLayout from './RootLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />}></Route>
      <Route path="about" element={<Title>{'About'}</Title>}></Route>
      <Route path="forms" element={<FormPage />}></Route>
      <Route path="*" element={<Title>{'Page not found :('}</Title>}></Route>
    </Route>
  )
);

export default router;
