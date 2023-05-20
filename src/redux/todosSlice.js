import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  // Имя слайса
  name: 'todos',
  // Начальное состояние редюсера слайса
  initialState: { items: [] },
  // Объект редюсеров
  reducers: {
    addTodo(state, action) {
      state.items.push(action.payload);
    },
    deleteTodo(state, action) {
      state.items = state.items.filter(todo => todo.id !== action.payload);
    },
    toggleCompleted(state, action) {},
  },
});

// Генераторы экшенов
export const { addTodo, deleteTodo, toggleCompleted } = todosSlice.actions;
// Редюсер слайса
export const todosReducer = todosSlice.reducer;
