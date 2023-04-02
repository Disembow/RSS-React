import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NewForm from './NewForm';

const mockNames = {
  firstName: ['Jack', 'John'],
  lastName: ['Crow', 'Snow'],
};

test('To have number of inputs', () => {
  render(<NewForm />);

  const form = screen.getAllByRole('textbox');
  expect(form).to.have.length(2);
});

test('To have number of inputs', () => {
  render(<NewForm />);

  const form = screen.getAllByRole('textbox');
  const firstNameInput = form[0];
  const lastNameInput = form[1];

  fireEvent.change(firstNameInput, { target: { value: mockNames.firstName[0] } });
  fireEvent.change(lastNameInput, { target: { value: mockNames.lastName[0] } });
});

test('upload file', async () => {
  const file = new File(['hello'], 'hello.png', { type: 'image/png' });
  render(<NewForm />);

  const input = screen.getByTestId('avatar');
  await userEvent.upload(input, file);

  if (input instanceof HTMLInputElement && input.files) {
    expect(input.files[0]).toStrictEqual(file);
    expect(input.files.item(0)).toStrictEqual(file);
    expect(input.files).toHaveLength(1);
  }
});
