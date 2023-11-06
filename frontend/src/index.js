import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import authReducer from "./state";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";
const FLUSH = 'persist/FLUSH';
const REHYDRATE = 'persist/REHYDRATE';
const PAUSE = 'persist/PAUSE';
const PERSIST = 'persist/PERSIST';
const PURGE = 'persist/PURGE';
const REGISTER = 'persist/REGISTER';
const persistConfig = { key: "root", storage, version: 1 };
const persistedReducer = persistReducer(persistConfig, authReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

//"C:\Users\Arjit\OneDrive\Desktop\SOCIOPEDIA\client\node_modules\color-name\.eslintrc.json"