import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../footer/Footer';
import Header from '../header/Header';

export default function RootLayout() {
  return (
    <>
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
