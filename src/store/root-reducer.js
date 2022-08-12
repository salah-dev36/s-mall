import { userReducer } from "./user/user-reducer";
import { categoriesReducer } from "./categories/category-reducer";
import { cartReducer } from "./cart/cart-reducer";

import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer,
});
