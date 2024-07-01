// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import typingTestReducer from './features/typingTestSlice';

const store = configureStore({
  reducer: {
    typingTest: typingTestReducer,
  },
});

export default store;
