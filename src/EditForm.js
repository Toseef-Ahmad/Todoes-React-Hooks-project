import React, { useContext } from 'react';
import useInput from './hooks/useInput';
import useToggle from './hooks/useToggle';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { blue } from '@mui/material/colors';
import { TodoContext } from './contexts/todoesContext';

const EditForm = ({ id, toggleEdit, todo }) => {
  const [value, handleChange, reset] = useInput(todo);
  const { dispatch } = useContext(TodoContext);

  const edit = (e) => {
    e.preventDefault();
    dispatch({ type: 'EDIT', id: id, newTodo: value });
    toggleEdit();
  };
  return (
    <>
      <form onSubmit={edit}>
        <TextField
          variant="standard"
          value={value}
          onChange={handleChange}
          margin="normal"
          label="Add New Todo"
          autoFocus
        />
        <IconButton
          style={{
            backgroundColor: blue[100],
            color: blue[500],
          }}
          onClick={toggleEdit}
        >
          <CloseIcon />
        </IconButton>
      </form>
    </>
  );
};

export default EditForm;
