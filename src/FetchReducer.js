
import { createSlice } from '@reduxjs/toolkit';

export const inputSlice = createSlice({
  name: 'input',
  initialState: {
    number: 0,
  },
  reducers: {
    setNumber: (state, action) => {
      state.number = action.payload;
    },
  },
});

export const { setNumber } = inputSlice.actions;
export default inputSlice.reducer;
