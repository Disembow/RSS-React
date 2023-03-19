import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function RootLayout() {
  return (
    <div className="root__layout">
      <header>
        <nav className="navigation">
          <NavLink to="/" className={'navigation__item'}>
            Home
          </NavLink>
          <NavLink to="about" className={'navigation__item'}>
            About Us
          </NavLink>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}
