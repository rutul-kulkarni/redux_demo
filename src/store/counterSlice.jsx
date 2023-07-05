import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",

  initialState: {
    count: 0,
  },

  reducers: {
    increaseCounter: (state, action) => {
      state.count += 1;
    },

    decreaseCounter: (state, action) => {
      state.count -= 1;
    },

    increaseCounterBy: (state, action) => {
      state.count += action.payload;
    },

    decreaseCounterBy: (state, action) => {
      state.count -= action.payload;
    },
  },
});

export default counterSlice.reducer;

export const {
  increaseCounter,
  decreaseCounter,
  increaseCounterBy,
  decreaseCounterBy,
} = counterSlice.actions;
