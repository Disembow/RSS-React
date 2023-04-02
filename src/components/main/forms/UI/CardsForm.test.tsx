import React from 'react';
import { render, screen } from '@testing-library/react';
import CardsForm from './CardsForm';
import { TForm } from '../Form';

const logo = [
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAQAAAAnOwc2AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA82lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjardA/SgNBHMXx70TULloE67mAgmu15eQPi2ARYopsqkxmBw1hd4fZn3/2Bh7B43iDFIIXUVJbqARLwU/1eM2DB+rZDPujzjGUlcRsYvJZPteHGw7YAwDrmmDG4yuAqq48vynYvqEAXk/NsD/ib/ZdiAK8AEnhGwd8AKsHCQJqAfSW6yCgBOitp5MBqCegK/5RAAZ1aOPq5lb0eZqm2hT10uvrthFfNvqycnUMdbTiC+B7A+Aoi7bVmS1Lq5OzhH83y+f6K71PUYA62ey6HXcX73/+7FzAJ0sbODDOTdGSAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAACRSURBVHjaBMFdS4NgGADQ89Kjk5z0QXWxDeq26D/2Q+siRjQMa0xNpm3VOekpCZlcJjn6MTmEzMxc5VSY9FpDyFRuLF3J9WobTShcuHXvTunTM8ZQOLfy4NFcLdlqwomZyrWFM8mlUh5+Hez1On86g9ExTDq1F0mp8arxHUZba8mHws67jS6MWgzehL3Wl/5/AGY7NAWQ1C5yAAAAAElFTkSuQmCC',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAQAAAAnOwc2AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA82lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjardA/SgNBHMXx70TULloE67mAgmu15eQPi2ARYopsqkxmBw1hd4fZn3/2Bh7B43iDFIIXUVJbqARLwU/1eM2DB+rZDPujzjGUlcRsYvJZPteHGw7YAwDrmmDG4yuAqq48vynYvqEAXk/NsD/ib/ZdiAK8AEnhGwd8AKsHCQJqAfSW6yCgBOitp5MBqCegK/5RAAZ1aOPq5lb0eZqm2hT10uvrthFfNvqycnUMdbTiC+B7A+Aoi7bVmS1Lq5OzhH83y+f6K71PUYA62ey6HXcX73/+7FzAJ0sbODDOTdGSAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAACRSURBVHjaBMFdS4NgGADQ89Kjk5z0QXWxDeq26D/2Q+siRjQMa0xNpm3VOekpCZlcJjn6MTmEzMxc5VSY9FpDyFRuLF3J9WobTShcuHXvTunTM8ZQOLfy4NFcLdlqwomZyrWFM8mlUh5+Hez1On86g9ExTDq1F0mp8arxHUZba8mHws67jS6MWgzehL3Wl/5/AGY7NAWQ1C5yAAAAAElFTkSuQmCC',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAQAAAAnOwc2AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA82lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjardA/SgNBHMXx70TULloE67mAgmu15eQPi2ARYopsqkxmBw1hd4fZn3/2Bh7B43iDFIIXUVJbqARLwU/1eM2DB+rZDPujzjGUlcRsYvJZPteHGw7YAwDrmmDG4yuAqq48vynYvqEAXk/NsD/ib/ZdiAK8AEnhGwd8AKsHCQJqAfSW6yCgBOitp5MBqCegK/5RAAZ1aOPq5lb0eZqm2hT10uvrthFfNvqycnUMdbTiC+B7A+Aoi7bVmS1Lq5OzhH83y+f6K71PUYA62ey6HXcX73/+7FzAJ0sbODDOTdGSAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAACRSURBVHjaBMFdS4NgGADQ89Kjk5z0QXWxDeq26D/2Q+siRjQMa0xNpm3VOekpCZlcJjn6MTmEzMxc5VSY9FpDyFRuLF3J9WobTShcuHXvTunTM8ZQOLfy4NFcLdlqwomZyrWFM8mlUh5+Hez1On86g9ExTDq1F0mp8arxHUZba8mHws67jS6MWgzehL3Wl/5/AGY7NAWQ1C5yAAAAAElFTkSuQmCC',
];

const mockCardData: TForm[] = [
  {
    avatar: [],
    checkbox: true,
    deliveryDate: '2023-04-02',
    firstName: 'Jack',
    lastName: 'Crow',
    postProvider: 'DHL',
    radio: '',
  },
  {
    avatar: [],
    checkbox: false,
    deliveryDate: '2023-06-02',
    firstName: 'Dan',
    lastName: 'Kolecky',
    postProvider: 'UPS',
    radio: 'Ms.',
  },
  {
    avatar: [],
    checkbox: false,
    deliveryDate: '2023-09-15',
    firstName: 'Danny',
    lastName: 'Boil',
    postProvider: 'DPD',
    radio: 'Mr.',
  },
];

const number = mockCardData.length;

const MockCard = <CardsForm number={number} logo={logo} data={mockCardData} />;

test('Renders cards title', () => {
  render(MockCard);

  const cardNumber = screen.getByText(`Card #${number}`);
  expect(cardNumber).toBeInTheDocument();
});

test('Renders cards main images', () => {
  render(MockCard);

  const cardImage = screen.getAllByAltText('logo');
  expect(cardImage.every((e) => e instanceof HTMLImageElement)).toBeTruthy();
});

test('Renders different postservices', () => {
  render(MockCard);

  const postProviders = screen.getAllByTestId('post-provider');
  expect(
    postProviders.every((e, i) => e.textContent === mockCardData[i].postProvider)
  ).toBeTruthy();
});

test('Renders truthy fullnames with individual person addresses', () => {
  render(MockCard);

  const fullNames = screen.getAllByTestId('fullname');
  expect(
    fullNames.every(
      (e, i) =>
        e.textContent ===
        `${mockCardData[i].radio} ${mockCardData[i].firstName} ${mockCardData[i].lastName}`
    )
  ).toBeTruthy();
});

test('Renders correct delivery date', () => {
  render(MockCard);

  const deliveryDates = screen.getAllByTestId('delivery-date');
  expect(
    deliveryDates.every((e, i) => e.textContent === mockCardData[i].deliveryDate)
  ).toBeTruthy();
});

test('Renders email notification', () => {
  render(MockCard);

  const deliveryDates: HTMLImageElement[] = screen.getAllByTestId('email-notice');
  expect(
    deliveryDates.every((e, i) => {
      return e.children[0] instanceof HTMLImageElement;
    })
  ).toBeTruthy();
});
