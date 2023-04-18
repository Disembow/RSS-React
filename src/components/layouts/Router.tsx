import React from 'react';
import { createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom';
import Main from '../main/Main';
import Title from '../header/Title';
import RootLayout from './RootLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Main />}></Route>
      <Route path="about" element={<Title>{'About'}</Title>}></Route>
      <Route path="*" element={<Title>{'Page not found :('}</Title>}></Route>
    </Route>
  )
);

export default router;
