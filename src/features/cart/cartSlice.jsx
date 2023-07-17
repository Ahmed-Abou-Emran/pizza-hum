import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },
    deleteFromCart: (state, action) => {
      state.cart = state.cart.filter(
        (cartItem) => cartItem.pizzaId !== action.payload.pizzaId
      );
      console.log(action.payload.pizzaId);
      console.log('deleteFromCart');
    },
    // TODO: reuse this code in increaseQuantity and
    // decreaseQuantity since they are very similar
    increaseQuantity: (state, action) => {
      state.cart = state.cart.map((cartItem) => {
        if (cartItem.PizzaId === action.payload.PizzaId) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        }
        return cartItem;
      });
    },

    decreaseQuantity: (state, action) => {
      state.cart = state.cart.map((cartItem) => {
        if (cartItem.pizzaId === action.payload.pizzaId) {
          return { ...cartItem, quantity: cartItem.quantity - 1 };
        }
        return cartItem;
      });
    },

    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const {
  addToCart,
  deleteFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
