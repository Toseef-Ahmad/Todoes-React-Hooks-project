import React, { useContext } from 'react';
import useInput from './hooks/useInput';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import { TodoContext } from './contexts/todoesContext';

const TodoForm = (props) => {
  const [todo, updateTodo, resetTodo] = useInput();
  // const { addToTodoes } = props;
  const { addToTodoes } = useContext(TodoContext);

  const addNewTodo = (e) => {
    e.preventDefault();
    addToTodoes(todo);
    resetTodo();
  };
  return (
    <Paper style={{ marginBottom: '10px', padding: '0 10px' }}>
      <form onSubmit={addNewTodo}>
        <TextField
          variant="standard"
          value={todo}
          onChange={updateTodo}
          fullWidth
          margin="normal"
          label="Add New Todo"
        />
      </form>
    </Paper>
  );
};

export default TodoForm;
