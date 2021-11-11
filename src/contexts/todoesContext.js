import React, { createContext, useReducer } from 'react';
import useTodoState from '../hooks/useTodoState';
import todoReducer from '../reducers/todoReducer';

const hardCodeTodes = [
  { todo: 'Learn JavaScript', id: 1, completed: true },
  { todo: 'Learn Html', id: 2, completed: true },
  { todo: 'Learn React', id: 3, completed: false },
];

export const TodoContext = createContext();

export const TodoProvider = (props) => {
  // const todoesStuff = useTodoState(
  //   JSON.parse(localStorage.getItem('todoList')) || hardCodeTodes
  // );
  const [state, dispatch] = useReducer(todoReducer, hardCodeTodes);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {props.children}
    </TodoContext.Provider>
  );
};
