import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';

// Components
import Title from './components/Title';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <header className="header">
          <Routes>
            <Route index element={<Title>{'Home page'}</Title>}></Route>
            <Route path="about" element={<Title>{'About'}</Title>}></Route>
            <Route path="*" element={<Title>{'Page not found'}</Title>}></Route>
          </Routes>
          <nav className="navigation">
            <NavLink to="/" className={'navigation__item'}>
              Home
            </NavLink>
            <NavLink to="about" className={'navigation__item'}>
              About Us
            </NavLink>
          </nav>
        </header>
        <main className="main"></main>
      </BrowserRouter>
      <Footer>{'2023'}</Footer>
    </>
  );
}

export default App;
