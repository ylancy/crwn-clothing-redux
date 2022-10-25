import { createSelector } from 'reselect';

export const selectCartItems = (state) => state.cart.cartItems;

export const selectCount = createSelector(selectCartItems,
    items => items.reduce((count, item) => count + item.quantity, 0))

export const selectTotal = createSelector(selectCartItems,
    items => items.reduce((total, item) => total + item.quantity * item.price, 0))

export const selectCartOpen = (state) => state.cart.cartOpen;