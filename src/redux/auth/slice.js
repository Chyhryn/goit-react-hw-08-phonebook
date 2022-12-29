import { createSlice } from '@reduxjs/toolkit';
import { createUser, logIn, logOut } from 'redux/operations';

const initialAuthState = {
  user: {},
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
  extraReducers: {
    [createUser.rejected]: handleRejected,
    [logIn.rejected]: handleRejected,
    [logOut.rejected]: handleRejected,
    [createUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.error = null;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.error = null;
    },
    [logOut.fulfilled](state) {
      state = initialAuthState;
    },
  },
});

export const authReducer = authSlice.reducer;
