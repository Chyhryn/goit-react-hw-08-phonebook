import { createSlice } from '@reduxjs/toolkit';
import { createUser, login } from 'redux/operations';

const initialAuthState = {
  user: {},
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const handleRejected = (state, action) => {
  state.isLoggedIn = false;
  state.error = action.payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  extraReducers: {
    [createUser.rejected]: handleRejected,
    [login.rejected]: handleRejected,
    [createUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.isLoggedIn = true;
      state.error = null;
    },
    [login.fulfilled](state, action) {
      state.user = action.payload.user;
      state.isLoggedIn = true;
      state.error = null;
    },
  },
});

export const authReducer = authSlice.reducer;
