import { fireEvent, render, screen, within } from '@testing-library/react';
import App from './App';

test('should render todo form', () => {
  render(<App />);
  const todoField = screen.getByTestId("todo-field");
  expect(todoField).toBeInTheDocument();

  const submitButton = screen.getByTestId("submit-todo");
  expect(submitButton).toBeInTheDocument();
});

test('should add / delete todo item', () => {
  render(<App />);
  const todoField = screen.getByTestId("todo-field");
  const submitButton = screen.getByTestId("submit-todo");

  fireEvent.change(todoField, { target: { value: "Learn React" } });
  fireEvent.click(submitButton);

  const todoItem1 = screen.getByTestId("todo-item-1");
  const deleteTodoButton1 = within(todoItem1).getByTestId("delete-todo-1");

  expect(todoItem1).toBeInTheDocument();
  expect(deleteTodoButton1).toBeInTheDocument();

  fireEvent.click(deleteTodoButton1);
  expect(todoItem1).not.toBeInTheDocument();
});
