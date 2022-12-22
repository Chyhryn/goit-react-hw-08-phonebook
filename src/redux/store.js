import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsList/slice';
import { filterReducer } from './filter/slice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
