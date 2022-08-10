import CART_ACTION_TYPES from "./cart-types";

//helper functions

const addCartItem = (cartItems, productToAdd) => {
  const existingProduct = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingProduct) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, productToDelete) => {
  const existingProduct = cartItems.find(
    (cartItem) => cartItem.id === productToDelete.id
  );

  if (existingProduct.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToDelete.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === productToDelete.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, ProductToClear) => {
  return cartItems.filter((cartItem) => cartItem.id !== ProductToClear.id);
};

//Action Creators!!

export const setCartState = (boolean) => ({
  type: CART_ACTION_TYPES.SET_CART_STATE,
  payload: boolean,
});

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return { type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: newCartItems };
};

export const removeItemFromCart = (cartItems, productToDelete) => {
  const newCartItems = removeCartItem(cartItems, productToDelete);
  return { type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: newCartItems };
};

export const clearItemFromCart = (cartItems, ProductToClear) => {
  const newCartItems = clearCartItem(cartItems, ProductToClear);
  return { type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: newCartItems };
};
