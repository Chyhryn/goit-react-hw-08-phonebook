import { createSlice } from '@reduxjs/toolkit';
import { createUser, logIn, logOut, refreshUser } from 'redux/operations';

const initialAuthState = {
  user: { name: '', email: '' },
  token: '',
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const handleRejected = (state, action) => {
  state.error = action.payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  extraReducers: builder =>
    builder
      .addCase(createUser.pending, state => state)
      .addCase(createUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(createUser.rejected, handleRejected)
      .addCase(logIn.pending, state => state)
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(logIn.rejected, handleRejected)
      .addCase(logOut.pending, state => state)
      .addCase(logOut.fulfilled, (state, action) => {
        state.user = { name: '', email: '' };
        state.token = '';
        state.isLoggedIn = false;
        state.error = null;
      })
      .addCase(logOut.rejected, handleRejected)
      .addCase(refreshUser.pending, state => state)
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
      }),
});

export const authReducer = authSlice.reducer;
