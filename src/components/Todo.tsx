import React from "react";
import { Todo } from "../App";

/* create the prop types by merging the Todo types and other expected props from the App component */
type TodoProps = Todo & {
  deleteTodo: (id: number) => void,
  toggleDone: (id: number) => void,
};

//define the Todo Component
export const TodoComponent = ({
  id,
  todo,
  isDone,
  appendToDataTestId,
  deleteTodo,
  toggleDone,
}: TodoProps) => {
  return (
    <li
      className={isDone ? "todo done" : "todo"}
      onClick={() => toggleDone(id)}
      data-testid={`todo-item-${appendToDataTestId}`}
    >
      <div>
        <p>{todo}</p>
      </div>
      <button data-testid={`delete-todo-${appendToDataTestId}`} onClick={() => deleteTodo(id)}>delete</button>
    </li>
  );
};