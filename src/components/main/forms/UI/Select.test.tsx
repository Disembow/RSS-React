import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { TOption } from '../../../../types/props-types';
import Select from './Select';

const mockOptions: TOption = {
  value: ['test', 'banana', 'Mario', 'Yoshi'],
  id: 'test-id',
  'data-testid': 'test-id',
  className: 'light-block',
};

const MockSelect = (
  <Select
    value={mockOptions.value}
    className={mockOptions.className}
    id={mockOptions.id}
    data-testid={mockOptions['data-testid']}
  />
);

test('It renders select with props', () => {
  render(MockSelect);

  const testSelect = screen.getByTestId('test-id');
  expect(testSelect).toBeInTheDocument();
  expect(testSelect).toHaveClass('light-block');
  expect(testSelect).toHaveValue(mockOptions.value[0]);
});

test('It renders custom select with 4 options', () => {
  render(MockSelect);

  const testSelect = screen.getByTestId('test-id');
  expect(testSelect.children).to.have.length(mockOptions.value.length);
});

test('User changes options', () => {
  render(MockSelect);

  const testSelect = screen.getByTestId('test-id');
  fireEvent.change(testSelect, { target: { value: mockOptions.value[1] } });
  expect(testSelect).toHaveValue(mockOptions.value[1]);

  fireEvent.change(testSelect, { target: { value: mockOptions.value[mockOptions.value.length] } });
  expect(testSelect).toHaveValue(mockOptions.value[mockOptions.value.length]);
});
