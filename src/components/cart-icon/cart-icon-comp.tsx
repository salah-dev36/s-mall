import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { ReactComponent as CartImg } from "../../assets/cart.svg";
import "./cart-icon-styles.scss";

import {
  selectCartState,
  selectItemsCount,
} from "../../store/cart/cart-selector";
import { setCartState } from "../../store/cart/cart-action";

const CartIcon = () => {
  const dispatch = useDispatch();

  const cartState = useSelector(selectCartState);
  const itemsNumber = useSelector(selectItemsCount);

  const toggleCart = () => {
    dispatch(setCartState(!cartState));
  };

  return (
    <div className="cart-icon-container" onClick={toggleCart}>
      <CartImg className="cart-img" />
      <span className="item-count">{itemsNumber}</span>
    </div>
  );
};

export default CartIcon;
