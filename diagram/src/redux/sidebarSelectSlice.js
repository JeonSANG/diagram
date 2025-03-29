import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  item: null,
};

const sidebarSelectSlice = createSlice({
  name: 'sidebarSeletReducer',
  initialState,
  reducers: {
    clickItem: (state, action) => {
      state.item = action.payload;
    },
  },
});

export const { clickItem } = sidebarSelectSlice.actions;

export default sidebarSelectSlice.reducer;