import { createSlice } from '@reduxjs/toolkit';
import { createUser, login } from 'redux/operations';

const initialState = {
  user: {},
  isLoading: false,
  isRefreshing: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [createUser.pending]: handlePending,
    [createUser.rejected]: handleRejected,
    [login.pending]: handlePending,
    [login.rejected]: handleRejected,
    [createUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.isLoading = false;
      state.error = null;
    },
    [login.fulfilled](state, action) {
      state.user = action.payload.user;
      state.isLoading = false;
      state.error = null;
    },
  },
});

export const authReducer = authSlice.reducer;
