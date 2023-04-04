import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <nav className="navigation">
        <NavLink to="/" className={'navigation__item'}>
          Home
        </NavLink>
        <NavLink to="forms" className={'navigation__item'}>
          Forms
        </NavLink>
        <NavLink to="about" className={'navigation__item'}>
          About Us
        </NavLink>
      </nav>
    </header>
  );
}
