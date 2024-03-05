//counterSlice.jsx

'use client'; //this is a client side component

import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const counter = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
