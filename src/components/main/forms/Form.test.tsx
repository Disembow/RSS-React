import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from './Form';
import { act } from 'react-dom/test-utils';

test('To have number of inputs', () => {
  render(<Form />);

  const form = screen.getAllByRole('textbox');
  expect(form).to.have.length(2);
});

test('To have errors after input wrong names', () => {
  render(<Form />);

  const form = screen.getAllByRole('textbox');
  const firstNameInput = form[0] as HTMLInputElement;
  const lastNameInput = form[1] as HTMLInputElement;

  act(() => {
    fireEvent.change(firstNameInput, { target: { value: 'jack' } });
    fireEvent.change(lastNameInput, { target: { value: 'c' } });
    fireEvent.submit(screen.getByRole('button'));
  });

  expect(screen.queryByText(/Only first character needs to be capitalized/i));
  expect(screen.queryByText(/It needs min 2 characters/i));
});

test('upload file', async () => {
  const file = new File(['hello'], 'hello.png', { type: 'image/png' });
  render(<Form />);

  const input = screen.getByTitle('avatar');
  await userEvent.upload(input, file);

  if (input instanceof HTMLInputElement && input.files) {
    expect(input.files[0]).toStrictEqual(file);
    expect(input.files.item(0)).toStrictEqual(file);
    expect(input.files).toHaveLength(1);
  }
});
