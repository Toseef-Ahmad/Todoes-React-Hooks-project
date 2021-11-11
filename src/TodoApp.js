import React, { useContext } from 'react';
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import Grid from '@mui/material/Grid';
import useTodoState from './hooks/useTodoState';
import { TodoContext } from './contexts/todoesContext';

const TodoApp = (props) => {
  const { dispatch } = useContext(TodoContext);
  return (
    <Paper style={{ height: '100vh', backgroundColor: '#fafafa' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography>TodoApp</Typography>
        </Toolbar>
      </AppBar>

      <Grid container style={{ justifyContent: 'center', margin: '50px 0' }}>
        <Grid item xs={11} md={6} lg={4}>
          <TodoForm />
          <TodoList
            onSortEnd={({ oldIndex, newIndex }) =>
              dispatch({ type: 'SORT', oldIndex: oldIndex, newIndex: newIndex })
            }
            distance={10}
            axis="y"
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default TodoApp;
