import { createSlice } from '@reduxjs/toolkit';

const read = () => JSON.parse(localStorage.getItem('cart'));
const write = (state) => localStorage.setItem('cart', JSON.stringify(state.list));

const initialState = { list: read() ?? [] };

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {

    addAction(state, { payload }) {
      const target = state.list.find(({ id }) => id === payload);
      if (target) {
        target.count++;
      } else {
        state.list.push({ id: payload, count: 1 });
      }
      write(state);
    },

    removeAction(state, { payload }) {
      const targetIndex = state.list.findIndex(({ id }) => id === payload);
      if (targetIndex >= 0) {
        state.list.splice(targetIndex, 1);
      }
      write(state);
    },

    incr(state, { payload }) {
      state.list.find(({ id }) => id === payload).count++
      write(state);
    },

    decr(state, { payload }) {
      const target = state.list.find(({ id }) => id === payload);
      if (target.count === 1) {
        state.list.filter(item => item !== target);
      } else {
        target.count--;
      }
      write(state);
    },

    clear(state) {
      state.list = [];
      write(state);
    }
  }
});

export const { addAction, removeAction, incr, decr, clear } = cartSlice.actions;
export default cartSlice.reducer;
