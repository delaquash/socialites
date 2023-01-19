import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import authReducers from './state/authSlice';
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { BrowserRouter } from "react-router-dom";
import { persistStore, FLUSH, persistReducer,PERSIST, PAUSE, REHYDRATE, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";


const persistConfig = { key: "root", storage, version: 1};
const persistedReducer =persistReducer(persistConfig, authReducers);
const store = configureStore({
  reducer: persistedReducer,
    middleware: (getefaultMiddleware) => 
     getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, REGISTER, PAUSE, PERSIST, PURGE]
      }
     }) 
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
      <React.StrictMode>
        <Provider store={store}>
          <PersistGate persistor={persistStore(store)} loading={null}>
            <App />
          </PersistGate>
        </Provider>
      </React.StrictMode>,
  </BrowserRouter>
)
