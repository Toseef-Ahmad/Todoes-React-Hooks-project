import React, { useContext } from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import useToggle from './hooks/useToggle';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import EditForm from './EditForm';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import { TodoContext } from './contexts/todoesContext';

const Todo = ({ todo, completed, editTodo, id }) => {
  const [check, toggleCheck] = useToggle(completed);
  const [edit, toggleEdit] = useToggle(false);
  const { dispatch } = useContext(TodoContext);
  return (
    <>
      <ListItem>
        {edit ? (
          <EditForm
            // editTodo={editTodo}
            id={id}
            toggleEdit={toggleEdit}
            todo={todo}
          />
        ) : (
          <>
            <Checkbox checked={check} color="error" onChange={toggleCheck} />
            <ListItemText
              style={{ textDecoration: check ? 'line-through' : 'none' }}
            >
              {todo}
            </ListItemText>
            <IconButton
              aria-label="Delete"
              onClick={() => dispatch({ type: 'DELETE', id: id })}
            >
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label="Edit" onClick={toggleEdit}>
              <EditIcon />
            </IconButton>
          </>
        )}
      </ListItem>
    </>
  );
};

export default SortableElement(Todo);
