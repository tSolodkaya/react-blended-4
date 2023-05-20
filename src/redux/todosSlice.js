import { createSlice } from '@reduxjs/toolkit';
import { addTodo, deleteTodo, fetchTodos } from './operations';

const todosSlice = createSlice({
  // Имя слайса
  name: 'todos',
  // Начальное состояние редюсера слайса
  initialState: { items: [] },

  extraReducers: {
    [fetchTodos.fulfilled](state, action) {
      state.items = action.payload;
    },
    [addTodo.fulfilled](state, action) {
      state.items.push(action.payload);
    },
    [deleteTodo.fulfilled](state, action) {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
  },
});

export const todosReducer = todosSlice.reducer;
