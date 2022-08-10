import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Button from "../button/button-comp";
import CartItem from "../cart-item/cart-item-comp";

import {
  selectCartItems,
  selectCartState,
} from "../../store/cart/cart-selector";
import { setCartState } from "../../store/cart/cart-action";

import "./cart-display-styles.scss";

const CartDisplay = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();
  const cartState = useSelector(selectCartState);

  const goToCheckOut = () => {
    dispatch(setCartState(!cartState));
    navigate("/checkout");
  };

  return (
    <div className="cart-display-container">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => {
            return <CartItem key={item.id} cartItem={item} />;
          })
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>

      <Button onClick={goToCheckOut} children="Check-out" />
    </div>
  );
};

export default CartDisplay;
