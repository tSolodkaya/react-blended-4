import { createSlice } from '@reduxjs/toolkit';
import { addTodo, deleteTodo, fetchTodos } from './operations';

const todosSlice = createSlice({
  // Имя слайса
  name: 'todos',
  // Начальное состояние редюсера слайса
  initialState: { items: [], isLoading: false, error: null },

  extraReducers: {
    [fetchTodos.pending](state) {
      state.isLoading = true;
    },
    [fetchTodos.fulfilled](state, action) {
      state.items = action.payload;
      state.isLoading = false;
    },
    [fetchTodos.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [addTodo.pending](state) {
      state.isLoading = true;
    },
    [addTodo.fulfilled](state, action) {
      state.items.push(action.payload);
      state.isLoading = false;
    },
    [addTodo.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [deleteTodo.pending](state) {
      state.isLoading = true;
    },
    [deleteTodo.fulfilled](state, action) {
      state.items = state.items.filter(item => item.id !== action.payload.id);
      state.isLoading = false;
    },
    [deleteTodo.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const todosReducer = todosSlice.reducer;
