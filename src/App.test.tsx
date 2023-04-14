import React from 'react';
import { MemoryRouter } from 'react-router';
import { Routes, Route } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { TestRoutes } from './types/enums';
import App from './App';
import Home from './components/main/home/Home';
import Title from './components/header/Title';
import Forms from './components/main/forms/FormPage';
import { Provider } from 'react-redux';
import store from './app/store';

describe('App', () => {
  it('Renders Home page', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Home page');
  });
});

test('Renders Page not found if user enter wrong path', () => {
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[TestRoutes.NotFound]}>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="about" element={<Title>{'About'}</Title>}></Route>
          <Route path="forms" element={<Forms />}></Route>
          <Route path="*" element={<Title>{'Page not found :('}</Title>}></Route>
        </Routes>
      </MemoryRouter>
    </Provider>
  );
  expect(
    screen.getByRole('heading', {
      level: 1,
    })
  ).toHaveTextContent('Page not found :(');
});

test('Renders About page if user enter about path', () => {
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[TestRoutes.About]}>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="about" element={<Title>{'About'}</Title>}></Route>
          <Route path="forms" element={<Forms />}></Route>
          <Route path="*" element={<Title>{'Page not found :('}</Title>}></Route>
        </Routes>
      </MemoryRouter>
    </Provider>
  );
  expect(
    screen.getByRole('heading', {
      level: 1,
    })
  ).toHaveTextContent('About');
});

test('Renders Forms page if user enter forms page path', () => {
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[TestRoutes.Forms]}>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="about" element={<Title>{'About'}</Title>}></Route>
          <Route path="forms" element={<Forms />}></Route>
          <Route path="*" element={<Title>{'Page not found :('}</Title>}></Route>
        </Routes>
      </MemoryRouter>
    </Provider>
  );
  expect(
    screen.getByRole('heading', {
      level: 1,
    })
  ).toHaveTextContent('Forms page');
});
