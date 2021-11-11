import React, { createContext } from 'react';
import useTodoState from '../hooks/useTodoState';

const hardCodeTodes = [
  { todo: 'Learn JavaScript', id: 1, completed: true },
  { todo: 'Learn Html', id: 2, completed: true },
  { todo: 'Learn React', id: 3, completed: false },
];

export const TodoContext = createContext();

export const TodoProvider = (props) => {
  const todoesStuff = useTodoState(
    JSON.parse(localStorage.getItem('todoList')) || hardCodeTodes
  );
  return (
    <TodoContext.Provider value={todoesStuff}>
      {props.children}
    </TodoContext.Provider>
  );
};
