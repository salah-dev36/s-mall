import { createSelector } from "reselect";

import { RootState } from "../store";
import { CartState } from "./cart-reducer";

const selectCartReducer = (state: RootState): CartState => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const selectCartState = createSelector(
  [selectCartReducer],
  (cart) => cart.cartState
);

export const selectItemsCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((total, item) => total + item.quantity, 0)
);

export const selectTotalCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (cartTotal, item) => cartTotal + item.price * item.quantity,
    0
  )
);
