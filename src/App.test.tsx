import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { TodoComponent } from './components/Todo';

test('renders todo form', () => {
  render(<App />);
  const todoField = screen.getByTestId("todo-field");
  expect(todoField).toBeInTheDocument();

  const submitButton = screen.getByTestId("submit-todo");
  expect(submitButton).toBeInTheDocument();
});

test('should add todo item', () => {
  render(<App />);
  const todoField = screen.getByTestId("todo-field");
  const submitButton = screen.getByTestId("submit-todo");

  fireEvent.change(todoField, { target: { value: "Learn React" } });
  fireEvent.click(submitButton);

  fireEvent.change(todoField, { target: { value: "Learn to write component test" } });
  fireEvent.click(submitButton);

  const todoItem1 = screen.getByTestId("todo-item-1");
  const todoItem2 = screen.getByTestId("todo-item-2");

  expect(todoItem1).toBeInTheDocument();
  expect(todoItem2).toBeInTheDocument();
});
