import { CART_ACTION_TYPES } from "./cart-actions";

const CART_INITIAL_STATE = {
    cartItems: [],
    cartOpen: false,
}

export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
    const { type, payload } = action;
    switch (type) {
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return { ...state, cartItems: payload }
        case CART_ACTION_TYPES.SET_CART_OPEN:
            return { ...state, cartOpen: payload }
        default:
            return state;
    }
}