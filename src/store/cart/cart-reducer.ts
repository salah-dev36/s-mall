import { CART_ACTION_TYPES, Product } from "./cart-types";

import { CartActions } from "./cart-action";

export type CartState = {
  readonly cartState: boolean;
  readonly cartItems: Product[]
}

const CART_INITIAL_STATE: CartState = {
  cartState: false,
  cartItems: [],
};

export const cartReducer = (state = CART_INITIAL_STATE, action = {} as CartActions) : CartState => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: payload,
      };
    case CART_ACTION_TYPES.SET_CART_STATE:
      return {
        ...state,
        cartState: payload,
      };
    default:
      return state;
  }
};
