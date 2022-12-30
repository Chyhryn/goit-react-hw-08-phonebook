import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorisation = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorisation = '';
  },
};

export const createUser = createAsyncThunk(
  'user/createUser',
  async (user, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', user);
      token.set(response.data.token);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logIn = createAsyncThunk('user/login', async (user, thunkAPI) => {
  try {
    const response = await axios.post('/users/login', user);
    token.set(response.data.token);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const logOut = createAsyncThunk('user/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    token.unset();
    return;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const refreshUser = createAsyncThunk(
  'user/refreshUser',
  async (_, thunkAPI) => {
    const { token } = thunkAPI.getState().auth;
    console.log(token);
    if (!token) return thunkAPI.rejectWithValue('No valid token!');

    token.set(token);
    try {
      const response = await axios.get('/users/current');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
