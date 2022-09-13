import { CategoryItem } from "../categories/category-types";

export enum CART_ACTION_TYPES {
  SET_CART_ITEMS = "cart/SET_CART_ITEMS",
  SET_CART_STATE = "cart/SET_CART_STATE"
}

export type Product = CategoryItem & {
  quantity: number;
}

