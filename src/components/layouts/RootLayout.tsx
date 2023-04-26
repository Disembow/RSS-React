import React from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Router from './Router';

export default function RootLayout() {
  return (
    <>
      <Header />
      <Router />
      <Footer />
    </>
  );
}
