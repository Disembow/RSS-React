import React from 'react';
import { render, screen } from '@testing-library/react';
import CardsForm from './CardsForm';
import { TFormCard } from '../../../../types/props-types';
import CreateSumbitMessage from './SubmitMessage';
import checkmarkTrue from '../../../assets/checkbox-checked.svg';
import checkmarkFalse from '../../../assets/checkbox.svg';

const mockCardData: TFormCard = {
  number: 3,
  logo: [
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAQAAAAnOwc2AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA82lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjardA/SgNBHMXx70TULloE67mAgmu15eQPi2ARYopsqkxmBw1hd4fZn3/2Bh7B43iDFIIXUVJbqARLwU/1eM2DB+rZDPujzjGUlcRsYvJZPteHGw7YAwDrmmDG4yuAqq48vynYvqEAXk/NsD/ib/ZdiAK8AEnhGwd8AKsHCQJqAfSW6yCgBOitp5MBqCegK/5RAAZ1aOPq5lb0eZqm2hT10uvrthFfNvqycnUMdbTiC+B7A+Aoi7bVmS1Lq5OzhH83y+f6K71PUYA62ey6HXcX73/+7FzAJ0sbODDOTdGSAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAACRSURBVHjaBMFdS4NgGADQ89Kjk5z0QXWxDeq26D/2Q+siRjQMa0xNpm3VOekpCZlcJjn6MTmEzMxc5VSY9FpDyFRuLF3J9WobTShcuHXvTunTM8ZQOLfy4NFcLdlqwomZyrWFM8mlUh5+Hez1On86g9ExTDq1F0mp8arxHUZba8mHws67jS6MWgzehL3Wl/5/AGY7NAWQ1C5yAAAAAElFTkSuQmCC',
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAQAAAAnOwc2AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA82lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjardA/SgNBHMXx70TULloE67mAgmu15eQPi2ARYopsqkxmBw1hd4fZn3/2Bh7B43iDFIIXUVJbqARLwU/1eM2DB+rZDPujzjGUlcRsYvJZPteHGw7YAwDrmmDG4yuAqq48vynYvqEAXk/NsD/ib/ZdiAK8AEnhGwd8AKsHCQJqAfSW6yCgBOitp5MBqCegK/5RAAZ1aOPq5lb0eZqm2hT10uvrthFfNvqycnUMdbTiC+B7A+Aoi7bVmS1Lq5OzhH83y+f6K71PUYA62ey6HXcX73/+7FzAJ0sbODDOTdGSAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAACRSURBVHjaBMFdS4NgGADQ89Kjk5z0QXWxDeq26D/2Q+siRjQMa0xNpm3VOekpCZlcJjn6MTmEzMxc5VSY9FpDyFRuLF3J9WobTShcuHXvTunTM8ZQOLfy4NFcLdlqwomZyrWFM8mlUh5+Hez1On86g9ExTDq1F0mp8arxHUZba8mHws67jS6MWgzehL3Wl/5/AGY7NAWQ1C5yAAAAAElFTkSuQmCC',
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAQAAAAnOwc2AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA82lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjardA/SgNBHMXx70TULloE67mAgmu15eQPi2ARYopsqkxmBw1hd4fZn3/2Bh7B43iDFIIXUVJbqARLwU/1eM2DB+rZDPujzjGUlcRsYvJZPteHGw7YAwDrmmDG4yuAqq48vynYvqEAXk/NsD/ib/ZdiAK8AEnhGwd8AKsHCQJqAfSW6yCgBOitp5MBqCegK/5RAAZ1aOPq5lb0eZqm2hT10uvrthFfNvqycnUMdbTiC+B7A+Aoi7bVmS1Lq5OzhH83y+f6K71PUYA62ey6HXcX73/+7FzAJ0sbODDOTdGSAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAACRSURBVHjaBMFdS4NgGADQ89Kjk5z0QXWxDeq26D/2Q+siRjQMa0xNpm3VOekpCZlcJjn6MTmEzMxc5VSY9FpDyFRuLF3J9WobTShcuHXvTunTM8ZQOLfy4NFcLdlqwomZyrWFM8mlUh5+Hez1On86g9ExTDq1F0mp8arxHUZba8mHws67jS6MWgzehL3Wl/5/AGY7NAWQ1C5yAAAAAElFTkSuQmCC',
  ],
  radio: ['Mr,', 'Ms.', ''],
  firstName: ['Jack', 'Kate', 'Nothing'],
  lastName: ['Crow', 'Middleton', 'Special'],
  date: ['2023-04-01', '2023-05-17', '2023-06-01'],
  postService: ['DHL', 'UPS', 'DPD'],
  notification: [
    <img key={1} src={checkmarkFalse} alt="not checked" width="20" />,
    <img key={2} src={checkmarkTrue} alt="checked" width="20" />,
    <img key={3} src={checkmarkFalse} alt="not checked" width="20" />,
  ],
  children: <CreateSumbitMessage />,
};

const MockCard = (
  <CardsForm
    number={mockCardData.number}
    logo={mockCardData.logo}
    radio={mockCardData.radio}
    firstName={mockCardData.firstName}
    lastName={mockCardData.lastName}
    date={mockCardData.date}
    postService={mockCardData.postService}
    notification={mockCardData.notification}
  >
    {<CreateSumbitMessage />}
  </CardsForm>
);

test('Renders cards title', () => {
  render(MockCard);

  const cardNumber = screen.getByText(`Card #${1}`);
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
  expect(postProviders.every((e, i) => e.textContent === mockCardData.postService[i])).toBeTruthy();
});

test('Renders truthy fullnames with individual person addresses', () => {
  render(MockCard);

  const fullNames = screen.getAllByTestId('fullname');
  expect(
    fullNames.every(
      (e, i) =>
        e.textContent ===
        `${mockCardData.radio[i]} ${mockCardData.firstName[i]} ${mockCardData.lastName[i]}`
    )
  ).toBeTruthy();
});

test('Renders correct delivery date', () => {
  render(MockCard);

  const deliveryDates = screen.getAllByTestId('delivery-date');
  expect(deliveryDates.every((e, i) => e.textContent === mockCardData.date[i])).toBeTruthy();
});

test('Renders email notification', () => {
  render(MockCard);

  const deliveryDates: HTMLImageElement[] = screen.getAllByTestId('email-notice');
  expect(
    deliveryDates.every((e, i) => {
      const img = mockCardData.notification[i] as React.DetailedHTMLProps<
        React.ImgHTMLAttributes<HTMLImageElement>,
        HTMLImageElement
      >;
      return e.alt === img.src;
    })
  ).toBeTruthy();
});
