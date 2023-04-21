import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Home from '../main/home/Home';
import About from '../main/about/About';
import FormPage from '../main/forms/FormPage';
import Page404 from '../main/page404/Page404';

export default function RootLayout() {
  return (
    <>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="forms" element={<FormPage />}></Route>
          <Route path="*" element={<Page404 />}></Route>
        </Routes>
      </main>
      <Footer />
    </>
  );
}
