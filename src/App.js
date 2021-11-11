import React from 'react';
import './style.css';
import TodoApp from './TodoApp';
import { TodoProvider } from './contexts/todoesContext';

export default function App() {
  return (
    <TodoProvider>
      <TodoApp />
    </TodoProvider>
  );
}
