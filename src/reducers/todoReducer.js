import { v4 as uuidv4 } from 'uuid';
import { arrayMoveImmutable } from 'array-move';

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [
        ...state,
        { todo: action.newTodo, id: uuidv4(), completed: false },
      ];
    case 'DELETE':
      return state.filter((t) => t.id !== action.id);
    case 'EDIT':
      return state.map((t) =>
        t.id === action.id ? { ...t, todo: action.newTodo } : t
      );
    case 'SORT': {
      return arrayMoveImmutable(state, action.oldIndex, action.newIndex);
    }
    default:
      return state;
  }
};

export default todoReducer;

// addToTodoes: (todo) => {
//   setTodoes((prev) => [
//     ...prev,
//     { todo: todo, id: uuidv4(), completed: false },
//   ]);
// },

// deleteTodo: (id) => {
//   setTodoes((prev) => prev.filter((t) => t.id !== id));
// },

// editTodo: (id, newTodo) => {
//   const updateTodo = todoes.map((todo) =>
//     todo.id === id ? { ...todo, todo: newTodo } : todo
//   );
//   setTodoes(updateTodo);
// },
// onSortEnd: ({ oldIndex, newIndex }) => {
//   setTodoes((prev) => arrayMoveImmutable(prev, oldIndex, newIndex));
// },
// };
