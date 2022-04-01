import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const mainPageSlice = createSlice({
  name: 'mainPage',
  initialState,
  reducers: {
    doSomething: (state, action) => {
      console.log('state>>>', state);
      console.log('action>>>', action);
    },
  },
});

export const { doSomething } = mainPageSlice.actions;
