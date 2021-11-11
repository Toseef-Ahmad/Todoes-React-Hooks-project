import React, { useContext } from 'react';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import Todo from './Todo';
import Divider from '@mui/material/Divider';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import { TodoContext } from './contexts/todoesContext';

const TodoList = (props) => {
  const { state } = useContext(TodoContext);
  return (
    <>
      <Paper>
        <List>
          {state.map((todo, i) => (
            <>
              <Todo
                key={todo.id}
                todo={todo.todo}
                completed={todo.completed}
                id={todo.id}
                // editTodo={editTodo}
                // deleteTodo={deleteTodo}
                index={i}
              />
              {i < state.length - 1 && <Divider />}
            </>
          ))}
        </List>
      </Paper>
    </>
  );
};

export default SortableContainer(TodoList);
