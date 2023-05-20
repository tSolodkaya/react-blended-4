import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://64677a582ea3cae8dc303143.mockapi.io/api/v1';

export const fetchTodos = createAsyncThunk(
  'todos/fetchAll',
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get('/todos');

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addTodo = createAsyncThunk(
  'todo/addTodo',
  async (todo, thunkApi) => {
    try {
      const { data } = await axios.post('/todos', todo);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteTodo = createAsyncThunk(
  'todo/deleteTodo',
  async (id, thunkApi) => {
    try {
      const { data } = await axios.delete(`/todos/${id}`);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
