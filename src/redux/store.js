import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsList/slice';
import { filterReducer } from './filter/slice';
import { authReducer } from './auth/slice';
import { persistReducer, persistStore, PERSIST } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const persistedAuthReducer = persistReducer(authConfig, authReducer);

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    auth: persistedAuthReducer,
  },
  middleware(getDefaultMiddleware) {
    const defaultMiddleware = getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST],
      },
    });

    return [...defaultMiddleware];
  },
});

export const persistor = persistStore(store);
