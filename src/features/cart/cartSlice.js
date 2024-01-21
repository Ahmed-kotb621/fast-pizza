import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'one',
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    clearCart(state) {
      state.cart = [];
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseCartQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseCartQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);

      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;

      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
    },
  },
});

export const {
  addItem,
  clearCart,
  deleteItem,
  increaseCartQuantity,
  decreaseCartQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
