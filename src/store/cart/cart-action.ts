import {CART_ACTION_TYPES, Product} from "./cart-types";

import { CategoryItem } from "../categories/category-types";

import { Action, ActionWithPayload } from "../../utils/reducer/reducer-utils";

//helper functions

const addCartItem = (cartItems: Product[], productToAdd: CategoryItem): Product[] => {
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



const removeCartItem = (cartItems: Product[], productToDelete: Product): Product[] => {
  const existingProduct = cartItems.find(
    (cartItem) => cartItem.id === productToDelete.id
  );

  if (existingProduct && existingProduct.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToDelete.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === productToDelete.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems: Product[], ProductToClear: Product): Product[] => {
  return cartItems.filter((cartItem) => cartItem.id !== ProductToClear.id);
};

//Action Creators and respective types!!

export type SetCartState = ActionWithPayload<CART_ACTION_TYPES.SET_CART_STATE, boolean>;

export type SetCartItems = ActionWithPayload<CART_ACTION_TYPES.SET_CART_ITEMS, Product[]>;

export type CartActions = SetCartState | SetCartItems

export const setCartState = (boolean: boolean): SetCartState => ({
  type: CART_ACTION_TYPES.SET_CART_STATE,
  payload: boolean,
});

export const addItemToCart = (cartItems: Product[], productToAdd: CategoryItem) : SetCartItems => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return { type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: newCartItems };
};

export const removeItemFromCart = (cartItems: Product[], productToDelete: Product) : SetCartItems => {
  const newCartItems = removeCartItem(cartItems, productToDelete);
  return { type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: newCartItems };
};

export const clearItemFromCart = (cartItems: Product[], ProductToClear: Product) : SetCartItems => {
  const newCartItems = clearCartItem(cartItems, ProductToClear);
  return { type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: newCartItems };
};
