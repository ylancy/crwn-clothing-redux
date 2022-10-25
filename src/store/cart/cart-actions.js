import { creationAction } from "../../untilities/reducer/reducer.util";

export const CART_ACTION_TYPES = {
    SET_CART_ITEMS: 'SET_CART_ITEMS',
    SET_CART_OPEN: 'SET_CART_OPEN',
}

const addToCart = (cartitems, productToAdd) => {
    const existingCartItem = cartitems.find((cartitem) => cartitem.id === productToAdd.id)

    if (existingCartItem) {
        return cartitems.map((cartitem) => cartitem.id === productToAdd.id ?
            { ...cartitem, quantity: cartitem.quantity + 1 } : cartitem)
    }

    return [...cartitems, { ...productToAdd, quantity: 1 }];
};

const removeFromCart = (cartitems, cartiitemToRemove) => {
    const existingCartItem = cartitems.find((cartitem) => cartitem.id === cartiitemToRemove.id);

    if (existingCartItem.quantity === 1) {
        return cartitems.filter((cartitem) => cartitem.id !== cartiitemToRemove.id)
    }

    return cartitems.map((cartitem) => cartitem.id === cartiitemToRemove.id ?
        { ...cartitem, quantity: cartitem.quantity - 1 } : cartitem)
}

const clearFromCart = (cartitems, cartitemToClear) => {
    return cartitems.filter((cartitem) => cartitem.id !== cartitemToClear.id)
}

export const addItemToCart = (cartItems, productToAdd) => {
    const newCartItems = addToCart(cartItems, productToAdd);
    return creationAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}
export const removeItemFromCart = (cartItems, cartitemToRemove) => {
    const newCartItems = removeFromCart(cartItems, cartitemToRemove);
    return creationAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}
export const clearItemFromCart = (cartItems, cartitemToClear) => {
    const newCartItems = clearFromCart(cartItems, cartitemToClear);
    return creationAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}

export const setCartOpen = (boolean) => creationAction(CART_ACTION_TYPES.SET_CART_OPEN, boolean)