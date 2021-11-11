import React from 'react';
import { arrayMoveImmutable } from 'array-move';
import useLocalStorage from './useLocalStorage';
import { v4 as uuidv4 } from 'uuid';

const useTodoState = (initTodo) => {
  const [todoes, setTodoes] = useLocalStorage('todoList', initTodo);
  return {
    todoes,
    addToTodoes: (todo) => {
      setTodoes((prev) => [
        ...prev,
        { todo: todo, id: uuidv4(), completed: false },
      ]);
    },

    deleteTodo: (id) => {
      setTodoes((prev) => prev.filter((t) => t.id !== id));
    },

    editTodo: (id, newTodo) => {
      const updateTodo = todoes.map((todo) =>
        todo.id === id ? { ...todo, todo: newTodo } : todo
      );
      setTodoes(updateTodo);
    },
    onSortEnd: ({ oldIndex, newIndex }) => {
      setTodoes((prev) => arrayMoveImmutable(prev, oldIndex, newIndex));
    },
  };
};

export default useTodoState;
