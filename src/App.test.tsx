import React from 'react';
import { MemoryRouter } from 'react-router';
import { Routes, Route } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import App from './App';
import Home from './components/main/home/Home';
import Title from './components/header/Title';
import Forms from './components/main/forms/Forms';

describe('App', () => {
  it('Renders Home page', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Home page');
  });
});

test('Renders Page not found if user enter wrong path', () => {
  const badRoute = '/wrong/way/link';
  render(
    <MemoryRouter initialEntries={[badRoute]}>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="about" element={<Title>{'About'}</Title>}></Route>
        <Route path="forms" element={<Forms />}></Route>
        <Route path="*" element={<Title>{'Page not found :('}</Title>}></Route>
      </Routes>
    </MemoryRouter>
  );
  expect(
    screen.getByRole('heading', {
      level: 1,
    })
  ).toHaveTextContent('Page not found :(');
});

test('Renders Page not found if user enter wrong path', () => {
  render(
    <MemoryRouter initialEntries={['/about']}>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="about" element={<Title>{'About'}</Title>}></Route>
        <Route path="forms" element={<Forms />}></Route>
        <Route path="*" element={<Title>{'Page not found :('}</Title>}></Route>
      </Routes>
    </MemoryRouter>
  );
  expect(
    screen.getByRole('heading', {
      level: 1,
    })
  ).toHaveTextContent('About');
});

test('Renders Page not found if user enter wrong path', () => {
  render(
    <MemoryRouter initialEntries={['/forms']}>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="about" element={<Title>{'About'}</Title>}></Route>
        <Route path="forms" element={<Forms />}></Route>
        <Route path="*" element={<Title>{'Page not found :('}</Title>}></Route>
      </Routes>
    </MemoryRouter>
  );
  expect(
    screen.getByRole('heading', {
      level: 1,
    })
  ).toHaveTextContent('Forms page');
});
