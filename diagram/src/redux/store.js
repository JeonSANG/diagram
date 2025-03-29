import { configureStore } from '@reduxjs/toolkit';
import sidebarSelectSlice from './sidebarSelectSlice';

const store = configureStore({
  reducer: {
    sidebarSelectState: sidebarSelectSlice,
  },
});

export default store;